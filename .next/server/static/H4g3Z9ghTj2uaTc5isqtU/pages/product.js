module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProductById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeFromCart; });
/* harmony import */ var _moltin_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _moltin_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_moltin_sdk__WEBPACK_IMPORTED_MODULE_0__);

var Moltin = Object(_moltin_sdk__WEBPACK_IMPORTED_MODULE_0__["gateway"])({
  client_id: 'j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4'
});
var getProducts = function getProducts() {
  return Moltin.Products.With('main_image').All();
};
var getProductById = function getProductById(id) {
  return Moltin.Products.With('main_image').Get(id);
};
var addToCart = function addToCart(productId, quantity) {
  return Moltin.Cart().AddProduct(productId, quantity);
};
var getCartItems = function getCartItems(id) {
  return Moltin.Cart(id).Items();
};
var removeFromCart = function removeFromCart(itemId, cartId) {
  return Moltin.Cart(cartId).RemoveItem(itemId);
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@moltin/sdk");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(5);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(6);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// CONCATENATED MODULE: ./components/Header.js







router_default.a.onRouteChangeStart = function (url) {
  return external_nprogress_default.a.start();
};

router_default.a.onRouteChangeComplete = function (url) {
  return external_nprogress_default.a.done();
};

router_default.a.onRouteChangeError = function (url) {
  return external_nprogress_default.a.done();
};

/* harmony default export */ var Header = (function () {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css"
  })), external_react_default.a.createElement(external_semantic_ui_react_["Menu"], {
    inverted: true,
    fixed: "top",
    size: "huge"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Container"], {
    text: true
  }, external_react_default.a.createElement(link_default.a, {
    href: "/",
    prefetch: true,
    passHref: true
  }, external_react_default.a.createElement(external_semantic_ui_react_["Menu"].Item, {
    as: "a",
    header: true
  }, external_react_default.a.createElement(external_semantic_ui_react_["Image"], {
    size: "mini",
    src: "/static/moltin.jpg",
    style: {
      marginRight: '1.5em'
    }
  }), "Store")), external_react_default.a.createElement(link_default.a, {
    href: "/cart",
    prefetch: true,
    passHref: true
  }, external_react_default.a.createElement(external_semantic_ui_react_["Menu"].Item, {
    position: "right",
    as: "a",
    header: true
  }, "Cart")))));
});
// CONCATENATED MODULE: ./components/Layout.js




/* harmony default export */ var Layout = __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external_react_default.a.createElement("meta", {
    charSet: "utf-8"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
  }), external_react_default.a.createElement("title", null, title)), external_react_default.a.createElement(Header, null), external_react_default.a.createElement(external_semantic_ui_react_["Container"], {
    text: true,
    style: {
      paddingTop: '7em'
    }
  }, children));
});

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(9);

// EXTERNAL MODULE: ./lib/moltin.js
var moltin = __webpack_require__(7);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1);

// CONCATENATED MODULE: ./components/AddToCart.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var AddToCart_AddToCart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddToCart, _React$Component);

  function AddToCart() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddToCart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddToCart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      loading: false,
      quantity: 1
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleChange", function (_ref) {
      var value = _ref.target.value;

      _this.setState({
        quantity: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleSubmit",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var productId, quantity;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              productId = _this.props.productId;
              quantity = _this.state.quantity;

              _this.setState({
                loading: true
              });

              _context.next = 5;
              return Object(moltin["a" /* addToCart */])(productId, quantity);

            case 5:
              _this.setState({
                loading: false,
                quantity: 1
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    return _this;
  }

  _createClass(AddToCart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          loading = _this$state.loading,
          quantity = _this$state.quantity;
      return external_react_default.a.createElement(external_semantic_ui_react_["Input"], {
        type: "number",
        placeholder: "Quantity",
        value: quantity,
        onChange: function onChange(e) {
          return _this2._handleChange(e);
        },
        action: {
          color: 'orange',
          content: 'Add to Cart',
          icon: 'plus cart',
          onClick: this._handleSubmit,
          loading: loading,
          disabled: loading
        }
      });
    }
  }]);

  return AddToCart;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./components/ProductSummary.js



/* harmony default export */ var ProductSummary = (function (_ref) {
  var id = _ref.id,
      image = _ref.image,
      name = _ref.name,
      meta = _ref.meta,
      sku = _ref.sku;
  return external_react_default.a.createElement(external_semantic_ui_react_["Item"].Group, null, external_react_default.a.createElement(external_semantic_ui_react_["Item"], null, external_react_default.a.createElement(external_semantic_ui_react_["Item"].Image, {
    size: "medium",
    src: image
  }), external_react_default.a.createElement(external_semantic_ui_react_["Item"].Content, null, external_react_default.a.createElement(external_semantic_ui_react_["Item"].Header, null, name), external_react_default.a.createElement(external_semantic_ui_react_["Item"].Description, null, external_react_default.a.createElement("p", null, meta.display_price.with_tax.formatted), external_react_default.a.createElement(external_semantic_ui_react_["Label"], null, "SKU: ", sku)), external_react_default.a.createElement(external_semantic_ui_react_["Item"].Extra, null, external_react_default.a.createElement(AddToCart_AddToCart, {
    productId: id
  })))));
});
// CONCATENATED MODULE: ./components/ProductAttributes.js


/* harmony default export */ var ProductAttributes = (function (_ref) {
  var description = _ref.description,
      material = _ref.material,
      max_watt = _ref.max_watt,
      bulb_qty = _ref.bulb_qty,
      finish = _ref.finish,
      bulb = _ref.bulb;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    as: "h3"
  }, "About this product"), external_react_default.a.createElement("p", null, description), external_react_default.a.createElement(external_semantic_ui_react_["Divider"], null), external_react_default.a.createElement(external_semantic_ui_react_["Table"], {
    celled: true
  }, external_react_default.a.createElement(external_semantic_ui_react_["Table"].Header, null, external_react_default.a.createElement(external_semantic_ui_react_["Table"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Table"].HeaderCell, {
    colSpan: "2"
  }, "Attributes"))), external_react_default.a.createElement(external_semantic_ui_react_["Table"].Body, null, external_react_default.a.createElement(external_semantic_ui_react_["Table"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Table"].Cell, null, "Material"), external_react_default.a.createElement(external_semantic_ui_react_["Table"].Cell, null, material)), external_react_default.a.createElement(external_semantic_ui_react_["Table"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Table"].Cell, null, "Max watt"), external_react_default.a.createElement(external_semantic_ui_react_["Table"].Cell, null, max_watt)), external_react_default.a.createElement(external_semantic_ui_react_["Table"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Table"].Cell, null, "Bulb qty"), external_react_default.a.createElement(external_semantic_ui_react_["Table"].Cell, null, bulb_qty)), external_react_default.a.createElement(external_semantic_ui_react_["Table"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Table"].Cell, null, "Finish"), external_react_default.a.createElement(external_semantic_ui_react_["Table"].Cell, null, finish)), external_react_default.a.createElement(external_semantic_ui_react_["Table"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Table"].Cell, null, "Fitting"), external_react_default.a.createElement(external_semantic_ui_react_["Table"].Cell, null, bulb)))));
});
// CONCATENATED MODULE: ./pages/product.js



function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { product_defineProperty(target, key, source[key]); }); } return target; }

function product_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function product_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function product_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { product_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { product_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var product_ProductPage = function ProductPage(_ref) {
  var product = _ref.product;
  return external_react_default.a.createElement(Layout["a" /* default */], {
    title: product.name
  }, external_react_default.a.createElement(ProductSummary, product), external_react_default.a.createElement(ProductAttributes, product));
};

product_ProductPage.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = product_asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(_ref2) {
    var id, _ref4, data, main_images, imageId;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref2.query.id;
            _context.next = 3;
            return Object(moltin["c" /* getProductById */])(id);

          case 3:
            _ref4 = _context.sent;
            data = _ref4.data;
            main_images = _ref4.included.main_images;
            imageId = data.relationships.main_image ? data.relationships.main_image.data.id : false;
            return _context.abrupt("return", {
              product: _objectSpread({}, data, {
                image: imageId ? main_images.find(function (img) {
                  return img.id === imageId;
                }).link.href : '/static/moltin.jpg'
              })
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ var pages_product = __webpack_exports__["default"] = (product_ProductPage);

/***/ })
/******/ ]);