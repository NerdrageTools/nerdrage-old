(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{Vjs3:function(e,t,n){"use strict";n.r(t),n.d(t,"WysiwygEditor",(function(){return w}));var a=n("hisu"),r=n("yBJb"),c=n("0942"),o=n("CHlC"),i=n("kMo5"),l=n("P+uj"),u=n("mK0O");function s(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}function f(e,t,n){var a=t.get(e);if(!a)throw new TypeError("attempted to set private field on non-instance");if(a.set)a.set.call(e,n);else{if(!a.writable)throw new TypeError("attempted to set read only private field");a.value=n}return n}var b=n("oYCi"),p=n("mXGw"),d=n.n(p),j=n("yvh2"),h=n("E/TB");n("tbcE");function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var v=new WeakMap,y=new WeakMap,w=function(e){Object(o.a)(n,e);var t=O(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),v.set(Object(c.a)(e),{writable:!0,value:void 0}),y.set(Object(c.a)(e),{writable:!0,value:d.a.createRef()}),Object(u.a)(Object(c.a)(e),"componentDidMount",(function(){f(Object(c.a)(e),v,j.Jodit.make(s(Object(c.a)(e),y).current,n.config)),s(Object(c.a)(e),v).setEditorValue(e.props.value),s(Object(c.a)(e),v).events.on("change",e.handleChange)})),Object(u.a)(Object(c.a)(e),"componentDidUpdate",(function(){s(Object(c.a)(e),v).setEditorValue(e.props.value)})),Object(u.a)(Object(c.a)(e),"componentWillUnmount",(function(){s(Object(c.a)(e),v).destruct()})),Object(u.a)(Object(c.a)(e),"handleChange",(function(t){e.props.onChange(t)})),Object(u.a)(Object(c.a)(e),"render",(function(){return Object(b.jsx)("div",{className:"wysiwyg-editor",children:Object(b.jsx)("textarea",{ref:s(Object(c.a)(e),y)})})})),e}return Object(r.a)(n,null,[{key:"config",get:function(){return{allowResizeX:!1,allowResizeY:!1,autofocus:!0,beautifyHTML:!1,buttons:["paragraph,italic,strikethrough","brush,copyformat","align,outdent,indent,ul,ol,image,table","link,symbol,find"].join(",|,"),disablePlugins:["cleanhtml,font,fullsize,hr,imageprocessor,media,placeholder,resizer,resizehandler,size","source,sticky,xpath"].join(","),spellcheck:!1}}}]),n}(p.Component);Object(u.a)(w,"styles",n.e(0).then(n.t.bind(null,"2XQ/",7))),Object(u.a)(w,"defaultProps",{onChange:h.a,readOnly:!1,value:""})}}]);