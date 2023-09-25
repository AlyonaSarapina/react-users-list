/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_Root__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Root */ \"./src/Root.js\");\n\n\n\n\n\n\nvar PORT = process.env.PORT || 3006;\nvar app = express__WEBPACK_IMPORTED_MODULE_4___default()();\n\nif (typeof document !== 'undefined') {\n  app.get('/', function (req, res) {\n    var root = document.getElementById('root');\n    var app = ReactDOM.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_src_Root__WEBPACK_IMPORTED_MODULE_5__.Root, null)), root);\n    var appToString = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default().renderToString(app);\n    var indexFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve('./build/index.html');\n    fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(indexFile, 'utf8', function (err, data) {\n      if (err) {\n        console.error('Something went wrong:', err);\n        return res.status(500).send('Oops, better luck next time!');\n      }\n\n      return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(appToString, \"</div>\")));\n    });\n  });\n}\n\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default().static('./build'));\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack://react-webpack/./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.scss */ \"./src/App.scss\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"app-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"nav\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"nav-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/\",\n    className: \"nav-item\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/posts\",\n    className: \"nav-item\"\n  }, \"Posts\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/albums\",\n    className: \"nav-item\"\n  }, \"Albums\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, null)));\n}\n\n//# sourceURL=webpack://react-webpack/./src/App.js?");

/***/ }),

/***/ "./src/Root.js":
/*!*********************!*\
  !*** ./src/Root.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Root\": () => (/* binding */ Root)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _components_UserPosts_UserPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/UserPosts/UserPosts */ \"./src/components/UserPosts/UserPosts.js\");\n/* harmony import */ var _components_UserAlbums_UserAlbums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/UserAlbums/UserAlbums */ \"./src/components/UserAlbums/UserAlbums.js\");\n/* harmony import */ var _components_Post_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Post/Post */ \"./src/components/Post/Post.js\");\n/* harmony import */ var _components_Album_Album__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Album/Album */ \"./src/components/Album/Album.js\");\n/* harmony import */ var _components_UsersList_UsersList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/UsersList/UsersList */ \"./src/components/UsersList/UsersList.js\");\n/* harmony import */ var _components_AlbumsList_AlbumsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/AlbumsList/AlbumsList */ \"./src/components/AlbumsList/AlbumsList.js\");\n/* harmony import */ var _components_PostsList_PostsList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/PostsList/PostsList */ \"./src/components/PostsList/PostsList.js\");\n\n\n\n\n\n\n\n\n\n\nvar Root = function Root() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__.App, null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n    index: true,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_UsersList_UsersList__WEBPACK_IMPORTED_MODULE_7__.UsersList, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n    path: \"/posts\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_PostsList_PostsList__WEBPACK_IMPORTED_MODULE_9__.PostsList, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n    path: \"/albums\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_AlbumsList_AlbumsList__WEBPACK_IMPORTED_MODULE_8__.AlbumsList, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n    path: \":userId/posts\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_UserPosts_UserPosts__WEBPACK_IMPORTED_MODULE_3__.UserPosts, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n    path: \":userId/albums\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_UserAlbums_UserAlbums__WEBPACK_IMPORTED_MODULE_4__.UserAlbums, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n    path: \"posts/:postId\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Post_Post__WEBPACK_IMPORTED_MODULE_5__.Post, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n    path: \"albums/:albumId\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Album_Album__WEBPACK_IMPORTED_MODULE_6__.Album, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n    path: \"home\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Navigate, {\n      to: \"/\"\n    })\n  }))));\n};\n\n//# sourceURL=webpack://react-webpack/./src/Root.js?");

/***/ }),

/***/ "./src/api/fetch.js":
/*!**************************!*\
  !*** ./src/api/fetch.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchUsers\": () => (/* binding */ fetchUsers),\n/* harmony export */   \"fetchPosts\": () => (/* binding */ fetchPosts),\n/* harmony export */   \"fetchAlbums\": () => (/* binding */ fetchAlbums),\n/* harmony export */   \"fetchUserPosts\": () => (/* binding */ fetchUserPosts),\n/* harmony export */   \"fetchUserAlbums\": () => (/* binding */ fetchUserAlbums),\n/* harmony export */   \"fetchPost\": () => (/* binding */ fetchPost),\n/* harmony export */   \"fetchPostComments\": () => (/* binding */ fetchPostComments),\n/* harmony export */   \"fetchPhotos\": () => (/* binding */ fetchPhotos)\n/* harmony export */ });\nvar BASE_URL = 'https://jsonplaceholder.typicode.com';\nvar fetchUsers = function fetchUsers() {\n  return fetch(\"\".concat(BASE_URL, \"/users\")).then(function (res) {\n    return res.json();\n  });\n};\nvar fetchPosts = function fetchPosts() {\n  return fetch(\"\".concat(BASE_URL, \"/posts\")).then(function (res) {\n    return res.json();\n  });\n};\nvar fetchAlbums = function fetchAlbums() {\n  return fetch(\"\".concat(BASE_URL, \"/albums\")).then(function (res) {\n    return res.json();\n  });\n};\nvar fetchUserPosts = function fetchUserPosts(userId) {\n  return fetch(\"\".concat(BASE_URL, \"/posts?userId=\").concat(userId)).then(function (res) {\n    return res.json();\n  });\n};\nvar fetchUserAlbums = function fetchUserAlbums(userId) {\n  return fetch(\"\".concat(BASE_URL, \"/albums?userId=\").concat(userId)).then(function (res) {\n    return res.json();\n  });\n};\nvar fetchPost = function fetchPost(postId) {\n  return fetch(\"\".concat(BASE_URL, \"/posts/\").concat(postId)).then(function (res) {\n    return res.json();\n  });\n};\nvar fetchPostComments = function fetchPostComments(postId) {\n  return fetch(\"\".concat(BASE_URL, \"/posts/\").concat(postId, \"/comments\")).then(function (res) {\n    return res.json();\n  });\n};\nvar fetchPhotos = function fetchPhotos(albumId) {\n  return fetch(\"https://jsonplaceholder.typicode.com/albums/\".concat(albumId, \"/photos\")).then(function (res) {\n    return res.json();\n  });\n};\n\n//# sourceURL=webpack://react-webpack/./src/api/fetch.js?");

/***/ }),

/***/ "./src/components/Album/Album.js":
/*!***************************************!*\
  !*** ./src/components/Album/Album.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Album\": () => (/* binding */ Album)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Album_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Album.scss */ \"./src/components/Album/Album.scss\");\n/* harmony import */ var _api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/fetch */ \"./src/api/fetch.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar Album = function Album() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      albums = _useState2[0],\n      setAlbums = _useState2[1];\n\n  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n  var id = params.albumId.slice(1);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    (0,_api_fetch__WEBPACK_IMPORTED_MODULE_3__.fetchPhotos)(id).then(function (data) {\n      return setAlbums(data);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"album-container\"\n  }, albums && albums.map(function (album) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"album-body\",\n      key: album.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n      className: \"album-body-title\"\n    }, album.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      to: 'https://via.placeholder.com/600/92c952',\n      className: \"album-body-img\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: album.thumbnailUrl,\n      alt: \"album img\"\n    })));\n  }));\n};\n\n//# sourceURL=webpack://react-webpack/./src/components/Album/Album.js?");

/***/ }),

/***/ "./src/components/AlbumsList/AlbumsList.js":
/*!*************************************************!*\
  !*** ./src/components/AlbumsList/AlbumsList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlbumsList\": () => (/* binding */ AlbumsList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/fetch */ \"./src/api/fetch.js\");\n/* harmony import */ var _AlbumsList_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AlbumsList.scss */ \"./src/components/AlbumsList/AlbumsList.scss\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar AlbumsList = function AlbumsList() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      albums = _useState2[0],\n      setAlbums = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    (0,_api_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchAlbums)().then(function (data) {\n      return setAlbums(data);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"albums-container\"\n  }, albums && albums.map(function (album, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: album.id,\n      className: \"album\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"album-no\"\n    }, index + 1, \".\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n      to: \"/albums/:\".concat(album.id),\n      className: \"album-title\"\n    }, album.title));\n  }));\n};\n\n//# sourceURL=webpack://react-webpack/./src/components/AlbumsList/AlbumsList.js?");

/***/ }),

/***/ "./src/components/Post/Post.js":
/*!*************************************!*\
  !*** ./src/components/Post/Post.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Post\": () => (/* binding */ Post)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Post_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post.scss */ \"./src/components/Post/Post.scss\");\n/* harmony import */ var _api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/fetch */ \"./src/api/fetch.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar Post = function Post() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      post = _useState2[0],\n      setPost = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      comments = _useState4[0],\n      setComments = _useState4[1];\n\n  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n  var id = params.postId.slice(1);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    (0,_api_fetch__WEBPACK_IMPORTED_MODULE_3__.fetchPost)(id).then(function (data) {\n      return setPost(data);\n    });\n    (0,_api_fetch__WEBPACK_IMPORTED_MODULE_3__.fetchPostComments)(id).then(function (data) {\n      return setComments(data);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"post-container\"\n  }, post && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"post-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"post-body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"post-body-title\"\n  }, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"post-body-text\"\n  }, post.body)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"post-comments\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Comments\"), comments.map(function (comment) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"post-comment\",\n      key: comment.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"post-comment-name\"\n    }, comment.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      to: \"mailto: \".concat(comment.email),\n      className: \"post-comment-email\"\n    }, comment.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"post-comment-body\"\n    }, comment.body));\n  }))));\n};\n\n//# sourceURL=webpack://react-webpack/./src/components/Post/Post.js?");

/***/ }),

/***/ "./src/components/PostsList/PostsList.js":
/*!***********************************************!*\
  !*** ./src/components/PostsList/PostsList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostsList\": () => (/* binding */ PostsList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/fetch */ \"./src/api/fetch.js\");\n/* harmony import */ var _PostsList_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostsList.scss */ \"./src/components/PostsList/PostsList.scss\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar PostsList = function PostsList() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      posts = _useState2[0],\n      setPosts = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    (0,_api_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchPosts)().then(function (data) {\n      return setPosts(data);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"posts-container\"\n  }, posts && posts.map(function (post, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: post.id,\n      className: \"post\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"post-no\"\n    }, index + 1, \".\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n      to: \"/posts/:\".concat(post.id),\n      state: {\n        postId: post.id\n      },\n      className: \"post-title\"\n    }, post.title));\n  }));\n};\n\n//# sourceURL=webpack://react-webpack/./src/components/PostsList/PostsList.js?");

/***/ }),

/***/ "./src/components/UserAlbums/UserAlbums.js":
/*!*************************************************!*\
  !*** ./src/components/UserAlbums/UserAlbums.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserAlbums\": () => (/* binding */ UserAlbums)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/fetch */ \"./src/api/fetch.js\");\n/* harmony import */ var _UserAlbums_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserAlbums.scss */ \"./src/components/UserAlbums/UserAlbums.scss\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar UserAlbums = function UserAlbums() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      albums = _useState2[0],\n      setAlbums = _useState2[1];\n\n  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n  var id = params.userId.slice(1);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    (0,_api_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchUserAlbums)(id).then(function (data) {\n      return setAlbums(data);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"albums-container\"\n  }, albums.map(function (album, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: album.id,\n      className: \"album\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"album-no\"\n    }, index + 1, \".\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n      to: \"/albums/:\".concat(album.id),\n      state: {\n        albumId: album.id\n      },\n      className: \"album-title\"\n    }, album.title));\n  }));\n};\n\n//# sourceURL=webpack://react-webpack/./src/components/UserAlbums/UserAlbums.js?");

/***/ }),

/***/ "./src/components/UserPosts/UserPosts.js":
/*!***********************************************!*\
  !*** ./src/components/UserPosts/UserPosts.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserPosts\": () => (/* binding */ UserPosts)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/fetch */ \"./src/api/fetch.js\");\n/* harmony import */ var _UserPosts_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserPosts.scss */ \"./src/components/UserPosts/UserPosts.scss\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar UserPosts = function UserPosts() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      posts = _useState2[0],\n      setPosts = _useState2[1];\n\n  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n  var id = params.userId.slice(1);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    (0,_api_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchUserPosts)(id).then(function (data) {\n      return setPosts(data);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"posts-container\"\n  }, posts.map(function (post, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: post.id,\n      className: \"post\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"post-no\"\n    }, index + 1, \".\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n      to: \"/posts/:\".concat(post.id),\n      state: {\n        postId: post.id\n      },\n      className: \"post-title\"\n    }, post.title));\n  }));\n};\n\n//# sourceURL=webpack://react-webpack/./src/components/UserPosts/UserPosts.js?");

/***/ }),

/***/ "./src/components/UsersList/UsersList.js":
/*!***********************************************!*\
  !*** ./src/components/UsersList/UsersList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UsersList\": () => (/* binding */ UsersList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UsersList_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UsersList.scss */ \"./src/components/UsersList/UsersList.scss\");\n/* harmony import */ var _api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/fetch */ \"./src/api/fetch.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\nvar handleFilter = function handleFilter(users, query, sortQuery) {\n  var filteredUsers = _toConsumableArray(users);\n\n  var normalizedQuery = query.toLowerCase().trim();\n\n  if (normalizedQuery) {\n    filteredUsers = users.filter(function (user) {\n      return user.name.toLowerCase().includes(normalizedQuery);\n    });\n  }\n\n  if (sortQuery) {\n    switch (sortQuery) {\n      case 'asc':\n        filteredUsers = filteredUsers.sort(function (a, b) {\n          return a.name.localeCompare(b.name);\n        });\n        break;\n\n      case 'desc':\n        filteredUsers = filteredUsers.sort(function (a, b) {\n          return b.name.localeCompare(a.name);\n        });\n        break;\n\n      default:\n        filteredUsers;\n        break;\n    }\n  }\n\n  return filteredUsers;\n};\n\nvar UsersList = function UsersList() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      users = _useState2[0],\n      setUsers = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      _useState4 = _slicedToArray(_useState3, 2),\n      query = _useState4[0],\n      setQuery = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      _useState6 = _slicedToArray(_useState5, 2),\n      sortQuery = _useState6[0],\n      setSortQuery = _useState6[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    (0,_api_fetch__WEBPACK_IMPORTED_MODULE_3__.fetchUsers)().then(function (data) {\n      setUsers(data);\n    });\n  }, []);\n  var filteredUsers = handleFilter(users, query, sortQuery);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"users-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"panel\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"search\",\n    className: \"panel-search-input\",\n    placeholder: \"Enter name\",\n    value: query,\n    onChange: function onChange(event) {\n      return setQuery(event.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"panel-sort\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('panel-sort-asc', {\n      'is-active': sortQuery === 'asc'\n    }),\n    onClick: function onClick() {\n      if (sortQuery === 'asc') {\n        setSortQuery('');\n        return;\n      }\n\n      setSortQuery('asc');\n    }\n  }, \"\\u2191\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: function onClick() {\n      if (sortQuery === 'desc') {\n        setSortQuery('');\n        return;\n      }\n\n      setSortQuery('desc');\n    },\n    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('panel-sort-desc', {\n      'is-active': sortQuery === 'desc'\n    })\n  }, \"\\u2193\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"users-list\"\n  }, filteredUsers && filteredUsers.map(function (user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"card\",\n      key: user.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"card-header\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: \"https://avatars.dicebear.com/v2/avataaars/\".concat(user.username, \".svg\")\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"card-body\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"card-title\"\n    }, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"card-links\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      to: \"/:\".concat(user.id, \"/posts\"),\n      state: {\n        userId: user.id\n      },\n      className: \"card-link\"\n    }, \"Posts\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      to: \"/:\".concat(user.id, \"/albums\"),\n      state: {\n        userId: user.id\n      },\n      className: \"card-link\"\n    }, \"Albums\"))));\n  })));\n};\n\n//# sourceURL=webpack://react-webpack/./src/components/UsersList/UsersList.js?");

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-webpack/./src/App.scss?");

/***/ }),

/***/ "./src/components/Album/Album.scss":
/*!*****************************************!*\
  !*** ./src/components/Album/Album.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-webpack/./src/components/Album/Album.scss?");

/***/ }),

/***/ "./src/components/AlbumsList/AlbumsList.scss":
/*!***************************************************!*\
  !*** ./src/components/AlbumsList/AlbumsList.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-webpack/./src/components/AlbumsList/AlbumsList.scss?");

/***/ }),

/***/ "./src/components/Post/Post.scss":
/*!***************************************!*\
  !*** ./src/components/Post/Post.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-webpack/./src/components/Post/Post.scss?");

/***/ }),

/***/ "./src/components/PostsList/PostsList.scss":
/*!*************************************************!*\
  !*** ./src/components/PostsList/PostsList.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-webpack/./src/components/PostsList/PostsList.scss?");

/***/ }),

/***/ "./src/components/UserAlbums/UserAlbums.scss":
/*!***************************************************!*\
  !*** ./src/components/UserAlbums/UserAlbums.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-webpack/./src/components/UserAlbums/UserAlbums.scss?");

/***/ }),

/***/ "./src/components/UserPosts/UserPosts.scss":
/*!*************************************************!*\
  !*** ./src/components/UserPosts/UserPosts.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-webpack/./src/components/UserPosts/UserPosts.scss?");

/***/ }),

/***/ "./src/components/UsersList/UsersList.scss":
/*!*************************************************!*\
  !*** ./src/components/UsersList/UsersList.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-webpack/./src/components/UsersList/UsersList.scss?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("classnames");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./server/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;