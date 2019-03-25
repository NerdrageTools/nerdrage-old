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
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _styles_all_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/styles/all.scss */ "./styles/all.scss");
/* harmony import */ var _styles_all_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_all_scss__WEBPACK_IMPORTED_MODULE_18__);




















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
                _context.t0 = _this;
                _context.next = 4;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()('/api/user/auth/logoff').then(function (r) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "setCampaign", function (campaign) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utilities_noop__WEBPACK_IMPORTED_MODULE_17__["default"];
      return _this.setState({
        campaign: campaign
      }, callback);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "setUser", function (user, callback) {
      return _this.setState({
        user: user
      }, callback);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "updateCampaign",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(updates) {
        var callback,
            campaign,
            result,
            json,
            _args2 = arguments;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                callback = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _utilities_noop__WEBPACK_IMPORTED_MODULE_17__["default"];
                campaign = _this.state.campaign;

                if (campaign) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", false);

              case 4:
                _context2.next = 6;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("/api/campaign/".concat(_this.state.campaign.domain), {
                  body: updates ? _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(updates) : undefined,
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  method: updates ? 'POST' : 'GET'
                });

              case 6:
                result = _context2.sent;
                _context2.next = 9;
                return result.json();

              case 9:
                json = _context2.sent;

                if (!(result.status === 200)) {
                  _context2.next = 13;
                  break;
                }

                _this.setCampaign(json);

                return _context2.abrupt("return", true);

              case 13:
                _this.setCampaign({}, callback);

                return _context2.abrupt("return", false);

              case 15:
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
    var Component, _context$ctx$req, request, props, fetchParams, campaign, user, host, domain, rootUrl;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            Component = context.Component, _context$ctx$req = context.ctx.req, request = _context$ctx$req === void 0 ? {} : _context$ctx$req;
            _context3.next = 3;
            return next_app__WEBPACK_IMPORTED_MODULE_11___default.a.getInitialProps(context);

          case 3:
            props = _context3.sent;
            fetchParams = {
              headers: {
                'Content-Type': 'application/json'
              }
            };

            if (!request) {
              _context3.next = 9;
              break;
            }

            _context3.t0 = request.campaign;
            _context3.next = 12;
            break;

          case 9:
            _context3.next = 11;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()('/api/campaign', fetchParams).then(function (r) {
              return r.json();
            });

          case 11:
            _context3.t0 = _context3.sent;

          case 12:
            campaign = _context3.t0;

            if (!request) {
              _context3.next = 17;
              break;
            }

            _context3.t1 = request.user;
            _context3.next = 20;
            break;

          case 17:
            _context3.next = 19;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()('/api/user', fetchParams).then(function (r) {
              return r.json();
            });

          case 19:
            _context3.t1 = _context3.sent;

          case 20:
            user = _context3.t1;

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

          case 25:
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
//# sourceMappingURL=_app.js.ae3659a7846acc533088.hot-update.js.map