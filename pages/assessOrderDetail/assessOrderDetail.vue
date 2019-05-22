<template>
	<view>
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
			<view class="myAssess" @tap="toMyAssess()">
				查看我的评价
			</view>
			<view style="margin: 15upx 0 15upx 15upx;font-weight: bold;font-size: 0.8em;">订单信息</view>
			<view class="detail" style="border: 0;max-height: 35vh;">
				<view class="detailList" :class="{toRight:list.type == 1}" v-for="(list, _index) in orderDetails" :key="_index" style="border-top:1upx solid #c6c6c6;padding: 20upx 0;">
					<view class="list" style="flex: 3;text-align: left;">
						<text style="display:block">{{list.name}}</text>
					</view>
					<view class="list" style="flex:7;text-align:left;" @tap="write(list.type,_index)">
						<text class="writeInput">{{list.value}}</text>
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
				imgUrl: 'http://106.15.194.58/images/', //图片接口
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
		methods: {
			toMyAssess(){
				uni.navigateTo({
					url:'../myAssess/myAssess',
					animationDuration:200,
					animationType:'slide-in-right'
				})
			}	
		}
	}
</script>

<style>
.title{
	width: 90vw;
	border: 5upx solid rgb(211,211,211);
	margin: 15upx auto;
	font-size: 0.7em;
	overflow: hidden;
	display: flex;
}
.left{
	flex: 2.5;
	text-align: center;
	background: rgb(60,60,60);
	color: #fff;
	padding: 0 3upx;
	padding: 10upx 0;
}
.right{
	flex: 7;
	text-align: center;
	padding: 10upx 0;
}
.btn{
	text-align: center;
}
.btn button{
	width: 40vw;
	background: rgb(149,149,149);
	display: inline-block;
	color: #fff;
	margin: 15upx 15upx 0;
}
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
.writeInput{
	display: block;width: 400upx;color:#2b2b2b;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
}
.myAssess{
	margin: 30upx  0;
	padding: 15upx 15upx;
	text-align: left;
	border-top:1upx solid rgb(192,192,192) ;
	border-bottom:1upx solid rgb(192,192,192) ;
	font-weight: bold;
	font-size: 1em;
	background: url(../../static/r.png) 95% 50% no-repeat;
	background-size: auto 40%;
}
</style>
