(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../researcher/researcher.module": [
		"./src/app/researcher/researcher.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'signin', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"] },
    { path: 'signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"] },
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n\n"

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
        this.title = 'Citizen';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _no_access_no_access_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./no-access/no-access.component */ "./src/app/no-access/no-access.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_auth_services_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth-services.service */ "./src/app/services/auth-services.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lazy-load/lazy-load.module */ "./src/app/lazy-load/lazy-load.module.ts");
/* harmony import */ var _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/equal-validator.directive */ "./src/app/directives/equal-validator.directive.ts");
/* harmony import */ var _wildcard_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./wildcard-routing.module */ "./src/app/wildcard-routing.module.ts");
/* harmony import */ var _helpers_token_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helpers/token.interceptor */ "./src/app/helpers/token.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./helpers/error.interceptor */ "./src/app/helpers/error.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Application core imports








// Component Imports





// Module Imports




// import { ResearcherComponent } from './researcher/researcher.component';





// Interceptors


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"],
                _no_access_no_access_component__WEBPACK_IMPORTED_MODULE_10__["NoAccessComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__["NavBarComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_20__["EqualValidator"]
                //ResearcherComponent
                // ResearcherComponent
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_19__["LazyLoadModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _wildcard_routing_module__WEBPACK_IMPORTED_MODULE_21__["WildCardRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"]
            ],
            providers: [
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"],
                _services_auth_services_service__WEBPACK_IMPORTED_MODULE_16__["AuthServices"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _helpers_token_interceptor__WEBPACK_IMPORTED_MODULE_22__["TokenInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_23__["ErrorInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidemenu/sidemenu.component */ "./src/app/core/sidemenu/sidemenu.component.ts");
/* harmony import */ var _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidemenu-item/sidemenu-item.component */ "./src/app/core/sidemenu-item/sidemenu-item.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./toolbar-notification/toolbar-notification.component */ "./src/app/core/toolbar-notification/toolbar-notification.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/core/toolbar/toolbar.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/core/search-bar/search-bar.component.ts");
/* harmony import */ var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fullscreen/fullscreen.component */ "./src/app/core/fullscreen/fullscreen.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/core/sidebar/sidebar.component.ts");
/* harmony import */ var _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-menu/user-menu.component */ "./src/app/core/user-menu/user-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: true
};
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__["SidemenuComponent"],
                _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuItemComponent"],
                _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__["ToolbarNotificationComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__["SearchBarComponent"],
                _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__["FullscreenComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
                _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserMenuComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
            ],
            exports: [
                _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__["SidemenuComponent"],
                _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuItemComponent"],
                _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__["ToolbarNotificationComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__["SearchBarComponent"],
                _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__["FullscreenComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
                _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserMenuComponent"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/fullscreen/fullscreen.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/fullscreen/fullscreen.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [fxHide]=\"true\" [fxHide.gt-xs]=\"false\" (click)=\"toggleFullscreen()\">\n    <mat-icon *ngIf=\"!isFullscreen\">fullscreen</mat-icon>\n    <mat-icon *ngIf=\"isFullscreen\">fullscreen_exit</mat-icon>\n</button>"

/***/ }),

/***/ "./src/app/core/fullscreen/fullscreen.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/fullscreen/fullscreen.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZnVsbHNjcmVlbi9mdWxsc2NyZWVuLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/fullscreen/fullscreen.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/fullscreen/fullscreen.component.ts ***!
  \*********************************************************/
/*! exports provided: FullscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenComponent", function() { return FullscreenComponent; });
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

//import * as screenfull from 'screenfull';
var FullscreenComponent = /** @class */ (function () {
    function FullscreenComponent() {
        this.isFullscreen = false;
    }
    FullscreenComponent.prototype.ngOnInit = function () {
    };
    FullscreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-fullscreen',
            template: __webpack_require__(/*! ./fullscreen.component.html */ "./src/app/core/fullscreen/fullscreen.component.html"),
            styles: [__webpack_require__(/*! ./fullscreen.component.scss */ "./src/app/core/fullscreen/fullscreen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FullscreenComponent);
    return FullscreenComponent;
}());



/***/ }),

/***/ "./src/app/core/search-bar/search-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/search-bar/search-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"search\"  [ngClass]=\"{'search-open': open == true}\"> \n  <input matInput placeholder=\"Search\" autocomplete=\"off\" (focus)=\"bigMenu = true\" (focusout)=\"bigMenu = false\">\n</mat-form-field>"

/***/ }),

/***/ "./src/app/core/search-bar/search-bar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/search-bar/search-bar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  width: 0;\n  overflow: hidden;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.4s cubic-bezier(0.35, 0, 0.25, 1);\n  margin-top: 7px; }\n\n.search.search-open {\n  width: 250px;\n  visibility: visible;\n  opacity: 1;\n  margin-top: 11px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zZWFyY2gtYmFyL0M6XFxVc2Vyc1xcTWluaGF6XFxEb2N1bWVudHNcXGFuZ3VsYXJUZXN0c1xcY2l0aXplbi1mcm9udC9zcmNcXGFwcFxcY29yZVxcc2VhcmNoLWJhclxcc2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFNBQVE7RUFDUixpQkFBZ0I7RUFDaEIsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixvREFBNkM7RUFDN0MsZ0JBQWUsRUFDZjs7QUFFRDtFQUNDLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsV0FBVTtFQUNWLGlCQUFnQixFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaCB7XG5cdHdpZHRoOiAwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRvcGFjaXR5OiAwO1xuXHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdHRyYW5zaXRpb246IGFsbCAuNHMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtcblx0bWFyZ2luLXRvcDogN3B4O1xufVxuXG4uc2VhcmNoLnNlYXJjaC1vcGVuIHtcblx0d2lkdGg6IDI1MHB4O1xuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHRvcGFjaXR5OiAxO1xuXHRtYXJnaW4tdG9wOiAxMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/search-bar/search-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/search-bar/search-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
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

var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
    }
    SearchBarComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchBarComponent.prototype, "open", void 0);
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/core/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/core/search-bar/search-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n    <mat-tab label=\"Overview\">\n\n        <div class=\"sidebar\">\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"padding: 30px 0; background: url('./assets/images/bg/city1.jpg');\">\n                <div style=\"width: 100%; height: 22%; position: absolute;background: #17161642;z-index: 1\"></div>\n                <div class=\"mat-display-2\" style=\"margin: 0; color: white;z-index: 2\">{{today | date:'shortTime'}}</div>\n                <div class=\"mat-subheading-2\" style=\"margin: 0;color: white;z-index: 2\">{{today | date:'EEEE'}}, {{today | date:'MMMM'}} {{today | date:'dd'}}\n                </div>\n            </div>\n\n\n            <mat-divider></mat-divider>\n\n            <h3 class=\"mat-subheading-2\" style=\"margin: 10px 14px 0;\">Upcoming Events</h3>\n            <mat-nav-list>\n                <div *ngFor=\"let event of events;\">\n                    <mat-list-item>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-ripple>\n                            <div fxLayout=\"column\">\n                                <div class=\"mat-ubheading-2\" style=\"margin: 0; font-weight: bold;\">{{ event.title }}</div>\n                                <div style=\"font-size: 12px;\">{{ event.time }}</div>\n                            </div>\n                        </div>\n                    </mat-list-item>\n                </div>\n            </mat-nav-list>\n\n\n\n            <mat-divider></mat-divider>\n\n            <mat-nav-list>\n                <h3 class=\"mat-subheading-2\" style=\"margin: 10px 14px 0;\">Todo-List</h3>\n                <div *ngFor=\"let todolist of todolists;\">\n                    <mat-list-item>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-ripple>\n                            <div class=\"title\" fxLayout=\"column\">\n                                <div class=\"mat-ubheading-2\" style=\"margin: 0; font-weight: bold;\">{{ todolist.title }}</div>\n                                <div style=\"font-size: 12px;\">{{ todolist.time }}</div>\n                            </div>\n                        </div>\n                    </mat-list-item>\n                </div>\n            </mat-nav-list>\n\n            <mat-divider></mat-divider>\n\n\n        </div>\n    </mat-tab>\n\n    <mat-tab label=\"Notifications\">\n        <div class=\"sidebar\">\n            <div>\n                <h3 style=\"margin: 10px 14px 0;\">Friends</h3>\n\n                <mat-list>\n                    <mat-list-item *ngFor=\"let message of messages\">\n                        <img matListAvatar src=\"assets/images/avatars/friend1.jpeg\" alt=\"...\">\n                        <h3 matLine style=\"margin: 0; font-weight: bold;\"> {{message.from}} </h3>\n                        <p matLine>\n                            <span> {{message.subject}} </span>\n                            <span> -- {{message.content}} </span>\n                        </p>\n                    </mat-list-item>\n                </mat-list>\n\n            </div>\n        </div>\n\n    </mat-tab>\n</mat-tab-group>\n\n<mat-divider></mat-divider>\n\n<mat-nav-list>\n    <div>\n        <h3 class=\"mat-subheading-2\" style=\"margin: 10px 14px 0;\">Server Statistics</h3>\n        <div>\n            <mat-list-item>\n                <h5>CPU Load</h5>\n                <mat-progress-bar [color]=\"'accent'\" [mode]=\"'buffer'\" [value]=\"'70'\" [bufferValue]=\"100\">></mat-progress-bar>\n            </mat-list-item>\n        </div>\n\n\n        <div>\n            <mat-list-item>\n                <h5>RAM Usage</h5>\n                <mat-progress-bar [color]=\"'primary'\" [mode]=\"'buffer'\" [value]=\"'47'\" [bufferValue]=\"100\"></mat-progress-bar>\n            </mat-list-item>\n        </div>\n\n\n        <div>\n            <mat-list-item>\n                <h5>CPU Temp</h5>\n                <mat-progress-bar [color]=\"'warn'\" [mode]=\"'buffer'\" [value]=\"'43'\" [bufferValue]=\"100\"></mat-progress-bar>\n            </mat-list-item>\n        </div>\n\n    </div>\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin-top: 2px; }\n\n.example-margin {\n  margin: 0 10px; }\n\n.today {\n  width: 100%;\n  height: 22%;\n  position: absolute;\n  background: '#17161642';\n  z-index: 1; }\n\n.today-bg {\n  padding: 30px 0; }\n\n.today-time {\n  margin: 0;\n  color: white;\n  z-index: 2; }\n\n.today-date {\n  margin: 0;\n  color: white;\n  z-index: 2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaWRlYmFyL0M6XFxVc2Vyc1xcTWluaGF6XFxEb2N1bWVudHNcXGFuZ3VsYXJUZXN0c1xcY2l0aXplbi1mcm9udC9zcmNcXGFwcFxcY29yZVxcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGdCQUFlLEVBRWY7O0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDQyxZQUFXO0VBQ1gsWUFBVztFQUNYLG1CQUFrQjtFQUNsQix3QkFBdUI7RUFDdkIsV0FBVSxFQUNWOztBQUNEO0VBQ0MsZ0JBQWUsRUFFZjs7QUFDRDtFQUNDLFVBQVM7RUFDVCxhQUFZO0VBQ1osV0FBVSxFQUNWOztBQUNEO0VBQ0MsVUFBUztFQUNULGFBQVk7RUFDWixXQUFVLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFye1xuICB9XG4uY29udGVudHtcblx0bWFyZ2luLXRvcDogMnB4O1xuXG59XG4uZXhhbXBsZS1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi50b2RheXtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMjIlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJhY2tncm91bmQ6ICcjMTcxNjE2NDInO1xuXHR6LWluZGV4OiAxO1xufVxuLnRvZGF5LWJne1xuXHRwYWRkaW5nOiAzMHB4IDA7XG5cdC8vYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnL2NpdHkxLmpwZycpO1xufVxuLnRvZGF5LXRpbWV7XG5cdG1hcmdpbjogMDtcblx0Y29sb3I6IHdoaXRlO1xuXHR6LWluZGV4OiAyO1xufVxuLnRvZGF5LWRhdGV7XG5cdG1hcmdpbjogMDtcblx0Y29sb3I6IHdoaXRlO1xuXHR6LWluZGV4OiAyO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.today = Date.now();
        // public bufferValue;
        this.events = [
            {
                id: 'id',
                title: 'Business Meeting',
                time: '05:00 PM',
                state: 'state'
            },
            {
                id: 'id',
                title: 'Ask for a Vacation',
                time: '05:00 PM',
                state: 'state'
            },
            {
                id: 'id',
                title: 'Dinner with Micheal',
                time: '05:00 PM',
                state: 'state'
            },
            {
                id: 'id',
                title: 'Deadline for Project ABC',
                time: '05:00 PM',
                state: 'state'
            },
        ];
        this.todolists = [
            {
                id: 'id',
                title: 'Get to know Angular more',
                time: 'Added:4 days ago',
            },
            {
                id: 'id',
                title: 'Configure new Router',
                time: 'Added:4 days ago',
            },
            {
                id: 'id',
                title: 'Invite Joy to play Carroms',
                time: 'Added:4 days ago',
            },
            {
                id: 'id',
                title: 'Check SRS of Project X',
                time: 'Added:4 days ago',
            },
        ];
        this.messages = [
            { from: 'Catherin', subject: 'Shopping', content: 'hi there??' },
            { from: 'Jack', subject: 'Function', content: 'yes' },
            { from: 'Karina', subject: 'Get together', content: 'nice' },
            { from: 'Micheal', subject: 'Trip', content: 'ya.. I will' },
            { from: 'Ashik', subject: 'Meeting', content: 'Time??' },
            { from: 'Joy', subject: 'Party', content: 'Lets enjoy' },
        ];
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/core/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/core/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/core/sidemenu-item/sidemenu-item.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/core/sidemenu-item/sidemenu-item.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list [style.maxHeight]=\"(menu.open)?'1200px':'48px'\"  [ngClass]=\"{'secondaryMenu': secondaryMenu, 'primary': !secondaryMenu}\">\n    <mat-list-item *ngIf = \"menu.link==false\" (click)=\"menu.open = !menu.open\" >\n        <mat-icon matListIcon iconsmall  >{{menu.icon}} </mat-icon>\n        <h3 matLine *ngIf=\"!iconOnly\">{{ menu.name }} </h3>\n        <mat-chip-list *ngIf=\"menu?.chip && !iconOnly\">\n            <mat-chip >{{menu?.chip?.value}} </mat-chip>\n        </mat-chip-list>        \n        <mat-icon *ngIf=\"chechForChildMenu()\" class=\"sidenav-dropdown-indicator rotate \" [ngClass]=\"{'indicateOpen':menu.open}\"> expand_more</mat-icon>\n    </mat-list-item>\n\n    <mat-list-item *ngIf = \"menu.link!=false\" (click)=\"menu.open = !menu.open\" [routerLink]=\"[menu.link]\">\n    \t<mat-icon matListIcon iconsmall  >{{menu.icon}} </mat-icon>\n        <h3 matLine *ngIf=\"!iconOnly\">{{ menu.name }} </h3>\n    </mat-list-item>\n\n    <cdk-sidemenu-item *ngFor=\"let submenu of menu?.sub\" [menu]=\"submenu\" [iconOnly]=\"iconOnly\" [secondaryMenu]=\"true\"> </cdk-sidemenu-item>\n\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/core/sidemenu-item/sidemenu-item.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/sidemenu-item/sidemenu-item.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2lkZW1lbnUtaXRlbS9zaWRlbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/sidemenu-item/sidemenu-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/sidemenu-item/sidemenu-item.component.ts ***!
  \***************************************************************/
/*! exports provided: SidemenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuItemComponent", function() { return SidemenuItemComponent; });
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

var SidemenuItemComponent = /** @class */ (function () {
    function SidemenuItemComponent() {
        this.secondaryMenu = false;
    }
    SidemenuItemComponent.prototype.ngOnInit = function () {
    };
    SidemenuItemComponent.prototype.openLink = function () {
        this.menu.open = this.menu.open;
    };
    SidemenuItemComponent.prototype.chechForChildMenu = function () {
        return (this.menu && this.menu.sub) ? true : false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidemenuItemComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidemenuItemComponent.prototype, "iconOnly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidemenuItemComponent.prototype, "secondaryMenu", void 0);
    SidemenuItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-sidemenu-item',
            template: __webpack_require__(/*! ./sidemenu-item.component.html */ "./src/app/core/sidemenu-item/sidemenu-item.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu-item.component.scss */ "./src/app/core/sidemenu-item/sidemenu-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidemenuItemComponent);
    return SidemenuItemComponent;
}());



/***/ }),

/***/ "./src/app/core/sidemenu/menu-element.ts":
/*!***********************************************!*\
  !*** ./src/app/core/sidemenu/menu-element.ts ***!
  \***********************************************/
/*! exports provided: menus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menus", function() { return menus; });
var menus = [
    {
        'name': 'Observations',
        'icon': 'list',
        'link': false,
        'open': true,
        'sub': [
            {
                'name': 'Dashboard',
                'icon': 'dashboard',
                'link': '/citizenpanel',
                'open': false,
            },
            {
                'name': 'Create Observation',
                'icon': 'add_circle_outline',
                'link': 'createobservation',
                'open': false,
            },
            {
                'name': 'My List',
                'icon': 'format_list_bulleted',
                'link': 'list',
                'open': false,
            },
            {
                'name': 'Explore Observations',
                'icon': 'explore',
                'link': 'explore',
                'open': false,
            }
        ]
    },
    {
        'name': 'Graphs',
        'icon': 'pie_chart_outlined',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Create Graph',
                'icon': 'add_circle_outline',
                'link': 'graph/create',
                'open': false,
            },
            {
                'name': 'My Graphs',
                'icon': 'show_chart',
                'open': false,
                'link': 'graphs/list',
            },
            {
                'name': 'Explore Graphs',
                'icon': 'explore',
                'open': false,
                'link': 'graphs/explore',
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/core/sidemenu/sidemenu.component.html":
/*!*******************************************************!*\
  !*** ./src/app/core/sidemenu/sidemenu.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<perfect-scrollbar style=\"height: 78%\" [config] = \"config\">\r\n    <div fxLayout=\"column\" >\r\n        <!-- <div *ngIf=\"!iconOnly\" fxLayoutAlign=\"space-around center\" [style.margin]=\"'10px 0px'\" >\r\n          <img width=\"100\" [style.borderRadius]=\"'50%'\" src=\"./assets/user-image.jpg\">\r\n        </div>\r\n        <div *ngIf=\"iconOnly\" style=\"height: 100px;\" fxLayoutAlign=\"space-around center\"  >\r\n            <img width=\"50\" [style.borderRadius]=\"'50%'\" src=\"./assets/user-image.jpg\">\r\n        </div> -->\r\n        <cdk-sidemenu-item *ngFor=\"let menu of menus\" [menu]=\"menu\" [iconOnly]=\"iconOnly\"> </cdk-sidemenu-item>\r\n    </div>\r\n    \r\n</perfect-scrollbar>\r\n"

/***/ }),

/***/ "./src/app/core/sidemenu/sidemenu.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/core/sidemenu/sidemenu.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2lkZW1lbnUvc2lkZW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/sidemenu/sidemenu.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/sidemenu/sidemenu.component.ts ***!
  \*****************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-element */ "./src/app/core/sidemenu/menu-element.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent() {
        this.iconOnly = false;
        this.config = {};
        this.menus = _menu_element__WEBPACK_IMPORTED_MODULE_1__["menus"];
    }
    SidemenuComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidemenuComponent.prototype, "iconOnly", void 0);
    SidemenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/core/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.scss */ "./src/app/core/sidemenu/sidemenu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/core/toolbar-notification/toolbar-notification.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/core/toolbar-notification/toolbar-notification.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-notification-container\">\n\t<button mat-icon-button (click)=\"isOpen = !isOpen;\" [ngClass]=\"[cssPrefix+'-btn']\" [class.open]=\"isOpen\">\n    \t<mat-icon>notifications_none</mat-icon>\n    \t<span class=\"badge\" *ngIf=\"notifications && notifications?.length !== 0\">{{ notifications?.length }}</span>\n  </button>\n\n\n\t<div class=\"dropdown mat-elevation-z4\" [class.open]=\"isOpen\">\n\n\t<div class=\"card\">\n      \t<div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        \t<div class=\"title\">\n         \t\t <div class=\"name\">Notifications</div>\n          \t\t<div class=\"extra\">\nYou have {{ notifications?.length }} new notifications</div>\n        \t</div>\n        \t<button type=\"button\" mat-icon-button>\n          \t\t<mat-icon class=\"icon\">settings</mat-icon>\n        \t</button>\n      \t</div>\n      \t<div *ngIf=\"notifications?.length !== 0; then thenBlock else elseBlock;\"></div>\n      \t<div class=\"footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        \t<div class=\"action\">Mark all as read</div>\n    \t</div>\n    </div>\n\n\t</div>\n\n</div>\n\n<ng-template #thenBlock>\n  <perfect-scrollbar class=\"content\">\n    <div *ngFor=\"let notification of notifications; last as isLast\">\n      <div class=\"notification\" fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-ripple>\n        <mat-icon class=\"icon\">notifications</mat-icon>\n        <div class=\"title\" fxLayout=\"column\">\n          <div class=\"name\">{{ notification.title }}</div>\n          <div class=\"time\">{{ notification.lastTime }}</div>\n        </div>\n        <span fxFlex></span>\n        <button type=\"button\" mat-icon-button (click)=\"delete(notification)\">\n          <mat-icon class=\"close\">close</mat-icon>\n        </button>\n      </div>\n      <div class=\"divider\" *ngIf=\"!isLast\"></div>\n    </div>\n  </perfect-scrollbar>\n</ng-template>\n\n<ng-template #elseBlock>\n  <div class=\"no\" fxLayout=\"row\" fxLayoutAlign=\"center center\">暂无通知</div>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/core/toolbar-notification/toolbar-notification.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/core/toolbar-notification/toolbar-notification.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  font-weight: 700;\n  line-height: 13px;\n  height: 13px;\n  padding: 5px;\n  border-radius: 26%;\n  width: 30%;\n  background-color: #f44336;\n  color: #fff;\n  border-color: #f44336; }\n\n.toolbar-notification-container {\n  position: relative;\n  display: flex;\n  align-items: center; }\n\n.toolbar-notification-btn {\n  display: flex;\n  justify-content: center;\n  margin-right: 10px; }\n\n.dropdown {\n  background: white;\n  position: absolute;\n  top: 42px;\n  right: 28px;\n  min-width: 350px;\n  z-index: 2;\n  -webkit-transform: translateY(0) scale(0);\n          transform: translateY(0) scale(0);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n  visibility: hidden;\n  transition: visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n@media screen and (max-width: 599px) {\n    .dropdown {\n      min-width: 50vw;\n      right: 5px;\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n      visibility: hidden;\n      transition: visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); } }\n\n.dropdown.open {\n    -webkit-transform: translateY(0) scale(1);\n            transform: translateY(0) scale(1);\n    visibility: visible; }\n\n.dropdown .card .header {\n    background: #EEEEEE;\n    min-height: 54px;\n    padding-left: 16px;\n    padding-right: 8px;\n    color: #555;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n    border-bottom: 1px solid #e0e0e0; }\n\n.dropdown .card .header .extra {\n      font-size: 12px;\n      color: #888; }\n\n.dropdown .content {\n    overflow: hidden;\n    max-height: 256px; }\n\n.dropdown .content .notification {\n      min-height: 64px;\n      padding: 0 16px 0 14px;\n      position: relative;\n      color: #666;\n      cursor: pointer; }\n\n.dropdown .content .notification .icon {\n        height: 28px;\n        width: 28px;\n        line-height: 28px;\n        font-size: 18px;\n        margin-right: 13px;\n        text-align: center;\n        border-radius: 50%;\n        background: #FFF;\n        color: #888;\n        border: 1px solid #EEE; }\n\n.dropdown .content .notification .title {\n        font-weight: 500;\n        font-size: 14px; }\n\n.dropdown .content .notification .time {\n        font-size: 12px; }\n\n.dropdown .content .notification .close {\n        font-size: 18px;\n        width: 18px;\n        height: 18px;\n        line-height: 18px; }\n\n.dropdown .content .notification.primary .icon {\n        background: #ccc;\n        color: #ddd; }\n\n.dropdown .content .notification.accent .icon {\n        background: #aaa;\n        color: #bbb; }\n\n.dropdown .content .notification.warn .icon {\n        background: #eee;\n        color: #ddd; }\n\n.dropdown .content .notification.read {\n        color: #999; }\n\n.dropdown .content .notification.read .name {\n          font-weight: normal; }\n\n.dropdown .footer {\n    min-height: 42px;\n    border-top: 1px solid #EEE; }\n\n.dropdown .footer .action {\n      cursor: pointer;\n      color: #AAA;\n      text-align: center;\n      font-size: 13px; }\n\n.dropdown .divider {\n    width: calc(100% - 30px);\n    height: 1px;\n    background: #EEE;\n    margin: 0 16px 0 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS90b29sYmFyLW5vdGlmaWNhdGlvbi9DOlxcVXNlcnNcXE1pbmhhelxcRG9jdW1lbnRzXFxhbmd1bGFyVGVzdHNcXGNpdGl6ZW4tZnJvbnQvc3JjXFxhcHBcXGNvcmVcXHRvb2xiYXItbm90aWZpY2F0aW9uXFx0b29sYmFyLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNHLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sVUFBUztFQUNULGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsYUFBWTtFQUNaLGFBQVk7RUFDWCxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLDBCQUF5QjtFQUMxQixZQUFXO0VBQ1gsc0JBQ0gsRUFBQzs7QUFHQztFQUNFLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2Isb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixtQkFBa0IsRUFDbkI7O0FBRUg7RUFDQyxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLFdBQVU7RUFDViwwQ0FBaUM7VUFBakMsa0NBQWlDO0VBQ2pDLG9DQUEyQjtVQUEzQiw0QkFBMkI7RUFDM0IsbUJBQWtCO0VBQ2xCLHNIQUFxRztFQUFyRyw4R0FBcUc7RUFBckcsdUtBQXFHLEVBMkhyRzs7QUF6SEE7SUFaRDtNQWFLLGdCQUFlO01BQ2YsV0FBVTtNQUNWLGlDQUF3QjtjQUF4Qix5QkFBd0I7TUFDeEIsbUJBQWtCO01BQ2xCLHNIQUErRjtNQUEvRiw4R0FBK0Y7TUFBL0YsdUtBQStGLEVBb0huRyxFQUFBOztBQXJJRDtJQXFCSywwQ0FBaUM7WUFBakMsa0NBQWlDO0lBQ2pDLG9CQUFtQixFQUN0Qjs7QUF2QkY7SUEyQk8sb0JBQW1CO0lBQ25CLGlCQUFnQjtJQUNoQixtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxjQUFhO0lBQ2IsNEJBQTJCO0lBQzNCLG9CQUFtQjtJQUNuQixzQkFBcUI7SUFDckIsaUNBQWdDLEVBTWpDOztBQTFDTjtNQXVDUyxnQkFBZTtNQUNmLFlBQVcsRUFDWjs7QUF6Q1I7SUE2Q08saUJBQWdCO0lBQ2hCLGtCQUFpQixFQW1FbkI7O0FBakhMO01BaURTLGlCQUFnQjtNQUNoQix1QkFBc0I7TUFDdEIsbUJBQWtCO01BQ2xCLFlBQVc7TUFDWCxnQkFBZSxFQTJEaEI7O0FBaEhSO1FBd0RVLGFBQVk7UUFDWixZQUFXO1FBQ1gsa0JBQWlCO1FBQ2pCLGdCQUFlO1FBQ2YsbUJBQWtCO1FBQ2xCLG1CQUFrQjtRQUNsQixtQkFBa0I7UUFDbEIsaUJBQWdCO1FBQ2hCLFlBQVc7UUFDWCx1QkFBc0IsRUFDdEI7O0FBbEVWO1FBcUVZLGlCQUFnQjtRQUNoQixnQkFBZSxFQUNqQjs7QUF2RVY7UUEwRVcsZ0JBQWUsRUFDaEI7O0FBM0VWO1FBOEVZLGdCQUFlO1FBQ2YsWUFBVztRQUNaLGFBQVk7UUFDWixrQkFBaUIsRUFDbEI7O0FBbEZWO1FBc0ZhLGlCQUFnQjtRQUNoQixZQUFXLEVBQ1o7O0FBeEZaO1FBNkZhLGlCQUFnQjtRQUNoQixZQUFXLEVBQ1o7O0FBL0ZaO1FBb0dhLGlCQUFnQjtRQUNoQixZQUFXLEVBQ1o7O0FBdEdaO1FBMEdXLFlBQVcsRUFLWjs7QUEvR1Y7VUE2R2Esb0JBQW1CLEVBQ3BCOztBQTlHWjtJQW9ITyxpQkFBZ0I7SUFDaEIsMkJBQTBCLEVBUTVCOztBQTdITDtNQXdIUyxnQkFBZTtNQUNmLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsZ0JBQWUsRUFDbEI7O0FBNUhOO0lBZ0lPLHlCQUF3QjtJQUN4QixZQUFXO0lBQ1gsaUJBQWdCO0lBQ2hCLHNCQUFxQixFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdG9vbGJhci1ub3RpZmljYXRpb24vdG9vbGJhci1ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJlZml4OiAndG9vbGJhci1ub3RpZmljYXRpb24nO1xuXG4uYmFkZ2Uge1xuICBcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXHR0b3A6IDA7XG4gIFx0bGVmdDogNTAlO1xuICBcdGZvbnQtd2VpZ2h0OiA3MDA7XG4gIFx0bGluZS1oZWlnaHQ6IDEzcHg7XG4gIFx0aGVpZ2h0OiAxM3B4O1xuICBcdHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNiU7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBcdGNvbG9yOiAjZmZmO1xuICBcdGJvcmRlci1jb2xvcjojZjQ0MzM2XG59XG5cbi4jeyRwcmVmaXh9IHtcbiAgJi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbi5kcm9wZG93biB7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNDJweDtcblx0cmlnaHQ6IDI4cHg7XG5cdG1pbi13aWR0aDogMzUwcHg7XG5cdHotaW5kZXg6IDI7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwKTtcblx0dHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xuXHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSksIHZpc2liaWxpdHkgLjRzIGN1YmljLWJlemllciguMjUsIC44LCAuMjUsIDEpO1xuXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG5cdCAgICBtaW4td2lkdGg6IDUwdnc7XG5cdCAgICByaWdodDogNXB4O1xuXHQgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSwgdmlzaWJpbGl0eSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG5cdH1cblxuXHQmLm9wZW4ge1xuXHQgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuXHQgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcblx0fVxuXHQuY2FyZCB7XG5cblx0ICAgIC5oZWFkZXIge1xuXHQgICAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xuXHQgICAgICBtaW4taGVpZ2h0OiA1NHB4O1xuXHQgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG5cdCAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcblx0ICAgICAgY29sb3I6ICM1NTU7XG5cdCAgICAgIGRpc3BsYXk6IGZsZXg7XG5cdCAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0ICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuXHQgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcblxuXHQgICAgICAuZXh0cmEge1xuXHQgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcblx0ICAgICAgICBjb2xvcjogIzg4ODtcblx0ICAgICAgfVxuICAgIFx0fVxuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICBcdG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBcdG1heC1oZWlnaHQ6IDI1NnB4O1xuXG4gICAgICBcdC5ub3RpZmljYXRpb24ge1xuICAgICAgICBcdG1pbi1oZWlnaHQ6IDY0cHg7XG5cdCAgICAgICAgcGFkZGluZzogMCAxNnB4IDAgMTRweDtcblx0ICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgICAgICAgY29sb3I6ICM2NjY7XG5cdCAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG5cdCAgICAgICAgLmljb24ge1xuXHRcdCAgICAgICAgaGVpZ2h0OiAyOHB4O1xuXHRcdCAgICAgICAgd2lkdGg6IDI4cHg7XG5cdFx0ICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcblx0XHQgICAgICAgIGZvbnQtc2l6ZTogMThweDtcblx0XHQgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcblx0XHQgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHQgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHQgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG5cdFx0ICAgICAgICBjb2xvcjogIzg4ODtcblx0XHQgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFRUU7XG4gICAgICAgIFx0fVxuXG4gICAgICAgIFx0LnRpdGxlIHtcbiAgICAgICAgICBcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBcdFx0Zm9udC1zaXplOiAxNHB4O1xuICAgICAgICBcdH1cblxuICAgICAgICBcdC50aW1lIHtcbiAgICAgICAgIFx0XHRmb250LXNpemU6IDEycHg7XG4gICAgICAgIFx0fVxuXG4gICAgICAgIFx0LmNsb3NlIHtcbiAgICAgICAgICBcdFx0Zm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIFx0XHR3aWR0aDogMThweDtcblx0ICAgICAgICAgIGhlaWdodDogMThweDtcblx0ICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgICYucHJpbWFyeSB7XG5cdCAgICAgICAgICAuaWNvbiB7XG5cdCAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG5cdCAgICAgICAgICAgIGNvbG9yOiAjZGRkO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgICYuYWNjZW50IHtcblx0ICAgICAgICAgIC5pY29uIHtcblx0ICAgICAgICAgICAgYmFja2dyb3VuZDogI2FhYTtcblx0ICAgICAgICAgICAgY29sb3I6ICNiYmI7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgJi53YXJuIHtcblx0ICAgICAgICAgIC5pY29uIHtcblx0ICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcblx0ICAgICAgICAgICAgY29sb3I6ICNkZGQ7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgJi5yZWFkIHtcblx0ICAgICAgICAgIGNvbG9yOiAjOTk5O1xuXG5cdCAgICAgICAgICAubmFtZSB7XG5cdCAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuICAgICAgXHR9XG4gICAgfVxuXG4gICAgLmZvb3RlciB7XG4gICAgICBcdG1pbi1oZWlnaHQ6IDQycHg7XG4gICAgICBcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUVFO1xuXG5cdCAgICAuYWN0aW9uIHtcblx0ICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cdCAgICAgICAgY29sb3I6ICNBQUE7XG5cdCAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHQgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcblx0ICAgIH1cbiAgICB9XG5cbiAgICAuZGl2aWRlciB7XG4gICAgICBcdHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICAgIFx0aGVpZ2h0OiAxcHg7XG4gICAgICBcdGJhY2tncm91bmQ6ICNFRUU7XG4gICAgICBcdG1hcmdpbjogMCAxNnB4IDAgMTRweDtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/core/toolbar-notification/toolbar-notification.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/toolbar-notification/toolbar-notification.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ToolbarNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarNotificationComponent", function() { return ToolbarNotificationComponent; });
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

var ToolbarNotificationComponent = /** @class */ (function () {
    // @HostListener('document:click', ['$event', '$event.target'])
    // onClick(event: MouseEvent, targetElement: HTMLElement) {
    //     if (!targetElement) {
    //           return;
    //     }
    //     const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    //     if (!clickedInside) {
    //          this.isOpen = false;
    //     }
    // }
    function ToolbarNotificationComponent(elementRef) {
        this.elementRef = elementRef;
        this.cssPrefix = 'toolbar-notification';
        this.isOpen = false;
        this.notifications = [];
    }
    ToolbarNotificationComponent.prototype.ngOnInit = function () {
    };
    ToolbarNotificationComponent.prototype.select = function () {
    };
    ToolbarNotificationComponent.prototype.delete = function (notification) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarNotificationComponent.prototype, "notifications", void 0);
    ToolbarNotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-toolbar-notification',
            template: __webpack_require__(/*! ./toolbar-notification.component.html */ "./src/app/core/toolbar-notification/toolbar-notification.component.html"),
            styles: [__webpack_require__(/*! ./toolbar-notification.component.scss */ "./src/app/core/toolbar-notification/toolbar-notification.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ToolbarNotificationComponent);
    return ToolbarNotificationComponent;
}());



/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <stbui-loading *ngIf=\"showLoading\"></stbui-loading> -->\r\n<mat-toolbar   class=\"mat-elevation-z4\">  \r\n\t<button mat-icon-button (click)=\"sidenav.toggle();drawer.toggle();\" *ngIf=\"matDrawerShow\">\r\n        <i class=\"material-icons app-toolbar-menu\">menu </i>\r\n    </button> \r\n    <button mat-icon-button (click)=\"sidenav.toggle();\" *ngIf=\"!matDrawerShow\">\r\n        <i class=\"material-icons app-toolbar-menu\">menu </i>\r\n    </button>\r\n\r\n    <span class=\"spacer\"></span>\r\n\r\n    <button  mat-icon-button (click)=\"searchOpen = !searchOpen\" fxHide=\"true\" [fxHide.gt-xs]=\"false\">\r\n        <i class=\"material-icons\">search</i>\r\n    </button>\r\n    <cdk-search-bar [open]=\"searchOpen\"></cdk-search-bar>\r\n\r\n    <!-- <cdk-fullscreen></cdk-fullscreen> -->\r\n\r\n    <!-- <cdk-toolbar-notification [notifications]=\"toolbarHelpers?.notifications\"></cdk-toolbar-notification> -->\r\n\r\n    <cdk-user-menu [currentUser]=\"currentUser\"></cdk-user-menu>\r\n    \r\n     <!-- <button mat-icon-button (click)=\"sidebar.toggle();\">\r\n        <i class=\"material-icons app-toolbar-menu\">menu </i>\r\n    </button> -->\r\n    \r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  z-index: 4; }\n\n.main-toolbar {\n  height: 64px;\n  padding-left: 16px; }\n\n.more-btn {\n  height: 100%;\n  min-width: 70px; }\n\n.mat-icon-button {\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS90b29sYmFyL0M6XFxVc2Vyc1xcTWluaGF6XFxEb2N1bWVudHNcXGFuZ3VsYXJUZXN0c1xcY2l0aXplbi1mcm9udC9zcmNcXGFwcFxcY29yZVxcdG9vbGJhclxcdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVUsRUFDWDs7QUFFRDtFQUNFLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgei1pbmRleDogNDtcbn1cblxuLm1haW4tdG9vbGJhciB7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4ubW9yZS1idG4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogNzBweDtcbn1cblxuLm1hdC1pY29uLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.ts ***!
  \***************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
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

//import { ToolbarHelpers } from './toolbar.helpers';
var ToolbarComponent = /** @class */ (function () {
    //toolbarHelpers = ToolbarHelpers;
    function ToolbarComponent() {
        this.searchOpen = false;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        console.log("Toolbars's user component after initialized");
        var currentUserData = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUser = currentUserData['name'];
        console.log(this.currentUser);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "drawer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "matDrawerShow", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/core/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/core/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/core/user-menu/user-menu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/user-menu/user-menu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-user-container\">\r\n\t<button mat-button (click)=\"isOpen = !isOpen\" class=\"toolbar-user-btn\" [class.open]=\"isOpen\" [ngStyle.xs]=\"{'min-width': '70px'}\">\r\n  \t\t<span fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    \t\t<span class=\"name\" fxHide fxShow.gt-xs>{{currentUser}}</span>\r\n    \t\t<mat-icon class=\"icon\" fxHide fxShow.gt-xs>keyboard_arrow_down</mat-icon>\r\n  \t\t</span>\r\n  \t</button>\r\n\r\n\r\n  \t<div class=\"dropdown mat-elevation-z1\" [class.open]=\"isOpen\">\r\n    \t<div class=\"content\">\r\n      \t\t<mat-nav-list>\r\n      \t\t\t<mat-list-item>\r\n      \t\t\t\t<a matLine >Profile</a>\r\n\t\t\t\t    <button mat-icon-button>\r\n\t\t\t\t       <mat-icon>account_circle</mat-icon>\r\n\t\t\t\t    </button>\r\n      \t\t\t</mat-list-item>\r\n\r\n\r\n      \t\t\t<mat-divider></mat-divider>\r\n\r\n      \t\t\t<mat-list-item>\r\n      \t\t\t\t<a matLine (click)=\"logout()\">Logout</a>\r\n\t\t\t\t    <button mat-icon-button>\r\n\t\t\t\t       <mat-icon>exit_to_app</mat-icon>\r\n\t\t\t\t    </button>\r\n      \t\t\t</mat-list-item>\r\n      \t\t</mat-nav-list>\r\n    \t</div>\r\n  \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/core/user-menu/user-menu.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/user-menu/user-menu.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%; }\n\n.toolbar-user-container {\n  height: 100%;\n  position: relative; }\n\n.toolbar-user-container .toolbar-user-btn {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    min-width: 160px; }\n\n.toolbar-user-container .toolbar-user-btn .avatar {\n      width: 30px;\n      height: 30px;\n      border-radius: 50%; }\n\n.toolbar-user-container .toolbar-user-btn .name {\n      margin: 0 8px 0 10px;\n      font-size: 19px; }\n\n.toolbar-user-container .toolbar-user-btn .icon {\n      width: 16px;\n      height: 16px;\n      font-size: 16px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n      transition: -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.toolbar-user-container .toolbar-user-btn.open {\n      background: rgba(0, 0, 0, 0.05); }\n\n.toolbar-user-container .toolbar-user-btn.open .icon {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n\n.toolbar-user-container .dropdown {\n    background: white;\n    z-index: 2;\n    position: absolute;\n    width: 100%;\n    min-width: 160px;\n    opacity: 0;\n    visibility: hidden;\n    transition: all .25s linear, max-height .25s linear, opacity .25s linear; }\n\n@media screen and (max-width: 599px) {\n      .toolbar-user-container .dropdown {\n        min-width: 65px; } }\n\n.toolbar-user-container .dropdown.open {\n      opacity: 1;\n      visibility: visible; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS91c2VyLW1lbnUvQzpcXFVzZXJzXFxNaW5oYXpcXERvY3VtZW50c1xcYW5ndWxhclRlc3RzXFxjaXRpemVuLWZyb250L3NyY1xcYXBwXFxjb3JlXFx1c2VyLW1lbnVcXHVzZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUF1RHJCOztBQXpERDtJQUtRLGNBQWE7SUFDYix3QkFBdUI7SUFDdkIsYUFBWTtJQUNaLGlCQUFnQixFQTRCckI7O0FBcENIO01BV1EsWUFBVztNQUNYLGFBQVk7TUFDWixtQkFBa0IsRUFDckI7O0FBZEw7TUFpQlEscUJBQW9CO01BQ3BCLGdCQUFlLEVBQ2xCOztBQW5CTDtNQXNCUSxZQUFXO01BQ1gsYUFBWTtNQUNaLGdCQUFlO01BQ2YsNkJBQW9CO2NBQXBCLHFCQUFvQjtNQUNwQixxRUFBcUQ7TUFBckQsNkRBQXFEO01BQXJELHVIQUFxRCxFQUN4RDs7QUEzQkw7TUE4QlEsZ0NBQThCLEVBS2pDOztBQW5DTDtRQWlDUSxtQ0FBMEI7Z0JBQTFCLDJCQUEwQixFQUMzQjs7QUFsQ1A7SUF1Q1Esa0JBQWlCO0lBQ2pCLFdBQVU7SUFDVixtQkFBa0I7SUFDbEIsWUFBVztJQUNYLGlCQUFnQjtJQUNoQixXQUFVO0lBQ1YsbUJBQWtCO0lBQ2xCLHlFQUF3RSxFQVUzRTs7QUFSRztNQWhEUjtRQWlEWSxnQkFBZSxFQU90QixFQUFBOztBQXhETDtNQXFEWSxXQUFVO01BQ1Ysb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29yZS91c2VyLW1lbnUvdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRvb2xiYXItdXNlci1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC50b29sYmFyLXVzZXItYnRuIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG5cclxuICAgIC5hdmF0YXIge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICAgIG1hcmdpbjogMCA4cHggMCAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjI1cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcclxuICAgIH1cclxuXHJcbiAgICAmLm9wZW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjA1KTtcclxuXHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgICAuZHJvcGRvd24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgbGluZWFyLCBtYXgtaGVpZ2h0IC4yNXMgbGluZWFyLCBvcGFjaXR5IC4yNXMgbGluZWFyO1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDY1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLm9wZW4ge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/core/user-menu/user-menu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/user-menu/user-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth-services.service */ "./src/app/services/auth-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent(elementRef, authService) {
        this.elementRef = elementRef;
        this.authService = authService;
        this.isOpen = false;
        this.currentUser = null;
    }
    UserMenuComponent.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.isOpen = false;
        }
    };
    UserMenuComponent.prototype.ngOnInit = function () {
    };
    UserMenuComponent.prototype.logout = function () {
        this.authService.logout();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserMenuComponent.prototype, "currentUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], UserMenuComponent.prototype, "onClick", null);
    UserMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-user-menu',
            template: __webpack_require__(/*! ./user-menu.component.html */ "./src/app/core/user-menu/user-menu.component.html"),
            styles: [__webpack_require__(/*! ./user-menu.component.scss */ "./src/app/core/user-menu/user-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], src_app_services_auth_services_service__WEBPACK_IMPORTED_MODULE_1__["AuthServices"]])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/directives/equal-validator.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/equal-validator.directive.ts ***!
  \*********************************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return EqualValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual) {
        this.validateEqual = validateEqual;
    }
    EqualValidator_1 = EqualValidator;
    EqualValidator.prototype.validate = function (control) {
        var selfValue = control.value;
        var rootvalue = control.root.get(this.validateEqual);
        if (rootvalue && selfValue != rootvalue)
            return {
                validateEqual: false
            };
        return null;
    };
    var EqualValidator_1;
    EqualValidator = EqualValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateEqual][formControlName], [validateEqual][formControl], [validateEqual][ngModel]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('validateEqual')),
        __metadata("design:paramtypes", [String])
    ], EqualValidator);
    return EqualValidator;
}());



/***/ }),

/***/ "./src/app/helpers/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth-services.service */ "./src/app/services/auth-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authService) {
        this.authService = authService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_services_service__WEBPACK_IMPORTED_MODULE_3__["AuthServices"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/token.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/token.interceptor.ts ***!
  \**********************************************/
/*! exports provided: InterceptorSkipHeader, TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorSkipHeader", function() { return InterceptorSkipHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InterceptorSkipHeader = 'X-Skip-Interceptor';
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor() {
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (request.headers.has(InterceptorSkipHeader)) {
            var headers = request.headers.delete(InterceptorSkipHeader);
            return next.handle(request.clone({ headers: headers }));
        }
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    "Content-type": "application/json",
                    'Session-Token': "" + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContainer {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: stretch;\r\n    flex-direction: column;\r\n}\r\n\r\n/* .childContainer {\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: stretch;\r\n    flex-direction: column;\r\n}\r\n\r\n.upperContainer {\r\n    background-color: #3f51b5;\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    width: 100%;\r\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.customPosition{\r\n    position: absolute;\r\n    height: 55%;\r\n    margin-top: 12%;\r\n    width: 25%;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQix1QkFBdUI7Q0FDMUI7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQkkiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluQ29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qIC5jaGlsZENvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udXBwZXJDb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAzcHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDZweCAxMHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDE4cHggMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY3VzdG9tUG9zaXRpb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDU1JTtcclxuICAgIG1hcmdpbi10b3A6IDEyJTtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar *ngIf=\"!userLoggedIn\"></app-nav-bar>\n<router-outlet></router-outlet>\n<!-- <div class=\"container\">\n   \n    <div class=\"childContainer\" *ngIf=\"!userLoggedIn && !userLogPage\">\n        <div class=\"upperContainer\">\n            <div class=\"customPosition\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n        <div style=\"flex: 1 1 auto;\">\n\n        </div>\n    </div>\n\n</div> -->"

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
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lazy-load/lazy-load.module.ts":
/*!***********************************************!*\
  !*** ./src/app/lazy-load/lazy-load.module.ts ***!
  \***********************************************/
/*! exports provided: LazyLoadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadModule", function() { return LazyLoadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _researcher_researcher_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../researcher/researcher.module */ "./src/app/researcher/researcher.module.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'citizenpanel', loadChildren: '../researcher/researcher.module#ResearcherModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
];
var LazyLoadModule = /** @class */ (function () {
    function LazyLoadModule() {
    }
    LazyLoadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _researcher_researcher_module__WEBPACK_IMPORTED_MODULE_2__["ResearcherModule"]]
        })
    ], LazyLoadModule);
    return LazyLoadModule;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/observation.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/observation.model.ts ***!
  \*********************************************/
/*! exports provided: Observation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observation", function() { return Observation; });
var Observation = /** @class */ (function () {
    function Observation() {
    }
    return Observation;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.toolbarContent {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n\r\n.customFonSize{\r\n    font-size: 19px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtDQUNsQjs7O0FBR0Q7SUFDSSxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udG9vbGJhckNvbnRlbnQge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcblxyXG4uY3VzdG9tRm9uU2l6ZXtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n    <mat-toolbar>\n        <mat-toolbar-row>\n            <span class=\"spacer\"><a [routerLink]=\"'/'\">{{title}}</a></span>\n            <span>\n                <a [routerLink]=\"'/signin'\">\n                    <button mat-icon-button>\n                        <mat-icon>how_to_reg</mat-icon>Sign Up\n                    </button>\n                </a>\n\n            </span>\n            <span>\n                <a [routerLink]=\"'/signup'\">\n                    <button mat-icon-button>\n                        <mat-icon>account_circle</mat-icon>Sign In\n                    </button>\n                </a> </span>\n        </mat-toolbar-row>\n    </mat-toolbar>\n</div> -->\n\n<mat-toolbar color=\"primary\" [ngStyle]=\"{\n        'box-shadow':'0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12)', \n        'position':'relative', \n        'z-index': '1'\n    }\">\n    <span class=\"toolbarContent\">Citizen App</span>\n    <span>\n        <a mat-button [routerLink]=\"'signup'\">\n            <mat-icon>how_to_reg</mat-icon>\n            <span>Sign Up</span>\n        </a>\n        <a mat-button [routerLink]=\"'signin'\" class=\"customFontSize\">\n            <mat-icon>account_circle</mat-icon>\n            <span>Sign In</span>\n        </a>\n        <!-- <a mat-button [routerLink]=\"'researcher'\" class=\"customFontSize\">\n            <mat-icon>menu</mat-icon>\n            <span>Dashboard</span>\n        </a> -->\n    </span>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
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

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.title = "Citizen";
        this.signUpLink = "/signup";
        this.customStyles = {
            fontSize: '19px'
        };
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/no-access/no-access.component.css":
/*!***************************************************!*\
  !*** ./src/app/no-access/no-access.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vLWFjY2Vzcy9uby1hY2Nlc3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/no-access/no-access.component.html":
/*!****************************************************!*\
  !*** ./src/app/no-access/no-access.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  no-access works!\n</p>\n"

/***/ }),

/***/ "./src/app/no-access/no-access.component.ts":
/*!**************************************************!*\
  !*** ./src/app/no-access/no-access.component.ts ***!
  \**************************************************/
/*! exports provided: NoAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAccessComponent", function() { return NoAccessComponent; });
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

var NoAccessComponent = /** @class */ (function () {
    function NoAccessComponent() {
    }
    NoAccessComponent.prototype.ngOnInit = function () {
    };
    NoAccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-access',
            template: __webpack_require__(/*! ./no-access.component.html */ "./src/app/no-access/no-access.component.html"),
            styles: [__webpack_require__(/*! ./no-access.component.css */ "./src/app/no-access/no-access.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoAccessComponent);
    return NoAccessComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Page Not Found\n</h1>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/researcher/add-fields/add-fields.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/researcher/add-fields/add-fields.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"components-container-gt-xs\" fxLayoutGap=\"20px\">\r\n\r\n  <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.lt-sm=\"column\" fxFlex=\"50\" fxLayoutAlign=\"start space-between\"\r\n    fxLayoutGap=\"10px\">\r\n\r\n    <div fxFlex.sm=\"100\" class=\"cdk-card-holder\" fxLayout=\"row\" fxFlex=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"100\" style=\"width: 60%;\">\r\n\r\n      <mat-toolbar class=\"cards-header\">\r\n        <h1 class=\"mat-headline center-align\">Add Manual Fields</h1>\r\n      </mat-toolbar>\r\n\r\n      <div class=\"cards-container\">\r\n\r\n        <div fxLayoutAlign=\"space-around\" fxLayoutWrap>\r\n          <mat-card>\r\n\r\n\r\n            <mat-card-content>\r\n              <div class=\"formContainer\">\r\n                <form style=\"display: flex; flex-direction: column; max-width: 50%;\">\r\n                  <div class=\"formInputGroup\" style=\"display:flex; flex-direction: row;\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Tags\">\r\n                    </mat-form-field>\r\n                    \r\n                    <button mat-icon-button color=\"primary\">\r\n                      <mat-icon style=\"font-size: 35px; margin-top: 12px;\">add_circle</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n              <button mat-raised-button class=\"mat-subheading-1 center-align\" color=\"primary\">Manual</button>\r\n              <button mat-raised-button class=\"mat-subheading-1 center-align\" color=\"accent\">Import</button>\r\n            </mat-card-actions>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div fxFlex.xs=\"100\"  class=\"cdk-card-holder\"  fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"100\" >\r\n\t\t\t\t\t\r\n\t\t\t\t\t<mat-toolbar class=\"cards-header\">\r\n\t\t\t\t\t\t<h1 class=\"mat-headline center-align\" >Example</h1>\r\n\t\t\t\t\t</mat-toolbar>\r\n\t            \r\n\t\t            <div  fxLayoutAlign=\"space-around stretch\" fxLayoutWrap >\r\n\r\n\t\t                <mat-tab-group fxFlexFill>\r\n\t\t\t\r\n\t\t\t\t\t\t\t<mat-tab label=\"TS\">\r\n\t\t\t\t\t\t\t\t<div class=\"component-preview\">\r\n\t\t\t\t\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"cardsHelpers?.tsSourceCards\" language=\"typescript\"></code></pre>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </mat-tab>\r\n\t\t\t\t\t        <mat-tab label=\"HTML\">\r\n\t\t\t\t\t        \t<div class=\"component-preview\">\r\n\t\t\t\t\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"cardsHelpers?.htmlSourceCards\" language=\"html\"></code></pre>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </mat-tab>\r\n\r\n\t\t\t\t\t    </mat-tab-group>\r\n\r\n\t\t            </div>\r\n\t        \t</div> -->\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/researcher/add-fields/add-fields.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/researcher/add-fields/add-fields.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VhcmNoZXIvYWRkLWZpZWxkcy9hZGQtZmllbGRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/researcher/add-fields/add-fields.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/researcher/add-fields/add-fields.component.ts ***!
  \***************************************************************/
/*! exports provided: AddFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFieldsComponent", function() { return AddFieldsComponent; });
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

var AddFieldsComponent = /** @class */ (function () {
    function AddFieldsComponent() {
    }
    AddFieldsComponent.prototype.ngOnInit = function () {
    };
    AddFieldsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-fields',
            template: __webpack_require__(/*! ./add-fields.component.html */ "./src/app/researcher/add-fields/add-fields.component.html"),
            styles: [__webpack_require__(/*! ./add-fields.component.scss */ "./src/app/researcher/add-fields/add-fields.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddFieldsComponent);
    return AddFieldsComponent;
}());



/***/ }),

/***/ "./src/app/researcher/add-records/add-records.component.css":
/*!******************************************************************!*\
  !*** ./src/app/researcher/add-records/add-records.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-header {\r\n    background-color: #327ebd;\r\n    color: white;\r\n    padding: 12px;\r\n}\r\n.cards-container {\r\n    padding: 19px;\r\n    color: white;\r\n}\r\n.cdk-card-holder {\r\nborder: 1px solid #327ebd;\r\nbackground-color: white;\r\nborder-top-left-radius: 5px;\r\nborder-top-right-radius: 5px;\r\n}\r\n.listHeader, .listItems{\r\nborder: 3px solid lightgray;\r\nborder-radius: 5px;\r\npadding: 12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZWFyY2hlci9hZGQtcmVjb3Jkcy9hZGQtcmVjb3Jkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsYUFBYTtDQUNoQjtBQUVEO0FBQ0EsMEJBQTBCO0FBQzFCLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUIsNkJBQTZCO0NBQzVCO0FBRUQ7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CLGNBQWM7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VhcmNoZXIvYWRkLXJlY29yZHMvYWRkLXJlY29yZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkcy1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuLmNhcmRzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxOXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2RrLWNhcmQtaG9sZGVyIHtcclxuYm9yZGVyOiAxcHggc29saWQgIzMyN2ViZDtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbmJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmxpc3RIZWFkZXIsIC5saXN0SXRlbXN7XHJcbmJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0Z3JheTtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG5wYWRkaW5nOiAxMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/researcher/add-records/add-records.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/researcher/add-records/add-records.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"components-container-gt-xs\" fxLayoutGap=\"20px\" style=\"overflow: auto;\">\r\n\r\n  <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"space-between start\" fxLayoutGap=\"10px\">\r\n\r\n    <div fxFlex.sm=\"100\" class=\"cdk-card-holder\" fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" fxFlex=\"50\"\r\n      fxFlex.md=\"50\" fxFlex.sm=\"100\">\r\n\r\n      <mat-toolbar class=\"cards-header\">\r\n        <h1 class=\"mat-headline center-align\">Add Records</h1>\r\n      </mat-toolbar>\r\n\r\n      <div class=\"cards-container\">\r\n        <div class=\"formContainer\">\r\n          <form #createRecordsForm=\"ngForm\" (ngSubmit)=\"onSubmitRecords(createRecordsForm.value)\" >\r\n            <mat-card>\r\n              <mat-card-content fxLayout=\"column\" fxLayoutGap=\"25px\" style=\"font-size: 15px;\">\r\n                <ng-container *ngFor=\"let field of observation.fields; let i = index;\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"{{field.title}}\" name=\"{{field.title}}\" ngModel #i=\"ngModel\" required>\r\n                    <mat-hint *ngIf=\"!i.touched\">Please enter the value of {{field.title}}</mat-hint>\r\n                    <mat-error *ngIf=\"i.errors?.required\">\r\n                      {{field.title}} is <strong>required</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </ng-container>\r\n              </mat-card-content>\r\n              <mat-card-actions style=\"text-align: right; padding: 10px;\">\r\n                <!-- <button mat-raised-button class=\"mat-subheading-1 center-align\" color=\"primary\" [routerLink]=\"'addfields'\">Manual</button> -->\r\n                <button mat-raised-button class=\"mat-subheading-1 center-align\" color=\"primary\" (click)=\"cancelRecord()\">Cancel</button>\r\n                <button mat-raised-button class=\"mat-subheading-1 center-align\" color=\"accent\" type=\"submit\" [disabled]=\"createRecordsForm.invalid\">Create</button>\r\n              </mat-card-actions>\r\n            </mat-card>\r\n          </form>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/researcher/add-records/add-records.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/researcher/add-records/add-records.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddRecordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecordsComponent", function() { return AddRecordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_observation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/observation.model */ "./src/app/models/observation.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_record_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/record.service */ "./src/app/services/record.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddRecordsComponent = /** @class */ (function () {
    function AddRecordsComponent(route, router, recordService, snackBar) {
        this.route = route;
        this.router = router;
        this.recordService = recordService;
        this.snackBar = snackBar;
    }
    AddRecordsComponent.prototype.ngOnInit = function () {
        this.observation = new src_app_models_observation_model__WEBPACK_IMPORTED_MODULE_1__["Observation"]();
        this.observation = this.route.snapshot.data.data.observations[0];
        // this.record = new Record();
        console.log(this.observation);
    };
    AddRecordsComponent.prototype.onSubmitRecords = function (val) {
        var _this = this;
        // console.log(val);
        // this.record['observationId'] = this.observation.observationId;
        // this.record['data'] = val;
        var record = {
            'observationId': this.observation.observationId,
            'data': val
        };
        console.log(record);
        this.recordService.addRecord(record)
            .subscribe(function (res) {
            _this.snackBarMessage("Record Added Successfully", "Success");
            _this.router.navigateByUrl("citizenpanel/listrecords/" + _this.observation.observationId);
        }, (function (error) {
            _this.snackBarMessage("Failed to add record", "Failed");
        }));
    };
    AddRecordsComponent.prototype.cancelRecord = function () {
        this.createRecordsForm.resetForm();
        this.router.navigateByUrl("citizenpanel/listrecords/" + this.observation.observationId);
    };
    AddRecordsComponent.prototype.snackBarMessage = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5500
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('createRecordsForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], AddRecordsComponent.prototype, "createRecordsForm", void 0);
    AddRecordsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-records',
            template: __webpack_require__(/*! ./add-records.component.html */ "./src/app/researcher/add-records/add-records.component.html"),
            styles: [__webpack_require__(/*! ./add-records.component.css */ "./src/app/researcher/add-records/add-records.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_record_service__WEBPACK_IMPORTED_MODULE_4__["RecordService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], AddRecordsComponent);
    return AddRecordsComponent;
}());



/***/ }),

/***/ "./src/app/researcher/create-observation/create-observation.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/researcher/create-observation/create-observation.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"components-container-gt-xs\" fxLayoutGap=\"20px\">\r\n\r\n  <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"space-between start\" fxLayoutGap=\"10px\">\r\n\r\n    <div fxFlex.sm=\"100\" class=\"cdk-card-holder\" fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" fxFlex=\"50\"\r\n      fxFlex.md=\"50\" fxFlex.sm=\"100\">\r\n\r\n      <mat-toolbar class=\"cards-header\">\r\n        <h1 class=\"mat-headline center-align\">Create Observation</h1>\r\n      </mat-toolbar>\r\n\r\n      <div class=\"cards-container\">\r\n        <div class=\"formContainer\">\r\n          <form #createObservationForm=\"ngForm\" (ngSubmit)=\"onSubmitObservation(createObservationForm.value)\" >\r\n            <mat-card>\r\n              <fieldset [disabled]=\"disableObservationForm\" style=\"border: 0;\" [style.opacity]=\"disabledOpacity\">\r\n              <mat-card-content fxLayout=\"column\" fxLayoutGap=\"25px\" style=\"font-size: 15px;\">\r\n\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Title\" name=\"title\" ngModel #title=\"ngModel\" required>\r\n                  <mat-hint *ngIf=\"!title.touched\">Please enter the title of observation</mat-hint>\r\n                  <mat-error *ngIf=\"title.errors?.required\">\r\n                    Title is <strong>required</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Description\" name=\"description\" ngModel #description=\"ngModel\" required>\r\n                  <mat-hint *ngIf=\"!description.touched\">Please enter the description of observation</mat-hint>\r\n                  <mat-error *ngIf=\"description.errors?.required\">\r\n                    Description is <strong>required</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n                <!-- <div class=\"formInputGroup\" style=\"display:flex; flex-direction: row;\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Tags\">\r\n                  </mat-form-field>\r\n\r\n                  <button mat-icon-button color=\"primary\">\r\n                    <mat-icon style=\"font-size: 35px; margin-top: 12px;\">add_circle</mat-icon>\r\n                  </button>\r\n                </div> -->\r\n                <mat-form-field>\r\n                  <mat-chip-list #tagList>\r\n                    <mat-chip *ngFor=\"let tag of tags\" [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(tag)\"\r\n                      color=\"primary\">\r\n                      {{tag.tag}}\r\n                      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                    </mat-chip>\r\n                    <input placeholder=\"Tags for observation\" [matChipInputFor]=\"tagList\" \r\n                      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                      (matChipInputTokenEnd)=\"add($event)\" matTooltip=\"Press enter or comma for tags\">\r\n                  </mat-chip-list>\r\n                </mat-form-field>\r\n\r\n              </mat-card-content>\r\n            </fieldset>\r\n              <mat-card-actions style=\"text-align: right; padding: 10px;\">\r\n                <!-- <button mat-raised-button class=\"mat-subheading-1 center-align\" color=\"primary\" [routerLink]=\"'addfields'\">Manual</button> -->\r\n                <button mat-raised-button class=\"mat-subheading-1 center-align\" color=\"primary\" type=\"submit\"\r\n                  [disabled]=\"createObservationForm.invalid\" (click)=\"manualSelectionPage()\">Manual</button>\r\n                <button mat-raised-button class=\"mat-subheading-1 center-align\" color=\"accent\" type=\"submit\" [disabled]=\"createObservationForm.invalid\"\r\n                  (click)=\"importSelectionPage()\">Import</button>\r\n              </mat-card-actions>\r\n            </mat-card>\r\n          </form>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <!--Manual Record Selection Page-->\r\n    <div *ngIf=\"manualSelection\" fxFlex.sm=\"100\" class=\"cdk-card-holder\" fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\"\r\n      fxFlex=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"100\">\r\n\r\n      <mat-toolbar class=\"cards-header\">\r\n        <h1 class=\"mat-headline center-align\">Add Fields</h1>\r\n      </mat-toolbar>\r\n\r\n      <div class=\"cards-container\">\r\n        <div class=\"formContainer\">\r\n          <form #addFieldsFrom=\"ngForm\" (ngSubmit)=\"addObservationManually(addFieldsFrom)\">\r\n            <mat-card>\r\n\r\n              <mat-card-content fxLayout=\"column\" fxLayoutGap=\"35px\" style=\"font-size: 15px;\">\r\n\r\n                <div fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Title\" name=\"fieldTitle\" ngModel #fieldTitle=\"ngModel\" required>\r\n                    <mat-hint *ngIf=\"!fieldTitle.touched && fields.length === 0\">Please enter the title of field</mat-hint>\r\n                    <mat-error *ngIf=\"fields.length === 0 && fieldTitle.errors?.required\">\r\n                      Field is <strong>required</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n\r\n\r\n                    <mat-select placeholder=\"Field Type\" name=\"fieldType\" ngModel #fieldType=\"ngModel\" required>\r\n                      <mat-option *ngFor=\"let field of fieldsType | keyvalue\" [value]=\"field\">\r\n                        {{field.key}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-hint *ngIf=\"!fieldType.touched && fields.length === 0\">Please select field type</mat-hint>\r\n                    <mat-error *ngIf=\"fields.length === 0 && fieldType.hasError('required')\">\r\n                      Please select field <strong>type</strong>\r\n                    </mat-error>\r\n\r\n\r\n                  </mat-form-field>\r\n\r\n                  <button color=\"primary\" mat-icon-button [disabled]=\"addFieldsFrom.invalid\" (click)=\"addField(addFieldsFrom)\">\r\n                    <mat-icon style=\"font-size: 35px; margin-top: 22px;\">add_circle</mat-icon>\r\n                  </button>\r\n\r\n                </div>\r\n                <mat-nav-list #fieldList>\r\n                  <div *ngIf=\"fields.length > 0\" class=\"listHeader\" fxLayout=\"row\" fxLayoutGap=\"55px\" fxLayoutAlign=\"start space-around \">\r\n                    <span>Field Title</span>\r\n                    <span>Field Type</span>\r\n                  </div>\r\n                  <mat-list-item *ngFor=\"let field of fields\">\r\n                    <div fxLayout=\"row\" fxLayoutGap=\"55px\" fxLayoutAlign=\"start space-around\" style=\"margin-top:7px;\"\r\n                      fxFlex=\"1 1 auto\">\r\n                      <span fxFlex=\"65px\">{{field.fieldTitle}}</span>\r\n                      <span fxFlex=\"65px\">{{field.fieldType.key}}</span>\r\n                      <div style=\"position:relative; top: -10px;\">\r\n                        <button color=\"primary\" mat-icon-button (click)=\"removeField(field)\">\r\n                          <mat-icon>delete</mat-icon>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </mat-list-item>\r\n                </mat-nav-list>\r\n              </mat-card-content>\r\n              <mat-card-actions style=\"text-align: right; padding: 10px;\">\r\n                <button mat-raised-button class=\"mat-subheading-1 center-align\" color=\"primary\" (click)=\"cancelField()\">Cancel</button>\r\n                <button mat-raised-button class=\"mat-subheading-1 center-align\" color=\"accent\" [disabled]=\"(fields.length == 0)\"\r\n                  type=\"submit\">Create</button>\r\n              </mat-card-actions>\r\n            </mat-card>\r\n          </form>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <!--End Manual Record Selection Page-->\r\n\r\n    <!--Import Record Page-->\r\n\r\n    <div *ngIf=\"importSelection\" fxFlex.sm=\"100\" class=\"cdk-card-holder\" fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\"\r\n      fxFlex=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"100\">\r\n\r\n      <mat-toolbar class=\"cards-header\">\r\n        <h1 class=\"mat-headline center-align\">Import</h1>\r\n      </mat-toolbar>\r\n\r\n      <div class=\"cards-container\">\r\n        <div class=\"formContainer\">\r\n          <form #addImportUrlFrom=\"ngForm\" (ngSubmit)=\"addObservationByImport(addImportUrlFrom.value)\">\r\n            <mat-card>\r\n\r\n              <mat-card-content fxLayout=\"column\" fxLayoutGap=\"35px\" style=\"font-size: 15px;\">\r\n\r\n                <div fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Google Sheete Url\" name=\"urlInput\" ngModel #urlInput=\"ngModel\" required>\r\n                    <mat-hint *ngIf=\"!urlInput.touched && urlInput.length === 0\">Please enter the url of observation</mat-hint>\r\n                    <mat-error *ngIf=\"urlInput.length === 0 && urlInput.errors?.required\">\r\n                      Url is <strong>required</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </mat-card-content>\r\n              <mat-card-actions style=\"text-align: right; padding: 10px;\">\r\n                <button mat-raised-button class=\"mat-subheading-1 center-align\" color=\"primary\" type=\"button\" (click)=\"cancelImport()\">Cancel</button>\r\n                <button mat-raised-button class=\"mat-subheading-1 center-align\" color=\"accent\" [disabled]=\"addImportUrlFrom.invalid && fields.length == 0\"\r\n                  tytpe=\"submit\">Import</button>\r\n              </mat-card-actions>\r\n            </mat-card>\r\n          </form>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!--Import Record End-->\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/researcher/create-observation/create-observation.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/researcher/create-observation/create-observation.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 12px; }\n\n.cards-container {\n  padding: 19px; }\n\n.cdk-card-holder {\n  border: 1px solid #327ebd;\n  background-color: white;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.listHeader, .listItems {\n  border: 3px solid lightgray;\n  border-radius: 5px;\n  padding: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZWFyY2hlci9jcmVhdGUtb2JzZXJ2YXRpb24vQzpcXFVzZXJzXFxNaW5oYXpcXERvY3VtZW50c1xcYW5ndWxhclRlc3RzXFxjaXRpemVuLWZyb250L3NyY1xcYXBwXFxyZXNlYXJjaGVyXFxjcmVhdGUtb2JzZXJ2YXRpb25cXGNyZWF0ZS1vYnNlcnZhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osY0FBYSxFQUNiOztBQUNEO0VBQ0MsY0FBYSxFQUViOztBQUVGO0VBQ0MsMEJBQXlCO0VBQ3pCLHdCQUF1QjtFQUN2Qiw0QkFBMkI7RUFDM0IsNkJBQTRCLEVBQzVCOztBQUVEO0VBQ0MsNEJBQTJCO0VBQ3hCLG1CQUFrQjtFQUNsQixjQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcmVzZWFyY2hlci9jcmVhdGUtb2JzZXJ2YXRpb24vY3JlYXRlLW9ic2VydmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY2RrLWNhcmRzIHtcclxuXHQuY2FyZHMtaGVhZGVyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzMjdlYmQ7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRwYWRkaW5nOiAxMnB4O1xyXG5cdH1cclxuXHQuY2FyZHMtY29udGFpbmVyIHtcclxuXHRcdHBhZGRpbmc6IDE5cHg7XHJcblx0XHQvLyBjb2xvcjogd2hpdGU7XHJcblx0fVxyXG5cclxuLmNkay1jYXJkLWhvbGRlciB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzMyN2ViZDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmxpc3RIZWFkZXIsIC5saXN0SXRlbXN7XHJcblx0Ym9yZGVyOiAzcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/researcher/create-observation/create-observation.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/researcher/create-observation/create-observation.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateObservationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateObservationComponent", function() { return CreateObservationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_observation_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/observation.model */ "./src/app/models/observation.model.ts");
/* harmony import */ var src_app_services_observation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/observation.service */ "./src/app/services/observation.service.ts");
/* harmony import */ var src_app_services_google_app_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/google-app-service.service */ "./src/app/services/google-app-service.service.ts");
/* harmony import */ var src_app_services_record_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/record.service */ "./src/app/services/record.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreateObservationComponent = /** @class */ (function () {
    function CreateObservationComponent(route, fb, snackBar, observationService, googleAppService, addRecordService) {
        this.route = route;
        this.fb = fb;
        this.snackBar = snackBar;
        this.observationService = observationService;
        this.googleAppService = googleAppService;
        this.addRecordService = addRecordService;
        this.fieldsType = new Map([
            ['File', 1],
            ['Number', 2],
            ['Text', 3]
        ]);
        this.fields = [];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.tags = [];
        this.manualSelection = false;
        this.importSelection = false;
        this.observation = new src_app_models_observation_model__WEBPACK_IMPORTED_MODULE_5__["Observation"]();
    }
    CreateObservationComponent.prototype.ngOnInit = function () {
    };
    CreateObservationComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.tags.push({ tag: value.trim() });
        }
        if (input) {
            input.value = '';
        }
    };
    CreateObservationComponent.prototype.remove = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    };
    CreateObservationComponent.prototype.onSubmitObservation = function (observation) {
        console.log(observation.title);
        this.observation.title = observation['title'];
        this.observation.description = observation['description'];
        this.observation.category = 1;
        this.observation.tags = this.tags.map(function (t) { return t.tag; });
        this.disableForm();
        // console.log(this.observation);
        // console.log(observationForm.value);
    };
    CreateObservationComponent.prototype.manualSelectionPage = function () {
        this.manualSelection = true;
        this.importSelection = false;
    };
    CreateObservationComponent.prototype.importSelectionPage = function () {
        this.importSelection = true;
        this.manualSelection = false;
    };
    CreateObservationComponent.prototype.addField = function (fieldForm) {
        this.fields.push(fieldForm.value);
        fieldForm.reset();
        console.log(this.fields);
    };
    CreateObservationComponent.prototype.removeField = function (field) {
        var index = this.fields.indexOf(field);
        this.fields.splice(index, 1);
    };
    CreateObservationComponent.prototype.addObservationManually = function (addFieldsFrom) {
        var _this = this;
        this.observation.fields = this.fields.map(function (val) { return ({
            fieldTitle: val.fieldTitle,
            fieldType: val.fieldType['value']
        }); });
        console.log(JSON.stringify(this.observation));
        this.observationService.addObservation(this.observation)
            .subscribe(function (data) {
            console.log(data);
            _this.snackBarMessage('Observation added successfully', 'Success');
        }, function (error) {
            console.log(error);
            _this.snackBarMessage('Failed to add Observation', 'Failed');
        });
        addFieldsFrom.resetForm();
        this.createObservationForm.resetForm();
        this.manualSelection = false;
        this.enableForm();
        // this.route.navigateByUrl('/citizenpanel/list');
    };
    CreateObservationComponent.prototype.addObservationByImport = function (urlString) {
        var _this = this;
        var url = urlString['urlInput'].toString();
        var idExp = new RegExp(/[-\w]{25,}/);
        var urlId = idExp.exec(url)[0];
        // let prr = this.googleAppService.load(urlId)
        //   .then( (data) => {
        //     return this.data = data;
        //     // for(let v of data['0']){
        //     //   console.log(v);
        //     // }
        //   },
        //   (error) => {
        //     console.log(error);
        //   })
        // this.googleAppService.load(urlId)
        //   .subscribe(data => {
        //     this.data = data;
        //     // console.log(data[0]);
        //     let singleSubject = data[0];
        //       for(let key in singleSubject){
        //         let val = {'fieldTitle': key, 'fieldType': 3}
        //         this.fields.push(val)
        //       }
        //       this.observation.fields = this.fields;
        //       this.observation.category = 1;
        //       console.log(this.observation);
        //       this.observationService.addObservation(this.observation)
        //         .subscribe(res => {
        //           console.log(res['observationId']);
        //           this.snackBarMessage('Observation created Successfully', 'success');
        //           // let record = {
        //           //   'observationId': res['observationId'],
        //           //   'data': this.data.forEach(element => {
        //           //     return element 
        //           //   })
        //           // }
        //           // console.log(record);
        //           // this.addRecordService.addRecord(record).subscribe(res => {
        //           //   console.log('record added successfully');
        //           // })
        //         },
        //         (err) => {
        //           this.snackBarMessage('Observation can\'t be added', 'failed' );
        //         })
        //       // console.log(this.fields);
        //   },
        //   (error) => {
        //     console.log('Can\'t load data');
        //   },
        //   () =>{
        //   })
        var message = '';
        var data = {};
        this.observation.fields = [];
        this.observationService.addObservation(this.observation)
            .subscribe(function (res) {
            // console.log(res);
            data = {
                'observationId': res['observationId'],
                'spreadSheetId': urlId
            };
            _this.googleAppService.importSreadsheet(data)
                .subscribe(function (resImport) {
                _this.snackBarMessage(resImport.toString(), 'Success');
            }, function (error) {
                if (error.status === 400)
                    message = error.error.error.toString().split();
                _this.snackBarMessage(message, "Falied");
                console.log(error);
            });
            console.log(data);
            _this.snackBarMessage('Observation imported successfully', 'Success');
        }, function (error) {
            console.log(error);
            _this.snackBarMessage('Failed to add Observation', 'Failed');
        });
    };
    CreateObservationComponent.prototype.disableForm = function () {
        this.disableObservationForm = true;
        this.disabledOpacity = 0.5;
    };
    CreateObservationComponent.prototype.enableForm = function () {
        this.disableObservationForm = false;
        this.disabledOpacity = 1;
    };
    CreateObservationComponent.prototype.cancelField = function () {
        this.fields = [];
        this.manualSelection = false;
        this.enableForm();
    };
    CreateObservationComponent.prototype.cancelImport = function () {
        this.enableForm();
        this.importSelection = false;
    };
    CreateObservationComponent.prototype.snackBarMessage = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5500
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("createObservationForm"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], CreateObservationComponent.prototype, "createObservationForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("addFieldsFrom"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], CreateObservationComponent.prototype, "addFieldsFrom", void 0);
    CreateObservationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-observation',
            template: __webpack_require__(/*! ./create-observation.component.html */ "./src/app/researcher/create-observation/create-observation.component.html"),
            styles: [__webpack_require__(/*! ./create-observation.component.scss */ "./src/app/researcher/create-observation/create-observation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            src_app_services_observation_service__WEBPACK_IMPORTED_MODULE_6__["ObservationService"],
            src_app_services_google_app_service_service__WEBPACK_IMPORTED_MODULE_7__["GoogleAppServiceService"],
            src_app_services_record_service__WEBPACK_IMPORTED_MODULE_8__["RecordService"]])
    ], CreateObservationComponent);
    return CreateObservationComponent;
}());



/***/ }),

/***/ "./src/app/researcher/explore-observations/explore-observations.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/researcher/explore-observations/explore-observations.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-header {\r\n    background-color: #327ebd;\r\n    color: white;\r\n    padding: 12px;\r\n}\r\n\r\n.cards-container {\r\n    padding: 19px;\r\n}\r\n\r\n.cdk-card-holder {\r\n    border: 1px solid #327ebd;\r\n    background-color: white;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.listHeader, .listItems {\r\n    border: 3px solid lightgray;\r\n    border-radius: 5px;\r\n    padding: 12px;\r\n}\r\n\r\n.observation-table {\r\n    min-height: 360px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.spinner-container{\r\n    margin-top: 50px;\r\n}\r\n\r\n.spinner-container mat-spinner {\r\n    margin: auto;\r\n}\r\n\r\n.mat-table_message{\r\n    text-align: center;\r\n    opacity: 0.8;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZWFyY2hlci9leHBsb3JlLW9ic2VydmF0aW9ucy9leHBsb3JlLW9ic2VydmF0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDZCQUE2QjtDQUNoQzs7QUFFRDtJQUNJLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9yZXNlYXJjaGVyL2V4cGxvcmUtb2JzZXJ2YXRpb25zL2V4cGxvcmUtb2JzZXJ2YXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHMtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjdlYmQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4uY2FyZHMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE5cHg7XHJcbn1cclxuXHJcbi5jZGstY2FyZC1ob2xkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMyN2ViZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmxpc3RIZWFkZXIsIC5saXN0SXRlbXMge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLm9ic2VydmF0aW9uLXRhYmxlIHtcclxuICAgIG1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4uc3Bpbm5lci1jb250YWluZXIgbWF0LXNwaW5uZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LXRhYmxlX21lc3NhZ2V7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/researcher/explore-observations/explore-observations.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/researcher/explore-observations/explore-observations.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"components-container-gt-xs\" fxLayoutGap=\"20px\" >\r\n\r\n  <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"10px\">\r\n\r\n    <div fxFlex.sm=\"100\" class=\"cdk-card-holder\" fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" fxFlex\r\n      fxFlex.md=\"50\" fxFlex.sm=\"100\">\r\n\r\n      <mat-toolbar class=\"cards-header\">\r\n        <h1 class=\"mat-headline center-align\">Observations List</h1>\r\n      </mat-toolbar>\r\n\r\n      <div class=\"cards-container\">\r\n\r\n        <mat-card>\r\n\r\n          <mat-card-content fxLayout=\"column\" fxLayoutGap=\"25px\" style=\"font-size: 15px;\">\r\n            <mat-form-field style=\"max-width: 35%;\">\r\n\r\n              <input matTooltip=\"Search by title, tags\" matInput placeholder=\"Search observations\" #searchInput>\r\n\r\n            </mat-form-field>\r\n\r\n            <!-- <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\r\n\r\n              <mat-spinner [diameter]=\"35\"></mat-spinner>\r\n\r\n            </div> -->\r\n\r\n            <mat-table class=\"lmat-elevation-z8\" [dataSource]=\"dataSource\" matSort matSortActive=\"id\" matSortDirection=\"asc\"\r\n              matSortDisableClear>\r\n              <!-- Material table HTML -->\r\n              <ng-container matColumnDef=\"title\">\r\n                <!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Title</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let observation\">{{observation.title}}</mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"description\">\r\n                \r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Description</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let observation\">{{observation.description}}</mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"category\">\r\n                \r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Category</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let observation\">{{observation.category}}</mat-cell>\r\n              </ng-container>\r\n              <!-- <ng-container matColumnDef=\"fields\">\r\n                \r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Fields</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let observation\">\r\n                  <ng-template *ngFor=\"let field of observation.fields\">\r\n                    <span>{{field.title}}</span>\r\n                  </ng-template>\r\n                </mat-cell>\r\n              </ng-container> -->\r\n              <ng-container matColumnDef=\"tags\">\r\n                \r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Tags</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let observation\">{{observation.tags}}</mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"date\">\r\n                \r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let observation\">{{observation.updatedTime}}</mat-cell>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"actions\">\r\n                <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">\r\n                  <button matTooltip=\"View Records\" mat-icon-button (click)=\"viewRecords(row)\" color=\"primary\">\r\n                    <mat-icon>receipt</mat-icon>\r\n                  </button>\r\n                  <button matTooltip=\"Edit Observation\" mat-icon-button (click)=\"editObservation(row)\" color=\"primary\">\r\n                    <mat-icon>edit</mat-icon>\r\n                  </button>\r\n                  <button matTooltip=\"Delete Observation\" mat-icon-button (click)=\"deleteObservation(row)\" color=\"warn\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button>\r\n                </mat-cell>\r\n              </ng-container>\r\n\r\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n              <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n            </mat-table>\r\n            <div class=\"mat-table_message\" *ngIf=\"!dataSource.hasItems\">No records found</div><!-- Message for empty data  -->\r\n            <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\r\n\r\n              <mat-spinner [diameter]=\"35\"></mat-spinner>\r\n\r\n            </div>\r\n\r\n            <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[3, 5, 10]\" [length]=\"dataSource.paginatorTotal$ | async\"\r\n              [showFirstLastButtons]=\"true\"></mat-paginator>\r\n            <!-- <mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner> -->\r\n\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!--Records Grid-->\r\n    <!-- <div fxFlex.sm=\"100\" class=\"cdk-card-holder\" fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" fxFlex=\"50\"\r\n        fxFlex.md=\"50\" fxFlex.sm=\"100\">\r\n  \r\n        <mat-toolbar class=\"cards-header\">\r\n          <h1 class=\"mat-headline center-align\">Records</h1>\r\n        </mat-toolbar>\r\n  \r\n        <div class=\"cards-container\">\r\n          <div class=\"formContainer\">\r\n            <form #createObservationForm=\"ngForm\">\r\n              <mat-card>\r\n  \r\n                <mat-card-content fxLayout=\"column\" fxLayoutGap=\"25px\" style=\"font-size: 15px;\">\r\n\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </form>\r\n          </div>\r\n  \r\n        </div>\r\n      </div> -->\r\n  </div>"

/***/ }),

/***/ "./src/app/researcher/explore-observations/explore-observations.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/researcher/explore-observations/explore-observations.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ExploreObservationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreObservationsComponent", function() { return ExploreObservationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_observation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/observation.service */ "./src/app/services/observation.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_observation_datasource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/observation.datasource */ "./src/app/services/observation.datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExploreObservationsComponent = /** @class */ (function () {
    function ExploreObservationsComponent(observationService, route, router) {
        this.observationService = observationService;
        this.route = route;
        this.router = router;
        // Columns which should view in table
        this.displayedColumns = ['title', 'description', 'category', 'date', 'tags', 'actions'];
    }
    ExploreObservationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.accountId = currentUser['accountId'];
        this.dataSource = new src_app_services_observation_datasource__WEBPACK_IMPORTED_MODULE_6__["ObservationDataSource"](this.observationService);
        this.dataSource.loadObservations('', this.accountId, 0, 10, 'asc');
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { _this.loadObservationList(); }))
            .subscribe();
        // Filtration, bind to searchInput
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.searchInput.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), // This operator will eliminate duplicate values
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadObservationList();
        }))
            .subscribe();
    };
    ExploreObservationsComponent.prototype.loadObservationList = function () {
        this.dataSource.loadObservations(this.searchInput.nativeElement['value'], this.accountId, this.paginator.pageIndex, this.paginator.pageSize, this.sort.direction);
    };
    ExploreObservationsComponent.prototype.viewRecords = function (observation) {
        // console.log(observation['observationId']);
        this.router.navigateByUrl("citizenpanel/listrecords/" + observation['observationId']);
    };
    ExploreObservationsComponent.prototype.editObservation = function (observation) {
        this.router.navigateByUrl("citizenpanel/updateobservation/" + observation['observationId']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ExploreObservationsComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ExploreObservationsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ExploreObservationsComponent.prototype, "searchInput", void 0);
    ExploreObservationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-explore-observations',
            template: __webpack_require__(/*! ./explore-observations.component.html */ "./src/app/researcher/explore-observations/explore-observations.component.html"),
            styles: [__webpack_require__(/*! ./explore-observations.component.css */ "./src/app/researcher/explore-observations/explore-observations.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_observation_service__WEBPACK_IMPORTED_MODULE_1__["ObservationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ExploreObservationsComponent);
    return ExploreObservationsComponent;
}());



/***/ }),

/***/ "./src/app/researcher/list-records/list-records.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/researcher/list-records/list-records.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" fxFlexFil fxFill class=\"components-container-gt-xs \">\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\" fxFlexFil fxFill fxLayoutGap=\"20px\">\r\n\r\n    <div fxFlex=\"65\" fxLayout=\"column\" class=\"mat-elevation-z2 record-list-container\" style=\"padding: 12px;\">\r\n\r\n      <div fxFlex=\"10\" fxLayoutAlign=\"start center\" fxLayout=\"row\">\r\n\r\n        <h3 class=\"mat-headline\">Observation Record</h3>\r\n\r\n      </div>\r\n\r\n      <mat-divider></mat-divider>\r\n\r\n      <div fxFlex=\"10\" fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\r\n\r\n        <div fxflex=\"50\" class=\"full\">\r\n          <mat-form-field class=\"full\">\r\n            <input matInput placeholder=\"search\" #searchInput>\r\n            <mat-icon matSuffix>search</mat-icon>\r\n          </mat-form-field>\r\n\r\n\r\n        </div>\r\n\r\n        <div fxFlex=\"30\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n          <button mat-raised-button color=\"primary\" (click)=\"addRecord()\">Add Record</button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- \r\n      <div fxFlex=\"10\" class=\"record-list-header\" fxLayout=\"row\" fxLayoutAlign=\"space-around stretch\">\r\n\r\n        <div fxFlex=\"10\">\r\n          <mat-checkbox class=\"checkbox\"></mat-checkbox>\r\n        </div>\r\n        <div fxFlex=\"10\">\r\n          <button mat-icon-button>\r\n            <mat-icon>sort</mat-icon>\r\n          </button>\r\n        </div>\r\n        <div fxFlex=\"10\">\r\n          <button mat-icon-button>\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n        </div>\r\n\r\n        <div fxFlex=\"80\" fxLayoutAlign=\"end center\">\r\n\r\n          <button mat-raised-button>ADD TAGS</button>\r\n\r\n        </div>\r\n\r\n      </div> -->\r\n      <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" class=\"record-list-container\">\r\n\r\n        <div class=\"record-list\">\r\n          <perfect-scrollbar>\r\n            <mat-table class=\"lmat-elevation-z8\" [dataSource]=\"dataSource\" matSort matSortActive=\"id\" matSortDirection=\"asc\"\r\n              matSortDisableClear style=\"height: 550px;\">\r\n              <!-- Material table HTML -->\r\n              <!-- <ng-container *ngFor=\"let rec of dataSource.records\">\r\n\r\n              </ng-container> -->\r\n              <ng-container matColumnDef=\"field\">\r\n\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Field</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let records\">{{records.fieldName}}</mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"value\">\r\n\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Value</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let records\">{{records.fieldValue}}</mat-cell>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"actions\">\r\n                <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">\r\n                  <button matTooltip=\"Edit Records\" mat-icon-button (click)=\"editObservation(row)\" color=\"primary\">\r\n                    <mat-icon>edit</mat-icon>\r\n                  </button>\r\n                  <button matTooltip=\"Delete Records\" mat-icon-button (click)=\"deleteObservation(row)\" color=\"warn\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button>\r\n                </mat-cell>\r\n              </ng-container>\r\n\r\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n              <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n            </mat-table>\r\n          </perfect-scrollbar>\r\n          <div class=\"mat-table_message\" *ngIf=\"!dataSource.hasItems\" style=\"margin-top: 12px;\">No records found</div><!-- Message for empty data  -->\r\n          <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\r\n\r\n            <mat-spinner [diameter]=\"35\"></mat-spinner>\r\n\r\n          </div>\r\n\r\n          <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[3, 5, 10]\" [length]=\"dataSource.paginatorTotal$ | async\"\r\n            [showFirstLastButtons]=\"true\"></mat-paginator>\r\n          <!-- <mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner> -->\r\n        </div>\r\n\r\n        <mat-divider></mat-divider>\r\n\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <!-- Observation details panel-->\r\n\r\n    <div fxFlex=\"35\" fxLayout=\"column\" class=\"mat-elevation-z2 record-add\">\r\n\r\n      <div fxFlex=\"10\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n\r\n        <h3 class=\"mat-headline\" fxFlex>Observation Details</h3>\r\n\r\n      </div>\r\n      <mat-divider></mat-divider>\r\n\r\n      <div fxFlex=\"10\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n        <div fxFlex=\"40\">\r\n          <h3 class=\"mat-subheading-2 center-align\">Title</h3>\r\n\r\n        </div>\r\n        <div fxFlex=\"60\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n          <h3 class=\"mat-title\">{{observationDetails.title}}</h3>\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <div fxFlex=\"10\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n        <div fxFlex=\"40\">\r\n          <h3 class=\"mat-subheading-2 center-align\">Description</h3>\r\n\r\n        </div>\r\n        <div fxFlex=\"60\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n          <h3 class=\"mat-title\">{{observationDetails.description}}</h3>\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <div fxFlex=\"10\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n        <div fxFlex=\"40\">\r\n          <h3 class=\"mat-subheading-2 center-align\">Category</h3>\r\n\r\n        </div>\r\n        <div fxFlex=\"60\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n          <h3 class=\"mat-title\">{{observationDetails.category}}</h3>\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"space-between start\" style=\"margin-top: 10px;\">\r\n\r\n        <div>\r\n          <h3 class=\"mat-subheading-2 center-align\">Fields</h3>\r\n\r\n        </div>\r\n        <perfect-scrollbar>\r\n          <div style=\"width: 100%; height: 190px; overflow: visible; margin-bottom: 30px;\">\r\n            <mat-nav-list fxFlex>\r\n              <mat-list-item *ngFor=\"let field of observationDetails.fields\">\r\n                <div fxLayout=\"row\" fxLayoutGap=\"55px\" fxLayoutAlign=\"start space-around\">\r\n                  <span fxFlex=\"65px\">{{field.title}}</span>\r\n                  <span fxFlex=\"65px\">{{field.type}}</span>\r\n                </div>\r\n                <mat-divider></mat-divider>\r\n              </mat-list-item>\r\n\r\n            </mat-nav-list>\r\n          </div>\r\n        </perfect-scrollbar>\r\n      </div>\r\n\r\n      <mat-divider></mat-divider>\r\n      <div fxFlex=\"10\" fxLayout=\"column\" fxLayoutAlign=\"space-between start\">\r\n\r\n        <div fxFlex=\"40\">\r\n          <h3 class=\"mat-subheading-2 center-align\">Tags</h3>\r\n\r\n        </div>\r\n        <div fxFlex=\"60\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n          <mat-chip-list *ngFor=\"let tag of observationDetails.tags\" style=\"box-sizing: border-box; padding-right: 5px;\">\r\n            <mat-chip color=\"primary\">{{tag}}</mat-chip>\r\n          </mat-chip-list>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <!-- <div fxFlex=\"10\" fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutAlign=\"center start\">\r\n        <div fxFlex=\"50\" fxLayout.lt-lg=\"100\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"phone\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"50\" fxLayout.lt-lg=\"100\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Office\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div fxFlex=\"10\" fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutAlign=\"center start\">\r\n        <div fxFlex=\"50\" fxLayout.lt-lg=\"100\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"skype\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"50\" fxLayout.lt-lg=\"100\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Email\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div> -->\r\n\r\n      <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"end flex-end\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\r\n          <button mat-raised-button color=\"primary\">Update</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/researcher/list-records/list-records.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/researcher/list-records/list-records.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full {\n  width: 100%; }\n\n.record-list-container {\n  background-color: white;\n  padding: 10px; }\n\n.record-list-container .record-list {\n    overflow: auto; }\n\n.record-list-container .record-list div {\n      margin: 0; }\n\n.record-list-container .record-list h3 {\n      margin: 0; }\n\n.record-list-container .record-list p {\n      margin: 0; }\n\n.record-list-container .record-list .avatar {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%; }\n\n.record-list-container .record-list .spinner-container {\n      margin-top: 50px; }\n\n.record-list-container .record-list .spinner-container mat-spinner {\n      margin: auto; }\n\n.record-list-container .record-list .mat-table_message {\n      text-align: center;\n      opacity: 0.8; }\n\n.record-list-container .record-list-header {\n    background-color: #eee;\n    padding: 10px; }\n\n.record-list-container .record-list-header div {\n      margin: auto; }\n\n.record-add {\n  padding: 15px;\n  background: white; }\n\n.record-add .avatar {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%; }\n\n.record-add h3 {\n    margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZWFyY2hlci9saXN0LXJlY29yZHMvQzpcXFVzZXJzXFxNaW5oYXpcXERvY3VtZW50c1xcYW5ndWxhclRlc3RzXFxjaXRpemVuLWZyb250L3NyY1xcYXBwXFxyZXNlYXJjaGVyXFxsaXN0LXJlY29yZHNcXGxpc3QtcmVjb3Jkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVcsRUFDWDs7QUFDRDtFQUNDLHdCQUF1QjtFQUN2QixjQUFhLEVBdUNiOztBQXpDRDtJQUtFLGVBQWMsRUEwQmQ7O0FBL0JGO01BT0csVUFBUyxFQUNUOztBQVJIO01BVUcsVUFBUyxFQUNUOztBQVhIO01BYUcsVUFBUyxFQUNUOztBQWRIO01BZ0JHLFlBQVc7TUFDWCxhQUFZO01BQ1osbUJBQWtCLEVBQ2xCOztBQW5CSDtNQXFCRyxpQkFBZ0IsRUFDaEI7O0FBdEJIO01Bd0JHLGFBQVksRUFDWjs7QUF6Qkg7TUE0QkcsbUJBQWtCO01BQ2xCLGFBQVksRUFDWjs7QUE5Qkg7SUFrQ0UsdUJBQXNCO0lBQ3RCLGNBQWEsRUFLYjs7QUF4Q0Y7TUFxQ0csYUFBWSxFQUNaOztBQUlIO0VBQ0UsY0FBYTtFQUNiLGtCQUFpQixFQVNqQjs7QUFYRjtJQUlHLGFBQVk7SUFDWixjQUFhO0lBQ2IsbUJBQWtCLEVBQ2xCOztBQVBIO0lBU0csYUFBWSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvcmVzZWFyY2hlci9saXN0LXJlY29yZHMvbGlzdC1yZWNvcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi5yZWNvcmQtbGlzdC1jb250YWluZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblxyXG5cdC5yZWNvcmQtbGlzdCB7XHJcblx0XHRvdmVyZmxvdzogYXV0bztcclxuXHRcdGRpdiB7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdH1cclxuXHRcdGgzIHtcclxuXHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0fVxyXG5cdFx0cCB7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdH1cclxuXHRcdC5hdmF0YXIge1xyXG5cdFx0XHR3aWR0aDogNDBweDtcclxuXHRcdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHR9XHJcblx0XHQuc3Bpbm5lci1jb250YWluZXJ7XHJcblx0XHRcdG1hcmdpbi10b3A6IDUwcHg7XHJcblx0XHR9XHJcblx0XHQuc3Bpbm5lci1jb250YWluZXIgbWF0LXNwaW5uZXIge1xyXG5cdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHR9XHJcblxyXG5cdFx0Lm1hdC10YWJsZV9tZXNzYWdle1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdG9wYWNpdHk6IDAuODtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LnJlY29yZC1saXN0LWhlYWRlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHRcdGRpdiB7XHJcblx0XHRcdG1hcmdpbjogYXV0bztcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxufVxyXG4ucmVjb3JkLWFkZCB7XHJcblx0XHRwYWRkaW5nOiAxNXB4O1xyXG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0XHQuYXZhdGFyIHtcclxuXHRcdFx0d2lkdGg6IDEyMHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDEyMHB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHR9XHJcblx0XHRoMyB7XHJcblx0XHRcdG1hcmdpbjogYXV0bztcclxuXHRcdH1cclxuXHR9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/researcher/list-records/list-records.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/researcher/list-records/list-records.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListRecordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRecordsComponent", function() { return ListRecordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_observation_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/observation.model */ "./src/app/models/observation.model.ts");
/* harmony import */ var src_app_services_record_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/record.datasource */ "./src/app/services/record.datasource.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_record_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/record.service */ "./src/app/services/record.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListRecordsComponent = /** @class */ (function () {
    function ListRecordsComponent(route, router, recordService) {
        this.route = route;
        this.router = router;
        this.recordService = recordService;
        this.checked = false;
        this.indeterminate = false;
        this.displayedColumns = ['field', 'value', 'actions'];
    }
    ;
    ListRecordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observationDetails = new src_app_models_observation_model__WEBPACK_IMPORTED_MODULE_2__["Observation"]();
        this.observationDetails = this.route.snapshot.data.data.observations[0];
        this.dataSource = new src_app_services_record_datasource__WEBPACK_IMPORTED_MODULE_3__["RecordDataSource"](this.recordService);
        this.dataSource.loadRecords(this.observationDetails.observationId, 0, 10, '');
        this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        // console.log(this.observationDetails);
        /* Data load will be triggered in two cases:
    - when a pagination event occurs => this.paginator.page
    - when a sort event occurs => this.sort.sortChange
    **/
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () { _this.loadRecordsList(); }))
            .subscribe();
        // Filtration, bind to searchInput
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.searchInput.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), // This operator will eliminate duplicate values
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadRecordsList();
        }))
            .subscribe();
    };
    ;
    ListRecordsComponent.prototype.loadRecordsList = function () {
        this.dataSource.loadRecords(this.observationDetails.observationId, this.paginator.pageIndex, this.paginator.pageSize, this.searchInput.nativeElement['value']);
    };
    ListRecordsComponent.prototype.addRecord = function () {
        this.router.navigateByUrl("citizenpanel/addrecord/" + this.observationDetails.observationId);
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], ListRecordsComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ListRecordsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListRecordsComponent.prototype, "searchInput", void 0);
    ListRecordsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-records',
            template: __webpack_require__(/*! ./list-records.component.html */ "./src/app/researcher/list-records/list-records.component.html"),
            styles: [__webpack_require__(/*! ./list-records.component.scss */ "./src/app/researcher/list-records/list-records.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_record_service__WEBPACK_IMPORTED_MODULE_5__["RecordService"]])
    ], ListRecordsComponent);
    return ListRecordsComponent;
}());



/***/ }),

/***/ "./src/app/researcher/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/researcher/list/list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-header {\r\n    background-color: #327ebd;\r\n    color: white;\r\n    padding: 12px;\r\n}\r\n\r\n.cards-container {\r\n    padding: 19px;\r\n}\r\n\r\n.cdk-card-holder {\r\n    border: 1px solid #327ebd;\r\n    background-color: white;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.listHeader, .listItems {\r\n    border: 3px solid lightgray;\r\n    border-radius: 5px;\r\n    padding: 12px;\r\n}\r\n\r\n.observation-table {\r\n    min-height: 360px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.spinner-container{\r\n    margin-top: 50px;\r\n}\r\n\r\n.spinner-container mat-spinner {\r\n    margin: auto;\r\n}\r\n\r\n.mat-table_message{\r\n    text-align: center;\r\n    opacity: 0.8;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZWFyY2hlci9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsY0FBYztDQUNqQjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7Q0FDaEM7O0FBRUQ7SUFDSSw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUNEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcmVzZWFyY2hlci9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkcy1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi5jYXJkcy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTlweDtcclxufVxyXG5cclxuLmNkay1jYXJkLWhvbGRlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzI3ZWJkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubGlzdEhlYWRlciwgLmxpc3RJdGVtcyB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4ub2JzZXJ2YXRpb24tdGFibGUge1xyXG4gICAgbWluLWhlaWdodDogMzYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc3Bpbm5lci1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5zcGlubmVyLWNvbnRhaW5lciBtYXQtc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtdGFibGVfbWVzc2FnZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/researcher/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/researcher/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"components-container-gt-xs\" fxLayoutGap=\"20px\" >\r\n\r\n  <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"10px\">\r\n\r\n    <div fxFlex.sm=\"100\" class=\"cdk-card-holder\" fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" fxFlex\r\n      fxFlex.md=\"50\" fxFlex.sm=\"100\">\r\n\r\n      <mat-toolbar class=\"cards-header\">\r\n        <h1 class=\"mat-headline center-align\">Observations List</h1>\r\n      </mat-toolbar>\r\n\r\n      <div class=\"cards-container\">\r\n\r\n        <mat-card>\r\n\r\n          <mat-card-content fxLayout=\"column\" fxLayoutGap=\"25px\" style=\"font-size: 15px;\">\r\n            <mat-form-field style=\"max-width: 35%;\">\r\n\r\n              <input matTooltip=\"Search by title, tags\" matInput placeholder=\"Search observations\" #searchInput>\r\n\r\n            </mat-form-field>\r\n\r\n            <!-- <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\r\n\r\n              <mat-spinner [diameter]=\"35\"></mat-spinner>\r\n\r\n            </div> -->\r\n\r\n            <mat-table class=\"lmat-elevation-z8\" [dataSource]=\"dataSource\" matSort matSortActive=\"id\" matSortDirection=\"asc\"\r\n              matSortDisableClear>\r\n              <!-- Material table HTML -->\r\n              <ng-container matColumnDef=\"title\">\r\n                <!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Title</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let observation\">{{observation.title}}</mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"description\">\r\n                \r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Description</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let observation\">{{observation.description}}</mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"category\">\r\n                \r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Category</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let observation\">{{observation.category}}</mat-cell>\r\n              </ng-container>\r\n              <!-- <ng-container matColumnDef=\"fields\">\r\n                \r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Fields</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let observation\">\r\n                  <ng-template *ngFor=\"let field of observation.fields\">\r\n                    <span>{{field.title}}</span>\r\n                  </ng-template>\r\n                </mat-cell>\r\n              </ng-container> -->\r\n              <ng-container matColumnDef=\"tags\">\r\n                \r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Tags</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let observation\">{{observation.tags}}</mat-cell>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"date\">\r\n                \r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let observation\">{{observation.updatedTime}}</mat-cell>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"actions\">\r\n                <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">\r\n                  <button matTooltip=\"View Records\" mat-icon-button (click)=\"viewRecords(row)\" color=\"primary\">\r\n                    <mat-icon>receipt</mat-icon>\r\n                  </button>\r\n                  <button matTooltip=\"Edit Observation\" mat-icon-button (click)=\"editObservation(row)\" color=\"primary\">\r\n                    <mat-icon>edit</mat-icon>\r\n                  </button>\r\n                  <button matTooltip=\"Delete Observation\" mat-icon-button (click)=\"deleteObservation(row)\" color=\"warn\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button>\r\n                </mat-cell>\r\n              </ng-container>\r\n\r\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n              <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n            </mat-table>\r\n            <div class=\"mat-table_message\" *ngIf=\"!dataSource.hasItems\">No records found</div><!-- Message for empty data  -->\r\n            <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\r\n\r\n              <mat-spinner [diameter]=\"35\"></mat-spinner>\r\n\r\n            </div>\r\n\r\n            <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[3, 5, 10]\" [length]=\"dataSource.paginatorTotal$ | async\"\r\n              [showFirstLastButtons]=\"true\"></mat-paginator>\r\n            <!-- <mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner> -->\r\n\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!--Records Grid-->\r\n    <!-- <div fxFlex.sm=\"100\" class=\"cdk-card-holder\" fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" fxFlex=\"50\"\r\n        fxFlex.md=\"50\" fxFlex.sm=\"100\">\r\n  \r\n        <mat-toolbar class=\"cards-header\">\r\n          <h1 class=\"mat-headline center-align\">Records</h1>\r\n        </mat-toolbar>\r\n  \r\n        <div class=\"cards-container\">\r\n          <div class=\"formContainer\">\r\n            <form #createObservationForm=\"ngForm\">\r\n              <mat-card>\r\n  \r\n                <mat-card-content fxLayout=\"column\" fxLayoutGap=\"25px\" style=\"font-size: 15px;\">\r\n\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </form>\r\n          </div>\r\n  \r\n        </div>\r\n      </div> -->\r\n  </div>"

/***/ }),

/***/ "./src/app/researcher/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/researcher/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_observation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/observation.service */ "./src/app/services/observation.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_observation_datasource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/observation.datasource */ "./src/app/services/observation.datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListComponent = /** @class */ (function () {
    function ListComponent(observationService, route, router) {
        this.observationService = observationService;
        this.route = route;
        this.router = router;
        // Columns which should view in table
        this.displayedColumns = ['title', 'description', 'category', 'date', 'tags', 'actions'];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.accountId = currentUser['accountId'];
        this.dataSource = new src_app_services_observation_datasource__WEBPACK_IMPORTED_MODULE_6__["ObservationDataSource"](this.observationService);
        this.dataSource.loadObservations('', this.accountId, 0, 10, 'asc');
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { _this.loadObservationList(); }))
            .subscribe();
        // Filtration, bind to searchInput
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.searchInput.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), // This operator will eliminate duplicate values
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadObservationList();
        }))
            .subscribe();
    };
    ListComponent.prototype.loadObservationList = function () {
        this.dataSource.loadObservations(this.searchInput.nativeElement['value'], this.accountId, this.paginator.pageIndex, this.paginator.pageSize, this.sort.direction);
    };
    ListComponent.prototype.viewRecords = function (observation) {
        // console.log(observation['observationId']);
        this.router.navigateByUrl("citizenpanel/listrecords/" + observation['observationId']);
    };
    ListComponent.prototype.editObservation = function (observation) {
        this.router.navigateByUrl("citizenpanel/updateobservation/" + observation['observationId']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListComponent.prototype, "searchInput", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/researcher/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/researcher/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_observation_service__WEBPACK_IMPORTED_MODULE_1__["ObservationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/researcher/researcher.component.html":
/*!******************************************************!*\
  !*** ./src/app/researcher/researcher.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-sidenav-container class=\"container\" fullscreen>\r\n    <mat-sidenav [mode]=\"sideNavMode\" class=\"sidenav\" #sidenav [opened]=\"sideNavOpened\" style=\"overflow: hidden;\">\r\n        <mat-toolbar color=\"primary\" class=\"mat-elevation-z4\">\r\n            <img src=\"./assets/logo.codetok.png\" width=\"36px\">\r\n            <h1 class=\"logo\">\r\n                CODETOK.\r\n                <span style=\"font-size: 12px;\">com</span>\r\n            </h1>\r\n        </mat-toolbar>\r\n\r\n        <cdk-sidemenu></cdk-sidemenu>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <cdk-toolbar [sidenav]=\"sidenav\" [drawer]=\"drawer\" [sidebar]=\"sidenav2\" [matDrawerShow]=\"matDrawerShow\" style=\"z-index: 500\"></cdk-toolbar>\r\n        <perfect-scrollbar>\r\n            <router-outlet></router-outlet>\r\n        </perfect-scrollbar>\r\n    </mat-sidenav-content>\r\n    <mat-sidenav #sidenav2 position=\"end\" mode=\"over\">\r\n        <cdk-sidebar></cdk-sidebar>\r\n    </mat-sidenav>\r\n</mat-sidenav-container> -->\r\n        \r\n <!-- Below is another example of the home page that has a smaller menu that shows up when the main menu is hidden -->\r\n\r\n <mat-sidenav-container class=\"container\" fullscreen>\r\n  <mat-sidenav [mode]=\"sideNavMode\" class=\"sidenav\" #sidenav [opened]=\"sideNavOpened\" style=\"overflow: hidden;\">\r\n      <mat-toolbar color=\"primary\" class=\"mat-elevation-z4\">\r\n          <!-- <img src=\"./assets/logo.codetok.png\" width=\"36px\"> -->\r\n          <h1 class=\"logo\">\r\n              Citizen App\r\n              <!-- <span style=\"font-size: 12px;\">com</span> -->\r\n          </h1> \r\n      </mat-toolbar>\r\n      <cdk-sidemenu></cdk-sidemenu>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content style=\"z-index: unset;overflow: hidden;\">\r\n      <mat-drawer-container fullscreen style=\"background-color: #f5f5f5;\">\r\n          <mat-drawer mode=\"side\" #drawer class=\"drawer\" [opened]=\"matDrawerOpened\" style=\"overflow: hidden;\">\r\n              <mat-toolbar color=\"primary\" class=\"mat-elevation-z4\">\r\n                  <!-- <img src=\"./assets/logo.codetok.png\" width=\"36px\"> -->\r\n              </mat-toolbar>\r\n              <cdk-sidemenu [iconOnly]=\"true\"></cdk-sidemenu>\r\n          </mat-drawer>\r\n          <mat-drawer-content style=\"overflow: hidden;\">\r\n\r\n              <cdk-toolbar [sidenav]=\"sidenav\" [drawer]=\"drawer\" [sidebar]=\"sidenav2\" [matDrawerShow]=\"matDrawerShow\" style=\"z-index: 500\"></cdk-toolbar>\r\n\r\n\r\n              <perfect-scrollbar  style=\"height: calc(100% - 33px);\" [config]=\"config\" >\r\n                  <router-outlet></router-outlet>\r\n              </perfect-scrollbar>\r\n\r\n         \r\n          </mat-drawer-content>\r\n      </mat-drawer-container>\r\n  </mat-sidenav-content>\r\n\r\n  <!-- <mat-sidenav #sidenav2 position=\"end\" mode=\"over\">\r\n      <cdk-sidebar></cdk-sidebar>\r\n  </mat-sidenav> -->\r\n\r\n</mat-sidenav-container>\r\n               \r\n          \r\n          \r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/researcher/researcher.component.scss":
/*!******************************************************!*\
  !*** ./src/app/researcher/researcher.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.cards-container {\n  padding: 5px; }\n\n.cdk-card-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZWFyY2hlci9DOlxcVXNlcnNcXE1pbmhhelxcRG9jdW1lbnRzXFxhbmd1bGFyVGVzdHNcXGNpdGl6ZW4tZnJvbnQvc3JjXFxhcHBcXHJlc2VhcmNoZXJcXHJlc2VhcmNoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NBO0VBQ0ksMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksYUFBWSxFQUVmOztBQUVEO0VBQ0MsMEJBQXlCO0VBQ3pCLHdCQUF1QixFQUN2QiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VhcmNoZXIvcmVzZWFyY2hlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuQG1peGluIGF1dGgoJHRoZW1lKSB7XHJcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcclxuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcclxuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xyXG5cclxuICBcclxuICAuc2lkZW5hdntcclxuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwcmltYXJ5LDQwMCk7ICAgIFxyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiAyNTBweDtcclxuICB9XHJcbiAgLmRyYXdlcntcclxuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwcmltYXJ5LDQwMCk7ICAgIFxyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gIH1cclxuICBbbm8tb3Zlci1mbG93XSB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5yb3V0ZXItb3V0bGV0e1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7cGFkZGluZzogMHB4IDVweDtcclxuICB9XHJcbiAgLnNwYWNlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmxvZ297XHJcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtmb250LWZhbWlseTogUm9ib3RvO2NvbG9yOndoaXRlO21hcmdpbi10b3A6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIGNkay1jYXJkcyB7XHJcbi5jYXJkcy1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG59XHJcbi5jYXJkcy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgLy8gY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2RrLWNhcmQtaG9sZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMzI3ZWJkO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/researcher/researcher.component.ts":
/*!****************************************************!*\
  !*** ./src/app/researcher/researcher.component.ts ***!
  \****************************************************/
/*! exports provided: ResearcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearcherComponent", function() { return ResearcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResearcherComponent = /** @class */ (function () {
    function ResearcherComponent(media) {
        this.media = media;
        /** Based on the screen size, switch from standard to one column per row */
        this.isVisible = true;
        this.visibility = 'shown';
        this.sideNavOpened = true;
        this.matDrawerOpened = false;
        this.matDrawerShow = true;
        this.sideNavMode = 'side';
    }
    ResearcherComponent.prototype.ngOnChanges = function () {
        this.visibility = this.isVisible ? 'shown' : 'hidden';
    };
    ResearcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.media.subscribe(function (mediaChange) {
            _this.toggleView();
        });
    };
    ResearcherComponent.prototype.ngAfterViewInit = function () {
        this.sideNavOpened = true;
        // matDrawerOpened: boolean = false;
        // matDrawerShow: boolean = true;
        // sideNavMode: string = 'side';
    };
    ResearcherComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData.animation;
        //return outlet.isActivated ? outlet.activatedRoute : ''
    };
    ResearcherComponent.prototype.toggleView = function () {
        if (this.media.isActive('gt-md')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = true;
            this.matDrawerOpened = false;
            this.matDrawerShow = true;
        }
        else if (this.media.isActive('gt-xs')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = false;
            this.matDrawerOpened = true;
            this.matDrawerShow = true;
        }
        else if (this.media.isActive('lt-sm')) {
            this.sideNavMode = 'over';
            this.sideNavOpened = false;
            this.matDrawerOpened = false;
            this.matDrawerShow = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ResearcherComponent.prototype, "isVisible", void 0);
    ResearcherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-researcher',
            template: __webpack_require__(/*! ./researcher.component.html */ "./src/app/researcher/researcher.component.html"),
            styles: [__webpack_require__(/*! ./researcher.component.scss */ "./src/app/researcher/researcher.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"]])
    ], ResearcherComponent);
    return ResearcherComponent;
}());



/***/ }),

/***/ "./src/app/researcher/researcher.module.ts":
/*!*************************************************!*\
  !*** ./src/app/researcher/researcher.module.ts ***!
  \*************************************************/
/*! exports provided: ResearcherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearcherModule", function() { return ResearcherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _researcher_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./researcher.component */ "./src/app/researcher/researcher.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _researcher_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./researcher.router */ "./src/app/researcher/researcher.router.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _create_observation_create_observation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-observation/create-observation.component */ "./src/app/researcher/create-observation/create-observation.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_fields_add_fields_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-fields/add-fields.component */ "./src/app/researcher/add-fields/add-fields.component.ts");
/* harmony import */ var _services_observation_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/observation.service */ "./src/app/services/observation.service.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./list/list.component */ "./src/app/researcher/list/list.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _list_records_list_records_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./list-records/list-records.component */ "./src/app/researcher/list-records/list-records.component.ts");
/* harmony import */ var _resolvers_record_resolver__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../resolvers/record.resolver */ "./src/app/resolvers/record.resolver.ts");
/* harmony import */ var _add_records_add_records_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-records/add-records.component */ "./src/app/researcher/add-records/add-records.component.ts");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/record.service */ "./src/app/services/record.service.ts");
/* harmony import */ var _update_observation_update_observation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./update-observation/update-observation.component */ "./src/app/researcher/update-observation/update-observation.component.ts");
/* harmony import */ var _explore_observations_explore_observations_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./explore-observations/explore-observations.component */ "./src/app/researcher/explore-observations/explore-observations.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: true
};
var ResearcherModule = /** @class */ (function () {
    function ResearcherModule() {
    }
    ResearcherModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_researcher_router__WEBPACK_IMPORTED_MODULE_11__["appRoutes"]),
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_18__["DataTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"]
            ],
            declarations: [
                _researcher_component__WEBPACK_IMPORTED_MODULE_2__["ResearcherComponent"],
                _create_observation_create_observation_component__WEBPACK_IMPORTED_MODULE_13__["CreateObservationComponent"],
                _add_fields_add_fields_component__WEBPACK_IMPORTED_MODULE_15__["AddFieldsComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_17__["ListComponent"],
                _list_records_list_records_component__WEBPACK_IMPORTED_MODULE_19__["ListRecordsComponent"],
                _add_records_add_records_component__WEBPACK_IMPORTED_MODULE_21__["AddRecordsComponent"],
                _update_observation_update_observation_component__WEBPACK_IMPORTED_MODULE_23__["UpdateObservationComponent"],
                _explore_observations_explore_observations_component__WEBPACK_IMPORTED_MODULE_24__["ExploreObservationsComponent"]
            ],
            exports: [_researcher_component__WEBPACK_IMPORTED_MODULE_2__["ResearcherComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }, _services_observation_service__WEBPACK_IMPORTED_MODULE_16__["ObservationService"], _services_record_service__WEBPACK_IMPORTED_MODULE_22__["RecordService"], _resolvers_record_resolver__WEBPACK_IMPORTED_MODULE_20__["RecordResolver"]
            ]
        })
    ], ResearcherModule);
    return ResearcherModule;
}());



/***/ }),

/***/ "./src/app/researcher/researcher.router.ts":
/*!*************************************************!*\
  !*** ./src/app/researcher/researcher.router.ts ***!
  \*************************************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _researcher_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./researcher.component */ "./src/app/researcher/researcher.component.ts");
/* harmony import */ var _create_observation_create_observation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-observation/create-observation.component */ "./src/app/researcher/create-observation/create-observation.component.ts");
/* harmony import */ var _add_fields_add_fields_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-fields/add-fields.component */ "./src/app/researcher/add-fields/add-fields.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/researcher/list/list.component.ts");
/* harmony import */ var _list_records_list_records_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-records/list-records.component */ "./src/app/researcher/list-records/list-records.component.ts");
/* harmony import */ var _resolvers_record_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resolvers/record.resolver */ "./src/app/resolvers/record.resolver.ts");
/* harmony import */ var _add_records_add_records_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-records/add-records.component */ "./src/app/researcher/add-records/add-records.component.ts");
/* harmony import */ var _update_observation_update_observation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-observation/update-observation.component */ "./src/app/researcher/update-observation/update-observation.component.ts");
/* harmony import */ var _explore_observations_explore_observations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./explore-observations/explore-observations.component */ "./src/app/researcher/explore-observations/explore-observations.component.ts");










//import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';
var appRoutes = [
    {
        path: 'citizenpanel', component: _researcher_component__WEBPACK_IMPORTED_MODULE_0__["ResearcherComponent"], children: [
            { path: 'createobservation', component: _create_observation_create_observation_component__WEBPACK_IMPORTED_MODULE_1__["CreateObservationComponent"] },
            { path: 'addfields/:id', component: _add_fields_add_fields_component__WEBPACK_IMPORTED_MODULE_2__["AddFieldsComponent"] },
            { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"] },
            { path: 'explore', component: _explore_observations_explore_observations_component__WEBPACK_IMPORTED_MODULE_9__["ExploreObservationsComponent"] },
            { path: 'updateobservation/:id', component: _update_observation_update_observation_component__WEBPACK_IMPORTED_MODULE_8__["UpdateObservationComponent"], resolve: { data: _resolvers_record_resolver__WEBPACK_IMPORTED_MODULE_6__["RecordResolver"] } },
            { path: 'listrecords/:id', component: _list_records_list_records_component__WEBPACK_IMPORTED_MODULE_5__["ListRecordsComponent"], resolve: { data: _resolvers_record_resolver__WEBPACK_IMPORTED_MODULE_6__["RecordResolver"] } },
            { path: 'addrecord/:id', component: _add_records_add_records_component__WEBPACK_IMPORTED_MODULE_7__["AddRecordsComponent"], resolve: { data: _resolvers_record_resolver__WEBPACK_IMPORTED_MODULE_6__["RecordResolver"] } },
            { path: '**', redirectTo: '/citizenpanel' }
        ], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];


/***/ }),

/***/ "./src/app/researcher/update-observation/update-observation.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/researcher/update-observation/update-observation.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-header {\r\n    background-color: #327ebd;\r\n    color: white;\r\n    padding: 12px;\r\n}\r\n.cards-container {\r\n    padding: 19px;\r\n    color: white;\r\n}\r\n.cdk-card-holder {\r\nborder: 1px solid #327ebd;\r\nbackground-color: white;\r\nborder-top-left-radius: 5px;\r\nborder-top-right-radius: 5px;\r\n}\r\n.listHeader, .listItems{\r\nborder: 3px solid lightgray;\r\nborder-radius: 5px;\r\npadding: 12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZWFyY2hlci91cGRhdGUtb2JzZXJ2YXRpb24vdXBkYXRlLW9ic2VydmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGNBQWM7SUFDZCxhQUFhO0NBQ2hCO0FBRUQ7QUFDQSwwQkFBMEI7QUFDMUIsd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1Qiw2QkFBNkI7Q0FDNUI7QUFFRDtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkIsY0FBYztDQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVzZWFyY2hlci91cGRhdGUtb2JzZXJ2YXRpb24vdXBkYXRlLW9ic2VydmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHMtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjdlYmQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcbi5jYXJkcy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTlweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNkay1jYXJkLWhvbGRlciB7XHJcbmJvcmRlcjogMXB4IHNvbGlkICMzMjdlYmQ7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5saXN0SGVhZGVyLCAubGlzdEl0ZW1ze1xyXG5ib3JkZXI6IDNweCBzb2xpZCBsaWdodGdyYXk7XHJcbmJvcmRlci1yYWRpdXM6IDVweDtcclxucGFkZGluZzogMTJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/researcher/update-observation/update-observation.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/researcher/update-observation/update-observation.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"components-container-gt-xs\" fxLayoutGap=\"20px\">\r\n\r\n  <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"space-between start\" fxLayoutGap=\"10px\">\r\n\r\n    <div fxFlex.sm=\"100\" class=\"cdk-card-holder\" fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" fxFlex=\"50\"\r\n      fxFlex.md=\"50\" fxFlex.sm=\"100\">\r\n\r\n      <mat-toolbar class=\"cards-header\">\r\n        <h1 class=\"mat-headline center-align\">Update Observation details</h1>\r\n      </mat-toolbar>\r\n\r\n      <div class=\"cards-container\">\r\n        <div class=\"formContainer\">\r\n          <form #updateObservationForm=\"ngForm\" (ngSubmit)=\"onUpdateObservation(updateObservationForm.value)\">\r\n            <mat-card>\r\n              <!-- <fieldset [disabled]=\"disableObservationForm\" style=\"border: 0;\" [style.opacity]=\"disabledOpacity\"> -->\r\n              <mat-card-content fxLayout=\"column\" fxLayoutGap=\"25px\" style=\"font-size: 15px;\">\r\n\r\n                <mat-form-field>\r\n                  <input matInput type=\"text\" placeholder=\"Title\" name=\"title\" ngModel #title=\"ngModel\"\r\n                    required  [(ngModel)]=\"observationDetails.title\">\r\n                  <mat-hint *ngIf=\"!title.touched && !title.valid\">Please enter the title of observation</mat-hint>\r\n                  <mat-error *ngIf=\"title.errors?.required\">\r\n                    Title is <strong>required</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Description\" name=\"description\" ngModel\r\n                    #description=\"ngModel\" required [(ngModel)]=\"observationDetails.description\">\r\n                  <mat-hint *ngIf=\"!description.touched && !description.valid\">Please enter the description of observation</mat-hint>\r\n                  <mat-error *ngIf=\"description.errors?.required\">\r\n                    Description is <strong>required</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n                <!-- <div class=\"formInputGroup\" style=\"display:flex; flex-direction: row;\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Tags\">\r\n                  </mat-form-field>\r\n\r\n                  <button mat-icon-button color=\"primary\">\r\n                    <mat-icon style=\"font-size: 35px; margin-top: 12px;\">add_circle</mat-icon>\r\n                  </button>\r\n                </div> -->\r\n                <!-- <mat-form-field>\r\n                  <mat-chip-list #tagList>\r\n                    <ng-container *ngFor=\"let tag of tags\">\r\n                      <mat-chip [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(tag)\" color=\"primary\">\r\n                        {{tag}}\r\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                      </mat-chip>\r\n                    </ng-container>\r\n                    <input placeholder=\"Tags for observation\" [matChipInputFor]=\"tagList\"\r\n                      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                      (matChipInputTokenEnd)=\"add($event)\" matTooltip=\"Press enter or comma for tags\">\r\n                  </mat-chip-list>\r\n                </mat-form-field> -->\r\n                <div fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Tags\" name=\"tagVal\" [(ngModel)]=\"tagVal\">\r\n                    <!-- <mat-hint *ngIf=\"!tags.touched && tags.length === 0\">Please enter tags</mat-hint> -->\r\n                  </mat-form-field>\r\n                  <button color=\"primary\" type=\"button\" mat-icon-button (click)=\"addTag(tagVal)\">\r\n                    <mat-icon style=\"font-size: 35px; margin-top: 22px;\">add_circle</mat-icon>\r\n                  </button>\r\n\r\n                </div>\r\n                <mat-nav-list>\r\n                  <div *ngIf=\"fields.length > 0\" class=\"listHeader\" fxLayout=\"row\" fxLayoutGap=\"55px\" fxLayoutAlign=\"start space-around \">\r\n                    <span>Tags</span>\r\n                  </div>\r\n                  <mat-list-item *ngFor=\"let tag of tags\">\r\n                    <div fxLayout=\"row\" fxLayoutGap=\"55px\" fxLayoutAlign=\"start space-around\" style=\"margin-top:7px;\"\r\n                      fxFlex=\"1 1 auto\">\r\n                      <span fxFlex=\"65px\">{{tag}}</span>\r\n                      <div style=\"position:relative; top: -10px;\">\r\n                        <button color=\"primary\" mat-icon-button (click)=\"removeTag(tag)\">\r\n                          <mat-icon>delete</mat-icon>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </mat-list-item>\r\n                </mat-nav-list>\r\n  \r\n              </mat-card-content>\r\n              <div style=\"margin-bottom: 25px;\">\r\n                <mat-divider></mat-divider>\r\n              </div>\r\n              <mat-card-actions style=\"text-align: right; padding: 10px;\">\r\n                <button mat-raised-button class=\"mat-subheading-1 center-align\" color=\"accent\" (click)=\"cancelField()\">Cancel</button>\r\n                <button mat-raised-button class=\"mat-subheading-1 center-align\" color=\"primary\" [disabled]=\"updateObservationForm.invalid && fields.length == 0\"\r\n                  type=\"submit\">Update</button>\r\n              </mat-card-actions>\r\n              <!-- </fieldset> -->\r\n            </mat-card>\r\n          </form>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <!--Manual Record Selection Page-->\r\n    <!-- <div fxFlex.sm=\"100\" class=\"cdk-card-holder\" fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" fxFlex=\"50\"\r\n      fxFlex.md=\"50\" fxFlex.sm=\"100\">\r\n\r\n      <mat-toolbar class=\"cards-header\">\r\n        <h1 class=\"mat-headline center-align\">Update Fields</h1>\r\n      </mat-toolbar>\r\n\r\n      <div class=\"cards-container\">\r\n        <div class=\"formContainer\">\r\n          <form #addFieldsFrom=\"ngForm\" (ngSubmit)=\"updateObservation(updateObservationForm, addFieldsFrom)\" novalidate>\r\n            <mat-card>\r\n\r\n              <mat-card-content fxLayout=\"column\" fxLayoutGap=\"35px\" style=\"font-size: 15px;\">\r\n\r\n                <div fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Title\" name=\"fieldTitle\" ngModel #fieldTitle=\"ngModel\" required >\r\n                    <mat-hint *ngIf=\"!fieldTitle.touched && fields.length === 0\">Please enter the field title</mat-hint>\r\n                    <mat-error *ngIf=\"fields.length === 0 && fieldTitle.errors?.required\">\r\n                      At least one field is <strong>required</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n\r\n\r\n                    <mat-select placeholder=\"Field Type\" name=\"fieldType\" ngModel #fieldType=\"ngModel\" required >\r\n                      <mat-option *ngFor=\"let field of fieldsType | keyvalue\" [value]=\"field\">\r\n                        {{field.key}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-hint *ngIf=\"!fieldType.touched && fields.length === 0\">Please select field type</mat-hint>\r\n                    <mat-error *ngIf=\"fields.length === 0 && fieldType.hasError('required')\">\r\n                      Please select field <strong>type</strong>\r\n                    </mat-error>\r\n\r\n\r\n                  </mat-form-field>\r\n\r\n                  <button color=\"primary\" mat-icon-button [disabled]=\"addFieldsFrom.invalid\" (click)=\"addField(addFieldsFrom)\">\r\n                    <mat-icon style=\"font-size: 35px; margin-top: 22px;\">add_circle</mat-icon>\r\n                  </button>\r\n\r\n                </div>\r\n                <mat-nav-list>\r\n                  <div *ngIf=\"fields.length > 0\" class=\"listHeader\" fxLayout=\"row\" fxLayoutGap=\"55px\" fxLayoutAlign=\"start space-around \">\r\n                    <span>Field Title</span>\r\n                    <span>Field Type</span>\r\n                  </div>\r\n                  <mat-list-item *ngFor=\"let field of fields\">\r\n                    <div fxLayout=\"row\" fxLayoutGap=\"55px\" fxLayoutAlign=\"start space-around\" style=\"margin-top:7px;\"\r\n                      fxFlex=\"1 1 auto\">\r\n                      <span fxFlex=\"65px\">{{field.fieldTitle}}</span>\r\n                      <span fxFlex=\"65px\">{{field.fieldType.key}}</span>\r\n                      <div style=\"position:relative; top: -10px;\">\r\n                        <button color=\"primary\" mat-icon-button (click)=\"removeField(field)\">\r\n                          <mat-icon>delete</mat-icon>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </mat-list-item>\r\n                </mat-nav-list>\r\n\r\n              </mat-card-content>\r\n              \r\n              <mat-card-actions style=\"text-align: right; padding: 10px;\">\r\n                <button mat-raised-button class=\"mat-subheading-1 center-align\" color=\"primary\" (click)=\"cancelField()\">Cancel</button>\r\n                <button mat-raised-button class=\"mat-subheading-1 center-align\" color=\"accent\" [disabled]=\"addFieldsFrom.invalid && fields.length == 0\"\r\n                  type=\"submit\">Update</button>\r\n              </mat-card-actions>\r\n            </mat-card>\r\n          </form>\r\n        </div>\r\n\r\n      </div>\r\n    </div> -->\r\n    <!--End Manual Record Selection Page-->\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/researcher/update-observation/update-observation.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/researcher/update-observation/update-observation.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UpdateObservationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateObservationComponent", function() { return UpdateObservationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_observation_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/observation.model */ "./src/app/models/observation.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_observation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/observation.service */ "./src/app/services/observation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateObservationComponent = /** @class */ (function () {
    function UpdateObservationComponent(route, observationService, snackBar, router) {
        this.route = route;
        this.observationService = observationService;
        this.snackBar = snackBar;
        this.router = router;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.tags = [];
        this.fields = [];
        this.fieldsType = new Map([
            ['File', 1],
            ['Number', 2],
            ['Text', 3]
        ]);
    }
    UpdateObservationComponent.prototype.ngOnInit = function () {
        this.observationDetails = new src_app_models_observation_model__WEBPACK_IMPORTED_MODULE_2__["Observation"]();
        this.observationDetails = this.route.snapshot.data.data.observations[0];
        this.title = this.observationDetails.title;
        this.description = this.observationDetails.description;
        // this.title.nativeElement.value = this.observationDetails.title;
        for (var _i = 0, _a = this.observationDetails.fields; _i < _a.length; _i++) {
            var val = _a[_i];
            var valType = '';
            switch (val['type']) {
                case 1:
                    valType = 'File';
                    break;
                case 2:
                    valType = 'Number';
                    break;
                case 3:
                    valType = 'Text';
                    break;
                default:
                    break;
            }
            var data = { 'fieldTitle': val['title'], 'fieldType': { 'key': valType, 'value': val['type'] } };
            this.fields.push(data);
        }
        this.tags = this.observationDetails.tags ? this.observationDetails.tags : [];
        console.log(this.tags);
    };
    ;
    UpdateObservationComponent.prototype.ngAfterViewInit = function () {
    };
    UpdateObservationComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.tags.push({ tag: value.trim() });
        }
        if (input) {
            input.value = '';
        }
    };
    ;
    UpdateObservationComponent.prototype.remove = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    };
    ;
    UpdateObservationComponent.prototype.addField = function (fieldForm) {
        this.fields.push(fieldForm.value);
        fieldForm.reset();
        console.log(this.fields);
    };
    ;
    UpdateObservationComponent.prototype.removeField = function (field) {
        var index = this.fields.indexOf(field);
        this.fields.splice(index, 1);
    };
    ;
    UpdateObservationComponent.prototype.addTag = function () {
        this.tags.push(this.tagVal);
        this.tagVal = '';
    };
    ;
    UpdateObservationComponent.prototype.removeTag = function (tag) {
        var index = this.tags.indexOf(tag);
        this.tags.splice(index, 1);
    };
    ;
    UpdateObservationComponent.prototype.onUpdateObservation = function (val1) {
        var _this = this;
        var data = {
            'observationId': this.observationDetails.observationId,
            'title': val1.title,
            'description': val1.description,
            'tags': this.tags
        };
        console.log(data);
        this.observationService.updateObservation(data)
            .subscribe(function (res) {
            _this.snackBarMessage('Observation Updated Successfully', 'Success');
            _this.router.navigateByUrl('/citizenpanel/list');
        }, function (error) {
            _this.snackBarMessage('Observation can\'t be updated', 'Failed');
        });
    };
    ;
    UpdateObservationComponent.prototype.snackBarMessage = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5500
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('updateObservationForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], UpdateObservationComponent.prototype, "updateObservationForm", void 0);
    UpdateObservationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-observation',
            template: __webpack_require__(/*! ./update-observation.component.html */ "./src/app/researcher/update-observation/update-observation.component.html"),
            styles: [__webpack_require__(/*! ./update-observation.component.css */ "./src/app/researcher/update-observation/update-observation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_observation_service__WEBPACK_IMPORTED_MODULE_5__["ObservationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UpdateObservationComponent);
    return UpdateObservationComponent;
}());



/***/ }),

/***/ "./src/app/resolvers/record.resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/resolvers/record.resolver.ts ***!
  \**********************************************/
/*! exports provided: RecordResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordResolver", function() { return RecordResolver; });
/* harmony import */ var _services_observation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/observation.service */ "./src/app/services/observation.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecordResolver = /** @class */ (function () {
    function RecordResolver(observationService) {
        this.observationService = observationService;
    }
    RecordResolver.prototype.resolve = function (route) {
        this.observationId = route.paramMap.get('id');
        return this.observationService.getObservationById(this.observationId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('data available at this time'); }));
    };
    RecordResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_observation_service__WEBPACK_IMPORTED_MODULE_0__["ObservationService"]])
    ], RecordResolver);
    return RecordResolver;
}());



/***/ }),

/***/ "./src/app/services/_base.datasource.ts":
/*!**********************************************!*\
  !*** ./src/app/services/_base.datasource.ts ***!
  \**********************************************/
/*! exports provided: BaseDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDataSource", function() { return BaseDataSource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var BaseDataSource = /** @class */ (function () {
    function BaseDataSource() {
        var _this = this;
        this.entitySubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.hasItems = false; // Need to show message: 'No records found'
        // Loading | Progress Bar
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        // Paginator | Paginators count
        this.paginatorTotalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
        this.loading$ = this.loadingSubject.asObservable();
        this.paginatorTotal$ = this.paginatorTotalSubject.asObservable();
        this.paginatorTotal$.subscribe(function (res) { return _this.hasItems = res > 0; });
    }
    BaseDataSource.prototype.connect = function (collectionViewer) {
        // Connecting data source
        return this.entitySubject.asObservable();
    };
    BaseDataSource.prototype.disconnect = function (collectionViewer) {
        // Disonnecting data source
        this.entitySubject.complete();
        this.loadingSubject.complete();
        this.paginatorTotalSubject.complete();
    };
    return BaseDataSource;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth-services.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/auth-services.service.ts ***!
  \***************************************************/
/*! exports provided: AuthServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServices", function() { return AuthServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-type': 'application/json'
    })
};
var AuthServices = /** @class */ (function () {
    function AuthServices(http, router) {
        this.http = http;
        this.router = router;
        this.url = "http://18.206.98.162:9000/v1/account";
        this.isLoggedIn = false;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthServices.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthServices.prototype.login = function (credentials) {
        var _this = this;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(credentials);
        // let requestOptions = new RequestOptions({ headers: headers });
        return this.http.post(this.url + "/signin", JSON.stringify(credentials), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            console.log(user);
            // login successful if there's a jwt token in the response
            if (user && user['token']) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            _this.isLoggedIn = true;
            return user;
        }));
    };
    AuthServices.prototype.register = function (credentials) {
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // let requestOptions = new RequestOptions({ headers: headers });
        return this.http.post(this.url + "/signup", JSON.stringify(credentials), httpOptions);
        // .pipe(
        //   catchError((err: Response) => {
        //     return Observable.throw(err);
        //   })
        // );
    };
    AuthServices.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/signin']);
    };
    AuthServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthServices);
    return AuthServices;
}());



/***/ }),

/***/ "./src/app/services/google-app-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/google-app-service.service.ts ***!
  \********************************************************/
/*! exports provided: GoogleAppServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAppServiceService", function() { return GoogleAppServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers_token_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/token.interceptor */ "./src/app/helpers/token.interceptor.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set(_helpers_token_interceptor__WEBPACK_IMPORTED_MODULE_2__["InterceptorSkipHeader"], '')
};
var API_URL = "http://18.206.98.162:9000/v1";
var GoogleAppServiceService = /** @class */ (function () {
    function GoogleAppServiceService(http) {
        this.http = http;
        this.data = null;
        this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    GoogleAppServiceService.prototype.load = function (observationId, spreadsheetId) {
        // if (this.data) {
        //   // already loaded data
        //   return Promise.resolve(this.data);
        // }
        // var url = 'https://spreadsheets.google.com/feeds/list/' + id + '/od6/public/values?alt=json';
        // return this.http.get(url, httpOptions)
        //   .pipe(
        //     map(data => {
        //       this.data = data['feed'].entry;
        //       let returnArray: Array<any> = [];
        //       if (this.data && this.data.length > 0) {
        //         this.data.forEach((entry, index) => {
        //           var obj = {};
        //           for (let x in entry) {
        //             if (x.includes('gsx$') && entry[x].$t) {
        //               obj[x.split('$')[1]] = entry[x]['$t'];
        //               // console.log( x.split('$')[1] + ': ' + entry[x]['$t'] );
        //             }
        //           }
        //           returnArray.push(obj);
        //         })
        //       }
        //       return returnArray
        //     })
        //   )
        return this.http.post(API_URL + "/google-sheet/import", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('observationId', observationId)
                .set('spreadSheetId', spreadsheetId)
        });
    };
    ;
    GoogleAppServiceService.prototype.importSreadsheet = function (data) {
        console.log(data);
        return this.http.post(API_URL + "/google-sheet/import", JSON.stringify(data));
    };
    ;
    GoogleAppServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GoogleAppServiceService);
    return GoogleAppServiceService;
}());



/***/ }),

/***/ "./src/app/services/observation.datasource.ts":
/*!****************************************************!*\
  !*** ./src/app/services/observation.datasource.ts ***!
  \****************************************************/
/*! exports provided: ObservationDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservationDataSource", function() { return ObservationDataSource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_base.datasource */ "./src/app/services/_base.datasource.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ObservationDataSource = /** @class */ (function (_super) {
    __extends(ObservationDataSource, _super);
    function ObservationDataSource(observationService) {
        var _this = _super.call(this) || this;
        _this.observationService = observationService;
        return _this;
    }
    ObservationDataSource.prototype.loadObservations = function (searchText, accountId, pageNumber, pageSize, sortOrder) {
        var _this = this;
        this.loadingSubject.next(true);
        this.observationService.getObservations(searchText, accountId, pageNumber, pageSize, sortOrder).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (res) {
            _this.entitySubject.next(res['observations']);
            _this.paginatorTotalSubject.next(res['totalCount']);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () { return _this.loadingSubject.next(false); })).subscribe();
    };
    return ObservationDataSource;
}(_base_datasource__WEBPACK_IMPORTED_MODULE_2__["BaseDataSource"]));



/***/ }),

/***/ "./src/app/services/observation.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/observation.service.ts ***!
  \*************************************************/
/*! exports provided: ObservationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservationService", function() { return ObservationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var API_URL = "http://18.206.98.162:9000/v1";
var ObservationService = /** @class */ (function () {
    function ObservationService(http) {
        this.http = http;
    }
    ObservationService.prototype.addObservation = function (observations) {
        return this.http.post(API_URL + "/observation", JSON.stringify(observations));
    };
    ObservationService.prototype.getObservations = function (searchText, accountId, pageNumber, pageSize, sortOrder) {
        if (sortOrder === void 0) { sortOrder = 'asc'; }
        return this.http.get(API_URL + "/observation", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('searchText', searchText)
                .set('accountId', accountId)
                .set('page', pageNumber.toString())
                .set('limit', pageSize.toString())
                .set('sortOrder', sortOrder)
        });
    };
    ObservationService.prototype.getObservationById = function (observationId) {
        return this.http.get(API_URL + "/observation", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('observationId', observationId)
        });
    };
    ObservationService.prototype.updateObservation = function (data) {
        return this.http.put(API_URL + "/observation", JSON.stringify(data));
    };
    ObservationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ObservationService);
    return ObservationService;
}());



/***/ }),

/***/ "./src/app/services/record.datasource.ts":
/*!***********************************************!*\
  !*** ./src/app/services/record.datasource.ts ***!
  \***********************************************/
/*! exports provided: RecordDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordDataSource", function() { return RecordDataSource; });
/* harmony import */ var _base_datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_base.datasource */ "./src/app/services/_base.datasource.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var RecordDataSource = /** @class */ (function (_super) {
    __extends(RecordDataSource, _super);
    function RecordDataSource(recordService) {
        var _this = _super.call(this) || this;
        _this.recordService = recordService;
        _this.records = [];
        return _this;
    }
    RecordDataSource.prototype.loadRecords = function (observationId, pageNumber, pageSize, searchText) {
        var _this = this;
        this.loadingSubject.next(true);
        this.recordService.getRecord(observationId, pageNumber, pageSize, searchText).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (res) {
            console.log('In tap');
            console.log(res);
            for (var index in res['records']) {
                // console.log(key);
                // console.log(res['records'][0]['data'][key]);
                // let data = { 'fieldName': key, 'fieldValue': res['records'][0]['data'][key]}
                // this.records.push(data);
                for (var key in res['records'][index]['data']) {
                    var data = { 'fieldName': key, 'fieldValue': res['records'][index]['data'][key] };
                    _this.records.push(data);
                }
            }
            console.log(_this.records);
            _this.entitySubject.next(_this.records);
            _this.paginatorTotalSubject.next(_this.records.length);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this.loadingSubject.next(false);
            _this.records = [];
        }))
            .subscribe();
    };
    return RecordDataSource;
}(_base_datasource__WEBPACK_IMPORTED_MODULE_0__["BaseDataSource"]));



/***/ }),

/***/ "./src/app/services/record.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/record.service.ts ***!
  \********************************************/
/*! exports provided: RecordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordService", function() { return RecordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var API_URL = "http://18.206.98.162:9000/v1";
var RecordService = /** @class */ (function () {
    function RecordService(http) {
        this.http = http;
    }
    RecordService.prototype.addRecord = function (data) {
        return this.http.post(API_URL + "/record", data);
    };
    ;
    RecordService.prototype.getRecord = function (observationId, pageNumber, pageSize, searchText) {
        return this.http.get(API_URL + "/record", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('observationId', observationId)
                .set('searchText', searchText)
                .set('page', pageNumber.toString())
                .set('limit', pageSize.toString())
        });
    };
    ;
    RecordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecordService);
    return RecordService;
}());



/***/ }),

/***/ "./src/app/shared/customErrorStateMatcher.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/customErrorStateMatcher.ts ***!
  \***************************************************/
/*! exports provided: CustomErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomErrorStateMatcher", function() { return CustomErrorStateMatcher; });
var CustomErrorStateMatcher = /** @class */ (function () {
    function CustomErrorStateMatcher() {
    }
    CustomErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return CustomErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/shared/validators/confirm-password.validator.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/validators/confirm-password.validator.ts ***!
  \*****************************************************************/
/*! exports provided: ConfirmPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function() { return ConfirmPasswordValidator; });
var ConfirmPasswordValidator = /** @class */ (function () {
    function ConfirmPasswordValidator() {
    }
    ConfirmPasswordValidator.MatchPassword = function (control) {
        var password = control.get('password') ? control.get('password').value : null;
        var confirmPassword = control.get('confirmPassword') ? control.get('confirmPassword').value : null;
        if (password && confirmPassword && password !== confirmPassword) {
            control.get('confirmPassword').setErrors({ ConfirmPassword: true });
        }
        else {
            return null;
        }
    };
    return ConfirmPasswordValidator;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: stretch;\r\n    flex-direction: column;\r\n}\r\n\r\n.childContainer {\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: stretch;\r\n    flex-direction: column;\r\n}\r\n\r\n.upperContainer {\r\n    background-color: #3f51b5;\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    width: 100%;\r\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.customPosition{\r\n    position: absolute;\r\n    height: 55%;\r\n    margin-top: 12%;\r\n    width: 25%;\r\n}\r\n\r\n.mat-card {\r\n    border-radius: 0;\r\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;\r\n}\r\n\r\n.title-header {\r\n    box-sizing: border-box;\r\n    background-color: #27b727;\r\n    height: 15%;\r\n    padding: 19px;\r\n    font-size: large;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.title-header .material-icons {\r\n    font-size: 30px;\r\n}\r\n\r\n.signIn-form {\r\n    box-sizing: border-box;\r\n    padding: 15px 25px 0px 25px;\r\n    font-size: medium;\r\n    margin-top: 12px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0lBQ1osNEhBQTRIO0lBQzVILHdCQUF3QjtJQUN4QixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0NBQ2Q7O0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsNEhBQTRIO0NBQy9IOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jaGlsZENvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udXBwZXJDb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAzcHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDZweCAxMHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDE4cHggMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY3VzdG9tUG9zaXRpb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDU1JTtcclxuICAgIG1hcmdpbi10b3A6IDEyJTtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDNweCA1cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggNnB4IDEwcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggMThweCAwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1oZWFkZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyN2I3Mjc7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIHBhZGRpbmc6IDE5cHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnRpdGxlLWhlYWRlciAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uc2lnbkluLWZvcm0ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweCAwcHggMjVweDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"childContainer\" *ngIf=\"!userLoggedIn && !userLogPage\">\r\n    <div class=\"upperContainer\">\r\n      <div class=\"customPosition\">\r\n        <mat-card style=\"max-height: 100%; height:100%; border-radius: 5px; z-index:1; padding: 0;\">\r\n          <div class=\"title-header\" fxLayout=\"row\" fxLayoutGap=\"12px\" style=\"background-color:#27b727; color: white;\">\r\n            <span>\r\n              <mat-icon aria-label=\"Login\">account_box</mat-icon>\r\n            </span>\r\n            <span style=\"box-sizing:border-box; padding-top: 5px;\">Sign In</span>\r\n          </div>\r\n          <mat-card-content>\r\n            <form class=\"signIn-form\" fxLayout=\"column\" fxLayoutAlign=\"space-evenly none\" fxLayoutGap=\"12px\"\r\n              [formGroup]=\"signInFrom\" (ngSubmit)=\"onSubmit()\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Email\" formControlName=\"email\" [errorStateMatcher]=\"errorMatcher\" />\r\n                <mat-hint *ngIf=\"!emailControl?.touched\">Please enter your email address</mat-hint>\r\n                <mat-error *ngIf=\"emailControl?.hasError('email') && !emailControl?.hasError('required')\">\r\n                  Please enter a valid email address\r\n                </mat-error>\r\n                <mat-error *ngIf=\"emailControl?.hasError('required')\">\r\n                  Email is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\"/>\r\n                <mat-hint *ngIf=\"!passwordControl?.touched\">Password must be at least 6 characters.</mat-hint>\r\n                <mat-error *ngIf=\"passwordControl.hasError('required')\">\r\n                  Password is <strong>required</strong>\r\n                </mat-error>\r\n                <mat-error *ngIf=\"passwordControl.hasError('minlength')\">\r\n                  Password must be <strong>at least 6 </strong>characters.\r\n                </mat-error>\r\n              </mat-form-field>\r\n              <span></span>\r\n              <span></span>\r\n              <span></span>\r\n              <button mat-raised-button color=\"primary\" type=\"submit\" style=\"font-size:medium;\">Sign In</button>\r\n            </form>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n    <div style=\"flex: 1 1 auto;\">\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_customErrorStateMatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/customErrorStateMatcher */ "./src/app/shared/customErrorStateMatcher.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth-services.service */ "./src/app/services/auth-services.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignInComponent = /** @class */ (function () {
    function SignInComponent(authServcie, snackBar, router, route) {
        this.authServcie = authServcie;
        this.snackBar = snackBar;
        this.router = router;
        this.route = route;
        this.errorMatcher = new _shared_customErrorStateMatcher__WEBPACK_IMPORTED_MODULE_1__["CustomErrorStateMatcher"]();
        this.signInFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
            deviceType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1)
        });
    }
    SignInComponent.prototype.ngOnInit = function () {
        console.log('Sign In Component Initialized');
        // reset login status
        this.authServcie.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    SignInComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.signInFrom.valid) {
            // this.registerFrom.removeControl('confirmPassword');
            var message_1;
            this.authServcie.login(this.signInFrom.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                .subscribe(function (data) {
                _this.snackBarMessage("Login Successfull", "Success");
                _this.router.navigate(['/citizenpanel']);
                // console.log(data)
            }, (function (errorRes) {
                // if (error instanceof BadInputError){
                //   console.log(error);
                // }
                if (errorRes.status === 400)
                    message_1 = errorRes.error['error'];
                message_1 = message_1.split('.').join(' ');
                _this.snackBarMessage(message_1, "Falied");
                console.log(errorRes);
            }));
        }
        else {
            this.validateAllFormFields(this.signInFrom);
        }
    };
    Object.defineProperty(SignInComponent.prototype, "emailControl", {
        get: function () {
            var email = this.getControl('email');
            return email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignInComponent.prototype, "passwordControl", {
        get: function () {
            return this.getControl('password');
        },
        enumerable: true,
        configurable: true
    });
    SignInComponent.prototype.getControl = function (controlName) {
        return this.signInFrom.get(controlName);
    };
    SignInComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    SignInComponent.prototype.snackBarMessage = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5500
        });
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_services_service__WEBPACK_IMPORTED_MODULE_3__["AuthServices"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.container {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: stretch;\r\n    flex-direction: column;\r\n}\r\n\r\n.childContainer {\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: stretch;\r\n    flex-direction: column;\r\n}\r\n\r\n.upperContainer {\r\n    background-color: #3f51b5;\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    width: 100%;\r\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.customPosition{\r\n    position: absolute;\r\n    height: 65%;\r\n    margin-top: 10%;\r\n    width: 25%;\r\n}\r\n\r\n.mat-card {\r\n    border-radius: 0;\r\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;\r\n}\r\n\r\n.title-header {\r\n    box-sizing: border-box;\r\n    background-color: gold;\r\n    height: 15%;\r\n    padding: 19px;\r\n    font-size: large;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.title-header .material-icons {\r\n    font-size: 30px;\r\n}\r\n\r\n.register-form {\r\n    box-sizing: border-box;\r\n    padding: 15px 25px 0px 25px;\r\n    font-size: medium;\r\n    margin-top: 12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLDRIQUE0SDtJQUM1SCx3QkFBd0I7SUFDeEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztDQUNkOztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLDRIQUE0SDtDQUMvSDs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLDZCQUE2QjtDQUNoQzs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNoaWxkQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi51cHBlckNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDNweCA1cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggNnB4IDEwcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggMThweCAwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jdXN0b21Qb3NpdGlvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNjUlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG4ubWF0LWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggM3B4IDVweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCA2cHggMTBweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCAxOHB4IDBweDtcclxufVxyXG5cclxuLnRpdGxlLWhlYWRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgcGFkZGluZzogMTlweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udGl0bGUtaGVhZGVyIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1mb3JtIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHggMHB4IDI1cHg7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-card style=\"max-height: 100%; height:100%; border-radius: 5px; z-index:1; padding: 0;\">\r\n  <div class=\"title-header\" fxLayout=\"row\" fxLayoutGap=\"12px\">\r\n    <span>\r\n      <mat-icon aria-label=\"Register\">how_to_reg</mat-icon>\r\n    </span>\r\n    <span style=\"box-sizing:border-box; padding-top: 5px;\">Register</span>\r\n  </div>\r\n  <mat-card-content>\r\n    <form class=\"register-form\" fxLayout=\"column\" fxLayoutAlign=\"space-evenly none\" fxLayoutGap=\"12px\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Username\" required />\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Email\" required />\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Passowrd\" required />\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Register as\" name=\"usersType\" required>\r\n          <mat-option *ngFor=\"let user of usersType\" [value]=\"user\">\r\n            {{user}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <button mat-raised-button color=\"primary\" type=\"submit\" style=\"font-size:medium;\">Register</button>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card> -->\r\n\r\n<div class=\"container\">\r\n\r\n  <div class=\"childContainer\" *ngIf=\"!userLoggedIn && !userLogPage\">\r\n    <div class=\"upperContainer\">\r\n      <div class=\"customPosition\">\r\n        <mat-card style=\"max-height: 100%; height:100%; border-radius: 5px; z-index:1; padding: 0;\">\r\n          <div class=\"title-header\" fxLayout=\"row\" fxLayoutGap=\"12px\">\r\n            <span>\r\n              <mat-icon aria-label=\"Register\">how_to_reg</mat-icon>\r\n            </span>\r\n            <span style=\"box-sizing:border-box; padding-top: 5px;\">Register</span>\r\n          </div>\r\n          <mat-card-content>\r\n            <form class=\"register-form\" fxLayout=\"column\" fxLayoutAlign=\"space-evenly none\" fxLayoutGap=\"12px\"\r\n              [formGroup]=\"registerFrom\" (ngSubmit)=\"onSubmit()\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Name\" formControlName=\"name\" />\r\n                <mat-hint *ngIf=\"!usernameControl?.touched\">Please enter your name</mat-hint>\r\n                <mat-error *ngIf=\"usernameControl?.hasError('required')\">\r\n                  Name is <strong>required</strong>\r\n                </mat-error>\r\n\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Email\" formControlName=\"email\" [errorStateMatcher]=\"errorMatcher\"/>\r\n                <mat-hint *ngIf=\"!emailControl?.touched\">Please enter your email address</mat-hint>\r\n                <mat-error *ngIf=\"emailControl?.hasError('email') && !emailControl?.hasError('required')\">\r\n                  Please enter a valid email address\r\n                </mat-error>\r\n                <mat-error *ngIf=\"emailControl?.hasError('required')\">\r\n                  Email is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Password\" formControlName=\"password\" />\r\n                <mat-hint *ngIf=\"!passwordControl?.touched\">Password must be at least 6 characters.</mat-hint>\r\n                <mat-error *ngIf=\"passwordControl.hasError('required')\">\r\n                  Password is <strong>required</strong>\r\n                </mat-error>\r\n                <mat-error *ngIf=\"passwordControl.hasError('minlength')\">\r\n                  Password must be <strong>at least 6 </strong>characters.\r\n                </mat-error>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Confirm Passowrd\" formControlName=\"confirmPassword\" />\r\n                <mat-hint *ngIf=\"!confirmPasswordControl?.touched\">Please confirm password.</mat-hint>\r\n                <mat-error *ngIf=\"confirmPasswordControl?.hasError && confirmPasswordControl?.hasError('ConfirmPassword')\">\r\n                  Passwords <strong>do not</strong> match\r\n                </mat-error>\r\n                <mat-error *ngIf=\"confirmPasswordControl?.hasError('required')\">\r\n                  Confirm Password is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Register as\" name=\"usersType\" required formControlName=\"accountType\">\r\n                  <mat-option *ngFor=\"let user of usersType | keyvalue\" [value]=\"user.value\">\r\n                    {{user.key}}\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-hint *ngIf=\"!accountTypeControl?.touched\">Please select user type</mat-hint>\r\n                <mat-error *ngIf=\"accountTypeControl?.hasError('required')\">\r\n                  Please select user <strong>type</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n              <span></span>\r\n              <span></span>\r\n              <span></span>\r\n              <button mat-raised-button color=\"primary\" type=\"submit\" style=\"font-size:medium;\">Register</button>\r\n            </form>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n    <div style=\"flex: 1 1 auto;\">\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth-services.service */ "./src/app/services/auth-services.service.ts");
/* harmony import */ var _shared_customErrorStateMatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/customErrorStateMatcher */ "./src/app/shared/customErrorStateMatcher.ts");
/* harmony import */ var _shared_validators_confirm_password_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/validators/confirm-password.validator */ "./src/app/shared/validators/confirm-password.validator.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authServcie, snackBar, router) {
        this.authServcie = authServcie;
        this.snackBar = snackBar;
        this.router = router;
        this.usersType = new Map([
            ['Researcher', 1],
            ['User', 2]
        ]);
        this.errorMatcher = new _shared_customErrorStateMatcher__WEBPACK_IMPORTED_MODULE_3__["CustomErrorStateMatcher"]();
        this.registerFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            accountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            deviceType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1)
        }, { validators: _shared_validators_confirm_password_validator__WEBPACK_IMPORTED_MODULE_4__["ConfirmPasswordValidator"].MatchPassword });
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.registerFrom.valid) {
            // this.registerFrom.removeControl('confirmPassword');
            var message_1;
            this.authServcie.register(this.registerFrom.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                .subscribe(function (data) {
                _this.snackBarMessage("Registration Successfull", "Success");
                _this.router.navigate(['/signin']);
            }, (function (errorRes) {
                // if (error instanceof BadInputError){
                //   console.log(error);
                // }
                if (errorRes.status === 400)
                    message_1 = errorRes.error.error.toString().split();
                _this.snackBarMessage(message_1, "Falied");
            }));
        }
        else {
            this.validateAllFormFields(this.registerFrom);
        }
    };
    Object.defineProperty(SignUpComponent.prototype, "usernameControl", {
        get: function () {
            var username = this.getControl('name');
            return username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "emailControl", {
        get: function () {
            var email = this.getControl('email');
            return email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "passwordControl", {
        get: function () {
            return this.getControl('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "confirmPasswordControl", {
        get: function () {
            return this.getControl('confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "accountTypeControl", {
        get: function () {
            return this.getControl('accountType');
        },
        enumerable: true,
        configurable: true
    });
    SignUpComponent.prototype.getControl = function (controlName) {
        return this.registerFrom.get(controlName);
    };
    SignUpComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    SignUpComponent.prototype.snackBarMessage = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5500
        });
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_services_service__WEBPACK_IMPORTED_MODULE_2__["AuthServices"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/wildcard-routing.module.ts":
/*!********************************************!*\
  !*** ./src/app/wildcard-routing.module.ts ***!
  \********************************************/
/*! exports provided: WildCardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildCardRoutingModule", function() { return WildCardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WildCardRoutingModule = /** @class */ (function () {
    function WildCardRoutingModule() {
    }
    WildCardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: "**", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
                ])
            ],
            declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WildCardRoutingModule);
    return WildCardRoutingModule;
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

module.exports = __webpack_require__(/*! C:\Users\Minhaz\Documents\angularTests\citizen-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map