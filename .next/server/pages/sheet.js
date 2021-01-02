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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/Shq":
/***/ (function(module, exports) {



/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

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

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("c5D9");


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

/***/ "JSB+":
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

/***/ "c5D9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ sheet_Sheet; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// EXTERNAL MODULE: external "sheetforge"
var external_sheetforge_ = __webpack_require__("n6zW");

// EXTERNAL MODULE: ./components/Editable/Editable.js + 1 modules
var Editable = __webpack_require__("IXLv");

// EXTERNAL MODULE: ./components/Toggle/Toggle.js
var Toggle = __webpack_require__("iLCn");

// EXTERNAL MODULE: ./contexts/Application.ts
var Application = __webpack_require__("qhEq");

// CONCATENATED MODULE: ./data/defaultSheetLayout.js
/* eslint-disable object-property-newline,sort-keys */
/* harmony default export */ var defaultSheetLayout = ({
  children: [{
    title: 'Descriptors',
    children: [{
      columns: 3,
      type: 'Descriptor'
    }]
  }, {
    title: 'Attributes',
    children: [{
      columns: 4,
      type: 'Attribute'
    }]
  }, {
    columns: 3,
    children: [{
      colSpan: 1,
      children: [{
        title: 'Traits',
        children: [{
          type: 'Trait'
        }]
      }, {
        title: 'Resources',
        children: [{
          type: 'Resource'
        }]
      }]
    }, {
      colSpan: 2,
      children: [{
        title: 'Skills',
        children: [{
          columns: 2,
          type: 'Skill'
        }]
      }, {
        title: 'Items',
        children: [{
          columns: 1,
          type: 'Item'
        }]
      }, {
        title: 'Spells',
        children: [{
          columns: 1,
          type: 'Spell'
        }]
      }]
    }]
  }]
});
/* eslint-enable object-property-newline,sort-keys */
// EXTERNAL MODULE: ./icons/public.svg
var icons_public = __webpack_require__("ZS9i");
var public_default = /*#__PURE__*/__webpack_require__.n(icons_public);

// EXTERNAL MODULE: ./icons/secret.svg
var icons_secret = __webpack_require__("PZST");
var secret_default = /*#__PURE__*/__webpack_require__.n(icons_secret);

// EXTERNAL MODULE: ./icons/template.svg
var icons_template = __webpack_require__("U+IY");
var template_default = /*#__PURE__*/__webpack_require__.n(icons_template);

// EXTERNAL MODULE: ./pages/_error.js
var _error = __webpack_require__("Y0NT");

// EXTERNAL MODULE: ./utilities/confirm.js
var utilities_confirm = __webpack_require__("CjJp");

// EXTERNAL MODULE: ./utilities/pluck.js + 1 modules
var pluck = __webpack_require__("VTEe");

// EXTERNAL MODULE: ./utilities/URI.js
var URI = __webpack_require__("TTmL");

// EXTERNAL MODULE: ../node_modules/sheetforge/build/sheetforge.css
var sheetforge = __webpack_require__("s2Sc");

// EXTERNAL MODULE: ./pages/sheet.scss
var sheet = __webpack_require__("eORY");

// CONCATENATED MODULE: ./pages/sheet.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const STATE_FIELDS = ['_id', 'isEditor', 'isOwner', 'secret', 'slug', 'template'];
const UPDATABLE_FIELDS = ['title'];
class sheet_Sheet extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", _objectSpread(_objectSpread({}, Object(pluck["a" /* pluck */])(this.props, STATE_FIELDS)), {}, {
      saved: Object(pluck["a" /* pluck */])(this.props, UPDATABLE_FIELDS),
      title: this.props.title || this.context.router.query.title || 'Unnamed Character'
    }));

    _defineProperty(this, "character", external_sheetforge_["CharacterModel"].create({}));

    _defineProperty(this, "layout", external_sheetforge_["LayoutModel"].create(defaultSheetLayout));

    _defineProperty(this, "componentDidMount", () => {
      this.updateSheet(this.props);
    });

    _defineProperty(this, "componentWillReceiveProps", props => {
      if (props.slug !== this.props.slug) {
        this.character = external_sheetforge_["CharacterModel"].create(props.data);
        this.layout = external_sheetforge_["LayoutModel"].create(props.layout);
        this.setState({
          saved: Object(pluck["a" /* pluck */])(props, UPDATABLE_FIELDS),
          title: props.title || new URLSearchParams(window.location.search).get('title') || ''
        });
      }
    });

    _defineProperty(this, "updateSheet", ({
      data = {},
      layout = defaultSheetLayout
    }) => {
      this.character.set(data);
      this.character.markAsClean();
      this.layout.set(layout);
      this.layout.markAsClean();
    });

    _defineProperty(this, "handleDelete", async () => {
      if (await Object(utilities_confirm["a" /* confirm */])('Are you sure you want to permanently delete this sheet?')) {
        const {
          slug
        } = this.context.router.query;
        const response = await external_isomorphic_unfetch_default()(`/api/sheet/${slug}`, {
          method: 'DELETE'
        });

        if (response.status === 204) {
          this.context.router.back();
        }
      }
    });

    _defineProperty(this, "handleReset", () => {
      this.character.reset();
      this.layout.reset();
      this.setState(this.state.saved);
    });

    _defineProperty(this, "handleSave", async payload => {
      const {
        slug
      } = this.context.router.query;
      const response = await external_isomorphic_unfetch_default()(`/api/sheet/${slug}`, {
        body: JSON.stringify(payload || {
          data: this.character.toJSON(),
          layout: this.layout.toJSON(),
          title: this.state.title
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });
      const json = await response.json();

      if (response.status === 200) {
        this.updateSheet(json);
        return this.setState(_objectSpread(_objectSpread({}, Object(pluck["a" /* pluck */])(json, STATE_FIELDS)), {}, {
          saved: Object(pluck["a" /* pluck */])(json, UPDATABLE_FIELDS)
        }));
      }

      return this.setState(json);
    });

    _defineProperty(this, "handleSheetChange", () => this.forceUpdate());

    _defineProperty(this, "handleTitleChange", title => this.setState({
      title
    }));

    _defineProperty(this, "handleToggleSecret", () => this.handleSave({
      secret: !this.state.secret
    }));

    _defineProperty(this, "handleToggleTemplate", () => this.handleSave({
      template: !this.state.template
    }));

    _defineProperty(this, "render", () => {
      const {
        httpStatusCode,
        message,
        slug
      } = this.props;
      const {
        _id,
        isEditor,
        isOwner,
        secret,
        template,
        title
      } = this.state;

      if (httpStatusCode !== 200) {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(_error["default"], _objectSpread({}, {
          httpStatusCode,
          message
        }));
      }

      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "sheet page",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "title-bar",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Editable["a" /* Editable */], {
            className: "title",
            onChange: this.handleTitleChange,
            readOnly: !isEditor,
            value: title
          }), isEditor && this.isDirty && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              className: "safe",
              onClick: () => this.handleSave(),
              children: _id ? 'Save' : 'Create'
            }), _id && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              className: "safe",
              onClick: this.handleReset,
              children: "Reset"
            })]
          }), _id && isEditor && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Toggle["a" /* Toggle */], {
              className: "secret",
              offIcon: public_default.a,
              onIcon: secret_default.a,
              onToggle: this.handleToggleSecret,
              value: secret
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Toggle["a" /* Toggle */], {
              className: "template",
              value: template,
              offIcon: template_default.a,
              onIcon: template_default.a,
              onToggle: this.handleToggleTemplate
            })]
          }), _id && isOwner && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: "delete danger",
            onClick: this.handleDelete,
            children: "Delete"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_custom_scrollbars_["Scrollbars"], {
          autoHide: true,
          universal: true,
          className: `sheet-container scrollbars ${isEditor ? 'is-editable' : 'readOnly'}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_sheetforge_["Sheet"], {
            readOnly: !isEditor,
            character: this.character,
            layout: this.layout,
            onChange: this.handleSheetChange
          }, slug)
        })]
      });
    });
  }

  get isDirty() {
    return this.state.title !== this.state.saved.title || this.character.isDirty || this.layout.isDirty;
  }

}

_defineProperty(sheet_Sheet, "contextType", Application["a" /* Application */]);

_defineProperty(sheet_Sheet, "defaultProps", {
  children: [],
  data: {},
  layout: defaultSheetLayout,
  slug: '',
  title: ''
});

_defineProperty(sheet_Sheet, "getInitialProps", async ({
  query,
  req
}) => {
  const headers = Object(pluck["a" /* pluck */])(req && req.headers, 'cookie');
  let url = `/api/sheet/${query.slug}`;
  if (query.template) url += `?template=${query.template}`;
  const response = await external_isomorphic_unfetch_default()(Object(URI["a" /* URI */])(req, url), {
    headers
  });
  const json = await response.json();
  return _objectSpread({
    httpStatusCode: response.status
  }, json);
});

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eORY":
/***/ (function(module, exports) {



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

/***/ "n6zW":
/***/ (function(module, exports) {

module.exports = require("sheetforge");

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

/***/ "s2Sc":
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