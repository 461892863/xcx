<template>
	<view class="assess">
		<view class="assessList">
			<view class="footImg">
				<swiper class="swiper" indicator-dots=true indicator-color="#ccc" indicator-active-color="#fff">
					<swiper-item>
						<image src="../../static/niu.jpg" mode='aspectFill'></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="" style="display: flex;min-height: 100upx;width: 100vw;text-align: center;font-weight: bold;border-bottom: 2upx solid #CCCCCC;line-height: 100upx;">
				<text style="margin-left: 20upx;">{{name}}</text>
			</view>
			<view class="" v-for="(lis, index) in asserssList" :key="index">
				<view style="margin:15upx;color: #333333;font-size: 0.8em;">
					<view style="width: 100vw;height: 60upx;display:flex;aligh-items:center;justify-content: flex-start;position: relative;">
						<view style="width: 50upx;height: 50upx;border-radius: 50%;background: #ccc;margin-bottom: 15upx;overflow: hidden;">
							<block v-if="url !== ''">
								<image :src="imgUrl+url" mode="aspectFill" style="width: 100%;height: 100%;"></image>
							</block>
							<block v-else>
								<image src="../../static/logo.png" mode="aspectFill" style="width: 100%;height: 100%;"></image>
							</block>
						</view>
						<text style="margin-left: 20upx;"> 用户 </text>
						<uniRate :value="lis.commentLevel" size="10" style="margin: 30upx 0;display: inline-block;position: relative;right: -15upx;top: -20upx;"
						 disabled="true"></uniRate>
						<view style="color: #ccc;position: absolute;right: 45upx;font-size: 0.7em;display: inline-block;line-height: 50upx;">{{lis.commentDate}}</view>
					</view>
					<view style="clear: both;margin: 0 0 30upx;">
						<text style="margin-left: 15upx;">{{lis.body}}</text>
						<block v-if="assess.isLike == 1">
							<view style="display: flex;align-items: center;margin-top:10upx">
								<image style="width:1.2rem;height:1.2rem;margin-right: 10upx;" src="../../static/goodActive.png" mode=""></image>赞了该商品
							</view>
						</block>
						<block v-else-if="assess.isLike == 0">
							<view style="display: flex;align-items: center;margin-top:10upx">
								<image style="width:1.2rem;height:1.2rem;margin-right: 10upx;" src="../../static/nogoodActive.png" mode=""></image>踩了该商品
							</view>
						</block>
						<block v-else>
							<text style="float: right;margin-right: 30upx;"></text>
						</block>
					</view>
				</view>
				<view class="sjhf">
					<text>商家回复：</text> 哈哈哈哈哈哈哈
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from '../../components/uni-rate.vue'
	export default {
		data() {
			return {
				id: '',
				name: '',
				url: '',
				asserssList: []
			}
		},
		components: {
			uniRate
		},
		onLoad(e) {
			
			this.token = sessionStorage.getItem('token')
			this.name = e.name
			this.url = e.url
			this.id = e.id
			this.req()
		},
		methods: {
			req() {
				uni.request({
					url: this.nowUrl + '/foods/comment?id=' + this.id,
					header: {
						'token': this.token
					},
					success: (res) => {
						this.asserssList = res.data.data.list
					}
				})
			},
			toAssessSuccess() {
				uni.navigateTo({
					url: '../AssessSuccess/AssessSuccess',
					animationDuration: 200,
					animationType: 'slide-in-right'
				})
			}
		}
	}
</script>

<style>
	.footImg {
		width: 100vw;
		height: 40vh;
	}

	.swiper {
		height: 100%;
	}

	.swiper image {
		width: 100%;
		height: 100%;
	}

	.assessList {
		width: 100vw;
		border-bottom: 1upx solid #888888;
		padding: 15upx 0;
	}

	.left {
		flex: 4;
		margin-left: 15upx;
	}

	.left image {
		width: 100%;
		height: 100%;
	}

	.right {
		flex: 6;
		overflow: hidden;
		margin-left: 20upx;
		margin-right: 15upx;
	}

	.assessList input {
		padding: 3upx 0;
		margin-top: 15upx;
	}

	.right text {
		color: #ccc;
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

	.sjhf {
		width: 90vw;
		padding: 15upx;
		background: rgba(238, 227, 227, 1);
		clear: both;
		margin: 0 auto;
		border-radius: 5upx;
		position: relative;
		font-size: 0.8em;
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
		border-bottom-color: rgba(238, 227, 227, 1);
		border-top: 0;
		margin: 0 0 0upx 0px;
	}
</style>
