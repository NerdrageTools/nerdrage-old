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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_EditableList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/EditableList */ "./components/EditableList/EditableList.js");
/* harmony import */ var _components_SearchBox_UserSearchBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/SearchBox/UserSearchBox */ "./components/SearchBox/UserSearchBox/UserSearchBox.js");
/* harmony import */ var _icons_nerd_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/icons/nerd.svg */ "./icons/nerd.svg");
/* harmony import */ var _icons_nerd_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_icons_nerd_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _icons_remove_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/icons/remove.svg */ "./icons/remove.svg");
/* harmony import */ var _icons_remove_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_icons_remove_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utilities_compareBy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/utilities/compareBy */ "./utilities/compareBy.js");
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/utilities/noop */ "./utilities/noop.js");
/* harmony import */ var _Participants_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Participants.scss */ "./components/Participants/Participants.scss");
/* harmony import */ var _Participants_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_Participants_scss__WEBPACK_IMPORTED_MODULE_18__);



















var ORDER = {
  editor: 2,
  owner: 1,
  player: 3,
  removed: 4
};

var addParticipants = function addParticipants(map, users, addition) {
  users.forEach(function (user) {
    map.set(user._id, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_10__["default"])({}, map.get(user._id) || user, user, addition));
  });
};

var Participants =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Participants, _Component);

  function Participants() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Participants);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Participants)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "state", {
      edits: [],
      participants: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleAddUser", function (user) {
      var participants = _this.state.participants;

      if (!participants.find(function (p) {
        return p._id === user._id;
      })) {
        var edits = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.state.edits).concat([Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_10__["default"])({}, user, {
          edit: 'added',
          level: 'player',
          order: ORDER.player
        })]).sort(Object(_utilities_compareBy__WEBPACK_IMPORTED_MODULE_16__["default"])('order'));

        _this.setState({
          edits: edits
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleSetPermission", function (user, level) {
      var participants = _this.state.participants;

      var edits = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.state.edits);

      var edit = edits.find(function (e) {
        return e._id === user._id;
      });

      if (edit) {
        edit.level = level;
        edit.order = ORDER[level];
      } else if (participants.find(function (p) {
        return p._id === user._id;
      })) {
        edits.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_10__["default"])({}, user, {
          edit: 'updated',
          level: level,
          order: ORDER[level]
        }));
        edits.sort(Object(_utilities_compareBy__WEBPACK_IMPORTED_MODULE_16__["default"])('order'));
      }

      _this.setState({
        edits: edits
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleToggleRemoved", function (user) {
      var participants = _this.state.participants;

      var edits = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.state.edits);

      if (edits.find(function (e) {
        return e._id === user._id;
      })) {
        edits = edits.filter(function (e) {
          return e._id !== user._id;
        });
      } else if (participants.find(function (p) {
        return p._id === user._id;
      })) {
        edits.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_10__["default"])({}, user, {
          edit: 'removed',
          level: 'removed',
          order: 4
        }));
        edits.sort(Object(_utilities_compareBy__WEBPACK_IMPORTED_MODULE_16__["default"])('order'));
      }

      _this.setState({
        edits: edits
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleSave", function () {
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
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "render", function () {
      var className = _this.props.className;
      var participants = _this.state.participants;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "participants ".concat(className)
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        className: "participant-list"
      }, participants.map(function (user) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
          className: "participant row ".concat(user.edit || ''),
          key: user._id
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_icons_nerd_svg__WEBPACK_IMPORTED_MODULE_14___default.a, {
          className: "nerd icon"
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: "display"
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "name"
        }, user.name), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
          className: "username"
        }, user.username)), user.edit !== 'removed' && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_EditableList__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: "role",
          defaultValue: user.level,
          onChange: function onChange(level) {
            return _this.handleSetPermission(user, level);
          },
          options: ['player', 'editor', 'owner']
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_icons_remove_svg__WEBPACK_IMPORTED_MODULE_15___default.a, {
          className: "remove icon",
          onClick: function onClick() {
            return _this.handleToggleRemoved(user);
          }
        }));
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_SearchBox_UserSearchBox__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "add-user",
        onSelect: _this.handleAddUser
      }), _this.state.edits.length !== 0 && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
        className: "safe",
        onClick: _this.handleSave
      }, "Save"));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Participants, null, [{
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
      addParticipants(map, edits);

      var participants = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(map.values()).sort(Object(_utilities_compareBy__WEBPACK_IMPORTED_MODULE_16__["default"])('order'));

      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_10__["default"])({}, state, {
        participants: participants
      });
    }
  }]);

  return Participants;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Participants, "defaultProps", {
  className: '',
  editors: [],
  onSave: _utilities_noop__WEBPACK_IMPORTED_MODULE_17__["default"],
  owners: [],
  players: []
});



/***/ })

})
//# sourceMappingURL=campaign.js.98378f10f395c44539c0.hot-update.js.map