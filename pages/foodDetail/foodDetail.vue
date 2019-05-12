<template>
	<view class="foodBox">
		<view class="footImg">
			<swiper class="swiper" indicator-dots=true indicator-color="#ccc" indicator-active-color="#fff">
				 <swiper-item>
					 <image src="../../static/niu.jpg" mode='aspectFill'></image>
				 </swiper-item>
			</swiper>
		</view>
		<view class="footDetail">
			<view class="name">
				<text>{{food.name}}</text>
			</view>
			<view class="sellCount">
				<text>月售{{food.sellCount}}单</text>
			</view>
			<view class="score">
				<uniRate style="display: inline-block;" value="4.5" size="10" disabled="true"></uniRate> <text>4.5</text>
			</view>
			<view class="price">
				<text style="font-weight: bold;font-size: 1.3em;">￥{{food.price}}</text> <text class="mark">推荐</text>
				<cartcontrol style="display: inline-block;float: right;margin: 5upx 20upx 0 0;" :food="food" @add="addCart()" @dec="decreaseCart"></cartcontrol>
			</view>
			<view class="introduction">
				啊手机打开拉合法按时打卡接受打爱的色放啊十大科技
			</view>
		</view>
		<view class="assess">
			<text class="moreAssess" @tap="moreAssess()">查看更多评价 ></text>
			<view class="uni-comment-list">
			    <view class="uni-comment-face">
			        <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
			    </view>
			    <view class="uni-comment-body">
			        <view class="uni-comment-top">
			            <text>匿名用户</text>
						<uniRate value="4.5" size="10" disabled="true"></uniRate>
						<text>👍 赞了该商品</text>
			        </view>
			        <view class="uni-comment-date">
			            <text style="color: rgb(165,165,165);">08/10 08:12</text>
			        </view>
			        <view class="uni-comment-content">很酷的HBuilderX和uni-app，开发一次既能生成小程序，又能生成App</view>
			    </view>
			</view>
			<view class="uni-comment-list">
			    <view class="uni-comment-face">
			        <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
			    </view>
			    <view class="uni-comment-body">
			        <view class="uni-comment-top">
			            <text>匿名用户</text>
						<uniRate value="4.5" size="10" disabled="true"></uniRate>
						<text>👍 赞了该商品</text>
			        </view>
			        <view class="uni-comment-date">
			            <text style="color: rgb(165,165,165);">08/10 08:12</text>
			        </view>
			        <view class="uni-comment-content">很酷的HBuilderX和uni-app，开发一次既能生成小程序，又能生成App</view>
			    </view>
			</view>
			<view class="uni-comment-list">
			    <view class="uni-comment-face">
			        <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
			    </view>
			    <view class="uni-comment-body">
			        <view class="uni-comment-top">
			            <text>匿名用户</text>
						<uniRate value="4.5" size="10" disabled="true"></uniRate>
						<text>👍 赞了该商品</text>
			        </view>
			        <view class="uni-comment-date">
			            <text style="color: rgb(165,165,165);">08/10 08:12</text>
			        </view>
			        <view class="uni-comment-content">很酷的HBuilderX和uni-app，开发一次既能生成小程序，又能生成App</view>
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
				food: {
					"name": "小米粥",
					"price": 9.8,
					"oldPrice": "",
					"description": "食材：小米",
					"sellCount": 239,
					"img": '../../static/xiaomi.jpg',
					count: 0
				},
			}
		},
		components:{
			cartcontrol,
			uniRate
		},
		methods: {
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
			moreAssess(){ // 更多评价
				uni.navigateTo({
					url: '../moreAssess/moreAssess',
					animationType:'slide-in-right',
					animationDuration: 200
				})
			}
		}
	}
</script>

<style>
.footImg{
	width: 100vw;
}
.swiper{
	height: 50vh;
}
.swiper image{
	width: 100%;
	height: 100%;
}
.mark{
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
.footDetail{font-size: 0.8em; overflow: hidden; border-bottom: 2upx solid rgb(173,173,173);}
.footDetail .name{
	font-weight: bold;
	margin: 15upx 30upx;
}
.footDetail .sellCount{
	font-size: 0.7em;
	color: #c6c6c6;
	margin: 0upx 30upx;
}
.footDetail .score{
	margin: 0upx 30upx 20upx;
	line-height: 1;
}
.footDetail .score text{
	font-size: 0.7em;
	position: relative;
	top: 10upx;
	left: 20upx;
}
.footDetail .price{
	margin: 0upx 30upx;
}
.introduction{
	font-size: 0.9em;
	color: rgb(138,138,138);
	margin: 20upx 10%;
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
	float: right;
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
.assess{
	padding: 0 20upx;
}
.moreAssess{
	margin-top: 15upx;
	float: right;
	color: rgb(188,188,188);
	font-size: 0.8em;
}
</style>
