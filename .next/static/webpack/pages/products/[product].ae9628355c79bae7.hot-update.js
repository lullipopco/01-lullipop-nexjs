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

/***/ "./components/ProductPageContent.js":
/*!******************************************!*\
  !*** ./components/ProductPageContent.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductPageContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/legacy/image */ \"./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ProductPageContent(param) {\n    let { product  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flext flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6-xl w-11/12 mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-md border bg-stone-700 rounded-2xl overflow-hidden shadow-lg md:w-1/2\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative h-96 w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_legacy_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: product.images.edges[0].node.url,\n                    alt: product.images.edges[0].node.altText,\n                    layout: \"fill\",\n                    objectFit: \"cover\"\n                }, void 0, false, {\n                    fileName: \"/srv/websites/01lullipop-nextjs/components/ProductPageContent.js\",\n                    lineNumber: 9,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/srv/websites/01lullipop-nextjs/components/ProductPageContent.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/srv/websites/01lullipop-nextjs/components/ProductPageContent.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/srv/websites/01lullipop-nextjs/components/ProductPageContent.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductPageContent;\nvar _c;\n$RefreshReg$(_c, \"ProductPageContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RQYWdlQ29udGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXFDO0FBRXRCLFNBQVNDLG1CQUFtQixLQUFXLEVBQUU7UUFBYixFQUFFQyxRQUFPLEVBQUUsR0FBWDtJQUN6QyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFFWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDZiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNKLDBEQUFLQTtvQkFDTkssS0FBS0gsUUFBUUksTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDQyxJQUFJLENBQUNDLEdBQUc7b0JBQ3JDQyxLQUFLUixRQUFRSSxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFLENBQUNDLElBQUksQ0FBQ0csT0FBTztvQkFDekNDLFFBQU87b0JBQ1BDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQixDQUFDO0tBaEJ1QloiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0UGFnZUNvbnRlbnQuanM/MmZkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvbGVnYWN5L2ltYWdlXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdFBhZ2VDb250ZW50KHsgcHJvZHVjdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4dCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteS04IG1kOmZsZXgtcm93IG1kOml0ZW1zLXN0YXJ0IG1kOnNwYWNlLXktMCBcbiAgICBtZDpzcGFjZS14LTQgbGc6c3BhY2UteC04IG1heC13LTYteGwgdy0xMS8xMiBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kIGJvcmRlciBiZy1zdG9uZS03MDAgcm91bmRlZC0yeGwgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZyBtZDp3LTEvMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtOTYgdy1mdWxsXCI+XG4gICAgICAgICAgPEltYWdlIFxuICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZXMuZWRnZXNbMF0ubm9kZS51cmx9IFxuICAgICAgICAgIGFsdD17cHJvZHVjdC5pbWFnZXMuZWRnZXNbMF0ubm9kZS5hbHRUZXh0fVxuICAgICAgICAgIGxheW91dD1cImZpbGxcIiBcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJQcm9kdWN0UGFnZUNvbnRlbnQiLCJwcm9kdWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiaW1hZ2VzIiwiZWRnZXMiLCJub2RlIiwidXJsIiwiYWx0IiwiYWx0VGV4dCIsImxheW91dCIsIm9iamVjdEZpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductPageContent.js\n"));

/***/ })

});