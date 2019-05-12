<template>
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
					￥{{list.cash}}
				</view>
			</view>
		</view>
		<view class="money">
			合计：￥{{money}}
		</view>
		<view style="margin: 15upx 0 15upx 15upx;font-weight: bold;font-size: 0.8em;">订单信息</view>
		<view class="detail" style="border: 0;max-height: 25vh;">
			<view class="detailList" :class="{toRight:list.type == 1}" v-for="(list, _index) in orderDetails" :key="_index" style="border-top:1upx solid #c6c6c6;padding: 20upx 0;">
				<view class="list" style="flex: 4;text-align: left;">
					<text style="display:block">{{list.name}}</text>
				</view>
				<view class="list" style="flex:6;text-align:left;" @tap="write(list.type,_index)">
					<block v-if="list.type == 1">
						<block v-if="list.newValue">
							<input class="writeInput" type="text" :placeholder="list.value" value="list.newValue" v-model="list.newValue"/>
						</block>
						<block v-else>
							<input class="writeInput" type="text" :placeholder="list.value"/>
						</block>
					</block>
					<block v-else>
						<text class="writeInput">{{list.value}}</text>
					</block>
				</view>
			</view>
		</view>
		<button type="primary" class="btn" @tap="success">确认预定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detailList: [
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
					},
					{
						name: '西红柿炒蛋',
						num: 2,
						cash: 15
					}
				],
				money: 99,
				orderDetails: [
					{
						name: '订单号',
						value: '1321 1478 1478 4874 788'
					},
					{
						name: '用餐人数',
						value: '便于商家携带',
						type: '1'
					},
					{
						name: '联系人',
						value: '张女士 13656564898',
						type: '1'
					},
					{
						name: '订单备注',
						value: '多放辣椒少放盐多放辣椒少放盐多放辣椒少放盐多放辣椒少放盐',
						type: '1'
					}
				]
			}
		},
		onShow() {
			
		},
		methods: {
			write(type, index){ //输入框
				if(type == 1) {
					console.log(index)
				}
			},
			success(){ // 成功即跳转
				uni.navigateTo({
					url:'../orderSuccess/orderSuccess',
					animationType:'slide-in-right',
					animationDuration:200
				})
			}
		}
	}
</script>

<style>
.detail{
	padding: 10upx 15upx;
	border-top: 6upx solid #c6c6c6;
	border-bottom: 6upx solid #c6c6c6;
	max-height: 35vh;
	overflow-y: auto;
}
.detailList{
	display: flex;
}
.list{
	flex: 1;
	text-align: center;
	color: #000;
	font-size: 0.8em;
}
.money{
	font-size: 0.8em;
	text-align: right;
	margin: 15upx 0;
	padding-right: 50upx;
	color: #fe4e37;
}
.toRight{
	background: url(../../static/r.png) 95% 50% no-repeat;
	background-size: auto 50%; 
}
.btn{
	width: 40vw;
	padding: 0;
	border-radius: 5upx;
	background: #8c8c8c;
	color: #fff;
	margin-top: 50upx;
}
.writeInput{
	display: block;width: 350upx;color:#7f7f7f;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
}
</style>
