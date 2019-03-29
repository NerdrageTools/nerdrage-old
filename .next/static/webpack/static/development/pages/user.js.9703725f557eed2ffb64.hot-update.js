webpackHotUpdate("static/development/pages/user.js",{

/***/ "./icons/dice.svg":
/*!************************!*\
  !*** ./icons/dice.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");

function Dice (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"dice"),React.createElement("path",{"d":"M27 6h-16c-2.75 0-5 2.25-5 5v16c0 2.75 2.25 5 5 5h16c2.75 0 5-2.25 5-5v-16c0-2.75-2.25-5-5-5zM13 28c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM13 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM19 22c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM25 28c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM25 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM25.899 4c-0.467-2.275-2.491-4-4.899-4h-16c-2.75 0-5 2.25-5 5v16c0 2.408 1.725 4.432 4 4.899v-19.899c0-1.1 0.9-2 2-2h19.899z","key":1})]);
}

Dice.defaultProps = {"version":"1.1","width":"32","height":"32","viewBox":"0 0 32 32"};

module.exports = Dice;

Dice.default = Dice;


/***/ }),

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserPage; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "../node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-custom-scrollbars */ "../node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Editable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/Editable */ "./components/Editable/Editable.js");
/* harmony import */ var _components_PageLinkList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/PageLinkList */ "./components/PageLinkList/PageLinkList.js");
/* harmony import */ var _components_Toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/Toggle */ "./components/Toggle/Toggle.js");
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");
/* harmony import */ var _icons_Administrator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/icons/Administrator */ "./icons/Administrator.js");
/* harmony import */ var _icons_dice_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/icons/dice.svg */ "./icons/dice.svg");
/* harmony import */ var _icons_dice_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_icons_dice_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/icons/favorite-on.svg */ "./icons/favorite-on.svg");
/* harmony import */ var _icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _icons_sheet_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/icons/sheet.svg */ "./icons/sheet.svg");
/* harmony import */ var _icons_sheet_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_icons_sheet_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _pages_error__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/pages/_error */ "./pages/_error.js");
/* harmony import */ var _utilities_confirm__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/utilities/confirm */ "./utilities/confirm.js");
/* harmony import */ var _utilities_pluck__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/utilities/pluck */ "./utilities/pluck.js");
/* harmony import */ var _utilities_URI__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/utilities/URI */ "./utilities/URI.js");
/* harmony import */ var _user_scss__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user.scss */ "./pages/user.scss");
/* harmony import */ var _user_scss__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_user_scss__WEBPACK_IMPORTED_MODULE_26__);



























var UPDATABLE_FIELDS = ['email', 'favorites', 'name', 'username'];

var formatTime = function formatTime(time) {
  return Object(date_fns__WEBPACK_IMPORTED_MODULE_11__["distanceInWordsToNow"])(time, {
    addSuffix: true
  });
};

var UserPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(UserPage, _Component);

  function UserPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, UserPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(UserPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "state", {
      saved: Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_24__["default"])(_this.props.user, UPDATABLE_FIELDS),
      user: _this.props.user
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleNameChange", function (name) {
      return _this.setState({
        user: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _this.state.user, {
          name: name
        })
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleSave",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, saved;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("/api/user/".concat(_this.state.user.username || ''), {
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_24__["default"])(_this.state.user, UPDATABLE_FIELDS)),
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST'
              });

            case 2:
              response = _context.sent;

              if (!(response.status === 200)) {
                _context.next = 8;
                break;
              }

              _context.next = 6;
              return response.json();

            case 6:
              saved = _context.sent;
              return _context.abrupt("return", _this.setState({
                saved: saved,
                user: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _this.state.user, saved)
              }));

            case 8:
              _context.t0 = _this;
              _context.next = 11;
              return response.json();

            case 11:
              _context.t1 = _context.sent;
              return _context.abrupt("return", _context.t0.setState.call(_context.t0, _context.t1));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleToggleAdmin",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _this$state$user, isAdmin, username, action, response;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$state$user = _this.state.user, isAdmin = _this$state$user.isAdmin, username = _this$state$user.username;
              action = isAdmin ? 'revoke' : 'grant';
              _context2.next = 4;
              return Object(_utilities_confirm__WEBPACK_IMPORTED_MODULE_23__["default"])("Are you sure you want to ".concat(action, " this user Admin privileges?"));

            case 4:
              if (!_context2.sent) {
                _context2.next = 20;
                break;
              }

              _context2.next = 7;
              return fetch("/api/user/".concat(username), {
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                  isAdmin: !isAdmin
                }),
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST'
              });

            case 7:
              response = _context2.sent;

              if (!(response.status === 200)) {
                _context2.next = 15;
                break;
              }

              _context2.t0 = _this;
              _context2.next = 12;
              return response.json();

            case 12:
              _context2.t1 = _context2.sent;
              _context2.t2 = {
                user: _context2.t1
              };
              return _context2.abrupt("return", _context2.t0.setState.call(_context2.t0, _context2.t2));

            case 15:
              _context2.t3 = _this;
              _context2.next = 18;
              return response.json();

            case 18:
              _context2.t4 = _context2.sent;
              return _context2.abrupt("return", _context2.t3.setState.call(_context2.t3, _context2.t4));

            case 20:
              return _context2.abrupt("return", undefined);

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "render", function () {
      var _this$props = _this.props,
          httpStatusCode = _this$props.httpStatusCode,
          message = _this$props.message;
      var currentUser = _this.context.user;
      var user = _this.state.user;
      var isEditable = user === currentUser || currentUser.isAdmin;

      if (httpStatusCode !== 200) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_pages_error__WEBPACK_IMPORTED_MODULE_22__["default"], {
          statusCode: httpStatusCode,
          message: message
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "user page"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "title-bar"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "title",
        onChange: _this.handleNameChange,
        placeholder: "Name",
        readOnly: !isEditable,
        value: user.name
      }), isEditable && _this.isDirty && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
        className: "update safe",
        onClick: _this.handleSave
      }, "Save"), currentUser.isAdmin ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Toggle__WEBPACK_IMPORTED_MODULE_16__["default"], {
        className: "is-admin",
        onClick: _this.handleToggleAdmin,
        offIcon: _icons_Administrator__WEBPACK_IMPORTED_MODULE_18__["default"],
        offProps: {
          title: 'Not an Administrator'
        },
        onIcon: _icons_Administrator__WEBPACK_IMPORTED_MODULE_18__["default"],
        onProps: {
          title: 'Administrator'
        },
        value: user.isAdmin
      }) : user.isAdmin && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_icons_Administrator__WEBPACK_IMPORTED_MODULE_18__["default"], {
        className: "is-admin toggle on"
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_13__["Scrollbars"], {
        className: "contents",
        universal: true,
        autoHide: true
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "user-info"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", null, "Username:"), " ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, user.username)), user.email && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", null, "Email Address:"), " ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, user.email)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", null, "Joined:"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        title: Date(user.createdAt).toLocaleString()
      }, formatTime(user.createdAt))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", null, "Last Login:"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        title: Date(user.lastLogin).toLocaleString()
      }, formatTime(user.lastLogin)))), user.favorites && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_PageLinkList__WEBPACK_IMPORTED_MODULE_15__["default"], {
        caption: "Favorites",
        icon: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_icons_favorite_on_svg__WEBPACK_IMPORTED_MODULE_20___default.a, {
          className: "favorites icon"
        }),
        pages: user.favorites
      }), user.campaigns && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_PageLinkList__WEBPACK_IMPORTED_MODULE_15__["default"], {
        caption: "Campaigns",
        icon: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_icons_dice_svg__WEBPACK_IMPORTED_MODULE_19___default.a, null),
        pages: user.campaigns,
        type: "campaign"
      }), user.sheets && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_PageLinkList__WEBPACK_IMPORTED_MODULE_15__["default"], {
        caption: "Sheets",
        icon: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_icons_sheet_svg__WEBPACK_IMPORTED_MODULE_21___default.a, null),
        pages: user.sheets,
        type: "sheet"
      })));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(UserPage, [{
    key: "isDirty",
    get: function get() {
      var fromState = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_24__["default"])(this.state.user, UPDATABLE_FIELDS));

      var fromSaved = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_24__["default"])(this.state.saved, UPDATABLE_FIELDS));

      return fromState !== fromSaved;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.user.username !== state.user.username) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
          saved: Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_24__["default"])(props.user, UPDATABLE_FIELDS),
          user: props.user
        });
      }

      return state;
    }
  }]);

  return UserPage;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(UserPage, "contextType", _contexts_Application__WEBPACK_IMPORTED_MODULE_17__["default"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(UserPage, "defaultProps", {
  httpStatusCode: 200,
  message: '',
  user: {
    anonymous: true
  }
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(UserPage, "getInitialProps",
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref3) {
    var query, req, headers, result, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            query = _ref3.query, req = _ref3.req;
            headers = Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_24__["default"])(req && req.headers, 'cookie');
            _context3.next = 4;
            return fetch(Object(_utilities_URI__WEBPACK_IMPORTED_MODULE_25__["default"])(req, "/api/user/".concat(query.slug)), {
              headers: headers
            });

          case 4:
            result = _context3.sent;
            _context3.next = 7;
            return result.json();

          case 7:
            json = _context3.sent;

            if (!(result.status !== 200)) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({
              httpStatusCode: result.status
            }, json));

          case 10:
            return _context3.abrupt("return", {
              user: json
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}());



/***/ })

})
//# sourceMappingURL=user.js.9703725f557eed2ffb64.hot-update.js.map