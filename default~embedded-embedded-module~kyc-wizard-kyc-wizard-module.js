(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~embedded-embedded-module~kyc-wizard-kyc-wizard-module"],{

/***/ "+CvB":
/*!************************************************************!*\
  !*** ./src/app/stripe-payment/stripe-payment-component.ts ***!
  \************************************************************/
/*! exports provided: StripePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentComponent", function() { return StripePaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stripe_payment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stripe-payment.component.html */ "8Ech");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _stripe_stripe_js_pure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/stripe-js/pure */ "dBlp");
/* harmony import */ var _stripe_stripe_js_pure__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js_pure__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/toastr.service */ "N/y2");










let StripePaymentComponent = class StripePaymentComponent {
    constructor(http, session, toastr, translate) {
        this.http = http;
        this.session = session;
        this.toastr = toastr;
        this.translate = translate;
        this.isCardEmpty = true;
        this.isLoading = false;
        this.stripeState = 'loading';
        this.onSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!window.STRIPE_PUBLIC_KEY) {
                this.stripeState = 'not-configured';
                return;
            }
            this.stripeState = 'loaded';
            this.stripe = yield Object(_stripe_stripe_js_pure__WEBPACK_IMPORTED_MODULE_5__["loadStripe"])(window.STRIPE_PUBLIC_KEY);
            this.subscriptions.add(this.session.userStream
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(user => this.http.post(`/users/${user.id}/start-account-opening-payment`, {})))
                .subscribe(({ clientSecret }) => {
                var _a;
                this.clientSecret = clientSecret;
                const elements = (_a = this.stripe) === null || _a === void 0 ? void 0 : _a.elements();
                this.card = elements === null || elements === void 0 ? void 0 : elements.create('card');
                this.card.mount('#card-element');
                this.card.on('change', event => {
                    var _a;
                    this.isCardEmpty = event.empty;
                    this.cardError = (_a = event.error) === null || _a === void 0 ? void 0 : _a.message;
                });
            }));
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    submit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            try {
                const result = yield ((_a = this.stripe) === null || _a === void 0 ? void 0 : _a.confirmCardPayment(this.clientSecret, {
                    payment_method: {
                        card: this.card,
                    },
                }));
                if (result === null || result === void 0 ? void 0 : result.error) {
                    this.toastr.error(result.error.message || 'An error has occured');
                    return;
                }
                this.toastr.success(this.translate.instant('stripe-payment.payment-successful'));
                this.onSuccess.emit();
            }
            finally {
                this.isLoading = false;
            }
        });
    }
};
StripePaymentComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"] },
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
StripePaymentComponent.propDecorators = {
    onSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
StripePaymentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'stripe-payment',
        template: _raw_loader_stripe_payment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], StripePaymentComponent);



/***/ }),

/***/ "16yb":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kyc-wizard/ubo-wizard-completed-modal.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-body text-center my-2\">\n    <img src=\"/img/icons/file.svg\" class=\"img-md mb-3\" />\n    <h4 class=\"text-primary mb-3\">Verification Complete</h4>\n    <p class=\"mb-4\">\n        Thank you for verifying your identity! The information provided will be reviewed for completeness and eligibility. This process usually takes\n        <span class=\"text-primary\">1-3 business days</span>. We will notify you if we are missing any details or once the account is approved.\n    </p>\n    <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"closeWindow()\">Close window</button>\n</div>\n");

/***/ }),

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

/***/ "7+RW":
/*!*************************************************!*\
  !*** ./src/app/stripe-payment/stripe.module.ts ***!
  \*************************************************/
/*! exports provided: StripeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeModule", function() { return StripeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common.module */ "a6Df");
/* harmony import */ var _stripe_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stripe-payment-component */ "+CvB");




let StripeModule = class StripeModule {
};
StripeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_stripe_payment_component__WEBPACK_IMPORTED_MODULE_3__["StripePaymentComponent"]],
        exports: [_stripe_payment_component__WEBPACK_IMPORTED_MODULE_3__["StripePaymentComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
    })
], StripeModule);



/***/ }),

/***/ "7myI":
/*!*****************************************************!*\
  !*** ./src/app/kyc-wizard/kyc-wizard.auth-guard.ts ***!
  \*****************************************************/
/*! exports provided: KycWizardAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycWizardAuthGuard", function() { return KycWizardAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");




let KycWizardAuthGuard = class KycWizardAuthGuard {
    constructor(session, router) {
        this.session = session;
        this.router = router;
    }
    canActivate() {
        if (this.session.user.approvedAt) {
            return this.router.parseUrl('/dashboard');
        }
        return true;
    }
};
KycWizardAuthGuard.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
KycWizardAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], KycWizardAuthGuard);



/***/ }),

/***/ "8Ech":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stripe-payment/stripe-payment.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"stripeState === 'loaded'\">\n    <div id=\"card-element\"></div>\n    <button\n        *ngIf=\"card\"\n        type=\"button\"\n        class=\"btn btn-primary my-2\"\n        [ngClass]=\"{ loading: isLoading }\"\n        [disabled]=\"isLoading || isCardEmpty || cardError\"\n        (click)=\"submit()\"\n    >\n        {{ 'common.pay-now' | translate }}\n    </button>\n    <p *ngIf=\"cardError\" class=\"alert alert-danger\">{{ cardError }}</p>\n</div>\n<div *ngIf=\"stripeState === 'loading'\" class=\"text-center\">{{ 'common.loading' | translate }}...</div>\n<div *ngIf=\"stripeState === 'not-configured'\" class=\"alert alert-danger\">{{ 'common.stripe-is-not-configured' | translate }}</div>\n");

/***/ }),

/***/ "Iy0P":
/*!********************************************************************!*\
  !*** ./src/app/kyc-wizard/key-wizard-completed-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: KycWizardCompletedModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycWizardCompletedModalComponent", function() { return KycWizardCompletedModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_kyc_wizard_completed_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./kyc-wizard-completed-modal.component.html */ "aq+B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




let KycWizardCompletedModalComponent = class KycWizardCompletedModalComponent {
    constructor(modal) {
        this.modal = modal;
    }
};
KycWizardCompletedModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
];
KycWizardCompletedModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'kyc-wizard-completed-modal',
        template: _raw_loader_kyc_wizard_completed_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], KycWizardCompletedModalComponent);



/***/ }),

/***/ "LK1W":
/*!****************************************************!*\
  !*** ./src/app/kyc-wizard/kyc-wizard.component.ts ***!
  \****************************************************/
/*! exports provided: KycWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycWizardComponent", function() { return KycWizardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_kyc_wizard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./kyc-wizard.component.html */ "hS8c");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-duotone-svg-icons */ "IIzM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_services_basis_id_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/services/basis-id.service */ "yeWx");
/* harmony import */ var _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/services/confirmation.service */ "fTmd");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");
/* harmony import */ var _key_wizard_completed_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./key-wizard-completed-modal.component */ "Iy0P");















let KycWizardComponent = class KycWizardComponent {
    constructor(basisId, http, router, confirmation, session, translate, ngbModal) {
        this.basisId = basisId;
        this.http = http;
        this.router = router;
        this.confirmation = confirmation;
        this.session = session;
        this.translate = translate;
        this.ngbModal = ngbModal;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].appName;
        this.accountOpeningFeeEnabled = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].accountOpeningFeeEnabled;
        this.accountOpeningFee = '0.00';
        this.running = false;
        this.isLoading = false;
        this.hasCompleted = false;
        this.isPaymentSuccessful = false;
        this.faSearch = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSearch"];
        this.faUserClock = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserClock"];
        this.faShieldCheck = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faShieldCheck"];
        this.faMoneyCheckEditAlt = _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faMoneyCheckEditAlt"];
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
    }
    ngOnInit() {
        if (this.accountOpeningFeeEnabled) {
            this.subscriptions.add(this.session.userStream
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(user => Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([
                this.http.get(`/users/${user.id}`),
                this.http.get(`/users/${user.id}/account-opening-fee`),
            ])))
                .subscribe(([user, fee]) => {
                this.user = user;
                this.accountOpeningFee = fee.accountOpeningFee;
            }));
        }
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.subscriptions.add(this.basisId.onSuccess
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(() => this.http.post(`/verifications/${this.verification.id}/set-completed`, {
                completed: true,
            })))
                .subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const modal = this.ngbModal.open(_key_wizard_completed_modal_component__WEBPACK_IMPORTED_MODULE_14__["KycWizardCompletedModalComponent"], {
                    backdrop: 'static',
                    keyboard: false,
                    centered: true,
                });
                yield modal.result.then(() => this.router.navigate(['/dashboard']));
            })));
            this.subscriptions.add(this.basisId.onError
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(() => this.confirmation.show({
                type: 'warning',
                text: this.translate.instant('common.there-was-a-problem-in-verification'),
                showCancel: false,
                confirmText: this.translate.instant('reload-page'),
            })))
                .subscribe(() => {
                location.reload();
            }));
            this.http
                .head(`/users/${this.session.user.id}/verifications`, {
                params: { completed: JSON.stringify(true) },
                observe: 'response',
            })
                .subscribe(response => {
                const hasCompletedVerification = response && response.headers.has('x-total-count') ? ~~response.headers.get('x-total-count') : 0;
                this.hasCompleted = hasCompletedVerification > 0;
            });
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    startVerification() {
        this.isLoading = true;
        this.basisId
            .init()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(() => this.http.post(`/verifications`, {
            user: {
                id: this.session.user.id,
            },
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.isLoading = false;
        }))
            .subscribe(verification => {
            if (window.DEBUG) {
                // eslint-disable-next-line no-console
                console.log('BasisID Hash:', verification.hash);
            }
            window.scroll(0, 0);
            this.running = true;
            this.basisId.loadWidget({
                key: this.session.user.type === 'business' ? window.BASIS_ID_KYB_KEY : window.BASIS_ID_KYC_KEY,
                formToken: verification.formToken,
            });
            this.verification = verification;
        });
    }
    getLogo() {
        switch (src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].appName) {
            case 'birex':
            case 'usunpay':
            case 'etransfer':
                return '/img/brand/logo.svg';
            default:
                return '/img/brand/logo-white-horizontal.svg';
        }
    }
    getButtonClass() {
        switch (src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].appName) {
            case 'sgpmx':
                return 'btn-primary';
            default:
                return 'btn-secondary';
        }
    }
};
KycWizardComponent.ctorParameters = () => [
    { type: _common_services_basis_id_service__WEBPACK_IMPORTED_MODULE_11__["BasisIdService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmationService"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
];
KycWizardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'kyc-wizard',
        template: _raw_loader_kyc_wizard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], KycWizardComponent);



/***/ }),

/***/ "QaUN":
/*!*************************************************!*\
  !*** ./src/app/kyc-wizard/kyc-wizard.module.ts ***!
  \*************************************************/
/*! exports provided: KycWizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycWizardModule", function() { return KycWizardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common.module */ "a6Df");
/* harmony import */ var _stripe_payment_stripe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stripe-payment/stripe.module */ "7+RW");
/* harmony import */ var _key_wizard_completed_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key-wizard-completed-modal.component */ "Iy0P");
/* harmony import */ var _kyc_wizard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kyc-wizard-routing.module */ "qEYS");
/* harmony import */ var _kyc_wizard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kyc-wizard.component */ "LK1W");
/* harmony import */ var _ubo_wizard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ubo-wizard.component */ "RI5M");








let KycWizardModule = class KycWizardModule {
};
KycWizardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_kyc_wizard_component__WEBPACK_IMPORTED_MODULE_6__["KycWizardComponent"], _key_wizard_completed_modal_component__WEBPACK_IMPORTED_MODULE_4__["KycWizardCompletedModalComponent"], _ubo_wizard_component__WEBPACK_IMPORTED_MODULE_7__["UboWizardComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _kyc_wizard_routing_module__WEBPACK_IMPORTED_MODULE_5__["KycWizardRoutingModule"], _stripe_payment_stripe_module__WEBPACK_IMPORTED_MODULE_3__["StripeModule"]],
        exports: [_key_wizard_completed_modal_component__WEBPACK_IMPORTED_MODULE_4__["KycWizardCompletedModalComponent"]],
    })
], KycWizardModule);



/***/ }),

/***/ "QtTN":
/*!*****************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/pure.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "1.34.0",
    startTime: startTime
  });
};

var stripePromise = null;
var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }

      script.addEventListener('load', function () {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load Stripe.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

var validateLoadParams = function validateLoadParams(params) {
  var errorMessage = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(params), "\n");

  if (params === null || _typeof(params) !== 'object') {
    throw new Error(errorMessage);
  }

  if (Object.keys(params).length === 1 && typeof params.advancedFraudSignals === 'boolean') {
    return params;
  }

  throw new Error(errorMessage);
};

var loadParams;
var loadStripeCalled = false;
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadStripeCalled = true;
  var startTime = Date.now();
  return loadScript(loadParams).then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};

loadStripe.setLoadParameters = function (params) {
  if (loadStripeCalled) {
    throw new Error('You cannot change load parameters after calling loadStripe');
  }

  loadParams = validateLoadParams(params);
};

exports.loadStripe = loadStripe;


/***/ }),

/***/ "RF+O":
/*!********************************************************************!*\
  !*** ./src/app/kyc-wizard/ubo-wizard-completed-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: UboWizardCompletedModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UboWizardCompletedModalComponent", function() { return UboWizardCompletedModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ubo_wizard_completed_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ubo-wizard-completed-modal.component.html */ "16yb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




let UboWizardCompletedModalComponent = class UboWizardCompletedModalComponent {
    constructor(modal) {
        this.modal = modal;
    }
    closeWindow() {
        window.close();
    }
};
UboWizardCompletedModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
];
UboWizardCompletedModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ubo-wizard-completed-modal',
        template: _raw_loader_ubo_wizard_completed_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UboWizardCompletedModalComponent);



/***/ }),

/***/ "RI5M":
/*!****************************************************!*\
  !*** ./src/app/kyc-wizard/ubo-wizard.component.ts ***!
  \****************************************************/
/*! exports provided: UboWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UboWizardComponent", function() { return UboWizardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ubo_wizard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ubo-wizard.component.html */ "dXVn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_services_basis_id_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/services/basis-id.service */ "yeWx");
/* harmony import */ var _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/confirmation.service */ "fTmd");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");
/* harmony import */ var _ubo_wizard_completed_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ubo-wizard-completed-modal.component */ "RF+O");












let UboWizardComponent = class UboWizardComponent {
    constructor(basisId, confirmation, ngbModal, route, router, session) {
        this.basisId = basisId;
        this.confirmation = confirmation;
        this.ngbModal = ngbModal;
        this.route = route;
        this.router = router;
        this.session = session;
        this.year = new Date().getFullYear();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!!this.session.user) {
                this.session.logout();
            }
            this.subscriptions.add(this.basisId.onSuccess.subscribe(() => {
                this.ngbModal.open(_ubo_wizard_completed_modal_component__WEBPACK_IMPORTED_MODULE_11__["UboWizardCompletedModalComponent"], {
                    backdrop: 'static',
                    keyboard: false,
                    centered: true,
                });
            }));
            this.subscriptions.add(this.basisId.onError
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(() => this.confirmation.show({
                type: 'warning',
                text: 'There was a problem in the verification process. Please try again.',
                showCancel: false,
                confirmText: 'Reload page',
            })))
                .subscribe(() => {
                location.reload();
            }));
            this.basisId.init().subscribe(() => {
                this.route.queryParamMap.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (!params.has('code')) {
                        yield this.router.navigate(['/login']);
                        return;
                    }
                    this.basisId.loadWidget({
                        key: window.BASIS_ID_KYB_KEY,
                        invite: params.get('code'),
                    });
                }));
            });
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    getLogo() {
        switch (src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].appName) {
            case 'birex':
            case 'usunpay':
            case 'etransfer':
                return '/img/brand/logo.svg';
            default:
                return '/img/brand/logo-white-horizontal.svg';
        }
    }
};
UboWizardComponent.ctorParameters = () => [
    { type: _common_services_basis_id_service__WEBPACK_IMPORTED_MODULE_8__["BasisIdService"] },
    { type: _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmationService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] }
];
UboWizardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ubo-wizard',
        template: _raw_loader_ubo_wizard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UboWizardComponent);



/***/ }),

/***/ "aq+B":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kyc-wizard/kyc-wizard-completed-modal.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-body text-center my-2\">\n    <img src=\"/img/icons/file.svg\" class=\"img-md mb-3\" />\n    <h4 class=\"text-primary mb-3\">{{ 'common.verification-complete' | translate }}</h4>\n    <p class=\"mb-4\">\n        {{ 'common.thank-you-for-verifying' | translate }}\n        <span class=\"text-primary\">{{ 'common.one-to-three-days' | translate }}</span> {{ 'common.we-will-notify' | translate }}\n    </p>\n    <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"modal.close()\">{{ 'common.got-it' | translate }}</button>\n</div>\n");

/***/ }),

/***/ "dBlp":
/*!************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/pure.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pure.js */ "QtTN");


/***/ }),

/***/ "dXVn":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kyc-wizard/ubo-wizard.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"kyc-wizard fullscreen-bg-body\">\n    <a>\n        <img class=\"login-logo\" [src]=\"getLogo()\" />\n    </a>\n    <div id=\"bas-widget-container\"></div>\n    <div class=\"mb-5 text-center text-white\">&copy; 2005 - {{ year }} Aerapass Limited - All rights reserved.</div>\n</div>\n");

/***/ }),

/***/ "hS8c":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kyc-wizard/kyc-wizard.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"kyc-wizard fullscreen-bg-body\">\n    <a [routerLink]=\"['/dashboard']\">\n        <img class=\"login-logo\" [src]=\"getLogo()\" />\n    </a>\n    <div class=\"card max-width-md\" *ngIf=\"!running\">\n        <div class=\"card-body\">\n            <div class=\"alert alert-primary\" role=\"alert\" *ngIf=\"hasCompleted\">\n                {{ 'common.thank-you-for-completing' | translate }}.\n                <a [routerLink]=\"['/dashboard']\">{{ 'common.proceed-to-dashboard' | translate }}</a>\n            </div>\n            <h2 class=\"text-primary mb-1\">{{ 'common.account-setup' | translate }}</h2>\n            <p class=\"mb-3\" *ngIf=\"appName === 'sgpmx'; else text\">\n                You will have the option to preview your account or complete registration of your Stacker Market account.\n            </p>\n            <ng-template #text>\n                <p class=\"mb-3\">{{ 'kyc-wizard.to-complete' | translate }}:</p>\n            </ng-template>\n            <ng-container *ngIf=\"appName === 'sgpmx'\">\n                <h5 class=\"text-primary font-weight-bold\">Option 1: PREVIEW ACCOUNT</h5>\n                <p>You may preview your dashboard and Stacker Market features by click below and skipping directly to your Account Dashboard.</p>\n                <button [routerLink]=\"['/dashboard']\" class=\"btn btn-primary btn-lg btn-block mb-4\">Click here to skip to Dashboard</button>\n                <h5 class=\"text-primary font-weight-bold\">Option 2: COMPLETE REGISTRATION</h5>\n                <p>Complete your full registration by following the steps below.</p>\n                <div class=\"callout callout-info bg-light mb-4\">\n                    <h5 class=\"font-weight-bold text-dark\">LIMITED TIME OFFER</h5>\n                    <p>\n                        By completing your registration and activating your Stacker Market Pro account with physical/virtual prepaid/debit card, you\n                        will receive 200.00 USD worth of silver in your account.\n                    </p>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"!accountOpeningFeeEnabled; else accountOpeningFeeFlow\">\n                <div class=\"icon-callout\">\n                    <div class=\"icon\">\n                        <fa-icon [icon]=\"faSearch\"></fa-icon>\n                    </div>\n                    <div class=\"ml-3\">\n                        <h5 class=\"text-secondary mb-0\">{{ 'kyc-wizard.step-one' | translate }}</h5>\n                        <p>\n                            {{ 'kyc-wizard.step-one-desc' | translate }}\n                        </p>\n                    </div>\n                </div>\n                <div class=\"icon-callout\">\n                    <div class=\"icon\">\n                        <fa-icon [icon]=\"faUserClock\"></fa-icon>\n                    </div>\n\n                    <div class=\"ml-3\">\n                        <h5 class=\"text-secondary mb-0\">{{ 'kyc-wizard.step-two' | translate }}</h5>\n                        <p>\n                            {{ 'kyc-wizard.step-two-desc' | translate }}\n                        </p>\n                    </div>\n                </div>\n            </ng-container>\n            <ng-template #accountOpeningFeeFlow>\n                <div class=\"icon-callout\">\n                    <div class=\"icon\">\n                        <fa-icon [icon]=\"faMoneyCheckEditAlt\"></fa-icon>\n                    </div>\n                    <div class=\"ml-3\">\n                        <h5 class=\"text-secondary mb-0\">{{ 'kyc-wizard.step-one-account' | translate }}</h5>\n                        <p>\n                            {{ 'kyc-wizard.step-one-account-desc' | translate }}\n                            <span class=\"font-weight-bold\">{{ accountOpeningFee | amount }} USD</span>\n                            {{ 'kyc-wizard.using-your-credit' | translate }}\n                        </p>\n                        <ng-container *ngIf=\"!!user\">\n                            <ng-container *ngIf=\"!user?.accountOpeningFeePaidAt && !isPaymentSuccessful; else feePaid\">\n                                <stripe-payment (onSuccess)=\"isPaymentSuccessful = true\"></stripe-payment>\n                            </ng-container>\n                            <ng-template #feePaid>\n                                <div class=\"alert alert-success\">{{ 'kyc-wizard.you-have-paid' | translate }}</div>\n                            </ng-template>\n                        </ng-container>\n                    </div>\n                </div>\n                <div class=\"icon-callout\">\n                    <div class=\"icon\">\n                        <fa-icon [icon]=\"faSearch\"></fa-icon>\n                    </div>\n                    <div class=\"ml-3\">\n                        <h5 class=\"text-secondary mb-0\">{{ 'kyc-wizard.step-two-account' | translate }}</h5>\n                        <p>\n                            {{ 'kyc-wizard.step-two-account-desc' | translate }}\n                        </p>\n                    </div>\n                </div>\n            </ng-template>\n            <div class=\"icon-callout\">\n                <div class=\"icon\">\n                    <fa-icon [icon]=\"faShieldCheck\"></fa-icon>\n                </div>\n                <div class=\"ml-3\">\n                    <ng-container *ngIf=\"appName === 'sgpmx'; else defaultText\">\n                        <h5 class=\"text-secondary mb-0\">{{ 'kyc-wizard.step-three-account' | translate }}</h5>\n                        <p>{{ 'kyc-wizard.step-three-account' | translate }}</p>\n                    </ng-container>\n                    <ng-template #defaultText>\n                        <h5 class=\"text-secondary mb-0\">{{ 'kyc-wizard.step-three-account-alt' | translate }}</h5>\n                        <p>{{ 'kyc-wizard.step-three-account-desc' | translate }}</p>\n                    </ng-template>\n                </div>\n            </div>\n            <ng-container *ngIf=\"session.userStream | async; let user\">\n                <div class=\"d-flex flex-column align-items-center mb-3\">\n                    <small class=\"text-muted mb-1\">{{ 'kyc-wizard.logged-in-as' | translate }}</small>\n                    <div class=\"account-info\">\n                        <user-display [user]=\"user\" [displayBadges]=\"false\" [disableLink]=\"true\"> </user-display>\n                    </div>\n                </div>\n            </ng-container>\n            <button\n                class=\"btn btn-block btn-lg\"\n                (click)=\"startVerification()\"\n                [ngClass]=\"getButtonClass() + (isLoading ? ' loading' : '')\"\n                [disabled]=\"isLoading || hasCompleted || (accountOpeningFeeEnabled && !user?.accountOpeningFeePaidAt && !isPaymentSuccessful)\"\n            >\n                {{ 'kyc-wizard.start-verification' | translate }}\n            </button>\n        </div>\n    </div>\n    <div id=\"bas-widget-container\" [hidden]=\"!running\"></div>\n    <div class=\"mb-5 text-center\">\n        <a [routerLink]=\"['/dashboard']\" class=\"text-white\">{{ 'kyc-wizard.no-documents' | translate }}</a>\n    </div>\n</div>\n");

/***/ }),

/***/ "qEYS":
/*!*********************************************************!*\
  !*** ./src/app/kyc-wizard/kyc-wizard-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: KycWizardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycWizardRoutingModule", function() { return KycWizardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/logged-in.auth-guard */ "59Zp");
/* harmony import */ var _kyc_wizard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kyc-wizard.auth-guard */ "7myI");
/* harmony import */ var _kyc_wizard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kyc-wizard.component */ "LK1W");
/* harmony import */ var _ubo_wizard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ubo-wizard.component */ "RI5M");







const routes = [
    {
        path: '',
        component: _kyc_wizard_component__WEBPACK_IMPORTED_MODULE_5__["KycWizardComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"], _kyc_wizard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["KycWizardAuthGuard"]],
    },
    {
        path: 'ubo',
        component: _ubo_wizard_component__WEBPACK_IMPORTED_MODULE_6__["UboWizardComponent"],
    },
];
let KycWizardRoutingModule = class KycWizardRoutingModule {
};
KycWizardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_kyc_wizard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["KycWizardAuthGuard"]],
    })
], KycWizardRoutingModule);



/***/ }),

/***/ "yeWx":
/*!*****************************************************!*\
  !*** ./src/app/common/services/basis-id.service.ts ***!
  \*****************************************************/
/*! exports provided: BasisIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasisIdService", function() { return BasisIdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let BasisIdService = class BasisIdService {
    constructor() {
        this.onSuccess = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onError = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    init() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
            if (!window.BAS) {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.src = `https://api.basisid.com/assets/js/widget.multi.js`;
                script.addEventListener('load', () => {
                    subscriber.next();
                    subscriber.complete();
                });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                subscriber.next();
                subscriber.complete();
            }
        });
    }
    loadWidget(options) {
        window.BAS.AS.initFrame({
            key: options.key,
            bas_gw: 'https://api.basisid.com/',
            container_id: 'bas-widget-container',
            ui: {
                width: '100%',
                height: '705px',
                style: '',
                mobile_height: 'auto',
            },
            options: options.invite
                ? {
                    invite: options.invite,
                }
                : {
                    api_form_token: options.formToken,
                },
            events: {
                onManualCheck: (result) => {
                    if (result.status === 'ok') {
                        this.onSuccess.next();
                    }
                    else {
                        this.onError.next();
                    }
                },
            },
        });
        window.BAS.AS.showWidget();
    }
};
BasisIdService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], BasisIdService);



/***/ })

}]);
//# sourceMappingURL=default~embedded-embedded-module~kyc-wizard-kyc-wizard-module.js.map