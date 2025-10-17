"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/search-appliance";
exports.ids = ["pages/api/search-appliance"];
exports.modules = {

/***/ "(api-node)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nconst pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASSWORD,\n    database: process.env.DB_NAME\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pool);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtQztBQUNQO0FBQzVCQyxvREFBYTtBQUViLE1BQU1FLE9BQU9ILGdFQUFnQixDQUFDO0lBQzVCSyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLE9BQU87SUFDekJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csT0FBTztJQUN6QkMsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxXQUFXO0lBQ2pDQyxVQUFVUCxRQUFRQyxHQUFHLENBQUNPLE9BQU87QUFDL0I7QUFFQSxpRUFBZVgsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxyYXppdlxcc3dkLWFzc2lnbm1lbnQxLTMxMzQzMjlcXGxpYlxcZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJztcclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5kb3RlbnYuY29uZmlnKCk7XHJcblxyXG5jb25zdCBwb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcclxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb29sO1xyXG4iXSwibmFtZXMiOlsibXlzcWwiLCJkb3RlbnYiLCJjb25maWciLCJwb29sIiwiY3JlYXRlUG9vbCIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiREJfSE9TVCIsInVzZXIiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsImRhdGFiYXNlIiwiREJfTkFNRSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./lib/db.js\n");

/***/ }),

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsearch-appliance&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Csearch-appliance.js&middlewareConfigBase64=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsearch-appliance&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Csearch-appliance.js&middlewareConfigBase64=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_search_appliance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\search-appliance.js */ \"(api-node)/./pages/api/search-appliance.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_search_appliance_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_search_appliance_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/search-appliance\",\n        pathname: \"/api/search-appliance\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_search_appliance_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGc2VhcmNoLWFwcGxpYW5jZSZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDc2VhcmNoLWFwcGxpYW5jZS5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDRTtBQUMxRDtBQUM4RDtBQUM5RDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsMkRBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLDJEQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLHlHQUFtQjtBQUNsRDtBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXHNlYXJjaC1hcHBsaWFuY2UuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NlYXJjaC1hcHBsaWFuY2VcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zZWFyY2gtYXBwbGlhbmNlXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsearch-appliance&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Csearch-appliance.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/search-appliance.js":
/*!***************************************!*\
  !*** ./pages/api/search-appliance.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api-node)/./lib/db.js\");\n/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sanitize-html */ \"sanitize-html\");\n/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sanitize_html__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    if (req.method === 'POST') {\n        const { serialNumber } = req.body;\n        if (!serialNumber) {\n            return res.status(400).send('Serial number is required');\n        }\n        const cleanSerial = sanitize_html__WEBPACK_IMPORTED_MODULE_1___default()(serialNumber.trim());\n        try {\n            const [results] = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].execute(`SELECT Appliance.*, User.Address, User.Mobile, User.Email \n         FROM Appliance \n         JOIN User ON Appliance.UserID = User.UserID \n         WHERE SerialNumber = ?`, [\n                cleanSerial\n            ]);\n            if (results.length === 0) {\n                return res.status(404).send('Appliance not found');\n            }\n            const appliance = results[0];\n            // Return cleaned object\n            res.status(200).json({\n                applianceType: appliance.ApplianceType,\n                brand: appliance.Brand,\n                modelNumber: appliance.ModelNumber,\n                serialNumber: appliance.SerialNumber,\n                purchaseDate: appliance.PurchaseDate.toISOString().split('T')[0],\n                warrantyDate: appliance.WarrantyExpirationDate.toISOString().split('T')[0],\n                cost: appliance.Cost,\n                address: appliance.Address,\n                mobile: appliance.Mobile,\n                email: appliance.Email\n            });\n        } catch (err) {\n            console.error('Search error:', err.message);\n            return res.status(500).send('Server error');\n        }\n    } else {\n        res.status(405).send('Method Not Allowed');\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9zZWFyY2gtYXBwbGlhbmNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEI7QUFDVztBQUUxQixlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtRQUVqQyxJQUFJLENBQUNELGNBQWM7WUFDakIsT0FBT0YsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUM5QjtRQUVBLE1BQU1DLGNBQWNULG9EQUFZQSxDQUFDSyxhQUFhSyxJQUFJO1FBRWxELElBQUk7WUFDRixNQUFNLENBQUNDLFFBQVEsR0FBRyxNQUFNWix1REFBVSxDQUNoQyxDQUFDOzs7K0JBR3NCLENBQUMsRUFBRTtnQkFBQ1U7YUFBWTtZQUd6QyxJQUFJRSxRQUFRRSxNQUFNLEtBQUssR0FBRztnQkFDeEIsT0FBT1YsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUM5QjtZQUVBLE1BQU1NLFlBQVlILE9BQU8sQ0FBQyxFQUFFO1lBRTVCLHdCQUF3QjtZQUN4QlIsSUFBSUksTUFBTSxDQUFDLEtBQUtRLElBQUksQ0FBQztnQkFDbkJDLGVBQWVGLFVBQVVHLGFBQWE7Z0JBQ3RDQyxPQUFPSixVQUFVSyxLQUFLO2dCQUN0QkMsYUFBYU4sVUFBVU8sV0FBVztnQkFDbENoQixjQUFjUyxVQUFVUSxZQUFZO2dCQUNwQ0MsY0FBY1QsVUFBVVUsWUFBWSxDQUFDQyxXQUFXLEdBQUdDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEVDLGNBQWNiLFVBQVVjLHNCQUFzQixDQUFDSCxXQUFXLEdBQUdDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDMUVHLE1BQU1mLFVBQVVnQixJQUFJO2dCQUNwQkMsU0FBU2pCLFVBQVVrQixPQUFPO2dCQUMxQkMsUUFBUW5CLFVBQVVvQixNQUFNO2dCQUN4QkMsT0FBT3JCLFVBQVVzQixLQUFLO1lBQ3hCO1FBRUYsRUFBRSxPQUFPQyxLQUFLO1lBQ1pDLFFBQVFDLEtBQUssQ0FBQyxpQkFBaUJGLElBQUlHLE9BQU87WUFDMUMsT0FBT3JDLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFDOUI7SUFDRixPQUFPO1FBQ0xMLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7SUFDdkI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxyYXppdlxcc3dkLWFzc2lnbm1lbnQxLTMxMzQzMjlcXHBhZ2VzXFxhcGlcXHNlYXJjaC1hcHBsaWFuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gJy4uLy4uL2xpYi9kYic7XHJcbmltcG9ydCBzYW5pdGl6ZUh0bWwgZnJvbSAnc2FuaXRpemUtaHRtbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgY29uc3QgeyBzZXJpYWxOdW1iZXIgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIGlmICghc2VyaWFsTnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnU2VyaWFsIG51bWJlciBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsZWFuU2VyaWFsID0gc2FuaXRpemVIdG1sKHNlcmlhbE51bWJlci50cmltKCkpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IFtyZXN1bHRzXSA9IGF3YWl0IGRiLmV4ZWN1dGUoXHJcbiAgICAgICAgYFNFTEVDVCBBcHBsaWFuY2UuKiwgVXNlci5BZGRyZXNzLCBVc2VyLk1vYmlsZSwgVXNlci5FbWFpbCBcclxuICAgICAgICAgRlJPTSBBcHBsaWFuY2UgXHJcbiAgICAgICAgIEpPSU4gVXNlciBPTiBBcHBsaWFuY2UuVXNlcklEID0gVXNlci5Vc2VySUQgXHJcbiAgICAgICAgIFdIRVJFIFNlcmlhbE51bWJlciA9ID9gLCBbY2xlYW5TZXJpYWxdXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLnNlbmQoJ0FwcGxpYW5jZSBub3QgZm91bmQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYXBwbGlhbmNlID0gcmVzdWx0c1swXTtcclxuXHJcbiAgICAgIC8vIFJldHVybiBjbGVhbmVkIG9iamVjdFxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgYXBwbGlhbmNlVHlwZTogYXBwbGlhbmNlLkFwcGxpYW5jZVR5cGUsXHJcbiAgICAgICAgYnJhbmQ6IGFwcGxpYW5jZS5CcmFuZCxcclxuICAgICAgICBtb2RlbE51bWJlcjogYXBwbGlhbmNlLk1vZGVsTnVtYmVyLFxyXG4gICAgICAgIHNlcmlhbE51bWJlcjogYXBwbGlhbmNlLlNlcmlhbE51bWJlcixcclxuICAgICAgICBwdXJjaGFzZURhdGU6IGFwcGxpYW5jZS5QdXJjaGFzZURhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdLFxyXG4gICAgICAgIHdhcnJhbnR5RGF0ZTogYXBwbGlhbmNlLldhcnJhbnR5RXhwaXJhdGlvbkRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdLFxyXG4gICAgICAgIGNvc3Q6IGFwcGxpYW5jZS5Db3N0LFxyXG4gICAgICAgIGFkZHJlc3M6IGFwcGxpYW5jZS5BZGRyZXNzLFxyXG4gICAgICAgIG1vYmlsZTogYXBwbGlhbmNlLk1vYmlsZSxcclxuICAgICAgICBlbWFpbDogYXBwbGlhbmNlLkVtYWlsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdTZWFyY2ggZXJyb3I6JywgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ1NlcnZlciBlcnJvcicpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuc2VuZCgnTWV0aG9kIE5vdCBBbGxvd2VkJyk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYiIsInNhbml0aXplSHRtbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXJpYWxOdW1iZXIiLCJib2R5Iiwic3RhdHVzIiwic2VuZCIsImNsZWFuU2VyaWFsIiwidHJpbSIsInJlc3VsdHMiLCJleGVjdXRlIiwibGVuZ3RoIiwiYXBwbGlhbmNlIiwianNvbiIsImFwcGxpYW5jZVR5cGUiLCJBcHBsaWFuY2VUeXBlIiwiYnJhbmQiLCJCcmFuZCIsIm1vZGVsTnVtYmVyIiwiTW9kZWxOdW1iZXIiLCJTZXJpYWxOdW1iZXIiLCJwdXJjaGFzZURhdGUiLCJQdXJjaGFzZURhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0Iiwid2FycmFudHlEYXRlIiwiV2FycmFudHlFeHBpcmF0aW9uRGF0ZSIsImNvc3QiLCJDb3N0IiwiYWRkcmVzcyIsIkFkZHJlc3MiLCJtb2JpbGUiLCJNb2JpbGUiLCJlbWFpbCIsIkVtYWlsIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/search-appliance.js\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "sanitize-html":
/*!********************************!*\
  !*** external "sanitize-html" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("sanitize-html");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsearch-appliance&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Csearch-appliance.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();