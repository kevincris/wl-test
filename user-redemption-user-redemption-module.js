(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-redemption-user-redemption-module"],{

/***/ "aVEN":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-redemption/user-redemption.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-page\">\n    <div class=\"row\">\n        <div class=\"col-lg-7\">\n            <account-balance class=\"card\" [compact]=\"true\"></account-balance>\n        </div>\n        <div class=\"col-lg-11\">\n            <section class=\"card\">\n                <div class=\"card-header\">\n                    <h5 class=\"mb-0\">{{ 'common.redeem' | translate }}</h5>\n                </div>\n                <div class=\"card-body\">\n                    <redemption-form (onRedemptionSubmitted)=\"onUpdate()\" #redemptionForm></redemption-form>\n                </div>\n            </section>\n        </div>\n        <div class=\"col-lg-6\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"mb-2 text-center\">\n                                <div class=\"mb-2\">\n                                    <span class=\"label label-success\">{{ 'common.redeeming' | translate }}</span>\n                                </div>\n                                <div class=\"p-2 text-center border\">\n                                    <small>{{ 'common.total-quantity-to-redeem' | translate }}</small\n                                    ><br />\n                                    <h5 class=\"mb-0\">{{ totalOunces() | amount: 7 }} ounce</h5>\n                                </div>\n                                <div class=\"p-2 text-center border\">\n                                    <h5 class=\"mb-0\">\n                                        {{ totalQuantity() | number: (isSilver() ? '1.2-2' : '1.0-0') }} {{ isSilver() ? 'kg' : 'g' }}\n                                    </h5>\n                                </div>\n                                <div class=\"p-2\">\n                                    <small> {{ 'common.balance-after-redemption' | translate }} </small><br />\n                                    <h5 class=\"mb-0\">\n                                        {{ calculateBalanceAfterRedemption(isSilver() ? 'AG' : 'AU') | amount: 7 }} {{ isSilver() ? 'AG' : 'AU' }}\n                                    </h5>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"card\">\n                        <div class=\"card-header\">{{ 'common.history' | translate }}</div>\n                        <ul class=\"list-group list-group-flush\">\n                            <ng-container *ngIf=\"itemsStream | async; let items\">\n                                <li\n                                    class=\"list-group-item py-2\"\n                                    [ngClass]=\"redemption.status !== 'completed' ? 'text-muted' : ''\"\n                                    *ngFor=\"let redemption of items\"\n                                >\n                                    <div class=\"d-flex justify-content-between\">\n                                        <span> {{ redemption.type === 'silver' ? 'Silver Troy Ounce' : 'Gold Troy Ounce' }}</span>\n                                        <span class=\"text-right\" [ngClass]=\"redemption.status !== 'completed' ? 'text-muted' : 'text-danger'\"\n                                            >-{{ getQuantity(redemption) }}\n                                            <ng-container *ngIf=\"redemption.type === 'gold'; else silverTemplate\"> g </ng-container>\n                                            <ng-template #silverTemplate> ozt</ng-template>\n                                        </span>\n                                    </div>\n                                    <small class=\"d-flex justify-content-between\">\n                                        <span class=\"text-muted\">{{ redemption.createdAt | date: 'short' }}</span>\n                                        <span class=\"text-muted text-right\">\n                                            {{ redemption.transaction.amount | amount: 2 }} {{ redemption.transaction.currency.code }}\n                                        </span>\n                                    </small>\n                                    <span\n                                        class=\"text-capitalize label label-sm text-right\"\n                                        [ngClass]=\"{\n                                            'label-primary': redemption.status === 'pending',\n                                            'label-success': redemption.status === 'completed',\n                                            'label-warning': redemption.status === 'processing',\n                                            'label-danger': redemption.status === 'cancelled'\n                                        }\"\n                                        >{{ redemption.status }}</span\n                                    >\n                                </li>\n                                <li class=\"list-group-item py-3 text-center text-muted\" *ngIf=\"items.length === 0\">\n                                    <i>{{ 'common.no-redemptions-found' | translate }}</i>\n                                </li>\n                            </ng-container>\n                        </ul>\n                    </div>\n                    <div class=\"d-flex justify-content-center mb-3\">\n                        <ngb-pagination\n                            [(page)]=\"page\"\n                            [collectionSize]=\"count\"\n                            (pageChange)=\"select()\"\n                            [pageSize]=\"limit\"\n                            [maxSize]=\"5\"\n                            [ellipses]=\"false\"\n                            [rotate]=\"true\"\n                            [boundaryLinks]=\"true\"\n                        >\n                        </ngb-pagination>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "gZW2":
/*!***********************************************************!*\
  !*** ./src/app/user-redemption/user-redemption.module.ts ***!
  \***********************************************************/
/*! exports provided: UserRedemptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRedemptionModule", function() { return UserRedemptionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_redemption_redemption_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/redemption/redemption.module */ "KY6G");
/* harmony import */ var src_app_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dashboard/dashboard.module */ "TDBs");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/common.module */ "a6Df");
/* harmony import */ var _user_redemption_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-redemption-routing.module */ "oD8g");
/* harmony import */ var _user_redemption_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-redemption.component */ "yvNI");







let UserRedemptionModule = class UserRedemptionModule {
};
UserRedemptionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_redemption_component__WEBPACK_IMPORTED_MODULE_6__["UserRedemptionComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _user_redemption_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRedemptionRoutingModule"], src_app_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_3__["DashboardModule"], src_app_common_redemption_redemption_module__WEBPACK_IMPORTED_MODULE_2__["RedemptionModule"]],
    })
], UserRedemptionModule);



/***/ }),

/***/ "oD8g":
/*!*******************************************************************!*\
  !*** ./src/app/user-redemption/user-redemption-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: UserRedemptionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRedemptionRoutingModule", function() { return UserRedemptionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_guards_permission_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/guards/permission.guard */ "UPfJ");
/* harmony import */ var _common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/logged-in.auth-guard */ "59Zp");
/* harmony import */ var _user_redemption_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-redemption.component */ "yvNI");






const routes = [
    {
        path: '',
        component: _user_redemption_component__WEBPACK_IMPORTED_MODULE_5__["UserRedemptionComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInAuthGuard"], _common_guards_permission_guard__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]],
        data: {
            permissions: ['redeem'],
        },
    },
];
let UserRedemptionRoutingModule = class UserRedemptionRoutingModule {
};
UserRedemptionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserRedemptionRoutingModule);



/***/ }),

/***/ "yvNI":
/*!**************************************************************!*\
  !*** ./src/app/user-redemption/user-redemption.component.ts ***!
  \**************************************************************/
/*! exports provided: UserRedemptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRedemptionComponent", function() { return UserRedemptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_redemption_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-redemption.component.html */ "aVEN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "WE53");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_list_v2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/list-v2.component */ "qhtW");
/* harmony import */ var _common_services_redemption_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/services/redemption.service */ "G1PJ");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/services/toastr.service */ "N/y2");
/* harmony import */ var _store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/wallets/wallets.query */ "O9sj");














let UserRedemptionComponent = class UserRedemptionComponent extends _common_list_v2_component__WEBPACK_IMPORTED_MODULE_9__["ListV2Component"] {
    constructor(http, ngbModal, changeDetector, route, router, session, toastr, walletsQuery, redemptionService) {
        super(http, ngbModal, changeDetector, route, router, session);
        this.toastr = toastr;
        this.walletsQuery = walletsQuery;
        this.redemptionService = redemptionService;
        this.faArrowAltToBottom = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowAltToBottom"];
        this.faArrowAltFromBottom = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowAltFromBottom"];
        this.faCircle = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCircle"];
        this.wallets$ = this.walletsQuery.filteredBalances$;
    }
    ngOnInit() {
        this.apiUrl = `/users/${this.session.user.id}/redemptions`;
        super.ngOnInit();
    }
    totalOunces() {
        return this.redemptionForm ? this.redemptionService.totalOunces(this.redemptionForm.redemption) : '0.00';
    }
    totalQuantity() {
        return this.redemptionForm
            ? this.isSilver()
                ? new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(this.redemptionService.totalGrams(this.redemptionForm.redemption)).div(1000).toFixed(2)
                : new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(this.redemptionService.totalGrams(this.redemptionForm.redemption)).toFixed(0, 1)
            : '0.00';
    }
    isSilver() {
        return this.redemptionForm ? this.redemptionForm.redemption.type === 'silver' : false;
    }
    calculateBalanceAfterRedemption(currencyCode) {
        let balance = '0.00';
        this.subscriptions.add(this.wallets$.subscribe(wallets => {
            const wallet = wallets.find(w => w.currency.code === currencyCode);
            if (wallet) {
                balance = wallet.availableBalance;
            }
        }));
        if (!balance) {
            return '0';
        }
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(balance)
            .minus(this.redemptionForm ? this.redemptionService.totalOunces(this.redemptionForm.redemption) : 0)
            .toFixed(7);
    }
    getQuantity(redemption) {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(redemption.type === 'gold'
            ? this.redemptionService.totalGrams(redemption)
            : this.redemptionService.totalOunces(redemption)).toFixed(0);
    }
    onUpdate() {
        this.updateEvent.next();
    }
};
UserRedemptionComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"] },
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_12__["ToastrService"] },
    { type: _store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_13__["WalletsQuery"] },
    { type: _common_services_redemption_service__WEBPACK_IMPORTED_MODULE_10__["RedemptionService"] }
];
UserRedemptionComponent.propDecorators = {
    redemptionForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['redemptionForm',] }]
};
UserRedemptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'user-redemption',
        template: _raw_loader_user_redemption_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserRedemptionComponent);



/***/ })

}]);
//# sourceMappingURL=user-redemption-user-redemption-module.js.map