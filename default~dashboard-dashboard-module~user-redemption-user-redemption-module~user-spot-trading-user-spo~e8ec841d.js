(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~user-redemption-user-redemption-module~user-spot-trading-user-spo~e8ec841d"],{

/***/ "Er0b":
/*!******************************************************!*\
  !*** ./src/app/common/card-view/card-view.module.ts ***!
  \******************************************************/
/*! exports provided: CardViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardViewModule", function() { return CardViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.module */ "a6Df");
/* harmony import */ var _card_details_card_details_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-details/card-details.page */ "psES");
/* harmony import */ var _card_view_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-view.page */ "nO15");
/* harmony import */ var _modal_change_pin_modal_change_pin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-change-pin/modal-change-pin.page */ "HXIS");
/* harmony import */ var _modal_download_transactions_modal_download_transactions_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal-download-transactions/modal-download-transactions.page */ "nHmX");
/* harmony import */ var _modal_fees_modal_fees_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-fees/modal-fees.page */ "22Go");
/* harmony import */ var _modal_offledger_modal_offledger_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal-offledger/modal-offledger.page */ "9TuU");
/* harmony import */ var _modal_swap_modal_swap_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal-swap/modal-swap.page */ "V2ub");
/* harmony import */ var _modal_topup_modal_topup_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal-topup/modal-topup.page */ "J4oW");
/* harmony import */ var _modal_unload_modal_unload_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal-unload/modal-unload.page */ "zGa5");













let CardViewModule = class CardViewModule {
};
CardViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _card_view_page__WEBPACK_IMPORTED_MODULE_5__["CardViewPage"],
            _modal_topup_modal_topup_page__WEBPACK_IMPORTED_MODULE_11__["ModalTopupPage"],
            _card_details_card_details_page__WEBPACK_IMPORTED_MODULE_4__["CardDetailsPage"],
            _modal_change_pin_modal_change_pin_page__WEBPACK_IMPORTED_MODULE_6__["ModalChangePinPage"],
            _modal_download_transactions_modal_download_transactions_page__WEBPACK_IMPORTED_MODULE_7__["ModalDownloadTransactionsPage"],
            _modal_fees_modal_fees_page__WEBPACK_IMPORTED_MODULE_8__["ModalFeesPage"],
            _modal_offledger_modal_offledger_page__WEBPACK_IMPORTED_MODULE_9__["ModalOffledgerPage"],
            _modal_unload_modal_unload_page__WEBPACK_IMPORTED_MODULE_12__["ModalUnloadPage"],
            _modal_swap_modal_swap_page__WEBPACK_IMPORTED_MODULE_10__["ModalSwapPage"],
        ],
        exports: [_card_view_page__WEBPACK_IMPORTED_MODULE_5__["CardViewPage"]],
        imports: [_common_module__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
    })
], CardViewModule);



/***/ }),

/***/ "GCg7":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/account-profile/account-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: AccountProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountProfileComponent", function() { return AccountProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account-profile.component.html */ "bJnS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common_common_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/common.mixin */ "s/H0");
/* harmony import */ var _common_models_core_user_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/models/core/user.model */ "vk+e");
/* harmony import */ var _common_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/services/alert.service */ "0ZVX");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");











let AccountProfileComponent = class AccountProfileComponent {
    constructor(http, alertService, session, translate) {
        this.http = http;
        this.alertService = alertService;
        this.session = session;
        this.translate = translate;
        this.activeTab = 'information';
        this.toStartCase = _common_common_mixin__WEBPACK_IMPORTED_MODULE_7__["toStartCase"];
        this.completeness = 100;
        this.verificationStatus = '';
        this.radius = 54;
        this.circumference = 2 * Math.PI * this.radius;
        this.faCheck = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheck"];
        this.faExclamation = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faExclamation"];
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(this.session.userStream.subscribe(user => {
            ;
            (user
                ? this.http.get(`/users/${user.id}/verifications`)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])([])).subscribe(verifications => {
                this.buildUserVerificationAlerts(new _common_models_core_user_model__WEBPACK_IMPORTED_MODULE_8__["User"](user), verifications);
            });
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    buildProfileLink(_) {
        return ['/account/profile'];
    }
    buildUserVerificationAlerts(user, verifications) {
        this.alertService.clearByTag(_common_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertTag"].VERIFICATION);
        const callToAction = {
            label: this.translate.instant('common.complete-verification-now'),
            route: '/verify',
        };
        if (!user.approvedAt &&
            verifications.length > 0 &&
            verifications.every(verification => verification.completed)) {
            this.alertService.add({
                tag: _common_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertTag"].VERIFICATION,
                severity: 'info',
                message: this.translate.instant('common.thank-you-for-completing'),
            });
        }
        else if (!user.approvedAt) {
            this.alertService.add({
                tag: _common_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertTag"].VERIFICATION,
                severity: 'danger',
                message: this.translate.instant('common.your-identity-not-verified'),
                callToAction,
            });
        }
    }
};
AccountProfileComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _common_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
AccountProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'account-profile',
        template: _raw_loader_account_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AccountProfileComponent);



/***/ }),

/***/ "GGVH":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-transactions/dashboard-transactions.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DashboardTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardTransactionsComponent", function() { return DashboardTransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_common_user_transactions_user_transactions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!../../common/user-transactions/user-transactions.component.html */ "DnZ9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_user_transactions_user_transactions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/user-transactions/user-transactions.component */ "LA2D");




let DashboardTransactionsComponent = class DashboardTransactionsComponent extends _common_user_transactions_user_transactions_component__WEBPACK_IMPORTED_MODULE_3__["UserTransactionsComponent"] {
    constructor() {
        super(...arguments);
        this.limit = 5;
        this.defaultLimit = 5;
    }
    changeState() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // do nothing
        });
    }
};
DashboardTransactionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'dashboard-transactions',
        template: _raw_loader_common_user_transactions_user_transactions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DashboardTransactionsComponent);



/***/ }),

/***/ "H/d9":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"e2e-dashboard\">\n    <alert-outlet layout=\"full-width\"></alert-outlet>\n    <div class=\"container pt-page\">\n        <div class=\"row\" *ngIf=\"appName !== 'sgpmx'; else sgpmxTemplate\">\n            <div class=\"col\">\n                <div class=\"quickbar quickbar-wrap\">\n                    <div class=\"quickbar-item\">\n                        <a class=\"quickbar-link\" [routerLink]=\"['/deposit']\">\n                            <figure>\n                                <fa-icon class=\"quickbar-icon\" [fixedWidth]=\"true\" [icon]=\"faArrowAltToBottom\"></fa-icon>\n                            </figure>\n                            <span>{{ 'dashboard.deposit' | translate }}</span>\n                        </a>\n                    </div>\n                    <div class=\"quickbar-item\">\n                        <a class=\"quickbar-link\" [routerLink]=\"['/withdraw']\">\n                            <figure>\n                                <fa-icon class=\"quickbar-icon\" [fixedWidth]=\"true\" [icon]=\"faArrowAltFromBottom\"></fa-icon>\n                            </figure>\n                            <span>{{ 'dashboard.withdraw' | translate }}</span>\n                        </a>\n                    </div>\n                    <div class=\"quickbar-item\">\n                        <a class=\"quickbar-link\" [routerLink]=\"['/transfer']\">\n                            <figure>\n                                <fa-icon class=\"quickbar-icon\" [fixedWidth]=\"true\" [icon]=\"faPaperPlane\"></fa-icon>\n                            </figure>\n                            <span>{{ 'dashboard.transfer' | translate }}</span>\n                        </a>\n                    </div>\n                    <div class=\"quickbar-item\" *ngIf=\"session.user?.hasPermission('marketplaces')\">\n                        <a class=\"quickbar-link\" [routerLink]=\"['/discover']\">\n                            <figure>\n                                <fa-icon class=\"quickbar-icon\" [fixedWidth]=\"true\" [icon]=\"faCompass\"></fa-icon>\n                            </figure>\n                            <span>{{ 'dashboard.discover' | translate }}</span>\n                        </a>\n                    </div>\n                    <div class=\"quickbar-item\" *ngIf=\"session.user?.hasPermission('cards')\">\n                        <a class=\"quickbar-link\" [routerLink]=\"['/cards']\">\n                            <figure>\n                                <fa-icon class=\"quickbar-icon\" [fixedWidth]=\"true\" [icon]=\"faCreditCardFront\"></fa-icon>\n                            </figure>\n                            <span>{{ 'dashboard.manage-cards' | translate }}</span>\n                        </a>\n                    </div>\n                    <div class=\"quickbar-item\" *ngIf=\"session.user?.hasPermission('conversions')\">\n                        <a class=\"quickbar-link\" [routerLink]=\"['/services/conversions']\">\n                            <figure>\n                                <fa-icon class=\"quickbar-icon\" [fixedWidth]=\"true\" [icon]=\"faSync\"></fa-icon>\n                            </figure>\n                            <span>{{ 'dashboard.swap-currency' | translate }}</span>\n                        </a>\n                    </div>\n                    <div class=\"quickbar-item d-none d-xl-flex\" *ngIf=\"session.user?.hasPermission('invoices')\">\n                        <a class=\"quickbar-link\" [routerLink]=\"['/services/invoices']\">\n                            <figure>\n                                <fa-icon class=\"quickbar-icon\" [fixedWidth]=\"true\" [icon]=\"faFileInvoice\"></fa-icon>\n                            </figure>\n                            <span>{{ 'dashboard.create-invoice' | translate }}</span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-deck\">\n            <account-balance class=\"card\"></account-balance>\n            <ng-container *ngIf=\"session.user?.hasPermission('cards'); else activity\">\n                <account-cards class=\"card\"></account-cards>\n            </ng-container>\n            <ng-template #activity>\n                <activity-feed class=\"card\" [cardView]=\"true\"></activity-feed>\n            </ng-template>\n            <account-profile class=\"card\"></account-profile>\n        </div>\n    </div>\n    <router-outlet></router-outlet>\n</div>\n<ng-template #sgpmxTemplate>\n    <div class=\"row no-gutters\">\n        <div class=\"col-sm-24 col-lg-14\">\n            <div class=\"quickbar quickbar-wrap sgpmx\">\n                <div class=\"w-100 pl-2\"><b>Bullion</b></div>\n                <div class=\"quickbar-item\" *ngIf=\"session.user?.hasPermission('trades')\">\n                    <a class=\"quickbar-link\" [routerLink]=\"['/buy-and-sell']\">\n                        <figure>\n                            <fa-icon class=\"quickbar-icon text-warning\" [fixedWidth]=\"true\" [icon]=\"faBalanceScale\"></fa-icon>\n                        </figure>\n                        <span>Buy &amp; Sell</span>\n                    </a>\n                </div>\n                <div class=\"quickbar-item\">\n                    <a class=\"quickbar-link\" [routerLink]=\"['/transfer']\">\n                        <figure>\n                            <fa-icon class=\"quickbar-icon text-warning\" [fixedWidth]=\"true\" [icon]=\"faExchange\"></fa-icon>\n                        </figure>\n                        <span>{{ 'dashboard.transfer' | translate }}</span>\n                    </a>\n                </div>\n                <div class=\"quickbar-item\" *ngIf=\"session.user?.hasPermission('redeem')\">\n                    <a class=\"quickbar-link\" [routerLink]=\"['/redeem']\">\n                        <figure>\n                            <fa-icon class=\"quickbar-icon text-warning\" [fixedWidth]=\"true\" [icon]=\"faBox\"></fa-icon>\n                        </figure>\n                        <span>{{ 'common.redeem' | translate }}</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-24 col-lg-10 pl-lg-3\">\n            <div class=\"quickbar quickbar-wrap sgpmx\">\n                <div class=\"w-100 pl-2\"><b>Cash</b></div>\n                <div class=\"quickbar-item\">\n                    <a class=\"quickbar-link\" [routerLink]=\"['/deposit']\">\n                        <figure class=\"success\">\n                            <fa-icon class=\"quickbar-icon text-success\" [fixedWidth]=\"true\" [icon]=\"faPlus\"></fa-icon>\n                        </figure>\n                        <span>{{ 'dashboard.deposit' | translate }}</span>\n                    </a>\n                </div>\n                <div class=\"quickbar-item\">\n                    <a class=\"quickbar-link\" [routerLink]=\"['/withdraw']\">\n                        <figure class=\"success\">\n                            <fa-icon class=\"quickbar-icon text-success\" [fixedWidth]=\"true\" [icon]=\"faMinus\"></fa-icon>\n                        </figure>\n                        <span>{{ 'dashboard.withdraw' | translate }}</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "Oy4E":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/logged-in.auth-guard */ "59Zp");
/* harmony import */ var _dashboard_transactions_dashboard_transactions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-transactions/dashboard-transactions.component */ "GGVH");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "QX6l");






const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]],
        children: [
            {
                path: '',
                component: _dashboard_transactions_dashboard_transactions_component__WEBPACK_IMPORTED_MODULE_4__["DashboardTransactionsComponent"],
            },
        ],
    },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardRoutingModule);



/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "H/d9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-duotone-svg-icons */ "IIzM");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_services_compliance_term_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/services/compliance/term.service */ "7ury");
/* harmony import */ var _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/services/confirmation.service */ "fTmd");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/services/toastr.service */ "N/y2");
/* harmony import */ var _common_terms_modal_terms_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/terms-modal/terms-modal.component */ "aXE1");
/* harmony import */ var _user_cards_card_order_confirmation_card_order_confirmation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../user-cards/card-order-confirmation/card-order-confirmation.component */ "txKk");


















let DashboardComponent = class DashboardComponent {
    constructor(session, router, translate, termService, modal, toastr, confirmation, http) {
        this.session = session;
        this.router = router;
        this.translate = translate;
        this.termService = termService;
        this.modal = modal;
        this.toastr = toastr;
        this.confirmation = confirmation;
        this.http = http;
        this.faArrowAltToBottom = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowAltToBottom"];
        this.faArrowAltFromBottom = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowAltFromBottom"];
        this.faCreditCardFront = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCreditCardFront"];
        this.faFileInvoice = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileInvoice"];
        this.faPaperPlane = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPaperPlane"];
        this.faSync = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSync"];
        this.faAngleDown = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faAngleDown"];
        this.faCompass = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCompass"];
        this.faBalanceScale = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBalanceScale"];
        this.faExchange = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faExchange"];
        this.faBox = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBox"];
        this.faPlus = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlus"];
        this.faMinus = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faMinus"];
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].appName;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(this.session.userStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["flatMap"])(user => Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])([
            this.termService.getTermsAcceptance(user.id),
            this.http.get(`/users/${user.id}/card-orders`),
        ])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(500))
            .subscribe(([termsAcceptance, cardOrders]) => {
            // Store result and avoid overlap of terms modal and confirm card order modal
            this.unconfirmedCardOrder = cardOrders.find(cardOrder => cardOrder.status === 'unconfirmed');
            if (!termsAcceptance.acceptedAt) {
                this.openTermsModal(termsAcceptance);
            }
            else if (!!this.unconfirmedCardOrder) {
                this.openConfirmCardOrderModal();
            }
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    openTermsModal(termsAcceptance) {
        const termsModal = this.modal.open(_common_terms_modal_terms_modal_component__WEBPACK_IMPORTED_MODULE_16__["TermsModalComponent"], {
            windowClass: 'modal-primary',
            backdrop: 'static',
            keyboard: false,
        });
        termsModal.result
            .then(() => {
            this.subscriptions.add(this.termService.accept(termsAcceptance, true).subscribe(() => {
                this.toastr.success(this.translate.instant('dashboard.accepted-terms-successfully'));
                if (!!this.unconfirmedCardOrder) {
                    this.openConfirmCardOrderModal();
                }
            }));
        })
            .catch(() => {
            this.subscriptions.add(this.confirmation
                .show({
                type: 'danger',
                text: this.translate.instant('dashboard.you-will-redirected'),
                confirmText: this.translate.instant('common.logout'),
                confirmClass: 'default',
                cancelText: this.translate.instant('dashboard.back-to-terms'),
                cancelClass: 'success',
            })
                .subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result === _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmationResult"].CONFIRMED) {
                    this.session.logout();
                    yield this.router.navigate(['/login']);
                }
                else {
                    this.openTermsModal(termsAcceptance);
                }
            })));
        });
    }
    openConfirmCardOrderModal() {
        const cardOrderConfirmationModal = this.modal.open(_user_cards_card_order_confirmation_card_order_confirmation_component__WEBPACK_IMPORTED_MODULE_17__["CardOrderConfirmationComponent"], {
            windowClass: 'modal-primary',
            backdrop: 'static',
            keyboard: false,
        });
        cardOrderConfirmationModal.componentInstance.cardOrder =
            this.unconfirmedCardOrder;
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _common_services_compliance_term_service__WEBPACK_IMPORTED_MODULE_12__["TermService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_15__["ToastrService"] },
    { type: _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmationService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DashboardComponent);



/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _common_card_dummy_card_dummy_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/card-dummy/card-dummy.module */ "yCW8");
/* harmony import */ var _common_card_view_card_view_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/card-view/card-view.module */ "Er0b");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/common.module */ "a6Df");
/* harmony import */ var _common_user_activity_user_activity_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/user-activity/user-activity.module */ "FzIm");
/* harmony import */ var _common_user_transactions_user_transactions_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/user-transactions/user-transactions.module */ "Djo4");
/* harmony import */ var _account_balance_account_balance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account-balance/account-balance.component */ "fm7W");
/* harmony import */ var _account_cards_account_cards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account-cards/account-cards.component */ "plU4");
/* harmony import */ var _account_profile_account_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account-profile/account-profile.component */ "GCg7");
/* harmony import */ var _account_profile_activity_feed_activity_feed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./account-profile/activity-feed/activity-feed.component */ "d2S/");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard-routing.module */ "Oy4E");
/* harmony import */ var _dashboard_transactions_dashboard_transactions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard-transactions/dashboard-transactions.component */ "GGVH");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard.component */ "QX6l");
















let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"],
            _account_balance_account_balance_component__WEBPACK_IMPORTED_MODULE_9__["AccountBalanceComponent"],
            _account_profile_activity_feed_activity_feed_component__WEBPACK_IMPORTED_MODULE_12__["ActivityFeedComponent"],
            _account_profile_account_profile_component__WEBPACK_IMPORTED_MODULE_11__["AccountProfileComponent"],
            _account_cards_account_cards_component__WEBPACK_IMPORTED_MODULE_10__["AccountCardsComponent"],
            _dashboard_transactions_dashboard_transactions_component__WEBPACK_IMPORTED_MODULE_14__["DashboardTransactionsComponent"],
        ],
        imports: [
            _common_common_module__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_13__["DashboardRoutingModule"],
            _common_card_dummy_card_dummy_module__WEBPACK_IMPORTED_MODULE_4__["CardDummyModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["NgxChartsModule"],
            _common_user_activity_user_activity_module__WEBPACK_IMPORTED_MODULE_7__["UserActivityModule"],
            _common_user_transactions_user_transactions_module__WEBPACK_IMPORTED_MODULE_8__["UserTransactionsModule"],
            _common_card_view_card_view_module__WEBPACK_IMPORTED_MODULE_5__["CardViewModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        ],
        exports: [_account_balance_account_balance_component__WEBPACK_IMPORTED_MODULE_9__["AccountBalanceComponent"]],
    })
], DashboardModule);



/***/ }),

/***/ "Ui1Z":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/account-cards/account-cards.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-header\">\n    {{ 'common.cards' | translate }}\n    <div class=\"card-menu\">\n        <a class=\"font-lg\" [routerLink]=\"['/cards']\">{{ 'common.view-all' | translate }} &#x203A;</a>\n    </div>\n</div>\n<ng-container *ngIf=\"itemsStream | async; let items\">\n    <ng-container *ngIf=\"items.length > 0; else orderCard\">\n        <div class=\"card-body\">\n            <a href class=\"card-preview\" *ngFor=\"let card of items\" (click)=\"showCard(card); $event.preventDefault()\">\n                <div class=\"card-preview-details\">\n                    <span>{{ formatPan(card.maskedPan) }}</span>\n                    <span\n                        class=\"text-capitalize badge badge-sm\"\n                        [ngClass]=\"{\n                            'badge-success': card.status === 'active',\n                            'badge-danger': card.status === 'blocked',\n                            'badge-warning': card.status === 'inactive'\n                        }\"\n                        >{{ card.status }}</span\n                    >\n                </div>\n                <ng-container *ngIf=\"$any(card).balances$ | async; else loading; let balance\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-borderless table-sm b-t-0 mb-0\">\n                            <tbody>\n                                <tr *ngFor=\"let record of balance; let index = index\">\n                                    <td>\n                                        <fa-icon class=\"mr-2\" [style.color]=\"getCurrencyColor($any({}))\" [icon]=\"faCircle\"></fa-icon>\n                                        {{ getCurrencyName(record.curSymbol) }}\n                                    </td>\n                                    <td class=\"text-right\">\n                                        <span class=\"font-size-sm\">{{ record.balance | amount: 2 }} {{ record.curSymbol }}</span>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </ng-container>\n                <ng-template #loading>\n                    <div class=\"d-flex justify-content-center\">\n                        <ion-spinner name=\"dots\"></ion-spinner>\n                    </div>\n                </ng-template>\n            </a>\n        </div>\n        <div class=\"card-footer text-center text-muted\"><fa-icon [icon]=\"faInfoCircle\"></fa-icon> {{ 'common.click-card-to-view' | translate }}</div>\n    </ng-container>\n    <ng-template #orderCard>\n        <div class=\"card-body\">\n            <div class=\"d-flex flex-column justify-content-between h-100\">\n                <div></div>\n                <div class=\"text-center\">\n                    <img src=\"/img/icons/delivery.svg\" class=\"img-sm mb-2\" />\n                    <h5 class=\"mb-1\">{{ 'common.order-your-card' | translate }}</h5>\n                    <p class=\"mb-3 text-gray\" *ngIf=\"appName === 'sgpmx'; else text\">\n                        Upgrade to Stacker Market Pro account and get your multi-currency prepaid/debit card.\n                    </p>\n                    <ng-template #text>\n                        <p class=\"mb-3 text-gray\">{{ 'common.get-your-multi-currency-card-now' | translate: { value: displayName } }}</p>\n                    </ng-template>\n\n                    <div *ngIf=\"appName === 'sgpmx'\" class=\"callout callout-info m-0\">\n                        <h6 class=\"text-center font-weight-bold\">LIMITED TIME OFFER</h6>\n                        <p class=\"text-center\">Receive 200.00 USD worth of silver in your account when you apply now!</p>\n                    </div>\n                </div>\n                <div class=\"text-center pt-2\">\n                    <a class=\"btn btn-primary-air btn-block\" [routerLink]=\"['/cards/order']\">{{ 'common.apply-now' | translate }}</a>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n</ng-container>\n");

/***/ }),

/***/ "aXE1":
/*!*************************************************************!*\
  !*** ./src/app/common/terms-modal/terms-modal.component.ts ***!
  \*************************************************************/
/*! exports provided: TermsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsModalComponent", function() { return TermsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_terms_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./terms-modal.component.html */ "yaut");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_compliance_term_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/compliance/term.service */ "7ury");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/session.service */ "6g7h");










const ease = __webpack_require__(/*! ease-component */ "WvqM");
const scroll = __webpack_require__(/*! scroll */ "zELP");
let TermsModalComponent = class TermsModalComponent {
    constructor(activeModal, translate, session, termsService, element) {
        this.activeModal = activeModal;
        this.translate = translate;
        this.session = session;
        this.termsService = termsService;
        this.element = element;
        this.step = 'terms';
        this.viewOnly = false;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].appName;
        this.isDown = false;
        this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.scrollHandler = () => {
            // 25px threshold
            if (this.modalContainer.scrollTop >= this.modalContainer.scrollHeight - this.modalContainer.offsetHeight - 25) {
                this.isDown = true;
            }
            else {
                this.isDown = false;
            }
        };
    }
    ngOnInit() {
        this.subheader = this.translate.instant('common.you-must-accept-the-terms');
        this.subscriptions.add(this.fetchEvent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() => (this.session.isAuthenticated() ? this.session.userStream : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(undefined))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(user => this.termsService.getApplicableTerm(user === null || user === void 0 ? void 0 : user.id)))
            .subscribe(term => {
            this.term = term;
            setTimeout(() => this.scrollHandler());
        }));
        this.fetchEvent.next();
        this.modalContainer = this.element.nativeElement.querySelector('.terms-container');
        this.modalContainer.addEventListener('scroll', this.scrollHandler);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.modalContainer.removeEventListener('scroll', this.scrollHandler);
    }
    nextStep() {
        this.modalContainer.scrollTop = 0;
        if (this.step === 'terms') {
            this.step = 'privacy';
        }
        else if (this.step === 'privacy') {
            this.step = 'fees';
        }
        else {
            this.activeModal.close();
        }
        this.subheader = `${this.translate.instant('common.you-must-accept-the')} ${this.step === 'privacy' ? this.translate.instant('common.privacy-policy') : this.step} ${this.translate.instant('common.to-continue')}`;
    }
    scrollDown() {
        scroll.top(this.modalContainer, this.modalContainer.scrollHeight - this.modalContainer.clientHeight, {
            duration: 1000,
            ease: ease.inOutExpo,
        });
    }
};
TermsModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] },
    { type: _services_compliance_term_service__WEBPACK_IMPORTED_MODULE_8__["TermService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
TermsModalComponent.propDecorators = {
    step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    viewOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
TermsModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'terms-modal',
        template: _raw_loader_terms_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TermsModalComponent);



/***/ }),

/***/ "bJnS":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/account-profile/account-profile.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"session.userStream | async; let user\">\n    <div class=\"card-header font-lg\" *ngIf=\"session.user?.hasPermission('cards'); else title\">\n        <ul class=\"nav nav-tabs nav-fill card-header-tabs\">\n            <li class=\"nav-item\">\n                <a\n                    href\n                    class=\"nav-link\"\n                    [ngClass]=\"{ active: activeTab === 'information' }\"\n                    (click)=\"activeTab = 'information'; $event.preventDefault()\"\n                    >{{ 'common.information' | translate }}</a\n                >\n            </li>\n            <li class=\"nav-item\">\n                <a\n                    href\n                    class=\"nav-link\"\n                    [ngClass]=\"{ active: activeTab === 'audit-log' }\"\n                    (click)=\"activeTab = 'audit-log'; $event.preventDefault()\"\n                    >{{ 'common.audit-log' | translate | titlecase }}</a\n                >\n            </li>\n        </ul>\n    </div>\n    <ng-template #title>\n        <div class=\"card-header\">{{ 'common.account-information' | translate }}</div>\n    </ng-template>\n    <div class=\"card-body\">\n        <div class=\"flex-column justify-content-between h-100\" [ngClass]=\"activeTab === 'information' ? 'd-flex' : 'd-none'\">\n            <div class=\"d-flex flex-column justify-content-center h-100\">\n                <div class=\"text-center position-relative mx-auto\">\n                    <div class=\"profile-completeness\">\n                        <user-avatar [user]=\"user\" size=\"xl\"></user-avatar>\n                        <div class=\"progress-circle\">\n                            <!-- htmllint attr-bans=\"[]\" -->\n                            <svg width=\"128\" height=\"128\" viewBox=\"0 0 120 120\">\n                                <circle [attr.r]=\"radius\" cx=\"60\" cy=\"60\" stroke-width=\"4\" class=\"progress-circle-meter\"></circle>\n                                <circle\n                                    [style.strokeDasharray]=\"circumference\"\n                                    [style.strokeDashoffset]=\"dashoffset\"\n                                    [style.strokeLinecap]=\"'round'\"\n                                    [attr.r]=\"radius\"\n                                    cx=\"60\"\n                                    cy=\"60\"\n                                    stroke-width=\"6\"\n                                    class=\"progress-circle-value\"\n                                ></circle>\n                            </svg>\n                            <!-- htmllint attr-bans=\"$previous\" -->\n                        </div>\n                    </div>\n                    <div\n                        class=\"badge-profile\"\n                        [ngClass]=\"!!user.approvedAt ? 'bg-success' : 'bg-warning'\"\n                        [ngbTooltip]=\"(!!user.approvedAt ? 'common.your-identity-verified' : 'common.your-identiy-no-verified') | translate\"\n                        placement=\"right\"\n                    >\n                        <fa-icon class=\"text-white\" [icon]=\"!!user.approvedAt ? faCheck : faExclamation\" [fixedWidth]=\"true\"></fa-icon>\n                    </div>\n                </div>\n                <div class=\"text-center mb-3\">\n                    <span class=\"label\" [ngClass]=\"user.type === 'personal' ? 'label-success' : 'label-primary'\">{{ user.type | startCase }}</span>\n                </div>\n                <div class=\"text-center\">\n                    <div class=\"text-muted font-sm\">{{ 'common.account-name' | translate | titlecase }}</div>\n                    <p class=\"profile-value text-primary\">{{ user.name }}</p>\n                    <div class=\"text-muted font-sm\">{{ 'common.account-number' | translate | titlecase }}</div>\n                    <p [ngClass]=\"user.association ? '' : 'mb-4'\">\n                        <copy-wrap [value]=\"user.accountNumber\">\n                            <span class=\"profile-value text-body\">{{ user.accountNumber | accountNumber }}</span>\n                        </copy-wrap>\n                    </p>\n                    <ng-container *ngIf=\"user.association\">\n                        <div class=\"text-muted font-sm\">{{ 'common.account-group' | translate }}</div>\n                        <p class=\"profile-value text-primary mb-4\">{{ user.association.name }}</p>\n                    </ng-container>\n                </div>\n            </div>\n            <div class=\"text-center\">\n                <button class=\"btn btn-primary-air btn-block\" [routerLink]=\"buildProfileLink(user)\">{{ 'common.view-profile' | translate }}</button>\n            </div>\n        </div>\n        <div class=\"flex-column justify-content-between h-100\" [ngClass]=\"activeTab === 'audit-log' ? 'd-flex' : 'd-none'\">\n            <activity-feed></activity-feed>\n            <div class=\"text-center pt-2\">\n                <a class=\"btn btn-primary-air btn-block\" [routerLink]=\"['/activities']\">{{ 'common.view-all' | translate }}</a>\n            </div>\n        </div>\n    </div>\n</ng-container>\n");

/***/ }),

/***/ "d2S/":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/account-profile/activity-feed/activity-feed.component.ts ***!
  \************************************************************************************/
/*! exports provided: ActivityFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityFeedComponent", function() { return ActivityFeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_activity_feed_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./activity-feed.component.html */ "sM+v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_activities_user_activities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../user-activities/user-activities.component */ "2L1d");




let ActivityFeedComponent = class ActivityFeedComponent extends _user_activities_user_activities_component__WEBPACK_IMPORTED_MODULE_3__["UserActivitiesComponent"] {
    constructor() {
        super(...arguments);
        this.limit = 5;
        this.defaultLimit = 5;
    }
    stateChange() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // do nothing
        });
    }
};
ActivityFeedComponent.propDecorators = {
    cardView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
ActivityFeedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'activity-feed',
        template: _raw_loader_activity_feed_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ActivityFeedComponent);



/***/ }),

/***/ "fm7W":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/account-balance/account-balance.component.ts ***!
  \************************************************************************/
/*! exports provided: AccountBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountBalanceComponent", function() { return AccountBalanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_balance_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account-balance.component.html */ "vpDF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "uB96");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! currency-symbol-map */ "1yQU");
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(currency_symbol_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/services/core/user.service */ "AxWo");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/services/toastr.service */ "N/y2");
/* harmony import */ var _common_services_token_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/services/token.service */ "JdTs");
/* harmony import */ var _store_currencies_currencies_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/currencies/currencies.mixin */ "V6z1");
/* harmony import */ var _store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/currencies/currencies.query */ "4pv/");
/* harmony import */ var _store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../store/wallets/wallets.query */ "O9sj");

















let AccountBalanceComponent = class AccountBalanceComponent {
    constructor(session, toastr, userService, tokenService, currenciesQuery, walletsQuery, translate) {
        this.session = session;
        this.toastr = toastr;
        this.userService = userService;
        this.tokenService = tokenService;
        this.currenciesQuery = currenciesQuery;
        this.walletsQuery = walletsQuery;
        this.translate = translate;
        this.compact = false;
        this.extended = false;
        this.filter = [];
        this.faCircle = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCircle"];
        this.faChevronDoubleDown = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChevronDoubleDown"];
        this.faChevronDoubleUp = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChevronDoubleUp"];
        this.getSymbolFromCurrency = currency_symbol_map__WEBPACK_IMPORTED_MODULE_7__;
        this.getCurrencyColor = _store_currencies_currencies_mixin__WEBPACK_IMPORTED_MODULE_14__["getCurrencyColor"];
        this.colorScheme = { domain: [] };
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].appName;
        this.proceedOfSalesBalance = '0.00';
        this.showOther = false;
        this.formatTooltip = (item) => item.data.name;
        this.preferredCurrency$ = this.currenciesQuery.preferredCurrency$;
        this.wallets$ = this.walletsQuery.filteredBalances$;
        this.totalBalance$ = this.walletsQuery.totalBalance$;
        this.filteredWallets$ = this.wallets$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(wallets => wallets.filter(wallet => !this.filter.length || this.filter.includes(wallet.currency.code))));
        this.otherWallets$ = this.wallets$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(wallets => wallets.filter(wallet => !this.filter.length || !this.filter.includes(wallet.currency.code))));
        this.currencies$ = this.currenciesQuery
            .selectAll({
            filterBy: currency => ['fiat', 'crypto'].includes(currency.type),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(currencies => currencies.map(currency => (Object.assign(Object.assign({}, currency), { exchangeRateFlipped: new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(1).div(currency.exchangeRate).toFixed(2, 1) === '0.00'
                ? new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(1).div(currency.exchangeRate).toFixed(4, 1)
                : new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(1).div(currency.exchangeRate).toFixed(2, 1) })))));
        this.chartData$ = this.walletsQuery.balances$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(wallets => {
            // Compute chart color based on css primary var
            for (let i = 0; i < wallets.length; i++) {
                this.colorScheme.domain.push(Object(_store_currencies_currencies_mixin__WEBPACK_IMPORTED_MODULE_14__["getCurrencyColor"])(wallets[i].currency, i));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(wallets => {
            const chartData = wallets.map(wallet => ({
                name: `${new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(wallet.availableBalance).toFormat(2, 1)} ${wallet.currency.code}`,
                value: parseFloat(wallet.value),
            }));
            if (chartData.length && chartData.every(data => data.value === 0)) {
                chartData[0].value = 1;
            }
            return chartData;
        }));
    }
    changePreferredCurrency(currency) {
        this.session.userStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(user => user.preferredCurrency.code !== currency.code), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(user => this.userService.changePreferredCurrency(user.id, currency)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(() => this.tokenService.refresh()))
            .subscribe(() => {
            this.toastr.success(this.translate.instant('common.preferred-currency-changed'));
        });
    }
};
AccountBalanceComponent.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"] },
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_12__["ToastrService"] },
    { type: _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _common_services_token_service__WEBPACK_IMPORTED_MODULE_13__["TokenService"] },
    { type: _store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_15__["CurrenciesQuery"] },
    { type: _store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_16__["WalletsQuery"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
AccountBalanceComponent.propDecorators = {
    compact: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    extended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
AccountBalanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'account-balance',
        template: _raw_loader_account_balance_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AccountBalanceComponent);



/***/ }),

/***/ "plU4":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/account-cards/account-cards.component.ts ***!
  \********************************************************************/
/*! exports provided: AccountCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountCardsComponent", function() { return AccountCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_cards_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account-cards.component.html */ "Ui1Z");
/* harmony import */ var _aerapass_country_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aerapass/country-data */ "eU/h");
/* harmony import */ var _aerapass_country_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aerapass_country_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "WE53");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_card_view_card_view_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/common/card-view/card-view.page */ "nO15");
/* harmony import */ var src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/common/services/confirmation.service */ "fTmd");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/list.component */ "aJRI");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");
/* harmony import */ var _store_currencies_currencies_mixin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/currencies/currencies.mixin */ "V6z1");
/* harmony import */ var _store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../store/currencies/currencies.query */ "4pv/");



















let AccountCardsComponent = class AccountCardsComponent extends _common_list_component__WEBPACK_IMPORTED_MODULE_15__["ListComponent"] {
    constructor(http, ngbModal, changeDetector, route, router, session, confirmation, currenciesQuery, modalController) {
        super(http, ngbModal, changeDetector, route, router, session, confirmation);
        this.currenciesQuery = currenciesQuery;
        this.modalController = modalController;
        this.getCurrencyColor = _store_currencies_currencies_mixin__WEBPACK_IMPORTED_MODULE_17__["getCurrencyColor"];
        this.faCircle = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCircle"];
        this.faInfoCircle = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faInfoCircle"];
        this.limit = 4;
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].displayName;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].appName;
        this.isLoading = false;
    }
    ngOnInit() {
        super.ngOnInit();
        this.subscriptions.add(this.currenciesQuery.selectAll().subscribe(currencies => {
            this.currencies = currencies;
        }));
    }
    find() {
        return this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(user => {
            this.apiUrl = `/users/${user.id}/cards`;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["flatMap"])(() => super.find()));
    }
    showCard(card) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isLoading) {
                return;
            }
            this.isLoading = true;
            const modal = yield this.modalController.create({
                component: src_app_common_card_view_card_view_page__WEBPACK_IMPORTED_MODULE_12__["CardViewPage"],
                componentProps: {
                    item: card,
                },
            });
            return yield modal.present().finally(() => {
                this.isLoading = false;
            });
        });
    }
    getCurrencyByCode(code) {
        return this.currencies.find(currency => currency.code === code);
    }
    getCurrencyName(code) {
        if (code === 'USD') {
            return 'US Dollar';
        }
        const currency = _aerapass_country_data__WEBPACK_IMPORTED_MODULE_2__["currencies"][code];
        if (currency) {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_10__["startCase"])(currency.name);
        }
        return '';
    }
    formatPan(pan) {
        return `${pan.slice(0, 4)} ${pan.slice(4, 8)} ${pan.slice(8, 12)} ${pan.slice(12)}`;
    }
    mapItem(item) {
        item.balances$ = this.http.get(`/cards/${item.id}/balance`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(balance => balance.filter(currency => currency.balance > 0)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(balance => (balance.length ? balance : [{ curSymbol: 'USD', balance: 0 }])));
        return item;
    }
};
AccountCardsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_16__["SessionService"] },
    { type: src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmationService"] },
    { type: _store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_18__["CurrenciesQuery"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] }
];
AccountCardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'account-cards',
        template: _raw_loader_account_cards_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AccountCardsComponent);



/***/ }),

/***/ "sM+v":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/account-profile/activity-feed/activity-feed.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-header\" *ngIf=\"cardView\">\n    {{ 'common.activities' | translate }}\n    <div class=\"card-menu\">\n        <a class=\"font-lg\" [routerLink]=\"['/activities']\">{{ 'common.view-all' | translate }} &#x203A;</a>\n    </div>\n</div>\n<div [ngClass]=\"{ 'card-body': cardView }\">\n    <div class=\"activity-feed\">\n        <div class=\"feed-item\" [ngClass]=\"activity.severity\" *ngFor=\"let activity of itemsStream | async\">\n            <div class=\"date\">{{ activity.createdAt | formatDistanceToNow: true:true }}</div>\n            <div class=\"text\">\n                <user-activity [activity]=\"activity\"></user-activity>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "vpDF":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/account-balance/account-balance.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"preferredCurrency$ | async; let preferredCurrency\">\n    <div class=\"card-header d-flex justify-content-between\">\n        <span>{{ 'account-balance.account-balance' | translate }}</span>\n        <div ngbDropdown placement=\"bottom-right\" class=\"account-balance-dropdown\" *ngIf=\"!compact\">\n            <a href class=\"font-lg\" (click)=\"$event.preventDefault()\" ngbDropdownToggle>in {{ preferredCurrency.code }} &#x203A;</a>\n            <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                <h6 class=\"dropdown-header title-decorative text-center\">{{ 'common.choose-preferred-currency' | translate }}</h6>\n                <div class=\"dropdown-divider mt-1\"></div>\n                <button\n                    ngbDropdownItem\n                    *ngFor=\"let currency of currencies$ | async\"\n                    [ngClass]=\"{ active: preferredCurrency.code === currency.code }\"\n                    (click)=\"changePreferredCurrency(currency)\"\n                >\n                    <div>{{ currency.code }} ({{ currency.name }})</div>\n                    <small class=\"text-muted\">\n                        1.00 {{ currency.code }} = {{ currency.exchangeRateFlipped | amount: currency.decimalPlaces }} USD\n                    </small>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"d-flex flex-column justify-content-between h-100\">\n        <div class=\"statistic-box\" *ngIf=\"!compact\">\n            <div class=\"box-content\">\n                <div class=\"box-chart-wrapper\">\n                    <ngx-charts-pie-chart\n                        *ngIf=\"chartData$ | async; let chartData\"\n                        [scheme]=\"colorScheme\"\n                        [results]=\"chartData\"\n                        [legend]=\"false\"\n                        [doughnut]=\"true\"\n                        [arcWidth]=\"0.29\"\n                        [tooltipText]=\"formatTooltip\"\n                    >\n                    </ngx-charts-pie-chart>\n                </div>\n            </div>\n        </div>\n        <div>\n            <div class=\"table-responsive\">\n                <ng-container *ngIf=\"appName !== 'sgpmx'; else sgpmx\">\n                    <ng-container *ngIf=\"!extended; else extendedTemplate\">\n                        <table class=\"table table-striped table-borderless table-card b-t-0 mb-0\">\n                            <tbody>\n                                <tr *ngFor=\"let wallet of wallets$ | async; let index = index\">\n                                    <td>\n                                        <fa-icon class=\"mr-2\" [style.color]=\"colorScheme.domain[index]\" [icon]=\"faCircle\"></fa-icon>\n                                        {{ wallet.currency.name }}\n                                    </td>\n                                    <td class=\"text-right\">\n                                        <span\n                                            class=\"font-size-sm\"\n                                            placement=\"left\"\n                                            [ngbTooltip]=\"\n                                                (preferredCurrency?.code === wallet.currency.code ? '' : '~') +\n                                                ($any(wallet).value | amount: 2) +\n                                                ' ' +\n                                                preferredCurrency?.code\n                                            \"\n                                            >{{ wallet.availableBalance | amount: wallet.currency.decimalPlaces }} {{ wallet.currency.code }}</span\n                                        >\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </ng-container>\n                </ng-container>\n                <ng-template #sgpmx>\n                    <table class=\"table table-striped table-borderless table-card b-t-0 mb-0\">\n                        <tbody>\n                            <tr *ngFor=\"let wallet of wallets$ | async; let index = index\">\n                                <td>\n                                    <ng-container [ngSwitch]=\"wallet.currency.code\">\n                                        <ng-container *ngSwitchDefault>\n                                            <fa-icon\n                                                class=\"mr-2\"\n                                                [style.color]=\"getCurrencyColor(wallet.currency, index)\"\n                                                [icon]=\"faCircle\"\n                                            ></fa-icon>\n                                            {{ wallet.currency.name }}\n                                        </ng-container>\n                                        <ng-container *ngSwitchCase=\"'AU'\">\n                                            <div class=\"d-flex align-items-center\">\n                                                <fa-icon\n                                                    class=\"mr-2\"\n                                                    [style.color]=\"getCurrencyColor(wallet.currency, index)\"\n                                                    [icon]=\"faCircle\"\n                                                ></fa-icon>\n                                                <div>\n                                                    <div>Gold</div>\n                                                    <span class=\"font-sm text-muted\">Troy Ounce</span>\n                                                </div>\n                                            </div>\n                                        </ng-container>\n                                        <ng-container *ngSwitchCase=\"'AG'\">\n                                            <div class=\"d-flex align-items-center\">\n                                                <fa-icon\n                                                    class=\"mr-2\"\n                                                    [style.color]=\"getCurrencyColor(wallet.currency, index)\"\n                                                    [icon]=\"faCircle\"\n                                                ></fa-icon>\n                                                <div>\n                                                    <div>Silver</div>\n                                                    <span class=\"font-sm text-muted\">Troy Ounce</span>\n                                                </div>\n                                            </div>\n                                        </ng-container>\n                                    </ng-container>\n                                </td>\n                                <td class=\"text-right\">\n                                    <span class=\"font-size-sm\">\n                                        {{ wallet.availableBalance | amount: wallet.currency.decimalPlaces }} {{ wallet.currency.code }} </span\n                                    ><br />\n                                    <ng-container *ngIf=\"wallet.currency.code !== 'USD'; else usd\">\n                                        <span class=\"font-sm text-muted\">{{ $any(wallet).usdValue | amount: 2 }} USD</span>\n                                    </ng-container>\n                                    <ng-template #usd>\n                                        <div class=\"small text-muted\">\n                                            {{ compact ? 'TUA' : 'Top Up Account' }}: {{ wallet.topupAmount | amount: 2 }} USD\n                                        </div>\n                                        <span class=\"small text-muted\">\n                                            {{ compact ? 'SP' : 'Sales Proceeds' }}:\n                                            {{ wallet.proceedsOfSales | amount: 2 }}\n                                            USD\n                                        </span>\n                                    </ng-template>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </ng-template>\n                <ng-template #extendedTemplate>\n                    <table class=\"table table-striped table-borderless table-card b-t-0 mb-0\">\n                        <tbody>\n                            <tr *ngFor=\"let wallet of filteredWallets$ | async; let index = index\">\n                                <td>\n                                    <fa-icon class=\"mr-2\" [style.color]=\"getCurrencyColor(wallet.currency, index)\" [icon]=\"faCircle\"></fa-icon>\n                                    {{ wallet.currency.name }}\n                                </td>\n                                <td class=\"text-right\">\n                                    <span class=\"font-size-sm\">\n                                        {{ wallet.availableBalance | amount: wallet.currency.decimalPlaces }} {{ wallet.currency.code }} </span\n                                    ><br />\n                                    <span class=\"font-sm text-muted\">{{ $any(wallet).usdValue | amount: 2 }} USD</span>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <div class=\"overlay overlay-dark\" [(ngbCollapse)]=\"!showOther\">\n                        <table class=\"table table-striped table-borderless table-card b-t-1 mb-0\">\n                            <tbody>\n                                <tr *ngFor=\"let wallet of otherWallets$ | async; let index = index\">\n                                    <td>\n                                        <fa-icon class=\"mr-2\" [style.color]=\"getCurrencyColor(wallet.currency, index)\" [icon]=\"faCircle\"></fa-icon>\n                                        {{ wallet.currency.name }}\n                                    </td>\n                                    <td class=\"text-right\">\n                                        <span class=\"font-size-sm\">\n                                            {{ wallet.availableBalance | amount: wallet.currency.decimalPlaces }} {{ wallet.currency.code }} </span\n                                        ><br />\n                                        <span class=\"font-sm text-muted\">{{ $any(wallet).usdValue | amount: 2 }} USD</span>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </ng-template>\n            </div>\n            <div class=\"card-footer text-center p-0\" *ngIf=\"extended\">\n                <a href=\"javascript:;\" class=\"d-block text-muted text-primary-hover py-2\" (click)=\"showOther = !showOther\">\n                    <fa-icon [icon]=\"!showOther ? faChevronDoubleDown : faChevronDoubleUp\"></fa-icon>\n                </a>\n            </div>\n            <div class=\"card-footer text-center text-muted\" *ngIf=\"!compact\">\n                {{ 'common.total-balance' | translate | sentenceCase }}\n                <span class=\"text-primary\">\n                    {{ totalBalance$ | async | amount: preferredCurrency?.decimalPlaces }} {{ preferredCurrency?.code }}\n                </span>\n            </div>\n        </div>\n    </div>\n</ng-container>\n");

/***/ }),

/***/ "yaut":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/terms-modal/terms-modal.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">\n        {{\n            (step === 'terms' ? 'common.terms-and-conditions' : step === 'privacy' ? 'common.data-privacy-notice' : 'common.fee-schedule')\n                | translate\n                | titlecase\n        }}\n    </h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n</div>\n<div *ngIf=\"!viewOnly\" class=\"modal-subheader\">\n    {{ subheader }}\n</div>\n<div class=\"modal-body terms-container text-body e2e-terms-modal\">\n    <ng-container *ngIf=\"term; else loadingContent\">\n        <div *ngIf=\"step === 'terms'\" [innerHtml]=\"term.terms | safeHtml\"></div>\n        <div *ngIf=\"step === 'privacy'\" [innerHtml]=\"term.privacy | safeHtml\"></div>\n        <div *ngIf=\"step === 'fees'\">\n            <ng-container *ngIf=\"appName !== 'sgpmx'; else sgpmxFees\">\n                <term-fees [user]=\"user\"></term-fees>\n            </ng-container>\n            <ng-template #sgpmxFees>\n                <sgpmx-term-fees [user]=\"user\"></sgpmx-term-fees>\n            </ng-template>\n        </div>\n    </ng-container>\n    <ng-template #loadingContent>\n        <svg class=\"spinner spinner-dark\" viewBox=\"0 0 50 50\">\n            <circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\"></circle>\n        </svg>\n        <p class=\"mb-0 mt-5 text-center\">{{ 'common.loading-terms' | translate }}</p>\n    </ng-template>\n</div>\n<div class=\"modal-footer flex-column flex-md-row justify-content-center justify-content-md-end\">\n    <ng-container *ngIf=\"!viewOnly; else closeButton\">\n        <button class=\"btn btn-link mr-md-auto mb-2 mb-md-0 e2e-scroll-down-button\" (click)=\"scrollDown()\">\n            {{ 'common.scroll-to-bottom' | translate }}\n        </button>\n        <div class=\"d-flex justify-content-end\">\n            <button class=\"btn btn-default btn-w-sm ml-1\" (click)=\"activeModal.dismiss()\">{{ 'common.decline' | translate }}</button>\n            <button class=\"btn btn-success btn-w-sm ml-1 e2e-accept-button\" (click)=\"nextStep()\" [disabled]=\"!isDown\">\n                {{ 'common.accept' | translate }}\n            </button>\n        </div>\n    </ng-container>\n    <ng-template #closeButton>\n        <div class=\"d-flex justify-content-end\">\n            <button class=\"btn btn-default btn-w-sm\" (click)=\"activeModal.dismiss()\">{{ 'common.close' | translate }}</button>\n        </div>\n    </ng-template>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~user-redemption-user-redemption-module~user-spot-trading-user-spo~e8ec841d.js.map