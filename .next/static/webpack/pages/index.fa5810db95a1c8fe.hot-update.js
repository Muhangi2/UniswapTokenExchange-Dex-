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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SingleCard = function(param) {\n    var name = param.name, walletAddress = param.walletAddress;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"-\"), balance = ref[0], setbalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"-\"), tokenaddress = ref1[0], settokenaddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ClipboardIcon\n    }), copyIcon = ref2[0], setcopyIcon = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), txpending = ref3[0], settxtpending = ref3[1];\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].success(\"Transaction completed\");\n    };\n    var notifyError = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(msg, {\n            duration: 5000\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (name, walletAddress) {\n            fetchBalance();\n            fetchTokenaddress();\n        } else setbalance(\"-\");\n    }, [\n        name,\n        walletAddress\n    ]);\n    function fetchBalance() {\n        return _fetchBalance.apply(this, arguments);\n    }\n    function _fetchBalance() {\n        _fetchBalance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var balance, fbal;\n            return C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.getTokenBalance)(name, walletAddress);\n                    case 2:\n                        balance = _ctx.sent;\n                        fbal = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(balance.toString(), 18);\n                        setbalance(balance.toString());\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchBalance.apply(this, arguments);\n    }\n    function fetchTokenaddress() {\n        return _fetchTokenaddress.apply(this, arguments);\n    }\n    function _fetchTokenaddress() {\n        _fetchTokenaddress = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var address;\n            return C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.getTokenAddress)(name);\n                    case 2:\n                        address = _ctx.sent;\n                        settokenaddress(address);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenaddress.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n        className: \"flex flex-col bg-[#212429]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                rel: \"nopener noreferrer\",\n                href: \"#\",\n                \"aria-label\": \"Te nulla oportere reprimique his dolorum\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    alt: \"\",\n                    className: \"object-cover w-full h-62 bg-gray-500\",\n                    src: \"img/\".concat(index + 1, \".png\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                rel: \"noopener noreferrer\",\n                href: \"#\",\n                \"aria-label\": \"Te nulla oportere reprimique his dolorum\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                rel: \"noopener noreferrer\",\n                href: \"#\",\n                \"aria-label\": \"text-xs tracki uppercase hover:underline text-[#7765F3]\",\n                children: [\n                    name,\n                    \"10 M supply\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                className: \"flex-1 py-2 text-lg font-semibold leading-4 \",\n                children: [\n                    \"Get\",\n                    name,\n                    \"token,limited supply available\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex mx-2 pt-[10px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"text-sm\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100 \",\n                            children: balance\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(copyIcon.icon, {\n                    className: \"h-6 cursor-pointer \",\n                    onClick: function() {\n                        navigator.clipboard.writeText(tokenaddress);\n                        setcopyIcon({\n                            icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ClipboardCheckIcon\n                        });\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                    lineNumber: 64,\n                    columnNumber: 8\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(SingleCard, \"Yz4yoZ8/8VMdrgrqn4i76XoPWLY=\");\n_c = SingleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCard);\nvar _c;\n$RefreshReg$(_c, \"SingleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bmdsZUNhcmQuanM/MjNlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0VG9rZW5BZGRyZXNzLFxyXG4gIGdldFRva2VuQmFsYW5jZSxcclxuICBpbmNyZWFzZUFsbG93YW5jZSxcclxufSBmcm9tIFwiLi4vdXRpbHMvY29udGV4dFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBUcmFuc2FjdGlvblN0YXR1cyBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXR1c1wiO1xyXG5pbXBvcnQgeyBDbGlwYm9hcmRDaGVja0ljb24sIENsaXBib2FyZEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5cclxuY29uc3QgU2luZ2xlQ2FyZCA9ICh7IG5hbWUsIHdhbGxldEFkZHJlc3MgfSkgPT4ge1xyXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRiYWxhbmNlXSA9IHVzZVN0YXRlKFwiLVwiKTtcclxuICBjb25zdCBbdG9rZW5hZGRyZXNzLCBzZXR0b2tlbmFkZHJlc3NdID0gdXNlU3RhdGUoXCItXCIpO1xyXG4gIGNvbnN0IFtjb3B5SWNvbiwgc2V0Y29weUljb25dID0gdXNlU3RhdGUoeyBpY29uOiBDbGlwYm9hcmRJY29uIH0pO1xyXG4gIGNvbnN0IFt0eHBlbmRpbmcsIHNldHR4dHBlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBub3RpZnlTdWNjZXNzID0gKCkgPT4gdG9hc3Quc3VjY2VzcyhcIlRyYW5zYWN0aW9uIGNvbXBsZXRlZFwiKTtcclxuICBjb25zdCBub3RpZnlFcnJvciA9ICgpID0+IHRvYXN0LmVycm9yKG1zZywgeyBkdXJhdGlvbjogNTAwMCB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICgobmFtZSwgd2FsbGV0QWRkcmVzcykpIHtcclxuICAgICAgZmV0Y2hCYWxhbmNlKCk7XHJcbiAgICAgIGZldGNoVG9rZW5hZGRyZXNzKCk7XHJcbiAgICB9IGVsc2Ugc2V0YmFsYW5jZShcIi1cIik7XHJcbiAgfSwgW25hbWUsIHdhbGxldEFkZHJlc3NdKTtcclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEJhbGFuY2UoKSB7XHJcbiAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgZ2V0VG9rZW5CYWxhbmNlKG5hbWUsIHdhbGxldEFkZHJlc3MpO1xyXG4gICAgY29uc3QgZmJhbCA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhiYWxhbmNlLnRvU3RyaW5nKCksIDE4KTtcclxuICAgIHNldGJhbGFuY2UoYmFsYW5jZS50b1N0cmluZygpKTtcclxuICB9XHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUb2tlbmFkZHJlc3MoKSB7XHJcbiAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgZ2V0VG9rZW5BZGRyZXNzKG5hbWUpO1xyXG4gICAgc2V0dG9rZW5hZGRyZXNzKGFkZHJlc3MpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYmctWyMyMTI0MjldXCI+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgcmVsPVwibm9wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlRlIG51bGxhIG9wb3J0ZXJlIHJlcHJpbWlxdWUgaGlzIGRvbG9ydW1cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciB3LWZ1bGwgaC02MiBiZy1ncmF5LTUwMFwiXHJcbiAgICAgICAgICBzcmM9e2BpbWcvJHtpbmRleCArIDF9LnBuZ2B9Lz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cIiNcIiBhcmlhLWxhYmVsPVwiVGUgbnVsbGEgb3BvcnRlcmUgcmVwcmltaXF1ZSBoaXMgZG9sb3J1bVwiPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPVwiI1wiIGFyaWEtbGFiZWw9XCJ0ZXh0LXhzICB0cmFja2kgdXBwZXJjYXNlIGhvdmVyOnVuZGVybGluZSB0ZXh0LVsjNzc2NUYzXVwiPlxyXG4gICAgICB7bmFtZX0xMCBNIHN1cHBseVxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJmbGV4LTEgcHktMiB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbGVhZGluZy00IFwiPlxyXG4gICAgICAgIEdldHtuYW1lfXRva2VuLGxpbWl0ZWQgc3VwcGx5IGF2YWlsYWJsZVxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtMiBwdC1bMTBweF1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLXppbmMtOTAwIHRleHQtemluYy0zMDAgdy1maXQgcC0yIHB4LTMgcm91bmRlZC1sLWxnXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+e25hbWV9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmctemluYy04MDAgcC0wLjUgcHgtMyBtbC0zIHJvdW5kZWQtbGcgdGV4dC16aW5jLTEwMCBcIj57YmFsYW5jZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtMiBweC0yIGJnLVsjNzc2NUYzXSByb3VuZGVkLXItbGdcIj5cclxuICAgICAgIDxjb3B5SWNvbi5pY29uIGNsYXNzTmFtZT1cImgtNiBjdXJzb3ItcG9pbnRlciBcIiBvbkNsaWNrPXsoKT0+e25hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRva2VuYWRkcmVzcyk7IHNldGNvcHlJY29uKHtpY29uOkNsaXBib2FyZENoZWNrSWNvbn0pfX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJnZXRUb2tlbkFkZHJlc3MiLCJnZXRUb2tlbkJhbGFuY2UiLCJpbmNyZWFzZUFsbG93YW5jZSIsImV0aGVycyIsIlRyYW5zYWN0aW9uU3RhdHVzIiwiQ2xpcGJvYXJkQ2hlY2tJY29uIiwiQ2xpcGJvYXJkSWNvbiIsInRvYXN0IiwiVG9hc3RlciIsIlNpbmdsZUNhcmQiLCJuYW1lIiwid2FsbGV0QWRkcmVzcyIsImJhbGFuY2UiLCJzZXRiYWxhbmNlIiwidG9rZW5hZGRyZXNzIiwic2V0dG9rZW5hZGRyZXNzIiwiaWNvbiIsImNvcHlJY29uIiwic2V0Y29weUljb24iLCJ0eHBlbmRpbmciLCJzZXR0eHRwZW5kaW5nIiwibm90aWZ5U3VjY2VzcyIsInN1Y2Nlc3MiLCJub3RpZnlFcnJvciIsImVycm9yIiwibXNnIiwiZHVyYXRpb24iLCJmZXRjaEJhbGFuY2UiLCJmZXRjaFRva2VuYWRkcmVzcyIsImZiYWwiLCJ1dGlscyIsImZvcm1hdFVuaXRzIiwidG9TdHJpbmciLCJhZGRyZXNzIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImEiLCJyZWwiLCJocmVmIiwiYXJpYS1sYWJlbCIsImltZyIsImFsdCIsInNyYyIsImluZGV4IiwiaDMiLCJkaXYiLCJwIiwib25DbGljayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SingleCard.js\n"));

/***/ })

});