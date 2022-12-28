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

/***/ "./components/ProductCard.js":
/*!***********************************!*\
  !*** ./components/ProductCard.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helpers */ \"./utils/helpers.js\");\n\n\n\n\nvar _this = undefined;\nvar ProductCard = function(param) {\n    var product = param.product;\n    var _node = product.node, handle = _node.handle, title = _node.title;\n    var _node1 = product.node.images.edges[0].node, altText = _node1.altText, url = _node1.url;\n    var price = product.node.priceRange.minVariantPrice.amount;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/products/\".concat(handle),\n        className: \"group\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full overflow-hidden bg-gray-200 rounded-3xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative group-hover:opacity-75 h-72\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: url,\n                        alt: altText,\n                        layout: \"fill\",\n                        objectFit: \"cover\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\JonathanMJames\\\\Desktop\\\\01-lullipop-nexjs\\\\components\\\\ProductCard.js\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\JonathanMJames\\\\Desktop\\\\01-lullipop-nexjs\\\\components\\\\ProductCard.js\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\JonathanMJames\\\\Desktop\\\\01-lullipop-nexjs\\\\components\\\\ProductCard.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"mt-4 text-lg font-medium text-gray-200\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\JonathanMJames\\\\Desktop\\\\01-lullipop-nexjs\\\\components\\\\ProductCard.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-1 text-sm text-gray-200\",\n                children: _utils_helpers__WEBPACK_IMPORTED_MODULE_3__.formatter.format(price)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\JonathanMJames\\\\Desktop\\\\01-lullipop-nexjs\\\\components\\\\ProductCard.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\JonathanMJames\\\\Desktop\\\\01-lullipop-nexjs\\\\components\\\\ProductCard.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this));\n};\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QjtBQUNFO0FBQ1k7O0FBRzFDLEdBQUssQ0FBQ0csV0FBVyxHQUFHLFFBQVEsUUFBUyxDQUFDO1FBQWZDLE9BQU8sU0FBUEEsT0FBTztJQUM1QixHQUFLLENBQXFCQSxLQUFZLEdBQVpBLE9BQU8sQ0FBQ0MsSUFBSSxFQUE5QkMsTUFBTSxHQUFZRixLQUFZLENBQTlCRSxNQUFNLEVBQUVDLEtBQUssR0FBS0gsS0FBWSxDQUF0QkcsS0FBSztJQUVyQixHQUFLLENBQW9CSCxNQUFpQyxHQUFqQ0EsT0FBTyxDQUFDQyxJQUFJLENBQUNHLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRUosSUFBSSxFQUFsREssT0FBTyxHQUFVTixNQUFpQyxDQUFsRE0sT0FBTyxFQUFFQyxHQUFHLEdBQUtQLE1BQWlDLENBQXpDTyxHQUFHO0lBQ3BCLEdBQUssQ0FBQ0MsS0FBSyxHQUFHUixPQUFPLENBQUNDLElBQUksQ0FBQ1EsVUFBVSxDQUFDQyxlQUFlLENBQUNDLE1BQU07SUFFNUQsTUFBTSw2RUFDSGYsa0RBQUk7UUFBQ2dCLElBQUksRUFBRyxDQUFVLFlBQVMsT0FBUFYsTUFBTTtRQUFJVyxTQUFTLEVBQUMsQ0FBTzs7d0ZBRS9DQyxDQUFHO2dCQUFDRCxTQUFTLEVBQUMsQ0FBZ0Q7c0dBQzVEQyxDQUFHO29CQUFDRCxTQUFTLEVBQUMsQ0FBc0M7MEdBQ2xEaEIsbURBQUs7d0JBQ0prQixHQUFHLEVBQUVSLEdBQUc7d0JBQ1JTLEdBQUcsRUFBRVYsT0FBTzt3QkFDWlcsTUFBTSxFQUFDLENBQU07d0JBQ2JDLFNBQVMsRUFBQyxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7O3dGQUl0QkMsQ0FBRTtnQkFBQ04sU0FBUyxFQUFDLENBQXdDOzBCQUFFVixLQUFLOzs7Ozs7d0ZBQzVEaUIsQ0FBQztnQkFBQ1AsU0FBUyxFQUFDLENBQTRCOzBCQUFFZiw0REFBZ0IsQ0FBQ1UsS0FBSzs7Ozs7Ozs7Ozs7O0FBSXpFLENBQUM7S0F4QktULFdBQVc7QUEwQmpCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanM/YzlhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQge2Zvcm1hdHRlcn0gZnJvbSAnLi4vdXRpbHMvaGVscGVycydcclxuXHJcblxyXG5jb25zdCBQcm9kdWN0Q2FyZCA9ICh7IHByb2R1Y3QgfSkgPT4ge1xyXG4gIGNvbnN0IHsgaGFuZGxlLCB0aXRsZSB9ID0gcHJvZHVjdC5ub2RlXHJcblxyXG4gIGNvbnN0IHsgYWx0VGV4dCwgdXJsIH0gPSBwcm9kdWN0Lm5vZGUuaW1hZ2VzLmVkZ2VzWzBdLm5vZGVcclxuICBjb25zdCBwcmljZSA9IHByb2R1Y3Qubm9kZS5wcmljZVJhbmdlLm1pblZhcmlhbnRQcmljZS5hbW91bnRcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtoYW5kbGV9YH0gY2xhc3NOYW1lPVwiZ3JvdXBcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktMjAwIHJvdW5kZWQtM3hsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyb3VwLWhvdmVyOm9wYWNpdHktNzUgaC03MlwiPlxyXG4gICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgc3JjPXt1cmx9XHJcbiAgICAgICAgICAgICAgYWx0PXthbHRUZXh0fVxyXG4gICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC00IHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTIwMFwiPnt0aXRsZX08L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1zbSB0ZXh0LWdyYXktMjAwXCI+e2Zvcm1hdHRlci5mb3JtYXQocHJpY2UpfTwvcD5cclxuXHJcbiAgICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZCJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJmb3JtYXR0ZXIiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3QiLCJub2RlIiwiaGFuZGxlIiwidGl0bGUiLCJpbWFnZXMiLCJlZGdlcyIsImFsdFRleHQiLCJ1cmwiLCJwcmljZSIsInByaWNlUmFuZ2UiLCJtaW5WYXJpYW50UHJpY2UiLCJhbW91bnQiLCJocmVmIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiaDMiLCJwIiwiZm9ybWF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductCard.js\n");

/***/ })

});