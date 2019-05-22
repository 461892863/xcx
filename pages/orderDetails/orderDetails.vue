<template>
	<view class="orderDetail">
		<view style="margin: 15upx 0 15upx 15upx;font-weight: bold;font-size: 0.8em;">菜品信息</view>
		<view class="detail">
			<view class="detailList" v-for="(list, index) in detailList" :key="index">
				<view class="list">
					<text style="display:block">{{list.name}}</text>
					<text style="display:block;color: #909090;">{{list.num}}份</text>
				</view>
				<view class="list" style="color: #909090;">
					x{{list.num}}
				</view>
				<view class="list">
					￥{{list.price}}
				</view>
			</view>
		</view>
		<view class="money">
			合计：￥{{money}}
		</view>
		<view style="margin: 15upx 0 15upx 15upx;font-weight: bold;font-size: 0.8em;">订单信息</view>
		<view class="detail" style="border: 0;max-height: 35vh;">
			<view class="detailList" :class="{toRight:list.type == 1}" v-for="(list, _index) in orderDetails" :key="_index" style="border-top:1upx solid #c6c6c6;padding: 20upx 0;">
				<view class="list" style="flex: 3;text-align: left;">
					<text style="display:block">{{list.name}}</text>
				</view>
				<view class="list" style="flex:7;text-align:left;" @tap="write(list.type,_index)">
					<block v-if="list.type == 1">
						<input class="writeInput" type="text" placeholder="list.value" v-model="list.newValue"/>
					</block>
					<block v-else>
						<text class="writeInput">{{list.value}}</text>
					</block>
				</view>
			</view>
		</view>
		<button type="primary" class="btn" @tap="success">确认预定</button>
	</view>
</template>

<script>
	import orderType from '../../common/public.js'
	export default {
		data() {
			return {
				theTime:'',
				imgUrl: 'http://106.15.194.58/images/', //图片接口
				detailList: [],
				money: '' ,
				orderDetails: [
					{
						name: '订单号',
						value: '',
						newValue: ''
					},
					{
						name: '用餐人数',
						value: '请输入用餐人数便于商家携带，默认1人',
						newValue: '',
						type: '1'
					},
					{
						name: '姓名',
						value: '请填写您的姓名',
						newValue: '',
						type: '1'
					},
					{
						name: '联系人号码',
						value: '请输入联系人号码',
						newValue: '',
						type: '1'
					},
					{
						name: '订单备注',
						value: '请输入备注信息',
						newValue: '',
						type: '1'
					}
				],
				orderInfo: null
			}
		},
		onLoad(e) {
			this.orderInfo = JSON.parse(e.dataInfo)
			// console.log(this.orderInfo)
			this.req()
		},
		onUnload() { //返回即删除订单
			// console.log('1130076650701029376')
			console.log(orderType.delOrderType)
			if(orderType.delOrderType){
				console.log(11)
				uni.request({
					url:this.nowUrl + '/foods/shopcar/remove?id='+ this.orderInfo.orderNum,
					header:{
						'token':this.token
					},
					method: 'POST',
					success(res) {
						// console.log(res)
					}
				})
			}
		},
		methods: {
			req(){
				let that = this
				uni.request({
					url: this.nowUrl + '/foods/myOrder/find',
					header:{
						'token':this.token
					},
					method: 'GET',
					data:{
						id: this.orderInfo.orderNum
					},
					success(res) {
						// console.log(res.data.data.foods)
						that.detailList = res.data.data.foods
						that.money =  res.data.data.priceAll
						that.orderDetails[0].value = res.data.data.orderNum //订单号
						that.orderDetails[1].newValue = 1 //人数
						that.orderDetails[2].newValue = res.data.data.userName //xingming
						that.orderDetails[3].newValue = res.data.data.mobile // 联系号码
					}
				})
			},
			write(type, index){ //输入框
				let that = this
				if(type == 1) {
					console.log(index)
				//	that.orderDetails[index].newValue
					// console.log(that.orderDetails)
				}
			},
			success(){ // 成功即跳转
				// console.log(this.orderDetails)
				let that = this
				uni.request({
					url:this.nowUrl + '/foods/shopcar/save',
					header:{
						'token':this.token
					},
					method:'POST',
					data:{
						orderNum: that.orderDetails[0].value,
						userName: that.orderDetails[2].newValue,
						peopleNum: that.orderDetails[1].newValue ,
						mobile: that.orderDetails[3].newValue,
						remarks:  that.orderDetails[4].newValue
					},
					success(res) {
						console.log(that.orderDetails[0].value, that.orderDetails[2].newValue, that.orderDetails[1].newValue, that.orderDetails[3].newValue, that.orderDetails[4].newValue)
						// console.log(res)
						debugger
						if(res.data.code == 200){
							uni.navigateTo({
								url:'../orderSuccess/orderSuccess?theTime='+res.data.data,
								animationType:'slide-in-right',
								animationDuration:200
							})
						}else{
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								duration:1000
							})
							return false
						}
					}
				})
			}
		}
	}
</script>

<style>
.detail{
	padding: 10upx 15upx;
	border-top: 6upx solid #c6c6c6;
	border-bottom: 6upx solid #c6c6c6;
	max-height: 35vh;
	overflow-y: auto;
}
.detailList{
	display: flex;
}
.list{
	flex: 1;
	text-align: center;
	color: #000;
	font-size: 0.8em;
}
.money{
	font-size: 0.8em;
	text-align: right;
	margin: 15upx 0;
	padding-right: 50upx;
	color: #fe4e37;
}
.toRight{
	background: url(../../static/r.png) 95% 50% no-repeat;
	background-size: auto 50%; 
}
.btn{
	width: 40vw;
	padding: 0;
	border-radius: 5upx;
	background: #8c8c8c;
	color: #fff;
	margin-top: 50upx;
}
.writeInput{
	display: block;width: 400upx;color:#7f7f7f;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
}
</style>
