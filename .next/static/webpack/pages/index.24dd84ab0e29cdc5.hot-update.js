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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Selector */ \"./components/Selector.js\");\nvar _this = undefined;\n\n\n\nvar SwapField = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(_c = function(TokenObj, inputRef) {\n    var getInputClassname = function getInputClassname() {\n        var className = \"w-full outline-none h-8 px-2 appearance-none text-3xl bg-transparent\";\n        return className;\n    };\n    var id = TokenObj.id, _value = TokenObj.value, value = _value === void 0 ? \"\" : _value, setValue = TokenObj.setValue, defaultValue = TokenObj.defaultValue, setToken = TokenObj.setToken, ignoreValue = TokenObj.ignoreValue;\n    console.lo;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: inputRef,\n                className: getInputClassname(),\n                type: \"number\",\n                value: value,\n                placeholder: \"0.0\",\n                onChange: function(e) {\n                    setValue(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Muhangi\\\\UniswapTokenExchange-Dex-\\\\components\\\\SwapField.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Selector__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: id,\n                setToken: setToken,\n                defaultValue: defaultValue,\n                ignoreValue: ignoreValue\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Muhangi\\\\UniswapTokenExchange-Dex-\\\\components\\\\SwapField.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Muhangi\\\\UniswapTokenExchange-Dex-\\\\components\\\\SwapField.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n});\n_c1 = SwapField;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapField);\nvar _c, _c1;\n$RefreshReg$(_c, \"SwapField$React.forwardRef\");\n$RefreshReg$(_c1, \"SwapField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N3YXBGaWVsZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFDUTtBQUVsQyxJQUFNRSxTQUFTLGlCQUFHRix1REFBZ0IsQ0FBQyxjQUFDSSxRQUFRLEVBQUVDLFFBQVEsRUFBSztRQWlDaERDLGlCQUFpQixHQUExQixTQUFTQSxpQkFBaUIsR0FBRztRQUMzQixJQUFJQyxTQUFTLEdBQ1gsc0VBQXNFO1FBQ3hFLE9BQU9BLFNBQVMsQ0FBQztLQUNsQjtJQXBDRCxJQUNFQyxFQUFFLEdBTUFKLFFBQVEsQ0FOVkksRUFBRSxXQU1BSixRQUFRLENBTFZLLEtBQUssRUFBTEEsS0FBSyx1QkFBRyxFQUFFLFdBQ1ZDLFFBQVEsR0FJTk4sUUFBUSxDQUpWTSxRQUFRLEVBQ1JDLFlBQVksR0FHVlAsUUFBUSxDQUhWTyxZQUFZLEVBQ1pDLFFBQVEsR0FFTlIsUUFBUSxDQUZWUSxRQUFRLEVBQ1JDLFdBQVcsR0FDVFQsUUFBUSxDQURWUyxXQUFXO0lBRWJDLE9BQU8sQ0FBQ0MsRUFBRTtJQUVWLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNULFNBQVMsRUFBQyw4QkFBOEI7OzBCQUMzQyw4REFBQ1UsT0FBSztnQkFDSkMsR0FBRyxFQUFFYixRQUFRO2dCQUNiRSxTQUFTLEVBQUVELGlCQUFpQixFQUFFO2dCQUM5QmEsSUFBSSxFQUFFLFFBQVE7Z0JBQ2RWLEtBQUssRUFBRUEsS0FBSztnQkFDWlcsV0FBVyxFQUFFLEtBQUs7Z0JBQ2xCQyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQyxFQUFLO29CQUNmWixRQUFRLENBQUNZLENBQUMsQ0FBQ0MsTUFBTSxDQUFDZCxLQUFLLENBQUMsQ0FBQztpQkFDMUI7Ozs7O3FCQUNEOzBCQUVGLDhEQUFDUixpREFBUTtnQkFDUE8sRUFBRSxFQUFFQSxFQUFFO2dCQUNOSSxRQUFRLEVBQUVBLFFBQVE7Z0JBQ2xCRCxZQUFZLEVBQUVBLFlBQVk7Z0JBQzFCRSxXQUFXLEVBQUVBLFdBQVc7Ozs7O3FCQUN4Qjs7Ozs7O2FBQ0UsQ0FDTjtDQU9ILENBQUM7O0FBRUYsK0RBQWVYLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N3YXBGaWVsZC5qcz9lYjhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcblxyXG5jb25zdCBTd2FwRmllbGQgPSBSZWFjdC5mb3J3YXJkUmVmKChUb2tlbk9iaiwgaW5wdXRSZWYpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpZCxcclxuICAgIHZhbHVlID0gXCJcIixcclxuICAgIHNldFZhbHVlLFxyXG4gICAgZGVmYXVsdFZhbHVlLFxyXG4gICAgc2V0VG9rZW4sXHJcbiAgICBpZ25vcmVWYWx1ZSxcclxuICB9ID0gVG9rZW5PYmo7XHJcbiAgY29uc29sZS5sb1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLXhsXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtnZXRJbnB1dENsYXNzbmFtZSgpfVxyXG4gICAgICAgIHR5cGU9e1wibnVtYmVyXCJ9XHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtcIjAuMFwifVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8U2VsZWN0b3JcclxuICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgc2V0VG9rZW49e3NldFRva2VufVxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxyXG4gICAgICAgIGlnbm9yZVZhbHVlPXtpZ25vcmVWYWx1ZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGZ1bmN0aW9uIGdldElucHV0Q2xhc3NuYW1lKCkge1xyXG4gICAgbGV0IGNsYXNzTmFtZSA9XHJcbiAgICAgIFwidy1mdWxsIG91dGxpbmUtbm9uZSBoLTggcHgtMiBhcHBlYXJhbmNlLW5vbmUgdGV4dC0zeGwgYmctdHJhbnNwYXJlbnRcIjtcclxuICAgIHJldHVybiBjbGFzc05hbWU7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3YXBGaWVsZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2VsZWN0b3IiLCJTd2FwRmllbGQiLCJmb3J3YXJkUmVmIiwiVG9rZW5PYmoiLCJpbnB1dFJlZiIsImdldElucHV0Q2xhc3NuYW1lIiwiY2xhc3NOYW1lIiwiaWQiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwic2V0VG9rZW4iLCJpZ25vcmVWYWx1ZSIsImNvbnNvbGUiLCJsbyIsImRpdiIsImlucHV0IiwicmVmIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SwapField.js\n"));

/***/ })

});