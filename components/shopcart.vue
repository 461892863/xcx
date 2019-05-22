<template>
	<view class="shopcart">
		<!-- @click="toggleList" -->
		<view class="cartBottom">
			<view class="carIcon" @tap="showCart">
				<view class="iconBox" :class="getAllCount ? 'active' : '' ">
					<text class="allcount" v-if="getAllCount">{{getAllCount}}</text>
					<image src="/static/cart.png" mode="" class="img"></image>
				</view>
			</view>
			<view class="middle">
				<text class="price" :class="getAllCount ?　'active': ''">待支付￥{{getAllPrice}}</text>
				<!-- <text class="deliveryPrice" style="font-size: 12px;">免配送费|支持自取</text> -->
			</view>
			<view class="BtnRight" @tap="toggleList">
				<text>确认订单</text>
			</view>
		</view>
		<!-- 选择的商品 -->
		<view class="cartList" v-show="isShowList && getList.length">
			<scroll-view scroll-y style="max-height: 200px;">
				<view class="title">
					<text>购物车</text>
					<view class="clear" @click="delShopcart">
						清空
					</view>
				</view>
				<view class="list">
					<view class="list-text" v-for="(item,index) in getList" :key="index">
						<text style="flex:1">{{item.name}}</text>
						<text style="flex:1">￥{{item.price}}</text>
						<cartcontrol :food="item" @add="addCart" @dec="decreaseCart"></cartcontrol>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="listMask" v-show="isShowList && getList.length"></view>
	</view>
</template>

<script>
	import cartcontrol from '@/components/cartcontrol.vue'
	// import {mul} from '@/utils/lib'
	export default {
		props: {
			goods: {
				type: Array
			}
		},
		data() {
			return {
				isShowList: false,
			};
		},
		components: {
			cartcontrol
		},
		computed: {
			getList() {
				let result = [];
				this.goods.forEach((good) => {
					good.foods.forEach((food) => {
						console.log(food);
						if (food.count) {
							result.push(food)
							// console.log('res', JSON.stringify(result))
						}
					})
				});

				var temp = []; //一个新的临时数组
				var newArr = [];
				for (var i = 0; i < result.length; i++) {
					if (temp.indexOf(result[i].id) == -1) {
						temp.push(result[i].id);
						newArr.push(result[i]);
					}
				}
				return newArr;
				// console.log('aaa');
				// console.log(result);
				// console.log('aaa');
				// return result
			},
			// 获得购物车所有商品数量
			getAllCount() {
				let result = 0;
				this.getList.forEach((food) => {
					result += food.count
				})
				return result
			},



			// 总价
			getAllPrice() {
				let result = 0;
				let result1 = 0;
				// this.goods.forEach((good) => {
				// 	good.foods.forEach((food) => {
				// 		deb
				// 		result1 += this.accMul(food.count, food.price)
				// 		result = result1.toFixed(2);
				// 	})
				// })
				this.getList.forEach((food)=>{
					result1 += this.accMul(food.count, food.price)
						result = result1.toFixed(2);
				})
				return result
			}
		},
		methods: {
			// 解决浮点数 运算出现多位小数
			accMul(arg1, arg2) {
				let m = 0,
					s1 = '',
					s2 = '';
				if (arg1 && arg1 != null)
					s1 = arg1.toString();
				if (arg2 && arg2 != null)
					s2 = arg2.toString();
				// console.log('m1',s2.replace('.',''))
				try {
					m += s1.split('.')[1].length
				} catch (e) {}
				try {
					m += s2.split('.')[1].length
				} catch (e) {}

				return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
			},
			showCart() {
				this.isShowList = !this.isShowList;
			},
			toggleList() { // 提交订单
				let arr = []
				this.getList.forEach(function(item) {
					arr.push({
						foodId: item.id,
						num: item.count
					})
				})
				let strData = JSON.stringify(arr)
				// console.log(strData)
				if (this.getList.length) {
					// this.isShowList = !this.isShowList;
					uni.request({
						url: this.nowUrl + '/foods/shopcar/build',
						header: {
							'token': this.token,
							'content-type': 'application/json'
						},
						method: 'POST',
						data: strData,
						success(res) {
							// console.log(res.data.data)
							let dataInfo = JSON.stringify(res.data.data)
							if (res.data.code == 200) {
								uni.navigateTo({
									url: '../orderDetails/orderDetails?dataInfo=' + dataInfo,
									animationDuration: 200,
									animationType: "slide-in-right"
								})
							} else {
								uni.showToast({
									title: res.data.msg,
									duration: 1000,
									icon: 'none'
								})
								return false
							}
						}
					})
				} else {
					uni.showToast({
						title: '您的购物车空的',
						duration: 1000,
						icon: 'none'
					})
				}
			},
			delShopcart() {
				this.$emit('delAll');
			},
			addCart: function(item) {
				this.$emit('add', item)
			},
			decreaseCart(item) {
				this.$emit('dec', item)
			}

		},
	}
</script>

<style scoped>
	.list-text {
		display: flex;
		flex-direction: row;
	}

	.shopcart .cartBottom {
		position: fixed;
		bottom: 0px;
		left: 0;
		right: 0;
		height: 54px;
		z-index: 99;
		display: flex;
		background-color: #909090;
	}

	.carIcon {
		flex: 1;
	}

	.iconBox {
		position: absolute;
		bottom: 22px;
		left: 18px;
		z-index: 101;
		background-color: rgb(70, 73, 75);
		border-radius: 50%;
		height: 48px;
		width: 48px;
		line-height: 55px;
		/* border: 6px solid #141d27; */
	}

	.iconBox .allcount {
		position: absolute;
		right: -6px;
		top: 0;
		display: inline-block;
		padding: 0 6px;
		font-size: 9px;
		line-height: 16px;
		font-weight: 400;
		border-radius: 10px;
		background-color: red;
		color: #fff;
		/* position: relative; */
	}

	.img {
		font-size: 24px;
		width: 30px;
		height: 30px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #cccccc;
		border-radius: 50%;
	}

	.carIcon .active {
		background-color: #00a0dc;
	}

	.middle {
		display: flex;
		flex-direction: column;
		flex: 2;
		color: #ffffff;
		align-items: center;
		justify-content: center;
	}

	.BtnRight {
		flex: 1;
		line-height: 54px;
		text-align: center;
		background: #000;
		color: #ffffff;
	}

	.cartList {
		position: fixed;
		bottom: 54px;
		left: 0;
		right: 0;
		z-index: 90;
	}

	.cartList .title,
	.cartList .list-text {
		display: flex;
		flex-direction: row;
	}

	.cartList .title {
		background: #F3F5F7;
		justify-content: space-between;
		padding: 4px 8px;
	}

	.cartList .list-text {
		padding: 10px 6px 10px 8px;
		text-align: center;
	}

	.list {
		background: #F8F8F8;
		padding-bottom: 10px;
	}


	/* 遮布 */
	.listMask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 89;
		opacity: 0.7;
		background: #000;
	}

	.price {
		margin-top: 10upx;
	}
</style>
