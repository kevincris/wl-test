(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "/qCo":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-security/two-factor/two-factor.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"session.userStream | async; let user\">\n    <div *ngIf=\"user.twoFactor\">\n        <div class=\"circle-loader load-complete\">\n            <div class=\"checkmark draw\"></div>\n        </div>\n        <h3 class=\"text-center\">{{ 'two-factor.two-factor-authentication-has-been-enabled' | translate }}</h3>\n    </div>\n    <div *ngIf=\"!user.twoFactor && !twoFactor\">\n        <button\n            type=\"button\"\n            class=\"btn btn-primary btn-w-sm e2e-generate-2fa-secret\"\n            (click)=\"generate2FASecret()\"\n            [ngClass]=\"{ loading: isLoading }\"\n            [disabled]=\"isLoading\"\n        >\n            {{ 'common.enable-2fa' | translate }}\n        </button>\n    </div>\n    <form\n        name=\"twoFactor\"\n        #verificationForm=\"ngForm\"\n        class=\"form-validation\"\n        (ngSubmit)=\"toggleTwoFactorAuth(!user.twoFactor)\"\n        autocomplete=\"false\"\n        novalidate\n        *ngIf=\"(!user.twoFactor && !!twoFactor) || user.twoFactor\"\n    >\n        <div *ngIf=\"!user.twoFactor\">\n            <img [src]=\"twoFactor!.qrCode\" class=\"mx-auto d-block img-thumbnail p-0 mb-2 e2e-2fa-qr\" />\n            <p class=\"text-center e2e-2fa-secret\">\n                {{ 'common.or-enter-this-code' | translate }} <b class=\"text-info\">{{ twoFactor!.secret }}</b>\n            </p>\n            <div class=\"alert alert-info\">\n                {{ 'common.scan-this-code-with-your-auth-app' | translate }}\n            </div>\n        </div>\n        <div *ngIf=\"user.twoFactor\" class=\"callout callout-info bg-white\">\n            {{ 'two-factor.to-disable-two-factor-authentication' | translate }}\n        </div>\n        <div class=\"form-group\" *ngIf=\"!user.twoFactor\">\n            <label for=\"verificationCode\">{{ 'common.verification-code' | translate }}</label>\n            <input type=\"type\" id=\"verificationCode\" name=\"verificationCode\" class=\"form-control\" [(ngModel)]=\"verificationCode\" number />\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary btn-w-sm\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n            <span>{{ (user.twoFactor ? 'common.disable-2fa' : 'common.verify-code') | translate }}</span>\n        </button>\n    </form>\n</ng-container>\n");

/***/ }),

/***/ "0R5k":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/profile/email-form/email-form.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    #emailForm=\"ngForm\"\n    class=\"form-validation e2e-email-form\"\n    [ngClass]=\"{ 'ng-submitted': emailForm.submitted }\"\n    (ngSubmit)=\"submit()\"\n    autocomplete=\"false\"\n    novalidate\n>\n    <div class=\"alert alert-{{ alert.severity || 'danger' }} alert-dismissible\" role=\"alert\" *ngFor=\"let alert of alertService.alerts\">\n        <button type=\"button\" class=\"close\" (click)=\"alertService.remove(alert)\">\n            <span>&times;</span>\n        </button>\n        {{ alert.message }}\n    </div>\n    <div class=\"form-group\">\n        <label for=\"email\">{{ 'common.email' | translate }}</label>\n        <input\n            type=\"email\"\n            id=\"email\"\n            name=\"email\"\n            class=\"form-control\"\n            [placeholder]=\"'common.enter-email' | translate\"\n            [(ngModel)]=\"email\"\n            #emailInput=\"ngModel\"\n            email\n            required\n        />\n        <div *ngIf=\"emailInput.invalid && (emailForm.submitted || emailInput.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"emailInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            <div class=\"form-control-feedback\" *ngIf=\"emailInput?.errors?.email\">{{ 'common.not-a-valid-email-address' | translate }}</div>\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-w-sm\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n        {{ 'common.change-email' | translate }}\n    </button>\n</form>\n");

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

/***/ "7tD/":
/*!*************************************************************************************************!*\
  !*** ./src/app/account/account-security/change-password-form/change-password-form.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ChangePasswordFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordFormComponent", function() { return ChangePasswordFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_change_password_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./change-password-form.component.html */ "OoYq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/security-check/security-check.service */ "i32w");
/* harmony import */ var _common_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/services/alert.service */ "0ZVX");
/* harmony import */ var _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/services/core/user.service */ "AxWo");
/* harmony import */ var _common_services_logout_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/services/logout.service */ "2kWO");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/services/session.service */ "6g7h");











let ChangePasswordFormComponent = class ChangePasswordFormComponent {
    constructor(session, securityCheckService, userService, alert, logoutService, translate) {
        this.session = session;
        this.securityCheckService = securityCheckService;
        this.userService = userService;
        this.alert = alert;
        this.logoutService = logoutService;
        this.translate = translate;
        this.isLoading = false;
        this.requiredPasswordStrength = 60;
        this.passwordStrength = 0;
        this.subcriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnDestroy() {
        this.subcriptions.unsubscribe();
    }
    submitSecurityForm() {
        if (!this.changePasswordForm.valid) {
            return;
        }
        this.subcriptions.add(this.securityCheckService
            .getScopePermission('securitySettings')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(() => {
            this.isLoading = true;
            return this.userService.changePassword(this.session.user.id, this.password);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.isLoading = false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            // the refreshtoken is invalidated on password change
            this.session.refreshToken = undefined;
            this.alert.add({
                message: this.translate.instant('common.your-password-has-been-successfully-changed'),
                severity: 'success',
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(() => this.logoutService.logout()))
            .subscribe());
    }
};
ChangePasswordFormComponent.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] },
    { type: _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_6__["SecurityCheckService"] },
    { type: _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _common_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: _common_services_logout_service__WEBPACK_IMPORTED_MODULE_9__["LogoutService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
ChangePasswordFormComponent.propDecorators = {
    changePasswordForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['changePasswordForm',] }]
};
ChangePasswordFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'change-password-form',
        template: _raw_loader_change_password_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ChangePasswordFormComponent);



/***/ }),

/***/ "ACGU":
/*!************************************************************************!*\
  !*** ./src/app/account/account-security/account-security.component.ts ***!
  \************************************************************************/
/*! exports provided: AccountSecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSecurityComponent", function() { return AccountSecurityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_security_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account-security.component.html */ "qw5i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "WE53");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");





let AccountSecurityComponent = class AccountSecurityComponent {
    constructor(session) {
        this.session = session;
        this.faLockAlt = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLockAlt"];
        this.faShieldAlt = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShieldAlt"];
        this.faMobile = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMobile"];
        this.faUsers = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUsers"];
        this.faKey = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faKey"];
    }
};
AccountSecurityComponent.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
AccountSecurityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'account-security',
        template: _raw_loader_account_security_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AccountSecurityComponent);



/***/ }),

/***/ "HL7Y":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/profile/profile.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-page\">\n    <div class=\"row justify-content-between align-items-center pb-3\">\n        <div class=\"col-auto\">\n            <h5 class=\"mb-0\">{{ 'common.profile' | translate }}</h5>\n        </div>\n        <div class=\"col-auto d-flex justify-content-end\">\n            <ol class=\"breadcrumb px-0\">\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item active\">{{ 'common.profile' | translate }}</li>\n            </ol>\n        </div>\n    </div>\n</div>\n<div class=\"container pb-4\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"headline\">{{ 'common.email-address' | translate }}</div>\n            <div class=\"row e2e-email-section\">\n                <div class=\"col-lg-9\">\n                    <div class=\"media media-info pr-2\">\n                        <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faEnvelope\"></fa-icon>\n                        <div class=\"media-body pt-0\">\n                            <h6 class=\"mt-0\">{{ 'common.change-email' | translate }}</h6>\n                            <p>{{ 'profile.you-have-to-confirm-your-new-email-address' | translate }}</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-15\">\n                    <div class=\"form-block max-width-md\">\n                        <email-form *ngIf=\"user\" [user]=\"user\"></email-form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"headline\">{{ 'common.preferred-currency' | translate }}</div>\n            <div class=\"row e2e-currency-section\">\n                <div class=\"col-lg-9\">\n                    <div class=\"media media-info pr-2\">\n                        <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faCoin\"></fa-icon>\n                        <div class=\"media-body pt-0\">\n                            <p>{{ 'profile.preselect-your-balance' | translate }}</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-15\">\n                    <div class=\"form-block max-width-md\">\n                        <div class=\"form-group\">\n                            <label for=\"currency\">{{ 'common.preferred-currency' | translate }}</label>\n                            <ng-select\n                                [items]=\"currencies$ | async\"\n                                [placeholder]=\"'common.select-currency' | translate\"\n                                name=\"currency\"\n                                id=\"currency\"\n                                [clearable]=\"false\"\n                                [ngModel]=\"preferredCurrency$ | async\"\n                                (ngModelChange)=\"changePreferredCurrency($event)\"\n                                required\n                            >\n                                <ng-template ng-label-tmp let-item=\"item\"> {{ item.code }} - {{ item.name }} </ng-template>\n                                <ng-template ng-option-tmp let-item=\"item\"> {{ item.code }} - {{ item.name }} </ng-template>\n                            </ng-select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"headline\">{{ 'common.information' | translate }}</div>\n            <div class=\"row e2e-information-section\">\n                <div class=\"col-lg-9\">\n                    <div class=\"media media-info pr-2\">\n                        <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faUserCheck\"></fa-icon>\n                        <div class=\"media-body pt-0\">\n                            <h6 class=\"mt-0\">{{ 'profile.update-details' | translate }}</h6>\n                            <p>{{ 'profile.to-update-any-of-your-account-details' | translate }}</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-15\">\n                    <div class=\"form-block max-width-md\" *ngIf=\"user\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">{{ 'common.name' | translate }}</label>\n                            <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [value]=\"user.name\" disabled />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"phoneNumber\">{{ 'common.phone-number' | translate }}</label>\n                            <input\n                                type=\"text\"\n                                id=\"phoneNumber\"\n                                name=\"phoneNumber\"\n                                class=\"form-control\"\n                                [value]=\"user.phoneNumber ? toCountryCallingCode(user.phoneCountryCode!) + ' ' + user.phoneNumber : '-'\"\n                                disabled\n                            />\n                        </div>\n                        <div class=\"form-group\">\n                            <label>{{ 'common.address' | translate }}</label>\n                            <postal-address [address]=\"user.address\" theme=\"input\"></postal-address>\n                        </div>\n                        <button\n                            type=\"button\"\n                            class=\"btn btn-primary\"\n                            (click)=\"\n                                user.approvedAt\n                                    ? intercom.startConversation(translate.instant('common.update-my-personal-profile-details'))\n                                    : goToVerification()\n                            \"\n                        >\n                            {{ 'profile.update-details' | translate }}\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"headline\">{{ 'common.avatar' | translate }}</div>\n            <div class=\"row e2e-avatar-section\">\n                <div class=\"col-lg-9\">\n                    <div class=\"media media-info pr-2\">\n                        <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faImage\"></fa-icon>\n                        <div class=\"media-body pt-0\">\n                            <h6 class=\"mt-0\">{{ 'profile.upload-avatar' | translate }}</h6>\n                            <p>\n                                {{ 'common.when-not-providing-an-avatar' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-15\">\n                    <div class=\"form-block max-width-md\">\n                        <user-avatar [user]=\"user\" size=\"xl\" elementClass=\"d-block mb-2\"></user-avatar>\n                        <button\n                            type=\"button\"\n                            class=\"btn btn-primary mr-1 e2e-upload-avatar\"\n                            ngfSelect\n                            (fileChange)=\"!avatarUploading && uploadAvatar($event)\"\n                            [fileDropDisabled]=\"!user?.id\"\n                            [disabled]=\"avatarUploading\"\n                            [ngClass]=\"{ loading: avatarUploading }\"\n                        >\n                            {{ 'profile.choose-file' | translate }}\n                        </button>\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteAvatar()\" [disabled]=\"avatarUploading\" *ngIf=\"!!user?.avatar?.id\">\n                            {{ 'profile.remove-avatar' | translate }}\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"headline\">{{ 'common.notifications' | translate }}</div>\n            <div class=\"row e2e-notifications-section\">\n                <div class=\"col-lg-9\">\n                    <div class=\"media media-info pr-2\">\n                        <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faEnvelope\"></fa-icon>\n                        <div class=\"media-body pt-0\">\n                            <h6 class=\"mt-0\">{{ 'profile.receive-notifications' | translate }}</h6>\n                            <p>\n                                {{ 'common.receive-email-notifications-on-various-activities' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-15\">\n                    <div class=\"form-block max-width-md\">\n                        <div *ngIf=\"user\" class=\"custom-controls-stacked\">\n                            <label class=\"custom-control custom-checkbox\">\n                                <input\n                                    type=\"checkbox\"\n                                    class=\"custom-control-input\"\n                                    name=\"sendEmailNotifications\"\n                                    [(ngModel)]=\"user.sendEmailNotifications\"\n                                    (ngModelChange)=\"updateEmailNotifications()\"\n                                    [disabled]=\"isEmailNotificationsUpdating\"\n                                />\n                                <span class=\"custom-control-label font-md\"> {{ 'common.receive-email-notifications' | translate }} </span>\n                            </label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <ng-container>\n                <div class=\"headline\">{{ 'profile.close-account' | translate }}</div>\n                <div class=\"row e2e-close-account-section\">\n                    <div class=\"col-lg-9\">\n                        <div class=\"media media-info pr-2\">\n                            <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faExclamationTriangle\"></fa-icon>\n                            <div class=\"media-body pt-0\">\n                                <h6 class=\"mt-0\">{{ 'common.important-notice' | translate }}</h6>\n                                <p>{{ 'common.write-us-a-message-if-you-wish' | translate }}</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-15\">\n                        <div class=\"form-block max-width-md\">\n                            <button\n                                type=\"button\"\n                                class=\"btn btn-danger\"\n                                (click)=\"intercom.startConversation(translate.instant('common.i-would-like-to-close-my-account'))\"\n                            >\n                                {{ 'profile.request-account-closing' | translate }}\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "HTKs":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-security/api-tokens/api-tokens.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"session.userStream | async; let user\">\n    <ng-container *ngIf=\"user.twoFactor; else noAccess\">\n        <div class=\"d-flex justify-content-end mb-3\">\n            <ngb-pagination\n                [(page)]=\"page\"\n                [collectionSize]=\"count\"\n                (pageChange)=\"select()\"\n                [pageSize]=\"limit\"\n                [maxSize]=\"5\"\n                [ellipses]=\"false\"\n                [rotate]=\"true\"\n                [boundaryLinks]=\"true\"\n            >\n            </ngb-pagination>\n        </div>\n        <div class=\"table-responsive\">\n            <table class=\"table table-hover table-bordered table-data\">\n                <thead class=\"thead-light\">\n                    <tr>\n                        <th scope=\"col\">{{ 'common.public-key' | translate }}</th>\n                        <th scope=\"col\">{{ 'common.created-at' | translate | titlecase }}</th>\n                        <th scope=\"col\"></th>\n                    </tr>\n                </thead>\n                <tbody class=\"bg-white\">\n                    <ng-container *ngIf=\"itemsStream | async; let items\">\n                        <tr *ngFor=\"let apiToken of items\">\n                            <th scope=\"row\">\n                                {{ apiToken.publicKey }}\n                            </th>\n                            <td scope=\"row\">{{ apiToken.createdAt | date: 'medium' }}</td>\n                            <td class=\"action\">\n                                <a href class=\"btn btn-danger-air btn-sm\" (click)=\"revoke(apiToken); $event.preventDefault()\">{{\n                                    'common.revoke' | translate\n                                }}</a>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"items.length === 0\">\n                            <td colspan=\"3\" class=\"text-center\">{{ 'common.no-entries-found' | translate }}</td>\n                        </tr>\n                    </ng-container>\n                </tbody>\n            </table>\n        </div>\n        <button class=\"btn btn-primary\" [ngClass]=\"{ loading: isLoading }\" (click)=\"generate()\">{{ 'common.generate' | translate }}</button>\n    </ng-container>\n</ng-container>\n<ng-template #noAccess>\n    <div class=\"text-center\">\n        <h4 class=\"m-0\">{{ 'common.you-dont-have-access-to-this-feature' | translate }}</h4>\n        <img src=\"/img/icons/lock.svg\" class=\"img-sm my-3\" />\n        <p class=\"text-body\">{{ 'common.please-enable-2fa-to-access-this-feature' | translate }}</p>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "OoYq":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-security/change-password-form/change-password-form.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    #changePasswordForm=\"ngForm\"\n    class=\"form-validation\"\n    [ngClass]=\"{ 'ng-submitted': changePasswordForm.submitted }\"\n    (ngSubmit)=\"submitSecurityForm()\"\n    novalidate\n>\n    <div class=\"form-group\">\n        <label for=\"password\">{{ 'change-password-form.new-password' | translate }}</label>\n        <input\n            type=\"password\"\n            id=\"password\"\n            name=\"password\"\n            class=\"form-control\"\n            [(ngModel)]=\"password\"\n            #passwordInput=\"ngModel\"\n            [passwordStrength]=\"requiredPasswordStrength\"\n            (onEntropyChange)=\"passwordStrength = $event\"\n            autocomplete=\"off\"\n            required\n        />\n        <div class=\"mt-2\">\n            <password-strength-bar [requiredStrength]=\"requiredPasswordStrength\" [strength]=\"passwordStrength\"></password-strength-bar>\n        </div>\n        <div *ngIf=\"passwordInput.invalid && (changePasswordForm.submitted || passwordInput.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"passwordInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            <div class=\"form-control-feedback\" *ngIf=\"passwordInput?.errors?.weakPassword\">{{ 'common.password-is-too-weak' | translate }}</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"repeatedPassword\">{{ 'change-password-form.repeat-password' | translate }}</label>\n        <input\n            type=\"password\"\n            id=\"repeatedPassword\"\n            name=\"repeatedPassword\"\n            class=\"form-control\"\n            [(ngModel)]=\"repeatedPassword\"\n            #repeatedPasswordInput=\"ngModel\"\n            [matchPassword]=\"password\"\n            autocomplete=\"off\"\n            required\n        />\n        <div *ngIf=\"repeatedPasswordInput.invalid && (changePasswordForm.submitted || repeatedPasswordInput.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"repeatedPasswordInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            <div class=\"form-control-feedback\" *ngIf=\"repeatedPasswordInput?.errors?.matchPassword\">\n                {{ 'common.password-do-not-match' | translate }}\n            </div>\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-w-sm\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n        {{ 'common.change-password' | translate }}\n    </button>\n</form>\n");

/***/ }),

/***/ "Q8y0":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-security/logout-all/logout-all.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"btn btn-danger\" (click)=\"logoutAllDevices()\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n    {{ 'logout-all.logged-out-from-all-devices' | translate }}\n</button>\n");

/***/ }),

/***/ "VGXk":
/*!*****************************************************************************!*\
  !*** ./src/app/account/account-security/two-factor/two-factor.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TwoFactorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoFactorComponent", function() { return TwoFactorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_two_factor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./two-factor.component.html */ "/qCo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/security-check/security-check.service */ "i32w");
/* harmony import */ var _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/services/core/user.service */ "AxWo");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/services/token.service */ "JdTs");










let TwoFactorComponent = class TwoFactorComponent {
    constructor(session, http, securityCheckService, tokenService, userService) {
        this.session = session;
        this.http = http;
        this.securityCheckService = securityCheckService;
        this.tokenService = tokenService;
        this.userService = userService;
        this.isLoading = false;
        this.subcriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnDestroy() {
        this.subcriptions.unsubscribe();
    }
    generate2FASecret() {
        this.subcriptions.add(this.securityCheckService
            .getScopePermission('securitySettings')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            this.isLoading = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(() => this.http.post(`/users/${this.session.user.id}`, {
            id: Math.floor(Math.random() * 10000),
            jsonrpc: '2.0',
            method: 'generate2FASecret',
        }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json-rpc' }),
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.isLoading = false;
        }))
            .subscribe(response => {
            this.twoFactor = response.result;
        }));
    }
    toggleTwoFactorAuth(status) {
        this.subcriptions.add(this.securityCheckService
            .getScopePermission('securitySettings')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            this.isLoading = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(() => {
            var _a;
            return this.userService.changeTwoFactor(this.session.user.id, status, this.verificationCode
                ? {
                    'X-2FA-Code': (_a = this.verificationCode) === null || _a === void 0 ? void 0 : _a.toString(),
                }
                : {});
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(() => this.tokenService.refresh()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.isLoading = false;
        }))
            .subscribe(() => {
            this.verificationCode = null;
            this.twoFactor = null;
        }));
    }
};
TwoFactorComponent.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_6__["SecurityCheckService"] },
    { type: _common_services_token_service__WEBPACK_IMPORTED_MODULE_9__["TokenService"] },
    { type: _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
TwoFactorComponent.propDecorators = {
    verificationForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['verificationForm',] }]
};
TwoFactorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'two-factor',
        template: _raw_loader_two_factor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TwoFactorComponent);



/***/ }),

/***/ "aYPB":
/*!*********************************************************************!*\
  !*** ./src/app/account/account-billing/account-billing.resolver.ts ***!
  \*********************************************************************/
/*! exports provided: AccountBillingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountBillingResolver", function() { return AccountBillingResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_services_account_billing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/account-billing.service */ "syFb");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");






let AccountBillingResolver = class AccountBillingResolver {
    constructor(accountBills, session) {
        this.accountBills = accountBills;
        this.session = session;
    }
    resolve() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            this.accountBills.fetchAccountBills(this.session.user.id),
            this.accountBills.fetchBillingCurrency(this.session.user.id),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([payments, billingCurrency]) => ({
            payments,
            billingCurrency,
        })));
    }
};
AccountBillingResolver.ctorParameters = () => [
    { type: _common_services_account_billing_service__WEBPACK_IMPORTED_MODULE_4__["AccountBillsService"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] }
];
AccountBillingResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AccountBillingResolver);



/***/ }),

/***/ "cFsQ":
/*!*****************************************************************************!*\
  !*** ./src/app/account/account-security/api-tokens/api-tokens.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ApiTokensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiTokensComponent", function() { return ApiTokensComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_api_tokens_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./api-tokens.component.html */ "HTKs");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_list_v2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/list-v2.component */ "qhtW");
/* harmony import */ var src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/services/confirmation.service */ "fTmd");
/* harmony import */ var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common/services/session.service */ "6g7h");
/* harmony import */ var src_app_common_services_toastr_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/services/toastr.service */ "N/y2");












let ApiTokensComponent = class ApiTokensComponent extends src_app_common_list_v2_component__WEBPACK_IMPORTED_MODULE_8__["ListV2Component"] {
    constructor(http, ngbModal, changeDetector, route, router, session, toastr, confirmation, translate) {
        super(http, ngbModal, changeDetector, route, router, session);
        this.toastr = toastr;
        this.confirmation = confirmation;
        this.translate = translate;
        this.defaultLimit = 5;
        this.isLoading = false;
    }
    ngOnInit() {
        this.apiUrl = `/users/${this.session.user.id}/api-tokens`;
        super.ngOnInit();
    }
    generate() {
        this.isLoading = true;
        this.subscriptions.add(this.session.userStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(user => this.http.post(`/api-tokens`, { userId: user.id })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.isLoading = false;
        }))
            .subscribe(apiToken => {
            this.toastr.success(this.translate.instant('api-tokens.api-token-generated'));
            this.updateEvent.next();
            this.confirmation
                .show({
                type: 'warning',
                title: this.translate.instant('common.important'),
                text: `
                        ${this.translate.instant('common.please-keep-this-private-key')}
                        <br>
                        <b>${apiToken.privateKey}</b>
                        <br>${this.translate.instant('common.this-cannot-be-retrieved-once-lost')}
                    `,
                confirmText: 'Understood',
                showCancel: false,
            })
                .subscribe();
        }));
    }
    revoke(apiToken) {
        this.subscriptions.add(this.confirmation
            .show({
            type: 'danger',
            title: this.translate.instant('common.revoke-api-token'),
            text: `${this.translate.instant('common.are-you-sure-want-to-revoke-this-token')} <b>${this.translate.instant('common.it-cannot-be-undone')}<b>`,
            confirmText: this.translate.instant('common.revoke'),
            confirmClass: 'danger',
            showCancel: false,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(result => result === src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmationResult"].CONFIRMED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(() => this.http.delete(`/api-tokens/${apiToken.publicKey}`)))
            .subscribe(() => {
            this.toastr.success(this.translate.instant('common.api-token-revoked'));
            this.updateEvent.next();
        }));
    }
};
ApiTokensComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] },
    { type: src_app_common_services_toastr_service__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] },
    { type: src_app_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmationService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
ApiTokensComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'api-tokens',
        template: _raw_loader_api_tokens_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ApiTokensComponent);



/***/ }),

/***/ "dgJ/":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-billing/account-billing.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-page\">\n    <div class=\"row justify-content-between align-items-center pb-3\">\n        <div class=\"col-auto\">\n            <h5 class=\"mb-0\">{{ 'common.billing' | translate }}</h5>\n        </div>\n        <div class=\"col-auto d-flex justify-content-end\">\n            <ol class=\"breadcrumb px-0\">\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item active\">{{ 'common.billing' | translate }}</li>\n            </ol>\n        </div>\n    </div>\n</div>\n<ng-container *ngIf=\"session.userStream | async; let user\">\n    <div class=\"container pb-4 e2e-account-billing\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"headline\">{{ 'account-billing.account-billing' | translate }}</div>\n                <div class=\"row\">\n                    <div class=\"col-lg-9\">\n                        <div class=\"media media-info pr-2\">\n                            <div class=\"media-body pt-0\">\n                                <h6 class=\"mt-0\">{{ 'common.payment' | translate }}</h6>\n                                <p>{{ 'account-billing.manage-account-fee-payments' | translate }}</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-15\">\n                        <table class=\"table\">\n                            <tr>\n                                <td class=\"b-t-0\">{{ 'account-billing.next-payment-amount' | translate }}</td>\n                                <td class=\"b-t-0\">\n                                    <b\n                                        ><fee-preview\n                                            [currency]=\"billingCurrency\"\n                                            [type]=\"'account-fee'\"\n                                            [method]=\"'internal'\"\n                                            [amount]=\"'0.0'\"\n                                            [prefix]=\"true\"\n                                        ></fee-preview\n                                    ></b>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{ 'account-billing.next-payment-due' | translate }}</td>\n                                <td>\n                                    <b>{{ !!session.user.approvedAt ? (nextPaymentDue | date: 'mediumDate') : '-' }}</b>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{ 'account-billing.billing-currency' | translate }}</td>\n                                <td>\n                                    <currency-select\n                                        [currencyTypes]=\"['fiat', 'crypto']\"\n                                        [(currency)]=\"billingCurrency\"\n                                        [user]=\"user\"\n                                        (currencyChange)=\"billingCurrencyChange.next($event)\"\n                                    ></currency-select>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n                <div class=\"headline\">{{ 'account-billing.previous-statements' | translate }}</div>\n                <table class=\"table mb-0 account-bills-table\" *ngIf=\"payments.length > 0; else noEntries\">\n                    <thead>\n                        <tr>\n                            <th>\n                                <b>{{ 'common.id' | translate }}</b>\n                            </th>\n                            <th>\n                                <b>{{ 'common.date' | translate }}</b>\n                            </th>\n                            <th>\n                                <b>{{ 'common.amount' | translate }}</b>\n                            </th>\n                            <th>\n                                <b>{{ 'common.settled-amount' | translate }}</b>\n                            </th>\n                            <th>\n                                <b>{{ 'common.receipt' | translate }}</b>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr\n                            *ngFor=\"let payment of payments\"\n                            class=\"e2e-account-bill\"\n                            [ngClass]=\"{ 'table-danger': determineStatus(payment) === 'unpaid' }\"\n                        >\n                            <td\n                                [ngClass]=\"{\n                                    'text-danger': determineStatus(payment) === 'unpaid',\n                                    'text-monospace': determineStatus(payment) !== 'unpaid'\n                                }\"\n                            >\n                                {{ determineStatus(payment) !== 'unpaid' ? (payment.id | truncate: false:8:'') : 'Outstanding' }}\n                            </td>\n                            <td>{{ payment.invoiceDate | date: 'mediumDate' }}</td>\n                            <td>\n                                <b *ngIf=\"determineStatus(payment) !== 'free'; else freeCharge\"\n                                    >{{ payment.amount | amount: payment.currency.decimalPlaces }} {{ payment.currency.code }}</b\n                                >\n                            </td>\n                            <td>\n                                <span class=\"font-weight-bold\" *ngIf=\"determineStatus(payment) === 'paid'; else unsettled\">\n                                    {{ payment.transaction.fixedFee | amount: payment.transaction.currency.decimalPlaces }}\n                                    {{ payment.transaction.currency.code }}</span\n                                >\n                                <ng-template #unsettled>\n                                    <span *ngIf=\"determineStatus(payment) === 'unpaid'; else freeCharge\" class=\"text-muted\">{{\n                                        'common.unpaid' | translate\n                                    }}</span>\n                                </ng-template>\n                            </td>\n                            <td>\n                                <a\n                                    href\n                                    (click)=\"payment.invoice && openInvoiceModal(payment); $event.preventDefault()\"\n                                    [ngClass]=\"{ 'text-muted': !payment.invoice }\"\n                                    [ngbTooltip]=\"!payment.invoice ? 'Not available' : undefined\"\n                                    >{{ 'common.download' | translate }}</a\n                                >\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <ng-template #noEntries>\n                    <div class=\"row\">\n                        <div class=\"col d-flex justify-content-center align-items-center h-100\">\n                            <div class=\"px-sm-3 w-100 max-width-sm text-center mb-0\">\n                                <img src=\"/img/icons/refresh.svg\" class=\"img-sm mb-2\" />\n                                <h4 class=\"mb-1\">{{ 'common.no-previous-bills' | translate }}</h4>\n                                <p class=\"mb-0 text-gray\">{{ 'common.account-bills-are-charged-per-month' | translate }}</p>\n                            </div>\n                        </div>\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n<ng-template #freeCharge>\n    <b class=\"text-success text-uppercase\">{{ 'common.free' | translate }}</b>\n</ng-template>\n");

/***/ }),

/***/ "heGf":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AccountComponent = class AccountComponent {
};
AccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'account',
        template: '<router-outlet></router-outlet>',
    })
], AccountComponent);



/***/ }),

/***/ "i32w":
/*!*****************************************************************!*\
  !*** ./src/app/common/security-check/security-check.service.ts ***!
  \*****************************************************************/
/*! exports provided: SecurityCheckService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityCheckService", function() { return SecurityCheckService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/session.service */ "6g7h");
/* harmony import */ var _confirm_password_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-password.modal */ "iO5V");






let SecurityCheckService = class SecurityCheckService {
    constructor(ngbModal, session) {
        this.ngbModal = ngbModal;
        this.session = session;
    }
    /**
     * Asks the user for permission to do something that requires a higher scope than basic
     * Resolves if the check was successful or the permission is still granted from another request
     * @param scope The required scope
     */
    getScopePermission(scope) {
        // Resolve if token has already the correct scope
        if (this.session.hasTokenScope(scope)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(undefined);
        }
        const modal = this.ngbModal.open(_confirm_password_modal__WEBPACK_IMPORTED_MODULE_5__["ConfirmPasswordModalComponent"], {
            windowClass: 'modal-primary security-check-modal',
        });
        modal.componentInstance.scope = scope;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            modal.result
                .then(() => {
                observer.next();
                observer.complete();
            })
                .catch(() => {
                observer.complete();
            });
        });
    }
};
SecurityCheckService.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
SecurityCheckService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], SecurityCheckService);



/***/ }),

/***/ "jEA1":
/*!******************************************************!*\
  !*** ./src/app/account/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "HL7Y");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "WE53");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "uB96");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_common_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/common.mixin */ "s/H0");
/* harmony import */ var _common_services_avatar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/services/avatar.service */ "tYXW");
/* harmony import */ var _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/services/core/user.service */ "AxWo");
/* harmony import */ var _common_services_intercom_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/services/intercom.service */ "rSOl");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/services/toastr.service */ "N/y2");
/* harmony import */ var _common_services_token_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/services/token.service */ "JdTs");
/* harmony import */ var _store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/currencies/currencies.query */ "4pv/");


















let ProfileComponent = class ProfileComponent {
    constructor(http, toastr, userService, token, avatar, router, intercom, session, currenciesQuery, tokenService, translate) {
        this.http = http;
        this.toastr = toastr;
        this.userService = userService;
        this.token = token;
        this.avatar = avatar;
        this.router = router;
        this.intercom = intercom;
        this.session = session;
        this.currenciesQuery = currenciesQuery;
        this.tokenService = tokenService;
        this.translate = translate;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
        this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.isLoading = false;
        this.isUploading = false;
        this.avatarUploading = false;
        this.isEmailNotificationsUpdating = false;
        this.toCountryCallingCode = _common_common_mixin__WEBPACK_IMPORTED_MODULE_10__["toCountryCallingCode"];
        this.faCoin = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCoin"];
        this.faExclamationCircle = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faExclamationCircle"];
        this.faEnvelope = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEnvelope"];
        this.faUserCheck = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUserCheck"];
        this.faFileAlt = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFileAlt"];
        this.faImage = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faImage"];
        this.faInfoCircle = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faInfoCircle"];
        this.faExclamationTriangle = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faExclamationTriangle"];
        this.faUniversity = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUniversity"];
        this.faBell = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBell"];
    }
    ngOnInit() {
        this.preferredCurrency$ = this.currenciesQuery.preferredCurrency$;
        this.currencies$ = this.currenciesQuery.selectAll({
            filterBy: currency => ['fiat', 'crypto'].includes(currency.type),
        });
        this.subscriptions.add(
        // todo: might need a reloader here?
        this.fetchEvent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(() => this.http.get(`/users/${this.session.user.id}`)))
            .subscribe(user => {
            this.user = user;
        }));
        this.fetchEvent.next();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    goToVerification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['/verify']);
        });
    }
    uploadAvatar(avatar) {
        this.avatarUploading = true;
        this.http
            .request('POST', `/users/${this.user.id}/avatar`, {
            body: avatar,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'X-File-Name': encodeURIComponent(avatar.name),
                'Content-Type': avatar.type,
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(() => this.token.refresh()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.avatarUploading = false;
        }))
            .subscribe(() => {
            this.avatar.reload();
            this.fetchEvent.next();
            this.toastr.success(this.translate.instant('profile.avatar-updated'));
        });
    }
    deleteAvatar() {
        this.http
            .delete(`/users/${this.user.id}/avatar`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(() => this.token.refresh()))
            .subscribe(() => {
            this.avatar.reload();
            this.fetchEvent.next();
        });
    }
    updateEmailNotifications() {
        const previousState = !this.user.sendEmailNotifications;
        this.isEmailNotificationsUpdating = true;
        this.subscriptions.add(this.userService
            .changeSendEmailNotifications(this.user.id, this.user.sendEmailNotifications)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.isEmailNotificationsUpdating = false;
        }))
            .subscribe(() => {
            this.fetchEvent.next();
            this.toastr.success(this.translate.instant('common.email-notifications-updated'));
        }, () => {
            this.user.sendEmailNotifications = previousState;
        }));
    }
    changePreferredCurrency(currency) {
        this.subscriptions.add(this.session.userStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(user => user.preferredCurrency.code !== currency.code), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(user => this.userService.changePreferredCurrency(user.id, currency)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(() => this.tokenService.refresh()))
            .subscribe(() => {
            this.toastr.success(this.translate.instant('common.preferred-currency-changed'));
        }));
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_15__["ToastrService"] },
    { type: _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] },
    { type: _common_services_token_service__WEBPACK_IMPORTED_MODULE_16__["TokenService"] },
    { type: _common_services_avatar_service__WEBPACK_IMPORTED_MODULE_11__["AvatarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _common_services_intercom_service__WEBPACK_IMPORTED_MODULE_13__["IntercomService"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"] },
    { type: _store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_17__["CurrenciesQuery"] },
    { type: _common_services_token_service__WEBPACK_IMPORTED_MODULE_16__["TokenService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ProfileComponent);



/***/ }),

/***/ "jcJX":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common.module */ "a6Df");
/* harmony import */ var _account_billing_account_billing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-billing/account-billing.component */ "y2dp");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-routing.module */ "sGj0");
/* harmony import */ var _account_security_account_security_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-security/account-security.component */ "ACGU");
/* harmony import */ var _account_security_api_tokens_api_tokens_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-security/api-tokens/api-tokens.component */ "cFsQ");
/* harmony import */ var _account_security_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-security/change-password-form/change-password-form.component */ "7tD/");
/* harmony import */ var _account_security_logout_all_logout_all_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account-security/logout-all/logout-all.component */ "ncyD");
/* harmony import */ var _account_security_two_factor_two_factor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account-security/two-factor/two-factor.component */ "VGXk");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account.component */ "heGf");
/* harmony import */ var _profile_email_form_email_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/email-form/email-form.component */ "zc7i");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "jEA1");













let AccountModule = class AccountModule {
};
AccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            _account_security_two_factor_two_factor_component__WEBPACK_IMPORTED_MODULE_9__["TwoFactorComponent"],
            _profile_email_form_email_form_component__WEBPACK_IMPORTED_MODULE_11__["EmailFormComponent"],
            _account_security_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordFormComponent"],
            _account_security_logout_all_logout_all_component__WEBPACK_IMPORTED_MODULE_8__["LogoutAllComponent"],
            _account_security_account_security_component__WEBPACK_IMPORTED_MODULE_5__["AccountSecurityComponent"],
            _account_billing_account_billing_component__WEBPACK_IMPORTED_MODULE_3__["AccountBillingComponent"],
            _account_component__WEBPACK_IMPORTED_MODULE_10__["AccountComponent"],
            _account_security_api_tokens_api_tokens_component__WEBPACK_IMPORTED_MODULE_6__["ApiTokensComponent"],
        ],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"]],
    })
], AccountModule);



/***/ }),

/***/ "ncyD":
/*!*****************************************************************************!*\
  !*** ./src/app/account/account-security/logout-all/logout-all.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LogoutAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutAllComponent", function() { return LogoutAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_logout_all_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./logout-all.component.html */ "Q8y0");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/security-check/security-check.service */ "i32w");
/* harmony import */ var _common_services_logout_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/services/logout.service */ "2kWO");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/services/toastr.service */ "N/y2");











let LogoutAllComponent = class LogoutAllComponent {
    constructor(session, http, securityCheckService, logoutService, toastr, translate) {
        this.session = session;
        this.http = http;
        this.securityCheckService = securityCheckService;
        this.logoutService = logoutService;
        this.toastr = toastr;
        this.translate = translate;
        this.isLoading = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    logoutAllDevices() {
        this.subscriptions.add(this.securityCheckService
            .getScopePermission('securitySettings')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(() => {
            this.isLoading = true;
            return this.http.post(`/users/${this.session.user.id}`, {
                id: Math.floor(Math.random() * 10000),
                jsonrpc: '2.0',
                method: 'logoutAllDevices',
            }, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json-rpc' }),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.isLoading = false;
        }))
            .subscribe(() => {
            this.toastr.success(this.translate.instant('logout-all.logged-out-from-all-devices'));
            this.logoutService.logout().subscribe(() => undefined);
        }));
    }
};
LogoutAllComponent.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_7__["SecurityCheckService"] },
    { type: _common_services_logout_service__WEBPACK_IMPORTED_MODULE_8__["LogoutService"] },
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
LogoutAllComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logout-all',
        template: _raw_loader_logout_all_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], LogoutAllComponent);



/***/ }),

/***/ "qw5i":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-security/account-security.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-page\">\n    <div class=\"row justify-content-between align-items-center pb-3\">\n        <div class=\"col-auto\">\n            <h5 class=\"mb-0\">{{ 'common.security' | translate }}</h5>\n        </div>\n        <div class=\"col-auto d-flex justify-content-end\">\n            <ol class=\"breadcrumb px-0\">\n                <li class=\"breadcrumb-item\">\n                    <a [routerLink]=\"['/dashboard']\">{{ 'common.home' | translate }}</a>\n                </li>\n                <li class=\"breadcrumb-item active\">{{ 'common.security' | translate }}</li>\n            </ol>\n        </div>\n    </div>\n</div>\n<div class=\"container pb-4\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"headline\">{{ 'common.password' | translate }}</div>\n            <div class=\"row e2e-reset-password\">\n                <div class=\"col-lg-9\">\n                    <div class=\"media media-info pr-2\">\n                        <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faLockAlt\"></fa-icon>\n                        <div class=\"media-body pt-0\">\n                            <h6 class=\"mt-0\">{{ 'common.change-password' | translate }}</h6>\n                            <p>\n                                {{ 'common.your-password-passphrases' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-15\">\n                    <div class=\"form-block max-width-md\">\n                        <change-password-form></change-password-form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"headline\">{{ 'account-security.2-factor-authentication' | translate }}</div>\n            <div class=\"row e2e-two-factor\">\n                <div class=\"col-lg-9\">\n                    <div class=\"media media-info pr-2\">\n                        <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faMobile\"></fa-icon>\n                        <div class=\"media-body pt-0\">\n                            <h6 class=\"mt-0\">{{ 'account-security.increase-security' | translate }}</h6>\n                            <p>\n                                {{ 'common.we-recommend-using-2-factor-authentication' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-15\">\n                    <div class=\"form-block max-width-md\">\n                        <two-factor></two-factor>\n                    </div>\n                </div>\n            </div>\n            <div class=\"headline\">{{ 'common.logout-from-all-devices' | translate }}</div>\n            <div class=\"row e2e-logout-all-devices\">\n                <div class=\"col-lg-9\">\n                    <div class=\"media media-info pr-2\">\n                        <fa-icon class=\"d-none d-lg-flex mr-3 mt-1\" [icon]=\"faShieldAlt\"></fa-icon>\n                        <div class=\"media-body pt-0\">\n                            <h6 class=\"mt-0\">{{ 'account-security.clear-all-sessions' | translate }}</h6>\n                            <p>\n                                {{ 'common.use-this-feature' | translate }}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-15\">\n                    <div class=\"form-block max-width-md\">\n                        <logout-all></logout-all>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "sGj0":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/logged-in.auth-guard */ "59Zp");
/* harmony import */ var _account_billing_account_billing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-billing/account-billing.component */ "y2dp");
/* harmony import */ var _account_billing_account_billing_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-billing/account-billing.resolver */ "aYPB");
/* harmony import */ var _account_security_account_security_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-security/account-security.component */ "ACGU");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.component */ "heGf");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "jEA1");









const routes = [
    {
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"],
        canActivate: [_common_logged_in_auth_guard__WEBPACK_IMPORTED_MODULE_3__["LoggedInAuthGuard"]],
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
            { path: 'security', component: _account_security_account_security_component__WEBPACK_IMPORTED_MODULE_6__["AccountSecurityComponent"] },
            {
                path: 'billing',
                component: _account_billing_account_billing_component__WEBPACK_IMPORTED_MODULE_4__["AccountBillingComponent"],
                resolve: { data: _account_billing_account_billing_resolver__WEBPACK_IMPORTED_MODULE_5__["AccountBillingResolver"] },
            },
        ],
    },
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_account_billing_account_billing_resolver__WEBPACK_IMPORTED_MODULE_5__["AccountBillingResolver"]],
    })
], AccountRoutingModule);



/***/ }),

/***/ "syFb":
/*!************************************************************!*\
  !*** ./src/app/common/services/account-billing.service.ts ***!
  \************************************************************/
/*! exports provided: AccountBillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountBillsService", function() { return AccountBillsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let AccountBillsService = class AccountBillsService {
    constructor(http) {
        this.http = http;
    }
    fetchAccountBills(userId) {
        return this.http.get(`/users/${userId}/account-bills`);
    }
    fetchBillingCurrency(userId) {
        return this.http.get(`/users/${userId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response.billingCurrency));
    }
};
AccountBillsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AccountBillsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], AccountBillsService);



/***/ }),

/***/ "y2dp":
/*!**********************************************************************!*\
  !*** ./src/app/account/account-billing/account-billing.component.ts ***!
  \**********************************************************************/
/*! exports provided: AccountBillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountBillingComponent", function() { return AccountBillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_billing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account-billing.component.html */ "dgJ/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "WE53");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! currency-symbol-map */ "1yQU");
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(currency_symbol_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/addMonths */ "dLU1");
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/parseISO */ "4+6U");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/services/core/user.service */ "AxWo");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/services/toastr.service */ "N/y2");















let AccountBillingComponent = class AccountBillingComponent {
    constructor(session, translate, route, toastr, userService) {
        this.session = session;
        this.translate = translate;
        this.route = route;
        this.toastr = toastr;
        this.userService = userService;
        this.payments = [];
        this.billingCurrencyChange = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.currencySymbolMap = currency_symbol_map__WEBPACK_IMPORTED_MODULE_7__["currencySymbolMap"];
        this.faUserPlus = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUserPlus"];
        this.now = new Date();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"]();
    }
    get nextPaymentDue() {
        return this.payments.length > 0 ? Object(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_9__["default"])(this.payments[0].invoiceDate), 1) : this.now;
    }
    ngOnInit() {
        this.route.data.subscribe(({ data }) => {
            if (data) {
                this.payments = data.payments;
                this.billingCurrency = data.billingCurrency;
            }
        });
        this.subscriptions.add(this.billingCurrencyChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(currency => this.userService.changeBillingCurrency(this.session.user.id, currency)))
            .subscribe(() => {
            this.toastr.success(this.translate.instant('account-billing.billing-currency-updated'));
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    determineStatus(accountBill) {
        if (new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(accountBill.amount).eq(0)) {
            return 'free';
        }
        if (!accountBill.transaction) {
            return 'unpaid';
        }
        return 'paid';
    }
    openInvoiceModal(payment) {
        if (!payment.invoice) {
            return;
        }
        window.open(payment.invoice.signedUrl, '_blank', 'noopener');
    }
};
AccountBillingComponent.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_14__["ToastrService"] },
    { type: _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] }
];
AccountBillingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'account-billing',
        template: _raw_loader_account_billing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AccountBillingComponent);



/***/ }),

/***/ "zc7i":
/*!********************************************************************!*\
  !*** ./src/app/account/profile/email-form/email-form.component.ts ***!
  \********************************************************************/
/*! exports provided: EmailFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailFormComponent", function() { return EmailFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_email_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./email-form.component.html */ "0R5k");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/security-check/security-check.service */ "i32w");
/* harmony import */ var _common_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/services/alert.service */ "0ZVX");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/services/toastr.service */ "N/y2");











let EmailFormComponent = class EmailFormComponent {
    constructor(securityCheckService, Toastr, session, http, alertService, translate) {
        this.securityCheckService = securityCheckService;
        this.Toastr = Toastr;
        this.session = session;
        this.http = http;
        this.alertService = alertService;
        this.translate = translate;
        this.isLoading = false;
        this.email = '';
        this.disposables = new Set();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
    }
    ngOnChanges() {
        this.email = this.user.email || '';
    }
    ngOnDestroy() {
        this.clearAlerts();
        this.subscriptions.unsubscribe();
    }
    submit() {
        if (!this.emailForm.valid) {
            throw new Error(this.translate.instant('common.form-invalid'));
        }
        this.clearAlerts();
        this.subscriptions.add(this.securityCheckService
            .getScopePermission('securitySettings')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(() => {
            this.isLoading = true;
            return this.http.post(`/users/${this.user.id}`, {
                id: Math.floor(Math.random() * 10000),
                jsonrpc: '2.0',
                method: 'sendEmailConfirmation',
                params: {
                    email: this.email,
                },
            }, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json-rpc' }),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.isLoading = false;
        }))
            .subscribe(() => {
            this.Toastr.success(this.translate.instant('email-form.email-sent-please-check-your-inbox'));
            this.email = '';
            this.emailForm.resetForm();
        }, error => {
            if (error.status === 409) {
                this.disposables.add(this.alertService.add({
                    message: this.translate.instant('common.the-email-is-already-used-by-another-account'),
                    severity: 'danger',
                }));
            }
        }));
    }
    clearAlerts() {
        for (const disposable of this.disposables) {
            disposable.dispose();
        }
    }
};
EmailFormComponent.ctorParameters = () => [
    { type: _common_security_check_security_check_service__WEBPACK_IMPORTED_MODULE_7__["SecurityCheckService"] },
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _common_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
EmailFormComponent.propDecorators = {
    emailForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['emailForm',] }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
EmailFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'email-form',
        template: _raw_loader_email_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], EmailFormComponent);



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map