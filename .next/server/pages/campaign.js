module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/3ze":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("bBV7");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "/Shq":
/***/ (function(module, exports) {



/***/ }),

/***/ "1GNI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("GAo+");


/***/ }),

/***/ "48dn":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function FavoriteOn (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"Marked as Favorite"),React.createElement("path",{"d":"M9.504 11.264q2.208-4.864 3.648-8.064 0.192-0.48 0.768-0.48t0.736 0.48l3.648 8.064q5.248 0.576 8.768 0.96 0.48 0.096 0.672 0.576t-0.192 0.864l-6.528 5.984q1.056 5.152 1.76 8.64 0.096 0.48-0.32 0.8t-0.864 0.064l-7.68-4.352q-4.608 2.592-7.68 4.352-0.48 0.288-0.896-0.064t-0.352-0.8l1.792-8.64q-3.904-3.584-6.528-5.984-0.384-0.352-0.192-0.832t0.672-0.608z","key":1})]);
}

FavoriteOn.defaultProps = {"version":"1.1","width":"28","height":"32","viewBox":"0 0 28 32"};

module.exports = FavoriteOn;

FavoriteOn.default = FavoriteOn;


/***/ }),

/***/ "4F+t":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "4jX/":
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),

/***/ "5dyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9CGT")


/***/ }),

/***/ "5sdy":
/***/ (function(module, exports) {



/***/ }),

/***/ "63Ad":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "8qGm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });
function debounce(func, wait, immediate) {
  let timeout;
  return (...args) => {
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(this, args);
  };
}

/***/ }),

/***/ "98Mn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5dyF");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qhEq");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Link = (_ref) => {
  let {
    children,
    className = '',
    query = null,
    slug = '',
    to,
    type = 'article'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "query", "slug", "to", "type"]);

  const context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_Application__WEBPACK_IMPORTED_MODULE_3__[/* Application */ "a"]);
  const subdomain = props.subdomain || context.subdomain;
  const contents = children || type;
  const active = context.router.asPath === `/${type}/${slug}`;

  if (!slug && props.href) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
      className: "external",
      href: props.href,
      target: "_new",
      children: children
    });
  }

  const queryString = !query ? '' : `${Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&')}`;

  if (active) {
    const title = typeof contents === 'string' ? contents : undefined;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
      className: "active link",
      title: title,
      children: contents
    });
  }

  if (subdomain && (!context.campaign || subdomain !== context.campaign.subdomain)) {
    let href = `//${subdomain}.${context.rootUrl}/${type}`;
    if (type !== 'campaign') href += `/${slug}`;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, props), {}, {
      href,
      subdomain
    })), {}, {
      children: contents
    }));
  }

  let as = `/${type}`;
  let href = `/${type}`;

  if (to) {
    as = to;
    href = to;
  } else if (type !== 'campaign') {
    if (slug) {
      as += `/${slug}`;
      href += `?slug=${slug}`;
    }

    if (queryString) {
      as += `?${queryString}`;
      href += `&${queryString}`;
    }
  } else if (queryString) {
    as += `?${queryString}`;
    href += `?${queryString}`;
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, _objectSpread(_objectSpread({}, {
    as,
    href
  }), {}, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, props), {}, {
      className,
      href: as
    })), {}, {
      children: contents
    }))
  }));
};

/***/ }),

/***/ "9CGT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("vdEC");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("a4i1");

var _router2 = __webpack_require__("bBV7");

var _useIntersection = __webpack_require__("hY8M");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "BCwt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "Bron":
/***/ (function(module, exports) {



/***/ }),

/***/ "BukW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "E/TB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noop; });
const noop = () => {};

/***/ }),

/***/ "Eo3F":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Remove (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"remove"),React.createElement("path",{"d":"M23.168 23.616q0 0.704-0.48 1.216l-2.432 2.432q-0.512 0.48-1.216 0.48t-1.216-0.48l-5.248-5.28-5.248 5.28q-0.512 0.48-1.216 0.48t-1.216-0.48l-2.432-2.432q-0.512-0.512-0.512-1.216t0.512-1.216l5.248-5.248-5.248-5.248q-0.512-0.512-0.512-1.216t0.512-1.216l2.432-2.432q0.512-0.512 1.216-0.512t1.216 0.512l5.248 5.248 5.248-5.248q0.512-0.512 1.216-0.512t1.216 0.512l2.432 2.432q0.48 0.48 0.48 1.216t-0.48 1.216l-5.248 5.248 5.248 5.248q0.48 0.48 0.48 1.216z","key":1})]);
}

Remove.defaultProps = {"version":"1.1","width":"25","height":"32","viewBox":"0 0 25 32"};

module.exports = Remove;

Remove.default = Remove;


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GAo+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ campaign_CampaignPage; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// EXTERNAL MODULE: ./components/Editable/Editable.js + 1 modules
var Editable = __webpack_require__("IXLv");

// EXTERNAL MODULE: ./components/Link/Link.tsx
var Link = __webpack_require__("98Mn");

// EXTERNAL MODULE: ./utilities/noop.js
var noop = __webpack_require__("E/TB");

// EXTERNAL MODULE: ./components/EditableList/EditableList.scss
var EditableList_EditableList = __webpack_require__("5sdy");

// CONCATENATED MODULE: ./components/EditableList/EditableList.js


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class EditableList_EditableList_EditableList extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selected: this.props.defaultValue
    });

    _defineProperty(this, "handleChange", ({
      target
    }) => {
      this.props.onChange(target.value);
    });

    _defineProperty(this, "render", () => {
      const {
        className,
        options
      } = this.props;
      const {
        selected
      } = this.state;
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("select", {
        className: `editable-list ${className}`,
        defaultValue: selected,
        onChange: this.handleChange,
        children: options.map(option => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: option,
          children: option
        }, option))
      });
    });
  }

}

_defineProperty(EditableList_EditableList_EditableList, "defaultProps", {
  className: '',
  defaultValue: '',
  onChange: noop["a" /* noop */],
  options: []
});
// EXTERNAL MODULE: ./components/SearchBox/SearchBox.js + 1 modules
var SearchBox = __webpack_require__("L87S");

// EXTERNAL MODULE: ./icons/nerd.svg
var nerd = __webpack_require__("kWkU");
var nerd_default = /*#__PURE__*/__webpack_require__.n(nerd);

// EXTERNAL MODULE: ./components/SearchBox/UserSearchBox.scss
var UserSearchBox = __webpack_require__("q2at");

// CONCATENATED MODULE: ./components/SearchBox/UserSearchBox.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { UserSearchBox_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function UserSearchBox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const renderOption = (user, index, itemProps) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", _objectSpread(_objectSpread({
  className: "search-result"
}, itemProps), {}, {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(nerd_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
    className: "name",
    children: user.name
  }), " | ", user.username]
}), user._id);

const UserSearchBox_UserSearchBox = ({
  onSelect = noop["a" /* noop */]
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchBox["a" /* default */], {
  className: "user",
  limit: 5,
  onSelect: onSelect,
  placeholder: "Search Users...",
  renderOption: renderOption,
  url: "/api/search/users/:searchTerm"
});

UserSearchBox_UserSearchBox.displayName = 'UserSearchBox';
/* harmony default export */ var SearchBox_UserSearchBox = (UserSearchBox_UserSearchBox);
// EXTERNAL MODULE: ./icons/remove.svg
var remove = __webpack_require__("Eo3F");
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);

// CONCATENATED MODULE: ./utilities/compareBy.js
/* harmony default export */ var compareBy = ((prop, reversed = false) => (objectA, objectB) => {
  const a = String(objectA instanceof Map ? objectA.get(prop) : objectA[prop]);
  const b = String(objectB instanceof Map ? objectB.get(prop) : objectB[prop]);
  if (reversed) return b.localeCompare(a);
  return a.localeCompare(b);
});
// EXTERNAL MODULE: ./utilities/pluck.js + 1 modules
var pluck = __webpack_require__("VTEe");

// EXTERNAL MODULE: ./components/Participants/Participants.scss
var Participants_Participants = __webpack_require__("LIm+");

// CONCATENATED MODULE: ./components/Participants/Participants.js




function Participants_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Participants_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Participants_ownKeys(Object(source), true).forEach(function (key) { Participants_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Participants_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Participants_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const ORDER = {
  editor: 2,
  owner: 1,
  player: 3,
  removed: 4
};

const addParticipants = (map, users, addition) => {
  users.forEach(user => {
    map.set(user._id, Participants_objectSpread(Participants_objectSpread(Participants_objectSpread({}, map.get(user._id) || user), user), addition));
  });
};

class Participants_Participants_Participants extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Participants_defineProperty(this, "state", {
      edits: [],
      participants: []
    });

    Participants_defineProperty(this, "handleSetEdit", (user, edit = {}) => {
      if (!user) return;
      const {
        current,
        edits
      } = this.state;
      const exists = current.find(p => p._id === user._id);
      const currentEdit = edits.find(e => e._id === user._id) || {};
      const updated = edits.filter(e => e._id !== user._id);

      if (edit.type === 'added' && !exists) {
        updated.push(Participants_objectSpread(Participants_objectSpread(Participants_objectSpread({}, user), edit), Object(pluck["a" /* pluck */])(currentEdit, 'level', 'order')));
      }

      if (edit.type === 'removed' && exists && currentEdit.type !== 'removed') {
        updated.push(Participants_objectSpread(Participants_objectSpread(Participants_objectSpread({}, user), edit), Object(pluck["a" /* pluck */])(currentEdit, 'level', 'order')));
      }

      if (edit.type === 'updated') {
        updated.push(Participants_objectSpread(Participants_objectSpread({}, user), edit));
      }

      this.setState({
        edits: updated
      });
    });

    Participants_defineProperty(this, "handleAddUser", user => {
      if (!user) return;
      this.handleSetEdit(user, {
        level: 'player',
        order: ORDER.player,
        type: 'added'
      });
    });

    Participants_defineProperty(this, "handleSetPermission", (user, level) => {
      if (!user) return;
      this.handleSetEdit(user, {
        level,
        order: ORDER[level],
        type: 'updated'
      });
    });

    Participants_defineProperty(this, "handleToggleRemoved", user => {
      if (!user) return;
      this.handleSetEdit(user, {
        level: 'removed',
        order: ORDER.removed,
        type: 'removed'
      });
    });

    Participants_defineProperty(this, "handleSave", () => {
      const {
        participants
      } = this.state;
      this.props.onSave({
        editors: participants.filter(p => p.level === 'editor'),
        owners: participants.filter(p => p.level === 'owner'),
        players: participants.filter(p => p.level === 'player')
      });
      this.setState({
        edits: []
      });
    });

    Participants_defineProperty(this, "render", () => {
      const {
        className,
        readOnly,
        saving,
        title
      } = this.props;
      const {
        participants
      } = this.state;
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `participants ${className} ${saving ? 'loading' : ''}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "title",
          children: title
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_custom_scrollbars_["Scrollbars"], {
          className: "contents scrollbars",
          universal: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
            className: "participant-list",
            children: participants.map(user => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
              className: `participant row ${user.type || ''}`,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(nerd_default.a, {
                className: "nerd icon"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Link["a" /* Link */], {
                className: "display",
                type: "user",
                slug: user.username,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: "name",
                  title: user.name,
                  children: user.name
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                  className: "username",
                  title: user.username,
                  children: ["(", user.username, ")"]
                })]
              }), !readOnly && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(EditableList_EditableList_EditableList, {
                  className: "role",
                  defaultValue: user.level,
                  onChange: level => this.handleSetPermission(user, level),
                  options: ['owner', 'editor', 'player']
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(remove_default.a, {
                  className: "remove icon",
                  onClick: () => this.handleToggleRemoved(user)
                })]
              })]
            }, user._id))
          })
        }), !readOnly && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchBox_UserSearchBox, {
            className: "add-user",
            onSelect: this.handleAddUser
          }), this.state.edits.length !== 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: "save safe",
            onClick: this.handleSave,
            children: "Save"
          })]
        })]
      });
    });
  }

  static getDerivedStateFromProps(props, state) {
    const {
      editors,
      owners,
      players
    } = props;
    const {
      edits
    } = state;
    const map = new Map();
    addParticipants(map, players, {
      level: 'player',
      order: ORDER.player
    });
    addParticipants(map, editors, {
      level: 'editor',
      order: ORDER.editor
    });
    addParticipants(map, owners, {
      level: 'owner',
      order: ORDER.owner
    });
    const current = Array.from(map.values()).sort(compareBy('order'));
    addParticipants(map, edits);
    const participants = Array.from(map.values()).sort(compareBy('order'));
    return Participants_objectSpread(Participants_objectSpread({}, state), {}, {
      current,
      participants
    });
  }

}

Participants_defineProperty(Participants_Participants_Participants, "defaultProps", {
  className: '',
  editors: [],
  onSave: noop["a" /* noop */],
  owners: [],
  players: [],
  readOnly: false,
  saving: false,
  title: 'Participants'
});
// EXTERNAL MODULE: ./components/Toggle/Toggle.js
var Toggle = __webpack_require__("iLCn");

// EXTERNAL MODULE: ./icons/public.svg
var icons_public = __webpack_require__("ZS9i");
var public_default = /*#__PURE__*/__webpack_require__.n(icons_public);

// EXTERNAL MODULE: ./icons/secret.svg
var icons_secret = __webpack_require__("PZST");
var secret_default = /*#__PURE__*/__webpack_require__.n(icons_secret);

// EXTERNAL MODULE: ./icons/template.svg
var template = __webpack_require__("U+IY");
var template_default = /*#__PURE__*/__webpack_require__.n(template);

// EXTERNAL MODULE: ./components/SheetList/SheetList.scss
var SheetList = __webpack_require__("GFsp");

// CONCATENATED MODULE: ./components/SheetList/SheetList.js




function SheetList_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SheetList_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SheetList_ownKeys(Object(source), true).forEach(function (key) { SheetList_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SheetList_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SheetList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const loadSheets = () => fetch('/api/sheet/list-by/campaign', {
  credentials: 'include'
}).then(response => response.json());

function SheetList_SheetList({
  className = ''
}) {
  const {
    0: loaded,
    1: setLoaded
  } = Object(external_react_["useState"])(false);
  const {
    0: filter,
    1: setFilter
  } = Object(external_react_["useState"])('');
  const {
    0: sheets,
    1: setSheets
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    loadSheets().then(json => {
      setSheets(json);
      setLoaded(true);
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `sheet-list ${className}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "title",
      children: "Sheets"
    }), sheets.message ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "message",
      children: sheets.message
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        className: "filter",
        onChange: ({
          target
        }) => setFilter(target.value),
        placeholder: "Filter...",
        type: "text",
        value: filter
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_custom_scrollbars_["Scrollbars"], {
        className: `scrollable ${loaded ? 'loaded' : 'loading'}`,
        universal: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("table", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
            children: sheets.filter(s => s.title.toLowerCase().match(filter.toLowerCase())).map(sheet => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                className: "link",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* Link */], SheetList_objectSpread(SheetList_objectSpread({
                  type: "sheet"
                }, sheet), {}, {
                  children: sheet.title
                }))
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                className: "properties",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Toggle["a" /* Toggle */], {
                  onIcon: secret_default.a,
                  offIcon: public_default.a,
                  value: sheet.secret
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Toggle["a" /* Toggle */], {
                  onIcon: template_default.a,
                  offIcon: template_default.a,
                  value: sheet.template
                })]
              })]
            }, sheet._id))
          })
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: ./icons/campaign.svg
var icons_campaign = __webpack_require__("pqbZ");
var campaign_default = /*#__PURE__*/__webpack_require__.n(icons_campaign);

// EXTERNAL MODULE: ./components/SearchBox/CampaignSearchBox.scss
var CampaignSearchBox = __webpack_require__("Gl5P");

// CONCATENATED MODULE: ./components/SearchBox/CampaignSearchBox.js



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CampaignSearchBox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CampaignSearchBox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CampaignSearchBox_ownKeys(Object(source), true).forEach(function (key) { CampaignSearchBox_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CampaignSearchBox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CampaignSearchBox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const CampaignSearchBox_renderOption = (campaign, index, itemProps) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", CampaignSearchBox_objectSpread(CampaignSearchBox_objectSpread({
  className: "search-result"
}, itemProps), {}, {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(campaign_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
    className: "title",
    children: campaign.title
  })]
}), campaign._id);

const CampaignSearchBox_CampaignSearchBox = (_ref) => {
  let {
    onSelect = noop["a" /* noop */]
  } = _ref,
      props = _objectWithoutProperties(_ref, ["onSelect"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchBox["a" /* default */], CampaignSearchBox_objectSpread({
    className: "campaign",
    limit: 5,
    onSelect: onSelect,
    placeholder: "Search Campaigns...",
    renderOption: CampaignSearchBox_renderOption,
    url: "/api/search/campaigns/:searchTerm"
  }, props));
};

CampaignSearchBox_CampaignSearchBox.displayName = 'CampaignSearchBox';
/* harmony default export */ var SearchBox_CampaignSearchBox = (CampaignSearchBox_CampaignSearchBox);
// EXTERNAL MODULE: ./components/Sources/Sources.scss
var Sources_Sources = __webpack_require__("cSYP");

// CONCATENATED MODULE: ./components/Sources/Sources.js




function Sources_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Sources_Sources_Sources extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Sources_defineProperty(this, "handleAddSource", source => {
      if (!source || this.props.sources.some(s => s._id === source._id)) {
        return;
      }

      this.props.onSave([...this.props.sources, source]);
    });

    Sources_defineProperty(this, "handleRemoveSource", source => {
      if (!source || !this.props.sources.some(s => s._id === source._id)) {
        return;
      }

      this.props.onSave(this.props.sources.filter(s => s._id !== source._id));
    });

    Sources_defineProperty(this, "render", () => {
      const {
        className,
        placeholder,
        readOnly,
        sources,
        title
      } = this.props;
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `sources ${className}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "title",
          children: title
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
          className: "source-list",
          children: sources.map(source => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
            className: "campaign row",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(campaign_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* Link */], {
              campaign: source,
              className: "display",
              subdomain: source.subdomain,
              type: "campaign",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "title",
                title: source.title,
                children: source.title
              })
            }), !readOnly && /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(remove_default.a, {
                className: "remove icon",
                onClick: () => this.handleRemoveSource(source)
              })
            })]
          }, source._id))
        }), !readOnly && /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchBox_CampaignSearchBox, {
          className: "add-user",
          onSelect: this.handleAddSource,
          placeholder: placeholder
        })]
      });
    });
  }

}

Sources_defineProperty(Sources_Sources_Sources, "defaultProps", {
  className: '',
  readOnly: true,
  sources: [],
  title: 'Sources'
});
// EXTERNAL MODULE: external "react-color"
var external_react_color_ = __webpack_require__("4jX/");

// EXTERNAL MODULE: ./components/ColorPicker/ColorPicker.scss
var ColorPicker = __webpack_require__("skTp");

// CONCATENATED MODULE: ./components/ColorPicker/ColorPicker.js



function ColorPicker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ColorPicker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ColorPicker_ownKeys(Object(source), true).forEach(function (key) { ColorPicker_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ColorPicker_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ColorPicker_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const defaultColors = ['#000000', '#FFFFFF', '#A6808C', '#D6CFCB', '#6E0E0A', '#60594D', '#006B76', '#042A2B', '#124E78', '#5EB1BF'];

function ColorPicker_ColorPicker({
  className = '',
  colors = defaultColors,
  hex = defaultColors[0],
  onChange = noop["a" /* noop */],
  popover = true,
  readOnly = false,
  text = '',
  textColor = 'inherit',
  triangle = 'top-right',
  width = 'auto'
}) {
  const wrapper = Object(external_react_["useRef"])();
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    const handleClickOutside = ({
      target
    }) => {
      if (!wrapper.current.contains(target)) setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [true]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `color-picker input ${className} ${readOnly ? 'readonly' : ''}`,
    ref: wrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: "swatch",
      onClick: () => setOpen(!open),
      style: {
        background: hex,
        color: textColor
      },
      disabled: readOnly,
      children: text
    }), open && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_color_["GithubPicker"], ColorPicker_objectSpread({}, {
      colors,
      hex,
      onChange,
      popover,
      triangle,
      width
    }))]
  });
}

/* harmony default export */ var components_ColorPicker_ColorPicker = (Object(external_react_color_["CustomPicker"])(ColorPicker_ColorPicker));
// CONCATENATED MODULE: ./components/SearchBox/FontSearchBox.js



function FontSearchBox_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FontSearchBox_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FontSearchBox_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FontSearchBox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FontSearchBox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FontSearchBox_ownKeys(Object(source), true).forEach(function (key) { FontSearchBox_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FontSearchBox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FontSearchBox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const FontSearchBox_renderOption = (font, index, itemProps) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", FontSearchBox_objectSpread(FontSearchBox_objectSpread({
  className: "search-result"
}, itemProps), {}, {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
    className: "family",
    children: font.family
  }), " | ", font.category]
}), font.family);

const valueGetter = fontOption => fontOption.family;

const FontSearchBox = (_ref) => {
  let {
    onSelect = noop["a" /* noop */]
  } = _ref,
      props = FontSearchBox_objectWithoutProperties(_ref, ["onSelect"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchBox["a" /* default */], FontSearchBox_objectSpread({
    className: "font",
    clearOnSelect: false,
    limit: 5,
    onSelect: onSelect,
    placeholder: "Search Fonts...",
    renderOption: FontSearchBox_renderOption,
    url: "/api/search/fonts/:searchTerm",
    valueGetter: valueGetter
  }, props));
};

FontSearchBox.displayName = 'FontSearchBox';
/* harmony default export */ var SearchBox_FontSearchBox = (FontSearchBox);
// EXTERNAL MODULE: ./contexts/Application.ts
var Application = __webpack_require__("qhEq");

// CONCATENATED MODULE: ./utilities/range.js
/* harmony default export */ var range = ((start, end) => {
  const step = start <= end ? 1 : -1;
  const length = Math.abs(end - start) / Math.abs(step) + 1;
  return Array(...Array(length)).map((_, i) => start + i * step);
});
// EXTERNAL MODULE: ./components/ThemeEditor/ThemeEditor.scss
var ThemeEditor = __webpack_require__("LM0o");

// CONCATENATED MODULE: ./components/ThemeEditor/ThemeEditor.js



function ThemeEditor_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ThemeEditor_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ThemeEditor_ownKeys(Object(source), true).forEach(function (key) { ThemeEditor_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ThemeEditor_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ThemeEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function ThemeEditor_ThemeEditor({
  className = '',
  readOnly = false
}) {
  const {
    campaign = {},
    updateCampaign
  } = Object(external_react_["useContext"])(Application["a" /* Application */]);
  const {
    theme = {}
  } = campaign;

  const onUpdateColor = key => color => {
    updateCampaign({
      theme: ThemeEditor_objectSpread(ThemeEditor_objectSpread({}, theme), {}, {
        [key]: color.hex
      })
    });
  };

  const onUpdateFont = key => font => {
    if (!font) {
      return;
    }

    updateCampaign({
      theme: ThemeEditor_objectSpread(ThemeEditor_objectSpread({}, theme), {}, {
        [key]: font.family
      })
    });
  };

  const onUpdateFontSize = ({
    target
  }) => {
    updateCampaign({
      theme: ThemeEditor_objectSpread(ThemeEditor_objectSpread({}, theme), {}, {
        fontSize: target.value
      })
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `theme-editor ${className}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "title",
      children: "Theme"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "input-wrapper font-for-titles",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        children: "Titles"
      }), readOnly ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "display",
        children: theme.fontForTitles
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchBox_FontSearchBox, {
        initialValue: theme.fontForTitles,
        onSelect: onUpdateFont('fontForTitles')
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "input-wrapper font-for-text",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        children: "Text"
      }), readOnly ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "display",
        children: theme.fontForText
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchBox_FontSearchBox, {
        initialValue: theme.fontForText,
        onSelect: onUpdateFont('fontForText')
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "input-wrapper",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        children: "UI Color"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ColorPicker_ColorPicker, {
        className: "primary",
        color: theme.primary,
        onChange: onUpdateColor('primary'),
        readOnly: readOnly,
        text: "BG",
        textColor: theme.primaryText
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ColorPicker_ColorPicker, {
        className: "primaryText",
        color: theme.primaryText,
        onChange: onUpdateColor('primaryText'),
        readOnly: readOnly,
        text: "Text",
        textColor: theme.primary
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "input-wrapper",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        children: "Text Colors"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ColorPicker_ColorPicker, {
        className: "background",
        color: theme.background,
        onChange: onUpdateColor('background'),
        readOnly: readOnly,
        text: "BG",
        textColor: theme.normalText
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ColorPicker_ColorPicker, {
        className: "normalText",
        color: theme.normalText,
        onChange: onUpdateColor('normalText'),
        readOnly: readOnly,
        text: "Text",
        textColor: theme.background
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "input-wrapper",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        children: "Text Size"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("select", {
        disabled: readOnly,
        onChange: onUpdateFontSize,
        value: theme.fontSize,
        children: range(8, 18).map(pixels => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("option", {
          value: `${pixels}px`,
          children: [pixels, "px"]
        }, pixels))
      })]
    })]
  });
}
// EXTERNAL MODULE: ./pages/_error.js
var _error = __webpack_require__("Y0NT");

// EXTERNAL MODULE: ./pages/campaign.scss
var pages_campaign = __webpack_require__("Bron");

// CONCATENATED MODULE: ./pages/campaign.js




function campaign_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function campaign_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { campaign_ownKeys(Object(source), true).forEach(function (key) { campaign_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { campaign_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function campaign_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const EDITABLE_FIELDS = ['title'];
const STATE_FIELDS = [...EDITABLE_FIELDS, 'isEditor', 'isOwner', 'isPlayer'];
class campaign_CampaignPage extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    campaign_defineProperty(this, "state", campaign_objectSpread(campaign_objectSpread({}, Object(pluck["a" /* pluck */])(this.context.campaign, STATE_FIELDS)), {}, {
      savingParticipants: false
    }));

    campaign_defineProperty(this, "handleParticipantsSave", ({
      editors,
      owners,
      players
    }) => {
      this.setState({
        savingParticipants: true
      });
      const update = {
        editors: editors.map(user => user._id),
        owners: owners.map(user => user._id),
        players: players.map(user => user._id)
      };
      this.context.updateCampaign(update, () => {
        this.setState({
          savingParticipants: false
        });
      });
    });

    campaign_defineProperty(this, "handleReset", () => this.setState(Object(pluck["a" /* pluck */])(this.context.campaign, STATE_FIELDS)));

    campaign_defineProperty(this, "handleSave", () => this.context.updateCampaign(this.state));

    campaign_defineProperty(this, "handleSourcesChange", sources => {
      this.context.updateCampaign({
        sources: sources.map(s => s._id)
      });
    });

    campaign_defineProperty(this, "handleTitleChange", title => this.setState({
      title
    }));

    campaign_defineProperty(this, "handleToggleSecret", () => {
      const {
        secret
      } = this.context.campaign;
      this.context.updateCampaign({
        secret: !secret
      });
    });

    campaign_defineProperty(this, "renderUserList", list => /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
      className: "user-list",
      children: list.map(({
        _id,
        name,
        username
      }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* Link */], {
          type: "user",
          slug: username,
          children: name || username
        })
      }, _id))
    }));

    campaign_defineProperty(this, "render", () => {
      const {
        campaign
      } = this.context;

      if (!campaign._id) {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(_error["default"], {
          statusCode: 404,
          message: campaign.message
        });
      }

      const {
        editors,
        isEditor,
        isOwner,
        isParticipant,
        owners,
        players,
        secret,
        sources
      } = campaign;
      const {
        savingParticipants,
        title
      } = this.state;
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "campaign page",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "title-bar",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Editable["a" /* Editable */], {
            className: "title",
            onChange: this.handleTitleChange,
            placeholder: "Campaign Title",
            readOnly: campaign.isEditable,
            value: title
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Toggle["a" /* Toggle */], {
            className: "secret",
            offIcon: public_default.a,
            onIcon: secret_default.a,
            onToggle: this.handleToggleSecret,
            readOnly: !isOwner,
            value: secret
          }), this.isDirty && isOwner && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              className: "safe",
              onClick: this.handleSave,
              children: "Save"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              className: "safe",
              onClick: this.handleReset,
              children: "Reset"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_custom_scrollbars_["Scrollbars"], {
          className: "contents scrollbars",
          universal: true,
          autoHide: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "left column",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Participants_Participants_Participants, campaign_objectSpread(campaign_objectSpread({
              className: "lightbox"
            }, {
              editors,
              owners,
              players
            }), {}, {
              onSave: this.handleParticipantsSave,
              saving: savingParticipants,
              readOnly: !isEditor
            })), isParticipant && /*#__PURE__*/Object(jsx_runtime_["jsx"])(SheetList_SheetList, {
              className: "lightbox"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "right column",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Sources_Sources_Sources, {
              className: "lightbox",
              onSave: this.handleSourcesChange,
              placeholder: "Add Source Campaign...",
              readOnly: !isEditor,
              sources: sources
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ThemeEditor_ThemeEditor, {
              className: "lightbox",
              readOnly: !isEditor
            })]
          })]
        })]
      });
    });
  }

  get isDirty() {
    const {
      campaign
    } = this.context;
    const fromContext = JSON.stringify(Object(pluck["a" /* pluck */])(campaign, EDITABLE_FIELDS));
    const fromState = JSON.stringify(Object(pluck["a" /* pluck */])(this.state, EDITABLE_FIELDS));
    return fromContext !== fromState;
  }

}

campaign_defineProperty(campaign_CampaignPage, "contextType", Application["a" /* Application */]);

/***/ }),

/***/ "GFsp":
/***/ (function(module, exports) {



/***/ }),

/***/ "Gl5P":
/***/ (function(module, exports) {



/***/ }),

/***/ "I3+L":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Search (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"search"),React.createElement("path",{"d":"M16.352 1.984q4.864 0 8.256 3.424t3.392 8.224-3.392 8.256-8.256 3.424q-1.696 0-3.616-0.608l-3.904 3.904q-1.6 1.408-3.616 1.408-2.176 0-3.68-1.568t-1.536-3.68 1.472-3.648q1.696-1.728 2.528-2.56l1.28-1.28q-0.608-1.92-0.608-3.648 0-4.832 3.424-8.224t8.256-3.424zM16.352 21.984q3.456 0 5.888-2.432t2.432-5.92-2.432-5.888-5.888-2.432-5.888 2.432-2.464 5.888 2.464 5.92 5.888 2.432zM16.352 7.008q2.784 0 4.704 1.92t1.952 4.704-1.952 4.736-4.704 1.952-4.704-1.952-1.952-4.736 1.952-4.704 4.704-1.92zM16.352 18.624q2.080 0 3.552-1.44t1.472-3.552-1.472-3.52-3.552-1.472-3.52 1.472-1.472 3.52 1.472 3.552 3.52 1.44z","key":1})]);
}

Search.defaultProps = {"version":"1.1","width":"28","height":"32","viewBox":"0 0 28 32"};

module.exports = Search;

Search.default = Search;


/***/ }),

/***/ "IXLv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Editable_Editable_Editable; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./utilities/bound.js
function bound(value, {
  min,
  max
}) {
  if (min !== undefined && value < min) return min;
  if (max !== undefined && value > max) return max;
  return value;
}
// EXTERNAL MODULE: ./utilities/noop.js
var noop = __webpack_require__("E/TB");

// EXTERNAL MODULE: ./components/Editable/Editable.scss
var Editable_Editable = __webpack_require__("VVQE");

// CONCATENATED MODULE: ./components/Editable/Editable.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const TYPES = [// Strings
'text', 'multiline', // Checkboxes
'boolean', // Numbers
'number', 'slider'];
class Editable_Editable_Editable extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      editing: false,
      resetValue: this.props.value
    });

    _defineProperty(this, "getEditorType", () => {
      const {
        value
      } = this.props;
      let {
        type
      } = this.props;

      if (type !== undefined && TYPES.includes(type)) {
        return type;
      }

      type = typeof value;

      if (type === 'string') {
        return value.includes('\n') ? 'multiline' : 'text';
      }

      if (['boolean', 'number'].includes(type)) {
        return type;
      }

      return 'text';
    });

    _defineProperty(this, "resetChanges", () => {
      this.props.onChange(this.state.resetValue, this.props.value);
      this.handleToggleEditing();
    });

    _defineProperty(this, "createRefWithAutoFocus", editor => {
      if (!editor) {
        return;
      }

      this.editor = editor;
      const editorType = this.getEditorType();

      if (editorType !== 'boolean' && typeof editor.focus === 'function') {
        editor.focus();
      }

      if (['boolean', 'number'].includes(this.getEditorType())) {
        return;
      }

      if (this.props.forceEditMode && typeof editor.setSelectionRange === 'function') {
        editor.setSelectionRange(editor.value.length, editor.value.length);
      }
    });

    _defineProperty(this, "handleChange", ({
      target
    }) => {
      const {
        min,
        max
      } = this.props;
      let {
        value
      } = target; // eslint-disable-next-line default-case

      switch (this.getEditorType()) {
        case 'slider':
        case 'number':
          value = parseFloat(value || 0); // eslint-disable-next-line prefer-destructuring

          if (Number.isNaN(value)) {
            value = this.props.value;
          }

          value = bound(value, {
            max,
            min
          });
      }

      this.props.onChange(value, this.state.resetValue);
    });

    _defineProperty(this, "handleKeys", event => {
      const {
        target,
        key,
        ctrlKey,
        metaKey
      } = event;

      if (this.props.onKeyDown !== noop["a" /* noop */]) {
        this.props.onKeyDown(event);
        if (event.isDefaultPrevented()) return;
      }

      if (key === 'Escape') {
        this.resetChanges();
      }

      if (key === 'Enter') {
        if (target.nodeName !== 'TEXTAREA' || ctrlKey || metaKey) {
          this.handleToggleEditing();
        }
      }
    });

    _defineProperty(this, "handleReceivingFocus", () => {
      if (this.props.readOnly) {
        return;
      }

      if (!this.state.editing) {
        this.handleToggleEditing();
      }
    });

    _defineProperty(this, "handleToggleEditing", () => {
      if (this.props.readOnly) {
        return;
      }

      const editing = !this.editing;
      this.setState({
        editing,
        resetValue: this.props.value
      }, () => {
        if (this.state.editing) {
          this.props.onEditStart();
        } else {
          this.props.onEditEnd();
        }
      });
    });

    _defineProperty(this, "selectOnFocus", event => event.target.select());

    _defineProperty(this, "toggleBoolean", () => {
      this.props.onEditStart();
      this.props.onChange(!this.props.value, this.props.value);
      this.props.onEditEnd();
    });

    _defineProperty(this, "renderBoolean", () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "checkbox",
      checked: Boolean(this.props.value),
      disabled: this.props.readOnly,
      onChange: this.toggleBoolean,
      ref: this.createRefWithAutoFocus
    }));

    _defineProperty(this, "renderMultiline", () => {
      if (!this.editing) {
        const lines = (this.props.value || this.props.placeholder).split('\n');
        const paragraphs = lines.map((line, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: line
        }, index));
        const className = ['multiline', this.props.value ? '' : 'placeholder'].join(' ').trim();
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: className,
          onClick: this.handleToggleEditing,
          children: paragraphs
        });
      }

      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
        disabled: this.props.readOnly,
        onBlur: this.handleToggleEditing,
        onChange: this.handleChange,
        onFocus: this.selectOnFocus,
        onKeyDown: this.handleKeys,
        onKeyPress: this.props.onKeyPress,
        onKeyUp: this.props.onKeyUp,
        placeholder: this.props.placeholder,
        ref: this.createRefWithAutoFocus,
        rows: this.props.value.split('\n').length,
        value: this.props.value
      });
    });

    _defineProperty(this, "renderNumber", () => {
      if (!this.editing) {
        return this.renderStatic();
      }

      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        type: "number",
        disabled: this.props.readOnly,
        max: this.props.max,
        min: this.props.min,
        onBlur: this.handleToggleEditing,
        onChange: this.handleChange,
        onFocus: this.selectOnFocus,
        onKeyDown: this.handleKeys,
        onKeyPress: this.props.onKeyPress,
        onKeyUp: this.props.onKeyUp,
        placeholder: this.props.placeholder,
        ref: this.createRefWithAutoFocus,
        step: this.props.step,
        value: this.props.value
      });
    });

    _defineProperty(this, "renderSlider", () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "range",
      disabled: this.props.readOnly,
      max: this.props.max,
      min: this.props.min,
      onBlur: this.handleToggleEditing,
      onChange: this.handleChange,
      onKeyDown: this.props.onKeyDown,
      onKeyPress: this.props.onKeyPress,
      onKeyUp: this.props.onKeyUp,
      ref: this.createRefWithAutoFocus,
      step: this.props.step,
      value: this.props.value
    }));

    _defineProperty(this, "renderText", () => {
      if (!this.editing) {
        return this.renderStatic();
      }

      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        type: "text",
        disabled: this.props.readOnly,
        onBlur: this.handleToggleEditing,
        onChange: this.handleChange,
        onFocus: this.selectOnFocus,
        onKeyDown: this.handleKeys,
        onKeyPress: this.props.onKeyPress,
        onKeyUp: this.props.onKeyUp,
        placeholder: this.props.placeholder,
        ref: this.createRefWithAutoFocus,
        value: this.props.value
      });
    });

    _defineProperty(this, "renderStatic", () => {
      const {
        placeholder,
        readOnlyValue,
        requireDoubleClick,
        value
      } = this.props;
      const showPlaceholder = placeholder && !value;
      const displayValue = readOnlyValue !== undefined ? readOnlyValue : value;
      const className = showPlaceholder ? 'placeholder' : '';
      const eventHandlers = {};

      if (!requireDoubleClick) {
        eventHandlers.onClick = this.handleToggleEditing;
      }

      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", _objectSpread(_objectSpread({
        className: className
      }, eventHandlers), {}, {
        children: showPlaceholder ? placeholder : displayValue
      }));
    });

    _defineProperty(this, "renderEditor", () => {
      switch (this.getEditorType()) {
        case 'boolean':
          return this.renderBoolean();

        case 'slider':
          return this.renderSlider();

        case 'multiline':
          return this.renderMultiline();

        case 'number':
          return this.renderNumber();

        default:
          return this.renderText();
      }
    });

    _defineProperty(this, "render", () => {
      const {
        className,
        readOnly,
        requireDoubleClick
      } = this.props;
      const classes = ['editable', this.editing ? 'editing' : '', className || '', readOnly ? 'readonly' : ''].filter(Boolean);
      const props = {};

      if (!readOnly && !this.editing) {
        if (requireDoubleClick) {
          props.onDoubleClick = this.handleToggleEditing;
        } else {
          props.tabIndex = '0';
          props.onFocus = this.handleReceivingFocus;
        }
      }

      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", _objectSpread(_objectSpread({
        className: classes.join(' ')
      }, props), {}, {
        children: this.renderEditor()
      }));
    });
  }

  get editing() {
    return this.props.forceEditMode || this.state.editing;
  }

}

_defineProperty(Editable_Editable_Editable, "displayName", 'Editable');

_defineProperty(Editable_Editable_Editable, "defaultProps", {
  className: '',
  forceEditMode: false,
  max: undefined,
  min: undefined,
  onChange: noop["a" /* noop */],
  onEditEnd: noop["a" /* noop */],
  onEditStart: noop["a" /* noop */],
  onKeyDown: noop["a" /* noop */],
  onKeyPress: noop["a" /* noop */],
  onKeyUp: noop["a" /* noop */],
  placeholder: '',
  readOnly: false,
  readOnlyValue: undefined,
  requireDoubleClick: false,
  step: 1,
  type: undefined,
  value: ''
});

/***/ }),

/***/ "Jxiz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "L87S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SearchBox_SearchBox_SearchBox; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "downshift"
var external_downshift_ = __webpack_require__("impR");
var external_downshift_default = /*#__PURE__*/__webpack_require__.n(external_downshift_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./contexts/Application.ts
var Application = __webpack_require__("qhEq");

// EXTERNAL MODULE: ./icons/loading.svg
var loading = __webpack_require__("fn7S");
var loading_default = /*#__PURE__*/__webpack_require__.n(loading);

// EXTERNAL MODULE: ./icons/search.svg
var search = __webpack_require__("I3+L");
var search_default = /*#__PURE__*/__webpack_require__.n(search);

// EXTERNAL MODULE: ./utilities/debounce.js
var debounce = __webpack_require__("8qGm");

// EXTERNAL MODULE: ./utilities/noop.js
var noop = __webpack_require__("E/TB");

// CONCATENATED MODULE: ./utilities/objectMatch.js
const objectMatch = (object = {}, match = {}) => {
  if (typeof object !== typeof match) return false;
  return Object.keys(match).every(key => typeof object[key] === 'object' || Array.isArray(object[key]) ? objectMatch(object[key], match[key]) : object[key] === match[key]);
};

/* harmony default export */ var utilities_objectMatch = (objectMatch);
// EXTERNAL MODULE: ./components/SearchBox/SearchBox.scss
var SearchBox_SearchBox = __webpack_require__("X+zM");

// CONCATENATED MODULE: ./components/SearchBox/SearchBox.js



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class SearchBox_SearchBox_SearchBox extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      message: null,
      options: [],
      searchTerm: this.props.initialValue
    });

    _defineProperty(this, "downshift", /*#__PURE__*/external_react_default.a.createRef());

    _defineProperty(this, "inputBox", /*#__PURE__*/external_react_default.a.createRef());

    _defineProperty(this, "debouncedSearch", Object(debounce["a" /* default */])(async (searchTerm = '') => {
      const {
        limit,
        url
      } = this.props;

      if (!url || !searchTerm || searchTerm.length < 3) {
        this.setState({
          message: 'Enter at least 3 characters...',
          options: [],
          searching: false
        });
        return undefined;
      }

      const searchUrl = url.replace(':searchTerm', searchTerm);
      const queryString = `limit=${limit}`;
      const response = await fetch(`${searchUrl}?${queryString}`);
      const json = await response.json();

      if (response.status === 200 && json.length) {
        return this.setState({
          message: '',
          options: json,
          searching: false
        });
      }

      return this.setState({
        message: json.message || 'No results found...',
        options: [],
        searching: false
      });
    }, 500));

    _defineProperty(this, "componentDidMount", () => {
      document.addEventListener('keydown', this.handleHotKeys);
    });

    _defineProperty(this, "componentWillUnmount", () => {
      document.removeEventListener('keydown', this.handleHotKeys);
    });

    _defineProperty(this, "handleFocus", () => {
      if (this.props.selectOnFocus) {
        this.inputBox.current.select();
      }
    });

    _defineProperty(this, "handleHotKeys", event => {
      Object.entries(this.props.hotkeys).forEach(([name, keyCombo]) => {
        if (utilities_objectMatch(event, keyCombo)) {
          this.props.onHotKey(name, event, this);
        }
      });
    });

    _defineProperty(this, "handleKeyDown", event => {
      if (event.key === 'Escape') {
        this.setState({
          searching: false,
          searchTerm: this.props.initialValue
        });
        this.inputBox.current.blur();
        this.escapeKey = true; // eslint-disable-next-line no-param-reassign

        event.nativeEvent.preventDownshiftDefault = true;
      }
    });

    _defineProperty(this, "handleSearch", event => {
      const {
        value: searchTerm = ''
      } = event.target;

      if (this.escapeKey) {
        this.escapeKey = false;
        return;
      }

      this.setState({
        message: 'Searching...',
        searching: Boolean(searchTerm),
        searchTerm
      });

      if (searchTerm) {
        this.debouncedSearch(searchTerm);
      }
    });

    _defineProperty(this, "handleSelect", option => {
      const {
        clearOnSelect,
        onSelect,
        valueGetter
      } = this.props;
      onSelect(option);
      this.inputBox.current.blur();

      if (clearOnSelect) {
        this.setState({
          searching: false,
          searchTerm: ''
        });
      } else {
        this.setState({
          searching: false,
          searchTerm: valueGetter(option)
        });
      }
    });

    _defineProperty(this, "renderOption", (option, index, itemProps) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", _objectSpread(_objectSpread({
      className: "search-result"
    }, itemProps), {}, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
        className: "title",
        children: option.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "preview",
        children: [option.preview, "..."]
      })]
    }), index));

    _defineProperty(this, "render", () => {
      const _this$props = this.props,
            {
        className,
        placeholder
      } = _this$props,
            props = _objectWithoutProperties(_this$props, ["className", "placeholder"]);

      const {
        message,
        options,
        searching,
        searchTerm
      } = this.state;
      const {
        theme
      } = this.context;
      const renderOption = this.props.renderOption || this.renderOption;
      const OverlayIcon = searching ? loading_default.a : search_default.a;
      const inputHasFocus = this.inputBox.current && this.inputBox.current.matches(':focus');
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_downshift_default.a, _objectSpread(_objectSpread({
        id: "search-box",
        ref: this.downshift
      }, props), {}, {
        itemToString: article => article ? article.title : '',
        isOpen: Boolean(searchTerm) && inputHasFocus,
        onSelect: this.handleSelect,
        children: ({
          getInputProps,
          getItemProps,
          getMenuProps,
          isOpen
        }) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: `${className} search-box ${isOpen ? 'open' : 'closed'}`,
          style: {
            color: theme.normalText
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", _objectSpread(_objectSpread({}, getInputProps({
            onKeyDown: this.handleKeyDown
          })), {}, {
            className: "input",
            ref: this.inputBox,
            onChange: this.handleSearch,
            onFocus: this.handleFocus,
            placeholder: placeholder,
            value: searchTerm
          })), searching || !options.length ? isOpen && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "search-results message",
            children: message
          }) : isOpen && /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", _objectSpread(_objectSpread({}, getMenuProps()), {}, {
            className: "search-results list",
            children: options.map((option, index) => renderOption(option, index, getItemProps({
              index,
              item: option,
              key: option._id
            })))
          })), /*#__PURE__*/Object(jsx_runtime_["jsx"])(OverlayIcon, {
            className: "search icon"
          })]
        })
      }));
    });
  }

}

_defineProperty(SearchBox_SearchBox_SearchBox, "contextType", Application["a" /* Application */]);

_defineProperty(SearchBox_SearchBox_SearchBox, "displayName", 'SearchBox');

_defineProperty(SearchBox_SearchBox_SearchBox, "defaultProps", {
  className: '',
  clearOnSelect: false,
  hotkeys: {},
  initialValue: '',
  limit: 10,
  onHotKey: noop["a" /* noop */],
  onSelect: noop["a" /* noop */],
  placeholder: 'Search...',
  renderOption: null,
  selectOnFocus: true,
  url: '',
  valueGetter: option => option
});

/***/ }),

/***/ "LIm+":
/***/ (function(module, exports) {



/***/ }),

/***/ "LM0o":
/***/ (function(module, exports) {



/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PZST":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Secret (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"Secret"),React.createElement("path",{"d":"M17.03 5.16L17.75 5.36L18.44 5.64L19.09 5.97L19.7 6.38L20.27 6.84L20.79 7.35L21.25 7.92L21.65 8.53L21.99 9.19L22.26 9.88L22.46 10.6L22.58 11.35L22.63 12.13L22.63 15.5L23.75 15.5L24 15.51L24.23 15.55L24.46 15.61L24.68 15.7L24.89 15.81L25.08 15.93L25.26 16.08L25.42 16.24L25.57 16.42L25.69 16.61L25.8 16.82L25.89 17.04L25.95 17.27L25.99 17.5L26 17.75L26 26.75L25.99 27L25.95 27.23L25.89 27.46L25.8 27.68L25.69 27.89L25.57 28.08L25.42 28.26L25.26 28.42L25.08 28.57L24.89 28.69L24.68 28.8L24.46 28.89L24.23 28.95L24 28.99L23.75 29L7.25 29L7 28.99L6.77 28.95L6.54 28.89L6.32 28.8L6.11 28.69L5.92 28.57L5.74 28.42L5.58 28.26L5.43 28.08L5.31 27.89L5.2 27.68L5.11 27.46L5.05 27.23L5.01 27L5 26.75L5 17.75L5.01 17.5L5.05 17.27L5.11 17.04L5.2 16.82L5.31 16.61L5.43 16.42L5.58 16.24L5.74 16.08L5.92 15.93L6.11 15.81L6.32 15.7L6.54 15.61L6.77 15.55L7 15.51L7.25 15.5L8.38 15.5L8.38 12.13L8.42 11.35L8.54 10.6L8.74 9.88L9.01 9.19L9.35 8.53L9.75 7.92L10.21 7.35L10.73 6.84L11.3 6.38L11.91 5.97L12.56 5.64L13.25 5.36L13.97 5.16L14.72 5.04L15.5 5L16.28 5.04L17.03 5.16ZM13.11 9.74L12.39 10.81L12.13 12.13L12.13 15.5L18.88 15.5L18.88 12.13L18.61 10.81L17.89 9.74L16.81 9.02L15.5 8.75L14.19 9.02L13.11 9.74Z","id":"b7agiUAQvt","key":1})]);
}

Secret.defaultProps = {"version":"1.1","width":"26.25","height":"30","viewBox":"4 4 25 28"};

module.exports = Secret;

Secret.default = Secret;


/***/ }),

/***/ "Plc0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "PsvV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "RxAv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("pksY")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "U+IY":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Template (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"Template"),React.createElement("path",{"d":"M990,804.4c0,0-96.8,19.4-195.1,39.7C729.5,917,664.3,989.7,664.3,989.7L523.9,750.2c-8,0.5-15.8,1.2-23.9,1.2c-8.1,0-16-0.7-23.9-1.2L335.7,989.7c0,0-65.2-72.7-130.7-145.6C106.8,823.9,10,804.4,10,804.4l152.7-260.5c-24.6-49.3-38.8-104.5-38.8-163.1c0-204.6,168.4-370.6,376.1-370.6c207.7,0,376.1,165.9,376.1,370.6c0,58.6-14.2,113.8-38.8,163.1L990,804.4z M671.5,878.6c0,0,47-44.6,91.2-87.5c62.6-17.8,125.9-36,125.9-36L800,603.7c-51.2,66.8-124.6,115.8-209.5,136.5L671.5,878.6z M111.3,755.1c0,0,63.3,18.1,125.9,36c44.2,42.9,91.2,87.5,91.2,87.5l81.1-138.5c-84.9-20.7-158.4-69.7-209.5-136.5L111.3,755.1z M500,71.1c-168.9,0-305.8,137.2-305.8,306.4c0,169.2,136.9,306.4,305.8,306.4c168.9,0,305.8-137.2,305.8-306.4C805.8,208.3,668.9,71.1,500,71.1z M500,591.8c-118.3,0-214.3-95.9-214.3-214.3c0-118.3,95.9-214.3,214.3-214.3c118.3,0,214.3,95.9,214.3,214.3C714.3,495.9,618.3,591.8,500,591.8z M500,224.5c-84.5,0-153,68.5-153,153c0,84.5,68.5,153,153,153c84.5,0,153-68.5,153-153C653,293.1,584.5,224.5,500,224.5z","key":1})]);
}

Template.defaultProps = {"version":"1.1","viewBox":"0 0 1000 1000","xmlSpace":"preserve"};

module.exports = Template;

Template.default = Template;


/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "VOyh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "VTEe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ pluck; });

// CONCATENATED MODULE: ./utilities/flatten.js
function flatten(array, depth = Infinity) {
  if (!array || !Array.isArray(array)) {
    throw new TypeError(`cannot flatten non-Array value ${JSON.stringify(array)}`);
  }

  return array.reduce((all, next) => {
    if (depth > 1 && next && Array.isArray(next)) {
      return all.concat(flatten(next, depth - 1));
    }

    return all.concat(next);
  }, []);
}
// CONCATENATED MODULE: ./utilities/pluck.js

function pluck(object, ...keys) {
  if (!object || typeof object !== 'object') return {};
  return flatten(keys).reduce((out, key) => {
    // eslint-disable-next-line no-prototype-builtins
    if (object.hasOwnProperty(key)) {
      out[key] = object[key]; // eslint-disable-line no-param-reassign
    }

    return out;
  }, {});
}

/***/ }),

/***/ "VVQE":
/***/ (function(module, exports) {



/***/ }),

/***/ "Wecs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("PsvV"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "X+zM":
/***/ (function(module, exports) {



/***/ }),

/***/ "Y0NT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qhEq");
/* harmony import */ var _error_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qiT/");
/* harmony import */ var _error_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_error_scss__WEBPACK_IMPORTED_MODULE_3__);





function Error() {
  const {
    router
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_Application__WEBPACK_IMPORTED_MODULE_2__[/* Application */ "a"]);
  const {
    query
  } = router;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "error page",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
      className: "status-code",
      children: query.statusCode || 500
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "message",
      children: "An error occurred."
    })]
  });
}

/***/ }),

/***/ "ZS9i":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Public (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"Public"),React.createElement("path",{"d":"M15.39 11.87C15.39 12.05 15.39 12.94 15.39 14.56C10.26 14.56 7.4 14.56 6.83 14.56C5.82 14.56 5 15.38 5 16.39C5 17.12 5 22.99 5 23.72C5 24.73 5.82 25.55 6.83 25.55C8.18 25.55 18.93 25.55 20.28 25.55C21.29 25.55 22.11 24.73 22.11 23.72C22.11 22.99 22.11 17.12 22.11 16.39C22.11 15.38 21.29 14.56 20.28 14.56C20.16 14.56 19.54 14.56 18.44 14.56C18.44 12.93 18.44 12.02 18.44 11.84C18.44 10.33 19.66 9.07 21.17 9.06C22.7 9.04 23.94 10.28 23.94 11.81C23.94 12.11 23.94 14.56 23.94 14.86C23.94 15.37 24.35 15.78 24.86 15.78C24.98 15.78 25.96 15.78 26.08 15.78C26.59 15.78 27 15.37 27 14.86C27 14.56 27 12.11 27 11.81C27 8.6 24.38 5.99 21.18 6C17.97 6.02 15.39 8.66 15.39 11.87Z","id":"b90YTQhGbf","key":1})]);
}

Public.defaultProps = {"version":"1.1","width":"30","height":"30","viewBox":"5 3 25 23"};

module.exports = Public;

Public.default = Public;


/***/ }),

/***/ "a4i1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("Plc0");

var _routeLoader = __webpack_require__("RxAv");

var _denormalizePagePath = __webpack_require__("yExG");

var _normalizeLocalePath = __webpack_require__("1GNI");

var _mitt = _interopRequireDefault(__webpack_require__("Jxiz"));

var _utils = __webpack_require__("z4BS");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("4F+t"));

var _isDynamic = __webpack_require__("BCwt");

var _parseRelativeUrl = __webpack_require__("eU9b");

var _querystring = __webpack_require__("PsvV");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("lxQX"));

var _routeMatcher = __webpack_require__("VOyh");

var _routeRegex = __webpack_require__("BukW");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "bBV7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("a4i1"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("/3ze"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cSYP":
/***/ (function(module, exports) {



/***/ }),

/***/ "e+GP":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "eU9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("z4BS");

var _querystring = __webpack_require__("PsvV");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "fn7S":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Loading (props) {
    return React.createElement("svg",props,[React.createElement("rect",{"x":"0","y":"10","width":"4","height":"10","fill":"#333","opacity":"0.2","key":0},[React.createElement("animate",{"attributeName":"opacity","attributeType":"XML","values":"0.2; 1; .2","begin":"0s","dur":"0.6s","repeatCount":"indefinite","key":0}),React.createElement("animate",{"attributeName":"height","attributeType":"XML","values":"10; 20; 10","begin":"0s","dur":"0.6s","repeatCount":"indefinite","key":1}),React.createElement("animate",{"attributeName":"y","attributeType":"XML","values":"10; 5; 10","begin":"0s","dur":"0.6s","repeatCount":"indefinite","key":2})]),React.createElement("rect",{"x":"8","y":"10","width":"4","height":"10","fill":"#333","opacity":"0.2","key":1},[React.createElement("animate",{"attributeName":"opacity","attributeType":"XML","values":"0.2; 1; .2","begin":"0.15s","dur":"0.6s","repeatCount":"indefinite","key":0}),React.createElement("animate",{"attributeName":"height","attributeType":"XML","values":"10; 20; 10","begin":"0.15s","dur":"0.6s","repeatCount":"indefinite","key":1}),React.createElement("animate",{"attributeName":"y","attributeType":"XML","values":"10; 5; 10","begin":"0.15s","dur":"0.6s","repeatCount":"indefinite","key":2})]),React.createElement("rect",{"x":"16","y":"10","width":"4","height":"10","fill":"#333","opacity":"0.2","key":2},[React.createElement("animate",{"attributeName":"opacity","attributeType":"XML","values":"0.2; 1; .2","begin":"0.3s","dur":"0.6s","repeatCount":"indefinite","key":0}),React.createElement("animate",{"attributeName":"height","attributeType":"XML","values":"10; 20; 10","begin":"0.3s","dur":"0.6s","repeatCount":"indefinite","key":1}),React.createElement("animate",{"attributeName":"y","attributeType":"XML","values":"10; 5; 10","begin":"0.3s","dur":"0.6s","repeatCount":"indefinite","key":2})])]);
}

Loading.defaultProps = {"version":"1.1","x":"0px","y":"0px","width":"24px","height":"30px","viewBox":"0 0 24 30","style":{"enableBackground":"new 0 0 50 50"},"xmlSpace":"preserve"};

module.exports = Loading;

Loading.default = Loading;


/***/ }),

/***/ "hY8M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("pksY"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "iLCn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toggle; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_favorite_off_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rQEi");
/* harmony import */ var _icons_favorite_off_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icons_favorite_off_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("48dn");
/* harmony import */ var _icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("E/TB");
/* harmony import */ var _Toggle_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("/Shq");
/* harmony import */ var _Toggle_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Toggle_scss__WEBPACK_IMPORTED_MODULE_5__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function Toggle(_ref) {
  let {
    className = '',
    offIcon = _icons_favorite_off_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    offProps = {},
    onIcon = _icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    onProps = {},
    onToggle = _utilities_noop__WEBPACK_IMPORTED_MODULE_4__[/* noop */ "a"],
    readOnly = false,
    value = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "offIcon", "offProps", "onIcon", "onProps", "onToggle", "readOnly", "value"]);

  const Icon = value ? onIcon : offIcon;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Icon, _objectSpread(_objectSpread({
    className: `toggle ${value ? 'on' : 'off'} ${readOnly ? 'readonly' : ''} ${className}`,
    onClick: readOnly ? _utilities_noop__WEBPACK_IMPORTED_MODULE_4__[/* noop */ "a"] : onToggle
  }, props), value ? onProps : offProps));
}

/***/ }),

/***/ "impR":
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),

/***/ "kWkU":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Nerd (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M184.615 79.708 C 114.418 86.677,72.345 137.710,86.743 198.419 C 87.178 200.253,86.884 200.369,81.184 200.617 L 75.165 200.879 75.232 224.176 C 75.324 255.858,78.248 264.741,93.327 279.147 C 128.703 312.945,190.531 287.963,190.754 239.780 L 190.769 236.484 196.923 236.484 L 203.077 236.484 203.092 239.780 C 203.315 287.963,265.143 312.945,300.519 279.147 C 315.598 264.741,318.522 255.858,318.614 224.176 L 318.681 200.879 312.663 200.617 C 306.962 200.369,306.668 200.253,307.103 198.419 C 313.655 170.791,309.458 146.253,294.544 124.991 C 290.181 118.772,289.770 120.939,297.845 107.594 C 301.615 101.362,305.791 94.375,307.125 92.066 L 309.550 87.869 294.157 95.551 C 285.690 99.776,278.541 103.010,278.269 102.738 C 277.997 102.466,278.770 97.641,279.986 92.016 C 281.203 86.391,282.198 81.599,282.198 81.367 C 282.198 81.136,277.311 84.105,271.339 87.966 L 260.480 94.985 254.951 92.241 C 234.999 82.342,207.477 77.438,184.615 79.708 M282.043 133.407 C 280.568 136.670,276.821 143.771,273.718 149.186 L 268.075 159.031 271.238 163.174 C 277.861 171.851,281.050 180.687,281.912 192.747 L 282.461 200.440 253.223 200.440 L 223.985 200.440 224.537 198.242 L 225.088 196.044 196.923 196.044 L 168.758 196.044 169.309 198.242 L 169.861 200.440 139.330 200.440 L 108.800 200.440 109.172 195.298 C 109.716 187.775,118.535 171.004,130.171 155.368 C 130.447 154.997,133.415 155.941,136.765 157.466 C 182.783 178.416,236.296 169.106,278.242 132.850 C 281.626 129.924,284.470 127.518,284.560 127.502 C 284.651 127.486,283.518 130.143,282.043 133.407 M206.556 210.769 C 206.536 211.132,206.011 213.604,205.391 216.264 L 204.263 221.099 196.923 221.099 L 189.583 221.099 188.455 216.264 C 187.835 213.604,187.310 211.132,187.290 210.769 C 187.270 210.407,191.604 210.110,196.923 210.110 C 202.242 210.110,206.577 210.407,206.556 210.769 M165.046 235.385 C 162.518 280.152,102.767 281.387,101.246 236.703 L 100.909 226.813 133.220 226.813 L 165.530 226.813 165.046 235.385 M292.600 236.703 C 291.079 281.408,231.329 280.174,228.800 235.385 L 228.316 226.813 260.626 226.813 L 292.937 226.813 292.600 236.703 "}));
}

Nerd.defaultProps = {"version":"1.1","viewBox":"0 0 400 400"};

module.exports = Nerd;

Nerd.default = Nerd;


/***/ }),

/***/ "lxQX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "pksY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "pqbZ":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Campaign (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"Campaign"),React.createElement("path",{"d":"M967.090176 396.722176c7.395328-33.284096-49.926144-81.360896-72.116224-3.69664-16.64 53.622784 5.548032 79.511552-1.847296 85.057536-7.397376 5.545984-279.218176 334.690304-323.59424 386.465792-64.720896-20.338688-323.596288-94.304256-403.10784-120.193024-81.360896-48.0768-51.777536-173.815808 5.545984-157.17376 38.83008 11.094016 290.310144 85.057536 334.688256 98.004992 42.530816 12.941312 59.172864 22.19008 90.607616-16.644096 44.376064-53.624832 323.596288-373.522432 356.880384-408.653824 24.035328-27.736064 33.282048-66.568192-18.49344-75.814912-53.624832-11.094016-358.72768-83.208192-403.105792-90.605568-42.528768-7.395328-53.624832-18.489344-96.1536 33.284096C414.205952 154.488832 133.138432 468.8384 96.157696 507.670528 55.476224 550.199296-3.694592 751.753216 140.535808 807.225344c144.2304 49.926144 321.746944 99.852288 403.10784 123.891712 36.984832 11.094016 61.022208 16.64 83.212288-20.342784 22.188032-36.982784 310.65088-371.67104 332.84096-401.256448 20.340736-27.736064 9.244672-3.698688 3.698688-53.624832-5.552128-49.926144-1.851392-33.282048 3.694592-59.170816z m-543.639552-125.741056c16.642048-20.340736 18.489344-24.037376 24.037376-29.585408 16.642048-16.642048 36.982784-12.94336 55.474176-9.24672 12.94336 1.849344 218.195968 53.624832 231.13728 55.474176 12.945408 3.698688 51.777536 9.244672 31.4368 33.284096-22.188032 25.888768-20.340736 24.037376-27.736064 31.434752-7.39328 7.395328-24.037376 12.94336-51.77344 5.545984-24.039424-7.395328-221.894656-53.624832-238.538752-55.472128-16.64-1.847296-40.679424-11.091968-24.037376-31.434752z","key":1})]);
}

Campaign.defaultProps = {"version":"1.1","viewBox":"0 0 1024 1024","height":"512"};

module.exports = Campaign;

Campaign.default = Campaign;


/***/ }),

/***/ "q2at":
/***/ (function(module, exports) {



/***/ }),

/***/ "qC9r":
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "qhEq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Application; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CAMPAIGN_DEFAULTS = {
  createdAt: null,
  createdBy: {},
  editors: [],
  lastUpdatedAt: null,
  lastUpdatedBy: {},
  navigation: [],
  owners: [],
  secret: false,
  subdomain: '',
  theme: {
    background: '#fff',
    fontFamily: 'Ubuntu',
    normalText: '#333',
    primary: '#42afe3',
    primaryText: '#fff'
  },
  title: 'New Campaign',
  version: 0
};
const USER_DEFAULTS = {
  anonymous: true
};
const Application = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  campaign: CAMPAIGN_DEFAULTS,
  router: {},
  rootUrl: '',
  subdomain: '',
  user: USER_DEFAULTS
});

/***/ }),

/***/ "qiT/":
/***/ (function(module, exports) {



/***/ }),

/***/ "rQEi":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function FavoriteOff (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"Not Marked as Favorite"),React.createElement("path",{"d":"M23.712 30.976q-0.608 0-1.248-0.384l-6.816-3.872-6.88 3.872q-1.408 0.768-2.688-0.096-1.312-0.928-0.992-2.528l1.6-7.776q-0.32-0.288-1.248-1.12t-1.44-1.28l-3.168-2.88q-1.184-1.12-0.672-2.624t2.112-1.728l7.808-0.832 3.264-7.2q0.704-1.504 2.304-1.504 1.504 0 2.272 1.504l3.232 7.2 7.84 0.864q1.536 0.128 2.080 1.664t-0.672 2.656l-5.856 5.312 1.6 7.744q0.224 1.12-0.512 2.048t-1.92 0.96zM10.112 20q-0.032 0.128-0.224 1.152t-0.544 2.688-0.64 2.944l6.080-3.424q0.864-0.448 1.664 0l6.080 3.424-1.408-6.816q-0.192-0.928 0.512-1.568l5.152-4.736-6.944-0.736q-0.96-0.128-1.312-0.96l-2.88-6.368-2.88 6.368q-0.416 0.832-1.376 0.96l-6.912 0.736 5.152 4.736q0.672 0.608 0.48 1.6z","key":1})]);
}

FavoriteOff.defaultProps = {"version":"1.1","width":"31","height":"32","viewBox":"0 0 31 32"};

module.exports = FavoriteOff;

FavoriteOff.default = FavoriteOff;


/***/ }),

/***/ "skTp":
/***/ (function(module, exports) {



/***/ }),

/***/ "vdEC":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "yExG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "z4BS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("Wecs");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ })

/******/ });