(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"],{

/***/ "+i1G":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"registration-page fullscreen-bg-body e2e-registration-page\">\n    <div class=\"registration-box\">\n        <a [routerLink]=\"['/']\">\n            <img class=\"registration-logo\" [src]=\"getLogo()\" />\n        </a>\n        <div class=\"card shadow b-a-0\">\n            <div class=\"card-body\">\n                <img src=\"/img/icons/wallet.svg\" draggable=\"false\" class=\"float-right\" />\n                <h2 class=\"text-primary mb-1\">{{ 'common.sign-up' | translate }}</h2>\n                <p class=\"text-custom\">{{ 'common.create-your-account' | translate: { value: displayName } }}</p>\n                <p class=\"callout callout-info mb-3 text-gray\" *ngIf=\"referrerId\">\n                    {{ 'common.you-have-been-invited-by' | translate }}\n                    <span class=\"text-primary\" *ngIf=\"referrer; else loading\">{{ referrer.user.name }}</span>\n                </p>\n                <div *ngIf=\"isRegistrationDisabled\" class=\"callout callout-warning text-warning\">\n                    {{ 'common.registration-disabled' | translate }}\n                </div>\n                <alert-outlet></alert-outlet>\n                <div class=\"callout callout-danger mt-0\" *ngIf=\"appName !== 'sgpmx' && user.type === 'business'\">\n                    <p class=\"mb-0\">{{ 'common.please-note-that' | translate }} <b>500 USD</b> {{ 'common.is-charged' | translate }}</p>\n                </div>\n                <form\n                    #registrationForm=\"ngForm\"\n                    class=\"form-validation\"\n                    (ngSubmit)=\"submit()\"\n                    [ngClass]=\"{ 'ng-submitted': registrationForm.submitted }\"\n                    novalidate\n                >\n                    <div class=\"row\">\n                        <div class=\"form-group col-sm-12\">\n                            <div class=\"custom-control custom-radio\">\n                                <input\n                                    type=\"radio\"\n                                    id=\"typePersonal\"\n                                    name=\"type\"\n                                    value=\"personal\"\n                                    class=\"custom-control-input\"\n                                    [(ngModel)]=\"user.type\"\n                                />\n                                <label class=\"custom-control-label font-md\" for=\"typePersonal\">{{ 'common.personal-account' | translate }}</label>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-sm-12\">\n                            <div class=\"custom-control custom-radio\">\n                                <input\n                                    type=\"radio\"\n                                    id=\"typeCorporate\"\n                                    name=\"type\"\n                                    value=\"business\"\n                                    class=\"custom-control-input\"\n                                    [(ngModel)]=\"user.type\"\n                                />\n                                <label class=\"custom-control-label font-md\" for=\"typeCorporate\">{{ 'common.corporate-account' | translate }}</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"user.type === 'business'\">\n                        <label class=\"font-md\" for=\"companyName\">{{ 'common.entity-name' | translate }}</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control form-control-lg\"\n                            id=\"companyName\"\n                            name=\"companyName\"\n                            [(ngModel)]=\"business.name\"\n                            autocomplete=\"organization\"\n                            #companyName=\"ngModel\"\n                            required\n                        />\n                        <div *ngIf=\"companyName.invalid && (registrationForm.submitted || companyName.dirty)\" class=\"error-messages\">\n                            <div class=\"form-control-feedback\" *ngIf=\"companyName?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-sm-12\">\n                            <label class=\"font-md\" for=\"firstName\">{{ 'common.first-name' | translate }}</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-lg\"\n                                id=\"firstName\"\n                                name=\"firstName\"\n                                [(ngModel)]=\"details.firstName\"\n                                autocomplete=\"given-name\"\n                                #firstName=\"ngModel\"\n                                required\n                                nameValidator\n                            />\n                            <div *ngIf=\"firstName.invalid && (registrationForm.submitted || firstName.dirty)\" class=\"error-messages\">\n                                <div class=\"form-control-feedback\" *ngIf=\"firstName?.errors?.required\">\n                                    {{ 'common.this-is-required' | translate }}\n                                </div>\n                                <div class=\"form-control-feedback\" *ngIf=\"firstName?.errors?.nameError\">\n                                    {{ 'common.only-alphabets-are-allowed' | translate }}\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-sm-12\">\n                            <label class=\"font-md\" for=\"lastName\">{{ 'common.last-name' | translate }}</label>\n                            <input\n                                type=\"text\"\n                                class=\"form-control form-control-lg\"\n                                id=\"lastName\"\n                                name=\"lastName\"\n                                [(ngModel)]=\"details.lastName\"\n                                autocomplete=\"family-name\"\n                                #lastName=\"ngModel\"\n                                required\n                                nameValidator\n                            />\n                            <div *ngIf=\"lastName.invalid && (registrationForm.submitted || lastName.dirty)\" class=\"error-messages\">\n                                <div class=\"form-control-feedback\" *ngIf=\"lastName?.errors?.required\">\n                                    {{ 'common.this-is-required' | translate }}\n                                </div>\n                                <div class=\"form-control-feedback\" *ngIf=\"lastName?.errors?.nameError\">\n                                    {{ 'common.only-alphabets-are-allowed' | translate }}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"font-md\" for=\"email\">{{ 'common.email' | translate }}</label>\n                        <input\n                            type=\"email\"\n                            id=\"email\"\n                            name=\"email\"\n                            class=\"form-control form-control-lg\"\n                            [(ngModel)]=\"user.email\"\n                            [disabled]=\"isInvitation\"\n                            autocomplete=\"email\"\n                            #email=\"ngModel\"\n                            email\n                            required\n                        />\n                        <div *ngIf=\"email.invalid && (registrationForm.submitted || email.dirty)\" class=\"error-messages\">\n                            <div class=\"form-control-feedback\" *ngIf=\"email?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                            <div class=\"form-control-feedback\" *ngIf=\"email?.errors?.email\">{{ 'common.not-a-valid-email-address' | translate }}</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"font-md\" for=\"password\">{{ 'common.password' | translate }}</label>\n                        <input\n                            type=\"password\"\n                            id=\"password\"\n                            name=\"password\"\n                            class=\"form-control form-control-lg\"\n                            [(ngModel)]=\"user.password\"\n                            [passwordStrength]=\"requiredPasswordStrength\"\n                            (onEntropyChange)=\"passwordStrength = $event\"\n                            autocomplete=\"new-password\"\n                            #password=\"ngModel\"\n                            required\n                        />\n                        <div class=\"mt-2\">\n                            <password-strength-bar\n                                [requiredStrength]=\"requiredPasswordStrength\"\n                                [strength]=\"passwordStrength\"\n                            ></password-strength-bar>\n                        </div>\n                        <div *ngIf=\"password.invalid && (registrationForm.submitted || password.dirty)\" class=\"error-messages\">\n                            <div class=\"form-control-feedback\" *ngIf=\"password?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                            <div class=\"form-control-feedback\" *ngIf=\"password?.errors?.weakPassword\">\n                                {{ 'common.this-is-required' | translate }}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-sm-12\">\n                            <label class=\"form-control-label font-md\" for=\"birthday\">{{ 'common.birthday' | translate }}</label>\n                            <input\n                                class=\"form-control form-control-lg\"\n                                type=\"text\"\n                                id=\"birthday\"\n                                name=\"birthday\"\n                                [(ngModel)]=\"birthday\"\n                                mask=\"00/00/0000\"\n                                #birthdayField=\"ngModel\"\n                                required\n                                birthdayValidator\n                            />\n                            <small class=\"form-text text-muted\">{{ 'common.format' | translate }}: dd/mm/yyyy</small>\n                            <div *ngIf=\"birthdayField.invalid && (registrationForm.submitted || birthdayField.dirty)\" class=\"error-messages\">\n                                <div class=\"form-control-feedback\" *ngIf=\"birthdayField?.errors?.required\">\n                                    {{ 'common.this-is-required' | translate }}\n                                </div>\n                                <div class=\"form-control-feedback\" *ngIf=\"birthdayField?.errors?.invalidDate\">\n                                    {{ 'common.invalid-date' | translate }}\n                                </div>\n                                <div class=\"form-control-feedback\" *ngIf=\"birthdayField?.errors?.dateLongAgo\">\n                                    {{ 'common.date-should-be-1900' | translate }}\n                                </div>\n                                <div class=\"form-control-feedback\" *ngIf=\"birthdayField?.errors?.dateInFuture\">\n                                    {{ 'common.you-should-18' | translate }}\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-sm-12\">\n                            <label class=\"form-control-label font-md\" for=\"nationality\">{{ 'common.nationality' | translate }}</label>\n                            <ng-select\n                                class=\"ng-select-lg\"\n                                id=\"nationality\"\n                                name=\"nationality\"\n                                [(ngModel)]=\"details.nationality\"\n                                bindLabel=\"name\"\n                                bindValue=\"alpha2\"\n                                [items]=\"countriesSortedByName\"\n                                [clearable]=\"false\"\n                                [virtualScroll]=\"true\"\n                                #nationality=\"ngModel\"\n                                autocomplete=\"false\"\n                                aria-autocomplete=\"false\"\n                                required\n                            >\n                                <ng-template ng-label-tmp let-item=\"item\">{{ item.emoji }} {{ item.name }}</ng-template>\n                                <ng-template ng-option-tmp let-item=\"item\" let-search=\"searchTerm\"\n                                    >{{ item.emoji }} <span [ngOptionHighlight]=\"search\">{{ item.name }}</span></ng-template\n                                >\n                            </ng-select>\n                            <div *ngIf=\"nationality.invalid && (registrationForm.submitted || nationality.dirty)\" class=\"error-messages\">\n                                <div class=\"form-control-feedback\" *ngIf=\"nationality?.errors?.required\">\n                                    {{ 'common.this-is-required' | translate }}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"!referrerId\">\n                        <div class=\"form-group col\">\n                            <label class=\"font-md\" for=\"referral\">{{ 'registration.did-someone-refer-you' | translate }}</label>\n                            <ng-select\n                                class=\"ng-select-lg\"\n                                name=\"referredBy\"\n                                id=\"referredBy\"\n                                [placeholder]=\"'registration.no-one-referred-me' | translate\"\n                                [(ngModel)]=\"details.referredBy\"\n                                [items]=\"referredByOptions\"\n                                [clearable]=\"true\"\n                                dropdownPosition=\"bottom\"\n                                #referredByInput=\"ngModel\"\n                            >\n                                <ng-template ng-label-tmp let-item=\"item\">\n                                    {{ item }}\n                                </ng-template>\n                                <ng-template ng-option-tmp let-item=\"item\">\n                                    {{ item }}\n                                </ng-template>\n                            </ng-select>\n                        </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"details.referredBy === 'Other'\">\n                        <div class=\"form-group col\">\n                            <label class=\"font-md\" for=\"customReferredBy\">{{ 'common.please-specify' | translate }}</label>\n                            <input\n                                class=\"form-control form-control-lg\"\n                                type=\"text\"\n                                id=\"customReferredBy\"\n                                name=\"customReferredBy\"\n                                [(ngModel)]=\"customReferredBy\"\n                                #customReferredByInput=\"ngModel\"\n                                required\n                            />\n                            <div\n                                *ngIf=\"customReferredByInput.invalid && (registrationForm.submitted || customReferredByInput.dirty)\"\n                                class=\"error-messages\"\n                            >\n                                <div class=\"form-control-feedback\" *ngIf=\"customReferredByInput?.errors?.required\">\n                                    {{ 'common.this-is-required' | translate }}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"custom-control custom-checkbox\">\n                            <input\n                                type=\"checkbox\"\n                                class=\"custom-control-input\"\n                                name=\"terms\"\n                                [(ngModel)]=\"termsAccepted\"\n                                #termsCheckbox=\"ngModel\"\n                                (ngModelChange)=\"onAcceptTerms($event, termsCheckbox)\"\n                            />\n                            <span class=\"custom-control-label font-md\"\n                                >{{ 'common.i-have-read' | translate }}\n                                <a href (click)=\"$event.stopPropagation(); openTermsModal(); $event.preventDefault()\">{{\n                                    'common.terms-and-conditions' | translate\n                                }}</a></span\n                            >\n                        </label>\n                    </div>\n                    <button\n                        type=\"submit\"\n                        class=\"btn btn-primary btn-lg btn-block mb-1\"\n                        [ngClass]=\"{ loading: isLoading }\"\n                        [disabled]=\"isLoading || isRegistrationDisabled\"\n                    >\n                        {{ (user.id ? 'common.open' : 'common.create') | translate }} {{ 'common.account' | translate | lowercase }}\n                    </button>\n                </form>\n                <ng-template #loading>\n                    <svg class=\"spinner spinner-inline spinner-dark\" viewBox=\"0 0 50 50\">\n                        <circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\"></circle>\n                    </svg>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n    <p class=\"text-center\">\n        <a class=\"text-white\" [routerLink]=\"['/login']\">{{ 'common.already-have-account' | translate }}</a>\n    </p>\n</div>\n");

/***/ }),

/***/ "2h9V":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/terms-modal/term-fees/term-fees.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container h-100\">\n    <div class=\"row justify-content-end\">\n        <div class=\"col-sm-24\">\n            <currency-select-tab\n                *ngIf=\"currency\"\n                [(currency)]=\"currency\"\n                (currencyChange)=\"onCurrencyChange()\"\n                [user]=\"session.user\"\n                [useShortCurrencyNames]=\"true\"\n                [moreButtonOptions]=\"{ text: 'Others', hasCaret: true }\"\n                #currencySelect\n            ></currency-select-tab>\n        </div>\n    </div>\n    <div class=\"row mt-2\" *ngIf=\"!isLoading; else loader\">\n        <div class=\"col\">\n            <table class=\"table table-borderless table-striped mb-0\">\n                <tbody>\n                    <ng-container *ngIf=\"currency && ['fiat', 'crypto'].includes(currency.type)\">\n                        <ng-container *ngIf=\"currency.code === 'USD'\">\n                            <tr>\n                                <td class=\"font-weight-bold\">{{ 'common.monthly-account-fee' | translate }}</td>\n                                <td class=\"text-right\">\n                                    <ng-container *ngIf=\"getFee('account-fee', 'internal'); else noFee; let fee\">\n                                        <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                    </ng-container>\n                                </td>\n                            </tr>\n                        </ng-container>\n                        <ng-container *ngIf=\"getFee('gst', 'internal'); let fee\">\n                            <tr>\n                                <td class=\"font-weight-bold\">GST</td>\n                                <td class=\"text-right\">\n                                    <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                </td>\n                            </tr>\n                        </ng-container>\n                    </ng-container>\n                    <tr *ngIf=\"currency?.type !== 'metal'\">\n                        <td class=\"font-weight-bold\">{{ 'common.internal-transfer' | translate }}</td>\n                        <td class=\"text-right\">\n                            <ng-container *ngIf=\"getFee('transfer', 'internal'); else noFee; let fee\">\n                                <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                            </ng-container>\n                        </td>\n                    </tr>\n                    <ng-container *ngIf=\"currency?.type === 'fiat'\">\n                        <tr>\n                            <td class=\"font-weight-bold\">{{ 'common.deposit-via' | translate }} SWIFT</td>\n                            <td class=\"text-right\">\n                                <ng-container *ngIf=\"getFee('deposit', 'swift'); else noFee; let fee\">\n                                    <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                </ng-container>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"font-weight-bold\">{{ 'common.withdrawal-via' | translate }} SWIFT</td>\n                            <td class=\"text-right\">\n                                <ng-container *ngIf=\"getFee('withdrawal', 'swift'); else noFee; let fee\">\n                                    <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                </ng-container>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"font-weight-bold\">{{ 'common.deposit-via' | translate }} {{ 'common.local' | translate | titlecase }}</td>\n                            <td class=\"text-right\">\n                                <ng-container *ngIf=\"getFee('deposit', 'local'); else noFee; let fee\">\n                                    <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                </ng-container>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"font-weight-bold\">{{ 'common.withdrawal-via' | translate }} {{ 'common.local' | translate | titlecase }}</td>\n                            <td class=\"text-right\">\n                                <ng-container *ngIf=\"getFee('withdrawal', 'local'); else noFee; let fee\">\n                                    <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                </ng-container>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"font-weight-bold\">{{ 'common.card-topup' | translate }}</td>\n                            <td class=\"text-right\">\n                                <ng-container *ngIf=\"getFee('withdrawal', 'card'); else noFee; let fee\">\n                                    <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                </ng-container>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"font-weight-bold\">{{ 'common.card-unload' | translate }}</td>\n                            <td class=\"text-right\">\n                                <ng-container *ngIf=\"getFee('deposit', 'card'); else noFee; let fee\">\n                                    <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                </ng-container>\n                            </td>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"currency?.type === 'crypto'\">\n                        <tr>\n                            <td class=\"font-weight-bold\">{{ 'common.deposit' | translate }}</td>\n                            <td class=\"text-right\">\n                                <ng-container *ngIf=\"getFee('deposit', 'crypto'); else noFee; let fee\">\n                                    <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                </ng-container>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"font-weight-bold\">{{ 'common.withdrawal' | translate }}</td>\n                            <td class=\"text-right\">\n                                <ng-container *ngIf=\"getFee('withdrawal', 'crypto'); else noFee; let fee\">\n                                    <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                </ng-container>\n                            </td>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"currency?.type === 'metal'\">\n                        <tr>\n                            <td class=\"font-weight-bold\">{{ 'common.buy' | translate }} &amp; {{ 'common.sell' | translate }}</td>\n                            <td class=\"text-right\">\n                                <ng-container *ngIf=\"getFee('service', 'internal'); else noFee; let fee\">\n                                    <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                </ng-container>\n                            </td>\n                        </tr>\n                    </ng-container>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n\n<ng-template #loader>\n    <div class=\"d-flex align-items-center justify-content-center term-fees-loader\">{{ 'common.loading-fees' | translate }}...</div>\n</ng-template>\n<ng-template #noFee>\n    <span class=\"text-success\">{{ 'common.free' | translate | uppercase }}</span>\n</ng-template>\n<ng-template #withFee let-fee=\"fee\">\n    <div>\n        <span *ngIf=\"fee.relative && fee.fixed\">\n            {{ convert(fee.fixed, fee.currency) | amount: currency.decimalPlaces }} {{ currency.code }} + {{ fee.relative | percent: '1.2' }}\n        </span>\n        <span *ngIf=\"fee.relative && !fee.fixed\">\n            {{ fee.relative | percent: '1.2' }}\n        </span>\n        <span *ngIf=\"!fee.relative && fee.fixed\"> {{ convert(fee.fixed, fee.currency) | amount: currency.decimalPlaces }} {{ currency.code }} </span>\n    </div>\n    <div *ngIf=\"fee.min\">\n        <small class=\"text-muted\">\n            min. {{ convert(fee.min, fee.currency) | amount: currency.decimalPlaces }} {{ currency.type !== 'metal' ? currency.code : 'USD' }}\n        </small>\n    </div>\n    <div *ngIf=\"fee.max\">\n        <small class=\"text-muted\">\n            {{ 'common.max' | translate }}. {{ convert(fee.max, fee.currency) | amount: currency.decimalPlaces }}\n            {{ currency.type !== 'metal' ? currency.code : 'USD' }}\n        </small>\n    </div>\n    <div *ngIf=\"fee.minValue\">\n        <small class=\"text-muted\">\n            min. {{ fee.type }} {{ convert(fee.minValue, fee.currency) | amount: currency.decimalPlaces }}\n            {{ currency.type !== 'metal' ? currency.code : 'USD' }}\n        </small>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "4K/k":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registration_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registration.component.html */ "+i1G");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/format */ "sWYD");
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/parseISO */ "4+6U");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_countries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/countries */ "Gq6/");
/* harmony import */ var _common_services_alert_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/services/alert.service */ "0ZVX");
/* harmony import */ var _common_services_login_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/services/login.service */ "rnZw");
/* harmony import */ var _common_terms_modal_terms_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/terms-modal/terms-modal.component */ "aXE1");
/* harmony import */ var _common_user_details_form_user_details_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/user-details-form/user-details-form.component */ "4pyo");
/* harmony import */ var _email_verification_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./email-verification-modal.component */ "qPTY");
/* harmony import */ var _registration_notice_registration_notice_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./registration-notice/registration-notice.component */ "QMST");




















let RegistrationComponent = class RegistrationComponent {
    constructor(router, route, http, alertService, loginService, ngbModal, translate) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.alertService = alertService;
        this.loginService = loginService;
        this.ngbModal = ngbModal;
        this.translate = translate;
        this.countriesSortedByName = _common_countries__WEBPACK_IMPORTED_MODULE_13__["countriesSortedByName"];
        this.user = {
            type: 'personal',
        };
        this.details = {};
        this.business = {};
        this.birthday = '';
        this.termsAccepted = false;
        this.hasReadTerms = false;
        this.isLoading = false;
        this.isInvitation = false;
        this.isRegistrationDisabled = false;
        this.requiredPasswordStrength = 60;
        this.passwordStrength = 0;
        this.referrer = null;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].appName;
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].displayName;
        this.referredByOptions = [
            `${this.translate.instant('registration.friend-relative')}`,
            `${this.translate.instant('registration.business-contact')}`,
            `${this.translate.instant('registration.corporate-service-provider')}`,
            `Authorised Partner of ${src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].displayName}`,
            'Other',
        ];
        this.customReferredBy = '';
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"]();
    }
    ngOnInit() {
        this.route.queryParamMap.subscribe(params => {
            var _a;
            this.activationToken = params.get('activationToken') || undefined;
            Object.assign(this.user, {
                id: params.get('userId') || undefined,
                email: params.get('email') || undefined,
            });
            if (this.user.id && this.activationToken) {
                this.http
                    .get(`/users/${this.user.id}`, {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'X-Activation-Token': this.activationToken }),
                })
                    .subscribe(user => {
                    var _a;
                    Object.assign(this.user, Object(lodash__WEBPACK_IMPORTED_MODULE_9__["pick"])(user, ['type', 'email', 'details']));
                    this.details = this.user.details || {};
                    this.business = ((_a = this.user.details) === null || _a === void 0 ? void 0 : _a.business) || {};
                    this.birthday = this.details.birthday
                        ? Object(date_fns_format__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_8__["default"])(this.details.birthday), 'ddMMyyyy')
                        : null;
                    this.isInvitation = !!user.email;
                }, () => {
                    this.alertService.add({
                        severity: 'danger',
                        message: this.translate.instant('common.invitation-expired'),
                    });
                    return this.router.navigate(['/login']);
                });
            }
            if (params.has('referrerId')) {
                this.referrerId = params.get('referrerId');
                this.http.get(`/referrers/${this.referrerId}`).subscribe(referrer => {
                    this.referrer = referrer;
                }, () => {
                    this.referrerId = undefined;
                    this.referrer = null;
                });
            }
            this.externalId = (_a = params.get('externalId')) !== null && _a !== void 0 ? _a : undefined;
        });
        this.subscriptions.add(this.http.get(`/settings/registration-disabled`).subscribe(setting => {
            this.isRegistrationDisabled = setting && setting.value;
        }));
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.appName === 'sgpmx') {
                this.openNoticeModal();
            }
        }, 200);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    submit() {
        var _a;
        if (!this.registrationForm.valid) {
            return;
        }
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        if (!this.termsAccepted) {
            this.alertService.add({
                severity: 'danger',
                message: this.translate.instant('common.you-must-accept-terms'),
            });
            return;
        }
        if (this.activationToken) {
            headers = headers.set('X-Activation-Token', this.activationToken);
        }
        if (this.details.referredBy === 'Other') {
            this.details.referredBy = this.customReferredBy;
        }
        const body = Object.assign(Object.assign({}, this.user), { details: Object.assign(Object.assign(Object.assign({}, this.details), { birthday: this.birthday ? Object(_common_user_details_form_user_details_form_component__WEBPACK_IMPORTED_MODULE_17__["formatMaskedDate"])(this.birthday) : null }), (this.user.type === 'business' ? { business: this.business } : {})), externalId: (_a = this.externalId) !== null && _a !== void 0 ? _a : undefined });
        if (this.referrer) {
            body.referrer = { id: this.referrer.id };
        }
        this.isLoading = true;
        this.http
            .post('/users', Object(lodash__WEBPACK_IMPORTED_MODULE_9__["omit"])(body, ['id']), { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["flatMap"])(user => this.isInvitation
            ? this.loginService.login({
                password: this.user.password,
                email: user.email,
            })
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(user)))
            .subscribe((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isInvitation) {
                yield this.router.navigate(['/verify']);
            }
            else {
                this.reset();
                const modal = this.ngbModal.open(_email_verification_modal_component__WEBPACK_IMPORTED_MODULE_18__["EmailVerificationModalComponent"], {
                    backdrop: 'static',
                    keyboard: false,
                    centered: true,
                });
                modal.componentInstance.email = user.email;
                yield modal.result.then(() => this.router.navigate(['/login']));
            }
        }), error => {
            this.isLoading = false;
            this.alertService.clear();
            if (error.name === 'UniqueConstraintError') {
                switch (error.errors[0]) {
                    case 'email must be unique':
                        this.alertService.add({
                            severity: 'danger',
                            message: this.translate.instant('common.email-already-in-use'),
                        });
                }
            }
            throw error;
        });
    }
    openTermsModal() {
        const termsModal = this.ngbModal.open(_common_terms_modal_terms_modal_component__WEBPACK_IMPORTED_MODULE_16__["TermsModalComponent"], {
            windowClass: 'modal-primary',
            backdrop: 'static',
            keyboard: false,
        });
        const termsModalComponent = termsModal.componentInstance;
        termsModalComponent.user = this.user;
        termsModal.result
            .then(() => {
            this.termsAccepted = true;
            this.hasReadTerms = true;
        })
            .catch(() => {
            this.termsAccepted = false;
        });
    }
    onAcceptTerms(accepted, ngModel) {
        if (accepted && !this.hasReadTerms) {
            ngModel.control.markAsTouched();
            this.openTermsModal();
        }
    }
    getLogo() {
        switch (src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].appName) {
            case 'etransfer':
                return '/img/brand/logo.svg';
            default:
                return '/img/brand/logo-white-horizontal.svg';
        }
    }
    openNoticeModal() {
        this.ngbModal.open(_registration_notice_registration_notice_component__WEBPACK_IMPORTED_MODULE_19__["RegistrationNoticeComponent"], {
            windowClass: 'modal-primary',
        });
    }
    reset() {
        this.user = {};
        this.registrationForm.resetForm();
        this.isLoading = false;
        this.alertService.clear();
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _common_services_alert_service__WEBPACK_IMPORTED_MODULE_14__["AlertService"] },
    { type: _common_services_login_service__WEBPACK_IMPORTED_MODULE_15__["LoginService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
RegistrationComponent.propDecorators = {
    registrationForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['registrationForm',] }]
};
RegistrationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'registration',
        template: _raw_loader_registration_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], RegistrationComponent);



/***/ }),

/***/ "6sOK":
/*!******************************************!*\
  !*** ./src/app/store/fees/fees.store.ts ***!
  \******************************************/
/*! exports provided: FeesStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesStore", function() { return FeesStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");



let FeesStore = class FeesStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"] {
    constructor() {
        super();
    }
};
FeesStore.ctorParameters = () => [];
FeesStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'fees', idKey: 'id' })
], FeesStore);



/***/ }),

/***/ "7ury":
/*!************************************************************!*\
  !*** ./src/app/common/services/compliance/term.service.ts ***!
  \************************************************************/
/*! exports provided: TermService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermService", function() { return TermService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let TermService = class TermService {
    constructor(http) {
        this.http = http;
    }
    create(term) {
        return this.http.post('/admin/terms', { terms: term.terms, privacy: term.privacy });
    }
    getApplicableTerm(userId) {
        return userId
            ? this.getTermsAcceptance(userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(termsAcceptance => termsAcceptance.term))
            : this.http.get(`/terms`);
    }
    getTermsAcceptance(userId) {
        return this.http.get(`/users/${userId}/terms-acceptance`);
    }
    accept(termsAcceptance, accepted = true) {
        return this.http.post(`/users/${termsAcceptance.user.id}/terms-acceptance`, {
            termsAcceptance: {
                id: termsAcceptance.id,
            },
            accepted,
        });
    }
};
TermService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TermService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], TermService);



/***/ }),

/***/ "80k1":
/*!******************************************!*\
  !*** ./src/app/store/fees/fees.query.ts ***!
  \******************************************/
/*! exports provided: FeesQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesQuery", function() { return FeesQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _fees_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fees.store */ "6sOK");






let FeesQuery = class FeesQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
    findByPrimaryAttributes(query) {
        return this.selectEntity(entity => entity.type === query.type &&
            entity.method === query.method &&
            query.currencyCode === entity.currency.code).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(fee => fee
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(fee)
            : this.selectEntity(entity => entity.type === query.type &&
                entity.method === query.method &&
                entity.currency.code === 'USD').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(usdFee => usdFee !== null && usdFee !== void 0 ? usdFee : null))));
    }
};
FeesQuery.ctorParameters = () => [
    { type: _fees_store__WEBPACK_IMPORTED_MODULE_5__["FeesStore"] }
];
FeesQuery = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], FeesQuery);



/***/ }),

/***/ "DNuw":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common.module */ "a6Df");
/* harmony import */ var _common_terms_modal_terms_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/terms-modal/terms-modal.module */ "d7hY");
/* harmony import */ var _email_verification_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-verification-modal.component */ "qPTY");
/* harmony import */ var _registration_notice_registration_notice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-notice/registration-notice.component */ "QMST");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration-routing.module */ "zF/k");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration.component */ "4K/k");








let RegistrationModule = class RegistrationModule {
};
RegistrationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"], _email_verification_modal_component__WEBPACK_IMPORTED_MODULE_4__["EmailVerificationModalComponent"], _registration_notice_registration_notice_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationNoticeComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _registration_routing_module__WEBPACK_IMPORTED_MODULE_6__["RegistrationRoutingModule"], _common_terms_modal_terms_modal_module__WEBPACK_IMPORTED_MODULE_3__["TermsModalModule"]],
        entryComponents: [_email_verification_modal_component__WEBPACK_IMPORTED_MODULE_4__["EmailVerificationModalComponent"]],
    })
], RegistrationModule);



/***/ }),

/***/ "ItCr":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/terms-modal/sgpmx-term-fees/sgpmx-term-fees.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container h-100\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <ng-container *ngIf=\"!isLoading; else loader\">\n                <h6>Buy &amp; Sell</h6>\n                <table class=\"table table-borderless table-striped mb-2\">\n                    <tbody>\n                        <tr>\n                            <td>\n                                <div class=\"font-weight-bold\">Gold Troy Ounce</div>\n                                <span class=\"font-sm text-gray\">Buy &amp; Sell</span>\n                            </td>\n                            <td class=\"text-right\">\n                                <ng-container *ngIf=\"getFee('service', 'internal', 'AU'); else noFee; let fee\">\n                                    <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                </ng-container>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div class=\"font-weight-bold\">Silver Troy Ounce</div>\n                                <span class=\"font-sm text-gray\">Buy &amp; Sell</span>\n                            </td>\n                            <td class=\"text-right\">\n                                <ng-container *ngIf=\"getFee('service', 'internal', 'AG'); else noFee; let fee\">\n                                    <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                </ng-container>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h6>{{ 'common.transfer' | translate }}</h6>\n                <table class=\"table table-borderless table-striped b-b-1 mb-2\">\n                    <tbody>\n                        <tr>\n                            <td>\n                                <div class=\"font-weight-bold\">Gold Troy Ounce</div>\n                                <span class=\"font-sm text-gray\">{{ 'common.transfer' | translate }}</span>\n                            </td>\n                            <td class=\"text-right\">\n                                <ng-container *ngIf=\"getFee('transfer', 'internal', 'AU'); else noFee; let fee\">\n                                    <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                </ng-container>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div class=\"font-weight-bold\">Silver Troy Ounce</div>\n                                <span class=\"font-sm text-gray\">{{ 'common.transfer' | translate }}</span>\n                            </td>\n                            <td class=\"text-right\">\n                                <ng-container *ngIf=\"getFee('transfer', 'internal', 'AG'); else noFee; let fee\">\n                                    <ng-container *ngTemplateOutlet=\"withFee; context: { fee: fee }\"></ng-container>\n                                </ng-container>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <p class=\"text-right font-sm\">\n                    <i>* Subject to additional {{ getGst() | async }} GST</i>\n                </p>\n            </ng-container>\n        </div>\n    </div>\n</div>\n\n<ng-template #loader>\n    <div class=\"d-flex align-items-center justify-content-center\" [ngStyle]=\"{ width: '100%', height: '300px' }\">\n        <ion-spinner color=\"primary\" name=\"dots\"></ion-spinner>\n    </div>\n</ng-template>\n\n<ng-template #noFee>\n    <span class=\"text-success\">FREE</span>\n</ng-template>\n<ng-template #withFee let-fee=\"fee\">\n    <div>\n        <span *ngIf=\"fee.relative && fee.fixed\"> {{ fee.fixed | amount }} USD + {{ fee.relative | percent: '1.2' }}*</span>\n        <span *ngIf=\"fee.relative && !fee.fixed\">{{ fee.relative | percent: '1.2' }}*</span>\n        <span *ngIf=\"!fee.relative && fee.fixed\"> {{ fee.fixed | amount }} USD*</span>\n    </div>\n    <div *ngIf=\"fee.min\">\n        <small class=\"text-muted\"> min. {{ fee.min | amount }} USD</small>\n    </div>\n    <div *ngIf=\"fee.max\">\n        <small class=\"text-muted\"> max. {{ fee.max | amount }} USD </small>\n    </div>\n    <div *ngIf=\"fee.minValue\">\n        <small class=\"text-muted\"> min. {{ fee.type }} {{ fee.minValue | amount }} USD</small>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "QMST":
/*!***********************************************************************************!*\
  !*** ./src/app/registration/registration-notice/registration-notice.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RegistrationNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationNoticeComponent", function() { return RegistrationNoticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registration_notice_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registration-notice.component.html */ "ReAF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




let RegistrationNoticeComponent = class RegistrationNoticeComponent {
    constructor(modal) {
        this.modal = modal;
    }
};
RegistrationNoticeComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
];
RegistrationNoticeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'registration-notice',
        template: _raw_loader_registration_notice_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], RegistrationNoticeComponent);



/***/ }),

/***/ "ReAF":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration-notice/registration-notice.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ 'common.important-notice' | translate }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"modal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-body\">\n    <p>\n        In line with Singapore’s efforts in the prevention of money laundering and terrorism financing under the Precious Stones and Precious Metals\n        (Prevention of Money Laundering and Terrorism Financing) Act 2019 (“PSPM Act”), all customers are to adhere to Stacker Market’s account\n        registration requirements, terms and conditions and to the following notice from the\n        <a rel=\"noopener\" target=\"_blank\" href=\"https://acd.mlaw.gov.sg/images/List%20of%20Registered%20Dealers.pdf\">Ministry of Law Singapore</a>.\n    </p>\n    <ul>\n        <li>\n            <a\n                rel=\"noopener\"\n                target=\"_blank\"\n                href=\"https://www.stackermarket.com/wp-content/uploads/2022/01/NoticeForCustomersPosterEnglishMar2020.pdf\"\n                >Notice for Customers (English)</a\n            >\n        </li>\n        <li>\n            <a\n                rel=\"noopener\"\n                target=\"_blank\"\n                href=\"https://www.stackermarket.com/wp-content/uploads/2022/01/NoticeForCustomersPosterChineseMar2020.pdf\"\n                >客户须知(Chinese)</a\n            >\n        </li>\n        <li>\n            <a rel=\"noopener\" target=\"_blank\" href=\"https://www.stackermarket.com/wp-content/uploads/2022/01/NoticeForCustomersPosterMalayMar2020.pdf\"\n                >Notis Bagi Pelanggan (Malay)</a\n            >\n        </li>\n        <li>\n            <a rel=\"noopener\" target=\"_blank\" href=\"https://www.stackermarket.com/wp-content/uploads/2022/01/NoticeForCustomersPosterTamilMar2020.pdf\"\n                >வாடிக்கையாளர்களுக்கான அறிவிப்பு (Tamil)</a\n            >\n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "U2ib":
/*!*********************************************************************************!*\
  !*** ./src/app/common/terms-modal/sgpmx-term-fees/sgpmx-term-fees.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SgpmxTermFeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SgpmxTermFeesComponent", function() { return SgpmxTermFeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sgpmx_term_fees_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sgpmx-term-fees.component.html */ "ItCr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_fees_fees_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/fees/fees.query */ "80k1");
/* harmony import */ var src_app_store_fees_fees_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/store/fees/fees.service */ "jwRq");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/session.service */ "6g7h");











let SgpmxTermFeesComponent = class SgpmxTermFeesComponent {
    constructor(session, route, http, feesQuery, feesService) {
        this.session = session;
        this.route = route;
        this.http = http;
        this.feesQuery = feesQuery;
        this.feesService = feesService;
        this.fees = [];
        this.isLoading = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(undefined)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => {
            this.isLoading = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(() => (this.session.isAuthenticated() ? this.session.userStream : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(undefined))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(sessionUser => {
            const referrerId = this.route.snapshot.queryParamMap.get('referrerId');
            const activationToken = this.route.snapshot.queryParamMap.get('activationToken');
            const user = this.user || sessionUser;
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            if (activationToken) {
                headers = headers.set('X-Activation-Token', activationToken);
            }
            return user && user.id
                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([
                    this.http.get(`/users/${user.id}/fee-schedule`, {
                        params: { currencyCode: 'AU' },
                        headers,
                    }),
                    this.http.get(`/users/${user.id}/fee-schedule`, {
                        params: { currencyCode: 'AG' },
                        headers,
                    }),
                ])
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([
                    this.http.get(`/fee-schedule`, {
                        params: referrerId
                            ? {
                                currencyCode: 'AU',
                                referrerId,
                            }
                            : {
                                currencyCode: 'AU',
                            },
                    }),
                    this.http.get(`/fee-schedule`, {
                        params: referrerId
                            ? {
                                currencyCode: 'AG',
                                referrerId,
                            }
                            : {
                                currencyCode: 'AG',
                            },
                    }),
                ]);
        }))
            .subscribe(([goldFees, silverFees]) => {
            this.fees = [...goldFees, ...silverFees];
            this.isLoading = false;
        }));
        this.feesService.fetch();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    getFee(type, method, currencyCode) {
        const found = this.fees.find(fee => fee.type === type && fee.method === method && fee.currency.code === currencyCode);
        if (!found || (!found.relative && !found.fixed)) {
            return null;
        }
        return found;
    }
    getGst() {
        return this.feesQuery
            .findByPrimaryAttributes({
            type: 'gst',
            method: 'internal',
            currencyCode: 'USD',
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(gst => (gst ? `${new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(gst.relative || 0).times(100).toFixed(0)}%` : 'FREE')));
    }
};
SgpmxTermFeesComponent.ctorParameters = () => [
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_store_fees_fees_query__WEBPACK_IMPORTED_MODULE_8__["FeesQuery"] },
    { type: src_app_store_fees_fees_service__WEBPACK_IMPORTED_MODULE_9__["FeesService"] }
];
SgpmxTermFeesComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SgpmxTermFeesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sgpmx-term-fees',
        template: _raw_loader_sgpmx_term_fees_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], SgpmxTermFeesComponent);



/***/ }),

/***/ "VrA6":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/email-verification-modal.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-body text-center my-2 e2e-registration-completed\">\n    <img src=\"/img/icons/envelope.svg\" class=\"img-md mb-3\" />\n    <h4 class=\"text-primary mb-3\">{{ 'common.email-verification' | translate }}</h4>\n    <p class=\"mb-4\">\n        {{ 'common.congrats-sent-email' | translate }} <span class=\"text-primary\">{{ email }}</span> {{ 'common.for-email-verification' | translate }}\n    </p>\n    <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"modal.close()\">{{ 'common.got-it' | translate }}</button>\n</div>\n");

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

/***/ "aXE1":
/*!*************************************************************!*\
  !*** ./src/app/common/terms-modal/terms-modal.component.ts ***!
  \*************************************************************/
/*! exports provided: TermsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsModalComponent", function() { return TermsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_terms_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./terms-modal.component.html */ "yaut");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_compliance_term_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/compliance/term.service */ "7ury");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/session.service */ "6g7h");










const ease = __webpack_require__(/*! ease-component */ "WvqM");
const scroll = __webpack_require__(/*! scroll */ "zELP");
let TermsModalComponent = class TermsModalComponent {
    constructor(activeModal, translate, session, termsService, element) {
        this.activeModal = activeModal;
        this.translate = translate;
        this.session = session;
        this.termsService = termsService;
        this.element = element;
        this.step = 'terms';
        this.viewOnly = false;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].appName;
        this.isDown = false;
        this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.scrollHandler = () => {
            // 25px threshold
            if (this.modalContainer.scrollTop >= this.modalContainer.scrollHeight - this.modalContainer.offsetHeight - 25) {
                this.isDown = true;
            }
            else {
                this.isDown = false;
            }
        };
    }
    ngOnInit() {
        this.subheader = this.translate.instant('common.you-must-accept-the-terms');
        this.subscriptions.add(this.fetchEvent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() => (this.session.isAuthenticated() ? this.session.userStream : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(undefined))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(user => this.termsService.getApplicableTerm(user === null || user === void 0 ? void 0 : user.id)))
            .subscribe(term => {
            this.term = term;
            setTimeout(() => this.scrollHandler());
        }));
        this.fetchEvent.next();
        this.modalContainer = this.element.nativeElement.querySelector('.terms-container');
        this.modalContainer.addEventListener('scroll', this.scrollHandler);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.modalContainer.removeEventListener('scroll', this.scrollHandler);
    }
    nextStep() {
        this.modalContainer.scrollTop = 0;
        if (this.step === 'terms') {
            this.step = 'privacy';
        }
        else if (this.step === 'privacy') {
            this.step = 'fees';
        }
        else {
            this.activeModal.close();
        }
        this.subheader = `${this.translate.instant('common.you-must-accept-the')} ${this.step === 'privacy' ? this.translate.instant('common.privacy-policy') : this.step} ${this.translate.instant('common.to-continue')}`;
    }
    scrollDown() {
        scroll.top(this.modalContainer, this.modalContainer.scrollHeight - this.modalContainer.clientHeight, {
            duration: 1000,
            ease: ease.inOutExpo,
        });
    }
};
TermsModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] },
    { type: _services_compliance_term_service__WEBPACK_IMPORTED_MODULE_8__["TermService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
TermsModalComponent.propDecorators = {
    step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    viewOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
TermsModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'terms-modal',
        template: _raw_loader_terms_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TermsModalComponent);



/***/ }),

/***/ "d7hY":
/*!**********************************************************!*\
  !*** ./src/app/common/terms-modal/terms-modal.module.ts ***!
  \**********************************************************/
/*! exports provided: TermsModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsModalModule", function() { return TermsModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.module */ "a6Df");
/* harmony import */ var _sgpmx_term_fees_sgpmx_term_fees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sgpmx-term-fees/sgpmx-term-fees.component */ "U2ib");
/* harmony import */ var _term_fees_term_fees_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./term-fees/term-fees.component */ "eT9F");
/* harmony import */ var _terms_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms-modal.component */ "aXE1");







let TermsModalModule = class TermsModalModule {
};
TermsModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_terms_modal_component__WEBPACK_IMPORTED_MODULE_6__["TermsModalComponent"], _term_fees_term_fees_component__WEBPACK_IMPORTED_MODULE_5__["TermFeesComponent"], _sgpmx_term_fees_sgpmx_term_fees_component__WEBPACK_IMPORTED_MODULE_4__["SgpmxTermFeesComponent"]],
        exports: [_terms_modal_component__WEBPACK_IMPORTED_MODULE_6__["TermsModalComponent"]],
        imports: [_common_module__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
    })
], TermsModalModule);



/***/ }),

/***/ "eT9F":
/*!*********************************************************************!*\
  !*** ./src/app/common/terms-modal/term-fees/term-fees.component.ts ***!
  \*********************************************************************/
/*! exports provided: TermFeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermFeesComponent", function() { return TermFeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_term_fees_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./term-fees.component.html */ "2h9V");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/accounting/currency.model */ "/e3T");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/session.service */ "6g7h");










let TermFeesComponent = class TermFeesComponent {
    constructor(http, session, route) {
        this.http = http;
        this.session = session;
        this.route = route;
        this.currencies = [];
        this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.isLoading = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
    }
    ngOnInit() {
        this.http
            .get('/currencies', {
            params: {
                limit: 100 + '',
            },
        })
            .subscribe(response => {
            this.currencies = response.data;
            this.currency = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["find"])(this.currencies, {
                code: this.session.user ? this.session.user.preferredCurrency.code : 'USD',
            });
            this.fetchEvent.next();
        });
        this.subscriptions.add(this.fetchEvent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => {
            this.isLoading = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(() => (this.session.isAuthenticated() ? this.session.userStream : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(undefined))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(sessionUser => {
            const params = {
                currencyCode: this.currency.code,
            };
            const referrerId = this.route.snapshot.queryParamMap.get('referrerId');
            const user = this.user || sessionUser;
            const activationToken = this.route.snapshot.queryParamMap.get('activationToken');
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            if (activationToken) {
                headers = headers.set('X-Activation-Token', activationToken);
            }
            return user && user.id
                ? this.http.get(`/users/${user.id}/fee-schedule`, {
                    params,
                    headers,
                })
                : this.http.get(`/fee-schedule`, {
                    params: referrerId
                        ? Object.assign(Object.assign({}, params), { referrerId }) : params,
                });
        }))
            .subscribe(fees => {
            this.fees = fees;
            this.isLoading = false;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    getFee(type, method) {
        const found = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["find"])(this.fees, fee => fee.type === type && fee.method === method);
        if (!found || (!found.relative && !found.fixed)) {
            return null;
        }
        return found;
    }
    convert(amount, baseCurrency) {
        const base = this.currencies.find(currency => currency.code === baseCurrency.code);
        const counter = this.currencies.find(currency => currency.code === this.currency.code);
        if (!base || !counter) {
            return '0';
        }
        return _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_8__["Currency"].convert(amount, base, counter);
    }
    onCurrencyChange() {
        this.fees = [];
        this.fetchEvent.next();
    }
};
TermFeesComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
TermFeesComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
TermFeesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'term-fees',
        template: _raw_loader_term_fees_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TermFeesComponent);



/***/ }),

/***/ "jwRq":
/*!********************************************!*\
  !*** ./src/app/store/fees/fees.service.ts ***!
  \********************************************/
/*! exports provided: FeesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesService", function() { return FeesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/session.service */ "6g7h");
/* harmony import */ var _fees_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fees.store */ "6sOK");







let FeesService = class FeesService {
    constructor(store, http, session) {
        this.store = store;
        this.http = http;
        this.session = session;
    }
    fetchAsObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            this.http.get(`/users/${this.session.user.id}/fee-schedule`, {
                params: {
                    currencyCode: 'AU',
                },
            }),
            this.http.get(`/users/${this.session.user.id}/fee-schedule`, {
                params: {
                    currencyCode: 'AG',
                },
            }),
            this.http.get(`/users/${this.session.user.id}/fee-schedule`, {
                params: {
                    currencyCode: 'USD',
                },
            }),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([goldFees, silverFees, usdFees]) => [...goldFees, ...silverFees, ...usdFees]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(fees => {
            this.store.set(fees);
        }));
    }
    fetch() {
        this.fetchAsObservable().subscribe(() => undefined);
    }
};
FeesService.ctorParameters = () => [
    { type: _fees_store__WEBPACK_IMPORTED_MODULE_6__["FeesStore"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] }
];
FeesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], FeesService);



/***/ }),

/***/ "qPTY":
/*!********************************************************************!*\
  !*** ./src/app/registration/email-verification-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: EmailVerificationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerificationModalComponent", function() { return EmailVerificationModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_email_verification_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./email-verification-modal.component.html */ "VrA6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




let EmailVerificationModalComponent = class EmailVerificationModalComponent {
    constructor(modal) {
        this.modal = modal;
    }
};
EmailVerificationModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
];
EmailVerificationModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'email-verification-modal',
        template: _raw_loader_email_verification_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], EmailVerificationModalComponent);



/***/ }),

/***/ "yaut":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/terms-modal/terms-modal.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">\n        {{\n            (step === 'terms' ? 'common.terms-and-conditions' : step === 'privacy' ? 'common.data-privacy-notice' : 'common.fee-schedule')\n                | translate\n                | titlecase\n        }}\n    </h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n</div>\n<div *ngIf=\"!viewOnly\" class=\"modal-subheader\">\n    {{ subheader }}\n</div>\n<div class=\"modal-body terms-container text-body e2e-terms-modal\">\n    <ng-container *ngIf=\"term; else loadingContent\">\n        <div *ngIf=\"step === 'terms'\" [innerHtml]=\"term.terms | safeHtml\"></div>\n        <div *ngIf=\"step === 'privacy'\" [innerHtml]=\"term.privacy | safeHtml\"></div>\n        <div *ngIf=\"step === 'fees'\">\n            <ng-container *ngIf=\"appName !== 'sgpmx'; else sgpmxFees\">\n                <term-fees [user]=\"user\"></term-fees>\n            </ng-container>\n            <ng-template #sgpmxFees>\n                <sgpmx-term-fees [user]=\"user\"></sgpmx-term-fees>\n            </ng-template>\n        </div>\n    </ng-container>\n    <ng-template #loadingContent>\n        <svg class=\"spinner spinner-dark\" viewBox=\"0 0 50 50\">\n            <circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\"></circle>\n        </svg>\n        <p class=\"mb-0 mt-5 text-center\">{{ 'common.loading-terms' | translate }}</p>\n    </ng-template>\n</div>\n<div class=\"modal-footer flex-column flex-md-row justify-content-center justify-content-md-end\">\n    <ng-container *ngIf=\"!viewOnly; else closeButton\">\n        <button class=\"btn btn-link mr-md-auto mb-2 mb-md-0 e2e-scroll-down-button\" (click)=\"scrollDown()\">\n            {{ 'common.scroll-to-bottom' | translate }}\n        </button>\n        <div class=\"d-flex justify-content-end\">\n            <button class=\"btn btn-default btn-w-sm ml-1\" (click)=\"activeModal.dismiss()\">{{ 'common.decline' | translate }}</button>\n            <button class=\"btn btn-success btn-w-sm ml-1 e2e-accept-button\" (click)=\"nextStep()\" [disabled]=\"!isDown\">\n                {{ 'common.accept' | translate }}\n            </button>\n        </div>\n    </ng-container>\n    <ng-template #closeButton>\n        <div class=\"d-flex justify-content-end\">\n            <button class=\"btn btn-default btn-w-sm\" (click)=\"activeModal.dismiss()\">{{ 'common.close' | translate }}</button>\n        </div>\n    </ng-template>\n</div>\n");

/***/ }),

/***/ "z8Oq":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.auth-guard.ts ***!
  \*********************************************************/
/*! exports provided: RegistrationAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationAuthGuard", function() { return RegistrationAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");




let RegistrationAuthGuard = class RegistrationAuthGuard {
    constructor(session, router) {
        this.session = session;
        this.router = router;
    }
    canActivate() {
        if (this.session.isAuthenticated()) {
            return this.router.parseUrl('/dashboard');
        }
        return true;
    }
};
RegistrationAuthGuard.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RegistrationAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RegistrationAuthGuard);



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


/***/ }),

/***/ "zF/k":
/*!*************************************************************!*\
  !*** ./src/app/registration/registration-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _registration_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.auth-guard */ "z8Oq");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration.component */ "4K/k");





const routes = [
    {
        path: '',
        component: _registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
        canActivate: [_registration_auth_guard__WEBPACK_IMPORTED_MODULE_3__["RegistrationAuthGuard"]],
    },
];
let RegistrationRoutingModule = class RegistrationRoutingModule {
};
RegistrationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_registration_auth_guard__WEBPACK_IMPORTED_MODULE_3__["RegistrationAuthGuard"]],
    })
], RegistrationRoutingModule);



/***/ })

}]);
//# sourceMappingURL=registration-registration-module.js.map