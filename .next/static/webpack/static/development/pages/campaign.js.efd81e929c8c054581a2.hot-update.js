webpackHotUpdate("static/development/pages/campaign.js",{

/***/ "./pages/campaign.js":
/*!***************************!*\
  !*** ./pages/campaign.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CampaignPage; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-custom-scrollbars */ "../node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Editable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/Editable */ "./components/Editable/Editable.js");
/* harmony import */ var _components_PageLink__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/PageLink */ "./components/PageLink/PageLink.js");
/* harmony import */ var _components_Participants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/Participants */ "./components/Participants/Participants.js");
/* harmony import */ var _components_Toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/Toggle */ "./components/Toggle/Toggle.js");
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/contexts/Application */ "./contexts/Application.js");
/* harmony import */ var _icons_public_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/icons/public.svg */ "./icons/public.svg");
/* harmony import */ var _icons_public_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_icons_public_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _icons_secret_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/icons/secret.svg */ "./icons/secret.svg");
/* harmony import */ var _icons_secret_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_icons_secret_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _pages_error__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/pages/_error */ "./pages/_error.js");
/* harmony import */ var _utilities_pluck__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/utilities/pluck */ "./utilities/pluck.js");
/* harmony import */ var _campaign_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./campaign.scss */ "./pages/campaign.scss");
/* harmony import */ var _campaign_scss__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_campaign_scss__WEBPACK_IMPORTED_MODULE_23__);





















 // import Article from '@/server/models/Article'



var EDITABLE_FIELDS = ['title', 'theme'];
var STATE_FIELDS = EDITABLE_FIELDS.concat(['isEditor', 'isOwner', 'isPlayer']);

var CampaignPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(CampaignPage, _Component);

  function CampaignPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, CampaignPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(CampaignPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "state", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_22__["default"])(_this.context.campaign, STATE_FIELDS), {
      savingParticipants: false // console.log(req.campaign)
      // const articles = Article.find({  })

    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleParticipantsSave", function (_ref) {
      var editors = _ref.editors,
          owners = _ref.owners,
          players = _ref.players;

      _this.setState({
        savingParticipants: true
      });

      var update = {
        editors: editors.map(function (user) {
          return user._id;
        }),
        owners: owners.map(function (user) {
          return user._id;
        }),
        players: players.map(function (user) {
          return user._id;
        })
      };

      _this.context.updateCampaign(update, function () {
        console.log('got here');

        _this.setState({
          savingParticipants: false
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleReset", function () {
      return _this.setState(Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_22__["default"])(_this.context.campaign, STATE_FIELDS));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleSave", function () {
      return _this.context.updateCampaign(_this.state);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleTitleChange", function (title) {
      return _this.setState({
        title: title
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "handleToggleSecret", function () {
      var secret = _this.context.campaign.secret;

      _this.context.updateCampaign({
        secret: !secret
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "renderUserList", function (list) {
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("ul", {
        className: "user-list"
      }, list.map(function (_ref2) {
        var _id = _ref2._id,
            name = _ref2.name,
            username = _ref2.username;
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("li", {
          key: _id
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_PageLink__WEBPACK_IMPORTED_MODULE_15__["default"], {
          type: "user",
          slug: username
        }, name || username));
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)), "render", function () {
      var campaign = _this.context.campaign;

      if (!campaign._id) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_pages_error__WEBPACK_IMPORTED_MODULE_21__["default"], {
          statusCode: 404,
          message: campaign.message
        });
      }

      var editors = campaign.editors,
          isOwner = campaign.isOwner,
          owners = campaign.owners,
          players = campaign.players,
          secret = campaign.secret;
      var _this$state = _this.state,
          savingParticipants = _this$state.savingParticipants,
          title = _this$state.title;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "campaign page"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "title-bar"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "title",
        onChange: _this.handleTitleChange,
        placeholder: "Campaign Title",
        readOnly: campaign.isEditable,
        value: title
      }), isOwner && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Toggle__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: "secret",
        offIcon: _icons_public_svg__WEBPACK_IMPORTED_MODULE_19___default.a,
        onIcon: _icons_secret_svg__WEBPACK_IMPORTED_MODULE_20___default.a,
        onToggle: _this.handleToggleSecret,
        value: secret
      }), _this.isDirty && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
        className: "safe",
        onClick: _this.handleSave
      }, "Save"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
        className: "safe",
        onClick: _this.handleReset
      }, "Reset"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_13__["Scrollbars"], {
        className: "contents",
        universal: true,
        autoHide: true
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "left column"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "right column"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Participants__WEBPACK_IMPORTED_MODULE_16__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
        className: "lightbox"
      }, {
        editors: editors,
        owners: owners,
        players: players
      }, {
        onSave: _this.handleParticipantsSave,
        saving: savingParticipants
      })))));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(CampaignPage, [{
    key: "isDirty",
    get: function get() {
      var campaign = this.context.campaign;

      var fromContext = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_22__["default"])(campaign, EDITABLE_FIELDS));

      var fromState = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(Object(_utilities_pluck__WEBPACK_IMPORTED_MODULE_22__["default"])(this.state, EDITABLE_FIELDS));

      return fromContext !== fromState;
    }
  }]);

  return CampaignPage;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(CampaignPage, "contextType", _contexts_Application__WEBPACK_IMPORTED_MODULE_18__["default"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(CampaignPage, "getInitialProps",
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3) {
    var query, req;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref3.query, req = _ref3.req;
            return _context.abrupt("return", {});

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}());



/***/ })

})
//# sourceMappingURL=campaign.js.efd81e929c8c054581a2.hot-update.js.map