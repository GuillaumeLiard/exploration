webpackJsonp([3],{0:function(t,e){},"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},1:function(t,e){},2:function(t,e){},3:function(t,e){},"4Atj":function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="4Atj"},AOsL:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Gu7T"),o=n.n(r);n("yCyq");e.default={setCurrentPrediction:function(t,e){return t.model.prediction=e,t},setCurrentWeights:function(t,e){return t.model.weights=e,t},setHistory:function(t,e){return t.model.history=e,t.model.fullHistory=[].concat(o()(t.model.fullHistory),[e]),t},createModel:function(t,e){return t.model.model=e,t},increment:function(t){t.counter++},addLayer:function(t,e){return t.model.model.add(e),t.model.layers=[].concat(o()(t.model.layers),[e]),t},setCompileStatus:function(t,e){t.model.compiled=e},setLoop:function(t,e){t.loop=e}}},"E/v2":function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},F88d:function(t,e,n){"use strict";var r=n("E/v2"),o=n("P+aQ"),a=!1;var i=function(t){a||n("v1DA")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-loading.vue",e.a=s.exports},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,a=e.data,i=e.props;a.nuxtChild=!0;for(var s=n,u=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,l=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&l++,n=n.$parent;a.nuxtChildDepth=l;var f=u[l]||c,d={};r.forEach(function(t){void 0!==f[t]&&(d[t]=f[t])});var p={};o.forEach(function(t){"function"==typeof f[t]&&(p[t]=f[t].bind(s))});var h=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(s,t)};var m=[t("router-view",a)];return void 0!==i.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:d,on:p},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return b});var r=n("woOf"),o=n.n(r),a=n("BO1k"),i=n.n(a),s=n("/5sW"),u=n("NYxO");s.default.use(u.default);var c=n("QA5y"),l=c.keys(),f={},d=void 0;if(l.forEach(function(t){-1!==t.indexOf("./index.")&&(d=t)}),d&&(f=_(d)),"function"!=typeof f){f.modules||(f.modules={});var p=!0,h=!1,m=void 0;try{for(var x,v=i()(l);!(p=(x=v.next()).done);p=!0){var y=x.value,g=y.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==g){var w=g.split(/\//);(t=C(f,w))[g=w.pop()]=_(y),t[g].namespaced=!0}}}catch(t){h=!0,m=t}finally{try{!p&&v.return&&v.return()}finally{if(h)throw m}}}var b=f instanceof Function?f:function(){return new u.default.Store(o()({strict:!1},f,{state:f.state instanceof Function?f.state():{}}))};function _(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function C(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},C(t.modules[n],e)}},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},QA5y:function(t,e,n){var r={"./actions.js":"QlVn","./getters.js":"eGmw","./index.js":"vdRI","./mutations.js":"AOsL","./state.js":"e3SH"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="QA5y"},QhKw:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?e("p",{staticClass:"description"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};e.a=o},QlVn:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Gu7T"),o=n.n(r),a=n("Xxa5"),i=n.n(a),s=n("exGp"),u=n.n(s),c=n("BO1k"),l=n.n(c),f=n("yCyq");e.default={addLayers:function(t){var e=t.commit,n=t.state,r=!0,o=!1,a=void 0;try{for(var i,s=l()(n.config.layers);!(r=(i=s.next()).done);r=!0){var u=i.value;e("addLayer",f.b.dense(u.params))}}catch(t){o=!0,a=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}},compileModel:function(t){var e=t.commit,n=t.state;n.model.model.compile({optimizer:"sgd"===n.config.optimizer.type?f.e.sgd(n.config.optimizer.params.rate):"",loss:n.config.loss}),e("setCompileStatus",!0)},train:function(){var t=u()(i.a.mark(function t(e){var n,r=e.commit,o=e.dispatch,a=e.state;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.model.model.fit(a.model.trainingSet.xs_tensor,a.model.trainingSet.ys_tensor,a.config.training.params);case 2:n=t.sent,r("increment"),r("setHistory",n),a.loop&&o("train");case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),predict:function(){var t=u()(i.a.mark(function t(e){var n,r,a,s,u,c,d,p,h,m,x,v=e.commit,y=e.dispatch,g=e.state;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=f.d(g.inputs2D),r=g.model.model.predict(n),t.next=4,r.data();case 4:a=t.sent,f.a(n),f.a(r),v("setCurrentPrediction",a),s=g.model.model.getWeights(),u=[],c=!0,d=!1,p=void 0,t.prev=13,h=l()(s);case 15:if(c=(m=h.next()).done){t.next=27;break}return x=m.value,t.t0=[],t.t1=o()(u),t.next=21,x.data();case 21:t.t2=t.sent,t.t3=[t.t2],u=t.t0.concat.call(t.t0,t.t1,t.t3);case 24:c=!0,t.next=15;break;case 27:t.next=33;break;case 29:t.prev=29,t.t4=t.catch(13),d=!0,p=t.t4;case 33:t.prev=33,t.prev=34,!c&&h.return&&h.return();case 36:if(t.prev=36,!d){t.next=39;break}throw p;case 39:return t.finish(36);case 40:return t.finish(33);case 41:v("setCurrentWeights",u),g.loop&&y("predict");case 43:case"end":return t.stop()}},t,this,[[13,29,33,41],[34,,36,40]])}));return function(e){return t.apply(this,arguments)}}()}},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("pFYg"),o=n.n(r),a=n("//Fk"),i=n.n(a),s=n("Xxa5"),u=n.n(s),c=n("mvHQ"),l=n.n(c),f=n("exGp"),d=n.n(f),p=n("fZjL"),h=n.n(p),m=n("woOf"),x=n.n(m),v=n("/5sW"),y=n("unZF"),g=n("qcny"),w=n("YLfZ"),b=function(){var t=d()(u.a.mark(function t(e,n,r){var o,a,i=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!$.nuxt.err||n.path!==e.path,this._queryChanged=l()(e.query)!==l()(n.query),this._diffQuery=this._queryChanged?Object(w.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(w.k)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}));return function(e,n,r){return t.apply(this,arguments)}}(),_=function(){var t=d()(u.a.mark(function t(e,n,r){var o,a,s,c,l,f,d,p,h=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){if(n.path===t.path&&h.$loading.finish&&h.$loading.finish(),n.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!o){o=!0;var e=[];k=Object(w.e)(n,e).map(function(t,r){return Object(w.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(w.m)($,{route:e,from:n,next:a.bind(this)});case 6:if(this._dateLastError=$.nuxt.dateErr,this._hadError=!!$.nuxt.err,s=[],(c=Object(w.e)(e,s)).length){t.next=24;break}return t.next=13,T.call(this,c,$.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof g.a.layout?g.a.layout($.context):g.a.layout);case 17:return l=t.sent,t.next=20,T.call(this,c,$.context,l);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return $.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(O(c,e,n)),t.prev=26,t.next=29,T.call(this,c,$.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!$.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(f=c[0].options.layout)&&(f=f($.context)),t.next=37,this.loadLayout(f);case 37:return f=t.sent,t.next=40,T.call(this,c,$.context,f);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!$.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(d=!0,c.forEach(function(t){d&&"function"==typeof t.options.validate&&(d=t.options.validate({params:e.params||{},query:e.query||{},store:E}))}),d){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,i.a.all(c.map(function(t,n){if(t._path=Object(w.b)(e.matched[s[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==k[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return i.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,u=!!t.options.fetch,c=a&&u?30:45;if(a){var l=Object(w.j)(t.options.asyncData,$.context).then(function(e){Object(w.a)(t,e),h.$loading.increase&&h.$loading.increase(c)});o.push(l)}if(u){var f=t.options.fetch($.context);f&&(f instanceof i.a||"function"==typeof f.then)||(f=i.a.resolve(f)),f.then(function(t){h.$loading.increase&&h.$loading.increase(c)}),o.push(f)}return i.a.all(o)}));case 51:o||(this.$loading.finish&&this.$loading.finish(),k=c.map(function(t,n){return Object(w.b)(e.matched[s[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),k=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(p=g.a.layout)&&(p=p($.context)),t.next=63,this.loadLayout(p);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])}));return function(e,n,r){return t.apply(this,arguments)}}(),C=function(){var t=d()(u.a.mark(function t(e){var n,r,o,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return $=e.app,j=e.router,E=e.store,t.next=5,i.a.all(A(j));case 5:return n=t.sent,r=new v.default($),o=R.layout||"default",t.next=10,r.loadLayout(o);case 10:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),v.default.nextTick(function(){F(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(O(n,j.currentRoute)),k=j.currentRoute.matched.map(function(t){return Object(w.b)(t.path)(j.currentRoute.params)})),r.$loading={},R.error&&r.error(R.error),j.beforeEach(b.bind(r)),j.beforeEach(_.bind(r)),j.afterEach(L),j.afterEach(M.bind(r)),!R.serverRendered){t.next=23;break}return a(),t.abrupt("return");case 23:_.call(r,j.currentRoute,j.currentRoute,function(t){if(!t)return L(j.currentRoute,j.currentRoute),q.call(r,j.currentRoute),void a();j.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 24:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),k=[],$=void 0,j=void 0,E=void 0,R=window.__NUXT__||{};function O(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=x()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);h()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function S(t,e){return R.serverRendered&&e&&Object(w.a)(t,e),t._Ctor=t,t}function A(t){var e=this,n=Object(w.d)(t.options.base,t.options.mode);return Object(w.c)(t.match(n),function(){var t=d()(u.a.mark(function t(n,r,o,a,i){var s;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return s=S(Object(w.l)(n),R.data?R.data[i]:null),o.components[a]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,e)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())}function T(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof y.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),y.a[t])}),!a)return Object(w.i)(o,e)}function L(t,e){Object(w.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":o()(t))||t.options||((t=v.default.extend(t))._Ctor=t,n.components[r]=t),t})}function q(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?g.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e($.context)),this.setLayout(e)}function M(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||v.default.nextTick(function(){Object(w.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&k[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)v.default.set(t.$data,r,n[r])}}),q.call(n,t)})}function F(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),j.afterEach(function(e,n){v.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(g.b)().then(C).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||y;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),x()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=g,e.e=w,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=b,e.k=_,n.d(e,"h",function(){return C}),n.d(e,"m",function(){return k}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return d.a.resolve();return $(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=$,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},s=r||{},u=s.pretty?E:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!=typeof l){var f,d=i[l.name];if(null==d){if(l.optional){l.partial&&(a+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(d)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+o()(d)+"`");if(0===d.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var p=0;p<d.length;p++){if(f=u(d[p]),!e[c].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+o()(f)+"`");a+=(0===p?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?R(d):u(d),!e[c].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');a+=l.prefix+f}}else a+=l}return a}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=j.exec(t));){var u=n[0],c=n[1],l=n.index;if(i+=t.slice(a,l),a=l+u.length,c)i+=c[1];else{var f=t[a],d=n[2],p=n[3],h=n[4],m=n[5],x=n[6],v=n[7];i&&(r.push(i),i="");var y=null!=d&&null!=f&&f!==d,g="+"===x||"*"===x,w="?"===x||"*"===x,b=n[2]||s,_=h||m;r.push({name:p||o++,prefix:d||"",delimiter:b,optional:w,repeat:g,partial:y,asterisk:!!v,pattern:_?S(_):v?".*":"[^"+O(b)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=x()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n};var r=n("mvHQ"),o=n.n(r),a=n("pFYg"),i=n.n(a),s=n("Xxa5"),u=n.n(s),c=n("exGp"),l=n.n(c),f=n("//Fk"),d=n.n(f),p=n("fZjL"),h=n.n(p),m=n("Dd8w"),x=n.n(m),v=n("/5sW"),y=function(){return{}};function g(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=v.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function b(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function _(t){var e=this;return d.a.all(b(t,function(){var t=l()(u.a.mark(function t(n,r,o,a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return t.abrupt("return",o.components[a]=g(n));case 5:case"end":return t.stop()}},t,e)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var C=function(){var t=l()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",x()({},e,{meta:w(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=l()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!0,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/exploration/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},o=void 0===(n=t)?"undefined":i()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=A(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,C(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,C(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();function $(t,e){var n=void 0;return(n=2===t.length?new d.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof d.a||"function"==typeof n.then)||(n=d.a.resolve(n)),n}var j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function E(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function R(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function O(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function S(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function A(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/"),u=void 0;return 2===(a=s.split("#")).length&&(s=a[0],u=a[1]),i+=s?"/"+s:"",e&&"{}"!==o()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=u?"#"+u:""}},ct3O:function(t,e,n){"use strict";var r=n("sF5A"),o=n("QhKw"),a=!1;var i=function(t){a||n("rasP")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-error.vue",e.a=s.exports},e3SH:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={counter:0,train:{mode:"manual"},loop:!0,config:{layers:[{type:"dense",params:{units:1,inputShape:[2],activation:"sigmoid"}},{type:"dense",params:{units:1,activation:"sigmoid"}}],optimizer:{type:"sgd",params:{rate:.1}},loss:"meanSquaredError",training:{params:{batchSize:10,epochs:1}}},model:{compiled:!1,model:null,layers:[],prediction:null,weights:null,history:null,fullHistory:[],trainingSet:{xs:[[0,0],[0,1],[1,0],[1,1]],ys:[[0],[1],[1],[1]],xs_tensor:null,ys_tensor:null}},inputs2D:[[1,0],[1,1],[0,1],[0,0]]}},eGmw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={getFullHistoryLength:function(t){return t.model.fullHistory?t.model.fullHistory.length:0},getLastLossValue:function(t){return t.model.history?t.model.history.history.loss[0]:-1},getLastLossValueHuman:function(t,e){return e.getLastLossValue.toFixed(2)}}},lGvH:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/exploration/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:u,routes:[{path:"/",component:s,name:"index"}],fallback:!1})};var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("/ocq");a.default.use(i.default);var s=function(){return n.e(0).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var u=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new o.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})}},qR0g:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".__nuxt-error-page{padding:16px;padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:24px;font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return E});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),s=n.n(i),u=n("woOf"),c=n.n(u),l=n("Dd8w"),f=n.n(l),d=n("exGp"),p=n.n(d),h=n("MU8w"),m=(n.n(h),n("/5sW")),x=n("p3jY"),v=n.n(x),y=n("mtxM"),g=n("0F0d"),w=n("HBB+"),b=n("WRRc"),_=n("ct3O"),C=n("Hot+"),k=n("yTq1"),$=n("YLfZ"),j=n("J2Ti");n.d(e,"a",function(){return _.a});var E=function(){var t=p()(o.a.mark(function t(e){var n,r,a,i,u,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(y.a)(e),(r=Object(j.a)(e)).$router=n,a=f()({router:n,store:r,nuxt:{defaultTransition:R,transitions:[R],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},R,{name:t}):c()({},R,t):R}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,a.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},k.a),r.app=a,i=e?e.next:function(t){return a.router.push(t)},u=void 0,e?u=n.resolve(e.url).route:(l=Object($.d)(n.options.base),u=n.resolve(l).route),t.next=10,Object($.m)(a,{route:u,next:i,error:a.nuxt.error.bind(a),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");a[t="$"+t]=e,r[t]=a[t];var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||s()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),t.next=15;break;case 15:return t.abrupt("return",{app:a,router:n,store:r});case 16:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();m.default.component(g.a.name,g.a),m.default.component(w.a.name,w.a),m.default.component(b.a.name,b.a),m.default.component(C.a.name,C.a),m.default.use(v.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var R={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},rasP:function(t,e,n){var r=n("qR0g");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("491cb6e7",r,!1,{sourceMap:!1})},sF5A:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},unZF:function(t,e,n){"use strict";var r=n("BO1k"),o=n.n(r),a=n("4Atj"),i=a.keys();function s(t){var e=a(t);return e.default?e.default:e}var u={},c=!0,l=!1,f=void 0;try{for(var d,p=o()(i);!(c=(d=p.next()).done);c=!0){var h=d.value;u[h.replace(/^\.\//,"").replace(/\.(js)$/,"")]=s(h)}}catch(t){l=!0,f=t}finally{try{!c&&p.return&&p.return()}finally{if(l)throw f}}e.a=u},v1DA:function(t,e,n){var r=n("lGvH");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("4a62131c",r,!1,{sourceMap:!1})},vdRI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("NYxO"),o=n("e3SH"),a=n("AOsL"),i=n("QlVn"),s=n("eGmw");e.default=function(){return new r.default.Store({state:o.default,mutations:a.default,actions:i.default,getters:s.default})}},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("F88d"),s={_default:function(){return n.e(1).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}},u={};e.a={head:{title:"exploration",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&u["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=u[e],this.layout},loadLayout:function(t){var e=this;t&&(s["_"+t]||u["_"+t])||(t="default");var n="_"+t;return u[n]?o.a.resolve(u[n]):s[n]().then(function(t){return u[n]=t,delete s[n],u[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}}},["T23V"]);