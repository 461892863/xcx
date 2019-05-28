<template>
	<view class="moreAssess" style="overflow: hidden;">
		<view class="assessMark" style="margin: 20upx 0;">
			<view class="list" @tap="req('')">
				全部
			</view>
			<view class="list" @tap="req(4)">
				满意
			</view>
			<view class="list" @tap="req()">
				不满意
			</view>
		</view>
		<view class="assess">
			<view class="uni-comment-list" v-for="(assess, index) in footData" :key="index">
			    <view class="uni-comment-face">
			        <image :src="assess.headerPortrait?assess.headerPortrait:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png'" mode="widthFix"></image>
			    </view>
			    <view class="uni-comment-body">	
			        <view class="uni-comment-top">
			            <text>{{assess.userName?assess.userName:'匿名用户'}}</text>
						<uniRate :value="assess.commentLevel" size="10" disabled="true"></uniRate>
						<block v-if="assess.isLike == 1">
							<text>👍 赞了该商品</text>
						</block>
						<block v-else-if="assess.isLike == 0">
							<text>👎 踩了该商品</text>
						</block>
						<block v-else>
							<text></text>
						</block>
			        </view>
			        <view class="uni-comment-date">
			            <text style="color: rgb(165,165,165);">{{assess.commentDate}}</text>
			        </view>
					<view style="clear: both;margin: 80upx 0 20upx;">
						<view class="uni-comment-content">{{assess.body}}</view>
						<view class="sjhf">
							<text>商家回复：</text>{{assess.replay}}
						</view>
					</view>
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
				dayId: '',
				// level:'',
				isBody:0,
				pageNumber:1,
				pageSize:20,
				footData: []
			}
		},
		components:{
			uniRate
		},
		onLoad(e) {
			// console.log(e)
			this.id = e.id
			this.dayId = e.dayId
			this.req('')
		},
		methods: {
			req(level){
				let that = this
				uni.request({
					url:this.nowUrl + '/foods/comment',
					header:{
						'token':this.token
					},
					data:{
						id: this.id,
						level: level,
						isBody:this.isBody,
						pageNumber:this.pageNumber,
						pageSize:this.pageSize
					},
					success(res) {
						// console.log(res)
						that.footData = res.data.data.list
						that.flag = true
						console.log(that.footData)
						uni.hideLoading()
					}
				})
			}
		}
	}
</script>

<style>
.assessMark{
	width: 100vw;
	overflow: hidden;
}
.list{
	float: left;
	padding: 10upx 15upx;
	background: rgb(198,198,198);
	color: #2b2b2b;
	margin: 0 15upx;
	border-radius: 5upx;
	font-size: 0.8em;
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
.assess{
	margin-top: 20upx;
	padding: 0 20upx;
}
.sjhf{
	clear: both;
	background: rgb(198,198,198);
	color: #2b2b2b;
	font-size: 0.8em;
	padding: 15upx;
	border-radius: 5upx;
	position: relative;
}
.sjhf:after{
	content:"";
	position:absolute;
	bottom:0;
	left:20upx; 
	border:20upx solid transparent;
	border-bottom-color: rgb(198,198,198);
	border-top:0; 
	margin:0 0 60upx -20upx;
}
</style>
