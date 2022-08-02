(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-privacy-module"],{

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

/***/ "Q2gd":
/*!*******************************************!*\
  !*** ./src/app/privacy/privacy.module.ts ***!
  \*******************************************/
/*! exports provided: PrivacyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyModule", function() { return PrivacyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common.module */ "a6Df");
/* harmony import */ var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privacy-routing.module */ "ZYtD");
/* harmony import */ var _privacy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./privacy.component */ "TsVY");





let PrivacyModule = class PrivacyModule {
};
PrivacyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_privacy_component__WEBPACK_IMPORTED_MODULE_4__["PrivacyComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _privacy_routing_module__WEBPACK_IMPORTED_MODULE_3__["PrivacyRoutingModule"]],
    })
], PrivacyModule);



/***/ }),

/***/ "TsVY":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_privacy_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./privacy.component.html */ "eKeh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_services_compliance_term_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/services/compliance/term.service */ "7ury");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");







let PrivacyComponent = class PrivacyComponent {
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
PrivacyComponent.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] },
    { type: _common_services_compliance_term_service__WEBPACK_IMPORTED_MODULE_5__["TermService"] }
];
PrivacyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'privacy',
        template: _raw_loader_privacy_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], PrivacyComponent);



/***/ }),

/***/ "ZYtD":
/*!***************************************************!*\
  !*** ./src/app/privacy/privacy-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PrivacyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyRoutingModule", function() { return PrivacyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/logged-in.auth-guard */ "59Zp");
/* harmony import */ var _privacy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./privacy.component */ "TsVY");





const routes = [
    {
        path: '',
        component: _privacy_component__WEBPACK_IMPORTED_MODULE_4__["PrivacyComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]],
    },
];
let PrivacyRoutingModule = class PrivacyRoutingModule {
};
PrivacyRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrivacyRoutingModule);



/***/ }),

/***/ "eKeh":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/privacy/privacy.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-page\">\n    <div class=\"row justify-content-between align-items-center pb-2\">\n        <div class=\"col-auto\">\n            <h5 class=\"mb-0\">{{ 'common.data-privacy-notice' | translate | titlecase }}</h5>\n        </div>\n        <div class=\"col-auto d-flex justify-content-end\">\n            <ol class=\"breadcrumb px-0\">\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item active\">{{ 'common.data-privacy-notice' | translate | titlecase }}</li>\n            </ol>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"pt-1 pb-3 privacy-content-outlet\" [innerHtml]=\"term?.privacy | safeHtml\" *ngIf=\"!isLoading; else loadingContent\"></div>\n        </div>\n    </div>\n</div>\n<ng-template #loadingContent>\n    <div>\n        <svg class=\"spinner spinner-dark\" viewBox=\"0 0 50 50\">\n            <circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\"></circle>\n        </svg>\n        <p class=\"mb-0 mt-5 text-center\">{{ 'common.loading-data-privacy-notice' | translate }}</p>\n    </div>\n</ng-template>\n");

/***/ })

}]);
//# sourceMappingURL=privacy-privacy-module.js.map