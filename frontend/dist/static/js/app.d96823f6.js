(function(a){function t(t){for(var n,o,c=t[0],r=t[1],u=t[2],b=0,f=[];b<c.length;b++)o=c[b],s[o]&&f.push(s[o][0]),s[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var a,t=0;t<i.length;t++){for(var e=i[t],n=!0,c=1;c<e.length;c++){var r=e[c];0!==s[r]&&(n=!1)}n&&(i.splice(t--,1),a=o(o.s=e[0]))}return a}var n={},s={app:0},i=[];function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=a,o.c=n,o.d=function(a,t,e){o.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},o.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,t){if(1&t&&(a=o(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var n in a)o.d(e,n,function(t){return a[t]}.bind(null,n));return e},o.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return o.d(t,"a",t),t},o.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=r;i.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"008b":function(a,t,e){},"35a2":function(a,t,e){"use strict";var n=e("f9d8"),s=e.n(n);s.a},"3d36":function(a,t,e){},"56d7":function(a,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("background")],1)},i=[],o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"AR-background",on:{mousedown:function(t){return a.clickAll(t)}}},[e("b-alert",{attrs:{show:a.dismissCountDown,dismissible:"",variant:"info"},on:{dismissed:function(t){a.dismissCountDown=0},"dismiss-count-down":a.countDownChanged}},[a._v("No post entered")]),e("search-bar",{directives:[{name:"show",rawName:"v-show",value:a.searchActive,expression:"searchActive"}],on:{noText:a.showAlert,haveText:a.submitSearch}}),e("search-list",{directives:[{name:"show",rawName:"v-show",value:!a.searchActive,expression:"!searchActive"}],attrs:{response:a.response},on:{back:function(t){a.searchActive=!0}}})],1)},c=[],r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"AR-searchbar middle"},[e("div",{staticClass:"AR-bar-outline",class:{"AR-bar-open":a.barOpen},on:{click:a.clickBar}},[e("div",{staticClass:"AR-search-icon"},[e("font-awesome-icon",{attrs:{icon:"search",size:"2x"}})],1),e("b-form-textarea",{staticClass:"AR-search-input",attrs:{placeholder:"Enter a post...",rows:"10","no-resize":""},model:{value:a.searchInput,callback:function(t){a.searchInput=t},expression:"searchInput"}}),e("button",{staticClass:"AR-search-btn",class:{"AR-search-btn-big":a.iconBig},on:{mouseleave:function(t){a.iconBig=!1},mouseenter:function(t){a.iconBig=!0},click:a.search}},[e("span",[a._v("Search")])])],1)])},u=[],l=new n["default"],b={data:function(){return{iconBig:!1,barOpen:!1,searchInput:""}},methods:{clickBar:function(){this.barOpen||(this.barOpen=!0)},search:function(){var a=this;if(""==this.searchInput&this.barOpen)this.$emit("noText");else if(""!=this.searchInput&this.barOpen){var t=this.searchInput;setTimeout(function(){a.barOpen=!1,a.$emit("haveText",t),a.searchInput=""},100)}}},created:function(){var a=this;l.$on("clickAll",function(t){"AR-background"==t.className&&(a.barOpen=!1,a.iconBig=!1)})}},f=b,p=(e("5f66"),e("2877")),d=Object(p["a"])(f,r,u,!1,null,"04b5d380",null),h=d.exports,m=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"AR-search-list"},[e("div",{staticClass:"row"},[e("div",{staticClass:"list-group"},a._l(a.response,function(t,n){return e("a",{key:"list"+n,staticClass:"list-group-item list-group-item-action",attrs:{href:t.url,target:"_blank"}},[a._v("\n            "+a._s(t.topic))])}),0)]),e("button",{staticClass:"AR-search-btn",class:{"AR-search-btn-big":a.iconBig},on:{mouseleave:function(t){a.iconBig=!1},mouseenter:function(t){a.iconBig=!0},click:a.back}},[e("span",[a._v("Back")])])])},v=[],g={data:function(){return{iconBig:!1}},methods:{back:function(){this.$emit("back")}},props:{response:Array}},w=g,A=(e("bdeb"),Object(p["a"])(w,m,v,!1,null,"b1ebf200",null)),k=A.exports,C={data:function(){return{dismissSecs:5,dismissCountDown:0,searchActive:!0,response:void 0}},methods:{clickAll:function(a){l.$emit("clickAll",a.target)},showAlert:function(){this.dismissCountDown=this.dismissSecs},countDownChanged:function(a){this.dismissCountDown=a},submitSearch:function(a){var t=this;this.dismissCountDown=0;var e=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!1,loader:"dots"});setTimeout(function(){t.$http.post("/articles",{data:a}).then(function(a){t.response=a.data,t.searchActive=!1,e.hide()}).catch(function(a){t.searchActive=!1,t.response=[{topic:"aaaaaaaaaaaaabbbbbbbaaaaaaaaaaaaabbbbbbbaaaaaa aaaaaaabbbbbbbaaaaaaaaaaaaabbbbbbbaaaaaaaaaaaaabbbbbbbaaaaaaaaaaaaabbbbbbbvaaaaaaaaaaaaabbbbbbb"},{topic:"aaaaaaaaa"},{topic:"aaaaaaaaa"},{topic:"aaaaaaaaa"},{topic:"aaaaaaaaa"},{topic:"aaaaaaaaa"},{topic:"aaaaaaaaa"},{topic:"aaaaaaaaa"},{topic:"aaaaaaaaa"},{topic:"aaaaaaaaa"}],e.hide(),console.log(a)})},3e3)}},components:{SearchBar:h,SearchList:k}},O=C,_=(e("35a2"),Object(p["a"])(O,o,c,!1,null,"fc7d2246",null)),y=_.exports,x={name:"app",components:{Background:y},created:function(){document.title="Articles Recommendation"}},R=x,B=(e("7faf"),Object(p["a"])(R,s,i,!1,null,null,null)),$=B.exports,j=e("8c4f");n["default"].use(j["a"]);var S=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"app",component:$,meta:{title:"Articles Recommendation"}}]}),T=e("5f5b"),D=(e("f9e3"),e("2dd8"),e("ecee")),I=e("c074"),P=e("ad3d"),E=e("bc3a"),M=e.n(E),N=e("9062"),z=e.n(N);e("e40d");n["default"].use(z.a),n["default"].prototype.$http=M.a.create({baseURL:"https://article-recommend.herokuapp.com/api",timeout:6e4,headers:{"Content-Type":"application/json"}}),D["c"].add(I["a"]),n["default"].component("font-awesome-icon",P["a"]),n["default"].use(T["a"]),n["default"].config.productionTip=!1,new n["default"]({router:S,render:function(a){return a($)}}).$mount("#app")},"5f66":function(a,t,e){"use strict";var n=e("3d36"),s=e.n(n);s.a},"7faf":function(a,t,e){"use strict";var n=e("8fba"),s=e.n(n);s.a},"8fba":function(a,t,e){},bdeb:function(a,t,e){"use strict";var n=e("008b"),s=e.n(n);s.a},f9d8:function(a,t,e){}});
//# sourceMappingURL=app.d96823f6.js.map