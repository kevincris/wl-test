(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~organization-organization-module"],{

/***/ "Cid0":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/user-form-modal/user-form-modal.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    #form=\"ngForm\"\n    class=\"form-validation e2e-user-form-modal\"\n    [ngClass]=\"{ 'ng-submitted': form.submitted }\"\n    (ngSubmit)=\"submit()\"\n    autocomplete=\"false\"\n    novalidate\n>\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{ 'common.create-user' | translate }}</h5>\n        <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n                <div class=\"custom-control custom-radio\">\n                    <input\n                        type=\"radio\"\n                        id=\"typePersonal\"\n                        name=\"type\"\n                        value=\"personal\"\n                        class=\"custom-control-input\"\n                        [(ngModel)]=\"type\"\n                        (change)=\"onTypeChange()\"\n                    />\n                    <label class=\"custom-control-label font-md\" for=\"typePersonal\">{{ 'common.personal-account' | translate }}</label>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12\">\n                <div class=\"custom-control custom-radio\">\n                    <input\n                        type=\"radio\"\n                        id=\"typeCorporate\"\n                        name=\"type\"\n                        value=\"business\"\n                        class=\"custom-control-input\"\n                        [(ngModel)]=\"type\"\n                        (change)=\"onTypeChange()\"\n                    />\n                    <label class=\"custom-control-label font-md\" for=\"typeCorporate\">{{ 'common.corporate-account' | translate }}</label>\n                </div>\n            </div>\n        </div>\n        <ng-container *ngIf=\"type === 'business'\">\n            <div class=\"row\">\n                <div class=\"form-group col\">\n                    <label class=\"form-control-label\" for=\"name\">{{ 'common.entity-name' | translate }}</label>\n                    <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"name\"\n                        name=\"name\"\n                        [(ngModel)]=\"business.name\"\n                        #name=\"ngModel\"\n                        autocomplete=\"given-name\"\n                        required\n                        emptyToNull\n                    />\n                    <div *ngIf=\"name.invalid && (form.submitted || name.dirty)\" class=\"error-messages\">\n                        <div class=\"form-control-feedback\" *ngIf=\"name?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n        <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"name\">{{ 'common.first-name' | translate | sentenceCase }}</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"firstName\"\n                    name=\"firstName\"\n                    [(ngModel)]=\"details.firstName\"\n                    #firstName=\"ngModel\"\n                    autocomplete=\"given-name\"\n                    required\n                    emptyToNull\n                />\n                <div *ngIf=\"firstName.invalid && (form.submitted || firstName.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"firstName?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"name\">{{ 'common.last-name' | translate | sentenceCase }}</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"lastName\"\n                    name=\"lastName\"\n                    [(ngModel)]=\"details.lastName\"\n                    #lastName=\"ngModel\"\n                    autocomplete=\"family-name\"\n                    required\n                    emptyToNull\n                />\n                <div *ngIf=\"lastName.invalid && (form.submitted || lastName.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"lastName?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"birthday\">{{ 'common.birthday' | translate }}</label>\n                <input\n                    class=\"form-control\"\n                    type=\"text\"\n                    id=\"birthday\"\n                    name=\"birthday\"\n                    [(ngModel)]=\"details.birthday\"\n                    mask=\"00/00/0000\"\n                    #birthdayField=\"ngModel\"\n                    autocomplete=\"bday\"\n                    required\n                    birthdayValidator\n                />\n                <small class=\"form-text text-muted\">{{ 'common.format' | translate }}: dd/mm/yyyy</small>\n                <div *ngIf=\"birthdayField.invalid && birthdayField.dirty\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"birthdayField?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"birthdayField?.errors?.invalidDate\">{{ 'common.invalid-date' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"birthdayField?.errors?.dateLongAgo\">{{ 'common.date-should-be-1900' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"birthdayField?.errors?.dateInFuture\">{{ 'common.you-should-18' | translate }}</div>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"nationality\">{{ 'common.nationality' | translate }}</label>\n                <ng-select\n                    id=\"nationality\"\n                    name=\"nationality\"\n                    [(ngModel)]=\"details.nationality\"\n                    bindLabel=\"name\"\n                    bindValue=\"alpha2\"\n                    [items]=\"countriesSortedByName\"\n                    [clearable]=\"false\"\n                    #nationality=\"ngModel\"\n                    autocomplete=\"false\"\n                    aria-autocomplete=\"false\"\n                    required\n                ></ng-select>\n                <div *ngIf=\"nationality.invalid && nationality.dirty\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"nationality?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n                <label class=\"font-md\" for=\"email\">{{ 'common.email' | translate }}</label>\n                <input\n                    type=\"email\"\n                    id=\"email\"\n                    name=\"email\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"item.email\"\n                    autocomplete=\"email\"\n                    #email=\"ngModel\"\n                    required\n                    email\n                />\n                <div *ngIf=\"email.invalid && (form.submitted || email.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"email?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"email?.errors?.email\">{{ 'common.not-a-valid-email-address' | translate }}</div>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12\">\n                <label class=\"font-md\" for=\"password\">{{ 'common.password' | translate }}</label>\n                <input\n                    type=\"password\"\n                    id=\"password\"\n                    name=\"password\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"item.password\"\n                    minlength=\"8\"\n                    autocomplete=\"new-password\"\n                    #password=\"ngModel\"\n                    required\n                />\n                <small class=\"form-text text-muted\">{{ 'common.min-length-8-char' | translate }}</small>\n                <div *ngIf=\"password.invalid && (form.submitted || password.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"password?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"password?.errors?.minlength\">{{ 'common.password-too-short' | translate }}</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-primary btn-w-sm\" [ngClass]=\"{ loading: isSaving }\" [disabled]=\"isSaving\">\n            {{ 'common.create' | translate }}\n        </button>\n    </div>\n</form>\n");

/***/ }),

/***/ "RYhL":
/*!**************************************************************************!*\
  !*** ./src/app/admin/users/user-form-modal/user-form-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserFormModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormModalComponent", function() { return UserFormModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_form_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-form-modal.component.html */ "Cid0");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_common_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/common.mixin */ "s/H0");
/* harmony import */ var _common_countries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/countries */ "Gq6/");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/services/toastr.service */ "N/y2");












let UserFormModalComponent = class UserFormModalComponent {
    constructor(http, activeModal, toastr, router, translate) {
        this.http = http;
        this.activeModal = activeModal;
        this.toastr = toastr;
        this.router = router;
        this.translate = translate;
        this.type = 'personal';
        this.details = {
            firstName: '',
            lastName: '',
            birthday: '',
            nationality: '',
        };
        this.business = {
            name: '',
        };
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isSaving = false;
        this.countries = _common_countries__WEBPACK_IMPORTED_MODULE_10__["countries"];
        this.countriesSortedByName = _common_countries__WEBPACK_IMPORTED_MODULE_10__["countriesSortedByName"];
    }
    submit() {
        if (!this.form.valid) {
            this.toastr.error(this.translate.instant('common.form-invalid'));
            return;
        }
        this.isSaving = true;
        const body = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["pick"])(this.item, ['email', 'password']);
        this.http
            .post(`/users`, Object.assign(Object.assign({}, body), { type: this.type, details: Object(_common_common_mixin__WEBPACK_IMPORTED_MODULE_9__["deepOmitEmptyProperties"])(Object.assign(Object.assign({}, this.details), { birthday: this.details.birthday ? Object(_common_common_mixin__WEBPACK_IMPORTED_MODULE_9__["convertToISODate"])(this.details.birthday) : undefined, business: {
                    name: this.business.name,
                } })) }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.isSaving = false;
        }))
            .subscribe(user => {
            this.activeModal.close();
            return this.router.navigate(['/admin/accounts/users', user.id]);
        });
    }
    onTypeChange() {
        this.details = {
            firstName: '',
            lastName: '',
            birthday: '',
            nationality: '',
        };
        this.business = {
            name: '',
        };
    }
};
UserFormModalComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] },
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
UserFormModalComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onSave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['form',] }]
};
UserFormModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'user-form-modal',
        template: _raw_loader_user_form_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserFormModalComponent);



/***/ })

}]);
//# sourceMappingURL=default~admin-admin-module~organization-organization-module.js.map