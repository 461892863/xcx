//获取url参数
exports.install = function(Vue) {

	// Vue.prototype.GetQueryString = function(Paras) {
	// 	var url = window.location.href.split("#")[0];
	// 	var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
	// 	var paraObj = {};
	// 	for (i = 0; j = paraString[i]; i++) {
	// 		paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
	// 	}
	// 	var returnValue = paraObj[Paras.toLowerCase()];
	// 	if (typeof(returnValue) == "undefined") {
	// 		return "";
	// 	} else {
	// 		return returnValue;
	// 	}
	// };

	// Vue.prototype.GetUserId = function(code) {
	// 	var userId = "";
	// 	$.ajax({
	// 		url: this.url + "/api/UserBaseInfo/GetUserId",
	// 		async: false,
	// 		type: "Post",
	// 		data: {
	// 			code: code
	// 		},
	// 		dataType: "json",
	// 		success: function(msg) {
	// 			if (msg.returncode == 0) {
	// 				userId = msg.data;
	// 			}
	// 		},
	// 		error: function() {
	// 			//alert("服务器错误");
	// 		},
	// 		complete: function() {}
	// 	});
	// 	return userId;
	// }

	//域名参数

	//  let url = 'http://yanzhiyoudao.gkybi.com.cn' //ip
	// Vue.prototype.nowUrl = 'http://106.15.194.58:8093'; //接口ip
	Vue.prototype.nowUrl = 'https://sinomach.wxzhixun.com/8093'; //接口ip
	// Vue.prototype.nowUrl = 'https://result.eolinker.com';  //接口地址
	Vue.prototype.token = '9fc9nac2e9ndl48b777cf1fc7a2cff4n'; //接口地址
	// Vue.prototype.token = sessionStorage.getItem('token'); //token
	// Vue.prototype.aaa = sessionStorage.getItem('aaa'); //token
	Vue.prototype.imgUrl = 'https://sinomach.wxzhixun.com/images/'; //图片接口
}
