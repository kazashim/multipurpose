/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\George\\Documents\\GitHub\\multipurpose\\resources\\js\\app.js: Unexpected token, expected \",\" (16:4)\n\n\u001b[0m \u001b[90m 14 | \u001b[39m    { path\u001b[33m:\u001b[39m \u001b[32m'/dashboard'\u001b[39m\u001b[33m,\u001b[39m component\u001b[33m:\u001b[39m require(\u001b[32m'./components/Dashboard.vue'\u001b[39m)\u001b[33m.\u001b[39m\u001b[36mdefault\u001b[39m }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 | \u001b[39m    { path\u001b[33m:\u001b[39m \u001b[32m'/profile'\u001b[39m\u001b[33m,\u001b[39m component\u001b[33m:\u001b[39m require(\u001b[32m'./components/Profile.vue'\u001b[39m)\u001b[33m.\u001b[39m\u001b[36mdefault\u001b[39m }\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 16 | \u001b[39m    { path\u001b[33m:\u001b[39m \u001b[32m'/user'\u001b[39m\u001b[33m,\u001b[39m component\u001b[33m:\u001b[39m require(\u001b[32m'./components/Users.vue'\u001b[39m)\u001b[33m.\u001b[39m\u001b[36mdefault\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 17 | \u001b[39m  ]\u001b[0m\n\u001b[0m \u001b[90m 18 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 | \u001b[39m\u001b[0m\n    at Parser.raise (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:7012:17)\n    at Parser.unexpected (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:8405:16)\n    at Parser.expect (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:8391:28)\n    at Parser.parseExprList (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:10293:14)\n    at Parser.parseExprAtom (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:9590:32)\n    at Parser.parseExprSubscripts (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:9237:23)\n    at Parser.parseMaybeUnary (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:9217:21)\n    at Parser.parseExprOps (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:9083:23)\n    at Parser.parseMaybeConditional (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:9056:23)\n    at Parser.parseMaybeAssign (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:9015:21)\n    at Parser.parseVar (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:11341:26)\n    at Parser.parseVarStatement (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:11160:10)\n    at Parser.parseStatementContent (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:10757:21)\n    at Parser.parseStatement (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:10690:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:11266:25)\n    at Parser.parseBlockBody (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:11253:10)\n    at Parser.parseTopLevel (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:10621:10)\n    at Parser.parse (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:12131:10)\n    at parse (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\parser\\lib\\index.js:12182:38)\n    at parser (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:187:34)\n    at normalizeFile (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:113:11)\n    at runSync (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\core\\lib\\transformation\\index.js:44:43)\n    at runAsync (C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\core\\lib\\transformation\\index.js:35:14)\n    at C:\\Users\\George\\Documents\\GitHub\\multipurpose\\node_modules\\@babel\\core\\lib\\transform.js:34:34\n    at processTicksAndRejections (internal/process/task_queues.js:76:11)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\George\Documents\GitHub\multipurpose\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\George\Documents\GitHub\multipurpose\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });