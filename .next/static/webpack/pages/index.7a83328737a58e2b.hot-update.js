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

/***/ "./components/Selector.js":
/*!********************************!*\
  !*** ./components/Selector.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Selector = function(param) {\n    var defaultValue = param.defaultValue, ignoreValue = param.ignoreValue, setToken = param.setToken, id = param.id;\n    var getFilteredItems = function getFilteredItems(ignoreValue) {\n        return menu.filter(function(item) {\n            return item[\"key\"] !== ignoreValue;\n        });\n    };\n    _s();\n    var menu = [\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.ETH,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.ETH\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_1,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_1\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_2,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_2\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_3,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_3\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_4,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_4\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_5,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_5\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_6,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_6\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_7,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_7\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_8,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_8\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), selectedItem = ref[0], setSelectedItem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getFilteredItems(ignoreValue)), menuItems = ref1[0], setMenuItems = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setSelectedItem(defaultValue);\n    }, [\n        defaultValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setMenuItems(getFilteredItems(ignoreValue));\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Button, {\n            css: {\n                backgroundColor: selectedItem === _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_VALUE ? \"#7765F3\" : \"#2c2f36\"\n            },\n            children: selec\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Selector.js\",\n            lineNumber: 42,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\Selector.js\",\n        lineNumber: 41,\n        columnNumber: 10\n    }, _this);\n};\n_s(Selector, \"KJwGDZDNgOUOTlfsHdijX8cURsU=\");\n_c = Selector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Selector);\nvar _c;\n$RefreshReg$(_c, \"Selector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlbGVjdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDTjtBQVlqQjs7QUFFNUIsSUFBTWMsUUFBUSxHQUFHLGdCQUFpRDtRQUE5Q0MsWUFBWSxTQUFaQSxZQUFZLEVBQUVDLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsRUFBRSxTQUFGQSxFQUFFO1FBY2hEQyxnQkFBZ0IsR0FBekIsU0FBU0EsZ0JBQWdCLENBQUNILFdBQVcsRUFBQztRQUNwQyxPQUFPSSxJQUFJLENBQUNDLE1BQU0sQ0FBQyxTQUFDQyxJQUFJO21CQUFHQSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUdOLFdBQVc7U0FBQSxDQUFDLENBQUM7S0FDdkQ7O0lBZkQsSUFBTUksSUFBSSxHQUFHO1FBQ1g7WUFBRUcsR0FBRyxFQUFFVixpREFBRztZQUFFVyxJQUFJLEVBQUVYLGlEQUFHO1NBQUU7UUFDdkI7WUFBRVUsR0FBRyxFQUFFbkIsb0RBQU07WUFBRW9CLElBQUksRUFBRXBCLG9EQUFNO1NBQUU7UUFDN0I7WUFBRW1CLEdBQUcsRUFBRWxCLG9EQUFNO1lBQUVtQixJQUFJLEVBQUVuQixvREFBTTtTQUFFO1FBQzdCO1lBQUVrQixHQUFHLEVBQUVqQixvREFBTTtZQUFFa0IsSUFBSSxFQUFFbEIsb0RBQU07U0FBRTtRQUM3QjtZQUFFaUIsR0FBRyxFQUFFaEIsb0RBQU07WUFBRWlCLElBQUksRUFBRWpCLG9EQUFNO1NBQUU7UUFDN0I7WUFBRWdCLEdBQUcsRUFBRWYsb0RBQU07WUFBRWdCLElBQUksRUFBRWhCLG9EQUFNO1NBQUU7UUFDN0I7WUFBRWUsR0FBRyxFQUFFZCxvREFBTTtZQUFFZSxJQUFJLEVBQUVmLG9EQUFNO1NBQUU7UUFDN0I7WUFBRWMsR0FBRyxFQUFFYixvREFBTTtZQUFFYyxJQUFJLEVBQUVkLG9EQUFNO1NBQUU7UUFDN0I7WUFBRWEsR0FBRyxFQUFFWixvREFBTTtZQUFFYSxJQUFJLEVBQUViLG9EQUFNO1NBQUU7S0FDOUI7SUFDRCxJQUFxQ1QsR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQXhDdUIsWUFBWSxHQUFrQnZCLEdBQVUsR0FBNUIsRUFBQ3dCLGVBQWUsR0FBRXhCLEdBQVUsR0FBWjtJQUNuQyxJQUErQkEsSUFBdUMsR0FBdkNBLCtDQUFRLENBQUNpQixnQkFBZ0IsQ0FBQ0gsV0FBVyxDQUFDLENBQUMsRUFBL0RXLFNBQVMsR0FBZXpCLElBQXVDLEdBQXRELEVBQUMwQixZQUFZLEdBQUUxQixJQUF1QyxHQUF6QztJQUs3QkQsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1p5QixlQUFlLENBQUNYLFlBQVksQ0FBQyxDQUFDO0tBQy9CLEVBQUM7UUFBQ0EsWUFBWTtLQUFDLENBQUMsQ0FBQztJQUVsQmQsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1oyQixZQUFZLENBQUNULGdCQUFnQixDQUFDSCxXQUFXLENBQUMsQ0FBQyxDQUFDO0tBQzdDLENBQUM7SUFDRixxQkFBTyw4REFBQ2IsdURBQVE7a0JBQ2QsNEVBQUNBLDhEQUFlO1lBQUMyQixHQUFHLEVBQUU7Z0JBQUNDLGVBQWUsRUFBQ04sWUFBWSxLQUFHYiwyREFBYSxHQUFFLFNBQVMsR0FBQyxTQUFTO2FBQUM7c0JBQzFGb0IsS0FBSzs7Ozs7aUJBQ2M7Ozs7O2FBQ1QsQ0FBQztDQUNiO0dBOUJLbEIsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBZ0NkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWxlY3Rvci5qcz83NzVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ09JTl8xLFxyXG4gIENPSU5fMixcclxuICBDT0lOXzMsXHJcbiAgQ09JTl80LFxyXG4gIENPSU5fNSxcclxuICBDT0lOXzYsXHJcbiAgQ09JTl83LFxyXG4gIENPSU5fOCxcclxuICBERUZBVUxUX1ZBTFVFLFxyXG4gIEVUSCxcclxufSBmcm9tIFwiLi4vdXRpbHMvc2FsZVRva2VuXCI7XHJcblxyXG5jb25zdCBTZWxlY3RvciA9ICh7IGRlZmF1bHRWYWx1ZSwgaWdub3JlVmFsdWUsIHNldFRva2VuLCBpZCB9KSA9PiB7XHJcbiAgY29uc3QgbWVudSA9IFtcclxuICAgIHsga2V5OiBFVEgsIG5hbWU6IEVUSCB9LFxyXG4gICAgeyBrZXk6IENPSU5fMSwgbmFtZTogQ09JTl8xIH0sXHJcbiAgICB7IGtleTogQ09JTl8yLCBuYW1lOiBDT0lOXzIgfSxcclxuICAgIHsga2V5OiBDT0lOXzMsIG5hbWU6IENPSU5fMyB9LFxyXG4gICAgeyBrZXk6IENPSU5fNCwgbmFtZTogQ09JTl80IH0sXHJcbiAgICB7IGtleTogQ09JTl81LCBuYW1lOiBDT0lOXzUgfSxcclxuICAgIHsga2V5OiBDT0lOXzYsIG5hbWU6IENPSU5fNiB9LFxyXG4gICAgeyBrZXk6IENPSU5fNywgbmFtZTogQ09JTl83IH0sXHJcbiAgICB7IGtleTogQ09JTl84LCBuYW1lOiBDT0lOXzggfSxcclxuICBdO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEl0ZW0sc2V0U2VsZWN0ZWRJdGVtXT11c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFttZW51SXRlbXMsc2V0TWVudUl0ZW1zXT11c2VTdGF0ZShnZXRGaWx0ZXJlZEl0ZW1zKGlnbm9yZVZhbHVlKSk7XHJcbiAgZnVuY3Rpb24gZ2V0RmlsdGVyZWRJdGVtcyhpZ25vcmVWYWx1ZSl7XHJcbiAgICByZXR1cm4gbWVudS5maWx0ZXIoKGl0ZW0pPT5pdGVtW1wia2V5XCJdIT09aWdub3JlVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBzZXRTZWxlY3RlZEl0ZW0oZGVmYXVsdFZhbHVlKTtcclxuICB9LFtkZWZhdWx0VmFsdWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBzZXRNZW51SXRlbXMoZ2V0RmlsdGVyZWRJdGVtcyhpZ25vcmVWYWx1ZSkpO1xyXG4gIH0pXHJcbiAgcmV0dXJuIDxEcm9wZG93bj5cclxuICAgIDxEcm9wZG93bi5CdXR0b24gY3NzPXt7YmFja2dyb3VuZENvbG9yOnNlbGVjdGVkSXRlbT09PURFRkFVTFRfVkFMVUUgP1wiIzc3NjVGM1wiOlwiIzJjMmYzNlwifX0+XHJcbiAge3NlbGVjfVxyXG4gICAgPC9Ecm9wZG93bi5CdXR0b24+XHJcbiAgPC9Ecm9wZG93bj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRyb3Bkb3duIiwiQ09JTl8xIiwiQ09JTl8yIiwiQ09JTl8zIiwiQ09JTl80IiwiQ09JTl81IiwiQ09JTl82IiwiQ09JTl83IiwiQ09JTl84IiwiREVGQVVMVF9WQUxVRSIsIkVUSCIsIlNlbGVjdG9yIiwiZGVmYXVsdFZhbHVlIiwiaWdub3JlVmFsdWUiLCJzZXRUb2tlbiIsImlkIiwiZ2V0RmlsdGVyZWRJdGVtcyIsIm1lbnUiLCJmaWx0ZXIiLCJpdGVtIiwia2V5IiwibmFtZSIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsIm1lbnVJdGVtcyIsInNldE1lbnVJdGVtcyIsIkJ1dHRvbiIsImNzcyIsImJhY2tncm91bmRDb2xvciIsInNlbGVjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Selector.js\n"));

/***/ })

});