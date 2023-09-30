"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 239374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(659450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(297020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(973978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(999436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(972333)
      processEnv([{"path":".env","contents":"SECRET=VRsLD7lg6sapK8x279+AtnPJuCESroyyv544ocC9LGA=\r\nNEXTAUTH_URL=http://localhost:3000/api/auth"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(185641)

      const appMod = __webpack_require__(69886)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(477116)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(89185),
        notFoundModule: __webpack_require__(259622),
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/",
        buildId: "HSzuZ69sbNjDJ_I7un3a4",
        escapedBuildId: "HSzuZ69sbNjDJ_I7un3a4",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"f34f368ab2ca90438421cce215b7418d",previewModeSigningKey:"7957a1c5ba15295d86606f1009e9de423be6087c099c84f4825128931de48eee",previewModeEncryptionKey:"e72eb5599773b9d627640e9eea5b76fc01199d494c9ae7329a95eab52896351a"}
      })
      
    

/***/ }),

/***/ 477116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(785893);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Grid/index.js
var Grid = __webpack_require__(617373);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(433299);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(609285);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Card/index.js
var Card = __webpack_require__(255695);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(278316);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(34904);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CardContent/index.js
var CardContent = __webpack_require__(481573);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent);
// EXTERNAL MODULE: ./node_modules/mdi-material-ui/index.js
var mdi_material_ui = __webpack_require__(374923);
;// CONCATENATED MODULE: ./src/@core/components/card-statistics/card-stats-vertical/index.tsx

// ** MUI Imports






const CardStatsVertical = (props)=>{
    // ** Props
    const { title , subtitle , color , icon =false , stats , trend , trendNumber  } = props;
    return(/*#__PURE__*/ jsx_runtime.jsx((Card_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((CardContent_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
                    sx: {
                        display: 'flex',
                        marginBottom: 5.5,
                        alignItems: 'flex-start',
                        justifyContent: 'space-between'
                    },
                    children: icon ? /*#__PURE__*/ jsx_runtime.jsx((Avatar_default()), {
                        sx: {
                            boxShadow: 3,
                            marginRight: 4,
                            color: 'common.white',
                            backgroundColor: `${color}.main`
                        },
                        children: icon
                    }) : null
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                    sx: {
                        fontWeight: 600,
                        fontSize: '0.875rem'
                    },
                    children: title
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                    sx: {
                        marginTop: 1.5,
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginBottom: 1.5,
                        alignItems: 'flex-start'
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                            variant: "h6",
                            sx: {
                                mr: 2
                            },
                            children: stats
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box["default"], {
                            sx: {
                                display: 'flex',
                                alignItems: 'center',
                                color: 'success.main'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(mdi_material_ui/* MenuUp */.Nx3, {
                                    sx: {
                                        fontSize: '1.875rem',
                                        verticalAlign: 'middle'
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    component: "sup",
                                    variant: "caption",
                                    sx: {
                                        color: trend === 'positive' ? 'success.main' : 'error.main'
                                    },
                                    children: trendNumber
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                    variant: "caption",
                    children: subtitle
                })
            ]
        })
    }));
};
/* harmony default export */ const card_stats_vertical = (CardStatsVertical);
CardStatsVertical.defaultProps = {
    color: 'primary',
    trend: 'positive'
};

// EXTERNAL MODULE: ./src/@core/styles/libs/react-apexcharts/index.ts
var react_apexcharts = __webpack_require__(310189);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(707772);
;// CONCATENATED MODULE: ./src/views/dashboard/TotalEarning.tsx

// ** MUI Imports




// ** Types
// import { ThemeColor } from 'src/@core/layouts/types'

// interface DataType {
//   title: string
//   imgSrc: string
//   amount: string
//   subtitle: string
//   progress: number
//   color: ThemeColor
//   imgHeight: number
// }
// const data: DataType[] = [
//   {
//     progress: 75,
//     imgHeight: 30,
//     title: 'Latam',
//     color: 'primary',
//     amount: '$24,895.65',
//     subtitle: 'Emissão de passagem',
//     imgSrc: '/images/cards/latam.png'
//   },
//   {
//     progress: 50,
//     color: 'info',
//     imgHeight: 15,
//     title: 'Smiles',
//     amount: '$8,650.20',
//     subtitle: 'Venda de milhas',
//     imgSrc: '/images/cards/smiles.png'
//   },
//   {
//     progress: 20,
//     imgHeight: 40,
//     title: 'Livelo',
//     color: 'secondary',
//     amount: '$1,245.80',
//     subtitle: 'Bonificação',
//     imgSrc: '/images/cards/livelo.png'
//   }
//]
const ColorButton = (0,node.styled)(node.Button)(({})=>({
        color: "#000000",
        borderRadius: 20,
        backgroundColor: "#FFFFFF"
    })
);
const TotalEarning = ()=>{
    return(/*#__PURE__*/ jsx_runtime.jsx((Card_default()), {
        sx: {
            background: 'linear-gradient(to top, #4B0181 , #a580c0)'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(node.Grid, {
            container: true,
            spacing: 2,
            sx: {
                alignItems: 'center',
                pl: 4,
                mb: 9
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(node.Grid, {
                    item: true,
                    xs: 12,
                    md: 6,
                    lg: 6,
                    sx: {
                        mt: 10
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    variant: "h5",
                                    component: "div",
                                    sx: {
                                        color: "#FFFFFF",
                                        mb: 8
                                    },
                                    children: "Ai Insights"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        color: "#FFFFFF"
                                    },
                                    children: "Let Fillow manage your project automatically with our best AI systems"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(node.CardActions, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(ColorButton, {
                                variant: "contained",
                                children: "Try Free Now"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx(node.Grid, {
                    container: true,
                    item: true,
                    xs: 12,
                    md: 6,
                    lg: 6,
                    sx: {
                        mt: 10,
                        mb: 5,
                        justifyContent: 'center'
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx(Box["default"], {
                        sx: {
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            width: "200",
                            alt: "Aero-stub img",
                            src: "/images/chart.png"
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const dashboard_TotalEarning = (TotalEarning);

;// CONCATENATED MODULE: ./src/pages/index.tsx

// ** MUI Imports

// ** Icons Imports

// ** Custom Components Imports

// ** Styled Component Import

// ** Demo Components Imports

const Dashboard = ()=>{
    return(/*#__PURE__*/ jsx_runtime.jsx(react_apexcharts/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
            container: true,
            spacing: 6,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    lg: 6,
                    children: /*#__PURE__*/ jsx_runtime.jsx(dashboard_TotalEarning, {
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    lg: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Grid_default()), {
                        container: true,
                        spacing: 6,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ jsx_runtime.jsx(card_stats_vertical, {
                                    stats: "68",
                                    color: "success",
                                    trendNumber: "+42%",
                                    title: "Total Startups"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ jsx_runtime.jsx(card_stats_vertical, {
                                    stats: "78",
                                    title: "Funding Rounds",
                                    trend: "negative",
                                    color: "secondary",
                                    trendNumber: "-15%"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ jsx_runtime.jsx(card_stats_vertical, {
                                    stats: "562",
                                    trend: "negative",
                                    trendNumber: "-2%",
                                    title: "Total M&A",
                                    subtitle: "than last month"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ jsx_runtime.jsx(card_stats_vertical, {
                                    stats: "892",
                                    color: "warning",
                                    trend: "positive",
                                    trendNumber: "2%",
                                    subtitle: "than last month",
                                    title: "New Founders"
                                })
                            })
                        ]
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
        props: {
            session
        }
    };
}
/* harmony default export */ const pages = (Dashboard);


/***/ }),

/***/ 501014:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 702186:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 714300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 706113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 582361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 657147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 113685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 795687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 822037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 371017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 863477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 371576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 257310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 473837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 959796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [289,311,137,951,118,833,714,383,780,923,46,189], () => (__webpack_exec__(239374)));
module.exports = __webpack_exports__;

})();