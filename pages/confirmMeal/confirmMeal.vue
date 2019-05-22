<template>
	<view>
		<view class="success">
			<view class="image">
			</view>
			<view class="text">
				<text style="font-weight: bold;">取餐成功</text><br>
				<text class="text">祝您用餐愉快</text>
			</view>
		</view>
		<view class="btns">
			<button type="primary" @tap="toAssess()">点击进行评价</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: 'http://106.15.194.58/images/', //图片接口
				id: ''
			}
		},
		onLoad(e) {
			this.id = e.id
		},
		methods: {
			toAssess(){
				uni.navigateTo({
					url:'../assess/assess?id='+ this.id,
					animationDuration:200,
					animationType:'slide-in-right'
				})
			}
		}
	}
</script>

<style>
.success{
	width: 100vw;
	text-align: center;
	justify-content: center;
	overflow: hidden;
	margin: 40upx 0;
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
	vertical-align: middle;
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
