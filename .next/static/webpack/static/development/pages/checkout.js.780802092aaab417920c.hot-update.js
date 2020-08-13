webpackHotUpdate("static\\development\\pages\\checkout.js",{

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default, MainWrapper, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWrapper", function() { return MainWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _context_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/global */ "./context/global.js");
var _this = undefined,
    _jsxFileName = "C:\\next\\lariojaturismo\\pages\\checkout.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Tienda = function Tienda() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global__WEBPACK_IMPORTED_MODULE_6__["ContextState"]),
      itemCart = _useContext[0],
      setItemCart = _useContext[1];

  return __jsx(MainWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, (itemCart === null || itemCart === void 0 ? void 0 : itemCart.length) > 0 ? itemCart.map(function (item) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 63
      }
    }, " ", item);
  }) : 'No ha seleccionado productos.')));
};

_s(Tienda, "ll3ImM8s4g6P7m7yd4rcRoeS5vM=");

_c = Tienda;
/* harmony default export */ __webpack_exports__["default"] = (Tienda);
var MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "checkout__MainWrapper",
  componentId: "bp1ok0-0"
})(["padding:0px 0px 0px 0px;box-sizing:border-box;min-height:100vh;"]);
_c2 = MainWrapper;
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "checkout__Content",
  componentId: "bp1ok0-1"
})(["min-height:100vh;padding:5% 8% 0 8%;"]);
_c3 = Content;

var _c, _c2, _c3;

$RefreshReg$(_c, "Tienda");
$RefreshReg$(_c2, "MainWrapper");
$RefreshReg$(_c3, "Content");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGVja291dC5qcyJdLCJuYW1lcyI6WyJUaWVuZGEiLCJ1c2VDb250ZXh0IiwiQ29udGV4dFN0YXRlIiwiaXRlbUNhcnQiLCJzZXRJdGVtQ2FydCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJNYWluV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLG9CQUVlQyx3REFBVSxDQUFDQyw0REFBRCxDQUZ6QjtBQUFBLE1BRVZDLFFBRlU7QUFBQSxNQUVBQyxXQUZBOztBQUtqQixTQUNJLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxDQUFBRCxRQUFRLFNBQVIsSUFBQUEsUUFBUSxXQUFSLFlBQUFBLFFBQVEsQ0FBRUUsTUFBVixJQUFtQixDQUFuQixHQUF1QkYsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQUMsSUFBSTtBQUFBLFdBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFLQSxJQUFMLENBQUw7QUFBQSxHQUFqQixDQUF2QixHQUErRCwrQkFEaEUsQ0FESixDQURKLENBREo7QUFTSCxDQWREOztHQUFNUCxNOztLQUFBQSxNO0FBZ0JTQSxxRUFBZjtBQUVPLElBQU1RLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1RUFBakI7TUFBTUYsVztBQUtOLElBQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0Q0FBYjtNQUFNQyxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjaGVja291dC5qcy43ODA4MDIwOTJhYWFiNDE3OTIwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInXHJcbmltcG9ydCB1c2VTV1IsIHsgbXV0YXRlIH0gZnJvbSAnc3dyJ1xyXG5pbXBvcnQgeyBDb250ZXh0U3RhdGUgfSBmcm9tICcuLi9jb250ZXh0L2dsb2JhbCc7XHJcbiBcclxuY29uc3QgVGllbmRhID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpdGVtQ2FydCwgc2V0SXRlbUNhcnRdID0gdXNlQ29udGV4dChDb250ZXh0U3RhdGUpXHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8TWFpbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgICAgICAgIHtpdGVtQ2FydD8ubGVuZ3RoID4gMCA/IGl0ZW1DYXJ0Lm1hcChpdGVtID0+ICg8cD4ge2l0ZW19PC9wPikpOiAnTm8gaGEgc2VsZWNjaW9uYWRvIHByb2R1Y3Rvcy4nfVxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L01haW5XcmFwcGVyPlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBUaWVuZGE7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1pbi1oZWlnaHQ6MTAwdmg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcclxubWluLWhlaWdodDoxMDB2aDtcclxucGFkZGluZzo1JSA4JSAwIDglO1xyXG5gOyJdLCJzb3VyY2VSb290IjoiIn0=