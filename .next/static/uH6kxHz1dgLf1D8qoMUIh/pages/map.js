(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/s91":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("8ET1"),r=n.n(a),c=n("7X5e"),o=n.n(c);function i(e){if(o()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r()(e)}},"0XBy":function(e,t,n){var a=n("/1nD"),r=n("0Sp3")("iterator"),c=n("N9zW");e.exports=n("TaGV").isIterable=function(e){var t=Object(e);return void 0!==t[r]||"@@iterator"in t||c.hasOwnProperty(a(t))}},"0tNF":function(e,t,n){"use strict";n.r(t);var a=n("s20r"),r=n.n(a);var c=n("/s91");function o(e){return function(e){if(r()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"default",function(){return o})},"2agv":function(e,t,n){"use strict";var a=n("8Xl/"),r=n("/6KZ"),c=n("dCrc"),o=n("oICS"),i=n("Ng5M"),s=n("gou2"),u=n("ErhN"),l=n("VJcA");r(r.S+r.F*!n("Clx3")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,r,d,f=c(e),p="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,L=void 0!==m,h=0,b=l(f);if(L&&(m=a(m,v>2?arguments[2]:void 0,2)),null==b||p==Array&&i(b))for(n=new p(t=s(f.length));t>h;h++)u(n,h,L?m(f[h],h):f[h]);else for(d=b.call(f),n=new p;!(r=d.next()).done;h++)u(n,h,L?o(d,m,[r.value,h],!0):r.value);return n.length=h,n}})},"4YdT":function(e,t,n){"use strict";n.r(t);var a=n("0tNF"),r=n("1qCV"),c=n.n(r),o=n("JYC+"),i=n.n(o),s=n("UrUy"),u=n.n(s),l=n("R3/3"),d=n("Rbzu"),f=n("LkAs"),p=n("Moms"),v=n("bMj6"),m=n("hZod"),L=n("tEuJ"),h=n("YKN3"),b=n("azxR"),g=n("mXGw"),O=n.n(g),j=n("AVMw"),w=n("IXLv"),y=n("z3IF"),E=n("hDBU"),x=n("pL2a"),C=n.n(x),T=n("E/TB"),k=function(e){var t=e.bodyClasses,n=e.css,a=e.document;if(!a||!a.body||!a.head)return T.a;var r=a.body,c=t.filter(Boolean);c.forEach(function(e){return r.classList.add(e)});var o=a.head,i=o.querySelector("style#injected");return i||((i=a.createElement("style")).id="injected",o.appendChild(i)),i.innerHTML=n,function(){return c.forEach(function(e){return r.classList.remove(e)})}};function S(e){var t=e.bodyClasses,n=void 0===t?[]:t,a=e.className,r=void 0===a?"":a,c=e.css,o=void 0===c?"":c,i=e.onLoad,s=void 0===i?T.a:i,u=e.onReady,l=void 0===u?T.a:u,f=e.onUnload,p=void 0===f?T.a:f,v=e.queryString,m=void 0===v?{}:v,L=e.src,h=void 0===L?"":L,j=e.title,w=void 0===j?"IFrame":j,x=Object(g.useRef)(),S=Object(g.useMemo)(function(){return function(e){var t=e.document,a=e.window;k({bodyClasses:n,css:o,document:t}),l({document:t,window:a})}},[n,o,l]),N=Object(g.useEffect)(function e(){var t=x.current.contentDocument,n=x.current.contentWindow;return s({document:t,window:n}),"about:blank"===n.location.href?setTimeout(e,50):"loading"===t.readyState?t.addEventListener("DOMContentLoaded",function(){S({document:t,window:n})}):S({document:t,window:n}),function(){return p({document:t,window:n})}},[l,p]),q=Object(g.useMemo)(function(){var e=C()(m).filter(function(e){return void 0!==Object(E.default)(e,2)[1]}).reduce(function(e,t){var n=Object(E.default)(t,2),a=n[0],r=n[1];return Object(d.a)({},e,Object(b.a)({},a,r))},{}),t=new URLSearchParams(e).toString();return h.match(/[?]/)?"".concat(h,"&").concat(t):"".concat(h,"?").concat(t)},[h,m]);return O.a.createElement("iframe",Object(y.a)({onLoad:N,ref:x,src:q},{className:r,title:w}))}var N=n("iLCn"),q=n("lTgw"),A=n("EAP2"),P=n("ZS9i"),I=n.n(P),X=n("PZST"),G=n.n(X),M=n("CjJp"),R=n("VTEe"),D=n("TTmL");n("KqK1");n.d(t,"default",function(){return U});var J=["_id","checksum","data","isOwner","isEditable","secret","slug","svg","title"],U=function(e){function t(){var e,n;Object(f.default)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=Object(v.default)(this,(e=Object(m.default)(t)).call.apply(e,[this].concat(o))),Object(b.a)(Object(h.default)(Object(h.default)(n)),"state",Object(d.a)({},Object(R.a)(n.props,J),{generating:!1})),Object(b.a)(Object(h.default)(Object(h.default)(n)),"handleDelete",Object(l.default)(u.a.mark(function e(){var t,a,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.context.router,a=n.props.slug,e.next=4,Object(M.a)("Are you sure you want to permanently delete this map?");case 4:if(e.sent){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,fetch("/api/map/".concat(a),{method:"DELETE"});case 8:return e.next=10,fetch("/api/map/".concat(a));case 10:return r=e.sent,e.t0=d.a,e.t1={},e.t2=R.a,e.next=16,r.json();case 16:e.t3=e.sent,e.t4=J,e.t5=(0,e.t2)(e.t3,e.t4),e.t6={_id:null,data:null,title:t.query.title||""},c=(0,e.t0)(e.t1,e.t5,e.t6),n.context.updateUser(),n.setState(Object(d.a)({},c,{generating:!1}));case 23:case"end":return e.stop()}},e,this)}))),Object(b.a)(Object(h.default)(Object(h.default)(n)),"handleGenerate",function(){return n.setState({generating:!0})}),Object(b.a)(Object(h.default)(Object(h.default)(n)),"handleOnReady",function(){var e=Object(l.default)(u.a.mark(function e(t){var a,r,c,o,i,s,l,d;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.window,n.iframeWindow=a,r=n.state,c=r._id,o=r.checksum,i=r.data,s=r.generating,l=n.props.slug,!i){e.next=8;break}a.displayJsonData(i),e.next=18;break;case 8:if(!c){e.next=17;break}return n.setState({loading:!0}),e.next=12,fetch("/api/map/".concat(l,"/").concat(o),{credentials:"include"}).then(function(e){return e.json()}).catch(function(){return null});case 12:(d=e.sent)&&d.data&&a.displayJsonData(d.data),n.setState({loading:!1}),e.next=18;break;case 17:s&&a.regenerateMap(function(){return n.setState({data:a.packageJsonData()})});case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),Object(b.a)(Object(h.default)(Object(h.default)(n)),"handleSave",Object(l.default)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({saving:!0}),t=n.iframeWindow.packageJsonData(),e.next=4,fetch("/api/map/".concat(n.props.slug),{body:i()(Object(d.a)({},Object(R.a)(n.state,J),{data:t})),headers:{"Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()});case 4:a=e.sent,n.setState(Object(d.a)({},a,{saving:!1}));case 6:case"end":return e.stop()}},e,this)}))),Object(b.a)(Object(h.default)(Object(h.default)(n)),"handleTitleChange",function(e){return n.setState({title:e})}),Object(b.a)(Object(h.default)(Object(h.default)(n)),"handleToggleNavigation",Object(l.default)(u.a.mark(function e(){var t,a,r,c,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.props,a=t.slug,r=t.title,c=n.context.campaign){e.next=4;break}return e.abrupt("return");case 4:o=c.navigation||[],n.isNavLink?o=o.filter(function(e){return e.slug!==a}):o.push({slug:a,title:r}),n.context.updateCampaign({navigation:o});case 7:case"end":return e.stop()}},e,this)}))),Object(b.a)(Object(h.default)(Object(h.default)(n)),"handleToggleSecret",Object(l.default)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.handleUpdate({secret:!n.state.secret});case 1:case"end":return e.stop()}},e,this)}))),Object(b.a)(Object(h.default)(Object(h.default)(n)),"handleUpdate",function(){var e=Object(l.default)(u.a.mark(function e(t){var r,o,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=c()(t),e.next=3,fetch("/api/map/".concat(n.props.slug),{body:i()(t),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return o=e.sent,e.t0=R.a,e.t1=void 0,e.next=8,o.json();case 8:e.t2=e.sent,e.t3=Object(a.default)(r),e.t4=[e.t2].concat(e.t3),s=e.t0.apply.call(e.t0,e.t1,e.t4),200===o.status&&n.setState(s);case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),Object(b.a)(Object(h.default)(Object(h.default)(n)),"render",function(){var e,t=n.context.campaign,a=n.props.slug,r=n.state,c=r._id,o=r.data,i=r.loading,s=r.generating,u=r.isEditable,l=r.isOwner,d=r.saving,f=r.secret,p=r.title;return e=c||u&&s?O.a.createElement(S,{bodyClasses:[u?"editable":"readOnly"],className:"map-frame",css:"\n            .readOnly #viewbox, .readOnly #scaleBar {\n              pointer-events: none;\n            }\n            .readOnly #optionsTab, .readOnly #toolsTab, .readOnly #regenerate {\n              display: none!important;\n            }\n            #loading, #initial { display: none; }\n          ",onReady:n.handleOnReady,src:"/static/fantasy-map-generator",queryString:{doNotGenerate:!0},title:"map"}):u?O.a.createElement(j.a,{className:"center"},u&&O.a.createElement(O.a.Fragment,null,"This map doesn't exist. Would you like to ",O.a.createElement("button",{className:"safe",onClick:n.handleGenerate},"Generate It?"))):O.a.createElement(j.a,{className:"center"},"This map either doesn't exist, or you don't have permission to view it."),O.a.createElement("div",{className:"map page ".concat(i?"loading":"")},!o&&s&&O.a.createElement("div",{className:"generating"},"Generating map..."),O.a.createElement("div",{className:"title-bar"},O.a.createElement(w.a,{className:"title ".concat(p.trim()?"":"default"),onChange:n.handleTitleChange,placeholder:a,readOnly:!u,value:p}),c&&l&&O.a.createElement(N.a,{className:"secret",value:f,offIcon:I.a,onIcon:G.a,onToggle:n.handleToggleSecret}),c&&t.isEditor&&O.a.createElement(N.a,{className:"in-navigation",value:n.isNavLink,offIcon:A.a,offProps:{title:"Not Added to Site Navigation"},onIcon:A.a,onProps:{title:"Added to Site Navigation"},onToggle:n.handleToggleNavigation}),(o||s)&&u&&O.a.createElement("button",{className:"safe",onClick:n.handleSave,disabled:d},"Save"),c&&u&&O.a.createElement("button",{className:"danger",onClick:n.handleDelete},"Delete")),e)}),n}return Object(L.default)(t,e),Object(p.default)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){if(e.slug!==t.slug){var n=Object(R.a)(e,J),a=(e||new URLSearchParams(window.location.search).get("title")||"").title;return Object(d.a)({},n,{title:a})}return t}}]),t}(g.Component);Object(b.a)(U,"contextType",q.a),Object(b.a)(U,"getInitialProps",function(){var e=Object(l.default)(u.a.mark(function e(t){var n,a,r,c,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,a=t.req,r=Object(R.a)(a&&a.headers,"cookie"),e.next=4,fetch(Object(D.a)(a,"/api/map/".concat(n.slug)),{headers:r});case 4:return c=e.sent,e.next=7,c.json();case 7:return o=e.sent,e.abrupt("return",Object(d.a)({httpStatusCode:c.status},o));case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())},"7X5e":function(e,t,n){e.exports=n("8/po")},"8/po":function(e,t,n){n("k/kI"),n("WwSA"),e.exports=n("0XBy")},"8ET1":function(e,t,n){e.exports=n("Vlwe")},AVMw:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n("mXGw"),r=n.n(a);n("sILV");function c(e){var t=e.className,n=void 0===t?"":t,a=e.children,c=void 0===a?[]:a,o=e.type,i=void 0===o?"info":o;return r.a.createElement("div",{className:"alert ".concat(i," ").concat(n)},c)}},CjJp:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n("UrUy"),r=n.n(a),c=n("ZOIa"),o=n.n(c),i=n("R3/3"),s=n("mXGw"),u=n.n(s),l=n("xARA"),d=n.n(l),f=n("y4cp");function p(){return v.apply(this,arguments)}function v(){return(v=Object(i.default)(r.a.mark(function e(){var t,n,a,c=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:"Prompt",a=document.createElement("div"),document.body.appendChild(a),e.abrupt("return",new o.a(function(e){var r=function(){return e(!1)},c=function(){return e(!0)};d.a.render(u.a.createElement(f.a,{buttons:u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{onClick:c},"Yes"),u.a.createElement("button",{onClick:r},"No")),modal:!0,okButtonText:"Yes",onCancel:r,onOk:c,title:n},u.a.createElement("div",{className:"text"},t)),a)}).finally(function(){document.body.removeChild(a)}));case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}},EAP2:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n("z3IF"),r=n("2Fjn"),c=n("mXGw"),o=n.n(c),i=n("E/TB");function s(e){var t=e.title,n=void 0===t?"Navigation":t,c=e.wrapperRef,s=void 0===c?i.a:c,u=Object(r.a)(e,["title","wrapperRef"]);return o.a.createElement("svg",Object(a.a)({version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:s},u),o.a.createElement("title",null,n),o.a.createElement("path",{d:"M32 22.272v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.704 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424h-9.12v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.736 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424h-9.12v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.736 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424q0-0.928 0.672-1.632t1.632-0.672h9.12v-3.424h-1.696q-0.736 0-1.216-0.512t-0.512-1.184v-5.728q0-0.704 0.512-1.216t1.216-0.512h5.696q0.736 0 1.216 0.512t0.512 1.216v5.728q0 0.704-0.512 1.184t-1.216 0.512h-1.696v3.424h9.12q0.928 0 1.632 0.672t0.672 1.632v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216z"}))}},ErhN:function(e,t,n){"use strict";var a=n("eOWL"),r=n("zJT+");e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},PZST:function(e,t,n){var a=n("mXGw");function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"Secret"),a.createElement("path",{d:"M17.03 5.16L17.75 5.36L18.44 5.64L19.09 5.97L19.7 6.38L20.27 6.84L20.79 7.35L21.25 7.92L21.65 8.53L21.99 9.19L22.26 9.88L22.46 10.6L22.58 11.35L22.63 12.13L22.63 15.5L23.75 15.5L24 15.51L24.23 15.55L24.46 15.61L24.68 15.7L24.89 15.81L25.08 15.93L25.26 16.08L25.42 16.24L25.57 16.42L25.69 16.61L25.8 16.82L25.89 17.04L25.95 17.27L25.99 17.5L26 17.75L26 26.75L25.99 27L25.95 27.23L25.89 27.46L25.8 27.68L25.69 27.89L25.57 28.08L25.42 28.26L25.26 28.42L25.08 28.57L24.89 28.69L24.68 28.8L24.46 28.89L24.23 28.95L24 28.99L23.75 29L7.25 29L7 28.99L6.77 28.95L6.54 28.89L6.32 28.8L6.11 28.69L5.92 28.57L5.74 28.42L5.58 28.26L5.43 28.08L5.31 27.89L5.2 27.68L5.11 27.46L5.05 27.23L5.01 27L5 26.75L5 17.75L5.01 17.5L5.05 17.27L5.11 17.04L5.2 16.82L5.31 16.61L5.43 16.42L5.58 16.24L5.74 16.08L5.92 15.93L6.11 15.81L6.32 15.7L6.54 15.61L6.77 15.55L7 15.51L7.25 15.5L8.38 15.5L8.38 12.13L8.42 11.35L8.54 10.6L8.74 9.88L9.01 9.19L9.35 8.53L9.75 7.92L10.21 7.35L10.73 6.84L11.3 6.38L11.91 5.97L12.56 5.64L13.25 5.36L13.97 5.16L14.72 5.04L15.5 5L16.28 5.04L17.03 5.16ZM13.11 9.74L12.39 10.81L12.13 12.13L12.13 15.5L18.88 15.5L18.88 12.13L18.61 10.81L17.89 9.74L16.81 9.02L15.5 8.75L14.19 9.02L13.11 9.74Z",id:"b7agiUAQvt",key:1})])}r.defaultProps={version:"1.1",width:"26.25",height:"30",viewBox:"4 4 25 28"},e.exports=r,r.default=r},TTmL:function(e,t,n){"use strict";t.a=function(e,t){var n=e?"".concat(e.protocol,"://").concat(e.get("Host")):"";return"".concat(n).concat(t)}},TXsb:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/map",function(){var e=n("4YdT");return{page:e.default||e}}])},Vlwe:function(e,t,n){n("WwSA"),n("2agv"),e.exports=n("TaGV").Array.from},ZS9i:function(e,t,n){var a=n("mXGw");function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"Public"),a.createElement("path",{d:"M15.39 11.87C15.39 12.05 15.39 12.94 15.39 14.56C10.26 14.56 7.4 14.56 6.83 14.56C5.82 14.56 5 15.38 5 16.39C5 17.12 5 22.99 5 23.72C5 24.73 5.82 25.55 6.83 25.55C8.18 25.55 18.93 25.55 20.28 25.55C21.29 25.55 22.11 24.73 22.11 23.72C22.11 22.99 22.11 17.12 22.11 16.39C22.11 15.38 21.29 14.56 20.28 14.56C20.16 14.56 19.54 14.56 18.44 14.56C18.44 12.93 18.44 12.02 18.44 11.84C18.44 10.33 19.66 9.07 21.17 9.06C22.7 9.04 23.94 10.28 23.94 11.81C23.94 12.11 23.94 14.56 23.94 14.86C23.94 15.37 24.35 15.78 24.86 15.78C24.98 15.78 25.96 15.78 26.08 15.78C26.59 15.78 27 15.37 27 14.86C27 14.56 27 12.11 27 11.81C27 8.6 24.38 5.99 21.18 6C17.97 6.02 15.39 8.66 15.39 11.87Z",id:"b90YTQhGbf",key:1})])}r.defaultProps={version:"1.1",width:"30",height:"30",viewBox:"5 3 25 23"},e.exports=r,r.default=r}},[["TXsb",1,0,2]]]);