(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transactions-transactions-module"],{

/***/ "BV0w":
/*!*************************************************************!*\
  !*** ./src/app/transactions/transactions-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TransactionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsRoutingModule", function() { return TransactionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/logged-in.auth-guard */ "59Zp");
/* harmony import */ var _common_user_transactions_user_transactions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/user-transactions/user-transactions.component */ "LA2D");





const routes = [
    {
        path: '',
        component: _common_user_transactions_user_transactions_component__WEBPACK_IMPORTED_MODULE_4__["UserTransactionsComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]],
    },
    {
        path: ':transactionId',
        component: _common_user_transactions_user_transactions_component__WEBPACK_IMPORTED_MODULE_4__["UserTransactionsComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]],
    },
];
let TransactionsRoutingModule = class TransactionsRoutingModule {
};
TransactionsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransactionsRoutingModule);



/***/ }),

/***/ "ePPo":
/*!*****************************************************!*\
  !*** ./src/app/transactions/transactions.module.ts ***!
  \*****************************************************/
/*! exports provided: TransactionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsModule", function() { return TransactionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common.module */ "a6Df");
/* harmony import */ var _common_user_transactions_user_transactions_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/user-transactions/user-transactions.module */ "Djo4");
/* harmony import */ var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transactions-routing.module */ "BV0w");





let TransactionsModule = class TransactionsModule {
};
TransactionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _transactions_routing_module__WEBPACK_IMPORTED_MODULE_4__["TransactionsRoutingModule"], _common_user_transactions_user_transactions_module__WEBPACK_IMPORTED_MODULE_3__["UserTransactionsModule"]],
    })
], TransactionsModule);



/***/ })

}]);
//# sourceMappingURL=transactions-transactions-module.js.map