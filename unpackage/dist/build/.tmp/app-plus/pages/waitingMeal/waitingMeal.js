(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/waitingMeal/waitingMeal"],{"9a2d":function(e,a,t){"use strict";t.r(a);var n=t("c7f1"),i=t("bf1a");for(var o in i)"default"!==o&&function(e){t.d(a,e,function(){return i[e]})}(o);t("cbfe");var r=t("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);a["default"]=s.exports},bb87:function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={data:function(){return{type:"",imgUrl:"http://106.15.194.58/images/",detailList:[{name:"西红柿炒蛋",num:2,cash:15},{name:"西红柿炒蛋",num:2,cash:15},{name:"西红柿炒蛋",num:2,cash:15},{name:"西红柿炒蛋",num:2,cash:15},{name:"西红柿炒蛋",num:2,cash:15},{name:"西红柿炒蛋",num:2,cash:15},{name:"西红柿炒蛋",num:2,cash:15}],money:0,orderNum:0,peopleNum:0,userName:"",mobile:"",remarks:"",orderId:"",makeTime:"",orderDetails:[{name:"订单号",value:"1321 1478 1478 4874 788"},{name:"用餐人数",value:"便于商家携带"},{name:"联系人",value:"张女士 13656564898"},{name:"订单备注",value:"多放辣椒少放盐多放辣椒少放盐多放辣椒少放盐多放辣椒少放盐"}]}},onLoad:function(e){this.orderId=e.id,console.log(e," at pages\\waitingMeal\\waitingMeal.vue:188"),this.type=e.type,this.getOrderDetail(e.id)},methods:{confirmMeal:function(){var a=this;2==this.type?e.request({url:this.nowUrl+"/foods/shopcar/accept?id="+this.orderId,method:"POST",header:{"content-type":"application/json",token:this.token},success:function(t){console.log(a.orderId," at pages\\waitingMeal\\waitingMeal.vue:205"),200==t.data.code?e.navigateTo({url:"../confirmMeal/confirmMeal?id="+a.orderId,animationType:"slide-in-right",animationDuration:200}):e.showToast({title:t.data.msg,icon:"none",duration:1e3})}}):3==this.type?e.navigateTo({url:"../assess/assess?id="+a.orderId,animationType:"slide-in-right",animationDuration:200}):4==this.type?e.switchTab({url:"../order/order"}):0==this.type&&e.request({url:this.nowUrl+"/foods/shopcar/remove?id="+this.orderId,header:{token:this.token},method:"POST",success:function(a){200==a.data.code?e.switchTab({url:"../order/order"}):e.showToast("删除失败")}})},getOrderDetail:function(a){var t=this;e.request({url:this.nowUrl+"/foods/myOrder/find?id="+a,method:"GET",header:{"content-type":"application/json",token:this.token},success:function(e){t.detailList=e.data.data.foods,t.money=e.data.data.priceAll,t.peopleNum=e.data.data.peopleNum,t.userName=e.data.data.userName,t.mobile=e.data.data.mobile,t.orderNum=e.data.data.orderNum,e.data.data.makeTime?t.makeTime=e.data.data.makeTime:t.makeTime="! 订单未完成",e.data.data.remarks&&(t.remarks=e.data.data.remarks)}})}}};a.default=t}).call(this,t("6e42")["default"])},bf1a:function(e,a,t){"use strict";t.r(a);var n=t("bb87"),i=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(a,e,function(){return n[e]})}(o);a["default"]=i.a},c7f1:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=(e._self._c,e.makeTime.split(" "));e.$mp.data=Object.assign({},{$root:{g0:t}})},i=[];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return i})},cbfe:function(e,a,t){"use strict";var n=t("e487"),i=t.n(n);i.a},e487:function(e,a,t){}},[["50e3","common/runtime","common/vendor"]]]);