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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ProductForm(param) {\n    let { product  } = param;\n    var _product_variants_edges;\n    _s();\n    const allVariantOptions = (_product_variants_edges = product.variants.edges) === null || _product_variants_edges === void 0 ? void 0 : _product_variants_edges.map((variant)=>{\n        var _variant_node_image;\n        const allOptions = {};\n        variant.node.selectedOptions.map((item)=>{\n            allOptions[item.name] = item.value;\n        });\n        return {\n            id: variant.node.id,\n            title: product.title,\n            handle: product.handle,\n            image: (_variant_node_image = variant.node.image) === null || _variant_node_image === void 0 ? void 0 : _variant_node_image.url,\n            otiions: allOptions,\n            variantTitle: variant.node.title,\n            variantPrice: variant.node.priceV2.amount,\n            variantQuantity: 1\n        };\n    });\n    const defaultValues = {};\n    product.options.map((item)=>{\n        defaultValues[item.name] = item.values[0];\n    });\n    const [selectedVariant, setSelectedVariant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(allVariantOptions[0]);\n    const [selectedOptions, setselectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValues);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold\",\n                children: product.title\n            }, void 0, false, {\n                fileName: \"/srv/websites/01lullipop-nextjs/components/ProductForm.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this),\n            \"span.pd-6\"\n        ]\n    }, void 0, true, {\n        fileName: \"/srv/websites/01lullipop-nextjs/components/ProductForm.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductForm, \"qI8+yHIrvwPSRKlWyRvzHKcZmBg=\");\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBRTVCLFNBQVNFLFlBQVksS0FBVyxFQUFFO1FBQWIsRUFBRUMsUUFBTyxFQUFFLEdBQVg7UUFHTkE7O0lBQTFCLE1BQU1DLG9CQUFvQkQsQ0FBQUEsMEJBQUFBLFFBQVFFLFFBQVEsQ0FBQ0MsS0FBSyxjQUF0QkgscUNBQUFBLEtBQUFBLElBQUFBLHdCQUF3QkksSUFBSUMsQ0FBQUEsVUFBVztZQVdsREE7UUFWWCxNQUFNQyxhQUFhLENBQUM7UUFFcEJELFFBQVFFLElBQUksQ0FBQ0MsZUFBZSxDQUFDSixHQUFHLENBQUNLLENBQUFBLE9BQVE7WUFDckNILFVBQVUsQ0FBQ0csS0FBS0MsSUFBSSxDQUFDLEdBQUdELEtBQUtFLEtBQUs7UUFDdEM7UUFFQSxPQUFPO1lBQ0hDLElBQUlQLFFBQVFFLElBQUksQ0FBQ0ssRUFBRTtZQUNuQkMsT0FBT2IsUUFBUWEsS0FBSztZQUNwQkMsUUFBUWQsUUFBUWMsTUFBTTtZQUN0QkMsT0FBT1YsQ0FBQUEsc0JBQUFBLFFBQVFFLElBQUksQ0FBQ1EsS0FBSyxjQUFsQlYsaUNBQUFBLEtBQUFBLElBQUFBLG9CQUFvQlcsR0FBRztZQUM5QkMsU0FBU1g7WUFDVFksY0FBY2IsUUFBUUUsSUFBSSxDQUFDTSxLQUFLO1lBQ2hDTSxjQUFjZCxRQUFRRSxJQUFJLENBQUNhLE9BQU8sQ0FBQ0MsTUFBTTtZQUN6Q0MsaUJBQWlCO1FBRXJCO0lBQ0o7SUFFQSxNQUFNQyxnQkFBZ0IsQ0FBQztJQUN2QnZCLFFBQVF3QixPQUFPLENBQUNwQixHQUFHLENBQUNLLENBQUFBLE9BQVE7UUFDeEJjLGFBQWEsQ0FBQ2QsS0FBS0MsSUFBSSxDQUFDLEdBQUdELEtBQUtnQixNQUFNLENBQUMsRUFBRTtJQUM3QztJQUVBLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBRzlCLCtDQUFRQSxDQUFDSSxpQkFBaUIsQ0FBQyxFQUFFO0lBQzNFLE1BQU0sQ0FBQ08saUJBQWlCb0IsbUJBQW1CLEdBQUcvQiwrQ0FBUUEsQ0FBQzBCO0lBR3pELHFCQUVFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXNCOUIsUUFBUWEsS0FBSzs7Ozs7O1lBQU07Ozs7Ozs7QUFLL0QsQ0FBQztHQXhDdUJkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdEZvcm0uanM/ZjQ5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RGb3JtKHsgcHJvZHVjdCB9KSB7XG4gICAgXG5cbiAgICBjb25zdCBhbGxWYXJpYW50T3B0aW9ucyA9IHByb2R1Y3QudmFyaWFudHMuZWRnZXM/Lm1hcCh2YXJpYW50ID0+IHtcbiAgICAgICAgY29uc3QgYWxsT3B0aW9ucyA9IHt9XG5cbiAgICAgICAgdmFyaWFudC5ub2RlLnNlbGVjdGVkT3B0aW9ucy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBhbGxPcHRpb25zW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB2YXJpYW50Lm5vZGUuaWQsXG4gICAgICAgICAgICB0aXRsZTogcHJvZHVjdC50aXRsZSxcbiAgICAgICAgICAgIGhhbmRsZTogcHJvZHVjdC5oYW5kbGUsXG4gICAgICAgICAgICBpbWFnZTogdmFyaWFudC5ub2RlLmltYWdlPy51cmwsXG4gICAgICAgICAgICBvdGlpb25zOiBhbGxPcHRpb25zLFxuICAgICAgICAgICAgdmFyaWFudFRpdGxlOiB2YXJpYW50Lm5vZGUudGl0bGUsXG4gICAgICAgICAgICB2YXJpYW50UHJpY2U6IHZhcmlhbnQubm9kZS5wcmljZVYyLmFtb3VudCxcbiAgICAgICAgICAgIHZhcmlhbnRRdWFudGl0eTogMVxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IHt9XG4gICAgcHJvZHVjdC5vcHRpb25zLm1hcChpdGVtID0+IHtcbiAgICAgICAgZGVmYXVsdFZhbHVlc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZXNbMF1cbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IFtzZWxlY3RlZFZhcmlhbnQsIHNldFNlbGVjdGVkVmFyaWFudF0gPSB1c2VTdGF0ZShhbGxWYXJpYW50T3B0aW9uc1swXSlcbiAgICBjb25zdCBbc2VsZWN0ZWRPcHRpb25zLCBzZXRzZWxlY3RlZE9wdGlvbnNdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlcylcblxuICAgXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0ncm91bmRlZC0yeGwgcC00IHNoYWRvdy1sZyBmbGV4IGZsZXgtY29sIHctZnVsbCBtZDp3LTEvMyc+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57cHJvZHVjdC50aXRsZX08L2gyPlxuICAgICAgICBzcGFuLnBkLTZcblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiUHJvZHVjdEZvcm0iLCJwcm9kdWN0IiwiYWxsVmFyaWFudE9wdGlvbnMiLCJ2YXJpYW50cyIsImVkZ2VzIiwibWFwIiwidmFyaWFudCIsImFsbE9wdGlvbnMiLCJub2RlIiwic2VsZWN0ZWRPcHRpb25zIiwiaXRlbSIsIm5hbWUiLCJ2YWx1ZSIsImlkIiwidGl0bGUiLCJoYW5kbGUiLCJpbWFnZSIsInVybCIsIm90aWlvbnMiLCJ2YXJpYW50VGl0bGUiLCJ2YXJpYW50UHJpY2UiLCJwcmljZVYyIiwiYW1vdW50IiwidmFyaWFudFF1YW50aXR5IiwiZGVmYXVsdFZhbHVlcyIsIm9wdGlvbnMiLCJ2YWx1ZXMiLCJzZWxlY3RlZFZhcmlhbnQiLCJzZXRTZWxlY3RlZFZhcmlhbnQiLCJzZXRzZWxlY3RlZE9wdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductForm.js\n"));

/***/ })

});