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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// object stores all must have html elements and utility functions of project\n// functions and classes called by backenders need to be referenced to this object too\n//i.e. lazyimage, and ajax callbacks\nwindow.DOM = {\n  // fix: escape bitrix bug with body selection\n  body: document.querySelector('body.body'),\n  html: document.documentElement,\n  docLang: document.documentElement.getAttribute('lang'),\n  passiveSupported: false,\n  bodyScrollTop: null,\n  scrollWidth: null,\n  // need to be called on page load\n  getScrollWidth: function getScrollWidth() {\n    // Узнаем ширину скролл панели\n    var div = document.createElement('div');\n    div.style.overflowY = 'scroll';\n    div.style.width = '50px';\n    div.style.height = '50px';\n    div.style.visibility = 'hidden';\n    this.html.appendChild(div);\n    this.scrollWidth = div.offsetWidth - div.clientWidth;\n    this.html.removeChild(div);\n  },\n  checkPassive: function checkPassive() {\n    try {\n      var options = Object.defineProperty({}, 'passive', {\n        get: function get() {\n          window.DOM.passiveSupported = true;\n        }\n      });\n      window.addEventListener('test', null, options);\n    } catch (err) {}\n  },\n  hideScroll: function hideScroll() {\n    if (this.body.offsetHeight < this.body.scrollHeight) {\n      this.body.style.paddingRight = this.scrollWidth + 'px';\n    }\n    this.bodyScrollTop = window.pageYOffset;\n    this.body.style.top = -this.bodyScrollTop + 'px';\n    window.scroll(0, this.bodyScrollTop);\n    this.body.classList.add('modal_open');\n    // for sticky-kit\n    if (this.stick) this.stick.trigger('sticky_kit:recalc');\n  },\n  passiveOrNot: function passiveOrNot() {\n    return window.DOM.passiveSupported ? { passive: true } : false;\n  },\n  showScroll: function showScroll() {\n    this.body.classList.remove('modal_open');\n    this.bodyScrollTop && window.scroll(0, this.bodyScrollTop);\n    this.bodyScrollTop = null;\n    this.body.style.paddingRight = '';\n    // for sticky-kit\n    if (this.stick) this.stick.trigger('sticky_kit:recalc');\n  },\n  addListenerMulti: function addListenerMulti(el, s, fn) {\n    s.split(' ').forEach(function (e) {\n      return el.addEventListener(e, fn, window.DOM.passiveOrNot());\n    });\n  }\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL2RvbUNvbmYuanM/YWZhNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBvYmplY3Qgc3RvcmVzIGFsbCBtdXN0IGhhdmUgaHRtbCBlbGVtZW50cyBhbmQgdXRpbGl0eSBmdW5jdGlvbnMgb2YgcHJvamVjdFxyXG4vLyBmdW5jdGlvbnMgYW5kIGNsYXNzZXMgY2FsbGVkIGJ5IGJhY2tlbmRlcnMgbmVlZCB0byBiZSByZWZlcmVuY2VkIHRvIHRoaXMgb2JqZWN0IHRvb1xyXG4vL2kuZS4gbGF6eWltYWdlLCBhbmQgYWpheCBjYWxsYmFja3Ncclxud2luZG93LkRPTSA9IHtcclxuICAvLyBmaXg6IGVzY2FwZSBiaXRyaXggYnVnIHdpdGggYm9keSBzZWxlY3Rpb25cclxuICBib2R5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5LmJvZHknKSxcclxuICBodG1sOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXHJcbiAgZG9jTGFuZzogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnbGFuZycpLFxyXG4gIHBhc3NpdmVTdXBwb3J0ZWQ6IGZhbHNlLFxyXG4gIGJvZHlTY3JvbGxUb3A6IG51bGwsXHJcbiAgc2Nyb2xsV2lkdGg6IG51bGwsXHJcbiAgLy8gbmVlZCB0byBiZSBjYWxsZWQgb24gcGFnZSBsb2FkXHJcbiAgZ2V0U2Nyb2xsV2lkdGg6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8g0KPQt9C90LDQtdC8INGI0LjRgNC40L3RgyDRgdC60YDQvtC70Lsg0L/QsNC90LXQu9C4XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcclxuICAgIGRpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcclxuICAgIGRpdi5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XHJcbiAgICBkaXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgdGhpcy5odG1sLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICB0aGlzLnNjcm9sbFdpZHRoID0gZGl2Lm9mZnNldFdpZHRoIC0gZGl2LmNsaWVudFdpZHRoO1xyXG4gICAgdGhpcy5odG1sLnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgfSxcclxuICBjaGVja1Bhc3NpdmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xyXG4gICAgICAgIGdldDogKCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93LkRPTS5wYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIG9wdGlvbnMpO1xyXG4gICAgfSBjYXRjaChlcnIpIHt9XHJcbiAgfSxcclxuICBoaWRlU2Nyb2xsOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmJvZHkub2Zmc2V0SGVpZ2h0IDwgdGhpcy5ib2R5LnNjcm9sbEhlaWdodCkge1xyXG4gICAgICB0aGlzLmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5zY3JvbGxXaWR0aCArICdweCc7XHJcbiAgICB9XHJcbiAgICB0aGlzLmJvZHlTY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICB0aGlzLmJvZHkuc3R5bGUudG9wID0gLXRoaXMuYm9keVNjcm9sbFRvcCArICdweCc7XHJcbiAgICB3aW5kb3cuc2Nyb2xsKDAsIHRoaXMuYm9keVNjcm9sbFRvcCk7XHJcbiAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWxfb3BlbicpO1xyXG4gICAgLy8gZm9yIHN0aWNreS1raXRcclxuICAgIGlmKHRoaXMuc3RpY2spIHRoaXMuc3RpY2sudHJpZ2dlcignc3RpY2t5X2tpdDpyZWNhbGMnKTtcclxuICB9LFxyXG4gIHBhc3NpdmVPck5vdDogKCkgPT4ge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5ET00ucGFzc2l2ZVN1cHBvcnRlZCA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XHJcbiAgfSxcclxuICBzaG93U2Nyb2xsOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9vcGVuJyk7XHJcbiAgICB0aGlzLmJvZHlTY3JvbGxUb3AgJiYgKHdpbmRvdy5zY3JvbGwoMCwgdGhpcy5ib2R5U2Nyb2xsVG9wKSk7XHJcbiAgICB0aGlzLmJvZHlTY3JvbGxUb3AgPSBudWxsO1xyXG4gICAgdGhpcy5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xyXG4gICAgLy8gZm9yIHN0aWNreS1raXRcclxuICAgIGlmKHRoaXMuc3RpY2spIHRoaXMuc3RpY2sudHJpZ2dlcignc3RpY2t5X2tpdDpyZWNhbGMnKTtcclxuICB9LFxyXG4gIGFkZExpc3RlbmVyTXVsdGkoZWwsIHMsIGZuKSB7XHJcbiAgICBzLnNwbGl0KCcgJykuZm9yRWFjaChlID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoZSwgZm4sIHdpbmRvdy5ET00ucGFzc2l2ZU9yTm90KCkpKTtcclxuICB9LFxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2xpYi9kb21Db25mLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQXREQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(0);\n\nvar _menu = __webpack_require__(2);\n\nvar _menu2 = _interopRequireDefault(_menu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// async() => {\n//   $('#app').append('<p>adaasdkajlsdjalkajlkdjasda</p>');\n//   hello();\n// };\ndocument.addEventListener('DOMContentLoaded', function () {\n  // get scrollbar width\n  window.DOM.getScrollWidth();\n  window.DOM.checkPassive();\n  console.log(window.DOM.passiveSupported);\n  (0, _menu2.default)();\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2xpYi9kb21Db25mJztcclxuaW1wb3J0IG1lbnUgZnJvbSAnLi9saWIvbWVudSc7XHJcblxyXG4vLyBhc3luYygpID0+IHtcclxuLy8gICAkKCcjYXBwJykuYXBwZW5kKCc8cD5hZGFhc2RrYWpsc2RqYWxrYWpsa2RqYXNkYTwvcD4nKTtcclxuLy8gICBoZWxsbygpO1xyXG4vLyB9O1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywoKSA9PiB7XHJcbiAgLy8gZ2V0IHNjcm9sbGJhciB3aWR0aFxyXG4gIHdpbmRvdy5ET00uZ2V0U2Nyb2xsV2lkdGgoKTtcclxuICB3aW5kb3cuRE9NLmNoZWNrUGFzc2l2ZSgpO1xyXG4gIGNvbnNvbGUubG9nKHdpbmRvdy5ET00ucGFzc2l2ZVN1cHBvcnRlZCk7XHJcbiAgbWVudSgpO1xyXG4gIFxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = menu;\n\n__webpack_require__(0);\n\nfunction menu() {\n  // simpliest menu example\n  function toggleClassMenu() {\n    if (!myMenu.classList.contains('menu--animatable')) {\n      myMenu.classList.add('menu--animatable');\n      if (!myMenu.classList.contains('menu--visible')) {\n        window.DOM.hideScroll();\n        myMenu.classList.add('menu--visible');\n        oppMenu.classList.add('active');\n      } else {\n        myMenu.classList.remove('menu--visible');\n        oppMenu.classList.remove('active');\n        window.DOM.showScroll();\n      }\n    }\n  }\n  function preventClick(event) {\n    event.stopPropagation();\n  }\n  function OnTransitionEnd() {\n    myMenu.classList.remove('menu--animatable');\n  }\n\n  var myMenu = document.querySelector('.menu');\n  var oppMenu = document.querySelector('.menu-icon');\n  var menuContent = document.querySelector('.app-menu');\n  myMenu.addEventListener('transitionend', OnTransitionEnd, false);\n  // using passive events\n  oppMenu.addEventListener('click', toggleClassMenu, window.DOM.passiveOrNot());\n  myMenu.addEventListener('click', toggleClassMenu, window.DOM.passiveOrNot());\n  menuContent.addEventListener('click', preventClick, false);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL21lbnUuanM/ODNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZG9tQ29uZic7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XHJcbiAgLy8gc2ltcGxpZXN0IG1lbnUgZXhhbXBsZVxyXG4gIGZ1bmN0aW9uIHRvZ2dsZUNsYXNzTWVudSgpIHtcclxuICAgIGlmKCFteU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LS1hbmltYXRhYmxlJykpIHsgICBcclxuICAgICAgbXlNZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtLWFuaW1hdGFibGUnKTsgXHJcbiAgICAgIGlmKCFteU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LS12aXNpYmxlJykpIHsgXHJcbiAgICAgICAgd2luZG93LkRPTS5oaWRlU2Nyb2xsKCk7ICBcclxuICAgICAgICBteU1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudS0tdmlzaWJsZScpO1xyXG4gICAgICAgIG9wcE1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbXlNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtLXZpc2libGUnKTtcclxuICAgICAgICBvcHBNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHdpbmRvdy5ET00uc2hvd1Njcm9sbCgpOyAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBwcmV2ZW50Q2xpY2soZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBPblRyYW5zaXRpb25FbmQoKSB7XHJcbiAgICBteU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS0tYW5pbWF0YWJsZScpO1xyXG4gIH1cclxuXHJcbiAgbGV0IG15TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XHJcbiAgbGV0IG9wcE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uJyk7XHJcbiAgbGV0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1tZW51Jyk7XHJcbiAgbXlNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBPblRyYW5zaXRpb25FbmQsIGZhbHNlKTtcclxuICAvLyB1c2luZyBwYXNzaXZlIGV2ZW50c1xyXG4gIG9wcE1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVDbGFzc01lbnUsIHdpbmRvdy5ET00ucGFzc2l2ZU9yTm90KCkpO1xyXG4gIG15TWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNsYXNzTWVudSwgd2luZG93LkRPTS5wYXNzaXZlT3JOb3QoKSk7XHJcbiAgbWVudUNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2ZW50Q2xpY2ssIGZhbHNlKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2xpYi9tZW51LmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);