(this["webpackJsonpreact-bedpress"]=this["webpackJsonpreact-bedpress"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=(n(10),{height:"60px",width:"100vw",padding:"10px",textAlign:"center",fontSize:"30px"}),c=function(){return r.a.createElement("div",{style:l},r.a.createElement("header",null,"Velkommen"))},s={position:"absolute",background:"white",padding:10,zIndex:"1",display:"flex"},u=[{id:"streets-v11",name:"Streets"},{id:"light-v10",name:"Light"},{id:"dark-v10",name:"Dark"},{id:"satellite-v9",name:"Satellite"}],d=function(e){return r.a.createElement("div",{style:s},u.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("input",{id:t.id,type:"radio",name:"rtoggle",value:t.id,onClick:function(){return e.setbackgroundLayerID(t.id)},defaultChecked:t.id===e.backgroundLayerID}),r.a.createElement("label",null,t.name))})))},m=n(1),p=n(2),b=n.n(p),h=(n(11),{width:"100%",height:"calc(100vh - 80px)",position:"absolute"}),f=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)("streets-v11"),l=Object(m.a)(i,2),c=l[0],s=l[1],u=Object(a.useRef)(null),p=Object(a.useState)(null),f=Object(m.a)(p,2);f[0],f[1];return Object(a.useEffect)((function(){b.a.accessToken="pk.eyJ1Ijoia2Vpbm8iLCJhIjoiY2tnN2tuMnUyMDd5NDJ4b2Nlb2RhcTA4bSJ9._je8QOLR8ySMeHK4rOkTqA";n||function(e){var t=e.setMap,n=e.mapContainer,a=new b.a.Map({container:n.current,style:"mapbox://styles/mapbox/"+c,center:[10.408773,63.422091],zoom:10});a.on("load",(function(){t(a),a.resize()}))}({setMap:o,mapContainer:u}),n&&n.setStyle("mapbox://styles/mapbox/"+c)}),[c,n]),r.a.createElement("div",null,r.a.createElement(d,{setbackgroundLayerID:s,backgroundLayerID:c}),r.a.createElement("div",{ref:function(e){return u.current=e},style:h}),";")},v={overflow:"hidden"};var y=function(){return r.a.createElement("div",{style:v},r.a.createElement(c,null),r.a.createElement(d,null),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){e.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.9bb0682e.chunk.js.map