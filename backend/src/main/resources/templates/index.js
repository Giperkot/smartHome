var index =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getHttpPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHttpPromise", function() { return getHttpPromise; });

function  getHttpPromise (config) {
    return new Promise(function(resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open(config.method, config.url, true);
        xhr.setRequestHeader("Content-type", config.contentType);

        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send(JSON.stringify(config.jsonData));
    });
}




/***/ }),

/***/ "./src/classes/Binding.js":
/*!********************************!*\
  !*** ./src/classes/Binding.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scrollable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scrollable */ "./src/classes/Scrollable.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Point */ "./src/classes/Point.js");
/**
 * Created by Odohar on 18.08.2018.
 */





class Binding {
    constructor () {
        this.startPoint = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0);

        this.leftScrollMouseDown = false;
        this.bottomScrollMouseDown = false;
        this.middleScenarioouseDown = false;

        // mobile
        this.leftScrollMouseDownMobile = false;
        this.rightScrollMouseDownMobile = false;

        this.moveLeftScroll = null;
    }

    selectFromDeviceArrayById(id) {
        for (let i = 0; i < devicesArray.length; i++) {
            if (devicesArray[i].id == id) {
                return devicesArray[i];
            }
        }

        return {};
    }

    setBinding () {
        let self = this;

        let leftScrollMousePosition;

        let leftScrollMarginTop = 0;

        let bottomScrollMousePosition;

        // let startPoint = new Point(0, 0);

        let startAnimationActionBottomScroll = function (evt) {
            let pageX = (evt.pageX) ? evt.pageX : (evt.changedTouches) ? evt.changedTouches[0].pageX : 0;
            let pageY = (evt.pageY) ? evt.pageY : (evt.changedTouches) ? evt.changedTouches[0].pageY : 0;

            bottomScrollMousePosition = pageX;
            self.bottomScrollMouseDown = true;

            self.startPoint = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"] (pageX, pageY);

            if (!evt.changedTouches) {
                evt.preventDefault();
                evt.stopPropagation();
            }
        };

        let moveAnimationAction = function (evt) {
            self.moveLeftScroll (evt);
            moveBottomScroll (evt);

            if (self.moveMiddleScroll) {
                self.moveMiddleScroll(evt);
            }
        };

        let endAnimationAction = function (evt) {

            self.leftScrollMouseDown = false;
            self.bottomScrollMouseDown = false;
            self.middleScenarioouseDown = false;

            let pageX = (evt.pageX) ? evt.pageX : (evt.changedTouches) ? evt.changedTouches[0].pageX : 0;
            let pageY = (evt.pageY) ? evt.pageY : (evt.changedTouches) ? evt.changedTouches[0].pageY : 0;

            if (self.startPoint.getDistance(new _Point__WEBPACK_IMPORTED_MODULE_2__["default"](pageX, pageY)) > 3) {
                return;
            }

            // Обработка кликов по блокам.
            let target = evt.target.closest(".main_panel_inner_right_element");
            if (!target) {
                return;
            }

            let type = target.getAttribute("data-type");
            let id = target.getAttribute("data-id");

            if (!type) {
                return;
            }

            switch (type) {
                case _const__WEBPACK_IMPORTED_MODULE_1__["types"].device:
                    self.selectFromDeviceArrayById(id).openForm(target, false);
                    break;
            }

        };

        if (window.innerWidth > 900) {

            let leftScroll = document.querySelector(".main_panel_inner_right");
            let scrollLeftInner = document.querySelector(".main_panel_inner_right__elements");
            let scrollLeftInnerGeomenry = scrollLeftInner.getBoundingClientRect();
            let leftScrollArrowDown = leftScroll.querySelector(".arrow_down_js");
            let leftScrollArrowUp = leftScroll.querySelector(".arrow_up");

            let topScroll = new _Scrollable__WEBPACK_IMPORTED_MODULE_0__["default"]({
                min: 0,
                max: scrollLeftInnerGeomenry.height,
                isTransition: false,
                cssProperty: "marginTop",
                currentValue: 0,
                parentLength: 331,
                onMax: function () {
                    leftScrollArrowDown.style.display = "none";
                },
                unMax: function () {
                    leftScrollArrowDown.style.display = "block";
                },
                onMin: function () {
                    leftScrollArrowUp.style.display = "none";
                },
                unMin: function () {
                    leftScrollArrowUp.style.display = "block";
                }
            });

            self.moveLeftScroll = function (evt) {
                if (!self.leftScrollMouseDown) {
                    return;
                }

                let delta = leftScrollMousePosition - evt.pageY;

                if (delta > 0) {
                    topScroll.scrollBottom(scrollLeftInner, delta);
                } else {
                    topScroll.scrollTop(scrollLeftInner, -delta);
                }

                leftScrollMousePosition = evt.pageY;
                self.leftScrollMouseDown = true;
            };

            leftScroll.addEventListener("wheel", function (evt) {
                if (evt.deltaY > 0) {
                    topScroll.scrollBottom(scrollLeftInner);
                } else {
                    topScroll.scrollTop(scrollLeftInner);
                }

                evt.preventDefault();
                evt.stopPropagation();
            });

            leftScroll.addEventListener("mousedown", function (evt) {
                leftScrollMousePosition = evt.pageY;
                self.leftScrollMouseDown = true;
            });

            leftScrollArrowDown.addEventListener("click", function (evt) {
                topScroll.scrollBottom(scrollLeftInner, 100, true);
            });

            leftScrollArrowUp.addEventListener("click", function (evt) {
                topScroll.scrollTop(scrollLeftInner, 100, true);
            });

        }


        // Панель с бытовой техникой...
        let filterPanel = document.querySelector(".filter_panel");
        let appliancePanelLeftArrow = filterPanel.querySelector(".arrow_left");
        let appliancePanelRightArrow = filterPanel.querySelector(".arrow_right");

        let panelElements = document.querySelector(".panel_elements");
        let appliancePanel = document.querySelector(".appliances_panel");
        let panelElementsGeometry = appliancePanel.getBoundingClientRect();

        let bottomScroll = new _Scrollable__WEBPACK_IMPORTED_MODULE_0__["default"]({
            min: 0,
            max: panelElementsGeometry.width,
            isTransition: false,
            cssProperty: "marginLeft",
            currentValue: 0,
            parentLength: window.innerWidth,
            onMax: function () {
                appliancePanelRightArrow.classList.remove("arrow_bold");
            },
            unMax: function () {
                appliancePanelRightArrow.classList.add("arrow_bold");
            },
            onMin: function () {
                appliancePanelLeftArrow.classList.remove("arrow_bold");
            },
            unMin: function() {
                appliancePanelLeftArrow.classList.add("arrow_bold");
            }
        });

        function moveBottomScroll (evt) {
            if (!self.bottomScrollMouseDown) {
                return;
            }

            let pageX = (evt.pageX) ? evt.pageX : (evt.changedTouches) ? evt.changedTouches[0].pageX : 0;

            let delta = bottomScrollMousePosition - pageX;

            if (delta > 0) {
                bottomScroll.scrollBottom(appliancePanel, delta);
            } else {
                bottomScroll.scrollTop(appliancePanel, -delta);
            }

            bottomScrollMousePosition = pageX;
            self.bottomScrollMouseDown = true;
        }

        let horisontalBottomMarginLeft = 0;
        appliancePanel.addEventListener("wheel", function (evt) {
            /*horisontalBottomMarginLeft += evt.deltaY;
            panelElements.style.marginLeft = horisontalBottomMarginLeft + "px";*/

            if (evt.deltaY > 0) {
                bottomScroll.scrollBottom(appliancePanel);
            } else {
                bottomScroll.scrollTop(appliancePanel);
            }

            evt.preventDefault();
            evt.stopPropagation();
        });

        /*panelElements.addEventListener("mousedown", function (evt) {
            bottomScrollMousePosition = evt.pageX;
            self.bottomScrollMouseDown = true;
        });*/
        panelElements.addEventListener("mousedown", startAnimationActionBottomScroll);
        panelElements.addEventListener("touchstart", startAnimationActionBottomScroll);

        appliancePanelLeftArrow.addEventListener("click", function (evt) {

            bottomScroll.scrollTop(appliancePanel, 300, true);
        });

        appliancePanelRightArrow.addEventListener("click", function (evt) {
            bottomScroll.scrollBottom(appliancePanel, 300, true);
        });

        // Общие события

        document.addEventListener("mousedown", function (evt) {
            self.startPoint = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"] (evt.pageX, evt.pageY);
        });

        document.addEventListener("mousemove", moveAnimationAction);
        document.addEventListener("touchmove", moveAnimationAction);

        document.addEventListener("mouseup", endAnimationAction);
        document.addEventListener("touchend", endAnimationAction);

    }

    setMobileBinding () {
        let self = this;

        let leftScrollMousePosition = 0;
        let leftScroll = document.querySelector(".main_panel_inner_right");
        let scrollLeftInner = document.querySelector(".main_panel_inner_right__elements");
        let scrollLeftInnerGeomenry = scrollLeftInner.getBoundingClientRect();

        let topScroll = new _Scrollable__WEBPACK_IMPORTED_MODULE_0__["default"]({
            min: 0,
            max: scrollLeftInnerGeomenry.width,
            isTransition: false,
            cssProperty: "marginLeft",
            currentValue: 0,
            parentLength: leftScroll.getBoundingClientRect().width,
            onMax: function () {

            },
            unMax: function () {

            },
            onMin: function () {

            },
            unMin: function () {

            }
        });

        self.moveLeftScroll = function (evt) {
            if (!self.leftScrollMouseDown) {
                return;
            }

            let pageX = (evt.pageX) ? evt.pageX : (evt.changedTouches) ? evt.changedTouches[0].pageX : 0;
            let delta = leftScrollMousePosition - pageX;

            if (delta > 0) {
                topScroll.scrollBottom(scrollLeftInner, delta);
            } else {
                topScroll.scrollTop(scrollLeftInner, -delta);
            }

            leftScrollMousePosition = pageX;
        };

        leftScroll.addEventListener("wheel", function (evt) {
            if (evt.deltaY > 0) {
                topScroll.scrollBottom(scrollLeftInner);
            } else {
                topScroll.scrollTop(scrollLeftInner);
            }

            evt.preventDefault();
            evt.stopPropagation();
        });

        leftScroll.addEventListener("touchstart", function (evt) {

            let pageX = (evt.pageX) ? evt.pageX : (evt.changedTouches) ? evt.changedTouches[0].pageX : 0;
            let pageY = (evt.pageY) ? evt.pageY : (evt.changedTouches) ? evt.changedTouches[0].pageY : 0;

            leftScrollMousePosition = pageX;
            self.leftScrollMouseDown = true;

            self.startPoint = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"] (pageX, pageY);

            if (!evt.changedTouches) {
                evt.preventDefault();
                evt.stopPropagation();
            }
        });

        let middleScenariosPanel = document.querySelector(".panel_inner__elect_scripts");
        let middleScenariosPanelParent = middleScenariosPanel.parentNode;
        let scenariosLength = middleScenariosPanel.children.length;
        middleScenariosPanel.style.width = (scenariosLength * 200 + (scenariosLength - 1) * 15) + "px";
        let middleScrollMousePosition;

        let middleScenarios = new _Scrollable__WEBPACK_IMPORTED_MODULE_0__["default"]({
            min: 0,
            max: middleScenariosPanel.getBoundingClientRect().width,
            isTransition: false,
            cssProperty: "marginLeft",
            currentValue: 0,
            parentLength: window.innerWidth,
            onMax: function () {

            },
            unMax: function () {

            },
            onMin: function () {

            },
            unMin: function () {

            }
        });

        middleScenariosPanelParent.addEventListener("touchstart", function (evt) {
            let pageX = (evt.pageX) ? evt.pageX : (evt.changedTouches) ? evt.changedTouches[0].pageX : 0;
            let pageY = (evt.pageY) ? evt.pageY : (evt.changedTouches) ? evt.changedTouches[0].pageY : 0;

            middleScrollMousePosition = pageX;
            self.middleScenarioouseDown = true;

            self.startPoint = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"] (pageX, pageY);

            if (!evt.changedTouches) {
                evt.preventDefault();
                evt.stopPropagation();
            }
        });

        self.moveMiddleScroll = function (evt) {
            if (!self.middleScenarioouseDown) {
                return;
            }

            let pageX = (evt.pageX) ? evt.pageX : (evt.changedTouches) ? evt.changedTouches[0].pageX : 0;
            let delta = middleScrollMousePosition - pageX;

            if (delta > 0) {
                middleScenarios.scrollBottom(middleScenariosPanel, delta);
            } else {
                middleScenarios.scrollTop(middleScenariosPanel, -delta);
            }

            middleScrollMousePosition = pageX;
        }

    }

}

/* harmony default export */ __webpack_exports__["default"] = (Binding);


/***/ }),

/***/ "./src/classes/Device.js":
/*!*******************************!*\
  !*** ./src/classes/Device.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


class Device {
    constructor (config) {
        this.id = config.id;
        this.image = config.image;
        this.title = config.title;
        this.text = config.text;
        this.withAnimation = config.withAnimation;
    }

    openForm (poppForm, targetElm, closeConfig) {
        let self = this;

        let overlay = poppForm.parentNode;
        let wrapperContent = document.querySelector(".wrapper_content");

        if (this.withAnimation) {
            let targetGeometry = targetElm.getBoundingClientRect();
            poppForm.style.top = targetGeometry.top + "px";
            poppForm.style.left = targetGeometry.left + "px";
            poppForm.style.transition = "top 0.5s, left 0.5s, transform 0.5s";

            setTimeout(function () {
                let popupFormGeometry = poppForm.getBoundingClientRect();
                poppForm.style.top = (window.innerHeight / 2 - popupFormGeometry.height / 0.3 / 2) + "px";
                poppForm.style.left = (window.innerWidth / 2 - popupFormGeometry.width / 0.3 / 2) + "px";
                poppForm.style.transform = "scale(1)";

                setTimeout(function () {
                    poppForm.classList.remove("popup_form__scaled");
                }, 500);

            }, 10);

            overlay.style.display = "flex";
            setTimeout(function () {
                overlay.classList.add("overlay_background");
                wrapperContent.style.filter = "blur(5px)";
            }, 0);
        } else {
            overlay.style.display = "flex";
            overlay.classList.add("overlay_background");

            poppForm.classList.remove("popup_form__scaled");
        }
        //

        function closePopup () {

            closeConfig.element && closeConfig.element.removeEventListener("mousedown", closeConfig.onMouseDown);
            self.circlePicker && self.circlePicker.removeEventListener("mousedown", closeConfig.onMouseDown);
            document.removeEventListener("mousemove", closeConfig.onMouseMove);
            document.removeEventListener("mouseup", closeConfig.onMouseUp);

            if (self.withAnimation) {

                poppForm.style.transform = "scale(0.3)";
                poppForm.style.top = targetGeometry.top + "px";
                poppForm.style.left =  targetGeometry.left + "px";


                overlay.classList.remove("overlay_background");
                wrapperContent.style.filter = "none";
                poppForm.classList.add("popup_form__scaled");
                // poppForm.style.transform = "scale(1)";


                setTimeout(function () {
                    poppForm.style.transition = "nome";
                    overlay.style.display = "none";
                }, 500);

            } else {
                overlay.classList.remove("overlay_background");
                poppForm.classList.add("popup_form__scaled");
                overlay.style.display = "none";
            }
        }

        poppForm.addEventListener("click", function (evt) {
            let target = evt.target;

            if (target.closest(".button_cancel")) {
                closePopup();
                return;
            }

            if (target.closest(".button_ok")) {
                if (self.onClose) {
                    self.onClose();
                }
                closePopup();
                return;
            }

        });
    }

}

/* harmony default export */ __webpack_exports__["default"] = (Device);


/***/ }),

/***/ "./src/classes/LigthClassicDevice.js":
/*!*******************************************!*\
  !*** ./src/classes/LigthClassicDevice.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Device */ "./src/classes/Device.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./src/api.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./src/index.js");
/**
 * Created by Odohar on 18.08.2018.
 */





// import {temperatureClassicTemplateFunc} from "../const";

let temperatureClassicTemplateFunc = null;

class LigthClassicDevice extends _Device__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor (config) {
        super(config);

        // Инициализация.
        this.light = config.value;
        this.active = config.active;
        this.id = config.id;

        this.droppable = false;
        this.circlePicker = null;
        this.circlePickerParent = null;
        this.needUpdate = false;
    }

    onMouseDown (evt) {
        this.droppable = true;
    }

    onMouseMove (evt) {
        if (!this.droppable) {
            return;
        }

        let parentGeometry = this.circlePickerParent.getBoundingClientRect();
        let leftOffset = evt.pageX - parentGeometry.left - 30;

        leftOffset = Math.max(0, leftOffset);
        leftOffset = Math.min(parentGeometry.width - 60, leftOffset);

        this.circlePicker.style.marginLeft = leftOffset + "px";
    }

    onMouseUp (evt) {
        let self = this;
        if (!self.droppable) {
            return;
        }

        let parentGeometry = this.circlePickerParent.getBoundingClientRect();
        let leftOffset = evt.pageX - parentGeometry.left - 30;
        let finalPosition;
        let currentLight;

        if (leftOffset < parentGeometry.width - 60 - leftOffset) {
            finalPosition = 0;
            currentLight = 0;
        } else {
            finalPosition = parentGeometry.width - 60;
            currentLight = 1;
        }
        this.circlePicker.style.transition = "0.5s all";
        this.circlePicker.style.marginLeft = finalPosition + "px";

        if (currentLight !== self.active) {
            // Нужно послать запрос на сервер

            let config = {
                method: "POST",
                url: _const__WEBPACK_IMPORTED_MODULE_2__["projectConsts"].url + "/api/public/setValueToAppliance",
                contentType: "application/json",
                jsonData: {
                    id: self.id,
                    active: currentLight
                }
            };

            Object(_api__WEBPACK_IMPORTED_MODULE_1__["getHttpPromise"])(config).then(function (response) {
                let data = JSON.parse(response);
                self.actionsAfterUpdate (data);
            });
        }

        setTimeout(function () {
            self.circlePicker.style.transition = "none";
        }, 500);


        this.droppable = false;
    }

    handleDragAndDrop () {
        let self = this;

        this.circlePicker.addEventListener("mousedown", function (evt) {
            self.onMouseDown.call(self, evt);
        });
        document.addEventListener("mousemove", function (evt) {
            self.onMouseMove.call(self, evt);
        });
        document.addEventListener("mouseup", function (evt) {
            self.onMouseUp.call(self, evt);
        });
    }

    /**
     * Вызывается после Отправки запрсоа на сервер.
     */
    actionsAfterUpdate (data) {
        this.title = data.title;
        this.text = data.text;
        this.temperature = data.temperature;
        this.image = data.image;
        this.active = data.active;

        this.needUpdate = true;
        this.openForm(null);
    }

    onClose () {
        if (this.needUpdate) {
            let config = {
                method: "GET",
                url: _const__WEBPACK_IMPORTED_MODULE_2__["projectConsts"].url + "/api/public/getAppliencesInfo",
                contentType: "application/json"
            };

            Object(_api__WEBPACK_IMPORTED_MODULE_1__["getHttpPromise"])(config).then(function (response) {
                // Запрос на обновление
                let data = JSON.parse(response);

                Object(_index__WEBPACK_IMPORTED_MODULE_3__["updateAppliances"])(data);
            });

            this.needUpdate = false;
        }
    }

    openForm(targetElm) {
        let self = this;

        let poppForm = document.querySelector(".popup_form");

            super.openForm(poppForm, targetElm, {
                element: this.circlePicker,
                onMouseDown: this.onMouseDown,
                onMouseMove: this.onMouseMove,
                onMouseUp: this.onMouseUp
            });



        if (!temperatureClassicTemplateFunc) {
            let template = document.getElementById("light_classic_template");
            temperatureClassicTemplateFunc = _.template(template.innerHTML);
        }

        poppForm.innerHTML = temperatureClassicTemplateFunc({
            data: {
                title: this.title,
                text: this.text,
                temperature: this.temperature,
                image: this.image
            }
        });

        this.circlePicker = poppForm.querySelector(".circle_picker");
        this.circlePickerParent = this.circlePicker.parentNode;

        // Установка значения при рендере
        let finalPosition = "0px";
        if (this.active) {
            let parentGeometry = this.circlePickerParent.getBoundingClientRect();
            finalPosition = "calc(100% - 60px)";
        }

        if (self.withAnimation) {
            setTimeout(function () {
                self.circlePicker.style.transition = "0.2s all";
                self.circlePicker.style.marginLeft = finalPosition;

                setTimeout(function () {
                    self.circlePicker.style.transition = "none";
                }, 200)
            }, 400);
        } else {
            self.circlePicker.style.marginLeft = finalPosition;
        }

        this.handleDragAndDrop();
    }

}

/* harmony default export */ __webpack_exports__["default"] = (LigthClassicDevice);

/***/ }),

/***/ "./src/classes/Point.js":
/*!******************************!*\
  !*** ./src/classes/Point.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    getDistance (point) {
        return Math.hypot(point.x - this.x, point.y - this.y);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Point);

/***/ }),

/***/ "./src/classes/Scrollable.js":
/*!***********************************!*\
  !*** ./src/classes/Scrollable.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");



class Scrollable {

    constructor (config) {
        this.min = config.min;
        this.max = config.max;
        this.isTransition = config.isTransition;
        this.cssProperty = config.cssProperty;
        this.currentValue = config.currentValue;
        this.parentLength = config.parentLength;
        this.onMax = config.onMax;
        this.unMax = config.unMax;
        this.reachMax = false;
        this.onMin = config.onMin;
        this.unMin = config.unMin;
        this.reachMin = true;
    }

    scrollTop (domElement, scroll, withAnimation) {

        if (withAnimation) {
            domElement.style.transition = "all " + _const__WEBPACK_IMPORTED_MODULE_0__["defaultScroll"].transitionDelay + "s";

            setTimeout(function () {
                domElement.style.transition = "none";
            }, _const__WEBPACK_IMPORTED_MODULE_0__["defaultScroll"].transitionDelay * 1000);
        }

        if (!scroll && scroll !== 0) {
            scroll = _const__WEBPACK_IMPORTED_MODULE_0__["defaultScroll"].velocity;
        }

        this.currentValue = Math.min(scroll + this.currentValue, this.min);

        domElement.style[this.cssProperty] = this.currentValue + "px";

        if (this.min === this.currentValue) {
            this.onMin();
            this.reachMin = true;
        } else {
            if (this.reachMin) {
                this.unMin();
            }
        }

        if (this.reachMax) {
            this.unMax();
        }
    }


    scrollBottom (domElement, scroll, withAnimation) {

        if (withAnimation) {
            domElement.style.transition = "all " + _const__WEBPACK_IMPORTED_MODULE_0__["defaultScroll"].transitionDelay + "s";

            setTimeout(function () {
                domElement.style.transition = "none";
            }, _const__WEBPACK_IMPORTED_MODULE_0__["defaultScroll"].transitionDelay * 1000);
        }

        if (!scroll && scroll !== 0) {
            scroll = _const__WEBPACK_IMPORTED_MODULE_0__["defaultScroll"].velocity;
        }


        this.currentValue = Math.max(this.currentValue - scroll, -this.max + this.parentLength - 25);
        domElement.style[this.cssProperty] = this.currentValue + "px";

        if (-this.max + this.parentLength - 25 === this.currentValue) {
            this.onMax();
            this.reachMax = true;
        } else {
            if (this.reachMax) {
                this.unMax();
                this.reachMax = false;
            }
        }

        if (this.reachMin) {
            this.unMin();
        }
    }

}

/* harmony default export */ __webpack_exports__["default"] = (Scrollable);

/***/ }),

/***/ "./src/classes/TemperatureAlternativeDevice.js":
/*!*****************************************************!*\
  !*** ./src/classes/TemperatureAlternativeDevice.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Device */ "./src/classes/Device.js");
/**
 * Created by Odohar on 18.08.2018.
 */


// import {temperatureClassicTemplateFunc} from "../const";

let temperatureAlternativeTemplateFunc = null;

class TemperatureAlternativeDevice extends _Device__WEBPACK_IMPORTED_MODULE_0__["default"] {



    constructor (config) {
        super(config);

        // Инициализация.
        this.temperature = config.temperature;
    }

    openForm(targetElm) {
        let poppForm = document.querySelector(".popup_form");
        super.openForm(poppForm, targetElm);

        if (!temperatureAlternativeTemplateFunc) {
            let template = document.getElementById("temperature_alternative_template");
            temperatureAlternativeTemplateFunc = _.template(template.innerHTML);
        }

        poppForm.innerHTML = temperatureAlternativeTemplateFunc({
            data: {
                title: this.title,
                text: this.text,
                temperature: this.temperature,
                image: this.image
            }
        });
    }

}

/* harmony default export */ __webpack_exports__["default"] = (TemperatureAlternativeDevice);

/***/ }),

/***/ "./src/classes/TemperatureClassicDevice.js":
/*!*************************************************!*\
  !*** ./src/classes/TemperatureClassicDevice.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Device */ "./src/classes/Device.js");
/**
 * Created by Odohar on 18.08.2018.
 */


// import {temperatureClassicTemplateFunc} from "../const";

let temperatureClassicTemplateFunc = null;

class TemperatureClassicDevice extends _Device__WEBPACK_IMPORTED_MODULE_0__["default"] {



    constructor (config) {
        super(config);

        // Инициализация.
        this.temperature = config.temperature;
    }

    openForm(targetElm) {
        let poppForm = document.querySelector(".popup_form");
        super.openForm(poppForm, targetElm);

        if (!temperatureClassicTemplateFunc) {
            let template = document.getElementById("temperature_classic_template");
            temperatureClassicTemplateFunc = _.template(template.innerHTML);
        }

        poppForm.innerHTML = temperatureClassicTemplateFunc({
            data: {
                title: this.title,
                text: this.text,
                temperature: this.temperature,
                image: this.image
            }
        });


    }

}

/* harmony default export */ __webpack_exports__["default"] = (TemperatureClassicDevice);

/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: actions, types, defaultScroll, projectConsts, temperatureClassicTemplateFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultScroll", function() { return defaultScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectConsts", function() { return projectConsts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "temperatureClassicTemplateFunc", function() { return temperatureClassicTemplateFunc; });
/**
 * Created by Odohar on 18.08.2018.
 */


const actions = {
    temperatureClassic: "temperature_classic",
    temperatureAlternative: "temperature_alternative",
    lightClassic: "light_classic"
};

const types = {
    device: "DEVICE"
};

const defaultScroll = {
    velocity: 100,
    transitionDelay: 0.5
};

const projectConsts = {
    // url: "http://localhost:8080/"
    url: ""
};

let temperatureClassicTemplateFunc = null;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: updateAppliances */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAppliances", function() { return updateAppliances; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _libs_lodash_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/lodash.min */ "./src/libs/lodash.min.js");
/* harmony import */ var _libs_lodash_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_libs_lodash_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes_Binding_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Binding.js */ "./src/classes/Binding.js");
/* harmony import */ var _classes_TemperatureClassicDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/TemperatureClassicDevice */ "./src/classes/TemperatureClassicDevice.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const */ "./src/const.js");
/* harmony import */ var _classes_LigthClassicDevice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/LigthClassicDevice */ "./src/classes/LigthClassicDevice.js");
/* harmony import */ var _classes_TemperatureAlternativeDevice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/TemperatureAlternativeDevice */ "./src/classes/TemperatureAlternativeDevice.js");
/*import {initMap} from "./map";

function setMapSize (mapsId) {
    let maps = document.getElementById(mapsId);
    maps.style.width = window.innerWidth;
    maps.style.height = window.innerHeight;
}*/









let templateFunc;

const updateAppliances = function (data) {
    let appliancesPanel = document.querySelector(".appliances_panel");

    let deviceArray = [];
    let devices = data;
    let elementsHtml = "";
    for (let i = 0; i < devices.length; i++) {
        let tempObj = {
            id: i,
            type: _const__WEBPACK_IMPORTED_MODULE_4__["types"].device,
            withAnimation: false
        };

        Object.assign(tempObj, devices[i]);

        let device;

        switch (devices[i].action) {
            case _const__WEBPACK_IMPORTED_MODULE_4__["actions"].lightClassic:
                device = new _classes_LigthClassicDevice__WEBPACK_IMPORTED_MODULE_5__["default"](tempObj);
                break;
            case _const__WEBPACK_IMPORTED_MODULE_4__["actions"].temperatureAlternative:
                device = new _classes_TemperatureAlternativeDevice__WEBPACK_IMPORTED_MODULE_6__["default"](tempObj);
                break;
            default:
                device = new _classes_TemperatureClassicDevice__WEBPACK_IMPORTED_MODULE_3__["default"](tempObj);
                break;
        }

        deviceArray.push(device);
        elementsHtml += templateFunc({data: tempObj});
    }

    appliancesPanel.innerHTML = elementsHtml;
    appliancesPanel.style.width = (devices.length * 200 + (devices.length - 1) * 15) + "px";

    window.devicesArray = deviceArray;
};

document.addEventListener("DOMContentLoaded", function () {

    let config = {
        method: "GET",
        url: _const__WEBPACK_IMPORTED_MODULE_4__["projectConsts"].url + "/api/public/getDevicesInfo",
        contentType: "application/json",
    };

    Object(_api__WEBPACK_IMPORTED_MODULE_0__["getHttpPromise"])(config).then(function (response) {
        let data = JSON.parse(response);

        let tasks = data.tasks;

        let mainPanelInnerRight = document.querySelector(".main_panel_inner_right__elements");
        let taskTemplate = document.getElementById("task_template");
        templateFunc = _.template(taskTemplate.innerHTML);

        let elementsHtml = "";
        for (let i = 0; i < tasks.length; i++) {
            elementsHtml += templateFunc({data: tasks[i]});
        }

        mainPanelInnerRight.innerHTML = elementsHtml;


        let electScriptsPanel = document.querySelector(".panel_inner__elect_scripts");
        let electScriptTemplate = document.getElementById("elect_script_template");
        let electScriptTemplateFunc = _.template(electScriptTemplate.innerHTML);

        let electScripts = data.scripts;

        elementsHtml = "";
        for (let i = 0; i < 9; i++) {
            if (electScripts[i]) {
                elementsHtml += electScriptTemplateFunc({
                    data: electScripts[i]
                });
                continue;
            }

            elementsHtml += electScriptTemplateFunc({
                data: {
                    image: "",
                    title: "",
                    text: "",
                    invisible: true
                }
            });
        }

        electScriptsPanel.innerHTML = elementsHtml;

        updateAppliances(data.appliances);

        let binding = new _classes_Binding_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

        binding.setBinding();

        if (window.innerWidth <= 900 ) {
            binding.setMobileBinding();
        }
    });

    let config2 = {
        url: _const__WEBPACK_IMPORTED_MODULE_4__["projectConsts"].url + "api/public/login",
        method: "GET",
        contentType: "application/json",
    };

    Object(_api__WEBPACK_IMPORTED_MODULE_0__["getHttpPromise"])(config2).then(function (response) {
        console.log(response);

        let data = JSON.parse(response);
        document.querySelector(".user_name").innerHTML = (data.firstName) ? data.firstName : "Илья";

    });



});




/***/ }),

/***/ "./src/libs/lodash.min.js":
/*!********************************!*\
  !*** ./src/libs/lodash.min.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;(function(){function n(n,t){return n.set(t[0],t[1]),n}function t(n,t){return n.add(t),n}function r(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function e(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&!1!==t(n[r],r,n););return n}function i(n,t){for(var r=null==n?0:n.length;r--&&!1!==t(n[r],r,n););return n}function o(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return!1;return!0}function f(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function c(n,t){return!!(null==n?0:n.length)&&b(n,t,0)>-1}function a(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return!0;return!1}function l(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function s(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function h(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function p(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function _(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}function v(n){return n.split("")}function g(n){return n.match(Wt)||[]}function y(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,!1}),e}function d(n,t,r,e){for(var u=n.length,i=r+(e?1:-1);e?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function b(n,t,r){return t===t?K(n,t,r):d(n,m,r)}function w(n,t,r,e){for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function m(n){return n!==n}function x(n,t){var r=null==n?0:n.length;return r?I(n,t)/r:Sn}function j(n){return function(t){return null==t?X:t[n]}}function A(n){return function(t){return null==n?X:n[t]}}function k(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function O(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}function I(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==X&&(r=r===X?i:r+i)}return r}function R(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function z(n,t){return l(t,function(t){return[t,n[t]]})}function E(n){return function(t){return n(t)}}function S(n,t){return l(t,function(t){return n[t]})}function L(n,t){return n.has(t)}function W(n,t){for(var r=-1,e=n.length;++r<e&&b(t,n[r],0)>-1;);return r}function C(n,t){for(var r=n.length;r--&&b(t,n[r],0)>-1;);return r}function U(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;return e}function B(n){return"\\"+yr[n]}function T(n,t){return null==n?X:n[t]}function $(n){return cr.test(n)}function D(n){return ar.test(n)}function M(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}function F(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function N(n,t){return function(r){return n(t(r))}}function P(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&o!==on||(n[r]=on,i[u++]=r)}return i}function q(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function Z(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function K(n,t,r){for(var e=r-1,u=n.length;++e<u;)if(n[e]===t)return e;return-1}function V(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}function G(n){return $(n)?J(n):Cr(n)}function H(n){return $(n)?Y(n):v(n)}function J(n){for(var t=or.lastIndex=0;or.test(n);)++t;return t}function Y(n){return n.match(or)||[]}function Q(n){return n.match(fr)||[]}var X,nn=200,tn="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",rn="Expected a function",en="__lodash_hash_undefined__",un=500,on="__lodash_placeholder__",fn=1,cn=2,an=4,ln=1,sn=2,hn=1,pn=2,_n=4,vn=8,gn=16,yn=32,dn=64,bn=128,wn=256,mn=512,xn=30,jn="...",An=800,kn=16,On=1,In=2,Rn=1/0,zn=9007199254740991,En=1.7976931348623157e308,Sn=NaN,Ln=4294967295,Wn=Ln-1,Cn=Ln>>>1,Un=[["ary",bn],["bind",hn],["bindKey",pn],["curry",vn],["curryRight",gn],["flip",mn],["partial",yn],["partialRight",dn],["rearg",wn]],Bn="[object Arguments]",Tn="[object Array]",$n="[object AsyncFunction]",Dn="[object Boolean]",Mn="[object Date]",Fn="[object DOMException]",Nn="[object Error]",Pn="[object Function]",qn="[object GeneratorFunction]",Zn="[object Map]",Kn="[object Number]",Vn="[object Null]",Gn="[object Object]",Hn="[object Proxy]",Jn="[object RegExp]",Yn="[object Set]",Qn="[object String]",Xn="[object Symbol]",nt="[object Undefined]",tt="[object WeakMap]",rt="[object WeakSet]",et="[object ArrayBuffer]",ut="[object DataView]",it="[object Float32Array]",ot="[object Float64Array]",ft="[object Int8Array]",ct="[object Int16Array]",at="[object Int32Array]",lt="[object Uint8Array]",st="[object Uint8ClampedArray]",ht="[object Uint16Array]",pt="[object Uint32Array]",_t=/\b__p \+= '';/g,vt=/\b(__p \+=) '' \+/g,gt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,yt=/&(?:amp|lt|gt|quot|#39);/g,dt=/[&<>"']/g,bt=RegExp(yt.source),wt=RegExp(dt.source),mt=/<%=([\s\S]+?)%>/g,xt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,jt=/^\w*$/,At=/^\./,kt=/[\\^$.*+?()[\]{}|]/g,Ot=RegExp(kt.source),It=/^\s+|\s+$/g,Rt=/^\s+/,zt=/\s+$/,Et=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,St=/\{\n\/\* \[wrapped with (.+)\] \*/,Lt=/,? & /,Wt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ct=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ut=/\w*$/,Bt=/^[-+]0x[0-9a-f]+$/i,Tt=/^0b[01]+$/i,$t=/^\[object .+?Constructor\]$/,Dt=/^0o[0-7]+$/i,Mt=/^(?:0|[1-9]\d*)$/,Ft=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Nt=/($^)/,Pt=/['\n\r\u2028\u2029\\]/g,qt="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Zt="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Kt="["+qt+"]",Vt="[a-z\\xdf-\\xf6\\xf8-\\xff]",Gt="[^\\ud800-\\udfff"+Zt+"\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",Ht="\\ud83c[\\udffb-\\udfff]",Jt="(?:\\ud83c[\\udde6-\\uddff]){2}",Yt="[\\ud800-\\udbff][\\udc00-\\udfff]",Qt="[A-Z\\xc0-\\xd6\\xd8-\\xde]",Xt="(?:"+Kt+"|"+Ht+")?",nr="(?:\\u200d(?:"+["[^\\ud800-\\udfff]",Jt,Yt].join("|")+")[\\ufe0e\\ufe0f]?"+Xt+")*",tr="[\\ufe0e\\ufe0f]?"+Xt+nr,rr="(?:"+["[\\u2700-\\u27bf]",Jt,Yt].join("|")+")"+tr,er="(?:"+["[^\\ud800-\\udfff]"+Kt+"?",Kt,Jt,Yt,"[\\ud800-\\udfff]"].join("|")+")",ur=RegExp("['’]","g"),ir=RegExp(Kt,"g"),or=RegExp(Ht+"(?="+Ht+")|"+er+tr,"g"),fr=RegExp([Qt+"?"+Vt+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+["["+Zt+"]",Qt,"$"].join("|")+")","(?:"+Qt+"|"+Gt+")+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+["["+Zt+"]",Qt+"(?:"+Vt+"|"+Gt+")","$"].join("|")+")",Qt+"?(?:"+Vt+"|"+Gt+")+(?:['’](?:d|ll|m|re|s|t|ve))?",Qt+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)","\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)","\\d+",rr].join("|"),"g"),cr=RegExp("[\\u200d\\ud800-\\udfff"+qt+"\\ufe0e\\ufe0f]"),ar=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,lr=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],sr=-1,hr={};hr[it]=hr[ot]=hr[ft]=hr[ct]=hr[at]=hr[lt]=hr[st]=hr[ht]=hr[pt]=!0,hr[Bn]=hr[Tn]=hr[et]=hr[Dn]=hr[ut]=hr[Mn]=hr[Nn]=hr[Pn]=hr[Zn]=hr[Kn]=hr[Gn]=hr[Jn]=hr[Yn]=hr[Qn]=hr[tt]=!1;var pr={};pr[Bn]=pr[Tn]=pr[et]=pr[ut]=pr[Dn]=pr[Mn]=pr[it]=pr[ot]=pr[ft]=pr[ct]=pr[at]=pr[Zn]=pr[Kn]=pr[Gn]=pr[Jn]=pr[Yn]=pr[Qn]=pr[Xn]=pr[lt]=pr[st]=pr[ht]=pr[pt]=!0,pr[Nn]=pr[Pn]=pr[tt]=!1;var _r={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},vr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},gr={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},yr={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},dr=parseFloat,br=parseInt,wr="object"==typeof global&&global&&global.Object===Object&&global,mr="object"==typeof self&&self&&self.Object===Object&&self,xr=wr||mr||Function("return this")(),jr="object"==typeof exports&&exports&&!exports.nodeType&&exports,Ar=jr&&"object"==typeof module&&module&&!module.nodeType&&module,kr=Ar&&Ar.exports===jr,Or=kr&&wr.process,Ir=function(){try{return Or&&Or.binding&&Or.binding("util")}catch(n){}}(),Rr=Ir&&Ir.isArrayBuffer,zr=Ir&&Ir.isDate,Er=Ir&&Ir.isMap,Sr=Ir&&Ir.isRegExp,Lr=Ir&&Ir.isSet,Wr=Ir&&Ir.isTypedArray,Cr=j("length"),Ur=A(_r),Br=A(vr),Tr=A(gr),$r=function v(A){function K(n){if(rc(n)&&!ph(n)&&!(n instanceof Wt)){if(n instanceof Y)return n;if(pl.call(n,"__wrapped__"))return Yi(n)}return new Y(n)}function J(){}function Y(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=X}function Wt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ln,this.__views__=[]}function qt(){var n=new Wt(this.__wrapped__);return n.__actions__=Wu(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Wu(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Wu(this.__views__),n}function Zt(){if(this.__filtered__){var n=new Wt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Kt(){var n=this.__wrapped__.value(),t=this.__dir__,r=ph(n),e=t<0,u=r?n.length:0,i=xi(0,u,this.__views__),o=i.start,f=i.end,c=f-o,a=e?f:o-1,l=this.__iteratees__,s=l.length,h=0,p=Pl(c,this.__takeCount__);if(!r||!e&&u==c&&p==c)return _u(n,this.__actions__);var _=[];n:for(;c--&&h<p;){a+=t;for(var v=-1,g=n[a];++v<s;){var y=l[v],d=y.iteratee,b=y.type,w=d(g);if(b==In)g=w;else if(!w){if(b==On)continue n;break n}}_[h++]=g}return _}function Vt(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Gt(){this.__data__=Xl?Xl(null):{},this.size=0}function Ht(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function Jt(n){var t=this.__data__;if(Xl){var r=t[n];return r===en?X:r}return pl.call(t,n)?t[n]:X}function Yt(n){var t=this.__data__;return Xl?t[n]!==X:pl.call(t,n)}function Qt(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=Xl&&t===X?en:t,this}function Xt(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function nr(){this.__data__=[],this.size=0}function tr(n){var t=this.__data__,r=Kr(t,n);return!(r<0)&&(r==t.length-1?t.pop():Il.call(t,r,1),--this.size,!0)}function rr(n){var t=this.__data__,r=Kr(t,n);return r<0?X:t[r][1]}function er(n){return Kr(this.__data__,n)>-1}function or(n,t){var r=this.__data__,e=Kr(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this}function fr(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function cr(){this.size=0,this.__data__={hash:new Vt,map:new(Hl||Xt),string:new Vt}}function ar(n){var t=di(this,n).delete(n);return this.size-=t?1:0,t}function _r(n){return di(this,n).get(n)}function vr(n){return di(this,n).has(n)}function gr(n,t){var r=di(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this}function yr(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new fr;++t<r;)this.add(n[t])}function wr(n){return this.__data__.set(n,en),this}function mr(n){return this.__data__.has(n)}function jr(n){var t=this.__data__=new Xt(n);this.size=t.size}function Ar(){this.__data__=new Xt,this.size=0}function Or(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r}function Ir(n){return this.__data__.get(n)}function Cr(n){return this.__data__.has(n)}function Dr(n,t){var r=this.__data__;if(r instanceof Xt){var e=r.__data__;if(!Hl||e.length<nn-1)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new fr(e)}return r.set(n,t),this.size=r.size,this}function Mr(n,t){var r=ph(n),e=!r&&hh(n),u=!r&&!e&&vh(n),i=!r&&!e&&!u&&wh(n),o=r||e||u||i,f=o?R(n.length,ol):[],c=f.length;for(var a in n)!t&&!pl.call(n,a)||o&&("length"==a||u&&("offset"==a||"parent"==a)||i&&("buffer"==a||"byteLength"==a||"byteOffset"==a)||Ei(a,c))||f.push(a);return f}function Fr(n){var t=n.length;return t?n[He(0,t-1)]:X}function Nr(n,t){return Vi(Wu(n),Qr(t,0,n.length))}function Pr(n){return Vi(Wu(n))}function qr(n,t,r){(r===X||Nf(n[t],r))&&(r!==X||t in n)||Jr(n,t,r)}function Zr(n,t,r){var e=n[t];pl.call(n,t)&&Nf(e,r)&&(r!==X||t in n)||Jr(n,t,r)}function Kr(n,t){for(var r=n.length;r--;)if(Nf(n[r][0],t))return r;return-1}function Vr(n,t,r,e){return ss(n,function(n,u,i){t(e,n,r(n),i)}),e}function Gr(n,t){return n&&Cu(t,Tc(t),n)}function Hr(n,t){return n&&Cu(t,$c(t),n)}function Jr(n,t,r){"__proto__"==t&&Sl?Sl(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function Yr(n,t){for(var r=-1,e=t.length,u=Xa(e),i=null==n;++r<e;)u[r]=i?X:Cc(n,t[r]);return u}function Qr(n,t,r){return n===n&&(r!==X&&(n=n<=r?n:r),t!==X&&(n=n>=t?n:t)),n}function Xr(n,t,r,e,i,o){var f,c=t&fn,a=t&cn,l=t&an;if(r&&(f=i?r(n,e,i,o):r(n)),f!==X)return f;if(!tc(n))return n;var s=ph(n);if(s){if(f=ki(n),!c)return Wu(n,f)}else{var h=js(n),p=h==Pn||h==qn;if(vh(n))return mu(n,c);if(h==Gn||h==Bn||p&&!i){if(f=a||p?{}:Oi(n),!c)return a?Bu(n,Hr(f,n)):Uu(n,Gr(f,n))}else{if(!pr[h])return i?n:{};f=Ii(n,h,Xr,c)}}o||(o=new jr);var _=o.get(n);if(_)return _;o.set(n,f);var v=l?a?_i:pi:a?$c:Tc,g=s?X:v(n);return u(g||n,function(e,u){g&&(u=e,e=n[u]),Zr(f,u,Xr(e,t,r,u,n,o))}),f}function ne(n){var t=Tc(n);return function(r){return te(r,n,t)}}function te(n,t,r){var e=r.length;if(null==n)return!e;for(n=ul(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===X&&!(u in n)||!i(o))return!1}return!0}function re(n,t,r){if("function"!=typeof n)throw new fl(rn);return Os(function(){n.apply(X,r)},t)}function ee(n,t,r,e){var u=-1,i=c,o=!0,f=n.length,s=[],h=t.length;if(!f)return s;r&&(t=l(t,E(r))),e?(i=a,o=!1):t.length>=nn&&(i=L,o=!1,t=new yr(t));n:for(;++u<f;){var p=n[u],_=null==r?p:r(p);if(p=e||0!==p?p:0,o&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function ue(n,t){var r=!0;return ss(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ie(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===X?o===o&&!pc(o):r(o,f)))var f=o,c=i}return c}function oe(n,t,r,e){var u=n.length;for(r=bc(r),r<0&&(r=-r>u?0:u+r),e=e===X||e>u?u:bc(e),e<0&&(e+=u),e=r>e?0:wc(e);r<e;)n[r++]=t;return n}function fe(n,t){var r=[];return ss(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function ce(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=zi),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?ce(f,t-1,r,e,u):s(u,f):e||(u[u.length]=f)}return u}function ae(n,t){return n&&ps(n,t,Tc)}function le(n,t){return n&&_s(n,t,Tc)}function se(n,t){return f(t,function(t){return Qf(n[t])})}function he(n,t){t=bu(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[Gi(t[r++])];return r&&r==e?n:X}function pe(n,t,r){var e=t(n);return ph(n)?e:s(e,r(n))}function _e(n){return null==n?n===X?nt:Vn:El&&El in ul(n)?mi(n):Fi(n)}function ve(n,t){return n>t}function ge(n,t){return null!=n&&pl.call(n,t)}function ye(n,t){return null!=n&&t in ul(n)}function de(n,t,r){return n>=Pl(t,r)&&n<Nl(t,r)}function be(n,t,r){for(var e=r?a:c,u=n[0].length,i=n.length,o=i,f=Xa(i),s=1/0,h=[];o--;){var p=n[o];o&&t&&(p=l(p,E(t))),s=Pl(p.length,s),f[o]=!r&&(t||u>=120&&p.length>=120)?new yr(o&&p):X}p=n[0];var _=-1,v=f[0];n:for(;++_<u&&h.length<s;){var g=p[_],y=t?t(g):g;if(g=r||0!==g?g:0,!(v?L(v,y):e(h,y,r))){for(o=i;--o;){var d=f[o];if(!(d?L(d,y):e(n[o],y,r)))continue n}v&&v.push(y),h.push(g)}}return h}function we(n,t,r,e){return ae(n,function(n,u,i){t(e,r(n),u,i)}),e}function me(n,t,e){t=bu(t,n),n=Pi(n,t);var u=null==n?n:n[Gi(go(t))];return null==u?X:r(u,n,e)}function xe(n){return rc(n)&&_e(n)==Bn}function je(n){return rc(n)&&_e(n)==et}function Ae(n){return rc(n)&&_e(n)==Mn}function ke(n,t,r,e,u){return n===t||(null==n||null==t||!rc(n)&&!rc(t)?n!==n&&t!==t:Oe(n,t,r,e,ke,u))}function Oe(n,t,r,e,u,i){var o=ph(n),f=ph(t),c=o?Tn:js(n),a=f?Tn:js(t);c=c==Bn?Gn:c,a=a==Bn?Gn:a;var l=c==Gn,s=a==Gn,h=c==a;if(h&&vh(n)){if(!vh(t))return!1;o=!0,l=!1}if(h&&!l)return i||(i=new jr),o||wh(n)?ai(n,t,r,e,u,i):li(n,t,c,r,e,u,i);if(!(r&ln)){var p=l&&pl.call(n,"__wrapped__"),_=s&&pl.call(t,"__wrapped__");if(p||_){var v=p?n.value():n,g=_?t.value():t;return i||(i=new jr),u(v,g,r,e,i)}}return!!h&&(i||(i=new jr),si(n,t,r,e,u,i))}function Ie(n){return rc(n)&&js(n)==Zn}function Re(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=ul(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++u<i;){f=r[u];var c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===X&&!(c in n))return!1}else{var s=new jr;if(e)var h=e(a,l,c,n,t,s);if(!(h===X?ke(l,a,ln|sn,e,s):h))return!1}}return!0}function ze(n){return!(!tc(n)||Ui(n))&&(Qf(n)?bl:$t).test(Hi(n))}function Ee(n){return rc(n)&&_e(n)==Jn}function Se(n){return rc(n)&&js(n)==Yn}function Le(n){return rc(n)&&nc(n.length)&&!!hr[_e(n)]}function We(n){return"function"==typeof n?n:null==n?Ia:"object"==typeof n?ph(n)?De(n[0],n[1]):$e(n):Ua(n)}function Ce(n){if(!Bi(n))return Fl(n);var t=[];for(var r in ul(n))pl.call(n,r)&&"constructor"!=r&&t.push(r);return t}function Ue(n){if(!tc(n))return Mi(n);var t=Bi(n),r=[];for(var e in n)("constructor"!=e||!t&&pl.call(n,e))&&r.push(e);return r}function Be(n,t){return n<t}function Te(n,t){var r=-1,e=Pf(n)?Xa(n.length):[];return ss(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function $e(n){var t=bi(n);return 1==t.length&&t[0][2]?$i(t[0][0],t[0][1]):function(r){return r===n||Re(r,n,t)}}function De(n,t){return Li(n)&&Ti(t)?$i(Gi(n),t):function(r){var e=Cc(r,n);return e===X&&e===t?Bc(r,n):ke(t,e,ln|sn)}}function Me(n,t,r,e,u){n!==t&&ps(t,function(i,o){if(tc(i))u||(u=new jr),Fe(n,t,o,r,Me,e,u);else{var f=e?e(n[o],i,o+"",n,t,u):X;f===X&&(f=i),qr(n,o,f)}},$c)}function Fe(n,t,r,e,u,i,o){var f=n[r],c=t[r],a=o.get(c);if(a)return void qr(n,r,a);var l=i?i(f,c,r+"",n,t,o):X,s=l===X;if(s){var h=ph(c),p=!h&&vh(c),_=!h&&!p&&wh(c);l=c,h||p||_?ph(f)?l=f:qf(f)?l=Wu(f):p?(s=!1,l=mu(c,!0)):_?(s=!1,l=Ru(c,!0)):l=[]:lc(c)||hh(c)?(l=f,hh(f)?l=xc(f):(!tc(f)||e&&Qf(f))&&(l=Oi(c))):s=!1}s&&(o.set(c,l),u(l,c,e,i,o),o.delete(c)),qr(n,r,l)}function Ne(n,t){var r=n.length;if(r)return t+=t<0?r:0,Ei(t,r)?n[t]:X}function Pe(n,t,r){var e=-1;return t=l(t.length?t:[Ia],E(yi())),O(Te(n,function(n,r,u){return{criteria:l(t,function(t){return t(n)}),index:++e,value:n}}),function(n,t){return Eu(n,t,r)})}function qe(n,t){return Ze(n,t,function(t,r){return Bc(n,r)})}function Ze(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=he(n,o);r(f,o)&&tu(i,bu(o,n),f)}return i}function Ke(n){return function(t){return he(t,n)}}function Ve(n,t,r,e){var u=e?w:b,i=-1,o=t.length,f=n;for(n===t&&(t=Wu(t)),r&&(f=l(n,E(r)));++i<o;)for(var c=0,a=t[i],s=r?r(a):a;(c=u(f,s,c,e))>-1;)f!==n&&Il.call(f,c,1),Il.call(n,c,1);return n}function Ge(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;Ei(u)?Il.call(n,u,1):su(n,u)}}return n}function He(n,t){return n+Bl(Kl()*(t-n+1))}function Je(n,t,r,e){for(var u=-1,i=Nl(Ul((t-n)/(r||1)),0),o=Xa(i);i--;)o[e?i:++u]=n,n+=r;return o}function Ye(n,t){var r="";if(!n||t<1||t>zn)return r;do{t%2&&(r+=n),(t=Bl(t/2))&&(n+=n)}while(t);return r}function Qe(n,t){return Is(Ni(n,t,Ia),n+"")}function Xe(n){return Fr(Jc(n))}function nu(n,t){var r=Jc(n);return Vi(r,Qr(t,0,r.length))}function tu(n,t,r,e){if(!tc(n))return n;t=bu(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var c=Gi(t[u]),a=r;if(u!=o){var l=f[c];a=e?e(l,c,f):X,a===X&&(a=tc(l)?l:Ei(t[u+1])?[]:{})}Zr(f,c,a),f=f[c]}return n}function ru(n){return Vi(Jc(n))}function eu(n,t,r){var e=-1,u=n.length;t<0&&(t=-t>u?0:u+t),r=r>u?u:r,r<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=Xa(u);++e<u;)i[e]=n[e+t];return i}function uu(n,t){var r;return ss(n,function(n,e,u){return!(r=t(n,e,u))}),!!r}function iu(n,t,r){var e=0,u=null==n?e:n.length;if("number"==typeof t&&t===t&&u<=Cn){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!pc(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return ou(n,t,Ia,r)}function ou(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,c=pc(t),a=t===X;u<i;){var l=Bl((u+i)/2),s=r(n[l]),h=s!==X,p=null===s,_=s===s,v=pc(s);if(o)var g=e||_;else g=a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):!p&&!v&&(e?s<=t:s<t);g?u=l+1:i=l}return Pl(i,Wn)}function fu(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!Nf(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function cu(n){return"number"==typeof n?n:pc(n)?Sn:+n}function au(n){if("string"==typeof n)return n;if(ph(n))return l(n,au)+"";if(pc(n))return as?as.call(n):"";var t=n+"";return"0"==t&&1/n==-Rn?"-0":t}function lu(n,t,r){var e=-1,u=c,i=n.length,o=!0,f=[],l=f;if(r)o=!1,u=a;else if(i>=nn){var s=t?null:bs(n);if(s)return q(s);o=!1,u=L,l=new yr}else l=t?[]:f;n:for(;++e<i;){var h=n[e],p=t?t(h):h;if(h=r||0!==h?h:0,o&&p===p){for(var _=l.length;_--;)if(l[_]===p)continue n;t&&l.push(p),f.push(h)}else u(l,p,r)||(l!==f&&l.push(p),f.push(h))}return f}function su(n,t){return t=bu(t,n),null==(n=Pi(n,t))||delete n[Gi(go(t))]}function hu(n,t,r,e){return tu(n,t,r(he(n,t)),e)}function pu(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?eu(n,e?0:i,e?i+1:u):eu(n,e?i+1:0,e?u:i)}function _u(n,t){var r=n;return r instanceof Wt&&(r=r.value()),h(t,function(n,t){return t.func.apply(t.thisArg,s([n],t.args))},r)}function vu(n,t,r){var e=n.length;if(e<2)return e?lu(n[0]):[];for(var u=-1,i=Xa(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=ee(i[u]||o,n[f],t,r));return lu(ce(i,1),t,r)}function gu(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;){var f=e<i?t[e]:X;r(o,n[e],f)}return o}function yu(n){return qf(n)?n:[]}function du(n){return"function"==typeof n?n:Ia}function bu(n,t){return ph(n)?n:Li(n,t)?[n]:Rs(Ac(n))}function wu(n,t,r){var e=n.length;return r=r===X?e:r,!t&&r>=e?n:eu(n,t,r)}function mu(n,t){if(t)return n.slice();var r=n.length,e=jl?jl(r):new n.constructor(r);return n.copy(e),e}function xu(n){var t=new n.constructor(n.byteLength);return new xl(t).set(new xl(n)),t}function ju(n,t){var r=t?xu(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.byteLength)}function Au(t,r,e){return h(r?e(F(t),fn):F(t),n,new t.constructor)}function ku(n){var t=new n.constructor(n.source,Ut.exec(n));return t.lastIndex=n.lastIndex,t}function Ou(n,r,e){return h(r?e(q(n),fn):q(n),t,new n.constructor)}function Iu(n){return cs?ul(cs.call(n)):{}}function Ru(n,t){var r=t?xu(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.length)}function zu(n,t){if(n!==t){var r=n!==X,e=null===n,u=n===n,i=pc(n),o=t!==X,f=null===t,c=t===t,a=pc(t);if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Eu(n,t,r){for(var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;++e<o;){var c=zu(u[e],i[e]);if(c){if(e>=f)return c;return c*("desc"==r[e]?-1:1)}}return n.index-t.index}function Su(n,t,r,e){for(var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Nl(i-o,0),l=Xa(c+a),s=!e;++f<c;)l[f]=t[f];for(;++u<o;)(s||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l}function Lu(n,t,r,e){for(var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Nl(i-f,0),s=Xa(l+a),h=!e;++u<l;)s[u]=n[u];for(var p=u;++c<a;)s[p+c]=t[c];for(;++o<f;)(h||u<i)&&(s[p+r[o]]=n[u++]);return s}function Wu(n,t){var r=-1,e=n.length;for(t||(t=Xa(e));++r<e;)t[r]=n[r];return t}function Cu(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):X;c===X&&(c=n[f]),u?Jr(r,f,c):Zr(r,f,c)}return r}function Uu(n,t){return Cu(n,ms(n),t)}function Bu(n,t){return Cu(n,xs(n),t)}function Tu(n,t){return function(r,u){var i=ph(r)?e:Vr,o=t?t():{};return i(r,n,yi(u,2),o)}}function $u(n){return Qe(function(t,r){var e=-1,u=r.length,i=u>1?r[u-1]:X,o=u>2?r[2]:X;for(i=n.length>3&&"function"==typeof i?(u--,i):X,o&&Si(r[0],r[1],o)&&(i=u<3?X:i,u=1),t=ul(t);++e<u;){var f=r[e];f&&n(t,f,e,i)}return t})}function Du(n,t){return function(r,e){if(null==r)return r;if(!Pf(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=ul(r);(t?i--:++i<u)&&!1!==e(o[i],i,o););return r}}function Mu(n){return function(t,r,e){for(var u=-1,i=ul(t),o=e(t),f=o.length;f--;){var c=o[n?f:++u];if(!1===r(i[c],c,i))break}return t}}function Fu(n,t,r){function e(){return(this&&this!==xr&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=t&hn,i=qu(n);return e}function Nu(n){return function(t){t=Ac(t);var r=$(t)?H(t):X,e=r?r[0]:t.charAt(0),u=r?wu(r,1).join(""):t.slice(1);return e[n]()+u}}function Pu(n){return function(t){return h(xa(ra(t).replace(ur,"")),n,"")}}function qu(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=ls(n.prototype),e=n.apply(r,t);return tc(e)?e:r}}function Zu(n,t,e){function u(){for(var o=arguments.length,f=Xa(o),c=o,a=gi(u);c--;)f[c]=arguments[c];var l=o<3&&f[0]!==a&&f[o-1]!==a?[]:P(f,a);return(o-=l.length)<e?ri(n,t,Gu,u.placeholder,X,f,l,X,X,e-o):r(this&&this!==xr&&this instanceof u?i:n,this,f)}var i=qu(n);return u}function Ku(n){return function(t,r,e){var u=ul(t);if(!Pf(t)){var i=yi(r,3);t=Tc(t),r=function(n){return i(u[n],n,u)}}var o=n(t,r,e);return o>-1?u[i?t[o]:o]:X}}function Vu(n){return hi(function(t){var r=t.length,e=r,u=Y.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if("function"!=typeof i)throw new fl(rn);if(u&&!o&&"wrapper"==vi(i))var o=new Y([],!0)}for(e=o?e:r;++e<r;){i=t[e];var f=vi(i),c="wrapper"==f?ws(i):X;o=c&&Ci(c[0])&&c[1]==(bn|vn|yn|wn)&&!c[4].length&&1==c[9]?o[vi(c[0])].apply(o,c[3]):1==i.length&&Ci(i)?o[f]():o.thru(i)}return function(){var n=arguments,e=n[0];if(o&&1==n.length&&ph(e))return o.plant(e).value();for(var u=0,i=r?t[u].apply(this,n):e;++u<r;)i=t[u].call(this,i);return i}})}function Gu(n,t,r,e,u,i,o,f,c,a){function l(){for(var y=arguments.length,d=Xa(y),b=y;b--;)d[b]=arguments[b];if(_)var w=gi(l),m=U(d,w);if(e&&(d=Su(d,e,u,_)),i&&(d=Lu(d,i,o,_)),y-=m,_&&y<a){var x=P(d,w);return ri(n,t,Gu,l.placeholder,r,d,x,f,c,a-y)}var j=h?r:this,A=p?j[n]:n;return y=d.length,f?d=qi(d,f):v&&y>1&&d.reverse(),s&&c<y&&(d.length=c),this&&this!==xr&&this instanceof l&&(A=g||qu(A)),A.apply(j,d)}var s=t&bn,h=t&hn,p=t&pn,_=t&(vn|gn),v=t&mn,g=p?X:qu(n);return l}function Hu(n,t){return function(r,e){return we(r,n,t(e),{})}}function Ju(n,t){return function(r,e){var u;if(r===X&&e===X)return t;if(r!==X&&(u=r),e!==X){if(u===X)return e;"string"==typeof r||"string"==typeof e?(r=au(r),e=au(e)):(r=cu(r),e=cu(e)),u=n(r,e)}return u}}function Yu(n){return hi(function(t){return t=l(t,E(yi())),Qe(function(e){var u=this;return n(t,function(n){return r(n,u,e)})})})}function Qu(n,t){t=t===X?" ":au(t);var r=t.length;if(r<2)return r?Ye(t,n):t;var e=Ye(t,Ul(n/G(t)));return $(t)?wu(H(e),0,n).join(""):e.slice(0,n)}function Xu(n,t,e,u){function i(){for(var t=-1,c=arguments.length,a=-1,l=u.length,s=Xa(l+c),h=this&&this!==xr&&this instanceof i?f:n;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++t];return r(h,o?e:this,s)}var o=t&hn,f=qu(n);return i}function ni(n){return function(t,r,e){return e&&"number"!=typeof e&&Si(t,r,e)&&(r=e=X),t=dc(t),r===X?(r=t,t=0):r=dc(r),e=e===X?t<r?1:-1:dc(e),Je(t,r,e,n)}}function ti(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=mc(t),r=mc(r)),n(t,r)}}function ri(n,t,r,e,u,i,o,f,c,a){var l=t&vn,s=l?o:X,h=l?X:o,p=l?i:X,_=l?X:i;t|=l?yn:dn,(t&=~(l?dn:yn))&_n||(t&=~(hn|pn));var v=[n,t,u,p,s,_,h,f,c,a],g=r.apply(X,v);return Ci(n)&&ks(g,v),g.placeholder=e,Zi(g,n,t)}function ei(n){var t=el[n];return function(n,r){if(n=mc(n),r=null==r?0:Pl(bc(r),292)){var e=(Ac(n)+"e").split("e");return e=(Ac(t(e[0]+"e"+(+e[1]+r)))+"e").split("e"),+(e[0]+"e"+(+e[1]-r))}return t(n)}}function ui(n){return function(t){var r=js(t);return r==Zn?F(t):r==Yn?Z(t):z(t,n(t))}}function ii(n,t,r,e,u,i,o,f){var c=t&pn;if(!c&&"function"!=typeof n)throw new fl(rn);var a=e?e.length:0;if(a||(t&=~(yn|dn),e=u=X),o=o===X?o:Nl(bc(o),0),f=f===X?f:bc(f),a-=u?u.length:0,t&dn){var l=e,s=u;e=u=X}var h=c?X:ws(n),p=[n,t,r,e,u,l,s,i,o,f];if(h&&Di(p,h),n=p[0],t=p[1],r=p[2],e=p[3],u=p[4],f=p[9]=p[9]===X?c?0:n.length:Nl(p[9]-a,0),!f&&t&(vn|gn)&&(t&=~(vn|gn)),t&&t!=hn)_=t==vn||t==gn?Zu(n,t,f):t!=yn&&t!=(hn|yn)||u.length?Gu.apply(X,p):Xu(n,t,r,e);else var _=Fu(n,t,r);return Zi((h?vs:ks)(_,p),n,t)}function oi(n,t,r,e){return n===X||Nf(n,ll[r])&&!pl.call(e,r)?t:n}function fi(n,t,r,e,u,i){return tc(n)&&tc(t)&&(i.set(t,n),Me(n,t,X,fi,i),i.delete(t)),n}function ci(n){return lc(n)?X:n}function ai(n,t,r,e,u,i){var o=r&ln,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return!1;var a=i.get(n);if(a&&i.get(t))return a==t;var l=-1,s=!0,h=r&sn?new yr:X;for(i.set(n,t),i.set(t,n);++l<f;){var p=n[l],v=t[l];if(e)var g=o?e(v,p,l,t,n,i):e(p,v,l,n,t,i);if(g!==X){if(g)continue;s=!1;break}if(h){if(!_(t,function(n,t){if(!L(h,t)&&(p===n||u(p,n,r,e,i)))return h.push(t)})){s=!1;break}}else if(p!==v&&!u(p,v,r,e,i)){s=!1;break}}return i.delete(n),i.delete(t),s}function li(n,t,r,e,u,i,o){switch(r){case ut:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case et:return!(n.byteLength!=t.byteLength||!i(new xl(n),new xl(t)));case Dn:case Mn:case Kn:return Nf(+n,+t);case Nn:return n.name==t.name&&n.message==t.message;case Jn:case Qn:return n==t+"";case Zn:var f=F;case Yn:var c=e&ln;if(f||(f=q),n.size!=t.size&&!c)return!1;var a=o.get(n);if(a)return a==t;e|=sn,o.set(n,t);var l=ai(f(n),f(t),e,u,i,o);return o.delete(n),l;case Xn:if(cs)return cs.call(n)==cs.call(t)}return!1}function si(n,t,r,e,u,i){var o=r&ln,f=pi(n),c=f.length;if(c!=pi(t).length&&!o)return!1;for(var a=c;a--;){var l=f[a];if(!(o?l in t:pl.call(t,l)))return!1}var s=i.get(n);if(s&&i.get(t))return s==t;var h=!0;i.set(n,t),i.set(t,n);for(var p=o;++a<c;){l=f[a];var _=n[l],v=t[l];if(e)var g=o?e(v,_,l,t,n,i):e(_,v,l,n,t,i);if(!(g===X?_===v||u(_,v,r,e,i):g)){h=!1;break}p||(p="constructor"==l)}if(h&&!p){var y=n.constructor,d=t.constructor;y!=d&&"constructor"in n&&"constructor"in t&&!("function"==typeof y&&y instanceof y&&"function"==typeof d&&d instanceof d)&&(h=!1)}return i.delete(n),i.delete(t),h}function hi(n){return Is(Ni(n,X,co),n+"")}function pi(n){return pe(n,Tc,ms)}function _i(n){return pe(n,$c,xs)}function vi(n){
for(var t=n.name+"",r=ts[t],e=pl.call(ts,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function gi(n){return(pl.call(K,"placeholder")?K:n).placeholder}function yi(){var n=K.iteratee||Ra;return n=n===Ra?We:n,arguments.length?n(arguments[0],arguments[1]):n}function di(n,t){var r=n.__data__;return Wi(t)?r["string"==typeof t?"string":"hash"]:r.map}function bi(n){for(var t=Tc(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,Ti(u)]}return t}function wi(n,t){var r=T(n,t);return ze(r)?r:X}function mi(n){var t=pl.call(n,El),r=n[El];try{n[El]=X}catch(n){}var e=gl.call(n);return t?n[El]=r:delete n[El],e}function xi(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=Pl(t,n+o);break;case"takeRight":n=Nl(n,t-o)}}return{start:n,end:t}}function ji(n){var t=n.match(St);return t?t[1].split(Lt):[]}function Ai(n,t,r){t=bu(t,n);for(var e=-1,u=t.length,i=!1;++e<u;){var o=Gi(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:!!(u=null==n?0:n.length)&&nc(u)&&Ei(o,u)&&(ph(n)||hh(n))}function ki(n){var t=n.length,r=n.constructor(t);return t&&"string"==typeof n[0]&&pl.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Oi(n){return"function"!=typeof n.constructor||Bi(n)?{}:ls(Al(n))}function Ii(n,t,r,e){var u=n.constructor;switch(t){case et:return xu(n);case Dn:case Mn:return new u(+n);case ut:return ju(n,e);case it:case ot:case ft:case ct:case at:case lt:case st:case ht:case pt:return Ru(n,e);case Zn:return Au(n,e,r);case Kn:case Qn:return new u(n);case Jn:return ku(n);case Yn:return Ou(n,e,r);case Xn:return Iu(n)}}function Ri(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?"& ":"")+t[e],t=t.join(r>2?", ":" "),n.replace(Et,"{\n/* [wrapped with "+t+"] */\n")}function zi(n){return ph(n)||hh(n)||!!(Rl&&n&&n[Rl])}function Ei(n,t){return!!(t=null==t?zn:t)&&("number"==typeof n||Mt.test(n))&&n>-1&&n%1==0&&n<t}function Si(n,t,r){if(!tc(r))return!1;var e=typeof t;return!!("number"==e?Pf(r)&&Ei(t,r.length):"string"==e&&t in r)&&Nf(r[t],n)}function Li(n,t){if(ph(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!pc(n))||(jt.test(n)||!xt.test(n)||null!=t&&n in ul(t))}function Wi(n){var t=typeof n;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n}function Ci(n){var t=vi(n),r=K[t];if("function"!=typeof r||!(t in Wt.prototype))return!1;if(n===r)return!0;var e=ws(r);return!!e&&n===e[0]}function Ui(n){return!!vl&&vl in n}function Bi(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||ll)}function Ti(n){return n===n&&!tc(n)}function $i(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==X||n in ul(r)))}}function Di(n,t){var r=n[1],e=t[1],u=r|e,i=u<(hn|pn|bn),o=e==bn&&r==vn||e==bn&&r==wn&&n[7].length<=t[8]||e==(bn|wn)&&t[7].length<=t[8]&&r==vn;if(!i&&!o)return n;e&hn&&(n[2]=t[2],u|=r&hn?0:_n);var f=t[3];if(f){var c=n[3];n[3]=c?Su(c,f,t[4]):f,n[4]=c?P(n[3],on):t[4]}return f=t[5],f&&(c=n[5],n[5]=c?Lu(c,f,t[6]):f,n[6]=c?P(n[5],on):t[6]),f=t[7],f&&(n[7]=f),e&bn&&(n[8]=null==n[8]?t[8]:Pl(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u,n}function Mi(n){var t=[];if(null!=n)for(var r in ul(n))t.push(r);return t}function Fi(n){return gl.call(n)}function Ni(n,t,e){return t=Nl(t===X?n.length-1:t,0),function(){for(var u=arguments,i=-1,o=Nl(u.length-t,0),f=Xa(o);++i<o;)f[i]=u[t+i];i=-1;for(var c=Xa(t+1);++i<t;)c[i]=u[i];return c[t]=e(f),r(n,this,c)}}function Pi(n,t){return t.length<2?n:he(n,eu(t,0,-1))}function qi(n,t){for(var r=n.length,e=Pl(t.length,r),u=Wu(n);e--;){var i=t[e];n[e]=Ei(i,r)?u[i]:X}return n}function Zi(n,t,r){var e=t+"";return Is(n,Ri(e,Ji(ji(e),r)))}function Ki(n){var t=0,r=0;return function(){var e=ql(),u=kn-(e-r);if(r=e,u>0){if(++t>=An)return arguments[0]}else t=0;return n.apply(X,arguments)}}function Vi(n,t){var r=-1,e=n.length,u=e-1;for(t=t===X?e:t;++r<t;){var i=He(r,u),o=n[i];n[i]=n[r],n[r]=o}return n.length=t,n}function Gi(n){if("string"==typeof n||pc(n))return n;var t=n+"";return"0"==t&&1/n==-Rn?"-0":t}function Hi(n){if(null!=n){try{return hl.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function Ji(n,t){return u(Un,function(r){var e="_."+r[0];t&r[1]&&!c(n,e)&&n.push(e)}),n.sort()}function Yi(n){if(n instanceof Wt)return n.clone();var t=new Y(n.__wrapped__,n.__chain__);return t.__actions__=Wu(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Qi(n,t,r){t=(r?Si(n,t,r):t===X)?1:Nl(bc(t),0);var e=null==n?0:n.length;if(!e||t<1)return[];for(var u=0,i=0,o=Xa(Ul(e/t));u<e;)o[i++]=eu(n,u,u+=t);return o}function Xi(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u}function no(){var n=arguments.length;if(!n)return[];for(var t=Xa(n-1),r=arguments[0],e=n;e--;)t[e-1]=arguments[e];return s(ph(r)?Wu(r):[r],ce(t,1))}function to(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:bc(t),eu(n,t<0?0:t,e)):[]}function ro(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:bc(t),t=e-t,eu(n,0,t<0?0:t)):[]}function eo(n,t){return n&&n.length?pu(n,yi(t,3),!0,!0):[]}function uo(n,t){return n&&n.length?pu(n,yi(t,3),!0):[]}function io(n,t,r,e){var u=null==n?0:n.length;return u?(r&&"number"!=typeof r&&Si(n,t,r)&&(r=0,e=u),oe(n,t,r,e)):[]}function oo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:bc(r);return u<0&&(u=Nl(e+u,0)),d(n,yi(t,3),u)}function fo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==X&&(u=bc(r),u=r<0?Nl(e+u,0):Pl(u,e-1)),d(n,yi(t,3),u,!0)}function co(n){return(null==n?0:n.length)?ce(n,1):[]}function ao(n){return(null==n?0:n.length)?ce(n,Rn):[]}function lo(n,t){return(null==n?0:n.length)?(t=t===X?1:bc(t),ce(n,t)):[]}function so(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e}function ho(n){return n&&n.length?n[0]:X}function po(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:bc(r);return u<0&&(u=Nl(e+u,0)),b(n,t,u)}function _o(n){return(null==n?0:n.length)?eu(n,0,-1):[]}function vo(n,t){return null==n?"":Ml.call(n,t)}function go(n){var t=null==n?0:n.length;return t?n[t-1]:X}function yo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;return r!==X&&(u=bc(r),u=u<0?Nl(e+u,0):Pl(u,e-1)),t===t?V(n,t,u):d(n,m,u,!0)}function bo(n,t){return n&&n.length?Ne(n,bc(t)):X}function wo(n,t){return n&&n.length&&t&&t.length?Ve(n,t):n}function mo(n,t,r){return n&&n.length&&t&&t.length?Ve(n,t,yi(r,2)):n}function xo(n,t,r){return n&&n.length&&t&&t.length?Ve(n,t,X,r):n}function jo(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=yi(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return Ge(n,u),r}function Ao(n){return null==n?n:Vl.call(n)}function ko(n,t,r){var e=null==n?0:n.length;return e?(r&&"number"!=typeof r&&Si(n,t,r)?(t=0,r=e):(t=null==t?0:bc(t),r=r===X?e:bc(r)),eu(n,t,r)):[]}function Oo(n,t){return iu(n,t)}function Io(n,t,r){return ou(n,t,yi(r,2))}function Ro(n,t){var r=null==n?0:n.length;if(r){var e=iu(n,t);if(e<r&&Nf(n[e],t))return e}return-1}function zo(n,t){return iu(n,t,!0)}function Eo(n,t,r){return ou(n,t,yi(r,2),!0)}function So(n,t){if(null==n?0:n.length){var r=iu(n,t,!0)-1;if(Nf(n[r],t))return r}return-1}function Lo(n){return n&&n.length?fu(n):[]}function Wo(n,t){return n&&n.length?fu(n,yi(t,2)):[]}function Co(n){var t=null==n?0:n.length;return t?eu(n,1,t):[]}function Uo(n,t,r){return n&&n.length?(t=r||t===X?1:bc(t),eu(n,0,t<0?0:t)):[]}function Bo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:bc(t),t=e-t,eu(n,t<0?0:t,e)):[]}function To(n,t){return n&&n.length?pu(n,yi(t,3),!1,!0):[]}function $o(n,t){return n&&n.length?pu(n,yi(t,3)):[]}function Do(n){return n&&n.length?lu(n):[]}function Mo(n,t){return n&&n.length?lu(n,yi(t,2)):[]}function Fo(n,t){return t="function"==typeof t?t:X,n&&n.length?lu(n,X,t):[]}function No(n){if(!n||!n.length)return[];var t=0;return n=f(n,function(n){if(qf(n))return t=Nl(n.length,t),!0}),R(t,function(t){return l(n,j(t))})}function Po(n,t){if(!n||!n.length)return[];var e=No(n);return null==t?e:l(e,function(n){return r(t,X,n)})}function qo(n,t){return gu(n||[],t||[],Zr)}function Zo(n,t){return gu(n||[],t||[],tu)}function Ko(n){var t=K(n);return t.__chain__=!0,t}function Vo(n,t){return t(n),n}function Go(n,t){return t(n)}function Ho(){return Ko(this)}function Jo(){return new Y(this.value(),this.__chain__)}function Yo(){this.__values__===X&&(this.__values__=yc(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?X:this.__values__[this.__index__++]}}function Qo(){return this}function Xo(n){for(var t,r=this;r instanceof J;){var e=Yi(r);e.__index__=0,e.__values__=X,t?u.__wrapped__=e:t=e;var u=e;r=r.__wrapped__}return u.__wrapped__=n,t}function nf(){var n=this.__wrapped__;if(n instanceof Wt){var t=n;return this.__actions__.length&&(t=new Wt(this)),t=t.reverse(),t.__actions__.push({func:Go,args:[Ao],thisArg:X}),new Y(t,this.__chain__)}return this.thru(Ao)}function tf(){return _u(this.__wrapped__,this.__actions__)}function rf(n,t,r){var e=ph(n)?o:ue;return r&&Si(n,t,r)&&(t=X),e(n,yi(t,3))}function ef(n,t){return(ph(n)?f:fe)(n,yi(t,3))}function uf(n,t){return ce(sf(n,t),1)}function of(n,t){return ce(sf(n,t),Rn)}function ff(n,t,r){return r=r===X?1:bc(r),ce(sf(n,t),r)}function cf(n,t){return(ph(n)?u:ss)(n,yi(t,3))}function af(n,t){return(ph(n)?i:hs)(n,yi(t,3))}function lf(n,t,r,e){n=Pf(n)?n:Jc(n),r=r&&!e?bc(r):0;var u=n.length;return r<0&&(r=Nl(u+r,0)),hc(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&b(n,t,r)>-1}function sf(n,t){return(ph(n)?l:Te)(n,yi(t,3))}function hf(n,t,r,e){return null==n?[]:(ph(t)||(t=null==t?[]:[t]),r=e?X:r,ph(r)||(r=null==r?[]:[r]),Pe(n,t,r))}function pf(n,t,r){var e=ph(n)?h:k,u=arguments.length<3;return e(n,yi(t,4),r,u,ss)}function _f(n,t,r){var e=ph(n)?p:k,u=arguments.length<3;return e(n,yi(t,4),r,u,hs)}function vf(n,t){return(ph(n)?f:fe)(n,zf(yi(t,3)))}function gf(n){return(ph(n)?Fr:Xe)(n)}function yf(n,t,r){return t=(r?Si(n,t,r):t===X)?1:bc(t),(ph(n)?Nr:nu)(n,t)}function df(n){return(ph(n)?Pr:ru)(n)}function bf(n){if(null==n)return 0;if(Pf(n))return hc(n)?G(n):n.length;var t=js(n);return t==Zn||t==Yn?n.size:Ce(n).length}function wf(n,t,r){var e=ph(n)?_:uu;return r&&Si(n,t,r)&&(t=X),e(n,yi(t,3))}function mf(n,t){if("function"!=typeof t)throw new fl(rn);return n=bc(n),function(){if(--n<1)return t.apply(this,arguments)}}function xf(n,t,r){return t=r?X:t,t=n&&null==t?n.length:t,ii(n,bn,X,X,X,X,t)}function jf(n,t){var r;if("function"!=typeof t)throw new fl(rn);return n=bc(n),function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=X),r}}function Af(n,t,r){t=r?X:t;var e=ii(n,vn,X,X,X,X,X,t);return e.placeholder=Af.placeholder,e}function kf(n,t,r){t=r?X:t;var e=ii(n,gn,X,X,X,X,X,t);return e.placeholder=kf.placeholder,e}function Of(n,t,r){function e(t){var r=h,e=p;return h=p=X,d=t,v=n.apply(e,r)}function u(n){return d=n,g=Os(f,t),b?e(n):v}function i(n){var r=n-y,e=n-d,u=t-r;return w?Pl(u,_-e):u}function o(n){var r=n-y,e=n-d;return y===X||r>=t||r<0||w&&e>=_}function f(){var n=th();if(o(n))return c(n);g=Os(f,i(n))}function c(n){return g=X,m&&h?e(n):(h=p=X,v)}function a(){g!==X&&ds(g),d=0,h=y=p=g=X}function l(){return g===X?v:c(th())}function s(){var n=th(),r=o(n);if(h=arguments,p=this,y=n,r){if(g===X)return u(y);if(w)return g=Os(f,t),e(y)}return g===X&&(g=Os(f,t)),v}var h,p,_,v,g,y,d=0,b=!1,w=!1,m=!0;if("function"!=typeof n)throw new fl(rn);return t=mc(t)||0,tc(r)&&(b=!!r.leading,w="maxWait"in r,_=w?Nl(mc(r.maxWait)||0,t):_,m="trailing"in r?!!r.trailing:m),s.cancel=a,s.flush=l,s}function If(n){return ii(n,mn)}function Rf(n,t){if("function"!=typeof n||null!=t&&"function"!=typeof t)throw new fl(rn);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o)||i,o};return r.cache=new(Rf.Cache||fr),r}function zf(n){if("function"!=typeof n)throw new fl(rn);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function Ef(n){return jf(2,n)}function Sf(n,t){if("function"!=typeof n)throw new fl(rn);return t=t===X?t:bc(t),Qe(n,t)}function Lf(n,t){if("function"!=typeof n)throw new fl(rn);return t=null==t?0:Nl(bc(t),0),Qe(function(e){var u=e[t],i=wu(e,0,t);return u&&s(i,u),r(n,this,i)})}function Wf(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new fl(rn);return tc(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),Of(n,t,{leading:e,maxWait:t,trailing:u})}function Cf(n){return xf(n,1)}function Uf(n,t){return fh(du(t),n)}function Bf(){if(!arguments.length)return[];var n=arguments[0];return ph(n)?n:[n]}function Tf(n){return Xr(n,an)}function $f(n,t){return t="function"==typeof t?t:X,Xr(n,an,t)}function Df(n){return Xr(n,fn|an)}function Mf(n,t){return t="function"==typeof t?t:X,Xr(n,fn|an,t)}function Ff(n,t){return null==t||te(n,t,Tc(t))}function Nf(n,t){return n===t||n!==n&&t!==t}function Pf(n){return null!=n&&nc(n.length)&&!Qf(n)}function qf(n){return rc(n)&&Pf(n)}function Zf(n){return!0===n||!1===n||rc(n)&&_e(n)==Dn}function Kf(n){return rc(n)&&1===n.nodeType&&!lc(n)}function Vf(n){if(null==n)return!0;if(Pf(n)&&(ph(n)||"string"==typeof n||"function"==typeof n.splice||vh(n)||wh(n)||hh(n)))return!n.length;var t=js(n);if(t==Zn||t==Yn)return!n.size;if(Bi(n))return!Ce(n).length;for(var r in n)if(pl.call(n,r))return!1;return!0}function Gf(n,t){return ke(n,t)}function Hf(n,t,r){r="function"==typeof r?r:X;var e=r?r(n,t):X;return e===X?ke(n,t,X,r):!!e}function Jf(n){if(!rc(n))return!1;var t=_e(n);return t==Nn||t==Fn||"string"==typeof n.message&&"string"==typeof n.name&&!lc(n)}function Yf(n){return"number"==typeof n&&Dl(n)}function Qf(n){if(!tc(n))return!1;var t=_e(n);return t==Pn||t==qn||t==$n||t==Hn}function Xf(n){return"number"==typeof n&&n==bc(n)}function nc(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=zn}function tc(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function rc(n){return null!=n&&"object"==typeof n}function ec(n,t){return n===t||Re(n,t,bi(t))}function uc(n,t,r){return r="function"==typeof r?r:X,Re(n,t,bi(t),r)}function ic(n){return ac(n)&&n!=+n}function oc(n){if(As(n))throw new tl(tn);return ze(n)}function fc(n){return null===n}function cc(n){return null==n}function ac(n){return"number"==typeof n||rc(n)&&_e(n)==Kn}function lc(n){if(!rc(n)||_e(n)!=Gn)return!1;var t=Al(n);if(null===t)return!0;var r=pl.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&hl.call(r)==yl}function sc(n){return Xf(n)&&n>=-zn&&n<=zn}function hc(n){return"string"==typeof n||!ph(n)&&rc(n)&&_e(n)==Qn}function pc(n){return"symbol"==typeof n||rc(n)&&_e(n)==Xn}function _c(n){return n===X}function vc(n){return rc(n)&&js(n)==tt}function gc(n){return rc(n)&&_e(n)==rt}function yc(n){if(!n)return[];if(Pf(n))return hc(n)?H(n):Wu(n);if(zl&&n[zl])return M(n[zl]());var t=js(n);return(t==Zn?F:t==Yn?q:Jc)(n)}function dc(n){if(!n)return 0===n?n:0;if((n=mc(n))===Rn||n===-Rn){return(n<0?-1:1)*En}return n===n?n:0}function bc(n){var t=dc(n),r=t%1;return t===t?r?t-r:t:0}function wc(n){return n?Qr(bc(n),0,Ln):0}function mc(n){if("number"==typeof n)return n;if(pc(n))return Sn;if(tc(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=tc(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(It,"");var r=Tt.test(n);return r||Dt.test(n)?br(n.slice(2),r?2:8):Bt.test(n)?Sn:+n}function xc(n){return Cu(n,$c(n))}function jc(n){return n?Qr(bc(n),-zn,zn):0===n?n:0}function Ac(n){return null==n?"":au(n)}function kc(n,t){var r=ls(n);return null==t?r:Gr(r,t)}function Oc(n,t){return y(n,yi(t,3),ae)}function Ic(n,t){return y(n,yi(t,3),le)}function Rc(n,t){return null==n?n:ps(n,yi(t,3),$c)}function zc(n,t){return null==n?n:_s(n,yi(t,3),$c)}function Ec(n,t){return n&&ae(n,yi(t,3))}function Sc(n,t){return n&&le(n,yi(t,3))}function Lc(n){return null==n?[]:se(n,Tc(n))}function Wc(n){return null==n?[]:se(n,$c(n))}function Cc(n,t,r){var e=null==n?X:he(n,t);return e===X?r:e}function Uc(n,t){return null!=n&&Ai(n,t,ge)}function Bc(n,t){return null!=n&&Ai(n,t,ye)}function Tc(n){return Pf(n)?Mr(n):Ce(n)}function $c(n){return Pf(n)?Mr(n,!0):Ue(n)}function Dc(n,t){var r={};return t=yi(t,3),ae(n,function(n,e,u){Jr(r,t(n,e,u),n)}),r}function Mc(n,t){var r={};return t=yi(t,3),ae(n,function(n,e,u){Jr(r,e,t(n,e,u))}),r}function Fc(n,t){return Nc(n,zf(yi(t)))}function Nc(n,t){if(null==n)return{};var r=l(_i(n),function(n){return[n]});return t=yi(t),Ze(n,r,function(n,r){return t(n,r[0])})}function Pc(n,t,r){t=bu(t,n);var e=-1,u=t.length;for(u||(u=1,n=X);++e<u;){var i=null==n?X:n[Gi(t[e])];i===X&&(e=u,i=r),n=Qf(i)?i.call(n):i}return n}function qc(n,t,r){return null==n?n:tu(n,t,r)}function Zc(n,t,r,e){return e="function"==typeof e?e:X,null==n?n:tu(n,t,r,e)}function Kc(n,t,r){var e=ph(n),i=e||vh(n)||wh(n);if(t=yi(t,4),null==r){var o=n&&n.constructor;r=i?e?new o:[]:tc(n)&&Qf(o)?ls(Al(n)):{}}return(i?u:ae)(n,function(n,e,u){return t(r,n,e,u)}),r}function Vc(n,t){return null==n||su(n,t)}function Gc(n,t,r){return null==n?n:hu(n,t,du(r))}function Hc(n,t,r,e){return e="function"==typeof e?e:X,null==n?n:hu(n,t,du(r),e)}function Jc(n){return null==n?[]:S(n,Tc(n))}function Yc(n){return null==n?[]:S(n,$c(n))}function Qc(n,t,r){return r===X&&(r=t,t=X),r!==X&&(r=mc(r),r=r===r?r:0),t!==X&&(t=mc(t),t=t===t?t:0),Qr(mc(n),t,r)}function Xc(n,t,r){return t=dc(t),r===X?(r=t,t=0):r=dc(r),n=mc(n),de(n,t,r)}function na(n,t,r){if(r&&"boolean"!=typeof r&&Si(n,t,r)&&(t=r=X),r===X&&("boolean"==typeof t?(r=t,t=X):"boolean"==typeof n&&(r=n,n=X)),n===X&&t===X?(n=0,t=1):(n=dc(n),t===X?(t=n,n=0):t=dc(t)),n>t){var e=n;n=t,t=e}if(r||n%1||t%1){var u=Kl();return Pl(n+u*(t-n+dr("1e-"+((u+"").length-1))),t)}return He(n,t)}function ta(n){return Kh(Ac(n).toLowerCase())}function ra(n){return(n=Ac(n))&&n.replace(Ft,Ur).replace(ir,"")}function ea(n,t,r){n=Ac(n),t=au(t);var e=n.length;r=r===X?e:Qr(bc(r),0,e);var u=r;return(r-=t.length)>=0&&n.slice(r,u)==t}function ua(n){return n=Ac(n),n&&wt.test(n)?n.replace(dt,Br):n}function ia(n){return n=Ac(n),n&&Ot.test(n)?n.replace(kt,"\\$&"):n}function oa(n,t,r){n=Ac(n),t=bc(t);var e=t?G(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return Qu(Bl(u),r)+n+Qu(Ul(u),r)}function fa(n,t,r){n=Ac(n),t=bc(t);var e=t?G(n):0;return t&&e<t?n+Qu(t-e,r):n}function ca(n,t,r){n=Ac(n),t=bc(t);var e=t?G(n):0;return t&&e<t?Qu(t-e,r)+n:n}function aa(n,t,r){return r||null==t?t=0:t&&(t=+t),Zl(Ac(n).replace(Rt,""),t||0)}function la(n,t,r){return t=(r?Si(n,t,r):t===X)?1:bc(t),Ye(Ac(n),t)}function sa(){var n=arguments,t=Ac(n[0]);return n.length<3?t:t.replace(n[1],n[2])}function ha(n,t,r){return r&&"number"!=typeof r&&Si(n,t,r)&&(t=r=X),(r=r===X?Ln:r>>>0)?(n=Ac(n),n&&("string"==typeof t||null!=t&&!dh(t))&&!(t=au(t))&&$(n)?wu(H(n),0,r):n.split(t,r)):[]}function pa(n,t,r){return n=Ac(n),r=null==r?0:Qr(bc(r),0,n.length),t=au(t),n.slice(r,r+t.length)==t}function _a(n,t,r){var e=K.templateSettings;r&&Si(n,t,r)&&(t=X),n=Ac(n),t=kh({},t,e,oi);var u,i,o=kh({},t.imports,e.imports,oi),f=Tc(o),c=S(o,f),a=0,l=t.interpolate||Nt,s="__p += '",h=il((t.escape||Nt).source+"|"+l.source+"|"+(l===mt?Ct:Nt).source+"|"+(t.evaluate||Nt).source+"|$","g"),p="//# sourceURL="+("sourceURL"in t?t.sourceURL:"lodash.templateSources["+ ++sr+"]")+"\n";n.replace(h,function(t,r,e,o,f,c){return e||(e=o),s+=n.slice(a,c).replace(Pt,B),r&&(u=!0,s+="' +\n__e("+r+") +\n'"),f&&(i=!0,s+="';\n"+f+";\n__p += '"),e&&(s+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),a=c+t.length,t}),s+="';\n";var _=t.variable;_||(s="with (obj) {\n"+s+"\n}\n"),s=(i?s.replace(_t,""):s).replace(vt,"$1").replace(gt,"$1;"),s="function("+(_||"obj")+") {\n"+(_?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(u?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+s+"return __p\n}";var v=Vh(function(){return rl(f,p+"return "+s).apply(X,c)});if(v.source=s,Jf(v))throw v;return v}function va(n){return Ac(n).toLowerCase()}function ga(n){return Ac(n).toUpperCase()}function ya(n,t,r){if((n=Ac(n))&&(r||t===X))return n.replace(It,"");if(!n||!(t=au(t)))return n;var e=H(n),u=H(t);return wu(e,W(e,u),C(e,u)+1).join("")}function da(n,t,r){if((n=Ac(n))&&(r||t===X))return n.replace(zt,"");if(!n||!(t=au(t)))return n;var e=H(n);return wu(e,0,C(e,H(t))+1).join("")}function ba(n,t,r){if((n=Ac(n))&&(r||t===X))return n.replace(Rt,"");if(!n||!(t=au(t)))return n;var e=H(n);return wu(e,W(e,H(t))).join("")}function wa(n,t){var r=xn,e=jn;if(tc(t)){var u="separator"in t?t.separator:u;r="length"in t?bc(t.length):r,e="omission"in t?au(t.omission):e}n=Ac(n);var i=n.length;if($(n)){var o=H(n);i=o.length}if(r>=i)return n;var f=r-G(e);if(f<1)return e;var c=o?wu(o,0,f).join(""):n.slice(0,f);if(u===X)return c+e;if(o&&(f+=c.length-f),dh(u)){if(n.slice(f).search(u)){var a,l=c;for(u.global||(u=il(u.source,Ac(Ut.exec(u))+"g")),u.lastIndex=0;a=u.exec(l);)var s=a.index;c=c.slice(0,s===X?f:s)}}else if(n.indexOf(au(u),f)!=f){var h=c.lastIndexOf(u);h>-1&&(c=c.slice(0,h))}return c+e}function ma(n){return n=Ac(n),n&&bt.test(n)?n.replace(yt,Tr):n}function xa(n,t,r){return n=Ac(n),t=r?X:t,t===X?D(n)?Q(n):g(n):n.match(t)||[]}function ja(n){var t=null==n?0:n.length,e=yi();return n=t?l(n,function(n){if("function"!=typeof n[1])throw new fl(rn);return[e(n[0]),n[1]]}):[],Qe(function(e){for(var u=-1;++u<t;){var i=n[u];if(r(i[0],this,e))return r(i[1],this,e)}})}function Aa(n){return ne(Xr(n,fn))}function ka(n){return function(){return n}}function Oa(n,t){return null==n||n!==n?t:n}function Ia(n){return n}function Ra(n){return We("function"==typeof n?n:Xr(n,fn))}function za(n){return $e(Xr(n,fn))}function Ea(n,t){return De(n,Xr(t,fn))}function Sa(n,t,r){var e=Tc(t),i=se(t,e);null!=r||tc(t)&&(i.length||!e.length)||(r=t,t=n,n=this,i=se(t,Tc(t)));var o=!(tc(r)&&"chain"in r&&!r.chain),f=Qf(n);return u(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Wu(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,s([this.value()],arguments))})}),n}function La(){return xr._===this&&(xr._=dl),this}function Wa(){}function Ca(n){return n=bc(n),Qe(function(t){return Ne(t,n)})}function Ua(n){return Li(n)?j(Gi(n)):Ke(n)}function Ba(n){return function(t){return null==n?X:he(n,t)}}function Ta(){return[]}function $a(){return!1}function Da(){return{}}function Ma(){return""}function Fa(){return!0}function Na(n,t){if((n=bc(n))<1||n>zn)return[];var r=Ln,e=Pl(n,Ln);t=yi(t),n-=Ln;for(var u=R(e,t);++r<n;)t(r);return u}function Pa(n){return ph(n)?l(n,Gi):pc(n)?[n]:Wu(Rs(Ac(n)))}function qa(n){var t=++_l;return Ac(n)+t}function Za(n){return n&&n.length?ie(n,Ia,ve):X}function Ka(n,t){return n&&n.length?ie(n,yi(t,2),ve):X}function Va(n){return x(n,Ia)}function Ga(n,t){return x(n,yi(t,2))}function Ha(n){return n&&n.length?ie(n,Ia,Be):X}function Ja(n,t){return n&&n.length?ie(n,yi(t,2),Be):X}function Ya(n){return n&&n.length?I(n,Ia):0}function Qa(n,t){return n&&n.length?I(n,yi(t,2)):0}A=null==A?xr:$r.defaults(xr.Object(),A,$r.pick(xr,lr));var Xa=A.Array,nl=A.Date,tl=A.Error,rl=A.Function,el=A.Math,ul=A.Object,il=A.RegExp,ol=A.String,fl=A.TypeError,cl=Xa.prototype,al=rl.prototype,ll=ul.prototype,sl=A["__core-js_shared__"],hl=al.toString,pl=ll.hasOwnProperty,_l=0,vl=function(){var n=/[^.]+$/.exec(sl&&sl.keys&&sl.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),gl=ll.toString,yl=hl.call(ul),dl=xr._,bl=il("^"+hl.call(pl).replace(kt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),wl=kr?A.Buffer:X,ml=A.Symbol,xl=A.Uint8Array,jl=wl?wl.allocUnsafe:X,Al=N(ul.getPrototypeOf,ul),kl=ul.create,Ol=ll.propertyIsEnumerable,Il=cl.splice,Rl=ml?ml.isConcatSpreadable:X,zl=ml?ml.iterator:X,El=ml?ml.toStringTag:X,Sl=function(){try{var n=wi(ul,"defineProperty");return n({},"",{}),n}catch(n){}}(),Ll=A.clearTimeout!==xr.clearTimeout&&A.clearTimeout,Wl=nl&&nl.now!==xr.Date.now&&nl.now,Cl=A.setTimeout!==xr.setTimeout&&A.setTimeout,Ul=el.ceil,Bl=el.floor,Tl=ul.getOwnPropertySymbols,$l=wl?wl.isBuffer:X,Dl=A.isFinite,Ml=cl.join,Fl=N(ul.keys,ul),Nl=el.max,Pl=el.min,ql=nl.now,Zl=A.parseInt,Kl=el.random,Vl=cl.reverse,Gl=wi(A,"DataView"),Hl=wi(A,"Map"),Jl=wi(A,"Promise"),Yl=wi(A,"Set"),Ql=wi(A,"WeakMap"),Xl=wi(ul,"create"),ns=Ql&&new Ql,ts={},rs=Hi(Gl),es=Hi(Hl),us=Hi(Jl),is=Hi(Yl),os=Hi(Ql),fs=ml?ml.prototype:X,cs=fs?fs.valueOf:X,as=fs?fs.toString:X,ls=function(){function n(){}return function(t){if(!tc(t))return{};if(kl)return kl(t);n.prototype=t;var r=new n;return n.prototype=X,r}}();K.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:mt,variable:"",imports:{_:K}},K.prototype=J.prototype,K.prototype.constructor=K,Y.prototype=ls(J.prototype),Y.prototype.constructor=Y,Wt.prototype=ls(J.prototype),Wt.prototype.constructor=Wt,Vt.prototype.clear=Gt,Vt.prototype.delete=Ht,Vt.prototype.get=Jt,Vt.prototype.has=Yt,Vt.prototype.set=Qt,Xt.prototype.clear=nr,Xt.prototype.delete=tr,Xt.prototype.get=rr,Xt.prototype.has=er,Xt.prototype.set=or,fr.prototype.clear=cr,fr.prototype.delete=ar,fr.prototype.get=_r,fr.prototype.has=vr,fr.prototype.set=gr,yr.prototype.add=yr.prototype.push=wr,yr.prototype.has=mr,jr.prototype.clear=Ar,jr.prototype.delete=Or,jr.prototype.get=Ir,jr.prototype.has=Cr,jr.prototype.set=Dr;var ss=Du(ae),hs=Du(le,!0),ps=Mu(),_s=Mu(!0),vs=ns?function(n,t){return ns.set(n,t),n}:Ia,gs=Sl?function(n,t){return Sl(n,"toString",{configurable:!0,enumerable:!1,value:ka(t),writable:!0})}:Ia,ys=Qe,ds=Ll||function(n){return xr.clearTimeout(n)},bs=Yl&&1/q(new Yl([,-0]))[1]==Rn?function(n){return new Yl(n)}:Wa,ws=ns?function(n){return ns.get(n)}:Wa,ms=Tl?function(n){return null==n?[]:(n=ul(n),f(Tl(n),function(t){return Ol.call(n,t)}))}:Ta,xs=Tl?function(n){for(var t=[];n;)s(t,ms(n)),n=Al(n);return t}:Ta,js=_e;(Gl&&js(new Gl(new ArrayBuffer(1)))!=ut||Hl&&js(new Hl)!=Zn||Jl&&"[object Promise]"!=js(Jl.resolve())||Yl&&js(new Yl)!=Yn||Ql&&js(new Ql)!=tt)&&(js=function(n){var t=_e(n),r=t==Gn?n.constructor:X,e=r?Hi(r):"";if(e)switch(e){case rs:return ut;case es:return Zn;case us:return"[object Promise]";case is:return Yn;case os:return tt}return t});var As=sl?Qf:$a,ks=Ki(vs),Os=Cl||function(n,t){return xr.setTimeout(n,t)},Is=Ki(gs),Rs=function(n){var t=Rf(n,function(n){return r.size===un&&r.clear(),n}),r=t.cache;return t}(function(n){var t=[];return At.test(n)&&t.push(""),n.replace(/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,function(n,r,e,u){t.push(e?u.replace(/\\(\\)?/g,"$1"):r||n)}),t}),zs=Qe(function(n,t){return qf(n)?ee(n,ce(t,1,qf,!0)):[]}),Es=Qe(function(n,t){var r=go(t);return qf(r)&&(r=X),qf(n)?ee(n,ce(t,1,qf,!0),yi(r,2)):[]}),Ss=Qe(function(n,t){var r=go(t);return qf(r)&&(r=X),qf(n)?ee(n,ce(t,1,qf,!0),X,r):[]}),Ls=Qe(function(n){var t=l(n,yu);return t.length&&t[0]===n[0]?be(t):[]}),Ws=Qe(function(n){var t=go(n),r=l(n,yu);return t===go(r)?t=X:r.pop(),r.length&&r[0]===n[0]?be(r,yi(t,2)):[]}),Cs=Qe(function(n){var t=go(n),r=l(n,yu);return t="function"==typeof t?t:X,t&&r.pop(),r.length&&r[0]===n[0]?be(r,X,t):[]}),Us=Qe(wo),Bs=hi(function(n,t){var r=null==n?0:n.length,e=Yr(n,t);return Ge(n,l(t,function(n){return Ei(n,r)?+n:n}).sort(zu)),e}),Ts=Qe(function(n){return lu(ce(n,1,qf,!0))}),$s=Qe(function(n){var t=go(n);return qf(t)&&(t=X),lu(ce(n,1,qf,!0),yi(t,2))}),Ds=Qe(function(n){var t=go(n);return t="function"==typeof t?t:X,lu(ce(n,1,qf,!0),X,t)}),Ms=Qe(function(n,t){return qf(n)?ee(n,t):[]}),Fs=Qe(function(n){return vu(f(n,qf))}),Ns=Qe(function(n){var t=go(n);return qf(t)&&(t=X),vu(f(n,qf),yi(t,2))}),Ps=Qe(function(n){var t=go(n);return t="function"==typeof t?t:X,vu(f(n,qf),X,t)}),qs=Qe(No),Zs=Qe(function(n){var t=n.length,r=t>1?n[t-1]:X;return r="function"==typeof r?(n.pop(),r):X,Po(n,r)}),Ks=hi(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return Yr(t,n)};return!(t>1||this.__actions__.length)&&e instanceof Wt&&Ei(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:Go,args:[u],thisArg:X}),new Y(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(X),n})):this.thru(u)}),Vs=Tu(function(n,t,r){pl.call(n,r)?++n[r]:Jr(n,r,1)}),Gs=Ku(oo),Hs=Ku(fo),Js=Tu(function(n,t,r){pl.call(n,r)?n[r].push(t):Jr(n,r,[t])}),Ys=Qe(function(n,t,e){var u=-1,i="function"==typeof t,o=Pf(n)?Xa(n.length):[];return ss(n,function(n){o[++u]=i?r(t,n,e):me(n,t,e)}),o}),Qs=Tu(function(n,t,r){Jr(n,r,t)}),Xs=Tu(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),nh=Qe(function(n,t){if(null==n)return[];var r=t.length;return r>1&&Si(n,t[0],t[1])?t=[]:r>2&&Si(t[0],t[1],t[2])&&(t=[t[0]]),Pe(n,ce(t,1),[])}),th=Wl||function(){return xr.Date.now()},rh=Qe(function(n,t,r){var e=hn;if(r.length){var u=P(r,gi(rh));e|=yn}return ii(n,e,t,r,u)}),eh=Qe(function(n,t,r){var e=hn|pn;if(r.length){var u=P(r,gi(eh));e|=yn}return ii(t,e,n,r,u)}),uh=Qe(function(n,t){return re(n,1,t)}),ih=Qe(function(n,t,r){return re(n,mc(t)||0,r)});Rf.Cache=fr;var oh=ys(function(n,t){t=1==t.length&&ph(t[0])?l(t[0],E(yi())):l(ce(t,1),E(yi()));var e=t.length;return Qe(function(u){for(var i=-1,o=Pl(u.length,e);++i<o;)u[i]=t[i].call(this,u[i]);return r(n,this,u)})}),fh=Qe(function(n,t){var r=P(t,gi(fh));return ii(n,yn,X,t,r)}),ch=Qe(function(n,t){var r=P(t,gi(ch));return ii(n,dn,X,t,r)}),ah=hi(function(n,t){return ii(n,wn,X,X,X,t)}),lh=ti(ve),sh=ti(function(n,t){return n>=t}),hh=xe(function(){return arguments}())?xe:function(n){return rc(n)&&pl.call(n,"callee")&&!Ol.call(n,"callee")},ph=Xa.isArray,_h=Rr?E(Rr):je,vh=$l||$a,gh=zr?E(zr):Ae,yh=Er?E(Er):Ie,dh=Sr?E(Sr):Ee,bh=Lr?E(Lr):Se,wh=Wr?E(Wr):Le,mh=ti(Be),xh=ti(function(n,t){return n<=t}),jh=$u(function(n,t){if(Bi(t)||Pf(t))return void Cu(t,Tc(t),n);for(var r in t)pl.call(t,r)&&Zr(n,r,t[r])}),Ah=$u(function(n,t){Cu(t,$c(t),n)}),kh=$u(function(n,t,r,e){Cu(t,$c(t),n,e)}),Oh=$u(function(n,t,r,e){Cu(t,Tc(t),n,e)}),Ih=hi(Yr),Rh=Qe(function(n){return n.push(X,oi),r(kh,X,n)}),zh=Qe(function(n){return n.push(X,fi),r(Ch,X,n)}),Eh=Hu(function(n,t,r){n[t]=r},ka(Ia)),Sh=Hu(function(n,t,r){pl.call(n,t)?n[t].push(r):n[t]=[r]},yi),Lh=Qe(me),Wh=$u(function(n,t,r){Me(n,t,r)}),Ch=$u(function(n,t,r,e){Me(n,t,r,e)}),Uh=hi(function(n,t){var r={};if(null==n)return r;var e=!1;t=l(t,function(t){return t=bu(t,n),e||(e=t.length>1),t}),Cu(n,_i(n),r),e&&(r=Xr(r,fn|cn|an,ci));for(var u=t.length;u--;)su(r,t[u]);return r}),Bh=hi(function(n,t){return null==n?{}:qe(n,t)}),Th=ui(Tc),$h=ui($c),Dh=Pu(function(n,t,r){return t=t.toLowerCase(),n+(r?ta(t):t)}),Mh=Pu(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Fh=Pu(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Nh=Nu("toLowerCase"),Ph=Pu(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),qh=Pu(function(n,t,r){return n+(r?" ":"")+Kh(t)}),Zh=Pu(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),Kh=Nu("toUpperCase"),Vh=Qe(function(n,t){try{return r(n,X,t)}catch(n){return Jf(n)?n:new tl(n)}}),Gh=hi(function(n,t){return u(t,function(t){t=Gi(t),Jr(n,t,rh(n[t],n))}),n}),Hh=Vu(),Jh=Vu(!0),Yh=Qe(function(n,t){return function(r){return me(r,n,t)}}),Qh=Qe(function(n,t){return function(r){return me(n,r,t)}}),Xh=Yu(l),np=Yu(o),tp=Yu(_),rp=ni(),ep=ni(!0),up=Ju(function(n,t){return n+t},0),ip=ei("ceil"),op=Ju(function(n,t){return n/t},1),fp=ei("floor"),cp=Ju(function(n,t){return n*t},1),ap=ei("round"),lp=Ju(function(n,t){return n-t},0);return K.after=mf,K.ary=xf,K.assign=jh,K.assignIn=Ah,K.assignInWith=kh,K.assignWith=Oh,K.at=Ih,K.before=jf,K.bind=rh,K.bindAll=Gh,K.bindKey=eh,K.castArray=Bf,K.chain=Ko,K.chunk=Qi,K.compact=Xi,K.concat=no,K.cond=ja,K.conforms=Aa,K.constant=ka,K.countBy=Vs,K.create=kc,K.curry=Af,K.curryRight=kf,K.debounce=Of,K.defaults=Rh,K.defaultsDeep=zh,K.defer=uh,K.delay=ih,K.difference=zs,K.differenceBy=Es,K.differenceWith=Ss,K.drop=to,K.dropRight=ro,K.dropRightWhile=eo,K.dropWhile=uo,K.fill=io,K.filter=ef,K.flatMap=uf,K.flatMapDeep=of,K.flatMapDepth=ff,K.flatten=co,
K.flattenDeep=ao,K.flattenDepth=lo,K.flip=If,K.flow=Hh,K.flowRight=Jh,K.fromPairs=so,K.functions=Lc,K.functionsIn=Wc,K.groupBy=Js,K.initial=_o,K.intersection=Ls,K.intersectionBy=Ws,K.intersectionWith=Cs,K.invert=Eh,K.invertBy=Sh,K.invokeMap=Ys,K.iteratee=Ra,K.keyBy=Qs,K.keys=Tc,K.keysIn=$c,K.map=sf,K.mapKeys=Dc,K.mapValues=Mc,K.matches=za,K.matchesProperty=Ea,K.memoize=Rf,K.merge=Wh,K.mergeWith=Ch,K.method=Yh,K.methodOf=Qh,K.mixin=Sa,K.negate=zf,K.nthArg=Ca,K.omit=Uh,K.omitBy=Fc,K.once=Ef,K.orderBy=hf,K.over=Xh,K.overArgs=oh,K.overEvery=np,K.overSome=tp,K.partial=fh,K.partialRight=ch,K.partition=Xs,K.pick=Bh,K.pickBy=Nc,K.property=Ua,K.propertyOf=Ba,K.pull=Us,K.pullAll=wo,K.pullAllBy=mo,K.pullAllWith=xo,K.pullAt=Bs,K.range=rp,K.rangeRight=ep,K.rearg=ah,K.reject=vf,K.remove=jo,K.rest=Sf,K.reverse=Ao,K.sampleSize=yf,K.set=qc,K.setWith=Zc,K.shuffle=df,K.slice=ko,K.sortBy=nh,K.sortedUniq=Lo,K.sortedUniqBy=Wo,K.split=ha,K.spread=Lf,K.tail=Co,K.take=Uo,K.takeRight=Bo,K.takeRightWhile=To,K.takeWhile=$o,K.tap=Vo,K.throttle=Wf,K.thru=Go,K.toArray=yc,K.toPairs=Th,K.toPairsIn=$h,K.toPath=Pa,K.toPlainObject=xc,K.transform=Kc,K.unary=Cf,K.union=Ts,K.unionBy=$s,K.unionWith=Ds,K.uniq=Do,K.uniqBy=Mo,K.uniqWith=Fo,K.unset=Vc,K.unzip=No,K.unzipWith=Po,K.update=Gc,K.updateWith=Hc,K.values=Jc,K.valuesIn=Yc,K.without=Ms,K.words=xa,K.wrap=Uf,K.xor=Fs,K.xorBy=Ns,K.xorWith=Ps,K.zip=qs,K.zipObject=qo,K.zipObjectDeep=Zo,K.zipWith=Zs,K.entries=Th,K.entriesIn=$h,K.extend=Ah,K.extendWith=kh,Sa(K,K),K.add=up,K.attempt=Vh,K.camelCase=Dh,K.capitalize=ta,K.ceil=ip,K.clamp=Qc,K.clone=Tf,K.cloneDeep=Df,K.cloneDeepWith=Mf,K.cloneWith=$f,K.conformsTo=Ff,K.deburr=ra,K.defaultTo=Oa,K.divide=op,K.endsWith=ea,K.eq=Nf,K.escape=ua,K.escapeRegExp=ia,K.every=rf,K.find=Gs,K.findIndex=oo,K.findKey=Oc,K.findLast=Hs,K.findLastIndex=fo,K.findLastKey=Ic,K.floor=fp,K.forEach=cf,K.forEachRight=af,K.forIn=Rc,K.forInRight=zc,K.forOwn=Ec,K.forOwnRight=Sc,K.get=Cc,K.gt=lh,K.gte=sh,K.has=Uc,K.hasIn=Bc,K.head=ho,K.identity=Ia,K.includes=lf,K.indexOf=po,K.inRange=Xc,K.invoke=Lh,K.isArguments=hh,K.isArray=ph,K.isArrayBuffer=_h,K.isArrayLike=Pf,K.isArrayLikeObject=qf,K.isBoolean=Zf,K.isBuffer=vh,K.isDate=gh,K.isElement=Kf,K.isEmpty=Vf,K.isEqual=Gf,K.isEqualWith=Hf,K.isError=Jf,K.isFinite=Yf,K.isFunction=Qf,K.isInteger=Xf,K.isLength=nc,K.isMap=yh,K.isMatch=ec,K.isMatchWith=uc,K.isNaN=ic,K.isNative=oc,K.isNil=cc,K.isNull=fc,K.isNumber=ac,K.isObject=tc,K.isObjectLike=rc,K.isPlainObject=lc,K.isRegExp=dh,K.isSafeInteger=sc,K.isSet=bh,K.isString=hc,K.isSymbol=pc,K.isTypedArray=wh,K.isUndefined=_c,K.isWeakMap=vc,K.isWeakSet=gc,K.join=vo,K.kebabCase=Mh,K.last=go,K.lastIndexOf=yo,K.lowerCase=Fh,K.lowerFirst=Nh,K.lt=mh,K.lte=xh,K.max=Za,K.maxBy=Ka,K.mean=Va,K.meanBy=Ga,K.min=Ha,K.minBy=Ja,K.stubArray=Ta,K.stubFalse=$a,K.stubObject=Da,K.stubString=Ma,K.stubTrue=Fa,K.multiply=cp,K.nth=bo,K.noConflict=La,K.noop=Wa,K.now=th,K.pad=oa,K.padEnd=fa,K.padStart=ca,K.parseInt=aa,K.random=na,K.reduce=pf,K.reduceRight=_f,K.repeat=la,K.replace=sa,K.result=Pc,K.round=ap,K.runInContext=v,K.sample=gf,K.size=bf,K.snakeCase=Ph,K.some=wf,K.sortedIndex=Oo,K.sortedIndexBy=Io,K.sortedIndexOf=Ro,K.sortedLastIndex=zo,K.sortedLastIndexBy=Eo,K.sortedLastIndexOf=So,K.startCase=qh,K.startsWith=pa,K.subtract=lp,K.sum=Ya,K.sumBy=Qa,K.template=_a,K.times=Na,K.toFinite=dc,K.toInteger=bc,K.toLength=wc,K.toLower=va,K.toNumber=mc,K.toSafeInteger=jc,K.toString=Ac,K.toUpper=ga,K.trim=ya,K.trimEnd=da,K.trimStart=ba,K.truncate=wa,K.unescape=ma,K.uniqueId=qa,K.upperCase=Zh,K.upperFirst=Kh,K.each=cf,K.eachRight=af,K.first=ho,Sa(K,function(){var n={};return ae(K,function(t,r){pl.call(K.prototype,r)||(n[r]=t)}),n}(),{chain:!1}),K.VERSION="4.17.4",u(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){K[n].placeholder=K}),u(["drop","take"],function(n,t){Wt.prototype[n]=function(r){r=r===X?1:Nl(bc(r),0);var e=this.__filtered__&&!t?new Wt(this):this.clone();return e.__filtered__?e.__takeCount__=Pl(r,e.__takeCount__):e.__views__.push({size:Pl(r,Ln),type:n+(e.__dir__<0?"Right":"")}),e},Wt.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),u(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r==On||3==r;Wt.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:yi(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),u(["head","last"],function(n,t){var r="take"+(t?"Right":"");Wt.prototype[n]=function(){return this[r](1).value()[0]}}),u(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Wt.prototype[n]=function(){return this.__filtered__?new Wt(this):this[r](1)}}),Wt.prototype.compact=function(){return this.filter(Ia)},Wt.prototype.find=function(n){return this.filter(n).head()},Wt.prototype.findLast=function(n){return this.reverse().find(n)},Wt.prototype.invokeMap=Qe(function(n,t){return"function"==typeof n?new Wt(this):this.map(function(r){return me(r,n,t)})}),Wt.prototype.reject=function(n){return this.filter(zf(yi(n)))},Wt.prototype.slice=function(n,t){n=bc(n);var r=this;return r.__filtered__&&(n>0||t<0)?new Wt(r):(n<0?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==X&&(t=bc(t),r=t<0?r.dropRight(-t):r.take(t-n)),r)},Wt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Wt.prototype.toArray=function(){return this.take(Ln)},ae(Wt.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=K[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(K.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof Wt,c=o[0],a=f||ph(t),l=function(n){var t=u.apply(K,s([n],o));return e&&h?t[0]:t};a&&r&&"function"==typeof c&&1!=c.length&&(f=a=!1);var h=this.__chain__,p=!!this.__actions__.length,_=i&&!h,v=f&&!p;if(!i&&a){t=v?t:new Wt(this);var g=n.apply(t,o);return g.__actions__.push({func:Go,args:[l],thisArg:X}),new Y(g,h)}return _&&v?n.apply(this,o):(g=this.thru(l),_?e?g.value()[0]:g.value():g)})}),u(["pop","push","shift","sort","splice","unshift"],function(n){var t=cl[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);K.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(ph(u)?u:[],n)}return this[r](function(r){return t.apply(ph(r)?r:[],n)})}}),ae(Wt.prototype,function(n,t){var r=K[t];if(r){var e=r.name+"";(ts[e]||(ts[e]=[])).push({name:t,func:r})}}),ts[Gu(X,pn).name]=[{name:"wrapper",func:X}],Wt.prototype.clone=qt,Wt.prototype.reverse=Zt,Wt.prototype.value=Kt,K.prototype.at=Ks,K.prototype.chain=Ho,K.prototype.commit=Jo,K.prototype.next=Yo,K.prototype.plant=Xo,K.prototype.reverse=nf,K.prototype.toJSON=K.prototype.valueOf=K.prototype.value=tf,K.prototype.first=K.prototype.head,zl&&(K.prototype[zl]=Qo),K}(); true?(xr._=$r,!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return $r}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))):undefined}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRleC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbmRleC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vaW5kZXgvKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovL2luZGV4Ly4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly9pbmRleC8uL3NyYy9jbGFzc2VzL0JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vaW5kZXgvLi9zcmMvY2xhc3Nlcy9EZXZpY2UuanMiLCJ3ZWJwYWNrOi8vaW5kZXgvLi9zcmMvY2xhc3Nlcy9MaWd0aENsYXNzaWNEZXZpY2UuanMiLCJ3ZWJwYWNrOi8vaW5kZXgvLi9zcmMvY2xhc3Nlcy9Qb2ludC5qcyIsIndlYnBhY2s6Ly9pbmRleC8uL3NyYy9jbGFzc2VzL1Njcm9sbGFibGUuanMiLCJ3ZWJwYWNrOi8vaW5kZXgvLi9zcmMvY2xhc3Nlcy9UZW1wZXJhdHVyZUFsdGVybmF0aXZlRGV2aWNlLmpzIiwid2VicGFjazovL2luZGV4Ly4vc3JjL2NsYXNzZXMvVGVtcGVyYXR1cmVDbGFzc2ljRGV2aWNlLmpzIiwid2VicGFjazovL2luZGV4Ly4vc3JjL2NvbnN0LmpzIiwid2VicGFjazovL2luZGV4Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2luZGV4Ly4vc3JjL2xpYnMvbG9kYXNoLm1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJcclxuZXhwb3J0IGZ1bmN0aW9uICBnZXRIdHRwUHJvbWlzZSAoY29uZmlnKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3Blbihjb25maWcubWV0aG9kLCBjb25maWcudXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBjb25maWcuY29udGVudFR5cGUpO1xyXG5cclxuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IodGhpcy5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgIGVycm9yLmNvZGUgPSB0aGlzLnN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiTmV0d29yayBFcnJvclwiKSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkoY29uZmlnLmpzb25EYXRhKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IE9kb2hhciBvbiAxOC4wOC4yMDE4LlxyXG4gKi9cclxuaW1wb3J0IFNjcm9sbGFibGUgZnJvbSBcIi4vU2Nyb2xsYWJsZVwiO1xyXG5pbXBvcnQge3R5cGVzfSBmcm9tIFwiLi4vY29uc3RcIjtcclxuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCJcclxuXHJcblxyXG5jbGFzcyBCaW5kaW5nIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9pbnQgPSBuZXcgUG9pbnQoMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMubGVmdFNjcm9sbE1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYm90dG9tU2Nyb2xsTW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5taWRkbGVTY2VuYXJpb291c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIG1vYmlsZVxyXG4gICAgICAgIHRoaXMubGVmdFNjcm9sbE1vdXNlRG93bk1vYmlsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmlnaHRTY3JvbGxNb3VzZURvd25Nb2JpbGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlTGVmdFNjcm9sbCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0RnJvbURldmljZUFycmF5QnlJZChpZCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGV2aWNlc0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkZXZpY2VzQXJyYXlbaV0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZXZpY2VzQXJyYXlbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRCaW5kaW5nICgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBsZWZ0U2Nyb2xsTW91c2VQb3NpdGlvbjtcclxuXHJcbiAgICAgICAgbGV0IGxlZnRTY3JvbGxNYXJnaW5Ub3AgPSAwO1xyXG5cclxuICAgICAgICBsZXQgYm90dG9tU2Nyb2xsTW91c2VQb3NpdGlvbjtcclxuXHJcbiAgICAgICAgLy8gbGV0IHN0YXJ0UG9pbnQgPSBuZXcgUG9pbnQoMCwgMCk7XHJcblxyXG4gICAgICAgIGxldCBzdGFydEFuaW1hdGlvbkFjdGlvbkJvdHRvbVNjcm9sbCA9IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgbGV0IHBhZ2VYID0gKGV2dC5wYWdlWCkgPyBldnQucGFnZVggOiAoZXZ0LmNoYW5nZWRUb3VjaGVzKSA/IGV2dC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IDA7XHJcbiAgICAgICAgICAgIGxldCBwYWdlWSA9IChldnQucGFnZVkpID8gZXZ0LnBhZ2VZIDogKGV2dC5jaGFuZ2VkVG91Y2hlcykgPyBldnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiAwO1xyXG5cclxuICAgICAgICAgICAgYm90dG9tU2Nyb2xsTW91c2VQb3NpdGlvbiA9IHBhZ2VYO1xyXG4gICAgICAgICAgICBzZWxmLmJvdHRvbVNjcm9sbE1vdXNlRG93biA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnN0YXJ0UG9pbnQgPSBuZXcgUG9pbnQgKHBhZ2VYLCBwYWdlWSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWV2dC5jaGFuZ2VkVG91Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgbW92ZUFuaW1hdGlvbkFjdGlvbiA9IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgc2VsZi5tb3ZlTGVmdFNjcm9sbCAoZXZ0KTtcclxuICAgICAgICAgICAgbW92ZUJvdHRvbVNjcm9sbCAoZXZ0KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLm1vdmVNaWRkbGVTY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubW92ZU1pZGRsZVNjcm9sbChldnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IGVuZEFuaW1hdGlvbkFjdGlvbiA9IGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGYubGVmdFNjcm9sbE1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzZWxmLmJvdHRvbVNjcm9sbE1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzZWxmLm1pZGRsZVNjZW5hcmlvb3VzZURvd24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwYWdlWCA9IChldnQucGFnZVgpID8gZXZ0LnBhZ2VYIDogKGV2dC5jaGFuZ2VkVG91Y2hlcykgPyBldnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiAwO1xyXG4gICAgICAgICAgICBsZXQgcGFnZVkgPSAoZXZ0LnBhZ2VZKSA/IGV2dC5wYWdlWSA6IChldnQuY2hhbmdlZFRvdWNoZXMpID8gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLnN0YXJ0UG9pbnQuZ2V0RGlzdGFuY2UobmV3IFBvaW50KHBhZ2VYLCBwYWdlWSkpID4gMykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDQntCx0YDQsNCx0L7RgtC60LAg0LrQu9C40LrQvtCyINC/0L4g0LHQu9C+0LrQsNC8LlxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXZ0LnRhcmdldC5jbG9zZXN0KFwiLm1haW5fcGFuZWxfaW5uZXJfcmlnaHRfZWxlbWVudFwiKTtcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHR5cGUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgdHlwZXMuZGV2aWNlOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0RnJvbURldmljZUFycmF5QnlJZChpZCkub3BlbkZvcm0odGFyZ2V0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTAwKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGVmdFNjcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9wYW5lbF9pbm5lcl9yaWdodFwiKTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbExlZnRJbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9wYW5lbF9pbm5lcl9yaWdodF9fZWxlbWVudHNcIik7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxMZWZ0SW5uZXJHZW9tZW5yeSA9IHNjcm9sbExlZnRJbm5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgbGV0IGxlZnRTY3JvbGxBcnJvd0Rvd24gPSBsZWZ0U2Nyb2xsLnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3dfZG93bl9qc1wiKTtcclxuICAgICAgICAgICAgbGV0IGxlZnRTY3JvbGxBcnJvd1VwID0gbGVmdFNjcm9sbC5xdWVyeVNlbGVjdG9yKFwiLmFycm93X3VwXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRvcFNjcm9sbCA9IG5ldyBTY3JvbGxhYmxlKHtcclxuICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgIG1heDogc2Nyb2xsTGVmdElubmVyR2VvbWVucnkuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgaXNUcmFuc2l0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNzc1Byb3BlcnR5OiBcIm1hcmdpblRvcFwiLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlOiAwLFxyXG4gICAgICAgICAgICAgICAgcGFyZW50TGVuZ3RoOiAzMzEsXHJcbiAgICAgICAgICAgICAgICBvbk1heDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRTY3JvbGxBcnJvd0Rvd24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVuTWF4OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFNjcm9sbEFycm93RG93bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uTWluOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFNjcm9sbEFycm93VXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVuTWluOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFNjcm9sbEFycm93VXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLm1vdmVMZWZ0U2Nyb2xsID0gZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLmxlZnRTY3JvbGxNb3VzZURvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRlbHRhID0gbGVmdFNjcm9sbE1vdXNlUG9zaXRpb24gLSBldnQucGFnZVk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcFNjcm9sbC5zY3JvbGxCb3R0b20oc2Nyb2xsTGVmdElubmVyLCBkZWx0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcFNjcm9sbC5zY3JvbGxUb3Aoc2Nyb2xsTGVmdElubmVyLCAtZGVsdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxlZnRTY3JvbGxNb3VzZVBvc2l0aW9uID0gZXZ0LnBhZ2VZO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sZWZ0U2Nyb2xsTW91c2VEb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxlZnRTY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChldnQuZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcFNjcm9sbC5zY3JvbGxCb3R0b20oc2Nyb2xsTGVmdElubmVyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wU2Nyb2xsLnNjcm9sbFRvcChzY3JvbGxMZWZ0SW5uZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxlZnRTY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0U2Nyb2xsTW91c2VQb3NpdGlvbiA9IGV2dC5wYWdlWTtcclxuICAgICAgICAgICAgICAgIHNlbGYubGVmdFNjcm9sbE1vdXNlRG93biA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGVmdFNjcm9sbEFycm93RG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgdG9wU2Nyb2xsLnNjcm9sbEJvdHRvbShzY3JvbGxMZWZ0SW5uZXIsIDEwMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGVmdFNjcm9sbEFycm93VXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgIHRvcFNjcm9sbC5zY3JvbGxUb3Aoc2Nyb2xsTGVmdElubmVyLCAxMDAsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8g0J/QsNC90LXQu9GMINGBINCx0YvRgtC+0LLQvtC5INGC0LXRhdC90LjQutC+0LkuLi5cclxuICAgICAgICBsZXQgZmlsdGVyUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9wYW5lbFwiKTtcclxuICAgICAgICBsZXQgYXBwbGlhbmNlUGFuZWxMZWZ0QXJyb3cgPSBmaWx0ZXJQYW5lbC5xdWVyeVNlbGVjdG9yKFwiLmFycm93X2xlZnRcIik7XHJcbiAgICAgICAgbGV0IGFwcGxpYW5jZVBhbmVsUmlnaHRBcnJvdyA9IGZpbHRlclBhbmVsLnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3dfcmlnaHRcIik7XHJcblxyXG4gICAgICAgIGxldCBwYW5lbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYW5lbF9lbGVtZW50c1wiKTtcclxuICAgICAgICBsZXQgYXBwbGlhbmNlUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcGxpYW5jZXNfcGFuZWxcIik7XHJcbiAgICAgICAgbGV0IHBhbmVsRWxlbWVudHNHZW9tZXRyeSA9IGFwcGxpYW5jZVBhbmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICBsZXQgYm90dG9tU2Nyb2xsID0gbmV3IFNjcm9sbGFibGUoe1xyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIG1heDogcGFuZWxFbGVtZW50c0dlb21ldHJ5LndpZHRoLFxyXG4gICAgICAgICAgICBpc1RyYW5zaXRpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBjc3NQcm9wZXJ0eTogXCJtYXJnaW5MZWZ0XCIsXHJcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZTogMCxcclxuICAgICAgICAgICAgcGFyZW50TGVuZ3RoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICAgICAgb25NYXg6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFwcGxpYW5jZVBhbmVsUmlnaHRBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiYXJyb3dfYm9sZFwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdW5NYXg6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFwcGxpYW5jZVBhbmVsUmlnaHRBcnJvdy5jbGFzc0xpc3QuYWRkKFwiYXJyb3dfYm9sZFwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25NaW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFwcGxpYW5jZVBhbmVsTGVmdEFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJhcnJvd19ib2xkXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1bk1pbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBsaWFuY2VQYW5lbExlZnRBcnJvdy5jbGFzc0xpc3QuYWRkKFwiYXJyb3dfYm9sZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBtb3ZlQm90dG9tU2Nyb2xsIChldnQpIHtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLmJvdHRvbVNjcm9sbE1vdXNlRG93bikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFnZVggPSAoZXZ0LnBhZ2VYKSA/IGV2dC5wYWdlWCA6IChldnQuY2hhbmdlZFRvdWNoZXMpID8gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogMDtcclxuXHJcbiAgICAgICAgICAgIGxldCBkZWx0YSA9IGJvdHRvbVNjcm9sbE1vdXNlUG9zaXRpb24gLSBwYWdlWDtcclxuXHJcbiAgICAgICAgICAgIGlmIChkZWx0YSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbVNjcm9sbC5zY3JvbGxCb3R0b20oYXBwbGlhbmNlUGFuZWwsIGRlbHRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbVNjcm9sbC5zY3JvbGxUb3AoYXBwbGlhbmNlUGFuZWwsIC1kZWx0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJvdHRvbVNjcm9sbE1vdXNlUG9zaXRpb24gPSBwYWdlWDtcclxuICAgICAgICAgICAgc2VsZi5ib3R0b21TY3JvbGxNb3VzZURvd24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhvcmlzb250YWxCb3R0b21NYXJnaW5MZWZ0ID0gMDtcclxuICAgICAgICBhcHBsaWFuY2VQYW5lbC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAvKmhvcmlzb250YWxCb3R0b21NYXJnaW5MZWZ0ICs9IGV2dC5kZWx0YVk7XHJcbiAgICAgICAgICAgIHBhbmVsRWxlbWVudHMuc3R5bGUubWFyZ2luTGVmdCA9IGhvcmlzb250YWxCb3R0b21NYXJnaW5MZWZ0ICsgXCJweFwiOyovXHJcblxyXG4gICAgICAgICAgICBpZiAoZXZ0LmRlbHRhWSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbVNjcm9sbC5zY3JvbGxCb3R0b20oYXBwbGlhbmNlUGFuZWwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tU2Nyb2xsLnNjcm9sbFRvcChhcHBsaWFuY2VQYW5lbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qcGFuZWxFbGVtZW50cy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgYm90dG9tU2Nyb2xsTW91c2VQb3NpdGlvbiA9IGV2dC5wYWdlWDtcclxuICAgICAgICAgICAgc2VsZi5ib3R0b21TY3JvbGxNb3VzZURvd24gPSB0cnVlO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICAgICAgcGFuZWxFbGVtZW50cy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0QW5pbWF0aW9uQWN0aW9uQm90dG9tU2Nyb2xsKTtcclxuICAgICAgICBwYW5lbEVsZW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHN0YXJ0QW5pbWF0aW9uQWN0aW9uQm90dG9tU2Nyb2xsKTtcclxuXHJcbiAgICAgICAgYXBwbGlhbmNlUGFuZWxMZWZ0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgICAgICAgIGJvdHRvbVNjcm9sbC5zY3JvbGxUb3AoYXBwbGlhbmNlUGFuZWwsIDMwMCwgdHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFwcGxpYW5jZVBhbmVsUmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICBib3R0b21TY3JvbGwuc2Nyb2xsQm90dG9tKGFwcGxpYW5jZVBhbmVsLCAzMDAsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDQntCx0YnQuNC1INGB0L7QsdGL0YLQuNGPXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICBzZWxmLnN0YXJ0UG9pbnQgPSBuZXcgUG9pbnQgKGV2dC5wYWdlWCwgZXZ0LnBhZ2VZKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlQW5pbWF0aW9uQWN0aW9uKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG1vdmVBbmltYXRpb25BY3Rpb24pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBlbmRBbmltYXRpb25BY3Rpb24pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBlbmRBbmltYXRpb25BY3Rpb24pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRNb2JpbGVCaW5kaW5nICgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBsZWZ0U2Nyb2xsTW91c2VQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgbGV0IGxlZnRTY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fcGFuZWxfaW5uZXJfcmlnaHRcIik7XHJcbiAgICAgICAgbGV0IHNjcm9sbExlZnRJbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9wYW5lbF9pbm5lcl9yaWdodF9fZWxlbWVudHNcIik7XHJcbiAgICAgICAgbGV0IHNjcm9sbExlZnRJbm5lckdlb21lbnJ5ID0gc2Nyb2xsTGVmdElubmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICBsZXQgdG9wU2Nyb2xsID0gbmV3IFNjcm9sbGFibGUoe1xyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIG1heDogc2Nyb2xsTGVmdElubmVyR2VvbWVucnkud2lkdGgsXHJcbiAgICAgICAgICAgIGlzVHJhbnNpdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNzc1Byb3BlcnR5OiBcIm1hcmdpbkxlZnRcIixcclxuICAgICAgICAgICAgY3VycmVudFZhbHVlOiAwLFxyXG4gICAgICAgICAgICBwYXJlbnRMZW5ndGg6IGxlZnRTY3JvbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXHJcbiAgICAgICAgICAgIG9uTWF4OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1bk1heDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25NaW46IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVuTWluOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGYubW92ZUxlZnRTY3JvbGwgPSBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZi5sZWZ0U2Nyb2xsTW91c2VEb3duKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBwYWdlWCA9IChldnQucGFnZVgpID8gZXZ0LnBhZ2VYIDogKGV2dC5jaGFuZ2VkVG91Y2hlcykgPyBldnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiAwO1xyXG4gICAgICAgICAgICBsZXQgZGVsdGEgPSBsZWZ0U2Nyb2xsTW91c2VQb3NpdGlvbiAtIHBhZ2VYO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRlbHRhID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdG9wU2Nyb2xsLnNjcm9sbEJvdHRvbShzY3JvbGxMZWZ0SW5uZXIsIGRlbHRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvcFNjcm9sbC5zY3JvbGxUb3Aoc2Nyb2xsTGVmdElubmVyLCAtZGVsdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZWZ0U2Nyb2xsTW91c2VQb3NpdGlvbiA9IHBhZ2VYO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxlZnRTY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2dC5kZWx0YVkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0b3BTY3JvbGwuc2Nyb2xsQm90dG9tKHNjcm9sbExlZnRJbm5lcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b3BTY3JvbGwuc2Nyb2xsVG9wKHNjcm9sbExlZnRJbm5lcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxlZnRTY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHBhZ2VYID0gKGV2dC5wYWdlWCkgPyBldnQucGFnZVggOiAoZXZ0LmNoYW5nZWRUb3VjaGVzKSA/IGV2dC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IDA7XHJcbiAgICAgICAgICAgIGxldCBwYWdlWSA9IChldnQucGFnZVkpID8gZXZ0LnBhZ2VZIDogKGV2dC5jaGFuZ2VkVG91Y2hlcykgPyBldnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiAwO1xyXG5cclxuICAgICAgICAgICAgbGVmdFNjcm9sbE1vdXNlUG9zaXRpb24gPSBwYWdlWDtcclxuICAgICAgICAgICAgc2VsZi5sZWZ0U2Nyb2xsTW91c2VEb3duID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuc3RhcnRQb2ludCA9IG5ldyBQb2ludCAocGFnZVgsIHBhZ2VZKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZXZ0LmNoYW5nZWRUb3VjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgbWlkZGxlU2NlbmFyaW9zUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhbmVsX2lubmVyX19lbGVjdF9zY3JpcHRzXCIpO1xyXG4gICAgICAgIGxldCBtaWRkbGVTY2VuYXJpb3NQYW5lbFBhcmVudCA9IG1pZGRsZVNjZW5hcmlvc1BhbmVsLnBhcmVudE5vZGU7XHJcbiAgICAgICAgbGV0IHNjZW5hcmlvc0xlbmd0aCA9IG1pZGRsZVNjZW5hcmlvc1BhbmVsLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICBtaWRkbGVTY2VuYXJpb3NQYW5lbC5zdHlsZS53aWR0aCA9IChzY2VuYXJpb3NMZW5ndGggKiAyMDAgKyAoc2NlbmFyaW9zTGVuZ3RoIC0gMSkgKiAxNSkgKyBcInB4XCI7XHJcbiAgICAgICAgbGV0IG1pZGRsZVNjcm9sbE1vdXNlUG9zaXRpb247XHJcblxyXG4gICAgICAgIGxldCBtaWRkbGVTY2VuYXJpb3MgPSBuZXcgU2Nyb2xsYWJsZSh7XHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiBtaWRkbGVTY2VuYXJpb3NQYW5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcclxuICAgICAgICAgICAgaXNUcmFuc2l0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgY3NzUHJvcGVydHk6IFwibWFyZ2luTGVmdFwiLFxyXG4gICAgICAgICAgICBjdXJyZW50VmFsdWU6IDAsXHJcbiAgICAgICAgICAgIHBhcmVudExlbmd0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICAgIG9uTWF4OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1bk1heDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25NaW46IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVuTWluOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1pZGRsZVNjZW5hcmlvc1BhbmVsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgbGV0IHBhZ2VYID0gKGV2dC5wYWdlWCkgPyBldnQucGFnZVggOiAoZXZ0LmNoYW5nZWRUb3VjaGVzKSA/IGV2dC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IDA7XHJcbiAgICAgICAgICAgIGxldCBwYWdlWSA9IChldnQucGFnZVkpID8gZXZ0LnBhZ2VZIDogKGV2dC5jaGFuZ2VkVG91Y2hlcykgPyBldnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiAwO1xyXG5cclxuICAgICAgICAgICAgbWlkZGxlU2Nyb2xsTW91c2VQb3NpdGlvbiA9IHBhZ2VYO1xyXG4gICAgICAgICAgICBzZWxmLm1pZGRsZVNjZW5hcmlvb3VzZURvd24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5zdGFydFBvaW50ID0gbmV3IFBvaW50IChwYWdlWCwgcGFnZVkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFldnQuY2hhbmdlZFRvdWNoZXMpIHtcclxuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGYubW92ZU1pZGRsZVNjcm9sbCA9IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLm1pZGRsZVNjZW5hcmlvb3VzZURvd24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHBhZ2VYID0gKGV2dC5wYWdlWCkgPyBldnQucGFnZVggOiAoZXZ0LmNoYW5nZWRUb3VjaGVzKSA/IGV2dC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IDA7XHJcbiAgICAgICAgICAgIGxldCBkZWx0YSA9IG1pZGRsZVNjcm9sbE1vdXNlUG9zaXRpb24gLSBwYWdlWDtcclxuXHJcbiAgICAgICAgICAgIGlmIChkZWx0YSA+IDApIHtcclxuICAgICAgICAgICAgICAgIG1pZGRsZVNjZW5hcmlvcy5zY3JvbGxCb3R0b20obWlkZGxlU2NlbmFyaW9zUGFuZWwsIGRlbHRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1pZGRsZVNjZW5hcmlvcy5zY3JvbGxUb3AobWlkZGxlU2NlbmFyaW9zUGFuZWwsIC1kZWx0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1pZGRsZVNjcm9sbE1vdXNlUG9zaXRpb24gPSBwYWdlWDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmluZGluZztcclxuIiwiXHJcblxyXG5jbGFzcyBEZXZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IgKGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBjb25maWcuaWQ7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGNvbmZpZy5pbWFnZTtcclxuICAgICAgICB0aGlzLnRpdGxlID0gY29uZmlnLnRpdGxlO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IGNvbmZpZy50ZXh0O1xyXG4gICAgICAgIHRoaXMud2l0aEFuaW1hdGlvbiA9IGNvbmZpZy53aXRoQW5pbWF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Gb3JtIChwb3BwRm9ybSwgdGFyZ2V0RWxtLCBjbG9zZUNvbmZpZykge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgbGV0IG92ZXJsYXkgPSBwb3BwRm9ybS5wYXJlbnROb2RlO1xyXG4gICAgICAgIGxldCB3cmFwcGVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlcl9jb250ZW50XCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy53aXRoQW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRHZW9tZXRyeSA9IHRhcmdldEVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgcG9wcEZvcm0uc3R5bGUudG9wID0gdGFyZ2V0R2VvbWV0cnkudG9wICsgXCJweFwiO1xyXG4gICAgICAgICAgICBwb3BwRm9ybS5zdHlsZS5sZWZ0ID0gdGFyZ2V0R2VvbWV0cnkubGVmdCArIFwicHhcIjtcclxuICAgICAgICAgICAgcG9wcEZvcm0uc3R5bGUudHJhbnNpdGlvbiA9IFwidG9wIDAuNXMsIGxlZnQgMC41cywgdHJhbnNmb3JtIDAuNXNcIjtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvcHVwRm9ybUdlb21ldHJ5ID0gcG9wcEZvcm0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBwb3BwRm9ybS5zdHlsZS50b3AgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMiAtIHBvcHVwRm9ybUdlb21ldHJ5LmhlaWdodCAvIDAuMyAvIDIpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgcG9wcEZvcm0uc3R5bGUubGVmdCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSBwb3B1cEZvcm1HZW9tZXRyeS53aWR0aCAvIDAuMyAvIDIpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgcG9wcEZvcm0uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHBGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9mb3JtX19zY2FsZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG5cclxuICAgICAgICAgICAgfSwgMTApO1xyXG5cclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheV9iYWNrZ3JvdW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlckNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJibHVyKDVweClcIjtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlfYmFja2dyb3VuZFwiKTtcclxuXHJcbiAgICAgICAgICAgIHBvcHBGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9mb3JtX19zY2FsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlUG9wdXAgKCkge1xyXG5cclxuICAgICAgICAgICAgY2xvc2VDb25maWcuZWxlbWVudCAmJiBjbG9zZUNvbmZpZy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2xvc2VDb25maWcub25Nb3VzZURvd24pO1xyXG4gICAgICAgICAgICBzZWxmLmNpcmNsZVBpY2tlciAmJiBzZWxmLmNpcmNsZVBpY2tlci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNsb3NlQ29uZmlnLm9uTW91c2VEb3duKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBjbG9zZUNvbmZpZy5vbk1vdXNlTW92ZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGNsb3NlQ29uZmlnLm9uTW91c2VVcCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi53aXRoQW5pbWF0aW9uKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9wcEZvcm0uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwLjMpXCI7XHJcbiAgICAgICAgICAgICAgICBwb3BwRm9ybS5zdHlsZS50b3AgPSB0YXJnZXRHZW9tZXRyeS50b3AgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICBwb3BwRm9ybS5zdHlsZS5sZWZ0ID0gIHRhcmdldEdlb21ldHJ5LmxlZnQgKyBcInB4XCI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJsYXlfYmFja2dyb3VuZFwiKTtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXJDb250ZW50LnN0eWxlLmZpbHRlciA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgcG9wcEZvcm0uY2xhc3NMaXN0LmFkZChcInBvcHVwX2Zvcm1fX3NjYWxlZFwiKTtcclxuICAgICAgICAgICAgICAgIC8vIHBvcHBGb3JtLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wcEZvcm0uc3R5bGUudHJhbnNpdGlvbiA9IFwibm9tZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVybGF5X2JhY2tncm91bmRcIik7XHJcbiAgICAgICAgICAgICAgICBwb3BwRm9ybS5jbGFzc0xpc3QuYWRkKFwicG9wdXBfZm9ybV9fc2NhbGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBvcHBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KFwiLmJ1dHRvbl9jYW5jZWxcIikpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KFwiLmJ1dHRvbl9va1wiKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYub25DbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYub25DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xvc2VQb3B1cCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV2aWNlO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBPZG9oYXIgb24gMTguMDguMjAxOC5cclxuICovXHJcblxyXG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuL0RldmljZVwiO1xyXG5pbXBvcnQge2dldEh0dHBQcm9taXNlfSBmcm9tIFwiLi4vYXBpXCI7XHJcbmltcG9ydCB7cHJvamVjdENvbnN0c30gZnJvbSBcIi4uL2NvbnN0XCI7XHJcbmltcG9ydCB7dXBkYXRlQXBwbGlhbmNlc30gZnJvbSBcIi4uL2luZGV4XCI7XHJcbi8vIGltcG9ydCB7dGVtcGVyYXR1cmVDbGFzc2ljVGVtcGxhdGVGdW5jfSBmcm9tIFwiLi4vY29uc3RcIjtcclxuXHJcbmxldCB0ZW1wZXJhdHVyZUNsYXNzaWNUZW1wbGF0ZUZ1bmMgPSBudWxsO1xyXG5cclxuY2xhc3MgTGlndGhDbGFzc2ljRGV2aWNlIGV4dGVuZHMgRGV2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8uXHJcbiAgICAgICAgdGhpcy5saWdodCA9IGNvbmZpZy52YWx1ZTtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGNvbmZpZy5hY3RpdmU7XHJcbiAgICAgICAgdGhpcy5pZCA9IGNvbmZpZy5pZDtcclxuXHJcbiAgICAgICAgdGhpcy5kcm9wcGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNpcmNsZVBpY2tlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVQaWNrZXJQYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubmVlZFVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VEb3duIChldnQpIHtcclxuICAgICAgICB0aGlzLmRyb3BwYWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZU1vdmUgKGV2dCkge1xyXG4gICAgICAgIGlmICghdGhpcy5kcm9wcGFibGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBhcmVudEdlb21ldHJ5ID0gdGhpcy5jaXJjbGVQaWNrZXJQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgbGV0IGxlZnRPZmZzZXQgPSBldnQucGFnZVggLSBwYXJlbnRHZW9tZXRyeS5sZWZ0IC0gMzA7XHJcblxyXG4gICAgICAgIGxlZnRPZmZzZXQgPSBNYXRoLm1heCgwLCBsZWZ0T2Zmc2V0KTtcclxuICAgICAgICBsZWZ0T2Zmc2V0ID0gTWF0aC5taW4ocGFyZW50R2VvbWV0cnkud2lkdGggLSA2MCwgbGVmdE9mZnNldCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2lyY2xlUGlja2VyLnN0eWxlLm1hcmdpbkxlZnQgPSBsZWZ0T2Zmc2V0ICsgXCJweFwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VVcCAoZXZ0KSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmICghc2VsZi5kcm9wcGFibGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBhcmVudEdlb21ldHJ5ID0gdGhpcy5jaXJjbGVQaWNrZXJQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgbGV0IGxlZnRPZmZzZXQgPSBldnQucGFnZVggLSBwYXJlbnRHZW9tZXRyeS5sZWZ0IC0gMzA7XHJcbiAgICAgICAgbGV0IGZpbmFsUG9zaXRpb247XHJcbiAgICAgICAgbGV0IGN1cnJlbnRMaWdodDtcclxuXHJcbiAgICAgICAgaWYgKGxlZnRPZmZzZXQgPCBwYXJlbnRHZW9tZXRyeS53aWR0aCAtIDYwIC0gbGVmdE9mZnNldCkge1xyXG4gICAgICAgICAgICBmaW5hbFBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgY3VycmVudExpZ2h0ID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaW5hbFBvc2l0aW9uID0gcGFyZW50R2VvbWV0cnkud2lkdGggLSA2MDtcclxuICAgICAgICAgICAgY3VycmVudExpZ2h0ID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaXJjbGVQaWNrZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiMC41cyBhbGxcIjtcclxuICAgICAgICB0aGlzLmNpcmNsZVBpY2tlci5zdHlsZS5tYXJnaW5MZWZ0ID0gZmluYWxQb3NpdGlvbiArIFwicHhcIjtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRMaWdodCAhPT0gc2VsZi5hY3RpdmUpIHtcclxuICAgICAgICAgICAgLy8g0J3Rg9C20L3QviDQv9C+0YHQu9Cw0YLRjCDQt9Cw0L/RgNC+0YEg0L3QsCDRgdC10YDQstC10YBcclxuXHJcbiAgICAgICAgICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBwcm9qZWN0Q29uc3RzLnVybCArIFwiL2FwaS9wdWJsaWMvc2V0VmFsdWVUb0FwcGxpYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAganNvbkRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogc2VsZi5pZCxcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGN1cnJlbnRMaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZ2V0SHR0cFByb21pc2UoY29uZmlnKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuYWN0aW9uc0FmdGVyVXBkYXRlIChkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5jaXJjbGVQaWNrZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmRyb3BwYWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyYWdBbmREcm9wICgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuY2lyY2xlUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICBzZWxmLm9uTW91c2VEb3duLmNhbGwoc2VsZiwgZXZ0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgc2VsZi5vbk1vdXNlTW92ZS5jYWxsKHNlbGYsIGV2dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICBzZWxmLm9uTW91c2VVcC5jYWxsKHNlbGYsIGV2dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQktGL0LfRi9Cy0LDQtdGC0YHRjyDQv9C+0YHQu9C1INCe0YLQv9GA0LDQstC60Lgg0LfQsNC/0YDRgdC+0LAg0L3QsCDRgdC10YDQstC10YAuXHJcbiAgICAgKi9cclxuICAgIGFjdGlvbnNBZnRlclVwZGF0ZSAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IGRhdGEudGV4dDtcclxuICAgICAgICB0aGlzLnRlbXBlcmF0dXJlID0gZGF0YS50ZW1wZXJhdHVyZTtcclxuICAgICAgICB0aGlzLmltYWdlID0gZGF0YS5pbWFnZTtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGRhdGEuYWN0aXZlO1xyXG5cclxuICAgICAgICB0aGlzLm5lZWRVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub3BlbkZvcm0obnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZSAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmVlZFVwZGF0ZSkge1xyXG4gICAgICAgICAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBwcm9qZWN0Q29uc3RzLnVybCArIFwiL2FwaS9wdWJsaWMvZ2V0QXBwbGllbmNlc0luZm9cIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZ2V0SHR0cFByb21pc2UoY29uZmlnKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy8g0JfQsNC/0YDQvtGBINC90LAg0L7QsdC90L7QstC70LXQvdC40LVcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXBkYXRlQXBwbGlhbmNlcyhkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5lZWRVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkZvcm0odGFyZ2V0RWxtKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBsZXQgcG9wcEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX2Zvcm1cIik7XHJcblxyXG4gICAgICAgICAgICBzdXBlci5vcGVuRm9ybShwb3BwRm9ybSwgdGFyZ2V0RWxtLCB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiB0aGlzLmNpcmNsZVBpY2tlcixcclxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uTW91c2VEb3duLFxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU6IHRoaXMub25Nb3VzZU1vdmUsXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlVXA6IHRoaXMub25Nb3VzZVVwXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGlmICghdGVtcGVyYXR1cmVDbGFzc2ljVGVtcGxhdGVGdW5jKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlnaHRfY2xhc3NpY190ZW1wbGF0ZVwiKTtcclxuICAgICAgICAgICAgdGVtcGVyYXR1cmVDbGFzc2ljVGVtcGxhdGVGdW5jID0gXy50ZW1wbGF0ZSh0ZW1wbGF0ZS5pbm5lckhUTUwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9wcEZvcm0uaW5uZXJIVE1MID0gdGVtcGVyYXR1cmVDbGFzc2ljVGVtcGxhdGVGdW5jKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXHJcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZTogdGhpcy50ZW1wZXJhdHVyZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaXJjbGVQaWNrZXIgPSBwb3BwRm9ybS5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZV9waWNrZXJcIik7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVQaWNrZXJQYXJlbnQgPSB0aGlzLmNpcmNsZVBpY2tlci5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICAvLyDQo9GB0YLQsNC90L7QstC60LAg0LfQvdCw0YfQtdC90LjRjyDQv9GA0Lgg0YDQtdC90LTQtdGA0LVcclxuICAgICAgICBsZXQgZmluYWxQb3NpdGlvbiA9IFwiMHB4XCI7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnRHZW9tZXRyeSA9IHRoaXMuY2lyY2xlUGlja2VyUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBmaW5hbFBvc2l0aW9uID0gXCJjYWxjKDEwMCUgLSA2MHB4KVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGYud2l0aEFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2lyY2xlUGlja2VyLnN0eWxlLnRyYW5zaXRpb24gPSBcIjAuMnMgYWxsXCI7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNpcmNsZVBpY2tlci5zdHlsZS5tYXJnaW5MZWZ0ID0gZmluYWxQb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNpcmNsZVBpY2tlci5zdHlsZS50cmFuc2l0aW9uID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9LCAyMDApXHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZi5jaXJjbGVQaWNrZXIuc3R5bGUubWFyZ2luTGVmdCA9IGZpbmFsUG9zaXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZURyYWdBbmREcm9wKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWd0aENsYXNzaWNEZXZpY2U7IiwiXHJcblxyXG5jbGFzcyBQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXN0YW5jZSAocG9pbnQpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5oeXBvdChwb2ludC54IC0gdGhpcy54LCBwb2ludC55IC0gdGhpcy55KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7IiwiXHJcbmltcG9ydCB7ZGVmYXVsdFNjcm9sbH0gZnJvbSBcIi4uL2NvbnN0XCI7XHJcblxyXG5jbGFzcyBTY3JvbGxhYmxlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5taW4gPSBjb25maWcubWluO1xyXG4gICAgICAgIHRoaXMubWF4ID0gY29uZmlnLm1heDtcclxuICAgICAgICB0aGlzLmlzVHJhbnNpdGlvbiA9IGNvbmZpZy5pc1RyYW5zaXRpb247XHJcbiAgICAgICAgdGhpcy5jc3NQcm9wZXJ0eSA9IGNvbmZpZy5jc3NQcm9wZXJ0eTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IGNvbmZpZy5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRMZW5ndGggPSBjb25maWcucGFyZW50TGVuZ3RoO1xyXG4gICAgICAgIHRoaXMub25NYXggPSBjb25maWcub25NYXg7XHJcbiAgICAgICAgdGhpcy51bk1heCA9IGNvbmZpZy51bk1heDtcclxuICAgICAgICB0aGlzLnJlYWNoTWF4ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbk1pbiA9IGNvbmZpZy5vbk1pbjtcclxuICAgICAgICB0aGlzLnVuTWluID0gY29uZmlnLnVuTWluO1xyXG4gICAgICAgIHRoaXMucmVhY2hNaW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbFRvcCAoZG9tRWxlbWVudCwgc2Nyb2xsLCB3aXRoQW5pbWF0aW9uKSB7XHJcblxyXG4gICAgICAgIGlmICh3aXRoQW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIGRvbUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIFwiICsgZGVmYXVsdFNjcm9sbC50cmFuc2l0aW9uRGVsYXkgKyBcInNcIjtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH0sIGRlZmF1bHRTY3JvbGwudHJhbnNpdGlvbkRlbGF5ICogMTAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNjcm9sbCAmJiBzY3JvbGwgIT09IDApIHtcclxuICAgICAgICAgICAgc2Nyb2xsID0gZGVmYXVsdFNjcm9sbC52ZWxvY2l0eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gTWF0aC5taW4oc2Nyb2xsICsgdGhpcy5jdXJyZW50VmFsdWUsIHRoaXMubWluKTtcclxuXHJcbiAgICAgICAgZG9tRWxlbWVudC5zdHlsZVt0aGlzLmNzc1Byb3BlcnR5XSA9IHRoaXMuY3VycmVudFZhbHVlICsgXCJweFwiO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5taW4gPT09IHRoaXMuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25NaW4oKTtcclxuICAgICAgICAgICAgdGhpcy5yZWFjaE1pbiA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVhY2hNaW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5NaW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVhY2hNYXgpIHtcclxuICAgICAgICAgICAgdGhpcy51bk1heCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgc2Nyb2xsQm90dG9tIChkb21FbGVtZW50LCBzY3JvbGwsIHdpdGhBbmltYXRpb24pIHtcclxuXHJcbiAgICAgICAgaWYgKHdpdGhBbmltYXRpb24pIHtcclxuICAgICAgICAgICAgZG9tRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgXCIgKyBkZWZhdWx0U2Nyb2xsLnRyYW5zaXRpb25EZWxheSArIFwic1wiO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfSwgZGVmYXVsdFNjcm9sbC50cmFuc2l0aW9uRGVsYXkgKiAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2Nyb2xsICYmIHNjcm9sbCAhPT0gMCkge1xyXG4gICAgICAgICAgICBzY3JvbGwgPSBkZWZhdWx0U2Nyb2xsLnZlbG9jaXR5O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gTWF0aC5tYXgodGhpcy5jdXJyZW50VmFsdWUgLSBzY3JvbGwsIC10aGlzLm1heCArIHRoaXMucGFyZW50TGVuZ3RoIC0gMjUpO1xyXG4gICAgICAgIGRvbUVsZW1lbnQuc3R5bGVbdGhpcy5jc3NQcm9wZXJ0eV0gPSB0aGlzLmN1cnJlbnRWYWx1ZSArIFwicHhcIjtcclxuXHJcbiAgICAgICAgaWYgKC10aGlzLm1heCArIHRoaXMucGFyZW50TGVuZ3RoIC0gMjUgPT09IHRoaXMuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25NYXgoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWFjaE1heCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVhY2hNYXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5NYXgoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhY2hNYXggPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVhY2hNaW4pIHtcclxuICAgICAgICAgICAgdGhpcy51bk1pbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbGFibGU7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgT2RvaGFyIG9uIDE4LjA4LjIwMTguXHJcbiAqL1xyXG5cclxuaW1wb3J0IERldmljZSBmcm9tIFwiLi9EZXZpY2VcIjtcclxuLy8gaW1wb3J0IHt0ZW1wZXJhdHVyZUNsYXNzaWNUZW1wbGF0ZUZ1bmN9IGZyb20gXCIuLi9jb25zdFwiO1xyXG5cclxubGV0IHRlbXBlcmF0dXJlQWx0ZXJuYXRpdmVUZW1wbGF0ZUZ1bmMgPSBudWxsO1xyXG5cclxuY2xhc3MgVGVtcGVyYXR1cmVBbHRlcm5hdGl2ZURldmljZSBleHRlbmRzIERldmljZSB7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8uXHJcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IGNvbmZpZy50ZW1wZXJhdHVyZTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRm9ybSh0YXJnZXRFbG0pIHtcclxuICAgICAgICBsZXQgcG9wcEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX2Zvcm1cIik7XHJcbiAgICAgICAgc3VwZXIub3BlbkZvcm0ocG9wcEZvcm0sIHRhcmdldEVsbSk7XHJcblxyXG4gICAgICAgIGlmICghdGVtcGVyYXR1cmVBbHRlcm5hdGl2ZVRlbXBsYXRlRnVuYykge1xyXG4gICAgICAgICAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBlcmF0dXJlX2FsdGVybmF0aXZlX3RlbXBsYXRlXCIpO1xyXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZUFsdGVybmF0aXZlVGVtcGxhdGVGdW5jID0gXy50ZW1wbGF0ZSh0ZW1wbGF0ZS5pbm5lckhUTUwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9wcEZvcm0uaW5uZXJIVE1MID0gdGVtcGVyYXR1cmVBbHRlcm5hdGl2ZVRlbXBsYXRlRnVuYyh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxyXG4gICAgICAgICAgICAgICAgdGVtcGVyYXR1cmU6IHRoaXMudGVtcGVyYXR1cmUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZW1wZXJhdHVyZUFsdGVybmF0aXZlRGV2aWNlOyIsIi8qKlxuICogQ3JlYXRlZCBieSBPZG9oYXIgb24gMTguMDguMjAxOC5cbiAqL1xuXG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuL0RldmljZVwiO1xuLy8gaW1wb3J0IHt0ZW1wZXJhdHVyZUNsYXNzaWNUZW1wbGF0ZUZ1bmN9IGZyb20gXCIuLi9jb25zdFwiO1xuXG5sZXQgdGVtcGVyYXR1cmVDbGFzc2ljVGVtcGxhdGVGdW5jID0gbnVsbDtcblxuY2xhc3MgVGVtcGVyYXR1cmVDbGFzc2ljRGV2aWNlIGV4dGVuZHMgRGV2aWNlIHtcblxuXG5cbiAgICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8uXG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSBjb25maWcudGVtcGVyYXR1cmU7XG4gICAgfVxuXG4gICAgb3BlbkZvcm0odGFyZ2V0RWxtKSB7XG4gICAgICAgIGxldCBwb3BwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfZm9ybVwiKTtcbiAgICAgICAgc3VwZXIub3BlbkZvcm0ocG9wcEZvcm0sIHRhcmdldEVsbSk7XG5cbiAgICAgICAgaWYgKCF0ZW1wZXJhdHVyZUNsYXNzaWNUZW1wbGF0ZUZ1bmMpIHtcbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcGVyYXR1cmVfY2xhc3NpY190ZW1wbGF0ZVwiKTtcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlQ2xhc3NpY1RlbXBsYXRlRnVuYyA9IF8udGVtcGxhdGUodGVtcGxhdGUuaW5uZXJIVE1MKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvcHBGb3JtLmlubmVySFRNTCA9IHRlbXBlcmF0dXJlQ2xhc3NpY1RlbXBsYXRlRnVuYyh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiB0aGlzLnRlbXBlcmF0dXJlLFxuICAgICAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGVyYXR1cmVDbGFzc2ljRGV2aWNlOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IE9kb2hhciBvbiAxOC4wOC4yMDE4LlxyXG4gKi9cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgIHRlbXBlcmF0dXJlQ2xhc3NpYzogXCJ0ZW1wZXJhdHVyZV9jbGFzc2ljXCIsXHJcbiAgICB0ZW1wZXJhdHVyZUFsdGVybmF0aXZlOiBcInRlbXBlcmF0dXJlX2FsdGVybmF0aXZlXCIsXHJcbiAgICBsaWdodENsYXNzaWM6IFwibGlnaHRfY2xhc3NpY1wiXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdHlwZXMgPSB7XHJcbiAgICBkZXZpY2U6IFwiREVWSUNFXCJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0U2Nyb2xsID0ge1xyXG4gICAgdmVsb2NpdHk6IDEwMCxcclxuICAgIHRyYW5zaXRpb25EZWxheTogMC41XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdENvbnN0cyA9IHtcclxuICAgIC8vIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCJcclxuICAgIHVybDogXCJcIlxyXG59O1xyXG5cclxuZXhwb3J0IGxldCB0ZW1wZXJhdHVyZUNsYXNzaWNUZW1wbGF0ZUZ1bmMgPSBudWxsOyIsIi8qaW1wb3J0IHtpbml0TWFwfSBmcm9tIFwiLi9tYXBcIjtcclxuXHJcbmZ1bmN0aW9uIHNldE1hcFNpemUgKG1hcHNJZCkge1xyXG4gICAgbGV0IG1hcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtYXBzSWQpO1xyXG4gICAgbWFwcy5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgbWFwcy5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbn0qL1xyXG5cclxuaW1wb3J0IHtnZXRIdHRwUHJvbWlzZX0gZnJvbSBcIi4vYXBpXCI7XHJcbmltcG9ydCBcIi4vbGlicy9sb2Rhc2gubWluXCI7XHJcbmltcG9ydCBCaW5kaW5nIGZyb20gXCIuL2NsYXNzZXMvQmluZGluZy5qc1wiO1xyXG5pbXBvcnQgVGVtcGVyYXR1cmVDbGFzc2ljRGV2aWNlIGZyb20gXCIuL2NsYXNzZXMvVGVtcGVyYXR1cmVDbGFzc2ljRGV2aWNlXCI7XHJcbmltcG9ydCB7YWN0aW9ucywgcHJvamVjdENvbnN0cywgdHlwZXN9IGZyb20gXCIuL2NvbnN0XCI7XHJcbmltcG9ydCBMaWd0aENsYXNzaWNEZXZpY2UgZnJvbSBcIi4vY2xhc3Nlcy9MaWd0aENsYXNzaWNEZXZpY2VcIjtcclxuaW1wb3J0IFRlbXBlcmF0dXJlQWx0ZXJuYXRpdmVEZXZpY2UgZnJvbSBcIi4vY2xhc3Nlcy9UZW1wZXJhdHVyZUFsdGVybmF0aXZlRGV2aWNlXCI7XHJcblxyXG5sZXQgdGVtcGxhdGVGdW5jO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFwcGxpYW5jZXMgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgbGV0IGFwcGxpYW5jZXNQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwbGlhbmNlc19wYW5lbFwiKTtcclxuXHJcbiAgICBsZXQgZGV2aWNlQXJyYXkgPSBbXTtcclxuICAgIGxldCBkZXZpY2VzID0gZGF0YTtcclxuICAgIGxldCBlbGVtZW50c0h0bWwgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXZpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHRlbXBPYmogPSB7XHJcbiAgICAgICAgICAgIGlkOiBpLFxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5kZXZpY2UsXHJcbiAgICAgICAgICAgIHdpdGhBbmltYXRpb246IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0ZW1wT2JqLCBkZXZpY2VzW2ldKTtcclxuXHJcbiAgICAgICAgbGV0IGRldmljZTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChkZXZpY2VzW2ldLmFjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIGFjdGlvbnMubGlnaHRDbGFzc2ljOlxyXG4gICAgICAgICAgICAgICAgZGV2aWNlID0gbmV3IExpZ3RoQ2xhc3NpY0RldmljZSh0ZW1wT2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGFjdGlvbnMudGVtcGVyYXR1cmVBbHRlcm5hdGl2ZTpcclxuICAgICAgICAgICAgICAgIGRldmljZSA9IG5ldyBUZW1wZXJhdHVyZUFsdGVybmF0aXZlRGV2aWNlKHRlbXBPYmopO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBkZXZpY2UgPSBuZXcgVGVtcGVyYXR1cmVDbGFzc2ljRGV2aWNlKHRlbXBPYmopO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZXZpY2VBcnJheS5wdXNoKGRldmljZSk7XHJcbiAgICAgICAgZWxlbWVudHNIdG1sICs9IHRlbXBsYXRlRnVuYyh7ZGF0YTogdGVtcE9ian0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGxpYW5jZXNQYW5lbC5pbm5lckhUTUwgPSBlbGVtZW50c0h0bWw7XHJcbiAgICBhcHBsaWFuY2VzUGFuZWwuc3R5bGUud2lkdGggPSAoZGV2aWNlcy5sZW5ndGggKiAyMDAgKyAoZGV2aWNlcy5sZW5ndGggLSAxKSAqIDE1KSArIFwicHhcIjtcclxuXHJcbiAgICB3aW5kb3cuZGV2aWNlc0FycmF5ID0gZGV2aWNlQXJyYXk7XHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IGNvbmZpZyA9IHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBwcm9qZWN0Q29uc3RzLnVybCArIFwiL2FwaS9wdWJsaWMvZ2V0RGV2aWNlc0luZm9cIixcclxuICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGdldEh0dHBQcm9taXNlKGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICBsZXQgdGFza3MgPSBkYXRhLnRhc2tzO1xyXG5cclxuICAgICAgICBsZXQgbWFpblBhbmVsSW5uZXJSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9wYW5lbF9pbm5lcl9yaWdodF9fZWxlbWVudHNcIik7XHJcbiAgICAgICAgbGV0IHRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza190ZW1wbGF0ZVwiKTtcclxuICAgICAgICB0ZW1wbGF0ZUZ1bmMgPSBfLnRlbXBsYXRlKHRhc2tUZW1wbGF0ZS5pbm5lckhUTUwpO1xyXG5cclxuICAgICAgICBsZXQgZWxlbWVudHNIdG1sID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzSHRtbCArPSB0ZW1wbGF0ZUZ1bmMoe2RhdGE6IHRhc2tzW2ldfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYWluUGFuZWxJbm5lclJpZ2h0LmlubmVySFRNTCA9IGVsZW1lbnRzSHRtbDtcclxuXHJcblxyXG4gICAgICAgIGxldCBlbGVjdFNjcmlwdHNQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFuZWxfaW5uZXJfX2VsZWN0X3NjcmlwdHNcIik7XHJcbiAgICAgICAgbGV0IGVsZWN0U2NyaXB0VGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZWN0X3NjcmlwdF90ZW1wbGF0ZVwiKTtcclxuICAgICAgICBsZXQgZWxlY3RTY3JpcHRUZW1wbGF0ZUZ1bmMgPSBfLnRlbXBsYXRlKGVsZWN0U2NyaXB0VGVtcGxhdGUuaW5uZXJIVE1MKTtcclxuXHJcbiAgICAgICAgbGV0IGVsZWN0U2NyaXB0cyA9IGRhdGEuc2NyaXB0cztcclxuXHJcbiAgICAgICAgZWxlbWVudHNIdG1sID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZWxlY3RTY3JpcHRzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c0h0bWwgKz0gZWxlY3RTY3JpcHRUZW1wbGF0ZUZ1bmMoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGVsZWN0U2NyaXB0c1tpXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxlbWVudHNIdG1sICs9IGVsZWN0U2NyaXB0VGVtcGxhdGVGdW5jKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGludmlzaWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZWN0U2NyaXB0c1BhbmVsLmlubmVySFRNTCA9IGVsZW1lbnRzSHRtbDtcclxuXHJcbiAgICAgICAgdXBkYXRlQXBwbGlhbmNlcyhkYXRhLmFwcGxpYW5jZXMpO1xyXG5cclxuICAgICAgICBsZXQgYmluZGluZyA9IG5ldyBCaW5kaW5nKCk7XHJcblxyXG4gICAgICAgIGJpbmRpbmcuc2V0QmluZGluZygpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gOTAwICkge1xyXG4gICAgICAgICAgICBiaW5kaW5nLnNldE1vYmlsZUJpbmRpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgY29uZmlnMiA9IHtcclxuICAgICAgICB1cmw6IHByb2plY3RDb25zdHMudXJsICsgXCJhcGkvcHVibGljL2xvZ2luXCIsXHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH07XHJcblxyXG4gICAgZ2V0SHR0cFByb21pc2UoY29uZmlnMikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyX25hbWVcIikuaW5uZXJIVE1MID0gKGRhdGEuZmlyc3ROYW1lKSA/IGRhdGEuZmlyc3ROYW1lIDogXCLQmNC70YzRj1wiO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4iLCIoZnVuY3Rpb24oKXtmdW5jdGlvbiBuKG4sdCl7cmV0dXJuIG4uc2V0KHRbMF0sdFsxXSksbn1mdW5jdGlvbiB0KG4sdCl7cmV0dXJuIG4uYWRkKHQpLG59ZnVuY3Rpb24gcihuLHQscil7c3dpdGNoKHIubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIG4uY2FsbCh0KTtjYXNlIDE6cmV0dXJuIG4uY2FsbCh0LHJbMF0pO2Nhc2UgMjpyZXR1cm4gbi5jYWxsKHQsclswXSxyWzFdKTtjYXNlIDM6cmV0dXJuIG4uY2FsbCh0LHJbMF0sclsxXSxyWzJdKX1yZXR1cm4gbi5hcHBseSh0LHIpfWZ1bmN0aW9uIGUobix0LHIsZSl7Zm9yKHZhciB1PS0xLGk9bnVsbD09bj8wOm4ubGVuZ3RoOysrdTxpOyl7dmFyIG89blt1XTt0KGUsbyxyKG8pLG4pfXJldHVybiBlfWZ1bmN0aW9uIHUobix0KXtmb3IodmFyIHI9LTEsZT1udWxsPT1uPzA6bi5sZW5ndGg7KytyPGUmJiExIT09dChuW3JdLHIsbik7KTtyZXR1cm4gbn1mdW5jdGlvbiBpKG4sdCl7Zm9yKHZhciByPW51bGw9PW4/MDpuLmxlbmd0aDtyLS0mJiExIT09dChuW3JdLHIsbik7KTtyZXR1cm4gbn1mdW5jdGlvbiBvKG4sdCl7Zm9yKHZhciByPS0xLGU9bnVsbD09bj8wOm4ubGVuZ3RoOysrcjxlOylpZighdChuW3JdLHIsbikpcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24gZihuLHQpe2Zvcih2YXIgcj0tMSxlPW51bGw9PW4/MDpuLmxlbmd0aCx1PTAsaT1bXTsrK3I8ZTspe3ZhciBvPW5bcl07dChvLHIsbikmJihpW3UrK109byl9cmV0dXJuIGl9ZnVuY3Rpb24gYyhuLHQpe3JldHVybiEhKG51bGw9PW4/MDpuLmxlbmd0aCkmJmIobix0LDApPi0xfWZ1bmN0aW9uIGEobix0LHIpe2Zvcih2YXIgZT0tMSx1PW51bGw9PW4/MDpuLmxlbmd0aDsrK2U8dTspaWYocih0LG5bZV0pKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIGwobix0KXtmb3IodmFyIHI9LTEsZT1udWxsPT1uPzA6bi5sZW5ndGgsdT1BcnJheShlKTsrK3I8ZTspdVtyXT10KG5bcl0scixuKTtyZXR1cm4gdX1mdW5jdGlvbiBzKG4sdCl7Zm9yKHZhciByPS0xLGU9dC5sZW5ndGgsdT1uLmxlbmd0aDsrK3I8ZTspblt1K3JdPXRbcl07cmV0dXJuIG59ZnVuY3Rpb24gaChuLHQscixlKXt2YXIgdT0tMSxpPW51bGw9PW4/MDpuLmxlbmd0aDtmb3IoZSYmaSYmKHI9blsrK3VdKTsrK3U8aTspcj10KHIsblt1XSx1LG4pO3JldHVybiByfWZ1bmN0aW9uIHAobix0LHIsZSl7dmFyIHU9bnVsbD09bj8wOm4ubGVuZ3RoO2ZvcihlJiZ1JiYocj1uWy0tdV0pO3UtLTspcj10KHIsblt1XSx1LG4pO3JldHVybiByfWZ1bmN0aW9uIF8obix0KXtmb3IodmFyIHI9LTEsZT1udWxsPT1uPzA6bi5sZW5ndGg7KytyPGU7KWlmKHQobltyXSxyLG4pKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIHYobil7cmV0dXJuIG4uc3BsaXQoXCJcIil9ZnVuY3Rpb24gZyhuKXtyZXR1cm4gbi5tYXRjaChXdCl8fFtdfWZ1bmN0aW9uIHkobix0LHIpe3ZhciBlO3JldHVybiByKG4sZnVuY3Rpb24obixyLHUpe2lmKHQobixyLHUpKXJldHVybiBlPXIsITF9KSxlfWZ1bmN0aW9uIGQobix0LHIsZSl7Zm9yKHZhciB1PW4ubGVuZ3RoLGk9cisoZT8xOi0xKTtlP2ktLTorK2k8dTspaWYodChuW2ldLGksbikpcmV0dXJuIGk7cmV0dXJuLTF9ZnVuY3Rpb24gYihuLHQscil7cmV0dXJuIHQ9PT10P0sobix0LHIpOmQobixtLHIpfWZ1bmN0aW9uIHcobix0LHIsZSl7Zm9yKHZhciB1PXItMSxpPW4ubGVuZ3RoOysrdTxpOylpZihlKG5bdV0sdCkpcmV0dXJuIHU7cmV0dXJuLTF9ZnVuY3Rpb24gbShuKXtyZXR1cm4gbiE9PW59ZnVuY3Rpb24geChuLHQpe3ZhciByPW51bGw9PW4/MDpuLmxlbmd0aDtyZXR1cm4gcj9JKG4sdCkvcjpTbn1mdW5jdGlvbiBqKG4pe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dD9YOnRbbl19fWZ1bmN0aW9uIEEobil7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT1uP1g6blt0XX19ZnVuY3Rpb24gayhuLHQscixlLHUpe3JldHVybiB1KG4sZnVuY3Rpb24obix1LGkpe3I9ZT8oZT0hMSxuKTp0KHIsbix1LGkpfSkscn1mdW5jdGlvbiBPKG4sdCl7dmFyIHI9bi5sZW5ndGg7Zm9yKG4uc29ydCh0KTtyLS07KW5bcl09bltyXS52YWx1ZTtyZXR1cm4gbn1mdW5jdGlvbiBJKG4sdCl7Zm9yKHZhciByLGU9LTEsdT1uLmxlbmd0aDsrK2U8dTspe3ZhciBpPXQobltlXSk7aSE9PVgmJihyPXI9PT1YP2k6citpKX1yZXR1cm4gcn1mdW5jdGlvbiBSKG4sdCl7Zm9yKHZhciByPS0xLGU9QXJyYXkobik7KytyPG47KWVbcl09dChyKTtyZXR1cm4gZX1mdW5jdGlvbiB6KG4sdCl7cmV0dXJuIGwodCxmdW5jdGlvbih0KXtyZXR1cm5bdCxuW3RdXX0pfWZ1bmN0aW9uIEUobil7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBuKHQpfX1mdW5jdGlvbiBTKG4sdCl7cmV0dXJuIGwodCxmdW5jdGlvbih0KXtyZXR1cm4gblt0XX0pfWZ1bmN0aW9uIEwobix0KXtyZXR1cm4gbi5oYXModCl9ZnVuY3Rpb24gVyhuLHQpe2Zvcih2YXIgcj0tMSxlPW4ubGVuZ3RoOysrcjxlJiZiKHQsbltyXSwwKT4tMTspO3JldHVybiByfWZ1bmN0aW9uIEMobix0KXtmb3IodmFyIHI9bi5sZW5ndGg7ci0tJiZiKHQsbltyXSwwKT4tMTspO3JldHVybiByfWZ1bmN0aW9uIFUobix0KXtmb3IodmFyIHI9bi5sZW5ndGgsZT0wO3ItLTspbltyXT09PXQmJisrZTtyZXR1cm4gZX1mdW5jdGlvbiBCKG4pe3JldHVyblwiXFxcXFwiK3lyW25dfWZ1bmN0aW9uIFQobix0KXtyZXR1cm4gbnVsbD09bj9YOm5bdF19ZnVuY3Rpb24gJChuKXtyZXR1cm4gY3IudGVzdChuKX1mdW5jdGlvbiBEKG4pe3JldHVybiBhci50ZXN0KG4pfWZ1bmN0aW9uIE0obil7Zm9yKHZhciB0LHI9W107ISh0PW4ubmV4dCgpKS5kb25lOylyLnB1c2godC52YWx1ZSk7cmV0dXJuIHJ9ZnVuY3Rpb24gRihuKXt2YXIgdD0tMSxyPUFycmF5KG4uc2l6ZSk7cmV0dXJuIG4uZm9yRWFjaChmdW5jdGlvbihuLGUpe3JbKyt0XT1bZSxuXX0pLHJ9ZnVuY3Rpb24gTihuLHQpe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gbih0KHIpKX19ZnVuY3Rpb24gUChuLHQpe2Zvcih2YXIgcj0tMSxlPW4ubGVuZ3RoLHU9MCxpPVtdOysrcjxlOyl7dmFyIG89bltyXTtvIT09dCYmbyE9PW9ufHwobltyXT1vbixpW3UrK109cil9cmV0dXJuIGl9ZnVuY3Rpb24gcShuKXt2YXIgdD0tMSxyPUFycmF5KG4uc2l6ZSk7cmV0dXJuIG4uZm9yRWFjaChmdW5jdGlvbihuKXtyWysrdF09bn0pLHJ9ZnVuY3Rpb24gWihuKXt2YXIgdD0tMSxyPUFycmF5KG4uc2l6ZSk7cmV0dXJuIG4uZm9yRWFjaChmdW5jdGlvbihuKXtyWysrdF09W24sbl19KSxyfWZ1bmN0aW9uIEsobix0LHIpe2Zvcih2YXIgZT1yLTEsdT1uLmxlbmd0aDsrK2U8dTspaWYobltlXT09PXQpcmV0dXJuIGU7cmV0dXJuLTF9ZnVuY3Rpb24gVihuLHQscil7Zm9yKHZhciBlPXIrMTtlLS07KWlmKG5bZV09PT10KXJldHVybiBlO3JldHVybiBlfWZ1bmN0aW9uIEcobil7cmV0dXJuICQobik/SihuKTpDcihuKX1mdW5jdGlvbiBIKG4pe3JldHVybiAkKG4pP1kobik6dihuKX1mdW5jdGlvbiBKKG4pe2Zvcih2YXIgdD1vci5sYXN0SW5kZXg9MDtvci50ZXN0KG4pOykrK3Q7cmV0dXJuIHR9ZnVuY3Rpb24gWShuKXtyZXR1cm4gbi5tYXRjaChvcil8fFtdfWZ1bmN0aW9uIFEobil7cmV0dXJuIG4ubWF0Y2goZnIpfHxbXX12YXIgWCxubj0yMDAsdG49XCJVbnN1cHBvcnRlZCBjb3JlLWpzIHVzZS4gVHJ5IGh0dHBzOi8vbnBtcy5pby9zZWFyY2g/cT1wb255ZmlsbC5cIixybj1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIixlbj1cIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIix1bj01MDAsb249XCJfX2xvZGFzaF9wbGFjZWhvbGRlcl9fXCIsZm49MSxjbj0yLGFuPTQsbG49MSxzbj0yLGhuPTEscG49Mixfbj00LHZuPTgsZ249MTYseW49MzIsZG49NjQsYm49MTI4LHduPTI1Nixtbj01MTIseG49MzAsam49XCIuLi5cIixBbj04MDAsa249MTYsT249MSxJbj0yLFJuPTEvMCx6bj05MDA3MTk5MjU0NzQwOTkxLEVuPTEuNzk3NjkzMTM0ODYyMzE1N2UzMDgsU249TmFOLExuPTQyOTQ5NjcyOTUsV249TG4tMSxDbj1Mbj4+PjEsVW49W1tcImFyeVwiLGJuXSxbXCJiaW5kXCIsaG5dLFtcImJpbmRLZXlcIixwbl0sW1wiY3VycnlcIix2bl0sW1wiY3VycnlSaWdodFwiLGduXSxbXCJmbGlwXCIsbW5dLFtcInBhcnRpYWxcIix5bl0sW1wicGFydGlhbFJpZ2h0XCIsZG5dLFtcInJlYXJnXCIsd25dXSxCbj1cIltvYmplY3QgQXJndW1lbnRzXVwiLFRuPVwiW29iamVjdCBBcnJheV1cIiwkbj1cIltvYmplY3QgQXN5bmNGdW5jdGlvbl1cIixEbj1cIltvYmplY3QgQm9vbGVhbl1cIixNbj1cIltvYmplY3QgRGF0ZV1cIixGbj1cIltvYmplY3QgRE9NRXhjZXB0aW9uXVwiLE5uPVwiW29iamVjdCBFcnJvcl1cIixQbj1cIltvYmplY3QgRnVuY3Rpb25dXCIscW49XCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiLFpuPVwiW29iamVjdCBNYXBdXCIsS249XCJbb2JqZWN0IE51bWJlcl1cIixWbj1cIltvYmplY3QgTnVsbF1cIixHbj1cIltvYmplY3QgT2JqZWN0XVwiLEhuPVwiW29iamVjdCBQcm94eV1cIixKbj1cIltvYmplY3QgUmVnRXhwXVwiLFluPVwiW29iamVjdCBTZXRdXCIsUW49XCJbb2JqZWN0IFN0cmluZ11cIixYbj1cIltvYmplY3QgU3ltYm9sXVwiLG50PVwiW29iamVjdCBVbmRlZmluZWRdXCIsdHQ9XCJbb2JqZWN0IFdlYWtNYXBdXCIscnQ9XCJbb2JqZWN0IFdlYWtTZXRdXCIsZXQ9XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiLHV0PVwiW29iamVjdCBEYXRhVmlld11cIixpdD1cIltvYmplY3QgRmxvYXQzMkFycmF5XVwiLG90PVwiW29iamVjdCBGbG9hdDY0QXJyYXldXCIsZnQ9XCJbb2JqZWN0IEludDhBcnJheV1cIixjdD1cIltvYmplY3QgSW50MTZBcnJheV1cIixhdD1cIltvYmplY3QgSW50MzJBcnJheV1cIixsdD1cIltvYmplY3QgVWludDhBcnJheV1cIixzdD1cIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCIsaHQ9XCJbb2JqZWN0IFVpbnQxNkFycmF5XVwiLHB0PVwiW29iamVjdCBVaW50MzJBcnJheV1cIixfdD0vXFxiX19wIFxcKz0gJyc7L2csdnQ9L1xcYihfX3AgXFwrPSkgJycgXFwrL2csZ3Q9LyhfX2VcXCguKj9cXCl8XFxiX190XFwpKSBcXCtcXG4nJzsvZyx5dD0vJig/OmFtcHxsdHxndHxxdW90fCMzOSk7L2csZHQ9L1smPD5cIiddL2csYnQ9UmVnRXhwKHl0LnNvdXJjZSksd3Q9UmVnRXhwKGR0LnNvdXJjZSksbXQ9LzwlPShbXFxzXFxTXSs/KSU+L2cseHQ9L1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxqdD0vXlxcdyokLyxBdD0vXlxcLi8sa3Q9L1tcXFxcXiQuKis/KClbXFxde318XS9nLE90PVJlZ0V4cChrdC5zb3VyY2UpLEl0PS9eXFxzK3xcXHMrJC9nLFJ0PS9eXFxzKy8senQ9L1xccyskLyxFdD0vXFx7KD86XFxuXFwvXFwqIFxcW3dyYXBwZWQgd2l0aCAuK1xcXSBcXCpcXC8pP1xcbj8vLFN0PS9cXHtcXG5cXC9cXCogXFxbd3JhcHBlZCB3aXRoICguKylcXF0gXFwqLyxMdD0vLD8gJiAvLFd0PS9bXlxceDAwLVxceDJmXFx4M2EtXFx4NDBcXHg1Yi1cXHg2MFxceDdiLVxceDdmXSsvZyxDdD0vXFwkXFx7KFteXFxcXH1dKig/OlxcXFwuW15cXFxcfV0qKSopXFx9L2csVXQ9L1xcdyokLyxCdD0vXlstK10weFswLTlhLWZdKyQvaSxUdD0vXjBiWzAxXSskL2ksJHQ9L15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLyxEdD0vXjBvWzAtN10rJC9pLE10PS9eKD86MHxbMS05XVxcZCopJC8sRnQ9L1tcXHhjMC1cXHhkNlxceGQ4LVxceGY2XFx4ZjgtXFx4ZmZcXHUwMTAwLVxcdTAxN2ZdL2csTnQ9LygkXikvLFB0PS9bJ1xcblxcclxcdTIwMjhcXHUyMDI5XFxcXF0vZyxxdD1cIlxcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTJmXFxcXHUyMGQwLVxcXFx1MjBmZlwiLFp0PVwiXFxcXHhhY1xcXFx4YjFcXFxceGQ3XFxcXHhmN1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZlxcXFx1MjAwMC1cXFxcdTIwNmYgXFxcXHRcXFxceDBiXFxcXGZcXFxceGEwXFxcXHVmZWZmXFxcXG5cXFxcclxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MTY4MFxcXFx1MTgwZVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwYVxcXFx1MjAyZlxcXFx1MjA1ZlxcXFx1MzAwMFwiLEt0PVwiW1wiK3F0K1wiXVwiLFZ0PVwiW2EtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZl1cIixHdD1cIlteXFxcXHVkODAwLVxcXFx1ZGZmZlwiK1p0K1wiXFxcXGQrXFxcXHUyNzAwLVxcXFx1MjdiZmEtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZkEtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV1cIixIdD1cIlxcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXVwiLEp0PVwiKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfVwiLFl0PVwiW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdXCIsUXQ9XCJbQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXVwiLFh0PVwiKD86XCIrS3QrXCJ8XCIrSHQrXCIpP1wiLG5yPVwiKD86XFxcXHUyMDBkKD86XCIrW1wiW15cXFxcdWQ4MDAtXFxcXHVkZmZmXVwiLEp0LFl0XS5qb2luKFwifFwiKStcIilbXFxcXHVmZTBlXFxcXHVmZTBmXT9cIitYdCtcIikqXCIsdHI9XCJbXFxcXHVmZTBlXFxcXHVmZTBmXT9cIitYdCtucixycj1cIig/OlwiK1tcIltcXFxcdTI3MDAtXFxcXHUyN2JmXVwiLEp0LFl0XS5qb2luKFwifFwiKStcIilcIit0cixlcj1cIig/OlwiK1tcIlteXFxcXHVkODAwLVxcXFx1ZGZmZl1cIitLdCtcIj9cIixLdCxKdCxZdCxcIltcXFxcdWQ4MDAtXFxcXHVkZmZmXVwiXS5qb2luKFwifFwiKStcIilcIix1cj1SZWdFeHAoXCJbJ+KAmV1cIixcImdcIiksaXI9UmVnRXhwKEt0LFwiZ1wiKSxvcj1SZWdFeHAoSHQrXCIoPz1cIitIdCtcIil8XCIrZXIrdHIsXCJnXCIpLGZyPVJlZ0V4cChbUXQrXCI/XCIrVnQrXCIrKD86WyfigJldKD86ZHxsbHxtfHJlfHN8dHx2ZSkpPyg/PVwiK1tcIltcIitadCtcIl1cIixRdCxcIiRcIl0uam9pbihcInxcIikrXCIpXCIsXCIoPzpcIitRdCtcInxcIitHdCtcIikrKD86WyfigJldKD86RHxMTHxNfFJFfFN8VHxWRSkpPyg/PVwiK1tcIltcIitadCtcIl1cIixRdCtcIig/OlwiK1Z0K1wifFwiK0d0K1wiKVwiLFwiJFwiXS5qb2luKFwifFwiKStcIilcIixRdCtcIj8oPzpcIitWdCtcInxcIitHdCtcIikrKD86WyfigJldKD86ZHxsbHxtfHJlfHN8dHx2ZSkpP1wiLFF0K1wiKyg/Olsn4oCZXSg/OkR8TEx8TXxSRXxTfFR8VkUpKT9cIixcIlxcXFxkKig/Oig/OjFTVHwyTkR8M1JEfCg/IVsxMjNdKVxcXFxkVEgpXFxcXGIpXCIsXCJcXFxcZCooPzooPzoxc3R8Mm5kfDNyZHwoPyFbMTIzXSlcXFxcZHRoKVxcXFxiKVwiLFwiXFxcXGQrXCIscnJdLmpvaW4oXCJ8XCIpLFwiZ1wiKSxjcj1SZWdFeHAoXCJbXFxcXHUyMDBkXFxcXHVkODAwLVxcXFx1ZGZmZlwiK3F0K1wiXFxcXHVmZTBlXFxcXHVmZTBmXVwiKSxhcj0vW2Etel1bQS1aXXxbQS1aXXsyLH1bYS16XXxbMC05XVthLXpBLVpdfFthLXpBLVpdWzAtOV18W15hLXpBLVowLTkgXS8sbHI9W1wiQXJyYXlcIixcIkJ1ZmZlclwiLFwiRGF0YVZpZXdcIixcIkRhdGVcIixcIkVycm9yXCIsXCJGbG9hdDMyQXJyYXlcIixcIkZsb2F0NjRBcnJheVwiLFwiRnVuY3Rpb25cIixcIkludDhBcnJheVwiLFwiSW50MTZBcnJheVwiLFwiSW50MzJBcnJheVwiLFwiTWFwXCIsXCJNYXRoXCIsXCJPYmplY3RcIixcIlByb21pc2VcIixcIlJlZ0V4cFwiLFwiU2V0XCIsXCJTdHJpbmdcIixcIlN5bWJvbFwiLFwiVHlwZUVycm9yXCIsXCJVaW50OEFycmF5XCIsXCJVaW50OENsYW1wZWRBcnJheVwiLFwiVWludDE2QXJyYXlcIixcIlVpbnQzMkFycmF5XCIsXCJXZWFrTWFwXCIsXCJfXCIsXCJjbGVhclRpbWVvdXRcIixcImlzRmluaXRlXCIsXCJwYXJzZUludFwiLFwic2V0VGltZW91dFwiXSxzcj0tMSxocj17fTtocltpdF09aHJbb3RdPWhyW2Z0XT1ocltjdF09aHJbYXRdPWhyW2x0XT1ocltzdF09aHJbaHRdPWhyW3B0XT0hMCxocltCbl09aHJbVG5dPWhyW2V0XT1ocltEbl09aHJbdXRdPWhyW01uXT1ocltObl09aHJbUG5dPWhyW1puXT1ocltLbl09aHJbR25dPWhyW0puXT1ocltZbl09aHJbUW5dPWhyW3R0XT0hMTt2YXIgcHI9e307cHJbQm5dPXByW1RuXT1wcltldF09cHJbdXRdPXByW0RuXT1wcltNbl09cHJbaXRdPXByW290XT1wcltmdF09cHJbY3RdPXByW2F0XT1wcltabl09cHJbS25dPXByW0duXT1wcltKbl09cHJbWW5dPXByW1FuXT1wcltYbl09cHJbbHRdPXByW3N0XT1wcltodF09cHJbcHRdPSEwLHByW05uXT1wcltQbl09cHJbdHRdPSExO3ZhciBfcj17XCLDgFwiOlwiQVwiLFwiw4FcIjpcIkFcIixcIsOCXCI6XCJBXCIsXCLDg1wiOlwiQVwiLFwiw4RcIjpcIkFcIixcIsOFXCI6XCJBXCIsXCLDoFwiOlwiYVwiLFwiw6FcIjpcImFcIixcIsOiXCI6XCJhXCIsXCLDo1wiOlwiYVwiLFwiw6RcIjpcImFcIixcIsOlXCI6XCJhXCIsXCLDh1wiOlwiQ1wiLFwiw6dcIjpcImNcIixcIsOQXCI6XCJEXCIsXCLDsFwiOlwiZFwiLFwiw4hcIjpcIkVcIixcIsOJXCI6XCJFXCIsXCLDilwiOlwiRVwiLFwiw4tcIjpcIkVcIixcIsOoXCI6XCJlXCIsXCLDqVwiOlwiZVwiLFwiw6pcIjpcImVcIixcIsOrXCI6XCJlXCIsXCLDjFwiOlwiSVwiLFwiw41cIjpcIklcIixcIsOOXCI6XCJJXCIsXCLDj1wiOlwiSVwiLFwiw6xcIjpcImlcIixcIsOtXCI6XCJpXCIsXCLDrlwiOlwiaVwiLFwiw69cIjpcImlcIixcIsORXCI6XCJOXCIsXCLDsVwiOlwiblwiLFwiw5JcIjpcIk9cIixcIsOTXCI6XCJPXCIsXCLDlFwiOlwiT1wiLFwiw5VcIjpcIk9cIixcIsOWXCI6XCJPXCIsXCLDmFwiOlwiT1wiLFwiw7JcIjpcIm9cIixcIsOzXCI6XCJvXCIsXCLDtFwiOlwib1wiLFwiw7VcIjpcIm9cIixcIsO2XCI6XCJvXCIsXCLDuFwiOlwib1wiLFwiw5lcIjpcIlVcIixcIsOaXCI6XCJVXCIsXCLDm1wiOlwiVVwiLFwiw5xcIjpcIlVcIixcIsO5XCI6XCJ1XCIsXCLDulwiOlwidVwiLFwiw7tcIjpcInVcIixcIsO8XCI6XCJ1XCIsXCLDnVwiOlwiWVwiLFwiw71cIjpcInlcIixcIsO/XCI6XCJ5XCIsXCLDhlwiOlwiQWVcIixcIsOmXCI6XCJhZVwiLFwiw55cIjpcIlRoXCIsXCLDvlwiOlwidGhcIixcIsOfXCI6XCJzc1wiLFwixIBcIjpcIkFcIixcIsSCXCI6XCJBXCIsXCLEhFwiOlwiQVwiLFwixIFcIjpcImFcIixcIsSDXCI6XCJhXCIsXCLEhVwiOlwiYVwiLFwixIZcIjpcIkNcIixcIsSIXCI6XCJDXCIsXCLEilwiOlwiQ1wiLFwixIxcIjpcIkNcIixcIsSHXCI6XCJjXCIsXCLEiVwiOlwiY1wiLFwixItcIjpcImNcIixcIsSNXCI6XCJjXCIsXCLEjlwiOlwiRFwiLFwixJBcIjpcIkRcIixcIsSPXCI6XCJkXCIsXCLEkVwiOlwiZFwiLFwixJJcIjpcIkVcIixcIsSUXCI6XCJFXCIsXCLEllwiOlwiRVwiLFwixJhcIjpcIkVcIixcIsSaXCI6XCJFXCIsXCLEk1wiOlwiZVwiLFwixJVcIjpcImVcIixcIsSXXCI6XCJlXCIsXCLEmVwiOlwiZVwiLFwixJtcIjpcImVcIixcIsScXCI6XCJHXCIsXCLEnlwiOlwiR1wiLFwixKBcIjpcIkdcIixcIsSiXCI6XCJHXCIsXCLEnVwiOlwiZ1wiLFwixJ9cIjpcImdcIixcIsShXCI6XCJnXCIsXCLEo1wiOlwiZ1wiLFwixKRcIjpcIkhcIixcIsSmXCI6XCJIXCIsXCLEpVwiOlwiaFwiLFwixKdcIjpcImhcIixcIsSoXCI6XCJJXCIsXCLEqlwiOlwiSVwiLFwixKxcIjpcIklcIixcIsSuXCI6XCJJXCIsXCLEsFwiOlwiSVwiLFwixKlcIjpcImlcIixcIsSrXCI6XCJpXCIsXCLErVwiOlwiaVwiLFwixK9cIjpcImlcIixcIsSxXCI6XCJpXCIsXCLEtFwiOlwiSlwiLFwixLVcIjpcImpcIixcIsS2XCI6XCJLXCIsXCLEt1wiOlwia1wiLFwixLhcIjpcImtcIixcIsS5XCI6XCJMXCIsXCLEu1wiOlwiTFwiLFwixL1cIjpcIkxcIixcIsS/XCI6XCJMXCIsXCLFgVwiOlwiTFwiLFwixLpcIjpcImxcIixcIsS8XCI6XCJsXCIsXCLEvlwiOlwibFwiLFwixYBcIjpcImxcIixcIsWCXCI6XCJsXCIsXCLFg1wiOlwiTlwiLFwixYVcIjpcIk5cIixcIsWHXCI6XCJOXCIsXCLFilwiOlwiTlwiLFwixYRcIjpcIm5cIixcIsWGXCI6XCJuXCIsXCLFiFwiOlwiblwiLFwixYtcIjpcIm5cIixcIsWMXCI6XCJPXCIsXCLFjlwiOlwiT1wiLFwixZBcIjpcIk9cIixcIsWNXCI6XCJvXCIsXCLFj1wiOlwib1wiLFwixZFcIjpcIm9cIixcIsWUXCI6XCJSXCIsXCLFllwiOlwiUlwiLFwixZhcIjpcIlJcIixcIsWVXCI6XCJyXCIsXCLFl1wiOlwiclwiLFwixZlcIjpcInJcIixcIsWaXCI6XCJTXCIsXCLFnFwiOlwiU1wiLFwixZ5cIjpcIlNcIixcIsWgXCI6XCJTXCIsXCLFm1wiOlwic1wiLFwixZ1cIjpcInNcIixcIsWfXCI6XCJzXCIsXCLFoVwiOlwic1wiLFwixaJcIjpcIlRcIixcIsWkXCI6XCJUXCIsXCLFplwiOlwiVFwiLFwixaNcIjpcInRcIixcIsWlXCI6XCJ0XCIsXCLFp1wiOlwidFwiLFwixahcIjpcIlVcIixcIsWqXCI6XCJVXCIsXCLFrFwiOlwiVVwiLFwixa5cIjpcIlVcIixcIsWwXCI6XCJVXCIsXCLFslwiOlwiVVwiLFwixalcIjpcInVcIixcIsWrXCI6XCJ1XCIsXCLFrVwiOlwidVwiLFwixa9cIjpcInVcIixcIsWxXCI6XCJ1XCIsXCLFs1wiOlwidVwiLFwixbRcIjpcIldcIixcIsW1XCI6XCJ3XCIsXCLFtlwiOlwiWVwiLFwixbdcIjpcInlcIixcIsW4XCI6XCJZXCIsXCLFuVwiOlwiWlwiLFwixbtcIjpcIlpcIixcIsW9XCI6XCJaXCIsXCLFulwiOlwielwiLFwixbxcIjpcInpcIixcIsW+XCI6XCJ6XCIsXCLEslwiOlwiSUpcIixcIsSzXCI6XCJpalwiLFwixZJcIjpcIk9lXCIsXCLFk1wiOlwib2VcIixcIsWJXCI6XCInblwiLFwixb9cIjpcInNcIn0sdnI9e1wiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImIzM5O1wifSxncj17XCImYW1wO1wiOlwiJlwiLFwiJmx0O1wiOlwiPFwiLFwiJmd0O1wiOlwiPlwiLFwiJnF1b3Q7XCI6J1wiJyxcIiYjMzk7XCI6XCInXCJ9LHlyPXtcIlxcXFxcIjpcIlxcXFxcIixcIidcIjpcIidcIixcIlxcblwiOlwiblwiLFwiXFxyXCI6XCJyXCIsXCJcXHUyMDI4XCI6XCJ1MjAyOFwiLFwiXFx1MjAyOVwiOlwidTIwMjlcIn0sZHI9cGFyc2VGbG9hdCxicj1wYXJzZUludCx3cj1cIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWwmJmdsb2JhbC5PYmplY3Q9PT1PYmplY3QmJmdsb2JhbCxtcj1cIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYseHI9d3J8fG1yfHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksanI9XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJmV4cG9ydHMmJiFleHBvcnRzLm5vZGVUeXBlJiZleHBvcnRzLEFyPWpyJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUmJiFtb2R1bGUubm9kZVR5cGUmJm1vZHVsZSxrcj1BciYmQXIuZXhwb3J0cz09PWpyLE9yPWtyJiZ3ci5wcm9jZXNzLElyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBPciYmT3IuYmluZGluZyYmT3IuYmluZGluZyhcInV0aWxcIil9Y2F0Y2gobil7fX0oKSxScj1JciYmSXIuaXNBcnJheUJ1ZmZlcix6cj1JciYmSXIuaXNEYXRlLEVyPUlyJiZJci5pc01hcCxTcj1JciYmSXIuaXNSZWdFeHAsTHI9SXImJklyLmlzU2V0LFdyPUlyJiZJci5pc1R5cGVkQXJyYXksQ3I9aihcImxlbmd0aFwiKSxVcj1BKF9yKSxCcj1BKHZyKSxUcj1BKGdyKSwkcj1mdW5jdGlvbiB2KEEpe2Z1bmN0aW9uIEsobil7aWYocmMobikmJiFwaChuKSYmIShuIGluc3RhbmNlb2YgV3QpKXtpZihuIGluc3RhbmNlb2YgWSlyZXR1cm4gbjtpZihwbC5jYWxsKG4sXCJfX3dyYXBwZWRfX1wiKSlyZXR1cm4gWWkobil9cmV0dXJuIG5ldyBZKG4pfWZ1bmN0aW9uIEooKXt9ZnVuY3Rpb24gWShuLHQpe3RoaXMuX193cmFwcGVkX189bix0aGlzLl9fYWN0aW9uc19fPVtdLHRoaXMuX19jaGFpbl9fPSEhdCx0aGlzLl9faW5kZXhfXz0wLHRoaXMuX192YWx1ZXNfXz1YfWZ1bmN0aW9uIFd0KG4pe3RoaXMuX193cmFwcGVkX189bix0aGlzLl9fYWN0aW9uc19fPVtdLHRoaXMuX19kaXJfXz0xLHRoaXMuX19maWx0ZXJlZF9fPSExLHRoaXMuX19pdGVyYXRlZXNfXz1bXSx0aGlzLl9fdGFrZUNvdW50X189TG4sdGhpcy5fX3ZpZXdzX189W119ZnVuY3Rpb24gcXQoKXt2YXIgbj1uZXcgV3QodGhpcy5fX3dyYXBwZWRfXyk7cmV0dXJuIG4uX19hY3Rpb25zX189V3UodGhpcy5fX2FjdGlvbnNfXyksbi5fX2Rpcl9fPXRoaXMuX19kaXJfXyxuLl9fZmlsdGVyZWRfXz10aGlzLl9fZmlsdGVyZWRfXyxuLl9faXRlcmF0ZWVzX189V3UodGhpcy5fX2l0ZXJhdGVlc19fKSxuLl9fdGFrZUNvdW50X189dGhpcy5fX3Rha2VDb3VudF9fLG4uX192aWV3c19fPVd1KHRoaXMuX192aWV3c19fKSxufWZ1bmN0aW9uIFp0KCl7aWYodGhpcy5fX2ZpbHRlcmVkX18pe3ZhciBuPW5ldyBXdCh0aGlzKTtuLl9fZGlyX189LTEsbi5fX2ZpbHRlcmVkX189ITB9ZWxzZSBuPXRoaXMuY2xvbmUoKSxuLl9fZGlyX18qPS0xO3JldHVybiBufWZ1bmN0aW9uIEt0KCl7dmFyIG49dGhpcy5fX3dyYXBwZWRfXy52YWx1ZSgpLHQ9dGhpcy5fX2Rpcl9fLHI9cGgobiksZT10PDAsdT1yP24ubGVuZ3RoOjAsaT14aSgwLHUsdGhpcy5fX3ZpZXdzX18pLG89aS5zdGFydCxmPWkuZW5kLGM9Zi1vLGE9ZT9mOm8tMSxsPXRoaXMuX19pdGVyYXRlZXNfXyxzPWwubGVuZ3RoLGg9MCxwPVBsKGMsdGhpcy5fX3Rha2VDb3VudF9fKTtpZighcnx8IWUmJnU9PWMmJnA9PWMpcmV0dXJuIF91KG4sdGhpcy5fX2FjdGlvbnNfXyk7dmFyIF89W107bjpmb3IoO2MtLSYmaDxwOyl7YSs9dDtmb3IodmFyIHY9LTEsZz1uW2FdOysrdjxzOyl7dmFyIHk9bFt2XSxkPXkuaXRlcmF0ZWUsYj15LnR5cGUsdz1kKGcpO2lmKGI9PUluKWc9dztlbHNlIGlmKCF3KXtpZihiPT1Pbiljb250aW51ZSBuO2JyZWFrIG59fV9baCsrXT1nfXJldHVybiBffWZ1bmN0aW9uIFZ0KG4pe3ZhciB0PS0xLHI9bnVsbD09bj8wOm4ubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7Kyt0PHI7KXt2YXIgZT1uW3RdO3RoaXMuc2V0KGVbMF0sZVsxXSl9fWZ1bmN0aW9uIEd0KCl7dGhpcy5fX2RhdGFfXz1YbD9YbChudWxsKTp7fSx0aGlzLnNpemU9MH1mdW5jdGlvbiBIdChuKXt2YXIgdD10aGlzLmhhcyhuKSYmZGVsZXRlIHRoaXMuX19kYXRhX19bbl07cmV0dXJuIHRoaXMuc2l6ZS09dD8xOjAsdH1mdW5jdGlvbiBKdChuKXt2YXIgdD10aGlzLl9fZGF0YV9fO2lmKFhsKXt2YXIgcj10W25dO3JldHVybiByPT09ZW4/WDpyfXJldHVybiBwbC5jYWxsKHQsbik/dFtuXTpYfWZ1bmN0aW9uIFl0KG4pe3ZhciB0PXRoaXMuX19kYXRhX187cmV0dXJuIFhsP3Rbbl0hPT1YOnBsLmNhbGwodCxuKX1mdW5jdGlvbiBRdChuLHQpe3ZhciByPXRoaXMuX19kYXRhX187cmV0dXJuIHRoaXMuc2l6ZSs9dGhpcy5oYXMobik/MDoxLHJbbl09WGwmJnQ9PT1YP2VuOnQsdGhpc31mdW5jdGlvbiBYdChuKXt2YXIgdD0tMSxyPW51bGw9PW4/MDpuLmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrdDxyOyl7dmFyIGU9blt0XTt0aGlzLnNldChlWzBdLGVbMV0pfX1mdW5jdGlvbiBucigpe3RoaXMuX19kYXRhX189W10sdGhpcy5zaXplPTB9ZnVuY3Rpb24gdHIobil7dmFyIHQ9dGhpcy5fX2RhdGFfXyxyPUtyKHQsbik7cmV0dXJuIShyPDApJiYocj09dC5sZW5ndGgtMT90LnBvcCgpOklsLmNhbGwodCxyLDEpLC0tdGhpcy5zaXplLCEwKX1mdW5jdGlvbiBycihuKXt2YXIgdD10aGlzLl9fZGF0YV9fLHI9S3IodCxuKTtyZXR1cm4gcjwwP1g6dFtyXVsxXX1mdW5jdGlvbiBlcihuKXtyZXR1cm4gS3IodGhpcy5fX2RhdGFfXyxuKT4tMX1mdW5jdGlvbiBvcihuLHQpe3ZhciByPXRoaXMuX19kYXRhX18sZT1LcihyLG4pO3JldHVybiBlPDA/KCsrdGhpcy5zaXplLHIucHVzaChbbix0XSkpOnJbZV1bMV09dCx0aGlzfWZ1bmN0aW9uIGZyKG4pe3ZhciB0PS0xLHI9bnVsbD09bj8wOm4ubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7Kyt0PHI7KXt2YXIgZT1uW3RdO3RoaXMuc2V0KGVbMF0sZVsxXSl9fWZ1bmN0aW9uIGNyKCl7dGhpcy5zaXplPTAsdGhpcy5fX2RhdGFfXz17aGFzaDpuZXcgVnQsbWFwOm5ldyhIbHx8WHQpLHN0cmluZzpuZXcgVnR9fWZ1bmN0aW9uIGFyKG4pe3ZhciB0PWRpKHRoaXMsbikuZGVsZXRlKG4pO3JldHVybiB0aGlzLnNpemUtPXQ/MTowLHR9ZnVuY3Rpb24gX3Iobil7cmV0dXJuIGRpKHRoaXMsbikuZ2V0KG4pfWZ1bmN0aW9uIHZyKG4pe3JldHVybiBkaSh0aGlzLG4pLmhhcyhuKX1mdW5jdGlvbiBncihuLHQpe3ZhciByPWRpKHRoaXMsbiksZT1yLnNpemU7cmV0dXJuIHIuc2V0KG4sdCksdGhpcy5zaXplKz1yLnNpemU9PWU/MDoxLHRoaXN9ZnVuY3Rpb24geXIobil7dmFyIHQ9LTEscj1udWxsPT1uPzA6bi5sZW5ndGg7Zm9yKHRoaXMuX19kYXRhX189bmV3IGZyOysrdDxyOyl0aGlzLmFkZChuW3RdKX1mdW5jdGlvbiB3cihuKXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5zZXQobixlbiksdGhpc31mdW5jdGlvbiBtcihuKXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMobil9ZnVuY3Rpb24ganIobil7dmFyIHQ9dGhpcy5fX2RhdGFfXz1uZXcgWHQobik7dGhpcy5zaXplPXQuc2l6ZX1mdW5jdGlvbiBBcigpe3RoaXMuX19kYXRhX189bmV3IFh0LHRoaXMuc2l6ZT0wfWZ1bmN0aW9uIE9yKG4pe3ZhciB0PXRoaXMuX19kYXRhX18scj10LmRlbGV0ZShuKTtyZXR1cm4gdGhpcy5zaXplPXQuc2l6ZSxyfWZ1bmN0aW9uIElyKG4pe3JldHVybiB0aGlzLl9fZGF0YV9fLmdldChuKX1mdW5jdGlvbiBDcihuKXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMobil9ZnVuY3Rpb24gRHIobix0KXt2YXIgcj10aGlzLl9fZGF0YV9fO2lmKHIgaW5zdGFuY2VvZiBYdCl7dmFyIGU9ci5fX2RhdGFfXztpZighSGx8fGUubGVuZ3RoPG5uLTEpcmV0dXJuIGUucHVzaChbbix0XSksdGhpcy5zaXplPSsrci5zaXplLHRoaXM7cj10aGlzLl9fZGF0YV9fPW5ldyBmcihlKX1yZXR1cm4gci5zZXQobix0KSx0aGlzLnNpemU9ci5zaXplLHRoaXN9ZnVuY3Rpb24gTXIobix0KXt2YXIgcj1waChuKSxlPSFyJiZoaChuKSx1PSFyJiYhZSYmdmgobiksaT0hciYmIWUmJiF1JiZ3aChuKSxvPXJ8fGV8fHV8fGksZj1vP1Iobi5sZW5ndGgsb2wpOltdLGM9Zi5sZW5ndGg7Zm9yKHZhciBhIGluIG4pIXQmJiFwbC5jYWxsKG4sYSl8fG8mJihcImxlbmd0aFwiPT1hfHx1JiYoXCJvZmZzZXRcIj09YXx8XCJwYXJlbnRcIj09YSl8fGkmJihcImJ1ZmZlclwiPT1hfHxcImJ5dGVMZW5ndGhcIj09YXx8XCJieXRlT2Zmc2V0XCI9PWEpfHxFaShhLGMpKXx8Zi5wdXNoKGEpO3JldHVybiBmfWZ1bmN0aW9uIEZyKG4pe3ZhciB0PW4ubGVuZ3RoO3JldHVybiB0P25bSGUoMCx0LTEpXTpYfWZ1bmN0aW9uIE5yKG4sdCl7cmV0dXJuIFZpKFd1KG4pLFFyKHQsMCxuLmxlbmd0aCkpfWZ1bmN0aW9uIFByKG4pe3JldHVybiBWaShXdShuKSl9ZnVuY3Rpb24gcXIobix0LHIpeyhyPT09WHx8TmYoblt0XSxyKSkmJihyIT09WHx8dCBpbiBuKXx8SnIobix0LHIpfWZ1bmN0aW9uIFpyKG4sdCxyKXt2YXIgZT1uW3RdO3BsLmNhbGwobix0KSYmTmYoZSxyKSYmKHIhPT1YfHx0IGluIG4pfHxKcihuLHQscil9ZnVuY3Rpb24gS3Iobix0KXtmb3IodmFyIHI9bi5sZW5ndGg7ci0tOylpZihOZihuW3JdWzBdLHQpKXJldHVybiByO3JldHVybi0xfWZ1bmN0aW9uIFZyKG4sdCxyLGUpe3JldHVybiBzcyhuLGZ1bmN0aW9uKG4sdSxpKXt0KGUsbixyKG4pLGkpfSksZX1mdW5jdGlvbiBHcihuLHQpe3JldHVybiBuJiZDdSh0LFRjKHQpLG4pfWZ1bmN0aW9uIEhyKG4sdCl7cmV0dXJuIG4mJkN1KHQsJGModCksbil9ZnVuY3Rpb24gSnIobix0LHIpe1wiX19wcm90b19fXCI9PXQmJlNsP1NsKG4sdCx7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsdmFsdWU6cix3cml0YWJsZTohMH0pOm5bdF09cn1mdW5jdGlvbiBZcihuLHQpe2Zvcih2YXIgcj0tMSxlPXQubGVuZ3RoLHU9WGEoZSksaT1udWxsPT1uOysrcjxlOyl1W3JdPWk/WDpDYyhuLHRbcl0pO3JldHVybiB1fWZ1bmN0aW9uIFFyKG4sdCxyKXtyZXR1cm4gbj09PW4mJihyIT09WCYmKG49bjw9cj9uOnIpLHQhPT1YJiYobj1uPj10P246dCkpLG59ZnVuY3Rpb24gWHIobix0LHIsZSxpLG8pe3ZhciBmLGM9dCZmbixhPXQmY24sbD10JmFuO2lmKHImJihmPWk/cihuLGUsaSxvKTpyKG4pKSxmIT09WClyZXR1cm4gZjtpZighdGMobikpcmV0dXJuIG47dmFyIHM9cGgobik7aWYocyl7aWYoZj1raShuKSwhYylyZXR1cm4gV3UobixmKX1lbHNle3ZhciBoPWpzKG4pLHA9aD09UG58fGg9PXFuO2lmKHZoKG4pKXJldHVybiBtdShuLGMpO2lmKGg9PUdufHxoPT1Cbnx8cCYmIWkpe2lmKGY9YXx8cD97fTpPaShuKSwhYylyZXR1cm4gYT9CdShuLEhyKGYsbikpOlV1KG4sR3IoZixuKSl9ZWxzZXtpZighcHJbaF0pcmV0dXJuIGk/bjp7fTtmPUlpKG4saCxYcixjKX19b3x8KG89bmV3IGpyKTt2YXIgXz1vLmdldChuKTtpZihfKXJldHVybiBfO28uc2V0KG4sZik7dmFyIHY9bD9hP19pOnBpOmE/JGM6VGMsZz1zP1g6dihuKTtyZXR1cm4gdShnfHxuLGZ1bmN0aW9uKGUsdSl7ZyYmKHU9ZSxlPW5bdV0pLFpyKGYsdSxYcihlLHQscix1LG4sbykpfSksZn1mdW5jdGlvbiBuZShuKXt2YXIgdD1UYyhuKTtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIHRlKHIsbix0KX19ZnVuY3Rpb24gdGUobix0LHIpe3ZhciBlPXIubGVuZ3RoO2lmKG51bGw9PW4pcmV0dXJuIWU7Zm9yKG49dWwobik7ZS0tOyl7dmFyIHU9cltlXSxpPXRbdV0sbz1uW3VdO2lmKG89PT1YJiYhKHUgaW4gbil8fCFpKG8pKXJldHVybiExfXJldHVybiEwfWZ1bmN0aW9uIHJlKG4sdCxyKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBuKXRocm93IG5ldyBmbChybik7cmV0dXJuIE9zKGZ1bmN0aW9uKCl7bi5hcHBseShYLHIpfSx0KX1mdW5jdGlvbiBlZShuLHQscixlKXt2YXIgdT0tMSxpPWMsbz0hMCxmPW4ubGVuZ3RoLHM9W10saD10Lmxlbmd0aDtpZighZilyZXR1cm4gcztyJiYodD1sKHQsRShyKSkpLGU/KGk9YSxvPSExKTp0Lmxlbmd0aD49bm4mJihpPUwsbz0hMSx0PW5ldyB5cih0KSk7bjpmb3IoOysrdTxmOyl7dmFyIHA9blt1XSxfPW51bGw9PXI/cDpyKHApO2lmKHA9ZXx8MCE9PXA/cDowLG8mJl89PT1fKXtmb3IodmFyIHY9aDt2LS07KWlmKHRbdl09PT1fKWNvbnRpbnVlIG47cy5wdXNoKHApfWVsc2UgaSh0LF8sZSl8fHMucHVzaChwKX1yZXR1cm4gc31mdW5jdGlvbiB1ZShuLHQpe3ZhciByPSEwO3JldHVybiBzcyhuLGZ1bmN0aW9uKG4sZSx1KXtyZXR1cm4gcj0hIXQobixlLHUpfSkscn1mdW5jdGlvbiBpZShuLHQscil7Zm9yKHZhciBlPS0xLHU9bi5sZW5ndGg7KytlPHU7KXt2YXIgaT1uW2VdLG89dChpKTtpZihudWxsIT1vJiYoZj09PVg/bz09PW8mJiFwYyhvKTpyKG8sZikpKXZhciBmPW8sYz1pfXJldHVybiBjfWZ1bmN0aW9uIG9lKG4sdCxyLGUpe3ZhciB1PW4ubGVuZ3RoO2ZvcihyPWJjKHIpLHI8MCYmKHI9LXI+dT8wOnUrciksZT1lPT09WHx8ZT51P3U6YmMoZSksZTwwJiYoZSs9dSksZT1yPmU/MDp3YyhlKTtyPGU7KW5bcisrXT10O3JldHVybiBufWZ1bmN0aW9uIGZlKG4sdCl7dmFyIHI9W107cmV0dXJuIHNzKG4sZnVuY3Rpb24obixlLHUpe3QobixlLHUpJiZyLnB1c2gobil9KSxyfWZ1bmN0aW9uIGNlKG4sdCxyLGUsdSl7dmFyIGk9LTEsbz1uLmxlbmd0aDtmb3Iocnx8KHI9emkpLHV8fCh1PVtdKTsrK2k8bzspe3ZhciBmPW5baV07dD4wJiZyKGYpP3Q+MT9jZShmLHQtMSxyLGUsdSk6cyh1LGYpOmV8fCh1W3UubGVuZ3RoXT1mKX1yZXR1cm4gdX1mdW5jdGlvbiBhZShuLHQpe3JldHVybiBuJiZwcyhuLHQsVGMpfWZ1bmN0aW9uIGxlKG4sdCl7cmV0dXJuIG4mJl9zKG4sdCxUYyl9ZnVuY3Rpb24gc2Uobix0KXtyZXR1cm4gZih0LGZ1bmN0aW9uKHQpe3JldHVybiBRZihuW3RdKX0pfWZ1bmN0aW9uIGhlKG4sdCl7dD1idSh0LG4pO2Zvcih2YXIgcj0wLGU9dC5sZW5ndGg7bnVsbCE9biYmcjxlOyluPW5bR2kodFtyKytdKV07cmV0dXJuIHImJnI9PWU/bjpYfWZ1bmN0aW9uIHBlKG4sdCxyKXt2YXIgZT10KG4pO3JldHVybiBwaChuKT9lOnMoZSxyKG4pKX1mdW5jdGlvbiBfZShuKXtyZXR1cm4gbnVsbD09bj9uPT09WD9udDpWbjpFbCYmRWwgaW4gdWwobik/bWkobik6Rmkobil9ZnVuY3Rpb24gdmUobix0KXtyZXR1cm4gbj50fWZ1bmN0aW9uIGdlKG4sdCl7cmV0dXJuIG51bGwhPW4mJnBsLmNhbGwobix0KX1mdW5jdGlvbiB5ZShuLHQpe3JldHVybiBudWxsIT1uJiZ0IGluIHVsKG4pfWZ1bmN0aW9uIGRlKG4sdCxyKXtyZXR1cm4gbj49UGwodCxyKSYmbjxObCh0LHIpfWZ1bmN0aW9uIGJlKG4sdCxyKXtmb3IodmFyIGU9cj9hOmMsdT1uWzBdLmxlbmd0aCxpPW4ubGVuZ3RoLG89aSxmPVhhKGkpLHM9MS8wLGg9W107by0tOyl7dmFyIHA9bltvXTtvJiZ0JiYocD1sKHAsRSh0KSkpLHM9UGwocC5sZW5ndGgscyksZltvXT0hciYmKHR8fHU+PTEyMCYmcC5sZW5ndGg+PTEyMCk/bmV3IHlyKG8mJnApOlh9cD1uWzBdO3ZhciBfPS0xLHY9ZlswXTtuOmZvcig7KytfPHUmJmgubGVuZ3RoPHM7KXt2YXIgZz1wW19dLHk9dD90KGcpOmc7aWYoZz1yfHwwIT09Zz9nOjAsISh2P0wodix5KTplKGgseSxyKSkpe2ZvcihvPWk7LS1vOyl7dmFyIGQ9ZltvXTtpZighKGQ/TChkLHkpOmUobltvXSx5LHIpKSljb250aW51ZSBufXYmJnYucHVzaCh5KSxoLnB1c2goZyl9fXJldHVybiBofWZ1bmN0aW9uIHdlKG4sdCxyLGUpe3JldHVybiBhZShuLGZ1bmN0aW9uKG4sdSxpKXt0KGUscihuKSx1LGkpfSksZX1mdW5jdGlvbiBtZShuLHQsZSl7dD1idSh0LG4pLG49UGkobix0KTt2YXIgdT1udWxsPT1uP246bltHaShnbyh0KSldO3JldHVybiBudWxsPT11P1g6cih1LG4sZSl9ZnVuY3Rpb24geGUobil7cmV0dXJuIHJjKG4pJiZfZShuKT09Qm59ZnVuY3Rpb24gamUobil7cmV0dXJuIHJjKG4pJiZfZShuKT09ZXR9ZnVuY3Rpb24gQWUobil7cmV0dXJuIHJjKG4pJiZfZShuKT09TW59ZnVuY3Rpb24ga2Uobix0LHIsZSx1KXtyZXR1cm4gbj09PXR8fChudWxsPT1ufHxudWxsPT10fHwhcmMobikmJiFyYyh0KT9uIT09biYmdCE9PXQ6T2Uobix0LHIsZSxrZSx1KSl9ZnVuY3Rpb24gT2Uobix0LHIsZSx1LGkpe3ZhciBvPXBoKG4pLGY9cGgodCksYz1vP1RuOmpzKG4pLGE9Zj9Ubjpqcyh0KTtjPWM9PUJuP0duOmMsYT1hPT1Cbj9HbjphO3ZhciBsPWM9PUduLHM9YT09R24saD1jPT1hO2lmKGgmJnZoKG4pKXtpZighdmgodCkpcmV0dXJuITE7bz0hMCxsPSExfWlmKGgmJiFsKXJldHVybiBpfHwoaT1uZXcganIpLG98fHdoKG4pP2FpKG4sdCxyLGUsdSxpKTpsaShuLHQsYyxyLGUsdSxpKTtpZighKHImbG4pKXt2YXIgcD1sJiZwbC5jYWxsKG4sXCJfX3dyYXBwZWRfX1wiKSxfPXMmJnBsLmNhbGwodCxcIl9fd3JhcHBlZF9fXCIpO2lmKHB8fF8pe3ZhciB2PXA/bi52YWx1ZSgpOm4sZz1fP3QudmFsdWUoKTp0O3JldHVybiBpfHwoaT1uZXcganIpLHUodixnLHIsZSxpKX19cmV0dXJuISFoJiYoaXx8KGk9bmV3IGpyKSxzaShuLHQscixlLHUsaSkpfWZ1bmN0aW9uIEllKG4pe3JldHVybiByYyhuKSYmanMobik9PVpufWZ1bmN0aW9uIFJlKG4sdCxyLGUpe3ZhciB1PXIubGVuZ3RoLGk9dSxvPSFlO2lmKG51bGw9PW4pcmV0dXJuIWk7Zm9yKG49dWwobik7dS0tOyl7dmFyIGY9clt1XTtpZihvJiZmWzJdP2ZbMV0hPT1uW2ZbMF1dOiEoZlswXWluIG4pKXJldHVybiExfWZvcig7Kyt1PGk7KXtmPXJbdV07dmFyIGM9ZlswXSxhPW5bY10sbD1mWzFdO2lmKG8mJmZbMl0pe2lmKGE9PT1YJiYhKGMgaW4gbikpcmV0dXJuITF9ZWxzZXt2YXIgcz1uZXcganI7aWYoZSl2YXIgaD1lKGEsbCxjLG4sdCxzKTtpZighKGg9PT1YP2tlKGwsYSxsbnxzbixlLHMpOmgpKXJldHVybiExfX1yZXR1cm4hMH1mdW5jdGlvbiB6ZShuKXtyZXR1cm4hKCF0YyhuKXx8VWkobikpJiYoUWYobik/Ymw6JHQpLnRlc3QoSGkobikpfWZ1bmN0aW9uIEVlKG4pe3JldHVybiByYyhuKSYmX2Uobik9PUpufWZ1bmN0aW9uIFNlKG4pe3JldHVybiByYyhuKSYmanMobik9PVlufWZ1bmN0aW9uIExlKG4pe3JldHVybiByYyhuKSYmbmMobi5sZW5ndGgpJiYhIWhyW19lKG4pXX1mdW5jdGlvbiBXZShuKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP246bnVsbD09bj9JYTpcIm9iamVjdFwiPT10eXBlb2Ygbj9waChuKT9EZShuWzBdLG5bMV0pOiRlKG4pOlVhKG4pfWZ1bmN0aW9uIENlKG4pe2lmKCFCaShuKSlyZXR1cm4gRmwobik7dmFyIHQ9W107Zm9yKHZhciByIGluIHVsKG4pKXBsLmNhbGwobixyKSYmXCJjb25zdHJ1Y3RvclwiIT1yJiZ0LnB1c2gocik7cmV0dXJuIHR9ZnVuY3Rpb24gVWUobil7aWYoIXRjKG4pKXJldHVybiBNaShuKTt2YXIgdD1CaShuKSxyPVtdO2Zvcih2YXIgZSBpbiBuKShcImNvbnN0cnVjdG9yXCIhPWV8fCF0JiZwbC5jYWxsKG4sZSkpJiZyLnB1c2goZSk7cmV0dXJuIHJ9ZnVuY3Rpb24gQmUobix0KXtyZXR1cm4gbjx0fWZ1bmN0aW9uIFRlKG4sdCl7dmFyIHI9LTEsZT1QZihuKT9YYShuLmxlbmd0aCk6W107cmV0dXJuIHNzKG4sZnVuY3Rpb24obix1LGkpe2VbKytyXT10KG4sdSxpKX0pLGV9ZnVuY3Rpb24gJGUobil7dmFyIHQ9Ymkobik7cmV0dXJuIDE9PXQubGVuZ3RoJiZ0WzBdWzJdPyRpKHRbMF1bMF0sdFswXVsxXSk6ZnVuY3Rpb24ocil7cmV0dXJuIHI9PT1ufHxSZShyLG4sdCl9fWZ1bmN0aW9uIERlKG4sdCl7cmV0dXJuIExpKG4pJiZUaSh0KT8kaShHaShuKSx0KTpmdW5jdGlvbihyKXt2YXIgZT1DYyhyLG4pO3JldHVybiBlPT09WCYmZT09PXQ/QmMocixuKTprZSh0LGUsbG58c24pfX1mdW5jdGlvbiBNZShuLHQscixlLHUpe24hPT10JiZwcyh0LGZ1bmN0aW9uKGksbyl7aWYodGMoaSkpdXx8KHU9bmV3IGpyKSxGZShuLHQsbyxyLE1lLGUsdSk7ZWxzZXt2YXIgZj1lP2UobltvXSxpLG8rXCJcIixuLHQsdSk6WDtmPT09WCYmKGY9aSkscXIobixvLGYpfX0sJGMpfWZ1bmN0aW9uIEZlKG4sdCxyLGUsdSxpLG8pe3ZhciBmPW5bcl0sYz10W3JdLGE9by5nZXQoYyk7aWYoYSlyZXR1cm4gdm9pZCBxcihuLHIsYSk7dmFyIGw9aT9pKGYsYyxyK1wiXCIsbix0LG8pOlgscz1sPT09WDtpZihzKXt2YXIgaD1waChjKSxwPSFoJiZ2aChjKSxfPSFoJiYhcCYmd2goYyk7bD1jLGh8fHB8fF8/cGgoZik/bD1mOnFmKGYpP2w9V3UoZik6cD8ocz0hMSxsPW11KGMsITApKTpfPyhzPSExLGw9UnUoYywhMCkpOmw9W106bGMoYyl8fGhoKGMpPyhsPWYsaGgoZik/bD14YyhmKTooIXRjKGYpfHxlJiZRZihmKSkmJihsPU9pKGMpKSk6cz0hMX1zJiYoby5zZXQoYyxsKSx1KGwsYyxlLGksbyksby5kZWxldGUoYykpLHFyKG4scixsKX1mdW5jdGlvbiBOZShuLHQpe3ZhciByPW4ubGVuZ3RoO2lmKHIpcmV0dXJuIHQrPXQ8MD9yOjAsRWkodCxyKT9uW3RdOlh9ZnVuY3Rpb24gUGUobix0LHIpe3ZhciBlPS0xO3JldHVybiB0PWwodC5sZW5ndGg/dDpbSWFdLEUoeWkoKSkpLE8oVGUobixmdW5jdGlvbihuLHIsdSl7cmV0dXJue2NyaXRlcmlhOmwodCxmdW5jdGlvbih0KXtyZXR1cm4gdChuKX0pLGluZGV4OisrZSx2YWx1ZTpufX0pLGZ1bmN0aW9uKG4sdCl7cmV0dXJuIEV1KG4sdCxyKX0pfWZ1bmN0aW9uIHFlKG4sdCl7cmV0dXJuIFplKG4sdCxmdW5jdGlvbih0LHIpe3JldHVybiBCYyhuLHIpfSl9ZnVuY3Rpb24gWmUobix0LHIpe2Zvcih2YXIgZT0tMSx1PXQubGVuZ3RoLGk9e307KytlPHU7KXt2YXIgbz10W2VdLGY9aGUobixvKTtyKGYsbykmJnR1KGksYnUobyxuKSxmKX1yZXR1cm4gaX1mdW5jdGlvbiBLZShuKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGhlKHQsbil9fWZ1bmN0aW9uIFZlKG4sdCxyLGUpe3ZhciB1PWU/dzpiLGk9LTEsbz10Lmxlbmd0aCxmPW47Zm9yKG49PT10JiYodD1XdSh0KSksciYmKGY9bChuLEUocikpKTsrK2k8bzspZm9yKHZhciBjPTAsYT10W2ldLHM9cj9yKGEpOmE7KGM9dShmLHMsYyxlKSk+LTE7KWYhPT1uJiZJbC5jYWxsKGYsYywxKSxJbC5jYWxsKG4sYywxKTtyZXR1cm4gbn1mdW5jdGlvbiBHZShuLHQpe2Zvcih2YXIgcj1uP3QubGVuZ3RoOjAsZT1yLTE7ci0tOyl7dmFyIHU9dFtyXTtpZihyPT1lfHx1IT09aSl7dmFyIGk9dTtFaSh1KT9JbC5jYWxsKG4sdSwxKTpzdShuLHUpfX1yZXR1cm4gbn1mdW5jdGlvbiBIZShuLHQpe3JldHVybiBuK0JsKEtsKCkqKHQtbisxKSl9ZnVuY3Rpb24gSmUobix0LHIsZSl7Zm9yKHZhciB1PS0xLGk9TmwoVWwoKHQtbikvKHJ8fDEpKSwwKSxvPVhhKGkpO2ktLTspb1tlP2k6Kyt1XT1uLG4rPXI7cmV0dXJuIG99ZnVuY3Rpb24gWWUobix0KXt2YXIgcj1cIlwiO2lmKCFufHx0PDF8fHQ+em4pcmV0dXJuIHI7ZG97dCUyJiYocis9biksKHQ9QmwodC8yKSkmJihuKz1uKX13aGlsZSh0KTtyZXR1cm4gcn1mdW5jdGlvbiBRZShuLHQpe3JldHVybiBJcyhOaShuLHQsSWEpLG4rXCJcIil9ZnVuY3Rpb24gWGUobil7cmV0dXJuIEZyKEpjKG4pKX1mdW5jdGlvbiBudShuLHQpe3ZhciByPUpjKG4pO3JldHVybiBWaShyLFFyKHQsMCxyLmxlbmd0aCkpfWZ1bmN0aW9uIHR1KG4sdCxyLGUpe2lmKCF0YyhuKSlyZXR1cm4gbjt0PWJ1KHQsbik7Zm9yKHZhciB1PS0xLGk9dC5sZW5ndGgsbz1pLTEsZj1uO251bGwhPWYmJisrdTxpOyl7dmFyIGM9R2kodFt1XSksYT1yO2lmKHUhPW8pe3ZhciBsPWZbY107YT1lP2UobCxjLGYpOlgsYT09PVgmJihhPXRjKGwpP2w6RWkodFt1KzFdKT9bXTp7fSl9WnIoZixjLGEpLGY9ZltjXX1yZXR1cm4gbn1mdW5jdGlvbiBydShuKXtyZXR1cm4gVmkoSmMobikpfWZ1bmN0aW9uIGV1KG4sdCxyKXt2YXIgZT0tMSx1PW4ubGVuZ3RoO3Q8MCYmKHQ9LXQ+dT8wOnUrdCkscj1yPnU/dTpyLHI8MCYmKHIrPXUpLHU9dD5yPzA6ci10Pj4+MCx0Pj4+PTA7Zm9yKHZhciBpPVhhKHUpOysrZTx1OylpW2VdPW5bZSt0XTtyZXR1cm4gaX1mdW5jdGlvbiB1dShuLHQpe3ZhciByO3JldHVybiBzcyhuLGZ1bmN0aW9uKG4sZSx1KXtyZXR1cm4hKHI9dChuLGUsdSkpfSksISFyfWZ1bmN0aW9uIGl1KG4sdCxyKXt2YXIgZT0wLHU9bnVsbD09bj9lOm4ubGVuZ3RoO2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0JiZ0PT09dCYmdTw9Q24pe2Zvcig7ZTx1Oyl7dmFyIGk9ZSt1Pj4+MSxvPW5baV07bnVsbCE9PW8mJiFwYyhvKSYmKHI/bzw9dDpvPHQpP2U9aSsxOnU9aX1yZXR1cm4gdX1yZXR1cm4gb3Uobix0LElhLHIpfWZ1bmN0aW9uIG91KG4sdCxyLGUpe3Q9cih0KTtmb3IodmFyIHU9MCxpPW51bGw9PW4/MDpuLmxlbmd0aCxvPXQhPT10LGY9bnVsbD09PXQsYz1wYyh0KSxhPXQ9PT1YO3U8aTspe3ZhciBsPUJsKCh1K2kpLzIpLHM9cihuW2xdKSxoPXMhPT1YLHA9bnVsbD09PXMsXz1zPT09cyx2PXBjKHMpO2lmKG8pdmFyIGc9ZXx8XztlbHNlIGc9YT9fJiYoZXx8aCk6Zj9fJiZoJiYoZXx8IXApOmM/XyYmaCYmIXAmJihlfHwhdik6IXAmJiF2JiYoZT9zPD10OnM8dCk7Zz91PWwrMTppPWx9cmV0dXJuIFBsKGksV24pfWZ1bmN0aW9uIGZ1KG4sdCl7Zm9yKHZhciByPS0xLGU9bi5sZW5ndGgsdT0wLGk9W107KytyPGU7KXt2YXIgbz1uW3JdLGY9dD90KG8pOm87aWYoIXJ8fCFOZihmLGMpKXt2YXIgYz1mO2lbdSsrXT0wPT09bz8wOm99fXJldHVybiBpfWZ1bmN0aW9uIGN1KG4pe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBuP246cGMobik/U246K259ZnVuY3Rpb24gYXUobil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4pcmV0dXJuIG47aWYocGgobikpcmV0dXJuIGwobixhdSkrXCJcIjtpZihwYyhuKSlyZXR1cm4gYXM/YXMuY2FsbChuKTpcIlwiO3ZhciB0PW4rXCJcIjtyZXR1cm5cIjBcIj09dCYmMS9uPT0tUm4/XCItMFwiOnR9ZnVuY3Rpb24gbHUobix0LHIpe3ZhciBlPS0xLHU9YyxpPW4ubGVuZ3RoLG89ITAsZj1bXSxsPWY7aWYocilvPSExLHU9YTtlbHNlIGlmKGk+PW5uKXt2YXIgcz10P251bGw6YnMobik7aWYocylyZXR1cm4gcShzKTtvPSExLHU9TCxsPW5ldyB5cn1lbHNlIGw9dD9bXTpmO246Zm9yKDsrK2U8aTspe3ZhciBoPW5bZV0scD10P3QoaCk6aDtpZihoPXJ8fDAhPT1oP2g6MCxvJiZwPT09cCl7Zm9yKHZhciBfPWwubGVuZ3RoO18tLTspaWYobFtfXT09PXApY29udGludWUgbjt0JiZsLnB1c2gocCksZi5wdXNoKGgpfWVsc2UgdShsLHAscil8fChsIT09ZiYmbC5wdXNoKHApLGYucHVzaChoKSl9cmV0dXJuIGZ9ZnVuY3Rpb24gc3Uobix0KXtyZXR1cm4gdD1idSh0LG4pLG51bGw9PShuPVBpKG4sdCkpfHxkZWxldGUgbltHaShnbyh0KSldfWZ1bmN0aW9uIGh1KG4sdCxyLGUpe3JldHVybiB0dShuLHQscihoZShuLHQpKSxlKX1mdW5jdGlvbiBwdShuLHQscixlKXtmb3IodmFyIHU9bi5sZW5ndGgsaT1lP3U6LTE7KGU/aS0tOisraTx1KSYmdChuW2ldLGksbik7KTtyZXR1cm4gcj9ldShuLGU/MDppLGU/aSsxOnUpOmV1KG4sZT9pKzE6MCxlP3U6aSl9ZnVuY3Rpb24gX3Uobix0KXt2YXIgcj1uO3JldHVybiByIGluc3RhbmNlb2YgV3QmJihyPXIudmFsdWUoKSksaCh0LGZ1bmN0aW9uKG4sdCl7cmV0dXJuIHQuZnVuYy5hcHBseSh0LnRoaXNBcmcscyhbbl0sdC5hcmdzKSl9LHIpfWZ1bmN0aW9uIHZ1KG4sdCxyKXt2YXIgZT1uLmxlbmd0aDtpZihlPDIpcmV0dXJuIGU/bHUoblswXSk6W107Zm9yKHZhciB1PS0xLGk9WGEoZSk7Kyt1PGU7KWZvcih2YXIgbz1uW3VdLGY9LTE7KytmPGU7KWYhPXUmJihpW3VdPWVlKGlbdV18fG8sbltmXSx0LHIpKTtyZXR1cm4gbHUoY2UoaSwxKSx0LHIpfWZ1bmN0aW9uIGd1KG4sdCxyKXtmb3IodmFyIGU9LTEsdT1uLmxlbmd0aCxpPXQubGVuZ3RoLG89e307KytlPHU7KXt2YXIgZj1lPGk/dFtlXTpYO3IobyxuW2VdLGYpfXJldHVybiBvfWZ1bmN0aW9uIHl1KG4pe3JldHVybiBxZihuKT9uOltdfWZ1bmN0aW9uIGR1KG4pe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/bjpJYX1mdW5jdGlvbiBidShuLHQpe3JldHVybiBwaChuKT9uOkxpKG4sdCk/W25dOlJzKEFjKG4pKX1mdW5jdGlvbiB3dShuLHQscil7dmFyIGU9bi5sZW5ndGg7cmV0dXJuIHI9cj09PVg/ZTpyLCF0JiZyPj1lP246ZXUobix0LHIpfWZ1bmN0aW9uIG11KG4sdCl7aWYodClyZXR1cm4gbi5zbGljZSgpO3ZhciByPW4ubGVuZ3RoLGU9amw/amwocik6bmV3IG4uY29uc3RydWN0b3Iocik7cmV0dXJuIG4uY29weShlKSxlfWZ1bmN0aW9uIHh1KG4pe3ZhciB0PW5ldyBuLmNvbnN0cnVjdG9yKG4uYnl0ZUxlbmd0aCk7cmV0dXJuIG5ldyB4bCh0KS5zZXQobmV3IHhsKG4pKSx0fWZ1bmN0aW9uIGp1KG4sdCl7dmFyIHI9dD94dShuLmJ1ZmZlcik6bi5idWZmZXI7cmV0dXJuIG5ldyBuLmNvbnN0cnVjdG9yKHIsbi5ieXRlT2Zmc2V0LG4uYnl0ZUxlbmd0aCl9ZnVuY3Rpb24gQXUodCxyLGUpe3JldHVybiBoKHI/ZShGKHQpLGZuKTpGKHQpLG4sbmV3IHQuY29uc3RydWN0b3IpfWZ1bmN0aW9uIGt1KG4pe3ZhciB0PW5ldyBuLmNvbnN0cnVjdG9yKG4uc291cmNlLFV0LmV4ZWMobikpO3JldHVybiB0Lmxhc3RJbmRleD1uLmxhc3RJbmRleCx0fWZ1bmN0aW9uIE91KG4scixlKXtyZXR1cm4gaChyP2UocShuKSxmbik6cShuKSx0LG5ldyBuLmNvbnN0cnVjdG9yKX1mdW5jdGlvbiBJdShuKXtyZXR1cm4gY3M/dWwoY3MuY2FsbChuKSk6e319ZnVuY3Rpb24gUnUobix0KXt2YXIgcj10P3h1KG4uYnVmZmVyKTpuLmJ1ZmZlcjtyZXR1cm4gbmV3IG4uY29uc3RydWN0b3IocixuLmJ5dGVPZmZzZXQsbi5sZW5ndGgpfWZ1bmN0aW9uIHp1KG4sdCl7aWYobiE9PXQpe3ZhciByPW4hPT1YLGU9bnVsbD09PW4sdT1uPT09bixpPXBjKG4pLG89dCE9PVgsZj1udWxsPT09dCxjPXQ9PT10LGE9cGModCk7aWYoIWYmJiFhJiYhaSYmbj50fHxpJiZvJiZjJiYhZiYmIWF8fGUmJm8mJmN8fCFyJiZjfHwhdSlyZXR1cm4gMTtpZighZSYmIWkmJiFhJiZuPHR8fGEmJnImJnUmJiFlJiYhaXx8ZiYmciYmdXx8IW8mJnV8fCFjKXJldHVybi0xfXJldHVybiAwfWZ1bmN0aW9uIEV1KG4sdCxyKXtmb3IodmFyIGU9LTEsdT1uLmNyaXRlcmlhLGk9dC5jcml0ZXJpYSxvPXUubGVuZ3RoLGY9ci5sZW5ndGg7KytlPG87KXt2YXIgYz16dSh1W2VdLGlbZV0pO2lmKGMpe2lmKGU+PWYpcmV0dXJuIGM7cmV0dXJuIGMqKFwiZGVzY1wiPT1yW2VdPy0xOjEpfX1yZXR1cm4gbi5pbmRleC10LmluZGV4fWZ1bmN0aW9uIFN1KG4sdCxyLGUpe2Zvcih2YXIgdT0tMSxpPW4ubGVuZ3RoLG89ci5sZW5ndGgsZj0tMSxjPXQubGVuZ3RoLGE9TmwoaS1vLDApLGw9WGEoYythKSxzPSFlOysrZjxjOylsW2ZdPXRbZl07Zm9yKDsrK3U8bzspKHN8fHU8aSkmJihsW3JbdV1dPW5bdV0pO2Zvcig7YS0tOylsW2YrK109blt1KytdO3JldHVybiBsfWZ1bmN0aW9uIEx1KG4sdCxyLGUpe2Zvcih2YXIgdT0tMSxpPW4ubGVuZ3RoLG89LTEsZj1yLmxlbmd0aCxjPS0xLGE9dC5sZW5ndGgsbD1ObChpLWYsMCkscz1YYShsK2EpLGg9IWU7Kyt1PGw7KXNbdV09blt1XTtmb3IodmFyIHA9dTsrK2M8YTspc1twK2NdPXRbY107Zm9yKDsrK288ZjspKGh8fHU8aSkmJihzW3ArcltvXV09blt1KytdKTtyZXR1cm4gc31mdW5jdGlvbiBXdShuLHQpe3ZhciByPS0xLGU9bi5sZW5ndGg7Zm9yKHR8fCh0PVhhKGUpKTsrK3I8ZTspdFtyXT1uW3JdO3JldHVybiB0fWZ1bmN0aW9uIEN1KG4sdCxyLGUpe3ZhciB1PSFyO3J8fChyPXt9KTtmb3IodmFyIGk9LTEsbz10Lmxlbmd0aDsrK2k8bzspe3ZhciBmPXRbaV0sYz1lP2UocltmXSxuW2ZdLGYscixuKTpYO2M9PT1YJiYoYz1uW2ZdKSx1P0pyKHIsZixjKTpacihyLGYsYyl9cmV0dXJuIHJ9ZnVuY3Rpb24gVXUobix0KXtyZXR1cm4gQ3UobixtcyhuKSx0KX1mdW5jdGlvbiBCdShuLHQpe3JldHVybiBDdShuLHhzKG4pLHQpfWZ1bmN0aW9uIFR1KG4sdCl7cmV0dXJuIGZ1bmN0aW9uKHIsdSl7dmFyIGk9cGgocik/ZTpWcixvPXQ/dCgpOnt9O3JldHVybiBpKHIsbix5aSh1LDIpLG8pfX1mdW5jdGlvbiAkdShuKXtyZXR1cm4gUWUoZnVuY3Rpb24odCxyKXt2YXIgZT0tMSx1PXIubGVuZ3RoLGk9dT4xP3JbdS0xXTpYLG89dT4yP3JbMl06WDtmb3IoaT1uLmxlbmd0aD4zJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBpPyh1LS0saSk6WCxvJiZTaShyWzBdLHJbMV0sbykmJihpPXU8Mz9YOmksdT0xKSx0PXVsKHQpOysrZTx1Oyl7dmFyIGY9cltlXTtmJiZuKHQsZixlLGkpfXJldHVybiB0fSl9ZnVuY3Rpb24gRHUobix0KXtyZXR1cm4gZnVuY3Rpb24ocixlKXtpZihudWxsPT1yKXJldHVybiByO2lmKCFQZihyKSlyZXR1cm4gbihyLGUpO2Zvcih2YXIgdT1yLmxlbmd0aCxpPXQ/dTotMSxvPXVsKHIpOyh0P2ktLTorK2k8dSkmJiExIT09ZShvW2ldLGksbyk7KTtyZXR1cm4gcn19ZnVuY3Rpb24gTXUobil7cmV0dXJuIGZ1bmN0aW9uKHQscixlKXtmb3IodmFyIHU9LTEsaT11bCh0KSxvPWUodCksZj1vLmxlbmd0aDtmLS07KXt2YXIgYz1vW24/ZjorK3VdO2lmKCExPT09cihpW2NdLGMsaSkpYnJlYWt9cmV0dXJuIHR9fWZ1bmN0aW9uIEZ1KG4sdCxyKXtmdW5jdGlvbiBlKCl7cmV0dXJuKHRoaXMmJnRoaXMhPT14ciYmdGhpcyBpbnN0YW5jZW9mIGU/aTpuKS5hcHBseSh1P3I6dGhpcyxhcmd1bWVudHMpfXZhciB1PXQmaG4saT1xdShuKTtyZXR1cm4gZX1mdW5jdGlvbiBOdShuKXtyZXR1cm4gZnVuY3Rpb24odCl7dD1BYyh0KTt2YXIgcj0kKHQpP0godCk6WCxlPXI/clswXTp0LmNoYXJBdCgwKSx1PXI/d3UociwxKS5qb2luKFwiXCIpOnQuc2xpY2UoMSk7cmV0dXJuIGVbbl0oKSt1fX1mdW5jdGlvbiBQdShuKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGgoeGEocmEodCkucmVwbGFjZSh1cixcIlwiKSksbixcIlwiKX19ZnVuY3Rpb24gcXUobil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzO3N3aXRjaCh0Lmxlbmd0aCl7Y2FzZSAwOnJldHVybiBuZXcgbjtjYXNlIDE6cmV0dXJuIG5ldyBuKHRbMF0pO2Nhc2UgMjpyZXR1cm4gbmV3IG4odFswXSx0WzFdKTtjYXNlIDM6cmV0dXJuIG5ldyBuKHRbMF0sdFsxXSx0WzJdKTtjYXNlIDQ6cmV0dXJuIG5ldyBuKHRbMF0sdFsxXSx0WzJdLHRbM10pO2Nhc2UgNTpyZXR1cm4gbmV3IG4odFswXSx0WzFdLHRbMl0sdFszXSx0WzRdKTtjYXNlIDY6cmV0dXJuIG5ldyBuKHRbMF0sdFsxXSx0WzJdLHRbM10sdFs0XSx0WzVdKTtjYXNlIDc6cmV0dXJuIG5ldyBuKHRbMF0sdFsxXSx0WzJdLHRbM10sdFs0XSx0WzVdLHRbNl0pfXZhciByPWxzKG4ucHJvdG90eXBlKSxlPW4uYXBwbHkocix0KTtyZXR1cm4gdGMoZSk/ZTpyfX1mdW5jdGlvbiBadShuLHQsZSl7ZnVuY3Rpb24gdSgpe2Zvcih2YXIgbz1hcmd1bWVudHMubGVuZ3RoLGY9WGEobyksYz1vLGE9Z2kodSk7Yy0tOylmW2NdPWFyZ3VtZW50c1tjXTt2YXIgbD1vPDMmJmZbMF0hPT1hJiZmW28tMV0hPT1hP1tdOlAoZixhKTtyZXR1cm4oby09bC5sZW5ndGgpPGU/cmkobix0LEd1LHUucGxhY2Vob2xkZXIsWCxmLGwsWCxYLGUtbyk6cih0aGlzJiZ0aGlzIT09eHImJnRoaXMgaW5zdGFuY2VvZiB1P2k6bix0aGlzLGYpfXZhciBpPXF1KG4pO3JldHVybiB1fWZ1bmN0aW9uIEt1KG4pe3JldHVybiBmdW5jdGlvbih0LHIsZSl7dmFyIHU9dWwodCk7aWYoIVBmKHQpKXt2YXIgaT15aShyLDMpO3Q9VGModCkscj1mdW5jdGlvbihuKXtyZXR1cm4gaSh1W25dLG4sdSl9fXZhciBvPW4odCxyLGUpO3JldHVybiBvPi0xP3VbaT90W29dOm9dOlh9fWZ1bmN0aW9uIFZ1KG4pe3JldHVybiBoaShmdW5jdGlvbih0KXt2YXIgcj10Lmxlbmd0aCxlPXIsdT1ZLnByb3RvdHlwZS50aHJ1O2ZvcihuJiZ0LnJldmVyc2UoKTtlLS07KXt2YXIgaT10W2VdO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGkpdGhyb3cgbmV3IGZsKHJuKTtpZih1JiYhbyYmXCJ3cmFwcGVyXCI9PXZpKGkpKXZhciBvPW5ldyBZKFtdLCEwKX1mb3IoZT1vP2U6cjsrK2U8cjspe2k9dFtlXTt2YXIgZj12aShpKSxjPVwid3JhcHBlclwiPT1mP3dzKGkpOlg7bz1jJiZDaShjWzBdKSYmY1sxXT09KGJufHZufHlufHduKSYmIWNbNF0ubGVuZ3RoJiYxPT1jWzldP29bdmkoY1swXSldLmFwcGx5KG8sY1szXSk6MT09aS5sZW5ndGgmJkNpKGkpP29bZl0oKTpvLnRocnUoaSl9cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49YXJndW1lbnRzLGU9blswXTtpZihvJiYxPT1uLmxlbmd0aCYmcGgoZSkpcmV0dXJuIG8ucGxhbnQoZSkudmFsdWUoKTtmb3IodmFyIHU9MCxpPXI/dFt1XS5hcHBseSh0aGlzLG4pOmU7Kyt1PHI7KWk9dFt1XS5jYWxsKHRoaXMsaSk7cmV0dXJuIGl9fSl9ZnVuY3Rpb24gR3Uobix0LHIsZSx1LGksbyxmLGMsYSl7ZnVuY3Rpb24gbCgpe2Zvcih2YXIgeT1hcmd1bWVudHMubGVuZ3RoLGQ9WGEoeSksYj15O2ItLTspZFtiXT1hcmd1bWVudHNbYl07aWYoXyl2YXIgdz1naShsKSxtPVUoZCx3KTtpZihlJiYoZD1TdShkLGUsdSxfKSksaSYmKGQ9THUoZCxpLG8sXykpLHktPW0sXyYmeTxhKXt2YXIgeD1QKGQsdyk7cmV0dXJuIHJpKG4sdCxHdSxsLnBsYWNlaG9sZGVyLHIsZCx4LGYsYyxhLXkpfXZhciBqPWg/cjp0aGlzLEE9cD9qW25dOm47cmV0dXJuIHk9ZC5sZW5ndGgsZj9kPXFpKGQsZik6diYmeT4xJiZkLnJldmVyc2UoKSxzJiZjPHkmJihkLmxlbmd0aD1jKSx0aGlzJiZ0aGlzIT09eHImJnRoaXMgaW5zdGFuY2VvZiBsJiYoQT1nfHxxdShBKSksQS5hcHBseShqLGQpfXZhciBzPXQmYm4saD10JmhuLHA9dCZwbixfPXQmKHZufGduKSx2PXQmbW4sZz1wP1g6cXUobik7cmV0dXJuIGx9ZnVuY3Rpb24gSHUobix0KXtyZXR1cm4gZnVuY3Rpb24ocixlKXtyZXR1cm4gd2UocixuLHQoZSkse30pfX1mdW5jdGlvbiBKdShuLHQpe3JldHVybiBmdW5jdGlvbihyLGUpe3ZhciB1O2lmKHI9PT1YJiZlPT09WClyZXR1cm4gdDtpZihyIT09WCYmKHU9ciksZSE9PVgpe2lmKHU9PT1YKXJldHVybiBlO1wic3RyaW5nXCI9PXR5cGVvZiByfHxcInN0cmluZ1wiPT10eXBlb2YgZT8ocj1hdShyKSxlPWF1KGUpKToocj1jdShyKSxlPWN1KGUpKSx1PW4ocixlKX1yZXR1cm4gdX19ZnVuY3Rpb24gWXUobil7cmV0dXJuIGhpKGZ1bmN0aW9uKHQpe3JldHVybiB0PWwodCxFKHlpKCkpKSxRZShmdW5jdGlvbihlKXt2YXIgdT10aGlzO3JldHVybiBuKHQsZnVuY3Rpb24obil7cmV0dXJuIHIobix1LGUpfSl9KX0pfWZ1bmN0aW9uIFF1KG4sdCl7dD10PT09WD9cIiBcIjphdSh0KTt2YXIgcj10Lmxlbmd0aDtpZihyPDIpcmV0dXJuIHI/WWUodCxuKTp0O3ZhciBlPVllKHQsVWwobi9HKHQpKSk7cmV0dXJuICQodCk/d3UoSChlKSwwLG4pLmpvaW4oXCJcIik6ZS5zbGljZSgwLG4pfWZ1bmN0aW9uIFh1KG4sdCxlLHUpe2Z1bmN0aW9uIGkoKXtmb3IodmFyIHQ9LTEsYz1hcmd1bWVudHMubGVuZ3RoLGE9LTEsbD11Lmxlbmd0aCxzPVhhKGwrYyksaD10aGlzJiZ0aGlzIT09eHImJnRoaXMgaW5zdGFuY2VvZiBpP2Y6bjsrK2E8bDspc1thXT11W2FdO2Zvcig7Yy0tOylzW2ErK109YXJndW1lbnRzWysrdF07cmV0dXJuIHIoaCxvP2U6dGhpcyxzKX12YXIgbz10JmhuLGY9cXUobik7cmV0dXJuIGl9ZnVuY3Rpb24gbmkobil7cmV0dXJuIGZ1bmN0aW9uKHQscixlKXtyZXR1cm4gZSYmXCJudW1iZXJcIiE9dHlwZW9mIGUmJlNpKHQscixlKSYmKHI9ZT1YKSx0PWRjKHQpLHI9PT1YPyhyPXQsdD0wKTpyPWRjKHIpLGU9ZT09PVg/dDxyPzE6LTE6ZGMoZSksSmUodCxyLGUsbil9fWZ1bmN0aW9uIHRpKG4pe3JldHVybiBmdW5jdGlvbih0LHIpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0JiZcInN0cmluZ1wiPT10eXBlb2Ygcnx8KHQ9bWModCkscj1tYyhyKSksbih0LHIpfX1mdW5jdGlvbiByaShuLHQscixlLHUsaSxvLGYsYyxhKXt2YXIgbD10JnZuLHM9bD9vOlgsaD1sP1g6byxwPWw/aTpYLF89bD9YOmk7dHw9bD95bjpkbiwodCY9fihsP2RuOnluKSkmX258fCh0Jj1+KGhufHBuKSk7dmFyIHY9W24sdCx1LHAscyxfLGgsZixjLGFdLGc9ci5hcHBseShYLHYpO3JldHVybiBDaShuKSYma3MoZyx2KSxnLnBsYWNlaG9sZGVyPWUsWmkoZyxuLHQpfWZ1bmN0aW9uIGVpKG4pe3ZhciB0PWVsW25dO3JldHVybiBmdW5jdGlvbihuLHIpe2lmKG49bWMobikscj1udWxsPT1yPzA6UGwoYmMociksMjkyKSl7dmFyIGU9KEFjKG4pK1wiZVwiKS5zcGxpdChcImVcIik7cmV0dXJuIGU9KEFjKHQoZVswXStcImVcIisoK2VbMV0rcikpKStcImVcIikuc3BsaXQoXCJlXCIpLCsoZVswXStcImVcIisoK2VbMV0tcikpfXJldHVybiB0KG4pfX1mdW5jdGlvbiB1aShuKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIHI9anModCk7cmV0dXJuIHI9PVpuP0YodCk6cj09WW4/Wih0KTp6KHQsbih0KSl9fWZ1bmN0aW9uIGlpKG4sdCxyLGUsdSxpLG8sZil7dmFyIGM9dCZwbjtpZighYyYmXCJmdW5jdGlvblwiIT10eXBlb2Ygbil0aHJvdyBuZXcgZmwocm4pO3ZhciBhPWU/ZS5sZW5ndGg6MDtpZihhfHwodCY9fih5bnxkbiksZT11PVgpLG89bz09PVg/bzpObChiYyhvKSwwKSxmPWY9PT1YP2Y6YmMoZiksYS09dT91Lmxlbmd0aDowLHQmZG4pe3ZhciBsPWUscz11O2U9dT1YfXZhciBoPWM/WDp3cyhuKSxwPVtuLHQscixlLHUsbCxzLGksbyxmXTtpZihoJiZEaShwLGgpLG49cFswXSx0PXBbMV0scj1wWzJdLGU9cFszXSx1PXBbNF0sZj1wWzldPXBbOV09PT1YP2M/MDpuLmxlbmd0aDpObChwWzldLWEsMCksIWYmJnQmKHZufGduKSYmKHQmPX4odm58Z24pKSx0JiZ0IT1obilfPXQ9PXZufHx0PT1nbj9adShuLHQsZik6dCE9eW4mJnQhPShobnx5bil8fHUubGVuZ3RoP0d1LmFwcGx5KFgscCk6WHUobix0LHIsZSk7ZWxzZSB2YXIgXz1GdShuLHQscik7cmV0dXJuIFppKChoP3ZzOmtzKShfLHApLG4sdCl9ZnVuY3Rpb24gb2kobix0LHIsZSl7cmV0dXJuIG49PT1YfHxOZihuLGxsW3JdKSYmIXBsLmNhbGwoZSxyKT90Om59ZnVuY3Rpb24gZmkobix0LHIsZSx1LGkpe3JldHVybiB0YyhuKSYmdGModCkmJihpLnNldCh0LG4pLE1lKG4sdCxYLGZpLGkpLGkuZGVsZXRlKHQpKSxufWZ1bmN0aW9uIGNpKG4pe3JldHVybiBsYyhuKT9YOm59ZnVuY3Rpb24gYWkobix0LHIsZSx1LGkpe3ZhciBvPXImbG4sZj1uLmxlbmd0aCxjPXQubGVuZ3RoO2lmKGYhPWMmJiEobyYmYz5mKSlyZXR1cm4hMTt2YXIgYT1pLmdldChuKTtpZihhJiZpLmdldCh0KSlyZXR1cm4gYT09dDt2YXIgbD0tMSxzPSEwLGg9ciZzbj9uZXcgeXI6WDtmb3IoaS5zZXQobix0KSxpLnNldCh0LG4pOysrbDxmOyl7dmFyIHA9bltsXSx2PXRbbF07aWYoZSl2YXIgZz1vP2UodixwLGwsdCxuLGkpOmUocCx2LGwsbix0LGkpO2lmKGchPT1YKXtpZihnKWNvbnRpbnVlO3M9ITE7YnJlYWt9aWYoaCl7aWYoIV8odCxmdW5jdGlvbihuLHQpe2lmKCFMKGgsdCkmJihwPT09bnx8dShwLG4scixlLGkpKSlyZXR1cm4gaC5wdXNoKHQpfSkpe3M9ITE7YnJlYWt9fWVsc2UgaWYocCE9PXYmJiF1KHAsdixyLGUsaSkpe3M9ITE7YnJlYWt9fXJldHVybiBpLmRlbGV0ZShuKSxpLmRlbGV0ZSh0KSxzfWZ1bmN0aW9uIGxpKG4sdCxyLGUsdSxpLG8pe3N3aXRjaChyKXtjYXNlIHV0OmlmKG4uYnl0ZUxlbmd0aCE9dC5ieXRlTGVuZ3RofHxuLmJ5dGVPZmZzZXQhPXQuYnl0ZU9mZnNldClyZXR1cm4hMTtuPW4uYnVmZmVyLHQ9dC5idWZmZXI7Y2FzZSBldDpyZXR1cm4hKG4uYnl0ZUxlbmd0aCE9dC5ieXRlTGVuZ3RofHwhaShuZXcgeGwobiksbmV3IHhsKHQpKSk7Y2FzZSBEbjpjYXNlIE1uOmNhc2UgS246cmV0dXJuIE5mKCtuLCt0KTtjYXNlIE5uOnJldHVybiBuLm5hbWU9PXQubmFtZSYmbi5tZXNzYWdlPT10Lm1lc3NhZ2U7Y2FzZSBKbjpjYXNlIFFuOnJldHVybiBuPT10K1wiXCI7Y2FzZSBabjp2YXIgZj1GO2Nhc2UgWW46dmFyIGM9ZSZsbjtpZihmfHwoZj1xKSxuLnNpemUhPXQuc2l6ZSYmIWMpcmV0dXJuITE7dmFyIGE9by5nZXQobik7aWYoYSlyZXR1cm4gYT09dDtlfD1zbixvLnNldChuLHQpO3ZhciBsPWFpKGYobiksZih0KSxlLHUsaSxvKTtyZXR1cm4gby5kZWxldGUobiksbDtjYXNlIFhuOmlmKGNzKXJldHVybiBjcy5jYWxsKG4pPT1jcy5jYWxsKHQpfXJldHVybiExfWZ1bmN0aW9uIHNpKG4sdCxyLGUsdSxpKXt2YXIgbz1yJmxuLGY9cGkobiksYz1mLmxlbmd0aDtpZihjIT1waSh0KS5sZW5ndGgmJiFvKXJldHVybiExO2Zvcih2YXIgYT1jO2EtLTspe3ZhciBsPWZbYV07aWYoIShvP2wgaW4gdDpwbC5jYWxsKHQsbCkpKXJldHVybiExfXZhciBzPWkuZ2V0KG4pO2lmKHMmJmkuZ2V0KHQpKXJldHVybiBzPT10O3ZhciBoPSEwO2kuc2V0KG4sdCksaS5zZXQodCxuKTtmb3IodmFyIHA9bzsrK2E8Yzspe2w9ZlthXTt2YXIgXz1uW2xdLHY9dFtsXTtpZihlKXZhciBnPW8/ZSh2LF8sbCx0LG4saSk6ZShfLHYsbCxuLHQsaSk7aWYoIShnPT09WD9fPT09dnx8dShfLHYscixlLGkpOmcpKXtoPSExO2JyZWFrfXB8fChwPVwiY29uc3RydWN0b3JcIj09bCl9aWYoaCYmIXApe3ZhciB5PW4uY29uc3RydWN0b3IsZD10LmNvbnN0cnVjdG9yO3khPWQmJlwiY29uc3RydWN0b3JcImluIG4mJlwiY29uc3RydWN0b3JcImluIHQmJiEoXCJmdW5jdGlvblwiPT10eXBlb2YgeSYmeSBpbnN0YW5jZW9mIHkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGQmJmQgaW5zdGFuY2VvZiBkKSYmKGg9ITEpfXJldHVybiBpLmRlbGV0ZShuKSxpLmRlbGV0ZSh0KSxofWZ1bmN0aW9uIGhpKG4pe3JldHVybiBJcyhOaShuLFgsY28pLG4rXCJcIil9ZnVuY3Rpb24gcGkobil7cmV0dXJuIHBlKG4sVGMsbXMpfWZ1bmN0aW9uIF9pKG4pe3JldHVybiBwZShuLCRjLHhzKX1mdW5jdGlvbiB2aShuKXtcbmZvcih2YXIgdD1uLm5hbWUrXCJcIixyPXRzW3RdLGU9cGwuY2FsbCh0cyx0KT9yLmxlbmd0aDowO2UtLTspe3ZhciB1PXJbZV0saT11LmZ1bmM7aWYobnVsbD09aXx8aT09bilyZXR1cm4gdS5uYW1lfXJldHVybiB0fWZ1bmN0aW9uIGdpKG4pe3JldHVybihwbC5jYWxsKEssXCJwbGFjZWhvbGRlclwiKT9LOm4pLnBsYWNlaG9sZGVyfWZ1bmN0aW9uIHlpKCl7dmFyIG49Sy5pdGVyYXRlZXx8UmE7cmV0dXJuIG49bj09PVJhP1dlOm4sYXJndW1lbnRzLmxlbmd0aD9uKGFyZ3VtZW50c1swXSxhcmd1bWVudHNbMV0pOm59ZnVuY3Rpb24gZGkobix0KXt2YXIgcj1uLl9fZGF0YV9fO3JldHVybiBXaSh0KT9yW1wic3RyaW5nXCI9PXR5cGVvZiB0P1wic3RyaW5nXCI6XCJoYXNoXCJdOnIubWFwfWZ1bmN0aW9uIGJpKG4pe2Zvcih2YXIgdD1UYyhuKSxyPXQubGVuZ3RoO3ItLTspe3ZhciBlPXRbcl0sdT1uW2VdO3Rbcl09W2UsdSxUaSh1KV19cmV0dXJuIHR9ZnVuY3Rpb24gd2kobix0KXt2YXIgcj1UKG4sdCk7cmV0dXJuIHplKHIpP3I6WH1mdW5jdGlvbiBtaShuKXt2YXIgdD1wbC5jYWxsKG4sRWwpLHI9bltFbF07dHJ5e25bRWxdPVh9Y2F0Y2gobil7fXZhciBlPWdsLmNhbGwobik7cmV0dXJuIHQ/bltFbF09cjpkZWxldGUgbltFbF0sZX1mdW5jdGlvbiB4aShuLHQscil7Zm9yKHZhciBlPS0xLHU9ci5sZW5ndGg7KytlPHU7KXt2YXIgaT1yW2VdLG89aS5zaXplO3N3aXRjaChpLnR5cGUpe2Nhc2VcImRyb3BcIjpuKz1vO2JyZWFrO2Nhc2VcImRyb3BSaWdodFwiOnQtPW87YnJlYWs7Y2FzZVwidGFrZVwiOnQ9UGwodCxuK28pO2JyZWFrO2Nhc2VcInRha2VSaWdodFwiOm49Tmwobix0LW8pfX1yZXR1cm57c3RhcnQ6bixlbmQ6dH19ZnVuY3Rpb24gamkobil7dmFyIHQ9bi5tYXRjaChTdCk7cmV0dXJuIHQ/dFsxXS5zcGxpdChMdCk6W119ZnVuY3Rpb24gQWkobix0LHIpe3Q9YnUodCxuKTtmb3IodmFyIGU9LTEsdT10Lmxlbmd0aCxpPSExOysrZTx1Oyl7dmFyIG89R2kodFtlXSk7aWYoIShpPW51bGwhPW4mJnIobixvKSkpYnJlYWs7bj1uW29dfXJldHVybiBpfHwrK2UhPXU/aTohISh1PW51bGw9PW4/MDpuLmxlbmd0aCkmJm5jKHUpJiZFaShvLHUpJiYocGgobil8fGhoKG4pKX1mdW5jdGlvbiBraShuKXt2YXIgdD1uLmxlbmd0aCxyPW4uY29uc3RydWN0b3IodCk7cmV0dXJuIHQmJlwic3RyaW5nXCI9PXR5cGVvZiBuWzBdJiZwbC5jYWxsKG4sXCJpbmRleFwiKSYmKHIuaW5kZXg9bi5pbmRleCxyLmlucHV0PW4uaW5wdXQpLHJ9ZnVuY3Rpb24gT2kobil7cmV0dXJuXCJmdW5jdGlvblwiIT10eXBlb2Ygbi5jb25zdHJ1Y3Rvcnx8Qmkobik/e306bHMoQWwobikpfWZ1bmN0aW9uIElpKG4sdCxyLGUpe3ZhciB1PW4uY29uc3RydWN0b3I7c3dpdGNoKHQpe2Nhc2UgZXQ6cmV0dXJuIHh1KG4pO2Nhc2UgRG46Y2FzZSBNbjpyZXR1cm4gbmV3IHUoK24pO2Nhc2UgdXQ6cmV0dXJuIGp1KG4sZSk7Y2FzZSBpdDpjYXNlIG90OmNhc2UgZnQ6Y2FzZSBjdDpjYXNlIGF0OmNhc2UgbHQ6Y2FzZSBzdDpjYXNlIGh0OmNhc2UgcHQ6cmV0dXJuIFJ1KG4sZSk7Y2FzZSBabjpyZXR1cm4gQXUobixlLHIpO2Nhc2UgS246Y2FzZSBRbjpyZXR1cm4gbmV3IHUobik7Y2FzZSBKbjpyZXR1cm4ga3Uobik7Y2FzZSBZbjpyZXR1cm4gT3UobixlLHIpO2Nhc2UgWG46cmV0dXJuIEl1KG4pfX1mdW5jdGlvbiBSaShuLHQpe3ZhciByPXQubGVuZ3RoO2lmKCFyKXJldHVybiBuO3ZhciBlPXItMTtyZXR1cm4gdFtlXT0ocj4xP1wiJiBcIjpcIlwiKSt0W2VdLHQ9dC5qb2luKHI+Mj9cIiwgXCI6XCIgXCIpLG4ucmVwbGFjZShFdCxcIntcXG4vKiBbd3JhcHBlZCB3aXRoIFwiK3QrXCJdICovXFxuXCIpfWZ1bmN0aW9uIHppKG4pe3JldHVybiBwaChuKXx8aGgobil8fCEhKFJsJiZuJiZuW1JsXSl9ZnVuY3Rpb24gRWkobix0KXtyZXR1cm4hISh0PW51bGw9PXQ/em46dCkmJihcIm51bWJlclwiPT10eXBlb2Ygbnx8TXQudGVzdChuKSkmJm4+LTEmJm4lMT09MCYmbjx0fWZ1bmN0aW9uIFNpKG4sdCxyKXtpZighdGMocikpcmV0dXJuITE7dmFyIGU9dHlwZW9mIHQ7cmV0dXJuISEoXCJudW1iZXJcIj09ZT9QZihyKSYmRWkodCxyLmxlbmd0aCk6XCJzdHJpbmdcIj09ZSYmdCBpbiByKSYmTmYoclt0XSxuKX1mdW5jdGlvbiBMaShuLHQpe2lmKHBoKG4pKXJldHVybiExO3ZhciByPXR5cGVvZiBuO3JldHVybiEoXCJudW1iZXJcIiE9ciYmXCJzeW1ib2xcIiE9ciYmXCJib29sZWFuXCIhPXImJm51bGwhPW4mJiFwYyhuKSl8fChqdC50ZXN0KG4pfHwheHQudGVzdChuKXx8bnVsbCE9dCYmbiBpbiB1bCh0KSl9ZnVuY3Rpb24gV2kobil7dmFyIHQ9dHlwZW9mIG47cmV0dXJuXCJzdHJpbmdcIj09dHx8XCJudW1iZXJcIj09dHx8XCJzeW1ib2xcIj09dHx8XCJib29sZWFuXCI9PXQ/XCJfX3Byb3RvX19cIiE9PW46bnVsbD09PW59ZnVuY3Rpb24gQ2kobil7dmFyIHQ9dmkobikscj1LW3RdO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHJ8fCEodCBpbiBXdC5wcm90b3R5cGUpKXJldHVybiExO2lmKG49PT1yKXJldHVybiEwO3ZhciBlPXdzKHIpO3JldHVybiEhZSYmbj09PWVbMF19ZnVuY3Rpb24gVWkobil7cmV0dXJuISF2bCYmdmwgaW4gbn1mdW5jdGlvbiBCaShuKXt2YXIgdD1uJiZuLmNvbnN0cnVjdG9yO3JldHVybiBuPT09KFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnQucHJvdG90eXBlfHxsbCl9ZnVuY3Rpb24gVGkobil7cmV0dXJuIG49PT1uJiYhdGMobil9ZnVuY3Rpb24gJGkobix0KXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIG51bGwhPXImJihyW25dPT09dCYmKHQhPT1YfHxuIGluIHVsKHIpKSl9fWZ1bmN0aW9uIERpKG4sdCl7dmFyIHI9blsxXSxlPXRbMV0sdT1yfGUsaT11PChobnxwbnxibiksbz1lPT1ibiYmcj09dm58fGU9PWJuJiZyPT13biYmbls3XS5sZW5ndGg8PXRbOF18fGU9PShibnx3bikmJnRbN10ubGVuZ3RoPD10WzhdJiZyPT12bjtpZighaSYmIW8pcmV0dXJuIG47ZSZobiYmKG5bMl09dFsyXSx1fD1yJmhuPzA6X24pO3ZhciBmPXRbM107aWYoZil7dmFyIGM9blszXTtuWzNdPWM/U3UoYyxmLHRbNF0pOmYsbls0XT1jP1AoblszXSxvbik6dFs0XX1yZXR1cm4gZj10WzVdLGYmJihjPW5bNV0sbls1XT1jP0x1KGMsZix0WzZdKTpmLG5bNl09Yz9QKG5bNV0sb24pOnRbNl0pLGY9dFs3XSxmJiYobls3XT1mKSxlJmJuJiYobls4XT1udWxsPT1uWzhdP3RbOF06UGwobls4XSx0WzhdKSksbnVsbD09bls5XSYmKG5bOV09dFs5XSksblswXT10WzBdLG5bMV09dSxufWZ1bmN0aW9uIE1pKG4pe3ZhciB0PVtdO2lmKG51bGwhPW4pZm9yKHZhciByIGluIHVsKG4pKXQucHVzaChyKTtyZXR1cm4gdH1mdW5jdGlvbiBGaShuKXtyZXR1cm4gZ2wuY2FsbChuKX1mdW5jdGlvbiBOaShuLHQsZSl7cmV0dXJuIHQ9TmwodD09PVg/bi5sZW5ndGgtMTp0LDApLGZ1bmN0aW9uKCl7Zm9yKHZhciB1PWFyZ3VtZW50cyxpPS0xLG89TmwodS5sZW5ndGgtdCwwKSxmPVhhKG8pOysraTxvOylmW2ldPXVbdCtpXTtpPS0xO2Zvcih2YXIgYz1YYSh0KzEpOysraTx0OyljW2ldPXVbaV07cmV0dXJuIGNbdF09ZShmKSxyKG4sdGhpcyxjKX19ZnVuY3Rpb24gUGkobix0KXtyZXR1cm4gdC5sZW5ndGg8Mj9uOmhlKG4sZXUodCwwLC0xKSl9ZnVuY3Rpb24gcWkobix0KXtmb3IodmFyIHI9bi5sZW5ndGgsZT1QbCh0Lmxlbmd0aCxyKSx1PVd1KG4pO2UtLTspe3ZhciBpPXRbZV07bltlXT1FaShpLHIpP3VbaV06WH1yZXR1cm4gbn1mdW5jdGlvbiBaaShuLHQscil7dmFyIGU9dCtcIlwiO3JldHVybiBJcyhuLFJpKGUsSmkoamkoZSkscikpKX1mdW5jdGlvbiBLaShuKXt2YXIgdD0wLHI9MDtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT1xbCgpLHU9a24tKGUtcik7aWYocj1lLHU+MCl7aWYoKyt0Pj1BbilyZXR1cm4gYXJndW1lbnRzWzBdfWVsc2UgdD0wO3JldHVybiBuLmFwcGx5KFgsYXJndW1lbnRzKX19ZnVuY3Rpb24gVmkobix0KXt2YXIgcj0tMSxlPW4ubGVuZ3RoLHU9ZS0xO2Zvcih0PXQ9PT1YP2U6dDsrK3I8dDspe3ZhciBpPUhlKHIsdSksbz1uW2ldO25baV09bltyXSxuW3JdPW99cmV0dXJuIG4ubGVuZ3RoPXQsbn1mdW5jdGlvbiBHaShuKXtpZihcInN0cmluZ1wiPT10eXBlb2Ygbnx8cGMobikpcmV0dXJuIG47dmFyIHQ9bitcIlwiO3JldHVyblwiMFwiPT10JiYxL249PS1Sbj9cIi0wXCI6dH1mdW5jdGlvbiBIaShuKXtpZihudWxsIT1uKXt0cnl7cmV0dXJuIGhsLmNhbGwobil9Y2F0Y2gobil7fXRyeXtyZXR1cm4gbitcIlwifWNhdGNoKG4pe319cmV0dXJuXCJcIn1mdW5jdGlvbiBKaShuLHQpe3JldHVybiB1KFVuLGZ1bmN0aW9uKHIpe3ZhciBlPVwiXy5cIityWzBdO3QmclsxXSYmIWMobixlKSYmbi5wdXNoKGUpfSksbi5zb3J0KCl9ZnVuY3Rpb24gWWkobil7aWYobiBpbnN0YW5jZW9mIFd0KXJldHVybiBuLmNsb25lKCk7dmFyIHQ9bmV3IFkobi5fX3dyYXBwZWRfXyxuLl9fY2hhaW5fXyk7cmV0dXJuIHQuX19hY3Rpb25zX189V3Uobi5fX2FjdGlvbnNfXyksdC5fX2luZGV4X189bi5fX2luZGV4X18sdC5fX3ZhbHVlc19fPW4uX192YWx1ZXNfXyx0fWZ1bmN0aW9uIFFpKG4sdCxyKXt0PShyP1NpKG4sdCxyKTp0PT09WCk/MTpObChiYyh0KSwwKTt2YXIgZT1udWxsPT1uPzA6bi5sZW5ndGg7aWYoIWV8fHQ8MSlyZXR1cm5bXTtmb3IodmFyIHU9MCxpPTAsbz1YYShVbChlL3QpKTt1PGU7KW9baSsrXT1ldShuLHUsdSs9dCk7cmV0dXJuIG99ZnVuY3Rpb24gWGkobil7Zm9yKHZhciB0PS0xLHI9bnVsbD09bj8wOm4ubGVuZ3RoLGU9MCx1PVtdOysrdDxyOyl7dmFyIGk9blt0XTtpJiYodVtlKytdPWkpfXJldHVybiB1fWZ1bmN0aW9uIG5vKCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aDtpZighbilyZXR1cm5bXTtmb3IodmFyIHQ9WGEobi0xKSxyPWFyZ3VtZW50c1swXSxlPW47ZS0tOyl0W2UtMV09YXJndW1lbnRzW2VdO3JldHVybiBzKHBoKHIpP1d1KHIpOltyXSxjZSh0LDEpKX1mdW5jdGlvbiB0byhuLHQscil7dmFyIGU9bnVsbD09bj8wOm4ubGVuZ3RoO3JldHVybiBlPyh0PXJ8fHQ9PT1YPzE6YmModCksZXUobix0PDA/MDp0LGUpKTpbXX1mdW5jdGlvbiBybyhuLHQscil7dmFyIGU9bnVsbD09bj8wOm4ubGVuZ3RoO3JldHVybiBlPyh0PXJ8fHQ9PT1YPzE6YmModCksdD1lLXQsZXUobiwwLHQ8MD8wOnQpKTpbXX1mdW5jdGlvbiBlbyhuLHQpe3JldHVybiBuJiZuLmxlbmd0aD9wdShuLHlpKHQsMyksITAsITApOltdfWZ1bmN0aW9uIHVvKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoP3B1KG4seWkodCwzKSwhMCk6W119ZnVuY3Rpb24gaW8obix0LHIsZSl7dmFyIHU9bnVsbD09bj8wOm4ubGVuZ3RoO3JldHVybiB1PyhyJiZcIm51bWJlclwiIT10eXBlb2YgciYmU2kobix0LHIpJiYocj0wLGU9dSksb2Uobix0LHIsZSkpOltdfWZ1bmN0aW9uIG9vKG4sdCxyKXt2YXIgZT1udWxsPT1uPzA6bi5sZW5ndGg7aWYoIWUpcmV0dXJuLTE7dmFyIHU9bnVsbD09cj8wOmJjKHIpO3JldHVybiB1PDAmJih1PU5sKGUrdSwwKSksZChuLHlpKHQsMyksdSl9ZnVuY3Rpb24gZm8obix0LHIpe3ZhciBlPW51bGw9PW4/MDpuLmxlbmd0aDtpZighZSlyZXR1cm4tMTt2YXIgdT1lLTE7cmV0dXJuIHIhPT1YJiYodT1iYyhyKSx1PXI8MD9ObChlK3UsMCk6UGwodSxlLTEpKSxkKG4seWkodCwzKSx1LCEwKX1mdW5jdGlvbiBjbyhuKXtyZXR1cm4obnVsbD09bj8wOm4ubGVuZ3RoKT9jZShuLDEpOltdfWZ1bmN0aW9uIGFvKG4pe3JldHVybihudWxsPT1uPzA6bi5sZW5ndGgpP2NlKG4sUm4pOltdfWZ1bmN0aW9uIGxvKG4sdCl7cmV0dXJuKG51bGw9PW4/MDpuLmxlbmd0aCk/KHQ9dD09PVg/MTpiYyh0KSxjZShuLHQpKTpbXX1mdW5jdGlvbiBzbyhuKXtmb3IodmFyIHQ9LTEscj1udWxsPT1uPzA6bi5sZW5ndGgsZT17fTsrK3Q8cjspe3ZhciB1PW5bdF07ZVt1WzBdXT11WzFdfXJldHVybiBlfWZ1bmN0aW9uIGhvKG4pe3JldHVybiBuJiZuLmxlbmd0aD9uWzBdOlh9ZnVuY3Rpb24gcG8obix0LHIpe3ZhciBlPW51bGw9PW4/MDpuLmxlbmd0aDtpZighZSlyZXR1cm4tMTt2YXIgdT1udWxsPT1yPzA6YmMocik7cmV0dXJuIHU8MCYmKHU9TmwoZSt1LDApKSxiKG4sdCx1KX1mdW5jdGlvbiBfbyhuKXtyZXR1cm4obnVsbD09bj8wOm4ubGVuZ3RoKT9ldShuLDAsLTEpOltdfWZ1bmN0aW9uIHZvKG4sdCl7cmV0dXJuIG51bGw9PW4/XCJcIjpNbC5jYWxsKG4sdCl9ZnVuY3Rpb24gZ28obil7dmFyIHQ9bnVsbD09bj8wOm4ubGVuZ3RoO3JldHVybiB0P25bdC0xXTpYfWZ1bmN0aW9uIHlvKG4sdCxyKXt2YXIgZT1udWxsPT1uPzA6bi5sZW5ndGg7aWYoIWUpcmV0dXJuLTE7dmFyIHU9ZTtyZXR1cm4gciE9PVgmJih1PWJjKHIpLHU9dTwwP05sKGUrdSwwKTpQbCh1LGUtMSkpLHQ9PT10P1Yobix0LHUpOmQobixtLHUsITApfWZ1bmN0aW9uIGJvKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoP05lKG4sYmModCkpOlh9ZnVuY3Rpb24gd28obix0KXtyZXR1cm4gbiYmbi5sZW5ndGgmJnQmJnQubGVuZ3RoP1ZlKG4sdCk6bn1mdW5jdGlvbiBtbyhuLHQscil7cmV0dXJuIG4mJm4ubGVuZ3RoJiZ0JiZ0Lmxlbmd0aD9WZShuLHQseWkociwyKSk6bn1mdW5jdGlvbiB4byhuLHQscil7cmV0dXJuIG4mJm4ubGVuZ3RoJiZ0JiZ0Lmxlbmd0aD9WZShuLHQsWCxyKTpufWZ1bmN0aW9uIGpvKG4sdCl7dmFyIHI9W107aWYoIW58fCFuLmxlbmd0aClyZXR1cm4gcjt2YXIgZT0tMSx1PVtdLGk9bi5sZW5ndGg7Zm9yKHQ9eWkodCwzKTsrK2U8aTspe3ZhciBvPW5bZV07dChvLGUsbikmJihyLnB1c2gobyksdS5wdXNoKGUpKX1yZXR1cm4gR2Uobix1KSxyfWZ1bmN0aW9uIEFvKG4pe3JldHVybiBudWxsPT1uP246VmwuY2FsbChuKX1mdW5jdGlvbiBrbyhuLHQscil7dmFyIGU9bnVsbD09bj8wOm4ubGVuZ3RoO3JldHVybiBlPyhyJiZcIm51bWJlclwiIT10eXBlb2YgciYmU2kobix0LHIpPyh0PTAscj1lKToodD1udWxsPT10PzA6YmModCkscj1yPT09WD9lOmJjKHIpKSxldShuLHQscikpOltdfWZ1bmN0aW9uIE9vKG4sdCl7cmV0dXJuIGl1KG4sdCl9ZnVuY3Rpb24gSW8obix0LHIpe3JldHVybiBvdShuLHQseWkociwyKSl9ZnVuY3Rpb24gUm8obix0KXt2YXIgcj1udWxsPT1uPzA6bi5sZW5ndGg7aWYocil7dmFyIGU9aXUobix0KTtpZihlPHImJk5mKG5bZV0sdCkpcmV0dXJuIGV9cmV0dXJuLTF9ZnVuY3Rpb24gem8obix0KXtyZXR1cm4gaXUobix0LCEwKX1mdW5jdGlvbiBFbyhuLHQscil7cmV0dXJuIG91KG4sdCx5aShyLDIpLCEwKX1mdW5jdGlvbiBTbyhuLHQpe2lmKG51bGw9PW4/MDpuLmxlbmd0aCl7dmFyIHI9aXUobix0LCEwKS0xO2lmKE5mKG5bcl0sdCkpcmV0dXJuIHJ9cmV0dXJuLTF9ZnVuY3Rpb24gTG8obil7cmV0dXJuIG4mJm4ubGVuZ3RoP2Z1KG4pOltdfWZ1bmN0aW9uIFdvKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoP2Z1KG4seWkodCwyKSk6W119ZnVuY3Rpb24gQ28obil7dmFyIHQ9bnVsbD09bj8wOm4ubGVuZ3RoO3JldHVybiB0P2V1KG4sMSx0KTpbXX1mdW5jdGlvbiBVbyhuLHQscil7cmV0dXJuIG4mJm4ubGVuZ3RoPyh0PXJ8fHQ9PT1YPzE6YmModCksZXUobiwwLHQ8MD8wOnQpKTpbXX1mdW5jdGlvbiBCbyhuLHQscil7dmFyIGU9bnVsbD09bj8wOm4ubGVuZ3RoO3JldHVybiBlPyh0PXJ8fHQ9PT1YPzE6YmModCksdD1lLXQsZXUobix0PDA/MDp0LGUpKTpbXX1mdW5jdGlvbiBUbyhuLHQpe3JldHVybiBuJiZuLmxlbmd0aD9wdShuLHlpKHQsMyksITEsITApOltdfWZ1bmN0aW9uICRvKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoP3B1KG4seWkodCwzKSk6W119ZnVuY3Rpb24gRG8obil7cmV0dXJuIG4mJm4ubGVuZ3RoP2x1KG4pOltdfWZ1bmN0aW9uIE1vKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoP2x1KG4seWkodCwyKSk6W119ZnVuY3Rpb24gRm8obix0KXtyZXR1cm4gdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6WCxuJiZuLmxlbmd0aD9sdShuLFgsdCk6W119ZnVuY3Rpb24gTm8obil7aWYoIW58fCFuLmxlbmd0aClyZXR1cm5bXTt2YXIgdD0wO3JldHVybiBuPWYobixmdW5jdGlvbihuKXtpZihxZihuKSlyZXR1cm4gdD1ObChuLmxlbmd0aCx0KSwhMH0pLFIodCxmdW5jdGlvbih0KXtyZXR1cm4gbChuLGoodCkpfSl9ZnVuY3Rpb24gUG8obix0KXtpZighbnx8IW4ubGVuZ3RoKXJldHVybltdO3ZhciBlPU5vKG4pO3JldHVybiBudWxsPT10P2U6bChlLGZ1bmN0aW9uKG4pe3JldHVybiByKHQsWCxuKX0pfWZ1bmN0aW9uIHFvKG4sdCl7cmV0dXJuIGd1KG58fFtdLHR8fFtdLFpyKX1mdW5jdGlvbiBabyhuLHQpe3JldHVybiBndShufHxbXSx0fHxbXSx0dSl9ZnVuY3Rpb24gS28obil7dmFyIHQ9SyhuKTtyZXR1cm4gdC5fX2NoYWluX189ITAsdH1mdW5jdGlvbiBWbyhuLHQpe3JldHVybiB0KG4pLG59ZnVuY3Rpb24gR28obix0KXtyZXR1cm4gdChuKX1mdW5jdGlvbiBIbygpe3JldHVybiBLbyh0aGlzKX1mdW5jdGlvbiBKbygpe3JldHVybiBuZXcgWSh0aGlzLnZhbHVlKCksdGhpcy5fX2NoYWluX18pfWZ1bmN0aW9uIFlvKCl7dGhpcy5fX3ZhbHVlc19fPT09WCYmKHRoaXMuX192YWx1ZXNfXz15Yyh0aGlzLnZhbHVlKCkpKTt2YXIgbj10aGlzLl9faW5kZXhfXz49dGhpcy5fX3ZhbHVlc19fLmxlbmd0aDtyZXR1cm57ZG9uZTpuLHZhbHVlOm4/WDp0aGlzLl9fdmFsdWVzX19bdGhpcy5fX2luZGV4X18rK119fWZ1bmN0aW9uIFFvKCl7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gWG8obil7Zm9yKHZhciB0LHI9dGhpcztyIGluc3RhbmNlb2YgSjspe3ZhciBlPVlpKHIpO2UuX19pbmRleF9fPTAsZS5fX3ZhbHVlc19fPVgsdD91Ll9fd3JhcHBlZF9fPWU6dD1lO3ZhciB1PWU7cj1yLl9fd3JhcHBlZF9ffXJldHVybiB1Ll9fd3JhcHBlZF9fPW4sdH1mdW5jdGlvbiBuZigpe3ZhciBuPXRoaXMuX193cmFwcGVkX187aWYobiBpbnN0YW5jZW9mIFd0KXt2YXIgdD1uO3JldHVybiB0aGlzLl9fYWN0aW9uc19fLmxlbmd0aCYmKHQ9bmV3IFd0KHRoaXMpKSx0PXQucmV2ZXJzZSgpLHQuX19hY3Rpb25zX18ucHVzaCh7ZnVuYzpHbyxhcmdzOltBb10sdGhpc0FyZzpYfSksbmV3IFkodCx0aGlzLl9fY2hhaW5fXyl9cmV0dXJuIHRoaXMudGhydShBbyl9ZnVuY3Rpb24gdGYoKXtyZXR1cm4gX3UodGhpcy5fX3dyYXBwZWRfXyx0aGlzLl9fYWN0aW9uc19fKX1mdW5jdGlvbiByZihuLHQscil7dmFyIGU9cGgobik/bzp1ZTtyZXR1cm4gciYmU2kobix0LHIpJiYodD1YKSxlKG4seWkodCwzKSl9ZnVuY3Rpb24gZWYobix0KXtyZXR1cm4ocGgobik/ZjpmZSkobix5aSh0LDMpKX1mdW5jdGlvbiB1ZihuLHQpe3JldHVybiBjZShzZihuLHQpLDEpfWZ1bmN0aW9uIG9mKG4sdCl7cmV0dXJuIGNlKHNmKG4sdCksUm4pfWZ1bmN0aW9uIGZmKG4sdCxyKXtyZXR1cm4gcj1yPT09WD8xOmJjKHIpLGNlKHNmKG4sdCkscil9ZnVuY3Rpb24gY2Yobix0KXtyZXR1cm4ocGgobik/dTpzcykobix5aSh0LDMpKX1mdW5jdGlvbiBhZihuLHQpe3JldHVybihwaChuKT9pOmhzKShuLHlpKHQsMykpfWZ1bmN0aW9uIGxmKG4sdCxyLGUpe249UGYobik/bjpKYyhuKSxyPXImJiFlP2JjKHIpOjA7dmFyIHU9bi5sZW5ndGg7cmV0dXJuIHI8MCYmKHI9TmwodStyLDApKSxoYyhuKT9yPD11JiZuLmluZGV4T2YodCxyKT4tMTohIXUmJmIobix0LHIpPi0xfWZ1bmN0aW9uIHNmKG4sdCl7cmV0dXJuKHBoKG4pP2w6VGUpKG4seWkodCwzKSl9ZnVuY3Rpb24gaGYobix0LHIsZSl7cmV0dXJuIG51bGw9PW4/W106KHBoKHQpfHwodD1udWxsPT10P1tdOlt0XSkscj1lP1g6cixwaChyKXx8KHI9bnVsbD09cj9bXTpbcl0pLFBlKG4sdCxyKSl9ZnVuY3Rpb24gcGYobix0LHIpe3ZhciBlPXBoKG4pP2g6ayx1PWFyZ3VtZW50cy5sZW5ndGg8MztyZXR1cm4gZShuLHlpKHQsNCkscix1LHNzKX1mdW5jdGlvbiBfZihuLHQscil7dmFyIGU9cGgobik/cDprLHU9YXJndW1lbnRzLmxlbmd0aDwzO3JldHVybiBlKG4seWkodCw0KSxyLHUsaHMpfWZ1bmN0aW9uIHZmKG4sdCl7cmV0dXJuKHBoKG4pP2Y6ZmUpKG4semYoeWkodCwzKSkpfWZ1bmN0aW9uIGdmKG4pe3JldHVybihwaChuKT9GcjpYZSkobil9ZnVuY3Rpb24geWYobix0LHIpe3JldHVybiB0PShyP1NpKG4sdCxyKTp0PT09WCk/MTpiYyh0KSwocGgobik/TnI6bnUpKG4sdCl9ZnVuY3Rpb24gZGYobil7cmV0dXJuKHBoKG4pP1ByOnJ1KShuKX1mdW5jdGlvbiBiZihuKXtpZihudWxsPT1uKXJldHVybiAwO2lmKFBmKG4pKXJldHVybiBoYyhuKT9HKG4pOm4ubGVuZ3RoO3ZhciB0PWpzKG4pO3JldHVybiB0PT1abnx8dD09WW4/bi5zaXplOkNlKG4pLmxlbmd0aH1mdW5jdGlvbiB3ZihuLHQscil7dmFyIGU9cGgobik/Xzp1dTtyZXR1cm4gciYmU2kobix0LHIpJiYodD1YKSxlKG4seWkodCwzKSl9ZnVuY3Rpb24gbWYobix0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IG5ldyBmbChybik7cmV0dXJuIG49YmMobiksZnVuY3Rpb24oKXtpZigtLW48MSlyZXR1cm4gdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIHhmKG4sdCxyKXtyZXR1cm4gdD1yP1g6dCx0PW4mJm51bGw9PXQ/bi5sZW5ndGg6dCxpaShuLGJuLFgsWCxYLFgsdCl9ZnVuY3Rpb24gamYobix0KXt2YXIgcjtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IG5ldyBmbChybik7cmV0dXJuIG49YmMobiksZnVuY3Rpb24oKXtyZXR1cm4tLW4+MCYmKHI9dC5hcHBseSh0aGlzLGFyZ3VtZW50cykpLG48PTEmJih0PVgpLHJ9fWZ1bmN0aW9uIEFmKG4sdCxyKXt0PXI/WDp0O3ZhciBlPWlpKG4sdm4sWCxYLFgsWCxYLHQpO3JldHVybiBlLnBsYWNlaG9sZGVyPUFmLnBsYWNlaG9sZGVyLGV9ZnVuY3Rpb24ga2Yobix0LHIpe3Q9cj9YOnQ7dmFyIGU9aWkobixnbixYLFgsWCxYLFgsdCk7cmV0dXJuIGUucGxhY2Vob2xkZXI9a2YucGxhY2Vob2xkZXIsZX1mdW5jdGlvbiBPZihuLHQscil7ZnVuY3Rpb24gZSh0KXt2YXIgcj1oLGU9cDtyZXR1cm4gaD1wPVgsZD10LHY9bi5hcHBseShlLHIpfWZ1bmN0aW9uIHUobil7cmV0dXJuIGQ9bixnPU9zKGYsdCksYj9lKG4pOnZ9ZnVuY3Rpb24gaShuKXt2YXIgcj1uLXksZT1uLWQsdT10LXI7cmV0dXJuIHc/UGwodSxfLWUpOnV9ZnVuY3Rpb24gbyhuKXt2YXIgcj1uLXksZT1uLWQ7cmV0dXJuIHk9PT1YfHxyPj10fHxyPDB8fHcmJmU+PV99ZnVuY3Rpb24gZigpe3ZhciBuPXRoKCk7aWYobyhuKSlyZXR1cm4gYyhuKTtnPU9zKGYsaShuKSl9ZnVuY3Rpb24gYyhuKXtyZXR1cm4gZz1YLG0mJmg/ZShuKTooaD1wPVgsdil9ZnVuY3Rpb24gYSgpe2chPT1YJiZkcyhnKSxkPTAsaD15PXA9Zz1YfWZ1bmN0aW9uIGwoKXtyZXR1cm4gZz09PVg/djpjKHRoKCkpfWZ1bmN0aW9uIHMoKXt2YXIgbj10aCgpLHI9byhuKTtpZihoPWFyZ3VtZW50cyxwPXRoaXMseT1uLHIpe2lmKGc9PT1YKXJldHVybiB1KHkpO2lmKHcpcmV0dXJuIGc9T3MoZix0KSxlKHkpfXJldHVybiBnPT09WCYmKGc9T3MoZix0KSksdn12YXIgaCxwLF8sdixnLHksZD0wLGI9ITEsdz0hMSxtPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4pdGhyb3cgbmV3IGZsKHJuKTtyZXR1cm4gdD1tYyh0KXx8MCx0YyhyKSYmKGI9ISFyLmxlYWRpbmcsdz1cIm1heFdhaXRcImluIHIsXz13P05sKG1jKHIubWF4V2FpdCl8fDAsdCk6XyxtPVwidHJhaWxpbmdcImluIHI/ISFyLnRyYWlsaW5nOm0pLHMuY2FuY2VsPWEscy5mbHVzaD1sLHN9ZnVuY3Rpb24gSWYobil7cmV0dXJuIGlpKG4sbW4pfWZ1bmN0aW9uIFJmKG4sdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbnx8bnVsbCE9dCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgZmwocm4pO3ZhciByPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLHU9dD90LmFwcGx5KHRoaXMsZSk6ZVswXSxpPXIuY2FjaGU7aWYoaS5oYXModSkpcmV0dXJuIGkuZ2V0KHUpO3ZhciBvPW4uYXBwbHkodGhpcyxlKTtyZXR1cm4gci5jYWNoZT1pLnNldCh1LG8pfHxpLG99O3JldHVybiByLmNhY2hlPW5ldyhSZi5DYWNoZXx8ZnIpLHJ9ZnVuY3Rpb24gemYobil7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbil0aHJvdyBuZXcgZmwocm4pO3JldHVybiBmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cztzd2l0Y2godC5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4hbi5jYWxsKHRoaXMpO2Nhc2UgMTpyZXR1cm4hbi5jYWxsKHRoaXMsdFswXSk7Y2FzZSAyOnJldHVybiFuLmNhbGwodGhpcyx0WzBdLHRbMV0pO2Nhc2UgMzpyZXR1cm4hbi5jYWxsKHRoaXMsdFswXSx0WzFdLHRbMl0pfXJldHVybiFuLmFwcGx5KHRoaXMsdCl9fWZ1bmN0aW9uIEVmKG4pe3JldHVybiBqZigyLG4pfWZ1bmN0aW9uIFNmKG4sdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbil0aHJvdyBuZXcgZmwocm4pO3JldHVybiB0PXQ9PT1YP3Q6YmModCksUWUobix0KX1mdW5jdGlvbiBMZihuLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4pdGhyb3cgbmV3IGZsKHJuKTtyZXR1cm4gdD1udWxsPT10PzA6TmwoYmModCksMCksUWUoZnVuY3Rpb24oZSl7dmFyIHU9ZVt0XSxpPXd1KGUsMCx0KTtyZXR1cm4gdSYmcyhpLHUpLHIobix0aGlzLGkpfSl9ZnVuY3Rpb24gV2Yobix0LHIpe3ZhciBlPSEwLHU9ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbil0aHJvdyBuZXcgZmwocm4pO3JldHVybiB0YyhyKSYmKGU9XCJsZWFkaW5nXCJpbiByPyEhci5sZWFkaW5nOmUsdT1cInRyYWlsaW5nXCJpbiByPyEhci50cmFpbGluZzp1KSxPZihuLHQse2xlYWRpbmc6ZSxtYXhXYWl0OnQsdHJhaWxpbmc6dX0pfWZ1bmN0aW9uIENmKG4pe3JldHVybiB4ZihuLDEpfWZ1bmN0aW9uIFVmKG4sdCl7cmV0dXJuIGZoKGR1KHQpLG4pfWZ1bmN0aW9uIEJmKCl7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuW107dmFyIG49YXJndW1lbnRzWzBdO3JldHVybiBwaChuKT9uOltuXX1mdW5jdGlvbiBUZihuKXtyZXR1cm4gWHIobixhbil9ZnVuY3Rpb24gJGYobix0KXtyZXR1cm4gdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6WCxYcihuLGFuLHQpfWZ1bmN0aW9uIERmKG4pe3JldHVybiBYcihuLGZufGFuKX1mdW5jdGlvbiBNZihuLHQpe3JldHVybiB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpYLFhyKG4sZm58YW4sdCl9ZnVuY3Rpb24gRmYobix0KXtyZXR1cm4gbnVsbD09dHx8dGUobix0LFRjKHQpKX1mdW5jdGlvbiBOZihuLHQpe3JldHVybiBuPT09dHx8biE9PW4mJnQhPT10fWZ1bmN0aW9uIFBmKG4pe3JldHVybiBudWxsIT1uJiZuYyhuLmxlbmd0aCkmJiFRZihuKX1mdW5jdGlvbiBxZihuKXtyZXR1cm4gcmMobikmJlBmKG4pfWZ1bmN0aW9uIFpmKG4pe3JldHVybiEwPT09bnx8ITE9PT1ufHxyYyhuKSYmX2Uobik9PURufWZ1bmN0aW9uIEtmKG4pe3JldHVybiByYyhuKSYmMT09PW4ubm9kZVR5cGUmJiFsYyhuKX1mdW5jdGlvbiBWZihuKXtpZihudWxsPT1uKXJldHVybiEwO2lmKFBmKG4pJiYocGgobil8fFwic3RyaW5nXCI9PXR5cGVvZiBufHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnNwbGljZXx8dmgobil8fHdoKG4pfHxoaChuKSkpcmV0dXJuIW4ubGVuZ3RoO3ZhciB0PWpzKG4pO2lmKHQ9PVpufHx0PT1ZbilyZXR1cm4hbi5zaXplO2lmKEJpKG4pKXJldHVybiFDZShuKS5sZW5ndGg7Zm9yKHZhciByIGluIG4paWYocGwuY2FsbChuLHIpKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIEdmKG4sdCl7cmV0dXJuIGtlKG4sdCl9ZnVuY3Rpb24gSGYobix0LHIpe3I9XCJmdW5jdGlvblwiPT10eXBlb2Ygcj9yOlg7dmFyIGU9cj9yKG4sdCk6WDtyZXR1cm4gZT09PVg/a2Uobix0LFgscik6ISFlfWZ1bmN0aW9uIEpmKG4pe2lmKCFyYyhuKSlyZXR1cm4hMTt2YXIgdD1fZShuKTtyZXR1cm4gdD09Tm58fHQ9PUZufHxcInN0cmluZ1wiPT10eXBlb2Ygbi5tZXNzYWdlJiZcInN0cmluZ1wiPT10eXBlb2Ygbi5uYW1lJiYhbGMobil9ZnVuY3Rpb24gWWYobil7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIG4mJkRsKG4pfWZ1bmN0aW9uIFFmKG4pe2lmKCF0YyhuKSlyZXR1cm4hMTt2YXIgdD1fZShuKTtyZXR1cm4gdD09UG58fHQ9PXFufHx0PT0kbnx8dD09SG59ZnVuY3Rpb24gWGYobil7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIG4mJm49PWJjKG4pfWZ1bmN0aW9uIG5jKG4pe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBuJiZuPi0xJiZuJTE9PTAmJm48PXpufWZ1bmN0aW9uIHRjKG4pe3ZhciB0PXR5cGVvZiBuO3JldHVybiBudWxsIT1uJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1mdW5jdGlvbiByYyhuKXtyZXR1cm4gbnVsbCE9biYmXCJvYmplY3RcIj09dHlwZW9mIG59ZnVuY3Rpb24gZWMobix0KXtyZXR1cm4gbj09PXR8fFJlKG4sdCxiaSh0KSl9ZnVuY3Rpb24gdWMobix0LHIpe3JldHVybiByPVwiZnVuY3Rpb25cIj09dHlwZW9mIHI/cjpYLFJlKG4sdCxiaSh0KSxyKX1mdW5jdGlvbiBpYyhuKXtyZXR1cm4gYWMobikmJm4hPStufWZ1bmN0aW9uIG9jKG4pe2lmKEFzKG4pKXRocm93IG5ldyB0bCh0bik7cmV0dXJuIHplKG4pfWZ1bmN0aW9uIGZjKG4pe3JldHVybiBudWxsPT09bn1mdW5jdGlvbiBjYyhuKXtyZXR1cm4gbnVsbD09bn1mdW5jdGlvbiBhYyhuKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2Ygbnx8cmMobikmJl9lKG4pPT1Lbn1mdW5jdGlvbiBsYyhuKXtpZighcmMobil8fF9lKG4pIT1HbilyZXR1cm4hMTt2YXIgdD1BbChuKTtpZihudWxsPT09dClyZXR1cm4hMDt2YXIgcj1wbC5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3RvcjtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZyIGluc3RhbmNlb2YgciYmaGwuY2FsbChyKT09eWx9ZnVuY3Rpb24gc2Mobil7cmV0dXJuIFhmKG4pJiZuPj0tem4mJm48PXpufWZ1bmN0aW9uIGhjKG4pe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBufHwhcGgobikmJnJjKG4pJiZfZShuKT09UW59ZnVuY3Rpb24gcGMobil7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIG58fHJjKG4pJiZfZShuKT09WG59ZnVuY3Rpb24gX2Mobil7cmV0dXJuIG49PT1YfWZ1bmN0aW9uIHZjKG4pe3JldHVybiByYyhuKSYmanMobik9PXR0fWZ1bmN0aW9uIGdjKG4pe3JldHVybiByYyhuKSYmX2Uobik9PXJ0fWZ1bmN0aW9uIHljKG4pe2lmKCFuKXJldHVybltdO2lmKFBmKG4pKXJldHVybiBoYyhuKT9IKG4pOld1KG4pO2lmKHpsJiZuW3psXSlyZXR1cm4gTShuW3psXSgpKTt2YXIgdD1qcyhuKTtyZXR1cm4odD09Wm4/Rjp0PT1Zbj9xOkpjKShuKX1mdW5jdGlvbiBkYyhuKXtpZighbilyZXR1cm4gMD09PW4/bjowO2lmKChuPW1jKG4pKT09PVJufHxuPT09LVJuKXtyZXR1cm4objwwPy0xOjEpKkVufXJldHVybiBuPT09bj9uOjB9ZnVuY3Rpb24gYmMobil7dmFyIHQ9ZGMobikscj10JTE7cmV0dXJuIHQ9PT10P3I/dC1yOnQ6MH1mdW5jdGlvbiB3YyhuKXtyZXR1cm4gbj9RcihiYyhuKSwwLExuKTowfWZ1bmN0aW9uIG1jKG4pe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBuKXJldHVybiBuO2lmKHBjKG4pKXJldHVybiBTbjtpZih0YyhuKSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2Ygbi52YWx1ZU9mP24udmFsdWVPZigpOm47bj10Yyh0KT90K1wiXCI6dH1pZihcInN0cmluZ1wiIT10eXBlb2YgbilyZXR1cm4gMD09PW4/bjorbjtuPW4ucmVwbGFjZShJdCxcIlwiKTt2YXIgcj1UdC50ZXN0KG4pO3JldHVybiByfHxEdC50ZXN0KG4pP2JyKG4uc2xpY2UoMikscj8yOjgpOkJ0LnRlc3Qobik/U246K259ZnVuY3Rpb24geGMobil7cmV0dXJuIEN1KG4sJGMobikpfWZ1bmN0aW9uIGpjKG4pe3JldHVybiBuP1FyKGJjKG4pLC16bix6bik6MD09PW4/bjowfWZ1bmN0aW9uIEFjKG4pe3JldHVybiBudWxsPT1uP1wiXCI6YXUobil9ZnVuY3Rpb24ga2Mobix0KXt2YXIgcj1scyhuKTtyZXR1cm4gbnVsbD09dD9yOkdyKHIsdCl9ZnVuY3Rpb24gT2Mobix0KXtyZXR1cm4geShuLHlpKHQsMyksYWUpfWZ1bmN0aW9uIEljKG4sdCl7cmV0dXJuIHkobix5aSh0LDMpLGxlKX1mdW5jdGlvbiBSYyhuLHQpe3JldHVybiBudWxsPT1uP246cHMobix5aSh0LDMpLCRjKX1mdW5jdGlvbiB6YyhuLHQpe3JldHVybiBudWxsPT1uP246X3Mobix5aSh0LDMpLCRjKX1mdW5jdGlvbiBFYyhuLHQpe3JldHVybiBuJiZhZShuLHlpKHQsMykpfWZ1bmN0aW9uIFNjKG4sdCl7cmV0dXJuIG4mJmxlKG4seWkodCwzKSl9ZnVuY3Rpb24gTGMobil7cmV0dXJuIG51bGw9PW4/W106c2UobixUYyhuKSl9ZnVuY3Rpb24gV2Mobil7cmV0dXJuIG51bGw9PW4/W106c2UobiwkYyhuKSl9ZnVuY3Rpb24gQ2Mobix0LHIpe3ZhciBlPW51bGw9PW4/WDpoZShuLHQpO3JldHVybiBlPT09WD9yOmV9ZnVuY3Rpb24gVWMobix0KXtyZXR1cm4gbnVsbCE9biYmQWkobix0LGdlKX1mdW5jdGlvbiBCYyhuLHQpe3JldHVybiBudWxsIT1uJiZBaShuLHQseWUpfWZ1bmN0aW9uIFRjKG4pe3JldHVybiBQZihuKT9NcihuKTpDZShuKX1mdW5jdGlvbiAkYyhuKXtyZXR1cm4gUGYobik/TXIobiwhMCk6VWUobil9ZnVuY3Rpb24gRGMobix0KXt2YXIgcj17fTtyZXR1cm4gdD15aSh0LDMpLGFlKG4sZnVuY3Rpb24obixlLHUpe0pyKHIsdChuLGUsdSksbil9KSxyfWZ1bmN0aW9uIE1jKG4sdCl7dmFyIHI9e307cmV0dXJuIHQ9eWkodCwzKSxhZShuLGZ1bmN0aW9uKG4sZSx1KXtKcihyLGUsdChuLGUsdSkpfSkscn1mdW5jdGlvbiBGYyhuLHQpe3JldHVybiBOYyhuLHpmKHlpKHQpKSl9ZnVuY3Rpb24gTmMobix0KXtpZihudWxsPT1uKXJldHVybnt9O3ZhciByPWwoX2kobiksZnVuY3Rpb24obil7cmV0dXJuW25dfSk7cmV0dXJuIHQ9eWkodCksWmUobixyLGZ1bmN0aW9uKG4scil7cmV0dXJuIHQobixyWzBdKX0pfWZ1bmN0aW9uIFBjKG4sdCxyKXt0PWJ1KHQsbik7dmFyIGU9LTEsdT10Lmxlbmd0aDtmb3IodXx8KHU9MSxuPVgpOysrZTx1Oyl7dmFyIGk9bnVsbD09bj9YOm5bR2kodFtlXSldO2k9PT1YJiYoZT11LGk9ciksbj1RZihpKT9pLmNhbGwobik6aX1yZXR1cm4gbn1mdW5jdGlvbiBxYyhuLHQscil7cmV0dXJuIG51bGw9PW4/bjp0dShuLHQscil9ZnVuY3Rpb24gWmMobix0LHIsZSl7cmV0dXJuIGU9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOlgsbnVsbD09bj9uOnR1KG4sdCxyLGUpfWZ1bmN0aW9uIEtjKG4sdCxyKXt2YXIgZT1waChuKSxpPWV8fHZoKG4pfHx3aChuKTtpZih0PXlpKHQsNCksbnVsbD09cil7dmFyIG89biYmbi5jb25zdHJ1Y3RvcjtyPWk/ZT9uZXcgbzpbXTp0YyhuKSYmUWYobyk/bHMoQWwobikpOnt9fXJldHVybihpP3U6YWUpKG4sZnVuY3Rpb24obixlLHUpe3JldHVybiB0KHIsbixlLHUpfSkscn1mdW5jdGlvbiBWYyhuLHQpe3JldHVybiBudWxsPT1ufHxzdShuLHQpfWZ1bmN0aW9uIEdjKG4sdCxyKXtyZXR1cm4gbnVsbD09bj9uOmh1KG4sdCxkdShyKSl9ZnVuY3Rpb24gSGMobix0LHIsZSl7cmV0dXJuIGU9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOlgsbnVsbD09bj9uOmh1KG4sdCxkdShyKSxlKX1mdW5jdGlvbiBKYyhuKXtyZXR1cm4gbnVsbD09bj9bXTpTKG4sVGMobikpfWZ1bmN0aW9uIFljKG4pe3JldHVybiBudWxsPT1uP1tdOlMobiwkYyhuKSl9ZnVuY3Rpb24gUWMobix0LHIpe3JldHVybiByPT09WCYmKHI9dCx0PVgpLHIhPT1YJiYocj1tYyhyKSxyPXI9PT1yP3I6MCksdCE9PVgmJih0PW1jKHQpLHQ9dD09PXQ/dDowKSxRcihtYyhuKSx0LHIpfWZ1bmN0aW9uIFhjKG4sdCxyKXtyZXR1cm4gdD1kYyh0KSxyPT09WD8ocj10LHQ9MCk6cj1kYyhyKSxuPW1jKG4pLGRlKG4sdCxyKX1mdW5jdGlvbiBuYShuLHQscil7aWYociYmXCJib29sZWFuXCIhPXR5cGVvZiByJiZTaShuLHQscikmJih0PXI9WCkscj09PVgmJihcImJvb2xlYW5cIj09dHlwZW9mIHQ/KHI9dCx0PVgpOlwiYm9vbGVhblwiPT10eXBlb2YgbiYmKHI9bixuPVgpKSxuPT09WCYmdD09PVg/KG49MCx0PTEpOihuPWRjKG4pLHQ9PT1YPyh0PW4sbj0wKTp0PWRjKHQpKSxuPnQpe3ZhciBlPW47bj10LHQ9ZX1pZihyfHxuJTF8fHQlMSl7dmFyIHU9S2woKTtyZXR1cm4gUGwobit1Kih0LW4rZHIoXCIxZS1cIisoKHUrXCJcIikubGVuZ3RoLTEpKSksdCl9cmV0dXJuIEhlKG4sdCl9ZnVuY3Rpb24gdGEobil7cmV0dXJuIEtoKEFjKG4pLnRvTG93ZXJDYXNlKCkpfWZ1bmN0aW9uIHJhKG4pe3JldHVybihuPUFjKG4pKSYmbi5yZXBsYWNlKEZ0LFVyKS5yZXBsYWNlKGlyLFwiXCIpfWZ1bmN0aW9uIGVhKG4sdCxyKXtuPUFjKG4pLHQ9YXUodCk7dmFyIGU9bi5sZW5ndGg7cj1yPT09WD9lOlFyKGJjKHIpLDAsZSk7dmFyIHU9cjtyZXR1cm4oci09dC5sZW5ndGgpPj0wJiZuLnNsaWNlKHIsdSk9PXR9ZnVuY3Rpb24gdWEobil7cmV0dXJuIG49QWMobiksbiYmd3QudGVzdChuKT9uLnJlcGxhY2UoZHQsQnIpOm59ZnVuY3Rpb24gaWEobil7cmV0dXJuIG49QWMobiksbiYmT3QudGVzdChuKT9uLnJlcGxhY2Uoa3QsXCJcXFxcJCZcIik6bn1mdW5jdGlvbiBvYShuLHQscil7bj1BYyhuKSx0PWJjKHQpO3ZhciBlPXQ/RyhuKTowO2lmKCF0fHxlPj10KXJldHVybiBuO3ZhciB1PSh0LWUpLzI7cmV0dXJuIFF1KEJsKHUpLHIpK24rUXUoVWwodSkscil9ZnVuY3Rpb24gZmEobix0LHIpe249QWMobiksdD1iYyh0KTt2YXIgZT10P0cobik6MDtyZXR1cm4gdCYmZTx0P24rUXUodC1lLHIpOm59ZnVuY3Rpb24gY2Eobix0LHIpe249QWMobiksdD1iYyh0KTt2YXIgZT10P0cobik6MDtyZXR1cm4gdCYmZTx0P1F1KHQtZSxyKStuOm59ZnVuY3Rpb24gYWEobix0LHIpe3JldHVybiByfHxudWxsPT10P3Q9MDp0JiYodD0rdCksWmwoQWMobikucmVwbGFjZShSdCxcIlwiKSx0fHwwKX1mdW5jdGlvbiBsYShuLHQscil7cmV0dXJuIHQ9KHI/U2kobix0LHIpOnQ9PT1YKT8xOmJjKHQpLFllKEFjKG4pLHQpfWZ1bmN0aW9uIHNhKCl7dmFyIG49YXJndW1lbnRzLHQ9QWMoblswXSk7cmV0dXJuIG4ubGVuZ3RoPDM/dDp0LnJlcGxhY2UoblsxXSxuWzJdKX1mdW5jdGlvbiBoYShuLHQscil7cmV0dXJuIHImJlwibnVtYmVyXCIhPXR5cGVvZiByJiZTaShuLHQscikmJih0PXI9WCksKHI9cj09PVg/TG46cj4+PjApPyhuPUFjKG4pLG4mJihcInN0cmluZ1wiPT10eXBlb2YgdHx8bnVsbCE9dCYmIWRoKHQpKSYmISh0PWF1KHQpKSYmJChuKT93dShIKG4pLDAscik6bi5zcGxpdCh0LHIpKTpbXX1mdW5jdGlvbiBwYShuLHQscil7cmV0dXJuIG49QWMobikscj1udWxsPT1yPzA6UXIoYmMociksMCxuLmxlbmd0aCksdD1hdSh0KSxuLnNsaWNlKHIscit0Lmxlbmd0aCk9PXR9ZnVuY3Rpb24gX2Eobix0LHIpe3ZhciBlPUsudGVtcGxhdGVTZXR0aW5ncztyJiZTaShuLHQscikmJih0PVgpLG49QWMobiksdD1raCh7fSx0LGUsb2kpO3ZhciB1LGksbz1raCh7fSx0LmltcG9ydHMsZS5pbXBvcnRzLG9pKSxmPVRjKG8pLGM9UyhvLGYpLGE9MCxsPXQuaW50ZXJwb2xhdGV8fE50LHM9XCJfX3AgKz0gJ1wiLGg9aWwoKHQuZXNjYXBlfHxOdCkuc291cmNlK1wifFwiK2wuc291cmNlK1wifFwiKyhsPT09bXQ/Q3Q6TnQpLnNvdXJjZStcInxcIisodC5ldmFsdWF0ZXx8TnQpLnNvdXJjZStcInwkXCIsXCJnXCIpLHA9XCIvLyMgc291cmNlVVJMPVwiKyhcInNvdXJjZVVSTFwiaW4gdD90LnNvdXJjZVVSTDpcImxvZGFzaC50ZW1wbGF0ZVNvdXJjZXNbXCIrICsrc3IrXCJdXCIpK1wiXFxuXCI7bi5yZXBsYWNlKGgsZnVuY3Rpb24odCxyLGUsbyxmLGMpe3JldHVybiBlfHwoZT1vKSxzKz1uLnNsaWNlKGEsYykucmVwbGFjZShQdCxCKSxyJiYodT0hMCxzKz1cIicgK1xcbl9fZShcIityK1wiKSArXFxuJ1wiKSxmJiYoaT0hMCxzKz1cIic7XFxuXCIrZitcIjtcXG5fX3AgKz0gJ1wiKSxlJiYocys9XCInICtcXG4oKF9fdCA9IChcIitlK1wiKSkgPT0gbnVsbCA/ICcnIDogX190KSArXFxuJ1wiKSxhPWMrdC5sZW5ndGgsdH0pLHMrPVwiJztcXG5cIjt2YXIgXz10LnZhcmlhYmxlO198fChzPVwid2l0aCAob2JqKSB7XFxuXCIrcytcIlxcbn1cXG5cIikscz0oaT9zLnJlcGxhY2UoX3QsXCJcIik6cykucmVwbGFjZSh2dCxcIiQxXCIpLnJlcGxhY2UoZ3QsXCIkMTtcIikscz1cImZ1bmN0aW9uKFwiKyhffHxcIm9ialwiKStcIikge1xcblwiKyhfP1wiXCI6XCJvYmogfHwgKG9iaiA9IHt9KTtcXG5cIikrXCJ2YXIgX190LCBfX3AgPSAnJ1wiKyh1P1wiLCBfX2UgPSBfLmVzY2FwZVwiOlwiXCIpKyhpP1wiLCBfX2ogPSBBcnJheS5wcm90b3R5cGUuam9pbjtcXG5mdW5jdGlvbiBwcmludCgpIHsgX19wICs9IF9fai5jYWxsKGFyZ3VtZW50cywgJycpIH1cXG5cIjpcIjtcXG5cIikrcytcInJldHVybiBfX3BcXG59XCI7dmFyIHY9VmgoZnVuY3Rpb24oKXtyZXR1cm4gcmwoZixwK1wicmV0dXJuIFwiK3MpLmFwcGx5KFgsYyl9KTtpZih2LnNvdXJjZT1zLEpmKHYpKXRocm93IHY7cmV0dXJuIHZ9ZnVuY3Rpb24gdmEobil7cmV0dXJuIEFjKG4pLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gZ2Eobil7cmV0dXJuIEFjKG4pLnRvVXBwZXJDYXNlKCl9ZnVuY3Rpb24geWEobix0LHIpe2lmKChuPUFjKG4pKSYmKHJ8fHQ9PT1YKSlyZXR1cm4gbi5yZXBsYWNlKEl0LFwiXCIpO2lmKCFufHwhKHQ9YXUodCkpKXJldHVybiBuO3ZhciBlPUgobiksdT1IKHQpO3JldHVybiB3dShlLFcoZSx1KSxDKGUsdSkrMSkuam9pbihcIlwiKX1mdW5jdGlvbiBkYShuLHQscil7aWYoKG49QWMobikpJiYocnx8dD09PVgpKXJldHVybiBuLnJlcGxhY2UoenQsXCJcIik7aWYoIW58fCEodD1hdSh0KSkpcmV0dXJuIG47dmFyIGU9SChuKTtyZXR1cm4gd3UoZSwwLEMoZSxIKHQpKSsxKS5qb2luKFwiXCIpfWZ1bmN0aW9uIGJhKG4sdCxyKXtpZigobj1BYyhuKSkmJihyfHx0PT09WCkpcmV0dXJuIG4ucmVwbGFjZShSdCxcIlwiKTtpZighbnx8ISh0PWF1KHQpKSlyZXR1cm4gbjt2YXIgZT1IKG4pO3JldHVybiB3dShlLFcoZSxIKHQpKSkuam9pbihcIlwiKX1mdW5jdGlvbiB3YShuLHQpe3ZhciByPXhuLGU9am47aWYodGModCkpe3ZhciB1PVwic2VwYXJhdG9yXCJpbiB0P3Quc2VwYXJhdG9yOnU7cj1cImxlbmd0aFwiaW4gdD9iYyh0Lmxlbmd0aCk6cixlPVwib21pc3Npb25cImluIHQ/YXUodC5vbWlzc2lvbik6ZX1uPUFjKG4pO3ZhciBpPW4ubGVuZ3RoO2lmKCQobikpe3ZhciBvPUgobik7aT1vLmxlbmd0aH1pZihyPj1pKXJldHVybiBuO3ZhciBmPXItRyhlKTtpZihmPDEpcmV0dXJuIGU7dmFyIGM9bz93dShvLDAsZikuam9pbihcIlwiKTpuLnNsaWNlKDAsZik7aWYodT09PVgpcmV0dXJuIGMrZTtpZihvJiYoZis9Yy5sZW5ndGgtZiksZGgodSkpe2lmKG4uc2xpY2UoZikuc2VhcmNoKHUpKXt2YXIgYSxsPWM7Zm9yKHUuZ2xvYmFsfHwodT1pbCh1LnNvdXJjZSxBYyhVdC5leGVjKHUpKStcImdcIikpLHUubGFzdEluZGV4PTA7YT11LmV4ZWMobCk7KXZhciBzPWEuaW5kZXg7Yz1jLnNsaWNlKDAscz09PVg/ZjpzKX19ZWxzZSBpZihuLmluZGV4T2YoYXUodSksZikhPWYpe3ZhciBoPWMubGFzdEluZGV4T2YodSk7aD4tMSYmKGM9Yy5zbGljZSgwLGgpKX1yZXR1cm4gYytlfWZ1bmN0aW9uIG1hKG4pe3JldHVybiBuPUFjKG4pLG4mJmJ0LnRlc3Qobik/bi5yZXBsYWNlKHl0LFRyKTpufWZ1bmN0aW9uIHhhKG4sdCxyKXtyZXR1cm4gbj1BYyhuKSx0PXI/WDp0LHQ9PT1YP0Qobik/UShuKTpnKG4pOm4ubWF0Y2godCl8fFtdfWZ1bmN0aW9uIGphKG4pe3ZhciB0PW51bGw9PW4/MDpuLmxlbmd0aCxlPXlpKCk7cmV0dXJuIG49dD9sKG4sZnVuY3Rpb24obil7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgblsxXSl0aHJvdyBuZXcgZmwocm4pO3JldHVybltlKG5bMF0pLG5bMV1dfSk6W10sUWUoZnVuY3Rpb24oZSl7Zm9yKHZhciB1PS0xOysrdTx0Oyl7dmFyIGk9blt1XTtpZihyKGlbMF0sdGhpcyxlKSlyZXR1cm4gcihpWzFdLHRoaXMsZSl9fSl9ZnVuY3Rpb24gQWEobil7cmV0dXJuIG5lKFhyKG4sZm4pKX1mdW5jdGlvbiBrYShuKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbn19ZnVuY3Rpb24gT2Eobix0KXtyZXR1cm4gbnVsbD09bnx8biE9PW4/dDpufWZ1bmN0aW9uIElhKG4pe3JldHVybiBufWZ1bmN0aW9uIFJhKG4pe3JldHVybiBXZShcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP246WHIobixmbikpfWZ1bmN0aW9uIHphKG4pe3JldHVybiAkZShYcihuLGZuKSl9ZnVuY3Rpb24gRWEobix0KXtyZXR1cm4gRGUobixYcih0LGZuKSl9ZnVuY3Rpb24gU2Eobix0LHIpe3ZhciBlPVRjKHQpLGk9c2UodCxlKTtudWxsIT1yfHx0Yyh0KSYmKGkubGVuZ3RofHwhZS5sZW5ndGgpfHwocj10LHQ9bixuPXRoaXMsaT1zZSh0LFRjKHQpKSk7dmFyIG89ISh0YyhyKSYmXCJjaGFpblwiaW4gciYmIXIuY2hhaW4pLGY9UWYobik7cmV0dXJuIHUoaSxmdW5jdGlvbihyKXt2YXIgZT10W3JdO25bcl09ZSxmJiYobi5wcm90b3R5cGVbcl09ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9fY2hhaW5fXztpZihvfHx0KXt2YXIgcj1uKHRoaXMuX193cmFwcGVkX18pO3JldHVybihyLl9fYWN0aW9uc19fPVd1KHRoaXMuX19hY3Rpb25zX18pKS5wdXNoKHtmdW5jOmUsYXJnczphcmd1bWVudHMsdGhpc0FyZzpufSksci5fX2NoYWluX189dCxyfXJldHVybiBlLmFwcGx5KG4scyhbdGhpcy52YWx1ZSgpXSxhcmd1bWVudHMpKX0pfSksbn1mdW5jdGlvbiBMYSgpe3JldHVybiB4ci5fPT09dGhpcyYmKHhyLl89ZGwpLHRoaXN9ZnVuY3Rpb24gV2EoKXt9ZnVuY3Rpb24gQ2Eobil7cmV0dXJuIG49YmMobiksUWUoZnVuY3Rpb24odCl7cmV0dXJuIE5lKHQsbil9KX1mdW5jdGlvbiBVYShuKXtyZXR1cm4gTGkobik/aihHaShuKSk6S2Uobil9ZnVuY3Rpb24gQmEobil7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT1uP1g6aGUobix0KX19ZnVuY3Rpb24gVGEoKXtyZXR1cm5bXX1mdW5jdGlvbiAkYSgpe3JldHVybiExfWZ1bmN0aW9uIERhKCl7cmV0dXJue319ZnVuY3Rpb24gTWEoKXtyZXR1cm5cIlwifWZ1bmN0aW9uIEZhKCl7cmV0dXJuITB9ZnVuY3Rpb24gTmEobix0KXtpZigobj1iYyhuKSk8MXx8bj56bilyZXR1cm5bXTt2YXIgcj1MbixlPVBsKG4sTG4pO3Q9eWkodCksbi09TG47Zm9yKHZhciB1PVIoZSx0KTsrK3I8bjspdChyKTtyZXR1cm4gdX1mdW5jdGlvbiBQYShuKXtyZXR1cm4gcGgobik/bChuLEdpKTpwYyhuKT9bbl06V3UoUnMoQWMobikpKX1mdW5jdGlvbiBxYShuKXt2YXIgdD0rK19sO3JldHVybiBBYyhuKSt0fWZ1bmN0aW9uIFphKG4pe3JldHVybiBuJiZuLmxlbmd0aD9pZShuLElhLHZlKTpYfWZ1bmN0aW9uIEthKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoP2llKG4seWkodCwyKSx2ZSk6WH1mdW5jdGlvbiBWYShuKXtyZXR1cm4geChuLElhKX1mdW5jdGlvbiBHYShuLHQpe3JldHVybiB4KG4seWkodCwyKSl9ZnVuY3Rpb24gSGEobil7cmV0dXJuIG4mJm4ubGVuZ3RoP2llKG4sSWEsQmUpOlh9ZnVuY3Rpb24gSmEobix0KXtyZXR1cm4gbiYmbi5sZW5ndGg/aWUobix5aSh0LDIpLEJlKTpYfWZ1bmN0aW9uIFlhKG4pe3JldHVybiBuJiZuLmxlbmd0aD9JKG4sSWEpOjB9ZnVuY3Rpb24gUWEobix0KXtyZXR1cm4gbiYmbi5sZW5ndGg/SShuLHlpKHQsMikpOjB9QT1udWxsPT1BP3hyOiRyLmRlZmF1bHRzKHhyLk9iamVjdCgpLEEsJHIucGljayh4cixscikpO3ZhciBYYT1BLkFycmF5LG5sPUEuRGF0ZSx0bD1BLkVycm9yLHJsPUEuRnVuY3Rpb24sZWw9QS5NYXRoLHVsPUEuT2JqZWN0LGlsPUEuUmVnRXhwLG9sPUEuU3RyaW5nLGZsPUEuVHlwZUVycm9yLGNsPVhhLnByb3RvdHlwZSxhbD1ybC5wcm90b3R5cGUsbGw9dWwucHJvdG90eXBlLHNsPUFbXCJfX2NvcmUtanNfc2hhcmVkX19cIl0saGw9YWwudG9TdHJpbmcscGw9bGwuaGFzT3duUHJvcGVydHksX2w9MCx2bD1mdW5jdGlvbigpe3ZhciBuPS9bXi5dKyQvLmV4ZWMoc2wmJnNsLmtleXMmJnNsLmtleXMuSUVfUFJPVE98fFwiXCIpO3JldHVybiBuP1wiU3ltYm9sKHNyYylfMS5cIituOlwiXCJ9KCksZ2w9bGwudG9TdHJpbmcseWw9aGwuY2FsbCh1bCksZGw9eHIuXyxibD1pbChcIl5cIitobC5jYWxsKHBsKS5yZXBsYWNlKGt0LFwiXFxcXCQmXCIpLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csXCIkMS4qP1wiKStcIiRcIiksd2w9a3I/QS5CdWZmZXI6WCxtbD1BLlN5bWJvbCx4bD1BLlVpbnQ4QXJyYXksamw9d2w/d2wuYWxsb2NVbnNhZmU6WCxBbD1OKHVsLmdldFByb3RvdHlwZU9mLHVsKSxrbD11bC5jcmVhdGUsT2w9bGwucHJvcGVydHlJc0VudW1lcmFibGUsSWw9Y2wuc3BsaWNlLFJsPW1sP21sLmlzQ29uY2F0U3ByZWFkYWJsZTpYLHpsPW1sP21sLml0ZXJhdG9yOlgsRWw9bWw/bWwudG9TdHJpbmdUYWc6WCxTbD1mdW5jdGlvbigpe3RyeXt2YXIgbj13aSh1bCxcImRlZmluZVByb3BlcnR5XCIpO3JldHVybiBuKHt9LFwiXCIse30pLG59Y2F0Y2gobil7fX0oKSxMbD1BLmNsZWFyVGltZW91dCE9PXhyLmNsZWFyVGltZW91dCYmQS5jbGVhclRpbWVvdXQsV2w9bmwmJm5sLm5vdyE9PXhyLkRhdGUubm93JiZubC5ub3csQ2w9QS5zZXRUaW1lb3V0IT09eHIuc2V0VGltZW91dCYmQS5zZXRUaW1lb3V0LFVsPWVsLmNlaWwsQmw9ZWwuZmxvb3IsVGw9dWwuZ2V0T3duUHJvcGVydHlTeW1ib2xzLCRsPXdsP3dsLmlzQnVmZmVyOlgsRGw9QS5pc0Zpbml0ZSxNbD1jbC5qb2luLEZsPU4odWwua2V5cyx1bCksTmw9ZWwubWF4LFBsPWVsLm1pbixxbD1ubC5ub3csWmw9QS5wYXJzZUludCxLbD1lbC5yYW5kb20sVmw9Y2wucmV2ZXJzZSxHbD13aShBLFwiRGF0YVZpZXdcIiksSGw9d2koQSxcIk1hcFwiKSxKbD13aShBLFwiUHJvbWlzZVwiKSxZbD13aShBLFwiU2V0XCIpLFFsPXdpKEEsXCJXZWFrTWFwXCIpLFhsPXdpKHVsLFwiY3JlYXRlXCIpLG5zPVFsJiZuZXcgUWwsdHM9e30scnM9SGkoR2wpLGVzPUhpKEhsKSx1cz1IaShKbCksaXM9SGkoWWwpLG9zPUhpKFFsKSxmcz1tbD9tbC5wcm90b3R5cGU6WCxjcz1mcz9mcy52YWx1ZU9mOlgsYXM9ZnM/ZnMudG9TdHJpbmc6WCxscz1mdW5jdGlvbigpe2Z1bmN0aW9uIG4oKXt9cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKCF0Yyh0KSlyZXR1cm57fTtpZihrbClyZXR1cm4ga2wodCk7bi5wcm90b3R5cGU9dDt2YXIgcj1uZXcgbjtyZXR1cm4gbi5wcm90b3R5cGU9WCxyfX0oKTtLLnRlbXBsYXRlU2V0dGluZ3M9e2VzY2FwZTovPCUtKFtcXHNcXFNdKz8pJT4vZyxldmFsdWF0ZTovPCUoW1xcc1xcU10rPyklPi9nLGludGVycG9sYXRlOm10LHZhcmlhYmxlOlwiXCIsaW1wb3J0czp7XzpLfX0sSy5wcm90b3R5cGU9Si5wcm90b3R5cGUsSy5wcm90b3R5cGUuY29uc3RydWN0b3I9SyxZLnByb3RvdHlwZT1scyhKLnByb3RvdHlwZSksWS5wcm90b3R5cGUuY29uc3RydWN0b3I9WSxXdC5wcm90b3R5cGU9bHMoSi5wcm90b3R5cGUpLFd0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1XdCxWdC5wcm90b3R5cGUuY2xlYXI9R3QsVnQucHJvdG90eXBlLmRlbGV0ZT1IdCxWdC5wcm90b3R5cGUuZ2V0PUp0LFZ0LnByb3RvdHlwZS5oYXM9WXQsVnQucHJvdG90eXBlLnNldD1RdCxYdC5wcm90b3R5cGUuY2xlYXI9bnIsWHQucHJvdG90eXBlLmRlbGV0ZT10cixYdC5wcm90b3R5cGUuZ2V0PXJyLFh0LnByb3RvdHlwZS5oYXM9ZXIsWHQucHJvdG90eXBlLnNldD1vcixmci5wcm90b3R5cGUuY2xlYXI9Y3IsZnIucHJvdG90eXBlLmRlbGV0ZT1hcixmci5wcm90b3R5cGUuZ2V0PV9yLGZyLnByb3RvdHlwZS5oYXM9dnIsZnIucHJvdG90eXBlLnNldD1ncix5ci5wcm90b3R5cGUuYWRkPXlyLnByb3RvdHlwZS5wdXNoPXdyLHlyLnByb3RvdHlwZS5oYXM9bXIsanIucHJvdG90eXBlLmNsZWFyPUFyLGpyLnByb3RvdHlwZS5kZWxldGU9T3IsanIucHJvdG90eXBlLmdldD1Jcixqci5wcm90b3R5cGUuaGFzPUNyLGpyLnByb3RvdHlwZS5zZXQ9RHI7dmFyIHNzPUR1KGFlKSxocz1EdShsZSwhMCkscHM9TXUoKSxfcz1NdSghMCksdnM9bnM/ZnVuY3Rpb24obix0KXtyZXR1cm4gbnMuc2V0KG4sdCksbn06SWEsZ3M9U2w/ZnVuY3Rpb24obix0KXtyZXR1cm4gU2wobixcInRvU3RyaW5nXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiExLHZhbHVlOmthKHQpLHdyaXRhYmxlOiEwfSl9OklhLHlzPVFlLGRzPUxsfHxmdW5jdGlvbihuKXtyZXR1cm4geHIuY2xlYXJUaW1lb3V0KG4pfSxicz1ZbCYmMS9xKG5ldyBZbChbLC0wXSkpWzFdPT1Sbj9mdW5jdGlvbihuKXtyZXR1cm4gbmV3IFlsKG4pfTpXYSx3cz1ucz9mdW5jdGlvbihuKXtyZXR1cm4gbnMuZ2V0KG4pfTpXYSxtcz1UbD9mdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09bj9bXToobj11bChuKSxmKFRsKG4pLGZ1bmN0aW9uKHQpe3JldHVybiBPbC5jYWxsKG4sdCl9KSl9OlRhLHhzPVRsP2Z1bmN0aW9uKG4pe2Zvcih2YXIgdD1bXTtuOylzKHQsbXMobikpLG49QWwobik7cmV0dXJuIHR9OlRhLGpzPV9lOyhHbCYmanMobmV3IEdsKG5ldyBBcnJheUJ1ZmZlcigxKSkpIT11dHx8SGwmJmpzKG5ldyBIbCkhPVpufHxKbCYmXCJbb2JqZWN0IFByb21pc2VdXCIhPWpzKEpsLnJlc29sdmUoKSl8fFlsJiZqcyhuZXcgWWwpIT1Zbnx8UWwmJmpzKG5ldyBRbCkhPXR0KSYmKGpzPWZ1bmN0aW9uKG4pe3ZhciB0PV9lKG4pLHI9dD09R24/bi5jb25zdHJ1Y3RvcjpYLGU9cj9IaShyKTpcIlwiO2lmKGUpc3dpdGNoKGUpe2Nhc2UgcnM6cmV0dXJuIHV0O2Nhc2UgZXM6cmV0dXJuIFpuO2Nhc2UgdXM6cmV0dXJuXCJbb2JqZWN0IFByb21pc2VdXCI7Y2FzZSBpczpyZXR1cm4gWW47Y2FzZSBvczpyZXR1cm4gdHR9cmV0dXJuIHR9KTt2YXIgQXM9c2w/UWY6JGEsa3M9S2kodnMpLE9zPUNsfHxmdW5jdGlvbihuLHQpe3JldHVybiB4ci5zZXRUaW1lb3V0KG4sdCl9LElzPUtpKGdzKSxScz1mdW5jdGlvbihuKXt2YXIgdD1SZihuLGZ1bmN0aW9uKG4pe3JldHVybiByLnNpemU9PT11biYmci5jbGVhcigpLG59KSxyPXQuY2FjaGU7cmV0dXJuIHR9KGZ1bmN0aW9uKG4pe3ZhciB0PVtdO3JldHVybiBBdC50ZXN0KG4pJiZ0LnB1c2goXCJcIiksbi5yZXBsYWNlKC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZyxmdW5jdGlvbihuLHIsZSx1KXt0LnB1c2goZT91LnJlcGxhY2UoL1xcXFwoXFxcXCk/L2csXCIkMVwiKTpyfHxuKX0pLHR9KSx6cz1RZShmdW5jdGlvbihuLHQpe3JldHVybiBxZihuKT9lZShuLGNlKHQsMSxxZiwhMCkpOltdfSksRXM9UWUoZnVuY3Rpb24obix0KXt2YXIgcj1nbyh0KTtyZXR1cm4gcWYocikmJihyPVgpLHFmKG4pP2VlKG4sY2UodCwxLHFmLCEwKSx5aShyLDIpKTpbXX0pLFNzPVFlKGZ1bmN0aW9uKG4sdCl7dmFyIHI9Z28odCk7cmV0dXJuIHFmKHIpJiYocj1YKSxxZihuKT9lZShuLGNlKHQsMSxxZiwhMCksWCxyKTpbXX0pLExzPVFlKGZ1bmN0aW9uKG4pe3ZhciB0PWwobix5dSk7cmV0dXJuIHQubGVuZ3RoJiZ0WzBdPT09blswXT9iZSh0KTpbXX0pLFdzPVFlKGZ1bmN0aW9uKG4pe3ZhciB0PWdvKG4pLHI9bChuLHl1KTtyZXR1cm4gdD09PWdvKHIpP3Q9WDpyLnBvcCgpLHIubGVuZ3RoJiZyWzBdPT09blswXT9iZShyLHlpKHQsMikpOltdfSksQ3M9UWUoZnVuY3Rpb24obil7dmFyIHQ9Z28obikscj1sKG4seXUpO3JldHVybiB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpYLHQmJnIucG9wKCksci5sZW5ndGgmJnJbMF09PT1uWzBdP2JlKHIsWCx0KTpbXX0pLFVzPVFlKHdvKSxCcz1oaShmdW5jdGlvbihuLHQpe3ZhciByPW51bGw9PW4/MDpuLmxlbmd0aCxlPVlyKG4sdCk7cmV0dXJuIEdlKG4sbCh0LGZ1bmN0aW9uKG4pe3JldHVybiBFaShuLHIpPytuOm59KS5zb3J0KHp1KSksZX0pLFRzPVFlKGZ1bmN0aW9uKG4pe3JldHVybiBsdShjZShuLDEscWYsITApKX0pLCRzPVFlKGZ1bmN0aW9uKG4pe3ZhciB0PWdvKG4pO3JldHVybiBxZih0KSYmKHQ9WCksbHUoY2UobiwxLHFmLCEwKSx5aSh0LDIpKX0pLERzPVFlKGZ1bmN0aW9uKG4pe3ZhciB0PWdvKG4pO3JldHVybiB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpYLGx1KGNlKG4sMSxxZiwhMCksWCx0KX0pLE1zPVFlKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIHFmKG4pP2VlKG4sdCk6W119KSxGcz1RZShmdW5jdGlvbihuKXtyZXR1cm4gdnUoZihuLHFmKSl9KSxOcz1RZShmdW5jdGlvbihuKXt2YXIgdD1nbyhuKTtyZXR1cm4gcWYodCkmJih0PVgpLHZ1KGYobixxZikseWkodCwyKSl9KSxQcz1RZShmdW5jdGlvbihuKXt2YXIgdD1nbyhuKTtyZXR1cm4gdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6WCx2dShmKG4scWYpLFgsdCl9KSxxcz1RZShObyksWnM9UWUoZnVuY3Rpb24obil7dmFyIHQ9bi5sZW5ndGgscj10PjE/blt0LTFdOlg7cmV0dXJuIHI9XCJmdW5jdGlvblwiPT10eXBlb2Ygcj8obi5wb3AoKSxyKTpYLFBvKG4scil9KSxLcz1oaShmdW5jdGlvbihuKXt2YXIgdD1uLmxlbmd0aCxyPXQ/blswXTowLGU9dGhpcy5fX3dyYXBwZWRfXyx1PWZ1bmN0aW9uKHQpe3JldHVybiBZcih0LG4pfTtyZXR1cm4hKHQ+MXx8dGhpcy5fX2FjdGlvbnNfXy5sZW5ndGgpJiZlIGluc3RhbmNlb2YgV3QmJkVpKHIpPyhlPWUuc2xpY2UociwrcisodD8xOjApKSxlLl9fYWN0aW9uc19fLnB1c2goe2Z1bmM6R28sYXJnczpbdV0sdGhpc0FyZzpYfSksbmV3IFkoZSx0aGlzLl9fY2hhaW5fXykudGhydShmdW5jdGlvbihuKXtyZXR1cm4gdCYmIW4ubGVuZ3RoJiZuLnB1c2goWCksbn0pKTp0aGlzLnRocnUodSl9KSxWcz1UdShmdW5jdGlvbihuLHQscil7cGwuY2FsbChuLHIpPysrbltyXTpKcihuLHIsMSl9KSxHcz1LdShvbyksSHM9S3UoZm8pLEpzPVR1KGZ1bmN0aW9uKG4sdCxyKXtwbC5jYWxsKG4scik/bltyXS5wdXNoKHQpOkpyKG4scixbdF0pfSksWXM9UWUoZnVuY3Rpb24obix0LGUpe3ZhciB1PS0xLGk9XCJmdW5jdGlvblwiPT10eXBlb2YgdCxvPVBmKG4pP1hhKG4ubGVuZ3RoKTpbXTtyZXR1cm4gc3MobixmdW5jdGlvbihuKXtvWysrdV09aT9yKHQsbixlKTptZShuLHQsZSl9KSxvfSksUXM9VHUoZnVuY3Rpb24obix0LHIpe0pyKG4scix0KX0pLFhzPVR1KGZ1bmN0aW9uKG4sdCxyKXtuW3I/MDoxXS5wdXNoKHQpfSxmdW5jdGlvbigpe3JldHVybltbXSxbXV19KSxuaD1RZShmdW5jdGlvbihuLHQpe2lmKG51bGw9PW4pcmV0dXJuW107dmFyIHI9dC5sZW5ndGg7cmV0dXJuIHI+MSYmU2kobix0WzBdLHRbMV0pP3Q9W106cj4yJiZTaSh0WzBdLHRbMV0sdFsyXSkmJih0PVt0WzBdXSksUGUobixjZSh0LDEpLFtdKX0pLHRoPVdsfHxmdW5jdGlvbigpe3JldHVybiB4ci5EYXRlLm5vdygpfSxyaD1RZShmdW5jdGlvbihuLHQscil7dmFyIGU9aG47aWYoci5sZW5ndGgpe3ZhciB1PVAocixnaShyaCkpO2V8PXlufXJldHVybiBpaShuLGUsdCxyLHUpfSksZWg9UWUoZnVuY3Rpb24obix0LHIpe3ZhciBlPWhufHBuO2lmKHIubGVuZ3RoKXt2YXIgdT1QKHIsZ2koZWgpKTtlfD15bn1yZXR1cm4gaWkodCxlLG4scix1KX0pLHVoPVFlKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIHJlKG4sMSx0KX0pLGloPVFlKGZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gcmUobixtYyh0KXx8MCxyKX0pO1JmLkNhY2hlPWZyO3ZhciBvaD15cyhmdW5jdGlvbihuLHQpe3Q9MT09dC5sZW5ndGgmJnBoKHRbMF0pP2wodFswXSxFKHlpKCkpKTpsKGNlKHQsMSksRSh5aSgpKSk7dmFyIGU9dC5sZW5ndGg7cmV0dXJuIFFlKGZ1bmN0aW9uKHUpe2Zvcih2YXIgaT0tMSxvPVBsKHUubGVuZ3RoLGUpOysraTxvOyl1W2ldPXRbaV0uY2FsbCh0aGlzLHVbaV0pO3JldHVybiByKG4sdGhpcyx1KX0pfSksZmg9UWUoZnVuY3Rpb24obix0KXt2YXIgcj1QKHQsZ2koZmgpKTtyZXR1cm4gaWkobix5bixYLHQscil9KSxjaD1RZShmdW5jdGlvbihuLHQpe3ZhciByPVAodCxnaShjaCkpO3JldHVybiBpaShuLGRuLFgsdCxyKX0pLGFoPWhpKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIGlpKG4sd24sWCxYLFgsdCl9KSxsaD10aSh2ZSksc2g9dGkoZnVuY3Rpb24obix0KXtyZXR1cm4gbj49dH0pLGhoPXhlKGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSk/eGU6ZnVuY3Rpb24obil7cmV0dXJuIHJjKG4pJiZwbC5jYWxsKG4sXCJjYWxsZWVcIikmJiFPbC5jYWxsKG4sXCJjYWxsZWVcIil9LHBoPVhhLmlzQXJyYXksX2g9UnI/RShScik6amUsdmg9JGx8fCRhLGdoPXpyP0UoenIpOkFlLHloPUVyP0UoRXIpOkllLGRoPVNyP0UoU3IpOkVlLGJoPUxyP0UoTHIpOlNlLHdoPVdyP0UoV3IpOkxlLG1oPXRpKEJlKSx4aD10aShmdW5jdGlvbihuLHQpe3JldHVybiBuPD10fSksamg9JHUoZnVuY3Rpb24obix0KXtpZihCaSh0KXx8UGYodCkpcmV0dXJuIHZvaWQgQ3UodCxUYyh0KSxuKTtmb3IodmFyIHIgaW4gdClwbC5jYWxsKHQscikmJlpyKG4scix0W3JdKX0pLEFoPSR1KGZ1bmN0aW9uKG4sdCl7Q3UodCwkYyh0KSxuKX0pLGtoPSR1KGZ1bmN0aW9uKG4sdCxyLGUpe0N1KHQsJGModCksbixlKX0pLE9oPSR1KGZ1bmN0aW9uKG4sdCxyLGUpe0N1KHQsVGModCksbixlKX0pLEloPWhpKFlyKSxSaD1RZShmdW5jdGlvbihuKXtyZXR1cm4gbi5wdXNoKFgsb2kpLHIoa2gsWCxuKX0pLHpoPVFlKGZ1bmN0aW9uKG4pe3JldHVybiBuLnB1c2goWCxmaSkscihDaCxYLG4pfSksRWg9SHUoZnVuY3Rpb24obix0LHIpe25bdF09cn0sa2EoSWEpKSxTaD1IdShmdW5jdGlvbihuLHQscil7cGwuY2FsbChuLHQpP25bdF0ucHVzaChyKTpuW3RdPVtyXX0seWkpLExoPVFlKG1lKSxXaD0kdShmdW5jdGlvbihuLHQscil7TWUobix0LHIpfSksQ2g9JHUoZnVuY3Rpb24obix0LHIsZSl7TWUobix0LHIsZSl9KSxVaD1oaShmdW5jdGlvbihuLHQpe3ZhciByPXt9O2lmKG51bGw9PW4pcmV0dXJuIHI7dmFyIGU9ITE7dD1sKHQsZnVuY3Rpb24odCl7cmV0dXJuIHQ9YnUodCxuKSxlfHwoZT10Lmxlbmd0aD4xKSx0fSksQ3UobixfaShuKSxyKSxlJiYocj1YcihyLGZufGNufGFuLGNpKSk7Zm9yKHZhciB1PXQubGVuZ3RoO3UtLTspc3Uocix0W3VdKTtyZXR1cm4gcn0pLEJoPWhpKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/e306cWUobix0KX0pLFRoPXVpKFRjKSwkaD11aSgkYyksRGg9UHUoZnVuY3Rpb24obix0LHIpe3JldHVybiB0PXQudG9Mb3dlckNhc2UoKSxuKyhyP3RhKHQpOnQpfSksTWg9UHUoZnVuY3Rpb24obix0LHIpe3JldHVybiBuKyhyP1wiLVwiOlwiXCIpK3QudG9Mb3dlckNhc2UoKX0pLEZoPVB1KGZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gbisocj9cIiBcIjpcIlwiKSt0LnRvTG93ZXJDYXNlKCl9KSxOaD1OdShcInRvTG93ZXJDYXNlXCIpLFBoPVB1KGZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gbisocj9cIl9cIjpcIlwiKSt0LnRvTG93ZXJDYXNlKCl9KSxxaD1QdShmdW5jdGlvbihuLHQscil7cmV0dXJuIG4rKHI/XCIgXCI6XCJcIikrS2godCl9KSxaaD1QdShmdW5jdGlvbihuLHQscil7cmV0dXJuIG4rKHI/XCIgXCI6XCJcIikrdC50b1VwcGVyQ2FzZSgpfSksS2g9TnUoXCJ0b1VwcGVyQ2FzZVwiKSxWaD1RZShmdW5jdGlvbihuLHQpe3RyeXtyZXR1cm4gcihuLFgsdCl9Y2F0Y2gobil7cmV0dXJuIEpmKG4pP246bmV3IHRsKG4pfX0pLEdoPWhpKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIHUodCxmdW5jdGlvbih0KXt0PUdpKHQpLEpyKG4sdCxyaChuW3RdLG4pKX0pLG59KSxIaD1WdSgpLEpoPVZ1KCEwKSxZaD1RZShmdW5jdGlvbihuLHQpe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gbWUocixuLHQpfX0pLFFoPVFlKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiBtZShuLHIsdCl9fSksWGg9WXUobCksbnA9WXUobyksdHA9WXUoXykscnA9bmkoKSxlcD1uaSghMCksdXA9SnUoZnVuY3Rpb24obix0KXtyZXR1cm4gbit0fSwwKSxpcD1laShcImNlaWxcIiksb3A9SnUoZnVuY3Rpb24obix0KXtyZXR1cm4gbi90fSwxKSxmcD1laShcImZsb29yXCIpLGNwPUp1KGZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4qdH0sMSksYXA9ZWkoXCJyb3VuZFwiKSxscD1KdShmdW5jdGlvbihuLHQpe3JldHVybiBuLXR9LDApO3JldHVybiBLLmFmdGVyPW1mLEsuYXJ5PXhmLEsuYXNzaWduPWpoLEsuYXNzaWduSW49QWgsSy5hc3NpZ25JbldpdGg9a2gsSy5hc3NpZ25XaXRoPU9oLEsuYXQ9SWgsSy5iZWZvcmU9amYsSy5iaW5kPXJoLEsuYmluZEFsbD1HaCxLLmJpbmRLZXk9ZWgsSy5jYXN0QXJyYXk9QmYsSy5jaGFpbj1LbyxLLmNodW5rPVFpLEsuY29tcGFjdD1YaSxLLmNvbmNhdD1ubyxLLmNvbmQ9amEsSy5jb25mb3Jtcz1BYSxLLmNvbnN0YW50PWthLEsuY291bnRCeT1WcyxLLmNyZWF0ZT1rYyxLLmN1cnJ5PUFmLEsuY3VycnlSaWdodD1rZixLLmRlYm91bmNlPU9mLEsuZGVmYXVsdHM9UmgsSy5kZWZhdWx0c0RlZXA9emgsSy5kZWZlcj11aCxLLmRlbGF5PWloLEsuZGlmZmVyZW5jZT16cyxLLmRpZmZlcmVuY2VCeT1FcyxLLmRpZmZlcmVuY2VXaXRoPVNzLEsuZHJvcD10byxLLmRyb3BSaWdodD1ybyxLLmRyb3BSaWdodFdoaWxlPWVvLEsuZHJvcFdoaWxlPXVvLEsuZmlsbD1pbyxLLmZpbHRlcj1lZixLLmZsYXRNYXA9dWYsSy5mbGF0TWFwRGVlcD1vZixLLmZsYXRNYXBEZXB0aD1mZixLLmZsYXR0ZW49Y28sXG5LLmZsYXR0ZW5EZWVwPWFvLEsuZmxhdHRlbkRlcHRoPWxvLEsuZmxpcD1JZixLLmZsb3c9SGgsSy5mbG93UmlnaHQ9SmgsSy5mcm9tUGFpcnM9c28sSy5mdW5jdGlvbnM9TGMsSy5mdW5jdGlvbnNJbj1XYyxLLmdyb3VwQnk9SnMsSy5pbml0aWFsPV9vLEsuaW50ZXJzZWN0aW9uPUxzLEsuaW50ZXJzZWN0aW9uQnk9V3MsSy5pbnRlcnNlY3Rpb25XaXRoPUNzLEsuaW52ZXJ0PUVoLEsuaW52ZXJ0Qnk9U2gsSy5pbnZva2VNYXA9WXMsSy5pdGVyYXRlZT1SYSxLLmtleUJ5PVFzLEsua2V5cz1UYyxLLmtleXNJbj0kYyxLLm1hcD1zZixLLm1hcEtleXM9RGMsSy5tYXBWYWx1ZXM9TWMsSy5tYXRjaGVzPXphLEsubWF0Y2hlc1Byb3BlcnR5PUVhLEsubWVtb2l6ZT1SZixLLm1lcmdlPVdoLEsubWVyZ2VXaXRoPUNoLEsubWV0aG9kPVloLEsubWV0aG9kT2Y9UWgsSy5taXhpbj1TYSxLLm5lZ2F0ZT16ZixLLm50aEFyZz1DYSxLLm9taXQ9VWgsSy5vbWl0Qnk9RmMsSy5vbmNlPUVmLEsub3JkZXJCeT1oZixLLm92ZXI9WGgsSy5vdmVyQXJncz1vaCxLLm92ZXJFdmVyeT1ucCxLLm92ZXJTb21lPXRwLEsucGFydGlhbD1maCxLLnBhcnRpYWxSaWdodD1jaCxLLnBhcnRpdGlvbj1YcyxLLnBpY2s9QmgsSy5waWNrQnk9TmMsSy5wcm9wZXJ0eT1VYSxLLnByb3BlcnR5T2Y9QmEsSy5wdWxsPVVzLEsucHVsbEFsbD13byxLLnB1bGxBbGxCeT1tbyxLLnB1bGxBbGxXaXRoPXhvLEsucHVsbEF0PUJzLEsucmFuZ2U9cnAsSy5yYW5nZVJpZ2h0PWVwLEsucmVhcmc9YWgsSy5yZWplY3Q9dmYsSy5yZW1vdmU9am8sSy5yZXN0PVNmLEsucmV2ZXJzZT1BbyxLLnNhbXBsZVNpemU9eWYsSy5zZXQ9cWMsSy5zZXRXaXRoPVpjLEsuc2h1ZmZsZT1kZixLLnNsaWNlPWtvLEsuc29ydEJ5PW5oLEsuc29ydGVkVW5pcT1MbyxLLnNvcnRlZFVuaXFCeT1XbyxLLnNwbGl0PWhhLEsuc3ByZWFkPUxmLEsudGFpbD1DbyxLLnRha2U9VW8sSy50YWtlUmlnaHQ9Qm8sSy50YWtlUmlnaHRXaGlsZT1UbyxLLnRha2VXaGlsZT0kbyxLLnRhcD1WbyxLLnRocm90dGxlPVdmLEsudGhydT1HbyxLLnRvQXJyYXk9eWMsSy50b1BhaXJzPVRoLEsudG9QYWlyc0luPSRoLEsudG9QYXRoPVBhLEsudG9QbGFpbk9iamVjdD14YyxLLnRyYW5zZm9ybT1LYyxLLnVuYXJ5PUNmLEsudW5pb249VHMsSy51bmlvbkJ5PSRzLEsudW5pb25XaXRoPURzLEsudW5pcT1EbyxLLnVuaXFCeT1NbyxLLnVuaXFXaXRoPUZvLEsudW5zZXQ9VmMsSy51bnppcD1ObyxLLnVuemlwV2l0aD1QbyxLLnVwZGF0ZT1HYyxLLnVwZGF0ZVdpdGg9SGMsSy52YWx1ZXM9SmMsSy52YWx1ZXNJbj1ZYyxLLndpdGhvdXQ9TXMsSy53b3Jkcz14YSxLLndyYXA9VWYsSy54b3I9RnMsSy54b3JCeT1OcyxLLnhvcldpdGg9UHMsSy56aXA9cXMsSy56aXBPYmplY3Q9cW8sSy56aXBPYmplY3REZWVwPVpvLEsuemlwV2l0aD1acyxLLmVudHJpZXM9VGgsSy5lbnRyaWVzSW49JGgsSy5leHRlbmQ9QWgsSy5leHRlbmRXaXRoPWtoLFNhKEssSyksSy5hZGQ9dXAsSy5hdHRlbXB0PVZoLEsuY2FtZWxDYXNlPURoLEsuY2FwaXRhbGl6ZT10YSxLLmNlaWw9aXAsSy5jbGFtcD1RYyxLLmNsb25lPVRmLEsuY2xvbmVEZWVwPURmLEsuY2xvbmVEZWVwV2l0aD1NZixLLmNsb25lV2l0aD0kZixLLmNvbmZvcm1zVG89RmYsSy5kZWJ1cnI9cmEsSy5kZWZhdWx0VG89T2EsSy5kaXZpZGU9b3AsSy5lbmRzV2l0aD1lYSxLLmVxPU5mLEsuZXNjYXBlPXVhLEsuZXNjYXBlUmVnRXhwPWlhLEsuZXZlcnk9cmYsSy5maW5kPUdzLEsuZmluZEluZGV4PW9vLEsuZmluZEtleT1PYyxLLmZpbmRMYXN0PUhzLEsuZmluZExhc3RJbmRleD1mbyxLLmZpbmRMYXN0S2V5PUljLEsuZmxvb3I9ZnAsSy5mb3JFYWNoPWNmLEsuZm9yRWFjaFJpZ2h0PWFmLEsuZm9ySW49UmMsSy5mb3JJblJpZ2h0PXpjLEsuZm9yT3duPUVjLEsuZm9yT3duUmlnaHQ9U2MsSy5nZXQ9Q2MsSy5ndD1saCxLLmd0ZT1zaCxLLmhhcz1VYyxLLmhhc0luPUJjLEsuaGVhZD1obyxLLmlkZW50aXR5PUlhLEsuaW5jbHVkZXM9bGYsSy5pbmRleE9mPXBvLEsuaW5SYW5nZT1YYyxLLmludm9rZT1MaCxLLmlzQXJndW1lbnRzPWhoLEsuaXNBcnJheT1waCxLLmlzQXJyYXlCdWZmZXI9X2gsSy5pc0FycmF5TGlrZT1QZixLLmlzQXJyYXlMaWtlT2JqZWN0PXFmLEsuaXNCb29sZWFuPVpmLEsuaXNCdWZmZXI9dmgsSy5pc0RhdGU9Z2gsSy5pc0VsZW1lbnQ9S2YsSy5pc0VtcHR5PVZmLEsuaXNFcXVhbD1HZixLLmlzRXF1YWxXaXRoPUhmLEsuaXNFcnJvcj1KZixLLmlzRmluaXRlPVlmLEsuaXNGdW5jdGlvbj1RZixLLmlzSW50ZWdlcj1YZixLLmlzTGVuZ3RoPW5jLEsuaXNNYXA9eWgsSy5pc01hdGNoPWVjLEsuaXNNYXRjaFdpdGg9dWMsSy5pc05hTj1pYyxLLmlzTmF0aXZlPW9jLEsuaXNOaWw9Y2MsSy5pc051bGw9ZmMsSy5pc051bWJlcj1hYyxLLmlzT2JqZWN0PXRjLEsuaXNPYmplY3RMaWtlPXJjLEsuaXNQbGFpbk9iamVjdD1sYyxLLmlzUmVnRXhwPWRoLEsuaXNTYWZlSW50ZWdlcj1zYyxLLmlzU2V0PWJoLEsuaXNTdHJpbmc9aGMsSy5pc1N5bWJvbD1wYyxLLmlzVHlwZWRBcnJheT13aCxLLmlzVW5kZWZpbmVkPV9jLEsuaXNXZWFrTWFwPXZjLEsuaXNXZWFrU2V0PWdjLEsuam9pbj12byxLLmtlYmFiQ2FzZT1NaCxLLmxhc3Q9Z28sSy5sYXN0SW5kZXhPZj15byxLLmxvd2VyQ2FzZT1GaCxLLmxvd2VyRmlyc3Q9TmgsSy5sdD1taCxLLmx0ZT14aCxLLm1heD1aYSxLLm1heEJ5PUthLEsubWVhbj1WYSxLLm1lYW5CeT1HYSxLLm1pbj1IYSxLLm1pbkJ5PUphLEsuc3R1YkFycmF5PVRhLEsuc3R1YkZhbHNlPSRhLEsuc3R1Yk9iamVjdD1EYSxLLnN0dWJTdHJpbmc9TWEsSy5zdHViVHJ1ZT1GYSxLLm11bHRpcGx5PWNwLEsubnRoPWJvLEsubm9Db25mbGljdD1MYSxLLm5vb3A9V2EsSy5ub3c9dGgsSy5wYWQ9b2EsSy5wYWRFbmQ9ZmEsSy5wYWRTdGFydD1jYSxLLnBhcnNlSW50PWFhLEsucmFuZG9tPW5hLEsucmVkdWNlPXBmLEsucmVkdWNlUmlnaHQ9X2YsSy5yZXBlYXQ9bGEsSy5yZXBsYWNlPXNhLEsucmVzdWx0PVBjLEsucm91bmQ9YXAsSy5ydW5JbkNvbnRleHQ9dixLLnNhbXBsZT1nZixLLnNpemU9YmYsSy5zbmFrZUNhc2U9UGgsSy5zb21lPXdmLEsuc29ydGVkSW5kZXg9T28sSy5zb3J0ZWRJbmRleEJ5PUlvLEsuc29ydGVkSW5kZXhPZj1SbyxLLnNvcnRlZExhc3RJbmRleD16byxLLnNvcnRlZExhc3RJbmRleEJ5PUVvLEsuc29ydGVkTGFzdEluZGV4T2Y9U28sSy5zdGFydENhc2U9cWgsSy5zdGFydHNXaXRoPXBhLEsuc3VidHJhY3Q9bHAsSy5zdW09WWEsSy5zdW1CeT1RYSxLLnRlbXBsYXRlPV9hLEsudGltZXM9TmEsSy50b0Zpbml0ZT1kYyxLLnRvSW50ZWdlcj1iYyxLLnRvTGVuZ3RoPXdjLEsudG9Mb3dlcj12YSxLLnRvTnVtYmVyPW1jLEsudG9TYWZlSW50ZWdlcj1qYyxLLnRvU3RyaW5nPUFjLEsudG9VcHBlcj1nYSxLLnRyaW09eWEsSy50cmltRW5kPWRhLEsudHJpbVN0YXJ0PWJhLEsudHJ1bmNhdGU9d2EsSy51bmVzY2FwZT1tYSxLLnVuaXF1ZUlkPXFhLEsudXBwZXJDYXNlPVpoLEsudXBwZXJGaXJzdD1LaCxLLmVhY2g9Y2YsSy5lYWNoUmlnaHQ9YWYsSy5maXJzdD1obyxTYShLLGZ1bmN0aW9uKCl7dmFyIG49e307cmV0dXJuIGFlKEssZnVuY3Rpb24odCxyKXtwbC5jYWxsKEsucHJvdG90eXBlLHIpfHwobltyXT10KX0pLG59KCkse2NoYWluOiExfSksSy5WRVJTSU9OPVwiNC4xNy40XCIsdShbXCJiaW5kXCIsXCJiaW5kS2V5XCIsXCJjdXJyeVwiLFwiY3VycnlSaWdodFwiLFwicGFydGlhbFwiLFwicGFydGlhbFJpZ2h0XCJdLGZ1bmN0aW9uKG4pe0tbbl0ucGxhY2Vob2xkZXI9S30pLHUoW1wiZHJvcFwiLFwidGFrZVwiXSxmdW5jdGlvbihuLHQpe1d0LnByb3RvdHlwZVtuXT1mdW5jdGlvbihyKXtyPXI9PT1YPzE6TmwoYmMociksMCk7dmFyIGU9dGhpcy5fX2ZpbHRlcmVkX18mJiF0P25ldyBXdCh0aGlzKTp0aGlzLmNsb25lKCk7cmV0dXJuIGUuX19maWx0ZXJlZF9fP2UuX190YWtlQ291bnRfXz1QbChyLGUuX190YWtlQ291bnRfXyk6ZS5fX3ZpZXdzX18ucHVzaCh7c2l6ZTpQbChyLExuKSx0eXBlOm4rKGUuX19kaXJfXzwwP1wiUmlnaHRcIjpcIlwiKX0pLGV9LFd0LnByb3RvdHlwZVtuK1wiUmlnaHRcIl09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMucmV2ZXJzZSgpW25dKHQpLnJldmVyc2UoKX19KSx1KFtcImZpbHRlclwiLFwibWFwXCIsXCJ0YWtlV2hpbGVcIl0sZnVuY3Rpb24obix0KXt2YXIgcj10KzEsZT1yPT1Pbnx8Mz09cjtXdC5wcm90b3R5cGVbbl09ZnVuY3Rpb24obil7dmFyIHQ9dGhpcy5jbG9uZSgpO3JldHVybiB0Ll9faXRlcmF0ZWVzX18ucHVzaCh7aXRlcmF0ZWU6eWkobiwzKSx0eXBlOnJ9KSx0Ll9fZmlsdGVyZWRfXz10Ll9fZmlsdGVyZWRfX3x8ZSx0fX0pLHUoW1wiaGVhZFwiLFwibGFzdFwiXSxmdW5jdGlvbihuLHQpe3ZhciByPVwidGFrZVwiKyh0P1wiUmlnaHRcIjpcIlwiKTtXdC5wcm90b3R5cGVbbl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tyXSgxKS52YWx1ZSgpWzBdfX0pLHUoW1wiaW5pdGlhbFwiLFwidGFpbFwiXSxmdW5jdGlvbihuLHQpe3ZhciByPVwiZHJvcFwiKyh0P1wiXCI6XCJSaWdodFwiKTtXdC5wcm90b3R5cGVbbl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fX2ZpbHRlcmVkX18/bmV3IFd0KHRoaXMpOnRoaXNbcl0oMSl9fSksV3QucHJvdG90eXBlLmNvbXBhY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5maWx0ZXIoSWEpfSxXdC5wcm90b3R5cGUuZmluZD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5maWx0ZXIobikuaGVhZCgpfSxXdC5wcm90b3R5cGUuZmluZExhc3Q9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMucmV2ZXJzZSgpLmZpbmQobil9LFd0LnByb3RvdHlwZS5pbnZva2VNYXA9UWUoZnVuY3Rpb24obix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP25ldyBXdCh0aGlzKTp0aGlzLm1hcChmdW5jdGlvbihyKXtyZXR1cm4gbWUocixuLHQpfSl9KSxXdC5wcm90b3R5cGUucmVqZWN0PWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLmZpbHRlcih6Zih5aShuKSkpfSxXdC5wcm90b3R5cGUuc2xpY2U9ZnVuY3Rpb24obix0KXtuPWJjKG4pO3ZhciByPXRoaXM7cmV0dXJuIHIuX19maWx0ZXJlZF9fJiYobj4wfHx0PDApP25ldyBXdChyKToobjwwP3I9ci50YWtlUmlnaHQoLW4pOm4mJihyPXIuZHJvcChuKSksdCE9PVgmJih0PWJjKHQpLHI9dDwwP3IuZHJvcFJpZ2h0KC10KTpyLnRha2UodC1uKSkscil9LFd0LnByb3RvdHlwZS50YWtlUmlnaHRXaGlsZT1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5yZXZlcnNlKCkudGFrZVdoaWxlKG4pLnJldmVyc2UoKX0sV3QucHJvdG90eXBlLnRvQXJyYXk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50YWtlKExuKX0sYWUoV3QucHJvdG90eXBlLGZ1bmN0aW9uKG4sdCl7dmFyIHI9L14oPzpmaWx0ZXJ8ZmluZHxtYXB8cmVqZWN0KXxXaGlsZSQvLnRlc3QodCksZT0vXig/OmhlYWR8bGFzdCkkLy50ZXN0KHQpLHU9S1tlP1widGFrZVwiKyhcImxhc3RcIj09dD9cIlJpZ2h0XCI6XCJcIik6dF0saT1lfHwvXmZpbmQvLnRlc3QodCk7dSYmKEsucHJvdG90eXBlW3RdPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fX3dyYXBwZWRfXyxvPWU/WzFdOmFyZ3VtZW50cyxmPXQgaW5zdGFuY2VvZiBXdCxjPW9bMF0sYT1mfHxwaCh0KSxsPWZ1bmN0aW9uKG4pe3ZhciB0PXUuYXBwbHkoSyxzKFtuXSxvKSk7cmV0dXJuIGUmJmg/dFswXTp0fTthJiZyJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBjJiYxIT1jLmxlbmd0aCYmKGY9YT0hMSk7dmFyIGg9dGhpcy5fX2NoYWluX18scD0hIXRoaXMuX19hY3Rpb25zX18ubGVuZ3RoLF89aSYmIWgsdj1mJiYhcDtpZighaSYmYSl7dD12P3Q6bmV3IFd0KHRoaXMpO3ZhciBnPW4uYXBwbHkodCxvKTtyZXR1cm4gZy5fX2FjdGlvbnNfXy5wdXNoKHtmdW5jOkdvLGFyZ3M6W2xdLHRoaXNBcmc6WH0pLG5ldyBZKGcsaCl9cmV0dXJuIF8mJnY/bi5hcHBseSh0aGlzLG8pOihnPXRoaXMudGhydShsKSxfP2U/Zy52YWx1ZSgpWzBdOmcudmFsdWUoKTpnKX0pfSksdShbXCJwb3BcIixcInB1c2hcIixcInNoaWZ0XCIsXCJzb3J0XCIsXCJzcGxpY2VcIixcInVuc2hpZnRcIl0sZnVuY3Rpb24obil7dmFyIHQ9Y2xbbl0scj0vXig/OnB1c2h8c29ydHx1bnNoaWZ0KSQvLnRlc3Qobik/XCJ0YXBcIjpcInRocnVcIixlPS9eKD86cG9wfHNoaWZ0KSQvLnRlc3Qobik7Sy5wcm90b3R5cGVbbl09ZnVuY3Rpb24oKXt2YXIgbj1hcmd1bWVudHM7aWYoZSYmIXRoaXMuX19jaGFpbl9fKXt2YXIgdT10aGlzLnZhbHVlKCk7cmV0dXJuIHQuYXBwbHkocGgodSk/dTpbXSxuKX1yZXR1cm4gdGhpc1tyXShmdW5jdGlvbihyKXtyZXR1cm4gdC5hcHBseShwaChyKT9yOltdLG4pfSl9fSksYWUoV3QucHJvdG90eXBlLGZ1bmN0aW9uKG4sdCl7dmFyIHI9S1t0XTtpZihyKXt2YXIgZT1yLm5hbWUrXCJcIjsodHNbZV18fCh0c1tlXT1bXSkpLnB1c2goe25hbWU6dCxmdW5jOnJ9KX19KSx0c1tHdShYLHBuKS5uYW1lXT1be25hbWU6XCJ3cmFwcGVyXCIsZnVuYzpYfV0sV3QucHJvdG90eXBlLmNsb25lPXF0LFd0LnByb3RvdHlwZS5yZXZlcnNlPVp0LFd0LnByb3RvdHlwZS52YWx1ZT1LdCxLLnByb3RvdHlwZS5hdD1LcyxLLnByb3RvdHlwZS5jaGFpbj1IbyxLLnByb3RvdHlwZS5jb21taXQ9Sm8sSy5wcm90b3R5cGUubmV4dD1ZbyxLLnByb3RvdHlwZS5wbGFudD1YbyxLLnByb3RvdHlwZS5yZXZlcnNlPW5mLEsucHJvdG90eXBlLnRvSlNPTj1LLnByb3RvdHlwZS52YWx1ZU9mPUsucHJvdG90eXBlLnZhbHVlPXRmLEsucHJvdG90eXBlLmZpcnN0PUsucHJvdG90eXBlLmhlYWQsemwmJihLLnByb3RvdHlwZVt6bF09UW8pLEt9KCk7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZcIm9iamVjdFwiPT10eXBlb2YgZGVmaW5lLmFtZCYmZGVmaW5lLmFtZD8oeHIuXz0kcixkZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gJHJ9KSk6QXI/KChBci5leHBvcnRzPSRyKS5fPSRyLGpyLl89JHIpOnhyLl89JHJ9KS5jYWxsKHRoaXMpOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JaQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyTUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=