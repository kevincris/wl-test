(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-conversions-user-conversions-module"],{

/***/ "6sOK":
/*!******************************************!*\
  !*** ./src/app/store/fees/fees.store.ts ***!
  \******************************************/
/*! exports provided: FeesStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesStore", function() { return FeesStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");



let FeesStore = class FeesStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"] {
    constructor() {
        super();
    }
};
FeesStore.ctorParameters = () => [];
FeesStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'fees', idKey: 'id' })
], FeesStore);



/***/ }),

/***/ "80k1":
/*!******************************************!*\
  !*** ./src/app/store/fees/fees.query.ts ***!
  \******************************************/
/*! exports provided: FeesQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesQuery", function() { return FeesQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _fees_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fees.store */ "6sOK");






let FeesQuery = class FeesQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
    findByPrimaryAttributes(query) {
        return this.selectEntity(entity => entity.type === query.type &&
            entity.method === query.method &&
            query.currencyCode === entity.currency.code).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(fee => fee
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(fee)
            : this.selectEntity(entity => entity.type === query.type &&
                entity.method === query.method &&
                entity.currency.code === 'USD').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(usdFee => usdFee !== null && usdFee !== void 0 ? usdFee : null))));
    }
};
FeesQuery.ctorParameters = () => [
    { type: _fees_store__WEBPACK_IMPORTED_MODULE_5__["FeesStore"] }
];
FeesQuery = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], FeesQuery);



/***/ }),

/***/ "80xo":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/user-conversions/user-conversion-form.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"form-validation e2e-conversion-form\"\n    #conversionForm=\"ngForm\"\n    (ngSubmit)=\"submit()\"\n    [ngClass]=\"{ 'ng-submitted': conversionForm.submitted }\"\n    autocomplete=\"false\"\n    novalidate\n>\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{ (!isNew() ? 'common.conversion' : 'common.currency-conversion') | translate }}</h5>\n        <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"form-group\" *ngIf=\"item.user !== null && canChangeOwner\">\n            <label for=\"user\">{{ 'common.user' | translate }}</label>\n            <ng-select\n                id=\"user\"\n                name=\"user\"\n                [placeholder]=\"'common.enter-user' | translate\"\n                [(ngModel)]=\"user\"\n                #userInput=\"ngModel\"\n                [items]=\"legalEntitiesStream | async\"\n                [typeahead]=\"userAutocomplete\"\n                [clearable]=\"false\"\n                [disabled]=\"!isNew()\"\n                required\n            >\n                <ng-template ng-label-tmp let-item=\"item\">\n                    {{ item.name }} <small class=\"text-gray\">{{ item.email }}</small>\n                </ng-template>\n                <ng-template ng-option-tmp let-item=\"item\">\n                    <div class=\"d-flex align-items-center justify-content-center\">\n                        <user-avatar *ngIf=\"item\" [user]=\"item\" size=\"sm\" elementClass=\"mr-2\"></user-avatar>\n                        <div class=\"w-100\">\n                            <div>{{ item.name }}</div>\n                            <small class=\"text-gray\">{{ item.email }}</small>\n                        </div>\n                    </div>\n                </ng-template>\n            </ng-select>\n            <div *ngIf=\"userInput.invalid && (conversionForm.submitted || userInput.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"userInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n                <label for=\"baseAmount\">{{ 'common.amount' | translate }} ({{ 'common.from' | translate }})</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"baseAmount\"\n                    name=\"baseAmount\"\n                    [(ngModel)]=\"copy.baseTransaction!.amount\"\n                    #baseAmount=\"ngModel\"\n                    placeholder=\"0.00\"\n                    required\n                    [disabled]=\"!isNew()\"\n                />\n                <div *ngIf=\"baseAmount.invalid && (conversionForm.submitted || baseAmount.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"baseAmount?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12\">\n                <label for=\"baseCurrency\">{{ 'common.currency' | translate }} ({{ 'common.from' | translate }})</label>\n                <currency-select\n                    [user]=\"user\"\n                    [placeholder]=\"'common.from-currency' | translate\"\n                    [(currency)]=\"copy.baseTransaction!.currency\"\n                    [disabled]=\"!isNew()\"\n                    [transferable]=\"true\"\n                    [required]=\"true\"\n                    [hideZeroBalance]=\"appName !== 'sgpmx'\"\n                    [filterBy]=\"copy.currency && copy.currency.type === 'crypto' ? ['EUR', 'USD'] : undefined\"\n                    (currencyChange)=\"copy.currency = undefined; filterCurrencies()\"\n                    #currencySelect\n                ></currency-select>\n                <div\n                    *ngIf=\"currencySelect.currencyInput.invalid && (conversionForm.submitted || currencySelect.currencyInput.dirty)\"\n                    class=\"error-messages\"\n                >\n                    <div class=\"form-control-feedback\" *ngIf=\"currencySelect.currencyInput?.errors?.required\">\n                        {{ 'common.this-is-required' | translate }}\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"isNew() || !copy.counterTransaction?.amount\">\n            <label for=\"currency\">{{ 'common.currency' | translate }} ({{ 'common.to' | translate }})</label>\n            <ng-select\n                name=\"currency\"\n                class=\"to-currency\"\n                [placeholder]=\"'common.to-currency' | translate\"\n                [(ngModel)]=\"copy.currency\"\n                [items]=\"filteredCurrencies\"\n                [clearable]=\"false\"\n                [searchable]=\"false\"\n                #currencyInput=\"ngModel\"\n                required\n                [disabled]=\"!isNew()\"\n                (change)=\"resetBaseCurrency()\"\n            >\n                <ng-template ng-label-tmp let-item=\"item\">{{ item.code }} - {{ item.name }}</ng-template>\n                <ng-template ng-option-tmp let-item=\"item\">{{ item.code }} - {{ item.name }}</ng-template>\n            </ng-select>\n            <div *ngIf=\"currencyInput.invalid && (conversionForm.submitted || currencyInput.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"currencyInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"!isNew() && copy.counterTransaction?.amount\">\n            <div class=\"form-group col-sm-12\">\n                <label for=\"counterAmount\">{{ 'common.amount' | translate }} ({{ 'common.to' | translate }})</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"counterAmount\"\n                    name=\"counterAmount\"\n                    [ngModel]=\"copy.counterTransaction?.amount\"\n                    #counterAmount=\"ngModel\"\n                    [disabled]=\"true\"\n                />\n            </div>\n            <div class=\"form-group col-sm-12\">\n                <label for=\"counterCurrency\">{{ 'common.currency' | translate }} (To)</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"counterCurrency\"\n                    name=\"counterCurrency\"\n                    [ngModel]=\"copy.currency?.code\"\n                    [disabled]=\"true\"\n                />\n            </div>\n        </div>\n\n        <div class=\"callout callout-success mb-0\" *ngIf=\"isNew()\">\n            <h6>{{ 'common.how-it-works' | translate }}</h6>\n            <p>\n                {{ 'common.submit-your-conversion' | translate }}\n            </p>\n            <p>{{ 'common.if-you-wish-to-accept' | translate }}</p>\n        </div>\n        <div class=\"mt-2\">\n            <small class=\"text-muted\">\n                <b>Disclaimer:</b> All services related to wallet, custody and currency exchange provided on this website are exclusively provided by\n                Aerapass' third party suppliers. Aerapass allows to its customers access on an 'as-is' basis.\n            </small>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button *ngIf=\"copy.status === 'offered'\" type=\"button\" class=\"btn btn-success btn-w-sm\" (click)=\"accept()\">\n            {{ 'common.accept' | translate }}\n        </button>\n        <button *ngIf=\"copy.status === 'offered'\" type=\"button\" class=\"btn btn-danger btn-w-sm\" (click)=\"decline()\">\n            {{ 'common.decline' | translate }}\n        </button>\n        <button\n            *ngIf=\"isNew()\"\n            type=\"submit\"\n            class=\"btn btn-primary btn-w-sm e2e-request-btn\"\n            [ngClass]=\"{ loading: isSaving }\"\n            [disabled]=\"isSaving\"\n        >\n            {{ 'common.request' | translate }}\n        </button>\n        <button *ngIf=\"!isNew()\" type=\"button\" class=\"btn btn-primary btn-w-sm\" (click)=\"activeModal.dismiss()\">\n            {{ 'common.close' | translate }}\n        </button>\n    </div>\n</form>\n");

/***/ }),

/***/ "BqkS":
/*!**************************************************!*\
  !*** ./src/app/common/services/sgpmx.service.ts ***!
  \**************************************************/
/*! exports provided: SgpmxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SgpmxService", function() { return SgpmxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/currencies/currencies.query */ "4pv/");
/* harmony import */ var src_app_store_fees_fees_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/fees/fees.query */ "80k1");
/* harmony import */ var _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/accounting/currency.model */ "/e3T");








let SgpmxService = class SgpmxService {
    constructor(currenciesQuery, feesQuery) {
        this.currenciesQuery = currenciesQuery;
        this.feesQuery = feesQuery;
    }
    calculateFeeInUsd(transaction) {
        if (!transaction.currency || !transaction.amount) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('0');
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            this.currenciesQuery.selectEntity('USD').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)),
            this.currenciesQuery.selectEntity(transaction.currency.code).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)),
            this.feesQuery
                .findByPrimaryAttributes({
                type: 'transfer',
                method: 'internal',
                currencyCode: transaction.currency.code,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)),
            this.feesQuery
                .findByPrimaryAttributes({
                type: 'gst',
                method: 'internal',
                currencyCode: transaction.currency.code,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([usd, currency, transferFee, gstFee]) => {
            const usdValue = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_7__["Currency"].convert(transaction.amount, currency, usd)).decimalPlaces(2);
            let feeAmount = usdValue.times((transferFee === null || transferFee === void 0 ? void 0 : transferFee.relative) || 0).plus((transferFee === null || transferFee === void 0 ? void 0 : transferFee.fixed) || 0);
            if ((transferFee === null || transferFee === void 0 ? void 0 : transferFee.min) && feeAmount.isLessThan(transferFee.min)) {
                feeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(transferFee.min);
            }
            else if ((transferFee === null || transferFee === void 0 ? void 0 : transferFee.max) && feeAmount.isGreaterThan(transferFee.max)) {
                feeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(transferFee.max);
            }
            let gst = feeAmount.times((gstFee === null || gstFee === void 0 ? void 0 : gstFee.relative) || 0);
            if (!feeAmount.isZero() && (gstFee === null || gstFee === void 0 ? void 0 : gstFee.min) && gst.isLessThan(gstFee.min)) {
                gst = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(gstFee.min);
            }
            else if (!feeAmount.isZero() && (gstFee === null || gstFee === void 0 ? void 0 : gstFee.max) && gst.isGreaterThan(gstFee.max)) {
                gst = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(gstFee.max);
            }
            return feeAmount.plus(gst).toFixed(2);
        }));
    }
};
SgpmxService.ctorParameters = () => [
    { type: src_app_store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_5__["CurrenciesQuery"] },
    { type: src_app_store_fees_fees_query__WEBPACK_IMPORTED_MODULE_6__["FeesQuery"] }
];
SgpmxService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], SgpmxService);



/***/ }),

/***/ "TxOg":
/*!*****************************************************************************!*\
  !*** ./src/app/services/user-conversions/user-conversion-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserConversionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConversionFormComponent", function() { return UserConversionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_conversion_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-conversion-form.component.html */ "80xo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/security-check/security-check.service */ "i32w");
/* harmony import */ var src_app_common_services_accounting_conversion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common/services/accounting/conversion.service */ "OIM0");
/* harmony import */ var src_app_common_services_toastr_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/services/toastr.service */ "N/y2");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "AytR");













let UserConversionFormComponent = class UserConversionFormComponent {
    constructor(http, toastr, activeModal, securityCheckService, conversionService, translate) {
        this.http = http;
        this.toastr = toastr;
        this.activeModal = activeModal;
        this.securityCheckService = securityCheckService;
        this.conversionService = conversionService;
        this.translate = translate;
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.copy = {};
        this.isSaving = false;
        this.userAutocomplete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.legalEntitiesStream = this.userAutocomplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(search => this.http.get('/users', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('limit', '25').set('search', search),
        })));
        this.canChangeOwner = true;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].appName;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
    }
    ngOnInit() {
        this.copy = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.item);
        this.http
            .get('/currencies', {
            params: {
                limit: 100 + '',
                'filter.holdable': JSON.stringify(true),
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(response => response.data))
            .subscribe(cur => {
            this.currencies = cur;
            this.filteredCurrencies = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.currencies);
        });
        if (this.item.user) {
            this.canChangeOwner = false;
            this.user = this.item.user;
        }
    }
    isNew() {
        return !this.item.id;
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    submit() {
        if (this.conversionForm.invalid) {
            return;
        }
        this.subscriptions.add(this.securityCheckService
            .getScopePermission('banking')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(() => this.conversionService.create({
            currency: this.copy.currency,
            baseTransaction: {
                amount: this.copy.baseTransaction.amount,
                currency: this.copy.baseTransaction.currency,
            },
            user: this.user,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(conversion => {
            this.copy = conversion;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.isSaving = false;
        }))
            .subscribe(() => {
            this.toastr.success(this.translate.instant('common.conversion-created'));
            this.reset();
            this.onSave.emit();
        }));
    }
    convertToISODate(date) {
        return date && `${date.slice(4)}-${date.slice(2, 4)}-${date.slice(0, 2)}`;
    }
    accept() {
        this.subscriptions.add(this.securityCheckService
            .getScopePermission('banking')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(() => this.conversionService.accept(this.item.id)))
            .subscribe(() => {
            this.toastr.success(this.translate.instant('common.conversion-accepted'));
            this.onSave.emit();
            this.activeModal.dismiss();
        }));
    }
    decline() {
        this.subscriptions.add(this.securityCheckService
            .getScopePermission('banking')
            .pipe(() => this.conversionService.patch(this.item.id, [
            {
                op: 'replace',
                path: '/status',
                value: 'declined',
            },
        ]))
            .subscribe(() => {
            this.toastr.success(this.translate.instant('common.conversion-decline'));
            this.onSave.emit();
            this.activeModal.dismiss();
        }));
    }
    filterCurrencies() {
        if (this.currencies &&
            this.copy.baseTransaction &&
            this.copy.baseTransaction.currency &&
            this.copy.baseTransaction.currency.type === 'crypto') {
            this.filteredCurrencies = this.currencies.filter(currency => ['EUR', 'USD'].includes(currency.code));
        }
        else {
            this.filteredCurrencies = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.currencies);
        }
    }
    resetBaseCurrency() {
        var _a;
        if (this.copy.currency &&
            this.copy.currency.type === 'crypto' &&
            !['USD', 'EUR'].includes((_a = this.copy.baseTransaction) === null || _a === void 0 ? void 0 : _a.currency.code)) {
            this.copy.baseTransaction.currency = this.currencies.find(currency => currency.code === 'USD');
        }
    }
    reset() {
        this.user = undefined;
        this.conversionForm.reset();
        this.conversionForm.resetForm();
    }
};
UserConversionFormComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_common_services_toastr_service__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] },
    { type: src_app_common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_9__["SecurityCheckService"] },
    { type: src_app_common_services_accounting_conversion_service__WEBPACK_IMPORTED_MODULE_10__["ConversionService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
UserConversionFormComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onSave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    conversionForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['conversionForm',] }]
};
UserConversionFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'user-conversion-form',
        template: _raw_loader_user_conversion_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserConversionFormComponent);



/***/ }),

/***/ "W0TQ":
/*!**********************************************************************!*\
  !*** ./src/app/services/user-conversions/user-conversions.module.ts ***!
  \**********************************************************************/
/*! exports provided: UserConversionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConversionsModule", function() { return UserConversionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/common.module */ "a6Df");
/* harmony import */ var _user_conversion_action_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-conversion-action.component */ "mL0r");
/* harmony import */ var _user_conversion_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-conversion-form.component */ "TxOg");
/* harmony import */ var _user_conversions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-conversions-routing.module */ "uUHZ");
/* harmony import */ var _user_conversions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-conversions.component */ "dd6A");







let UserConversionsModule = class UserConversionsModule {
};
UserConversionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_conversions_component__WEBPACK_IMPORTED_MODULE_6__["UserConversionsComponent"], _user_conversion_form_component__WEBPACK_IMPORTED_MODULE_4__["UserConversionFormComponent"], _user_conversion_action_component__WEBPACK_IMPORTED_MODULE_3__["UserConversionActionComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _user_conversions_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserConversionsRoutingModule"]],
    })
], UserConversionsModule);



/***/ }),

/***/ "dd6A":
/*!*************************************************************************!*\
  !*** ./src/app/services/user-conversions/user-conversions.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserConversionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConversionsComponent", function() { return UserConversionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_conversions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-conversions.component.html */ "hsu5");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "uB96");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! color */ "aSns");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/common/list.component */ "aJRI");
/* harmony import */ var src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/common/services/confirmation.service */ "fTmd");
/* harmony import */ var _common_models_accounting_conversion_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/models/accounting/conversion.model */ "9x0b");
/* harmony import */ var _common_models_core_user_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/models/core/user.model */ "vk+e");
/* harmony import */ var _common_no_access_modal_no_access_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/no-access-modal/no-access-modal.component */ "gZSw");
/* harmony import */ var _common_services_accounting_conversion_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/services/accounting/conversion.service */ "OIM0");
/* harmony import */ var _common_services_notifications_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/services/notifications.service */ "A3TI");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../common/services/toastr.service */ "N/y2");
/* harmony import */ var _user_conversion_action_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user-conversion-action.component */ "mL0r");
/* harmony import */ var _user_conversion_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-conversion-form.component */ "TxOg");























var Mode;
(function (Mode) {
    Mode["ALL"] = "all";
    Mode["ACTIVE"] = "active";
    Mode["PENDING"] = "pending";
})(Mode || (Mode = {}));
let UserConversionsComponent = class UserConversionsComponent extends src_app_common_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"] {
    constructor(http, ngbModal, changeDetector, route, router, session, confirmation, notification, toastr, conversionService, translate) {
        super(http, ngbModal, changeDetector, route, router, session, confirmation);
        this.notification = notification;
        this.toastr = toastr;
        this.conversionService = conversionService;
        this.translate = translate;
        this.modes = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["values"])(Mode);
        this.mode = Mode.ACTIVE;
        this.conversionsChangingStatus = new Set();
        this.faEllipsisV = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEllipsisV"];
        this.appColor = color__WEBPACK_IMPORTED_MODULE_8__(getComputedStyle(document.body).getPropertyValue('--primary').trim()).lighten(0.1);
        this.apiQuery = ['status'];
        this.defaultQuery = { status: { or: ['pending', 'offered', 'accepted'] } };
        this.defaultLimit = this.limitOpts[0];
        this.formComponent = _user_conversion_form_component__WEBPACK_IMPORTED_MODULE_22__["UserConversionFormComponent"];
    }
    ngOnInit() {
        this.subscriptions.add(this.session.userStream.subscribe(user => {
            this.apiUrl = `/users/${user.id}/conversions`;
            this.user = new _common_models_core_user_model__WEBPACK_IMPORTED_MODULE_15__["User"](user);
        }));
        this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["combineLatest"])(this.route.paramMap, this.route.queryParamMap)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(([paramMap]) => paramMap.has('id')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["flatMap"])(([paramMap, queryParamMap]) => Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["forkJoin"])([this.conversionService.fetchById(paramMap.get('id')), Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(queryParamMap)])))
            .subscribe(([conversion, queryParamMap]) => {
            const action = queryParamMap.get('action');
            const closeHook = () => this.router.navigate(['/services/conversions']);
            if (action && ['accept', 'decline'].includes(action)) {
                const modal = this.ngbModal.open(_user_conversion_action_component__WEBPACK_IMPORTED_MODULE_21__["UserConversionActionComponent"], {
                    windowClass: 'modal-primary',
                    backdrop: 'static',
                });
                const conversionActionComponent = modal.componentInstance;
                conversionActionComponent.action = action;
                conversionActionComponent.conversion = conversion;
                modal.result.then(closeHook, closeHook);
                this.subscriptions.add(conversionActionComponent.onConfirm
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["flatMap"])(() => action === 'accept'
                    ? this.conversionService.accept(conversion.id)
                    : this.conversionService.patch(conversion.id, [
                        {
                            op: 'replace',
                            path: '/status',
                            value: 'declined',
                        },
                    ])))
                    .subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.updateEvent.next();
                    this.toastr.success(`${this.translate.instant('common.conversion')} ${action === 'accept'
                        ? this.translate.instant('common.accepted')
                        : this.translate.instant('common.declined')}`);
                    modal.close();
                })));
            }
            else {
                const modal = this.ngbModal.open(_user_conversion_form_component__WEBPACK_IMPORTED_MODULE_22__["UserConversionFormComponent"], {
                    windowClass: 'modal-primary',
                    backdrop: 'static',
                });
                modal.componentInstance.item = conversion;
                modal.result.then(closeHook, closeHook);
            }
        }));
        super.ngOnInit();
    }
    accept(conversion) {
        this.conversionsChangingStatus.add(conversion.id);
        const modal = this.ngbModal.open(_user_conversion_action_component__WEBPACK_IMPORTED_MODULE_21__["UserConversionActionComponent"], {
            windowClass: 'modal-primary',
            backdrop: 'static',
        });
        const conversionActionComponent = modal.componentInstance;
        conversionActionComponent.action = 'accept';
        conversionActionComponent.conversion = conversion;
        const actionSubscription = conversionActionComponent.onConfirm
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["flatMap"])(() => this.conversionService.accept(conversion.id)))
            .subscribe(() => {
            modal.close();
            this.toastr.success(this.translate.instant('common.conversion-accepted'));
            this.updateEvent.next();
        });
        const closeHook = () => {
            actionSubscription.unsubscribe();
            this.conversionsChangingStatus.delete(conversion.id);
        };
        modal.result.then(closeHook, closeHook);
    }
    decline(conversion) {
        this.conversionsChangingStatus.add(conversion.id);
        const modal = this.ngbModal.open(_user_conversion_action_component__WEBPACK_IMPORTED_MODULE_21__["UserConversionActionComponent"], {
            windowClass: 'modal-primary',
            backdrop: 'static',
        });
        const conversionActionComponent = modal.componentInstance;
        conversionActionComponent.action = 'decline';
        conversionActionComponent.conversion = conversion;
        const actionSubscription = conversionActionComponent.onConfirm
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["flatMap"])(() => this.conversionService.patch(conversion.id, [
            {
                op: 'replace',
                path: '/status',
                value: 'declined',
            },
        ])))
            .subscribe(() => {
            modal.close();
            this.toastr.success(this.translate.instant('user-conversions.conversion-declined'));
            this.updateEvent.next();
        });
        const closeHook = () => {
            actionSubscription.unsubscribe();
            this.conversionsChangingStatus.delete(conversion.id);
        };
        modal.result.then(closeHook, closeHook);
    }
    cancel(conversion) {
        this.subscriptions.add(this.conversionService
            .patch(conversion.id, [
            {
                op: 'replace',
                path: '/status',
                value: 'cancelled',
            },
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.conversionsChangingStatus.delete(conversion.id);
        }))
            .subscribe(response => {
            Object.assign(conversion, response);
            this.toastr.success(this.translate.instant('common.conversion-cancelled'));
            this.updateEvent.next();
        }));
    }
    gotoConversion(conversion) {
        const closeHook = () => {
            this.updateEvent.next();
            this.notification.notifyEvent.next();
        };
        const modal = this.ngbModal.open(_user_conversion_form_component__WEBPACK_IMPORTED_MODULE_22__["UserConversionFormComponent"], {
            windowClass: 'modal-primary',
            backdrop: 'static',
        });
        modal.componentInstance.item = conversion;
        modal.result.then(closeHook, closeHook);
    }
    newConversion(event) {
        if (this.session.user.accessErrors.length > 0) {
            Object(_common_no_access_modal_no_access_modal_component__WEBPACK_IMPORTED_MODULE_16__["openNoAccessModal"])(this.ngbModal, this.session.user.accessErrors[0]);
            return;
        }
        const conversion = {
            baseTransaction: {},
            user: this.user,
        };
        this.showForm(event, conversion);
    }
    mapItem(item) {
        return new _common_models_accounting_conversion_model__WEBPACK_IMPORTED_MODULE_14__["Conversion"](item);
    }
};
UserConversionsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_19__["SessionService"] },
    { type: src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmationService"] },
    { type: _common_services_notifications_service__WEBPACK_IMPORTED_MODULE_18__["NotificationsService"] },
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_20__["ToastrService"] },
    { type: _common_services_accounting_conversion_service__WEBPACK_IMPORTED_MODULE_17__["ConversionService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
UserConversionsComponent.propDecorators = {
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
UserConversionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'user-conversions',
        template: _raw_loader_user_conversions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserConversionsComponent);



/***/ }),

/***/ "hsu5":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/user-conversions/user-conversions.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-page pb-3\">\n    <div class=\"row justify-content-between align-items-center pb-2\">\n        <div class=\"col-auto\">\n            <h5 class=\"mb-0\">{{ 'common.conversions' | translate }}</h5>\n        </div>\n        <div class=\"col-auto d-flex justify-content-end\">\n            <ol class=\"breadcrumb px-0\">\n                <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\">Home</a></li>\n                <li class=\"breadcrumb-item active\">{{ 'common.conversions' | translate }}</li>\n            </ol>\n        </div>\n    </div>\n    <div class=\"row justify-content-between align-items-center\">\n        <div class=\"col\">\n            <button\n                type=\"button\"\n                class=\"btn mr-2\"\n                (click)=\"queryParams = getDefaultQuery(); searchEvent.next()\"\n                [ngClass]=\"isActiveQuery(getDefaultQuery()) ? 'btn-primary' : 'btn-primary-air'\"\n            >\n                {{ 'common.all' | translate }}\n            </button>\n            <div class=\"btn-group mr-2\">\n                <button\n                    type=\"button\"\n                    class=\"btn\"\n                    (click)=\"queryParams['status']['or'] = ['pending']; searchEvent.next()\"\n                    [ngClass]=\"isActiveQuery({ status: { or: ['pending'] } }) ? 'btn-primary' : 'btn-primary-air'\"\n                >\n                    {{ 'common.pending' | translate }}\n                </button>\n                <button\n                    type=\"button\"\n                    class=\"btn\"\n                    (click)=\"queryParams['status']['or'] = ['offered']; searchEvent.next()\"\n                    [ngClass]=\"isActiveQuery({ status: { or: ['offered'] } }) ? 'btn-primary' : 'btn-primary-air'\"\n                >\n                    {{ 'common.offered' | translate }}\n                </button>\n                <button\n                    type=\"button\"\n                    class=\"btn\"\n                    (click)=\"queryParams['status']['or'] = ['accepted']; searchEvent.next()\"\n                    [ngClass]=\"isActiveQuery({ status: { or: ['accepted'] } }) ? 'btn-primary' : 'btn-primary-air'\"\n                >\n                    {{ 'common.accepted' | translate }}\n                </button>\n            </div>\n        </div>\n        <div class=\"col-auto pt-3 pt-md-0\">\n            <button class=\"btn btn-primary-air e2e-create-conversion-btn\" (click)=\"$event.preventDefault(); newConversion($event)\">\n                <fa-icon class=\"mr-1\" [icon]=\"faPlus\"></fa-icon> {{ 'common.new-conversion' | translate }}\n            </button>\n        </div>\n    </div>\n</div>\n<div class=\"container e2e-user-conversions\">\n    <div class=\"card\">\n        <div class=\"card-header b-b-0\">{{ 'common.conversions' | translate }}</div>\n        <div class=\"table-responsive\">\n            <table class=\"table table-hover table-card\">\n                <thead class=\"thead-light\">\n                    <tr>\n                        <th scope=\"col\">{{ 'common.subject' | translate }}</th>\n                        <th scope=\"col\" class=\"text-right\">{{ 'common.from' | translate }}</th>\n                        <th scope=\"col\" class=\"text-right\">To</th>\n                        <th scope=\"col\" class=\"text-right\">{{ 'common.exchange-rate' | translate }}</th>\n                        <th scope=\"col\">\n                            {{ 'common.status' | translate }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['status']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['status'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['status']) }\"\n                            ></fa-icon>\n                        </th>\n                        <th scope=\"col\">\n                            {{ 'common.expires-at' | translate }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['expiresAt']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['expiresAt'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['expiresAt']) }\"\n                            ></fa-icon>\n                        </th>\n                        <th scope=\"col\">\n                            {{ 'common.created-at' | translate | titlecase }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['createdAt']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['createdAt'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['createdAt']) }\"\n                            ></fa-icon>\n                        </th>\n                        <th scope=\"col\"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container *ngIf=\"itemsStream | async; let items\">\n                        <ng-container *ngIf=\"items.length === 0; else rows\">\n                            <tr>\n                                <td class=\"bg-white\" colspan=\"12\">\n                                    <div class=\"mx-auto p-3 mt-2 mb-4 text-center max-width-sm\">\n                                        <img src=\"/img/icons/refresh.svg\" class=\"img-sm mb-2\" />\n                                        <h4 class=\"mb-1\">{{ 'common.convert-your-currency' | translate }}</h4>\n                                        <p class=\"mb-3 text-gray\">{{ 'common.need-to-convert' | translate }}</p>\n                                        <button type=\"button\" class=\"btn btn-primary-air btn-lg btn-block\" (click)=\"newConversion($event)\">\n                                            {{ 'common.create-conversion' | translate }}\n                                        </button>\n                                    </div>\n                                </td>\n                            </tr>\n                        </ng-container>\n                        <ng-template #rows>\n                            <tr\n                                *ngFor=\"let conversion of itemsStream | async\"\n                                class=\"clickable bg-white\"\n                                (click)=\"$event.preventDefault(); gotoConversion(conversion)\"\n                            >\n                                <th scope=\"row\">\n                                    <div class=\"d-flex align-items-center\">\n                                        <!-- htmllint attr-bans=\"[]\" -->\n                                        <div class=\"avatar avatar-sm mr-3\">\n                                            <svg\n                                                class=\"img-avatar\"\n                                                xmlns=\"http://www.w3.org/2000/svg\"\n                                                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                                xml:space=\"preserve\"\n                                                text-rendering=\"geometricPrecision\"\n                                                style=\"\n                                                    shape-rendering: geometricPrecision;\n                                                    image-rendering: optimizeQuality;\n                                                    fill-rule: evenodd;\n                                                    clip-rule: evenodd;\n                                                \"\n                                                viewBox=\"0 0 120 120\"\n                                            >\n                                                <g>\n                                                    <rect [style.fill]=\"appColor\" width=\"120\" height=\"120\"></rect>\n                                                    <text\n                                                        font-weight=\"500\"\n                                                        font-size=\"3.25em\"\n                                                        font-family=\"sans-serif\"\n                                                        fill=\"#ffffff\"\n                                                        x=\"50%\"\n                                                        y=\"50%\"\n                                                        text-anchor=\"middle\"\n                                                        dy=\"0.35em\"\n                                                    >\n                                                        {{ conversion.currency.code }}\n                                                    </text>\n                                                </g>\n                                            </svg>\n                                        </div>\n                                        <!-- htmllint attr-bans=\"$previous\" -->\n                                        <div>\n                                            <div>{{ conversion.baseTransaction.currency.code }} to {{ conversion.currency.code }}</div>\n                                            <div><uuid [value]=\"conversion.id\"></uuid></div>\n                                        </div>\n                                    </div>\n                                </th>\n                                <td class=\"text-right\">\n                                    <span class=\"text-danger\" *ngIf=\"conversion.baseTransaction\">\n                                        {{ conversion.baseTransaction.amount | amount: conversion.baseTransaction.currency.decimalPlaces }}\n                                        {{ conversion.baseTransaction.currency.code }}</span\n                                    >\n                                </td>\n                                <td class=\"text-right\">\n                                    <ng-container *ngIf=\"conversion.counterTransaction; else pending\">\n                                        <span class=\"text-green\" *ngIf=\"conversion.counterTransaction\"\n                                            >{{\n                                                conversion.counterTransaction.amount | amount: conversion.counterTransaction.currency.decimalPlaces\n                                            }}\n                                            {{ conversion.counterTransaction.currency.code }}</span\n                                        >\n                                    </ng-container>\n                                </td>\n                                <td class=\"text-right\">\n                                    <ng-container *ngIf=\"conversion.counterTransaction; else pending\">\n                                        <span class=\"text-primary\"\n                                            >{{ conversion.exchangeRate | amount: conversion.currency.decimalPlaces }}\n                                            {{ conversion.currency.code }}</span\n                                        >\n                                    </ng-container>\n                                </td>\n                                <td>\n                                    <span\n                                        [ngbTooltip]=\"conversion.id\"\n                                        class=\"text-capitalize label label-danger\"\n                                        *ngIf=\"conversion.status === 'offered' && (conversion.expiresAt | isBefore); else showStatus\"\n                                    >\n                                        {{ 'common.expired' | translate }}\n                                    </span>\n                                    <ng-template #showStatus>\n                                        <span\n                                            placement=\"right\"\n                                            [ngbTooltip]=\"conversion.id\"\n                                            class=\"text-capitalize label\"\n                                            [ngClass]=\"{\n                                                'label-success': conversion.status === 'accepted',\n                                                'label-info': conversion.status === 'pending',\n                                                'label-warning': conversion.status === 'offered',\n                                                'label-danger': ['cancelled', 'declined'].includes(conversion.status)\n                                            }\"\n                                            >{{ conversion.status }}</span\n                                        >\n                                    </ng-template>\n                                </td>\n                                <td>\n                                    <ng-container *ngIf=\"conversion.expiresAt; else pending\">{{\n                                        conversion.expiresAt | date: 'mediumDate'\n                                    }}</ng-container>\n                                </td>\n                                <td>\n                                    {{ conversion.createdAt | date: 'medium' }}\n                                </td>\n                                <td class=\"action\">\n                                    <div\n                                        ngbDropdown\n                                        container=\"body\"\n                                        placement=\"bottom-right\"\n                                        #dropdown=\"ngbDropdown\"\n                                        (click)=\"$event.stopPropagation()\"\n                                        *ngIf=\"\n                                            conversion.status === 'pending' || (conversion.status === 'offered' && !(conversion.expiresAt | isBefore))\n                                        \"\n                                    >\n                                        <button class=\"btn btn-transparent\" type=\"button\" ngbDropdownToggle>\n                                            <fa-icon [icon]=\"faEllipsisV\"></fa-icon>\n                                        </button>\n                                        <div class=\"dropdown-menu dropdown-menu-sm\" ngbDropdownMenu>\n                                            <a\n                                                class=\"e2e-accept-conversion-btn\"\n                                                href\n                                                ngbDropdownItem\n                                                (click)=\"!conversionsChangingStatus.has(conversion.id) && accept(conversion); $event.preventDefault()\"\n                                                *ngIf=\"conversion.status === 'offered'\"\n                                                >Accept</a\n                                            >\n                                            <a\n                                                class=\"e2e-decline-conversion-btn\"\n                                                href\n                                                ngbDropdownItem\n                                                (click)=\"\n                                                    !conversionsChangingStatus.has(conversion.id) && decline(conversion); $event.preventDefault()\n                                                \"\n                                                *ngIf=\"conversion.status === 'offered'\"\n                                                >{{ 'common.decline' | translate }}</a\n                                            >\n                                            <a\n                                                class=\"e2e-cancel-conversion-btn\"\n                                                href\n                                                ngbDropdownItem\n                                                (click)=\"!conversionsChangingStatus.has(conversion.id) && cancel(conversion); $event.preventDefault()\"\n                                                *ngIf=\"conversion.status === 'pending'\"\n                                                >{{ 'common.cancel' | translate }}</a\n                                            >\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr *ngFor=\"let empty of fill\" class=\"fill\">\n                                <td colspan=\"12\">\n                                    <div>&nbsp;</div>\n                                    <span>&nbsp;</span>\n                                </td>\n                            </tr>\n                        </ng-template>\n                    </ng-container>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <footer class=\"table-footer mb-3\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-8\">\n                <ng-select\n                    [(ngModel)]=\"limit\"\n                    dropdownPosition=\"auto\"\n                    (change)=\"select(1)\"\n                    [items]=\"limitOpts\"\n                    [placeholder]=\"'common.show-entries-per-page' | translate\"\n                    [clearable]=\"false\"\n                    [searchable]=\"false\"\n                    required\n                >\n                    <ng-template ng-label-tmp let-item=\"item\"\n                        >{{ 'common.show' | translate }} {{ item }} {{ 'common.per-page' | translate }}</ng-template\n                    >\n                    <ng-template ng-option-tmp let-item=\"item\">{{ item }} {{ 'common.entries' | translate }}</ng-template>\n                </ng-select>\n            </div>\n            <div class=\"col-lg-18 col-md-16 d-flex justify-content-center justify-content-md-end mt-3 mt-md-0\">\n                <ngb-pagination\n                    [(page)]=\"page\"\n                    [collectionSize]=\"count\"\n                    (pageChange)=\"select()\"\n                    [pageSize]=\"limit\"\n                    [maxSize]=\"4\"\n                    [rotate]=\"false\"\n                    [boundaryLinks]=\"true\"\n                >\n                </ngb-pagination>\n            </div>\n        </div>\n    </footer>\n</div>\n\n<ng-template #pending><span class=\"text-muted\">...</span></ng-template>\n");

/***/ }),

/***/ "i32w":
/*!*****************************************************************!*\
  !*** ./src/app/common/security-check/security-check.service.ts ***!
  \*****************************************************************/
/*! exports provided: SecurityCheckService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityCheckService", function() { return SecurityCheckService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/session.service */ "6g7h");
/* harmony import */ var _confirm_password_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-password.modal */ "iO5V");






let SecurityCheckService = class SecurityCheckService {
    constructor(ngbModal, session) {
        this.ngbModal = ngbModal;
        this.session = session;
    }
    /**
     * Asks the user for permission to do something that requires a higher scope than basic
     * Resolves if the check was successful or the permission is still granted from another request
     * @param scope The required scope
     */
    getScopePermission(scope) {
        // Resolve if token has already the correct scope
        if (this.session.hasTokenScope(scope)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(undefined);
        }
        const modal = this.ngbModal.open(_confirm_password_modal__WEBPACK_IMPORTED_MODULE_5__["ConfirmPasswordModalComponent"], {
            windowClass: 'modal-primary security-check-modal',
        });
        modal.componentInstance.scope = scope;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            modal.result
                .then(() => {
                observer.next();
                observer.complete();
            })
                .catch(() => {
                observer.complete();
            });
        });
    }
};
SecurityCheckService.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
SecurityCheckService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], SecurityCheckService);



/***/ }),

/***/ "mL0r":
/*!*******************************************************************************!*\
  !*** ./src/app/services/user-conversions/user-conversion-action.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserConversionActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConversionActionComponent", function() { return UserConversionActionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_conversion_action_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-conversion-action.component.html */ "ub9C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_payment_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/payment/payment-confirmation/payment-confirmation.component */ "n93W");




let UserConversionActionComponent = class UserConversionActionComponent extends src_app_common_payment_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["PaymentConfirmationComponent"] {
};
UserConversionActionComponent.propDecorators = {
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    conversion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
UserConversionActionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'user-conversion-action',
        template: _raw_loader_user_conversion_action_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserConversionActionComponent);



/***/ }),

/***/ "uUHZ":
/*!******************************************************************************!*\
  !*** ./src/app/services/user-conversions/user-conversions-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: UserConversionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConversionsRoutingModule", function() { return UserConversionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/logged-in.auth-guard */ "59Zp");
/* harmony import */ var _user_conversions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-conversions.component */ "dd6A");





const routes = [
    {
        path: ':id',
        component: _user_conversions_component__WEBPACK_IMPORTED_MODULE_4__["UserConversionsComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]],
    },
    {
        path: '',
        component: _user_conversions_component__WEBPACK_IMPORTED_MODULE_4__["UserConversionsComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]],
        pathMatch: 'full',
    },
];
let UserConversionsRoutingModule = class UserConversionsRoutingModule {
};
UserConversionsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserConversionsRoutingModule);



/***/ }),

/***/ "ub9C":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/user-conversions/user-conversion-action.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ (action === 'accept' ? 'common.accept' : 'accept.decline') | translate }} {{ 'common.offer' | translate }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"modal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-body e2e-confirm-conversion\">\n    <h5 class=\"text-center\">{{ 'common.you-are-about-to' | translate }} {{ action }} {{ 'common.the-offer' | translate }}:</h5>\n    <div class=\"row\">\n        <div class=\"col text-right\">{{ 'common.you-sell' | translate }}</div>\n        <div class=\"col\">\n            {{ conversion?.baseTransaction?.amount | amount: conversion?.baseTransaction?.currency?.decimalPlaces }}\n            {{ conversion?.baseTransaction?.currency?.code }}\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col text-right\">{{ 'common.you-buy' | translate }}</div>\n        <div class=\"col\">\n            {{ conversion?.counterTransaction?.amount | amount: conversion?.counterTransaction?.currency?.decimalPlaces }}\n            {{ conversion?.counterTransaction?.currency?.code }}\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col text-right\">{{ 'common.offer-expires-at' | translate }}</div>\n        <div class=\"col\">{{ conversion?.expiresAt | date: 'medium' }}</div>\n    </div>\n    <br />\n    <form class=\"form-validation\" #passwordForm=\"ngForm\" (ngSubmit)=\"submit()\" novalidate>\n        <div class=\"alert alert-danger\" *ngIf=\"alert\">\n            {{ alert }}\n        </div>\n        <div class=\"form-group\" *ngIf=\"!showTwoFactorForm\">\n            <div class=\"input-group input-group-lg\">\n                <span class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                        <fa-icon [icon]=\"faLockAlt\"></fa-icon>\n                    </span>\n                </span>\n                <input\n                    type=\"password\"\n                    class=\"form-control\"\n                    name=\"password\"\n                    [placeholder]=\"'common.enter-your-password' | translate\"\n                    [(ngModel)]=\"password\"\n                    [focus]=\"true\"\n                    required\n                />\n            </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"showTwoFactorForm\">\n            <div class=\"input-group input-group-lg\">\n                <span class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                        <fa-icon [icon]=\"faMobile\"></fa-icon>\n                    </span>\n                </span>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"twoFactorCode\"\n                    [placeholder]=\"'common.enter-2fa-code' | translate\"\n                    number\n                    [(ngModel)]=\"twoFactorCode\"\n                    [focus]=\"true\"\n                    required\n                />\n            </div>\n        </div>\n        <button\n            type=\"submit\"\n            class=\"btn btn-lg btn-block btn-primary\"\n            [ngClass]=\"{ loading: isLoading }\"\n            [disabled]=\"!passwordForm.valid || isLoading\"\n        >\n            {{ 'common.confirm' | translate }}\n        </button>\n    </form>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=user-conversions-user-conversions-module.js.map