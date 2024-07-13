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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n // Import public provider\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_5__.chain.hardhat,\n    {\n        id: 1337,\n        name: \"Hardhat\",\n        network: \"localhost\",\n        rpcUrls: {\n            default: \"http://127.0.0.1:8545\"\n        },\n        nativeCurrency: {\n            name: \"Hardhat Eth\",\n            symbol: \"ETH\",\n            decimals: 18\n        },\n        blockExplorers: null,\n        testnet: true\n    }\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__.alchemyProvider)({\n        apiKey: \"bce8a15dd364a66eed23a08411c3e59c8ba39fb25867a9baf4256ebe72ec5f2b\",\n        priority: 1\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.getDefaultWallets)({\n    appName: \"Mock Dex\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_3___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Muhangi\\\\UniswapTokenExchange-Dex-\\\\pages\\\\_app.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Muhangi\\\\UniswapTokenExchange-Dex-\\\\pages\\\\_app.js\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Muhangi\\\\UniswapTokenExchange-Dex-\\\\pages\\\\_app.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNLO0FBQ0U7QUFDVTtBQU1YO0FBRTBDO0FBQ2hCO0FBQ0YsQ0FBQyx5QkFBeUI7QUFFbEYsTUFBTSxFQUFFWSxNQUFNLEdBQUVDLFFBQVEsR0FBRSxHQUFHTixzREFBZSxDQUMxQztJQUNFRCxnREFBYTtJQUNiO1FBQ0VTLEVBQUUsRUFBRSxJQUFJO1FBQ1JDLElBQUksRUFBRSxTQUFTO1FBQ2ZDLE9BQU8sRUFBRSxXQUFXO1FBQ3BCQyxPQUFPLEVBQUU7WUFDUEMsT0FBTyxFQUFFLHVCQUF1QjtTQUNqQztRQUNEQyxjQUFjLEVBQUU7WUFDZEosSUFBSSxFQUFFLGFBQWE7WUFDbkJLLE1BQU0sRUFBRSxLQUFLO1lBQ2JDLFFBQVEsRUFBRSxFQUFFO1NBQ2I7UUFDREMsY0FBYyxFQUFFLElBQUk7UUFDcEJDLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7Q0FDRixFQUNEO0lBQ0VkLHdFQUFlLENBQUM7UUFDZGUsTUFBTSxFQUFFLGtFQUFrRTtRQUMxRUMsUUFBUSxFQUFFLENBQUM7S0FDWixDQUFDO0lBQ0ZmLHNFQUFjLEVBQUU7Q0FDakIsQ0FDRjtBQUVELE1BQU0sRUFBRWdCLFVBQVUsR0FBRSxHQUFHekIseUVBQWlCLENBQUM7SUFDdkMwQixPQUFPLEVBQUUsVUFBVTtJQUNuQmhCLE1BQU07Q0FDUCxDQUFDO0FBRUYsTUFBTWlCLFdBQVcsR0FBR3JCLG1EQUFZLENBQUM7SUFDL0JzQixXQUFXLEVBQUUsSUFBSTtJQUNqQkgsVUFBVTtJQUNWZCxRQUFRO0NBQ1QsQ0FBQztBQUVGLE1BQU1rQixPQUFPLEdBQUc5QixtREFBSyxDQUFDSSxxRUFBYSxFQUFFLEVBQUU7SUFDckMyQixNQUFNLEVBQUU7UUFDTkMsV0FBVyxFQUFFLFNBQVM7UUFDdEJDLHFCQUFxQixFQUFFLE1BQU07S0FDOUI7Q0FDRixDQUFDO0FBRUYsU0FBU0MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdkMscUJBQ0UsOERBQUM1Qiw4Q0FBVztRQUFDNkIsTUFBTSxFQUFFVCxXQUFXO2tCQUM5Qiw0RUFBQzFCLHNFQUFrQjtZQUFDUyxNQUFNLEVBQUVBLE1BQU07WUFBRTJCLEtBQUssRUFBRVIsT0FBTztzQkFDaEQsNEVBQUNLLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7Ozs7O2dCQUNUOzs7OztZQUNULENBQ2Q7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmlzd2FwLXRva2VuLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBtZXJnZSBmcm9tIFwibG9kYXNoL21lcmdlXCI7XHJcbmltcG9ydCBcIkByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldERlZmF1bHRXYWxsZXRzLFxyXG4gIFJhaW5ib3dLaXRQcm92aWRlcixcclxuICBkYXJrVGhlbWUsXHJcbiAgbWlkbmlnaHRUaGVtZSxcclxufSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xyXG5cclxuaW1wb3J0IHsgY2hhaW4sIGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiO1xyXG5pbXBvcnQgeyBhbGNoZW15UHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL2FsY2hlbXlcIjtcclxuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL3B1YmxpY1wiOyAvLyBJbXBvcnQgcHVibGljIHByb3ZpZGVyXHJcblxyXG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcclxuICBbXHJcbiAgICBjaGFpbi5oYXJkaGF0LFxyXG4gICAge1xyXG4gICAgICBpZDogMTMzNyxcclxuICAgICAgbmFtZTogXCJIYXJkaGF0XCIsXHJcbiAgICAgIG5ldHdvcms6IFwibG9jYWxob3N0XCIsXHJcbiAgICAgIHJwY1VybHM6IHtcclxuICAgICAgICBkZWZhdWx0OiBcImh0dHA6Ly8xMjcuMC4wLjE6ODU0NVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBuYXRpdmVDdXJyZW5jeToge1xyXG4gICAgICAgIG5hbWU6IFwiSGFyZGhhdCBFdGhcIixcclxuICAgICAgICBzeW1ib2w6IFwiRVRIXCIsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4LFxyXG4gICAgICB9LFxyXG4gICAgICBibG9ja0V4cGxvcmVyczogbnVsbCxcclxuICAgICAgdGVzdG5ldDogdHJ1ZSxcclxuICAgIH1cclxuICBdLFxyXG4gIFtcclxuICAgIGFsY2hlbXlQcm92aWRlcih7XHJcbiAgICAgIGFwaUtleTogXCJiY2U4YTE1ZGQzNjRhNjZlZWQyM2EwODQxMWMzZTU5YzhiYTM5ZmIyNTg2N2E5YmFmNDI1NmViZTcyZWM1ZjJiXCIsXHJcbiAgICAgIHByaW9yaXR5OiAxLFxyXG4gICAgfSksXHJcbiAgICBwdWJsaWNQcm92aWRlcigpLCAvLyBBZGQgdGhlIHB1YmxpYyBwcm92aWRlciBmb3IgbG9jYWwgbmV0d29ya3NcclxuICBdXHJcbik7XHJcblxyXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcclxuICBhcHBOYW1lOiBcIk1vY2sgRGV4XCIsXHJcbiAgY2hhaW5zLFxyXG59KTtcclxuXHJcbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcclxuICBhdXRvQ29ubmVjdDogdHJ1ZSxcclxuICBjb25uZWN0b3JzLFxyXG4gIHByb3ZpZGVyLFxyXG59KTtcclxuXHJcbmNvbnN0IG15VGhlbWUgPSBtZXJnZShtaWRuaWdodFRoZW1lKCksIHtcclxuICBjb2xvcnM6IHtcclxuICAgIGFjY2VudENvbG9yOiBcIiMxODE4MWJcIixcclxuICAgIGFjY2VudENvbG9yRm9yZWdyb3VuZDogXCIjZmZmXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdhZ21pQ29uZmlnIGNsaWVudD17d2FnbWlDbGllbnR9PlxyXG4gICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfSB0aGVtZT17bXlUaGVtZX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cclxuICAgIDwvV2FnbWlDb25maWc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lcmdlIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJkYXJrVGhlbWUiLCJtaWRuaWdodFRoZW1lIiwiY2hhaW4iLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsImFsY2hlbXlQcm92aWRlciIsInB1YmxpY1Byb3ZpZGVyIiwiY2hhaW5zIiwicHJvdmlkZXIiLCJoYXJkaGF0IiwiaWQiLCJuYW1lIiwibmV0d29yayIsInJwY1VybHMiLCJkZWZhdWx0IiwibmF0aXZlQ3VycmVuY3kiLCJzeW1ib2wiLCJkZWNpbWFscyIsImJsb2NrRXhwbG9yZXJzIiwidGVzdG5ldCIsImFwaUtleSIsInByaW9yaXR5IiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwibXlUaGVtZSIsImNvbG9ycyIsImFjY2VudENvbG9yIiwiYWNjZW50Q29sb3JGb3JlZ3JvdW5kIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

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