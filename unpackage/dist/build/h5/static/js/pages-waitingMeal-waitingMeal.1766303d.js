(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-waitingMeal-waitingMeal"],{"38d3":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAUCAYAAABbLMdoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphOTM1NTNlNi1lN2UwLTNkNGUtOWUwOS1mNDAwYThiYjAxNDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjYwNTg2RUQ0QTFEMTFFOUFBQThFQTMxNEY5NDM3RTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjYwNTg2RUM0QTFEMTFFOUFBQThFQTMxNEY5NDM3RTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTJkMWFiNmMtOTI3NC05NjQwLWExOWYtN2I2MGQ2NzY4YzMxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmE5MzU1M2U2LWU3ZTAtM2Q0ZS05ZTA5LWY0MDBhOGJiMDE0MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsjyZYYAAACdSURBVHjaYpw5c+YlBgYGViB2TUtLe8KABzBBFWoA8YFZs2bJEFLsCsR3gViZkAYmqNUOxGgAmcxArAYmGIMYDUzIHEIamNCtwqeB8f///1h9DlVwAKoBpNGBCVcwYbFhDxMD8eAvTsVYnOHORKx7Qc5iIlYhRtDhU4iimJBCuGJiFIIAs5SUFFEKYSbvJkYhTPFvIL5BSCEIAAQYACtFZIzjZXaGAAAAAElFTkSuQmCC"},8289:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{type:"",imgUrl:"http://106.15.194.58/images/",detailList:[{name:"西红柿炒蛋",num:2,cash:15},{name:"西红柿炒蛋",num:2,cash:15},{name:"西红柿炒蛋",num:2,cash:15},{name:"西红柿炒蛋",num:2,cash:15},{name:"西红柿炒蛋",num:2,cash:15},{name:"西红柿炒蛋",num:2,cash:15},{name:"西红柿炒蛋",num:2,cash:15}],money:0,orderNum:0,peopleNum:0,userName:"",mobile:"",remarks:"",orderId:"",makeTime:"",orderDetails:[{name:"订单号",value:"1321 1478 1478 4874 788"},{name:"用餐人数",value:"便于商家携带"},{name:"联系人",value:"张女士 13656564898"},{name:"订单备注",value:"多放辣椒少放盐多放辣椒少放盐多放辣椒少放盐多放辣椒少放盐"}]}},onLoad:function(t){this.orderId=t.id,console.log(t),this.type=t.type,this.getOrderDetail(t.id)},methods:{confirmMeal:function(){var t=this;2==this.type?uni.request({url:this.nowUrl+"/foods/shopcar/accept?id="+this.orderId,method:"POST",header:{"content-type":"application/json",token:this.token},success:function(i){console.log(t.orderId),200==i.data.code?uni.navigateTo({url:"../confirmMeal/confirmMeal?id="+t.orderId,animationType:"slide-in-right",animationDuration:200}):uni.showToast({title:i.data.msg,icon:"none",duration:1e3})}}):3==this.type?uni.navigateTo({url:"../assess/assess?id="+t.orderId,animationType:"slide-in-right",animationDuration:200}):4==this.type?uni.switchTab({url:"../order/order"}):0==this.type&&uni.request({url:this.nowUrl+"/foods/shopcar/remove?id="+this.orderId,header:{token:this.token},method:"POST",success:function(t){200==t.data.code?uni.switchTab({url:"../order/order"}):uni.showToast("删除失败")}})},getOrderDetail:function(t){var i=this;uni.request({url:this.nowUrl+"/foods/myOrder/find?id="+t,method:"GET",header:{"content-type":"application/json",token:this.token},success:function(t){i.detailList=t.data.data.foods,i.money=t.data.data.priceAll,i.peopleNum=t.data.data.peopleNum,i.userName=t.data.data.userName,i.mobile=t.data.data.mobile,i.orderNum=t.data.data.orderNum,t.data.data.makeTime?i.makeTime=t.data.data.makeTime:i.makeTime="! 订单未完成",t.data.data.remarks&&(i.remarks=t.data.data.remarks)}})}}};i.default=a},"885b":function(t,i,e){"use strict";var a=e("e131"),s=e.n(a);s.a},"9a2d":function(t,i,e){"use strict";e.r(i);var a=e("ef1b"),s=e("bf1a");for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);e("885b");var l=e("2877"),o=Object(l["a"])(s["default"],a["a"],a["b"],!1,null,"5c0ff610",null);i["default"]=o.exports},b041:function(t,i){t.exports=function(t){return"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},bf1a:function(t,i,e){"use strict";e.r(i);var a=e("8289"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=s.a},e131:function(t,i,e){var a=e("e71b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("51b9692f",a,!0,{sourceMap:!1,shadowMode:!1})},e71b:function(t,i,e){var a=e("b041");i=t.exports=e("2350")(!1),i.push([t.i,".time[data-v-5c0ff610]{width:30vw;height:30vw;border-radius:50%;text-align:center;overflow:hidden;border:%?2?% solid #d3d3d3;margin:%?15?% auto}.title[data-v-5c0ff610]{width:90vw;border:%?5?% solid #d3d3d3;margin:%?15?% auto;font-size:.7em;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.left[data-v-5c0ff610]{-webkit-box-flex:2.5;-webkit-flex:2.5;-ms-flex:2.5;flex:2.5;text-align:center;background:#3c3c3c;color:#fff;padding:0 %?3?%;padding:%?10?% 0}.right[data-v-5c0ff610]{-webkit-box-flex:7;-webkit-flex:7;-ms-flex:7;flex:7;text-align:center;padding:%?10?% 0}.btn[data-v-5c0ff610]{text-align:center}.btn uni-button[data-v-5c0ff610]{width:40vw;background:#959595;display:inline-block;color:#fff;margin:%?15?% %?15?% 0}.detail[data-v-5c0ff610]{padding:%?10?% %?15?%;border-top:%?6?% solid #c6c6c6;border-bottom:%?6?% solid #c6c6c6;max-height:35vh;overflow-y:auto}.detailList[data-v-5c0ff610]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.list[data-v-5c0ff610]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;color:#000;font-size:.8em}.money[data-v-5c0ff610]{font-size:.8em;text-align:right;margin:%?15?% 0;padding-right:%?50?%;color:#fe4e37}.toRight[data-v-5c0ff610]{background:url("+a(e("38d3"))+") 95% 50% no-repeat;background-size:auto 50%}.writeInput[data-v-5c0ff610]{display:block;width:%?400?%;color:#2b2b2b;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}",""])},ef1b:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"mealBox"},[e("v-uni-view",{staticClass:"time"},[e("v-uni-view",{staticStyle:{"margin-top":"50%",transform:"translateY(-50%)"}},[e("v-uni-text",[t._v(t._s(t.makeTime.split(" ")[1]))]),e("br"),e("v-uni-text",{staticStyle:{color:"#888888","font-size":"0.8em"}},[t._v("取餐时间")])],1)],1),e("v-uni-view",{staticClass:"title"},[0==t.type?[e("v-uni-view",{staticClass:"left"},[t._v("取消订单")]),e("v-uni-view",{staticClass:"right"},[t._v("你的订单未完成")])]:t._e(),2==t.type?[e("v-uni-view",{staticClass:"left"},[t._v("等待取餐")]),e("v-uni-view",{staticClass:"right"},[t._v("菜单已准备完成,请尽快前去取餐")])]:t._e(),3==t.type?[e("v-uni-view",{staticClass:"left"},[t._v("已取餐")]),e("v-uni-view",{staticClass:"right"},[t._v("已取餐成功,您还可以去评价")])]:t._e(),4==t.type?[e("v-uni-view",{staticClass:"left"},[t._v("订单已完成")]),e("v-uni-view",{staticClass:"right"},[t._v("订单已完成,欢迎下次光临")])]:t._e()],2),e("v-uni-view",{staticClass:"btn"},[0==t.type?[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){i=t.$handleEvent(i),t.confirmMeal()}}},[t._v("取消订单")])]:t._e(),2==t.type?[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){i=t.$handleEvent(i),t.confirmMeal()}}},[t._v("确认取餐")])]:t._e(),3==t.type?[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){i=t.$handleEvent(i),t.confirmMeal()}}},[t._v("去评价")])]:t._e(),4==t.type?[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){i=t.$handleEvent(i),t.confirmMeal()}}},[t._v("订单已完成")])]:t._e()],2),e("v-uni-view",{staticClass:"orderDetail"},[e("v-uni-view",{staticStyle:{margin:"15upx 0 15upx 15upx","font-weight":"bold","font-size":"0.8em"}},[t._v("菜品信息")]),e("v-uni-view",{staticClass:"detail"},t._l(t.detailList,function(i,a){return e("v-uni-view",{key:a,staticClass:"detailList"},[e("v-uni-view",{staticClass:"list"},[e("v-uni-text",{staticStyle:{display:"block"}},[t._v(t._s(i.name))]),e("v-uni-text",{staticStyle:{display:"block",color:"#909090"}},[t._v(t._s(i.num)+"份")])],1),e("v-uni-view",{staticClass:"list",staticStyle:{color:"#909090"}},[t._v("x"+t._s(i.num))]),e("v-uni-view",{staticClass:"list"},[t._v("￥"+t._s(i.price))])],1)}),1),e("v-uni-view",{staticClass:"money"},[t._v("合计：￥"+t._s(t.money))]),e("v-uni-view",{staticStyle:{margin:"15upx 0 15upx 15upx","font-weight":"bold","font-size":"0.8em"}},[t._v("订单信息")]),e("v-uni-view",{staticClass:"detail",staticStyle:{border:"0","max-height":"35vh"}},[e("v-uni-view",{staticClass:"detailList toRight",staticStyle:{"border-top":"1upx solid #c6c6c6",padding:"20upx 0"}},[e("v-uni-view",{staticClass:"list",staticStyle:{flex:"3","text-align":"left"}},[e("v-uni-text",{staticStyle:{display:"block"}},[t._v("订单号")])],1),e("v-uni-view",{staticClass:"list",staticStyle:{flex:"7","text-align":"left"}},[e("v-uni-text",{staticClass:"writeInput"},[t._v(t._s(t.orderNum))])],1)],1),e("v-uni-view",{staticClass:"detailList toRight",staticStyle:{"border-top":"1upx solid #c6c6c6",padding:"20upx 0"}},[e("v-uni-view",{staticClass:"list",staticStyle:{flex:"3","text-align":"left"}},[e("v-uni-text",{staticStyle:{display:"block"}},[t._v("用餐人数")])],1),e("v-uni-view",{staticClass:"list",staticStyle:{flex:"7","text-align":"left"}},[e("v-uni-text",{staticClass:"writeInput"},[t._v(t._s(t.peopleNum))])],1)],1),e("v-uni-view",{staticClass:"detailList toRight",staticStyle:{"border-top":"1upx solid #c6c6c6",padding:"20upx 0"}},[e("v-uni-view",{staticClass:"list",staticStyle:{flex:"3","text-align":"left"}},[e("v-uni-text",{staticStyle:{display:"block"}},[t._v("联系人")])],1),e("v-uni-view",{staticClass:"list",staticStyle:{flex:"7","text-align":"left"}},[e("v-uni-text",{staticClass:"writeInput"},[t._v(t._s(t.userName)+" "+t._s(t.mobile))])],1)],1),e("v-uni-view",{staticClass:"detailList toRight",staticStyle:{"border-top":"1upx solid #c6c6c6",padding:"20upx 0"}},[e("v-uni-view",{staticClass:"list",staticStyle:{flex:"3","text-align":"left"}},[e("v-uni-text",{staticStyle:{display:"block"}},[t._v("备注")])],1),e("v-uni-view",{staticClass:"list",staticStyle:{flex:"7","text-align":"left"}},[e("v-uni-text",{staticClass:"writeInput"},[t._v(t._s(t.remarks))])],1)],1)],1)],1)],1)},s=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})}}]);