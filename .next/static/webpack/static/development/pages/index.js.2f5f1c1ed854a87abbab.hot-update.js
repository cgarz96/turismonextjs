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
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/nprogress.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Karla:400,700,700i&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })), __jsx(HeaderWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(LogoWrapper, {
    src: "/logov3.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx(MenuWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(FirstMenu, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdHome"], {
    size: "20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 27
    }
  }), " Inicio ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/actividades",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, " ", __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdDirectionsBike"], {
    size: "20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 28
    }
  }), " Que hacer ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/reservas",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_7__["GoCalendar"], {
    size: "18px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 27
    }
  }), "Reserv\xE1")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/descubrir",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiSun"], {
    size: "18px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 27
    }
  }), "Descubrila ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/informacion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiInfo"], {
    size: "18px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 27
    }
  }), "Informaci\xF3n ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contacto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiMessageCircle"], {
    size: "18px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 27
    }
  }), " Contacto "))), __jsx(SecondMenu, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, !data ? __jsx(HeadUserInfo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, " ... ") : data.auth && data.auth.token ? __jsx(HeadUserInfo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 52
    }
  }, " ", data.auth.user, " ") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/ingresar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx(AuthWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx(ATag, {
    size: "0.8rem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, " Ingresar"), __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__["RiAccountPinBoxLine"], {
    size: "20px",
    color: "#4c4c4c",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }))), __jsx(CarritoWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx(ATag, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__["RiShoppingCart2Line"], {
    color: "#333",
    size: "22px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 27
    }
  }), " "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, " ", itemCart.length > 0 ? itemCart.length : '', " "))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJ1c2VTV1IiLCJkYXRhIiwidXNlQ29udGV4dCIsIkNvbnRleHRTdGF0ZSIsIml0ZW1DYXJ0Iiwic2V0SXRlbUNhcnQiLCJjb25zb2xlIiwibG9nIiwiYXV0aCIsInRva2VuIiwidXNlciIsImxlbmd0aCIsIkhlYWRlcldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJMb2dvV3JhcHBlciIsImltZyIsIk1lbnVXcmFwcGVyIiwiQVRhZyIsImEiLCJwcm9wcyIsInNpemUiLCJDYXJyaXRvV3JhcHBlciIsIkF1dGhXcmFwcGVyIiwiUFRhZyIsInAiLCJjb2xvciIsIlNlY29uZE1lbnUiLCJGaXJzdE1lbnUiLCJIZWFkVXNlckluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUVqQixNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxHQUFHO0FBQUEsV0FBSUMsS0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEVBQUo7QUFBQSxLQUFqQixDQUFKO0FBQUEsR0FBbkI7O0FBRmlCLGdCQUdBQyxvREFBTSxDQUFDLFdBQUQsRUFBY04sT0FBZCxDQUhOO0FBQUEsTUFHVE8sSUFIUyxXQUdUQSxJQUhTOztBQUFBLG9CQUtjQyx3REFBVSxDQUFDQyw2REFBRCxDQUx4QjtBQUFBLE1BS1hDLFFBTFc7QUFBQSxNQUtEQyxXQUxDOztBQU9sQkMsU0FBTyxDQUFD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QUFBLHFKQUFoQjtNQUFNYSxVO0FBVU4sSUFBTUMsU0FBUyxHQUFHZix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtEQUFmO01BQU1jLFM7QUFJTixJQUFNQyxZQUFZLEdBQUdoQix5REFBTSxDQUFDWSxDQUFWO0FBQUE7QUFBQTtBQUFBLDRHQUFsQjtPQUFNSSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yZjVmMWMxZWQ4NTRhODdhYmJhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQHplaXQtdWkvcmVhY3QnXHJcbmltcG9ydCB7IEZpU2hvcHBpbmdCYWcsIEZpU3VuLCBGaUluZm8sIEZpTWVzc2FnZUNpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQge0dvQ2FsZW5kYXJ9IGZyb20gJ3JlYWN0LWljb25zL2dvJ1xyXG5pbXBvcnQgeyBNZERpcmVjdGlvbnNCaWtlLCBNZEhvbWV9IGZyb20gJ3JlYWN0LWljb25zL21kJ1xyXG5pbXBvcnQge1JpQWNjb3VudFBpbkJveExpbmUsIFJpU2hvcHBpbmdDYXJ0MkxpbmV9IGZyb20gJ3JlYWN0LWljb25zL3JpJ1xyXG5pbXBvcnQgdXNlU1dSLCB7IG11dGF0ZSB9IGZyb20gJ3N3cidcclxuaW1wb3J0IHtDb250ZXh0U3RhdGV9IGZyb20gJy4uL2NvbnRleHQvZ2xvYmFsJ1xyXG5cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBmZXRjaGVyID0gdXJsID0+IGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKVxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoJy9hcGkvdXNlcicsIGZldGNoZXIpXHJcblxyXG4gICBjb25zdCBbaXRlbUNhcnQsIHNldEl0ZW1DYXJ0XSA9IHVzZUNvbnRleHQoQ29udGV4dFN0YXRlKVxyXG5cclxuICAgY29uc29sZS5sb2coaXRlbUNhcnQsICdjYXJ0JylcclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIHsvKiA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL25wcm9ncmVzcy5jc3NcIiAvPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthcmxhOjQwMCw3MDAsNzAwaSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICBcclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEhlYWRlcldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxMb2dvV3JhcHBlciBzcmM9XCIvbG9nb3YzLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxNZW51V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxGaXJzdE1lbnU+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBVGFnPjxNZEhvbWUgc2l6ZT1cIjIwcHhcIiAvPiBJbmljaW8gPC9BVGFnPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY3RpdmlkYWRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBVGFnPiA8TWREaXJlY3Rpb25zQmlrZSBzaXplPVwiMjBweFwiLz4gUXVlIGhhY2VyIDwvQVRhZz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzZXJ2YXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QVRhZz48R29DYWxlbmRhciBzaXplPVwiMThweFwiLz5SZXNlcnbDoTwvQVRhZz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGVzY3VicmlyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFUYWc+PEZpU3VuIHNpemU9XCIxOHB4XCIvPkRlc2N1YnJpbGEgPC9BVGFnPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmZvcm1hY2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBVGFnPjxGaUluZm8gc2l6ZT1cIjE4cHhcIi8+SW5mb3JtYWNpw7NuIDwvQVRhZz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QVRhZz48RmlNZXNzYWdlQ2lyY2xlIHNpemU9XCIxOHB4XCIvPiBDb250YWN0byA8L0FUYWc+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0ZpcnN0TWVudT5cclxuICAgICAgICAgICAgICAgIDxTZWNvbmRNZW51PlxyXG4gICAgICAgICAgICAgICAgeyFkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkVXNlckluZm8+IC4uLiA8L0hlYWRVc2VySW5mbz5cclxuICAgICAgICAgICAgICAgICk6IGRhdGEuYXV0aCAmJiBkYXRhLmF1dGgudG9rZW4gPyAoPEhlYWRVc2VySW5mbz4ge2RhdGEuYXV0aC51c2VyfSA8L0hlYWRVc2VySW5mbz4pIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5ncmVzYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXV0aFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBVGFnIHNpemU9XCIwLjhyZW1cIj4gSW5ncmVzYXI8L0FUYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaUFjY291bnRQaW5Cb3hMaW5lIHNpemU9XCIyMHB4XCIgY29sb3I9XCIjNGM0YzRjXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXV0aFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxDYXJyaXRvV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QVRhZz48UmlTaG9wcGluZ0NhcnQyTGluZSBjb2xvcj1cIiMzMzNcIiBzaXplPVwiMjJweFwiLz4gPC9BVGFnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiB7aXRlbUNhcnQubGVuZ3RoID4gMCA/IGl0ZW1DYXJ0Lmxlbmd0aCA6ICcnfSA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0NhcnJpdG9XcmFwcGVyPlxyXG4gICAgICAgICAgICA8L1NlY29uZE1lbnU+XHJcbiAgICAgICAgICAgIDwvTWVudVdyYXBwZXI+XHJcbiAgICAgICAgPC9IZWFkZXJXcmFwcGVyPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5wYWRkaW5nOjAlIDclIDAlIDclO1xyXG5ib3JkZXItdG9wOjFweCBzb2xpZDtcclxud2lkdGg6MTAwJTtcclxucG9zaXRpb246Zml4ZWQ7XHJcbmJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuaGVpZ2h0OjEwdmg7XHJcbmJhY2tncm91bmQ6d2hpdGU7XHJcbmRpc3BsYXk6Z3JpZDtcclxuei1pbmRleDoxMjAwO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6MTglIDFmcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4mOjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcscmdiYSg5LDMwLDY2LDAuMTMpIDAscmdiYSg5LDMwLDY2LDAuMTMpIDFweCxyZ2JhKDksMzAsNjYsMC4wOCkgMXB4LHJnYmEoOSwzMCw2NiwwKSA0cHgpO1xyXG59XHJcbn1cclxuLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbi8vIC1tb3otYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4vLyBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnIgMWZyO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOjF2aDtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgcGFkZGluZzoyJSAzJSAyJSAzJTtcclxuICAgIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IExvZ29XcmFwcGVyID0gc3R5bGVkLmltZ2BcclxubWFyZ2luOjA7XHJcbm1heC13aWR0aDoxMnZ3O1xyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxubWF4LXdpZHRoOjQ1dnc7ICAgIFxyXG59XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBNZW51V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6Z3JpZDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjYwJSA0MCU7XHJcbmdyaWQtY29sdW1uLWdhcDoydnc7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7XHJcblxyXG59XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBBVGFnID0gc3R5bGVkLmFgXHJcbmRpc3BsYXk6IGdyaWQ7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5jb2xvcjogIzRjNGM0YztcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxuanVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5mb250LXNpemU6JHtwcm9wcyA9PiBwcm9wcy5zaXplID8gcHJvcHMuc2l6ZSA6ICcwLjdyZW0nfTtcclxuZm9udC1mYW1pbHk6J09wZW4gU2Fucycsc2Fucy1zZXJpZjtcclxuYDtcclxuZXhwb3J0IGNvbnN0IENhcnJpdG9XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBBdXRoV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuYDtcclxuIGV4cG9ydCBjb25zdCBQVGFnID0gc3R5bGVkLnBgXHJcbmZvbnQtZmFtaWx5OidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5mb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMuc2l6ZSA/IHByb3BzLnNpemUgOiAnMC44cmVtJ307XHJcbmNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yID8gcHJvcHMuY29sb3IgOiAnIzMzMyd9O1xyXG4gYDtcclxuZXhwb3J0IGNvbnN0IFNlY29uZE1lbnUgPSBzdHlsZWQuZGl2YFxyXG5qdXN0aWZ5LWNvbnRlbnQ6ZW5kO1xyXG5kaXNwbGF5OmdyaWQ7XHJcbmdyaWQtY29sdW1uLWdhcDoydnc7XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjZ2dyA3dnc7XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5kaXNwbGF5Om5vbmU7IFxyXG59XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBGaXJzdE1lbnUgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXg7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBIZWFkVXNlckluZm8gPSBzdHlsZWQucGBcclxuZm9udC1mYW1pbHk6J09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbmNvbG9yOiMzMzM7XHJcbmZvbnQtd2VpZ2h0OjYwMDtcclxubWFyZ2luOiAwIC0ydncgMCAtM3Z3O1xyXG5mb250LXNpemU6MC44cmVtO1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9