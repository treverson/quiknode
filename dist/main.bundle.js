webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_auth_service_authenticate_guard__ = __webpack_require__("./src/app/common/services/auth-service/authenticate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_auth_service_not_authenticate_guard__ = __webpack_require__("./src/app/common/services/auth-service/not.authenticate.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__common_services_auth_service_not_authenticate_guard__["a" /* NotAuthenticateGuard */]]
    }, {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__common_services_auth_service_authenticate_guard__["a" /* AuthenticateGuard */]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_interceptor__ = __webpack_require__("./src/app/common/interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_services_auth_service_auth_service__ = __webpack_require__("./src/app/common/services/auth-service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_services_auth_service_authenticate_guard__ = __webpack_require__("./src/app/common/services/auth-service/authenticate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_services_auth_service_not_authenticate_guard__ = __webpack_require__("./src/app/common/services/auth-service/not.authenticate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_services_toastr_service__ = __webpack_require__("./src/app/common/services/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_8__common_interceptor__["a" /* InterceptorProvider */], multi: true },
                __WEBPACK_IMPORTED_MODULE_10__common_services_auth_service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__common_services_auth_service_authenticate_guard__["a" /* AuthenticateGuard */],
                __WEBPACK_IMPORTED_MODULE_12__common_services_auth_service_not_authenticate_guard__["a" /* NotAuthenticateGuard */],
                __WEBPACK_IMPORTED_MODULE_13__common_services_toastr_service__["a" /* ToastrService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InterceptorProvider = /** @class */ (function () {
    function InterceptorProvider() {
    }
    InterceptorProvider.prototype.intercept = function (request, next) {
        if (localStorage.getItem('AUTH_TOKEN')) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Basic " + localStorage.getItem('AUTH_TOKEN')
                }
            });
        }
        return next.handle(request)
            .do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpResponse */]) {
                // do stuff with response if you want
            }
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                switch (error.status) {
                    case 401:
                        localStorage.removeItem('AUTH_TOKEN');
                        console.log(error.error);
                        break;
                    default:
                        console.log(error.error);
                }
            }
        });
    };
    InterceptorProvider.prototype.isJson = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    InterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], InterceptorProvider);
    return InterceptorProvider;
}());



/***/ }),

/***/ "./src/app/common/services/auth-service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(_http) {
        this._http = _http;
        if (localStorage.getItem('AUTH_TOKEN')) {
            this._token = localStorage.getItem('AUTH_TOKEN');
        }
    }
    /**
     * Get user token
     * */
    AuthService.prototype.fnGetToken = function () {
        return this._token;
    };
    /**
     * User sign in.
     * @param {object} obj
     * */
    AuthService.prototype.fnSignIn = function (obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var basicAuth = btoa(obj.username + ":" + obj.password);
            var requestObj = {
                email: obj.username,
                password: obj.password,
            };
            _this._http
                .post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api + 'api/v1/session', requestObj)
                .subscribe(function (response) {
                if (response && response.secret) {
                    localStorage.setItem('AUTH_TOKEN', basicAuth);
                    _this._token = basicAuth;
                }
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    /**
     * User sign out.
     * */
    AuthService.prototype.fnSignOut = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._token = '';
            localStorage.removeItem('AUTH_TOKEN');
            resolve();
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/common/services/auth-service/authenticate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/common/services/auth-service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticateGuard = /** @class */ (function () {
    function AuthenticateGuard(_router, _auth) {
        this._router = _router;
        this._auth = _auth;
    }
    AuthenticateGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        return this.fnCheckAuthenticate(url);
    };
    /**
     * check Authenticate.
     * @param {string} url
     */
    AuthenticateGuard.prototype.fnCheckAuthenticate = function (url) {
        if (this._auth.fnGetToken()) {
            if (url.indexOf('login') > -1 || url === '/') {
                this._router.navigate(['/dashboard']);
            }
            return true;
        }
        else {
            this.fnDeleteData();
            this._router.navigate(['/login']);
            return false;
        }
    };
    /**
     * Delete all storage data
     */
    AuthenticateGuard.prototype.fnDeleteData = function () {
        localStorage.removeItem('AUTH_TOKEN');
    };
    AuthenticateGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], AuthenticateGuard);
    return AuthenticateGuard;
}());



/***/ }),

/***/ "./src/app/common/services/auth-service/not.authenticate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthenticateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotAuthenticateGuard = /** @class */ (function () {
    function NotAuthenticateGuard(router) {
        this.router = router;
    }
    NotAuthenticateGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.fnCheckAuthenticate(url);
    };
    NotAuthenticateGuard.prototype.fnCheckAuthenticate = function (url) {
        if (!localStorage.getItem('AUTH_TOKEN')) {
            return true;
        }
        this.router.navigate(['/dashboard']);
        return false;
    };
    NotAuthenticateGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], NotAuthenticateGuard);
    return NotAuthenticateGuard;
}());



/***/ }),

/***/ "./src/app/common/services/toastr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_toastr__ = __webpack_require__("./node_modules/toastr/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastrService = /** @class */ (function () {
    function ToastrService() {
        __WEBPACK_IMPORTED_MODULE_1_toastr__["options"] = {
            'closeButton': false,
            'debug': false,
            'newestOnTop': false,
            'progressBar': true,
            'positionClass': 'toast-position',
            'preventDuplicates': false,
            'onclick': null,
            'showDuration': '30000000',
            'hideDuration': '1000',
            // 'timeOut': '3000',
            'extendedTimeOut': '1000',
            'showEasing': 'swing',
            'hideEasing': 'linear',
            'showMethod': 'fadeIn',
            'hideMethod': 'fadeOut'
        };
    }
    /**
     * Success message
     * @param {string} message
     * @param {string} title
     * */
    ToastrService.prototype.fnSuccess = function (message, title) {
        __WEBPACK_IMPORTED_MODULE_1_toastr__["success"](message, title);
    };
    /**
     * Info message
     * @param {string} message
     * @param {string} title
     * */
    ToastrService.prototype.fnInfo = function (message, title) {
        __WEBPACK_IMPORTED_MODULE_1_toastr__["info"](message, title);
    };
    /**
     * Warning message
     * @param {string} message
     * @param {string} title
     * */
    ToastrService.prototype.fnWarning = function (message, title) {
        __WEBPACK_IMPORTED_MODULE_1_toastr__["warning"](message, title);
    };
    /**
     * Error message
     * @param {string} message
     * @param {string} title
     * */
    ToastrService.prototype.fnError = function (message, title) {
        __WEBPACK_IMPORTED_MODULE_1_toastr__["error"](message, title);
    };
    ToastrService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ToastrService);
    return ToastrService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"message-modal\">\r\n  <div class=\"w-container\">\r\n    <div class=\"w-row\">\r\n      <div class=\"w-col w-col-1\">\r\n        <p class=\"icon large centered\"></p>\r\n      </div>\r\n      <div class=\"w-col w-col-11\">\r\n        <h4 class=\"modal-msg-text\">Cannot delete instance: Access denied</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"particles-back\" class=\"particles-back\"></div>\r\n<div class=\"w-form\">\r\n  <form id=\"email-form\" name=\"email-form\" data-name=\"Email Form\">\r\n    <app-header></app-header>\r\n    <div class=\"modal-overlay\">\r\n      <div id=\"my_account\" class=\"modal-content w-clearfix\">\r\n        <a href=\"#\" title=\"Delete\" class=\"button btn-round btn-m float-right close-btn w-button\"></a>\r\n        <h2 class=\"modal-header\">My account</h2>\r\n        <div class=\"w-container\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-6\">\r\n              <div class=\"icon-input w-row\">\r\n                <div class=\"w-col w-col-1\">\r\n                  <div class=\"icon icon-lg\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11\">\r\n                  <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"Newman\"  required=\"\">\r\n                </div>\r\n              </div>\r\n              <div class=\"icon-input w-row\">\r\n                <div class=\"w-col w-col-1\">\r\n                  <div class=\"icon icon-lg mt10\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11\">\r\n                  <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"mail@usps.com\" required=\"\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"w-col w-col-6\">\r\n              <a href=\"#\" class=\"button icon-btn w-inline-block\">\r\n                <div class=\"w-row\">\r\n                  <div class=\"w-col w-col-3\">\r\n                    <div class=\"icon\"></div>\r\n                  </div>\r\n                  <div class=\"w-col w-col-9\">\r\n                    <div class=\"btn-label\">Reset password</div>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"button icon-btn ml-10 w-inline-block\">\r\n                <div class=\"w-row\">\r\n                  <div class=\"w-col w-col-3\">\r\n                    <div class=\"icon\"></div>\r\n                  </div>\r\n                  <div class=\"w-col w-col-9\">\r\n                    <div class=\"btn-label\">Generate OTP</div>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <h4 class=\"modal-header\">API keys</h4>\r\n        <div class=\"w-container\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-4\">\r\n              <h6 class=\"modal-header\">key</h6>\r\n            </div>\r\n            <div class=\"w-col w-col-4\">\r\n              <h6 class=\"modal-header\">secret</h6>\r\n            </div>\r\n            <div class=\"w-col w-col-4\">\r\n              <h6 class=\"modal-header\">description</h6>\r\n            </div>\r\n          </div>\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-4\">\r\n              <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-5\" data-name=\"Field 5\" placeholder=\"Example Text\"  required=\"\">\r\n            </div>\r\n            <div class=\"w-col w-col-4\">\r\n              <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-5\" data-name=\"Field 5\" placeholder=\"Example Text\"  required=\"\">\r\n            </div>\r\n            <div class=\"w-col w-col-3\">\r\n              <textarea name=\"field-6\" placeholder=\"Example Text\" maxlength=\"5000\" class=\"w-input\"></textarea>\r\n            </div>\r\n            <div class=\"w-col w-col-1\">\r\n              <a href=\"#\" title=\"Delete\" class=\"button btn-round btn-m flush-top ml-10 float-right w-button\"></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-4\">\r\n              <h6 class=\"text\">04cf5e00-d8eb-4307-99a1-c81991bb7c93</h6>\r\n            </div>\r\n            <div class=\"w-col w-col-4\">\r\n              <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-5\" data-name=\"Field 5\" placeholder=\"NJn6Tatlh0uMa2bfRxXxhTZkBV2ZcF3Ew-84OqJLpfc3ynNFSwsu6bP04XRbzaT3bTkNkhROkz8I38ITyBFzLIV\" id=\"field-5\" required=\"\">\r\n            </div>\r\n            <div class=\"w-col w-col-3\">\r\n              <textarea id=\"field-6\" name=\"field-6\" maxlength=\"5000\" placeholder=\"Team API access token\" class=\"w-input\"></textarea>\r\n            </div>\r\n            <div class=\"w-col w-col-1\">\r\n              <a href=\"#\" title=\"Delete\" class=\"button btn-round btn-m flush-top ml-10 float-right w-button\"></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a href=\"#\" class=\"button icon-btn float-right mt10 w-inline-block\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-3\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"w-col w-col-9\">\r\n              <div class=\"btn-label\">SAVE </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <div id=\"suspend_user\" class=\"modal-content w-clearfix\">\r\n        <a href=\"#\" title=\"Delete\" class=\"button btn-round btn-m float-right close-btn w-button\"></a>\r\n        <h2 class=\"modal-header\">Suspend user?</h2>\r\n        <div class=\"w-container\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-1\">\r\n              <div class=\"icon icon-xl\"></div>\r\n            </div>\r\n            <div class=\"w-col w-col-11\">\r\n              <p>This action will suspend ALL of this user&#x27;s credentials until re-activated. <br>Are you sure you want to continue?</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a href=\"#\" class=\"button icon-btn float-right mt10 w-inline-block\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-3\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"w-col w-col-9\">\r\n              <div class=\"btn-label\">CONTINUE</div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <a href=\"#\" class=\"button icon-btn float-right mt10 mr10 w-inline-block\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-3\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"w-col w-col-9\">\r\n              <div class=\"btn-label\">CANCEL</div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <div id=\"delete_user\" class=\"modal-content w-clearfix\">\r\n        <a href=\"#\" title=\"Delete\" class=\"button btn-round btn-m float-right close-btn w-button\"></a>\r\n        <h2 class=\"modal-header\">delete user?</h2>\r\n        <div class=\"w-container\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-1\">\r\n              <div class=\"icon icon-xl\"></div>\r\n            </div>\r\n            <div class=\"w-col w-col-11\">\r\n              <p>This action will permanently delete this user. This cannot be undone. <br>Are you sure you wish to continue?</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a href=\"#\" class=\"button icon-btn float-right mt10 w-inline-block\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-3\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"w-col w-col-9\">\r\n              <div class=\"btn-label\">CONTINUE</div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <a href=\"#\" class=\"button icon-btn float-right mt10 mr10 w-inline-block\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-3\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"w-col w-col-9\">\r\n              <div class=\"btn-label\">CANCEL</div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <div id=\"suspend_instance\" class=\"modal-content w-clearfix\">\r\n        <a href=\"#\" title=\"Delete\" class=\"button btn-round btn-m float-right close-btn w-button\"></a>\r\n        <h2 class=\"modal-header\">suspend instance?</h2>\r\n        <div class=\"w-container\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-1\">\r\n              <div class=\"icon icon-xl\"></div>\r\n            </div>\r\n            <div class=\"w-col w-col-11\">\r\n              <p>This action will make this instance unavailable for all users. <br>All configurations settings will be saved.<br>Are you sure you wish to continue?</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a href=\"#\" class=\"button icon-btn float-right mt10 w-inline-block\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-3\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"w-col w-col-9\">\r\n              <div class=\"btn-label\">CONTINUE</div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <a href=\"#\" class=\"button icon-btn float-right mt10 mr10 w-inline-block\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-3\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"w-col w-col-9\">\r\n              <div class=\"btn-label\">CANCEL</div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <div id=\"add_user\" class=\"modal-content w-clearfix\">\r\n        <a href=\"#\" title=\"Delete\" class=\"button btn-round btn-m float-right close-btn w-button\"></a>\r\n        <h2 class=\"modal-header\">add user</h2>\r\n        <div class=\"w-container\">\r\n          <div class=\"btm10 w-row\">\r\n            <div class=\"w-col w-col-6\">\r\n              <div class=\"icon-input w-row\">\r\n                <div class=\"w-col w-col-1\">\r\n                  <div class=\"icon icon-lg\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11\">\r\n                  <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"Newman\" required=\"\">\r\n                </div>\r\n              </div>\r\n              <div class=\"icon-input w-row\">\r\n                <div class=\"w-col w-col-1\">\r\n                  <div class=\"icon icon-lg mt10\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11\">\r\n                  <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"mail@usps.com\" required=\"\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"w-clearfix w-col w-col-6\">\r\n              <div class=\"icon-input w-row\">\r\n                <div class=\"w-col w-col-1\">\r\n                  <div class=\"icon icon-lg mt10\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11\">\r\n                  <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"Password\" required=\"\">\r\n                </div>\r\n              </div>\r\n              <div class=\"icon-input w-row\">\r\n                <div class=\"w-col w-col-1\">\r\n                  <div class=\"icon icon-lg mt10\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11\">\r\n                  <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"Repeat password\" required=\"\">\r\n                </div>\r\n              </div>\r\n              <a href=\"#\" class=\"button icon-btn float-left w-inline-block\">\r\n                <div class=\"w-row\">\r\n                  <div class=\"w-col w-col-3\">\r\n                    <div class=\"icon\"></div>\r\n                  </div>\r\n                  <div class=\"w-col w-col-9\">\r\n                    <div class=\"btn-label\">Reset password</div>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"button icon-btn w-inline-block\">\r\n                <div class=\"w-row\">\r\n                  <div class=\"w-col w-col-3\">\r\n                    <div class=\"icon\"></div>\r\n                  </div>\r\n                  <div class=\"w-col w-col-9\">\r\n                    <div class=\"btn-label\">Generate OTP</div>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-6\">\r\n              <h4 class=\"modal-header\">user&#x27;s instances</h4>\r\n              <select name=\"field-3\" class=\"w-select\">\r\n                <option value=\"\">Select one...</option>\r\n                <option value=\"First\">First Choice</option>\r\n                <option value=\"Second\">Second Choice</option>\r\n                <option value=\"Third\">Third Choice</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"w-col w-col-6\">\r\n              <h4 class=\"modal-header\">permissions</h4>\r\n              <div class=\"checkbox w-checkbox\">\r\n                <input type=\"checkbox\" name=\"checkbox-8\" data-name=\"Checkbox 8\" class=\"checkbox-field w-checkbox-input\">\r\n                <label class=\"checkbox-label w-form-label\">add users</label>\r\n              </div>\r\n              <div class=\"checkbox w-checkbox\">\r\n                <input type=\"checkbox\" name=\"checkbox-7\" data-name=\"Checkbox 7\" class=\"checkbox-field w-checkbox-input\">\r\n                <label class=\"checkbox-label w-form-label\">delete instances</label>\r\n              </div>\r\n              <div class=\"checkbox w-checkbox\">\r\n                <input type=\"checkbox\" name=\"checkbox-6\" data-name=\"Checkbox 6\" class=\"checkbox-field w-checkbox-input\">\r\n                <label class=\"checkbox-label w-form-label\">create instances</label>\r\n              </div>\r\n              <div class=\"checkbox w-checkbox\">\r\n                <input type=\"checkbox\" name=\"checkbox-5\" data-name=\"Checkbox 5\" class=\"checkbox-field w-checkbox-input\">\r\n                <label class=\"checkbox-label w-form-label\">delete users</label>\r\n              </div>\r\n              <div class=\"checkbox w-checkbox\">\r\n                <input type=\"checkbox\" name=\"checkbox-4\" data-name=\"Checkbox 4\" class=\"checkbox-field w-checkbox-input\">\r\n                <label class=\"checkbox-label w-form-label\">list users</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a href=\"#\" class=\"button icon-btn float-right w-inline-block\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-3\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"w-col w-col-9\">\r\n              <div class=\"btn-label\">SAVE </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <div id=\"edit_user\" class=\"modal-content w-clearfix\">\r\n        <a href=\"#\" title=\"Delete\" class=\"button btn-round btn-m float-right close-btn w-button\"></a>\r\n        <h2 class=\"modal-header\">edit user</h2>\r\n        <div class=\"w-container\">\r\n          <div class=\"btm10 w-row\">\r\n            <div class=\"w-col w-col-6\">\r\n              <div class=\"icon-input w-row\">\r\n                <div class=\"w-col w-col-1\">\r\n                  <div class=\"icon icon-lg\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11\">\r\n                  <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"Newman\" required=\"\">\r\n                </div>\r\n              </div>\r\n              <div class=\"icon-input w-row\">\r\n                <div class=\"w-col w-col-1\">\r\n                  <div class=\"icon icon-lg mt10\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11\">\r\n                  <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"mail@usps.com\" required=\"\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"w-clearfix w-col w-col-6\">\r\n              <div class=\"icon-input w-row\">\r\n                <div class=\"w-col w-col-1\">\r\n                  <div class=\"icon icon-lg mt10\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11\">\r\n                  <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"Password\" required=\"\">\r\n                </div>\r\n              </div>\r\n              <div class=\"icon-input w-row\">\r\n                <div class=\"w-col w-col-1\">\r\n                  <div class=\"icon icon-lg mt10\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11\">\r\n                  <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"Repeat password\" required=\"\">\r\n                </div>\r\n              </div>\r\n              <a href=\"#\" class=\"button icon-btn float-left w-inline-block\">\r\n                <div class=\"w-row\">\r\n                  <div class=\"w-col w-col-3\">\r\n                    <div class=\"icon\"></div>\r\n                  </div>\r\n                  <div class=\"w-col w-col-9\">\r\n                    <div class=\"btn-label\">Reset password</div>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"button icon-btn w-inline-block\">\r\n                <div class=\"w-row\">\r\n                  <div class=\"w-col w-col-3\">\r\n                    <div class=\"icon\"></div>\r\n                  </div>\r\n                  <div class=\"w-col w-col-9\">\r\n                    <div class=\"btn-label\">Generate OTP</div>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-6\">\r\n              <h4 class=\"modal-header\">user&#x27;s instances</h4>\r\n              <select name=\"field-3\" class=\"w-select\">\r\n                <option value=\"\">Select one...</option>\r\n                <option value=\"First\">First Choice</option>\r\n                <option value=\"Second\">Second Choice</option>\r\n                <option value=\"Third\">Third Choice</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"w-col w-col-6\">\r\n              <h4 class=\"modal-header\">permissions</h4>\r\n              <div class=\"checkbox w-checkbox\">\r\n                <input type=\"checkbox\" name=\"checkbox-8\" data-name=\"Checkbox 8\" class=\"checkbox-field w-checkbox-input\">\r\n                <label class=\"checkbox-label w-form-label\">add users</label>\r\n              </div>\r\n              <div class=\"checkbox w-checkbox\">\r\n                <input type=\"checkbox\" name=\"checkbox-7\" data-name=\"Checkbox 7\" class=\"checkbox-field w-checkbox-input\">\r\n                <label class=\"checkbox-label w-form-label\">delete instances</label>\r\n              </div>\r\n              <div class=\"checkbox w-checkbox\">\r\n                <input type=\"checkbox\" name=\"checkbox-6\" data-name=\"Checkbox 6\" class=\"checkbox-field w-checkbox-input\">\r\n                <label class=\"checkbox-label w-form-label\">create instances</label>\r\n              </div>\r\n              <div class=\"checkbox w-checkbox\">\r\n                <input type=\"checkbox\" name=\"checkbox-5\" data-name=\"Checkbox 5\" class=\"checkbox-field w-checkbox-input\">\r\n                <label class=\"checkbox-label w-form-label\">delete users</label>\r\n              </div>\r\n              <div class=\"checkbox w-checkbox\">\r\n                <input type=\"checkbox\" name=\"checkbox-4\" data-name=\"Checkbox 4\" class=\"checkbox-field w-checkbox-input\">\r\n                <label class=\"checkbox-label w-form-label\">list users</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a href=\"#\" class=\"button icon-btn float-right w-inline-block\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-3\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"w-col w-col-9\">\r\n              <div class=\"btn-label\">SAVE </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <div id=\"add_instance\" class=\"modal-content w-clearfix\">\r\n        <a href=\"#\" title=\"Delete\" class=\"button btn-round btn-m float-right close-btn w-button\"></a>\r\n        <h2 class=\"modal-header\">create instance</h2>\r\n        <div class=\"w-container\">\r\n          <div class=\"btm10 w-row\">\r\n            <div class=\"w-col w-col-6\">\r\n              <h4 class=\"modal-header\">info</h4>\r\n              <div class=\"icon-input w-row\">\r\n                <div class=\"w-col w-col-1\">\r\n                  <div class=\"icon icon-lg mt10\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11\">\r\n                  <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"Name\" required=\"\">\r\n                </div>\r\n              </div>\r\n              <div class=\"icon-input w-row\">\r\n                <div class=\"w-col w-col-1\">\r\n                  <div class=\"icon icon-lg\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11\">\r\n                  <textarea id=\"field-4\" name=\"field-4\" placeholder=\"Description\" maxlength=\"5000\" class=\"w-input\"></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"w-col w-col-6\">\r\n              <h4 class=\"modal-header\">Validators</h4>\r\n              <select id=\"field-3\" name=\"field-3\" class=\"w-select\">\r\n                <option value=\"\">Add New...</option>\r\n                <option value=\"First\">First Choice</option>\r\n                <option value=\"Second\">Second Choice</option>\r\n                <option value=\"Third\">Third Choice</option>\r\n              </select>\r\n              <div class=\"input-block\">\r\n                <label class=\"name-label\">http request referer</label>\r\n                <div class=\"icon-input w-row\">\r\n                  <div class=\"w-col w-col-1\">\r\n                    <div class=\"icon icon-lg mt10\"></div>\r\n                  </div>\r\n                  <div class=\"w-col w-col-9\">\r\n                    <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"Referrer\" required=\"\">\r\n                  </div>\r\n                  <div class=\"w-col w-col-2\">\r\n                    <a href=\"#\" title=\"Delete\" class=\"button btn-round btn-m flush-top ml-10 float-right w-button\"></a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"input-block\">\r\n                <label class=\"name-label\">http token validation</label>\r\n                <div class=\"icon-input w-row\">\r\n                  <div class=\"w-col w-col-1\">\r\n                    <div class=\"icon icon-lg mt10\"></div>\r\n                  </div>\r\n                  <div class=\"w-col w-col-9\">\r\n                    <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"Token\" required=\"\">\r\n                  </div>\r\n                  <div class=\"w-col w-col-2\">\r\n                    <a href=\"#\" title=\"Delete\" class=\"button btn-round btn-m flush-top ml-10 float-right w-button\"></a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a href=\"#\" class=\"button icon-btn float-right w-inline-block\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-3\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"w-col w-col-9\">\r\n              <div class=\"btn-label\">LAUNCH!</div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <div id=\"edit_instance\" class=\"modal-content w-clearfix\">\r\n        <a href=\"#\" title=\"Delete\" class=\"button btn-round btn-m float-right close-btn w-button\"></a>\r\n        <h2 class=\"modal-header\">edit instance</h2>\r\n        <div class=\"w-container\">\r\n          <div class=\"btm10 w-row\">\r\n            <div class=\"w-col w-col-6\">\r\n              <h4 class=\"modal-header\">info</h4>\r\n              <div class=\"icon-input w-row\">\r\n                <div class=\"w-col w-col-1\">\r\n                  <div class=\"icon icon-lg mt10\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11\">\r\n                  <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"Name\" required=\"\">\r\n                </div>\r\n              </div>\r\n              <div class=\"icon-input w-row\">\r\n                <div class=\"w-col w-col-1\">\r\n                  <div class=\"icon icon-lg\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11\">\r\n                  <textarea name=\"field-4\" placeholder=\"Description\" maxlength=\"5000\" class=\"w-input\"></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"w-col w-col-6\">\r\n              <h4 class=\"modal-header\">Validators</h4>\r\n              <select name=\"field-3\" class=\"w-select\">\r\n                <option value=\"\">Add New...</option>\r\n                <option value=\"First\">First Choice</option>\r\n                <option value=\"Second\">Second Choice</option>\r\n                <option value=\"Third\">Third Choice</option>\r\n              </select>\r\n              <div class=\"input-block\">\r\n                <label class=\"name-label\">http request referer</label>\r\n                <div class=\"icon-input w-row\">\r\n                  <div class=\"w-col w-col-1\">\r\n                    <div class=\"icon icon-lg mt10\"></div>\r\n                  </div>\r\n                  <div class=\"w-col w-col-9\">\r\n                    <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"Referrer\" required=\"\">\r\n                  </div>\r\n                  <div class=\"w-col w-col-2\">\r\n                    <a href=\"#\" title=\"Delete\" class=\"button btn-round btn-m flush-top ml-10 float-right w-button\"></a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"input-block\">\r\n                <label class=\"name-label\">http token validation</label>\r\n                <div class=\"icon-input w-row\">\r\n                  <div class=\"w-col w-col-1\">\r\n                    <div class=\"icon icon-lg mt10\"></div>\r\n                  </div>\r\n                  <div class=\"w-col w-col-9\">\r\n                    <input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"Token\" id=\"field-2\" required=\"\">\r\n                  </div>\r\n                  <div class=\"w-col w-col-2\">\r\n                    <a href=\"#\" title=\"Delete\" class=\"button btn-round btn-m flush-top ml-10 float-right w-button\"></a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a href=\"#\" class=\"button icon-btn float-right w-inline-block\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-3\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"w-col w-col-9\">\r\n              <div class=\"btn-label\">SAVE </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"search-box\">\r\n      <div class=\"icon field-icon\"></div>\r\n    </div>\r\n    <div class=\"row w-row\">\r\n      <div class=\"sortable w-col w-col-8\">\r\n        <div class=\"my-account-dashboard\">\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-6\">\r\n              <h2 class=\"card-heading\">Optimus prime</h2>\r\n              <a href=\"#\" data-target=\"my_account\" class=\"button btn-flat w-inline-block\">\r\n                <div data-targe=\"my_account\" class=\"icon\"></div>\r\n              </a>\r\n              <div class=\"max-width w-row\">\r\n                <div class=\"w-col w-col-1 w-col-small-1 w-col-tiny-1\">\r\n                  <div class=\"icon grey-text centered\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11 w-col-small-11 w-col-tiny-11\">\r\n                  <div class=\"grey-text underline w-clearfix\">Account Balance\r\n                    <span class=\"float-right bold\">ETH 0.03</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"max-width w-row\">\r\n                <div class=\"w-col w-col-1 w-col-small-1 w-col-tiny-1\">\r\n                  <div class=\"icon grey-text centered\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11 w-col-small-11 w-col-tiny-11\">\r\n                  <div class=\"grey-text underline w-clearfix\">Running Instances\r\n                    <span class=\"float-right bold\">13</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"max-width w-row\">\r\n                <div class=\"w-col w-col-1 w-col-small-1 w-col-tiny-1\">\r\n                  <div class=\"icon grey-text centered\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-11 w-col-small-11 w-col-tiny-11\">\r\n                  <div class=\"grey-text underline w-clearfix\">Active Users\r\n                    <span class=\"float-right bold\">2</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"padded-col pad w-col w-col-6\">\r\n              <h2 class=\"card-heading\">System uPDATES</h2>\r\n              <div class=\"mb-10 w-row\">\r\n                <div class=\"w-col w-col-2 w-col-small-2 w-col-tiny-2\">\r\n                  <div class=\"icon grey-text centered\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-10 w-col-small-10 w-col-tiny-10\">\r\n                  <div class=\"grey-text small-text\">Network maintenance will be performed on Tue, Jul 23 at 04:00am. Please note, all Instances will be <strong>temporarily</strong> <strong>suspended</strong>. Thank you for your patience!</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"w-row\">\r\n                <div class=\"w-col w-col-2 w-col-small-2 w-col-tiny-2\">\r\n                  <div class=\"icon grey-text centered\"></div>\r\n                </div>\r\n                <div class=\"w-col w-col-10 w-col-small-10 w-col-tiny-10\">\r\n                  <div class=\"grey-text small-text\">We are expanding our server capacity. Stay tuned for significant performance improvements!</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"instances-dashboard\">\r\n          <h2 class=\"card-heading\">Instances</h2>\r\n          <a href=\"#\" data-target=\"add_instance\" class=\"button icon-btn small w-inline-block\">\r\n            <div class=\"icon\"></div>\r\n          </a>\r\n          <div class=\"card\">\r\n            <div class=\"info-row shadow\"  *ngFor=\"let ins of instances\">\r\n              <div class=\"name-label bold\">{{ins.name}}</div>\r\n              <div class=\"grey-text\">Used for testing purposes. Do not suspend.</div>\r\n              <div class=\"stat-block\">\r\n                <p>Online since: {{ins.created}}</p>\r\n              </div>\r\n              <div class=\"hover-menu\">\r\n                <a href=\"#\" title=\"Start / Stop\" data-target=\"suspend_instance\" class=\"button btn-round btn-m w-button\"></a>\r\n                <a href=\"#\" title=\"Settings\" data-target=\"edit_instance\" class=\"button btn-round btn-m w-button\"></a>\r\n              </div>\r\n              <img src=\"assets/images/mini-chart.JPG\" class=\"microchart\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"sortable w-col w-col-4\">\r\n        <div class=\"analytics\">\r\n          <h2 class=\"card-heading\">Analytics</h2>\r\n          <a href=\"#\" data-target=\"my_account\" class=\"button btn-flat w-inline-block\">\r\n            <div class=\"icon\"></div>\r\n          </a>\r\n          <div class=\"w-row\">\r\n            <div class=\"w-col w-col-4\">\r\n              <select id=\"Select-instance\" name=\"Select-instance\" data-name=\"Select instance\" class=\"w-select\">\r\n                <option value=\"\">Instance ...</option>\r\n                <option value=\"First\">First Choice</option>\r\n                <option value=\"Second\">Second Choice</option>\r\n                <option value=\"Third\">Third Choice</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"w-col w-col-4\">\r\n              <select id=\"select-metric-2\" name=\"select-metric\" data-name=\"select-metric\" class=\"w-select\">\r\n                <option value=\"\">Metric ...</option>\r\n                <option value=\"First\">First Choice</option>\r\n                <option value=\"Second\">Second Choice</option>\r\n                <option value=\"Third\">Third Choice</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"w-col w-col-4\">\r\n              <select id=\"field\" name=\"field\" class=\"w-select\">\r\n                <option value=\"\">Period</option>\r\n                <option value=\"First\">First Choice</option>\r\n                <option value=\"Second\">Second Choice</option>\r\n                <option value=\"Third\">Third Choice</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div id=\"chart\" class=\"shadow chart\"></div>\r\n        </div>\r\n        <div class=\"users-dashboard\">\r\n          <h2 class=\"card-heading\">users</h2>\r\n          <a href=\"#\" data-target=\"add_user\" class=\"button icon-btn small w-inline-block\">\r\n            <div class=\"icon\"></div>\r\n          </a>\r\n          <div class=\"card flex\">\r\n            <div class=\"info-row shadow\">\r\n              <img src=\"assets/images/Optimus_Prime_Helmet.png\" class=\"userpic\">\r\n              <div class=\"name-label bold\">Optimus Prime Jr</div>\r\n              <div class=\"small-pill\">\r\n                <div class=\"text-block\">admin</div>\r\n              </div>\r\n              <div class=\"grey-text\">iamprime@gmail.com</div>\r\n              <p class=\"stat-block\">Last login: Today</p>\r\n              <div class=\"hover-menu\">\r\n                <a href=\"#\" title=\"Delete user\" data-target=\"delete_user\" class=\"button btn-round btn-m w-button\"></a>\r\n                <a href=\"#\" title=\"Suspend user\" data_target=\"suspend_user\" class=\"button btn-round btn-m w-button\"></a>\r\n                <a href=\"#\" title=\"Settings\" data-target=\"edit_user\" class=\"button btn-round btn-m w-button\"></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"info-row shadow\">\r\n              <img src=\"assets/images/Silver_Iron_Man_Mask.png\" srcset=\"assets/images/Silver_Iron_Man_Mask-p-500.png 500w, assets/images/Silver_Iron_Man_Mask.png 512w\" sizes=\"50px\" class=\"userpic\">\r\n              <div class=\"name-label bold\">Silver surfer thompson</div>\r\n              <div class=\"grey-text\">ssthom@gmail.com</div>\r\n              <p class=\"stat-block\">Last login: 12-12-2018</p>\r\n              <div class=\"hover-menu\">\r\n                <a href=\"#\" title=\"Delete user\" data-target=\"delete_user\" class=\"button btn-round btn-m w-button\"></a>\r\n                <a href=\"#\" title=\"Suspend user\" data_target=\"suspend_user\" class=\"button btn-round btn-m w-button\"></a>\r\n                <a href=\"#\" title=\"Settings\" data-target=\"edit_user\" class=\"button btn-round btn-m w-button\"></a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"w-form-done\">\r\n    <div>Thank you! Your submission has been received!</div>\r\n  </div>\r\n  <div class=\"w-form-fail\">\r\n    <div>Oops! Something went wrong while submitting the form.</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.instances = [
            {
                "account-id": "fd9a5505-2221-4109-834b-5fedfb568fe8",
                "instance-id": "27e9b512-54bf-4ccf-8f34-47a0f93f6eb0",
                "name": "webosmotic test 1",
                "created": "2018-03-14T18:17:45.841998Z",
                "configuration": {
                    "validators": {
                        "http": {
                            "request": null
                        }
                    }
                }
            },
            {
                "account-id": "fd9a5505-2221-4109-834b-5fedfb568fe8",
                "instance-id": "27e9b512-54bf-4ccf-8f34-47a0f93f6eb0",
                "name": "webosmotic test 1",
                "created": "2018-03-14T18:17:45.841998Z",
                "configuration": {
                    "validators": {
                        "http": {
                            "request": null
                        }
                    }
                }
            }
        ];
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div data-collapse=\"medium\" data-animation=\"over-left\" data-duration=\"400\" class=\"navbar w-nav\">\r\n  <a href=\"#\" class=\"brand w-clearfix w-nav-brand\">\r\n    <img src=\"assets/images/quiknode_pro_long.png\" srcset=\"assets/images/quiknode_pro_long-p-500.png 500w, assets/images/quiknode_pro_long.png 561w\" sizes=\"(max-width: 479px) 88vw, 166.078125px\" class=\"logo\">\r\n  </a>\r\n  <nav role=\"navigation\" class=\"w-nav-menu\">\r\n    <a href=\"#\" class=\"nav-link w-nav-link\">My Account</a>\r\n    <a href=\"#\" class=\"nav-link w-nav-link\">Instances</a>\r\n    <a href=\"#\" class=\"nav-link w-nav-link\">Users</a>\r\n    <a href=\"#\" class=\"nav-link w-nav-link\">Help</a>\r\n  </nav>\r\n  <div class=\"w-nav-button\">\r\n    <div class=\"w-icon-nav-menu\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "small.text-danger {\r\n    color: #dc3545;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"particles-back\" class=\"particles-back\"></div>\r\n<div class=\"login-container w-container\">\r\n    <div class=\"login--form w-form\">\r\n        <form #signInForm=\"ngForm\" id=\"email-form\" name=\"email-form\" data-name=\"Email Form\"\r\n              (ngSubmit)=\"signInForm.valid  && fnSignIn(logInObject, signInForm)\">\r\n            <img src=\"assets/images/platinum_q.png\" class=\"med-img centered\">\r\n            <h3 class=\"card-heading centered\">Login to your account</h3>\r\n            <input type=\"text\" class=\"input-field w-input\"\r\n                   maxlength=\"256\" name=\"username\"\r\n                   data-name=\"username\"\r\n                   placeholder=\"Username\"\r\n                   [(ngModel)]=\"logInObject.username\"\r\n                   #username=\"ngModel\"\r\n                   id=\"username\"\r\n                   required\r\n            >\r\n\r\n            <div *ngIf=\"(signInForm.submitted || username.touched) && !username.valid\">\r\n                <small class=\"text-danger\" *ngIf=\"username.errors['required']\">\r\n                    Username is required.\r\n                </small>\r\n            </div>\r\n\r\n            <input\r\n                type=\"password\"\r\n                class=\"input-field w-input\"\r\n                maxlength=\"256\"\r\n                name=\"password\"\r\n                data-name=\"Password\"\r\n                placeholder=\"Password\"\r\n                id=\"password\"\r\n                #password=\"ngModel\"\r\n                [(ngModel)]=\"logInObject.password\"\r\n                required=\"\"\r\n            >\r\n\r\n            <div *ngIf=\"(signInForm.submitted || password.touched) && !password.valid\">\r\n                <small class=\"text-danger\" *ngIf=\"password.errors['required']\">\r\n                    Password is required.\r\n                </small>\r\n            </div>\r\n\r\n            <div class=\"w-row\">\r\n                <div class=\"w-col w-col-6 w-col-small-6 w-col-tiny-6\">\r\n                    <a href=\"#\" class=\"text-link\">Forgot Password?</a>\r\n                </div>\r\n                <div class=\"w-col w-col-6 w-col-small-6 w-col-tiny-6\">\r\n                    <button type=\"submit\" class=\"button float-right w-inline-block\">\r\n                        <div class=\"w-row\">\r\n                            <div class=\"w-col w-col-3 w-col-small-3 w-col-tiny-3\">\r\n                                <div class=\"icon\"></div>\r\n                            </div>\r\n                            <div class=\"w-col w-col-9 w-col-small-9 w-col-tiny-9\">\r\n                                <div>  Login</div>\r\n                            </div>\r\n                        </div>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <h4 class=\"divider-text\">Or</h4>\r\n            <div class=\"w-row\">\r\n                <div class=\"w-col w-col-4 w-col-small-4 w-col-tiny-4\">\r\n                    <a href=\"#\" title=\"Login with Github\" class=\"button btn-flat w-inline-block\">\r\n                        <div class=\"w-row\">\r\n                            <div class=\"w-col w-col-3 w-col-small-3 w-col-tiny-3\"><img\r\n                                src=\"assets/images/github-logo.png\" class=\"pic-icon\"></div>\r\n                            <div class=\"w-col w-col-9 w-col-small-9 w-col-tiny-9\">\r\n                                <div class=\"small-text\">  Github</div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n                <div class=\"w-col w-col-4 w-col-small-4 w-col-tiny-4\">\r\n                    <a href=\"#\" data-target=\"add_instance\" title=\"Scan One Time Password\"\r\n                       class=\"button centered w-inline-block\">\r\n                        <div class=\"icon\"></div>\r\n                    </a>\r\n                </div>\r\n                <div class=\"w-col w-col-4 w-col-small-4 w-col-tiny-4\">\r\n                    <a href=\"#\" title=\"Login with Google\" class=\"button btn-flat float-right w-inline-block\">\r\n                        <div class=\"w-row\">\r\n                            <div class=\"w-col w-col-3 w-col-tiny-3 w-col-small-3\">\r\n                                <img src=\"assets/images/google-1.png\" class=\"pic-icon\"></div>\r\n                            <div class=\"w-col w-col-9 w-col-tiny-9 w-col-small-9\">\r\n                                <div class=\"small-text\">  Google</div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_auth_service_auth_service__ = __webpack_require__("./src/app/common/services/auth-service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_toastr_service__ = __webpack_require__("./src/app/common/services/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_auth, _router, _toastr) {
        this._auth = _auth;
        this._router = _router;
        this._toastr = _toastr;
        this.logInObject = {
            username: '',
            password: '',
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // call API on login button
    LoginComponent.prototype.fnSignIn = function (signInObj, myForm) {
        var _this = this;
        this._auth.fnSignIn(signInObj)
            .then(function (response) {
            _this._toastr.fnSuccess('Logged in successfully.');
            _this._router.navigate(['dashboard']);
        })
            .catch(function (error) {
            _this._toastr.fnWarning('Login failed.');
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__common_services_toastr_service__["a" /* ToastrService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api: ''
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map