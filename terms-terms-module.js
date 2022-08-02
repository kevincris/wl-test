(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-terms-module"],{

/***/ "59Zp":
/*!************************************************!*\
  !*** ./src/app/common/logged-in.auth-guard.ts ***!
  \************************************************/
/*! exports provided: LoggedInAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInAuthGuard", function() { return LoggedInAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/session.service */ "6g7h");




let LoggedInAuthGuard = class LoggedInAuthGuard {
    constructor(session, router) {
        this.session = session;
        this.router = router;
    }
    canActivate(_, state) {
        if (!this.session.isAuthenticated()) {
            return this.router.parseUrl('/login?redirect=' + state.url);
        }
        return true;
    }
};
LoggedInAuthGuard.ctorParameters = () => [
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoggedInAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], LoggedInAuthGuard);



/***/ }),

/***/ "7ury":
/*!************************************************************!*\
  !*** ./src/app/common/services/compliance/term.service.ts ***!
  \************************************************************/
/*! exports provided: TermService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermService", function() { return TermService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let TermService = class TermService {
    constructor(http) {
        this.http = http;
    }
    create(term) {
        return this.http.post('/admin/terms', { terms: term.terms, privacy: term.privacy });
    }
    getApplicableTerm(userId) {
        return userId
            ? this.getTermsAcceptance(userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(termsAcceptance => termsAcceptance.term))
            : this.http.get(`/terms`);
    }
    getTermsAcceptance(userId) {
        return this.http.get(`/users/${userId}/terms-acceptance`);
    }
    accept(termsAcceptance, accepted = true) {
        return this.http.post(`/users/${termsAcceptance.user.id}/terms-acceptance`, {
            termsAcceptance: {
                id: termsAcceptance.id,
            },
            accepted,
        });
    }
};
TermService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TermService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], TermService);



/***/ }),

/***/ "eIz4":
/*!******************************************!*\
  !*** ./src/app/terms/terms.component.ts ***!
  \******************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_terms_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./terms.component.html */ "ecxo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_services_compliance_term_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/services/compliance/term.service */ "7ury");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");







let TermsComponent = class TermsComponent {
    constructor(session, termService) {
        this.session = session;
        this.termService = termService;
        this.isLoading = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(this.session.userStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.isLoading = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(user => this.termService.getApplicableTerm(user.id)))
            .subscribe(term => {
            this.term = term;
            this.isLoading = false;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
};
TermsComponent.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] },
    { type: _common_services_compliance_term_service__WEBPACK_IMPORTED_MODULE_5__["TermService"] }
];
TermsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'terms',
        template: _raw_loader_terms_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TermsComponent);



/***/ }),

/***/ "eLkP":
/*!***********************************************!*\
  !*** ./src/app/terms/terms-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TermsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsRoutingModule", function() { return TermsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/logged-in.auth-guard */ "59Zp");
/* harmony import */ var _terms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terms.component */ "eIz4");





const routes = [
    {
        path: '',
        component: _terms_component__WEBPACK_IMPORTED_MODULE_4__["TermsComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]],
    },
];
let TermsRoutingModule = class TermsRoutingModule {
};
TermsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TermsRoutingModule);



/***/ }),

/***/ "eNqe":
/*!***************************************!*\
  !*** ./src/app/terms/terms.module.ts ***!
  \***************************************/
/*! exports provided: TermsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsModule", function() { return TermsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common.module */ "a6Df");
/* harmony import */ var _terms_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms-routing.module */ "eLkP");
/* harmony import */ var _terms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terms.component */ "eIz4");





let TermsModule = class TermsModule {
};
TermsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_terms_component__WEBPACK_IMPORTED_MODULE_4__["TermsComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _terms_routing_module__WEBPACK_IMPORTED_MODULE_3__["TermsRoutingModule"]],
    })
], TermsModule);



/***/ }),

/***/ "ecxo":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/terms/terms.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-page\">\n    <div class=\"row justify-content-between align-items-center pb-2\">\n        <div class=\"col-auto\">\n            <h5 class=\"mb-0\">{{ 'common.terms' | translate }} &amp; {{ 'common.conditions' | translate }}</h5>\n        </div>\n        <div class=\"col-auto d-flex justify-content-end\">\n            <ol class=\"breadcrumb px-0\">\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item active\">{{ 'common.terms' | translate }} &amp; {{ 'common.conditions' | translate }}</li>\n            </ol>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"pt-1 pb-3 terms-content-outlet\" [innerHTML]=\"term?.terms | safeHtml\" *ngIf=\"!isLoading; else loadingContent\"></div>\n        </div>\n    </div>\n</div>\n\n<ng-template #loadingContent>\n    <div>\n        <svg class=\"spinner spinner-dark\" viewBox=\"0 0 50 50\">\n            <circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\"></circle>\n        </svg>\n        <p class=\"mb-0 mt-5 text-center\">{{ 'common.loading-terms-and-conditions' | translate }}</p>\n    </div>\n</ng-template>\n");

/***/ })

}]);
//# sourceMappingURL=terms-terms-module.js.map