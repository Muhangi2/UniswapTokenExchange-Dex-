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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./components/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), tokenBalcamp = ref[0], setTokenBalCamp = ref[1];\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    console.log(address, \"address...........\");\n    var notifyConnectWallet = function() {\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Connect wallet\", {\n            duration: 2000\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTokenBalCamp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.TokenBalance, {\n                    name: \"USD COIN\",\n                    walletAddress: address\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.TokenBalance, {\n                    name: \"BNB\",\n                    walletAddress: address\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.TokenBalance, {\n                    name: \"SHIBA INU\",\n                    walletAddress: address\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true));\n        if (!address) notifyConnectWallet();\n    }, [\n        address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"p-4 text-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex justify-between h-16 mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                rel: \"noopener noreferrer\",\n                                href: \"#\",\n                                \"aria-label\": \"Back to homepage\",\n                                className: \"flex items-center p-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.Logo, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"items-stretch hidden space-x-3 lg:flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            rel: \"noopener noreferrer\",\n                                            href: \"/\",\n                                            className: \"flex items-center px-4 -mb-1 dark:border-transparent text-[#7765F3] border-[#7765f3]\",\n                                            children: \"Swap\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            rel: \"noopener noreferrer\",\n                                            href: \"/tokens\",\n                                            className: \"flex items-center px-4 -mb-1 dark:border-transparent text-[#7765F3] border-[#7765f3]\",\n                                            children: \"Tokens\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            rel: \"noopener noreferrer\",\n                                            href: \"#\",\n                                            className: \"flex items-center px-4 -mb-1 dark:border-transparent text-[#7765F3] border-[#7765f3]\",\n                                            children: \"NFTs\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            rel: \"noopener noreferrer\",\n                                            href: \"#\",\n                                            className: \"flex items-center px-4 -mb-1 dark:border-transparent text-[#7765F3] border-[#7765f3]\",\n                                            children: \"Pool\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"items-center flex-shrink-0 hidden lg:flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.TokenBalance, {\n                                name: \"USD COIN\",\n                                walletAddress: address\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.TokenBalance, {\n                                name: \"SHIBA INU\",\n                                walletAddress: address\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__.ConnectButton, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-4 lg:hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Header.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"b3ydNciq+u5p6Kat6DCZZHx1b7s=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNELFNBQVMsRUFBQywyQ0FBMkM7OzBDQUN4RCw4REFBQ2IsZ0RBQVk7Z0NBQUNVLElBQUksRUFBRSxVQUFVO2dDQUFFQyxhQUFhLEVBQUVQLE9BQU87Ozs7O3FDQUFJOzBDQUMxRCw4REFBQ0osZ0RBQVk7Z0NBQUNVLElBQUksRUFBRSxXQUFXO2dDQUFFQyxhQUFhLEVBQUVQLE9BQU87Ozs7O3FDQUFJOzBDQUMzRCw4REFBQ1YsaUVBQWE7Ozs7cUNBQUc7Ozs7Ozs2QkFDYjtrQ0FDTiw4REFBQzJCLFFBQU07d0JBQUNSLFNBQVMsRUFBQyxlQUFlO2tDQUMvQiw0RUFBQ2Ysd0NBQUk7Ozs7aUNBQUc7Ozs7OzZCQUNEOzs7Ozs7cUJBQ0w7MEJBQ04sOERBQUNELG9EQUFPOzs7O3FCQUFHOzs7Ozs7YUFDSixDQUNUO0NBQ0g7R0FsRktJLE1BQU07O1FBRU1OLDZDQUFVOzs7QUFGdEJNLEtBQUFBLE1BQU07QUFvRlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbm5lY3RCdXR0b24gfSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xyXG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSBcIndhZ21pXCI7XHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgeyBNZW51LCBMb2dvLCBUb2tlbkJhbGFuY2UgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0b2tlbkJhbGNhbXAsIHNldFRva2VuQmFsQ2FtcF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IGFkZHJlc3MgPSB1c2VBY2NvdW50KCk7XHJcbiAgY29uc29sZS5sb2coYWRkcmVzcywgXCJhZGRyZXNzLi4uLi4uLi4uLi5cIik7XHJcblxyXG4gIGNvbnN0IG5vdGlmeUNvbm5lY3RXYWxsZXQgPSAoKSA9PiB7XHJcbiAgICB0b2FzdC5lcnJvcihcIkNvbm5lY3Qgd2FsbGV0XCIsIHsgZHVyYXRpb246IDIwMDAgfSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VG9rZW5CYWxDYW1wKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxUb2tlbkJhbGFuY2UgbmFtZT17XCJVU0QgQ09JTlwifSB3YWxsZXRBZGRyZXNzPXthZGRyZXNzfSAvPlxyXG4gICAgICAgIDxUb2tlbkJhbGFuY2UgbmFtZT17XCJCTkJcIn0gd2FsbGV0QWRkcmVzcz17YWRkcmVzc30gLz5cclxuICAgICAgICA8VG9rZW5CYWxhbmNlIG5hbWU9e1wiU0hJQkEgSU5VXCJ9IHdhbGxldEFkZHJlc3M9e2FkZHJlc3N9IC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICAgIGlmICghYWRkcmVzcykgbm90aWZ5Q29ubmVjdFdhbGxldCgpO1xyXG4gIH0sIFthZGRyZXNzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInAtNCAgdGV4dC1ncmF5LTEwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGp1c3RpZnktYmV0d2VlbiBoLTE2IG14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCYWNrIHRvIGhvbWVwYWdlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0yXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpdGVtcy1zdHJldGNoIGhpZGRlbiBzcGFjZS14LTMgbGc6ZmxleFwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB4LTQgLW1iLTEgZGFyazpib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1bIzc3NjVGM10gYm9yZGVyLVsjNzc2NWYzXVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU3dhcFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL3Rva2Vuc1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC00IC1tYi0xIGRhcms6Ym9yZGVyLXRyYW5zcGFyZW50IHRleHQtWyM3NzY1RjNdIGJvcmRlci1bIzc3NjVmM11cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFRva2Vuc1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC00IC1tYi0xIGRhcms6Ym9yZGVyLXRyYW5zcGFyZW50IHRleHQtWyM3NzY1RjNdIGJvcmRlci1bIzc3NjVmM11cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE5GVHNcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtNCAtbWItMSBkYXJrOmJvcmRlci10cmFuc3BhcmVudCB0ZXh0LVsjNzc2NUYzXSBib3JkZXItWyM3NzY1ZjNdXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBQb29sXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBmbGV4LXNocmluay0wIGhpZGRlbiBsZzpmbGV4XCI+XHJcbiAgICAgICAgICA8VG9rZW5CYWxhbmNlIG5hbWU9e1wiVVNEIENPSU5cIn0gd2FsbGV0QWRkcmVzcz17YWRkcmVzc30gLz5cclxuICAgICAgICAgIDxUb2tlbkJhbGFuY2UgbmFtZT17XCJTSElCQSBJTlVcIn0gd2FsbGV0QWRkcmVzcz17YWRkcmVzc30gLz5cclxuICAgICAgICAgIDxDb25uZWN0QnV0dG9uIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTQgbGc6aGlkZGVuXCI+XHJcbiAgICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFRvYXN0ZXIgLz5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29ubmVjdEJ1dHRvbiIsInVzZUFjY291bnQiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJNZW51IiwiTG9nbyIsIlRva2VuQmFsYW5jZSIsIkhlYWRlciIsInRva2VuQmFsY2FtcCIsInNldFRva2VuQmFsQ2FtcCIsImFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwibm90aWZ5Q29ubmVjdFdhbGxldCIsImVycm9yIiwiZHVyYXRpb24iLCJuYW1lIiwid2FsbGV0QWRkcmVzcyIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImEiLCJyZWwiLCJocmVmIiwiYXJpYS1sYWJlbCIsInVsIiwibGkiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});