"use strict";
exports.id = 305;
exports.ids = [305];
exports.modules = {

/***/ 927305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(785893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(667294);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(814117);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(959006);

// ** React Imports

// ** MUI Components


// Styled Components
const MaskImg = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)('img')(()=>({
        bottom: 0,
        zIndex: -1,
        width: '100%',
        position: 'absolute'
    })
);
const Tree1Img = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)('img')(()=>({
        left: 0,
        bottom: 0,
        position: 'absolute'
    })
);
const Tree2Img = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)('img')(()=>({
        right: 0,
        bottom: 0,
        position: 'absolute'
    })
);
const FooterIllustrationsV1 = (props)=>{
    // ** Props
    const { image1 , image2  } = props;
    // ** Hook
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    // ** Vars
    const hidden = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__["default"])(theme.breakpoints.down('md'));
    if (!hidden) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: [
                image1 || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tree1Img, {
                    alt: "tree",
                    src: "/images/pages/auth-v1-tree.png"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MaskImg, {
                    alt: "mask",
                    src: `/images/pages/auth-v1-mask-${theme.palette.mode}.png`
                }),
                image2 || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tree2Img, {
                    alt: "tree-2",
                    src: "/images/pages/auth-v1-tree-2.png"
                })
            ]
        }));
    } else {
        return null;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterIllustrationsV1);


/***/ })

};
;