(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-waitingOrder-waitingOrder"],{"1a30":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"mealBox"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"left"},[t._v("等待接单")]),i("v-uni-view",{staticClass:"right"},[t._v("您预约的菜单已提交 ,等待接受中!")])],1),i("v-uni-view",{staticClass:"orderDetail"},[i("v-uni-view",{staticStyle:{margin:"15upx 0 15upx 15upx","font-weight":"bold","font-size":"0.8em"}},[t._v("菜品信息")]),i("v-uni-view",{staticClass:"detail"},t._l(t.detailList,function(e,a){return i("v-uni-view",{key:a,staticClass:"detailList"},[i("v-uni-view",{staticClass:"list"},[i("v-uni-text",{staticStyle:{display:"block"}},[t._v(t._s(e.name))]),i("v-uni-text",{staticStyle:{display:"block",color:"#909090"}},[t._v(t._s(e.num)+"份")])],1),i("v-uni-view",{staticClass:"list",staticStyle:{color:"#909090"}},[t._v("x"+t._s(e.num))]),i("v-uni-view",{staticClass:"list"},[t._v("￥"+t._s(e.price))])],1)}),1),i("v-uni-view",{staticClass:"money"},[t._v("合计：￥"+t._s(t.money))]),i("v-uni-view",{staticStyle:{margin:"15upx 0 15upx 15upx","font-weight":"bold","font-size":"0.8em"}},[t._v("订单信息")]),i("v-uni-view",{staticClass:"detail",staticStyle:{border:"0","max-height":"35vh"}},[i("v-uni-view",{staticClass:"detailList",class:{toRight:1==t.list.type},staticStyle:{"border-top":"1upx solid #c6c6c6",padding:"20upx 0"}},[i("v-uni-view",{staticClass:"list",staticStyle:{flex:"3","text-align":"left"}},[i("v-uni-text",{staticStyle:{display:"block"}},[t._v("订单号")])],1),i("v-uni-view",{staticClass:"list",staticStyle:{flex:"7","text-align":"left"},on:{click:function(e){e=t.$handleEvent(e),t.write(t.list.type,t._index)}}},[i("v-uni-text",{staticClass:"writeInput"},[t._v(t._s(t.orderNum))])],1)],1),i("v-uni-view",{staticClass:"detailList",class:{toRight:1==t.list.type},staticStyle:{"border-top":"1upx solid #c6c6c6",padding:"20upx 0"}},[i("v-uni-view",{staticClass:"list",staticStyle:{flex:"3","text-align":"left"}},[i("v-uni-text",{staticStyle:{display:"block"}},[t._v("用餐人数")])],1),i("v-uni-view",{staticClass:"list",staticStyle:{flex:"7","text-align":"left"},on:{click:function(e){e=t.$handleEvent(e),t.write(t.list.type,t._index)}}},[i("v-uni-text",{staticClass:"writeInput"},[t._v(t._s(t.peopleNum))])],1)],1),i("v-uni-view",{staticClass:"detailList",class:{toRight:1==t.list.type},staticStyle:{"border-top":"1upx solid #c6c6c6",padding:"20upx 0"}},[i("v-uni-view",{staticClass:"list",staticStyle:{flex:"3","text-align":"left"}},[i("v-uni-text",{staticStyle:{display:"block"}},[t._v("联系人")])],1),i("v-uni-view",{staticClass:"list",staticStyle:{flex:"7","text-align":"left"},on:{click:function(e){e=t.$handleEvent(e),t.write(t.list.type,t._index)}}},[i("v-uni-text",{staticClass:"writeInput"},[t._v(t._s(t.userName)+" "+t._s(t.mobile))])],1)],1),i("v-uni-view",{staticClass:"detailList",class:{toRight:1==t.list.type},staticStyle:{"border-top":"1upx solid #c6c6c6",padding:"20upx 0"}},[i("v-uni-view",{staticClass:"list",staticStyle:{flex:"3","text-align":"left"}},[i("v-uni-text",{staticStyle:{display:"block"}},[t._v("备注")])],1),i("v-uni-view",{staticClass:"list",staticStyle:{flex:"7","text-align":"left"},on:{click:function(e){e=t.$handleEvent(e),t.write(t.list.type,t._index)}}},[i("v-uni-text",{staticClass:"writeInput"},[t._v(t._s(t.remarks))])],1)],1)],1)],1)],1)},l=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return l})},"2e39":function(t,e,i){var a=i("b041");e=t.exports=i("2350")(!1),e.push([t.i,".time[data-v-f36fe354]{width:30vw;height:30vw;border-radius:50%;text-align:center;overflow:hidden;border:%?2?% solid #d3d3d3;margin:%?15?% auto}.title[data-v-f36fe354]{width:90vw;border:%?5?% solid #d3d3d3;margin:%?15?% auto;font-size:.7em;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.left[data-v-f36fe354]{-webkit-box-flex:2.5;-webkit-flex:2.5;-ms-flex:2.5;flex:2.5;text-align:center;background:#3c3c3c;color:#fff;padding:0 %?3?%;padding:%?10?% 0}.right[data-v-f36fe354]{-webkit-box-flex:7;-webkit-flex:7;-ms-flex:7;flex:7;text-align:center;padding:%?10?% 0}.btn[data-v-f36fe354]{text-align:center}.btn uni-button[data-v-f36fe354]{width:40vw;background:#959595;display:inline-block;color:#fff;margin:%?15?% %?15?% 0}.detail[data-v-f36fe354]{padding:%?10?% %?15?%;border-top:%?6?% solid #c6c6c6;border-bottom:%?6?% solid #c6c6c6;max-height:35vh;overflow-y:auto}.detailList[data-v-f36fe354]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.list[data-v-f36fe354]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;color:#000;font-size:.8em}.money[data-v-f36fe354]{font-size:.8em;text-align:right;margin:%?15?% 0;padding-right:%?50?%;color:#fe4e37}.toRight[data-v-f36fe354]{background:url("+a(i("6b6e"))+") 95% 50% no-repeat;background-size:auto 50%}.writeInput[data-v-f36fe354]{display:block;width:%?400?%;color:#2b2b2b;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}",""])},"5f58":function(t,e,i){"use strict";var a=i("884c"),l=i.n(a);l.a},"6b6e":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABC0lEQVRIS9WV0RWCMAxFkwlkBJ1AN9BMomygGzgCG8gkPEdwBEZwg3rCAQ/WlrYUP+QPKPfSl6ZlWugCcCKivYiUYyQvwe/ht55VjyXZAgCFMaZl5tXoZ9+SLAGAtYi0AHbGmLtLMlswiqUUkdonmSWwMtdkfJIyWeCAD9HbkrPOLEkwAbclhYg89WG0IAI+SDZa+OEmSpAA72JKarQceDCiXPikYAm4U6CtryugaZoHM28De9VX5vb4ryIDOBDRkYguffv7JEG4bwYqABHpavBJouAhgb53SaLhMQJbUtnrPHSeuGqgW2/10SzMur9/NFAInNTJsTDXOAZwJSKTA5n6VgU/g3dF/nvBC4HMqQKJoNgdAAAAAElFTkSuQmCC"},7723:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{imgUrl:"https://sinomach.wxzhixun.com/images/",detailList:[{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15},{name:"西红柿炒蛋",num:2,price:15}],money:0,orderNum:0,peopleNum:0,userName:"",mobile:"",remarks:"",orderDetails:[{name:"订单号",value:"1321 1478 1478 4874 788"},{name:"用餐人数",value:"便于商家携带"},{name:"联系人",value:"张女士 13656564898"},{name:"订单备注",value:"多放辣椒少放盐多放辣椒少放盐多放辣椒少放盐多放辣椒少放盐"}]}},onLoad:function(t){this.token=sessionStorage.getItem("token"),this.getOrderDetail(t.id)},methods:{confirmMeal:function(){uni.navigateTo({url:"../confirmMeal/confirmMeal",animationType:"slide-in-right",animationDuration:200})},getOrderDetail:function(t){var e=this;uni.request({url:this.nowUrl+"/foods/myOrder/find?id="+t,method:"get",header:{"content-type":"application/json",token:this.token},success:function(t){console.log(t.data.data),e.detailList=t.data.data.foods,e.money=t.data.data.priceAll,e.peopleNum=t.data.data.peopleNum,e.userName=t.data.data.userName,e.mobile=t.data.data.mobile,e.orderNum=t.data.data.orderNum,t.data.data.remarks&&(e.remarks=t.data.data.remarks)}})}}};e.default=a},"884c":function(t,e,i){var a=i("2e39");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var l=i("4f06").default;l("8decaeda",a,!0,{sourceMap:!1,shadowMode:!1})},a0f6:function(t,e,i){"use strict";i.r(e);var a=i("7723"),l=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=l.a},b041:function(t,e){t.exports=function(t){return"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},c36a:function(t,e,i){"use strict";i.r(e);var a=i("1a30"),l=i("a0f6");for(var s in l)"default"!==s&&function(t){i.d(e,t,function(){return l[t]})}(s);i("5f58");var n=i("2877"),o=Object(n["a"])(l["default"],a["a"],a["b"],!1,null,"f36fe354",null);e["default"]=o.exports}}]);