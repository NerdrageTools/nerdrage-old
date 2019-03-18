webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-custom-scrollbars */ "../node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ArticleLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/ArticleLink */ "./components/ArticleLink/ArticleLink.js");
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _utilities_pluck__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/utilities/pluck */ "./utilities/pluck.js");
/* harmony import */ var _Navigation_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Navigation.scss */ "./components/Navigation/Navigation.scss");
/* harmony import */ var _Navigation_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Navigation_scss__WEBPACK_IMPORTED_MODULE_14__);
















var Navigation =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navigation, _Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)), "renderList", function () {
      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var listTitle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'article';
      return Boolean(list.length) && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, listTitle), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "favorites"
      }, list.map(function (_ref, key) {
        var _ref$campaign = _ref.campaign,
            campaign = _ref$campaign === void 0 ? {} : _ref$campaign,
            slug = _ref.slug,
            title = _ref.title;
        var _campaign$domain = campaign.domain,
            domain = _campaign$domain === void 0 ? '' : _campaign$domain,
            _campaign$title = campaign.title,
            cTitle = _campaign$title === void 0 ? '' : _campaign$title;
        var text = title;

        if (type !== 'campaign' && domain && domain !== _this.context.domain) {
          text += " (".concat(cTitle || domain, ")");
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_ArticleLink__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          campaign: campaign,
          slug: slug,
          type: type
        }, {
          active: _this.context.domain === domain && _this.context.router.asPath === "/".concat(type, "/").concat(slug),
          onClick: _this.props.onItemClick
        }), text));
      })));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)), "render", function () {
      var _this$context = _this.context,
          campaign = _this$context.campaign,
          _this$context$user = _this$context.user,
          user = _this$context$user === void 0 ? {} : _this$context$user;
      var _user$favorites = user.favorites,
          favorites = _user$favorites === void 0 ? [] : _user$favorites,
          _user$sheets = user.sheets,
          sheets = _user$sheets === void 0 ? [] : _user$sheets;
      if (!campaign) return null;
      var navigation = campaign.navigation.map(function (link) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, link, {
          campaign: Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_13__["default"])(campaign, '_id', 'domain', 'title')
        });
      }); // eslint-disable-next-line no-shadow

      var campaigns = (user.campaigns || []).map(function (campaign) {
        return {
          campaign: campaign,
          title: campaign.title
        };
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_9__["Scrollbars"], {
        className: "navigation",
        autoHide: true,
        universal: true
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "content",
        ref: _this.props.wrapperRef
      }, _this.renderList(navigation, campaign.title), user && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, _this.renderList(campaigns, 'My Campaigns', 'campaign'), _this.renderList(favorites, 'My Favorites'), _this.renderList(sheets, 'My Sheets', 'sheet'))));
    });

    return _this;
  }

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Navigation, "contextType", _contexts_Application__WEBPACK_IMPORTED_MODULE_11__["default"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Navigation, "defaultProps", {
  items: [],
  onItemClick: _utilities_noop__WEBPACK_IMPORTED_MODULE_12__["default"],
  wrapperRef: _utilities_noop__WEBPACK_IMPORTED_MODULE_12__["default"]
});



/***/ })

})
//# sourceMappingURL=_app.js.35b7884abf402a969ffe.hot-update.js.map