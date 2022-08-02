(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-cards-user-cards-module"],{

/***/ "+A+G":
/*!**************************************************!*\
  !*** ./src/app/user-cards/user-cards.service.ts ***!
  \**************************************************/
/*! exports provided: UserCardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardsService", function() { return UserCardsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");





let UserCardsService = class UserCardsService {
    constructor(http, session) {
        this.http = http;
        this.session = session;
        this.cardsCount$ = this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(user => this.http
            .head(`/users/${user.id}/cards`, {
            observe: 'response',
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response.headers && response.headers.has('x-total-count')
            ? response.headers.get('x-total-count')
            : '0'))));
        this.cardOrdersCount$ = this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(user => this.http
            .head(`/users/${user.id}/card-orders`, {
            observe: 'response',
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response.headers && response.headers.has('x-total-count')
            ? response.headers.get('x-total-count')
            : '0'))));
    }
};
UserCardsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
UserCardsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], UserCardsService);



/***/ }),

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

/***/ "K8Ll":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-cards/card-activation/card-activation.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-page\">\n    <div class=\"row justify-content-between align-items-center pb-2\">\n        <div class=\"col-auto\">\n            <h5 class=\"mb-0\">{{ 'common.cards' | translate }}</h5>\n        </div>\n        <div class=\"col-auto d-flex justify-content-end\">\n            <ol class=\"breadcrumb px-0\">\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/cards']\">{{ 'common.cards' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item active\">{{ 'common.activate' | translate }}</li>\n            </ol>\n        </div>\n    </div>\n    <div class=\"row mb-3\">\n        <div class=\"col-lg-12 offset-lg-6\">\n            <section class=\"card mb-3\">\n                <div class=\"card-header\">\n                    <h5 class=\"mb-0\">{{ 'common.activate-card' | translate }}</h5>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"callout callout-primary mt-0\">\n                        <h6 class=\"text-info mb-0\">{{ 'common.follow-these-instructions' | translate }}</h6>\n                        <p class=\"mb-0\">{{ 'common.enter-4-digits' | translate }}</p>\n                    </div>\n                    <form\n                        class=\"form-validation\"\n                        [ngClass]=\"{ 'ng-submitted': cardActivationForm.submitted }\"\n                        #cardActivationForm=\"ngForm\"\n                        (ngSubmit)=\"submit()\"\n                        autocomplete=\"false\"\n                        novalidate\n                    >\n                        <div class=\"form-group\">\n                            <label class=\"font-md\" for=\"last4Digits\">{{ 'common.last-4-digits' | translate }}</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-lg\"\n                                [(ngModel)]=\"activation.last4Digits\"\n                                id=\"last4Digits\"\n                                name=\"last4Digits\"\n                                #last4Digits=\"ngModel\"\n                                required\n                            />\n                            <div *ngIf=\"last4Digits.invalid && (cardActivationForm.submitted || last4Digits.dirty)\" class=\"error-messages\">\n                                <div class=\"form-control-feedback\" *ngIf=\"last4Digits?.errors?.required\">\n                                    {{ 'common.this-is-required' | translate }}\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"font-md\" for=\"pin\">PIN</label>\n                            <input\n                                type=\"password\"\n                                class=\"form-control form-control-lg\"\n                                [(ngModel)]=\"activation.pin\"\n                                id=\"pin\"\n                                name=\"pin\"\n                                #pin=\"ngModel\"\n                                pattern=\"^[0-9]+$\"\n                                minlength=\"6\"\n                                maxlength=\"6\"\n                                required\n                            />\n                            <div *ngIf=\"pin.invalid && (cardActivationForm.submitted || pin.dirty)\" class=\"error-messages\">\n                                <div class=\"form-control-feedback\" *ngIf=\"pin?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                                <div class=\"form-control-feedback\" *ngIf=\"pin?.errors?.pattern\">{{ 'common.only-digits-allowed' | translate }}</div>\n                                <div class=\"form-control-feedback\" *ngIf=\"pin?.errors?.minlength\">{{ 'common.must-six-digits' | translate }}</div>\n                                <div class=\"form-control-feedback\" *ngIf=\"pin?.errors?.maxlength\">{{ 'common.cannot-be-longer' | translate }}</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"font-md\" for=\"pin\">{{ 'common.repeat-pin' | translate }}</label>\n                            <input\n                                type=\"password\"\n                                class=\"form-control form-control-lg\"\n                                [(ngModel)]=\"repeatedPin\"\n                                id=\"repeatedPin\"\n                                name=\"repeatedPin\"\n                                #repeatedPinInput=\"ngModel\"\n                                pattern=\"^[0-9]+$\"\n                                minlength=\"6\"\n                                maxlength=\"6\"\n                                [matchPassword]=\"activation.pin\"\n                                required\n                            />\n                            <div *ngIf=\"repeatedPinInput.invalid && (cardActivationForm.submitted || repeatedPinInput.dirty)\" class=\"error-messages\">\n                                <div class=\"form-control-feedback\" *ngIf=\"repeatedPinInput?.errors?.required\">\n                                    {{ 'common.this-is-required' | translate }}\n                                </div>\n                                <div class=\"form-control-feedback\" *ngIf=\"repeatedPinInput?.errors?.pattern\">\n                                    {{ 'common.only-digits-allowed' | translate }}\n                                </div>\n                                <div class=\"form-control-feedback\" *ngIf=\"repeatedPinInput?.errors?.minlength\">\n                                    {{ 'common.must-six-digits' | translate }}\n                                </div>\n                                <div class=\"form-control-feedback\" *ngIf=\"repeatedPinInput?.errors?.maxlength\">\n                                    {{ 'common.cannot-be-longer' | translate }}\n                                </div>\n                                <div class=\"form-control-feedback\" *ngIf=\"repeatedPinInput?.errors?.matchPassword\">\n                                    {{ 'common.pin-do-not-match' | translate }}\n                                </div>\n                            </div>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n                            {{ 'common.activate-card' | translate }}\n                        </button>\n                    </form>\n                </div>\n            </section>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "KS1h":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-cards/card-order/card-order.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-page\">\n    <div class=\"row justify-content-between align-items-center pb-2\">\n        <div class=\"col-auto\">\n            <h5 class=\"mb-0\">{{ 'common.cards' | translate }}</h5>\n        </div>\n        <div class=\"col-auto d-flex justify-content-end\">\n            <ol class=\"breadcrumb px-0\">\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/cards']\">{{ 'common.cards' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item active\">{{ 'common.order' | translate }}</li>\n            </ol>\n        </div>\n    </div>\n</div>\n<div class=\"container e2e-card-order\">\n    <div class=\"row\">\n        <div class=\"col d-flex justify-content-center\">\n            <div class=\"card max-width-lg\">\n                <div class=\"card-header\">\n                    <h5 class=\"text-center mb-0\">\n                        {{ 'common.apply-for' | translate }} {{ displayName }}\n                        {{ appName === 'sgpmx' ? (cardProgram?.name === 'Gold' ? 'Elite' : 'Pro') : 'Card' }}\n                    </h5>\n                </div>\n                <div class=\"card-body\">\n                    <card-dummy\n                        [backgroundImage]=\"digitalCardArtWorkUrl\"\n                        [card]=\"{ maskedPan: '1234 56** **** 5432' }\"\n                        [isLoading]=\"isLoading\"\n                    ></card-dummy>\n                    <form\n                        #cardOrderForm=\"ngForm\"\n                        [ngClass]=\"{ 'ng-submitted': cardOrderForm.submitted }\"\n                        (ngSubmit)=\"submit()\"\n                        autocomplete=\"false\"\n                        novalidate\n                    >\n                        <h5 class=\"text-center mb-2 font-lg\" [hidden]=\"item.transaction.fixedFee === null\">\n                            <ng-container *ngIf=\"!isFree(); else free\">\n                                {{ appName === 'sgpmx' ? 'Annual Fee inclusive of 7% GST' : 'One-Time' }} {{ 'common.fee' | translate }}\n                                <span class=\"text-primary font-weight-bold\">\n                                    {{ item.transaction.fixedFee | amount: item.transaction.currency?.decimalPlaces }}\n                                    {{ item.transaction.currency?.code }}\n                                </span>\n                            </ng-container>\n                            <ng-template #free>\n                                {{ 'common.apply-for' | translate }} <b>{{ 'common.free' | translate | lowercase }}</b> {{ 'common.now' | translate }}\n                            </ng-template>\n                        </h5>\n                        <h5 class=\"text-danger mb-3 text-center\" *ngIf=\"item.transaction.fixedFee === null\">\n                            {{ 'common.out-of-stock' | translate }}\n                        </h5>\n                        <p class=\"text-center\" *ngIf=\"appName !== 'sgpmx'; else sgpmxContent\">\n                            {{ 'common.simple-safe' | translate }} {{ item.type !== 'physical' ? 'of' : 'of ATMs and' }}\n                            {{ 'common.store-around-globe' | translate: { value: displayName } }}\n                            {{ appName === 'sgpmx' ? '' : ('common.at-annual-cost' | translate) }} {{ 'common.now' | translate }}.\n                        </p>\n                        <ng-template #sgpmxContent>\n                            <div class=\"text-center w-75 m-auto mb-3\">\n                                <hr />\n                                <h5 class=\"text-primary font-weight-bold\">LIMITED TIME OFFER</h5>\n                                <p class=\"text-primary\">\n                                    Sign up for your Stacker Market {{ cardProgram?.name === 'Gold' ? 'Elite' : 'Pro' }} account today and receive\n                                    200.00 USD worth of silver in your account.\n                                </p>\n                                <hr />\n                                <p>Stacker Market {{ cardProgram?.name === 'Gold' ? 'Elite' : 'Pro' }} includes:</p>\n                                <p>\n                                    1. A physical or virtual multi-currency prepaid/debit card that is widely accepted by millions of ATMs, stores,\n                                    and across the internet.*\n                                </p>\n                                <p>2. A physical mailing address in Singapore.</p>\n                                <p>\n                                    3. Preferred rates rates when onboarding existing metals or redeeming your Stacker Market allocated ounces for\n                                    physical metals.\n                                </p>\n                                <br />\n                                <p>*ATM option for physical cards only. Virtual card option is available for Androids devices only.</p>\n                            </div>\n                        </ng-template>\n                        <div class=\"alert alert-warning\" *ngIf=\"isCardOrderDisabled()\">\n                            {{ 'common.card-orders-unavailable' | translate }}\n                        </div>\n                        <ng-container *ngIf=\"user$ | async; let user\">\n                            <div class=\"form-group\">\n                                <label for=\"type\">{{ 'common.card-type' | translate }}</label>\n                                <ng-select\n                                    [items]=\"types\"\n                                    [placeholder]=\"'common.select-card-type' | translate\"\n                                    name=\"type\"\n                                    id=\"type\"\n                                    [clearable]=\"false\"\n                                    [(ngModel)]=\"item.type\"\n                                    (change)=\"assignFee(); typeChanged$.next()\"\n                                    required\n                                    [disabled]=\"isCardOrderDisabled()\"\n                                >\n                                    <ng-template ng-label-tmp let-item=\"item\">\n                                        <span class=\"text-capitalize\">{{ item }}</span>\n                                    </ng-template>\n                                    <ng-template ng-option-tmp let-item=\"item\">\n                                        <span class=\"text-capitalize\">{{ item }}</span>\n                                    </ng-template>\n                                </ng-select>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"form-group\" [ngClass]=\"!isFree() ? 'col-sm-12' : 'col'\">\n                                    <label for=\"cardHolder\">{{ 'common.name-on-card' | translate }}</label>\n                                    <input\n                                        type=\"text\"\n                                        id=\"cardHolder\"\n                                        name=\"cardHolder\"\n                                        class=\"form-control\"\n                                        [value]=\"userDetails?.firstName + ' ' + userDetails?.lastName\"\n                                        disabled\n                                    />\n                                </div>\n                                <div class=\"form-group col-sm-12\" *ngIf=\"!isFree()\">\n                                    <label for=\"type\">{{ 'common.pay-with' | translate }}</label>\n                                    <currency-select\n                                        [(currency)]=\"item.transaction.currency\"\n                                        [user]=\"user\"\n                                        (currencyChange)=\"assignFee()\"\n                                    ></currency-select>\n                                </div>\n                            </div>\n                            <div class=\"form-group mb-3\" *ngIf=\"item.type === 'physical'\">\n                                <div class=\"d-flex justify-content-between\">\n                                    <label>{{ 'common.shipping-address' | translate }}</label>\n                                </div>\n                                <textarea\n                                    class=\"form-control\"\n                                    [(ngModel)]=\"item.shippingAddress\"\n                                    name=\"shippingAddress\"\n                                    rows=\"4\"\n                                    required\n                                    #shippingAddressField=\"ngModel\"\n                                ></textarea>\n                                <div\n                                    *ngIf=\"shippingAddressField.invalid && (cardOrderForm.submitted || shippingAddressField.dirty)\"\n                                    class=\"error-messages\"\n                                >\n                                    <div class=\"form-control-feedback\" *ngIf=\"shippingAddressField?.errors?.required\">\n                                        {{ 'common.this-is-required' | translate }}\n                                    </div>\n                                </div>\n                                <p class=\"text-muted font-sm mt-1\">{{ 'common.shipping-address-note' | translate }}</p>\n                            </div>\n                            <ng-container *ngIf=\"appName !== 'sgpmx'\">\n                                <div *ngIf=\"item.type === 'physical' && !!cardProgram?.expressDeliveryPrice\" class=\"row\">\n                                    <div class=\"form-group col-sm-12\">\n                                        <div class=\"custom-control custom-radio\">\n                                            <input\n                                                class=\"custom-control-input\"\n                                                type=\"radio\"\n                                                id=\"shippingBatch\"\n                                                name=\"isExpressDelivery\"\n                                                [value]=\"false\"\n                                                [(ngModel)]=\"item.isExpressDelivery\"\n                                            />\n                                            <label class=\"custom-control-label font-md\" for=\"shippingBatch\">\n                                                {{ 'common.batch-delivery' | translate }}\n                                                <p class=\"font-sm\">\n                                                    {{ 'common.batch-delivery-desc' | translate }} <br />\n                                                    <b class=\"text-primary\">FREE</b>\n                                                </p>\n                                            </label>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-sm-12\">\n                                        <div class=\"custom-control custom-radio\">\n                                            <input\n                                                class=\"custom-control-input\"\n                                                type=\"radio\"\n                                                id=\"shippingExpress\"\n                                                name=\"isExpressDelivery\"\n                                                [value]=\"true\"\n                                                [(ngModel)]=\"item.isExpressDelivery\"\n                                            />\n                                            <label class=\"custom-control-label font-md\" for=\"shippingExpress\">\n                                                {{ 'common.express-delivery' | translate }}\n                                                <p class=\"font-sm\">\n                                                    {{ 'common.express-delivery-desc' | translate }} <br />\n                                                    <b class=\"text-primary\">+{{ cardProgram.expressDeliveryPrice | amount: 2 }} USD</b>\n                                                </p>\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-container>\n                            <div class=\"row\">\n                                <div class=\"col\">\n                                    <access-errors></access-errors>\n                                    <button\n                                        type=\"submit\"\n                                        class=\"btn btn-primary btn-lg mb-2 w-100\"\n                                        [ngClass]=\"{ loading: isLoading }\"\n                                        [disabled]=\"\n                                            isLoading ||\n                                            !item.transaction.fixedFee ||\n                                            user.accessErrors.length > 0 ||\n                                            isCardOrderDisabled() ||\n                                            isDisallowMultiple()\n                                        \"\n                                    >\n                                        {{ 'common.apply' | translate }} {{ appName === 'sgpmx' ? '' : ('common.for-card' | translate) }}\n                                    </button>\n                                    <p class=\"text-center text-danger\" *ngIf=\"isDisallowMultiple()\">\n                                        {{ 'common.this-card-program' | translate }}\n                                    </p>\n                                </div>\n                            </div>\n                        </ng-container>\n                        <div class=\"row mt-2\">\n                            <div class=\"col text-center\">\n                                <a href (click)=\"openFeesModal(); $event.preventDefault()\">{{ 'common.view-card-fee-schedule' | translate }}</a>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "PA7w":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-cards/user-cards.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"session.userStream | async; let user\">\n    <div class=\"container pt-page pb-3\">\n        <div class=\"row justify-content-between align-items-center pb-2\">\n            <div class=\"col-auto\">\n                <h5 class=\"mb-0\">{{ 'common.cards' | translate }}</h5>\n            </div>\n            <div class=\"col-auto d-flex justify-content-end\">\n                <ol class=\"breadcrumb px-0\">\n                    <li class=\"breadcrumb-item\">\n                        <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">{{ 'common.cards' | translate }}</li>\n                </ol>\n            </div>\n        </div>\n        <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg col-md-12\">\n                <ul class=\"nav nav-tabs nav-tabs-lg\">\n                    <li class=\"nav-item\">\n                        <a href class=\"nav-link\" [ngClass]=\"{ active: router.isActive('/cards', true) }\" [routerLink]=\"['/cards']\">\n                            {{ 'common.manage-cards' | translate }} ({{ (cardsCount$ | async) || 0 }})\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href class=\"nav-link\" [ngClass]=\"{ active: router.isActive('/cards/orders', true) }\" [routerLink]=\"['/cards/orders']\">\n                            {{ 'common.manage-orders' | translate }} ({{ (cardOrdersCount$ | async) || 0 }})\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col-auto pt-3 pt-md-0\">\n                <button class=\"btn btn-success-air mr-2\" [routerLink]=\"['/cards/activate']\">{{ 'common.activate-card' | translate }}</button>\n                <button class=\"btn btn-primary-air\" [routerLink]=\"['/cards/order']\">\n                    <fa-icon class=\"mr-1\" [icon]=\"faPlus\"></fa-icon> {{ 'common.new-card' | translate }}\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"container e2e-user-invoices\">\n        <div class=\"card\">\n            <div class=\"card-header b-b-0\">{{ 'common.cards' | translate }}</div>\n            <div class=\"table-responsive\">\n                <table class=\"table table-hover table-card\">\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th scope=\"col\">\n                                {{ 'common.card' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['invoicee', 'name']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['invoicee', 'name'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['invoicee', 'name']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'common.status' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['status']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['status'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['status']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'common.created-at' | translate | titlecase }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['createdAt']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['createdAt'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['createdAt']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\"></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <ng-container *ngIf=\"itemsStream | async; let items\">\n                            <ng-container *ngIf=\"items.length === 0; else rows\">\n                                <tr>\n                                    <td class=\"bg-white\" colspan=\"12\">\n                                        <div class=\"mx-auto p-3 mt-2 mb-4 text-center max-width-sm\">\n                                            <img src=\"/img/icons/delivery.svg\" class=\"img-sm mb-2\" />\n                                            <h4 class=\"mb-1\">{{ 'common.order-your-card' | translate }}</h4>\n                                            <p class=\"mb-3 text-gray\">\n                                                {{ 'common.get-your-multi-currency-card-now' | translate: { value: displayName } }}\n                                            </p>\n                                            <button type=\"button\" class=\"btn btn-primary-air btn-lg btn-block\" [routerLink]=\"['/cards/order']\">\n                                                {{ 'common.apply-now' | translate }}\n                                            </button>\n                                        </div>\n                                    </td>\n                                </tr>\n                            </ng-container>\n                            <ng-template #rows>\n                                <tr *ngFor=\"let card of items\" class=\"clickable bg-white\" (click)=\"showCard(card)\">\n                                    <th scope=\"row\">\n                                        <div class=\"d-flex align-items-center\">\n                                            <!-- htmllint attr-bans=\"[]\" -->\n                                            <div class=\"avatar avatar-sm mr-3\">\n                                                <svg\n                                                    class=\"img-avatar\"\n                                                    xmlns=\"http://www.w3.org/2000/svg\"\n                                                    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                                    xml:space=\"preserve\"\n                                                    text-rendering=\"geometricPrecision\"\n                                                    style=\"\n                                                        shape-rendering: geometricPrecision;\n                                                        image-rendering: optimizeQuality;\n                                                        fill-rule: evenodd;\n                                                        clip-rule: evenodd;\n                                                    \"\n                                                    viewBox=\"0 0 120 120\"\n                                                >\n                                                    <g>\n                                                        <rect [style.fill]=\"appColor\" width=\"120\" height=\"120\"></rect>\n                                                        <text\n                                                            font-weight=\"500\"\n                                                            font-size=\"3.25em\"\n                                                            font-family=\"sans-serif\"\n                                                            fill=\"#ffffff\"\n                                                            x=\"50%\"\n                                                            y=\"50%\"\n                                                            text-anchor=\"middle\"\n                                                            dy=\"0.35em\"\n                                                        >\n                                                            {{ card.type[0] | uppercase }}\n                                                        </text>\n                                                    </g>\n                                                </svg>\n                                            </div>\n                                            <!-- htmllint attr-bans=\"$previous\" -->\n                                            <div>\n                                                <div>{{ formatPan(card.maskedPan) }}</div>\n                                                <div class=\"text-muted text-capitalize\">{{ card.type }}</div>\n                                            </div>\n                                        </div>\n                                    </th>\n                                    <td>\n                                        <span\n                                            class=\"text-capitalize label\"\n                                            [ngClass]=\"{\n                                                'label-success': card.status === 'active',\n                                                'label-info': card.status === 'blocked',\n                                                'label-danger': card.status === 'inactive'\n                                            }\"\n                                            >{{ card.status }}</span\n                                        >\n                                    </td>\n                                    <td>{{ card.createdAt | date: 'medium' }}</td>\n                                    <td class=\"action pr-4 text-right\">\n                                        <button type=\"button\" class=\"btn btn-sm btn-primary-air\" (click)=\"showCard(card); $event.stopPropagation()\">\n                                            {{ 'common.view' | translate }}\n                                        </button>\n                                    </td>\n                                </tr>\n                                <tr *ngFor=\"let empty of fill\" class=\"fill\">\n                                    <td colspan=\"12\">\n                                        <div>&nbsp;</div>\n                                        <span>&nbsp;</span>\n                                    </td>\n                                </tr>\n                            </ng-template>\n                        </ng-container>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <footer class=\"table-footer mb-3\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-8\">\n                    <ng-select\n                        [(ngModel)]=\"limit\"\n                        dropdownPosition=\"auto\"\n                        (change)=\"select(1)\"\n                        [items]=\"limitOpts\"\n                        [placeholder]=\"'common.show-entries-per-page' | translate\"\n                        [clearable]=\"false\"\n                        [searchable]=\"false\"\n                        required\n                    >\n                        <ng-template ng-label-tmp let-item=\"item\">{{ 'common.show-entries' | translate: { value: item } }}</ng-template>\n                        <ng-template ng-option-tmp let-item=\"item\">{{ item }} {{ 'common.entries' | translate }}</ng-template>\n                    </ng-select>\n                </div>\n                <div class=\"col-lg-18 col-md-16 d-flex justify-content-center justify-content-md-end mt-3 mt-md-0\">\n                    <ngb-pagination\n                        [(page)]=\"page\"\n                        [collectionSize]=\"count\"\n                        (pageChange)=\"select()\"\n                        [pageSize]=\"limit\"\n                        [maxSize]=\"4\"\n                        [rotate]=\"false\"\n                        [boundaryLinks]=\"true\"\n                    >\n                    </ngb-pagination>\n                </div>\n            </div>\n        </footer>\n    </div>\n</ng-container>\n");

/***/ }),

/***/ "SFP7":
/*!*************************************************!*\
  !*** ./src/app/user-cards/user-cards.module.ts ***!
  \*************************************************/
/*! exports provided: UserCardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardsModule", function() { return UserCardsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_card_dummy_card_dummy_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/card-dummy/card-dummy.module */ "yCW8");
/* harmony import */ var _common_card_view_card_view_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/card-view/card-view.module */ "Er0b");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/common.module */ "a6Df");
/* harmony import */ var _common_payment_payment_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/payment/payment.module */ "qIFn");
/* harmony import */ var _common_transaction_transaction_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/transaction/transaction.module */ "SRhG");
/* harmony import */ var _card_activation_card_activation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card-activation/card-activation.component */ "SyYo");
/* harmony import */ var _card_order_confirmation_card_order_confirmation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-order-confirmation/card-order-confirmation.component */ "txKk");
/* harmony import */ var _card_order_card_order_fees_card_order_fees_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card-order/card-order-fees/card-order-fees.component */ "j6Pq");
/* harmony import */ var _card_order_card_order_terms_card_order_terms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card-order/card-order-terms/card-order-terms.component */ "lCnd");
/* harmony import */ var _card_order_card_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./card-order/card-order.component */ "TxIQ");
/* harmony import */ var _user_card_orders_user_card_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-card-orders/user-card-orders.component */ "SNpy");
/* harmony import */ var _user_cards_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-cards-routing.module */ "zB/a");
/* harmony import */ var _user_cards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-cards.component */ "dAmj");
/* harmony import */ var _user_cards_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-cards.service */ "+A+G");
















let UserCardsModule = class UserCardsModule {
};
UserCardsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _user_cards_component__WEBPACK_IMPORTED_MODULE_14__["UserCardsComponent"],
            _card_order_card_order_component__WEBPACK_IMPORTED_MODULE_11__["CardOrderComponent"],
            _user_card_orders_user_card_orders_component__WEBPACK_IMPORTED_MODULE_12__["UserCardOrdersComponent"],
            _card_order_card_order_terms_card_order_terms_component__WEBPACK_IMPORTED_MODULE_10__["CardOrderTermsComponent"],
            _card_order_card_order_fees_card_order_fees_component__WEBPACK_IMPORTED_MODULE_9__["CardOrderFeesComponent"],
            _card_activation_card_activation_component__WEBPACK_IMPORTED_MODULE_7__["CardActivationComponent"],
            _card_order_confirmation_card_order_confirmation_component__WEBPACK_IMPORTED_MODULE_8__["CardOrderConfirmationComponent"],
        ],
        imports: [
            _common_common_module__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _user_cards_routing_module__WEBPACK_IMPORTED_MODULE_13__["UserCardsRoutingModule"],
            _common_card_dummy_card_dummy_module__WEBPACK_IMPORTED_MODULE_2__["CardDummyModule"],
            _common_payment_payment_module__WEBPACK_IMPORTED_MODULE_5__["PaymentFormModule"],
            _common_transaction_transaction_module__WEBPACK_IMPORTED_MODULE_6__["TransactionModule"],
            _common_card_view_card_view_module__WEBPACK_IMPORTED_MODULE_3__["CardViewModule"],
        ],
        providers: [_user_cards_service__WEBPACK_IMPORTED_MODULE_15__["UserCardsService"]],
    })
], UserCardsModule);



/***/ }),

/***/ "SNpy":
/*!***************************************************************************!*\
  !*** ./src/app/user-cards/user-card-orders/user-card-orders.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserCardOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardOrdersComponent", function() { return UserCardOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_card_orders_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-card-orders.component.html */ "bqM7");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "WE53");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! color */ "aSns");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/services/confirmation.service */ "fTmd");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/list.component */ "aJRI");
/* harmony import */ var _common_services_intercom_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/services/intercom.service */ "rSOl");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");
/* harmony import */ var _user_cards_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../user-cards.service */ "+A+G");

















let UserCardOrdersComponent = class UserCardOrdersComponent extends _common_list_component__WEBPACK_IMPORTED_MODULE_13__["ListComponent"] {
    constructor(http, ngbModal, changeDetector, route, router, session, userCardsService, confirmation, intercom, translate) {
        super(http, ngbModal, changeDetector, route, router, session, confirmation);
        this.intercom = intercom;
        this.translate = translate;
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].displayName;
        this.appColor = color__WEBPACK_IMPORTED_MODULE_9__(getComputedStyle(document.body).getPropertyValue('--primary').trim()).lighten(0.1);
        this.faCreditCardFront = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCreditCardFront"];
        this.faPaperPlane = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPaperPlane"];
        this.defaultLimit = this.limitOpts[0];
        this.cardsCount$ = userCardsService.cardsCount$;
        this.cardOrdersCount$ = userCardsService.cardOrdersCount$;
    }
    find() {
        return this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(user => {
            this.apiUrl = `/users/${user.id}/card-orders`;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["flatMap"])(() => super.find()));
    }
    stateChange() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // do nothing
        });
    }
};
UserCardOrdersComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_15__["SessionService"] },
    { type: _user_cards_service__WEBPACK_IMPORTED_MODULE_16__["UserCardsService"] },
    { type: src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmationService"] },
    { type: _common_services_intercom_service__WEBPACK_IMPORTED_MODULE_14__["IntercomService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
];
UserCardOrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'user-card-orders',
        template: _raw_loader_user_card_orders_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserCardOrdersComponent);



/***/ }),

/***/ "SyYo":
/*!*************************************************************************!*\
  !*** ./src/app/user-cards/card-activation/card-activation.component.ts ***!
  \*************************************************************************/
/*! exports provided: CardActivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardActivationComponent", function() { return CardActivationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_activation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-activation.component.html */ "K8Ll");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/security-check/security-check.service */ "i32w");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/services/toastr.service */ "N/y2");










let CardActivationComponent = class CardActivationComponent {
    constructor(http, toastr, session, router, securityCheckService, translate) {
        this.http = http;
        this.toastr = toastr;
        this.session = session;
        this.router = router;
        this.securityCheckService = securityCheckService;
        this.translate = translate;
        this.activation = {};
        this.isLoading = false;
    }
    submit() {
        if (this.cardActivationForm.invalid) {
            return;
        }
        this.isLoading = true;
        this.securityCheckService.getScopePermission('banking').subscribe(() => {
            this.session.userStream
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(user => this.http.post(`/users/${user.id}/cards/activate`, this.activation)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
                this.isLoading = false;
            }))
                .subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.toastr.success(this.translate.instant('card-activation.card-activated'));
                yield this.router.navigate(['/cards']);
            }));
        });
    }
};
CardActivationComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_7__["SecurityCheckService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
CardActivationComponent.propDecorators = {
    cardActivationForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['cardActivationForm',] }]
};
CardActivationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'card-activation',
        template: _raw_loader_card_activation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardActivationComponent);



/***/ }),

/***/ "TxIQ":
/*!***************************************************************!*\
  !*** ./src/app/user-cards/card-order/card-order.component.ts ***!
  \***************************************************************/
/*! exports provided: CardOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardOrderComponent", function() { return CardOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_order_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-order.component.html */ "KS1h");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_common_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/common.mixin */ "s/H0");
/* harmony import */ var src_app_common_file__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/common/file */ "B1CS");
/* harmony import */ var src_app_common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/common/models/accounting/currency.model */ "/e3T");
/* harmony import */ var src_app_store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/store/currencies/currencies.query */ "4pv/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_no_access_modal_no_access_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/no-access-modal/no-access-modal.component */ "gZSw");
/* harmony import */ var _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/security-check/security-check.service */ "i32w");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");
/* harmony import */ var _card_order_fees_card_order_fees_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./card-order-fees/card-order-fees.component */ "j6Pq");
/* harmony import */ var _card_order_terms_card_order_terms_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./card-order-terms/card-order-terms.component */ "lCnd");





















let CardOrderComponent = class CardOrderComponent {
    constructor(http, session, router, translate, ngbModal, securityCheckService, currenciesQuery) {
        this.http = http;
        this.session = session;
        this.router = router;
        this.translate = translate;
        this.ngbModal = ngbModal;
        this.securityCheckService = securityCheckService;
        this.currenciesQuery = currenciesQuery;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].appName;
        this.item = {
            type: undefined,
            transaction: {},
            currency: {
                code: 'USD',
            },
            isExpressDelivery: false,
        };
        this.isLoading = false;
        this.types = ['physical', 'virtual'];
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].displayName;
        this.typeChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.cardOrderCount = 0;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
    }
    ngOnInit() {
        this.isLoading = true;
        this.user$ = this.session.userStream;
        this.subscriptions.add(this.typeChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(() => {
            var _a;
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('status', 'ne:cancelled');
            if (this.item.type) {
                params.set('type', this.item.type);
            }
            return this.http.head(`/users/${(_a = this.item.user) === null || _a === void 0 ? void 0 : _a.id}/card-orders`, {
                observe: 'response',
                params,
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(response => response && response.headers.has('x-total-count') ? ~~response.headers.get('x-total-count') : 0))
            .subscribe(count => {
            this.cardOrderCount = count;
        }));
        this.session.userStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(user => Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])([
            this.http.get(`/users/${user.id}`),
            this.http.get(`/users/${user.id}/card-program`),
            this.http.get(`/users/${user.id}/details`),
        ])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.isLoading = false;
        }))
            .subscribe(([user, cardProgram, details]) => {
            var _a, _b;
            this.item.shippingAddress = Object(src_app_common_common_mixin__WEBPACK_IMPORTED_MODULE_11__["formatAddressToUSFormat"])(details.address);
            this.userDetails = details;
            this.item.user = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["pick"])(user, 'id');
            this.item.transaction.currency = user.preferredCurrency;
            this.cardProgram = cardProgram;
            const virtualEnabled = (_a = this.cardProgram) === null || _a === void 0 ? void 0 : _a.hasVirtualEnabled;
            const physicalEnabled = (_b = this.cardProgram) === null || _b === void 0 ? void 0 : _b.hasPhysicalEnabled;
            this.types = [];
            if (physicalEnabled) {
                this.types.push('physical');
            }
            if (virtualEnabled) {
                this.types.push('virtual');
            }
            this.item.type = physicalEnabled ? 'physical' : virtualEnabled ? 'virtual' : undefined;
            this.assignFee();
            this.typeChanged$.next();
            if (this.cardProgram.digitalCardArtwork) {
                this.digitalCardArtWorkUrl = Object(src_app_common_file__WEBPACK_IMPORTED_MODULE_12__["buildFileUrl"])(this.cardProgram.digitalCardArtwork);
            }
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    submit() {
        if (!this.cardOrderForm.valid) {
            return;
        }
        if (this.session.user.accessErrors.length > 0) {
            Object(_common_no_access_modal_no_access_modal_component__WEBPACK_IMPORTED_MODULE_16__["openNoAccessModal"])(this.ngbModal, this.session.user.accessErrors[0]);
            return;
        }
        this.subscriptions.add(this.securityCheckService.getScopePermission('banking').subscribe(() => {
            this.ngbModal
                .open(_card_order_terms_card_order_terms_component__WEBPACK_IMPORTED_MODULE_20__["CardOrderTermsComponent"], {
                windowClass: 'modal-primary',
                backdrop: 'static',
            })
                .result.then(terms => {
                this.isLoading = true;
                this.http
                    .post('/card-orders', Object.assign(Object.assign({}, this.item), { transaction: Object(lodash__WEBPACK_IMPORTED_MODULE_8__["pick"])(this.item.transaction, ['currency']), terms: Object(lodash__WEBPACK_IMPORTED_MODULE_8__["pick"])(terms, ['accept', 'versionId', 'name']) }))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
                    this.isLoading = false;
                }))
                    .subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.router.navigate(['/cards/orders']);
                }));
            }, () => undefined);
        }));
    }
    openFeesModal() {
        this.ngbModal.open(_card_order_fees_card_order_fees_component__WEBPACK_IMPORTED_MODULE_19__["CardOrderFeesComponent"], {
            windowClass: 'modal-primary',
            backdrop: 'static',
        });
    }
    assignFee() {
        if (!this.cardProgram || !this.item.transaction.currency) {
            return;
        }
        this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])([
            this.currenciesQuery.selectEntity('USD').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)),
            this.currenciesQuery.selectEntity(this.item.transaction.currency.code).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)),
        ]).subscribe(([usd, transactionCurrency]) => {
            if (!usd || !transactionCurrency) {
                return;
            }
            const { pricePhysical, priceVirtual } = this.cardProgram;
            this.item.transaction.fixedFee = src_app_common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_13__["Currency"].convert(this.item.type === 'physical' ? pricePhysical || '0' : priceVirtual || '0', usd, transactionCurrency);
        }));
    }
    isFree() {
        return !!this.item.transaction.fixedFee && new bignumber_js__WEBPACK_IMPORTED_MODULE_7___default.a(this.item.transaction.fixedFee).isEqualTo(0);
    }
    isDisallowMultiple() {
        if (this.item.type === 'physical') {
            return !this.cardProgram.allowMultiplePhysical && this.cardOrderCount >= 1;
        }
        if (this.item.type === 'virtual') {
            return !this.cardProgram.allowMultipleVirtual && this.cardOrderCount >= 1;
        }
        return false;
    }
    isCardOrderDisabled() {
        var _a, _b;
        return !this.cardProgram || (!((_a = this.cardProgram) === null || _a === void 0 ? void 0 : _a.hasVirtualEnabled) && !((_b = this.cardProgram) === null || _b === void 0 ? void 0 : _b.hasPhysicalEnabled));
    }
};
CardOrderComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_18__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_17__["SecurityCheckService"] },
    { type: src_app_store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_14__["CurrenciesQuery"] }
];
CardOrderComponent.propDecorators = {
    cardOrderForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['cardOrderForm',] }]
};
CardOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'card-order',
        template: _raw_loader_card_order_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardOrderComponent);



/***/ }),

/***/ "bqM7":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-cards/user-card-orders/user-card-orders.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-page pb-3\">\n    <div class=\"row justify-content-between align-items-center pb-2\">\n        <div class=\"col-auto\">\n            <h5 class=\"mb-0\">{{ 'common.cards' | translate }}</h5>\n        </div>\n        <div class=\"col-auto d-flex justify-content-end\">\n            <ol class=\"breadcrumb px-0\">\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item\" [ngClass]=\"{ active: !router.isActive('/cards/orders', false) }\">\n                    <a [routerLink]=\"router.isActive('/cards/orders', false) ? ['/cards'] : []\">{{ 'common.cards' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item active\" *ngIf=\"router.isActive('/cards/orders', false)\">{{ 'common.orders' | translate }}</li>\n            </ol>\n        </div>\n    </div>\n    <div class=\"row justify-content-between align-items-center\">\n        <div class=\"col-lg col-md-12\">\n            <ul class=\"nav nav-tabs nav-tabs-lg\">\n                <li class=\"nav-item\">\n                    <a href class=\"nav-link\" [ngClass]=\"{ active: router.isActive('/cards', true) }\" [routerLink]=\"['/cards']\">\n                        {{ 'common.manage-cards' | translate }} ({{ (cardsCount$ | async) || 0 }})\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a href class=\"nav-link\" [ngClass]=\"{ active: router.isActive('/cards/orders', true) }\" [routerLink]=\"['/cards/orders']\">\n                        {{ 'common.manage-orders' | translate }} ({{ (cardOrdersCount$ | async) || 0 }})\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-auto pt-3 pt-md-0\">\n            <button class=\"btn btn-success-air mr-2\" [routerLink]=\"['/cards/activate']\">{{ 'common.activate-card' | translate }}</button>\n            <button class=\"btn btn-primary-air\" [routerLink]=\"['/cards/order']\">\n                <fa-icon class=\"mr-1\" [icon]=\"faPlus\"></fa-icon> {{ 'common.new-card' | translate }}\n            </button>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"card\">\n        <div class=\"card-header b-b-0\">{{ 'common.orders' | translate }}</div>\n        <div class=\"table-responsive\">\n            <table class=\"table table-hover table-card\">\n                <thead class=\"thead-light\">\n                    <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">\n                            {{ 'common.type' | translate }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['type']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['type'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['type']) }\"\n                            ></fa-icon>\n                        </th>\n                        <th scope=\"col\">\n                            {{ 'common.status' | translate }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['status']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['status'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['status']) }\"\n                            ></fa-icon>\n                        </th>\n                        <th scope=\"col\">{{ 'common.shipping-address' | translate }}</th>\n                        <th scope=\"col\">{{ 'common.tracking-code' | translate }}</th>\n                        <th scope=\"col\">\n                            {{ 'common.created-at' | translate | titlecase }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['createdAt']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['createdAt'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['createdAt']) }\"\n                            ></fa-icon>\n                        </th>\n                        <th scope=\"col\"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container *ngIf=\"itemsStream | async; let items\">\n                        <ng-container *ngIf=\"items.length === 0; else rows\">\n                            <tr>\n                                <td class=\"bg-white\" colspan=\"12\">\n                                    <div class=\"mx-auto p-3 mt-2 mb-4 text-center max-width-sm\">\n                                        <img src=\"/img/icons/delivery.svg\" class=\"img-sm mb-2\" />\n                                        <h4 class=\"mb-1\">{{ 'common.order-your-card' | translate }}</h4>\n                                        <p class=\"mb-3 text-gray\">\n                                            {{ 'common.get-your-multi-currency-card-now' | translate: { value: displayName } }}\n                                        </p>\n                                        <button type=\"button\" class=\"btn btn-primary-air btn-lg btn-block\" [routerLink]=\"['/cards/order']\">\n                                            {{ 'common.apply-now' | translate }}\n                                        </button>\n                                    </div>\n                                </td>\n                            </tr>\n                        </ng-container>\n                        <ng-template #rows>\n                            <tr *ngFor=\"let order of items\" class=\"bg-white\">\n                                <th scope=\"row\">\n                                    <div class=\"d-flex align-items-center\">\n                                        <!-- htmllint attr-bans=\"[]\" -->\n                                        <div class=\"avatar avatar-sm mr-3\">\n                                            <svg\n                                                class=\"img-avatar\"\n                                                xmlns=\"http://www.w3.org/2000/svg\"\n                                                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                                xml:space=\"preserve\"\n                                                text-rendering=\"geometricPrecision\"\n                                                style=\"\n                                                    shape-rendering: geometricPrecision;\n                                                    image-rendering: optimizeQuality;\n                                                    fill-rule: evenodd;\n                                                    clip-rule: evenodd;\n                                                \"\n                                                viewBox=\"0 0 120 120\"\n                                            >\n                                                <g>\n                                                    <rect [style.fill]=\"appColor\" width=\"120\" height=\"120\"></rect>\n                                                    <text\n                                                        font-weight=\"500\"\n                                                        font-size=\"3.25em\"\n                                                        font-family=\"sans-serif\"\n                                                        fill=\"#ffffff\"\n                                                        x=\"50%\"\n                                                        y=\"50%\"\n                                                        text-anchor=\"middle\"\n                                                        dy=\"0.35em\"\n                                                    >\n                                                        {{ order.type[0] | uppercase }}\n                                                    </text>\n                                                </g>\n                                            </svg>\n                                        </div>\n                                        <!-- htmllint attr-bans=\"$previous\" -->\n                                        <div>\n                                            <div [ngbTooltip]=\"tipContent\" placement=\"right\">{{ 'common.multi-currency-card' | translate }}</div>\n                                            <uuid [value]=\"order.id\"></uuid>\n                                            <ng-template #tipContent>\n                                                {{ 'common.paid' | translate }}:\n                                                <ng-container *ngIf=\"order.transaction; else free\">\n                                                    {{ order.transaction?.fixedFee | amount: order.transaction?.currency.decimalPlaces }}\n                                                    {{ order.transaction?.currency.code }}\n                                                </ng-container>\n                                                <ng-template #free> 0.00 USD </ng-template>\n                                            </ng-template>\n                                        </div>\n                                    </div>\n                                </th>\n                                <td>\n                                    <span\n                                        class=\"text-capitalize label\"\n                                        [ngClass]=\"{ 'label-success': order.type === 'physical', 'label-info': order.type === 'virtual' }\"\n                                        >{{ order.type }}</span\n                                    >\n                                </td>\n                                <td>\n                                    <ul class=\"step d-flex flex-nowrap\">\n                                        <li\n                                            class=\"step-item\"\n                                            [ngClass]=\"{\n                                                active: ['pending', 'unconfirmed', 'action-required'].includes(order.status),\n                                                failed: order.status === 'cancelled'\n                                            }\"\n                                        >\n                                            <a class=\"small\">{{\n                                                (order.status === 'cancelled' ? 'common.cancelled' : 'common.requested') | translate\n                                            }}</a>\n                                        </li>\n                                        <li class=\"step-item\" [ngClass]=\"{ active: order.status === 'processing' }\">\n                                            <a class=\"small\">{{ 'common.approved' | translate }}</a>\n                                        </li>\n                                        <li\n                                            class=\"step-item\"\n                                            *ngIf=\"order.type === 'physical'\"\n                                            [ngClass]=\"{ active: order.status === 'completed' && order.card?.status !== 'active' }\"\n                                        >\n                                            <a class=\"small\">{{ 'common.shipped' | translate }}</a>\n                                        </li>\n                                        <li class=\"step-item\" [ngClass]=\"{ active: order.card?.status === 'active' }\">\n                                            <a class=\"small\">{{ 'common.activated' | translate }}</a>\n                                        </li>\n                                    </ul>\n                                </td>\n                                <td>\n                                    <ng-container *ngIf=\"order.type === 'physical'\">\n                                        <div *ngIf=\"order.isExpressDelivery\" class=\"badge badge-success badge-lg mb-1\">\n                                            <fa-icon [icon]=\"faPaperPlane\"></fa-icon> Express\n                                        </div>\n                                        <address class=\"address-input whitespace-pre\">{{ order.shippingAddress }}</address>\n                                    </ng-container>\n                                </td>\n                                <td>\n                                    <ng-container *ngIf=\"order.type === 'physical'; else na\">\n                                        <a\n                                            href=\"{{\n                                                order.isExpressDelivery\n                                                    ? 'https://mydhl.express.dhl/sg/en/tracking.html#/track-by-number'\n                                                    : 'https://www.singpost.com/track-items'\n                                            }}\"\n                                            target=\"_blank\"\n                                            rel=\"noopener\"\n                                        >\n                                            {{ order.trackingCode }}\n                                        </a>\n                                    </ng-container>\n                                    <ng-template #na>\n                                        <span class=\"text-muted\">N/A</span>\n                                    </ng-template>\n                                </td>\n                                <td>{{ order.createdAt | date: 'medium' }}</td>\n                                <td class=\"action pr-4 text-right\">\n                                    <button\n                                        type=\"button\"\n                                        class=\"btn btn-sm btn-danger\"\n                                        *ngIf=\"['pending', 'action-required'].includes(order.status)\"\n                                        (click)=\"\n                                            intercom.startConversation(\n                                                'Hi, I would like to cancel my card order ' + order.id.substring(0, 7) + '. Kindly assist.'\n                                            )\n                                        \"\n                                    >\n                                        {{ 'common.cancel' | translate }}\n                                    </button>\n                                </td>\n                            </tr>\n                            <tr *ngFor=\"let empty of fill\" class=\"fill\">\n                                <td colspan=\"12\">\n                                    <div>&nbsp;</div>\n                                    <span>&nbsp;</span>\n                                </td>\n                            </tr>\n                        </ng-template>\n                    </ng-container>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <footer class=\"table-footer mb-3\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-8\">\n                <ng-select\n                    [(ngModel)]=\"limit\"\n                    dropdownPosition=\"auto\"\n                    (change)=\"select(1)\"\n                    [items]=\"limitOpts\"\n                    [placeholder]=\"'common.show-entries-per-page' | translate\"\n                    [clearable]=\"false\"\n                    [searchable]=\"false\"\n                    required\n                >\n                    <ng-template ng-label-tmp let-item=\"item\">{{ 'common.show-entries' | translate: { value: item } }}</ng-template>\n                    <ng-template ng-option-tmp let-item=\"item\">{{ item }} {{ 'common.entries' | translate }}</ng-template>\n                </ng-select>\n            </div>\n            <div class=\"col-lg-18 col-md-16 d-flex justify-content-center justify-content-md-end mt-3 mt-md-0\">\n                <ngb-pagination\n                    [(page)]=\"page\"\n                    [collectionSize]=\"count\"\n                    (pageChange)=\"select()\"\n                    [pageSize]=\"limit\"\n                    [maxSize]=\"4\"\n                    [rotate]=\"false\"\n                    [boundaryLinks]=\"true\"\n                >\n                </ngb-pagination>\n            </div>\n        </div>\n    </footer>\n</div>\n");

/***/ }),

/***/ "dAmj":
/*!****************************************************!*\
  !*** ./src/app/user-cards/user-cards.component.ts ***!
  \****************************************************/
/*! exports provided: UserCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardsComponent", function() { return UserCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_cards_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-cards.component.html */ "PA7w");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! color */ "aSns");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_card_view_card_view_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/card-view/card-view.page */ "nO15");
/* harmony import */ var _common_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/list.component */ "aJRI");
/* harmony import */ var _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/services/confirmation.service */ "fTmd");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");
/* harmony import */ var _user_cards_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-cards.service */ "+A+G");
















let UserCardsComponent = class UserCardsComponent extends _common_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"] {
    constructor(http, ngbModal, changeDetector, route, router, session, userCardsService, confirmation, modalController, translate) {
        super(http, ngbModal, changeDetector, route, router, session, confirmation);
        this.modalController = modalController;
        this.translate = translate;
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].displayName;
        this.appColor = color__WEBPACK_IMPORTED_MODULE_8__(getComputedStyle(document.body).getPropertyValue('--primary').trim()).lighten(0.1);
        this.defaultLimit = this.limitOpts[0];
        this.cardsCount$ = userCardsService.cardsCount$;
        this.cardOrdersCount$ = userCardsService.cardOrdersCount$;
    }
    find() {
        return this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(user => {
            this.apiUrl = `/users/${user.id}/cards`;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(() => super.find()));
    }
    showCard(card) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _common_card_view_card_view_page__WEBPACK_IMPORTED_MODULE_11__["CardViewPage"],
                componentProps: {
                    item: card,
                },
            });
            return yield modal.present();
        });
    }
    formatPan(pan) {
        return `${pan.slice(0, 4)} ${pan.slice(4, 8)} ${pan.slice(8, 12)} ${pan.slice(12)}`;
    }
};
UserCardsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"] },
    { type: _user_cards_service__WEBPACK_IMPORTED_MODULE_15__["UserCardsService"] },
    { type: _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
UserCardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'user-cards',
        template: _raw_loader_user_cards_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserCardsComponent);



/***/ }),

/***/ "j6Pq":
/*!************************************************************************************!*\
  !*** ./src/app/user-cards/card-order/card-order-fees/card-order-fees.component.ts ***!
  \************************************************************************************/
/*! exports provided: CardOrderFeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardOrderFeesComponent", function() { return CardOrderFeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_order_fees_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-order-fees.component.html */ "uosj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




let CardOrderFeesComponent = class CardOrderFeesComponent {
    constructor(modal) {
        this.modal = modal;
    }
};
CardOrderFeesComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
];
CardOrderFeesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'card-order-fees',
        template: _raw_loader_card_order_fees_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardOrderFeesComponent);



/***/ }),

/***/ "uosj":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-cards/card-order/card-order-fees/card-order-fees.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ 'common.card' | translate }} - {{ 'common.fee-schedule' | translate | titlecase }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"modal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-body card-terms-container text-body\">\n    <card-fee-schedule></card-fee-schedule>\n</div>\n<div class=\"modal-footer flex-column flex-md-row justify-content-center justify-content-md-end\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-default btn-w-sm\" (click)=\"modal.dismiss()\">{{ 'common.close' | translate }}</button>\n    </div>\n</div>\n");

/***/ }),

/***/ "zB/a":
/*!*********************************************************!*\
  !*** ./src/app/user-cards/user-cards-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UserCardsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardsRoutingModule", function() { return UserCardsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_guards_permission_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/guards/permission.guard */ "UPfJ");
/* harmony import */ var _common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/logged-in.auth-guard */ "59Zp");
/* harmony import */ var _card_activation_card_activation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-activation/card-activation.component */ "SyYo");
/* harmony import */ var _card_order_card_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-order/card-order.component */ "TxIQ");
/* harmony import */ var _user_card_orders_user_card_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-card-orders/user-card-orders.component */ "SNpy");
/* harmony import */ var _user_cards_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-cards.component */ "dAmj");









const routes = [
    {
        path: '',
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInAuthGuard"], _common_guards_permission_guard__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]],
        data: {
            permissions: ['cards'],
        },
        children: [
            {
                path: '',
                component: _user_cards_component__WEBPACK_IMPORTED_MODULE_8__["UserCardsComponent"],
            },
            {
                path: 'orders',
                component: _user_card_orders_user_card_orders_component__WEBPACK_IMPORTED_MODULE_7__["UserCardOrdersComponent"],
            },
            {
                path: 'order',
                component: _card_order_card_order_component__WEBPACK_IMPORTED_MODULE_6__["CardOrderComponent"],
            },
            {
                path: 'activate',
                component: _card_activation_card_activation_component__WEBPACK_IMPORTED_MODULE_5__["CardActivationComponent"],
            },
        ],
    },
];
let UserCardsRoutingModule = class UserCardsRoutingModule {
};
UserCardsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserCardsRoutingModule);



/***/ })

}]);
//# sourceMappingURL=user-cards-user-cards-module.js.map