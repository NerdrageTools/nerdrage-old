webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "../node_modules/isomorphic-unfetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/app */ "../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");
/* harmony import */ var _data_defaultTheme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/data/defaultTheme */ "./data/defaultTheme.js");
/* harmony import */ var _pages_error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/pages/_error */ "./pages/_error.js");
/* harmony import */ var _utilities_pluck__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/utilities/pluck */ "./utilities/pluck.js");
/* harmony import */ var _utilities_URI__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/utilities/URI */ "./utilities/URI.js");
/* harmony import */ var _styles_all_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/styles/all.scss */ "./styles/all.scss");
/* harmony import */ var _styles_all_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_all_scss__WEBPACK_IMPORTED_MODULE_19__);





















var Wiki =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Wiki, _App);

  function Wiki() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Wiki);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Wiki)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "state", {
      campaign: _this.props.campaign,
      user: _this.props.user
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "logOff",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(event) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()('/api/user/logoff', {
                  method: 'POST'
                });

              case 3:
                window.location.href = window.location.href;

              case 4:
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "setCampaign", function (campaign) {
      return _this.setState({
        campaign: campaign
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "setUser", function (user) {
      return _this.setState({
        user: user
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "updateCampaign",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(updates) {
        var campaign, result, json;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                campaign = _this.state.campaign;

                if (campaign) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", false);

              case 3:
                _context2.next = 5;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("/api/campaign/".concat(_this.state.campaign.domain), {
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(updates),
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  method: 'POST'
                });

              case 5:
                result = _context2.sent;
                _context2.next = 8;
                return result.json();

              case 8:
                json = _context2.sent;

                if (!(result.status === 200)) {
                  _context2.next = 13;
                  break;
                }

                _this.setCampaign(json);

                console.log(json.navigation.map(function (l) {
                  return "".concat(l.slug, ":").concat(l._id);
                }));
                return _context2.abrupt("return", true);

              case 13:
                return _context2.abrupt("return", false);

              case 14:
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "render", function () {
      var _this$props = _this.props,
          Component = _this$props.Component,
          domain = _this$props.domain,
          pageProps = _this$props.pageProps,
          rootUrl = _this$props.rootUrl,
          router = _this$props.router;
      var _this$state = _this.state,
          campaign = _this$state.campaign,
          user = _this$state.user;
      var theme = campaign && campaign.theme || _data_defaultTheme__WEBPACK_IMPORTED_MODULE_15__["default"];
      var context = {
        campaign: campaign,
        domain: domain,
        logOff: _this.logOff,
        rootUrl: rootUrl,
        router: router,
        setCampaign: _this.setCampaign,
        setUser: _this.setUser,
        theme: theme,
        updateCampaign: _this.updateCampaign,
        user: user
      };
      var campaignError = !campaign && !['/user', '/login', '/signup'].includes(router.pathname);
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_contexts_Application__WEBPACK_IMPORTED_MODULE_14__["default"].Provider, {
        value: context
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_11__["Container"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: !campaign ? 'no-campaign' : ''
      }, campaignError ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_pages_error__WEBPACK_IMPORTED_MODULE_16__["default"], {
        statusCode: 404,
        message: "This campaign does not exist."
      }) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Component, pageProps)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("style", null, "\n            :root {\n              --font-primary:     ".concat(theme.fontFamily, ";\n              --color-background: ").concat(theme.background, ";\n              --color-borders:    ").concat(theme.primary, ";\n              --color-foreground: ").concat(theme.foreground, ";\n              --color-primary:    ").concat(theme.primary, ";\n              --color-secondary:  ").concat(theme.secondary, ";\n            }\n          "))));
    });

    return _this;
  }

  return Wiki;
}(next_app__WEBPACK_IMPORTED_MODULE_11___default.a);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Wiki, "getInitialProps",
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(context) {
    var Component, req, headers, props, campaign, user, host, domain, rootUrl;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            Component = context.Component, req = context.ctx.req;
            headers = Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_17__["default"])(req && req.headers, 'cookie');
            _context3.next = 4;
            return next_app__WEBPACK_IMPORTED_MODULE_11___default.a.getInitialProps(context);

          case 4:
            props = _context3.sent;
            _context3.next = 7;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()(Object(_utilities_URI__WEBPACK_IMPORTED_MODULE_18__["default"])(req, '/api/campaign'), {
              headers: headers
            }).then(function (r) {
              return r.json();
            });

          case 7:
            campaign = _context3.sent;
            _context3.next = 10;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()(Object(_utilities_URI__WEBPACK_IMPORTED_MODULE_18__["default"])(req, '/api/user'), {
              headers: headers
            }).then(function (r) {
              return r.json();
            });

          case 10:
            user = _context3.sent;

            /* eslint-disable prefer-destructuring */
            if (true) {
              host = window.location.host;
            } else {}
            /* eslint-enable prefer-destructuring */


            domain = host.split('.').shift();
            rootUrl = host.slice(domain.length + 1);
            return _context3.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
              campaign: campaign,
              Component: Component,
              domain: domain,
              rootUrl: rootUrl,
              user: user
            }));

          case 15:
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



/***/ })

})
//# sourceMappingURL=_app.js.97b11b334f048c417cb3.hot-update.js.map