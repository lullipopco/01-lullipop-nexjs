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

/***/ "./components/ProductForm.js":
/*!***********************************!*\
  !*** ./components/ProductForm.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ProductForm(param) {\n    let { product  } = param;\n    var _product_variants_edges;\n    _s();\n    const allVariantOptions = (_product_variants_edges = product.variants.edges) === null || _product_variants_edges === void 0 ? void 0 : _product_variants_edges.map((variant)=>{\n        var _variant_node_image;\n        const allOptions = {};\n        variant.node.selectedOptions.map((item)=>{\n            allOptions[item.name] = item.value;\n        });\n        return {\n            id: variant.node.id,\n            title: product.title,\n            handle: product.handle,\n            image: (_variant_node_image = variant.node.image) === null || _variant_node_image === void 0 ? void 0 : _variant_node_image.url,\n            otiions: allOptions,\n            variantTitle: variant.node.title,\n            variantPrice: variant.node.priceV2.amount,\n            variantQuantity: 1\n        };\n    });\n    const defaultValues = {};\n    product.options.map((item)=>{\n        defaultValues[item.name] = item.values[0];\n    });\n    const [selectedVariant, setSelectedVariant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(allVariantOptions[0]);\n    const [selectedOptions, setselectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValues);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold\",\n                children: product.title\n            }, void 0, false, {\n                fileName: \"/srv/websites/01lullipop-nextjs/components/ProductForm.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"pd-6\"\n            }, void 0, false, {\n                fileName: \"/srv/websites/01lullipop-nextjs/components/ProductForm.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/srv/websites/01lullipop-nextjs/components/ProductForm.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductForm, \"qI8+yHIrvwPSRKlWyRvzHKcZmBg=\");\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBRTVCLFNBQVNFLFlBQVksS0FBVyxFQUFFO1FBQWIsRUFBRUMsUUFBTyxFQUFFLEdBQVg7UUFHTkE7O0lBQTFCLE1BQU1DLG9CQUFvQkQsQ0FBQUEsMEJBQUFBLFFBQVFFLFFBQVEsQ0FBQ0MsS0FBSyxjQUF0QkgscUNBQUFBLEtBQUFBLElBQUFBLHdCQUF3QkksSUFBSUMsQ0FBQUEsVUFBVztZQVdsREE7UUFWWCxNQUFNQyxhQUFhLENBQUM7UUFFcEJELFFBQVFFLElBQUksQ0FBQ0MsZUFBZSxDQUFDSixHQUFHLENBQUNLLENBQUFBLE9BQVE7WUFDckNILFVBQVUsQ0FBQ0csS0FBS0MsSUFBSSxDQUFDLEdBQUdELEtBQUtFLEtBQUs7UUFDdEM7UUFFQSxPQUFPO1lBQ0hDLElBQUlQLFFBQVFFLElBQUksQ0FBQ0ssRUFBRTtZQUNuQkMsT0FBT2IsUUFBUWEsS0FBSztZQUNwQkMsUUFBUWQsUUFBUWMsTUFBTTtZQUN0QkMsT0FBT1YsQ0FBQUEsc0JBQUFBLFFBQVFFLElBQUksQ0FBQ1EsS0FBSyxjQUFsQlYsaUNBQUFBLEtBQUFBLElBQUFBLG9CQUFvQlcsR0FBRztZQUM5QkMsU0FBU1g7WUFDVFksY0FBY2IsUUFBUUUsSUFBSSxDQUFDTSxLQUFLO1lBQ2hDTSxjQUFjZCxRQUFRRSxJQUFJLENBQUNhLE9BQU8sQ0FBQ0MsTUFBTTtZQUN6Q0MsaUJBQWlCO1FBRXJCO0lBQ0o7SUFFQSxNQUFNQyxnQkFBZ0IsQ0FBQztJQUN2QnZCLFFBQVF3QixPQUFPLENBQUNwQixHQUFHLENBQUNLLENBQUFBLE9BQVE7UUFDeEJjLGFBQWEsQ0FBQ2QsS0FBS0MsSUFBSSxDQUFDLEdBQUdELEtBQUtnQixNQUFNLENBQUMsRUFBRTtJQUM3QztJQUVBLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBRzlCLCtDQUFRQSxDQUFDSSxpQkFBaUIsQ0FBQyxFQUFFO0lBQzNFLE1BQU0sQ0FBQ08saUJBQWlCb0IsbUJBQW1CLEdBQUcvQiwrQ0FBUUEsQ0FBQzBCO0lBR3pELHFCQUVFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXNCOUIsUUFBUWEsS0FBSzs7Ozs7OzBCQUNqRCw4REFBQ21CO2dCQUFLRixXQUFVOzs7Ozs7Ozs7Ozs7QUFJeEIsQ0FBQztHQXhDdUIvQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RGb3JtLmpzP2Y0OWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0Rm9ybSh7IHByb2R1Y3QgfSkge1xuICAgIFxuXG4gICAgY29uc3QgYWxsVmFyaWFudE9wdGlvbnMgPSBwcm9kdWN0LnZhcmlhbnRzLmVkZ2VzPy5tYXAodmFyaWFudCA9PiB7XG4gICAgICAgIGNvbnN0IGFsbE9wdGlvbnMgPSB7fVxuXG4gICAgICAgIHZhcmlhbnQubm9kZS5zZWxlY3RlZE9wdGlvbnMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgYWxsT3B0aW9uc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdmFyaWFudC5ub2RlLmlkLFxuICAgICAgICAgICAgdGl0bGU6IHByb2R1Y3QudGl0bGUsXG4gICAgICAgICAgICBoYW5kbGU6IHByb2R1Y3QuaGFuZGxlLFxuICAgICAgICAgICAgaW1hZ2U6IHZhcmlhbnQubm9kZS5pbWFnZT8udXJsLFxuICAgICAgICAgICAgb3RpaW9uczogYWxsT3B0aW9ucyxcbiAgICAgICAgICAgIHZhcmlhbnRUaXRsZTogdmFyaWFudC5ub2RlLnRpdGxlLFxuICAgICAgICAgICAgdmFyaWFudFByaWNlOiB2YXJpYW50Lm5vZGUucHJpY2VWMi5hbW91bnQsXG4gICAgICAgICAgICB2YXJpYW50UXVhbnRpdHk6IDFcblxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZXMgPSB7fVxuICAgIHByb2R1Y3Qub3B0aW9ucy5tYXAoaXRlbSA9PiB7XG4gICAgICAgIGRlZmF1bHRWYWx1ZXNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWVzWzBdXG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBbc2VsZWN0ZWRWYXJpYW50LCBzZXRTZWxlY3RlZFZhcmlhbnRdID0gdXNlU3RhdGUoYWxsVmFyaWFudE9wdGlvbnNbMF0pXG4gICAgY29uc3QgW3NlbGVjdGVkT3B0aW9ucywgc2V0c2VsZWN0ZWRPcHRpb25zXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZXMpXG5cbiAgIFxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9J3JvdW5kZWQtMnhsIHAtNCBzaGFkb3ctbGcgZmxleCBmbGV4LWNvbCB3LWZ1bGwgbWQ6dy0xLzMnPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3Byb2R1Y3QudGl0bGV9PC9oMj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGQtNlwiPjwvc3Bhbj5cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiUHJvZHVjdEZvcm0iLCJwcm9kdWN0IiwiYWxsVmFyaWFudE9wdGlvbnMiLCJ2YXJpYW50cyIsImVkZ2VzIiwibWFwIiwidmFyaWFudCIsImFsbE9wdGlvbnMiLCJub2RlIiwic2VsZWN0ZWRPcHRpb25zIiwiaXRlbSIsIm5hbWUiLCJ2YWx1ZSIsImlkIiwidGl0bGUiLCJoYW5kbGUiLCJpbWFnZSIsInVybCIsIm90aWlvbnMiLCJ2YXJpYW50VGl0bGUiLCJ2YXJpYW50UHJpY2UiLCJwcmljZVYyIiwiYW1vdW50IiwidmFyaWFudFF1YW50aXR5IiwiZGVmYXVsdFZhbHVlcyIsIm9wdGlvbnMiLCJ2YWx1ZXMiLCJzZWxlY3RlZFZhcmlhbnQiLCJzZXRTZWxlY3RlZFZhcmlhbnQiLCJzZXRzZWxlY3RlZE9wdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductForm.js\n"));

/***/ })

});