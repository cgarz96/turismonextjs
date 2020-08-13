webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default, HeaderWrapper, LogoWrapper, MenuWrapper, ATag, CarritoWrapper, AuthWrapper, PTag, SecondMenu, FirstMenu, HeadUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWrapper", function() { return HeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoWrapper", function() { return LogoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuWrapper", function() { return MenuWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATag", function() { return ATag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoWrapper", function() { return CarritoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthWrapper", function() { return AuthWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PTag", function() { return PTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondMenu", function() { return SecondMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstMenu", function() { return FirstMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadUserInfo", function() { return HeadUserInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _zeit_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zeit-ui/react */ "./node_modules/@zeit-ui/react/dist/index.js");
/* harmony import */ var _zeit_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_zeit_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/go */ "./node_modules/react-icons/go/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _context_global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/global */ "./context/global.js");
var _this = undefined,
    _jsxFileName = "C:\\next\\lariojaturismo\\components\\Header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var Header = function Header() {
  _s();

  var fetcher = function fetcher(url) {
    return fetch(url).then(function (r) {
      return r.json();
    });
  };

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_10__["default"])('/api/user', fetcher),
      data = _useSWR.data;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global__WEBPACK_IMPORTED_MODULE_11__["ContextState"]),
      itemCart = _useContext[0],
      setItemCart = _useContext[1];

  console.log(itemCart, 'cart');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/nprogress.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Karla:400,700,700i&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })), __jsx(HeaderWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(LogoWrapper, {
    src: "/logov3.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx(MenuWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(FirstMenu, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdHome"], {
    size: "20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 27
    }
  }), " Inicio ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/actividades",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, " ", __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdDirectionsBike"], {
    size: "20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 28
    }
  }), " Que hacer ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/reservas",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_7__["GoCalendar"], {
    size: "18px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 27
    }
  }), "Reserv\xE1")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/descubrir",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiSun"], {
    size: "18px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 27
    }
  }), "Descubrila ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/informacion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiInfo"], {
    size: "18px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 27
    }
  }), "Informaci\xF3n ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contacto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiMessageCircle"], {
    size: "18px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 27
    }
  }), " Contacto "))), __jsx(SecondMenu, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, !data ? __jsx(HeadUserInfo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, " ... ") : data.auth && data.auth.token ? __jsx(HeadUserInfo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 52
    }
  }, " ", data.auth.user, " ") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/ingresar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx(AuthWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx(ATag, {
    size: "0.8rem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, " Ingresar"), __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__["RiAccountPinBoxLine"], {
    size: "20px",
    color: "#4c4c4c",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }))), __jsx(CarritoWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__["RiShoppingCart2Line"], {
    color: "#333",
    size: "22px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 27
    }
  }), " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, " ", (itemCart === null || itemCart === void 0 ? void 0 : itemCart.length) > 0 ? __jsx(_zeit_ui_react__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
    size: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 46
    }
  }, itemCart.length) : '', " "))))));
};

_s(Header, "8NQ9Nziq9VnpBDe/zpfQjvhHcKM=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_10__["default"]];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);
var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Header__HeaderWrapper",
  componentId: "sc-1z0k1lm-0"
})(["padding:0% 7% 0% 7%;border-top:1px solid;width:100%;position:fixed;box-sizing:border-box;height:10vh;background:white;display:grid;z-index:1200;grid-template-columns:18% 1fr;align-items:center;&::after{content:\"\";position:absolute;left:0;right:0;top:100%;height:4px;background:linear-gradient(180deg,rgba(9,30,66,0.13) 0,rgba(9,30,66,0.13) 1px,rgba(9,30,66,0.08) 1px,rgba(9,30,66,0) 4px);}}@media (max-width:600px){grid-template-columns:1fr;grid-template-rows:1fr 1fr;grid-row-gap:1vh;height:auto;padding:2% 3% 2% 3%;}"]);
_c2 = HeaderWrapper;
var LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img.withConfig({
  displayName: "Header__LogoWrapper",
  componentId: "sc-1z0k1lm-1"
})(["margin:0;max-width:12vw;@media (max-width:600px){max-width:45vw;}"]);
_c3 = LogoWrapper;
var MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Header__MenuWrapper",
  componentId: "sc-1z0k1lm-2"
})(["display:grid;grid-template-columns:60% 40%;grid-column-gap:2vw;align-items:center;@media (max-width:600px){grid-template-columns:1fr;}"]);
_c4 = MenuWrapper;
var ATag = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].a.withConfig({
  displayName: "Header__ATag",
  componentId: "sc-1z0k1lm-3"
})(["display:grid;justify-content:center;color:#4c4c4c;font-weight:700;justify-items:center;font-size:", ";font-family:'Open Sans',sans-serif;"], function (props) {
  return props.size ? props.size : '0.7rem';
});
_c5 = ATag;
var CarritoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Header__CarritoWrapper",
  componentId: "sc-1z0k1lm-4"
})(["display:flex;justify-content:space-around;"]);
_c6 = CarritoWrapper;
var AuthWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Header__AuthWrapper",
  componentId: "sc-1z0k1lm-5"
})(["display:flex;justify-content:space-around;"]);
_c7 = AuthWrapper;
var PTag = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "Header__PTag",
  componentId: "sc-1z0k1lm-6"
})(["font-family:'Open Sans',sans-serif;font-size:", ";color:", ";"], function (props) {
  return props.size ? props.size : '0.8rem';
}, function (props) {
  return props.color ? props.color : '#333';
});
var SecondMenu = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Header__SecondMenu",
  componentId: "sc-1z0k1lm-7"
})(["justify-content:end;display:grid;grid-column-gap:2vw;align-items:center;grid-template-columns:6vw 7vw;@media (max-width:600px){display:none;}"]);
_c8 = SecondMenu;
var FirstMenu = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Header__FirstMenu",
  componentId: "sc-1z0k1lm-8"
})(["display:flex;justify-content:space-around;"]);
_c9 = FirstMenu;
var HeadUserInfo = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "Header__HeadUserInfo",
  componentId: "sc-1z0k1lm-9"
})(["font-family:'Open Sans',sans-serif;color:#333;font-weight:600;margin:0 -2vw 0 -3vw;font-size:0.8rem;"]);
_c10 = HeadUserInfo;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "Header");
$RefreshReg$(_c2, "HeaderWrapper");
$RefreshReg$(_c3, "LogoWrapper");
$RefreshReg$(_c4, "MenuWrapper");
$RefreshReg$(_c5, "ATag");
$RefreshReg$(_c6, "CarritoWrapper");
$RefreshReg$(_c7, "AuthWrapper");
$RefreshReg$(_c8, "SecondMenu");
$RefreshReg$(_c9, "FirstMenu");
$RefreshReg$(_c10, "HeadUserInfo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJ1c2VTV1IiLCJkYXRhIiwidXNlQ29udGV4dCIsIkNvbnRleHRTdGF0ZSIsIml0ZW1DYXJ0Iiwic2V0SXRlbUNhcnQiLCJjb25zb2xlIiwibG9nIiwiYXV0aCIsInRva2VuIiwidXNlciIsImxlbmd0aCIsIkhlYWRlcldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJMb2dvV3JhcHBlciIsImltZyIsIk1lbnVXcmFwcGVyIiwiQVRhZyIsImEiLCJwcm9wcyIsInNpemUiLCJDYXJyaXRvV3JhcHBlciIsIkF1dGhXcmFwcGVyIiwiUFRhZyIsInAiLCJjb2xvciIsIlNlY29uZE1lbnUiLCJGaXJzdE1lbnUiLCJIZWFkVXNlckluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBRWpCLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLEdBQUc7QUFBQSxXQUFJQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNDLElBQUYsRUFBSjtBQUFBLEtBQWpCLENBQUo7QUFBQSxHQUFuQjs7QUFGaUIsZ0JBR0FDLG9EQUFNLENBQUMsV0FBRCxFQUFjTixPQUFkLENBSE47QUFBQSxNQUdUTyxJQUhTLFdBR1RBLElBSFM7O0FBQUEsb0JBS2NDLHdEQUFVLENBQUNDLDZEQUFELENBTHhCO0FBQUEsTUFLWEMsUUFMVztBQUFBLE1BS0RDLFdBTEM7O0FBT2xCQyxTQUFP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QUlBLEtBQUssQ0FBQ00sS0FBTixHQUFjTixLQUFLLENBQUNNLEtBQXBCLEdBQTRCLE1BQWhDO0FBQUEsQ0FISSxDQUFWO0FBS0QsSUFBTUMsVUFBVSxHQUFHZCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFKQUFoQjtNQUFNYSxVO0FBVU4sSUFBTUMsU0FBUyxHQUFHZix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtEQUFmO01BQU1jLFM7QUFJTixJQUFNQyxZQUFZLEdBQUdoQix5REFBTSxDQUFDWSxDQUFWO0FBQUE7QUFBQTtBQUFBLDRHQUFsQjtPQUFNSSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wZWY2NjJmY2IwYWZmNDczYThkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQHplaXQtdWkvcmVhY3QnXHJcbmltcG9ydCB7IEZpU2hvcHBpbmdCYWcsIEZpU3VuLCBGaUluZm8sIEZpTWVzc2FnZUNpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQge0dvQ2FsZW5kYXJ9IGZyb20gJ3JlYWN0LWljb25zL2dvJ1xyXG5pbXBvcnQgeyBNZERpcmVjdGlvbnNCaWtlLCBNZEhvbWV9IGZyb20gJ3JlYWN0LWljb25zL21kJ1xyXG5pbXBvcnQge1JpQWNjb3VudFBpbkJveExpbmUsIFJpU2hvcHBpbmdDYXJ0MkxpbmV9IGZyb20gJ3JlYWN0LWljb25zL3JpJ1xyXG5pbXBvcnQgdXNlU1dSLCB7IG11dGF0ZSB9IGZyb20gJ3N3cidcclxuaW1wb3J0IHtDb250ZXh0U3RhdGV9IGZyb20gJy4uL2NvbnRleHQvZ2xvYmFsJ1xyXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJ0B6ZWl0LXVpL3JlYWN0J1xyXG5cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBmZXRjaGVyID0gdXJsID0+IGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKVxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoJy9hcGkvdXNlcicsIGZldGNoZXIpXHJcblxyXG4gICBjb25zdCBbaXRlbUNhcnQsIHNldEl0ZW1DYXJ0XSA9IHVzZUNvbnRleHQoQ29udGV4dFN0YXRlKVxyXG5cclxuICAgY29uc29sZS5sb2coaXRlbUNhcnQsICdjYXJ0JylcclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIHsvKiA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL25wcm9ncmVzcy5jc3NcIiAvPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthcmxhOjQwMCw3MDAsNzAwaSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICBcclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEhlYWRlcldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxMb2dvV3JhcHBlciBzcmM9XCIvbG9nb3YzLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxNZW51V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxGaXJzdE1lbnU+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBVGFnPjxNZEhvbWUgc2l6ZT1cIjIwcHhcIiAvPiBJbmljaW8gPC9BVGFnPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY3RpdmlkYWRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBVGFnPiA8TWREaXJlY3Rpb25zQmlrZSBzaXplPVwiMjBweFwiLz4gUXVlIGhhY2VyIDwvQVRhZz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzZXJ2YXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QVRhZz48R29DYWxlbmRhciBzaXplPVwiMThweFwiLz5SZXNlcnbDoTwvQVRhZz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGVzY3VicmlyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFUYWc+PEZpU3VuIHNpemU9XCIxOHB4XCIvPkRlc2N1YnJpbGEgPC9BVGFnPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmZvcm1hY2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBVGFnPjxGaUluZm8gc2l6ZT1cIjE4cHhcIi8+SW5mb3JtYWNpw7NuIDwvQVRhZz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QVRhZz48RmlNZXNzYWdlQ2lyY2xlIHNpemU9XCIxOHB4XCIvPiBDb250YWN0byA8L0FUYWc+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0ZpcnN0TWVudT5cclxuICAgICAgICAgICAgICAgIDxTZWNvbmRNZW51PlxyXG4gICAgICAgICAgICAgICAgeyFkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkVXNlckluZm8+IC4uLiA8L0hlYWRVc2VySW5mbz5cclxuICAgICAgICAgICAgICAgICk6IGRhdGEuYXV0aCAmJiBkYXRhLmF1dGgudG9rZW4gPyAoPEhlYWRVc2VySW5mbz4ge2RhdGEuYXV0aC51c2VyfSA8L0hlYWRVc2VySW5mbz4pIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5ncmVzYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXV0aFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBVGFnIHNpemU9XCIwLjhyZW1cIj4gSW5ncmVzYXI8L0FUYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaUFjY291bnRQaW5Cb3hMaW5lIHNpemU9XCIyMHB4XCIgY29sb3I9XCIjNGM0YzRjXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXV0aFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxDYXJyaXRvV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QVRhZz48UmlTaG9wcGluZ0NhcnQyTGluZSBjb2xvcj1cIiMzMzNcIiBzaXplPVwiMjJweFwiLz4gPC9BVGFnPlxyXG4gICAgICAgICAgICAgICAgPHA+IHtpdGVtQ2FydD8ubGVuZ3RoID4gMCA/ICg8QmFkZ2Ugc2l6ZT1cIm1pbmlcIj57aXRlbUNhcnQubGVuZ3RofTwvQmFkZ2U+ICkgOiAnJ30gPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJyaXRvV3JhcHBlcj5cclxuICAgICAgICAgICAgPC9TZWNvbmRNZW51PlxyXG4gICAgICAgICAgICA8L01lbnVXcmFwcGVyPlxyXG4gICAgICAgIDwvSGVhZGVyV3JhcHBlcj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxucGFkZGluZzowJSA3JSAwJSA3JTtcclxuYm9yZGVyLXRvcDoxcHggc29saWQ7XHJcbndpZHRoOjEwMCU7XHJcbnBvc2l0aW9uOmZpeGVkO1xyXG5ib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbmhlaWdodDoxMHZoO1xyXG5iYWNrZ3JvdW5kOndoaXRlO1xyXG5kaXNwbGF5OmdyaWQ7XHJcbnotaW5kZXg6MTIwMDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjE4JSAxZnI7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuJjo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHJnYmEoOSwzMCw2NiwwLjEzKSAwLHJnYmEoOSwzMCw2NiwwLjEzKSAxcHgscmdiYSg5LDMwLDY2LDAuMDgpIDFweCxyZ2JhKDksMzAsNjYsMCkgNHB4KTtcclxufVxyXG59XHJcbi8vIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4vLyAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuLy8gYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyIDFmcjtcclxuICAgIGdyaWQtcm93LWdhcDoxdmg7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIHBhZGRpbmc6MiUgMyUgMiUgMyU7XHJcbiAgICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBMb2dvV3JhcHBlciA9IHN0eWxlZC5pbWdgXHJcbm1hcmdpbjowO1xyXG5tYXgtd2lkdGg6MTJ2dztcclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbm1heC13aWR0aDo0NXZ3OyAgICBcclxufVxyXG5gO1xyXG5leHBvcnQgY29uc3QgTWVudVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmdyaWQ7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczo2MCUgNDAlO1xyXG5ncmlkLWNvbHVtbi1nYXA6MnZ3O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG5cclxufVxyXG5gO1xyXG5leHBvcnQgY29uc3QgQVRhZyA9IHN0eWxlZC5hYFxyXG5kaXNwbGF5OiBncmlkO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuY29sb3I6ICM0YzRjNGM7XHJcbmZvbnQtd2VpZ2h0OiA3MDA7XHJcbmp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuZm9udC1zaXplOiR7cHJvcHMgPT4gcHJvcHMuc2l6ZSA/IHByb3BzLnNpemUgOiAnMC43cmVtJ307XHJcbmZvbnQtZmFtaWx5OidPcGVuIFNhbnMnLHNhbnMtc2VyaWY7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDYXJyaXRvV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQXV0aFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbmA7XHJcbiBleHBvcnQgY29uc3QgUFRhZyA9IHN0eWxlZC5wYFxyXG5mb250LWZhbWlseTonT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnNpemUgPyBwcm9wcy5zaXplIDogJzAuOHJlbSd9O1xyXG5jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvciA/IHByb3BzLmNvbG9yIDogJyMzMzMnfTtcclxuIGA7XHJcbmV4cG9ydCBjb25zdCBTZWNvbmRNZW51ID0gc3R5bGVkLmRpdmBcclxuanVzdGlmeS1jb250ZW50OmVuZDtcclxuZGlzcGxheTpncmlkO1xyXG5ncmlkLWNvbHVtbi1nYXA6MnZ3O1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczo2dncgN3Z3O1xyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuZGlzcGxheTpub25lOyBcclxufVxyXG5gO1xyXG5leHBvcnQgY29uc3QgRmlyc3RNZW51ID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgSGVhZFVzZXJJbmZvID0gc3R5bGVkLnBgXHJcbmZvbnQtZmFtaWx5OidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5jb2xvcjojMzMzO1xyXG5mb250LXdlaWdodDo2MDA7XHJcbm1hcmdpbjogMCAtMnZ3IDAgLTN2dztcclxuZm9udC1zaXplOjAuOHJlbTtcclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==