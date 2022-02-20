"use strict";
(self["webpackChunkconserve"] = self["webpackChunkconserve"] || []).push([["common"],{

/***/ 1526:
/*!*************************************************************!*\
  !*** ./src/app/companycam/companycam-credential.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanycamCredentialService": () => (/* binding */ CompanycamCredentialService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 9649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5480);
var _CompanycamCredentialService_apiKey;


class CompanycamCredentialService {
    constructor() {
        _CompanycamCredentialService_apiKey.set(this, localStorage.getItem('companycam/apiKey'));
    }
    get apiKey() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__classPrivateFieldGet)(this, _CompanycamCredentialService_apiKey, "f") || '';
    }
    set apiKey(value) {
        (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__classPrivateFieldSet)(this, _CompanycamCredentialService_apiKey, value, "f");
        localStorage.setItem('companycam/apiKey', value);
    }
}
_CompanycamCredentialService_apiKey = new WeakMap();
CompanycamCredentialService.ɵfac = function CompanycamCredentialService_Factory(t) { return new (t || CompanycamCredentialService)(); };
CompanycamCredentialService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CompanycamCredentialService, factory: CompanycamCredentialService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6903:
/*!******************************************************!*\
  !*** ./src/app/companycam/companycam.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanycamInterceptor": () => (/* binding */ CompanycamInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _companycam_credential_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companycam-credential.service */ 1526);


class CompanycamInterceptor {
    constructor(companycamCredentialService) {
        this.companycamCredentialService = companycamCredentialService;
    }
    intercept(req, next) {
        if (!req.url.startsWith('https://api.companycam.com')) {
            return next.handle(req);
        }
        const { apiKey } = this.companycamCredentialService;
        let headers = req.headers;
        if (apiKey) {
            headers = headers.set('Authorization', 'Bearer ' + apiKey);
        }
        const newReq = req.clone({ headers });
        return next.handle(newReq);
    }
}
CompanycamInterceptor.ɵfac = function CompanycamInterceptor_Factory(t) { return new (t || CompanycamInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_companycam_credential_service__WEBPACK_IMPORTED_MODULE_0__.CompanycamCredentialService)); };
CompanycamInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CompanycamInterceptor, factory: CompanycamInterceptor.ɵfac });


/***/ }),

/***/ 2218:
/*!*************************************************!*\
  !*** ./src/app/companycam/companycam.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanycamModule": () => (/* binding */ CompanycamModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 5190);
/* harmony import */ var _companycam_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companycam.interceptor */ 6903);
/* harmony import */ var _companycam_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./companycam.service */ 7173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5480);





class CompanycamModule {
}
CompanycamModule.ɵfac = function CompanycamModule_Factory(t) { return new (t || CompanycamModule)(); };
CompanycamModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CompanycamModule });
CompanycamModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        _companycam_service__WEBPACK_IMPORTED_MODULE_1__.CompanycamService,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
            multi: true,
            useClass: _companycam_interceptor__WEBPACK_IMPORTED_MODULE_0__.CompanycamInterceptor,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CompanycamModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule] }); })();


/***/ }),

/***/ 7173:
/*!**************************************************!*\
  !*** ./src/app/companycam/companycam.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanycamService": () => (/* binding */ CompanycamService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 5190);


class CompanycamService {
    constructor(http) {
        this.http = http;
    }
    test(apiKey) {
        return this.http.get('https://api.companycam.com/v2/users/current', {
            headers: {
                Authorization: 'Bearer ' + apiKey,
            },
        });
    }
    getProjects(query) {
        return this.http.get('https://api.companycam.com/v2/projects', {
            params: query ? { query } : {},
        });
    }
    getPhotos(project) {
        return this.http.get(`https://api.companycam.com/v2/projects/${project}/photos`);
    }
}
CompanycamService.ɵfac = function CompanycamService_Factory(t) { return new (t || CompanycamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CompanycamService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanycamService, factory: CompanycamService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=common.js.map