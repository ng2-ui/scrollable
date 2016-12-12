(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ng2-scrollable"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else
		root["ng2-scrollable"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ng2_scrollable_directive_1 = __webpack_require__(1);
	exports.Ng2ScrollableDirective = ng2_scrollable_directive_1.Ng2ScrollableDirective;
	var ng2_scrollable_module_1 = __webpack_require__(4);
	exports.Ng2ScrollableModule = ng2_scrollable_module_1.Ng2ScrollableModule;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ng2_utils_1 = __webpack_require__(3);
	var Ng2ScrollableDirective = (function () {
	    function Ng2ScrollableDirective(el) {
	        this.elementVisible = new core_1.EventEmitter();
	        this.sections = [];
	        this.visible = ng2_utils_1.elementVisible;
	        this.el = el.nativeElement;
	        this.el.style.position = 'relative';
	    }
	    // setup list of sections
	    Ng2ScrollableDirective.prototype.ngOnInit = function () {
	        for (var i = 0; i < this.el.children.length; i++) {
	            var childEl = this.el.children[i];
	            childEl.id && this.sections.push(childEl);
	        }
	        var thisElStyle = window.getComputedStyle(this.el);
	        var elToListenScroll = thisElStyle.overflow === 'auto' ? this.el : window;
	        this.listenScrollOn(elToListenScroll);
	    };
	    Ng2ScrollableDirective.prototype.listenScrollOn = function (el) {
	        var _this = this;
	        el.addEventListener('scroll', function () {
	            var elScrolledToVisible = null;
	            for (var i = 0; i < _this.sections.length; i++) {
	                var section = _this.sections[i];
	                var visible = _this.visible(section, el);
	                if (_this.horizontal && (visible.left || visible.right)) {
	                    elScrolledToVisible = section;
	                    break;
	                }
	                else if (!_this.horizontal && (visible.top || visible.bottom)) {
	                    elScrolledToVisible = section;
	                    break;
	                }
	            }
	            elScrolledToVisible && _this.elementVisible.emit(elScrolledToVisible);
	        });
	    };
	    Ng2ScrollableDirective.scrollTo = function (selector, parentSelector, horizontal, distance) {
	        // argument validation
	        var parentEl, targetEl;
	        parentSelector = parentSelector || 'body';
	        targetEl = document.querySelector(selector);
	        if (!targetEl) {
	            throw "Invalid selector " + selector;
	        }
	        parentEl = document.querySelector(parentSelector);
	        if (!parentEl) {
	            throw "Invalid parent selector " + parentSelector;
	        }
	        // detect the current environment
	        var parentElStyle = window.getComputedStyle(parentEl);
	        var scrollContainerEl = parentElStyle.overflow === 'auto' ?
	            parentEl : document.body;
	        var currentScrollTop = scrollContainerEl.scrollTop;
	        var currentScrollLeft = scrollContainerEl.scrollLeft;
	        // determine targetOffsetTop(or Left);
	        var targetOffsetTop;
	        var targetOffsetLeft;
	        if (scrollContainerEl === document.body) {
	            var bodyRect = document.body.getBoundingClientRect();
	            var targetRect = targetEl.getBoundingClientRect();
	            targetOffsetTop = targetRect.top - bodyRect.top;
	            targetOffsetLeft = targetRect.left - bodyRect.left;
	        }
	        else {
	            targetOffsetTop = targetEl.offsetTop;
	            targetOffsetLeft = targetEl.offsetLeft;
	        }
	        if (distance) {
	            currentScrollTop += distance;
	            currentScrollLeft += distance;
	        }
	        // start scrolling
	        var step = horizontal ?
	            Math.ceil((targetOffsetLeft - currentScrollLeft) / 10) :
	            Math.ceil((targetOffsetTop - currentScrollTop) / 10);
	        var scrollProp = horizontal ? 'scrollLeft' : 'scrollTop';
	        (function loop(i, prop) {
	            setTimeout(function main() {
	                scrollContainerEl[prop] += step;
	                i > 1 && loop(i - 1, prop);
	            }, 50);
	        }(10, scrollProp));
	    };
	    return Ng2ScrollableDirective;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], Ng2ScrollableDirective.prototype, "horizontal", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], Ng2ScrollableDirective.prototype, "elementVisible", void 0);
	Ng2ScrollableDirective = __decorate([
	    core_1.Directive({
	        selector: '[ng2-scrollable]'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], Ng2ScrollableDirective);
	exports.Ng2ScrollableDirective = Ng2ScrollableDirective;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(2));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core"], factory);
		else if(typeof exports === 'object')
			exports["ng2-utils"] = factory(require("@angular/core"));
		else
			root["ng2-utils"] = factory(root["@angular/core"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
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
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		    return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		var __metadata = (this && this.__metadata) || function (k, v) {
		    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
		};
		var core_1 = __webpack_require__(1);
		var scroll_to_1 = __webpack_require__(2);
		exports.scrollTo = scroll_to_1.scrollTo;
		var element_visible_1 = __webpack_require__(3);
		exports.elementVisible = element_visible_1.elementVisible;
		var computed_style_1 = __webpack_require__(4);
		exports.computedStyle = computed_style_1.computedStyle;
		var outer_width_1 = __webpack_require__(5);
		exports.outerWidth = outer_width_1.outerWidth;
		var outer_height_1 = __webpack_require__(6);
		exports.outerHeight = outer_height_1.outerHeight;
		var Ng2UtilsModule = (function () {
		    function Ng2UtilsModule() {
		    }
		    Ng2UtilsModule = __decorate([
		        core_1.NgModule({
		            declarations: [
		                scroll_to_1.scrollTo,
		                element_visible_1.elementVisible,
		                computed_style_1.computedStyle,
		                outer_width_1.outerWidth,
		                outer_height_1.outerHeight
		            ],
		            exports: [
		                scroll_to_1.scrollTo,
		                element_visible_1.elementVisible,
		                computed_style_1.computedStyle,
		                outer_width_1.outerWidth,
		                outer_height_1.outerHeight
		            ]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2UtilsModule);
		    return Ng2UtilsModule;
		}());
		exports.Ng2UtilsModule = Ng2UtilsModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		"use strict";
		/**
		 * scroll to the selector within the parent selector by scrolling 10 times within 500ms
		 * @param selector
		 * @param parentSelector
		 */
		function scrollTo(selector, parentSelector) {
		    console.log('selector', selector, 'parentSelector', parentSelector);
		    var parentEl, targetEl;
		    targetEl = document.querySelector(selector);
		    if (!targetEl) {
		        throw "Invalid selector " + selector;
		    }
		    parentEl = document.querySelector(parentSelector);
		    if (!parentEl) {
		        throw "Invalid parent selector " + parentSelector;
		    }
		    var parentElStyle = window.getComputedStyle(parentEl);
		    parentEl = parentElStyle['overflow'] === 'auto' ? parentEl : document.body;
		    var currentScrollTop = parentEl.scrollTop;
		    var targetOffsetTop = targetEl.offsetTop;
		    if (parentEl === document.body) {
		        var bodyRect = document.body.getBoundingClientRect();
		        var targetRect = targetEl.getBoundingClientRect();
		        targetOffsetTop = targetRect.top - bodyRect.top;
		    }
		    var step = Math.ceil((targetOffsetTop - currentScrollTop) / 10);
		    (function loop(i) {
		        setTimeout(function main() {
		            parentEl.scrollTop += step;
		            i > 1 && loop(i - 1);
		        }, 50);
		    }(10));
		}
		exports.scrollTo = scrollTo;
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		"use strict";
		/**
		 * Returns an element is visible within outer element
		 * @param innerEl
		 * @param outerEl
		 * @param adjustment
		 * @returns {{top: boolean, bottom: boolean, left: boolean, right: boolean}}
		 */
		function elementVisible(innerEl, outerEl, adjustment) {
		    var innerRect = innerEl.getBoundingClientRect();
		    var bottomAdjustment = (adjustment && adjustment.bottom || 0);
		    if (outerEl === window) {
		        return {
		            top: innerRect.bottom - bottomAdjustment > window.innerHeight
		                && innerRect.top < window.innerHeight,
		            bottom: innerRect.bottom - bottomAdjustment > 0
		                && innerRect.bottom < window.innerHeight,
		            left: innerRect.right > window.innerWidth
		                && innerRect.left < window.innerWidth,
		            right: innerRect.right > 0
		                && innerRect.right < window.innerWidth
		        };
		    }
		    else {
		        var outerRect = outerEl.getBoundingClientRect();
		        var defaultView = (innerEl.ownerDocument || document).defaultView;
		        var computedStyle = defaultView.getComputedStyle(outerEl, null);
		        var outerRectBorderTopWidth = parseInt(computedStyle.getPropertyValue('border-top-width'), 10);
		        var outerRectBorderLeftWidth = parseInt(computedStyle.getPropertyValue('border-left-width'), 10);
		        /* top is visible or bottom is visible */
		        var topVisible = (innerRect.top >= outerRect.top
		            && innerRect.top < outerRect.bottom);
		        var bottomVisible = (innerRect.bottom > (outerRect.top + outerRectBorderTopWidth)
		            && innerRect.bottom < outerRect.bottom);
		        var leftVisible = (innerRect.left >= outerRect.left
		            && innerRect.left < outerRect.right);
		        var rightVisible = (innerRect.right > (outerRect.left + outerRectBorderLeftWidth)
		            && innerRect.right < outerRect.right);
		        return {
		            top: topVisible,
		            bottom: bottomVisible,
		            left: leftVisible,
		            right: rightVisible
		        };
		    }
		}
		exports.elementVisible = elementVisible;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		"use strict";
		/**
		 * returns coumputed style of given element
		 * @param el
		 * @param styleProp
		 * @returns {any}
		 */
		function computedStyle(el, styleProp) {
		    var value, defaultView = (el.ownerDocument || document).defaultView;
		    // W3C standard way:
		    if (defaultView && defaultView.getComputedStyle) {
		        // sanitize property name to css notation
		        // (hypen separated words eg. font-Size)
		        styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
		        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
		    }
		    else if (el['currentStyle']) {
		        // sanitize property name to camelCase
		        styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
		            return letter.toUpperCase();
		        });
		        value = el['currentStyle'][styleProp];
		        // convert other units to pixels on IE
		        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
		            return (function (value) {
		                var oldLeft = el.style.left, oldRsLeft = el['runtimeStyle'].left;
		                el['runtimeStyle'].left = el['currentStyle'].left;
		                el.style.left = value || 0;
		                value = el.style['pixelLeft'] + "px";
		                el.style.left = oldLeft;
		                el['runtimeStyle'].left = oldRsLeft;
		                return value;
		            })(value);
		        }
		        return value;
		    }
		}
		exports.computedStyle = computedStyle;
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		"use strict";
		function outerWidth(el) {
		    var style = getComputedStyle(el);
		    return el.offsetWidth +
		        parseInt(style.getPropertyValue('margin-left')) +
		        parseInt(style.getPropertyValue('margin-right'));
		}
		exports.outerWidth = outerWidth;
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		"use strict";
		function outerHeight(el) {
		    var style = getComputedStyle(el);
		    return el.offsetHeight +
		        parseInt(style.getPropertyValue('margin-top')) +
		        parseInt(style.getPropertyValue('margin-bottom'));
		}
		exports.outerHeight = outerHeight;
	
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-utils.umd.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(5);
	var common_1 = __webpack_require__(6);
	var ng2_scrollable_directive_1 = __webpack_require__(1);
	exports.Ng2ScrollableDirective = ng2_scrollable_directive_1.Ng2ScrollableDirective;
	var Ng2ScrollableModule = (function () {
	    function Ng2ScrollableModule() {
	    }
	    return Ng2ScrollableModule;
	}());
	Ng2ScrollableModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule, forms_1.FormsModule],
	        declarations: [ng2_scrollable_directive_1.Ng2ScrollableDirective],
	        exports: [ng2_scrollable_directive_1.Ng2ScrollableDirective]
	    }),
	    __metadata("design:paramtypes", [])
	], Ng2ScrollableModule);
	exports.Ng2ScrollableModule = Ng2ScrollableModule;


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-scrollable.umd.js.map