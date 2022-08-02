(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~organization-organization-module~user-invoices-user-invoices-module"],{

/***/ "2wvm":
/*!************************************************!*\
  !*** ./src/app/common/currency-mask.config.ts ***!
  \************************************************/
/*! exports provided: baseCurrencyMaskOptions, integerCurrencyMaskOptions, percentageCurrencyMaskOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseCurrencyMaskOptions", function() { return baseCurrencyMaskOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integerCurrencyMaskOptions", function() { return integerCurrencyMaskOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentageCurrencyMaskOptions", function() { return percentageCurrencyMaskOptions; });
const baseCurrencyMaskOptions = {
    align: 'left',
    allowNegative: false,
};
const integerCurrencyMaskOptions = Object.assign(Object.assign({}, baseCurrencyMaskOptions), { precision: 0 });
const percentageCurrencyMaskOptions = Object.assign(Object.assign({}, baseCurrencyMaskOptions), { prefix: '', suffix: ' %' });


/***/ }),

/***/ "5Ten":
/*!***********************************************************!*\
  !*** ./src/app/common/models/accounting/invoice.model.ts ***!
  \***********************************************************/
/*! exports provided: Invoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invoice", function() { return Invoice; });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/user.model */ "vk+e");
/* harmony import */ var _currency_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency.model */ "/e3T");
/* harmony import */ var _invoice_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-item.model */ "XbEs");




class Invoice {
    constructor(data) {
        this.items = [];
        if (data) {
            Object.assign(this, data);
            this.currency = new _currency_model__WEBPACK_IMPORTED_MODULE_2__["Currency"](data.currency);
            if (data.invoicer) {
                this.invoicer = new _core_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](data.invoicer);
            }
            if (data.invoicee) {
                this.invoicee = new _core_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](data.invoicee);
            }
            if (data.items) {
                this.items = data.items.map(item => new _invoice_item_model__WEBPACK_IMPORTED_MODULE_3__["InvoiceItem"](item));
            }
        }
    }
    get total() {
        return this.items && this.items.length > 0
            ? this.items
                .reduce((total, item) => {
                const result = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(total).plus(new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(item.quantity).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(item.price)));
                return result.isFinite() ? result : new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(0);
            }, new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(0))
                .toFixed(6, 1)
            : '0';
    }
    get tax() {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.total).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.valueAddedTax || 0)).toFixed(6, 1);
    }
    get net() {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.total).plus(new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.tax)).toFixed(6, 1);
    }
}


/***/ }),

/***/ "Lmbc":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/invoices/invoices.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-header d-flex justify-content-between align-items-center\">\n            <span>{{ 'common.invoices' | translate }}</span>\n            <div>\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"requestExport()\">\n                    <fa-icon [icon]=\"faDownload\" class=\"mr-1\"></fa-icon> {{ 'common.export' | translate }}\n                </button>\n                <button\n                    type=\"button\"\n                    class=\"btn btn-primary btn-sm ml-1\"\n                    (click)=\"showForm($event, {})\"\n                    *ngIf=\"['admin'].includes(session.user?.role)\"\n                >\n                    <fa-icon [icon]=\"faPlus\" class=\"mr-1\"></fa-icon> {{ 'common.new-invoice' | translate | sentenceCase }}\n                </button>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row no-gutters align-items-center mb-3\">\n                <div class=\"col-lg-7 mb-2 mb-lg-0\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><fa-icon [icon]=\"faSearch\"></fa-icon></span>\n                        </span>\n                        <input\n                            type=\"text\"\n                            name=\"searchText\"\n                            (ngModelChange)=\"searchEvent.next()\"\n                            [placeholder]=\"'common.search' | translate\"\n                            class=\"form-control\"\n                            [(ngModel)]=\"search\"\n                        />\n                    </div>\n                </div>\n                <div class=\"col-lg-17 d-flex justify-content-between align-items-center\">\n                    <span class=\"ml-lg-3\"\n                        >{{ count | number }} {{ (count === 1 ? 'common.entry-found' : 'common.entries-found') | translate | lowercase }}</span\n                    >\n                    <div class=\"d-flex align-items-center\">\n                        <ng-select\n                            class=\"mr-2\"\n                            [(ngModel)]=\"limit\"\n                            dropdownPosition=\"auto\"\n                            (change)=\"select(1)\"\n                            [items]=\"limitOpts\"\n                            [placeholder]=\"'common.show-entries-per-page' | translate\"\n                            [clearable]=\"false\"\n                            [searchable]=\"false\"\n                            required\n                        >\n                            <ng-template ng-label-tmp let-item=\"item\">{{ 'common.show-entries' | translate: { value: item } }}</ng-template>\n                            <ng-template ng-option-tmp let-item=\"item\">{{ item }} {{ 'common.entries' | translate }}</ng-template>\n                        </ng-select>\n                        <ngb-pagination\n                            [(page)]=\"page\"\n                            [collectionSize]=\"count\"\n                            (pageChange)=\"select()\"\n                            [pageSize]=\"limit\"\n                            [maxSize]=\"5\"\n                            [ellipses]=\"false\"\n                            [rotate]=\"true\"\n                            [boundaryLinks]=\"true\"\n                        >\n                        </ngb-pagination>\n                    </div>\n                </div>\n            </div>\n            <div class=\"table-responsive position-relative\">\n                <table class=\"table table-hover table-bordered table-data\">\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">\n                                {{ 'common.invoicer' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['invoicer', 'name']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['invoicer', 'name'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['invoicer', 'name']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'common.invoicee' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['invoicee', 'name']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['invoicee', 'name'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['invoicee', 'name']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'common.subject' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['subject']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['subject'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['subject']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'common.status' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['status']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['status'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['status']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th class=\"text-right\" scope=\"col\">{{ 'common.total' | translate }}</th>\n                            <th scope=\"col\">\n                                {{ 'common.due-date' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['dueDate']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['dueDate'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['dueDate']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\" *ngIf=\"['admin'].includes(session.user?.role)\">{{ 'common.actions' | translate }}</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <ng-container *ngIf=\"itemsStream | async; let items\">\n                            <tr *ngFor=\"let invoice of items\">\n                                <th scope=\"row\" [width]=\"'1%'\">\n                                    <uuid [value]=\"invoice.id\"></uuid>\n                                </th>\n                                <td>\n                                    <user-display [user]=\"invoice.invoicer\"> </user-display>\n                                </td>\n                                <td>\n                                    <user-display [user]=\"invoice.invoicee\"> </user-display>\n                                </td>\n                                <td>{{ invoice.subject }}</td>\n                                <td>\n                                    <span\n                                        class=\"text-capitalize badge badge-lg\"\n                                        [ngClass]=\"{\n                                            'badge-success': invoice.status === 'completed',\n                                            'badge-info': invoice.status === 'pending',\n                                            'badge-danger': invoice.status === 'cancelled'\n                                        }\"\n                                        >{{ invoice.status }}</span\n                                    >\n                                </td>\n                                <td class=\"text-right text-primary\">\n                                    {{ (invoice.net | amount: invoice.currency?.decimalPlaces) || 0 }} {{ invoice.currency?.code }}\n                                </td>\n                                <td>\n                                    {{ invoice.dueDate | date: 'mediumDate' }}\n                                </td>\n                                <td class=\"action\" *ngIf=\"['admin'].includes(session.user?.role)\">\n                                    <div class=\"btn-group w-100\">\n                                        <button\n                                            type=\"button\"\n                                            class=\"btn btn-primary-air btn-sm btn-block px-2\"\n                                            (click)=\"$event.preventDefault(); viewInvoice(invoice)\"\n                                        >\n                                            {{ 'common.view' | translate }}\n                                        </button>\n                                        <div class=\"btn-group\" ngbDropdown container=\"body\" placement=\"bottom-right\">\n                                            <button class=\"btn btn-primary-air btn-sm dropdown-toggle-split\" ngbDropdownToggle>\n                                                <fa-icon [icon]=\"faCaretDown\"></fa-icon>\n                                            </button>\n                                            <div class=\"dropdown-menu dropdown-menu-sm\" ngbDropdownMenu>\n                                                <a href ngbDropdownItem (click)=\"$event.preventDefault(); openInvoice(invoice)\">{{\n                                                    'common.file' | translate\n                                                }}</a>\n                                                <ng-container *ngIf=\"invoice.status === 'pending'\">\n                                                    <a href ngbDropdownItem (click)=\"$event.preventDefault(); cancel(invoice)\">{{\n                                                        'common.cancel' | translate\n                                                    }}</a>\n                                                </ng-container>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr *ngIf=\"items.length === 0\">\n                                <td colspan=\"8\" class=\"text-center\">{{ 'common.no-entries-found' | translate }}</td>\n                            </tr>\n                        </ng-container>\n                    </tbody>\n                </table>\n                <ng-container *ngIf=\"isFetching | async\">\n                    <circle-spinner></circle-spinner>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "RPlz":
/*!************************************************************************!*\
  !*** ./src/app/common/invoices/invoice-form/invoice-form.component.ts ***!
  \************************************************************************/
/*! exports provided: InvoiceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceFormComponent", function() { return InvoiceFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_invoice_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./invoice-form.component.html */ "cS3E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "WE53");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common.mixin */ "s/H0");
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../countries */ "Gq6/");
/* harmony import */ var _currency_mask_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../currency-mask.config */ "2wvm");
/* harmony import */ var _models_accounting_invoice_item_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../models/accounting/invoice-item.model */ "XbEs");
/* harmony import */ var _models_accounting_invoice_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../models/accounting/invoice.model */ "5Ten");
/* harmony import */ var _services_accounting_invoice_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/accounting/invoice.service */ "Zhhe");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/session.service */ "6g7h");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/toastr.service */ "N/y2");


















let InvoiceFormComponent = class InvoiceFormComponent {
    constructor(session, http, toastr, invoices, activeModal, translate) {
        this.session = session;
        this.http = http;
        this.toastr = toastr;
        this.invoices = invoices;
        this.activeModal = activeModal;
        this.translate = translate;
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.currencies = [];
        this.items = [new _models_accounting_invoice_item_model__WEBPACK_IMPORTED_MODULE_13__["InvoiceItem"]()];
        this.editorModules = {
            toolbar: [
                ['bold', 'italic', 'underline'],
                [{ list: 'bullet' }],
                [{ indent: '-1' }, { indent: '+1' }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ align: [] }],
                ['clean'],
                ['link'],
            ],
        };
        this.userAutocomplete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.legalEntitiesStream = this.userAutocomplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(search => this.http.get('/users', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('limit', '25').set('search', search),
        })));
        this.faChevronLeft = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronLeft"];
        this.faTrash = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrash"];
        this.faSave = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSave"];
        this.isLoading = false;
        this.isTermsCollapsed = true;
        this.percentageCurrencyMaskOptions = _currency_mask_config__WEBPACK_IMPORTED_MODULE_12__["percentageCurrencyMaskOptions"];
        this.convertPercentage = _common_mixin__WEBPACK_IMPORTED_MODULE_10__["convertPercentage"];
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
    }
    ngOnInit() {
        this.invoice = new _models_accounting_invoice_model__WEBPACK_IMPORTED_MODULE_14__["Invoice"]();
        this.invoice.items = this.items;
        this.invoice.valueAddedTax = '0.00';
        this.valueAddedTax = this.invoice.valueAddedTax;
        this.http
            .get('/currencies', {
            params: {
                limit: 100 + '',
                'filter.type': 'or:fiat,crypto,metal',
            },
        })
            .subscribe(response => {
            this.currencies = response.data;
            const currency = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["find"])(this.currencies, { code: this.session.user.preferredCurrency.code });
            if (currency) {
                this.invoice.currency = currency;
            }
            else if (this.currencies.length > 0) {
                this.invoice.currency = this.currencies[0];
            }
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    submit() {
        var _a, _b;
        for (const form of this.itemsForm.toArray()) {
            form.submit();
        }
        if (this.form.invalid || this.itemsForm.some(form => !form.isValid())) {
            return;
        }
        const body = {
            subject: this.invoice.subject,
            currency: {
                code: this.invoice.currency.code,
            },
            valueAddedTax: this.invoice.valueAddedTax,
            dueDate: `${this.dueDate.slice(4)}-${this.dueDate.slice(2, 4)}-${this.dueDate.slice(0, 2)}`,
            invoicer: null,
            invoicee: { accountNumber: (_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.accountNumber) !== null && _b !== void 0 ? _b : '' },
            items: this.items.map(item => Object.assign(item, { price: item.price.toString() })),
            terms: !this.isTermsCollapsed ? this.invoice.terms : null,
        };
        this.isLoading = true;
        this.subscriptions.add(this.invoices
            .create(body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.isLoading = false;
        }))
            .subscribe(invoice => {
            this.invoice = invoice;
            this.toastr.success(this.translate.instant('common.invoice-created'));
            this.onSave.next();
        }));
    }
    addItem() {
        this.items.push(new _models_accounting_invoice_item_model__WEBPACK_IMPORTED_MODULE_13__["InvoiceItem"]());
    }
    mapToCountry(code) {
        if (!code) {
            return '';
        }
        const country = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["find"])(_countries__WEBPACK_IMPORTED_MODULE_11__["countriesSortedByName"], { alpha2: code });
        return country ? country.name : '';
    }
};
InvoiceFormComponent.ctorParameters = () => [
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_16__["SessionService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_17__["ToastrService"] },
    { type: _services_accounting_invoice_service__WEBPACK_IMPORTED_MODULE_15__["InvoiceService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
InvoiceFormComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onSave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['invoiceForm',] }],
    itemsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: ['itemsForm',] }]
};
InvoiceFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'invoice-form',
        template: _raw_loader_invoice_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], InvoiceFormComponent);



/***/ }),

/***/ "XbEs":
/*!****************************************************************!*\
  !*** ./src/app/common/models/accounting/invoice-item.model.ts ***!
  \****************************************************************/
/*! exports provided: InvoiceItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceItem", function() { return InvoiceItem; });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

class InvoiceItem {
    constructor(data) {
        Object.assign(this, data);
    }
    get total() {
        const result = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.quantity).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.price));
        return result.isFinite() ? result.toFixed(6, 1) : '0';
    }
}


/***/ }),

/***/ "Zhhe":
/*!***************************************************************!*\
  !*** ./src/app/common/services/accounting/invoice.service.ts ***!
  \***************************************************************/
/*! exports provided: InvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceService", function() { return InvoiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_accounting_invoice_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/accounting/invoice.model */ "5Ten");





let InvoiceService = class InvoiceService {
    constructor(http) {
        this.http = http;
    }
    fetchById(id) {
        return this.http.get(`/invoices/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(invoice => new _models_accounting_invoice_model__WEBPACK_IMPORTED_MODULE_4__["Invoice"](invoice)));
    }
    create(createPayload) {
        return this.http.post('/invoices', createPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(invoice => new _models_accounting_invoice_model__WEBPACK_IMPORTED_MODULE_4__["Invoice"](invoice)));
    }
    patch(id, operations) {
        return this.http
            .patch(`/invoices/${id}`, operations, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json-patch+json',
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(invoice => new _models_accounting_invoice_model__WEBPACK_IMPORTED_MODULE_4__["Invoice"](invoice)));
    }
    settle(id) {
        return this.http
            .post(`/invoices/${id}`, {
            id: Math.round(Math.random() * 10000),
            jsonrpc: '2.0',
            method: 'settle',
        }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json-rpc',
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(rpcResult => new _models_accounting_invoice_model__WEBPACK_IMPORTED_MODULE_4__["Invoice"](rpcResult.result)));
    }
    countByUserId(id, where) {
        return this.count(`/users/${id}/invoices`, where);
    }
    count(url, where) {
        return this.http
            .head(url, {
            observe: 'response',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('where', JSON.stringify(where)),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response.headers && response.headers.has('x-total-count')
            ? ~~response.headers.get('x-total-count')
            : 0));
    }
};
InvoiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
InvoiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], InvoiceService);



/***/ }),

/***/ "bw5T":
/*!****************************************************!*\
  !*** ./src/app/common/invoices/invoices.module.ts ***!
  \****************************************************/
/*! exports provided: InvoicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesModule", function() { return InvoicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.module */ "a6Df");
/* harmony import */ var _quill_editor_quill_editor_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quill-editor/quill-editor.module */ "8kSJ");
/* harmony import */ var _invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice-form/invoice-form.component */ "RPlz");
/* harmony import */ var _invoice_item_form_invoice_item_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice-item-form/invoice-item-form.component */ "t60H");
/* harmony import */ var _invoice_modal_invoice_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoice-modal/invoice-modal.component */ "neLm");
/* harmony import */ var _invoices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invoices.component */ "iVTV");








let InvoicesModule = class InvoicesModule {
};
InvoicesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_invoices_component__WEBPACK_IMPORTED_MODULE_7__["InvoicesComponent"], _invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceFormComponent"], _invoice_item_form_invoice_item_form_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceItemFormComponent"], _invoice_modal_invoice_modal_component__WEBPACK_IMPORTED_MODULE_6__["InvoiceModalComponent"]],
        exports: [_invoices_component__WEBPACK_IMPORTED_MODULE_7__["InvoicesComponent"], _invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceFormComponent"], _invoice_item_form_invoice_item_form_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceItemFormComponent"], _invoice_modal_invoice_modal_component__WEBPACK_IMPORTED_MODULE_6__["InvoiceModalComponent"]],
        imports: [_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _quill_editor_quill_editor_module__WEBPACK_IMPORTED_MODULE_3__["QuillEditorModule"]],
    })
], InvoicesModule);



/***/ }),

/***/ "cS3E":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/invoices/invoice-form/invoice-form.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"form-validation\"\n    [ngClass]=\"{ 'ng-submitted': invoiceForm.submitted }\"\n    #invoiceForm=\"ngForm\"\n    (ngSubmit)=\"submit()\"\n    autocomplete=\"false\"\n    novalidate\n>\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{ 'common.create-invoice' | translate }}</h5>\n        <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss(); $event.preventDefault()\">&times;</button>\n    </div>\n    <div class=\"modal-body pb-0\">\n        <div class=\"form-group\">\n            <label for=\"user\">{{ 'common.invoicee' | translate }}</label>\n            <ng-select\n                id=\"user\"\n                name=\"user\"\n                [placeholder]=\"'common.enter-invoicee' | translate\"\n                [(ngModel)]=\"user\"\n                #userInput=\"ngModel\"\n                [items]=\"legalEntitiesStream | async\"\n                [typeahead]=\"userAutocomplete\"\n                [clearable]=\"false\"\n                required\n            >\n                <ng-template ng-label-tmp let-item=\"item\">\n                    {{ item.name }} <small class=\"text-gray\">{{ item.email }}</small>\n                </ng-template>\n                <ng-template ng-option-tmp let-item=\"item\">\n                    <div class=\"d-flex align-items-center justify-content-center\">\n                        <user-avatar *ngIf=\"item\" [user]=\"item\" size=\"sm\" elementClass=\"mr-2\"></user-avatar>\n                        <div class=\"w-100\">\n                            <div>{{ item.name }}</div>\n                            <small class=\"text-gray\">{{ item.email }}</small>\n                        </div>\n                    </div>\n                </ng-template>\n            </ng-select>\n            <div *ngIf=\"userInput.invalid && (invoiceForm.submitted || userInput.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"userInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"form-control-label\" for=\"currency\">{{ 'common.subject' | translate }}</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"invoice.subject\" id=\"subject\" name=\"subject\" #subject=\"ngModel\" required />\n            <div *ngIf=\"subject.invalid && (invoiceForm.submitted || subject.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"subject?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"valueAddedTax\">VAT / GST</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"valueAddedTax\"\n                name=\"valueAddedTax\"\n                [(ngModel)]=\"valueAddedTax\"\n                (ngModelChange)=\"valueAddedTax && (invoice.valueAddedTax = convertPercentage(valueAddedTax))\"\n                currencyMask\n                [options]=\"percentageCurrencyMaskOptions\"\n                #valueAddedTaxField=\"ngModel\"\n                required\n            />\n            <div *ngIf=\"valueAddedTaxField.invalid && (invoiceForm.submitted || valueAddedTaxField.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"valueAddedTaxField?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"currency\">{{ 'common.currency' | translate }}</label>\n                <ng-select\n                    id=\"currency\"\n                    name=\"currency\"\n                    [(ngModel)]=\"invoice.currency\"\n                    bindLabel=\"code\"\n                    [items]=\"currencies\"\n                    [clearable]=\"false\"\n                    #currency=\"ngModel\"\n                    autocomplete=\"false\"\n                    aria-autocomplete=\"false\"\n                    required\n                ></ng-select>\n                <div *ngIf=\"currency.invalid && (invoiceForm.submitted || currency.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"currency?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"dueDate\">{{ 'common.due-date' | translate | sentenceCase }}</label>\n                <input\n                    class=\"form-control\"\n                    type=\"text\"\n                    id=\"dueDate\"\n                    name=\"dueDate\"\n                    mask=\"00/00/0000\"\n                    [(ngModel)]=\"dueDate\"\n                    #dueDateInput=\"ngModel\"\n                    required\n                />\n                <small class=\"form-text text-muted\">{{ 'common.format' | translate }}: dd/mm/yyyy</small>\n                <div *ngIf=\"dueDateInput.invalid && (invoiceForm.submitted || dueDateInput.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"dueDateInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n        </div>\n        <label class=\"form-control-label\">{{ 'common.items' | translate }}</label>\n        <invoice-item-form *ngFor=\"let item of items; index as i\" [item]=\"item\" (onDelete)=\"items.splice(i, 1)\" #itemsForm></invoice-item-form>\n        <div class=\"form-group d-flex justify-content-end\">\n            <a href (click)=\"addItem(); $event.preventDefault()\">+ {{ 'common.add-item' | translate }}</a>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"d-flex flex-column justify-content-end\">\n                    <div class=\"d-flex justify-content-between mb-1\">\n                        <span>{{ 'common.subtotal' | translate }}</span>\n                        <span>{{ (invoice.total | amount: invoice.currency?.decimalPlaces) || 0 }} {{ invoice.currency?.code }}</span>\n                    </div>\n                    <div class=\"d-flex justify-content-between mb-1\">\n                        <span>VAT ({{ invoice.valueAddedTax | percent }})</span>\n                        <span>{{ (invoice.tax | amount: invoice.currency?.decimalPlaces) || 0 }} {{ invoice.currency?.code }}</span>\n                    </div>\n                    <div class=\"d-flex justify-content-between\">\n                        <span class=\"font-weight-bold\">{{ 'common.total' | translate }}</span>\n                        <span class=\"font-weight-bold\"\n                            >{{ (invoice.net | amount: invoice.currency?.decimalPlaces) || 0 }} {{ invoice.currency?.code }}</span\n                        >\n                    </div>\n                </div>\n            </div>\n        </div>\n        <a href class=\"d-block mb-2\" (click)=\"isTermsCollapsed = !isTermsCollapsed; $event.preventDefault()\"\n            >{{ isTermsCollapsed ? '+ ' + ('common.add' | translate) : '- ' + ('common.remove' | translate) }}\n            {{ 'common.terms' | translate | lowercase }}</a\n        >\n        <div class=\"mb-2\" [ngbCollapse]=\"isTermsCollapsed\">\n            <label class=\"form-control-label font-md\">{{ 'common.terms' | translate }} ({{ 'common.optional' | translate }})</label>\n            <quill-editor\n                name=\"terms\"\n                [(ngModel)]=\"invoice.terms\"\n                [modules]=\"editorModules\"\n                [placeholder]=\"'common.enter-your-terms' | translate\"\n                [sanitize]=\"true\"\n            ></quill-editor>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-primary btn-w-sm\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n            {{ 'common.create' | translate }}\n        </button>\n    </div>\n</form>\n");

/***/ }),

/***/ "hbX0":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/invoices/invoice-modal/invoice-modal.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ 'common.invoice' | translate }}: {{ invoice ? invoice.subject : 'Loading invoice' }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-body e2e-invoice-modal\" *ngIf=\"invoice; else loading\">\n    <div class=\"row mb-2\">\n        <div class=\"col-sm-12\">\n            <label class=\"form-control-label mr-1\">{{ 'common.invoicee' | translate }}</label>\n            <user-display [user]=\"invoice.invoicee ? invoice.invoicee : undefined\"> </user-display>\n        </div>\n        <div class=\"col-sm-12\">\n            <div class=\"d-flex justify-content-end\">\n                <label class=\"form-control-label mr-1\" for=\"dueDate\">{{ 'common.due-date' | translate }}</label>\n                <div class=\"font-weight-bold\">{{ invoice.dueDate | formatDate: 'dd/MM/yyyy' }}</div>\n            </div>\n            <div class=\"d-flex justify-content-end\">\n                <label class=\"form-control-label mr-1\" for=\"dueDate\">{{ 'common.status' | translate }}</label>\n                <span\n                    class=\"text-capitalize label\"\n                    [ngClass]=\"{\n                        'label-success': invoice.status === 'completed',\n                        'label-info': invoice.status === 'pending',\n                        'label-danger': invoice.status === 'cancelled'\n                    }\"\n                    >{{ invoice.status }}</span\n                >\n            </div>\n        </div>\n    </div>\n    <div class=\"mb-3\">\n        <label class=\"form-control-label mr-1\">{{ 'common.invoicer' | translate }}</label>\n        <user-display [user]=\"invoice.invoicer ? invoice.invoicer : null\"> </user-display>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Description</th>\n                    <th class=\"text-right\" scope=\"col\">{{ 'common.price' | translate }}</th>\n                    <th class=\"text-right\" scope=\"col\">{{ 'common.quantity' | translate }}</th>\n                    <th class=\"text-right\" scope=\"col\">{{ 'common.total' | translate }}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of invoice.items\" class=\"bg-white\">\n                    <th scope=\"row\">{{ item.description }}</th>\n                    <td class=\"text-right\">{{ item.price | amount: invoice.currency.decimalPlaces }}</td>\n                    <td class=\"text-right\">{{ item.quantity }}</td>\n                    <td class=\"text-right\">{{ (item.total | amount: invoice.currency?.decimalPlaces) || 0 }} {{ invoice.currency?.code }}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <div class=\"d-flex flex-column justify-content-end\">\n                <div class=\"d-flex justify-content-between mb-2\">\n                    <span>Subtotal</span>\n                    <span>{{ (invoice.total | amount: invoice.currency?.decimalPlaces) || 0 }} {{ invoice.currency?.code }}</span>\n                </div>\n                <div class=\"d-flex justify-content-between mb-1\">\n                    <span>VAT ({{ invoice.valueAddedTax | percent }})</span>\n                    <span>{{ (invoice.tax | amount: invoice.currency?.decimalPlaces) || 0 }} {{ invoice.currency?.code }}</span>\n                </div>\n                <div class=\"d-flex justify-content-between\">\n                    <span class=\"font-weight-bold\">Total</span>\n                    <span class=\"font-weight-bold\"\n                        >{{ (invoice.net | amount: invoice.currency?.decimalPlaces) || 0 }} {{ invoice.currency?.code }}</span\n                    >\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"invoice.terms\">\n        <div [innerHTML]=\"invoice.terms\"></div>\n    </div>\n    <button\n        (click)=\"settle()\"\n        *ngIf=\"invoice.status === 'pending'\"\n        class=\"btn btn-lg btn-block btn-primary mt-1 e2e-pay-invoice-btn\"\n        [ngClass]=\"{ loading: isLoading }\"\n        [disabled]=\"isLoading\"\n    >\n        {{ 'common.pay-now' | translate }}\n    </button>\n</div>\n<ng-template #loading>\n    <div class=\"modal-body py-5\">\n        <svg class=\"spinner spinner-dark\" viewBox=\"0 0 50 50\">\n            <circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\"></circle>\n        </svg>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "iVTV":
/*!*******************************************************!*\
  !*** ./src/app/common/invoices/invoices.component.ts ***!
  \*******************************************************/
/*! exports provided: InvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function() { return InvoicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_invoices_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./invoices.component.html */ "Lmbc");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _common_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common.mixin */ "s/H0");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../list.component */ "aJRI");
/* harmony import */ var _models_accounting_invoice_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/accounting/invoice.model */ "5Ten");
/* harmony import */ var _services_accounting_invoice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/accounting/invoice.service */ "Zhhe");
/* harmony import */ var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/confirmation.service */ "fTmd");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/session.service */ "6g7h");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/toastr.service */ "N/y2");
/* harmony import */ var _invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./invoice-form/invoice-form.component */ "RPlz");
/* harmony import */ var _invoice_modal_invoice_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./invoice-modal/invoice-modal.component */ "neLm");
















let InvoicesComponent = class InvoicesComponent extends _list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"] {
    constructor(http, ngbModal, changeDetector, route, router, session, confirmation, toastr, invoices, translate) {
        super(http, ngbModal, changeDetector, route, router, session, confirmation);
        this.toastr = toastr;
        this.invoices = invoices;
        this.translate = translate;
        this.toStartCase = _common_mixin__WEBPACK_IMPORTED_MODULE_7__["toStartCase"];
        this.apiUrl = '/invoices';
        this.formComponent = _invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_14__["InvoiceFormComponent"];
    }
    viewInvoice(invoice) {
        const modal = this.ngbModal.open(_invoice_modal_invoice_modal_component__WEBPACK_IMPORTED_MODULE_15__["InvoiceModalComponent"], {
            backdrop: 'static',
            windowClass: 'modal-primary',
        });
        const viewInvoiceModal = modal.componentInstance;
        viewInvoiceModal.invoiceId = invoice.id;
        viewInvoiceModal.onSettle.subscribe(() => this.updateEvent.next());
    }
    cancel(invoice) {
        this.subscriptions.add(this.invoices
            .patch(invoice.id, [
            {
                op: 'replace',
                path: '/status',
                value: 'cancelled',
            },
        ])
            .subscribe(() => {
            this.toastr.success(this.translate.instant('common.invoice-cancelled'));
            this.updateEvent.next();
        }));
    }
    openInvoice(invoice) {
        this.subscriptions.add(this.session.createSignedUrl(`/invoices/${invoice.id}/file`).subscribe(signedUrl => {
            window.open(signedUrl, '_blank', 'noopener');
        }));
    }
    mapItem(item) {
        return new _models_accounting_invoice_model__WEBPACK_IMPORTED_MODULE_9__["Invoice"](item);
    }
};
InvoicesComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_12__["SessionService"] },
    { type: _services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmationService"] },
    { type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_13__["ToastrService"] },
    { type: _services_accounting_invoice_service__WEBPACK_IMPORTED_MODULE_10__["InvoiceService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
InvoicesComponent.propDecorators = {
    apiUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
InvoicesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'invoices',
        template: _raw_loader_invoices_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], InvoicesComponent);



/***/ }),

/***/ "neLm":
/*!**************************************************************************!*\
  !*** ./src/app/common/invoices/invoice-modal/invoice-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: InvoiceModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModalComponent", function() { return InvoiceModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_invoice_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./invoice-modal.component.html */ "hbX0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/wallets/wallets.service */ "hOWo");
/* harmony import */ var _services_accounting_invoice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/accounting/invoice.service */ "Zhhe");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/session.service */ "6g7h");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/toastr.service */ "N/y2");











let InvoiceModalComponent = class InvoiceModalComponent {
    constructor(activeModal, invoices, session, toastr, walletsService, translate) {
        this.activeModal = activeModal;
        this.invoices = invoices;
        this.session = session;
        this.toastr = toastr;
        this.walletsService = walletsService;
        this.translate = translate;
        this.isLoading = false;
        this.onSettle = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(this.invoices.fetchById(this.invoiceId).subscribe(invoice => {
            this.invoice = invoice;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    isInvoicee() {
        return this.session.user.id === this.invoice.invoicee.id;
    }
    settle() {
        this.isLoading = true;
        this.subscriptions.add(this.invoices
            .settle(this.invoice.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.isLoading = false;
        }))
            .subscribe(() => {
            this.toastr.success(this.translate.instant('common.invoice-settled'));
            this.walletsService.fetch();
            this.onSettle.emit();
            this.activeModal.close(true);
        }));
    }
};
InvoiceModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
    { type: _services_accounting_invoice_service__WEBPACK_IMPORTED_MODULE_8__["InvoiceService"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] },
    { type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] },
    { type: _store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_7__["WalletsService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
InvoiceModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'invoice-modal',
        template: _raw_loader_invoice_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], InvoiceModalComponent);



/***/ }),

/***/ "t60H":
/*!**********************************************************************************!*\
  !*** ./src/app/common/invoices/invoice-item-form/invoice-item-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: InvoiceItemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceItemFormComponent", function() { return InvoiceItemFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_invoice_item_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./invoice-item-form.component.html */ "wVV3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");




let InvoiceItemFormComponent = class InvoiceItemFormComponent {
    constructor() {
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.submitted = false;
        this.faTrash = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrash"];
    }
    submit() {
        this.submitted = true;
    }
    isValid() {
        return !!this.form.valid;
    }
};
InvoiceItemFormComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    onDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['form',] }]
};
InvoiceItemFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'invoice-item-form',
        template: _raw_loader_invoice_item_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], InvoiceItemFormComponent);



/***/ }),

/***/ "wVV3":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/invoices/invoice-item-form/invoice-item-form.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #form=\"ngForm\" class=\"form-validation\" [ngClass]=\"{ 'ng-submitted': submitted }\" novalidate>\n    <div class=\"form-row align-items-baseline\">\n        <div class=\"form-group col-12\">\n            <input\n                class=\"form-control\"\n                [ngClass]=\"size ? 'form-control-' + size : ''\"\n                [(ngModel)]=\"item.description\"\n                [placeholder]=\"'common.description' | translate\"\n                type=\"text\"\n                id=\"description\"\n                name=\"description\"\n                #description=\"ngModel\"\n                required\n            />\n            <div *ngIf=\"description.invalid && (submitted || description.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"description?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"form-group col-4\">\n            <input\n                class=\"form-control\"\n                [ngClass]=\"size ? 'form-control-' + size : ''\"\n                [(ngModel)]=\"item.quantity\"\n                placeholder=\"Qty\"\n                type=\"number\"\n                step=\"1\"\n                [min]=\"1\"\n                id=\"quantity\"\n                name=\"quantity\"\n                #quantity=\"ngModel\"\n                integerValidator\n                required\n            />\n            <div *ngIf=\"quantity.invalid && (submitted || quantity.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"quantity?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n            <div *ngIf=\"quantity.invalid && (submitted || quantity.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"quantity?.errors?.min\">{{ 'common.minimum-value-is-one' | translate }}</div>\n            </div>\n            <div *ngIf=\"quantity.invalid && (submitted || quantity.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"quantity?.errors?.invalidInteger\">{{ 'common.value-must-be-integer' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"form-group col-6\">\n            <input\n                class=\"form-control\"\n                [ngClass]=\"size ? 'form-control-' + size : ''\"\n                [(ngModel)]=\"item.price\"\n                [placeholder]=\"'common.price' | translate\"\n                type=\"number\"\n                id=\"price\"\n                [min]=\"0\"\n                step=\"2\"\n                name=\"price\"\n                [decimal]=\"2\"\n                #price=\"ngModel\"\n                decimalValidator\n                required\n            />\n            <div *ngIf=\"price.invalid && (submitted || price.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"price?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n            <div *ngIf=\"price.invalid && (submitted || price.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"price?.errors?.min\">{{ 'common.minimum-value-is-zero' | translate }}</div>\n            </div>\n            <div *ngIf=\"price.invalid && (submitted || price.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"price?.errors?.invalidDecimal\">{{ 'common.decimal-more-than-two' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"col-2\">\n            <a href class=\"btn btn-danger-air\" (click)=\"onDelete.emit(); $event.preventDefault()\">\n                <fa-icon [icon]=\"faTrash\"></fa-icon>\n            </a>\n        </div>\n    </div>\n</form>\n");

/***/ })

}]);
//# sourceMappingURL=default~admin-admin-module~organization-organization-module~user-invoices-user-invoices-module.js.map