"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SwapField.js":
/*!*********************************!*\
  !*** ./components/SwapField.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Selector */ \"./components/Selector.js\");\nvar _this = undefined;\n\n\n\nvar SwapField = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(_c = function(TokenObj, inputRef) {\n    var getInputClassname = function getInputClassname() {\n        var className = \"w-full outline-none h-8 px-2 appearance-none text-3xl bg-transparent\";\n        return className;\n    };\n    var id = TokenObj.id, _value = TokenObj.value, value = _value === void 0 ? \"\" : _value, setValue = TokenObj.setValue, defaultValue = TokenObj.defaultValue, setToken = TokenObj.setToken, ignoreValue = TokenObj.ignoreValue;\n    console.log(t);\n    console.log(setValue, \"setvalue\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: inputRef,\n                className: getInputClassname(),\n                type: \"number\",\n                value: value,\n                placeholder: \"0.0\",\n                onChange: function(e) {\n                    setValue(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Muhangi\\\\UniswapTokenExchange-Dex-\\\\components\\\\SwapField.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Selector__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: id,\n                setToken: setToken,\n                defaultValue: defaultValue,\n                ignoreValue: ignoreValue\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Muhangi\\\\UniswapTokenExchange-Dex-\\\\components\\\\SwapField.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Muhangi\\\\UniswapTokenExchange-Dex-\\\\components\\\\SwapField.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n});\n_c1 = SwapField;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapField);\nvar _c, _c1;\n$RefreshReg$(_c, \"SwapField$React.forwardRef\");\n$RefreshReg$(_c1, \"SwapField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N3YXBGaWVsZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFDUTtBQUVsQyxJQUFNRSxTQUFTLGlCQUFHRix1REFBZ0IsQ0FBQyxjQUFDSSxRQUFRLEVBQUVDLFFBQVEsRUFBSztRQWtDaERDLGlCQUFpQixHQUExQixTQUFTQSxpQkFBaUIsR0FBRztRQUMzQixJQUFJQyxTQUFTLEdBQ1gsc0VBQXNFO1FBQ3hFLE9BQU9BLFNBQVMsQ0FBQztLQUNsQjtJQXJDRCxJQUNFQyxFQUFFLEdBTUFKLFFBQVEsQ0FOVkksRUFBRSxXQU1BSixRQUFRLENBTFZLLEtBQUssRUFBTEEsS0FBSyx1QkFBRyxFQUFFLFdBQ1ZDLFFBQVEsR0FJTk4sUUFBUSxDQUpWTSxRQUFRLEVBQ1JDLFlBQVksR0FHVlAsUUFBUSxDQUhWTyxZQUFZLEVBQ1pDLFFBQVEsR0FFTlIsUUFBUSxDQUZWUSxRQUFRLEVBQ1JDLFdBQVcsR0FDVFQsUUFBUSxDQURWUyxXQUFXO0lBRWJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxDQUFDLENBQUM7SUFDZEYsT0FBTyxDQUFDQyxHQUFHLENBQUNMLFFBQVEsRUFBQyxVQUFVLENBQUM7SUFFaEMscUJBQ0UsOERBQUNPLEtBQUc7UUFBQ1YsU0FBUyxFQUFDLDhCQUE4Qjs7MEJBQzNDLDhEQUFDVyxPQUFLO2dCQUNKQyxHQUFHLEVBQUVkLFFBQVE7Z0JBQ2JFLFNBQVMsRUFBRUQsaUJBQWlCLEVBQUU7Z0JBQzlCYyxJQUFJLEVBQUUsUUFBUTtnQkFDZFgsS0FBSyxFQUFFQSxLQUFLO2dCQUNaWSxXQUFXLEVBQUUsS0FBSztnQkFDbEJDLFFBQVEsRUFBRSxTQUFDQyxDQUFDLEVBQUs7b0JBQ2ZiLFFBQVEsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFNLENBQUNmLEtBQUssQ0FBQyxDQUFDO2lCQUMxQjs7Ozs7cUJBQ0Q7MEJBRUYsOERBQUNSLGlEQUFRO2dCQUNQTyxFQUFFLEVBQUVBLEVBQUU7Z0JBQ05JLFFBQVEsRUFBRUEsUUFBUTtnQkFDbEJELFlBQVksRUFBRUEsWUFBWTtnQkFDMUJFLFdBQVcsRUFBRUEsV0FBVzs7Ozs7cUJBQ3hCOzs7Ozs7YUFDRSxDQUNOO0NBT0gsQ0FBQzs7QUFFRiwrREFBZVgsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3dhcEZpZWxkLmpzP2ViOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuXHJcbmNvbnN0IFN3YXBGaWVsZCA9IFJlYWN0LmZvcndhcmRSZWYoKFRva2VuT2JqLCBpbnB1dFJlZikgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkLFxyXG4gICAgdmFsdWUgPSBcIlwiLFxyXG4gICAgc2V0VmFsdWUsXHJcbiAgICBkZWZhdWx0VmFsdWUsXHJcbiAgICBzZXRUb2tlbixcclxuICAgIGlnbm9yZVZhbHVlLFxyXG4gIH0gPSBUb2tlbk9iajtcclxuICBjb25zb2xlLmxvZyh0KVxyXG4gIGNvbnNvbGUubG9nKHNldFZhbHVlLFwic2V0dmFsdWVcIilcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC14bFwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Z2V0SW5wdXRDbGFzc25hbWUoKX1cclxuICAgICAgICB0eXBlPXtcIm51bWJlclwifVxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj17XCIwLjBcIn1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgIHNldFRva2VuPXtzZXRUb2tlbn1cclxuICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cclxuICAgICAgICBpZ25vcmVWYWx1ZT17aWdub3JlVmFsdWV9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBmdW5jdGlvbiBnZXRJbnB1dENsYXNzbmFtZSgpIHtcclxuICAgIGxldCBjbGFzc05hbWUgPVxyXG4gICAgICBcInctZnVsbCBvdXRsaW5lLW5vbmUgaC04IHB4LTIgYXBwZWFyYW5jZS1ub25lIHRleHQtM3hsIGJnLXRyYW5zcGFyZW50XCI7XHJcbiAgICByZXR1cm4gY2xhc3NOYW1lO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2FwRmllbGQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlbGVjdG9yIiwiU3dhcEZpZWxkIiwiZm9yd2FyZFJlZiIsIlRva2VuT2JqIiwiaW5wdXRSZWYiLCJnZXRJbnB1dENsYXNzbmFtZSIsImNsYXNzTmFtZSIsImlkIiwidmFsdWUiLCJzZXRWYWx1ZSIsImRlZmF1bHRWYWx1ZSIsInNldFRva2VuIiwiaWdub3JlVmFsdWUiLCJjb25zb2xlIiwibG9nIiwidCIsImRpdiIsImlucHV0IiwicmVmIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SwapField.js\n"));

/***/ })

});