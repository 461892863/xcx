<template>
	<view class="idnexBox" style="width: 100vw;height: 100vh;overflow: hidden;">
		<view class="" style="width: 100vw;height: 90upx;background: #f4f4f4;">
			<mSearch :mode="2" button="inside" @search="search($event)"></mSearch>
		</view>
		<!-- <view class="" style="width: 100vw;height: 90upx;background: #fff;color: #2b2b2b;">
			<text class="" style="">2017-08-08</text>至<text class="">2017-08-09</text>
		</view> -->
		<view class="worship" style="width: 100vw;display: flex;">
			<view class="day" :class="{dayActive: _index == dayCur}" v-for="(day, _index) in worship" :key="_index">{{day.name}}</view>
		</view>
		<view class="buyList" style="height: 120upx;">
			<scroll-view scroll-x = 'true' scroll-with-animation=true style="height: 100%;position: relative;white-space: nowrap;">
					<view class="buyLeft" style="white-space:normal">
						买过的
					</view>
					<view class="listData" style="width: 50upx;border: 0;"></view>
					<view class="listData" v-for="(list, index_) in buyList" :key="index_">
						<text class="listName">{{list.name}}</text>
						<text class="listMonney">￥{{list.monney}}</text>
						<image src="../../static/add2.png" mode="aspectFit"></image>
					</view>
			</scroll-view>
		</view>
		<view class="content">
			<scroll-view class="menu-wrapper" scroll-y :style="'height:'+height  +'px'">
				<view ref="menuWrapper">
					<!--  :class="{'current': currentIndex == index}" @click="selectMenu(index,$event)" -->
					<view style="position: relative;" v-for="(item,index) in goods" :key="index" ref="menuList" @tap="select(index)"
					 :class="{'current': currentIndex == index}">
		
						<view class="menu-item">{{item.name}}</view>
						<text class="allcount" v-if="getAllCount>=item.count&&item.count>0">{{item.count}}</text>
						<!-- <text class="allcount">1</text> -->
					</view>
				</view>
			</scroll-view>
			<!--  @scroll="scroll" -->
			<scroll-view class="foods-wrapper" scroll-y :style="'height:'+height+'px'" :scroll-top="foodSTop">
				<view ref="foodsWrapper">
					<view ref="foodList" class="foods" v-for="(item, i) in goods" :key="i">
		
						<view class="food-title" style="background: #f3f5f7">
							{{item.name}}
						</view>
						<view class="food" style="position: relative;" v-for="(food, index) in item.foods" :key="index" @tap="foodDetail()">
							<image :src="food.img" mode="" style="width: 75px;height: 75px;margin-top: 6px;"></image>
							<view class="food-info">
								<text style="font-size: 15px;margin-top: 2px;">{{food.name}} <text class="mark">推荐</text></text>
								<text style="font-size: 13px;margin: 2px 0;">{{food.description}}</text>
								<text style="font-size: 13px;margin: 2px 0 4px;">月售{{food.sellCount}}</text>
								<uniRate value="2" size="10" disabled="true"></uniRate>
								<!-- 加减 -->
								<text class="remainder">剩余 <text style="font-weight: bold;">30</text> 份</text>
								<view class="food-btm">
									<text class="food-price">￥{{food.price}}</text>
									<cartcontrol :food="food" @add="addCart()" @dec="decreaseCart"></cartcontrol>
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
	// import BScroll from 'better-scroll'

	export default {
		data() {
			return {
				dayCur: 0, //日期选中状态
				buyList: [
					{
						name: '梅菜扣肉',
						monney: 15
					},
					{
						name: '梅菜扣肉',
						monney: 15
					},
					{
						name: '梅菜扣肉',
						monney: 15
					},
					{
						name: '梅菜扣肉',
						monney: 15
					},
					{
						name: '梅菜扣肉',
						monney: 15
					},
					{
						name: '梅菜扣肉',
						monney: 15
					},
					{
						name: '梅菜扣肉',
						monney: 15
					}
				],
				worship: [ //礼拜天数
					{
						name: '周一'
					},
					{
						name: '周二'
					},
					{
						name: '周三'
					},
					{
						name: '周四'
					},
					{
						name: '周五'
					}
				],
				goods: [{
						"name": "热销",
						"foods": [{
								
								"name": "南瓜粥",
								"price": 9.22,
								"oldPrice": "",
								"description": "食材：大米，南瓜",
								"sellCount": 229,
								"img": '../../static/nanguaz.jpg'

							}, {
								"name": "小米粥",
								"price": 9.8,
								"oldPrice": "",
								"description": "食材：小米",
								"sellCount": 239,
								"img": '../../static/xiaomi.jpg'

							},
							{
								"name": "油条",
								"price": 1.88,
								"oldPrice": "",
								"description": "食材：油条",
								"sellCount": 229,
								"img": '../../static/youtiao.jpg'

							}
						]
					},
					{
						"name": "折扣",
						"foods": [{
							"name": "油条1只",
							"price": 1.88,
							"oldPrice": "",
							"description": "食材：油条",
							"sellCount": 229,
							"img": '../../static/youtiao.jpg'

						}, {
							"name": "艇仔粥",
							"price": 9.9,
							"oldPrice": "",
							"description": "食材：瘦肉，干贝，花生等",
							"sellCount": 239,
							"img": '../../static/tingzaiz.jpg'

						}],

					},
					{
						"name": "套餐",
						"foods": [{
							"name": "油条2只",
							"price": 1.88,
							"oldPrice": "",
							"description": "食材：油条",
							"sellCount": 229,
							"img": '../../static/youtiao.jpg'

						}, {
							"name": "艇仔粥2",
							"price": 9.9,
							"oldPrice": "",
							"description": "食材：瘦肉，干贝，花生等",
							"sellCount": 239,
							"img": '../../static/tingzaiz.jpg'

						}],

					},
					{
						"name": "套餐2",
						"foods": [{
							"name": "油条3只",
							"price": 1.88,
							"oldPrice": "",
							"description": "食材：油条",
							"sellCount": 229,
							"img": '../../static/youtiao.jpg'

						}, {
							"name": "艇仔粥3",
							"price": 9.9,
							"oldPrice": "",
							"description": "食材：瘦肉，干贝，花生等",
							"sellCount": 239,
							"img": '../../static/tingzaiz.jpg'

						}],

					},
					{
						"name": "热销2",
						"foods": [{
							"name": "南瓜粥1",
							"price": 9.22,
							"oldPrice": "",
							"description": "食材：大米，南瓜",
							"sellCount": 229,
							"img": '../../static/nanguaz.jpg'

						}, {
							"name": "小米粥1",
							"price": 9.8,
							"oldPrice": "",
							"description": "食材：小米",
							"sellCount": 239,
							"img": '../../static/xiaomi.jpg'

						}]
					},
					{
						"name": "折扣2",
						"foods": [{
							"name": "油条4只",
							"price": 1.88,
							"oldPrice": "",
							"description": "食材：油条",
							"sellCount": 229,
							"img": '../../static/youtiao.jpg'

						}, {
							"name": "艇仔粥4",
							"price": 9.9,
							"oldPrice": "",
							"description": "食材：瘦肉，干贝，花生等",
							"sellCount": 239,
							"img": '../../static/tingzaiz.jpg'

						}],

					},
					{
						"name": "套餐3",
						"foods": [{
							"name": "油条5只",
							"price": 1.88,
							"oldPrice": "",
							"description": "食材：油条",
							"sellCount": 229,
							"img": '../../static/youtiao.jpg'

						}, {
							"name": "艇仔粥5",
							"price": 9.9,
							"oldPrice": "",
							"description": "食材：瘦肉，干贝，花生等",
							"sellCount": 239,
							"img": '../../static/tingzaiz.jpg'

						}],

					},
					{
						"name": "套餐4",
						"foods": [{
							"name": "油条6只",
							"price": 1.81,
							"oldPrice": "",
							"description": "食材：油条",
							"sellCount": 229,
							"img": '../../static/youtiao.jpg'

						}, {
							"name": "艇仔粥6",
							"price": 9.91,
							"oldPrice": "",
							"description": "食材：瘦肉，干贝，花生等",
							"sellCount": 239,
							"img": '../../static/tingzaiz.jpg'

						}],

					},
					{
						"name": "热销3",
						"foods": [{
							"name": "南瓜粥3",
							"price": 9.21,
							"oldPrice": "",
							"description": "食材：大米，南瓜",
							"sellCount": 229,
							"img": '../../static/nanguaz.jpg'

						}, {
							"name": "小米粥3",
							"price": 9.78,
							"oldPrice": "",
							"description": "食材：小米",
							"sellCount": 239,
							"img": '../../static/xiaomi.jpg'

						}]
					},
					{
						"name": "折扣3",
						"foods": [{
							"name": "油条7只",
							"price": 1.88,
							"oldPrice": "",
							"description": "食材：油条",
							"sellCount": 229,
							"img": '../../static/youtiao.jpg'

						}, {
							"name": "艇仔粥7",
							"price": 9.9,
							"oldPrice": "",
							"description": "食材：瘦肉，干贝，花生等",
							"sellCount": 239,
							"img": '../../static/tingzaiz.jpg'

						}],

					},
					{
						"name": "套餐6",
						"foods": [{
							"name": "油条8只",
							"price": 1.88,
							"oldPrice": "",
							"description": "食材：油条",
							"sellCount": 229,
							"img": '../../static/youtiao.jpg'

						}, {
							"name": "艇仔粥8",
							"price": 9.9,
							"oldPrice": "",
							"description": "食材：瘦肉，干贝，花生等",
							"sellCount": 239,
							"img": '../../static/tingzaiz.jpg'

						}],

					},
					{
						"name": "套餐7",
						"foods": [{
							"name": "油条9只",
							"price": 1.88,
							"oldPrice": "",
							"description": "食材：油条",
							"sellCount": 229,
							"img": '../../static/youtiao.jpg'

						}, {
							"name": "艇仔粥9",
							"price": 9.9,
							"oldPrice": "",
							"description": "食材：瘦肉，干贝，花生等",
							"sellCount": 239,
							"img": '../../static/tingzaiz.jpg'

						}],

					},
					{
						"name": "热销4",
						"foods": [{
							"name": "南瓜粥4",
							"price": 9.22,
							"oldPrice": "",
							"description": "食材：大米，南瓜",
							"sellCount": 229,
							"img": '../../static/nanguaz.jpg'

						}, {
							"name": "小米粥4",
							"price": 9.8,
							"oldPrice": "",
							"description": "食材：小米",
							"sellCount": 239,
							"img": '../../static/xiaomi.jpg'

						}]
					},
					{
						"name": "折扣4",
						"foods": [{
							"name": "油条10只",
							"price": 1.88,
							"oldPrice": "",
							"description": "食材：油条",
							"sellCount": 229,
							"img": '../../static/youtiao.jpg'

						}, {
							"name": "艇仔粥10",
							"price": 9.9,
							"oldPrice": "",
							"description": "食材：瘦肉，干贝，花生等",
							"sellCount": 239,
							"img": '../../static/tingzaiz.jpg'
						}],
					},
				],
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
			this.height = Number(uni.getSystemInfoSync().windowHeight) - 210;
			// console.log(uni.getSystemInfoSync().windowHeight)
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
		methods: {
			foodDetail(){ // 跳商品详情
				uni.navigateTo({
					url: '../foodDetail/foodDetail',
					animationType:'slide-in-right',
					animationDuration: 200
				})
			},
			search(e){ // 搜索
				console.log(e);
			},
			// 点击侧边栏
			select(index) {
				this.currentIndex = index;
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
			
			addCart: function(item) { // 加
				// console.log('ev', JSON.stringify(item))
				if (item.count >= 0) {
					item.count++
					this.goods.forEach((good) => {
						good.foods.forEach((food) => {
							if (item.name == food.name)
								food.count = item.count
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
	.day{
		flex: 1;text-align: center;padding: 5upx 0;margin: 0 5upx 5upx;
		border-radius: 10upx;border: 1upx #ccc solid;
	}
	.dayActive{
		background: #767676;
		color: #fff;
	}
	.listData{
		display: inline-block;
		width: 180upx;
		height: 100upx;
		border: 1upx solid #ccc;
		border-radius: 10upx;
		margin: 5upx;
		box-sizing: border-box;
		position: relative;
		color: #000;
		font-size: 0.7em;
	}
	.listName{
		position: absolute;
		top: 5upx;
		left: 15upx;
	}
	.listMonney{
		position: absolute;
		bottom: 5upx;
		left: 15upx;
	}
	.listData image{
		position: absolute;
		width: 30upx;
		height: 30upx;
		bottom: 10upx;
		right: 10upx;
	}
	.buyLeft{
		width: 50upx;
		height: 100upx;
		font-size: 0.7em;
		background: #000;
		color: #fff;
		line-height: 1;
		padding-top: 10upx;
		text-align: center;
		position: fixed;
		left: 0;
	}
	.mark{
		padding: 4upx 6upx;
		background: #5d5d5d;
		color: #fff;
		font-size: 0.85em;
		margin-left: 15upx;
		border-radius: 15upx;
	}
	.menu-item{
		font-size: 0.8em;
	}
	.remainder{
		position: absolute;
		right: 20upx;
		bottom: 55upx;
		font-size: 0.7em;
		color: #2e2e2e;
	}
</style>
