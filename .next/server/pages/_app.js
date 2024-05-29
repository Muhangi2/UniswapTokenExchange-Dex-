/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_5__.chain.polygonMumbai\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__.alchemyProvider)({\n        apiKey: \"bce8a15dd364a66eed23a08411c3e59c8ba39fb25867a9baf4256ebe72ec5f2b\",\n        priority: 1\n    }), \n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.getDefaultWallets)({\n    appName: \"Mock Dex\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_3___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\pages\\\\_app.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\pages\\\\_app.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\pages\\\\_app.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp); //\"wagmi\": \"^0.6.4\"\n // polygonAmoy\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDSztBQUNFO0FBQ1U7QUFNWDtBQUUwQztBQUNoQjtBQUUxRCxNQUFNLEVBQUVXLE1BQU0sR0FBRUMsUUFBUSxHQUFFLEdBQUdMLHNEQUFlLENBQzFDO0lBQUNELHNEQUFtQjtDQUFDLEVBQ3JCO0lBQ0VJLHdFQUFlLENBQUM7UUFDZEksTUFBTSxFQUNKLGtFQUFrRTtRQUNwRUMsUUFBUSxFQUFFLENBQUM7S0FDWixDQUFDO0NBQ0gsQ0FDRjtBQUVELE1BQU0sRUFBRUMsVUFBVSxHQUFFLEdBQUdkLHlFQUFpQixDQUFDO0lBQ3ZDZSxPQUFPLEVBQUUsVUFBVTtJQUNuQk4sTUFBTTtDQUNQLENBQUM7QUFFRixNQUFNTyxXQUFXLEdBQUdWLG1EQUFZLENBQUM7SUFDL0JXLFdBQVcsRUFBRSxJQUFJO0lBQ2pCSCxVQUFVO0lBQ1ZKLFFBQVE7Q0FDVCxDQUFDO0FBRUYsTUFBTVEsT0FBTyxHQUFHbkIsbURBQUssQ0FBQ0kscUVBQWEsRUFBRSxFQUFFO0lBQ3JDZ0IsTUFBTSxFQUFFO1FBQ05DLFdBQVcsRUFBRSxTQUFTO1FBQ3RCQyxxQkFBcUIsRUFBRSxNQUFNO0tBQzlCO0NBQ0YsQ0FBQztBQUVGLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDakIsOENBQVc7UUFBQ2tCLE1BQU0sRUFBRVQsV0FBVztrQkFDOUIsNEVBQUNmLHNFQUFrQjtZQUFDUSxNQUFNLEVBQUVBLE1BQU07WUFBRWlCLEtBQUssRUFBRVIsT0FBTztzQkFDaEQsNEVBQUNLLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7Ozs7O2dCQUNUOzs7OztZQUNULENBQ2Q7Q0FDSDtBQUNELGlFQUFlRixLQUFLLEVBQUMsQ0FDckIsbUJBQW1CO0NBRW5CLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmlzd2FwLXRva2VuLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBtZXJnZSBmcm9tIFwibG9kYXNoL21lcmdlXCI7XHJcbmltcG9ydCBcIkByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldERlZmF1bHRXYWxsZXRzLFxyXG4gIFJhaW5ib3dLaXRQcm92aWRlcixcclxuICBkYXJrVGhlbWUsXHJcbiAgbWlkbmlnaHRUaGVtZSxcclxufSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xyXG5cclxuaW1wb3J0IHsgY2hhaW4sIGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiO1xyXG5pbXBvcnQgeyBhbGNoZW15UHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL2FsY2hlbXlcIjsgXHJcblxyXG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcclxuICBbY2hhaW4ucG9seWdvbk11bWJhaV0sXHJcbiAgW1xyXG4gICAgYWxjaGVteVByb3ZpZGVyKHtcclxuICAgICAgYXBpS2V5OlxyXG4gICAgICAgIFwiYmNlOGExNWRkMzY0YTY2ZWVkMjNhMDg0MTFjM2U1OWM4YmEzOWZiMjU4NjdhOWJhZjQyNTZlYmU3MmVjNWYyYlwiLFxyXG4gICAgICBwcmlvcml0eTogMSxcclxuICAgIH0pLFxyXG4gIF1cclxuKTtcclxuXHJcbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xyXG4gIGFwcE5hbWU6IFwiTW9jayBEZXhcIixcclxuICBjaGFpbnMsXHJcbn0pO1xyXG5cclxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gIGF1dG9Db25uZWN0OiB0cnVlLFxyXG4gIGNvbm5lY3RvcnMsXHJcbiAgcHJvdmlkZXIsXHJcbn0pO1xyXG5cclxuY29uc3QgbXlUaGVtZSA9IG1lcmdlKG1pZG5pZ2h0VGhlbWUoKSwge1xyXG4gIGNvbG9yczoge1xyXG4gICAgYWNjZW50Q29sb3I6IFwiIzE4MTgxYlwiLFxyXG4gICAgYWNjZW50Q29sb3JGb3JlZ3JvdW5kOiBcIiNmZmZcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XHJcbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9IHRoZW1lPXtteVRoZW1lfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxyXG4gICAgPC9XYWdtaUNvbmZpZz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4vL1wid2FnbWlcIjogXCJeMC42LjRcIlxyXG5cclxuLy8gcG9seWdvbkFtb3lcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVyZ2UiLCJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsImRhcmtUaGVtZSIsIm1pZG5pZ2h0VGhlbWUiLCJjaGFpbiIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiYWxjaGVteVByb3ZpZGVyIiwiY2hhaW5zIiwicHJvdmlkZXIiLCJwb2x5Z29uTXVtYmFpIiwiYXBpS2V5IiwicHJpb3JpdHkiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJteVRoZW1lIiwiY29sb3JzIiwiYWNjZW50Q29sb3IiLCJhY2NlbnRDb2xvckZvcmVncm91bmQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();