(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4YdT":function(e,t,n){"use strict";n.r(t);var a=n("UrUy"),r=n.n(a),c=n("Rbzu"),o=n("R3/3"),u=n("JYC+"),i=n.n(u),d=n("LkAs"),s=n("bMj6"),l=n("hZod"),f=n("tEuJ"),m=n("YKN3"),p=n("azxR"),b=n("mXGw"),v=n.n(b),O=n("AVMw"),j=n("z3IF"),h=n("hDBU"),w=n("pL2a"),y=n.n(w),g=n("E/TB");function E(e){var t=e.bodyClasses,n=void 0===t?[]:t,a=e.className,r=void 0===a?"":a,o=e.css,u=void 0===o?"":o,i=e.onLoad,d=void 0===i?g.a:i,s=e.onUnload,l=void 0===s?g.a:s,f=e.queryString,m=void 0===f?{}:f,O=e.src,w=void 0===O?"":O,E=e.title,T=void 0===E?"IFrame":E,L=e.windowRef,I=void 0===L?g.a:L,N=Object(b.useRef)(),U=Object(b.useEffect)(function(){var e=N.current.contentDocument,t=N.current.contentWindow;return d({document:e,window:t}),I(t),function(){return l({document:e,window:t})}},[]);Object(b.useEffect)(function(){var e=N.current.contentDocument.body;if(!e)return g.a;var t=n.filter(Boolean);return t.forEach(function(t){return e.classList.add(t)}),function(){return t.forEach(function(t){return e.classList.remove(t)})}},[n]),Object(b.useEffect)(function(){var e=N.current.contentDocument.head;if(e){var t=e.querySelector("style#injected");t||((t=N.current.contentDocument.createElement("style")).id="injected",e.appendChild(t)),t.innerHTML=u}},[u]);var k=Object(b.useMemo)(function(){var e=y()(m).filter(function(e){return void 0!==Object(h.default)(e,2)[1]}).reduce(function(e,t){var n=Object(h.default)(t,2),a=n[0],r=n[1];return Object(c.a)({},e,Object(p.a)({},a,r))},{}),t=new URLSearchParams(e).toString();return w.match(/[?]/)?"".concat(w,"&").concat(t):"".concat(w,"?").concat(t)},[w,m]);return v.a.createElement("iframe",Object(j.a)({onLoad:U,ref:N,src:k},{className:r,title:T}))}var T=n("lTgw"),L=n("8qGm"),I=n("VTEe"),N=n("TTmL");n("KqK1");n.d(t,"default",function(){return k});var U=["mousedown","mouseup","keydown","keyup"],k=function(e){function t(){var e,n;Object(d.default)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=Object(s.default)(this,(e=Object(l.default)(t)).call.apply(e,[this].concat(r))),Object(p.a)(Object(m.default)(Object(m.default)(n)),"state",{data:n.props.data}),Object(p.a)(Object(m.default)(Object(m.default)(n)),"handleUserInteraction",Object(L.a)(function(){n.iframeWindow&&n.iframeWindow.packageJsonData&&n.setState({data:n.iframeWindow.packageJsonData()})},1e3)),Object(p.a)(Object(m.default)(Object(m.default)(n)),"handleGenerate",function(){var e=n.context.router,t=n.props.slug;e.push("/map?slug=".concat(t,"&generate=true"),"/map/".concat(t,"?generate=true"))}),Object(p.a)(Object(m.default)(Object(m.default)(n)),"handleIWindowRef",function(e){n.iframeWindow=e}),Object(p.a)(Object(m.default)(Object(m.default)(n)),"handleOnLoad",function(e){var t=e.document,a=e.window;n.props.data&&(a.displayJsonData(n.props.data),a.hideLoadingMessage());var r=t.querySelector("svg#map");U.forEach(function(e){a.addEventListener(e,n.handleUserInteraction),r&&r.addEventListener(e,n.handleUserInteraction)})}),Object(p.a)(Object(m.default)(Object(m.default)(n)),"handleOnUnload",function(e){var t=e.document,a=e.window,r=t.querySelector("svg#map");U.forEach(function(e){a.removeEventListener(e,n.handleUserInteraction),r&&r.removeEventListener(e,n.handleUserInteraction)})}),Object(p.a)(Object(m.default)(Object(m.default)(n)),"handleSave",function(){localStorage.setItem("mapJson",i()(n.state.data))}),Object(p.a)(Object(m.default)(Object(m.default)(n)),"render",function(){var e,t=n.context.router.query.generate,a=n.props,r=a.data,c=a.isEditable;return e=r||c&&t?v.a.createElement(E,{bodyClasses:[c?"editable":"readOnly"],className:"map-frame",css:"\n            .readOnly #viewbox, .readOnly #scaleBar {\n              pointer-events: none;\n            }\n            .readOnly #optionsTab, .readOnly #toolsTab, .readOnly #regenerate {\n              display: none!important;\n            }\n          ",onLoad:n.handleOnLoad,onUnload:n.handleOnUnload,src:"/static/fantasy-map-generator",queryString:{doNotGenerate:!!r||void 0},title:"map",windowRef:n.handleIWindowRef}):c?v.a.createElement(O.a,{className:"center"},c&&v.a.createElement(v.a.Fragment,null,"This map doesn't exist. Would you like to ",v.a.createElement("button",{className:"safe",onClick:n.handleGenerate},"Generate It?"))):v.a.createElement(O.a,{className:"center"},"This map either doesn't exist, or you don't have permission to view it."),v.a.createElement("div",{className:"map page"},e)}),n}return Object(f.default)(t,e),t}(b.Component);Object(p.a)(k,"contextType",T.a),Object(p.a)(k,"defaultProps",{data:null,readOnly:!1}),Object(p.a)(k,"getInitialProps",function(){var e=Object(o.default)(r.a.mark(function e(t){var n,a,o,u,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,a=t.req,o=Object(I.a)(a&&a.headers,"cookie"),e.next=4,fetch(Object(N.a)(a,"/api/map/".concat(n.slug)),{headers:o});case 4:return u=e.sent,e.next=7,u.json();case 7:return i=e.sent,e.abrupt("return",Object(c.a)({httpStatusCode:u.status},i));case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())},"8qGm":function(e,t,n){"use strict";function a(e,t,n){var a,r=this;return function(){for(var c=arguments.length,o=new Array(c),u=0;u<c;u++)o[u]=arguments[u];var i=n&&!a;clearTimeout(a),a=setTimeout(function(){a=null,n||e.apply(r,o)},t),i&&e.apply(r,o)}}n.d(t,"a",function(){return a})},AVMw:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n("mXGw"),r=n.n(a);n("sILV");function c(e){var t=e.className,n=void 0===t?"":t,a=e.children,c=void 0===a?[]:a,o=e.type,u=void 0===o?"info":o;return r.a.createElement("div",{className:"alert ".concat(u," ").concat(n)},c)}},TTmL:function(e,t,n){"use strict";t.a=function(e,t){var n=e?"".concat(e.protocol,"://").concat(e.get("Host")):"";return"".concat(n).concat(t)}},TXsb:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/map",function(){var e=n("4YdT");return{page:e.default||e}}])}},[["TXsb",1,0,2]]]);