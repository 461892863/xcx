(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"216d":function(t,o,n){"use strict";n.r(o);var e=n("fb84"),a=n.n(e);for(var i in e)"default"!==i&&function(t){n.d(o,t,function(){return e[t]})}(i);o["default"]=a.a},"4fc4":function(t,o,n){"use strict";var e=n("512d"),a=n.n(e);a.a},"512d":function(t,o,n){},"5e72":function(t,o,n){"use strict";n.r(o);var e=n("7cb2"),a=n("216d");for(var i in a)"default"!==i&&function(t){n.d(o,t,function(){return a[t]})}(i);n("4fc4");var r=n("2877"),u=Object(r["a"])(a["default"],e["a"],e["b"],!1,null,null,null);o["default"]=u.exports},"7cb2":function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement;t._self._c},a=[];n.d(o,"a",function(){return e}),n.d(o,"b",function(){return a})},fb84:function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=i(n("66fd")),a=i(n("7b87"));function i(t){return t&&t.__esModule?t:{default:t}}var r=function(){return n.e("components/shopcart").then(n.bind(null,"0f63"))},u=function(){return n.e("components/cartcontrol").then(n.bind(null,"edb6"))},d=function(){return n.e("components/mehaotian-search").then(n.bind(null,"2eb2"))},c=function(){return n.e("components/uni-rate").then(n.bind(null,"e2dc"))},s={data:function(){return{joinTimes:0,imgUrl:"http://106.15.194.58/images/",dayCur:-1,buyList:[],worship:[{name:"星期一"},{name:"星期二"},{name:"星期三"},{name:"星期四"},{name:"星期五"}],dataId:"",category:[],goods:[],height:0,foodSTop:0,currentIndex:0}},components:{shopcart:r,cartcontrol:u,mSearch:d,uniRate:c},onLoad:function(){this.height=Number(t.getSystemInfoSync().windowHeight)-55},computed:{getList:function(){var t=[];return this.goods.forEach(function(o){o.foods.forEach(function(o){o.count&&t.push(o)})}),t},getAllCount:function(t){for(var o=this,n=[],a=0,i=function(t){a=0,o.goods[t].foods.forEach(function(n){n.count>=0&&(a+=n.count,e.default.set(o.goods[t],"count",a))}),n.push(a)},r=0;r<this.goods.length;r++)i(r);return n.sort(function(t,o){return t-o}),a=n[n.length-1],a}},onShow:function(){a.default.delOrderType=!0,this.getDay()},methods:{getDay:function(){var o=this,n=new Date,e=n.getFullYear(),a=(n.getMonth()+1).toString().padStart(2,"0"),i=n.getDate().toString().padStart(2,"0"),r=e+"-"+a+"-"+i;t.request({url:this.nowUrl+"/foods/index/queryWeek",header:{token:this.token},data:{date:r},success:function(t){o.worship=t.data.data,o.worship.forEach(function(t,n){t.code==r&&(o.dayCur=n,o.dataId=t.id,o.getHistory(t.id),o.getCategory(t.id))})}})},getHistory:function(o){var n=this;n.dayId=o,t.showLoading({mask:!0}),t.request({url:this.nowUrl+"/foods/index/queryHistory",header:{token:this.token},data:{id:o},success:function(o){n.buyList=o.data.data;for(var e=0;e<n.buyList.length;e++)n.buyList[e].count=0;t.hideLoading()}})},getCategory:function(o){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=this;t.showLoading({mask:!0}),t.request({url:this.nowUrl+"/foods/index/queryCategory",header:{token:this.token},data:{id:o},success:function(a){e.category=a.data.data;for(var i=0,r=e.category.length;i<r;i++)e.goods.push({name:a.data.data[i].categoryName,foods:[]}),e.getFoods(o,i,e.category[i].categoryId,n);t.hideLoading()}})},search:function(t){this.getCategory(this.dataId,t)},getFoods:function(o,n,e,a){var i=this;t.request({url:this.nowUrl+"/foods/index/queryTableFoods",header:{token:this.token},data:{dateId:o,categoryId:e,foodName:a},success:function(t){var o=0;for(t.data.data.length;o<t.data.data.length;o++)t.data.data[o].count=0;i.goods[n].foods=t.data.data}})},setDay:function(t,o){this.dayCur=t,this.goods=[],this.getHistory(o),this.getCategory(o)},select:function(o){0==this.goods[o].foods.length?t.showToast({title:"暂无"+this.goods[o].name+"菜品",mask:!0,icon:"none",duration:1e3}):this.currentIndex=o,this.setScrollH(o)},setScrollH:function(o){var n=this,e=0,a=t.createSelectorQuery(),i=a.selectAll(".foods");this.$nextTick(function(){i.fields({size:!0},function(t){0==o&&(n.foodSTop=0);for(var a=0;a<o;a++)e+=parseInt(t[a].height),n.foodSTop=e}).exec()})},setScrollIndex:function(t){},foodDetail:function(o){t.navigateTo({url:"../foodDetail/foodDetail?id="+o+"&dayId="+this.dayId,animationType:"slide-in-right",animationDuration:200})},addCart:function(t){t.count>=0?(t.count++,this.goods.forEach(function(o){o.foods.forEach(function(o){t.name==o.name&&(o.count=t.count)})})):this.goods.forEach(function(o){o.foods.forEach(function(o){t.name==o.name&&e.default.set(o,"count",1)})})},decreaseCart:function(t){t.count&&(t.count--,this.goods.forEach(function(o){o.foods.forEach(function(o){t.name==o.name&&(o.count=t.count)})}))},delAll:function(){this.goods.forEach(function(t){t.foods.forEach(function(t){t.count&&(t.count=0)})})}}};o.default=s}).call(this,n("6e42")["default"])}},[["341b","common/runtime","common/vendor"]]]);