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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SingleCard = function(param) {\n    var name = param.name, walletAddress = param.walletAddress;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"-\"), balance = ref[0], setbalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"-\"), tokenaddress = ref1[0], settokenaddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ClipboardIcon\n    }), copyIcon = ref2[0], setcopyIcon = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), txpending = ref3[0], settxtpending = ref3[1];\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].success(\"Transaction completed\");\n    };\n    var notifyError = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(msg, {\n            duration: 5000\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (name, walletAddress) {\n            fetchBalance();\n            fetchTokenaddress();\n        } else setbalance(\"-\");\n    }, [\n        name,\n        walletAddress\n    ]);\n    function fetchBalance() {\n        return _fetchBalance.apply(this, arguments);\n    }\n    function _fetchBalance() {\n        _fetchBalance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var balance, fbal;\n            return C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.getTokenBalance)(name, walletAddress);\n                    case 2:\n                        balance = _ctx.sent;\n                        fbal = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(balance.toString(), 18);\n                        setbalance(balance.toString());\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchBalance.apply(this, arguments);\n    }\n    function fetchTokenaddress() {\n        return _fetchTokenaddress.apply(this, arguments);\n    }\n    function _fetchTokenaddress() {\n        _fetchTokenaddress = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var address;\n            return C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.getTokenAddress)(name);\n                    case 2:\n                        address = _ctx.sent;\n                        settokenaddress(address);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenaddress.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n        className: \"flex flex-col bg-[#212429]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                rel: \"nopener noreferrer\",\n                href: \"#\",\n                \"aria-label\": \"Te nulla oportere reprimique his dolorum\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    alt: \"\",\n                    className: \"object-cover w-full h-62 bg-gray-500\",\n                    src: \"img/\".concat(index + 1, \".png\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                rel: \"noopener noreferrer\",\n                href: \"#\",\n                \"aria-label\": \"Te nulla oportere reprimique his dolorum\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                rel: \"noopener noreferrer\",\n                href: \"#\",\n                \"aria-label\": \"text-xs tracki uppercase hover:underline text-[#7765F3]\",\n                children: [\n                    name,\n                    \"10 M supply\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                className: \"flex-1 py-2 text-lg font-semibold leading \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\SingleCard.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(SingleCard, \"Yz4yoZ8/8VMdrgrqn4i76XoPWLY=\");\n_c = SingleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCard);\nvar _c;\n$RefreshReg$(_c, \"SingleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxxQkFBcUI7Z0JBQUNDLElBQUksRUFBQyxHQUFHO2dCQUFDQyxZQUFVLEVBQUMsMENBQTBDOzs7OztxQkFDdkY7MEJBQ0osOERBQUNILEdBQUM7Z0JBQUNDLEdBQUcsRUFBQyxxQkFBcUI7Z0JBQUNDLElBQUksRUFBQyxHQUFHO2dCQUFDQyxZQUFVLEVBQUMseURBQTBEOztvQkFDMUc3QixJQUFJO29CQUFDLGFBQ047Ozs7OztxQkFBSTswQkFDSiw4REFBQ2tDLElBQUU7Z0JBQUNULFNBQVMsRUFBQyw0Q0FBNEM7Ozs7O3FCQUFNOzs7Ozs7YUFDeEQsQ0FDVjtDQUNIO0dBN0NLMUIsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBK0NoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2luZ2xlQ2FyZC5qcz8yM2U2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBnZXRUb2tlbkFkZHJlc3MsXHJcbiAgZ2V0VG9rZW5CYWxhbmNlLFxyXG4gIGluY3JlYXNlQWxsb3dhbmNlLFxyXG59IGZyb20gXCIuLi91dGlscy9jb250ZXh0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IFRyYW5zYWN0aW9uU3RhdHVzIGZyb20gXCIuL1RyYW5zYWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IENsaXBib2FyZEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5cclxuY29uc3QgU2luZ2xlQ2FyZCA9ICh7IG5hbWUsIHdhbGxldEFkZHJlc3MgfSkgPT4ge1xyXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRiYWxhbmNlXSA9IHVzZVN0YXRlKFwiLVwiKTtcclxuICBjb25zdCBbdG9rZW5hZGRyZXNzLCBzZXR0b2tlbmFkZHJlc3NdID0gdXNlU3RhdGUoXCItXCIpO1xyXG4gIGNvbnN0IFtjb3B5SWNvbiwgc2V0Y29weUljb25dID0gdXNlU3RhdGUoeyBpY29uOiBDbGlwYm9hcmRJY29uIH0pO1xyXG4gIGNvbnN0IFt0eHBlbmRpbmcsIHNldHR4dHBlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBub3RpZnlTdWNjZXNzID0gKCkgPT4gdG9hc3Quc3VjY2VzcyhcIlRyYW5zYWN0aW9uIGNvbXBsZXRlZFwiKTtcclxuICBjb25zdCBub3RpZnlFcnJvciA9ICgpID0+IHRvYXN0LmVycm9yKG1zZywgeyBkdXJhdGlvbjogNTAwMCB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICgobmFtZSwgd2FsbGV0QWRkcmVzcykpIHtcclxuICAgICAgZmV0Y2hCYWxhbmNlKCk7XHJcbiAgICAgIGZldGNoVG9rZW5hZGRyZXNzKCk7XHJcbiAgICB9IGVsc2Ugc2V0YmFsYW5jZShcIi1cIik7XHJcbiAgfSwgW25hbWUsIHdhbGxldEFkZHJlc3NdKTtcclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEJhbGFuY2UoKSB7XHJcbiAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgZ2V0VG9rZW5CYWxhbmNlKG5hbWUsIHdhbGxldEFkZHJlc3MpO1xyXG4gICAgY29uc3QgZmJhbCA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhiYWxhbmNlLnRvU3RyaW5nKCksIDE4KTtcclxuICAgIHNldGJhbGFuY2UoYmFsYW5jZS50b1N0cmluZygpKTtcclxuICB9XHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUb2tlbmFkZHJlc3MoKSB7XHJcbiAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgZ2V0VG9rZW5BZGRyZXNzKG5hbWUpO1xyXG4gICAgc2V0dG9rZW5hZGRyZXNzKGFkZHJlc3MpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYmctWyMyMTI0MjldXCI+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgcmVsPVwibm9wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlRlIG51bGxhIG9wb3J0ZXJlIHJlcHJpbWlxdWUgaGlzIGRvbG9ydW1cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciB3LWZ1bGwgaC02MiBiZy1ncmF5LTUwMFwiXHJcbiAgICAgICAgICBzcmM9e2BpbWcvJHtpbmRleCArIDF9LnBuZ2B9Lz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cIiNcIiBhcmlhLWxhYmVsPVwiVGUgbnVsbGEgb3BvcnRlcmUgcmVwcmltaXF1ZSBoaXMgZG9sb3J1bVwiPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPVwiI1wiIGFyaWEtbGFiZWw9XCJ0ZXh0LXhzICB0cmFja2kgdXBwZXJjYXNlIGhvdmVyOnVuZGVybGluZSB0ZXh0LVsjNzc2NUYzXVwiPlxyXG4gICAgICB7bmFtZX0xMCBNIHN1cHBseVxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJmbGV4LTEgcHktMiB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbGVhZGluZyBcIj48L2gzPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImdldFRva2VuQWRkcmVzcyIsImdldFRva2VuQmFsYW5jZSIsImluY3JlYXNlQWxsb3dhbmNlIiwiZXRoZXJzIiwiVHJhbnNhY3Rpb25TdGF0dXMiLCJDbGlwYm9hcmRJY29uIiwidG9hc3QiLCJUb2FzdGVyIiwiU2luZ2xlQ2FyZCIsIm5hbWUiLCJ3YWxsZXRBZGRyZXNzIiwiYmFsYW5jZSIsInNldGJhbGFuY2UiLCJ0b2tlbmFkZHJlc3MiLCJzZXR0b2tlbmFkZHJlc3MiLCJpY29uIiwiY29weUljb24iLCJzZXRjb3B5SWNvbiIsInR4cGVuZGluZyIsInNldHR4dHBlbmRpbmciLCJub3RpZnlTdWNjZXNzIiwic3VjY2VzcyIsIm5vdGlmeUVycm9yIiwiZXJyb3IiLCJtc2ciLCJkdXJhdGlvbiIsImZldGNoQmFsYW5jZSIsImZldGNoVG9rZW5hZGRyZXNzIiwiZmJhbCIsInV0aWxzIiwiZm9ybWF0VW5pdHMiLCJ0b1N0cmluZyIsImFkZHJlc3MiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiYSIsInJlbCIsImhyZWYiLCJhcmlhLWxhYmVsIiwiaW1nIiwiYWx0Iiwic3JjIiwiaW5kZXgiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SingleCard.js\n"));

/***/ })

});