<template>
	<view class="assess">
		<view class="assessList">
			<view class="" style="display: flex;height: 200upx;">
				<view class="left" style="border-radius: 15upx;overflow: hidden;">
					<image :src="imgPic" mode="aspectFill"></image>
				</view>
				<view class="right">
					<view>{{foodName}}</view>
					<uniRate :value="level" @change="change" size="20" style="margin: 30upx 0;"></uniRate>
					<view style="display: flex;color: #f1f1f1;">
						<view style="display: flex;align-items: center;" @tap="setZan(1)" :class="{zanActive: isLike == 1}">
							<block v-if="isLike == 1">
								<image style="width:1.2rem;height:1.2rem;margin-right: 10upx;" src="../../static/goodActive.png" mode=""></image>
							</block>
							<block v-else>
								<image style="width:1.2rem;height:1.2rem;margin-right: 10upx;" src="../../static/good.png" mode=""></image>
							</block>赞
						</view>
						<view style="display: flex;align-items: center;margin-left: 25upx;" :class="{zanActive: isLike == 0}" @tap="setZan(0)">
							<block v-if="isLike == 0">
								<image style="width:1.2rem;height:1.2rem;margin-right: 10upx;" src="../../static/nogoodActive.png" mode=""></image>
							</block>
							<block v-else>
								<image style="width:1.2rem;height:1.2rem;margin-right: 10upx;" src="../../static/nogood.png" mode=""></image>
							</block>
						踩
						</view>
					</view>

				</view>
			</view>
			<input type="text" placeholder="请输入您的评价" v-model="praiseBody">
		</view>
		<!-- <view style="font-size: 0.9em;margin-top: 20upx;">
			<label class="radio" @tap="setRadio" style="margin-left: 15upx;">
				<radio checked :value="item.name" :checked="ifChecked" /> 匿名提交评价
			</label>
		</view> -->
		<view class="btns" style="margin-top: 1rem;">
			<button type="primary" @tap="toAssessSuccess()">提交评价</button>
		</view>
	</view>
</template>

<script>
	import uniRate from '../../components/uni-rate.vue'
	export default {
		data() {
			return {
				isLike: 1,
				imgPic: '',
				level: '',
				foodName: '大白菜',
				ifChecked: false,
				isHidden: 0,
				praiseBody: "", //评价内容
				// imgUrl: 'http://106.15.194.58/images/', //图片接口
				assessData: [],
				orderId: '',
				foods: [],
				item: {
					name: 'false',
					checked: false
				}
			}
		},
		components: {
			uniRate
		},
		onLoad(e) {
			this.token = sessionStorage.getItem('token')
			this.id = e.foodId
			this.imgPic = e.imgPic
			this.foodName = e.foodName
			// this.req(e.foodId)
		},
		methods: {
			setRadio() {
				this.ifChecked = !this.ifChecked
			},
			toAssessSuccess() {
				let that = this
				
				// console.log(this.foods)
				var data = JSON.stringify({
					id: this.id,
					level: this.level, //
					body: this.praiseBody, //评价内容
					isLike: this.isLike,
				})
				uni.request({
					url: this.nowUrl + '/foods/comment/saveComment',
					header: {
						contentType: 'application/json',
						'token': this.token
					},
					method: 'POST',
					data: data,
					success(res) {
						if (res.data.code == 200) {
							uni.navigateTo({
								url: '../AssessSuccess/AssessSuccess?id=' + that.orderId,
								animationDuration: 200,
								animationType: 'slide-in-right'
							})
						} else {
							uni.showToast({
								title: '请完善评价',
								duration: 1500,
								mask: true
							})
						}
					}
				})
			},
			req(id) {
				let that = this
				uni.request({
					url: this.nowUrl + '/foods/myOrder/find?id=' + id,
					method: 'GET',
					header: {
						'token': this.token
					},
					success(res) {
						let assessData = res.data.data
						let len = assessData.foods.length
						for (let i = 0; i < len; i++) {
							assessData.foods[i].level = 0
							assessData.foods[i].value = ''
							// 封装obj
							let obj = {
								id: '',
								level: '',
								isLike: '',
								body: ''
							}
							obj.id = assessData.foods[i].foodId //�� id
							obj.level = assessData.foods[i].level // 星星
							obj.isLike = -1 // zan
							obj.body = assessData.foods[i].value
							that.foods.push(obj)
						}
						that.assessData = assessData
						// console.log(that.assessData.foods)
						// console.log(that.foods)
					}
				})
			},
			change(data) { //更改星星数量
				// this.level = data.value
				this.level = data.value
				// console.log(this.foods)
			},
			setZan(isLike) {
				// console.log(index,isLike)
				this.isLike = isLike
				// console.log(this.foods[index].isLike )
			}
		}
	}
</script>

<style>
	.assessList {
		width: 100vw;
		padding: 15upx;
		border-bottom: 1upx solid #888888;
	}

	.right .zanActive {
		color: rgb(255, 202, 62)
	}

	.left {
		flex: 4;
	}

	.left image {
		width: 100%;
		height: 100%;
	}

	.right {
		flex: 6;
		overflow: hidden;
		margin-left: 20upx;
	}

	.assessList input {
		padding: 3upx 0;
		margin-top: 15upx;
	}

	.right text {
		color: rgb(236, 236, 236);
	}

	.btns {
		text-align: center;
	}

	.btns button {
		width: 40vw;
		background: rgb(149, 149, 149);
		display: inline-block;
		margin: 15upx 15upx 0;
	}
</style>
