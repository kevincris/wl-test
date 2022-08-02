(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~deposit-deposit-module~organization-organization-module~transfer-transfer~3ea4832b"],{

/***/ "FiSU":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/payment/beneficiary-book/beneficiary-book.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ 'common.beneficiary-templates' | translate }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"modal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row no-gutters align-items-center mb-3\">\n        <div class=\"col-lg-7 mb-2 mb-lg-0\">\n            <div class=\"input-group\">\n                <span class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><fa-icon [icon]=\"faSearch\"></fa-icon></span>\n                </span>\n                <input\n                    type=\"text\"\n                    name=\"searchText\"\n                    (ngModelChange)=\"searchEvent.next()\"\n                    [placeholder]=\"'common.search' | translate\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"search\"\n                />\n            </div>\n        </div>\n        <div class=\"col-lg-17 d-flex justify-content-between align-items-center\">\n            <span class=\"ml-lg-3\"\n                >{{ count | number }} {{ (count === 1 ? 'common.entry-found' : 'common.entries-found') | translate | lowercase }}</span\n            >\n            <div class=\"d-flex align-items-center\">\n                <ng-select\n                    class=\"mr-2\"\n                    [(ngModel)]=\"limit\"\n                    dropdownPosition=\"auto\"\n                    (change)=\"select(1)\"\n                    [items]=\"limitOpts\"\n                    [placeholder]=\"'common.show-entries-per-page' | translate\"\n                    [clearable]=\"false\"\n                    [searchable]=\"false\"\n                    required\n                >\n                    <ng-template ng-label-tmp let-item=\"item\">{{ 'common.show-entries' | translate: { value: item } }}</ng-template>\n                    <ng-template ng-option-tmp let-item=\"item\">{{ item }} {{ 'common.entries' | translate }}</ng-template>\n                </ng-select>\n                <ngb-pagination\n                    [(page)]=\"page\"\n                    [collectionSize]=\"count\"\n                    (pageChange)=\"select()\"\n                    [pageSize]=\"limit\"\n                    [maxSize]=\"5\"\n                    [ellipses]=\"false\"\n                    [rotate]=\"true\"\n                    [boundaryLinks]=\"true\"\n                >\n                </ngb-pagination>\n            </div>\n        </div>\n    </div>\n    <div class=\"table-responsive position-relative\">\n        <table class=\"table table-hover table-bordered table-data\">\n            <thead class=\"thead-light\">\n                <tr>\n                    <th scope=\"col\">#</th>\n                    <th scope=\"col\">{{ 'common.template' | translate | lowercase }}</th>\n                    <th scope=\"col\">{{ 'common.actions' | translate }}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <ng-container *ngIf=\"itemsStream | async; let items\">\n                    <tr *ngFor=\"let item of items\" class=\"clickable\" (click)=\"onSelect.emit(item)\">\n                        <th scope=\"row\" [width]=\"'1%'\">\n                            <uuid [value]=\"item.id\"></uuid>\n                        </th>\n                        <td class=\"p-2\">\n                            <div class=\"d-flex w-100 justify-content-between\">\n                                <span\n                                    class=\"text-uppercase label label-xs\"\n                                    [ngClass]=\"{\n                                        'label-primary': item.method === 'swift',\n                                        'label-success': item.method === 'local',\n                                        'label-warning': item.method === 'crypto'\n                                    }\"\n                                >\n                                    {{ item.method }} - {{ item.currency?.code }}\n                                </span>\n                                <small class=\"text-muted\">{{ item.createdAt | date }}</small>\n                            </div>\n                            <div>\n                                {{ item.method === 'crypto' && !item.accountHolder ? ('common.wallet-address' | translate) : item.accountHolder }}\n                            </div>\n                            <span class=\"text-muted\">{{ item.accountNumber }}</span>\n                        </td>\n                        <td class=\"action\">\n                            <button\n                                type=\"button\"\n                                class=\"btn btn-primary-air btn-sm mr-1\"\n                                (click)=\"$event.stopPropagation(); openBeneficiaryForm(item)\"\n                            >\n                                <fa-icon [icon]=\"faPencil\" [fixedWidth]=\"true\"></fa-icon>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-danger-air btn-sm\" (click)=\"$event.stopPropagation(); delete(item)\">\n                                <fa-icon [icon]=\"faTimes\" [fixedWidth]=\"true\"></fa-icon>\n                            </button>\n                        </td>\n                    </tr>\n                    <tr *ngIf=\"items.length === 0\">\n                        <td colspan=\"9\" class=\"text-center\">{{ 'common.no-entries-found' | translate }}</td>\n                    </tr>\n                </ng-container>\n            </tbody>\n        </table>\n        <ng-container *ngIf=\"isFetching | async\">\n            <circle-spinner></circle-spinner>\n        </ng-container>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary btn-w-sm\" (click)=\"openBeneficiaryForm($any({ type: 'template', user: { id: session.user.id } }))\">\n        <fa-icon class=\"mr-1\" [icon]=\"faPlus\"></fa-icon> {{ 'common.new-beneficiary' | translate }}\n    </button>\n</div>\n");

/***/ }),

/***/ "Fpzr":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/payment/email-invite-modal/email-invite-modal.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ 'common.invite-to' | translate }} {{ displayName }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-body my-2\">\n    <div class=\"text-center\">\n        <fa-icon class=\"text-muted\" [icon]=\"faUserAltSlash\" size=\"3x\"></fa-icon>\n        <h4 class=\"my-2\">\n            {{ 'common.do-you-want-to-invite' | translate }} \"{{ email }}\" {{ 'common.to' | translate | lowercase }} {{ displayName }}?\n        </h4>\n    </div>\n    <p class=\"text-muted\">If the recipient registers, this transaction will be processed immediately.</p>\n    <p>Please enter the recipient's name in order for us to address him/her properly.</p>\n    <form #form=\"ngForm\" class=\"form-validation\">\n        <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label font-md\" for=\"name\">{{ 'common.name' | translate }}</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control form-control-lg\"\n                    id=\"name\"\n                    name=\"name\"\n                    [(ngModel)]=\"user.name\"\n                    #name=\"ngModel\"\n                    autocomplete=\"given-name\"\n                    required\n                    emptyToNull\n                />\n                <div *ngIf=\"name.invalid && (form.submitted || name.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"name?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n<div class=\"modal-footer d-flex justify-content-end\">\n    <button class=\"btn btn-default btn-w-sm\" (click)=\"activeModal.dismiss()\">{{ 'common.dont-invite' | translate }}</button>\n    <button class=\"btn btn-success btn-w-sm ml-1\" [disabled]=\"form.invalid\" (click)=\"onInvite.next(user)\">{{ 'common.invite' | translate }}</button>\n</div>\n");

/***/ }),

/***/ "P4TK":
/*!***********************************************************************************!*\
  !*** ./src/app/common/payment/email-invite-modal/email-invite-modal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EmailInviteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailInviteModalComponent", function() { return EmailInviteModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_email_invite_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./email-invite-modal.component.html */ "Fpzr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "uB96");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");







let EmailInviteModalComponent = class EmailInviteModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.onInvite = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.user = {};
        this.faUserAltSlash = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUserAltSlash"];
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].displayName;
    }
};
EmailInviteModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }
];
EmailInviteModalComponent.propDecorators = {
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
EmailInviteModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'email-invite-modal',
        template: _raw_loader_email_invite_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], EmailInviteModalComponent);



/***/ }),

/***/ "oMaD":
/*!*******************************************************************************!*\
  !*** ./src/app/common/payment/beneficiary-book/beneficiary-book.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BeneficiaryBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryBookComponent", function() { return BeneficiaryBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_beneficiary_book_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./beneficiary-book.component.html */ "FiSU");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _beneficiary_form_beneficiary_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../beneficiary-form/beneficiary-form.component */ "2qAm");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../list.component */ "aJRI");
/* harmony import */ var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/confirmation.service */ "fTmd");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/session.service */ "6g7h");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/toastr.service */ "N/y2");














let BeneficiaryBookComponent = class BeneficiaryBookComponent extends _list_component__WEBPACK_IMPORTED_MODULE_10__["ListComponent"] {
    constructor(http, ngbModal, changeDetector, route, router, session, confirmation, modal, toastr, translate) {
        super(http, ngbModal, changeDetector, route, router, session, confirmation);
        this.modal = modal;
        this.toastr = toastr;
        this.translate = translate;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.defaultLimit = 5;
        this.isLoading = false;
        this.isSaving = false;
        this.isDeleting = false;
        this.faTimes = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"];
        this.faPencil = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPencil"];
    }
    ngOnInit() {
        this.apiUrl = `/users/${this.session.user.id}/beneficiaries`;
        this.queryParams = {
            type: {
                eq: 'template',
            },
        };
        super.ngOnInit();
    }
    openBeneficiaryForm(beneficiary) {
        const modal = this.ngbModal.open(_beneficiary_form_beneficiary_form_component__WEBPACK_IMPORTED_MODULE_9__["BeneficiaryFormComponent"], {
            backdrop: 'static',
            windowClass: 'modal-primary',
        });
        const form = modal.componentInstance;
        form.compact = true;
        form.item = beneficiary;
        // Only display methods that are applicable to the user
        form.beneficiaryMethods = [];
        if (this.session.user.hasPermission('payment-swift')) {
            form.beneficiaryMethods.push('swift');
        }
        if (this.session.user.hasPermission('payment-local')) {
            form.beneficiaryMethods.push('local');
        }
        if (this.session.user.hasPermission('payment-crypto')) {
            form.beneficiaryMethods.push('crypto');
        }
        form.onSave.subscribe(() => {
            modal.close();
            this.updateEvent.next();
        });
        form.onDelete.subscribe(() => {
            modal.close();
            this.updateEvent.next();
        });
    }
    delete(beneficiary) {
        this.confirmation
            .show({
            type: 'danger',
            text: `${this.translate.instant('common.are-you-sure-want-to-delete-beneficiary')}<br>${this.translate.instant('common.you-cant-undo-action')}`,
            confirmText: this.translate.instant('common.delete'),
            confirmClass: 'danger',
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(result => result === _services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmationResult"].CONFIRMED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(() => {
            this.isDeleting = true;
            return this.http.delete(`/beneficiaries/${beneficiary.id}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.isDeleting = false;
        }))
            .subscribe(() => {
            this.toastr.success(this.translate.instant('common.beneficiary-deleted'));
            this.updateEvent.next();
        });
    }
    changeState() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // do nothing
        });
    }
};
BeneficiaryBookComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_12__["SessionService"] },
    { type: _services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmationService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] },
    { type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_13__["ToastrService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
BeneficiaryBookComponent.propDecorators = {
    onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
BeneficiaryBookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'beneficiary-book',
        template: _raw_loader_beneficiary_book_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BeneficiaryBookComponent);



/***/ }),

/***/ "qIFn":
/*!**************************************************!*\
  !*** ./src/app/common/payment/payment.module.ts ***!
  \**************************************************/
/*! exports provided: PaymentFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentFormModule", function() { return PaymentFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.module */ "a6Df");
/* harmony import */ var _transaction_transaction_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transaction/transaction.module */ "SRhG");
/* harmony import */ var _beneficiary_book_beneficiary_book_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beneficiary-book/beneficiary-book.component */ "oMaD");
/* harmony import */ var _email_invite_modal_email_invite_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-invite-modal/email-invite-modal.component */ "P4TK");
/* harmony import */ var _payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-confirmation/payment-confirmation.component */ "n93W");







let PaymentFormModule = class PaymentFormModule {
};
PaymentFormModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_6__["PaymentConfirmationComponent"], _email_invite_modal_email_invite_modal_component__WEBPACK_IMPORTED_MODULE_5__["EmailInviteModalComponent"], _beneficiary_book_beneficiary_book_component__WEBPACK_IMPORTED_MODULE_4__["BeneficiaryBookComponent"]],
        exports: [_beneficiary_book_beneficiary_book_component__WEBPACK_IMPORTED_MODULE_4__["BeneficiaryBookComponent"]],
        imports: [_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _transaction_transaction_module__WEBPACK_IMPORTED_MODULE_3__["TransactionModule"]],
    })
], PaymentFormModule);



/***/ })

}]);
//# sourceMappingURL=default~admin-admin-module~deposit-deposit-module~organization-organization-module~transfer-transfer~3ea4832b.js.map