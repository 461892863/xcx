(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/waitingOrder/waitingOrder"],{"5a3a":function(e,a,n){"use strict";n.r(a);var t=n("8e14"),r=n("d651");for(var i in r)"default"!==i&&function(e){n.d(a,e,function(){return r[e]})}(i);n("bca4");var o=n("2877"),u=Object(o["a"])(r["default"],t["a"],t["b"],!1,null,null,null);a["default"]=u.exports},"8e14":function(e,a,n){"use strict";var t=function(){var e=this,a=e.$createElement;e._self._c},r=[];n.d(a,"a",function(){return t}),n.d(a,"b",function(){return r})},"90f7":function(e,a,n){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{detailList:[{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15}],money:0,orderNum:0,peopleNum:0,userName:"",mobile:"",remarks:"",orderDetails:[{name:"订单号",value:"1321 1478 1478 4874 788"},{name:"用餐人数",value:"便于商家携带"},{name:"联系人",value:"张女士 13656564898"},{name:"订单备注",value:"多放辣椒少放盐多放辣椒少放盐多放辣椒少放盐多放辣椒少放盐"}]}},onLoad:function(e){this.getOrderDetail(e.id)},methods:{confirmMeal:function(){e.navigateTo({url:"../confirmMeal/confirmMeal",animationType:"slide-in-right",animationDuration:200})},getOrderDetail:function(a){var n=this;e.request({url:this.nowUrl+"/foods/myOrder/find?id="+a,method:"get",header:{"content-type":"application/json",token:this.token},success:function(e){console.log(e.data.data),n.detailList=e.data.data.foods,n.money=e.data.data.priceAll,n.peopleNum=e.data.data.peopleNum,n.userName=e.data.data.userName,n.mobile=e.data.data.mobile,n.orderNum=e.data.data.orderNum,e.data.data.remarks&&(n.remarks=e.data.data.remarks)}})}}};a.default=n}).call(this,n("543d")["default"])},a7e7:function(e,a,n){},bca4:function(e,a,n){"use strict";var t=n("a7e7"),r=n.n(t);r.a},d651:function(e,a,n){"use strict";n.r(a);var t=n("90f7"),r=n.n(t);for(var i in t)"default"!==i&&function(e){n.d(a,e,function(){return t[e]})}(i);a["default"]=r.a}},[["929d","common/runtime","common/vendor"]]]);