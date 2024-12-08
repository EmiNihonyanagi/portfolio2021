/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/_loading */ \"./src/js/modules/_loading.js\");\n/* harmony import */ var _modules_svgAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/_svgAnimation */ \"./src/js/modules/_svgAnimation.js\");\n/* harmony import */ var _modules_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/_polyfill */ \"./src/js/modules/_polyfill.js\");\n/* harmony import */ var _modules_linkTraget_rel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/_linkTraget_rel */ \"./src/js/modules/_linkTraget_rel.js\");\n/* harmony import */ var _modules_btnClickFunc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/_btnClickFunc */ \"./src/js/modules/_btnClickFunc.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/_smoothScroll */ \"./src/js/modules/_smoothScroll.js\");\n/* harmony import */ var _modules_wowEffects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/_wowEffects */ \"./src/js/modules/_wowEffects.js\");\n/* harmony import */ var _modules_scrollTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/_scrollTrigger */ \"./src/js/modules/_scrollTrigger.js\");\n/* harmony import */ var _modules_scrollBlockAnime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/_scrollBlockAnime */ \"./src/js/modules/_scrollBlockAnime.js\");\n\n\n\n\n\n// import { viewport } from './modules/_viewport';\n\n\n\n\n\n\n\n\n$(function () {\n  (0,_modules_loading__WEBPACK_IMPORTED_MODULE_0__.loading)();\n  (0,_modules_svgAnimation__WEBPACK_IMPORTED_MODULE_1__.svgAnimation)();\n  (0,_modules_polyfill__WEBPACK_IMPORTED_MODULE_2__.polyfill)();\n  (0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_5__.smoothScroll)();\n  // viewport();\n  (0,_modules_btnClickFunc__WEBPACK_IMPORTED_MODULE_4__.btnClickFunc)();\n  (0,_modules_wowEffects__WEBPACK_IMPORTED_MODULE_6__.wowEffects)();\n  (0,_modules_scrollTrigger__WEBPACK_IMPORTED_MODULE_7__.scrollTrigger)();\n  (0,_modules_scrollBlockAnime__WEBPACK_IMPORTED_MODULE_8__.scrollBlockAnime)();\n  (0,_modules_linkTraget_rel__WEBPACK_IMPORTED_MODULE_3__.linkTraget_rel)();\n});\n\n//# sourceURL=webpack://portfolio2021/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/_btnClickFunc.js":
/*!*****************************************!*\
  !*** ./src/js/modules/_btnClickFunc.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnClickFunc: function() { return /* binding */ btnClickFunc; }\n/* harmony export */ });\nconst btnClickFunc = () => {\n\n  document.querySelector('.js-btn').addEventListener('click', function () {\n    this.classList.toggle('is-open');\n    document.querySelector('.siteHeader__nav').classList.toggle('is-active');\n  });\n\n};\n\n//# sourceURL=webpack://portfolio2021/./src/js/modules/_btnClickFunc.js?");

/***/ }),

/***/ "./src/js/modules/_linkTraget_rel.js":
/*!*******************************************!*\
  !*** ./src/js/modules/_linkTraget_rel.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   linkTraget_rel: function() { return /* binding */ linkTraget_rel; }\n/* harmony export */ });\nconst linkTraget_rel = () => {\n  function ready(fn) {\n    if (document.readyState != 'loading') {\n      fn();\n    } else if (document.addEventListener) {\n      document.addEventListener('DOMContentLoaded', fn);\n    } else {\n      document.attachEvent('onreadystatechange', function () {\n        if (document.readyState != 'loading')\n          fn();\n      });\n    }\n  }\n  ready(function () {\n    var website = window.location.hostnam;\n    var internalLinkRegex = new RegExp('^((((http:\\\\/\\\\/|https:\\\\/\\\\/)(www\\\\.)?)?'\n      + website\n      + ')|(localhost:\\\\d{4})|(\\\\/.*))(\\\\/.*)?$', '');\n    var anchorEls = document.querySelectorAll('a');\n    var anchorElsLength = anchorEls.length;\n\n    for (var i = 0; i < anchorElsLength; i++) {\n      var anchorEl = anchorEls[i];\n      var href = anchorEl.getAttribute('href');\n      if (!internalLinkRegex.test(href)) {\n        anchorEl.setAttribute('target', '_blank');\n        anchorEl.setAttribute('rel', 'noopener nofollow');\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack://portfolio2021/./src/js/modules/_linkTraget_rel.js?");

/***/ }),

/***/ "./src/js/modules/_loading.js":
/*!************************************!*\
  !*** ./src/js/modules/_loading.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loading: function() { return /* binding */ loading; }\n/* harmony export */ });\nconst loading = () => {\n  document.body.classList.add(\"is-hide\");\n  const target = document.getElementsByClassName('js-loading')[0];\n  const fv = document.getElementsByClassName('home__fv-area')[0];\n  window.setTimeout(function () {\n\n    target.classList.add(\"is-animate\");\n    fv.classList.add(\"is-show\");\n    document.body.classList.remove(\"is-hide\");\n  }, 5000);\n\n  const timeAction = function () {\n    const target_img = document.querySelectorAll('.loading__areaText');\n    for (let i = 0; i < target_img.length; i++) {\n      target_img[i].classList.add(\"is-show\");\n    }\n  }\n\n  setTimeout(timeAction, 1000);\n\n};\n\n//# sourceURL=webpack://portfolio2021/./src/js/modules/_loading.js?");

/***/ }),

/***/ "./src/js/modules/_polyfill.js":
/*!*************************************!*\
  !*** ./src/js/modules/_polyfill.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   polyfill: function() { return /* binding */ polyfill; }\n/* harmony export */ });\nconst polyfill = () => {\n  //Reference:\n  //reeversedev.com/polyfill-for-foreach-map-filter-reduce\n\n  // Polyfills\n  // Foreach function\n  if (window.NodeList && !NodeList.prototype.forEach) {\n    NodeList.prototype.forEach = Array.prototype.forEach;\n  }\n\n  // Map function\n  Array.prototype.map = function (callback) {\n    let arr = [];\n    for (let i = 0; i < this.length; i++) {\n      arr.push(callback(this[i], i, this));\n    }\n    return arr;\n  };\n\n  // Filter function\n  Array.prototype.filter = function (callback, context) {\n    let arr = [];\n    for (let i = 0; i < this.length; i++) {\n      if (callback.call(context, this[i], i, this)) {\n        arr.push(this[i]);\n      }\n    }\n    return arr;\n  };\n\n  // Reduce function\n  Array.prototype.reduce = function (callback, initialValue) {\n    let accumulator = initialValue === undefined ? undefined : initialValue;\n\n    for (let i = 0; i < this.length; i++) {\n      if (accumulator !== undefined) {\n        accumulator = callback.call(undefined, accumulator, this[i], i, this);\n      } else {\n        accumulator = this[i];\n      }\n    }\n    return accumulator;\n  };\n};\n\n\n//# sourceURL=webpack://portfolio2021/./src/js/modules/_polyfill.js?");

/***/ }),

/***/ "./src/js/modules/_scrollBlockAnime.js":
/*!*********************************************!*\
  !*** ./src/js/modules/_scrollBlockAnime.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrollBlockAnime: function() { return /* binding */ scrollBlockAnime; }\n/* harmony export */ });\nconst scrollBlockAnime = () => {\n  const myFunc = function(){\n    const target = document.getElementsByClassName('animate__target');\n    const position = Math.floor(window.innerHeight * .75);\n    for (let i = 0; i < target.length; i++) {\n        let offsetTop = Math.floor(target[i].getBoundingClientRect().top);\n        if (offsetTop < position) {\n            target[i].classList.add('is-animate');\n        }\n    }\n  }\n\n  //スクロールイベントリスナーに登録\n  window.addEventListener('scroll', myFunc, false);\n\n\n  };\n\n\n//# sourceURL=webpack://portfolio2021/./src/js/modules/_scrollBlockAnime.js?");

/***/ }),

/***/ "./src/js/modules/_scrollTrigger.js":
/*!******************************************!*\
  !*** ./src/js/modules/_scrollTrigger.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrollTrigger: function() { return /* binding */ scrollTrigger; }\n/* harmony export */ });\nconst scrollTrigger = () => {\n\n\n  gsap.from(\".js-main__title\", {\n    scrollTrigger: \".js-main__title\",\n    duration: 1,\n    autoAlpha: 1,\n    markers: true,\n  });\n\n\n\n  const listWrapperEl_01 = document.querySelector('.js-horizontalArea__01');\n  const listEl_01 = document.querySelector('.js-horizontalArea__item01');\n\n  gsap.to(listEl_01, {\n    x: () => -(listEl_01.clientWidth - listWrapperEl_01.clientWidth),\n    ease: 'none',\n    scrollTrigger: {\n      // markers: true,\n      trigger: '.js-horizontal__01',\n      start: 'top left',\n      end: () => `+=${listEl_01.clientWidth - listWrapperEl_01.clientWidth}`,\n      scrub: true,\n      pin: true,\n    },\n  });\n\n  const listWrapperEl_02 = document.querySelector('.js-horizontalArea__02');\n  const listEl_02 = document.querySelector('.js-horizontalArea__item02');\n\n  gsap.to(listEl_02, {\n    x: () => -(listEl_02.clientWidth - listWrapperEl_02.clientWidth),\n    ease: 'none',\n    scrollTrigger: {\n      // markers: true,\n      trigger: '.js-horizontal__02',\n      start: 'top top',\n      end: () => `+=${listEl_02.clientWidth - listWrapperEl_02.clientWidth}`,\n      scrub: true,\n      pin: true,\n      anticipatePin: 1,\n      invalidateOnRefresh: true,\n    },\n  });\n\n};\n\n\n//# sourceURL=webpack://portfolio2021/./src/js/modules/_scrollTrigger.js?");

/***/ }),

/***/ "./src/js/modules/_smoothScroll.js":
/*!*****************************************!*\
  !*** ./src/js/modules/_smoothScroll.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   smoothScroll: function() { return /* binding */ smoothScroll; }\n/* harmony export */ });\nconst smoothScroll = () => {\n  $('a[href^=\"#\"]').on(\"click\", e => {\n    let speed = 600;\n    let href = $(e.currentTarget).attr(\"href\");\n    let target = $(href == \"#\" || href == \"\" ? \"html\" : href);\n    let position = target.offset().top;\n    $(\"body, html\").delay(200).animate({ scrollTop: position }, speed, \"swing\");\n    return false;\n  });\n};\n\n//# sourceURL=webpack://portfolio2021/./src/js/modules/_smoothScroll.js?");

/***/ }),

/***/ "./src/js/modules/_svgAnimation.js":
/*!*****************************************!*\
  !*** ./src/js/modules/_svgAnimation.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   svgAnimation: function() { return /* binding */ svgAnimation; }\n/* harmony export */ });\nconst svgAnimation = () => {\n  const fv = document.getElementsByClassName('home__fv-areaLine')[0];\n  window.setTimeout(function () {\n    fv.classList.add(\"is-animate\");\n    new Vivus('mask', { //ここにsvgタグにつけたIDを書き込む\n      type: 'oneByOne',\n      start: 'inViewport',\n      duration: 40,\n      forceRender: false,\n      animTimingFunction: Vivus.LINEAR,\n    });\n\n  }, 6000);\n\n};\n\n//# sourceURL=webpack://portfolio2021/./src/js/modules/_svgAnimation.js?");

/***/ }),

/***/ "./src/js/modules/_wowEffects.js":
/*!***************************************!*\
  !*** ./src/js/modules/_wowEffects.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   wowEffects: function() { return /* binding */ wowEffects; }\n/* harmony export */ });\nconst wowEffects = () => {\n  const ua = window.navigator.userAgent;\n  const wowInit = () => {\n    let wow = new WOW({\n      boxClass: 'wow',\n      animateClass: 'animated',\n      offset: 100,\n      mobile: true,\n      live: true,\n      callback: function (box) {},\n      scrollContainer: null,\n    });\n    wow.init();\n  };\n\n  // IE Browser\n  if (ua.indexOf('Trident') != -1 || ua.indexOf('MSIE') != -1) {\n    $(window).on('load', (e) => {\n      wowInit();\n    });\n  } else {\n    wowInit();\n  }\n};\n\n\n//# sourceURL=webpack://portfolio2021/./src/js/modules/_wowEffects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;