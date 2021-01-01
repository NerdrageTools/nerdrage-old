module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/3ze":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("bBV7");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "1GNI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ _app_Wiki; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: ../node_modules/next/app.js
var app = __webpack_require__("o42t");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// EXTERNAL MODULE: external "sortablejs"
var external_sortablejs_ = __webpack_require__("o1Lx");
var external_sortablejs_default = /*#__PURE__*/__webpack_require__.n(external_sortablejs_);

// EXTERNAL MODULE: ./components/Link/Link.tsx
var Link = __webpack_require__("98Mn");

// EXTERNAL MODULE: ./contexts/Application.ts
var Application = __webpack_require__("qhEq");

// EXTERNAL MODULE: ./icons/campaign.svg
var icons_campaign = __webpack_require__("pqbZ");
var campaign_default = /*#__PURE__*/__webpack_require__.n(icons_campaign);

// EXTERNAL MODULE: ./icons/edit.svg
var edit = __webpack_require__("HouF");
var edit_default = /*#__PURE__*/__webpack_require__.n(edit);

// EXTERNAL MODULE: ./icons/favorite-on.svg
var favorite_on = __webpack_require__("48dn");
var favorite_on_default = /*#__PURE__*/__webpack_require__.n(favorite_on);

// EXTERNAL MODULE: ./icons/remove.svg
var remove = __webpack_require__("Eo3F");
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);

// EXTERNAL MODULE: ./icons/sheet.svg
var sheet = __webpack_require__("tP09");
var sheet_default = /*#__PURE__*/__webpack_require__.n(sheet);

// EXTERNAL MODULE: ./utilities/noop.js
var noop = __webpack_require__("E/TB");

// EXTERNAL MODULE: ./utilities/pluck.js + 1 modules
var pluck = __webpack_require__("VTEe");

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: ./components/Dialog/Dialog.js
var Dialog = __webpack_require__("y4cp");

// EXTERNAL MODULE: ./utilities/prompt.scss
var utilities_prompt = __webpack_require__("gyVo");

// CONCATENATED MODULE: ./utilities/prompt.js






async function prompt_prompt(text = '', {
  defaultValue = '',
  title = 'Prompt'
} = {}) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  return new Promise((resolve, reject) => {
    const inputBox = /*#__PURE__*/external_react_default.a.createRef();

    const handleCancel = () => reject();

    const handleOk = () => resolve(inputBox.current.value);

    const handleKeyDown = event => {
      switch (event.key) {
        case 'Enter':
          return handleOk();

        case 'Escape':
          return handleCancel();

        default:
          return undefined;
      }
    };

    external_react_dom_default.a.render( /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Dialog["a" /* default */], {
      className: "prompt",
      modal: true,
      onCancel: handleCancel,
      onOk: handleOk,
      title: title,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "text",
        children: text
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "input-wrapper",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          defaultValue: defaultValue,
          onKeyDown: handleKeyDown,
          ref: inputBox,
          type: "text"
        })
      })]
    }), container, () => {
      inputBox.current.select();
      inputBox.current.focus();
    });
  }).finally(() => {
    document.body.removeChild(container);
  });
}
// EXTERNAL MODULE: ./components/Navigation/Navigation.scss
var Navigation_Navigation = __webpack_require__("USCx");

// CONCATENATED MODULE: ./components/Navigation/Navigation.js




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}















class Navigation_Navigation_Navigation extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "campaignNav", /*#__PURE__*/external_react_default.a.createRef());

    _defineProperty(this, "initializeSortable", () => {
      if (!this.campaignNav.current) return;
      if (this.sortable) this.sortable.destroy();
      const ul = this.campaignNav.current.querySelector('ul');
      const {
        navigation
      } = this.context.campaign;
      this.sortable = external_sortablejs_default.a.create(ul, {
        disabled: !this.isCampaignEditor || this.context.size === 'small',
        dragClass: 'dragging',
        draggable: 'li',
        onEnd: () => {
          const updated = [...ul.querySelectorAll('li')].map(li => li.getAttribute('data-id')).map(id => navigation.find(navLink => navLink._id === id)).filter(Boolean);
          this.context.updateCampaign({
            navigation: updated
          });
        }
      });
    });

    _defineProperty(this, "promptForLinkDetails", async (item = {}) => {
      try {
        const title = await prompt_prompt('New Title?', {
          defaultValue: item.title,
          title: 'Set Title'
        });
        if (!title) return undefined;
        const slug = await prompt_prompt('Slug to link to?', {
          defaultValue: item.slug,
          placeholder: 'Leave blank to create a header...',
          title: 'Set Slug'
        });
        return {
          slug,
          title
        };
      } catch (_) {
        return null;
      }
    });

    _defineProperty(this, "handleAddLink", async () => {
      const newLink = await this.promptForLinkDetails();

      if (!newLink) {
        return;
      }

      this.context.updateCampaign({
        navigation: [...this.context.campaign.navigation, newLink]
      });
    });

    _defineProperty(this, "handleDelete", ({
      currentTarget
    }) => {
      const id = currentTarget.getAttribute('data-id');
      const {
        navigation
      } = this.context.campaign;
      this.context.updateCampaign({
        navigation: navigation.filter(item => item._id !== id)
      });
    });

    _defineProperty(this, "handleEdit", async ({
      currentTarget
    }) => {
      const id = currentTarget.getAttribute('data-id');
      const navigation = [...this.context.campaign.navigation];
      const item = navigation.find(navItem => navItem._id === id);

      if (!item) {
        return;
      }

      const edited = await this.promptForLinkDetails(item);

      if (!edited) {
        return;
      }

      navigation.splice(navigation.indexOf(item), 1, edited);
      this.context.updateCampaign({
        navigation
      });
    });

    _defineProperty(this, "renderList", (list = [], listTitle = '', type = 'article', campaignLink = null) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [(campaignLink || Boolean(list.length)) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "list-title",
        children: campaignLink || listTitle
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
        children: list.map(({
          _id,
          campaign,
          slug,
          title
        }, index) => {
          const {
            subdomain = '',
            title: cTitle = ''
          } = campaign || this.context.campaign || {};
          let text = title;

          if (type !== 'campaign' && subdomain && subdomain !== this.context.subdomain) {
            text += ` (${cTitle || subdomain})`;
          }

          if (!slug) {
            return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
              className: "section",
              "data-id": _id,
              title: title,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
                children: text
              }), this.context.campaign.isEditor && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "controls",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(edit_default.a, {
                  className: "edit",
                  "data-id": _id,
                  onClick: this.handleEdit
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(remove_default.a, {
                  className: "delete",
                  "data-id": _id,
                  onClick: this.handleDelete
                })]
              })]
            }, _id || index);
          }

          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
            "data-id": _id,
            title: title,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* Link */], _objectSpread(_objectSpread({}, {
              campaign,
              slug,
              type
            }), {}, {
              active: this.context.subdomain === subdomain && this.context.router.asPath === `/${type}/${slug}`,
              onClick: this.props.onItemClick,
              children: text
            })), this.context.campaign.isEditor && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "controls",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(edit_default.a, {
                className: "edit",
                "data-id": _id,
                onClick: this.handleEdit
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(remove_default.a, {
                className: "delete",
                "data-id": _id,
                onClick: this.handleDelete
              })]
            })]
          }, _id || index);
        })
      })]
    }));

    _defineProperty(this, "filterLinks", link => link.campaign.subdomain === this.context.campaign.subdomain);

    _defineProperty(this, "render", () => {
      const {
        campaign,
        user = {}
      } = this.context;
      let {
        favorites = [],
        sheets = []
      } = user;
      if (!campaign || !campaign.navigation) return null;
      const navigation = campaign.navigation.map(link => _objectSpread(_objectSpread({}, link), {}, {
        campaign: Object(pluck["a" /* pluck */])(campaign, '_id', 'subdomain', 'title')
      }));
      favorites = favorites.filter(this.filterLinks);
      sheets = sheets.filter(this.filterLinks);
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "navigation",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_custom_scrollbars_["Scrollbars"], {
          className: "scrollbars link-sections",
          autoHide: true,
          universal: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "content",
            ref: this.props.wrapperRef,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "campaign-nav",
              ref: this.campaignNav,
              children: this.renderList(navigation, campaign.title, 'article', /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(campaign_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* Link */], {
                  subdomain: campaign.subdomain,
                  type: "campaign",
                  children: campaign.title
                })]
              }))
            }), user && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
              children: [Boolean(favorites.length) && this.renderList(favorites, /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(favorite_on_default.a, {}), " Favorites"]
              })), Boolean(sheets.length) && this.renderList(sheets, /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(sheet_default.a, {}), " Sheets"]
              }), 'sheet')]
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "footer",
          children: [campaign.isEditor && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "buttons",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              className: "add safe",
              onClick: this.handleAddLink,
              children: "Add Link"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* Link */], {
            subdomain: "www",
            slug: "tos",
            type: "article",
            children: "Terms of Service"
          })]
        })]
      });
    });
  }

  componentDidMount() {
    this.initializeSortable();
  }

  componentDidUpdate() {
    this.initializeSortable();
  }

  get isCampaignEditor() {
    return Boolean(this.context.campaign && this.context.campaign.isEditor);
  }

}

_defineProperty(Navigation_Navigation_Navigation, "contextType", Application["a" /* Application */]);

_defineProperty(Navigation_Navigation_Navigation, "defaultProps", {
  items: [],
  onItemClick: noop["a" /* noop */],
  wrapperRef: noop["a" /* noop */]
});
// EXTERNAL MODULE: ./components/SearchBox/SearchBox.js + 1 modules
var SearchBox = __webpack_require__("L87S");

// CONCATENATED MODULE: ./components/SearchBox/ArticleSearchBox.js



function ArticleSearchBox_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function ArticleSearchBox_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ArticleSearchBox_ownKeys(Object(source), true).forEach(function (key) {
        ArticleSearchBox_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ArticleSearchBox_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function ArticleSearchBox_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}




class ArticleSearchBox_ArticleSearchBox extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    ArticleSearchBox_defineProperty(this, "handleHotKey", (_, __, ref) => {
      ref.inputBox.current.focus();
    });

    ArticleSearchBox_defineProperty(this, "handleSelect", option => {
      const {
        router
      } = this.context;

      if (option) {
        router.push(`/article?slug=${option.slug}`, `/article/${option.slug}`);
      }
    });

    ArticleSearchBox_defineProperty(this, "renderOption", (option, _, itemProps) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", ArticleSearchBox_objectSpread(ArticleSearchBox_objectSpread({
      className: "search-result"
    }, itemProps), {}, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
        className: "title",
        children: option.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "preview",
        children: option.preview.map((preview, key) =>
        /*#__PURE__*/
        // eslint-disable-next-line react/no-danger
        Object(jsx_runtime_["jsx"])("span", {
          dangerouslySetInnerHTML: {
            __html: preview
          }
        }, key))
      })]
    }), option.slug));

    ArticleSearchBox_defineProperty(this, "render", () => /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchBox["a" /* default */], {
      className: "article",
      clearOnSelect: true,
      hotkeys: {
        focus: {
          ctrlKey: true,
          key: 'F',
          shiftKey: true
        }
      },
      onHotKey: this.handleHotKey,
      onSelect: this.handleSelect,
      placeholder: "Search... (Ctrl+Shift+F)",
      renderOption: this.renderOption,
      url: "/api/search/articles/:searchTerm"
    }));
  }

}

ArticleSearchBox_defineProperty(ArticleSearchBox_ArticleSearchBox, "contextType", Application["a" /* Application */]);
// EXTERNAL MODULE: ./icons/menu.svg
var menu = __webpack_require__("GB4D");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu);

// EXTERNAL MODULE: ./components/FlyoutMenu/FlyoutMenu.scss
var FlyoutMenu_FlyoutMenu = __webpack_require__("DnaX");

// CONCATENATED MODULE: ./components/FlyoutMenu/FlyoutMenu.js



function FlyoutMenu_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}





class FlyoutMenu_FlyoutMenu_FlyoutMenu extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    FlyoutMenu_defineProperty(this, "state", {
      open: this.props.open !== undefined ? this.props.open : false
    });

    FlyoutMenu_defineProperty(this, "el", /*#__PURE__*/external_react_default.a.createRef());

    FlyoutMenu_defineProperty(this, "componentDidMount", () => {
      document.addEventListener('mousedown', this.handleOutsideClick);
    });

    FlyoutMenu_defineProperty(this, "componentWillUnmount", () => {
      document.removeEventListener('mousedown', this.handleOutsideClick);
    });

    FlyoutMenu_defineProperty(this, "close", () => this.setState({
      open: false
    }));

    FlyoutMenu_defineProperty(this, "open", () => this.setState({
      open: true
    }));

    FlyoutMenu_defineProperty(this, "handleOutsideClick", ({
      target
    }) => {
      if (this.state.open && !this.el.current.contains(target)) this.close();
    });

    FlyoutMenu_defineProperty(this, "toggleOpen", () => this.setState({
      open: !this.state.open
    }));

    FlyoutMenu_defineProperty(this, "render", () => {
      const {
        children,
        className,
        icon: Icon
      } = this.props;
      const open = this.props.open !== undefined ? this.props.open : this.state.open;
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `${className} flyout menu ${open ? 'open' : 'closed'}`,
        ref: this.el,
        children: [open && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "flyout-panel",
          children: children
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "menu-toggler",
          onClick: this.toggleOpen,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon, {})
        })]
      });
    });
  }

}

FlyoutMenu_defineProperty(FlyoutMenu_FlyoutMenu_FlyoutMenu, "defaultProps", {
  children: [],
  className: '',
  icon: menu_default.a,
  open: undefined
});

function MenuItem({
  children = null,
  className = '',
  onClick = noop["a" /* noop */]
}) {
  const clickable = onClick !== noop["a" /* noop */];
  const classNames = [className, 'menu-item', clickable ? 'clickable' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classNames,
    onClick: onClick,
    children: children
  });
}
// EXTERNAL MODULE: ./icons/read.svg
var read = __webpack_require__("KP2y");
var read_default = /*#__PURE__*/__webpack_require__.n(read);

// CONCATENATED MODULE: ./utilities/alert.js





async function alert_alert(text = '', title = 'Prompt') {
  const container = document.createElement('div');
  document.body.appendChild(container);
  return new Promise(resolve => {
    const handleOk = () => resolve();

    external_react_dom_default.a.render( /*#__PURE__*/Object(jsx_runtime_["jsx"])(Dialog["a" /* default */], {
      className: "prompt",
      modal: true,
      onOk: handleOk,
      showCancel: false,
      title: title,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "text",
        children: text
      })
    }), container);
  }).finally(() => {
    document.body.removeChild(container);
  });
}
// CONCATENATED MODULE: ./utilities/kebabCase.js
function kebabCase(string) {
  if (!string) return '';
  const matches = string.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
  if (!matches) return '';
  return matches.map(x => x.toLowerCase()).join('-');
}
// CONCATENATED MODULE: ./utilities/unique.js
function unique(array, ...args) {
  let list;

  if (args.length > 0) {
    list = [array, ...args];
  } else if (Array.isArray(array)) {
    list = array;
  } else {
    list = [array];
  }

  return list.filter((el, ix, all) => all.indexOf(el) === ix);
}
// CONCATENATED MODULE: ./utilities/slugs.js



const strip = string => string.replace(/\s|\r|\n/g, '-').replace(/-{2,}/g, '-').replace(/[^a-z0-9._-]/gi, '');

function slugify(input) {
  if (Array.isArray(input)) {
    const list = input.map(slugify).filter(slug => slug);
    return unique(list).sort();
  }

  if (!input || typeof input === 'object' || typeof input === 'function') {
    return ''; // Return '' for all falsy values, objects and fn's
  }

  const lowercase = strip(input).toLowerCase();
  return lowercase.split('.').map(kebabCase).join('.'); // Split file.ext and kebab-case each section, then rejoin
}
function extractUrlSlug(input) {
  if (Array.isArray(input)) {
    return input.map(extractUrlSlug).filter(slug => slug);
  }

  if (typeof input !== 'string') return '';
  return slugify(input.split(/[/\\]/g).pop().split(/[?#]/g).shift());
}
function slugifyUrl(input) {
  if (Array.isArray(input)) {
    return input.map(slugifyUrl).filter(slug => slug);
  }

  if (typeof input !== 'string') return '';
  let result = [];
  const [file, ...path] = input.split('/').reverse();
  const [slug, extension] = file.split('.');

  if (path.length) {
    result = [path.reverse().join('/'), '/'];
  }

  result.push(slugify(slug));

  if (extension) {
    result = [...result, '.', extension];
  }

  return result.join('');
}
// EXTERNAL MODULE: ./components/CreateLinkDialog/CreateLinkDialog.scss
var CreateLinkDialog = __webpack_require__("qK8e");

// CONCATENATED MODULE: ./components/CreateLinkDialog/CreateLinkDialog.js








const getTemplates = async type => {
  const response = await fetch(`/api/templates/${type.toLowerCase()}`);
  if (response.status === 200) return response.json();
  return [];
};

function CreateLinkDialog_CreateLinkDialog({
  defaultSlug = '',
  defaultText = '',
  onCancel = noop["a" /* noop */],
  onOk = noop["a" /* noop */],
  slugLabel = 'Slug',
  templateType = null,
  textLabel = 'Text',
  title = 'Create Link'
}) {
  const {
    0: text,
    1: setText
  } = Object(external_react_["useState"])(defaultText);
  const {
    0: slug,
    1: setSlug
  } = Object(external_react_["useState"])(defaultSlug);
  const {
    0: auto,
    1: setAuto
  } = Object(external_react_["useState"])(true);
  const {
    0: templates,
    1: setTemplates
  } = Object(external_react_["useState"])([]);
  const {
    0: templateSlug,
    1: setTemplate
  } = Object(external_react_["useState"])(undefined);
  const slugInput = Object(external_react_["useRef"])(null);
  const textInput = Object(external_react_["useRef"])(null);
  const templateInput = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(() => {
    if (templateType) getTemplates(templateType).then(setTemplates);
  }, [templateType]);
  Object(external_react_["useEffect"])(() => {
    textInput.current.focus();
    textInput.current.select();
  }, [true]);

  const handleKeyDown = ({
    key
  }) => {
    switch (key) {
      case 'Escape':
        return onCancel();

      case 'Enter':
        return onOk({
          slug,
          templateSlug,
          text
        });

      default:
        return undefined;
    }
  };

  const handleSlug = ({
    target
  }) => {
    if (auto) setAuto(false);
    setSlug(slugify(target.value));
  };

  const handleText = ({
    target
  }) => {
    setText(target.value);
    if (auto) setSlug(slugify(target.value));
  };

  const handleTemplate = ({
    target
  }) => setTemplate(target.value);

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Dialog["a" /* default */], {
    className: "create-link",
    modal: true,
    onCancel: onCancel,
    onKeyDown: handleKeyDown,
    onOk: () => onOk({
      slug,
      templateSlug,
      text
    }),
    title: title,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "input-wrapper",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        children: textLabel
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        value: text,
        onChange: handleText,
        ref: textInput,
        type: "text"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "input-wrapper",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        children: slugLabel
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        value: slug,
        onChange: handleSlug,
        ref: slugInput,
        type: "text"
      })]
    }), templateType && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "input-wrapper",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        children: "Template"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
        onChange: handleTemplate,
        ref: templateInput,
        value: templateSlug,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "",
          children: "None"
        }, "none"), templates.map(({
          slug,
          title
        }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: slug,
          children: title
        }, slug))]
      })]
    })]
  });
}
// CONCATENATED MODULE: ./utilities/promptLink.js


function promptLink_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function promptLink_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      promptLink_ownKeys(Object(source), true).forEach(function (key) {
        promptLink_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      promptLink_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function promptLink_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}





async function promptLink({
  defaultText = '',
  defaultSlug = '',
  templateType = null,
  title = 'Create Link'
}) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  return new Promise((resolve, reject) => {
    const onCancel = () => reject();

    const onOk = payload => resolve(payload);

    external_react_dom_default.a.render( /*#__PURE__*/Object(jsx_runtime_["jsx"])(CreateLinkDialog_CreateLinkDialog, promptLink_objectSpread({}, {
      defaultSlug,
      defaultText,
      onCancel,
      onOk,
      templateType,
      title
    })), container);
  }).finally(() => {
    document.body.removeChild(container);
  });
}
// EXTERNAL MODULE: ./components/CreateMenu/CreateMenu.scss
var CreateMenu_CreateMenu = __webpack_require__("1l36");

// CONCATENATED MODULE: ./components/CreateMenu/CreateMenu.js



function CreateMenu_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}









class CreateMenu_CreateMenu_CreateMenu extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    CreateMenu_defineProperty(this, "flyoutMenu", /*#__PURE__*/external_react_default.a.createRef());

    CreateMenu_defineProperty(this, "handleNew", type => async () => {
      this.flyoutMenu.current.close();
      const lowered = type.toLowerCase();

      try {
        const {
          slug,
          templateSlug,
          text
        } = await promptLink({
          defaultSlug: `new-${lowered}`,
          defaultText: `New ${type}`,
          templateType: type,
          title: `New ${type}...`
        });
        let href = `/${lowered}?slug=${slug}&title=${text}`;
        let asUrl = `/${lowered}/${slug}?title=${text}`;

        if (templateSlug) {
          href += `&template=${templateSlug}`;
          asUrl += `&template=${templateSlug}`;
        }

        this.context.router.push(href, asUrl);
      } catch (error) {}
    });

    CreateMenu_defineProperty(this, "handleNewCampaign", async () => {
      const {
        rootUrl
      } = this.context;
      this.flyoutMenu.current.close();

      try {
        const {
          slug,
          text
        } = await promptLink({
          defaultSlug: 'new-campaign',
          defaultText: 'New Campaign',
          slugLabel: 'Subdomain',
          textLabel: 'Title',
          title: 'New Campaign...'
        });
        const response = await fetch(`/api/campaign/${slug}`, {
          body: JSON.stringify({
            subdomain: slug,
            title: text
          }),
          credentials: 'include',
          method: 'PUT'
        });

        if (response.status === 201) {
          this.context.router.push(`//${slug}.${rootUrl}/campaign`, `//${slug}.${rootUrl}/campaign`);
        } else {
          const json = await response.json();
          alert_alert(json.message, 'Error');
        }
      } catch (error) {}
    });

    CreateMenu_defineProperty(this, "render", () => {
      const {
        children
      } = this.props;
      const {
        isEditor,
        isParticipant
      } = this.context.campaign || {};
      const {
        isAdmin
      } = this.context.user || {};
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FlyoutMenu_FlyoutMenu_FlyoutMenu, {
        className: "create",
        ref: this.flyoutMenu,
        children: [isAdmin && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MenuItem, {
          onClick: this.handleNewCampaign,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(sheet_default.a, {}), " New Campaign..."]
        }), isEditor && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MenuItem, {
          onClick: this.handleNew('Article'),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(read_default.a, {}), " New Article..."]
        }), isParticipant && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MenuItem, {
          onClick: this.handleNew('Sheet'),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(sheet_default.a, {}), " New Sheet..."]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), children]
      });
    });
  }

}

CreateMenu_defineProperty(CreateMenu_CreateMenu_CreateMenu, "contextType", Application["a" /* Application */]);
// EXTERNAL MODULE: ./icons/logout.svg
var logout = __webpack_require__("6FHp");
var logout_default = /*#__PURE__*/__webpack_require__.n(logout);

// EXTERNAL MODULE: ./components/UserMenu/UserMenu.scss
var UserMenu_UserMenu = __webpack_require__("zwE9");

// CONCATENATED MODULE: ./components/UserMenu/UserMenu.js




function UserMenu_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}








class UserMenu_UserMenu_UserMenu extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    UserMenu_defineProperty(this, "renderAnonymous", () => {
      const {
        asPath,
        query
      } = this.context.router;
      const redirectTo = query.redirectTo || asPath;
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* Link */], {
          type: "login",
          query: {
            redirectTo
          },
          children: "Log In"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "divider"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* Link */], {
          type: "signup",
          children: "Sign Up"
        })]
      });
    });

    UserMenu_defineProperty(this, "renderLoggedIn", () => {
      const {
        username
      } = this.context.user;
      const MenuType = this.context.campaign ? CreateMenu_CreateMenu_CreateMenu : FlyoutMenu_FlyoutMenu_FlyoutMenu;
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "username",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: "logged in as"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* Link */], {
            type: "user",
            slug: username,
            children: username
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "divider"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuType, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MenuItem, {
            className: "logoff",
            onClick: this.context.logOff,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(logout_default.a, {}), " Log Out"]
          })
        })]
      });
    });

    UserMenu_defineProperty(this, "render", () => {
      const {
        user
      } = this.context;
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "user-menu",
        children: !user || user.anonymous ? this.renderAnonymous() : this.renderLoggedIn()
      });
    });
  }

}

UserMenu_defineProperty(UserMenu_UserMenu_UserMenu, "contextType", Application["a" /* Application */]);
// EXTERNAL MODULE: ./icons/fist.svg
var fist = __webpack_require__("TUqa");
var fist_default = /*#__PURE__*/__webpack_require__.n(fist);

// EXTERNAL MODULE: ./icons/Navigation.js
var icons_Navigation = __webpack_require__("EAP2");

// EXTERNAL MODULE: ./utilities/debounce.js
var debounce = __webpack_require__("8qGm");

// EXTERNAL MODULE: ./components/Layout/Layout.scss
var Layout_Layout = __webpack_require__("wJYp");

// CONCATENATED MODULE: ./components/Layout/Layout.js




function Layout_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}












const getWindowSize = () => {
  if (true) return 'server';
  if (window.matchMedia('(min-width: 551px) and (max-width: 979px)').matches) return 'medium';
  if (window.matchMedia('(max-width: 550px)').matches) return 'small';
  return 'large';
};

class Layout_Layout_Layout extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Layout_defineProperty(this, "state", {
      expanded: false,
      size: getWindowSize(),
      ssrDone: false
    });

    Layout_defineProperty(this, "navigation", /*#__PURE__*/external_react_default.a.createRef());

    Layout_defineProperty(this, "navigationIcon", /*#__PURE__*/external_react_default.a.createRef());

    Layout_defineProperty(this, "handleWindowResize", Object(debounce["a" /* default */])(() => {
      const size = getWindowSize();
      this.setState({
        size
      });
      this.context.setSize(size);
    }, 100));

    Layout_defineProperty(this, "componentDidMount", () => {
      this.setState({
        ssrDone: true
      });
      this.handleWindowResize();
      window.addEventListener('resize', this.handleWindowResize);
      document.addEventListener('mousedown', this.handleOutsideNavClick);
    });

    Layout_defineProperty(this, "componentWillUnmount", () => {
      window.removeEventListener('resize', this.handleWindowResize);
      document.removeEventListener('mousedown', this.handleOutsideNavClick);
    });

    Layout_defineProperty(this, "collapseNavigation", () => {
      this.setState({
        expanded: false
      });
    });

    Layout_defineProperty(this, "toggleNavigation", () => {
      this.setState({
        expanded: !this.state.expanded
      });
    });

    Layout_defineProperty(this, "handleOutsideNavClick", ({
      target
    }) => {
      if (this.state.expanded // only collapse if expanded
      && !this.navigation.current.contains(target) // and the click isn't in the nav
      && this.navigationIcon.current !== target // and the click isn't on the nav icon
      ) {
          this.collapseNavigation();
        }
    });

    Layout_defineProperty(this, "render", () => {
      const {
        className
      } = this.props;
      const {
        campaign,
        theme
      } = this.context;
      const {
        expanded,
        size
      } = this.state;
      const title = campaign ? campaign.title : 'Unknown Campaign';
      const classNames = ['wiki layout', className, expanded ? 'expand-navigation' : 'collapse-navigation', this.state.ssrDone ? size : 'server'].filter(Boolean).join(' ');
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
            children: title
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
            href: `//fonts.googleapis.com/css?family=${theme.fontForText}:400,400i,700,700i|${theme.fontForTitles}&display=swap`,
            rel: "stylesheet"
          }, "content-font")]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: classNames,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "header",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "logo",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fist_default.a, {
                className: "logo x2"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "nerd",
                children: "Nerd"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "rage",
                children: "RAGE"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArticleSearchBox_ArticleSearchBox, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_Navigation["a" /* default */], {
              className: "navigation toggle",
              onClick: this.toggleNavigation,
              wrapperRef: this.navigationIcon
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(UserMenu_UserMenu_UserMenu, {})]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "content",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Navigation_Navigation_Navigation, {
              onItemClick: this.collapseNavigation,
              wrapperRef: this.navigation
            }), this.props.children]
          })]
        })]
      });
    });
  }

}

Layout_defineProperty(Layout_Layout_Layout, "contextType", Application["a" /* Application */]);
// CONCATENATED MODULE: ./data/defaultTheme.js
/* harmony default export */ var defaultTheme = ({
  background: '#fff',
  fontForText: 'Ubuntu',
  fontForTitles: 'Ubuntu',
  fontSize: '16px',
  normalText: '#333',
  primary: '#f00',
  primaryText: '#fff'
});
// EXTERNAL MODULE: ./styles/all.scss
var styles_all = __webpack_require__("mb5E");

// CONCATENATED MODULE: ./icons/book.png
/* harmony default export */ var book = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkdJREFUeNqUUz1vE0EQfbt3e3ZwnICDk2AXSEFBIEsERIVER0eBKxoq6ggqGv4H0KcBRBco+BA9KBJSIkcxYAkJGzCJDIY4Ocucb3eY3bOJQSiI0Y20HzNv35uZEydvPseDywFyfhe19y3M5Cdp7sSZzWajdiM7kb23sfEWvueDIACjYcigVCphfUvj2qNvkBgYEVnPkTFIH8rPzi1cuKu1fqENrWhNxOse+6LR8VljaJgGn5fLvC/bw+L0OCLNJwxioWeLx859b7xCrjAPNX4kFYvMnTDcBWNBG8kPiocWoFxI7eJwfgrdcAfvPnUsHcsJYOqSYk4wGPMVJqcKyKsDfLUNFa3AQJSdBKYGy8o4Gdgzcp+TZ5iV4RpwFCcY/mJ3yQACFMcYzdvXBoGGcyBEUkTNlRX4PzMszZoDIB3/fiss3D6QfGW7NQBgCVYPBkk2WXj/ABKJBAdg0biIw7jsmMHH1y/R7XzhLijGEH+FIFdQngOnx9ga2JclDmYCRL0mmpUacsVT8GwrPQ9SegwmXYxllnSEiyh5o5SEDHyknCtEkUZ3p4ftz1XX2q9bLfzoduAF6eR5mXZxnAxfsdx6dRXVSoWDRUKZXVtG7UIyVOE6Gm/WmOp9NxNSSmQU8T9SZgDEncV6eUJzMo0UqU8SS8efud3VD5eghB5tAjxBCNDv2PXC0YvXT5Pu6+Ffpfu9aOb8ldtaBNPuKGw9ba8+WZI+axSuNdwo5dUf31obFjizN2O/5m2eXQ32bfbNP3pq1+FPAQYA17kRbxpFka4AAAAASUVORK5CYII=");
// CONCATENATED MODULE: ./icons/combo.png
/* harmony default export */ var combo = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAVFBMVEUAAAAAAAABAQECAwIECAUFCQYGCwgHDAgJEQsLEwwZLB4cMSEcMiIdNCIlQCsmQy5CdE1CdE5GelJGe1JJgldKg1dMhVlOiVtUlGNWmGZXmWZYmmekGyzIAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiAxEALylo8/oCAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAGhJREFUGNNlkIkKwCAMQ1vdobtP7bb//88VxWMzUDB5UKMALGRBknNZFE4xSeQDUNRKYspxXE+jHfTp/BDZFvx6np49bcJjHrGwv4aAEaqD6J7iSkRl7N5hdrfUjfi1/JUr6xcPzL7gBZH6AvJF97rbAAAAAElFTkSuQmCC");
// CONCATENATED MODULE: ./icons/dice.gif
/* harmony default export */ var dice = ("data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAOcSURBVHjaYvz//z+Dh4cHw69fvxh+/PjBICwszPD06VMmVlZWHX5+/ghTU9NAWVlZpZkzZx66cOGCLwMDww9GRkYGEADRAAHEAmL8+/eP4ffv3ww/f/6UBNJpBgYGfhYWFloaGpocP39+Z1BSUmHQ0dFxycnJOXTx4kUnoKVfYIYABBADyAWenp4pCQkJxydNmvTt5MmT/9+/f/8fBG7duv3f3z/of0ND6/8/f37/P3PmzH9HR8fbQH3yIAOYmJgYAAIIbEBbW9ufb9++/YcBoIv+v3v3/n9f38T/zc0d/x8+fPT/5ctXYINv3Ljx38/P7znQED2QAwACiAlEMDMzM718+ZLhz58/YO+ADAWKMXz58h0YNn8YuLg4GdjYWBiAljCIiooxTJw4SQLo4gNAF1gABBDYAGAA/rtz5w7DzZs3wc4ChgVQ0USggd8ZKiqKGDg4OIEGMzJwsHMA2cwMCgrSDDm56YLCwiK1AAHEAgkJhn9sbGzMb968YXj27BmDgIAAg6CgKMP37z/ArgFKAZX8ZPjP+J3hyrXbDKLiQgzffnxl+PvnLwdAALFAA/IfiAYawvD27VsGVlYWhpycdKjZXxi+fHvFwM7JzHD+/B2G5MQyht6JtQycHNwMv//8+gQQQGAvMDExAl3AzjBz5jyGS5cug23+9eslw4sXlxgSk7IYLl64wsDKzMnAycnJ0NhcymBkbMDw4uUboLf+fwcIIGggsjCws7MyKCoqAg2D+IqR6S/Dg4cvgYpYGH7+YmAIDc8BGviCwdvXieHfX2Bq+gry3r+vAAEENgAY9zeB0cYQFhbIoK+vDQzEXwxfv35n0NNXZFi4YDIDHx8fg7i4OFADC0NYUDrD5Ss3GLi4uRn+/v33BSCAwAbs3LnTferUqU++fv3KwMLCBnEBMxPQG38ZZs6ey/D33y+GKZMaGdiB/lZVV2NQVlYBBvYLoAF/vgIEEDiUuYGmAYFGVFTUy+vXr4ETzvefT/4fObbzv7mZ3f9TZ/b9//nn7f+bdy7937J90/+cvJw/QO/eAeqxAwggsAG8vLzQEGfQSUlJfXf//oP/f/6+/v/x873/d+5e+H/46J7/NbXV/8zNLd7w8PBuBKoLB2IekAaAAIIbAEpALCwsINdY5Rfkf7x85fT/2XOm/g8MCvgqJip+HKi2AIhlGdAAQAChGADMwgxCQkLAlKZgJSUts5eVlW06UI0hELMw4AAAAQYAK0+dL7H9A2oAAAAASUVORK5CYII=");
// CONCATENATED MODULE: ./icons/info.png
/* harmony default export */ var info = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAELklEQVR4nFWTTYiWVRTHf+fe+7wf8zYzjjPmTDPOSFqjpqVGRekEIVGLPiBqE2SkGC5bVJs2rdq0CoJAwY25iQijQChpY6GGEBZl4tdEzozz8c6Hvl/P+9x7T4tnZswDBy7cc/73/P/3f+Tdz2/grcMWHNYZnDM4KyROcFaw1mAtWAEjitGIECAGYgyIBiRmmNDGxhYuOIdxDnEWcQasYJzI7YX6vulb9f1q7R6b2H4EozEslk36x/Yh/Xqwh5OTvm9GVBHjEFE0KvLOkUkksVhnsNagbf/Q5PjCsb7B7r2bHlxDZ8VhreAErAjNluev60vcmpq9+cbo3CcLycDxeizXUJ9P+dir7yPWgDE84Np7Lt2o/bTjyQ2j6+6vICKECDEqISo+grXC4LoORoZ6ur65KC/u7J4dlCT5OY1JE8AEhIBgYth84Ur9u61PbOhRY2l5aEdwRjn4uOPALkdilNQrzaBgDS8/O2y/urb+7QGZ+fQ+2+oKYjAewStSn1o6NvjIQE+aKS2vtL2SeujpEHpKQndJ6C0LqVfSLL9vBWXfU4Ny4tLaN7cWJ/YHNbig0NFOn5spVsZKxqBRsQo+gjNwaUb54arHGeHPmYiRfGpvwAk4KxTX9BXHa7cPDxUXv3c+CtSab5X715NmijWCNYoVUPI4dSVgBawBI4JXcBGCyXUdHe7kzN/lLfu3VsdcAKZq+nTZGFKvWJM3AhzYXWD3gEEEQDhxMeOP6YgzEIxgNfdnwVpm2x1WdW6f8QpNlf5WgDQqacj18RG++DXlyIWMghUKFoJCGnKN05UMkEZoxAQR2eR8hLhcaAFrFC/gFEKE1K8Qh2z5QStCiPeyWS4ruhCVguh0K9PuFZ2cycGsgXa8C+ijrsoSDFgVXFQUKBkPUDOCMtAp51qpJw15Q8uzes7+B5gF7lL1+bStqCw1Pf3FBsAFgyqNQunL9nwtBwlKexmskeVeXIk0KI1Vj+bZ9sq1iRpjg43mfFY6bVCokpze6NKzaRpyw3qlnimvbSvw+rZkFfClhxNeGU2or3yGVxpppJItsLmree5qveuMERRUdXi482Bpbr7WCncn6Ejy9Tt303N+wtP0SjnhHsrXxmc5tH2+Wm0XPl7Mkqa88NkE6fI+P9PP86d+v3Oy2dvbIdagCiK515wVrEBioOQEQZmfmue9R6eXuorxw/ML646UjMcUJGJUEY2cvaU/7hgp7d1Yn74cF2sQY851eWsU8EGZnauRVCf4aNfk9c5CPPxLte+oI5DgcV1O8VkEBUWoevvb8FBx504WDoxXFw7dbBRHlzJXioJ0FgIjlVZjbHP9ny1rW99eul05emWp+/oKWEky5IPj/3JjMdAIkAEYYXnXGKk03HCltRHR4T29891TaUeYahZmrMTLl+90LTiJFCRQtoGK8fQkKf8BTT1rMNCIXKUAAAAASUVORK5CYII=");
// EXTERNAL MODULE: ./pages/_error.js
var _error = __webpack_require__("Y0NT");

// CONCATENATED MODULE: ./pages/_app.js



function _app_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _app_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      _app_ownKeys(Object(source), true).forEach(function (key) {
        _app_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      _app_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _app_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}








/* eslint-disable import/extensions */





/* eslint-enable import/extensions */



class _app_Wiki extends app_default.a {
  constructor(...args) {
    super(...args);

    _app_defineProperty(this, "state", {
      campaign: this.props.campaign,
      user: this.props.user
    });

    _app_defineProperty(this, "logOff", async event => {
      event.preventDefault();
      this.setUser(await external_isomorphic_unfetch_default()('/api/user/auth/logoff').then(r => r.json()));
      window.location = window.location;
    });

    _app_defineProperty(this, "setCampaign", (campaign, callback = noop["a" /* noop */]) => this.setState({
      campaign
    }, callback));

    _app_defineProperty(this, "setSize", (size, callback = noop["a" /* noop */]) => this.setState({
      size
    }, callback));

    _app_defineProperty(this, "setUser", (user, callback = noop["a" /* noop */]) => this.setState({
      user
    }, callback));

    _app_defineProperty(this, "updateCampaign", async (updates, callback = noop["a" /* noop */]) => {
      const {
        campaign
      } = this.state;
      const {
        subdomain
      } = this.props;

      if (!campaign) {
        return false;
      }

      const result = await external_isomorphic_unfetch_default()(`/api/campaign/${subdomain}`, {
        body: updates ? JSON.stringify(updates) : undefined,
        headers: {
          'Content-Type': 'application/json'
        },
        method: updates ? 'POST' : 'GET'
      });
      const json = await result.json();

      if (result.status === 200) {
        this.setCampaign(json, callback);
        return true;
      }

      this.setCampaign({}, callback);
      return false;
    });

    _app_defineProperty(this, "updateUser", async (updates, callback = noop["a" /* noop */]) => {
      const {
        user
      } = this.state;
      const result = await external_isomorphic_unfetch_default()(`/api/user/${user.username}`, {
        body: updates ? JSON.stringify(updates) : undefined,
        headers: {
          'Content-Type': 'application/json'
        },
        method: updates ? 'POST' : 'GET'
      });
      const json = await result.json();

      if (result.status === 200) {
        this.setUser(json, callback);
        return true;
      }

      this.setUser({}, callback);
      return false;
    });

    _app_defineProperty(this, "render", () => {
      const {
        Component,
        pageProps,
        rootUrl,
        router,
        subdomain
      } = this.props;
      const {
        campaign,
        size,
        user
      } = this.state;
      const theme = Object.assign(defaultTheme, campaign && campaign.theme || {});
      const context = {
        campaign,
        logOff: this.logOff,
        rootUrl,
        router,
        setCampaign: this.setCampaign,
        setSize: this.setSize,
        setUser: this.setUser,
        size,
        subdomain,
        theme,
        updateCampaign: this.updateCampaign,
        updateUser: this.updateUser,
        user
      };
      const campaignError = !campaign && !['/user', '/login', '/signup'].includes(router.pathname);
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Application["a" /* Application */].Provider, {
        value: context,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout_Layout_Layout, {
          className: !campaign ? 'no-campaign' : '',
          children: campaignError ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(_error["default"], {
            statusCode: 404,
            message: "This campaign does not exist."
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("style", {
          children: `
					:root {
						--color-background:		${theme.background};
						--color-borders:			 ${theme.primary};
						--color-normal-text:	 ${theme.normalText};
						--color-primary:			 ${theme.primary};
						--color-primary-text:	${theme.primaryText};
						--font-for-text:			 ${theme.fontForText};
						--font-for-titles:		 ${theme.fontForTitles};
						--font-size:					 ${theme.fontSize};
						color:								 ${theme.normalText};
						font-family:					 ${theme.fontForText};
						font-size:						 ${theme.fontSize};

						--image-book:					url(${book});
						--image-combo:				 url(${combo});
						--image-system:				url(${dice});
						--image-info:					url(${info});
					}
				`
        })]
      });
    });
  }

}

_app_defineProperty(_app_Wiki, "getInitialProps", async context => {
  const {
    Component,
    ctx: {
      req: request = {}
    }
  } = context;
  const props = await app_default.a.getInitialProps(context);
  const fetchParams = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const campaign = request ? request.campaign : await external_isomorphic_unfetch_default()('/api/campaign', fetchParams).then(r => r.json());
  const user = request ? request.user : await external_isomorphic_unfetch_default()('/api/user', fetchParams).then(r => r.json());
  /* eslint-disable prefer-destructuring */

  let host;

  if (false) {} else {
    host = request.get('host');
  }
  /* eslint-enable prefer-destructuring */


  const subdomain = host.split('.').shift();
  const rootUrl = host.slice(subdomain.length + 1);
  return _app_objectSpread(_app_objectSpread({}, props), {}, {
    campaign,
    rootUrl,
    subdomain,
    user
  });
});

/***/ }),

/***/ "1l36":
/***/ (function(module, exports) {



/***/ }),

/***/ "48dn":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function FavoriteOn (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"Marked as Favorite"),React.createElement("path",{"d":"M9.504 11.264q2.208-4.864 3.648-8.064 0.192-0.48 0.768-0.48t0.736 0.48l3.648 8.064q5.248 0.576 8.768 0.96 0.48 0.096 0.672 0.576t-0.192 0.864l-6.528 5.984q1.056 5.152 1.76 8.64 0.096 0.48-0.32 0.8t-0.864 0.064l-7.68-4.352q-4.608 2.592-7.68 4.352-0.48 0.288-0.896-0.064t-0.352-0.8l1.792-8.64q-3.904-3.584-6.528-5.984-0.384-0.352-0.192-0.832t0.672-0.608z","key":1})]);
}

FavoriteOn.defaultProps = {"version":"1.1","width":"28","height":"32","viewBox":"0 0 28 32"};

module.exports = FavoriteOn;

FavoriteOn.default = FavoriteOn;


/***/ }),

/***/ "4F+t":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "5dyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9CGT")


/***/ }),

/***/ "63Ad":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "6FHp":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Logout (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"logout"),React.createElement("path",{"d":"M29.184 7.552l8.832 8.512-8.832 8.448v-5.664h-13.216v-5.632h13.216v-5.664zM23.872 23.936l3.392 3.424q-4.992 4.672-10.816 4.672-6.944 0-11.68-4.576t-4.768-11.488q0-4.32 2.176-8t5.888-5.824 8-2.112q5.888 0 11.168 4.736l-3.36 3.392q-3.648-3.328-7.776-3.328-4.768 0-8.032 3.328t-3.296 8.128q0 4.48 3.392 7.712t7.904 3.232q4.192 0 7.808-3.296z","key":1})]);
}

Logout.defaultProps = {"version":"1.1","width":"38","height":"32","viewBox":"0 0 38 32"};

module.exports = Logout;

Logout.default = Logout;


/***/ }),

/***/ "6jsY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "8qGm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });
function debounce(func, wait, immediate) {
  let timeout;
  return (...args) => {
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(this, args);
  };
}

/***/ }),

/***/ "98Mn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5dyF");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qhEq");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}




const Link = _ref => {
  let {
    children,
    className = '',
    query = null,
    slug = '',
    to,
    type = 'article'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "query", "slug", "to", "type"]);

  const context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_Application__WEBPACK_IMPORTED_MODULE_3__[/* Application */ "a"]);
  const subdomain = props.subdomain || context.subdomain;
  const contents = children || type;
  const active = context.router.asPath === `/${type}/${slug}`;
  const queryString = !query ? '' : `${Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&')}`;

  if (active) {
    const title = typeof contents === 'string' ? contents : undefined;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
      className: "active link",
      title: title,
      children: contents
    });
  }

  if (subdomain && (!context.campaign || subdomain !== context.campaign.subdomain)) {
    let href = `//${subdomain}.${context.rootUrl}/${type}`;
    if (type !== 'campaign') href += `/${slug}`;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, props), {}, {
      href,
      subdomain
    })), {}, {
      children: contents
    }));
  }

  let as = `/${type}`;
  let href = `/${type}`;

  if (to) {
    as = to;
    href = to;
  } else if (type !== 'campaign') {
    if (slug) {
      as += `/${slug}`;
      href += `?slug=${slug}`;
    }

    if (queryString) {
      as += `?${queryString}`;
      href += `&${queryString}`;
    }
  } else if (queryString) {
    as += `?${queryString}`;
    href += `?${queryString}`;
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, _objectSpread(_objectSpread({}, {
    as,
    href
  }), {}, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, props), {}, {
      className,
      href: as
    })), {}, {
      children: contents
    }))
  }));
};

/***/ }),

/***/ "9CGT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("vdEC");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("a4i1");

var _router2 = __webpack_require__("bBV7");

var _useIntersection = __webpack_require__("hY8M");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "BCwt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "BukW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "DMmu":
/***/ (function(module, exports) {

module.exports = require("react-draggable");

/***/ }),

/***/ "DnaX":
/***/ (function(module, exports) {



/***/ }),

/***/ "E/TB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noop; });
const noop = () => {};

/***/ }),

/***/ "EAP2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationIcon; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("E/TB");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



function NavigationIcon(_ref) {
  let {
    title = 'Navigation',
    wrapperRef = _utilities_noop__WEBPACK_IMPORTED_MODULE_2__[/* noop */ "a"]
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title", "wrapperRef"]);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", _objectSpread(_objectSpread({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    ref: wrapperRef
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
      children: title
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      d: "M32 22.272v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.704 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424h-9.12v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.736 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424h-9.12v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216v5.728q0 0.704-0.512 1.216t-1.216 0.512h-5.696q-0.736 0-1.216-0.512t-0.512-1.216v-5.728q0-0.704 0.512-1.216t1.216-0.48h1.696v-3.424q0-0.928 0.672-1.632t1.632-0.672h9.12v-3.424h-1.696q-0.736 0-1.216-0.512t-0.512-1.184v-5.728q0-0.704 0.512-1.216t1.216-0.512h5.696q0.736 0 1.216 0.512t0.512 1.216v5.728q0 0.704-0.512 1.184t-1.216 0.512h-1.696v3.424h9.12q0.928 0 1.632 0.672t0.672 1.632v3.424h1.696q0.736 0 1.216 0.48t0.512 1.216z"
    })]
  }));
}

/***/ }),

/***/ "Eo3F":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Remove (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"remove"),React.createElement("path",{"d":"M23.168 23.616q0 0.704-0.48 1.216l-2.432 2.432q-0.512 0.48-1.216 0.48t-1.216-0.48l-5.248-5.28-5.248 5.28q-0.512 0.48-1.216 0.48t-1.216-0.48l-2.432-2.432q-0.512-0.512-0.512-1.216t0.512-1.216l5.248-5.248-5.248-5.248q-0.512-0.512-0.512-1.216t0.512-1.216l2.432-2.432q0.512-0.512 1.216-0.512t1.216 0.512l5.248 5.248 5.248-5.248q0.512-0.512 1.216-0.512t1.216 0.512l2.432 2.432q0.48 0.48 0.48 1.216t-0.48 1.216l-5.248 5.248 5.248 5.248q0.48 0.48 0.48 1.216z","key":1})]);
}

Remove.defaultProps = {"version":"1.1","width":"25","height":"32","viewBox":"0 0 25 32"};

module.exports = Remove;

Remove.default = Remove;


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GB4D":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Menu (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"menu"),React.createElement("path",{"d":"M27.424 24v2.272q0 0.48-0.32 0.8t-0.832 0.352h-25.12q-0.48 0-0.8-0.352t-0.352-0.8v-2.272q0-0.48 0.352-0.8t0.8-0.352h25.12q0.48 0 0.832 0.352t0.32 0.8zM27.424 14.848v2.304q0 0.448-0.32 0.8t-0.832 0.32h-25.12q-0.48 0-0.8-0.32t-0.352-0.8v-2.304q0-0.448 0.352-0.8t0.8-0.32h25.12q0.48 0 0.832 0.32t0.32 0.8zM27.424 5.728v2.272q0 0.448-0.32 0.8t-0.832 0.352h-25.12q-0.48 0-0.8-0.352t-0.352-0.8v-2.272q0-0.48 0.352-0.832t0.8-0.32h25.12q0.48 0 0.832 0.32t0.32 0.832z","key":1})]);
}

Menu.defaultProps = {"version":"1.1","width":"27","height":"32","viewBox":"0 0 27 32"};

module.exports = Menu;

Menu.default = Menu;


/***/ }),

/***/ "HouF":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Edit (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"edit"),React.createElement("path",{"d":"M30.912 5.728q0.768 0.736 0.768 1.76t-0.768 1.76l-5.92 5.92v15.008q0 0.672-0.48 1.152t-1.184 0.512h-21.632q-0.704 0-1.184-0.512t-0.512-1.152v-21.664q0-0.672 0.512-1.184t1.184-0.48h14.976l5.92-5.92q0.768-0.768 1.76-0.768t1.76 0.768zM14.176 21.28l10.464-10.496-3.584-3.584-10.496 10.464zM9.888 19.072l0.128 2.752 2.816 0.128zM21.696 28.512v-9.984l-5.344 5.12q-0.64 0.64-2.016 1.056t-2.56 0.448h-5.088v-5.088q0-1.312 0.352-2.624t0.992-1.952l5.28-5.344h-9.984v18.368h18.368zM25.856 9.632l2.144-2.144-3.648-3.648-2.144 2.144z","key":1})]);
}

Edit.defaultProps = {"version":"1.1","width":"32","height":"32","viewBox":"0 0 32 32"};

module.exports = Edit;

Edit.default = Edit;


/***/ }),

/***/ "I3+L":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Search (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"search"),React.createElement("path",{"d":"M16.352 1.984q4.864 0 8.256 3.424t3.392 8.224-3.392 8.256-8.256 3.424q-1.696 0-3.616-0.608l-3.904 3.904q-1.6 1.408-3.616 1.408-2.176 0-3.68-1.568t-1.536-3.68 1.472-3.648q1.696-1.728 2.528-2.56l1.28-1.28q-0.608-1.92-0.608-3.648 0-4.832 3.424-8.224t8.256-3.424zM16.352 21.984q3.456 0 5.888-2.432t2.432-5.92-2.432-5.888-5.888-2.432-5.888 2.432-2.464 5.888 2.464 5.92 5.888 2.432zM16.352 7.008q2.784 0 4.704 1.92t1.952 4.704-1.952 4.736-4.704 1.952-4.704-1.952-1.952-4.736 1.952-4.704 4.704-1.92zM16.352 18.624q2.080 0 3.552-1.44t1.472-3.552-1.472-3.52-3.552-1.472-3.52 1.472-1.472 3.52 1.472 3.552 3.52 1.44z","key":1})]);
}

Search.defaultProps = {"version":"1.1","width":"28","height":"32","viewBox":"0 0 28 32"};

module.exports = Search;

Search.default = Search;


/***/ }),

/***/ "JSB+":
/***/ (function(module, exports) {



/***/ }),

/***/ "Jxiz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "KP2y":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Read (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"read"),React.createElement("path",{"d":"M14.848 7.072q0.16-0.16 0.48-0.384t1.504-0.832 2.656-1.12 4.064-0.864 5.6-0.384v21.44q-3.040 0-5.632 0.384t-4.096 0.864-2.624 1.088-1.504 0.928l-0.448 0.32q-0.128-0.128-0.416-0.384t-1.472-0.832-2.656-1.12-4.064-0.864-5.664-0.384v-21.44q3.008 0 5.568 0.384t4.096 0.864 2.656 1.056 1.536 0.928zM4.16 7.072v14.4q5.504 0.448 8.928 2.272v-14.368q-3.52-1.856-8.928-2.304zM25.568 21.472v-14.4q-5.376 0.448-8.896 2.304v14.368q3.456-1.824 8.896-2.272z","key":1})]);
}

Read.defaultProps = {"version":"1.1","width":"30","height":"32","viewBox":"0 0 30 32"};

module.exports = Read;

Read.default = Read;


/***/ }),

/***/ "L87S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SearchBox_SearchBox_SearchBox; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "downshift"
var external_downshift_ = __webpack_require__("impR");
var external_downshift_default = /*#__PURE__*/__webpack_require__.n(external_downshift_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./contexts/Application.ts
var Application = __webpack_require__("qhEq");

// EXTERNAL MODULE: ./icons/loading.svg
var loading = __webpack_require__("fn7S");
var loading_default = /*#__PURE__*/__webpack_require__.n(loading);

// EXTERNAL MODULE: ./icons/search.svg
var search = __webpack_require__("I3+L");
var search_default = /*#__PURE__*/__webpack_require__.n(search);

// EXTERNAL MODULE: ./utilities/debounce.js
var debounce = __webpack_require__("8qGm");

// EXTERNAL MODULE: ./utilities/noop.js
var noop = __webpack_require__("E/TB");

// CONCATENATED MODULE: ./utilities/objectMatch.js
const objectMatch = (object = {}, match = {}) => {
  if (typeof object !== typeof match) return false;
  return Object.keys(match).every(key => typeof object[key] === 'object' || Array.isArray(object[key]) ? objectMatch(object[key], match[key]) : object[key] === match[key]);
};

/* harmony default export */ var utilities_objectMatch = (objectMatch);
// EXTERNAL MODULE: ./components/SearchBox/SearchBox.scss
var SearchBox_SearchBox = __webpack_require__("X+zM");

// CONCATENATED MODULE: ./components/SearchBox/SearchBox.js



function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}










class SearchBox_SearchBox_SearchBox extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      message: null,
      options: [],
      searchTerm: this.props.initialValue
    });

    _defineProperty(this, "downshift", /*#__PURE__*/external_react_default.a.createRef());

    _defineProperty(this, "inputBox", /*#__PURE__*/external_react_default.a.createRef());

    _defineProperty(this, "debouncedSearch", Object(debounce["a" /* default */])(async (searchTerm = '') => {
      const {
        limit,
        url
      } = this.props;

      if (!url || !searchTerm || searchTerm.length < 3) {
        this.setState({
          message: 'Enter at least 3 characters...',
          options: [],
          searching: false
        });
        return undefined;
      }

      const searchUrl = url.replace(':searchTerm', searchTerm);
      const queryString = `limit=${limit}`;
      const response = await fetch(`${searchUrl}?${queryString}`);
      const json = await response.json();

      if (response.status === 200 && json.length) {
        return this.setState({
          message: '',
          options: json,
          searching: false
        });
      }

      return this.setState({
        message: json.message || 'No results found...',
        options: [],
        searching: false
      });
    }, 500));

    _defineProperty(this, "componentDidMount", () => {
      document.addEventListener('keydown', this.handleHotKeys);
    });

    _defineProperty(this, "componentWillUnmount", () => {
      document.removeEventListener('keydown', this.handleHotKeys);
    });

    _defineProperty(this, "handleFocus", () => {
      if (this.props.selectOnFocus) {
        this.inputBox.current.select();
      }
    });

    _defineProperty(this, "handleHotKeys", event => {
      Object.entries(this.props.hotkeys).forEach(([name, keyCombo]) => {
        if (utilities_objectMatch(event, keyCombo)) {
          this.props.onHotKey(name, event, this);
        }
      });
    });

    _defineProperty(this, "handleKeyDown", event => {
      if (event.key === 'Escape') {
        this.setState({
          searching: false,
          searchTerm: this.props.initialValue
        });
        this.inputBox.current.blur();
        this.escapeKey = true; // eslint-disable-next-line no-param-reassign

        event.nativeEvent.preventDownshiftDefault = true;
      }
    });

    _defineProperty(this, "handleSearch", event => {
      const {
        value: searchTerm = ''
      } = event.target;

      if (this.escapeKey) {
        this.escapeKey = false;
        return;
      }

      this.setState({
        message: 'Searching...',
        searching: Boolean(searchTerm),
        searchTerm
      });

      if (searchTerm) {
        this.debouncedSearch(searchTerm);
      }
    });

    _defineProperty(this, "handleSelect", option => {
      const {
        clearOnSelect,
        onSelect,
        valueGetter
      } = this.props;
      onSelect(option);
      this.inputBox.current.blur();

      if (clearOnSelect) {
        this.setState({
          searching: false,
          searchTerm: ''
        });
      } else {
        this.setState({
          searching: false,
          searchTerm: valueGetter(option)
        });
      }
    });

    _defineProperty(this, "renderOption", (option, index, itemProps) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", _objectSpread(_objectSpread({
      className: "search-result"
    }, itemProps), {}, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
        className: "title",
        children: option.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "preview",
        children: [option.preview, "..."]
      })]
    }), index));

    _defineProperty(this, "render", () => {
      const _this$props = this.props,
            {
        className,
        placeholder
      } = _this$props,
            props = _objectWithoutProperties(_this$props, ["className", "placeholder"]);

      const {
        message,
        options,
        searching,
        searchTerm
      } = this.state;
      const {
        theme
      } = this.context;
      const renderOption = this.props.renderOption || this.renderOption;
      const OverlayIcon = searching ? loading_default.a : search_default.a;
      const inputHasFocus = this.inputBox.current && this.inputBox.current.matches(':focus');
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_downshift_default.a, _objectSpread(_objectSpread({
        id: "search-box",
        ref: this.downshift
      }, props), {}, {
        itemToString: article => article ? article.title : '',
        isOpen: Boolean(searchTerm) && inputHasFocus,
        onSelect: this.handleSelect,
        children: ({
          getInputProps,
          getItemProps,
          getMenuProps,
          isOpen
        }) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: `${className} search-box ${isOpen ? 'open' : 'closed'}`,
          style: {
            color: theme.normalText
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", _objectSpread(_objectSpread({}, getInputProps({
            onKeyDown: this.handleKeyDown
          })), {}, {
            className: "input",
            ref: this.inputBox,
            onChange: this.handleSearch,
            onFocus: this.handleFocus,
            placeholder: placeholder,
            value: searchTerm
          })), searching || !options.length ? isOpen && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "search-results message",
            children: message
          }) : isOpen && /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", _objectSpread(_objectSpread({}, getMenuProps()), {}, {
            className: "search-results list",
            children: options.map((option, index) => renderOption(option, index, getItemProps({
              index,
              item: option,
              key: option._id
            })))
          })), /*#__PURE__*/Object(jsx_runtime_["jsx"])(OverlayIcon, {
            className: "search icon"
          })]
        })
      }));
    });
  }

}

_defineProperty(SearchBox_SearchBox_SearchBox, "contextType", Application["a" /* Application */]);

_defineProperty(SearchBox_SearchBox_SearchBox, "displayName", 'SearchBox');

_defineProperty(SearchBox_SearchBox_SearchBox, "defaultProps", {
  className: '',
  clearOnSelect: false,
  hotkeys: {},
  initialValue: '',
  limit: 10,
  onHotKey: noop["a" /* noop */],
  onSelect: noop["a" /* noop */],
  placeholder: 'Search...',
  renderOption: null,
  selectOnFocus: true,
  url: '',
  valueGetter: option => option
});

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Plc0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "PsvV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "RxAv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("pksY")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "TUqa":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Fist (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"\r\n    M474.835,206.531c-4.146-6.428-27.363-18.243-35.655-28.192c-8.291-9.951,4.146-63.847,0-87.066\r\n    c-4.146-23.216-4.489-63.091-11.609-75.455c-7.875-13.681-22.111-25.15-55,0.275c-4.729,3.658-17.967,5.529-34.549,0.555\r\n    c-16.585-4.975-37.313-16.748-50.303-9.396c-18.255,10.333-16.862,31.784-21.008,35.93c-4.146,4.147-24.874,22.387-36.483,24.046\r\n    c-11.61,1.659-37.037-8.013-45.329,5.529c-11.53,18.829-8.035,37.876-14.925,43.117c-6.911,5.254-8.292,7.463-27.64,11.057\r\n    c-20.052,3.721-28.133,23.727-21.559,48.919c6.634,25.427-0.552,40.91,6.634,63.572c7.186,22.662,16.031,4.975,22.11,33.168\r\n    c6.08,28.191,43.671,59.148,43.671,59.148l2.763,18.241l-15.342,23.468l15.342,45.078l-17.688,152.569\r\n    c75.731,39.8,179.655,34.271,248.477-8.847c-1.658-4.145-29.021-200.663-29.021-200.663l7.462-28.189l-2.486-10.779\r\n    c0,0,57.006-35.448,62.188-41.458c5.182-6.013,14.718-23.633,15.754-29.023C481.675,246.746,478.98,212.955,474.835,206.531\r\n    M275.555,50.369c-0.137-5.943,6.866-20.522,8.828-28.4c1.958-7.877,15.081-10.296,26.275-6.564\r\n    c11.194,3.731,23.683,10.503,35.655,11.609c13.475,1.243,34.509-1.424,42.011-8.293c8.154-7.461,14.995-9.534,25.358-2.073\r\n    c10.365,7.464,12.646,55.139,12.231,66.75c-0.414,11.608-9.536,43.114-12.022,55.139c-1.853,8.963-7.159,11.941-9.572,18.025\r\n    c-0.121-0.406-0.577-0.702-0.972-0.339c-4.242,3.915-10.104,4.299-15.132,6.695c-1.486-5.044-19.892-1.463-22.002-1.989\r\n    c-2.21-0.551-14.925-14.374-14.925-14.374l0.551-74.627c0,0,9.397-16.03,9.397-21.005c0-4.974-4.421-8.844-4.421-8.844\r\n    l-10.049,14.418l-5.862,1.607c0,0,3.155,3.836,3.084,6.644c-0.461,17.728-2.176,82.739-2.652,85.122\r\n    c-0.551,2.763,2.212,14.925-23.217,19.9c-25.426,4.975-25.289-13.406-25.289-13.406s-7.877-63.98-7.877-67.3\r\n    c0-3.316-9.398,0-9.398,0V50.369z M402.955,167.391c-4.812,1.389-9.595,2.717-14.593,3.036c-0.025-1.061-0.036-1.44-0.047-2.36\r\n    c5.272-0.385,8.467-1.508,12.955-4.493c0.034-0.023,1.819,0.01,1.84,0.668C403.155,165.59,402.977,166.196,402.955,167.391\r\n    M402.613,160.949c-4.227,2.813-9.328,4.42-14.315,4.793c-0.001-0.671,0.45-0.792,0.464-1.338\r\n    c5.19-2.617,10.034-1.151,14.477-5.191C402.807,160.476,402.97,160.711,402.613,160.949 M388.408,172.311\r\n    c4.975-0.316,9.896-1.585,14.69-2.926c-0.033,0.917-0.038,1.115-0.096,1.957c-2.303,0.901-4.712,2.311-7.134,2.852\r\n    c-2.511,0.564-5.025-0.025-7.38,0.919C388.443,173.604,388.443,173.687,388.408,172.311 M402.08,183.078\r\n    c-1.475,0.351-3.037,1.419-4.558,1.645c-2.922,0.436-5.803,1.095-8.725,1.479c-0.028-1.279-0.061-2.571-0.097-3.872\r\n    c4.528-0.739,9.121-1.157,13.549-2.229C402.138,181.605,402.038,181.569,402.08,183.078 M402.69,189.732\r\n    c-4.658,1.035-9.083,1.552-13.799,2.373c0.003-1.919-0.008-1.749-0.052-3.934c2.959-0.417,5.986-1.048,8.945-1.437\r\n    c1.486-0.195,2.949-0.485,4.401-0.823C402.875,187.116,403.441,187.887,402.69,189.732 M388.854,197.788\r\n    c-0.135-1.141,0.018-1.009,0.035-2.752c4.828-0.844,9.657-1.651,14.426-2.711c0.186,0.607,0.387,1.136,0.604,1.602\r\n    c-1.395,0.766-2.744,1.632-4.103,2.555C396.125,197.52,392.533,196.702,388.854,197.788 M395.683,198.966\r\n    c-2.317,1.221-4.716,2.2-7.237,2.979c0.059-0.283,0.113-0.604,0.158-0.978C390.952,200.263,393.316,199.614,395.683,198.966\r\n    M402.423,177.75c-4.468,1.135-9.21,1.333-13.795,2.07c-0.034-1.202-0.036-1.188-0.07-2.362c2.985-1.305,6.338-1.087,9.49-1.902\r\n    c1.652-0.427,2.869-0.334,4.461-0.933C402.354,176.496,402.57,176.096,402.423,177.75 M197.06,245.5\r\n    c-5.418-4.063-2.292,1.656-14.925-16.578c0,0-43.117-42.566-50.304-55.834c-7.187-13.268-3.318-23.767,4.422-30.402\r\n    c7.738-6.633,28.192-8.848,29.85-9.399c1.659-0.55,13.336-14.367,17.172-20.452c3.835-6.081,3.833-29.849,9.362-35.377\r\n    c5.529-5.53,29.254,2.628,37.591,0c15.069-4.753,32.229-21.733,38.862-21.733s-5.142,7.363-5.697,18.417\r\n    c-0.55,11.054-0.55,35.929,2.767,46.432c3.315,10.504,20.452,41.476,18.794,50.037c-1.658,8.561-23.872,27.317-29.851,22.933\r\n    c-8.292-6.084-18.794,0.553-22.111-2.764c-3.317-3.316-2.213-21.005-4.423-29.85c-2.211-8.844-11.057-38.147-16.583-47.542\r\n    c-5.527-9.396-10.502-16.028-9.951,10.503c0.553,26.534-7.738,14.375-11.607,8.847c-3.869-5.528-21.575,3.349-15.478,6.634\r\n    l14.372,7.739l49.197,71.864c0,0,4.698,6.904-1.657,11.05c-3.527,2.301-13.819,9.399-16.583,13.269\r\n    C217.512,247.163,201.482,248.818,197.06,245.5 M403.94,520.375l-23.632,17.413c0,0-21.145-33.166-21.145-34.41\r\n    c0-1.246,4.976-25.705,4.562-29.438c-0.415-3.73-14.374-60.667-14.374-60.667l-6.355,19.209c0,0,4.56,43.117,3.73,46.019\r\n    c-0.829,2.902-5.391,89.137-5.391,89.137s-83.745,11.195-121.889-3.73c-6.031-2.361-5.805-9.949-5.805-9.949l13.268-131.84\r\n    l29.85-5.806l0.831,137.646c0,0,16.308,9.119,16.308,8.29c0-0.828-0.555-170.811-0.555-170.811l20.73-5.804l-14.096-10.78h38.971\r\n    l-32.338-10.782l75.454-6.631c0,0,14.72-15.235,16.584-14.096c1.866,1.142,0,81.26,0,81.26s9.095,1.477,9.095-3.498\r\n    c0-4.554-2.386-65.088-3.152-72.096c0.184-2.684,4.485-2.791,6.495-1.106L403.94,520.375z M470.552,254.208\r\n    c-2.37,4.267-10.363,10.161-22.666,16.168c-11.779,5.753-16.997,8.292-14.925,2.902c2.072-5.388,3.317-38.141,0-46.021\r\n    c-3.317-7.875-5.391-9.949-5.391,2.075c0,12.023,0.209,39.593-3.108,44.569c-3.315,4.974-9.743,2.692-20.108,4.351\r\n    c-10.363,1.66-27.362-1.245-40.628,0c-13.269,1.243-41.046,3.542-45.606,0.528c-4.56-3.017,0.14-4.949,3.042-4.949\r\n    s47.878-0.113,52.471-1.799c7.921-2.901,6.261-26.118,4.604-33.995c-1.658-7.877-10.365-17.206-15.753-17.206\r\n    c-5.391,0-20.317,0.206-26.12,0.206c-5.805,0-2.902,2.074-3.317,3.731c-0.414,1.659,11.143-0.653,21.145-0.414\r\n    c9.676,0.232,12.852,0.414,16.998,10.78c4.146,10.363,4.891,26.119,2.444,29.435c-2.444,3.318-50.952,5.804-58.829,4.147\r\n    c-7.877-1.661-7.877-36.485-0.829-42.705c7.048-6.218,15.755-14.51,30.681-16.584c13.573-1.885,37.085-3.083,42.48-5.78\r\n    c3.666-0.985,7.165-2.297,10.495-4.201c1.026-0.585,2.005-1.215,2.974-1.848c1.644-0.466,3.282-0.942,4.911-1.455\r\n    c2.857,2.317,6.821-1.017,9.619-0.395c3.731,0.83,1.657-15.34,1.657-21.559c0-6.218,4.147-14.627,5.805-18.507\r\n    c1.66-3.88,4.672,12.758,6.91,19.891c3.732,11.882,16.999,20.589,27.364,26.807c10.364,6.218,13.819,14.098,13.819,24.46\r\n    C470.689,234.894,472.921,249.94,470.552,254.208\r\n  "}));
}

Fist.defaultProps = {"version":"1.1","x":"0px","y":"0px","width":"600px","height":"600px","viewBox":"0 0 600 600"};

module.exports = Fist;

Fist.default = Fist;


/***/ }),

/***/ "USCx":
/***/ (function(module, exports) {



/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "VOyh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "VTEe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ pluck; });

// CONCATENATED MODULE: ./utilities/flatten.js
function flatten(array, depth = Infinity) {
  if (!array || !Array.isArray(array)) {
    throw new TypeError(`cannot flatten non-Array value ${JSON.stringify(array)}`);
  }

  return array.reduce((all, next) => {
    if (depth > 1 && next && Array.isArray(next)) {
      return all.concat(flatten(next, depth - 1));
    }

    return all.concat(next);
  }, []);
}
// CONCATENATED MODULE: ./utilities/pluck.js

function pluck(object, ...keys) {
  if (!object || typeof object !== 'object') return {};
  return flatten(keys).reduce((out, key) => {
    // eslint-disable-next-line no-prototype-builtins
    if (object.hasOwnProperty(key)) {
      out[key] = object[key]; // eslint-disable-line no-param-reassign
    }

    return out;
  }, {});
}

/***/ }),

/***/ "Wecs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("PsvV"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "X+zM":
/***/ (function(module, exports) {



/***/ }),

/***/ "Y0NT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_Application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qhEq");
/* harmony import */ var _error_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qiT/");
/* harmony import */ var _error_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_error_scss__WEBPACK_IMPORTED_MODULE_3__);





function Error() {
  const {
    router
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_Application__WEBPACK_IMPORTED_MODULE_2__[/* Application */ "a"]);
  const {
    query
  } = router;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "error page",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
      className: "status-code",
      children: query.statusCode || 500
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "message",
      children: "An error occurred."
    })]
  });
}

/***/ }),

/***/ "a4i1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("Plc0");

var _routeLoader = __webpack_require__("RxAv");

var _denormalizePagePath = __webpack_require__("yExG");

var _normalizeLocalePath = __webpack_require__("1GNI");

var _mitt = _interopRequireDefault(__webpack_require__("Jxiz"));

var _utils = __webpack_require__("z4BS");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("4F+t"));

var _isDynamic = __webpack_require__("BCwt");

var _parseRelativeUrl = __webpack_require__("eU9b");

var _querystring = __webpack_require__("PsvV");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("lxQX"));

var _routeMatcher = __webpack_require__("VOyh");

var _routeRegex = __webpack_require__("BukW");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "bBV7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("a4i1"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("/3ze"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "e+GP":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "eU9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("z4BS");

var _querystring = __webpack_require__("PsvV");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fn7S":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Loading (props) {
    return React.createElement("svg",props,[React.createElement("rect",{"x":"0","y":"10","width":"4","height":"10","fill":"#333","opacity":"0.2","key":0},[React.createElement("animate",{"attributeName":"opacity","attributeType":"XML","values":"0.2; 1; .2","begin":"0s","dur":"0.6s","repeatCount":"indefinite","key":0}),React.createElement("animate",{"attributeName":"height","attributeType":"XML","values":"10; 20; 10","begin":"0s","dur":"0.6s","repeatCount":"indefinite","key":1}),React.createElement("animate",{"attributeName":"y","attributeType":"XML","values":"10; 5; 10","begin":"0s","dur":"0.6s","repeatCount":"indefinite","key":2})]),React.createElement("rect",{"x":"8","y":"10","width":"4","height":"10","fill":"#333","opacity":"0.2","key":1},[React.createElement("animate",{"attributeName":"opacity","attributeType":"XML","values":"0.2; 1; .2","begin":"0.15s","dur":"0.6s","repeatCount":"indefinite","key":0}),React.createElement("animate",{"attributeName":"height","attributeType":"XML","values":"10; 20; 10","begin":"0.15s","dur":"0.6s","repeatCount":"indefinite","key":1}),React.createElement("animate",{"attributeName":"y","attributeType":"XML","values":"10; 5; 10","begin":"0.15s","dur":"0.6s","repeatCount":"indefinite","key":2})]),React.createElement("rect",{"x":"16","y":"10","width":"4","height":"10","fill":"#333","opacity":"0.2","key":2},[React.createElement("animate",{"attributeName":"opacity","attributeType":"XML","values":"0.2; 1; .2","begin":"0.3s","dur":"0.6s","repeatCount":"indefinite","key":0}),React.createElement("animate",{"attributeName":"height","attributeType":"XML","values":"10; 20; 10","begin":"0.3s","dur":"0.6s","repeatCount":"indefinite","key":1}),React.createElement("animate",{"attributeName":"y","attributeType":"XML","values":"10; 5; 10","begin":"0.3s","dur":"0.6s","repeatCount":"indefinite","key":2})])]);
}

Loading.defaultProps = {"version":"1.1","x":"0px","y":"0px","width":"24px","height":"30px","viewBox":"0 0 24 30","style":{"enableBackground":"new 0 0 50 50"},"xmlSpace":"preserve"};

module.exports = Loading;

Loading.default = Loading;


/***/ }),

/***/ "gyVo":
/***/ (function(module, exports) {



/***/ }),

/***/ "hY8M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("pksY"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "impR":
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "lxQX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "mb5E":
/***/ (function(module, exports) {



/***/ }),

/***/ "o1Lx":
/***/ (function(module, exports) {

module.exports = require("sortablejs");

/***/ }),

/***/ "o42t":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6jsY")


/***/ }),

/***/ "pksY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "pqbZ":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Campaign (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"Campaign"),React.createElement("path",{"d":"M967.090176 396.722176c7.395328-33.284096-49.926144-81.360896-72.116224-3.69664-16.64 53.622784 5.548032 79.511552-1.847296 85.057536-7.397376 5.545984-279.218176 334.690304-323.59424 386.465792-64.720896-20.338688-323.596288-94.304256-403.10784-120.193024-81.360896-48.0768-51.777536-173.815808 5.545984-157.17376 38.83008 11.094016 290.310144 85.057536 334.688256 98.004992 42.530816 12.941312 59.172864 22.19008 90.607616-16.644096 44.376064-53.624832 323.596288-373.522432 356.880384-408.653824 24.035328-27.736064 33.282048-66.568192-18.49344-75.814912-53.624832-11.094016-358.72768-83.208192-403.105792-90.605568-42.528768-7.395328-53.624832-18.489344-96.1536 33.284096C414.205952 154.488832 133.138432 468.8384 96.157696 507.670528 55.476224 550.199296-3.694592 751.753216 140.535808 807.225344c144.2304 49.926144 321.746944 99.852288 403.10784 123.891712 36.984832 11.094016 61.022208 16.64 83.212288-20.342784 22.188032-36.982784 310.65088-371.67104 332.84096-401.256448 20.340736-27.736064 9.244672-3.698688 3.698688-53.624832-5.552128-49.926144-1.851392-33.282048 3.694592-59.170816z m-543.639552-125.741056c16.642048-20.340736 18.489344-24.037376 24.037376-29.585408 16.642048-16.642048 36.982784-12.94336 55.474176-9.24672 12.94336 1.849344 218.195968 53.624832 231.13728 55.474176 12.945408 3.698688 51.777536 9.244672 31.4368 33.284096-22.188032 25.888768-20.340736 24.037376-27.736064 31.434752-7.39328 7.395328-24.037376 12.94336-51.77344 5.545984-24.039424-7.395328-221.894656-53.624832-238.538752-55.472128-16.64-1.847296-40.679424-11.091968-24.037376-31.434752z","key":1})]);
}

Campaign.defaultProps = {"version":"1.1","viewBox":"0 0 1024 1024","height":"512"};

module.exports = Campaign;

Campaign.default = Campaign;


/***/ }),

/***/ "qC9r":
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "qK8e":
/***/ (function(module, exports) {



/***/ }),

/***/ "qhEq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Application; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CAMPAIGN_DEFAULTS = {
  createdAt: null,
  createdBy: {},
  editors: [],
  lastUpdatedAt: null,
  lastUpdatedBy: {},
  navigation: [],
  owners: [],
  secret: false,
  subdomain: '',
  theme: {
    background: '#fff',
    fontFamily: 'Ubuntu',
    normalText: '#333',
    primary: '#42afe3',
    primaryText: '#fff'
  },
  title: 'New Campaign',
  version: 0
};
const USER_DEFAULTS = {
  anonymous: true
};
const Application = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  campaign: CAMPAIGN_DEFAULTS,
  router: {},
  rootUrl: '',
  subdomain: '',
  user: USER_DEFAULTS
});

/***/ }),

/***/ "qiT/":
/***/ (function(module, exports) {



/***/ }),

/***/ "tP09":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Sheet (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"sheet"),React.createElement("path",{"d":"M22.4 1.6q1.344 0 2.272 0.928t0.928 2.272v22.4q0 1.28-0.928 2.24t-2.272 0.96h-19.2q-1.28 0-2.24-0.96t-0.96-2.24v-22.4q0-1.344 0.96-2.272t2.24-0.928h19.2zM22.4 27.2v-22.4h-19.2v22.4h19.2zM14.4 19.2v1.6h-8v-1.6h8zM19.2 12.8v1.6h-6.4v-1.6h6.4zM12.8 11.2v-3.2h6.4v3.2h-6.4zM11.2 8v6.4h-4.8v-6.4h4.8zM9.6 16v1.6h-3.2v-1.6h3.2zM11.2 17.6v-1.6h8v1.6h-8zM19.2 22.4v1.6h-12.8v-1.6h12.8zM16 20.8v-1.6h3.2v1.6h-3.2z","key":1})]);
}

Sheet.defaultProps = {"version":"1.1","width":"26","height":"32","viewBox":"0 0 26 32"};

module.exports = Sheet;

Sheet.default = Sheet;


/***/ }),

/***/ "vdEC":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "wJYp":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y4cp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dialog; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("DMmu");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("E/TB");
/* harmony import */ var _Dialog_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("JSB+");
/* harmony import */ var _Dialog_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Dialog_scss__WEBPACK_IMPORTED_MODULE_4__);







function Dialog({
  buttons = null,
  children = [],
  className = '',
  modal = false,
  onCancel = _utilities_noop__WEBPACK_IMPORTED_MODULE_3__[/* noop */ "a"],
  onKeyDown = _utilities_noop__WEBPACK_IMPORTED_MODULE_3__[/* noop */ "a"],
  onOk = _utilities_noop__WEBPACK_IMPORTED_MODULE_3__[/* noop */ "a"],
  showCancel = true,
  title = 'Dialog'
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: `dialog-wrapper ${modal ? 'modal' : ''}`,
    onKeyDown: onKeyDown,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_draggable__WEBPACK_IMPORTED_MODULE_2___default.a, {
      handle: ".dialog > .title",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: `dialog ${className}`,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "title",
          children: title
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "body",
          children: children
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "buttons",
          children: buttons || /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              className: "ok button safe",
              onClick: onOk,
              children: "Ok"
            }), showCancel && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              className: "cancel button link",
              onClick: onCancel,
              children: "Cancel"
            })]
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ "yExG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "z4BS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("Wecs");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "zwE9":
/***/ (function(module, exports) {



/***/ })

/******/ });