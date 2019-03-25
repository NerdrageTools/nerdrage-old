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
/* harmony import */ var _components_EditableList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/EditableList */ "./components/EditableList/EditableList.js");
/* harmony import */ var _components_SearchBox_UserSearchBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/SearchBox/UserSearchBox */ "./components/SearchBox/UserSearchBox/UserSearchBox.js");
/* harmony import */ var _icons_nerd_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/icons/nerd.svg */ "./icons/nerd.svg");
/* harmony import */ var _icons_nerd_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_icons_nerd_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utilities_compareBy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/utilities/compareBy */ "./utilities/compareBy.js");
/* harmony import */ var _Participants_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Participants.scss */ "./components/Participants/Participants.scss");
/* harmony import */ var _Participants_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Participants_scss__WEBPACK_IMPORTED_MODULE_15__);

















var addParticipants = function addParticipants(map, users, addition) {
  users.forEach(function (user) {
    map.set(user._id, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, map.get(user._id) || user, addition));
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
      participants: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "render", function () {
      var className = _this.props.className;
      var participants = _this.state.participants;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "participants ".concat(className)
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "participant-list"
      }, participants.map(function (user) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "row",
          key: user._id
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "display"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "name"
        }, user.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "username"
        }, user.username)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_EditableList__WEBPACK_IMPORTED_MODULE_11__["default"], {
          className: "role",
          options: ['player', 'editor', 'owner'],
          defaultValue: user.level
        }));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SearchBox_UserSearchBox__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "add-user"
      }));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Participants, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var editors = props.editors,
          owners = props.owners,
          players = props.players;
      var map = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a();
      addParticipants(map, players, {
        isPlayer: true,
        level: 'player',
        order: 3
      });
      addParticipants(map, editors, {
        isEditor: true,
        level: 'editor',
        order: 2
      });
      addParticipants(map, owners, {
        isOwner: true,
        level: 'owner',
        order: 1
      });

      var participants = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(map.values()).sort(Object(_utilities_compareBy__WEBPACK_IMPORTED_MODULE_14__["default"])('order'));

      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, state, {
        participants: participants
      });
    }
  }]);

  return Participants;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Participants, "defaultProps", {
  className: '',
  editors: [],
  owners: [],
  players: []
});



/***/ }),

/***/ "./icons/nerd.svg":
/*!************************!*\
  !*** ./icons/nerd.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");

function Nerd (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M184.615 79.708 C 114.418 86.677,72.345 137.710,86.743 198.419 C 87.178 200.253,86.884 200.369,81.184 200.617 L 75.165 200.879 75.232 224.176 C 75.324 255.858,78.248 264.741,93.327 279.147 C 128.703 312.945,190.531 287.963,190.754 239.780 L 190.769 236.484 196.923 236.484 L 203.077 236.484 203.092 239.780 C 203.315 287.963,265.143 312.945,300.519 279.147 C 315.598 264.741,318.522 255.858,318.614 224.176 L 318.681 200.879 312.663 200.617 C 306.962 200.369,306.668 200.253,307.103 198.419 C 313.655 170.791,309.458 146.253,294.544 124.991 C 290.181 118.772,289.770 120.939,297.845 107.594 C 301.615 101.362,305.791 94.375,307.125 92.066 L 309.550 87.869 294.157 95.551 C 285.690 99.776,278.541 103.010,278.269 102.738 C 277.997 102.466,278.770 97.641,279.986 92.016 C 281.203 86.391,282.198 81.599,282.198 81.367 C 282.198 81.136,277.311 84.105,271.339 87.966 L 260.480 94.985 254.951 92.241 C 234.999 82.342,207.477 77.438,184.615 79.708 M282.043 133.407 C 280.568 136.670,276.821 143.771,273.718 149.186 L 268.075 159.031 271.238 163.174 C 277.861 171.851,281.050 180.687,281.912 192.747 L 282.461 200.440 253.223 200.440 L 223.985 200.440 224.537 198.242 L 225.088 196.044 196.923 196.044 L 168.758 196.044 169.309 198.242 L 169.861 200.440 139.330 200.440 L 108.800 200.440 109.172 195.298 C 109.716 187.775,118.535 171.004,130.171 155.368 C 130.447 154.997,133.415 155.941,136.765 157.466 C 182.783 178.416,236.296 169.106,278.242 132.850 C 281.626 129.924,284.470 127.518,284.560 127.502 C 284.651 127.486,283.518 130.143,282.043 133.407 M206.556 210.769 C 206.536 211.132,206.011 213.604,205.391 216.264 L 204.263 221.099 196.923 221.099 L 189.583 221.099 188.455 216.264 C 187.835 213.604,187.310 211.132,187.290 210.769 C 187.270 210.407,191.604 210.110,196.923 210.110 C 202.242 210.110,206.577 210.407,206.556 210.769 M165.046 235.385 C 162.518 280.152,102.767 281.387,101.246 236.703 L 100.909 226.813 133.220 226.813 L 165.530 226.813 165.046 235.385 M292.600 236.703 C 291.079 281.408,231.329 280.174,228.800 235.385 L 228.316 226.813 260.626 226.813 L 292.937 226.813 292.600 236.703 ","stroke":"none","fill":"#000000","fillRule":"evenodd"}));
}

Nerd.defaultProps = {"version":"1.1","width":"455","height":"455","viewBox":"-50 -50 450 450"};

module.exports = Nerd;

Nerd.default = Nerd;


/***/ })

})
//# sourceMappingURL=campaign.js.dcea1dfb6b6efad3167a.hot-update.js.map