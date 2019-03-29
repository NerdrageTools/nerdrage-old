webpackHotUpdate("static/development/pages/campaign.js",{

/***/ "./components/Participants/Participants.js":
/*!*************************************************!*\
  !*** ./components/Participants/Participants.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Participants; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "../node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "../node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-custom-scrollbars */ "../node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_EditableList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/EditableList */ "./components/EditableList/EditableList.js");
/* harmony import */ var _components_PageLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/PageLink */ "./components/PageLink/PageLink.js");
/* harmony import */ var _components_SearchBox_UserSearchBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/SearchBox/UserSearchBox */ "./components/SearchBox/UserSearchBox/UserSearchBox.js");
/* harmony import */ var _icons_nerd_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/icons/nerd.svg */ "./icons/nerd.svg");
/* harmony import */ var _icons_nerd_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_icons_nerd_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _icons_remove_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/icons/remove.svg */ "./icons/remove.svg");
/* harmony import */ var _icons_remove_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_icons_remove_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utilities_compareBy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/utilities/compareBy */ "./utilities/compareBy.js");
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _utilities_pluck__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/utilities/pluck */ "./utilities/pluck.js");
/* harmony import */ var _Participants_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Participants.scss */ "./components/Participants/Participants.scss");
/* harmony import */ var _Participants_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_Participants_scss__WEBPACK_IMPORTED_MODULE_20__);





















var ORDER = {
  editor: 2,
  owner: 1,
  player: 3,
  removed: 4
};

var addParticipants = function addParticipants(map, users, addition) {
  users.forEach(function (user) {
    map.set(user._id, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, map.get(user._id) || user, user, addition));
  });
};

var Participants =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Participants, _Component);

  function Participants() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Participants);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Participants)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "state", {
      edits: [],
      participants: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleSetEdit", function (user) {
      var edit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$state = _this.state,
          current = _this$state.current,
          edits = _this$state.edits;
      var exists = current.find(function (p) {
        return p._id === user._id;
      });
      var currentEdit = edits.find(function (e) {
        return e._id === user._id;
      }) || {};
      var updated = edits.filter(function (e) {
        return e._id !== user._id;
      });

      if (edit.type === 'added' && !exists) {
        updated.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, user, edit, Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_19__["default"])(currentEdit, 'level', 'order')));
      }

      if (edit.type === 'removed' && exists && currentEdit.type !== 'removed') {
        updated.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, user, edit, Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_19__["default"])(currentEdit, 'level', 'order')));
      }

      if (edit.type === 'updated') {
        updated.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, user, edit));
      }

      _this.setState({
        edits: updated
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleAddUser", function (user) {
      _this.handleSetEdit(user, {
        level: 'player',
        order: ORDER.player,
        type: 'added'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleSetPermission", function (user, level) {
      _this.handleSetEdit(user, {
        level: level,
        order: ORDER[level],
        type: 'updated'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleToggleRemoved", function (user) {
      _this.handleSetEdit(user, {
        level: 'removed',
        order: ORDER.removed,
        type: 'removed'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "handleSave", function () {
      var participants = _this.state.participants;

      _this.props.onSave({
        editors: participants.filter(function (p) {
          return p.level === 'editor';
        }),
        owners: participants.filter(function (p) {
          return p.level === 'owner';
        }),
        players: participants.filter(function (p) {
          return p.level === 'player';
        })
      });

      _this.setState({
        edits: []
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "render", function () {
      var _this$props = _this.props,
          className = _this$props.className,
          readOnly = _this$props.readOnly,
          saving = _this$props.saving,
          title = _this$props.title;
      var participants = _this.state.participants;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "participants ".concat(className, " ").concat(saving ? 'loading' : '')
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "title"
      }, title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_11__["Scrollbars"], {
        className: "contents",
        universal: true
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "participant-list"
      }, participants.map(function (user) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "participant row ".concat(user.type || ''),
          key: user._id
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_icons_nerd_svg__WEBPACK_IMPORTED_MODULE_15___default.a, {
          className: "nerd icon"
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_PageLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
          className: "display",
          type: "user",
          slug: user.username
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "name"
        }, user.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "username"
        }, user.username)), !readOnly && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_EditableList__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: "role",
          defaultValue: user.level,
          onChange: function onChange(level) {
            return _this.handleSetPermission(user, level);
          },
          options: ['owner', 'editor', 'player']
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_icons_remove_svg__WEBPACK_IMPORTED_MODULE_16___default.a, {
          className: "remove icon",
          onClick: function onClick() {
            return _this.handleToggleRemoved(user);
          }
        })));
      }))), !readOnly && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SearchBox_UserSearchBox__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "add-user",
        onSelect: _this.handleAddUser
      }), _this.state.edits.length !== 0 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        className: "save safe",
        onClick: _this.handleSave
      }, "Save")));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Participants, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var editors = props.editors,
          owners = props.owners,
          players = props.players;
      var edits = state.edits;
      var map = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a();
      addParticipants(map, players, {
        level: 'player',
        order: ORDER.player
      });
      addParticipants(map, editors, {
        level: 'editor',
        order: ORDER.editor
      });
      addParticipants(map, owners, {
        level: 'owner',
        order: ORDER.owner
      });

      var current = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(map.values()).sort(Object(_utilities_compareBy__WEBPACK_IMPORTED_MODULE_17__["default"])('order'));

      addParticipants(map, edits);

      var participants = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(map.values()).sort(Object(_utilities_compareBy__WEBPACK_IMPORTED_MODULE_17__["default"])('order'));

      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, state, {
        current: current,
        participants: participants
      });
    }
  }]);

  return Participants;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Participants, "defaultProps", {
  className: '',
  editors: [],
  onSave: _utilities_noop__WEBPACK_IMPORTED_MODULE_18__["default"],
  owners: [],
  players: [],
  readOnly: false,
  saving: false,
  title: 'Participants'
});



/***/ })

})
//# sourceMappingURL=campaign.js.0b3c5bac877264f30ddb.hot-update.js.map