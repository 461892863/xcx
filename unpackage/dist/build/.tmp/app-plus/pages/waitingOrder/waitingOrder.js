(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/waitingOrder/waitingOrder"],{1386:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement;e._self._c},r=[];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return r})},5233:function(e,a,t){},"63ec":function(e,a,t){"use strict";t.r(a);var n=t("1386"),r=t("6553");for(var i in r)"default"!==i&&function(e){t.d(a,e,function(){return r[e]})}(i);t("7bba");var o=t("2877"),u=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);a["default"]=u.exports},6553:function(e,a,t){"use strict";t.r(a);var n=t("f293"),r=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(a,e,function(){return n[e]})}(i);a["default"]=r.a},"7bba":function(e,a,t){"use strict";var n=t("5233"),r=t.n(n);r.a},f293:function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={data:function(){return{imgUrl:"http://106.15.194.58/images/",detailList:[{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15}],money:0,orderNum:0,peopleNum:0,userName:"",mobile:"",remarks:"",orderDetails:[{name:"订单号",value:"1321 1478 1478 4874 788"},{name:"用餐人数",value:"便于商家携带"},{name:"联系人",value:"张女士 13656564898"},{name:"订单备注",value:"多放辣椒少放盐多放辣椒少放盐多放辣椒少放盐多放辣椒少放盐"}]}},onLoad:function(e){this.getOrderDetail(e.id)},methods:{confirmMeal:function(){e.navigateTo({url:"../confirmMeal/confirmMeal",animationType:"slide-in-right",animationDuration:200})},getOrderDetail:function(a){var t=this;e.request({url:this.nowUrl+"/foods/myOrder/find?id="+a,method:"get",header:{"content-type":"application/json",token:this.token},success:function(e){console.log(e.data.data," at pages\\waitingOrder\\waitingOrder.vue:160"),t.detailList=e.data.data.foods,t.money=e.data.data.priceAll,t.peopleNum=e.data.data.peopleNum,t.userName=e.data.data.userName,t.mobile=e.data.data.mobile,t.orderNum=e.data.data.orderNum,e.data.data.remarks&&(t.remarks=e.data.data.remarks)}})}}};a.default=t}).call(this,t("6e42")["default"])}},[["11dc","common/runtime","common/vendor"]]]);