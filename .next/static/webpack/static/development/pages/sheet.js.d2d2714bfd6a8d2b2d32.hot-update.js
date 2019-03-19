webpackHotUpdate("static/development/pages/sheet.js",{

/***/ "./pages/sheet.js":
/*!************************!*\
  !*** ./pages/sheet.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sheet; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "../node_modules/isomorphic-unfetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-custom-scrollbars */ "../node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var sheetforge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sheetforge */ "../node_modules/sheetforge/build/sheetforge.min.js");
/* harmony import */ var sheetforge__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sheetforge__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Editable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/Editable */ "./components/Editable/Editable.js");
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");
/* harmony import */ var _data_defaultSheetLayout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/data/defaultSheetLayout */ "./data/defaultSheetLayout.js");
/* harmony import */ var _utilities_confirm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/utilities/confirm */ "./utilities/confirm.js");
/* harmony import */ var _utilities_pluck__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/utilities/pluck */ "./utilities/pluck.js");
/* harmony import */ var _utilities_URI__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/utilities/URI */ "./utilities/URI.js");
/* harmony import */ var sheetforge_build_sheetforge_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! sheetforge/build/sheetforge.css */ "../node_modules/sheetforge/build/sheetforge.css");
/* harmony import */ var sheetforge_build_sheetforge_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(sheetforge_build_sheetforge_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _sheet_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sheet.scss */ "./pages/sheet.scss");
/* harmony import */ var _sheet_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_sheet_scss__WEBPACK_IMPORTED_MODULE_22__);























var STATE_FIELDS = ['isEditable', 'isOwner', 'slug'];
var UPDATABLE_FIELDS = ['title'];

var Sheet =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Sheet, _Component);

  function Sheet() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Sheet);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Sheet)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "state", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_19__["default"])(_this.props, STATE_FIELDS), {
      saved: Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_19__["default"])(_this.props, UPDATABLE_FIELDS),
      title: _this.props.title || _this.context.router.query.title || 'Unnamed Character'
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "character", sheetforge__WEBPACK_IMPORTED_MODULE_14__["CharacterModel"].create({}));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "layout", sheetforge__WEBPACK_IMPORTED_MODULE_14__["LayoutModel"].create(_data_defaultSheetLayout__WEBPACK_IMPORTED_MODULE_17__["default"]));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "updateSheet", function (_ref) {
      var _ref$data = _ref.data,
          data = _ref$data === void 0 ? {} : _ref$data,
          _ref$layout = _ref.layout,
          layout = _ref$layout === void 0 ? _data_defaultSheetLayout__WEBPACK_IMPORTED_MODULE_17__["default"] : _ref$layout;

      _this.character.set(data);

      _this.character.markAsClean();

      _this.layout.set(layout);

      _this.layout.markAsClean();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "componentDidMount", function () {
      _this.updateSheet(_this.props);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "componentWillReceiveProps", function (props) {
      if (props.slug !== _this.props.slug) {
        _this.character = sheetforge__WEBPACK_IMPORTED_MODULE_14__["CharacterModel"].create(props.data);
        _this.layout = sheetforge__WEBPACK_IMPORTED_MODULE_14__["LayoutModel"].create(props.layout);

        _this.setState({
          saved: Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_19__["default"])(props, UPDATABLE_FIELDS),
          title: props.title || new URLSearchParams(window.location.search).get('title') || ''
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleDelete",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var slug, response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_utilities_confirm__WEBPACK_IMPORTED_MODULE_18__["default"])('Are you sure you want to permanently delete this sheet?');

            case 2:
              if (!_context.sent) {
                _context.next = 8;
                break;
              }

              slug = _this.context.router.query.slug;
              _context.next = 6;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()("/api/sheet/".concat(slug), {
                method: 'DELETE'
              });

            case 6:
              response = _context.sent;

              if (response.status === 204) {
                _this.context.router.back();
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleReset", function () {
      _this.character.reset();

      _this.layout.reset();

      _this.setState(_this.state.saved);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleSave",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var slug, response, json;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              slug = _this.context.router.query.slug;
              _context2.next = 3;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()("/api/sheet/".concat(slug), {
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
                  data: _this.character.toJSON(),
                  layout: _this.layout.toJSON(),
                  title: _this.state.title
                }),
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST'
              });

            case 3:
              response = _context2.sent;
              _context2.next = 6;
              return response.json();

            case 6:
              json = _context2.sent;

              if (!(response.status === 200)) {
                _context2.next = 10;
                break;
              }

              _this.updateSheet(json);

              return _context2.abrupt("return", _this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_19__["default"])(json, STATE_FIELDS), {
                saved: Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_19__["default"])(json, UPDATABLE_FIELDS)
              })));

            case 10:
              return _context2.abrupt("return", _this.setState(json));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleSheetChange", function () {
      return _this.forceUpdate();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleTitleChange", function (title) {
      return _this.setState({
        title: title
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "render", function () {
      var slug = _this.props.slug;
      var _this$state = _this.state,
          isEditable = _this$state.isEditable,
          isOwner = _this$state.isOwner,
          title = _this$state.title;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "sheet page"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "title-bar"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: "title",
        onChange: _this.handleTitleChange,
        readOnly: !isEditable,
        value: title
      }), isEditable && _this.isDirty && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
        className: "save safe",
        onClick: _this.handleSave
      }, "Save"), isEditable && _this.isDirty && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
        className: "save safe",
        onClick: _this.handleReset
      }, "Reset"), isOwner && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
        className: "delete danger",
        onClick: _this.handleDelete
      }, "Delete")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_13__["Scrollbars"], {
        className: "sheet-container ".concat(isEditable ? 'editable' : 'readOnly'),
        autoHide: true,
        universal: true
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(sheetforge__WEBPACK_IMPORTED_MODULE_14__["Sheet"], {
        key: slug,
        readOnly: !isEditable,
        character: _this.character,
        layout: _this.layout,
        onChange: _this.handleSheetChange
      })));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Sheet, [{
    key: "isDirty",
    get: function get() {
      return this.state.title !== this.state.saved.title || this.character.isDirty || this.layout.isDirty;
    }
  }]);

  return Sheet;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Sheet, "contextType", _contexts_Application__WEBPACK_IMPORTED_MODULE_16__["default"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Sheet, "defaultProps", {
  children: [],
  data: {},
  layout: _data_defaultSheetLayout__WEBPACK_IMPORTED_MODULE_17__["default"],
  slug: '',
  title: ''
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Sheet, "getInitialProps",
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(_ref4) {
    var query, req, headers, response, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            query = _ref4.query, req = _ref4.req;
            headers = Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_19__["default"])(req && req.headers, 'cookie');
            _context3.next = 4;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()(Object(_utilities_URI__WEBPACK_IMPORTED_MODULE_20__["default"])(req, "/api/sheet/".concat(query.slug)), {
              headers: headers
            });

          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return response.json();

          case 7:
            json = _context3.sent;
            return _context3.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({
              statusCode: response.status
            }, json));

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x) {
    return _ref5.apply(this, arguments);
  };
}());



/***/ })

})
//# sourceMappingURL=sheet.js.d2d2714bfd6a8d2b2d32.hot-update.js.map