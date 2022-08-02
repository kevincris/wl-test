(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-spot-trading-user-spot-trading-module"],{

/***/ "/zRn":
/*!******************************************************************!*\
  !*** ./src/app/user-spot-trading/user-spot-trading.component.ts ***!
  \******************************************************************/
/*! exports provided: UserSpotTradingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSpotTradingComponent", function() { return UserSpotTradingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_spot_trading_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-spot-trading.component.html */ "vmZF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/wallets/wallets.query */ "O9sj");
/* harmony import */ var _common_list_v2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/list-v2.component */ "qhtW");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/services/toastr.service */ "N/y2");











let UserSpotTradingComponent = class UserSpotTradingComponent extends _common_list_v2_component__WEBPACK_IMPORTED_MODULE_8__["ListV2Component"] {
    constructor(http, ngbModal, changeDetector, route, router, session, toastr, walletsQuery) {
        super(http, ngbModal, changeDetector, route, router, session);
        this.toastr = toastr;
        this.walletsQuery = walletsQuery;
        this.defaultLimit = this.limitOpts[0];
        this.apiUrl = `/users/${this.session.user.id}/spot-trades`;
        this.wallets$ = this.walletsQuery.filteredBalances$;
    }
    buildCurrencyPair(instrument) {
        if (!instrument) {
            return '';
        }
        const parts = instrument.split('.');
        return `${parts[0].slice(0, 3)} / ${parts[0].slice(3, 6)}`;
    }
    getBaseCurrency(instrument) {
        if (!instrument) {
            return '';
        }
        const parts = instrument.split('.');
        return parts[0].slice(0, 3);
    }
    getCounterCurrency(instrument) {
        if (!instrument) {
            return '';
        }
        const parts = instrument.split('.');
        return parts[0].slice(3, 6);
    }
    getTotal(trade) {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(trade.price).times(trade.quantity).toFixed(2, 1);
    }
    onExecuteTrade() {
        this.updateEvent.next();
    }
};
UserSpotTradingComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] },
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] },
    { type: src_app_store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_7__["WalletsQuery"] }
];
UserSpotTradingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'user-spot-trading',
        template: _raw_loader_user_spot_trading_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserSpotTradingComponent);



/***/ }),

/***/ "MWcC":
/*!***************************************************************!*\
  !*** ./src/app/user-spot-trading/user-spot-trading.module.ts ***!
  \***************************************************************/
/*! exports provided: UserSpotTradingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSpotTradingModule", function() { return UserSpotTradingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common.module */ "a6Df");
/* harmony import */ var _common_spot_trading_spot_trading_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/spot-trading/spot-trading.module */ "B25w");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.module */ "TDBs");
/* harmony import */ var _user_spot_trading_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-spot-trading-routing.module */ "pf/W");
/* harmony import */ var _user_spot_trading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-spot-trading.component */ "/zRn");







let UserSpotTradingModule = class UserSpotTradingModule {
};
UserSpotTradingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_spot_trading_component__WEBPACK_IMPORTED_MODULE_6__["UserSpotTradingComponent"]],
        exports: [_user_spot_trading_component__WEBPACK_IMPORTED_MODULE_6__["UserSpotTradingComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _user_spot_trading_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserSpotTradingRoutingModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["DashboardModule"], _common_spot_trading_spot_trading_module__WEBPACK_IMPORTED_MODULE_3__["SpotTradingModule"]],
    })
], UserSpotTradingModule);



/***/ }),

/***/ "pf/W":
/*!***********************************************************************!*\
  !*** ./src/app/user-spot-trading/user-spot-trading-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: UserSpotTradingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSpotTradingRoutingModule", function() { return UserSpotTradingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_guards_permission_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/guards/permission.guard */ "UPfJ");
/* harmony import */ var _common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/logged-in.auth-guard */ "59Zp");
/* harmony import */ var _user_spot_trading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-spot-trading.component */ "/zRn");






const routes = [
    {
        path: '',
        component: _user_spot_trading_component__WEBPACK_IMPORTED_MODULE_5__["UserSpotTradingComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInAuthGuard"], _common_guards_permission_guard__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]],
        data: {
            permissions: ['spot-trades'],
        },
    },
];
let UserSpotTradingRoutingModule = class UserSpotTradingRoutingModule {
};
UserSpotTradingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserSpotTradingRoutingModule);



/***/ }),

/***/ "vmZF":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-spot-trading/user-spot-trading.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-page\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <spot-trading-feed></spot-trading-feed>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-7\">\n            <account-balance class=\"card\" [compact]=\"true\" [extended]=\"true\" filter=\"['BTC', 'ETH', 'LTC', 'USDT.erc20', 'USD']\"></account-balance>\n        </div>\n        <div class=\"col-lg-10\">\n            <section class=\"card\">\n                <div class=\"card-header\">\n                    <h5 class=\"mb-0\">{{ 'common.spot-trading' | translate | titlecase }}</h5>\n                </div>\n                <div class=\"card-body\">\n                    <spot-trading-form (onExecuteTrade)=\"onExecuteTrade()\"></spot-trading-form>\n                </div>\n            </section>\n        </div>\n        <div class=\"col-lg-7\">\n            <div class=\"card\">\n                <div class=\"card-header\">{{ 'common.history' | translate }}</div>\n                <ul class=\"list-group list-group-flush\">\n                    <ng-container *ngIf=\"itemsStream | async; let items\">\n                        <li class=\"list-group-item py-2\" *ngFor=\"let trade of items\">\n                            <div class=\"d-flex justify-content-between\">\n                                <span> {{ buildCurrencyPair(trade.instrument) }}</span>\n                                <span class=\"text-right\" [ngClass]=\"trade.side === 'buy' ? 'text-primary' : 'text-danger'\">\n                                    {{ trade.side === 'buy' ? '+' : '-' }}{{ trade.quantity | amount: 7 }} {{ getBaseCurrency(trade.instrument) }}\n                                </span>\n                            </div>\n                            <small class=\"d-flex justify-content-between\">\n                                <span class=\"text-muted\">{{ trade.createdAt | date: 'short' }}</span>\n                                <span class=\"text-muted text-right\">\n                                    {{ getTotal(trade) | amount: 2 }} {{ getCounterCurrency(trade.instrument) }}\n                                </span>\n                            </small>\n                        </li>\n                        <li class=\"list-group-item py-3 text-center text-muted\" *ngIf=\"items.length === 0\">\n                            <i>{{ 'common.no-trades-found' | translate }}</i>\n                        </li>\n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"d-flex justify-content-center mb-3\">\n                <ngb-pagination\n                    [(page)]=\"page\"\n                    [collectionSize]=\"count\"\n                    (pageChange)=\"select()\"\n                    [pageSize]=\"limit\"\n                    [maxSize]=\"5\"\n                    [ellipses]=\"false\"\n                    [rotate]=\"true\"\n                    [boundaryLinks]=\"true\"\n                >\n                </ngb-pagination>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=user-spot-trading-user-spot-trading-module.js.map