(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~user-activities-user-activities-module~user-redemption-user-redem~96c34c07"],{

/***/ "0RS0":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-activities/user-activities.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!router.isActive('/dashboard', false)\">\n    <div class=\"container pt-page\">\n        <div class=\"row justify-content-between align-items-center pb-2\">\n            <div class=\"col-auto\">\n                <h5 class=\"mb-0\">{{ 'common.activities' | translate }}</h5>\n            </div>\n            <div class=\"col-auto d-flex justify-content-end\">\n                <ol class=\"breadcrumb px-0\">\n                    <li class=\"breadcrumb-item\">\n                        <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">{{ 'common.activities' | translate }}</li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</ng-container>\n<section class=\"container mb-3 user-activities\">\n    <div class=\"table-responsive\">\n        <table class=\"table table-hover align-items-center table-borderless\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">{{ 'common.action' | translate }}</th>\n                    <th scope=\"col\" class=\"table-col-sm\">{{ 'common.home' | translate | titlecase }}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let activity of itemsStream | async\" class=\"clickable bg-white\" [ngClass]=\"'has-' + activity.severity\">\n                    <th scope=\"row\">\n                        <user-activity [activity]=\"activity\"></user-activity>\n                    </th>\n                    <td>\n                        {{ activity.createdAt | date: 'medium' }}\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <footer class=\"table-footer\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-8\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <ng-select\n                            [(ngModel)]=\"limit\"\n                            dropdownPosition=\"auto\"\n                            (change)=\"select(1)\"\n                            [items]=\"limitOpts\"\n                            [placeholder]=\"'common.show-entries-per-page' | translate\"\n                            [clearable]=\"false\"\n                            [searchable]=\"false\"\n                            required\n                        >\n                            <ng-template ng-label-tmp let-item=\"item\"\n                                >{{ 'common.show' | translate }} {{ item }} {{ 'common.per-page' | translate }}</ng-template\n                            >\n                            <ng-template ng-option-tmp let-item=\"item\">{{ item }} {{ 'common.entries' | translate }}</ng-template>\n                        </ng-select>\n                    </div>\n                    <div class=\"col-12 d-flex align-items-center\">\n                        <span class=\"text-muted text-small\">Showing {{ offset + 1 }} - {{ min(offset + limit, count) }} of {{ count }}</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-12 col-md-16 d-flex justify-content-end\">\n                <ngb-pagination\n                    [(page)]=\"page\"\n                    [collectionSize]=\"count\"\n                    (pageChange)=\"select()\"\n                    [pageSize]=\"limit\"\n                    [maxSize]=\"4\"\n                    [rotate]=\"false\"\n                    [boundaryLinks]=\"true\"\n                >\n                </ngb-pagination>\n            </div>\n        </div>\n    </footer>\n</section>\n");

/***/ }),

/***/ "2L1d":
/*!**************************************************************!*\
  !*** ./src/app/user-activities/user-activities.component.ts ***!
  \**************************************************************/
/*! exports provided: UserActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivitiesComponent", function() { return UserActivitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_activities_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-activities.component.html */ "0RS0");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ua-parser-js */ "K4CH");
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/list.component */ "aJRI");
/* harmony import */ var _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/services/confirmation.service */ "fTmd");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");












let UserActivitiesComponent = class UserActivitiesComponent extends _common_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"] {
    constructor(http, ngbModal, changeDetector, route, router, session, confirmation, sanitizer) {
        super(http, ngbModal, changeDetector, route, router, session, confirmation);
        this.sanitizer = sanitizer;
        this.min = Math.min;
        this.limit = 10;
    }
    find() {
        return this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(user => {
            this.apiUrl = `/users/${user.id}/activities`;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(() => super.find()));
    }
    mapItem(item) {
        item.parsedUserAgent = new ua_parser_js__WEBPACK_IMPORTED_MODULE_8__["UAParser"](item.userAgent).getResult();
        item.dataHtml = this.sanitizer.bypassSecurityTrustHtml(item.dataHtml);
        return item;
    }
};
UserActivitiesComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"] },
    { type: _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
UserActivitiesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'user-activities',
        template: _raw_loader_user_activities_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserActivitiesComponent);



/***/ }),

/***/ "51NS":
/*!*****************************************************************!*\
  !*** ./src/app/common/user-activity/user-activity.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivityComponent", function() { return UserActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_activity_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-activity.component.html */ "RO5F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _activities_activity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../activities/activity.component */ "L8Wr");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/session.service */ "6g7h");







let UserActivityComponent = class UserActivityComponent extends _activities_activity_component__WEBPACK_IMPORTED_MODULE_5__["ActivityComponent"] {
    constructor(translate, session) {
        super(translate);
        this.session = session;
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].displayName;
    }
    isSessionUser(user) {
        if (!this.session.user) {
            return false;
        }
        return !!user && this.session.user.id === user.id;
    }
};
UserActivityComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }
];
UserActivityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'user-activity',
        template: _raw_loader_user_activity_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserActivityComponent);



/***/ }),

/***/ "FzIm":
/*!**************************************************************!*\
  !*** ./src/app/common/user-activity/user-activity.module.ts ***!
  \**************************************************************/
/*! exports provided: UserActivityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivityModule", function() { return UserActivityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.module */ "a6Df");
/* harmony import */ var _user_activity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-activity.component */ "51NS");




let UserActivityModule = class UserActivityModule {
};
UserActivityModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_activity_component__WEBPACK_IMPORTED_MODULE_3__["UserActivityComponent"]],
        exports: [_user_activity_component__WEBPACK_IMPORTED_MODULE_3__["UserActivityComponent"]],
        imports: [_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
    })
], UserActivityModule);



/***/ }),

/***/ "RO5F":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/user-activity/user-activity.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container [ngSwitch]=\"activity.type\">\n    <!-- Authentication -->\n    <ng-container *ngSwitchCase=\"'authentication-succeeded'\">\n        {{ 'user-activity.you-have-successfully-logged-in' | translate }} {{ data?.twoFactor ? ('common.using' | translate) + ' 2FA' : '' }}\n        {{ 'common.from' | translate | lowercase }} {{ location ? location.city : '' }}<span *ngIf=\"location?.city\">, </span>\n        {{ location ? location.country + ' ' : '' }} <span class=\"text-info\">({{ ipAddress }})</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'authentication-failed'\">\n        <span class=\"text-info\">{{ ipAddress }}</span> {{ 'user-activity.has-failed-to-log-in-using-your-account' | translate }}\n        <span *ngIf=\"location?.city\">{{ 'common.from' | translate | lowercase }}</span> {{ location ? location.city : ''\n        }}<span *ngIf=\"location?.city\">, </span> {{ location ? location.country + ' ' : '' }}\n    </ng-container>\n\n    <!-- Conversions -->\n    <ng-container *ngSwitchCase=\"'conversion-created'\">\n        {{ 'user-activity.you-requested-a-conversion' | translate }} <span class=\"text-info\">{{ conversion?.id | truncate: false:7:'' }}</span>\n        {{ 'common.of' | translate }}\n        <span class=\"text-green\"\n            >{{ conversion?.baseTransaction?.amount | amount: conversion?.baseTransaction?.currency?.decimalPlaces }}\n            {{ conversion?.baseTransaction?.currency?.code }}</span\n        >\n        {{ 'common.to' | translate | lowercase }} <span class=\"text-info\">{{ conversion?.currency?.code }}</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'conversion-updated'\">\n        {{ 'user-activity.the-status-of-conversion' | translate }} <span class=\"text-info\">{{ conversion?.id | truncate: false:7:'' }}</span>\n        {{ 'user-activity.has-changed-to' | translate }}\n        <span class=\"text-info\">{{ conversion?.status?.toUpperCase() }}</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'conversion-accepted'\">\n        {{ 'user-activity.you-accepted-a-conversion' | translate }} <span class=\"text-info\">{{ conversion?.id | truncate: false:7:'' }}</span>\n        {{ 'common.of' | translate }}\n        <span class=\"text-danger\"\n            >{{ conversion?.baseTransaction?.amount | amount: conversion?.baseTransaction?.currency?.decimalPlaces }}\n            {{ conversion?.baseTransaction?.currency?.code }}</span\n        >\n        {{ 'common.to' | translate | lowercase }}\n        <span class=\"text-green\"\n            >{{ conversion?.counterTransaction?.amount | amount: conversion?.counterTransaction?.currency?.decimalPlaces }}\n            {{ conversion?.counterTransaction?.currency?.code }}</span\n        >\n    </ng-container>\n\n    <!-- File -->\n    <ng-container *ngSwitchCase=\"'poi-document-expiry'\">\n        {{ 'user-activity.your-passport-is-about-to-expire-in' | translate }} <span class=\"text-warning\">{{ data?.reminderType }}</span\n        >. {{ 'user-activity.please-update-your' | translate }} <a uiSref=\"account.profile\">{{ 'common.document' | translate }}</a\n        >.\n    </ng-container>\n\n    <!-- Messages -->\n    <ng-container *ngSwitchCase=\"'message-sent'\">\n        {{ 'user-activity.you-have-received-a' | translate }}\n        <span [innerHTML]=\"data?.confidential ? '<span class=\\'text-primary\\'>CONFIDENTIAL</span> ' : ''\"></span>\n        {{ 'common.message' | translate | lowercase }}\n    </ng-container>\n\n    <!-- Profile -->\n    <ng-container *ngSwitchCase=\"'email-updated'\">\n        {{ 'user-activity.your-email-address-has-been-changed-to' | translate }} <span class=\"text-info\">{{ data?.newValue }}</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'status-updated'\">\n        {{ 'user-activity.your-account-status-has-been-changed-to' | translate }} <span class=\"text-info text-uppercase\">{{ data?.newValue }}</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'password-updated'\">\n        {{ 'user-activity.your-password-has-been' | translate }} <span class=\"text-primary\">{{ 'common.changed' | translate | uppercase }}</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'password-restored'\">\n        {{ 'user-activity.your-password-has-been' | translate }} <span class=\"text-primary\">{{ 'common.restored' | translate | uppercase }}</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'two-factor-updated'\">\n        {{ 'common.you-have' | translate }}\n        <span [ngClass]=\"data?.twoFactor ? 'text-green' : 'text-danger'\">{{\n            (data?.twoFactor ? 'common.enabled' : 'common.disabled') | translate\n        }}</span>\n        {{ 'common.two-factor-authentication' | translate | lowercase }}\n    </ng-container>\n\n    <!-- Transactions -->\n    <ng-container *ngSwitchCase=\"'transaction-created'\">\n        <ng-container [ngSwitch]=\"transaction?.type\">\n            <ng-container *ngSwitchCase=\"'deposit'\">\n                {{ 'user-activity.you-requested-a' | translate }} <span class=\"text-info text-uppercase\">{{ transaction?.method }}</span>\n                {{ 'common.deposit' | translate | lowercase }} <span class=\"text-info\">{{ transaction?.id | truncate: false:7:'' }}</span>\n                {{ 'common.of' | translate }}\n                <span class=\"text-green\"\n                    >{{ transaction?.amount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</span\n                >\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'transfer'\">\n                {{ 'user-activity.you-requested-a-transfer' | translate }}\n                <span class=\"text-info\">{{ transaction?.id | truncate: false:7:'' }}</span> {{ 'common.of' | translate }}\n                <span class=\"text-green\"\n                    >{{ transaction?.amount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</span\n                >\n                to <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: counterUser }\"></ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'withdrawal'\">\n                {{ 'user-activity.you-requested-a' | translate }} <span class=\"text-info text-uppercase\">{{ transaction?.method }}</span>\n                {{ 'common.withdrawal' | translate | lowercase }} <span class=\"text-info\">{{ transaction?.id | truncate: false:7:'' }}</span>\n                {{ 'common.of' | translate }}\n                <span class=\"text-green\"\n                    >{{ transaction?.amount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</span\n                >\n            </ng-container>\n        </ng-container>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'transaction-processed'\">\n        <ng-container [ngSwitch]=\"transaction?.type\">\n            <ng-container *ngSwitchCase=\"'deposit'\">\n                {{ 'common.your' | translate }} <span class=\"text-info text-uppercase\">{{ transaction?.method }}</span>\n                {{ 'common.deposit' | translate | lowercase }} <span class=\"text-info\">{{ transaction?.id | truncate: false:7:'' }}</span>\n                {{ 'common.of' | translate }}\n                <span class=\"text-green\"\n                    >{{ transaction?.amount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</span\n                >\n                {{ 'common.has-been-completed' | translate }}\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'transfer'\">\n                <ng-container *ngIf=\"isSessionUser(baseUser)\">\n                    {{ 'common.you-sent' | translate }}\n                    <span class=\"text-green\"\n                        >{{ transaction?.amount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</span\n                    >\n                    {{ 'common.to' | translate | lowercase }}\n                    <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: counterUser }\"></ng-container>\n                </ng-container>\n                <ng-container *ngIf=\"isSessionUser(counterUser)\">\n                    {{ 'common.you-received' | translate }}\n                    <span class=\"text-green\"\n                        >{{ transaction?.amount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</span\n                    >\n                    {{ 'common.from' | translate | lowercase }}\n                    <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container>\n                </ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'withdrawal'\">\n                {{ 'common.your' | translate }} <span class=\"text-info text-uppercase\">{{ transaction?.method }}</span>\n                {{ 'common.withdrawal' | translate | lowercase }} <span class=\"text-info\">{{ transaction?.id | truncate: false:7:'' }}</span>\n                {{ 'common.of' | translate }}\n                <span class=\"text-green\"\n                    >{{ transaction?.amount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</span\n                >\n                {{ 'common.has-been-completed' | translate }}\n            </ng-container>\n        </ng-container>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'transaction-updated'\">\n        {{ 'user-activity.the-status-of-your-transaction' | translate }} <span class=\"text-info\">{{ transaction?.id | truncate: false:7:'' }}</span>\n        {{ 'user-activity.has-been-updated' | translate }}\n    </ng-container>\n\n    <!-- User -->\n    <ng-container *ngSwitchCase=\"'user-created'\">\n        {{ 'user-activity.you-registered-successfully' | translate }}\n        <ng-container *ngIf=\"data?.email\"\n            >{{ 'common.using' | translate }} <span class=\"text-primary\">{{ data?.email }}</span></ng-container\n        >\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'user-approved'\">\n        <span\n            [innerHTML]=\"\n                data?.approved\n                    ? 'Your account has been <span class=\\'text-green\\'>APPROVED</span>'\n                    : 'Your approval has been <span class=\\'text-danger\\'>REVERTED</span>'\n            \"\n        ></span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'user-updated'\"> {{ 'common.information-have-been-updated' | translate }} </ng-container>\n\n    <!-- UserChangeRequest -->\n    <ng-container *ngSwitchCase=\"'user-change-request-updated'\">\n        {{ 'user-activity.you-submitted-new-profile-information' | translate }}\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'user-change-request-submitted'\">\n        {{ 'user-activity.you-marked-your-profile-as' | translate }}\n        <span class=\"text-primary\">{{ 'user-activity.ready-for-review' | translate | uppercase }}</span>\n    </ng-container>\n\n    <!-- Wallet Addresses -->\n    <ng-container *ngSwitchCase=\"'wallet-address-generated'\">\n        {{ 'common.generated-a-new-wallet-address-for' | translate }}<span class=\"text-primary text-uppercase\">{{ data?.coin }}</span>\n    </ng-container>\n\n    <!-- Association -->\n    <ng-container *ngSwitchCase=\"'association-updated'\">\n        {{ 'user-activity.your-association-has-been-set-to' | translate }}\n        <span *ngIf=\"!counterUser\">NONE</span>\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: counterUser }\"></ng-container>\n    </ng-container>\n\n    <!-- Trade -->\n    <ng-container *ngSwitchCase=\"'trade-created'\">\n        You executed a <span [ngClass]=\"{ 'text-success': data?.side === 'BUY', 'text-danger': data?.side === 'SELL' }\">{{ data?.side }}</span> order\n        of\n        <span class=\"text-danger\" *ngIf=\"data?.side === 'SELL'\"\n            >{{ data?.baseTransaction.amount | amount: 7 }} {{ data?.baseTransaction.currencyCode }}</span\n        >\n        <span class=\"text-success\" *ngIf=\"data?.side === 'BUY'\"\n            >{{ data?.counterTransaction.amount | amount: 7 }} {{ data?.counterTransaction.currencyCode }}</span\n        >\n        for\n        <span class=\"text-success\" *ngIf=\"data?.side === 'SELL'\"\n            >{{ data?.counterTransaction.amount | amount }} {{ data?.counterTransaction.currencyCode }}</span\n        >\n        <span class=\"text-danger\" *ngIf=\"data?.side === 'BUY'\"\n            >{{ data?.baseTransaction.amount | amount }} {{ data?.baseTransaction.currencyCode }}</span\n        >\n    </ng-container>\n\n    <!-- Card -->\n    <ng-container *ngSwitchCase=\"'card-created'\">\n        {{ 'user-activity.a-new-card-with-the-pan' | translate }} <span class=\"text-info\">{{ card?.maskedPan }}</span>\n        {{ 'user-activity.has-been-added-to-your-account' | translate }}\n    </ng-container>\n\n    <!-- Card Unload -->\n    <ng-container *ngSwitchCase=\"'card-unload'\">\n        {{ 'user-activity.you-unloaded' | translate }} <span class=\"text-success\">{{ data?.amount | amount }} {{ data?.currencyCode }}</span>\n        {{ 'common.from' | translate | lowercase }} <span class=\"text-uppercase text-info\">{{ data?.card?.type }}</span> card\n        {{ data?.card?.maskedPan }}\n    </ng-container>\n\n    <!-- Account Bill Charged -->\n    <ng-container *ngSwitchCase=\"'account-bill-charged'\">\n        <ng-container *ngIf=\"data?.amountBilled; else newAccountBill\">\n            <div *ngIf=\"data?.amountBilled > 0; else exempted\">\n                {{ 'user-activity.you-have-been-charged' | translate }}\n                <span class=\"text-info\">{{ data?.amountBilled | amount }} {{ data?.currencyCode }} </span>\n                {{ 'common.for-the-monthly-account-fee-of' | translate }} {{ data?.invoiceDate | date: 'MMMM YYYY' }}\n            </div>\n        </ng-container>\n        <ng-template #newAccountBill>\n            <div *ngIf=\"data?.billAmount > 0; else exempted\">\n                {{ 'user-activity.you-have-been-charged' | translate }}\n                <span class=\"text-info\">{{ data?.settledAmount | amount }} {{ data?.settledCurrencyCode }} </span>\n                <span *ngIf=\"data?.settledCurrencyCode !== 'USD'\" class=\"text-gray font-sm\"\n                    >({{ data?.billAmount | amount }} {{ data?.billCurrencyCode }})</span\n                >\n                {{ 'common.for-the-monthly-account-fee-of' | translate }}\n                {{ data?.invoiceDate | date: 'MMMM YYYY' }}\n            </div>\n        </ng-template>\n\n        <ng-template #exempted> {{ 'user-activity.you-are-exempted' | translate }} {{ data?.invoiceDate | date: 'MMMM YYYY' }} </ng-template>\n    </ng-container>\n</ng-container>\n\n<!-- Helper -->\n<ng-template let-user=\"user\" #userTemplate>\n    <copy-wrap [value]=\"user?.accountNumber\">\n        <span [ngbTooltip]=\"user?.accountNumber | accountNumber\">{{ user?.name }}</span>\n    </copy-wrap>\n</ng-template>\n<ng-template let-user=\"user\" #userOrAppTemplate>\n    <copy-wrap *ngIf=\"user; else app\" [value]=\"user.accountNumber\">\n        <a href (click)=\"$event.preventDefault()\" [ngbTooltip]=\"user?.accountNumber | accountNumber\">{{ user?.name }}</a>\n    </copy-wrap>\n    <ng-template #app>\n        {{ displayName }}\n    </ng-template>\n</ng-template>\n");

/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~user-activities-user-activities-module~user-redemption-user-redem~96c34c07.js.map