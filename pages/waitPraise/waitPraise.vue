<template>
	<view class="mealBox">
		<view class="time">
			<view class="" style="margin-top: 50%;transform: translateY(-50%);">
				<text>{{makeTime.split(' ')[1]}}</text></br>
				<text style="color: #888888;font-size: 0.8em;">取餐时间</text>
			</view>
		</view>
		<view class="title">
			<view class="left">
				等待取餐
			</view>
			<view class="right">
				菜单已准备完成,请尽快前去取餐
			</view>
		</view>
		<view class="btn">
			<button type="primary" @tap="confirmMeal()">确认取餐</button>
		</view>
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
				<view class="detailList" :class="{toRight:list.type == 1}" style="border-top:1upx solid #c6c6c6;padding: 20upx 0;">
					<view class="list" style="flex: 3;text-align: left;">
						<text style="display:block">订单号</text>
					</view>
					<view class="list" style="flex:7;text-align:left;" @tap="write(list.type,_index)">
						<text class="writeInput">{{orderNum}}</text>
					</view>
				</view>
				<view class="detailList" :class="{toRight:list.type == 1}" style="border-top:1upx solid #c6c6c6;padding: 20upx 0;">
					<view class="list" style="flex: 3;text-align: left;">
						<text style="display:block">用餐人数</text>
					</view>
					<view class="list" style="flex:7;text-align:left;" @tap="write(list.type,_index)">
						<text class="writeInput">{{peopleNum}}</text>
					</view>
				</view>
				<view class="detailList" :class="{toRight:list.type == 1}" style="border-top:1upx solid #c6c6c6;padding: 20upx 0;">
					<view class="list" style="flex: 3;text-align: left;">
						<text style="display:block">联系人</text>
					</view>
					<view class="list" style="flex:7;text-align:left;" @tap="write(list.type,_index)">
						<text class="writeInput">{{userName}} {{mobile}}</text>
					</view>
				</view>
				<view class="detailList" :class="{toRight:list.type == 1}" style="border-top:1upx solid #c6c6c6;padding: 20upx 0;">
					<view class="list" style="flex: 3;text-align: left;">
						<text style="display:block">备注</text>
					</view>
					<view class="list" style="flex:7;text-align:left;" @tap="write(list.type,_index)">
						<text class="writeInput">{{remarks}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: 'https://sinomach.wxzhixun.com/images/', //图片接口
				detailList: [{
						name: '西红柿炒蛋',
						num: 2,
						cash: 15
					},
					{
						name: '西红柿炒蛋',
						num: 2,
						cash: 15
					},
					{
						name: '西红柿炒蛋',
						num: 2,
						cash: 15
					},
					{
						name: '西红柿炒蛋',
						num: 2,
						cash: 15
					},
					{
						name: '西红柿炒蛋',
						num: 2,
						cash: 15
					},
					{
						name: '西红柿炒蛋',
						num: 2,
						cash: 15
					},
					{
						name: '西红柿炒蛋',
						num: 2,
						cash: 15
					}
				],
				money: 0,
				orderNum: 0,
				peopleNum: 0,
				userName: '',
				mobile: '',
				remarks: '',
				orderId: '',
				makeTime: '',
				orderDetails: [{
						name: '订单号',
						value: '1321 1478 1478 4874 788'
					},
					{
						name: '用餐人数',
						value: '便于商家携带',
					},
					{
						name: '联系人',
						value: '张女士 13656564898',
					},
					{
						name: '订单备注',
						value: '多放辣椒少放盐多放辣椒少放盐多放辣椒少放盐多放辣椒少放盐',
					}
				]
			}
		},
		onLoad(e) {
			this.orderId = e.id;
			this.getOrderDetail(e.id);
		},
		methods: {
			confirmMeal() { // 确认取餐
				///foods/shopcar/accept
				uni.request({
					url: this.nowUrl + 'foods/shopcar/accept?id='+this.orderId,
					method: 'POST',
					header: {
						"content-type": "application/json",
						"token": this.token
					},
					success: (res) => {
						debugger
						runi.navigateTo({
							url: '../confirmMeal/confirmMeal',
							animationType: 'slide-in-right',
							animationDuration: 200
						});
						
					}
				})

			},
			//获取订单详情
			getOrderDetail(id) {
				uni.request({
					url: this.nowUrl + '/foods/myOrder/find?id=' + id,
					method: 'GET',
					header: {
						"content-type": "application/json",
						"token": this.token
					},
					success: (res) => {
						console.log(res.data.data);
						this.detailList = res.data.data.foods;
						this.money = res.data.data.priceAll;
						this.peopleNum = res.data.data.peopleNum;
						this.userName = res.data.data.userName;
						this.mobile = res.data.data.mobile;
						this.orderNum = res.data.data.orderNum;
						this.makeTime = res.data.data.makeTime;
						if (res.data.data.remarks) {
							this.remarks = res.data.data.remarks;
						}

					}
				});
			}
		}
	}
</script>

<style>
	.time {
		width: 30vw;
		height: 30vw;
		border-radius: 50%;
		text-align: center;
		overflow: hidden;
		border: 2upx solid rgb(211, 211, 211);
		margin: 15upx auto;
	}

	.title {
		width: 90vw;
		border: 5upx solid rgb(211, 211, 211);
		margin: 15upx auto;
		font-size: 0.7em;
		overflow: hidden;
		display: flex;
	}

	.left {
		flex: 2.5;
		text-align: center;
		background: rgb(60, 60, 60);
		color: #fff;
		padding: 0 3upx;
		padding: 10upx 0;
	}

	.right {
		flex: 7;
		text-align: center;
		padding: 10upx 0;
	}

	.btn {
		text-align: center;
	}

	.btn button {
		width: 40vw;
		background: rgb(149, 149, 149);
		display: inline-block;
		color: #fff;
		margin: 15upx 15upx 0;
	}

	.detail {
		padding: 10upx 15upx;
		border-top: 6upx solid #c6c6c6;
		border-bottom: 6upx solid #c6c6c6;
		max-height: 35vh;
		overflow-y: auto;
	}

	.detailList {
		display: flex;
	}

	.list {
		flex: 1;
		text-align: center;
		color: #000;
		font-size: 0.8em;
	}

	.money {
		font-size: 0.8em;
		text-align: right;
		margin: 15upx 0;
		padding-right: 50upx;
		color: #fe4e37;
	}

	.toRight {
		background: url(../../static/r.png) 95% 50% no-repeat;
		background-size: auto 50%;
	}

	.writeInput {
		display: block;
		width: 400upx;
		color: #2b2b2b;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
