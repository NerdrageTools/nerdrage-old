module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		5: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"13":"4ba8ec2408612bbd050d"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+HPk":
/***/ (function(module, exports) {



/***/ }),

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

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gEqT");


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

/***/ "5dyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9CGT")


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


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}




const Link = _ref => {
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

/***/ "AVMw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Alert_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sILV");
/* harmony import */ var _Alert_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Alert_scss__WEBPACK_IMPORTED_MODULE_2__);



function Alert({
  className = '',
  children = [],
  type = 'info'
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: `alert ${type} ${className}`,
    children: children
  });
}

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

/***/ "CjJp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return confirm; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("y4cp");






async function confirm(text = '', title = 'Prompt') {
  const container = document.createElement('div');
  document.body.appendChild(container);
  return new Promise(resolve => {
    const handleNo = () => resolve(false);

    const handleYes = () => resolve(true);

    react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      buttons: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
          onClick: handleYes,
          children: "Yes"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
          onClick: handleNo,
          children: "No"
        })]
      }),
      modal: true,
      okButtonText: "Yes",
      onCancel: handleNo,
      onOk: handleYes,
      title: title,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "text",
        children: text
      })
    }), container);
  }).finally(() => {
    document.body.removeChild(container);
  });
}

/***/ }),

/***/ "DMmu":
/***/ (function(module, exports) {

module.exports = require("react-draggable");

/***/ }),

/***/ "DdCM":
/***/ (function(module, exports) {



/***/ }),

/***/ "E/TB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noop; });
const noop = () => {};

/***/ }),

/***/ "EAP2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationIcon; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("E/TB");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



function NavigationIcon(_ref) {
  let {
    title = 'Navigation',
    wrapperRef = _utilities_noop__WEBPACK_IMPORTED_MODULE_2__[/* noop */ "a"]
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title", "wrapperRef"]);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", _objectSpread(_objectSpread({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    ref: wrapperRef
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
      children: title
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M32 22.272v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.704 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424h-9.12v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.736 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424h-9.12v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.736 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424q0-0.928 0.672-1.632t1.632-0.672h9.12v-3.424h-1.696q-0.736 0-1.216-0.512t-0.512-1.184v-5.728q0-0.704 0.512-1.216t1.216-0.512h5.696q0.736 0 1.216 0.512t0.512 1.216v5.728q0 0.704-0.512 1.184t-1.216 0.512h-1.696v3.424h9.12q0.928 0 1.632 0.672t0.672 1.632v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216z"
    })]
  }));
}

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

/***/ "HouF":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Edit (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"edit"),React.createElement("path",{"d":"M30.912 5.728q0.768 0.736 0.768 1.76t-0.768 1.76l-5.92 5.92v15.008q0 0.672-0.48 1.152t-1.184 0.512h-21.632q-0.704 0-1.184-0.512t-0.512-1.152v-21.664q0-0.672 0.512-1.184t1.184-0.48h14.976l5.92-5.92q0.768-0.768 1.76-0.768t1.76 0.768zM14.176 21.28l10.464-10.496-3.584-3.584-10.496 10.464zM9.888 19.072l0.128 2.752 2.816 0.128zM21.696 28.512v-9.984l-5.344 5.12q-0.64 0.64-2.016 1.056t-2.56 0.448h-5.088v-5.088q0-1.312 0.352-2.624t0.992-1.952l5.28-5.344h-9.984v18.368h18.368zM25.856 9.632l2.144-2.144-3.648-3.648-2.144 2.144z","key":1})]);
}

Edit.defaultProps = {"version":"1.1","width":"32","height":"32","viewBox":"0 0 32 32"};

module.exports = Edit;

Edit.default = Edit;


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


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}





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

/***/ "JSB+":
/***/ (function(module, exports) {



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

/***/ "KP2y":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Read (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"read"),React.createElement("path",{"d":"M14.848 7.072q0.16-0.16 0.48-0.384t1.504-0.832 2.656-1.12 4.064-0.864 5.6-0.384v21.44q-3.040 0-5.632 0.384t-4.096 0.864-2.624 1.088-1.504 0.928l-0.448 0.32q-0.128-0.128-0.416-0.384t-1.472-0.832-2.656-1.12-4.064-0.864-5.664-0.384v-21.44q3.008 0 5.568 0.384t4.096 0.864 2.656 1.056 1.536 0.928zM4.16 7.072v14.4q5.504 0.448 8.928 2.272v-14.368q-3.52-1.856-8.928-2.304zM25.568 21.472v-14.4q-5.376 0.448-8.896 2.304v14.368q3.456-1.824 8.896-2.272z","key":1})]);
}

Read.defaultProps = {"version":"1.1","width":"30","height":"32","viewBox":"0 0 30 32"};

module.exports = Read;

Read.default = Read;


/***/ }),

/***/ "MS84":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Links; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Link_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("98Mn");
/* harmony import */ var _icons_tag_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Yvmh");
/* harmony import */ var _icons_tag_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icons_tag_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Links_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fu5R");
/* harmony import */ var _Links_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Links_scss__WEBPACK_IMPORTED_MODULE_4__);



function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}






const renderCampaignLink = campaign => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
  title: campaign.title,
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Link_Link__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], _objectSpread(_objectSpread({}, campaign), {}, {
    type: "campaign",
    children: campaign.title
  }))
}, campaign.subdomain);

const renderPageLink = ({
  slug,
  subdomain,
  title,
  type
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
  title: title,
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Link_Link__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], _objectSpread(_objectSpread({}, {
    slug,
    subdomain,
    type
  }), {}, {
    children: title
  }))
}, slug);

function Links({
  caption = 'Child Articles',
  className = '',
  icon = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_icons_tag_svg__WEBPACK_IMPORTED_MODULE_3___default.a, {}),
  pages = [],
  type = 'article'
}) {
  if (!pages.length) return null;
  let links = pages.sort((a, b) => a.title.localeCompare(b.title)).map(_ref => {
    let {
      campaign = {}
    } = _ref,
        props = _objectWithoutProperties(_ref, ["campaign"]);

    return _objectSpread(_objectSpread({}, campaign), {}, {
      type
    }, props);
  });

  if (type === 'campaign') {
    links = links.map(renderCampaignLink);
  } else {
    links = links.map(renderPageLink);
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: `links ${className}`.trim(),
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("header", {
      children: [icon, " ", caption]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
      className: "list",
      children: links
    })]
  });
}

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

/***/ "PbyA":
/***/ (function(module, exports) {

module.exports = require("react-tagsinput");

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

/***/ "SLZg":
/***/ (function(module, exports) {



/***/ }),

/***/ "TM+/":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Settings (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"settings"),React.createElement("path",{"d":"M17.92 3.488h-4.992l-1.44 5.696-5.632-1.632-2.528 4.352 4.256 4.096-4.256 4.064 2.528 4.32 5.632-1.6 1.44 5.696h4.992l1.408-5.696 5.696 1.6 2.464-4.32-4.224-4.064 4.224-4.096-2.464-4.352-5.696 1.632zM17.92 0.16q1.12 0 2.016 0.704t1.184 1.824l0.608 2.336 2.368-0.672q0.48-0.128 0.928-0.128 1.92 0 2.88 1.696l2.464 4.32q0.576 0.992 0.416 2.112t-0.96 1.92l-1.76 1.728 1.76 1.664q0.8 0.8 0.96 1.92t-0.416 2.144l-2.464 4.352q-0.96 1.632-2.88 1.632-0.448 0-0.928-0.096l-2.368-0.672-0.544 2.368q-0.288 1.12-1.184 1.824t-2.080 0.704h-4.992q-1.152 0-2.048-0.704t-1.184-1.824l-0.608-2.368-2.304 0.704q-0.48 0.128-0.928 0.128-1.92 0-2.88-1.696l-2.528-4.32q-0.576-0.992-0.416-2.144t0.992-1.952l1.76-1.664-1.76-1.696q-0.8-0.8-0.96-1.92t0.384-2.144l2.528-4.32q0.96-1.696 2.88-1.696 0.448 0 0.928 0.128l2.304 0.672 0.608-2.336q0.288-1.12 1.184-1.824t2.048-0.704h4.992zM15.424 12.672q-1.408 0-2.368 0.96t-0.96 2.368 0.96 2.368 2.368 0.96 2.368-0.992 0.992-2.336-0.992-2.336-2.368-0.992zM15.424 11.008q2.080 0 3.52 1.44t1.472 3.552-1.472 3.552-3.52 1.44-3.552-1.44-1.472-3.552 1.472-3.552 3.552-1.44z","key":1})]);
}

Settings.defaultProps = {"version":"1.1","width":"31","height":"32","viewBox":"0 0 31 32"};

module.exports = Settings;

Settings.default = Settings;


/***/ }),

/***/ "TTmL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URI; });
function URI(request, url) {
  const baseURL = request ? `${request.protocol}://${request.get('Host')}` : '';
  return `${baseURL}${url}`;
}

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

/***/ "Yvmh":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Tag (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"tag"),React.createElement("path",{"d":"M0 11.744v-9.184q0.064-0.992 0.768-1.728t1.664-0.704h9.184q2.816 0.192 4.256 1.76l13.632 15.104q0.608 0.896 0.608 1.856t-0.608 1.664l-10.688 10.688q-0.8 0.672-1.824 0.672t-1.664-0.672l-13.568-15.2q-1.76-2.048-1.76-4.256zM4 6.496q0.064 0.992 0.736 1.664t1.632 0.64q1.024 0 1.664-0.704t0.672-1.6q0-1.056-0.736-1.728t-1.6-0.64q-1.056 0.064-1.696 0.736t-0.672 1.632z","key":1})]);
}

Tag.defaultProps = {"version":"1.1","width":"30","height":"32","viewBox":"0 0 30 32"};

module.exports = Tag;

Tag.default = Tag;


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

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fu5R":
/***/ (function(module, exports) {



/***/ }),

/***/ "gEqT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ article_Article; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-jsx-parser"
var external_react_jsx_parser_ = __webpack_require__("uN1m");
var external_react_jsx_parser_default = /*#__PURE__*/__webpack_require__.n(external_react_jsx_parser_);

// EXTERNAL MODULE: ./components/Alert/Alert.js
var Alert = __webpack_require__("AVMw");

// EXTERNAL MODULE: ./components/Editable/Editable.js + 1 modules
var Editable = __webpack_require__("IXLv");

// EXTERNAL MODULE: ./components/Link/Link.tsx
var Link = __webpack_require__("98Mn");

// EXTERNAL MODULE: ./components/Links/Links.js
var Links = __webpack_require__("MS84");

// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// EXTERNAL MODULE: ./utilities/noop.js
var noop = __webpack_require__("E/TB");

// EXTERNAL MODULE: ./components/TabSet/TabSet.scss
var TabSet = __webpack_require__("+HPk");

// CONCATENATED MODULE: ./components/TabSet/TabSet.js






const DEFAULT_TAB = {
  id: 'blank',
  onClick: noop["a" /* noop */],
  renderContents: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {}),
  renderTab: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {})
};
function TabSet_TabSet({
  activeTabId,
  buttons,
  onTabClicked = () => {},
  showTabs = true,
  tabs = []
}) {
  if (tabs.length === 0) tabs.push(DEFAULT_TAB);
  const activeId = activeTabId || tabs[0].id;
  const activeTab = tabs.find(tab => tab.id === activeId) || tabs[0];
  const className = ['tab-set', !showTabs ? 'no-tabs' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: className,
    children: [showTabs && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
      className: `tabs ${activeTabId}`,
      children: [tabs.map(tab => {
        // eslint-disable-next-line no-param-reassign
        if (!tab.onClick) tab.onClick = () => onTabClicked(tab.id);
        const liClassName = ['tab', tab.className, tab.id, activeTab.id === tab.id && 'is-active'].filter(Boolean).join(' ');
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          className: liClassName,
          onClick: tab.onClick,
          children: tab.tab
        }, tab.id);
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        className: "buttons",
        children: buttons
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_custom_scrollbars_["Scrollbars"], {
      autoHide: true,
      className: `scrollbars tab-contents ${activeTabId}`,
      hideTracksWhenNotNeeded: true,
      universal: true,
      children: activeTab.contents
    })]
  });
}
// EXTERNAL MODULE: external "react-tagsinput"
var external_react_tagsinput_ = __webpack_require__("PbyA");
var external_react_tagsinput_default = /*#__PURE__*/__webpack_require__.n(external_react_tagsinput_);

// EXTERNAL MODULE: ./icons/remove.svg
var remove = __webpack_require__("Eo3F");
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);

// EXTERNAL MODULE: ./icons/tag.svg
var icons_tag = __webpack_require__("Yvmh");
var tag_default = /*#__PURE__*/__webpack_require__.n(icons_tag);

// EXTERNAL MODULE: ./components/Tag/Tag.scss
var Tag_Tag = __webpack_require__("mHXT");

// CONCATENATED MODULE: ./components/Tag/Tag.js



function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}







class Tag_Tag_Tag extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleRemove", () => this.props.onRemove(this.props.tag));

    _defineProperty(this, "render", () => {
      const {
        asLink,
        className,
        removable,
        tag
      } = this.props;
      const classNames = ['tag', asLink ? 'is-link' : '', className, removable ? 'removable' : ''].filter(Boolean).join(' ');
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
        className: classNames,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(tag_default.a, {
          className: "tag-icon"
        }), asLink ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* Link */], {
          type: "article",
          slug: tag,
          children: tag
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "text",
          children: tag
        }), removable && /*#__PURE__*/Object(jsx_runtime_["jsx"])(remove_default.a, {
          className: "remove",
          onClick: this.handleRemove
        })]
      });
    });
  }

}

_defineProperty(Tag_Tag_Tag, "defaultProps", {
  asLink: false,
  className: '',
  onRemove: noop["a" /* noop */],
  removable: false,
  tag: ''
});
// EXTERNAL MODULE: ./components/TagBar/TagBar.scss
var TagBar_TagBar = __webpack_require__("DdCM");

// CONCATENATED MODULE: ./components/TagBar/TagBar.js



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        TagBar_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function TagBar_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}








const exclude = (list, exclusions) => list.filter(el => !exclusions.includes(el));

const areEqual = (array1, array2) => array1.every((el, ix) => el === array2[ix]);

class TagBar_TagBar_TagBar extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    TagBar_defineProperty(this, "handleChange", updated => {
      const {
        banned,
        onChange,
        sort,
        tags
      } = this.props;
      const cleaned = exclude(updated, banned);
      if (sort) cleaned.sort();
      if (!areEqual(cleaned, tags)) onChange(cleaned);
    });

    TagBar_defineProperty(this, "handleTagRemove", removed => {
      const {
        tags,
        onChange
      } = this.props;
      onChange(tags.filter(tag => tag !== removed));
    });

    TagBar_defineProperty(this, "handleTextInput", next => event => {
      const {
        value
      } = event.target;

      if (!value.match(this.props.validationRegex)) {
        event.preventDefault();
      } else {
        next(event);
      }
    });

    TagBar_defineProperty(this, "renderInput", _ref => {
      let {
        addTag,
        onChange
      } = _ref,
          props = _objectWithoutProperties(_ref, ["addTag", "onChange"]);

      return !this.props.readOnly ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", _objectSpread({
        type: "text",
        onChange: this.handleTextInput(onChange)
      }, props)) : null;
    });

    TagBar_defineProperty(this, "renderLayout", (tags, input) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_custom_scrollbars_["Scrollbars"], {
      autoHide: true,
      className: "scrollbars",
      universal: true,
      children: [tags, input]
    }));

    TagBar_defineProperty(this, "renderTag", ({
      className,
      key,
      tag
    }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Tag_Tag_Tag, {
      asLink: this.props.asLinks,
      className: className,
      onRemove: this.handleTagRemove,
      removable: !this.props.readOnly,
      tag: tag
    }, key));
  }

  render() {
    const {
      className,
      inputSettings,
      readOnly,
      tags,
      tagSettings
    } = this.props;
    const classNames = ['tag-bar', className, readOnly ? 'readOnly' : ''].filter(Boolean).join(' ');
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_tagsinput_default.a, {
      className: classNames,
      inputProps: inputSettings,
      onChange: this.handleChange,
      onlyUnique: true,
      readOnly: readOnly,
      renderLayout: this.renderLayout,
      renderInput: this.renderInput,
      renderTag: this.renderTag,
      tagProps: tagSettings,
      value: tags
    });
  }

}

TagBar_defineProperty(TagBar_TagBar_TagBar, "defaultProps", {
  asLinks: false,
  banned: [],
  className: '',
  onChange: noop["a" /* noop */],
  onRemove: noop["a" /* noop */],
  readOnly: false,
  sort: true,
  tags: [],
  validationRegex: /^[a-z0-9-]*$/,
  // eslint-disable-next-line sort-keys
  inputSettings: {
    className: 'tag-bar-input',
    placeholder: 'add tag'
  },
  tagSettings: {
    className: '',
    classNameRemove: 'remove'
  }
});
// EXTERNAL MODULE: ./components/Toggle/Toggle.js
var Toggle = __webpack_require__("iLCn");

// EXTERNAL MODULE: ./icons/warning.svg
var warning = __webpack_require__("txBL");
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// EXTERNAL MODULE: ./styles/classes/warning.scss
var classes_warning = __webpack_require__("SLZg");

// CONCATENATED MODULE: ./components/Warning/Warning.js





function Warning({
  children = ''
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "warning",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(warning_default.a, {}), children]
  });
}
// EXTERNAL MODULE: ./contexts/Application.ts
var Application = __webpack_require__("qhEq");

// EXTERNAL MODULE: ./icons/edit.svg
var edit = __webpack_require__("HouF");
var edit_default = /*#__PURE__*/__webpack_require__.n(edit);

// EXTERNAL MODULE: ./icons/favorite-off.svg
var favorite_off = __webpack_require__("rQEi");
var favorite_off_default = /*#__PURE__*/__webpack_require__.n(favorite_off);

// EXTERNAL MODULE: ./icons/favorite-on.svg
var favorite_on = __webpack_require__("48dn");
var favorite_on_default = /*#__PURE__*/__webpack_require__.n(favorite_on);

// EXTERNAL MODULE: ./icons/html.svg
var icons_html = __webpack_require__("paJB");
var html_default = /*#__PURE__*/__webpack_require__.n(icons_html);

// EXTERNAL MODULE: ./icons/Navigation.js
var Navigation = __webpack_require__("EAP2");

// EXTERNAL MODULE: ./icons/public.svg
var icons_public = __webpack_require__("ZS9i");
var public_default = /*#__PURE__*/__webpack_require__.n(icons_public);

// EXTERNAL MODULE: ./icons/read.svg
var read = __webpack_require__("KP2y");
var read_default = /*#__PURE__*/__webpack_require__.n(read);

// EXTERNAL MODULE: ./icons/secret.svg
var icons_secret = __webpack_require__("PZST");
var secret_default = /*#__PURE__*/__webpack_require__.n(icons_secret);

// EXTERNAL MODULE: ./icons/settings.svg
var settings = __webpack_require__("TM+/");
var settings_default = /*#__PURE__*/__webpack_require__.n(settings);

// EXTERNAL MODULE: ./icons/template.svg
var icons_template = __webpack_require__("U+IY");
var template_default = /*#__PURE__*/__webpack_require__.n(icons_template);

// EXTERNAL MODULE: ./utilities/confirm.js
var utilities_confirm = __webpack_require__("CjJp");

// EXTERNAL MODULE: ./utilities/pluck.js + 1 modules
var pluck = __webpack_require__("VTEe");

// EXTERNAL MODULE: ./utilities/URI.js
var URI = __webpack_require__("TTmL");

// CONCATENATED MODULE: ./pages/article.tsx




function article_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function article_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      article_ownKeys(Object(source), true).forEach(function (key) {
        article_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      article_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function article_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // @ts-nocheck




























const HtmlEditor = false // // @ts-expect-error - ts does not understand next/dynamic()
? undefined : () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {});
const WysiwygEditor = false // // @ts-expect-error - ts does not understand next/dynamic()
? undefined : () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {});
const STATE_FIELDS = ['_id', 'aliases', 'html', 'isOwner', 'isEditable', 'secret', 'slug', 'tags', 'template', 'title'];
class article_Article extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    article_defineProperty(this, "state", article_objectSpread(article_objectSpread({
      activeTab: 'read',
      editMode: false
    }, Object(pluck["a" /* pluck */])(this.props, STATE_FIELDS)), {}, {
      saved: this.props._id ? Object(pluck["a" /* pluck */])(this.props, STATE_FIELDS) : {
        title: this.props.title || this.context.router.query.title
      },
      title: this.props.title || this.context.router.query.title
    }));

    article_defineProperty(this, "componentDidMount", () => {
      const {
        slug
      } = this.props;
      const {
        router
      } = this.context;

      if (slug && router.query.slug !== slug) {
        this.setState({
          redirectedFrom: router.query.slug
        });
        router.push(`/article?slug=${slug}`, `/article/${slug}`, {
          shallow: true
        });
      } else {
        this.setState({
          redirectedFrom: undefined
        });
      }
    });

    article_defineProperty(this, "handleAliasesChange", aliases => this.setState({
      aliases
    }));

    article_defineProperty(this, "handleDelete", async () => {
      if (!(await Object(utilities_confirm["a" /* confirm */])('Are you sure you want to permanently delete this article?'))) return;
      await external_isomorphic_unfetch_default()(`/api/article/${this.props.slug}`, {
        method: 'DELETE'
      });
      const article = await external_isomorphic_unfetch_default()(`/api/article/${this.props.slug}`);

      const json = article_objectSpread(article_objectSpread({}, Object(pluck["a" /* pluck */])(await article.json(), STATE_FIELDS)), {}, {
        _id: null,
        title: this.context.router.query.title || ''
      });

      this.setState(article_objectSpread(article_objectSpread({}, json), {}, {
        activeTab: 'read',
        saved: json
      }));
      this.context.updateUser();
    });

    article_defineProperty(this, "handleHtmlChange", html => this.setState({
      html
    }));

    article_defineProperty(this, "handleReset", () => this.setState(article_objectSpread({
      activeTab: 'read'
    }, this.state.saved)));

    article_defineProperty(this, "handleSave", async () => {
      const saved = await external_isomorphic_unfetch_default()(`/api/article/${this.props.slug}`, {
        body: JSON.stringify(Object(pluck["a" /* pluck */])(this.state, STATE_FIELDS)),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(r => r.json());
      this.setState(article_objectSpread(article_objectSpread({}, saved), {}, {
        saved
      }));
      this.context.updateUser();
    });

    article_defineProperty(this, "handleTabClicked", tab => {
      if (tab !== this.state.activeTab) {
        this.setState({
          activeTab: tab
        });
      }
    });

    article_defineProperty(this, "handleTagsChange", tags => this.setState({
      tags
    }));

    article_defineProperty(this, "handleTitleChange", title => this.setState({
      title
    }));

    article_defineProperty(this, "handleToggleEditMode", () => this.setState({
      activeTab: this.state.editMode ? 'read' : 'edit',
      editMode: !this.state.editMode
    }));

    article_defineProperty(this, "handleToggleFavorite", async () => {
      const updated = await external_isomorphic_unfetch_default()(`/api/user/my/favorites/${this.props.slug}`, {
        method: 'POST'
      }).then(r => r.json());
      this.context.setUser(updated);
    });

    article_defineProperty(this, "handleToggleNavigation", async () => {
      const {
        slug,
        title
      } = this.props;
      const {
        campaign
      } = this.context;

      if (!campaign) {
        return;
      }

      let navigation = campaign.navigation || [];

      if (this.isNavLink) {
        navigation = navigation.filter(n => n.slug !== slug);
      } else {
        navigation.push({
          slug,
          title
        });
      }

      this.context.updateCampaign({
        navigation
      });
    });

    article_defineProperty(this, "handleToggleSecret", async () => {
      this.handleUpdate({
        secret: !this.state.secret
      });
    });

    article_defineProperty(this, "handleToggleTemplate", async () => {
      this.handleUpdate({
        template: !this.state.template
      });
    });

    article_defineProperty(this, "handleUpdate", async payload => {
      const keys = Object.keys(payload);
      const response = await external_isomorphic_unfetch_default()(`/api/article/${this.props.slug}`, {
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });
      const updated = Object(pluck["a" /* pluck */])(await response.json(), ...keys);

      if (response.status === 200) {
        this.setState(article_objectSpread(article_objectSpread({}, updated), {}, {
          saved: article_objectSpread(article_objectSpread({}, this.state.saved), updated)
        }));
      }
    });

    article_defineProperty(this, "renderReadOnlyContent", () => {
      const jsx = (this.state.html || this.props.html || '').trim();
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_jsx_parser_default.a, {
          allowUnknownElements: true,
          autoCloseVoidElements: true,
          components: {
            a: Link["a" /* Link */],
            Warning: Warning
          },
          jsx: jsx !== null && jsx !== void 0 ? jsx : ''
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Links["a" /* Links */], {
          pages: this.props.childArticles
        })]
      });
    });

    article_defineProperty(this, "renderSettingsTab", () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("fieldset", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("legend", {
          children: "Aliases"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(TagBar_TagBar_TagBar, {
          banned: [this.state.slug],
          className: "aliases",
          inputSettings: {
            placeholder: 'add alias'
          },
          onChange: this.handleAliasesChange,
          readOnly: !this.props.isEditable,
          tags: this.state.aliases
        })]
      }), this.props.isEditable && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("fieldset", {
        className: "danger",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("legend", {
          className: "danger",
          children: "Danger"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: "danger",
            onClick: this.handleDelete,
            children: "Delete"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: "Warning: This cannot be undone."
          })]
        })]
      })]
    }));

    article_defineProperty(this, "render", () => {
      const {
        _id,
        activeTab,
        aliases,
        html,
        isEditable,
        isOwner,
        message,
        redirectedFrom,
        secret,
        slug,
        tags,
        template = false,
        title = ''
      } = this.state;
      const {
        campaign: source,
        childArticles,
        httpStatusCode
      } = this.props;
      const {
        campaign = {},
        user: {
          favorites = []
        }
      } = this.context;
      const isFavorite = favorites.find(f => f.subdomain === campaign.subdomain && f.slug === slug);
      const readOnly = !isEditable || !this.state.editMode;
      const classNames = ['article page', childArticles.length ? '' : 'no-child-articles'].filter(Boolean).join(' ');

      if (httpStatusCode !== 200) {
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: classNames,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Alert["a" /* Alert */], {
            children: message
          }), this.renderReadOnlyContent()]
        });
      }

      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: classNames,
        children: [message && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Alert["a" /* Alert */], {
          children: message
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "title-bar",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Editable["a" /* Editable */], {
            className: `title ${title.trim() ? '' : 'default'}`,
            onChange: this.handleTitleChange,
            placeholder: slug,
            readOnly: readOnly,
            value: readOnly ? this.state.saved.title : title
          }), redirectedFrom && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "redirected-from",
            children: ["Redirected From:", /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
              children: redirectedFrom
            })]
          }), _id && isOwner && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Toggle["a" /* Toggle */], {
            className: "secret",
            offIcon: public_default.a,
            onIcon: secret_default.a,
            onToggle: this.handleToggleSecret,
            value: secret
          }), _id && campaign.isEditor && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Toggle["a" /* Toggle */], {
              className: "template",
              offIcon: template_default.a,
              onIcon: template_default.a,
              onToggle: this.handleToggleTemplate,
              value: template
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Toggle["a" /* Toggle */], {
              className: "in-navigation",
              offIcon: Navigation["a" /* default */],
              offProps: {
                title: 'Not Added to Site Navigation'
              },
              onIcon: Navigation["a" /* default */],
              onProps: {
                title: 'Added to Site Navigation'
              },
              onToggle: this.handleToggleNavigation,
              value: this.isNavLink
            })]
          }), campaign.isEditor && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Toggle["a" /* Toggle */], {
            className: "edit-mode",
            offIcon: edit_default.a,
            onIcon: edit_default.a,
            onToggle: this.handleToggleEditMode,
            value: this.state.editMode
          }), _id && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Toggle["a" /* Toggle */], {
            className: "favorite",
            offIcon: favorite_off_default.a,
            onIcon: favorite_on_default.a,
            onToggle: this.handleToggleFavorite,
            value: isFavorite
          }), this.isDirty && campaign.isEditor && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: "safe",
            onClick: this.handleSave,
            children: "Save"
          }), _id && this.isDirty && campaign.isEditor && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: "safe",
            onClick: this.handleReset,
            children: "Reset"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(TabSet_TabSet, {
          activeTabId: activeTab,
          buttons: /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
            children: source.subdomain && source.subdomain !== campaign.subdomain && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "source",
              children: ["Source:", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* Link */], {
                slug: slug,
                subdomain: source.subdomain,
                children: source.title
              })]
            })
          }),
          onTabClicked: this.handleTabClicked,
          showTabs: !readOnly,
          tabs: [{
            contents: this.renderReadOnlyContent(),
            id: 'read',
            tab: /*#__PURE__*/Object(jsx_runtime_["jsx"])(read_default.a, {})
          }, {
            contents: /*#__PURE__*/Object(jsx_runtime_["jsx"])(WysiwygEditor, {
              value: html,
              onChange: this.handleHtmlChange
            }),
            id: 'edit',
            tab: /*#__PURE__*/Object(jsx_runtime_["jsx"])(edit_default.a, {})
          }, {
            contents: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HtmlEditor, {
              onChange: this.handleHtmlChange,
              value: html
            }),
            id: 'html',
            tab: /*#__PURE__*/Object(jsx_runtime_["jsx"])(html_default.a, {})
          }, {
            contents: this.renderSettingsTab(),
            id: 'settings',
            tab: /*#__PURE__*/Object(jsx_runtime_["jsx"])(settings_default.a, {})
          }].filter(Boolean)
        }), (tags.length || !readOnly) && /*#__PURE__*/Object(jsx_runtime_["jsx"])(TagBar_TagBar_TagBar, {
          asLinks: true,
          banned: [slug, ...aliases],
          className: "tags",
          onChange: this.handleTagsChange,
          readOnly: readOnly,
          tags: tags
        })]
      });
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.slug !== state.slug) {
      const saved = Object(pluck["a" /* pluck */])(props, STATE_FIELDS);
      const title = props.title || new URLSearchParams(window.location.search).get('title') || '';
      return article_objectSpread(article_objectSpread({
        activeTab: 'read',
        editMode: false
      }, saved), {}, {
        saved: article_objectSpread(article_objectSpread({}, saved), {}, {
          title
        }),
        title
      });
    }

    return state;
  }

  get isDirty() {
    const fromState = JSON.stringify(Object(pluck["a" /* pluck */])(this.state, STATE_FIELDS));
    const fromSaved = JSON.stringify(Object(pluck["a" /* pluck */])(this.state.saved, STATE_FIELDS));
    return fromState !== fromSaved;
  }

  get isNavLink() {
    const {
      campaign = {}
    } = this.context;
    if (!campaign.navigation || !campaign.navigation.length) return false;
    return Boolean(campaign.navigation.find(n => n.slug === this.props.slug));
  }

}

article_defineProperty(article_Article, "styles", __webpack_require__.e(/* import() */ 13).then(__webpack_require__.t.bind(null, "+xdt", 7)));

article_defineProperty(article_Article, "contextType", Application["a" /* Application */]);

article_defineProperty(article_Article, "defaultProps", {
  childArticles: [],
  html: '',
  httpStatusCode: 200,
  message: '',
  title: ''
});

article_defineProperty(article_Article, "getInitialProps", async ({
  query,
  req
}) => {
  const headers = Object(pluck["a" /* pluck */])(req && req.headers, 'cookie');
  let url = `/api/article/${query.slug}`;
  if (query.template) url += `?template=${query.template}`;
  const response = await external_isomorphic_unfetch_default()(Object(URI["a" /* URI */])(req, url), {
    headers
  });
  const json = await response.json();
  return article_objectSpread({
    httpStatusCode: response.status
  }, json);
});

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


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}






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

/***/ "lxQX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "mHXT":
/***/ (function(module, exports) {



/***/ }),

/***/ "paJB":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Html (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"html"),React.createElement("path",{"d":"M11.008 24.992l-0.896 0.896q-0.16 0.16-0.384 0.16t-0.416-0.16l-8.32-8.352q-0.192-0.16-0.192-0.384t0.192-0.416l8.32-8.32q0.16-0.192 0.416-0.192t0.384 0.192l0.896 0.896q0.192 0.16 0.192 0.416t-0.192 0.384l-7.008 7.040 7.008 7.008q0.192 0.192 0.192 0.416t-0.192 0.416zM21.568 5.92l-6.656 23.072q-0.064 0.224-0.288 0.352t-0.416 0.032l-1.088-0.288q-0.256-0.096-0.352-0.288t-0.064-0.448l6.688-23.040q0.064-0.256 0.256-0.352t0.416-0.064l1.12 0.32q0.224 0.064 0.352 0.288t0.032 0.416zM33.312 17.536l-8.32 8.352q-0.192 0.16-0.416 0.16t-0.416-0.16l-0.896-0.896q-0.16-0.192-0.16-0.416t0.16-0.416l7.008-7.008-7.008-7.040q-0.16-0.16-0.16-0.384t0.16-0.416l0.896-0.896q0.192-0.192 0.416-0.192t0.416 0.192l8.32 8.32q0.16 0.16 0.16 0.416t-0.16 0.384z","key":1})]);
}

Html.defaultProps = {"version":"1.1","width":"34","height":"32","viewBox":"0 0 34 32"};

module.exports = Html;

Html.default = Html;


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

/***/ "sILV":
/***/ (function(module, exports) {



/***/ }),

/***/ "txBL":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Warning (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"warning"),React.createElement("path",{"d":"M18.272 24.544v-3.392q0-0.256-0.16-0.416t-0.384-0.16h-3.456q-0.224 0-0.384 0.16t-0.16 0.416v3.392q0 0.256 0.16 0.416t0.384 0.192h3.456q0.224 0 0.384-0.192t0.16-0.416zM18.24 17.888l0.32-8.224q0-0.192-0.16-0.32-0.224-0.192-0.448-0.192h-3.904q-0.192 0-0.448 0.192-0.16 0.128-0.16 0.384l0.288 8.16q0 0.16 0.192 0.288t0.416 0.096h3.296q0.256 0 0.448-0.096t0.16-0.288zM18.016 1.184l13.696 25.152q0.64 1.12-0.032 2.24-0.288 0.544-0.832 0.832t-1.12 0.32h-27.456q-0.576 0-1.12-0.32t-0.832-0.832q-0.672-1.12-0.032-2.24l13.728-25.152q0.288-0.544 0.832-0.864t1.152-0.32 1.152 0.32 0.864 0.864z","key":1})]);
}

Warning.defaultProps = {"version":"1.1","width":"32","height":"32","viewBox":"0 0 32 32"};

module.exports = Warning;

Warning.default = Warning;


/***/ }),

/***/ "uN1m":
/***/ (function(module, exports) {

module.exports = require("react-jsx-parser");

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

/***/ "y4cp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dialog; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("DMmu");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("E/TB");
/* harmony import */ var _Dialog_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("JSB+");
/* harmony import */ var _Dialog_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Dialog_scss__WEBPACK_IMPORTED_MODULE_4__);







function Dialog({
  buttons = null,
  children = [],
  className = '',
  modal = false,
  onCancel = _utilities_noop__WEBPACK_IMPORTED_MODULE_3__[/* noop */ "a"],
  onKeyDown = _utilities_noop__WEBPACK_IMPORTED_MODULE_3__[/* noop */ "a"],
  onOk = _utilities_noop__WEBPACK_IMPORTED_MODULE_3__[/* noop */ "a"],
  showCancel = true,
  title = 'Dialog'
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: `dialog-wrapper ${modal ? 'modal' : ''}`,
    onKeyDown: onKeyDown,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_draggable__WEBPACK_IMPORTED_MODULE_2___default.a, {
      handle: ".dialog > .title",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: `dialog ${className}`,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "title",
          children: title
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "body",
          children: children
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "buttons",
          children: buttons || /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              className: "ok button safe",
              onClick: onOk,
              children: "Ok"
            }), showCancel && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              className: "cancel button link",
              onClick: onCancel,
              children: "Cancel"
            })]
          })
        })]
      })
    })
  });
}

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