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

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post("/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/car.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/car.service.ts ***!
  \******************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CarService = /** @class */ (function () {
    function CarService(http) {
        this.http = http;
    }
    CarService.prototype.getById = function (id) {
        return this.http.get("/car-details/" + id);
    };
    CarService.prototype.create = function (car) {
        return this.http.post("/car/create", car);
    };
    CarService.prototype.update = function (car) {
        return this.http.put("/car/update" + car.id, car);
    };
    CarService.prototype.delete = function (id) {
        return this.http.delete("/car/" + id);
    };
    CarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CarService);
    return CarService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AuthenticationService, UserService, AlertService, AuthGuard, CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]; });

/* harmony import */ var _oauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oauth.service */ "./src/app/_services/oauth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _oauth_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]; });

/* harmony import */ var _car_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./car.service */ "./src/app/_services/car.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return _car_service__WEBPACK_IMPORTED_MODULE_4__["CarService"]; });








/***/ }),

/***/ "./src/app/_services/oauth.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/oauth.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get("/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get("/users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post("/users/register", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put("/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete("/users/" + id);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _cars_cars_main_page_cars_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cars/cars-main-page/cars.component */ "./src/app/cars/cars-main-page/cars.component.ts");
/* harmony import */ var _cars_cars_detail_page_car_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cars/cars-detail-page/car-details.component */ "./src/app/cars/cars-detail-page/car-details.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");










var routes = [
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
    { path: 'car-details/:id', component: _cars_cars_detail_page_car_details_component__WEBPACK_IMPORTED_MODULE_6__["CarDetailsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: '', component: _cars_cars_main_page_cars_component__WEBPACK_IMPORTED_MODULE_5__["CarsComponent"], canActivate: [_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = ".main-page {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXBhZ2Uge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <div class=\"main-page\" style=\"text-align: center;\">\n    <img src=\"https://seeklogo.com/images/I/infiniti-logo-BE540BF15A-seeklogo.com.png\" class=\"img-fluid\" alt=\"Responsive image\">\n  </div>\n  <alert></alert>\n  <router-outlet></router-outlet>\n  <footer-page></footer-page>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'KPI-Project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-pagination */ "./node_modules/ng2-pagination/index.js");
/* harmony import */ var ng2_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_pagination__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/app/utils/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _helper_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helper/alert.component */ "./src/app/helper/alert.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cars_cars_main_page_cars_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cars/cars-main-page/cars.component */ "./src/app/cars/cars-main-page/cars.component.ts");
/* harmony import */ var _cars_cars_detail_page_car_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cars/cars-detail-page/car-details.component */ "./src/app/cars/cars-detail-page/car-details.component.ts");
/* harmony import */ var _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/footer/footer.component */ "./src/app/home/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _home_menu_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/menu/menu.component */ "./src/app/home/menu/menu.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _helper_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _cars_cars_main_page_cars_component__WEBPACK_IMPORTED_MODULE_11__["CarsComponent"],
                _cars_cars_detail_page_car_details_component__WEBPACK_IMPORTED_MODULE_12__["CarDetailsComponent"],
                _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _home_menu_menu_component__WEBPACK_IMPORTED_MODULE_17__["MenuComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ng2_pagination__WEBPACK_IMPORTED_MODULE_5__["Ng2PaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_services__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _services__WEBPACK_IMPORTED_MODULE_7__["AlertService"], _services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], _services__WEBPACK_IMPORTED_MODULE_7__["CarService"], _services__WEBPACK_IMPORTED_MODULE_7__["UserService"], _utils__WEBPACK_IMPORTED_MODULE_6__["fakeBackendProvider"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cars/cars-detail-page/car-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/cars/cars-detail-page/car-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  height: 390px;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.details {\n  margin-top: 15px;\n}\n.name-car {\n  font-weight: bolder;\n  font-size: 25px;\n  color: #6F6E6E;\n  text-align: center;\n}\n.name-car .justify-content-between {\n  color: red;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycy9jYXJzLWRldGFpbC1wYWdlL2Nhci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9jYXJzL2NhcnMtZGV0YWlsLXBhZ2UvY2FyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIGhlaWdodDogMzkwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmRldGFpbHMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLm5hbWUtY2FyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzZGNkU2RTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmFtZS1jYXIgLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cars/cars-detail-page/car-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cars/cars-detail-page/car-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row container\">\n      <div class=\"col-sm-3 menu\">\n          <menu></menu>\n      </div>\n      <div *ngFor=\"let item of car\" class=\"col-sm-9 row details\">\n        <div class=\"col-sm-12\">\n          <button type=\"button\" class=\"btn btn-secondary btn-lg btn-block\" disabled>Deal Details</button>\n        </div>\n        <div class=\"col-sm-12 name-car\">\n          <div class=\"row col-sm\">{{item.carName}}</div>\n          <div class=\"row justify-content-between\">\n              <div class=\"col-sm-4 align-self-start\">[{{item.status}}]</div>\n              <div class=\"col-sm-4 align-self-end\">[USD {{item.price}}]</div>\n          </div>\n          <hr/>\n        </div>\n        <div class=\"col-sm-12 image-car row\">\n          <div class=\"col-sm-8\">\n              <img src=\"https://crdms.images.consumerreports.org/prod/cars/cr/car-groups/106-11344\" class=\"\" alt=\"Responsive image\">\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"col-sm\">\n                Car available\n              <div class=\"col-sm\">\n                From : {{item.startDate}}\n              </div>\n              <div class=\"col-sm\">\n                To : {{item.endDate}}\n              </div>\n              <div class=\"col-sm\">\n                Price for rent: ${{item.price}}\n              </div>\n              <div class=\"col-sm\">\n                Onwer's credit score: 50/100\n              </div>\n              <div class=\"col-sm\">\n                  <button type=\"button\" class=\"btn btn-success\">Rent this car</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 details-car\">\n          <hr/>\n          <div class=\"row status-car\">\n              <div class=\"col-sm-6\">\n                  <span>\n                      Mileage : {{item.mileage}}\n                  </span>\n                </div>\n                <div class=\"col-sm-6\">\n                  <span>\n                      Stock # : {{item.stock}}\n                  </span>\n                </div>\n                <div class=\"col-sm-6\">\n                  <span>\n                      VIN : {{item.vin}}\n                  </span>\n                </div>\n                <div class=\"col-sm-6\">\n                  <span>\n                      Transmission: {{item.transmission}}\n                  </span>\n              </div>\n          </div>\n          <hr/>\n          <div class=\"row feature-car col-sm-12\">\n              <table class=\"table table-bordered table-dark\">\n                  <thead>\n                    <tr>\n                      <th scope=\"col\">#</th>\n                      <th scope=\"col\">Highlight Feature</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <th scope=\"row\"><i class=\"fas fa-check\"></i></th>\n                      <td>Leather upholstery</td>\n                    </tr>\n                    <tr>\n                      <th scope=\"row\"><i class=\"fas fa-check\"></i></th>\n                      <td>Split folding rear seat</td>\n                    </tr>\n                    <tr>\n                      <th scope=\"row\"><i class=\"fas fa-check\"></i></th>\n                      <td>Heated front seats</td>\n                    </tr>\n                    <tr>\n                      <th scope=\"row\"><i class=\"fas fa-check\"></i></th>\n                      <td>Remote keyless entry</td>\n                    </tr>\n                  </tbody>\n              </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/cars/cars-detail-page/car-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cars/cars-detail-page/car-details.component.ts ***!
  \****************************************************************/
/*! exports provided: CarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailsComponent", function() { return CarDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");





var CarDetailsComponent = /** @class */ (function () {
    function CarDetailsComponent(activatedRoute, router, carService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.carService = carService;
    }
    CarDetailsComponent.prototype.ngOnInit = function () {
        this.getCarDetails();
    };
    CarDetailsComponent.prototype.getCarDetails = function () {
        var _this = this;
        this.subscription = this.activatedRoute.params.subscribe(function (param) {
            var id = param['id'];
            _this.carService.getById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (data) {
                _this.car = data;
            });
        });
    };
    CarDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cars-detail',
            template: __webpack_require__(/*! ./car-details.component.html */ "./src/app/cars/cars-detail-page/car-details.component.html"),
            styles: [__webpack_require__(/*! ./car-details.component.css */ "./src/app/cars/cars-detail-page/car-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_4__["CarService"]])
    ], CarDetailsComponent);
    return CarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/cars/cars-main-page/cars.component.css":
/*!********************************************************!*\
  !*** ./src/app/cars/cars-main-page/cars.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".car-main-page {\n  margin-top: 15px;\n}\n\n.item {\n  margin-bottom: 10px;\n}\n\n.item .card {\n  border: none;\n  cursor: pointer;\n}\n\n#pagination {\n  float: right;\n}\n\n#pagination li {\n  cursor: pointer;\n}\n\n.img-thumbnail {\n  width: 100%;\n  height: 500px;\n}\n\n.carousel-control-prev-icon, .carousel-control-next-icon {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycy9jYXJzLW1haW4tcGFnZS9jYXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLHdCQUF3QjtDQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NhcnMvY2Fycy1tYWluLXBhZ2UvY2Fycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhci1tYWluLXBhZ2Uge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pdGVtIC5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNwYWdpbmF0aW9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jcGFnaW5hdGlvbiBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltZy10aHVtYm5haWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cars/cars-main-page/cars.component.html":
/*!*********************************************************!*\
  !*** ./src/app/cars/cars-main-page/cars.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row container\">\n    <div class=\"col-sm-3\">\n        <menu></menu>\n    </div>\n    <div class=\"col-sm-9 row car-main-page\">\n        <div *ngFor=\"let item of car | paginate: { itemsPerPage: 2, currentPage: p}\" class=\"col-sm-12 item\">\n            <div class=\"card bg-dark text-white\">\n                <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n                    <div class=\"carousel-inner\">\n                      <div class=\"carousel-item active\">\n                        <img class=\"img-thumbnail round\" src=\"https://crdms.images.consumerreports.org/prod/cars/cr/car-groups/106-11344\" alt=\"First slide\">\n                      </div>\n                      <div class=\"carousel-item\">\n                        <img class=\"img-thumbnail round\" src=\"https://inventory-cf.assets-cdk.com/cobalt/infiniti_2018_92118_KH3_001/kh3.png\" alt=\"Second slide\">\n                      </div>\n                      <div class=\"carousel-item\">\n                        <img class=\"img-thumbnail round\" src=\"https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/44e2afb87be0181434c5df13d1faac0d.png\" alt=\"Third slide\">\n                      </div>\n                    </div>\n                    <a class=\"carousel-control-prev\" role=\"button\" data-slide=\"prev\">\n                      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                      <span class=\"sr-only\">Previous</span>\n                    </a>\n                    <a class=\"carousel-control-next\" role=\"button\" data-slide=\"next\">\n                      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                      <span class=\"sr-only\">Next</span>\n                    </a>\n                </div>\n                <div class=\"card-body\" (click)=\"onChoosingCar(item.id)\">\n                    <div>\n                        {{item.carName}}\n                    </div>\n                    <div>\n                        USD {{item.price}}\n                    </div>\n                    <div>\n                        From: {{item.startDate}} To: {{item.endDate}}\n                    </div>\n                    <div>\n                        Owner: {{item.userName}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-12\">\n        <div id=\"pagination\">\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cars/cars-main-page/cars.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/cars/cars-main-page/cars.component.ts ***!
  \*******************************************************/
/*! exports provided: CarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsComponent", function() { return CarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CarsComponent = /** @class */ (function () {
    function CarsComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.title = 'Cars Management';
        this.car = JSON.parse(localStorage.getItem('cars'));
    }
    CarsComponent.prototype.ngAfterViewInit = function () {
        $('.carousel').carousel({
            interval: 1500
        });
    };
    CarsComponent.prototype.onChoosingCar = function (id) {
        this.router.navigateByUrl("car-details/" + id);
    };
    CarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cars-manage',
            template: __webpack_require__(/*! ./cars.component.html */ "./src/app/cars/cars-main-page/cars.component.html"),
            styles: [__webpack_require__(/*! ./cars.component.css */ "./src/app/cars/cars-main-page/cars.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CarsComponent);
    return CarsComponent;
}());



/***/ }),

/***/ "./src/app/helper/alert.component.html":
/*!*********************************************!*\
  !*** ./src/app/helper/alert.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\n    {{message.text}}\n</div>"

/***/ }),

/***/ "./src/app/helper/alert.component.ts":
/*!*******************************************!*\
  !*** ./src/app/helper/alert.component.ts ***!
  \*******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/helper/alert.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/home/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background-color: #989fa5;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n}\n\n.footer-copyright {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtDQUNkOztBQUVEO0VBQ0UsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5ZmE1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmZvb3Rlci1jb3B5cmlnaHQge1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"page-footer font-small blue\">\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n      <a href=\"google.com\"> KPI 2018</a>\n    </div>\n    <!-- Copyright -->\n  \n  </footer>\n  <!-- Footer -->"

/***/ }),

/***/ "./src/app/home/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.title = 'Footer';
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer-page',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/home/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/home/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div style=\"text-align: center\">\n    <img src=\"http://www.nofrillscarrental.com/rental/slides/rentalscars.jpg.png\" class=\"img-thumbnail\" alt=\"Responsive image\">\n  </div>\n  <div style=\"width: 20%\">\n    <menu></menu>\n  </div>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'Home';
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/menu/menu.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/menu/menu.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.nav-item:hover {\n  background-color: #c7c7c7;\n}\n\n.flex-column {\n  height: 470px;\n}\n\n.flex-column .nav-item {\n  text-align: center;\n}\n\n.flex-column .nav-item a {\n  color: #989fa5;\n  text-decoration: none;\n  font-family: \"Segoe UI\",Arial,sans-serif;\n  font-weight: bold;\n  line-height: 1.5;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5uYXYtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjN2M3Yzc7XG59XG5cbi5mbGV4LWNvbHVtbiB7XG4gIGhlaWdodDogNDcwcHg7XG59XG5cbi5mbGV4LWNvbHVtbiAubmF2LWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mbGV4LWNvbHVtbiAubmF2LWl0ZW0gYSB7XG4gIGNvbG9yOiAjOTg5ZmE1O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsQXJpYWwsc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZsb2F0OiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/menu/menu.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/menu/menu.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav flex-column\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/\">\n      <i class=\"fas fa-home\"> HOME </i>\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/profile\">\n      <i class=\"fas fa-user\"> PROFILE </i>\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [routerLink]=\"['/login']\">\n      <i class=\"fas fa-sign-out-alt\"> LOGOUT </i>\n    </a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/home/menu/menu.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/menu/menu.component.ts ***!
  \*********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.title = 'KPI-Project';
    }
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/home/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/home/menu/menu.component.css")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  width: 30%;\n  margin: 0 40% 0 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogMCA0MCUgMCAzNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h2>Login</h2>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n          <input type=\"text\" formControlName=\"username\" class=\"form-control\" placeholder=\"Username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n          <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.username.errors.required\">Username is required</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n          <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-area {\n  margin-top: 15px;\n}\n\n.profile-area .image-area img {\n  width: 100%;\n  height: 237px;\n}\n\n.profile-area .information-area {\n  margin-top: 15px;\n}\n\n.information-area .btn-success {\n  margin-left: 40px;\n}\n\n.cars-area img {\n  height: 200px;\n  width: 280px;\n}\n\n.cars-area table {\n  text-align: center;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztDQUNmOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsY0FBYztFQUNkLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWFyZWEge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucHJvZmlsZS1hcmVhIC5pbWFnZS1hcmVhIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIzN3B4O1xufVxuXG4ucHJvZmlsZS1hcmVhIC5pbmZvcm1hdGlvbi1hcmVhIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmluZm9ybWF0aW9uLWFyZWEgLmJ0bi1zdWNjZXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbi5jYXJzLWFyZWEgaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDI4MHB4O1xufVxuXG4uY2Fycy1hcmVhIHRhYmxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row container\">\n      <div class=\"col-sm-3 menu\">\n          <menu></menu>\n      </div>\n      <div class=\"col-sm-9 row profile-area\">\n        <div class=\"col-sm-12\">\n          <button type=\"button\" class=\"btn btn-secondary btn-lg btn-block\" disabled>PROFILE</button>\n        </div>\n        <div class=\"col-sm-12 row\">\n            <div class=\"col-sm-4 image-area\">\n                <img src=\"https://s3.ap-south-1.amazonaws.com/gg-statics/testimonial/1521018917.png\" alt=\"\">\n            </div>\n            <div class=\"col-sm-8 information-area\">\n                <table class=\"table table-bordered\">\n                    <thead>\n                      <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">Detail</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <th scope=\"row\">User Name:</th>\n                        <td>{{user.username}}</td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Email:</th>\n                        <td>{{user.firstName}}{{user.lastName}}</td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Type:</th>\n                        <td>User</td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"2\">\n                          <button type=\"button\" id=\"create\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModal\">Create Deal</button>\n                        </td>\n                      </tr>\n                    </tbody>\n                </table>\n                <div class=\"modal\" id=\"exampleModal\" aria-hidden=\"true\">\n                  <div class=\"modal-dialog modal-lg\" role=\"document\">\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                        <h5 class=\"modal-title\" id=\"exampleModalLabel\">New Deal</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <form [formGroup]=\"createForm\" (ngSubmit)=\"onSubmit()\">\n                          <div class=\"row\">\n                            <div class=\"form-group col-sm-4\">\n                              <input type=\"text\" formControlName=\"carName\" class=\"form-control\" placeholder=\"Car's Name\" [ngClass]=\"{ 'is-invalid': submitted && f.carName.errors }\" />\n                              <div *ngIf=\"submitted && f.carName.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.carName.errors.required\">Name is required</div>\n                              </div>\n                            </div>\n                            <div class=\"form-group col-sm-4\">\n                              <input formControlName=\"price\" type=\"number\" class=\"form-control\" placeholder=\"Price\" [ngClass]=\"{ 'is-invalid': submitted && f.price.errors }\" />\n                              <div *ngIf=\"submitted && f.price.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.price.errors.required\">Price is required</div>\n                              </div>\n                            </div>\n                            <div class=\"form-group col-sm-4\">\n                              <input type=\"text\" formControlName=\"status\" class=\"form-control\" placeholder=\"Status\" [ngClass]=\"{ 'is-invalid': submitted && f.status.errors }\" />\n                              <div *ngIf=\"submitted && f.status.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.status.errors.required\">Status is required</div>\n                              </div>\n                            </div>\n                            <div class=\"form-group col-sm-6\">\n                              From:\n                              <input type=\"date\" formControlName=\"startDate\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.startDate.errors }\" />\n                              <div *ngIf=\"submitted && f.startDate.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.startDate.errors.required\">Start date is required</div>\n                              </div>\n                            </div>\n                            <div class=\"form-group col-sm-6\">\n                              To:\n                              <input type=\"date\" formControlName=\"endDate\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.endDate.errors }\" />\n                              <div *ngIf=\"submitted && f.endDate.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.endDate.errors.required\">End date is required</div>\n                              </div>\n                            </div>\n                            <div class=\"col-sm-12\">Details:</div>\n                            <div class=\"form-group col-sm-3\">\n                              <input type=\"text\" formControlName=\"mileage\" class=\"form-control\" placeholder=\"Mileage\" [ngClass]=\"{ 'is-invalid': submitted && f.mileage.errors }\" />\n                              <div *ngIf=\"submitted && f.mileage.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.mileage.errors.required\">Mileage is required</div>\n                              </div>\n                            </div>\n                            <div class=\"form-group col-sm-3\">\n                              <input type=\"text\" formControlName=\"vin\" class=\"form-control\" placeholder=\"VIN\" [ngClass]=\"{ 'is-invalid': submitted && f.vin.errors }\" />\n                              <div *ngIf=\"submitted && f.vin.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.vin.errors.required\">VIN is required</div>\n                              </div>\n                            </div>\n                            <div class=\"form-group col-sm-3\">\n                              <input type=\"text\" formControlName=\"stock\" class=\"form-control\" placeholder=\"Stock #\" [ngClass]=\"{ 'is-invalid': submitted && f.stock.errors }\" />\n                              <div *ngIf=\"submitted && f.stock.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.stock.errors.required\">Stock is required</div>\n                              </div>\n                            </div>\n                            <div class=\"form-group col-sm-3\">\n                              <input type=\"text\" formControlName=\"transmission\" class=\"form-control\" placeholder=\"Transmission\" [ngClass]=\"{ 'is-invalid': submitted && f.transmission.errors }\" />\n                              <div *ngIf=\"submitted && f.transmission.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.transmission.errors.required\">Transmission is required</div>\n                              </div>\n                            </div>\n                            <div class=\"col-sm-12\">Features:</div>\n                            <div class=\"form-group col-sm-12\">\n                              <textarea type=\"text\" formControlName=\"features\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.features.errors }\"></textarea>\n                            </div>\n                          </div>\n                          <div class=\"form-group\">\n                              <button class=\"btn btn-primary\">Create Deal</button>\n                          </div>\n                      </form>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-12 cars-area\" *ngIf=\"car.length !== 0\">\n          <button type=\"button\" class=\"btn btn-secondary btn-lg btn-block\" disabled>My Cars</button>\n          <table class=\"table table-bordered table-dark\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Name</th>\n                  <th scope=\"col\">Image</th>\n                  <th scope=\"col\">Created date</th>\n                  <th scope=\"col\">Valid date</th>\n                  <th scope=\"col\">Status</th>\n                  <th scope=\"col\">Action</th>\n                </tr>\n              </thead>\n              <tbody *ngFor=\"let item of car\">\n                <tr>\n                  <td>{{item.carName}}</td>\n                  <td><img src=\"https://crdms.images.consumerreports.org/prod/cars/cr/car-groups/106-11344\" class=\"\" alt=\"Responsive image\"></td>\n                  <td>{{item.startDate}}</td>\n                  <td>{{item.endDate}}</td>\n                  <td>{{item.status}}</td>\n                  <td><button type=\"button\" class=\"btn btn-warning\" (click)=\"deleteCar(item.id)\">Delete</button></td>\n                </tr>\n              </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(formBuilder, alertService, carService) {
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.carService = carService;
        this.submitted = false;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.car = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](JSON.parse(localStorage.getItem('cars')), { userId: this.user.id });
        this.createForm = this.formBuilder.group({
            carName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mileage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            stock: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            transmission: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            features: ['']
        });
    }
    ProfileComponent.prototype.ngDoCheck = function () {
        this.car = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](JSON.parse(localStorage.getItem('cars')), { userId: this.user.id });
    };
    ProfileComponent.prototype.ngAfterViewInit = function () {
        $('#create').click(function () {
            $('#exampleModal').css("display", "block");
        });
    };
    Object.defineProperty(ProfileComponent.prototype, "f", {
        get: function () { return this.createForm.controls; },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.createForm.invalid) {
            return;
        }
        this.carService.create(this.createForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Create success', true);
            $('#exampleModal').on('hidden.bs.modal', function () {
                $(this).find('form')[0].reset();
            });
            $('#exampleModal').modal('hide');
            _this.submitted = false;
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    ProfileComponent.prototype.deleteCar = function (id) {
        this.carService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function () {
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["CarService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  width: 30%;\n  margin: 0 40% 0 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogMCA0MCUgMCAzNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h2>Register</h2>\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n          <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" placeholder=\"First Name\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n          <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" placeholder=\"Last Name\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n          <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <input type=\"text\" formControlName=\"username\" class=\"form-control\" placeholder=\"Username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n          <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.username.errors.required\">Username is required</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n              <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n          <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/utils/error.ts":
/*!********************************!*\
  !*** ./src/app/utils/error.ts ***!
  \********************************/
/*! exports provided: ErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");





var ErrorMessage = /** @class */ (function () {
    function ErrorMessage(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorMessage.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorMessage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ErrorMessage);
    return ErrorMessage;
}());



/***/ }),

/***/ "./src/app/utils/fake-backend.ts":
/*!***************************************!*\
  !*** ./src/app/utils/fake-backend.ts ***!
  \***************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        var users = JSON.parse(localStorage.getItem('users')) || [];
        var cars = JSON.parse(localStorage.getItem('cars')) || [];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Username or password is incorrect');
                }
            }
            // get users
            // if (request.url.endsWith('/users') && request.method === 'GET') {
            //     if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            //         return of(new HttpResponse({ status: 200, body: users }));
            //     } else {
            //         return throwError({ error: { message: 'Unauthorised' } });
            //     }
            // }
            // get car by id
            if (request.url.match(/\/car-details\/\d+$/) && request.method === 'GET') {
                var urlParts = request.url.split('/');
                var id = parseInt(urlParts[urlParts.length - 1]);
                var matchedCar = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](cars, { id: id });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: matchedCar }));
            }
            // create car
            if (request.url.endsWith('/car/create') && request.method === 'POST') {
                var newCar = request.body;
                var currentUser = JSON.parse(lodash__WEBPACK_IMPORTED_MODULE_5__["get"](localStorage, 'currentUser'));
                var id = cars.length + 1;
                var userId = currentUser.id;
                var userName = currentUser.username;
                cars.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, newCar, { id: id, userId: userId, userName: userName }));
                localStorage.setItem('cars', JSON.stringify(cars));
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200 }));
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                var newUser_1 = request.body;
                var duplicateUser = users.filter(function (user) {
                    return user.username === newUser_1.username;
                }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])("Account with username '" + newUser_1.username + "' is already taken");
                }
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200 }));
            }
            //delete car
            if (request.url.match(/\/car\/\d+$/) && request.method === 'DELETE') {
                var urlParts = request.url.split('/');
                var id = parseInt(urlParts[urlParts.length - 1]);
                for (var i = 0; i < cars.length; i++) {
                    var car = cars[i];
                    if (car.id === id) {
                        cars.splice(i, 1);
                        localStorage.setItem('cars', JSON.stringify(cars));
                        break;
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200 }));
            }
            return next.handle(request);
        }));
        // .pipe(materialize())
        // .pipe(delay(500))
        // .pipe(dematerialize());
    };
    FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/utils/index.ts":
/*!********************************!*\
  !*** ./src/app/utils/index.ts ***!
  \********************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider, ErrorMessage, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fake-backend */ "./src/app/utils/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_0__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_0__["fakeBackendProvider"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./src/app/utils/error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return _error__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"]; });

/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt */ "./src/app/utils/jwt.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });






/***/ }),

/***/ "./src/app/utils/jwt.ts":
/*!******************************!*\
  !*** ./src/app/utils/jwt.ts ***!
  \******************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
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

module.exports = __webpack_require__(/*! /home/haitran/KPI/KPI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map