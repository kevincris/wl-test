(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~transactions-transactions-module~user-redemption-user-redemption-~a37267c0"],{

/***/ "Djo4":
/*!**********************************************************************!*\
  !*** ./src/app/common/user-transactions/user-transactions.module.ts ***!
  \**********************************************************************/
/*! exports provided: UserTransactionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTransactionsModule", function() { return UserTransactionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.module */ "a6Df");
/* harmony import */ var _transaction_transaction_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transaction/transaction.module */ "SRhG");
/* harmony import */ var _user_transactions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-transactions.component */ "LA2D");





let UserTransactionsModule = class UserTransactionsModule {
};
UserTransactionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_transactions_component__WEBPACK_IMPORTED_MODULE_4__["UserTransactionsComponent"]],
        exports: [_user_transactions_component__WEBPACK_IMPORTED_MODULE_4__["UserTransactionsComponent"]],
        imports: [_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _transaction_transaction_module__WEBPACK_IMPORTED_MODULE_3__["TransactionModule"]],
    })
], UserTransactionsModule);



/***/ }),

/***/ "DnZ9":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/user-transactions/user-transactions.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!router.isActive('/dashboard', false)\">\n    <div class=\"container pt-page\">\n        <div class=\"row justify-content-between align-items-center pb-2\">\n            <div class=\"col-auto\">\n                <h5 class=\"mb-0\">{{ 'common.transactions' | translate }}</h5>\n            </div>\n            <div class=\"col-auto d-flex justify-content-end\">\n                <ol class=\"breadcrumb px-0\">\n                    <li class=\"breadcrumb-item\">\n                        <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">{{ 'common.transactions' | translate }}</li>\n                </ol>\n            </div>\n        </div>\n        <div class=\"mb-3\">\n            <div class=\"row align-items-center\">\n                <div class=\"col-lg-7 mb-2 mb-lg-0\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><fa-icon [icon]=\"faSearch\"></fa-icon></span>\n                        </span>\n                        <input\n                            #searchElement\n                            type=\"text\"\n                            name=\"searchText\"\n                            (ngModelChange)=\"searchEvent.next()\"\n                            [placeholder]=\"'common.search' | translate\"\n                            class=\"form-control\"\n                            [(ngModel)]=\"search\"\n                        />\n                    </div>\n                </div>\n                <div class=\"col-lg-7 d-flex align-items-center\">\n                    <div>\n                        <span>{{ count | number }} {{ (count === 1 ? 'common.entry-found' : 'common.entries-found') | translate | lowercase }}</span>\n                        <span class=\"ml-3\"\n                            ><a href (click)=\"isFilterOptionsCollapsed = !isFilterOptionsCollapsed; $event.preventDefault()\"\n                                >{{ isFilterOptionsCollapsed ? '+' : '-' }} {{ 'common.filter-options' | translate }}</a\n                            ></span\n                        >\n                    </div>\n                </div>\n                <div class=\"col pt-3 pt-md-0 d-flex justify-content-end\">\n                    <div ngbDropdown class=\"d-inline-block mr-2\" container=\"body\">\n                        <button class=\"btn btn-primary-air\" id=\"dropdownReport\" ngbDropdownToggle>{{ 'common.export-statement' | translate }}</button>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownReport\">\n                            <div class=\"px-2 py-1\">\n                                <p class=\"mb-1\">{{ 'common.select-date-range' | translate }}</p>\n                                <div class=\"form-group\">\n                                    <label for=\"fromDate\">{{ 'common.from' | translate }}</label>\n                                    <div class=\"input-group\">\n                                        <input\n                                            class=\"form-control\"\n                                            placeholder=\"yyyy-mm-dd\"\n                                            name=\"fromDate\"\n                                            [(ngModel)]=\"fromDate\"\n                                            ngbDatepicker\n                                            #dfromDate=\"ngbDatepicker\"\n                                        />\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-default calendar\" (click)=\"dfromDate.toggle()\" type=\"button\">\n                                                <fa-icon [icon]=\"faCalendarAlt\"></fa-icon>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"toDate\">{{ 'common.to' | translate | lowercase }}</label>\n                                    <div class=\"input-group\">\n                                        <input\n                                            class=\"form-control\"\n                                            placeholder=\"yyyy-mm-dd\"\n                                            name=\"toDate\"\n                                            [(ngModel)]=\"toDate\"\n                                            ngbDatepicker\n                                            #dtoDate=\"ngbDatepicker\"\n                                        />\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-default calendar\" (click)=\"dtoDate.toggle()\" type=\"button\">\n                                                <fa-icon [icon]=\"faCalendarAlt\"></fa-icon>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"btn-group w-100\">\n                                    <button type=\"button\" class=\"btn btn-primary-air\" (click)=\"downloadReport('pdf')\">.PDF</button>\n                                    <button type=\"button\" class=\"btn btn-secondary-air\" (click)=\"downloadReport('xls')\">.XLS</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <a class=\"btn btn-secondary-air mr-2\" [routerLink]=\"['/deposit']\">\n                        <fa-icon class=\"mr-1\" [icon]=\"faPlus\"></fa-icon> {{ 'common.deposit' | translate }}\n                    </a>\n                    <a class=\"btn btn-primary-air\" [routerLink]=\"['/withdraw']\">\n                        <fa-icon class=\"mr-1\" [icon]=\"faMinus\"></fa-icon> {{ 'common.withdraw' | translate }}\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div [ngbCollapse]=\"isFilterOptionsCollapsed\">\n            <div class=\"row\">\n                <div class=\"col-xl-8\">\n                    <div class=\"form-group row\" *ngIf=\"!getDefaultQuery().type?.eq\">\n                        <label for=\"type\" class=\"col-sm-6 col-form-label text-body\">{{ 'common.type' | translate }}</label>\n                        <div class=\"col-sm-18\">\n                            <ng-select\n                                id=\"type\"\n                                name=\"type\"\n                                [items]=\"types\"\n                                [multiple]=\"true\"\n                                [closeOnSelect]=\"false\"\n                                [searchable]=\"false\"\n                                [placeholder]=\"'common.filter-by-type' | translate\"\n                                [ngModel]=\"queryParams['type']['or']\"\n                                (ngModelChange)=\"queryParams['type']['or'] = $event; searchEvent.next()\"\n                            >\n                                <ng-template ng-label-tmp let-item=\"item\">{{ $any(typeMap)[item] }}</ng-template>\n                                <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                                    <input class=\"mr-2\" [id]=\"'item-' + index\" type=\"checkbox\" [ngModel]=\"item$.selected\" />\n                                    <span>{{ $any(typeMap)[item] }}</span>\n                                </ng-template>\n                            </ng-select>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\" *ngIf=\"appName !== 'sgpmx'\">\n                        <label for=\"method\" class=\"col-sm-6 col-form-label text-body\">{{ 'common.method' | translate }}</label>\n                        <div class=\"col-sm-18\">\n                            <ng-select\n                                id=\"method\"\n                                name=\"method\"\n                                [items]=\"methods\"\n                                [multiple]=\"true\"\n                                [closeOnSelect]=\"false\"\n                                [searchable]=\"false\"\n                                [placeholder]=\"'common.filter-by-method' | translate\"\n                                [ngModel]=\"queryParams['method']['or']\"\n                                (ngModelChange)=\"queryParams['method']['or'] = $event; searchEvent.next()\"\n                            >\n                                <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                                    <input class=\"mr-2\" [id]=\"'item-' + index\" type=\"checkbox\" [ngModel]=\"item$.selected\" />\n                                    <span class=\"text-uppercase\">{{ toStartCase(item) }}</span>\n                                </ng-template>\n                            </ng-select>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"currency\" class=\"col-sm-6 col-form-label text-body\">{{ 'common.currency' | translate }}</label>\n                        <div class=\"col-sm-18\">\n                            <ng-select\n                                id=\"currencyCode\"\n                                name=\"currencyCode\"\n                                bindLabel=\"code\"\n                                bindValue=\"code\"\n                                [items]=\"currencies\"\n                                [multiple]=\"true\"\n                                [closeOnSelect]=\"false\"\n                                [searchable]=\"false\"\n                                [placeholder]=\"'common.filter-by-currency' | translate\"\n                                [ngModel]=\"queryParams['currencyCode']['or']\"\n                                (ngModelChange)=\"queryParams['currencyCode']['or'] = $event; searchEvent.next()\"\n                            >\n                                <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                                    <input class=\"mr-2\" [id]=\"'item-' + index\" type=\"checkbox\" [ngModel]=\"item$.selected\" />\n                                    <span class=\"text-uppercase\">{{ toStartCase(item.code) }}</span>\n                                </ng-template>\n                            </ng-select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-8\">\n                    <div class=\"form-group row\">\n                        <label for=\"status\" class=\"col-sm-6 col-form-label text-body\">{{ 'common.status' | translate }}</label>\n                        <div class=\"col-sm-18\">\n                            <ng-select\n                                id=\"status\"\n                                name=\"status\"\n                                [items]=\"statuses\"\n                                [multiple]=\"true\"\n                                [closeOnSelect]=\"false\"\n                                [searchable]=\"false\"\n                                [placeholder]=\"'common.filter-by-status' | translate\"\n                                [ngModel]=\"queryParams['status']['or']\"\n                                (ngModelChange)=\"queryParams['status']['or'] = $event; searchEvent.next()\"\n                            >\n                                <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                                    <input class=\"mr-2\" [id]=\"'item-' + index\" type=\"checkbox\" [ngModel]=\"item$.selected\" />\n                                    <span>{{ toStartCase(item) }}</span>\n                                </ng-template>\n                            </ng-select>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-6 col-form-label text-body\">{{ 'common.amount' | translate }}</label>\n                        <div class=\"col-sm-18\">\n                            <div class=\"d-flex align-items-center\">\n                                <div class=\"input-group\">\n                                    <input\n                                        class=\"form-control\"\n                                        type=\"text\"\n                                        id=\"amountFrom\"\n                                        name=\"amountFrom\"\n                                        [placeholder]=\"'common.from' | translate\"\n                                        [ngModel]=\"queryParams['amount']['gte']\"\n                                        (ngModelChange)=\"queryParams['amount']['gte'] = $event; searchEvent.next()\"\n                                    />\n                                    <input\n                                        class=\"form-control\"\n                                        type=\"text\"\n                                        id=\"amountTo\"\n                                        name=\"amountTo\"\n                                        [placeholder]=\"'common.to' | translate\"\n                                        [ngModel]=\"queryParams['amount']['lte']\"\n                                        (ngModelChange)=\"queryParams['amount']['lte'] = $event; searchEvent.next()\"\n                                    />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-8\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-6 col-form-label text-body\">{{ 'common.created-at' | translate | titlecase }}</label>\n                        <div class=\"col-sm-18\">\n                            <div class=\"d-flex align-items-center\">\n                                <div class=\"input-group\">\n                                    <input\n                                        class=\"form-control\"\n                                        type=\"text\"\n                                        id=\"createdAtFrom\"\n                                        name=\"createdAtFrom\"\n                                        [placeholder]=\"queryParams['createdAt']['gte'] || ('common.from' | translate)\"\n                                        (dateTimeChange)=\"\n                                            queryParams['createdAt']['gte'] = $event.value && formatDate($event.value, 'yyyy-MM-dd');\n                                            searchEvent.next()\n                                        \"\n                                        [owlDateTime]=\"createdAtFrom\"\n                                        [owlDateTimeTrigger]=\"createdAtFrom\"\n                                    />\n                                    <input\n                                        class=\"form-control\"\n                                        type=\"text\"\n                                        id=\"createdAtTo\"\n                                        name=\"createdAtTo\"\n                                        [placeholder]=\"queryParams['createdAt']['lte'] || 'To'\"\n                                        (dateTimeChange)=\"\n                                            queryParams['createdAt']['lte'] = $event.value && formatDate($event.value, 'yyyy-MM-dd');\n                                            searchEvent.next()\n                                        \"\n                                        [owlDateTime]=\"createdAtTo\"\n                                        [owlDateTimeTrigger]=\"createdAtTo\"\n                                    />\n                                </div>\n                                <owl-date-time pickerType=\"calendar\" [firstDayOfWeek]=\"1\" #createdAtFrom></owl-date-time>\n                                <owl-date-time pickerType=\"calendar\" [firstDayOfWeek]=\"1\" #createdAtTo></owl-date-time>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-6 col-form-label text-body\">{{ 'common.settled-at' | translate | titlecase }}</label>\n                        <div class=\"col-sm-18\">\n                            <div class=\"d-flex align-items-center\">\n                                <div class=\"input-group\">\n                                    <input\n                                        class=\"form-control\"\n                                        type=\"text\"\n                                        id=\"settledAtFrom\"\n                                        name=\"settledAtFrom\"\n                                        [placeholder]=\"queryParams['settledAt']['gte'] || ('common.from' | translate)\"\n                                        (dateTimeChange)=\"\n                                            queryParams['settledAt']['gte'] = $event.value && formatDate($event.value, 'yyyy-MM-dd');\n                                            searchEvent.next()\n                                        \"\n                                        [owlDateTime]=\"settledAtFrom\"\n                                        [owlDateTimeTrigger]=\"settledAtFrom\"\n                                    />\n                                    <input\n                                        class=\"form-control\"\n                                        type=\"text\"\n                                        id=\"settledAtTo\"\n                                        name=\"settledAtTo\"\n                                        [placeholder]=\"queryParams['settledAt']['lte'] || 'To'\"\n                                        (dateTimeChange)=\"\n                                            queryParams['settledAt']['lte'] = $event.value && formatDate($event.value, 'yyyy-MM-dd');\n                                            searchEvent.next()\n                                        \"\n                                        [owlDateTime]=\"settledAtTo\"\n                                        [owlDateTimeTrigger]=\"settledAtTo\"\n                                    />\n                                </div>\n                                <owl-date-time pickerType=\"calendar\" [firstDayOfWeek]=\"1\" #settledAtFrom></owl-date-time>\n                                <owl-date-time pickerType=\"calendar\" [firstDayOfWeek]=\"1\" #settledAtTo></owl-date-time>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>\n<div class=\"container\">\n    <div class=\"card\">\n        <div class=\"card-header b-b-0\">\n            {{ 'common.transactions' | translate }}\n            <div class=\"card-menu\" *ngIf=\"router.isActive('/dashboard', false)\">\n                <a class=\"font-lg\" [routerLink]=\"['/transactions']\">{{ 'common.view-all' | translate }} &#x203A;</a>\n            </div>\n        </div>\n        <div class=\"table-responsive\">\n            <table class=\"table table-hover table-card\">\n                <thead class=\"thead-light\">\n                    <tr>\n                        <th scope=\"col\">\n                            {{ 'common.subject' | translate }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['counterWallet', 'id']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['counterWallet', 'id'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['counterWallet', 'id']) }\"\n                            ></fa-icon>\n                        </th>\n                        <th scope=\"col\" class=\"text-right\">\n                            {{ 'common.amount' | translate }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['amount']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['amount'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['amount']) }\"\n                            ></fa-icon>\n                        </th>\n                        <th scope=\"col\">\n                            {{ 'common.status' | translate }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['status']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['status'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['status']) }\"\n                            ></fa-icon>\n                        </th>\n                        <th scope=\"col\">\n                            {{ 'common.created-at' | translate | titlecase }}\n                            <fa-icon\n                                class=\"sort-toggle\"\n                                [icon]=\"getSortingDirection(['createdAt']) === 'DESC' ? faChevronUp : faChevronDown\"\n                                (click)=\"sort(['createdAt'], $event.ctrlKey || $event.metaKey)\"\n                                [ngClass]=\"{ active: isActiveSorting(['createdAt']) }\"\n                            ></fa-icon>\n                        </th>\n                        <th scope=\"col\"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container *ngIf=\"itemsStream | async; let items\">\n                        <ng-container *ngIf=\"items.length === 0; else rows\">\n                            <tr>\n                                <td class=\"bg-white\" colspan=\"12\">\n                                    <div class=\"mx-auto p-3 mt-2 mb-4 text-center max-width-sm\">\n                                        <img src=\"/img/icons/wallet.svg\" class=\"img-sm mb-2\" />\n                                        <h4 class=\"mb-1\">{{ 'common.get-started' | translate }}</h4>\n                                        <p class=\"mb-3 text-gray\">\n                                            {{ 'common.load-funds' | translate }} {{ displayName }} {{ 'common.account' | translate | lowercase }}.\n                                        </p>\n                                        <a class=\"btn btn-primary-air btn-lg btn-block\" [routerLink]=\"['/deposit']\">\n                                            {{ 'common.make-deposit' | translate }}\n                                        </a>\n                                    </div>\n                                </td>\n                            </tr>\n                        </ng-container>\n                        <ng-template #rows>\n                            <tr\n                                *ngFor=\"let transaction of items\"\n                                class=\"clickable bg-white e2e-user-transaction transaction-row\"\n                                (click)=\"viewTransaction(transaction)\"\n                                [ngClass]=\"{ 'text-muted': transaction.status !== 'completed' }\"\n                            >\n                                <th scope=\"row\">\n                                    <div class=\"d-flex align-items-center\">\n                                        <ng-container\n                                            *ngIf=\"\n                                                transaction.type === 'deposit' ||\n                                                    transaction.type === 'withdrawal' ||\n                                                    transaction.type === 'card-order' ||\n                                                    transaction.type === 'conversion' ||\n                                                    transaction.type === 'trade' ||\n                                                    transaction.type === 'account-fee' ||\n                                                    transaction.type === 'investment';\n                                                else avatar\n                                            \"\n                                        >\n                                            <!-- htmllint attr-bans=\"[]\" -->\n                                            <div class=\"avatar avatar-sm mr-3\">\n                                                <svg\n                                                    class=\"img-avatar\"\n                                                    xmlns=\"http://www.w3.org/2000/svg\"\n                                                    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                                    xml:space=\"preserve\"\n                                                    text-rendering=\"geometricPrecision\"\n                                                    style=\"\n                                                        shape-rendering: geometricPrecision;\n                                                        image-rendering: optimizeQuality;\n                                                        fill-rule: evenodd;\n                                                        clip-rule: evenodd;\n                                                    \"\n                                                    viewBox=\"0 0 120 120\"\n                                                >\n                                                    <g>\n                                                        <rect [style.fill]=\"appColor\" width=\"120\" height=\"120\"></rect>\n                                                        <text\n                                                            font-weight=\"500\"\n                                                            font-size=\"3.25em\"\n                                                            font-family=\"sans-serif\"\n                                                            fill=\"#ffffff\"\n                                                            x=\"50%\"\n                                                            y=\"50%\"\n                                                            text-anchor=\"middle\"\n                                                            dy=\"0.35em\"\n                                                        >\n                                                            {{ formatType(transaction.type) }}\n                                                        </text>\n                                                    </g>\n                                                </svg>\n                                            </div>\n                                            <!-- htmllint attr-bans=\"$previous\" -->\n                                        </ng-container>\n                                        <ng-template #avatar>\n                                            <user-avatar\n                                                *ngIf=\"!isReceiver(transaction)\"\n                                                [user]=\"transaction.counterWallet.user\"\n                                                size=\"sm\"\n                                                elementClass=\"mr-3\"\n                                            ></user-avatar>\n                                            <user-avatar\n                                                *ngIf=\"isReceiver(transaction)\"\n                                                [user]=\"transaction.baseWallet.user\"\n                                                size=\"sm\"\n                                                elementClass=\"mr-3\"\n                                            ></user-avatar>\n                                        </ng-template>\n                                        <div>\n                                            <div>{{ buildBeautifiedType(transaction) }}</div>\n                                            <ng-container *ngIf=\"!['conversion', 'investment', 'trade'].includes(transaction.type); else addon\">\n                                                <span\n                                                    [ngClass]=\"transaction.status !== 'completed' ? 'text-muted' : 'text-primary'\"\n                                                    [innerHtml]=\"determineSubject(transaction)\"\n                                                ></span>\n                                            </ng-container>\n                                            <ng-template #addon>\n                                                <ng-container *ngIf=\"$any(transaction).allocationsStream | async; let allocations\">\n                                                    <span [ngClass]=\"transaction.status !== 'completed' ? 'text-muted' : 'text-primary'\">\n                                                        {{ allocations[0]?.product?.name }}\n                                                        <span class=\"text-muted\">/ {{ allocations[0]?.id | truncate: false:7:'' }}</span>\n                                                    </span>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"$any(transaction).conversionsStream | async; let conversions\">\n                                                    <span [ngClass]=\"transaction.status !== 'completed' ? 'text-muted' : 'text-primary'\">\n                                                        {{\n                                                            isReceiver(transaction)\n                                                                ? conversions[0]?.baseTransaction?.currency?.name\n                                                                : conversions[0]?.currency?.name\n                                                        }}\n                                                        <span class=\"text-muted\">/ {{ conversions[0]?.id | truncate: false:7:'' }}</span>\n                                                    </span>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"$any(transaction).tradeStream | async; let trades\">\n                                                    <span [ngClass]=\"transaction.status !== 'completed' ? 'text-muted' : 'text-primary'\">\n                                                        {{\n                                                            isReceiver(transaction)\n                                                                ? trades[0]?.counterTransaction?.currency?.name\n                                                                : trades[0]?.baseTransaction?.currency?.name\n                                                        }}\n                                                        <span class=\"text-muted\">/ {{ trades[0]?.id | truncate: false:7:'' }}</span>\n                                                        <span\n                                                            [ngClass]=\"\n                                                                !queryParams['currencyCode']['or']?.length\n                                                                    ? isReceiver(transaction)\n                                                                        ? 'tx-marker down'\n                                                                        : 'tx-marker up'\n                                                                    : ''\n                                                            \"\n                                                        ></span>\n                                                    </span>\n                                                </ng-container>\n                                            </ng-template>\n                                        </div>\n                                    </div>\n                                </th>\n                                <td class=\"text-right\">\n                                    <span\n                                        [ngClass]=\"\n                                            transaction.status !== 'completed' ? 'text-muted' : isReceiver(transaction) ? 'text-green' : 'text-danger'\n                                        \"\n                                        >{{ isReceiver(transaction) ? '' : '-'\n                                        }}{{\n                                            (isReceiver(transaction) ? transaction.settledAmount : calculateDeductableAmount(transaction))\n                                                | amount: transaction.currency.decimalPlaces\n                                        }}\n                                        {{ transaction.currency.code }}</span\n                                    >\n                                </td>\n                                <td>\n                                    <span\n                                        class=\"text-capitalize label\"\n                                        [ngClass]=\"{\n                                            'label-success': transaction.status === 'completed',\n                                            'label-info': transaction.status === 'pending',\n                                            'label-warning': transaction.status === 'processing',\n                                            'label-danger': ['cancelled', 'failed'].indexOf(transaction.status) !== -1\n                                        }\"\n                                        >{{ transaction.status }}</span\n                                    >\n                                </td>\n                                <td>{{ transaction.createdAt | date: 'medium' }}</td>\n                                <td class=\"action pr-4 text-right\">\n                                    <button\n                                        type=\"button\"\n                                        class=\"btn btn-sm btn-success\"\n                                        [ngClass]=\"{ loading: transactionsLoading.has(transaction.id) }\"\n                                        [disabled]=\"transactionsLoading.has(transaction.id)\"\n                                        *ngIf=\"transaction.type === 'deposit' && transaction.status === 'pending'\"\n                                        (click)=\"$event.stopPropagation(); markAsPaid(transaction)\"\n                                    >\n                                        {{ 'common.mark-as-paid' | translate }}\n                                    </button>\n                                </td>\n                            </tr>\n                            <tr *ngFor=\"let empty of fill\" class=\"fill\">\n                                <td colspan=\"12\">\n                                    <div>&nbsp;</div>\n                                    <span>&nbsp;</span>\n                                </td>\n                            </tr>\n                        </ng-template>\n                    </ng-container>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <footer class=\"table-footer mb-3\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-8\">\n                <ng-select\n                    [(ngModel)]=\"limit\"\n                    dropdownPosition=\"auto\"\n                    (change)=\"select(1)\"\n                    [items]=\"limitOpts\"\n                    [placeholder]=\"'common.show-entries-per-page' | translate\"\n                    [clearable]=\"false\"\n                    [searchable]=\"false\"\n                    required\n                >\n                    <ng-template ng-label-tmp let-item=\"item\"\n                        >{{ 'common.show' | translate }} {{ item }} {{ 'common.per-page' | translate }}</ng-template\n                    >\n                    <ng-template ng-option-tmp let-item=\"item\">{{ item }} {{ 'common.entries' | translate }}</ng-template>\n                </ng-select>\n            </div>\n            <div class=\"col-lg-18 col-md-16 d-flex justify-content-center justify-content-md-end mt-3 mt-md-0\">\n                <ngb-pagination\n                    [(page)]=\"page\"\n                    [collectionSize]=\"count\"\n                    (pageChange)=\"select()\"\n                    [pageSize]=\"limit\"\n                    [maxSize]=\"4\"\n                    [rotate]=\"false\"\n                    [boundaryLinks]=\"true\"\n                >\n                </ngb-pagination>\n            </div>\n        </div>\n    </footer>\n</div>\n");

/***/ }),

/***/ "LA2D":
/*!*************************************************************************!*\
  !*** ./src/app/common/user-transactions/user-transactions.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTransactionsComponent", function() { return UserTransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_transactions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-transactions.component.html */ "DnZ9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "uB96");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! color */ "aSns");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_mixin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common.mixin */ "s/H0");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../list.component */ "aJRI");
/* harmony import */ var _models_accounting_transaction_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../models/accounting/transaction.model */ "OWbF");
/* harmony import */ var _models_core_user_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../models/core/user.model */ "vk+e");
/* harmony import */ var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/confirmation.service */ "fTmd");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/session.service */ "6g7h");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/toastr.service */ "N/y2");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/transaction.service */ "m2Kw");
/* harmony import */ var _transaction_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../transaction/transaction-view/transaction-view.component */ "vOIs");
/* harmony import */ var _transactions_mixins__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../transactions.mixins */ "HiCw");


























let UserTransactionsComponent = class UserTransactionsComponent extends _list_component__WEBPACK_IMPORTED_MODULE_16__["ListComponent"] {
    constructor(http, ngbModal, changeDetector, route, router, session, confirmation, transactionService, toastr, calendar, translate) {
        super(http, ngbModal, changeDetector, route, router, session, confirmation);
        this.transactionService = transactionService;
        this.toastr = toastr;
        this.calendar = calendar;
        this.translate = translate;
        this.statuses = ['pending', 'processing', 'completed', 'cancelled', 'failed'];
        this.methods = ['card', 'crypto', 'internal', 'local', 'swift'];
        this.types = src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].appName === 'sgpmx'
            ? ['card-order', 'trade', 'deposit', 'payment', 'transfer', 'withdrawal']
            : [
                'card-order',
                'conversion',
                'trade',
                'deposit',
                'investment',
                'payment',
                'account-fee',
                'transfer',
                'withdrawal',
            ];
        this.typeMap = {
            'card-order': 'Card Order',
            conversion: 'Conversion',
            trade: 'Buy & Sell',
            deposit: 'Deposit',
            investment: 'Investment',
            'account-fee': 'Account Fee',
            transfer: 'Transfer',
            withdrawal: 'Withdrawal',
            reverse: 'Reverse',
            redeem: 'Redemption',
            mint: 'Mint',
            payment: 'Payment',
            'invoice-p2p': 'Invoice P2P',
            invoice: 'Invoice',
        };
        this.currencies = [];
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].appName;
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].displayName;
        this.transactionsLoading = new Set();
        this.faPlus = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPlus"];
        this.faMinus = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faMinus"];
        this.faCalendarAlt = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCalendarAlt"];
        this.faEllipsisV = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEllipsisV"];
        this.appColor = color__WEBPACK_IMPORTED_MODULE_10__(getComputedStyle(document.body).getPropertyValue('--primary').trim()).lighten(0.1);
        this.min = Math.min;
        this.toStartCase = _common_mixin__WEBPACK_IMPORTED_MODULE_15__["toStartCase"];
        this.calculateFee = _transactions_mixins__WEBPACK_IMPORTED_MODULE_24__["calculateFee"];
        this.calculateDeductableAmount = _transactions_mixins__WEBPACK_IMPORTED_MODULE_24__["calculateDeductableAmount"];
        this.apiQuery = ['amount', 'type', 'method', 'currencyCode', 'status', 'settledAt', 'createdAt'];
        this.defaultLimit = this.limitOpts[1];
        this.model = _models_accounting_transaction_model__WEBPACK_IMPORTED_MODULE_17__["Transaction"];
        this.fromDate = { year: new Date().getFullYear(), month: 1, day: 1 };
        this.toDate = this.calendar.getToday();
        this.http.get('/currencies', { params: { limit: 100 + '' } }).subscribe(response => {
            this.currencies = response.data;
        });
    }
    ngOnInit() {
        super.ngOnInit();
        this.subscriptions.add(this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(params => params.has('transactionId')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["flatMap"])(params => this.http.get(`/transactions/${params.get('transactionId')}`)))
            .subscribe(transaction => {
            const modal = this.viewTransaction(transaction);
            const closeHook = () => this.router.navigate(['/transactions']);
            modal.result.then(closeHook, closeHook);
        }));
    }
    ngAfterViewInit() {
        this.subscriptions.add(this.transactionService.searchEvent.subscribe(() => {
            this.selectSearchInput();
        }));
        this.subscriptions.add(this.route.queryParamMap.subscribe(params => {
            if (params.has('searchFocus')) {
                this.selectSearchInput();
            }
        }));
    }
    selectSearchInput() {
        if (this.searchElement) {
            this.searchElement.nativeElement.focus();
            this.searchElement.nativeElement.select();
        }
    }
    find() {
        return this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["tap"])(user => {
            this.user = new _models_core_user_model__WEBPACK_IMPORTED_MODULE_18__["User"](user);
            this.apiUrl = `/users/${user.id}/transactions`;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["flatMap"])(() => super.find()));
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
            case 'invoice-p2p':
                if (this.isReceiver(transaction)) {
                    return this.translate.instant('common.invoice-to');
                }
                return this.translate.instant('common.invoice-from');
            case 'invoice':
                return this.translate.instant('common.invoice-from');
            default:
                return Object(lodash__WEBPACK_IMPORTED_MODULE_11__["capitalize"])(transaction.type);
        }
    }
    determineSubject(transaction) {
        switch (transaction.type) {
            case 'card-order':
                return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].displayName} <span class="text-muted">/ ${this.translate.instant('common.card')}</span>`;
            case 'account-fee':
                return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].displayName} <span class="text-muted">/ ${this.translate.instant('common.account-fee')}</span>`;
            case 'deposit':
            case 'withdrawal':
                return this.beautifyMethod(transaction);
            case 'payment':
                return src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].displayName;
            case 'invoice-p2p':
                return this.buildAccountHolder(transaction.baseWallet);
            case 'transfer':
                if (transaction.isPlatformTransfer()) {
                    return src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].displayName;
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
                return Object(lodash__WEBPACK_IMPORTED_MODULE_11__["capitalize"])(transaction.method);
        }
    }
    isReceiver(transaction) {
        return (!!transaction.counterWallet &&
            !!transaction.counterWallet.user &&
            !!this.user &&
            transaction.counterWallet.user.id === this.user.id);
    }
    viewTransaction(transaction, options = {}) {
        const modal = this.ngbModal.open(_transaction_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_23__["TransactionViewComponent"], {
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
    markAsPaid(item) {
        if (item.method === 'crypto') {
            this.viewTransaction(item);
            return;
        }
        this.transactionsLoading.add(item.id);
        this.transactionService
            .changeStatus(item.id, 'processing')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
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
                if (result === _services_confirmation_service__WEBPACK_IMPORTED_MODULE_19__["ConfirmationResult"].CONFIRMED) {
                    this.viewTransaction(item, { activeTab: 'attachments' });
                }
            }));
        });
    }
    formatType(type) {
        return type.slice(0, 1).toUpperCase();
    }
    fetchAllocation(transaction) {
        return this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["flatMap"])(user => this.http.get(`/users/${user.id}/allocations`, {
            params: {
                baseTransactionId: transaction.id,
                counterTransactionId: transaction.id,
                q: 'or',
            },
        })));
    }
    fetchConversion(transaction) {
        return this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["flatMap"])(user => this.http.get(`/users/${user.id}/conversions`, {
            params: {
                baseTransactionId: transaction.id,
                counterTransactionId: transaction.id,
                q: 'or',
            },
        })));
    }
    fetchTrade(transaction) {
        return this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["flatMap"])(user => this.http.get(`/users/${user.id}/${src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].appName === 'sgpmx' ? 'trades' : 'spot-trades'}`, {
            params: {
                'filter.baseTransactionId': transaction.id,
                'filter.counterTransactionId': transaction.id,
                'filter.q': 'or',
            },
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(response => response.data));
    }
    downloadReport(fileType) {
        this.subscriptions.add(this.session.userStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["flatMap"])(user => this.session.createSignedUrl(`/users/${user.id}/transactions/statement`)))
            .subscribe(signedUrl => {
            window.open(`${signedUrl}&from=${this.parseNgbdate(this.fromDate)}&to=${this.parseNgbdate(this.toDate)}&type=${fileType}`, '_blank', 'noopener');
        }));
    }
    usdValue(trade) {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a(trade.price).times(trade.quantity).toFixed(2, 1);
    }
    mergeFindEvents() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(super.mergeFindEvents(), this.transactionService.changeEvent);
    }
    parseNgbdate(date) {
        return `${date === null || date === void 0 ? void 0 : date.year}-${date === null || date === void 0 ? void 0 : date.month}-${date === null || date === void 0 ? void 0 : date.day}`;
    }
    mapItem(item) {
        if (item.type === 'investment') {
            item.allocationsStream = this.fetchAllocation(item);
        }
        if (item.type === 'conversion') {
            item.conversionsStream = this.fetchConversion(item);
        }
        if (item.type === 'trade') {
            item.tradeStream = this.fetchTrade(item);
        }
        return new _models_accounting_transaction_model__WEBPACK_IMPORTED_MODULE_17__["Transaction"](item);
    }
    buildAccountHolder(wallet) {
        return `${wallet.user ? `${wallet.user.name}` : this.displayName} <span class="text-muted">/ ${Object(_transactions_mixins__WEBPACK_IMPORTED_MODULE_24__["buildWalletOwnerAccountNumber"])(wallet, src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].appName)}</span>`;
    }
};
UserTransactionsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"] },
    { type: _services_confirmation_service__WEBPACK_IMPORTED_MODULE_19__["ConfirmationService"] },
    { type: _services_transaction_service__WEBPACK_IMPORTED_MODULE_22__["TransactionService"] },
    { type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_21__["ToastrService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCalendar"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
];
UserTransactionsComponent.propDecorators = {
    searchElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['searchElement',] }]
};
UserTransactionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'user-transactions',
        template: _raw_loader_user_transactions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserTransactionsComponent);



/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~transactions-transactions-module~user-redemption-user-redemption-~a37267c0.js.map