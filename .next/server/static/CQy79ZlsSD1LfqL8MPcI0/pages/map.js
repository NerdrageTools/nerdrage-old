module.exports=function(e){var t=require("../../../ssr-module-cache.js");function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}},o=!0;try{e[r].call(a.exports,a,a.exports,n),o=!1}finally{o&&delete t[r]}return a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}({"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/Shq":function(e,t){},"/s91":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("8ET1"),a=n.n(r),o=n("7X5e"),c=n.n(o);function i(e){if(c()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return a()(e)}},"0tNF":function(e,t,n){"use strict";var r=n("s20r"),a=n.n(r);var o=n("/s91");function c(e){return function(e){if(a()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return c})},"1qCV":function(e,t,n){e.exports=n("qJj/")},"2Fjn":function(e,t,n){"use strict";var r=n("s4hn"),a=n.n(r),o=n("1qCV"),c=n.n(o);function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,a={},o=c()(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(a.a){var i=a()(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",function(){return i})},"48dn":function(e,t,n){var r=n("cDcd");function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Marked as Favorite"),r.createElement("path",{d:"M9.504 11.264q2.208-4.864 3.648-8.064 0.192-0.48 0.768-0.48t0.736 0.48l3.648 8.064q5.248 0.576 8.768 0.96 0.48 0.096 0.672 0.576t-0.192 0.864l-6.528 5.984q1.056 5.152 1.76 8.64 0.096 0.48-0.32 0.8t-0.864 0.064l-7.68-4.352q-4.608 2.592-7.68 4.352-0.48 0.288-0.896-0.064t-0.352-0.8l1.792-8.64q-3.904-3.584-6.528-5.984-0.384-0.352-0.192-0.832t0.672-0.608z",key:1})])}a.defaultProps={version:"1.1",width:"28",height:"32",viewBox:"0 0 28 32"},e.exports=a,a.default=a},"4YdT":function(e,t,n){"use strict";n.r(t);var r=n("0tNF"),a=n("1qCV"),o=n.n(a),c=n("JYC+"),i=n.n(c),u=n("UrUy"),s=n.n(u),l=n("R3/3"),d=n("Rbzu"),f=n("LkAs"),p=n("Moms"),b=n("bMj6"),v=n("hZod"),h=n("tEuJ"),m=n("YKN3"),g=n("azxR"),y=n("cDcd"),j=n.n(y),O=n("AVMw"),L=n("IXLv"),E=n("z3IF"),x=n("hDBU"),w=n("pL2a"),q=n.n(w),C=n("E/TB"),k=function(e){var t=e.bodyClasses,n=e.css,r=e.document;if(!r||!r.body||!r.head)return C.a;var a=r.body,o=t.filter(Boolean);o.forEach(function(e){return a.classList.add(e)});var c=r.head,i=c.querySelector("style#injected");return i||((i=r.createElement("style")).id="injected",c.appendChild(i)),i.innerHTML=n,function(){return o.forEach(function(e){return a.classList.remove(e)})}};function T(e){var t=e.bodyClasses,n=void 0===t?[]:t,r=e.className,a=void 0===r?"":r,o=e.css,c=void 0===o?"":o,i=e.onLoad,u=void 0===i?C.a:i,s=e.onReady,l=void 0===s?C.a:s,f=e.onUnload,p=void 0===f?C.a:f,b=e.queryString,v=void 0===b?{}:b,h=e.src,m=void 0===h?"":h,O=e.title,L=void 0===O?"IFrame":O,w=Object(y.useRef)(),T=Object(y.useMemo)(function(){return function(e){var t=e.document,r=e.window;k({bodyClasses:n,css:c,document:t}),l({document:t,window:r})}},[n,c,l]),N=Object(y.useEffect)(function e(){var t=w.current.contentDocument,n=w.current.contentWindow;return u({document:t,window:n}),"about:blank"===n.location.href?setTimeout(e,50):"loading"===t.readyState?t.addEventListener("DOMContentLoaded",function(){T({document:t,window:n})}):T({document:t,window:n}),function(){return p({document:t,window:n})}},[l,p]),S=Object(y.useMemo)(function(){var e=q()(v).filter(function(e){return void 0!==Object(x.a)(e,2)[1]}).reduce(function(e,t){var n=Object(x.a)(t,2),r=n[0],a=n[1];return Object(d.a)({},e,Object(g.a)({},r,a))},{}),t=new URLSearchParams(e).toString();return m.match(/[?]/)?"".concat(m,"&").concat(t):"".concat(m,"?").concat(t)},[m,v]);return j.a.createElement("iframe",Object(E.a)({onLoad:N,ref:w,src:S},{className:a,title:L}))}var N=n("iLCn"),S=n("lTgw"),K=n("EAP2"),D=n("ZS9i"),F=n.n(D),P=n("PZST"),U=n.n(P),M=n("CjJp"),R=n("VTEe"),A=n("TTmL");n("KqK1");n.d(t,"default",function(){return I});var B=["_id","checksum","data","isOwner","isEditable","secret","slug","svg","title"],I=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return n=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c))),Object(g.a)(Object(m.a)(Object(m.a)(n)),"state",Object(d.a)({},Object(R.a)(n.props,B),{generating:!1})),Object(g.a)(Object(m.a)(Object(m.a)(n)),"handleDelete",Object(l.a)(s.a.mark(function e(){var t,r,a,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.context.router,r=n.props.slug,e.next=4,Object(M.a)("Are you sure you want to permanently delete this map?");case 4:if(e.sent){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,fetch("/api/map/".concat(r),{method:"DELETE"});case 8:return e.next=10,fetch("/api/map/".concat(r));case 10:return a=e.sent,e.t0=d.a,e.t1={},e.t2=R.a,e.next=16,a.json();case 16:e.t3=e.sent,e.t4=B,e.t5=(0,e.t2)(e.t3,e.t4),e.t6={_id:null,data:null,title:t.query.title||""},o=(0,e.t0)(e.t1,e.t5,e.t6),n.context.updateUser(),n.setState(Object(d.a)({},o,{generating:!1}));case 23:case"end":return e.stop()}},e,this)}))),Object(g.a)(Object(m.a)(Object(m.a)(n)),"handleGenerate",function(){return n.setState({generating:!0})}),Object(g.a)(Object(m.a)(Object(m.a)(n)),"handleOnReady",function(){var e=Object(l.a)(s.a.mark(function e(t){var r,a,o,c,i,u,l,d;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.window,n.iframeWindow=r,a=n.state,o=a._id,c=a.checksum,i=a.data,u=a.generating,l=n.props.query,!i){e.next=8;break}r.displayJsonData(i),e.next=18;break;case 8:if(!o){e.next=17;break}return n.setState({loading:!0}),e.next=12,fetch("/api/map/".concat(l.slug,"/").concat(c),{credentials:"include"}).then(function(e){return e.json()}).catch(function(){return null});case 12:(d=e.sent)&&d.data&&r.displayJsonData(d.data),n.setState({loading:!1}),e.next=18;break;case 17:u&&r.regenerateMap(function(){return n.setState({data:r.packageJsonData()})});case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),Object(g.a)(Object(m.a)(Object(m.a)(n)),"handleSave",Object(l.a)(s.a.mark(function e(){var t,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({saving:!0}),t=n.iframeWindow.packageJsonData(),e.next=4,fetch("/api/map/".concat(n.props.slug),{body:i()(Object(d.a)({},Object(R.a)(n.state,B),{data:t})),headers:{"Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()});case 4:r=e.sent,n.setState(Object(d.a)({},r,{saving:!1}));case 6:case"end":return e.stop()}},e,this)}))),Object(g.a)(Object(m.a)(Object(m.a)(n)),"handleTitleChange",function(e){return n.setState({title:e})}),Object(g.a)(Object(m.a)(Object(m.a)(n)),"handleToggleNavigation",Object(l.a)(s.a.mark(function e(){var t,r,a,o,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.props,r=t.slug,a=t.title,o=n.context.campaign){e.next=4;break}return e.abrupt("return");case 4:c=o.navigation||[],n.isNavLink?c=c.filter(function(e){return e.slug!==r}):c.push({slug:r,title:a}),n.context.updateCampaign({navigation:c});case 7:case"end":return e.stop()}},e,this)}))),Object(g.a)(Object(m.a)(Object(m.a)(n)),"handleToggleSecret",Object(l.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.handleUpdate({secret:!n.state.secret});case 1:case"end":return e.stop()}},e,this)}))),Object(g.a)(Object(m.a)(Object(m.a)(n)),"handleUpdate",function(){var e=Object(l.a)(s.a.mark(function e(t){var a,c,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=o()(t),e.next=3,fetch("/api/map/".concat(n.props.slug),{body:i()(t),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return c=e.sent,e.t0=R.a,e.t1=void 0,e.next=8,c.json();case 8:e.t2=e.sent,e.t3=Object(r.a)(a),e.t4=[e.t2].concat(e.t3),u=e.t0.apply.call(e.t0,e.t1,e.t4),200===c.status&&n.setState(u);case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),Object(g.a)(Object(m.a)(Object(m.a)(n)),"render",function(){var e,t=n.context.campaign,r=n.props.slug,a=n.state,o=a._id,c=a.data,i=a.loading,u=a.generating,s=a.isEditable,l=a.isOwner,d=a.saving,f=a.secret,p=a.title;return e=c||s&&u?j.a.createElement(T,{bodyClasses:[s?"editable":"readOnly"],className:"map-frame",css:"\n            .readOnly #viewbox, .readOnly #scaleBar {\n              pointer-events: none;\n            }\n            .readOnly #optionsTab, .readOnly #toolsTab, .readOnly #regenerate {\n              display: none!important;\n            }\n            #loading, #initial { display: none; }\n          ",onReady:n.handleOnReady,src:"/static/fantasy-map-generator",queryString:{doNotGenerate:!0},title:"map"}):s?j.a.createElement(O.a,{className:"center"},s&&j.a.createElement(j.a.Fragment,null,"This map doesn't exist. Would you like to ",j.a.createElement("button",{className:"safe",onClick:n.handleGenerate},"Generate It?"))):j.a.createElement(O.a,{className:"center"},"This map either doesn't exist, or you don't have permission to view it."),j.a.createElement("div",{className:"map page ".concat(i?"loading":"")},!c&&u&&j.a.createElement("div",{className:"generating"},"Generating map..."),j.a.createElement("div",{className:"title-bar"},j.a.createElement(L.a,{className:"title ".concat(p.trim()?"":"default"),onChange:n.handleTitleChange,placeholder:r,readOnly:!s,value:p}),o&&l&&j.a.createElement(N.a,{className:"secret",value:f,offIcon:F.a,onIcon:U.a,onToggle:n.handleToggleSecret}),o&&t.isEditor&&j.a.createElement(N.a,{className:"in-navigation",value:n.isNavLink,offIcon:K.a,offProps:{title:"Not Added to Site Navigation"},onIcon:K.a,onProps:{title:"Added to Site Navigation"},onToggle:n.handleToggleNavigation}),(c||u)&&s&&j.a.createElement("button",{className:"safe",onClick:n.handleSave,disabled:d},"Save"),o&&s&&j.a.createElement("button",{className:"danger",onClick:n.handleDelete},"Delete")),e)}),n}return Object(h.a)(t,e),Object(p.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){if(e.slug!==t.slug){var n=Object(R.a)(e,B),r=(e||new URLSearchParams(window.location.search).get("title")||"").title;return Object(d.a)({},n,{title:r})}return t}}]),t}(y.Component);Object(g.a)(I,"contextType",S.a),Object(g.a)(I,"getInitialProps",function(){var e=Object(l.a)(s.a.mark(function e(t){var n,r,a,o,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=t.req,a=Object(R.a)(r&&r.headers,"cookie"),e.next=4,fetch(Object(A.a)(r,"/api/map/".concat(n.slug)),{headers:a});case 4:return o=e.sent,e.next=7,o.json();case 7:return c=e.sent,e.abrupt("return",Object(d.a)({httpStatusCode:o.status},c));case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())},6:function(e,t,n){e.exports=n("4YdT")},"6Ndq":function(e,t,n){e.exports=n("o5io")},"7X5e":function(e,t,n){e.exports=n("Kjtv")},"8ET1":function(e,t,n){e.exports=n("r7XW")},AVMw:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("cDcd"),a=n.n(r);n("sILV");function o(e){var t=e.className,n=void 0===t?"":t,r=e.children,o=void 0===r?[]:r,c=e.type,i=void 0===c?"info":c;return a.a.createElement("div",{className:"alert ".concat(i," ").concat(n)},o)}},BGkK:function(e,t){e.exports=require("core-js/library/fn/number/is-nan")},CjJp:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n("UrUy"),a=n.n(r),o=n("ZOIa"),c=n.n(o),i=n("R3/3"),u=n("cDcd"),s=n.n(u),l=n("faye"),d=n.n(l),f=n("y4cp");function p(){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(a.a.mark(function e(){var t,n,r,o=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",n=o.length>1&&void 0!==o[1]?o[1]:"Prompt",r=document.createElement("div"),document.body.appendChild(r),e.abrupt("return",new c.a(function(e){var a=function(){return e(!1)},o=function(){return e(!0)};d.a.render(s.a.createElement(f.a,{buttons:s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{onClick:o},"Yes"),s.a.createElement("button",{onClick:a},"No")),modal:!0,okButtonText:"Yes",onCancel:a,onOk:o,title:n},s.a.createElement("div",{className:"text"},t)),r)}).finally(function(){document.body.removeChild(r)}));case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}},DMmu:function(e,t){e.exports=require("react-draggable")},"E/TB":function(e,t,n){"use strict";t.a=function(){}},EAP2:function(e,t,n){"use strict";var r=n("z3IF"),a=n("2Fjn"),o=n("cDcd"),c=n.n(o);t.a=function(e){var t=e.title,n=void 0===t?"Navigation":t,o=Object(a.a)(e,["title"]);return c.a.createElement("svg",Object(r.a)({version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},o),c.a.createElement("title",null,n),c.a.createElement("path",{d:"M32 22.272v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.704 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424h-9.12v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.736 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424h-9.12v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.736 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424q0-0.928 0.672-1.632t1.632-0.672h9.12v-3.424h-1.696q-0.736 0-1.216-0.512t-0.512-1.184v-5.728q0-0.704 0.512-1.216t1.216-0.512h5.696q0.736 0 1.216 0.512t0.512 1.216v5.728q0 0.704-0.512 1.184t-1.216 0.512h-1.696v3.424h9.12q0.928 0 1.632 0.672t0.672 1.632v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216z"}))}},FkRQ:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("s20r"),a=n.n(r);function o(e){if(a()(e))return e}},IXLv:function(e,t,n){"use strict";var r=n("z3IF"),a=n("bVN1"),o=n.n(a),c=n("yLsn"),i=n.n(c),u=n("gDVU"),s=n("LkAs"),l=n("Moms"),d=n("bMj6"),f=n("hZod"),p=n("tEuJ"),b=n("YKN3"),v=n("azxR"),h=n("cDcd"),m=n.n(h),g=function(e,t){var n=t.min,r=t.max;return void 0!==n&&e<n?n:void 0!==r&&e>r?r:e},y=n("E/TB");n("VVQE");n.d(t,"a",function(){return O});var j=["text","multiline","boolean","number","slider"],O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c))),Object(v.a)(Object(b.a)(Object(b.a)(n)),"state",{editing:!1,resetValue:n.props.value}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"getEditorType",function(){var e=n.props.value,t=n.props.type;return void 0!==t&&j.includes(t)?t:"string"===(t=Object(u.a)(e))?e.includes("\n")?"multiline":"text":["boolean","number"].includes(t)?t:"text"}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"resetChanges",function(){n.props.onChange(n.state.resetValue,n.props.value),n.handleToggleEditing()}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"createRefWithAutoFocus",function(e){e&&(n.editor=e,"boolean"!==n.getEditorType()&&"function"==typeof e.focus&&e.focus(),["boolean","number"].includes(n.getEditorType())||n.props.forceEditMode&&"function"==typeof e.setSelectionRange&&e.setSelectionRange(e.value.length,e.value.length))}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"handleChange",function(e){var t=e.target,r=n.props,a=r.min,c=r.max,u=t.value;switch(n.getEditorType()){case"slider":case"number":u=i()(u||0),o()(u)&&(u=n.props.value),u=g(u,{max:c,min:a})}n.props.onChange(u,n.state.resetValue)}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"handleKeys",function(e){var t=e.target,r=e.key,a=e.ctrlKey,o=e.metaKey;n.props.onKeyDown!==y.a&&(n.props.onKeyDown(e),e.isDefaultPrevented())||("Escape"===r&&n.resetChanges(),"Enter"===r&&("TEXTAREA"!==t.nodeName||a||o)&&n.handleToggleEditing())}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"handleReceivingFocus",function(){n.props.readOnly||n.state.editing||n.handleToggleEditing()}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"handleToggleEditing",function(){if(!n.props.readOnly){var e=!n.editing;n.setState({editing:e,resetValue:n.props.value},function(){n.state.editing?n.props.onEditStart():n.props.onEditEnd()})}}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"selectOnFocus",function(e){return e.target.select()}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"toggleBoolean",function(){n.props.onEditStart(),n.props.onChange(!n.props.value,n.props.value),n.props.onEditEnd()}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"renderBoolean",function(){return m.a.createElement("input",{type:"checkbox",checked:Boolean(n.props.value),disabled:n.props.readOnly,onChange:n.toggleBoolean,ref:n.createRefWithAutoFocus})}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"renderMultiline",function(){if(!n.editing){var e=(n.props.value||n.props.placeholder).split("\n").map(function(e,t){return m.a.createElement("p",{key:t},e)}),t=["multiline",n.props.value?"":"placeholder"].join(" ").trim();return m.a.createElement("div",{className:t,onClick:n.handleToggleEditing},e)}return m.a.createElement("textarea",{disabled:n.props.readOnly,onBlur:n.handleToggleEditing,onChange:n.handleChange,onFocus:n.selectOnFocus,onKeyDown:n.handleKeys,onKeyPress:n.props.onKeyPress,onKeyUp:n.props.onKeyUp,placeholder:n.props.placeholder,ref:n.createRefWithAutoFocus,rows:n.props.value.split("\n").length,value:n.props.value})}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"renderNumber",function(){return n.editing?m.a.createElement("input",{type:"number",disabled:n.props.readOnly,max:n.props.max,min:n.props.min,onBlur:n.handleToggleEditing,onChange:n.handleChange,onFocus:n.selectOnFocus,onKeyDown:n.handleKeys,onKeyPress:n.props.onKeyPress,onKeyUp:n.props.onKeyUp,placeholder:n.props.placeholder,ref:n.createRefWithAutoFocus,step:n.props.step,value:n.props.value}):n.renderStatic()}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"renderSlider",function(){return m.a.createElement("input",{type:"range",disabled:n.props.readOnly,max:n.props.max,min:n.props.min,onBlur:n.handleToggleEditing,onChange:n.handleChange,onKeyDown:n.props.onKeyDown,onKeyPress:n.props.onKeyPress,onKeyUp:n.props.onKeyUp,ref:n.createRefWithAutoFocus,step:n.props.step,value:n.props.value})}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"renderText",function(){return n.editing?m.a.createElement("input",{type:"text",disabled:n.props.readOnly,onBlur:n.handleToggleEditing,onChange:n.handleChange,onFocus:n.selectOnFocus,onKeyDown:n.handleKeys,onKeyPress:n.props.onKeyPress,onKeyUp:n.props.onKeyUp,placeholder:n.props.placeholder,ref:n.createRefWithAutoFocus,value:n.props.value}):n.renderStatic()}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"renderStatic",function(){var e=n.props,t=e.placeholder,a=e.readOnlyValue,o=e.requireDoubleClick,c=e.value,i=t&&!c,u=void 0!==a?a:c,s=i?"placeholder":"",l={};return o||(l.onClick=n.handleToggleEditing),m.a.createElement("span",Object(r.a)({className:s},l),i?t:u)}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"renderEditor",function(){switch(n.getEditorType()){case"boolean":return n.renderBoolean();case"slider":return n.renderSlider();case"multiline":return n.renderMultiline();case"number":return n.renderNumber();default:return n.renderText()}}),Object(v.a)(Object(b.a)(Object(b.a)(n)),"render",function(){var e=n.props,t=e.className,a=e.readOnly,o=e.requireDoubleClick,c=["editable",n.editing?"editing":"",t||"",a?"readonly":""].filter(Boolean),i={};return a||n.editing||(o?i.onDoubleClick=n.handleToggleEditing:(i.tabIndex="0",i.onFocus=n.handleReceivingFocus)),m.a.createElement("div",Object(r.a)({className:c.join(" ")},i),n.renderEditor())}),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"editing",get:function(){return this.props.forceEditMode||this.state.editing}}]),t}(h.Component);Object(v.a)(O,"displayName","Editable"),Object(v.a)(O,"defaultProps",{className:"",forceEditMode:!1,max:void 0,min:void 0,onChange:y.a,onEditEnd:y.a,onEditStart:y.a,onKeyDown:y.a,onKeyPress:y.a,onKeyUp:y.a,placeholder:"",readOnly:!1,readOnlyValue:void 0,requireDoubleClick:!1,step:1,type:void 0,value:""})},"J3/a":function(e,t){e.exports=require("core-js/library/fn/get-iterator")},"JSB+":function(e,t){},"JYC+":function(e,t,n){e.exports=n("fozc")},Kjtv:function(e,t){e.exports=require("core-js/library/fn/is-iterable")},KqK1:function(e,t){},LkAs:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return r})},Moms:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("hHgk"),a=n.n(r);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),a()(e,r.key,r)}}function c(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},OKNm:function(e,t,n){e.exports=n("Wk4r")},PZST:function(e,t,n){var r=n("cDcd");function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Secret"),r.createElement("path",{d:"M17.03 5.16L17.75 5.36L18.44 5.64L19.09 5.97L19.7 6.38L20.27 6.84L20.79 7.35L21.25 7.92L21.65 8.53L21.99 9.19L22.26 9.88L22.46 10.6L22.58 11.35L22.63 12.13L22.63 15.5L23.75 15.5L24 15.51L24.23 15.55L24.46 15.61L24.68 15.7L24.89 15.81L25.08 15.93L25.26 16.08L25.42 16.24L25.57 16.42L25.69 16.61L25.8 16.82L25.89 17.04L25.95 17.27L25.99 17.5L26 17.75L26 26.75L25.99 27L25.95 27.23L25.89 27.46L25.8 27.68L25.69 27.89L25.57 28.08L25.42 28.26L25.26 28.42L25.08 28.57L24.89 28.69L24.68 28.8L24.46 28.89L24.23 28.95L24 28.99L23.75 29L7.25 29L7 28.99L6.77 28.95L6.54 28.89L6.32 28.8L6.11 28.69L5.92 28.57L5.74 28.42L5.58 28.26L5.43 28.08L5.31 27.89L5.2 27.68L5.11 27.46L5.05 27.23L5.01 27L5 26.75L5 17.75L5.01 17.5L5.05 17.27L5.11 17.04L5.2 16.82L5.31 16.61L5.43 16.42L5.58 16.24L5.74 16.08L5.92 15.93L6.11 15.81L6.32 15.7L6.54 15.61L6.77 15.55L7 15.51L7.25 15.5L8.38 15.5L8.38 12.13L8.42 11.35L8.54 10.6L8.74 9.88L9.01 9.19L9.35 8.53L9.75 7.92L10.21 7.35L10.73 6.84L11.3 6.38L11.91 5.97L12.56 5.64L13.25 5.36L13.97 5.16L14.72 5.04L15.5 5L16.28 5.04L17.03 5.16ZM13.11 9.74L12.39 10.81L12.13 12.13L12.13 15.5L18.88 15.5L18.88 12.13L18.61 10.81L17.89 9.74L16.81 9.02L15.5 8.75L14.19 9.02L13.11 9.74Z",id:"b7agiUAQvt",key:1})])}a.defaultProps={version:"1.1",width:"26.25",height:"30",viewBox:"4 4 25 28"},e.exports=a,a.default=a},R2Q7:function(e,t){e.exports=require("core-js/library/fn/array/is-array")},"R3/3":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("ZOIa"),a=n.n(r);function o(e,t,n,r,o,c,i){try{var u=e[c](i),s=u.value}catch(e){return void n(e)}u.done?t(s):a.a.resolve(s).then(r,o)}function c(e){return function(){var t=this,n=arguments;return new a.a(function(r,a){var c=e.apply(t,n);function i(e){o(c,r,a,i,u,"next",e)}function u(e){o(c,r,a,i,u,"throw",e)}i(void 0)})}}},Rbzu:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n("tvLF"),a=n.n(r),o=n("s4hn"),c=n.n(o),i=n("1qCV"),u=n.n(i),s=n("azxR");function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=u()(n);"function"==typeof c.a&&(r=r.concat(c()(n).filter(function(e){return a()(n,e).enumerable}))),r.forEach(function(t){Object(s.a)(e,t,n[t])})}return e}},SWa5:function(e,t){e.exports=require("core-js/library/fn/object/entries")},SY1S:function(e,t,n){e.exports=n("J3/a")},T22j:function(e,t){e.exports=require("core-js/library/fn/parse-float")},TTmL:function(e,t,n){"use strict";t.a=function(e,t){var n=e?"".concat(e.protocol,"://").concat(e.get("Host")):"";return"".concat(n).concat(t)}},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},U8Yc:function(e,t,n){e.exports=n("dGr4")},UrUy:function(e,t,n){e.exports=n("cu1A")},VTEe:function(e,t,n){"use strict";var r=n("gDVU"),a=n("JYC+"),o=n.n(a),c=n("s20r"),i=n.n(c);t.a=function(e){if(!e||"object"!==Object(r.a)(e))return{};for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0;if(!t||!i()(t))throw new TypeError("cannot flatten non-Array value ".concat(o()(t)));return t.reduce(function(t,r){return n>1&&r&&i()(r)?t.concat(e(r,n-1)):t.concat(r)},[])}(n).reduce(function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t},{})}},VVQE:function(e,t){},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XzKa:function(e,t,n){e.exports=n("vqFK")},YKN3:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return r})},Z6Kq:function(e,t){e.exports=require("core-js/library/fn/object/get-own-property-descriptor")},ZOIa:function(e,t,n){e.exports=n("aC71")},ZS9i:function(e,t,n){var r=n("cDcd");function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Public"),r.createElement("path",{d:"M15.39 11.87C15.39 12.05 15.39 12.94 15.39 14.56C10.26 14.56 7.4 14.56 6.83 14.56C5.82 14.56 5 15.38 5 16.39C5 17.12 5 22.99 5 23.72C5 24.73 5.82 25.55 6.83 25.55C8.18 25.55 18.93 25.55 20.28 25.55C21.29 25.55 22.11 24.73 22.11 23.72C22.11 22.99 22.11 17.12 22.11 16.39C22.11 15.38 21.29 14.56 20.28 14.56C20.16 14.56 19.54 14.56 18.44 14.56C18.44 12.93 18.44 12.02 18.44 11.84C18.44 10.33 19.66 9.07 21.17 9.06C22.7 9.04 23.94 10.28 23.94 11.81C23.94 12.11 23.94 14.56 23.94 14.86C23.94 15.37 24.35 15.78 24.86 15.78C24.98 15.78 25.96 15.78 26.08 15.78C26.59 15.78 27 15.37 27 14.86C27 14.56 27 12.11 27 11.81C27 8.6 24.38 5.99 21.18 6C17.97 6.02 15.39 8.66 15.39 11.87Z",id:"b90YTQhGbf",key:1})])}a.defaultProps={version:"1.1",width:"30",height:"30",viewBox:"5 3 25 23"},e.exports=a,a.default=a},aC71:function(e,t){e.exports=require("core-js/library/fn/promise")},azxR:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("hHgk"),a=n.n(r);function o(e,t,n){return t in e?a()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},bMj6:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("gDVU"),a=n("YKN3");function o(e,t){return!t||"object"!==Object(r.a)(t)&&"function"!=typeof t?Object(a.a)(e):t}},bVN1:function(e,t,n){e.exports=n("BGkK")},cDcd:function(e,t){e.exports=require("react")},cu1A:function(e,t){e.exports=require("regenerator-runtime")},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},faye:function(e,t){e.exports=require("react-dom")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},gDVU:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("t+lh"),a=n.n(r),o=n("XzKa"),c=n.n(o);function i(e){return(i="function"==typeof c.a&&"symbol"==typeof a.a?function(e){return typeof e}:function(e){return e&&"function"==typeof c.a&&e.constructor===c.a&&e!==c.a.prototype?"symbol":typeof e})(e)}function u(e){return(u="function"==typeof c.a&&"symbol"===i(a.a)?function(e){return i(e)}:function(e){return e&&"function"==typeof c.a&&e.constructor===c.a&&e!==c.a.prototype?"symbol":i(e)})(e)}},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hDBU:function(e,t,n){"use strict";var r=n("FkRQ"),a=n("SY1S"),o=n.n(a);var c=n("lFqb");function i(e,t){return Object(r.a)(e)||function(e,t){var n=[],r=!0,a=!1,c=void 0;try{for(var i,u=o()(e);!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw c}}return n}(e,t)||Object(c.a)()}n.d(t,"a",function(){return i})},hHgk:function(e,t,n){e.exports=n("TUA0")},hZod:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("jDdP"),a=n.n(r),o=n("OKNm"),c=n.n(o);function i(e){return(i=c.a?a.a:function(e){return e.__proto__||a()(e)})(e)}},iLCn:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n("z3IF"),a=n("2Fjn"),o=n("cDcd"),c=n.n(o),i=n("rQEi"),u=n.n(i),s=n("48dn"),l=n.n(s),d=n("E/TB");n("/Shq");function f(e){var t=e.className,n=void 0===t?"":t,o=e.offIcon,i=void 0===o?u.a:o,s=e.offProps,f=void 0===s?{}:s,p=e.onIcon,b=void 0===p?l.a:p,v=e.onProps,h=void 0===v?{}:v,m=e.onToggle,g=void 0===m?d.a:m,y=e.readOnly,j=void 0!==y&&y,O=e.value,L=void 0!==O&&O,E=Object(a.a)(e,["className","offIcon","offProps","onIcon","onProps","onToggle","readOnly","value"]),x=L?b:i;return c.a.createElement(x,Object(r.a)({className:"toggle ".concat(L?"on":"off"," ").concat(j?"readonly":""," ").concat(n),onClick:j?d.a:g},E,L?h:f))}},jDdP:function(e,t,n){e.exports=n("/+oN")},k1wZ:function(e,t){e.exports=require("core-js/library/fn/object/get-own-property-symbols")},lFqb:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(t,"a",function(){return r})},lTgw:function(e,t,n){"use strict";var r=n("cDcd"),a=n.n(r);t.a=a.a.createContext({campaign:{createdAt:null,createdBy:{},editors:[],lastUpdatedAt:null,lastUpdatedBy:{},navigation:[],owners:[],secret:!1,subdomain:"",theme:{background:"#fff",fontFamily:"Ubuntu",normalText:"#333",primary:"#42afe3",primaryText:"#fff"},title:"New Campaign",version:0},user:{anonymous:!0}})},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},pL2a:function(e,t,n){e.exports=n("SWa5")},"qJj/":function(e,t){e.exports=require("core-js/library/fn/object/keys")},r7XW:function(e,t){e.exports=require("core-js/library/fn/array/from")},rQEi:function(e,t,n){var r=n("cDcd");function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Not Marked as Favorite"),r.createElement("path",{d:"M23.712 30.976q-0.608 0-1.248-0.384l-6.816-3.872-6.88 3.872q-1.408 0.768-2.688-0.096-1.312-0.928-0.992-2.528l1.6-7.776q-0.32-0.288-1.248-1.12t-1.44-1.28l-3.168-2.88q-1.184-1.12-0.672-2.624t2.112-1.728l7.808-0.832 3.264-7.2q0.704-1.504 2.304-1.504 1.504 0 2.272 1.504l3.232 7.2 7.84 0.864q1.536 0.128 2.080 1.664t-0.672 2.656l-5.856 5.312 1.6 7.744q0.224 1.12-0.512 2.048t-1.92 0.96zM10.112 20q-0.032 0.128-0.224 1.152t-0.544 2.688-0.64 2.944l6.080-3.424q0.864-0.448 1.664 0l6.080 3.424-1.408-6.816q-0.192-0.928 0.512-1.568l5.152-4.736-6.944-0.736q-0.96-0.128-1.312-0.96l-2.88-6.368-2.88 6.368q-0.416 0.832-1.376 0.96l-6.912 0.736 5.152 4.736q0.672 0.608 0.48 1.6z",key:1})])}a.defaultProps={version:"1.1",width:"31",height:"32",viewBox:"0 0 31 32"},e.exports=a,a.default=a},s20r:function(e,t,n){e.exports=n("R2Q7")},s4hn:function(e,t,n){e.exports=n("k1wZ")},sILV:function(e,t){},"t+lh":function(e,t,n){e.exports=n("gHn/")},tEuJ:function(e,t,n){"use strict";var r=n("6Ndq"),a=n.n(r),o=n("OKNm"),c=n.n(o);function i(e,t){return(i=c.a||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=a()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}n.d(t,"a",function(){return u})},tvLF:function(e,t,n){e.exports=n("Z6Kq")},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},y4cp:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("cDcd"),a=n.n(r),o=n("DMmu"),c=n.n(o),i=n("E/TB");n("JSB+");function u(e){var t=e.buttons,n=void 0===t?null:t,r=e.children,o=void 0===r?[]:r,u=e.className,s=void 0===u?"":u,l=e.modal,d=void 0!==l&&l,f=e.onCancel,p=void 0===f?i.a:f,b=e.onKeyDown,v=void 0===b?i.a:b,h=e.onOk,m=void 0===h?i.a:h,g=e.showCancel,y=void 0===g||g,j=e.title,O=void 0===j?"Dialog":j;return a.a.createElement("div",{className:"dialog-wrapper ".concat(d?"modal":""),onKeyDown:v},a.a.createElement(c.a,{handle:".dialog > .title"},a.a.createElement("div",{className:"dialog ".concat(s)},a.a.createElement("div",{className:"title"},O),a.a.createElement("div",{className:"body"},o),a.a.createElement("div",{className:"buttons"},n||a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:"ok button safe",onClick:m},"Ok"),y&&a.a.createElement("button",{className:"cancel button link",onClick:p},"Cancel"))))))}},yLsn:function(e,t,n){e.exports=n("T22j")},z3IF:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("U8Yc"),a=n.n(r);function o(){return(o=a.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}}});