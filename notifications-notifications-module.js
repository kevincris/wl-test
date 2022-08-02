(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "4G6T":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notifications.component.html */ "FTXL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/list.component */ "aJRI");
/* harmony import */ var _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/services/confirmation.service */ "fTmd");
/* harmony import */ var _common_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/notifications.service */ "A3TI");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");











let NotificationsComponent = class NotificationsComponent extends _common_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"] {
    constructor(http, ngbModal, changeDetector, route, router, session, confirmation, notificationsService) {
        super(http, ngbModal, changeDetector, route, router, session, confirmation);
        this.notificationsService = notificationsService;
        this.min = Math.min;
        this.limit = 10;
        this.defaultLimit = 10;
    }
    find() {
        return this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(user => {
            this.apiUrl = `/users/${user.id}/notifications`;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(() => super.find()));
    }
    markAllAsRead() {
        this.subscriptions.add(this.session.userStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(user => this.http.post(`/users/${user.id}/notifications`, {
            id: Math.floor(Math.random() * 10000),
            jsonrpc: '2.0',
            method: 'markAllAsRead',
        }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json-rpc' }),
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(() => this.find()))
            .subscribe(() => {
            this.notificationsService.notifyEvent.next();
        }));
    }
    goto(notification) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (notification.invoice) {
                yield this.router.navigate(['/services/invoices', notification.invoice.id]);
            }
            else if (notification.transaction) {
                yield this.router.navigate(['/transactions', notification.transaction.id]);
            }
            else if (notification.conversion) {
                yield this.router.navigate(['/services/conversions', notification.conversion.id]);
            }
            else {
                yield this.router.navigate(['/protocol']);
            }
        });
    }
};
NotificationsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] },
    { type: _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"] },
    { type: _common_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"] }
];
NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'notifications',
        template: _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], NotificationsComponent);



/***/ }),

/***/ "59Zp":
/*!************************************************!*\
  !*** ./src/app/common/logged-in.auth-guard.ts ***!
  \************************************************/
/*! exports provided: LoggedInAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInAuthGuard", function() { return LoggedInAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/session.service */ "6g7h");




let LoggedInAuthGuard = class LoggedInAuthGuard {
    constructor(session, router) {
        this.session = session;
        this.router = router;
    }
    canActivate(_, state) {
        if (!this.session.isAuthenticated()) {
            return this.router.parseUrl('/login?redirect=' + state.url);
        }
        return true;
    }
};
LoggedInAuthGuard.ctorParameters = () => [
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoggedInAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], LoggedInAuthGuard);



/***/ }),

/***/ "FTXL":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!router.isActive('/dashboard', false)\">\n    <div class=\"container pt-page\">\n        <div class=\"row justify-content-between align-items-center pb-2\">\n            <div class=\"col-auto\">\n                <h5 class=\"mb-0\">{{ 'common.notifications' | translate }}</h5>\n            </div>\n            <div class=\"col-auto d-flex justify-content-end\">\n                <ol class=\"breadcrumb px-0\">\n                    <li class=\"breadcrumb-item\">\n                        <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">{{ 'common.notifications' | translate }}</li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</ng-container>\n<section class=\"container e2e-notifications mb-3\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"d-flex justify-content-end align-items-center mb-2\">\n                <div class=\"d-flex align-items-center\">\n                    <a href class=\"btn btn-secondary-air\" (click)=\"markAllAsRead(); $event.preventDefault()\">{{\n                        'common.mark-all-as-read' | translate\n                    }}</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table table-hover align-items-center table-borderless\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">{{ 'common.description' | translate }}</th>\n                    <th scope=\"col\" class=\"table-col-sm\">{{ 'common.created-at' | translate | titlecase }}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr\n                    *ngFor=\"let notification of itemsStream | async\"\n                    class=\"clickable bg-white e2e-notification\"\n                    [ngClass]=\"'has-' + notification.severity\"\n                >\n                    <th scope=\"row\" (click)=\"goto(notification)\">\n                        <span class=\"badge mr-1\" [ngClass]=\"'badge-' + notification.severity\" *ngIf=\"!notification.read\">{{\n                            'common.new' | translate\n                        }}</span>\n                        <notification [notification]=\"notification\"></notification>\n                    </th>\n                    <td>\n                        {{ notification.createdAt | date: 'medium' }}\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <footer class=\"table-footer\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-8\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <ng-select\n                            [(ngModel)]=\"limit\"\n                            dropdownPosition=\"auto\"\n                            (change)=\"select(1)\"\n                            [items]=\"limitOpts\"\n                            [placeholder]=\"'common.show-entries-per-page' | translate\"\n                            [clearable]=\"false\"\n                            [searchable]=\"false\"\n                            required\n                        >\n                            <ng-template ng-label-tmp let-item=\"item\"\n                                >{{ 'common.show' | translate }} {{ item }} {{ 'common.per-page' | translate }}</ng-template\n                            >\n                            <ng-template ng-option-tmp let-item=\"item\">{{ item }} {{ 'common.entries' | translate }}</ng-template>\n                        </ng-select>\n                    </div>\n                    <div class=\"col-12 d-flex align-items-center\">\n                        <span class=\"text-muted text-small\">Showing {{ offset + 1 }} - {{ min(offset + limit, count) }} of {{ count }}</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-12 col-md-16 d-flex justify-content-end\">\n                <ngb-pagination\n                    [(page)]=\"page\"\n                    [collectionSize]=\"count\"\n                    (pageChange)=\"select()\"\n                    [pageSize]=\"limit\"\n                    [maxSize]=\"4\"\n                    [rotate]=\"false\"\n                    [boundaryLinks]=\"true\"\n                >\n                </ngb-pagination>\n            </div>\n        </div>\n    </footer>\n</section>\n");

/***/ }),

/***/ "cxoL":
/*!***************************************************************!*\
  !*** ./src/app/notifications/notifications-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NotificationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function() { return NotificationsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/logged-in.auth-guard */ "59Zp");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications.component */ "4G6T");





const routes = [
    {
        path: '',
        component: _notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]],
    },
];
let NotificationsRoutingModule = class NotificationsRoutingModule {
};
NotificationsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationsRoutingModule);



/***/ }),

/***/ "wMrW":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common.module */ "a6Df");
/* harmony import */ var _common_notification_notification_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/notification/notification.module */ "niQX");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications-routing.module */ "cxoL");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications.component */ "4G6T");






let NotificationsModule = class NotificationsModule {
};
NotificationsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _common_notification_notification_module__WEBPACK_IMPORTED_MODULE_3__["NotificationModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_4__["NotificationsRoutingModule"]],
    })
], NotificationsModule);



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module.js.map