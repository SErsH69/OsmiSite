/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main_page": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main_page.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/application-form/application-form.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/application-form/application-form.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var applicationForm = /*#__PURE__*/function () {
  function ApplicationForm() {
    _classCallCheck(this, ApplicationForm);
  }

  _createClass(ApplicationForm, [{
    key: "openForm",
    value: function openForm() {
      document.querySelector('.application-form').classList.add('isOpened');
    }
  }, {
    key: "closeForm",
    value: function closeForm() {
      document.querySelector('.application-form').classList.remove('isOpened');
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!document.querySelector('.application-form') || !document.querySelector('.call-to-action-button a.button') && !document.querySelector('.web-slider-button button.button')) return;

      if (window.innerWidth > 1023) {
        document.querySelector('.call-to-action-button a.button').addEventListener('click', function (event) {
          event.preventDefault();

          _this.openForm();
        });
      } else {
        document.querySelectorAll('.web-slider-button button.button').forEach(function (item) {
          item.addEventListener('click', function (event) {
            event.preventDefault();

            _this.openForm();
          });
        });
      }

      document.querySelector('.application-form__form-closer').addEventListener('click', function (event) {
        event.preventDefault();

        _this.closeForm();
      });
    }
  }]);

  return ApplicationForm;
}();

/* harmony default export */ __webpack_exports__["default"] = (applicationForm);

/***/ }),

/***/ "./src/blocks/modules/cases/cases.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/cases/cases.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var casesUpdated = /*#__PURE__*/function () {
  function CasesUpdated() {
    _classCallCheck(this, CasesUpdated);
  }

  _createClass(CasesUpdated, [{
    key: "bioline",
    value: function bioline() {
      if (!document.querySelector('.cases__item.bioline')) return;
      document.querySelectorAll('.cases__item.bioline').forEach(function (item) {
        item.addEventListener('mousemove', function (event) {
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(item.querySelector('.bioline__image--hidden'), {
            'clip-path': "polygon(0% 0%, ".concat(event.offsetX, "px 0%, ").concat(event.offsetX, "px 100%, 0% 100%)")
          });
        });
        item.addEventListener('mouseleave', function (event) {
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(item.querySelector('.bioline__image--hidden'), {
            'clip-path': "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
          });
        });
      });
    }
  }, {
    key: "medex",
    value: function medex() {
      var figure = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".medex");
      var vid = figure.find("video");
      [].forEach.call(figure, function (item, index) {
        item.addEventListener('mouseover', hoverVideo.bind(item, index), false);
        item.addEventListener('mouseout', hideVideo.bind(item, index), false);
      });

      function hoverVideo(index, e) {
        vid[index].play();
      }

      function hideVideo(index, e) {
        vid[index].pause();
      }
    }
  }, {
    key: "setParalax",
    value: function setParalax() {
      document.querySelectorAll('.cases__item[data-is_paralaxed]').forEach(function (item) {
        item.addEventListener('mousemove', function (event) {
          item.querySelectorAll('[data-speed]').forEach(function (elem) {
            gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(elem, {
              x: event.offsetX / elem.dataset.speed,
              y: event.offsetY / elem.dataset.speed
            });
          });
        });
      });
    }
  }, {
    key: "loadModel",
    value: function loadModel(url) {
      return new Promise(function (resolve, reject) {
        var manager = new THREE.LoadingManager();
        var loader = new THREE.GLTFLoader(manager);
        loader.load(url, function (gltf) {
          resolve(gltf.scene);
        });
      });
    }
  }, {
    key: "duplicateTitle",
    value: function duplicateTitle() {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.cases__item .cases__item-title').each(function () {
        var text = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).text();

        if (window.innerWidth > 1023) {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).html("<div class=\"cases__item-title--forslide cases__item-title--top\">".concat(text, "</div><div class=\"cases__item-title--forslide cases__item-title--bottom\">").concat(text, "</div>"));
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (!document.querySelector('.cases__items') || window.innerWidth <= 1024) return;
      this.bioline();
      this.medex();
      this.setParalax();
      this.duplicateTitle(); // this.medex();
    }
  }]);

  return CasesUpdated;
}();

/* harmony default export */ __webpack_exports__["default"] = (casesUpdated);

/***/ }),

/***/ "./src/blocks/modules/cookie-form/cookie-form.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/cookie-form/cookie-form.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var cookiesForm = /*#__PURE__*/function () {
  function cookiesForm() {
    _classCallCheck(this, cookiesForm);

    this.isClosedOnce = false;
  }

  _createClass(cookiesForm, [{
    key: "checkIfFormClosedOnce",
    value: function checkIfFormClosedOnce() {
      if (localStorage.getItem('cookiesFormOnceClosed') == 'true') {
        this.isClosedOnce = true;
      }
    }
  }, {
    key: "closeForm",
    value: function closeForm() {
      localStorage.setItem('cookiesFormOnceClosed', true);
      this.checkIfFormClosedOnce();
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      // localStorage.setItem('cookiesFormOnceClosed', false);
      this.checkIfFormClosedOnce();
      document.querySelector('.cookie-form__button').addEventListener('click', function () {
        _this.closeForm();
      });
    }
  }]);

  return cookiesForm;
}();

/* harmony default export */ __webpack_exports__["default"] = (cookiesForm);

/***/ }),

/***/ "./src/blocks/modules/cursor-animation/cursor-animation.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/cursor-animation/cursor-animation.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var cursorAnimation = /*#__PURE__*/function () {
  function CursorAnimation() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      count: 100,
      colors: ['#FF4978', '#430A66'],
      radius: 40,
      speed: 1,
      lifetime: 150,
      element: 'cursor'
    };

    _classCallCheck(this, CursorAnimation);

    this.params = params;
    this.circles = [];
  }

  _createClass(CursorAnimation, [{
    key: "setCanvasSize",
    value: function setCanvasSize() {
      return this.params;
    }
  }, {
    key: "createCanvas",
    value: function createCanvas() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (document.getElementById(_this.params.element)) {
          resolve({
            canvas: _this.canvas = document.getElementById(_this.params.element),
            ctx: _this.canvas ? _this.ctx = _this.canvas.getContext('2d') : null,
            width: _this.width = _this.canvas.width = document.querySelector('.first-frame').clientWidth,
            height: _this.height = _this.canvas.height = document.querySelector('.first-frame').clientHeight
          });
        } else {
          reject(new Error('params.element is not defined'));
        }

        _this.gradient = _this.ctx.createLinearGradient(0, 0, window.innerWidth, 0);

        for (var i = 0; i < _this.params.colors.length; i++) {
          _this.gradient.addColorStop(i, _this.params.colors[i]);
        }
      });
    }
  }, {
    key: "updateCanvasSize",
    value: function updateCanvasSize() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (_this2.canvas && _this2.ctx) {
          return resolve({
            width: _this2.width = _this2.canvas.width = document.querySelector('.first-frame').clientWidth,
            height: _this2.height = _this2.canvas.height = document.querySelector('.first-frame').clientHeight
          });
        }
      });
    }
  }, {
    key: "pushCircleObject",
    value: function pushCircleObject(x, y) {
      var circle = {
        x: x,
        y: y,
        lifetime: this.params.radius,
        radius: this.params.radius
      };
      this.circles.push(circle);
    }
  }, {
    key: "animate",
    value: function animate(_ref) {
      var x = _ref.x,
          y = _ref.y;
      if (!this.canvas) return;
      this.pushCircleObject(x, y);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = this.gradient;
      this.ctx.strokeStyle = this.gradient; // this.ctx.drawImage(this.params.shape, 0, 0, this.canvas.width, this.canvas.height);

      for (var i = 1; i < this.circles.length; i++) {
        this.circles[i].lifetime -= this.params.speed;

        if (this.circles[i].lifetime <= 0) {
          this.circles.splice(i, 1);
        }

        if (this.circles[i] && this.circles[i + 1]) {
          this.ctx.lineWidth = this.circles[i].radius * 2;
          this.ctx.beginPath();
          this.ctx.moveTo(this.circles[i + 1].x, this.circles[i + 1].y);
          this.ctx.lineTo(this.circles[i].x, this.circles[i].y);
          this.ctx.stroke();
          this.ctx.closePath();
          this.ctx.beginPath();
          this.ctx.arc(this.circles[i].x, this.circles[i].y, this.circles[i].radius, 0, Math.PI * 2);
          this.ctx.closePath();
          this.ctx.fill();
        }
      }

      this.onAnimate();
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      this.createCanvas().then(function () {
        _this3.onInit();
      })["catch"](function (error) {// console.warn(error)
      });
    }
  }, {
    key: "onInit",
    value: function onInit() {}
  }, {
    key: "onAnimate",
    value: function onAnimate() {}
  }]);

  return CursorAnimation;
}();

/* harmony default export */ __webpack_exports__["default"] = (cursorAnimation);

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var footer = /*#__PURE__*/function () {
  function Footer() {
    _classCallCheck(this, Footer);
  }

  _createClass(Footer, [{
    key: "copyText",
    value: function copyText(_ref) {
      var text = _ref.text;
      navigator.clipboard.writeText(text);
    }
  }]);

  return Footer;
}();

/* harmony default export */ __webpack_exports__["default"] = (footer);

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);

    this.countedWidth = 0;
    this.self = this;
    this.isOpened = false;
    this.isPhonesOpened = false; // this.setHeaderWavePositionOnLoad();
  }

  _createClass(Header, [{
    key: "openMobileHeader",
    value: function openMobileHeader() {
      this.isOpened = !this.isOpened;
      this.isPhonesOpened = false;
      document.querySelector('html').classList.toggle('overflowed');
    }
  }, {
    key: "openPhonesModal",
    value: function openPhonesModal() {
      this.isPhonesOpened = !this.isPhonesOpened;
      this.isOpened = false;
    }
  }, {
    key: "closePhonesModal",
    value: function closePhonesModal() {
      // if (window.innerWidth > 1023) {
      this.isPhonesOpened = false;
      document.querySelector('html').classList.remove('overflowed'); // }
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.header-logo', {
        scrollTrigger: {
          trigger: '.wrapper',
          start: 'top top',
          end: 'top+=400 top',
          scrub: 1 // markers: true,

        },
        width: function width() {
          if (document.querySelector('.en-version')) {
            return 120 * 100 / window.innerWidth + 'vw';
          } else {
            return 200 * 100 / window.innerWidth + 'vw';
          }
        },
        onComplete: function onComplete() {
          _this.logoAnimationComplete();
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.header-in', {
        scrollTrigger: {
          trigger: '.wrapper',
          start: 'top top',
          end: 'top+=400 top',
          scrub: 0 // markers: true,

        },
        paddingTop: function paddingTop() {
          //return 10 * 100 / window.innerWidth + 'vw'
          return 1 * 100 / window.innerWidth + 'vw';
        },
        paddingBottom: function paddingBottom() {
          //return 10 * 100 / window.innerWidth + 'vw'
          return 1 * 100 / window.innerWidth + 'vw';
        },
        onComplete: function onComplete() {
          _this.headerInAnimationComplete();
        }
      });
      this.setHeaderWavePositionOnLoad();
      this.onInit();

      if (document.querySelector('.header-phone_opener')) {
        document.querySelector('.header-phone_opener').addEventListener('click', function () {
          _this.openPhonesModal();
        });
        document.querySelector('.header-phone_modal_closer').addEventListener('click', function (event) {
          event.stopPropagation();

          _this.closePhonesModal();
        });
        document.addEventListener('click', function (event) {
          if (!event.target.closest('.header-phone_opener')) {
            _this.closePhonesModal();
          }
        });
      }
    }
  }, {
    key: "onInit",
    value: function onInit() {
      if (!document.querySelector('.header-mobile-menu')) return;
    }
  }, {
    key: "logoAnimationComplete",
    value: function logoAnimationComplete() {}
  }, {
    key: "headerInAnimationComplete",
    value: function headerInAnimationComplete() {}
  }, {
    key: "setHeaderWavePositionOnLoad",
    value: function setHeaderWavePositionOnLoad() {
      if (document.querySelector('.header-menu li.isActive')) {
        var active_menu = document.querySelector('.header-menu li.isActive');
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.header-menu-border', {
          left: active_menu.offsetLeft,
          width: active_menu.offsetWidth,
          right: 'auto'
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.header-menu-wave', {
          left: active_menu.offsetLeft + active_menu.offsetWidth / 2
        });
      }
    }
  }, {
    key: "setHeaderWavePosition",
    value: function setHeaderWavePosition() {
      // gsap.to('.header-menu-wave', {
      //     left: event.target.offsetLeft + event.target.offsetWidth / 2
      // })
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.header-menu-border', {
        left: event.target.offsetLeft,
        width: event.target.offsetWidth,
        right: 'auto'
      });
    }
  }]);

  return Header;
}();

/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./src/blocks/modules/main-about/main-about.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/main-about/main-about.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.es.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);

var mainAbout = /*#__PURE__*/function () {
  function MainAbout() {
    _classCallCheck(this, MainAbout);

    this.player;
  }

  _createClass(MainAbout, [{
    key: "openVideoModal",
    value: function openVideoModal() {
      document.querySelector('.video-modal').classList.add('isOpened');
      this.player.play();
    }
  }, {
    key: "closeVideoModal",
    value: function closeVideoModal() {
      document.querySelector('.video-modal').classList.remove('isOpened');
      this.player.pause();
    }
  }, {
    key: "initVideoOpening",
    value: function initVideoOpening() {
      var _this = this;

      if (!document.querySelector('.main-about-play')) return;
      document.querySelector('.main-about-play').addEventListener('click', function () {
        _this.openVideoModal();
      });
      document.querySelector('.video-modal').addEventListener('click', function () {
        _this.closeVideoModal();
      });
      this.player = document.getElementById('player_modal');
      Object(video_js__WEBPACK_IMPORTED_MODULE_2__["default"])('player_modal', {
        fluid: true,
        controls: false,
        // autoplay: true,
        aspectRatio: '16:7',
        // muted: true,
        poster: 'img/video_preview.png',
        sources: [{
          src: 'videos/pv.mp4',
          type: 'video/mp4'
        }]
      });
    }
  }, {
    key: "onCircleAnimationEnd",
    value: function onCircleAnimationEnd() {}
  }, {
    key: "animateCircle",
    value: function animateCircle() {
      if (!document.querySelector('.main-about')) return;
      var self = this;

      if (window.innerWidth > 1023) {
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.main-about-circle', {
          scrollTrigger: {
            trigger: '.trigger-wrapper-about',
            start: 'top top',
            end: 'top+=400 top',
            scrub: 1 // markers: true

          },
          width: function width() {
            return 7200 * 100 / window.innerWidth + 'vw';
          },
          height: function height() {
            return 4900 * 100 / window.innerWidth + 'vw';
          },
          onComplete: function onComplete() {
            self.onCircleAnimationEnd();
          }
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.main-about-title', {
          scrollTrigger: {
            trigger: '.trigger-wrapper-about',
            start: 'top+=600 top',
            end: 'top+=1000 top',
            scrub: 1
          },
          y: function y() {
            return -100 * 100 / window.innerWidth + 'vw';
          },
          color: '#afa3a3'
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.main-about-name', {
          scrollTrigger: {
            trigger: '.trigger-wrapper-about',
            start: 'top+=500 top',
            end: 'top+=900 top',
            scrub: 1
          },
          y: function y() {
            return -350 * 100 / window.innerWidth + 'vw';
          }
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.main-about-text', {
          scrollTrigger: {
            trigger: '.trigger-wrapper-about',
            start: 'top+=530 top',
            end: 'top+=930 top',
            scrub: 1
          },
          y: function y() {
            return -350 * 100 / window.innerWidth + 'vw';
          }
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.main-about-video-shadow', {
          scrollTrigger: {
            trigger: '.trigger-wrapper-about',
            start: 'top+=530 top',
            end: 'top+=930 top',
            scrub: 1
          },
          left: 0,
          top: 0
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.main-about-video', {
          scrollTrigger: {
            trigger: '.trigger-wrapper-about',
            start: 'top+=560 top',
            end: 'top+=960 top',
            scrub: 1
          },
          y: function y() {
            return -350 * 100 / window.innerWidth + 'vw';
          }
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.main-about-advantages', {
          scrollTrigger: {
            trigger: '.trigger-wrapper-about',
            start: 'top top',
            end: 'bottom center',
            scrub: 1,
            // markers: true,
            pin: true // pinSpacing: false

          },
          right: '100%'
        });
      }
    }
  }]);

  return MainAbout;
}();

/* harmony default export */ __webpack_exports__["default"] = (mainAbout);

/***/ }),

/***/ "./src/blocks/modules/main-carousel/main-carousel.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/main-carousel/main-carousel.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! interactjs */ "./node_modules/interactjs/dist/interact.min.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var mainCarousel = /*#__PURE__*/function () {
  function MainCarousel() {
    _classCallCheck(this, MainCarousel);
  }

  _createClass(MainCarousel, [{
    key: "onCarouselChange",
    value: function onCarouselChange() {}
  }, {
    key: "init",
    value: function init() {
      var self = this;
      var carousel = document.querySelector('.main-carousel-carousel');
      if (!carousel) return;
      var cells = carousel.querySelectorAll('.main-carousel-cell');
      var cellCount; // cellCount set from cells-range input value

      var selectedIndex = 0;
      var cellWidth = carousel.offsetWidth;
      var cellHeight = carousel.offsetHeight;
      var isHorizontal = true;
      var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
      var radius, theta;
      var maxTitlesHeight = Math.max.apply(null, jquery__WEBPACK_IMPORTED_MODULE_2___default()(".main-carousel__text-item_titles .title").map(function () {
        return jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).height();
      }).get());
      var maxTextsHeight = Math.max.apply(null, jquery__WEBPACK_IMPORTED_MODULE_2___default()(".main-carousel__text-item_texts .text").map(function () {
        return jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).height();
      }).get());

      function rotateCarousel() {
        self.onCarouselChange();
        var angle = theta * selectedIndex * -1;
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".main-carousel__text-item_gifts .badge").css({
          'transform': "translateY(-50%) translateX(50%) rotate(".concat(angle, "deg)")
        });
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".main-carousel__text-item_gifts .badge").text(Math.round(360 / cellCount * (selectedIndex % cellCount)));
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".main-carousel__grades .from").text(Math.round(360 / cellCount * (selectedIndex % cellCount)));

        if (Math.round(360 / cellCount * (selectedIndex % cellCount)) < 0) {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(".main-carousel__grades .from").text(Math.round(360 / cellCount * (selectedIndex % cellCount)) * -1);
        }

        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".main-carousel__text-item_gifts .left__in").css({
          'transform': "rotate(".concat(angle * -1, "deg)")
        });
        carousel.style.transform = 'translateZ(' + -radius + 'px) ' + rotateFn + '(' + angle + 'deg)';
        var cells = carousel.querySelectorAll('.main-carousel-cell');
        document.querySelectorAll(".main-carousel__text-item_titles .title").forEach(function (item) {
          item.classList.remove('isActive');
        });

        if (document.querySelector(".main-carousel__text-item_titles .title[data-title-id=\"".concat(selectedIndex % cellCount + 1, "\"]"))) {
          document.querySelector(".main-carousel__text-item_titles .title[data-title-id=\"".concat(selectedIndex % cellCount + 1, "\"]")).classList.add('isActive');
        }

        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelectorAll(".main-carousel__text-item_titles"), {
          height: maxTitlesHeight
        });
        document.querySelectorAll(".main-carousel__text-item_texts .text").forEach(function (item) {
          item.classList.remove('isActive');
        });

        if (document.querySelector(".main-carousel__text-item_texts .text[data-text-id=\"".concat(selectedIndex % cellCount + 1, "\"]"))) {
          document.querySelector(".main-carousel__text-item_texts .text[data-text-id=\"".concat(selectedIndex % cellCount + 1, "\"]")).classList.add('isActive');
        }

        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelectorAll(".main-carousel__text-item_texts"), {
          height: maxTextsHeight
        }); // $(`.main-carousel__text-item_gifts .gift`).each(function() {
        //     $(this).hide('fast');
        // }) 
        // $(`.main-carousel__text-item_gifts .gift[data-gift-id="${(selectedIndex+1) % +cellCount}"]`).show('fast');
        // document.querySelector(`.main-carousel__text-item_titles .title[data-title-id="${selectedIndex}"]`).classList.add('isActive');
      }

      var prevButton = document.querySelector('.previous-button');
      prevButton.addEventListener('click', function () {
        selectedIndex--;
        rotateCarousel();
        clearInterval(interval);
      });
      var nextButton = document.querySelector('.next-button');
      nextButton.addEventListener('click', function () {
        selectedIndex++;
        rotateCarousel();
        clearInterval(interval);
      });
      var cellsRange = document.querySelector('.cells-range');
      cellsRange.addEventListener('change', changeCarousel);
      cellsRange.addEventListener('input', changeCarousel);

      function changeCarousel() {
        cellCount = cellsRange.value;
        theta = 360 / cellCount;
        var cellSize = isHorizontal ? cellWidth : cellHeight;
        radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));

        for (var i = 0; i < cells.length; i++) {
          var cell = cells[i];

          if (i < cellCount) {
            // visible cell
            cell.style.opacity = 1;
            var cellAngle = theta * i;
            cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
          } else {
            // hidden cell
            cell.style.opacity = 0;
            cell.style.transform = 'none';
          }
        }

        rotateCarousel();
      }

      var orientationRadios = document.querySelectorAll('input[name="orientation"]');

      (function () {
        for (var i = 0; i < orientationRadios.length; i++) {
          var radio = orientationRadios[i];
          radio.addEventListener('change', onOrientationChange);
        }
      })();

      function onOrientationChange() {
        var checkedRadio = document.querySelector('input[name="orientation"]:checked');
        isHorizontal = checkedRadio.value == 'horizontal';
        rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
        changeCarousel();
      }

      function chooseElem(index) {
        if (selectedIndex == index) return;
        selectedIndex = index;
        rotateCarousel();
      }

      document.addEventListener('click', function (event) {
        if (event.target.dataset.cellIndex) {
          chooseElem(event.target.dataset.cellIndex - 1);
          clearInterval(interval);
        }
      });
      var interval = setInterval(function () {
        selectedIndex++;
        rotateCarousel();
      }, 5000); // set initials

      onOrientationChange();
      var starCoord = 0;

      if (window.innerWidth <= 1023) {
        interactjs__WEBPACK_IMPORTED_MODULE_1___default()('.main-carousel').draggable({
          origin: 'self',
          inertia: true,
          listeners: {
            move: function move(event) {}
          }
        }).on('dragstart', function (event) {
          starCoord = event.clientX;
        }).on('dragend', function (event) {
          if (starCoord > event.clientX) {
            selectedIndex++;
            rotateCarousel();
            clearInterval(interval);
          } else {
            selectedIndex--;
            rotateCarousel();
            clearInterval(interval);
          }
        });
      }
    }
  }]);

  return MainCarousel;
}();

/* harmony default export */ __webpack_exports__["default"] = (mainCarousel);

/***/ }),

/***/ "./src/blocks/modules/main-cases/main-cases.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/main-cases/main-cases.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery_marquee__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery.marquee */ "./node_modules/jquery.marquee/jquery.marquee.min.js");
/* harmony import */ var jquery_marquee__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery_marquee__WEBPACK_IMPORTED_MODULE_5__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }







jquery__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  if (window.innerWidth <= 1023) {
    if (document.querySelector('.js_sl')) {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.js_sl').slick({
        dots: false,
        arrows: true,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1
      });
    }
  }

  if (window.innerWidth <= 1366 && window.innerWidth > 1023 || window.innerWidth > 1440) {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.marquee-js').marquee({
      //duration in milliseconds of the marquee
      duration: 10000,
      //gap in pixels between the tickers
      gap: 100,
      //time in milliseconds before the marquee will start animating
      delayBeforeStart: 0,
      //'left' or 'right'
      direction: 'left',
      //true or false - should the marquee be duplicated to show an effect of continues flow
      duplicated: true
    });
  }
});
jquery__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  if (window.innerWidth <= 1366 && window.innerWidth > 1023 || window.innerWidth > 1440) {
    window.addEventListener("scroll", function (event) {
      var top = this.pageYOffset;
      var layers = jquery__WEBPACK_IMPORTED_MODULE_3___default()(".paralax_layer");
      var speed, yPos;
      layers.each(function () {
        speed = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).attr('data-speed');
        var yPos = -(top * speed / 100);
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).attr('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
      });
    });
  }
});
gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);

var mainCases = /*#__PURE__*/function () {
  function MainCases(_ref) {
    var itemsClass = _ref.itemsClass;

    _classCallCheck(this, MainCases);

    this.itemsClass = itemsClass;
    this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.main-cases-slider', {
      type: 'carousel',
      startAt: 1,
      perView: 1,
      gap: 0
    });
  }

  _createClass(MainCases, [{
    key: "initMobileSlider",
    value: function initMobileSlider() {
      if (!document.querySelector('.main-cases-slider')) return;
      this.slider.mount();
    }
  }, {
    key: "destroyMobileSlider",
    value: function destroyMobileSlider() {
      if (!document.querySelector('.main-cases-slider')) return;
      this.slider.destroy();
    }
  }, {
    key: "onInit",
    value: function onInit() {}
  }, {
    key: "onAnimationStart",
    value: function onAnimationStart() {}
  }, {
    key: "onAnimationEnd",
    value: function onAnimationEnd() {}
  }, {
    key: "init",
    value: function init() {
      if (window.innerWidth <= 1366 && window.innerWidth > 1023 || window.innerWidth > 1440) {// if (document.querySelector('.case_page__prot')) {
        //    setTimeout(() => {
        //         gsap.to('.case_page__prot--title', {
        //             scrollTrigger: {
        //                 trigger: '.case_page__prot',
        //                 start: 'top top',
        //                 end: 'bottom bottom-=1000',
        //                 scrub: 11,
        //                 // markers: true,
        //                 onUpdate: (item) => {
        //                     if (item.progress > 0.05 && item.progress < 0.65) {
        //                         document.querySelector('.case_page__prot--title').classList.add('isInViewport');
        //                     } else {
        //                         document.querySelector('.case_page__prot--title').classList.remove('isInViewport');
        //                     }
        //                 }
        //             },
        //             x: '-100%',
        //         });
        //     }, 1000);
        // }
        // if (document.querySelector('.msite .case_page__reds')) {
        //    setTimeout(() => {
        //         gsap.to('.msite .case_page__reds--title', {
        //             scrollTrigger: {
        //                 trigger: '.msite .case_page__reds',
        //                 start: '-=500',
        //                 end: '+=1000',
        //                 scrub: 11,
        //                 // markers: true,
        //                 onUpdate: (item) => {
        //                     if (item.progress > 0.05 && item.progress < 0.65) {
        //                         document.querySelector('.msite .case_page__reds--title').classList.add('isInViewport');
        //                     } else {
        //                         document.querySelector('.msite .case_page__reds--title').classList.remove('isInViewport');
        //                     }
        //                 }
        //             },
        //             x: '-100%',
        //         });
        //     }, 1000);
        // }
        // if (document.querySelector('.foot_task ')) {
        //    setTimeout(() => {
        //         gsap.to('.foot_task .case_page__bls--title', {
        //             scrollTrigger: {
        //                 trigger: '.foot_task',
        //                 start: '-=500',
        //                 end: '+=1000',
        //                 scrub: 11,
        //                 // markers: true,
        //                 onUpdate: (item) => {
        //                     if (item.progress > 0.05 && item.progress < 0.65) {
        //                         document.querySelector('.foot_task .case_page__bls--title').classList.add('isInViewport');
        //                     } else {
        //                         document.querySelector('.foot_task .case_page__bls--title').classList.remove('isInViewport');
        //                     }
        //                 }
        //             },
        //             x: '-100%',
        //         });
        //     }, 1000);
        // }
        // if (document.querySelector('.block_slks')) {
        //    setTimeout(() => {
        //         gsap.to('.block_slks .case_pec__title', {
        //             scrollTrigger: {
        //                 trigger: '.block_slks',
        //                 start: 'top top',
        //                 end: 'bottom bottom-=1000',
        //                 scrub: 11,
        //                 // markers: true,
        //                 onUpdate: (item) => {
        //                     if (item.progress > 0.05 && item.progress < 0.65) {
        //                         document.querySelector('.block_slks .case_pec__title').classList.add('isInViewport');
        //                     } else {
        //                         document.querySelector('.block_slks .case_pec__title').classList.remove('isInViewport');
        //                     }
        //                 }
        //             },
        //             x: '-100%',
        //         });
        //     }, 1000);
        // }
        // if (document.querySelector('.itm_new')) {
        //    setTimeout(() => {
        //         gsap.to('.itm_new .case_page__video--title', {
        //             scrollTrigger: {
        //                 trigger: '.itm_new',
        //                 start: 'top top',
        //                 end: 'bottom bottom-=1000',
        //                 scrub: 11,
        //                 // markers: true,
        //                 onUpdate: (item) => {
        //                     if (item.progress > 0.05 && item.progress < 0.65) {
        //                         document.querySelector('.itm_new .case_page__video--title').classList.add('isInViewport');
        //                     } else {
        //                         document.querySelector('.itm_new .case_page__video--title').classList.remove('isInViewport');
        //                     }
        //                 }
        //             },
        //             x: '-100%',
        //         });
        //     }, 1000);
        // }
        // if (document.querySelector('.msite .case_page__video')) {
        //    setTimeout(() => {
        //         gsap.to('.msite .case_page__video--title', {
        //             scrollTrigger: {
        //                 trigger: '.msite .case_page__video',
        //                 start: '-=500',
        //                 end: '+=1000',
        //                 scrub: 11,
        //                 // markers: true,
        //                 onUpdate: (item) => {
        //                     if (item.progress > 0.05 && item.progress < 0.65) {
        //                         document.querySelector('.msite .case_page__video--title').classList.add('isInViewport');
        //                     } else {
        //                         document.querySelector('.msite .case_page__video--title').classList.remove('isInViewport');
        //                     }
        //                 }
        //             },
        //             x: '-100%',
        //         });
        //     }, 1000);
        // }
        // if (document.querySelector('.gl_blocks')) {
        //     setTimeout(() => {
        //          gsap.to('.case_page__gl--title', {
        //              scrollTrigger: {
        //                  trigger: '.gl_blocks',
        //                  start: 'top top',
        //                  end: 'bottom bottom-=300',
        //                  scrub: 11,
        //                  // markers: true,
        //                  onUpdate: (item) => {
        //                      if (item.progress > 0.05 && item.progress < 0.65) {
        //                          document.querySelector('.case_page__gl--title').classList.add('isInViewport');
        //                      } else {
        //                          document.querySelector('.case_page__gl--title').classList.remove('isInViewport');
        //                      }
        //                  }
        //              },
        //              x: '-100%',
        //          });
        //      }, 1000);
        // }
        // if (document.querySelector('.case_page__about--work')) {
        //      setTimeout(() => {
        //           gsap.to('.case_page__about--wtitle', {
        //               scrollTrigger: {
        //                   trigger: '.case_page__about--work',
        //                   start: 'top top',
        //                   end: 'bottom bottom-=300',
        //                   scrub: 11,
        //                   // markers: true,
        //                   onUpdate: (item) => {
        //                       if (item.progress > 0.05 && item.progress < 0.65) {
        //                           document.querySelector('.case_page__about--wtitle').classList.add('isInViewport');
        //                       } else {
        //                           document.querySelector('.case_page__about--wtitle').classList.remove('isInViewport');
        //                       }
        //                   }
        //               },
        //               x: '-100%',
        //           });
        //       }, 1000);
        // }
        // if (document.querySelector('.frost .case_task')) {
        //      setTimeout(() => {
        //           gsap.to('.frost .case_page__bls--title', {
        //               scrollTrigger: {
        //                   trigger: '.frost .case_task',
        //                   start: 'top top',
        //                   end: 'bottom bottom-=300',
        //                   scrub: 11,
        //                   // markers: true,
        //                   onUpdate: (item) => {
        //                       if (item.progress > 0.05 && item.progress < 0.65) {
        //                           document.querySelector('.case_page__about--wtitle').classList.add('isInViewport');
        //                       } else {
        //                           document.querySelector('.case_page__about--wtitle').classList.remove('isInViewport');
        //                       }
        //                   }
        //               },
        //               x: '-100%',
        //           });
        //       }, 1000);
        // }
        // if (document.querySelector('.case_page__reds')) {
        //       setTimeout(() => {
        //            gsap.to('.case_page__reds--title', {
        //                scrollTrigger: {
        //                    trigger: '.case_page__reds',
        //                    start: 'top top',
        //                    end: 'bottom bottom-=300',
        //                    scrub: 11,
        //                    // markers: true,
        //                    onUpdate: (item) => {
        //                        if (item.progress > 0.05 && item.progress < 0.65) {
        //                            document.querySelector('.case_page__reds--title').classList.add('isInViewport');
        //                        } else {
        //                            document.querySelector('.case_page__reds--title').classList.remove('isInViewport');
        //                        }
        //                    }
        //                },
        //                x: '-100%',
        //            });
        //        }, 1000);
        // }
      }

      if (window.innerWidth <= 1366 && window.innerWidth > 1023 || window.innerWidth > 1440) {// if (document.querySelector('.block_one .case_page__reds')) {
        //     setTimeout(() => {
        //         gsap.to('.block_one .case_page__reds--title', {
        //             scrollTrigger: {
        //                 trigger: '.block_one .case_page__reds',
        //                 start: 'top top',
        //                 end: 'bottom bottom-=300',
        //                 scrub: 11,
        //                 // markers: true,
        //                 onUpdate: (item) => {
        //                     if (item.progress > 0.05 && item.progress < 0.65) {
        //                         document.querySelector('.block_one .case_page__reds--title').classList.add('isInViewport');
        //                     } else {
        //                         document.querySelector('.block_one .case_page__reds--title').classList.remove('isInViewport');
        //                     }
        //                 }
        //             },
        //             x: '-100%',
        //         });
        //     }, 1000);
        // }
        // if (document.querySelector('.blocks_bot .case_page__reds')) {
        //     setTimeout(() => {
        //         gsap.to('.blocks_bot .case_page__reds--title', {
        //             scrollTrigger: {
        //                 trigger: '.blocks_bot .case_page__reds',
        //                 start: 'top top',
        //                 end: 'bottom bottom-=300',
        //                 scrub: 11,
        //                 // markers: true,
        //                 onUpdate: (item) => {
        //                     if (item.progress > 0.05 && item.progress < 0.65) {
        //                         document.querySelector('.blocks_bot .case_page__reds--title').classList.add('isInViewport');
        //                     } else {
        //                         document.querySelector('.blocks_bot .case_page__reds--title').classList.remove('isInViewport');
        //                     }
        //                 }
        //             },
        //             x: '-100%',
        //         });
        //     }, 1000);
        // }
        // if (document.querySelector('.case_ff')) {
        //     setTimeout(() => {
        //             gsap.to('.case_ff__title', {
        //                 scrollTrigger: {
        //                     trigger: '.case_ff',
        //                     start: 'top top',
        //                     end: 'bottom bottom-=300',
        //                     scrub: 11,
        //                     // markers: true,
        //                     onUpdate: (item) => {
        //                         if (item.progress > 0.05 && item.progress < 0.65) {
        //                             document.querySelector('.case_ff__title').classList.add('isInViewport');
        //                         } else {
        //                             document.querySelector('.case_ff__title').classList.remove('isInViewport');
        //                         }
        //                     }
        //                 },
        //                 x: '-100%',
        //             });
        //         }, 1000);
        // }
        // if (document.querySelector('.case_page__about')) {
        //         setTimeout(() => {
        //             gsap.to('.case_page__about--wtitle', {
        //                 scrollTrigger: {
        //                     trigger: '.case_page__about',
        //                     start: 'top top',
        //                     end: 'bottom bottom-=300',
        //                     scrub: 11,
        //                     // markers: true,
        //                     onUpdate: (item) => {
        //                         if (item.progress > 0.05 && item.progress < 0.65) {
        //                             document.querySelector('.case_page__about--wtitle').classList.add('isInViewport');
        //                         } else {
        //                             document.querySelector('.case_page__about--wtitle').classList.remove('isInViewport');
        //                         }
        //                     }
        //                 },
        //                 x: '-100%',
        //             });
        //         }, 1000);
        // }
        // if (document.querySelector('.case_crea')) {
        //     setTimeout(() => {
        //         gsap.to('.case_crea__title', {
        //             scrollTrigger: {
        //                 trigger: '.case_crea',
        //                 start: 'top top',
        //                 end: 'bottom bottom-=300',
        //                 scrub: 11,
        //                 // markers: true,
        //                 onUpdate: (item) => {
        //                     if (item.progress > 0.05 && item.progress < 0.65) {
        //                         document.querySelector('.case_crea__title').classList.add('isInViewport');
        //                     } else {
        //                         document.querySelector('.case_crea__title').classList.remove('isInViewport');
        //                     }
        //                 }
        //             },
        //             x: '-100%',
        //         });
        //     }, 1000);
        // }
        // if (document.querySelector('.case_sls')) {
        //     setTimeout(() => {
        //             gsap.to('.case_sls__title', {
        //                 scrollTrigger: {
        //                     trigger: '.case_sls',
        //                     start: 'top top',
        //                     end: 'bottom bottom-=300',
        //                     scrub: 11,
        //                     // markers: true,
        //                     onUpdate: (item) => {
        //                         if (item.progress > 0.05 && item.progress < 0.65) {
        //                             document.querySelector('.case_sls__title').classList.add('isInViewport');
        //                         } else {
        //                             document.querySelector('.case_sls__title').classList.remove('isInViewport');
        //                         }
        //                     }
        //                 },
        //                 x: '-100%',
        //             });
        //         }, 1000);
        // }
        // if (document.querySelector('.case_desc')) {
        //         setTimeout(() => {
        //             gsap.to('.case_desc__title', {
        //                 scrollTrigger: {
        //                     trigger: '.case_desc',
        //                     start: 'top top',
        //                     end: 'bottom bottom-=300',
        //                     scrub: 11,
        //                     // markers: true,
        //                     onUpdate: (item) => {
        //                         if (item.progress > 0.05 && item.progress < 0.65) {
        //                             document.querySelector('.case_desc__title').classList.add('isInViewport');
        //                         } else {
        //                             document.querySelector('.case_desc__title').classList.remove('isInViewport');
        //                         }
        //                     }
        //                 },
        //                 x: '-100%',
        //             });
        //         }, 1000);
        // }
      }

      if (!document.querySelector('.main-cases')) return;
      var self = this;
      this.onInit(); // if (window.innerWidth < 1023) {
      // this.initMobileSlider();
      // } else {
      //     this.destroyMobileSlider();
      // }
      //  if ((window.innerWidth <= 1366 && window.innerWidth > 1023) || (window.innerWidth > 1440)) {
      //     setTimeout(() => {
      //         gsap.to('.main-cases-items-in', {
      //             scrollTrigger: {
      //                 trigger: '.main-cases',
      //                 start: 'top top',
      //                 end: 'bottom bottom-=200',
      //                 scrub: 2,
      //                 // markers: true,
      //                 onUpdate: (item) => {
      //                     if (item.progress > 0.05 && item.progress < 0.65) {
      //                         document.querySelector('.main-cases-items-in').classList.add('isInViewport');
      //                     } else {
      //                         document.querySelector('.main-cases-items-in').classList.remove('isInViewport');
      //                     }
      //                 }
      //             },
      //             x: '-100%',
      //         });
      //         gsap.to('.main-cases', {
      //             scrollTrigger: {
      //                 trigger: '.main-cases',
      //                 start: 'top top-=350',
      //                 end: 'bottom bottom',
      //                 pin: true,
      //                 scrub: 2,
      //                 pinSpacing: false,
      //                 // markers: true
      //             },
      //             x: 0,
      //             onStart() {
      //                 self.onAnimationStart();
      //             },
      //             onComplete() {
      //                 self.onAnimationEnd();
      //             }
      //         });
      //     }, 1000);
      // } else if (window.innerWidth <= 1440 && window.innerWidth > 1366) {
      //     setTimeout(() => {
      //         gsap.to('.main-cases-items-in', {
      //             scrollTrigger: {
      //                 trigger: '.main-cases',
      //                 start: 'top top',
      //                 end: 'bottom bottom-=200',
      //                 scrub: 2,
      //                 // markers: true,
      //                 onUpdate: (item) => {
      //                     if (item.progress > 0.05 && item.progress < 0.65) {
      //                         document.querySelector('.main-cases-items-in').classList.add('isInViewport');
      //                     } else {
      //                         document.querySelector('.main-cases-items-in').classList.remove('isInViewport');
      //                     }
      //                 }
      //             },
      //             x: '-100%',
      //         });
      //         gsap.to('.main-cases', {
      //             scrollTrigger: {
      //                 trigger: '.main-cases',
      //                 start: 'top top-=200',
      //                 end: 'bottom bottom',
      //                 pin: true,
      //                 scrub: 2,
      //                 pinSpacing: false,
      //                 // markers: true
      //             },
      //             x: 0,
      //             onStart() {
      //                 self.onAnimationStart();
      //             },
      //             onComplete() {
      //                 self.onAnimationEnd();
      //             }
      //         });
      //     }, 1000);
      // } 
      // else if (window.innerWidth <= 1023) {
      //     setTimeout(() => {
      //         gsap.to('.main-cases-items-in', {
      //             scrollTrigger: {
      //                 trigger: '.main-cases',
      //                 start: 'top top',
      //                 end: 'bottom bottom',
      //                 scrub: 3,
      //                 // markers: true,
      //                 onUpdate: (item) => {
      //                     if (item.progress > 0.05 && item.progress < 0.65) {
      //                         document.querySelector('.main-cases-items-in').classList.add('isInViewport');
      //                     } else {
      //                         document.querySelector('.main-cases-items-in').classList.remove('isInViewport');
      //                     }
      //                 }
      //             },
      //             x: '-100%',
      //         });
      //         gsap.to('.main-cases', {
      //             scrollTrigger: {
      //                 trigger: '.main-cases',
      //                 start: 'top top-=100',
      //                 end: 'bottom bottom',
      //                 pin: true,
      //                 pinSpacing: false,
      //                 // markers: true
      //             },
      //             x: 0,
      //         });
      //     }, 1000);
      // }
    }
  }]);

  return MainCases;
}();

/* harmony default export */ __webpack_exports__["default"] = (mainCases);

/***/ }),

/***/ "./src/blocks/modules/main-news-and-trends/main-news-and-trends.js":
/*!*************************************************************************!*\
  !*** ./src/blocks/modules/main-news-and-trends/main-news-and-trends.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);

var newsAndTrends = /*#__PURE__*/function () {
  function NewsAndTrends(_ref) {
    var itemsSelector = _ref.itemsSelector;

    _classCallCheck(this, NewsAndTrends);

    this.slider;
    this.sliderItems;
    this.html = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.news-and-trends-right-slider .glide').clone();
  }

  _createClass(NewsAndTrends, [{
    key: "initSlider",
    value: function initSlider() {
      this.sliderItems = document.querySelectorAll('.news-and-trends-item'); // this.html = $('.news-and-trends-right-slider').clone();

      this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.news-and-trends-right-slider', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        breakpoints: {
          800: {
            perView: 2
          },
          600: {
            perView: 1
          }
        }
      }).mount();
    }
  }, {
    key: "filterSlider",
    value: function filterSlider(_ref2) {
      var type = _ref2.type;
    }
  }, {
    key: "onInit",
    value: function onInit() {}
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!document.querySelector('.news-and-trends')) return;
      this.initSlider();
      this.onInit();
      document.querySelectorAll('.news-and-trends .news-and-trends-button').forEach(function (item) {
        item.addEventListener('click', function (event) {
          if (_this.slider) {
            _this.slider.destroy();
          }

          jquery__WEBPACK_IMPORTED_MODULE_3___default()('.news-and-trends-right-slider .glide').replaceWith(jquery__WEBPACK_IMPORTED_MODULE_3___default()(_this.html).clone());

          if (item.dataset.news != 'all') {
            event.preventDefault();
            jquery__WEBPACK_IMPORTED_MODULE_3___default()(".news-and-trends-right-slider .news-and-trends-item:not([data-id-news=\"".concat(item.dataset.news, "\"])")).remove();
          }

          _this.initSlider();
        });
      });
    }
  }]);

  return NewsAndTrends;
}();

/* harmony default export */ __webpack_exports__["default"] = (newsAndTrends);

/***/ }),

/***/ "./src/blocks/modules/main-question/main-question.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/main-question/main-question.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var mainQuestionForm = /*#__PURE__*/function () {
  function mainQuestionForm(_ref) {
    var inputSelector = _ref.inputSelector;

    _classCallCheck(this, mainQuestionForm);

    this.inputSelector = inputSelector;
    this.file = '';
    this.hasFile = false;
  }

  _createClass(mainQuestionForm, [{
    key: "onInputChange",
    value: function onInputChange(event) {
      if (!event.target.files.length) {
        this.hasFile = false;
        this.file = null;
        return;
      }

      ;
      this.hasFile = true;
      this.file = _objectSpread({}, event.target.files)[0];
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!document.querySelector(this.inputSelector)) return;
      var fileInput = document.querySelector(this.inputSelector);
      fileInput.addEventListener('change', function () {
        return _this.onInputChange(event);
      });
    }
  }]);

  return mainQuestionForm;
}();

/* harmony default export */ __webpack_exports__["default"] = (mainQuestionForm);

/***/ }),

/***/ "./src/blocks/modules/main-web/main-web.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/main-web/main-web.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);

var mainWeb = /*#__PURE__*/function () {
  function Mainweb(_ref) {
    var element = _ref.element,
        trigger = _ref.trigger;

    _classCallCheck(this, Mainweb);

    this.element = element;
    this.trigger = trigger;

    if (document.querySelector('.web-slider')) {
      this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.web-slider', {
        type: 'carousel',
        startAt: 1,
        perView: 1,
        gap: 0
      });
    }
  }

  _createClass(Mainweb, [{
    key: "mobileSlider",
    value: function mobileSlider() {
      if (!this.slider) return;

      if (window.innerWidth < 1023) {
        this.slider.mount();
      } else {
        this.slider.destroy();
      }
    }
  }, {
    key: "animateElement",
    value: function animateElement() {
      this.mobileSlider();
      if (!document.querySelector('.web-right-image')) return;
      gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].utils.toArray(".web-right-image").forEach(function (item, i) {
        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"].create({
          trigger: item,
          start: "top center",
          end: 'bottom bottom',
          // scrub: 4,
          // markers: true,
          // pin: true, 
          // pinSpacing: false,
          // snap: 1,
          onUpdate: function onUpdate(item) {
            if (item.progress > 0) {
              if (document.querySelector(".web-subtitles")) {
                document.querySelectorAll(".web-subtitle").forEach(function (item) {
                  item.classList.remove('isActive');
                });
                document.querySelector(".web-subtitle[data-item-id=\"".concat(item.trigger.dataset.itemId, "\"]")).classList.add('isActive');
              }

              if (document.querySelector(".web-titles")) {
                document.querySelectorAll(".web-title").forEach(function (item) {
                  item.classList.remove('isActive');
                });
                document.querySelector(".web-title[data-item-id=\"".concat(item.trigger.dataset.itemId, "\"]")).classList.add('isActive');
              }

              if (document.querySelector(".web-texts")) {
                document.querySelectorAll(".web-text").forEach(function (item) {
                  item.classList.remove('isActive');
                });
                document.querySelector(".web-text[data-item-id=\"".concat(item.trigger.dataset.itemId, "\"]")).classList.add('isActive');
              }

              if (document.querySelector(".web-buttons")) {
                document.querySelectorAll(".web-button").forEach(function (item) {
                  item.classList.remove('isActive');
                });
                document.querySelector(".web-button[data-item-id=\"".concat(item.trigger.dataset.itemId, "\"]")).classList.add('isActive');
              }
            }
          }
        });
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.web-data-in', {
        scrollTrigger: {
          trigger: '.web-data',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: true,
          pinSpacing: false // markers: true

        },
        x: 0
      });
    }
  }]);

  return Mainweb;
}();

/* harmony default export */ __webpack_exports__["default"] = (mainWeb);

/***/ }),

/***/ "./src/blocks/modules/main-words/main-words.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/main-words/main-words.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var mainWords = /*#__PURE__*/function () {
  function MainWords(_ref) {
    var delay = _ref.delay,
        element = _ref.element;

    _classCallCheck(this, MainWords);

    this.x = {
      coordinate: 0,
      position: 'left'
    };
    this.y = {
      coordinate: 0,
      position: 'top'
    };
    this.isAnimated = false;
    this.delay = delay;
    this.element = element;
    this.countPosition();
    this.onInit();
  }

  _createClass(MainWords, [{
    key: "countPosition",
    value: function countPosition() {
      var _this = this;

      if (!document.querySelector(this.element)) return;
      setTimeout(function () {
        document.addEventListener('mousemove', function (event) {
          _this.x.coordinate = event.clientX;
          _this.y.coordinate = event.clientY;

          if (_this.x.coordinate < window.innerWidth / 2) {
            _this.x.position = 'left';
          } else {
            _this.x.position = 'right';
          }

          if (_this.y.coordinate < window.innerheight / 2) {
            _this.y.position = 'top';
          } else {
            _this.y.position = 'bottom';
          }

          _this.animateElem();
        });
      }, this.delay * 1000);
    }
  }, {
    key: "animateElem",
    value: function animateElem() {
      if (!document.querySelector(this.element)) return;
      gsap__WEBPACK_IMPORTED_MODULE_0__["TweenMax"].to(this.element, 1, {
        translateX: -this.x.coordinate + window.innerWidth / 2,
        ease: gsap__WEBPACK_IMPORTED_MODULE_0__["Power1"].Circ
      });
    }
  }, {
    key: "onInit",
    value: function onInit() {}
  }]);

  return MainWords;
}();

/* harmony default export */ __webpack_exports__["default"] = (mainWords);

/***/ }),

/***/ "./src/js/main_page.js":
/*!*****************************!*\
  !*** ./src/js/main_page.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_main_words_main_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/main-words/main-words */ "./src/blocks/modules/main-words/main-words.js");
/* harmony import */ var _modules_main_web_main_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/main-web/main-web */ "./src/blocks/modules/main-web/main-web.js");
/* harmony import */ var _modules_main_about_main_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/main-about/main-about */ "./src/blocks/modules/main-about/main-about.js");
/* harmony import */ var _modules_main_carousel_main_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/main-carousel/main-carousel */ "./src/blocks/modules/main-carousel/main-carousel.js");
/* harmony import */ var _modules_main_news_and_trends_main_news_and_trends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/main-news-and-trends/main-news-and-trends */ "./src/blocks/modules/main-news-and-trends/main-news-and-trends.js");
/* harmony import */ var _modules_main_cases_main_cases__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/main-cases/main-cases */ "./src/blocks/modules/main-cases/main-cases.js");
/* harmony import */ var _modules_cursor_animation_cursor_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/cursor-animation/cursor-animation */ "./src/blocks/modules/cursor-animation/cursor-animation.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_cookie_form_cookie_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/cookie-form/cookie-form */ "./src/blocks/modules/cookie-form/cookie-form.js");
/* harmony import */ var _modules_application_form_application_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/application-form/application-form */ "./src/blocks/modules/application-form/application-form.js");
/* harmony import */ var _modules_main_question_main_question__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/main-question/main-question */ "./src/blocks/modules/main-question/main-question.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_cases_cases__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/cases/cases */ "./src/blocks/modules/cases/cases.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
















gsap__WEBPACK_IMPORTED_MODULE_14__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_15__["ScrollTrigger"]);
window.app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#app',
  data: function data() {
    return {
      mainWords: new _modules_main_words_main_words__WEBPACK_IMPORTED_MODULE_1__["default"]({
        delay: 1,
        element: '.main-words-wrap'
      }),
      mainWeb: new _modules_main_web_main_web__WEBPACK_IMPORTED_MODULE_2__["default"]({
        element: '.web-tentacle',
        trigger: '.first-frame'
      }),
      mainCarousel: new _modules_main_carousel_main_carousel__WEBPACK_IMPORTED_MODULE_4__["default"](),
      cursorAnimation: new _modules_cursor_animation_cursor_animation__WEBPACK_IMPORTED_MODULE_7__["default"](),
      mainAbout: new _modules_main_about_main_about__WEBPACK_IMPORTED_MODULE_3__["default"](),
      newsAndTrends: new _modules_main_news_and_trends_main_news_and_trends__WEBPACK_IMPORTED_MODULE_5__["default"]({
        itemsSelector: '.news-and-trends-item'
      }),
      // mainCases: new mainCases({
      //     itemsClass: '.main-cases-item'
      // }),
      mainQuestionFormModal: new _modules_main_question_main_question__WEBPACK_IMPORTED_MODULE_11__["default"]({
        inputSelector: '.main-question.fileLoaderModal .main-question-form-item [type="file"]',
        textSelector: 'main-question.fileLoaderModal .main-question-form-item span'
      }),
      mainQuestionFormFirst: new _modules_main_question_main_question__WEBPACK_IMPORTED_MODULE_11__["default"]({
        inputSelector: '.main-question.fileLoaderFirst .main-question-form-item [type="file"]',
        textSelector: 'main-question.fileLoaderFirst .main-question-form-item span'
      }),
      mainQuestionFormSecond: new _modules_main_question_main_question__WEBPACK_IMPORTED_MODULE_11__["default"]({
        inputSelector: '.main-question.fileLoaderSecond .main-question-form-item [type="file"]',
        textSelector: 'main-question.fileLoaderSecond .main-question-form-item span'
      }),
      mainQuestionFormMain: new _modules_main_question_main_question__WEBPACK_IMPORTED_MODULE_11__["default"]({
        inputSelector: '.main-question.fileLoaderMain .main-question-form-item [type="file"]',
        textSelector: 'main-question.fileLoaderMain .main-question-form-item span'
      }),
      footer: new _modules_footer_footer__WEBPACK_IMPORTED_MODULE_8__["default"](),
      casesUpdated: new _modules_cases_cases__WEBPACK_IMPORTED_MODULE_13__["default"](),
      cookiesForm: new _modules_cookie_form_cookie_form__WEBPACK_IMPORTED_MODULE_9__["default"](),
      applicationForm: new _modules_application_form_application_form__WEBPACK_IMPORTED_MODULE_10__["default"](),
      isMounted: false,
      isPreloaderHidden: false,
      header: new _modules_header_header__WEBPACK_IMPORTED_MODULE_12__["default"](),
      sizes: {
        window: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      },
      isSafary: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    // setTimeout(() => {
    //     this.isPreloaderHidden = true;
    // }, 1500);
    setTimeout(function () {
      var preloader = document.querySelector('.preloader svg animateTransform');
      preloader.addEventListener('endEvent', function () {
        _this.isPreloaderHidden = true;
      });
      _this.isMounted = true; // this.mainCases.init();

      _this.mainWords.countPosition();

      _this.mainWeb.animateElement();

      _this.mainAbout.animateCircle();

      _this.mainAbout.initVideoOpening();

      _this.cursorAnimation.init();

      _this.mainCarousel.init();

      _this.newsAndTrends.init();

      _this.casesUpdated.init();

      _this.header.init();

      _this.cookiesForm.init();

      _this.applicationForm.init();

      _this.mainQuestionFormModal.init();

      _this.mainQuestionFormFirst.init();

      _this.mainQuestionFormSecond.init();

      _this.mainQuestionFormMain.init();

      window.addEventListener('resize', function () {
        _this.window = {
          width: window.innerWidth,
          height: window.innerHeight
        };
      });
      window.addEventListener('resize', function () {
        return _this.cursorAnimation.updateCanvasSize();
      });
      document.addEventListener('mousemove', function (event) {
        _this.cursorAnimation.animate({
          x: event.pageX,
          y: event.pageY
        });
      });
      window.addEventListener("orientationchange", function (event) {
        location.reload();
      });
      document.querySelector('.footer-bank .copy').addEventListener('click', function () {
        return _this.footer.copyText({
          text: 'ИНН/КПП: 6317139806/631701001 Банк: АО "Тинькофф Банк" БИК: 044525974 Р/С: 40702810010000559615 Р/С: 40702810010000559615'
        });
      });
      _this.isSafary = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }, 250);
    setTimeout(this.animateTitles(), 500);
  },
  computed: {
    window: {
      get: function get() {
        return {
          width: this.sizes.window.width,
          height: this.sizes.window.height
        };
      },
      set: function set(newValue) {
        this.sizes.window = newValue;
      }
    }
  },
  methods: {
    buttonMouseEnter: function buttonMouseEnter(event) {
      var x = event.offsetX;
      var y = event.offsetY;
      var circle = document.createElement("div");
      circle.classList.add('button-circle');
      event.target.appendChild(circle);
      event.target.children[1].style.left = x + 'px';
      event.target.children[1].style.top = y + 'px';
      gsap__WEBPACK_IMPORTED_MODULE_14__["default"].to(event.target.children[1], 0.5, {
        width: 800,
        height: 800,
        x: -400,
        y: -400
      });
    },
    buttonMouseLeave: function buttonMouseLeave(event) {
      var x = event.offsetX;
      var y = event.offsetY;
      event.target.children[1].style.left = x + 'px';
      event.target.children[1].style.top = y + 'px';
      gsap__WEBPACK_IMPORTED_MODULE_14__["default"].to(event.target.children[1], 0.3, {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        onComplete: function onComplete() {
          event.target.removeChild(event.target.children[1]);
        }
      });
    },
    animateTitles: function animateTitles() {
      if (document.querySelectorAll(".animated-title")) {
        document.querySelectorAll(".animated-title").forEach(function (item, i) {
          gsap__WEBPACK_IMPORTED_MODULE_14__["default"].to(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: "bottom+=".concat(window.innerHeight, " bottom"),
              // end: `top-=${window.innerHeight} top-=${window.innerHeight}`,
              // markers: true,
              onUpdate: function onUpdate(item) {
                if (item.progress > 0.1) {
                  gsap__WEBPACK_IMPORTED_MODULE_14__["default"].to(item.trigger, 2.5, {
                    transform: "translateX(".concat(-item.progress * 200 + 100, "%)")
                  });
                } else {
                  gsap__WEBPACK_IMPORTED_MODULE_14__["default"].to(item.trigger, 2.5, {
                    transform: "translateX(120%)"
                  });
                }
              }
            },
            opacity: '1' // x: '-100%'

          });
        });
      }

      if (document.querySelectorAll(".animated-title-top")) {
        document.querySelectorAll(".animated-title-top").forEach(function (item, i) {
          if (window.innerWidth > 1023) {
            gsap__WEBPACK_IMPORTED_MODULE_14__["default"].to(item, {
              scrollTrigger: {
                trigger: item,
                start: 'top center+=100',
                end: "bottom+=".concat(window.innerHeight, " bottom"),
                // end: `top-=${window.innerHeight} top-=${window.innerHeight}`,
                // markers: true,
                onUpdate: function onUpdate(item) {
                  if (item.progress > 0.1) {
                    gsap__WEBPACK_IMPORTED_MODULE_14__["default"].to(item.trigger, 2.5, {
                      transform: "translateX(".concat(-item.progress * 200 + 100, "%)")
                    });
                  } else {
                    gsap__WEBPACK_IMPORTED_MODULE_14__["default"].to(item.trigger, 2.5, {
                      transform: "translateX(120%)"
                    });
                  }
                }
              },
              opacity: '1' // x: '-100%'

            });
          } else {
            gsap__WEBPACK_IMPORTED_MODULE_14__["default"].to(item, {
              scrollTrigger: {
                trigger: item,
                start: 'top top+=325',
                end: "bottom+=400 top+=325",
                // end: `top-=${window.innerHeight} top-=${window.innerHeight}`,
                // markers: true,
                onUpdate: function onUpdate(item) {
                  if (item.progress > 0.1) {
                    gsap__WEBPACK_IMPORTED_MODULE_14__["default"].to(item.trigger, 2.5, {
                      transform: "translateX(".concat(-item.progress * 200 + 100, "%)")
                    });
                  } else {
                    gsap__WEBPACK_IMPORTED_MODULE_14__["default"].to(item.trigger, 2.5, {
                      transform: "translateX(120%)"
                    });
                  }
                }
              },
              opacity: '1' // x: '-100%'

            });
          }
        });
      }

      setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 500);
    }
  }
});

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=main_page.js.map