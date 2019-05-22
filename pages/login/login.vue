<template>
	<view style="width: 100vw;height: 100vh;overflow: hidden;position: relative;background: url(../../static/xiaomi.jpg) 0 0 no-repeat;background-size: 100% 100%;">
		<view class="code" style="position: relative;">
			<input type="number" class="phoneInput" value="phone" v-model="phone" placeholder="请输入手机号">
			<input type="number" class="phoneInput" value="code" v-model="code" placeholder="请输入验证码"><button @tap="getCode" class="getCode">获取验证码</button>
			<button type="primary" @tap="login" style="padding: 10upx 15upx;background: #007AFF;border-radius: 20upx;width: 100%;">开始点餐</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '18707076473',
				code: ''
			}
		},
		methods: {
			login(){
				// uni.request({ //注册登入
				// 	
				// })
				if(this.phone == '' && this.code == ''){
					uni.showToast({
						title: "手机号码或验证码为空~",
						duration:1000,
						icon:'none'
					})
					return false
				}
				uni.switchTab({
					url:'../index/index'
				})
			},
			getCode(e){
				let isPhone = (/^1(3|4|5|7|8)\d{9}$/.test(this.phone))
				let that = this
				//登录
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
					console.log(loginRes.code);
					// 获取用户信息
					uni.getUserInfo({
					  provider: 'weixin',
					  success: function (infoRes) {
						console.log('用户昵称为：' + infoRes.userInfo.nickName);
						console.log('用户头像为：' + infoRes.userInfo.avatarUrl);
						console.log(infoRes);
						uni.request({
							url: that.nowUrl + '/wx/code2Session?code='+loginRes.code,
							method:'POST',
							header:{
								'token':that.token
							},
							success(res) {
								console.log(res)
							}
						})
					  }
					});
				  }
				});
				
				if(this.phone == ''){
					uni.showToast({
						title: "请填写手机号码~",
						duration:1000,
						icon:'none'
					})
					return false
				}else if(!isPhone){
					uni.showToast({
						title: "手机号码有误~",
						duration:1000,
						icon:'none'
					})
					return false
				}else{
					console.log(this.phone)
					uni.request({
						url: this.nowUrl + '/sms/send?mobile='+this.phone,
						method:'POST',
						header:{
							'token': this.token
						},
						success: (res) => {
							if(res.data.code == 200){
								this.code = res.data.data
							}
						}
					})
				}
			}
		}
	}
</script>

<style>
.code{
	width: calc(70%);
	margin: 40% auto;
	font-size: 0.9em;
}
.phoneInput{
	background: #fff;
	width: calc(100% - 30upx);
	padding: 20upx 15upx;
	margin: 30upx auto;
	border-radius: 15upx;
}
.getCode{
	width: 150upx;
	text-align: center;
	font-size: 0.7em;
	padding: 10upx 5upx;
	position: absolute;
	right: 15upx;
	bottom: 160upx;
	background: #007AFF;
	color:#fff;
	border-radius: 10upx;
	z-index: 99;
}
</style>
