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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "../node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/number/is-nan.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/number/is-nan.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/is-nan */ "core-js/library/fn/number/is-nan");

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

/***/ "../node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

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

/***/ "./components/ColorPicker/ColorPicker.js":
/*!***********************************************!*\
  !*** ./components/ColorPicker/ColorPicker.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ColorPicker_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorPicker.scss */ "./components/ColorPicker/ColorPicker.scss");
/* harmony import */ var _ColorPicker_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ColorPicker_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");





var defaultColors = ['#000000', '#FFFFFF', '#A6808C', '#D6CFCB', '#6E0E0A', '#60594D', '#006B76', '#042A2B', '#124E78', '#5EB1BF'];

function ColorPicker(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? defaultColors : _ref$colors,
      _ref$hex = _ref.hex,
      hex = _ref$hex === void 0 ? defaultColors[0] : _ref$hex,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? _utilities_noop__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$onChange,
      _ref$popover = _ref.popover,
      popover = _ref$popover === void 0 ? true : _ref$popover,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      _ref$textColor = _ref.textColor,
      textColor = _ref$textColor === void 0 ? 'inherit' : _ref$textColor,
      _ref$triangle = _ref.triangle,
      triangle = _ref$triangle === void 0 ? 'top-right' : _ref$triangle,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 'auto' : _ref$width;
  var wrapper = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var handleClickOutside = function handleClickOutside(_ref2) {
      var target = _ref2.target;
      if (!wrapper.current.contains(target)) setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [true]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "color-picker input ".concat(className, " ").concat(readOnly ? 'readonly' : ''),
    ref: wrapper
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "swatch",
    onClick: function onClick() {
      return setOpen(!open);
    },
    style: {
      background: hex,
      color: textColor
    },
    disabled: readOnly
  }, text), open && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_2__["GithubPicker"], {
    colors: colors,
    hex: hex,
    onChange: onChange,
    popover: popover,
    triangle: triangle,
    width: width
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_color__WEBPACK_IMPORTED_MODULE_2__["CustomPicker"])(ColorPicker));

/***/ }),

/***/ "./components/ColorPicker/ColorPicker.scss":
/*!*************************************************!*\
  !*** ./components/ColorPicker/ColorPicker.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Editable/Editable.js":
/*!*****************************************!*\
  !*** ./components/Editable/Editable.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Editable; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/is-nan */ "../node_modules/@babel/runtime-corejs2/core-js/number/is-nan.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "../node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utilities_bound__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utilities/bound */ "./utilities/bound.js");
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _Editable_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Editable.scss */ "./components/Editable/Editable.scss");
/* harmony import */ var _Editable_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Editable_scss__WEBPACK_IMPORTED_MODULE_14__);















var TYPES = [// Strings
'text', 'multiline', // Checkboxes
'boolean', // Numbers
'number', 'slider'];

var Editable =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Editable, _Component);

  function Editable() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Editable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Editable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "state", {
      editing: false,
      resetValue: _this.props.value
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "getEditorType", function () {
      var value = _this.props.value;
      var type = _this.props.type;

      if (type !== undefined && TYPES.includes(type)) {
        return type;
      }

      type = Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(value);

      if (type === 'string') {
        return value.includes('\n') ? 'multiline' : 'text';
      }

      if (['boolean', 'number'].includes(type)) {
        return type;
      }

      return 'text';
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "resetChanges", function () {
      _this.props.onChange(_this.state.resetValue, _this.props.value);

      _this.handleToggleEditing();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "createRefWithAutoFocus", function (editor) {
      if (!editor) {
        return;
      }

      _this.editor = editor;

      var editorType = _this.getEditorType();

      if (editorType !== 'boolean' && typeof editor.focus === 'function') {
        editor.focus();
      }

      if (['boolean', 'number'].includes(_this.getEditorType())) {
        return;
      }

      if (_this.props.forceEditMode && typeof editor.setSelectionRange === 'function') {
        editor.setSelectionRange(editor.value.length, editor.value.length);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleChange", function (_ref) {
      var target = _ref.target;
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max;
      var value = target.value; // eslint-disable-next-line default-case

      switch (_this.getEditorType()) {
        case 'slider':
        case 'number':
          value = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(value || 0); // eslint-disable-next-line prefer-destructuring

          if (_babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_1___default()(value)) {
            value = _this.props.value;
          }

          value = Object(_utilities_bound__WEBPACK_IMPORTED_MODULE_12__["default"])(value, {
            max: max,
            min: min
          });
      }

      _this.props.onChange(value, _this.state.resetValue);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleKeys", function (event) {
      var target = event.target,
          key = event.key,
          ctrlKey = event.ctrlKey,
          metaKey = event.metaKey;

      if (_this.props.onKeyDown !== _utilities_noop__WEBPACK_IMPORTED_MODULE_13__["default"]) {
        _this.props.onKeyDown(event);

        if (event.isDefaultPrevented()) return;
      }

      if (key === 'Escape') {
        _this.resetChanges();
      }

      if (key === 'Enter') {
        if (target.nodeName !== 'TEXTAREA' || ctrlKey || metaKey) {
          _this.handleToggleEditing();
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleReceivingFocus", function () {
      if (_this.props.readOnly) {
        return;
      }

      if (!_this.state.editing) {
        _this.handleToggleEditing();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleToggleEditing", function () {
      if (_this.props.readOnly) {
        return;
      }

      var editing = !_this.editing;

      _this.setState({
        editing: editing,
        resetValue: _this.props.value
      }, function () {
        if (_this.state.editing) {
          _this.props.onEditStart();
        } else {
          _this.props.onEditEnd();
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "selectOnFocus", function (event) {
      return event.target.select();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "toggleBoolean", function () {
      _this.props.onEditStart();

      _this.props.onChange(!_this.props.value, _this.props.value);

      _this.props.onEditEnd();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "renderBoolean", function () {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        type: "checkbox",
        checked: Boolean(_this.props.value),
        disabled: _this.props.readOnly,
        onChange: _this.toggleBoolean,
        ref: _this.createRefWithAutoFocus
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "renderMultiline", function () {
      if (!_this.editing) {
        var lines = (_this.props.value || _this.props.placeholder).split('\n');

        var paragraphs = lines.map(function (line, index) {
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
            key: index
          }, line);
        });
        var className = ['multiline', _this.props.value ? '' : 'placeholder'].join(' ').trim();
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: className,
          onClick: _this.handleToggleEditing
        }, paragraphs);
      }

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("textarea", {
        disabled: _this.props.readOnly,
        onBlur: _this.handleToggleEditing,
        onChange: _this.handleChange,
        onFocus: _this.selectOnFocus,
        onKeyDown: _this.handleKeys,
        onKeyPress: _this.props.onKeyPress,
        onKeyUp: _this.props.onKeyUp,
        placeholder: _this.props.placeholder,
        ref: _this.createRefWithAutoFocus,
        rows: _this.props.value.split('\n').length,
        value: _this.props.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "renderNumber", function () {
      if (!_this.editing) {
        return _this.renderStatic();
      }

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        type: "number",
        disabled: _this.props.readOnly,
        max: _this.props.max,
        min: _this.props.min,
        onBlur: _this.handleToggleEditing,
        onChange: _this.handleChange,
        onFocus: _this.selectOnFocus,
        onKeyDown: _this.handleKeys,
        onKeyPress: _this.props.onKeyPress,
        onKeyUp: _this.props.onKeyUp,
        placeholder: _this.props.placeholder,
        ref: _this.createRefWithAutoFocus,
        step: _this.props.step,
        value: _this.props.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "renderSlider", function () {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        type: "range",
        disabled: _this.props.readOnly,
        max: _this.props.max,
        min: _this.props.min,
        onBlur: _this.handleToggleEditing,
        onChange: _this.handleChange,
        onKeyDown: _this.props.onKeyDown,
        onKeyPress: _this.props.onKeyPress,
        onKeyUp: _this.props.onKeyUp,
        ref: _this.createRefWithAutoFocus,
        step: _this.props.step,
        value: _this.props.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "renderText", function () {
      if (!_this.editing) {
        return _this.renderStatic();
      }

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        type: "text",
        disabled: _this.props.readOnly,
        onBlur: _this.handleToggleEditing,
        onChange: _this.handleChange,
        onFocus: _this.selectOnFocus,
        onKeyDown: _this.handleKeys,
        onKeyPress: _this.props.onKeyPress,
        onKeyUp: _this.props.onKeyUp,
        placeholder: _this.props.placeholder,
        ref: _this.createRefWithAutoFocus,
        value: _this.props.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "renderStatic", function () {
      var _this$props2 = _this.props,
          placeholder = _this$props2.placeholder,
          readOnlyValue = _this$props2.readOnlyValue,
          requireDoubleClick = _this$props2.requireDoubleClick,
          value = _this$props2.value;
      var showPlaceholder = placeholder && !value;
      var displayValue = readOnlyValue !== undefined ? readOnlyValue : value;
      var className = showPlaceholder ? 'placeholder' : '';
      var eventHandlers = {};

      if (!requireDoubleClick) {
        eventHandlers.onClick = _this.handleToggleEditing;
      }

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: className
      }, eventHandlers), showPlaceholder ? placeholder : displayValue);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "renderEditor", function () {
      switch (_this.getEditorType()) {
        case 'boolean':
          return _this.renderBoolean();

        case 'slider':
          return _this.renderSlider();

        case 'multiline':
          return _this.renderMultiline();

        case 'number':
          return _this.renderNumber();

        default:
          return _this.renderText();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "render", function () {
      var _this$props3 = _this.props,
          className = _this$props3.className,
          readOnly = _this$props3.readOnly,
          requireDoubleClick = _this$props3.requireDoubleClick;
      var classes = ['editable', _this.editing ? 'editing' : '', className || '', readOnly ? 'readonly' : ''].filter(Boolean);
      var props = {};

      if (!readOnly && !_this.editing) {
        if (requireDoubleClick) {
          props.onDoubleClick = _this.handleToggleEditing;
        } else {
          props.tabIndex = '0';
          props.onFocus = _this.handleReceivingFocus;
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: classes.join(' ')
      }, props), _this.renderEditor());
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Editable, [{
    key: "editing",
    get: function get() {
      return this.props.forceEditMode || this.state.editing;
    }
  }]);

  return Editable;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Editable, "displayName", 'Editable');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Editable, "defaultProps", {
  className: '',
  forceEditMode: false,
  max: undefined,
  min: undefined,
  onChange: _utilities_noop__WEBPACK_IMPORTED_MODULE_13__["default"],
  onEditEnd: _utilities_noop__WEBPACK_IMPORTED_MODULE_13__["default"],
  onEditStart: _utilities_noop__WEBPACK_IMPORTED_MODULE_13__["default"],
  onKeyDown: _utilities_noop__WEBPACK_IMPORTED_MODULE_13__["default"],
  onKeyPress: _utilities_noop__WEBPACK_IMPORTED_MODULE_13__["default"],
  onKeyUp: _utilities_noop__WEBPACK_IMPORTED_MODULE_13__["default"],
  placeholder: '',
  readOnly: false,
  readOnlyValue: undefined,
  requireDoubleClick: false,
  step: 1,
  type: undefined,
  value: ''
});



/***/ }),

/***/ "./components/Editable/Editable.scss":
/*!*******************************************!*\
  !*** ./components/Editable/Editable.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/EditableList/EditableList.js":
/*!*************************************************!*\
  !*** ./components/EditableList/EditableList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditableList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _EditableList_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditableList.scss */ "./components/EditableList/EditableList.scss");
/* harmony import */ var _EditableList_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_EditableList_scss__WEBPACK_IMPORTED_MODULE_8__);










var EditableList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(EditableList, _Component);

  function EditableList() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EditableList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(EditableList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "state", {
      selected: _this.props.defaultValue
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "handleChange", function (_ref) {
      var target = _ref.target;

      _this.props.onChange(target.value);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "render", function () {
      var _this$props = _this.props,
          className = _this$props.className,
          options = _this$props.options;
      var selected = _this.state.selected;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        className: "editable-list ".concat(className),
        defaultValue: selected,
        onChange: _this.handleChange
      }, options.map(function (option) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          key: option,
          value: option
        }, option);
      }));
    });

    return _this;
  }

  return EditableList;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(EditableList, "defaultProps", {
  className: '',
  defaultValue: '',
  onChange: _utilities_noop__WEBPACK_IMPORTED_MODULE_7__["default"],
  options: []
});



/***/ }),

/***/ "./components/EditableList/EditableList.scss":
/*!***************************************************!*\
  !*** ./components/EditableList/EditableList.scss ***!
  \***************************************************/
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

/***/ "./components/Participants/Participants.js":
/*!*************************************************!*\
  !*** ./components/Participants/Participants.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Participants; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "../node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "../node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_EditableList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/EditableList */ "./components/EditableList/EditableList.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/Link */ "./components/Link/Link.js");
/* harmony import */ var _components_SearchBox_UserSearchBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/SearchBox/UserSearchBox */ "./components/SearchBox/UserSearchBox/UserSearchBox.js");
/* harmony import */ var _icons_nerd_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/icons/nerd.svg */ "./icons/nerd.svg");
/* harmony import */ var _icons_nerd_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_icons_nerd_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _icons_remove_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/icons/remove.svg */ "./icons/remove.svg");
/* harmony import */ var _icons_remove_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_icons_remove_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utilities_compareBy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/utilities/compareBy */ "./utilities/compareBy.js");
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _utilities_pluck__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/utilities/pluck */ "./utilities/pluck.js");
/* harmony import */ var _Participants_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Participants.scss */ "./components/Participants/Participants.scss");
/* harmony import */ var _Participants_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_Participants_scss__WEBPACK_IMPORTED_MODULE_20__);





















var ORDER = {
  editor: 2,
  owner: 1,
  player: 3,
  removed: 4
};

var addParticipants = function addParticipants(map, users, addition) {
  users.forEach(function (user) {
    map.set(user._id, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, map.get(user._id) || user, user, addition));
  });
};

var Participants =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Participants, _Component);

  function Participants() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Participants);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Participants)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "state", {
      edits: [],
      participants: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleSetEdit", function (user) {
      var edit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!user) return;
      var _this$state = _this.state,
          current = _this$state.current,
          edits = _this$state.edits;
      var exists = current.find(function (p) {
        return p._id === user._id;
      });
      var currentEdit = edits.find(function (e) {
        return e._id === user._id;
      }) || {};
      var updated = edits.filter(function (e) {
        return e._id !== user._id;
      });

      if (edit.type === 'added' && !exists) {
        updated.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, user, edit, Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_19__["default"])(currentEdit, 'level', 'order')));
      }

      if (edit.type === 'removed' && exists && currentEdit.type !== 'removed') {
        updated.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, user, edit, Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_19__["default"])(currentEdit, 'level', 'order')));
      }

      if (edit.type === 'updated') {
        updated.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, user, edit));
      }

      _this.setState({
        edits: updated
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleAddUser", function (user) {
      if (!user) return;

      _this.handleSetEdit(user, {
        level: 'player',
        order: ORDER.player,
        type: 'added'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleSetPermission", function (user, level) {
      if (!user) return;

      _this.handleSetEdit(user, {
        level: level,
        order: ORDER[level],
        type: 'updated'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleToggleRemoved", function (user) {
      if (!user) return;

      _this.handleSetEdit(user, {
        level: 'removed',
        order: ORDER.removed,
        type: 'removed'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleSave", function () {
      var participants = _this.state.participants;

      _this.props.onSave({
        editors: participants.filter(function (p) {
          return p.level === 'editor';
        }),
        owners: participants.filter(function (p) {
          return p.level === 'owner';
        }),
        players: participants.filter(function (p) {
          return p.level === 'player';
        })
      });

      _this.setState({
        edits: []
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "render", function () {
      var _this$props = _this.props,
          className = _this$props.className,
          readOnly = _this$props.readOnly,
          saving = _this$props.saving,
          title = _this$props.title;
      var participants = _this.state.participants;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "participants ".concat(className, " ").concat(saving ? 'loading' : '')
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title"
      }, title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_11__["Scrollbars"], {
        className: "contents scrollbars",
        universal: true
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "participant-list"
      }, participants.map(function (user) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "participant row ".concat(user.type || ''),
          key: user._id
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_icons_nerd_svg__WEBPACK_IMPORTED_MODULE_15___default.a, {
          className: "nerd icon"
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_13__["default"], {
          className: "display",
          type: "user",
          slug: user.username
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "name",
          title: user.name
        }, user.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "username",
          title: user.username
        }, "(", user.username, ")")), !readOnly && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_EditableList__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: "role",
          defaultValue: user.level,
          onChange: function onChange(level) {
            return _this.handleSetPermission(user, level);
          },
          options: ['owner', 'editor', 'player']
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_icons_remove_svg__WEBPACK_IMPORTED_MODULE_16___default.a, {
          className: "remove icon",
          onClick: function onClick() {
            return _this.handleToggleRemoved(user);
          }
        })));
      }))), !readOnly && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SearchBox_UserSearchBox__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "add-user",
        onSelect: _this.handleAddUser
      }), _this.state.edits.length !== 0 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        className: "save safe",
        onClick: _this.handleSave
      }, "Save")));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Participants, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var editors = props.editors,
          owners = props.owners,
          players = props.players;
      var edits = state.edits;
      var map = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a();
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

      var current = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(map.values()).sort(Object(_utilities_compareBy__WEBPACK_IMPORTED_MODULE_17__["default"])('order'));

      addParticipants(map, edits);

      var participants = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(map.values()).sort(Object(_utilities_compareBy__WEBPACK_IMPORTED_MODULE_17__["default"])('order'));

      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, state, {
        current: current,
        participants: participants
      });
    }
  }]);

  return Participants;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Participants, "defaultProps", {
  className: '',
  editors: [],
  onSave: _utilities_noop__WEBPACK_IMPORTED_MODULE_18__["default"],
  owners: [],
  players: [],
  readOnly: false,
  saving: false,
  title: 'Participants'
});



/***/ }),

/***/ "./components/Participants/Participants.scss":
/*!***************************************************!*\
  !*** ./components/Participants/Participants.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/SearchBox/CampaignSearchBox/CampaignSearchBox.js":
/*!*********************************************************************!*\
  !*** ./components/SearchBox/CampaignSearchBox/CampaignSearchBox.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SearchBox */ "./components/SearchBox/SearchBox.js");
/* harmony import */ var _icons_campaign_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/icons/campaign.svg */ "./icons/campaign.svg");
/* harmony import */ var _icons_campaign_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icons_campaign_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _CampaignSearchBox_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CampaignSearchBox.scss */ "./components/SearchBox/CampaignSearchBox/CampaignSearchBox.scss");
/* harmony import */ var _CampaignSearchBox_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CampaignSearchBox_scss__WEBPACK_IMPORTED_MODULE_6__);








var renderOption = function renderOption(campaign, index, itemProps) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    key: campaign._id,
    className: "search-result"
  }, itemProps), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_icons_campaign_svg__WEBPACK_IMPORTED_MODULE_4___default.a, null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
    className: "title"
  }, campaign.title));
};

var CampaignSearchBox = function CampaignSearchBox(_ref) {
  var _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? _utilities_noop__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$onSelect,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["onSelect"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SearchBox__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: "campaign",
    limit: 5,
    onSelect: onSelect,
    placeholder: "Search Campaigns...",
    renderOption: renderOption,
    url: "/api/search/campaigns/:searchTerm"
  }, props));
};

CampaignSearchBox.displayName = 'CampaignSearchBox';
/* harmony default export */ __webpack_exports__["default"] = (CampaignSearchBox);

/***/ }),

/***/ "./components/SearchBox/CampaignSearchBox/CampaignSearchBox.scss":
/*!***********************************************************************!*\
  !*** ./components/SearchBox/CampaignSearchBox/CampaignSearchBox.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/SearchBox/FontSearchBox/FontSearchBox.js":
/*!*************************************************************!*\
  !*** ./components/SearchBox/FontSearchBox/FontSearchBox.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SearchBox */ "./components/SearchBox/SearchBox.js");
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _FontSearchBox_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FontSearchBox.scss */ "./components/SearchBox/FontSearchBox/FontSearchBox.scss");
/* harmony import */ var _FontSearchBox_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_FontSearchBox_scss__WEBPACK_IMPORTED_MODULE_5__);







var renderOption = function renderOption(font, index, itemProps) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    key: font.family,
    className: "search-result"
  }, itemProps), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
    className: "family"
  }, font.family), " | ", font.category);
};

var valueGetter = function valueGetter(fontOption) {
  return fontOption.family;
};

var FontSearchBox = function FontSearchBox(_ref) {
  var _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? _utilities_noop__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$onSelect,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["onSelect"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SearchBox__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: "font",
    clearOnSelect: false,
    limit: 5,
    onSelect: onSelect,
    placeholder: "Search Fonts...",
    renderOption: renderOption,
    url: "/api/search/fonts/:searchTerm",
    valueGetter: valueGetter
  }, props));
};

FontSearchBox.displayName = 'FontSearchBox';
/* harmony default export */ __webpack_exports__["default"] = (FontSearchBox);

/***/ }),

/***/ "./components/SearchBox/FontSearchBox/FontSearchBox.scss":
/*!***************************************************************!*\
  !*** ./components/SearchBox/FontSearchBox/FontSearchBox.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./components/SearchBox/UserSearchBox/UserSearchBox.js":
/*!*************************************************************!*\
  !*** ./components/SearchBox/UserSearchBox/UserSearchBox.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/SearchBox */ "./components/SearchBox/SearchBox.js");
/* harmony import */ var _icons_nerd_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/icons/nerd.svg */ "./icons/nerd.svg");
/* harmony import */ var _icons_nerd_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icons_nerd_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _UserSearchBox_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserSearchBox.scss */ "./components/SearchBox/UserSearchBox/UserSearchBox.scss");
/* harmony import */ var _UserSearchBox_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UserSearchBox_scss__WEBPACK_IMPORTED_MODULE_5__);







var renderOption = function renderOption(user, index, itemProps) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: user._id,
    className: "search-result"
  }, itemProps), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_nerd_svg__WEBPACK_IMPORTED_MODULE_3___default.a, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "name"
  }, user.name), " | ", user.username);
};

var UserSearchBox = function UserSearchBox(_ref) {
  var _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? _utilities_noop__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$onSelect;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SearchBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "user",
    limit: 5,
    onSelect: onSelect,
    placeholder: "Search Users...",
    renderOption: renderOption,
    url: "/api/search/users/:searchTerm"
  });
};

UserSearchBox.displayName = 'UserSearchBox';
/* harmony default export */ __webpack_exports__["default"] = (UserSearchBox);

/***/ }),

/***/ "./components/SearchBox/UserSearchBox/UserSearchBox.scss":
/*!***************************************************************!*\
  !*** ./components/SearchBox/UserSearchBox/UserSearchBox.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/SheetList/SheetList.js":
/*!*******************************************!*\
  !*** ./components/SheetList/SheetList.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SheetList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Link */ "./components/Link/Link.js");
/* harmony import */ var _components_Toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Toggle */ "./components/Toggle/Toggle.js");
/* harmony import */ var _icons_public_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/icons/public.svg */ "./icons/public.svg");
/* harmony import */ var _icons_public_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icons_public_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons_secret_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/icons/secret.svg */ "./icons/secret.svg");
/* harmony import */ var _icons_secret_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_icons_secret_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icons_template_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/icons/template.svg */ "./icons/template.svg");
/* harmony import */ var _icons_template_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_icons_template_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SheetList_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SheetList.scss */ "./components/SheetList/SheetList.scss");
/* harmony import */ var _SheetList_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_SheetList_scss__WEBPACK_IMPORTED_MODULE_9__);











var loadSheets = function loadSheets() {
  return fetch('/api/sheet/list-by/campaign', {
    credentials: 'include'
  }).then(function (response) {
    return response.json();
  });
};

function SheetList(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      filter = _useState4[0],
      setFilter = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      sheets = _useState6[0],
      setSheets = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    loadSheets().then(function (json) {
      setSheets(json);
      setLoaded(true);
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "sheet-list ".concat(className)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "title"
  }, "Sheets"), sheets.message ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "message"
  }, sheets.message) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    className: "filter",
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return setFilter(target.value);
    },
    placeholder: "Filter...",
    type: "text",
    value: filter
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], {
    className: "scrollable ".concat(loaded ? 'loaded' : 'loading'),
    universal: true
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", null, sheets.filter(function (s) {
    return s.title.toLowerCase().match(filter.toLowerCase());
  }).map(function (sheet) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
      key: sheet._id
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "link"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: "sheet"
    }, sheet), sheet.title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "properties"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Toggle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onIcon: _icons_secret_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
      offIcon: _icons_public_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
      value: sheet.secret
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Toggle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onIcon: _icons_template_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
      offIcon: _icons_template_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
      value: sheet.template
    })));
  }))))));
}

/***/ }),

/***/ "./components/SheetList/SheetList.scss":
/*!*********************************************!*\
  !*** ./components/SheetList/SheetList.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Sources/Sources.js":
/*!***************************************!*\
  !*** ./components/Sources/Sources.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sources; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Link */ "./components/Link/Link.js");
/* harmony import */ var _components_SearchBox_CampaignSearchBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/SearchBox/CampaignSearchBox */ "./components/SearchBox/CampaignSearchBox/CampaignSearchBox.js");
/* harmony import */ var _icons_campaign_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/icons/campaign.svg */ "./icons/campaign.svg");
/* harmony import */ var _icons_campaign_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_icons_campaign_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _icons_remove_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/icons/remove.svg */ "./icons/remove.svg");
/* harmony import */ var _icons_remove_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_icons_remove_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Sources_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Sources.scss */ "./components/Sources/Sources.scss");
/* harmony import */ var _Sources_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Sources_scss__WEBPACK_IMPORTED_MODULE_12__);














var Sources =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Sources, _Component);

  function Sources() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Sources);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Sources)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleAddSource", function (source) {
      if (!source || _this.props.sources.some(function (s) {
        return s._id === source._id;
      })) {
        return;
      }

      _this.props.onSave(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.props.sources).concat([source]));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleRemoveSource", function (source) {
      if (!source || !_this.props.sources.some(function (s) {
        return s._id === source._id;
      })) {
        return;
      }

      _this.props.onSave(_this.props.sources.filter(function (s) {
        return s._id !== source._id;
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "render", function () {
      var _this$props = _this.props,
          className = _this$props.className,
          placeholder = _this$props.placeholder,
          readOnly = _this$props.readOnly,
          sources = _this$props.sources,
          title = _this$props.title;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "sources ".concat(className)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "title"
      }, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "source-list"
      }, sources.map(function (source) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "campaign row",
          key: source._id
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_icons_campaign_svg__WEBPACK_IMPORTED_MODULE_10___default.a, null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
          campaign: source,
          className: "display",
          subdomain: source.subdomain,
          type: "campaign"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "title",
          title: source.title
        }, source.title)), !readOnly && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_icons_remove_svg__WEBPACK_IMPORTED_MODULE_11___default.a, {
          className: "remove icon",
          onClick: function onClick() {
            return _this.handleRemoveSource(source);
          }
        })));
      })), !readOnly && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SearchBox_CampaignSearchBox__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "add-user",
        onSelect: _this.handleAddSource,
        placeholder: placeholder
      }));
    });

    return _this;
  }

  return Sources;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Sources, "defaultProps", {
  className: '',
  readOnly: true,
  sources: [],
  title: 'Sources'
});



/***/ }),

/***/ "./components/Sources/Sources.scss":
/*!*****************************************!*\
  !*** ./components/Sources/Sources.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ThemeEditor/ThemeEditor.js":
/*!***********************************************!*\
  !*** ./components/ThemeEditor/ThemeEditor.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeEditor; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ColorPicker */ "./components/ColorPicker/ColorPicker.js");
/* harmony import */ var _components_SearchBox_FontSearchBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/SearchBox/FontSearchBox */ "./components/SearchBox/FontSearchBox/FontSearchBox.js");
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");
/* harmony import */ var _utilities_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utilities/range */ "./utilities/range.js");
/* harmony import */ var _ThemeEditor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ThemeEditor.scss */ "./components/ThemeEditor/ThemeEditor.scss");
/* harmony import */ var _ThemeEditor_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ThemeEditor_scss__WEBPACK_IMPORTED_MODULE_7__);








function ThemeEditor(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_Application__WEBPACK_IMPORTED_MODULE_5__["default"]),
      _useContext$campaign = _useContext.campaign,
      campaign = _useContext$campaign === void 0 ? {} : _useContext$campaign,
      updateCampaign = _useContext.updateCampaign;

  var _campaign$theme = campaign.theme,
      theme = _campaign$theme === void 0 ? {} : _campaign$theme;

  var onUpdateColor = function onUpdateColor(key) {
    return function (color) {
      updateCampaign({
        theme: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, color.hex))
      });
    };
  };

  var onUpdateFont = function onUpdateFont(key) {
    return function (font) {
      if (!font) {
        return;
      }

      updateCampaign({
        theme: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, font.family))
      });
    };
  };

  var onUpdateFontSize = function onUpdateFontSize(_ref2) {
    var target = _ref2.target;
    updateCampaign({
      theme: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme, {
        fontSize: target.value
      })
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "theme-editor ".concat(className)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "title"
  }, "Theme"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "input-wrapper font-for-titles"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "Titles"), readOnly ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "display"
  }, theme.fontForTitles) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SearchBox_FontSearchBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    initialValue: theme.fontForTitles,
    onSelect: onUpdateFont('fontForTitles')
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "input-wrapper font-for-text"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "Text"), readOnly ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "display"
  }, theme.fontForText) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SearchBox_FontSearchBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    initialValue: theme.fontForText,
    onSelect: onUpdateFont('fontForText')
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "input-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "UI Color"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "primary",
    color: theme.primary,
    onChange: onUpdateColor('primary'),
    readOnly: readOnly,
    text: "BG",
    textColor: theme.primaryText
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "primaryText",
    color: theme.primaryText,
    onChange: onUpdateColor('primaryText'),
    readOnly: readOnly,
    text: "Text",
    textColor: theme.primary
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "input-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "Text Colors"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "background",
    color: theme.background,
    onChange: onUpdateColor('background'),
    readOnly: readOnly,
    text: "BG",
    textColor: theme.normalText
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "normalText",
    color: theme.normalText,
    onChange: onUpdateColor('normalText'),
    readOnly: readOnly,
    text: "Text",
    textColor: theme.background
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "input-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "Text Size"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    disabled: readOnly,
    onChange: onUpdateFontSize,
    value: theme.fontSize
  }, Object(_utilities_range__WEBPACK_IMPORTED_MODULE_6__["default"])(8, 18).map(function (pixels) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      key: pixels,
      value: "".concat(pixels, "px")
    }, pixels, "px");
  }))));
}

/***/ }),

/***/ "./components/ThemeEditor/ThemeEditor.scss":
/*!*************************************************!*\
  !*** ./components/ThemeEditor/ThemeEditor.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Toggle/Toggle.js":
/*!*************************************!*\
  !*** ./components/Toggle/Toggle.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toggle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_favorite_off_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/icons/favorite-off.svg */ "./icons/favorite-off.svg");
/* harmony import */ var _icons_favorite_off_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icons_favorite_off_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/icons/favorite-on.svg */ "./icons/favorite-on.svg");
/* harmony import */ var _icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _Toggle_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Toggle.scss */ "./components/Toggle/Toggle.scss");
/* harmony import */ var _Toggle_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Toggle_scss__WEBPACK_IMPORTED_MODULE_6__);







function Toggle(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$offIcon = _ref.offIcon,
      offIcon = _ref$offIcon === void 0 ? _icons_favorite_off_svg__WEBPACK_IMPORTED_MODULE_3___default.a : _ref$offIcon,
      _ref$offProps = _ref.offProps,
      offProps = _ref$offProps === void 0 ? {} : _ref$offProps,
      _ref$onIcon = _ref.onIcon,
      onIcon = _ref$onIcon === void 0 ? _icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_4___default.a : _ref$onIcon,
      _ref$onProps = _ref.onProps,
      onProps = _ref$onProps === void 0 ? {} : _ref$onProps,
      _ref$onToggle = _ref.onToggle,
      onToggle = _ref$onToggle === void 0 ? _utilities_noop__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$onToggle,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? false : _ref$value,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "offIcon", "offProps", "onIcon", "onProps", "onToggle", "readOnly", "value"]);

  var Icon = value ? onIcon : offIcon;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Icon, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "toggle ".concat(value ? 'on' : 'off', " ").concat(readOnly ? 'readonly' : '', " ").concat(className),
    onClick: readOnly ? _utilities_noop__WEBPACK_IMPORTED_MODULE_5__["default"] : onToggle
  }, props, value ? onProps : offProps));
}

/***/ }),

/***/ "./components/Toggle/Toggle.scss":
/*!***************************************!*\
  !*** ./components/Toggle/Toggle.scss ***!
  \***************************************/
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

/***/ "./icons/favorite-off.svg":
/*!********************************!*\
  !*** ./icons/favorite-off.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function FavoriteOff (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"Not Marked as Favorite"),React.createElement("path",{"d":"M23.712 30.976q-0.608 0-1.248-0.384l-6.816-3.872-6.88 3.872q-1.408 0.768-2.688-0.096-1.312-0.928-0.992-2.528l1.6-7.776q-0.32-0.288-1.248-1.12t-1.44-1.28l-3.168-2.88q-1.184-1.12-0.672-2.624t2.112-1.728l7.808-0.832 3.264-7.2q0.704-1.504 2.304-1.504 1.504 0 2.272 1.504l3.232 7.2 7.84 0.864q1.536 0.128 2.080 1.664t-0.672 2.656l-5.856 5.312 1.6 7.744q0.224 1.12-0.512 2.048t-1.92 0.96zM10.112 20q-0.032 0.128-0.224 1.152t-0.544 2.688-0.64 2.944l6.080-3.424q0.864-0.448 1.664 0l6.080 3.424-1.408-6.816q-0.192-0.928 0.512-1.568l5.152-4.736-6.944-0.736q-0.96-0.128-1.312-0.96l-2.88-6.368-2.88 6.368q-0.416 0.832-1.376 0.96l-6.912 0.736 5.152 4.736q0.672 0.608 0.48 1.6z","key":1})]);
}

FavoriteOff.defaultProps = {"version":"1.1","width":"31","height":"32","viewBox":"0 0 31 32"};

module.exports = FavoriteOff;

FavoriteOff.default = FavoriteOff;


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

/***/ "./icons/nerd.svg":
/*!************************!*\
  !*** ./icons/nerd.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Nerd (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M184.615 79.708 C 114.418 86.677,72.345 137.710,86.743 198.419 C 87.178 200.253,86.884 200.369,81.184 200.617 L 75.165 200.879 75.232 224.176 C 75.324 255.858,78.248 264.741,93.327 279.147 C 128.703 312.945,190.531 287.963,190.754 239.780 L 190.769 236.484 196.923 236.484 L 203.077 236.484 203.092 239.780 C 203.315 287.963,265.143 312.945,300.519 279.147 C 315.598 264.741,318.522 255.858,318.614 224.176 L 318.681 200.879 312.663 200.617 C 306.962 200.369,306.668 200.253,307.103 198.419 C 313.655 170.791,309.458 146.253,294.544 124.991 C 290.181 118.772,289.770 120.939,297.845 107.594 C 301.615 101.362,305.791 94.375,307.125 92.066 L 309.550 87.869 294.157 95.551 C 285.690 99.776,278.541 103.010,278.269 102.738 C 277.997 102.466,278.770 97.641,279.986 92.016 C 281.203 86.391,282.198 81.599,282.198 81.367 C 282.198 81.136,277.311 84.105,271.339 87.966 L 260.480 94.985 254.951 92.241 C 234.999 82.342,207.477 77.438,184.615 79.708 M282.043 133.407 C 280.568 136.670,276.821 143.771,273.718 149.186 L 268.075 159.031 271.238 163.174 C 277.861 171.851,281.050 180.687,281.912 192.747 L 282.461 200.440 253.223 200.440 L 223.985 200.440 224.537 198.242 L 225.088 196.044 196.923 196.044 L 168.758 196.044 169.309 198.242 L 169.861 200.440 139.330 200.440 L 108.800 200.440 109.172 195.298 C 109.716 187.775,118.535 171.004,130.171 155.368 C 130.447 154.997,133.415 155.941,136.765 157.466 C 182.783 178.416,236.296 169.106,278.242 132.850 C 281.626 129.924,284.470 127.518,284.560 127.502 C 284.651 127.486,283.518 130.143,282.043 133.407 M206.556 210.769 C 206.536 211.132,206.011 213.604,205.391 216.264 L 204.263 221.099 196.923 221.099 L 189.583 221.099 188.455 216.264 C 187.835 213.604,187.310 211.132,187.290 210.769 C 187.270 210.407,191.604 210.110,196.923 210.110 C 202.242 210.110,206.577 210.407,206.556 210.769 M165.046 235.385 C 162.518 280.152,102.767 281.387,101.246 236.703 L 100.909 226.813 133.220 226.813 L 165.530 226.813 165.046 235.385 M292.600 236.703 C 291.079 281.408,231.329 280.174,228.800 235.385 L 228.316 226.813 260.626 226.813 L 292.937 226.813 292.600 236.703 "}));
}

Nerd.defaultProps = {"version":"1.1","viewBox":"0 0 400 400"};

module.exports = Nerd;

Nerd.default = Nerd;


/***/ }),

/***/ "./icons/public.svg":
/*!**************************!*\
  !*** ./icons/public.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Public (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"Public"),React.createElement("path",{"d":"M15.39 11.87C15.39 12.05 15.39 12.94 15.39 14.56C10.26 14.56 7.4 14.56 6.83 14.56C5.82 14.56 5 15.38 5 16.39C5 17.12 5 22.99 5 23.72C5 24.73 5.82 25.55 6.83 25.55C8.18 25.55 18.93 25.55 20.28 25.55C21.29 25.55 22.11 24.73 22.11 23.72C22.11 22.99 22.11 17.12 22.11 16.39C22.11 15.38 21.29 14.56 20.28 14.56C20.16 14.56 19.54 14.56 18.44 14.56C18.44 12.93 18.44 12.02 18.44 11.84C18.44 10.33 19.66 9.07 21.17 9.06C22.7 9.04 23.94 10.28 23.94 11.81C23.94 12.11 23.94 14.56 23.94 14.86C23.94 15.37 24.35 15.78 24.86 15.78C24.98 15.78 25.96 15.78 26.08 15.78C26.59 15.78 27 15.37 27 14.86C27 14.56 27 12.11 27 11.81C27 8.6 24.38 5.99 21.18 6C17.97 6.02 15.39 8.66 15.39 11.87Z","id":"b90YTQhGbf","key":1})]);
}

Public.defaultProps = {"version":"1.1","width":"30","height":"30","viewBox":"5 3 25 23"};

module.exports = Public;

Public.default = Public;


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

/***/ "./icons/secret.svg":
/*!**************************!*\
  !*** ./icons/secret.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Secret (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"Secret"),React.createElement("path",{"d":"M17.03 5.16L17.75 5.36L18.44 5.64L19.09 5.97L19.7 6.38L20.27 6.84L20.79 7.35L21.25 7.92L21.65 8.53L21.99 9.19L22.26 9.88L22.46 10.6L22.58 11.35L22.63 12.13L22.63 15.5L23.75 15.5L24 15.51L24.23 15.55L24.46 15.61L24.68 15.7L24.89 15.81L25.08 15.93L25.26 16.08L25.42 16.24L25.57 16.42L25.69 16.61L25.8 16.82L25.89 17.04L25.95 17.27L25.99 17.5L26 17.75L26 26.75L25.99 27L25.95 27.23L25.89 27.46L25.8 27.68L25.69 27.89L25.57 28.08L25.42 28.26L25.26 28.42L25.08 28.57L24.89 28.69L24.68 28.8L24.46 28.89L24.23 28.95L24 28.99L23.75 29L7.25 29L7 28.99L6.77 28.95L6.54 28.89L6.32 28.8L6.11 28.69L5.92 28.57L5.74 28.42L5.58 28.26L5.43 28.08L5.31 27.89L5.2 27.68L5.11 27.46L5.05 27.23L5.01 27L5 26.75L5 17.75L5.01 17.5L5.05 17.27L5.11 17.04L5.2 16.82L5.31 16.61L5.43 16.42L5.58 16.24L5.74 16.08L5.92 15.93L6.11 15.81L6.32 15.7L6.54 15.61L6.77 15.55L7 15.51L7.25 15.5L8.38 15.5L8.38 12.13L8.42 11.35L8.54 10.6L8.74 9.88L9.01 9.19L9.35 8.53L9.75 7.92L10.21 7.35L10.73 6.84L11.3 6.38L11.91 5.97L12.56 5.64L13.25 5.36L13.97 5.16L14.72 5.04L15.5 5L16.28 5.04L17.03 5.16ZM13.11 9.74L12.39 10.81L12.13 12.13L12.13 15.5L18.88 15.5L18.88 12.13L18.61 10.81L17.89 9.74L16.81 9.02L15.5 8.75L14.19 9.02L13.11 9.74Z","id":"b7agiUAQvt","key":1})]);
}

Secret.defaultProps = {"version":"1.1","width":"26.25","height":"30","viewBox":"4 4 25 28"};

module.exports = Secret;

Secret.default = Secret;


/***/ }),

/***/ "./icons/template.svg":
/*!****************************!*\
  !*** ./icons/template.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Template (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"Template"),React.createElement("path",{"d":"M990,804.4c0,0-96.8,19.4-195.1,39.7C729.5,917,664.3,989.7,664.3,989.7L523.9,750.2c-8,0.5-15.8,1.2-23.9,1.2c-8.1,0-16-0.7-23.9-1.2L335.7,989.7c0,0-65.2-72.7-130.7-145.6C106.8,823.9,10,804.4,10,804.4l152.7-260.5c-24.6-49.3-38.8-104.5-38.8-163.1c0-204.6,168.4-370.6,376.1-370.6c207.7,0,376.1,165.9,376.1,370.6c0,58.6-14.2,113.8-38.8,163.1L990,804.4z M671.5,878.6c0,0,47-44.6,91.2-87.5c62.6-17.8,125.9-36,125.9-36L800,603.7c-51.2,66.8-124.6,115.8-209.5,136.5L671.5,878.6z M111.3,755.1c0,0,63.3,18.1,125.9,36c44.2,42.9,91.2,87.5,91.2,87.5l81.1-138.5c-84.9-20.7-158.4-69.7-209.5-136.5L111.3,755.1z M500,71.1c-168.9,0-305.8,137.2-305.8,306.4c0,169.2,136.9,306.4,305.8,306.4c168.9,0,305.8-137.2,305.8-306.4C805.8,208.3,668.9,71.1,500,71.1z M500,591.8c-118.3,0-214.3-95.9-214.3-214.3c0-118.3,95.9-214.3,214.3-214.3c118.3,0,214.3,95.9,214.3,214.3C714.3,495.9,618.3,591.8,500,591.8z M500,224.5c-84.5,0-153,68.5-153,153c0,84.5,68.5,153,153,153c84.5,0,153-68.5,153-153C653,293.1,584.5,224.5,500,224.5z","key":1})]);
}

Template.defaultProps = {"version":"1.1","viewBox":"0 0 1000 1000","xmlSpace":"preserve"};

module.exports = Template;

Template.default = Template;


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

/***/ "./pages/campaign.js":
/*!***************************!*\
  !*** ./pages/campaign.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CampaignPage; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Editable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/Editable */ "./components/Editable/Editable.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/Link */ "./components/Link/Link.js");
/* harmony import */ var _components_Participants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/Participants */ "./components/Participants/Participants.js");
/* harmony import */ var _components_SheetList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/SheetList */ "./components/SheetList/SheetList.js");
/* harmony import */ var _components_Sources__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/Sources */ "./components/Sources/Sources.js");
/* harmony import */ var _components_ThemeEditor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/ThemeEditor */ "./components/ThemeEditor/ThemeEditor.js");
/* harmony import */ var _components_Toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/Toggle */ "./components/Toggle/Toggle.js");
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");
/* harmony import */ var _icons_public_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/icons/public.svg */ "./icons/public.svg");
/* harmony import */ var _icons_public_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_icons_public_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _icons_secret_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/icons/secret.svg */ "./icons/secret.svg");
/* harmony import */ var _icons_secret_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_icons_secret_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _pages_error__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/pages/_error */ "./pages/_error.js");
/* harmony import */ var _utilities_pluck__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/utilities/pluck */ "./utilities/pluck.js");
/* harmony import */ var _campaign_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./campaign.scss */ "./pages/campaign.scss");
/* harmony import */ var _campaign_scss__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_campaign_scss__WEBPACK_IMPORTED_MODULE_24__);

























var EDITABLE_FIELDS = ['title'];
var STATE_FIELDS = EDITABLE_FIELDS.concat(['isEditor', 'isOwner', 'isPlayer']);

var CampaignPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(CampaignPage, _Component);

  function CampaignPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CampaignPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(CampaignPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "state", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_23__["default"])(_this.context.campaign, STATE_FIELDS), {
      savingParticipants: false
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleParticipantsSave", function (_ref) {
      var editors = _ref.editors,
          owners = _ref.owners,
          players = _ref.players;

      _this.setState({
        savingParticipants: true
      });

      var update = {
        editors: editors.map(function (user) {
          return user._id;
        }),
        owners: owners.map(function (user) {
          return user._id;
        }),
        players: players.map(function (user) {
          return user._id;
        })
      };

      _this.context.updateCampaign(update, function () {
        _this.setState({
          savingParticipants: false
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleReset", function () {
      return _this.setState(Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_23__["default"])(_this.context.campaign, STATE_FIELDS));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleSave", function () {
      return _this.context.updateCampaign(_this.state);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleSourcesChange", function (sources) {
      _this.context.updateCampaign({
        sources: sources.map(function (s) {
          return s._id;
        })
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleTitleChange", function (title) {
      return _this.setState({
        title: title
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleToggleSecret", function () {
      var secret = _this.context.campaign.secret;

      _this.context.updateCampaign({
        secret: !secret
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "renderUserList", function (list) {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "user-list"
      }, list.map(function (_ref2) {
        var _id = _ref2._id,
            name = _ref2.name,
            username = _ref2.username;
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          key: _id
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_13__["default"], {
          type: "user",
          slug: username
        }, name || username));
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "render", function () {
      var campaign = _this.context.campaign;

      if (!campaign._id) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_pages_error__WEBPACK_IMPORTED_MODULE_22__["default"], {
          statusCode: 404,
          message: campaign.message
        });
      }

      var editors = campaign.editors,
          isEditor = campaign.isEditor,
          isOwner = campaign.isOwner,
          isParticipant = campaign.isParticipant,
          owners = campaign.owners,
          players = campaign.players,
          secret = campaign.secret,
          sources = campaign.sources;
      var _this$state = _this.state,
          savingParticipants = _this$state.savingParticipants,
          title = _this$state.title;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "campaign page"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title-bar"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "title",
        onChange: _this.handleTitleChange,
        placeholder: "Campaign Title",
        readOnly: campaign.isEditable,
        value: title
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Toggle__WEBPACK_IMPORTED_MODULE_18__["default"], {
        className: "secret",
        offIcon: _icons_public_svg__WEBPACK_IMPORTED_MODULE_20___default.a,
        onIcon: _icons_secret_svg__WEBPACK_IMPORTED_MODULE_21___default.a,
        onToggle: _this.handleToggleSecret,
        readOnly: !isOwner,
        value: secret
      }), _this.isDirty && isOwner && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        className: "safe",
        onClick: _this.handleSave
      }, "Save"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        className: "safe",
        onClick: _this.handleReset
      }, "Reset"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_11__["Scrollbars"], {
        className: "contents scrollbars",
        universal: true,
        autoHide: true
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "left column"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Participants__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        className: "lightbox"
      }, {
        editors: editors,
        owners: owners,
        players: players
      }, {
        onSave: _this.handleParticipantsSave,
        saving: savingParticipants,
        readOnly: !isEditor
      })), isParticipant && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SheetList__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: "lightbox"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "right column"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Sources__WEBPACK_IMPORTED_MODULE_16__["default"], {
        className: "lightbox",
        onSave: _this.handleSourcesChange,
        placeholder: "Add Source Campaign...",
        readOnly: !isEditor,
        sources: sources
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_ThemeEditor__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: "lightbox",
        readOnly: !isEditor
      }))));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CampaignPage, [{
    key: "isDirty",
    get: function get() {
      var campaign = this.context.campaign;

      var fromContext = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_23__["default"])(campaign, EDITABLE_FIELDS));

      var fromState = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_23__["default"])(this.state, EDITABLE_FIELDS));

      return fromContext !== fromState;
    }
  }]);

  return CampaignPage;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(CampaignPage, "contextType", _contexts_Application__WEBPACK_IMPORTED_MODULE_19__["default"]);



/***/ }),

/***/ "./pages/campaign.scss":
/*!*****************************!*\
  !*** ./pages/campaign.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utilities/bound.js":
/*!****************************!*\
  !*** ./utilities/bound.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value, _ref) {
  var min = _ref.min,
      max = _ref.max;
  if (min !== undefined && value < min) return min;
  if (max !== undefined && value > max) return max;
  return value;
});

/***/ }),

/***/ "./utilities/compareBy.js":
/*!********************************!*\
  !*** ./utilities/compareBy.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "../node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (prop) {
  var reversed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function (objectA, objectB) {
    var a = String(objectA instanceof _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a ? objectA.get(prop) : objectA[prop]);
    var b = String(objectB instanceof _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a ? objectB.get(prop) : objectB[prop]);
    if (reversed) return b.localeCompare(a);
    return a.localeCompare(b);
  };
});

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

/***/ "./utilities/range.js":
/*!****************************!*\
  !*** ./utilities/range.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");

/* harmony default export */ __webpack_exports__["default"] = (function (start, end) {
  var step = start <= end ? 1 : -1;
  var length = Math.abs(end - start) / Math.abs(step) + 1;
  return Array.apply(void 0, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(length))).map(function (_, i) {
    return start + i * step;
  });
});

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/campaign.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/data-drive/git/nerdrage/source/pages/campaign.js */"./pages/campaign.js");


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

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/number/is-nan":
/*!***************************************************!*\
  !*** external "core-js/library/fn/number/is-nan" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/number/is-nan");

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

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

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

/***/ "react-color":
/*!******************************!*\
  !*** external "react-color" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

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

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=campaign.js.map