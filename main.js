"use strict";
(self["webpackChunkconserve"] = self["webpackChunkconserve"] || []).push([["main"],{

/***/ 6130:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4583);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5480);




const routes = [
    { path: 'settings', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 9958)).then(m => m.SettingsModule) },
    { path: 'audits', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_audits_audits_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./audits/audits.module */ 4678)).then(m => m.AuditsModule) },
    { path: '', pathMatch: 'full', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
                paramsInheritanceStrategy: 'always',
            })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8484:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ 9708);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 1385);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4583);
/* harmony import */ var ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-bootstrap-ext */ 6640);





class AppComponent {
    constructor(updates) {
        this.updates = updates;
        this.title = 'conserve';
    }
    ngOnInit() {
        this.updates.available.subscribe(() => {
            if (confirm('A new app update is available. Do you want to install it? This will only take a second or two.')) {
                this.updates.activateUpdate().then(() => document.location.reload());
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__.SwUpdate)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "h-100", "d-flex", "flex-column"], [1, "flex-grow-1", "overflow-auto"], ["top", "4rem"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ngbx-toast-list", 2);
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_4__.ToastListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4958:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 5190);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 8840);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ 9708);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9628);
/* harmony import */ var ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-bootstrap-ext */ 6640);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 6893);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 6130);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 8484);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 1385);
/* harmony import */ var _parse_parse_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parse/parse.module */ 4952);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ 348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 5480);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbCollapseModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _parse_parse_module__WEBPACK_IMPORTED_MODULE_4__.ParseModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000',
            }),
            ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_11__.ToastModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__.NavBarComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbCollapseModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _parse_parse_module__WEBPACK_IMPORTED_MODULE_4__.ParseModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule, ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_11__.ToastModule] }); })();


/***/ }),

/***/ 348:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _parse_parse_credential_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parse/parse-credential.service */ 9854);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4583);




function HomeComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_a_7_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const profile_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.setActiveProfile(profile_r1.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const profile_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](profile_r1.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", profile_r1.value.url, " ");
} }
class HomeComponent {
    constructor(parseCredentialService) {
        this.parseCredentialService = parseCredentialService;
        this.profiles = parseCredentialService.getProfiles();
    }
    ngOnInit() {
    }
    setActiveProfile(id) {
        this.parseCredentialService.activeProfile = id;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_parse_parse_credential_service__WEBPACK_IMPORTED_MODULE_0__.ParseCredentialService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 3, consts: [[1, "container", "h-100", "d-flex", "align-items-center", "justify-content-center"], [1, "text-center"], [1, "list-group", "mb-3"], ["class", "list-group-item list-group-item-action", "routerLink", "audits", 3, "click", 4, "ngFor", "ngForOf"], ["routerLink", "settings"], ["routerLink", "audits", 1, "list-group-item", "list-group-item-action", 3, "click"], [1, "text-muted"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Welcome to Conserve!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Select a Profile to work with:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomeComponent_a_7_Template, 5, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Edit Profiles in Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 1, ctx.profiles));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1385:
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _parse_parse_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parse/parse.service */ 9999);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9628);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4583);





function NavBarComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r0.config.brand.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.config.brand.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r0.config.brand.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.config.brand.name, " ");
} }
const _c0 = function () { return { exact: true }; };
class NavBarComponent {
    constructor(parseService) {
        this.parseService = parseService;
        this.menuCollapsed = true;
    }
    ngOnInit() {
        this.subscription = this.parseService.getConfig$().subscribe(config => {
            this.config = config;
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_parse_parse_service__WEBPACK_IMPORTED_MODULE_0__.ParseService)); };
NavBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 20, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container-fluid"], ["class", "navbar-brand", 3, "href", 4, "ngIf"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "me-auto"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/", 1, "nav-link"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/audits", 1, "nav-link"], ["routerLink", "/settings", 1, "nav-link"], [1, "navbar-nav"], [1, "nav-item"], ["href", "https://github.com/Clashsoft/conserve.clashsoft.de", 1, "nav-link"], [1, "bi-github"], [1, "navbar-brand", 3, "href"], ["height", "32", 3, "src", "alt"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NavBarComponent_a_2_Template, 3, 4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_3_listener() { return ctx.menuCollapsed = !ctx.menuCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u2630 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "ul", 5)(7, "li", 6)(8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8)(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Audits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8)(14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 11)(17, "li", 12)(18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.config && ctx.config.brand);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.menuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCollapse, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9854:
/*!***************************************************!*\
  !*** ./src/app/parse/parse-credential.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParseCredentialService": () => (/* binding */ ParseCredentialService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 9649);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5480);
var _ParseCredentialService_activeProfile, _ParseCredentialService_credentials;




const KEY_PREFIX = 'parse/profiles/';
class ParseCredentialService {
    constructor() {
        _ParseCredentialService_activeProfile.set(this, void 0);
        _ParseCredentialService_credentials.set(this, new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined));
        let legacyProfile = undefined;
        for (const property of ['url', 'appId', 'masterKey', 'sessionToken']) {
            const key = 'parse/' + property;
            const value = localStorage.getItem(key);
            if (value) {
                legacyProfile !== null && legacyProfile !== void 0 ? legacyProfile : (legacyProfile = { url: '', appId: '' });
                legacyProfile[property] = value;
                localStorage.removeItem(key);
            }
        }
        if (legacyProfile) {
            this.saveProfile('legacy', legacyProfile);
            this.activeProfile = 'legacy';
        }
        else {
            const activeId = localStorage.getItem('parse/profile');
            if (activeId) {
                (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldSet)(this, _ParseCredentialService_activeProfile, activeId, "f");
                const activeCredentials = this.getProfile(activeId);
                if (activeCredentials) {
                    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(this, _ParseCredentialService_credentials, "f").next(activeCredentials);
                }
            }
        }
    }
    get activeProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(this, _ParseCredentialService_activeProfile, "f");
    }
    set activeProfile(id) {
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldSet)(this, _ParseCredentialService_activeProfile, id, "f");
        if (id) {
            localStorage.setItem('parse/profile', id);
            (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(this, _ParseCredentialService_credentials, "f").next(this.getProfile(id));
        }
        else {
            localStorage.removeItem('parse/profile');
            (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(this, _ParseCredentialService_credentials, "f").next(undefined);
        }
    }
    getProfile(id) {
        let value = localStorage.getItem(KEY_PREFIX + id);
        return value ? JSON.parse(value) : undefined;
    }
    getProfiles() {
        const profiles = new Map();
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (!key || !key.startsWith(KEY_PREFIX)) {
                continue;
            }
            const id = key.substring(KEY_PREFIX.length);
            const value = localStorage.getItem(key);
            if (!value) {
                continue;
            }
            const profile = JSON.parse(value);
            profiles.set(id, profile);
        }
        return profiles;
    }
    saveProfile(id, credentials) {
        if (id === this.activeProfile) {
            (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(this, _ParseCredentialService_credentials, "f").next(credentials);
        }
        localStorage.setItem(KEY_PREFIX + id, JSON.stringify(credentials));
    }
    deleteProfile(id) {
        localStorage.removeItem(KEY_PREFIX + id);
    }
    get credentials() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(this, _ParseCredentialService_credentials, "f").value;
    }
    get credentials$() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(this, _ParseCredentialService_credentials, "f");
    }
    get appId() {
        var _a;
        return ((_a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(this, _ParseCredentialService_credentials, "f").value) === null || _a === void 0 ? void 0 : _a.appId) || '';
    }
    get masterKey() {
        var _a;
        return ((_a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(this, _ParseCredentialService_credentials, "f").value) === null || _a === void 0 ? void 0 : _a.masterKey) || '';
    }
    get sessionToken() {
        var _a;
        return ((_a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(this, _ParseCredentialService_credentials, "f").value) === null || _a === void 0 ? void 0 : _a.sessionToken) || '';
    }
    get url() {
        var _a;
        return ((_a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(this, _ParseCredentialService_credentials, "f").value) === null || _a === void 0 ? void 0 : _a.url) || '';
    }
    get url$() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(this, _ParseCredentialService_credentials, "f").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(p => (p === null || p === void 0 ? void 0 : p.url) || ''));
    }
}
_ParseCredentialService_activeProfile = new WeakMap(), _ParseCredentialService_credentials = new WeakMap();
ParseCredentialService.ɵfac = function ParseCredentialService_Factory(t) { return new (t || ParseCredentialService)(); };
ParseCredentialService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ParseCredentialService, factory: ParseCredentialService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6683:
/*!********************************************!*\
  !*** ./src/app/parse/parse.interceptor.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParseInterceptor": () => (/* binding */ ParseInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _parse_credential_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-credential.service */ 9854);


class ParseInterceptor {
    constructor(parseCredentialService) {
        this.parseCredentialService = parseCredentialService;
    }
    buildHeaders(headers, credentials) {
        const { appId, masterKey, sessionToken } = credentials;
        if (appId && !headers.has('X-Parse-Application-Id')) {
            headers = headers.set('X-Parse-Application-Id', appId);
        }
        if (masterKey && !headers.has('X-Parse-Master-Key')) {
            headers = headers.set('X-Parse-Master-Key', masterKey);
        }
        if (sessionToken && !headers.has('X-Parse-Session-Token')) {
            headers = headers.set('X-Parse-Session-Token', sessionToken);
        }
        return headers;
    }
    intercept(req, next) {
        const credentials = this.parseCredentialService.credentials;
        if (!credentials) {
            return next.handle(req);
        }
        const { url } = credentials;
        if (!req.url.startsWith(url)) {
            return next.handle(req);
        }
        const headers = this.buildHeaders(req.headers, credentials);
        const newReq = req.clone({ headers });
        return next.handle(newReq);
    }
}
ParseInterceptor.ɵfac = function ParseInterceptor_Factory(t) { return new (t || ParseInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_parse_credential_service__WEBPACK_IMPORTED_MODULE_0__.ParseCredentialService)); };
ParseInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ParseInterceptor, factory: ParseInterceptor.ɵfac });


/***/ }),

/***/ 4952:
/*!***************************************!*\
  !*** ./src/app/parse/parse.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParseModule": () => (/* binding */ ParseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 5190);
/* harmony import */ var _parse_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse.interceptor */ 6683);
/* harmony import */ var _parse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.service */ 9999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5480);





class ParseModule {
}
ParseModule.ɵfac = function ParseModule_Factory(t) { return new (t || ParseModule)(); };
ParseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ParseModule });
ParseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        _parse_interceptor__WEBPACK_IMPORTED_MODULE_0__.ParseInterceptor,
        _parse_service__WEBPACK_IMPORTED_MODULE_1__.ParseService,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
            multi: true,
            useClass: _parse_interceptor__WEBPACK_IMPORTED_MODULE_0__.ParseInterceptor,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ParseModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule] }); })();


/***/ }),

/***/ 9999:
/*!****************************************!*\
  !*** ./src/app/parse/parse.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParseService": () => (/* binding */ ParseService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 5190);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2912);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _parse_credential_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-credential.service */ 9854);
/* harmony import */ var _parse_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.interceptor */ 6683);







class ParseService {
    constructor(http, parseCredentialService, parseInterceptor) {
        this.http = http;
        this.parseCredentialService = parseCredentialService;
        this.parseInterceptor = parseInterceptor;
    }
    get url() {
        return this.parseCredentialService.url;
    }
    getOptions(credentials) {
        if (!credentials) {
            return {};
        }
        const headers = this.parseInterceptor.buildHeaders(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders(), credentials);
        return { headers };
    }
    getConfig(credentials = this.parseCredentialService.credentials) {
        if (!credentials) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)('Invalid credentials');
        }
        return this.http.get(`${credentials.url}/config`, this.getOptions(credentials)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(t => t.params));
    }
    getConfig$() {
        return this.parseCredentialService.credentials$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(credentials => this.getConfig(credentials)));
    }
    login(username, password, credentials = this.parseCredentialService.credentials) {
        return this.http.get(`${credentials === null || credentials === void 0 ? void 0 : credentials.url}/login`, Object.assign(Object.assign({}, this.getOptions(credentials)), { params: {
                username,
                password,
            } }));
    }
    getCurrentUser(credentials = this.parseCredentialService.credentials) {
        return this.http.get(`${credentials === null || credentials === void 0 ? void 0 : credentials.url}/users/me`, this.getOptions(credentials));
    }
    logout(credentials = this.parseCredentialService.credentials) {
        return this.http.post(`${credentials === null || credentials === void 0 ? void 0 : credentials.url}/logout`, {}, this.getOptions(credentials));
    }
    getUsers() {
        return this.http.get(`${this.url}/users`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({ results }) => results));
    }
    findAll(className, where, options = {}) {
        const params = {};
        where && (params.where = JSON.stringify(where));
        options.keys && (params.keys = options.keys.join(','));
        options.limit && (params.limit = options.limit.toString());
        options.order && (params.order = options.order.join(','));
        return this.http.get(`${this.url}/classes/${className}`, { params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(r => r.results));
    }
    create(className, object) {
        return this.http.post(`${this.url}/classes/${className}`, object).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => (Object.assign(Object.assign(Object.assign({}, object), result), { updatedAt: result.createdAt }))));
    }
    update(className, objectId, object) {
        return this.http.put(`${this.url}/classes/${className}/${objectId}`, object);
    }
    updateAll(className, filter, object) {
        return this.findAll(className, filter, { keys: ['objectId'] }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(objects => {
            const requests = objects.map(obj => ({
                method: 'PUT',
                path: `/parse/classes/${className}/${obj.objectId}`,
                body: object,
            }));
            return this.batch(requests);
        }));
    }
    delete(className, objectId) {
        return this.http.delete(`${this.url}/classes/${className}/${objectId}`);
    }
    deleteAll(className, filter) {
        return this.findAll(className, filter, { keys: ['objectId'] }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(objects => {
            const requests = objects.map(obj => ({
                method: 'DELETE',
                path: `/parse/classes/${className}/${obj.objectId}`,
            }));
            return this.batch(requests);
        }));
    }
    batch(requests) {
        return this.http.post(`${this.url}/batch`, { requests });
    }
}
ParseService.ɵfac = function ParseService_Factory(t) { return new (t || ParseService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_parse_credential_service__WEBPACK_IMPORTED_MODULE_0__.ParseCredentialService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_parse_interceptor__WEBPACK_IMPORTED_MODULE_1__.ParseInterceptor)); };
ParseService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: ParseService, factory: ParseService.ɵfac });


/***/ }),

/***/ 6893:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 1506:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 8840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4958);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 6893);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1506)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map