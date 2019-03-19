webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/SearchBox */ "./components/SearchBox/SearchBox.js");
/* harmony import */ var _components_UserMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/UserMenu */ "./components/UserMenu/UserMenu.js");
/* harmony import */ var _icons_Categorize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/icons/Categorize */ "./icons/Categorize.js");
/* harmony import */ var _icons_fist_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/icons/fist.svg */ "./icons/fist.svg");
/* harmony import */ var _icons_fist_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_icons_fist_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header.scss */ "./components/Header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_7__);








function Header(_ref) {
  var _ref$onNavigationIcon = _ref.onNavigationIconClick,
      onNavigationIconClick = _ref$onNavigationIcon === void 0 ? _utilities_noop__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$onNavigationIcon;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "header"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/article/home"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_fist_svg__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "logo x2"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "nerd"
  }, "Nerd"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "rage"
  }, "RAGE"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SearchBox__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_Categorize__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "navigation toggle",
    onClick: onNavigationIconClick
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UserMenu__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/***/ }),

/***/ "./icons/Categorize.js":
/*!*****************************!*\
  !*** ./icons/Categorize.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'categorize' : _ref$title,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32"
  }, props), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M32 22.272v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.704 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424h-9.12v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.736 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424h-9.12v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.736 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424q0-0.928 0.672-1.632t1.632-0.672h9.12v-3.424h-1.696q-0.736 0-1.216-0.512t-0.512-1.184v-5.728q0-0.704 0.512-1.216t1.216-0.512h5.696q0.736 0 1.216 0.512t0.512 1.216v5.728q0 0.704-0.512 1.184t-1.216 0.512h-1.696v3.424h9.12q0.928 0 1.632 0.672t0.672 1.632v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216z"
  }));
});

/***/ }),

/***/ "./icons/categorize.svg":
false

})
//# sourceMappingURL=_app.js.3d3c8560f1cde6a8de64.hot-update.js.map