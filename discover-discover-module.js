(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-discover-module"],{

/***/ "/qHs":
/*!*********************************************************************************************!*\
  !*** ./src/app/discover/offer/investment-confirmation/investment-confirmation.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: InvestmentConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentConfirmationComponent", function() { return InvestmentConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_investment_confirmation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./investment-confirmation.component.html */ "NeX4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "uB96");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_common_services_sgpmx_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/services/sgpmx.service */ "BqkS");
/* harmony import */ var _common_common_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/common.mixin */ "s/H0");
/* harmony import */ var _common_file__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/file */ "B1CS");
/* harmony import */ var _common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/models/accounting/currency.model */ "/e3T");
/* harmony import */ var _common_payment_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/payment/payment-confirmation/payment-confirmation.component */ "n93W");
/* harmony import */ var _common_services_intercom_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/services/intercom.service */ "rSOl");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_token_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/services/token.service */ "JdTs");















let InvestmentConfirmationComponent = class InvestmentConfirmationComponent extends _common_payment_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_11__["PaymentConfirmationComponent"] {
    constructor(modal, tokenService, session, sgpmxService, translate, intercom) {
        super(modal, tokenService, session, sgpmxService, translate);
        this.intercom = intercom;
        this.toStartCase = _common_common_mixin__WEBPACK_IMPORTED_MODULE_8__["toStartCase"];
        this.buildFileUrl = _common_file__WEBPACK_IMPORTED_MODULE_9__["buildFileUrl"];
        this.faFileAlt = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileAlt"];
        this.documentsRead = false;
    }
    ngOnInit() {
        super.ngOnInit();
        this.amount = _common_models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_10__["Currency"].convert(this.transaction.amount, this.transaction.currency, this.product.fundingCurrency);
    }
    calculateQuantity(amount, price) {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(amount).div(price).toString();
    }
};
InvestmentConfirmationComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] },
    { type: _common_services_token_service__WEBPACK_IMPORTED_MODULE_14__["TokenService"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"] },
    { type: src_app_common_services_sgpmx_service__WEBPACK_IMPORTED_MODULE_7__["SgpmxService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _common_services_intercom_service__WEBPACK_IMPORTED_MODULE_12__["IntercomService"] }
];
InvestmentConfirmationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'investment-confirmation',
        template: _raw_loader_investment_confirmation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], InvestmentConfirmationComponent);



/***/ }),

/***/ "1MCB":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discover/offer/product-terms/product-terms.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ 'common.terms-of-investment' | translate }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-subheader\">{{ 'common.you-must-accept-the-terms-to-view' | translate }}</div>\n<div class=\"modal-body terms-container text-body\">\n    <ng-container *ngIf=\"contentStream | async as content; else loadingContent\">\n        <div [innerHtml]=\"content | safeHtml\"></div>\n    </ng-container>\n    <ng-template #loadingContent>\n        <svg class=\"spinner spinner-dark\" viewBox=\"0 0 50 50\">\n            <circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\"></circle>\n        </svg>\n        <p class=\"mb-0 mt-5 text-center\">{{ 'common.loading-terms' | translate }}</p>\n    </ng-template>\n</div>\n<div class=\"modal-footer flex-column flex-md-row justify-content-center justify-content-md-end\">\n    <button class=\"btn btn-link mr-md-auto mb-2 mb-md-0\" (click)=\"scrollDown()\">{{ 'common.scroll-to-bottom' | translate }}</button>\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-default btn-w-sm\" (click)=\"activeModal.dismiss()\">{{ 'common.decline' | translate }}</button>\n        <button class=\"btn btn-primary btn-w-sm ml-1\" (click)=\"accept()\" [disabled]=\"!isDown\">{{ 'common.accept' | translate }}</button>\n    </div>\n</div>\n");

/***/ }),

/***/ "85Cy":
/*!***************************************************!*\
  !*** ./src/app/discover/offer/offer.component.ts ***!
  \***************************************************/
/*! exports provided: OfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferComponent", function() { return OfferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_offer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./offer.component.html */ "jD8F");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "uB96");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_common_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/common.mixin */ "s/H0");
/* harmony import */ var _common_file__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/file */ "B1CS");
/* harmony import */ var _common_models_core_user_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/models/core/user.model */ "vk+e");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");
/* harmony import */ var _investment_confirmation_investment_confirmation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./investment-confirmation/investment-confirmation.component */ "/qHs");
/* harmony import */ var _product_terms_product_terms_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-terms/product-terms.component */ "wyUZ");

















let OfferComponent = class OfferComponent {
    constructor(route, http, ngbModal, session, router) {
        this.route = route;
        this.http = http;
        this.ngbModal = ngbModal;
        this.session = session;
        this.router = router;
        this.contentBlurred = true;
        this.toStartCase = _common_common_mixin__WEBPACK_IMPORTED_MODULE_11__["toStartCase"];
        this.buildFileUrl = _common_file__WEBPACK_IMPORTED_MODULE_12__["buildFileUrl"];
        this.faFileAlt = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileAlt"];
        this.faCaretRight = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCaretRight"];
        this.currencies = [];
        this.allocation = {
            baseTransaction: {
                type: 'investment',
            },
            product: {},
        };
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const modal = this.ngbModal.open(_product_terms_product_terms_component__WEBPACK_IMPORTED_MODULE_16__["ProductTermsComponent"], {
                windowClass: 'modal-primary',
                backdrop: 'static',
                keyboard: false,
            });
            const component = modal.componentInstance;
            const contentRetrievedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
            component.contentStream = contentRetrievedEvent.asObservable();
            modal.result
                .then(() => {
                this.contentBlurred = false;
            })
                .catch(() => {
                this.router.navigate(['/discover']);
            });
            this.http
                .get(`/products/${params.get('productSlug')}`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(product => {
                contentRetrievedEvent.next(product.terms || null);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["flatMap"])(product => Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])([
                Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(product),
                this.http.get(`/products/${product.id}/files`),
            ])))
                .subscribe(([product, files]) => {
                this.product = product;
                this.files = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"])(files, file => file.productFile.purpose);
                this.allocation.product.id = product.id;
                this.allocation.baseTransaction.counterWallet = {
                    product,
                };
            });
            this.subscriptions.add(this.session.userStream.subscribe(user => {
                this.allocation.baseTransaction.baseWallet = {
                    user: new _common_models_core_user_model__WEBPACK_IMPORTED_MODULE_13__["User"](user),
                };
                this.allocation.user = new _common_models_core_user_model__WEBPACK_IMPORTED_MODULE_13__["User"](user);
            }));
        });
        this.http
            .get('/currencies', {
            params: {
                limit: 100 + '',
                'filter.type': 'fiat',
            },
        })
            .subscribe(response => {
            this.currencies = response.data;
            if (this.currencies.length) {
                this.allocation.baseTransaction.currency = this.currencies[0];
            }
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    submit() {
        if (this.offerForm.invalid) {
            return;
        }
        const modal = this.ngbModal.open(_investment_confirmation_investment_confirmation_component__WEBPACK_IMPORTED_MODULE_15__["InvestmentConfirmationComponent"], {
            windowClass: 'modal-primary',
            backdrop: 'static',
            keyboard: false,
        });
        const component = modal.componentInstance;
        component.transaction = this.allocation.baseTransaction;
        component.product = this.product;
        component.files = this.files;
        component.onConfirm.subscribe(() => {
            this.http
                .post('/allocations', {
                baseTransaction: {
                    amount: this.allocation.baseTransaction.amount + '',
                    currency: { code: this.allocation.baseTransaction.currency.code },
                },
                product: { id: this.allocation.product.id },
                user: this.allocation.user ? { id: this.allocation.user.id } : null,
            })
                .subscribe(() => {
                component.isCompleted = true;
                component.onViewTransactions.subscribe(() => {
                    modal.close();
                    return this.router.navigate(['/discover/investments']);
                });
            }, () => {
                component.isSubmitted = false;
                component.reset();
            });
        });
    }
};
OfferComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
OfferComponent.propDecorators = {
    offerForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['offerForm',] }]
};
OfferComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'offer',
        template: _raw_loader_offer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], OfferComponent);



/***/ }),

/***/ "884B":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discover/discover.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-24\">\n            <h3 class=\"font-weight-light text-center my-4\">{{ 'common.exclusive-investment-opportunities' | translate }}</h3>\n            <div class=\"tab-nav mb-4\">\n                <a\n                    href\n                    class=\"tab-nav-item text-capitalize\"\n                    (click)=\"$event.preventDefault(); queryParams = getDefaultQuery(); searchEvent.next()\"\n                    [ngClass]=\"{ active: isActiveQuery(getDefaultQuery()) }\"\n                >\n                    {{ 'common.all' | translate }}\n                </a>\n                <a\n                    href\n                    class=\"tab-nav-item text-capitalize\"\n                    *ngFor=\"let type of productTypes\"\n                    (click)=\"$event.preventDefault(); queryParams['type']['eq'] = type; searchEvent.next()\"\n                    [ngClass]=\"{ active: isActiveQuery({ type: { eq: [type] } }) }\"\n                >\n                    {{ 'common.' + type | translate }}\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"pb-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-24\">\n                <ng-container *ngIf=\"itemsStream | async as items\">\n                    <div class=\"grid\">\n                        <div class=\"cell\" *ngFor=\"let product of items\">\n                            <div class=\"product-box\">\n                                <a [routerLink]=\"['/discover', product.slug]\">\n                                    <img [src]=\"buildFileUrl(product.image) | safeUrl\" />\n                                    <div class=\"investment-badges\">\n                                        <span class=\"type-badge\">{{ product.type }}</span>\n                                    </div>\n                                </a>\n                                <div class=\"product-box-body\">\n                                    <div class=\"product-box-title\">{{ product.slogan }}</div>\n                                    <p class=\"product-box-text\">{{ product.summary | truncate: true:140 }}</p>\n                                    <a class=\"btn btn-primary\" [routerLink]=\"['/discover', product.slug]\">{{ 'common.view-offer' | translate }}</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "NeX4":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discover/offer/investment-confirmation/investment-confirmation.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ 'common.confirm-investment' | translate }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"modal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-body\">\n    <ng-container *ngIf=\"!isSubmitted; else loader\">\n        <p *ngIf=\"transaction.currency?.code !== product.fundingCurrency?.code\">\n            {{ 'common.your' | translate }} <span class=\"text-primary\">{{ transaction.amount }} {{ transaction.currency?.code }}</span>\n            {{ 'common.will-be-converted-to' | translate }}\n            <span class=\"text-primary\">~ {{ amount | amount }} {{ product.fundingCurrency?.code }}</span\n            >.\n        </p>\n        <table class=\"table table-borderless\">\n            <thead>\n                <tr>\n                    <th scope=\"col\" class=\"font-weight-bold b-t-0\">{{ 'common.description' | translate }}</th>\n                    <th scope=\"col\" class=\"font-weight-bold text-center b-t-0\">Qty.</th>\n                    <th scope=\"col\" class=\"font-weight-bold w-25 text-right b-t-0\">{{ 'common.price' | translate }}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class=\"text-primary\">{{ product?.name }} ({{ product?.currency?.code }})</td>\n                    <td class=\"text-center\">\n                        {{ calculateQuantity(amount, product?.currency?.exchangeRate) | number: '1.0-' + transaction.currency.decimalPlaces }}\n                    </td>\n                    <td class=\"text-right\">{{ product?.currency?.exchangeRate | amount }} {{ product.fundingCurrency?.code }}</td>\n                </tr>\n                <tr>\n                    <td colspan=\"2\" class=\"text-right\">{{ 'common.subtotal' | translate }}</td>\n                    <td class=\"text-right\">{{ amount | amount }} {{ product.fundingCurrency?.code }}</td>\n                </tr>\n                <tr>\n                    <td colspan=\"2\" class=\"text-right b-t-0\">VAT</td>\n                    <td class=\"text-right b-t-0\">0.00 {{ product.fundingCurrency?.code }}</td>\n                </tr>\n                <tr>\n                    <td colspan=\"2\" class=\"text-right b-t-0 font-weight-bold\">{{ 'common.total' | translate }}</td>\n                    <td class=\"text-right b-t-0 font-weight-bold text-primary\">{{ amount | amount }} {{ product.fundingCurrency?.code }}</td>\n                </tr>\n            </tbody>\n        </table>\n        <h6 class=\"text-muted\">{{ 'common.product-related-documents' | translate }}:</h6>\n        <div class=\"list-group\">\n            <a class=\"list-group-item list-group-item-action\" [href]=\"buildFileUrl(file)\" target=\"_blank\" rel=\"noopener\" *ngFor=\"let file of files\">\n                <fa-icon [icon]=\"faFileAlt\" class=\"text-primary mr-2\"></fa-icon>\n                <span>{{ toStartCase(file.productFile.purpose) }}</span>\n            </a>\n        </div>\n        <label class=\"custom-control custom-checkbox my-3 mx-2\">\n            <input type=\"checkbox\" class=\"custom-control-input\" name=\"documentsRead\" [(ngModel)]=\"documentsRead\" />\n            <span class=\"custom-control-label font-md\"\n                >{{ 'common.in-submitting-investment' | translate }} <b>{{ 'common.product-related-documents' | translate | lowercase }}.</b></span\n            >\n        </label>\n        <form class=\"form-validation\" #passwordForm=\"ngForm\" (ngSubmit)=\"submit()\" novalidate>\n            <div class=\"alert alert-danger\" *ngIf=\"alert\">\n                {{ alert }}\n            </div>\n            <div class=\"form-group\" *ngIf=\"!showTwoFactorForm\">\n                <div class=\"input-group input-group-lg\">\n                    <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                            <fa-icon [icon]=\"faLockAlt\"></fa-icon>\n                        </span>\n                    </span>\n                    <input\n                        type=\"password\"\n                        class=\"form-control\"\n                        name=\"password\"\n                        [placeholder]=\"'common.enter-your-password' | translate\"\n                        [(ngModel)]=\"password\"\n                        [focus]=\"true\"\n                        required\n                    />\n                </div>\n            </div>\n            <div class=\"form-group\" *ngIf=\"showTwoFactorForm\">\n                <div class=\"input-group input-group-lg\">\n                    <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                            <fa-icon [icon]=\"faMobile\"></fa-icon>\n                        </span>\n                    </span>\n                    <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"twoFactorCode\"\n                        [placeholder]=\"'common.enter-2fa-code' | translate\"\n                        number\n                        [(ngModel)]=\"twoFactorCode\"\n                        [focus]=\"true\"\n                        required\n                    />\n                </div>\n            </div>\n            <button\n                type=\"submit\"\n                class=\"btn btn-lg btn-block btn-primary\"\n                [ngClass]=\"{ loading: isLoading }\"\n                [disabled]=\"!passwordForm.valid || isLoading || !documentsRead\"\n            >\n                {{ 'common.confirm' | translate }}\n            </button>\n        </form>\n    </ng-container>\n    <ng-template #loader>\n        <div class=\"circle-loader\" [ngClass]=\"{ 'load-complete': isCompleted }\">\n            <div class=\"checkmark draw\"></div>\n        </div>\n        <h4 class=\"text-center text-primary\">\n            {{ !isCompleted ? ('common.requesting-investment' | translate) + '...' : ('common.your-investment-has-been-requested' | translate) }}\n        </h4>\n        <button\n            type=\"button\"\n            class=\"btn btn-lg btn-block btn-primary-air\"\n            (click)=\"onViewTransactions.emit()\"\n            [disabled]=\"isSubmitted && !isCompleted\"\n        >\n            {{ 'common.view-investment' | translate }}\n        </button>\n    </ng-template>\n</div>\n");

/***/ }),

/***/ "Q/Z+":
/*!************************************************!*\
  !*** ./src/app/discover/discover.component.ts ***!
  \************************************************/
/*! exports provided: DiscoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverComponent", function() { return DiscoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_discover_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./discover.component.html */ "884B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/file */ "B1CS");
/* harmony import */ var _common_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/list.component */ "aJRI");





let DiscoverComponent = class DiscoverComponent extends _common_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"] {
    constructor() {
        super(...arguments);
        this.buildFileUrl = _common_file__WEBPACK_IMPORTED_MODULE_3__["buildFileUrl"];
        this.productTypes = ['bond', 'loan', 'option', 'property', 'share', 'unit'];
        this.apiUrl = '/products';
        this.apiQuery = ['type'];
        this.defaultQuery = { type: {} };
    }
};
DiscoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'discover',
        template: _raw_loader_discover_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DiscoverComponent);



/***/ }),

/***/ "T7nf":
/*!*************************************************************************!*\
  !*** ./src/app/discover/user-allocations/user-allocations.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserAllocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAllocationsComponent", function() { return UserAllocationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_allocations_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-allocations.component.html */ "oxGN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "WE53");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "uB96");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_allocations_allocations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/allocations/allocations.component */ "M0kQ");
/* harmony import */ var _common_file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/file */ "B1CS");
/* harmony import */ var _common_models_core_user_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/models/core/user.model */ "vk+e");










let UserAllocationsComponent = class UserAllocationsComponent extends _common_allocations_allocations_component__WEBPACK_IMPORTED_MODULE_7__["AllocationsComponent"] {
    constructor() {
        super(...arguments);
        this.faEllipsisV = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEllipsisV"];
        this.faCreditCardFront = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCreditCardFront"];
        this.faClipboardCheck = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faClipboardCheck"];
        this.faTruck = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTruck"];
        this.faShoppingCart = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"];
        this.buildFileUrl = _common_file__WEBPACK_IMPORTED_MODULE_8__["buildFileUrl"];
        this.apiQuery = ['status'];
        this.defaultQuery = { status: {} };
    }
    find() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.session.userStream), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(([_, user]) => {
            this.user = new _common_models_core_user_model__WEBPACK_IMPORTED_MODULE_9__["User"](user);
            this.apiUrl = `/users/${user.id}/allocations`;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(() => super.find()));
    }
};
UserAllocationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'user-allocations',
        template: _raw_loader_user_allocations_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserAllocationsComponent);



/***/ }),

/***/ "WvqM":
/*!**********************************************!*\
  !*** ./node_modules/ease-component/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


// easing functions from "Tween.js"

exports.linear = function(n){
  return n;
};

exports.inQuad = function(n){
  return n * n;
};

exports.outQuad = function(n){
  return n * (2 - n);
};

exports.inOutQuad = function(n){
  n *= 2;
  if (n < 1) return 0.5 * n * n;
  return - 0.5 * (--n * (n - 2) - 1);
};

exports.inCube = function(n){
  return n * n * n;
};

exports.outCube = function(n){
  return --n * n * n + 1;
};

exports.inOutCube = function(n){
  n *= 2;
  if (n < 1) return 0.5 * n * n * n;
  return 0.5 * ((n -= 2 ) * n * n + 2);
};

exports.inQuart = function(n){
  return n * n * n * n;
};

exports.outQuart = function(n){
  return 1 - (--n * n * n * n);
};

exports.inOutQuart = function(n){
  n *= 2;
  if (n < 1) return 0.5 * n * n * n * n;
  return -0.5 * ((n -= 2) * n * n * n - 2);
};

exports.inQuint = function(n){
  return n * n * n * n * n;
}

exports.outQuint = function(n){
  return --n * n * n * n * n + 1;
}

exports.inOutQuint = function(n){
  n *= 2;
  if (n < 1) return 0.5 * n * n * n * n * n;
  return 0.5 * ((n -= 2) * n * n * n * n + 2);
};

exports.inSine = function(n){
  return 1 - Math.cos(n * Math.PI / 2 );
};

exports.outSine = function(n){
  return Math.sin(n * Math.PI / 2);
};

exports.inOutSine = function(n){
  return .5 * (1 - Math.cos(Math.PI * n));
};

exports.inExpo = function(n){
  return 0 == n ? 0 : Math.pow(1024, n - 1);
};

exports.outExpo = function(n){
  return 1 == n ? n : 1 - Math.pow(2, -10 * n);
};

exports.inOutExpo = function(n){
  if (0 == n) return 0;
  if (1 == n) return 1;
  if ((n *= 2) < 1) return .5 * Math.pow(1024, n - 1);
  return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
};

exports.inCirc = function(n){
  return 1 - Math.sqrt(1 - n * n);
};

exports.outCirc = function(n){
  return Math.sqrt(1 - (--n * n));
};

exports.inOutCirc = function(n){
  n *= 2
  if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
  return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
};

exports.inBack = function(n){
  var s = 1.70158;
  return n * n * (( s + 1 ) * n - s);
};

exports.outBack = function(n){
  var s = 1.70158;
  return --n * n * ((s + 1) * n + s) + 1;
};

exports.inOutBack = function(n){
  var s = 1.70158 * 1.525;
  if ( ( n *= 2 ) < 1 ) return 0.5 * ( n * n * ( ( s + 1 ) * n - s ) );
  return 0.5 * ( ( n -= 2 ) * n * ( ( s + 1 ) * n + s ) + 2 );
};

exports.inBounce = function(n){
  return 1 - exports.outBounce(1 - n);
};

exports.outBounce = function(n){
  if ( n < ( 1 / 2.75 ) ) {
    return 7.5625 * n * n;
  } else if ( n < ( 2 / 2.75 ) ) {
    return 7.5625 * ( n -= ( 1.5 / 2.75 ) ) * n + 0.75;
  } else if ( n < ( 2.5 / 2.75 ) ) {
    return 7.5625 * ( n -= ( 2.25 / 2.75 ) ) * n + 0.9375;
  } else {
    return 7.5625 * ( n -= ( 2.625 / 2.75 ) ) * n + 0.984375;
  }
};

exports.inOutBounce = function(n){
  if (n < .5) return exports.inBounce(n * 2) * .5;
  return exports.outBounce(n * 2 - 1) * .5 + .5;
};

// aliases

exports['in-quad'] = exports.inQuad;
exports['out-quad'] = exports.outQuad;
exports['in-out-quad'] = exports.inOutQuad;
exports['in-cube'] = exports.inCube;
exports['out-cube'] = exports.outCube;
exports['in-out-cube'] = exports.inOutCube;
exports['in-quart'] = exports.inQuart;
exports['out-quart'] = exports.outQuart;
exports['in-out-quart'] = exports.inOutQuart;
exports['in-quint'] = exports.inQuint;
exports['out-quint'] = exports.outQuint;
exports['in-out-quint'] = exports.inOutQuint;
exports['in-sine'] = exports.inSine;
exports['out-sine'] = exports.outSine;
exports['in-out-sine'] = exports.inOutSine;
exports['in-expo'] = exports.inExpo;
exports['out-expo'] = exports.outExpo;
exports['in-out-expo'] = exports.inOutExpo;
exports['in-circ'] = exports.inCirc;
exports['out-circ'] = exports.outCirc;
exports['in-out-circ'] = exports.inOutCirc;
exports['in-back'] = exports.inBack;
exports['out-back'] = exports.outBack;
exports['in-out-back'] = exports.inOutBack;
exports['in-bounce'] = exports.inBounce;
exports['out-bounce'] = exports.outBounce;
exports['in-out-bounce'] = exports.inOutBounce;


/***/ }),

/***/ "jD8F":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discover/offer/offer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{ blurred: contentBlurred }\">\n    <section class=\"bg-white space-sm\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-14 mb-4 mb-sm-0\">\n                    <img [src]=\"buildFileUrl($any(product.image))\" class=\"rounded img-fluid\" *ngIf=\"product?.image\" />\n                </div>\n                <div class=\"col-lg-9 d-flex flex-column justify-content-between mx-auto\">\n                    <div>\n                        <h1 class=\"mb-2\">{{ product?.name }}</h1>\n                        <h2 class=\"lead\">{{ product?.slogan }}</h2>\n                    </div>\n                    <div>\n                        <table class=\"table table-sm table-borderless mb-0\">\n                            <tbody>\n                                <tr>\n                                    <th class=\"pb-1 px-0 text-label\" scope=\"row\">{{ 'common.product-type' | translate }}:</th>\n                                    <td class=\"text-right px-0 text-capitalize\">\n                                        {{ product?.type }}\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <th class=\"pb-1 px-0 text-label\" scope=\"row\">{{ 'common.minimum-investment' | translate }}:</th>\n                                    <td class=\"text-right text-primary px-0\">\n                                        {{ product?.minimumInvestment | number: '1.0-0' }} {{ product?.fundingCurrency?.code }}\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <th class=\"pb-1 px-0 text-label\" scope=\"row\">{{ 'common.opening-date' | translate }}:</th>\n                                    <td class=\"text-right px-0\">{{ product?.openingDate | date: 'longDate' }}</td>\n                                </tr>\n                                <tr>\n                                    <th class=\"pb-1 px-0 text-label\" scope=\"row\">{{ 'common.closing-date' | translate }}:</th>\n                                    <td class=\"text-right px-0\">{{ product?.closingDate | date: 'longDate' }}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div>\n                        <form\n                            class=\"form-validation\"\n                            #offerForm=\"ngForm\"\n                            (ngSubmit)=\"submit()\"\n                            [ngClass]=\"{ 'ng-submitted': offerForm.submitted }\"\n                            autocomplete=\"false\"\n                            novalidate\n                        >\n                            <div class=\"row\">\n                                <div class=\"form-group col-sm-12\">\n                                    <label class=\"font-md\" for=\"amount\">{{ 'common.amount' | translate }}</label>\n                                    <input\n                                        type=\"number\"\n                                        class=\"form-control form-control-lg\"\n                                        id=\"amount\"\n                                        name=\"amount\"\n                                        [placeholder]=\"'0.' + '0'.repeat($any(allocation.baseTransaction).currency?.decimalPlaces)\"\n                                        [(ngModel)]=\"$any(allocation.baseTransaction).amount\"\n                                        #amount=\"ngModel\"\n                                        required\n                                    />\n                                    <div *ngIf=\"amount.invalid && (offerForm.submitted || amount.dirty)\" class=\"error-messages\">\n                                        <div class=\"form-control-feedback\" *ngIf=\"amount?.errors?.required\">\n                                            {{ 'common.this-is-required' | translate }}\n                                        </div>\n                                        <div class=\"form-control-feedback\" *ngIf=\"amount?.errors?.max\">\n                                            {{ 'common.amount-exceeds-maximum' | translate }}.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-sm-12\">\n                                    <label class=\"font-md\" for=\"currency\">{{ 'common.currency' | translate }}</label>\n                                    <currency-select\n                                        [(currency)]=\"$any(allocation.baseTransaction).currency\"\n                                        [isLarge]=\"true\"\n                                        [required]=\"true\"\n                                        [currencyTypes]=\"['fiat']\"\n                                    ></currency-select>\n                                </div>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-success btn-lg btn-block\">{{ 'common.invest-now' | translate }}</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"space-sm\">\n        <div class=\"container\">\n            <div class=\"row justify-content-between\">\n                <div class=\"col-24 col-md-16 col-lg-14\">\n                    <h5 class=\"mb-4\">{{ 'common.overview' | translate }}</h5>\n                    <article *ngIf=\"product\" [innerHtml]=\"product.content || ''\"></article>\n                    <hr />\n                    <h5 class=\"mb-3\">{{ 'common.disclaimer' | translate }}</h5>\n                    <article>\n                        <p class=\"font-sm text-gray\">\n                            {{ 'offer.investing-in-private' | translate }}\n                        </p>\n                        <p class=\"font-sm text-gray\">\n                            {{ 'offer.we-are-targeted' | translate }}\n                        </p>\n                    </article>\n                </div>\n                <div class=\"col-24 col-md-8\">\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            <h6>{{ 'common.downloads' | translate }}</h6>\n                        </div>\n                        <div class=\"card-body\">\n                            <ul class=\"list-unstyled\">\n                                <li class=\"mb-2\" *ngFor=\"let file of files\">\n                                    <fa-icon [icon]=\"faFileAlt\" class=\"text-muted mr-2\"></fa-icon>\n                                    <a [href]=\"buildFileUrl(file)\" target=\"_blank\" rel=\"noopener\">{{ toStartCase(file.productFile.purpose) }}</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n");

/***/ }),

/***/ "oxGN":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discover/user-allocations/user-allocations.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-page pb-3\">\n    <div class=\"row justify-content-between align-items-center pb-2\">\n        <div class=\"col-auto\">\n            <h5 class=\"mb-0\">{{ 'common.investments' | translate }}</h5>\n        </div>\n        <div class=\"col-auto d-flex justify-content-end\">\n            <ol class=\"breadcrumb px-0\">\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/discover']\">{{ 'common.discover' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item active\">{{ 'common.investments' | translate }}</li>\n            </ol>\n        </div>\n    </div>\n    <div class=\"row justify-content-between align-items-center\">\n        <div class=\"col\">\n            <button\n                type=\"button\"\n                class=\"btn mr-2\"\n                (click)=\"queryParams = getDefaultQuery(); searchEvent.next()\"\n                [ngClass]=\"isActiveQuery(getDefaultQuery()) ? 'btn-primary' : 'btn-primary-air'\"\n            >\n                {{ 'common.all' | translate }}\n            </button>\n            <div class=\"btn-group mr-2\">\n                <button\n                    type=\"button\"\n                    class=\"btn\"\n                    (click)=\"queryParams['status']['or'] = ['pending']; searchEvent.next()\"\n                    [ngClass]=\"isActiveQuery({ status: { or: ['pending'] } }) ? 'btn-primary' : 'btn-primary-air'\"\n                >\n                    {{ 'common.pending' | translate }}\n                </button>\n                <button\n                    type=\"button\"\n                    class=\"btn\"\n                    (click)=\"queryParams['status']['or'] = ['completed']; searchEvent.next()\"\n                    [ngClass]=\"isActiveQuery({ status: { or: ['completed'] } }) ? 'btn-primary' : 'btn-primary-air'\"\n                >\n                    {{ 'common.completed' | translate }}\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container mb-3\">\n    <div class=\"card\">\n        <div class=\"card-header b-b-0\">{{ 'common.investments' | translate }}</div>\n        <div class=\"table-responsive\">\n            <table class=\"table table-hover table-card\">\n                <thead class=\"thead-light\">\n                    <tr>\n                        <th scope=\"col\">{{ 'common.name' | translate }}</th>\n                        <th scope=\"col\">{{ 'common.progress' | translate }}</th>\n                        <th scope=\"col\">{{ 'user-allocations.invested' | translate }}</th>\n                        <th scope=\"col\">{{ 'user-allocations.issued' | translate }}</th>\n                        <th scope=\"col\">{{ 'common.created-at' | translate }}</th>\n                        <th scope=\"col\"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container *ngIf=\"itemsStream | async; let items\">\n                        <ng-container *ngIf=\"items.length === 0; else rows\">\n                            <tr>\n                                <td class=\"bg-white\" colspan=\"12\">\n                                    <div class=\"mx-auto p-3 mt-2 mb-4 text-center max-width-sm\">\n                                        <img src=\"/img/icons/search.svg\" class=\"img-sm mb-2\" />\n                                        <h4 class=\"mb-1\">{{ 'user-allocations.find-investment' | translate }}</h4>\n                                        <p class=\"mb-3 text-gray\">{{ 'user-allocations.find-exclusive-investment' | translate }}</p>\n                                        <button type=\"button\" class=\"btn btn-primary-air btn-lg btn-block\" [routerLink]=\"['/discover']\">\n                                            {{ 'user-allocations.discover-now' | translate }}\n                                        </button>\n                                    </div>\n                                </td>\n                            </tr>\n                        </ng-container>\n                        <ng-template #rows>\n                            <tr *ngFor=\"let allocation of itemsStream | async\" class=\"bg-white\">\n                                <th scope=\"row\" class=\"w-25\">\n                                    <a class=\"media align-items-center text-body\" [routerLink]=\"['/discover', allocation.product?.slug]\">\n                                        <img [src]=\"buildFileUrl(allocation.product?.image) | safeUrl\" class=\"avatar avatar-md rounded mr-3\" />\n                                        <div class=\"media-body\">\n                                            <h6 class=\"mb-0\">{{ allocation.product?.name }}</h6>\n                                            <span class=\"text-muted font-sm\">{{ allocation.id | truncate: false:7:'' }}</span>\n                                        </div>\n                                    </a>\n                                </th>\n                                <td>\n                                    <ul class=\"step d-flex flex-nowrap\">\n                                        <li\n                                            class=\"step-item\"\n                                            [ngClass]=\"{ active: allocation.status === 'pending', failed: allocation.status === 'cancelled' }\"\n                                        >\n                                            <a class=\"small\">{{\n                                                (allocation.status === 'cancelled' ? 'common.cancelled' : 'common.requested') | translate\n                                            }}</a>\n                                        </li>\n                                        <li class=\"step-item\">\n                                            <a class=\"small\">{{ 'common.approved' | translate }}</a>\n                                        </li>\n                                        <li class=\"step-item\">\n                                            <a class=\"small\">{{ 'user-allocations.issued' | translate }}</a>\n                                        </li>\n                                    </ul>\n                                </td>\n                                <td [ngClass]=\"allocation.status === 'cancelled' ? 'text-muted' : 'text-primary'\">\n                                    {{ allocation.baseTransaction?.amount | amount: allocation.baseTransaction?.currency?.decimalPlaces }}\n                                    {{ allocation.baseTransaction?.currency?.code }}\n                                </td>\n                                <td [ngClass]=\"allocation.status === 'completed' ? 'text-green' : 'text-muted'\">\n                                    {{ allocation.counterTransaction?.amount | amount: allocation.counterTransaction?.currency?.decimalPlaces }}\n                                    {{ allocation.counterTransaction?.currency?.code }}\n                                </td>\n                                <td class=\"w-15\">\n                                    {{ allocation.createdAt | date: 'medium' }}\n                                </td>\n                                <td class=\"action pr-4\">\n                                    <div\n                                        ngbDropdown\n                                        container=\"body\"\n                                        placement=\"bottom-right\"\n                                        #dropdown=\"ngbDropdown\"\n                                        (click)=\"$event.stopPropagation()\"\n                                    >\n                                        <button class=\"btn-options\" type=\"button\" ngbDropdownToggle><fa-icon [icon]=\"faEllipsisV\"></fa-icon></button>\n                                        <div class=\"dropdown-menu dropdown-menu-sm\" ngbDropdownMenu *ngIf=\"allocation.status === 'pending'\">\n                                            <a href ngbDropdownItem (click)=\"cancel(allocation); $event.preventDefault()\">{{\n                                                'common.cancel' | translate\n                                            }}</a>\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                        </ng-template>\n                    </ng-container>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <footer class=\"table-footer\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-8\">\n                <ng-select\n                    [(ngModel)]=\"limit\"\n                    dropdownPosition=\"auto\"\n                    (change)=\"select(1)\"\n                    [items]=\"limitOpts\"\n                    [placeholder]=\"'common.show-entries-per-page' | translate\"\n                    [clearable]=\"false\"\n                    [searchable]=\"false\"\n                    required\n                >\n                    <ng-template ng-label-tmp let-item=\"item\"\n                        >{{ 'common.show' | translate }} {{ item }} {{ 'common.per-page' | translate }}</ng-template\n                    >\n                    <ng-template ng-option-tmp let-item=\"item\">{{ item }} entries</ng-template>\n                </ng-select>\n            </div>\n            <div class=\"col-lg-18 col-md-16 d-flex justify-content-center justify-content-md-end mt-3 mt-md-0\">\n                <ngb-pagination\n                    [(page)]=\"page\"\n                    [collectionSize]=\"count\"\n                    (pageChange)=\"select()\"\n                    [pageSize]=\"limit\"\n                    [maxSize]=\"4\"\n                    [rotate]=\"false\"\n                    [boundaryLinks]=\"true\"\n                >\n                </ngb-pagination>\n            </div>\n        </div>\n    </footer>\n</div>\n");

/***/ }),

/***/ "wyUZ":
/*!*************************************************************************!*\
  !*** ./src/app/discover/offer/product-terms/product-terms.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductTermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTermsComponent", function() { return ProductTermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_terms_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-terms.component.html */ "1MCB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/services/toastr.service */ "N/y2");







const ease = __webpack_require__(/*! ease-component */ "WvqM");
const scroll = __webpack_require__(/*! scroll */ "zELP");
let ProductTermsComponent = class ProductTermsComponent {
    constructor(element, toastr, activeModal, translate) {
        this.element = element;
        this.toastr = toastr;
        this.activeModal = activeModal;
        this.translate = translate;
        this.isDown = false;
        this.isLoaded = false;
        this.scrollHandler = () => {
            // 25px threshold
            if (this.isLoaded &&
                !this.isDown &&
                this.modalContainer.scrollTop >= this.modalContainer.scrollHeight - this.modalContainer.offsetHeight - 25) {
                setTimeout(() => {
                    this.isDown = true;
                });
            }
        };
    }
    ngOnInit() {
        this.contentStream = this.contentStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            this.isLoaded = true;
            setTimeout(() => {
                this.scrollHandler();
            });
        }));
        this.modalContainer = this.element.nativeElement.querySelector('.terms-container');
        this.modalContainer.addEventListener('scroll', this.scrollHandler);
    }
    ngOnDestroy() {
        this.modalContainer.removeEventListener('scroll', this.scrollHandler);
    }
    scrollDown() {
        scroll.top(this.modalContainer, this.modalContainer.scrollHeight - this.modalContainer.clientHeight, {
            duration: 1000,
            ease: ease.inOutExpo,
        });
    }
    accept() {
        if (!this.isDown) {
            this.toastr.warning(this.translate.instant('common.please-scroll-to-bottom'), this.translate.instant('common.terms'));
            return;
        }
        this.activeModal.close();
    }
};
ProductTermsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
ProductTermsComponent.propDecorators = {
    contentStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
ProductTermsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'product-terms',
        template: _raw_loader_product_terms_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ProductTermsComponent);



/***/ }),

/***/ "y6lh":
/*!*********************************************!*\
  !*** ./src/app/discover/discover.module.ts ***!
  \*********************************************/
/*! exports provided: DiscoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverModule", function() { return DiscoverModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common.module */ "a6Df");
/* harmony import */ var _common_transaction_transaction_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/transaction/transaction.module */ "SRhG");
/* harmony import */ var _discover_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discover-routing.module */ "z4kE");
/* harmony import */ var _discover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover.component */ "Q/Z+");
/* harmony import */ var _offer_investment_confirmation_investment_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offer/investment-confirmation/investment-confirmation.component */ "/qHs");
/* harmony import */ var _offer_offer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offer/offer.component */ "85Cy");
/* harmony import */ var _offer_product_terms_product_terms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./offer/product-terms/product-terms.component */ "wyUZ");
/* harmony import */ var _user_allocations_user_allocations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-allocations/user-allocations.component */ "T7nf");










let DiscoverModule = class DiscoverModule {
};
DiscoverModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _discover_component__WEBPACK_IMPORTED_MODULE_5__["DiscoverComponent"],
            _offer_offer_component__WEBPACK_IMPORTED_MODULE_7__["OfferComponent"],
            _offer_product_terms_product_terms_component__WEBPACK_IMPORTED_MODULE_8__["ProductTermsComponent"],
            _offer_investment_confirmation_investment_confirmation_component__WEBPACK_IMPORTED_MODULE_6__["InvestmentConfirmationComponent"],
            _user_allocations_user_allocations_component__WEBPACK_IMPORTED_MODULE_9__["UserAllocationsComponent"],
        ],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _discover_routing_module__WEBPACK_IMPORTED_MODULE_4__["DiscoverRoutingModule"], _common_transaction_transaction_module__WEBPACK_IMPORTED_MODULE_3__["TransactionModule"]],
    })
], DiscoverModule);



/***/ }),

/***/ "z4kE":
/*!*****************************************************!*\
  !*** ./src/app/discover/discover-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DiscoverRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverRoutingModule", function() { return DiscoverRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/logged-in.auth-guard */ "59Zp");
/* harmony import */ var _discover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discover.component */ "Q/Z+");
/* harmony import */ var _offer_offer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offer/offer.component */ "85Cy");
/* harmony import */ var _user_allocations_user_allocations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-allocations/user-allocations.component */ "T7nf");







const routes = [
    {
        path: '',
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]],
        children: [
            {
                path: '',
                component: _discover_component__WEBPACK_IMPORTED_MODULE_4__["DiscoverComponent"],
            },
            {
                path: 'investments',
                component: _user_allocations_user_allocations_component__WEBPACK_IMPORTED_MODULE_6__["UserAllocationsComponent"],
            },
            {
                path: ':productSlug',
                component: _offer_offer_component__WEBPACK_IMPORTED_MODULE_5__["OfferComponent"],
            },
        ],
    },
];
let DiscoverRoutingModule = class DiscoverRoutingModule {
};
DiscoverRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DiscoverRoutingModule);



/***/ }),

/***/ "zELP":
/*!**************************************!*\
  !*** ./node_modules/scroll/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var E_NOSCROLL = new Error('Element already at target scroll position')
var E_CANCELLED = new Error('Scroll cancelled')
var min = Math.min
var ms = Date.now

module.exports = {
  left: make('scrollLeft'),
  top: make('scrollTop')
}

function make (prop) {
  return function scroll (el, to, opts, cb) {
    opts = opts || {}

    if (typeof opts == 'function') cb = opts, opts = {}
    if (typeof cb != 'function') cb = noop

    var start = ms()
    var from = el[prop]
    var ease = opts.ease || inOutSine
    var duration = !isNaN(opts.duration) ? +opts.duration : 350
    var cancelled = false

    return from === to ?
      cb(E_NOSCROLL, el[prop]) :
      requestAnimationFrame(animate), cancel

    function cancel () {
      cancelled = true
    }

    function animate (timestamp) {
      if (cancelled) return cb(E_CANCELLED, el[prop])

      var now = ms()
      var time = min(1, ((now - start) / duration))
      var eased = ease(time)

      el[prop] = (eased * (to - from)) + from

      time < 1 ?
        requestAnimationFrame(animate) :
        requestAnimationFrame(function () {
          cb(null, el[prop])
        })
    }
  }
}

function inOutSine (n) {
  return 0.5 * (1 - Math.cos(Math.PI * n))
}

function noop () {}


/***/ })

}]);
//# sourceMappingURL=discover-discover-module.js.map