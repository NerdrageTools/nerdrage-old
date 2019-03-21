webpackHotUpdate("static/development/pages/user.js",{

/***/ "./components/ArticleChildren/ArticleChildren.js":
/*!*******************************************************!*\
  !*** ./components/ArticleChildren/ArticleChildren.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArticleChildren; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/PageLink */ "./components/PageLink/PageLink.js");
/* harmony import */ var _icons_tag_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/icons/tag.svg */ "./icons/tag.svg");
/* harmony import */ var _icons_tag_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icons_tag_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ArticleChildren_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArticleChildren.scss */ "./components/ArticleChildren/ArticleChildren.scss");
/* harmony import */ var _ArticleChildren_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ArticleChildren_scss__WEBPACK_IMPORTED_MODULE_3__);




function ArticleChildren(_ref) {
  var _ref$articles = _ref.articles,
      articles = _ref$articles === void 0 ? [] : _ref$articles,
      _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? 'Child Articles' : _ref$caption,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_tag_svg__WEBPACK_IMPORTED_MODULE_2___default.a, null) : _ref$icon,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'article' : _ref$type;
  if (!articles.length) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tag-browser is-hidden"
  });
  var links = articles.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  }).map(function (_ref2) {
    var campaign = _ref2.campaign,
        slug = _ref2.slug,
        title = _ref2.title;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: slug,
      title: "".concat(campaign.title, ": ").concat(title)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      campaign: campaign,
      slug: slug,
      type: type
    }, title));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "article-children ".concat(className).trim()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, icon, " ", caption), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "link-list"
  }, links));
}

/***/ })

})
//# sourceMappingURL=user.js.54508c9db812a39f2885.hot-update.js.map