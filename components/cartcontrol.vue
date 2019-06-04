<template>
	<view :style="carStyle">
		<view class="food-control">
			<!--  v-show="food.count > 0"  v-show=" food.count > 0" -->
			<view class="cont" style="margin-top: 2px;" @tap.stop="decreaseCart(food)" v-show="food.count > 0">
				<image src="/static/des.png" mode="" style="width: 45upx;height: 45upx;"></image>
			</view>
			<text style="padding: 0 4px;font-weight: bold;font-size: 16px;position:relative;top:6upx" v-show="food.count > 0">{{food.count}}</text>
		</view>
		<view style="flex: 1;margin-top: 2px; " class="cont" @tap.stop="addCart(food)">
			<image src="/static/add2.png" style="width: 45upx;height:45upx;color: #CCCCCC;" mode=""></image>
		</view>
	</view>
</template>

<script>
	// import Vue from 'vue'
	export default {
		props: {
			food: {
				type: Object,
			},
			carStyle:{
				type:Object,
				default(){
					return {
						"display": 'flex',
						"flex-direction": 'row',
						"height": '27px'
					}
				} 
			}
		},
		data() {
			return {
			};
		},
		methods: {
			addCart: function(item) {
				this.$emit('add',item)
			},
			decreaseCart(item) {
				this.$emit('dec',item)
			}
		}
	}
</script>

<style scoped>
	.food-control {
		display: flex;
		flex: 1;
		justify-content: space-around;
	}

	.cont {
		width: 20px;
		height: 20px;
		box-sizing: border-box;
		border-radius: 50%;
		text-align: center;
	}
</style>
