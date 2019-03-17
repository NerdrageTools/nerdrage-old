webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_CreateMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/CreateMenu */ "./components/CreateMenu/CreateMenu.js");
/* harmony import */ var _components_FlyoutMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/FlyoutMenu */ "./components/FlyoutMenu/FlyoutMenu.js");
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
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/login?redirectTo=".concat(redirectTo)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "logon"
      }, "Log In"));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "renderLoggedIn", function () {
      var MenuType = _this.context.campaign ? _components_CreateMenu__WEBPACK_IMPORTED_MODULE_8__["default"] : _components_FlyoutMenu__WEBPACK_IMPORTED_MODULE_9__["default"];
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/user/".concat(_this.context.user.username)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "username"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "logged in as"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, _this.context.user.username))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "divider"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MenuType, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_FlyoutMenu__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
        className: "logoff",
        onClick: _this.context.logOff
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_icons_logout_svg__WEBPACK_IMPORTED_MODULE_11___default.a, null), " Log Out")));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "user-menu"
      }, _this.context.user.anonymous ? _this.renderAnonymous() : _this.renderLoggedIn());
    });

    return _this;
  }

  return UserMenu;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(UserMenu, "contextType", _contexts_Application__WEBPACK_IMPORTED_MODULE_10__["default"]);



/***/ })

})
//# sourceMappingURL=_app.js.cef9176b8e2f1c197fa5.hot-update.js.map