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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vL9u");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "ukGE":
/***/ (function(module, exports) {



/***/ }),

/***/ "vL9u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignupPage; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qhEq");
/* harmony import */ var _authPages_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ukGE");
/* harmony import */ var _authPages_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_authPages_scss__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
const USERNAME_REGEX = /[a-zA-Z0-9_-]{4,}/;
class SignupPage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      valid: false
    });

    _defineProperty(this, "email", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef());

    _defineProperty(this, "name", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef());

    _defineProperty(this, "password", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef());

    _defineProperty(this, "passwordConfirm", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef());

    _defineProperty(this, "username", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef());

    _defineProperty(this, "componentDidMount", () => {
      this.name.current.focus();
    });

    _defineProperty(this, "handleEmail", ({
      target
    }) => {
      // eslint-disable-next-line no-param-reassign
      target.value = target.value.toLowerCase();

      if (target.value.match(EMAIL_REGEX)) {
        target.classList.remove('invalid');
      } else {
        target.classList.add('invalid');
      }

      this.handleValidated();
    });

    _defineProperty(this, "handlePassword", ({
      target
    }) => {
      const {
        value
      } = target;

      if (value.match(PASSWORD_REGEX)) {
        target.classList.remove('invalid');
      } else {
        target.classList.add('invalid');
      }

      this.handleValidated();
    });

    _defineProperty(this, "handlePasswordConfirm", ({
      target
    }) => {
      if (target.value === this.password.current.value) {
        target.classList.remove('invalid');
      } else {
        target.classList.add('invalid');
      }

      this.handleValidated();
    });

    _defineProperty(this, "handleUsername", ({
      target
    }) => {
      // eslint-disable-next-line no-param-reassign
      target.value = target.value.toLowerCase().replace(/[^a-z0-9-_]+/g, '');

      if (target.value.match(USERNAME_REGEX)) {
        target.classList.remove('invalid');
      } else {
        target.classList.add('invalid');
      }

      this.handleValidated();
    });

    _defineProperty(this, "handleValidated", () => {
      let valid = true;
      ['email', 'password', 'passwordConfirm', 'username'].forEach(key => {
        const el = this[key].current;

        if (!el.value || el.matches(':invalid, .invalid')) {
          valid = false;
        }
      });
      this.setState({
        valid
      });
    });

    _defineProperty(this, "handleKeyPress", event => {
      switch (event.key) {
        case 'Enter':
          this.handleSubmit();
          break;

        case 'Escape':
          this.context.router.back();
          break;

        default:
      }
    });

    _defineProperty(this, "handleSubmit", async () => {
      if (!this.state.valid) {
        return;
      }

      const email = this.email.current.value;
      const name = this.name.current.value;
      const password = this.password.current.value;
      const username = this.username.current.value;
      const response = await fetch('/api/user', {
        body: JSON.stringify({
          email,
          name,
          password,
          username
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'PUT'
      });
      const json = await response.json();

      if (response.status === 200) {
        this.context.router.push(`/user?username=${username}`, `/user/${username}`);
      } else {
        this.setState(_objectSpread({
          message: ''
        }, json));
      }
    });

    _defineProperty(this, "render", () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "signup page",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
          children: "Sign Up"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          onChange: this.handleValidated,
          onKeyDown: this.handleKeyPress,
          placeholder: "Name (optional)",
          ref: this.name,
          type: "text"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          onChange: this.handleUsername,
          onKeyDown: this.handleKeyPress,
          pattern: "[a-zA-Z0-9_-]{4,}",
          placeholder: "Username",
          ref: this.username,
          type: "text"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "validation-message",
          children: "Length: 4+, letters, numbers, _ & -"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          onChange: this.handleEmail,
          onKeyDown: this.handleKeyPress,
          placeholder: "Email Address",
          ref: this.email,
          type: "email"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "validation-message",
          children: "Must be a valid e-mail address"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          onChange: this.handlePassword,
          onKeyDown: this.handleKeyPress,
          placeholder: "Password",
          ref: this.password,
          type: "password"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "validation-message",
          children: "At least 8 characters; must include one a-z, one A-Z, one 0-9 and 1 special character"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          onChange: this.handlePasswordConfirm,
          onKeyDown: this.handleKeyPress,
          placeholder: "Confirm Password",
          ref: this.passwordConfirm,
          type: "password"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "validation-message",
          children: "Must match password field"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "buttons",
          children: this.state.valid && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            className: "safe",
            onClick: this.handleSubmit,
            children: "Submit"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("center", {
          className: "message-field",
          children: this.state.message
        })]
      })
    }));
  }
  /* eslint-enable no-useless-escape */


}

_defineProperty(SignupPage, "contextType", _contexts_Application__WEBPACK_IMPORTED_MODULE_2__[/* Application */ "a"]);

/***/ })

/******/ });