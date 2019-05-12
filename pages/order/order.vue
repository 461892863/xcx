<template>
	<view>
			<!--pages/user/dingdan.wxml-->
			<view class="swiper-tab">
			  <!--图文详情头部-->
			  <view class="tab-left">
				<view :class="['swiper-tab-list',{'active': curHdIndex=='0'}]" @tap="tabFun(0)" id="tab-hd01">待取餐</view>
				<view :class="['swiper-tab-list',{'active': curHdIndex=='1'}]" @tap="tabFun(1)" id="tab-hd02">待接单</view>
				<view :class="['swiper-tab-list',{'active': curHdIndex=='2'}]" @tap="tabFun(2)" id="tab-hd03">待评价</view>
				<view :class="['swiper-tab-list',{'active': curHdIndex=='3'}]" @tap="tabFun(3)" id="tab-hd04">已完成</view>
			  </view>
			</view>
			<!-- 正常订单 -->
			<view class="tab-right">
				<!--内容-->
				<view class="search_no" v-if="orderList.length==0">
				  <view class="font_14">
					<image class="scimg" src="../../static/dui.png"></image>
				  </view>
				  <text>没有可用订单/(ㄒoㄒ)/~~</text>
				</view>
				<view class="shop df" v-for="(item, i) in orderList" else :key="i">
					<view class="">
					  <image class="sh_slt" :src="item.imgUrl"></image>
					</view>
					<view class="df_1" style="padding-top: 10px;box-sizing: border-box;">
						<view class="" style="width: 50%;float: left;">
							<view class="sp_text">
								<view class="sp_tit ovh1">{{item.time}}</view>
							</view>
							<view class="sp_neb">
								{{item.descript}}
							</view>
						</view>
						<view class="" style="width: 50%;float: left;text-align: right;">
							<view class="font_12 sp_text" style="text-align: right;">订单详情>></view>
							<view class="sp_jg">¥ {{item.price}}</view>
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
				curHdIndex: '0',	
				orderList:[	
					{
						 "id": 123,
						 "type":0,
						 "time": "2019-09-09 12:30",
						 "descript": "担担面+牛肉串+鸡肉串",
						 "imgUrl": "../../static/dui.png",
						 "price": 1234.54,
						 "number": 4
					},
					{
						 "id": 123,
						 "type":0,
						 "time": "2019-09-09 12:30",
						 "descript": "担担面+牛肉串+鸡肉串",
						 "imgUrl": "../../static/dui.png",
						 "price": 1234.54,
						 "number": 4
					},
					{
						 "id": 123,
						 "type":0,
						 "time": "2019-09-09 12:30",
						 "descript": "担担面+牛肉串+鸡肉串",
						 "imgUrl": "../../static/dui.png",
						 "price": 1234.54,
						 "number": 4
					},
					{
						 "id": 123,
						 "type":0,
						 "time": "2019-09-09 12:30",
						 "descript": "担担面+牛肉串+鸡肉串",
						 "imgUrl": "../../static/dui.png",
						 "price": 1234.54,
						 "number": 4
					},
					{
						 "id": 123,
						 "type":0,
						 "time": "2019-09-09 12:30",
						 "descript": "担担面+牛肉串+鸡肉串",
						 "imgUrl": "../../static/dui.png",
						 "price": 1234.54,
						 "number": 4
					},
					{
						 "id": 123,
						 "type":0,
						 "time": "2019-09-09 12:30",
						 "descript": "担担面+牛肉串+鸡肉串",
						 "imgUrl": "../../static/dui.png",
						 "price": 1234.54,
						 "number": 4
					},
					{
						 "id": 123,
						 "type":0,
						 "time": "2019-09-09 12:30",
						 "descript": "担担面+牛肉串+鸡肉串",
						 "imgUrl": "../../static/dui.png",
						 "price": 1234.54,
						 "number": 4
					},
					{
						 "id": 123,
						 "type":0,
						 "time": "2019-09-09 12:30",
						 "descript": "担担面+牛肉串+鸡肉串",
						 "imgUrl": "../../static/dui.png",
						 "price": 1234.54,
						 "number": 4
					},
				]
			}
		},
		methods: {
			tabFun(index){
				this.curHdIndex = index;
				//请求数据，替换orderList
			//	this.orderList = [];
			}
		}
	}
</script>

<style>
.font_12{
	font-size: 12px;
}
.on {
  color: #dd2727;
  border-bottom: 5rpx solid #dd2727;
}

.swiper-box {
  display: block;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.clearbutton {
  background: #fff;
  display: inline-block;
  margin: 3% 3% 2% 3%;
  color: #dd2727;
  font-size: 14px;
  width: 94%;
}

.shop {
  background: #fff;
  padding: 4%;
  margin-bottom: 0px;
  border-bottom: 1px solid #eee;
 
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

}

.shop checkbox {
  margin-top: 27px;
}

.sh_slt {
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 5px;
  margin-right: 4%;
  float: left;
}

.sp_text {
  float: left;
  line-height: 20px;
  width: 100%;
  text-align: left;
}

.sp_tit {
  width: 100%;
  overflow: hidden;
  font-size: 14px;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}

.sp_neb {
  width: 100%;
  overflow: hidden;
  font-size: 12px;
  color: #999;
}

.sp_jg {
  width: 100%;
  overflow: hidden;
  font-size: 14px;
  color: #fc0628;
}

.dle {
  color: #999;
  font-size: 12px;
  float: right;
}

.dle image {
  width: 18px;
  height: 18px;
  vertical-align: sub;
}

.jk_bottom {
  position: fixed;
  bottom: 0;
  background: #fff;
  width: 100%;
  display: inline-flex;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #999;
}

.jk_bottom checkbox {
  margin: 4% 0 4% 4%;
}

.jk_bottom .heji {
  margin-top: 5.5%;
  width: 30%;
  text-align: right;
}

.jk_bottom .all {
  margin-top: 5.5%;
  padding-left: 2%;
}

.jk_bottom .js_button {
  background: #dd2727;
  float: right;
  color: #fff;
  font-size: 16px;
  text-align: center;
  width: 40%;
  position: absolute;
  right: 0;
  line-height: 50px;
}

.c_t60 {
  clear: both;
  height: 1px;
  padding-top: 48px;
}

.blue {
  color: #42b1ff;
}

.mr_5 {
  margin-right: 5px;
}

.mt10 {
  margin: 0 auto;
  text-align: center;
  height: 70rpx;
  width: 450rpx;
  line-height: 70rpx;
  border-radius: 10rpx;
  border: 1px solid #999;
  font-size: 30rpx;
  margin-top: 30rpx;
}

/*供求*/

.tab {
  flex-direction: row;
  width: 100%;
}

.tab-left {
  width: 100%;
  line-height: 160%;
  font-size: 34rpx;
  border-bottom: 1px solid #ccc;
}
.df_1{
  margin-left: 32rpx;
}
.tab-left view {
  text-align: center;
  display: inline-block;
  width: 25%;
  padding: 15rpx 0;
  font-size: 30rpx;
}

.tab-left .active {
  background: rgb(118,118,118);
	color: #fff;
	border-radius: 15upx 15upx 0 0 ;
}

.tab-right {
  line-height: 160%;
}

.tab-right .right-item {
  display: none;
}

.tab-right .right-item.active {
  display: block;
}

/*没有订单时候*/
.search_no{
    width: 100%; 
    display: block;
    color: #666;
    text-align: center;
    font-size: 14px;
}
.scimg{
    width: 130rpx;
    height: 130rpx;
    display: inline-block;
    background-size:100px; 
    padding-top:150rpx; 
}
.fl_r{ float: right;
font-size: 28rpx;
}
</style>
