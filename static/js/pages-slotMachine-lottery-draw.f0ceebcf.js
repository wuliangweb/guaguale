(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-slotMachine-lottery-draw"],{"05fd":function(t,e,a){"use strict";a("7a82");var i=a("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("d0ff")),r=i(a("0122"));a("e25e"),a("a434"),a("14d9"),a("e9c4"),a("3c65");var s={name:"HM-slotMachine",data:function(){return{delay:0,duration:0,direction:"up",rollState:"stop",prizeList:[],translateY:[0,0,0],shaftList:[],lampTimer:!1,lamps:[{color:"#97eefb"},{color:"#fecc6a"},{color:"#fb7c84"},{color:"#a097ff"},{color:"#fd0100"}]}},methods:{init:function(t){var e=this,a=t.prizeList,i=t.defaultResults,n=void 0===i?[]:i,s=t.delay,o=void 0===s?500:s,l=t.duration,d=void 0===l?4e3:l,c=t.direction,u=void 0===c?"up":c;if("number"!==typeof o&&(console.warn("delay参数应该传入整型"),o=parseInt(o),o=isNaN(o)?500:o),"number"!==typeof d&&(console.warn("duration参数应该传入整型"),d=parseInt(d),d=isNaN(d)?4e3:d),"object"!==(0,r.default)(a))return console.error("prizeList参数应该传入数组对象");if("object"!==(0,r.default)(n))return console.error("defaultResults参数应该传入数组");if("up"!=u&&"down"!=u)return console.error('direction参数应该传入"up"或者"down"');this.direction=u,d<4e3&&(d=4e3),d-=2*o,this.prizeList=a;var f=[];f.length=3;for(var h=0;h<3;h++){f[h]=this.shuffle(a);for(var p=0,v=f[h].length;p<v;p++)f[h][p].HMSM_id="id_"+h+"_"+p}if(this.shaftList=f,3==n.length&&(this.setTranslateY(n),setTimeout((function(){e.stop()}),50)),"down"==this.direction){var b=-100*(this.shaftList[1].length-1);this.translateY.splice(0,3,b,b,b)}this.$nextTick((function(){this.duration=d,this.delay=o}))},roll:function(t){var e=this,a=t.results,i=void 0===a?null:a,n=t.success,s=void 0===n?null:n;if("start"==this.rollState)return console.warn("正在抽奖哦！");if("object"!=(0,r.default)(i))return console.error("请传入正确的开奖结果参数results");this.rollState="start";var o=this.setTranslateY(i);this.lampTimer&&clearInterval(this.lampTimer),this.startSwitchLamp(),setTimeout((function(){"function"==typeof s&&s(o),e.stop()}),this.duration+1e3)},setTranslateY:function(t){var e=this,a={results:[]};console.log("results: ",t);for(var i=function(i,n){if("up"==e.direction)for(var r=function(n){if(e.shaftList[i][n].value==t[i])return a.results.push(JSON.parse(JSON.stringify(e.shaftList[i][n]))),setTimeout((function(){e.translateY.splice(i,1,-100*n)}),i*e.delay),"break"},s=e.shaftList[i].length-1;s>=0;s--){var o=r(s);if("break"===o)break}else for(var l=function(n,r){if(e.shaftList[i][n].value==t[i])return a.results.push(JSON.parse(JSON.stringify(e.shaftList[i][n]))),setTimeout((function(){e.translateY.splice(i,1,-100*n)}),i*e.delay),"break"},d=0,c=e.shaftList[i].length;d<c;d++){var u=l(d);if("break"===u)break}},n=0,r=t.length;n<r;n++)i(n);return a},stop:function(){this.rollState="stop",this.lampTimer&&clearInterval(this.lampTimer),this.$nextTick((function(){var t=(this.shaftList[0].length/this.prizeList.length-1)*this.prizeList.length*100;t="up"==this.direction&&t||-t;for(var e=0,a=this.translateY.length;e<a;e++){var i=this.translateY[e]+t;this.translateY.splice(e,1,i)}}))},startSwitchLamp:function(){var t=this;this.lampTimer=setInterval((function(){"stop"!=t.rollState&&("up"==t.direction?t.lamps.push(t.lamps.shift()):t.lamps.unshift(t.lamps.pop()))}),50)},shuffle:function(t){for(var e=JSON.parse(JSON.stringify(t)),a=1;a<e.length;a++){var i=Math.floor(Math.random()*(a+1)),r=[e[i],e[a]];e[a]=r[0],e[i]=r[1]}var s=Math.ceil(40/t.length),o=[];while(s>0)o.push.apply(o,(0,n.default)(e)),s--;return JSON.parse(JSON.stringify(o))}}};e.default=s},"100b":function(t,e,a){"use strict";a.r(e);var i=a("b93e"),n=a("4e5f");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("911c");var s=a("f0c5"),o=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"2f66a7d4",null,!1,i["a"],void 0);e["default"]=o.exports},"10eb":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},a("d9e2"),a("d401")},"13be":function(t,e,a){"use strict";a.r(e);var i=a("53fc"),n=a("702b");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("c3d8");var s=a("f0c5"),o=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"19ade1ca",null,!1,i["a"],void 0);e["default"]=o.exports},"28e1":function(t,e,a){var i=a("87dd");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("2e27619c",i,!0,{sourceMap:!1,shadowMode:!1})},4053:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(Array.isArray(t))return(0,i.default)(t)};var i=function(t){return t&&t.__esModule?t:{default:t}}(a("b680"))},"4e5f":function(t,e,a){"use strict";a.r(e);var i=a("dc32"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"53fc":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"shell"},[a("v-uni-view",{staticClass:"l"},t._l(t.lamps,(function(t,e){return a("v-uni-view",{key:t.color,staticClass:"lamp",style:{"background-color":t.color,"box-shadow":"0 0 5px "+t.color}})})),1),a("v-uni-view",{staticClass:"c"},[a("v-uni-view",{staticClass:"HMSM"},[a("v-uni-view",{staticClass:"HMSM-display-bg"},t._l(t.shaftList,(function(t,e){return a("v-uni-view",{key:e,staticClass:"box"})})),1),a("v-uni-view",{staticClass:"HMSM-display"},t._l(t.shaftList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"HMSM-shaft",class:{roll_animation:"start"==t.rollState},style:{transform:"translate3d(0, "+t.translateY[i]+"%, 0)","transition-duration":t.duration+"ms"}},t._l(e,(function(t,e){return a("v-uni-view",{key:t.HMSM_id},[a("v-uni-image",{attrs:{src:t.img}})],1)})),1)})),1)],1)],1),a("v-uni-view",{staticClass:"r"},t._l(t.lamps,(function(t,e){return a("v-uni-view",{key:t.color,staticClass:"lamp",style:{"background-color":t.color,"box-shadow":"0 0 5px "+t.color}})})),1)],1)},n=[]},"702b":function(t,e,a){"use strict";a.r(e);var i=a("05fd"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"87dd":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-2f66a7d4]{background-image:linear-gradient(0deg,#8f1e70,#51279a);min-height:calc(100vh - var(--window-bottom) - var(--window-top))}body.?%PAGE?%[data-v-2f66a7d4]{background-image:linear-gradient(0deg,#8f1e70,#51279a)}.content[data-v-2f66a7d4]{display:flex;flex-direction:column;align-items:center}.content .sm[data-v-2f66a7d4]{margin-top:%?200?%}.content .start[data-v-2f66a7d4]{width:70%;height:%?80?%;display:flex;justify-content:center;align-items:center;background-color:#f29c11;border-radius:%?40?%;margin-top:%?30?%;box-shadow:0 1px 2px #51279a;border-bottom:solid 3px #8d5805;box-sizing:border-box}.content .start uni-text[data-v-2f66a7d4]{font-size:20px;font-weight:700;color:#b51c06;text-shadow:1px 1px 1px #f2e811}',""]),t.exports=e},"911c":function(t,e,a){"use strict";var i=a("28e1"),n=a.n(i);n.a},a9e0:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630")},b93e:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"sm"},[a("HMSlotMachine",{ref:"Machine"})],1),a("v-uni-view",{staticClass:"start",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.start.apply(void 0,arguments)}}},[a("v-uni-text",[t._v("开 始")])],1)],1)},n=[]},c3d8:function(t,e,a){"use strict";var i=a("ea46"),n=a.n(i);n.a},d0ff:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,i.default)(t)||(0,n.default)(t)||(0,r.default)(t)||(0,s.default)()};var i=o(a("4053")),n=o(a("a9e0")),r=o(a("dde1")),s=o(a("10eb"));function o(t){return t&&t.__esModule?t:{default:t}}},dc32:function(t,e,a){"use strict";a("7a82");var i=a("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("13be")),r={components:{HMSlotMachine:n.default},data:function(){return{prizeList:[{name:"iPhone13",value:"iPhone",img:"/static/1.jpg"},{name:"iPhone13",value:"iPhone",img:"/static/2.jpg"},{name:"iPhone13",value:"iPhone",img:"/static/3.jpg"},{name:"iPhone13",value:"iPhone",img:"/static/4.jpg"},{name:"iPhone13",value:"iPhone",img:"/static/5.jpg"},{name:"iPhone13",value:"iPhone",img:"/static/6.jpg"}]}},onLoad:function(){},onReady:function(){this.$refs.Machine.init({prizeList:this.prizeList,defaultResults:["iPhone","iPhone","iPhone"],duration:4e3,direction:"up"})},methods:{start:function(){this.$refs.Machine.roll({results:this.getResults(),success:function(t){console.log("success e: ",t)}})},getResults:function(){var t=this.prizeList.length-1,e=[Math.floor(Math.random()*(t-1+1)+1),Math.floor(Math.random()*(t-1+1)+1),Math.floor(Math.random()*(t-1+1)+1)];return[this.prizeList[e[0]].value,this.prizeList[e[1]].value,this.prizeList[e[2]].value]}}};e.default=r},e404:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.shell[data-v-19ade1ca]{width:%?630?%;height:%?352?%;background-image:linear-gradient(90deg,#6543bc,#754eae);border-radius:%?50?%;display:flex;align-items:center}.shell .l[data-v-19ade1ca], .shell .r[data-v-19ade1ca]{width:%?36?%;height:%?260?%;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.shell .l .lamp[data-v-19ade1ca], .shell .r .lamp[data-v-19ade1ca]{width:%?14?%;height:%?14?%;border-radius:50%}.shell .l[data-v-19ade1ca]{padding-left:%?10?%}.shell .r[data-v-19ade1ca]{padding-right:%?10?%}.shell .c[data-v-19ade1ca]{width:%?540?%;height:%?270?%;background-color:#8461e9;border:solid %?1?% #6443b6;border-radius:%?30?%;flex-shrink:0;display:flex;justify-content:center;align-items:center}.shell .c .HMSM[data-v-19ade1ca]{width:%?510?%;height:%?240?%;position:relative}.shell .c .HMSM .HMSM-display-bg[data-v-19ade1ca]{width:100%;height:%?240?%;position:absolute;left:0;top:0;z-index:2;display:flex;flex-direction:row;justify-content:space-between}.shell .c .HMSM .HMSM-display-bg .box[data-v-19ade1ca]{width:%?160?%;height:%?240?%;background-image:linear-gradient(0deg,#e4defc,hsla(0,0%,100%,0));box-shadow:0 0 2px #fff;border:solid 1px #9d82ea;box-sizing:border-box}.shell .c .HMSM .HMSM-display-bg .box[data-v-19ade1ca]:first-child{border-radius:%?20?% 0 0 %?20?%}.shell .c .HMSM .HMSM-display-bg .box[data-v-19ade1ca]:last-child{border-radius:0 %?20?% %?20?% 0}.shell .c .HMSM .HMSM-display[data-v-19ade1ca]{position:absolute;left:0;top:0;z-index:3;width:100%;height:%?240?%;overflow:hidden;display:flex;flex-direction:row;justify-content:space-between;border-radius:%?20?%}.shell .c .HMSM .HMSM-display .HMSM-shaft[data-v-19ade1ca]{width:%?160?%;transition-property:none;transition-duration:0s}.shell .c .HMSM .HMSM-display .HMSM-shaft.roll_animation[data-v-19ade1ca]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-timing-function:cubic-bezier(.5,0,.1,1)}.shell .c .HMSM .HMSM-display .HMSM-shaft > uni-view[data-v-19ade1ca]{width:%?160?%;height:%?240?%;display:flex;justify-content:center;align-items:center;overflow:hidden;background-color:#fff}.shell .c .HMSM .HMSM-display .HMSM-shaft > uni-view uni-image[data-v-19ade1ca]{width:%?160?%;height:%?240?%}',""]),t.exports=e},ea46:function(t,e,a){var i=a("e404");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("48b6114f",i,!0,{sourceMap:!1,shadowMode:!1})}}]);