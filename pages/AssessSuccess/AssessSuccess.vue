<template>
	<view>
		<view class="success">
			<view class="image">
			</view>
			<view class="text">
				<text style="font-weight: bold;">评价成功</text><br>
				<text class="text">您的评价将是其他用户选购前的重要参考</text>
			</view>
		</view>
		<view class="btns">
			<!-- <button type="primary" @tap="toOrder()">评价其他订单</button><br> -->
			<button type="primary" @tap="toAssessOrder()">返回首页</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: 'http://106.15.194.58/images/', //图片接口
				orderId: ''
			}
		},
		onLoad(e) {
			this.token = sessionStorage.getItem('token')
			this.orderId = e.id
		},
		methods: {
			toOrder() {
				uni.switchTab({
					url: '../order/order'
				})
			},
			toAssessOrder() {
				uni.switchTab({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style>
	.success {
		width: 100vw;
		text-align: center;
		justify-content: center;
		overflow: hidden;
		margin: 40upx 0;
	}

	.success .image {
		width: 15vw;
		height: 15vw;
		background: url(../../static/success.png) 0 0 no-repeat;
		background-size: 100% 100%;
		display: inline-block;
		margin-right: 15upx;
		vertical-align: middle;
	}

	.success .text {
		display: inline-block;
		font-size: 0.9em;
		text-align: left;
		vertical-align: middle;
	}

	.btns {
		text-align: center;
	}

	.btns button {
		width: 45vw;
		background: rgb(149, 149, 149);
		display: inline-block;
		margin: 15upx 15upx 0;
	}
</style>
