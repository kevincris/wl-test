(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organization-organization-module"],{

/***/ "GNzn":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organization/merchant-customer-list/merchant-customer-list.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div class=\"card\">\n        <div class=\"card-header d-flex justify-content-between align-items-center\">\n            <span>{{ 'common.customers' | translate }}</span>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row no-gutters align-items-center mb-3\">\n                <div class=\"col-lg-7 mb-2 mb-lg-0\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><fa-icon [icon]=\"faSearch\"></fa-icon></span>\n                        </span>\n                        <input\n                            type=\"text\"\n                            name=\"searchText\"\n                            (ngModelChange)=\"searchEvent.next()\"\n                            [placeholder]=\"'common.search' | translate\"\n                            class=\"form-control\"\n                            [(ngModel)]=\"search\"\n                        />\n                    </div>\n                </div>\n                <div class=\"col-lg-17 d-flex justify-content-between align-items-center\">\n                    <div class=\"ml-lg-3\">\n                        <span>{{ count | number }} {{ (count === 1 ? 'common.entry-found' : 'common.entries-found') | translate | lowercase }}</span>\n                        <span class=\"ml-3\"\n                            ><a href (click)=\"isFilterOptionsCollapsed = !isFilterOptionsCollapsed; $event.preventDefault()\"\n                                >{{ isFilterOptionsCollapsed ? '+' : '-' }} {{ 'common.filter-options' | translate }}</a\n                            ></span\n                        >\n                    </div>\n                    <div class=\"d-flex align-items-center\">\n                        <ng-select\n                            class=\"mr-2\"\n                            [(ngModel)]=\"limit\"\n                            dropdownPosition=\"auto\"\n                            (change)=\"select(1)\"\n                            [items]=\"limitOpts\"\n                            [placeholder]=\"'common.show-entries-per-page' | translate\"\n                            [clearable]=\"false\"\n                            [searchable]=\"false\"\n                            required\n                        >\n                            <ng-template ng-label-tmp let-item=\"item\">{{ 'common.show-entries' | translate: { value: item } }}</ng-template>\n                            <ng-template ng-option-tmp let-item=\"item\">{{ item }} {{ 'common.entries' | translate }}</ng-template>\n                        </ng-select>\n                        <ngb-pagination\n                            [(page)]=\"page\"\n                            [collectionSize]=\"count\"\n                            (pageChange)=\"select()\"\n                            [pageSize]=\"limit\"\n                            [maxSize]=\"5\"\n                            [ellipses]=\"false\"\n                            [rotate]=\"true\"\n                            [boundaryLinks]=\"true\"\n                        >\n                        </ngb-pagination>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card\" [ngbCollapse]=\"isFilterOptionsCollapsed\">\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-xl-8\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6 col-form-label text-body px-0\">{{ 'common.created-at' | translate | titlecase }}</label>\n                                <div class=\"col-sm-18\">\n                                    <div class=\"d-flex align-items-center\">\n                                        <div class=\"input-group\">\n                                            <input\n                                                class=\"form-control\"\n                                                type=\"text\"\n                                                id=\"createdAtFrom\"\n                                                name=\"createdAtFrom\"\n                                                [placeholder]=\"queryParams['createdAt']['gte'] || ('common.from' | translate)\"\n                                                (dateTimeChange)=\"\n                                                    queryParams['createdAt']['gte'] = $event.value && formatDate($event.value, 'yyyy-MM-dd');\n                                                    searchEvent.next()\n                                                \"\n                                                [owlDateTime]=\"createdAtFrom\"\n                                                [owlDateTimeTrigger]=\"createdAtFrom\"\n                                            />\n                                            <input\n                                                class=\"form-control\"\n                                                type=\"text\"\n                                                id=\"createdAtTo\"\n                                                name=\"createdAtTo\"\n                                                [placeholder]=\"queryParams['createdAt']['lte'] || 'To'\"\n                                                (dateTimeChange)=\"\n                                                    queryParams['createdAt']['lte'] = $event.value && formatDate($event.value, 'yyyy-MM-dd');\n                                                    searchEvent.next()\n                                                \"\n                                                [owlDateTime]=\"createdAtTo\"\n                                                [owlDateTimeTrigger]=\"createdAtTo\"\n                                            />\n                                        </div>\n                                        <owl-date-time pickerType=\"calendar\" [firstDayOfWeek]=\"1\" #createdAtFrom></owl-date-time>\n                                        <owl-date-time pickerType=\"calendar\" [firstDayOfWeek]=\"1\" #createdAtTo></owl-date-time>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-8\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6 col-form-label text-body px-0\">{{ 'common.approved-at' | translate }}</label>\n                                <div class=\"col-sm-18\">\n                                    <div class=\"d-flex align-items-center\">\n                                        <div class=\"input-group\">\n                                            <input\n                                                class=\"form-control\"\n                                                type=\"text\"\n                                                id=\"approvedAtFrom\"\n                                                name=\"approvedAtFrom\"\n                                                [placeholder]=\"queryParams['approvedAt']['gte'] || ('common.from' | translate)\"\n                                                (dateTimeChange)=\"\n                                                    queryParams['approvedAt']['gte'] = $event.value && formatDate($event.value, 'yyyy-MM-dd');\n                                                    searchEvent.next()\n                                                \"\n                                                [owlDateTime]=\"approvedAtFrom\"\n                                                [owlDateTimeTrigger]=\"approvedAtFrom\"\n                                            />\n                                            <input\n                                                class=\"form-control\"\n                                                type=\"text\"\n                                                id=\"approvedAtTo\"\n                                                name=\"approvedAtTo\"\n                                                [placeholder]=\"queryParams['approvedAt']['lte'] || 'To'\"\n                                                (dateTimeChange)=\"\n                                                    queryParams['approvedAt']['lte'] = $event.value && formatDate($event.value, 'yyyy-MM-dd');\n                                                    searchEvent.next()\n                                                \"\n                                                [owlDateTime]=\"approvedAtTo\"\n                                                [owlDateTimeTrigger]=\"approvedAtTo\"\n                                            />\n                                        </div>\n                                        <owl-date-time pickerType=\"calendar\" [firstDayOfWeek]=\"1\" #approvedAtFrom></owl-date-time>\n                                        <owl-date-time pickerType=\"calendar\" [firstDayOfWeek]=\"1\" #approvedAtTo></owl-date-time>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-8\">\n                            <div class=\"form-group row\">\n                                <label for=\"type\" class=\"col-sm-6 col-form-label text-body px-0\">{{ 'common.type' | translate }}</label>\n                                <div class=\"col-sm-18\">\n                                    <ng-select\n                                        id=\"type\"\n                                        name=\"type\"\n                                        [items]=\"types\"\n                                        [multiple]=\"true\"\n                                        [closeOnSelect]=\"false\"\n                                        [searchable]=\"false\"\n                                        [placeholder]=\"'common.filter-by-type' | translate\"\n                                        [ngModel]=\"queryParams['type']['or']\"\n                                        (ngModelChange)=\"queryParams['type']['eq'] = $event; searchEvent.next()\"\n                                    >\n                                        <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                                            <input class=\"mr-2\" [id]=\"'item-' + index\" type=\"checkbox\" [ngModel]=\"item$.selected\" />\n                                            <span class=\"text-capitalize\">{{ item }}</span>\n                                        </ng-template>\n                                    </ng-select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"table-responsive position-relative\">\n                <table class=\"table table-hover table-bordered table-data\">\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">\n                                {{ 'common.name' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['accountNumber']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['accountNumber'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['accountNumber']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'common.type' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['type']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['type'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['type']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'common.email' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['email']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['email'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['email']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ 'common.status' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"getSortingDirection(['status']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                    (click)=\"sort(['status'], $event.ctrlKey || $event.metaKey)\"\n                                    [ngClass]=\"{ active: isActiveSorting(['status']) }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ (scope === 'verification' ? 'common.changed' : 'common.created') | translate }} {{ 'common.at' | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"\n                                        getSortingDirection(scope === 'verification' ? ['changeRequests', 'createdAt'] : ['createdAt']) === 'DESC'\n                                            ? faChevronUp\n                                            : faChevronDown\n                                    \"\n                                    (click)=\"\n                                        sort(\n                                            scope === 'verification' ? ['changeRequests', 'createdAt'] : ['createdAt'],\n                                            $event.ctrlKey || $event.metaKey\n                                        )\n                                    \"\n                                    [ngClass]=\"{\n                                        active: isActiveSorting(scope === 'verification' ? ['changeRequests', 'createdAt'] : ['createdAt'])\n                                    }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">\n                                {{ (scope === 'verification' ? 'common.changed-at' : 'common.approved-at') | translate }}\n                                <fa-icon\n                                    class=\"sort-toggle\"\n                                    [icon]=\"\n                                        getSortingDirection(scope === 'verification' ? ['changeRequests', 'approvedAt'] : ['approvedAt']) === 'DESC'\n                                            ? faChevronUp\n                                            : faChevronDown\n                                    \"\n                                    (click)=\"\n                                        sort(\n                                            scope === 'verification' ? ['changeRequests', 'approvedAt'] : ['approvedAt'],\n                                            $event.ctrlKey || $event.metaKey\n                                        )\n                                    \"\n                                    [ngClass]=\"{\n                                        active: isActiveSorting(scope === 'verification' ? ['changeRequests', 'approvedAt'] : ['approvedAt'])\n                                    }\"\n                                ></fa-icon>\n                            </th>\n                            <th scope=\"col\">{{ 'common.actions' | translate }}</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <ng-container *ngIf=\"itemsStream | async; let items\">\n                            <tr *ngFor=\"let user of items\" class=\"e2e-user\">\n                                <th scope=\"row\" [width]=\"'1%'\">\n                                    <uuid [value]=\"user.id\"></uuid>\n                                </th>\n                                <td>\n                                    <user-display\n                                        [user]=\"user\"\n                                        [displayBadges]=\"false\"\n                                        [disableLink]=\"true\"\n                                        (click)=\"openUserProfile(user)\"\n                                    ></user-display>\n                                </td>\n                                <td>\n                                    <span\n                                        class=\"text-capitalize label label-sm\"\n                                        [ngClass]=\"{ 'label-primary': user.type === 'business', 'label-success': user.type === 'personal' }\"\n                                        >{{ user.type }}</span\n                                    >\n                                </td>\n                                <td>\n                                    <copy-wrap [value]=\"user.email\" *ngIf=\"!!user.email; else noMail\">\n                                        <span class=\"text-body\">{{ user.email }}</span>\n                                    </copy-wrap>\n                                    <ng-template #noMail><span class=\"text-muted\">NONE</span></ng-template>\n                                </td>\n                                <td>\n                                    <span\n                                        class=\"text-capitalize badge badge-lg\"\n                                        [ngClass]=\"{\n                                            'badge-default': user.status === 'inactive',\n                                            'badge-success': user.status === 'active',\n                                            'badge-info': user.status === 'pending',\n                                            'badge-warning': ['suspended', 'closing'].includes(user.status),\n                                            'badge-danger': ['frozen', 'closed'].includes(user.status)\n                                        }\"\n                                        >{{ user.status }}</span\n                                    >\n                                </td>\n                                <td>{{ user.createdAt | date: 'medium' }}</td>\n                                <td>{{ user.approvedAt | date: 'medium' }}</td>\n                                <td class=\"action\">\n                                    <a class=\"btn btn-primary-air btn-sm btn-block px-2\" (click)=\"openUserProfile(user)\">{{\n                                        'common.view' | translate\n                                    }}</a>\n                                </td>\n                            </tr>\n                            <tr *ngIf=\"items.length === 0\">\n                                <td colspan=\"8\" class=\"text-center\">{{ 'common.no-entries-found' | translate }}</td>\n                            </tr>\n                        </ng-container>\n                    </tbody>\n                </table>\n                <ng-container *ngIf=\"isFetching | async\">\n                    <circle-spinner></circle-spinner>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "HLGW":
/*!*****************************************************************************************!*\
  !*** ./src/app/organization/merchant-customer-list/merchant-customer-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MerchantCustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantCustomerListComponent", function() { return MerchantCustomerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_merchant_customer_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./merchant-customer-list.component.html */ "GNzn");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_admin_users_user_form_modal_user_form_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/admin/users/user-form-modal/user-form-modal.component */ "RYhL");
/* harmony import */ var src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common/services/confirmation.service */ "fTmd");
/* harmony import */ var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/services/session.service */ "6g7h");
/* harmony import */ var _common_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/list.component */ "aJRI");
/* harmony import */ var _merchant_user_profile_merchant_user_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../merchant-user-profile/merchant-user-profile.component */ "RrL8");














let MerchantCustomerListComponent = class MerchantCustomerListComponent extends _common_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"] {
    constructor(http, ngbModal, changeDetector, route, router, session, confirmation, translate) {
        super(http, ngbModal, changeDetector, route, router, session, confirmation);
        this.translate = translate;
        this.types = ['personal', 'business'];
        this.apiUrl = '/users';
        this.apiQuery = ['approvedAt', 'type', 'createdAt'];
        this.formComponent = src_app_admin_users_user_form_modal_user_form_modal_component__WEBPACK_IMPORTED_MODULE_9__["UserFormModalComponent"];
    }
    find() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["withLatestFrom"])(this.session.userStream), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(([_, user]) => {
            this.apiUrl = `/users/${user.id}/associates`;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(() => super.find()));
    }
    openUserProfile(associate) {
        const modal = this.ngbModal.open(_merchant_user_profile_merchant_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["MerchantUserProfileComponent"], {
            backdrop: 'static',
            windowClass: 'modal-primary',
            size: 'lg',
        });
        const component = modal.componentInstance;
        component.associate = associate;
    }
};
MerchantCustomerListComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"] },
    { type: src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
MerchantCustomerListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'merchant-customer-list',
        template: _raw_loader_merchant_customer_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], MerchantCustomerListComponent);



/***/ }),

/***/ "RrL8":
/*!***************************************************************************************!*\
  !*** ./src/app/organization/merchant-user-profile/merchant-user-profile.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MerchantUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantUserProfileComponent", function() { return MerchantUserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_merchant_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./merchant-user-profile.component.html */ "lGZE");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! color */ "aSns");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common/list.component */ "aJRI");
/* harmony import */ var src_app_common_models_core_user_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/models/core/user.model */ "vk+e");
/* harmony import */ var src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/common/services/confirmation.service */ "fTmd");
/* harmony import */ var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/common/services/session.service */ "6g7h");
/* harmony import */ var src_app_common_services_toastr_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/common/services/toastr.service */ "N/y2");
/* harmony import */ var src_app_common_services_transaction_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/common/services/transaction.service */ "m2Kw");
/* harmony import */ var src_app_common_transaction_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/common/transaction/transaction-view/transaction-view.component */ "vOIs");
/* harmony import */ var src_app_common_transactions_mixins__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/common/transactions.mixins */ "HiCw");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/environments/environment */ "AytR");



















let MerchantUserProfileComponent = class MerchantUserProfileComponent extends src_app_common_list_component__WEBPACK_IMPORTED_MODULE_10__["ListComponent"] {
    constructor(http, ngbModal, changeDetector, route, router, session, confirmation, calendar, activeModal, translate, transactionService, toastr) {
        super(http, ngbModal, changeDetector, route, router, session, confirmation);
        this.calendar = calendar;
        this.activeModal = activeModal;
        this.translate = translate;
        this.transactionService = transactionService;
        this.toastr = toastr;
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].displayName;
        this.appColor = color__WEBPACK_IMPORTED_MODULE_7__(getComputedStyle(document.body).getPropertyValue('--primary').trim()).lighten(0.1);
        this.calculateDeductableAmount = src_app_common_transactions_mixins__WEBPACK_IMPORTED_MODULE_17__["calculateDeductableAmount"];
        this.transactionsLoading = new Set();
        this.activeTab = 'overview';
        this.transaction = {
            amount: '',
            method: 'internal',
            type: 'transfer',
        };
    }
    find() {
        return this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(user => {
            this.user = new src_app_common_models_core_user_model__WEBPACK_IMPORTED_MODULE_11__["User"](user);
            this.apiUrl = `/associations/${this.user.id}/users/${this.associate.id}/transactions`;
            this.transaction.currency = user.preferredCurrency;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(() => super.find()));
    }
    viewTransaction(transaction, options = {}) {
        const modal = this.ngbModal.open(src_app_common_transaction_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_16__["TransactionViewComponent"], {
            windowClass: 'modal-primary',
        });
        const transactionView = modal.componentInstance;
        transactionView.transaction = Object.assign({}, transaction);
        if (!!options.activeTab) {
            transactionView.activeTab = options.activeTab;
        }
        transactionView.onCancel.subscribe(() => {
            modal.dismiss();
            this.updateEvent.next();
        });
        transactionView.onUpdate.subscribe(() => {
            this.updateEvent.next();
        });
        return modal;
    }
    formatType(type) {
        return type.slice(0, 1).toUpperCase();
    }
    buildBeautifiedType(transaction) {
        switch (transaction.type) {
            case 'transfer':
                if (this.isReceiver(transaction)) {
                    return this.translate.instant('common.transfer-from');
                }
                return this.translate.instant('common.transfer-to');
            case 'deposit':
                return transaction.method === 'card'
                    ? this.translate.instant('common.unload-from')
                    : this.translate.instant('common.deposit-from');
            case 'withdrawal':
                if (transaction.method === 'card') {
                    return this.translate.instant('common.topup-to');
                }
                return this.translate.instant('common.withdrawal-to');
            case 'card-order':
            case 'account-fee':
            case 'payment':
                return this.translate.instant('common.payment-to');
            case 'conversion':
                if (this.isReceiver(transaction)) {
                    return this.translate.instant('common.conversion-from');
                }
                return this.translate.instant('common.conversion-to');
            case 'trade':
                if (this.isReceiver(transaction)) {
                    return transaction.currency.code === 'USD'
                        ? this.translate.instant('common.credit')
                        : this.translate.instant('common.buy');
                }
                return transaction.currency.code === 'USD'
                    ? this.translate.instant('common.debit')
                    : this.translate.instant('common.sell');
            case 'investment':
                if (this.isReceiver(transaction)) {
                    return this.translate.instant('common.investment-from');
                }
                return this.translate.instant('common.investment-to');
            default:
                return Object(lodash__WEBPACK_IMPORTED_MODULE_8__["capitalize"])(transaction.type);
        }
    }
    isReceiver(transaction) {
        return (!!transaction.counterWallet &&
            !!transaction.counterWallet.user &&
            !!this.user &&
            transaction.counterWallet.user.id === this.user.id);
    }
    determineSubject(transaction) {
        switch (transaction.type) {
            case 'card-order':
                return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].displayName} <span class="text-muted">/ ${this.translate.instant('common.card')}</span>`;
            case 'account-fee':
                return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].displayName} <span class="text-muted">/ ${this.translate.instant('common.account-fee')}</span>`;
            case 'deposit':
            case 'withdrawal':
                return this.beautifyMethod(transaction);
            case 'payment':
                return src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].displayName;
            case 'transfer':
                if (transaction.isPlatformTransfer()) {
                    return src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].displayName;
                }
                else if (this.isReceiver(transaction)) {
                    return this.buildAccountHolder(transaction.baseWallet);
                }
            // eslint-disable-next-line no-fallthrough
            default:
                return this.buildAccountHolder(transaction.counterWallet);
        }
    }
    beautifyMethod(transaction) {
        var _a, _b;
        switch (transaction.method) {
            case 'local':
            case 'swift':
                if (transaction.type === 'withdrawal' &&
                    transaction.beneficiary &&
                    transaction.beneficiary.accountHolder &&
                    transaction.beneficiary.accountNumber) {
                    return `${transaction.beneficiary.accountHolder} <span class="text-muted">/ ${transaction.beneficiary.accountNumber}</span>`;
                }
                return `${((_a = this.user) === null || _a === void 0 ? void 0 : _a.type) === 'business'
                    ? this.translate.instant('common.corporate')
                    : this.translate.instant('common.personal')} ${this.translate.instant('common.bank-account')}`;
            case 'card':
                const maskedPan = (_b = transaction.card) === null || _b === void 0 ? void 0 : _b.maskedPan;
                return ('Card' +
                    (maskedPan
                        ? ` <span class="text-muted">/ ${maskedPan.slice(0, 4)} ${maskedPan.slice(4, 8)} ${maskedPan.slice(8, 12)} ${maskedPan.slice(12)} </span>`
                        : ''));
            default:
                return Object(lodash__WEBPACK_IMPORTED_MODULE_8__["capitalize"])(transaction.method);
        }
    }
    markAsPaid(item) {
        if (item.method === 'crypto') {
            this.viewTransaction(item);
            return;
        }
        this.transactionsLoading.add(item.id);
        this.transactionService
            .changeStatus(item.id, 'processing')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.transactionsLoading.delete(item.id);
        }))
            .subscribe(() => {
            this.toastr.success(this.translate.instant('common.deposit-mark-as-paid'));
            this.updateEvent.next();
            this.subscriptions.add(this.confirmation
                .show({
                type: 'success',
                text: this.translate.instant('common.thank-you-for-notifying'),
                confirmText: this.translate.instant('common.i-will-upload-a-receipt'),
                cancelText: this.translate.instant('common.i-will-do-it-later'),
                cancelClass: 'warning',
            })
                .subscribe(result => {
                if (result === src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmationResult"].CONFIRMED) {
                    this.viewTransaction(item, { activeTab: 'attachments' });
                }
            }));
        });
    }
    buildAccountHolder(wallet) {
        return `${wallet.user ? `${wallet.user.name}` : this.displayName} <span class="text-muted">/ ${Object(src_app_common_transactions_mixins__WEBPACK_IMPORTED_MODULE_17__["buildWalletOwnerAccountNumber"])(wallet, src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].appName)}</span>`;
    }
};
MerchantUserProfileComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"] },
    { type: src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmationService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: src_app_common_services_transaction_service__WEBPACK_IMPORTED_MODULE_15__["TransactionService"] },
    { type: src_app_common_services_toastr_service__WEBPACK_IMPORTED_MODULE_14__["ToastrService"] }
];
MerchantUserProfileComponent.propDecorators = {
    associate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MerchantUserProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'merchant-user-profile',
        template: _raw_loader_merchant_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], MerchantUserProfileComponent);



/***/ }),

/***/ "Y/bI":
/*!********************************************************!*\
  !*** ./src/app/organization/organization.component.ts ***!
  \********************************************************/
/*! exports provided: OrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationComponent", function() { return OrganizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_organization_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./organization.component.html */ "q6Is");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "uB96");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");





let OrganizationComponent = class OrganizationComponent {
    constructor(session) {
        this.session = session;
        this.faEllipsisV = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEllipsisV"];
    }
};
OrganizationComponent.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
OrganizationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'organization',
        template: _raw_loader_organization_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], OrganizationComponent);



/***/ }),

/***/ "gXvW":
/*!*****************************************************!*\
  !*** ./src/app/organization/organization.module.ts ***!
  \*****************************************************/
/*! exports provided: OrganizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationModule", function() { return OrganizationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common.module */ "a6Df");
/* harmony import */ var _common_quill_editor_quill_editor_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/quill-editor/quill-editor.module */ "8kSJ");
/* harmony import */ var _services_user_invoices_user_invoices_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user-invoices/user-invoices.module */ "mzZL");
/* harmony import */ var _transfer_transfer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transfer/transfer.module */ "uqTW");
/* harmony import */ var _merchant_customer_list_merchant_customer_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./merchant-customer-list/merchant-customer-list.component */ "HLGW");
/* harmony import */ var _merchant_user_profile_merchant_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merchant-user-profile/merchant-user-profile.component */ "RrL8");
/* harmony import */ var _organization_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./organization-routing.module */ "gw9s");
/* harmony import */ var _organization_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./organization.component */ "Y/bI");










let OrganizationModule = class OrganizationModule {
};
OrganizationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_organization_component__WEBPACK_IMPORTED_MODULE_9__["OrganizationComponent"], _merchant_user_profile_merchant_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["MerchantUserProfileComponent"], _merchant_customer_list_merchant_customer_list_component__WEBPACK_IMPORTED_MODULE_6__["MerchantCustomerListComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _organization_routing_module__WEBPACK_IMPORTED_MODULE_8__["OrganizationRoutingModule"], _common_quill_editor_quill_editor_module__WEBPACK_IMPORTED_MODULE_3__["QuillEditorModule"], _services_user_invoices_user_invoices_module__WEBPACK_IMPORTED_MODULE_4__["UserInvoicesModule"], _transfer_transfer_module__WEBPACK_IMPORTED_MODULE_5__["TransferModule"]],
    })
], OrganizationModule);



/***/ }),

/***/ "gw9s":
/*!*************************************************************!*\
  !*** ./src/app/organization/organization-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OrganizationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationRoutingModule", function() { return OrganizationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _organization_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organization.component */ "Y/bI");




const routes = [
    {
        path: '',
        component: _organization_component__WEBPACK_IMPORTED_MODULE_3__["OrganizationComponent"],
    },
];
let OrganizationRoutingModule = class OrganizationRoutingModule {
};
OrganizationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrganizationRoutingModule);



/***/ }),

/***/ "lGZE":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organization/merchant-user-profile/merchant-user-profile.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ 'common.customer-profile' | translate }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss(); $event.preventDefault()\">&times;</button>\n</div>\n<ul class=\"nav nav-tabs-alt nav-fill\">\n    <li class=\"nav-item\">\n        <a href class=\"nav-link active\" [ngClass]=\"{ active: activeTab === 'overview' }\" (click)=\"activeTab = 'overview'; $event.preventDefault()\">\n            {{ 'common.overview' | translate }}\n        </a>\n    </li>\n    <li class=\"nav-item\">\n        <a href class=\"nav-link\" [ngClass]=\"{ active: activeTab === 'send-payment' }\" (click)=\"activeTab = 'send-payment'; $event.preventDefault()\">\n            {{ 'common.send-payment' | translate }}\n        </a>\n    </li>\n    <li class=\"nav-item\">\n        <a href class=\"nav-link\" [ngClass]=\"{ active: activeTab === 'send-invoice' }\" (click)=\"activeTab = 'send-invoice'; $event.preventDefault()\">\n            {{ 'common.send-invoice' | translate }}\n        </a>\n    </li>\n</ul>\n<div class=\"modal-body\">\n    <ng-container *ngIf=\"activeTab === 'overview'\">\n        <div class=\"row mb-2\">\n            <div class=\"col-lg-8 d-flex align-items-center\">\n                <div class=\"media d-flex align-items-center\">\n                    <user-avatar [user]=\"associate\" size=\"xl\" elementClass=\"mr-3\"></user-avatar>\n                    <div class=\"media-body\">\n                        <div class=\"text-muted font-sm\">{{ 'common.account-name' | translate | titlecase }}</div>\n                        <p class=\"profile-value text-primary\">\n                            {{ associate.name }}\n                        </p>\n                        <div class=\"text-muted font-sm\">{{ 'common.account-number' | translate | titlecase }}</div>\n                        <p>\n                            <copy-wrap [value]=\"associate.accountNumber\">\n                                <span class=\"profile-value text-body\">{{ associate.accountNumber | accountNumber }}</span>\n                            </copy-wrap>\n                        </p>\n                        <div class=\"text-muted font-sm\">{{ 'common.email-address' | translate }}</div>\n                        <p class=\"profile-value\">{{ associate.email }}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row mb-2\">\n            <div class=\"col\">\n                <h5>{{ 'common.transactions' | translate }}</h5>\n            </div>\n        </div>\n        <div class=\"table-responsive\">\n            <table class=\"table table-hover table-card\">\n                <thead class=\"thead-light\">\n                    <tr>\n                        <th scope=\"col\">\n                            {{ 'common.subject' | translate }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['counterWallet', 'id']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['counterWallet', 'id'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['counterWallet', 'id']) }\"\n                            ></fa-icon>\n                        </th>\n                        <th scope=\"col\" class=\"text-right\">\n                            {{ 'common.amount' | translate }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['amount']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['amount'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['amount']) }\"\n                            ></fa-icon>\n                        </th>\n                        <th scope=\"col\">\n                            {{ 'common.status' | translate }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['status']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['status'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['status']) }\"\n                            ></fa-icon>\n                        </th>\n                        <th scope=\"col\">\n                            {{ 'common.created-at' | translate | titlecase }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['createdAt']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['createdAt'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['createdAt']) }\"\n                            ></fa-icon>\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container *ngIf=\"itemsStream | async; let items\">\n                        <ng-container *ngIf=\"items.length === 0; else rows\">\n                            <tr>\n                                <td class=\"bg-white\" colspan=\"12\">\n                                    <div class=\"mx-auto p-3 mt-2 mb-4 text-center max-width-sm\">\n                                        <p class=\"mb-3 text-gray\">No transaction found.</p>\n                                    </div>\n                                </td>\n                            </tr>\n                        </ng-container>\n                        <ng-template #rows>\n                            <tr\n                                *ngFor=\"let transaction of items\"\n                                class=\"clickable bg-white e2e-user-transaction transaction-row\"\n                                (click)=\"viewTransaction(transaction)\"\n                                [ngClass]=\"{ 'text-muted': transaction.status !== 'completed' }\"\n                            >\n                                <th scope=\"row\">\n                                    <div class=\"d-flex align-items-center\">\n                                        <ng-container\n                                            *ngIf=\"\n                                                transaction.type === 'deposit' ||\n                                                    transaction.type === 'withdrawal' ||\n                                                    transaction.type === 'card-order' ||\n                                                    transaction.type === 'conversion' ||\n                                                    transaction.type === 'trade' ||\n                                                    transaction.type === 'subscription' ||\n                                                    transaction.type === 'investment';\n                                                else avatar\n                                            \"\n                                        >\n                                            <!-- htmllint attr-bans=\"[]\" -->\n                                            <div class=\"avatar avatar-sm mr-3\">\n                                                <svg\n                                                    class=\"img-avatar\"\n                                                    xmlns=\"http://www.w3.org/2000/svg\"\n                                                    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                                    xml:space=\"preserve\"\n                                                    text-rendering=\"geometricPrecision\"\n                                                    style=\"\n                                                        shape-rendering: geometricPrecision;\n                                                        image-rendering: optimizeQuality;\n                                                        fill-rule: evenodd;\n                                                        clip-rule: evenodd;\n                                                    \"\n                                                    viewBox=\"0 0 120 120\"\n                                                >\n                                                    <g>\n                                                        <rect [style.fill]=\"appColor\" width=\"120\" height=\"120\"></rect>\n                                                        <text\n                                                            font-weight=\"500\"\n                                                            font-size=\"3.25em\"\n                                                            font-family=\"sans-serif\"\n                                                            fill=\"#ffffff\"\n                                                            x=\"50%\"\n                                                            y=\"50%\"\n                                                            text-anchor=\"middle\"\n                                                            dy=\"0.35em\"\n                                                        >\n                                                            {{ formatType(transaction.type) }}\n                                                        </text>\n                                                    </g>\n                                                </svg>\n                                            </div>\n                                            <!-- htmllint attr-bans=\"$previous\" -->\n                                        </ng-container>\n                                        <ng-template #avatar>\n                                            <user-avatar\n                                                *ngIf=\"!isReceiver(transaction)\"\n                                                [user]=\"transaction.counterWallet.user\"\n                                                size=\"sm\"\n                                                elementClass=\"mr-3\"\n                                            ></user-avatar>\n                                            <user-avatar\n                                                *ngIf=\"isReceiver(transaction)\"\n                                                [user]=\"transaction.baseWallet.user\"\n                                                size=\"sm\"\n                                                elementClass=\"mr-3\"\n                                            ></user-avatar>\n                                        </ng-template>\n                                        <div>\n                                            <div>{{ buildBeautifiedType(transaction) }}</div>\n                                            <ng-container *ngIf=\"!['conversion', 'investment', 'trade'].includes(transaction.type); else addon\">\n                                                <span\n                                                    [ngClass]=\"transaction.status !== 'completed' ? 'text-muted' : 'text-primary'\"\n                                                    [innerHtml]=\"determineSubject(transaction)\"\n                                                ></span>\n                                            </ng-container>\n                                            <ng-template #addon>\n                                                <ng-container *ngIf=\"$any(transaction).allocationsStream | async; let allocations\">\n                                                    <span [ngClass]=\"transaction.status !== 'completed' ? 'text-muted' : 'text-primary'\">\n                                                        {{ allocations[0]?.product?.name }}\n                                                        <span class=\"text-muted\">/ {{ allocations[0]?.id | truncate: false:7:'' }}</span>\n                                                    </span>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"$any(transaction).conversionsStream | async; let conversions\">\n                                                    <span [ngClass]=\"transaction.status !== 'completed' ? 'text-muted' : 'text-primary'\">\n                                                        {{\n                                                            isReceiver(transaction)\n                                                                ? conversions[0]?.baseTransaction?.currency?.name\n                                                                : conversions[0]?.currency?.name\n                                                        }}\n                                                        <span class=\"text-muted\">/ {{ conversions[0]?.id | truncate: false:7:'' }}</span>\n                                                    </span>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"$any(transaction).tradeStream | async; let trades\">\n                                                    <span [ngClass]=\"transaction.status !== 'completed' ? 'text-muted' : 'text-primary'\">\n                                                        {{\n                                                            isReceiver(transaction)\n                                                                ? trades[0]?.counterTransaction?.currency?.name\n                                                                : trades[0]?.baseTransaction?.currency?.name\n                                                        }}\n                                                        <span class=\"text-muted\">/ {{ trades[0]?.id | truncate: false:7:'' }}</span>\n                                                        <span\n                                                            [ngClass]=\"\n                                                                !queryParams['currencyCode']['or']?.length\n                                                                    ? isReceiver(transaction)\n                                                                        ? 'tx-marker down'\n                                                                        : 'tx-marker up'\n                                                                    : ''\n                                                            \"\n                                                        ></span>\n                                                    </span>\n                                                </ng-container>\n                                            </ng-template>\n                                        </div>\n                                    </div>\n                                </th>\n                                <td class=\"text-right\">\n                                    <span\n                                        [ngClass]=\"\n                                            transaction.status !== 'completed' ? 'text-muted' : isReceiver(transaction) ? 'text-green' : 'text-danger'\n                                        \"\n                                        >{{ isReceiver(transaction) ? '' : '-'\n                                        }}{{\n                                            (isReceiver(transaction) ? transaction.settledAmount : calculateDeductableAmount(transaction))\n                                                | amount: transaction.currency.decimalPlaces\n                                        }}\n                                        {{ transaction.currency.code }}</span\n                                    >\n                                </td>\n                                <td>\n                                    <span\n                                        class=\"text-capitalize label\"\n                                        [ngClass]=\"{\n                                            'label-success': transaction.status === 'completed',\n                                            'label-info': transaction.status === 'pending',\n                                            'label-warning': transaction.status === 'processing',\n                                            'label-danger': ['cancelled', 'failed'].indexOf(transaction.status) !== -1\n                                        }\"\n                                        >{{ transaction.status }}</span\n                                    >\n                                </td>\n                                <td>{{ transaction.createdAt | date: 'medium' }}</td>\n                            </tr>\n                        </ng-template>\n                    </ng-container>\n                </tbody>\n            </table>\n        </div>\n        <ng-container *ngIf=\"itemsStream | async; let items\">\n            <ng-container *ngIf=\"items.length !== 0\">\n                <div class=\"row\">\n                    <div class=\"col d-flex justify-content-center mt-3\">\n                        <ngb-pagination\n                            [(page)]=\"page\"\n                            [collectionSize]=\"count\"\n                            (pageChange)=\"select()\"\n                            [pageSize]=\"limit\"\n                            [maxSize]=\"4\"\n                            [rotate]=\"false\"\n                            [boundaryLinks]=\"true\"\n                        >\n                        </ngb-pagination>\n                    </div>\n                </div>\n            </ng-container>\n        </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"activeTab === 'send-payment'\">\n        <transfer-form [transaction]=\"transaction\" [recipient]=\"associate.email\" [showContactBtn]=\"false\" [lockRecipient]=\"true\"></transfer-form>\n    </ng-container>\n    <ng-container *ngIf=\"activeTab === 'send-invoice'\">\n        <user-invoice-form [hideModal]=\"true\" [invoicee]=\"associate.email\" [lockRecipient]=\"true\" [showContacts]=\"false\"></user-invoice-form>\n    </ng-container>\n</div>\n");

/***/ }),

/***/ "q6Is":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organization/organization.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"session.userStream | async; let user\">\n    <div class=\"container pt-page pb-3\">\n        <div class=\"row justify-content-between align-items-center pb-2\">\n            <div class=\"col-auto\">\n                <h5 class=\"mb-0\">{{ 'common.organization' | translate }}</h5>\n            </div>\n            <div class=\"col-auto d-flex justify-content-end\">\n                <ol class=\"breadcrumb px-0\">\n                    <li class=\"breadcrumb-item\">\n                        <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">{{ 'common.organization' | translate }}</li>\n                </ol>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <merchant-customer-list></merchant-customer-list>\n    </div>\n</ng-container>\n");

/***/ })

}]);
//# sourceMappingURL=organization-organization-module.js.map