<template>
	<view style="width: 100vw;height: 100vh;overflow: hidden;position: relative;background: url(../../static/xiaomi.jpg) 0 0 no-repeat;background-size: 100% 100%;">
		<view class="code" style="position: relative;">
			<input type="number" class="phoneInput" value="phone" v-model="phone" placeholder="请输入手机号">
			<input type="number" class="phoneInput" value="code" v-model="code" placeholder="请输入验证码"><button open-type="getUserInfo" withCredentials="true" @getuserinfo="getCode" class="getCode">获取验证码</button>
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
			getCode(e){
				let _this = this
				let isPhone = (/^1(3|4|5|7|8)\d{9}$/.test(this.phone))
				//第一授权获取用户信息===》按钮触发
				uni.getUserInfo({
					provider: 'weixin',
					success: function(infoRes) {
						let nickName = infoRes.userInfo.nickName; //昵称
						let avatarUrl = infoRes.userInfo.avatarUrl; //头像
						try {
							uni.setStorageSync('isCanUse', false);//记录是否第一次授权  false:表示不是第一次授权
							_this.updateUserInfo();
						} catch (e) {}
					},
					fail(res) {}
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
								_this.code = res.data.data
							}
						}
					})
				}
			},
			//登录
			login() {
				let _this = this;
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
				uni.showLoading({
					title: '登录中...'
				});
			   // 1.wx获取登录用户code
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						let code = loginRes.code;
						if (!_this.isCanUse) {
							//非第一次授权获取用户信息
							uni.getUserInfo({
								provider: 'weixin',
								success: function(infoRes) {
　　　　　　　　　　　　　　　　　　　　//获取用户信息后向调用信息更新方法
									let nickName = infoRes.userInfo.nickName; //昵称
									let avatarUrl = infoRes.userInfo.avatarUrl; //头像
									//	_this.updateUserInfo();//调用更新信息方法
								}
							});
						}
						console.log(code)
						//2.将用户登录code传递到后台置换用户SessionKey、OpenId等信息
						uni.request({
							url: _this.nowUrl + '/wx/code2Session?code='+code,
							header:{
								'token':_this.token
							},
							method: 'POST',
							success: (res) => {
								console.log(res)
								//openId、或SessionKdy存储//隐藏loading
								uni.hideLoading();
							}
						});
					},
				});
			},
			//向后台更新信息
            updateUserInfo() {
                let _this = this;
                uni.request({
                    url:'url' ,//服务器端地址
                    data: {
                        appKey: this.$store.state.appKey,
                        customerId: _this.customerId,
                        nickName: _this.nickName,
                        headUrl: _this.avatarUrl
                    },
                    method: 'POST',
                    header: {
                        'content-type': 'application/json'
                    },
                    success: (res) => {
                        if (res.data.state == "success") {
                            uni.reLaunch({//信息更新成功后跳转到小程序首页
                                url: '/pages/index/index'
                            });
                        }
                    }
                   
                });
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
