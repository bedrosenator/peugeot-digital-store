(this["webpackJsonppeugeot-digital-store"]=this["webpackJsonppeugeot-digital-store"]||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(27),o=a.n(c),l=(a(63),a(64),a(7)),i=a(22),s=a(8),u=a(12),m=a.n(u),d=function(e,t){return e.sort((function(e,a){return Number(e[t])-Number(a[t])}))},f=function(e){return e.toLocaleString("da-DA",{style:"currency",currency:"dkk",minimumFractionDigits:0,maximumFractionDigits:2})},p=a(9),E=a.n(p),O={url:"https://reacttestprojectapi.azurewebsites.net/",apiKey:"caa2f06d-83c4-46e3-a7fc-3b5fad6a8fce"},_=a(50),b=a.n(_),v=a(11),g=E.a.mark(h);function h(e){var t,a,r,n,c,o;return E.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.uri,a=e.method,r=void 0===a?"GET":a,n=e.data,c=e.errorAction,l.prev=1,l.next=4,b()({method:r,url:O.url+t,data:n,headers:{"X-API-KEY":O.apiKey,"Content-Type":"application/json"}});case 4:return o=l.sent,l.next=7,o.data;case 7:return l.abrupt("return",l.sent);case 10:return l.prev=10,l.t0=l.catch(1),console.error(l.t0),l.next=15,Object(v.c)(c({status:l.t0.response.status,statusText:l.t0.response.statusText}));case 15:return l.abrupt("return",l.sent);case 16:case"end":return l.stop()}}),g,null,[[1,10]])}var j={request:h},C=a(51),x=a.n(C);var y=function(e){var t=e.price,a=e.className;return n.a.createElement("div",{className:m()(x.a.price,a)},f(Number(t)))},k=a(23),L=a.n(k),w=function(e){var t=e.name,a=e.code,r=e.imageUrl,c=e.priceFrom;return n.a.createElement(i.a,{to:"/models/".concat(a,"/trims"),className:L.a.modelItem},n.a.createElement("img",{alt:t,className:L.a.image,src:r}),n.a.createElement("div",{className:L.a.description},n.a.createElement("div",{className:L.a.title},t),n.a.createElement(y,{className:L.a.price,price:c})))},N=a(52),M=a.n(N),S=function(e){var t=e.models;return n.a.createElement("div",{className:M.a.modelsList},t.length&&t.map((function(e){return n.a.createElement(w,Object.assign({key:e.code},e))})))},R=a(18),T=function(e){return e.models},F=Object(R.a)(T,(function(e){return e.data})),P=Object(R.a)(T,(function(e){return e.loading})),D=a(17),I=a(53),U=a.n(I),B=a(37),H=a.n(B);function A(e){var t=e.loading,a=void 0!==t&&t,r=e.children,c=e.className;return n.a.createElement("div",{className:m()(H.a.pageContainer,c,Object(D.a)({},H.a.centered,a))},n.a.createElement(U.a,{type:"Puff",color:"#00BFFF",height:100,width:100,visible:a}),!a&&n.a.createElement(n.a.Fragment,null,r))}var G=a(54),q=a.n(G),K=function(e){var t=e.text,a=e.className;return n.a.createElement("div",{className:m()(q.a.title,a)},t)};function W(e){return{type:"GET_MODELS_ERROR",data:e}}var z=a(38),Y=a.n(z),J=function(){var e=Object(s.c)(F),t=Object(s.c)(P),a=Object(s.b)();return Object(r.useEffect)((function(){a({type:"GET_MODELS"})}),[a]),n.a.createElement(A,{loading:t},n.a.createElement("div",{className:m()(Y.a.models)},n.a.createElement(K,{className:Y.a.title,text:"CHOOSE YOUR NEW CAR"}),n.a.createElement(S,{models:e})))},V=function(e){return e.model},Z=Object(R.a)(V,(function(e){return e.data})),X=Object(R.a)(Z,(function(e){return e.currentModel})),Q=Object(R.a)(Z,(function(e){return e.selectedTrim})),$=Object(R.a)(Z,(function(e){return e.selectedColor})),ee=Object(R.a)(X,Q,$,(function(e,t,a){var r=t.colors.find((function(e){return a.name===e.name}))||a,n={name:t.name,price:t.price,color:r};return{name:e.name,code:e.code,trim:n}})),te=Object(R.a)(ee,(function(e){return{modelName:e.name,colorName:e.trim.color.name,trimName:e.trim.name}})),ae=Object(R.a)(ee,(function(e){return e.trim.price+e.trim.color.price})),re=Object(R.a)(V,(function(e){return e.loading})),ne="success",ce="failure",oe=function(e){return{type:"GET_MODEL_SUCCESS",data:e}},le=function(e){return{type:"GET_MODEL_ERROR",data:e}},ie=function(e){return{type:"SET_ACTIVE_TRIM",data:e}},se=function(e){return{type:"SET_ACTIVE_COLOR",data:e}},ue=function(){return{type:"CHECKOUT_SUCCESS",data:ne}},me=function(e){return{type:"CHECKOUT_ERROR",data:e}},de=a(20),fe=a.n(de),pe=function(e){var t=e.color,a=e.isActive,r=Object(s.b)();return n.a.createElement("div",{onClick:function(){r(se(t))},className:fe.a.color},n.a.createElement("img",{className:m()(fe.a.colorIcon,Object(D.a)({},fe.a.active,a)),alt:t.name,src:t.iconUrl}),n.a.createElement("div",{className:fe.a.name},t.name),0===t.price?n.a.createElement("div",{className:fe.a.price},"Standard"):n.a.createElement(y,{className:fe.a.price,price:t.price}))},Ee=a(30),Oe=a.n(Ee),_e=K,be=function(e){var t=e.colors,a=e.selectedColor;return n.a.createElement("div",{className:Oe.a.colors},n.a.createElement(_e,{className:Oe.a.title,text:"SELECT COLOR"}),n.a.createElement("div",{className:Oe.a.colorsList},t.map((function(e){return n.a.createElement(pe,{key:e.name,color:e,isActive:a.name===e.name})}))))},ve=a(21),ge=a.n(ve),he=function(){var e=Object(s.c)(ae),t=Object(s.c)(ee),a=t.name,r=t.trim;return n.a.createElement("div",{className:ge.a.modelDetails},n.a.createElement("img",{title:a,className:ge.a.image,alt:a,src:r.color.imageUrl}),n.a.createElement("div",{className:ge.a.name},a," ",n.a.createElement("span",{className:ge.a.trim},r.name),n.a.createElement("div",{className:ge.a.color},r.color.name)),n.a.createElement(y,{className:ge.a.price,price:e}))},je=a(31),Ce=a.n(je),xe=a(32),ye=a.n(xe),ke=a(25),Le=a.n(ke);function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function Ne(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var Me=n.a.createElement("title",null,"Back"),Se=n.a.createElement("g",null,n.a.createElement("title",null,"background"),n.a.createElement("rect",{fill:"none",id:"canvas_background",height:402,width:582,y:-1,x:-1})),Re=n.a.createElement("g",null,n.a.createElement("title",null,"Layer 1"),n.a.createElement("g",{transform:"rotate(-180 11.510403633117676,8.949745178222656) ",fillRule:"evenodd",fill:"none",id:"Page-1"},n.a.createElement("g",{fill:"#007edb",id:"product-page_color-chooser"},n.a.createElement("g",{id:"content"},n.a.createElement("g",{id:"navigation-bar"},n.a.createElement("g",{id:"arrows"},n.a.createElement("path",{id:"arrow_right",d:"m14.535533,0l-1.41422,1.41421l6.6075,6.60579l-19.72882,0.00082l0,2l19.58682,-0.00082l-6.4655,6.46528l1.41422,1.41421l8.48528,-8.48528l-0.464,-0.46521l0.464,-0.46372l-8.48528,-8.48528z"}))))))),Te=function(e){var t=e.svgRef,a=e.title,r=Ne(e,["svgRef","title"]);return n.a.createElement("svg",we({width:23,height:18,ref:t},r),void 0===a?Me:a?n.a.createElement("title",null,a):null,Se,Re)},Fe=n.a.forwardRef((function(e,t){return n.a.createElement(Te,we({svgRef:t},e))}));a.p;function Pe(){return(Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function De(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var Ie=n.a.createElement("title",null,"Forward"),Ue=n.a.createElement("desc",null,"Created with Sketch."),Be=n.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.a.createElement("g",{id:"product-page_color-chooser",transform:"translate(-1217.000000, -751.000000)",fill:"#FFFFFF"},n.a.createElement("g",{id:"content"},n.a.createElement("g",{id:"navigation-bar",transform:"translate(834.000000, 720.000000)"},n.a.createElement("g",{id:"arrows",transform:"translate(10.000000, 10.000000)"},n.a.createElement("path",{d:"M381.485281,21 L382.899495,22.4142136 L376.292,29.02 L396.020815,29.0208153 L396.020815,31.0208153 L376.434,31.02 L382.899495,37.4852814 L381.485281,38.8994949 L373,30.4142136 L373.464,29.949 L373,29.4852814 L381.485281,21 Z",id:"arrow_right",transform:"translate(384.510408, 29.949747) scale(-1, 1) translate(-384.510408, -29.949747) "})))))),He=function(e){var t=e.svgRef,a=e.title,r=De(e,["svgRef","title"]);return n.a.createElement("svg",Pe({width:"23px",height:"18px",viewBox:"0 0 23 18",ref:t},r),void 0===a?Ie:a?n.a.createElement("title",null,a):null,Ue,Be)},Ae=n.a.forwardRef((function(e,t){return n.a.createElement(He,Pe({svgRef:t},e))})),Ge=(a.p,"back"),qe="forward",Ke="regular",We=function(e){var t,a=e.children,r=e.className,c=e.onClick,o=e.variant,l=void 0===o?Ke:o;return n.a.createElement("button",{onClick:c,className:m()(r,Le.a.button,(t={},Object(D.a)(t,Le.a.back,l===Ge),Object(D.a)(t,Le.a.forward,l===qe),Object(D.a)(t,Le.a.regular,l===Ke),t))},l===Ge&&n.a.createElement(Fe,null),l===qe&&n.a.createElement(Ae,null),a)},ze=We,Ye=function(e){var t=e.handleForward,a=e.handleCheckout,r=e.children,c=Object(l.f)();return n.a.createElement("div",{className:ye.a.navPanel},r,n.a.createElement("div",{className:ye.a.navigation},n.a.createElement(ze,{onClick:c.goBack,variant:"back"}),t&&n.a.createElement(ze,{onClick:t,variant:"forward"}),a&&n.a.createElement(ze,{className:ye.a.checkoutButton,onClick:a},"Proceed")))},Je=a(26),Ve=a.n(Je),Ze=function(e){var t=e.trim,a=e.active,r=Object(s.b)();return n.a.createElement(We,{onClick:function(){return function(e){r(ie(e))}(t)},className:m()(Ve.a.priceModelButton,Object(D.a)({},Ve.a.active,a)),variant:"outlined"},n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:Ve.a.name},t.name),n.a.createElement(y,{className:Ve.a.price,price:t.price})))},Xe=a(55),Qe=a.n(Xe),$e=function(e){var t=e.trims,a=e.selectedTrim;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:Qe.a.trims},n.a.createElement(_e,{text:"CHOOSE EQUIPMENT LEVEL"}),t.map((function(e){return n.a.createElement(Ze,{key:e.name,active:e.name===a.name,trim:e})}))))};var et=function(e){var t=e.match.params,a=t.id,c=t.step,o=Object(l.f)(),i=Object(s.b)(),u=Object(s.c)(te),m=Object(s.c)(X),d=Object(s.c)(Q),f=Object(s.c)($),p=Object(s.c)(re);return Object(r.useEffect)((function(){i(function(e){return{type:"GET_MODEL",data:e}}(a))}),[i,a]),n.a.createElement(A,{className:Ce.a.model,loading:p},n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:Ce.a.modelDetails},n.a.createElement(he,null)),n.a.createElement("div",{className:Ce.a.modelEquipment},"trims"===c&&n.a.createElement(Ye,{handleForward:function(){return o.push("colors")}},n.a.createElement($e,{trims:m.trims,selectedTrim:d})),"colors"===c&&n.a.createElement(Ye,{handleCheckout:function(){i({type:"CHECKOUT",data:u})}},n.a.createElement(be,{colors:d.colors,selectedColor:f})))))};function tt(){return(tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function at(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var rt=n.a.createElement("title",null,"status 1"),nt=n.a.createElement("desc",null,"Created with Sketch."),ct=n.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.a.createElement("g",{id:"confirmation-page_status-1",transform:"translate(-560.000000, -260.000000)"},n.a.createElement("g",{id:"content",transform:"translate(560.000000, 260.000000)"},n.a.createElement("g",{id:"status-1"},n.a.createElement("path",{d:"M80,0 C124.18278,-8.11624501e-15 160,35.81722 160,80 C160,124.18278 124.18278,160 80,160 C35.81722,160 5.41083001e-15,124.18278 0,80 C-5.41083001e-15,35.81722 35.81722,8.11624501e-15 80,0 Z",id:"background",fill:"#5EE043"}),n.a.createElement("path",{d:"M103.794979,46.2853918 L108.061442,50.5518548 L72.5415578,86.0703918 L93.9193065,107.448145 L89.6528436,111.714608 L68.2755578,90.3363918 L68.2050208,90.4082761 L63.9385578,86.1418131 L64.0095578,86.0703918 L63.9385578,86.0003225 L68.2050208,81.7338595 L68.2755578,81.8043918 L103.794979,46.2853918 Z",id:"icon-status-1",fill:"#FFFFFF",transform:"translate(86.000000, 79.000000) scale(-1, 1) rotate(-90.000000) translate(-86.000000, -79.000000) "}))))),ot=function(e){var t=e.svgRef,a=e.title,r=at(e,["svgRef","title"]);return n.a.createElement("svg",tt({width:"160px",height:"160px",viewBox:"0 0 160 160",ref:t},r),void 0===a?rt:a?n.a.createElement("title",null,a):null,nt,ct)},lt=n.a.forwardRef((function(e,t){return n.a.createElement(ot,tt({svgRef:t},e))}));a.p;function it(){return(it=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function st(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var ut=n.a.createElement("title",null,"status 2"),mt=n.a.createElement("desc",null,"Created with Sketch."),dt=n.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.a.createElement("g",{id:"confirmation-page_status-2",transform:"translate(-560.000000, -260.000000)"},n.a.createElement("g",{id:"content",transform:"translate(560.000000, 260.000000)"},n.a.createElement("g",{id:"status-2"},n.a.createElement("path",{d:"M80,0 C124.18278,-8.11624501e-15 160,35.81722 160,80 C160,124.18278 124.18278,160 80,160 C35.81722,160 5.41083001e-15,124.18278 0,80 C-5.41083001e-15,35.81722 35.81722,8.11624501e-15 80,0 Z",id:"background",fill:"#FF0000"}),n.a.createElement("path",{d:"M97.8564213,58 L102.122884,62.266463 L84.327,80.061 L102.122884,97.8564213 L97.8564213,102.122884 L80.061,84.327 L62.266463,102.122884 L58,97.8564213 L75.795,80.061 L58,62.266463 L62.266463,58 L80.061,75.795 L97.8564213,58 Z",id:"icon-status-2",fill:"#FFFFFF",transform:"translate(80.061442, 80.061442) scale(-1, 1) rotate(-90.000000) translate(-80.061442, -80.061442) "}))))),ft=function(e){var t=e.svgRef,a=e.title,r=st(e,["svgRef","title"]);return n.a.createElement("svg",it({width:"160px",height:"160px",viewBox:"0 0 160 160",ref:t},r),void 0===a?ut:a?n.a.createElement("title",null,a):null,mt,dt)},pt=n.a.forwardRef((function(e,t){return n.a.createElement(ft,it({svgRef:t},e))})),Et=(a.p,a(56)),Ot=a.n(Et);var _t=function(e){var t=e.match.params.status;return n.a.createElement(A,{className:Ot.a.checkout},t===ne?n.a.createElement(lt,null):n.a.createElement(pt,null))},bt=a(13),vt=Object(bt.a)(),gt=function(){return n.a.createElement(l.b,{history:vt},n.a.createElement(l.c,null,n.a.createElement(l.a,{component:_t,path:"/checkout/:status"}),n.a.createElement(l.a,{exact:!0,component:et,path:"/models/:id/:step"}),n.a.createElement(l.a,{exact:!0,component:J,path:"/models"}),n.a.createElement(l.a,{exact:!0,path:"/"},n.a.createElement(i.a,{to:"/models"},"CHOOSE YOUR NEW CAR"))))},ht=function(){return n.a.createElement("div",{className:"car-service-app"},n.a.createElement(gt,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var jt=a(19),Ct=a(57),xt=a(3),yt={data:[],error:null,loading:!1};var kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.data;switch(a){case"GET_MODELS":return Object(xt.a)(Object(xt.a)({},e),{},{loading:!0});case"GET_MODELS_SUCCESS":return Object(xt.a)(Object(xt.a)({},e),{},{data:r,loading:!1});case"GET_MODELS_ERROR":return Object(xt.a)(Object(xt.a)({},e),{},{loading:!1,error:r});default:return e}},Lt={data:{currentModel:{code:"",name:"",trims:[]},selectedTrim:{name:"",price:"",colors:[]},selectedColor:{name:"",imageUrl:"",price:0,iconUrl:""},checkoutModel:{modelName:"",colorName:"",trimName:""},checkoutStatus:null},error:{status:0,statusText:""},loading:!1};var wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Lt,t=arguments.length>1?arguments[1]:void 0,a=t.data,r=t.type;switch(r){case"GET_MODEL":return Object(xt.a)(Object(xt.a)({},e),{},{loading:!0,data:Object(xt.a)(Object(xt.a)({},e.data),{},{currentModel:Object(xt.a)(Object(xt.a)({},e.data.currentModel),{},{code:a})}),error:null});case"GET_MODEL_SUCCESS":return Object(xt.a)(Object(xt.a)({},e),{},{loading:!1,data:Object(xt.a)(Object(xt.a)({},e.data),{},{currentModel:a}),error:null});case"GET_MODEL_ERROR":return Object(xt.a)(Object(xt.a)({},e),{},{loading:!1,error:a});case"SET_ACTIVE_TRIM":return Object(xt.a)(Object(xt.a)({},e),{},{data:Object(xt.a)(Object(xt.a)({},e.data),{},{selectedTrim:a})});case"SET_ACTIVE_COLOR":return Object(xt.a)(Object(xt.a)({},e),{},{data:Object(xt.a)(Object(xt.a)({},e.data),{},{selectedColor:a})});case"CHECKOUT":return Object(xt.a)(Object(xt.a)({},e),{},{data:Object(xt.a)(Object(xt.a)({},e.data),{},{checkoutModel:Object(xt.a)(Object(xt.a)({},e.data.checkoutModel),{},{modelName:a}),checkoutStatus:null}),loading:!0});case"CHECKOUT_SUCCESS":return Object(xt.a)(Object(xt.a)({},e),{},{data:Object(xt.a)(Object(xt.a)({},e.data),{},{checkoutStatus:ne}),loading:!1});case"CHECKOUT_ERROR":return Object(xt.a)(Object(xt.a)({},e),{},{data:Object(xt.a)(Object(xt.a)({},e.data),{},{checkoutStatus:ce}),error:a,loading:!1});default:return e}},Nt=Object(jt.c)({models:kt,model:wt}),Mt=E.a.mark(Rt),St=E.a.mark(Tt);function Rt(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)(["GET_MODELS"],Tt);case 2:case"end":return e.stop()}}),Mt)}function Tt(){var e;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.request({uri:"cars/models",errorAction:W});case 2:return e=t.sent,t.next=5,Object(v.c)({type:"GET_MODELS_SUCCESS",data:e});case 5:case"end":return t.stop()}}),St)}var Ft=Rt,Pt=E.a.mark(Ut),Dt=E.a.mark(Bt),It=E.a.mark(At);function Ut(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)(["GET_MODEL"],Bt);case 2:return e.next=4,Object(v.e)(["CHECKOUT"],At);case 4:case"end":return e.stop()}}),Pt)}function Bt(e){var t,a,r;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(t=e.data)){n.next=12;break}return n.next=4,j.request({uri:"cars/model/".concat(t),errorAction:le});case 4:return a=n.sent,r=Ht(a),n.next=8,Object(v.c)(oe(r));case 8:return n.next=10,Object(v.c)(ie(r.trims[0]));case 10:return n.next=12,Object(v.c)(se(r.trims[0].colors[0]));case 12:case"end":return n.stop()}}),Dt)}function Ht(e){var t=d(e.trims,"price").map((function(e){return Object(xt.a)(Object(xt.a)({},e),{},{colors:d(e.colors,"price")})}));return Object(xt.a)(Object(xt.a)({},e),{},{trims:t})}function At(e){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.request({uri:"cars/lead",method:"POST",data:Object(xt.a)({},e.data),errorAction:me});case 2:if("CHECKOUT_ERROR"!==t.sent.type){t.next=7;break}vt.push("/checkout/".concat(ce)),t.next=10;break;case 7:return t.next=9,Object(v.b)(ue);case 9:vt.push("/checkout/".concat(ne));case 10:case"end":return t.stop()}}),It)}var Gt=Ut,qt=E.a.mark(Kt);function Kt(){var e;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[Ft,Gt],t.next=3,Object(v.a)(e.map((function(e){return Object(v.d)(E.a.mark((function t(){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,Object(v.b)(e);case 4:return t.abrupt("break",12);case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:t.next=0;break;case 12:case"end":return t.stop()}}),t,null,[[1,7]])})))})));case 3:case"end":return t.stop()}}),qt)}var Wt=Object(Ct.a)(),zt=Object(jt.e)(Nt,Object(jt.d)(Object(jt.a)(Wt),!1));Wt.run(Kt),o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s.a,{store:zt},n.a.createElement(ht,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e,t,a){e.exports={color:"Color_color__1YC0i",colorIcon:"Color_colorIcon__1MxA9",name:"Color_name__1MjDH",price:"Color_price__35rtU",active:"Color_active__14YKK"}},21:function(e,t,a){e.exports={modelDetails:"ModelDetails_modelDetails__1QTRl",image:"ModelDetails_image__21bPz",name:"ModelDetails_name__6VcI1",trim:"ModelDetails_trim__3E5yE",color:"ModelDetails_color__3YSHX",price:"ModelDetails_price__2l57G"}},23:function(e,t,a){e.exports={modelItem:"ModelsListItem_modelItem__3ywMi",image:"ModelsListItem_image__1XlOz",description:"ModelsListItem_description__3RDAR",title:"ModelsListItem_title__3cixv",price:"ModelsListItem_price__2sPYJ"}},25:function(e,t,a){e.exports={button:"Button_button__2Lf63",back:"Button_back__DkWSo",forward:"Button_forward__3HqyH",regular:"Button_regular__2zDN7",outlined:"Button_outlined__3Uswj"}},26:function(e,t,a){e.exports={priceModelButton:"Trim_priceModelButton__3qJl9",active:"Trim_active__1TxCN",name:"Trim_name__1qEpU",price:"Trim_price__3rH7C"}},30:function(e,t,a){e.exports={colors:"Colors_colors__1qi_-",colorsList:"Colors_colorsList__35CNW",title:"Colors_title__1zP8q"}},31:function(e,t,a){e.exports={model:"Model_model__21g6D",modelDetails:"Model_modelDetails__1zBy0",modelEquipment:"Model_modelEquipment__3LAHA",equipmentSelection:"Model_equipmentSelection__WacJH"}},32:function(e,t,a){e.exports={navPanel:"NavPanel_navPanel__3LLv5",navigation:"NavPanel_navigation__3wrsz",checkoutButton:"NavPanel_checkoutButton__F2fbi"}},37:function(e,t,a){e.exports={pageContainer:"PageContainer_pageContainer__1zHHs",centered:"PageContainer_centered__1WmN4",title:"PageContainer_title__YOYyZ"}},38:function(e,t,a){e.exports={models:"Models_models__3JmCf",centered:"Models_centered__36ho7",title:"Models_title__-E7VJ"}},51:function(e,t,a){e.exports={price:"Price_price__295Er"}},52:function(e,t,a){e.exports={modelsList:"ModelsList_modelsList__2PB22"}},54:function(e,t,a){e.exports={title:"Title_title__1jPs1"}},55:function(e,t,a){e.exports={trims:"Trims_trims__qFYFz"}},56:function(e,t,a){e.exports={checkout:"Checkout_checkout__3Dm3_"}},58:function(e,t,a){e.exports=a(107)},63:function(e,t,a){},64:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.1e6dc390.chunk.js.map