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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bundle.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/NewsAgent.ts":
/*!**************************!*\
  !*** ./src/NewsAgent.ts ***!
  \**************************/
/*! exports provided: NewsAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewsAgent\", function() { return NewsAgent; });\nvar NewsAgent = /** @class */ (function () {\r\n    function NewsAgent() {\r\n        this.index = 0;\r\n        this.request = new XMLHttpRequest();\r\n    }\r\n    NewsAgent.prototype.GetHeadlines = function (onComplete) {\r\n        var _this = this;\r\n        this.request.open(\"GET\", \"https://news.google.com/news/rss/headlines/section/topic/TECHNOLOGY?hl=ja&gl=JP&ceid=JP:ja\");\r\n        this.request.onreadystatechange = function () {\r\n            if (_this.request.readyState != 4) {\r\n                // requesting\r\n            }\r\n            else if (_this.request.status != 200) {\r\n                // failed\r\n                console.log(\"request is failed.\");\r\n            }\r\n            else {\r\n                var response = _this.request.response;\r\n                var parser = new DOMParser();\r\n                var doms = parser.parseFromString(response, \"application/xml\");\r\n                // parse XML to headline interfaces...\r\n                var root = doms.getElementsByTagName(\"channel\")[0];\r\n                var items = root.getElementsByTagName(\"item\");\r\n                var headlines = [];\r\n                for (var i = 0; i < items.length; i++) {\r\n                    var headline = {\r\n                        Title: items[i].getElementsByTagName(\"title\")[0].innerHTML,\r\n                        Link: items[i].getElementsByTagName(\"link\")[0].innerHTML\r\n                    };\r\n                    headlines.push(headline);\r\n                }\r\n                onComplete(headlines);\r\n                _this.headlines = headlines;\r\n            }\r\n        };\r\n        this.request.send(null);\r\n    };\r\n    NewsAgent.prototype.StartLoop = function () {\r\n        var _this = this;\r\n        console.log(\"Start headline loop.\");\r\n        this.GetHeadlines(function (headlines) { });\r\n        var loop = setInterval(function () { return _this.updateNews(_this.HeadlineSetter); }, 30000);\r\n    };\r\n    NewsAgent.prototype.updateNews = function (setter) {\r\n        console.log(\"Update news headline.\");\r\n        console.log(this.headlines[this.index]);\r\n        setter(this.headlines[this.index]);\r\n        this.index++;\r\n        if (this.index > this.headlines.length) {\r\n            this.GetHeadlines(function (headlines) { });\r\n            this.index = 0;\r\n        }\r\n    };\r\n    return NewsAgent;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/NewsAgent.ts?");

/***/ }),

/***/ "./src/RenderMain.ts":
/*!***************************!*\
  !*** ./src/RenderMain.ts ***!
  \***************************/
/*! exports provided: RenderMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RenderMain\", function() { return RenderMain; });\n/* harmony import */ var _NewsAgent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsAgent */ \"./src/NewsAgent.ts\");\n\r\nvar RenderMain = /** @class */ (function () {\r\n    function RenderMain() {\r\n        this.newsHost = new _NewsAgent__WEBPACK_IMPORTED_MODULE_0__[\"NewsAgent\"]();\r\n    }\r\n    RenderMain.prototype.SetupDOMs = function () {\r\n        this.year = document.getElementById(\"year\");\r\n        this.month = document.getElementById(\"month\");\r\n        this.day = document.getElementById(\"day\");\r\n        this.hour = document.getElementById(\"hour\");\r\n        this.minute = document.getElementById(\"minute\");\r\n        this.second = document.getElementById(\"second\");\r\n        this.newsTitle = document.getElementById(\"news_title\");\r\n        this.newsCategory = document.getElementById(\"news_category\");\r\n        this.newsDescription = document.getElementById(\"news_description\");\r\n    };\r\n    RenderMain.prototype.StartClock = function () {\r\n        var _this = this;\r\n        setInterval(function () { return _this.tickClock(); }, 1000);\r\n    };\r\n    RenderMain.prototype.tickClock = function () {\r\n        var _a, _b, _c, _d, _e, _f;\r\n        var date = new Date();\r\n        (_a = this.year) === null || _a === void 0 ? void 0 : _a.innerText = date.getFullYear();\r\n        (_b = this.month) === null || _b === void 0 ? void 0 : _b.innerText = date.getMonth() + 1;\r\n        (_c = this.day) === null || _c === void 0 ? void 0 : _c.innerText = date.getDate();\r\n        (_d = this.hour) === null || _d === void 0 ? void 0 : _d.innerText = (\"00\" + date.getHours()).slice(-2);\r\n        (_e = this.minute) === null || _e === void 0 ? void 0 : _e.innerText = (\"00\" + date.getMinutes()).slice(-2);\r\n        (_f = this.second) === null || _f === void 0 ? void 0 : _f.innerText = (\"00\" + date.getSeconds()).slice(-2);\r\n    };\r\n    RenderMain.prototype.SetNewsContent = function (title, category, description) {\r\n        var _a, _b;\r\n        (_a = this.newsTitle) === null || _a === void 0 ? void 0 : _a.innerText = title;\r\n        (_b = this.newsDescription) === null || _b === void 0 ? void 0 : _b.innerText = description;\r\n    };\r\n    return RenderMain;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/RenderMain.ts?");

/***/ }),

/***/ "./src/bundle.ts":
/*!***********************!*\
  !*** ./src/bundle.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RenderMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderMain */ \"./src/RenderMain.ts\");\n/* harmony import */ var _NewsAgent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsAgent */ \"./src/NewsAgent.ts\");\n\r\n\r\nwindow.onload = function () {\r\n    var renderMain = new _RenderMain__WEBPACK_IMPORTED_MODULE_0__[\"RenderMain\"]();\r\n    renderMain.SetupDOMs();\r\n    renderMain.StartClock();\r\n    var newsAgent = new _NewsAgent__WEBPACK_IMPORTED_MODULE_1__[\"NewsAgent\"]();\r\n    newsAgent.HeadlineSetter = function (news) { return renderMain.SetNewsContent(news.Title, [], news.Title); };\r\n    newsAgent.StartLoop();\r\n};\r\n\n\n//# sourceURL=webpack:///./src/bundle.ts?");

/***/ })

/******/ });