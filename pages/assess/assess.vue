<template>
	<view class="assess">
		<view class="assessList"  v-for="(list,index) in assessData.foods" :key="index">
			<view class="" style="display: flex;height: 200upx;">
				<view class="left">
					<image :src="imgUrl + list.imgUrl" mode="aspectFill"></image>
				</view>
				<view class="right">
					<view>{{list.name}}</view>
					<uniRate :value="list.level" :index='index' @change="change" size="20" style="margin: 30upx 0;"></uniRate>
					<text @tap="setZan(index,1)" :class="{zanActive: foods[index].isLike == 1}">👍 赞</text> 
					<text style="margin-left: 15upx;" :class="{zanActive: foods[index].isLike == 0}" @tap="setZan(index,0)">👎 踩</text>
				</view>
			</view>
			<input type="text" placeholder="您的评价将显示在该商品的评价列表" @change="setValue(index,list.value)" value="list.value" v-model="assessData.foods[index].value">
		</view>
		<view class="btns">
			<button type="primary" @tap="toAssessSuccess()">提交评价</button>
		</view>
	</view>
</template>

<script>
	import uniRate from '../../components/uni-rate.vue'
	export default {
		data() {
			return {
				imgUrl: 'http://106.15.194.58/images/', //图片接口
				assessData: [],
				orderId: '',
				foods: []
			}
		},
		components:{
			uniRate
		},
		onLoad(e) {
			this.orderId = e.id
			this.req(e.id)
		},
		methods: {
			toAssessSuccess(){
				let that = this
				// console.log(this.foods)
				uni.request({
					url:this.nowUrl+ '/foods/comment/saveOrderComment',
					header:{
						'token': this.token
					},
					method:'POST',
					data:{
						orderId: this.orderId,
						foods: this.foods
					},
					success(res) {
						if(res.data.code == 200){
							uni.navigateTo({
								url:'../AssessSuccess/AssessSuccess?id='+that.orderId,
								animationDuration:200,
								animationType:'slide-in-right'
							})
						}else{
							uni.showToast({
								title:res.data.msg,
								duration:1000,
								mask:true
							})
						}
					}
				})
			},
			req(id){
				let that = this
				uni.request({
					url: this.nowUrl + '/foods/myOrder/find?id='+id,
					method: 'GET',
					header:{
						'token':this.token
					},
					success(res) {
						let assessData = res.data.data
						let len = assessData.foods.length
						for(let i = 0; i<len; i++){
							assessData.foods[i].level = 0
							assessData.foods[i].value = ''
							// 封装obj
							let obj = {
								id: '',
								level:'',
								isLike: '',
								body: ''
							}
							obj.id = assessData.foods[i].foodId //�� id
							obj.level =assessData.foods[i].level // 星星
							obj.isLike = -1 // zan
							obj.body = assessData.foods[i].value
							that.foods.push(obj)
						}
						that.assessData  = assessData
						// console.log(that.assessData.foods)
						// console.log(that.foods)
					}
				})
			},
			change(data){ //更改星星数量
				this.assessData.foods[data.index].level  = data.value
				this.foods[data.index].level = data.value
				// console.log(this.foods)
			},
			setValue(index,value){ //评价内容
				this.foods[index].body = value
			},
			setZan(index, isLike){
				// console.log(index,isLike)
				this.foods[index].isLike = isLike
				// console.log(this.foods[index].isLike )
			}
		}
	}
</script>

<style>
.assessList{
	width: 100vw;
	padding: 15upx;border-bottom: 1upx solid #888888;
}
.right .zanActive{
	color:rgb(255, 202, 62)
}
.left{
	flex: 4;
}
.left image{
	width: 100%;
	height: 100%;
}
.right{
	flex: 6;
	overflow: hidden;
	margin-left: 20upx;
}
.assessList input{
	padding: 3upx 0;
	margin-top: 15upx;
}
.right text{
	color: rgb(236, 236, 236);
}
.btns{
	text-align: center;
}
.btns button{
	width: 40vw;
	background: rgb(149,149,149);
	display: inline-block;
	margin: 15upx 15upx 0;
}
</style>