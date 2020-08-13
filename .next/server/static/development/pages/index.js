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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/CarouselOffers.js":
/*!**************************************!*\
  !*** ./components/CarouselOffers.js ***!
  \**************************************/
/*! exports provided: default, Title, PTag, CarouselWrapp, Present, BtnIntro, Card, CardImg, NochesCard, TitleCard, PriceCard, DiscountCard, CardInfoWrap, CardTop, CardBottom, Be, LeftArrow, RightArrow, ButtonContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PTag", function() { return PTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselWrapp", function() { return CarouselWrapp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Present", function() { return Present; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnIntro", function() { return BtnIntro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImg", function() { return CardImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NochesCard", function() { return NochesCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCard", function() { return TitleCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceCard", function() { return PriceCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountCard", function() { return DiscountCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardInfoWrap", function() { return CardInfoWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTop", function() { return CardTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBottom", function() { return CardBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Be", function() { return Be; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftArrow", function() { return LeftArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightArrow", function() { return RightArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonContainer", function() { return ButtonContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_slugify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/slugify */ "./lib/slugify.js");
var _jsxFileName = "C:\\next\\lariojaturismo\\components\\CarouselOffers.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {
      max: 4000,
      min: 3000
    },
    items: 5
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 601
    },
    items: 3
  },
  mobile: {
    breakpoint: {
      max: 600,
      min: 0
    },
    items: 1
  }
};

const CarouselOffers = ({
  offers
}) => {
  const ButtonGroup = (_ref) => {
    let {
      next,
      previous,
      goToSlide
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["next", "previous", "goToSlide"]);

    const {
      carouselState: {
        currentSlide
      }
    } = rest;
    return __jsx(ButtonContainer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, __jsx(LeftArrow, {
      className: currentSlide === 0 ? 'disable' : '',
      onClick: () => previous(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, " ", __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__["RiArrowLeftSLine"], {
      size: "30px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 101
      }
    }), " "), __jsx(RightArrow, {
      onClick: () => next(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__["RiArrowRightSLine"], {
      size: "30px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 49
      }
    }), " "));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(CarouselWrapp, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(Present, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(Title, {
    weight: "700",
    color: "#393939",
    size: "1.7rem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, " Volv\xE9 a so\xF1ar con tu pr\xF3ximo viaje."), __jsx(PTag, {
    line: "2",
    weight: "600",
    color: "#393939",
    size: "1rem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Seleccionamos estas ofertas para vos, algunas con reserva flexible y otras con precios sorprendentes. Elegi la que va mejor con tus planes y compra tu pr\xF3ximo paquete. "), __jsx(BtnIntro, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Ver mas ofertas ")), offers.length > 0 ? __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    responsive: responsive,
    ssr: true,
    infinite: true,
    arrows: false,
    customButtonGroup: __jsx(ButtonGroup, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 34
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, offers.map((item, index) => {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: `/[categoria]/[id]`,
      as: `/${Object(_lib_slugify__WEBPACK_IMPORTED_MODULE_6__["slugify"])(item.tipo_producto)}/${item.id_producto}`,
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, __jsx(Card, {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 23
      }
    }, console.log(item, 'item'), __jsx(CardImg, {
      image: `https://www.lrseguridad.com.ar/turismo/1.0/${item.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 27
      }
    }, __jsx(NochesCard, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 27
      }
    }, " ", item.cantidad_noche, " NOCHES")), __jsx(CardInfoWrap, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 27
      }
    }, __jsx(CardTop, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 27
      }
    }, __jsx(TitleCard, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 31
      }
    }, "Paquetes a ", item.localidad)), __jsx(CardBottom, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 27
      }
    }, __jsx(PTag, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 31
      }
    }, " Precio final por persona"), __jsx(PriceCard, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 31
      }
    }, " $ ", __jsx(Be, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 45
      }
    }, item.precio), "Ars"), __jsx(DiscountCard, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 31
      }
    }, " ", item.dct, " ")))));
  })) : __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'center'
    },
    type: "TailSpin",
    color: "#00BFFF",
    height: 50,
    width: 50,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselOffers);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "CarouselOffers__Title",
  componentId: "twduwc-0"
})(["font-family:'Open Sans',sans-serif;color:", ";font-size:", ";font-weight:", ";position:relative;"], props => props.color ? props.color : '#a1a1a1', props => props.size ? props.size : '1.8rem', props => props.weight ? props.weight : '600');
const PTag = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "CarouselOffers__PTag",
  componentId: "twduwc-1"
})(["font-family:'Open Sans',sans-serif;line-height:", ";font-size:", ";color:", ";font-weight:", ";"], props => props.line ? props.line : '1.2', props => props.size ? props.size : '0.8rem', props => props.color ? props.color : '#333', props => props.weight ? props.weight : '500');
const CarouselWrapp = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CarouselOffers__CarouselWrapp",
  componentId: "twduwc-2"
})(["margin:10vh 0 10vh 0;padding:5vh 0 0 0;display:grid;width:100%;height:75vh;background:#f4f5f7;border-radius:5px;grid-template-columns:25% 1fr;grid-column-gap:1vw;@media (max-width:600px){grid-template-columns:1fr;height:auto;}"]);
const Present = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CarouselOffers__Present",
  componentId: "twduwc-3"
})(["background:#f4f5f7;width:100%;height:100%;padding:1vh 2vw 0 2vw;position:relative;@media (max-width:600px){height:55vh;}"]);
const BtnIntro = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "CarouselOffers__BtnIntro",
  componentId: "twduwc-4"
})(["background:none;padding:10px;border-radius:30px;color:#ea1b37;font-family:'Open Sans',sans-serif;font-weight:700;position:absolute;bottom:5vh;font-size:0.8em;border:2px solid #ea1b37;}"]);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CarouselOffers__Card",
  componentId: "twduwc-5"
})(["cursor:pointer;width:100%;height:65vh;background:#f1f1f1;box-shadow:5px 5px 10px #b0b0b0,-5px -5px 10px #ffffff;"]);
const CardImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CarouselOffers__CardImg",
  componentId: "twduwc-6"
})(["width:100%;height:25vh;background-image:url('", "');background-position:center;background-size:cover;position:relative;"], props => props.image);
const NochesCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "CarouselOffers__NochesCard",
  componentId: "twduwc-7"
})(["background:#ea1b37;margin:0;color:#fff;position:absolute;font-size:0.6rem;left:1vw;line-height:1.2;bottom:-1vh;font-weight:600;height:3vh;padding:0.3vw;border-radius:5px;@media (max-width:600px){background:#ea1b37;margin:0;color:#fff;position:absolute;font-size:1rem;left:1vw;line-height:0.1;bottom:-1vh;font-weight:600;height:3vh;padding:3vw;border-radius:5px;}"]);
const TitleCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4.withConfig({
  displayName: "CarouselOffers__TitleCard",
  componentId: "twduwc-8"
})(["color:#393939;font-weight:700;"]);
const PriceCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "CarouselOffers__PriceCard",
  componentId: "twduwc-9"
})(["color:#333;font-size:0.8rem;"]);
const DiscountCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "CarouselOffers__DiscountCard",
  componentId: "twduwc-10"
})(["background:#ea1b37;color:white;width:3.4vw;position:absolute;bottom:1vh;right:0.6vw;font-size:0.9rem;text-align:center;padding:2px;border-top-left-radius:12px;border-bottom-left-radius:12px;font-weight:700;@media (max-width:600px){width:16vw;right:1.6vw;}"]);
const CardInfoWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CarouselOffers__CardInfoWrap",
  componentId: "twduwc-11"
})(["padding:10px;display:grid;grid-template-rows:25vh;"]);
const CardTop = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CarouselOffers__CardTop",
  componentId: "twduwc-12"
})([""]);
const CardBottom = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CarouselOffers__CardBottom",
  componentId: "twduwc-13"
})(["border-top:1px solid #dfdfdf;"]);
const Be = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "CarouselOffers__Be",
  componentId: "twduwc-14"
})(["font-size:1.4rem;color:#393939;font-weight:700;"]);
const LeftArrow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CarouselOffers__LeftArrow",
  componentId: "twduwc-15"
})(["border:1px solid #b3b3b3;position:absolute;left:0;cursor:pointer;background:white;width:50px;margin-left:-20px;height:50px;border-radius:100%;line-height:4.2;display:inline-block;-webkit-box-shadow:0px 3px 5px -2px rgba(0,0,0,0.75);-moz-box-shadow:0px 3px 5px -2px rgba(0,0,0,0.75);box-shadow:0px 3px 5px -2px rgba(0,0,0,0.75);"]);
const RightArrow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CarouselOffers__RightArrow",
  componentId: "twduwc-16"
})(["border:1px solid #b3b3b3;position:absolute;right:0;cursor:pointer;background:white;width:50px;margin-right:-20px;border-radius:100%;height:50px;line-height:4.2;display:inline-block;-webkit-box-shadow:0px 3px 5px -2px rgba(0,0,0,0.75);-moz-box-shadow:0px 3px 5px -2px rgba(0,0,0,0.75);box-shadow:0px 3px 5px -2px rgba(0,0,0,0.75);"]);
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CarouselOffers__ButtonContainer",
  componentId: "twduwc-17"
})(["position:absolute;top:55%;text-align:center;width:100%;display:flex;justify-content:space-around;"]);

/***/ }),

/***/ "./components/FilterSearch.js":
/*!************************************!*\
  !*** ./components/FilterSearch.js ***!
  \************************************/
/*! exports provided: FilterWrapper, Options, Filters, Aoptions, InputFrom, InputTo, P, LabelInput, InputPack, BtnSearchFilter, SearchWrapper, BoxWrapp, ImgSearch, SpinWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterWrapper", function() { return FilterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filters", function() { return Filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aoptions", function() { return Aoptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFrom", function() { return InputFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTo", function() { return InputTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelInput", function() { return LabelInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPack", function() { return InputPack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnSearchFilter", function() { return BtnSearchFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWrapper", function() { return SearchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxWrapp", function() { return BoxWrapp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgSearch", function() { return ImgSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinWrapper", function() { return SpinWrapper; });
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/date-picker */ "antd/lib/date-picker");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\next\\lariojaturismo\\components\\FilterSearch.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





const FilterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "FilterSearch__FilterWrapper",
  componentId: "m9cy7w-0"
})(["width:100%;height:auto;padding:2vw;background:rgb(150,41,43);border-radius:5px;display:flex;flex-direction:column;justify-content:space-around;grid-row-gap:4vh;@media (max-width:600px){height:auto;padding:5%;}"]);
const Options = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "FilterSearch__Options",
  componentId: "m9cy7w-1"
})(["width:43vw;display:grid;user-select:none;grid-template-columns:10vw 8vw 10vw;grid-column-gap:1vw;margin:2vh 0 2vh 0;@media (max-width:600px){grid-template-columns:1fr;grid-row-gap:3vh;align-items:center;margin:auto;margin-top:20px;}"]);
const Filters = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "FilterSearch__Filters",
  componentId: "m9cy7w-2"
})(["display:grid;width:65vw;grid-template-columns:30% 28%  18% 12%;grid-column-gap:1vw;@media (max-width:600px){display:block;width:100%;}"]);
const Aoptions = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.a.withConfig({
  displayName: "FilterSearch__Aoptions",
  componentId: "m9cy7w-3"
})(["color:", ";display:flex;font-family:'Open Sans',sans-serif text-align:center;background:", ";border:1px solid white;font-weight:600;padding:8px;border-radius:5px;justify-content:space-around;border-radius:30px;"], props => props.selected ? '#fd2542' : 'white', props => props.selected ? 'white' : 'none');
const InputFrom = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.input.withConfig({
  displayName: "FilterSearch__InputFrom",
  componentId: "m9cy7w-4"
})([""]);
const InputTo = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.input.withConfig({
  displayName: "FilterSearch__InputTo",
  componentId: "m9cy7w-5"
})(["border:1px solid #CCC;border-radius:3px;outline:none;padding-right:16px;padding-left:16px;height:40px;line-height:40px;"]);
const P = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p.withConfig({
  displayName: "FilterSearch__P",
  componentId: "m9cy7w-6"
})(["font-family:'Open Sans',sans-serif;font-size:1rem;color:white;font-weight:600;margin:0;"]);
const LabelInput = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.label.withConfig({
  displayName: "FilterSearch__LabelInput",
  componentId: "m9cy7w-7"
})(["color:white;font-family:'Open Sans',sans-serif;"]);
const InputPack = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "FilterSearch__InputPack",
  componentId: "m9cy7w-8"
})(["display:grid;grid-template-rows:auto auto;grid-row-gap:1vh;"]);
const BtnSearchFilter = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.a.withConfig({
  displayName: "FilterSearch__BtnSearchFilter",
  componentId: "m9cy7w-9"
})(["background:white;color:#ea1b37;width:8vw;margin:-3vw 0 0 0;text-align:center;font-weight:700;padding:8px;border-radius:30px;font-family:'Open Sans',sans-serif;align-self:flex-end;@media (max-width:600px){width:30vw;margin:12vw 26vw 0 4vw;}"]);
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "FilterSearch__SearchWrapper",
  componentId: "m9cy7w-10"
})(["width:100%;margin:12vh 0 12vh 0;display:grid;grid-template-columns:1fr 1fr 1fr;grid-column-gap:1vw;grid-row-gap:1vh;"]);
const BoxWrapp = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "FilterSearch__BoxWrapp",
  componentId: "m9cy7w-11"
})(["width:100%;height:100%;border:1px solid #d0d0d0;background:white;padding:14px;"]);
const ImgSearch = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.img.withConfig({
  displayName: "FilterSearch__ImgSearch",
  componentId: "m9cy7w-12"
})(["max-width:100%;"]);
const SpinWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "FilterSearch__SpinWrapper",
  componentId: "m9cy7w-13"
})(["display:grid;align-items:center;justify-content:center;"]);

const FilterSearch = ({
  offers
}) => {
  const fromCity = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  const {
    0: option,
    1: setOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('alojamientos');
  const {
    0: chosenPack,
    1: setChosenPack
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("");
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: searched,
    1: setSearched
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: destino,
    1: setDestino
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("");
  const {
    0: room,
    1: setRooms
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("");
  const {
    0: startDate,
    1: setStartDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date());
  const {
    0: endDate,
    1: setEndDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date());
  const {
    0: rangeDate,
    1: setRangeDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date());
  const {
    RangePicker
  } = antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_2___default.a;
  const dateFormat = 'DD/MM/YYYY'; // useEffect(()=> {
  //     var places = require('places.js');
  //     var placesAutocomplete = places({
  //         appId: 'pl992MAS3B1L',
  //         apiKey: 'd964608a03f900dc27a963d7c3953c47',
  //         container: document.querySelector('#from-city')
  //       });
  // }, [])

  const {
    Option
  } = antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a;

  const getFrom = () => {
    setLoading(true);
    setTimeout(() => {
      let paquete;

      switch (option) {
        case 'alojamientos':
          paquete = 'alojamientos';
          break;

        case 'paquetes':
          paquete = 'paquetes';
          break;

        case 'excursiones':
          paquete = 'excursiones';
          break;
      }

      const destinocity = destino;
      const fecha = new Date();
      const fechafinal = new Date();
      const fecharange = rangeDate;
      setChosenPack(`Elegiste el paquete ${paquete} con destino a ${destinocity} en la fecha ${fecharange} con ${room}`);
      setLoading(false);
      setSearched(true);
    }, 1000);
  };

  const getDestino = value => {
    setDestino(value);
  };

  const getHabitacion = value => {
    setRooms(value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(FilterWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, __jsx(P, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, "Eleg\xED tu servicio:"), __jsx(Options, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, __jsx(Aoptions, {
    onClick: () => setOption('alojamientos'),
    selected: option == 'alojamientos' ? true : false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }, "  ", __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__["RiHotelBedLine"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 122
    }
  }), " Alojamientos"), __jsx(Aoptions, {
    onClick: () => setOption('paquetes'),
    selected: option == 'paquetes' ? true : false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, " ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaSuitcaseRolling"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 113
    }
  }), "Paquetes"), __jsx(Aoptions, {
    onClick: () => setOption('excursiones'),
    selected: option == 'excursiones' ? true : false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }, "  ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaWalking"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 120
    }
  }), " Excursiones")), __jsx(Filters, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, option == "excursiones" || option == "paquetes" ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, " ") : __jsx(InputPack, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }, __jsx(LabelInput, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  }, "Destino:"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: "large",
    placeholder: "Destino",
    onChange: getDestino,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "General Ocampo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 21
    }
  }, "General Ocampo"), __jsx(Option, {
    value: "Chamical",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 21
    }
  }, "Chamical"), __jsx(Option, {
    value: "Arauco",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 21
    }
  }, "Arauco"), __jsx(Option, {
    value: "Coronel Felipe Varela",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 21
    }
  }, "Coronel Felipe Varela"), __jsx(Option, {
    value: "Castro Barros",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 21
    }
  }, "Castro Barros"), __jsx(Option, {
    value: "Chilecito",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 21
    }
  }, "Chilecito"), __jsx(Option, {
    value: "General \xC1ngel Vicente Pe\xF1aloza",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 21
    }
  }, "General \xC1ngel Vicente Pe\xF1aloza"), __jsx(Option, {
    value: "General Juan Facundo Quiroga",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 21
    }
  }, "General Juan Facundo Quiroga"), __jsx(Option, {
    value: "Rosario Vera Pe\xF1aloza",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 21
    }
  }, "Rosario Vera Pe\xF1aloza"), __jsx(Option, {
    value: "General San Mart\xEDn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 21
    }
  }, "General San Mart\xEDn"), __jsx(Option, {
    value: "Famatina",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 21
    }
  }, "Famatina"), __jsx(Option, {
    value: "San Blas de los Sauces",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 21
    }
  }, "San Blas de los Sauces"), __jsx(Option, {
    value: "Independencia",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 21
    }
  }, "Independencia"), __jsx(Option, {
    value: "General Belgrano",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 21
    }
  }, "General Belgrano"), __jsx(Option, {
    value: "Sanagasta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 21
    }
  }, "Sanagasta"), __jsx(Option, {
    value: "La Rioja",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 21
    }
  }, "La Rioja"))), option == "excursiones" || option == "paquetes" ? __jsx(InputPack, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 22
    }
  }, __jsx(LabelInput, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 22
    }
  }, "Salidas:"), __jsx(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_2___default.a, {
    disabledDate: current => {
      return current && current < moment__WEBPACK_IMPORTED_MODULE_7___default()();
    },
    size: "large",
    onChange: (date, datetostring) => setStartDate(datetostring),
    format: dateFormat,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 22
    }
  })) : __jsx(InputPack, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 17
    }
  }, __jsx(LabelInput, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }, "Ida y Vuelta:"), __jsx(RangePicker, {
    disabledDate: current => {
      return current && current < moment__WEBPACK_IMPORTED_MODULE_7___default()();
    },
    size: "large",
    onChange: (date, datetostring) => setRangeDate(datetostring),
    format: dateFormat,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 17
    }
  })), option == "excursiones" || option == "paquetes" ? __jsx(InputPack, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 21
    }
  }, __jsx(LabelInput, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 21
    }
  }, "Cantidad de personas:"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: "large",
    style: {
      width: '100%'
    },
    placeholder: "Cantidad de personas",
    onChange: getHabitacion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 21
    }
  }, __jsx(Option, {
    value: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 25
    }
  }, "1"), __jsx(Option, {
    value: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 25
    }
  }, "2"), __jsx(Option, {
    value: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 25
    }
  }, "3"), __jsx(Option, {
    value: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 25
    }
  }, "4"), __jsx(Option, {
    value: "5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 25
    }
  }, "5"), __jsx(Option, {
    value: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 25
    }
  }, "6"), __jsx(Option, {
    value: "7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 25
    }
  }, "7"), __jsx(Option, {
    value: "8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 25
    }
  }, "8"), __jsx(Option, {
    value: "9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 25
    }
  }, "9"), __jsx(Option, {
    value: "10+",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 25
    }
  }, "10 o m\xE1s"))) : __jsx(InputPack, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 17
    }
  }, __jsx(LabelInput, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 17
    }
  }, "Habitaciones:"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: "large",
    style: {
      width: '100%'
    },
    placeholder: "Habitaciones a elegir",
    onChange: getHabitacion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "habitacion + 1 cama",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 21
    }
  }, "Habitaci\xF3n + 1 cama"), __jsx(Option, {
    value: "habitacion + 2 camas",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 21
    }
  }, "Habitaci\xF3n + 2 camas"), __jsx(Option, {
    value: "2 habitaciones",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 21
    }
  }, "2 habitaciones")))), __jsx(BtnSearchFilter, {
    onClick: getFrom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 13
    }
  }, " Buscar ", __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__["RiSearch2Line"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 56
    }
  }), "  ")), __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 9
    }
  }, " ", chosenPack, " "), loading ? __jsx(SpinWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 13
    }
  }, __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  })) : searched ? __jsx(SearchWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }
  }, offers.map((item, index) => {
    return __jsx(BoxWrapp, {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 25
      }
    }, __jsx(ImgSearch, {
      src: item.picture,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 29
      }
    }), __jsx("h4", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 29
      }
    }, " ", item.title, " "), __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 29
      }
    }, " ", item.price, " "));
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, " "));
};

/* harmony default export */ __webpack_exports__["default"] = (FilterSearch);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: FooterWrapper, LogoImg, PTag, LaRiojaWrapper, DoscientosWrapper, MinisterioWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrapper", function() { return FooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoImg", function() { return LogoImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PTag", function() { return PTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaRiojaWrapper", function() { return LaRiojaWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoscientosWrapper", function() { return DoscientosWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinisterioWrapper", function() { return MinisterioWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\next\\lariojaturismo\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__FooterWrapper",
  componentId: "y3px6a-0"
})(["padding:4% 8% 4% 8%;height:30vh;background:white;width:100%;position:relative;"]);
const LogoImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Footer__LogoImg",
  componentId: "y3px6a-1"
})(["width:70%;"]);
const PTag = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Footer__PTag",
  componentId: "y3px6a-2"
})(["font-family:'Open Sans',sans-serif;color:white;font-weight:600;font-size:0.8rem;"]);
const LaRiojaWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Footer__LaRiojaWrapper",
  componentId: "y3px6a-3"
})(["position:absolute;bottom:0;right:0;width:32vw;@media (max-width:600px){width:75vw;}"]);
const DoscientosWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Footer__DoscientosWrapper",
  componentId: "y3px6a-4"
})(["position:absolute;bottom:0;right:32%;width:8vw;@media (max-width:600px){left:5vw;width:24vw;}"]);
const MinisterioWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Footer__MinisterioWrapper",
  componentId: "y3px6a-5"
})(["width:28vw;left:8vw;bottom:3vw;@media (max-width:600px){width:60vw;}"]);

const Footer = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(FooterWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(MinisterioWrapper, {
    src: "/pie_logo1.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx(DoscientosWrapper, {
    src: "/pie_logo2.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), __jsx(LaRiojaWrapper, {
    src: "/pie_logo3.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default, HeaderWrapper, LogoWrapper, MenuWrapper, ATag, CarritoWrapper, AuthWrapper, PTag, SecondMenu, FirstMenu, HeadUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWrapper", function() { return HeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoWrapper", function() { return LogoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuWrapper", function() { return MenuWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATag", function() { return ATag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoWrapper", function() { return CarritoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthWrapper", function() { return AuthWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PTag", function() { return PTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondMenu", function() { return SecondMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstMenu", function() { return FirstMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadUserInfo", function() { return HeadUserInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _zeit_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zeit-ui/react */ "@zeit-ui/react");
/* harmony import */ var _zeit_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_zeit_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/go */ "react-icons/go");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _context_global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/global */ "./context/global.js");
var _jsxFileName = "C:\\next\\lariojaturismo\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const Header = () => {
  const fetcher = url => fetch(url).then(r => r.json());

  const {
    data
  } = swr__WEBPACK_IMPORTED_MODULE_10___default()('/api/user', fetcher);
  const {
    0: itemCart,
    1: setItemCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global__WEBPACK_IMPORTED_MODULE_11__["ContextState"]);
  console.log(itemCart, 'cart');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/nprogress.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Karla:400,700,700i&display=swap",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })), __jsx(HeaderWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(LogoWrapper, {
    src: "/logov3.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx(MenuWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(FirstMenu, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdHome"], {
    size: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 27
    }
  }), " Inicio ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/actividades",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, " ", __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdDirectionsBike"], {
    size: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 28
    }
  }), " Que hacer ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/reservas",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_7__["GoCalendar"], {
    size: "18px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 27
    }
  }), "Reserv\xE1")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/descubrir",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiSun"], {
    size: "18px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 27
    }
  }), "Descubrila ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/informacion",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiInfo"], {
    size: "18px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 27
    }
  }), "Informaci\xF3n ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contacto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiMessageCircle"], {
    size: "18px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 27
    }
  }), " Contacto "))), __jsx(SecondMenu, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, !data ? __jsx(HeadUserInfo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, " ... ") : data.auth && data.auth.token ? __jsx(HeadUserInfo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 52
    }
  }, " ", data.auth.user, " ") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/ingresar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx(AuthWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx(ATag, {
    size: "0.8rem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, " Ingresar"), __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__["RiAccountPinBoxLine"], {
    size: "20px",
    color: "#4c4c4c",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/checkout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx(CarritoWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__["RiShoppingCart2Line"], {
    color: "#333",
    size: "22px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 27
    }
  }), " "), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, " ", (itemCart === null || itemCart === void 0 ? void 0 : itemCart.length) > 0 ? __jsx(_zeit_ui_react__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
    size: "mini",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 46
    }
  }, itemCart.length) : '', " ")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Header__HeaderWrapper",
  componentId: "sc-1z0k1lm-0"
})(["padding:0% 7% 0% 7%;border-top:1px solid;width:100%;position:fixed;box-sizing:border-box;height:10vh;background:white;display:grid;z-index:1200;grid-template-columns:18% 1fr;align-items:center;&::after{content:\"\";position:absolute;left:0;right:0;top:100%;height:4px;background:linear-gradient(180deg,rgba(9,30,66,0.13) 0,rgba(9,30,66,0.13) 1px,rgba(9,30,66,0.08) 1px,rgba(9,30,66,0) 4px);}}@media (max-width:600px){grid-template-columns:1fr;grid-template-rows:1fr 1fr;grid-row-gap:1vh;height:auto;padding:2% 3% 2% 3%;}"]);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.img.withConfig({
  displayName: "Header__LogoWrapper",
  componentId: "sc-1z0k1lm-1"
})(["margin:0;max-width:12vw;@media (max-width:600px){max-width:45vw;}"]);
const MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Header__MenuWrapper",
  componentId: "sc-1z0k1lm-2"
})(["display:grid;grid-template-columns:60% 40%;grid-column-gap:2vw;align-items:center;@media (max-width:600px){grid-template-columns:1fr;}"]);
const ATag = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.a.withConfig({
  displayName: "Header__ATag",
  componentId: "sc-1z0k1lm-3"
})(["display:grid;justify-content:center;color:#4c4c4c;font-weight:700;justify-items:center;font-size:", ";font-family:'Open Sans',sans-serif;"], props => props.size ? props.size : '0.7rem');
const CarritoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Header__CarritoWrapper",
  componentId: "sc-1z0k1lm-4"
})(["display:flex;justify-content:space-around;"]);
const AuthWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Header__AuthWrapper",
  componentId: "sc-1z0k1lm-5"
})(["display:flex;justify-content:space-around;"]);
const PTag = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p.withConfig({
  displayName: "Header__PTag",
  componentId: "sc-1z0k1lm-6"
})(["font-family:'Open Sans',sans-serif;font-size:", ";color:", ";"], props => props.size ? props.size : '0.8rem', props => props.color ? props.color : '#333');
const SecondMenu = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Header__SecondMenu",
  componentId: "sc-1z0k1lm-7"
})(["justify-content:end;display:grid;grid-column-gap:2vw;align-items:center;grid-template-columns:6vw 7vw;@media (max-width:600px){display:none;}"]);
const FirstMenu = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Header__FirstMenu",
  componentId: "sc-1z0k1lm-8"
})(["display:flex;justify-content:space-around;"]);
const HeadUserInfo = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p.withConfig({
  displayName: "Header__HeadUserInfo",
  componentId: "sc-1z0k1lm-9"
})(["font-family:'Open Sans',sans-serif;color:#333;font-weight:600;margin:0 -2vw 0 -3vw;font-size:0.8rem;"]);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\next\\lariojaturismo\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = ({
  children,
  title = '',
  isAuth = false
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, minimum-scale=1.0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "description",
    content: "Compr\xE1 tu paquete de viajes La Rioja",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400;1,500&display=swap",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, title)), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./context/global.js":
/*!***************************!*\
  !*** ./context/global.js ***!
  \***************************/
/*! exports provided: ContextState, CartProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextState", function() { return ContextState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProvider", function() { return CartProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\next\\lariojaturismo\\context\\global.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ContextState = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
const CartProvider = props => {
  const {
    0: itemCart,
    1: setItemCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const getLocalStorage = () => {
    let initialQty = 0;

    if (localStorage.getItem('st_cart') === null) {
      localStorage.setItem('st_cart', JSON.stringify([]));
    }

    var local = JSON.parse(localStorage.getItem('st_cart')); // if(local.length > 0){
    //   local.map(item => {
    //     initialQty += parseInt(item.quantity);
    //   })
    // }

    return local;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const storage = getLocalStorage();
    setItemCart(storage);
  }, []);
  return __jsx(ContextState.Provider, {
    value: [itemCart, setItemCart],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, props.children);
};

/***/ }),

/***/ "./lib/slugify.js":
/*!************************!*\
  !*** ./lib/slugify.js ***!
  \************************/
/*! exports provided: slugify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugify", function() { return slugify; });
function slugify(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');
  return string.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
  .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
  .replace(/&/g, '-and-') // Replace & with 'and'
  .replace(/[^\w\-]+/g, '') // Remove all non-word characters
  .replace(/\-\-+/g, '-') // Replace multiple - with single -
  .replace(/^-+/, '') // Trim - from start of text
  .replace(/-+$/, ''); // Trim - from end of text
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
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
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

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
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
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
        // tslint:disable-next-line:no-bitwise
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

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
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
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
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

    this.onPopState = e => {
      if (!e.state) {
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
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
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
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
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
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
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

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
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

var _url = __webpack_require__(/*! url */ "url");
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
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: MainWrapper, IndexWrapper, Titleh1, PortadaTurismo, Title, PTag, Be, MoveteImg, LineasImg, LineasWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWrapper", function() { return MainWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexWrapper", function() { return IndexWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Titleh1", function() { return Titleh1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortadaTurismo", function() { return PortadaTurismo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PTag", function() { return PTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Be", function() { return Be; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveteImg", function() { return MoveteImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineasImg", function() { return LineasImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineasWrapper", function() { return LineasWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CarouselOffers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CarouselOffers */ "./components/CarouselOffers.js");
/* harmony import */ var _components_FilterSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FilterSearch */ "./components/FilterSearch.js");
var _jsxFileName = "C:\\next\\lariojaturismo\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__MainWrapper",
  componentId: "sc-14fx05x-0"
})(["padding:0px 0px 0px 0px;box-sizing:border-box;"]);
const IndexWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__IndexWrapper",
  componentId: "sc-14fx05x-1"
})(["padding:10% 8% 2% 8%;background:white;heigth:120vh;min-height:120vh;@media (max-width:600px){padding:50% 3% 3% 3%;}"]);
const Titleh1 = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "pages__Titleh1",
  componentId: "sc-14fx05x-2"
})(["font-family:'Open Sans',sans-serif;"]);
const PortadaTurismo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__PortadaTurismo",
  componentId: "sc-14fx05x-3"
})(["background:#5f0710;margin:0 0 10vh 0;padding:10px;border-radius:5px;width:100%;position:relative;height:40vh;display:grid;grid-template-columns:70% 15% 15%;@media (max-width:600px){height:25vh;grid-template-columns:1fr;grid-template-rows:auto;}"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2.withConfig({
  displayName: "pages__Title",
  componentId: "sc-14fx05x-4"
})(["font-family:'Open Sans',sans-serif;color:", ";font-size:", ";font-weight:", ";position:relative;"], props => props.color ? props.color : '#a1a1a1', props => props.size ? props.size : '1.8rem', props => props.weight ? props.weight : '600');
const PTag = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "pages__PTag",
  componentId: "sc-14fx05x-5"
})(["font-family:'Open Sans',sans-serif;line-height:", ";font-size:", ";color:", ";font-weight:", ";"], props => props.line ? props.line : '1.2', props => props.size ? props.size : '0.8rem', props => props.color ? props.color : '#333', props => props.weight ? props.weight : '500');
const Be = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "pages__Be",
  componentId: "sc-14fx05x-6"
})(["font-size:1.4rem;color:#393939;font-weight:700;"]);
const MoveteImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "pages__MoveteImg",
  componentId: "sc-14fx05x-7"
})(["width:51%;justify-self:center;align-self:center;@media (max-width:600px){width:78%;margin:0 14vw 0 0;}"]);
const LineasImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "pages__LineasImg",
  componentId: "sc-14fx05x-8"
})(["object-fit:contain;height:100%;"]);
const LineasWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__LineasWrapper",
  componentId: "sc-14fx05x-9"
})(["position:absolute;top:0;height:100%;right:5vw;"]);

const Index = () => {
  //https://jonathangabriel.vercel.app/api/registrar
  const {
    0: redata,
    1: setRedata
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: packages,
    1: setPackages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  async function getPackages() {
    let response = await fetch(`https://www.lrseguridad.com.ar/turismorest/public/api/paquetepublicos`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    let data = await response.json();
    return data;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getPackages().then(resp => {
      setPackages(resp);
      console.log(resp, 'all paquetes');
    });
  }, []);
  return __jsx(MainWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx(IndexWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, __jsx(PortadaTurismo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, __jsx(MoveteImg, {
    src: "/movetev1.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }), __jsx(LineasWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, __jsx(LineasImg, {
    src: "/lineasgrande.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 27
    }
  }))), __jsx(_components_FilterSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    offers: packages,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }), __jsx(_components_CarouselOffers__WEBPACK_IMPORTED_MODULE_5__["default"], {
    offers: packages,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\next\lariojaturismo\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@zeit-ui/react":
/*!*********************************!*\
  !*** external "@zeit-ui/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@zeit-ui/react");

/***/ }),

/***/ "antd/lib/date-picker":
/*!***************************************!*\
  !*** external "antd/lib/date-picker" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker");

/***/ }),

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "antd/lib/spin":
/*!********************************!*\
  !*** external "antd/lib/spin" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/go":
/*!*********************************!*\
  !*** external "react-icons/go" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/go");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-loader-spinner":
/*!***************************************!*\
  !*** external "react-loader-spinner" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Nhcm91c2VsT2ZmZXJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmlsdGVyU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL2xpYi9zbHVnaWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAemVpdC11aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2RhdGUtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvc3BpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9nb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL21kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvcmlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvYWRlci1zcGlubmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3clwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbInJlc3BvbnNpdmUiLCJzdXBlckxhcmdlRGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsImRlc2t0b3AiLCJ0YWJsZXQiLCJtb2JpbGUiLCJDYXJvdXNlbE9mZmVycyIsIm9mZmVycyIsIkJ1dHRvbkdyb3VwIiwibmV4dCIsInByZXZpb3VzIiwiZ29Ub1NsaWRlIiwicmVzdCIsImNhcm91c2VsU3RhdGUiLCJjdXJyZW50U2xpZGUiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzbHVnaWZ5IiwidGlwb19wcm9kdWN0byIsImlkX3Byb2R1Y3RvIiwiY29uc29sZSIsImxvZyIsInBhdGgiLCJjYW50aWRhZF9ub2NoZSIsImxvY2FsaWRhZCIsInByZWNpbyIsImRjdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJUaXRsZSIsInN0eWxlZCIsImgyIiwicHJvcHMiLCJjb2xvciIsInNpemUiLCJ3ZWlnaHQiLCJQVGFnIiwicCIsImxpbmUiLCJDYXJvdXNlbFdyYXBwIiwiZGl2IiwiUHJlc2VudCIsIkJ0bkludHJvIiwiYSIsIkNhcmQiLCJDYXJkSW1nIiwiaW1hZ2UiLCJOb2NoZXNDYXJkIiwiVGl0bGVDYXJkIiwiaDQiLCJQcmljZUNhcmQiLCJEaXNjb3VudENhcmQiLCJDYXJkSW5mb1dyYXAiLCJDYXJkVG9wIiwiQ2FyZEJvdHRvbSIsIkJlIiwic3BhbiIsIkxlZnRBcnJvdyIsIlJpZ2h0QXJyb3ciLCJCdXR0b25Db250YWluZXIiLCJGaWx0ZXJXcmFwcGVyIiwiT3B0aW9ucyIsIkZpbHRlcnMiLCJBb3B0aW9ucyIsInNlbGVjdGVkIiwiSW5wdXRGcm9tIiwiaW5wdXQiLCJJbnB1dFRvIiwiUCIsIkxhYmVsSW5wdXQiLCJsYWJlbCIsIklucHV0UGFjayIsIkJ0blNlYXJjaEZpbHRlciIsIlNlYXJjaFdyYXBwZXIiLCJCb3hXcmFwcCIsIkltZ1NlYXJjaCIsImltZyIsIlNwaW5XcmFwcGVyIiwiRmlsdGVyU2VhcmNoIiwiZnJvbUNpdHkiLCJ1c2VSZWYiLCJvcHRpb24iLCJzZXRPcHRpb24iLCJ1c2VTdGF0ZSIsImNob3NlblBhY2siLCJzZXRDaG9zZW5QYWNrIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZWFyY2hlZCIsInNldFNlYXJjaGVkIiwiZGVzdGlubyIsInNldERlc3Rpbm8iLCJyb29tIiwic2V0Um9vbXMiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJEYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJyYW5nZURhdGUiLCJzZXRSYW5nZURhdGUiLCJSYW5nZVBpY2tlciIsImRhdGVGb3JtYXQiLCJPcHRpb24iLCJnZXRGcm9tIiwic2V0VGltZW91dCIsInBhcXVldGUiLCJkZXN0aW5vY2l0eSIsImZlY2hhIiwiZmVjaGFmaW5hbCIsImZlY2hhcmFuZ2UiLCJnZXREZXN0aW5vIiwidmFsdWUiLCJnZXRIYWJpdGFjaW9uIiwiY3VycmVudCIsIm1vbWVudCIsImRhdGUiLCJkYXRldG9zdHJpbmciLCJ3aWR0aCIsInBpY3R1cmUiLCJ0aXRsZSIsInByaWNlIiwiRm9vdGVyV3JhcHBlciIsIkxvZ29JbWciLCJMYVJpb2phV3JhcHBlciIsIkRvc2NpZW50b3NXcmFwcGVyIiwiTWluaXN0ZXJpb1dyYXBwZXIiLCJGb290ZXIiLCJIZWFkZXIiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJkYXRhIiwidXNlU1dSIiwiaXRlbUNhcnQiLCJzZXRJdGVtQ2FydCIsInVzZUNvbnRleHQiLCJDb250ZXh0U3RhdGUiLCJhdXRoIiwidG9rZW4iLCJ1c2VyIiwiSGVhZGVyV3JhcHBlciIsIkxvZ29XcmFwcGVyIiwiTWVudVdyYXBwZXIiLCJBVGFnIiwiQ2Fycml0b1dyYXBwZXIiLCJBdXRoV3JhcHBlciIsIlNlY29uZE1lbnUiLCJGaXJzdE1lbnUiLCJIZWFkVXNlckluZm8iLCJMYXlvdXQiLCJjaGlsZHJlbiIsImlzQXV0aCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkNhcnRQcm92aWRlciIsImdldExvY2FsU3RvcmFnZSIsImluaXRpYWxRdHkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbCIsInBhcnNlIiwidXNlRWZmZWN0Iiwic3RvcmFnZSIsInN0cmluZyIsImIiLCJSZWdFeHAiLCJzcGxpdCIsImpvaW4iLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImMiLCJjaGFyQXQiLCJpbmRleE9mIiwib3JpZ2luIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiaHJlZiIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwiZSIsIm5vZGVOYW1lIiwidGFyZ2V0IiwiaXNMb2NhbCIsInNjcm9sbCIsIlJvdXRlciIsInNoYWxsb3ciLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwiZXJyIiwicmVuZGVyIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwicHJvY2VzcyIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicGFzc0hyZWYiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlcGFyZVJvdXRlIiwidG9Sb3V0ZSIsImF0dGVtcHRzIiwiaXNTZXJ2ZXJSZW5kZXIiLCJwYXRobmFtZSIsImFkZEJhc2VQYXRoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJkZWxCYXNlUGF0aCIsImNyZWRlbnRpYWxzIiwicmVzIiwiZ2V0UmVzcG9uc2UiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJQcm9taXNlIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIk1haW5XcmFwcGVyIiwiSW5kZXhXcmFwcGVyIiwiVGl0bGVoMSIsImgxIiwiUG9ydGFkYVR1cmlzbW8iLCJNb3ZldGVJbWciLCJMaW5lYXNJbWciLCJMaW5lYXNXcmFwcGVyIiwiSW5kZXgiLCJyZWRhdGEiLCJzZXRSZWRhdGEiLCJwYWNrYWdlcyIsInNldFBhY2thZ2VzIiwiZ2V0UGFja2FnZXMiLCJyZXNwb25zZSIsImhlYWRlcnMiLCJyZXNwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLE1BQU1BLFVBQVUsR0FBRztBQUNmQyxtQkFBaUIsRUFBRTtB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QUFBO0FBQUEsS0FNSSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTkosRUFPSSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUEosRUFRSSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUkosRUFTSSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBVEosRUFVSSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBVkosRUFXSSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBWEosRUFZSSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBWkosRUFhSSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBYkosRUFjSSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBZEosRUFlSSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZKLENBRkEsQ0FESCxHQXNCRCxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBLEVBRUE7QUFDQSxRQUFJLEVBQUMsT0FE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QUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQ7QUFBVyxPQUFHLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkosQ0FESixFQVFJLE1BQUMsZ0VBQUQ7QUFBYyxVQUFNLEVBQUVMLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQVNJLE1BQUMsa0VBQUQ7QUFBZ0IsVUFBTSxFQUFFQSxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosQ0FESixDQURKLENBREo7QUFtQkgsQ0E5Q0Q7O0FBZ0RlSCxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xyXG5pbXBvcnQge1JpQXJyb3dSaWdodFNMaW5lLCBSaUFycm93TGVmdFNMaW5lfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcclxuaW1wb3J0IExvYWRlciBmcm9tICdyZWFjdC1sb2FkZXItc3Bpbm5lcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge3NsdWdpZnl9IGZyb20gJy4uL2xpYi9zbHVnaWZ5J1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICAgIHN1cGVyTGFyZ2VEZXNrdG9wOiB7XHJcbiAgICAgIC8vIHRoZSBuYW1pbmcgY2FuIGJlIGFueSwgZGVwZW5kcyBvbiB5b3UuXHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0MDAwLCBtaW46IDMwMDAgfSxcclxuICAgICAgaXRlbXM6IDVcclxuICAgIH0sXHJcbiAgICBkZXNrdG9wOiB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcclxuICAgICAgaXRlbXM6IDNcclxuICAgIH0sXHJcbiAgICB0YWJsZXQ6IHtcclxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNjAxIH0sXHJcbiAgICAgIGl0ZW1zOiAzXHJcbiAgICB9LFxyXG4gICAgbW9iaWxlOiB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MDAsIG1pbjogMCB9LFxyXG4gICAgICBpdGVtczogMVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuXHJcbmNvbnN0IENhcm91c2VsT2ZmZXJzID0gKHtvZmZlcnN9KSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IEJ1dHRvbkdyb3VwID0gKHsgbmV4dCwgcHJldmlvdXMsIGdvVG9TbGlkZSwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjYXJvdXNlbFN0YXRlOiB7IGN1cnJlbnRTbGlkZSB9IH0gPSByZXN0O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8QnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8TGVmdEFycm93IGNsYXNzTmFtZT17Y3VycmVudFNsaWRlID09PSAwID8gJ2Rpc2FibGUnIDogJyd9IG9uQ2xpY2s9eygpID0+IHByZXZpb3VzKCl9ID4gPFJpQXJyb3dMZWZ0U0xpbmUgc2l6ZT1cIjMwcHhcIi8+IDwvTGVmdEFycm93PlxyXG4gICAgICAgICAgICA8UmlnaHRBcnJvdyBvbkNsaWNrPXsoKSA9PiBuZXh0KCl9ID48UmlBcnJvd1JpZ2h0U0xpbmUgc2l6ZT1cIjMwcHhcIi8+IDwvUmlnaHRBcnJvdz5cclxuICAgICAgICAgIDwvQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcbiBcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPENhcm91c2VsV3JhcHA+XHJcbiAgICAgICAgICAgIDxQcmVzZW50PlxyXG4gICAgICAgICAgICA8VGl0bGUgd2VpZ2h0PVwiNzAwXCIgY29sb3I9XCIjMzkzOTM5XCIgc2l6ZT1cIjEuN3JlbVwiPiBWb2x2w6kgYSBzb8OxYXIgY29uIHR1IHByw7N4aW1vIHZpYWplLjwvVGl0bGU+XHJcbiAgICAgICAgICAgIDxQVGFnIGxpbmU9XCIyXCIgd2VpZ2h0PVwiNjAwXCIgY29sb3I9XCIjMzkzOTM5XCIgc2l6ZT1cIjFyZW1cIj5TZWxlY2Npb25hbW9zIGVzdGFzIG9mZXJ0YXMgcGFyYSB2b3MsIGFsZ3VuYXMgY29uIHJlc2VydmEgZmxleGlibGUgeSBvdHJhcyBjb24gcHJlY2lvcyBzb3JwcmVuZGVudGVzLiBFbGVnaSBsYSBxdWUgdmEgbWVqb3IgY29uIHR1cyBwbGFuZXMgeSBjb21wcmEgdHUgcHLDs3hpbW8gcGFxdWV0ZS4gPC9QVGFnPlxyXG4gICAgICAgICAgICA8QnRuSW50cm8+VmVyIG1hcyBvZmVydGFzIDwvQnRuSW50cm8+XHJcbiAgICAgICAgICAgIDwvUHJlc2VudD5cclxuICAgICAgICAgICAge29mZmVycy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbCBcclxuICAgICAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxyXG4gICAgICAgICAgICAgIHNzcj17dHJ1ZX1cclxuICAgICAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGN1c3RvbUJ1dHRvbkdyb3VwPXs8QnV0dG9uR3JvdXAgLz59XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7b2ZmZXJzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvW2NhdGVnb3JpYV0vW2lkXWB9ICBhcz17YC8ke3NsdWdpZnkoaXRlbS50aXBvX3Byb2R1Y3RvKX0vJHtpdGVtLmlkX3Byb2R1Y3RvfWB9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhpdGVtLCAnaXRlbScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSW1nIGltYWdlPXtgaHR0cHM6Ly93d3cubHJzZWd1cmlkYWQuY29tLmFyL3R1cmlzbW8vMS4wLyR7aXRlbS5wYXRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxOb2NoZXNDYXJkPiB7aXRlbS5jYW50aWRhZF9ub2NoZX0gTk9DSEVTPC9Ob2NoZXNDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEluZm9XcmFwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVDYXJkPlBhcXVldGVzIGEge2l0ZW0ubG9jYWxpZGFkfTwvVGl0bGVDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBUYWc+IFByZWNpbyBmaW5hbCBwb3IgcGVyc29uYTwvUFRhZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlQ2FyZD4gJCA8QmU+e2l0ZW0ucHJlY2lvfTwvQmU+QXJzPC9QcmljZUNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNjb3VudENhcmQ+IHtpdGVtLmRjdH0gPC9EaXNjb3VudENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEluZm9XcmFwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICk6IChcclxuICAgICAgICAgICAgICA8TG9hZGVyXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdncmlkJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ319IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIlRhaWxTcGluXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiIzAwQkZGRlwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvQ2Fyb3VzZWxXcmFwcD5cclxuICAgICAgICA8Lz5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxPZmZlcnM7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXHJcbiAgZm9udC1mYW1pbHk6J09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3IgPyBwcm9wcy5jb2xvciA6ICcjYTFhMWExJ307XHJcbiAgZm9udC1zaXplOiR7cHJvcHMgPT4gcHJvcHMuc2l6ZSA/IHByb3BzLnNpemUgOiAnMS44cmVtJ307XHJcbiAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMud2VpZ2h0ID8gcHJvcHMud2VpZ2h0IDogJzYwMCd9O1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cclxuYDtcclxuZXhwb3J0IGNvbnN0IFBUYWcgPSBzdHlsZWQucGBcclxuZm9udC1mYW1pbHk6J09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbmxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmxpbmUgPyBwcm9wcy5saW5lIDogJzEuMid9O1xyXG5mb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMuc2l6ZSA/IHByb3BzLnNpemUgOiAnMC44cmVtJ307XHJcbmNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yID8gcHJvcHMuY29sb3IgOiAnIzMzMyd9O1xyXG5mb250LXdlaWdodDogJHtwcm9wcyA9PiBwcm9wcy53ZWlnaHQgPyBwcm9wcy53ZWlnaHQgOiAnNTAwJ307XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbFdyYXBwID0gc3R5bGVkLmRpdmBcclxubWFyZ2luOiAxMHZoIDAgMTB2aCAwO1xyXG5wYWRkaW5nOiA1dmggMCAwIDA7XHJcbmRpc3BsYXk6Z3JpZDtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0Ojc1dmg7XHJcbmJhY2tncm91bmQ6I2Y0ZjVmNztcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczoyNSUgMWZyO1xyXG5ncmlkLWNvbHVtbi1nYXA6MXZ3O1xyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gIGhlaWdodDphdXRvO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFByZXNlbnQgPSBzdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kOiAjZjRmNWY3O1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5wYWRkaW5nOiAxdmggMnZ3IDAgMnZ3O1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGhlaWdodDo1NXZoO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IEJ0bkludHJvID0gc3R5bGVkLmFgXHJcbmJhY2tncm91bmQ6IG5vbmU7XHJcbnBhZGRpbmc6IDEwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbmNvbG9yOiAjZWExYjM3O1xyXG5mb250LWZhbWlseTogJ09wZW4gU2Fucycsc2Fucy1zZXJpZjtcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5ib3R0b206IDV2aDtcclxuZm9udC1zaXplOiAwLjhlbTtcclxuYm9yZGVyOiAycHggc29saWQgI2VhMWIzNztcclxufVxyXG5gO1xyXG5leHBvcnQgY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbmN1cnNvcjpwb2ludGVyO1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6NjV2aDtcclxuYmFja2dyb3VuZDojZjFmMWYxO1xyXG5ib3gtc2hhZG93OiAgNXB4IDVweCAxMHB4ICNiMGIwYjAsIFxyXG4gICAgICAgICAgICAgLTVweCAtNXB4IDEwcHggI2ZmZmZmZjtcclxuYDtcclxuZXhwb3J0IGNvbnN0IENhcmRJbWcgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjI1dmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3Byb3BzID0+IHByb3BzLmltYWdlfScpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IE5vY2hlc0NhcmQgPSBzdHlsZWQucGBcclxuYmFja2dyb3VuZDogI2VhMWIzNztcclxubWFyZ2luOiAwO1xyXG5jb2xvcjogI2ZmZjtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5mb250LXNpemU6IDAuNnJlbTtcclxubGVmdDogMXZ3O1xyXG5saW5lLWhlaWdodDogMS4yO1xyXG5ib3R0b206IC0xdmg7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbmhlaWdodDogM3ZoO1xyXG5wYWRkaW5nOiAwLjN2dztcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBiYWNrZ3JvdW5kOiAjZWExYjM3O1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxlZnQ6IDF2dztcclxuICBsaW5lLWhlaWdodDogMC4xO1xyXG4gIGJvdHRvbTogLTF2aDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGhlaWdodDogM3ZoO1xyXG4gIHBhZGRpbmc6IDN2dztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG5cclxuXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBUaXRsZUNhcmQgPSBzdHlsZWQuaDRgXHJcbiAgY29sb3I6ICMzOTM5Mzk7XHJcbiAgZm9udC13ZWlnaHQ6NzAwO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgUHJpY2VDYXJkID0gc3R5bGVkLnBgXHJcbiAgY29sb3I6IzMzMztcclxuICBmb250LXNpemU6MC44cmVtO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgRGlzY291bnRDYXJkID0gc3R5bGVkLnBgXHJcbmJhY2tncm91bmQ6ICNlYTFiMzc7XHJcbmNvbG9yOiB3aGl0ZTtcclxud2lkdGg6IDMuNHZ3O1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmJvdHRvbTogMXZoO1xyXG5yaWdodDogMC42dnc7XHJcbmZvbnQtc2l6ZTogMC45cmVtO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbnBhZGRpbmc6IDJweDtcclxuYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcclxuYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgd2lkdGg6MTZ2dztcclxuICByaWdodDoxLjZ2dztcclxufVxyXG5gO1xyXG5leHBvcnQgY29uc3QgQ2FyZEluZm9XcmFwID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOjEwcHg7XHJcbiAgZGlzcGxheTpncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czoyNXZoO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQ2FyZFRvcCA9IHN0eWxlZC5kaXZgXHJcbiAgXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDYXJkQm90dG9tID0gc3R5bGVkLmRpdmBcclxuYm9yZGVyLXRvcDoxcHggc29saWQgI2RmZGZkZjtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEJlID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1zaXplOjEuNHJlbTtcclxuICBjb2xvcjojMzkzOTM5O1xyXG4gIGZvbnQtd2VpZ2h0OjcwMDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IExlZnRBcnJvdyA9IHN0eWxlZC5kaXZgXHJcbmJvcmRlcjogMXB4IHNvbGlkICNiM2IzYjM7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5sZWZ0OjA7XHJcbmN1cnNvcjpwb2ludGVyO1xyXG5iYWNrZ3JvdW5kOndoaXRlO1xyXG53aWR0aDo1MHB4O1xyXG5tYXJnaW4tbGVmdDotMjBweDtcclxuaGVpZ2h0OjUwcHg7XHJcbmJvcmRlci1yYWRpdXM6MTAwJTtcclxubGluZS1oZWlnaHQ6IDQuMjtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgUmlnaHRBcnJvdyA9IHN0eWxlZC5kaXZgXHJcbmJvcmRlcjogMXB4IHNvbGlkICNiM2IzYjM7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5yaWdodDowO1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuYmFja2dyb3VuZDp3aGl0ZTtcclxud2lkdGg6NTBweDtcclxubWFyZ2luLXJpZ2h0Oi0yMHB4O1xyXG5ib3JkZXItcmFkaXVzOjEwMCU7XHJcbmhlaWdodDo1MHB4O1xyXG5saW5lLWhlaWdodDogNC4yO1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5ib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogNTUlO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbndpZHRoOiAxMDAlO1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuYDsiLCJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtSaUhvdGVsQmVkTGluZSwgUmlDYXJMaW5lLCBSaVNlYXJjaDJMaW5lfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcclxuaW1wb3J0IHtGYVN1aXRjYXNlUm9sbGluZywgRmFXYWxraW5nfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IFNwaW4gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgSW5wdXQsIFNlbGVjdCB9IGZyb20gJ2FudGQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZpbHRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzogMnZ3O1xyXG5iYWNrZ3JvdW5kOnJnYigxNTAsIDQxLCA0Myk7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbmdyaWQtcm93LWdhcDo0dmg7XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5oZWlnaHQ6YXV0bztcclxucGFkZGluZzo1JTtcclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9wdGlvbnMgPSBzdHlsZWQuZGl2YFxyXG53aWR0aDo0M3Z3O1xyXG5kaXNwbGF5OmdyaWQ7XHJcbnVzZXItc2VsZWN0Om5vbmU7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczoxMHZ3IDh2dyAxMHZ3O1xyXG5ncmlkLWNvbHVtbi1nYXA6IDF2dztcclxubWFyZ2luOjJ2aCAwIDJ2aCAwO1xyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxuZ3JpZC1yb3ctZ2FwOjN2aDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5tYXJnaW46IGF1dG87XHJcbm1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuYDtcclxuZXhwb3J0IGNvbnN0IEZpbHRlcnMgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmdyaWQ7XHJcbndpZHRoOjY1dnc7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczozMCUgMjglICAxOCUgMTIlO1xyXG5ncmlkLWNvbHVtbi1nYXA6MXZ3O1xyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuZGlzcGxheTpibG9jaztcclxud2lkdGg6MTAwJTtcclxufVxyXG5gO1xyXG5leHBvcnQgY29uc3QgQW9wdGlvbnMgPSBzdHlsZWQuYWBcclxuY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuc2VsZWN0ZWQgPyAnI2ZkMjU0MicgOiAnd2hpdGUnfTtcclxuZGlzcGxheTogZmxleDtcclxuZm9udC1mYW1pbHk6J09wZW4gU2FucycsIHNhbnMtc2VyaWZcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5iYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnNlbGVjdGVkID8gJ3doaXRlJyA6ICdub25lJ307XHJcbmJvcmRlcjoxcHggc29saWQgd2hpdGU7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbnBhZGRpbmc6IDhweDtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cclxuYDtcclxuZXhwb3J0IGNvbnN0IElucHV0RnJvbSA9IHN0eWxlZC5pbnB1dGBcclxuICBcclxuYDtcclxuZXhwb3J0IGNvbnN0IElucHV0VG8gPSBzdHlsZWQuaW5wdXRgXHJcbmJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XHJcbmJvcmRlci1yYWRpdXM6IDNweDtcclxub3V0bGluZTogbm9uZTtcclxucGFkZGluZy1yaWdodDogMTZweDtcclxucGFkZGluZy1sZWZ0OiAxNnB4O1xyXG5oZWlnaHQ6NDBweDtcclxubGluZS1oZWlnaHQ6IDQwcHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBQID0gc3R5bGVkLnBgXHJcbiAgZm9udC1mYW1pbHk6J09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOjFyZW07XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gIG1hcmdpbjowO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgTGFiZWxJbnB1dCA9IHN0eWxlZC5sYWJlbGBcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LWZhbWlseTonT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuYDtcclxuZXhwb3J0IGNvbnN0IElucHV0UGFjayA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTpncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xyXG4gIGdyaWQtcm93LWdhcDoxdmg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBCdG5TZWFyY2hGaWx0ZXIgPSBzdHlsZWQuYWBcclxuYmFja2dyb3VuZDogd2hpdGU7XHJcbmNvbG9yOiNlYTFiMzc7XHJcbndpZHRoOiA4dnc7XHJcbm1hcmdpbjotM3Z3IDAgMCAwO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmZvbnQtd2VpZ2h0OiA3MDA7XHJcbnBhZGRpbmc6IDhweDtcclxuYm9yZGVyLXJhZGl1czogMzBweDtcclxuZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5hbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICB3aWR0aDozMHZ3O1xyXG4gICAgbWFyZ2luOjEydncgMjZ2dyAwIDR2dztcclxuICAgIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFNlYXJjaFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG53aWR0aDoxMDAlO1xyXG5tYXJnaW46MTJ2aCAwIDEydmggMDtcclxuZGlzcGxheTpncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG5ncmlkLWNvbHVtbi1nYXA6MXZ3O1xyXG5ncmlkLXJvdy1nYXA6MXZoO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQm94V3JhcHAgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2QwZDBkMDtcclxuICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gIHBhZGRpbmc6MTRweDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEltZ1NlYXJjaCA9IHN0eWxlZC5pbWdgXHJcbiAgbWF4LXdpZHRoOjEwMCU7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTcGluV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTpncmlkO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIFxyXG5gO1xyXG5jb25zdCBGaWx0ZXJTZWFyY2ggPSAoe29mZmVyc30pID0+IHtcclxuXHJcbiAgICBjb25zdCBmcm9tQ2l0eSA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBbb3B0aW9uLCBzZXRPcHRpb25dID0gdXNlU3RhdGUoJ2Fsb2phbWllbnRvcycpXHJcbiAgICBjb25zdCBbY2hvc2VuUGFjaywgc2V0Q2hvc2VuUGFja10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWFyY2hlZCwgc2V0U2VhcmNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Rlc3Rpbm8sIHNldERlc3Rpbm9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcm9vbSwgc2V0Um9vbXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICAgIGNvbnN0IFtyYW5nZURhdGUsIHNldFJhbmdlRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKVxyXG4gICAgY29uc3QgeyBSYW5nZVBpY2tlciB9ID0gRGF0ZVBpY2tlcjtcclxuICAgIGNvbnN0IGRhdGVGb3JtYXQgPSAnREQvTU0vWVlZWSc7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgLy8gICAgIHZhciBwbGFjZXMgPSByZXF1aXJlKCdwbGFjZXMuanMnKTtcclxuICAgIC8vICAgICB2YXIgcGxhY2VzQXV0b2NvbXBsZXRlID0gcGxhY2VzKHtcclxuICAgIC8vICAgICAgICAgYXBwSWQ6ICdwbDk5Mk1BUzNCMUwnLFxyXG4gICAgLy8gICAgICAgICBhcGlLZXk6ICdkOTY0NjA4YTAzZjkwMGRjMjdhOTYzZDdjMzk1M2M0NycsXHJcbiAgICAvLyAgICAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zyb20tY2l0eScpXHJcbiAgICAvLyAgICAgICB9KTtcclxuICAgIC8vIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG4gICAgY29uc3QgZ2V0RnJvbSA9ICgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcXVldGU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdhbG9qYW1pZW50b3MnOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhcXVldGUgPSAnYWxvamFtaWVudG9zJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGFxdWV0ZXMnIDpcclxuICAgICAgICAgICAgICAgIHBhcXVldGUgPSAncGFxdWV0ZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2V4Y3Vyc2lvbmVzJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcXVldGUgPSAnZXhjdXJzaW9uZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkZXN0aW5vY2l0eSA9IGRlc3Rpbm87XHJcbiAgICAgICAgICAgIGNvbnN0IGZlY2hhID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgY29uc3QgZmVjaGFmaW5hbCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZlY2hhcmFuZ2UgPSByYW5nZURhdGU7XHJcbiAgICAgICAgICAgIHNldENob3NlblBhY2soYEVsZWdpc3RlIGVsIHBhcXVldGUgJHtwYXF1ZXRlfSBjb24gZGVzdGlubyBhICR7ZGVzdGlub2NpdHl9IGVuIGxhIGZlY2hhICR7ZmVjaGFyYW5nZX0gY29uICR7cm9vbX1gKVxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0U2VhcmNoZWQodHJ1ZSk7XHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH1cclxuICAgIGNvbnN0IGdldERlc3Rpbm8gPSAodmFsdWUpID0+IHtcclxuICAgICAgICBzZXREZXN0aW5vKHZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0SGFiaXRhY2lvbiA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldFJvb21zKHZhbHVlKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8RmlsdGVyV3JhcHBlcj5cclxuICAgICAgICAgICAgPFA+RWxlZ8OtIHR1IHNlcnZpY2lvOjwvUD5cclxuICAgICAgICAgICAgPE9wdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8QW9wdGlvbnMgb25DbGljaz17KCkgPT4gc2V0T3B0aW9uKCdhbG9qYW1pZW50b3MnKX0gc2VsZWN0ZWQ9e29wdGlvbiA9PSAnYWxvamFtaWVudG9zJyA/IHRydWUgOiBmYWxzZX0+ICA8UmlIb3RlbEJlZExpbmUvPiBBbG9qYW1pZW50b3M8L0FvcHRpb25zPlxyXG4gICAgICAgICAgICAgICAgPEFvcHRpb25zIG9uQ2xpY2s9eygpID0+IHNldE9wdGlvbigncGFxdWV0ZXMnKX0gc2VsZWN0ZWQ9e29wdGlvbiA9PSAncGFxdWV0ZXMnID8gdHJ1ZSA6IGZhbHNlfT4gPEZhU3VpdGNhc2VSb2xsaW5nLz5QYXF1ZXRlczwvQW9wdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8QW9wdGlvbnMgb25DbGljaz17KCkgPT4gc2V0T3B0aW9uKCdleGN1cnNpb25lcycpfSBzZWxlY3RlZD17b3B0aW9uID09ICdleGN1cnNpb25lcycgPyB0cnVlIDogZmFsc2V9PiAgPEZhV2Fsa2luZy8+IEV4Y3Vyc2lvbmVzPC9Bb3B0aW9ucz5cclxuICAgICAgICAgICAgPC9PcHRpb25zPlxyXG4gICAgICAgICAgICA8RmlsdGVycz5cclxuICAgICAgICAgICAgICAgIHsvKiA8SW5wdXRQYWNrPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsSW5wdXQ+IE9yaWdlbjo8L0xhYmVsSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRGcm9tIHJlZj17ZnJvbUNpdHl9IHBsYWNlaG9sZGVyPVwiRGVzZGVcIiBpZD1cImZyb20tY2l0eVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0UGFjaz4gKi99XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9uID09IFwiZXhjdXJzaW9uZXNcIiB8fCBvcHRpb24gPT0gXCJwYXF1ZXRlc1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+IDwvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxJbnB1dFBhY2s+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWxJbnB1dD5EZXN0aW5vOjwvTGFiZWxJbnB1dD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc3Rpbm9cIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2dldERlc3Rpbm99XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkdlbmVyYWwgT2NhbXBvXCI+R2VuZXJhbCBPY2FtcG88L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiQ2hhbWljYWxcIj5DaGFtaWNhbDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJBcmF1Y29cIj5BcmF1Y288L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiQ29yb25lbCBGZWxpcGUgVmFyZWxhXCI+Q29yb25lbCBGZWxpcGUgVmFyZWxhPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkNhc3RybyBCYXJyb3NcIj5DYXN0cm8gQmFycm9zPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkNoaWxlY2l0b1wiPkNoaWxlY2l0bzwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJHZW5lcmFsIMOBbmdlbCBWaWNlbnRlIFBlw7FhbG96YVwiPkdlbmVyYWwgw4FuZ2VsIFZpY2VudGUgUGXDsWFsb3phPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkdlbmVyYWwgSnVhbiBGYWN1bmRvIFF1aXJvZ2FcIj5HZW5lcmFsIEp1YW4gRmFjdW5kbyBRdWlyb2dhPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlJvc2FyaW8gVmVyYSBQZcOxYWxvemFcIj5Sb3NhcmlvIFZlcmEgUGXDsWFsb3phPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkdlbmVyYWwgU2FuIE1hcnTDrW5cIj5HZW5lcmFsIFNhbiBNYXJ0w61uPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkZhbWF0aW5hXCI+RmFtYXRpbmE8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiU2FuIEJsYXMgZGUgbG9zIFNhdWNlc1wiPlNhbiBCbGFzIGRlIGxvcyBTYXVjZXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiSW5kZXBlbmRlbmNpYVwiPkluZGVwZW5kZW5jaWE8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiR2VuZXJhbCBCZWxncmFub1wiPkdlbmVyYWwgQmVsZ3Jhbm88L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiU2FuYWdhc3RhXCI+U2FuYWdhc3RhPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkxhIFJpb2phXCI+TGEgUmlvamE8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dFBhY2s+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge29wdGlvbiA9PSBcImV4Y3Vyc2lvbmVzXCIgfHwgb3B0aW9uID09IFwicGFxdWV0ZXNcIj8gKFxyXG4gICAgICAgICAgICAgICAgICAgICA8SW5wdXRQYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICA8TGFiZWxJbnB1dD5TYWxpZGFzOjwvTGFiZWxJbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgey8qIDxEYXRlUGlja2VyIHNpemU9XCJsYXJnZVwiIGRlZmF1bHRWYWx1ZT17bW9tZW50KCl9IG9uQ2hhbmdlPXsoZGF0ZSwgZGF0ZXRvc3RyaW5nKT0+IHNldFN0YXJ0RGF0ZShkYXRldG9zdHJpbmcpfSBmb3JtYXQ9e2RhdGVGb3JtYXR9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBkaXNhYmxlZERhdGU9e2N1cnJlbnQgPT4ge3JldHVybiBjdXJyZW50ICYmIGN1cnJlbnQgPCBtb21lbnQoKX0gfSBzaXplPVwibGFyZ2VcIiBvbkNoYW5nZT17KGRhdGUsIGRhdGV0b3N0cmluZyk9PiBzZXRTdGFydERhdGUoZGF0ZXRvc3RyaW5nKX0gZm9ybWF0PXtkYXRlRm9ybWF0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRQYWNrPlxyXG4gICAgICAgICAgICAgICAgKTogKFxyXG4gICAgICAgICAgICAgICAgPElucHV0UGFjaz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbElucHV0PklkYSB5IFZ1ZWx0YTo8L0xhYmVsSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICB7LyogPERhdGVQaWNrZXIgc2l6ZT1cImxhcmdlXCIgZGVmYXVsdFZhbHVlPXttb21lbnQoKX0gb25DaGFuZ2U9eyhkYXRlLCBkYXRldG9zdHJpbmcpPT4gc2V0U3RhcnREYXRlKGRhdGV0b3N0cmluZyl9IGZvcm1hdD17ZGF0ZUZvcm1hdH0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8UmFuZ2VQaWNrZXIgZGlzYWJsZWREYXRlPXtjdXJyZW50ID0+IHtyZXR1cm4gY3VycmVudCAmJiBjdXJyZW50IDwgbW9tZW50KCl9IH0gc2l6ZT1cImxhcmdlXCIgb25DaGFuZ2U9eyhkYXRlLCBkYXRldG9zdHJpbmcpPT4gc2V0UmFuZ2VEYXRlKGRhdGV0b3N0cmluZyl9IGZvcm1hdD17ZGF0ZUZvcm1hdH0vPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dFBhY2s+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogPElucHV0UGFjaz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbElucHV0PiBWdWVsdGE6PC9MYWJlbElucHV0PlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgc2l6ZT1cImxhcmdlXCIgZGVmYXVsdFZhbHVlPXttb21lbnQoKX0gb25DaGFuZ2U9eyhkYXRlLCBkYXRldG9zdHJpbmcpPT4gc2V0RW5kRGF0ZShkYXRldG9zdHJpbmcpfSBmb3JtYXQ9e2RhdGVGb3JtYXR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0UGFjaz4gKi99XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9uID09IFwiZXhjdXJzaW9uZXNcIiB8fCBvcHRpb24gPT0gXCJwYXF1ZXRlc1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFBhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsSW5wdXQ+Q2FudGlkYWQgZGUgcGVyc29uYXM6PC9MYWJlbElucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhbnRpZGFkIGRlIHBlcnNvbmFzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Z2V0SGFiaXRhY2lvbn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIxXCI+MTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMlwiPjI8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCI0XCI+NDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiNVwiPjU8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjZcIj42PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCI3XCI+NzwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiOFwiPjg8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjlcIj45PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIxMCtcIj4xMCBvIG3DoXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0UGFjaz5cclxuICAgICAgICAgICAgICAgICk6IChcclxuICAgICAgICAgICAgICAgIDxJbnB1dFBhY2s+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWxJbnB1dD5IYWJpdGFjaW9uZXM6PC9MYWJlbElucHV0PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGFiaXRhY2lvbmVzIGEgZWxlZ2lyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtnZXRIYWJpdGFjaW9ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJoYWJpdGFjaW9uICsgMSBjYW1hXCI+SGFiaXRhY2nDs24gKyAxIGNhbWE8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaGFiaXRhY2lvbiArIDIgY2FtYXNcIj5IYWJpdGFjacOzbiArIDIgY2FtYXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMiBoYWJpdGFjaW9uZXNcIj4yIGhhYml0YWNpb25lczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0UGFjaz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0ZpbHRlcnM+XHJcbiAgICAgICAgICAgIDxCdG5TZWFyY2hGaWx0ZXIgb25DbGljaz17Z2V0RnJvbX0+IEJ1c2NhciA8UmlTZWFyY2gyTGluZS8+ICA8L0J0blNlYXJjaEZpbHRlcj5cclxuICAgICAgICA8L0ZpbHRlcldyYXBwZXI+XHJcbiAgICAgICAgPGg0PiB7Y2hvc2VuUGFja30gPC9oND4gXHJcbiAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxTcGluV3JhcHBlcj5cclxuICAgICAgICAgICAgPFNwaW4gc2l6ZT1cImxhcmdlXCIvPlxyXG4gICAgICAgICAgICA8L1NwaW5XcmFwcGVyPlxyXG4gICAgICAgICkgOiBzZWFyY2hlZCA/IChcclxuICAgICAgICAgICAgPFNlYXJjaFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICB7b2ZmZXJzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hXcmFwcCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWdTZWFyY2ggc3JjPXtpdGVtLnBpY3R1cmV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4ge2l0ZW0udGl0bGV9IDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ge2l0ZW0ucHJpY2V9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3hXcmFwcD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9TZWFyY2hXcmFwcGVyPlxyXG4gICAgICAgICkgOiA8PiA8Lz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyU2VhcmNoIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDQlIDglIDQlIDglO1xyXG4gIGhlaWdodDozMHZoO1xyXG4gIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IExvZ29JbWcgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOjcwJTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFBUYWcgPSBzdHlsZWQucGBcclxuICBmb250LWZhbWlseTonT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXdlaWdodDo2MDA7XHJcbiAgZm9udC1zaXplOjAuOHJlbTsgXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBMYVJpb2phV3JhcHBlciA9IHN0eWxlZC5pbWdgXHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgYm90dG9tOjA7XHJcbiAgcmlnaHQ6MDtcclxuICB3aWR0aDozMnZ3O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgd2lkdGg6NzV2dztcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBEb3NjaWVudG9zV3JhcHBlciA9IHN0eWxlZC5pbWdgXHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5ib3R0b206MDtcclxucmlnaHQ6MzIlO1xyXG53aWR0aDo4dnc7XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGxlZnQ6NXZ3O1xyXG4gIHdpZHRoOjI0dnc7XHJcbn1cclxuYDtcclxuZXhwb3J0IGNvbnN0IE1pbmlzdGVyaW9XcmFwcGVyID0gc3R5bGVkLmltZ2Bcclxud2lkdGg6IDI4dnc7XHJcbmxlZnQ6IDh2dztcclxuYm90dG9tOiAzdnc7XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIHdpZHRoOjYwdnc7XHJcbn1cclxuYDtcclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gXHJcbiAgICByZXR1cm4gKCAgXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxGb290ZXJXcmFwcGVyPlxyXG4gICAgICAgICAgICA8TWluaXN0ZXJpb1dyYXBwZXIgc3JjPVwiL3BpZV9sb2dvMS5wbmdcIi8+XHJcbiAgICAgICAgICAgIDxEb3NjaWVudG9zV3JhcHBlciBzcmM9XCIvcGllX2xvZ28yLnBuZ1wiLz5cclxuICAgICAgICAgICAgPExhUmlvamFXcmFwcGVyIHNyYz1cIi9waWVfbG9nbzMucG5nXCIvPiBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9Gb290ZXJXcmFwcGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgUmVhY3QseyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAemVpdC11aS9yZWFjdCdcclxuaW1wb3J0IHsgRmlTaG9wcGluZ0JhZywgRmlTdW4sIEZpSW5mbywgRmlNZXNzYWdlQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7R29DYWxlbmRhcn0gZnJvbSAncmVhY3QtaWNvbnMvZ28nXHJcbmltcG9ydCB7IE1kRGlyZWN0aW9uc0Jpa2UsIE1kSG9tZX0gZnJvbSAncmVhY3QtaWNvbnMvbWQnXHJcbmltcG9ydCB7UmlBY2NvdW50UGluQm94TGluZSwgUmlTaG9wcGluZ0NhcnQyTGluZX0gZnJvbSAncmVhY3QtaWNvbnMvcmknXHJcbmltcG9ydCB1c2VTV1IsIHsgbXV0YXRlIH0gZnJvbSAnc3dyJ1xyXG5pbXBvcnQge0NvbnRleHRTdGF0ZX0gZnJvbSAnLi4vY29udGV4dC9nbG9iYWwnXHJcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSAnQHplaXQtdWkvcmVhY3QnXHJcblxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGZldGNoZXIgPSB1cmwgPT4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUignL2FwaS91c2VyJywgZmV0Y2hlcilcclxuXHJcbiAgIGNvbnN0IFtpdGVtQ2FydCwgc2V0SXRlbUNhcnRdID0gdXNlQ29udGV4dChDb250ZXh0U3RhdGUpXHJcblxyXG4gICBjb25zb2xlLmxvZyhpdGVtQ2FydCwgJ2NhcnQnKVxyXG4gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgey8qIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCIvZmF2aWNvbi0zMngzMi5wbmdcIiAvPiAqL31cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvbnByb2dyZXNzLmNzc1wiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2FybGE6NDAwLDcwMCw3MDBpJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgIFxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8SGVhZGVyV3JhcHBlcj5cclxuICAgICAgICAgICAgPExvZ29XcmFwcGVyIHNyYz1cIi9sb2dvdjMucG5nXCIgLz5cclxuICAgICAgICAgICAgPE1lbnVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPEZpcnN0TWVudT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFUYWc+PE1kSG9tZSBzaXplPVwiMjBweFwiIC8+IEluaWNpbyA8L0FUYWc+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjdGl2aWRhZGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFUYWc+IDxNZERpcmVjdGlvbnNCaWtlIHNpemU9XCIyMHB4XCIvPiBRdWUgaGFjZXIgPC9BVGFnPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXNlcnZhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBVGFnPjxHb0NhbGVuZGFyIHNpemU9XCIxOHB4XCIvPlJlc2VydsOhPC9BVGFnPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kZXNjdWJyaXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QVRhZz48RmlTdW4gc2l6ZT1cIjE4cHhcIi8+RGVzY3VicmlsYSA8L0FUYWc+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luZm9ybWFjaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFUYWc+PEZpSW5mbyBzaXplPVwiMThweFwiLz5JbmZvcm1hY2nDs24gPC9BVGFnPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBVGFnPjxGaU1lc3NhZ2VDaXJjbGUgc2l6ZT1cIjE4cHhcIi8+IENvbnRhY3RvIDwvQVRhZz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvRmlyc3RNZW51PlxyXG4gICAgICAgICAgICAgICAgPFNlY29uZE1lbnU+XHJcbiAgICAgICAgICAgICAgICB7IWRhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRVc2VySW5mbz4gLi4uIDwvSGVhZFVzZXJJbmZvPlxyXG4gICAgICAgICAgICAgICAgKTogZGF0YS5hdXRoICYmIGRhdGEuYXV0aC50b2tlbiA/ICg8SGVhZFVzZXJJbmZvPiB7ZGF0YS5hdXRoLnVzZXJ9IDwvSGVhZFVzZXJJbmZvPikgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmdyZXNhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdXRoV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFUYWcgc2l6ZT1cIjAuOHJlbVwiPiBJbmdyZXNhcjwvQVRhZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpQWNjb3VudFBpbkJveExpbmUgc2l6ZT1cIjIwcHhcIiBjb2xvcj1cIiM0YzRjNGNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9BdXRoV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8Q2Fycml0b1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFUYWc+PFJpU2hvcHBpbmdDYXJ0MkxpbmUgY29sb3I9XCIjMzMzXCIgc2l6ZT1cIjIycHhcIi8+IDwvQVRhZz5cclxuICAgICAgICAgICAgICAgIDxwPiB7aXRlbUNhcnQ/Lmxlbmd0aCA+IDAgPyAoPEJhZGdlIHNpemU9XCJtaW5pXCI+e2l0ZW1DYXJ0Lmxlbmd0aH08L0JhZGdlPiApIDogJyd9IDwvcD5cclxuICAgICAgICAgICAgICAgIDwvQ2Fycml0b1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvU2Vjb25kTWVudT5cclxuICAgICAgICAgICAgPC9NZW51V3JhcHBlcj5cclxuICAgICAgICA8L0hlYWRlcldyYXBwZXI+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6MCUgNyUgMCUgNyU7XHJcbmJvcmRlci10b3A6MXB4IHNvbGlkO1xyXG53aWR0aDoxMDAlO1xyXG5wb3NpdGlvbjpmaXhlZDtcclxuYm94LXNpemluZzpib3JkZXItYm94O1xyXG5oZWlnaHQ6MTB2aDtcclxuYmFja2dyb3VuZDp3aGl0ZTtcclxuZGlzcGxheTpncmlkO1xyXG56LWluZGV4OjEyMDA7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczoxOCUgMWZyO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbiY6OmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxyZ2JhKDksMzAsNjYsMC4xMykgMCxyZ2JhKDksMzAsNjYsMC4xMykgMXB4LHJnYmEoOSwzMCw2NiwwLjA4KSAxcHgscmdiYSg5LDMwLDY2LDApIDRweCk7XHJcbn1cclxufVxyXG4vLyAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuLy8gLW1vei1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbi8vIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnI7XHJcbiAgICBncmlkLXJvdy1nYXA6MXZoO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBwYWRkaW5nOjIlIDMlIDIlIDMlO1xyXG4gICAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgTG9nb1dyYXBwZXIgPSBzdHlsZWQuaW1nYFxyXG5tYXJnaW46MDtcclxubWF4LXdpZHRoOjEydnc7XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5tYXgtd2lkdGg6NDV2dzsgICAgXHJcbn1cclxuYDtcclxuZXhwb3J0IGNvbnN0IE1lbnVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6NjAlIDQwJTtcclxuZ3JpZC1jb2x1bW4tZ2FwOjJ2dztcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxuXHJcbn1cclxuYDtcclxuZXhwb3J0IGNvbnN0IEFUYWcgPSBzdHlsZWQuYWBcclxuZGlzcGxheTogZ3JpZDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmNvbG9yOiAjNGM0YzRjO1xyXG5mb250LXdlaWdodDogNzAwO1xyXG5qdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbmZvbnQtc2l6ZToke3Byb3BzID0+IHByb3BzLnNpemUgPyBwcm9wcy5zaXplIDogJzAuN3JlbSd9O1xyXG5mb250LWZhbWlseTonT3BlbiBTYW5zJyxzYW5zLXNlcmlmO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQ2Fycml0b1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEF1dGhXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5gO1xyXG4gZXhwb3J0IGNvbnN0IFBUYWcgPSBzdHlsZWQucGBcclxuZm9udC1mYW1pbHk6J09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbmZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy5zaXplID8gcHJvcHMuc2l6ZSA6ICcwLjhyZW0nfTtcclxuY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3IgPyBwcm9wcy5jb2xvciA6ICcjMzMzJ307XHJcbiBgO1xyXG5leHBvcnQgY29uc3QgU2Vjb25kTWVudSA9IHN0eWxlZC5kaXZgXHJcbmp1c3RpZnktY29udGVudDplbmQ7XHJcbmRpc3BsYXk6Z3JpZDtcclxuZ3JpZC1jb2x1bW4tZ2FwOjJ2dztcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6NnZ3IDd2dztcclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbmRpc3BsYXk6bm9uZTsgXHJcbn1cclxuYDtcclxuZXhwb3J0IGNvbnN0IEZpcnN0TWVudSA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEhlYWRVc2VySW5mbyA9IHN0eWxlZC5wYFxyXG5mb250LWZhbWlseTonT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuY29sb3I6IzMzMztcclxuZm9udC13ZWlnaHQ6NjAwO1xyXG5tYXJnaW46IDAgLTJ2dyAwIC0zdnc7XHJcbmZvbnQtc2l6ZTowLjhyZW07XHJcbmA7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcclxuXHJcbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW4sIHRpdGxlID0gJycsIGlzQXV0aCA9IGZhbHNlfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1pbmltdW0tc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNvbXByw6EgdHUgcGFxdWV0ZSBkZSB2aWFqZXMgTGEgUmlvamFcIi8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSw0MDA7MSw1MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANDAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dFN0YXRlID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2l0ZW1DYXJ0LCBzZXRJdGVtQ2FydF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGdldExvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuICAgICAgbGV0IGluaXRpYWxRdHkgPSAwO1xyXG4gICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RfY2FydCcpID09PSBudWxsKXtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdF9jYXJ0JywgSlNPTi5zdHJpbmdpZnkoW10pKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgbG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdF9jYXJ0JykpO1xyXG4gICAgICAvLyBpZihsb2NhbC5sZW5ndGggPiAwKXtcclxuICAgICAgLy8gICBsb2NhbC5tYXAoaXRlbSA9PiB7XHJcbiAgICAgIC8vICAgICBpbml0aWFsUXR5ICs9IHBhcnNlSW50KGl0ZW0ucXVhbnRpdHkpO1xyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vIH1cclxuICAgICAgcmV0dXJuIGxvY2FsO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcclxuICAgIHNldEl0ZW1DYXJ0KHN0b3JhZ2UpO1xyXG4gIH0sIFtdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Q29udGV4dFN0YXRlLlByb3ZpZGVyIHZhbHVlPXtbaXRlbUNhcnQsIHNldEl0ZW1DYXJ0XX0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9Db250ZXh0U3RhdGUuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNsdWdpZnkoc3RyaW5nKSB7XHJcbiAgICBjb25zdCBhID0gJ8Ogw6HDosOkw6bDo8OlxIHEg8SFw6fEh8SNxJHEj8Oow6nDqsOrxJPEl8SZxJvEn8e14binw67Dr8OtxKvEr8OsxYLhuL/DscWEx7nFiMO0w7bDssOzxZPDuMWNw7XFkeG5lcWVxZnDn8WbxaHFn8iZxaXIm8O7w7zDucO6xavHmMWvxbHFs+G6g+G6jcO/w73FvsW6xbzCty9fLDo7J1xyXG4gICAgY29uc3QgYiA9ICdhYWFhYWFhYWFhY2NjZGRlZWVlZWVlZWdnaGlpaWlpaWxtbm5ubm9vb29vb29vb3BycnNzc3NzdHR1dXV1dXV1dXV3eHl5enp6LS0tLS0tJ1xyXG4gICAgY29uc3QgcCA9IG5ldyBSZWdFeHAoYS5zcGxpdCgnJykuam9pbignfCcpLCAnZycpXHJcbiAgXHJcbiAgICByZXR1cm4gc3RyaW5nLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKVxyXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpIC8vIFJlcGxhY2Ugc3BhY2VzIHdpdGggLVxyXG4gICAgICAucmVwbGFjZShwLCBjID0+IGIuY2hhckF0KGEuaW5kZXhPZihjKSkpIC8vIFJlcGxhY2Ugc3BlY2lhbCBjaGFyYWN0ZXJzXHJcbiAgICAgIC5yZXBsYWNlKC8mL2csICctYW5kLScpIC8vIFJlcGxhY2UgJiB3aXRoICdhbmQnXHJcbiAgICAgIC5yZXBsYWNlKC9bXlxcd1xcLV0rL2csICcnKSAvLyBSZW1vdmUgYWxsIG5vbi13b3JkIGNoYXJhY3RlcnNcclxuICAgICAgLnJlcGxhY2UoL1xcLVxcLSsvZywgJy0nKSAvLyBSZXBsYWNlIG11bHRpcGxlIC0gd2l0aCBzaW5nbGUgLVxyXG4gICAgICAucmVwbGFjZSgvXi0rLywgJycpIC8vIFRyaW0gLSBmcm9tIHN0YXJ0IG9mIHRleHRcclxuICAgICAgLnJlcGxhY2UoLy0rJC8sICcnKSAvLyBUcmltIC0gZnJvbSBlbmQgb2YgdGV4dFxyXG4gIH0iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xyXG5pbXBvcnQge1JpQXJyb3dSaWdodFNMaW5lLCBSaUFycm93TGVmdFNMaW5lfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcclxuaW1wb3J0IENhcm91c2VsT2ZmZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvQ2Fyb3VzZWxPZmZlcnMnXHJcbmltcG9ydCBGaWx0ZXJTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9GaWx0ZXJTZWFyY2gnXHJcblxyXG5leHBvcnQgY29uc3QgTWFpbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIFxyXG5gO1xyXG5leHBvcnQgY29uc3QgSW5kZXhXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOjEwJSA4JSAyJSA4JTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBoZWlndGg6MTIwdmg7XHJcbiAgbWluLWhlaWdodDoxMjB2aDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBwYWRkaW5nOjUwJSAzJSAzJSAzJTsgIFxyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFRpdGxlaDEgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1mYW1pbHk6J09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBQb3J0YWRhVHVyaXNtbyA9IHN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQ6IzVmMDcxMDtcclxubWFyZ2luOiAwIDAgMTB2aCAwO1xyXG5wYWRkaW5nOjEwcHg7XHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG53aWR0aDoxMDAlO1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxuaGVpZ2h0OjQwdmg7XHJcbmRpc3BsYXk6Z3JpZDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjcwJSAxNSUgMTUlO1xyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBoZWlnaHQ6MjV2aDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czphdXRvO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtZmFtaWx5OidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yID8gcHJvcHMuY29sb3IgOiAnI2ExYTFhMSd9O1xyXG4gIGZvbnQtc2l6ZToke3Byb3BzID0+IHByb3BzLnNpemUgPyBwcm9wcy5zaXplIDogJzEuOHJlbSd9O1xyXG4gIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IHByb3BzLndlaWdodCA/IHByb3BzLndlaWdodCA6ICc2MDAnfTtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBQVGFnID0gc3R5bGVkLnBgXHJcbmZvbnQtZmFtaWx5OidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5saW5lLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5saW5lID8gcHJvcHMubGluZSA6ICcxLjInfTtcclxuZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnNpemUgPyBwcm9wcy5zaXplIDogJzAuOHJlbSd9O1xyXG5jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvciA/IHByb3BzLmNvbG9yIDogJyMzMzMnfTtcclxuZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMud2VpZ2h0ID8gcHJvcHMud2VpZ2h0IDogJzUwMCd9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJlID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1zaXplOjEuNHJlbTtcclxuICBjb2xvcjojMzkzOTM5O1xyXG4gIGZvbnQtd2VpZ2h0OjcwMDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IE1vdmV0ZUltZyA9IHN0eWxlZC5pbWdgXHJcbndpZHRoOiA1MSU7XHJcbmp1c3RpZnktc2VsZjogY2VudGVyO1xyXG5hbGlnbi1zZWxmOiBjZW50ZXI7XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIHdpZHRoOjc4JTsgXHJcbiAgbWFyZ2luOiAwIDE0dncgMCAwO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IExpbmVhc0ltZyA9IHN0eWxlZC5pbWdgXHJcbm9iamVjdC1maXQ6IGNvbnRhaW47XHJcbmhlaWdodDogMTAwJTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IExpbmVhc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjA7XHJcbmhlaWdodDogMTAwJTtcclxucmlnaHQ6NXZ3O1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIC8vaHR0cHM6Ly9qb25hdGhhbmdhYnJpZWwudmVyY2VsLmFwcC9hcGkvcmVnaXN0cmFyXHJcblxyXG4gICAgY29uc3QgW3JlZGF0YSwgc2V0UmVkYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcGFja2FnZXMsIHNldFBhY2thZ2VzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQYWNrYWdlcygpIFxyXG4gICAgICB7XHJcbiAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cubHJzZWd1cmlkYWQuY29tLmFyL3R1cmlzbW9yZXN0L3B1YmxpYy9hcGkvcGFxdWV0ZXB1YmxpY29zYCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfVxyXG4gICAgIFxyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZ2V0UGFja2FnZXMoKS50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgIHNldFBhY2thZ2VzKHJlc3ApXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcCwgJ2FsbCBwYXF1ZXRlcycpXHJcbiAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8TWFpbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXhXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3J0YWRhVHVyaXNtbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmV0ZUltZyBzcmM9XCIvbW92ZXRldjEucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluZWFzV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluZWFzSW1nIHNyYz1cIi9saW5lYXNncmFuZGUucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbmVhc1dyYXBwZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9ydGFkYVR1cmlzbW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlclNlYXJjaCBvZmZlcnM9e3BhY2thZ2VzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsT2ZmZXJzIG9mZmVycz17cGFja2FnZXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPENhcm91c2VsT2ZmZXJzIG9mZmVycz17cGFja2FnZXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxPZmZlcnMgb2ZmZXJzPXtwYWNrYWdlc30vPiAqL31cclxuICAgICAgICAgICAgICAgIDwvSW5kZXhXcmFwcGVyPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L01haW5XcmFwcGVyPlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAemVpdC11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9kYXRlLXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9zZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvc3BpblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9maVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9nb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9yaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=