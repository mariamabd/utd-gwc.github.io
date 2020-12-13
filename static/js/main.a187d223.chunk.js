(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=a(6),i=a(23),u=a(156),m=a(154),s=a(130),d=a(163),g=a(160),E=a(11);a(77);function f(e){var t=e.children,a=e.style,l=Object(n.useState)(!1),c=Object(o.a)(l,2),i=c[0],u=c[1],m=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=m.current,t=new IntersectionObserver((function(a){a[0].isIntersecting&&(u(!0),t.unobserve(e))}));return t.observe(e),function(){t.unobserve(e)}}),[m]),r.a.createElement("div",{ref:m,className:"fade-in-section ".concat(i?"is-visible":""),style:Object(E.a)({},a)},t)}function p(e){var t=e.title,a=e.children,n=e.id;return r.a.createElement(i.a,{flex:"grow",margin:{horizontal:"medium",bottom:"xlarge"},id:n,style:{scrollMarginTop:"20px"}},r.a.createElement(f,null,r.a.createElement(g.a,{level:"2",margin:"none"},t)),r.a.createElement(f,null,a))}var h=a(10),v=a.n(h),b=a(15),w=r.a.createElement("svg",{version:"1.1",viewBox:"0 0 32 32",width:"28px",height:"28px",fill:"#F794B9"},r.a.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),r.a.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"0.8s",repeatCount:"indefinite"}))),y=function(){return r.a.createElement(i.a,{align:"center",justify:"center"},w)},x=a(144),k=a(145),j=a(157),C=a(161),O=a(155),S=a(148),T=a(162),L=a(65),M=a.n(L),B=a(147),F=a(66);function z(e){var t=e.children;return r.a.createElement(x.a,{height:"medium",margin:"medium",width:"medium",background:"card-background",elevation:"medium",round:"medium",flex:"grow",pad:"none",align:"center",alignSelf:"center"},t)}function I(e){var t=new Date(e.dateObj);Object(F.createEvent)({title:e.title,description:e.description,busyStatus:"BUSY",duration:{hours:1},start:[t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes()],organizer:{name:"UTD Girls Who Code",email:"utdgirlswhocode@gmail.com"}},(function(t,a){var n=document.createElement("a"),r=new Blob([a],{type:"text/calendar"});n.href=URL.createObjectURL(r),n.download=e.title+".ics",document.body.appendChild(n),n.click()}))}function D(e){var t=e.toggleShowFlyer,a=e.buttonText,n=e.event;return null!=n.flyerUrl?r.a.createElement(k.a,{height:"xxsmall",align:"center",justify:"between",gap:"medium",pad:{horizontal:"small"},fill:"horizontal",background:"card-footer"},r.a.createElement(j.a,{primary:!0,label:r.a.createElement(C.a,null,a),color:"card-background",onClick:t}),r.a.createElement(O.a,{icon:r.a.createElement(B.a,{color:"icon-color"}),hoverIndicator:!0,items:[{label:"Open Flyer",onClick:function(){window.open(n.flyerUrl,"_blank")}},{label:"Save iCal Event",onClick:function(){I(n)}}]})):r.a.createElement(k.a,{height:"xxsmall",align:"center",justify:"end",gap:"medium",pad:{horizontal:"small"},fill:"horizontal",background:"card-footer"},r.a.createElement(O.a,{icon:r.a.createElement(B.a,{color:"icon-color"}),hoverIndicator:!0,items:[{label:"Save iCal Event",onClick:function(){I(n)}}]}))}function A(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],c=a[1],u=function(e){c(!l)};return null!=e.flyerUrl?r.a.createElement(M.a,{isFlipped:l},r.a.createElement(z,null,r.a.createElement(S.a,{fill:"horizontal",pad:"small",align:"center",justify:"between",margin:"none",gap:"medium",direction:"row-responsive"},r.a.createElement(g.a,{level:"2",margin:"xsmall",textAlign:"start",size:"medium"},e.title),r.a.createElement(i.a,{direction:"column",justify:"center",align:"end"},r.a.createElement(C.a,null,e.date),r.a.createElement(C.a,null,e.time||"TBD"))),r.a.createElement(i.a,{align:"center",justify:"center",pad:"xsmall",margin:"xsmall",height:"large"},r.a.createElement(T.a,{size:"medium",margin:"medium",textAlign:"center",truncate:!0},e.description)),r.a.createElement(D,{toggleShowFlyer:u,buttonText:"View Flyer",event:e})),r.a.createElement(z,null,r.a.createElement(i.a,{align:"center",justify:"center",pad:"none",margin:"none",height:"large"},r.a.createElement(d.a,{src:e.flyerUrl,fill:"vertical",fit:"contain"})),r.a.createElement(D,{toggleShowFlyer:u,buttonText:"View Text",event:e}))):r.a.createElement(z,null,r.a.createElement(S.a,{fill:"horizontal",pad:"small",align:"center",justify:"between",margin:"none",gap:"medium",direction:"row-responsive"},r.a.createElement(g.a,{level:"2",margin:"xsmall",textAlign:"start",size:"medium"},e.title),r.a.createElement(i.a,{direction:"column",justify:"center",align:"end"},r.a.createElement(C.a,null,e.date),r.a.createElement(C.a,null,e.time||"TBD"))),r.a.createElement(i.a,{align:"center",justify:"center",pad:"xsmall",margin:"xsmall",height:"large"},r.a.createElement(T.a,{size:"medium",margin:"medium",textAlign:"center",truncate:!0},e.description)),r.a.createElement(D,{event:e}))}var U=a(67),W=a(22),G=function(e){var t=e.cols,a=e.children,r=e.fullRow,l=n.useState(window.innerWidth<1920?window.innerWidth<1080?6:4:3),c=Object(o.a)(l,2),i=c[0],u=c[1];n.useEffect((function(){function e(){u(window.outerWidth<1080?6:window.outerWidth>1968?3:4)}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var m=12/t,s=Object(U.chunk)(n.Children.toArray(a),r?12/i:t);return n.createElement(W.Grid,null,s.map((function(e,t){return n.createElement(W.Row,{key:t},e.map((function(e,t){return n.createElement(W.Col,{key:t,sm:12,md:r?i:m},e)})))})))};function _(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),u=Object(o.a)(c,2),m=u[0],s=u[1];function d(){return(d=Object(b.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch("https://utd-gwc-api.herokuapp.com/api/events/upcoming?sort=+date",{method:"GET"});case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,l(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,s(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),r.a.createElement(i.a,{fill:!0,direction:"row-responsive",justify:"center"},m||null==a?r.a.createElement(y,null):r.a.createElement(G,{fullRow:!0},a.map((function(e){var t={dateString:null,timeString:null};if(null!=e.date){var a=new Date(e.date);t.dateString=a.toLocaleDateString(),t.timeString=a.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}return r.a.createElement(A,{key:e.title,title:e.title,description:e.description,dateObj:e.date,date:t.dateString,time:t.timeString,flyerUrl:e.flyerUrl})}))))}var R={font:{family:"Roboto",size:"18px",height:"20px"}},N={checkBox:{border:{color:{dark:"neutral-1",light:"neutral-1"}},hover:{border:{color:{dark:"white",light:"brand"}}},toggle:{background:{dark:"neutral-1",light:"neutral-1"}}}},Q={elevation:{light:{none:"none",xsmall:"0px 1px 2px rgba(27, 58, 93, 0.2)",small:"0px 2px 4px rgba(27, 58, 93, 0.2)",medium:"0px 4px 8px rgba(27, 58, 93, 0.2)",large:"0px 8px 16px rgba(27, 58, 93, 0.2)",xlarge:"0px 12px 24px rgba(27, 58, 93, 0.2)"},dark:{none:"none",xsmall:"none",small:"none",medium:"none",large:"none",xlarge:"none"}}},Z=Object(E.a)({global:Object(E.a)({colors:{brand:"#F794B9","accent-1":"#002364","neutral-1":"#1B3A5D","accent-2":"#FFFFFF","neutral-2":"#ECEDF8","accent-3":"#FCC0C5","neutral-3":"#B67186","neutral-4":"#B84C65",active:"accent-2",focus:"neutral-1",white:"#ECEDF8",background:"#ECEDF8","card-background":"accent-2","card-footer":"accent-3","icon-color":"neutral-3","code-keyword":"neutral-3","code-variable":"neutral-1","code-function":"neutral-4","code-string":"accent-3","button-primary":"accent-3","button-hover":"accent-2","nav-background":"background","nav-background-collapsed":"neutral-3","footer-background":"neutral-3","photo-border":"none"}},R,{},Q)},N),H=Object(E.a)({global:Object(E.a)({colors:{brand:"#002364","accent-1":"#F794B9","neutral-1":"#B84C65","accent-2":"#FCC0C5","neutral-2":"#B67186","accent-3":"#FFFFFF","neutral-3":"#ECEDF8","neutral-4":"#1B3A5D",active:"neutral-1",focus:"neutral-1",white:"#ECEDF8",background:"#1B3A5D","card-background":"#224975","card-footer":"accent-3","icon-color":"brand","code-keyword":"accent-2","code-variable":"neutral-1","code-function":"neutral-2","code-string":"accent-1","button-primary":"accent-3","button-hover":"accent-2","nav-background":"card-background","nav-background-collapsed":"neutral-3","footer-background":"card-background","photo-border":"white"}},R,{},Q)},N);function J(e){var t=e.isLightMode?Z.global.colors["neutral-3"]:H.global.colors["accent-1"];return r.a.createElement(i.a,{height:"small",alignSelf:"start"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 700 300",height:"auto",width:"auto"},r.a.createElement("path",{d:"M 50 150 Q 100 100 150 150 Q 200 200 250 150 Q 300 100 350 150 Q 400 200 450 150 Q 500 100 550 150 Q 600 200 650 150 ",stroke:t,strokeWidth:"7",fill:"none"})))}function K(e){var t=e.isLightMode?Z.global.colors["neutral-3"]:H.global.colors["accent-1"],a=["50","300","550"];return r.a.createElement(i.a,{height:"small",alignSelf:"start"},r.a.createElement("svg",{viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",height:"auto",width:"auto"},["50","300","550","800"].map((function(e,n){return a.map((function(a,l){return r.a.createElement("circle",{key:n+" "+l,cx:e,cy:a,r:"50",fill:t})}))}))))}function Y(e){var t=e.isLightMode?Z.global.colors["neutral-3"]:H.global.colors["accent-1"];return r.a.createElement(i.a,{height:"medium",alignSelf:"center"},r.a.createElement("svg",{width:"auto",height:"auto",viewBox:"0 0 600 600",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",{transform:"translate(300,300)"},r.a.createElement("path",{d:"M70.2,-92.1C92.4,-48.1,112.7,-24,133.7,21C154.7,66,176.3,132,154.2,160.8C132,189.7,66,181.3,13,168.4C-40.1,155.4,-80.1,137.8,-126.1,109C-172.1,80.1,-224.1,40.1,-230.3,-6.2C-236.6,-52.6,-197.1,-105.1,-151.1,-149.1C-105.1,-193.1,-52.6,-228.6,-14.3,-214.3C24,-200,48.1,-136.1,70.2,-92.1Z",fill:t}))))}function P(e){var t=e.isLightMode?Z.global.colors.brand:H.global.colors["neutral-1"];return r.a.createElement(i.a,{height:"medium",alignSelf:"end"},r.a.createElement("svg",{width:"auto",height:"auto",viewBox:"0 0 600 600"},r.a.createElement("g",{transform:"translate(300,300)"},r.a.createElement("path",{d:"M152,22C152,58.7,76,117.3,15.5,117.3C-45,117.3,-90,58.7,-90,22C-90,-14.7,-45,-29.3,15.5,-29.3C76,-29.3,152,-14.7,152,22Z",fill:t}))))}function V(e){var t=e.isLightMode?Z.global.colors.brand:H.global.colors["neutral-1"];return r.a.createElement(i.a,{height:"medium",alignSelf:"end"},r.a.createElement("svg",{width:"auto",height:"auto",viewBox:"0 0 600 600"},r.a.createElement("g",{transform:"translate(300,300)"},r.a.createElement("path",{d:"M116.5,-85.1C149.7,-51.4,174.3,-3,153.7,14.2C133.2,31.5,67.5,17.5,13,54.3C-41.5,91,-84.8,178.4,-123.4,186.5C-162,194.7,-196.1,123.6,-187.8,68.9C-179.4,14.2,-128.8,-24.1,-90.5,-59C-52.1,-93.9,-26.1,-125.4,7.8,-131.7C41.7,-137.9,83.4,-118.8,116.5,-85.1Z",fill:t}))))}function $(e){var t=e.isLightMode?Z.global.colors["neutral-3"]:H.global.colors["accent-1"];return r.a.createElement(i.a,{height:"medium",alignSelf:"end"},r.a.createElement("svg",{width:"auto",height:"auto",viewBox:"0 0 800 800"},r.a.createElement("g",{transform:"translate(300,300)"},r.a.createElement("path",{d:"M112.8,-90.3C145.3,-49.2,170.1,-2.3,171,57.1C171.8,116.5,148.6,188.4,95.7,223.3C42.8,258.3,-39.8,256.2,-85.4,218.4C-131,180.7,-139.6,107.2,-157.8,34.1C-175.9,-39,-203.7,-111.8,-179,-151.1C-154.3,-190.4,-77.1,-196.2,-18.5,-181.4C40.1,-166.7,80.3,-131.3,112.8,-90.3Z",fill:"none",stroke:t,strokeWidth:6})),r.a.createElement("g",{transform:"translate(250,100)"},r.a.createElement("path",{d:"M185.5,-130.3C228.7,-93.7,244,-17.3,218.4,31.7C192.7,80.6,126.1,102,62.5,134.3C-1,166.7,-61.5,209.9,-110.5,198.3C-159.6,186.7,-197.3,120.1,-209.5,52C-221.8,-16.2,-208.6,-86,-169.5,-121.6C-130.3,-157.2,-65.2,-158.6,3,-161C71.1,-163.4,142.3,-166.8,185.5,-130.3Z",fill:"none",stroke:t,strokeWidth:6}))))}function q(e){e.isLightMode;return r.a.createElement(i.a,{style:{position:"absolute",top:0,zIndex:0},fill:"horizontal",overflow:"hidden",pad:"medium"},r.a.createElement(i.a,{height:"80vh",margin:{bottom:"medium"}})," ",r.a.createElement($,null),r.a.createElement(V,null),r.a.createElement(K,null),r.a.createElement(Y,null),r.a.createElement(J,null),r.a.createElement(P,null))}var X=a(68),ee=a.n(X),te=function(e){var t=e.children;return r.a.createElement(i.a,{margin:{left:"medium"}},t)},ae=function(e){var t=e.children,a=e.type,n=e.nospace;return r.a.createElement(g.a,{level:3,margin:"none",color:"code-"+a,style:{display:"inline"}},t,!n&&" ")},ne=function(e){var t=e.children;return e.isTypingDone?r.a.createElement(i.a,{elevation:"medium",margin:{horizontal:"medium"},round:"small"},t):r.a.createElement(i.a,{elevation:"none",margin:{horizontal:"medium"}},t)};function re(){var e=r.a.useState(!1),t=Object(o.a)(e,2),a=t[0],n=t[1];return r.a.createElement(ne,{isTypingDone:a},r.a.createElement(ee.a,{avgTypingDelay:45,cursor:{show:!1},onTypingDone:function(){n(!0)}},r.a.createElement(i.a,{margin:"medium"},r.a.createElement("div",null,r.a.createElement(ae,{type:"keyword"},"const club"),r.a.createElement(ae,{type:"variable"},"GWC"),r.a.createElement(ae,null,"= () => {")),r.a.createElement(te,null,r.a.createElement("div",null,r.a.createElement(ae,{type:"keyword"},"if"),r.a.createElement(ae,null,"("),r.a.createElement(ae,{type:"function",nospace:!0},"viewing"),r.a.createElement(ae,{nospace:!0},"("),r.a.createElement(ae,{type:"variable",nospace:!0},"you"),r.a.createElement(ae,null,") == "),r.a.createElement(ae,{type:"keyword",nospace:!0},"this"),r.a.createElement(ae,{nospace:!0},"."),r.a.createElement(ae,{type:"variable"},"page"),r.a.createElement(ae,null,") {")),r.a.createElement(te,null,r.a.createElement("div",null,r.a.createElement(ae,{type:"function",nospace:!0},"print"),r.a.createElement(ae,{nospace:!0},"("),r.a.createElement(ae,{type:"string",nospace:!0},'"Welcome to UTD Girls Who Code!"'),r.a.createElement(ae,null,");"))),r.a.createElement(ae,null,"}"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(ae,{type:"keyword"},"let"),r.a.createElement(ae,{type:"variable"},"goals"),r.a.createElement(ae,null,"= {")),r.a.createElement(te,null,r.a.createElement("div",null,r.a.createElement(ae,{type:"variable",nospace:!0},'"one"'),r.a.createElement(ae,null,": "),r.a.createElement(ae,{type:"function",nospace:!0},"build_sisterhood()"),r.a.createElement(ae,null,","),r.a.createElement("br",null),r.a.createElement(ae,{type:"variable",nospace:!0},'"two"'),r.a.createElement(ae,null,": "),r.a.createElement(ae,{type:"function",nospace:!0},"empower_womxn()"),r.a.createElement(ae,null,","),r.a.createElement("br",null),r.a.createElement(ae,{type:"variable",nospace:!0},'"three"'),r.a.createElement(ae,null,": "),r.a.createElement(ae,{type:"function",nospace:!0},"learn_technical_skills()"),r.a.createElement(ae,null,","))),r.a.createElement(ae,null,"};"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(ae,{type:"keyword"},"return"),r.a.createElement(ae,{type:"variable",nospace:!0},"goals"),r.a.createElement(ae,null,";"))),r.a.createElement(ae,null,"}"))))}var le=a(69),ce=a.n(le);function oe(e){var t=e.children;return r.a.createElement(i.a,{animation:"slideUp",align:"center",alignSelf:"center",justify:"center"},r.a.createElement(g.a,{level:"2",margin:{bottom:"small",top:"none"}},"Stay In The Loop!"),r.a.createElement(i.a,{width:"medium",height:"medium",background:"card-background",round:!0,direction:"column",elevation:"medium"},t))}function ie(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),u=Object(o.a)(c,2),m=u[0],s=u[1];function E(){return(E=Object(b.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch("https://utd-gwc-api.herokuapp.com/api/events/upcoming?sort=+date",{method:"GET"});case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,l(a[0]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,s(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){E.apply(this,arguments)}()}),[]),m?r.a.createElement(i.a,{align:"center"},r.a.createElement(i.a,{justify:"center",width:"medium",height:"medium",background:"none"},r.a.createElement(y,null))):null==a||null==a.flyerUrl?r.a.createElement(oe,null,r.a.createElement(g.a,{textAlign:"center",level:"3",margin:{top:"medium",bottom:"none",horizontal:"medium"}},"All of our events are hosted on Microsoft Teams"),r.a.createElement(d.a,{fit:"cover",src:ce.a}),r.a.createElement(j.a,{color:"button-primary",label:r.a.createElement(g.a,{level:"3",margin:"none"},"Join Our Team"),style:{width:"medium"},margin:{top:"none",bottom:"medium"},alignSelf:"center",primary:!0,hoverIndicator:{color:"card-background"},href:"https://bit.ly/2W8pxdL",target:"_blank"})):r.a.createElement(oe,null,r.a.createElement(d.a,{fit:"contain",src:a.flyerUrl}))}function ue(){return r.a.createElement(i.a,{height:{min:"80vh"},fill:"vertical",direction:"row-responsive",margin:{top:"large"}},r.a.createElement(i.a,{direction:"column",width:"large"},r.a.createElement(re,null)),r.a.createElement(i.a,{flex:"grow",align:"end",direction:"column"},r.a.createElement(ie,null)))}var me=a(149),se=a(150),de=a(151),ge=a(152);function Ee(e){var t=e.externalLinks;return null==t||null==t.GITHUB&&null==t.LINKEDIN&&null==t.INSTAGRAM&&null==t.WEBSITE?null:r.a.createElement(i.a,{align:"center",justify:"center",pad:"small",direction:"row",flex:!0,alignSelf:"center",basis:"xxsmall",gap:"small",margin:"xsmall"},null!=t.GITHUB&&r.a.createElement(j.a,{icon:r.a.createElement(me.a,{color:"accent-3"}),href:t.GITHUB,target:"_blank",referrer:"noreferrer"}),null!=t.LINKEDIN&&r.a.createElement(j.a,{icon:r.a.createElement(se.a,{color:"accent-3"}),href:t.LINKEDIN,target:"_blank",referrer:"noreferrer"}),null!=t.INSTAGRAM&&r.a.createElement(j.a,{icon:r.a.createElement(de.a,{color:"accent-3"}),href:t.INSTAGRAM,target:"_blank",referrer:"noreferrer"}),null!=t.WEBSITE&&r.a.createElement(j.a,{icon:r.a.createElement(ge.a,{color:"accent-3"}),href:t.WEBSITE,target:"_blank",referrer:"noreferrer"}))}function fe(e){var t=null!=e.profilePhotoUrl?"url('"+e.profilePhotoUrl+"\n')":"url('https://avatars2.githubusercontent.com/u/72423830?s=400&u=4a017c61d36667ab14429abaf655243af85988a9&v=4')";return r.a.createElement(i.a,null,r.a.createElement(i.a,{align:"center",justify:"center",pad:"xsmall",margin:"xsmall"},r.a.createElement(i.a,{align:"center",elevation:"medium",justify:"center",pad:"xlarge",margin:"medium",background:{dark:!1,color:"light-2",image:t},border:{color:"photo-border",size:"medium"},round:"full"}),r.a.createElement(g.a,{level:"3",size:"medium",margin:"xsmall",textAlign:"center"},e.name),r.a.createElement(C.a,{textAlign:"center"},e.position),r.a.createElement(Ee,{externalLinks:e.externalLinks})))}function pe(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),u=Object(o.a)(c,2),m=u[0],s=u[1];function d(){return(d=Object(b.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,fetch("https://utd-gwc-api.herokuapp.com/api/officers?sort=+order",{method:"GET"});case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,l(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,s(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),r.a.createElement(i.a,{fill:!0,direction:"row-responsive",justify:"center"},m||null==a?r.a.createElement(y,null):r.a.createElement(G,{fullRow:!0},a.map((function(e){return r.a.createElement(fe,Object.assign({key:e._id},e))}))))}var he=a(158),ve=a(131),be=a(159),we=a(153),ye=a(20),xe=a.n(ye);function ke(e){var t=e.scrollTop,a=r.a.useContext(we.a);return r.a.createElement(i.a,{align:"center",height:t>10?"xxsmall":"xsmall",style:{transition:"height .5s ease"},pad:{left:"small"===a?"large":"none"},animation:"fadeIn"},r.a.createElement(d.a,{src:xe.a,fit:"contain",fill:"vertical",a11yTitle:"UTD Girls Who Code logo"}))}function je(e,t){return e?t?"neutral-1":"neutral-2":t?"accent-1":"brand"}function Ce(e){var t=e.isLightMode,a=e.id,n=e.label,l=e.pad,c=e.isExpanded;return r.a.createElement(i.a,{pad:null!=l?Object(E.a)({},l):{right:"small"}},r.a.createElement(he.a,{color:je(t,c),id:a,label:n,target:"_self"}))}function Oe(e){var t=e.scrollTop,a=e.isLightMode,n=e.setIsLightMode,l=t<20;return r.a.createElement(ve.a,{pad:{left:"medium",right:"small",vertical:"small"},elevation:"xsmall",background:l?"nav-background":"nav-background-collapsed",fill:"horizontal",style:{transition:"all .4s"}},r.a.createElement(ke,{scrollTop:t}),r.a.createElement(i.a,{direction:"row",fill:"horizontal",justify:"end",align:"center"},r.a.createElement(Ce,{id:"events",label:"Events",isLightMode:a,isExpanded:l}),r.a.createElement(Ce,{id:"team",label:"Team",isLightMode:a,isExpanded:l,pad:{right:"medium"}}),r.a.createElement(i.a,{align:"center",alignSelf:"end",direction:"row"},r.a.createElement(be.a,{toggle:!0,checked:!a,onChange:function(){n(!a)},label:r.a.createElement(g.a,{margin:{vertical:"none"},pad:"none",level:3},a?"\ud83c\udf1e":"\ud83c\udf19")}))))}function Se(e){var t=e.children;return r.a.createElement(i.a,{flex:"grow",pad:"medium"},t)}function Te(e){var t=e.children,a=e.isLightMode,n=e.innerRef;return r.a.createElement(i.a,{style:{position:"relative",overflowY:"scroll"},ref:n},r.a.createElement(q,{isLightMode:a}),r.a.createElement(i.a,{style:{position:"relative"},zIndex:999},t))}var Le=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(document.body.scrollTop),E=Object(o.a)(c,2),f=E[0],h=E[1],v=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){var a=t.current;return a.addEventListener("scroll",e),function(){a.removeEventListener("scroll",e)}}),[t,e]),t}((function(e){h(e.target.scrollTop)}));return r.a.createElement(u.a,{theme:a?Z:H,full:!0},r.a.createElement(m.a,null,r.a.createElement(Oe,{isLightMode:a,scrollTop:f,setIsLightMode:l}),r.a.createElement(Te,{isLightMode:a,innerRef:v},r.a.createElement(Se,null,r.a.createElement(ue,null),r.a.createElement(p,{title:"Upcoming Events",id:"events"},r.a.createElement(_,null)),r.a.createElement(p,{title:"Our Team",id:"team"},r.a.createElement(pe,null))),r.a.createElement(s.a,{fill:"horizontal",background:"footer-background",flex:"grow",pad:"medium"},r.a.createElement(i.a,{width:"medium"},r.a.createElement(d.a,{src:xe.a,fit:"contain",fill:"vertical",a11yTitle:"UTD Girls Who Code logo"}),r.a.createElement(g.a,{textAlign:"center",margin:"none",level:2,color:"black"},"UTD Girls Who Code"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e,t,a){e.exports=a.p+"static/media/gwc2020_website_logo_nobg.63e40a6a.png"},69:function(e,t,a){e.exports=a.p+"static/media/Microsoft_Teams-Logo.wine.80ccd59e.svg"},72:function(e,t,a){e.exports=a(129)},77:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.a187d223.chunk.js.map