(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~user-trades-user-trades-module"],{

/***/ "9VLI":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/trades/trade-quote-modal.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">Review and Execute</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-body\">\n    <table class=\"table table-striped table-borderless mb-0\">\n        <tbody>\n            <tr>\n                <th class=\"font-weight-bold\" scope=\"row\">Precious Metal Type</th>\n                <td>{{ $any(symbolsMap)[trade.symbol] }}</td>\n            </tr>\n            <tr>\n                <th class=\"font-weight-bold\" scope=\"row\">Transaction Type</th>\n                <td class=\"text-capitalize\">{{ trade.side }}</td>\n            </tr>\n            <tr>\n                <th class=\"font-weight-bold\" scope=\"row\">{{ 'common.spot-price' | translate }}</th>\n                <td>{{ trade.price | amount: 2 }} {{ counterCurrency }}</td>\n            </tr>\n            <tr>\n                <th class=\"font-weight-bold\" scope=\"row\">Value/<br />Troy Ounce</th>\n                <td>{{ total | amount: 2 }} {{ counterCurrency }}<br />{{ trade.quantity | amount: 7 }} {{ baseCurrency }}</td>\n            </tr>\n            <tr>\n                <th class=\"font-weight-bold\" scope=\"row\">Transaction Fee</th>\n                <td>\n                    <span>{{ trade.fee | amount: 2 }} {{ counterCurrency }} </span>\n                </td>\n            </tr>\n            <tr>\n                <th class=\"font-weight-bold\" scope=\"row\">GST</th>\n                <td>\n                    <span>{{ trade.gst | amount: 2 }} {{ counterCurrency }} </span>\n                </td>\n            </tr>\n            <tr>\n                <th class=\"font-weight-bold\" scope=\"row\">{{ 'common.grand-total' | translate }}</th>\n                <td class=\"font-weight-bold\" [ngClass]=\"trade.side === 'BUY' ? 'text-primary' : 'text-danger'\">\n                    {{ trade.total | amount: 2 }} {{ counterCurrency }}\n                </td>\n            </tr>\n            <tr>\n                <th class=\"font-weight-bold\" scope=\"row\">Spot Price Refresh Timer</th>\n                <td><countdown #cd [config]=\"{ leftTime: expiry, format: 'ss' }\" (event)=\"onCountdownEvent($event)\"></countdown> seconds</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn\" [ngClass]=\"trade.side === 'BUY' ? 'btn-primary' : 'btn-danger'\" (click)=\"onExecute.emit()\">\n        <span class=\"text-capitalize\">{{ trade.side }}</span> {{ trade.quantity | amount: 7 }} {{ baseCurrency }}\n    </button>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"activeModal.dismiss()\">Cancel</button>\n</div>\n");

/***/ }),

/***/ "9jW6":
/*!*******************************************************!*\
  !*** ./src/app/common/trades/trade-feed.component.ts ***!
  \*******************************************************/
/*! exports provided: TradeFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeFeedComponent", function() { return TradeFeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_trade_feed_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./trade-feed.component.html */ "bmOs");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let TradeFeedComponent = class TradeFeedComponent {
    constructor(http) {
        this.http = http;
        this.feed = {};
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1, 10 * 1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => this.http.get('/trades/feed')))
            .subscribe(feed => {
            this.feed = feed;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
};
TradeFeedComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TradeFeedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'trade-feed',
        template: _raw_loader_trade_feed_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TradeFeedComponent);



/***/ }),

/***/ "9yNi":
/*!************************************************!*\
  !*** ./src/app/common/trades/trades.module.ts ***!
  \************************************************/
/*! exports provided: TradesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradesModule", function() { return TradesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-countdown */ "z+xu");
/* harmony import */ var _common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.module */ "a6Df");
/* harmony import */ var _trade_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trade-feed.component */ "9jW6");
/* harmony import */ var _trade_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trade-form.component */ "VEyS");
/* harmony import */ var _trade_quote_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trade-quote-modal.component */ "IQn0");








let TradesModule = class TradesModule {
};
TradesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_trade_form_component__WEBPACK_IMPORTED_MODULE_6__["TradeFormComponent"], _trade_quote_modal_component__WEBPACK_IMPORTED_MODULE_7__["TradeQuoteModalComponent"], _trade_feed_component__WEBPACK_IMPORTED_MODULE_5__["TradeFeedComponent"]],
        exports: [_trade_form_component__WEBPACK_IMPORTED_MODULE_6__["TradeFormComponent"], _trade_feed_component__WEBPACK_IMPORTED_MODULE_5__["TradeFeedComponent"]],
        imports: [_common_module__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_3__["CountdownModule"]],
    })
], TradesModule);



/***/ }),

/***/ "IQn0":
/*!**************************************************************!*\
  !*** ./src/app/common/trades/trade-quote-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: TradeQuoteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeQuoteModalComponent", function() { return TradeQuoteModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_trade_quote_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./trade-quote-modal.component.html */ "9VLI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/differenceInSeconds */ "qVkf");






let TradeQuoteModalComponent = class TradeQuoteModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.onExecute = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onCountdown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.symbolsMap = {
            'AU/USD': 'Gold Troy Ounce',
            'AG/USD': 'Silver Troy Ounce',
        };
    }
    ngOnInit() {
        this.expiry = Object(date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(this.trade.expiryDate), new Date());
    }
    ngOnChanges() {
        this.expiry = Object(date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(this.trade.expiryDate), new Date());
        if (this.countdown) {
            this.countdown.restart();
        }
    }
    ngAfterViewInit() {
        this.countdown.begin();
    }
    get baseCurrency() {
        const parts = this.trade.symbol.split('/');
        return parts[0];
    }
    get counterCurrency() {
        const parts = this.trade.symbol.split('/');
        return parts[1];
    }
    get total() {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(this.trade.price).times(this.trade.quantity).toFixed(2);
    }
    onCountdownEvent(event) {
        if (event.action === 'done') {
            this.onCountdown.emit();
        }
    }
};
TradeQuoteModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
];
TradeQuoteModalComponent.propDecorators = {
    countdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['cd', { static: false },] }]
};
TradeQuoteModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'trade-quote-modal',
        template: _raw_loader_trade_quote_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TradeQuoteModalComponent);



/***/ }),

/***/ "VEyS":
/*!*******************************************************!*\
  !*** ./src/app/common/trades/trade-form.component.ts ***!
  \*******************************************************/
/*! exports provided: TradeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeFormComponent", function() { return TradeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_trade_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./trade-form.component.html */ "smW1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/wallets/wallets.service */ "hOWo");
/* harmony import */ var _security_check_security_check_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../security-check/security-check.service */ "i32w");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/session.service */ "6g7h");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/toastr.service */ "N/y2");
/* harmony import */ var _trade_quote_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trade-quote-modal.component */ "IQn0");













let TradeFormComponent = class TradeFormComponent {
    constructor(ngbModal, http, session, toastr, walletsService, securityCheckService, translate) {
        this.ngbModal = ngbModal;
        this.http = http;
        this.session = session;
        this.toastr = toastr;
        this.walletsService = walletsService;
        this.securityCheckService = securityCheckService;
        this.translate = translate;
        this.faCircle = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCircle"];
        this.symbols = ['AU/USD', 'AG/USD'];
        this.symbolsMap = {
            'AU/USD': 'Gold Troy Ounce',
            'AG/USD': 'Silver Troy Ounce',
        };
        this.trade = {
            side: 'BUY',
            symbol: this.symbols[0],
        };
        this.onTrade = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isLoading = false;
        this.isTradingInAmount = true;
        this.isUserSelectAllowed = false;
        this.userAutocomplete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.usersStream = this.userAutocomplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(search => this.http.get('/users', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('limit', '25').set('search', search),
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(results => results.map(user => ({ user }))));
    }
    requestQuote() {
        var _a, _b;
        const body = {
            side: this.trade.side,
            symbol: this.trade.symbol,
            userId: (_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : this.session.user.id,
        };
        if (this.isTradingInAmount) {
            body.amount = this.trade.quantity;
        }
        else {
            body.quantity = this.trade.quantity;
        }
        return this.http.post('/trades/request-for-quote', body);
    }
    submitRequestQuote() {
        if (this.form.invalid) {
            return;
        }
        this.securityCheckService.getScopePermission('banking').subscribe(() => {
            this.isLoading = true;
            this.requestQuote()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                this.isLoading = false;
            }))
                .subscribe(trade => {
                this.openQuoteModal(trade);
            });
        });
    }
    executeTrade(trade) {
        var _a, _b;
        this.isLoading = true;
        this.http
            .post('/trades', Object.assign(Object.assign({}, trade), { userId: (_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : this.session.user.id }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.isLoading = false;
        }))
            .subscribe(() => {
            this.toastr.success(this.translate.instant('trade-form.trade-executed'));
            this.onTrade.emit();
            this.walletsService.fetch();
            this.form.resetForm({ symbol: this.trade.symbol, side: this.trade.side, quantity: null });
        });
    }
    openQuoteModal(trade) {
        const modal = this.ngbModal.open(_trade_quote_modal_component__WEBPACK_IMPORTED_MODULE_12__["TradeQuoteModalComponent"], {
            windowClass: trade.side === 'BUY' ? 'modal-primary' : 'modal-danger',
            backdrop: 'static',
        });
        const component = modal.componentInstance;
        component.trade = trade;
        component.onExecute.subscribe(() => {
            this.executeTrade(component.trade);
            modal.close();
        });
        component.onCountdown.subscribe(() => {
            this.requestQuote().subscribe(t => {
                component.trade = t;
                component.countdown.restart();
            });
        });
    }
    get baseCurrency() {
        const parts = this.trade.symbol.split('/');
        return parts[0];
    }
};
TradeFormComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] },
    { type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] },
    { type: src_app_store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_8__["WalletsService"] },
    { type: _security_check_security_check_service__WEBPACK_IMPORTED_MODULE_9__["SecurityCheckService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
TradeFormComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['tradeForm',] }],
    onTrade: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    isUserSelectAllowed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
TradeFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'trade-form',
        template: _raw_loader_trade_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TradeFormComponent);



/***/ }),

/***/ "bmOs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/trades/trade-feed.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"prices prices-gold p-3\">\n            <h5>Gold Troy Ounce</h5>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <p class=\"mb-1\">SELL</p>\n                    <h3 *ngIf=\"feed.gold; else spinner\">{{ feed.gold.sell + '' | amount: 2 }} USD</h3>\n                </div>\n                <div class=\"col\">\n                    <p class=\"mb-1\">BUY</p>\n                    <h3 *ngIf=\"feed.gold; else spinner\">{{ feed.gold.buy + '' | amount: 2 }} USD</h3>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-12\">\n        <div class=\"prices prices-silver p-3\">\n            <h5>Silver Troy Ounce</h5>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <p class=\"mb-1\">SELL</p>\n                    <h3 *ngIf=\"feed.silver; else spinner\">{{ feed.silver.sell + '' | amount: 2 }} USD</h3>\n                </div>\n                <div class=\"col\">\n                    <p class=\"mb-1\">BUY</p>\n                    <h3 *ngIf=\"feed.silver; else spinner\">{{ feed.silver.buy + '' | amount: 2 }} USD</h3>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #spinner>\n    <ion-spinner name=\"dots\"></ion-spinner>\n</ng-template>\n");

/***/ }),

/***/ "smW1":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/trades/trade-form.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"form-validation\"\n    (ngSubmit)=\"submitRequestQuote()\"\n    #tradeForm=\"ngForm\"\n    [ngClass]=\"{ 'ng-submitted': tradeForm.submitted }\"\n    autocomplete=\"false\"\n    novalidate\n>\n    <div *ngIf=\"isUserSelectAllowed\" class=\"form-group\">\n        <label class=\"font-md\">{{ 'common.user' | translate }}</label>\n        <ng-select\n            name=\"user\"\n            [placeholder]=\"'common.select-user' | translate\"\n            [(ngModel)]=\"user\"\n            bindValue=\"user\"\n            #userInput=\"ngModel\"\n            [items]=\"usersStream | async\"\n            [typeahead]=\"userAutocomplete\"\n            [clearable]=\"false\"\n            required\n        >\n            <ng-template ng-label-tmp let-item=\"item\">\n                <div class=\"d-flex align-items-center justify-content-center\">\n                    <user-display *ngIf=\"item\" [user]=\"item.user\"></user-display>\n                    <small *ngIf=\"item.user\" class=\"text-gray ml-1\">{{ item.user.email }}</small>\n                </div>\n            </ng-template>\n            <ng-template ng-option-tmp let-item=\"item\">\n                <div class=\"d-flex align-items-center justify-content-center\">\n                    <user-avatar *ngIf=\"item\" [user]=\"item.user\" size=\"sm\" elementClass=\"mr-2\"></user-avatar>\n                    <div class=\"w-100\">\n                        <ng-container *ngIf=\"item.user\">\n                            <div>{{ item.user.name }}</div>\n                            <small class=\"text-gray\">{{ item.user.email }}</small>\n                        </ng-container>\n                    </div>\n                </div>\n            </ng-template>\n        </ng-select>\n        <div *ngIf=\"userInput.invalid && (tradeForm.submitted || userInput.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"userInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"font-md\">{{ 'common.transaction-type' | translate }}</label>\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"custom-control custom-radio btn btn-outline-secondary btn-lg bg-transparent\" (click)=\"trade.side = 'SELL'\">\n                    <input type=\"radio\" class=\"custom-control-input\" id=\"side-sell\" name=\"side\" value=\"SELL\" [(ngModel)]=\"trade.side\" />\n                    <label class=\"custom-control-label text-secondary font-weight-normal\" for=\"side-sell\">{{\n                        'common.sell' | translate | uppercase\n                    }}</label>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"custom-control custom-radio btn btn-outline-primary btn-lg bg-transparent\" (click)=\"trade.side = 'BUY'\">\n                    <input type=\"radio\" class=\"custom-control-input\" id=\"side-buy\" name=\"side\" value=\"BUY\" [(ngModel)]=\"trade.side\" />\n                    <label class=\"custom-control-label text-primary font-weight-normal\" for=\"side-buy\">{{\n                        'common.buy' | translate | uppercase\n                    }}</label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"font-md\" for=\"symbol\">{{ 'common.precious-metal-type' | translate }}</label>\n        <ng-select\n            class=\"ng-select-lg\"\n            name=\"symbol\"\n            [placeholder]=\"'common.select-symbol' | translate\"\n            [items]=\"symbols\"\n            [searchable]=\"false\"\n            [clearable]=\"false\"\n            [(ngModel)]=\"trade.symbol\"\n            #symbol=\"ngModel\"\n            required\n        >\n            <ng-template ng-label-tmp let-item=\"item\"> {{ $any(symbolsMap)[item] }} </ng-template>\n            <ng-template ng-option-tmp let-item=\"item\"> {{ $any(symbolsMap)[item] }} </ng-template>\n        </ng-select>\n        <div *ngIf=\"symbol.invalid && (tradeForm.submitted || symbol.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"symbol?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <div class=\"d-flex justify-content-between\">\n            <label class=\"font-md\" for=\"quantity\">\n                {{ (isTradingInAmount ? 'common.value' : 'common.troy-ounce') | translate }}\n            </label>\n            <a href (click)=\"isTradingInAmount = !isTradingInAmount; $event.preventDefault()\">{{\n                isTradingInAmount ? ('common.switch-to' | translate) + baseCurrency : ('common.switch-to' | translate) + 'USD'\n            }}</a>\n        </div>\n        <div class=\"input-group\">\n            <input\n                type=\"number\"\n                numeric\n                [decimals]=\"isTradingInAmount ? 2 : 7\"\n                class=\"form-control form-control-lg\"\n                id=\"quantity\"\n                name=\"quantity\"\n                [(ngModel)]=\"trade.quantity\"\n                #amountInput=\"ngModel\"\n                [placeholder]=\"isTradingInAmount ? '0.00' : '0.0000000'\"\n                [min]=\"isTradingInAmount ? '1' : '0.0000001'\"\n                [max]=\"'100000'\"\n                emptyToNull\n                required\n            />\n            <div class=\"input-group-append\">\n                <span class=\"input-group-text font-lg\">{{ isTradingInAmount ? 'USD' : baseCurrency }}</span>\n            </div>\n        </div>\n        <div *ngIf=\"amountInput.invalid && (tradeForm.submitted || amountInput.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"amountInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            <div class=\"form-control-feedback\" *ngIf=\"amountInput?.errors?.min\">Minimum is 1 USD or equivalent.</div>\n            <div class=\"form-control-feedback\" *ngIf=\"amountInput?.errors?.max\">Maximum is 100,000 USD or equivalent.</div>\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n        {{ 'common.proceed' | translate }}\n    </button>\n</form>\n");

/***/ })

}]);
//# sourceMappingURL=default~admin-admin-module~user-trades-user-trades-module.js.map