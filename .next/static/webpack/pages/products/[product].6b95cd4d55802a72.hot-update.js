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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _s = $RefreshSig$();\nfunction ProductForm(param) {\n    let { product  } = param;\n    var _products_variants_edges;\n    _s();\n    console.log(product);\n    const AllVariantOptions = (_products_variants_edges = products.variants.edges) === null || _products_variants_edges === void 0 ? void 0 : _products_variants_edges.map((variant)=>{\n        var _variant_node_image;\n        const allOptions = {};\n        variant.node.selectedOptions.map((item)=>{\n            allOptions[item.name] = item.value;\n        });\n        return {\n            id: variant.node.id,\n            title: variant.node.product.title,\n            handle: variant.node.product.handle,\n            image: (_variant_node_image = variant.node.image) === null || _variant_node_image === void 0 ? void 0 : _variant_node_image.url,\n            otiions: allOptions,\n            variantTitle: variant.node.title,\n            variantPrice: variant.node.priceV2.amount,\n            variantQuantity: 1\n        };\n    });\n    const defaultValues = {};\n    product.otiions.map((item)=>{\n        defaultValues[item.name] = item.values[0];\n    });\n    const [selectedVariant, setSelectedVariant] = useState(allVariantOtions);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/srv/websites/01lullipop-nextjs/components/ProductForm.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductForm, \"IUS9+d3fRvnlWBDmUjyMEQiGmrs=\");\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVBOztBQUFlLFNBQVNBLFlBQVksS0FBVyxFQUFFO1FBQWIsRUFBRUMsUUFBTyxFQUFFLEdBQVg7UUFHTkM7O0lBRjFCQyxRQUFRQyxHQUFHLENBQUNIO0lBRVosTUFBTUksb0JBQW9CSCxDQUFBQSwyQkFBQUEsU0FBU0ksUUFBUSxDQUFDQyxLQUFLLGNBQXZCTCxzQ0FBQUEsS0FBQUEsSUFBQUEseUJBQXlCTSxJQUFJQyxDQUFBQSxVQUFXO1lBV25EQTtRQVZYLE1BQU1DLGFBQWEsQ0FBQztRQUVwQkQsUUFBUUUsSUFBSSxDQUFDQyxlQUFlLENBQUNKLEdBQUcsQ0FBQ0ssQ0FBQUEsT0FBUTtZQUNyQ0gsVUFBVSxDQUFDRyxLQUFLQyxJQUFJLENBQUMsR0FBR0QsS0FBS0UsS0FBSztRQUN0QztRQUVBLE9BQU87WUFDSEMsSUFBSVAsUUFBUUUsSUFBSSxDQUFDSyxFQUFFO1lBQ25CQyxPQUFPUixRQUFRRSxJQUFJLENBQUNWLE9BQU8sQ0FBQ2dCLEtBQUs7WUFDakNDLFFBQVFULFFBQVFFLElBQUksQ0FBQ1YsT0FBTyxDQUFDaUIsTUFBTTtZQUNuQ0MsT0FBT1YsQ0FBQUEsc0JBQUFBLFFBQVFFLElBQUksQ0FBQ1EsS0FBSyxjQUFsQlYsaUNBQUFBLEtBQUFBLElBQUFBLG9CQUFvQlcsR0FBRztZQUM5QkMsU0FBU1g7WUFDVFksY0FBY2IsUUFBUUUsSUFBSSxDQUFDTSxLQUFLO1lBQ2hDTSxjQUFjZCxRQUFRRSxJQUFJLENBQUNhLE9BQU8sQ0FBQ0MsTUFBTTtZQUN6Q0MsaUJBQWlCO1FBRXJCO0lBQ0o7SUFFQSxNQUFNQyxnQkFBZ0IsQ0FBQztJQUN2QjFCLFFBQVFvQixPQUFPLENBQUNiLEdBQUcsQ0FBQ0ssQ0FBQUEsT0FBUTtRQUN4QmMsYUFBYSxDQUFDZCxLQUFLQyxJQUFJLENBQUMsR0FBR0QsS0FBS2UsTUFBTSxDQUFDLEVBQUU7SUFDN0M7SUFFQSxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdDLFNBQVNDO0lBRXpELHFCQUVFLDhEQUFDQzs7Ozs7QUFJTCxDQUFDO0dBcEN1QmpDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdEZvcm0uanM/ZjQ5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEZvcm0oeyBwcm9kdWN0IH0pIHtcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0KVxuXG4gICAgY29uc3QgQWxsVmFyaWFudE9wdGlvbnMgPSBwcm9kdWN0cy52YXJpYW50cy5lZGdlcz8ubWFwKHZhcmlhbnQgPT4ge1xuICAgICAgICBjb25zdCBhbGxPcHRpb25zID0ge31cblxuICAgICAgICB2YXJpYW50Lm5vZGUuc2VsZWN0ZWRPcHRpb25zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGFsbE9wdGlvbnNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWVcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHZhcmlhbnQubm9kZS5pZCxcbiAgICAgICAgICAgIHRpdGxlOiB2YXJpYW50Lm5vZGUucHJvZHVjdC50aXRsZSxcbiAgICAgICAgICAgIGhhbmRsZTogdmFyaWFudC5ub2RlLnByb2R1Y3QuaGFuZGxlLFxuICAgICAgICAgICAgaW1hZ2U6IHZhcmlhbnQubm9kZS5pbWFnZT8udXJsLFxuICAgICAgICAgICAgb3RpaW9uczogYWxsT3B0aW9ucyxcbiAgICAgICAgICAgIHZhcmlhbnRUaXRsZTogdmFyaWFudC5ub2RlLnRpdGxlLFxuICAgICAgICAgICAgdmFyaWFudFByaWNlOiB2YXJpYW50Lm5vZGUucHJpY2VWMi5hbW91bnQsXG4gICAgICAgICAgICB2YXJpYW50UXVhbnRpdHk6IDFcblxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZXMgPSB7fVxuICAgIHByb2R1Y3Qub3RpaW9ucy5tYXAoaXRlbSA9PiB7XG4gICAgICAgIGRlZmF1bHRWYWx1ZXNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWVzWzBdXG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBbc2VsZWN0ZWRWYXJpYW50LCBzZXRTZWxlY3RlZFZhcmlhbnRdID0gdXNlU3RhdGUoYWxsVmFyaWFudE90aW9ucylcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUHJvZHVjdEZvcm0iLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJjb25zb2xlIiwibG9nIiwiQWxsVmFyaWFudE9wdGlvbnMiLCJ2YXJpYW50cyIsImVkZ2VzIiwibWFwIiwidmFyaWFudCIsImFsbE9wdGlvbnMiLCJub2RlIiwic2VsZWN0ZWRPcHRpb25zIiwiaXRlbSIsIm5hbWUiLCJ2YWx1ZSIsImlkIiwidGl0bGUiLCJoYW5kbGUiLCJpbWFnZSIsInVybCIsIm90aWlvbnMiLCJ2YXJpYW50VGl0bGUiLCJ2YXJpYW50UHJpY2UiLCJwcmljZVYyIiwiYW1vdW50IiwidmFyaWFudFF1YW50aXR5IiwiZGVmYXVsdFZhbHVlcyIsInZhbHVlcyIsInNlbGVjdGVkVmFyaWFudCIsInNldFNlbGVjdGVkVmFyaWFudCIsInVzZVN0YXRlIiwiYWxsVmFyaWFudE90aW9ucyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductForm.js\n"));

/***/ })

});