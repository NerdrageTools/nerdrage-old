_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"/Shq":function(e,t,n){},"4YdT":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return B}));var r=n("6CzD"),a=n("NthX"),o=n.n(a),c=n("eijD"),i=n("hisu"),s=n("yBJb"),u=n("0942"),l=n("CHlC"),d=n("kMo5"),p=n("P+uj"),f=n("mK0O"),b=n("oYCi"),O=n("mXGw"),j=n("AVMw"),h=n("IXLv"),v=n("aNYv"),y=n("E/TB");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e){var t=e.bodyClasses,n=void 0===t?[]:t,r=e.className,a=void 0===r?"":r,o=e.css,c=void 0===o?"":o,i=e.onLoad,s=void 0===i?y.a:i,u=e.onReady,l=void 0===u?y.a:u,d=e.onUnload,p=void 0===d?y.a:d,j=e.queryString,h=void 0===j?{}:j,g=e.src,w=void 0===g?"":g,L=e.title,x=void 0===L?"IFrame":L,E=Object(O.useRef)(),C=Object(O.useMemo)((function(){return function(e){var t=e.document,r=e.window;!function(e){var t=e.bodyClasses,n=e.css,r=e.document;if(!r||!r.body||!r.head)return y.a;var a=r.body,o=t.filter(Boolean);o.forEach((function(e){return a.classList.add(e)}));var c=r.head,i=c.querySelector("style#injected");i||((i=r.createElement("style")).id="injected",c.appendChild(i)),i.innerHTML=n}({bodyClasses:n,css:c,document:t}),l({document:t,window:r})}}),[n,c,l]),P=Object(O.useEffect)((function e(){var t=E.current.contentDocument,n=E.current.contentWindow;return s({document:t,window:n}),"about:blank"===n.location.href?setTimeout(e,50):"loading"===t.readyState?t.addEventListener("DOMContentLoaded",(function(){C({document:t,window:n})})):C({document:t,window:n}),function(){return p({document:t,window:n})}}),[l,p]),S=Object(O.useMemo)((function(){var e=Object.entries(h).filter((function(e){return void 0!==Object(v.a)(e,2)[1]})).reduce((function(e,t){var n=Object(v.a)(t,2),r=n[0],a=n[1];return m(m({},e),{},Object(f.a)({},r,a))}),{}),t=new URLSearchParams(e).toString();return w.match(/[?]/)?"".concat(w,"&").concat(t):"".concat(w,"?").concat(t)}),[w,h]);return Object(b.jsx)("iframe",m({onLoad:P,ref:E,src:S},{className:a,title:x}))}var L=n("iLCn"),x=n("qhEq"),E=n("EAP2"),C=n("ZS9i"),P=n.n(C),S=n("PZST"),T=n.n(S),k=n("CjJp"),N=n("VTEe"),D=n("TTmL");n("KqK1");function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var A=["_id","checksum","data","isOwner","isEditable","secret","slug","svg","title"],B=function(e){Object(l.a)(n,e);var t=R(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s)),Object(f.a)(Object(u.a)(e),"state",K(K({},Object(N.a)(e.props,A)),{},{generating:!1})),Object(f.a)(Object(u.a)(e),"handleDelete",Object(c.a)(o.a.mark((function t(){var n,r,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.context.router,r=e.props.slug,t.next=4,Object(k.a)("Are you sure you want to permanently delete this map?");case 4:if(t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,fetch("/api/map/".concat(r),{method:"DELETE"});case 8:return t.next=10,fetch("/api/map/".concat(r));case 10:return a=t.sent,t.t0=K,t.t1=K,t.t2={},t.t3=N.a,t.next=17,a.json();case 17:t.t4=t.sent,t.t5=A,t.t6=(0,t.t3)(t.t4,t.t5),t.t7=(0,t.t1)(t.t2,t.t6),t.t8={},t.t9={_id:null,data:null,title:n.query.title||""},c=(0,t.t0)(t.t7,t.t8,t.t9),e.context.updateUser(),e.setState(K(K({},c),{},{generating:!1}));case 26:case"end":return t.stop()}}),t)})))),Object(f.a)(Object(u.a)(e),"handleGenerate",(function(){return e.setState({generating:!0})})),Object(f.a)(Object(u.a)(e),"handleOnReady",function(){var t=Object(c.a)(o.a.mark((function t(n){var r,a,c,i,s,u,l,d;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.window,e.iframeWindow=r,a=e.state,c=a._id,i=a.checksum,s=a.data,u=a.generating,l=e.props.slug,!s){t.next=8;break}r.displayJsonData(s),t.next=18;break;case 8:if(!c){t.next=17;break}return e.setState({loading:!0}),t.next=12,fetch("/api/map/".concat(l,"/").concat(i),{credentials:"include"}).then((function(e){return e.json()})).catch((function(){return null}));case 12:(d=t.sent)&&d.data&&r.displayJsonData(d.data),e.setState({loading:!1}),t.next=18;break;case 17:u&&r.regenerateMap((function(){return e.setState({data:r.packageJsonData()})}));case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(f.a)(Object(u.a)(e),"handleSave",Object(c.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({saving:!0}),n=e.iframeWindow.packageJsonData(),t.next=4,fetch("/api/map/".concat(e.props.slug),{body:JSON.stringify(K(K({},Object(N.a)(e.state,A)),{},{data:n})),headers:{"Content-Type":"application/json"},method:"POST"}).then((function(e){return e.json()}));case 4:r=t.sent,e.setState(K(K({},r),{},{saving:!1}));case 6:case"end":return t.stop()}}),t)})))),Object(f.a)(Object(u.a)(e),"handleTitleChange",(function(t){return e.setState({title:t})})),Object(f.a)(Object(u.a)(e),"handleToggleNavigation",Object(c.a)(o.a.mark((function t(){var n,r,a,c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.props,r=n.slug,a=n.title,c=e.context.campaign){t.next=4;break}return t.abrupt("return");case 4:i=c.navigation||[],e.isNavLink?i=i.filter((function(e){return e.slug!==r})):i.push({slug:r,title:a}),e.context.updateCampaign({navigation:i});case 7:case"end":return t.stop()}}),t)})))),Object(f.a)(Object(u.a)(e),"handleToggleSecret",Object(c.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.handleUpdate({secret:!e.state.secret});case 1:case"end":return t.stop()}}),t)})))),Object(f.a)(Object(u.a)(e),"handleUpdate",function(){var t=Object(c.a)(o.a.mark((function t(n){var a,c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object.keys(n),t.next=3,fetch("/api/map/".concat(e.props.slug),{body:JSON.stringify(n),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return c=t.sent,t.t0=N.a,t.t1=void 0,t.next=8,c.json();case 8:t.t2=t.sent,t.t3=[t.t2].concat(Object(r.a)(a)),i=t.t0.apply.call(t.t0,t.t1,t.t3),200===c.status&&e.setState(i);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(f.a)(Object(u.a)(e),"render",(function(){var t,n=e.context.campaign,r=e.props.slug,a=e.state,o=a._id,c=a.data,i=a.loading,s=a.generating,u=a.isEditable,l=a.isOwner,d=a.saving,p=a.secret,f=a.title;return t=o||u&&s?Object(b.jsx)(w,{bodyClasses:[u?"editable":"readOnly"],className:"map-frame",css:"\n\t\t\t\t\t\t.readOnly #viewbox, .readOnly #scaleBar {\n\t\t\t\t\t\t\tpointer-events: none;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.readOnly #optionsTab, .readOnly #toolsTab, .readOnly #regenerate {\n\t\t\t\t\t\t\tdisplay: none!important;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#loading, #initial { display: none; }\n\t\t\t\t\t",onReady:e.handleOnReady,src:"/static/fantasy-map-generator",queryString:{doNotGenerate:!0},title:"map"}):u?Object(b.jsx)(j.a,{className:"center",children:u&&Object(b.jsxs)(b.Fragment,{children:["This map doesn't exist. Would you like to ",Object(b.jsx)("button",{className:"safe",onClick:e.handleGenerate,children:"Generate It?"})]})}):Object(b.jsx)(j.a,{className:"center",children:"This map either doesn't exist, or you don't have permission to view it."}),Object(b.jsxs)("div",{className:"map page ".concat(i?"loading":""),children:[!c&&s&&Object(b.jsx)("div",{className:"generating",children:"Generating map..."}),Object(b.jsxs)("div",{className:"title-bar",children:[Object(b.jsx)(h.a,{className:"title ".concat(f.trim()?"":"default"),onChange:e.handleTitleChange,placeholder:r,readOnly:!u,value:f}),o&&l&&Object(b.jsx)(L.a,{className:"secret",value:p,offIcon:P.a,onIcon:T.a,onToggle:e.handleToggleSecret}),o&&n.isEditor&&Object(b.jsx)(L.a,{className:"in-navigation",value:e.isNavLink,offIcon:E.a,offProps:{title:"Not Added to Site Navigation"},onIcon:E.a,onProps:{title:"Added to Site Navigation"},onToggle:e.handleToggleNavigation}),(c||s)&&u&&Object(b.jsx)("button",{className:"safe",onClick:e.handleSave,disabled:d,children:"Save"}),o&&u&&Object(b.jsx)("button",{className:"danger",onClick:e.handleDelete,children:"Delete"})]}),t]})})),e}return Object(s.a)(n,null,[{key:"getDerivedStateFromProps",value:function(e,t){if(e.slug!==t.slug){var n=Object(N.a)(e,A),r=(e||new URLSearchParams(window.location.search).get("title")||"").title;return K(K({},n),{},{title:r})}return t}}]),n}(O.Component);Object(f.a)(B,"contextType",x.a),Object(f.a)(B,"getInitialProps",function(){var e=Object(c.a)(o.a.mark((function e(t){var n,r,a,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=t.req,a=Object(N.a)(r&&r.headers,"cookie"),e.next=4,fetch(Object(D.a)(r,"/api/map/".concat(n.slug)),{headers:a});case 4:return c=e.sent,e.next=7,c.json();case 7:return i=e.sent,e.abrupt("return",K({httpStatusCode:c.status},i));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},"6CzD":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("YZeP");var a=n("tdEy"),o=n("TJjZ");function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(a.a)(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},AVMw:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("oYCi");n("mXGw"),n("sILV");function a(e){var t=e.className,n=void 0===t?"":t,a=e.children,o=void 0===a?[]:a,c=e.type,i=void 0===c?"info":c;return Object(r.jsx)("div",{className:"alert ".concat(i," ").concat(n),children:o})}},CjJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("NthX"),a=n.n(r),o=n("eijD"),c=n("oYCi"),i=(n("mXGw"),n("xARA")),s=n.n(i),u=n("y4cp");function l(){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(a.a.mark((function e(){var t,n,r,o=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",n=o.length>1&&void 0!==o[1]?o[1]:"Prompt",r=document.createElement("div"),document.body.appendChild(r),e.abrupt("return",new Promise((function(e){var a=function(){return e(!1)},o=function(){return e(!0)};s.a.render(Object(c.jsx)(u.a,{buttons:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:o,children:"Yes"}),Object(c.jsx)("button",{onClick:a,children:"No"})]}),modal:!0,okButtonText:"Yes",onCancel:a,onOk:o,title:n,children:Object(c.jsx)("div",{className:"text",children:t})}),r)})).finally((function(){document.body.removeChild(r)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},Cpn1:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},EAP2:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("mK0O"),a=n("dV/x"),o=n("oYCi"),c=(n("mXGw"),n("E/TB"));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var t=e.title,n=void 0===t?"Navigation":t,r=e.wrapperRef,i=void 0===r?c.a:r,u=Object(a.a)(e,["title","wrapperRef"]);return Object(o.jsxs)("svg",s(s({version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:i},u),{},{children:[Object(o.jsx)("title",{children:n}),Object(o.jsx)("path",{d:"M32 22.272v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.704 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424h-9.12v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.736 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424h-9.12v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.736 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424q0-0.928 0.672-1.632t1.632-0.672h9.12v-3.424h-1.696q-0.736 0-1.216-0.512t-0.512-1.184v-5.728q0-0.704 0.512-1.216t1.216-0.512h5.696q0.736 0 1.216 0.512t0.512 1.216v5.728q0 0.704-0.512 1.184t-1.216 0.512h-1.696v3.424h9.12q0.928 0 1.632 0.672t0.672 1.632v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216z"})]}))}},IXLv:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("hisu"),a=n("yBJb"),o=n("0942"),c=n("CHlC"),i=n("kMo5"),s=n("P+uj"),u=n("mK0O"),l=n("oYCi"),d=n("mXGw");function p(e,t){var n=t.min,r=t.max;return void 0!==n&&e<n?n:void 0!==r&&e>r?r:e}var f=n("E/TB");n("VVQE");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var h=["text","multiline","boolean","number","slider"],v=function(e){Object(c.a)(n,e);var t=j(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),Object(u.a)(Object(o.a)(e),"state",{editing:!1,resetValue:e.props.value}),Object(u.a)(Object(o.a)(e),"getEditorType",(function(){var t=e.props.value,n=e.props.type;return void 0!==n&&h.includes(n)?n:"string"===(n=typeof t)?t.includes("\n")?"multiline":"text":["boolean","number"].includes(n)?n:"text"})),Object(u.a)(Object(o.a)(e),"resetChanges",(function(){e.props.onChange(e.state.resetValue,e.props.value),e.handleToggleEditing()})),Object(u.a)(Object(o.a)(e),"createRefWithAutoFocus",(function(t){t&&(e.editor=t,"boolean"!==e.getEditorType()&&"function"===typeof t.focus&&t.focus(),["boolean","number"].includes(e.getEditorType())||e.props.forceEditMode&&"function"===typeof t.setSelectionRange&&t.setSelectionRange(t.value.length,t.value.length))})),Object(u.a)(Object(o.a)(e),"handleChange",(function(t){var n=t.target,r=e.props,a=r.min,o=r.max,c=n.value;switch(e.getEditorType()){case"slider":case"number":c=parseFloat(c||0),Number.isNaN(c)&&(c=e.props.value),c=p(c,{max:o,min:a})}e.props.onChange(c,e.state.resetValue)})),Object(u.a)(Object(o.a)(e),"handleKeys",(function(t){var n=t.target,r=t.key,a=t.ctrlKey,o=t.metaKey;e.props.onKeyDown!==f.a&&(e.props.onKeyDown(t),t.isDefaultPrevented())||("Escape"===r&&e.resetChanges(),"Enter"===r&&("TEXTAREA"!==n.nodeName||a||o)&&e.handleToggleEditing())})),Object(u.a)(Object(o.a)(e),"handleReceivingFocus",(function(){e.props.readOnly||e.state.editing||e.handleToggleEditing()})),Object(u.a)(Object(o.a)(e),"handleToggleEditing",(function(){if(!e.props.readOnly){var t=!e.editing;e.setState({editing:t,resetValue:e.props.value},(function(){e.state.editing?e.props.onEditStart():e.props.onEditEnd()}))}})),Object(u.a)(Object(o.a)(e),"selectOnFocus",(function(e){return e.target.select()})),Object(u.a)(Object(o.a)(e),"toggleBoolean",(function(){e.props.onEditStart(),e.props.onChange(!e.props.value,e.props.value),e.props.onEditEnd()})),Object(u.a)(Object(o.a)(e),"renderBoolean",(function(){return Object(l.jsx)("input",{type:"checkbox",checked:Boolean(e.props.value),disabled:e.props.readOnly,onChange:e.toggleBoolean,ref:e.createRefWithAutoFocus})})),Object(u.a)(Object(o.a)(e),"renderMultiline",(function(){if(!e.editing){var t=(e.props.value||e.props.placeholder).split("\n").map((function(e,t){return Object(l.jsx)("p",{children:e},t)})),n=["multiline",e.props.value?"":"placeholder"].join(" ").trim();return Object(l.jsx)("div",{className:n,onClick:e.handleToggleEditing,children:t})}return Object(l.jsx)("textarea",{disabled:e.props.readOnly,onBlur:e.handleToggleEditing,onChange:e.handleChange,onFocus:e.selectOnFocus,onKeyDown:e.handleKeys,onKeyPress:e.props.onKeyPress,onKeyUp:e.props.onKeyUp,placeholder:e.props.placeholder,ref:e.createRefWithAutoFocus,rows:e.props.value.split("\n").length,value:e.props.value})})),Object(u.a)(Object(o.a)(e),"renderNumber",(function(){return e.editing?Object(l.jsx)("input",{type:"number",disabled:e.props.readOnly,max:e.props.max,min:e.props.min,onBlur:e.handleToggleEditing,onChange:e.handleChange,onFocus:e.selectOnFocus,onKeyDown:e.handleKeys,onKeyPress:e.props.onKeyPress,onKeyUp:e.props.onKeyUp,placeholder:e.props.placeholder,ref:e.createRefWithAutoFocus,step:e.props.step,value:e.props.value}):e.renderStatic()})),Object(u.a)(Object(o.a)(e),"renderSlider",(function(){return Object(l.jsx)("input",{type:"range",disabled:e.props.readOnly,max:e.props.max,min:e.props.min,onBlur:e.handleToggleEditing,onChange:e.handleChange,onKeyDown:e.props.onKeyDown,onKeyPress:e.props.onKeyPress,onKeyUp:e.props.onKeyUp,ref:e.createRefWithAutoFocus,step:e.props.step,value:e.props.value})})),Object(u.a)(Object(o.a)(e),"renderText",(function(){return e.editing?Object(l.jsx)("input",{type:"text",disabled:e.props.readOnly,onBlur:e.handleToggleEditing,onChange:e.handleChange,onFocus:e.selectOnFocus,onKeyDown:e.handleKeys,onKeyPress:e.props.onKeyPress,onKeyUp:e.props.onKeyUp,placeholder:e.props.placeholder,ref:e.createRefWithAutoFocus,value:e.props.value}):e.renderStatic()})),Object(u.a)(Object(o.a)(e),"renderStatic",(function(){var t=e.props,n=t.placeholder,r=t.readOnlyValue,a=t.requireDoubleClick,o=t.value,c=n&&!o,i=void 0!==r?r:o,s=c?"placeholder":"",u={};return a||(u.onClick=e.handleToggleEditing),Object(l.jsx)("span",O(O({className:s},u),{},{children:c?n:i}))})),Object(u.a)(Object(o.a)(e),"renderEditor",(function(){switch(e.getEditorType()){case"boolean":return e.renderBoolean();case"slider":return e.renderSlider();case"multiline":return e.renderMultiline();case"number":return e.renderNumber();default:return e.renderText()}})),Object(u.a)(Object(o.a)(e),"render",(function(){var t=e.props,n=t.className,r=t.readOnly,a=t.requireDoubleClick,o=["editable",e.editing?"editing":"",n||"",r?"readonly":""].filter(Boolean),c={};return r||e.editing||(a?c.onDoubleClick=e.handleToggleEditing:(c.tabIndex="0",c.onFocus=e.handleReceivingFocus)),Object(l.jsx)("div",O(O({className:o.join(" ")},c),{},{children:e.renderEditor()}))})),e}return Object(a.a)(n,[{key:"editing",get:function(){return this.props.forceEditMode||this.state.editing}}]),n}(d.Component);Object(u.a)(v,"displayName","Editable"),Object(u.a)(v,"defaultProps",{className:"",forceEditMode:!1,max:void 0,min:void 0,onChange:f.a,onEditEnd:f.a,onEditStart:f.a,onKeyDown:f.a,onKeyPress:f.a,onKeyUp:f.a,placeholder:"",readOnly:!1,readOnlyValue:void 0,requireDoubleClick:!1,step:1,type:void 0,value:""})},IoK0:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return r}))},PZST:function(e,t,n){var r=n("mXGw");function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Secret"),r.createElement("path",{d:"M17.03 5.16L17.75 5.36L18.44 5.64L19.09 5.97L19.7 6.38L20.27 6.84L20.79 7.35L21.25 7.92L21.65 8.53L21.99 9.19L22.26 9.88L22.46 10.6L22.58 11.35L22.63 12.13L22.63 15.5L23.75 15.5L24 15.51L24.23 15.55L24.46 15.61L24.68 15.7L24.89 15.81L25.08 15.93L25.26 16.08L25.42 16.24L25.57 16.42L25.69 16.61L25.8 16.82L25.89 17.04L25.95 17.27L25.99 17.5L26 17.75L26 26.75L25.99 27L25.95 27.23L25.89 27.46L25.8 27.68L25.69 27.89L25.57 28.08L25.42 28.26L25.26 28.42L25.08 28.57L24.89 28.69L24.68 28.8L24.46 28.89L24.23 28.95L24 28.99L23.75 29L7.25 29L7 28.99L6.77 28.95L6.54 28.89L6.32 28.8L6.11 28.69L5.92 28.57L5.74 28.42L5.58 28.26L5.43 28.08L5.31 27.89L5.2 27.68L5.11 27.46L5.05 27.23L5.01 27L5 26.75L5 17.75L5.01 17.5L5.05 17.27L5.11 17.04L5.2 16.82L5.31 16.61L5.43 16.42L5.58 16.24L5.74 16.08L5.92 15.93L6.11 15.81L6.32 15.7L6.54 15.61L6.77 15.55L7 15.51L7.25 15.5L8.38 15.5L8.38 12.13L8.42 11.35L8.54 10.6L8.74 9.88L9.01 9.19L9.35 8.53L9.75 7.92L10.21 7.35L10.73 6.84L11.3 6.38L11.91 5.97L12.56 5.64L13.25 5.36L13.97 5.16L14.72 5.04L15.5 5L16.28 5.04L17.03 5.16ZM13.11 9.74L12.39 10.81L12.13 12.13L12.13 15.5L18.88 15.5L18.88 12.13L18.61 10.81L17.89 9.74L16.81 9.02L15.5 8.75L14.19 9.02L13.11 9.74Z",id:"b7agiUAQvt",key:1})])}a.defaultProps={version:"1.1",width:"26.25",height:"30",viewBox:"4 4 25 28"},e.exports=a,a.default=a},TJjZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("YZeP");function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},TTmL:function(e,t,n){"use strict";function r(e,t){var n=e?"".concat(e.protocol,"://").concat(e.get("Host")):"";return"".concat(n).concat(t)}n.d(t,"a",(function(){return r}))},TXsb:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/map",function(){return n("4YdT")}])},VVQE:function(e,t,n){},YZeP:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},ZS9i:function(e,t,n){var r=n("mXGw");function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Public"),r.createElement("path",{d:"M15.39 11.87C15.39 12.05 15.39 12.94 15.39 14.56C10.26 14.56 7.4 14.56 6.83 14.56C5.82 14.56 5 15.38 5 16.39C5 17.12 5 22.99 5 23.72C5 24.73 5.82 25.55 6.83 25.55C8.18 25.55 18.93 25.55 20.28 25.55C21.29 25.55 22.11 24.73 22.11 23.72C22.11 22.99 22.11 17.12 22.11 16.39C22.11 15.38 21.29 14.56 20.28 14.56C20.16 14.56 19.54 14.56 18.44 14.56C18.44 12.93 18.44 12.02 18.44 11.84C18.44 10.33 19.66 9.07 21.17 9.06C22.7 9.04 23.94 10.28 23.94 11.81C23.94 12.11 23.94 14.56 23.94 14.86C23.94 15.37 24.35 15.78 24.86 15.78C24.98 15.78 25.96 15.78 26.08 15.78C26.59 15.78 27 15.37 27 14.86C27 14.56 27 12.11 27 11.81C27 8.6 24.38 5.99 21.18 6C17.97 6.02 15.39 8.66 15.39 11.87Z",id:"b90YTQhGbf",key:1})])}a.defaultProps={version:"1.1",width:"30",height:"30",viewBox:"5 3 25 23"},e.exports=a,a.default=a},aNYv:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("Cpn1");var a=n("TJjZ"),o=n("IoK0");function c(e,t){return Object(r.a)(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(e,t)||Object(a.a)(e,t)||Object(o.a)()}},iLCn:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("mK0O"),a=n("dV/x"),o=n("oYCi"),c=(n("mXGw"),n("rQEi")),i=n.n(c),s=n("48dn"),u=n.n(s),l=n("E/TB");n("/Shq");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){var t=e.className,n=void 0===t?"":t,r=e.offIcon,c=void 0===r?i.a:r,s=e.offProps,d=void 0===s?{}:s,f=e.onIcon,b=void 0===f?u.a:f,O=e.onProps,j=void 0===O?{}:O,h=e.onToggle,v=void 0===h?l.a:h,y=e.readOnly,g=void 0!==y&&y,m=e.value,w=void 0!==m&&m,L=Object(a.a)(e,["className","offIcon","offProps","onIcon","onProps","onToggle","readOnly","value"]),x=w?b:c;return Object(o.jsx)(x,p(p({className:"toggle ".concat(w?"on":"off"," ").concat(g?"readonly":""," ").concat(n),onClick:g?l.a:v},L),w?j:d))}},rQEi:function(e,t,n){var r=n("mXGw");function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Not Marked as Favorite"),r.createElement("path",{d:"M23.712 30.976q-0.608 0-1.248-0.384l-6.816-3.872-6.88 3.872q-1.408 0.768-2.688-0.096-1.312-0.928-0.992-2.528l1.6-7.776q-0.32-0.288-1.248-1.12t-1.44-1.28l-3.168-2.88q-1.184-1.12-0.672-2.624t2.112-1.728l7.808-0.832 3.264-7.2q0.704-1.504 2.304-1.504 1.504 0 2.272 1.504l3.232 7.2 7.84 0.864q1.536 0.128 2.080 1.664t-0.672 2.656l-5.856 5.312 1.6 7.744q0.224 1.12-0.512 2.048t-1.92 0.96zM10.112 20q-0.032 0.128-0.224 1.152t-0.544 2.688-0.64 2.944l6.080-3.424q0.864-0.448 1.664 0l6.080 3.424-1.408-6.816q-0.192-0.928 0.512-1.568l5.152-4.736-6.944-0.736q-0.96-0.128-1.312-0.96l-2.88-6.368-2.88 6.368q-0.416 0.832-1.376 0.96l-6.912 0.736 5.152 4.736q0.672 0.608 0.48 1.6z",key:1})])}a.defaultProps={version:"1.1",width:"31",height:"32",viewBox:"0 0 31 32"},e.exports=a,a.default=a},tdEy:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n.d(t,"a",(function(){return r}))}},[["TXsb",1,2,3,5,0]]]);