(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~organization-organization-module~transfer-transfer-module"],{

/***/ "/48k":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transfer/sgpmx-transfer-form.component/sgpmx-transfer-form.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"session.userStream | async; let user\">\n    <div class=\"btn-view-templates\">\n        <a href (click)=\"$event.preventDefault(); openContactBook()\" class=\"font-lg\">{{ 'common.view-contacts' | translate }} ›</a>\n    </div>\n    <form\n        class=\"form-validation\"\n        #transferForm=\"ngForm\"\n        [ngClass]=\"{ 'ng-submitted': transferForm.submitted }\"\n        (ngSubmit)=\"submit()\"\n        autocomplete=\"false\"\n        novalidate\n    >\n        <div class=\"form-group\">\n            <div class=\"d-flex justify-content-between\">\n                <label class=\"font-md\" for=\"recipient\"\n                    >{{ 'common.account-number' | translate }} / {{ 'common.email' | translate }}\n                    <a\n                        href\n                        (click)=\"$event.preventDefault()\"\n                        [ngbPopover]=\"recipientContent\"\n                        [popoverTitle]=\"recipientTitle\"\n                        triggers=\"mouseenter:mouseleave\"\n                        ><fa-icon [icon]=\"faQuestionCircle\"></fa-icon></a\n                ></label>\n            </div>\n            <input\n                type=\"text\"\n                class=\"form-control form-control-lg\"\n                id=\"recipient\"\n                name=\"recipient\"\n                [(ngModel)]=\"recipient\"\n                (ngModelChange)=\"onRecipientChange()\"\n                #recipientInput=\"ngModel\"\n                recipientValidator\n                required\n                emptyToNull\n            />\n            <div *ngIf=\"recipientInput.invalid && (transferForm.submitted || recipientInput.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"recipientInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                <div class=\"form-control-feedback\" *ngIf=\"recipientInput?.errors?.invalidRecipient\">Invalid recipient.</div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-24\">\n                <div class=\"d-flex justify-content-between\">\n                    <label class=\"font-md\" for=\"currency\">Precious Metal Type</label>\n                </div>\n                <currency-select\n                    [(currency)]=\"transaction.currency\"\n                    [user]=\"user\"\n                    [isLarge]=\"true\"\n                    [currencyTypes]=\"['metal']\"\n                    (currencyChange)=\"onCurrencyChange()\"\n                    [required]=\"true\"\n                    [transferable]=\"true\"\n                    #currencySelect\n                >\n                </currency-select>\n                <div\n                    *ngIf=\"currencySelect.currencyInput.invalid && (transferForm.submitted || currencySelect.currencyInput.dirty)\"\n                    class=\"error-messages\"\n                >\n                    <div class=\"form-control-feedback\" *ngIf=\"currencySelect.currencyInput?.errors?.required\">This is required.</div>\n                </div>\n            </div>\n            <div class=\"form-group col-24\">\n                <div class=\"d-flex justify-content-between\">\n                    <div class=\"d-flex\">\n                        <label class=\"font-md\">\n                            {{ isDefineByValue ? 'Value' : 'Troy Ounce' }}\n                        </label>\n                    </div>\n                    <a href (click)=\"useMaxAmount(); $event.preventDefault()\">{{ 'common.use-max' | translate }}</a>\n                </div>\n                <ng-container *ngIf=\"!isDefineByValue; else defineByValueInput\">\n                    <div class=\"input-group\">\n                        <input\n                            type=\"number\"\n                            class=\"form-control form-control-lg\"\n                            id=\"amount\"\n                            name=\"amount\"\n                            placeholder=\"0.00\"\n                            [(ngModel)]=\"transaction.amount\"\n                            [min]=\"getMinimum()\"\n                            [max]=\"getMaximum()\"\n                            #amount=\"ngModel\"\n                            required\n                        />\n                        <div class=\"input-group-append\">\n                            <button\n                                class=\"btn btn-default btn-lg\"\n                                type=\"button\"\n                                (click)=\"isDefineByValue = true; calculateValueInUsd(); $event.preventDefault()\"\n                                [ngbTooltip]=\"'common.define-amount-in-usd' | translate\"\n                            >\n                                {{ transaction.currency?.code }}\n                            </button>\n                        </div>\n                    </div>\n                    <div *ngIf=\"amount.invalid && (transferForm.submitted || amount.dirty)\" class=\"error-messages\">\n                        <div class=\"form-control-feedback\" *ngIf=\"amount?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                        <div class=\"form-control-feedback\" *ngIf=\"amount?.errors?.min\">\n                            Minimum amount is\n                            {{ getMinimum() + '' || '0' | amount: transaction.currency?.decimalPlaces }}\n                            {{ transaction.currency?.code }}.\n                        </div>\n                        <div class=\"form-control-feedback\" *ngIf=\"amount?.errors?.max\">\n                            Maximum amount is\n                            {{ getMaximum() + '' || '0' | amount: transaction.currency?.decimalPlaces }}\n                            {{ transaction.currency?.code }}.\n                        </div>\n                    </div>\n                </ng-container>\n                <ng-template #defineByValueInput>\n                    <div class=\"input-group\">\n                        <input\n                            type=\"number\"\n                            class=\"form-control form-control-lg\"\n                            id=\"valueInUsd\"\n                            name=\"valueInUsd\"\n                            placeholder=\"0.00\"\n                            [(ngModel)]=\"valueInUsd\"\n                            (ngModelChange)=\"calculateAmount()\"\n                            [min]=\"getMinimum()\"\n                            [max]=\"getMaximum()\"\n                            #valueInUsdInput=\"ngModel\"\n                            required\n                        />\n                        <div class=\"input-group-append\">\n                            <button\n                                class=\"btn btn-default btn-lg\"\n                                type=\"button\"\n                                (click)=\"isDefineByValue = false; calculateValueInUsd(); $event.preventDefault()\"\n                                [ngbTooltip]=\"'common.define-amount-in-troy-ounce' | translate\"\n                            >\n                                USD\n                            </button>\n                        </div>\n                    </div>\n                    <div *ngIf=\"valueInUsdInput.invalid && (transferForm.submitted || valueInUsdInput.dirty)\" class=\"error-messages\">\n                        <div class=\"form-control-feedback\" *ngIf=\"valueInUsdInput?.errors?.required\">This is required.</div>\n                        <div class=\"form-control-feedback\" *ngIf=\"valueInUsdInput?.errors?.min\">\n                            Minimum amount is\n                            {{ getMinimum() || '0' | amount: 2 }}\n                            USD.\n                        </div>\n                        <div class=\"form-control-feedback\" *ngIf=\"valueInUsdInput?.errors?.max\">\n                            Maximum amount is\n                            {{ getMaximum() || '0' | amount: 2 }}\n                            USD\n                        </div>\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"font-md\" for=\"reference\">{{ 'common.reference' | translate }} <small class=\"text-muted\">(optional)</small></label>\n            <input type=\"text\" class=\"form-control form-control-lg\" id=\"reference\" name=\"reference\" [(ngModel)]=\"transaction.reference\" emptyToNull />\n        </div>\n        <div class=\"form-group\">\n            <label class=\"font-md\" for=\"comment\">{{ 'common.comment' | translate }} <small class=\"text-muted\">(optional)</small></label>\n            <textarea\n                class=\"form-control form-control-lg\"\n                id=\"comment\"\n                name=\"comment\"\n                [(ngModel)]=\"transaction.comment\"\n                rows=\"3\"\n                emptyToNull\n            ></textarea>\n        </div>\n        <div class=\"form-group\">\n            <a href class=\"d-block mb-2\" (click)=\"isUploadCollapsed = !isUploadCollapsed; $event.preventDefault()\">\n                {{ isUploadCollapsed ? '+ Attach' : '- Remove' }} file\n            </a>\n            <dropzone [files]=\"files\" [ngbCollapse]=\"isUploadCollapsed\"></dropzone>\n        </div>\n        <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary mb-2\">{{ 'common.submit' | translate }}</button>\n    </form>\n    <ng-template #recipientTitle> How does it work? </ng-template>\n    <ng-template #recipientContent>\n        <p>You can send Gold/Silver to other {{ displayName }} account holders using their account number or email address.</p>\n        <p>\n            Ask your beneficiary for their account number or email address. Account number can be found on the dashboard under\n            <b>Account information</b>.\n        </p>\n    </ng-template>\n</ng-container>\n");

/***/ }),

/***/ "3L2Q":
/*!************************************************!*\
  !*** ./src/app/transfer/transfer.component.ts ***!
  \************************************************/
/*! exports provided: TransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferComponent", function() { return TransferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_transfer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./transfer.component.html */ "9CI6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");
/* harmony import */ var _store_fees_fees_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/fees/fees.query */ "80k1");
/* harmony import */ var _store_fees_fees_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/fees/fees.service */ "jwRq");









let TransferComponent = class TransferComponent {
    constructor(route, session, feesQuery, feesService) {
        this.route = route;
        this.session = session;
        this.feesQuery = feesQuery;
        this.feesService = feesService;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appName;
        this.fixedRecipient = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnInit() {
        if (this.route.snapshot.queryParamMap.has('method')) {
            this.resetTransaction(this.route.snapshot.queryParamMap.get('method'));
        }
        this.route.queryParamMap.subscribe(params => {
            this.resetTransaction(params.get('method') || 'send');
        });
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appName === 'sgpmx') {
            this.feesService.fetch();
        }
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    getFee(type) {
        if (!this.transaction.currency) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }
        return this.feesQuery.findByPrimaryAttributes({
            type,
            method: 'internal',
            currencyCode: this.transaction.currency.code,
        });
    }
    resetTransaction(method) {
        switch (method) {
            default:
                this.transaction = {
                    type: 'transfer',
                    method: 'internal',
                };
                break;
        }
    }
};
TransferComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] },
    { type: _store_fees_fees_query__WEBPACK_IMPORTED_MODULE_7__["FeesQuery"] },
    { type: _store_fees_fees_service__WEBPACK_IMPORTED_MODULE_8__["FeesService"] }
];
TransferComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'transfer',
        template: _raw_loader_transfer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TransferComponent);



/***/ }),

/***/ "7Fps":
/*!*******************************************************!*\
  !*** ./src/app/common/models/accounting/fee.model.ts ***!
  \*******************************************************/
/*! exports provided: feeTypeMap, feeMethodMap, Fee, getFeeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feeTypeMap", function() { return feeTypeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feeMethodMap", function() { return feeMethodMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fee", function() { return Fee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeeType", function() { return getFeeType; });
/* harmony import */ var _core_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/user.model */ "vk+e");
/* harmony import */ var _beneficiary_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beneficiary.model */ "OFFW");
/* harmony import */ var _currency_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency.model */ "/e3T");



const feeTypeMap = {
    'account-fee': 'Account Fee',
    'card-order': 'Card Order Fee',
    'fx-spread': 'Exchange Rate Spread',
    deposit: 'Deposit',
    withdrawal: 'Withdrawal',
    transfer: 'Transfer',
    conversion: 'Conversion',
    investment: 'Investment',
    trade: 'Trade',
    redeem: 'Redeem',
    service: 'Buy & Sell',
    gst: 'GST',
    payment: 'Payment',
};
const feeMethodMap = {
    internal: 'Internal',
    card: 'Topup Card',
    crypto: 'Crypto',
    local: 'LOCAL',
    swift: 'SWIFT',
};
class Fee {
    constructor(data) {
        if (data) {
            Object.assign(this, data);
            if (data.currency) {
                this.currency = new _currency_model__WEBPACK_IMPORTED_MODULE_2__["Currency"](data.currency);
            }
            if (data.user) {
                this.user = new _core_user_model__WEBPACK_IMPORTED_MODULE_0__["User"](data.user);
            }
            if (data.beneficiary) {
                this.beneficiary = new _beneficiary_model__WEBPACK_IMPORTED_MODULE_1__["Beneficiary"](data.beneficiary);
            }
        }
    }
    isGlobal() {
        return this.user === null;
    }
    isFallback(currency) {
        return this.currency.code !== currency.code;
    }
    isAssociationFee(user) {
        return !!this.user && !!user && this.user.id !== user.id;
    }
    hasFixedFee() {
        return !['fx-spread', 'service', 'gst'].includes(this.type);
    }
    hasRelativeFee() {
        return !['account-fee'].includes(this.type);
    }
    hasMaxOrMin() {
        return !['account-fee', 'fx-spread'].includes(this.type);
    }
    hasMinValue() {
        return ['transfer', 'deposit', 'withdrawal'].includes(this.type);
    }
}
function getFeeType(transactionType) {
    const feeMap = {
        deposit: 'deposit',
        withdrawal: 'withdrawal',
        transfer: 'transfer',
        conversion: 'conversion',
        investment: 'investment',
        trade: 'trade',
        redeem: 'redeem',
        payment: 'payment',
        // Use transfer fee for invoice
        invoice: 'transfer',
        'invoice-p2p': 'transfer',
        'card-order': 'card-order',
        'account-fee': 'account-fee',
    };
    return feeMap[transactionType];
}


/***/ }),

/***/ "9CI6":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transfer/transfer.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"session.userStream | async; let user\">\n    <div class=\"container pt-page pt-4 e2e-transfer\">\n        <div class=\"row mb-3\">\n            <div class=\"col-lg-12\">\n                <section class=\"card mb-3\">\n                    <div class=\"card-header\">\n                        <h5 class=\"mb-0\">{{ 'common.transfer' | translate }}</h5>\n                    </div>\n                    <div class=\"card-body\">\n                        <ng-container *ngIf=\"appName !== 'sgpmx'; else sgpmxTransfer\">\n                            <transfer-form [(transaction)]=\"transaction\"></transfer-form>\n                        </ng-container>\n                        <ng-template #sgpmxTransfer>\n                            <sgpmx-transfer-form [(transaction)]=\"transaction\"></sgpmx-transfer-form>\n                        </ng-template>\n                    </div>\n                </section>\n                <div class=\"callout callout-danger\" *ngIf=\"appName === 'sgpmx'\">\n                    <h6>{{ 'common.notice' | translate }}</h6>\n                    <p>\n                        <b>Each transfer</b> is subject to a fee of\n                        <ng-container *ngIf=\"getFee('transfer') | async; else noFee; let fee\">\n                            <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                        </ng-container>\n                        of transferred value of precious metals. The fees will be deducted from your available account balance. (fees are subject to\n                        <ng-container *ngIf=\"getFee('gst') | async; else noFee; let fee\">\n                            <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                        </ng-container>\n                        GST)\n                    </p>\n                    <ng-template #noFee>\n                        <span class=\"text-success\">FREE</span>\n                    </ng-template>\n                    <ng-template #withFee let-fee=\"fee\">\n                        <span>\n                            <span *ngIf=\"fee.relative && fee.fixed\"> {{ fee.fixed | amount }} USD + {{ fee.relative | percent: '1.2' }}</span>\n                            <span *ngIf=\"fee.relative && !fee.fixed\">{{ fee.relative | percent: '1.2' }}</span>\n                            <span *ngIf=\"!fee.relative && fee.fixed\"> {{ fee.fixed | amount }} USD</span>\n                        </span>\n                    </ng-template>\n                </div>\n            </div>\n            <div class=\"col-lg-12 d-none d-lg-block\">\n                <div class=\"transation-slip-container max-width-sm\">\n                    <transaction-slip [transaction]=\"transaction\"></transaction-slip>\n                    <p class=\"text-center text-muted pb-4\">\n                        {{ 'common.learn-more-about-our-fees' | translate }} <a [routerLink]=\"['/fees']\">{{ 'common.here' | translate }}</a>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>\n");

/***/ }),

/***/ "OcI6":
/*!*****************************************************************************************!*\
  !*** ./src/app/transfer/sgpmx-transfer-form.component/sgpmx-transfer-form.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SgpmxTransferFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SgpmxTransferFormComponent", function() { return SgpmxTransferFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sgpmx_transfer_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sgpmx-transfer-form.component.html */ "/48k");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "WE53");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_currencies_currencies_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/store/currencies/currencies.service */ "QRBR");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_contact_book_contact_book_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/contact-book/contact-book.component */ "AqLL");
/* harmony import */ var _common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/models/accounting/currency.model */ "/e3T");
/* harmony import */ var _common_payment_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/payment/payment-confirmation/payment-confirmation.component */ "n93W");
/* harmony import */ var _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/services/confirmation.service */ "fTmd");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");
/* harmony import */ var _common_transaction_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/transaction/transaction-view/transaction-view.component */ "vOIs");
/* harmony import */ var _store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../store/currencies/currencies.query */ "4pv/");
/* harmony import */ var _store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../store/wallets/wallets.service */ "hOWo");





















let SgpmxTransferFormComponent = class SgpmxTransferFormComponent {
    constructor(session, currenciesQuery, http, ngbModal, confirmation, walletsService, currenciesService, translate) {
        this.session = session;
        this.currenciesQuery = currenciesQuery;
        this.http = http;
        this.ngbModal = ngbModal;
        this.confirmation = confirmation;
        this.walletsService = walletsService;
        this.currenciesService = currenciesService;
        this.translate = translate;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].appName;
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].displayName;
        this.isUploadCollapsed = true;
        this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.files = [];
        this.faQuestionCircle = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faQuestionCircle"];
        this.transactionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.transactionComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isDefineByValue = true;
        this.valueInUsd = null;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
    }
    ngOnInit() {
        this.original = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["cloneDeep"])(this.transaction);
        this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(1, 16 * 1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(() => this.http.post('/sgpmx/refresh-exchange-rates', {})), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["flatMap"])(() => this.currenciesService.fetchAsObservable()))
            .subscribe(() => {
            var _a;
            this.transaction.currency = this.currenciesQuery.getEntity((_a = this.transaction.currency) === null || _a === void 0 ? void 0 : _a.code);
            this.calculateAmount();
        }));
        this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["combineLatest"])(this.fetchEvent, this.session.userStream)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(([_, user]) => Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])([
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(user),
            this.http.get(`/users/${user.id}/wallets`),
            this.http
                .get('/currencies', {
                params: {
                    'filter.transferable': JSON.stringify(true),
                },
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(response => response.data)),
        ])))
            .subscribe(([user, wallets, currencies]) => {
            if (!this.transaction.currency) {
                this.transaction.currency = currencies[0];
            }
            this.transaction.baseWallet = {
                user: {
                    id: user.id,
                    accountNumber: user.accountNumber,
                    name: user.name,
                },
            };
            this.wallets = wallets.filter(wallet => new bignumber_js__WEBPACK_IMPORTED_MODULE_7___default.a(wallet.balance).isGreaterThan(0));
            this.transaction = Object.assign(this.transaction, {
                fixedFee: '0',
                relativeFee: '0',
            });
        }));
        this.fetchEvent.next();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    submit() {
        if (this.transferForm && this.transferForm.invalid) {
            return;
        }
        const modal = this.ngbModal.open(_common_payment_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_15__["PaymentConfirmationComponent"], {
            windowClass: 'modal-primary',
            backdrop: 'static',
        });
        const component = modal.componentInstance;
        component.transaction = this.transaction;
        component.onConfirm.subscribe(() => {
            this.createTransaction().subscribe(transaction => {
                component.isCompleted = true;
                modal.close();
                const transactionView = this.ngbModal.open(_common_transaction_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_18__["TransactionViewComponent"], {
                    windowClass: 'modal-primary',
                    backdrop: 'static',
                });
                const transactionViewModal = transactionView.componentInstance;
                transactionViewModal.transaction = transaction;
                this.reset();
                this.walletsService.fetch();
                this.fetchEvent.next();
                this.transactionComplete.emit();
            }, error => {
                if (error.name === 'RecipientNotFoundError') {
                    modal.close();
                    this.confirmation
                        .show({
                        title: 'Recipient not found',
                        type: 'danger',
                        text: `The recipient has not been found. Please check if the account number or email address entered is correct.`,
                        confirmText: 'Got it',
                        showCancel: false,
                    })
                        .subscribe();
                }
                component.isSubmitted = false;
                component.reset();
            });
        });
    }
    openContactBook() {
        var _a;
        if (!((_a = this.transaction.baseWallet) === null || _a === void 0 ? void 0 : _a.user)) {
            return;
        }
        const modal = Object(_common_contact_book_contact_book_component__WEBPACK_IMPORTED_MODULE_13__["openContactBook"])(this.ngbModal, this.transaction.baseWallet.user);
        this.subscriptions.add(modal.componentInstance.onSelect.subscribe((contact) => {
            var _a;
            this.recipient = (_a = contact.counterUser) === null || _a === void 0 ? void 0 : _a.accountNumber;
            this.onRecipientChange(contact);
            modal.close();
        }));
    }
    onRecipientChange(contact) {
        this.transaction.counterWallet = {
            user: contact
                ? contact.counterUser
                : { accountNumber: !this.recipient ? '' : this.recipient.trim().replace(/\s/g, '') },
        };
    }
    useMaxAmount() {
        if (this.transaction.currency) {
            const target = this.wallets.find(wallet => wallet.currency.code === this.transaction.currency.code);
            if (target) {
                const maxUsable = this.maxUsableAmount;
                const balance = maxUsable
                    ? bignumber_js__WEBPACK_IMPORTED_MODULE_7___default.a.min(target.availableBalance, maxUsable).toString()
                    : target.availableBalance;
                this.transaction.amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_7___default.a(balance).toFixed(this.transaction.currency.decimalPlaces);
            }
        }
        if (this.isDefineByValue) {
            this.calculateValueInUsd();
        }
    }
    calculateValueInUsd() {
        this.currenciesQuery
            .selectEntity('USD')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
            .subscribe(usd => {
            if (!usd) {
                return;
            }
            if (!this.transaction.amount) {
                this.valueInUsd = null;
                return;
            }
            this.valueInUsd = new bignumber_js__WEBPACK_IMPORTED_MODULE_7___default.a(_common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_14__["Currency"].convert(this.transaction.amount, this.transaction.currency, usd)).toFixed(2);
        });
    }
    calculateAmount() {
        this.currenciesQuery
            .selectEntity('USD')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
            .subscribe(usd => {
            if (!usd) {
                return;
            }
            if (!this.valueInUsd) {
                this.transaction.amount = undefined;
                return;
            }
            this.transaction.amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_7___default.a(_common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_14__["Currency"].convert(this.valueInUsd, usd, this.transaction.currency)).toFixed(7);
        });
    }
    onCurrencyChange() {
        this.fetchEvent.next();
        this.calculateAmount();
        this.calculateValueInUsd();
    }
    getMaximum() {
        if (this.isDefineByValue || !this.transaction.currency) {
            return '100000';
        }
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_7___default.a(100000)
            .times(this.transaction.currency.exchangeRate)
            .toFixed(this.transaction.currency.decimalPlaces);
    }
    getMinimum() {
        if (this.isDefineByValue || !this.transaction.currency) {
            return '1';
        }
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_7___default.a(1)
            .times(this.transaction.currency.exchangeRate)
            .toFixed(this.transaction.currency.decimalPlaces);
    }
    createTransaction() {
        return this.http.post('/transactions', this.transaction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["flatMap"])(transaction => this.files.length > 0
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(this.files.map(file => this.http.post(`/transactions/${transaction.id}/files`, file, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'X-File-Name': encodeURIComponent(file.name),
                    'Content-Type': file.type,
                }),
            }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(() => transaction))
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(transaction)));
    }
    reset() {
        this.transaction = Object.assign(this.original, { currency: this.transaction.currency });
        this.transactionChange.emit(this.transaction);
        this.files = [];
        this.transferForm.resetForm({
            'currency-select': this.transaction.currency,
        });
        this.isDefineByValue = true;
        this.fetchEvent.next();
    }
};
SgpmxTransferFormComponent.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_17__["SessionService"] },
    { type: _store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_19__["CurrenciesQuery"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_16__["ConfirmationService"] },
    { type: _store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_20__["WalletsService"] },
    { type: src_app_store_currencies_currencies_service__WEBPACK_IMPORTED_MODULE_11__["CurrenciesService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
SgpmxTransferFormComponent.propDecorators = {
    transaction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    transferForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['transferForm',] }],
    transactionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    transactionComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
SgpmxTransferFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sgpmx-transfer-form',
        template: _raw_loader_sgpmx_transfer_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], SgpmxTransferFormComponent);



/***/ }),

/***/ "TNXb":
/*!********************************************************************************!*\
  !*** ./src/app/transfer/transfer-form.component.ts/transfer-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: TransferFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferFormComponent", function() { return TransferFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_transfer_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./transfer-form.component.html */ "hlKo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "WE53");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/store/currencies/currencies.query */ "4pv/");
/* harmony import */ var src_app_store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/store/wallets/wallets.query */ "O9sj");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_contact_book_contact_book_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/contact-book/contact-book.component */ "AqLL");
/* harmony import */ var _common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/models/accounting/currency.model */ "/e3T");
/* harmony import */ var _common_payment_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/payment/payment-confirmation/payment-confirmation.component */ "n93W");
/* harmony import */ var _common_services_accounting_fee_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/services/accounting/fee.service */ "le6r");
/* harmony import */ var _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/services/confirmation.service */ "fTmd");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");
/* harmony import */ var _common_transaction_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../common/transaction/transaction-view/transaction-view.component */ "vOIs");
/* harmony import */ var _store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../store/wallets/wallets.service */ "hOWo");






















let TransferFormComponent = class TransferFormComponent {
    constructor(session, feeService, http, ngbModal, confirmation, walletsService, route, walletsQuery, currenciesQuery, translate) {
        this.session = session;
        this.feeService = feeService;
        this.http = http;
        this.ngbModal = ngbModal;
        this.confirmation = confirmation;
        this.walletsService = walletsService;
        this.route = route;
        this.walletsQuery = walletsQuery;
        this.currenciesQuery = currenciesQuery;
        this.translate = translate;
        this.lockRecipient = false;
        this.showContactBtn = true;
        this.files = [];
        this.purposes = [
            `${this.translate.instant('common.employment-income')}`,
            `${this.translate.instant('common.social-security')}`,
            `${this.translate.instant('common.trust-fund-income')}`,
            `${this.translate.instant('common.pre-funding-remittance-account')}`,
            `${this.translate.instant('transfer-form.savings')}`,
            `${this.translate.instant('transfer-form.capital-injection')}`,
            `${this.translate.instant('transfer-form.cash-disbursements')}`,
            `${this.translate.instant('common.purchase-sales-of-goods')}`,
            `${this.translate.instant('transfer-form.invoice-supplier-payment')}`,
            `${this.translate.instant('common.tax-payment')}`,
            `${this.translate.instant('common.license-subscription-fee')}`,
            `${this.translate.instant('common.payment-of-interest')}`,
            `${this.translate.instant('common.bill-utilities-payment')}`,
            `${this.translate.instant('common.insurance-payment')}`,
            `${this.translate.instant('common.refund-rebate')}`,
            `${this.translate.instant('common.commission-bonus-payment')}`,
            `${this.translate.instant('common.family-maintenance-education-medical-travel')}`,
            `${this.translate.instant('common.pre-funding-foreign-exchange-account')}`,
            `${this.translate.instant('transfer-form.loan-payment')}`,
            `${this.translate.instant('common.investment-securities')}`,
            `${this.translate.instant('common.transport')}`,
            `${this.translate.instant('common.property-payment')}`,
        ];
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].displayName;
        this.inclusiveFee = true;
        this.isUploadCollapsed = true;
        this.faQuestionCircle = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faQuestionCircle"];
        this.fee = null;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
        this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    ngOnInit() {
        this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["combineLatest"])(this.fetchEvent, this.session.userStream)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(([_, user]) => {
            this.transaction.baseWallet = {
                user: {
                    id: user.id,
                    accountNumber: user.accountNumber,
                    name: user.name,
                },
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(([_, user]) => this.currenciesQuery.selectEntity(user.preferredCurrency.code).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["flatMap"])(preferredCurrency => {
            var _a;
            if (!this.transaction.currency) {
                this.transaction.currency = preferredCurrency;
            }
            return this.feeService.fetch({
                type: 'transfer',
                method: 'internal',
                user: { id: user.id },
                currency: { code: (_a = this.transaction.currency) === null || _a === void 0 ? void 0 : _a.code },
            });
        }))))
            .subscribe(fee => {
            this.fee = fee;
            Object.assign(this.transaction, this.feeService.determineFee(this.transaction, fee));
            if (fee && fee.minValue) {
                this.minAmount = _common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_15__["Currency"].convert(fee.minValue, fee.currency, this.transaction.currency);
            }
        }));
        this.fetchEvent.next();
        if (this.route.snapshot.queryParamMap.has('recipient')) {
            this.recipient = this.route.snapshot.queryParamMap.get('recipient');
            this.onRecipientChange();
        }
    }
    ngAfterContentChecked() {
        if (this.recipient) {
            this.onRecipientChange();
        }
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    submit() {
        if (this.transferForm && this.transferForm.invalid) {
            return;
        }
        const modal = this.ngbModal.open(_common_payment_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_16__["PaymentConfirmationComponent"], {
            windowClass: 'modal-primary',
            backdrop: 'static',
        });
        const component = modal.componentInstance;
        component.transaction = this.transaction;
        component.onConfirm.subscribe(() => {
            this.createTransaction().subscribe(transaction => {
                component.isCompleted = true;
                modal.close();
                const transactionView = this.ngbModal.open(_common_transaction_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_20__["TransactionViewComponent"], {
                    windowClass: 'modal-primary',
                    backdrop: 'static',
                });
                const transactionViewModal = transactionView.componentInstance;
                transactionViewModal.transaction = transaction;
                this.reset();
                this.walletsService.fetch();
                this.fetchEvent.next();
            }, error => {
                if (error.name === 'RecipientNotFoundError') {
                    modal.close();
                    this.confirmation
                        .show({
                        title: this.translate.instant('common.recipient-not-found'),
                        type: 'danger',
                        text: this.translate.instant('common.recipient-not-found-desc'),
                        confirmText: this.translate.instant('common.understood'),
                        showCancel: false,
                    })
                        .subscribe();
                }
                component.isSubmitted = false;
                component.reset();
            });
        });
    }
    openContactBook() {
        var _a;
        if (!((_a = this.transaction.baseWallet) === null || _a === void 0 ? void 0 : _a.user)) {
            return;
        }
        const modal = Object(_common_contact_book_contact_book_component__WEBPACK_IMPORTED_MODULE_14__["openContactBook"])(this.ngbModal, this.transaction.baseWallet.user);
        this.subscriptions.add(modal.componentInstance.onSelect.subscribe((contact) => {
            var _a;
            this.recipient = (_a = contact.counterUser) === null || _a === void 0 ? void 0 : _a.accountNumber;
            this.onRecipientChange(contact);
            modal.close();
        }));
    }
    onRecipientChange(contact) {
        this.transaction.counterWallet = {
            user: contact
                ? contact.counterUser
                : { accountNumber: !this.recipient ? '' : this.recipient.trim().replace(/\s/g, '') },
        };
    }
    useMaxAmount() {
        if (this.transaction.currency) {
            this.walletsQuery.balances$.subscribe(balances => {
                var _a;
                const found = balances.find(balance => balance.currency.code === this.transaction.currency.code);
                if (found) {
                    this.transaction.amount = found.availableBalance;
                    if (!this.inclusiveFee && this.fee) {
                        const maxFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(_common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_15__["Currency"].convert(this.fee.max, this.fee.currency, this.transaction.currency));
                        const relativeFeeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(this.transaction.amount).times((_a = this.transaction.relativeFee) !== null && _a !== void 0 ? _a : 0);
                        let fee = new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(this.transaction.fixedFee || 0).plus(relativeFeeAmount);
                        if (fee.isGreaterThan(maxFee)) {
                            fee = maxFee;
                        }
                        this.transaction.amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(this.transaction.amount)
                            .minus(fee)
                            .toFixed(this.transaction.currency.decimalPlaces, 1);
                    }
                    if (new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(this.transaction.amount).isLessThan(0)) {
                        this.transaction.amount = '0';
                    }
                    this.transaction.amount = parseFloat(this.transaction.amount).toString();
                }
            });
        }
    }
    createTransaction() {
        const body = Object.assign({}, this.transaction);
        if (!this.inclusiveFee) {
            body.amount = undefined;
            body.settledAmount = this.transaction.amount;
        }
        return this.http.post('/transactions', body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["flatMap"])(transaction => this.files.length > 0
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(this.files.map(file => this.http.post(`/transactions/${transaction.id}/files`, file, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'X-File-Name': encodeURIComponent(file.name),
                    'Content-Type': file.type,
                }),
            }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(() => transaction))
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(transaction)));
    }
    toggleInclusiveFee() {
        this.inclusiveFee = !this.inclusiveFee;
        this.transaction.settledAmount = !this.inclusiveFee ? this.transaction.amount : undefined;
    }
    onCurrencyChange() {
        this.fetchEvent.next();
    }
    onAmountChange() {
        Object.assign(this.transaction, this.feeService.determineFee(this.transaction, this.fee));
    }
    reset() {
        this.files = [];
        this.inclusiveFee = true;
        this.transferForm.resetForm({
            inclusiveFee: true,
            amount: undefined,
            purpose: undefined,
            comment: undefined,
            'currency-select': this.transaction.currency,
        });
    }
};
TransferFormComponent.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_19__["SessionService"] },
    { type: _common_services_accounting_fee_service__WEBPACK_IMPORTED_MODULE_17__["FeeService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_18__["ConfirmationService"] },
    { type: _store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_21__["WalletsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_12__["WalletsQuery"] },
    { type: src_app_store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_11__["CurrenciesQuery"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
TransferFormComponent.propDecorators = {
    transaction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    transferForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['transferForm',] }],
    recipient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    lockRecipient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    showContactBtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
TransferFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'transfer-form',
        template: _raw_loader_transfer_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TransferFormComponent);



/***/ }),

/***/ "e3Kx":
/*!*****************************************************!*\
  !*** ./src/app/transfer/transfer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TransferRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferRoutingModule", function() { return TransferRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/logged-in.auth-guard */ "59Zp");
/* harmony import */ var _transfer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transfer.component */ "3L2Q");





const routes = [
    {
        path: '',
        component: _transfer_component__WEBPACK_IMPORTED_MODULE_4__["TransferComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]],
    },
];
let TransferRoutingModule = class TransferRoutingModule {
};
TransferRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransferRoutingModule);



/***/ }),

/***/ "hlKo":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transfer/transfer-form.component.ts/transfer-form.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"session.userStream | async; let user\">\n    <div class=\"btn-view-templates\" *ngIf=\"showContactBtn\">\n        <a href (click)=\"$event.preventDefault(); openContactBook()\" class=\"font-lg\">{{ 'common.view-contacts' | translate }} ›</a>\n    </div>\n    <form\n        class=\"form-validation\"\n        #transferForm=\"ngForm\"\n        [ngClass]=\"{ 'ng-submitted': transferForm.submitted }\"\n        (ngSubmit)=\"submit()\"\n        autocomplete=\"false\"\n        novalidate\n    >\n        <div class=\"form-group\">\n            <div class=\"d-flex justify-content-between\">\n                <label class=\"font-md\" for=\"recipient\"\n                    >{{ 'common.account-number' | translate | titlecase }} / {{ 'common.email' | translate }}\n                    <a\n                        href\n                        (click)=\"$event.preventDefault()\"\n                        [ngbPopover]=\"recipientContent\"\n                        [popoverTitle]=\"recipientTitle\"\n                        triggers=\"mouseenter:mouseleave\"\n                        ><fa-icon [icon]=\"faQuestionCircle\"></fa-icon></a\n                ></label>\n            </div>\n            <input\n                type=\"text\"\n                class=\"form-control form-control-lg\"\n                id=\"recipient\"\n                name=\"recipient\"\n                [(ngModel)]=\"recipient\"\n                (ngModelChange)=\"onRecipientChange()\"\n                #recipientInput=\"ngModel\"\n                recipientValidator\n                required\n                emptyToNull\n                [disabled]=\"lockRecipient\"\n            />\n            <div *ngIf=\"recipientInput.invalid && (transferForm.submitted || recipientInput.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"recipientInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                <div class=\"form-control-feedback\" *ngIf=\"recipientInput?.errors?.invalidRecipient\">{{ 'common.invalid-recipient' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"d-flex justify-content-between\">\n                <label class=\"font-md\" for=\"currency\">{{ 'common.currency' | translate }}</label>\n            </div>\n            <currency-select\n                [(currency)]=\"transaction.currency\"\n                [user]=\"user\"\n                [isLarge]=\"true\"\n                [currencyTypes]=\"['crypto', 'fiat', 'product']\"\n                (currencyChange)=\"onCurrencyChange()\"\n                [required]=\"true\"\n                [transferable]=\"true\"\n                [useFullName]=\"true\"\n                [hideZeroBalance]=\"true\"\n                #currencySelect\n            >\n            </currency-select>\n            <div\n                *ngIf=\"currencySelect.currencyInput.invalid && (transferForm.submitted || currencySelect.currencyInput.dirty)\"\n                class=\"error-messages\"\n            >\n                <div class=\"form-control-feedback\" *ngIf=\"currencySelect.currencyInput?.errors?.required\">\n                    {{ 'common.this-is-required' | translate }}\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"d-flex justify-content-between\">\n                <div class=\"d-flex\">\n                    <label class=\"font-md\">{{ 'common.amount' | translate }}</label>\n                </div>\n                <a href (click)=\"useMaxAmount(); $event.preventDefault()\">{{ 'common.use-max' | translate }}</a>\n            </div>\n            <div class=\"input-group\">\n                <input\n                    type=\"number\"\n                    class=\"form-control form-control-lg\"\n                    id=\"amount\"\n                    name=\"amount\"\n                    placeholder=\"0.00\"\n                    [(ngModel)]=\"transaction.amount\"\n                    (ngModelChange)=\"onAmountChange()\"\n                    [min]=\"minAmount\"\n                    #amount=\"ngModel\"\n                    required\n                />\n                <div class=\"input-group-append\">\n                    <span class=\"input-group-text font-lg\">{{ transaction.currency?.code }}</span>\n                </div>\n            </div>\n            <div *ngIf=\"amount.invalid && (transferForm.submitted || amount.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"amount?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                <div class=\"form-control-feedback\" *ngIf=\"amount?.errors?.min\">\n                    {{ 'common.minimum-amount-is' | translate }}\n                    {{ minAmount + '' || '0' | amount: transaction.currency?.decimalPlaces }}\n                    {{ transaction.currency?.code }}.\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"custom-control custom-checkbox\">\n                <input type=\"checkbox\" class=\"custom-control-input\" name=\"inclusiveFee\" (click)=\"toggleInclusiveFee()\" [ngModel]=\"inclusiveFee\" />\n                <span class=\"custom-control-label font-md\">\n                    {{ 'common.include-service-fee' | translate }}\n                    <fa-icon\n                        class=\"text-primary\"\n                        [icon]=\"faQuestionCircle\"\n                        [popoverTitle]=\"inclusiveFeeTitle\"\n                        [ngbPopover]=\"inclusiveFeeContent\"\n                        triggers=\"hover\"\n                        container=\"body\"\n                    >\n                    </fa-icon>\n                </span>\n            </label>\n        </div>\n        <div class=\"pt-2 mb-1\"></div>\n        <div class=\"form-group\">\n            <label class=\"font-md\" for=\"purpose\">{{ 'common.purpose' | translate }}</label>\n            <ng-select\n                class=\"ng-select-lg\"\n                name=\"purpose\"\n                [(ngModel)]=\"transaction.purpose\"\n                [items]=\"purposes\"\n                [clearable]=\"false\"\n                [required]=\"true\"\n                [addTag]=\"true\"\n                addTagText=\"Use\"\n                dropdownPosition=\"bottom\"\n                #purposeInput=\"ngModel\"\n            >\n                <ng-template ng-label-tmp let-item=\"item\">\n                    {{ item }}\n                </ng-template>\n                <ng-template ng-option-tmp let-item=\"item\">\n                    {{ item }}\n                </ng-template>\n            </ng-select>\n            <div *ngIf=\"purposeInput.invalid && (transferForm.submitted || purposeInput.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"purposeInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"font-md\" for=\"reference\"\n                >{{ 'common.reference' | translate }} <small class=\"text-muted\">({{ 'common.optional' | translate }})</small></label\n            >\n            <input type=\"text\" class=\"form-control form-control-lg\" id=\"reference\" name=\"reference\" [(ngModel)]=\"transaction.reference\" emptyToNull />\n        </div>\n        <div class=\"form-group\">\n            <label class=\"font-md\" for=\"comment\"\n                >{{ 'common.comment' | translate }} <small class=\"text-muted\">({{ 'common.optional' | translate }})</small></label\n            >\n            <textarea\n                class=\"form-control form-control-lg\"\n                id=\"comment\"\n                name=\"comment\"\n                [(ngModel)]=\"transaction.comment\"\n                rows=\"3\"\n                emptyToNull\n            ></textarea>\n        </div>\n        <div class=\"form-group\">\n            <a href class=\"d-block mb-2\" (click)=\"isUploadCollapsed = !isUploadCollapsed; $event.preventDefault()\"\n                >{{ isUploadCollapsed ? '+ ' + ('common.attach' | translate) : '- ' + ('common.remove' | translate) }}\n                {{ 'common.file' | translate }}</a\n            >\n            <dropzone [files]=\"files\" [ngbCollapse]=\"isUploadCollapsed\"></dropzone>\n        </div>\n        <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary mb-2\">{{ 'common.submit' | translate }}</button>\n        <div *ngIf=\"transaction.currency && transaction.currency.type === 'crypto'\" class=\"small text-muted mb-2\">\n            <b>Disclaimer:</b> All services related to wallet, custody and currency exchange provided on this website are exclusively provided by\n            Aerapass' third party suppliers. Aerapass allows to its customers access on an 'as-is' basis.\n        </div>\n        <small class=\"text-muted\" *ngIf=\"transaction && transaction.method !== 'card'\">\n            <div>{{ 'common.by-clicking-the-submit-button' | translate }}</div>\n            <a [routerLink]=\"['/terms']\" class=\"text-muted\" target=\"_blank\" rel=\"noopener\"\n                >{{ 'common.terms' | translate }} &amp; {{ 'common.conditions' | translate }}</a\n            >\n            {{ 'common.and' | translate }}\n            <a [routerLink]=\"['/privacy']\" class=\"text-muted\" target=\"_blank\" rel=\"noopener\">{{ 'common.data-privacy-notice' | translate }}</a\n            >.</small\n        >\n    </form>\n    <ng-template #recipientTitle> {{ 'common.terms' | translate }} </ng-template>\n    <ng-template #recipientContent>\n        <p>{{ 'common.you-can-send-fund-to-other' | translate: { value: displayName } }}</p>\n        <p [innerHtml]=\"'common.ask-your-beneficiary' | translate\"></p>\n    </ng-template>\n    <ng-template #inclusiveFeeTitle> {{ 'common.include-service-fee' | translate }} </ng-template>\n    <ng-template #inclusiveFeeContent>\n        <p>\n            {{ 'common.if' | translate }} <b>{{ 'common.checked' | translate }}</b\n            >, {{ 'common.checked-desc' | translate }}\n        </p>\n        <p>\n            {{ 'common.if' | translate }} <b>{{ 'common.unchecked' | translate }}</b\n            >, {{ 'common.unchecked-desc' | translate }}\n        </p>\n    </ng-template>\n</ng-container>\n");

/***/ }),

/***/ "jwRq":
/*!********************************************!*\
  !*** ./src/app/store/fees/fees.service.ts ***!
  \********************************************/
/*! exports provided: FeesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesService", function() { return FeesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/session.service */ "6g7h");
/* harmony import */ var _fees_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fees.store */ "6sOK");







let FeesService = class FeesService {
    constructor(store, http, session) {
        this.store = store;
        this.http = http;
        this.session = session;
    }
    fetchAsObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            this.http.get(`/users/${this.session.user.id}/fee-schedule`, {
                params: {
                    currencyCode: 'AU',
                },
            }),
            this.http.get(`/users/${this.session.user.id}/fee-schedule`, {
                params: {
                    currencyCode: 'AG',
                },
            }),
            this.http.get(`/users/${this.session.user.id}/fee-schedule`, {
                params: {
                    currencyCode: 'USD',
                },
            }),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([goldFees, silverFees, usdFees]) => [...goldFees, ...silverFees, ...usdFees]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(fees => {
            this.store.set(fees);
        }));
    }
    fetch() {
        this.fetchAsObservable().subscribe(() => undefined);
    }
};
FeesService.ctorParameters = () => [
    { type: _fees_store__WEBPACK_IMPORTED_MODULE_6__["FeesStore"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] }
];
FeesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], FeesService);



/***/ }),

/***/ "le6r":
/*!***********************************************************!*\
  !*** ./src/app/common/services/accounting/fee.service.ts ***!
  \***********************************************************/
/*! exports provided: FeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeService", function() { return FeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/accounting/currency.model */ "/e3T");
/* harmony import */ var _models_accounting_fee_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/accounting/fee.model */ "7Fps");
/* harmony import */ var _transactions_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../transactions.mixins */ "HiCw");








let FeeService = class FeeService {
    constructor(http) {
        this.http = http;
    }
    fetch(fee) {
        return this.http
            .post('/fees', {
            id: Math.round(Math.random() * 10000),
            jsonrpc: '2.0',
            method: 'findByPrimaryAttributes',
            params: {
                type: fee.type,
                method: fee.method,
                amount: fee.amount ? fee.amount : '1',
                currency: fee.currency,
                user: fee.user,
            },
        }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json-rpc',
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => (response.result ? new _models_accounting_fee_model__WEBPACK_IMPORTED_MODULE_6__["Fee"](response.result) : null)));
    }
    determineFee(currentTransaction, fee) {
        const transaction = currentTransaction;
        const fixedFee = fee && fee.fixed && transaction.currency
            ? _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_5__["Currency"].convert(fee.fixed, fee.currency, transaction.currency)
            : '0';
        const relativeFee = fee && fee.relative ? fee.relative : '0';
        transaction.fixedFee = fixedFee || undefined;
        transaction.relativeFee = relativeFee || undefined;
        if (fee && fee.min) {
            const minFee = _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_5__["Currency"].convert(fee.min, fee.currency, transaction.currency);
            if (new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(Object(_transactions_mixins__WEBPACK_IMPORTED_MODULE_7__["calculateFee"])(transaction)).isLessThan(minFee)) {
                transaction.fixedFee = minFee;
                transaction.relativeFee = '0';
            }
        }
        if (fee && fee.max) {
            const maxFee = _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_5__["Currency"].convert(fee.max, fee.currency, transaction.currency);
            if (new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(Object(_transactions_mixins__WEBPACK_IMPORTED_MODULE_7__["calculateFee"])(transaction)).isGreaterThan(maxFee)) {
                transaction.fixedFee = maxFee;
                transaction.relativeFee = '0';
            }
        }
        return transaction;
    }
};
FeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
FeeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], FeeService);



/***/ }),

/***/ "uqTW":
/*!*********************************************!*\
  !*** ./src/app/transfer/transfer.module.ts ***!
  \*********************************************/
/*! exports provided: TransferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferModule", function() { return TransferModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common.module */ "a6Df");
/* harmony import */ var _common_payment_payment_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/payment/payment.module */ "qIFn");
/* harmony import */ var _common_transaction_transaction_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/transaction/transaction.module */ "SRhG");
/* harmony import */ var _sgpmx_transfer_form_component_sgpmx_transfer_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sgpmx-transfer-form.component/sgpmx-transfer-form.component */ "OcI6");
/* harmony import */ var _transfer_form_component_ts_transfer_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transfer-form.component.ts/transfer-form.component */ "TNXb");
/* harmony import */ var _transfer_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transfer-routing.module */ "e3Kx");
/* harmony import */ var _transfer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transfer.component */ "3L2Q");









let TransferModule = class TransferModule {
};
TransferModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_transfer_component__WEBPACK_IMPORTED_MODULE_8__["TransferComponent"], _transfer_form_component_ts_transfer_form_component__WEBPACK_IMPORTED_MODULE_6__["TransferFormComponent"], _sgpmx_transfer_form_component_sgpmx_transfer_form_component__WEBPACK_IMPORTED_MODULE_5__["SgpmxTransferFormComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _transfer_routing_module__WEBPACK_IMPORTED_MODULE_7__["TransferRoutingModule"], _common_payment_payment_module__WEBPACK_IMPORTED_MODULE_3__["PaymentFormModule"], _common_transaction_transaction_module__WEBPACK_IMPORTED_MODULE_4__["TransactionModule"]],
        exports: [_transfer_form_component_ts_transfer_form_component__WEBPACK_IMPORTED_MODULE_6__["TransferFormComponent"]],
    })
], TransferModule);



/***/ })

}]);
//# sourceMappingURL=default~organization-organization-module~transfer-transfer-module.js.map