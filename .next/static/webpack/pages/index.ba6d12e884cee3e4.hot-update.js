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

/***/ "./components/SingleCard.js":
/*!**********************************!*\
  !*** ./components/SingleCard.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SingleCard = function(param) {\n    var name = param.name, walletAddress = param.walletAddress;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"-\"), balance = ref[0], setbalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"-\"), tokenaddress = ref1[0], settokenaddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ClipboardIcon\n    }), copyIcon = ref2[0], setcopyIcon = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), txpending = ref3[0], settxtpending = ref3[1];\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].success(\"Transaction completed\");\n    };\n    var notifyError = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(msg, {\n            duration: 5000\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (name, walletAddress) {\n            fetchBalance();\n            fetchTokenaddress();\n        } else setbalance(\"-\");\n    }, [\n        name,\n        walletAddress\n    ]);\n    function fetchBalance() {\n        return _fetchBalance.apply(this, arguments);\n    }\n    function _fetchBalance() {\n        _fetchBalance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var balance, fbal;\n            return C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.getTokenBalance)(name, walletAddress);\n                    case 2:\n                        balance = _ctx.sent;\n                        fbal = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(balance.toString(), 18);\n                        setbalance(balance.toString());\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchBalance.apply(this, arguments);\n    }\n    function fetchTokenaddress() {\n        return _fetchTokenaddress.apply(this, arguments);\n    }\n    function _fetchTokenaddress() {\n        _fetchTokenaddress = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var address;\n            return C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.getTokenAddress)(name);\n                    case 2:\n                        address = _ctx.sent;\n                        settokenaddress(address);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenaddress.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n        className: \"flex flex-col bg-[#212429]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                rel: \"nopener noreferrer\",\n                href: \"#\",\n                \"aria-label\": \"Te nulla oportere reprimique his dolorum\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    alt: \"\",\n                    className: \"object-cover w-full h-62 bg-gray-500\",\n                    src: \"img/\".concat(index + 1, \".png\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                rel: \"noopener noreferrer\",\n                href: \"#\",\n                \"aria-label\": \"Te nulla oportere reprimique his dolorum\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                rel: \"noopener noreferrer\",\n                href: \"#\",\n                \"aria-label\": \"text-xs tracki uppercase hover:underline text-[#7765F3]\",\n                children: [\n                    name,\n                    \"10 M supply\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                className: \"flex-1 py-2 text-lg font-semibold leading-4 \",\n                children: [\n                    \"Get\",\n                    name,\n                    \"token,limited supply available\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex mx-2 pt-[10px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: \"text\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(SingleCard, \"Yz4yoZ8/8VMdrgrqn4i76XoPWLY=\");\n_c = SingleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCard);\nvar _c;\n$RefreshReg$(_c, \"SingleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxxQkFBcUI7Z0JBQUNDLElBQUksRUFBQyxHQUFHO2dCQUFDQyxZQUFVLEVBQUMsMENBQTBDOzs7OztxQkFDdkY7MEJBQ0osOERBQUNILEdBQUM7Z0JBQUNDLEdBQUcsRUFBQyxxQkFBcUI7Z0JBQUNDLElBQUksRUFBQyxHQUFHO2dCQUFDQyxZQUFVLEVBQUMseURBQTBEOztvQkFDMUc3QixJQUFJO29CQUFDLGFBQ047Ozs7OztxQkFBSTswQkFDSiw4REFBQ2tDLElBQUU7Z0JBQUNULFNBQVMsRUFBQyw4Q0FBOEM7O29CQUFDLEtBQ3hEO29CQUFDekIsSUFBSTtvQkFBQyxnQ0FDWDs7Ozs7O3FCQUFLOzBCQUNMLDhEQUFDbUMsS0FBRztnQkFBQ1YsU0FBUyxFQUFDLHFCQUFxQjswQkFDbEMsNEVBQUNVLEtBQUc7b0JBQUNWLFNBQVMsRUFBQyx5RUFBeUU7OEJBQ3RGLDRFQUFDVyxHQUFDO3dCQUFDWCxTQUFTLEVBQUMsTUFBTTs7Ozs7NkJBQUs7Ozs7O3lCQUNwQjs7Ozs7cUJBQ0Y7Ozs7OzthQUNFLENBQ1Y7Q0FDSDtHQXBESzFCLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQXNEaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpbmdsZUNhcmQuanM/MjNlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0VG9rZW5BZGRyZXNzLFxyXG4gIGdldFRva2VuQmFsYW5jZSxcclxuICBpbmNyZWFzZUFsbG93YW5jZSxcclxufSBmcm9tIFwiLi4vdXRpbHMvY29udGV4dFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBUcmFuc2FjdGlvblN0YXR1cyBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXR1c1wiO1xyXG5pbXBvcnQgeyBDbGlwYm9hcmRJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuXHJcbmNvbnN0IFNpbmdsZUNhcmQgPSAoeyBuYW1lLCB3YWxsZXRBZGRyZXNzIH0pID0+IHtcclxuICBjb25zdCBbYmFsYW5jZSwgc2V0YmFsYW5jZV0gPSB1c2VTdGF0ZShcIi1cIik7XHJcbiAgY29uc3QgW3Rva2VuYWRkcmVzcywgc2V0dG9rZW5hZGRyZXNzXSA9IHVzZVN0YXRlKFwiLVwiKTtcclxuICBjb25zdCBbY29weUljb24sIHNldGNvcHlJY29uXSA9IHVzZVN0YXRlKHsgaWNvbjogQ2xpcGJvYXJkSWNvbiB9KTtcclxuICBjb25zdCBbdHhwZW5kaW5nLCBzZXR0eHRwZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgbm90aWZ5U3VjY2VzcyA9ICgpID0+IHRvYXN0LnN1Y2Nlc3MoXCJUcmFuc2FjdGlvbiBjb21wbGV0ZWRcIik7XHJcbiAgY29uc3Qgbm90aWZ5RXJyb3IgPSAoKSA9PiB0b2FzdC5lcnJvcihtc2csIHsgZHVyYXRpb246IDUwMDAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoKG5hbWUsIHdhbGxldEFkZHJlc3MpKSB7XHJcbiAgICAgIGZldGNoQmFsYW5jZSgpO1xyXG4gICAgICBmZXRjaFRva2VuYWRkcmVzcygpO1xyXG4gICAgfSBlbHNlIHNldGJhbGFuY2UoXCItXCIpO1xyXG4gIH0sIFtuYW1lLCB3YWxsZXRBZGRyZXNzXSk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hCYWxhbmNlKCkge1xyXG4gICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IGdldFRva2VuQmFsYW5jZShuYW1lLCB3YWxsZXRBZGRyZXNzKTtcclxuICAgIGNvbnN0IGZiYWwgPSBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoYmFsYW5jZS50b1N0cmluZygpLCAxOCk7XHJcbiAgICBzZXRiYWxhbmNlKGJhbGFuY2UudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoVG9rZW5hZGRyZXNzKCkge1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IGdldFRva2VuQWRkcmVzcyhuYW1lKTtcclxuICAgIHNldHRva2VuYWRkcmVzcyhhZGRyZXNzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLVsjMjEyNDI5XVwiPlxyXG4gICAgICA8YVxyXG4gICAgICAgIHJlbD1cIm5vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJUZSBudWxsYSBvcG9ydGVyZSByZXByaW1pcXVlIGhpcyBkb2xvcnVtXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgdy1mdWxsIGgtNjIgYmctZ3JheS01MDBcIlxyXG4gICAgICAgICAgc3JjPXtgaW1nLyR7aW5kZXggKyAxfS5wbmdgfS8+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9XCIjXCIgYXJpYS1sYWJlbD1cIlRlIG51bGxhIG9wb3J0ZXJlIHJlcHJpbWlxdWUgaGlzIGRvbG9ydW1cIj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cIiNcIiBhcmlhLWxhYmVsPVwidGV4dC14cyAgdHJhY2tpIHVwcGVyY2FzZSBob3Zlcjp1bmRlcmxpbmUgdGV4dC1bIzc3NjVGM11cIj5cclxuICAgICAge25hbWV9MTAgTSBzdXBwbHlcclxuICAgICAgPC9hPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTIgdGV4dC1sZyBmb250LXNlbWlib2xkIGxlYWRpbmctNCBcIj5cclxuICAgICAgICBHZXR7bmFtZX10b2tlbixsaW1pdGVkIHN1cHBseSBhdmFpbGFibGVcclxuICAgICAgPC9oMz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LTIgcHQtWzEwcHhdXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBiZy16aW5jLTkwMCB0ZXh0LXppbmMtMzAwIHctZml0IHAtMiBweC0zIHJvdW5kZWQtbC1sZ1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNhcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiZ2V0VG9rZW5BZGRyZXNzIiwiZ2V0VG9rZW5CYWxhbmNlIiwiaW5jcmVhc2VBbGxvd2FuY2UiLCJldGhlcnMiLCJUcmFuc2FjdGlvblN0YXR1cyIsIkNsaXBib2FyZEljb24iLCJ0b2FzdCIsIlRvYXN0ZXIiLCJTaW5nbGVDYXJkIiwibmFtZSIsIndhbGxldEFkZHJlc3MiLCJiYWxhbmNlIiwic2V0YmFsYW5jZSIsInRva2VuYWRkcmVzcyIsInNldHRva2VuYWRkcmVzcyIsImljb24iLCJjb3B5SWNvbiIsInNldGNvcHlJY29uIiwidHhwZW5kaW5nIiwic2V0dHh0cGVuZGluZyIsIm5vdGlmeVN1Y2Nlc3MiLCJzdWNjZXNzIiwibm90aWZ5RXJyb3IiLCJlcnJvciIsIm1zZyIsImR1cmF0aW9uIiwiZmV0Y2hCYWxhbmNlIiwiZmV0Y2hUb2tlbmFkZHJlc3MiLCJmYmFsIiwidXRpbHMiLCJmb3JtYXRVbml0cyIsInRvU3RyaW5nIiwiYWRkcmVzcyIsImFydGljbGUiLCJjbGFzc05hbWUiLCJhIiwicmVsIiwiaHJlZiIsImFyaWEtbGFiZWwiLCJpbWciLCJhbHQiLCJzcmMiLCJpbmRleCIsImgzIiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SingleCard.js\n"));

/***/ })

});