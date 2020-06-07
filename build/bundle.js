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

/***/ "./src/bundle.ts":
/*!***********************!*\
  !*** ./src/bundle.ts ***!
  \***********************/
/*! exports provided: RenderMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RenderMain\", function() { return RenderMain; });\nvar RenderMain = /** @class */ (function () {\n    function RenderMain() {\n        this.request = new XMLHttpRequest();\n    }\n    RenderMain.prototype.SetupDOMs = function () {\n        this.year = document.getElementById(\"year\");\n        this.month = document.getElementById(\"month\");\n        this.day = document.getElementById(\"day\");\n        this.hour = document.getElementById(\"hour\");\n        this.minute = document.getElementById(\"minute\");\n        this.second = document.getElementById(\"second\");\n        this.newsTitle = document.getElementById(\"news_title\");\n        this.newsCategory = document.getElementById(\"news_category\");\n        this.newsDescription = document.getElementById(\"news_description\");\n        this.setNewsContent(\"\", [], \"\");\n    };\n    RenderMain.prototype.StartClock = function () {\n        var _this = this;\n        setInterval(function () { return _this.tickClock(); }, 1000);\n    };\n    RenderMain.prototype.tickClock = function () {\n        var _a, _b, _c, _d, _e, _f;\n        var date = new Date();\n        (_a = this.year) === null || _a === void 0 ? void 0 : _a.innerText = date.getFullYear();\n        (_b = this.month) === null || _b === void 0 ? void 0 : _b.innerText = date.getMonth() + 1;\n        (_c = this.day) === null || _c === void 0 ? void 0 : _c.innerText = date.getDate();\n        (_d = this.hour) === null || _d === void 0 ? void 0 : _d.innerText = (\"00\" + date.getHours()).slice(-2);\n        (_e = this.minute) === null || _e === void 0 ? void 0 : _e.innerText = (\"00\" + date.getMinutes()).slice(-2);\n        (_f = this.second) === null || _f === void 0 ? void 0 : _f.innerText = (\"00\" + date.getSeconds()).slice(-2);\n    };\n    RenderMain.prototype.setNewsContent = function (title, category, description) {\n        var _a, _b;\n        (_a = this.newsTitle) === null || _a === void 0 ? void 0 : _a.innerText = \"Unity2019 LTS　リリース開始。\";\n        (_b = this.newsDescription) === null || _b === void 0 ? void 0 : _b.innerText = \"Unityテクノロジーズは、本日、同社が開発するゲームエンジン「Unity」の2019LTSのリリースを発表。\";\n    };\n    RenderMain.prototype.GetNewsHeadLines = function () {\n        var _this = this;\n        this.request.open(\"GET\", \"https://news.google.com/news/rss/headlines/section/topic/TECHNOLOGY?hl=ja&gl=JP&ceid=JP:ja\");\n        this.request.onreadystatechange = function () {\n            if (_this.request.readyState != 4) {\n                // requesting\n            }\n            else if (_this.request.status != 200) {\n                // failed\n                console.log(\"request is failed.\");\n            }\n            else {\n                var response = _this.request.response;\n                var parser = new DOMParser();\n                var doms = parser.parseFromString(response, \"application/xml\");\n                var titles = doms.documentElement.getElementsByTagName(\"title\");\n                for (var i = 0; i < titles.length; i++) {\n                    console.log(titles[i].textContent);\n                }\n            }\n        };\n        this.request.send(null);\n    };\n    return RenderMain;\n}());\n\nwindow.onload = function () {\n    var renderMain = new RenderMain();\n    renderMain.SetupDOMs();\n    renderMain.StartClock();\n    renderMain.GetNewsHeadLines();\n};\n\n\n//# sourceURL=webpack:///./src/bundle.ts?");

/***/ })

/******/ });