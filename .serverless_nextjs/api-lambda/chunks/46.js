"use strict";
exports.id = 46;
exports.ids = [46];
exports.modules = {

/***/ 622794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(785893);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(959006);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(609285);

// ** MUI Imports


// Styled component for Blank Layout component
const BlankLayoutWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__["default"])(({ theme  })=>({
        height: '100vh',
        // For V1 Blank layout pages
        '& .content-center': {
            display: 'flex',
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(5)
        },
        // For V2 Blank layout pages
        '& .content-right': {
            display: 'flex',
            minHeight: '100vh',
            overflowX: 'hidden',
            position: 'relative'
        }
    })
);
const BlankLayout = ({ children  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlankLayoutWrapper, {
        className: "layout-wrapper",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "app-content",
            sx: {
                minHeight: '100vh',
                overflowX: 'hidden',
                position: 'relative'
            },
            children: children
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlankLayout);


/***/ }),

/***/ 725463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(959006);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609285);
/* harmony import */ var src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(870969);
// ** MUI imports


// ** Util Import

const DatePickerWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"])(({ theme  })=>{
    return {
        '& .react-datepicker-popper': {
            zIndex: 5
        },
        '& .react-datepicker-wrapper': {
            width: '100%'
        },
        '& .react-datepicker': {
            border: 'none',
            boxShadow: theme.shadows[7],
            padding: theme.spacing(2, 0),
            color: theme.palette.text.primary,
            borderRadius: theme.shape.borderRadius,
            fontFamily: theme.typography.fontFamily,
            backgroundColor: theme.palette.background.paper,
            '& .react-datepicker__header': {
                padding: 0,
                border: 'none',
                fontWeight: 'normal',
                backgroundColor: theme.palette.background.paper,
                '& .react-datepicker__day-name': {
                    margin: 0
                }
            },
            '& .react-datepicker-year-header': {
                lineHeight: 2.1,
                marginBottom: '0.5rem',
                color: theme.palette.text.primary
            },
            '& .react-datepicker__triangle': {
                display: 'none'
            },
            '& > .react-datepicker__navigation': {
                top: theme.spacing(3),
                '&.react-datepicker__navigation--previous': {
                    border: 'none',
                    backgroundImage: `${"url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' style=\\'width:24px;height:24px\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\\' /%3E%3C/svg%3E')".replace('currentColor', theme.palette.text.secondary).replace('#', '%23')}`,
                    height: '24px',
                    width: '24px',
                    '& .react-datepicker__navigation-icon': {
                        display: 'none'
                    }
                },
                '&.react-datepicker__navigation--next': {
                    border: 'none',
                    backgroundImage: `${"url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' style=\\'width:24px;height:24px\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\\' /%3E%3C/svg%3E')".replace('currentColor', theme.palette.text.secondary).replace('#', '%23')}`,
                    height: '24px',
                    width: '24px',
                    '& .react-datepicker__navigation-icon': {
                        display: 'none'
                    }
                },
                '&.react-datepicker__navigation--next--with-time': {
                    right: '122px'
                },
                '&:focus, &:active': {
                    outline: 0
                }
            },
            '& .react-datepicker__current-month': {
                lineHeight: 2.1,
                fontSize: '1rem',
                fontWeight: 'normal',
                letterSpacing: '0.15px',
                marginBottom: theme.spacing(2),
                color: theme.palette.text.primary
            },
            '& .react-datepicker__day-name': {
                lineHeight: 1.5,
                width: '2.25rem',
                fontSize: '0.75rem',
                letterSpacing: '0.4px',
                color: theme.palette.text.secondary
            },
            '& .react-datepicker__day': {
                margin: 0,
                width: '2.25rem',
                lineHeight: 2.75,
                height: '2.25rem',
                borderRadius: '50%',
                color: theme.palette.text.primary,
                '&.react-datepicker__day--selected, &.react-datepicker__day--keyboard-selected': {
                    color: theme.palette.common.white,
                    backgroundColor: `${theme.palette.primary.main} !important`
                },
                '&.react-datepicker__day--in-range, &.react-datepicker__day--in-selecting-range': {
                    borderRadius: 0,
                    color: theme.palette.primary.main,
                    backgroundColor: `${(0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_2__/* .hexToRGBA */ .E)(theme.palette.primary.main, 0.06)} !important`,
                    '&:empty': {
                        backgroundColor: 'transparent !important'
                    }
                },
                '&.react-datepicker__day--selected.react-datepicker__day--in-selecting-range.react-datepicker__day--selecting-range-start, &.react-datepicker__day--selected.react-datepicker__day--range-start.react-datepicker__day--in-range, &.react-datepicker__day--range-start': {
                    borderTopLeftRadius: '50%',
                    borderBottomLeftRadius: '50%',
                    color: theme.palette.common.white,
                    backgroundColor: `${theme.palette.primary.main} !important`
                },
                '&.react-datepicker__day--range-end': {
                    borderTopRightRadius: '50%',
                    borderBottomRightRadius: '50%',
                    color: theme.palette.common.white,
                    backgroundColor: `${theme.palette.primary.main} !important`
                },
                '&:focus, &:active': {
                    outline: 0
                },
                '&.react-datepicker__day--outside-month': {
                    height: 'auto'
                },
                '&.react-datepicker__day--outside-month, &.react-datepicker__day--disabled:not(.react-datepicker__day--selected)': {
                    color: theme.palette.text.disabled,
                    '&:hover': {
                        backgroundColor: 'transparent'
                    }
                },
                '&.react-datepicker__day--highlighted, &.react-datepicker__day--highlighted:hover': {
                    color: theme.palette.success.main,
                    backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_2__/* .hexToRGBA */ .E)(theme.palette.success.main, 0.12)
                },
                '&.react-datepicker__day--today': {
                    fontWeight: 'normal'
                }
            },
            '& .react-datepicker__header__dropdown': {
                '& .react-datepicker__month-dropdown-container:not(:last-child)': {
                    marginRight: theme.spacing(8)
                },
                '& .react-datepicker__month-dropdown-container, & .react-datepicker__year-dropdown-container': {
                    marginBottom: theme.spacing(4)
                },
                '& .react-datepicker__month-read-view--selected-month, & .react-datepicker__year-read-view--selected-year': {
                    fontSize: '0.875rem',
                    marginRight: theme.spacing(1),
                    color: theme.palette.text.primary
                },
                '& .react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow, & .react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow': {
                    borderTopColor: theme.palette.text.secondary,
                    borderRightColor: theme.palette.text.secondary
                },
                '& .react-datepicker__month-read-view--down-arrow, & .react-datepicker__year-read-view--down-arrow': {
                    top: 4,
                    borderTopColor: theme.palette.text.disabled,
                    borderRightColor: theme.palette.text.disabled
                },
                '& .react-datepicker__month-dropdown, & .react-datepicker__year-dropdown': {
                    paddingTop: theme.spacing(1.5),
                    paddingBottom: theme.spacing(1.5),
                    borderColor: theme.palette.divider,
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: theme.palette.mode === 'light' ? theme.shadows[8] : theme.shadows[9]
                },
                '& .react-datepicker__month-option, & .react-datepicker__year-option': {
                    paddingTop: theme.spacing(0.5),
                    paddingBottom: theme.spacing(0.5),
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover
                    }
                },
                '& .react-datepicker__month-option.react-datepicker__month-option--selected_month': {
                    backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_2__/* .hexToRGBA */ .E)(theme.palette.primary.main, 0.08),
                    '&:hover': {
                        backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_2__/* .hexToRGBA */ .E)(theme.palette.primary.main, 0.12)
                    },
                    '& .react-datepicker__month-option--selected': {
                        display: 'none'
                    }
                },
                '& .react-datepicker__year-option.react-datepicker__year-option--selected_year': {
                    backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_2__/* .hexToRGBA */ .E)(theme.palette.primary.main, 0.08),
                    '&:hover': {
                        backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_2__/* .hexToRGBA */ .E)(theme.palette.primary.main, 0.12)
                    },
                    '& .react-datepicker__year-option--selected': {
                        display: 'none'
                    }
                },
                '& .react-datepicker__year-option': {
                    // TODO: Remove some of the following styles for arrow in Year dropdown when react-datepicker give arrows in Year dropdown
                    '& .react-datepicker__navigation--years-upcoming': {
                        width: 9,
                        height: 9,
                        borderStyle: 'solid',
                        borderWidth: '3px 3px 0 0',
                        transform: 'rotate(-45deg)',
                        borderTopColor: theme.palette.text.disabled,
                        borderRightColor: theme.palette.text.disabled,
                        margin: `${theme.spacing(2.75)} auto ${theme.spacing(0)}`
                    },
                    '&:hover .react-datepicker__navigation--years-upcoming': {
                        borderTopColor: theme.palette.text.secondary,
                        borderRightColor: theme.palette.text.secondary
                    },
                    '& .react-datepicker__navigation--years-previous': {
                        width: 9,
                        height: 9,
                        borderStyle: 'solid',
                        borderWidth: '0 0 3px 3px',
                        transform: 'rotate(-45deg)',
                        borderLeftColor: theme.palette.text.disabled,
                        borderBottomColor: theme.palette.text.disabled,
                        margin: `${theme.spacing(0)} auto ${theme.spacing(2.75)}`
                    },
                    '&:hover .react-datepicker__navigation--years-previous': {
                        borderLeftColor: theme.palette.text.secondary,
                        borderBottomColor: theme.palette.text.secondary
                    }
                }
            },
            '& .react-datepicker__month': {
                marginTop: theme.spacing(3)
            },
            [theme.breakpoints.down('sm')]: {
                '& .react-datepicker__month': {
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0
                }
            },
            '& .react-datepicker__month, & .react-datepicker__year': {
                '& .react-datepicker__month-text, & .react-datepicker__year-text, & .react-datepicker__quarter-text': {
                    height: '2rem',
                    alignItems: 'center',
                    display: 'inline-flex',
                    justifyContent: 'center',
                    '&:hover': {
                        borderRadius: theme.shape.borderRadius
                    },
                    '&:focus, &:active': {
                        outline: 0
                    }
                },
                '& .react-datepicker__quarter--selected, & .react-datepicker__year-text--selected, & .react-datepicker__month--selected, & .react-datepicker__quarter-text--keyboard-selected, & .react-datepicker__month-text--keyboard-selected, & .react-datepicker__year-text--keyboard-selected': {
                    color: theme.palette.common.white,
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: `${theme.palette.primary.main} !important`
                },
                '& .react-datepicker__week-number': {
                    fontWeight: 600,
                    color: theme.palette.text.primary
                }
            },
            '& .react-datepicker__year-wrapper': {
                maxWidth: 205,
                justifyContent: 'center'
            },
            '& .react-datepicker__input-time-container': {
                display: 'flex',
                alignItems: 'center'
            },
            '& .react-datepicker__today-button': {
                borderRadius: '1rem',
                margin: '0 1rem 0.3rem',
                color: theme.palette.common.white,
                backgroundColor: theme.palette.primary.main
            },
            // ** Time Picker
            '& .react-datepicker__time-container': {
                borderLeftColor: theme.palette.divider
            },
            '&.react-datepicker--time-only, & .react-datepicker__time-container': {
                width: '7rem',
                padding: theme.spacing(1.2, 0),
                '& .react-datepicker-time__header': {
                    marginBottom: theme.spacing(3),
                    color: theme.palette.text.primary,
                    fontSize: theme.typography.body2.fontSize
                },
                '& .react-datepicker__time': {
                    background: theme.palette.background.paper,
                    '& .react-datepicker__time-box .react-datepicker__time-list-item--disabled': {
                        color: theme.palette.text.disabled
                    }
                },
                '& .react-datepicker__time-list-item': {
                    lineHeight: 1.75,
                    height: 'auto !important',
                    marginLeft: theme.spacing(3.2),
                    marginRight: theme.spacing(1.2),
                    color: theme.palette.text.primary,
                    borderRadius: theme.shape.borderRadius,
                    '&:focus, &:active': {
                        outline: 0
                    },
                    '&:hover': {
                        backgroundColor: `${theme.palette.action.hover} !important`
                    },
                    '&.react-datepicker__time-list-item--selected': {
                        color: `${theme.palette.common.white} !important`,
                        backgroundColor: `${theme.palette.primary.main} !important`
                    }
                },
                '& .react-datepicker__time-box': {
                    width: '100%'
                },
                '& .react-datepicker__time-list': {
                    '&::-webkit-scrollbar': {
                        width: 8
                    },
                    /* Track */ '&::-webkit-scrollbar-track': {
                        background: theme.palette.background.paper
                    },
                    /* Handle */ '&::-webkit-scrollbar-thumb': {
                        background: '#aaa',
                        borderRadius: '10px'
                    },
                    /* Handle on hover */ '&::-webkit-scrollbar-thumb:hover': {
                        background: '#999'
                    }
                }
            },
            '&.react-datepicker--time-only .react-datepicker__time-container': {
                width: 'calc(7rem - 2px)'
            },
            '& .react-datepicker__day:hover, & .react-datepicker__month-text:hover, & .react-datepicker__quarter-text:hover, & .react-datepicker__year-text:hover': {
                backgroundColor: theme.palette.action.hover
            }
        },
        '& .react-datepicker__close-icon': {
            paddingRight: theme.spacing(4),
            '&:after': {
                width: 'unset',
                height: 'unset',
                fontSize: '1.5rem',
                color: theme.palette.text.primary,
                backgroundColor: 'transparent !important'
            }
        }
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatePickerWrapper);


/***/ }),

/***/ 814017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ createEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(209493);

const createEmotionCache = ()=>{
    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: 'css'
    });
};


/***/ }),

/***/ 870969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ hexToRGBA)
/* harmony export */ });
/**
 ** Hex color to RGBA color
 */ const hexToRGBA = (hexCode, opacity)=>{
    let hex = hexCode.replace('#', '');
    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};


/***/ }),

/***/ 467187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const themeConfig = {
    // ** Layout Configs
    templateName: 'Nsights' /* App Name */ ,
    mode: 'light' /* light | dark */ ,
    contentWidth: 'boxed' /* full | boxed */ ,
    // ** Routing Configs
    routingLoader: true,
    // ** Navigation (Menu) Configs
    menuTextTruncate: true,
    navigationSize: 300 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */ ,
    // ** Other Configs
    responsiveFontSizes: true,
    disableRipple: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeConfig);


/***/ }),

/***/ 259622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(785893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(741664);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(886096);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(959006);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34904);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(609285);
/* harmony import */ var src_core_layouts_BlankLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(622794);
/* harmony import */ var src_views_pages_misc_FooterIllustrations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(373350);

// ** Next Import

// ** MUI Components




// ** Layout Import

// ** Demo Imports

// ** Styled Components
const BoxWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"])(({ theme  })=>({
        [theme.breakpoints.down('md')]: {
            width: '90vw'
        }
    })
);
const Img = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)('img')(({ theme  })=>({
        marginBottom: theme.spacing(10),
        [theme.breakpoints.down('lg')]: {
            height: 450,
            marginTop: theme.spacing(10)
        },
        [theme.breakpoints.down('md')]: {
            height: 400
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(13)
        }
    })
);
const TreeIllustration = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)('img')(({ theme  })=>({
        left: 0,
        bottom: '5rem',
        position: 'absolute',
        [theme.breakpoints.down('lg')]: {
            bottom: 0
        }
    })
);
const Error404 = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "content-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
                sx: {
                    p: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BoxWrapper, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                variant: "h1",
                                children: "404"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                variant: "h5",
                                sx: {
                                    mb: 1,
                                    fontSize: '1.5rem !important'
                                },
                                children: "Page Not Found ⚠️"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                variant: "body2",
                                children: "We couldn′t find the page you are looking for."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Img, {
                        height: "487",
                        alt: "error-illustration",
                        src: "/images/pages/404.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        passHref: true,
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                            component: "a",
                            variant: "contained",
                            sx: {
                                px: 5.5
                            },
                            children: "Back to Home"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_views_pages_misc_FooterIllustrations__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                image: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TreeIllustration, {
                    alt: "tree",
                    src: "/images/pages/tree.png"
                })
            })
        ]
    }));
};
Error404.getLayout = (page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_layouts_BlankLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: page
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404);


/***/ }),

/***/ 69886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(785893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(809008);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(811163);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(433299);
// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__(574865);
var nprogress_default = /*#__PURE__*/__webpack_require__.n(nprogress);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.cjs.prod.js
var emotion_react_cjs_prod = __webpack_require__(711334);
// EXTERNAL MODULE: ./src/configs/themeConfig.ts
var themeConfig = __webpack_require__(467187);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/useMediaQuery/index.js
var useMediaQuery = __webpack_require__(814117);
// EXTERNAL MODULE: ./node_modules/react/index.js
var node_modules_react = __webpack_require__(667294);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Fab/index.js
var Fab = __webpack_require__(924054);
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(959006);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(609285);
// EXTERNAL MODULE: ./node_modules/mdi-material-ui/ArrowUp.js
var ArrowUp = __webpack_require__(26317);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/AppBar/index.js
var AppBar = __webpack_require__(763389);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Toolbar/index.js
var Toolbar = __webpack_require__(630713);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/appBar/index.tsx

// ** MUI Imports



const appBar_AppBar = (0,styles.styled)((AppBar_default()))(({ theme  })=>({
        transition: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0, 6),
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.divider}`,
        color: theme.palette.text.primary,
        minHeight: theme.mixins.toolbar.minHeight,
        height: "80px",
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        }
    })
);
const appBar_Toolbar = (0,styles.styled)((Toolbar_default()))(({ theme  })=>({
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: `${theme.spacing(0)} !important`,
        minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
        transition: 'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out, background-color .25s ease-in-out'
    })
);
const LayoutAppBar = (props)=>{
    // ** Props
    const { settings , verticalAppBarContent: userVerticalAppBarContent  } = props;
    // ** Hooks
    const theme = (0,styles.useTheme)();
    // ** Vars
    const { contentWidth  } = settings;
    return(/*#__PURE__*/ jsx_runtime.jsx(appBar_AppBar, {
        elevation: 0,
        color: "default",
        className: "layout-navbar",
        position: "static",
        children: /*#__PURE__*/ jsx_runtime.jsx(appBar_Toolbar, {
            className: "navbar-content-container",
            sx: {
                ...contentWidth === 'boxed' && {
                    '@media (min-width:1440px)': {
                        maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)`
                    }
                }
            },
            children: userVerticalAppBarContent && userVerticalAppBarContent(props) || null
        })
    }));
};
/* harmony default export */ const appBar = (LayoutAppBar);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/List/index.js
var List = __webpack_require__(915419);
var List_default = /*#__PURE__*/__webpack_require__.n(List);
// EXTERNAL MODULE: ./node_modules/react-perfect-scrollbar/lib/index.js
var lib = __webpack_require__(251964);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/SwipeableDrawer/index.js
var SwipeableDrawer = __webpack_require__(578369);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/Drawer.tsx

// ** MUI Imports


const Drawer_SwipeableDrawer = (0,styles.styled)(SwipeableDrawer["default"])({
    overflowX: 'hidden',
    transition: 'width .25s ease-in-out',
    '& ul': {
        listStyle: 'none'
    },
    '& .MuiListItem-gutters': {
        paddingLeft: 4,
        paddingRight: 4
    },
    '& .MuiDrawer-paper': {
        left: 'unset',
        right: 'unset',
        overflowX: 'hidden',
        transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out'
    }
});
const Drawer = (props)=>{
    // ** Props
    const { hidden , children , navWidth , navVisible , setNavVisible  } = props;
    // ** Hook
    const theme = (0,styles.useTheme)();
    // Drawer Props for Mobile & Tablet screens
    const MobileDrawerProps = {
        open: navVisible,
        onOpen: ()=>setNavVisible(true)
        ,
        onClose: ()=>setNavVisible(false)
        ,
        ModalProps: {
            keepMounted: true // Better open performance on mobile.
        }
    };
    // Drawer Props for Desktop screens
    const DesktopDrawerProps = {
        open: true,
        onOpen: ()=>null
        ,
        onClose: ()=>null
    };
    return(/*#__PURE__*/ jsx_runtime.jsx(Drawer_SwipeableDrawer, {
        className: "layout-vertical-nav",
        variant: hidden ? 'temporary' : 'permanent',
        ...hidden ? {
            ...MobileDrawerProps
        } : {
            ...DesktopDrawerProps
        },
        PaperProps: {
            sx: {
                width: navWidth
            }
        },
        sx: {
            width: navWidth,
            '& .MuiDrawer-paper': {
                borderRight: 0,
                backgroundColor: theme.palette.background.paper
            }
        },
        children: children
    }));
};
/* harmony default export */ const navigation_Drawer = (Drawer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(741664);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Chip/index.js
var Chip = __webpack_require__(729972);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItem/index.js
var ListItem = __webpack_require__(137963);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(34904);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemIcon/index.js
var ListItemIcon = __webpack_require__(666319);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon);
// EXTERNAL MODULE: ./node_modules/mdi-material-ui/ChevronRight.js
var ChevronRight = __webpack_require__(405368);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemButton/index.js
var ListItemButton = __webpack_require__(671687);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton);
;// CONCATENATED MODULE: ./src/layouts/components/UserIcon.tsx

const UserIcon = (props)=>{
    // ** Props
    const { icon , iconProps  } = props;
    const IconTag = icon;
    let styles;
    /* styles = {
    color: 'red',
    fontSize: '2rem'
  } */ // @ts-ignore
    return(/*#__PURE__*/ jsx_runtime.jsx(IconTag, {
        ...iconProps,
        style: {
            ...styles
        }
    }));
};
/* harmony default export */ const components_UserIcon = (UserIcon);

;// CONCATENATED MODULE: ./src/@core/layouts/utils.ts
/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param item
 * @param activeItem
 */ const handleURLQueries = (router, path)=>{
    if (Object.keys(router.query).length && path) {
        const arr = Object.keys(router.query);
        return router.asPath.includes(path) && router.asPath.includes(router.query[arr[0]]) && path !== '/';
    }
    return false;
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavLink.tsx

// ** Next Imports


// ** MUI Imports








// ** Configs Import

// ** Custom Components Imports

// ** Utils

// ** Styled Components
const MenuNavLink = (0,styles.styled)((ListItemButton_default()))(({ theme  })=>({
        width: '100%',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 100,
        color: theme.palette.text.primary,
        padding: theme.spacing(2.25, 3.5),
        transition: 'opacity .25s ease-in-out',
        '&.active, &.active:hover': {
            backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.navItems}, ${theme.palette.customColors.navItems} 94%)`
        },
        '&.active .MuiBox-root.nav-tab': {
            backgroundColor: "#4B0181"
        },
        '&.active .MuiTypography-root, &.active svg': {
            color: `${theme.palette.text.tertiary} !important`
        }
    })
);
const MenuItemTextMetaWrapper = (0,styles.styled)(Box["default"])({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'opacity .25s ease-in-out',
    ...themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate && {
        overflow: 'hidden'
    }
});
const VerticalNavLink = ({ item , navVisible , toggleNavVisibility  })=>{
    // ** Hooks
    const router = (0,next_router.useRouter)();
    const IconTag = item.icon;
    const isNavLinkActive = ()=>{
        if (router.pathname === item.path || handleURLQueries(router, item.path)) {
            return true;
        } else {
            return false;
        }
    };
    return(/*#__PURE__*/ jsx_runtime.jsx((ListItem_default()), {
        disablePadding: true,
        className: "nav-link",
        disabled: item.disabled || false,
        sx: {
            mt: 1.5,
            px: '0 !important'
        },
        children: /*#__PURE__*/ jsx_runtime.jsx(next_link["default"], {
            passHref: true,
            href: item.path === undefined ? '/' : `${item.path}`,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuNavLink, {
                component: 'a',
                className: isNavLinkActive() ? 'active' : '',
                ...item.openInNewTab ? {
                    target: '_blank'
                } : null,
                onClick: (e)=>{
                    if (item.path === undefined) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    if (navVisible) {
                        toggleNavVisibility();
                    }
                },
                sx: {
                    pl: 5.5,
                    ...item.disabled ? {
                        pointerEvents: 'none'
                    } : {
                        cursor: 'pointer'
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((ListItemIcon_default()), {
                        children: /*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
                            className: "nav-tab",
                            sx: {
                                width: 9,
                                height: 48,
                                borderTopRightRadius: 20,
                                borderBottomRightRadius: 20,
                                bgcolor: "customColors.navItems",
                                ml: -6,
                                mt: -2,
                                mb: -2
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((ListItemIcon_default()), {
                        sx: {
                            pr: 2,
                            color: 'text.primary',
                            transition: 'margin .25s ease-in-out'
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx(components_UserIcon, {
                            icon: IconTag
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItemTextMetaWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                ...themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate && {
                                    noWrap: true
                                },
                                children: item.title
                            }),
                            item.badgeContent ? /*#__PURE__*/ jsx_runtime.jsx((Chip_default()), {
                                label: item.badgeContent,
                                color: item.badgeColor || 'primary',
                                sx: {
                                    height: 20,
                                    fontWeight: 500,
                                    marginLeft: 1.25,
                                    '& .MuiChip-label': {
                                        px: 1.5,
                                        textTransform: 'capitalize'
                                    }
                                }
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((ListItemIcon_default()), {
                        sx: {
                            mr: 5,
                            color: 'text.primary',
                            transition: 'margin .20s ease-in-out'
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx(components_UserIcon, {
                            icon: ChevronRight["default"]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const navigation_VerticalNavLink = (VerticalNavLink);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(752233);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListSubheader/index.js
var ListSubheader = __webpack_require__(252605);
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavSectionTitle.tsx

// ** MUI Imports




// ** Styled Components
const VerticalNavSectionTitle_ListSubheader = (0,styles.styled)((props)=>/*#__PURE__*/ jsx_runtime.jsx((ListSubheader_default()), {
        component: "li",
        ...props
    })
)(({ theme  })=>({
        lineHeight: 1,
        display: 'flex',
        position: 'relative',
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(2),
        backgroundColor: 'transparent',
        transition: 'padding-left .25s ease-in-out'
    })
);
const TypographyHeaderText = (0,styles.styled)((Typography_default()))(({ theme  })=>({
        fontSize: '0.75rem',
        lineHeight: 'normal',
        letterSpacing: '0.21px',
        textTransform: 'uppercase',
        color: theme.palette.text.disabled,
        fontWeight: theme.typography.fontWeightMedium
    })
);
const VerticalNavSectionTitle = (props)=>{
    // ** Props
    const { item  } = props;
    // ** Hook
    const theme = (0,styles.useTheme)();
    return(/*#__PURE__*/ jsx_runtime.jsx(VerticalNavSectionTitle_ListSubheader, {
        className: "nav-section-title",
        sx: {
            px: 0,
            py: 1.75,
            color: theme.palette.text.disabled,
            '& .MuiDivider-root:before, & .MuiDivider-root:after, & hr': {
                borderColor: `rgba(${theme.palette.customColors.main}, 0.12)`
            }
        },
        children: /*#__PURE__*/ jsx_runtime.jsx((Divider_default()), {
            textAlign: "left",
            sx: {
                m: 0,
                width: '100%',
                lineHeight: 'normal',
                textTransform: 'uppercase',
                '&:before, &:after': {
                    top: 7,
                    transform: 'none'
                },
                '& .MuiDivider-wrapper': {
                    px: 2.5,
                    fontSize: '0.75rem',
                    letterSpacing: '0.21px'
                }
            },
            children: /*#__PURE__*/ jsx_runtime.jsx(TypographyHeaderText, {
                noWrap: true,
                children: item.sectionTitle
            })
        })
    }));
};
/* harmony default export */ const navigation_VerticalNavSectionTitle = (VerticalNavSectionTitle);

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavItems.tsx


// ** Custom Menu Components


const resolveNavItemComponent = (item)=>{
    if (item.sectionTitle) return navigation_VerticalNavSectionTitle;
    return navigation_VerticalNavLink;
};
const VerticalNavItems = (props)=>{
    // ** Props
    const { verticalNavItems  } = props;
    const RenderMenuItems = verticalNavItems === null || verticalNavItems === void 0 ? void 0 : verticalNavItems.map((item, index)=>{
        const TagName = resolveNavItemComponent(item);
        return(/*#__PURE__*/ (0,node_modules_react.createElement)(TagName, {
            ...props,
            key: index,
            item: item
        }));
    });
    return(/*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: RenderMenuItems
    }));
};
/* harmony default export */ const navigation_VerticalNavItems = (VerticalNavItems);

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavHeader.tsx

// ** Next Import

// ** MUI Imports


// ** Styled Components
const MenuHeaderWrapper = (0,styles.styled)(Box["default"])(()=>({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'padding .25s ease-in-out',
        minHeight: "80px",
        backgroundColor: "#E9E2F8"
    })
);
const StyledLink = (0,styles.styled)('a')({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
});
const VerticalNavHeader = (props)=>{
    // ** Props
    const { verticalNavMenuBranding: userVerticalNavMenuBranding  } = props;
    // ** Hooks
    return(/*#__PURE__*/ jsx_runtime.jsx(MenuHeaderWrapper, {
        className: "nav-header",
        sx: {
            pl: 15
        },
        children: userVerticalNavMenuBranding ? userVerticalNavMenuBranding(props) : /*#__PURE__*/ jsx_runtime.jsx(next_link["default"], {
            href: "/",
            passHref: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(StyledLink, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
                        sx: {
                            pr: 3
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            width: "30",
                            alt: "Aero-stub img",
                            src: "/images/favicon.png"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
                        sx: {
                            mr: 3
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            width: "150",
                            alt: "Aero-stub img",
                            src: "/images/nsights.png"
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const navigation_VerticalNavHeader = (VerticalNavHeader);

// EXTERNAL MODULE: ./src/@core/utils/hex-to-rgba.ts
var hex_to_rgba = __webpack_require__(870969);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/index.tsx

// ** React Import

// ** MUI Import



// ** Third Party Components

// ** Component Imports



// ** Util Import

const StyledBoxForShadow = (0,styles.styled)(Box["default"])({
    top: 50,
    left: -8,
    zIndex: 2,
    height: 75,
    display: 'none',
    position: 'absolute',
    pointerEvents: 'none',
    width: 'calc(100% + 15px)',
    '&.d-block': {
        display: 'block'
    }
});
const Navigation = (props)=>{
    // ** Props
    const { hidden , afterVerticalNavMenuContent , beforeVerticalNavMenuContent , verticalNavMenuContent: userVerticalNavMenuContent  } = props;
    // ** States
    const { 0: groupActive , 1: setGroupActive  } = (0,node_modules_react.useState)([]);
    const { 0: currentActiveGroup , 1: setCurrentActiveGroup  } = (0,node_modules_react.useState)([]);
    // ** Ref
    const shadowRef = (0,node_modules_react.useRef)(null);
    // ** Hooks
    const theme = (0,styles.useTheme)();
    // ** Fixes Navigation InfiniteScroll
    const handleInfiniteScroll = (ref)=>{
        if (ref) {
            // @ts-ignore
            ref._getBoundingClientRect = ref.getBoundingClientRect;
            ref.getBoundingClientRect = ()=>{
                // @ts-ignore
                const original = ref._getBoundingClientRect();
                return {
                    ...original,
                    height: Math.floor(original.height)
                };
            };
        }
    };
    // ** Scroll Menu
    const scrollMenu = (container)=>{
        container = hidden ? container.target : container;
        if (shadowRef && container.scrollTop > 0) {
            // @ts-ignore
            if (!shadowRef.current.classList.contains('d-block')) {
                // @ts-ignore
                shadowRef.current.classList.add('d-block');
            }
        } else {
            // @ts-ignore
            shadowRef.current.classList.remove('d-block');
        }
    };
    const ScrollWrapper = hidden ? Box["default"] : (lib_default());
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(navigation_Drawer, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(navigation_VerticalNavHeader, {
                ...props
            }),
            /*#__PURE__*/ jsx_runtime.jsx(StyledBoxForShadow, {
                ref: shadowRef,
                sx: {
                    background: `linear-gradient(${theme.palette.background.default} 40%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.1)} 95%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.05)})`
                }
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
                sx: {
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ScrollWrapper, {
                    containerRef: (ref)=>handleInfiniteScroll(ref)
                    ,
                    ...hidden ? {
                        onScroll: (container)=>scrollMenu(container)
                        ,
                        sx: {
                            height: '100%',
                            overflowY: 'auto',
                            overflowX: 'hidden'
                        }
                    } : {
                        options: {
                            wheelPropagation: false
                        },
                        onScrollY: (container)=>scrollMenu(container)
                    },
                    children: [
                        beforeVerticalNavMenuContent ? beforeVerticalNavMenuContent(props) : null,
                        /*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
                            sx: {
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            },
                            children: userVerticalNavMenuContent ? userVerticalNavMenuContent(props) : /*#__PURE__*/ jsx_runtime.jsx((List_default()), {
                                className: "nav-items",
                                sx: {
                                    transition: 'padding .25s ease',
                                    pr: 4.5
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(navigation_VerticalNavItems, {
                                    groupActive: groupActive,
                                    setGroupActive: setGroupActive,
                                    currentActiveGroup: currentActiveGroup,
                                    setCurrentActiveGroup: setCurrentActiveGroup,
                                    ...props
                                })
                            })
                        })
                    ]
                })
            }),
            afterVerticalNavMenuContent ? afterVerticalNavMenuContent(props) : null
        ]
    }));
};
/* harmony default export */ const navigation = (Navigation);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(406912);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/footer/FooterContent.tsx

// ** MUI Imports




const FooterContent = ()=>{
    // ** Var
    const hidden = (0,useMediaQuery["default"])((theme)=>theme.breakpoints.down('md')
    );
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
        sx: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Typography_default()), {
                sx: {
                    mr: 2
                },
                children: [
                    `© ${new Date().getFullYear()}, Feito `,
                    ` por `,
                    /*#__PURE__*/ jsx_runtime.jsx((Link_default()), {
                        target: "_blank",
                        href: "https://www.linkedin.com/in/gabriel-queiroz-3xp/",
                        children: "DenjiDev"
                    })
                ]
            }),
            hidden ? null : /*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
                sx: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    '& :not(:last-child)': {
                        mr: 4
                    }
                },
                children: /*#__PURE__*/ jsx_runtime.jsx((Link_default()), {
                    target: "_blank",
                    href: "https://www.linkedin.com/in/gabriel-queiroz-3xp/",
                    children: "Suporte"
                })
            })
        ]
    }));
};
/* harmony default export */ const footer_FooterContent = (FooterContent);

;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/footer/index.tsx

// ** MUI Imports


// ** Footer Content Component

const Footer = (props)=>{
    // ** Props
    const { settings , footerContent: userFooterContent  } = props;
    // ** Hook
    const theme = (0,styles.useTheme)();
    // ** Vars
    const { contentWidth  } = settings;
    return(/*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
        component: "footer",
        className: "layout-footer",
        sx: {
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        children: /*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
            className: "footer-content-container",
            sx: {
                width: '100%',
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
                padding: theme.spacing(4, 6),
                ...contentWidth === 'boxed' && {
                    '@media (min-width:1440px)': {
                        maxWidth: 1440
                    }
                }
            },
            children: userFooterContent ? userFooterContent(props) : /*#__PURE__*/ jsx_runtime.jsx(footer_FooterContent, {
            })
        })
    }));
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Zoom/index.js
var Zoom = __webpack_require__(111468);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/useScrollTrigger/index.js
var useScrollTrigger = __webpack_require__(313780);
;// CONCATENATED MODULE: ./src/@core/components/scroll-to-top/index.tsx

// ** MUI Imports



const ScrollToTopStyled = (0,styles.styled)('div')(({ theme  })=>({
        zIndex: 11,
        position: 'fixed',
        right: theme.spacing(6),
        bottom: theme.spacing(10)
    })
);
const ScrollToTop = (props)=>{
    // ** Props
    const { children , className  } = props;
    // ** init trigger
    const trigger = (0,useScrollTrigger["default"])({
        threshold: 400,
        disableHysteresis: true
    });
    const handleClick = ()=>{
        const anchor = document.querySelector('body');
        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    return(/*#__PURE__*/ jsx_runtime.jsx(Zoom["default"], {
        in: trigger,
        children: /*#__PURE__*/ jsx_runtime.jsx(ScrollToTopStyled, {
            className: className,
            onClick: handleClick,
            role: "presentation",
            children: children
        })
    }));
};
/* harmony default export */ const scroll_to_top = (ScrollToTop);

// EXTERNAL MODULE: ./src/@core/styles/libs/react-datepicker/index.ts
var react_datepicker = __webpack_require__(725463);
;// CONCATENATED MODULE: ./src/@core/layouts/VerticalLayout.tsx

// ** React Imports

// ** MUI Imports



// ** Icons Imports

// ** Theme Config Import

// ** Components




// ** Styled Component

const VerticalLayoutWrapper = (0,styles.styled)('div')({
    height: '100%',
    display: 'flex'
});
const MainContentWrapper = (0,styles.styled)(Box["default"])({
    flexGrow: 1,
    minWidth: 0,
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
});
const ContentWrapper = (0,styles.styled)('main')(({ theme  })=>({
        flexGrow: 1,
        width: '100%',
        padding: theme.spacing(6),
        transition: 'padding .25s ease-in-out',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        }
    })
);
const VerticalLayout = (props)=>{
    // ** Props
    const { settings , children , scrollToTop  } = props;
    // ** Vars
    const { contentWidth  } = settings;
    const navWidth = themeConfig/* default.navigationSize */.Z.navigationSize;
    // ** States
    const { 0: navVisible , 1: setNavVisible  } = (0,node_modules_react.useState)(false);
    // ** Toggle Functions
    const toggleNavVisibility = ()=>setNavVisible(!navVisible)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(VerticalLayoutWrapper, {
                className: "layout-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(navigation, {
                        navWidth: navWidth,
                        navVisible: navVisible,
                        setNavVisible: setNavVisible,
                        toggleNavVisibility: toggleNavVisibility,
                        ...props
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(MainContentWrapper, {
                        className: "layout-content-wrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(appBar, {
                                toggleNavVisibility: toggleNavVisibility,
                                ...props
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(ContentWrapper, {
                                className: "layout-page-content",
                                sx: {
                                    ...contentWidth === 'boxed' && {
                                        mx: 'auto',
                                        '@media (min-width:1440px)': {
                                            maxWidth: 1440
                                        },
                                        '@media (min-width:1200px)': {
                                            maxWidth: '100%'
                                        }
                                    }
                                },
                                children: children
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(footer, {
                                ...props
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(react_datepicker/* default */.Z, {
                                sx: {
                                    zIndex: 11
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
                                    id: "react-datepicker-portal"
                                })
                            })
                        ]
                    })
                ]
            }),
            scrollToTop ? scrollToTop(props) : /*#__PURE__*/ jsx_runtime.jsx(scroll_to_top, {
                className: "mui-fixed",
                children: /*#__PURE__*/ jsx_runtime.jsx((Fab_default()), {
                    color: "primary",
                    size: "small",
                    "aria-label": "scroll back to top",
                    children: /*#__PURE__*/ jsx_runtime.jsx(ArrowUp["default"], {
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const layouts_VerticalLayout = (VerticalLayout);

;// CONCATENATED MODULE: ./src/@core/layouts/components/icons/Home.tsx

const Home = ()=>{
    return(/*#__PURE__*/ jsx_runtime.jsx("svg", {
        width: "24",
        height: "19",
        viewBox: "0 0 24 19",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M11.48 5.01313C11.5612 4.93188 11.6831 4.89125 11.805 4.89125C11.8862 4.89125 12.0081 4.93188 12.0894 5.01313L19.605 11.1475V17.81C19.605 18.1756 19.28 18.46 18.955 18.46H14.3644C14.0394 18.46 13.7144 18.1756 13.7144 17.81V13.91C13.7144 13.585 13.43 13.26 13.0644 13.26H10.4644C10.1394 13.26 9.81437 13.585 9.81437 13.91V17.81C9.81437 18.1756 9.52999 18.46 9.20499 18.46H4.65499C4.28937 18.46 4.00499 18.1756 4.00499 17.81V11.1881L11.48 5.01313ZM23.3019 9.1975C23.4237 9.27875 23.505 9.44125 23.505 9.56313C23.505 9.685 23.4644 9.80688 23.3831 9.88813L22.3269 11.1475C22.2456 11.2694 22.1237 11.31 21.9612 11.31C21.8394 11.31 21.7175 11.2694 21.6362 11.1881L12.0894 3.3475C12.0081 3.26625 11.8862 3.22563 11.805 3.22563C11.6831 3.22563 11.5612 3.26625 11.48 3.3475L1.93312 11.1881C1.85187 11.2694 1.72999 11.31 1.60812 11.31C1.44562 11.31 1.32374 11.2694 1.24249 11.1475L0.186243 9.88813C0.145618 9.80688 0.0643679 9.685 0.0643679 9.56313C0.0643679 9.44125 0.145618 9.27875 0.267493 9.1975L10.5456 0.706879C10.8706 0.463129 11.3175 0.300629 11.805 0.300629C12.2519 0.300629 12.6987 0.463129 13.0237 0.706879L16.68 3.71313V0.788129C16.68 0.503754 16.8831 0.300629 17.1675 0.300629H19.4425C19.6862 0.300629 19.93 0.503754 19.93 0.788129V6.39438L23.3019 9.1975Z",
            fill: "currentColor"
        })
    }));
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/icons/Building.tsx

const Building = ()=>{
    return(/*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M14.2 7.85H15.3C15.658 7.85 16.0014 7.70777 16.2546 7.45459C16.5078 7.20142 16.65 6.85804 16.65 6.5C16.65 6.14196 16.5078 5.79858 16.2546 5.54541C16.0014 5.29223 15.658 5.15 15.3 5.15H14.2C13.842 5.15 13.4986 5.29223 13.2454 5.54541C12.9922 5.79858 12.85 6.14196 12.85 6.5C12.85 6.85804 12.9922 7.20142 13.2454 7.45459C13.4986 7.70777 13.842 7.85 14.2 7.85ZM14.2 12.25H15.3C15.658 12.25 16.0014 12.1078 16.2546 11.8546C16.5078 11.6014 16.65 11.258 16.65 10.9C16.65 10.542 16.5078 10.1986 16.2546 9.94541C16.0014 9.69223 15.658 9.55 15.3 9.55H14.2C13.842 9.55 13.4986 9.69223 13.2454 9.94541C12.9922 10.1986 12.85 10.542 12.85 10.9C12.85 11.258 12.9922 11.6014 13.2454 11.8546C13.4986 12.1078 13.842 12.25 14.2 12.25ZM8.7 7.85H9.8C10.158 7.85 10.5014 7.70777 10.7546 7.45459C11.0078 7.20142 11.15 6.85804 11.15 6.5C11.15 6.14196 11.0078 5.79858 10.7546 5.54541C10.5014 5.29223 10.158 5.15 9.8 5.15H8.7C8.34196 5.15 7.99858 5.29223 7.74541 5.54541C7.49223 5.79858 7.35 6.14196 7.35 6.5C7.35 6.85804 7.49223 7.20142 7.74541 7.45459C7.99858 7.70777 8.34196 7.85 8.7 7.85ZM8.7 12.25H9.8C10.158 12.25 10.5014 12.1078 10.7546 11.8546C11.0078 11.6014 11.15 11.258 11.15 10.9C11.15 10.542 11.0078 10.1986 10.7546 9.94541C10.5014 9.69223 10.158 9.55 9.8 9.55H8.7C8.34196 9.55 7.99858 9.69223 7.74541 9.94541C7.49223 10.1986 7.35 10.542 7.35 10.9C7.35 11.258 7.49223 11.6014 7.74541 11.8546C7.99858 12.1078 8.34196 12.25 8.7 12.25ZM21.9 20.55H21.05V2.1C21.05 1.74196 20.9078 1.39858 20.6546 1.14541C20.4014 0.892232 20.058 0.75 19.7 0.75H4.3C3.94196 0.75 3.59858 0.892232 3.34541 1.14541C3.09223 1.39858 2.95 1.74196 2.95 2.1V20.55H2.1C1.74196 20.55 1.39858 20.6922 1.14541 20.9454C0.892231 21.1986 0.75 21.542 0.75 21.9C0.75 22.258 0.892231 22.6014 1.14541 22.8546C1.39858 23.1078 1.74196 23.25 2.1 23.25H21.9C22.258 23.25 22.6014 23.1078 22.8546 22.8546C23.1078 22.6014 23.25 22.258 23.25 21.9C23.25 21.542 23.1078 21.1986 22.8546 20.9454C22.6014 20.6922 22.258 20.55 21.9 20.55ZM12.85 20.55H11.15V16.65H12.85V20.55ZM18.35 20.55H15.55V15.3C15.55 14.942 15.4078 14.5986 15.1546 14.3454C14.9014 14.0922 14.558 13.95 14.2 13.95H9.8C9.44196 13.95 9.09858 14.0922 8.84541 14.3454C8.59223 14.5986 8.45 14.942 8.45 15.3V20.55H5.65V3.45H18.35V20.55Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0.5"
        })
    }));
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/icons/Rocket.tsx

const Rocket = ()=>{
    return(/*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "27",
        height: "27",
        viewBox: "0 0 27 27",
        fill: "currentColor",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M26.124 2.04676L26.1238 2.04465C26.0601 1.40614 25.5779 0.923048 24.9398 0.859144L24.9398 0.859101L24.9356 0.858773C18.0429 0.313118 13.0924 3.63772 9.98643 7.8152C8.2858 7.30709 6.4626 7.51964 4.80486 8.44494L4.8046 8.44509C3.1599 9.36631 1.80265 10.924 0.918806 12.8048L0.918738 12.8048L0.916543 12.8098C0.695665 13.3154 0.787404 13.8964 1.20559 14.2852C1.59961 14.6771 2.21113 14.7351 2.6876 14.4808C4.36556 13.5881 6.22106 13.7863 7.31393 14.8808L12.0942 19.6679L12.2358 19.5265L12.0942 19.6679L12.1214 19.6951C13.2144 20.7896 13.4124 22.6481 12.5208 24.3287C12.2621 24.8147 12.3596 25.4226 12.7129 25.8086L12.7128 25.8088L12.7189 25.8149C12.9744 26.0708 13.2972 26.2 13.6481 26.2C13.8271 26.2 14.027 26.1711 14.2036 26.0681C16.0792 25.1823 17.63 23.7976 18.5478 22.1825C19.4998 20.5207 19.7125 18.693 19.1788 16.9638C20.3641 16.0833 21.4487 15.1218 22.3553 14.054C25.2717 10.7196 26.5359 6.66686 26.124 2.04676ZM7.62952 11.9854C6.8739 11.6001 6.03907 11.3854 5.17772 11.3538C6.16675 10.5162 7.32079 10.0227 8.52291 10.1381C8.18478 10.7555 7.8963 11.3717 7.62952 11.9854ZM16.9118 18.4819C17.0318 19.6994 16.5477 20.8824 15.689 21.8797C15.6463 20.9934 15.4339 20.1473 15.0641 19.3828C15.6986 19.1112 16.3145 18.8061 16.9118 18.4819ZM23.6375 3.37745C23.767 12.1052 16.6525 15.9671 13.3708 17.2794L9.72534 13.6288C11.6483 8.61396 16.2906 3.33858 23.6375 3.37745ZM21.0729 7.9124C21.0729 7.39743 20.862 6.88409 20.4984 6.5199C20.1347 6.15571 19.6219 5.94444 19.1074 5.94444C18.5929 5.94444 18.0802 6.15571 17.7165 6.5199C17.3529 6.88409 17.142 7.39743 17.142 7.9124C17.142 8.43173 17.3559 8.91385 17.711 9.29912C18.0814 9.70094 18.6004 9.88036 19.1074 9.88036C19.6219 9.88036 20.1347 9.66909 20.4984 9.30489C20.862 8.94071 21.0729 8.42737 21.0729 7.9124ZM4.92279 17.8358C4.25678 18.5034 3.92105 19.4885 3.74885 20.3439C3.57539 21.2054 3.56158 21.9682 3.56158 22.2193C3.56158 22.9279 4.13975 23.5073 4.84801 23.5073H4.87517C5.16792 23.5073 5.92318 23.4865 6.76341 23.3092C7.5986 23.1329 8.54744 22.796 9.19946 22.143C10.0031 21.3382 10.1814 20.4957 10.1814 19.9345C10.1814 19.1437 9.85912 18.387 9.25451 17.7812C8.53507 17.0467 7.7099 16.7857 6.92924 16.8521C6.15534 16.9179 5.44026 17.3037 4.92279 17.8358ZM7.39541 20.31C7.29055 20.415 7.10601 20.5183 6.85616 20.606C6.68672 20.6655 6.49549 20.715 6.29419 20.7529C6.33881 20.5485 6.392 20.3549 6.45226 20.185C6.54134 19.9339 6.63797 19.7579 6.72783 19.6679C6.91125 19.4842 7.0242 19.4274 7.12952 19.4274C7.18946 19.4274 7.30435 19.4679 7.44973 19.6135C7.58347 19.7474 7.62855 19.8556 7.63489 19.9191C7.62385 19.9658 7.59729 20.0297 7.55494 20.1013C7.50836 20.18 7.45049 20.2548 7.39541 20.31Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0.4"
        })
    }));
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/icons/Investors.tsx

const Investors = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "33",
        height: "33",
        viewBox: "0 0 33 33",
        fill: "currentColor",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M19.7875 13.75L19.7875 13.7509C19.7889 13.9903 19.8472 14.2256 19.9571 14.4375C19.8472 14.6494 19.7889 14.8847 19.7875 15.1241V15.125V16.35H15.125H14.975V16.5V17.875V18.025H15.125H19.7875V19.1H14.4375H14.2875V19.25V20.625V20.775H14.4375H19.7875V21.85H13.75H13.6V22V23.375V23.525H13.75H19.7875V24.6H9.625H9.475V24.75C9.475 25.1545 9.63567 25.5423 9.92166 25.8283C10.2077 26.1143 10.5955 26.275 11 26.275L19.9375 26.275L19.9384 26.275C20.1778 26.2736 20.4131 26.2153 20.625 26.1054C20.8369 26.2153 21.0722 26.2736 21.3116 26.275H21.3125H30.25C30.6545 26.275 31.0423 26.1143 31.3283 25.8283C31.6143 25.5423 31.775 25.1545 31.775 24.75L31.775 20.625L31.775 20.6241C31.7736 20.3847 31.7153 20.1494 31.6054 19.9375C31.7153 19.7256 31.7736 19.4903 31.775 19.2509V19.25L31.775 15.125L31.775 15.1241C31.7736 14.8847 31.7153 14.6494 31.6054 14.4375C31.7153 14.2256 31.7736 13.9903 31.775 13.7509V13.75V9.625C31.775 9.22054 31.6143 8.83266 31.3283 8.54666C31.0423 8.26067 30.6545 8.1 30.25 8.1H21.3125C20.908 8.1 20.5202 8.26067 20.2342 8.54666C19.9482 8.83266 19.7875 9.22054 19.7875 9.625L19.7875 13.75ZM30.1 21.85H21.4625V20.775H30.1V21.85ZM21.4625 19.1V18.025H30.1V19.1H21.4625ZM30.1 16.35H21.4625V15.275H30.1V16.35ZM21.4625 13.6V12.525H30.1V13.6H21.4625ZM21.4625 9.775H30.1V10.85H21.4625V9.775ZM30.1 24.6H21.4625V23.525H30.1V24.6Z",
                fill: "currentColor",
                stroke: "currentColor",
                strokeWidth: "0.3"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M13.9 18.5627V18.5625C13.9 17.3091 13.5283 16.0838 12.8319 15.0416C12.1356 13.9994 11.1458 13.1871 9.98776 12.7074C8.82973 12.2277 7.55547 12.1022 6.32612 12.3468C5.09676 12.5913 3.96753 13.1949 3.08121 14.0812C2.1949 14.9675 1.59131 16.0968 1.34678 17.3261C1.10224 18.5555 1.22775 19.8297 1.70742 20.9878C2.18709 22.1458 2.99938 23.1356 4.04158 23.8319C5.08377 24.5283 6.30906 24.9 7.5625 24.9L7.56269 24.9C9.24282 24.898 10.8535 24.2296 12.0416 23.0416C13.2296 21.8535 13.898 20.2428 13.9 18.5627ZM7.56233 23.225C6.64023 23.225 5.73885 22.9515 4.97216 22.4392C4.20541 21.9269 3.60781 21.1987 3.25491 20.3468C2.90202 19.4948 2.80969 18.5573 2.98959 17.6529C3.16949 16.7485 3.61356 15.9177 4.26562 15.2656C4.91768 14.6136 5.74846 14.1695 6.65289 13.9896C7.55733 13.8097 8.4948 13.902 9.34676 14.2549C10.1987 14.6078 10.9269 15.2054 11.4392 15.9722C11.9515 16.7389 12.225 17.6402 12.225 18.5623C12.2236 19.7985 11.7319 20.9837 10.8578 21.8578C9.98366 22.7319 8.79851 23.2236 7.56233 23.225Z",
                fill: "currentColor",
                stroke: "currentColor",
                strokeWidth: "0.3"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M8.9375 14.975H8.4V14.4375V14.2875H8.25H6.875H6.725V14.4375V14.975H6.1875C5.78304 14.975 5.39516 15.1357 5.10916 15.4217C4.82317 15.7077 4.6625 16.0955 4.6625 16.5V17.875C4.6625 18.2795 4.82317 18.6673 5.10916 18.9533C5.39516 19.2393 5.78304 19.4 6.1875 19.4H8.7875V20.475H6.3375V19.9375V19.7875H6.1875H4.8125H4.6625V19.9375V20.625C4.6625 21.0295 4.82317 21.4173 5.10916 21.7033C5.39516 21.9893 5.78304 22.15 6.1875 22.15H6.725V22.6875V22.8375H6.875H8.25H8.4V22.6875V22.15H8.9375C9.34196 22.15 9.72984 21.9893 10.0158 21.7033C10.3018 21.4173 10.4625 21.0295 10.4625 20.625V19.25C10.4625 18.8455 10.3018 18.4577 10.0158 18.1717C9.72984 17.8857 9.34196 17.725 8.9375 17.725H6.3375V16.65H8.7875V17.1875V17.3375H8.9375H10.3125H10.4625V17.1875V16.5C10.4625 16.0955 10.3018 15.7077 10.0158 15.4217C9.72984 15.1357 9.34196 14.975 8.9375 14.975Z",
                fill: "currentColor",
                stroke: "currentColor",
                strokeWidth: "0.3"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/icons/Alerts.tsx

const Alerts = ()=>{
    return(/*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "23",
        height: "20",
        viewBox: "0 0 23 20",
        fill: "currentColor",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M22.5407 15.0532L14.5171 1.66567C14.1927 1.15503 13.7457 0.734783 13.2173 0.443683C12.689 0.152584 12.0963 0 11.4939 0C10.8915 0 10.2988 0.152584 9.77048 0.443683C9.24213 0.734783 8.79513 1.15503 8.47069 1.66567L0.447108 15.0532C0.163671 15.5285 0.00961747 16.0706 0.000435888 16.6248C-0.00874569 17.1791 0.127268 17.726 0.394803 18.2106C0.704113 18.7561 1.15182 19.2091 1.69218 19.5235C2.23253 19.8378 2.84615 20.0022 3.47033 19.9998H19.5175C20.1376 20.0065 20.7484 19.8484 21.2884 19.5417C21.8284 19.2349 22.2784 18.7903 22.593 18.2527C22.8684 17.7631 23.0088 17.2083 22.9996 16.6458C22.9904 16.0833 22.832 15.5334 22.5407 15.0532ZM11.4939 15.7899C11.287 15.7899 11.0848 15.7282 10.9127 15.6125C10.7407 15.4969 10.6066 15.3325 10.5274 15.1402C10.4483 14.9479 10.4276 14.7363 10.4679 14.5321C10.5083 14.3279 10.6079 14.1404 10.7542 13.9932C10.9005 13.846 11.0869 13.7458 11.2898 13.7052C11.4928 13.6646 11.7031 13.6854 11.8942 13.7651C12.0854 13.8447 12.2488 13.9796 12.3637 14.1527C12.4787 14.3258 12.54 14.5293 12.54 14.7374C12.54 15.0166 12.4298 15.2843 12.2336 15.4816C12.0374 15.679 11.7714 15.7899 11.4939 15.7899ZM12.54 11.58C12.54 11.8591 12.4298 12.1268 12.2336 12.3242C12.0374 12.5216 11.7714 12.6325 11.4939 12.6325C11.2165 12.6325 10.9504 12.5216 10.7542 12.3242C10.558 12.1268 10.4478 11.8591 10.4478 11.58V7.37009C10.4478 7.09096 10.558 6.82326 10.7542 6.62588C10.9504 6.4285 11.2165 6.31762 11.4939 6.31762C11.7714 6.31762 12.0374 6.4285 12.2336 6.62588C12.4298 6.82326 12.54 7.09096 12.54 7.37009V11.58Z",
            fill: "currentColor"
        })
    }));
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/icons/Data.tsx

const Data = ()=>{
    return(/*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "21",
        height: "21",
        viewBox: "0 0 21 21",
        fill: "currentColor",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M18.93 1.28746e-05C19.9862 1.28746e-05 20.88 0.893763 20.88 1.95001V13.65C20.88 14.7469 19.9862 15.6 18.93 15.6H7.22998C6.13311 15.6 5.27998 14.7469 5.27998 13.65V1.95001C5.27998 0.893763 6.13311 1.28746e-05 7.22998 1.28746e-05H18.93ZM7.22998 16.9H15.68V18.85C15.68 19.9469 14.7862 20.8 13.73 20.8H2.02998C0.933106 20.8 0.0799809 19.9469 0.0799809 18.85V7.15001C0.0799809 6.09376 0.933106 5.20001 2.02998 5.20001H3.97998V13.65C3.97998 15.4781 5.40186 16.9 7.22998 16.9Z",
            fill: "currentColor"
        })
    }));
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/icons/Downloads.tsx

const Downloads = ()=>{
    return(/*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "25",
        height: "26",
        viewBox: "0 0 25 26",
        fill: "currentColor",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M7.34722 14.677C7.21704 14.7979 7.11372 14.9416 7.04321 15.1C6.97269 15.2585 6.93639 15.4284 6.93639 15.6C6.93639 15.7716 6.97269 15.9415 7.04321 16.0999C7.11372 16.2584 7.21704 16.4021 7.34722 16.523L11.5139 20.423C11.643 20.5448 11.7966 20.6416 11.9659 20.7076C12.1351 20.7736 12.3167 20.8075 12.5 20.8075C12.6833 20.8075 12.8649 20.7736 13.0341 20.7076C13.2034 20.6416 13.357 20.5448 13.4861 20.423L17.6528 16.523C17.9143 16.2782 18.0612 15.9462 18.0612 15.6C18.0612 15.2538 17.9143 14.9218 17.6528 14.677C17.3912 14.4322 17.0365 14.2947 16.6667 14.2947C16.2968 14.2947 15.9421 14.4322 15.6806 14.677L13.8889 16.367V1.3C13.8889 0.955218 13.7426 0.624558 13.4821 0.380761C13.2216 0.136964 12.8684 0 12.5 0C12.1316 0 11.7784 0.136964 11.5179 0.380761C11.2574 0.624558 11.1111 0.955218 11.1111 1.3V16.367L9.31944 14.677C9.19033 14.5552 9.03672 14.4584 8.86747 14.3924C8.69822 14.3264 8.51668 14.2925 8.33333 14.2925C8.14998 14.2925 7.96845 14.3264 7.7992 14.3924C7.62995 14.4584 7.47634 14.5552 7.34722 14.677ZM20.8333 9.1H18.0556C17.6872 9.1 17.3339 9.23696 17.0735 9.48076C16.813 9.72456 16.6667 10.0552 16.6667 10.4C16.6667 10.7448 16.813 11.0754 17.0735 11.3192C17.3339 11.563 17.6872 11.7 18.0556 11.7H20.8333C21.2017 11.7 21.555 11.837 21.8154 12.0808C22.0759 12.3246 22.2222 12.6552 22.2222 13V22.1C22.2222 22.4448 22.0759 22.7754 21.8154 23.0192C21.555 23.263 21.2017 23.4 20.8333 23.4H4.16667C3.79831 23.4 3.44504 23.263 3.18457 23.0192C2.92411 22.7754 2.77778 22.4448 2.77778 22.1V13C2.77778 12.6552 2.92411 12.3246 3.18457 12.0808C3.44504 11.837 3.79831 11.7 4.16667 11.7H6.94444C7.3128 11.7 7.66607 11.563 7.92654 11.3192C8.187 11.0754 8.33333 10.7448 8.33333 10.4C8.33333 10.0552 8.187 9.72456 7.92654 9.48076C7.66607 9.23696 7.3128 9.1 6.94444 9.1H4.16667C3.0616 9.1 2.00179 9.51089 1.22039 10.2423C0.438987 10.9737 0 11.9657 0 13V22.1C0 23.1343 0.438987 24.1263 1.22039 24.8577C2.00179 25.5891 3.0616 26 4.16667 26H20.8333C21.9384 26 22.9982 25.5891 23.7796 24.8577C24.561 24.1263 25 23.1343 25 22.1V13C25 11.9657 24.561 10.9737 23.7796 10.2423C22.9982 9.51089 21.9384 9.1 20.8333 9.1Z",
            fill: "currentColor"
        })
    }));
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/icons/Funding.tsx

const Funding = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "29",
        height: "22",
        viewBox: "0 0 29 22",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("mask", {
                id: "path-1-outside-1_20_80",
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "29",
                height: "22",
                fill: "black",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("rect", {
                        fill: "white",
                        width: "29",
                        height: "22"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M22.514 8.99756H20.8267C20.7148 8.99756 20.6075 9.0419 20.5284 9.12084C20.4493 9.19978 20.4048 9.30684 20.4048 9.41848C20.4048 9.53012 20.4493 9.63718 20.5284 9.71612C20.6075 9.79506 20.7148 9.8394 20.8267 9.8394H21.6703V10.6813C21.6703 10.7929 21.7148 10.9 21.7939 10.9789C21.873 11.0578 21.9803 11.1022 22.0922 11.1022C22.2041 11.1022 22.3114 11.0578 22.3905 10.9789C22.4696 10.9 22.514 10.7929 22.514 10.6813V9.8394C22.8497 9.8394 23.1716 9.70636 23.4089 9.46955C23.6462 9.23273 23.7796 8.91154 23.7796 8.57663V7.73478C23.7796 7.39988 23.6462 7.07869 23.4089 6.84187C23.1716 6.60505 22.8497 6.47201 22.514 6.47201H21.6703C21.5585 6.47201 21.4512 6.42767 21.3721 6.34873C21.2929 6.26979 21.2485 6.16272 21.2485 6.05109V5.20924C21.2485 5.09761 21.2929 4.99054 21.3721 4.9116C21.4512 4.83266 21.5585 4.78832 21.6703 4.78832H23.3577C23.4696 4.78832 23.5769 4.74397 23.656 4.66503C23.7351 4.58609 23.7796 4.47903 23.7796 4.36739C23.7796 4.25576 23.7351 4.14869 23.656 4.06976C23.5769 3.99082 23.4696 3.94647 23.3577 3.94647H22.514V3.10462C22.514 2.99299 22.4696 2.88592 22.3905 2.80698C22.3114 2.72805 22.2041 2.6837 22.0922 2.6837C21.9803 2.6837 21.873 2.72805 21.7939 2.80698C21.7148 2.88592 21.6703 2.99299 21.6703 3.10462V3.94647C21.3347 3.94647 21.0128 4.07951 20.7755 4.31633C20.5381 4.55314 20.4048 4.87433 20.4048 5.20924V6.05109C20.4048 6.386 20.5381 6.70719 20.7755 6.944C21.0128 7.18082 21.3347 7.31386 21.6703 7.31386H22.514C22.6259 7.31386 22.7332 7.35821 22.8123 7.43715C22.8914 7.51608 22.9359 7.62315 22.9359 7.73478V8.57663C22.9359 8.68827 22.8914 8.79533 22.8123 8.87427C22.7332 8.95321 22.6259 8.99756 22.514 8.99756ZM26.53 15.3956L17.8737 16.1171V15.0858C17.8768 14.4512 17.6732 13.8329 17.2936 13.3238C16.9139 12.8147 16.3788 12.4424 15.7687 12.2631L9.38794 10.3538C9.31598 10.0863 9.15791 9.84993 8.93808 9.68093C8.71825 9.51193 8.44885 9.41971 8.17134 9.41848H1.42184C1.30996 9.41848 1.20267 9.46283 1.12356 9.54177C1.04444 9.6207 1 9.72777 1 9.8394V19.0997C1 19.2114 1.04444 19.3184 1.12356 19.3974C1.20267 19.4763 1.30996 19.5207 1.42184 19.5207H8.17134C8.41234 19.5199 8.64811 19.4505 8.85093 19.3206C9.05374 19.1907 9.21517 19.0057 9.31623 18.7874L16.0514 20.8036C16.9667 21.0791 17.945 21.0644 18.8516 20.7615L27.0699 18.0281C27.3852 17.924 27.6512 17.7082 27.8176 17.4214C27.9839 17.1347 28.039 16.797 27.9725 16.4724C27.9059 16.1478 27.7222 15.8589 27.4564 15.6604C27.1905 15.4619 26.8608 15.3677 26.53 15.3956ZM6.06212 18.6788H1.84369V10.2603H6.06212V18.6788ZM8.59319 18.2579C8.59319 18.3695 8.54874 18.4766 8.46963 18.5555C8.39052 18.6345 8.28322 18.6788 8.17134 18.6788H6.90581V10.2603H8.17134C8.28322 10.2603 8.39052 10.3047 8.46963 10.3836C8.54874 10.4626 8.59319 10.5696 8.59319 10.6813V18.2579ZM26.8042 17.2283L18.585 19.9618C17.8433 20.2101 17.0426 20.2224 16.2935 19.9971L9.43687 17.9447V11.247L15.5266 13.0696C15.9621 13.198 16.3441 13.464 16.6152 13.8276C16.8863 14.1911 17.0319 14.6326 17.0301 15.0858V15.9521L13.3904 14.499C13.3386 14.4763 13.2827 14.4642 13.2261 14.4634C13.1695 14.4627 13.1133 14.4733 13.0609 14.4946C13.0085 14.516 12.9609 14.5477 12.921 14.5878C12.8812 14.6279 12.8498 14.6756 12.8288 14.728C12.8077 14.7805 12.7975 14.8366 12.7987 14.8931C12.7999 14.9496 12.8125 15.0053 12.8357 15.0568C12.8589 15.1083 12.8922 15.1547 12.9338 15.1931C12.9753 15.2314 13.0241 15.2611 13.0774 15.2803L17.2958 16.964H17.3068C17.3273 16.9694 17.3481 16.9734 17.3692 16.9757C17.3967 16.9839 17.425 16.9892 17.4536 16.9917C17.4587 16.9917 17.4629 16.9917 17.4679 16.9875C17.473 16.9833 17.4814 16.9875 17.489 16.9875L26.6009 16.2299C26.7261 16.2184 26.8512 16.2534 26.9523 16.3283C27.0533 16.4031 27.1231 16.5124 27.1484 16.6354C27.1736 16.7584 27.1526 16.8863 27.0893 16.9948C27.0259 17.1032 26.9247 17.1846 26.805 17.2233L26.8042 17.2283ZM22.0922 12.7859C23.2602 12.7859 24.4021 12.4403 25.3733 11.7927C26.3445 11.1452 27.1014 10.2249 27.5484 9.14806C27.9954 8.07127 28.1124 6.8864 27.8845 5.74328C27.6566 4.60017 27.0942 3.55015 26.2682 2.726C25.4423 1.90186 24.39 1.34061 23.2444 1.11323C22.0987 0.885854 20.9113 1.00255 19.8321 1.44858C18.753 1.8946 17.8306 2.64991 17.1817 3.619C16.5327 4.58809 16.1864 5.72742 16.1864 6.89294C16.1882 8.45529 16.811 9.95315 17.9181 11.0579C19.0253 12.1627 20.5264 12.7841 22.0922 12.7859ZM22.0922 1.84185C23.0934 1.84185 24.0721 2.13809 24.9046 2.69311C25.737 3.24813 26.3858 4.037 26.769 4.95997C27.1521 5.88294 27.2524 6.89854 27.057 7.87835C26.8617 8.85817 26.3796 9.75819 25.6716 10.4646C24.9637 11.171 24.0617 11.6521 23.0798 11.847C22.0978 12.0419 21.08 11.9418 20.155 11.5595C19.23 11.1772 18.4394 10.5298 17.8832 9.69917C17.327 8.86852 17.0301 7.89195 17.0301 6.89294C17.0316 5.55378 17.5655 4.26993 18.5144 3.323C19.4634 2.37608 20.7501 1.84341 22.0922 1.84185Z"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M22.514 8.99756H20.8267C20.7148 8.99756 20.6075 9.0419 20.5284 9.12084C20.4493 9.19978 20.4048 9.30684 20.4048 9.41848C20.4048 9.53012 20.4493 9.63718 20.5284 9.71612C20.6075 9.79506 20.7148 9.8394 20.8267 9.8394H21.6703V10.6813C21.6703 10.7929 21.7148 10.9 21.7939 10.9789C21.873 11.0578 21.9803 11.1022 22.0922 11.1022C22.2041 11.1022 22.3114 11.0578 22.3905 10.9789C22.4696 10.9 22.514 10.7929 22.514 10.6813V9.8394C22.8497 9.8394 23.1716 9.70636 23.4089 9.46955C23.6462 9.23273 23.7796 8.91154 23.7796 8.57663V7.73478C23.7796 7.39988 23.6462 7.07869 23.4089 6.84187C23.1716 6.60505 22.8497 6.47201 22.514 6.47201H21.6703C21.5585 6.47201 21.4512 6.42767 21.3721 6.34873C21.2929 6.26979 21.2485 6.16272 21.2485 6.05109V5.20924C21.2485 5.09761 21.2929 4.99054 21.3721 4.9116C21.4512 4.83266 21.5585 4.78832 21.6703 4.78832H23.3577C23.4696 4.78832 23.5769 4.74397 23.656 4.66503C23.7351 4.58609 23.7796 4.47903 23.7796 4.36739C23.7796 4.25576 23.7351 4.14869 23.656 4.06976C23.5769 3.99082 23.4696 3.94647 23.3577 3.94647H22.514V3.10462C22.514 2.99299 22.4696 2.88592 22.3905 2.80698C22.3114 2.72805 22.2041 2.6837 22.0922 2.6837C21.9803 2.6837 21.873 2.72805 21.7939 2.80698C21.7148 2.88592 21.6703 2.99299 21.6703 3.10462V3.94647C21.3347 3.94647 21.0128 4.07951 20.7755 4.31633C20.5381 4.55314 20.4048 4.87433 20.4048 5.20924V6.05109C20.4048 6.386 20.5381 6.70719 20.7755 6.944C21.0128 7.18082 21.3347 7.31386 21.6703 7.31386H22.514C22.6259 7.31386 22.7332 7.35821 22.8123 7.43715C22.8914 7.51608 22.9359 7.62315 22.9359 7.73478V8.57663C22.9359 8.68827 22.8914 8.79533 22.8123 8.87427C22.7332 8.95321 22.6259 8.99756 22.514 8.99756ZM26.53 15.3956L17.8737 16.1171V15.0858C17.8768 14.4512 17.6732 13.8329 17.2936 13.3238C16.9139 12.8147 16.3788 12.4424 15.7687 12.2631L9.38794 10.3538C9.31598 10.0863 9.15791 9.84993 8.93808 9.68093C8.71825 9.51193 8.44885 9.41971 8.17134 9.41848H1.42184C1.30996 9.41848 1.20267 9.46283 1.12356 9.54177C1.04444 9.6207 1 9.72777 1 9.8394V19.0997C1 19.2114 1.04444 19.3184 1.12356 19.3974C1.20267 19.4763 1.30996 19.5207 1.42184 19.5207H8.17134C8.41234 19.5199 8.64811 19.4505 8.85093 19.3206C9.05374 19.1907 9.21517 19.0057 9.31623 18.7874L16.0514 20.8036C16.9667 21.0791 17.945 21.0644 18.8516 20.7615L27.0699 18.0281C27.3852 17.924 27.6512 17.7082 27.8176 17.4214C27.9839 17.1347 28.039 16.797 27.9725 16.4724C27.9059 16.1478 27.7222 15.8589 27.4564 15.6604C27.1905 15.4619 26.8608 15.3677 26.53 15.3956ZM6.06212 18.6788H1.84369V10.2603H6.06212V18.6788ZM8.59319 18.2579C8.59319 18.3695 8.54874 18.4766 8.46963 18.5555C8.39052 18.6345 8.28322 18.6788 8.17134 18.6788H6.90581V10.2603H8.17134C8.28322 10.2603 8.39052 10.3047 8.46963 10.3836C8.54874 10.4626 8.59319 10.5696 8.59319 10.6813V18.2579ZM26.8042 17.2283L18.585 19.9618C17.8433 20.2101 17.0426 20.2224 16.2935 19.9971L9.43687 17.9447V11.247L15.5266 13.0696C15.9621 13.198 16.3441 13.464 16.6152 13.8276C16.8863 14.1911 17.0319 14.6326 17.0301 15.0858V15.9521L13.3904 14.499C13.3386 14.4763 13.2827 14.4642 13.2261 14.4634C13.1695 14.4627 13.1133 14.4733 13.0609 14.4946C13.0085 14.516 12.9609 14.5477 12.921 14.5878C12.8812 14.6279 12.8498 14.6756 12.8288 14.728C12.8077 14.7805 12.7975 14.8366 12.7987 14.8931C12.7999 14.9496 12.8125 15.0053 12.8357 15.0568C12.8589 15.1083 12.8922 15.1547 12.9338 15.1931C12.9753 15.2314 13.0241 15.2611 13.0774 15.2803L17.2958 16.964H17.3068C17.3273 16.9694 17.3481 16.9734 17.3692 16.9757C17.3967 16.9839 17.425 16.9892 17.4536 16.9917C17.4587 16.9917 17.4629 16.9917 17.4679 16.9875C17.473 16.9833 17.4814 16.9875 17.489 16.9875L26.6009 16.2299C26.7261 16.2184 26.8512 16.2534 26.9523 16.3283C27.0533 16.4031 27.1231 16.5124 27.1484 16.6354C27.1736 16.7584 27.1526 16.8863 27.0893 16.9948C27.0259 17.1032 26.9247 17.1846 26.805 17.2233L26.8042 17.2283ZM22.0922 12.7859C23.2602 12.7859 24.4021 12.4403 25.3733 11.7927C26.3445 11.1452 27.1014 10.2249 27.5484 9.14806C27.9954 8.07127 28.1124 6.8864 27.8845 5.74328C27.6566 4.60017 27.0942 3.55015 26.2682 2.726C25.4423 1.90186 24.39 1.34061 23.2444 1.11323C22.0987 0.885854 20.9113 1.00255 19.8321 1.44858C18.753 1.8946 17.8306 2.64991 17.1817 3.619C16.5327 4.58809 16.1864 5.72742 16.1864 6.89294C16.1882 8.45529 16.811 9.95315 17.9181 11.0579C19.0253 12.1627 20.5264 12.7841 22.0922 12.7859ZM22.0922 1.84185C23.0934 1.84185 24.0721 2.13809 24.9046 2.69311C25.737 3.24813 26.3858 4.037 26.769 4.95997C27.1521 5.88294 27.2524 6.89854 27.057 7.87835C26.8617 8.85817 26.3796 9.75819 25.6716 10.4646C24.9637 11.171 24.0617 11.6521 23.0798 11.847C22.0978 12.0419 21.08 11.9418 20.155 11.5595C19.23 11.1772 18.4394 10.5298 17.8832 9.69917C17.327 8.86852 17.0301 7.89195 17.0301 6.89294C17.0316 5.55378 17.5655 4.26993 18.5144 3.323C19.4634 2.37608 20.7501 1.84341 22.0922 1.84185Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M22.514 8.99756H20.8267C20.7148 8.99756 20.6075 9.0419 20.5284 9.12084C20.4493 9.19978 20.4048 9.30684 20.4048 9.41848C20.4048 9.53012 20.4493 9.63718 20.5284 9.71612C20.6075 9.79506 20.7148 9.8394 20.8267 9.8394H21.6703V10.6813C21.6703 10.7929 21.7148 10.9 21.7939 10.9789C21.873 11.0578 21.9803 11.1022 22.0922 11.1022C22.2041 11.1022 22.3114 11.0578 22.3905 10.9789C22.4696 10.9 22.514 10.7929 22.514 10.6813V9.8394C22.8497 9.8394 23.1716 9.70636 23.4089 9.46955C23.6462 9.23273 23.7796 8.91154 23.7796 8.57663V7.73478C23.7796 7.39988 23.6462 7.07869 23.4089 6.84187C23.1716 6.60505 22.8497 6.47201 22.514 6.47201H21.6703C21.5585 6.47201 21.4512 6.42767 21.3721 6.34873C21.2929 6.26979 21.2485 6.16272 21.2485 6.05109V5.20924C21.2485 5.09761 21.2929 4.99054 21.3721 4.9116C21.4512 4.83266 21.5585 4.78832 21.6703 4.78832H23.3577C23.4696 4.78832 23.5769 4.74397 23.656 4.66503C23.7351 4.58609 23.7796 4.47903 23.7796 4.36739C23.7796 4.25576 23.7351 4.14869 23.656 4.06976C23.5769 3.99082 23.4696 3.94647 23.3577 3.94647H22.514V3.10462C22.514 2.99299 22.4696 2.88592 22.3905 2.80698C22.3114 2.72805 22.2041 2.6837 22.0922 2.6837C21.9803 2.6837 21.873 2.72805 21.7939 2.80698C21.7148 2.88592 21.6703 2.99299 21.6703 3.10462V3.94647C21.3347 3.94647 21.0128 4.07951 20.7755 4.31633C20.5381 4.55314 20.4048 4.87433 20.4048 5.20924V6.05109C20.4048 6.386 20.5381 6.70719 20.7755 6.944C21.0128 7.18082 21.3347 7.31386 21.6703 7.31386H22.514C22.6259 7.31386 22.7332 7.35821 22.8123 7.43715C22.8914 7.51608 22.9359 7.62315 22.9359 7.73478V8.57663C22.9359 8.68827 22.8914 8.79533 22.8123 8.87427C22.7332 8.95321 22.6259 8.99756 22.514 8.99756ZM26.53 15.3956L17.8737 16.1171V15.0858C17.8768 14.4512 17.6732 13.8329 17.2936 13.3238C16.9139 12.8147 16.3788 12.4424 15.7687 12.2631L9.38794 10.3538C9.31598 10.0863 9.15791 9.84993 8.93808 9.68093C8.71825 9.51193 8.44885 9.41971 8.17134 9.41848H1.42184C1.30996 9.41848 1.20267 9.46283 1.12356 9.54177C1.04444 9.6207 1 9.72777 1 9.8394V19.0997C1 19.2114 1.04444 19.3184 1.12356 19.3974C1.20267 19.4763 1.30996 19.5207 1.42184 19.5207H8.17134C8.41234 19.5199 8.64811 19.4505 8.85093 19.3206C9.05374 19.1907 9.21517 19.0057 9.31623 18.7874L16.0514 20.8036C16.9667 21.0791 17.945 21.0644 18.8516 20.7615L27.0699 18.0281C27.3852 17.924 27.6512 17.7082 27.8176 17.4214C27.9839 17.1347 28.039 16.797 27.9725 16.4724C27.9059 16.1478 27.7222 15.8589 27.4564 15.6604C27.1905 15.4619 26.8608 15.3677 26.53 15.3956ZM6.06212 18.6788H1.84369V10.2603H6.06212V18.6788ZM8.59319 18.2579C8.59319 18.3695 8.54874 18.4766 8.46963 18.5555C8.39052 18.6345 8.28322 18.6788 8.17134 18.6788H6.90581V10.2603H8.17134C8.28322 10.2603 8.39052 10.3047 8.46963 10.3836C8.54874 10.4626 8.59319 10.5696 8.59319 10.6813V18.2579ZM26.8042 17.2283L18.585 19.9618C17.8433 20.2101 17.0426 20.2224 16.2935 19.9971L9.43687 17.9447V11.247L15.5266 13.0696C15.9621 13.198 16.3441 13.464 16.6152 13.8276C16.8863 14.1911 17.0319 14.6326 17.0301 15.0858V15.9521L13.3904 14.499C13.3386 14.4763 13.2827 14.4642 13.2261 14.4634C13.1695 14.4627 13.1133 14.4733 13.0609 14.4946C13.0085 14.516 12.9609 14.5477 12.921 14.5878C12.8812 14.6279 12.8498 14.6756 12.8288 14.728C12.8077 14.7805 12.7975 14.8366 12.7987 14.8931C12.7999 14.9496 12.8125 15.0053 12.8357 15.0568C12.8589 15.1083 12.8922 15.1547 12.9338 15.1931C12.9753 15.2314 13.0241 15.2611 13.0774 15.2803L17.2958 16.964H17.3068C17.3273 16.9694 17.3481 16.9734 17.3692 16.9757C17.3967 16.9839 17.425 16.9892 17.4536 16.9917C17.4587 16.9917 17.4629 16.9917 17.4679 16.9875C17.473 16.9833 17.4814 16.9875 17.489 16.9875L26.6009 16.2299C26.7261 16.2184 26.8512 16.2534 26.9523 16.3283C27.0533 16.4031 27.1231 16.5124 27.1484 16.6354C27.1736 16.7584 27.1526 16.8863 27.0893 16.9948C27.0259 17.1032 26.9247 17.1846 26.805 17.2233L26.8042 17.2283ZM22.0922 12.7859C23.2602 12.7859 24.4021 12.4403 25.3733 11.7927C26.3445 11.1452 27.1014 10.2249 27.5484 9.14806C27.9954 8.07127 28.1124 6.8864 27.8845 5.74328C27.6566 4.60017 27.0942 3.55015 26.2682 2.726C25.4423 1.90186 24.39 1.34061 23.2444 1.11323C22.0987 0.885854 20.9113 1.00255 19.8321 1.44858C18.753 1.8946 17.8306 2.64991 17.1817 3.619C16.5327 4.58809 16.1864 5.72742 16.1864 6.89294C16.1882 8.45529 16.811 9.95315 17.9181 11.0579C19.0253 12.1627 20.5264 12.7841 22.0922 12.7859ZM22.0922 1.84185C23.0934 1.84185 24.0721 2.13809 24.9046 2.69311C25.737 3.24813 26.3858 4.037 26.769 4.95997C27.1521 5.88294 27.2524 6.89854 27.057 7.87835C26.8617 8.85817 26.3796 9.75819 25.6716 10.4646C24.9637 11.171 24.0617 11.6521 23.0798 11.847C22.0978 12.0419 21.08 11.9418 20.155 11.5595C19.23 11.1772 18.4394 10.5298 17.8832 9.69917C17.327 8.86852 17.0301 7.89195 17.0301 6.89294C17.0316 5.55378 17.5655 4.26993 18.5144 3.323C19.4634 2.37608 20.7501 1.84341 22.0922 1.84185Z",
                stroke: "currentColor",
                strokeWidth: "1.4"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/icons/Management.tsx

const Management = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "currentColor",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("g", {
                clipPath: "url(#clip0_20_130)",
                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                    d: "M14 19.8739C10.7739 19.8739 8.12609 17.2565 8.12609 14C8.12609 10.7739 10.7435 8.12609 14 8.12609C17.2261 8.12609 19.8739 10.7435 19.8739 14C19.8739 17.2261 17.2261 19.8739 14 19.8739ZM14 10.287C11.9609 10.287 10.287 11.9609 10.287 14C10.287 16.0391 11.9609 17.713 14 17.713C16.0391 17.713 17.713 16.0391 17.713 14C17.713 11.9609 16.0391 10.287 14 10.287ZM14 28H13.8478C12.7826 28 11.8696 27.8783 11.8087 27.8783C11.3217 27.8174 10.9565 27.4522 10.8652 26.9652L10.5609 24.7739C9.8913 24.5609 9.25217 24.287 8.64348 23.9522L6.93913 25.2609C6.54348 25.5652 6.02609 25.5348 5.63043 25.2609C5.6 25.2304 4.86957 24.6522 4.1087 23.9217L3.98696 23.8C3.22609 23.0391 2.67826 22.3087 2.64783 22.2783C2.34348 21.8826 2.34348 21.3652 2.64783 20.9696L3.98696 19.2043C3.65217 18.5957 3.4087 17.9261 3.19565 17.2565L1.06522 16.9522C0.578261 16.8913 0.213043 16.4957 0.152174 16.0087C0.121739 15.9783 0 15.0652 0 14V13.8478C0 12.7826 0.121739 11.8696 0.121739 11.8087C0.182609 11.3217 0.547826 10.9565 1.03478 10.8652L3.22609 10.5609C3.43913 9.8913 3.71304 9.25217 4.04783 8.64348L2.73913 6.93913C2.43478 6.54348 2.46522 6.02609 2.73913 5.63043C2.76957 5.6 3.34783 4.86957 4.07826 4.1087L4.2 3.98696C4.96087 3.22609 5.6913 2.67826 5.72174 2.64783C6.11739 2.34348 6.63478 2.34348 7.03043 2.64783L8.79565 3.98696C9.40435 3.65217 10.0739 3.4087 10.7435 3.19565L11.0478 1.06522C11.1087 0.578261 11.5043 0.213043 11.9913 0.152174C12.0217 0.121739 12.9348 0 14 0H14.1522C15.2174 0 16.1304 0.121739 16.1913 0.121739C16.6783 0.182609 17.0435 0.547826 17.1348 1.03478L17.4391 3.22609C18.1087 3.43913 18.7478 3.71304 19.3565 4.04783L21.0609 2.73913C21.4565 2.43478 21.9739 2.46522 22.3696 2.73913C22.4 2.76957 23.1304 3.34783 23.8913 4.07826L24.013 4.2C24.7739 4.96087 25.3217 5.6913 25.3522 5.72174C25.6565 6.11739 25.6565 6.63478 25.3522 7.03043L24.0435 8.79565C24.3783 9.40435 24.6217 10.0739 24.8348 10.7435L26.9652 11.0478C27.4522 11.1087 27.8174 11.5043 27.8783 11.9913C27.8783 12.0217 28 12.9652 28 14.0304V14.1826C28 15.2478 27.8783 16.1609 27.8783 16.2217C27.8174 16.7087 27.4522 17.0739 26.9652 17.1652L24.7739 17.4696C24.5609 18.1391 24.287 18.7783 23.9522 19.387L25.2609 21.1217C25.5652 21.5174 25.5348 22.0348 25.2609 22.4304C25.2304 22.4609 24.6522 23.1913 23.9217 23.9522L23.8 24.0739C23.0391 24.8348 22.3087 25.3826 22.2783 25.413C21.8826 25.7174 21.3652 25.7174 20.9696 25.413L19.2043 24.0435C18.5957 24.3783 17.9261 24.6217 17.2565 24.8348L16.9522 26.9652C16.8913 27.4522 16.4957 27.8174 16.0087 27.8783C15.9783 27.8783 15.0652 28 14 28ZM12.9043 25.8087C13.1783 25.8391 13.513 25.8391 13.8478 25.8391H14C14.3348 25.8391 14.6696 25.8391 14.9435 25.8087L15.2174 23.8C15.2783 23.3435 15.613 23.0087 16.0391 22.887C16.9826 22.6739 17.8957 22.3087 18.7174 21.7913C18.9609 21.6391 19.2652 21.6087 19.5391 21.6696C19.6913 21.7 19.8435 21.7913 19.9652 21.8826L21.5783 23.1C21.7913 22.9174 22.0348 22.7043 22.2783 22.4609L22.4 22.3391C22.6435 22.0957 22.8565 21.8522 23.0391 21.6391L21.8217 20.0261C21.5478 19.6609 21.5478 19.1739 21.7609 18.8087C22.2783 18.0174 22.6435 17.1348 22.8565 16.2217C22.9478 15.7652 23.313 15.4 23.7696 15.3391L25.8087 15.0652C25.8391 14.7913 25.8391 14.4565 25.8391 14.1217V14C25.8391 13.6652 25.8391 13.3304 25.8087 13.0565L23.8 12.7826C23.3739 12.7217 23.0087 12.387 22.887 11.9609C22.6739 11.0174 22.3087 10.1348 21.8217 9.31304C21.7609 9.25217 21.7304 9.16087 21.7 9.06956C21.5783 8.73478 21.6391 8.33913 21.8522 8.06522L23.1 6.42174C22.9174 6.2087 22.7043 5.96522 22.4609 5.72174L22.3391 5.6C22.0957 5.35652 21.8522 5.14348 21.6391 4.96087L20.0261 6.17826C19.6304 6.45217 19.113 6.45217 18.7478 6.17826C17.9565 5.6913 17.0739 5.32609 16.1609 5.08261C15.7348 4.9913 15.4 4.62609 15.3391 4.16957L15.0652 2.13043C14.7913 2.1 14.4565 2.1 14.1217 2.1H14C13.6652 2.1 13.3304 2.1 13.0565 2.13043L12.7826 4.2C12.7217 4.68696 12.3565 5.05217 11.8696 5.11304C10.9565 5.32609 10.0739 5.6913 9.28261 6.17826C9.03913 6.33043 8.73478 6.36087 8.46087 6.3C8.30869 6.26957 8.15652 6.17826 8.03478 6.08696L6.45217 4.86957C6.23913 5.05217 5.99565 5.26522 5.75217 5.5087L5.63043 5.63043C5.38696 5.87391 5.17391 6.11739 4.9913 6.33043L6.2087 7.94348C6.48261 8.3087 6.48261 8.76522 6.26957 9.16087C6.23913 9.1913 6.23913 9.22174 6.2087 9.25217C5.72174 10.0435 5.35652 10.9261 5.14348 11.8391C5.05217 12.2652 4.68696 12.6 4.23043 12.6609L2.1913 12.9348C2.16087 13.2087 2.16087 13.5435 2.16087 13.8783V14C2.16087 14.3348 2.16087 14.6696 2.1913 14.9435L4.2 15.2174C4.68696 15.2783 5.05217 15.6435 5.11304 16.1304V16.1609C5.32609 17.0739 5.6913 17.9261 6.17826 18.7174C6.33043 18.9913 6.3913 19.3261 6.26957 19.6304C6.23913 19.7522 6.14783 19.8739 6.05652 19.9957L4.86957 21.5783C5.05217 21.7913 5.26522 22.0348 5.5087 22.2783L5.63043 22.4C5.87391 22.6435 6.11739 22.8565 6.33043 23.0391L7.94348 21.8217C8.33913 21.5174 8.91739 21.5478 9.28261 21.8522C10.0739 22.3391 10.9261 22.6739 11.8087 22.9174C12.2348 23.0087 12.5696 23.3739 12.6304 23.8304L12.9043 25.8087Z",
                    fill: "currentColor"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime.jsx("clipPath", {
                    id: "clip0_20_130",
                    children: /*#__PURE__*/ jsx_runtime.jsx("rect", {
                        width: "28",
                        height: "28",
                        fill: "white"
                    })
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/icons/MEA.tsx

const MEA = ()=>{
    return(/*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        fill: "currentColor",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M12.5 24.2H17.1C17.763 24.2 18.3989 23.9366 18.8678 23.4678C19.3366 22.9989 19.6 22.363 19.6 21.7V18.0667H20.9333C21.7997 18.0667 22.6306 17.7225 23.2432 17.1099C23.8558 16.4973 24.2 15.6664 24.2 14.8C24.2 13.9336 23.8558 13.1027 23.2432 12.4901C22.6306 11.8775 21.7997 11.5333 20.9333 11.5333H19.6V7.9C19.6 7.23696 19.3366 6.60107 18.8678 6.13223C18.3989 5.66339 17.763 5.4 17.1 5.4H13.4667V4.06667C13.4667 3.20029 13.1225 2.3694 12.5099 1.75678C11.8973 1.14417 11.0664 0.8 10.2 0.8C9.33363 0.8 8.50274 1.14417 7.89012 1.75678C7.2775 2.3694 6.93333 3.20029 6.93333 4.06667V5.4H3.3C2.63696 5.4 2.00107 5.66339 1.53223 6.13223C1.06339 6.60107 0.8 7.23696 0.8 7.9V12.5C0.8 12.7564 0.901845 13.0023 1.08313 13.1835C1.26442 13.3648 1.51029 13.4667 1.76667 13.4667H4.06667C4.42029 13.4667 4.75943 13.6071 5.00948 13.8572C5.25952 14.1072 5.4 14.4464 5.4 14.8C5.4 15.1536 5.25952 15.4928 5.00948 15.7428C4.75943 15.9929 4.42029 16.1333 4.06667 16.1333H1.76667C1.51029 16.1333 1.26442 16.2352 1.08313 16.4165C0.901845 16.5977 0.8 16.8436 0.8 17.1V21.7C0.8 22.363 1.06339 22.9989 1.53223 23.4678C2.00107 23.9366 2.63696 24.2 3.3 24.2H7.9C8.15638 24.2 8.40225 24.0982 8.58354 23.9169C8.76482 23.7356 8.86667 23.4897 8.86667 23.2333V20.9333C8.86667 20.5797 9.00714 20.2406 9.25719 19.9905C9.50724 19.7405 9.84638 19.6 10.2 19.6C10.5536 19.6 10.8928 19.7405 11.1428 19.9905C11.3929 20.2406 11.5333 20.5797 11.5333 20.9333V23.2333C11.5333 23.4897 11.6352 23.7356 11.8165 23.9169C11.9977 24.0982 12.2436 24.2 12.5 24.2ZM17.1 22.2667H13.4667V20.9333C13.4667 20.067 13.1225 19.2361 12.5099 18.6235C11.8973 18.0108 11.0664 17.6667 10.2 17.6667C9.33363 17.6667 8.50274 18.0108 7.89012 18.6235C7.2775 19.2361 6.93333 20.067 6.93333 20.9333V22.2667H3.3C3.14971 22.2667 3.00558 22.207 2.89931 22.1007C2.79304 21.9944 2.73333 21.8503 2.73333 21.7V18.0667H4.06667C4.93304 18.0667 5.76393 17.7225 6.37655 17.1099C6.98917 16.4973 7.33333 15.6664 7.33333 14.8C7.33333 13.9336 6.98917 13.1027 6.37655 12.4901C5.76393 11.8775 4.93304 11.5333 4.06667 11.5333H2.73333V7.9C2.73333 7.74971 2.79304 7.60558 2.89931 7.49931C3.00558 7.39304 3.14971 7.33333 3.3 7.33333H7.9C8.15638 7.33333 8.40225 7.23149 8.58354 7.0502C8.76482 6.86892 8.86667 6.62304 8.86667 6.36667V4.06667C8.86667 3.71304 9.00714 3.37391 9.25719 3.12386C9.50724 2.87381 9.84638 2.73333 10.2 2.73333C10.5536 2.73333 10.8928 2.87381 11.1428 3.12386C11.3929 3.37391 11.5333 3.71304 11.5333 4.06667V6.36667C11.5333 6.62304 11.6352 6.86892 11.8165 7.0502C11.9977 7.23149 12.2436 7.33333 12.5 7.33333H17.1C17.2503 7.33333 17.3944 7.39304 17.5007 7.49931C17.607 7.60558 17.6667 7.74971 17.6667 7.9V12.5C17.6667 12.7564 17.7685 13.0023 17.9498 13.1835C18.1311 13.3648 18.377 13.4667 18.6333 13.4667H20.9333C21.287 13.4667 21.6261 13.6071 21.8761 13.8572C22.1262 14.1072 22.2667 14.4464 22.2667 14.8C22.2667 15.1536 22.1262 15.4928 21.8761 15.7428C21.6261 15.9929 21.287 16.1333 20.9333 16.1333H18.6333C18.377 16.1333 18.1311 16.2352 17.9498 16.4165C17.7685 16.5977 17.6667 16.8436 17.6667 17.1V21.7C17.6667 21.8503 17.607 21.9944 17.5007 22.1007C17.3944 22.207 17.2503 22.2667 17.1 22.2667Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0.4"
        })
    }));
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/icons/Reports.tsx

const Reports = ()=>{
    return(/*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "25",
        viewBox: "0 0 20 25",
        fill: "currentColor",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M6.25 10H7.5C7.83152 10 8.14946 9.8683 8.38388 9.63388C8.6183 9.39946 8.75 9.08152 8.75 8.75C8.75 8.41848 8.6183 8.10054 8.38388 7.86612C8.14946 7.6317 7.83152 7.5 7.5 7.5H6.25C5.91848 7.5 5.60054 7.6317 5.36612 7.86612C5.1317 8.10054 5 8.41848 5 8.75C5 9.08152 5.1317 9.39946 5.36612 9.63388C5.60054 9.8683 5.91848 10 6.25 10ZM12.7631 12.9828L10.6714 15.6726L9.58619 14.696C9.45966 14.5821 9.31118 14.4953 9.14987 14.4408C8.98856 14.3863 8.81782 14.3654 8.64812 14.3793C8.47843 14.3932 8.31336 14.4416 8.16306 14.5216C8.01275 14.6015 7.88037 14.7114 7.77405 14.8444L5.27405 17.9694C5.17082 18.0975 5.0939 18.2447 5.04769 18.4025C5.00148 18.5604 4.98689 18.7259 5.00477 18.8894C5.02265 19.0529 5.07264 19.2113 5.15187 19.3555C5.2311 19.4997 5.33802 19.6268 5.46649 19.7295C5.59496 19.8323 5.74245 19.9087 5.9005 19.9543C6.05855 19.9999 6.22406 20.0139 6.38753 19.9954C6.55099 19.9769 6.7092 19.9264 6.85308 19.8466C6.99695 19.7668 7.12367 19.6595 7.22595 19.5306L8.89831 17.4402L9.99695 18.4289C10.1246 18.5438 10.2745 18.6312 10.4374 18.6856C10.6003 18.74 10.7727 18.7602 10.9437 18.7451C11.1148 18.7299 11.2809 18.6796 11.4317 18.5974C11.5824 18.5152 11.7147 18.4028 11.8201 18.2672L14.7369 14.5172C14.9404 14.2554 15.0316 13.9236 14.9904 13.5946C14.9492 13.2656 14.779 12.9665 14.5172 12.763C14.3876 12.6623 14.2394 12.588 14.0811 12.5446C13.9228 12.5011 13.7575 12.4892 13.5946 12.5096C13.2657 12.5508 12.9665 12.721 12.7631 12.9828ZM19.9844 8.67286C19.9681 8.3715 19.8442 8.08599 19.6352 7.8682L19.6334 7.86582L12.1342 0.366588L12.1319 0.364763C12.0277 0.26412 11.9067 0.182544 11.7743 0.12375C11.7369 0.10625 11.698 0.0963625 11.6587 0.0825C11.5513 0.0447222 11.4391 0.0220761 11.3254 0.0152126C11.2991 0.0135751 11.2767 0 11.25 0H3.75C2.75577 0.00108524 1.80257 0.396522 1.09955 1.09955C0.396522 1.80257 0.00108524 2.75577 0 3.75V21.25C0.00108524 22.2442 0.396522 23.1974 1.09955 23.9005C1.80257 24.6035 2.75577 24.9989 3.75 25H16.25C17.2442 24.9989 18.1974 24.6035 18.9005 23.9005C19.6035 23.1974 19.9989 22.2442 20 21.25V8.75C20 8.72261 19.9863 8.6998 19.9844 8.67286ZM12.5 4.26758L15.7324 7.5H13.75C13.4186 7.49957 13.1009 7.36774 12.8666 7.13341C12.6323 6.89908 12.5004 6.58139 12.5 6.25V4.26758ZM17.5 21.25C17.4996 21.5814 17.3677 21.8991 17.1334 22.1334C16.8991 22.3677 16.5814 22.4996 16.25 22.5H3.75C3.41861 22.4996 3.10092 22.3677 2.86659 22.1334C2.63226 21.8991 2.50043 21.5814 2.5 21.25V3.75C2.50043 3.41861 2.63226 3.10092 2.86659 2.86659C3.10092 2.63226 3.41861 2.50043 3.75 2.5H10V6.25C10.0011 7.24423 10.3965 8.19743 11.0995 8.90045C11.8026 9.60348 12.7558 9.99891 13.75 10H17.5V21.25Z",
            fill: "currentColor"
        })
    }));
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/icons/Hubs.tsx

const Hubs = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "29",
        height: "28",
        viewBox: "0 0 29 28",
        fill: "currentColor",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                clipPath: "url(#clip0_20_96)",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M12.6875 4.375H5.4375C4.93699 4.375 4.53125 4.76675 4.53125 5.25V12.25C4.53125 12.7332 4.93699 13.125 5.4375 13.125H12.6875C13.188 13.125 13.5938 12.7332 13.5938 12.25V5.25C13.5938 4.76675 13.188 4.375 12.6875 4.375Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M23.5625 4.375H16.3125C15.812 4.375 15.4062 4.76675 15.4062 5.25V12.25C15.4062 12.7332 15.812 13.125 16.3125 13.125H23.5625C24.063 13.125 24.4688 12.7332 24.4688 12.25V5.25C24.4688 4.76675 24.063 4.375 23.5625 4.375Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M12.6875 14.875H5.4375C4.93699 14.875 4.53125 15.2668 4.53125 15.75V22.75C4.53125 23.2332 4.93699 23.625 5.4375 23.625H12.6875C13.188 23.625 13.5938 23.2332 13.5938 22.75V15.75C13.5938 15.2668 13.188 14.875 12.6875 14.875Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M23.5625 14.875H16.3125C15.812 14.875 15.4062 15.2668 15.4062 15.75V22.75C15.4062 23.2332 15.812 23.625 16.3125 23.625H23.5625C24.063 23.625 24.4688 23.2332 24.4688 22.75V15.75C24.4688 15.2668 24.063 14.875 23.5625 14.875Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime.jsx("clipPath", {
                    id: "clip0_20_96",
                    children: /*#__PURE__*/ jsx_runtime.jsx("rect", {
                        width: "29",
                        height: "28",
                        fill: "white"
                    })
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/navigation/vertical/index.ts
// ** Icon imports












const vertical_navigation = ()=>{
    return [
        {
            title: 'Dashboard',
            icon: Home,
            path: '/'
        },
        {
            title: 'Startups',
            icon: Rocket,
            path: '/account-settings'
        },
        {
            title: 'Founders',
            icon: Building,
            path: '/founders'
        },
        {
            title: 'Investors',
            icon: Investors,
            path: '/investors'
        },
        {
            title: 'Funding Rounds',
            icon: Funding,
            path: '/funding-rounds'
        },
        {
            title: 'M&A',
            icon: MEA,
            path: '/mea'
        },
        {
            title: 'Hubs',
            icon: Hubs,
            path: '/hubs'
        },
        {
            title: 'Reports',
            icon: Reports,
            path: '/reports'
        },
        {
            title: 'My Downloads',
            icon: Downloads,
            path: '/my-downloads'
        },
        {
            title: 'Alerts',
            icon: Alerts,
            path: '/alerts'
        },
        {
            title: 'Management',
            icon: Management,
            path: '/account-settings'
        },
        {
            title: 'Data',
            icon: Data,
            path: '/data'
        }
    ];
};
/* harmony default export */ const vertical = (vertical_navigation);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Fade/index.js
var Fade = __webpack_require__(587242);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(992946);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(886096);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CardContent/index.js
var CardContent = __webpack_require__(481573);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent);
// EXTERNAL MODULE: ./node_modules/react-popper/lib/cjs/index.js
var cjs = __webpack_require__(807795);
;// CONCATENATED MODULE: ./src/layouts/components/UpgradeToProButton.tsx

// ** React Import

// ** MUI Imports






// ** Third Party Imports

const BuyNowButton = ()=>{
    // ** States
    const { 0: open , 1: setOpen  } = (0,node_modules_react.useState)(false);
    const { 0: popperElement , 1: setPopperElement  } = (0,node_modules_react.useState)(null);
    const { 0: referenceElement  } = (0,node_modules_react.useState)(null);
    const { styles , attributes , update  } = (0,cjs.usePopper)(referenceElement, popperElement, {
        placement: 'top-end'
    });
    const handleOpen = ()=>{
        setOpen(true);
        update ? update() : null;
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return(/*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
        className: "upgrade-to-pro-button mui-fixed",
        sx: {
            right: (theme)=>theme.spacing(20)
            ,
            bottom: (theme)=>theme.spacing(10)
            ,
            zIndex: 11,
            position: 'fixed'
        },
        children: /*#__PURE__*/ jsx_runtime.jsx(Fade["default"], {
            in: open,
            timeout: 700,
            children: /*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
                style: styles.popper,
                ref: setPopperElement,
                ...attributes.popper,
                onMouseEnter: handleOpen,
                onMouseLeave: handleClose,
                sx: {
                    pb: 4,
                    minWidth: (theme)=>theme.breakpoints.down('sm') ? 400 : 300
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Paper_default()), {
                    elevation: 9,
                    sx: {
                        borderRadius: 1,
                        overflow: 'hidden'
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://themeselection.com/products/materio-mui-react-nextjs-admin-template/",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                width: "100%",
                                alt: "materio-pro-banner",
                                src: "/images/misc/materio-pro-banner.png"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    sx: {
                                        mb: 4
                                    },
                                    variant: "h6",
                                    children: "React Admin Template"
                                }),
                                "Materio -",
                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    sx: {
                                        mb: 4
                                    },
                                    variant: "body2",
                                    children: "Materio Admin is the most developer friendly & highly customizable Admin Dashboard Template based on MUI and NextJS."
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    sx: {
                                        mb: 4
                                    },
                                    variant: "body2",
                                    children: "Click on below buttons to explore PRO version."
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                                    component: "a",
                                    sx: {
                                        mr: 4
                                    },
                                    target: "_blank",
                                    variant: "contained",
                                    href: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/landing/",
                                    children: "Demo"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                                    component: "a",
                                    target: "_blank",
                                    variant: "outlined",
                                    href: "https://themeselection.com/products/materio-mui-react-nextjs-admin-template/",
                                    children: "Download"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const UpgradeToProButton = (BuyNowButton);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/TextField/index.js
var TextField = __webpack_require__(307988);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(86024);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputAdornment/index.js
var InputAdornment = __webpack_require__(735142);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment);
// EXTERNAL MODULE: ./node_modules/mdi-material-ui/Menu.js
var Menu = __webpack_require__(184022);
// EXTERNAL MODULE: ./node_modules/mdi-material-ui/Magnify.js
var Magnify = __webpack_require__(569497);
// EXTERNAL MODULE: ./node_modules/mdi-material-ui/WeatherNight.js
var WeatherNight = __webpack_require__(422506);
// EXTERNAL MODULE: ./node_modules/mdi-material-ui/WeatherSunny.js
var WeatherSunny = __webpack_require__(467191);
;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/ModeToggler.tsx


// ** Icons Imports


const ModeToggler = (props)=>{
    // ** Props
    const { settings , saveSettings  } = props;
    const handleModeChange = (mode)=>{
        saveSettings({
            ...settings,
            mode
        });
    };
    const handleModeToggle = ()=>{
        if (settings.mode === 'light') {
            handleModeChange('dark');
        } else {
            handleModeChange('light');
        }
    };
    return(/*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
        color: "inherit",
        "aria-haspopup": "true",
        onClick: handleModeToggle,
        children: settings.mode === 'dark' ? /*#__PURE__*/ jsx_runtime.jsx(WeatherSunny["default"], {
        }) : /*#__PURE__*/ jsx_runtime.jsx(WeatherNight["default"], {
        })
    }));
};
/* harmony default export */ const shared_components_ModeToggler = (ModeToggler);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Menu/index.js
var node_Menu = __webpack_require__(47244);
var Menu_default = /*#__PURE__*/__webpack_require__.n(node_Menu);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Badge/index.js
var Badge = __webpack_require__(221810);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(278316);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/MenuItem/index.js
var MenuItem = __webpack_require__(164745);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem);
// EXTERNAL MODULE: ./node_modules/mdi-material-ui/CogOutline.js
var CogOutline = __webpack_require__(317261);
// EXTERNAL MODULE: ./node_modules/mdi-material-ui/CurrencyUsd.js
var CurrencyUsd = __webpack_require__(17785);
// EXTERNAL MODULE: ./node_modules/mdi-material-ui/LogoutVariant.js
var LogoutVariant = __webpack_require__(145490);
;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/UserDropdown.tsx

// ** React Imports

// ** Next Import

// ** MUI Imports








// ** Icons Imports




// ** Styled Components
const BadgeContentSpan = (0,styles.styled)('span')(({ theme  })=>({
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: theme.palette.success.main,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
    })
);
const UserDropdown = ()=>{
    // ** States
    const { 0: anchorEl , 1: setAnchorEl  } = (0,node_modules_react.useState)(null);
    // ** Hooks
    const router = (0,next_router.useRouter)();
    const handleDropdownOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleDropdownClose = (url)=>{
        if (url) {
            router.push(url);
        }
        setAnchorEl(null);
    };
    const styles = {
        py: 2,
        px: 4,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        color: 'text.primary',
        textDecoration: 'none',
        '& svg': {
            fontSize: '1.375rem',
            color: 'text.secondary'
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(node_modules_react.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Badge_default()), {
                overlap: "circular",
                onClick: handleDropdownOpen,
                sx: {
                    ml: 3,
                    cursor: 'pointer',
                    mr: 3
                },
                badgeContent: /*#__PURE__*/ jsx_runtime.jsx(BadgeContentSpan, {
                }),
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                children: /*#__PURE__*/ jsx_runtime.jsx((Avatar_default()), {
                    alt: "Marcos Freitas",
                    onClick: handleDropdownOpen,
                    sx: {
                        width: 40,
                        height: 40,
                        border: "1px solid #CEA7FF"
                    },
                    src: "/images/avatars/user.png"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Menu_default()), {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: ()=>handleDropdownClose()
                ,
                sx: {
                    '& .MuiMenu-paper': {
                        width: 230,
                        marginTop: 4
                    }
                },
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
                        sx: {
                            pt: 2,
                            pb: 3,
                            px: 4
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                            sx: {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Badge_default()), {
                                    overlap: "circular",
                                    badgeContent: /*#__PURE__*/ jsx_runtime.jsx(BadgeContentSpan, {
                                    }),
                                    anchorOrigin: {
                                        vertical: 'bottom',
                                        horizontal: 'right'
                                    },
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Avatar_default()), {
                                        alt: "John Doe",
                                        src: "/images/avatars/user.png",
                                        sx: {
                                            width: '2.5rem',
                                            height: '2.5rem'
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        display: 'flex',
                                        marginLeft: 3,
                                        alignItems: 'flex-start',
                                        flexDirection: 'column'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            sx: {
                                                fontWeight: 600
                                            },
                                            children: "John Doe"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                fontSize: '0.8rem',
                                                color: 'text.disabled'
                                            },
                                            children: "Admin"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose('/account-settings')
                        ,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                            sx: styles,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(CogOutline["default"], {
                                    sx: {
                                        marginRight: 2
                                    }
                                }),
                                "Configura\xe7\xf5es"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose()
                        ,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                            sx: styles,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(CurrencyUsd["default"], {
                                    sx: {
                                        marginRight: 2
                                    }
                                }),
                                "Assinatura"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Divider_default()), {
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((MenuItem_default()), {
                        sx: {
                            py: 2
                        },
                        onClick: async ()=>{
                            (0,react.signOut)({
                                callbackUrl: "/pages/login",
                                redirect: true
                            });
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(LogoutVariant["default"], {
                                sx: {
                                    marginRight: 2,
                                    fontSize: '1.375rem',
                                    color: 'text.secondary'
                                }
                            }),
                            "Logout"
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const shared_components_UserDropdown = (UserDropdown);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(707772);
;// CONCATENATED MODULE: ./src/@core/layouts/components/icons/Bell.tsx

const Bell = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 29 28",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M23.8333 19.8333H23.6187C23.7568 19.4597 23.8295 19.065 23.8333 18.6666V12.8333C23.8294 10.7663 23.1402 8.75902 21.8735 7.12565C20.6068 5.49228 18.8343 4.32508 16.8333 3.80679V3.49996C16.8333 2.88112 16.5875 2.28763 16.1499 1.85004C15.7123 1.41246 15.1188 1.16663 14.5 1.16663C13.8812 1.16663 13.2877 1.41246 12.8501 1.85004C12.4125 2.28763 12.1667 2.88112 12.1667 3.49996V3.80679C10.1657 4.32508 8.39317 5.49228 7.1265 7.12565C5.85983 8.75902 5.17058 10.7663 5.16667 12.8333V18.6666C5.17053 19.065 5.24316 19.4597 5.38133 19.8333H5.16667C4.85725 19.8333 4.5605 19.9562 4.34171 20.175C4.12292 20.3938 4 20.6905 4 21C4 21.3094 4.12292 21.6061 4.34171 21.8249C4.5605 22.0437 4.85725 22.1666 5.16667 22.1666H23.8333C24.1428 22.1666 24.4395 22.0437 24.6583 21.8249C24.8771 21.6061 25 21.3094 25 21C25 20.6905 24.8771 20.3938 24.6583 20.175C24.4395 19.9562 24.1428 19.8333 23.8333 19.8333Z",
                fill: "#717579"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M10.4819 24.5C10.8863 25.2088 11.471 25.7981 12.1766 26.2079C12.8823 26.6178 13.6838 26.8337 14.4999 26.8337C15.316 26.8337 16.1175 26.6178 16.8232 26.2079C17.5288 25.7981 18.1135 25.2088 18.5179 24.5H10.4819Z",
                fill: "#717579"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/NotificationDropdown.tsx

// ** React Imports

// ** MUI Imports










// ** Third Party Components



// ** Styled Menu component
const NotificationDropdown_Menu = (0,styles.styled)((Menu_default()))(({ theme  })=>({
        '& .MuiMenu-paper': {
            width: 380,
            overflow: 'hidden',
            marginTop: theme.spacing(4),
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            }
        },
        '& .MuiMenu-list': {
            padding: 0
        }
    })
);
// ** Styled MenuItem component
const NotificationDropdown_MenuItem = (0,styles.styled)((MenuItem_default()))(({ theme  })=>({
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        borderBottom: `1px solid ${theme.palette.divider}`
    })
);
const NotificationDropdown_styles = {
    maxHeight: 349,
    '& .MuiMenuItem-root:last-of-type': {
        border: 0
    }
};
// ** Styled PerfectScrollbar component
const PerfectScrollbar = (0,styles.styled)((lib_default()))({
    ...NotificationDropdown_styles
});
// ** Styled Avatar component
const NotificationDropdown_Avatar = (0,styles.styled)((Avatar_default()))({
    width: '2.375rem',
    height: '2.375rem',
    fontSize: '1.125rem'
});
// ** Styled component for the title in MenuItems
const MenuItemTitle = (0,styles.styled)((Typography_default()))(({ theme  })=>({
        fontWeight: 600,
        flex: '1 1 100%',
        overflow: 'hidden',
        fontSize: '0.875rem',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        marginBottom: theme.spacing(0.75)
    })
);
// ** Styled component for the subtitle in MenuItems
const MenuItemSubtitle = (0,styles.styled)((Typography_default()))({
    flex: '1 1 100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
});
const NotificationDropdown = ()=>{
    // ** States
    const { 0: anchorEl , 1: setAnchorEl  } = (0,node_modules_react.useState)(null);
    // ** Hook
    const hidden = (0,useMediaQuery["default"])((theme)=>theme.breakpoints.down('lg')
    );
    const handleDropdownOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleDropdownClose = ()=>{
        setAnchorEl(null);
    };
    const ScrollWrapper = ({ children  })=>{
        if (hidden) {
            return(/*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
                sx: {
                    ...NotificationDropdown_styles,
                    overflowY: 'auto',
                    overflowX: 'hidden'
                },
                children: children
            }));
        } else {
            return(/*#__PURE__*/ jsx_runtime.jsx(PerfectScrollbar, {
                options: {
                    wheelPropagation: false,
                    suppressScrollX: true
                },
                children: children
            }));
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(node_modules_react.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(node.Badge, {
                color: "warning",
                badgeContent: 12,
                overlap: "circular",
                sx: {
                    ml: 3,
                    mr: 3
                },
                children: /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                    color: "inherit",
                    "aria-haspopup": "true",
                    onClick: handleDropdownOpen,
                    "aria-controls": "customized-menu",
                    children: /*#__PURE__*/ jsx_runtime.jsx(Bell, {
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(NotificationDropdown_Menu, {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: handleDropdownClose,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(NotificationDropdown_MenuItem, {
                        disableRipple: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                            sx: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    sx: {
                                        fontWeight: 600
                                    },
                                    children: "Notifications"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Chip_default()), {
                                    size: "small",
                                    label: "8 New",
                                    color: "primary",
                                    sx: {
                                        height: 20,
                                        fontSize: '0.75rem',
                                        fontWeight: 500,
                                        borderRadius: '10px'
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ScrollWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(NotificationDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(NotificationDropdown_Avatar, {
                                            alt: "Flora",
                                            src: "/images/avatars/4.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(MenuItemTitle, {
                                                    children: "Congratulation Flora! 🎉"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "Won the monthly best seller badge"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "Today"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(NotificationDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(NotificationDropdown_Avatar, {
                                            sx: {
                                                color: 'common.white',
                                                backgroundColor: 'primary.main'
                                            },
                                            children: "VU"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(MenuItemTitle, {
                                                    children: "New user registered."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "5 hours ago"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "Yesterday"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(NotificationDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(NotificationDropdown_Avatar, {
                                            alt: "message",
                                            src: "/images/avatars/5.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(MenuItemTitle, {
                                                    children: "New message received 👋🏻"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "You have 10 unread messages"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "11 Aug"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(NotificationDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            width: 38,
                                            height: 38,
                                            alt: "paypal",
                                            src: "/images/misc/paypal.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(MenuItemTitle, {
                                                    children: "Paypal"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "Received Payment"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "25 May"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(NotificationDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(NotificationDropdown_Avatar, {
                                            alt: "order",
                                            src: "/images/avatars/3.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(MenuItemTitle, {
                                                    children: "Revised Order 📦"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "New order revised from john"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "19 Mar"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(NotificationDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            width: 38,
                                            height: 38,
                                            alt: "chart",
                                            src: "/images/misc/chart.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(MenuItemTitle, {
                                                    children: "Finance report has been generated"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "25 hrs ago"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "27 Dec"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(NotificationDropdown_MenuItem, {
                        disableRipple: true,
                        sx: {
                            py: 3.5,
                            borderBottom: 0,
                            borderTop: (theme)=>`1px solid ${theme.palette.divider}`
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                            fullWidth: true,
                            variant: "contained",
                            onClick: handleDropdownClose,
                            children: "Read All Notifications"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const shared_components_NotificationDropdown = (NotificationDropdown);

;// CONCATENATED MODULE: ./src/@core/layouts/components/icons/Mail.tsx

const Mail = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 29 28",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M27.576 6.24662C27.462 5.48439 27.0787 4.78822 26.4955 4.28434C25.9123 3.78045 25.1679 3.50219 24.3971 3.5H4.60289C3.83217 3.50219 3.08775 3.78045 2.50456 4.28434C1.92137 4.78822 1.53803 5.48439 1.42401 6.24662L14.5 14.7079L27.576 6.24662Z",
                fill: "#717579"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M15.0241 16.485C14.8826 16.5765 14.7176 16.6252 14.549 16.6252C14.3804 16.6252 14.2154 16.5765 14.0739 16.485L1.42401 8.30025V21.2721C1.42494 22.1279 1.76531 22.9484 2.37046 23.5536C2.9756 24.1587 3.79608 24.4991 4.65189 24.5H24.4461C25.3019 24.4991 26.1224 24.1587 26.7276 23.5536C27.3327 22.9484 27.6731 22.1279 27.674 21.2721V8.29938L15.0241 16.485Z",
                fill: "#717579"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/MailDropdown.tsx

// ** React Imports

// ** MUI Imports










// ** Third Party Components



// ** Styled Menu component
const MailDropdown_Menu = (0,styles.styled)((Menu_default()))(({ theme  })=>({
        '& .MuiMenu-paper': {
            width: 380,
            overflow: 'hidden',
            marginTop: theme.spacing(4),
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            }
        },
        '& .MuiMenu-list': {
            padding: 0
        }
    })
);
// ** Styled MenuItem component
const MailDropdown_MenuItem = (0,styles.styled)((MenuItem_default()))(({ theme  })=>({
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        borderBottom: `1px solid ${theme.palette.divider}`
    })
);
const MailDropdown_styles = {
    maxHeight: 349,
    '& .MuiMenuItem-root:last-of-type': {
        border: 0
    }
};
// ** Styled PerfectScrollbar component
const MailDropdown_PerfectScrollbar = (0,styles.styled)((lib_default()))({
    ...MailDropdown_styles
});
// ** Styled Avatar component
const MailDropdown_Avatar = (0,styles.styled)((Avatar_default()))({
    width: '2.375rem',
    height: '2.375rem',
    fontSize: '1.125rem'
});
// ** Styled component for the title in MenuItems
const MailDropdown_MenuItemTitle = (0,styles.styled)((Typography_default()))(({ theme  })=>({
        fontWeight: 600,
        flex: '1 1 100%',
        overflow: 'hidden',
        fontSize: '0.875rem',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        marginBottom: theme.spacing(0.75)
    })
);
// ** Styled component for the subtitle in MenuItems
const MailDropdown_MenuItemSubtitle = (0,styles.styled)((Typography_default()))({
    flex: '1 1 100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
});
const MailDropdown = ()=>{
    // ** States
    const { 0: anchorEl , 1: setAnchorEl  } = (0,node_modules_react.useState)(null);
    // ** Hook
    const hidden = (0,useMediaQuery["default"])((theme)=>theme.breakpoints.down('lg')
    );
    const handleDropdownOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleDropdownClose = ()=>{
        setAnchorEl(null);
    };
    const ScrollWrapper = ({ children  })=>{
        if (hidden) {
            return(/*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
                sx: {
                    ...MailDropdown_styles,
                    overflowY: 'auto',
                    overflowX: 'hidden'
                },
                children: children
            }));
        } else {
            return(/*#__PURE__*/ jsx_runtime.jsx(MailDropdown_PerfectScrollbar, {
                options: {
                    wheelPropagation: false,
                    suppressScrollX: true
                },
                children: children
            }));
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(node_modules_react.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(node.Badge, {
                color: "error",
                badgeContent: 1,
                overlap: "circular",
                sx: {
                    ml: 3,
                    mr: 3
                },
                children: /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                    color: "inherit",
                    "aria-haspopup": "true",
                    onClick: handleDropdownOpen,
                    "aria-controls": "customized-menu",
                    children: /*#__PURE__*/ jsx_runtime.jsx(Mail, {
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(MailDropdown_Menu, {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: handleDropdownClose,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItem, {
                        disableRipple: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                            sx: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    sx: {
                                        fontWeight: 600
                                    },
                                    children: "Notifications"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Chip_default()), {
                                    size: "small",
                                    label: "8 New",
                                    color: "primary",
                                    sx: {
                                        height: 20,
                                        fontSize: '0.75rem',
                                        fontWeight: 500,
                                        borderRadius: '10px'
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ScrollWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_Avatar, {
                                            alt: "Flora",
                                            src: "/images/avatars/4.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItemTitle, {
                                                    children: "Congratulation Flora! 🎉"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "Won the monthly best seller badge"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "Today"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_Avatar, {
                                            sx: {
                                                color: 'common.white',
                                                backgroundColor: 'primary.main'
                                            },
                                            children: "VU"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItemTitle, {
                                                    children: "New user registered."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "5 hours ago"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "Yesterday"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_Avatar, {
                                            alt: "message",
                                            src: "/images/avatars/5.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItemTitle, {
                                                    children: "New message received 👋🏻"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "You have 10 unread messages"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "11 Aug"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            width: 38,
                                            height: 38,
                                            alt: "paypal",
                                            src: "/images/misc/paypal.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItemTitle, {
                                                    children: "Paypal"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "Received Payment"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "25 May"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_Avatar, {
                                            alt: "order",
                                            src: "/images/avatars/3.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItemTitle, {
                                                    children: "Revised Order 📦"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "New order revised from john"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "19 Mar"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            width: 38,
                                            height: 38,
                                            alt: "chart",
                                            src: "/images/misc/chart.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItemTitle, {
                                                    children: "Finance report has been generated"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "25 hrs ago"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "27 Dec"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(MailDropdown_MenuItem, {
                        disableRipple: true,
                        sx: {
                            py: 3.5,
                            borderBottom: 0,
                            borderTop: (theme)=>`1px solid ${theme.palette.divider}`
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                            fullWidth: true,
                            variant: "contained",
                            onClick: handleDropdownClose,
                            children: "Read All Notifications"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const shared_components_MailDropdown = (MailDropdown);

;// CONCATENATED MODULE: ./src/@core/layouts/components/icons/Calendar.tsx

const Calendar = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 29 28",
        fill: "none",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M22.6666 5.83331H21.4999V3.49998C21.4999 3.19056 21.377 2.89381 21.1582 2.67502C20.9394 2.45623 20.6427 2.33331 20.3333 2.33331C20.0238 2.33331 19.7271 2.45623 19.5083 2.67502C19.2895 2.89381 19.1666 3.19056 19.1666 3.49998V5.83331H9.83325V3.49998C9.83325 3.19056 9.71034 2.89381 9.49154 2.67502C9.27275 2.45623 8.97601 2.33331 8.66659 2.33331C8.35717 2.33331 8.06042 2.45623 7.84163 2.67502C7.62284 2.89381 7.49992 3.19056 7.49992 3.49998V5.83331H6.33325C5.40499 5.83331 4.51476 6.20206 3.85838 6.85844C3.202 7.51482 2.83325 8.40506 2.83325 9.33331V10.5H26.1666V9.33331C26.1666 8.40506 25.7978 7.51482 25.1415 6.85844C24.4851 6.20206 23.5948 5.83331 22.6666 5.83331Z",
                fill: "#717579"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M2.83325 22.1666C2.83325 23.0949 3.202 23.9851 3.85838 24.6415C4.51476 25.2979 5.40499 25.6666 6.33325 25.6666H22.6666C23.5948 25.6666 24.4851 25.2979 25.1415 24.6415C25.7978 23.9851 26.1666 23.0949 26.1666 22.1666V12.8333H2.83325V22.1666Z",
                fill: "#717579"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/CalendarDropdown.tsx

// ** React Imports

// ** MUI Imports










// ** Third Party Components



// ** Styled Menu component
const CalendarDropdown_Menu = (0,styles.styled)((Menu_default()))(({ theme  })=>({
        '& .MuiMenu-paper': {
            width: 380,
            overflow: 'hidden',
            marginTop: theme.spacing(4),
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            }
        },
        '& .MuiMenu-list': {
            padding: 0
        }
    })
);
// ** Styled MenuItem component
const CalendarDropdown_MenuItem = (0,styles.styled)((MenuItem_default()))(({ theme  })=>({
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        borderBottom: `1px solid ${theme.palette.divider}`
    })
);
const CalendarDropdown_styles = {
    maxHeight: 349,
    '& .MuiMenuItem-root:last-of-type': {
        border: 0
    }
};
// ** Styled PerfectScrollbar component
const CalendarDropdown_PerfectScrollbar = (0,styles.styled)((lib_default()))({
    ...CalendarDropdown_styles
});
// ** Styled Avatar component
const CalendarDropdown_Avatar = (0,styles.styled)((Avatar_default()))({
    width: '2.375rem',
    height: '2.375rem',
    fontSize: '1.125rem'
});
// ** Styled component for the title in MenuItems
const CalendarDropdown_MenuItemTitle = (0,styles.styled)((Typography_default()))(({ theme  })=>({
        fontWeight: 600,
        flex: '1 1 100%',
        overflow: 'hidden',
        fontSize: '0.875rem',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        marginBottom: theme.spacing(0.75)
    })
);
// ** Styled component for the subtitle in MenuItems
const CalendarDropdown_MenuItemSubtitle = (0,styles.styled)((Typography_default()))({
    flex: '1 1 100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
});
const CalendarDropdown = ()=>{
    // ** States
    const { 0: anchorEl , 1: setAnchorEl  } = (0,node_modules_react.useState)(null);
    // ** Hook
    const hidden = (0,useMediaQuery["default"])((theme)=>theme.breakpoints.down('lg')
    );
    const handleDropdownOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleDropdownClose = ()=>{
        setAnchorEl(null);
    };
    const ScrollWrapper = ({ children  })=>{
        if (hidden) {
            return(/*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
                sx: {
                    ...CalendarDropdown_styles,
                    overflowY: 'auto',
                    overflowX: 'hidden'
                },
                children: children
            }));
        } else {
            return(/*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_PerfectScrollbar, {
                options: {
                    wheelPropagation: false,
                    suppressScrollX: true
                },
                children: children
            }));
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(node_modules_react.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(node.Badge, {
                color: "success",
                badgeContent: 76,
                overlap: "circular",
                sx: {
                    ml: 3,
                    mr: 3
                },
                children: /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                    color: "inherit",
                    "aria-haspopup": "true",
                    onClick: handleDropdownOpen,
                    "aria-controls": "customized-menu",
                    children: /*#__PURE__*/ jsx_runtime.jsx(Calendar, {
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CalendarDropdown_Menu, {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: handleDropdownClose,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItem, {
                        disableRipple: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                            sx: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    sx: {
                                        fontWeight: 600
                                    },
                                    children: "Notifications"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Chip_default()), {
                                    size: "small",
                                    label: "8 New",
                                    color: "primary",
                                    sx: {
                                        height: 20,
                                        fontSize: '0.75rem',
                                        fontWeight: 500,
                                        borderRadius: '10px'
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ScrollWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_Avatar, {
                                            alt: "Flora",
                                            src: "/images/avatars/4.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItemTitle, {
                                                    children: "Congratulation Flora! 🎉"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "Won the monthly best seller badge"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "Today"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_Avatar, {
                                            sx: {
                                                color: 'common.white',
                                                backgroundColor: 'primary.main'
                                            },
                                            children: "VU"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItemTitle, {
                                                    children: "New user registered."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "5 hours ago"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "Yesterday"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_Avatar, {
                                            alt: "message",
                                            src: "/images/avatars/5.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItemTitle, {
                                                    children: "New message received 👋🏻"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "You have 10 unread messages"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "11 Aug"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            width: 38,
                                            height: 38,
                                            alt: "paypal",
                                            src: "/images/misc/paypal.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItemTitle, {
                                                    children: "Paypal"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "Received Payment"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "25 May"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_Avatar, {
                                            alt: "order",
                                            src: "/images/avatars/3.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItemTitle, {
                                                    children: "Revised Order 📦"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "New order revised from john"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "19 Mar"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            width: 38,
                                            height: 38,
                                            alt: "chart",
                                            src: "/images/misc/chart.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItemTitle, {
                                                    children: "Finance report has been generated"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "25 hrs ago"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "27 Dec"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(CalendarDropdown_MenuItem, {
                        disableRipple: true,
                        sx: {
                            py: 3.5,
                            borderBottom: 0,
                            borderTop: (theme)=>`1px solid ${theme.palette.divider}`
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                            fullWidth: true,
                            variant: "contained",
                            onClick: handleDropdownClose,
                            children: "Read All Notifications"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const shared_components_CalendarDropdown = (CalendarDropdown);

;// CONCATENATED MODULE: ./src/@core/layouts/components/icons/Favorite.tsx

const Favorite = ()=>{
    return(/*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 29 28",
        fill: "none",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M27.2727 10.8757C27.2043 10.6719 27.081 10.4909 26.9163 10.3528C26.7516 10.2146 26.5519 10.1247 26.3393 10.0929L18.8937 8.95535L15.5523 1.83869C15.4581 1.63826 15.3088 1.46879 15.1218 1.35008C14.9349 1.23137 14.718 1.16833 14.4965 1.16833C14.275 1.16833 14.0581 1.23137 13.8712 1.35008C13.6842 1.46879 13.5349 1.63826 13.4407 1.83869L10.0994 8.95535L2.6537 10.0929C2.44163 10.1252 2.24257 10.2154 2.07842 10.3535C1.91426 10.4916 1.79136 10.6723 1.72324 10.8757C1.65511 11.0791 1.64439 11.2974 1.69225 11.5065C1.74011 11.7156 1.84471 11.9075 1.99454 12.061L7.4207 17.6167L6.13737 25.4777C6.10235 25.6934 6.12863 25.9147 6.21323 26.1162C6.29782 26.3177 6.43732 26.4914 6.61583 26.6175C6.79435 26.7436 7.00469 26.817 7.2229 26.8294C7.44111 26.8418 7.65841 26.7926 7.85004 26.6875L14.5 23.0149L21.15 26.6875C21.3416 26.7935 21.5592 26.8434 21.7779 26.8316C21.9965 26.8197 22.2075 26.7466 22.3865 26.6205C22.5655 26.4944 22.7055 26.3204 22.7903 26.1186C22.8751 25.9167 22.9014 25.695 22.8662 25.4789L21.5828 17.6179L27.0055 12.061C27.1546 11.9071 27.2585 11.715 27.3056 11.5059C27.3527 11.2968 27.3413 11.0787 27.2727 10.8757Z",
            fill: "#717579"
        })
    }));
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/FavoriteDropdown.tsx

// ** React Imports

// ** MUI Imports










// ** Third Party Components



// ** Styled Menu component
const FavoriteDropdown_Menu = (0,styles.styled)((Menu_default()))(({ theme  })=>({
        '& .MuiMenu-paper': {
            width: 380,
            overflow: 'hidden',
            marginTop: theme.spacing(4),
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            }
        },
        '& .MuiMenu-list': {
            padding: 0
        }
    })
);
// ** Styled MenuItem component
const FavoriteDropdown_MenuItem = (0,styles.styled)((MenuItem_default()))(({ theme  })=>({
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        borderBottom: `1px solid ${theme.palette.divider}`
    })
);
const FavoriteDropdown_styles = {
    maxHeight: 349,
    '& .MuiMenuItem-root:last-of-type': {
        border: 0
    }
};
// ** Styled PerfectScrollbar component
const FavoriteDropdown_PerfectScrollbar = (0,styles.styled)((lib_default()))({
    ...FavoriteDropdown_styles
});
// ** Styled Avatar component
const FavoriteDropdown_Avatar = (0,styles.styled)((Avatar_default()))({
    width: '2.375rem',
    height: '2.375rem',
    fontSize: '1.125rem'
});
// ** Styled component for the title in MenuItems
const FavoriteDropdown_MenuItemTitle = (0,styles.styled)((Typography_default()))(({ theme  })=>({
        fontWeight: 600,
        flex: '1 1 100%',
        overflow: 'hidden',
        fontSize: '0.875rem',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        marginBottom: theme.spacing(0.75)
    })
);
// ** Styled component for the subtitle in MenuItems
const FavoriteDropdown_MenuItemSubtitle = (0,styles.styled)((Typography_default()))({
    flex: '1 1 100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
});
const FavoriteDropdown = ()=>{
    // ** States
    const { 0: anchorEl , 1: setAnchorEl  } = (0,node_modules_react.useState)(null);
    // ** Hook
    const hidden = (0,useMediaQuery["default"])((theme)=>theme.breakpoints.down('lg')
    );
    const handleDropdownOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleDropdownClose = ()=>{
        setAnchorEl(null);
    };
    const ScrollWrapper = ({ children  })=>{
        if (hidden) {
            return(/*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
                sx: {
                    ...FavoriteDropdown_styles,
                    overflowY: 'auto',
                    overflowX: 'hidden'
                },
                children: children
            }));
        } else {
            return(/*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_PerfectScrollbar, {
                options: {
                    wheelPropagation: false,
                    suppressScrollX: true
                },
                children: children
            }));
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(node_modules_react.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(node.Badge, {
                color: "info",
                badgeContent: 71,
                overlap: "circular",
                sx: {
                    ml: 2,
                    mr: 1
                },
                children: /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                    color: "inherit",
                    "aria-haspopup": "true",
                    onClick: handleDropdownOpen,
                    "aria-controls": "customized-menu",
                    children: /*#__PURE__*/ jsx_runtime.jsx(Favorite, {
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FavoriteDropdown_Menu, {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: handleDropdownClose,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItem, {
                        disableRipple: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                            sx: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    sx: {
                                        fontWeight: 600
                                    },
                                    children: "Notifications"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Chip_default()), {
                                    size: "small",
                                    label: "8 New",
                                    color: "primary",
                                    sx: {
                                        height: 20,
                                        fontSize: '0.75rem',
                                        fontWeight: 500,
                                        borderRadius: '10px'
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ScrollWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_Avatar, {
                                            alt: "Flora",
                                            src: "/images/avatars/4.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItemTitle, {
                                                    children: "Congratulation Flora! 🎉"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "Won the monthly best seller badge"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "Today"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_Avatar, {
                                            sx: {
                                                color: 'common.white',
                                                backgroundColor: 'primary.main'
                                            },
                                            children: "VU"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItemTitle, {
                                                    children: "New user registered."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "5 hours ago"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "Yesterday"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_Avatar, {
                                            alt: "message",
                                            src: "/images/avatars/5.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItemTitle, {
                                                    children: "New message received 👋🏻"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "You have 10 unread messages"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "11 Aug"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            width: 38,
                                            height: 38,
                                            alt: "paypal",
                                            src: "/images/misc/paypal.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItemTitle, {
                                                    children: "Paypal"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "Received Payment"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "25 May"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_Avatar, {
                                            alt: "order",
                                            src: "/images/avatars/3.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItemTitle, {
                                                    children: "Revised Order 📦"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "New order revised from john"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "19 Mar"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                    sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            width: 38,
                                            height: 38,
                                            alt: "chart",
                                            src: "/images/misc/chart.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                                            sx: {
                                                mx: 4,
                                                flex: '1 1',
                                                display: 'flex',
                                                overflow: 'hidden',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItemTitle, {
                                                    children: "Finance report has been generated"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "25 hrs ago"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                            variant: "caption",
                                            sx: {
                                                color: 'text.disabled'
                                            },
                                            children: "27 Dec"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(FavoriteDropdown_MenuItem, {
                        disableRipple: true,
                        sx: {
                            py: 3.5,
                            borderBottom: 0,
                            borderTop: (theme)=>`1px solid ${theme.palette.divider}`
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                            fullWidth: true,
                            variant: "contained",
                            onClick: handleDropdownClose,
                            children: "Read All Notifications"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const shared_components_FavoriteDropdown = (FavoriteDropdown);

;// CONCATENATED MODULE: ./src/layouts/components/vertical/AppBarContent.tsx

// ** MUI Imports






// ** Icons Imports


// ** Components







const AppBarContent_TypographyHeaderText = (0,styles.styled)(node.Typography)(({})=>({
        fontSize: '1.8rem',
        lineHeight: 'normal',
        letterSpacing: '0.10px',
        color: "#000000",
        fontWeight: "bolder"
    })
);
const AppBarContent = (props)=>{
    // ** Props
    const { settings , saveSettings , toggleNavVisibility  } = props;
    // ** Hook
    const hiddenSm = (0,useMediaQuery["default"])((theme)=>theme.breakpoints.down('sm')
    );
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
        sx: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                className: "actions-left",
                sx: {
                    mr: 2,
                    display: 'flex',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                        color: "inherit",
                        onClick: toggleNavVisibility,
                        sx: {
                            ml: -2.75,
                            ...hiddenSm ? {
                            } : {
                                mr: 3.5
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx(Menu["default"], {
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(AppBarContent_TypographyHeaderText, {
                        children: " Dashboard "
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                className: "actions-right",
                sx: {
                    display: 'flex',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((TextField_default()), {
                        size: "small",
                        sx: {
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 4,
                                backgroundColor: "#FFFFFF"
                            },
                            mr: 5
                        },
                        placeholder: "Search here...",
                        InputProps: {
                            endAdornment: /*#__PURE__*/ jsx_runtime.jsx((InputAdornment_default()), {
                                position: "start",
                                children: /*#__PURE__*/ jsx_runtime.jsx(Magnify["default"], {
                                    fontSize: "small"
                                })
                            })
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(shared_components_ModeToggler, {
                        settings: settings,
                        saveSettings: saveSettings
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(shared_components_FavoriteDropdown, {
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(shared_components_NotificationDropdown, {
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(shared_components_MailDropdown, {
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(shared_components_CalendarDropdown, {
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(shared_components_UserDropdown, {
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const vertical_AppBarContent = (AppBarContent);

;// CONCATENATED MODULE: ./src/@core/context/settingsContext.tsx

// ** React Imports

// ** ThemeConfig Import

const initialSettings = {
    themeColor: 'primary',
    mode: themeConfig/* default.mode */.Z.mode,
    contentWidth: themeConfig/* default.contentWidth */.Z.contentWidth
};
// ** Create Context
const SettingsContext = /*#__PURE__*/ (0,node_modules_react.createContext)({
    saveSettings: ()=>null
    ,
    settings: initialSettings
});
const SettingsProvider = ({ children  })=>{
    // ** State
    const { 0: settings , 1: setSettings  } = (0,node_modules_react.useState)({
        ...initialSettings
    });
    const saveSettings = (updatedSettings)=>{
        setSettings(updatedSettings);
    };
    return(/*#__PURE__*/ jsx_runtime.jsx(SettingsContext.Provider, {
        value: {
            settings,
            saveSettings
        },
        children: children
    }));
};
const SettingsConsumer = SettingsContext.Consumer;

;// CONCATENATED MODULE: ./src/@core/hooks/useSettings.ts


const useSettings = ()=>(0,node_modules_react.useContext)(SettingsContext)
;

;// CONCATENATED MODULE: ./src/layouts/UserLayout.tsx


// ** Layout Imports
// !Do not remove this Layout import

// ** Navigation Imports

// ** Component Import


// ** Hook Import

const UserLayout = ({ children  })=>{
    // ** Hooks
    const { settings , saveSettings  } = useSettings();
    /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/components/use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */ const hidden = (0,useMediaQuery["default"])((theme)=>theme.breakpoints.down('lg')
    );
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(layouts_VerticalLayout, {
        hidden: hidden,
        settings: settings,
        saveSettings: saveSettings,
        verticalNavItems: vertical(),
        verticalAppBarContent: (props // AppBar Content
        )=>/*#__PURE__*/ jsx_runtime.jsx(vertical_AppBarContent, {
                hidden: hidden,
                settings: settings,
                saveSettings: saveSettings,
                toggleNavVisibility: props.toggleNavVisibility
            })
        ,
        children: [
            children,
            /*#__PURE__*/ jsx_runtime.jsx(UpgradeToProButton, {
            })
        ]
    }));
};
/* harmony default export */ const layouts_UserLayout = (UserLayout);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/CssBaseline/index.js
var CssBaseline = __webpack_require__(80847);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/GlobalStyles/index.js
var GlobalStyles = __webpack_require__(204371);
;// CONCATENATED MODULE: ./src/@core/theme/overrides/card.ts
const Card = (theme)=>{
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[6],
                    '& .card-more-options': {
                        marginTop: theme.spacing(-1),
                        marginRight: theme.spacing(-3)
                    }
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '& + .MuiCardContent-root, & + .MuiCollapse-root .MuiCardContent-root': {
                        paddingTop: 0
                    },
                    '& .MuiCardHeader-subheader': {
                        fontSize: '0.875rem'
                    }
                },
                title: {
                    lineHeight: 1,
                    fontWeight: 500,
                    fontSize: '1.25rem',
                    letterSpacing: '0.0125em'
                },
                action: {
                    marginTop: 0,
                    marginRight: 0
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '& + .MuiCardContent-root': {
                        paddingTop: 0
                    },
                    '&:last-of-type': {
                        paddingBottom: theme.spacing(5)
                    },
                    '& + .MuiCardActions-root': {
                        paddingTop: 0
                    }
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '&.card-action-dense': {
                        padding: theme.spacing(0, 2.5, 2.5),
                        '.MuiCard-root .MuiCardMedia-root + &': {
                            paddingTop: theme.spacing(2.5)
                        },
                        '.MuiCard-root &:first-of-type': {
                            paddingTop: theme.spacing(5),
                            paddingBottom: theme.spacing(5),
                            '& + .MuiCardContent-root': {
                                paddingTop: 0
                            },
                            '& + .MuiCardHeader-root': {
                                paddingTop: 0
                            }
                        }
                    },
                    '& .MuiButton-text': {
                        paddingLeft: theme.spacing(2.5),
                        paddingRight: theme.spacing(2.5)
                    }
                }
            }
        }
    };
};
/* harmony default export */ const card = (Card);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/chip.ts
const chip_Chip = (theme)=>{
    return {
        MuiChip: {
            styleOverrides: {
                outlined: {
                    '&.MuiChip-colorDefault': {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    }
                },
                deleteIcon: {
                    width: 18,
                    height: 18
                }
            }
        }
    };
};
/* harmony default export */ const overrides_chip = (chip_Chip);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/link.ts
/* harmony default export */ const overrides_link = ({
    MuiLink: {
        styleOverrides: {
            root: {
                textDecoration: 'none'
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/list.ts
const list_List = (theme)=>{
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: 0,
                    marginRight: theme.spacing(2.25),
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: 0,
                    marginRight: theme.spacing(4)
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                dense: {
                    '& .MuiListItemText-primary': {
                        color: theme.palette.text.primary
                    }
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: theme.palette.text.primary
                }
            }
        }
    };
};
/* harmony default export */ const overrides_list = (list_List);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/menu.ts
const menu_Menu = (theme)=>{
    return {
        MuiMenu: {
            styleOverrides: {
                root: {
                    '& .MuiMenu-paper': {
                        borderRadius: 5,
                        boxShadow: theme.palette.mode === 'light' ? theme.shadows[8] : theme.shadows[9]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_menu = (menu_Menu);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/tabs.ts
const Tabs = (theme)=>{
    return {
        MuiTabs: {
            styleOverrides: {
                vertical: {
                    minWidth: 130,
                    marginRight: theme.spacing(4),
                    borderRight: `1px solid ${theme.palette.divider}`,
                    '& .MuiTab-root': {
                        minWidth: 130
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                textColorSecondary: {
                    '&.Mui-selected': {
                        color: theme.palette.text.secondary
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_tabs = (Tabs);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/input.ts
const input = (theme)=>{
    return {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '&:before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    '&.Mui-disabled:before': {
                        borderBottom: `1px solid ${theme.palette.text.disabled}`
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`,
                    '&:hover:not(.Mui-disabled)': {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`
                    },
                    '&:before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    '&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.error.main
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.text.disabled
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_input = (input);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/paper.ts
/* harmony default export */ const paper = ({
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundImage: 'none'
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/table.ts
const Table = (theme)=>{
    return {
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[0],
                    borderTopColor: theme.palette.divider
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    textTransform: 'uppercase',
                    '& .MuiTableCell-head': {
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.13px'
                    }
                }
            }
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-body': {
                        letterSpacing: '0.25px',
                        color: theme.palette.text.secondary,
                        '&:not(.MuiTableCell-sizeSmall):not(.MuiTableCell-paddingCheckbox):not(.MuiTableCell-paddingNone)': {
                            paddingTop: theme.spacing(3.5),
                            paddingBottom: theme.spacing(3.5)
                        }
                    }
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-head:first-child, & .MuiTableCell-root:first-child ': {
                        paddingLeft: theme.spacing(5)
                    },
                    '& .MuiTableCell-head:last-child, & .MuiTableCell-root:last-child': {
                        paddingRight: theme.spacing(5)
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    '& .MuiButton-root': {
                        textTransform: 'uppercase',
                        color: theme.palette.text.secondary
                    }
                },
                stickyHeader: {
                    backgroundColor: theme.palette.customColors.tableHeaderBg
                }
            }
        }
    };
};
/* harmony default export */ const table = (Table);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/alerts.ts

// ** Util Import

const Alert = (theme)=>{
    const getColor = theme.palette.mode === 'light' ? styles.darken : styles.lighten;
    return {
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: 5,
                    '& .MuiAlertTitle-root': {
                        marginBottom: theme.spacing(1.6)
                    },
                    '& a': {
                        color: 'inherit',
                        fontWeight: 500
                    }
                },
                standardSuccess: {
                    color: getColor(theme.palette.success.main, 0.12),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.success.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.success.main, 0.12)
                    }
                },
                standardInfo: {
                    color: getColor(theme.palette.info.main, 0.12),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.info.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.info.main, 0.12)
                    }
                },
                standardWarning: {
                    color: getColor(theme.palette.warning.main, 0.12),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.warning.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.warning.main, 0.12)
                    }
                },
                standardError: {
                    color: getColor(theme.palette.error.main, 0.12),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.error.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.error.main, 0.12)
                    }
                },
                outlinedSuccess: {
                    borderColor: theme.palette.success.main,
                    color: getColor(theme.palette.success.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.success.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.success.main, 0.12)
                    }
                },
                outlinedInfo: {
                    borderColor: theme.palette.info.main,
                    color: getColor(theme.palette.info.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.info.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.info.main, 0.12)
                    }
                },
                outlinedWarning: {
                    borderColor: theme.palette.warning.main,
                    color: getColor(theme.palette.warning.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.warning.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.warning.main, 0.12)
                    }
                },
                outlinedError: {
                    borderColor: theme.palette.error.main,
                    color: getColor(theme.palette.error.main, 0.12),
                    '& .MuiAlertTitle-root': {
                        color: getColor(theme.palette.error.main, 0.12)
                    },
                    '& .MuiAlert-icon': {
                        color: getColor(theme.palette.error.main, 0.12)
                    }
                },
                filled: {
                    fontWeight: 400
                }
            }
        }
    };
};
/* harmony default export */ const overrides_alerts = (Alert);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/button.ts
// ** Theme Config Imports

const button_Button = (theme)=>{
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: 5,
                    lineHeight: 1.71,
                    letterSpacing: '0.3px',
                    padding: `${theme.spacing(1.875, 3)}`
                },
                contained: {
                    boxShadow: theme.shadows[3],
                    padding: `${theme.spacing(1.875, 5.5)}`
                },
                outlined: {
                    padding: `${theme.spacing(1.625, 5.25)}`
                },
                sizeSmall: {
                    padding: `${theme.spacing(1, 2.25)}`,
                    '&.MuiButton-contained': {
                        padding: `${theme.spacing(1, 3.5)}`
                    },
                    '&.MuiButton-outlined': {
                        padding: `${theme.spacing(0.75, 3.25)}`
                    }
                },
                sizeLarge: {
                    padding: `${theme.spacing(2.125, 5.5)}`,
                    '&.MuiButton-contained': {
                        padding: `${theme.spacing(2.125, 6.5)}`
                    },
                    '&.MuiButton-outlined': {
                        padding: `${theme.spacing(1.875, 6.25)}`
                    }
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: themeConfig/* default.disableRipple */.Z.disableRipple
            }
        }
    };
};
/* harmony default export */ const overrides_button = (button_Button);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/dialog.ts
// ** Util Import

const Dialog = (theme)=>{
    return {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.shadows[6],
                    '&:not(.MuiDialog-paperFullScreen)': {
                        '@media (max-width:599px)': {
                            margin: theme.spacing(4),
                            width: `calc(100% - ${theme.spacing(8)})`,
                            maxWidth: `calc(100% - ${theme.spacing(8)}) !important`
                        }
                    },
                    '& > .MuiList-root': {
                        paddingLeft: theme.spacing(1),
                        paddingRight: theme.spacing(1)
                    }
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5)
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '& + .MuiDialogContent-root': {
                        paddingTop: 0
                    },
                    '& + .MuiDialogActions-root': {
                        paddingTop: 0
                    },
                    // Styling for Mobile Date Picker starts
                    '& .PrivatePickersToolbar-root': {
                        padding: theme.spacing(4, 5),
                        color: theme.palette.primary.contrastText,
                        backgroundColor: theme.palette.primary.main,
                        '& .MuiTypography-root': {
                            color: theme.palette.primary.contrastText
                        },
                        '& span.MuiTypography-overline': {
                            fontSize: '1rem',
                            lineHeight: '24px',
                            letterSpacing: '0.15px'
                        },
                        '& ~ div[class^="css-"] > div[class^="css-"]': {
                            marginTop: theme.spacing(6),
                            marginBottom: theme.spacing(6),
                            '& > div[class^="css-"]': {
                                backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.background.default,
                                '& ~ .MuiIconButton-root span.MuiTypography-caption': {
                                    color: 'inherit'
                                }
                            }
                        },
                        '& .PrivateTimePickerToolbar-hourMinuteLabel': {
                            alignItems: 'center',
                            '& > .MuiButton-root span.MuiTypography-root': {
                                fontWeight: 300,
                                lineHeight: '72px',
                                fontSize: '3.75rem',
                                letterSpacing: '-0.5px'
                            },
                            '& > .MuiTypography-root': {
                                color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.contrastText, 0.54),
                                '& + .MuiButton-root > span.MuiTypography-root': {
                                    color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.contrastText, 0.54)
                                }
                            }
                        },
                        '& .PrivateTimePickerToolbar-ampmSelection span.MuiTypography-root:not(.Mui-selected)': {
                            color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.contrastText, 0.54)
                        }
                    }
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '&.dialog-actions-dense': {
                        padding: theme.spacing(2.5),
                        paddingTop: 0
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_dialog = (Dialog);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/rating.ts
const Rating = (theme)=>{
    return {
        MuiRating: {
            styleOverrides: {
                root: {
                    color: theme.palette.warning.main
                }
            }
        }
    };
};
/* harmony default export */ const overrides_rating = (Rating);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/select.ts
/* harmony default export */ const overrides_select = ({
    MuiSelect: {
        styleOverrides: {
            select: {
                minWidth: '6rem !important',
                '&.MuiTablePagination-select': {
                    minWidth: '1rem !important'
                }
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/avatars.ts
const avatars_Avatar = (theme)=>{
    return {
        MuiAvatar: {
            styleOverrides: {
                colorDefault: {
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700]
                },
                rounded: {
                    borderRadius: 5
                }
            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    justifyContent: 'flex-end',
                    '.MuiCard-root & .MuiAvatar-root': {
                        borderColor: theme.palette.background.paper
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_avatars = (avatars_Avatar);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/divider.ts
const divider_Divider = (theme)=>{
    return {
        MuiDivider: {
            styleOverrides: {
                root: {
                    margin: `${theme.spacing(2)} 0`
                }
            }
        }
    };
};
/* harmony default export */ const overrides_divider = (divider_Divider);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/popover.ts
const Popover = (theme)=>{
    return {
        MuiPopover: {
            styleOverrides: {
                root: {
                    '& .MuiPopover-paper': {
                        boxShadow: theme.shadows[6]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_popover = (Popover);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/tooltip.ts
// ** Util Import

const Tooltip = (theme)=>{
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.mode === 'light' ? (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[900], 0.9) : (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[700], 0.9)
                },
                arrow: {
                    color: theme.palette.mode === 'light' ? (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[900], 0.9) : (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[700], 0.9)
                }
            }
        }
    };
};
/* harmony default export */ const overrides_tooltip = (Tooltip);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/backdrop.ts
// ** Util Import

const Backdrop = (theme)=>{
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.mode === 'light' ? `rgba(${theme.palette.customColors.main}, 0.7)` : (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.7)
                },
                invisible: {
                    backgroundColor: 'transparent'
                }
            }
        }
    };
};
/* harmony default export */ const overrides_backdrop = (Backdrop);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/snackbar.ts
const Snackbar = (theme)=>{
    return {
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[900] : theme.palette.grey[100]
                }
            }
        }
    };
};
/* harmony default export */ const overrides_snackbar = (Snackbar);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/switches.ts
const Switch = (theme)=>{
    return {
        MuiSwitch: {
            styleOverrides: {
                root: {
                    '& .MuiSwitch-track': {
                        backgroundColor: `rgb(${theme.palette.customColors.main})`
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_switches = (Switch);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/timeline.ts
// ** Util Import

const Timeline = (theme)=>{
    return {
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    '&:not(:last-of-type)': {
                        '& .MuiTimelineContent-root': {
                            marginBottom: theme.spacing(4)
                        }
                    }
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.divider
                }
            }
        },
        MuiTimelineContent: {
            styleOverrides: {
                root: {
                    marginTop: theme.spacing(0.5)
                }
            }
        },
        MuiTimelineDot: {
            styleOverrides: {
                filledPrimary: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.12)}`
                },
                filledSecondary: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.12)}`
                },
                filledSuccess: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.12)}`
                },
                filledError: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.12)}`
                },
                filledWarning: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.12)}`
                },
                filledInfo: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.12)}`
                },
                filledGrey: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[400], 0.12)}`
                },
                outlinedPrimary: {
                    '& svg': {
                        color: theme.palette.primary.main
                    }
                },
                outlinedSecondary: {
                    '& svg': {
                        color: theme.palette.secondary.main
                    }
                },
                outlinedSuccess: {
                    '& svg': {
                        color: theme.palette.success.main
                    }
                },
                outlinedError: {
                    '& svg': {
                        color: theme.palette.error.main
                    }
                },
                outlinedWarning: {
                    '& svg': {
                        color: theme.palette.warning.main
                    }
                },
                outlinedInfo: {
                    '& svg': {
                        color: theme.palette.info.main
                    }
                },
                outlinedGrey: {
                    '& svg': {
                        color: theme.palette.grey[500]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_timeline = (Timeline);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/accordion.ts
const Accordion = (theme)=>{
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
                    },
                    '&.Mui-expanded': {
                        boxShadow: theme.shadows[3]
                    }
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    padding: `0 ${theme.spacing(5)}`,
                    '& + .MuiCollapse-root': {
                        '& .MuiAccordionDetails-root:first-child': {
                            paddingTop: 0
                        }
                    }
                },
                content: {
                    margin: `${theme.spacing(2.5)} 0`
                },
                expandIconWrapper: {
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    '& + .MuiAccordionDetails-root': {
                        paddingTop: 0
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_accordion = (Accordion);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/pagination.ts
// ** Util Import

const Pagination = (theme)=>{
    return {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    '&.Mui-selected:not(.Mui-disabled):not(.MuiPaginationItem-textPrimary):not(.MuiPaginationItem-textSecondary):hover': {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
                    }
                },
                outlined: {
                    borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                },
                outlinedPrimary: {
                    '&.Mui-selected': {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.12),
                        '&:hover': {
                            backgroundColor: `${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.2)} !important`
                        }
                    }
                },
                outlinedSecondary: {
                    '&.Mui-selected': {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.12),
                        '&:hover': {
                            backgroundColor: `${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.2)} !important`
                        }
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_pagination = (Pagination);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/typography.ts
const typography_Typography = (theme)=>{
    return {
        MuiTypography: {
            styleOverrides: {
                gutterBottom: {
                    marginBottom: theme.spacing(2)
                }
            }
        }
    };
};
/* harmony default export */ const typography = (typography_Typography);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/toggleButton.ts
/* harmony default export */ const toggleButton = ({
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: {
                borderRadius: 4
            }
        }
    },
    MuiToggleButton: {
        styleOverrides: {
            root: {
                borderRadius: 4
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/dateTimePicker.ts
const DateTimePicker = (theme)=>{
    return {
        MuiCalendarPicker: {
            styleOverrides: {
                root: {
                    '& [role="presentation"]': {
                        fontWeight: 400,
                        '& .PrivatePickersFadeTransitionGroup-root + .PrivatePickersFadeTransitionGroup-root > div': {
                            marginRight: 0
                        },
                        '& .MuiIconButton-sizeSmall': {
                            padding: theme.spacing(0.5)
                        },
                        '& + div .MuiIconButton-root:not(.Mui-disabled)': {
                            color: theme.palette.text.secondary
                        }
                    },
                    '& .PrivatePickersSlideTransition-root': {
                        minHeight: 240
                    }
                }
            }
        },
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem'
                }
            }
        },
        MuiClockPicker: {
            styleOverrides: {
                arrowSwitcher: {
                    '& .MuiIconButton-root:not(.Mui-disabled)': {
                        color: theme.palette.text.secondary
                    },
                    '& + div': {
                        '& > div': {
                            backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.background.default,
                            '& ~ .MuiIconButton-root span.MuiTypography-caption': {
                                color: 'inherit'
                            }
                        }
                    }
                }
            }
        },
        MuiMonthPicker: {
            styleOverrides: {
                root: {
                    '& > .MuiTypography-root.Mui-selected': {
                        fontSize: '1rem'
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_dateTimePicker = (DateTimePicker);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/index.ts
// ** Overrides Imports



























const Overrides = (theme)=>{
    const chip = overrides_chip(theme);
    const list = overrides_list(theme);
    const menu = overrides_menu(theme);
    const tabs = overrides_tabs(theme);
    const cards = card(theme);
    const input = overrides_input(theme);
    const tables = table(theme);
    const alerts = overrides_alerts(theme);
    const button = overrides_button(theme);
    const rating = overrides_rating(theme);
    const avatars = overrides_avatars(theme);
    const divider = overrides_divider(theme);
    const dialog = overrides_dialog(theme);
    const popover = overrides_popover(theme);
    const tooltip = overrides_tooltip(theme);
    const backdrop = overrides_backdrop(theme);
    const snackbar = overrides_snackbar(theme);
    const switches = overrides_switches(theme);
    const timeline = overrides_timeline(theme);
    const accordion = overrides_accordion(theme);
    const pagination = overrides_pagination(theme);
    const dateTimePicker = overrides_dateTimePicker(theme);
    return Object.assign(chip, list, menu, tabs, cards, input, alerts, button, dialog, rating, tables, avatars, divider, overrides_link, popover, tooltip, backdrop, paper, snackbar, switches, timeline, accordion, overrides_select, pagination, typography, dateTimePicker, toggleButton);
};
/* harmony default export */ const overrides = (Overrides);

;// CONCATENATED MODULE: ./src/@core/theme/typography/index.ts
const theme_typography_Typography = (theme)=>{
    return {
        h1: {
            fontWeight: 500,
            letterSpacing: '-1.5px',
            color: theme.palette.text.primary
        },
        h2: {
            fontWeight: 500,
            letterSpacing: '-0.5px',
            color: theme.palette.text.primary
        },
        h3: {
            fontWeight: 500,
            letterSpacing: 0,
            color: theme.palette.text.primary
        },
        h4: {
            fontWeight: 500,
            letterSpacing: '0.25px',
            color: theme.palette.text.primary
        },
        h5: {
            fontWeight: 500,
            letterSpacing: 0,
            color: theme.palette.text.primary
        },
        h6: {
            letterSpacing: '0.15px',
            color: theme.palette.text.primary
        },
        subtitle1: {
            letterSpacing: '0.15px',
            color: theme.palette.text.primary
        },
        subtitle2: {
            letterSpacing: '0.1px',
            color: theme.palette.text.secondary
        },
        body1: {
            letterSpacing: '0.15px',
            color: theme.palette.text.primary
        },
        body2: {
            lineHeight: 1.5,
            letterSpacing: '0.15px',
            color: theme.palette.text.secondary
        },
        button: {
            letterSpacing: '0.3px',
            color: theme.palette.text.primary
        },
        caption: {
            letterSpacing: '0.4px',
            color: theme.palette.text.secondary
        },
        overline: {
            letterSpacing: '1px',
            color: theme.palette.text.secondary
        }
    };
};
/* harmony default export */ const theme_typography = (theme_typography_Typography);

// EXTERNAL MODULE: ./node_modules/@mui/utils/index.js
var utils = __webpack_require__(877462);
;// CONCATENATED MODULE: ./src/@core/theme/palette/index.ts
const DefaultPalette = (mode, themeColor)=>{
    // ** Vars
    const lightColor = '58, 53, 65';
    const darkColor = '231, 227, 252';
    const mainColor = mode === 'light' ? lightColor : darkColor;
    const primaryGradient = ()=>{
        if (themeColor === 'primary') {
            return '#C6A7FE';
        } else if (themeColor === 'secondary') {
            return '#9C9FA4';
        } else if (themeColor === 'success') {
            return '#93DD5C';
        } else if (themeColor === 'error') {
            return '#FF8C90';
        } else if (themeColor === 'warning') {
            return '#FFCF5C';
        } else {
            return '#6ACDFF';
        }
    };
    return {
        customColors: {
            main: mainColor,
            primaryGradient: primaryGradient(),
            tableHeaderBg: mode === 'light' ? '#F9FAFC' : '#3D3759',
            navItems: "#F4F1F9"
        },
        common: {
            black: '#000',
            white: '#FFF'
        },
        mode: mode,
        primary: {
            light: '#9E69FD',
            main: '#9155FD',
            dark: '#804BDF',
            contrastText: '#FFF'
        },
        secondary: {
            light: '#9C9FA4',
            main: '#8A8D93',
            dark: '#777B82',
            contrastText: '#FFF'
        },
        success: {
            light: '#6AD01F',
            main: '#56CA00',
            dark: '#4CB200',
            contrastText: '#FFF'
        },
        error: {
            light: '#FF6166',
            main: '#FF4C51',
            dark: '#E04347',
            contrastText: '#FFF'
        },
        warning: {
            light: '#FFCA64',
            main: '#FFB400',
            dark: '#E09E00',
            contrastText: '#FFF'
        },
        info: {
            light: '#32BAFF',
            main: '#16B1FF',
            dark: '#139CE0',
            contrastText: '#FFF'
        },
        grey: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            A100: '#D5D5D5',
            A200: '#AAAAAA',
            A400: '#616161',
            A700: '#303030'
        },
        text: {
            primary: `#737B8B`,
            secondary: `rgba(${mainColor}, 0.68)`,
            tertiary: "#4B0181",
            disabled: `rgba(${mainColor}, 0.38)`
        },
        divider: `rgba(${mainColor}, 0.12)`,
        background: {
            paper: mode === 'light' ? '#FFF' : '#312D4B',
            default: mode === 'light' ? '#F3F0F9' : '#28243D'
        },
        action: {
            active: `rgba(${mainColor}, 0.54)`,
            hover: `rgba(${mainColor}, 0.04)`,
            selected: `rgba(${mainColor}, 0.08)`,
            disabled: `rgba(${mainColor}, 0.3)`,
            disabledBackground: `rgba(${mainColor}, 0.18)`,
            focus: `rgba(${mainColor}, 0.12)`
        }
    };
};
/* harmony default export */ const palette = (DefaultPalette);

;// CONCATENATED MODULE: ./src/@core/theme/spacing/index.ts
/* harmony default export */ const spacing = ({
    spacing: (factor)=>`${0.25 * factor}rem`
});

;// CONCATENATED MODULE: ./src/@core/theme/shadows/index.ts
const Shadows = (mode)=>{
    if (mode === 'light') {
        return [
            'none',
            '0px 2px 1px -1px rgba(58, 53, 65, 0.2), 0px 1px 1px 0px rgba(58, 53, 65, 0.14), 0px 1px 3px 0px rgba(58, 53, 65, 0.12)',
            '0px 3px 1px -2px rgba(58, 53, 65, 0.2), 0px 2px 2px 0px rgba(58, 53, 65, 0.14), 0px 1px 5px 0px rgba(58, 53, 65, 0.12)',
            '0px 4px 8px -4px rgba(58, 53, 65, 0.42)',
            '0px 6px 18px -8px rgba(58, 53, 65, 0.56)',
            '0px 3px 5px -1px rgba(58, 53, 65, 0.2), 0px 5px 8px 0px rgba(58, 53, 65, 0.14), 0px 1px 14px 0px rgba(58, 53, 65, 0.12)',
            '0px 2px 10px 0px rgba(58, 53, 65, 0.1)',
            '0px 4px 5px -2px rgba(58, 53, 65, 0.2), 0px 7px 10px 1px rgba(58, 53, 65, 0.14), 0px 2px 16px 1px rgba(58, 53, 65, 0.12)',
            '0px 5px 5px -3px rgba(58, 53, 65, 0.2), 0px 8px 10px 1px rgba(58, 53, 65, 0.14), 0px 3px 14px 2px rgba(58, 53, 65, 0.12)',
            '0px 5px 6px -3px rgba(58, 53, 65, 0.2), 0px 9px 12px 1px rgba(58, 53, 65, 0.14), 0px 3px 16px 2px rgba(58, 53, 65, 0.12)',
            '0px 6px 6px -3px rgba(58, 53, 65, 0.2), 0px 10px 14px 1px rgba(58, 53, 65, 0.14), 0px 4px 18px 3px rgba(58, 53, 65, 0.12)',
            '0px 6px 7px -4px rgba(58, 53, 65, 0.2), 0px 11px 15px 1px rgba(58, 53, 65, 0.14), 0px 4px 20px 3px rgba(58, 53, 65, 0.12)',
            '0px 7px 8px -4px rgba(58, 53, 65, 0.2), 0px 12px 17px 2px rgba(58, 53, 65, 0.14), 0px 5px 22px 4px rgba(58, 53, 65, 0.12)',
            '0px 7px 8px -4px rgba(58, 53, 65, 0.2), 0px 13px 19px 2px rgba(58, 53, 65, 0.14), 0px 5px 24px 4px rgba(58, 53, 65, 0.12)',
            '0px 7px 9px -4px rgba(58, 53, 65, 0.2), 0px 14px 21px 2px rgba(58, 53, 65, 0.14), 0px 5px 26px 4px rgba(58, 53, 65, 0.12)',
            '0px 8px 9px -5px rgba(58, 53, 65, 0.2), 0px 15px 22px 2px rgba(58, 53, 65, 0.14), 0px 6px 28px 5px rgba(58, 53, 65, 0.12)',
            '0px 8px 10px -5px rgba(58, 53, 65, 0.2), 0px 16px 24px 2px rgba(58, 53, 65, 0.14), 0px 6px 30px 5px rgba(58, 53, 65, 0.12)',
            '0px 8px 11px -5px rgba(58, 53, 65, 0.2), 0px 17px 26px 2px rgba(58, 53, 65, 0.14), 0px 6px 32px 5px rgba(58, 53, 65, 0.12)',
            '0px 9px 11px -5px rgba(58, 53, 65, 0.2), 0px 18px 28px 2px rgba(58, 53, 65, 0.14), 0px 7px 34px 6px rgba(58, 53, 65, 0.12)',
            '0px 9px 12px -6px rgba(58, 53, 65, 0.2), 0px 19px 29px 2px rgba(58, 53, 65, 0.14), 0px 7px 36px 6px rgba(58, 53, 65, 0.12)',
            '0px 10px 13px -6px rgba(58, 53, 65, 0.2), 0px 20px 31px 3px rgba(58, 53, 65, 0.14), 0px 8px 38px 7px rgba(58, 53, 65, 0.12)',
            '0px 10px 13px -6px rgba(58, 53, 65, 0.2), 0px 21px 33px 3px rgba(58, 53, 65, 0.14), 0px 8px 40px 7px rgba(58, 53, 65, 0.12)',
            '0px 10px 14px -6px rgba(58, 53, 65, 0.2), 0px 22px 35px 3px rgba(58, 53, 65, 0.14), 0px 8px 42px 7px rgba(58, 53, 65, 0.12)',
            '0px 11px 14px -7px rgba(58, 53, 65, 0.2), 0px 23px 36px 3px rgba(58, 53, 65, 0.14), 0px 9px 44px 8px rgba(58, 53, 65, 0.12)',
            '0px 11px 15px -7px rgba(58, 53, 65, 0.2), 0px 24px 38px 3px rgba(58, 53, 65, 0.14), 0px 9px 46px 8px rgba(58, 53, 65, 0.12)'
        ];
    } else {
        return [
            'none',
            '0px 2px 1px -1px rgba(19, 17, 32, 0.2), 0px 1px 1px 0px rgba(19, 17, 32, 0.14), 0px 1px 3px 0px rgba(19, 17, 32, 0.12)',
            '0px 3px 1px -2px rgba(19, 17, 32, 0.2), 0px 2px 2px 0px rgba(19, 17, 32, 0.14), 0px 1px 5px 0px rgba(19, 17, 32, 0.12)',
            '0px 4px 8px -4px rgba(19, 17, 32, 0.42)',
            '0px 6px 18px -8px rgba(19, 17, 32, 0.56)',
            '0px 3px 5px -1px rgba(19, 17, 32, 0.2), 0px 5px 8px rgba(19, 17, 32, 0.14), 0px 1px 14px rgba(19, 17, 32, 0.12)',
            '0px 2px 10px 0px rgba(19, 17, 32, 0.1)',
            '0px 4px 5px -2px rgba(19, 17, 32, 0.2), 0px 7px 10px 1px rgba(19, 17, 32, 0.14), 0px 2px 16px 1px rgba(19, 17, 32, 0.12)',
            '0px 5px 5px -3px rgba(19, 17, 32, 0.2), 0px 8px 10px 1px rgba(19, 17, 32, 0.14), 0px 3px 14px 2px rgba(19, 17, 32, 0.12)',
            '0px 5px 6px -3px rgba(19, 17, 32, 0.2), 0px 9px 12px 1px rgba(19, 17, 32, 0.14), 0px 3px 16px 2px rgba(19, 17, 32, 0.12)',
            '0px 6px 6px -3px rgba(19, 17, 32, 0.2), 0px 10px 14px 1px rgba(19, 17, 32, 0.14), 0px 4px 18px 3px rgba(19, 17, 32, 0.12)',
            '0px 6px 7px -4px rgba(19, 17, 32, 0.2), 0px 11px 15px 1px rgba(19, 17, 32, 0.14), 0px 4px 20px 3px rgba(19, 17, 32, 0.12)',
            '0px 7px 8px -4px rgba(19, 17, 32, 0.2), 0px 12px 17px 2px rgba(19, 17, 32, 0.14), 0px 5px 22px 4px rgba(19, 17, 32, 0.12)',
            '0px 7px 8px -4px rgba(19, 17, 32, 0.2), 0px 13px 19px 2px rgba(19, 17, 32, 0.14), 0px 5px 24px 4px rgba(19, 17, 32, 0.12)',
            '0px 7px 9px -4px rgba(19, 17, 32, 0.2), 0px 14px 21px 2px rgba(19, 17, 32, 0.14), 0px 5px 26px 4px rgba(19, 17, 32, 0.12)',
            '0px 8px 9px -5px rgba(19, 17, 32, 0.2), 0px 15px 22px 2px rgba(19, 17, 32, 0.14), 0px 6px 28px 5px rgba(19, 17, 32, 0.12)',
            '0px 8px 10px -5px rgba(19, 17, 32, 0.2), 0px 16px 24px 2px rgba(19, 17, 32, 0.14), 0px 6px 30px 5px rgba(19, 17, 32, 0.12)',
            '0px 8px 11px -5px rgba(19, 17, 32, 0.2), 0px 17px 26px 2px rgba(19, 17, 32, 0.14), 0px 6px 32px 5px rgba(19, 17, 32, 0.12)',
            '0px 9px 11px -5px rgba(19, 17, 32, 0.2), 0px 18px 28px 2px rgba(19, 17, 32, 0.14), 0px 7px 34px 6px rgba(19, 17, 32, 0.12)',
            '0px 9px 12px -6px rgba(19, 17, 32, 0.2), 0px 19px 29px 2px rgba(19, 17, 32, 0.14), 0px 7px 36px 6px rgba(19, 17, 32, 0.12)',
            '0px 10px 13px -6px rgba(19, 17, 32, 0.2), 0px 20px 31px 3px rgba(19, 17, 32, 0.14), 0px 8px 38px 7px rgba(19, 17, 32, 0.12)',
            '0px 10px 13px -6px rgba(19, 17, 32, 0.2), 0px 21px 33px 3px rgba(19, 17, 32, 0.14), 0px 8px 40px 7px rgba(19, 17, 32, 0.12)',
            '0px 10px 14px -6px rgba(19, 17, 32, 0.2), 0px 22px 35px 3px rgba(19, 17, 32, 0.14), 0px 8px 42px 7px rgba(19, 17, 32, 0.12)',
            '0px 11px 14px -7px rgba(19, 17, 32, 0.2), 0px 23px 36px 3px rgba(19, 17, 32, 0.14), 0px 9px 44px 8px rgba(19, 17, 32, 0.12)',
            '0px 11px 15px -7px rgba(19, 17, 32, 0.2), 0px 24px 38px 3px rgba(19, 17, 32, 0.14), 0px 9px 46px 8px rgba(19, 17, 32, 0.12)'
        ];
    }
};
/* harmony default export */ const shadows = (Shadows);

;// CONCATENATED MODULE: ./src/@core/theme/breakpoints/index.ts
const breakpoints = ()=>({
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    })
;
/* harmony default export */ const theme_breakpoints = (breakpoints);

;// CONCATENATED MODULE: ./src/@core/theme/ThemeOptions.ts
// ** MUI Theme Provider

// ** Theme Override Imports




const themeOptions = (settings)=>{
    // ** Vars
    const { mode , themeColor  } = settings;
    const themeConfig = {
        palette: palette(mode, themeColor),
        typography: {
            fontFamily: [
                'Inter',
                'sans-serif',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"'
            ].join(',')
        },
        shadows: shadows(mode),
        ...spacing,
        breakpoints: theme_breakpoints(),
        shape: {
            borderRadius: 6
        },
        mixins: {
            toolbar: {
                minHeight: 64
            }
        }
    };
    return (0,utils.deepmerge)(themeConfig, {
        palette: {
            primary: {
                ...themeConfig.palette[themeColor]
            }
        }
    });
};
/* harmony default export */ const ThemeOptions = (themeOptions);

;// CONCATENATED MODULE: ./src/@core/theme/globalStyles.ts
const globalStyles_GlobalStyles = (theme)=>{
    return {
        '.ps__rail-y': {
            zIndex: 1,
            right: '0 !important',
            left: 'auto !important',
            '&:hover, &:focus, &.ps--clicking': {
                backgroundColor: theme.palette.mode === 'light' ? '#E4E5EB !important' : '#423D5D !important'
            },
            '& .ps__thumb-y': {
                right: '3px !important',
                left: 'auto !important',
                backgroundColor: theme.palette.mode === 'light' ? '#C2C4D1 !important' : '#504B6D !important'
            },
            '.layout-vertical-nav &': {
                '& .ps__thumb-y': {
                    width: 4,
                    backgroundColor: theme.palette.mode === 'light' ? '#C2C4D1 !important' : '#504B6D !important'
                },
                '&:hover, &:focus, &.ps--clicking': {
                    backgroundColor: 'transparent !important',
                    '& .ps__thumb-y': {
                        width: 6
                    }
                }
            }
        },
        '#nprogress': {
            pointerEvents: 'none',
            '& .bar': {
                left: 0,
                top: 0,
                height: 3,
                width: '100%',
                zIndex: 2000,
                position: 'fixed',
                backgroundColor: theme.palette.primary.main
            }
        }
    };
};
/* harmony default export */ const globalStyles = (globalStyles_GlobalStyles);

;// CONCATENATED MODULE: ./src/@core/theme/ThemeComponent.tsx

// ** MUI Imports



// ** Theme Config

// ** Theme Override Imports


// ** Theme

// ** Global Styles

const ThemeComponent = (props)=>{
    // ** Props
    const { settings , children  } = props;
    // ** Merged ThemeOptions of Core and User
    const coreThemeConfig = ThemeOptions(settings);
    // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
    let theme = (0,styles.createTheme)(coreThemeConfig);
    // ** Continue theme creation and pass merged component overrides to CreateTheme function
    theme = (0,styles.createTheme)(theme, {
        components: {
            ...overrides(theme)
        },
        typography: {
            ...theme_typography(theme)
        }
    });
    // ** Set responsive font sizes to true
    if (themeConfig/* default.responsiveFontSizes */.Z.responsiveFontSizes) {
        theme = (0,styles.responsiveFontSizes)(theme);
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(styles.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(CssBaseline["default"], {
            }),
            /*#__PURE__*/ jsx_runtime.jsx(GlobalStyles["default"], {
                styles: ()=>globalStyles(theme)
            }),
            children
        ]
    }));
};
/* harmony default export */ const theme_ThemeComponent = (ThemeComponent);

// EXTERNAL MODULE: ./src/@core/utils/create-emotion-cache.ts
var create_emotion_cache = __webpack_require__(814017);
;// CONCATENATED MODULE: ./src/pages/_app.tsx

// ** Next Imports




// ** Loader Import

// ** Emotion Imports

// ** Config Imports

// ** Component Imports


// ** Contexts

// ** Utils Imports

// ** React Perfect Scrollbar Style

// ** Global css styles

const clientSideEmotionCache = (0,create_emotion_cache/* createEmotionCache */.S)();
// ** Pace Loader
if (themeConfig/* default.routingLoader */.Z.routingLoader) {
    next_router.Router.events.on('routeChangeStart', ()=>{
        nprogress_default().start();
    });
    next_router.Router.events.on('routeChangeError', ()=>{
        nprogress_default().done();
    });
    next_router.Router.events.on('routeChangeComplete', ()=>{
        nprogress_default().done();
    });
}
// ** Configure JSS & ClassName
const App = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps: { session , ...pageProps }  } = props;
    // Variables
    const getLayout = Component.getLayout ?? ((page)=>/*#__PURE__*/ jsx_runtime.jsx(layouts_UserLayout, {
            children: page
        })
    );
    return(/*#__PURE__*/ jsx_runtime.jsx(react.SessionProvider, {
        session: session,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(emotion_react_cjs_prod.CacheProvider, {
            value: emotionCache,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(head["default"], {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("title", {
                            children: `${themeConfig/* default.templateName */.Z.templateName} - Seu App de Gerenciamento de Dados`
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("meta", {
                            name: "description",
                            content: `${themeConfig/* default.templateName */.Z.templateName} – Nsights – é a plataforma mais fácil e amigável para gerenciar dados.`
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("meta", {
                            name: "keywords",
                            content: "Dados, Gerenciamento Dados, Startup"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("meta", {
                            name: "viewport",
                            content: "initial-scale=1, width=device-width"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx(SettingsProvider, {
                    children: /*#__PURE__*/ jsx_runtime.jsx(SettingsConsumer, {
                        children: ({ settings  })=>{
                            return(/*#__PURE__*/ jsx_runtime.jsx(theme_ThemeComponent, {
                                settings: settings,
                                children: getLayout(/*#__PURE__*/ jsx_runtime.jsx(Component, {
                                    ...pageProps
                                }))
                            }));
                        }
                    })
                })
            ]
        })
    }));
};
async function getServerSideProps(context) {
    const session = await (0,react.getSession)(context);
    if (!session) {
        return {
            redirect: {
                destination: "/pages/login",
                permanent: false
            }
        };
    }
    return {
        session
    };
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 185641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(785893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(667294);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(956859);
/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(121794);
/* harmony import */ var src_core_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(814017);

// ** React Import

// ** Next Import

// ** Emotion Imports

// ** Utils Imports

class CustomDocument extends next_document__WEBPACK_IMPORTED_MODULE_2__["default"] {
    render() {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.googleapis.com"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "stylesheet",
                            href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: "/images/apple-touch-icon.png"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "shortcut icon",
                            href: "/images/favicon.png"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {
                        })
                    ]
                })
            ]
        }));
    }
}
CustomDocument.getInitialProps = async (ctx)=>{
    const originalRenderPage = ctx.renderPage;
    const cache = (0,src_core_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_4__/* .createEmotionCache */ .S)();
    const { extractCriticalToChunks  } = (0,_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__["default"])(cache);
    ctx.renderPage = ()=>originalRenderPage({
            enhanceApp: (App)=>(props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                        ...props,
                        emotionCache: cache
                    })
        })
    ;
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2__["default"].getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: style.css
            },
            "data-emotion": `${style.key} ${style.ids.join(' ')}`
        }, style.key));
    });
    return {
        ...initialProps,
        styles: [
            ...react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(initialProps.styles),
            ...emotionStyleTags
        ]
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomDocument);


/***/ }),

/***/ 373350:
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
const TreeImg = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)('img')(({ theme  })=>({
        left: '2.25rem',
        bottom: '4.25rem',
        position: 'absolute',
        [theme.breakpoints.down('lg')]: {
            left: 0,
            bottom: 0
        }
    })
);
const FooterIllustrations = (props)=>{
    // ** Props
    const { image  } = props;
    // ** Hook
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    // ** Vars
    const hidden = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__["default"])(theme.breakpoints.down('md'));
    if (!hidden) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: [
                image || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TreeImg, {
                    alt: "tree",
                    src: "/images/pages/tree-2.png"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MaskImg, {
                    alt: "mask",
                    src: `/images/pages/misc-mask-${theme.palette.mode}.png`
                })
            ]
        }));
    } else {
        return null;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterIllustrations);


/***/ }),

/***/ 297020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/HSzuZ69sbNjDJ_I7un3a4/_buildManifest.js","static/HSzuZ69sbNjDJ_I7un3a4/_ssgManifest.js","static/HSzuZ69sbNjDJ_I7un3a4/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-0dff74cd367af978.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f65253c7c555ee10.js","static/chunks/657-514f0e1fc1261041.js","static/chunks/pages/index-d35dc78ff87f17e5.js"],"/401":["static/chunks/webpack-0dff74cd367af978.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f65253c7c555ee10.js","static/chunks/pages/401-58bef1bb94ec80c3.js"],"/404":["static/chunks/webpack-0dff74cd367af978.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f65253c7c555ee10.js","static/chunks/pages/404-631190e7c28f6028.js"],"/500":["static/chunks/webpack-0dff74cd367af978.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f65253c7c555ee10.js","static/chunks/pages/500-34409e2402dea4f5.js"],"/_app":["static/chunks/webpack-0dff74cd367af978.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f65253c7c555ee10.js","static/css/23e22283813d63c7.css","static/chunks/pages/_app-51ddbcc98839301d.js"],"/_error":["static/chunks/webpack-0dff74cd367af978.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f65253c7c555ee10.js","static/chunks/pages/_error-2280fa386d040b66.js"],"/account-settings":["static/chunks/webpack-0dff74cd367af978.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f65253c7c555ee10.js","static/chunks/657-514f0e1fc1261041.js","static/css/2a5b5b0efba32221.css","static/chunks/176-7a34cc322c544896.js","static/chunks/4-991558c5d0368788.js","static/chunks/583-a918b6bd3c767416.js","static/chunks/pages/account-settings-863a57869089e020.js"],"/cards":["static/chunks/webpack-0dff74cd367af978.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f65253c7c555ee10.js","static/chunks/657-514f0e1fc1261041.js","static/chunks/4-991558c5d0368788.js","static/chunks/518-7bda4f8985b390f1.js","static/chunks/874-47bd80dcefdb931c.js","static/chunks/pages/cards-61024bbb37cc6bef.js"],"/form-layouts":["static/chunks/webpack-0dff74cd367af978.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f65253c7c555ee10.js","static/chunks/657-514f0e1fc1261041.js","static/chunks/461-031bcea7a0836b9d.js","static/css/2a5b5b0efba32221.css","static/chunks/176-7a34cc322c544896.js","static/chunks/pages/form-layouts-231390a00f31e100.js"],"/icons":["static/chunks/webpack-0dff74cd367af978.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f65253c7c555ee10.js","static/chunks/657-514f0e1fc1261041.js","static/chunks/788-eb50ec68bfc92781.js","static/chunks/pages/icons-53e2a059f7105723.js"],"/pages/error":["static/chunks/webpack-0dff74cd367af978.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f65253c7c555ee10.js","static/chunks/pages/pages/error-f6be24919b3417de.js"],"/pages/login":["static/chunks/webpack-0dff74cd367af978.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f65253c7c555ee10.js","static/chunks/461-031bcea7a0836b9d.js","static/chunks/pages/pages/login-98e8bdfd107ea0c0.js"],"/pages/register":["static/chunks/webpack-0dff74cd367af978.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f65253c7c555ee10.js","static/chunks/461-031bcea7a0836b9d.js","static/chunks/pages/pages/register-2c24b97d5050fd54.js"],"/tables":["static/chunks/webpack-0dff74cd367af978.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f65253c7c555ee10.js","static/chunks/657-514f0e1fc1261041.js","static/chunks/518-7bda4f8985b390f1.js","static/chunks/761-50bf1f7f4a1cb4c3.js","static/chunks/pages/tables-4b7b9dc20390aaac.js"],"/transactions":["static/chunks/webpack-0dff74cd367af978.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f65253c7c555ee10.js","static/chunks/657-514f0e1fc1261041.js","static/chunks/pages/transactions-9c07e76ee08885ab.js"],"/typography":["static/chunks/webpack-0dff74cd367af978.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-f65253c7c555ee10.js","static/chunks/657-514f0e1fc1261041.js","static/chunks/pages/typography-a34a96be7c6ead2c.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 973978:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 659450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;