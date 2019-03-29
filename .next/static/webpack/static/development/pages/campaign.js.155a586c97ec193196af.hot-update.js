webpackHotUpdate("static/development/pages/campaign.js",{

/***/ "./components/SearchBox/UserSearchBox/UserSearchBox.js":
/*!*************************************************************!*\
  !*** ./components/SearchBox/UserSearchBox/UserSearchBox.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
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
    renderOption: renderOption,
    url: "/api/search/users/:searchTerm"
  });
};

UserSearchBox.displayName = 'UserSearchBox';
/* harmony default export */ __webpack_exports__["default"] = (UserSearchBox);

/***/ })

})
//# sourceMappingURL=campaign.js.155a586c97ec193196af.hot-update.js.map