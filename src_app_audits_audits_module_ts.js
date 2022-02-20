"use strict";
(self["webpackChunkconserve"] = self["webpackChunkconserve"] || []).push([["src_app_audits_audits_module_ts"],{

/***/ 7262:
/*!*******************************************************************!*\
  !*** ./src/app/audits/access-control/access-control.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessControlComponent": () => (/* binding */ AccessControlComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 9649);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3624);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9715);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _feature_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../feature.service */ 6355);
/* harmony import */ var _audit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audit.service */ 2205);
/* harmony import */ var _parse_parse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../parse/parse.service */ 9999);
/* harmony import */ var ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-bootstrap-ext */ 6640);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 6564);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9628);











function AccessControlComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td")(4, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AccessControlComponent_tr_12_Template_input_ngModelChange_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const entry_r4 = restoredCtx.$implicit; return entry_r4.read = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td")(6, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AccessControlComponent_tr_12_Template_input_ngModelChange_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const entry_r4 = restoredCtx.$implicit; return entry_r4.write = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td")(8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccessControlComponent_tr_12_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const index_r5 = restoredCtx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.delete(index_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.userIdToName[entry_r4.key] || entry_r4.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", entry_r4.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", entry_r4.write);
} }
class AccessControlComponent {
    constructor(featureService, auditService, parseService, toastService) {
        this.featureService = featureService;
        this.auditService = auditService;
        this.parseService = parseService;
        this.toastService = toastService;
        this.acl = [];
        this.userIdToName = {};
        this.userNameToId = {};
        this.typeahead = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(term => {
            if (term.length < 2) {
                return [];
            }
            const lowerTerm = term.toLowerCase();
            return Object.keys(this.userNameToId).filter(v => v.toLowerCase().includes(lowerTerm)).slice(0, 10);
        }));
    }
    ngOnInit() {
        this.parseService.getCurrentUser().subscribe(user => this.user = user);
        this.parseService.getUsers().subscribe(users => {
            for (let user of users) {
                this.userIdToName[user.objectId] = user.username;
                this.userNameToId[user.username] = user.objectId;
            }
        });
    }
    ngOnChanges(changes) {
        var _a;
        if (changes.audit) {
            this.acl = Object.entries((_a = this.audit.ACL) !== null && _a !== void 0 ? _a : { '*': { read: true, write: true } })
                .map(([key, rest]) => (Object.assign({ key }, rest)))
                .sort(({ key: k1 }, { key: k2 }) => k1.localeCompare(k2));
        }
    }
    delete(index) {
        this.acl.splice(index, 1);
    }
    add(key, read, write) {
        key = this.userNameToId[key] || key;
        this.acl.push({ key, read, write });
    }
    save() {
        var _a, _b;
        const ACL = {};
        for (let _c of this.acl) {
            const { key } = _c, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__rest)(_c, ["key"]);
            ACL[key] = rest;
        }
        // prevent current user from removing their own write access
        if (this.user && !(((_a = ACL[this.user.objectId]) === null || _a === void 0 ? void 0 : _a.write) || ((_b = ACL['*']) === null || _b === void 0 ? void 0 : _b.write)) && !confirm('The current settings would remove your write access. Are you sure you want to save?')) {
            return;
        }
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([
            this.auditService.update(this.audit, { ACL }, a => {
                a.ACL = ACL;
                return a;
            }),
            this.featureService.updateAll({ auditId: this.audit.auditId }, { ACL }),
        ]).subscribe(() => {
            this.toastService.success('Access Control', 'Successfully saved access control');
        }, error => {
            this.toastService.error('Access Control', 'Failed to update access control', error);
        });
    }
}
AccessControlComponent.ɵfac = function AccessControlComponent_Factory(t) { return new (t || AccessControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_feature_service__WEBPACK_IMPORTED_MODULE_0__.FeatureService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_audit_service__WEBPACK_IMPORTED_MODULE_1__.AuditService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_parse_parse_service__WEBPACK_IMPORTED_MODULE_2__.ParseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_9__.ToastService)); };
AccessControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AccessControlComponent, selectors: [["app-access-control"]], inputs: { audit: "audit" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 29, vars: 2, consts: [[1, "table", "table-sm", "table-striped"], [4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "User Name or ID or role:Rolename or *", 1, "form-control", 3, "ngbTypeahead"], ["keyInput", ""], ["type", "checkbox", 1, "form-check-input"], ["readCheck", ""], ["writeCheck", ""], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "bi-plus-circle"], [1, "btn", "btn-primary", 3, "click"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "bi-trash"]], template: function AccessControlComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "User or Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Can Read?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Can Write?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AccessControlComponent_tr_12_Template, 10, 3, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tfoot")(14, "tr")(15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 4, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td")(25, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccessControlComponent_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23); return ctx.add(_r1.value, _r2.checked, _r3.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccessControlComponent_Template_button_click_27_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Save\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.acl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbTypeahead", ctx.typeahead);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTypeahead], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Nlc3MtY29udHJvbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2205:
/*!*****************************************!*\
  !*** ./src/app/audits/audit.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuditService": () => (/* binding */ AuditService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 9649);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4123);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2912);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7319);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _offline_audit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offline-audit.service */ 113);
/* harmony import */ var _parse_audit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse-audit.service */ 3336);






class AuditService {
    constructor(offlineAuditService, parseAuditService) {
        this.offlineAuditService = offlineAuditService;
        this.parseAuditService = parseAuditService;
    }
    findAll(filter = {}) {
        const offlineAudits = this.offlineAuditService.findAll(filter);
        return this.parseAuditService.findAll(filter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(parseAudits => this.mergeAll([...parseAudits, ...offlineAudits])));
    }
    findOne(auditId) {
        const offlineAudit = this.offlineAuditService.findOne(auditId);
        return this.parseAuditService.findAll({ auditId }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(parseAudits => this.mergeAll(offlineAudit ? [...parseAudits, offlineAudit] : parseAudits)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(audits => audits[0]));
    }
    mergeAll(audits) {
        if (audits.length <= 1) {
            return audits;
        }
        const auditIds = new Map();
        for (const audit of audits) {
            const auditId = audit.auditId;
            const existing = auditIds.get(auditId);
            if (!existing) {
                auditIds.set(auditId, audit);
                continue;
            }
            let merged;
            // in case of conflict, prefer newest
            if (existing.updatedAt <= audit.updatedAt) {
                merged = this.merge(existing, audit);
            }
            else {
                merged = this.merge(audit, existing);
            }
            auditIds.set(auditId, merged);
        }
        return [...auditIds.values()];
    }
    merge(a1, a2) {
        return Object.assign(Object.assign(Object.assign({}, a1), a2), { type: Object.assign(Object.assign({}, a1.type), a2.type), zone: Object.assign(Object.assign({}, a1.zone), a2.zone) });
    }
    create(dto) {
        return this.parseAuditService.create(dto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.offlineAuditService.create(dto));
        }));
    }
    update(audit, delta, apply) {
        const offline = this.offlineAuditService.update(audit, delta, apply);
        if (offline) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(offline);
        }
        return this.parseAuditService.update(audit.objectId, delta).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mapTo)(audit), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(apply));
    }
    upload(audit) {
        if (audit.objectId.startsWith('local.')) {
            const { objectId, updatedAt, createdAt, pendingChanges } = audit, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__rest)(audit, ["objectId", "updatedAt", "createdAt", "pendingChanges"]);
            return this.parseAuditService.createFromLocal(rest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(created => this.offlineAuditService.save(created)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mapTo)(undefined));
        }
        const deltas = this.offlineAuditService.getDeltas(audit.auditId);
        return this.parseAuditService.updateMany(audit.objectId, deltas).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.offlineAuditService.deleteDeltas(audit)));
    }
    delete(audit) {
        // FIXME delete does not work in offline mode
        return this.parseAuditService.delete(audit);
    }
}
AuditService.ɵfac = function AuditService_Factory(t) { return new (t || AuditService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_offline_audit_service__WEBPACK_IMPORTED_MODULE_0__.OfflineAuditService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_parse_audit_service__WEBPACK_IMPORTED_MODULE_1__.ParseAuditService)); };
AuditService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: AuditService, factory: AuditService.ɵfac });


/***/ }),

/***/ 5417:
/*!*************************************************!*\
  !*** ./src/app/audits/audit/audit.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuditComponent": () => (/* binding */ AuditComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3624);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _audit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../audit.service */ 2205);
/* harmony import */ var _feature_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feature.service */ 6355);
/* harmony import */ var ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-bootstrap-ext */ 6640);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 4583);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9628);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _forms_form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/form/form.component */ 1528);
/* harmony import */ var _zone_list_zone_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zone-list/zone-list.component */ 3300);
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../photos/photos.component */ 8340);
/* harmony import */ var _access_control_access_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../access-control/access-control.component */ 7262);













const _c0 = ["form"];
function AuditComponent_ng_template_9_app_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-form", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("saved", function AuditComponent_ng_template_9_app_form_1_Template_app_form_saved_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r7.save($event[0], $event[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r5.data);
} }
function AuditComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AuditComponent_ng_template_9_app_form_1_Template, 2, 1, "app-form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.selectedAudit);
} }
function AuditComponent_ng_template_13_app_zone_list_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-zone-list", 15);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("audit", ctx_r9.selectedAudit);
} }
function AuditComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AuditComponent_ng_template_13_app_zone_list_0_Template, 1, 1, "app-zone-list", 14);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.selectedAudit);
} }
function AuditComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-photos");
} }
function AuditComponent_ng_template_21_app_access_control_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-access-control", 17);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("audit", ctx_r10.selectedAudit);
} }
function AuditComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AuditComponent_ng_template_21_app_access_control_0_Template, 1, 1, "app-access-control", 16);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.selectedAudit);
} }
class AuditComponent {
    constructor(auditService, featureService, toastService, route) {
        this.auditService = auditService;
        this.featureService = featureService;
        this.toastService = toastService;
        this.route = route;
        this.data = {};
        this.activeTab = 'preaudit';
    }
    ngOnInit() {
        this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(({ aid }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([
            this.auditService.findOne(aid),
            this.featureService.findAll({ auditId: aid, belongsTo: 'preaudit' }),
        ]))).subscribe(([audit, features]) => {
            this.selectedAudit = audit;
            this.feature = features[0];
            this.data = features[0] ? this.featureService.feature2Data(features[0]) : {};
        });
    }
    isSaved() {
        var _a;
        return !((_a = this.form) === null || _a === void 0 ? void 0 : _a.dirty);
    }
    save(schema, data) {
        if (!this.selectedAudit) {
            return;
        }
        let op;
        if (this.feature) {
            const update = this.featureService.data2Feature(schema, data);
            op = this.featureService.update(this.feature, update);
        }
        else {
            const feature = this.featureService.data2Feature(schema, data);
            const { auditId, ACL } = this.selectedAudit;
            op = this.featureService.create(Object.assign({ auditId, belongsTo: 'preaudit', mod: new Date().valueOf().toString(), zoneId: null, typeId: null, usn: 0, ACL }, feature));
        }
        op.subscribe(feature => {
            this.feature = feature;
            this.toastService.success('Form', 'Successfully saved form input');
        }, error => {
            this.toastService.error('Form', 'Failed to save form input', error);
        });
    }
}
AuditComponent.ɵfac = function AuditComponent_Factory(t) { return new (t || AuditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_audit_service__WEBPACK_IMPORTED_MODULE_0__.AuditService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_feature_service__WEBPACK_IMPORTED_MODULE_1__.FeatureService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_9__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute)); };
AuditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AuditComponent, selectors: [["app-audit"]], viewQuery: function AuditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, decls: 23, vars: 3, consts: [[1, "container"], ["routerLink", "..", 1, "bi-chevron-left", "d-lg-none"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], ["ngbNavItem", "preaudit"], ["ngbNavLink", ""], ["ngbNavContent", ""], ["ngbNavItem", "zone"], ["ngbNavItem", "photos"], ["ngbNavItem", "access"], [1, "mt-2", 3, "ngbNavOutlet"], ["schemaId", "preaudit", 3, "data", "saved", 4, "ngIf"], ["schemaId", "preaudit", 3, "data", "saved"], ["form", ""], ["routerPrefix", "zones/", 3, "audit", 4, "ngIf"], ["routerPrefix", "zones/", 3, "audit"], [3, "audit", 4, "ngIf"], [3, "audit"]], template: function AuditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ul", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("activeIdChange", function AuditComponent_Template_ul_activeIdChange_4_listener($event) { return ctx.activeTab = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "li", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Preaudit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AuditComponent_ng_template_9_Template, 2, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "li", 7)(11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AuditComponent_ng_template_13_Template, 1, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "li", 8)(15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, AuditComponent_ng_template_17_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "li", 9)(19, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Access Control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, AuditComponent_ng_template_21_Template, 1, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.selectedAudit == null ? null : ctx.selectedAudit.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("activeId", ctx.activeTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavContent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _forms_form_form_component__WEBPACK_IMPORTED_MODULE_2__.FormComponent, _zone_list_zone_list_component__WEBPACK_IMPORTED_MODULE_3__.ZoneListComponent, _photos_photos_component__WEBPACK_IMPORTED_MODULE_4__.PhotosComponent, _access_control_access_control_component__WEBPACK_IMPORTED_MODULE_5__.AccessControlComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdWRpdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1797:
/*!*************************************************!*\
  !*** ./src/app/audits/audits-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuditsRoutingModule": () => (/* binding */ AuditsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4583);
/* harmony import */ var _unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../unsaved-changes.guard */ 6321);
/* harmony import */ var _audit_audit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audit/audit.component */ 5417);
/* harmony import */ var _pre_audit_pre_audit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pre-audit/pre-audit.component */ 982);
/* harmony import */ var _pre_type_pre_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pre-type/pre-type.component */ 2754);
/* harmony import */ var _pre_zone_pre_zone_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pre-zone/pre-zone.component */ 5455);
/* harmony import */ var _type_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type/type.component */ 4003);
/* harmony import */ var _zone_zone_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zone/zone.component */ 189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 5480);










const routes = [
    {
        path: '',
        component: _pre_audit_pre_audit_component__WEBPACK_IMPORTED_MODULE_2__.PreAuditComponent,
        children: [
            { path: ':aid', component: _audit_audit_component__WEBPACK_IMPORTED_MODULE_1__.AuditComponent, canDeactivate: [_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_0__.UnsavedChangesGuard] },
        ],
    },
    {
        path: ':aid/zones',
        component: _pre_zone_pre_zone_component__WEBPACK_IMPORTED_MODULE_4__.PreZoneComponent,
        children: [
            { path: ':zid', component: _zone_zone_component__WEBPACK_IMPORTED_MODULE_6__.ZoneComponent },
        ],
    },
    {
        path: ':aid/zones/:zid/:type',
        component: _pre_type_pre_type_component__WEBPACK_IMPORTED_MODULE_3__.PreTypeComponent,
        children: [
            { path: ':tid', component: _type_type_component__WEBPACK_IMPORTED_MODULE_5__.TypeComponent, canDeactivate: [_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_0__.UnsavedChangesGuard] },
        ],
    },
];
class AuditsRoutingModule {
}
AuditsRoutingModule.ɵfac = function AuditsRoutingModule_Factory(t) { return new (t || AuditsRoutingModule)(); };
AuditsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AuditsRoutingModule });
AuditsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AuditsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 4678:
/*!*****************************************!*\
  !*** ./src/app/audits/audits.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuditsModule": () => (/* binding */ AuditsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 6564);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9628);
/* harmony import */ var _companycam_companycam_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../companycam/companycam.module */ 2218);
/* harmony import */ var _forms_forms_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forms/forms.module */ 9863);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 1996);
/* harmony import */ var _access_control_access_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-control/access-control.component */ 7262);
/* harmony import */ var _audit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audit.service */ 2205);
/* harmony import */ var _audit_audit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audit/audit.component */ 5417);
/* harmony import */ var _audits_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audits-routing.module */ 1797);
/* harmony import */ var _feature_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feature.service */ 6355);
/* harmony import */ var _id_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./id.service */ 4530);
/* harmony import */ var _offline_audit_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./offline-audit.service */ 113);
/* harmony import */ var _offline_feature_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./offline-feature.service */ 1169);
/* harmony import */ var _parse_audit_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parse-audit.service */ 3336);
/* harmony import */ var _parse_feature_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parse-feature.service */ 1072);
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./photos/photos.component */ 8340);
/* harmony import */ var _pre_audit_pre_audit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pre-audit/pre-audit.component */ 982);
/* harmony import */ var _pre_type_pre_type_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pre-type/pre-type.component */ 2754);
/* harmony import */ var _pre_zone_pre_zone_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pre-zone/pre-zone.component */ 5455);
/* harmony import */ var _type_list_type_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./type-list/type-list.component */ 9743);
/* harmony import */ var _type_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./type.service */ 5689);
/* harmony import */ var _type_type_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./type/type.component */ 4003);
/* harmony import */ var _zone_list_zone_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./zone-list/zone-list.component */ 3300);
/* harmony import */ var _zone_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./zone.service */ 5565);
/* harmony import */ var _zone_zone_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./zone/zone.component */ 189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 5480);



























class AuditsModule {
}
AuditsModule.ɵfac = function AuditsModule_Factory(t) { return new (t || AuditsModule)(); };
AuditsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AuditsModule });
AuditsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ providers: [
        _id_service__WEBPACK_IMPORTED_MODULE_8__.IdService,
        _audit_service__WEBPACK_IMPORTED_MODULE_4__.AuditService,
        _offline_audit_service__WEBPACK_IMPORTED_MODULE_9__.OfflineAuditService,
        _parse_audit_service__WEBPACK_IMPORTED_MODULE_11__.ParseAuditService,
        _zone_service__WEBPACK_IMPORTED_MODULE_21__.ZoneService,
        _type_service__WEBPACK_IMPORTED_MODULE_18__.TypeService,
        _feature_service__WEBPACK_IMPORTED_MODULE_7__.FeatureService,
        _offline_feature_service__WEBPACK_IMPORTED_MODULE_10__.OfflineFeatureService,
        _parse_feature_service__WEBPACK_IMPORTED_MODULE_12__.ParseFeatureService,
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdownModule,
            _audits_routing_module__WEBPACK_IMPORTED_MODULE_6__.AuditsRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbTooltipModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
            _forms_forms_module__WEBPACK_IMPORTED_MODULE_1__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbTypeaheadModule,
            _companycam_companycam_module__WEBPACK_IMPORTED_MODULE_0__.CompanycamModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AuditsModule, { declarations: [_pre_audit_pre_audit_component__WEBPACK_IMPORTED_MODULE_14__.PreAuditComponent,
        _zone_zone_component__WEBPACK_IMPORTED_MODULE_22__.ZoneComponent,
        _type_type_component__WEBPACK_IMPORTED_MODULE_19__.TypeComponent,
        _audit_audit_component__WEBPACK_IMPORTED_MODULE_5__.AuditComponent,
        _pre_zone_pre_zone_component__WEBPACK_IMPORTED_MODULE_16__.PreZoneComponent,
        _pre_type_pre_type_component__WEBPACK_IMPORTED_MODULE_15__.PreTypeComponent,
        _zone_list_zone_list_component__WEBPACK_IMPORTED_MODULE_20__.ZoneListComponent,
        _type_list_type_list_component__WEBPACK_IMPORTED_MODULE_17__.TypeListComponent,
        _access_control_access_control_component__WEBPACK_IMPORTED_MODULE_3__.AccessControlComponent,
        _photos_photos_component__WEBPACK_IMPORTED_MODULE_13__.PhotosComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDropdownModule,
        _audits_routing_module__WEBPACK_IMPORTED_MODULE_6__.AuditsRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        _forms_forms_module__WEBPACK_IMPORTED_MODULE_1__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbTypeaheadModule,
        _companycam_companycam_module__WEBPACK_IMPORTED_MODULE_0__.CompanycamModule] }); })();


/***/ }),

/***/ 6355:
/*!*******************************************!*\
  !*** ./src/app/audits/feature.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureService": () => (/* binding */ FeatureService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 9649);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7319);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _parse_parse_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parse/parse.service */ 9999);
/* harmony import */ var _parse_feature_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse-feature.service */ 1072);
/* harmony import */ var _offline_feature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offline-feature.service */ 1169);
/* harmony import */ var _offline_audit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offline-audit.service */ 113);
/* harmony import */ var _id_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./id.service */ 4530);









const RECORD_SEPARATOR = '\u001F';
class FeatureService {
    constructor(parseService, parseFeatureService, offlineFeatureService, offlineAuditService, idService) {
        this.parseService = parseService;
        this.parseFeatureService = parseFeatureService;
        this.offlineFeatureService = offlineFeatureService;
        this.offlineAuditService = offlineAuditService;
        this.idService = idService;
    }
    findAll(filter = {}, keys) {
        const offline = this.offlineFeatureService.findAll(filter);
        if (offline.length) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(offline);
        }
        return this.parseFeatureService.findAll(filter, keys);
    }
    saveAll(filter) {
        this.parseFeatureService.findAll(filter).subscribe(features => {
            for (const feature of features) {
                this.offlineFeatureService.save(feature);
            }
        });
    }
    create(feature) {
        if (this.offlineAuditService.findOne(feature.auditId)) {
            const objectId = this.idService.randomObjectId();
            const timestamp = new Date().toISOString();
            const result = Object.assign({ objectId, createdAt: timestamp, updatedAt: timestamp }, feature);
            this.offlineFeatureService.save(result);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result);
        }
        return this.parseFeatureService.create(feature);
    }
    update(feature, delta) {
        const offline = this.offlineFeatureService.update(feature, delta);
        if (offline) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(offline);
        }
        return this.parseFeatureService.update(feature.objectId, delta).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mapTo)(Object.assign(Object.assign({}, feature), delta)));
    }
    updateAll(filter, update) {
        const offline = this.offlineFeatureService.findAll(filter);
        if (offline.length) {
            for (let feature of offline) {
                this.offlineFeatureService.update(feature, update);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
        }
        return this.parseFeatureService.updateAll(filter, update);
    }
    upload(filter) {
        const features = this.offlineFeatureService.findAll(filter);
        return this.parseService.batch(features.map(f => {
            const { objectId, createdAt, updatedAt } = f, body = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__rest)(f, ["objectId", "createdAt", "updatedAt"]);
            if (objectId.startsWith('local.')) {
                return {
                    path: '/parse/classes/rFeature',
                    method: 'POST',
                    body,
                };
            }
            else {
                return {
                    path: `/parse/classes/rFeature/${objectId}`,
                    method: 'PUT',
                    body,
                };
            }
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(results => {
            for (let i = 0; i < results.length; i++) {
                const result = results[i];
                const feature = features[i];
                if ('error' in result) {
                    continue;
                }
                const success = result.success;
                if ('objectId' in success) {
                    feature.objectId = success.objectId;
                }
                if ('createdAt' in success) {
                    feature.createdAt = success.createdAt;
                }
                if ('updatedAt' in success) {
                    feature.updatedAt = success.updatedAt;
                }
                this.offlineFeatureService.save(feature);
            }
            return undefined;
        }));
    }
    delete(feature) {
        // FIXME delete does not work in offline mode
        return this.parseFeatureService.delete(feature.objectId);
    }
    deleteAll(filter = {}) {
        // FIXME deleteAll does not work in offline mode
        return this.parseFeatureService.deleteAll(filter);
    }
    feature2Data(feature) {
        const data = {};
        const formIds = feature.formId.split(RECORD_SEPARATOR);
        const values = feature.values.split(RECORD_SEPARATOR);
        const length = Math.min(formIds.length, values.length);
        for (let i = 0; i < length; i++) {
            data[formIds[i]] = values[i];
        }
        return data;
    }
    data2Feature(schema, data) {
        const entries = Object.entries(data);
        const keys = entries.map(([key]) => key);
        const elements = keys.map(k => this.findElement(schema, k));
        return {
            dataType: elements.map(e => { var _a; return (_a = e === null || e === void 0 ? void 0 : e.dataType) !== null && _a !== void 0 ? _a : ''; }).join(RECORD_SEPARATOR),
            fields: elements.map(e => { var _a; return (_a = e === null || e === void 0 ? void 0 : e.param) !== null && _a !== void 0 ? _a : ''; }).join(RECORD_SEPARATOR),
            formId: keys.join(RECORD_SEPARATOR),
            values: entries.map(e => e[1]).join(RECORD_SEPARATOR),
        };
    }
    findElement(schema, id) {
        for (let section of schema.geminiForm) {
            for (let element of section.elements) {
                if (element.id === id) {
                    return element;
                }
            }
        }
        return undefined;
    }
}
FeatureService.ɵfac = function FeatureService_Factory(t) { return new (t || FeatureService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_parse_parse_service__WEBPACK_IMPORTED_MODULE_0__.ParseService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_parse_feature_service__WEBPACK_IMPORTED_MODULE_1__.ParseFeatureService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_offline_feature_service__WEBPACK_IMPORTED_MODULE_2__.OfflineFeatureService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_offline_audit_service__WEBPACK_IMPORTED_MODULE_3__.OfflineAuditService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_id_service__WEBPACK_IMPORTED_MODULE_4__.IdService)); };
FeatureService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: FeatureService, factory: FeatureService.ɵfac });


/***/ }),

/***/ 4530:
/*!**************************************!*\
  !*** ./src/app/audits/id.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdService": () => (/* binding */ IdService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5480);

class IdService {
    constructor() {
    }
    randomIdAndMod() {
        const mod = new Date().valueOf();
        const id = (mod / 1000) | 0;
        return { id, mod };
    }
    randomObjectId() {
        return (parseInt('local', 36) + Math.random()).toString(36);
    }
}
IdService.ɵfac = function IdService_Factory(t) { return new (t || IdService)(); };
IdService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdService, factory: IdService.ɵfac });


/***/ }),

/***/ 9342:
/*!***************************************!*\
  !*** ./src/app/audits/model/types.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefrigerationTypes": () => (/* binding */ RefrigerationTypes),
/* harmony export */   "PlugloadApplianceTypes": () => (/* binding */ PlugloadApplianceTypes),
/* harmony export */   "LightingTypes": () => (/* binding */ LightingTypes),
/* harmony export */   "Types": () => (/* binding */ Types)
/* harmony export */ });
const RefrigerationTypes = [
    { id: 'walkin_refrigerator', name: 'Walk-In Refrigerator' },
    { id: 'walkin_freezer', name: 'Walk-In Freezer' },
    { id: 'refrigerator', name: 'Refrigerator' },
    { id: 'freezer', name: 'Freezer' },
    { id: 'walkin_coolbot', name: 'Walk-In Cooler Box' }, // [sic]
];
const PlugloadApplianceTypes = [
    { id: 'combination_oven', name: 'Combination Oven' },
    { id: 'convection_oven', name: 'Convection Oven' },
    { id: 'conveyor_oven', name: 'Conveyor Oven' },
    { id: 'fryer', name: 'Fryer' },
    { id: 'icemaker', name: 'Ice Maker' },
    { id: 'rack_oven', name: 'Rack Oven' },
    { id: 'steam_cooker', name: 'Steam Cooker' },
    { id: 'griddle', name: 'Griddle' },
    { id: 'hot_food_cabinet', name: 'Hot Food Cabinet' },
    { id: 'conveyor_broiler', name: 'Conveyor Broiler' },
    { id: 'dishwasher', name: 'Dish Washer' },
    { id: 'pre_rinse_spray', name: 'Pre Rinse Spray' },
    { id: 'sample_appliance', name: 'Sample Appliance' },
];
const LightingTypes = [
    { id: 'halogen', name: 'Halogen' },
    { id: 'cfl', name: 'CFL' },
    { id: 'linearfluorescent', name: 'Linear Fluorescent' },
    { id: 'incandescent', name: 'Incandescent' },
    { id: 'hpsodium', name: 'High Pressure Sodium' },
    { id: 'lpsodium', name: 'Low Pressure Sodium' },
];
const Types = [
    { id: 'plugload', name: 'Plugload', subTypes: PlugloadApplianceTypes },
    { id: 'hvac', name: 'HVAC' },
    { id: 'hotwater', name: 'WaterHeater' },
    { id: 'refrigeration', name: 'Refrigeration', subTypes: RefrigerationTypes },
    { id: 'lighting', name: 'Lighting', subTypes: LightingTypes },
    { id: 'motors', name: 'Motors' },
    { id: 'others', name: 'Others' },
];


/***/ }),

/***/ 113:
/*!*************************************************!*\
  !*** ./src/app/audits/offline-audit.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfflineAuditService": () => (/* binding */ OfflineAuditService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _id_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id.service */ 4530);


class OfflineAuditService {
    constructor(idService) {
        this.idService = idService;
    }
    findAll(filter) {
        const result = [];
        outer: for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (!key || !key.startsWith('audits/') || key.indexOf('/', 'audits/'.length) >= 0) {
                continue;
            }
            const value = localStorage.getItem(key);
            if (!value) {
                continue;
            }
            const audit = JSON.parse(value);
            if (filter) {
                for (const [filterKey, filterValue] of Object.entries(filter)) {
                    if (audit[filterKey] !== filterValue) {
                        continue outer;
                    }
                }
            }
            result.push(audit);
        }
        return result;
    }
    findOne(auditId) {
        const value = localStorage.getItem(`audits/${auditId}`);
        if (!value) {
            return undefined;
        }
        return JSON.parse(value);
    }
    getDeltas(auditId) {
        const deltas = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (!key) {
                continue;
            }
            const match = new RegExp(`^audits/${auditId}/delta/(\d+)$`).exec(key);
            if (!match) {
                continue;
            }
            const [, timestamp] = match;
            const value = localStorage.getItem(key);
            if (!value) {
                continue;
            }
            deltas[timestamp] = JSON.parse(value);
        }
        return Object.entries(deltas)
            .sort((a, b) => +a[0] - +b[0])
            .map(([, delta]) => delta);
    }
    save(audit) {
        this.deleteDeltas(audit);
        localStorage.setItem(`audits/${audit.auditId}`, JSON.stringify(audit));
    }
    create(dto) {
        const { id, mod } = this.idService.randomIdAndMod();
        const timestamp = new Date().toISOString();
        const audit = Object.assign(Object.assign({}, dto), { objectId: this.idService.randomObjectId(), createdAt: timestamp, updatedAt: timestamp, auditId: id.toString(), mod: mod.toString(), usn: 0, pendingChanges: 1 });
        localStorage.setItem(`audits/${id}`, JSON.stringify(audit));
        return audit;
    }
    update(audit, delta, apply) {
        const key = `audits/${audit.auditId}`;
        const value = localStorage.getItem(key);
        if (!value) {
            // not saved offline
            return undefined;
        }
        const applied = apply ? apply(audit) : audit;
        applied.pendingChanges = (applied.pendingChanges || 0) + (delta ? 1 : 0);
        localStorage.setItem(key, JSON.stringify(applied));
        if (delta && !applied.objectId.startsWith('local.')) {
            const deltaKey = `audits/${applied.auditId}/delta/${+new Date()}`;
            localStorage.setItem(deltaKey, JSON.stringify(delta));
        }
        return applied;
    }
    deleteDeltas(audit) {
        this.deleteWithPrefix(`audits/${audit.auditId}/delta`);
        audit.pendingChanges = 0;
    }
    delete(audit) {
        this.deleteWithPrefix(`audits/${audit.auditId}`);
        delete audit.pendingChanges;
    }
    deleteWithPrefix(prefix) {
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (key && key.startsWith(prefix)) {
                localStorage.removeItem(key);
            }
        }
    }
}
OfflineAuditService.ɵfac = function OfflineAuditService_Factory(t) { return new (t || OfflineAuditService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_id_service__WEBPACK_IMPORTED_MODULE_0__.IdService)); };
OfflineAuditService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OfflineAuditService, factory: OfflineAuditService.ɵfac });


/***/ }),

/***/ 1169:
/*!***************************************************!*\
  !*** ./src/app/audits/offline-feature.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfflineFeatureService": () => (/* binding */ OfflineFeatureService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5480);

class OfflineFeatureService {
    constructor() { }
    findAll(filter) {
        if (filter.auditId && !filter.typeId) {
            const key = `audits/${filter.auditId}/features/preaudit`;
            const value = localStorage.getItem(key);
            return value ? [JSON.parse(value)] : [];
        }
        const pattern = new RegExp(`^audits/${filter.auditId || '\\w+'}/features/${filter.typeId || 'preaudit'}$`);
        const result = [];
        outer: for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (!key || !pattern.test(key)) {
                continue;
            }
            const value = localStorage.getItem(key);
            if (!value) {
                continue;
            }
            const feature = JSON.parse(value);
            for (const [filterKey, filterValue] of Object.entries(filter)) {
                if (feature[filterKey] !== filterValue) {
                    continue outer;
                }
            }
            result.push(feature);
        }
        return result;
    }
    save(feature) {
        const key = this.getKey(feature);
        localStorage.setItem(key, JSON.stringify(feature));
    }
    update(feature, delta) {
        const key = this.getKey(feature);
        if (!localStorage.getItem(key)) {
            return undefined;
        }
        const updated = Object.assign(Object.assign({}, feature), delta);
        localStorage.setItem(key, JSON.stringify(updated));
        return updated;
    }
    getKey(feature) {
        return `audits/${feature.auditId}/features/${feature.typeId || 'preaudit'}`;
    }
}
OfflineFeatureService.ɵfac = function OfflineFeatureService_Factory(t) { return new (t || OfflineFeatureService)(); };
OfflineFeatureService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OfflineFeatureService, factory: OfflineFeatureService.ɵfac });


/***/ }),

/***/ 3336:
/*!***********************************************!*\
  !*** ./src/app/audits/parse-audit.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParseAuditService": () => (/* binding */ ParseAuditService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _id_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id.service */ 4530);
/* harmony import */ var _parse_parse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parse/parse.service */ 9999);




class ParseAuditService {
    constructor(idService, parseService) {
        this.idService = idService;
        this.parseService = parseService;
    }
    findAll(filter = {}) {
        return this.parseService.findAll(`rAudit`, filter);
    }
    create(dto) {
        const { id, mod } = this.idService.randomIdAndMod();
        const audit = Object.assign({ auditId: id.toString(), mod: mod.toString(), usn: 0 }, dto);
        return this.createFromLocal(audit);
    }
    createFromLocal(audit) {
        return this.parseService.create('rAudit', audit);
    }
    update(objectId, audit) {
        return this.parseService.update('rAudit', objectId, audit).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mapTo)(undefined));
    }
    updateMany(objectId, updates) {
        return this.parseService.batch(updates.map(update => ({
            method: 'PUT',
            path: `/classes/rAudit/${objectId}`,
            body: update,
        }))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mapTo)(undefined));
    }
    delete({ objectId }) {
        return this.parseService.delete('rAudit', objectId);
    }
}
ParseAuditService.ɵfac = function ParseAuditService_Factory(t) { return new (t || ParseAuditService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_id_service__WEBPACK_IMPORTED_MODULE_0__.IdService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_parse_parse_service__WEBPACK_IMPORTED_MODULE_1__.ParseService)); };
ParseAuditService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ParseAuditService, factory: ParseAuditService.ɵfac });


/***/ }),

/***/ 1072:
/*!*************************************************!*\
  !*** ./src/app/audits/parse-feature.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParseFeatureService": () => (/* binding */ ParseFeatureService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _parse_parse_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parse/parse.service */ 9999);



class ParseFeatureService {
    constructor(parseService) {
        this.parseService = parseService;
    }
    findAll(filter = {}, keys) {
        return this.parseService.findAll('rFeature', filter, { keys });
    }
    create(feature) {
        return this.parseService.create('rFeature', feature);
    }
    update(objectId, feature) {
        return this.parseService.update('rFeature', objectId, feature).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mapTo)(undefined));
    }
    updateAll(filter, update) {
        return this.parseService.updateAll('rFeature', filter, update);
    }
    delete(objectId) {
        return this.parseService.delete('rFeature', objectId);
    }
    deleteAll(filter = {}) {
        return this.parseService.deleteAll('rFeature', filter);
    }
}
ParseFeatureService.ɵfac = function ParseFeatureService_Factory(t) { return new (t || ParseFeatureService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_parse_parse_service__WEBPACK_IMPORTED_MODULE_0__.ParseService)); };
ParseFeatureService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ParseFeatureService, factory: ParseFeatureService.ɵfac });


/***/ }),

/***/ 8340:
/*!***************************************************!*\
  !*** ./src/app/audits/photos/photos.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotosComponent": () => (/* binding */ PhotosComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4583);
/* harmony import */ var _audit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../audit.service */ 2205);
/* harmony import */ var _companycam_companycam_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../companycam/companycam.service */ 7173);
/* harmony import */ var _companycam_companycam_credential_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../companycam/companycam-credential.service */ 1526);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _shared_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/safe.pipe */ 3539);









function PhotosComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " CompanyCam API Key is not configured. Please create or use an ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "access token");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " and enter it in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, ".\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PhotosComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Could not find project on CompanyCam with the same name as the audit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, ". Please check the spelling and wording and rename the audit, or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "create a project");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " if not yet done.\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.audit == null ? null : ctx_r1.audit.name);
} }
function PhotosComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Capture Photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " View in App ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " View in Browser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 3, "ccam://camera/" + ctx_r2.project.id, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](5, 6, "ccam://projects/" + ctx_r2.project.id, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r2.project.project_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function PhotosComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 13)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Open in App");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Open in Browser");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const photo_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", photo_r4.uris[1].url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", photo_r4.uris[1].url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", photo_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](photo_r4.creator_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 7, photo_r4.captured_at * 1000, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 10, "ccam://photos/" + photo_r4.id, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", photo_r4.photo_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
class PhotosComponent {
    constructor(route, auditService, companycamService, companycamCredentialService) {
        this.route = route;
        this.auditService = auditService;
        this.companycamService = companycamService;
        this.companycamCredentialService = companycamCredentialService;
        this.photos = [];
        this.apiKey = true;
    }
    ngOnInit() {
        if (!this.companycamCredentialService.apiKey) {
            this.apiKey = false;
            return;
        }
        this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ aid }) => this.auditService.findOne(aid)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(audit => this.audit = audit), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(audit => audit ? this.companycamService.getProjects(audit.name) : (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(([project]) => this.project = project), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(([project]) => project ? this.companycamService.getPhotos(project.id) : [])).subscribe(photos => {
            this.photos = photos;
        });
    }
}
PhotosComponent.ɵfac = function PhotosComponent_Factory(t) { return new (t || PhotosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_audit_service__WEBPACK_IMPORTED_MODULE_0__.AuditService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_companycam_companycam_service__WEBPACK_IMPORTED_MODULE_1__.CompanycamService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_companycam_companycam_credential_service__WEBPACK_IMPORTED_MODULE_2__.CompanycamCredentialService)); };
PhotosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PhotosComponent, selectors: [["app-photos"]], decls: 5, vars: 4, consts: [["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "alert", "alert-danger"], ["href", "https://app.companycam.com/access_tokens", "target", "_blank"], ["routerLink", "/settings", "fragment", "companyCamApiKeyInput"], [1, "alert", "alert-warning"], ["href", "https://app.companycam.com/projects/new"], [1, "mb-3"], ["target", "_blank", 1, "btn", "btn-primary", "me-2", 3, "href"], ["target", "_blank", 1, "btn", "btn-secondary", "me-2", 3, "href"], [1, "list-group-item"], ["target", "_blank", 3, "href"], ["height", "128", 1, "float-end", 3, "src", "alt"], [1, "text-muted"], [3, "href"]], template: function PhotosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, PhotosComponent_div_0_Template, 8, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PhotosComponent_div_1_Template, 8, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PhotosComponent_div_2_Template, 9, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PhotosComponent_li_4_Template, 15, 13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.apiKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.apiKey && !ctx.project);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.project);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.photos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_shared_safe_pipe__WEBPACK_IMPORTED_MODULE_3__.SafePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90b3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 982:
/*!*********************************************************!*\
  !*** ./src/app/audits/pre-audit/pre-audit.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreAuditComponent": () => (/* binding */ PreAuditComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _audit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../audit.service */ 2205);
/* harmony import */ var _offline_audit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../offline-audit.service */ 113);
/* harmony import */ var _feature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature.service */ 6355);
/* harmony import */ var _forms_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms/forms.service */ 5182);
/* harmony import */ var ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-bootstrap-ext */ 6640);
/* harmony import */ var _shared_master_detail_master_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/master-detail/master-detail.component */ 4879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 4583);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9628);
/* harmony import */ var _shared_options_dropdown_options_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/options-dropdown/options-dropdown.component */ 6808);












function PreAuditComponent_a_8_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 15);
} }
function PreAuditComponent_a_8_ng_template_8_Template(rf, ctx) { }
function PreAuditComponent_a_8_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PreAuditComponent_a_8_ng_template_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const audit_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r8.download(audit_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Download Offline Copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PreAuditComponent_a_8_ng_template_9_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const audit_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r11.delete(audit_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PreAuditComponent_a_8_ng_template_11_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PreAuditComponent_a_8_ng_template_11_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); const audit_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r15.upload(audit_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PreAuditComponent_a_8_ng_template_11_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PreAuditComponent_a_8_ng_template_11_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const audit_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r18.download(audit_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Discard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PreAuditComponent_a_8_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Pending Changes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PreAuditComponent_a_8_ng_template_11_button_5_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PreAuditComponent_a_8_ng_template_11_button_6_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PreAuditComponent_a_8_ng_template_11_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const audit_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r21.deleteOffline(audit_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Remove Offline Copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const audit_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](audit_r1.pendingChanges);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", audit_r1.pendingChanges);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", audit_r1.pendingChanges);
} }
const _c0 = function (a0) { return [a0]; };
function PreAuditComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, PreAuditComponent_a_8_i_3_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-options-dropdown", 9)(5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PreAuditComponent_a_8_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const audit_r1 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.rename(audit_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Rename");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, PreAuditComponent_a_8_ng_template_8_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, PreAuditComponent_a_8_ng_template_9_Template, 5, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, PreAuditComponent_a_8_ng_template_11_Template, 9, 3, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const audit_r1 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c0, audit_r1.auditId));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", audit_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", audit_r1.pendingChanges !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", audit_r1.auditId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", audit_r1.pendingChanges === undefined)("ngIfThen", _r4)("ngIfElse", _r6);
} }
class PreAuditComponent {
    constructor(auditService, offlineAuditService, featureService, formsService, toastService) {
        this.auditService = auditService;
        this.offlineAuditService = offlineAuditService;
        this.featureService = featureService;
        this.formsService = formsService;
        this.toastService = toastService;
        this.audits = [];
    }
    ngOnInit() {
        this.auditService.findAll().subscribe(audits => {
            this.audits = audits;
        });
    }
    create() {
        const name = prompt('New Audit Name');
        if (!name) {
            return;
        }
        this.auditService.create({
            name,
            type: {},
            zone: {},
        }).subscribe(audit => {
            this.audits.push(audit);
        }, error => {
            this.toastService.error('Audit', 'Failed to create audit', error);
        });
    }
    rename(audit) {
        const name = prompt('Rename Audit', audit.name);
        if (!name) {
            return;
        }
        this.auditService.update(audit, { name }, a => {
            a.name = name;
            return a;
        }).subscribe(undefined, error => {
            this.toastService.error('Audit', 'Failed to rename audit', error);
        });
    }
    delete(audit) {
        if (!confirm(`Are you sure you want to delete '${audit.name}'?`)) {
            return;
        }
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([
            this.auditService.delete(audit),
            this.featureService.deleteAll({ auditId: audit.auditId }),
        ]).subscribe(() => {
            const index1 = this.audits.indexOf(audit);
            if (index1 >= 0) {
                this.audits.splice(index1, 1);
            }
        }, error => {
            this.toastService.error('Audit', 'Failed to delete audit', error);
        });
    }
    download(audit) {
        if (audit.pendingChanges && !confirm(`Are you sure you want to discard ${audit.pendingChanges} pending changes? This cannot be undone.`)) {
            return;
        }
        this.formsService.loadSchemas().subscribe();
        this.offlineAuditService.save(audit);
        this.featureService.saveAll({ auditId: audit.auditId });
    }
    upload(audit) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([
            this.auditService.upload(audit),
            this.featureService.upload({ auditId: audit.auditId }),
        ]).subscribe(undefined, error => {
            this.toastService.error('Audit', 'Failed to upload audit', error);
        });
    }
    deleteOffline(audit) {
        const message = 'Are you sure you want to discard the offline copy' + (audit.pendingChanges
            ? ', including ' + audit.pendingChanges + ' pending changes? This cannot be undone.'
            : '? This can be undone once an internet connection is available.');
        if (!confirm(message)) {
            return;
        }
        this.offlineAuditService.delete(audit);
    }
}
PreAuditComponent.ɵfac = function PreAuditComponent_Factory(t) { return new (t || PreAuditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_audit_service__WEBPACK_IMPORTED_MODULE_0__.AuditService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_offline_audit_service__WEBPACK_IMPORTED_MODULE_1__.OfflineAuditService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_feature_service__WEBPACK_IMPORTED_MODULE_2__.FeatureService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_forms_forms_service__WEBPACK_IMPORTED_MODULE_3__.FormsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_8__.ToastService)); };
PreAuditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PreAuditComponent, selectors: [["app-pre-audit"]], decls: 9, vars: 1, consts: [["breadcrumb", "", "aria-label", "breadcrumb"], [1, "breadcrumb", "p-3", "bg-light", "bg-darkmode-dark"], ["aria-current", "page", 1, "breadcrumb-item", "active"], ["list", "", 1, "list-group", "rounded-0"], [1, "list-group-item", "list-group-item-action", "text-success", 3, "click"], ["class", "list-group-item list-group-item-action d-flex align-items-center", "routerLinkActive", "active text-white", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active text-white", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center", 3, "routerLink"], [1, "flex-grow-1"], ["class", "bi-wifi-off", "ngbTooltip", "Available Offline", 4, "ngIf"], [1, "visible-hover", 3, "id"], ["ngbDropdownItem", "", 3, "click"], [1, "dropdown-divider"], [3, "ngIf", "ngIfThen", "ngIfElse"], ["onlineOptions", ""], ["offlineOptions", ""], ["ngbTooltip", "Available Offline", 1, "bi-wifi-off"], ["ngbDropdownItem", "", 1, "text-danger", 3, "click"], [1, "dropdown-header"], [1, "bi-wifi-off"], [1, "badge", "bg-primary"], ["ngbDropdownItem", "", "class", "text-success", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", "class", "text-danger", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", 1, "text-success", 3, "click"]], template: function PreAuditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-master-detail")(1, "nav", 0)(2, "ol", 1)(3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Audits");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PreAuditComponent_Template_button_click_6_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " New Audit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, PreAuditComponent_a_8_Template, 13, 9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.audits);
    } }, directives: [_shared_master_detail_master_detail_component__WEBPACK_IMPORTED_MODULE_4__.MasterDetailComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTooltip, _shared_options_dropdown_options_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.OptionsDropdownComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownItem], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmUtYXVkaXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2754:
/*!*******************************************************!*\
  !*** ./src/app/audits/pre-type/pre-type.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreTypeComponent": () => (/* binding */ PreTypeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3624);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5522);
/* harmony import */ var _model_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/types */ 9342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4583);
/* harmony import */ var _audit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audit.service */ 2205);
/* harmony import */ var _shared_master_detail_master_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/master-detail/master-detail.component */ 4879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _type_list_type_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type-list/type-list.component */ 9743);









function PreTypeComponent_app_type_list_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-type-list", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("audit", ctx_r0.audit)("zone", ctx_r0.zone)("types", ctx_r0.types)("type", ctx_r0.type);
} }
class PreTypeComponent {
    constructor(route, auditService) {
        this.route = route;
        this.auditService = auditService;
        this.types = [];
    }
    ngOnInit() {
        this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ aid, zid, type }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)([
            this.auditService.findOne(aid),
            (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(zid),
            (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(type),
        ]))).subscribe(([audit, zoneId, typeId]) => {
            this.type = _model_types__WEBPACK_IMPORTED_MODULE_0__.Types.find(t => t.name === typeId);
            this.audit = audit;
            this.zone = audit === null || audit === void 0 ? void 0 : audit.zone[zoneId];
            this.types = audit ? Object.values(audit.type).filter(t => t.type === typeId && t.zoneId == zoneId) : [];
        });
    }
}
PreTypeComponent.ɵfac = function PreTypeComponent_Factory(t) { return new (t || PreTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_audit_service__WEBPACK_IMPORTED_MODULE_1__.AuditService)); };
PreTypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PreTypeComponent, selectors: [["app-pre-type"]], decls: 18, vars: 4, consts: [["breadcrumb", "", "aria-label", "breadcrumb"], [1, "breadcrumb", "p-3", "bg-light", "bg-darkmode-dark"], [1, "breadcrumb-item"], ["routerLink", "../../../.."], ["routerLink", "../../.."], ["routerLink", "../.."], ["routerLink", ".."], ["aria-current", "page", 1, "breadcrumb-item", "active"], ["list", "", 3, "audit", "zone", "types", "type", 4, "ngIf"], ["list", "", 3, "audit", "zone", "types", "type"]], template: function PreTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-master-detail")(1, "nav", 0)(2, "ol", 1)(3, "li", 2)(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Audits");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "li", 2)(7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 2)(10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Zones");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li", 2)(13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, PreTypeComponent_app_type_list_17_Template, 1, 4, "app-type-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.audit == null ? null : ctx.audit.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.zone == null ? null : ctx.zone.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.type == null ? null : ctx.type.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.type && ctx.audit && ctx.zone && ctx.types);
    } }, directives: [_shared_master_detail_master_detail_component__WEBPACK_IMPORTED_MODULE_2__.MasterDetailComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _type_list_type_list_component__WEBPACK_IMPORTED_MODULE_3__.TypeListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmUtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5455:
/*!*******************************************************!*\
  !*** ./src/app/audits/pre-zone/pre-zone.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreZoneComponent": () => (/* binding */ PreZoneComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4583);
/* harmony import */ var _audit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../audit.service */ 2205);
/* harmony import */ var _shared_master_detail_master_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/master-detail/master-detail.component */ 4879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _zone_list_zone_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zone-list/zone-list.component */ 3300);







function PreZoneComponent_app_zone_list_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-zone-list", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("audit", ctx_r0.audit);
} }
class PreZoneComponent {
    constructor(route, auditService) {
        this.route = route;
        this.auditService = auditService;
    }
    ngOnInit() {
        this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(({ aid }) => this.auditService.findOne(aid))).subscribe(audit => {
            this.audit = audit;
        });
    }
}
PreZoneComponent.ɵfac = function PreZoneComponent_Factory(t) { return new (t || PreZoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_audit_service__WEBPACK_IMPORTED_MODULE_0__.AuditService)); };
PreZoneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PreZoneComponent, selectors: [["app-pre-zone"]], decls: 12, vars: 2, consts: [["breadcrumb", "", "aria-label", "breadcrumb"], [1, "breadcrumb", "p-3", "bg-light", "bg-darkmode-dark"], [1, "breadcrumb-item"], ["routerLink", "../.."], ["routerLink", ".."], ["aria-current", "page", 1, "breadcrumb-item", "active"], ["list", "", 3, "audit", 4, "ngIf"], ["list", "", 3, "audit"]], template: function PreZoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-master-detail")(1, "nav", 0)(2, "ol", 1)(3, "li", 2)(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Audits");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 2)(7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Zones");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, PreZoneComponent_app_zone_list_11_Template, 1, 1, "app-zone-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.audit == null ? null : ctx.audit.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.audit);
    } }, directives: [_shared_master_detail_master_detail_component__WEBPACK_IMPORTED_MODULE_1__.MasterDetailComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _zone_list_zone_list_component__WEBPACK_IMPORTED_MODULE_2__.ZoneListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmUtem9uZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9743:
/*!*********************************************************!*\
  !*** ./src/app/audits/type-list/type-list.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeListComponent": () => (/* binding */ TypeListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _audit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../audit.service */ 2205);
/* harmony import */ var _type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type.service */ 5689);
/* harmony import */ var _feature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature.service */ 6355);
/* harmony import */ var ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-bootstrap-ext */ 6640);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4583);
/* harmony import */ var _shared_options_dropdown_options_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/options-dropdown/options-dropdown.component */ 6808);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9628);










function TypeListComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TypeListComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.createType(ctx_r3.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" New ", ctx_r0.type.name, " ");
} }
function TypeListComponent_details_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TypeListComponent_details_2_button_3_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const subType_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r7.createType(ctx_r7.type, subType_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subType_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", subType_r6.name, " ");
} }
function TypeListComponent_details_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "details", 5)(1, "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TypeListComponent_details_2_button_3_Template, 2, 1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.type.subTypes);
} }
function TypeListComponent_a_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TypeListComponent_a_3_ng_container_8_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.delete(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function TypeListComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-options-dropdown", 11)(6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TypeListComponent_a_3_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const item_r9 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.rename(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Rename");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TypeListComponent_a_3_ng_container_8_Template, 4, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, ctx_r2.routerPrefix + item_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r9.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r9.subtype);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.audit.pendingChanges === undefined);
} }
class TypeListComponent {
    constructor(auditService, typeService, featureService, toastService) {
        this.auditService = auditService;
        this.typeService = typeService;
        this.featureService = featureService;
        this.toastService = toastService;
        this.routerPrefix = '';
    }
    createType(type, subType) {
        var _a, _b;
        const typeOrSubType = (_a = subType === null || subType === void 0 ? void 0 : subType.name) !== null && _a !== void 0 ? _a : type.name;
        const name = prompt(`New ${typeOrSubType} Name`);
        if (!name) {
            return;
        }
        this.typeService.create(this.audit, this.zone, {
            type: type.name,
            subtype: (_b = subType === null || subType === void 0 ? void 0 : subType.name) !== null && _b !== void 0 ? _b : null,
            name,
        }).subscribe(type => {
            this.types.push(type);
        }, error => {
            this.toastService.error(typeOrSubType, `Failed to create ${typeOrSubType}`, error);
        });
    }
    rename(type) {
        const name = prompt('Rename Type', type.name);
        if (!name) {
            return;
        }
        this.typeService.update(this.audit, type.id, { name }).subscribe(undefined, error => {
            this.toastService.error('Type', 'Failed to rename type', error);
        });
    }
    delete(type) {
        if (!confirm(`Are you sure you want to delete '${type.name}'?`)) {
            return;
        }
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)([
            this.typeService.delete(this.audit, type.zoneId, type.id),
            this.featureService.deleteAll({ typeId: type.id.toString() }),
        ]).subscribe(() => {
            const index = this.types.indexOf(type);
            if (index >= 0) {
                this.types.splice(index, 1);
            }
        }, error => {
            this.toastService.error('Type', 'Failed to delete type', error);
        });
    }
}
TypeListComponent.ɵfac = function TypeListComponent_Factory(t) { return new (t || TypeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_audit_service__WEBPACK_IMPORTED_MODULE_0__.AuditService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_type_service__WEBPACK_IMPORTED_MODULE_1__.TypeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_feature_service__WEBPACK_IMPORTED_MODULE_2__.FeatureService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_6__.ToastService)); };
TypeListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TypeListComponent, selectors: [["app-type-list"]], inputs: { audit: "audit", zone: "zone", types: "types", type: "type", routerPrefix: "routerPrefix" }, decls: 4, vars: 3, consts: [[1, "list-group", "rounded-0"], ["class", "list-group-item list-group-item-action text-success", 3, "click", 4, "ngIf"], ["class", "list-group-item text-success", 4, "ngIf"], ["class", "list-group-item list-group-item-action d-flex align-items-center", "routerLinkActive", "active text-white", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", "text-success", 3, "click"], [1, "list-group-item", "text-success"], ["class", "btn btn-sm btn-link text-success", 3, "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-link", "text-success", 3, "click"], ["routerLinkActive", "active text-white", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center", 3, "routerLink"], [1, "flex-grow-1"], [1, "text-muted"], [1, "visible-hover"], ["ngbDropdownItem", "", 3, "click"], [4, "ngIf"], [1, "dropdown-divider"], ["ngbDropdownItem", "", 1, "text-danger", 3, "click"]], template: function TypeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TypeListComponent_button_1_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TypeListComponent_details_2_Template, 4, 1, "details", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TypeListComponent_a_3_Template, 9, 6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.type.subTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.type.subTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.types);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _shared_options_dropdown_options_dropdown_component__WEBPACK_IMPORTED_MODULE_3__.OptionsDropdownComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownItem], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5689:
/*!****************************************!*\
  !*** ./src/app/audits/type.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeService": () => (/* binding */ TypeService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _id_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id.service */ 4530);
/* harmony import */ var _audit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audit.service */ 2205);




class TypeService {
    constructor(idService, auditService) {
        this.idService = idService;
        this.auditService = auditService;
    }
    create(audit, zone, dto) {
        const { id, mod } = this.idService.randomIdAndMod();
        const type = Object.assign({ id,
            mod, usn: 0, zoneId: zone.id }, dto);
        return this.auditService.update(audit, {
            [`type.${id}`]: type,
            [`zone.${zone.id}.typeId`]: { __op: 'AddUnique', 'objects': [id] },
        }, audit => {
            audit.type[id] = type;
            zone.typeId.push(id);
            return audit;
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mapTo)(type));
    }
    update(audit, typeId, update) {
        const updateAudit = {};
        for (const [key, value] of Object.entries(update)) {
            updateAudit[`type.${typeId}.${key}`] = value;
        }
        return this.auditService.update(audit, updateAudit, audit => {
            Object.assign(audit.type[typeId], update);
            return audit;
        });
    }
    delete(audit, zoneId, typeId) {
        return this.auditService.update(audit, {
            [`type.${typeId}`]: { __op: 'Delete' },
            [`zone.${zoneId}.typeId`]: { __op: 'Remove', objects: [typeId] },
        }, audit => {
            delete audit.type[typeId];
            const zone = audit.zone[zoneId];
            const index = zone.typeId.indexOf(typeId);
            if (index >= 0) {
                zone.typeId.splice(index, 1);
            }
            return audit;
        });
    }
}
TypeService.ɵfac = function TypeService_Factory(t) { return new (t || TypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_id_service__WEBPACK_IMPORTED_MODULE_0__.IdService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_audit_service__WEBPACK_IMPORTED_MODULE_1__.AuditService)); };
TypeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TypeService, factory: TypeService.ɵfac });


/***/ }),

/***/ 4003:
/*!***********************************************!*\
  !*** ./src/app/audits/type/type.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeComponent": () => (/* binding */ TypeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3624);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5522);
/* harmony import */ var _model_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/types */ 9342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _audit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audit.service */ 2205);
/* harmony import */ var _feature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature.service */ 6355);
/* harmony import */ var ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-bootstrap-ext */ 6640);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 4583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _forms_form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms/form/form.component */ 1528);










const _c0 = ["form"];
function TypeComponent_app_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("saved", function TypeComponent_app_form_6_Template_app_form_saved_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.save($event[0], $event[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r0.data)("schemaId", ctx_r0.schemaId);
} }
class TypeComponent {
    constructor(auditService, featureService, toastService, route) {
        this.auditService = auditService;
        this.featureService = featureService;
        this.toastService = toastService;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(({ aid, zid, tid }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)([
            (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(tid),
            this.auditService.findOne(aid),
            this.featureService.findAll({
                belongsTo: 'type',
                auditId: aid,
                zoneId: zid,
                typeId: tid,
            }),
        ]))).subscribe(([typeId, audit, features]) => {
            this.audit = audit;
            const type = audit === null || audit === void 0 ? void 0 : audit.type[typeId];
            this.type = type;
            this.schemaId = this.getSchemaId(type);
            this.feature = features[0];
            this.data = this.feature ? this.featureService.feature2Data(this.feature) : {};
        });
    }
    getSchemaId(type) {
        if (!type) {
            return undefined;
        }
        const type1 = _model_types__WEBPACK_IMPORTED_MODULE_0__.Types.find(t => t.name === type.type);
        if (!type1) {
            return undefined;
        }
        if (!type.subtype || !type1.subTypes) {
            return type1.id;
        }
        const type2 = type1.subTypes.find(t => t.name === type.subtype);
        return type2 === null || type2 === void 0 ? void 0 : type2.id;
    }
    isSaved() {
        var _a;
        return !((_a = this.form) === null || _a === void 0 ? void 0 : _a.dirty);
    }
    save(schema, data) {
        if (!this.audit) {
            return;
        }
        let op;
        if (this.feature) {
            const update = this.featureService.data2Feature(schema, data);
            op = this.featureService.update(this.feature, update);
        }
        else {
            const feature = this.featureService.data2Feature(schema, data);
            const { aid, zid, tid } = this.route.snapshot.params;
            const { ACL } = this.audit;
            op = this.featureService.create(Object.assign({ auditId: aid, zoneId: zid, typeId: tid, belongsTo: 'type', mod: new Date().valueOf().toString(), usn: 0, ACL }, feature));
        }
        op.subscribe(feature => {
            this.feature = feature;
            this.toastService.success('Form', 'Successfully saved form input');
        }, error => {
            this.toastService.error('Form', 'Failed to save form input', error);
        });
    }
}
TypeComponent.ɵfac = function TypeComponent_Factory(t) { return new (t || TypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_audit_service__WEBPACK_IMPORTED_MODULE_1__.AuditService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_feature_service__WEBPACK_IMPORTED_MODULE_2__.FeatureService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_8__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute)); };
TypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TypeComponent, selectors: [["app-type"]], viewQuery: function TypeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, decls: 7, vars: 3, consts: [[1, "container"], ["routerLink", "..", 1, "bi-chevron-left", "d-lg-none"], [1, "text-muted", "small"], [3, "data", "schemaId", "saved", 4, "ngIf"], [3, "data", "schemaId", "saved"], ["form", ""]], template: function TypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, TypeComponent_app_form_6_Template, 2, 2, "app-form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.type == null ? null : ctx.type.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.type == null ? null : ctx.type.subtype, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data && ctx.schemaId);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _forms_form_form_component__WEBPACK_IMPORTED_MODULE_3__.FormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3300:
/*!*********************************************************!*\
  !*** ./src/app/audits/zone-list/zone-list.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZoneListComponent": () => (/* binding */ ZoneListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _audit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../audit.service */ 2205);
/* harmony import */ var _zone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zone.service */ 5565);
/* harmony import */ var _feature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature.service */ 6355);
/* harmony import */ var ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-bootstrap-ext */ 6640);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4583);
/* harmony import */ var _shared_options_dropdown_options_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/options-dropdown/options-dropdown.component */ 6808);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9628);










function ZoneListComponent_a_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ZoneListComponent_a_3_ng_container_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const keyValue_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.delete(keyValue_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function ZoneListComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "app-options-dropdown", 5)(4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ZoneListComponent_a_3_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const keyValue_r1 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.rename(keyValue_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Rename");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ZoneListComponent_a_3_ng_container_6_Template, 4, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const keyValue_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx_r0.routerPrefix + keyValue_r1.value.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", keyValue_r1.value.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.audit.pendingChanges === undefined);
} }
class ZoneListComponent {
    constructor(auditService, zoneService, featureService, toastService) {
        this.auditService = auditService;
        this.zoneService = zoneService;
        this.featureService = featureService;
        this.toastService = toastService;
        this.routerPrefix = '';
    }
    createZone() {
        const name = prompt('New Zone Name');
        if (!name) {
            return;
        }
        this.zoneService.create(this.audit, { name }).subscribe(zone => {
            this.audit.zone[zone.id] = zone;
        }, error => {
            this.toastService.error('Zone', 'Failed to create zone', error);
        });
    }
    rename(zone) {
        const name = prompt('Rename Zone', zone.name);
        if (!name) {
            return;
        }
        this.zoneService.update(this.audit, zone.id, { name }).subscribe(() => {
            zone.name = name;
        }, error => {
            this.toastService.error('Zone', 'Failed to rename zone', error);
        });
    }
    delete(zone) {
        if (!confirm(`Are you sure you want to delete '${zone.name}'?`)) {
            return;
        }
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)([
            this.zoneService.delete(this.audit, zone),
            this.featureService.deleteAll({ zoneId: zone.id.toString() }),
        ]).subscribe(undefined, error => {
            this.toastService.error('Zone', 'Failed to delete zone', error);
        });
    }
}
ZoneListComponent.ɵfac = function ZoneListComponent_Factory(t) { return new (t || ZoneListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_audit_service__WEBPACK_IMPORTED_MODULE_0__.AuditService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_zone_service__WEBPACK_IMPORTED_MODULE_1__.ZoneService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_feature_service__WEBPACK_IMPORTED_MODULE_2__.FeatureService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_bootstrap_ext__WEBPACK_IMPORTED_MODULE_6__.ToastService)); };
ZoneListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ZoneListComponent, selectors: [["app-zone-list"]], inputs: { audit: "audit", routerPrefix: "routerPrefix" }, decls: 5, vars: 3, consts: [[1, "list-group", "rounded-0"], [1, "list-group-item", "list-group-item-action", "text-success", 3, "click"], ["class", "list-group-item list-group-item-action d-flex align-items-center", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center", 3, "routerLink"], [1, "flex-grow-1"], [1, "visible-hover"], ["ngbDropdownItem", "", 3, "click"], [4, "ngIf"], [1, "dropdown-divider"], ["ngbDropdownItem", "", 1, "text-danger", 3, "click"]], template: function ZoneListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ZoneListComponent_Template_button_click_1_listener() { return ctx.createZone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " New Zone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ZoneListComponent_a_3_Template, 7, 5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, ctx.audit.zone));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _shared_options_dropdown_options_dropdown_component__WEBPACK_IMPORTED_MODULE_3__.OptionsDropdownComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownItem, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ6b25lLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5565:
/*!****************************************!*\
  !*** ./src/app/audits/zone.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZoneService": () => (/* binding */ ZoneService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _id_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id.service */ 4530);
/* harmony import */ var _audit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audit.service */ 2205);




class ZoneService {
    constructor(idService, auditService) {
        this.idService = idService;
        this.auditService = auditService;
    }
    create(audit, dto) {
        const { id, mod } = this.idService.randomIdAndMod();
        const zone = Object.assign({ id,
            mod, usn: 0, name: '', typeId: [] }, dto);
        return this.auditService.update(audit, { [`zone.${id}`]: zone }, audit => {
            audit.zone[id] = zone;
            return audit;
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mapTo)(zone));
    }
    update(audit, zoneId, update) {
        const updateAudit = {};
        for (const [key, value] of Object.entries(update)) {
            updateAudit[`zone.${zoneId}.${key}`] = value;
        }
        return this.auditService.update(audit, updateAudit, audit => {
            Object.assign(audit.zone[zoneId], update);
            return audit;
        });
    }
    delete(audit, { id, typeId }) {
        const update = {
            [`zone.${id}`]: { __op: 'Delete' },
        };
        for (const id of typeId) {
            update[`type.${id}`] = { __op: 'Delete' };
        }
        return this.auditService.update(audit, update, audit => {
            delete audit.zone[id];
            for (const tid of typeId) {
                delete audit.type[tid];
            }
            return audit;
        });
    }
}
ZoneService.ɵfac = function ZoneService_Factory(t) { return new (t || ZoneService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_id_service__WEBPACK_IMPORTED_MODULE_0__.IdService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_audit_service__WEBPACK_IMPORTED_MODULE_1__.AuditService)); };
ZoneService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ZoneService, factory: ZoneService.ɵfac });


/***/ }),

/***/ 189:
/*!***********************************************!*\
  !*** ./src/app/audits/zone/zone.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZoneComponent": () => (/* binding */ ZoneComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3624);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5522);
/* harmony import */ var _model_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/types */ 9342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _audit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audit.service */ 2205);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4583);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9628);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _type_list_type_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type-list/type-list.component */ 9743);









function ZoneComponent_li_6_ng_template_3_app_type_list_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-type-list", 10);
} if (rf & 2) {
    const type_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("types", ctx_r4.groupedTypes[type_r2.name])("audit", ctx_r4.audit)("zone", ctx_r4.selectedZone)("type", type_r2)("routerPrefix", type_r2.name + "/");
} }
function ZoneComponent_li_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ZoneComponent_li_6_ng_template_3_app_type_list_0_Template, 1, 5, "app-type-list", 9);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.audit && ctx_r3.selectedZone);
} }
function ZoneComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ZoneComponent_li_6_ng_template_3_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbNavItem", type_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](type_r2.name);
} }
class ZoneComponent {
    constructor(auditService, route) {
        this.auditService = auditService;
        this.route = route;
        this.types = _model_types__WEBPACK_IMPORTED_MODULE_0__.Types;
        this.groupedTypes = {};
    }
    ngOnInit() {
        this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(({ aid, zid }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)([
            this.auditService.findOne(aid),
            (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(zid),
        ]))).subscribe(([audit, zoneId]) => {
            this.audit = audit;
            const zone = audit === null || audit === void 0 ? void 0 : audit.zone[zoneId];
            this.selectedZone = zone;
            const types = audit && zone ? zone.typeId.map(tid => audit.type[tid]) : [];
            for (const type of _model_types__WEBPACK_IMPORTED_MODULE_0__.Types) {
                this.groupedTypes[type.name] = [];
            }
            for (const type of types) {
                this.groupedTypes[type.type].push(type);
            }
        });
    }
}
ZoneComponent.ɵfac = function ZoneComponent_Factory(t) { return new (t || ZoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_audit_service__WEBPACK_IMPORTED_MODULE_1__.AuditService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
ZoneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ZoneComponent, selectors: [["app-zone"]], decls: 8, vars: 4, consts: [[1, "container"], ["routerLink", "..", 1, "bi-chevron-left", "d-lg-none"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [3, "types", "audit", "zone", "type", "routerPrefix", 4, "ngIf"], [3, "types", "audit", "zone", "type", "routerPrefix"]], template: function ZoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activeIdChange", function ZoneComponent_Template_ul_activeIdChange_4_listener($event) { return ctx.activeTab = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ZoneComponent_li_6_Template, 4, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.selectedZone == null ? null : ctx.selectedZone.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("activeId", ctx.activeTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNav, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavContent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _type_list_type_list_component__WEBPACK_IMPORTED_MODULE_2__.TypeListComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ6b25lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1747:
/*!***********************************************!*\
  !*** ./src/app/forms/form-input-type.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputTypePipe": () => (/* binding */ FormInputTypePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5480);

class FormInputTypePipe {
    transform(value) {
        return FormInputTypePipe.mapping[value] || 'text';
    }
}
FormInputTypePipe.mapping = {
    emailrow: 'email',
    phonerow: 'tel',
    introw: 'number',
    decimalrow: 'number',
};
FormInputTypePipe.ɵfac = function FormInputTypePipe_Factory(t) { return new (t || FormInputTypePipe)(); };
FormInputTypePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formInputType", type: FormInputTypePipe, pure: true });


/***/ }),

/***/ 1528:
/*!**********************************************!*\
  !*** ./src/app/forms/form/form.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponent": () => (/* binding */ FormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 9649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5522);
/* harmony import */ var _forms_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../forms.service */ 5182);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9628);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 6564);
/* harmony import */ var _form_input_type_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-input-type.pipe */ 1747);
var _FormComponent_schemaId;










function FormComponent_ngb_panel_1_ng_template_1_div_0_select_4_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", value_r9.substring(value_r9.indexOf(":") + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", value_r9.substring(value_r9.indexOf(":") + 1), " ");
} }
function FormComponent_ngb_panel_1_ng_template_1_div_0_select_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormComponent_ngb_panel_1_ng_template_1_div_0_select_4_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const element_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return (ctx_r10.data[element_r4.id] = $event); })("change", function FormComponent_ngb_panel_1_ng_template_1_div_0_select_4_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r13.setDirty(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormComponent_ngb_panel_1_ng_template_1_div_0_select_4_option_1_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const section_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "", section_r1.id, "-", element_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.data[element_r4.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-describedby", section_r1.id + "-" + element_r4.id + "-help");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", element_r4.defaultValues.split(","));
} }
function FormComponent_ngb_panel_1_ng_template_1_div_0_textarea_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormComponent_ngb_panel_1_ng_template_1_div_0_textarea_5_Template_textarea_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const element_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return (ctx_r16.data[element_r4.id] = $event); })("change", function FormComponent_ngb_panel_1_ng_template_1_div_0_textarea_5_Template_textarea_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r19.setDirty(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const section_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "", section_r1.id, "-", element_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r6.data[element_r4.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-describedby", section_r1.id + "-" + element_r4.id + "-help");
} }
function FormComponent_ngb_panel_1_ng_template_1_div_0_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormComponent_ngb_panel_1_ng_template_1_div_0_input_6_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const element_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return (ctx_r22.data[element_r4.id] = $event); })("change", function FormComponent_ngb_panel_1_ng_template_1_div_0_input_6_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r25.setDirty(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "formInputType");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const section_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "", section_r1.id, "-", element_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.data[element_r4.id])("type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 5, element_r4.dataType));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-describedby", section_r1.id + "-" + element_r4.id + "-help");
} }
function FormComponent_ngb_panel_1_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](3, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FormComponent_ngb_panel_1_ng_template_1_div_0_select_4_Template, 2, 5, "select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FormComponent_ngb_panel_1_ng_template_1_div_0_textarea_5_Template, 1, 4, "textarea", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, FormComponent_ngb_panel_1_ng_template_1_div_0_input_6_Template, 2, 7, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r4 = ctx.$implicit;
    const section_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("for", "", section_r1.id, "-", element_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r4.param);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", element_r4.dataType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "pickerinputrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "textarearow");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "", section_r1.id, "-", element_r4.id, "-help");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r4.hint);
} }
function FormComponent_ngb_panel_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FormComponent_ngb_panel_1_ng_template_1_div_0_Template, 9, 9, "div", 6);
} if (rf & 2) {
    const section_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", section_r1.elements);
} }
function FormComponent_ngb_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormComponent_ngb_panel_1_ng_template_1_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "s-" + section_r1.id)("title", section_r1.section);
} }
const _c0 = function () { return []; };
class FormComponent {
    constructor(formsService) {
        this.formsService = formsService;
        _FormComponent_schemaId.set(this, new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(undefined));
        this.data = {};
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.dirty = false;
    }
    set schemaId(id) {
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__classPrivateFieldGet)(this, _FormComponent_schemaId, "f").next(id);
    }
    ngOnInit() {
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__classPrivateFieldGet)(this, _FormComponent_schemaId, "f").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(id => id ? this.formsService.loadSchema(id) : (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(undefined))).subscribe(schema => {
            this.schema = schema;
        });
    }
    ngOnDestroy() {
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__classPrivateFieldGet)(this, _FormComponent_schemaId, "f").complete();
    }
    save() {
        if (this.schema) {
            this.saved.emit([this.schema, this.data]);
        }
        this.dirty = false;
    }
    setDirty() {
        this.dirty = true;
    }
    canDeactivate() {
        return !this.dirty;
    }
}
_FormComponent_schemaId = new WeakMap();
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_forms_service__WEBPACK_IMPORTED_MODULE_0__.FormsService)); };
FormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], inputs: { schema: "schema", data: "data", schemaId: "schemaId" }, outputs: { saved: "saved" }, decls: 6, vars: 3, consts: [[3, "closeOthers"], [3, "id", "title", 4, "ngFor", "ngForOf"], [1, "text-center", "text-muted", "mt-3", "mb-5"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "btn-floating-action", 3, "click"], [3, "id", "title"], ["ngbPanelContent", ""], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "mb-3"], [1, "form-label", 3, "for"], [3, "ngSwitch"], ["class", "form-select", 3, "ngModel", "id", "ngModelChange", "change", 4, "ngSwitchCase"], ["class", "form-control", 3, "ngModel", "id", "ngModelChange", "change", 4, "ngSwitchCase"], ["class", "form-control", 3, "ngModel", "type", "id", "ngModelChange", "change", 4, "ngSwitchDefault"], [1, "form-text", 3, "id"], [1, "form-select", 3, "ngModel", "id", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "form-control", 3, "ngModel", "id", "ngModelChange", "change"], [1, "form-control", 3, "ngModel", "type", "id", "ngModelChange", "change"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormComponent_ngb_panel_1_Template, 2, 2, "ngb-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Don't forget to save when you're done filling out the form!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormComponent_Template_button_click_4_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Save\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("closeOthers", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", (ctx.schema == null ? null : ctx.schema.geminiForm) || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAccordion, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPanelContent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitchDefault], pipes: [_form_input_type_pipe__WEBPACK_IMPORTED_MODULE_1__.FormInputTypePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9863:
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsModule": () => (/* binding */ FormsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 5190);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 6564);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9628);
/* harmony import */ var _form_input_type_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-input-type.pipe */ 1747);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/form.component */ 1528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5480);







class FormsModule {
}
FormsModule.ɵfac = function FormsModule_Factory(t) { return new (t || FormsModule)(); };
FormsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FormsModule });
FormsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordionModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FormsModule, { declarations: [_form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent,
        _form_input_type_pipe__WEBPACK_IMPORTED_MODULE_0__.FormInputTypePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordionModule], exports: [_form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent] }); })();


/***/ }),

/***/ 5182:
/*!****************************************!*\
  !*** ./src/app/forms/forms.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsService": () => (/* binding */ FormsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8098);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2912);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 5190);
/* harmony import */ var _parse_parse_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parse/parse.service */ 9999);





class FormsService {
    constructor(http, parseService) {
        this.http = http;
        this.parseService = parseService;
    }
    loadSchemas() {
        return this.parseService.findAll('Form').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(schemas => {
            for (let schema of schemas) {
                this.saveLocal(schema);
            }
        }));
    }
    loadSchema(name) {
        return this.parseService.findAll('Form', { name }, {
            limit: 1,
            order: ['-updatedAt'],
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(schemas => {
            if (schemas.length === 0) {
                return undefined;
            }
            else {
                const schema = schemas[0];
                this.saveLocal(schema);
                return schema;
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.getLocal(name))));
    }
    getLocal(name) {
        const local = localStorage.getItem(`schemas/${name}`);
        return local ? JSON.parse(local) : undefined;
    }
    saveLocal(schema) {
        const { name, updatedAt } = schema;
        const updatedLocal = localStorage.getItem(`schemas/${name}/updatedAt`);
        if (!updatedLocal || updatedLocal < updatedAt) {
            localStorage.setItem(`schemas/${name}`, JSON.stringify(schema));
            localStorage.setItem(`schemas/${name}/updatedAt`, updatedAt);
        }
    }
}
FormsService.ɵfac = function FormsService_Factory(t) { return new (t || FormsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_parse_parse_service__WEBPACK_IMPORTED_MODULE_0__.ParseService)); };
FormsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: FormsService, factory: FormsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4879:
/*!*****************************************************************!*\
  !*** ./src/app/shared/master-detail/master-detail.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterDetailComponent": () => (/* binding */ MasterDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4583);


const _c0 = [[["", "breadcrumb", ""]], [["", "list", ""]]];
const _c1 = function () { return { exact: true }; };
const _c2 = ["[breadcrumb]", "[list]"];
class MasterDetailComponent {
}
MasterDetailComponent.ɵfac = function MasterDetailComponent_Factory(t) { return new (t || MasterDetailComponent)(); };
MasterDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterDetailComponent, selectors: [["app-master-detail"]], ngContentSelectors: _c2, decls: 7, vars: 2, consts: [[1, "row", "no-gutters", "h-100"], ["routerLinkActive", "master-active", 1, "col-lg-3", "h-100", "overflow-auto", "master", 3, "routerLinkActiveOptions"], ["routerLink", ".", 1, "d-none"], [1, "col-lg-9", "h-100", "overflow-auto", "detail"]], template: function MasterDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["@media (max-width: 991px) {\n  .master[_ngcontent-%COMP%]:not(.master-active) {\n    display: none !important;\n  }\n\n  .master-active[_ngcontent-%COMP%]    + .detail[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHdCQUFBO0VBQ0Y7O0VBRUE7SUFDRSx3QkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoibWFzdGVyLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubWFzdGVyOm5vdCgubWFzdGVyLWFjdGl2ZSkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXN0ZXItYWN0aXZlICsgLmRldGFpbCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6808:
/*!***********************************************************************!*\
  !*** ./src/app/shared/options-dropdown/options-dropdown.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsDropdownComponent": () => (/* binding */ OptionsDropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9628);


const _c0 = ["*"];
class OptionsDropdownComponent {
}
OptionsDropdownComponent.ɵfac = function OptionsDropdownComponent_Factory(t) { return new (t || OptionsDropdownComponent)(); };
OptionsDropdownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptionsDropdownComponent, selectors: [["app-options-dropdown"]], inputs: { id: "id" }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [["ngbDropdown", "", "placement", "bottom-right", "container", "body", 3, "click"], ["ngbDropdownToggle", "", 1, "btn", "btn-secondary", "btn-sm", 3, "id"], ["ngbDropdownMenu", ""]], template: function OptionsDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsDropdownComponent_Template_div_click_0_listener($event) { $event.stopPropagation(); return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "actions-dropdown-", ctx.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", "actions-dropdown-" + ctx.id);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownMenu], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcHRpb25zLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3539:
/*!*************************************!*\
  !*** ./src/app/shared/safe.pipe.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5480);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 8840);


class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type: ${type}`);
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


/***/ }),

/***/ 1996:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 5111);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4583);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9628);
/* harmony import */ var _master_detail_master_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master-detail/master-detail.component */ 4879);
/* harmony import */ var _options_dropdown_options_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options-dropdown/options-dropdown.component */ 6808);
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safe.pipe */ 3539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5480);







class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_master_detail_master_detail_component__WEBPACK_IMPORTED_MODULE_0__.MasterDetailComponent,
        _options_dropdown_options_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.OptionsDropdownComponent,
        _safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule], exports: [_master_detail_master_detail_component__WEBPACK_IMPORTED_MODULE_0__.MasterDetailComponent,
        _options_dropdown_options_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.OptionsDropdownComponent,
        _safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe] }); })();


/***/ }),

/***/ 6321:
/*!******************************************!*\
  !*** ./src/app/unsaved-changes.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsavedChangesGuard": () => (/* binding */ UnsavedChangesGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5480);

class UnsavedChangesGuard {
    canDeactivate(component) {
        return component.isSaved() || confirm('Are you sure you want to leave this page? Changes that you made may not be saved.');
    }
}
UnsavedChangesGuard.ɵfac = function UnsavedChangesGuard_Factory(t) { return new (t || UnsavedChangesGuard)(); };
UnsavedChangesGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UnsavedChangesGuard, factory: UnsavedChangesGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9715:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 5282);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 629);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 9942);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;

    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };

    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();

      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }

      emit();
    }

    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();

      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_audits_audits_module_ts.js.map