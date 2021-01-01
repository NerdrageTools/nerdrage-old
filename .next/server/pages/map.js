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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/Shq":
/***/ (function(module, exports) {



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

/***/ "4YdT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ map_Map; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/Alert/Alert.js
var Alert = __webpack_require__("AVMw");

// EXTERNAL MODULE: ./components/Editable/Editable.js + 1 modules
var Editable = __webpack_require__("IXLv");

// EXTERNAL MODULE: ./utilities/noop.js
var noop = __webpack_require__("E/TB");

// CONCATENATED MODULE: ./components/IFrame/IFrame.js


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




const applyProps = ({
  bodyClasses,
  css,
  document
}) => {
  if (!document || !document.body || !document.head) {
    return noop["a" /* noop */];
  }

  const bodyTag = document.body;
  const classNames = bodyClasses.filter(Boolean);
  classNames.forEach(cn => bodyTag.classList.add(cn));
  const headTag = document.head;
  let styleTag = headTag.querySelector('style#injected');

  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'injected';
    headTag.appendChild(styleTag);
  }

  styleTag.innerHTML = css;
  return () => classNames.forEach(cn => bodyTag.classList.remove(cn));
};

function IFrame({
  bodyClasses = [],
  className = '',
  css = '',
  onLoad = noop["a" /* noop */],
  onReady = noop["a" /* noop */],
  onUnload = noop["a" /* noop */],
  queryString = {},
  src = '',
  title = 'IFrame'
}) {
  const frameEl = Object(external_react_["useRef"])();
  const handleOnReady = Object(external_react_["useMemo"])(() => ({
    document,
    window
  }) => {
    applyProps({
      bodyClasses,
      css,
      document
    });
    onReady({
      document,
      window
    });
  }, [bodyClasses, css, onReady]);
  const handleOnLoad = Object(external_react_["useEffect"])(function _handleOnLoad() {
    const document = frameEl.current.contentDocument; // eslint-disable-line no-shadow

    const window = frameEl.current.contentWindow;
    onLoad({
      document,
      window
    });

    if (window.location.href === 'about:blank') {
      setTimeout(_handleOnLoad, 50);
    } else if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        handleOnReady({
          document,
          window
        });
      });
    } else {
      handleOnReady({
        document,
        window
      });
    }

    return () => onUnload({
      document,
      window
    });
  }, [onReady, onUnload]);
  const url = Object(external_react_["useMemo"])(() => {
    const params = Object.entries(queryString).filter(([, value]) => value !== undefined).reduce((object, [key, value]) => _objectSpread(_objectSpread({}, object), {}, {
      [key]: value
    }), {});
    const qs = new URLSearchParams(params).toString();
    return src.match(/[?]/) ? `${src}&${qs}` : `${src}?${qs}`;
  }, [src, queryString]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("iframe", _objectSpread({
    onLoad: handleOnLoad,
    ref: frameEl,
    src: url
  }, {
    className,
    title
  }));
}
// EXTERNAL MODULE: ./components/Toggle/Toggle.js
var Toggle = __webpack_require__("iLCn");

// EXTERNAL MODULE: ./contexts/Application.ts
var Application = __webpack_require__("qhEq");

// EXTERNAL MODULE: ./icons/Navigation.js
var Navigation = __webpack_require__("EAP2");

// EXTERNAL MODULE: ./icons/public.svg
var icons_public = __webpack_require__("ZS9i");
var public_default = /*#__PURE__*/__webpack_require__.n(icons_public);

// EXTERNAL MODULE: ./icons/secret.svg
var icons_secret = __webpack_require__("PZST");
var secret_default = /*#__PURE__*/__webpack_require__.n(icons_secret);

// EXTERNAL MODULE: ./utilities/confirm.js
var utilities_confirm = __webpack_require__("CjJp");

// EXTERNAL MODULE: ./utilities/pluck.js + 1 modules
var pluck = __webpack_require__("VTEe");

// EXTERNAL MODULE: ./utilities/URI.js
var URI = __webpack_require__("TTmL");

// EXTERNAL MODULE: ./pages/map.scss
var pages_map = __webpack_require__("KqK1");

// CONCATENATED MODULE: ./pages/map.js




function map_ownKeys(object, enumerableOnly) {
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

function map_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      map_ownKeys(Object(source), true).forEach(function (key) {
        map_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      map_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function map_defineProperty(obj, key, value) {
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














const STATE_FIELDS = ['_id', 'checksum', 'data', 'isOwner', 'isEditable', 'secret', 'slug', 'svg', 'title'];
class map_Map extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    map_defineProperty(this, "state", map_objectSpread(map_objectSpread({}, Object(pluck["a" /* pluck */])(this.props, STATE_FIELDS)), {}, {
      generating: false
    }));

    map_defineProperty(this, "handleDelete", async () => {
      const {
        router
      } = this.context;
      const {
        slug
      } = this.props;
      if (!(await Object(utilities_confirm["a" /* confirm */])('Are you sure you want to permanently delete this map?'))) return;
      await fetch(`/api/map/${slug}`, {
        method: 'DELETE'
      });
      const map = await fetch(`/api/map/${slug}`);

      const json = map_objectSpread(map_objectSpread({}, Object(pluck["a" /* pluck */])(await map.json(), STATE_FIELDS)), {}, {
        _id: null,
        data: null,
        title: router.query.title || ''
      });

      this.context.updateUser();
      this.setState(map_objectSpread(map_objectSpread({}, json), {}, {
        generating: false
      }));
    });

    map_defineProperty(this, "handleGenerate", () => this.setState({
      generating: true
    }));

    map_defineProperty(this, "handleOnReady", async ({
      window
    }) => {
      this.iframeWindow = window;
      const {
        _id,
        checksum,
        data,
        generating
      } = this.state;
      const {
        slug
      } = this.props;

      if (data) {
        window.displayJsonData(data);
      } else if (_id) {
        this.setState({
          loading: true
        });
        const map = await fetch(`/api/map/${slug}/${checksum}`, {
          credentials: 'include'
        }).then(response => response.json()).catch(() => null);

        if (map && map.data) {
          window.displayJsonData(map.data);
        }

        this.setState({
          loading: false
        });
      } else if (generating) {
        window.regenerateMap(() => this.setState({
          data: window.packageJsonData()
        }));
      }
    });

    map_defineProperty(this, "handleSave", async () => {
      this.setState({
        saving: true
      });
      const data = this.iframeWindow.packageJsonData();
      const saved = await fetch(`/api/map/${this.props.slug}`, {
        body: JSON.stringify(map_objectSpread(map_objectSpread({}, Object(pluck["a" /* pluck */])(this.state, STATE_FIELDS)), {}, {
          data
        })),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(r => r.json());
      this.setState(map_objectSpread(map_objectSpread({}, saved), {}, {
        saving: false
      }));
    });

    map_defineProperty(this, "handleTitleChange", title => this.setState({
      title
    }));

    map_defineProperty(this, "handleToggleNavigation", async () => {
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

    map_defineProperty(this, "handleToggleSecret", async () => {
      this.handleUpdate({
        secret: !this.state.secret
      });
    });

    map_defineProperty(this, "handleUpdate", async payload => {
      const keys = Object.keys(payload);
      const response = await fetch(`/api/map/${this.props.slug}`, {
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });
      const updated = Object(pluck["a" /* pluck */])(await response.json(), ...keys);

      if (response.status === 200) {
        this.setState(updated);
      }
    });

    map_defineProperty(this, "render", () => {
      const {
        campaign
      } = this.context;
      const {
        slug
      } = this.props;
      const {
        _id,
        data,
        loading,
        generating,
        isEditable,
        isOwner,
        saving,
        secret,
        title
      } = this.state;
      let contents;

      if (_id || isEditable && generating) {
        contents = /*#__PURE__*/Object(jsx_runtime_["jsx"])(IFrame, {
          bodyClasses: [isEditable ? 'editable' : 'readOnly'],
          className: "map-frame",
          css: `
						.readOnly #viewbox, .readOnly #scaleBar {
							pointer-events: none;
						}
						.readOnly #optionsTab, .readOnly #toolsTab, .readOnly #regenerate {
							display: none!important;
						}
						#loading, #initial { display: none; }
					`,
          onReady: this.handleOnReady,
          src: "/static/fantasy-map-generator",
          queryString: {
            doNotGenerate: true
          },
          title: "map"
        });
      } else if (isEditable) {
        contents = /*#__PURE__*/Object(jsx_runtime_["jsx"])(Alert["a" /* Alert */], {
          className: "center",
          children: isEditable && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: ["This map doesn't exist. Would you like to ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              className: "safe",
              onClick: this.handleGenerate,
              children: "Generate It?"
            })]
          })
        });
      } else {
        contents = /*#__PURE__*/Object(jsx_runtime_["jsx"])(Alert["a" /* Alert */], {
          className: "center",
          children: "This map either doesn't exist, or you don't have permission to view it."
        });
      }

      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `map page ${loading ? 'loading' : ''}`,
        children: [!data && generating && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "generating",
          children: "Generating map..."
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "title-bar",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Editable["a" /* Editable */], {
            className: `title ${title.trim() ? '' : 'default'}`,
            onChange: this.handleTitleChange,
            placeholder: slug,
            readOnly: !isEditable,
            value: title
          }), _id && isOwner && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Toggle["a" /* Toggle */], {
            className: "secret",
            value: secret,
            offIcon: public_default.a,
            onIcon: secret_default.a,
            onToggle: this.handleToggleSecret
          }), _id && campaign.isEditor && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Toggle["a" /* Toggle */], {
            className: "in-navigation",
            value: this.isNavLink,
            offIcon: Navigation["a" /* default */],
            offProps: {
              title: 'Not Added to Site Navigation'
            },
            onIcon: Navigation["a" /* default */],
            onProps: {
              title: 'Added to Site Navigation'
            },
            onToggle: this.handleToggleNavigation
          }), (data || generating) && isEditable && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: "safe",
            onClick: this.handleSave,
            disabled: saving,
            children: "Save"
          }), _id && isEditable && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: "danger",
            onClick: this.handleDelete,
            children: "Delete"
          })]
        }), contents]
      });
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.slug !== state.slug) {
      const fields = Object(pluck["a" /* pluck */])(props, STATE_FIELDS);
      const {
        title
      } = props || new URLSearchParams(window.location.search).get('title') || '';
      return map_objectSpread(map_objectSpread({}, fields), {}, {
        title
      });
    }

    return state;
  }

}

map_defineProperty(map_Map, "contextType", Application["a" /* Application */]);

map_defineProperty(map_Map, "getInitialProps", async ({
  query,
  req
}) => {
  const headers = Object(pluck["a" /* pluck */])(req && req.headers, 'cookie');
  const result = await fetch(Object(URI["a" /* URI */])(req, `/api/map/${query.slug}`), {
    headers
  });
  const json = await result.json();
  return map_objectSpread({
    httpStatusCode: result.status
  }, json);
});

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4YdT");


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

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

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

/***/ "KqK1":
/***/ (function(module, exports) {



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

/***/ "TTmL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URI; });
function URI(request, url) {
  const baseURL = request ? `${request.protocol}://${request.get('Host')}` : '';
  return `${baseURL}${url}`;
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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

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

/***/ })

/******/ });