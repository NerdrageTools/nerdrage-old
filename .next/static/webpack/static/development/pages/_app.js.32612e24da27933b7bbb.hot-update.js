webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/SearchBox/SearchBox.js":
/*!*******************************************!*\
  !*** ./components/SearchBox/SearchBox.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBox; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "../node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! downshift */ "../node_modules/downshift/dist/downshift.cjs.js");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(downshift__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");
/* harmony import */ var _icons_loading_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/icons/loading.svg */ "./icons/loading.svg");
/* harmony import */ var _icons_loading_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_icons_loading_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _icons_search_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/icons/search.svg */ "./icons/search.svg");
/* harmony import */ var _icons_search_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_icons_search_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utilities_debounce__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/utilities/debounce */ "./utilities/debounce.js");
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _utilities_objectMatch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/utilities/objectMatch */ "./utilities/objectMatch.js");
/* harmony import */ var _SearchBox_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SearchBox.scss */ "./components/SearchBox/SearchBox.scss");
/* harmony import */ var _SearchBox_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_SearchBox_scss__WEBPACK_IMPORTED_MODULE_19__);





















var SearchBox =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(SearchBox, _Component);

  function SearchBox() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, SearchBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(SearchBox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "state", {
      message: null,
      options: [],
      searchTerm: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "downshift", react__WEBPACK_IMPORTED_MODULE_12___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "inputBox", react__WEBPACK_IMPORTED_MODULE_12___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "debouncedSearch", Object(_utilities_debounce__WEBPACK_IMPORTED_MODULE_16__["default"])(
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var searchTerm,
          _this$props,
          limit,
          url,
          searchUrl,
          queryString,
          response,
          json,
          _args = arguments;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              searchTerm = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
              _this$props = _this.props, limit = _this$props.limit, url = _this$props.url;

              if (!(!url || !searchTerm || searchTerm.length < 3)) {
                _context.next = 5;
                break;
              }

              _this.setState({
                message: 'Enter at least 3 characters...',
                options: [],
                searching: false
              });

              return _context.abrupt("return", undefined);

            case 5:
              searchUrl = url.replace(':searchTerm', searchTerm);
              queryString = "limit=".concat(limit);
              _context.next = 9;
              return fetch("".concat(searchUrl, "?").concat(queryString));

            case 9:
              response = _context.sent;
              _context.next = 12;
              return response.json();

            case 12:
              json = _context.sent;

              if (!(response.status === 200 && json.length)) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return", _this.setState({
                message: '',
                options: json,
                searching: false
              }));

            case 15:
              return _context.abrupt("return", _this.setState({
                message: json.message || 'No results found...',
                options: [],
                searching: false
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })), 500));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "componentDidMount", function () {
      document.addEventListener('keydown', _this.handleHotKeys);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "componentWillUnmount", function () {
      document.removeEventListener('keydown', _this.handleHotKeys);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleHotKeys", function (event) {
      _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(_this.props.hotkeys).forEach(function (_ref2) {
        var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, 2),
            name = _ref3[0],
            keyCombo = _ref3[1];

        if (Object(_utilities_objectMatch__WEBPACK_IMPORTED_MODULE_18__["default"])(event, keyCombo)) {
          _this.props.onHotKey(name, event, Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)));
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleKeyDown", function (event) {
      if (event.key === 'Escape') {
        _this.inputBox.current.blur();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleSearch",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
      var searchTerm,
          _args2 = arguments;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              searchTerm = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : '';

              _this.setState({
                message: 'Searching...',
                searching: true,
                searchTerm: searchTerm
              });

              _this.debouncedSearch(searchTerm);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleSelect", function (option) {
      var _this$props2 = _this.props,
          clearOnSelect = _this$props2.clearOnSelect,
          onSelect = _this$props2.onSelect;
      onSelect(option);

      if (clearOnSelect && !_this.clearing) {
        _this.setState({
          searchTerm: ''
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "renderOption", function (option, index, itemProps) {
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("li", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: index,
        className: "search-result"
      }, itemProps), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", {
        className: "title"
      }, option.title), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "preview"
      }, option.preview, "..."));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "render", function () {
      var _this$props3 = _this.props,
          className = _this$props3.className,
          placeholder = _this$props3.placeholder;
      var _this$state = _this.state,
          message = _this$state.message,
          options = _this$state.options,
          searching = _this$state.searching;
      var theme = _this.context.theme;
      var renderOption = _this.props.renderOption || _this.renderOption;
      var OverlayIcon = searching ? _icons_loading_svg__WEBPACK_IMPORTED_MODULE_14___default.a : _icons_search_svg__WEBPACK_IMPORTED_MODULE_15___default.a;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(downshift__WEBPACK_IMPORTED_MODULE_11___default.a, {
        id: "search-box",
        ref: _this.downshift,
        itemToString: function itemToString(article) {
          return article ? article.title : '';
        },
        onInputValueChange: _this.handleSearch,
        onSelect: _this.handleSelect
      }, function (_ref5) {
        var getInputProps = _ref5.getInputProps,
            getItemProps = _ref5.getItemProps,
            getMenuProps = _ref5.getMenuProps,
            isOpen = _ref5.isOpen;
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "".concat(className, " search-box ").concat(isOpen ? 'open' : 'closed'),
          style: {
            color: theme.foreground
          }
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps({
          onKeyDown: _this.handleKeyDown
        }), {
          className: "input",
          ref: _this.inputBox,
          placeholder: placeholder,
          value: _this.state.searchTerm
        })), searching || !options.length ? isOpen && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "search-results message"
        }, message) : isOpen && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("ul", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getMenuProps(), {
          className: "search-results list"
        }), options.map(function (option, index) {
          return renderOption(option, index, getItemProps({
            index: index,
            item: option,
            key: option._id
          }));
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(OverlayIcon, {
          className: "search icon"
        }));
      });
    });

    return _this;
  }

  return SearchBox;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(SearchBox, "contextType", _contexts_Application__WEBPACK_IMPORTED_MODULE_13__["default"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(SearchBox, "defaultProps", {
  className: '',
  clearOnSelect: true,
  hotkeys: {},
  limit: 10,
  onHotKey: _utilities_noop__WEBPACK_IMPORTED_MODULE_17__["default"],
  onSelect: _utilities_noop__WEBPACK_IMPORTED_MODULE_17__["default"],
  placeholder: 'Search...',
  renderOption: null,
  url: ''
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(SearchBox, "displayName", 'SearchBox');



/***/ })

})
//# sourceMappingURL=_app.js.32612e24da27933b7bbb.hot-update.js.map