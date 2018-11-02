(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  \n  <div >\n    <router-outlet></router-outlet>\n  </div>\n  \n  \n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'jitsiUI';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<body>\n  <img id=\"logo\" src=\"assets/img/logo_new.png\"> \n  <div id=\"settingsgrid\" *ngIf=\"showsettings\">\n    <p id=\"displaytext\">Display / profile settings coming soon!</p>\n  </div>\n  <div id=\"languages\" *ngIf=\"showlanguage\">\n      <p id=\"languagetext\">Languages coming soon</p>\n  </div>\n  <i class=\"material-icons\" id=\"settings\" (click)=\"showsettings = !showsettings;\">settings</i>\n  \n  \n  <div id=\"biggrid\">\n  <div id=\"titlelarge\"><span class=\"elgreen\">Secure video conferencing</span> for you<br> and your organization.</div>\n  <div id=\"titlesmall\">Connect with your team, your clients, and more <span class=\"elblue\">without ever leaving EverLeagues.</span></div>\n  <div class=\"meetcontainer\">\n    <p id=\"start\">Start a new conference by entering any name:</p>\n    <div id=\"enter\"></div>\n    <div id=\"begin\">\n      <div id=\"begintext\">Begin</div>\n    </div>\n  </div>\n</div>\n<div id=\"languagebar\">\n  <div id=\"language\">English</div>\n  <div id=\"languagebutton\" (click)=\"showlanguage = !showlanguage;\"></div>\n</div>\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logo {\n  margin-left: 30px;\n  margin-top: 30px;\n  width: 95px;\n  display: inline-block; }\n\n#titlelarge {\n  color: white;\n  text-align: center;\n  font-size: 36px;\n  font-family: \"Pacifico\";\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 1;\n  grid-area: 1 / 1 / span 1 / span 1; }\n\n#titlesmall {\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin-top: 34px;\n  font-family: \"Lato\";\n  -ms-grid-row: 2;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 1;\n  grid-area: 2 / 1 / span 1 / span 1; }\n\n#biggrid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 40% 40% 20%;\n  -ms-grid-columns: 100%;\n      grid-template: 40% 40% 20% / 100%; }\n\n.meetcontainer {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 50% 50%;\n  -ms-grid-columns: 80% 20%;\n      grid-template: 50% 50% / 80% 20%;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 5px;\n  width: 50%;\n  height: 100px;\n  background-color: white;\n  color: black;\n  font-family: \"Lato\";\n  -ms-grid-row: 3;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 1;\n  grid-area: 3 / 1 / span 1 / span 1; }\n\n#start {\n  font-size: 15x;\n  margin-left: 5%;\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 1;\n  grid-area: 1 / 1 / span 1 / span 1; }\n\n#enter {\n  border-bottom: solid 1px #606060;\n  height: 60%;\n  margin-left: 4%;\n  width: 80%;\n  -ms-grid-row: 2;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: 2 / 1 / span 1 / span 2; }\n\n#begin {\n  width: 60px;\n  height: 45px;\n  margin-top: 20%;\n  margin-left: 35%;\n  background-color: #c9da2b;\n  border-radius: 5px;\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  -ms-grid-column: 2;\n  -ms-grid-column-span: 1;\n  grid-area: 1 / 2 / span 1 / span 1; }\n\n#begintext {\n  margin-top: 11px;\n  text-align: center;\n  font-family: \"Lato\";\n  font-weight: bold;\n  color: #00b0c1; }\n\n#settings {\n  margin-left: 83%;\n  font-size: 35px;\n  color: white;\n  display: inline-block; }\n\n#settingsgrid {\n  position: absolute;\n  margin-left: 400px;\n  margin-top: 70px;\n  background-color: white;\n  height: 300px;\n  width: 500px;\n  border: solid 3px black; }\n\n#displaytext {\n  text-align: center;\n  font-family: \"Lato\"; }\n\n#languagetext {\n  text-align: center;\n  font-family: \"Lato\"; }\n\n#languages {\n  position: absolute;\n  margin-left: 1110px;\n  margin-top: 240px;\n  background-color: white;\n  height: 150px;\n  width: 80px;\n  border: solid 3px black; }\n\n#languagebar {\n  height: 30px;\n  width: 80px;\n  margin-left: 88.5%;\n  margin-top: 6%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 100%;\n  -ms-grid-columns: 80% 20%;\n      grid-template: 100% / 80% 20%; }\n\n#language {\n  margin-top: 7%;\n  font-family: \"Lato\";\n  font-size: 18px;\n  color: white;\n  display: inline-block;\n  grid: 1 / 1 / span 1 / span 1; }\n\n#languagebutton {\n  grid: 1 / 2 / span 1 / span 1;\n  width: 0;\n  height: 0;\n  margin-top: 10px;\n  margin-left: 5px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 10px solid white; }\n\n.elblue {\n  color: #00b0c1; }\n\n.elgreen {\n  color: #c9da2b; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.showsettings = false;
        this.showlanguage = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tracy\jitsiUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map