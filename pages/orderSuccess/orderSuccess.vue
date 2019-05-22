<template>
	<view>
		<view class="success">
			<view class="image">
			</view>
			<view class="text">
				<text>预计12:00准备完成</text>
			</view>
		</view>
		<view class="btns">
			<button type="primary" @tap="toIndex">返回首页</button>
			<button type="primary" @tap="toOrder">查看订单</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toIndex(){
				uni.switchTab({
					url:'../index/index'
				})
			},
			toOrder(){
				uni.switchTab({
					url:'../order/order'
				})
			}
		}
	}
</script>

<style>
.success{
	width: 100vw;
	height: 20vh;
	line-height: 20vh;
	text-align: center;
	justify-content: center;
	overflow: hidden;
	
}
.success .image{
	width: 25vw;
	height: 25vw;
	background: url(../../static/success.png) 0 0 no-repeat; 
	background-size: 100% 100%;
	display: inline-block;
	margin-right: 15upx;
	vertical-align: middle;
}
.success .text{
	display: inline-block;
	font-size: 0.9em;
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
