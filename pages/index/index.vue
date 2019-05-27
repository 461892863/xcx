<template>
	<view class="idnexBox" style="width: 100vw;height: 100vh;overflow: hidden;display: flex;flex-direction: column;">
		<view class="" style="width: 100vw;height: 100upx;background: #f4f4f4;">
			<mSearch :mode="2" button="inside" @search="search($event)"></mSearch>
		</view>
		<!-- <view class="" style="width: 100vw;height: 90upx;background: #fff;color: #2b2b2b;">
			<text class="" style="">2017-08-08</text>至<text class="">2017-08-09</text>
		</view> -->
		<view class="worship" style="width: 100vw;display: flex;height:auto;overflow: hidden;flex:none;">
			<view class="day" :class="{dayActive: _index == dayCur}" v-for="(day, _index) in worship" :key="_index" @tap="setDay(_index, day.id)">{{day.name}}</view>
		</view>
		<view class="buyList" style="height: 110upx;border-bottom: 3px solid #f3f5f7;padding-left: 55rpx;position: relative;">
			<view class="buyLeft" style="white-space:normal;font-size: 0.8em;display: flex;flex-direction: column;">
				买过的
			</view>
			<scroll-view scroll-x='true' scroll-with-animation=true style="height: 100%;white-space: nowrap;">
				<view class="listData" v-for="(list, index_) in buyList" :key="index_" @tap="foodDetail(list.id)" >
					<text class="listName">{{list.name}}</text>
					<!-- <image src="../../static/add2.png" mode="aspectFit" @tap.stop="addCart"></image> -->
					<text class="listMonney">￥{{list.price}}</text>
					<cartcontrol class="add" :style="carStyle" :food="list" @add="addCart" @dec="decreaseCart"></cartcontrol>
				</view>
			</scroll-view>
		</view>
		<view class="content" style="height: 100%;overflow: hidden;">
			<scroll-view class="menu-wrapper" scroll-y style="height:100%;border-right:1px solid #ddd;padding-bottom:54px;box-sizing: border-box;">
				<view ref="menuWrapper">
					<!--  :class="{'current': currentIndex == index}" @click="selectMenu(index,$event)" -->
					<view style="position: relative;" v-for="(item,index) in category" :key="index" ref="menuList" @tap="select(index,item.categoryId)"
					 :class="{'current': currentIndex == index}">
						<view class="menu-item">{{item.categoryName}}</view>
						<text class="allcount" v-if="getAllCount>=item.count&&item.count>0">{{item.count}}</text>
						<!-- <text class="allcount">1</text> -->
					</view>
				</view>
			</scroll-view>
			<!--  @scroll="scroll" -->
			
			<scroll-view class="foods-wrapper" scroll-y style="box-sizing: border-box;"
			 :scroll-top="foodSTop" @scroll="setScrollIndex" :style="'height:'+height+'px'">
				<view ref="foodsWrapper" style="overflow: auto;box-sizing: border-box;padding-bottom:650upx;">
					<view ref="foodList" class="foods" v-for="(item, i) in goods" :key="i">
						<view class="food-title" style="background: #f3f5f7;color:#666;" v-if="item.foods.length>0">
							{{item.name}}
						</view>
						<view class="food" style="position: relative;border-bottom: 1px #f3f5f7 solid;" v-for="(food, index) in item.foods"
						 :key="index" @tap="foodDetail(food.id)">
							<image :src="imgUrl + food.thumbnails" mode="" style="width: 75px;height: 75px;margin-top: 6px;"></image>
							<view class="food-info">
								<text style="font-size: 15px;margin-top: 2px;">{{food.name}} <text class="mark" v-if="food.sign">{{food.sign}}</text></text>
								<uniRate :value="food.level" size="10" disabled="true">{{food.level}}</uniRate>
								<!-- 加减 -->
								<view>
									<text class="remainder" style="font-size: 14px;margin: 2px 0 4px;">剩余 <text style="font-weight: bold;"><text
											 style="color:red;font-size: 16px;"> {{food.limitNum-food.count}}</text></text>
										{{food.unit}}</text>
									<text style="font-size: 12px;margin: 2px 0 4px;">售出 <text>{{food.sellNum}}</text> {{food.unit}}</text>
								</view>
								<view class="food-btm">
									<text class="food-price">￥{{food.price}}</text>
									<cartcontrol :food="food" @add="addCart" @dec="decreaseCart"></cartcontrol>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			<shopcart :goods="goods" @add="addCart" @dec="decreaseCart" @delAll="delAll"></shopcart>
		</view>
	</view>
</template>

<script>
	import shopcart from '@/components/shopcart.vue';
	import cartcontrol from '@/components/cartcontrol.vue'
	import mSearch from '../../components/mehaotian-search.vue'
	import uniRate from '../../components/uni-rate.vue'
	import Vue from 'vue'
	import orderType from '../../common/public.js'
	// import BScroll from 'better-scroll'

	export default {
		data() {
			return {
				carStyle:{
					"direction": 'column'
				},
				joinTimes:0,
				imgUrl: 'http://106.15.194.58/images/', //图片接口
				dayCur: -1, //日期选中状态
				buyList: [], //历史购买
				worship: [ //礼拜天数
					{
						name: "星期一"
					},
					{
						name: "星期二"
					},
					{
						name: "星期三"
					},
					{
						name: "星期四"
					},
					{
						name: "星期五"
					}
				],
				dataId: '', // 日期id
				category: [], //左侧菜单类别
				goods: [], //合并后总数据
				// foods: [],  //右侧数据
				height: 0,
				foodSTop: 0,
				currentIndex: 0
			}
		},
		components: {
			shopcart,
			cartcontrol,
			mSearch,
			uniRate
		},
		onLoad() {
			let that = this
			this.height = Number(uni.getSystemInfoSync().windowHeight) - 55;
			// console.log(uni.getSystemInfoSync().windowHeight)
			// uni.setStorage({
			// 	key: 'token',
			// 	data: '12366666666'
			// });
			// uni.getStorage({
			// 	key: 'token',
			// 	success: function (res) {
			// 		console.log(res.data); //12366666666
			// 		that.token = res.data
			// 	}
			// });

		},
		computed: {
			getList() {
				let result = [];
				this.goods.forEach((good) => {
					good.foods.forEach((food) => {
						if (food.count) {
							result.push(food)
						}
					})
				})
				// console.log('result', result);
				return result

			},
			// 获得购物车所有商品数量
			getAllCount: function(item) {
				// console.log('item', item)
				let result = [];
				let count = 0;

				for (let i = 0; i < this.goods.length; i++) {
					count = 0;
					this.goods[i].foods.forEach((food) => {

						// console.log('food',food);
						if (food.count >= 0) {
							count += food.count
							Vue.set(this.goods[i], 'count', count)
						}
					})
					// console.log('result', count);
					result.push(count)
				}

				result.sort(function(a, b) {
					return a - b;
				})
				count = result[result.length - 1]
				// console.log('result', count);
				return count;
			},
		},
		onShow() {
			orderType.delOrderType = true
			this.getDay()
		},
		methods: {
			getDay() { //礼拜
				let that = this
				var d = new Date();
				var ye = d.getFullYear();
				var mo = (d.getMonth() + 1).toString().padStart(2, '0');
				var da = d.getDate().toString().padStart(2, '0');
				var time = ye + '-' + mo + '-' + da;
				uni.request({
					url: this.nowUrl + '/foods/index/queryWeek',
					header: {
						'token': this.token
					},
					data: {
						date: time
					},
					success: (res) => {
						that.worship = res.data.data
						that.worship.forEach(function(item, i) {
							if (item.code == time) {
								that.dayCur = i
								that.dataId = item.id
								that.getHistory(item.id)
								that.getCategory(item.id)
							}
						})
					}
				})
			},
			getHistory(id) { // 历史购买
				let that = this
				that.dayId = id
				uni.showLoading({
					mask: true
				})
				uni.request({
					url: this.nowUrl + '/foods/index/queryHistory',
					header: {
						'token': this.token
					},
					data: {
						id: id
					},
					success: (res) => {
						for (let i = 0; i < res.data.data.length; i++) {
							res.data.data[i].count = 0;
						}
						that.buyList = res.data.data
						uni.hideLoading()
					}
				})
			},
			getCategory(id, value = "") { //菜单类别
				let that = this
				uni.showLoading({
					mask: true
				})
				uni.request({
					url: this.nowUrl + '/foods/index/queryCategory',
					header: {
						'token': this.token
					},
					data: {
						id: id
					},
					success: (res) => {
						that.category = res.data.data

						//	console.log(that.category, id)
						for (let i = 0, len = that.category.length; i < len; i++) {
							// console.log(res.data.data[i].categoryName)
							that.goods.push({
								name: res.data.data[i].categoryName,
								foods: []
							}) //合并数据
							that.getFoods(id, i, that.category[i].categoryId, value)
						}
						// console.log(that.foods)
						uni.hideLoading()
					}
				})
			},
			search(value) {
				this.getCategory(this.dataId, value)
			},
			getFoods(id, i, categoryId, value) {
				let that = this
				uni.request({
					url: this.nowUrl + '/foods/index/queryTableFoods',
					header: {
						'token': this.token
					},
					data: {
						dateId: id,
						categoryId: categoryId,
						foodName: value //搜索值
					},
					success(res) {
						// console.log(res)
						for (let j = 0, len = res.data.data.length; j < res.data.data.length; j++) {
							res.data.data[j].count = 0
						}
						that.goods[i].foods = res.data.data
						// console.log(that.goods)
					}
				})
			},
			setDay(index, id) { //切换日期
				this.dayCur = index
				this.goods = []
				this.getHistory(id)
				this.getCategory(id)
			},
			// 点击侧边栏
			select(index) {
				if (this.goods[index].foods.length == 0) {
					uni.showToast({
						title: '暂无' + this.goods[index].name + '菜品',
						mask: true,
						icon: 'none',
						duration: 1000
					})
				} else {
					this.currentIndex = index;
				}
				// console.log(this.goods[index].foods)
				this.setScrollH(index);
			},
			// 设置点击侧边栏右边滚动的高度
			setScrollH: function(index) {
				var that = this;
				let height = 0;
				var query = uni.createSelectorQuery();
				// console.log('query',query);
				let foods = query.selectAll('.foods');
				// console.log('foods', foods);
				this.$nextTick(function() {
					foods.fields({
						size: true
					}, data => {
						if (index == 0) {
							that.foodSTop = 0;
						}
						for (let i = 0; i < index; i++) {
							height += parseInt(data[i].height);
							// console.log('fh', foods);
							that.foodSTop = height;
							// console.log(that.foodSTop)
						}
					}).exec();
				})
			},
			setScrollIndex(e) { //滚动事件
				// var query = uni.createSelectorQuery();
				// let foods = query.selectAll('.foods');
				// let height = 0;
				// this.$nextTick(function() {
				// 	foods.fields({
				// 		size: true,
				// 		scrollOffset: true
				// 	},data => {
				// 			for (let i = 0; i < data.length; i++) {
				// 				height += parseInt(data[i].height);
				// 				console.log(height - e.detail.scrollTop)
				// 				if(0 < height - e.detail.scrollTop < 10){
				// 					// console.log(i)
				// 				}
				// 			//	that.foodSTop = height;
				// 			}
				// 			
				// 	}).exec();
				// })
			},
			foodDetail(id) { // 跳商品详情
				// console.log(this.dayId)
				uni.navigateTo({
					url: '../foodDetail/foodDetail?id=' + id + '&dayId=' + this.dayId,
					animationType: 'slide-in-right',
					animationDuration: 200
				})
			},
			addCart: function(item) { // 加
				// console.log('ev', JSON.stringify(item))
				if (item.count >= 0) {
					item.count++
					// buyList
					this.buyList.forEach((food) => {
						if(item.name == food.name){
							food.count = item.count
						}
					})
					this.goods.forEach((good) => {
						good.foods.forEach((food) => {
							if (item.name == food.name){
								food.count = item.count
							}
						})
					})
					// console.log('c++', JSON.stringify(item))
				} else {
					//	console.log('add')
					this.goods.forEach((good) => {
						good.foods.forEach((food) => {
							if (item.name == food.name)
								Vue.set(food, 'count', 1)
							// food.count = 1
							// console.log('add-shop', JSON.stringify(food))
						})
					})
					
					this.buyList.forEach((food) => {
						if (item.name == food.name){
							Vue.set(food, 'count', 1)
						}
						// food.count = 1
						// console.log('add-shop', JSON.stringify(food))
					})
				}
			},
			decreaseCart(item) { //减
				if (item.count) {
					item.count--
					this.goods.forEach((good) => {
						good.foods.forEach((food) => {
							if (item.name == food.name)
								food.count = item.count
							// console.log('dec-shop', JSON.stringify(this.foods))
						})
					})
					this.buyList.forEach((food) => {
						if (item.name == food.name)
							food.count = item.count
						// console.log('dec-shop', JSON.stringify(this.foods))
					})
				}
			},
			// 清空购物车
			delAll() {
				this.goods.forEach((good) => {
					good.foods.forEach((food) => {
						if (food.count) {
							food.count = 0
							// console.log(JSON.stringify(food));
						}
					})
				})
			}
		}
	}
</script>

<style>
	.content {
		/* text-align: center; */
		/* height: 400upx; */
		display: flex;
		/* position: absolute; */
		top: 0;
		bottom: 55px;
		width: 100%;
		overflow: hidden;
	}

	.current {
		position: relative;
		z-index: 0;
		background-color: #fff;
		color: #00A0DC;
	}

	.menu-wrapper {
		text-align: center;
		width: 22%;
		display: flex;
		flex-direction: column;
		background: #f3f5f7;

	}

	.menu-item {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
	}

	.allcount {
		position: absolute;
		right: 6px;
		top: 8px;
		display: inline-block;
		padding: 0 4px;
		font-size: 9px;
		line-height: 16px;
		font-weight: 400;
		border-radius: 50%;
		background-color: #f01414;
		color: #ffffff;
	}

	.foods-wrapper {
		margin-left: 4px;
		width: 78%;
	}

	.food,
	.food-btm,
	.content {
		display: flex;
		flex-direction: row;
	}

	.food-title {
		padding: 2px 0;
	}

	.food-info {
		margin-left: 10px;
		margin-right: 16px;
		display: flex;
		flex-direction: column;
		flex: 2;
	}

	.food-btm {
		justify-content: space-between;
	}

	.food-price {
		color: #f01414;
		font-size: 16px;
	}

	.day {
		flex: 1;
		text-align: center;
		padding: 15upx 0;
		margin: 0 5upx 5upx;
		border-radius: 10upx;
		border: 1upx #ccc solid;
		font-size: 0.8em;
	}

	.dayActive {
		background: #767676;
		color: #fff;
	}

	.listData {
		display: inline-block;
		width: 220upx;
		height: 100upx;
		border: 1upx solid #ccc;
		border-radius: 10upx;
		margin: 5upx;
		box-sizing: border-box;
		position: relative;
		color: #000;
		font-size: 12px;
		z-index: 1;
	}
	.listName {
		position: absolute;
		top: 5upx;
		left: 15upx;
	}
	.listMonney {
		position: absolute;
		bottom: 5upx;
		left: 15upx;
	}
	.listData .add {
		position: absolute;
		bottom: 0upx;
		right: 10upx;
	}
	.buyLeft {
		width: 50upx;
		height: 100upx;
		font-size: 0.7em;
		background: #FE4E37;
		color: #fff;
		line-height: 1;
		padding-top: 10upx;
		text-align: center;
		position: absolute;
		left: 0;
		z-index: 99;
	}

	.mark {
		padding: 4upx 6upx;
		background: #5d5d5d;
		color: #fff;
		font-size: 0.85em;
		margin-left: 15upx;
		border-radius: 15upx;
	}

	.menu-item {
		font-size: 0.8em;
	}

	.remainder {
		position: absolute;
		right: 20upx;
		bottom: 55upx;
		font-size: 0.7em;
		color: #2e2e2e;
	}

	.remainder1 {
		position: absolute;
		right: 20upx;
		top: 45upx;
		font-size: 0.7em;
		color: #2e2e2e;
	}

	.histroyAdd {
		/* display: inline-block;
		position: absolute;
		right: 5upx;
		bottom: 5upx; */
	}
</style>
