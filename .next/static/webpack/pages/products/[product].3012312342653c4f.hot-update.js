"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/[product]",{

/***/ "./components/ProductOptions.js":
/*!**************************************!*\
  !*** ./components/ProductOptions.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductOptions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ProductOptions(param) {\n    let { name , values , selectedOptions , setOptions  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                className: \"text-xl font-semibold\",\n                children: name\n            }, void 0, false, {\n                fileName: \"/srv/websites/01lullipop-nextjs/components/ProductOptions.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inline-flex items-center flex-wrap\",\n                children: values.map((value)=>{\n                    const id = \"option-\".concat(name, \"-\").concat(value);\n                    const checked = selectedOptions[name] === value;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlfor: id,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"sr-only\",\n                                type: \"radio\",\n                                name: \"option-\".concat(name),\n                                value: value,\n                                checked: checked,\n                                onChange: ()=>{\n                                    setOptions;\n                                }\n                            }, void 0, false, {\n                                fileName: \"/srv/websites/01lullipop-nextjs/components/ProductOptions.js\",\n                                lineNumber: 15,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-2 my-3 text-lg rounded-full block cursor-pointer mr-3 \".concat(checked ? \"text-white bg-gray-900\" : \"text-gray-900 bg-gray-200\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-2\",\n                                    children: value\n                                }, void 0, false, {\n                                    fileName: \"/srv/websites/01lullipop-nextjs/components/ProductOptions.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/srv/websites/01lullipop-nextjs/components/ProductOptions.js\",\n                                lineNumber: 25,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, id, true, {\n                        fileName: \"/srv/websites/01lullipop-nextjs/components/ProductOptions.js\",\n                        lineNumber: 14,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/srv/websites/01lullipop-nextjs/components/ProductOptions.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/srv/websites/01lullipop-nextjs/components/ProductOptions.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductOptions;\nvar _c;\n$RefreshReg$(_c, \"ProductOptions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RPcHRpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFFVixTQUFTQyxlQUFlLEtBQTZDLEVBQUU7UUFBL0MsRUFBRUMsS0FBSSxFQUFFQyxPQUFNLEVBQUVDLGdCQUFlLEVBQUVDLFdBQVUsRUFBRSxHQUE3QztJQUNyQyxxQkFDRSw4REFBQ0M7OzBCQUNHLDhEQUFDQztnQkFBT0MsV0FBVTswQkFBeUJOOzs7Ozs7MEJBQzNDLDhEQUFDTztnQkFBSUQsV0FBVTswQkFFUEwsT0FBT08sR0FBRyxDQUFDQyxDQUFBQSxRQUFTO29CQUNoQixNQUFNQyxLQUFLLFVBQWtCRCxPQUFSVCxNQUFLLEtBQVMsT0FBTlM7b0JBQzdCLE1BQU1FLFVBQVVULGVBQWUsQ0FBQ0YsS0FBSyxLQUFLUztvQkFFMUMscUJBQ0ksOERBQUNHO3dCQUFlQyxTQUFTSDs7MENBQ3JCLDhEQUFDSTtnQ0FDRFIsV0FBVTtnQ0FDVlMsTUFBSztnQ0FDTGYsTUFBTSxVQUFlLE9BQUxBO2dDQUNoQlMsT0FBT0E7Z0NBQ1BFLFNBQVNBO2dDQUNUSyxVQUFVLElBQU07b0NBQ1piO2dDQUNKOzs7Ozs7MENBRUEsOERBQUNJO2dDQUFJRCxXQUFXLDJEQUN1QyxPQURvQkssVUFDMUUsMkJBQTBCLDJCQUEyQjswQ0FDbEQsNEVBQUNNO29DQUFLWCxXQUFVOzhDQUFRRzs7Ozs7Ozs7Ozs7O3VCQWJwQkM7Ozs7O2dCQWlCcEI7Ozs7Ozs7Ozs7OztBQU1oQixDQUFDO0tBbEN1QlgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0T3B0aW9ucy5qcz8xMzlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdE9wdGlvbnMoeyBuYW1lLCB2YWx1ZXMsIHNlbGVjdGVkT3B0aW9ucywgc2V0T3B0aW9ucyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGZpZWxkc2V0PlxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT0ndGV4dC14bCBmb250LXNlbWlib2xkJz57bmFtZX08L2xlZ2VuZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZmxleC13cmFwXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gYG9wdGlvbi0ke25hbWV9LSR7dmFsdWV9YFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gc2VsZWN0ZWRPcHRpb25zW25hbWVdID09PSB2YWx1ZVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwga2V5PXtpZH0gaHRtbGZvcj17aWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc3Itb25seSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BvcHRpb24tJHtuYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHAtMiBteS0zIHRleHQtbGcgcm91bmRlZC1mdWxsIGJsb2NrIGN1cnNvci1wb2ludGVyIG1yLTMgJHtjaGVja2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXdoaXRlIGJnLWdyYXktOTAwXCI6IFwidGV4dC1ncmF5LTkwMCBiZy1ncmF5LTIwMFwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3B4LTInPnt2YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9maWVsZHNldD5cblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9kdWN0T3B0aW9ucyIsIm5hbWUiLCJ2YWx1ZXMiLCJzZWxlY3RlZE9wdGlvbnMiLCJzZXRPcHRpb25zIiwiZmllbGRzZXQiLCJsZWdlbmQiLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJ2YWx1ZSIsImlkIiwiY2hlY2tlZCIsImxhYmVsIiwiaHRtbGZvciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductOptions.js\n"));

/***/ })

});