(window["webpackJsonp649-pwa"]=window["webpackJsonp649-pwa"]||[]).push([[0],{100:function(e){e.exports=JSON.parse('{"app_name":"PWA","version":"0.2.1"}')},101:function(e){e.exports=JSON.parse('{"app_name":"PWA","version":"0.2.1"}')},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),i=a(26),o=a.n(i),s=a(6),l=a(7),u=a(9),m=a(8),d=a(13),p=a(10),f=a(23),h=a(52),v=a(53),b=a.n(v),g={Component:function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={isShow:!1,component:void 0},a.notificationSystem=c.a.createRef(),a.show=a.show.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"show",value:function(e){this.notificationSystem.current.addNotification(e)}},{key:"componentDidMount",value:function(){this.props.global&&(n=this)}},{key:"componentWillUnmount",value:function(){this.props.global&&(n=null)}},{key:"render",value:function(){return c.a.createElement(b.a,{ref:this.notificationSystem})}}]),t}(r.Component),show:function(e){n&&n.show(e)}},E=a(39),O=a(19),y=(a(78),a(5)),w=a(3),j=a.n(w),N=a(20),k=a(54),S=a.n(k),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleWebShare=a.handleWebShare.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleWebShare",value:function(){var e=Object(N.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==navigator.share){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,navigator.share({title:"start",text:"hello",url:"quantagamewallet://"});case 5:e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(2),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=JSON.stringify([{draw:1,data:[1,2,3,4,5,6]},{draw:2,data:[1,2,3,4,5,6,7]}]),t=Date.now();return c.a.createElement("div",{id:"wrapper",className:"block-game-play block-my-ticket"},c.a.createElement("div",{id:"content"},c.a.createElement("div",{id:"block-banner"},c.a.createElement("div",{className:"container"},c.a.createElement("h2",{className:"fadeInUp upcase animated"},"The world's first licensed"),c.a.createElement("h1",{className:"fadeInUp animated"},"Blockchain Lottery"),c.a.createElement("h3",{className:"fadeInUp animated"},"ETHEREUM TECHNOLOY"))),c.a.createElement("div",{id:"game-play"},c.a.createElement("div",{className:"container p-0 p-sm-0"},c.a.createElement("div",{className:"inner clearfix clear-background"},c.a.createElement("div",{className:"left border-radius-none border-radius-none-sm game-play-header"},c.a.createElement("div",{className:"group"},c.a.createElement("div",{className:"items",style:{padding:"20px 0px",width:"55%"}},c.a.createElement("img",{src:S.a,alt:""})),c.a.createElement("div",{className:"jackpot_group"},c.a.createElement("div",{className:"items jackpot"},c.a.createElement("h5",null,"1st Prize"),c.a.createElement("p",{className:"eth-custom"},"10,000",c.a.createElement("span",{style:{fontWeight:300,fontSize:"18px"}},"QGT")),c.a.createElement("p",null),c.a.createElement("p",{style:{opacity:"0.6"}},"equivalent of \xa310,000 GBP")),c.a.createElement("div",{className:"items jackpot draw_time"},c.a.createElement("div",{className:"draw_jackpot"},c.a.createElement("h5",null,"Draw: 8"),c.a.createElement("span",{className:"status selling"},"Selling")),c.a.createElement("div",{className:"link"},c.a.createElement("a",{href:"https://zrg-team.github.io/pwa-demo/","data-toggle":"modal","data-target":"#limit"},"Limit my plays"),c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://zrg-team.github.io/pwa-demo/","data-toggle":"modal","data-target":"#self"},"Self Exclude"))))))),c.a.createElement("div",{className:"inner clearfix"},c.a.createElement("div",{className:"left border-radius-none border-radius-none-sm",style:{marginTop:20,marginBottom:20}},c.a.createElement("ul",{className:"nav nav-tabs tab-gaming tab-type",id:"tabs",role:"tablist"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link active show",href:"#tab1",id:"tab1-tab","data-toggle":"tab","aria-expanded":"true"},"Standard")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link upcase",href:"#tab2",id:"tab2-tab","data-toggle":"tab","aria-expanded":"false"},"PowerBuy"))),c.a.createElement("div",{className:"tab-content tab-content-gaming",id:"tabs-content"},c.a.createElement("div",{className:"tab-pane fade show active",id:"tab1",role:"tabpanel","aria-labelledby":"tab1-tab"},c.a.createElement("a",{href:"#",className:"link-play"},"What\u2019s Standard Play ?"),c.a.createElement("div",{className:"tickets-number"},c.a.createElement("span",null,"Tickets: ")),c.a.createElement("div",{className:"settings"},c.a.createElement("a",{href:"#",className:"link-setting button button-hover button-mat"},c.a.createElement("i",{className:"fa fa-random"}),"Random all"),c.a.createElement("a",{href:"#",className:"link-setting button button-hover button-mat"},c.a.createElement("i",{className:"fa fa-trash"}),"Delete all"),c.a.createElement("a",{href:"#",className:"link-setting button button-hover button-mat","data-toggle":"modal","data-target":"#modalSettingFavorite"},c.a.createElement("i",{className:"fa fa-star"}),"Favourite"),c.a.createElement("a",{href:"#",className:"link-setting button button-hover button-mat","data-toggle":"modal","data-target":"#modalSetting"},c.a.createElement("i",{className:"fa fa-minus-circle"}),"Ignore")),c.a.createElement("div",{className:"choose-ticket"},c.a.createElement("div",{className:"number-ticket"},c.a.createElement("p",null,"Ticket #1 ")),c.a.createElement("div",{className:"all-number"},c.a.createElement("div",{className:"accordion",id:"accordion"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{id:"collapse1-standard",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordion"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"no-number"},c.a.createElement("div",{className:"item"},"01"),c.a.createElement("div",{className:"item"},"02"),c.a.createElement("div",{className:"item"},"03"),c.a.createElement("div",{className:"item"},"04"),c.a.createElement("div",{className:"item"},"05"),c.a.createElement("div",{className:"item"},"06"),c.a.createElement("div",{className:"item"},"07"),c.a.createElement("div",{className:"item"},"08"),c.a.createElement("div",{className:"item"},"09"),c.a.createElement("div",{className:"item"},"10"),c.a.createElement("div",{className:"item"},"11"),c.a.createElement("div",{className:"item"},"12"),c.a.createElement("div",{className:"item"},"13"),c.a.createElement("div",{className:"item"},"14"),c.a.createElement("div",{className:"item"},"15"),c.a.createElement("div",{className:"item"},"16"),c.a.createElement("div",{className:"item"},"17"),c.a.createElement("div",{className:"item"},"18"),c.a.createElement("div",{className:"item"},"19"),c.a.createElement("div",{className:"item"},"20"),c.a.createElement("div",{className:"item"},"21"),c.a.createElement("div",{className:"item"},"22"),c.a.createElement("div",{className:"item"},"23"),c.a.createElement("div",{className:"item"},"24"),c.a.createElement("div",{className:"item"},"25"),c.a.createElement("div",{className:"item"},"26"),c.a.createElement("div",{className:"item"},"27"),c.a.createElement("div",{className:"item"},"28"),c.a.createElement("div",{className:"item"},"29"),c.a.createElement("div",{className:"item"},"30"),c.a.createElement("div",{className:"item"},"31"),c.a.createElement("div",{className:"item"},"32"),c.a.createElement("div",{className:"item"},"33"),c.a.createElement("div",{className:"item"},"34"),c.a.createElement("div",{className:"item"},"35"),c.a.createElement("div",{className:"item"},"36"),c.a.createElement("div",{className:"item"},"37"),c.a.createElement("div",{className:"item"},"38"),c.a.createElement("div",{className:"item"},"39"),c.a.createElement("div",{className:"item"},"40"),c.a.createElement("div",{className:"item"},"41"),c.a.createElement("div",{className:"item"},"42"),c.a.createElement("div",{className:"item"},"43"),c.a.createElement("div",{className:"item"},"44"),c.a.createElement("div",{className:"item"},"45"),c.a.createElement("div",{className:"item"},"46"),c.a.createElement("div",{className:"item"},"47"),c.a.createElement("div",{className:"item"},"48"),c.a.createElement("div",{className:"item"},"49")))))))))),c.a.createElement("div",{className:"link-add-ticket"},c.a.createElement("a",{href:"paymentwallet://".concat(encodeURIComponent("callback=".concat("https://zrg-team.github.io/pwa-demo/#/","&token=1&uid=").concat(t,"&method=payment&data=").concat(e))),className:"button button-mat button-hover upcase"},c.a.createElement("i",{className:"fa fa-plus"}),"Buy Tickets"))),c.a.createElement("a",{href:"intent:#Intent;action=android.intent.action.SEND;package=com.wallet2;end"},"PAYMENT BY WALLET"),c.a.createElement("a",{href:"intent://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;S.browser_fallback_url=http%3A%2F%2Fzxing.org;end"}," Take a QR code "),c.a.createElement("a",{href:"intent://scan/#Intent;action=android.intent.action.SEND;package=com.wallet2;type=text/plain;S.android.intent.extra.TEXT=https%3A%2F%2Fpaul.kinlan.me%2F;S.android.intent.extra.SUBJECT=Amazing;end"},"PAYMENT BY WALLET 2"),c.a.createElement("a",{href:"intent://lotto649/#Intent;S.action=share;scheme=walletpayment;package=com.wallet2;S.title=Example;S.url=http%3A%2F%2Ficerrr.rejh.nl%2F;end"},"PAYMENT BY WALLET 3"),c.a.createElement("a",{href:"intent://stackoverflow.com/questions/29250152/what-is-the-intent-to-launch-any-website-link-in-google-chrome#Intent;scheme=http;package=com.android.chrome;end"},"GOOGLE CHROME"),c.a.createElement("a",{href:"intent://stackoverflow.com/questions/29250152/what-is-the-intent-to-launch-any-website-link-in-google-chrome#Intent;scheme=http;action=android.intent.action.VIEW;end;"},"WEBVIEW"),c.a.createElement("a",{href:"intent:#Intent;action=android.intent.action.SEND;type=text/plain;end"},"SHARE ALL"),c.a.createElement("a",{href:"intent:#Intent;action=share;type=text/plain;end"},"SHARE ALL 2"),c.a.createElement("a",{href:"intent:#Intent;S.action=share;type=text/plain;end"},"SHARE ALL 3"),c.a.createElement("a",{href:"intent://#Intent;action=android.intent.action.SEND;type=text/plain;end"},"SHARE ALL 3"),c.a.createElement("div",{className:"right background-right border-radius-none border-radius-none-sm section-payment-right",style:{marginBottom:20}},c.a.createElement("div",{style:{padding:10}},c.a.createElement("p",{className:"text-payment"},"PAYMENT",c.a.createElement("i",{className:"fa fa-angle-down"})),c.a.createElement("div",{className:"number-set clearfix",style:{height:76}},c.a.createElement("div",{className:"text-left"},c.a.createElement("p",null,"Price for 1 set of numbers at draw No.8:")),c.a.createElement("div",{className:"text-right"},c.a.createElement("p",null,"1 QGT"),c.a.createElement("p",null,"(\xa31 GBP)"))),c.a.createElement("div",{className:"tickets"},c.a.createElement("div",{className:"grand-total"},c.a.createElement("div",{className:"clearfix group"},c.a.createElement("div",{className:"text-left"},c.a.createElement("p",null,"Grand total")),c.a.createElement("div",{className:"text-right"},c.a.createElement("p",{className:"text-total-eth"},"0 QGT "),c.a.createElement("p",{className:"text-total-usd"},"(\xa30 GBP)"))),c.a.createElement("div",{className:"link-confirm"},c.a.createElement("div",{onClick:this.handleWebShare,className:"link-confirm"},c.a.createElement("a",{href:"#",className:"button button-mat button-hover"},c.a.createElement("div",{className:"psuedo-text"},"Confirm")))))))))))))}}]),t}(c.a.Component),A=a(31),P=a(29),T=a.n(P),C="en",L=3e4,D=a(107),I=Object(D.a)("API_FETCH_END"),R=Object(D.a)("API_FETCH_START"),U=Object(D.a)("API_FETCH_SUCCESS"),_=Object(D.a)("API_FETCH_FAILURE"),W=Object(D.a)("LOADING_START"),M=Object(D.a)("LOADING_END"),F=(Object(D.a)("AUTHENTICATION"),Object(D.a)("SET_SESSION_MESSAGE"),Object(D.a)("SET_SESSION_LOADING")),H=Object(D.a)("SET_HEADER_DATA");var G=Object(D.a)("CLEAR_ALL"),B=Object(D.a)("SET_USER_LANGUAGE"),z=Object(D.a)("SET_USER_TIMEOUT"),J=Object(D.a)("SET_LAST_ROUTE"),V=a(60),Y=a(55),q=a(14),Q=a(28),X=a(56),$=a.n(X),K=a(18),Z=a(61),ee=a(17),te=a(30),ae=a.n(te),ne=a(57),re=a.n(ne);ae.a.defaultLocale=C,ae.a.fallbacks=!0,ae.a.translations={en:a(100),vi:a(101)};var ce=function(e){return ie.apply(this,arguments)};function ie(){return(ie=Object(N.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a=t||C,re.a.locale=a,ae.a.locale=a}catch(n){console.error(n)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var oe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={isShow:!1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"show",value:function(){this.setState({isShow:!0})}},{key:"hide",value:function(){this.setState({isShow:!1})}},{key:"isVisible",value:function(){return this.state.isShow}},{key:"componentWillMount",value:function(){t.instance=this}},{key:"componentWillUnmount",value:function(){delete t.instance}},{key:"render",value:function(){return this.state.isShow?c.a.createElement("div",{className:"loading-container"},c.a.createElement("div",{className:"loading-inner"})):null}}]),t}(r.Component),se={Component:oe,show:function(){oe.instance&&oe.instance.show()},hide:function(){oe.instance&&oe.instance.hide()},isVisible:function(){return oe.instance.isVisible()}},le=null,ue=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).initElement=function(e){a.element=e},a.toHiddenState=function(){a.element.setAttribute("data-state","hidden")},a.state={state:"hidden",options:{}},a.count=0,a.runningTimerId=null,a.hidingTimerId=null,a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.options,t=this.props,a=t.cls,n=t.thumbStyle,r="loader-60devs ".concat(a);return c.a.createElement("div",{className:r,style:e.style||{},"data-state":this.state.state,ref:this.initElement},c.a.createElement("div",{className:"loader-60devs-progress",style:n}))}},{key:"show",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var t=this.element;if(++this.count>1||!t)return!1;clearTimeout(this.hidingTimerId);var a=t.querySelector(".loader-60devs-progress");t.setAttribute("data-state","hidden"),a.outerHTML=a.outerHTML;t.offsetHeight;t.setAttribute("data-state",""),t.offsetHeight,t.setAttribute("data-state","running"),this.setState({options:e})}catch(n){console.log("err",n)}}},{key:"hide",value:function(){--this.count>0||(this.element.setAttribute("data-state","finishing"),this.hidingTimerId=setTimeout(this.toHiddenState,500),this.setState({options:{}}))}},{key:"hideAll",value:function(){this.count=1,this.hide()}},{key:"componentWillMount",value:function(){le=this}},{key:"componentWillUnmount",value:function(){clearTimeout(this.hidingTimerId),le=null}},{key:"isVisible",value:function(){return"hidden"!==this.element.getAttribute("data-state")}}]),t}(r.Component);ue.defaultProps={cls:"",style:{},thumbStyle:{}};var me={Component:ue,show:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};le&&le.show(e)},hide:function(){le&&le.hide()},hideAll:function(){le&&le.hideAll()},isVisible:function(){return le&&le.isVisible()}},de=j.a.mark(Ne),pe=j.a.mark(ke),fe=j.a.mark(Se),he=j.a.mark(xe),ve=j.a.mark(Ae),be=j.a.mark(Pe),ge=j.a.mark(Te),Ee=j.a.mark(Ce),Oe=j.a.mark(Ie),ye=j.a.mark(Re),we=j.a.mark(Ue),je=j.a.mark(_e);function Ne(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.payload.config,t.next=3,me.show();case 3:case"end":return t.stop()}}),de)}function ke(e){var t;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,t.response,t.config,a.next=3,me.hide();case 3:case"end":return a.stop()}}),pe)}function Se(e){var t,a;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,a=t.error,t.config,n.next=3,me.hide();case 3:console.error(a);case 4:case"end":return n.stop()}}),fe)}function xe(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)(R.toString(),Ne);case 2:case"end":return e.stop()}}),he)}function Ae(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)(U.toString(),ke);case 2:case"end":return e.stop()}}),ve)}function Pe(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)(_.toString(),Se);case 2:case"end":return e.stop()}}),be)}function Te(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)(I.toString(),ke);case 2:case"end":return e.stop()}}),ge)}function Ce(){var e,t;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(ee.b)((function(e){return e.session.isLoading}));case 2:return e=a.sent,a.next=5,Object(ee.b)((function(e){return e.session.loadingCount}));case 5:t=a.sent,e?se.show():0===t&&se.hide();case 7:case"end":return a.stop()}}),Ee)}function Le(e){var t=e.payload;ce(t)}function De(e){e.payload}function Ie(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)(W.toString(),Ce);case 2:case"end":return e.stop()}}),Oe)}function Re(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)(M.toString(),Ce);case 2:case"end":return e.stop()}}),ye)}function Ue(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.d)(B.toString(),Le);case 2:case"end":return e.stop()}}),we)}function _e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.d)(Q.a,De);case 2:case"end":return e.stop()}}),je)}var We,Me=[Te(),xe(),Ae(),Pe(),Ie(),Re(),Ue(),_e()],Fe=a(106);function He(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ge(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?He(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):He(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Be,ze={language:"en",timeout:3e4,route:{}},Je=(We={},Object(y.a)(We,G,(function(e,t){return Ge({},ze)})),Object(y.a)(We,B,(function(e,t){return Ge({},e,{language:t.payload})})),Object(y.a)(We,z,(function(e,t){return Ge({},e,{timeout:t.payload})})),Object(y.a)(We,J,(function(e,t){return Ge({},e,{route:t.payload})})),We),Ve=Object(Fe.a)(Je,ze);function Ye(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function qe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ye(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ye(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Qe=function(e,t,a){var n=t.config,r=n.key||n.url;return a<0&&e[r]+a===0?delete e[r]:e[r]=(e[r]||0)+a,e},Xe={fetching:{},loadingCount:0,isLoading:!1,messages:{},sessionLoading:!1,headerData:null},$e=(Be={},Object(y.a)(Be,G,(function(e,t){return qe({},Xe)})),Object(y.a)(Be,R,(function(e,t){return qe({},e,{},{fetching:Qe(e.fetching,t.payload,1)})})),Object(y.a)(Be,U,(function(e,t){return qe({},e,{},{fetching:Qe(e.fetching,t.payload,-1)})})),Object(y.a)(Be,I,(function(e,t){return qe({},e,{},{fetching:Qe(e.fetching,t.payload,-1)})})),Object(y.a)(Be,_,(function(e,t){return qe({},e,{},{fetching:Qe(e.fetching,t.payload,-1)})})),Object(y.a)(Be,W,(function(e,t){return qe({},e,{},{loadingCount:e.loadingCount+1,isLoading:!0})})),Object(y.a)(Be,M,(function(e,t){return qe({},e,{},{loadingCount:e.loadingCount-1,isLoading:e.loadingCount>1})})),Object(y.a)(Be,F,(function(e,t){return qe({},e,{sessionLoading:t.payload})})),Object(y.a)(Be,H,(function(e,t){return qe({},e,{headerData:t.payload})})),Be),Ke=Object(Fe.a)($e,Xe);function Ze(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function et(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ze(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ze(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var tt=Object(q.b)(),at={key:"root",storage:$.a,blacklist:["session"]},nt=function(e){return Object(Q.b)(at,et({common:Ve,session:Ke},e))};function rt(){var e;try{e={};var t=JSON.parse(window.localStorage.getItem("persist:root")),a=t&&t.common?JSON.parse(t.common):ze;a.token=function(e,t){try{for(var a="".concat(e,"="),n=decodeURIComponent(document.cookie).split(";"),r=0;r<n.length;r++){for(var c=n[r];" "===c.charAt(0);)c=c.substring(1);if(0===c.indexOf(a))return c.substring(a.length,c.length)}}catch(i){console.log("getCookie err",i)}return""}("token"),t.common=JSON.stringify(a),window.localStorage.setItem("persist:root",JSON.stringify(t))}catch(n){e=void 0}return et({},e||{})}var ct=K.d,it=function(e){var t=rt(),a=Object(V.a)(),n=Object(K.e)(nt(e),t,ct(function(e){var t=[];e&&t.push(e);Object(Y.createLogger)({level:"info",collapsed:!0});return K.a.apply({},t)}(a))),r=Object(Q.c)(n);return n.reducers=nt(e),a.run(function(e){var t=j.a.mark(a);function a(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.a)(Object(Z.a)(Me));case 2:case"end":return e.stop()}}),t)}return a}(n.getState)),{persistor:r,store:n}}();function ot(){console.problem("Missing store")}var st=new(function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"getStates",value:function(){return it.store&&it.store.getState()||{}}},{key:"getState",value:function(e){return e&&(it.store&&it.store.getState()||{})[e]||{}}},{key:"dispatch",get:function(){return it.store&&it.store.dispatch||ot}}]),e}());function lt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ut(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?lt(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):lt(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function mt(){st.dispatch(G()),function(e,t){try{document.cookie="".concat(e,"=").concat(t,";path=/")}catch(a){return!1}}("token","")}var dt=a(58),pt={getData:"".concat(dt.DEFAULT_URL,"/example/api")},ft=Object(D.a)("".concat("example","_SET_DATA"));function ht(){return function(e){var t=e.url,a=e.headers,n=Object(A.a)(e,["url","headers"]);return T()(ut({method:"GET",timeout:L,url:t,headers:ut({"Content-Type":"application/json",Authorization:"Bearer "},a)},n)).then((function(e){return e})).catch((function(e){throw e.response&&401===e.response.status&&mt(),e}))}({url:pt.getData,method:"GET"}).then((function(e){var t=e.data;if(t)return t;throw new Error("INVALID_RETURN")}))}function vt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var bt,gt=Object(f.b)((function(e,t){return{}}),(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?vt(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):vt(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},function(e,t){return{getData:function(){var t=Object(N.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ht();case 3:if(!(a=t.sent)){t.next=7;break}return e(ft(a)),t.abrupt("return",a);case 7:return t.abrupt("return",!1);case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",!1);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}()}}(e))}))(x),Et=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(gt,null)}}]),t}(c.a.Component),Ot=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.history,a=e.onRouteChange;t.listen((function(e,t){a(e,t)}))}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(O.c,null,c.a.createElement(O.a,{key:"",path:"/",exact:!0,component:Et}),",",c.a.createElement(O.a,{component:Et})))}}]),t}(r.Component),yt=Object(O.f)(Ot),wt={Component:function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={isShow:!1,component:void 0},a.activateModal=a.activateModal.bind(Object(d.a)(a)),a.deactivateModal=a.deactivateModal.bind(Object(d.a)(a)),a.getApplicationNode=a.getApplicationNode.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"activateModal",value:function(e){this.setState({isShow:!0,component:e})}},{key:"deactivateModal",value:function(){var e=this.state.deactiveCallback;e&&e(),this.setState({isShow:!1,title:"",component:void 0})}},{key:"getApplicationNode",value:function(){return document.getElementById("application")}},{key:"componentDidMount",value:function(){this.props.global&&(bt=this)}},{key:"componentWillUnmount",value:function(){this.props.global&&(bt=null)}},{key:"render",value:function(){var e=this.state,t=e.isShow,a=e.component;return t&&a?a:null}}]),t}(r.Component),show:function(e){bt&&bt.activateModal(e)},hide:function(){bt&&bt.deactivateModal()},getApplicationNode:function(){return bt&&bt.getApplicationNode()||void 0}},jt=function(){return c.a.createElement("div",{className:"loading-session-body"},c.a.createElement("div",{className:"loading"}))};var Nt=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={loading:!1},a.notificationSystem=c.a.createRef(),a.handleRouteChange=a.handleRouteChange.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleRouteChange",value:function(e,t){try{var a=this.props.dispatch,n=function(e){if(!e)return{};var t=e.slice(1).split("&"),a={};return t.forEach((function(e){(e=e.split("=")).length>1&&e[0]&&(a[e[0]]=e[1]||"")})),a}(decodeURIComponent(e.hash));Object.keys(n).length&&n.message&&(a(H(n)),g.show({message:"QVI response ".concat(n.message),level:"success",autoDismiss:10}))}catch(r){}}},{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.dispatch;(0,t.mainPageLoaded)(a),window.addEventListener("hashchange",(function(){e.handleRouteChange(window.location)}))}},{key:"shouldComponentUpdate",value:function(e){return!1}},{key:"render",value:function(){var e=this.state.loading,t=this.props.store;return e?c.a.createElement(jt,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,null,c.a.createElement(yt,{onRouteChange:this.handleRouteChange,store:t})),c.a.createElement(me.Component,null),c.a.createElement(se.Component,{type:"bars"}),c.a.createElement(wt.Component,{global:!0}),c.a.createElement(g.Component,{global:!0}))}}]),t}(r.Component),kt=Object(f.b)((function(e){return{}}),(function(e){return{dispatch:e}}))(Nt),St=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function xt(e){if("serviceWorker"in navigator){if(new URL("/pwa-demo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pwa-demo","/service-worker.js");St?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):At(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):At(t,e)}))}}function At(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){if("installed"===a.state)if(navigator.serviceWorker.controller){console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA.");var n=new Event("newContentAvailable");window.dispatchEvent(n),t&&t.onUpdate&&t.onUpdate(e)}else console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Pt=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).servicePrompt=null,a.mainPageLoaded=a.mainPageLoaded.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"serviceRegistration",value:function(){var e=this;try{xt({onSuccess:function(){},onUpdate:function(){g.show({message:"New version available.",level:"success",autoDismiss:0,action:{label:"Refresh",callback:function(){!function(e){if("serviceWorker"in navigator)return navigator.serviceWorker.ready.then((function(t){t.unregister(),e(t)}));e()}((function(e){if(e)return setTimeout((function(){window.location.reload(window.location.href)}),500),g.show({message:"Updated.",level:"success"});g.show({message:"Update fail.",level:"error"})}))}}})}}),window.addEventListener("beforeinstallprompt",(function(t){t.preventDefault(),e.servicePrompt=t,g.show({message:"Install the Lotto 6-49 now.",level:"info",position:"bc",autoDismiss:0,action:{label:"Install",callback:function(){e.servicePrompt.prompt(),e.servicePrompt.userChoice.then((function(t){"accepted"===t.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),e.servicePrompt=null}))}}})}))}catch(t){console.error("Fatal Error. Cannot Initialize.",t)}}},{key:"mainPageLoaded",value:function(e){this.serviceRegistration()}},{key:"render",value:function(){var e=this.props,t=e.store,a=e.persistor,n=e.history;return c.a.createElement(f.a,{store:t},c.a.createElement(h.PersistGate,{persistor:a},c.a.createElement(kt,{store:t,history:n,persistor:a,mainPageLoaded:this.mainPageLoaded})))}}]),t}(r.Component);a(103),a(104);o.a.render(c.a.createElement(Pt,Object.assign({},it,{history:tt})),document.getElementById("root"))},54:function(e,t){},58:function(e){e.exports=JSON.parse('{"DEFAULT_URL":"http://66.42.60.2:8085","TIMEOUT":15000,"DEFAULT_LANGUAGE":"en"}')},62:function(e,t,a){e.exports=a(105)},78:function(e,t,a){}},[[62,1,2]]]);