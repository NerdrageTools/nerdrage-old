webpackHotUpdate("static/development/pages/article.js",{

/***/ "./pages/article.js":
/*!**************************!*\
  !*** ./pages/article.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Article; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "../node_modules/isomorphic-unfetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-server/dynamic */ "../node_modules/next-server/dynamic.js");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_server_dynamic__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_parser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-jsx-parser */ "../node_modules/react-jsx-parser/lib/react-jsx-parser.min.js");
/* harmony import */ var react_jsx_parser__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_parser__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/Alert */ "./components/Alert/Alert.js");
/* harmony import */ var _components_ArticleChildren__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/ArticleChildren */ "./components/ArticleChildren/ArticleChildren.js");
/* harmony import */ var _components_Editable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/Editable */ "./components/Editable/Editable.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/components/Link */ "./components/Link/Link.js");
/* harmony import */ var _components_TabSet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/components/TabSet */ "./components/TabSet/TabSet.js");
/* harmony import */ var _components_TagBar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/components/TagBar */ "./components/TagBar/TagBar.js");
/* harmony import */ var _components_Toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/components/Toggle */ "./components/Toggle/Toggle.js");
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");
/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/icons/edit.svg */ "./icons/edit.svg");
/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_icons_edit_svg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _icons_favorite_off_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/icons/favorite-off.svg */ "./icons/favorite-off.svg");
/* harmony import */ var _icons_favorite_off_svg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_icons_favorite_off_svg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/icons/favorite-on.svg */ "./icons/favorite-on.svg");
/* harmony import */ var _icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _icons_html_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/icons/html.svg */ "./icons/html.svg");
/* harmony import */ var _icons_html_svg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_icons_html_svg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _icons_Navigation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @/icons/Navigation */ "./icons/Navigation.js");
/* harmony import */ var _icons_private_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @/icons/private.svg */ "./icons/private.svg");
/* harmony import */ var _icons_private_svg__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_icons_private_svg__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _icons_public_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @/icons/public.svg */ "./icons/public.svg");
/* harmony import */ var _icons_public_svg__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_icons_public_svg__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _icons_read_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @/icons/read.svg */ "./icons/read.svg");
/* harmony import */ var _icons_read_svg__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_icons_read_svg__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _icons_settings_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @/icons/settings.svg */ "./icons/settings.svg");
/* harmony import */ var _icons_settings_svg__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_icons_settings_svg__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _utilities_confirm__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @/utilities/confirm */ "./utilities/confirm.js");
/* harmony import */ var _utilities_pluck__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @/utilities/pluck */ "./utilities/pluck.js");
/* harmony import */ var _utilities_URI__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @/utilities/URI */ "./utilities/URI.js");
/* harmony import */ var _article_scss__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./article.scss */ "./pages/article.scss");
/* harmony import */ var _article_scss__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_article_scss__WEBPACK_IMPORTED_MODULE_36__);






































var HtmlEditor = function HtmlEditor() {
  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null);
};

var WysiwygEditor = function WysiwygEditor() {
  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null);
};

if ( true && window) {
  WysiwygEditor = next_server_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(function () {
    return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! @/components/WysiwygEditor */ "./components/WysiwygEditor/WysiwygEditor.js"));
  }, {
    loadableGenerated: {
      webpack: function webpack() {
        return [/*require.resolve*/(/*! @/components/WysiwygEditor */ "./components/WysiwygEditor/WysiwygEditor.js")];
      },
      modules: ['@/components/WysiwygEditor']
    }
  });
  HtmlEditor = next_server_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(function () {
    return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! @/components/HtmlEditor */ "./components/HtmlEditor/HtmlEditor.js"));
  }, {
    loadableGenerated: {
      webpack: function webpack() {
        return [/*require.resolve*/(/*! @/components/HtmlEditor */ "./components/HtmlEditor/HtmlEditor.js")];
      },
      modules: ['@/components/HtmlEditor']
    }
  });
}

var STATE_FIELDS = ['aliases', 'html', 'secret', 'slug', 'tags', 'title'];

var Article =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Article, _Component);

  function Article() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Article);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Article)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "state", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({
      activeTab: 'read'
    }, Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_34__["default"])(_this.props, STATE_FIELDS), {
      saved: _this.props._id ? Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_34__["default"])(_this.props, STATE_FIELDS) : {},
      title: _this.props.title || _this.context.router.query.title
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleAliasesChange", function (aliases) {
      return _this.setState({
        aliases: aliases
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleDelete",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_utilities_confirm__WEBPACK_IMPORTED_MODULE_33__["default"])('Are you sure you want to permanently delete this article?');

            case 2:
              if (_context.sent) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              _context.next = 6;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("/api/article/".concat(_this.props.slug), {
                method: 'DELETE'
              });

            case 6:
              response = _context.sent;

              if (response.status === 204) {
                _this.context.router.push('/article/home');
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleHtmlChange", function (html) {
      return _this.setState({
        html: html
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleSave",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      var saved;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("/api/article/".concat(_this.props.slug), {
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_34__["default"])(_this.state, STATE_FIELDS)),
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST'
              }).then(function (r) {
                return r.json();
              });

            case 2:
              saved = _context2.sent;

              _this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, saved, {
                saved: saved
              }));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleTabClicked", function (tab) {
      if (tab !== _this.state.activeTab) {
        _this.setState({
          activeTab: tab
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleTagsChange", function (tags) {
      return _this.setState({
        tags: tags
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleTitleChange", function (title) {
      return _this.setState({
        title: title
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleToggleFavorite",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
      var updated;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("/api/user/favorites/".concat(_this.props.slug), {
                method: 'POST'
              }).then(function (r) {
                return r.json();
              });

            case 2:
              updated = _context3.sent;

              _this.context.setUser(updated);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleToggleNavigation",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
      var _this$props, slug, title, campaign, navigation, result, json;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this$props = _this.props, slug = _this$props.slug, title = _this$props.title;
              campaign = _this.context.campaign;

              if (campaign) {
                _context4.next = 4;
                break;
              }

              return _context4.abrupt("return");

            case 4:
              navigation = campaign.navigation || [];

              if (_this.isNavLink) {
                navigation = navigation.filter(function (n) {
                  return n.slug !== slug;
                });
              } else {
                navigation.push({
                  slug: slug,
                  title: title
                });
              }

              _context4.next = 8;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("/api/campaign/".concat(_this.context.campaign.domain), {
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                  navigation: navigation
                }),
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST'
              });

            case 8:
              result = _context4.sent;
              _context4.next = 11;
              return result.json();

            case 11:
              json = _context4.sent;

              if (result.status === 200) {
                _this.context.setCampaign(json);
              }

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleToggleSecret",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5() {
      var payload, response, updated;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              payload = {
                secret: !_this.state.secret
              };
              _context5.next = 3;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("/api/article/".concat(_this.props.slug), {
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(payload),
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST'
              });

            case 3:
              response = _context5.sent;
              _context5.t0 = _utilities_pluck__WEBPACK_IMPORTED_MODULE_34__["default"];
              _context5.next = 7;
              return response.json();

            case 7:
              _context5.t1 = _context5.sent;
              updated = (0, _context5.t0)(_context5.t1, 'secret');

              if (response.status === 200) {
                _this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, updated, {
                  saved: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, _this.state.saved, updated)
                }));
              }

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "renderReadOnlyContent", function () {
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_jsx_parser__WEBPACK_IMPORTED_MODULE_15___default.a, {
        components: {
          a: _components_Link__WEBPACK_IMPORTED_MODULE_19__["default"]
        },
        jsx: _this.state.html || _this.props.html
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_ArticleChildren__WEBPACK_IMPORTED_MODULE_17__["default"], {
        articles: _this.props.childArticles
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "renderSettingsTab", function () {
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("fieldset", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("legend", null, "Aliases"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_TagBar__WEBPACK_IMPORTED_MODULE_21__["default"], {
        banned: [_this.state.slug],
        className: "aliases",
        onChange: _this.handleAliasesChange,
        tags: _this.state.aliases,
        inputSettings: {
          placeholder: 'add alias'
        },
        readOnly: !_this.props.isEditable
      })), _this.props.isEditable && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("fieldset", {
        className: "danger"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("legend", {
        className: "danger"
      }, "Danger"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("button", {
        className: "danger",
        onClick: _this.handleDelete
      }, "Delete"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, "Warning: This cannot be undone."))));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "render", function () {
      var _this$state = _this.state,
          activeTab = _this$state.activeTab,
          aliases = _this$state.aliases,
          html = _this$state.html,
          redirectedFrom = _this$state.redirectedFrom,
          secret = _this$state.secret,
          tags = _this$state.tags,
          title = _this$state.title;
      var _this$props2 = _this.props,
          httpStatusCode = _this$props2.httpStatusCode,
          isEditable = _this$props2.isEditable,
          isOwner = _this$props2.isOwner,
          message = _this$props2.message,
          slug = _this$props2.slug;
      var _this$context$user$fa = _this.context.user.favorites,
          favorites = _this$context$user$fa === void 0 ? [] : _this$context$user$fa;
      var _this$context$campaig = _this.context.campaign,
          campaign = _this$context$campaig === void 0 ? {} : _this$context$campaig;
      var isFavorite = favorites.find(function (f) {
        return f.campaign.domain === campaign.domain && f.slug === slug;
      });

      if (httpStatusCode !== 200) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "article page"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_16__["default"], {
          type: "error"
        }, message));
      }

      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "article page"
      }, message && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_16__["default"], null, message), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "title-bar"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_18__["default"], {
        className: "title",
        onChange: _this.handleTitleChange,
        readOnly: !isEditable,
        value: title
      }), redirectedFrom && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "redirected-from"
      }, "Redirected From: ", react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("b", null, redirectedFrom)), isOwner && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Toggle__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: "secret",
        offIcon: _icons_public_svg__WEBPACK_IMPORTED_MODULE_30___default.a,
        onIcon: _icons_private_svg__WEBPACK_IMPORTED_MODULE_29___default.a,
        onToggle: _this.handleToggleSecret,
        value: secret
      }), campaign.isEditor && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Toggle__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: "in-navigation",
        value: _this.isNavLink,
        offIcon: _icons_Navigation__WEBPACK_IMPORTED_MODULE_28__["default"],
        onIcon: _icons_Navigation__WEBPACK_IMPORTED_MODULE_28__["default"],
        onToggle: _this.handleToggleNavigation
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Toggle__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: "favorite",
        offIcon: _icons_favorite_off_svg__WEBPACK_IMPORTED_MODULE_25___default.a,
        onIcon: _icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_26___default.a,
        onToggle: _this.handleToggleFavorite,
        value: isFavorite
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_TabSet__WEBPACK_IMPORTED_MODULE_20__["default"], {
        activeTabId: activeTab,
        buttons: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, _this.isDirty && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("button", {
          className: "safe",
          onClick: _this.handleSave
        }, "Save")),
        onTabClicked: _this.handleTabClicked,
        showTabs: isEditable,
        tabs: [{
          contents: _this.renderReadOnlyContent(),
          id: 'read',
          tab: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_icons_read_svg__WEBPACK_IMPORTED_MODULE_31___default.a, null)
        }, {
          contents: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(WysiwygEditor, {
            html: html,
            onChange: _this.handleHtmlChange
          }),
          id: 'edit',
          tab: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_icons_edit_svg__WEBPACK_IMPORTED_MODULE_24___default.a, null)
        }, {
          contents: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(HtmlEditor, {
            value: html,
            onChange: _this.handleHtmlChange
          }),
          id: 'html',
          tab: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_icons_html_svg__WEBPACK_IMPORTED_MODULE_27___default.a, null)
        }, {
          contents: _this.renderSettingsTab(),
          id: 'settings',
          tab: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_icons_settings_svg__WEBPACK_IMPORTED_MODULE_32___default.a, null)
        }].filter(Boolean)
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_TagBar__WEBPACK_IMPORTED_MODULE_21__["default"], {
        asLinks: true,
        banned: [slug].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(aliases)),
        className: "tags",
        onChange: _this.handleTagsChange,
        tags: tags,
        readOnly: !isEditable
      }));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Article, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var slug = this.props.slug;
      var router = this.context.router;

      if (router.query.slug !== slug) {
        this.setState({
          redirectedFrom: router.query.slug
        });
        router.push("/article?slug=".concat(slug), "/article/".concat(slug), {
          shallow: true
        });
      }
    }
  }, {
    key: "isDirty",
    get: function get() {
      var fromState = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_34__["default"])(this.state, STATE_FIELDS));

      var fromSaved = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_34__["default"])(this.state.saved, STATE_FIELDS));

      return fromState !== fromSaved;
    }
  }, {
    key: "isNavLink",
    get: function get() {
      var _this2 = this;

      var _this$context$campaig2 = this.context.campaign,
          campaign = _this$context$campaig2 === void 0 ? {} : _this$context$campaig2;
      if (!campaign.navigation || !campaign.navigation.length) return false;
      return Boolean(campaign.navigation.find(function (n) {
        return n.slug === _this2.props.slug;
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.slug !== state.slug) {
        var saved = Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_34__["default"])(props, STATE_FIELDS);
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({
          activeTab: 'read'
        }, saved, {
          saved: saved,
          title: props.title || new URLSearchParams(window.location.search).get('title') || ''
        });
      }

      return state;
    }
  }]);

  return Article;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Article, "contextType", _contexts_Application__WEBPACK_IMPORTED_MODULE_23__["default"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Article, "defaultProps", {
  childArticles: [],
  html: '',
  httpStatusCode: 200,
  message: '',
  title: ''
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Article, "getInitialProps",
/*#__PURE__*/
function () {
  var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(_ref6) {
    var query, req, headers, result, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            query = _ref6.query, req = _ref6.req;
            headers = Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_34__["default"])(req && req.headers, 'cookie');
            _context6.next = 4;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()(Object(_utilities_URI__WEBPACK_IMPORTED_MODULE_35__["default"])(req, "/api/article/".concat(query.slug)), {
              headers: headers
            });

          case 4:
            result = _context6.sent;
            _context6.next = 7;
            return result.json();

          case 7:
            json = _context6.sent;
            return _context6.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({
              httpStatusCode: result.status
            }, json));

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function (_x) {
    return _ref7.apply(this, arguments);
  };
}());



/***/ })

})
//# sourceMappingURL=article.js.21dcc3a6b8ff59160dd5.hot-update.js.map