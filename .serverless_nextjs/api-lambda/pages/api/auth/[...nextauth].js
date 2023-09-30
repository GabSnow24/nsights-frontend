"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 439491:
/***/ ((module) => {

module.exports = require("assert");

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

/***/ }),

/***/ 270996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_serverless_loaderpage_2Fapi_2Fauth_2F_5B_nextauth_5D_absolutePagePath_private_next_pages_2Fapi_2Fauth_2F_5B_nextauth_5D_ts_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_private_next_pages_2F404_tsx_distDir_private_dot_next_buildId_HSzuZ69sbNjDJ_I7un3a4_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_22f34f368ab2ca90438421cce215b7418d_22_2C_22previewModeSigningKey_22_3A_227957a1c5ba15295d86606f1009e9de423be6087c099c84f4825128931de48eee_22_2C_22previewModeEncryptionKey_22_3A_22e72eb5599773b9d627640e9eea5b76fc01199d494c9ae7329a95eab52896351a_22_7D_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6IlNFQ1JFVD1WUnNMRDdsZzZzYXBLOHgyNzkrQXRuUEp1Q0VTcm95eXY1NDRvY0M5TEdBPVxyXG5ORVhUQVVUSF9VUkw9aHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoIn1d_i18n_)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-fetch.js
var node_polyfill_fetch = __webpack_require__(507157);
;// CONCATENATED MODULE: ./.next/routes-manifest.json
const routes_manifest_namespaceObject = {"Dg":[]};
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/api-handler.js
var api_handler = __webpack_require__(206249);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/index.js?page=%2Fapi%2Fauth%2F%5B...nextauth%5D&absolutePagePath=private-next-pages%2Fapi%2Fauth%2F%5B...nextauth%5D.ts&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&absoluteErrorPath=next%2Fdist%2Fpages%2F_error&absolute404Path=private-next-pages%2F404.tsx&distDir=private-dot-next&buildId=HSzuZ69sbNjDJ_I7un3a4&assetPrefix=&generateEtags=true&poweredByHeader=true&canonicalBase=&basePath=&runtimeConfig=&previewProps=%7B%22previewModeId%22%3A%22f34f368ab2ca90438421cce215b7418d%22%2C%22previewModeSigningKey%22%3A%227957a1c5ba15295d86606f1009e9de423be6087c099c84f4825128931de48eee%22%2C%22previewModeEncryptionKey%22%3A%22e72eb5599773b9d627640e9eea5b76fc01199d494c9ae7329a95eab52896351a%22%7D&loadedEnvFiles=W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6IlNFQ1JFVD1WUnNMRDdsZzZzYXBLOHgyNzkrQXRuUEp1Q0VTcm95eXY1NDRvY0M5TEdBPVxyXG5ORVhUQVVUSF9VUkw9aHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoIn1d&i18n=!

        
      const { processEnv } = __webpack_require__(19936)
      processEnv([{"path":".env","contents":"SECRET=VRsLD7lg6sapK8x279+AtnPJuCESroyyv544ocC9LGA=\r\nNEXTAUTH_URL=http://localhost:3000/api/auth"}])
    
        
        const runtimeConfig = {}
        ;
        

        

        const combinedRewrites = Array.isArray(routes_manifest_namespaceObject.Dg)
          ? routes_manifest_namespaceObject.Dg
          : []

        if (!Array.isArray(routes_manifest_namespaceObject.Dg)) {
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.beforeFiles)
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.afterFiles)
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.fallback)
        }

        const apiHandler = (0,api_handler/* getApiHandler */.Y)({
          pageModule: __webpack_require__(315677),
          rewrites: combinedRewrites,
          i18n: undefined,
          page: "/api/auth/[...nextauth]",
          basePath: "",
          pageIsDynamic: true,
          encodedPreviewProps: {previewModeId:"f34f368ab2ca90438421cce215b7418d",previewModeSigningKey:"7957a1c5ba15295d86606f1009e9de423be6087c099c84f4825128931de48eee",previewModeEncryptionKey:"e72eb5599773b9d627640e9eea5b76fc01199d494c9ae7329a95eab52896351a"}
        })
        /* harmony default export */ const next_serverless_loaderpage_2Fapi_2Fauth_2F_5B_nextauth_5D_absolutePagePath_private_next_pages_2Fapi_2Fauth_2F_5B_nextauth_5D_ts_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_private_next_pages_2F404_tsx_distDir_private_dot_next_buildId_HSzuZ69sbNjDJ_I7un3a4_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_22f34f368ab2ca90438421cce215b7418d_22_2C_22previewModeSigningKey_22_3A_227957a1c5ba15295d86606f1009e9de423be6087c099c84f4825128931de48eee_22_2C_22previewModeEncryptionKey_22_3A_22e72eb5599773b9d627640e9eea5b76fc01199d494c9ae7329a95eab52896351a_22_7D_loadedEnvFiles_W3sicGF0aCI6Ii5lbnYiLCJjb250ZW50cyI6IlNFQ1JFVD1WUnNMRDdsZzZzYXBLOHgyNzkrQXRuUEp1Q0VTcm95eXY1NDRvY0M5TEdBPVxyXG5ORVhUQVVUSF9VUkw9aHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoIn1d_i18n_ = (apiHandler);
      

/***/ }),

/***/ 315677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(485413);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(811622);


// import EmailProvider from "next-auth/providers/email"
// import AppleProvider from "next-auth/providers/apple"
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
    // https://next-auth.js.org/configuration/providers
    providers: [
        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {
                    label: "Username",
                    type: "text",
                    placeholder: "jsmith"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                const res = await fetch("http://localhost:8080/auth/login", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const user = await res.json();
                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user;
                }
                // Return null if user data could not be retrieved
                return null;
            }
        }), 
    ],
    // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
    // https://next-auth.js.org/configuration/databases
    //
    // Notes:
    // * You must install an appropriate node_module for your database
    // * The Email provider requires a database (OAuth providers do not)
    // database: process.env.DATABASE_URL,
    // The secret should be set to a reasonably long random string.
    // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
    // a separate secret is defined explicitly for encrypting the JWT.
    secret: process.env.SECRET,
    session: {
        // Use JSON Web Tokens for session instead of database sessions.
        // This option can be used with or without a database for users/accounts.
        // Note: `strategy` should be set to 'jwt' if no database is used.
        strategy: 'jwt',
        // Seconds - How long until an idle session expires and is no longer valid.
        maxAge: 60 * 60 * 1
    },
    // JSON Web tokens are only used for sessions if the `strategy: 'jwt'` session
    // option is set - or by default if no database is specified.
    // https://next-auth.js.org/configuration/options#jwt
    jwt: {
        // A secret to use for key generation (you should set this explicitly)
        secret: process.env.SECRET
    },
    // You can define custom pages to override the built-in ones. These will be regular Next.js pages
    // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
    // The routes shown here are the default URLs that will be used when a custom
    // pages is not specified for that route.
    // https://next-auth.js.org/configuration/pages
    pages: {
        //signIn: '/pages/login/',  // Displays signin buttons
        //signOut: '/auth/login', // Displays form with sign out button
        error: '/pages/login'
    },
    // Callbacks are asynchronous functions you can use to control what happens
    // when an action is performed.
    // https://next-auth.js.org/configuration/callbacks
    callbacks: {
        // async signIn({ user, account, profile, email, credentials }) { return true },
        //async redirect({ url, baseUrl }) { return baseUrl },
        async session ({ session ,  }) {
            return session;
        },
        async jwt ({ token , user  }) {
            return {
                token,
                user
            };
        }
    },
    // Events are useful for logging
    // https://next-auth.js.org/configuration/events
    events: {
    },
    // Enable debug messages in the console if you are having problems
    debug: false
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [428], () => (__webpack_exec__(270996)));
module.exports = __webpack_exports__;

})();