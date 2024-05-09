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

/***/ "./components/TokenBalance.js":
/*!************************************!*\
  !*** ./components/TokenBalance.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ \"./components/index.js\");\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../utils/context */ \"./utils/context.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TokenBalance = function(param) {\n    var name = param.name, walletAddress = param.walletAddress;\n    _s();\n    console.log(name);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"-\"), balance = ref[0], setbalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), tokenaddress = ref1[0], settokenaddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ClipboardIcon\n    }), copyIcon = ref2[0], setcopyIcon = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), txtpending = ref3[0], settxtpending = ref3[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifuSuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Transaction completed\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (name && walletAddress) {\n            fetchTokenbalance();\n            fetchTokenAddress();\n        }\n    }, [\n        name,\n        walletAddress\n    ]);\n    function fetchTokenbalance() {\n        return _fetchTokenbalance.apply(this, arguments);\n    }\n    function _fetchTokenbalance() {\n        _fetchTokenbalance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var balance, fbal;\n            return C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_5__.getTokenBalance)(name, walletAddress);\n                    case 2:\n                        balance = _ctx.sent;\n                        console.log(balance, \"tokenbalance...........\");\n                        fbal = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(balance === null || balance === void 0 ? void 0 : balance.toString(), 18);\n                        setbalance(fbal.toString());\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenbalance.apply(this, arguments);\n    }\n    function fetchTokenAddress() {\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    function _fetchTokenAddress() {\n        _fetchTokenAddress = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var address;\n            return C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_5__.getTokenAddress)(name);\n                    case 2:\n                        address = _ctx.sent;\n                        settokenaddress(address);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex mx-2 border-[1px] rounded-l rounded-r-lg border-[#7765F3]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: \"text-sm\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\TokenBalance.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: \"bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100 \",\n                        children: balance\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\TokenBalance.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\TokenBalance.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(copyIcon.icon, {\n                    className: \"h-6 cursor-pointer\",\n                    onClick: function() {\n                        navigator.clipboard.writeText(tokenaddress);\n                        setcopyIcon();\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\TokenBalance.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\TokenBalance.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this),\n            txtpending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_4__.TransactionStatus, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\TokenBalance.js\",\n                lineNumber: 61,\n                columnNumber: 22\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\TokenBalance.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\TokenBalance.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(TokenBalance, \"L6iFJ9gEI9N2BVpzrUo1y9HtTRA=\");\n_c = TokenBalance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenBalance);\nvar _c;\n$RefreshReg$(_c, \"TokenBalance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rva2VuQmFsYW5jZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBMkQ7QUFDM0I7QUFDaUI7QUFLZjtBQUNVO0FBS2hCOztBQUU1QixJQUFNYyxZQUFZLEdBQUcsZ0JBQTZCO1FBQTFCQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsYUFBYSxTQUFiQSxhQUFhOztJQUN6Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBRTtJQUNsQixJQUE4QmQsR0FBYSxHQUFiQSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUFwQ2tCLE9BQU8sR0FBZ0JsQixHQUFhLEdBQTdCLEVBQUVtQixVQUFVLEdBQUluQixHQUFhLEdBQWpCO0lBQzFCLElBQXdDQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBM0NvQixZQUFZLEdBQXFCcEIsSUFBVSxHQUEvQixFQUFFcUIsZUFBZSxHQUFJckIsSUFBVSxHQUFkO0lBQ3BDLElBQWdDQSxJQUFpQyxHQUFqQ0EsK0NBQVEsQ0FBQztRQUFFc0IsSUFBSSxFQUFFaEIsbUVBQWE7S0FBRSxDQUFDLEVBQTFEaUIsUUFBUSxHQUFpQnZCLElBQWlDLEdBQWxELEVBQUV3QixXQUFXLEdBQUl4QixJQUFpQyxHQUFyQztJQUM1QixJQUFvQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUE1Q3lCLFVBQVUsR0FBbUJ6QixJQUFlLEdBQWxDLEVBQUUwQixhQUFhLEdBQUkxQixJQUFlLEdBQW5CO0lBRWhDLElBQU0yQixXQUFXLEdBQUcsU0FBQ0MsR0FBRztlQUFLeEIsNkRBQVcsQ0FBQ3dCLEdBQUcsRUFBRTtZQUFFRSxRQUFRLEVBQUUsSUFBSTtTQUFFLENBQUM7S0FBQTtJQUNqRSxJQUFNQyxhQUFhLEdBQUc7ZUFBTTNCLCtEQUFhLENBQUMsdUJBQXVCLENBQUM7S0FBQTtJQUVsRUgsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSWEsSUFBSSxJQUFJQyxhQUFhLEVBQUU7WUFDekJrQixpQkFBaUIsRUFBRSxDQUFDO1lBQ3BCQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ3JCO0tBQ0YsRUFBRTtRQUFDcEIsSUFBSTtRQUFFQyxhQUFhO0tBQUMsQ0FBQyxDQUFDO2FBRVhrQixpQkFBaUI7ZUFBakJBLGtCQUFpQjs7YUFBakJBLGtCQUFpQjtRQUFqQkEsa0JBQWlCLEdBQWhDLDBRQUFtQztnQkFDM0JmLE9BQU8sRUFFUGlCLElBQUk7Ozs7OytCQUZZeEIsK0RBQWUsQ0FBQ0csSUFBSSxFQUFFQyxhQUFhLENBQUM7O3dCQUFwREcsT0FBTyxZQUE2Qzt3QkFDMURGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPLEVBQUMseUJBQXlCLENBQUMsQ0FBQzt3QkFDekNpQixJQUFJLEdBQUdoQyw0REFBd0IsQ0FBQ2UsT0FBTyxhQUFQQSxPQUFPLFdBQVUsR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxPQUFPLENBQUVvQixRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDL0RuQixVQUFVLENBQUNnQixJQUFJLENBQUNHLFFBQVEsRUFBRSxDQUFDLENBQUM7Ozs7OztTQUM3QjtlQUxjTCxrQkFBaUI7O2FBTWpCQyxpQkFBaUI7ZUFBakJBLGtCQUFpQjs7YUFBakJBLGtCQUFpQjtRQUFqQkEsa0JBQWlCLEdBQWhDLDBRQUFtQztnQkFDM0JLLE9BQU87Ozs7OytCQUFTN0IsK0RBQWUsQ0FBQ0ksSUFBSSxDQUFDOzt3QkFBckN5QixPQUFPLFlBQThCO3dCQUMzQ2xCLGVBQWUsQ0FBQ2tCLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7U0FDMUI7ZUFIY0wsa0JBQWlCOztJQUtoQyxxQkFDRSw4REFBQ00sS0FBRztRQUFDQyxTQUFTLEVBQUMsZ0VBQWdFOzswQkFDN0UsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx5RUFBeUU7O2tDQUN0Riw4REFBQ0MsR0FBQzt3QkFBQ0QsU0FBUyxFQUFDLFNBQVM7a0NBQUUzQixJQUFJOzs7Ozs2QkFBSztrQ0FDakMsOERBQUM0QixHQUFDO3dCQUFDRCxTQUFTLEVBQUMsdURBQXVEO2tDQUNqRXZCLE9BQU87Ozs7OzZCQUNOOzs7Ozs7cUJBQ0E7MEJBQ04sOERBQUNzQixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsc0RBQXNEOzBCQUNuRSw0RUFBQ2xCLFFBQVEsQ0FBQ0QsSUFBSTtvQkFDWm1CLFNBQVMsRUFBQyxvQkFBb0I7b0JBQzlCRSxPQUFPLEVBQUUsV0FBTTt3QkFDYkMsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQzFCLFlBQVksQ0FBQyxDQUFDO3dCQUM1Q0ksV0FBVyxFQUFFLENBQUM7cUJBQ2Y7Ozs7O3lCQUNEOzs7OztxQkFDRTtZQUNMQyxVQUFVLGtCQUFJLDhEQUFDaEIscURBQWlCOzs7O3FCQUFHOzBCQUNwQyw4REFBQ0osb0RBQU87Ozs7cUJBQUc7Ozs7OzthQUNQLENBQ047Q0FDSDtHQWpES1EsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBbURsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9rZW5CYWxhbmNlLmpzPzIwYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQge1xyXG4gIENsaXBib2FyZEljb24sXHJcbiAgQ2xpcGJvYXJkQ2hlY2tJY29uLFxyXG4gIFBsdXNJY29uLFxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHsgVHJhbnNhY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldFRva2VuQWRkcmVzcyxcclxuICBnZXRUb2tlbkJhbGFuY2UsXHJcbiAgaW5jcmVhc2VBbGxvd2FuY2UsXHJcbn0gZnJvbSBcIi4vLi4vdXRpbHMvY29udGV4dFwiO1xyXG5cclxuY29uc3QgVG9rZW5CYWxhbmNlID0gKHsgbmFtZSwgd2FsbGV0QWRkcmVzcyB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cobmFtZSwpXHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldGJhbGFuY2VdID0gdXNlU3RhdGUoXCItXCIpO1xyXG4gIGNvbnN0IFt0b2tlbmFkZHJlc3MsIHNldHRva2VuYWRkcmVzc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb3B5SWNvbiwgc2V0Y29weUljb25dID0gdXNlU3RhdGUoeyBpY29uOiBDbGlwYm9hcmRJY29uIH0pO1xyXG4gIGNvbnN0IFt0eHRwZW5kaW5nLCBzZXR0eHRwZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgbm90aWZ5RXJyb3IgPSAobXNnKSA9PiB0b2FzdC5lcnJvcihtc2csIHsgZHVyYXRpb246IDYwMDAgfSk7XHJcbiAgY29uc3Qgbm90aWZ1U3VjY2VzcyA9ICgpID0+IHRvYXN0LnN1Y2Nlc3MoXCJUcmFuc2FjdGlvbiBjb21wbGV0ZWRcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobmFtZSAmJiB3YWxsZXRBZGRyZXNzKSB7XHJcbiAgICAgIGZldGNoVG9rZW5iYWxhbmNlKCk7XHJcbiAgICAgIGZldGNoVG9rZW5BZGRyZXNzKCk7XHJcbiAgICB9XHJcbiAgfSwgW25hbWUsIHdhbGxldEFkZHJlc3NdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUb2tlbmJhbGFuY2UoKSB7XHJcbiAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgZ2V0VG9rZW5CYWxhbmNlKG5hbWUsIHdhbGxldEFkZHJlc3MpO1xyXG4gICAgY29uc29sZS5sb2coYmFsYW5jZSxcInRva2VuYmFsYW5jZS4uLi4uLi4uLi4uXCIpO1xyXG4gICAgY29uc3QgZmJhbCA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhiYWxhbmNlPy50b1N0cmluZygpLCAxOCk7XHJcbiAgICBzZXRiYWxhbmNlKGZiYWwudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoVG9rZW5BZGRyZXNzKCkge1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IGdldFRva2VuQWRkcmVzcyhuYW1lKTtcclxuICAgIHNldHRva2VuYWRkcmVzcyhhZGRyZXNzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtMiBib3JkZXItWzFweF0gcm91bmRlZC1sIHJvdW5kZWQtci1sZyBib3JkZXItWyM3NzY1RjNdXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYmctemluYy05MDAgdGV4dC16aW5jLTMwMCB3LWZpdCBwLTIgcHgtMyByb3VuZGVkLWwtbGdcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+e25hbWV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImJnLXppbmMtODAwIHAtMC41IHB4LTMgbWwtMyByb3VuZGVkLWxnIHRleHQtemluYy0xMDAgXCI+XHJcbiAgICAgICAgICB7YmFsYW5jZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtMiBweC0yIGJnLVsjNzc2NUYzXSByb3VuZGVkLXItbGdcIj5cclxuICAgICAgICA8Y29weUljb24uaWNvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC02IGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodG9rZW5hZGRyZXNzKTtcclxuICAgICAgICAgICAgc2V0Y29weUljb24oKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHt0eHRwZW5kaW5nICYmIDxUcmFuc2FjdGlvblN0YXR1cyAvPn1cclxuICAgICAgPFRvYXN0ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2tlbkJhbGFuY2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZXRoZXJzIiwidG9hc3QiLCJUb2FzdGVyIiwiQ2xpcGJvYXJkSWNvbiIsIkNsaXBib2FyZENoZWNrSWNvbiIsIlBsdXNJY29uIiwiVHJhbnNhY3Rpb25TdGF0dXMiLCJnZXRUb2tlbkFkZHJlc3MiLCJnZXRUb2tlbkJhbGFuY2UiLCJpbmNyZWFzZUFsbG93YW5jZSIsIlRva2VuQmFsYW5jZSIsIm5hbWUiLCJ3YWxsZXRBZGRyZXNzIiwiY29uc29sZSIsImxvZyIsImJhbGFuY2UiLCJzZXRiYWxhbmNlIiwidG9rZW5hZGRyZXNzIiwic2V0dG9rZW5hZGRyZXNzIiwiaWNvbiIsImNvcHlJY29uIiwic2V0Y29weUljb24iLCJ0eHRwZW5kaW5nIiwic2V0dHh0cGVuZGluZyIsIm5vdGlmeUVycm9yIiwibXNnIiwiZXJyb3IiLCJkdXJhdGlvbiIsIm5vdGlmdVN1Y2Nlc3MiLCJzdWNjZXNzIiwiZmV0Y2hUb2tlbmJhbGFuY2UiLCJmZXRjaFRva2VuQWRkcmVzcyIsImZiYWwiLCJ1dGlscyIsImZvcm1hdFVuaXRzIiwidG9TdHJpbmciLCJhZGRyZXNzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm9uQ2xpY2siLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TokenBalance.js\n"));

/***/ })

});