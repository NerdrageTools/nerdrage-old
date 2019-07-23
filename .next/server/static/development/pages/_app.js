module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/entries.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/entries */ "core-js/library/fn/object/entries");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "../node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/toArray.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/toArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _toArray(arr) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "../node_modules/next/app.js":
/*!***********************************!*\
  !*** ../node_modules/next/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "../node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "../node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "../node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "../node_modules/next/dist/pages/_app.js":
/*!***********************************************!*\
  !*** ../node_modules/next/dist/pages/_app.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

var router_1 = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                _context.next = 3;
                return utils_1.loadGetInitialProps(Component, ctx);

              case 3:
                pageProps = _context.sent;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../node_modules/next/router.js":
/*!**************************************!*\
  !*** ../node_modules/next/router.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "../node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./components/CreateLinkDialog/CreateLinkDialog.js":
/*!*********************************************************!*\
  !*** ./components/CreateLinkDialog/CreateLinkDialog.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateLinkDialog; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Dialog */ "./components/Dialog/Dialog.js");
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _utilities_slugs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utilities/slugs */ "./utilities/slugs.js");
/* harmony import */ var _CreateLinkDialog_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CreateLinkDialog.scss */ "./components/CreateLinkDialog/CreateLinkDialog.scss");
/* harmony import */ var _CreateLinkDialog_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_CreateLinkDialog_scss__WEBPACK_IMPORTED_MODULE_7__);









var getTemplates =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(type) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("/api/templates/".concat(type.toLowerCase()));

          case 2:
            response = _context.sent;

            if (!(response.status === 200)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", response.json());

          case 5:
            return _context.abrupt("return", []);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getTemplates(_x) {
    return _ref.apply(this, arguments);
  };
}();

function CreateLinkDialog(_ref2) {
  var _ref2$defaultSlug = _ref2.defaultSlug,
      defaultSlug = _ref2$defaultSlug === void 0 ? '' : _ref2$defaultSlug,
      _ref2$defaultText = _ref2.defaultText,
      defaultText = _ref2$defaultText === void 0 ? '' : _ref2$defaultText,
      _ref2$onCancel = _ref2.onCancel,
      onCancel = _ref2$onCancel === void 0 ? _utilities_noop__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref2$onCancel,
      _ref2$onOk = _ref2.onOk,
      _onOk = _ref2$onOk === void 0 ? _utilities_noop__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref2$onOk,
      _ref2$slugLabel = _ref2.slugLabel,
      slugLabel = _ref2$slugLabel === void 0 ? 'Slug' : _ref2$slugLabel,
      _ref2$templateType = _ref2.templateType,
      templateType = _ref2$templateType === void 0 ? null : _ref2$templateType,
      _ref2$textLabel = _ref2.textLabel,
      textLabel = _ref2$textLabel === void 0 ? 'Text' : _ref2$textLabel,
      _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? 'Create Link' : _ref2$title;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(defaultText),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(defaultSlug),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      slug = _useState4[0],
      setSlug = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      auto = _useState6[0],
      setAuto = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      templates = _useState8[0],
      setTemplates = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      templateSlug = _useState10[0],
      setTemplate = _useState10[1];

  var slugInput = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var textInput = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var templateInput = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (templateType) getTemplates(templateType).then(setTemplates);
  }, [templateType]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    textInput.current.focus();
    textInput.current.select();
  }, [true]);

  var handleKeyDown = function handleKeyDown(_ref3) {
    var key = _ref3.key;

    switch (key) {
      case 'Escape':
        return onCancel();

      case 'Enter':
        return _onOk({
          slug: slug,
          templateSlug: templateSlug,
          text: text
        });

      default:
        return undefined;
    }
  };

  var handleSlug = function handleSlug(_ref4) {
    var target = _ref4.target;
    if (auto) setAuto(false);
    setSlug(Object(_utilities_slugs__WEBPACK_IMPORTED_MODULE_6__["slugify"])(target.value));
  };

  var handleText = function handleText(_ref5) {
    var target = _ref5.target;
    setText(target.value);
    if (auto) setSlug(Object(_utilities_slugs__WEBPACK_IMPORTED_MODULE_6__["slugify"])(target.value));
  };

  var handleTemplate = function handleTemplate(_ref6) {
    var target = _ref6.target;
    return setTemplate(target.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "create-link",
    modal: true,
    onCancel: onCancel,
    onKeyDown: handleKeyDown,
    onOk: function onOk() {
      return _onOk({
        slug: slug,
        templateSlug: templateSlug,
        text: text
      });
    },
    title: title
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "input-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, textLabel), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    value: text,
    onChange: handleText,
    ref: textInput,
    type: "text"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "input-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, slugLabel), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    value: slug,
    onChange: handleSlug,
    ref: slugInput,
    type: "text"
  })), templateType && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "input-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, "Template"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    onChange: handleTemplate,
    ref: templateInput,
    value: templateSlug
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    key: "none",
    value: ""
  }, "None"), templates.map(function (_ref7) {
    var slug = _ref7.slug,
        title = _ref7.title;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
      key: slug,
      value: slug
    }, title);
  }))));
}

/***/ }),

/***/ "./components/CreateLinkDialog/CreateLinkDialog.scss":
/*!***********************************************************!*\
  !*** ./components/CreateLinkDialog/CreateLinkDialog.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/CreateMenu/CreateMenu.js":
/*!*********************************************!*\
  !*** ./components/CreateMenu/CreateMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateMenu; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_FlyoutMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/FlyoutMenu */ "./components/FlyoutMenu/FlyoutMenu.js");
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");
/* harmony import */ var _icons_read_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/icons/read.svg */ "./icons/read.svg");
/* harmony import */ var _icons_read_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_icons_read_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _icons_sheet_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/icons/sheet.svg */ "./icons/sheet.svg");
/* harmony import */ var _icons_sheet_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_icons_sheet_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utilities_alert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/utilities/alert */ "./utilities/alert.js");
/* harmony import */ var _utilities_promptLink__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/utilities/promptLink */ "./utilities/promptLink.js");
/* harmony import */ var _CreateMenu_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CreateMenu.scss */ "./components/CreateMenu/CreateMenu.scss");
/* harmony import */ var _CreateMenu_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_CreateMenu_scss__WEBPACK_IMPORTED_MODULE_16__);


















var CreateMenu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CreateMenu, _Component);

  function CreateMenu() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CreateMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CreateMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "flyoutMenu", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleNew", function (type) {
      return (
        /*#__PURE__*/
        Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
          var lowered, _ref2, slug, templateSlug, text, href, asUrl;

          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this.flyoutMenu.current.close();

                  lowered = type.toLowerCase();
                  _context.prev = 2;
                  _context.next = 5;
                  return Object(_utilities_promptLink__WEBPACK_IMPORTED_MODULE_15__["default"])({
                    defaultSlug: "new-".concat(lowered),
                    defaultText: "New ".concat(type),
                    templateType: type,
                    title: "New ".concat(type, "...")
                  });

                case 5:
                  _ref2 = _context.sent;
                  slug = _ref2.slug;
                  templateSlug = _ref2.templateSlug;
                  text = _ref2.text;
                  href = "/".concat(lowered, "?slug=").concat(slug, "&title=").concat(text);
                  asUrl = "/".concat(lowered, "/").concat(slug, "?title=").concat(text);

                  if (templateSlug) {
                    href += "&template=".concat(templateSlug);
                    asUrl += "&template=".concat(templateSlug);
                  }

                  _this.context.router.push(href, asUrl);

                  _context.next = 17;
                  break;

                case 15:
                  _context.prev = 15;
                  _context.t0 = _context["catch"](2);

                case 17:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[2, 15]]);
        }))
      );
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleNewCampaign",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var rootUrl, _ref4, slug, text, response, json;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              rootUrl = _this.context.rootUrl;

              _this.flyoutMenu.current.close();

              _context2.prev = 2;
              _context2.next = 5;
              return Object(_utilities_promptLink__WEBPACK_IMPORTED_MODULE_15__["default"])({
                defaultSlug: 'new-campaign',
                defaultText: 'New Campaign',
                slugLabel: 'Subdomain',
                textLabel: 'Title',
                title: 'New Campaign...'
              });

            case 5:
              _ref4 = _context2.sent;
              slug = _ref4.slug;
              text = _ref4.text;
              _context2.next = 10;
              return fetch("/api/campaign/".concat(slug), {
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
                  subdomain: slug,
                  title: text
                }),
                credentials: 'include',
                method: 'PUT'
              });

            case 10:
              response = _context2.sent;

              if (!(response.status === 201)) {
                _context2.next = 15;
                break;
              }

              _this.context.router.push("//".concat(slug, ".").concat(rootUrl, "/campaign"), "//".concat(slug, ".").concat(rootUrl, "/campaign"));

              _context2.next = 19;
              break;

            case 15:
              _context2.next = 17;
              return response.json();

            case 17:
              json = _context2.sent;
              Object(_utilities_alert__WEBPACK_IMPORTED_MODULE_14__["default"])(json.message, 'Error');

            case 19:
              _context2.next = 23;
              break;

            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](2);

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[2, 21]]);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "render", function () {
      var children = _this.props.children;

      var _ref5 = _this.context.campaign || {},
          isEditor = _ref5.isEditor,
          isParticipant = _ref5.isParticipant;

      var _ref6 = _this.context.user || {},
          isAdmin = _ref6.isAdmin;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_FlyoutMenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "create",
        ref: _this.flyoutMenu
      }, isAdmin && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_FlyoutMenu__WEBPACK_IMPORTED_MODULE_10__["MenuItem"], {
        onClick: _this.handleNewCampaign
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_icons_sheet_svg__WEBPACK_IMPORTED_MODULE_13___default.a, null), " New Campaign..."), isEditor && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_FlyoutMenu__WEBPACK_IMPORTED_MODULE_10__["MenuItem"], {
        onClick: _this.handleNew('Article')
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_icons_read_svg__WEBPACK_IMPORTED_MODULE_12___default.a, null), " New Article..."), isParticipant && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_FlyoutMenu__WEBPACK_IMPORTED_MODULE_10__["MenuItem"], {
        onClick: _this.handleNew('Sheet')
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_icons_sheet_svg__WEBPACK_IMPORTED_MODULE_13___default.a, null), " New Sheet..."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("hr", null), children);
    });

    return _this;
  }

  return CreateMenu;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(CreateMenu, "contextType", _contexts_Application__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./components/CreateMenu/CreateMenu.scss":
/*!***********************************************!*\
  !*** ./components/CreateMenu/CreateMenu.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Dialog/Dialog.js":
/*!*************************************!*\
  !*** ./components/Dialog/Dialog.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ "react-draggable");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _Dialog_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dialog.scss */ "./components/Dialog/Dialog.scss");
/* harmony import */ var _Dialog_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Dialog_scss__WEBPACK_IMPORTED_MODULE_3__);




function Dialog(_ref) {
  var _ref$buttons = _ref.buttons,
      buttons = _ref$buttons === void 0 ? null : _ref$buttons,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$modal = _ref.modal,
      modal = _ref$modal === void 0 ? false : _ref$modal,
      _ref$onCancel = _ref.onCancel,
      onCancel = _ref$onCancel === void 0 ? _utilities_noop__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$onCancel,
      _ref$onKeyDown = _ref.onKeyDown,
      onKeyDown = _ref$onKeyDown === void 0 ? _utilities_noop__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$onKeyDown,
      _ref$onOk = _ref.onOk,
      onOk = _ref$onOk === void 0 ? _utilities_noop__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$onOk,
      _ref$showCancel = _ref.showCancel,
      showCancel = _ref$showCancel === void 0 ? true : _ref$showCancel,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Dialog' : _ref$title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dialog-wrapper ".concat(modal ? 'modal' : ''),
    onKeyDown: onKeyDown
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_1___default.a, {
    handle: ".dialog > .title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dialog ".concat(className)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body"
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttons"
  }, buttons || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "ok button safe",
    onClick: onOk
  }, "Ok"), showCancel && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "cancel button link",
    onClick: onCancel
  }, "Cancel"))))));
}

/***/ }),

/***/ "./components/Dialog/Dialog.scss":
/*!***************************************!*\
  !*** ./components/Dialog/Dialog.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/FlyoutMenu/FlyoutMenu.js":
/*!*********************************************!*\
  !*** ./components/FlyoutMenu/FlyoutMenu.js ***!
  \*********************************************/
/*! exports provided: default, MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlyoutMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons_menu_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/icons/menu.svg */ "./icons/menu.svg");
/* harmony import */ var _icons_menu_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_icons_menu_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _FlyoutMenu_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FlyoutMenu.scss */ "./components/FlyoutMenu/FlyoutMenu.scss");
/* harmony import */ var _FlyoutMenu_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_FlyoutMenu_scss__WEBPACK_IMPORTED_MODULE_9__);











var FlyoutMenu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FlyoutMenu, _Component);

  function FlyoutMenu() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FlyoutMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(FlyoutMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "state", {
      open: _this.props.open !== undefined ? _this.props.open : false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "el", react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "componentDidMount", function () {
      document.addEventListener('mousedown', _this.handleOutsideClick);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "componentWillUnmount", function () {
      document.removeEventListener('mousedown', _this.handleOutsideClick);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "close", function () {
      return _this.setState({
        open: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "open", function () {
      return _this.setState({
        open: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "handleOutsideClick", function (_ref) {
      var target = _ref.target;
      if (_this.state.open && !_this.el.current.contains(target)) _this.close();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "toggleOpen", function () {
      return _this.setState({
        open: !_this.state.open
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "render", function () {
      var _this$props = _this.props,
          children = _this$props.children,
          className = _this$props.className,
          Icon = _this$props.icon;
      var open = _this.props.open !== undefined ? _this.props.open : _this.state.open;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "".concat(className, " flyout menu ").concat(open ? 'open' : 'closed'),
        ref: _this.el
      }, open && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flyout-panel"
      }, children), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "menu-toggler",
        onClick: _this.toggleOpen
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Icon, null)));
    });

    return _this;
  }

  return FlyoutMenu;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(FlyoutMenu, "defaultProps", {
  children: [],
  className: '',
  icon: _icons_menu_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  open: undefined
});


function MenuItem(_ref2) {
  var _ref2$children = _ref2.children,
      children = _ref2$children === void 0 ? null : _ref2$children,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      _ref2$onClick = _ref2.onClick,
      onClick = _ref2$onClick === void 0 ? _utilities_noop__WEBPACK_IMPORTED_MODULE_8__["default"] : _ref2$onClick;
  var clickable = onClick !== _utilities_noop__WEBPACK_IMPORTED_MODULE_8__["default"];
  var classNames = [className, 'menu-item', clickable ? 'clickable' : ''].filter(Boolean).join(' ');
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: classNames,
    onClick: onClick
  }, children);
}

/***/ }),

/***/ "./components/FlyoutMenu/FlyoutMenu.scss":
/*!***********************************************!*\
  !*** ./components/FlyoutMenu/FlyoutMenu.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Navigation */ "./components/Navigation/Navigation.js");
/* harmony import */ var _components_SearchBox_ArticleSearchBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/SearchBox/ArticleSearchBox */ "./components/SearchBox/ArticleSearchBox/ArticleSearchBox.js");
/* harmony import */ var _components_UserMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/UserMenu */ "./components/UserMenu/UserMenu.js");
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");
/* harmony import */ var _icons_fist_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/icons/fist.svg */ "./icons/fist.svg");
/* harmony import */ var _icons_fist_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_icons_fist_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _icons_Navigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/icons/Navigation */ "./icons/Navigation.js");
/* harmony import */ var _utilities_debounce__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/utilities/debounce */ "./utilities/debounce.js");
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Layout.scss */ "./components/Layout/Layout.scss");
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Layout_scss__WEBPACK_IMPORTED_MODULE_15__);

















var getWindowSize = function getWindowSize() {
  if (typeof window === 'undefined') return 'server';
  if (window.matchMedia('(min-width: 551px) and (max-width: 979px)').matches) return 'medium';
  if (window.matchMedia('(max-width: 550px)').matches) return 'small';
  return 'large';
};

var Layout =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout, _Component);

  function Layout() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "state", {
      expanded: false,
      size: getWindowSize(),
      ssrDone: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "navigation", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "navigationIcon", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "handleWindowResize", Object(_utilities_debounce__WEBPACK_IMPORTED_MODULE_14__["default"])(function () {
      var size = getWindowSize();

      _this.setState({
        size: size
      });

      _this.context.setSize(size);
    }, 100));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "componentDidMount", function () {
      _this.setState({
        ssrDone: true
      });

      _this.handleWindowResize();

      window.addEventListener('resize', _this.handleWindowResize);
      document.addEventListener('mousedown', _this.handleOutsideNavClick);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "componentWillUnmount", function () {
      window.removeEventListener('resize', _this.handleWindowResize);
      document.removeEventListener('mousedown', _this.handleOutsideNavClick);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "collapseNavigation", function () {
      _this.setState({
        expanded: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "toggleNavigation", function () {
      _this.setState({
        expanded: !_this.state.expanded
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "handleOutsideNavClick", function (_ref) {
      var target = _ref.target;

      if (_this.state.expanded // only collapse if expanded
      && !_this.navigation.current.contains(target) // and the click isn't in the nav
      && _this.navigationIcon.current !== target // and the click isn't on the nav icon
      ) {
          _this.collapseNavigation();
        }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "render", function () {
      var className = _this.props.className;
      var _this$context = _this.context,
          campaign = _this$context.campaign,
          theme = _this$context.theme;
      var _this$state = _this.state,
          expanded = _this$state.expanded,
          size = _this$state.size;
      var title = campaign ? campaign.title : 'Unknown Campaign';
      var classNames = ['wiki layout', className, expanded ? 'expand-navigation' : 'collapse-navigation', _this.state.ssrDone ? size : 'server'].filter(Boolean).join(' ');
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        key: "content-font",
        href: "//fonts.googleapis.com/css?family=".concat(theme.fontForText, "|").concat(theme.fontForTitles),
        rel: "stylesheet"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classNames
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "logo"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_icons_fist_svg__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: "logo x2"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "nerd"
      }, "Nerd"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "rage"
      }, "RAGE")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SearchBox_ArticleSearchBox__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_icons_Navigation__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "navigation toggle",
        onClick: _this.toggleNavigation,
        wrapperRef: _this.navigationIcon
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_UserMenu__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onItemClick: _this.collapseNavigation,
        wrapperRef: _this.navigation
      }), _this.props.children)));
    });

    return _this;
  }

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, "contextType", _contexts_Application__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./components/Layout/Layout.scss":
/*!***************************************!*\
  !*** ./components/Layout/Layout.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Link/Link.js":
/*!*********************************!*\
  !*** ./components/Link/Link.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Link; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "../node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");







function Link(_ref) {
  var active = _ref.active,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$query = _ref.query,
      query = _ref$query === void 0 ? null : _ref$query,
      _ref$slug = _ref.slug,
      slug = _ref$slug === void 0 ? '' : _ref$slug,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'article' : _ref$type,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["active", "children", "className", "query", "slug", "type"]);

  var context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_contexts_Application__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var subdomain = props.subdomain || context.subdomain;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_contexts_Application__WEBPACK_IMPORTED_MODULE_6__["default"]),
      rootUrl = _useContext.rootUrl;

  var contents = children || type;
  var queryString = !query ? '' : "".concat(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(query).map(function (_ref2) {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    return "".concat(key, "=").concat(value);
  }).join('&'));

  if (active) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      className: "active link",
      title: contents
    }, contents);
  }

  if (subdomain && (!context.campaign || subdomain !== context.campaign.subdomain)) {
    var _href = "//".concat(subdomain, ".").concat(rootUrl, "/").concat(type);

    if (type !== 'campaign') _href += "/".concat(slug);
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      href: _href,
      subdomain: subdomain
    }), contents);
  }

  var as = "/".concat(type);
  var href = "/".concat(type);

  if (type !== 'campaign') {
    if (slug) {
      as += "/".concat(slug);
      href += "?slug=".concat(slug);
    }

    if (queryString) {
      as += "?".concat(queryString);
      href += "&".concat(queryString);
    }
  } else if (queryString) {
    as += "?".concat(queryString);
    href += "?".concat(queryString);
  }

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    as: as,
    href: href
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: className,
    href: as
  }), contents));
}

/***/ }),

/***/ "./components/Navigation/Navigation.js":
/*!*********************************************!*\
  !*** ./components/Navigation/Navigation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sortablejs */ "sortablejs");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/Link */ "./components/Link/Link.js");
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");
/* harmony import */ var _icons_campaign_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/icons/campaign.svg */ "./icons/campaign.svg");
/* harmony import */ var _icons_campaign_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_icons_campaign_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/icons/edit.svg */ "./icons/edit.svg");
/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_icons_edit_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/icons/favorite-on.svg */ "./icons/favorite-on.svg");
/* harmony import */ var _icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _icons_remove_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/icons/remove.svg */ "./icons/remove.svg");
/* harmony import */ var _icons_remove_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_icons_remove_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _icons_sheet_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/icons/sheet.svg */ "./icons/sheet.svg");
/* harmony import */ var _icons_sheet_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_icons_sheet_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _utilities_pluck__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/utilities/pluck */ "./utilities/pluck.js");
/* harmony import */ var _utilities_prompt__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/utilities/prompt */ "./utilities/prompt.js");
/* harmony import */ var _Navigation_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Navigation.scss */ "./components/Navigation/Navigation.scss");
/* harmony import */ var _Navigation_scss__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_Navigation_scss__WEBPACK_IMPORTED_MODULE_25__);



























var Navigation =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Navigation, _Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "campaignNav", react__WEBPACK_IMPORTED_MODULE_12___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "initializeSortable", function () {
      if (!_this.campaignNav.current) return;
      if (_this.sortable) _this.sortable.destroy();

      var ul = _this.campaignNav.current.querySelector('ul');

      var navigation = _this.context.campaign.navigation;
      _this.sortable = sortablejs__WEBPACK_IMPORTED_MODULE_14___default.a.create(ul, {
        disabled: !_this.isCampaignEditor || _this.context.size === 'small',
        dragClass: 'dragging',
        draggable: 'li',
        onEnd: function onEnd() {
          var updated = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(ul.querySelectorAll('li')).map(function (li) {
            return li.getAttribute('data-id');
          }).map(function (id) {
            return navigation.find(function (navLink) {
              return navLink._id === id;
            });
          }).filter(Boolean);

          _this.context.updateCampaign({
            navigation: updated
          });
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "promptForLinkDetails",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var item,
          title,
          slug,
          _args = arguments;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              item = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              _context.prev = 1;
              _context.next = 4;
              return Object(_utilities_prompt__WEBPACK_IMPORTED_MODULE_24__["default"])('New Title?', {
                defaultValue: item.title,
                title: 'Set Title'
              });

            case 4:
              title = _context.sent;

              if (title) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", undefined);

            case 7:
              _context.next = 9;
              return Object(_utilities_prompt__WEBPACK_IMPORTED_MODULE_24__["default"])('Slug to link to?', {
                defaultValue: item.slug,
                placeholder: 'Leave blank to create a header...',
                title: 'Set Slug'
              });

            case 9:
              slug = _context.sent;
              return _context.abrupt("return", {
                slug: slug,
                title: title
              });

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              return _context.abrupt("return", null);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 13]]);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleAddLink",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      var newLink;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.promptForLinkDetails();

            case 2:
              newLink = _context2.sent;

              if (newLink) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return");

            case 5:
              _this.context.updateCampaign({
                navigation: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.context.campaign.navigation).concat([newLink])
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleDelete", function (_ref3) {
      var currentTarget = _ref3.currentTarget;
      var id = currentTarget.getAttribute('data-id');
      var navigation = _this.context.campaign.navigation;

      _this.context.updateCampaign({
        navigation: navigation.filter(function (item) {
          return item._id !== id;
        })
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleEdit",
    /*#__PURE__*/
    function () {
      var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(_ref4) {
        var currentTarget, id, navigation, item, edited;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                currentTarget = _ref4.currentTarget;
                id = currentTarget.getAttribute('data-id');
                navigation = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.context.campaign.navigation);
                item = navigation.find(function (navItem) {
                  return navItem._id === id;
                });

                if (item) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return");

              case 6:
                _context3.next = 8;
                return _this.promptForLinkDetails(item);

              case 8:
                edited = _context3.sent;

                if (edited) {
                  _context3.next = 11;
                  break;
                }

                return _context3.abrupt("return");

              case 11:
                navigation.splice(navigation.indexOf(item), 1, edited);

                _this.context.updateCampaign({
                  navigation: navigation
                });

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x) {
        return _ref5.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "renderList", function () {
      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var listTitle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'article';
      var campaignLink = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, (campaignLink || Boolean(list.length)) && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "list-title"
      }, campaignLink || listTitle), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("ul", null, list.map(function (_ref6, index) {
        var _id = _ref6._id,
            campaign = _ref6.campaign,
            slug = _ref6.slug,
            title = _ref6.title;

        var _ref7 = campaign || _this.context.campaign || {},
            _ref7$subdomain = _ref7.subdomain,
            subdomain = _ref7$subdomain === void 0 ? '' : _ref7$subdomain,
            _ref7$title = _ref7.title,
            cTitle = _ref7$title === void 0 ? '' : _ref7$title;

        var text = title;

        if (type !== 'campaign' && subdomain && subdomain !== _this.context.subdomain) {
          text += " (".concat(cTitle || subdomain, ")");
        }

        if (!slug) {
          return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("li", {
            key: _id || index,
            className: "section",
            "data-id": _id,
            title: title
          }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", null, text), _this.context.campaign.isEditor && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
            className: "controls"
          }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_icons_edit_svg__WEBPACK_IMPORTED_MODULE_18___default.a, {
            className: "edit",
            "data-id": _id,
            onClick: _this.handleEdit
          }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_icons_remove_svg__WEBPACK_IMPORTED_MODULE_20___default.a, {
            className: "delete",
            "data-id": _id,
            onClick: _this.handleDelete
          })));
        }

        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("li", {
          key: _id || index,
          "data-id": _id,
          title: title
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          campaign: campaign,
          slug: slug,
          type: type
        }, {
          active: _this.context.subdomain === subdomain && _this.context.router.asPath === "/".concat(type, "/").concat(slug),
          onClick: _this.props.onItemClick
        }), text), _this.context.campaign.isEditor && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "controls"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_icons_edit_svg__WEBPACK_IMPORTED_MODULE_18___default.a, {
          className: "edit",
          "data-id": _id,
          onClick: _this.handleEdit
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_icons_remove_svg__WEBPACK_IMPORTED_MODULE_20___default.a, {
          className: "delete",
          "data-id": _id,
          onClick: _this.handleDelete
        })));
      })));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "filterLinks", function (link) {
      return link.campaign.subdomain === _this.context.campaign.subdomain;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "render", function () {
      var _this$context = _this.context,
          campaign = _this$context.campaign,
          _this$context$user = _this$context.user,
          user = _this$context$user === void 0 ? {} : _this$context$user;
      var _user$favorites = user.favorites,
          favorites = _user$favorites === void 0 ? [] : _user$favorites,
          _user$sheets = user.sheets,
          sheets = _user$sheets === void 0 ? [] : _user$sheets;
      if (!campaign || !campaign.navigation) return null;
      var navigation = campaign.navigation.map(function (link) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, link, {
          campaign: Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_23__["default"])(campaign, '_id', 'subdomain', 'title')
        });
      });
      favorites = favorites.filter(_this.filterLinks);
      sheets = sheets.filter(_this.filterLinks);
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "navigation"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_13__["Scrollbars"], {
        className: "scrollbars link-sections",
        autoHide: true,
        universal: true
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "content",
        ref: _this.props.wrapperRef
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "campaign-nav",
        ref: _this.campaignNav
      }, _this.renderList(navigation, campaign.title, 'article', react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_icons_campaign_svg__WEBPACK_IMPORTED_MODULE_17___default.a, null), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_15__["default"], {
        subdomain: campaign.subdomain,
        type: "campaign"
      }, campaign.title)))), user && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, Boolean(favorites.length) && _this.renderList(favorites, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_19___default.a, null), " Favorites")), Boolean(sheets.length) && _this.renderList(sheets, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_icons_sheet_svg__WEBPACK_IMPORTED_MODULE_21___default.a, null), " Sheets"), 'sheet')))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "footer"
      }, campaign.isEditor && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "buttons"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
        className: "add safe",
        onClick: _this.handleAddLink
      }, "Add Link")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_15__["default"], {
        subdomain: "www",
        slug: "tos",
        type: "article"
      }, "Terms of Service")));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Navigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initializeSortable();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.initializeSortable();
    }
  }, {
    key: "isCampaignEditor",
    get: function get() {
      return Boolean(this.context.campaign && this.context.campaign.isEditor);
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Navigation, "contextType", _contexts_Application__WEBPACK_IMPORTED_MODULE_16__["default"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Navigation, "defaultProps", {
  items: [],
  onItemClick: _utilities_noop__WEBPACK_IMPORTED_MODULE_22__["default"],
  wrapperRef: _utilities_noop__WEBPACK_IMPORTED_MODULE_22__["default"]
});



/***/ }),

/***/ "./components/Navigation/Navigation.scss":
/*!***********************************************!*\
  !*** ./components/Navigation/Navigation.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/SearchBox/ArticleSearchBox/ArticleSearchBox.js":
/*!*******************************************************************!*\
  !*** ./components/SearchBox/ArticleSearchBox/ArticleSearchBox.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArticleSearchBox; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/SearchBox */ "./components/SearchBox/SearchBox.js");
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");











var ArticleSearchBox =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ArticleSearchBox, _Component);

  function ArticleSearchBox() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ArticleSearchBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ArticleSearchBox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleHotKey", function (_, __, ref) {
      ref.inputBox.current.focus();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleSelect", function (option) {
      var router = _this.context.router;

      if (option) {
        router.push("/article?slug=".concat(option.slug), "/article/".concat(option.slug));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "renderOption", function (option, _, itemProps) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: option.slug,
        className: "search-result"
      }, itemProps), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        className: "title"
      }, option.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "preview"
      }, option.preview.map(function (preview, key) {
        return (// eslint-disable-next-line react/no-danger
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            key: key,
            dangerouslySetInnerHTML: {
              __html: preview
            }
          })
        );
      })));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SearchBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "article",
        clearOnSelect: true,
        hotkeys: {
          focus: {
            ctrlKey: true,
            key: 'F',
            shiftKey: true
          }
        },
        onHotKey: _this.handleHotKey,
        onSelect: _this.handleSelect,
        placeholder: "Search... (Ctrl+Shift+F)",
        renderOption: _this.renderOption,
        url: "/api/search/articles/:searchTerm"
      });
    });

    return _this;
  }

  return ArticleSearchBox;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(ArticleSearchBox, "contextType", _contexts_Application__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./components/SearchBox/SearchBox.js":
/*!*******************************************!*\
  !*** ./components/SearchBox/SearchBox.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBox; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "../node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! downshift */ "downshift");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(downshift__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");
/* harmony import */ var _icons_loading_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/icons/loading.svg */ "./icons/loading.svg");
/* harmony import */ var _icons_loading_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_icons_loading_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _icons_search_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/icons/search.svg */ "./icons/search.svg");
/* harmony import */ var _icons_search_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_icons_search_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utilities_debounce__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/utilities/debounce */ "./utilities/debounce.js");
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _utilities_objectMatch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/utilities/objectMatch */ "./utilities/objectMatch.js");
/* harmony import */ var _SearchBox_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SearchBox.scss */ "./components/SearchBox/SearchBox.scss");
/* harmony import */ var _SearchBox_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_SearchBox_scss__WEBPACK_IMPORTED_MODULE_20__);






















var SearchBox =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(SearchBox, _Component);

  function SearchBox() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, SearchBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(SearchBox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "state", {
      message: null,
      options: [],
      searchTerm: _this.props.initialValue
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "downshift", react__WEBPACK_IMPORTED_MODULE_13___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "inputBox", react__WEBPACK_IMPORTED_MODULE_13___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "debouncedSearch", Object(_utilities_debounce__WEBPACK_IMPORTED_MODULE_17__["default"])(
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
      var searchTerm,
          _this$props,
          limit,
          url,
          searchUrl,
          queryString,
          response,
          json,
          _args = arguments;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              searchTerm = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
              _this$props = _this.props, limit = _this$props.limit, url = _this$props.url;

              if (!(!url || !searchTerm || searchTerm.length < 3)) {
                _context.next = 5;
                break;
              }

              _this.setState({
                message: 'Enter at least 3 characters...',
                options: [],
                searching: false
              });

              return _context.abrupt("return", undefined);

            case 5:
              searchUrl = url.replace(':searchTerm', searchTerm);
              queryString = "limit=".concat(limit);
              _context.next = 9;
              return fetch("".concat(searchUrl, "?").concat(queryString));

            case 9:
              response = _context.sent;
              _context.next = 12;
              return response.json();

            case 12:
              json = _context.sent;

              if (!(response.status === 200 && json.length)) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return", _this.setState({
                message: '',
                options: json,
                searching: false
              }));

            case 15:
              return _context.abrupt("return", _this.setState({
                message: json.message || 'No results found...',
                options: [],
                searching: false
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })), 500));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "componentDidMount", function () {
      document.addEventListener('keydown', _this.handleHotKeys);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "componentWillUnmount", function () {
      document.removeEventListener('keydown', _this.handleHotKeys);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleFocus", function () {
      if (_this.props.selectOnFocus) {
        _this.inputBox.current.select();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleHotKeys", function (event) {
      _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default()(_this.props.hotkeys).forEach(function (_ref2) {
        var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, 2),
            name = _ref3[0],
            keyCombo = _ref3[1];

        if (Object(_utilities_objectMatch__WEBPACK_IMPORTED_MODULE_19__["default"])(event, keyCombo)) {
          _this.props.onHotKey(name, event, Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)));
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleKeyDown", function (event) {
      if (event.key === 'Escape') {
        _this.setState({
          searching: false,
          searchTerm: _this.props.initialValue
        });

        _this.inputBox.current.blur();

        _this.escapeKey = true; // eslint-disable-next-line no-param-reassign

        event.nativeEvent.preventDownshiftDefault = true;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleSearch", function (event) {
      var _event$target$value = event.target.value,
          searchTerm = _event$target$value === void 0 ? '' : _event$target$value;

      if (_this.escapeKey) {
        _this.escapeKey = false;
        return;
      }

      _this.setState({
        message: 'Searching...',
        searching: Boolean(searchTerm),
        searchTerm: searchTerm
      });

      if (searchTerm) {
        _this.debouncedSearch(searchTerm);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleSelect", function (option) {
      var _this$props2 = _this.props,
          clearOnSelect = _this$props2.clearOnSelect,
          onSelect = _this$props2.onSelect,
          valueGetter = _this$props2.valueGetter;
      onSelect(option);

      _this.inputBox.current.blur();

      if (clearOnSelect) {
        _this.setState({
          searching: false,
          searchTerm: ''
        });
      } else {
        _this.setState({
          searching: false,
          searchTerm: valueGetter(option)
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "renderOption", function (option, index, itemProps) {
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("li", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        key: index,
        className: "search-result"
      }, itemProps), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
        className: "title"
      }, option.title), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "preview"
      }, option.preview, "..."));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "render", function () {
      var _this$props3 = _this.props,
          className = _this$props3.className,
          placeholder = _this$props3.placeholder,
          props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props3, ["className", "placeholder"]);

      var _this$state = _this.state,
          message = _this$state.message,
          options = _this$state.options,
          searching = _this$state.searching,
          searchTerm = _this$state.searchTerm;
      var theme = _this.context.theme;
      var renderOption = _this.props.renderOption || _this.renderOption;
      var OverlayIcon = searching ? _icons_loading_svg__WEBPACK_IMPORTED_MODULE_15___default.a : _icons_search_svg__WEBPACK_IMPORTED_MODULE_16___default.a;

      var inputHasFocus = _this.inputBox.current && _this.inputBox.current.matches(':focus');

      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(downshift__WEBPACK_IMPORTED_MODULE_12___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        id: "search-box",
        ref: _this.downshift
      }, props, {
        itemToString: function itemToString(article) {
          return article ? article.title : '';
        },
        isOpen: Boolean(searchTerm) && inputHasFocus,
        onSelect: _this.handleSelect
      }), function (_ref4) {
        var getInputProps = _ref4.getInputProps,
            getItemProps = _ref4.getItemProps,
            getMenuProps = _ref4.getMenuProps,
            isOpen = _ref4.isOpen;
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: "".concat(className, " search-box ").concat(isOpen ? 'open' : 'closed'),
          style: {
            color: theme.normalText
          }
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getInputProps({
          onKeyDown: _this.handleKeyDown
        }), {
          className: "input",
          ref: _this.inputBox,
          onChange: _this.handleSearch,
          onFocus: _this.handleFocus,
          placeholder: placeholder,
          value: searchTerm
        })), searching || !options.length ? isOpen && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: "search-results message"
        }, message) : isOpen && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("ul", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getMenuProps(), {
          className: "search-results list"
        }), options.map(function (option, index) {
          return renderOption(option, index, getItemProps({
            index: index,
            item: option,
            key: option._id
          }));
        })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(OverlayIcon, {
          className: "search icon"
        }));
      });
    });

    return _this;
  }

  return SearchBox;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(SearchBox, "contextType", _contexts_Application__WEBPACK_IMPORTED_MODULE_14__["default"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(SearchBox, "defaultProps", {
  className: '',
  clearOnSelect: false,
  hotkeys: {},
  initialValue: '',
  limit: 10,
  onHotKey: _utilities_noop__WEBPACK_IMPORTED_MODULE_18__["default"],
  onSelect: _utilities_noop__WEBPACK_IMPORTED_MODULE_18__["default"],
  placeholder: 'Search...',
  renderOption: null,
  selectOnFocus: true,
  url: '',
  valueGetter: function valueGetter(option) {
    return option;
  }
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(SearchBox, "displayName", 'SearchBox');



/***/ }),

/***/ "./components/SearchBox/SearchBox.scss":
/*!*********************************************!*\
  !*** ./components/SearchBox/SearchBox.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/UserMenu/UserMenu.js":
/*!*****************************************!*\
  !*** ./components/UserMenu/UserMenu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserMenu; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_CreateMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/CreateMenu */ "./components/CreateMenu/CreateMenu.js");
/* harmony import */ var _components_FlyoutMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/FlyoutMenu */ "./components/FlyoutMenu/FlyoutMenu.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Link */ "./components/Link/Link.js");
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");
/* harmony import */ var _icons_logout_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/icons/logout.svg */ "./icons/logout.svg");
/* harmony import */ var _icons_logout_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_icons_logout_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _UserMenu_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./UserMenu.scss */ "./components/UserMenu/UserMenu.scss");
/* harmony import */ var _UserMenu_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_UserMenu_scss__WEBPACK_IMPORTED_MODULE_12__);














var UserMenu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(UserMenu, _Component);

  function UserMenu() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(UserMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "renderAnonymous", function () {
      var _this$context$router = _this.context.router,
          asPath = _this$context$router.asPath,
          query = _this$context$router.query;
      var redirectTo = query.redirectTo || asPath;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "login",
        query: {
          redirectTo: redirectTo
        }
      }, "Log In"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "divider"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "signup"
      }, "Sign Up"));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "renderLoggedIn", function () {
      var username = _this.context.user.username;
      var MenuType = _this.context.campaign ? _components_CreateMenu__WEBPACK_IMPORTED_MODULE_7__["default"] : _components_FlyoutMenu__WEBPACK_IMPORTED_MODULE_8__["default"];
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "username"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, "logged in as"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "user",
        slug: username
      }, username)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "divider"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MenuType, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_FlyoutMenu__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
        className: "logoff",
        onClick: _this.context.logOff
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_icons_logout_svg__WEBPACK_IMPORTED_MODULE_11___default.a, null), " Log Out")));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "render", function () {
      var user = _this.context.user;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "user-menu"
      }, !user || user.anonymous ? _this.renderAnonymous() : _this.renderLoggedIn());
    });

    return _this;
  }

  return UserMenu;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(UserMenu, "contextType", _contexts_Application__WEBPACK_IMPORTED_MODULE_10__["default"]);



/***/ }),

/***/ "./components/UserMenu/UserMenu.scss":
/*!*******************************************!*\
  !*** ./components/UserMenu/UserMenu.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./contexts/Application.js":
/*!*********************************!*\
  !*** ./contexts/Application.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CAMPAIGN_DEFAULTS = {
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
var USER_DEFAULTS = {
  anonymous: true
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  campaign: CAMPAIGN_DEFAULTS,
  user: USER_DEFAULTS
}));

/***/ }),

/***/ "./data/defaultTheme.js":
/*!******************************!*\
  !*** ./data/defaultTheme.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  background: '#fff',
  fontForText: 'Ubuntu',
  fontForTitles: 'Ubuntu',
  fontSize: '16px',
  normalText: '#333',
  primary: '#f00',
  primaryText: '#fff'
});

/***/ }),

/***/ "./icons/Navigation.js":
/*!*****************************!*\
  !*** ./icons/Navigation.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavigationIcon; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");




function NavigationIcon(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Navigation' : _ref$title,
      _ref$wrapperRef = _ref.wrapperRef,
      wrapperRef = _ref$wrapperRef === void 0 ? _utilities_noop__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref$wrapperRef,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["title", "wrapperRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    ref: wrapperRef
  }, props), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M32 22.272v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.704 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424h-9.12v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.736 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424h-9.12v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.736 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424q0-0.928 0.672-1.632t1.632-0.672h9.12v-3.424h-1.696q-0.736 0-1.216-0.512t-0.512-1.184v-5.728q0-0.704 0.512-1.216t1.216-0.512h5.696q0.736 0 1.216 0.512t0.512 1.216v5.728q0 0.704-0.512 1.184t-1.216 0.512h-1.696v3.424h9.12q0.928 0 1.632 0.672t0.672 1.632v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216z"
  }));
}

/***/ }),

/***/ "./icons/book.png":
/*!************************!*\
  !*** ./icons/book.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkdJREFUeNqUUz1vE0EQfbt3e3ZwnICDk2AXSEFBIEsERIVER0eBKxoq6ggqGv4H0KcBRBco+BA9KBJSIkcxYAkJGzCJDIY4Ocucb3eY3bOJQSiI0Y20HzNv35uZEydvPseDywFyfhe19y3M5Cdp7sSZzWajdiM7kb23sfEWvueDIACjYcigVCphfUvj2qNvkBgYEVnPkTFIH8rPzi1cuKu1fqENrWhNxOse+6LR8VljaJgGn5fLvC/bw+L0OCLNJwxioWeLx859b7xCrjAPNX4kFYvMnTDcBWNBG8kPiocWoFxI7eJwfgrdcAfvPnUsHcsJYOqSYk4wGPMVJqcKyKsDfLUNFa3AQJSdBKYGy8o4Gdgzcp+TZ5iV4RpwFCcY/mJ3yQACFMcYzdvXBoGGcyBEUkTNlRX4PzMszZoDIB3/fiss3D6QfGW7NQBgCVYPBkk2WXj/ABKJBAdg0biIw7jsmMHH1y/R7XzhLijGEH+FIFdQngOnx9ga2JclDmYCRL0mmpUacsVT8GwrPQ9SegwmXYxllnSEiyh5o5SEDHyknCtEkUZ3p4ftz1XX2q9bLfzoduAF6eR5mXZxnAxfsdx6dRXVSoWDRUKZXVtG7UIyVOE6Gm/WmOp9NxNSSmQU8T9SZgDEncV6eUJzMo0UqU8SS8efud3VD5eghB5tAjxBCNDv2PXC0YvXT5Pu6+Ffpfu9aOb8ldtaBNPuKGw9ba8+WZI+axSuNdwo5dUf31obFjizN2O/5m2eXQ32bfbNP3pq1+FPAQYA17kRbxpFka4AAAAASUVORK5CYII="

/***/ }),

/***/ "./icons/campaign.svg":
/*!****************************!*\
  !*** ./icons/campaign.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Campaign (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"Campaign"),React.createElement("path",{"d":"M967.090176 396.722176c7.395328-33.284096-49.926144-81.360896-72.116224-3.69664-16.64 53.622784 5.548032 79.511552-1.847296 85.057536-7.397376 5.545984-279.218176 334.690304-323.59424 386.465792-64.720896-20.338688-323.596288-94.304256-403.10784-120.193024-81.360896-48.0768-51.777536-173.815808 5.545984-157.17376 38.83008 11.094016 290.310144 85.057536 334.688256 98.004992 42.530816 12.941312 59.172864 22.19008 90.607616-16.644096 44.376064-53.624832 323.596288-373.522432 356.880384-408.653824 24.035328-27.736064 33.282048-66.568192-18.49344-75.814912-53.624832-11.094016-358.72768-83.208192-403.105792-90.605568-42.528768-7.395328-53.624832-18.489344-96.1536 33.284096C414.205952 154.488832 133.138432 468.8384 96.157696 507.670528 55.476224 550.199296-3.694592 751.753216 140.535808 807.225344c144.2304 49.926144 321.746944 99.852288 403.10784 123.891712 36.984832 11.094016 61.022208 16.64 83.212288-20.342784 22.188032-36.982784 310.65088-371.67104 332.84096-401.256448 20.340736-27.736064 9.244672-3.698688 3.698688-53.624832-5.552128-49.926144-1.851392-33.282048 3.694592-59.170816z m-543.639552-125.741056c16.642048-20.340736 18.489344-24.037376 24.037376-29.585408 16.642048-16.642048 36.982784-12.94336 55.474176-9.24672 12.94336 1.849344 218.195968 53.624832 231.13728 55.474176 12.945408 3.698688 51.777536 9.244672 31.4368 33.284096-22.188032 25.888768-20.340736 24.037376-27.736064 31.434752-7.39328 7.395328-24.037376 12.94336-51.77344 5.545984-24.039424-7.395328-221.894656-53.624832-238.538752-55.472128-16.64-1.847296-40.679424-11.091968-24.037376-31.434752z","key":1})]);
}

Campaign.defaultProps = {"version":"1.1","viewBox":"0 0 1024 1024","height":"512"};

module.exports = Campaign;

Campaign.default = Campaign;


/***/ }),

/***/ "./icons/combo.png":
/*!*************************!*\
  !*** ./icons/combo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAVFBMVEUAAAAAAAABAQECAwIECAUFCQYGCwgHDAgJEQsLEwwZLB4cMSEcMiIdNCIlQCsmQy5CdE1CdE5GelJGe1JJgldKg1dMhVlOiVtUlGNWmGZXmWZYmmekGyzIAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiAxEALylo8/oCAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAGhJREFUGNNlkIkKwCAMQ1vdobtP7bb//88VxWMzUDB5UKMALGRBknNZFE4xSeQDUNRKYspxXE+jHfTp/BDZFvx6np49bcJjHrGwv4aAEaqD6J7iSkRl7N5hdrfUjfi1/JUr6xcPzL7gBZH6AvJF97rbAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./icons/dice.gif":
/*!************************!*\
  !*** ./icons/dice.gif ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAOcSURBVHjaYvz//z+Dh4cHw69fvxh+/PjBICwszPD06VMmVlZWHX5+/ghTU9NAWVlZpZkzZx66cOGCLwMDww9GRkYGEADRAAHEAmL8+/eP4ffv3ww/f/6UBNJpBgYGfhYWFloaGpocP39+Z1BSUmHQ0dFxycnJOXTx4kUnoKVfYIYABBADyAWenp4pCQkJxydNmvTt5MmT/9+/f/8fBG7duv3f3z/of0ND6/8/f37/P3PmzH9HR8fbQH3yIAOYmJgYAAIIbEBbW9ufb9++/YcBoIv+v3v3/n9f38T/zc0d/x8+fPT/5ctXYINv3Ljx38/P7znQED2QAwACiAlEMDMzM718+ZLhz58/YO+ADAWKMXz58h0YNn8YuLg4GdjYWBiAljCIiooxTJw4SQLo4gNAF1gABBDYAGAA/rtz5w7DzZs3wc4ChgVQ0USggd8ZKiqKGDg4OIEGMzJwsHMA2cwMCgrSDDm56YLCwiK1AAHEAgkJhn9sbGzMb968YXj27BmDgIAAg6CgKMP37z/ArgFKAZX8ZPjP+J3hyrXbDKLiQgzffnxl+PvnLwdAALFAA/IfiAYawvD27VsGVlYWhpycdKjZXxi+fHvFwM7JzHD+/B2G5MQyht6JtQycHNwMv//8+gQQQGAvMDExAl3AzjBz5jyGS5cug23+9eslw4sXlxgSk7IYLl64wsDKzMnAycnJ0NhcymBkbMDw4uUboLf+fwcIIGggsjCws7MyKCoqAg2D+IqR6S/Dg4cvgYpYGH7+YmAIDc8BGviCwdvXieHfX2Bq+gry3r+vAAEENgAY9zeB0cYQFhbIoK+vDQzEXwxfv35n0NNXZFi4YDIDHx8fg7i4OFADC0NYUDrD5Ss3GLi4uRn+/v33BSCAwAbs3LnTferUqU++fv3KwMLCBnEBMxPQG38ZZs6ey/D33y+GKZMaGdiB/lZVV2NQVlYBBvYLoAF/vgIEEDiUuYGmAYFGVFTUy+vXr4ETzvefT/4fObbzv7mZ3f9TZ/b9//nn7f+bdy7937J90/+cvJw/QO/eAeqxAwggsAG8vLzQEGfQSUlJfXf//oP/f/6+/v/x873/d+5e+H/46J7/NbXV/8zNLd7w8PBuBKoLB2IekAaAAIIbAEpALCwsINdY5Rfkf7x85fT/2XOm/g8MCvgqJip+HKi2AIhlGdAAQAChGADMwgxCQkLAlKZgJSUts5eVlW06UI0hELMw4AAAAQYAK0+dL7H9A2oAAAAASUVORK5CYII="

/***/ }),

/***/ "./icons/edit.svg":
/*!************************!*\
  !*** ./icons/edit.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Edit (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"edit"),React.createElement("path",{"d":"M30.912 5.728q0.768 0.736 0.768 1.76t-0.768 1.76l-5.92 5.92v15.008q0 0.672-0.48 1.152t-1.184 0.512h-21.632q-0.704 0-1.184-0.512t-0.512-1.152v-21.664q0-0.672 0.512-1.184t1.184-0.48h14.976l5.92-5.92q0.768-0.768 1.76-0.768t1.76 0.768zM14.176 21.28l10.464-10.496-3.584-3.584-10.496 10.464zM9.888 19.072l0.128 2.752 2.816 0.128zM21.696 28.512v-9.984l-5.344 5.12q-0.64 0.64-2.016 1.056t-2.56 0.448h-5.088v-5.088q0-1.312 0.352-2.624t0.992-1.952l5.28-5.344h-9.984v18.368h18.368zM25.856 9.632l2.144-2.144-3.648-3.648-2.144 2.144z","key":1})]);
}

Edit.defaultProps = {"version":"1.1","width":"32","height":"32","viewBox":"0 0 32 32"};

module.exports = Edit;

Edit.default = Edit;


/***/ }),

/***/ "./icons/favorite-on.svg":
/*!*******************************!*\
  !*** ./icons/favorite-on.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function FavoriteOn (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"Marked as Favorite"),React.createElement("path",{"d":"M9.504 11.264q2.208-4.864 3.648-8.064 0.192-0.48 0.768-0.48t0.736 0.48l3.648 8.064q5.248 0.576 8.768 0.96 0.48 0.096 0.672 0.576t-0.192 0.864l-6.528 5.984q1.056 5.152 1.76 8.64 0.096 0.48-0.32 0.8t-0.864 0.064l-7.68-4.352q-4.608 2.592-7.68 4.352-0.48 0.288-0.896-0.064t-0.352-0.8l1.792-8.64q-3.904-3.584-6.528-5.984-0.384-0.352-0.192-0.832t0.672-0.608z","key":1})]);
}

FavoriteOn.defaultProps = {"version":"1.1","width":"28","height":"32","viewBox":"0 0 28 32"};

module.exports = FavoriteOn;

FavoriteOn.default = FavoriteOn;


/***/ }),

/***/ "./icons/fist.svg":
/*!************************!*\
  !*** ./icons/fist.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Fist (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"\r\n    M474.835,206.531c-4.146-6.428-27.363-18.243-35.655-28.192c-8.291-9.951,4.146-63.847,0-87.066\r\n    c-4.146-23.216-4.489-63.091-11.609-75.455c-7.875-13.681-22.111-25.15-55,0.275c-4.729,3.658-17.967,5.529-34.549,0.555\r\n    c-16.585-4.975-37.313-16.748-50.303-9.396c-18.255,10.333-16.862,31.784-21.008,35.93c-4.146,4.147-24.874,22.387-36.483,24.046\r\n    c-11.61,1.659-37.037-8.013-45.329,5.529c-11.53,18.829-8.035,37.876-14.925,43.117c-6.911,5.254-8.292,7.463-27.64,11.057\r\n    c-20.052,3.721-28.133,23.727-21.559,48.919c6.634,25.427-0.552,40.91,6.634,63.572c7.186,22.662,16.031,4.975,22.11,33.168\r\n    c6.08,28.191,43.671,59.148,43.671,59.148l2.763,18.241l-15.342,23.468l15.342,45.078l-17.688,152.569\r\n    c75.731,39.8,179.655,34.271,248.477-8.847c-1.658-4.145-29.021-200.663-29.021-200.663l7.462-28.189l-2.486-10.779\r\n    c0,0,57.006-35.448,62.188-41.458c5.182-6.013,14.718-23.633,15.754-29.023C481.675,246.746,478.98,212.955,474.835,206.531\r\n    M275.555,50.369c-0.137-5.943,6.866-20.522,8.828-28.4c1.958-7.877,15.081-10.296,26.275-6.564\r\n    c11.194,3.731,23.683,10.503,35.655,11.609c13.475,1.243,34.509-1.424,42.011-8.293c8.154-7.461,14.995-9.534,25.358-2.073\r\n    c10.365,7.464,12.646,55.139,12.231,66.75c-0.414,11.608-9.536,43.114-12.022,55.139c-1.853,8.963-7.159,11.941-9.572,18.025\r\n    c-0.121-0.406-0.577-0.702-0.972-0.339c-4.242,3.915-10.104,4.299-15.132,6.695c-1.486-5.044-19.892-1.463-22.002-1.989\r\n    c-2.21-0.551-14.925-14.374-14.925-14.374l0.551-74.627c0,0,9.397-16.03,9.397-21.005c0-4.974-4.421-8.844-4.421-8.844\r\n    l-10.049,14.418l-5.862,1.607c0,0,3.155,3.836,3.084,6.644c-0.461,17.728-2.176,82.739-2.652,85.122\r\n    c-0.551,2.763,2.212,14.925-23.217,19.9c-25.426,4.975-25.289-13.406-25.289-13.406s-7.877-63.98-7.877-67.3\r\n    c0-3.316-9.398,0-9.398,0V50.369z M402.955,167.391c-4.812,1.389-9.595,2.717-14.593,3.036c-0.025-1.061-0.036-1.44-0.047-2.36\r\n    c5.272-0.385,8.467-1.508,12.955-4.493c0.034-0.023,1.819,0.01,1.84,0.668C403.155,165.59,402.977,166.196,402.955,167.391\r\n    M402.613,160.949c-4.227,2.813-9.328,4.42-14.315,4.793c-0.001-0.671,0.45-0.792,0.464-1.338\r\n    c5.19-2.617,10.034-1.151,14.477-5.191C402.807,160.476,402.97,160.711,402.613,160.949 M388.408,172.311\r\n    c4.975-0.316,9.896-1.585,14.69-2.926c-0.033,0.917-0.038,1.115-0.096,1.957c-2.303,0.901-4.712,2.311-7.134,2.852\r\n    c-2.511,0.564-5.025-0.025-7.38,0.919C388.443,173.604,388.443,173.687,388.408,172.311 M402.08,183.078\r\n    c-1.475,0.351-3.037,1.419-4.558,1.645c-2.922,0.436-5.803,1.095-8.725,1.479c-0.028-1.279-0.061-2.571-0.097-3.872\r\n    c4.528-0.739,9.121-1.157,13.549-2.229C402.138,181.605,402.038,181.569,402.08,183.078 M402.69,189.732\r\n    c-4.658,1.035-9.083,1.552-13.799,2.373c0.003-1.919-0.008-1.749-0.052-3.934c2.959-0.417,5.986-1.048,8.945-1.437\r\n    c1.486-0.195,2.949-0.485,4.401-0.823C402.875,187.116,403.441,187.887,402.69,189.732 M388.854,197.788\r\n    c-0.135-1.141,0.018-1.009,0.035-2.752c4.828-0.844,9.657-1.651,14.426-2.711c0.186,0.607,0.387,1.136,0.604,1.602\r\n    c-1.395,0.766-2.744,1.632-4.103,2.555C396.125,197.52,392.533,196.702,388.854,197.788 M395.683,198.966\r\n    c-2.317,1.221-4.716,2.2-7.237,2.979c0.059-0.283,0.113-0.604,0.158-0.978C390.952,200.263,393.316,199.614,395.683,198.966\r\n    M402.423,177.75c-4.468,1.135-9.21,1.333-13.795,2.07c-0.034-1.202-0.036-1.188-0.07-2.362c2.985-1.305,6.338-1.087,9.49-1.902\r\n    c1.652-0.427,2.869-0.334,4.461-0.933C402.354,176.496,402.57,176.096,402.423,177.75 M197.06,245.5\r\n    c-5.418-4.063-2.292,1.656-14.925-16.578c0,0-43.117-42.566-50.304-55.834c-7.187-13.268-3.318-23.767,4.422-30.402\r\n    c7.738-6.633,28.192-8.848,29.85-9.399c1.659-0.55,13.336-14.367,17.172-20.452c3.835-6.081,3.833-29.849,9.362-35.377\r\n    c5.529-5.53,29.254,2.628,37.591,0c15.069-4.753,32.229-21.733,38.862-21.733s-5.142,7.363-5.697,18.417\r\n    c-0.55,11.054-0.55,35.929,2.767,46.432c3.315,10.504,20.452,41.476,18.794,50.037c-1.658,8.561-23.872,27.317-29.851,22.933\r\n    c-8.292-6.084-18.794,0.553-22.111-2.764c-3.317-3.316-2.213-21.005-4.423-29.85c-2.211-8.844-11.057-38.147-16.583-47.542\r\n    c-5.527-9.396-10.502-16.028-9.951,10.503c0.553,26.534-7.738,14.375-11.607,8.847c-3.869-5.528-21.575,3.349-15.478,6.634\r\n    l14.372,7.739l49.197,71.864c0,0,4.698,6.904-1.657,11.05c-3.527,2.301-13.819,9.399-16.583,13.269\r\n    C217.512,247.163,201.482,248.818,197.06,245.5 M403.94,520.375l-23.632,17.413c0,0-21.145-33.166-21.145-34.41\r\n    c0-1.246,4.976-25.705,4.562-29.438c-0.415-3.73-14.374-60.667-14.374-60.667l-6.355,19.209c0,0,4.56,43.117,3.73,46.019\r\n    c-0.829,2.902-5.391,89.137-5.391,89.137s-83.745,11.195-121.889-3.73c-6.031-2.361-5.805-9.949-5.805-9.949l13.268-131.84\r\n    l29.85-5.806l0.831,137.646c0,0,16.308,9.119,16.308,8.29c0-0.828-0.555-170.811-0.555-170.811l20.73-5.804l-14.096-10.78h38.971\r\n    l-32.338-10.782l75.454-6.631c0,0,14.72-15.235,16.584-14.096c1.866,1.142,0,81.26,0,81.26s9.095,1.477,9.095-3.498\r\n    c0-4.554-2.386-65.088-3.152-72.096c0.184-2.684,4.485-2.791,6.495-1.106L403.94,520.375z M470.552,254.208\r\n    c-2.37,4.267-10.363,10.161-22.666,16.168c-11.779,5.753-16.997,8.292-14.925,2.902c2.072-5.388,3.317-38.141,0-46.021\r\n    c-3.317-7.875-5.391-9.949-5.391,2.075c0,12.023,0.209,39.593-3.108,44.569c-3.315,4.974-9.743,2.692-20.108,4.351\r\n    c-10.363,1.66-27.362-1.245-40.628,0c-13.269,1.243-41.046,3.542-45.606,0.528c-4.56-3.017,0.14-4.949,3.042-4.949\r\n    s47.878-0.113,52.471-1.799c7.921-2.901,6.261-26.118,4.604-33.995c-1.658-7.877-10.365-17.206-15.753-17.206\r\n    c-5.391,0-20.317,0.206-26.12,0.206c-5.805,0-2.902,2.074-3.317,3.731c-0.414,1.659,11.143-0.653,21.145-0.414\r\n    c9.676,0.232,12.852,0.414,16.998,10.78c4.146,10.363,4.891,26.119,2.444,29.435c-2.444,3.318-50.952,5.804-58.829,4.147\r\n    c-7.877-1.661-7.877-36.485-0.829-42.705c7.048-6.218,15.755-14.51,30.681-16.584c13.573-1.885,37.085-3.083,42.48-5.78\r\n    c3.666-0.985,7.165-2.297,10.495-4.201c1.026-0.585,2.005-1.215,2.974-1.848c1.644-0.466,3.282-0.942,4.911-1.455\r\n    c2.857,2.317,6.821-1.017,9.619-0.395c3.731,0.83,1.657-15.34,1.657-21.559c0-6.218,4.147-14.627,5.805-18.507\r\n    c1.66-3.88,4.672,12.758,6.91,19.891c3.732,11.882,16.999,20.589,27.364,26.807c10.364,6.218,13.819,14.098,13.819,24.46\r\n    C470.689,234.894,472.921,249.94,470.552,254.208\r\n  "}));
}

Fist.defaultProps = {"version":"1.1","x":"0px","y":"0px","width":"600px","height":"600px","viewBox":"0 0 600 600"};

module.exports = Fist;

Fist.default = Fist;


/***/ }),

/***/ "./icons/info.png":
/*!************************!*\
  !*** ./icons/info.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAELklEQVR4nFWTTYiWVRTHf+fe+7wf8zYzjjPmTDPOSFqjpqVGRekEIVGLPiBqE2SkGC5bVJs2rdq0CoJAwY25iQijQChpY6GGEBZl4tdEzozz8c6Hvl/P+9x7T4tnZswDBy7cc/73/P/3f+Tdz2/grcMWHNYZnDM4KyROcFaw1mAtWAEjitGIECAGYgyIBiRmmNDGxhYuOIdxDnEWcQasYJzI7YX6vulb9f1q7R6b2H4EozEslk36x/Yh/Xqwh5OTvm9GVBHjEFE0KvLOkUkksVhnsNagbf/Q5PjCsb7B7r2bHlxDZ8VhreAErAjNluev60vcmpq9+cbo3CcLycDxeizXUJ9P+dir7yPWgDE84Np7Lt2o/bTjyQ2j6+6vICKECDEqISo+grXC4LoORoZ6ur65KC/u7J4dlCT5OY1JE8AEhIBgYth84Ur9u61PbOhRY2l5aEdwRjn4uOPALkdilNQrzaBgDS8/O2y/urb+7QGZ+fQ+2+oKYjAewStSn1o6NvjIQE+aKS2vtL2SeujpEHpKQndJ6C0LqVfSLL9vBWXfU4Ny4tLaN7cWJ/YHNbig0NFOn5spVsZKxqBRsQo+gjNwaUb54arHGeHPmYiRfGpvwAk4KxTX9BXHa7cPDxUXv3c+CtSab5X715NmijWCNYoVUPI4dSVgBawBI4JXcBGCyXUdHe7kzN/lLfu3VsdcAKZq+nTZGFKvWJM3AhzYXWD3gEEEQDhxMeOP6YgzEIxgNfdnwVpm2x1WdW6f8QpNlf5WgDQqacj18RG++DXlyIWMghUKFoJCGnKN05UMkEZoxAQR2eR8hLhcaAFrFC/gFEKE1K8Qh2z5QStCiPeyWS4ruhCVguh0K9PuFZ2cycGsgXa8C+ijrsoSDFgVXFQUKBkPUDOCMtAp51qpJw15Q8uzes7+B5gF7lL1+bStqCw1Pf3FBsAFgyqNQunL9nwtBwlKexmskeVeXIk0KI1Vj+bZ9sq1iRpjg43mfFY6bVCokpze6NKzaRpyw3qlnimvbSvw+rZkFfClhxNeGU2or3yGVxpppJItsLmree5qveuMERRUdXi482Bpbr7WCncn6Ejy9Tt303N+wtP0SjnhHsrXxmc5tH2+Wm0XPl7Mkqa88NkE6fI+P9PP86d+v3Oy2dvbIdagCiK515wVrEBioOQEQZmfmue9R6eXuorxw/ML646UjMcUJGJUEY2cvaU/7hgp7d1Yn74cF2sQY851eWsU8EGZnauRVCf4aNfk9c5CPPxLte+oI5DgcV1O8VkEBUWoevvb8FBx504WDoxXFw7dbBRHlzJXioJ0FgIjlVZjbHP9ny1rW99eul05emWp+/oKWEky5IPj/3JjMdAIkAEYYXnXGKk03HCltRHR4T29891TaUeYahZmrMTLl+90LTiJFCRQtoGK8fQkKf8BTT1rMNCIXKUAAAAASUVORK5CYII="

/***/ }),

/***/ "./icons/loading.svg":
/*!***************************!*\
  !*** ./icons/loading.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Loading (props) {
    return React.createElement("svg",props,[React.createElement("rect",{"x":"0","y":"10","width":"4","height":"10","fill":"#333","opacity":"0.2","key":0},[React.createElement("animate",{"attributeName":"opacity","attributeType":"XML","values":"0.2; 1; .2","begin":"0s","dur":"0.6s","repeatCount":"indefinite","key":0}),React.createElement("animate",{"attributeName":"height","attributeType":"XML","values":"10; 20; 10","begin":"0s","dur":"0.6s","repeatCount":"indefinite","key":1}),React.createElement("animate",{"attributeName":"y","attributeType":"XML","values":"10; 5; 10","begin":"0s","dur":"0.6s","repeatCount":"indefinite","key":2})]),React.createElement("rect",{"x":"8","y":"10","width":"4","height":"10","fill":"#333","opacity":"0.2","key":1},[React.createElement("animate",{"attributeName":"opacity","attributeType":"XML","values":"0.2; 1; .2","begin":"0.15s","dur":"0.6s","repeatCount":"indefinite","key":0}),React.createElement("animate",{"attributeName":"height","attributeType":"XML","values":"10; 20; 10","begin":"0.15s","dur":"0.6s","repeatCount":"indefinite","key":1}),React.createElement("animate",{"attributeName":"y","attributeType":"XML","values":"10; 5; 10","begin":"0.15s","dur":"0.6s","repeatCount":"indefinite","key":2})]),React.createElement("rect",{"x":"16","y":"10","width":"4","height":"10","fill":"#333","opacity":"0.2","key":2},[React.createElement("animate",{"attributeName":"opacity","attributeType":"XML","values":"0.2; 1; .2","begin":"0.3s","dur":"0.6s","repeatCount":"indefinite","key":0}),React.createElement("animate",{"attributeName":"height","attributeType":"XML","values":"10; 20; 10","begin":"0.3s","dur":"0.6s","repeatCount":"indefinite","key":1}),React.createElement("animate",{"attributeName":"y","attributeType":"XML","values":"10; 5; 10","begin":"0.3s","dur":"0.6s","repeatCount":"indefinite","key":2})])]);
}

Loading.defaultProps = {"version":"1.1","x":"0px","y":"0px","width":"24px","height":"30px","viewBox":"0 0 24 30","style":{"enableBackground":"new 0 0 50 50"},"xmlSpace":"preserve"};

module.exports = Loading;

Loading.default = Loading;


/***/ }),

/***/ "./icons/logout.svg":
/*!**************************!*\
  !*** ./icons/logout.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Logout (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"logout"),React.createElement("path",{"d":"M29.184 7.552l8.832 8.512-8.832 8.448v-5.664h-13.216v-5.632h13.216v-5.664zM23.872 23.936l3.392 3.424q-4.992 4.672-10.816 4.672-6.944 0-11.68-4.576t-4.768-11.488q0-4.32 2.176-8t5.888-5.824 8-2.112q5.888 0 11.168 4.736l-3.36 3.392q-3.648-3.328-7.776-3.328-4.768 0-8.032 3.328t-3.296 8.128q0 4.48 3.392 7.712t7.904 3.232q4.192 0 7.808-3.296z","key":1})]);
}

Logout.defaultProps = {"version":"1.1","width":"38","height":"32","viewBox":"0 0 38 32"};

module.exports = Logout;

Logout.default = Logout;


/***/ }),

/***/ "./icons/menu.svg":
/*!************************!*\
  !*** ./icons/menu.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Menu (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"menu"),React.createElement("path",{"d":"M27.424 24v2.272q0 0.48-0.32 0.8t-0.832 0.352h-25.12q-0.48 0-0.8-0.352t-0.352-0.8v-2.272q0-0.48 0.352-0.8t0.8-0.352h25.12q0.48 0 0.832 0.352t0.32 0.8zM27.424 14.848v2.304q0 0.448-0.32 0.8t-0.832 0.32h-25.12q-0.48 0-0.8-0.32t-0.352-0.8v-2.304q0-0.448 0.352-0.8t0.8-0.32h25.12q0.48 0 0.832 0.32t0.32 0.8zM27.424 5.728v2.272q0 0.448-0.32 0.8t-0.832 0.352h-25.12q-0.48 0-0.8-0.352t-0.352-0.8v-2.272q0-0.48 0.352-0.832t0.8-0.32h25.12q0.48 0 0.832 0.32t0.32 0.832z","key":1})]);
}

Menu.defaultProps = {"version":"1.1","width":"27","height":"32","viewBox":"0 0 27 32"};

module.exports = Menu;

Menu.default = Menu;


/***/ }),

/***/ "./icons/read.svg":
/*!************************!*\
  !*** ./icons/read.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Read (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"read"),React.createElement("path",{"d":"M14.848 7.072q0.16-0.16 0.48-0.384t1.504-0.832 2.656-1.12 4.064-0.864 5.6-0.384v21.44q-3.040 0-5.632 0.384t-4.096 0.864-2.624 1.088-1.504 0.928l-0.448 0.32q-0.128-0.128-0.416-0.384t-1.472-0.832-2.656-1.12-4.064-0.864-5.664-0.384v-21.44q3.008 0 5.568 0.384t4.096 0.864 2.656 1.056 1.536 0.928zM4.16 7.072v14.4q5.504 0.448 8.928 2.272v-14.368q-3.52-1.856-8.928-2.304zM25.568 21.472v-14.4q-5.376 0.448-8.896 2.304v14.368q3.456-1.824 8.896-2.272z","key":1})]);
}

Read.defaultProps = {"version":"1.1","width":"30","height":"32","viewBox":"0 0 30 32"};

module.exports = Read;

Read.default = Read;


/***/ }),

/***/ "./icons/remove.svg":
/*!**************************!*\
  !*** ./icons/remove.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Remove (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"remove"),React.createElement("path",{"d":"M23.168 23.616q0 0.704-0.48 1.216l-2.432 2.432q-0.512 0.48-1.216 0.48t-1.216-0.48l-5.248-5.28-5.248 5.28q-0.512 0.48-1.216 0.48t-1.216-0.48l-2.432-2.432q-0.512-0.512-0.512-1.216t0.512-1.216l5.248-5.248-5.248-5.248q-0.512-0.512-0.512-1.216t0.512-1.216l2.432-2.432q0.512-0.512 1.216-0.512t1.216 0.512l5.248 5.248 5.248-5.248q0.512-0.512 1.216-0.512t1.216 0.512l2.432 2.432q0.48 0.48 0.48 1.216t-0.48 1.216l-5.248 5.248 5.248 5.248q0.48 0.48 0.48 1.216z","key":1})]);
}

Remove.defaultProps = {"version":"1.1","width":"25","height":"32","viewBox":"0 0 25 32"};

module.exports = Remove;

Remove.default = Remove;


/***/ }),

/***/ "./icons/search.svg":
/*!**************************!*\
  !*** ./icons/search.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Search (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"search"),React.createElement("path",{"d":"M16.352 1.984q4.864 0 8.256 3.424t3.392 8.224-3.392 8.256-8.256 3.424q-1.696 0-3.616-0.608l-3.904 3.904q-1.6 1.408-3.616 1.408-2.176 0-3.68-1.568t-1.536-3.68 1.472-3.648q1.696-1.728 2.528-2.56l1.28-1.28q-0.608-1.92-0.608-3.648 0-4.832 3.424-8.224t8.256-3.424zM16.352 21.984q3.456 0 5.888-2.432t2.432-5.92-2.432-5.888-5.888-2.432-5.888 2.432-2.464 5.888 2.464 5.92 5.888 2.432zM16.352 7.008q2.784 0 4.704 1.92t1.952 4.704-1.952 4.736-4.704 1.952-4.704-1.952-1.952-4.736 1.952-4.704 4.704-1.92zM16.352 18.624q2.080 0 3.552-1.44t1.472-3.552-1.472-3.52-3.552-1.472-3.52 1.472-1.472 3.52 1.472 3.552 3.52 1.44z","key":1})]);
}

Search.defaultProps = {"version":"1.1","width":"28","height":"32","viewBox":"0 0 28 32"};

module.exports = Search;

Search.default = Search;


/***/ }),

/***/ "./icons/sheet.svg":
/*!*************************!*\
  !*** ./icons/sheet.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Sheet (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"sheet"),React.createElement("path",{"d":"M22.4 1.6q1.344 0 2.272 0.928t0.928 2.272v22.4q0 1.28-0.928 2.24t-2.272 0.96h-19.2q-1.28 0-2.24-0.96t-0.96-2.24v-22.4q0-1.344 0.96-2.272t2.24-0.928h19.2zM22.4 27.2v-22.4h-19.2v22.4h19.2zM14.4 19.2v1.6h-8v-1.6h8zM19.2 12.8v1.6h-6.4v-1.6h6.4zM12.8 11.2v-3.2h6.4v3.2h-6.4zM11.2 8v6.4h-4.8v-6.4h4.8zM9.6 16v1.6h-3.2v-1.6h3.2zM11.2 17.6v-1.6h8v1.6h-8zM19.2 22.4v1.6h-12.8v-1.6h12.8zM16 20.8v-1.6h3.2v1.6h-3.2z","key":1})]);
}

Sheet.defaultProps = {"version":"1.1","width":"26","height":"32","viewBox":"0 0 26 32"};

module.exports = Sheet;

Sheet.default = Sheet;


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wiki; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/app */ "../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");
/* harmony import */ var _data_defaultTheme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/data/defaultTheme */ "./data/defaultTheme.js");
/* harmony import */ var _styles_all_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/styles/all.scss */ "./styles/all.scss");
/* harmony import */ var _styles_all_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_styles_all_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _icons_book_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/icons/book.png */ "./icons/book.png");
/* harmony import */ var _icons_book_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_icons_book_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _icons_combo_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/icons/combo.png */ "./icons/combo.png");
/* harmony import */ var _icons_combo_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_icons_combo_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _icons_dice_gif__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/icons/dice.gif */ "./icons/dice.gif");
/* harmony import */ var _icons_dice_gif__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_icons_dice_gif__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _icons_info_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/icons/info.png */ "./icons/info.png");
/* harmony import */ var _icons_info_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_icons_info_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _pages_error__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/pages/_error */ "./pages/_error.js");
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");


















/* eslint-disable import/extensions */





/* eslint-enable import/extensions */




var Wiki =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Wiki, _App);

  function Wiki() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Wiki);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Wiki)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "state", {
      campaign: _this.props.campaign,
      user: _this.props.user
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "logOff",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(event) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.t0 = _this;
                _context.next = 4;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('/api/user/auth/logoff').then(function (r) {
                  return r.json();
                });

              case 4:
                _context.t1 = _context.sent;

                _context.t0.setUser.call(_context.t0, _context.t1);

                _this.updateCampaign();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "setCampaign", function (campaign) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utilities_noop__WEBPACK_IMPORTED_MODULE_23__["default"];
      return _this.setState({
        campaign: campaign
      }, callback);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "setSize", function (size) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utilities_noop__WEBPACK_IMPORTED_MODULE_23__["default"];
      return _this.setState({
        size: size
      }, callback);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "setUser", function (user) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utilities_noop__WEBPACK_IMPORTED_MODULE_23__["default"];
      return _this.setState({
        user: user
      }, callback);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "updateCampaign",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(updates) {
        var callback,
            campaign,
            subdomain,
            result,
            json,
            _args2 = arguments;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                callback = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _utilities_noop__WEBPACK_IMPORTED_MODULE_23__["default"];
                campaign = _this.state.campaign;
                subdomain = _this.props.subdomain;

                if (campaign) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", false);

              case 5:
                _context2.next = 7;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()("/api/campaign/".concat(subdomain), {
                  body: updates ? _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(updates) : undefined,
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  method: updates ? 'POST' : 'GET'
                });

              case 7:
                result = _context2.sent;
                _context2.next = 10;
                return result.json();

              case 10:
                json = _context2.sent;

                if (!(result.status === 200)) {
                  _context2.next = 14;
                  break;
                }

                _this.setCampaign(json, callback);

                return _context2.abrupt("return", true);

              case 14:
                _this.setCampaign({}, callback);

                return _context2.abrupt("return", false);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "updateUser",
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(updates) {
        var callback,
            user,
            result,
            json,
            _args3 = arguments;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                callback = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : _utilities_noop__WEBPACK_IMPORTED_MODULE_23__["default"];
                user = _this.state.user;
                _context3.next = 4;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()("/api/user/".concat(user.username), {
                  body: updates ? _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(updates) : undefined,
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  method: updates ? 'POST' : 'GET'
                });

              case 4:
                result = _context3.sent;
                _context3.next = 7;
                return result.json();

              case 7:
                json = _context3.sent;

                if (!(result.status === 200)) {
                  _context3.next = 11;
                  break;
                }

                _this.setUser(json, callback);

                return _context3.abrupt("return", true);

              case 11:
                _this.setUser({}, callback);

                return _context3.abrupt("return", false);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "render", function () {
      var _this$props = _this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          rootUrl = _this$props.rootUrl,
          router = _this$props.router,
          subdomain = _this$props.subdomain;
      var _this$state = _this.state,
          campaign = _this$state.campaign,
          size = _this$state.size,
          user = _this$state.user;

      var theme = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(_data_defaultTheme__WEBPACK_IMPORTED_MODULE_16__["default"], campaign && campaign.theme || {});

      var context = {
        campaign: campaign,
        logOff: _this.logOff,
        rootUrl: rootUrl,
        router: router,
        setCampaign: _this.setCampaign,
        setSize: _this.setSize,
        setUser: _this.setUser,
        size: size,
        subdomain: subdomain,
        theme: theme,
        updateCampaign: _this.updateCampaign,
        updateUser: _this.updateUser,
        user: user
      };
      var campaignError = !campaign && !['/user', '/login', '/signup'].includes(router.pathname);
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_contexts_Application__WEBPACK_IMPORTED_MODULE_15__["default"].Provider, {
        value: context
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_12__["Container"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: !campaign ? 'no-campaign' : ''
      }, campaignError ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_pages_error__WEBPACK_IMPORTED_MODULE_22__["default"], {
        statusCode: 404,
        message: "This campaign does not exist."
      }) : react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Component, pageProps)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("style", null, "\n            :root {\n              --color-background:    ".concat(theme.background, ";\n              --color-borders:       ").concat(theme.primary, ";\n              --color-normal-text:   ").concat(theme.normalText, ";\n              --color-primary:       ").concat(theme.primary, ";\n              --color-primary-text:  ").concat(theme.primaryText, ";\n              --font-for-text:       ").concat(theme.fontForText, ";\n              --font-for-titles:     ").concat(theme.fontForTitles, ";\n              --font-size:           ").concat(theme.fontSize, ";\n              color:                 ").concat(theme.normalText, ";\n              font-family:           ").concat(theme.fontForText, ";\n              font-size:             ").concat(theme.fontSize, ";\n\n              --image-book:          url(").concat(_icons_book_png__WEBPACK_IMPORTED_MODULE_18___default.a, ");\n              --image-combo:         url(").concat(_icons_combo_png__WEBPACK_IMPORTED_MODULE_19___default.a, ");\n              --image-system:        url(").concat(_icons_dice_gif__WEBPACK_IMPORTED_MODULE_20___default.a, ");\n              --image-info:          url(").concat(_icons_info_png__WEBPACK_IMPORTED_MODULE_21___default.a, ");\n            }\n          "))));
    });

    return _this;
  }

  return Wiki;
}(next_app__WEBPACK_IMPORTED_MODULE_12___default.a);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Wiki, "getInitialProps",
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(context) {
    var Component, _context$ctx$req, request, props, fetchParams, campaign, user, host, subdomain, rootUrl;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            Component = context.Component, _context$ctx$req = context.ctx.req, request = _context$ctx$req === void 0 ? {} : _context$ctx$req;
            _context4.next = 3;
            return next_app__WEBPACK_IMPORTED_MODULE_12___default.a.getInitialProps(context);

          case 3:
            props = _context4.sent;
            fetchParams = {
              headers: {
                'Content-Type': 'application/json'
              }
            };

            if (!request) {
              _context4.next = 9;
              break;
            }

            _context4.t0 = request.campaign;
            _context4.next = 12;
            break;

          case 9:
            _context4.next = 11;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('/api/campaign', fetchParams).then(function (r) {
              return r.json();
            });

          case 11:
            _context4.t0 = _context4.sent;

          case 12:
            campaign = _context4.t0;

            if (!request) {
              _context4.next = 17;
              break;
            }

            _context4.t1 = request.user;
            _context4.next = 20;
            break;

          case 17:
            _context4.next = 19;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('/api/user', fetchParams).then(function (r) {
              return r.json();
            });

          case 19:
            _context4.t1 = _context4.sent;

          case 20:
            user = _context4.t1;

            if (false) {} else {
              host = request.get('host');
            }
            /* eslint-enable prefer-destructuring */


            subdomain = host.split('.').shift();
            rootUrl = host.slice(subdomain.length + 1);
            return _context4.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
              campaign: campaign,
              Component: Component,
              rootUrl: rootUrl,
              subdomain: subdomain,
              user: user
            }));

          case 25:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x4) {
    return _ref4.apply(this, arguments);
  };
}());



/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");
/* harmony import */ var _error_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_error.scss */ "./pages/_error.scss");
/* harmony import */ var _error_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_error_scss__WEBPACK_IMPORTED_MODULE_2__);



function Error() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_Application__WEBPACK_IMPORTED_MODULE_1__["default"]),
      router = _useContext.router;

  var query = router.query;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error page"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "status-code"
  }, query.statusCode || 500), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message"
  }, "An error occurred."));
}

/***/ }),

/***/ "./pages/_error.scss":
/*!***************************!*\
  !*** ./pages/_error.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/all.scss":
/*!*************************!*\
  !*** ./styles/all.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utilities/alert.js":
/*!****************************!*\
  !*** ./utilities/alert.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return alert; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Dialog */ "./components/Dialog/Dialog.js");
/* harmony import */ var _prompt_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prompt.scss */ "./utilities/prompt.scss");
/* harmony import */ var _prompt_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_prompt_scss__WEBPACK_IMPORTED_MODULE_6__);







function alert() {
  return _alert.apply(this, arguments);
}

function _alert() {
  _alert = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var text,
        title,
        container,
        _args = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            text = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
            title = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'Prompt';
            container = document.createElement('div');
            document.body.appendChild(container);
            return _context.abrupt("return", new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve) {
              var handleOk = function handleOk() {
                return resolve();
              };

              react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
                className: "prompt",
                modal: true,
                onOk: handleOk,
                showCancel: false,
                title: title
              }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
                className: "text"
              }, text)), container);
            }).finally(function () {
              document.body.removeChild(container);
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _alert.apply(this, arguments);
}

/***/ }),

/***/ "./utilities/debounce.js":
/*!*******************************!*\
  !*** ./utilities/debounce.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
function debounce(func, wait, immediate) {
  var _this = this;

  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(_this, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(_this, args);
  };
}

/***/ }),

/***/ "./utilities/flatten.js":
/*!******************************!*\
  !*** ./utilities/flatten.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flatten; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);


function flatten(array) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

  if (!array || !_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(array)) {
    throw new TypeError("cannot flatten non-Array value ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(array)));
  }

  return array.reduce(function (all, next) {
    if (depth > 1 && next && _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(next)) {
      return all.concat(flatten(next, depth - 1));
    }

    return all.concat(next);
  }, []);
}

/***/ }),

/***/ "./utilities/kebabCase.js":
/*!********************************!*\
  !*** ./utilities/kebabCase.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (string) {
  if (!string) return '';
  var matches = string.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
  if (!matches) return '';
  return matches.map(function (x) {
    return x.toLowerCase();
  }).join('-');
});

/***/ }),

/***/ "./utilities/noop.js":
/*!***************************!*\
  !*** ./utilities/noop.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {});

/***/ }),

/***/ "./utilities/objectMatch.js":
/*!**********************************!*\
  !*** ./utilities/objectMatch.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");




var objectMatch = function objectMatch() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var match = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(object) !== Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(match)) return false;
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(match).every(function (key) {
    return Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(object[key]) === 'object' || _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(object[key]) ? objectMatch(object[key], match[key]) : object[key] === match[key];
  });
};

/* harmony default export */ __webpack_exports__["default"] = (objectMatch);

/***/ }),

/***/ "./utilities/pluck.js":
/*!****************************!*\
  !*** ./utilities/pluck.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _utilities_flatten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utilities/flatten */ "./utilities/flatten.js");


/* harmony default export */ __webpack_exports__["default"] = (function (object) {
  if (!object || Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(object) !== 'object') return {};

  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  return Object(_utilities_flatten__WEBPACK_IMPORTED_MODULE_1__["default"])(keys).reduce(function (out, key) {
    // eslint-disable-next-line no-prototype-builtins
    if (object.hasOwnProperty(key)) {
      out[key] = object[key]; // eslint-disable-line no-param-reassign
    }

    return out;
  }, {});
});

/***/ }),

/***/ "./utilities/prompt.js":
/*!*****************************!*\
  !*** ./utilities/prompt.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prompt; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Dialog */ "./components/Dialog/Dialog.js");
/* harmony import */ var _prompt_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prompt.scss */ "./utilities/prompt.scss");
/* harmony import */ var _prompt_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_prompt_scss__WEBPACK_IMPORTED_MODULE_6__);







function prompt() {
  return _prompt.apply(this, arguments);
}

function _prompt() {
  _prompt = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var text,
        _ref,
        _ref$defaultValue,
        defaultValue,
        _ref$title,
        title,
        container,
        _args = arguments;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            text = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
            _ref = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, _ref$defaultValue = _ref.defaultValue, defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue, _ref$title = _ref.title, title = _ref$title === void 0 ? 'Prompt' : _ref$title;
            container = document.createElement('div');
            document.body.appendChild(container);
            return _context.abrupt("return", new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
              var inputBox = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();

              var handleCancel = function handleCancel() {
                return reject();
              };

              var handleOk = function handleOk() {
                return resolve(inputBox.current.value);
              };

              var handleKeyDown = function handleKeyDown(event) {
                switch (event.key) {
                  case 'Enter':
                    return handleOk();

                  case 'Escape':
                    return handleCancel();

                  default:
                    return undefined;
                }
              };

              react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
                className: "prompt",
                modal: true,
                onCancel: handleCancel,
                onOk: handleOk,
                title: title
              }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
                className: "text"
              }, text), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
                className: "input-wrapper"
              }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
                defaultValue: defaultValue,
                onKeyDown: handleKeyDown,
                ref: inputBox,
                type: "text"
              }))), container, function () {
                inputBox.current.select();
                inputBox.current.focus();
              });
            }).finally(function () {
              document.body.removeChild(container);
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _prompt.apply(this, arguments);
}

/***/ }),

/***/ "./utilities/prompt.scss":
/*!*******************************!*\
  !*** ./utilities/prompt.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utilities/promptLink.js":
/*!*********************************!*\
  !*** ./utilities/promptLink.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return promptLink; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CreateLinkDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/CreateLinkDialog */ "./components/CreateLinkDialog/CreateLinkDialog.js");
/* harmony import */ var _prompt_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prompt.scss */ "./utilities/prompt.scss");
/* harmony import */ var _prompt_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_prompt_scss__WEBPACK_IMPORTED_MODULE_6__);







function promptLink(_x) {
  return _promptLink.apply(this, arguments);
}

function _promptLink() {
  _promptLink = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var _ref$defaultText, defaultText, _ref$defaultSlug, defaultSlug, _ref$templateType, templateType, _ref$title, title, container;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$defaultText = _ref.defaultText, defaultText = _ref$defaultText === void 0 ? '' : _ref$defaultText, _ref$defaultSlug = _ref.defaultSlug, defaultSlug = _ref$defaultSlug === void 0 ? '' : _ref$defaultSlug, _ref$templateType = _ref.templateType, templateType = _ref$templateType === void 0 ? null : _ref$templateType, _ref$title = _ref.title, title = _ref$title === void 0 ? 'Create Link' : _ref$title;
            container = document.createElement('div');
            document.body.appendChild(container);
            return _context.abrupt("return", new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
              var onCancel = function onCancel() {
                return reject();
              };

              var onOk = function onOk(payload) {
                return resolve(payload);
              };

              react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_CreateLinkDialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
                defaultSlug: defaultSlug,
                defaultText: defaultText,
                onCancel: onCancel,
                onOk: onOk,
                templateType: templateType,
                title: title
              }), container);
            }).finally(function () {
              document.body.removeChild(container);
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _promptLink.apply(this, arguments);
}

/***/ }),

/***/ "./utilities/slugs.js":
/*!****************************!*\
  !*** ./utilities/slugs.js ***!
  \****************************/
/*! exports provided: slugify, extractUrlSlug, slugifyUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugify", function() { return slugify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractUrlSlug", function() { return extractUrlSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugifyUrl", function() { return slugifyUrl; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utilities_kebabCase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utilities/kebabCase */ "./utilities/kebabCase.js");
/* harmony import */ var _utilities_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utilities/unique */ "./utilities/unique.js");








var strip = function strip(string) {
  return string.replace(/\s|\r|\n/g, '-').replace(/-{2,}/g, '-').replace(/[^a-z0-9._-]/gi, '');
};

function slugify(input) {
  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_4___default()(input)) {
    var list = input.map(slugify).filter(function (slug) {
      return slug;
    });
    return Object(_utilities_unique__WEBPACK_IMPORTED_MODULE_6__["default"])(list).sort();
  }

  if (!input || Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(input) === 'object' || typeof input === 'function') {
    return ''; // Return '' for all falsy values, objects and fn's
  }

  var lowercase = strip(input).toLowerCase();
  return lowercase.split('.').map(_utilities_kebabCase__WEBPACK_IMPORTED_MODULE_5__["default"]).join('.'); // Split file.ext and kebab-case each section, then rejoin
}
function extractUrlSlug(input) {
  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_4___default()(input)) {
    return input.map(extractUrlSlug).filter(function (slug) {
      return slug;
    });
  }

  if (typeof input !== 'string') return '';
  return slugify(input.split(/[/\\]/g).pop().split(/[?#]/g).shift());
}
function slugifyUrl(input) {
  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_4___default()(input)) {
    return input.map(slugifyUrl).filter(function (slug) {
      return slug;
    });
  }

  if (typeof input !== 'string') return '';
  var result = [];

  var _input$split$reverse = input.split('/').reverse(),
      _input$split$reverse2 = Object(_babel_runtime_corejs2_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_input$split$reverse),
      file = _input$split$reverse2[0],
      path = _input$split$reverse2.slice(1);

  var _file$split = file.split('.'),
      _file$split2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_file$split, 2),
      slug = _file$split2[0],
      extension = _file$split2[1];

  if (path.length) {
    result = [path.reverse().join('/'), '/'];
  }

  result.push(slugify(slug));

  if (extension) {
    result = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(result).concat(['.', extension]);
  }

  return result.join('');
}

/***/ }),

/***/ "./utilities/unique.js":
/*!*****************************!*\
  !*** ./utilities/unique.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return unique; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function unique(array) {
  var list;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (args.length > 0) {
    list = [array].concat(args);
  } else if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(array)) {
    list = array;
  } else {
    list = [array];
  }

  return list.filter(function (el, ix, all) {
    return all.indexOf(el) === ix;
  });
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/entries":
/*!****************************************************!*\
  !*** external "core-js/library/fn/object/entries" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/entries");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "downshift":
/*!****************************!*\
  !*** external "downshift" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-draggable":
/*!**********************************!*\
  !*** external "react-draggable" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-draggable");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "sortablejs":
/*!*****************************!*\
  !*** external "sortablejs" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sortablejs");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map