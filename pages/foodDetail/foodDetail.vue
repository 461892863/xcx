<template>
	<view class="foodBox">
		<view class="footImg">
			<swiper class="swiper" indicator-dots=true indicator-color="#ccc" indicator-active-color="#fff">
				<swiper-item>
					<image :src="imgUrl + footData.imgUrl" mode='aspectFill'></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="footDetail">
			<view class="name">
				<text>{{footData.name}}</text>
			</view>
			<view class="sellCount" style="font-size: 1em;">
				<text>月售{{footData.sellNum}}单</text>
			</view>
			<view class="score">
				<uniRate style="display:inline-block;" v-if="flag" :value="getLevel()" size="15" disabled="true"></uniRate> <text>{{footData.level}}</text>
			</view>
			<view @tap="toPraise();" style="position:absolute;right: 1rem;border-radius: .2rem;padding: .3rem;background: #0A98D5;color:#fff;">评价菜品</view>
			<view class="price">
				<text style="font-weight: bold;font-size: 1.3em;">￥{{footData.price}}</text> <text class="mark" v-if="footData.sign">{{footData.sign}}</text>
				<!-- <cartcontrol style="display: inline-block;float: right;margin: 5upx 20upx 0 0;" :food="food" @add="addCart()" @dec="decreaseCart"></cartcontrol> -->
			</view>
			<view class="introduction">
				{{footData.body}}
			</view>
		</view>
		<view class="assess">
			<text class="moreAssess" @tap="moreAssess(footData.id)">查看更多评价 ></text>
			<view class="uni-comment-list" v-for="(assess, index) in footData.comments" :key="index">
				<view class="uni-comment-face">
					<image :src="assess.headerPortrait?assess.headerPortrait:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png'"
					 mode="widthFix"></image>
				</view>
				<view class="uni-comment-body" style="position: relative;">
					<view class="uni-comment-top">
						<text>{{assess.userName?assess.userName:'匿名用户'}}</text>
						<uniRate :value="assess.commentLevel" style="margin-bottom:.5rem;" size="10" disabled="true"></uniRate>
						<block v-if="assess.isLike == 1">
							<view style="display: flex;align-items: center;color:#999;">
								<image style="width:1rem;height:1rem;margin-right: 10upx;" src="../../static/goodActive.png" mode=""></image>赞了该商品
							</view>
						</block>
						<block v-else-if="assess.isLike == 0" >
							<view style="display: flex;align-items: center;color:#999;">
								<image style="width:1rem;height:1rem;margin-right: 10upx;" src="../../static/nogoodActive.png" mode=""></image>踩了该商品
							</view>
						</block>
						<block v-else>
							<text></text>
						</block>
					</view>
					<!-- 	<view style="position: absolute;bottom: .5rem;right: .5rem;">
						<image style="width:15px;height: 15px;margin-right: 10upx;" src="../../static/del.png" mode=""></image>
					</view> -->
					<view class="uni-comment-date">
						<text  style="color:#666">{{assess.commentDate}}</text>
					</view>
					<view style="clear: both;margin: 80upx 0 20upx;">
						<view class="uni-comment-content">{{assess.body}}</view>
						<view v-if="assess.replay" class="sjhf">
							<text>商家回复：</text>{{assess.replay}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import cartcontrol from '@/components/cartcontrol.vue'
	import uniRate from '../../components/uni-rate.vue'
	export default {
		data() {
			return {
				imgUrl: 'https://sinomach.wxzhixun.com/images/', //图片接口
				footData: {},
				flag: false,
				id: '',
				dayId: '',
				food: {
					"name": "小米粥",
					"price": 9.8,
					"oldPrice": "",
					"description": "食材：小米",
					"sellCount": 239,
					"img": '../../static/xiaomi.jpg',
					count: 0,
				},
			}
		},
		components: {
			cartcontrol,
			uniRate
		},
		onLoad(e) {
			this.token = sessionStorage.getItem('token')
			// console.log(e)
			this.id = e.id
			this.dayId = e.dayId
			this.init(e.id, e.dayId)
		},
		methods: {
			//去评价
			toPraise() {
				var foodName = this.footData.name
				var imgPic = this.imgUrl + this.footData.imgUrl
				uni.navigateTo({
					url: '../assess/assess?foodId=' + this.id + '&foodName=' + foodName + '&imgPic=' + imgPic,
					animationType: 'slide-in-right',
					animationDuration: 200
				});
			},

			getLevel() { // 评星
				// console.log(this.footData.level)
				return this.footData.level
			},
			init(id, dayId) {
				let that = this
				uni.showLoading({
					mask: true
				})
				uni.request({
					url: this.nowUrl + '/foods/find',
					header: {
						'token': this.token
					},
					data: {
						id: id,
						weekId: dayId
					},
					success(res) {
						console.log(res)
						that.footData = res.data.data
						that.flag = true
						// console.log(that.footData)
						uni.hideLoading()
					}
				})
			},
			addCart: function(item) { // 加
				// console.log('ev', JSON.stringify(item))
				if (item.count >= 0) {
					item.count++
					this.food.count = item.count
				} else {
					//	console.log('add')
				}
			},
			decreaseCart(item) { //减
				if (item.count) {
					item.count--
					this.food.count = item.count
				}
			},
			moreAssess(id) { // 更多评价
				uni.navigateTo({
					url: '../moreAssess/moreAssess?id=' + this.id + '&dayId=' + this.dayId,
					animationType: 'slide-in-right',
					animationDuration: 200
				})
			}
		}
	}
</script>

<style>
	.footImg {
		width: 100vw;
	}

	.swiper {
		height: 50vh;
	}

	.swiper image {
		width: 100%;
		height: 100%;
	}

	.mark {
		padding: 4upx 6upx;
		background: #5d5d5d;
		color: #fff;
		font-size: 0.7em;
		margin-left: 15upx;
		border-radius: 15upx;
		position: relative;
		left: 25upx;
		bottom: 7upx;
	}

	.footDetail {
		font-size: 0.8em;
		overflow: hidden;
		border-bottom: 2upx solid rgb(173, 173, 173);
	}

	.footDetail .name {
		font-weight: bold;
		margin: 15upx 30upx;
	}

	.footDetail .sellCount {
		font-size: 0.7em;
		color: #c6c6c6;
		margin: 0upx 30upx;
	}

	.footDetail .score {
		margin: 0upx 30upx 20upx;
		line-height: 1;
	}

	.footDetail .score text {
		font-size: 0.7em;
		position: relative;
		top: 10upx;
		left: 20upx;
	}

	.footDetail .price {
		margin: 0upx 30upx;
	}

	.introduction {
		font-size: 0.8rem;
		color: rgb(138, 138, 138);
		margin: 15px;
	}

	.uni-padding-wrap {
		padding: 30upx;
	}

	view {
		font-size: 28upx;
	}

	.uni-comment {
		padding: 5rpx 0;
		display: flex;
		flex-grow: 1;
		flex-direction: column;
	}

	.uni-comment-list {
		flex-wrap: nowrap;
		padding: 10rpx 0;
		margin: 10rpx 0;
		width: 100%;
		display: flex;
	}

	.uni-comment-face {
		width: 70upx;
		height: 70upx;
		border-radius: 100%;
		margin-right: 20upx;
		flex-shrink: 0;
		overflow: hidden;
	}

	.uni-comment-face image {
		width: 100%;
		border-radius: 100%;
	}

	.uni-comment-body {
		width: 100%;
	}

	.uni-comment-top {
		line-height: 1.5em;
		justify-content: space-between;
		float: left;
	}

	.uni-comment-top text {
		color: #0A98D5;
		font-size: 24upx;
	}

	.uni-comment-date {
		line-height: 38upx;
		flex-direction: row;
		justify-content: space-between;
		display: flex !important;
		float: right;
		flex-grow: 1;
	}

	.uni-comment-date view {
		color: #666666;
		font-size: 24upx;
		line-height: 38upx;
	}

	.uni-comment-content {
		line-height: 1.6em;
		font-size: 28upx;
		padding: 8rpx 0;
		float: left;
		margin-bottom: 15upx;
	}

	.uni-comment-replay-btn {
		background: #FFF;
		font-size: 24upx;
		line-height: 28upx;
		padding: 5rpx 20upx;
		border-radius: 30upx;
		color: #333 !important;
		margin: 0 10upx;
	}

	.assess {
		padding: 0 20upx;
	}

	.moreAssess {
		margin-top: 15upx;
		float: right;
		color: rgb(188, 188, 188);
		font-size: 0.8em;
	}

	.sjhf {
		padding: 15upx;
		background: #ccc;
		clear: both;
		border-radius: 5upx;
		position: relative;
	}

	.sjhf text {
		color: #007AFF;
	}

	.sjhf:after {
		content: "";
		position: absolute;
		top: -15upx;
		left: 15upx;
		border: 20upx solid transparent;
		border-bottom-color: #ccc;
		border-top: 0;
		margin: 0 0 0upx 0px;
	}
</style>
