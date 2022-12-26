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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helpers */ \"./utils/helpers.js\");\n/* harmony import */ var _ProductOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductOptions */ \"./components/ProductOptions.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ProductForm(param) {\n    let { product  } = param;\n    var _product_variants_edges;\n    _s();\n    const allVariantOptions = (_product_variants_edges = product.variants.edges) === null || _product_variants_edges === void 0 ? void 0 : _product_variants_edges.map((variant)=>{\n        var _variant_node_image;\n        const allOptions = {};\n        variant.node.selectedOptions.map((item)=>{\n            allOptions[item.name] = item.value;\n        });\n        return {\n            id: variant.node.id,\n            title: product.title,\n            handle: product.handle,\n            image: (_variant_node_image = variant.node.image) === null || _variant_node_image === void 0 ? void 0 : _variant_node_image.url,\n            otiions: allOptions,\n            variantTitle: variant.node.title,\n            variantPrice: variant.node.priceV2.amount,\n            variantQuantity: 1\n        };\n    });\n    const defaultValues = {};\n    product.options.map((item)=>{\n        defaultValues[item.name] = item.values[0];\n    });\n    const [selectedVariant, setSelectedVariant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(allVariantOptions[0]);\n    const [selectedOptions, setselectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValues);\n    function setOptions(name, value) {\n        setselectedOptions(prevState);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold\",\n                children: product.title\n            }, void 0, false, {\n                fileName: \"/srv/websites/01lullipop-nextjs/components/ProductForm.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"pd-6\",\n                children: _utils_helpers__WEBPACK_IMPORTED_MODULE_2__.formatter.format(product.variants.edges[0].node.priceV2.amount)\n            }, void 0, false, {\n                fileName: \"/srv/websites/01lullipop-nextjs/components/ProductForm.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this),\n            product.options.map((param)=>/*#__PURE__*/ {\n                let { name , values  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductOptions__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    name: name,\n                    values: values,\n                    selectedOptions: selectedOptions\n                }, \"key-\".concat(name), false, {\n                    fileName: \"/srv/websites/01lullipop-nextjs/components/ProductForm.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/srv/websites/01lullipop-nextjs/components/ProductForm.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductForm, \"qI8+yHIrvwPSRKlWyRvzHKcZmBg=\");\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMkM7QUFDRDtBQUNHO0FBRTlCLFNBQVNJLFlBQVksS0FBVyxFQUFFO1FBQWIsRUFBRUMsUUFBTyxFQUFFLEdBQVg7UUFHTkE7O0lBQTFCLE1BQU1DLG9CQUFvQkQsQ0FBQUEsMEJBQUFBLFFBQVFFLFFBQVEsQ0FBQ0MsS0FBSyxjQUF0QkgscUNBQUFBLEtBQUFBLElBQUFBLHdCQUF3QkksSUFBSUMsQ0FBQUEsVUFBVztZQVdsREE7UUFWWCxNQUFNQyxhQUFhLENBQUM7UUFFcEJELFFBQVFFLElBQUksQ0FBQ0MsZUFBZSxDQUFDSixHQUFHLENBQUNLLENBQUFBLE9BQVE7WUFDckNILFVBQVUsQ0FBQ0csS0FBS0MsSUFBSSxDQUFDLEdBQUdELEtBQUtFLEtBQUs7UUFDdEM7UUFFQSxPQUFPO1lBQ0hDLElBQUlQLFFBQVFFLElBQUksQ0FBQ0ssRUFBRTtZQUNuQkMsT0FBT2IsUUFBUWEsS0FBSztZQUNwQkMsUUFBUWQsUUFBUWMsTUFBTTtZQUN0QkMsT0FBT1YsQ0FBQUEsc0JBQUFBLFFBQVFFLElBQUksQ0FBQ1EsS0FBSyxjQUFsQlYsaUNBQUFBLEtBQUFBLElBQUFBLG9CQUFvQlcsR0FBRztZQUM5QkMsU0FBU1g7WUFDVFksY0FBY2IsUUFBUUUsSUFBSSxDQUFDTSxLQUFLO1lBQ2hDTSxjQUFjZCxRQUFRRSxJQUFJLENBQUNhLE9BQU8sQ0FBQ0MsTUFBTTtZQUN6Q0MsaUJBQWlCO1FBRXJCO0lBQ0o7SUFFQSxNQUFNQyxnQkFBZ0IsQ0FBQztJQUN2QnZCLFFBQVF3QixPQUFPLENBQUNwQixHQUFHLENBQUNLLENBQUFBLE9BQVE7UUFDeEJjLGFBQWEsQ0FBQ2QsS0FBS0MsSUFBSSxDQUFDLEdBQUdELEtBQUtnQixNQUFNLENBQUMsRUFBRTtJQUM3QztJQUVBLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR2hDLCtDQUFRQSxDQUFDTSxpQkFBaUIsQ0FBQyxFQUFFO0lBQzNFLE1BQU0sQ0FBQ08saUJBQWlCb0IsbUJBQW1CLEdBQUdqQywrQ0FBUUEsQ0FBQzRCO0lBRXZELFNBQVNNLFdBQVduQixJQUFJLEVBQUVDLEtBQUssRUFBRTtRQUM3QmlCLG1CQUFtQkU7SUFDdkI7SUFFRixxQkFFRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFzQmhDLFFBQVFhLEtBQUs7Ozs7OzswQkFDakQsOERBQUNxQjtnQkFBS0YsV0FBVTswQkFBUW5DLDREQUFnQixDQUFDRyxRQUFRRSxRQUFRLENBQUNDLEtBQUssQ0FBQyxFQUFFLENBQUNJLElBQUksQ0FBQ2EsT0FBTyxDQUFDQyxNQUFNOzs7Ozs7WUFFbEZyQixRQUFRd0IsT0FBTyxDQUFDcEIsR0FBRyxDQUFDLHVCQUNoQjtvQkFEaUIsRUFBQ00sS0FBSSxFQUFFZSxPQUFNLEVBQUM7dUJBQy9CLDhEQUFDM0IsdURBQWNBO29CQUVmWSxNQUFNQTtvQkFDTmUsUUFBUUE7b0JBQ1JqQixpQkFBaUJBO21CQUhaLE9BQVksT0FBTEU7Ozs7O1lBSVg7Ozs7Ozs7QUFNakIsQ0FBQztHQXJEdUJYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdEZvcm0uanM/ZjQ5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2Zvcm1hdHRlcn0gZnJvbSAnLi4vdXRpbHMvaGVscGVycydcbmltcG9ydCBQcm9kdWN0T3B0aW9ucyBmcm9tICcuL1Byb2R1Y3RPcHRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0Rm9ybSh7IHByb2R1Y3QgfSkge1xuICAgIFxuXG4gICAgY29uc3QgYWxsVmFyaWFudE9wdGlvbnMgPSBwcm9kdWN0LnZhcmlhbnRzLmVkZ2VzPy5tYXAodmFyaWFudCA9PiB7XG4gICAgICAgIGNvbnN0IGFsbE9wdGlvbnMgPSB7fVxuXG4gICAgICAgIHZhcmlhbnQubm9kZS5zZWxlY3RlZE9wdGlvbnMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgYWxsT3B0aW9uc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdmFyaWFudC5ub2RlLmlkLFxuICAgICAgICAgICAgdGl0bGU6IHByb2R1Y3QudGl0bGUsXG4gICAgICAgICAgICBoYW5kbGU6IHByb2R1Y3QuaGFuZGxlLFxuICAgICAgICAgICAgaW1hZ2U6IHZhcmlhbnQubm9kZS5pbWFnZT8udXJsLFxuICAgICAgICAgICAgb3RpaW9uczogYWxsT3B0aW9ucyxcbiAgICAgICAgICAgIHZhcmlhbnRUaXRsZTogdmFyaWFudC5ub2RlLnRpdGxlLFxuICAgICAgICAgICAgdmFyaWFudFByaWNlOiB2YXJpYW50Lm5vZGUucHJpY2VWMi5hbW91bnQsXG4gICAgICAgICAgICB2YXJpYW50UXVhbnRpdHk6IDFcblxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZXMgPSB7fVxuICAgIHByb2R1Y3Qub3B0aW9ucy5tYXAoaXRlbSA9PiB7XG4gICAgICAgIGRlZmF1bHRWYWx1ZXNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWVzWzBdXG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBbc2VsZWN0ZWRWYXJpYW50LCBzZXRTZWxlY3RlZFZhcmlhbnRdID0gdXNlU3RhdGUoYWxsVmFyaWFudE9wdGlvbnNbMF0pXG4gICAgY29uc3QgW3NlbGVjdGVkT3B0aW9ucywgc2V0c2VsZWN0ZWRPcHRpb25zXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZXMpXG5cbiAgICBmdW5jdGlvbiBzZXRPcHRpb25zKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHNldHNlbGVjdGVkT3B0aW9ucyhwcmV2U3RhdGUpXG4gICAgfVxuICAgXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0ncm91bmRlZC0yeGwgcC00IHNoYWRvdy1sZyBmbGV4IGZsZXgtY29sIHctZnVsbCBtZDp3LTEvMyc+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57cHJvZHVjdC50aXRsZX08L2gyPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwZC02XCI+e2Zvcm1hdHRlci5mb3JtYXQocHJvZHVjdC52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlVjIuYW1vdW50KX08L3NwYW4+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb2R1Y3Qub3B0aW9ucy5tYXAoKHtuYW1lLCB2YWx1ZXN9KSA9PiAoXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RPcHRpb25zXG4gICAgICAgICAgICAgICAga2V5PXtga2V5LSR7bmFtZX1gfVxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgdmFsdWVzPXt2YWx1ZXN9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zPXtzZWxlY3RlZE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgIH1cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiZm9ybWF0dGVyIiwiUHJvZHVjdE9wdGlvbnMiLCJQcm9kdWN0Rm9ybSIsInByb2R1Y3QiLCJhbGxWYXJpYW50T3B0aW9ucyIsInZhcmlhbnRzIiwiZWRnZXMiLCJtYXAiLCJ2YXJpYW50IiwiYWxsT3B0aW9ucyIsIm5vZGUiLCJzZWxlY3RlZE9wdGlvbnMiLCJpdGVtIiwibmFtZSIsInZhbHVlIiwiaWQiLCJ0aXRsZSIsImhhbmRsZSIsImltYWdlIiwidXJsIiwib3RpaW9ucyIsInZhcmlhbnRUaXRsZSIsInZhcmlhbnRQcmljZSIsInByaWNlVjIiLCJhbW91bnQiLCJ2YXJpYW50UXVhbnRpdHkiLCJkZWZhdWx0VmFsdWVzIiwib3B0aW9ucyIsInZhbHVlcyIsInNlbGVjdGVkVmFyaWFudCIsInNldFNlbGVjdGVkVmFyaWFudCIsInNldHNlbGVjdGVkT3B0aW9ucyIsInNldE9wdGlvbnMiLCJwcmV2U3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInNwYW4iLCJmb3JtYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductForm.js\n"));

/***/ })

});