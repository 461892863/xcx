<template>
	<view class="moreAssess" style="overflow: hidden;">
		<view class="assessMark" style="margin: 20upx 0;">
			<view :class="current===''?'active':''" class="list" @tap="req('','choose')">
				全部
			</view>
			<view :class=" current===4?'active':''" class="list" @tap="req(4,'choose')">
				满意
			</view>
			<view :class=" current===0?'active':''" class="list" @tap="req(0,'choose')">
				不满意
			</view>
			<view style="font-size: 0.9em;margin-left: 20upx;">
				<label class="radio" @tap="setRadio" style="margin-left: 15upx;display: flex;align-items: center;">
					<radio :checked="ifChecked" /> 只看有内容
				</label>
			</view>
		</view>

		<view class="assess">
			<view class="uni-comment-list" v-for="(assess, index) in footData" :key="index">
				<view class="uni-comment-face">
					<image :src="assess.headerPortrait?assess.headerPortrait:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png'"
					 mode="widthFix"></image>
				</view>
				<view class="uni-comment-body" style="position: relative;">
					<view class="uni-comment-top">
						<text>{{assess.userName?assess.userName:'匿名用户'}}</text>
						<uniRate :value="assess.commentLevel" size="10" disabled="true"></uniRate>
						<block v-if="assess.isLike == 1">
							<view style="display: flex;align-items: center;">
								<image style="width:1.2rem;height:1.2rem;margin-right: 10upx;" src="../../static/good.png" mode=""></image>赞了该商品
							</view>
						</block>
						<block v-else-if="assess.isLike == 0">
							<view style="display: flex;align-items: center;margin-left: 25upx;">
								<image style="width:1.2rem;height:1.2rem;margin-right: 10upx;" src="../../static/nogood.png" mode=""></image>踩
							</view>
						</block>
						<block v-else>
							<text></text>
						</block>
					</view>
					<!--  -->
					<view v-if="assess.del ==true" style="position: absolute;bottom: .5rem;right: .5rem;" @tap="delComment(index,assess.commentId)">
						<image style="width:15px;height: 15px;margin-right: 10upx;" src="../../static/del.png" mode=""></image>
					</view>
					<view class="uni-comment-date">
						<text style="color: rgb(165,165,165);">{{assess.commentDate}}</text>
					</view>
					<view style="clear: both;margin: 80upx 0 20upx;">
						<view class="uni-comment-content">{{assess.body}}</view>
						<view v-if="assess.replay" class="sjhf">
							<text>商家回复：</text>{{assess.replay}}
						</view>
					</view>
				</view>
			</view>
			<loadMore :loadingType="loadingType" :contentText="contentText"></loadMore>
		</view>
	</view>
</template>

<script>
	import uniRate from '../../components/uni-rate.vue'
	import loadMore from '../../components/loadeMore.vue'
	var _self, timer = null;

	export default {
		data() {
			return {
				ifChecked: true,
				flag: true,
				current: '',
				id: '',
				dayId: '',
				// level:'',
				isBody: 0,
				pageNumber: 1,
				pageSize: 7,
				footData: [],
				loadingText: '加载中...',
				loadingType: 0, //定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
				contentText: {
					contentdown: '上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				}
			}
		},
		components: {
			uniRate,
			loadMore
		},
		onReachBottom: function() {

			if (this.flag === true) {
				this.pageNumber++
				_self.req(this.current, '');
			} else {

			}

		},
		onLoad(e) {
			this.token = sessionStorage.getItem('token')
			// console.log(e)
			_self = this
			this.id = e.id
			this.dayId = e.dayId
			this.req(this.current, '')
		},
		methods: {
			setRadio() {
				this.ifChecked = !this.ifChecked
				if (this.ifChecked == true) {
					this.isBody = 1
				} else {
					this.isBody = 0
				}
				this.footData = []
				this.pageNumber = 1
				this.req(this.current);
			},
			//删除评论
			delComment(index, commentId) {
				var that = this;
				var data = JSON.stringify({
					infoId: this.id,
					commentId: commentId,
				})
				uni.showModal({
					title: '提示',
					content: '确定删除该评论吗?',
					success: function(res) {
						if (res.confirm) {
							uni.request({
								url: that.nowUrl + '/foods/comment/removeComment?infoId=' + that.id + '&commentId=' + commentId,
								header: {
									// 'contentType':'application/x-www-form-unlencoded',
									'token': that.token
								},
								method: "POST",
								// data: data,
								success(res) {
									if (res.data.code == 200) {
										uni.showToast({
											duration: 1000,
											content: '删除成功',
										})
										that.footData.splice(index, 1)
									} else {
										uni.showToast({
											duration: 1000,
											content: '失败',
										})
									}
								},
								fail() {
									uni.showToast({
										duration: 1000,
										content: '失败',
									})
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});



			},

			req(level, choosed) {
				if (choosed === 'choose') {
					this.footData = []
					this.pageNumber = 1
				}
				let that = this
				this.current = level
				that.loadingType = 1
				uni.showNavigationBarLoading(); //显示加载动画
				uni.request({
					url: this.nowUrl + '/foods/comment',
					header: {
						'token': this.token
					},
					data: {
						id: this.id,
						level: this.current,
						isBody: this.isBody,
						pageNumber: this.pageNumber,
						pageSize: this.pageSize
					},
					success(res) {
						console.log(res.data.data.list);
						if (res.data.data.list.length < that.pageSize) {
							that.flag = false
							that.loadingType = 2
						} else {
							that.flag = true
							that.loadingType = 1
						}
						that.footData = that.footData.concat(res.data.data.list)
						uni.hideNavigationBarLoading();
						// console.log(that.footData)
						uni.hideLoading()
					}
				})
			}
		}
	}
</script>

<style>
	.assessMark {
		width: 100vw;
		overflow: hidden;
	}

	.list {
		float: left;
		padding: 10upx 15upx;
		/* background: rgb(198,198,198); */
		background: #eee;
		color: #2b2b2b;
		margin: 0 15upx;
		border-radius: 5upx;
		font-size: 0.8em;
	}

	.list.active {
		background: rgb(198, 198, 198);
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
		margin-top: 20upx;
		padding: 0 20upx;
	}

	.sjhf {
		clear: both;
		background: rgb(198, 198, 198);
		color: #2b2b2b;
		font-size: 0.8em;
		padding: 15upx;
		border-radius: 5upx;
		position: relative;
	}

	.sjhf:after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 20upx;
		border: 20upx solid transparent;
		border-bottom-color: rgb(198, 198, 198);
		border-top: 0;
		margin: 0 0 60upx -20upx;
	}
</style>
