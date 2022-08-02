(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+/Qi":
/*!*******************************************************!*\
  !*** ./src/app/common/copy-btn/copy-btn.component.ts ***!
  \*******************************************************/
/*! exports provided: CopyButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyButtonComponent", function() { return CopyButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_copy_btn_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./copy-btn.component.html */ "JHZC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _copy_icon_copy_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../copy-icon/copy-icon.component */ "69Ec");
/* harmony import */ var _services_copier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/copier.service */ "RT6g");






let CopyButtonComponent = class CopyButtonComponent extends _copy_icon_copy_icon_component__WEBPACK_IMPORTED_MODULE_4__["CopyIconComponent"] {
    constructor(copier, changeDetector, translate) {
        super(copier, changeDetector);
        this.translate = translate;
    }
};
CopyButtonComponent.ctorParameters = () => [
    { type: _services_copier_service__WEBPACK_IMPORTED_MODULE_5__["CopierService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
CopyButtonComponent.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
CopyButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'copy-btn',
        template: _raw_loader_copy_btn_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
    })
], CopyButtonComponent);



/***/ }),

/***/ "+bKJ":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/not-found/not-found.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"mt-5 row justify-content-center\">\n        <div class=\"col-md-12 col-24\">\n            <h1>🧐 404!</h1>\n            <h4 class=\"pt-3\">{{ 'common.you-lost' | translate }}</h4>\n            <p>\n                {{ 'common.the-page' | translate }}\n            </p>\n            <a class=\"btn btn-outline-secondary\" [routerLink]=\"['/dashboard']\">{{ 'common.back' | translate }}</a>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "/HDL":
/*!*******************************************************************************!*\
  !*** ./src/app/common/currency-select-tab/currency-select-tab.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-toggle::after {\n  content: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2N1cnJlbmN5LXNlbGVjdC10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoiY3VycmVuY3ktc2VsZWN0LXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgY29udGVudDogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "/Vpj":
/*!*****************************************************************!*\
  !*** ./src/app/common/validators/custom-validator.directive.ts ***!
  \*****************************************************************/
/*! exports provided: CustomValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidatorDirective", function() { return CustomValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var CustomValidatorDirective_1;



let CustomValidatorDirective = CustomValidatorDirective_1 = class CustomValidatorDirective {
    validate(control) {
        if (this.customValidator(control.value)) {
            return { customError: true };
        }
        return null;
    }
};
CustomValidatorDirective.propDecorators = {
    customValidator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
CustomValidatorDirective = CustomValidatorDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[customValidator]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: CustomValidatorDirective_1, multi: true }],
    })
], CustomValidatorDirective);



/***/ }),

/***/ "/e3T":
/*!************************************************************!*\
  !*** ./src/app/common/models/accounting/currency.model.ts ***!
  \************************************************************/
/*! exports provided: Currency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Currency", function() { return Currency; });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "aSns");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);


const style = getComputedStyle(document.body);
const color = color__WEBPACK_IMPORTED_MODULE_1__(style.getPropertyValue('--primary').trim());
class Currency {
    constructor(data) {
        Object.assign(this, data);
    }
    static convert(amount, baseCurrency, counterCurrency, spreadFee, spreadUp = true) {
        let exchangeRate = Currency.calculateExchangeRate(baseCurrency, counterCurrency);
        if (baseCurrency.code !== counterCurrency.code && spreadFee && spreadFee.relative) {
            if (spreadUp) {
                exchangeRate = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(exchangeRate).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(1).plus(spreadFee.relative));
            }
            else {
                exchangeRate = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(exchangeRate).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(1).minus(spreadFee.relative));
            }
        }
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(amount).times(exchangeRate).toFixed(8, 1);
    }
    static calculateExchangeRate(baseCurrency, counterCurrency) {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(counterCurrency.exchangeRate).div(baseCurrency.exchangeRate);
    }
    getColor(factor = 0) {
        return this.color || color.lighten((factor % 7) * 0.08).hex();
    }
}


/***/ }),

/***/ "/olc":
/*!*****************************************************!*\
  !*** ./src/app/common/welcome/welcome.component.ts ***!
  \*****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_welcome_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./welcome.component.html */ "9aJX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/session.service */ "6g7h");






let WelcomeComponent = class WelcomeComponent {
    constructor(session, activeModal) {
        this.session = session;
        this.activeModal = activeModal;
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].displayName;
    }
    get user() {
        return this.session.user;
    }
    close() {
        this.activeModal.close();
    }
    dismiss() {
        this.activeModal.dismiss();
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
];
WelcomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'welcome',
        template: _raw_loader_welcome_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], WelcomeComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kevin/Desktop/dev/aerapass/aerapass/packages/client/src/main.ts */"zUnb");


/***/ }),

/***/ "0ZVX":
/*!**************************************************!*\
  !*** ./src/app/common/services/alert.service.ts ***!
  \**************************************************/
/*! exports provided: AlertTag, AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertTag", function() { return AlertTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "WE53");



var AlertTag;
(function (AlertTag) {
    AlertTag["VERIFICATION"] = "verification";
})(AlertTag || (AlertTag = {}));
let AlertService = class AlertService {
    constructor() {
        this.alerts = [];
    }
    add(alert) {
        if (!alert.icon) {
            alert.icon = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBell"];
        }
        this.alerts.push(alert);
        return {
            dispose: () => {
                this.remove(alert);
            },
        };
    }
    remove(target) {
        const index = this.alerts.indexOf(target);
        if (index !== -1) {
            this.alerts.splice(index, 1);
        }
    }
    clearByTag(tag) {
        let index;
        do {
            index = this.alerts.findIndex(alert => alert.tag === tag);
            if (index !== -1) {
                this.alerts.splice(index, 1);
            }
        } while (index !== -1);
    }
    clear() {
        this.alerts = [];
    }
};
AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AlertService);



/***/ }),

/***/ "0m0A":
/*!*************************************************************!*\
  !*** ./src/app/app/status-message/status-message.module.ts ***!
  \*************************************************************/
/*! exports provided: StatusMessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusMessageModule", function() { return StatusMessageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/common.module */ "a6Df");
/* harmony import */ var _status_message_outlet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status-message-outlet.component */ "NOHY");
/* harmony import */ var _status_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status-message.component */ "CGvB");
/* harmony import */ var _status_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status-message.service */ "pQbz");






let StatusMessageModule = class StatusMessageModule {
};
StatusMessageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_status_message_component__WEBPACK_IMPORTED_MODULE_4__["StatusMessageComponent"], _status_message_outlet_component__WEBPACK_IMPORTED_MODULE_3__["StatusMessageOutletComponent"]],
        providers: [_status_message_service__WEBPACK_IMPORTED_MODULE_5__["StatusMessageService"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_status_message_component__WEBPACK_IMPORTED_MODULE_4__["StatusMessageComponent"], _status_message_outlet_component__WEBPACK_IMPORTED_MODULE_3__["StatusMessageOutletComponent"]],
    })
], StatusMessageModule);



/***/ }),

/***/ "1LI3":
/*!***************************************************************!*\
  !*** ./src/app/common/validators/name-validator.directive.ts ***!
  \***************************************************************/
/*! exports provided: NameValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameValidatorDirective", function() { return NameValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var NameValidatorDirective_1;



let NameValidatorDirective = NameValidatorDirective_1 = class NameValidatorDirective {
    validate(control) {
        var _a;
        if (!!((_a = control.value) === null || _a === void 0 ? void 0 : _a.match(/[0-9!$%^&*()_+|~=`{}[:;<>?@#\]]/g))) {
            return { nameError: true };
        }
        return null;
    }
};
NameValidatorDirective = NameValidatorDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[nameValidator]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: NameValidatorDirective_1, multi: true }],
    })
], NameValidatorDirective);



/***/ }),

/***/ "2ETP":
/*!*****************************************************!*\
  !*** ./src/app/app/core/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "ieVf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_countries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/countries */ "Gq6/");
/* harmony import */ var _common_services_logout_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/services/logout.service */ "2kWO");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/services/toastr.service */ "N/y2");
/* harmony import */ var _logout_timer_logout_timer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../logout-timer/logout-timer.service */ "l9K3");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../menu/menu.service */ "jRoP");














let HeaderComponent = class HeaderComponent {
    constructor(logoutService, toastr, session, router, menuService, logoutTimerService, translate) {
        this.logoutService = logoutService;
        this.toastr = toastr;
        this.session = session;
        this.router = router;
        this.menuService = menuService;
        this.logoutTimerService = logoutTimerService;
        this.translate = translate;
        this.faAngleDown = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleDown"];
        this.faBars = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBars"];
        this.faSearch = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"];
        this.faUserCircle = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUserCircle"];
        this.faClock = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faClock"];
        this.countriesSortedByName = src_app_common_countries__WEBPACK_IMPORTED_MODULE_8__["countriesSortedByName"];
        this.languages = ['en', 'kr'];
        this.sessionTimeLeft$ = this.logoutTimerService.leftInMinutes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(minutes => {
            if (minutes > 60) {
                const hh = Math.floor(minutes / 60);
                const mm = minutes % 60;
                return (hh ? hh + 'h' : '') + (hh && mm ? ' ' : '') + (mm ? mm + 'min' + (mm === 1 ? '' : 's') : '');
            }
            return minutes + 'min' + (minutes === 1 ? '' : 's');
        }));
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"])).subscribe(() => {
            this.menuService.mobileNav = _menu_menu_service__WEBPACK_IMPORTED_MODULE_13__["MobileNavLayout"].HIDDEN;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    logout() {
        this.subscriptions.add(this.logoutService.logout().subscribe(() => {
            this.toastr.success(this.translate.instant('common.you-have-been-logged-out'));
        }));
    }
    openMobileNav() {
        this.menuService.mobileNav = _menu_menu_service__WEBPACK_IMPORTED_MODULE_13__["MobileNavLayout"].VISIBLE;
        this.menuService.sidebar = _menu_menu_service__WEBPACK_IMPORTED_MODULE_13__["SidebarLayout"].DEFAULT;
    }
    toggleSidebar() {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.menuService.sidebar === _menu_menu_service__WEBPACK_IMPORTED_MODULE_13__["SidebarLayout"].TOGGLED
            ? (this.menuService.sidebar = _menu_menu_service__WEBPACK_IMPORTED_MODULE_13__["SidebarLayout"].DEFAULT)
            : (this.menuService.sidebar = _menu_menu_service__WEBPACK_IMPORTED_MODULE_13__["SidebarLayout"].TOGGLED);
    }
    changeLanguage(language) {
        this.translate.use(language);
        localStorage.setItem('lang', language);
    }
    getCountryEmoji(lang) {
        var _a;
        let alpha2;
        switch (lang) {
            case 'en':
                alpha2 = 'US';
                break;
            case 'kr':
                alpha2 = 'KR';
                break;
            default:
                break;
        }
        return ((_a = this.countriesSortedByName.find(country => country.alpha2 === alpha2)) === null || _a === void 0 ? void 0 : _a.emoji) || '';
    }
    mapCountryName(lang) {
        switch (lang) {
            case 'en':
                return 'English';
            case 'kr':
                return 'Korean';
            default:
                return '';
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _common_services_logout_service__WEBPACK_IMPORTED_MODULE_9__["LogoutService"] },
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _menu_menu_service__WEBPACK_IMPORTED_MODULE_13__["MenuService"] },
    { type: _logout_timer_logout_timer_service__WEBPACK_IMPORTED_MODULE_12__["LogoutTimerService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], HeaderComponent);



/***/ }),

/***/ "2TCG":
/*!**********************************************************************!*\
  !*** ./src/app/app/core/menu/menu-profile/menu-profile.component.ts ***!
  \**********************************************************************/
/*! exports provided: MenuProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuProfileComponent", function() { return MenuProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu-profile.component.html */ "hqXw");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/services/core/user.service */ "AxWo");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/services/toastr.service */ "N/y2");
/* harmony import */ var _common_services_token_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../common/services/token.service */ "JdTs");
/* harmony import */ var _store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../store/wallets/wallets.query */ "O9sj");















let MenuProfileComponent = class MenuProfileComponent {
    constructor(session, toastr, userService, tokenService, router, walletsQuery, translate) {
        this.session = session;
        this.toastr = toastr;
        this.userService = userService;
        this.tokenService = tokenService;
        this.router = router;
        this.walletsQuery = walletsQuery;
        this.translate = translate;
        this.faAngleDown = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faAngleDown"];
        this.isOpen = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].appName;
        this.user$ = this.session.userStream;
        this.wallets$ = this.walletsQuery.filteredBalances$;
        this.currentBalance$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(this.walletsQuery.selectAll(), this.session.userStream).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(([wallets, user]) => {
            var _a;
            return ((_a = wallets.find(wallet => wallet.currency.code === user.preferredCurrency.code)) === null || _a === void 0 ? void 0 : _a.availableBalance) ||
                '0.00';
        }));
        this.subscriptions.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"])).subscribe(() => {
            this.isOpen = false;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    changePreferredCurrency(currency) {
        if (this.appName === 'sgpmx') {
            return;
        }
        this.subscriptions.add(this.session.userStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(user => user.preferredCurrency.code !== currency.code), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(user => this.userService.changePreferredCurrency(user.id, currency)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(() => this.tokenService.refresh()))
            .subscribe(() => {
            this.isOpen = false;
            this.toastr.success(this.translate.instant('common.preferred-currency-changed'));
        }));
    }
};
MenuProfileComponent.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"] },
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_12__["ToastrService"] },
    { type: _common_services_core_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _common_services_token_service__WEBPACK_IMPORTED_MODULE_13__["TokenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_14__["WalletsQuery"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
MenuProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'menu-profile',
        template: _raw_loader_menu_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('toggleBalances', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('280ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('280ms ease-out')),
            ]),
        ],
    })
], MenuProfileComponent);



/***/ }),

/***/ "2fhi":
/*!*******************************************!*\
  !*** ./src/app/common/capitalize.pipe.ts ***!
  \*******************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



let CapitalizePipe = class CapitalizePipe {
    transform(value) {
        if (typeof value !== 'string') {
            return value;
        }
        return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["capitalize"])(value);
    }
};
CapitalizePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'capitalize' })
], CapitalizePipe);



/***/ }),

/***/ "2kWO":
/*!***************************************************!*\
  !*** ./src/app/common/services/logout.service.ts ***!
  \***************************************************/
/*! exports provided: LogoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutService", function() { return LogoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./session.service */ "6g7h");








let LogoutService = class LogoutService {
    constructor(http, session, ngbModal, router) {
        this.http = http;
        this.session = session;
        this.ngbModal = ngbModal;
        this.router = router;
    }
    logout() {
        if (!this.logoutRequest) {
            this.logoutRequest = (this.session.hasValidToken() && !!this.session.refreshToken
                ? this.http
                    .delete(`/users/${this.session.user.id}/refresh-tokens/${this.session.refreshToken.id}`, {
                    headers: { 'X-No-Logout': 'true' },
                })
                    // mute errors of refresh token deletion, logout should happen anyways
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(undefined)))
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(undefined)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => {
                if (this.session.getExpiryTimeInSeconds() < 15) {
                    this.router.navigateByUrl(this.router.parseUrl('/login?redirect=' + this.router.url));
                }
                else {
                    this.router.navigate(['/login']);
                }
                this.session.logout();
                this.ngbModal.dismissAll();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
                this.logoutRequest = undefined;
            }));
        }
        return this.logoutRequest;
    }
};
LogoutService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LogoutService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], LogoutService);



/***/ }),

/***/ "2qAm":
/*!***********************************************************************!*\
  !*** ./src/app/common/beneficiary-form/beneficiary-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: BeneficiaryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryFormComponent", function() { return BeneficiaryFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_beneficiary_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./beneficiary-form.component.html */ "EBvh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_core_user_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/core/user.model */ "vk+e");
/* harmony import */ var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/confirmation.service */ "fTmd");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/toastr.service */ "N/y2");












let BeneficiaryFormComponent = class BeneficiaryFormComponent {
    constructor(http, toastr, activeModal, confirmation, translate) {
        this.http = http;
        this.toastr = toastr;
        this.activeModal = activeModal;
        this.confirmation = confirmation;
        this.translate = translate;
        this.compact = false;
        this.fixateType = false;
        this.hideFields = [];
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onDiscard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.copy = {};
        this.isSaving = false;
        this.isDeleting = false;
        this.isUpdatingVerification = false;
        this.beneficiaryTypes = ['template', 'deposit-instruction'];
        this.beneficiaryMethods = ['swift', 'local', 'crypto'];
        this.currencies = [];
        this.owner = undefined;
        this.ownerAutocomplete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.legalEntitiesSteam = this.ownerAutocomplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(search => this.http.get('/users', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('limit', '25').set('search', search),
        })));
        this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.fetchCurrenciesEvent = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(this.fetchEvent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(() => this.http.get(`/beneficiaries/${this.item.id}`)))
            .subscribe(beneficiary => {
            this.item = beneficiary;
            this.copy = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.item);
            if (this.item.user) {
                this.owner = new _models_core_user_model__WEBPACK_IMPORTED_MODULE_9__["User"](this.item.user);
            }
            this.fetchCurrenciesEvent.next();
        }));
        this.subscriptions.add(this.fetchCurrenciesEvent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(() => this.http.get('/currencies?limit=100', {
            params: {
                'filter.type': this.copy.method === 'crypto' ? 'crypto' : 'fiat',
            },
        })))
            .subscribe(response => {
            this.currencies = response.data;
            if (this.copy && this.copy.currency) {
                // don't break reference
                this.copy.currency = this.currencies.find(c => c.code === this.copy.currency.code) || null;
            }
        }));
        if (this.item && this.item.id) {
            this.fetchEvent.next();
        }
        else {
            this.copy = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.item);
            if (this.item.user) {
                this.owner = new _models_core_user_model__WEBPACK_IMPORTED_MODULE_9__["User"](this.item.user);
            }
            this.fetchCurrenciesEvent.next();
        }
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    delete() {
        this.subscriptions.add(this.confirmation
            .show({
            type: 'danger',
            text: `${this.translate.instant('common.are-you-sure-want-to-delete-beneficiary')}<br>${this.translate.instant('common.you-cant-undo-action')}`,
            confirmText: this.translate.instant('common.delete'),
            confirmClass: 'danger',
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(result => result === _services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmationResult"].CONFIRMED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(() => {
            this.isDeleting = true;
            return this.http.delete(`/beneficiaries/${this.item.id}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.isDeleting = false;
        }))
            .subscribe(() => {
            this.onDelete.emit();
            this.toastr.success(this.translate.instant('common.beneficiary-deleted'));
        }));
    }
    submit() {
        var _a, _b, _c;
        this.beneficiaryDetailsForm.submit();
        if (this.beneficiaryForm.invalid || !this.beneficiaryDetailsForm.isValid()) {
            throw new Error(this.translate.instant('common.form-invalid'));
        }
        const body = Object.assign(Object.assign({}, this.copy), { user: this.owner ? { id: (_a = this.owner) === null || _a === void 0 ? void 0 : _a.id } : null, currency: {
                code: (_c = (_b = this.copy.currency) === null || _b === void 0 ? void 0 : _b.code) !== null && _c !== void 0 ? _c : null,
            } });
        this.isSaving = true;
        this.subscriptions.add((this.item.id
            ? this.http.put(`/beneficiaries/${this.item.id}`, body)
            : this.http.post('/beneficiaries', body))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(beneficiary => (this.item = beneficiary)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.isSaving = false;
        }))
            .subscribe(() => {
            this.toastr.success(`${this.copy.id
                ? this.translate.instant('common.beneficiary-updated')
                : this.translate.instant('common.beneficiary-created')}`);
            this.fetchEvent.next();
            this.onSave.emit();
        }));
    }
    onChangeMethod(method) {
        switch (method) {
            case 'swift':
            case 'local':
                if (this.copy.currency && this.copy.currency.type !== 'fiat') {
                    this.copy.currency = undefined;
                }
                break;
            case 'crypto':
                if (this.copy.currency && this.copy.currency.type !== 'crypto') {
                    this.copy.currency = undefined;
                }
                break;
        }
        this.fetchCurrenciesEvent.next();
    }
};
BeneficiaryFormComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] },
    { type: _services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
BeneficiaryFormComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    compact: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    fixateType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    hideFields: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onSave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onDiscard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    beneficiaryForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['beneficiaryForm',] }],
    beneficiaryDetailsForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['beneficiaryDetailsForm',] }],
    beneficiaryMethods: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
BeneficiaryFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'beneficiary-form',
        template: _raw_loader_beneficiary_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BeneficiaryFormComponent);



/***/ }),

/***/ "2xA4":
/*!****************************************************************!*\
  !*** ./src/app/common/validators/color-validator.directive.ts ***!
  \****************************************************************/
/*! exports provided: ColorValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorValidatorDirective", function() { return ColorValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var validator_lib_isHexColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validator/lib/isHexColor */ "RSp8");
/* harmony import */ var validator_lib_isHexColor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isHexColor__WEBPACK_IMPORTED_MODULE_3__);
var ColorValidatorDirective_1;




let ColorValidatorDirective = ColorValidatorDirective_1 = class ColorValidatorDirective {
    validate(control) {
        const color = control.value;
        if (color && !validator_lib_isHexColor__WEBPACK_IMPORTED_MODULE_3___default()(color)) {
            return { colorError: true };
        }
        return null;
    }
};
ColorValidatorDirective = ColorValidatorDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[colorValidator][formControlName], [colorValidator][formControl], [colorValidator][ngModel]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: ColorValidatorDirective_1, multi: true }],
    })
], ColorValidatorDirective);



/***/ }),

/***/ "2xS+":
/*!****************************************************!*\
  !*** ./src/app/common/match-password.directive.ts ***!
  \****************************************************/
/*! exports provided: MatchPasswordDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPasswordDirective", function() { return MatchPasswordDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var MatchPasswordDirective_1;



let MatchPasswordDirective = MatchPasswordDirective_1 = class MatchPasswordDirective {
    constructor(el) {
        this.el = el;
    }
    validate() {
        return this.el.nativeElement.value !== this.matchPassword ? { matchPassword: true } : null;
    }
};
MatchPasswordDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
MatchPasswordDirective.propDecorators = {
    matchPassword: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
MatchPasswordDirective = MatchPasswordDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[matchPassword]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: MatchPasswordDirective_1, multi: true }],
    })
], MatchPasswordDirective);



/***/ }),

/***/ "2ytL":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/core/logout-timer/logout-timer-modal.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ 'common.session-expiration' | translate }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-body text-center\">\n    <img src=\"/img/icons/refresh.svg\" class=\"img-md my-3\" />\n    <h4 class=\"text-primary mb-3\">{{ 'common.safety-measure' | translate }}</h4>\n    <p>\n        {{ 'common.session-about-to-expire' | translate }}\n        <a href (click)=\"$event.preventDefault(); refresh(); activeModal.dismiss()\">{{ 'common.keep-me-logged-in' | translate }}</a>\n        {{ 'common.to' | translate | lowercase }} {{ 'common.extend-session' | translate }}\n    </p>\n</div>\n<div class=\"modal-footer flex-column flex-md-row justify-content-center justify-content-md-end\">\n    <button class=\"btn btn-default btn-w-sm\" (click)=\"logout()\">{{ 'common.log-out' | translate }}</button>\n    <button class=\"btn btn-primary btn-w-sm ml-1\" (click)=\"refresh(); activeModal.dismiss()\">{{ 'common.keep-me-logged-in' | translate }}</button>\n</div>\n");

/***/ }),

/***/ "3CWR":
/*!*************************************************************************************!*\
  !*** ./src/app/common/profile-documents/user-file-form/user-file-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UserFileFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFileFormComponent", function() { return UserFileFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_file_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-file-form.component.html */ "GmPh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common.mixin */ "s/H0");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toastr.service */ "N/y2");










let UserFileFormComponent = class UserFileFormComponent {
    constructor(http, toastr, activeModal, translate) {
        this.http = http;
        this.toastr = toastr;
        this.activeModal = activeModal;
        this.translate = translate;
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.toStartCase = _common_mixin__WEBPACK_IMPORTED_MODULE_8__["toStartCase"];
        this.copy = {};
        this.types = ['identity', 'address', 'biometrics', 'selfie', 'registration-letter', 'other'];
        this.isSaving = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
    }
    ngOnInit() {
        this.copy = Object.assign({}, this.file.userFile);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    mapTypes(type) {
        switch (type) {
            case 'identity':
                return 'proof-of-identity';
            case 'address':
                return 'proof-of-address';
            case 'biometrics':
                return 'biometric-video';
            default:
                return type;
        }
    }
    save() {
        if (this.userFileForm.invalid) {
            this.toastr.error(this.translate.instant('common.form-invalid'));
            return;
        }
        this.isSaving = true;
        this.http
            .put(`/users/${this.user.id}/files/${this.file.id}`, this.copy)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.isSaving = false;
        }))
            .subscribe(() => {
            this.toastr.success(this.translate.instant('user-file-form.file-updated'));
            this.onSave.emit();
        });
    }
};
UserFileFormComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
UserFileFormComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onSave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    userFileForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['userFileForm',] }]
};
UserFileFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'user-file-form',
        template: _raw_loader_user_file_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserFileFormComponent);



/***/ }),

/***/ "3DHm":
/*!************************************************************!*\
  !*** ./src/app/common/services/core/statistics.service.ts ***!
  \************************************************************/
/*! exports provided: StatisticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsService", function() { return StatisticsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let StatisticsService = class StatisticsService {
    constructor(http) {
        this.http = http;
    }
    getOnlineUsersCount() {
        return this.http
            .head('/admin/statistics/online-users', { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response && response.headers.has('x-total-count') ? ~~response.headers.get('x-total-count') : 0));
    }
    getOnlineUsers() {
        return this.http.get('/admin/statistics/online-users');
    }
};
StatisticsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
StatisticsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], StatisticsService);



/***/ }),

/***/ "3UkA":
/*!*********************************************************************!*\
  !*** ./src/app/common/circle-spinner/circle-spinner.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spinner-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: calc(100% - 24px);\n  width: 100%;\n  min-height: 50px;\n  min-width: 50px;\n  background-color: rgba(238, 238, 238, 0.3);\n}\n.spinner-wrapper .circle-spinner {\n  text-align: center;\n  padding: 1em;\n  margin: 0 auto 1em;\n  display: inline-block;\n  vertical-align: top;\n}\n.spinner-wrapper .circle-spinner svg path,\n.spinner-wrapper .circle-spinner svg rect {\n  fill: #5a6269;\n}\n.spinner-wrapper.white {\n  position: static;\n  background-color: #fff;\n  height: 200px;\n}\n.no-background {\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NpcmNsZS1zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTs7RUFFRSxhQUFBO0FBQ047QUFHRTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBREo7QUFLQTtFQUNFLHdDQUFBO0FBRkYiLCJmaWxlIjoiY2lyY2xlLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDI0cHgpO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2VlZWVlZSwgJGFscGhhOiAwLjMpO1xuXG4gIC5jaXJjbGUtc3Bpbm5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBtYXJnaW46IDAgYXV0byAxZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cbiAgICBzdmcgcGF0aCxcbiAgICBzdmcgcmVjdCB7XG4gICAgICBmaWxsOiAjNWE2MjY5O1xuICAgIH1cbiAgfVxuXG4gICYud2hpdGUge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG59XG5cbi5uby1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "3VU+":
/*!***************************************!*\
  !*** ./src/app/common/amount.pipe.ts ***!
  \***************************************/
/*! exports provided: AmountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountPipe", function() { return AmountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
var AmountPipe_1;





let AmountPipe = AmountPipe_1 = class AmountPipe {
    constructor(locale) {
        this.locale = locale;
    }
    transform(value, decimalPlaces = 2, 
    // shows null as 0 if set to false
    allowNull = false) {
        if (typeof decimalPlaces !== 'number' || decimalPlaces < 0 || !decimalPlaces) {
            decimalPlaces = AmountPipe_1.DEFAULT_DECIMAL_PLACES;
        }
        const roundingMode = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appName === 'sgpmx' ? 4 : 1;
        return (value === null || value === undefined) && allowNull
            ? null
            : Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatNumber"])(new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(value ? value : 0).decimalPlaces(decimalPlaces, roundingMode).toString(), this.locale, `1.${decimalPlaces < AmountPipe_1.DEFAULT_DECIMAL_PLACES
                ? decimalPlaces
                : AmountPipe_1.DEFAULT_DECIMAL_PLACES}-${decimalPlaces}`);
    }
};
AmountPipe.DEFAULT_DECIMAL_PLACES = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appName === 'sgpmx' ? 8 : 2;
AmountPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] }
];
AmountPipe = AmountPipe_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({ name: 'amount' })
], AmountPipe);



/***/ }),

/***/ "4ScN":
/*!*********************************************************************************!*\
  !*** ./src/app/common/password-strength-bar/password-strength-bar.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PasswordStrengthBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordStrengthBarComponent", function() { return PasswordStrengthBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_password_strength_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./password-strength-bar.component.html */ "o2Rg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let PasswordStrengthBarComponent = class PasswordStrengthBarComponent {
    constructor() {
        this.progress = 0;
    }
    ngOnChanges() {
        this.progress = (this.strength / this.requiredStrength) * 100;
        if (this.progress >= 100) {
            this.color = 'success';
        }
        else if (this.progress >= 50) {
            this.color = 'warning';
        }
        else if (this.progress >= 1) {
            this.color = 'danger';
        }
    }
};
PasswordStrengthBarComponent.propDecorators = {
    requiredStrength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    strength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
PasswordStrengthBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'password-strength-bar',
        template: _raw_loader_password_strength_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], PasswordStrengthBarComponent);



/***/ }),

/***/ "4dWg":
/*!***************************************!*\
  !*** ./src/app/common/masked.pipe.ts ***!
  \***************************************/
/*! exports provided: MaskedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskedPipe", function() { return MaskedPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let MaskedPipe = class MaskedPipe {
    transform(value, show = 3, fill = 6) {
        if (!value) {
            return value ? value : '';
        }
        return value.substr(0, show).padEnd(show + fill, '*');
    }
};
MaskedPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'masked' })
], MaskedPipe);



/***/ }),

/***/ "4pv/":
/*!******************************************************!*\
  !*** ./src/app/store/currencies/currencies.query.ts ***!
  \******************************************************/
/*! exports provided: CurrenciesQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrenciesQuery", function() { return CurrenciesQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");
/* harmony import */ var _currencies_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./currencies.store */ "wgWS");







let CurrenciesQuery = class CurrenciesQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"] {
    constructor(store, session) {
        super(store);
        this.store = store;
        this.session = session;
        this.preferredCurrency$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.selectAll(), this.session.userStream).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([currencies, user]) => currencies.find(currency => currency.code === user.preferredCurrency.code)));
    }
};
CurrenciesQuery.ctorParameters = () => [
    { type: _currencies_store__WEBPACK_IMPORTED_MODULE_6__["CurrenciesStore"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] }
];
CurrenciesQuery = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CurrenciesQuery);



/***/ }),

/***/ "4pyo":
/*!*************************************************************************!*\
  !*** ./src/app/common/user-details-form/user-details-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: formatMaskedDate, UserDetailsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMaskedDate", function() { return formatMaskedDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsFormComponent", function() { return UserDetailsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_details_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-details-form.component.html */ "YXSw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "WE53");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/format */ "sWYD");
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/parseISO */ "4+6U");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common.mixin */ "s/H0");
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../countries */ "Gq6/");









/** Transforms masked date to YYYY-MM-DD */
function formatMaskedDate(unformattedDate) {
    return `${unformattedDate.slice(4)}-${unformattedDate.slice(2, 4)}-${unformattedDate.slice(0, 2)}`;
}
let UserDetailsFormComponent = class UserDetailsFormComponent {
    constructor() {
        this.type = 'personal';
        this.requireAll = true;
        this.disabled = false;
        this.submitted = false;
        this.business = {};
        this.searchCountryCode = _common_mixin__WEBPACK_IMPORTED_MODULE_7__["searchCountryCode"];
        this.toStartCase = _common_mixin__WEBPACK_IMPORTED_MODULE_7__["toStartCase"];
        this.faPhone = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPhone"];
        this.faInfoCircle = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInfoCircle"];
        this.genders = ['male', 'female'];
        this.currentTab = 'business';
        this.countries = _countries__WEBPACK_IMPORTED_MODULE_8__["countries"];
        this.countriesSortedByName = _countries__WEBPACK_IMPORTED_MODULE_8__["countriesSortedByName"];
        this.documentTypes = ['Passport', 'ID Card'];
        this.businessTypes = [
            'Agents of Client',
            'Association',
            'B2B',
            'Company',
            'Government Body',
            'Partnership',
            'Registered Cooperative',
            'Trust',
        ];
        this.birthday = '';
        this.dateOfIncorporation = '';
        this.documentIssuingDate = '';
        this.documentExpiryDate = '';
        this.proofOfAddressDate = '';
    }
    ngOnChanges(changes) {
        var _a, _b;
        if (changes.details) {
            if (this.details.business) {
                this.business = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.details.business);
            }
            this.phoneCountryCode = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["find"])(_countries__WEBPACK_IMPORTED_MODULE_8__["countries"], country => country.alpha2 === this.details.phoneCountryCode);
            this.birthday = this.details.birthday ? Object(date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_5__["default"])(this.details.birthday), 'ddMMyyyy') : null;
            this.documentIssuingDate = this.details.documentIssuingDate
                ? Object(date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_5__["default"])(this.details.documentIssuingDate), 'ddMMyyyy')
                : null;
            this.documentExpiryDate = this.details.documentExpiryDate
                ? Object(date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_5__["default"])(this.details.documentExpiryDate), 'ddMMyyyy')
                : null;
            this.proofOfAddressDate = this.details.proofOfAddressDate
                ? Object(date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_5__["default"])(this.details.proofOfAddressDate), 'ddMMyyyy')
                : null;
            if (this.type === 'business') {
                this.businessPhoneCountryCode = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["find"])(_countries__WEBPACK_IMPORTED_MODULE_8__["countries"], country => { var _a; return country.alpha2 === ((_a = this.details.business) === null || _a === void 0 ? void 0 : _a.phoneCountryCode); });
                this.dateOfIncorporation = ((_a = this.details.business) === null || _a === void 0 ? void 0 : _a.dateOfIncorporation) ? Object(date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_5__["default"])((_b = this.details.business) === null || _b === void 0 ? void 0 : _b.dateOfIncorporation), 'ddMMyyyy')
                    : null;
            }
        }
    }
    submit() {
        this.submitted = true;
        if (this.birthday) {
            this.details.birthday = formatMaskedDate(this.birthday);
        }
        if (this.documentIssuingDate) {
            this.details.documentIssuingDate = formatMaskedDate(this.documentIssuingDate);
        }
        if (this.documentExpiryDate) {
            this.details.documentExpiryDate = formatMaskedDate(this.documentExpiryDate);
        }
        if (this.proofOfAddressDate) {
            this.details.proofOfAddressDate = formatMaskedDate(this.proofOfAddressDate);
        }
        if (this.phoneCountryCode) {
            this.details.phoneCountryCode = this.formatPhoneCountryCode(this.phoneCountryCode);
        }
        if (this.type === 'business') {
            if (this.dateOfIncorporation) {
                this.business.dateOfIncorporation = formatMaskedDate(this.dateOfIncorporation);
            }
            if (this.businessPhoneCountryCode) {
                this.business.phoneCountryCode = this.formatPhoneCountryCode(this.businessPhoneCountryCode);
            }
            Object.assign(this.details.business, this.business);
        }
    }
    isValid() {
        return !!this.form.valid;
    }
    formatPhoneCountryCode(unformattedPhoneCountryCode) {
        return unformattedPhoneCountryCode.alpha2;
    }
};
UserDetailsFormComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    details: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    requireAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['detailsForm',] }]
};
UserDetailsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'user-details-form',
        template: _raw_loader_user_details_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserDetailsFormComponent);



/***/ }),

/***/ "54hi":
/*!*************************************************************!*\
  !*** ./src/app/common/services/google-analytics.service.ts ***!
  \*************************************************************/
/*! exports provided: GoogleAnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsService", function() { return GoogleAnalyticsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session.service */ "6g7h");







let GoogleAnalyticsService = class GoogleAnalyticsService {
    constructor(router, location, session) {
        this.router = router;
        this.location = location;
        this.session = session;
        this.initialized = false;
    }
    /**
     * Initliaze google analytics and register page view and user event tracking
     */
    init() {
        if (this.initialized || !window.GOOGLE_ANALYTICS_CODE) {
            return;
        }
        this.initialized = true;
        this.loadScript();
        // send page view on every transition
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => this.location.path()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(url => {
            // log new page path to google analytics
            gtag('config', window.GOOGLE_ANALYTICS_CODE, { page_path: url });
        });
        // log user events
        this.session.userEvent.subscribe(event => {
            this.push('event', event, {
                event_category: 'User Events',
            });
        });
    }
    /**
     * Push events to google analytics
     * @param payload Event payload
     */
    push(...args) {
        if (!window.GOOGLE_ANALYTICS_CODE) {
            return;
        }
        gtag(...args);
    }
    /**
     * Load google analytics script
     */
    loadScript() {
        /* eslint-disable */
        ;
        (function () {
            let script = document.createElement('script');
            script.src = `https://www.googletagmanager.com/gtag/js?id=${window.GOOGLE_ANALYTICS_CODE}`;
            script.async = true;
            document.body.append(script);
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag() {
                dataLayer.push(arguments);
            };
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appName === 'aerapass') {
                gtag('set', 'linker', { domains: ['aerapass.io', 'app.aerapass.io'] });
            }
            gtag('js', new Date());
            gtag('config', window.GOOGLE_ANALYTICS_CODE);
        })();
        /* eslint-enable */
    }
};
GoogleAnalyticsService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }
];
GoogleAnalyticsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], GoogleAnalyticsService);



/***/ }),

/***/ "5y1p":
/*!****************************************************************!*\
  !*** ./src/app/common/access-error/access-errors.component.ts ***!
  \****************************************************************/
/*! exports provided: AccessErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessErrorsComponent", function() { return AccessErrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_access_errors_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./access-errors.component.html */ "fZS9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_core_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/core/user.service */ "AxWo");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/session.service */ "6g7h");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/toastr.service */ "N/y2");









let AccessErrorsComponent = class AccessErrorsComponent {
    constructor(session, router, userService, toastr, translate) {
        this.session = session;
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
        this.translate = translate;
        this.resendTriggered = false;
        this.errors = [];
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
    }
    ngOnInit() {
        if (this.errors.length > 0) {
            this.whiteListedErrors = this.errors.filter(error => this.session.user.accessErrors.includes(error));
        }
        else {
            this.whiteListedErrors = this.session.user.accessErrors;
        }
    }
    goToVerification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['/verify']);
        });
    }
    goToRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['/deposit']);
        });
    }
    resend() {
        this.resendTriggered = true;
        this.subscriptions.add(this.userService.resendActivationMail(this.session.user.id).subscribe(() => {
            this.toastr.success(this.translate.instant('common.mail-confirmation-sent-again'));
        }, () => {
            this.resendTriggered = false;
        }));
    }
};
AccessErrorsComponent.ctorParameters = () => [
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_core_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
AccessErrorsComponent.propDecorators = {
    errors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
AccessErrorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'access-errors',
        template: _raw_loader_access_errors_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AccessErrorsComponent);



/***/ }),

/***/ "69Ec":
/*!*********************************************************!*\
  !*** ./src/app/common/copy-icon/copy-icon.component.ts ***!
  \*********************************************************/
/*! exports provided: CopyIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyIconComponent", function() { return CopyIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_copy_icon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./copy-icon.component.html */ "I3ms");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "uB96");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_copier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/copier.service */ "RT6g");







let CopyIconComponent = class CopyIconComponent {
    constructor(copier, changeDetector) {
        this.copier = copier;
        this.changeDetector = changeDetector;
        this.faCopy = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCopy"];
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    ngOnChanges(changes) {
        if (changes.value) {
            this.value = changes.value.currentValue;
            this.changeDetector.markForCheck();
        }
    }
    copy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.copier.copyText(this.value);
        // detect changes first, the ngbTooltip doesn't get updated otherwise and won't show up
        this.changeDetector.detectChanges();
        this.tooltip.open();
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(1500))
            .subscribe(() => {
            this.changeDetector.markForCheck();
            this.tooltip.close();
        });
    }
};
CopyIconComponent.ctorParameters = () => [
    { type: _services_copier_service__WEBPACK_IMPORTED_MODULE_6__["CopierService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
CopyIconComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['tooltip',] }]
};
CopyIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'copy-icon',
        template: _raw_loader_copy_icon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
    })
], CopyIconComponent);



/***/ }),

/***/ "6YVt":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/profile-documents/profile-documents.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-documents\">\n    <dropzone\n        *ngIf=\"canCreate\"\n        [showTable]=\"false\"\n        [files]=\"files\"\n        [existingFiles]=\"existingFiles\"\n        [requiredMessage]=\"requiredMessage\"\n        [allowVideo]=\"true\"\n        #dropzone\n    ></dropzone>\n    <div class=\"table-responsive\">\n        <table class=\"table table-hover align-items-center table-borderless mb-0\" *ngIf=\"files && files.length > 0\">\n            <thead>\n                <tr>\n                    <th scope=\"col\" colspan=\"2\">{{ 'common.file-name' | translate }}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr class=\"bg-white e2e-file\" *ngFor=\"let item of files; let i = index\">\n                    <th scope=\"row\">\n                        <div class=\"text-primary\">{{ item.name }}</div>\n                        <small class=\"text-muted\">{{ item.size / 1024 / 1024 | number: '.2' }} MB</small>\n                    </th>\n                    <td class=\"text-right\" nowrap>\n                        <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"files.splice(i, 1)\">\n                            <fa-icon [icon]=\"faTimes\"></fa-icon>\n                        </button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <button\n        *ngIf=\"canCreate && showButton\"\n        type=\"button\"\n        (click)=\"uploadFiles()\"\n        class=\"btn btn-primary btn-w-sm mt-3 e2e-upload-documents-btn\"\n        [ngClass]=\"{ loading: isUploading, 'float-right': buttonAlign === 'right' }\"\n        [disabled]=\"isUploading\"\n    >\n        {{ 'common.upload' | translate }}\n    </button>\n    <ng-container *ngIf=\"itemsStream | async; let items\">\n        <div class=\"table-responsive mt-3\" *ngIf=\"items.length\">\n            <table class=\"table table-hover align-items-center table-borderless mb-0\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\" colspan=\"2\">{{ 'common.existing-files' | translate }}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr class=\"bg-white e2e-file\" *ngFor=\"let existingFile of items\">\n                        <th scope=\"row\">\n                            <file-item [file]=\"existingFile\" [canView]=\"canView\"></file-item>\n                        </th>\n                        <td class=\"text-right\" nowrap>\n                            <button\n                                type=\"button\"\n                                class=\"btn btn-primary btn-sm mr-1 e2e-edit-file-btn\"\n                                (click)=\"showFileModal(existingFile)\"\n                                *ngIf=\"canEdit\"\n                            >\n                                <fa-icon [icon]=\"faEdit\"></fa-icon>\n                            </button>\n                            <button\n                                type=\"button\"\n                                class=\"btn btn-danger btn-sm e2e-delete-file-btn\"\n                                (click)=\"deleteFile(existingFile)\"\n                                *ngIf=\"canDelete\"\n                            >\n                                <fa-icon [icon]=\"faTimes\"></fa-icon>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"d-flex align-items-center mt-3 float-right\" *ngIf=\"items.length\">\n            <ng-select\n                class=\"mr-2\"\n                [(ngModel)]=\"limit\"\n                dropdownPosition=\"auto\"\n                (change)=\"select(1)\"\n                [items]=\"limitOpts\"\n                [placeholder]=\"'common.show-entries-per-page' | translate\"\n                [clearable]=\"false\"\n                [searchable]=\"false\"\n                required\n            >\n                <ng-template ng-label-tmp let-item=\"item\">{{ 'common.show-entries' | translate: { value: item } }}</ng-template>\n                <ng-template ng-option-tmp let-item=\"item\">{{ item }} {{ 'common.entries' | translate }}</ng-template>\n            </ng-select>\n            <ngb-pagination\n                [(page)]=\"page\"\n                [collectionSize]=\"count\"\n                (pageChange)=\"select()\"\n                [pageSize]=\"limit\"\n                [maxSize]=\"5\"\n                [ellipses]=\"false\"\n                [rotate]=\"true\"\n                [boundaryLinks]=\"true\"\n            >\n            </ngb-pagination>\n        </div>\n    </ng-container>\n</div>\n");

/***/ }),

/***/ "6g7h":
/*!****************************************************!*\
  !*** ./src/app/common/services/session.service.ts ***!
  \****************************************************/
/*! exports provided: UserEventType, User, SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEventType", function() { return UserEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/addSeconds */ "Ctv7");
/* harmony import */ var date_fns_getUnixTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/getUnixTime */ "odh7");
/* harmony import */ var date_fns_isBefore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/isBefore */ "dndX");
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/parseISO */ "4+6U");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-base64 */ "52Kp");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storage.service */ "Hppe");











var UserEventType;
(function (UserEventType) {
    UserEventType["LOGIN"] = "login";
    UserEventType["LOGOUT"] = "logout";
})(UserEventType || (UserEventType = {}));
class User {
    hasPermission(permission) {
        return this.permissions.includes(permission);
    }
    get accessErrors() {
        const errors = [];
        if (this.role === 'admin') {
            return errors;
        }
        if (!this.approvedAt) {
            errors.push('VerificationRequiredError');
        }
        return errors;
    }
}
let SessionService = class SessionService {
    constructor(storage, http) {
        this.storage = storage;
        this.http = http;
        this.tokenChangeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        /* Emits when the status of the user changes */
        this.userEvent = new rxjs__WEBPACK_IMPORTED_MODULE_8__["ReplaySubject"](1);
        this.userChangeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
        this.userStream = this.userChangeEvent.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((user) => !!user));
        this.storage.storageChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(event => {
            switch (event.key) {
                case 'refreshToken':
                case 'token':
                case 'user':
                    return true;
                default:
                    // not needed
                    return false;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(200))
            .subscribe(() => {
            this.syncWithStorage();
        });
        // initial sync
        this.syncWithStorage();
    }
    // TODO: Remove when using observable everywhere
    get user() {
        return this.userChangeEvent.getValue();
    }
    login(refreshToken, token) {
        return this.update(refreshToken, token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(user => {
            this.userEvent.next({ type: UserEventType.LOGIN, user });
        }));
    }
    update(refreshToken, token) {
        try {
            if (refreshToken && token) {
                this.refreshToken = refreshToken;
                this.token = token;
                this.payload = this.parseToken(token);
                this.tokenChangeEvent.next();
            }
            return this.http.get(`/users/${this.payload.userID}?scope=session`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(data => {
                const user = Object.assign(new User(), data);
                this.userChangeEvent.next(user);
                this.storage.setItem('refreshToken', JSON.stringify(this.refreshToken));
                this.storage.setItem('token', this.token);
                this.storage.setItem('user', JSON.stringify(data));
                return user;
            }));
        }
        catch (error) {
            this.logout();
            throw error;
        }
    }
    logout() {
        this.refreshToken = undefined;
        this.token = undefined;
        this.payload = undefined;
        // notify others of logout
        this.userEvent.next({ type: UserEventType.LOGOUT, user: this.userChangeEvent.getValue() });
        this.userChangeEvent.next(null);
        // clear storage
        this.storage.removeItem('refreshToken');
        this.storage.removeItem('token');
        this.storage.removeItem('user');
    }
    /**
     * Checks if a token is stored and not yet expired
     * @param gracePeriod in seconds. Returns if the token is at least S seconds from now valid.
     */
    hasValidToken(gracePeriod = 0) {
        // check if token is set and is not yet expired
        return !!this.payload && this.payload.exp > (Date.now() + gracePeriod) / 1000;
    }
    hasTokenScope(scope) {
        return this.getTokenScopes().includes(scope);
    }
    getTokenScopes() {
        return this.hasValidToken() ? this.payload.scopes : [];
    }
    getExpiryTimeInSeconds() {
        const expiryTime = this.payload && this.payload.exp;
        return expiryTime ? Math.round(expiryTime - ~~(new Date().getTime() / 1000)) : 0;
    }
    /**
     * Checks if a refresh token is stored and not yet expired
     * @param gracePeriod in seconds. Returns if the token is at least S seconds from now valid.
     */
    hasValidRefreshToken(gracePeriod = 0) {
        return (!!this.refreshToken && !Object(date_fns_isBefore__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_6__["default"])(this.refreshToken.expiresAt), Object(date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), gracePeriod)));
    }
    isAuthenticated() {
        return this.userChangeEvent.getValue() !== null;
    }
    createSignedUrl(url, queryParams) {
        const now = Object(date_fns_getUnixTime__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date());
        const encoder = new TextEncoder();
        return this.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(user => {
            var _a;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(crypto.subtle.digest('SHA-1', encoder.encode(user.id + `/.api${url}` + now + ((_a = this.refreshToken) === null || _a === void 0 ? void 0 : _a.id))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(signature => Array.from(new Uint8Array(signature))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(signatureInHex => `/.api${url}?userId=${this.user.id}&signature=${signatureInHex}&timestamp=${now}${queryParams ? '&' + queryParams : ''}`));
    }
    syncWithStorage() {
        var _a;
        try {
            if (this.storage.hasItem('user')) {
                const user = JSON.parse(this.storage.getItem('user'));
                Object.assign(this.userChangeEvent, { _value: Object.assign(new User(), user) });
            }
            const refreshToken = this.storage.hasItem('refreshToken') && JSON.parse(this.storage.getItem('refreshToken'));
            const token = this.storage.getItem('token');
            // if is expired
            if (refreshToken && Object(date_fns_isBefore__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_6__["default"])(refreshToken.expiresAt), new Date())) {
                throw new Error('Session expired');
            }
            if (refreshToken && token) {
                this.refreshToken = refreshToken;
                this.token = token;
                this.payload = this.parseToken(token);
                this.userEvent.next({ type: UserEventType.LOGIN, user: { id: (_a = this.payload) === null || _a === void 0 ? void 0 : _a.userID } });
            }
            else if (this.isAuthenticated()) {
                this.logout();
            }
        }
        catch (_b) {
            this.storage.removeItem('refreshToken');
            this.storage.removeItem('token');
            this.storage.removeItem('user');
            if (this.isAuthenticated()) {
                this.logout();
            }
        }
    }
    parseToken(token) {
        return JSON.parse(js_base64__WEBPACK_IMPORTED_MODULE_7__["Base64"].decode(token.split('.')[1]));
    }
};
SessionService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SessionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], SessionService);



/***/ }),

/***/ "6nEW":
/*!***************************************************************!*\
  !*** ./src/app/common/alert-outlet/alert-outlet.component.ts ***!
  \***************************************************************/
/*! exports provided: AlertOutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertOutletComponent", function() { return AlertOutletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_alert_outlet_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./alert-outlet.component.html */ "9aP3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "uB96");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alert.service */ "0ZVX");





let AlertOutletComponent = class AlertOutletComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.layout = 'default';
        this.faTimes = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"];
    }
    ngOnDestroy() {
        this.alertService.clear();
    }
};
AlertOutletComponent.ctorParameters = () => [
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
AlertOutletComponent.propDecorators = {
    layout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
AlertOutletComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'alert-outlet',
        template: _raw_loader_alert_outlet_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AlertOutletComponent);



/***/ }),

/***/ "71pC":
/*!*******************************************!*\
  !*** ./src/app/common/start-case.pipe.ts ***!
  \*******************************************/
/*! exports provided: StartCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartCasePipe", function() { return StartCasePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.mixin */ "s/H0");



let StartCasePipe = class StartCasePipe {
    transform(value) {
        if (typeof value !== 'string') {
            return value;
        }
        return Object(_common_mixin__WEBPACK_IMPORTED_MODULE_2__["toStartCase"])(value);
    }
};
StartCasePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'startCase' })
], StartCasePipe);



/***/ }),

/***/ "7DHn":
/*!***************************************************************************!*\
  !*** ./src/app/common/confirmation-modal/confirmation-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConfirmationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationModalComponent", function() { return ConfirmationModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirmation_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirmation-modal.component.html */ "i3os");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





let ConfirmationModalComponent = class ConfirmationModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.type = 'default';
        this.title = 'Confirm';
        this.confirmText = 'Ok';
        this.confirmClass = 'primary';
        this.cancelText = 'Cancel';
        this.cancelClass = 'default';
        this.showCancel = true;
        this.submitted = false;
        this.faExclamationTriangle = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faExclamationTriangle"];
        this.faInfoCircle = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInfoCircle"];
        this.faCheckCircle = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCheckCircle"];
        this.inputValidator = (_) => null;
    }
    confirm() {
        if (this.input) {
            this.submitted = true;
            if (this.form.invalid) {
                return;
            }
        }
        this.activeModal.close(true);
    }
    get icon() {
        switch (this.type) {
            case 'info':
                return this.faInfoCircle;
            case 'success':
                return this.faCheckCircle;
            case 'warning':
                return this.faExclamationTriangle;
            case 'danger':
                return this.faExclamationTriangle;
            default:
                return null;
        }
    }
};
ConfirmationModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }
];
ConfirmationModalComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputForm',] }]
};
ConfirmationModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'confirmation-modal',
        template: _raw_loader_confirmation_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ConfirmationModalComponent);



/***/ }),

/***/ "8F31":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/core/header/header-notifications/header-notifications.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div ngbDropdown placement=\"bottom-right\" (openChange)=\"handleDropdownClosed($event)\">\n    <button type=\"button\" class=\"btn btn-transparent mr-1\" ngbDropdownToggle>\n        <fa-icon [fixedWidth]=\"true\" [icon]=\"faBell\"></fa-icon>\n        <ng-container *ngIf=\"notificationsService.unreadNotificationsStream | async as unreadNotifications\">\n            <span class=\"badge badge-primary badge-pill\" *ngIf=\"unreadNotifications > 0\">\n                {{ unreadNotifications | number: '1.0-0' }}\n            </span>\n        </ng-container>\n    </button>\n    <div class=\"dropdown-menu-w-lg dropdown-menu-right\" ngbDropdownMenu>\n        <div class=\"dropdown-header text-center\">\n            {{ 'common.notifications' | translate }}\n            <button\n                type=\"button\"\n                class=\"btn btn-link text-muted e2e-mark-all-as-read-btn\"\n                (click)=\"markAllAsRead(); $event.stopPropagation()\"\n                [ngbTooltip]=\"'common.mark-all-as-read' | translate\"\n                placement=\"bottom\"\n            >\n                <fa-icon [icon]=\"faEye\"></fa-icon>\n            </button>\n        </div>\n        <div class=\"dropdown-divider mb-0\"></div>\n        <div class=\"scrollable\">\n            <a\n                href\n                class=\"dropdown-item {{ 'has-' + notification.severity }} e2e-header-notification\"\n                *ngFor=\"let notification of notifications\"\n                [ngClass]=\"{ active: !notification.read }\"\n                (click)=\"goto(notification); $event.preventDefault()\"\n            >\n                <p class=\"mb-0\">\n                    <span class=\"badge mr-1\" [ngClass]=\"'badge-' + notification.severity\" *ngIf=\"!notification.read\">{{\n                        'common.new' | translate\n                    }}</span>\n                    <notification [notification]=\"notification\" [allowUserCopy]=\"false\"></notification>\n                </p>\n                <small class=\"text-muted\">{{ notification.createdAt | formatDistanceToNow: true:true }}</small>\n            </a>\n        </div>\n        <div class=\"dropdown-divider mt-0\"></div>\n        <a class=\"dropdown-item text-center\" [routerLink]=\"['/notifications']\" ngbDropdownItem>{{ 'common.view-all' | translate }}</a>\n    </div>\n</div>\n");

/***/ }),

/***/ "8LRd":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/no-access-modal/no-access-modal.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">\n        {{ (error === 'VerificationRequiredError' ? 'common.verify-your-identity' : 'common.confirm-your-email-address') | translate }}\n    </h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-body text-center\">\n    <h3 class=\"m-0\">{{ 'common.you-dont-have-access-to-this-feature' | translate }}</h3>\n    <img src=\"/img/icons/lock.svg\" class=\"img-md my-3\" />\n    <p class=\"text-body\" *ngIf=\"error === 'VerificationRequiredError'\">\n        {{ 'common.please-verify-identity' | translate }}\n        <a href (click)=\"$event.preventDefault(); goToVerification()\">{{ 'common.start-now' | translate }}</a>\n    </p>\n</div>\n");

/***/ }),

/***/ "8fJJ":
/*!*********************************************************!*\
  !*** ./src/app/common/services/core/contact.service.ts ***!
  \*********************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_core_contact_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/core/contact.model */ "yK3n");





let ContactService = class ContactService {
    constructor(http) {
        this.http = http;
    }
    create(contact) {
        return this.http.post(`/contacts`, contact).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resonse => new _models_core_contact_model__WEBPACK_IMPORTED_MODULE_4__["Contact"](resonse)));
    }
};
ContactService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ContactService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], ContactService);



/***/ }),

/***/ "93co":
/*!***************************************************************!*\
  !*** ./src/app/common/notification/notification.component.ts ***!
  \***************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notification.component.html */ "w/tz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_core_contact_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/core/contact.service */ "8fJJ");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/session.service */ "6g7h");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/toastr.service */ "N/y2");










let NotificationComponent = class NotificationComponent {
    constructor(session, contactService, toastr) {
        this.session = session;
        this.contactService = contactService;
        this.toastr = toastr;
        this.allowUserCopy = true; // Use copy-wrap for user
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].displayName;
        this.isLoading = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnInit() {
        this.user = this.notification.user;
        this.transaction = this.notification.transaction;
        this.conversion = this.notification.conversion;
        this.invoice = this.notification.invoice;
        this.contact = this.notification.contact;
        this.cardOrder = this.notification.cardOrder;
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    addContact() {
        var _a, _b, _c;
        this.isLoading = true;
        this.subscriptions.add(this.contactService
            .create({
            baseUser: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["pick"])(this.session.user, ['id']),
            counterUser: {
                accountNumber: (_c = (_b = (_a = this.notification.contact) === null || _a === void 0 ? void 0 : _a.baseUser) === null || _b === void 0 ? void 0 : _b.accountNumber) !== null && _c !== void 0 ? _c : '',
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.isLoading = false;
        }))
            .subscribe(() => {
            this.toastr.success(`${this.notification.contact && this.notification.contact.baseUser.accountNumber} added as contact`);
        }));
    }
};
NotificationComponent.ctorParameters = () => [
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"] },
    { type: _services_core_contact_service__WEBPACK_IMPORTED_MODULE_7__["ContactService"] },
    { type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }
];
NotificationComponent.propDecorators = {
    notification: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    allowUserCopy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
NotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'notification',
        template: _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], NotificationComponent);



/***/ }),

/***/ "95zY":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/contact-book/contact-book.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ 'common.contact-book' | translate }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"modal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-subheader\">{{ 'common.add-contacts' | translate }}</div>\n<div class=\"modal-body\">\n    <form class=\"form-validation mb-3\" #contactForm=\"ngForm\" (ngSubmit)=\"addContact(searchText)\">\n        <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                    <fa-icon [icon]=\"faSearch\"></fa-icon>\n                </span>\n            </div>\n            <input\n                autocomplete=\"off\"\n                type=\"text\"\n                name=\"search\"\n                (ngModelChange)=\"searchContacts($event)\"\n                [(ngModel)]=\"searchText\"\n                [placeholder]=\"'common.search-contacts' | translate\"\n                class=\"form-control\"\n                [focus]=\"true\"\n            />\n            <div [@showButton]=\"(itemsStream | async)?.length === 0 && searchText.length > 0\" class=\"input-group-append overflow-hidden\">\n                <button type=\"submit\" class=\"btn btn-primary\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n                    {{ 'common.add' | translate }}\n                </button>\n            </div>\n        </div>\n    </form>\n    <ng-container *ngIf=\"itemsStream | async as items\">\n        <ng-container *ngIf=\"items.length > 0; else noContacts\">\n            <div class=\"list-group list-group-flush mb-3\">\n                <a\n                    href\n                    class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-center p-3\"\n                    *ngFor=\"let contact of items\"\n                    (click)=\"onSelect.emit(contact); $event.preventDefault()\"\n                >\n                    <div class=\"avatar mr-3\">\n                        <user-avatar [user]=\"contact.counterUser\"></user-avatar>\n                    </div>\n                    <div class=\"w-100\">\n                        <div class=\"text-primary\">{{ contact.counterUser.name }}</div>\n                        <small\n                            >{{ contact.counterUser.accountNumber | accountNumber }}\n                            <span class=\"text-muted text-capitalize\">/ {{ contact.counterUser.type }}</span></small\n                        >\n                    </div>\n                    <div *ngIf=\"contact.id\" class=\"btn-group\">\n                        <button\n                            type=\"button\"\n                            class=\"btn btn-default text-gray\"\n                            (click)=\"removeContact(contact); $event.stopPropagation(); $event.preventDefault()\"\n                            [ngClass]=\"{ loading: deletingContacts.has(contact.id) }\"\n                            [disabled]=\"deletingContacts.has(contact.id)\"\n                        >\n                            <fa-icon [icon]=\"faTrash\"></fa-icon>\n                        </button>\n                    </div>\n                </a>\n            </div>\n            <div class=\"row\">\n                <div class=\"col d-flex justify-content-end\">\n                    <ngb-pagination\n                        class=\"mb-0\"\n                        [(page)]=\"page\"\n                        [collectionSize]=\"count\"\n                        (pageChange)=\"select()\"\n                        [pageSize]=\"limit\"\n                        [rotate]=\"false\"\n                        [boundaryLinks]=\"true\"\n                    >\n                    </ngb-pagination>\n                </div>\n            </div>\n        </ng-container>\n    </ng-container>\n    <ng-template #noContacts>\n        <div *ngIf=\"searchText.length === 0; else addContacts\" class=\"text-center mt-4 mb-3\">\n            <fa-icon class=\"text-muted\" [icon]=\"faUserAltSlash\" size=\"3x\"></fa-icon>\n            <h3 class=\"text-muted mt-2\">{{ 'common.no-contacts' | translate }}</h3>\n            <p class=\"text-muted\">\n                {{ 'common.add-people' | translate }}\n            </p>\n        </div>\n    </ng-template>\n    <ng-template #addContacts>\n        <div class=\"text-center my-5\">\n            <fa-icon class=\"text-muted\" [icon]=\"faUserAltSlash\" size=\"3x\"></fa-icon>\n            <h3 class=\"text-muted mt-2\">\"{{ searchText }}\" {{ 'common.not-found' | translate }}</h3>\n            <small class=\"text-muted\">{{ 'common.press-enter-to-add' | translate }} \"{{ searchText }}\"</small>\n        </div>\n    </ng-template>\n</div>\n");

/***/ }),

/***/ "9UWv":
/*!*********************************************************************!*\
  !*** ./src/app/common/user-info-table/user-info-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserInfoTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoTableComponent", function() { return UserInfoTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_info_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-info-table.component.html */ "nrBr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common.mixin */ "s/H0");
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../countries */ "Gq6/");








let UserInfoTableComponent = class UserInfoTableComponent {
    constructor(http) {
        this.http = http;
        this.fields = [
            'firstName',
            'middleName',
            'lastName',
            'gender',
            'phoneNumber',
            'birthday',
            'nationality',
            'address',
            'occupation',
            'sourceOfIncome',
            'taxIdentificationNumber',
            'fatca',
            'expectedTurnover',
            'documentType',
            'documentNumber',
            'documentIssuingDate',
            'documentExpiryDate',
            'proofOfAddressDate',
            'referredBy',
        ];
        this.businessFields = [
            'name',
            'type',
            'registrationNumber',
            'phoneNumber',
            'countryOfIncorporation',
            'dateOfIncorporation',
            'industry',
            'expectedTurnover',
            'address',
            'businessAddress',
            'regulatoryBody',
            'licensed',
            'licenseNumber',
            'fatca',
        ];
        this.currentTab = 'business';
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
    }
    ngOnInit() {
        this.http.get(`/admin/users/${this.user.id}/details`).subscribe(details => {
            this.details = details;
            if (this.user.type === 'business') {
                this.businessDetails = this.details.business;
                this.fields = this.fields.filter(field => !['fatca', 'expectedTurnover'].includes(field));
            }
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    getProperty(property) {
        if (property === 'fatca') {
            return 'FATCA';
        }
        return Object(_common_mixin__WEBPACK_IMPORTED_MODULE_6__["toStartCase"])(property);
    }
    getValue(property) {
        var _a, _b, _c, _d, _e;
        if (property === 'fatca') {
            return this.details.fatca === undefined ? '' : this.details.fatca ? 'Yes' : 'No';
        }
        if (property === 'nationality') {
            return (_b = (_a = _countries__WEBPACK_IMPORTED_MODULE_7__["countryMap"][this.details.nationality]) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '';
        }
        if (property === 'phoneNumber') {
            return `${(_c = Object(_common_mixin__WEBPACK_IMPORTED_MODULE_6__["toCountryCallingCode"])(this.details.phoneCountryCode)) !== null && _c !== void 0 ? _c : ''} ${(_d = this.details.phoneNumber) !== null && _d !== void 0 ? _d : ''}`;
        }
        if (property === 'documentType') {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["capitalize"])(this.details.documentType);
        }
        if (property === 'gender') {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["capitalize"])(this.details.gender);
        }
        return (_e = this.details[property]) !== null && _e !== void 0 ? _e : '';
    }
    getBusinessValue(property) {
        var _a, _b;
        if (property === 'fatca' || property === 'licensed') {
            return this.businessDetails[property] === undefined ? '' : this.businessDetails[property] ? 'Yes' : 'No';
        }
        if (property === 'phoneNumber') {
            return `${(_a = Object(_common_mixin__WEBPACK_IMPORTED_MODULE_6__["toCountryCallingCode"])(this.businessDetails.phoneCountryCode)) !== null && _a !== void 0 ? _a : ''} ${(_b = this.businessDetails.phoneNumber) !== null && _b !== void 0 ? _b : ''}`;
        }
        return this.businessDetails[property];
    }
};
UserInfoTableComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserInfoTableComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
UserInfoTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'user-info-table',
        template: _raw_loader_user_info_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserInfoTableComponent);



/***/ }),

/***/ "9aJX":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/welcome/welcome.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ 'common.welcome-to' | translate }} {{ displayName }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"dismiss()\">&times;</button>\n</div>\n<div class=\"modal-subheader\">{{ 'common.lets-complete' | translate }}</div>\n<div class=\"modal-body py-3\">\n    <div class=\"row py-2 b-b-1\">\n        <div class=\"col-sm-24\">\n            <div class=\"welcome-step media align-items-center\" [ngClass]=\"{ completed: user?.status !== 'pending' }\">\n                <img src=\"/img/icons/secure-transaction.svg\" class=\"mr-3 img-sm\" />\n                <div class=\"media-body pt-1\">\n                    <confirm-mail-reminder [user]=\"user\"></confirm-mail-reminder>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row py-2 b-b-1\">\n        <div class=\"col-sm-24\">\n            <div class=\"welcome-step media align-items-center\" [ngClass]=\"{ completed: user?.approvedAt }\">\n                <img src=\"/img/icons/resume.svg\" class=\"mr-3 img-sm\" />\n                <div class=\"media-body pt-1\">\n                    {{ 'common.remember-to' | translate }}\n                    <a [routerLink]=\"!user?.approvedAt ? ['/verify'] : undefined\" (click)=\"close()\">{{\n                        'common.complete-your-profile' | translate\n                    }}</a>\n                    {{ 'common.for-full-access' | translate }}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row py-2\">\n        <div class=\"col-sm-24\">\n            <div class=\"welcome-step media align-items-center\" [ngClass]=\"{ completed: user?.twoFactor }\">\n                <img src=\"/img/icons/protection2.svg\" class=\"mr-3 img-sm\" />\n                <div class=\"media-body pt-1\">\n                    {{ 'common.consider' | translate }}\n                    <a [routerLink]=\"!user?.twoFactor ? ['/account/security'] : undefined\" (click)=\"close()\">{{\n                        'common.enabling-two-factor' | translate\n                    }}</a>\n                    {{ 'common.to-make-secure' | translate }}.\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button class=\"btn btn-primary btn-w-sm\" (click)=\"close()\">{{ 'common.proceed-to-dashboard' | translate }}</button>\n</div>\n");

/***/ }),

/***/ "9aP3":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/alert-outlet/alert-outlet.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert-outlet\" [ngClass]=\"{ 'alert-outlet-full-width': layout === 'full-width' }\">\n    <div\n        class=\"alert\"\n        [ngClass]=\"'alert-' + alert.severity + (layout === 'default' ? ' alert-dismissible' : '')\"\n        role=\"alert\"\n        *ngFor=\"let alert of alertService.alerts\"\n    >\n        <ng-container *ngIf=\"layout === 'default'\">\n            <span [innerHtml]=\"alert.message\"></span>\n            <button type=\"button\" class=\"close\" (click)=\"alertService.remove(alert)\">&times;</button>\n        </ng-container>\n        <ng-container *ngIf=\"layout === 'full-width'\">\n            <div class=\"container d-flex justify-content-between align-items-center\">\n                <div>\n                    <fa-icon class=\"mx-2\" [icon]=\"alert.icon\" *ngIf=\"alert.icon\"></fa-icon>\n                    <span [innerHtml]=\"alert.message\"></span>\n                    <ng-container *ngIf=\"alert.callToAction\">\n                        <span>&nbsp;</span><a [routerLink]=\"[alert.callToAction.route]\">{{ alert.callToAction.label }}</a>\n                    </ng-container>\n                </div>\n                <div>\n                    <button type=\"button\" class=\"btn btn-link\" (click)=\"alertService.remove(alert)\"><fa-icon [icon]=\"faTimes\"></fa-icon></button>\n                </div>\n            </div>\n        </ng-container>\n    </div>\n</div>\n");

/***/ }),

/***/ "9rdc":
/*!*********************************************************************!*\
  !*** ./src/app/common/validators/ip-address-validator.directive.ts ***!
  \*********************************************************************/
/*! exports provided: IpAddressValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpAddressValidatorDirective", function() { return IpAddressValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var IpAddressValidatorDirective_1;



let IpAddressValidatorDirective = IpAddressValidatorDirective_1 = class IpAddressValidatorDirective {
    validate(control) {
        var _a;
        if (!((_a = control.value) === null || _a === void 0 ? void 0 : _a.match(/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/g))) {
            return { ipAddressError: true };
        }
        return null;
    }
};
IpAddressValidatorDirective = IpAddressValidatorDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ipAddressValidator]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: IpAddressValidatorDirective_1, multi: true }],
    })
], IpAddressValidatorDirective);



/***/ }),

/***/ "A3TI":
/*!**********************************************************!*\
  !*** ./src/app/common/services/notifications.service.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session.service */ "6g7h");






let NotificationsService = class NotificationsService {
    constructor(session, http) {
        this.session = session;
        this.http = http;
        this.unreadNotificationsStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.notifyEvent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.notifyEvent, this.session.userEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event.type === _session_service__WEBPACK_IMPORTED_MODULE_5__["UserEventType"].LOGIN)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.session.userStream), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(user => this.http.head(`/users/${user.id}/notifications`, {
            observe: 'response',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('read', 'false'),
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response && response.headers.has('x-total-count') ? ~~response.headers.get('x-total-count') : 0))
            .subscribe(count => {
            this.unreadNotificationsStream.next(count);
        });
    }
};
NotificationsService.ctorParameters = () => [
    { type: _session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
NotificationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], NotificationsService);



/***/ }),

/***/ "AqLL":
/*!***************************************************************!*\
  !*** ./src/app/common/contact-book/contact-book.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactBookComponent, openContactBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactBookComponent", function() { return ContactBookComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openContactBook", function() { return openContactBook; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_book_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact-book.component.html */ "95zY");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "uB96");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common.mixin */ "s/H0");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../list.component */ "aJRI");
/* harmony import */ var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/confirmation.service */ "fTmd");
/* harmony import */ var _services_core_contact_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/core/contact.service */ "8fJJ");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/session.service */ "6g7h");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/toastr.service */ "N/y2");

















let ContactBookComponent = class ContactBookComponent extends _list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"] {
    constructor(http, ngbModal, changeDetector, route, router, session, confirmation, modal, toastr, contactService, translate) {
        super(http, ngbModal, changeDetector, route, router, session, confirmation);
        this.modal = modal;
        this.toastr = toastr;
        this.contactService = contactService;
        this.translate = translate;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        // This one is only use for display, since we need to manipulate search property before sending it
        this.searchText = '';
        this.isLoading = false;
        this.deletingContacts = new Set();
        this.defaultLimit = 5;
        this.faTrash = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrash"];
        this.faUserAltSlash = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUserAltSlash"];
    }
    ngOnInit() {
        this.apiUrl = `/users/${this.user.id}/contacts`;
        super.ngOnInit();
    }
    addContact(name) {
        this.isLoading = true;
        this.http
            .get(this.apiUrl, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('search', name.trim().replace(/\s/g, '')),
        })
            .subscribe(contacts => {
            const contact = contacts.find(c => !!c.counterUser && (c.counterUser.accountNumber === name || c.counterUser.email === name));
            if (contact) {
                this.isLoading = false;
                this.onSelect.emit(contact);
            }
            else {
                if (!Object(_common_mixin__WEBPACK_IMPORTED_MODULE_11__["isAccountNumber"])(name, { allowSpaces: true }) && !Object(_common_mixin__WEBPACK_IMPORTED_MODULE_11__["isEmail"])(name)) {
                    this.toastr.error(this.translate.instant('contact-book.must-be-an-account-number-or-email'));
                    this.isLoading = false;
                    return;
                }
                this.contactService
                    .create({
                    counterUser: Object(_common_mixin__WEBPACK_IMPORTED_MODULE_11__["isEmail"])(name)
                        ? { email: name.trim().replace(/\s/g, '') }
                        : { accountNumber: name.trim().replace(/\s/g, '') },
                    baseUser: { id: this.user.id },
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
                    this.isLoading = false;
                }))
                    .subscribe(() => {
                    this.updateEvent.next();
                    this.onUpdate.emit();
                });
            }
        });
    }
    removeContact(contact) {
        if (this.deletingContacts.has(contact.id)) {
            return;
        }
        this.deletingContacts.add(contact.id);
        this.http
            .delete(`/contacts/${contact.id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.deletingContacts.delete(contact.id);
        }))
            .subscribe(() => {
            this.updateEvent.next();
            this.onUpdate.emit();
        });
    }
    searchContacts(search) {
        this.search = search.replace(/ /g, '');
        this.searchEvent.next();
    }
    changeState() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // do nothing
        });
    }
};
ContactBookComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_15__["SessionService"] },
    { type: _services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmationService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"] },
    { type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_16__["ToastrService"] },
    { type: _services_core_contact_service__WEBPACK_IMPORTED_MODULE_14__["ContactService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
];
ContactBookComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    onUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
ContactBookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'contact-book',
        template: _raw_loader_contact_book_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('showButton', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    width: '55px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    width: '0',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('0 <=> 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms')),
            ]),
        ],
    })
], ContactBookComponent);

function openContactBook(ngbModal, owner) {
    const contactBookModal = ngbModal.open(ContactBookComponent, {
        windowClass: 'modal-primary',
    });
    const contactBook = contactBookModal.componentInstance;
    contactBook.user = owner;
    return contactBookModal;
}


/***/ }),

/***/ "AxWo":
/*!******************************************************!*\
  !*** ./src/app/common/services/core/user.service.ts ***!
  \******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/core/user.model */ "vk+e");





let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    updateDetails(id, body) {
        return this.http.put(`/users/${id}/details`, body);
    }
    changePassword(id, password, headers) {
        return this.http
            .post(`/users/${id}/change-password`, { password }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](Object.assign({ 'Content-Type': 'application/json' }, headers)),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    changeEmail(id, email) {
        return this.http.post(`/users/${id}/change-email`, { email }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    changePermission(id, permissions) {
        return this.http
            .post(`/users/${id}/change-permission`, { permissions })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    changeSegment(id, segment) {
        return this.http.post(`/users/${id}/change-segment`, { segment }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    changeReferrer(id, referrerId) {
        return this.http
            .post(`/users/${id}/change-referrer`, { referrerId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    changeAssociation(id, associationId) {
        return this.http
            .post(`/admin/users/${id}/change-association`, { associationId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    changeExternalId(id, externalId) {
        return this.http
            .post(`/admin/users/${id}/change-external-id`, { externalId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    changeRole(id, role) {
        return this.http.post(`/users/${id}/change-role`, { role }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    changeStatus(id, status) {
        return this.http.post(`/users/${id}/change-status`, { status }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    changeRiskRating(id, riskRating) {
        return this.http
            .post(`/users/${id}/change-risk-rating`, { riskRating })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    changeTwoFactor(id, twoFactor, headers) {
        return this.http
            .post(`/users/${id}/change-two-factor`, { twoFactor }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](Object.assign({ 'Content-Type': 'application/json' }, headers)),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    changePreferredCurrency(id, preferredCurrency) {
        return this.http
            .post(`/users/${id}/change-preferred-currency`, { preferredCurrency })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    changeBillingCurrency(id, billingCurrency) {
        return this.http
            .post(`/users/${id}/change-billing-currency`, { billingCurrency })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    changeSendEmailNotifications(id, sendEmailNotifications) {
        return this.http
            .post(`/users/${id}/change-send-email-notifications`, { sendEmailNotifications })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    changeFlags(id, flags) {
        return this.http.post(`/users/${id}/change-flags`, { flags }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    changeCardProgram(id, cardProgramId) {
        return this.http
            .post(`/admin/users/${id}/change-card-program`, { cardProgramId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    patch(id, operations) {
        return this.http
            .patch(`/users/${id}`, operations, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json-patch+json',
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(payload => new _models_core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](payload)));
    }
    resendActivationMail(id) {
        return this.http.post(`/users/${id}`, {
            id: Math.floor(Math.random() * 10000),
            jsonrpc: '2.0',
            method: 'resendActivationMail',
        }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json-rpc' }),
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], UserService);



/***/ }),

/***/ "AyX1":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/circle-spinner/circle-spinner.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- htmllint attr-bans=\"[]\" -->\n<div class=\"spinner-wrapper\" [ngClass]=\"theme\">\n    <div class=\"circle-spinner\" title=\"0\">\n        <svg\n            version=\"1.1\"\n            id=\"loader-1\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            x=\"0px\"\n            y=\"0px\"\n            width=\"50px\"\n            height=\"50px\"\n            viewBox=\"0 0 40 40\"\n            enable-background=\"new 0 0 40 40\"\n            xml:space=\"preserve\"\n        >\n            <path\n                opacity=\"0.2\"\n                fill=\"#000\"\n                d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"\n            ></path>\n            <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z\">\n                <animateTransform\n                    attributeType=\"xml\"\n                    attributeName=\"transform\"\n                    type=\"rotate\"\n                    from=\"0 20 20\"\n                    to=\"360 20 20\"\n                    dur=\"0.5s\"\n                    repeatCount=\"indefinite\"\n                ></animateTransform>\n            </path>\n        </svg>\n    </div>\n</div>\n<!-- htmllint attr-bans=\"$previous\" -->\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    appName: 'xabaas',
    displayName: 'Xavista',
    accountOpeningFeeEnabled: false,
    cryptoDepositAddresses: {
        BTC: 'bc1q0d4ts4wre7eh96mv6dns09lzpj92knfvznflnx',
        BSV: '1P4TmVrjT856D2uiF3gZqpnC5TBYzwDtRu',
        ETH: '0x900A8Df166f5625AA80F821e38f1Acef922e1Fc0',
        LTC: 'Lh4y3TRQBZDXRL7gs9XChD2TSbsgnmUMHA',
        'USDC.erc20': '0x900A8Df166f5625AA80F821e38f1Acef922e1Fc0',
        'USDT.erc20': '0x900A8Df166f5625AA80F821e38f1Acef922e1Fc0',
        'USDT.trc20': 'TKD5QD9C3mrfZAEG5RGbc6PrjSuH7P3pWY',
    },
};


/***/ }),

/***/ "B/uM":
/*!*************************************************************!*\
  !*** ./src/app/common/fee-preview/fee-preview.component.ts ***!
  \*************************************************************/
/*! exports provided: FeePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeePreviewComponent", function() { return FeePreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fee_preview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fee-preview.component.html */ "ESgU");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! currency-symbol-map */ "1yQU");
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(currency_symbol_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/accounting/currency.model */ "/e3T");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/session.service */ "6g7h");











let FeePreviewComponent = class FeePreviewComponent {
    constructor(http, session) {
        this.http = http;
        this.session = session;
        this.faCircleNotch = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCircleNotch"];
        this.currencySymbolMap = currency_symbol_map__WEBPACK_IMPORTED_MODULE_6__["currencySymbolMap"];
        this.prefix = false;
        this.spreadUp = undefined;
        this.fixedFeeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.relativeFeeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.beneficiaryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.currencyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isLoading = true;
        this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.currencies = [];
        this.fxSpread = null;
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.feeStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(undefined), this.fetchEvent).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(() => {
            this.isLoading = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(() => !(this.type && this.method && this.currency)
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([
                // fetch the fee itself for the current set of { method, type, currency }
                this.http.post('/fees', {
                    id: Math.round(Math.random() * 10000),
                    jsonrpc: '2.0',
                    method: 'findByPrimaryAttributes',
                    params: {
                        type: this.type,
                        method: this.method,
                        user: this.session.user ? { id: this.session.user.id } : null,
                        currency: this.currency ? { code: this.currency.code } : null,
                    },
                }, {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json-rpc',
                    }),
                }),
                this.spreadUp === undefined
                    ? Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(undefined)
                    : this.http.post('/fees', {
                        id: Math.round(Math.random() * 10000),
                        jsonrpc: '2.0',
                        method: 'findByPrimaryAttributes',
                        params: {
                            type: 'fx-spread',
                            method: 'internal',
                            user: this.session.user ? { id: this.session.user.id } : null,
                            currency: this.currency ? { code: this.currency.code } : null,
                        },
                    }, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-Type': 'application/json-rpc',
                        }),
                    }),
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(([{ result }, fxSpreadResponse]) => {
                this.fixedFeeChange.emit(result && result.fixed);
                this.relativeFeeChange.emit(result && result.relative);
                this.currencyChange.emit(result && new _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_9__["Currency"](result.currency));
                if (this.type === 'deposit') {
                    this.beneficiaryChange.emit(result && result.beneficiary);
                }
                if (fxSpreadResponse) {
                    this.fxSpread = fxSpreadResponse.result;
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(([{ result }]) => (result ? result : { relative: '0.0', currency: this.currency })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
                this.isLoading = false;
            }))));
    }
    ngOnInit() {
        this.http.get('/currencies', { params: { limit: 100 + '' } }).subscribe(response => {
            this.currencies = response.data;
            this.fetchEvent.next();
        });
    }
    ngOnChanges() {
        this.fetchEvent.next();
    }
    calculateAmount(fee) {
        if (!this.currency || !this.currencies) {
            return '0.0';
        }
        const found = this.currencies.find(currency => this.currency && currency.code === this.currency.code);
        const precision = found ? found.decimalPlaces : 2;
        const relativeFeeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(this.amount || 0).times(fee.relative || 0).toFixed(precision || 8, 1);
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(this.calculateFixedFee(fee)).plus(relativeFeeAmount).toFixed(precision || 8, 1);
    }
    convert(amount, baseCurrency, counterCurrency) {
        const base = this.currencies.find(currency => currency.code === baseCurrency.code);
        const counter = this.currencies.find(currency => currency.code === counterCurrency.code);
        if (!base || !counter) {
            return '0';
        }
        return _models_accounting_currency_model__WEBPACK_IMPORTED_MODULE_9__["Currency"].convert(amount, base, counter, this.spreadUp !== undefined && this.fxSpread ? this.fxSpread : undefined, this.spreadUp);
    }
    calculateFixedFee(fee) {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(fee.fixed && this.currency ? this.convert(fee.fixed, fee.currency, this.currency) : 0).toFixed(8, 1);
    }
};
FeePreviewComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] }
];
FeePreviewComponent.propDecorators = {
    prefix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    method: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    spreadUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    fixedFeeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    relativeFeeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    beneficiaryChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    currencyChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
FeePreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'fee-preview',
        template: _raw_loader_fee_preview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], FeePreviewComponent);



/***/ }),

/***/ "B1CS":
/*!********************************!*\
  !*** ./src/app/common/file.ts ***!
  \********************************/
/*! exports provided: FileView, buildFileUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileView", function() { return FileView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildFileUrl", function() { return buildFileUrl; });
class FileView {
    constructor() {
        if (!window.navigator || !window.navigator.msSaveOrOpenBlob) {
            const tab = window.open();
            if (!tab) {
                throw new Error('Could not open new window');
            }
            this.tab = tab;
        }
    }
    show(blob, name) {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, name);
        }
        else {
            this.tab.location.replace(URL.createObjectURL(blob));
        }
    }
    close() {
        if (this.tab) {
            this.tab.close();
        }
    }
}
function buildFileUrl(file) {
    return `https://s3.amazonaws.com/${file.bucket}/${file.key}`;
}


/***/ }),

/***/ "B4Go":
/*!************************************************************************************!*\
  !*** ./src/app/app/core/header/online-users-count/online-users-count.component.ts ***!
  \************************************************************************************/
/*! exports provided: OnlineUsersCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineUsersCountComponent", function() { return OnlineUsersCountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_online_users_count_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./online-users-count.component.html */ "gfWd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_services_core_statistics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/services/core/statistics.service */ "3DHm");







let OnlineUsersCountComponent = class OnlineUsersCountComponent {
    constructor(statistics) {
        this.statistics = statistics;
        this.faUsers = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUsers"];
        this.userCount$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, 1000 * 60).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(() => this.statistics.getOnlineUsersCount()));
    }
};
OnlineUsersCountComponent.ctorParameters = () => [
    { type: _common_services_core_statistics_service__WEBPACK_IMPORTED_MODULE_6__["StatisticsService"] }
];
OnlineUsersCountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'online-users-count',
        template: _raw_loader_online_users_count_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], OnlineUsersCountComponent);



/***/ }),

/***/ "C7lA":
/*!****************************************************!*\
  !*** ./src/app/common/errorhandler.interceptor.ts ***!
  \****************************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _no_access_modal_no_access_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./no-access-modal/no-access-modal.component */ "gZSw");
/* harmony import */ var _services_logout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/logout.service */ "2kWO");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/session.service */ "6g7h");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/toastr.service */ "N/y2");
var ErrorHandlerInterceptor_1;










let ErrorHandlerInterceptor = ErrorHandlerInterceptor_1 = class ErrorHandlerInterceptor {
    constructor(toastr, logoutService, modal, session) {
        this.toastr = toastr;
        this.logoutService = logoutService;
        this.modal = modal;
        this.session = session;
    }
    intercept(req, next) {
        const shouldLogOut = !(req.headers.get('X-No-Logout') && JSON.parse(req.headers.get('X-No-Logout')));
        const ignoreErrorHandling = !!(req.headers.get('X-Ignore-Error-Handling') && JSON.parse(req.headers.get('X-Ignore-Error-Handling')));
        const suppressToast = req.headers.get('X-No-Toast') && JSON.parse(req.headers.get('X-No-Toast'));
        return next
            .handle(req.clone({
            headers: req.headers.delete('X-No-Logout').delete('X-Ignore-Error-Handling').delete('X-No-Toast'),
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retryWhen"])(attempts => attempts.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])((error, attempt) => {
            // only retry 503 maintenance errored requests
            if (error.status !== 503) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }
            const retryAttempt = attempt + 1;
            // if maximum number of retries have been exceeded, throw an error
            if (retryAttempt > ErrorHandlerInterceptor_1.MAX_RETRY_ATTEMPTS) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }
            // retry after increasing delay, 1000ms, 2000ms, 3000ms, abort
            // eslint-disable-next-line no-console
            console.log(`Attempt ${retryAttempt}: retrying in ${retryAttempt * 1000}ms`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(retryAttempt * 1000);
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(err => {
            var _a;
            if (!ignoreErrorHandling && err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                const response = err;
                let error;
                if (response.status === -1) {
                    error = new Error('Connection refused');
                }
                else if (response.status === 0) {
                    error = new Error('Request failed');
                }
                else if (response.error) {
                    error = response.error;
                }
                else if (response.message) {
                    error = new Error(response.message);
                }
                else {
                    error = new Error(response.statusText || 'Error ' + response.status);
                }
                if (response.status !== 503) {
                    // blacklist of error codes to be hidden from toasts
                    if (!suppressToast &&
                        ![
                            'VerificationRequiredError',
                            'RecipientNotFoundError',
                            'Require2FACodeError',
                        ].includes(error.name)) {
                        if ((_a = error.errors) === null || _a === void 0 ? void 0 : _a.length) {
                            for (const errorText of error.errors) {
                                this.toastr.error(errorText);
                            }
                        }
                        else {
                            this.toastr.error(error.message);
                        }
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(() => {
                        if (shouldLogOut &&
                            err.status === 401 &&
                            this.session.isAuthenticated() &&
                            // These errors should not lead to logging out the user
                            ![
                                'Wrong2FACodeError',
                                'Require2FACodeError',
                                'WrongCredentialsError',
                                'WrongPasswordError',
                            ].includes(error.name)) {
                            return this.logoutService.logout();
                        }
                        if (error.name === 'VerificationRequiredError') {
                            this.modal.dismissAll();
                            Object(_no_access_modal_no_access_modal_component__WEBPACK_IMPORTED_MODULE_6__["openNoAccessModal"])(this.modal, error.name);
                        }
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(Object.assign(error, {
                        severity: 'danger',
                        name: error.name || response.name || 'Server error',
                        status: response.status,
                        caughtByInterceptor: true,
                    }))));
                }
                else {
                    // backend is in maintenance mode, reload to see if the frontend is affected as well
                    setTimeout(() => window.location.reload(), 1000);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        }));
    }
};
ErrorHandlerInterceptor.MAX_RETRY_ATTEMPTS = 3;
ErrorHandlerInterceptor.ctorParameters = () => [
    { type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] },
    { type: _services_logout_service__WEBPACK_IMPORTED_MODULE_7__["LogoutService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"] }
];
ErrorHandlerInterceptor = ErrorHandlerInterceptor_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ErrorHandlerInterceptor);



/***/ }),

/***/ "CGvB":
/*!****************************************************************!*\
  !*** ./src/app/app/status-message/status-message.component.ts ***!
  \****************************************************************/
/*! exports provided: StatusMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusMessageComponent", function() { return StatusMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_status_message_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./status-message.component.html */ "R2cc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _status_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status-message.service */ "pQbz");




let StatusMessageComponent = class StatusMessageComponent {
    constructor(statusMessage) {
        this.statusMessage = statusMessage;
    }
};
StatusMessageComponent.ctorParameters = () => [
    { type: _status_message_service__WEBPACK_IMPORTED_MODULE_3__["StatusMessageService"] }
];
StatusMessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'status-message',
        template: _raw_loader_status_message_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], StatusMessageComponent);



/***/ }),

/***/ "Dj0T":
/*!*********************************************!*\
  !*** ./src/app/common/numeric.directive.ts ***!
  \*********************************************/
/*! exports provided: NumericDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericDirective", function() { return NumericDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let NumericDirective = class NumericDirective {
    constructor(el) {
        this.el = el;
        this.decimals = 0;
    }
    onKeyDown() {
        this.run(this.el.nativeElement.value);
    }
    onPaste() {
        this.run(this.el.nativeElement.value);
    }
    check(value) {
        if (this.decimals <= 0) {
            return String(value).match(new RegExp(/^\d+$/));
        }
        else {
            const regExpString = '^\\s*((\\d+(\\.\\d{0,' + this.decimals + '})?)|((\\d*(\\.\\d{1,' + this.decimals + '}))))\\s*$';
            return String(value).match(new RegExp(regExpString));
        }
    }
    run(oldValue) {
        setTimeout(() => {
            const currentValue = this.el.nativeElement.value;
            if (currentValue !== '' && !this.check(currentValue)) {
                this.el.nativeElement.value = oldValue;
            }
        });
    }
};
NumericDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
NumericDirective.propDecorators = {
    decimals: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keydown',] }],
    onPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['paste',] }]
};
NumericDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[numeric]',
    })
], NumericDirective);



/***/ }),

/***/ "E108":
/*!**********************************************!*\
  !*** ./src/app/app/error-handler.service.ts ***!
  \**********************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/browser */ "WSEr");
/* harmony import */ var _sentry_integrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/integrations */ "TGyJ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/services/confirmation.service */ "fTmd");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");








let AppErrorHandler = class AppErrorHandler {
    constructor(session, platformId, injector) {
        this.platformId = platformId;
        this.injector = injector;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId) && window.SENTRY_DSN) {
            this.sentryHub = new _sentry_browser__WEBPACK_IMPORTED_MODULE_3__["Hub"](new _sentry_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserClient"]({
                dsn: window.SENTRY_DSN,
                debug: false,
                release: '1.0.0',
                environment: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appName,
                integrations: [new _sentry_integrations__WEBPACK_IMPORTED_MODULE_4__["Dedupe"]()],
            }));
            session.userEvent.subscribe(event => {
                this.sentryHub.configureScope(scope => {
                    if (event.type === _common_services_session_service__WEBPACK_IMPORTED_MODULE_7__["UserEventType"].LOGIN) {
                        scope.setUser({
                            id: event.user.id,
                            email: event.user.email,
                            username: event.user.accountNumber,
                        });
                    }
                    else if (event.type === _common_services_session_service__WEBPACK_IMPORTED_MODULE_7__["UserEventType"].LOGOUT) {
                        scope.setUser(null);
                    }
                });
            });
        }
    }
    handleError(error) {
        if (error.caughtByInterceptor) {
            // silent
            return;
        }
        // eslint-disable-next-line no-console
        console.error(error);
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            return;
        }
        // Reload webpage on chunk loading error when browsing with outdated client
        const chunkFailedMessage = /Loading chunk [\d]+ failed/;
        if (chunkFailedMessage.test(error.message)) {
            const confirmation = this.injector.get(_common_services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]);
            confirmation
                .show({
                type: 'danger',
                text: 'It seems that you are using an outdated version of our website. Please reload to continue browsing our shiny new one.',
                title: 'New version detected',
                showCancel: false,
                confirmText: 'Reload',
                confirmClass: 'danger',
            })
                .subscribe(() => {
                window.location.reload();
            });
            return;
        }
        if (this.sentryHub) {
            this.sentryHub.captureException(error.originalError || error);
        }
    }
};
AppErrorHandler.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
];
AppErrorHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AppErrorHandler);



/***/ }),

/***/ "EBvh":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/beneficiary-form/beneficiary-form.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"form-validation e2e-beneficiary-form\"\n    #beneficiaryForm=\"ngForm\"\n    (ngSubmit)=\"submit()\"\n    [ngClass]=\"{ 'ng-submitted': beneficiaryForm.submitted }\"\n    autocomplete=\"false\"\n    novalidate\n>\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title\">\n            {{ (item.id ? 'common.update' : 'common.create') | translate }}\n            {{ (item.type === 'deposit-instruction' ? 'common.deposit-instruction' : 'common.beneficiary') | translate }}\n        </h5>\n        <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n    </div>\n    <div class=\"modal-body\">\n        <ng-container *ngIf=\"!compact\">\n            <div *ngIf=\"!hideFields.includes('owner')\" class=\"form-group\">\n                <label for=\"owner\">{{ 'common.owner' | translate }}</label>\n                <ng-select\n                    id=\"owner\"\n                    name=\"owner\"\n                    [placeholder]=\"'common.enter-owner' | translate\"\n                    [(ngModel)]=\"owner\"\n                    #ownerInput=\"ngModel\"\n                    [items]=\"legalEntitiesSteam | async\"\n                    [typeahead]=\"ownerAutocomplete\"\n                    [disabled]=\"item.id || fixateType\"\n                >\n                    <ng-template ng-label-tmp let-entry=\"item\">\n                        {{ entry?.user.name }}\n                        <small class=\"text-gray\">{{ entry?.user.email }}</small>\n                    </ng-template>\n                    <ng-template ng-option-tmp let-entry=\"item\">\n                        <div class=\"d-flex align-items-center justify-content-center\">\n                            <user-avatar *ngIf=\"entry\" [user]=\"entry?.user\" size=\"sm\" elementClass=\"mr-2\"></user-avatar>\n                            <div class=\"w-100\">\n                                <div>{{ entry?.user.name }}</div>\n                                <small class=\"text-gray\">{{ entry?.user.email }}</small>\n                            </div>\n                        </div>\n                    </ng-template>\n                </ng-select>\n                <div *ngIf=\"ownerInput.invalid && (beneficiaryForm.submitted || ownerInput.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"ownerInput?.errors?.validateObject\">\n                        {{ 'common.please-choose-owner' | translate }}.\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"!hideFields.includes('type')\" class=\"form-group\">\n                <label for=\"type\">{{ 'common.type' | translate }}</label>\n                <ng-select\n                    name=\"type\"\n                    [items]=\"beneficiaryTypes\"\n                    [placeholder]=\"'common.select-type' | translate\"\n                    [(ngModel)]=\"copy.type\"\n                    [clearable]=\"false\"\n                    #type=\"ngModel\"\n                    [disabled]=\"item.id || fixateType\"\n                    required\n                >\n                    <ng-template ng-label-tmp let-item=\"item\">\n                        {{ item | startCase }}\n                    </ng-template>\n                    <ng-template ng-option-tmp let-item=\"item\">\n                        {{ item | startCase }}\n                    </ng-template>\n                </ng-select>\n                <div *ngIf=\"type.invalid && (beneficiaryForm.submitted || type.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"type?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n        </ng-container>\n        <div *ngIf=\"!hideFields.includes('method')\" class=\"form-group\">\n            <label for=\"type\">{{ 'common.method' | translate }}</label>\n            <ng-select\n                name=\"method\"\n                [items]=\"beneficiaryMethods\"\n                [placeholder]=\"'common.select-method' | translate\"\n                [(ngModel)]=\"copy.method\"\n                [clearable]=\"false\"\n                (change)=\"onChangeMethod($event)\"\n                [disabled]=\"item.id || fixateType\"\n                #method=\"ngModel\"\n                required\n            >\n                <ng-template ng-label-tmp let-item=\"item\">\n                    {{ item | uppercase }}\n                </ng-template>\n                <ng-template ng-option-tmp let-item=\"item\">\n                    {{ item | uppercase }}\n                </ng-template>\n            </ng-select>\n            <div *ngIf=\"method.invalid && (beneficiaryForm.submitted || method.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"method?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <ng-container *ngIf=\"copy.method\">\n            <div class=\"form-group\" *ngIf=\"!hideFields.includes('currency')\">\n                <label for=\"currency\">{{ 'common.currency' | translate }}</label>\n                <ng-select\n                    [items]=\"currencies\"\n                    [placeholder]=\"'common.select-currency' | translate\"\n                    name=\"currency\"\n                    id=\"currency\"\n                    [clearable]=\"false\"\n                    [(ngModel)]=\"copy.currency\"\n                    #currency=\"ngModel\"\n                    required\n                    [searchable]=\"false\"\n                    [disabled]=\"item.id || fixateType\"\n                >\n                    <ng-template ng-label-tmp let-item=\"item\"> {{ item?.code }} - {{ item?.name }} </ng-template>\n                    <ng-template ng-option-tmp let-item=\"item\"> {{ item?.code }} - {{ item?.name }} </ng-template>\n                </ng-select>\n                <div *ngIf=\"currency.invalid && (beneficiaryForm.submitted || currency.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"currency?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n            <beneficiary-details-form [beneficiary]=\"copy\" [requireAll]=\"false\" #beneficiaryDetailsForm></beneficiary-details-form>\n        </ng-container>\n    </div>\n    <div class=\"modal-footer\">\n        <button\n            type=\"button\"\n            class=\"btn btn-danger btn-w-sm e2e-delete-beneficiary-btn\"\n            (click)=\"delete()\"\n            *ngIf=\"item.id\"\n            [ngClass]=\"{ loading: isDeleting }\"\n            [disabled]=\"isSaving || isDeleting\"\n        >\n            {{ 'common.delete' | translate }}\n        </button>\n        <button type=\"submit\" class=\"btn btn-primary btn-w-sm\" [ngClass]=\"{ loading: isSaving }\" [disabled]=\"isSaving || isDeleting\">\n            {{ (item.id ? 'common.update' : 'common.create') | translate }}\n        </button>\n    </div>\n</form>\n");

/***/ }),

/***/ "ES5P":
/*!**********************************************!*\
  !*** ./src/app/common/validate.directive.ts ***!
  \**********************************************/
/*! exports provided: ValidateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateDirective", function() { return ValidateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var date_fns_isValid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/isValid */ "Se/U");
var ValidateDirective_1;




let ValidateDirective = ValidateDirective_1 = class ValidateDirective {
    validate(control) {
        const value = control.value;
        if (!value) {
            return null;
        }
        switch (this.useValidator) {
            case 'object':
                return typeof value !== 'object' ? { validateObject: true } : null;
            case 'date':
                if (typeof value === 'string') {
                    const date = value.replace(/_/g, '').replace(/\//g, '');
                    if (date.length === 8 &&
                        Object(date_fns_isValid__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(`${date.slice(4)}-${date.slice(2, 4)}-${date.slice(0, 2)}`))) {
                        return null;
                    }
                }
                return { validateDate: true };
        }
        return null;
    }
};
ValidateDirective.propDecorators = {
    useValidator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ValidateDirective = ValidateDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[useValidator]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: ValidateDirective_1, multi: true }],
    })
], ValidateDirective);



/***/ }),

/***/ "ESgU":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/fee-preview/fee-preview.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"feeStream | async as fee\">\n    <ng-container *ngIf=\"!isLoading; else loadingFee\">\n        <span>\n            <ng-container *ngIf=\"prefix && currency\">{{ currencySymbolMap[currency.code] }}</ng-container\n            >{{ calculateAmount(fee) }} {{ currency?.code }}\n        </span>\n    </ng-container>\n</ng-container>\n<ng-template #loadingFee>\n    <fa-icon [icon]=\"faCircleNotch\" [spin]=\"true\"></fa-icon>\n</ng-template>\n");

/***/ }),

/***/ "F8TI":
/*!********************************************!*\
  !*** ./src/app/common/format-date.pipe.ts ***!
  \********************************************/
/*! exports provided: FormatDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatDatePipe", function() { return FormatDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/format */ "sWYD");
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/parseISO */ "4+6U");




let FormatDatePipe = class FormatDatePipe {
    transform(value, format) {
        if (typeof value !== 'string') {
            return value;
        }
        return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__["default"])(value), format);
    }
};
FormatDatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'formatDate' })
], FormatDatePipe);



/***/ }),

/***/ "G2bf":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/copy-wrap/copy-wrap.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n    href\n    class=\"text-decoration-none\"\n    (click)=\"$event.preventDefault(); $event.stopPropagation(); copy()\"\n    ngbTooltip=\"Copied\"\n    [triggers]=\"''\"\n    #tooltip=\"ngbTooltip\"\n>\n    <ng-content></ng-content>\n</a>\n");

/***/ }),

/***/ "GWtm":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/permission-select/permission-select.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h6>{{ 'permission-select.payment-methods' | translate }}</h6>\n<div *ngFor=\"let permission of paymentPermissions; let i = index\" class=\"custom-controls-stacked\">\n    <label class=\"custom-control custom-switch\">\n        <input\n            type=\"checkbox\"\n            name=\"payment-{{ i }}\"\n            class=\"custom-control-input\"\n            [value]=\"permission\"\n            (change)=\"togglePaymentMethod(permission, $event.target.checked)\"\n            [checked]=\"permissions.indexOf(permission) !== -1\"\n            [disabled]=\"!['admin'].includes(session.user?.role)\"\n        />\n        <span class=\"custom-control-label font-md text-uppercase\">\n            {{ getPermissionLabel(permission) }}\n        </span>\n    </label>\n</div>\n<h6 class=\"mt-3\">{{ 'common.features' | translate }}</h6>\n<div *ngFor=\"let permission of featurePermissions; let i = index\" class=\"custom-controls-stacked\">\n    <label class=\"custom-control custom-switch\">\n        <input\n            type=\"checkbox\"\n            name=\"features-{{ i }}\"\n            class=\"custom-control-input\"\n            [value]=\"permission\"\n            (change)=\"toggleFeature(permission, $event.target.checked)\"\n            [checked]=\"permissions.indexOf(permission) !== -1\"\n            [disabled]=\"!['admin'].includes(session.user?.role)\"\n        />\n        <span class=\"custom-control-label font-md\">\n            {{ getPermissionLabel(permission) }}\n        </span>\n    </label>\n</div>\n");

/***/ }),

/***/ "GmPh":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/profile-documents/user-file-form/user-file-form.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"form-validation e2e-file-form\"\n    #userFileForm=\"ngForm\"\n    (ngSubmit)=\"save()\"\n    [ngClass]=\"{ 'ng-submitted': userFileForm.submitted }\"\n    autocomplete=\"false\"\n    novalidate\n>\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{ 'common.update-file' | translate }}</h5>\n        <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"form-group\">\n            <label for=\"type\">{{ 'common.type' | translate }}</label>\n            <ng-select\n                name=\"type\"\n                [(ngModel)]=\"copy.type\"\n                [items]=\"types\"\n                [clearable]=\"false\"\n                [searchable]=\"false\"\n                [placeholder]=\"'common.select-type' | translate\"\n                required\n                #type=\"ngModel\"\n            >\n                <ng-template ng-label-tmp let-item=\"item\">{{ toStartCase(mapTypes(item)) }}</ng-template>\n                <ng-template ng-option-tmp let-item=\"item\">{{ toStartCase(mapTypes(item)) }}</ng-template>\n            </ng-select>\n            <div *ngIf=\"type.invalid && (userFileForm.submitted || type.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"type?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-primary btn-w-sm\" [ngClass]=\"{ loading: isSaving }\" [disabled]=\"isSaving\">\n            {{ 'common.save' | translate }}\n        </button>\n    </div>\n</form>\n");

/***/ }),

/***/ "Gq6/":
/*!*************************************!*\
  !*** ./src/app/common/countries.ts ***!
  \*************************************/
/*! exports provided: countryMap, countries, countriesSortedByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryMap", function() { return countryMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countriesSortedByName", function() { return countriesSortedByName; });
/* harmony import */ var _aerapass_country_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aerapass/country-data */ "eU/h");
/* harmony import */ var _aerapass_country_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aerapass_country_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


const countryMap = {};
let countries = [];
const blockedCountries = [
    'CU',
    'IR',
    'SD',
    'SY',
    'KP',
    'LY',
    'VE',
    'AF',
    'YE',
    'NI',
    'ZW',
    'MM',
    'KH',
    'BA',
    'IQ',
    'SO',
    'SS',
];
for (const country of _aerapass_country_data__WEBPACK_IMPORTED_MODULE_0__["countries"].all) {
    if (country.status === 'assigned' && country.countryCallingCodes.length > 0) {
        countryMap[country.alpha2] = country;
        countries.push(country);
    }
}
// filter blocked sanctions jurisdictions
countries = countries.filter(country => !blockedCountries.includes(country.alpha2));
const countriesSortedByName = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"])(countries, [country => country.name.toLowerCase()], ['asc']);


/***/ }),

/***/ "H6SD":
/*!******************************************!*\
  !*** ./src/app/common/is-before.pipe.ts ***!
  \******************************************/
/*! exports provided: IsBeforePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsBeforePipe", function() { return IsBeforePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "b/SL");



let IsBeforePipe = class IsBeforePipe {
    transform(value) {
        if (typeof value !== 'string') {
            return false;
        }
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isBefore"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["parseISO"])(value), new Date());
    }
};
IsBeforePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isBefore' })
], IsBeforePipe);



/***/ }),

/***/ "HD72":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/security-check/confirm-password.modal.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ 'common.confirm-to-continue' | translate }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"modal.dismiss()\">&times;</button>\n</div>\n<form class=\"form-validation e2e-confirm-password\" #passwordForm=\"ngForm\" (ngSubmit)=\"submit()\" novalidate>\n    <div class=\"modal-body\">\n        <div class=\"alert alert-danger\" *ngIf=\"alert\">{{ alert }}</div>\n        <div class=\"control-group\" *ngIf=\"!showTwoFactorForm; else twoFactorForm\">\n            <label>{{ 'common.password' | translate }}</label>\n            <input\n                type=\"password\"\n                class=\"form-control\"\n                name=\"password\"\n                [placeholder]=\"'common.enter-your-password' | translate\"\n                [(ngModel)]=\"password\"\n                [focus]=\"true\"\n                required\n            />\n        </div>\n        <ng-template #twoFactorForm>\n            <div class=\"alert alert-info\">{{ 'common.two-factor-authentication-is-enabled' | translate }}</div>\n            <div class=\"control-group\">\n                <label>{{ 'common.two-factor-code' | translate }}</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"twoFactorCode\"\n                    [placeholder]=\"'common.enter-your-code' | translate\"\n                    number\n                    [(ngModel)]=\"twoFactorCode\"\n                    [focus]=\"true\"\n                    required\n                />\n            </div>\n        </ng-template>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-primary btn-icon\" [ngClass]=\"{loading: isLoading}\" [disabled]=\"!canSubmit()\">\n            <fa-icon class=\"btn-icon-symbol\" [icon]=\"faUnlockAlt\"></fa-icon>\n            <span>{{ 'common.confirm' | translate }}</span>\n        </button>\n    </div>\n</form>\n");

/***/ }),

/***/ "HNQM":
/*!******************************!*\
  !*** ./src/app/Timestamp.ts ***!
  \******************************/
/*! exports provided: Timestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timestamp", function() { return Timestamp; });
class Timestamp {
}
Timestamp.stamp = '1655282884967';


/***/ }),

/***/ "HiCw":
/*!***********************************************!*\
  !*** ./src/app/common/transactions.mixins.ts ***!
  \***********************************************/
/*! exports provided: calculateFee, calculateCreditableAmount, calculateDeductableAmount, buildWalletOwnerAccountNumber, isReceiver, isTransactionProcessable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateFee", function() { return calculateFee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateCreditableAmount", function() { return calculateCreditableAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateDeductableAmount", function() { return calculateDeductableAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildWalletOwnerAccountNumber", function() { return buildWalletOwnerAccountNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReceiver", function() { return isReceiver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransactionProcessable", function() { return isTransactionProcessable; });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.mixin */ "s/H0");



function calculateFee(transaction) {
    const { amount, precision } = fetchAmountAndPrecision(transaction);
    let relativeFeeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(amount).times(transaction.relativeFee);
    // Only use this for preview
    if (!transaction.id && transaction.settledAmount) {
        // Factor fixed fee to relative fee computation
        const fixedAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(amount).plus(transaction.fixedFee);
        relativeFeeAmount = fixedAmount
            .div(new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(1).minus(new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(transaction.relativeFee)))
            .minus(fixedAmount);
    }
    const roundingMode = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appName === 'sgpmx' ? 4 : 1;
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(transaction.fixedFee || 0).plus(relativeFeeAmount).toFixed(precision, roundingMode);
}
/**
 * Calculates amount which will be credited to the receiver wallet
 */
function calculateCreditableAmount(transaction) {
    const { amount, precision } = fetchAmountAndPrecision(transaction);
    if (['card-order', 'account-fee', 'payment'].includes(transaction.type)) {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(0).toFixed(precision, 1);
    }
    const total = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(amount).minus(!transaction.id && transaction.settledAmount ? 0 : calculateFee(transaction));
    const roundingMode = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appName === 'sgpmx' ? 4 : 1;
    return (total.isGreaterThan(0) ? total : new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(0)).toFixed(precision, roundingMode);
}
/**
 * Calculates amount which will be deducted from the sender wallet
 */
function calculateDeductableAmount(transaction) {
    const { amount, precision } = fetchAmountAndPrecision(transaction);
    if (['card-order', 'account-fee', 'payment'].includes(transaction.type)) {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(calculateFee(transaction)).toFixed(precision, 1);
    }
    const roundingMode = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appName === 'sgpmx' ? 4 : 1;
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(amount)
        .plus(!transaction.id && transaction.settledAmount ? calculateFee(transaction) : 0)
        .toFixed(precision, roundingMode);
}
function fetchAmountAndPrecision(transaction) {
    const amount = transaction.amount || transaction.requestedAmount || '0';
    let precision;
    if (transaction.precision !== undefined) {
        precision = transaction.precision;
    }
    else if (transaction.currency) {
        precision = transaction.currency.decimalPlaces;
    }
    else {
        precision = 8;
    }
    return { amount, precision };
}
function buildWalletOwnerAccountNumber(wallet, fallback) {
    return wallet ? (wallet.user ? Object(_common_mixin__WEBPACK_IMPORTED_MODULE_2__["formatAccountNumber"])(wallet.user.accountNumber) : fallback) : 'Mint';
}
function isReceiver(transaction, user) {
    return (!!transaction.counterWallet &&
        !!transaction.counterWallet.user &&
        !!user &&
        transaction.counterWallet.user.id === user.id);
}
function isTransactionProcessable(transaction) {
    return !transaction.automated || transaction.faulty;
}


/***/ }),

/***/ "Hppe":
/*!****************************************************!*\
  !*** ./src/app/common/services/storage.service.ts ***!
  \****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let StorageService = class StorageService {
    constructor() {
        this.storageChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /* fallback in memory map to simulate local storage */
        this.inMemoryLocalStorage = new Map();
        this.useLocalStorage = this.isLocalStorageAvailable();
        // add listener for storageEvents
        window.addEventListener('storage', event => {
            this.storageChange.next(event);
        });
    }
    getItem(key) {
        if (this.useLocalStorage) {
            return localStorage.getItem(key);
        }
        else {
            return this.inMemoryLocalStorage.has(key) ? this.inMemoryLocalStorage.get(key) : null;
        }
    }
    hasItem(key) {
        if (this.useLocalStorage) {
            return localStorage.getItem(key) !== null;
        }
        else {
            return this.inMemoryLocalStorage.has(key);
        }
    }
    setItem(key, value) {
        if (this.useLocalStorage) {
            try {
                localStorage.setItem(key, value);
            }
            catch (error) {
                // hide safari in-private browsing quota exceeded error and don't save to local storage
                if (error.name !== 'QuotaExceededError') {
                    throw error;
                }
            }
        }
        else {
            const oldValue = this.inMemoryLocalStorage.get(key);
            this.inMemoryLocalStorage.set(key, value);
            this.storageChange.next(new StorageEvent('change', { url: window.location.href, oldValue, newValue: value, key }));
        }
    }
    removeItem(key) {
        if (this.useLocalStorage) {
            localStorage.removeItem(key);
        }
        else {
            const oldValue = this.inMemoryLocalStorage.get(key);
            this.inMemoryLocalStorage.delete(key);
            this.storageChange.next(new StorageEvent('change', { url: window.location.href, oldValue, newValue: undefined, key }));
        }
    }
    isLocalStorageAvailable() {
        // taken from https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
        const storage = window.localStorage;
        try {
            const x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (error) {
            return (error instanceof DOMException &&
                // everything except Firefox
                (error.code === 22 ||
                    // Firefox
                    error.code === 1014 ||
                    // test name field too, because code might not be present
                    // everything except Firefox
                    error.name === 'QuotaExceededError' ||
                    // Firefox
                    error.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage.length !== 0);
        }
    }
};
StorageService.ctorParameters = () => [];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
    /**
     * Local storage abstraction layer that handles browsers without an
     * implementation of localStorage and adds global error handling for storage issues
     */
], StorageService);



/***/ }),

/***/ "I3ms":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/copy-icon/copy-icon.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a href (click)=\"$event.preventDefault(); $event.stopPropagation(); copy()\">\n    <fa-icon [icon]=\"faCopy\" [ngbTooltip]=\"'Copied!'\" [triggers]=\"''\" #tooltip=\"ngbTooltip\"></fa-icon>\n</a>\n");

/***/ }),

/***/ "Ijt2":
/*!**************************************************************!*\
  !*** ./src/app/common/validators/max-validator.directive.ts ***!
  \**************************************************************/
/*! exports provided: MaxValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxValidatorDirective", function() { return MaxValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var MaxValidatorDirective_1;



let MaxValidatorDirective = MaxValidatorDirective_1 = class MaxValidatorDirective {
    ngOnChanges(changes) {
        if (changes.max) {
            this.max = changes.max.currentValue;
            if (this.onChanges) {
                this.onChanges();
            }
        }
    }
    validate(control) {
        if (this.max === undefined || this.max === null) {
            return null;
        }
        const required = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control);
        if (required !== null) {
            return null;
        }
        const v = +control.value;
        return v <= +this.max ? null : { actualValue: v, requiredValue: +this.max, max: true };
    }
    registerOnValidatorChange(fn) {
        this.onChanges = fn;
    }
};
MaxValidatorDirective.propDecorators = {
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
MaxValidatorDirective = MaxValidatorDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[max][formControlName],[max][formControl],[max][ngModel]',
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                useExisting: MaxValidatorDirective_1,
                multi: true,
            },
        ],
    })
], MaxValidatorDirective);



/***/ }),

/***/ "JHZC":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/copy-btn/copy-btn.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    class=\"btn btn-default\"\n    type=\"button\"\n    (click)=\"$event.stopPropagation(); copy()\"\n    [ngbTooltip]=\"'common.copied' | translate\"\n    [triggers]=\"''\"\n    #tooltip=\"ngbTooltip\"\n    [disabled]=\"disabled\"\n>\n    <fa-icon [icon]=\"faCopy\" [fixedWidth]=\"true\"></fa-icon>\n</button>\n");

/***/ }),

/***/ "JK3a":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/deposit-instruction-table/deposit-instruction-table.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-responsive\">\n    <table class=\"table table-borderless table-striped mb-0\" [ngClass]=\"borderless ? 'table-borderless' : 'table-bordered'\">\n        <tbody>\n            <tr *ngIf=\"showMethod\">\n                <td class=\"font-weight-bold text-gray\">{{ 'common.method' | translate }}</td>\n                <td class=\"text-uppercase\">{{ beneficiary?.method }}</td>\n            </tr>\n            <tr>\n                <td class=\"font-weight-bold text-gray\">{{ 'common.beneficiary' | translate }}</td>\n                <td>{{ beneficiary?.accountHolder }}</td>\n            </tr>\n            <tr>\n                <td class=\"text-muted font-sm\">- {{ getAccountNumberLabel() }}</td>\n                <td>{{ beneficiary?.accountNumber }}</td>\n            </tr>\n            <ng-container *ngIf=\"beneficiary.method === 'swift' || beneficiary.method === 'local'\">\n                <tr>\n                    <td class=\"text-muted font-sm\">- {{ 'common.address' | translate }}</td>\n                    <td>\n                        <postal-address [address]=\"beneficiary?.accountHolderAddress\"></postal-address>\n                    </td>\n                </tr>\n                <tr>\n                    <td class=\"font-weight-bold text-gray\">{{ 'common.beneficiary-bank' | translate }}</td>\n                    <td>{{ beneficiary?.bankName }}</td>\n                </tr>\n                <tr *ngIf=\"showSwift()\">\n                    <td class=\"text-muted font-sm\">- {{ getSwiftLabel() }}</td>\n                    <td>{{ beneficiary?.bankSwiftCode }}</td>\n                </tr>\n                <tr *ngIf=\"showRoutingNumber()\">\n                    <td class=\"text-muted font-sm\">- {{ getRoutingNumberLabel() }}</td>\n                    <td>{{ beneficiary?.routingNumber }}</td>\n                </tr>\n                <tr>\n                    <td class=\"text-muted font-sm\">- {{ 'common.address' | translate }}</td>\n                    <td>\n                        <postal-address [address]=\"beneficiary?.bankAddress\"></postal-address>\n                    </td>\n                </tr>\n                <ng-container *ngIf=\"beneficiary?.intermediateBankName\">\n                    <tr>\n                        <td class=\"font-weight-bold text-gray\">{{ 'common.intermediate-bank' | translate }}</td>\n                        <td>{{ beneficiary?.intermediateBankName }}</td>\n                    </tr>\n                    <tr>\n                        <td class=\"text-muted font-sm\">- {{ 'common.swift-code' | translate }}</td>\n                        <td>{{ beneficiary?.intermediateBankSwiftCode }}</td>\n                    </tr>\n                    <tr>\n                        <td class=\"text-muted font-sm\">- {{ 'common.address' | translate }}</td>\n                        <td>\n                            <postal-address [address]=\"beneficiary?.intermediateBankAddress\"></postal-address>\n                        </td>\n                    </tr>\n                </ng-container>\n            </ng-container>\n            <tr *ngIf=\"showCurrency\">\n                <td class=\"font-weight-bold text-gray\">{{ 'common.currency' | translate }}</td>\n                <td class=\"text-uppercase\">{{ beneficiary?.currency?.code }}</td>\n            </tr>\n            <ng-container *ngIf=\"transaction\">\n                <tr *ngIf=\"transaction.type === 'deposit'\">\n                    <td class=\"font-weight-bold text-gray\">{{ 'common.amount' | translate }}</td>\n                    <td class=\"text-primary\">\n                        {{ transaction.amount | amount: transaction.currency?.decimalPlaces }} {{ transaction.currency?.code }}\n                    </td>\n                </tr>\n                <tr *ngIf=\"transaction.type === 'withdrawal'\">\n                    <td class=\"font-weight-bold text-gray\">{{ 'common.amount' | translate }}</td>\n                    <td class=\"text-primary\">\n                        {{ calculateCreditableAmount(transaction) | amount: transaction.currency?.decimalPlaces }}\n                        {{ transaction.currency?.code }}\n                    </td>\n                </tr>\n                <tr *ngIf=\"transaction.id\">\n                    <td class=\"font-weight-bold text-gray\">{{ 'common.reference' | translate }}</td>\n                    <td>\n                        {{ transaction.id.substring(0, 7).toUpperCase() }}\n                    </td>\n                </tr>\n                <tr>\n                    <td class=\"p-0\" colspan=\"2\">\n                        <div\n                            *ngIf=\"showWarning && ['pending', 'processing'].includes(transaction.status) && transaction.type === 'deposit'\"\n                            class=\"callout callout-danger whitespace-normal mb-0\"\n                        >\n                            <h6 class=\"text-danger mb-0\">{{ 'common.important-notice' | translate }}</h6>\n                            <p>{{ 'common.if-you-specify' | translate }}</p>\n                            <p *ngIf=\"appName === 'sgpmx'\">\n                                {{ 'common.by-clicking-mark-as-paid' | translate }}\n                            </p>\n                        </div>\n                    </td>\n                </tr>\n            </ng-container>\n        </tbody>\n    </table>\n</div>\n");

/***/ }),

/***/ "JdTs":
/*!**************************************************!*\
  !*** ./src/app/common/services/token.service.ts ***!
  \**************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.service */ "6g7h");





let TokenService = class TokenService {
    constructor(session, http) {
        this.session = session;
        this.http = http;
        this.tokenRequest = null;
    }
    fetch(options = {}) {
        if (!this.tokenRequest) {
            const body = {};
            const potentialEmail = options.email || (this.session.user && this.session.user.email);
            const potentialRefreshToken = options.refreshToken || (this.session.hasValidRefreshToken() && this.session.refreshToken.id);
            if (potentialEmail) {
                body.email = potentialEmail;
            }
            if (potentialRefreshToken) {
                body.refreshToken = potentialRefreshToken;
            }
            if (options.password) {
                body.password = options.password;
            }
            if (options.scopes) {
                body.scopes = options.scopes;
            }
            this.tokenRequest = this.http
                .post('/token', body, {
                headers: options.twoFactorCode
                    ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'X-2FA-Code': options.twoFactorCode })
                    : undefined,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
                this.tokenRequest = null;
            }));
        }
        return this.tokenRequest;
    }
    refresh(options = {}) {
        return this.fetch(options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(({ refreshToken, token }) => this.session.update(refreshToken, token)));
    }
};
TokenService.ctorParameters = () => [
    { type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TokenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], TokenService);



/***/ }),

/***/ "K8WK":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/account-number/account-number.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [routerLink]=\"['/admin/accounts/users', user.id]\">\n    <span class=\"text-body\" placement=\"right\" [ngbTooltip]=\"user.accountNumber | accountNumber\">\n        {{ user.name }}\n    </span>\n</a>\n");

/***/ }),

/***/ "KQWT":
/*!***************************************************************!*\
  !*** ./src/app/common/services/mail-notifications.service.ts ***!
  \***************************************************************/
/*! exports provided: MailNotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailNotificationsService", function() { return MailNotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session.service */ "6g7h");






let MailNotificationsService = class MailNotificationsService {
    constructor(session, http) {
        this.session = session;
        this.http = http;
        this.unreadMessagesStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.onRead = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.notifyEvent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.notifyEvent, this.session.userEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event.type === _session_service__WEBPACK_IMPORTED_MODULE_5__["UserEventType"].LOGIN)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.session.userStream), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(user => user
            ? this.http.head(`/users/${user.id}/mails`, {
                observe: 'response',
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('scope', 'unread'),
            })
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response && response.headers.has('x-total-count') ? ~~response.headers.get('x-total-count') : 0))
            .subscribe(count => {
            this.unreadMessagesStream.next(count);
        });
    }
    notify() {
        this.onRead.next();
        this.notifyEvent.next();
    }
};
MailNotificationsService.ctorParameters = () => [
    { type: _session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MailNotificationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], MailNotificationsService);



/***/ }),

/***/ "N/y2":
/*!***************************************************!*\
  !*** ./src/app/common/services/toastr.service.ts ***!
  \***************************************************/
/*! exports provided: ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




let ToastrService = class ToastrService {
    constructor() {
        this.toastSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.lastToastId = 0;
        this.iconClasses = {
            error: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBan"],
            warning: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExclamationCircle"],
            success: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheckCircle"],
            info: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfoCircle"],
        };
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.toastPushed = this.toastSource.asObservable();
    }
    log(type, message, title) {
        title = title || 'Server Message';
        this.toastSource.next({
            id: this.lastToastId++,
            icon: this.iconClasses[type],
            type,
            message,
            title,
        });
    }
    info(message, title) {
        this.log('info', message, title);
    }
    warning(message, title) {
        this.log('warning', message, title);
    }
    success(message, title) {
        this.log('success', message, title);
    }
    error(message, title) {
        this.log('error', message, title);
    }
};
ToastrService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ToastrService);



/***/ }),

/***/ "N1bf":
/*!*******************************************************************!*\
  !*** ./src/app/common/validators/birthday-validator.directive.ts ***!
  \*******************************************************************/
/*! exports provided: BirthdayValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthdayValidatorDirective", function() { return BirthdayValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var date_fns_isAfter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/isAfter */ "EhJz");
/* harmony import */ var date_fns_isBefore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/isBefore */ "dndX");
/* harmony import */ var date_fns_isValid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/isValid */ "Se/U");
/* harmony import */ var date_fns_subYears__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/subYears */ "sdC+");
/* harmony import */ var _user_details_form_user_details_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-details-form/user-details-form.component */ "4pyo");
var BirthdayValidatorDirective_1;








let BirthdayValidatorDirective = BirthdayValidatorDirective_1 = class BirthdayValidatorDirective {
    validate(control) {
        if (control.value) {
            const date = Object(_user_details_form_user_details_form_component__WEBPACK_IMPORTED_MODULE_7__["formatMaskedDate"])(control.value);
            if (!Object(date_fns_isValid__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(date))) {
                return { invalidDate: true };
            }
            if (Object(date_fns_isBefore__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(date), new Date('1900-01-01'))) {
                return { dateLongAgo: true };
            }
            if (Object(date_fns_isAfter__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(date), Object(date_fns_subYears__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(), 18))) {
                return { dateInFuture: true };
            }
        }
        return null;
    }
};
BirthdayValidatorDirective = BirthdayValidatorDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[birthdayValidator]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: BirthdayValidatorDirective_1, multi: true }],
    })
], BirthdayValidatorDirective);



/***/ }),

/***/ "NLVd":
/*!******************************************************!*\
  !*** ./src/app/app/not-found/not-found.component.ts ***!
  \******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./not-found.component.html */ "+bKJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let NotFoundComponent = class NotFoundComponent {
};
NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], NotFoundComponent);



/***/ }),

/***/ "NOHY":
/*!***********************************************************************!*\
  !*** ./src/app/app/status-message/status-message-outlet.component.ts ***!
  \***********************************************************************/
/*! exports provided: StatusMessageOutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusMessageOutletComponent", function() { return StatusMessageOutletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _status_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status-message.component */ "CGvB");
/* harmony import */ var _status_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status-message.service */ "pQbz");




let StatusMessageOutletComponent = class StatusMessageOutletComponent {
    constructor(statusMessage, viewContainerRef) {
        this.statusMessage = statusMessage;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        this.statusMessage.initializeListener(this.viewContainerRef, _status_message_component__WEBPACK_IMPORTED_MODULE_2__["StatusMessageComponent"]);
    }
};
StatusMessageOutletComponent.ctorParameters = () => [
    { type: _status_message_service__WEBPACK_IMPORTED_MODULE_3__["StatusMessageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
StatusMessageOutletComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'status-message-outlet',
        template: '',
    })
    /* This component is only an outlet for the status message, so we don't have to add logic to all clients */
], StatusMessageOutletComponent);



/***/ }),

/***/ "O9sj":
/*!************************************************!*\
  !*** ./src/app/store/wallets/wallets.query.ts ***!
  \************************************************/
/*! exports provided: WalletsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletsQuery", function() { return WalletsQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");
/* harmony import */ var _currencies_currencies_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../currencies/currencies.mixin */ "V6z1");
/* harmony import */ var _currencies_currencies_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../currencies/currencies.query */ "4pv/");
/* harmony import */ var _wallets_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wallets.store */ "UKac");












let WalletsQuery = class WalletsQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"] {
    constructor(store, currenciesQuery, session) {
        super(store);
        this.store = store;
        this.currenciesQuery = currenciesQuery;
        this.session = session;
        /** Estimates the value in the user's preferred currency as well */
        this.balances$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.selectAll(), this.currenciesQuery.selectAll(), this.session.userStream).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([wallets, currencies, user]) => {
            const transformed = wallets.map(wallet => (Object.assign(Object.assign({}, wallet), { value: Object(_currencies_currencies_mixin__WEBPACK_IMPORTED_MODULE_9__["convertCurrency"])(wallet.availableBalance, currencies.find(currency => currency.code === wallet.currency.code), currencies.find(currency => currency.code === user.preferredCurrency.code)), usdValue: new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(wallet.availableBalance).isGreaterThan(0)
                    ? new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(Object(_currencies_currencies_mixin__WEBPACK_IMPORTED_MODULE_9__["convertCurrency"])(wallet.availableBalance, currencies.find(currency => currency.code === wallet.currency.code), currencies.find(currency => currency.code === 'USD'))).toFixed(2)
                    : '0.00' })));
            // SGPMX only, always display USD, AU and AG
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].appName === 'sgpmx') {
                for (const currencyCode of ['USD', 'AG', 'AU']) {
                    if (!wallets.find(wallet => wallet.currency.code === currencyCode)) {
                        transformed.push({
                            balance: new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0).toFixed(8, 1),
                            value: new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0).toFixed(8, 1),
                            currency: currencies.find(currency => currency.code === currencyCode),
                        });
                    }
                }
            }
            else if (!wallets.find(wallet => wallet.currency.code === user.preferredCurrency.code)) {
                // If no wallet of the preferred currency exists, create placeholder
                transformed.push({
                    balance: new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0).toFixed(8, 1),
                    value: new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0).toFixed(8, 1),
                    currency: currencies.find(currency => currency.code === user.preferredCurrency.code),
                });
            }
            // Sort alphabetically by currency name
            return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["orderBy"])(transformed, [wallet => { var _a; return (_a = wallet.currency) === null || _a === void 0 ? void 0 : _a.name.toLowerCase(); }], ['asc']);
        }));
        /** If more than 4 wallets strip of 0 balance wallets */
        this.filteredBalances$ = this.balances$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(wallets => {
            if (wallets.length > 4) {
                let strippable = 0;
                return wallets.filter(wallet => {
                    const hasZeroBlance = new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(wallet.balance).isEqualTo(0);
                    if (hasZeroBlance) {
                        strippable++;
                    }
                    return !(hasZeroBlance && wallets.length - strippable >= 4);
                });
            }
            return wallets;
        }));
        this.totalBalance$ = this.balances$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(wallets => wallets.reduce((netWorth, wallet) => netWorth.plus(wallet.value), new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0)).toFixed(2)));
    }
};
WalletsQuery.ctorParameters = () => [
    { type: _wallets_store__WEBPACK_IMPORTED_MODULE_11__["WalletsStore"] },
    { type: _currencies_currencies_query__WEBPACK_IMPORTED_MODULE_10__["CurrenciesQuery"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"] }
];
WalletsQuery = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], WalletsQuery);



/***/ }),

/***/ "OGeY":
/*!*******************************************************!*\
  !*** ./src/app/common/format-distance-to-now.pipe.ts ***!
  \*******************************************************/
/*! exports provided: FormatDistanceToNowPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatDistanceToNowPipe", function() { return FormatDistanceToNowPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ "7xvl");
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/parseISO */ "4+6U");




let FormatDistanceToNowPipe = class FormatDistanceToNowPipe {
    transform(value, includeSeconds = false, addSuffix = false) {
        if (typeof value !== 'string') {
            return value;
        }
        return Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__["default"])(value), { includeSeconds, addSuffix });
    }
};
FormatDistanceToNowPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'formatDistanceToNow' })
], FormatDistanceToNowPipe);



/***/ }),

/***/ "OWKS":
/*!****************************************************************************!*\
  !*** ./src/app/app/core/header/header-mailbox/header-mailbox.component.ts ***!
  \****************************************************************************/
/*! exports provided: HeaderMailboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderMailboxComponent", function() { return HeaderMailboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_mailbox_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header-mailbox.component.html */ "PRlY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! striptags */ "B9KB");
/* harmony import */ var striptags__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(striptags__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_services_mail_notifications_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/services/mail-notifications.service */ "KQWT");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/services/session.service */ "6g7h");












let HeaderMailboxComponent = class HeaderMailboxComponent {
    constructor(session, http, router, mailNotifications) {
        this.session = session;
        this.http = http;
        this.router = router;
        this.mailNotifications = mailNotifications;
        this.striptags = striptags__WEBPACK_IMPORTED_MODULE_9__;
        this.faEnvelope = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"];
        this.mails = [];
        this.count = 0;
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].displayName;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    ngOnInit() {
        this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(this.fetchEvent, this.session.userStream)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(600), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(([_, user]) => this.http.get(`/users/${user.id}/mails`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('limit', 8 + '')
                .set('offset', 0 + '')
                .set('filter.read', 'false'),
        })))
            .subscribe(({ data, meta }) => {
            this.mails = data;
            this.count = meta.count;
        }));
        this.subscriptions.add(this.mailNotifications.onRead.subscribe(() => this.fetchEvent.next()));
        this.fetchEvent.next();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
};
HeaderMailboxComponent.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _common_services_mail_notifications_service__WEBPACK_IMPORTED_MODULE_10__["MailNotificationsService"] }
];
HeaderMailboxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'header-mailbox',
        template: _raw_loader_header_mailbox_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], HeaderMailboxComponent);



/***/ }),

/***/ "PRlY":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/core/header/header-mailbox/header-mailbox.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div ngbDropdown placement=\"bottom-right\">\n    <button type=\"button\" class=\"btn btn-transparent mr-1\" ngbDropdownToggle>\n        <fa-icon [fixedWidth]=\"true\" [icon]=\"faEnvelope\"></fa-icon>\n        <span class=\"badge badge-primary badge-pill\" *ngIf=\"count > 0\">\n            {{ count | number: '1.0-0' }}\n        </span>\n    </button>\n    <div class=\"dropdown-menu-w-lg dropdown-menu-right\" ngbDropdownMenu>\n        <div class=\"dropdown-header text-center\">\n            {{ 'common.you-have' | translate }} <strong class=\"text-primary\">{{ count }}</strong>\n            {{ (count !== 1 ? 'common.unread-mails' : 'common.unread-mail') | translate }}\n        </div>\n        <div class=\"dropdown-divider mb-0\"></div>\n        <div class=\"scrollable\">\n            <a [routerLink]=\"['/mailbox', mail.id]\" class=\"dropdown-item media d-flex align-items-center e2e-header-mail\" *ngFor=\"let mail of mails\">\n                <div class=\"mr-3\">\n                    <user-avatar size=\"sm\" [user]=\"null\"></user-avatar>\n                </div>\n                <div class=\"media-body\">\n                    <small class=\"text-muted\">\n                        {{ displayName + ' Team' }}\n                    </small>\n                    <small class=\"text-muted float-right mt-q\" *ngIf=\"mail.sentAt\"\n                        >{{ mail.sentAt | formatDistanceToNow }} {{ 'common.ago' | translate }}</small\n                    >\n                    <div class=\"text-truncate font-weight-bold\">{{ mail.subject }}</div>\n                    <div class=\"small text-muted\" *ngIf=\"mail.content\">{{ striptags(mail.content) | truncate: true:60 }}</div>\n                </div>\n            </a>\n        </div>\n        <div class=\"dropdown-item text-center bg-white py-3\" *ngIf=\"mails.length === 0\">\n            <span class=\"text-muted\">{{ 'header-mailbox.no-unread-mails' | translate }}</span>\n        </div>\n        <div class=\"dropdown-divider mt-0\"></div>\n        <a class=\"dropdown-item text-center\" ngbDropdownItem [routerLink]=\"['/mailbox']\">{{ 'common.view-all' | translate }}</a>\n    </div>\n</div>\n");

/***/ }),

/***/ "QRBR":
/*!********************************************************!*\
  !*** ./src/app/store/currencies/currencies.service.ts ***!
  \********************************************************/
/*! exports provided: CurrenciesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrenciesService", function() { return CurrenciesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _currencies_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currencies.store */ "wgWS");





let CurrenciesService = class CurrenciesService {
    constructor(store, http) {
        this.store = store;
        this.http = http;
    }
    fetchAsObservable() {
        return this.http.get('/currencies', { params: { limit: 100 + '' } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(response => {
            this.store.set(response.data);
        }));
    }
    fetch() {
        this.fetchAsObservable().subscribe(() => undefined);
    }
};
CurrenciesService.ctorParameters = () => [
    { type: _currencies_store__WEBPACK_IMPORTED_MODULE_4__["CurrenciesStore"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CurrenciesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], CurrenciesService);



/***/ }),

/***/ "R2cc":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/status-message/status-message.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"status-message\">\n    <span [innerHTML]=\"statusMessage.message || ''\"></span>\n    <a href=\"https://status.aerapass.com\" class=\"btn btn-outline-white btn-sm mx-3\" rel=\"noopener\" target=\"_blank\">Website Status</a>\n</div>\n");

/***/ }),

/***/ "R86q":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/core/menu/menu.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar\">\n    <nav class=\"navbar navbar-light navbar-dashboard\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\"></a>\n        <ul class=\"nav navbar-nav ml-auto d-lg-none\">\n            <li class=\"nav-item d-flex align-items-center\">\n                <button type=\"button\" class=\"btn btn-transparent\" (click)=\"closeMobileNav()\">\n                    <fa-icon [fixedWidth]=\"true\" [icon]=\"faTimes\"></fa-icon>\n                </button>\n            </li>\n        </ul>\n    </nav>\n    <nav class=\"sidebar-nav\">\n        <ul class=\"nav\">\n            <ng-container *ngIf=\"!isActive('/admin')\">\n                <li class=\"nav-item\">\n                    <a\n                        class=\"nav-link\"\n                        [ngClass]=\"{ active: isActive('/dashboard') || isActive('/mailbox') }\"\n                        [routerLink]=\"['/dashboard']\"\n                        placement=\"right\"\n                        [ngbTooltip]=\"'common.dashboard' | translate\"\n                    >\n                        <fa-icon class=\"nav-icon\" [icon]=\"faDesktop\" [fixedWidth]=\"true\"></fa-icon><span>{{ 'common.dashboard' | translate }}</span>\n                    </a>\n                </li>\n                <ng-container *ngIf=\"appName !== 'sgpmx'; else sgpmxTemplate\">\n                    <li class=\"nav-heading\">{{ 'menu.manage' | translate }}</li>\n                    <li class=\"nav-item\">\n                        <a\n                            class=\"nav-link\"\n                            [ngClass]=\"{ active: isActive('/transactions') }\"\n                            [routerLink]=\"['/transactions']\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'common.transactions' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faBook\" [fixedWidth]=\"true\"></fa-icon><span>{{ 'menu.transactions' | translate }}</span>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\" *ngIf=\"session.user.hasPermission('cards')\">\n                        <a\n                            class=\"nav-link\"\n                            [ngClass]=\"{ active: isActive('/cards') }\"\n                            [routerLink]=\"['/cards']\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'menu.cards' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faCreditCardFront\" [fixedWidth]=\"true\"></fa-icon\n                            ><span>{{ 'menu.cards' | translate }}</span>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\" *ngIf=\"session.user.hasPermission('spot-trades')\">\n                        <a\n                            class=\"nav-link\"\n                            [ngClass]=\"{ active: isActive('/spot-trading') }\"\n                            [routerLink]=\"['/spot-trading']\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'common.spot-trading' | translate | titlecase\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faChartLine\" [fixedWidth]=\"true\"></fa-icon\n                            ><span>{{ 'common.spot-trading' | translate | titlecase }}</span>\n                        </a>\n                    </li>\n                    <li\n                        class=\"nav-item\"\n                        [ngClass]=\"{ active: isActive('/discover'), open: isOpen('discover') }\"\n                        *ngIf=\"session.user.hasPermission('marketplaces')\"\n                    >\n                        <a\n                            href\n                            class=\"nav-link\"\n                            (click)=\"toggleMenu('discover'); $event.preventDefault()\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'common.discover' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faCompass\" [fixedWidth]=\"true\"></fa-icon>\n                            <span>{{ 'menu.discover' | translate }}</span>\n                            <fa-icon class=\"nav-caret\" [icon]=\"faAngleDown\"></fa-icon>\n                        </a>\n                        <ul class=\"nav flex-nowrap overflow-hidden\" [@toggleMenu]=\"isOpen('discover')\">\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/discover', true) || isActive('/discover/:productSlug') }\"\n                                    [routerLink]=\"['/discover']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.overview' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'menu.overview' | translate }}</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/discover/investments') }\"\n                                    [routerLink]=\"['/discover/investments']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'menu.investments' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'menu.investments' | translate }}</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li\n                        class=\"nav-item\"\n                        [ngClass]=\"{ active: isActive('/services'), open: isOpen('services') }\"\n                        *ngIf=\"session.user.hasPermission('invoices') || session.user.hasPermission('conversions')\"\n                    >\n                        <a\n                            href\n                            class=\"nav-link\"\n                            (click)=\"toggleMenu('services'); $event.preventDefault()\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'common.services' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faToolbox\" [fixedWidth]=\"true\"></fa-icon>\n                            <span>{{ 'menu.services' | translate }}</span>\n                            <fa-icon class=\"nav-caret\" [icon]=\"faAngleDown\"></fa-icon>\n                        </a>\n                        <ul class=\"nav flex-nowrap overflow-hidden\" [@toggleMenu]=\"isOpen('services')\">\n                            <li class=\"nav-item\" *ngIf=\"session.user.hasPermission('conversions')\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/services/conversions') }\"\n                                    [routerLink]=\"['/services/conversions']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.conversions' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'menu.conversions' | translate }}</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\" *ngIf=\"session.user.hasPermission('invoices')\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/services/invoices') }\"\n                                    [routerLink]=\"['/services/invoices']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.invoices' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'menu.invoices' | translate }}</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                </ng-container>\n                <ng-template #sgpmxTemplate>\n                    <li class=\"nav-heading\">{{ 'common.bullion' | translate }}</li>\n                    <li class=\"nav-item\" *ngIf=\"session.user.hasPermission('trades')\">\n                        <a\n                            class=\"nav-link\"\n                            [ngClass]=\"{ active: isActive('/buy-and-sell', true) }\"\n                            [routerLink]=\"['/buy-and-sell']\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'common.buy-and-sell' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faBalanceScale\" [fixedWidth]=\"true\"></fa-icon\n                            ><span>{{ 'common.buy' | translate }} &amp; {{ 'common.sell' | translate }}</span>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a\n                            class=\"nav-link\"\n                            [ngClass]=\"{ active: isActive('/transfer', true) }\"\n                            [routerLink]=\"['/transfer']\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'common.transfer' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faExchange\" [fixedWidth]=\"true\"></fa-icon\n                            ><span>{{ 'common.transfer' | translate }}</span>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\" *ngIf=\"session.user?.hasPermission('redeem')\">\n                        <a\n                            class=\"nav-link\"\n                            [ngClass]=\"{ active: isActive('/redeem', true) }\"\n                            [routerLink]=\"['/redeem']\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'common.redeem' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faBox\" [fixedWidth]=\"true\"></fa-icon><span>{{ 'common.redeem' | translate }}</span>\n                        </a>\n                    </li>\n                    <li class=\"nav-heading\">{{ 'common.cash' | translate }}</li>\n                    <li class=\"nav-item\">\n                        <a\n                            class=\"nav-link\"\n                            [ngClass]=\"{ active: isActive('/deposit') }\"\n                            [routerLink]=\"['/deposit']\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'common.deposit' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faPlus\" [fixedWidth]=\"true\"></fa-icon><span>{{ 'common.deposit' | translate }}</span>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a\n                            class=\"nav-link\"\n                            [ngClass]=\"{ active: isActive('/withdraw') }\"\n                            [routerLink]=\"['/withdraw']\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'common.withdraw' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faMinus\" [fixedWidth]=\"true\"></fa-icon><span>{{ 'common.withdraw' | translate }}</span>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\" *ngIf=\"session.user.hasPermission('cards')\">\n                        <a\n                            class=\"nav-link\"\n                            [ngClass]=\"{ active: isActive('/cards') }\"\n                            [routerLink]=\"['/cards']\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'common.cards' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faCreditCardFront\" [fixedWidth]=\"true\"></fa-icon\n                            ><span>{{ 'menu.cards' | translate }}</span>\n                        </a>\n                    </li>\n                </ng-template>\n                <li class=\"nav-heading\">{{ 'menu.personal' | translate }}</li>\n                <li class=\"nav-item\">\n                    <a\n                        class=\"nav-link\"\n                        [ngClass]=\"{ active: isActive('/account/profile') }\"\n                        [routerLink]=\"['/account/profile']\"\n                        placement=\"right\"\n                        [ngbTooltip]=\"'common.profile' | translate\"\n                    >\n                        <fa-icon class=\"nav-icon\" [icon]=\"faUser\" [fixedWidth]=\"true\"></fa-icon><span>{{ 'menu.profile' | translate }}</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"session.user.type === 'business'\">\n                    <a\n                        class=\"nav-link\"\n                        [ngClass]=\"{ active: isActive('/organization') }\"\n                        [routerLink]=\"['/organization']\"\n                        placement=\"right\"\n                        [ngbTooltip]=\"'menu.organization' | translate\"\n                    >\n                        <fa-icon class=\"nav-icon\" [icon]=\"faSitemap\" [fixedWidth]=\"true\"></fa-icon><span>{{ 'menu.organization' | translate }}</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a\n                        class=\"nav-link\"\n                        [ngClass]=\"{ active: isActive('/account/security') }\"\n                        [routerLink]=\"['/account/security']\"\n                        placement=\"right\"\n                        [ngbTooltip]=\"'common.security' | translate\"\n                    >\n                        <fa-icon class=\"nav-icon\" [icon]=\"faShieldAlt\" [fixedWidth]=\"true\"></fa-icon><span>{{ 'menu.security' | translate }}</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a\n                        class=\"nav-link\"\n                        [ngClass]=\"{ active: isActive('/account/billing') }\"\n                        [routerLink]=\"['/account/billing']\"\n                        placement=\"right\"\n                        [ngbTooltip]=\"'common.billing' | translate\"\n                    >\n                        <fa-icon class=\"nav-icon\" [icon]=\"faReceipt\" [fixedWidth]=\"true\"></fa-icon><span>{{ 'menu.billing' | translate }}</span>\n                    </a>\n                </li>\n            </ng-container>\n            <ng-container *ngIf=\"isActive('admin')\">\n                <li class=\"nav-item\">\n                    <a\n                        class=\"nav-link\"\n                        [ngClass]=\"{ active: isActive('/admin/dashboard') }\"\n                        [routerLink]=\"['/admin/dashboard']\"\n                        placement=\"right\"\n                        [ngbTooltip]=\"'common.dashboard' | translate\"\n                    >\n                        <fa-icon class=\"nav-icon\" [icon]=\"faDesktop\" [fixedWidth]=\"true\"></fa-icon><span>{{ 'menu.dashboard' | translate }}</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"['admin'].includes(session.user?.role)\">\n                    <a\n                        class=\"nav-link\"\n                        [ngClass]=\"{ active: isActive('/admin/alerts') }\"\n                        [routerLink]=\"['/admin/alerts']\"\n                        placement=\"right\"\n                        [ngbTooltip]=\"'common.alerts' | translate\"\n                    >\n                        <fa-icon class=\"nav-icon\" [icon]=\"faBell\" [fixedWidth]=\"true\"></fa-icon><span>{{ 'common.alerts' | translate }}</span>\n                    </a>\n                </li>\n                <li class=\"nav-heading\">{{ 'common.operations' | translate }}</li>\n                <li class=\"nav-item\" [ngClass]=\"{ active: isActive('/admin/accounts'), open: isOpen('accounts') }\">\n                    <a href class=\"nav-link\" (click)=\"toggleMenu('accounts'); $event.preventDefault()\" placement=\"right\" ngbTooltip=\"Accounts\">\n                        <fa-icon class=\"nav-icon\" [icon]=\"faUser\" [fixedWidth]=\"true\"></fa-icon>\n                        <span>{{ 'common.accounts' | translate }}</span>\n                        <fa-icon class=\"nav-caret\" [icon]=\"faAngleDown\"></fa-icon>\n                    </a>\n                    <ul class=\"nav flex-nowrap overflow-hidden\" [@toggleMenu]=\"isOpen('accounts')\">\n                        <li class=\"nav-item\">\n                            <a\n                                class=\"nav-link\"\n                                [ngClass]=\"{ active: isActive('/admin/accounts/users') }\"\n                                [routerLink]=\"['/admin/accounts/users']\"\n                                placement=\"right\"\n                                [ngbTooltip]=\"'common.users' | translate\"\n                            >\n                                <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                ><span>{{ 'common.users' | translate }}</span>\n                            </a>\n                        </li>\n                        <li class=\"nav-item\" *ngIf=\"['admin', 'licensee'].includes(session.user?.role)\">\n                            <a\n                                class=\"nav-link\"\n                                [ngClass]=\"{ active: isActive('/admin/accounts/funds-under-management') }\"\n                                [routerLink]=\"['/admin/accounts/funds-under-management']\"\n                                placement=\"right\"\n                                ngbTooltip=\"FUM\"\n                            >\n                                <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon><span>FUM</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n                <ng-container *ngIf=\"['admin', 'licensee'].includes(session.user?.role)\">\n                    <li class=\"nav-item\">\n                        <a\n                            class=\"nav-link\"\n                            [ngClass]=\"{ active: isActive('/admin/transactions') }\"\n                            [routerLink]=\"['/admin/transactions']\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'common.transactions' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faBook\" [fixedWidth]=\"true\"></fa-icon><span>{{ 'menu.transactions' | translate }}</span>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\" [ngClass]=\"{ active: isActive('/admin/cards'), open: isOpen('cards') }\">\n                        <a\n                            href\n                            class=\"nav-link\"\n                            (click)=\"toggleMenu('cards'); $event.preventDefault()\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'menu.cards' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faCreditCardFront\" [fixedWidth]=\"true\"></fa-icon>\n                            <span>{{ 'menu.cards' | translate }}</span>\n                            <fa-icon class=\"nav-caret\" [icon]=\"faAngleDown\"></fa-icon>\n                        </a>\n                        <ul class=\"nav flex-nowrap overflow-hidden\" [@toggleMenu]=\"isOpen('cards')\">\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/cards/programs') }\"\n                                    [routerLink]=\"['/admin/cards/programs']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.programs' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'common.programs' | translate }}</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/cards/orders') }\"\n                                    [routerLink]=\"['/admin/cards/orders']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.orders' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'common.orders' | translate }}</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/cards/cards') }\"\n                                    [routerLink]=\"['/admin/cards/cards']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'menu.cards' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'menu.cards' | translate }}</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"nav-item\" [ngClass]=\"{ active: isActive('/admin/investments'), open: isOpen('investments') }\">\n                        <a\n                            href\n                            class=\"nav-link\"\n                            (click)=\"toggleMenu('investments'); $event.preventDefault()\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'menu.investments' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faChartNetwork\" [fixedWidth]=\"true\"></fa-icon>\n                            <span>{{ 'menu.investments' | translate }}</span>\n                            <fa-icon class=\"nav-caret\" [icon]=\"faAngleDown\"></fa-icon>\n                        </a>\n                        <ul class=\"nav flex-nowrap overflow-hidden\" [@toggleMenu]=\"isOpen('investments')\">\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/investments/products') }\"\n                                    [routerLink]=\"['/admin/investments/products']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'products.products' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'products.products' | translate }}</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/investments/allocations') }\"\n                                    [routerLink]=\"['/admin/investments/allocations']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.allocations' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'common.allocations' | translate }}</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"nav-item\" [ngClass]=\"{ active: isActive('/admin/services'), open: isOpen('services') }\">\n                        <a\n                            href\n                            class=\"nav-link\"\n                            (click)=\"toggleMenu('services'); $event.preventDefault()\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'common.services' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faToolbox\" [fixedWidth]=\"true\"></fa-icon>\n                            <span>{{ 'menu.services' | translate }}</span>\n                            <fa-icon class=\"nav-caret\" [icon]=\"faAngleDown\"></fa-icon>\n                        </a>\n                        <ul class=\"nav flex-nowrap overflow-hidden\" [@toggleMenu]=\"isOpen('services')\">\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/services/conversions') }\"\n                                    [routerLink]=\"['/admin/services/conversions']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.conversions' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'menu.conversions' | translate }}</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/services/invoices') }\"\n                                    [routerLink]=\"['/admin/services/invoices']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.invoices' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'menu.invoices' | translate }}</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/services/trades') }\"\n                                    [routerLink]=\"['/admin/services/trades']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.trades' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'common.trades' | translate }}</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/services/spot-trading') }\"\n                                    [routerLink]=\"['/admin/services/spot-trading']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.spot-trading' | translate | titlecase\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'common.spot-trading' | translate | titlecase }}</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/services/redemptions') }\"\n                                    [routerLink]=\"['/admin/services/redemptions']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.redemptions' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'common.redemptions' | translate }}</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"nav-heading\">{{ 'common.environment' | translate }}</li>\n                    <li class=\"nav-item\" [ngClass]=\"{ active: isActive('admin.platform'), open: isOpen('platform') }\">\n                        <a\n                            href\n                            class=\"nav-link\"\n                            (click)=\"toggleMenu('platform'); $event.preventDefault()\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'common.platform' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faUniversity\" [fixedWidth]=\"true\"></fa-icon>\n                            <span>{{ 'common.platform' | translate }}</span>\n                            <fa-icon class=\"nav-caret\" [icon]=\"faAngleDown\"></fa-icon>\n                        </a>\n                        <ul class=\"nav flex-nowrap overflow-hidden\" [@toggleMenu]=\"isOpen('platform')\">\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/platform/currencies') }\"\n                                    [routerLink]=\"['/admin/platform/currencies']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.currencies' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'common.currencies' | translate }}</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\" *ngIf=\"['admin', 'licensee'].includes(session.user?.role)\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/platform/deposit-instructions') }\"\n                                    [routerLink]=\"['/admin/platform/deposit-instructions']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.deposit-instructions' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'common.deposit-instructions' | translate }}</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/platform/fee-schedule') }\"\n                                    [routerLink]=\"['/admin/platform/fee-schedule']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.fee-schedule' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'common.fee-schedule' | translate }}</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\" *ngIf=\"['admin'].includes(session.user?.role)\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/platform/triggers') }\"\n                                    [routerLink]=\"['/admin/platform/triggers']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.triggers' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'common.triggers' | translate }}</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/platform/referrers') }\"\n                                    [routerLink]=\"['/admin/platform/referrers']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.referrers' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'common.referrers' | translate }}</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li\n                        class=\"nav-item\"\n                        [ngClass]=\"{ active: isActive('/admin/settings'), open: isOpen('settings') }\"\n                        *ngIf=\"['admin'].includes(session.user?.role)\"\n                    >\n                        <a\n                            href\n                            class=\"nav-link\"\n                            (click)=\"toggleMenu('settings'); $event.preventDefault()\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'common.settings' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faCog\" [fixedWidth]=\"true\"></fa-icon>\n                            <span>{{ 'common.settings' | translate }}</span>\n                            <fa-icon class=\"nav-caret\" [icon]=\"faAngleDown\"></fa-icon>\n                        </a>\n                        <ul class=\"nav flex-nowrap overflow-hidden\" [@toggleMenu]=\"isOpen('settings')\">\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/settings/api-tokens') }\"\n                                    [routerLink]=\"['/admin/settings/api-tokens']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.api-tokens' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'common.api-tokens' | translate }}</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/settings/terms') }\"\n                                    [routerLink]=\"['/admin/settings/terms']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.terms' | translate | titlecase\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'common.terms' | translate }}</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/settings/other') }\"\n                                    [routerLink]=\"['/admin/settings/other']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.other' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'common.other' | translate }}</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li\n                        class=\"nav-item\"\n                        [ngClass]=\"{ active: isActive('/admin/monitoring'), open: isOpen('monitoring') }\"\n                        *ngIf=\"['admin'].includes(session.user?.role)\"\n                    >\n                        <a\n                            href\n                            class=\"nav-link\"\n                            (click)=\"toggleMenu('monitoring'); $event.preventDefault()\"\n                            placement=\"right\"\n                            [ngbTooltip]=\"'common.monitoring' | translate\"\n                        >\n                            <fa-icon class=\"nav-icon\" [icon]=\"faChartBar\" [fixedWidth]=\"true\"></fa-icon>\n                            <span>{{ 'common.monitoring' | translate }}</span>\n                            <fa-icon class=\"nav-caret\" [icon]=\"faAngleDown\"></fa-icon>\n                        </a>\n                        <ul class=\"nav flex-nowrap overflow-hidden\" [@toggleMenu]=\"isOpen('monitoring')\">\n                            <li class=\"nav-item\">\n                                <a\n                                    class=\"nav-link\"\n                                    [ngClass]=\"{ active: isActive('/admin/monitoring/tasks') }\"\n                                    [routerLink]=\"['/admin/monitoring/tasks']\"\n                                    placement=\"right\"\n                                    [ngbTooltip]=\"'common.tasks' | translate\"\n                                >\n                                    <fa-icon class=\"nav-icon\" [icon]=\"faCaretRight\" [fixedWidth]=\"true\"></fa-icon\n                                    ><span>{{ 'common.tasks' | translate }}</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                </ng-container>\n            </ng-container>\n        </ul>\n    </nav>\n    <menu-profile class=\"sidebar-profile\" *ngIf=\"session.isAuthenticated()\"></menu-profile>\n</div>\n");

/***/ }),

/***/ "RNIM":
/*!*******************************************************!*\
  !*** ./src/app/common/password-strength.directive.ts ***!
  \*******************************************************/
/*! exports provided: PasswordStrengthDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordStrengthDirective", function() { return PasswordStrengthDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var PasswordStrengthDirective_1;



const stringEntropy = __webpack_require__(/*! fast-password-entropy/es5 */ "yECJ");
let PasswordStrengthDirective = PasswordStrengthDirective_1 = class PasswordStrengthDirective {
    constructor() {
        this.onEntropyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    validate(control) {
        const entropy = stringEntropy(control.value);
        this.onEntropyChange.emit(entropy);
        return entropy < this.passwordStrength ? { weakPassword: true } : null;
    }
};
PasswordStrengthDirective.propDecorators = {
    passwordStrength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onEntropyChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
PasswordStrengthDirective = PasswordStrengthDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[passwordStrength]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: PasswordStrengthDirective_1, multi: true }],
    })
], PasswordStrengthDirective);



/***/ }),

/***/ "RQDx":
/*!*******************************************************************!*\
  !*** ./src/app/common/postal-address/postal-address.component.ts ***!
  \*******************************************************************/
/*! exports provided: PostalAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalAddressComponent", function() { return PostalAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_postal_address_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./postal-address.component.html */ "ipJV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../countries */ "Gq6/");




let PostalAddressComponent = class PostalAddressComponent {
    constructor() {
        this.countryMap = _countries__WEBPACK_IMPORTED_MODULE_3__["countryMap"];
    }
};
PostalAddressComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    address: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
PostalAddressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'postal-address',
        template: _raw_loader_postal_address_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], PostalAddressComponent);



/***/ }),

/***/ "RT6g":
/*!***************************************************!*\
  !*** ./src/app/common/services/copier.service.ts ***!
  \***************************************************/
/*! exports provided: CopierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopierService", function() { return CopierService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let CopierService = class CopierService {
    copyText(text) {
        try {
            this.createFake(text);
            return document.execCommand('copy');
        }
        catch (_a) {
            return false;
        }
        finally {
            this.removeFake();
        }
    }
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */
    createFake(text) {
        // Create a fake element to hold the contents to copy
        this.fakeElem = document.createElement('textarea');
        // Prevent zooming on iOS
        this.fakeElem.style.fontSize = '12pt';
        // Reset box model
        this.fakeElem.style.border = '0';
        this.fakeElem.style.padding = '0';
        this.fakeElem.style.margin = '0';
        // Move element out of screen horizontally
        this.fakeElem.style.position = 'absolute';
        this.fakeElem.style.left = '-9999px';
        // Move element to the same position vertically
        const yPosition = window.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || 0;
        this.fakeElem.style.top = yPosition + 'px';
        this.fakeElem.setAttribute('readonly', '');
        this.fakeElem.value = text;
        document.body.appendChild(this.fakeElem);
        this.fakeElem.select();
        this.fakeElem.setSelectionRange(0, this.fakeElem.value.length);
    }
    removeFake() {
        if (this.fakeElem) {
            document.body.removeChild(this.fakeElem);
            this.fakeElem = null;
        }
    }
};
CopierService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CopierService);



/***/ }),

/***/ "RmeP":
/*!*******************************************************************!*\
  !*** ./src/app/common/circle-spinner/circle-spinner.component.ts ***!
  \*******************************************************************/
/*! exports provided: CircleSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleSpinnerComponent", function() { return CircleSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_circle_spinner_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./circle-spinner.component.html */ "AyX1");
/* harmony import */ var _circle_spinner_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./circle-spinner.component.scss */ "3UkA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CircleSpinnerComponent = class CircleSpinnerComponent {
};
CircleSpinnerComponent.propDecorators = {
    theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CircleSpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'circle-spinner',
        template: _raw_loader_circle_spinner_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_circle_spinner_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CircleSpinnerComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_core_logout_timer_logout_timer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app/core/logout-timer/logout-timer.service */ "l9K3");
/* harmony import */ var _app_core_menu_menu_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app/core/menu/menu.service */ "jRoP");
/* harmony import */ var _common_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/services/google-analytics.service */ "54hi");
/* harmony import */ var _common_services_intercom_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/services/intercom.service */ "rSOl");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_viewport_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/services/viewport.service */ "j/N3");
/* harmony import */ var _store_currencies_currencies_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/currencies/currencies.service */ "QRBR");
/* harmony import */ var _store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/wallets/wallets.service */ "hOWo");

















let AppComponent = class AppComponent {
    constructor(session, menuService, translate, intercom, analytics, logoutTimer, viewport, router, ngbModal, currenciesService, walletsService, platformId) {
        this.session = session;
        this.menuService = menuService;
        this.translate = translate;
        this.intercom = intercom;
        this.analytics = analytics;
        this.logoutTimer = logoutTimer;
        this.viewport = viewport;
        this.router = router;
        this.ngbModal = ngbModal;
        this.currenciesService = currenciesService;
        this.walletsService = walletsService;
        this.platformId = platformId;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
        translate.addLangs(['en', 'kr']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|kr/) ? browserLang : 'en');
        const lastLanguageUsed = localStorage.getItem('lang');
        if (lastLanguageUsed) {
            translate.use(lastLanguageUsed);
        }
    }
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.logoutTimer.init();
            this.intercom.boot();
            this.analytics.init();
            this.viewport.update();
        }
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])).subscribe(() => {
            if (this.ngbModal.hasOpenModals()) {
                this.ngbModal.dismissAll();
            }
        });
        this.subscriptions.add(this.session.userEvent.subscribe(event => {
            if (event.type === _common_services_session_service__WEBPACK_IMPORTED_MODULE_13__["UserEventType"].LOGIN) {
                this.polling = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(1000 * 10).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([this.walletsService.fetchAsObservable()]))), Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(1000 * 60 * 2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([this.currenciesService.fetchAsObservable()])))).subscribe(() => undefined);
            }
            else if (event.type === _common_services_session_service__WEBPACK_IMPORTED_MODULE_13__["UserEventType"].LOGOUT) {
                if (this.polling && !this.polling.closed) {
                    this.polling.unsubscribe();
                }
                if (!this.router.isActive('/login', false) && !this.router.getCurrentNavigation()) {
                    this.router.navigate(['/login']);
                }
            }
        }));
        // TODO: remove when session service has been refactored
        if (this.session.hasValidRefreshToken()) {
            this.session.update().subscribe(() => undefined);
        }
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    onResize() {
        this.viewport.update();
    }
    showHeader() {
        return (this.session.isAuthenticated() &&
            !['/login', '/register', '/verify'].some(state => this.router.isActive(state, false)));
    }
    showSidebar() {
        return (this.session.isAuthenticated() &&
            !['/login', '/register', '/verify'].some(state => this.router.isActive(state, false)));
    }
    showFooter() {
        return (this.session.isAuthenticated() &&
            !['/login', '/register', '/admin', '/verify'].some(state => this.router.isActive(state, false)));
    }
};
AppComponent.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"] },
    { type: _app_core_menu_menu_service__WEBPACK_IMPORTED_MODULE_10__["MenuService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _common_services_intercom_service__WEBPACK_IMPORTED_MODULE_12__["IntercomService"] },
    { type: _common_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_11__["GoogleAnalyticsService"] },
    { type: _app_core_logout_timer_logout_timer_service__WEBPACK_IMPORTED_MODULE_9__["LogoutTimerService"] },
    { type: _common_services_viewport_service__WEBPACK_IMPORTED_MODULE_14__["ViewportService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _store_currencies_currencies_service__WEBPACK_IMPORTED_MODULE_15__["CurrenciesService"] },
    { type: _store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_16__["WalletsService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"],] }] }
];
AppComponent.propDecorators = {
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize',] }]
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AppComponent);



/***/ }),

/***/ "SyN7":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/user-avatar/user-avatar.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"user === undefined; else userTemplate\">\n    <ng-container *ngTemplateOutlet=\"mint\"></ng-container>\n</ng-container>\n<ng-template #userTemplate>\n    <ng-container *ngIf=\"user; else platform\">\n        <div class=\"avatar\" [ngClass]=\"styles\">\n            <img [src]=\"avatarUrl | safeResourceUrl\" class=\"img-avatar\" />\n            <span class=\"avatar-status badge-success\" *ngIf=\"online\"></span>\n        </div>\n    </ng-container>\n</ng-template>\n<ng-template #mint>\n    <!-- htmllint attr-bans=\"[]\" -->\n    <div class=\"avatar\" [ngClass]=\"styles\">\n        <svg\n            class=\"img-avatar\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            xml:space=\"preserve\"\n            text-rendering=\"optimizeLegibility\"\n            style=\"\n                -webkit-font-smoothing: auto;\n                shape-rendering: geometricPrecision;\n                image-rendering: optimizeQuality;\n                fill-rule: evenodd;\n                clip-rule: evenodd;\n            \"\n            viewBox=\"0 0 120 120\"\n        >\n            <g>\n                <rect [attr.fill]=\"successColor\" width=\"120\" height=\"120\"></rect>\n                <text font-weight=\"300\" font-size=\"3.125em\" font-family=\"sans-serif\" fill=\"#ffffff\" x=\"50%\" y=\"50%\" text-anchor=\"middle\" dy=\"0.35em\">\n                    MI\n                </text>\n            </g>\n        </svg>\n    </div>\n    <!-- htmllint attr-bans=\"$previous\" -->\n</ng-template>\n<ng-template #platform>\n    <!-- htmllint attr-bans=\"[]\" -->\n    <div class=\"avatar\" [ngClass]=\"styles\">\n        <svg\n            class=\"img-avatar\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            xml:space=\"preserve\"\n            text-rendering=\"optimizeLegibility\"\n            style=\"\n                -webkit-font-smoothing: auto;\n                shape-rendering: geometricPrecision;\n                image-rendering: optimizeQuality;\n                fill-rule: evenodd;\n                clip-rule: evenodd;\n            \"\n            viewBox=\"0 0 120 120\"\n        >\n            <g>\n                <rect [attr.fill]=\"primaryColor\" width=\"120\" height=\"120\"></rect>\n                <text font-weight=\"300\" font-size=\"3.125em\" font-family=\"sans-serif\" fill=\"#ffffff\" x=\"50%\" y=\"50%\" text-anchor=\"middle\" dy=\"0.35em\">\n                    {{ appInitials }}\n                </text>\n            </g>\n        </svg>\n    </div>\n    <!-- htmllint attr-bans=\"$previous\" -->\n</ng-template>\n");

/***/ }),

/***/ "TJyK":
/*!*****************************************************************************!*\
  !*** ./src/app/common/deposit-instruction/deposit-instruction.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DepositInstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositInstructionComponent", function() { return DepositInstructionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_deposit_instruction_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./deposit-instruction.component.html */ "Wxcg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "WE53");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








let DepositInstructionComponent = class DepositInstructionComponent {
    constructor(http, translate) {
        this.http = http;
        this.translate = translate;
        this.isLoading = false;
        this.faPhoneLaptop = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPhoneLaptop"];
        this.faPaperPlane = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPaperPlane"];
        this.faReceipt = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faReceipt"];
        this.faUniversity = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUniversity"];
        this.faArrowRight = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowRight"];
        this.fetchBeneficiaryEvent = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(this.fetchBeneficiaryEvent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(() => this.http.get(`/beneficiaries/${this.transaction.beneficiary.id}`)))
            .subscribe(beneficiary => {
            this.transaction.beneficiary = beneficiary;
        }));
        this.fetchBeneficiaryEvent.next();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
};
DepositInstructionComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
DepositInstructionComponent.propDecorators = {
    transaction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DepositInstructionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'deposit-instruction',
        template: _raw_loader_deposit_instruction_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DepositInstructionComponent);



/***/ }),

/***/ "TwQz":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/user/user.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex align-items-center\">\n    <ng-container *ngIf=\"user === undefined; else userTemplate\">\n        <ng-container *ngTemplateOutlet=\"mint\"></ng-container>\n    </ng-container>\n</div>\n<ng-template #userTemplate>\n    <ng-container *ngIf=\"user; else platform\">\n        <a href (click)=\"handleClick($event, user.id)\">\n            <ng-template #tooltipContent>\n                <span>{{ user.name }}</span> <br />\n                <span>{{ user.email }} </span>\n            </ng-template>\n            <user-avatar [user]=\"user\" size=\"xs\" elementClass=\"avatar-labeled\" [ngbTooltip]=\"tooltipContent\" [container]=\"'body'\"> </user-avatar>\n        </a>\n        <div>\n            <span>\n                {{ user.name | truncate: true:maxCharacters:'..' }}\n                <span\n                    class=\"badge text-capitalize\"\n                    [ngClass]=\"{\n                        'badge-primary': user.role === 'admin',\n                        'badge-success': user.role === 'licensee',\n                        'badge-warning': user.role === 'support'\n                    }\"\n                    *ngIf=\"displayBadges && user.role\"\n                >\n                    {{ user.role }}\n                </span>\n                <a\n                    href\n                    [routerLink]=\"['/admin/accounts/users', user!.association?.id]\"\n                    [ngbTooltip]=\"association\"\n                    [disableTooltip]=\"!user.isManaged\"\n                    placement=\"right\"\n                    *ngIf=\"user.isManaged\"\n                >\n                    <span class=\"text-capitalize badge badge-lg badge-success\">{{ 'common.managed' | translate }}</span>\n                </a>\n            </span>\n            <div class=\"text-muted font-sm\" *ngIf=\"displayAccountNumber\">\n                {{ user.accountNumber | accountNumber }}\n            </div>\n        </div>\n    </ng-container>\n</ng-template>\n<ng-template #mint>\n    <user-avatar [user]=\"user\" size=\"xs\" elementClass=\"avatar-labeled\"> </user-avatar>\n    <div>\n        <span>{{ 'common.mint' | translate }}</span>\n        <div class=\"text-muted font-sm\" *ngIf=\"displayAccountNumber\">@{{ 'common.mint' | translate | lowercase }}</div>\n    </div>\n</ng-template>\n<ng-template #platform>\n    <user-avatar [user]=\"user\" size=\"xs\" elementClass=\"avatar-labeled\"> </user-avatar>\n    <div>\n        <span>{{ displayName }}</span>\n        <div class=\"text-muted font-sm\" *ngIf=\"displayAccountNumber\">@{{ appName }}</div>\n    </div>\n</ng-template>\n<ng-template #association>\n    <div *ngIf=\"user.association\">\n        <div class=\"d-flex align-items-center justify-content-center\">\n            <a [routerLink]=\"['/admin/accounts/users', user!.association?.id]\">\n                <user-avatar [user]=\"user.association\" size=\"xs\" elementClass=\"avatar-labeled\"> </user-avatar>\n            </a>\n            <div>\n                <span>\n                    {{ user.association?.name }}\n                </span>\n                <div class=\"text-muted font-sm\">\n                    {{ user.association?.accountNumber | accountNumber }}\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "UKac":
/*!************************************************!*\
  !*** ./src/app/store/wallets/wallets.store.ts ***!
  \************************************************/
/*! exports provided: WalletsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletsStore", function() { return WalletsStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");



let WalletsStore = class WalletsStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"] {
    constructor() {
        super();
    }
};
WalletsStore.ctorParameters = () => [];
WalletsStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'wallets' })
], WalletsStore);



/***/ }),

/***/ "V6z1":
/*!******************************************************!*\
  !*** ./src/app/store/currencies/currencies.mixin.ts ***!
  \******************************************************/
/*! exports provided: getCurrencyColor, convertCurrency, calculateExchangeRate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencyColor", function() { return getCurrencyColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertCurrency", function() { return convertCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateExchangeRate", function() { return calculateExchangeRate; });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "aSns");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);


const style = getComputedStyle(document.body);
const color = color__WEBPACK_IMPORTED_MODULE_1__(style.getPropertyValue('--primary').trim());
function getCurrencyColor(currency, factor = 0) {
    return currency.color || color.lighten((factor % 7) * 0.08).hex();
}
function convertCurrency(amount, baseCurrency, counterCurrency, spreadFee, spreadUp = true) {
    let exchangeRate = calculateExchangeRate(baseCurrency, counterCurrency);
    if (baseCurrency.code !== counterCurrency.code && spreadFee && spreadFee.relative) {
        if (spreadUp) {
            exchangeRate = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(exchangeRate).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(1).plus(spreadFee.relative));
        }
        else {
            exchangeRate = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(exchangeRate).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(1).minus(spreadFee.relative));
        }
    }
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(amount).times(exchangeRate).toFixed(8, 1);
}
function calculateExchangeRate(baseCurrency, counterCurrency) {
    if (!counterCurrency || !baseCurrency) {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(1);
    }
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(counterCurrency.exchangeRate).div(baseCurrency.exchangeRate);
}


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app\" [ngClass]=\"menuService.style\">\n    <app-menu class=\"sidebar-wrapper\" *ngIf=\"showSidebar()\"></app-menu>\n    <div class=\"app-body\">\n        <app-header class=\"app-header\" *ngIf=\"showHeader()\"></app-header>\n        <main class=\"main\">\n            <status-message-outlet></status-message-outlet>\n            <toastr></toastr>\n            <router-outlet></router-outlet>\n        </main>\n        <app-footer class=\"app-footer\" *ngIf=\"showFooter()\"></app-footer>\n    </div>\n</div>\n");

/***/ }),

/***/ "WIZs":
/*!*************************************************************!*\
  !*** ./src/app/common/user-avatar/user-avatar.component.ts ***!
  \*************************************************************/
/*! exports provided: UserAvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatarComponent", function() { return UserAvatarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_avatar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-avatar.component.html */ "SyN7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ "aSns");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/avatar.service */ "tYXW");






let UserAvatarComponent = class UserAvatarComponent {
    constructor(avatarService) {
        this.avatarService = avatarService;
        this.online = false;
        this.border = false;
        this.elementClass = '';
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appName;
        this.appInitials = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appName.slice(0, 2).toUpperCase();
    }
    get primaryColor() {
        if (!this._primaryColor) {
            this._primaryColor = color__WEBPACK_IMPORTED_MODULE_3__(getComputedStyle(document.body).getPropertyValue('--primary').trim()).hex();
        }
        return this._primaryColor;
    }
    get successColor() {
        if (!this._successColor) {
            this._successColor = color__WEBPACK_IMPORTED_MODULE_3__(getComputedStyle(document.body).getPropertyValue('--success').trim()).hex();
        }
        return this._successColor;
    }
    get avatarUrl() {
        var _a;
        return `/.api/users/${(_a = this.user) === null || _a === void 0 ? void 0 : _a.id}/avatar?v=${this.avatarService.timestamp}`;
    }
    ngOnChanges(changes) {
        if (changes.user) {
            this.user = changes.user.currentValue;
        }
    }
    get styles() {
        return (this.border ? 'avatar-border ' : '') + (this.size ? `avatar-${this.size} ` : '') + this.elementClass;
    }
};
UserAvatarComponent.ctorParameters = () => [
    { type: _services_avatar_service__WEBPACK_IMPORTED_MODULE_5__["AvatarService"] }
];
UserAvatarComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    online: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    border: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    elementClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
UserAvatarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'user-avatar',
        template: _raw_loader_user_avatar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserAvatarComponent);



/***/ }),

/***/ "Wxcg":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/deposit-instruction/deposit-instruction.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mb-3\" *ngIf=\"['pending', 'processing'].includes(transaction.status) && transaction.type === 'deposit'\">\n    <h4 class=\"text-primary mb-2\">{{ 'common.make-transfer' | translate }}</h4>\n    <div class=\"d-flex align-items-center\">\n        <div class=\"text-center p-2\">\n            <fa-icon class=\"text-primary\" [icon]=\"faPhoneLaptop\" size=\"3x\"></fa-icon>\n            <div class=\"font-sm text-muted mt-3\">{{ 'common.open-online-banking' | translate }}</div>\n        </div>\n        <fa-icon class=\"text-primary\" [icon]=\"faArrowRight\" size=\"md\"></fa-icon>\n        <div class=\"text-center p-2\">\n            <fa-icon class=\"text-primary\" [icon]=\"faPaperPlane\" size=\"3x\"></fa-icon>\n            <div class=\"font-sm text-muted mt-3\">{{ 'common.make-a-transfer' | translate }}</div>\n        </div>\n        <fa-icon class=\"text-primary\" [icon]=\"faArrowRight\" size=\"md\"></fa-icon>\n        <div class=\"text-center p-2\">\n            <fa-icon class=\"text-primary\" [icon]=\"faReceipt\" size=\"3x\"></fa-icon>\n            <div class=\"font-sm text-muted mt-3\">{{ 'common.save-payment-document' | translate }}</div>\n        </div>\n    </div>\n</div>\n<div class=\"mb-3\">\n    <h4 class=\"text-primary mb-2\">{{ 'common.bank-details' | translate }}</h4>\n    <deposit-instruction-table [beneficiary]=\"transaction.beneficiary\" [transaction]=\"transaction\" [showWarning]=\"true\"></deposit-instruction-table>\n</div>\n");

/***/ }),

/***/ "XWKF":
/*!**************************************************!*\
  !*** ./src/app/common/safe-resource-url.pipe.ts ***!
  \**************************************************/
/*! exports provided: SafeResourceUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeResourceUrlPipe", function() { return SafeResourceUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



let SafeResourceUrlPipe = class SafeResourceUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
};
SafeResourceUrlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafeResourceUrlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeResourceUrl' })
], SafeResourceUrlPipe);



/***/ }),

/***/ "XkEx":
/*!*******************************************!*\
  !*** ./src/app/common/focus.directive.ts ***!
  \*******************************************/
/*! exports provided: FocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusDirective", function() { return FocusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



let FocusDirective = class FocusDirective {
    constructor(el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
    }
    ngOnChanges() {
        if (this.focus) {
            if (this.el.nativeElement) {
                this.ngZone.onStable
                    .asObservable()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
                    .subscribe(() => {
                    this.el.nativeElement.focus();
                });
            }
        }
    }
};
FocusDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
FocusDirective.propDecorators = {
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
FocusDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[focus]',
    })
], FocusDirective);



/***/ }),

/***/ "YXSw":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/user-details-form/user-details-form.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #detailsForm=\"ngForm\" [ngClass]=\"{ 'ng-submitted': submitted }\" class=\"form-validation\" novalidate>\n    <ul *ngIf=\"type === 'business'\" class=\"nav nav-pills nav-fill mb-2\">\n        <li class=\"nav-item\">\n            <a href class=\"nav-link\" [ngClass]=\"{ active: currentTab === 'business' }\" (click)=\"currentTab = 'business'; $event.preventDefault()\">\n                {{ 'common.business' | translate }}\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a href class=\"nav-link\" [ngClass]=\"{ active: currentTab === 'manager' }\" (click)=\"currentTab = 'manager'; $event.preventDefault()\">\n                {{ 'common.manager' | translate }}\n            </a>\n        </li>\n    </ul>\n    <ng-container *ngIf=\"type === 'personal' || (type === 'business' && currentTab === 'manager'); else businessDetails\">\n        <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"firstName\">{{ 'common.first-name' | translate }}</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"firstName\"\n                    name=\"firstName\"\n                    [(ngModel)]=\"details.firstName\"\n                    #firstName=\"ngModel\"\n                    [disabled]=\"disabled\"\n                    required\n                    emptyToNull\n                    nameValidator\n                />\n                <div *ngIf=\"firstName.invalid && (submitted || firstName.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"firstName?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"firstName?.errors?.nameError\">\n                        {{ 'common.only-alphabets-are-allowed' | translate }}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"lastName\">{{ 'common.last-name' | translate }}</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"lastName\"\n                    name=\"lastName\"\n                    [(ngModel)]=\"details.lastName\"\n                    #lastName=\"ngModel\"\n                    [disabled]=\"disabled\"\n                    required\n                    emptyToNull\n                    nameValidator\n                />\n                <div *ngIf=\"lastName.invalid && (submitted || lastName.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"lastName?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"lastName?.errors?.nameError\">{{ 'common.only-alphabets-are-allowed' | translate }}</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-sm-14\">\n                <label class=\"form-control-label\" for=\"middleName\"\n                    >{{ 'common.middle-name' | translate }} <span class=\"text-muted\">({{ 'common.optional' | translate }})</span></label\n                >\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"middleName\"\n                    name=\"middleName\"\n                    [(ngModel)]=\"details.middleName\"\n                    #middleName=\"ngModel\"\n                    [disabled]=\"disabled\"\n                    emptyToNull\n                    nameValidator\n                />\n                <div *ngIf=\"middleName.invalid && (submitted || middleName.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"middleName?.errors?.nameError\">\n                        {{ 'common.only-alphabets-are-allowed' | translate }}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-10\">\n                <label class=\"form-control-label\" for=\"gender\">{{ 'common.gender' | translate }}</label>\n                <ng-select\n                    id=\"gender\"\n                    name=\"gender\"\n                    [(ngModel)]=\"details.gender\"\n                    [items]=\"genders\"\n                    [clearable]=\"false\"\n                    [searchable]=\"false\"\n                    #gender=\"ngModel\"\n                    [required]=\"requireAll\"\n                    [disabled]=\"disabled\"\n                >\n                    <ng-template ng-label-tmp let-item=\"item\"\n                        ><span class=\"text-capitalize\">{{ item }}</span></ng-template\n                    >\n                    <ng-template ng-option-tmp let-item=\"item\"\n                        ><span class=\"text-capitalize\">{{ item }}</span></ng-template\n                    >\n                </ng-select>\n                <div *ngIf=\"gender.invalid && (submitted || gender.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"gender?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-sm-8\">\n                <label class=\"form-control-label\" for=\"phoneCountryCode\">{{ 'common.country-code' | translate }}</label>\n                <ng-select\n                    id=\"phoneCountryCode\"\n                    name=\"phoneCountryCode\"\n                    [(ngModel)]=\"phoneCountryCode\"\n                    bindLabel=\"alpha2\"\n                    [items]=\"countries\"\n                    [searchFn]=\"searchCountryCode\"\n                    [clearable]=\"false\"\n                    #phoneCountryCodeField=\"ngModel\"\n                    autocomplete=\"false\"\n                    [disabled]=\"disabled\"\n                    [required]=\"requireAll\"\n                >\n                    <ng-template ng-label-tmp let-item=\"item\">{{ item.alpha2 }} {{ item.countryCallingCodes[0] }}</ng-template>\n                    <ng-template ng-option-tmp let-item=\"item\">{{ item.alpha2 }} {{ item.countryCallingCodes[0] }}</ng-template>\n                </ng-select>\n                <div *ngIf=\"phoneCountryCodeField.invalid && (submitted || phoneCountryCodeField.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"phoneCountryCodeField?.errors?.required\">\n                        {{ 'common.this-is-required' | translate }}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-16\">\n                <label class=\"form-control-label\" for=\"phoneNumber\">{{ 'common.phone-number' | translate }}</label>\n                <div class=\"input-group\">\n                    <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                            <fa-icon [icon]=\"faPhone\"></fa-icon>\n                        </span>\n                    </span>\n                    <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"phoneNumber\"\n                        name=\"phoneNumber\"\n                        [(ngModel)]=\"details.phoneNumber\"\n                        #phoneNumber=\"ngModel\"\n                        [required]=\"requireAll\"\n                        [disabled]=\"disabled\"\n                        emptyToNull\n                    />\n                </div>\n                <div *ngIf=\"phoneNumber.invalid && (submitted || phoneNumber.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"phoneNumber?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"birthday\">{{ 'common.birthday' | translate }}</label>\n                <input\n                    class=\"form-control\"\n                    type=\"text\"\n                    id=\"birthday\"\n                    name=\"birthday\"\n                    [(ngModel)]=\"birthday\"\n                    mask=\"00/00/0000\"\n                    #birthdayField=\"ngModel\"\n                    [required]=\"requireAll\"\n                    [disabled]=\"disabled\"\n                    birthdayValidator\n                />\n                <small class=\"form-text text-muted\">{{ 'common.format' | translate }}: dd/mm/yyyy</small>\n                <div *ngIf=\"birthdayField.invalid && (submitted || birthdayField.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"birthdayField?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"birthdayField?.errors?.invalidDate\">{{ 'common.invalid-date' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"birthdayField?.errors?.dateLongAgo\">{{ 'common.date-should-be-1900' | translate }}</div>\n                    <div class=\"form-control-feedback\" *ngIf=\"birthdayField?.errors?.dateInFuture\">{{ 'common.you-should-18' | translate }}</div>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"nationality\">{{ 'common.nationality' | translate }}</label>\n                <ng-select\n                    id=\"nationality\"\n                    name=\"nationality\"\n                    [(ngModel)]=\"details.nationality\"\n                    bindLabel=\"name\"\n                    bindValue=\"alpha2\"\n                    [items]=\"countriesSortedByName\"\n                    [clearable]=\"false\"\n                    #nationality=\"ngModel\"\n                    autocomplete=\"false\"\n                    [disabled]=\"disabled\"\n                    [required]=\"requireAll\"\n                ></ng-select>\n                <div *ngIf=\"nationality.invalid && (submitted || nationality.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"nationality?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n        </div>\n        <address-form [(address)]=\"details.address\" [disabled]=\"disabled\" [requireAll]=\"requireAll\"></address-form>\n        <div class=\"form-group\">\n            <label class=\"form-control-label\" for=\"occupation\">{{ 'user-details-form.occupation' | translate }}</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"occupation\"\n                name=\"occupation\"\n                [(ngModel)]=\"details.occupation\"\n                #occupation=\"ngModel\"\n                [disabled]=\"disabled\"\n                [required]=\"requireAll\"\n                emptyToNull\n            />\n            <div *ngIf=\"occupation.invalid && (submitted || occupation.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"occupation?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"form-control-label\" for=\"sourceOfIncome\">{{ 'user-details-form.source-of-income' | translate }}</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"sourceOfIncome\"\n                name=\"sourceOfIncome\"\n                [(ngModel)]=\"details.sourceOfIncome\"\n                #sourceOfIncome=\"ngModel\"\n                [disabled]=\"disabled\"\n                [required]=\"requireAll\"\n                emptyToNull\n            />\n            <div *ngIf=\"sourceOfIncome.invalid && (submitted || sourceOfIncome.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"sourceOfIncome?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"form-control-label\" for=\"taxIdentificationNumber\">{{ 'user-details-form.tax-identification-number' | translate }}</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"taxIdentificationNumber\"\n                name=\"taxIdentificationNumber\"\n                [(ngModel)]=\"details.taxIdentificationNumber\"\n                #taxIdentificationNumber=\"ngModel\"\n                [disabled]=\"disabled\"\n                [required]=\"requireAll\"\n                emptyToNull\n            />\n            <div *ngIf=\"taxIdentificationNumber.invalid && (submitted || taxIdentificationNumber.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"taxIdentificationNumber?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-sm-8\">\n                <label class=\"form-control-label\" for=\"documentType\">{{ 'user-details-form.document-type' | translate }}</label>\n                <ng-select\n                    id=\"documentType\"\n                    name=\"documentType\"\n                    [(ngModel)]=\"details.documentType\"\n                    bindLabel=\"name\"\n                    bindValue=\"alpha2\"\n                    [items]=\"documentTypes\"\n                    [clearable]=\"false\"\n                    #documentType=\"ngModel\"\n                    [disabled]=\"disabled\"\n                    [required]=\"requireAll\"\n                >\n                    <ng-template ng-label-tmp let-item=\"item\">{{ item | uppercase }}</ng-template>\n                    <ng-template ng-option-tmp let-item=\"item\">{{ item | uppercase }}</ng-template>\n                </ng-select>\n                <div *ngIf=\"documentType.invalid && (submitted || documentType.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"documentType?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-16\">\n                <label class=\"form-control-label\" for=\"documentNumber\">{{ 'user-details-form.document-number' | translate }}</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"documentNumber\"\n                    name=\"documentNumber\"\n                    [(ngModel)]=\"details.documentNumber\"\n                    #documentNumber=\"ngModel\"\n                    [disabled]=\"disabled\"\n                    [required]=\"requireAll\"\n                    emptyToNull\n                />\n                <div *ngIf=\"documentNumber.invalid && (submitted || documentNumber.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"documentNumber?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"documentIssuingDate\">{{ 'common.document-issuance-date' | translate }}</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"documentIssuingDate\"\n                    name=\"documentIssuingDate\"\n                    mask=\"00/00/0000\"\n                    [(ngModel)]=\"documentIssuingDate\"\n                    #documentIssuingDateForm=\"ngModel\"\n                    [disabled]=\"disabled\"\n                    [required]=\"requireAll\"\n                    useValidator=\"date\"\n                />\n                <small class=\"form-text text-muted\">{{ 'common.format' | translate }}: dd/mm/yyyy</small>\n                <div *ngIf=\"documentIssuingDateForm.invalid && (submitted || documentIssuingDateForm.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"documentIssuingDateForm?.errors?.required\">\n                        {{ 'common.this-is-required' | translate }}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"documentExpiryDate\">{{ 'user-details-form.document-expiry-date' | translate }}</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"documentExpiryDate\"\n                    name=\"documentExpiryDate\"\n                    mask=\"00/00/0000\"\n                    [(ngModel)]=\"documentExpiryDate\"\n                    #documentExpiryDateForm=\"ngModel\"\n                    [disabled]=\"disabled\"\n                    [required]=\"requireAll\"\n                    useValidator=\"date\"\n                />\n                <small class=\"form-text text-muted\">{{ 'common.format' | translate }}: dd/mm/yyyy</small>\n                <div *ngIf=\"documentExpiryDateForm.invalid && (submitted || documentExpiryDateForm.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"documentExpiryDateForm?.errors?.required\">\n                        {{ 'common.this-is-required' | translate }}\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"form-control-label\" for=\"proofOfAddressDate\">{{ 'user-details-form.proof-of-address-date' | translate }}</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"proofOfAddressDate\"\n                name=\"proofOfAddressDate\"\n                mask=\"00/00/0000\"\n                [(ngModel)]=\"proofOfAddressDate\"\n                #proofOfAddressDateForm=\"ngModel\"\n                [disabled]=\"disabled\"\n                [required]=\"requireAll\"\n                useValidator=\"date\"\n            />\n            <small class=\"form-text text-muted\">{{ 'common.format' | translate }}: dd/mm/yyyy</small>\n            <div *ngIf=\"proofOfAddressDateForm.invalid && (submitted || proofOfAddressDateForm.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"proofOfAddressDateForm?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <ng-container *ngIf=\"type === 'personal'\">\n            <div class=\"form-group\">\n                <label class=\"form-control-label\" for=\"expectedTurnover\">{{ 'user-details-form.expected-turnover' | translate }}</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"expectedTurnover\"\n                    name=\"expectedTurnover\"\n                    [(ngModel)]=\"details.expectedTurnover\"\n                    #expectedTurnover=\"ngModel\"\n                    [disabled]=\"disabled\"\n                    [required]=\"requireAll\"\n                    emptyToNull\n                />\n                <div *ngIf=\"expectedTurnover.invalid && (submitted || expectedTurnover.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"expectedTurnover?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"form-control-label\" for=\"fatcaYes\"\n                    >{{ 'common.are-you-us-or-fatca-purposes' | translate }}\n                    <fa-icon\n                        class=\"text-primary\"\n                        [icon]=\"faInfoCircle\"\n                        [ngbPopover]=\"fatcaContent\"\n                        [popoverTitle]=\"fatcaTitle\"\n                        triggers=\"mouseenter:mouseleave\"\n                    ></fa-icon\n                ></label>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"custom-control custom-radio custom-control-inline\">\n                            <input\n                                type=\"radio\"\n                                [value]=\"true\"\n                                [(ngModel)]=\"details.fatca\"\n                                id=\"fatcaYes\"\n                                name=\"fatca\"\n                                class=\"custom-control-input\"\n                                [disabled]=\"disabled\"\n                                #fatca=\"ngModel\"\n                                [required]=\"requireAll\"\n                            />\n                            <label class=\"custom-control-label\" for=\"fatcaYes\">{{ 'common.yes' | translate }}</label>\n                        </div>\n                        <div class=\"custom-control custom-radio custom-control-inline\">\n                            <input\n                                type=\"radio\"\n                                [value]=\"false\"\n                                [(ngModel)]=\"details.fatca\"\n                                id=\"fatcaNo\"\n                                name=\"fatca\"\n                                class=\"custom-control-input\"\n                                [disabled]=\"disabled\"\n                                [required]=\"requireAll\"\n                            />\n                            <label class=\"custom-control-label\" for=\"fatcaNo\">{{ 'common.no' | translate }}</label>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"fatca.invalid && (submitted || fatca.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"fatca?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n        </ng-container>\n    </ng-container>\n    <ng-template #businessDetails>\n        <div class=\"form-group\">\n            <label class=\"form-control-label\" for=\"businessName\">{{ 'common.entity-name' | translate }}</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"businessName\"\n                name=\"businessName\"\n                [(ngModel)]=\"business.name\"\n                #businessName=\"ngModel\"\n                [disabled]=\"disabled\"\n                required\n                emptyToNull\n            />\n            <div *ngIf=\"businessName.invalid && (submitted || businessName.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"businessName?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"businessType\">{{ 'common.type' | translate }}</label>\n                <ng-select\n                    id=\"businessType\"\n                    name=\"businessType\"\n                    [(ngModel)]=\"business.type\"\n                    [items]=\"businessTypes\"\n                    [clearable]=\"false\"\n                    [searchable]=\"false\"\n                    #businessType=\"ngModel\"\n                    [required]=\"requireAll\"\n                    [disabled]=\"disabled\"\n                ></ng-select>\n                <div *ngIf=\"businessType.invalid && (submitted || businessType.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"businessType?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"registrationNumber\">{{ 'user-details-form.registration-number' | translate }}</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"registrationNumber\"\n                    name=\"registrationNumber\"\n                    [(ngModel)]=\"business.registrationNumber\"\n                    #registrationNumber=\"ngModel\"\n                    [disabled]=\"disabled\"\n                    [required]=\"requireAll\"\n                    emptyToNull\n                />\n                <div *ngIf=\"registrationNumber.invalid && (submitted || registrationNumber.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"registrationNumber?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-sm-8\">\n                <label class=\"form-control-label\" for=\"businessPhoneCountryCode\">{{ 'common.country-code' | translate }}</label>\n                <ng-select\n                    id=\"businessPhoneCountryCode\"\n                    name=\"businessPhoneCountryCode\"\n                    [(ngModel)]=\"businessPhoneCountryCode\"\n                    bindLabel=\"alpha2\"\n                    [items]=\"countries\"\n                    [searchFn]=\"searchCountryCode\"\n                    [clearable]=\"false\"\n                    #businessPhoneCountryCodeField=\"ngModel\"\n                    autocomplete=\"false\"\n                    [disabled]=\"disabled\"\n                    [required]=\"requireAll\"\n                >\n                    <ng-template ng-label-tmp let-item=\"item\">{{ item.alpha2 }} {{ item.countryCallingCodes[0] }}</ng-template>\n                    <ng-template ng-option-tmp let-item=\"item\">{{ item.alpha2 }} {{ item.countryCallingCodes[0] }}</ng-template>\n                </ng-select>\n                <div *ngIf=\"businessPhoneCountryCodeField.invalid && (submitted || businessPhoneCountryCodeField.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"businessPhoneCountryCodeField?.errors?.required\">\n                        {{ 'common.this-is-required' | translate }}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-16\">\n                <label class=\"form-control-label\" for=\"businessPhoneNumber\">{{ 'common.phone-number' | translate }}</label>\n                <div class=\"input-group\">\n                    <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                            <fa-icon [icon]=\"faPhone\"></fa-icon>\n                        </span>\n                    </span>\n                    <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"businessPhoneNumber\"\n                        name=\"businessPhoneNumber\"\n                        [(ngModel)]=\"business.phoneNumber\"\n                        #businessPhoneNumber=\"ngModel\"\n                        [required]=\"requireAll\"\n                        [disabled]=\"disabled\"\n                        emptyToNull\n                    />\n                </div>\n                <div *ngIf=\"businessPhoneNumber.invalid && (submitted || businessPhoneNumber.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"businessPhoneNumber?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"countryOfIncorporation\">{{ 'user-details-form.country-of-incorporation' | translate }}</label>\n                <ng-select\n                    id=\"countryOfIncorporation\"\n                    name=\"countryOfIncorporation\"\n                    [(ngModel)]=\"business.countryOfIncorporation\"\n                    bindLabel=\"name\"\n                    bindValue=\"alpha2\"\n                    [items]=\"countriesSortedByName\"\n                    [clearable]=\"false\"\n                    #countryOfIncorporation=\"ngModel\"\n                    autocomplete=\"false\"\n                    [disabled]=\"disabled\"\n                    [required]=\"requireAll\"\n                ></ng-select>\n                <div *ngIf=\"countryOfIncorporation.invalid && (submitted || countryOfIncorporation.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"countryOfIncorporation?.errors?.required\">\n                        {{ 'common.this-is-required' | translate }}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"dateOfIncorporation\">{{ 'user-details-form.date-of-incorporation' | translate }}</label>\n                <input\n                    class=\"form-control\"\n                    type=\"text\"\n                    id=\"dateOfIncorporation\"\n                    name=\"dateOfIncorporation\"\n                    [(ngModel)]=\"dateOfIncorporation\"\n                    mask=\"00/00/0000\"\n                    #dateOfIncorporationField=\"ngModel\"\n                    [required]=\"requireAll\"\n                    [disabled]=\"disabled\"\n                />\n                <small class=\"form-text text-muted\">{{ 'common.format' | translate }}: dd/mm/yyyy</small>\n                <div *ngIf=\"dateOfIncorporationField.invalid && (submitted || dateOfIncorporationField.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"dateOfIncorporationField?.errors?.required\">\n                        {{ 'common.this-is-required' | translate }}\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"industry\">{{ 'common.industry' | translate }}</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"industry\"\n                    name=\"industry\"\n                    [(ngModel)]=\"business.industry\"\n                    #industry=\"ngModel\"\n                    [disabled]=\"disabled\"\n                    [required]=\"requireAll\"\n                    emptyToNull\n                />\n                <div *ngIf=\"industry.invalid && (submitted || industry.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"industry?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n                </div>\n            </div>\n            <div class=\"form-group col-sm-12\">\n                <label class=\"form-control-label\" for=\"businessExpectedTurnover\">{{ 'user-details-form.expected-turnover' | translate }}</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"businessExpectedTurnover\"\n                    name=\"businessExpectedTurnover\"\n                    [(ngModel)]=\"business.expectedTurnover\"\n                    #businessExpectedTurnover=\"ngModel\"\n                    [disabled]=\"disabled\"\n                    [required]=\"requireAll\"\n                    emptyToNull\n                />\n                <div *ngIf=\"businessExpectedTurnover.invalid && (submitted || businessExpectedTurnover.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"businessExpectedTurnover?.errors?.required\">\n                        {{ 'common.this-is-required' | translate }}\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"text-muted font-lg\">{{ 'user-details-form.office-address' | translate }}</div>\n        <address-form [(address)]=\"business.address\" [disabled]=\"disabled\" [requireAll]=\"requireAll\"></address-form>\n        <div class=\"text-muted font-lg\">{{ 'user-details-form.business-address' | translate }}</div>\n        <address-form [(address)]=\"business.businessAddress\" [disabled]=\"disabled\" [requireAll]=\"requireAll\"></address-form>\n        <div class=\"form-group\">\n            <label class=\"form-control-label\" for=\"regulatoryBody\">{{ 'user-details-form.regulatory-body' | translate }}</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"regulatoryBody\"\n                name=\"regulatoryBody\"\n                [(ngModel)]=\"business.regulatoryBody\"\n                #regulatoryBody=\"ngModel\"\n                [disabled]=\"disabled\"\n                [required]=\"requireAll\"\n                emptyToNull\n            />\n            <div *ngIf=\"regulatoryBody.invalid && (submitted || regulatoryBody.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"regulatoryBody?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"custom-controls-stacked mb-2\">\n            <label class=\"custom-control custom-checkbox\">\n                <input\n                    id=\"licensed\"\n                    type=\"checkbox\"\n                    class=\"custom-control-input\"\n                    name=\"licensed\"\n                    [(ngModel)]=\"business.licensed\"\n                    [disabled]=\"disabled\"\n                />\n                <span class=\"custom-control-label\"> {{ 'common.licensed' | translate }} </span>\n            </label>\n        </div>\n        <div class=\"form-group\" *ngIf=\"business.licensed\">\n            <label class=\"form-control-label\" for=\"licenseNumber\">{{ 'user-details-form.license-number' | translate }}</label>\n            <input\n                id=\"licenseNumber\"\n                type=\"text\"\n                name=\"licenseNumber\"\n                class=\"form-control\"\n                [(ngModel)]=\"business.licenseNumber\"\n                [required]=\"requireAll\"\n                [disabled]=\"disabled\"\n                #licenseNumber=\"ngModel\"\n            />\n            <div *ngIf=\"licenseNumber.invalid && (submitted || licenseNumber.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"licenseNumber?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"form-control-label\" for=\"businessFatcaYes\"\n                >{{ 'user-details-form.are-you-considered-a-us-entity' | translate }}\n                <fa-icon\n                    class=\"text-primary\"\n                    [icon]=\"faInfoCircle\"\n                    [ngbPopover]=\"fatcaContent\"\n                    [popoverTitle]=\"fatcaTitle\"\n                    triggers=\"mouseenter:mouseleave\"\n                ></fa-icon\n            ></label>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"custom-control custom-radio custom-control-inline\">\n                        <input\n                            type=\"radio\"\n                            [value]=\"true\"\n                            [(ngModel)]=\"business.fatca\"\n                            id=\"businessFatcaYes\"\n                            name=\"businessFatcaYes\"\n                            class=\"custom-control-input\"\n                            [disabled]=\"disabled\"\n                            #businessFatca=\"ngModel\"\n                            [required]=\"requireAll\"\n                        />\n                        <label class=\"custom-control-label\" for=\"businessFatcaYes\">{{ 'common.yes' | translate }}</label>\n                    </div>\n                    <div class=\"custom-control custom-radio custom-control-inline\">\n                        <input\n                            type=\"radio\"\n                            [value]=\"false\"\n                            [(ngModel)]=\"business.fatca\"\n                            id=\"businessFatcaNo\"\n                            name=\"businessFatcaNo\"\n                            class=\"custom-control-input\"\n                            [disabled]=\"disabled\"\n                            [required]=\"requireAll\"\n                        />\n                        <label class=\"custom-control-label\" for=\"businessFatcaNo\">{{ 'common.no' | translate }}</label>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"businessFatca.invalid && (submitted || businessFatca.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"businessFatca?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n    </ng-template>\n</form>\n\n<ng-template #fatcaTitle> FATCA </ng-template>\n<ng-template #fatcaContent>\n    <p>\n        {{ 'common.fatca-stands' | translate }}\n    </p>\n    <p>\n        {{ 'common.fatca-desc' | translate }}\n    </p>\n</ng-template>\n");

/***/ }),

/***/ "Yix9":
/*!*******************************************************!*\
  !*** ./src/app/common/dropzone/dropzone.component.ts ***!
  \*******************************************************/
/*! exports provided: DropzoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropzoneComponent", function() { return DropzoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dropzone_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dropzone.component.html */ "sjdE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");




let DropzoneComponent = class DropzoneComponent {
    constructor() {
        this.files = [];
        this.filesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.showTable = true;
        this.canCreate = true;
        this.canDelete = true;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.faCloudUpload = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCloudUpload"];
        this.faTimes = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"];
        this.allowVideo = false;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (!Array.isArray(this.files)) {
                this.filesChange.emit([]);
            }
        });
    }
    submit() {
        this.submitted = true;
    }
    isValid() {
        return (!!this.files && this.files.length > 0) || (!!this.existingFiles && this.existingFiles.length > 0);
    }
};
DropzoneComponent.propDecorators = {
    files: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    filesChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    existingFiles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    canCreate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    canDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    onDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    requiredMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    allowVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
DropzoneComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'dropzone',
        template: _raw_loader_dropzone_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DropzoneComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: translateHttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateHttpLoaderFactory", function() { return translateHttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _app_Timestamp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/Timestamp */ "HNQM");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_core_core_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app/core/core.module */ "gktA");
/* harmony import */ var _app_error_handler_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app/error-handler.service */ "E108");
/* harmony import */ var _app_status_message_status_message_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app/status-message/status-message.module */ "0m0A");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/common.module */ "a6Df");
/* harmony import */ var _organization_organization_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./organization/organization.auth-guard */ "duKP");

















function translateHttpLoaderFactory(httpBackend) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](httpBackend), '/assets/i18n/', '.json?cb=' + _app_Timestamp__WEBPACK_IMPORTED_MODULE_9__["Timestamp"].stamp);
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot({
                mode: 'md',
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _common_common_module__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
            _app_status_message_status_message_module__WEBPACK_IMPORTED_MODULE_14__["StatusMessageModule"],
            _app_core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: translateHttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"]],
                },
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: true,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000',
            }),
        ],
        providers: [
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
                useClass: _app_error_handler_service__WEBPACK_IMPORTED_MODULE_13__["AppErrorHandler"],
            },
            _organization_organization_auth_guard__WEBPACK_IMPORTED_MODULE_16__["OrganizationAuthGuard"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ZMlM":
/*!*************************************************************************!*\
  !*** ./src/app/common/permission-select/permission-select.component.ts ***!
  \*************************************************************************/
/*! exports provided: PermissionSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionSelectComponent", function() { return PermissionSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_permission_select_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./permission-select.component.html */ "GWtm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.mixin */ "s/H0");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/session.service */ "6g7h");





let PermissionSelectComponent = class PermissionSelectComponent {
    constructor(session) {
        this.session = session;
        this.permissions = [];
        this.permissionsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.paymentPermissions = ['payment-swift', 'payment-local', 'payment-crypto'];
        this.featurePermissions = [
            'cards',
            'conversions',
            'invoices',
            'trades',
            'spot-trades',
            'marketplaces',
            'redeem',
        ];
    }
    togglePaymentMethod(method, checked) {
        if (checked) {
            this.permissions.push(method);
        }
        else {
            this.permissions = this.permissions.filter(paymentMethod => paymentMethod !== method);
        }
        this.permissionsChange.emit(this.permissions);
    }
    toggleFeature(feature, checked) {
        if (checked) {
            this.permissions.push(feature);
        }
        else {
            this.permissions = this.permissions.filter(paymentMethod => paymentMethod !== feature);
        }
        this.permissionsChange.emit(this.permissions);
    }
    getPermissionLabel(permission) {
        return _common_mixin__WEBPACK_IMPORTED_MODULE_3__["permissionMap"][permission];
    }
};
PermissionSelectComponent.ctorParameters = () => [
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
PermissionSelectComponent.propDecorators = {
    permissions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    permissionsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
PermissionSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'permission-select',
        template: _raw_loader_permission_select_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], PermissionSelectComponent);



/***/ }),

/***/ "a6Df":
/*!*****************************************!*\
  !*** ./src/app/common/common.module.ts ***!
  \*****************************************/
/*! exports provided: CommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonModule", function() { return CommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _aerapass_ngx_currency_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aerapass/ngx-currency-mask */ "QkTk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ng_select_ng_option_highlight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-option-highlight */ "ximh");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var angular_file__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-file */ "QX5u");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-pick-datetime */ "z17N");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _access_error_access_errors_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./access-error/access-errors.component */ "5y1p");
/* harmony import */ var _account_number_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./account-number.pipe */ "su5s");
/* harmony import */ var _account_number_acount_number_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./account-number/acount-number.component */ "xpOY");
/* harmony import */ var _address_form_address_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./address-form/address-form.component */ "gutr");
/* harmony import */ var _alert_outlet_alert_outlet_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./alert-outlet/alert-outlet.component */ "6nEW");
/* harmony import */ var _amount_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./amount.pipe */ "3VU+");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth.interceptor */ "x+Op");
/* harmony import */ var _beneficiary_form_beneficiary_details_form_beneficiary_details_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./beneficiary-form/beneficiary-details-form/beneficiary-details-form.component */ "lCZN");
/* harmony import */ var _beneficiary_form_beneficiary_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./beneficiary-form/beneficiary-form.component */ "2qAm");
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./capitalize.pipe */ "2fhi");
/* harmony import */ var _card_fee_schedule_card_fee_schedule_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./card-fee-schedule/card-fee-schedule.component */ "welj");
/* harmony import */ var _circle_spinner_circle_spinner_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./circle-spinner/circle-spinner.component */ "RmeP");
/* harmony import */ var _confirm_mail_reminder_confirm_mail_reminder_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./confirm-mail-reminder/confirm-mail-reminder.component */ "ucbR");
/* harmony import */ var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./confirmation-modal/confirmation-modal.component */ "7DHn");
/* harmony import */ var _contact_book_contact_book_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./contact-book/contact-book.component */ "AqLL");
/* harmony import */ var _copy_btn_copy_btn_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./copy-btn/copy-btn.component */ "+/Qi");
/* harmony import */ var _copy_icon_copy_icon_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./copy-icon/copy-icon.component */ "69Ec");
/* harmony import */ var _copy_wrap_copy_wrap_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./copy-wrap/copy-wrap.component */ "y9bJ");
/* harmony import */ var _currency_select_tab_currency_select_tab_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./currency-select-tab/currency-select-tab.component */ "lQWK");
/* harmony import */ var _currency_select_currency_select_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./currency-select/currency-select.component */ "v0SE");
/* harmony import */ var _deposit_instruction_table_deposit_instruction_table_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./deposit-instruction-table/deposit-instruction-table.component */ "sVzT");
/* harmony import */ var _deposit_instruction_deposit_instruction_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./deposit-instruction/deposit-instruction.component */ "TJyK");
/* harmony import */ var _dropzone_dropzone_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./dropzone/dropzone.component */ "Yix9");
/* harmony import */ var _emptytonull_directive__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./emptytonull.directive */ "g6AM");
/* harmony import */ var _errorhandler_interceptor__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./errorhandler.interceptor */ "C7lA");
/* harmony import */ var _fee_preview_fee_preview_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./fee-preview/fee-preview.component */ "B/uM");
/* harmony import */ var _focus_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./focus.directive */ "XkEx");
/* harmony import */ var _format_date_pipe__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./format-date.pipe */ "F8TI");
/* harmony import */ var _format_distance_to_now_pipe__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./format-distance-to-now.pipe */ "OGeY");
/* harmony import */ var _is_before_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./is-before.pipe */ "H6SD");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./list.component */ "aJRI");
/* harmony import */ var _masked_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./masked.pipe */ "4dWg");
/* harmony import */ var _match_password_directive__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./match-password.directive */ "2xS+");
/* harmony import */ var _no_access_modal_no_access_modal_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./no-access-modal/no-access-modal.component */ "gZSw");
/* harmony import */ var _numeric_directive__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./numeric.directive */ "Dj0T");
/* harmony import */ var _password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./password-strength-bar/password-strength-bar.component */ "4ScN");
/* harmony import */ var _password_strength_directive__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./password-strength.directive */ "RNIM");
/* harmony import */ var _permission_select_permission_select_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./permission-select/permission-select.component */ "ZMlM");
/* harmony import */ var _pluralize_pipe__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pluralize.pipe */ "fw4u");
/* harmony import */ var _postal_address_postal_address_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./postal-address/postal-address.component */ "RQDx");
/* harmony import */ var _profile_documents_file_item_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./profile-documents/file-item.component */ "hwAi");
/* harmony import */ var _profile_documents_profile_documents_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./profile-documents/profile-documents.component */ "rnio");
/* harmony import */ var _profile_documents_user_file_form_user_file_form_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./profile-documents/user-file-form/user-file-form.component */ "3CWR");
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./safe-html.pipe */ "efVJ");
/* harmony import */ var _safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./safe-resource-url.pipe */ "XWKF");
/* harmony import */ var _safe_url_pipe__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./safe-url.pipe */ "wEC/");
/* harmony import */ var _security_check_confirm_password_modal__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./security-check/confirm-password.modal */ "iO5V");
/* harmony import */ var _sentence_case_pipe__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./sentence-case.pipe */ "ikxJ");
/* harmony import */ var _start_case_pipe__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./start-case.pipe */ "71pC");
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./truncate.pipe */ "xX+i");
/* harmony import */ var _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./user-avatar/user-avatar.component */ "WIZs");
/* harmony import */ var _user_details_form_user_details_form_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./user-details-form/user-details-form.component */ "4pyo");
/* harmony import */ var _user_info_table_user_info_table_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./user-info-table/user-info-table.component */ "9UWv");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./user/user.component */ "kSjO");
/* harmony import */ var _uuid_uuid_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./uuid/uuid.component */ "c1tC");
/* harmony import */ var _validate_directive__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./validate.directive */ "ES5P");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./validators */ "gvrR");
/* harmony import */ var _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./video-player/video-player.component */ "q0Sc");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./welcome/welcome.component */ "/olc");











































































const DECLARATIONS = [
    _access_error_access_errors_component__WEBPACK_IMPORTED_MODULE_16__["AccessErrorsComponent"],
    _account_number_acount_number_component__WEBPACK_IMPORTED_MODULE_18__["AccountNumberComponent"],
    _account_number_pipe__WEBPACK_IMPORTED_MODULE_17__["AccountNumberPipe"],
    _address_form_address_form_component__WEBPACK_IMPORTED_MODULE_19__["AddressFormComponent"],
    _alert_outlet_alert_outlet_component__WEBPACK_IMPORTED_MODULE_20__["AlertOutletComponent"],
    _amount_pipe__WEBPACK_IMPORTED_MODULE_21__["AmountPipe"],
    _beneficiary_form_beneficiary_details_form_beneficiary_details_form_component__WEBPACK_IMPORTED_MODULE_23__["BeneficiaryDetailsFormComponent"],
    _beneficiary_form_beneficiary_form_component__WEBPACK_IMPORTED_MODULE_24__["BeneficiaryFormComponent"],
    _validators__WEBPACK_IMPORTED_MODULE_72__["BirthdayValidatorDirective"],
    _validators__WEBPACK_IMPORTED_MODULE_72__["RecipientValidatorDirective"],
    _circle_spinner_circle_spinner_component__WEBPACK_IMPORTED_MODULE_27__["CircleSpinnerComponent"],
    _validators__WEBPACK_IMPORTED_MODULE_72__["ColorValidatorDirective"],
    _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_29__["ConfirmationModalComponent"],
    _confirm_mail_reminder_confirm_mail_reminder_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmMailReminderComponent"],
    _security_check_confirm_password_modal__WEBPACK_IMPORTED_MODULE_62__["ConfirmPasswordModalComponent"],
    _contact_book_contact_book_component__WEBPACK_IMPORTED_MODULE_30__["ContactBookComponent"],
    _copy_btn_copy_btn_component__WEBPACK_IMPORTED_MODULE_31__["CopyButtonComponent"],
    _copy_icon_copy_icon_component__WEBPACK_IMPORTED_MODULE_32__["CopyIconComponent"],
    _copy_wrap_copy_wrap_component__WEBPACK_IMPORTED_MODULE_33__["CopyWrapComponent"],
    _currency_select_currency_select_component__WEBPACK_IMPORTED_MODULE_35__["CurrencySelectComponent"],
    _currency_select_tab_currency_select_tab_component__WEBPACK_IMPORTED_MODULE_34__["CurrencySelectTabComponent"],
    _validators__WEBPACK_IMPORTED_MODULE_72__["CustomValidatorDirective"],
    _validators__WEBPACK_IMPORTED_MODULE_72__["DecimalValidatorDirective"],
    _dropzone_dropzone_component__WEBPACK_IMPORTED_MODULE_38__["DropzoneComponent"],
    _emptytonull_directive__WEBPACK_IMPORTED_MODULE_39__["EmptyToNullDirective"],
    _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_66__["UserAvatarComponent"],
    _user_user_component__WEBPACK_IMPORTED_MODULE_69__["UserComponent"],
    _fee_preview_fee_preview_component__WEBPACK_IMPORTED_MODULE_41__["FeePreviewComponent"],
    _profile_documents_file_item_component__WEBPACK_IMPORTED_MODULE_56__["FileItemComponent"],
    _focus_directive__WEBPACK_IMPORTED_MODULE_42__["FocusDirective"],
    _format_date_pipe__WEBPACK_IMPORTED_MODULE_43__["FormatDatePipe"],
    _format_distance_to_now_pipe__WEBPACK_IMPORTED_MODULE_44__["FormatDistanceToNowPipe"],
    _validators__WEBPACK_IMPORTED_MODULE_72__["IntegerValidatorDirective"],
    _list_component__WEBPACK_IMPORTED_MODULE_46__["ListComponent"],
    _match_password_directive__WEBPACK_IMPORTED_MODULE_48__["MatchPasswordDirective"],
    _validators__WEBPACK_IMPORTED_MODULE_72__["MaxValidatorDirective"],
    _validators__WEBPACK_IMPORTED_MODULE_72__["MinValidatorDirective"],
    _validators__WEBPACK_IMPORTED_MODULE_72__["NameValidatorDirective"],
    _validators__WEBPACK_IMPORTED_MODULE_72__["IpAddressValidatorDirective"],
    _no_access_modal_no_access_modal_component__WEBPACK_IMPORTED_MODULE_49__["NoAccessModalComponent"],
    _validators__WEBPACK_IMPORTED_MODULE_72__["NumberValidatorDirective"],
    _numeric_directive__WEBPACK_IMPORTED_MODULE_50__["NumericDirective"],
    _password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_51__["PasswordStrengthBarComponent"],
    _password_strength_directive__WEBPACK_IMPORTED_MODULE_52__["PasswordStrengthDirective"],
    _permission_select_permission_select_component__WEBPACK_IMPORTED_MODULE_53__["PermissionSelectComponent"],
    _postal_address_postal_address_component__WEBPACK_IMPORTED_MODULE_55__["PostalAddressComponent"],
    _profile_documents_profile_documents_component__WEBPACK_IMPORTED_MODULE_57__["ProfileDocumentsComponent"],
    _safe_html_pipe__WEBPACK_IMPORTED_MODULE_59__["SafeHtmlPipe"],
    _safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_60__["SafeResourceUrlPipe"],
    _safe_url_pipe__WEBPACK_IMPORTED_MODULE_61__["SafeUrlPipe"],
    _start_case_pipe__WEBPACK_IMPORTED_MODULE_64__["StartCasePipe"],
    _capitalize_pipe__WEBPACK_IMPORTED_MODULE_25__["CapitalizePipe"],
    _truncate_pipe__WEBPACK_IMPORTED_MODULE_65__["TruncatePipe"],
    _profile_documents_user_file_form_user_file_form_component__WEBPACK_IMPORTED_MODULE_58__["UserFileFormComponent"],
    _user_details_form_user_details_form_component__WEBPACK_IMPORTED_MODULE_67__["UserDetailsFormComponent"],
    _user_info_table_user_info_table_component__WEBPACK_IMPORTED_MODULE_68__["UserInfoTableComponent"],
    _uuid_uuid_component__WEBPACK_IMPORTED_MODULE_70__["UuidComponent"],
    _validate_directive__WEBPACK_IMPORTED_MODULE_71__["ValidateDirective"],
    _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_73__["VideoPlayerComponent"],
    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_74__["WelcomeComponent"],
    _deposit_instruction_deposit_instruction_component__WEBPACK_IMPORTED_MODULE_37__["DepositInstructionComponent"],
    _deposit_instruction_table_deposit_instruction_table_component__WEBPACK_IMPORTED_MODULE_36__["DepositInstructionTableComponent"],
    _card_fee_schedule_card_fee_schedule_component__WEBPACK_IMPORTED_MODULE_26__["CardFeeScheduleComponent"],
    _masked_pipe__WEBPACK_IMPORTED_MODULE_47__["MaskedPipe"],
    _pluralize_pipe__WEBPACK_IMPORTED_MODULE_54__["PluralizePipe"],
    _is_before_pipe__WEBPACK_IMPORTED_MODULE_45__["IsBeforePipe"],
    _sentence_case_pipe__WEBPACK_IMPORTED_MODULE_63__["SentenceCasePipe"],
];
const MODULES = [
    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
    _aerapass_ngx_currency_mask__WEBPACK_IMPORTED_MODULE_1__["CurrencyMaskModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
    _ng_select_ng_option_highlight__WEBPACK_IMPORTED_MODULE_9__["NgOptionHighlightModule"],
    angular_file__WEBPACK_IMPORTED_MODULE_12__["ngfModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTooltipModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPaginationModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbProgressbarModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTypeaheadModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPopoverModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAccordionModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCollapseModule"],
    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
    ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__["OwlDateTimeModule"],
    ng_pick_datetime__WEBPACK_IMPORTED_MODULE_13__["OwlNativeDateTimeModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerModule"],
    ngx_highlightjs__WEBPACK_IMPORTED_MODULE_14__["HighlightModule"],
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"],
];
let CommonModule = class CommonModule {
};
CommonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [...DECLARATIONS],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _errorhandler_interceptor__WEBPACK_IMPORTED_MODULE_40__["ErrorHandlerInterceptor"],
                multi: true,
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_22__["TokenRequestInterceptor"],
                multi: true,
            },
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"],
            },
            {
                provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_14__["HIGHLIGHT_OPTIONS"],
                useValue: {
                    fullLibraryLoader: () => __webpack_require__.e(/*! import() | highlight-js */ "highlight-js").then(__webpack_require__.t.bind(null, /*! highlight.js */ "FIf5", 7)),
                },
            },
        ],
        imports: [ngx_mask__WEBPACK_IMPORTED_MODULE_15__["NgxMaskModule"].forRoot(), ...MODULES],
        exports: [...DECLARATIONS, ...MODULES, ngx_mask__WEBPACK_IMPORTED_MODULE_15__["NgxMaskModule"]],
    })
], CommonModule);



/***/ }),

/***/ "aJRI":
/*!******************************************!*\
  !*** ./src/app/common/list.component.ts ***!
  \******************************************/
/*! exports provided: Scope, ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "uB96");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/format */ "sWYD");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/confirmation.service */ "fTmd");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/session.service */ "6g7h");













var Scope;
(function (Scope) {
    Scope["DEFAULT"] = "default";
})(Scope || (Scope = {}));
/**
 * Base class for list controllers.
 */
let ListComponent = class ListComponent {
    constructor(http, ngbModal, changeDetector, route, router, session, confirmation) {
        this.http = http;
        this.ngbModal = ngbModal;
        this.changeDetector = changeDetector;
        this.route = route;
        this.router = router;
        this.session = session;
        this.confirmation = confirmation;
        this.scope = Scope.DEFAULT;
        this.search = '';
        this.limitOpts = [5, 8, 10, 12, 15, 20, 50];
        this.offset = 0;
        this.count = 0;
        this.queryParams = {};
        this.searchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.paginationEvent = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.updateEvent = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.isFetching = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](false);
        this.isFilterOptionsCollapsed = true;
        this.doCollapseFilterOptionsIfParamsSet = true;
        this.formatDate = date_fns_format__WEBPACK_IMPORTED_MODULE_7__["default"];
        this.faPlus = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlus"];
        this.faSearch = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"];
        this.faChevronUp = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChevronUp"];
        this.faChevronDown = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChevronDown"];
        this.faDownload = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faDownload"];
        this.faCaretDown = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCaretDown"];
        this.defaultLimit = this.limitOpts[2];
        this.defaultOrder = [['createdAt', 'DESC']];
        this.defaultQuery = {};
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
    }
    ngOnInit() {
        this.limit = this.defaultLimit;
        this.order = this.defaultOrder;
        if (this.apiQuery) {
            for (const property of this.apiQuery) {
                this.queryParams[property] = {};
                if (this.defaultQuery && this.defaultQuery[property]) {
                    // eslint-disable-next-line guard-for-in
                    for (const key in this.defaultQuery[property]) {
                        this.queryParams[property][key] = this.defaultQuery[property][key];
                    }
                }
            }
        }
        this.itemsStream = this.mergeFindEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(() => this.find()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(err => {
            this.isFetching.next(false);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["throwError"])(err);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(response => {
            this.count =
                response.headers && response.headers.has('x-total-count')
                    ? ~~response.headers.get('x-total-count')
                    : 0;
            this.page = this.offset / this.limit + 1;
            const routeParams = {
                page: this.page !== 1 ? this.page + '' : undefined,
                perPage: this.limit !== this.defaultLimit ? this.limit + '' : undefined,
                order: !Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEqual"])(this.order, this.defaultOrder) ? this.order.map(item => item.join(':')) : undefined,
                search: this.search || undefined,
                scope: this.scope !== Scope.DEFAULT ? this.scope : undefined,
            };
            for (const param of Object.keys(this.queryParams)) {
                if (Object.keys(this.queryParams[param]).length > 0) {
                    routeParams[param] = !Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEqual"])(this.queryParams[param], this.defaultQuery[param])
                        ? this.encodeQueryParam(this.queryParams[param])
                        : undefined;
                }
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.changeState(routeParams);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(response => {
            this.fill = new Array(this.limit - response.body.length);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(response => response.body.map(item => this.mapItem(item))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(() => {
            this.changeDetector.detectChanges();
            this.isFetching.next(false);
        }));
        this.route.queryParamMap.subscribe(params => {
            if (params.has('perPage')) {
                this.limit = ~~params.get('perPage');
            }
            if (params.has('page')) {
                this.offset = (~~params.get('page') - 1) * this.limit;
            }
            if (!this.page) {
                this.page = 1;
            }
            if (params.has('search')) {
                this.search = decodeURIComponent(params.get('search'));
            }
            if (params.has('scope')) {
                this.scope = decodeURIComponent(params.get('scope'));
            }
            if (params.has('order')) {
                this.order = params.getAll('order').map(item => item.split(':'));
            }
            for (const key of Object.keys(this.queryParams)) {
                if (params.has(key)) {
                    this.queryParams[key] = this.decodeQueryParam(params.getAll(key));
                    // Expand filter options if custom filter is set
                    if (this.doCollapseFilterOptionsIfParamsSet) {
                        this.isFilterOptionsCollapsed = false;
                    }
                }
            }
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    find() {
        this.isFetching.next(true);
        return this.http.get(this.apiUrl, {
            observe: 'response',
            params: this.generateListParams(),
        });
    }
    generateListParams(override = {}) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('limit', (override.limit || this.limit) + '').set('offset', this.offset + '');
        if (this.order) {
            for (const item of this.order) {
                params = params.append('order', item.join(':'));
            }
        }
        if (this.search) {
            // the + sign is already encoded for space, should actually be a plus though
            params = params.set('search', this.search.replace('+', '%2B'));
        }
        if (this.scope && this.scope !== Scope.DEFAULT) {
            params = params.set('scope', this.scope);
        }
        for (const param of Object.keys(this.queryParams)) {
            const encoded = this.encodeQueryParam(this.queryParams[param]);
            for (const value of encoded) {
                params = params.append(param, value);
            }
        }
        return params;
    }
    /** Modal: Read, update and delete */
    showForm(_, item, options = {}) {
        if (!this.formComponent) {
            throw new Error('No form-template given in controller.');
        }
        const modal = this.ngbModal.open(this.formComponent, Object.assign({ backdrop: 'static', windowClass: 'modal-primary' }, options));
        modal.componentInstance.item = this.mapItem(item);
        if (modal.componentInstance.onSave) {
            modal.componentInstance.onSave.subscribe(() => {
                modal.close();
                this.updateEvent.next();
            });
        }
        if (modal.componentInstance.onDelete) {
            modal.componentInstance.onDelete.subscribe(() => {
                modal.close();
                this.updateEvent.next();
            });
        }
    }
    requestExport(ignoreCount) {
        if (this.count > 10000 && !ignoreCount) {
            this.subscriptions.add(this.confirmation
                .show({
                type: 'warning',
                text: 'Export exceeds the maximum of 10,000 records. You can use filters to limit your export query. Do you still want to continue?',
                confirmText: 'Yes',
                confirmClass: 'warning',
                cancelText: 'No',
                cancelClass: 'primary',
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(result => result === _services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmationResult"].CONFIRMED))
                .subscribe(() => {
                this.generateList();
            }));
        }
        else {
            this.generateList();
        }
    }
    generateList() {
        this.subscriptions.add(this.http
            .get(this.apiUrl, {
            params: this.generateListParams({ limit: 10000 }).delete('offset'),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            }),
            observe: 'response',
            responseType: 'blob',
        })
            .subscribe(response => {
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(response.body);
            }
            else {
                const data = window.URL.createObjectURL(response.body);
                const link = document.createElement('a');
                link.href = data;
                const contentDisposition = response.headers.get('Content-Disposition');
                link.download = contentDisposition
                    ? contentDisposition.substring(contentDisposition.indexOf('filename=') + 9, contentDisposition.length - 1)
                    : 'export.xlsx';
                link.click();
                setTimeout(() => {
                    // For Firefox it is necessary to delay revoking the ObjectURL
                    window.URL.revokeObjectURL(data);
                }, 100);
            }
        }));
    }
    /** Select specified page */
    select(page) {
        if (typeof page !== 'undefined') {
            this.page = page;
        }
        this.offset = (this.page - 1) * this.limit;
        this.paginationEvent.next();
    }
    /**
     * Change the sorting order
     * @param order Sequelize Order syntax
     * @param toggle Whether to toggle the order instead of replacing
     */
    sort(order, toggle = false) {
        // TODO: Allow order functions to be additive
        if (typeof this.order === 'string') {
            return;
        }
        // Find out if order for that attribute is active already
        const index = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["findIndex"])(this.order, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["matches"])(order));
        // if is already selected, toggle
        if (index === -1 || Object(lodash__WEBPACK_IMPORTED_MODULE_8__["last"])(this.order[index]) === 'DESC') {
            order = [...order, 'ASC'];
        }
        else {
            order = [...order, 'DESC'];
        }
        if (!toggle) {
            // Replace whole order
            this.order = order.length > 0 ? [order] : this.defaultOrder;
        }
        else {
            if (index !== -1) {
                // If sorting for this attribute is active
                if (order.length === 0) {
                    // If the same icon is clicked three times, remove it
                    this.order.splice(index, 1);
                }
                else {
                    // If it was clicked twice, swap the direction
                    this.order[index] = order;
                }
            }
            else {
                // If not active, add new order criteria
                this.order.push(order);
            }
        }
        this.select(1);
    }
    isActiveSorting(order) {
        return !!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["find"])(this.order, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["matches"])(order));
    }
    getSortingDirection(order) {
        const orderElement = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["find"])(this.order, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["matches"])(order));
        return Object(lodash__WEBPACK_IMPORTED_MODULE_8__["last"])(orderElement);
    }
    isActiveQuery(query) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEqual"])(this.queryParams, query);
    }
    getDefaultQuery() {
        return this.defaultQuery;
    }
    mergeFindEvents() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(undefined), this.searchEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(600)), this.paginationEvent, this.updateEvent);
    }
    mapItem(item) {
        return this.model ? new this.model(item) : item;
    }
    changeState(queryParams) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const scroll = window.scrollY;
            yield this.router.navigate([], {
                relativeTo: this.route,
                queryParams,
                queryParamsHandling: 'merge',
            });
            window.scrollTo(0, scroll);
        });
    }
    decodeQueryParam(query) {
        const decoded = {};
        for (const q of query) {
            const [op, value] = q.split(':');
            decoded[op] = value.split(',');
        }
        return decoded;
    }
    encodeQueryParam(query) {
        const encoded = [];
        for (const op of Object.keys(query)) {
            const value = query[op];
            if (!value || (Array.isArray(value) && value.length === 0)) {
                continue;
            }
            encoded.push(`${op}:${Array.isArray(value) ? value.join(',') : value}`);
        }
        return encoded;
    }
};
ListComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_12__["SessionService"] },
    { type: _services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmationService"] }
];
ListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'undef-list',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        template: '',
    })
], ListComponent);



/***/ }),

/***/ "aNHP":
/*!******************************************************************!*\
  !*** ./src/app/common/validators/integer-validator.directive.ts ***!
  \******************************************************************/
/*! exports provided: IntegerValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegerValidatorDirective", function() { return IntegerValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var IntegerValidatorDirective_1;



let IntegerValidatorDirective = IntegerValidatorDirective_1 = class IntegerValidatorDirective {
    validate(control) {
        const required = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control);
        if (required !== null) {
            return null;
        }
        if (!Number.isInteger(control.value)) {
            return { invalidInteger: true };
        }
        return null;
    }
};
IntegerValidatorDirective = IntegerValidatorDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[integerValidator]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: IntegerValidatorDirective_1, multi: true }],
    })
], IntegerValidatorDirective);



/***/ }),

/***/ "c1tC":
/*!***********************************************!*\
  !*** ./src/app/common/uuid/uuid.component.ts ***!
  \***********************************************/
/*! exports provided: UuidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UuidComponent", function() { return UuidComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_uuid_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./uuid.component.html */ "sOC6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let UuidComponent = class UuidComponent {
    constructor() {
        this.ngClass = 'text-muted';
    }
};
UuidComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    ngClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
UuidComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'uuid',
        template: _raw_loader_uuid_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
    })
], UuidComponent);



/***/ }),

/***/ "c5qG":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/card-fee-schedule/card-fee-schedule.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-striped table-borderless mb-0\">\n    <tbody>\n        <tr>\n            <th scope=\"row\">{{ 'common.topup-fee' | translate }}</th>\n            <td class=\"text-right\">\n                {{ determineFees('topupFee') }}\n            </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">{{ 'common.atm-fee' | translate }}</th>\n            <td class=\"text-right\">\n                {{\n                    cardFees.atmFee\n                        ? cardFees.atmFee !== '0'\n                            ? (cardFees.atmFee | amount: 2) + ' USD'\n                            : ('common.free' | translate | uppercase)\n                        : ('common.unknown' | translate)\n                }}\n            </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">{{ 'common.atm-decline-fee' | translate }}</th>\n            <td class=\"text-right\">\n                {{\n                    cardFees.atmDeclineFee\n                        ? cardFees.atmDeclineFee !== '0'\n                            ? (cardFees.atmDeclineFee | amount: 2) + ' USD'\n                            : ('common.free' | translate | uppercase)\n                        : ('common.unknown' | translate)\n                }}\n            </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">FX</th>\n            <td class=\"text-right\">\n                {{\n                    cardFees.fx\n                        ? cardFees.fx !== '0'\n                            ? (cardFees.fx | amount: 2) + ' %'\n                            : ('common.free' | translate | uppercase)\n                        : ('common.unknown' | translate)\n                }}\n            </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">{{ 'common.decline-transaction' | translate }}</th>\n            <td class=\"text-right\">\n                {{\n                    cardFees.declineTransaction\n                        ? (cardFees.declineTransaction | amount: 2) !== '0'\n                            ? cardFees.declineTransaction + ' USD'\n                            : ('common.free' | translate | uppercase)\n                        : ('common.unknown' | translate)\n                }}\n            </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">{{ 'common.replacement-fee' | translate }}</th>\n            <td class=\"text-right\">\n                {{\n                    cardFees.replacementFee\n                        ? cardFees.replacementFee !== '0'\n                            ? (cardFees.replacementFee | amount: 2) + ' USD'\n                            : ('common.free' | translate | uppercase)\n                        : ('common.unknown' | translate)\n                }}\n            </td>\n        </tr>\n        <tr *ngIf=\"cardFees.ecomFee && cardFees.ecomFee !== '0'\">\n            <th scope=\"row\">{{ 'common.ecommerce-fee' | translate }}</th>\n            <td class=\"text-right\">\n                {{ (cardFees.ecomFee | amount: 2) + ' USD' }}\n            </td>\n        </tr>\n        <tr *ngIf=\"cardFees.posFee && cardFees.posFee !== '0'\">\n            <th scope=\"row\">{{ 'common.pos-fee' | translate }}</th>\n            <td class=\"text-right\">\n                {{ (cardFees.posFee | amount: 2) + ' USD' }}\n            </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">{{ 'common.unload-fee' | translate }}</th>\n            <td class=\"text-right\">\n                {{ determineFees('unloadFundsFee') }}\n            </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">{{ 'common.max-balance' | translate }}</th>\n            <td class=\"text-right\">\n                {{ cardFees.annualLoadingLimit ? (cardFees.annualLoadingLimit | amount: 2) + ' USD' : ('common.unlimited' | translate) }}\n            </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">{{ 'common.monthly-spending-limit' | translate }}</th>\n            <td class=\"text-right\">\n                {{ (cardFees.monthlySpendingLimit | amount: 2) + ' USD' }}\n            </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">{{ 'common.per-transaction-spending-limit' | translate }}</th>\n            <td class=\"text-right\">\n                {{ (cardFees.dailyPosEcomLimit | amount: 2) + ' USD' }}\n            </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">{{ 'common.daily-atm-limit' | translate }}</th>\n            <td class=\"text-right\">\n                {{ (cardFees.dailyAtmLimit | amount: 2) + ' USD' }}\n            </td>\n        </tr>\n    </tbody>\n</table>\n");

/***/ }),

/***/ "dK97":
/*!********************************************************************!*\
  !*** ./src/app/common/validators/recipient-validator.directive.ts ***!
  \********************************************************************/
/*! exports provided: RecipientValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipientValidatorDirective", function() { return RecipientValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.mixin */ "s/H0");
var RecipientValidatorDirective_1;




let RecipientValidatorDirective = RecipientValidatorDirective_1 = class RecipientValidatorDirective {
    validate(control) {
        if (!Object(_common_mixin__WEBPACK_IMPORTED_MODULE_3__["isAccountNumber"])(control.value || '', { allowSpaces: true }) && !Object(_common_mixin__WEBPACK_IMPORTED_MODULE_3__["isEmail"])(control.value || '')) {
            return { invalidRecipient: true };
        }
        return null;
    }
};
RecipientValidatorDirective = RecipientValidatorDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[recipientValidator]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: RecipientValidatorDirective_1, multi: true }],
    })
], RecipientValidatorDirective);



/***/ }),

/***/ "duKP":
/*!*********************************************************!*\
  !*** ./src/app/organization/organization.auth-guard.ts ***!
  \*********************************************************/
/*! exports provided: OrganizationAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationAuthGuard", function() { return OrganizationAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/session.service */ "6g7h");



let OrganizationAuthGuard = class OrganizationAuthGuard {
    constructor(session) {
        this.session = session;
    }
    canLoad() {
        return this.session.isAuthenticated() && this.session.user.type === 'business';
    }
};
OrganizationAuthGuard.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] }
];
OrganizationAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], OrganizationAuthGuard);



/***/ }),

/***/ "efVJ":
/*!******************************************!*\
  !*** ./src/app/common/safe-html.pipe.ts ***!
  \******************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



let SafeHtmlPipe = class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
};
SafeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafeHtmlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' })
], SafeHtmlPipe);



/***/ }),

/***/ "fTmd":
/*!*********************************************************!*\
  !*** ./src/app/common/services/confirmation.service.ts ***!
  \*********************************************************/
/*! exports provided: ConfirmationResult, ConfirmationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationResult", function() { return ConfirmationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationService", function() { return ConfirmationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirmation-modal/confirmation-modal.component */ "7DHn");







var ConfirmationResult;
(function (ConfirmationResult) {
    ConfirmationResult["CONFIRMED"] = "confirmed";
    ConfirmationResult["CANCELLED"] = "cancelled";
    ConfirmationResult["DISMISSED"] = "dismissed";
})(ConfirmationResult || (ConfirmationResult = {}));
let ConfirmationService = class ConfirmationService {
    constructor(modal) {
        this.modal = modal;
    }
    show(options) {
        const modal = this.modal.open(_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationModalComponent"], {
            windowClass: options.type ? 'modal-' + options.type : '',
            size: 'sm',
        });
        const modalInstance = modal.componentInstance;
        Object(lodash__WEBPACK_IMPORTED_MODULE_3__["assignInWith"])(modalInstance, options, (initValue, optValue) => ![undefined, null].includes(optValue) ? optValue : initValue);
        const mapResult = (result) => options.input ? [result, modalInstance.inputValue] : result;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(modal.result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(confirmed => mapResult(confirmed ? ConfirmationResult.CONFIRMED : ConfirmationResult.CANCELLED)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(mapResult(ConfirmationResult.DISMISSED))));
    }
};
ConfirmationService.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
ConfirmationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ConfirmationService);



/***/ }),

/***/ "fZS9":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/access-error/access-errors.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"e2e-access-errors callout callout-danger\" *ngIf=\"whiteListedErrors.length > 0\">\n    <p>\n        Please complete the verification process to gain access to this feature.\n        <a href (click)=\"$event.preventDefault(); goToVerification()\">Verify now</a>\n    </p>\n</div>\n");

/***/ }),

/***/ "fw4u":
/*!******************************************!*\
  !*** ./src/app/common/pluralize.pipe.ts ***!
  \******************************************/
/*! exports provided: PluralizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluralizePipe", function() { return PluralizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);



let PluralizePipe = class PluralizePipe {
    transform(text, value, otherValue = 1) {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(value || 0).isGreaterThan(otherValue) ? text + (text.endsWith('s') ? 'es' : 's') : text;
    }
};
PluralizePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'pluralize' })
], PluralizePipe);



/***/ }),

/***/ "g6AM":
/*!*************************************************!*\
  !*** ./src/app/common/emptytonull.directive.ts ***!
  \*************************************************/
/*! exports provided: EmptyToNullDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyToNullDirective", function() { return EmptyToNullDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var EmptyToNullDirective_1;



let EmptyToNullDirective = EmptyToNullDirective_1 = class EmptyToNullDirective {
    constructor(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this._onChange = (_) => {
            // to be initialized
        };
    }
    ngOnChanges() {
        // nothing to do
    }
    writeValue(value) {
        const normalizedValue = value === null || value === undefined ? '' : value;
        this.renderer.setProperty(this.element.nativeElement, 'value', normalizedValue);
    }
    onInput(value) {
        if (this.lastValue !== value) {
            this.lastValue = value;
            this.renderer.setProperty(this.element.nativeElement, 'value', value);
            this._onChange(value === '' ? null : value);
        }
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched() {
        // nothing to do here
    }
    setDisabledState(isDisabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    }
};
EmptyToNullDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
EmptyToNullDirective.propDecorators = {
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['input', ['$event.target.value'],] }]
};
EmptyToNullDirective = EmptyToNullDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[emptyToNull]',
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: EmptyToNullDirective_1,
                multi: true,
            },
        ],
    })
], EmptyToNullDirective);



/***/ }),

/***/ "gZSw":
/*!*********************************************************************!*\
  !*** ./src/app/common/no-access-modal/no-access-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: NoAccessModalComponent, openNoAccessModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAccessModalComponent", function() { return NoAccessModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openNoAccessModal", function() { return openNoAccessModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_no_access_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./no-access-modal.component.html */ "8LRd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_core_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/core/user.service */ "AxWo");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/session.service */ "6g7h");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/toastr.service */ "N/y2");











let NoAccessModalComponent = class NoAccessModalComponent {
    constructor(activeModal, router, userService, session, toastr, translate) {
        this.activeModal = activeModal;
        this.router = router;
        this.userService = userService;
        this.session = session;
        this.toastr = toastr;
        this.translate = translate;
        this.faExclamationCircle = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faExclamationCircle"];
        this.resendTriggered = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
    }
    goToVerification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.activeModal.dismiss();
            yield this.router.navigate(['/verify']);
        });
    }
    goToRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.activeModal.close();
            yield this.router.navigate(['/deposit']);
        });
    }
    resend() {
        this.resendTriggered = true;
        this.subscriptions.add(this.userService.resendActivationMail(this.session.user.id).subscribe(() => {
            this.toastr.success(this.translate.instant('common.mail-confirmation-sent-again'));
        }, () => {
            this.resendTriggered = false;
        }));
    }
};
NoAccessModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_core_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] },
    { type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
NoAccessModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'no-access-modal',
        template: _raw_loader_no_access_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], NoAccessModalComponent);

function openNoAccessModal(ngbModal, error) {
    const modal = ngbModal.open(NoAccessModalComponent, {
        windowClass: 'modal-primary',
    });
    modal.componentInstance.error = error;
    return modal;
}


/***/ }),

/***/ "gfWd":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/core/header/online-users-count/online-users-count.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-transparent\" [routerLink]=\"['/admin/realtime']\">\n    <fa-icon class=\"mr-1\" [fixedWidth]=\"true\" [icon]=\"faUsers\"></fa-icon>\n    <span class=\"badge badge-primary badge-pill\">\n        {{ userCount$ | async | number: '1.0-0' }}\n    </span>\n</button>\n");

/***/ }),

/***/ "gktA":
/*!*****************************************!*\
  !*** ./src/app/app/core/core.module.ts ***!
  \*****************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/common.module */ "a6Df");
/* harmony import */ var _common_notification_notification_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/notification/notification.module */ "niQX");
/* harmony import */ var _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../not-found/not-found.module */ "v5v3");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "kFHl");
/* harmony import */ var _header_header_mailbox_header_mailbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header-mailbox/header-mailbox.component */ "OWKS");
/* harmony import */ var _header_header_notifications_header_notifications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header-notifications/header-notifications.component */ "rtfT");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "2ETP");
/* harmony import */ var _header_online_users_count_online_users_count_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/online-users-count/online-users-count.component */ "B4Go");
/* harmony import */ var _logout_timer_logout_timer_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logout-timer/logout-timer-modal.component */ "y1tC");
/* harmony import */ var _logout_timer_logout_timer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logout-timer/logout-timer.service */ "l9K3");
/* harmony import */ var _menu_menu_profile_menu_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu/menu-profile/menu-profile.component */ "2TCG");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu/menu.component */ "s5DX");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu/menu.service */ "jRoP");
/* harmony import */ var _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./toastr/toastr.component */ "vqDw");
















let CoreModule = class CoreModule {
};
CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _header_header_notifications_header_notifications_component__WEBPACK_IMPORTED_MODULE_7__["HeaderNotificationsComponent"],
            _header_header_mailbox_header_mailbox_component__WEBPACK_IMPORTED_MODULE_6__["HeaderMailboxComponent"],
            _header_online_users_count_online_users_count_component__WEBPACK_IMPORTED_MODULE_9__["OnlineUsersCountComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
            _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_15__["ToastrComponent"],
            _menu_menu_profile_menu_profile_component__WEBPACK_IMPORTED_MODULE_12__["MenuProfileComponent"],
            _logout_timer_logout_timer_modal_component__WEBPACK_IMPORTED_MODULE_10__["LogoutTimerModalComponent"],
        ],
        exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"], _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_15__["ToastrComponent"]],
        providers: [_logout_timer_logout_timer_service__WEBPACK_IMPORTED_MODULE_11__["LogoutTimerService"], _menu_menu_service__WEBPACK_IMPORTED_MODULE_14__["MenuService"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__["NotFoundModule"], _common_notification_notification_module__WEBPACK_IMPORTED_MODULE_3__["NotificationModule"]],
    })
], CoreModule);



/***/ }),

/***/ "gutr":
/*!***************************************************************!*\
  !*** ./src/app/common/address-form/address-form.component.ts ***!
  \***************************************************************/
/*! exports provided: AddressFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressFormComponent", function() { return AddressFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_address_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./address-form.component.html */ "qse/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common.mixin */ "s/H0");
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../countries */ "Gq6/");








let AddressFormComponent = class AddressFormComponent {
    constructor(http) {
        this.http = http;
        this.addressChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isLarge = false;
        /* Removes most required constraints on inputs as the admin route allows many blank fields */
        this.requireAll = true;
        this.disabled = false;
        this.showToggleButton = true;
        this.countriesSortedByName = _countries__WEBPACK_IMPORTED_MODULE_7__["countriesSortedByName"];
        this.submitted = false;
        this.placesAutocomplete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.placesStream = this.placesAutocomplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(text => text && text.length > 2
            ? this.http.get('/places', {
                params: {
                    search: text,
                },
            })
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([])));
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.addressChange.emit(this.address);
        });
    }
    ngOnChanges() {
        if (!this.address) {
            this.address = {};
        }
        this.transformAddress();
    }
    submit() {
        this.submitted = true;
    }
    isValid() {
        return !!this.form.valid;
    }
    setAddress(place) {
        if (place && place.structured_formatting && place.structured_formatting.main_text) {
            this.addressLine1 = place.structured_formatting.main_text;
        }
        if (place && place.place_id) {
            this.disabled = true;
            this.http
                .get('/places/' + place.place_id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
                this.disabled = false;
            }))
                .subscribe(details => {
                const getType = (type) => details.address_components.find((component) => component.types.includes(type));
                this.address.addressLine1 = details.name || null;
                this.address.city = (getType('locality') && getType('locality').long_name) || null;
                this.address.zipCode = (getType('postal_code') && getType('postal_code').long_name) || null;
                this.address.state =
                    (getType('administrative_area_level_1') && getType('administrative_area_level_1').long_name) ||
                        null;
                this.address.country = (getType('country') && getType('country').short_name) || null;
                this.transformAddress();
                this.addressChange.emit(this.address);
            });
        }
        else if (place && place.name) {
            this.address.addressLine1 = place.name;
            this.addressChange.emit(this.address);
        }
    }
    transformAddress() {
        this.addressLine1 = Object(_common_mixin__WEBPACK_IMPORTED_MODULE_6__["transformAddress"])(this.address);
    }
};
AddressFormComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AddressFormComponent.propDecorators = {
    address: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    addressChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    prefix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isLarge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    requireAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    showToggleButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['addressForm',] }]
};
AddressFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'address-form',
        template: _raw_loader_address_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AddressFormComponent);



/***/ }),

/***/ "gvrR":
/*!********************************************!*\
  !*** ./src/app/common/validators/index.ts ***!
  \********************************************/
/*! exports provided: IntegerValidatorDirective, MinValidatorDirective, MaxValidatorDirective, NumberValidatorDirective, DecimalValidatorDirective, BirthdayValidatorDirective, CustomValidatorDirective, ColorValidatorDirective, RecipientValidatorDirective, NameValidatorDirective, IpAddressValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _integer_validator_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integer-validator.directive */ "aNHP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntegerValidatorDirective", function() { return _integer_validator_directive__WEBPACK_IMPORTED_MODULE_0__["IntegerValidatorDirective"]; });

/* harmony import */ var _min_validator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./min-validator.directive */ "oQQb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MinValidatorDirective", function() { return _min_validator_directive__WEBPACK_IMPORTED_MODULE_1__["MinValidatorDirective"]; });

/* harmony import */ var _max_validator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./max-validator.directive */ "Ijt2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaxValidatorDirective", function() { return _max_validator_directive__WEBPACK_IMPORTED_MODULE_2__["MaxValidatorDirective"]; });

/* harmony import */ var _number_validator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number-validator.directive */ "h1Rq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberValidatorDirective", function() { return _number_validator_directive__WEBPACK_IMPORTED_MODULE_3__["NumberValidatorDirective"]; });

/* harmony import */ var _decimal_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decimal-validator.directive */ "pjly");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecimalValidatorDirective", function() { return _decimal_validator_directive__WEBPACK_IMPORTED_MODULE_4__["DecimalValidatorDirective"]; });

/* harmony import */ var _birthday_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./birthday-validator.directive */ "N1bf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BirthdayValidatorDirective", function() { return _birthday_validator_directive__WEBPACK_IMPORTED_MODULE_5__["BirthdayValidatorDirective"]; });

/* harmony import */ var _custom_validator_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-validator.directive */ "/Vpj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomValidatorDirective", function() { return _custom_validator_directive__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorDirective"]; });

/* harmony import */ var _color_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./color-validator.directive */ "2xA4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorValidatorDirective", function() { return _color_validator_directive__WEBPACK_IMPORTED_MODULE_7__["ColorValidatorDirective"]; });

/* harmony import */ var _recipient_validator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipient-validator.directive */ "dK97");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecipientValidatorDirective", function() { return _recipient_validator_directive__WEBPACK_IMPORTED_MODULE_8__["RecipientValidatorDirective"]; });

/* harmony import */ var _name_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./name-validator.directive */ "1LI3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NameValidatorDirective", function() { return _name_validator_directive__WEBPACK_IMPORTED_MODULE_9__["NameValidatorDirective"]; });

/* harmony import */ var _ip_address_validator_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ip-address-validator.directive */ "9rdc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IpAddressValidatorDirective", function() { return _ip_address_validator_directive__WEBPACK_IMPORTED_MODULE_10__["IpAddressValidatorDirective"]; });














/***/ }),

/***/ "h1Rq":
/*!*****************************************************************!*\
  !*** ./src/app/common/validators/number-validator.directive.ts ***!
  \*****************************************************************/
/*! exports provided: NumberValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValidatorDirective", function() { return NumberValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var NumberValidatorDirective_1;



let NumberValidatorDirective = NumberValidatorDirective_1 = class NumberValidatorDirective {
    validate(control) {
        const required = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control);
        if (required !== undefined && required !== null) {
            return null;
        }
        // eslint-disable-next-line id-blacklist
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(control.value) ? null : { number: true };
    }
};
NumberValidatorDirective = NumberValidatorDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[number][formControlName],[number][formControl],[number][ngModel]',
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                useExisting: NumberValidatorDirective_1,
                multi: true,
            },
        ],
    })
], NumberValidatorDirective);



/***/ }),

/***/ "hOWo":
/*!**************************************************!*\
  !*** ./src/app/store/wallets/wallets.service.ts ***!
  \**************************************************/
/*! exports provided: WalletsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletsService", function() { return WalletsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");
/* harmony import */ var _wallets_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallets.store */ "UKac");






let WalletsService = class WalletsService {
    constructor(store, session, http) {
        this.store = store;
        this.session = session;
        this.http = http;
    }
    fetchAsObservable() {
        return this.session.userStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(user => this.http.get(`/users/${user.id}/wallets`, {
            params: {
                limit: '20',
            },
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(wallets => {
            this.store.set(wallets);
        }));
    }
    fetch() {
        this.fetchAsObservable().subscribe(() => undefined);
    }
};
WalletsService.ctorParameters = () => [
    { type: _wallets_store__WEBPACK_IMPORTED_MODULE_5__["WalletsStore"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
WalletsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], WalletsService);



/***/ }),

/***/ "hqXw":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/core/menu/menu-profile/menu-profile.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"user$ | async; let user\">\n    <a\n        href\n        class=\"profile\"\n        [ngClass]=\"{ open: isOpen }\"\n        (click)=\"isOpen = !isOpen; $event.preventDefault()\"\n        [ngbTooltip]=\"profileTooltip\"\n        placement=\"right\"\n    >\n        <user-avatar [user]=\"user\" [border]=\"true\" [online]=\"true\" elementClass=\"mr-2\"></user-avatar>\n        <ng-container *ngTemplateOutlet=\"profileTooltip\"></ng-container>\n        <ng-template #profileTooltip>\n            <div>\n                <div class=\"e2e-profile-name\">\n                    {{ user.name }}\n                </div>\n                <span class=\"text-primary\"\n                    >{{ currentBalance$ | async | amount: user.preferredCurrency.decimalPlaces }} {{ user.preferredCurrency.code }}</span\n                >\n            </div>\n        </ng-template>\n        <fa-icon [fixedWidth]=\"true\" [icon]=\"faAngleDown\" [rotate]=\"isOpen ? 180 : undefined\" class=\"ml-auto\"></fa-icon>\n    </a>\n    <div class=\"list-group\" [@toggleBalances]=\"isOpen\">\n        <a\n            href\n            class=\"list-group-item list-group-item-action\"\n            *ngFor=\"let wallet of wallets$ | async\"\n            (click)=\"changePreferredCurrency(wallet.currency); $event.preventDefault()\"\n        >\n            <span class=\"text-white\">{{ wallet.availableBalance | amount: wallet.currency?.decimalPlaces }}</span> {{ wallet.currency?.code }}\n        </a>\n    </div>\n</ng-container>\n");

/***/ }),

/***/ "hwAi":
/*!*****************************************************************!*\
  !*** ./src/app/common/profile-documents/file-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: FileItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItemComponent", function() { return FileItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_file_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./file-item.component.html */ "nYGv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "WE53");
/* harmony import */ var _common_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.mixin */ "s/H0");





let FileItemComponent = class FileItemComponent {
    constructor() {
        this.canView = true;
        this.faSpinner = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSpinner"];
        this.faTimesCircle = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimesCircle"];
        this.faCheckCircle = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCheckCircle"];
        this.toStartCase = _common_mixin__WEBPACK_IMPORTED_MODULE_4__["toStartCase"];
    }
};
FileItemComponent.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    canView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
FileItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'file-item',
        template: _raw_loader_file_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], FileItemComponent);



/***/ }),

/***/ "i3os":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/confirmation-modal/confirmation-modal.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{ title }}</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-body e2e-confirmation-modal\">\n    <div class=\"media align-items-center\" [ngClass]=\"{ 'mb-3': input }\">\n        <fa-icon class=\"mt-1 mr-3\" [ngClass]=\"'text-' + type\" [icon]=\"icon\" size=\"2x\"></fa-icon>\n        <div class=\"media-body\" [innerHtml]=\"text\"></div>\n    </div>\n    <form #inputForm=\"ngForm\" class=\"form-validation\" [ngClass]=\"{ 'ng-submitted': submitted }\" *ngIf=\"input\" novalidate>\n        <ng-container *ngIf=\"input === 'text'\">\n            <label class=\"text-body\" for=\"input\" *ngIf=\"inputLabel\">{{ inputLabel }}</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"input\"\n                name=\"input\"\n                [(ngModel)]=\"inputValue\"\n                #inputText=\"ngModel\"\n                [customValidator]=\"inputValidator\"\n                emptyToNull\n            />\n            <div *ngIf=\"inputText.invalid && (submitted || inputText.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"inputText?.errors?.customError\">{{ inputValidator(inputValue) }}</div>\n            </div>\n        </ng-container>\n    </form>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn mr-2 e2e-confirmation-modal-confirm-btn\" [ngClass]=\"'btn-' + confirmClass\" (click)=\"confirm()\">\n        {{ confirmText }}\n    </button>\n    <button\n        *ngIf=\"showCancel\"\n        type=\"button\"\n        class=\"btn e2e-confirmation-modal-cancel-btn\"\n        [ngClass]=\"'btn-' + cancelClass\"\n        (click)=\"activeModal.close(false)\"\n    >\n        {{ cancelText }}\n    </button>\n</div>\n");

/***/ }),

/***/ "iO5V":
/*!*****************************************************************!*\
  !*** ./src/app/common/security-check/confirm-password.modal.ts ***!
  \*****************************************************************/
/*! exports provided: ConfirmPasswordModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordModalComponent", function() { return ConfirmPasswordModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirm_password_modal_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirm-password.modal.html */ "HD72");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/session.service */ "6g7h");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/token.service */ "JdTs");










let ConfirmPasswordModalComponent = class ConfirmPasswordModalComponent {
    constructor(modal, tokenService, session) {
        this.modal = modal;
        this.tokenService = tokenService;
        this.session = session;
        this.showTwoFactorForm = false;
        this.isLoading = false;
        this.faUnlockAlt = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUnlockAlt"];
    }
    ngOnInit() {
        // don't ask for PW for users which use twoFactor auth
        if (this.session.user.twoFactor) {
            this.showTwoFactorForm = true;
        }
    }
    canSubmit() {
        return !this.isLoading && !!this.passwordForm.valid;
    }
    grantTokenScope() {
        this.isLoading = true;
        return this.tokenService
            .refresh({
            password: this.session.user.twoFactor ? undefined : this.password,
            scopes: Array.from(new Set([...this.session.getTokenScopes(), this.scope])),
            twoFactorCode: this.twoFactorCode,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.isLoading = false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(error => {
            if (error.name === 'Require2FACodeError') {
                this.showTwoFactorForm = true;
                this.alert = undefined;
            }
            else {
                this.alert = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(error.name === 'WrongCredentialsError'
                    ? 'The password you entered was not correct'
                    : error.message);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        }));
    }
    submit() {
        this.grantTokenScope().subscribe(response => this.modal.close(response));
    }
    reset() {
        this.isLoading = false;
        this.password = undefined;
        this.twoFactorCode = undefined;
        this.alert = undefined;
        if (this.passwordForm) {
            this.passwordForm.resetForm();
        }
    }
};
ConfirmPasswordModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] },
    { type: _services_token_service__WEBPACK_IMPORTED_MODULE_9__["TokenService"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"] }
];
ConfirmPasswordModalComponent.propDecorators = {
    passwordForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['passwordForm', { static: true },] }],
    scope: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
ConfirmPasswordModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'confirm-password-modal',
        template: _raw_loader_confirm_password_modal_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ConfirmPasswordModalComponent);



/***/ }),

/***/ "ieVf":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/core/header/header.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-dashboard px-0 e2e-header\">\n    <div [ngClass]=\"router.isActive('/admin', false) ? 'container-fluid' : 'container'\">\n        <ul class=\"nav navbar-nav\">\n            <li class=\"nav-item d-flex align-items-center\">\n                <button type=\"button\" class=\"btn btn-transparent mr-1 d-lg-none\" (click)=\"openMobileNav()\">\n                    <fa-icon [fixedWidth]=\"true\" [icon]=\"faBars\"></fa-icon>\n                </button>\n                <button type=\"button\" class=\"btn btn-transparent mr-1 d-none d-lg-block\" (click)=\"toggleSidebar()\">\n                    <fa-icon [fixedWidth]=\"true\" [icon]=\"faBars\"></fa-icon>\n                </button>\n            </li>\n            <li class=\"nav-item d-none d-lg-flex align-items-center\">\n                <button type=\"button\" class=\"btn btn-transparent\" [routerLink]=\"['/transactions']\">\n                    <fa-icon class=\"mr-1\" [fixedWidth]=\"true\" [icon]=\"faSearch\"></fa-icon> {{ 'header.search' | translate }}\n                </button>\n            </li>\n        </ul>\n        <ul class=\"nav navbar-nav\" *ngIf=\"session.userStream | async; let user\">\n            <li class=\"nav-item d-flex align-items-center\" ngbDropdown placement=\"bottom-right\">\n                <button type=\"button\" class=\"btn btn-transparent\" ngbDropdownToggle>\n                    <span>{{ translate.currentLang | uppercase }}</span>\n                    <fa-icon [fixedWidth]=\"true\" [icon]=\"faAngleDown\"></fa-icon>\n                </button>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <button *ngFor=\"let lang of languages\" ngbDropdownItem (click)=\"changeLanguage(lang)\">\n                        <span>{{ getCountryEmoji(lang) }}&nbsp;</span> {{ mapCountryName(lang) }}\n                    </button>\n                </div>\n            </li>\n            <ng-container *ngIf=\"!router.isActive('/admin', false)\">\n                <li class=\"nav-item d-flex align-items-center e2e-header-mailbox\">\n                    <header-mailbox></header-mailbox>\n                </li>\n                <li class=\"nav-item d-flex align-items-center e2e-header-notifications\">\n                    <header-notifications></header-notifications>\n                </li>\n            </ng-container>\n            <ng-container *ngIf=\"router.isActive('/admin', false)\">\n                <li class=\"nav-item d-none d-lg-flex align-items-center\">\n                    <online-users-count></online-users-count>\n                </li>\n            </ng-container>\n            <li class=\"nav-item d-none d-lg-flex align-items-center\">\n                <button\n                    type=\"button\"\n                    class=\"btn btn-transparent\"\n                    placement=\"left\"\n                    [ngbTooltip]=\"'common.reset-session-timeout' | translate\"\n                    (click)=\"logoutTimerService.reset()\"\n                >\n                    <fa-icon [fixedWidth]=\"true\" [icon]=\"faClock\" class=\"mr-1\"></fa-icon>\n                    <span class=\"font-sm font-weight-bold\">\n                        {{ sessionTimeLeft$ | async }}\n                    </span>\n                </button>\n            </li>\n            <li class=\"nav-item d-flex align-items-center e2e-account-button\" ngbDropdown placement=\"bottom-right\">\n                <button type=\"button\" class=\"btn btn-transparent\" ngbDropdownToggle>\n                    <fa-icon [fixedWidth]=\"true\" [icon]=\"faUserCircle\" class=\"mr-1\"></fa-icon>\n                    <fa-icon [fixedWidth]=\"true\" [icon]=\"faAngleDown\"></fa-icon>\n                </button>\n                <div class=\"dropdown-menu-lg dropdown-menu-right\" ngbDropdownMenu>\n                    <a class=\"dropdown-item d-flex flex-column text-center py-3\" [routerLink]=\"['/account/profile']\">\n                        <div>\n                            <user-avatar [user]=\"user\" size=\"md\" elementClass=\"mb-2\"></user-avatar>\n                        </div>\n                        <div class=\"text-primary\">{{ user.fullname }}</div>\n                        <div class=\"small text-body\">{{ user.email }}</div>\n                    </a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a ngbDropdownItem [routerLink]=\"['/account/security']\">{{ 'header.change-password' | translate }}</a>\n                    <a ngbDropdownItem [routerLink]=\"!router.isActive('/admin', false) ? ['/admin'] : ['/dashboard']\" *ngIf=\"user.role !== null\">{{\n                        (!router.isActive('/admin', false) ? 'header.administration' : 'header.back-to-dashboard') | translate\n                    }}</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a ngbDropdownItem href (click)=\"logout(); $event.preventDefault()\">{{ 'header.logout' | translate }}</a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n");

/***/ }),

/***/ "ikxJ":
/*!**********************************************!*\
  !*** ./src/app/common/sentence-case.pipe.ts ***!
  \**********************************************/
/*! exports provided: SentenceCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentenceCasePipe", function() { return SentenceCasePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let SentenceCasePipe = class SentenceCasePipe {
    transform(value) {
        if (typeof value !== 'string') {
            return value;
        }
        return value.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
    }
};
SentenceCasePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'sentenceCase' })
], SentenceCasePipe);



/***/ }),

/***/ "ipJV":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/postal-address/postal-address.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<address [ngClass]=\"theme === 'input' ? 'address-input' : theme\">\n    <ng-container *ngIf=\"user\"> {{ user.name }}<br /> </ng-container>\n    <ng-container *ngIf=\"address; else noAddress\">\n        {{ address.addressLine1 }}<br />\n        <ng-container *ngIf=\"address.addressLine2\"> {{ address.addressLine2 }}<br /> </ng-container>\n        <!-- US format -->\n        {{ address.city ? address.city + ', ' : '' }} {{ address.state }} {{ address.zipCode }}\n        <ng-container *ngIf=\"address.country\">\n            <br />\n            {{ countryMap[address.country]?.name }}\n        </ng-container>\n    </ng-container>\n    <ng-template #noAddress>{{ theme === 'input' ? '-' : '' }}</ng-template>\n</address>\n");

/***/ }),

/***/ "j/N3":
/*!*****************************************************!*\
  !*** ./src/app/common/services/viewport.service.ts ***!
  \*****************************************************/
/*! exports provided: ViewportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportService", function() { return ViewportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
var ViewportService_1;



let ViewportService = ViewportService_1 = class ViewportService {
    constructor(meta) {
        this.meta = meta;
    }
    update() {
        // Ensures a minimum viewport width
        const metaEl = this.meta.getTag('name = "viewport"');
        if (!metaEl) {
            return;
        }
        if (window.outerWidth < ViewportService_1.MINIMUM_WIDTH) {
            if (!this.originalViewport) {
                this.originalViewport = metaEl.content;
                metaEl.content = `width=${ViewportService_1.MINIMUM_WIDTH}, user-scalable=0`;
            }
        }
        else {
            if (this.originalViewport) {
                metaEl.content = this.originalViewport;
                this.originalViewport = undefined;
            }
        }
    }
};
ViewportService.MINIMUM_WIDTH = 375;
ViewportService.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }
];
ViewportService = ViewportService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ViewportService);



/***/ }),

/***/ "jL3D":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/currency-select/currency-select.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-select\n    [ngClass]=\"{ 'ng-select-lg': isLarge }\"\n    name=\"currency-select\"\n    [placeholder]=\"placeholder\"\n    [(ngModel)]=\"currency\"\n    [items]=\"balances$ | async\"\n    [clearable]=\"false\"\n    [searchable]=\"false\"\n    [disabled]=\"disabled\"\n    [required]=\"required\"\n    (change)=\"currencyChange.emit($event)\"\n    [compareWith]=\"compareCurrencies\"\n    #currencyInput=\"ngModel\"\n>\n    <ng-template ng-label-tmp let-item=\"item\">\n        <b class=\"mr-1\">\n            <ng-container [ngSwitch]=\"item.code\">\n                <ng-container *ngSwitchCase=\"'AU'\"> Gold </ng-container>\n                <ng-container *ngSwitchCase=\"'AG'\"> Silver </ng-container>\n                <ng-container *ngSwitchDefault>{{ useFullName ? item.name : item.code }}</ng-container>\n            </ng-container>\n        </b>\n        <span class=\"small text-muted\">\n            <ng-container *ngIf=\"!(appName === 'sgpmx' && salesProceeds); else sgpmxLabel\">\n                {{ item.balance | amount: item.decimalPlaces }} {{ item.code }}\n                <ng-container *ngIf=\"['crypto', 'metal'].includes(item.type) && !item.code.includes('USD')\">\n                    (≈ {{ item.usdValue | amount: 2 }} USD)\n                </ng-container>\n            </ng-container>\n            <ng-template #sgpmxLabel>{{ item.salesProceeds | amount: 2 }} {{ item.code }}</ng-template>\n        </span>\n    </ng-template>\n    <ng-template ng-option-tmp let-item=\"item\">\n        <ng-container [ngSwitch]=\"item.code\">\n            <ng-container *ngSwitchCase=\"'AU'\"> Gold </ng-container>\n            <ng-container *ngSwitchCase=\"'AG'\"> Silver </ng-container>\n            <ng-container *ngSwitchDefault>{{ useFullName ? item.name : item.code }}</ng-container>\n        </ng-container>\n        <span class=\"float-right small text-muted\">\n            <ng-container *ngIf=\"!(appName === 'sgpmx' && salesProceeds); else sgpmxOption\">\n                {{ item.balance | amount: item.decimalPlaces }} {{ item.code }}\n                <ng-container *ngIf=\"['crypto', 'metal'].includes(item.type) && !item.code.includes('USD')\">\n                    (≈ {{ item.usdValue | amount: 2 }} USD)\n                </ng-container>\n            </ng-container>\n            <ng-template #sgpmxOption>{{ item.salesProceeds | amount: 2 }} {{ item.code }}</ng-template>\n        </span>\n    </ng-template>\n</ng-select>\n");

/***/ }),

/***/ "jRoP":
/*!***********************************************!*\
  !*** ./src/app/app/core/menu/menu.service.ts ***!
  \***********************************************/
/*! exports provided: MobileNavLayout, SidebarLayout, MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNavLayout", function() { return MobileNavLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLayout", function() { return SidebarLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var MobileNavLayout;
(function (MobileNavLayout) {
    MobileNavLayout["HIDDEN"] = "";
    MobileNavLayout["VISIBLE"] = "sidebar-show";
})(MobileNavLayout || (MobileNavLayout = {}));
var SidebarLayout;
(function (SidebarLayout) {
    SidebarLayout["DEFAULT"] = "";
    SidebarLayout["TOGGLED"] = "sidebar-toggled";
})(SidebarLayout || (SidebarLayout = {}));
let MenuService = class MenuService {
    constructor() {
        this.mobileNav = MobileNavLayout.HIDDEN;
        this.sidebar = SidebarLayout.DEFAULT;
    }
    get style() {
        return [this.mobileNav, this.sidebar].join(' ');
    }
};
MenuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MenuService);



/***/ }),

/***/ "jfb2":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/beneficiary-form/beneficiary-details-form/beneficiary-details-form.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #beneficiaryDetailsForm=\"ngForm\" [ngClass]=\"{ 'ng-submitted': submitted }\" class=\"form-validation\" novalidate>\n    <div class=\"pt-2 mb-1\"></div>\n    <div class=\"d-flex align-items-center\">\n        <h6 class=\"text-primary pr-1\">{{ 'common.beneficiary' | translate }}</h6>\n        <hr class=\"w-100 m-0 pb-2\" />\n    </div>\n    <ng-container *ngIf=\"beneficiary.method !== 'crypto'\">\n        <div class=\"form-group\">\n            <label [ngClass]=\"{ 'font-md': isLarge }\" for=\"accountHolder\">{{ 'common.account-name' | translate }}</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                [ngClass]=\"{ 'form-control-lg': isLarge }\"\n                id=\"accountHolder\"\n                name=\"accountHolder\"\n                [(ngModel)]=\"beneficiary.accountHolder\"\n                emptyToNull\n                #accountHolder=\"ngModel\"\n                [disabled]=\"disabled\"\n                required\n            />\n            <div *ngIf=\"accountHolder.invalid && (submitted || accountHolder.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"accountHolder?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n    </ng-container>\n    <div class=\"form-group\">\n        <label [ngClass]=\"{ 'font-md': isLarge }\" for=\"accountNumber\">\n            {{ getAccountNumberLabel() }}\n        </label>\n        <input\n            type=\"text\"\n            class=\"form-control\"\n            [ngClass]=\"{ 'form-control-lg': isLarge }\"\n            id=\"accountNumber\"\n            name=\"accountNumber\"\n            [(ngModel)]=\"beneficiary.accountNumber\"\n            emptyToNull\n            #accountNumber=\"ngModel\"\n            [disabled]=\"disabled\"\n            required\n        />\n        <div *ngIf=\"accountNumber.invalid && (submitted || accountNumber.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"accountNumber?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n        </div>\n    </div>\n    <ng-container *ngIf=\"beneficiary.method === 'crypto'\">\n        <div class=\"form-group\">\n            <label [ngClass]=\"{ 'font-md': isLarge }\" for=\"accountHolder\">\n                {{ 'common.wallet-label' | translate }}\n                <small class=\"text-muted\">({{ 'common.optional' | translate }})</small>\n            </label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                [ngClass]=\"{ 'form-control-lg': isLarge }\"\n                id=\"accountHolder\"\n                name=\"accountHolder\"\n                [(ngModel)]=\"beneficiary.accountHolder\"\n                emptyToNull\n                #accountHolder=\"ngModel\"\n                [disabled]=\"disabled\"\n            />\n        </div>\n    </ng-container>\n    <ng-container *ngIf=\"beneficiary.method === 'swift' || beneficiary.method === 'local'\">\n        <div class=\"pt-2 mb-1\"></div>\n        <div class=\"d-flex align-items-center\">\n            <h6 class=\"text-primary pr-1 text-nowrap\">{{ 'beneficiary-details-form.beneficiary-address' | translate | titlecase }}</h6>\n            <hr class=\"w-100 m-0 pb-2\" />\n        </div>\n        <address-form\n            [(address)]=\"beneficiary.accountHolderAddress\"\n            [isLarge]=\"isLarge\"\n            [requireAll]=\"requireAll\"\n            [disabled]=\"disabled\"\n            prefix=\"accountHolder\"\n            #accountHolderAddressForm\n        ></address-form>\n        <div class=\"pt-2 mb-1\"></div>\n        <div class=\"d-flex align-items-center\">\n            <h6 class=\"text-primary pr-1 text-nowrap\">{{ 'common.beneficiary-bank' | translate }}</h6>\n            <hr class=\"w-100 m-0 pb-2\" />\n        </div>\n        <div class=\"form-group\">\n            <label [ngClass]=\"{ 'font-md': isLarge }\" for=\"bankName\">{{ 'common.name' | translate }}</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                [ngClass]=\"{ 'form-control-lg': isLarge }\"\n                id=\"bankName\"\n                name=\"bankName\"\n                [(ngModel)]=\"beneficiary.bankName\"\n                emptyToNull\n                #bankName=\"ngModel\"\n                [disabled]=\"disabled\"\n                required\n            />\n            <div *ngIf=\"bankName.invalid && (submitted || bankName.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"bankName?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"showSwift()\">\n            <label [ngClass]=\"{ 'font-md': isLarge }\" for=\"bankSwiftCode\">\n                {{ getSwiftLabel() }} <small class=\"text-muted\" *ngIf=\"!isIntermediateBankCollapsed\">({{ 'common.optional' | translate }})</small>\n            </label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                [ngClass]=\"{ 'form-control-lg': isLarge }\"\n                id=\"bankSwiftCode\"\n                name=\"bankSwiftCode\"\n                [(ngModel)]=\"beneficiary.bankSwiftCode\"\n                emptyToNull\n                #bankSwiftCode=\"ngModel\"\n                [disabled]=\"disabled\"\n                [required]=\"isIntermediateBankCollapsed\"\n            />\n            <div *ngIf=\"bankSwiftCode.invalid && (submitted || bankSwiftCode.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"bankSwiftCode?.errors?.required\"></div>\n            </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"showRoutingNumber()\">\n            <label [ngClass]=\"{ 'font-md': isLarge }\" for=\"routingNumber\">{{ getRoutingNumberLabel() }}</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                [ngClass]=\"{ 'form-control-lg': isLarge }\"\n                id=\"routingNumber\"\n                name=\"routingNumber\"\n                [(ngModel)]=\"beneficiary.routingNumber\"\n                emptyToNull\n                #routingNumber=\"ngModel\"\n                [disabled]=\"disabled\"\n                required\n            />\n            <div *ngIf=\"routingNumber.invalid && (submitted || routingNumber.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"routingNumber?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"pt-2 mb-1\"></div>\n        <div class=\"d-flex align-items-center\">\n            <h6 class=\"text-primary pr-1 text-nowrap\">{{ 'beneficiary-details-form.beneficiary-bank-address' | translate }}</h6>\n            <hr class=\"w-100 m-0 pb-2\" />\n        </div>\n        <address-form\n            [(address)]=\"beneficiary.bankAddress\"\n            [isLarge]=\"isLarge\"\n            [requireAll]=\"requireAll\"\n            [disabled]=\"disabled\"\n            prefix=\"bank\"\n            #bankAddressForm\n        ></address-form>\n        <div class=\"form-group\" *ngIf=\"beneficiary.method === 'swift'\">\n            <a\n                href\n                class=\"d-block\"\n                (click)=\"\n                    isIntermediateBankCollapsed = !isIntermediateBankCollapsed;\n                    beneficiary.intermediateBankName = null;\n                    beneficiary.intermediateBankSwiftCode = null;\n                    beneficiary.intermediateBankAddress = null;\n                    $event.preventDefault()\n                \"\n                >{{ isIntermediateBankCollapsed ? '+ ' + ('common.add' | translate) : '-' + ('common.remove' | translate) }}\n                {{ 'common.intermediate-bank' | translate | lowercase }}</a\n            >\n        </div>\n        <ng-container *ngIf=\"!isIntermediateBankCollapsed\">\n            <div class=\"pt-2 mb-1\"></div>\n            <div class=\"d-flex align-items-center\">\n                <h6 class=\"text-primary pr-1 text-nowrap\">{{ 'common.intermediate-bank' | translate }}</h6>\n                <hr class=\"w-100 m-0 pb-2\" />\n            </div>\n            <div class=\"form-group\">\n                <label [ngClass]=\"{ 'font-md': isLarge }\" for=\"intermediateBankName\">{{ 'common.name' | translate }}</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    [ngClass]=\"{ 'form-control-lg': isLarge }\"\n                    id=\"intermediateBankName\"\n                    name=\"intermediateBankName\"\n                    [(ngModel)]=\"beneficiary.intermediateBankName\"\n                    emptyToNull\n                    #intermediateBankName=\"ngModel\"\n                    [disabled]=\"disabled\"\n                    required\n                />\n                <div *ngIf=\"intermediateBankName.invalid && (submitted || intermediateBankName.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"intermediateBankName?.errors?.required\">\n                        {{ 'common.this-is-required' | translate }}\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label [ngClass]=\"{ 'font-md': isLarge }\" for=\"intermediateBankSwiftCode\">{{ 'common.swift-code' | translate }}</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    [ngClass]=\"{ 'form-control-lg': isLarge }\"\n                    id=\"intermediateBankSwiftCode\"\n                    name=\"intermediateBankSwiftCode\"\n                    [(ngModel)]=\"beneficiary.intermediateBankSwiftCode\"\n                    emptyToNull\n                    #intermediateBankSwiftCode=\"ngModel\"\n                    [disabled]=\"disabled\"\n                    required\n                />\n                <div *ngIf=\"intermediateBankSwiftCode.invalid && (submitted || intermediateBankSwiftCode.dirty)\" class=\"error-messages\">\n                    <div class=\"form-control-feedback\" *ngIf=\"intermediateBankSwiftCode?.errors?.required\">\n                        {{ 'common.this-is-required' | translate }}\n                    </div>\n                </div>\n            </div>\n            <div class=\"pt-2 mb-1\"></div>\n            <div class=\"d-flex align-items-center\">\n                <h6 class=\"text-primary pr-1 text-nowrap\">{{ 'common.intermediate-bank' | translate }} {{ 'common.address' | translate }}</h6>\n                <hr class=\"w-100 m-0 pb-2\" />\n            </div>\n            <address-form\n                [(address)]=\"beneficiary.intermediateBankAddress\"\n                [isLarge]=\"isLarge\"\n                [requireAll]=\"requireAll\"\n                [disabled]=\"disabled\"\n                prefix=\"intermediateBank\"\n                #intermediateBankAddressForm\n            ></address-form>\n        </ng-container>\n    </ng-container>\n</form>\n");

/***/ }),

/***/ "k+mr":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/core/footer/footer.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-lg-12 footer-left\">\n            <ng-container *ngIf=\"showCopyRight()\"> &copy; {{ year }} Aerapass Ltd. - All rights reserved. </ng-container>\n        </div>\n        <div class=\"col-lg-12 footer-right\">\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/fees']\" class=\"text-muted\">{{ 'common.fee-schedule' | translate | titlecase }}</a>\n                </li>\n                <li *ngIf=\"helpCenterUrl\">\n                    <a [href]=\"helpCenterUrl\" class=\"text-muted\" target=\"_blank\" rel=\"noopener\">{{ 'footer.help-center' | translate }}</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/terms']\" class=\"text-muted\">{{ 'common.terms-conditions' | translate }}</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/privacy']\" class=\"text-muted\">{{ 'common.data-privacy-notice' | translate | titlecase }}</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "kFHl":
/*!*****************************************************!*\
  !*** ./src/app/app/core/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "k+mr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let FooterComponent = class FooterComponent {
    constructor() {
        this.year = new Date().getFullYear();
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].displayName;
        this.helpCenterUrl = window.HELP_CENTER_URL;
    }
    showCopyRight() {
        switch (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appName) {
            case 'etransfer':
                return false;
            default:
                return true;
        }
    }
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], FooterComponent);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kSjO":
/*!***********************************************!*\
  !*** ./src/app/common/user/user.component.ts ***!
  \***********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user.component.html */ "TwQz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let UserComponent = class UserComponent {
    constructor(router) {
        this.router = router;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appName;
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].displayName;
        this.displayAccountNumber = false;
        this.displayBadges = true;
        this.disableLink = false;
        this.maxCharacters = 30;
    }
    handleClick(event, userId) {
        event.preventDefault();
        if (!this.disableLink) {
            this.router.navigate(['/admin/accounts/users', userId]);
        }
    }
};
UserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    displayAccountNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    displayBadges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disableLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    maxCharacters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
UserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'user-display',
        template: _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserComponent);



/***/ }),

/***/ "l9K3":
/*!***************************************************************!*\
  !*** ./src/app/app/core/logout-timer/logout-timer.service.ts ***!
  \***************************************************************/
/*! exports provided: LogoutTimerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutTimerService", function() { return LogoutTimerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/services/alert.service */ "0ZVX");
/* harmony import */ var src_app_common_services_logout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/services/logout.service */ "2kWO");
/* harmony import */ var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/services/session.service */ "6g7h");
/* harmony import */ var src_app_common_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/services/toastr.service */ "N/y2");
/* harmony import */ var src_app_common_services_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common/services/token.service */ "JdTs");
/* harmony import */ var _logout_timer_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logout-timer-modal.component */ "y1tC");












let LogoutTimerService = class LogoutTimerService {
    constructor(session, logout, alerts, tokenService, toastr, ngbModal, translate) {
        this.session = session;
        this.logout = logout;
        this.alerts = alerts;
        this.tokenService = tokenService;
        this.toastr = toastr;
        this.ngbModal = ngbModal;
        this.translate = translate;
        this.leftInMinutes$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](-1);
    }
    init() {
        let modal;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined), this.session.tokenChangeEvent, Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(10000))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(() => this.session.hasValidRefreshToken()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            const secondsLeft = this.session.getExpiryTimeInSeconds();
            this.leftInMinutes$.next(Math.ceil(secondsLeft / 60));
            if (secondsLeft <= 60 && !modal) {
                modal = this.ngbModal.open(_logout_timer_modal_component__WEBPACK_IMPORTED_MODULE_11__["LogoutTimerModalComponent"], {
                    windowClass: 'modal-primary',
                });
                const handler = () => (modal = undefined);
                modal.result.then(handler, handler);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(() => this.session.getExpiryTimeInSeconds() < 15), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(() => this.logout.logout()))
            .subscribe(() => {
            this.alerts.add({ message: this.translate.instant('common.your-session-expired'), severity: 'warning' });
        });
    }
    reset() {
        this.tokenService.refresh().subscribe(() => {
            this.toastr.success(this.translate.instant('logout-timer.your-session-has-been-refreshed'));
        });
    }
};
LogoutTimerService.ctorParameters = () => [
    { type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"] },
    { type: src_app_common_services_logout_service__WEBPACK_IMPORTED_MODULE_7__["LogoutService"] },
    { type: src_app_common_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_common_services_token_service__WEBPACK_IMPORTED_MODULE_10__["TokenService"] },
    { type: src_app_common_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
LogoutTimerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LogoutTimerService);



/***/ }),

/***/ "lCZN":
/*!********************************************************************************************************!*\
  !*** ./src/app/common/beneficiary-form/beneficiary-details-form/beneficiary-details-form.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: BeneficiaryDetailsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryDetailsFormComponent", function() { return BeneficiaryDetailsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_beneficiary_details_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./beneficiary-details-form.component.html */ "jfb2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../countries */ "Gq6/");






let BeneficiaryDetailsFormComponent = class BeneficiaryDetailsFormComponent {
    constructor(translate) {
        this.translate = translate;
        this.isLarge = false;
        this.disabled = false;
        this.requireAll = true;
        this.countriesSortedByName = _countries__WEBPACK_IMPORTED_MODULE_5__["countriesSortedByName"];
        this.isIntermediateBankCollapsed = true;
        this.submitted = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnInit() {
        if (this.beneficiary.intermediateBankAddress) {
            this.isIntermediateBankCollapsed = false;
        }
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    submit() {
        this.submitted = true;
        if (this.accountHolderAddressForm) {
            this.accountHolderAddressForm.submit();
        }
        if (this.bankAddressForm) {
            this.bankAddressForm.submit();
        }
        if (this.intermediateBankAddressForm) {
            this.intermediateBankAddressForm.submit();
        }
        Object.assign(this.beneficiary, {
            // Remove intermediateBank if collapsed
            intermediateBankName: this.isIntermediateBankCollapsed ? null : this.beneficiary.intermediateBankName,
            intermediateBankSwiftCode: this.isIntermediateBankCollapsed
                ? null
                : this.beneficiary.intermediateBankSwiftCode,
            intermediateBankAddress: this.isIntermediateBankCollapsed ? null : this.beneficiary.intermediateBankAddress,
        });
    }
    isValid() {
        let valid = !!this.form.valid;
        if (this.accountHolderAddressForm) {
            valid = valid && this.accountHolderAddressForm.isValid();
        }
        if (this.bankAddressForm) {
            valid = valid && this.bankAddressForm.isValid();
        }
        if (this.intermediateBankAddressForm && !this.isIntermediateBankCollapsed) {
            valid = valid && this.intermediateBankAddressForm.isValid();
        }
        return valid;
    }
    reset() {
        this.submitted = false;
        this.form.reset();
        if (this.accountHolderAddressForm) {
            this.accountHolderAddressForm.form.reset();
            this.accountHolderAddressForm.submitted = false;
        }
        if (this.bankAddressForm) {
            this.bankAddressForm.form.reset();
            this.bankAddressForm.submitted = false;
        }
        if (this.intermediateBankAddressForm) {
            this.intermediateBankAddressForm.form.reset();
            this.intermediateBankAddressForm.submitted = false;
        }
    }
    /** For local method branching */
    getAccountNumberLabel() {
        if (this.beneficiary.method === 'local') {
            if (this.getCurrencyCode() === 'EUR') {
                return 'IBAN';
            }
        }
        if (this.beneficiary.method === 'crypto') {
            return `${this.translate.instant('common.wallet-address')}`;
        }
        return `${this.translate.instant('common.account-number')}`;
    }
    showSwift() {
        return !(this.beneficiary.method === 'local' && this.getCurrencyCode() === 'USD');
    }
    getSwiftLabel() {
        if (this.beneficiary.method === 'local') {
            if (this.getCurrencyCode() === 'AUD') {
                return 'BSB';
            }
            if (this.getCurrencyCode() === 'EUR') {
                return 'BIC';
            }
            if (this.getCurrencyCode() === 'GBP') {
                return 'Sort Code';
            }
        }
        return 'SWIFT Code';
    }
    showRoutingNumber() {
        return this.beneficiary.method === 'local' && ['AUD', 'CAD', 'USD'].includes(this.getCurrencyCode());
    }
    getRoutingNumberLabel() {
        if (this.beneficiary.method === 'local') {
            if (this.getCurrencyCode() === 'AUD') {
                return 'Pay ID';
            }
            if (this.getCurrencyCode() === 'CAD') {
                return 'Transit Code';
            }
        }
        return 'Routing Number';
    }
    getCurrencyCode() {
        var _a, _b;
        return ((_a = this.currency) === null || _a === void 0 ? void 0 : _a.code) || ((_b = this.beneficiary.currency) === null || _b === void 0 ? void 0 : _b.code);
    }
};
BeneficiaryDetailsFormComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
BeneficiaryDetailsFormComponent.propDecorators = {
    beneficiary: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isLarge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    requireAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['beneficiaryDetailsForm',] }],
    accountHolderAddressForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['accountHolderAddressForm',] }],
    bankAddressForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['bankAddressForm',] }],
    intermediateBankAddressForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['intermediateBankAddressForm',] }]
};
BeneficiaryDetailsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'beneficiary-details-form',
        template: _raw_loader_beneficiary_details_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BeneficiaryDetailsFormComponent);



/***/ }),

/***/ "lQWK":
/*!*****************************************************************************!*\
  !*** ./src/app/common/currency-select-tab/currency-select-tab.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CurrencySelectTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySelectTabComponent", function() { return CurrencySelectTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_currency_select_tab_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./currency-select-tab.component.html */ "n/EQ");
/* harmony import */ var _currency_select_tab_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency-select-tab.component.scss */ "/HDL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/currencies/currencies.query */ "4pv/");










let CurrencySelectTabComponent = class CurrencySelectTabComponent {
    constructor(currenciesQuery, http) {
        this.currenciesQuery = currenciesQuery;
        this.http = http;
        this.currencyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.useShortCurrencyNames = false;
        this.moreButtonOptions = { text: '+', hasCaret: false };
        this.type = 'fees';
        this.setCurrencies = [];
        this.unsetCurrencies = [];
        this.faCaretDown = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCaretDown"];
        this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
    }
    ngOnInit() {
        this.currenciesQuery
            .selectEntity('USD')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(usd => (this.usd = usd));
        this.subscriptions.add(this.fetchEvent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([
            this.currenciesQuery
                .selectAll({
                filterBy: [
                    entity => {
                        switch (this.type) {
                            case 'deposit-instructions':
                                return entity.code !== 'USD' && entity.type === 'fiat';
                            default:
                                return entity.code !== 'USD';
                        }
                    },
                ],
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)),
            this.type === 'deposit-instructions'
                ? this.http.get(`/deposit-instructions`, {
                    params: this.user ? { userId: this.user.id } : {},
                })
                : this.http.get(`/fees`, { params: this.user ? { userId: this.user.id } : {} }),
        ])))
            .subscribe(([currencies, items]) => {
            this.setCurrencies = currencies.filter(currency => items.find(item => item.currency.code === currency.code));
            this.unsetCurrencies = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["xor"])(currencies, this.setCurrencies);
        }));
        this.fetchEvent.next();
    }
    selectCurrency(code) {
        this.subscribeCurrencyQuery(code);
        this.refreshTabs();
    }
    createTabSelectedCurrency(currency) {
        this.setCurrencies.push(currency);
        this.unsetCurrencies = this.unsetCurrencies.filter(data => data !== currency);
        this.subscribeCurrencyQuery(currency.code);
    }
    isMoreTabActive() {
        return this.unsetCurrencies.map(currency => currency.code).indexOf(this.currency.code) > -1;
    }
    refreshTabs() {
        this.fetchEvent.next();
    }
    getCurrencyName(currency) {
        if (!currency) {
            return '';
        }
        return this.useShortCurrencyNames ? currency.code : `${currency.code} - ${currency.name}`;
    }
    subscribeCurrencyQuery(code) {
        this.currenciesQuery
            .selectEntity(code)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(currency => {
            this.currencyChange.next(currency);
        });
    }
};
CurrencySelectTabComponent.ctorParameters = () => [
    { type: _store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_9__["CurrenciesQuery"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CurrencySelectTabComponent.propDecorators = {
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    currencyChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    useShortCurrencyNames: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    moreButtonOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
CurrencySelectTabComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'currency-select-tab',
        template: _raw_loader_currency_select_tab_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_currency_select_tab_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CurrencySelectTabComponent);



/***/ }),

/***/ "n/EQ":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/currency-select-tab/currency-select-tab.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"nav nav-tabs b-b-0 fee-schedule-tabs\">\n    <li class=\"nav-item\">\n        <a\n            class=\"nav-link clickable\"\n            [ngClass]=\"{ active: currency?.code === usd?.code }\"\n            (click)=\"selectCurrency(usd?.code); $event.preventDefault()\"\n            >{{ getCurrencyName(usd) }}</a\n        >\n    </li>\n    <li *ngFor=\"let item of setCurrencies\" class=\"nav-item\">\n        <a\n            class=\"nav-link clickable\"\n            [ngClass]=\"{ active: currency?.code === item.code }\"\n            (click)=\"selectCurrency(item.code); $event.preventDefault()\"\n            >{{ getCurrencyName(item) | truncate: false:14 }}</a\n        >\n    </li>\n    <li class=\"nav-item\" ngbDropdown container=\"body\" placement=\"bottom-left\" *ngIf=\"unsetCurrencies.length\">\n        <a class=\"nav-link clickable\" [ngClass]=\"{ active: isMoreTabActive() }\" ngbDropdownToggle>\n            {{ moreButtonOptions.text }}\n            <fa-icon *ngIf=\"moreButtonOptions.hasCaret\" [icon]=\"faCaretDown\"></fa-icon>\n        </a>\n        <div ngbDropdownMenu>\n            <div\n                class=\"clickable\"\n                ngbDropdownItem\n                *ngFor=\"let item of unsetCurrencies\"\n                (click)=\"createTabSelectedCurrency(item); $event.preventDefault()\"\n            >\n                {{ getCurrencyName(item) }}\n            </div>\n        </div>\n    </li>\n</ul>\n");

/***/ }),

/***/ "n3q5":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/video-player/video-player.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<iframe [src]=\"url | safeResourceUrl\" allowfullscreen></iframe>\n");

/***/ }),

/***/ "nYGv":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/profile-documents/file-item.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a *ngIf=\"file.status === 'safe' && file.signedUrl && canView; else processing\" [href]=\"file.signedUrl\" target=\"_blank\" rel=\"noopener\">\n    <div>{{ file.name }}</div>\n</a>\n<ng-template #processing>\n    <div *ngIf=\"file.status === 'processing'; else infected\" class=\"text-warning\">\n        {{ file.name }} <small>({{ 'common.scanning' | translate }})</small>\n    </div>\n</ng-template>\n<ng-template #infected>\n    <div *ngIf=\"file.status === 'infected'; else plain\" class=\"text-danger\">\n        {{ file.name }} <small>({{ 'common.virus-found' | translate }})</small>\n    </div>\n</ng-template>\n<ng-template #plain>\n    <div class=\"text-primary\">{{ file.name }}</div>\n</ng-template>\n<small *ngIf=\"file.userFile; else alternativeInfo\" class=\"text-muted cursor\"\n    >{{ file.size / 1024 / 1024 | number: '.2' }} MB / {{ file.userFile.type ? toStartCase(file.userFile.type) : 'Undeclared' }}</small\n>\n<ng-template #alternativeInfo>\n    <small class=\"text-muted\">{{ file.size / 1024 / 1024 | number: '.2' }} MB</small>\n</ng-template>\n");

/***/ }),

/***/ "niQX":
/*!************************************************************!*\
  !*** ./src/app/common/notification/notification.module.ts ***!
  \************************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.module */ "a6Df");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.component */ "93co");




let NotificationModule = class NotificationModule {
};
NotificationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"]],
        exports: [_notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"]],
        imports: [_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
    })
], NotificationModule);



/***/ }),

/***/ "nrBr":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/user-info-table/user-info-table.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-responsive\">\n    <ul *ngIf=\"user.type === 'business'\" class=\"nav nav-pills nav-fill mb-2\">\n        <li class=\"nav-item\">\n            <a href class=\"nav-link\" [ngClass]=\"{ active: currentTab === 'business' }\" (click)=\"currentTab = 'business'; $event.preventDefault()\">\n                {{ 'common.business' | translate }}\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a href class=\"nav-link\" [ngClass]=\"{ active: currentTab === 'manager' }\" (click)=\"currentTab = 'manager'; $event.preventDefault()\">\n                {{ 'common.manager' | translate }}\n            </a>\n        </li>\n    </ul>\n    <ng-container *ngIf=\"user.type === 'personal' || (user.type === 'business' && currentTab === 'manager'); else business\">\n        <table *ngIf=\"details\" class=\"table table-striped table-bordered\">\n            <tbody>\n                <tr *ngFor=\"let property of fields\">\n                    <td class=\"text-gray\">{{ getProperty(property) }}</td>\n                    <td>\n                        <ng-container *ngIf=\"property !== 'address'; else address\">\n                            {{ getValue(property) }}\n                        </ng-container>\n                        <ng-template #address>\n                            <postal-address [address]=\"details.address\"></postal-address>\n                        </ng-template>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </ng-container>\n    <ng-template #business>\n        <table *ngIf=\"businessDetails\" class=\"table table-striped table-bordered\">\n            <tbody>\n                <tr *ngFor=\"let property of businessFields\">\n                    <td class=\"text-gray\">{{ getProperty(property) }}</td>\n                    <td>\n                        <ng-container *ngIf=\"!['address', 'businessAddress'].includes(property)\">\n                            {{ getBusinessValue(property) }}\n                        </ng-container>\n                        <postal-address *ngIf=\"property === 'address'\" [address]=\"businessDetails.address\"></postal-address>\n                        <postal-address *ngIf=\"property === 'businessAddress'\" [address]=\"businessDetails.businessAddress\"></postal-address>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </ng-template>\n</div>\n");

/***/ }),

/***/ "o2Rg":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/password-strength-bar/password-strength-bar.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngb-progressbar [type]=\"color\" [value]=\"progress\" height=\"0.4rem\"></ngb-progressbar>\n");

/***/ }),

/***/ "oQQb":
/*!**************************************************************!*\
  !*** ./src/app/common/validators/min-validator.directive.ts ***!
  \**************************************************************/
/*! exports provided: MinValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinValidatorDirective", function() { return MinValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var MinValidatorDirective_1;



let MinValidatorDirective = MinValidatorDirective_1 = class MinValidatorDirective {
    ngOnChanges(changes) {
        if (changes.min) {
            this.min = changes.min.currentValue;
            if (this.onChanges) {
                this.onChanges();
            }
        }
    }
    validate(control) {
        if (this.min === undefined || this.min === null) {
            return null;
        }
        const required = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control);
        if (required !== null) {
            return null;
        }
        const v = +control.value;
        return v >= +this.min ? null : { actualValue: v, requiredValue: +this.min, min: true };
    }
    registerOnValidatorChange(fn) {
        this.onChanges = fn;
    }
};
MinValidatorDirective.propDecorators = {
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
MinValidatorDirective = MinValidatorDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[min][formControlName],[min][formControl],[min][ngModel]',
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                useExisting: MinValidatorDirective_1,
                multi: true,
            },
        ],
    })
], MinValidatorDirective);



/***/ }),

/***/ "p6gG":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/confirm-mail-reminder/confirm-mail-reminder.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span [ngClass]=\"{ 'text-line-through': user.status !== 'pending' }\">\n    {{ 'common.remember-email' | translate }}\n    <a href (click)=\"$event.preventDefault(); resend()\" *ngIf=\"user.status === 'pending' && !resendTriggered\">{{ 'common.resend' | translate }}</a>\n</span>\n");

/***/ }),

/***/ "pQbz":
/*!**************************************************************!*\
  !*** ./src/app/app/status-message/status-message.service.ts ***!
  \**************************************************************/
/*! exports provided: StatusMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusMessageService", function() { return StatusMessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let StatusMessageService = class StatusMessageService {
    constructor(componentFactoryResolver, http) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.http = http;
    }
    initializeListener(viewContainerRef, statusMessageComponent) {
        let insertedViewRef;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(undefined), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(120 * 1000))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http
            .get('/settings/status-message', {
            headers: { 'X-Ignore-Error-Handling': 'true' },
        })
            .pipe(
        // ignore errors
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(setting => setting && setting.value))))
            .subscribe(message => {
            if (this.message === message) {
                // no change in status
                return;
            }
            const wasEmpty = !this.message;
            this.message = message;
            if (wasEmpty && !!this.message) {
                // inject status message to given outlet, we have the <status-message-outlet> component therefore
                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(statusMessageComponent);
                const component = componentFactory.create(viewContainerRef.parentInjector);
                // insert into the outlet, to maintain DOM structure
                insertedViewRef = viewContainerRef.insert(component.hostView);
            }
            else if (!this.message && insertedViewRef) {
                insertedViewRef.destroy();
                insertedViewRef = undefined;
            }
        });
    }
};
StatusMessageService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
StatusMessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], StatusMessageService);



/***/ }),

/***/ "pjly":
/*!******************************************************************!*\
  !*** ./src/app/common/validators/decimal-validator.directive.ts ***!
  \******************************************************************/
/*! exports provided: DecimalValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecimalValidatorDirective", function() { return DecimalValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DecimalValidatorDirective_1;



let DecimalValidatorDirective = DecimalValidatorDirective_1 = class DecimalValidatorDirective {
    validate(control) {
        var _a;
        if (!control) {
            return null;
        }
        // Determines if control passes the required validator
        const required = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control);
        // Determines if control has required validator
        const isRequired = control.validator && control.validator({});
        if (isRequired !== null && required !== null) {
            return null;
        }
        const decimal = (_a = control.value) === null || _a === void 0 ? void 0 : _a.toString().split('.')[1];
        if (decimal && decimal.length > this.decimal) {
            return { invalidDecimal: true };
        }
        return null;
    }
};
DecimalValidatorDirective.propDecorators = {
    decimal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
DecimalValidatorDirective = DecimalValidatorDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[decimalValidator]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: DecimalValidatorDirective_1, multi: true }],
    })
], DecimalValidatorDirective);



/***/ }),

/***/ "pxZh":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/core/toastr/toastr.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"toastr-anchor\">\n    <div\n        *ngFor=\"let toast of toasts\"\n        [@flyInOut]\n        (click)=\"hide(toast)\"\n        (mouseover)=\"stopTimer(toast)\"\n        (mouseleave)=\"startTimer(toast)\"\n        class=\"toast toast-{{ toast.type }} media\"\n    >\n        <div class=\"d-flex pt-1 mr-3\">\n            <fa-icon [icon]=\"toast.icon\" size=\"2x\"></fa-icon>\n        </div>\n        <div class=\"media-body\">\n            <p class=\"toast-message\">\n                <b>{{ toast.title }}</b>\n            </p>\n            <p class=\"toast-message\">{{ toast.message }}</p>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "q0Sc":
/*!***************************************************************!*\
  !*** ./src/app/common/video-player/video-player.component.ts ***!
  \***************************************************************/
/*! exports provided: VideoPlayerComponent, playVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function() { return VideoPlayerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playVideo", function() { return playVideo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_video_player_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./video-player.component.html */ "n3q5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let VideoPlayerComponent = class VideoPlayerComponent {
};
VideoPlayerComponent.propDecorators = {
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
VideoPlayerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'video-player',
        template: _raw_loader_video_player_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], VideoPlayerComponent);

function playVideo(ngbModal) {
    return (url) => {
        const videoPlayer = ngbModal.open(VideoPlayerComponent, {
            windowClass: 'video-player',
            size: 'lg',
        });
        videoPlayer.componentInstance.url = url;
    };
}


/***/ }),

/***/ "qse/":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/address-form/address-form.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #addressForm=\"ngForm\" [ngClass]=\"{ 'ng-submitted': submitted }\" class=\"form-validation e2e-address-form\" novalidate>\n    <div class=\"form-group\">\n        <label class=\"form-control-label\" [ngClass]=\"{ 'font-md': isLarge }\" for=\"{{ prefix }}addressLine1\">{{\n            'address-form.street-and-number' | translate\n        }}</label>\n        <ng-select\n            id=\"{{ prefix }}addressLine1\"\n            name=\"addressLine1\"\n            bindLabel=\"name\"\n            [(ngModel)]=\"addressLine1\"\n            (change)=\"setAddress($event)\"\n            #addressLine1Input=\"ngModel\"\n            [ngClass]=\"{ 'ng-select-lg': isLarge }\"\n            [items]=\"placesStream | async\"\n            [typeahead]=\"placesAutocomplete\"\n            aria-autocomplete=\"false\"\n            autocomplete=\"false\"\n            [required]=\"requireAll\"\n            [addTag]=\"true\"\n            [disabled]=\"disabled\"\n            addTagText=\"Use\"\n        >\n            <ng-template ng-option-tmp let-item=\"item\">{{ item.description }}</ng-template>\n            <ng-template ng-footer-tmp>\n                <img src=\"/img/powered_by_google.png\" class=\"powered-by-google-brand\" alt=\"Powered by Google\" draggable=\"false\" />\n            </ng-template>\n        </ng-select>\n        <div *ngIf=\"addressLine1Input.invalid && (submitted || addressLine1Input.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"addressLine1Input?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"form-control-label\" [ngClass]=\"{ 'font-md': isLarge }\" for=\"{{ prefix }}addressLine2\">\n            {{ 'common.suite-unit-floor-building-optional' | translate }} <small class=\"text-muted\">({{ 'common.optional' | translate }})</small>\n        </label>\n        <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"{{ prefix }}addressLine2\"\n            name=\"addressLine2\"\n            [(ngModel)]=\"address.addressLine2\"\n            [ngClass]=\"{ 'form-control-lg': isLarge }\"\n            [disabled]=\"disabled\"\n            emptyToNull\n            #addressLine2=\"ngModel\"\n        />\n    </div>\n    <div class=\"row\">\n        <div class=\"form-group col-sm-14\">\n            <label class=\"form-control-label\" [ngClass]=\"{ 'font-md': isLarge }\" for=\"{{ prefix }}city\">{{ 'common.city' | translate }}</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"{{ prefix }}city\"\n                name=\"city\"\n                [(ngModel)]=\"address.city\"\n                #city=\"ngModel\"\n                [ngClass]=\"{ 'form-control-lg': isLarge }\"\n                autocomplete=\"address-level2\"\n                [required]=\"requireAll\"\n                [disabled]=\"disabled\"\n                emptyToNull\n            />\n            <div *ngIf=\"city.invalid && (submitted || city.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"city?.errors?.required\">{{ 'common.optional' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"form-group col-sm-10\">\n            <label class=\"form-control-label\" [ngClass]=\"{ 'font-md': isLarge }\" for=\"{{ prefix }}zipCode\">{{\n                'address-form.postal-code' | translate\n            }}</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"{{ prefix }}zipCode\"\n                name=\"zipCode\"\n                [(ngModel)]=\"address.zipCode\"\n                #zipCode=\"ngModel\"\n                [ngClass]=\"{ 'form-control-lg': isLarge }\"\n                autocomplete=\"postal-code\"\n                [required]=\"requireAll\"\n                [disabled]=\"disabled\"\n                emptyToNull\n            />\n            <div *ngIf=\"zipCode.invalid && (submitted || zipCode.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"zipCode?.errors?.required\">{{ 'common.optional' | translate }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"form-group col-sm-12\">\n            <label class=\"form-control-label\" [ngClass]=\"{ 'font-md': isLarge }\" for=\"{{ prefix }}state\">{{ 'common.state' | translate }}</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"{{ prefix }}state\"\n                name=\"state\"\n                [(ngModel)]=\"address.state\"\n                #state=\"ngModel\"\n                [ngClass]=\"{ 'form-control-lg': isLarge }\"\n                autocomplete=\"address-level1\"\n                [disabled]=\"disabled\"\n                emptyToNull\n            />\n            <div *ngIf=\"state.invalid && (submitted || state.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"state?.errors?.required\">{{ 'common.optional' | translate }}</div>\n            </div>\n        </div>\n        <div class=\"form-group col-sm-12\">\n            <label class=\"form-control-label\" [ngClass]=\"{ 'font-md': isLarge }\" for=\"{{ prefix }}country\">{{ 'common.country' | translate }}</label>\n            <ng-select\n                id=\"{{ prefix }}country\"\n                name=\"country\"\n                [(ngModel)]=\"address.country\"\n                bindLabel=\"name\"\n                bindValue=\"alpha2\"\n                [items]=\"countriesSortedByName\"\n                [clearable]=\"false\"\n                #country=\"ngModel\"\n                [ngClass]=\"{ 'ng-select-lg': isLarge }\"\n                [disabled]=\"disabled\"\n                autocomplete=\"false\"\n                aria-autocomplete=\"false\"\n                [required]=\"requireAll\"\n            ></ng-select>\n            <div *ngIf=\"country.invalid && (submitted || country.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"country?.errors?.required\">{{ 'common.optional' | translate }}</div>\n            </div>\n        </div>\n    </div>\n</form>\n");

/***/ }),

/***/ "rSOl":
/*!*****************************************************!*\
  !*** ./src/app/common/services/intercom.service.ts ***!
  \*****************************************************/
/*! exports provided: IntercomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntercomService", function() { return IntercomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _avatar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./avatar.service */ "tYXW");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session.service */ "6g7h");







let IntercomService = class IntercomService {
    constructor(session, router, avatarService) {
        this.avatarService = avatarService;
        this.isEnabled = false;
        window.intercomSettings = window.intercomSettings || {};
        this.boot();
        if (this.isEnabled) {
            session.userEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(session.userStream)).subscribe(([event, user]) => {
                const avatarUrl = this.avatarService.getAvatarUrl(user);
                if (event.type === _session_service__WEBPACK_IMPORTED_MODULE_6__["UserEventType"].LOGIN) {
                    window.intercomSettings = Object.assign(Object.assign(Object.assign({}, window.intercomSettings), { user_id: user.id, user_hash: user.intercomHash, name: user.name, email: user.email, created_at: new Date(user.createdAt).getTime(), avatar: {
                            type: 'avatar',
                            image_url: avatarUrl,
                        } }), Object(lodash__WEBPACK_IMPORTED_MODULE_3__["pick"])(user, ['accountNumber', 'status', 'approvedAt']));
                    this.update();
                }
                else if (event.type === _session_service__WEBPACK_IMPORTED_MODULE_6__["UserEventType"].LOGOUT) {
                    this.shutdown();
                    this.boot();
                }
            });
            router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe(() => {
                this.update();
            });
        }
    }
    boot() {
        if (window.INTERCOM_APP_ID) {
            if (!window.Intercom) {
                /* eslint-disable */
                ;
                (function () {
                    var w = window;
                    var ic = w.Intercom;
                    if (typeof ic === 'function') {
                        ic('reattach_activator');
                        ic('update', w.intercomSettings);
                    }
                    else {
                        var d = document;
                        var i = function () {
                            i.c(arguments);
                        };
                        i.q = [];
                        i.c = function (args) {
                            i.q.push(args);
                        };
                        w.Intercom = i;
                        const l = () => {
                            var s = d.createElement('script');
                            s.type = 'text/javascript';
                            s.async = true;
                            s.src = `https://widget.intercom.io/widget/${window.INTERCOM_APP_ID}`;
                            var x = d.getElementsByTagName('script')[0];
                            x.parentNode.insertBefore(s, x);
                        };
                        if (w.attachEvent) {
                            ;
                            w.attachEvent('onload', l);
                        }
                        else {
                            w.addEventListener('load', l, false);
                        }
                    }
                })();
                /* eslint-enable */
            }
            this.isEnabled = true;
            window.Intercom('boot', { app_id: window.INTERCOM_APP_ID });
        }
    }
    trackEvent(event, data) {
        if (this.isEnabled) {
            window.Intercom('trackEvent', event, data);
        }
    }
    shutdown() {
        if (this.isEnabled) {
            window.intercomSettings = {};
            window.Intercom('shutdown');
            this.isEnabled = false;
        }
    }
    update(options) {
        if (this.isEnabled) {
            window.Intercom('update', options);
        }
    }
    hide() {
        if (this.isEnabled) {
            window.Intercom('hide');
        }
    }
    show() {
        if (this.isEnabled) {
            window.Intercom('show');
        }
    }
    startConversation(prePopulatedMessage) {
        if (this.isEnabled) {
            window.Intercom('showNewMessage', prePopulatedMessage);
        }
    }
};
IntercomService.ctorParameters = () => [
    { type: _session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _avatar_service__WEBPACK_IMPORTED_MODULE_5__["AvatarService"] }
];
IntercomService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], IntercomService);



/***/ }),

/***/ "rnio":
/*!*************************************************************************!*\
  !*** ./src/app/common/profile-documents/profile-documents.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProfileDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDocumentsComponent", function() { return ProfileDocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_documents_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile-documents.component.html */ "6YVt");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common.mixin */ "s/H0");
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../file */ "B1CS");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../list.component */ "aJRI");
/* harmony import */ var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/confirmation.service */ "fTmd");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/session.service */ "6g7h");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/toastr.service */ "N/y2");
/* harmony import */ var _user_file_form_user_file_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-file-form/user-file-form.component */ "3CWR");

















let ProfileDocumentsComponent = class ProfileDocumentsComponent extends _list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"] {
    constructor(http, ngbModal, changeDetector, route, router, session, confirmation, toastr, translate) {
        super(http, ngbModal, changeDetector, route, router, session, confirmation);
        this.toastr = toastr;
        this.translate = translate;
        this.buttonAlign = 'left';
        this.showButton = true;
        this.canCreate = true;
        this.canView = true;
        this.canEdit = true;
        this.canDelete = true;
        this.onUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isUploading = false;
        this.files = [];
        this.toStartCase = _common_mixin__WEBPACK_IMPORTED_MODULE_10__["toStartCase"];
        this.getFileUrl = _file__WEBPACK_IMPORTED_MODULE_11__["buildFileUrl"];
        this.faTimes = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"];
        this.faEdit = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEdit"];
    }
    ngOnInit() {
        this.apiUrl = `/users/${this.user.id}/files`;
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    uploadFiles() {
        this.submit();
        if (!this.isValid()) {
            return;
        }
        this.isUploading = true;
        this.subscriptions.add(this.upload()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.isUploading = false;
        }))
            .subscribe(results => {
            if (results.some(result => !result)) {
                this.toastr.error(this.translate.instant('profile-documents.some-requests-has-failed-please-try-again'));
                return;
            }
            else if (results.length > 0) {
                this.toastr.success(this.translate.instant('common.file-uploaded'));
            }
            this.onUpload.emit();
        }));
    }
    upload(options) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(this.files.map((file, index) => {
            const headers = {
                'X-File-Name': encodeURIComponent(file.name),
                'Content-Type': file.type,
                'X-No-Toast': 'true',
            };
            if (options && options.purpose) {
                headers['X-File-Purpose'] = options.purpose;
            }
            return this.http
                .post(this.apiUrl, file, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headers),
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(result => [result, index]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(false)));
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(results => {
            // Remove successful uploads from pending
            const successfulUploads = [];
            for (const result of results) {
                if (!Array.isArray(result)) {
                    continue;
                }
                successfulUploads.push(result[1]);
            }
            this.files = this.files.filter((_, index) => !successfulUploads.includes(index));
            this.updateEvent.next();
            return results.map(result => (Array.isArray(result) ? result[0] : result));
        }));
    }
    deleteFile(file) {
        this.subscriptions.add(this.confirmation
            .show({
            type: 'danger',
            text: `${this.translate.instant('common.are-you-sure-want-to-delete-file')}<br>${this.translate.instant('common.you-cant-undo-action')}`,
            confirmText: this.translate.instant('common.delete'),
            confirmClass: 'danger',
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(result => result === _services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmationResult"].CONFIRMED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(() => this.http.delete(`${this.apiUrl}/${file.id}`)))
            .subscribe(() => {
            this.updateEvent.next();
            this.toastr.success(`${file.name} ${this.translate.instant('common.removed')}`);
        }));
    }
    showFileModal(file) {
        const fileForm = this.ngbModal.open(_user_file_form_user_file_form_component__WEBPACK_IMPORTED_MODULE_16__["UserFileFormComponent"], {
            backdrop: 'static',
            windowClass: 'modal-primary',
        });
        const fileFormComponent = fileForm.componentInstance;
        fileFormComponent.file = file;
        if (file.userFile) {
            ;
            fileFormComponent.user = this.user;
        }
        fileFormComponent.onSave.subscribe(() => {
            this.updateEvent.next();
            fileForm.close();
        });
    }
    submit() {
        if (this.dropzone) {
            this.dropzone.submit();
        }
    }
    isValid() {
        return this.dropzone.isValid();
    }
};
ProfileDocumentsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"] },
    { type: _services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmationService"] },
    { type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_15__["ToastrService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
ProfileDocumentsComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    buttonAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    showButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    canCreate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    canView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    canEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    canDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    purpose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    requiredMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    dropzone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['dropzone',] }]
};
ProfileDocumentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'profile-documents',
        template: _raw_loader_profile_documents_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ProfileDocumentsComponent);



/***/ }),

/***/ "rtfT":
/*!****************************************************************************************!*\
  !*** ./src/app/app/core/header/header-notifications/header-notifications.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HeaderNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNotificationsComponent", function() { return HeaderNotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_notifications_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header-notifications.component.html */ "8F31");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/services/notifications.service */ "A3TI");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/services/session.service */ "6g7h");











let HeaderNotificationsComponent = class HeaderNotificationsComponent {
    constructor(http, session, notificationsService, router, translate) {
        this.http = http;
        this.session = session;
        this.notificationsService = notificationsService;
        this.router = router;
        this.translate = translate;
        this.faBell = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBell"];
        this.faEye = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEye"];
        this.fetchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(this.notificationsService.notifyEvent, this.fetchEvent, this.session.userStream)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(600), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(([_, __, user]) => this.http.get(`/users/${user.id}/notifications`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('limit', 10 + ''),
        })))
            .subscribe(notifications => {
            this.notifications = notifications;
        }));
        this.notificationsService.notifyEvent.next();
        this.fetchEvent.next();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    markAllAsRead() {
        this.subscriptions.add(this.session.userStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(user => this.http.post(`/users/${user.id}/notifications`, {
            id: Math.floor(Math.random() * 10000),
            jsonrpc: '2.0',
            method: 'markAllAsRead',
        }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json-rpc' }),
        })))
            .subscribe(() => {
            this.fetchEvent.next();
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
                yield this.router.navigate(['/notifications']);
            }
        });
    }
    handleDropdownClosed(payload) {
        const unreadNotifications = this.notifications.filter(notification => !notification.read);
        if (!payload && unreadNotifications.length) {
            this.markAllAsRead();
        }
    }
};
HeaderNotificationsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] },
    { type: _common_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
HeaderNotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'header-notifications',
        template: _raw_loader_header_notifications_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], HeaderNotificationsComponent);



/***/ }),

/***/ "s/H0":
/*!****************************************!*\
  !*** ./src/app/common/common.mixin.ts ***!
  \****************************************/
/*! exports provided: convertToISODate, convertPercentage, toCountryCallingCode, nanToNull, emptyToNull, toStartCase, isZero, formatAccountNumber, deepOmitEmptyProperties, searchCountryCode, transformAddress, dataUrlToBlob, permissionMap, determineAccountBillStatus, readFileAsDataURL, isEmail, isAccountNumber, findCountry, formatAddressToUSFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToISODate", function() { return convertToISODate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertPercentage", function() { return convertPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCountryCallingCode", function() { return toCountryCallingCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanToNull", function() { return nanToNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyToNull", function() { return emptyToNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toStartCase", function() { return toStartCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isZero", function() { return isZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAccountNumber", function() { return formatAccountNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepOmitEmptyProperties", function() { return deepOmitEmptyProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCountryCode", function() { return searchCountryCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformAddress", function() { return transformAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataUrlToBlob", function() { return dataUrlToBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permissionMap", function() { return permissionMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineAccountBillStatus", function() { return determineAccountBillStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFileAsDataURL", function() { return readFileAsDataURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return isEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAccountNumber", function() { return isAccountNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findCountry", function() { return findCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAddressToUSFormat", function() { return formatAddressToUSFormat; });
/* harmony import */ var _aerapass_country_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aerapass/country-data */ "eU/h");
/* harmony import */ var _aerapass_country_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aerapass_country_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validator/lib/isEmail */ "eWa3");
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countries */ "Gq6/");





function convertToISODate(date) {
    return `${date.slice(4)}-${date.slice(2, 4)}-${date.slice(0, 2)}`;
}
function convertPercentage(percentage) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_1___default.a(percentage).div(100).toPrecision(9, 1);
}
/**
 * Returns the calling code of a country
 * @param country Alpha2 of a country
 */
function toCountryCallingCode(country) {
    var _a, _b;
    return (_b = (_a = _countries__WEBPACK_IMPORTED_MODULE_4__["countryMap"][country]) === null || _a === void 0 ? void 0 : _a.countryCallingCodes[0]) !== null && _b !== void 0 ? _b : '';
}
function nanToNull(value) {
    return isNaN(value) ? null : value;
}
function emptyToNull(value) {
    return !value ? null : value;
}
function toStartCase(text) {
    return text ? Object(lodash__WEBPACK_IMPORTED_MODULE_2__["startCase"])(text.replace(/-/g, ' ')) : '';
}
function isZero(value) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_1___default.a(value).isZero();
}
function formatAccountNumber(value) {
    return `${value.substring(0, 2)} ${value.substring(2, 6)} ${value.substring(6, 10)} ${value.substring(10)}`;
}
/**
 * Removes properties with null or undefined values
 */
function deepOmitEmptyProperties(object) {
    if (typeof object !== 'object') {
        throw new Error('Argument not an object');
    }
    object = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["omitBy"])(object, prop => prop === null || prop === undefined);
    for (const key in object) {
        if (Array.isArray(object[key])) {
            object[key] = object[key].map((item) => {
                if (typeof item === 'object') {
                    return deepOmitEmptyProperties(item);
                }
                return item;
            });
        }
        else if (typeof object[key] === 'object') {
            object[key] = deepOmitEmptyProperties(object[key]);
        }
    }
    return object;
}
function searchCountryCode(term, country) {
    return (country.alpha2.toLocaleLowerCase().includes(term.toLocaleLowerCase()) ||
        country.countryCallingCodes[0].toLocaleLowerCase().includes(term.toLocaleLowerCase()));
}
function transformAddress(address) {
    return address.addressLine1 ? { name: address.addressLine1 } : null;
}
function dataUrlToBlob(dataUrl, type) {
    const byteString = atob(dataUrl.split(',')[1]);
    const ia = new Uint8Array(byteString.length);
    let i = byteString.length;
    while (i--) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type });
}
const permissionMap = {
    'payment-swift': 'Swift',
    'payment-local': 'Local',
    'payment-crypto': 'Crypto',
    redeem: 'Redeem',
    cards: 'Cards',
    conversions: 'Conversions',
    invoices: 'Invoices',
    marketplaces: 'Marketplaces',
    trades: 'Trades',
    'spot-trades': 'Spot Trades',
};
function determineAccountBillStatus(accountBill) {
    if (new bignumber_js__WEBPACK_IMPORTED_MODULE_1___default.a(accountBill.amount).eq(0)) {
        return 'free';
    }
    if (!accountBill.transaction) {
        return 'unpaid';
    }
    return 'paid';
}
function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = error => {
            reject(error);
        };
        reader.readAsDataURL(file);
    });
}
function isEmail(input) {
    return validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3___default()(input);
}
function isAccountNumber(input, option) {
    const format = RegExp('^[A-Z]{2}[0-9]{10}$', 'g');
    const value = !!option && option.allowSpaces ? input.replace(/\s/g, '') : input;
    return (format.test(value) &&
        parseInt(`${value.charCodeAt(0)}${value.charCodeAt(1)}${value.substring(2)}`, 10) % 97 === 1);
}
function findCountry(alpha2) {
    return _aerapass_country_data__WEBPACK_IMPORTED_MODULE_0__["countries"].all.find(country => country.alpha2 === alpha2);
}
function formatAddressToUSFormat(address) {
    if (!address) {
        return '';
    }
    const { addressLine1, addressLine2, city, state, zipCode, country } = address;
    const countryName = country ? _countries__WEBPACK_IMPORTED_MODULE_4__["countryMap"][country].name : '';
    return `${addressLine1}\n${addressLine2 ? `${addressLine2}\n` : ''}${city ? city + ' ' : ''}${state ? state + ' ' : ''}${zipCode ? zipCode : ''}${countryName ? '\n' + countryName : ''}`;
}


/***/ }),

/***/ "s5DX":
/*!*************************************************!*\
  !*** ./src/app/app/core/menu/menu.component.ts ***!
  \*************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu.component.html */ "R86q");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "uB96");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "4Bjl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/services/session.service */ "6g7h");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu.service */ "jRoP");













let MenuComponent = class MenuComponent {
    constructor(session, router, menuService, translate) {
        this.session = session;
        this.router = router;
        this.menuService = menuService;
        this.translate = translate;
        this.faArrowAltToBottom = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faArrowAltToBottom"];
        this.faDesktop = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faDesktop"];
        this.faPaperPlane = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPaperPlane"];
        this.faBook = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBook"];
        this.faCreditCardFront = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCreditCardFront"];
        this.faToolbox = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faToolbox"];
        this.faInbox = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faInbox"];
        this.faCog = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCog"];
        this.faUser = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"];
        this.faUsers = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUsers"];
        this.faCity = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCity"];
        this.faWallet = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faWallet"];
        this.faBell = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBell"];
        this.faCaretRight = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCaretRight"];
        this.faSync = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSync"];
        this.faBalanceScale = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBalanceScale"];
        this.faUniversity = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUniversity"];
        this.faCompass = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCompass"];
        this.faChartNetwork = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChartNetwork"];
        this.faLink = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLink"];
        this.faShieldAlt = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faShieldAlt"];
        this.faReceipt = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faReceipt"];
        this.faFileInvoice = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileInvoice"];
        this.faTimes = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTimes"];
        this.faAngleDown = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faAngleDown"];
        this.faUserFriends = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserFriends"];
        this.faChartBar = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChartBar"];
        this.faPlus = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPlus"];
        this.faMinus = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faMinus"];
        this.faExchange = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faExchange"];
        this.faBox = _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBox"];
        this.faSitemap = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSitemap"];
        this.faChartLine = _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChartLine"];
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].appName;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]))
            .subscribe((event) => {
            this.activeMenu = event.url;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    isActive(state, strict = false) {
        return this.router.isActive(state, strict);
    }
    isOpen(menu) {
        return this.activeMenu === menu;
    }
    toggleMenu(menu) {
        this.activeMenu = this.activeMenu !== menu ? menu : undefined;
    }
    closeMobileNav() {
        this.menuService.mobileNav = _menu_service__WEBPACK_IMPORTED_MODULE_12__["MobileNavLayout"].HIDDEN;
    }
    get activeMenu() {
        return this._activeMenu;
    }
    set activeMenu(route) {
        if (!route) {
            this._activeMenu = undefined;
            return;
        }
        if (route.startsWith('/admin')) {
            route = route.substring('/admin'.length);
        }
        if (route.startsWith('/')) {
            route = route.substring(1);
        }
        const routeParts = route.split('/');
        this._activeMenu = routeParts[0] || undefined;
    }
};
MenuComponent.ctorParameters = () => [
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _menu_service__WEBPACK_IMPORTED_MODULE_12__["MenuService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('toggleMenu', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('280ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('280ms ease-out')),
            ]),
        ],
    })
], MenuComponent);



/***/ }),

/***/ "sOC6":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/uuid/uuid.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<copy-wrap [value]=\"value\">\n    <span [ngClass]=\"ngClass\" placement=\"right\" [ngbTooltip]=\"value\">{{ value | truncate: false:7:'' }}</span>\n</copy-wrap>\n");

/***/ }),

/***/ "sVzT":
/*!*****************************************************************************************!*\
  !*** ./src/app/common/deposit-instruction-table/deposit-instruction-table.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DepositInstructionTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositInstructionTableComponent", function() { return DepositInstructionTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_deposit_instruction_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./deposit-instruction-table.component.html */ "JK3a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _transactions_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transactions.mixins */ "HiCw");






let DepositInstructionTableComponent = class DepositInstructionTableComponent {
    constructor(translate) {
        this.translate = translate;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appName;
        this.showWarning = false;
        this.showMethod = true;
        this.showCurrency = false;
        this.borderless = false;
        this.calculateCreditableAmount = _transactions_mixins__WEBPACK_IMPORTED_MODULE_5__["calculateCreditableAmount"];
    }
    /** For local method branching */
    getAccountNumberLabel() {
        var _a;
        if (this.beneficiary.method === 'local') {
            if (((_a = this.beneficiary.currency) === null || _a === void 0 ? void 0 : _a.code) === 'EUR') {
                return 'IBAN';
            }
        }
        if (this.beneficiary.method === 'crypto') {
            return `${this.translate.instant('common.wallet-address')}`;
        }
        return `${this.translate.instant('common.account-number')}`;
    }
    showSwift() {
        return !(this.beneficiary.method === 'local' && this.beneficiary.currency.code === 'USD');
    }
    getSwiftLabel() {
        if (this.beneficiary.method === 'local') {
            if (this.beneficiary.currency.code === 'AUD') {
                return 'BSB';
            }
            if (this.beneficiary.currency.code === 'EUR') {
                return 'BIC';
            }
            if (this.beneficiary.currency.code === 'GBP') {
                return 'Sort Code';
            }
        }
        return `${this.translate.instant('common.swift-code')}`;
    }
    showRoutingNumber() {
        return this.beneficiary.method === 'local' && ['AUD', 'CAD', 'USD'].includes(this.beneficiary.currency.code);
    }
    getRoutingNumberLabel() {
        if (this.beneficiary.method === 'local') {
            if (this.beneficiary.currency.code === 'AUD') {
                return 'Pay ID';
            }
            if (this.beneficiary.currency.code === 'CAD') {
                return 'Transit Code';
            }
        }
        return 'Routing Number';
    }
};
DepositInstructionTableComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
DepositInstructionTableComponent.propDecorators = {
    beneficiary: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    transaction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showWarning: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showMethod: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showCurrency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    borderless: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
DepositInstructionTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'deposit-instruction-table',
        template: _raw_loader_deposit_instruction_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DepositInstructionTableComponent);



/***/ }),

/***/ "sjdE":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/dropzone/dropzone.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n    *ngIf=\"canCreate\"\n    ngfDrop\n    [accept]=\"'image/jpeg,image/gif,image/png,application/pdf' + (allowVideo ? ',video/mp4' : '')\"\n    maxSize=\"52428800\"\n    selectable=\"true\"\n    [files]=\"files\"\n    (filesChange)=\"files = $event; filesChange.next(files)\"\n    class=\"dropzone\"\n    [ngClass]=\"{\n        'ng-invalid': files?.length === 0 && existingFiles?.length === 0 && submitted,\n        dragover: isDragValid,\n        'invalid-dragover': isDragInvalid\n    }\"\n    [(invalidDrag)]=\"isDragInvalid\"\n    [(validDrag)]=\"isDragValid\"\n>\n    <fa-icon class=\"dz-icon\" [icon]=\"faCloudUpload\"></fa-icon>\n    <div class=\"small\">\n        <span *ngIf=\"!isDragValid && !isDragInvalid\"> {{ 'common.drag-files-here' | translate }} </span>\n        <span *ngIf=\"isDragValid\" class=\"valid\">{{ 'common.drop-file' | translate }}</span>\n        <span *ngIf=\"isDragInvalid\" class=\"invalid\">{{ 'common.this-file-is-invalid' | translate }}</span>\n    </div>\n</div>\n<div class=\"small text-muted\" *ngIf=\"canCreate\">\n    {{ 'common.the-following-image-format' | translate }}: jpg, gif, png, pdf{{ allowVideo ? ', mp4' : '' }} (Max. 5{{ allowVideo ? '0' : '' }}MB)\n</div>\n<div *ngIf=\"files?.length === 0 && existingFiles?.length === 0 && submitted\" class=\"error-messages\">\n    <div class=\"form-control-feedback\">{{ requiredMessage || 'File is required.' }}</div>\n</div>\n<div class=\"table-responsive\" *ngIf=\"showTable && ((files && files.length > 0) || (existingFiles && existingFiles.length > 0))\">\n    <table class=\"table table-hover align-items-center table-borderless mt-1\">\n        <thead>\n            <tr>\n                <th scope=\"col\" colspan=\"2\">{{ 'common.file-name' | translate }}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr class=\"bg-white e2e-file\" *ngFor=\"let existingFile of existingFiles\">\n                <th scope=\"row\">\n                    <file-item [file]=\"existingFile\"></file-item>\n                </th>\n                <td class=\"text-right\" nowrap>\n                    <button *ngIf=\"canDelete\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"onDelete.emit(existingFile)\">\n                        <fa-icon [icon]=\"faTimes\"></fa-icon>\n                    </button>\n                </td>\n            </tr>\n            <tr class=\"bg-white e2e-file\" *ngFor=\"let item of files; let i = index\">\n                <th scope=\"row\">\n                    <div *ngIf=\"['image/gif', 'image/png', 'image/jpeg'].indexOf(item.type) >= 0\">\n                        <div class=\"previewIcon\" [ngfBackground]=\"item\"></div>\n                    </div>\n                    <div>{{ item.name }}</div>\n                    <small class=\"text-muted\">{{ item.type }} / {{ item.size / 1024 / 1024 | number: '.2' }} MB</small>\n                </th>\n                <td class=\"text-right\" nowrap>\n                    <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"files.splice(i, 1)\">\n                        <fa-icon [icon]=\"faTimes\"></fa-icon>\n                    </button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n");

/***/ }),

/***/ "su5s":
/*!***********************************************!*\
  !*** ./src/app/common/account-number.pipe.ts ***!
  \***********************************************/
/*! exports provided: AccountNumberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNumberPipe", function() { return AccountNumberPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.mixin */ "s/H0");



let AccountNumberPipe = class AccountNumberPipe {
    transform(value) {
        if (!value || !Object(_common_mixin__WEBPACK_IMPORTED_MODULE_2__["isAccountNumber"])(value)) {
            return value ? value : '';
        }
        return Object(_common_mixin__WEBPACK_IMPORTED_MODULE_2__["formatAccountNumber"])(value);
    }
};
AccountNumberPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'accountNumber' })
], AccountNumberPipe);



/***/ }),

/***/ "tYXW":
/*!***************************************************!*\
  !*** ./src/app/common/services/avatar.service.ts ***!
  \***************************************************/
/*! exports provided: AvatarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarService", function() { return AvatarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ "Hppe");
var AvatarService_1;



let AvatarService = AvatarService_1 = class AvatarService {
    constructor(storage) {
        this.storage = storage;
        this.timestamp = this.storage.hasItem(AvatarService_1.AVATAR_CACHE_KEY)
            ? this.storage.getItem(AvatarService_1.AVATAR_CACHE_KEY)
            : '1';
    }
    set timestamp(value) {
        this._timestamp = ~~value;
        this.storage.setItem(AvatarService_1.AVATAR_CACHE_KEY, this.timestamp);
    }
    get timestamp() {
        return this._timestamp + '';
    }
    reload() {
        this.timestamp = Date.now() + '';
    }
    getAvatarUrl(user) {
        return `/.api/users/${user.id}/avatar` + `?v=${this.timestamp}`;
    }
};
AvatarService.AVATAR_CACHE_KEY = 'avatar_last_cached_at';
AvatarService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
];
AvatarService = AvatarService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AvatarService);



/***/ }),

/***/ "ucbR":
/*!*********************************************************************************!*\
  !*** ./src/app/common/confirm-mail-reminder/confirm-mail-reminder.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConfirmMailReminderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmMailReminderComponent", function() { return ConfirmMailReminderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirm_mail_reminder_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirm-mail-reminder.component.html */ "p6gG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/core/user.service */ "AxWo");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toastr.service */ "N/y2");






let ConfirmMailReminderComponent = class ConfirmMailReminderComponent {
    constructor(toastr, userService, translate) {
        this.toastr = toastr;
        this.userService = userService;
        this.translate = translate;
        this.resendTriggered = false;
    }
    resend() {
        this.resendTriggered = true;
        this.userService.resendActivationMail(this.user.id).subscribe(() => {
            this.toastr.success(this.translate.instant('common.mail-confirmation-sent-again'));
        }, () => {
            this.resendTriggered = false;
        });
    }
};
ConfirmMailReminderComponent.ctorParameters = () => [
    { type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _services_core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
ConfirmMailReminderComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
ConfirmMailReminderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'confirm-mail-reminder',
        template: _raw_loader_confirm_mail_reminder_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ConfirmMailReminderComponent);



/***/ }),

/***/ "v0SE":
/*!*********************************************************************!*\
  !*** ./src/app/common/currency-select/currency-select.component.ts ***!
  \*********************************************************************/
/*! exports provided: CurrencySelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySelectComponent", function() { return CurrencySelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_currency_select_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./currency-select.component.html */ "jL3D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/currencies/currencies.query */ "4pv/");
/* harmony import */ var _store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/wallets/wallets.query */ "O9sj");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/session.service */ "6g7h");












let CurrencySelectComponent = class CurrencySelectComponent {
    constructor(currenciesQuery, walletsQuery, session, translate) {
        this.currenciesQuery = currenciesQuery;
        this.walletsQuery = walletsQuery;
        this.session = session;
        this.translate = translate;
        this.currencyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](true);
        this.placeholder = `${this.translate.instant('common.select-currency')}`;
        this.disabled = false;
        this.required = false;
        this.isLarge = false;
        this.currencyTypes = ['fiat', 'crypto'];
        this.salesProceeds = false;
        this.useFullName = false;
        this.hideZeroBalance = false;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].appName;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.criteria = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({
            currencyTypes: this.currencyTypes,
            depositable: this.depositable,
            holdable: this.holdable,
            transferable: this.transferable,
        });
        this.balances$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(this.currenciesQuery.selectAll(), this.walletsQuery.balances$, this.criteria).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(([currencies, wallets, criteria]) => {
            let balances;
            balances = currencies
                .filter(currency => {
                if (this.filterBy && !this.filterBy.includes(currency.code)) {
                    return false;
                }
                let query = this.currencyTypes.includes(currency.type);
                if (criteria.depositable !== undefined) {
                    query = query && currency.depositable === criteria.depositable;
                }
                if (criteria.holdable !== undefined) {
                    query = query && currency.holdable === criteria.holdable;
                }
                if (criteria.transferable !== undefined) {
                    query = query && currency.transferable === criteria.transferable;
                }
                return query;
            })
                .map(currency => {
                const wallet = wallets.find(w => w.currency.code === currency.code);
                const balance = (wallet && wallet.availableBalance) || 0;
                const salesProceeds = wallet
                    ? new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(wallet.usdValue).minus(wallet.topupAmount).toFixed(2, 1)
                    : 0;
                return Object.assign(Object.assign({}, currency), { balance: new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(balance).toFixed(currency.decimalPlaces, 1), usdValue: wallet ? wallet.usdValue : '0.00', salesProceeds });
            })
                .filter(wallet => (this.hideZeroBalance ? !new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(wallet.balance).isZero() : true));
            if (!balances.length) {
                balances = currencies
                    .filter(currency => currency.code === (this.currencyTypes.includes('fiat') ? 'USD' : 'BTC'))
                    .map(currency => (Object.assign(Object.assign({}, currency), { balance: '0.00', usdValue: '0.00', salesProceeds: '0.00' })));
            }
            return balances;
        }));
    }
    ngOnChanges() {
        var _a;
        (_a = this.criteria) === null || _a === void 0 ? void 0 : _a.next({
            currencyTypes: this.currencyTypes,
            depositable: this.depositable,
            holdable: this.holdable,
            transferable: this.transferable,
        });
    }
    ngAfterContentInit() {
        this.subscriptions.add(this.balances$.subscribe(balances => {
            if (this.currency === undefined) {
                this.currency =
                    balances.find(balance => balance.code === this.session.user.preferredCurrency.code) ||
                        balances.find(balance => balance.code === 'USD') ||
                        balances.find(balance => balance.code === 'BTC') ||
                        balances[0];
                this.currencyChange.emit(this.currency);
            }
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    compareCurrencies(a, b) {
        return a.code === b.code;
    }
};
CurrencySelectComponent.ctorParameters = () => [
    { type: _store_currencies_currencies_query__WEBPACK_IMPORTED_MODULE_9__["CurrenciesQuery"] },
    { type: _store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_10__["WalletsQuery"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
CurrencySelectComponent.propDecorators = {
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    currencyChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isLarge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    currencyTypes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    depositable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    holdable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    transferable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    filterBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    salesProceeds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    currencyInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['currencyInput', { static: true },] }],
    useFullName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    hideZeroBalance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
CurrencySelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'currency-select',
        template: _raw_loader_currency_select_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        viewProviders: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"],
                useFactory: (ngForm) => ngForm,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]]],
            },
        ],
    })
], CurrencySelectComponent);



/***/ }),

/***/ "v5v3":
/*!***************************************************!*\
  !*** ./src/app/app/not-found/not-found.module.ts ***!
  \***************************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/common.module */ "a6Df");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found.component */ "NLVd");




let NotFoundModule = class NotFoundModule {
};
NotFoundModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]],
        exports: [_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]],
        imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
    })
], NotFoundModule);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/not-found/not-found.component */ "NLVd");
/* harmony import */ var _organization_organization_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organization/organization.auth-guard */ "duKP");





const routes = [
    {
        path: 'admin',
        loadChildren: () => Promise.all(/*! import() | admin-admin-module */[__webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~deposit-deposit-module~discover-discover-modul~d7f9d518"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~embedded-embedded-module~fees-fees-module~kyc-~f982372e"), __webpack_require__.e("default~admin-admin-module~deposit-deposit-module~discover-discover-module~organization-organization~bea567be"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-cards-user-cards-module~user-redemption-u~0405aa63"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-activities-user-activities-module~user-re~c1f796cf"), __webpack_require__.e("default~admin-admin-module~deposit-deposit-module~organization-organization-module~transfer-transfer~3ea4832b"), __webpack_require__.e("default~account-account-module~admin-admin-module~mailbox-mailbox-module~user-redemption-user-redemp~5bc07ea6"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-redemption-user-redemption-module~user-sp~b2c80beb"), __webpack_require__.e("default~admin-admin-module~mailbox-mailbox-module~organization-organization-module~user-invoices-use~5d18fcc7"), __webpack_require__.e("default~admin-admin-module~organization-organization-module~user-invoices-user-invoices-module"), __webpack_require__.e("default~admin-admin-module~user-spot-trading-user-spot-trading-module~user-trades-user-trades-module"), __webpack_require__.e("default~admin-admin-module~user-redemption-user-redemption-module"), __webpack_require__.e("default~admin-admin-module~user-spot-trading-user-spot-trading-module"), __webpack_require__.e("default~admin-admin-module~user-trades-user-trades-module"), __webpack_require__.e("default~admin-admin-module~mailbox-mailbox-module"), __webpack_require__.e("default~admin-admin-module~discover-discover-module"), __webpack_require__.e("default~admin-admin-module~organization-organization-module"), __webpack_require__.e("common"), __webpack_require__.e("admin-admin-module")]).then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(mod => mod.AdminModule),
    },
    {
        path: 'account',
        loadChildren: () => Promise.all(/*! import() | account-account-module */[__webpack_require__.e("default~account-account-module~admin-admin-module~mailbox-mailbox-module~user-redemption-user-redemp~5bc07ea6"), __webpack_require__.e("account-account-module")]).then(__webpack_require__.bind(null, /*! ./account/account.module */ "jcJX")).then(mod => mod.AccountModule),
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~deposit-deposit-module~discover-discover-modul~d7f9d518"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~embedded-embedded-module~fees-fees-module~kyc-~f982372e"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-cards-user-cards-module~user-redemption-u~0405aa63"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-activities-user-activities-module~user-re~c1f796cf"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-redemption-user-redemption-module~user-sp~b2c80beb"), __webpack_require__.e("default~dashboard-dashboard-module~transactions-transactions-module~user-redemption-user-redemption-~a37267c0"), __webpack_require__.e("default~dashboard-dashboard-module~user-activities-user-activities-module~user-redemption-user-redem~96c34c07"), __webpack_require__.e("default~dashboard-dashboard-module~user-redemption-user-redemption-module~user-spot-trading-user-spo~e8ec841d")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "TDBs")).then(mod => mod.DashboardModule),
    },
    {
        path: 'mailbox',
        loadChildren: () => Promise.all(/*! import() | mailbox-mailbox-module */[__webpack_require__.e("default~account-account-module~admin-admin-module~mailbox-mailbox-module~user-redemption-user-redemp~5bc07ea6"), __webpack_require__.e("default~admin-admin-module~mailbox-mailbox-module~organization-organization-module~user-invoices-use~5d18fcc7"), __webpack_require__.e("default~admin-admin-module~mailbox-mailbox-module"), __webpack_require__.e("mailbox-mailbox-module")]).then(__webpack_require__.bind(null, /*! ./mailbox/mailbox.module */ "5cJx")).then(mod => mod.MailboxModule),
    },
    {
        path: 'transactions',
        loadChildren: () => Promise.all(/*! import() | transactions-transactions-module */[__webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~deposit-deposit-module~discover-discover-modul~d7f9d518"), __webpack_require__.e("default~dashboard-dashboard-module~transactions-transactions-module~user-redemption-user-redemption-~a37267c0"), __webpack_require__.e("transactions-transactions-module")]).then(__webpack_require__.bind(null, /*! ./transactions/transactions.module */ "ePPo")).then(mod => mod.TransactionsModule),
    },
    {
        path: 'services',
        loadChildren: () => Promise.all(/*! import() | services-services-module */[__webpack_require__.e("common"), __webpack_require__.e("services-services-module")]).then(__webpack_require__.bind(null, /*! ./services/services.module */ "334H")).then(mod => mod.ServicesModule),
    },
    {
        path: 'verify',
        loadChildren: () => Promise.all(/*! import() | kyc-wizard-kyc-wizard-module */[__webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~embedded-embedded-module~fees-fees-module~kyc-~f982372e"), __webpack_require__.e("default~embedded-embedded-module~kyc-wizard-kyc-wizard-module")]).then(__webpack_require__.bind(null, /*! ./kyc-wizard/kyc-wizard.module */ "QaUN")).then(mod => mod.KycWizardModule),
    },
    {
        path: 'cards',
        loadChildren: () => Promise.all(/*! import() | user-cards-user-cards-module */[__webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~deposit-deposit-module~discover-discover-modul~d7f9d518"), __webpack_require__.e("default~admin-admin-module~deposit-deposit-module~discover-discover-module~organization-organization~bea567be"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-cards-user-cards-module~user-redemption-u~0405aa63"), __webpack_require__.e("default~admin-admin-module~deposit-deposit-module~organization-organization-module~transfer-transfer~3ea4832b"), __webpack_require__.e("common"), __webpack_require__.e("user-cards-user-cards-module")]).then(__webpack_require__.bind(null, /*! ./user-cards/user-cards.module */ "SFP7")).then(mod => mod.UserCardsModule),
    },
    {
        path: 'discover',
        loadChildren: () => Promise.all(/*! import() | discover-discover-module */[__webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~deposit-deposit-module~discover-discover-modul~d7f9d518"), __webpack_require__.e("default~admin-admin-module~deposit-deposit-module~discover-discover-module~organization-organization~bea567be"), __webpack_require__.e("default~admin-admin-module~discover-discover-module"), __webpack_require__.e("discover-discover-module")]).then(__webpack_require__.bind(null, /*! ./discover/discover.module */ "y6lh")).then(mod => mod.DiscoverModule),
    },
    {
        path: 'deposit',
        loadChildren: () => Promise.all(/*! import() | deposit-deposit-module */[__webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~deposit-deposit-module~discover-discover-modul~d7f9d518"), __webpack_require__.e("default~admin-admin-module~deposit-deposit-module~discover-discover-module~organization-organization~bea567be"), __webpack_require__.e("default~admin-admin-module~deposit-deposit-module~organization-organization-module~transfer-transfer~3ea4832b"), __webpack_require__.e("common"), __webpack_require__.e("deposit-deposit-module")]).then(__webpack_require__.bind(null, /*! ./deposit/deposit.module */ "fx87")).then(mod => mod.DepositModule),
    },
    {
        path: 'transfer',
        loadChildren: () => Promise.all(/*! import() | transfer-transfer-module */[__webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~deposit-deposit-module~discover-discover-modul~d7f9d518"), __webpack_require__.e("default~admin-admin-module~deposit-deposit-module~discover-discover-module~organization-organization~bea567be"), __webpack_require__.e("default~admin-admin-module~deposit-deposit-module~organization-organization-module~transfer-transfer~3ea4832b"), __webpack_require__.e("default~organization-organization-module~transfer-transfer-module")]).then(__webpack_require__.bind(null, /*! ./transfer/transfer.module */ "uqTW")).then(mod => mod.TransferModule),
    },
    {
        path: 'withdraw',
        loadChildren: () => Promise.all(/*! import() | withdraw-withdraw-module */[__webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~deposit-deposit-module~discover-discover-modul~d7f9d518"), __webpack_require__.e("default~admin-admin-module~deposit-deposit-module~discover-discover-module~organization-organization~bea567be"), __webpack_require__.e("default~admin-admin-module~deposit-deposit-module~organization-organization-module~transfer-transfer~3ea4832b"), __webpack_require__.e("common"), __webpack_require__.e("withdraw-withdraw-module")]).then(__webpack_require__.bind(null, /*! ./withdraw/withdraw.module */ "VMFP")).then(mod => mod.WithdrawModule),
    },
    {
        path: 'spot-trading',
        loadChildren: () => Promise.all(/*! import() | user-spot-trading-user-spot-trading-module */[__webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~deposit-deposit-module~discover-discover-modul~d7f9d518"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~embedded-embedded-module~fees-fees-module~kyc-~f982372e"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-cards-user-cards-module~user-redemption-u~0405aa63"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-activities-user-activities-module~user-re~c1f796cf"), __webpack_require__.e("default~account-account-module~admin-admin-module~mailbox-mailbox-module~user-redemption-user-redemp~5bc07ea6"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-redemption-user-redemption-module~user-sp~b2c80beb"), __webpack_require__.e("default~dashboard-dashboard-module~transactions-transactions-module~user-redemption-user-redemption-~a37267c0"), __webpack_require__.e("default~dashboard-dashboard-module~user-activities-user-activities-module~user-redemption-user-redem~96c34c07"), __webpack_require__.e("default~dashboard-dashboard-module~user-redemption-user-redemption-module~user-spot-trading-user-spo~e8ec841d"), __webpack_require__.e("default~admin-admin-module~user-spot-trading-user-spot-trading-module~user-trades-user-trades-module"), __webpack_require__.e("default~admin-admin-module~user-spot-trading-user-spot-trading-module"), __webpack_require__.e("common"), __webpack_require__.e("user-spot-trading-user-spot-trading-module")]).then(__webpack_require__.bind(null, /*! ./user-spot-trading/user-spot-trading.module */ "MWcC")).then(mod => mod.UserSpotTradingModule),
    },
    {
        path: 'redeem',
        loadChildren: () => Promise.all(/*! import() | user-redemption-user-redemption-module */[__webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~deposit-deposit-module~discover-discover-modul~d7f9d518"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~embedded-embedded-module~fees-fees-module~kyc-~f982372e"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-cards-user-cards-module~user-redemption-u~0405aa63"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-activities-user-activities-module~user-re~c1f796cf"), __webpack_require__.e("default~account-account-module~admin-admin-module~mailbox-mailbox-module~user-redemption-user-redemp~5bc07ea6"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-redemption-user-redemption-module~user-sp~b2c80beb"), __webpack_require__.e("default~dashboard-dashboard-module~transactions-transactions-module~user-redemption-user-redemption-~a37267c0"), __webpack_require__.e("default~dashboard-dashboard-module~user-activities-user-activities-module~user-redemption-user-redem~96c34c07"), __webpack_require__.e("default~dashboard-dashboard-module~user-redemption-user-redemption-module~user-spot-trading-user-spo~e8ec841d"), __webpack_require__.e("default~admin-admin-module~user-redemption-user-redemption-module"), __webpack_require__.e("common"), __webpack_require__.e("user-redemption-user-redemption-module")]).then(__webpack_require__.bind(null, /*! ./user-redemption/user-redemption.module */ "gZW2")).then(mod => mod.UserRedemptionModule),
    },
    {
        path: 'buy-and-sell',
        loadChildren: () => Promise.all(/*! import() | user-trades-user-trades-module */[__webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~deposit-deposit-module~discover-discover-modul~d7f9d518"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~embedded-embedded-module~fees-fees-module~kyc-~f982372e"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-cards-user-cards-module~user-redemption-u~0405aa63"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-activities-user-activities-module~user-re~c1f796cf"), __webpack_require__.e("default~account-account-module~admin-admin-module~mailbox-mailbox-module~user-redemption-user-redemp~5bc07ea6"), __webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-redemption-user-redemption-module~user-sp~b2c80beb"), __webpack_require__.e("default~dashboard-dashboard-module~transactions-transactions-module~user-redemption-user-redemption-~a37267c0"), __webpack_require__.e("default~dashboard-dashboard-module~user-activities-user-activities-module~user-redemption-user-redem~96c34c07"), __webpack_require__.e("default~dashboard-dashboard-module~user-redemption-user-redemption-module~user-spot-trading-user-spo~e8ec841d"), __webpack_require__.e("default~admin-admin-module~user-spot-trading-user-spot-trading-module~user-trades-user-trades-module"), __webpack_require__.e("default~admin-admin-module~user-trades-user-trades-module"), __webpack_require__.e("common"), __webpack_require__.e("user-trades-user-trades-module")]).then(__webpack_require__.bind(null, /*! ./user-trades/user-trades.module */ "T1G4")).then(mod => mod.UserTradesModule),
    },
    {
        path: 'fees',
        loadChildren: () => Promise.all(/*! import() | fees-fees-module */[__webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~embedded-embedded-module~fees-fees-module~kyc-~f982372e"), __webpack_require__.e("fees-fees-module")]).then(__webpack_require__.bind(null, /*! ./fees/fees.module */ "+v4p")).then(mod => mod.FeesModule),
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(mod => mod.LoginModule),
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | registration-registration-module */[__webpack_require__.e("common"), __webpack_require__.e("registration-registration-module")]).then(__webpack_require__.bind(null, /*! ./registration/registration.module */ "DNuw")).then(mod => mod.RegistrationModule),
    },
    {
        path: 'privacy',
        loadChildren: () => __webpack_require__.e(/*! import() | privacy-privacy-module */ "privacy-privacy-module").then(__webpack_require__.bind(null, /*! ./privacy/privacy.module */ "Q2gd")).then(mod => mod.PrivacyModule),
    },
    {
        path: 'terms',
        loadChildren: () => __webpack_require__.e(/*! import() | terms-terms-module */ "terms-terms-module").then(__webpack_require__.bind(null, /*! ./terms/terms.module */ "eNqe")).then(mod => mod.TermsModule),
    },
    {
        path: 'notifications',
        loadChildren: () => __webpack_require__.e(/*! import() | notifications-notifications-module */ "notifications-notifications-module").then(__webpack_require__.bind(null, /*! ./notifications/notifications.module */ "wMrW")).then(mod => mod.NotificationsModule),
    },
    {
        path: 'activities',
        loadChildren: () => Promise.all(/*! import() | user-activities-user-activities-module */[__webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~user-activities-user-activities-module~user-re~c1f796cf"), __webpack_require__.e("default~dashboard-dashboard-module~user-activities-user-activities-module~user-redemption-user-redem~96c34c07"), __webpack_require__.e("user-activities-user-activities-module")]).then(__webpack_require__.bind(null, /*! ./user-activities/user-activities.module */ "2+0c")).then(mod => mod.UserActivitiesModule),
    },
    {
        path: 'organization',
        canLoad: [_organization_organization_auth_guard__WEBPACK_IMPORTED_MODULE_4__["OrganizationAuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | organization-organization-module */[__webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~deposit-deposit-module~discover-discover-modul~d7f9d518"), __webpack_require__.e("default~admin-admin-module~deposit-deposit-module~discover-discover-module~organization-organization~bea567be"), __webpack_require__.e("default~admin-admin-module~deposit-deposit-module~organization-organization-module~transfer-transfer~3ea4832b"), __webpack_require__.e("default~admin-admin-module~mailbox-mailbox-module~organization-organization-module~user-invoices-use~5d18fcc7"), __webpack_require__.e("default~admin-admin-module~organization-organization-module~user-invoices-user-invoices-module"), __webpack_require__.e("default~organization-organization-module~transfer-transfer-module"), __webpack_require__.e("default~organization-organization-module~user-invoices-user-invoices-module"), __webpack_require__.e("default~admin-admin-module~organization-organization-module"), __webpack_require__.e("organization-organization-module")]).then(__webpack_require__.bind(null, /*! ./organization/organization.module */ "gXvW")).then(mod => mod.OrganizationModule),
    },
    {
        path: 'embedded',
        loadChildren: () => Promise.all(/*! import() | embedded-embedded-module */[__webpack_require__.e("default~admin-admin-module~dashboard-dashboard-module~embedded-embedded-module~fees-fees-module~kyc-~f982372e"), __webpack_require__.e("default~embedded-embedded-module~kyc-wizard-kyc-wizard-module"), __webpack_require__.e("embedded-embedded-module")]).then(__webpack_require__.bind(null, /*! ./embedded/embedded.module */ "c8qA")).then(mod => mod.EmbeddedModule),
    },
    // redirect / to /login
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    // cover all other states by 404 state
    {
        path: '**',
        component: _app_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"], scrollPositionRestoration: 'enabled' }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "vk+e":
/*!**************************************************!*\
  !*** ./src/app/common/models/core/user.model.ts ***!
  \**************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _accounting_currency_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../accounting/currency.model */ "/e3T");

class User {
    constructor(data) {
        Object.assign(this, data);
        if (data.preferredCurrency) {
            this.preferredCurrency = new _accounting_currency_model__WEBPACK_IMPORTED_MODULE_0__["Currency"](data.preferredCurrency);
        }
    }
}


/***/ }),

/***/ "vqDw":
/*!*****************************************************!*\
  !*** ./src/app/app/core/toastr/toastr.component.ts ***!
  \*****************************************************/
/*! exports provided: ToastrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrComponent", function() { return ToastrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_toastr_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./toastr.component.html */ "pxZh");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/toastr.service */ "N/y2");





let ToastrComponent = class ToastrComponent {
    constructor(toastr) {
        this.toastr = toastr;
        this.toasts = [];
    }
    ngOnInit() {
        this.toastSubscription = this.toastr.toastPushed.subscribe(toast => {
            this.toasts.unshift(toast);
            this.startTimer(toast);
        });
    }
    ngOnDestroy() {
        this.toastSubscription.unsubscribe();
    }
    hide(toast) {
        this.toasts.splice(this.toasts.findIndex(t => t.id === toast.id), 1);
    }
    stopTimer(toast) {
        if (toast.timeout) {
            clearTimeout(toast.timeout);
        }
    }
    startTimer(toast) {
        this.stopTimer(toast);
        toast.timeout = setTimeout(() => this.hide(toast), 6000);
    }
};
ToastrComponent.ctorParameters = () => [
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
ToastrComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'toastr',
        template: _raw_loader_toastr_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('flyInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-100%)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(8px)', offset: 0.3 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                    ])),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1 }),
                    ])),
                ]),
            ]),
        ],
    })
], ToastrComponent);



/***/ }),

/***/ "w/tz":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/notification/notification.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container [ngSwitch]=\"notification.type\">\n    <!-- Verification -->\n    <ng-container *ngSwitchCase=\"'verification-approved'\"> {{ 'common.your-account-verified' | translate }} </ng-container>\n\n    <!-- Transactions -->\n    <ng-container *ngSwitchCase=\"'transaction-processed'\">\n        <ng-container [ngSwitch]=\"transaction?.type\">\n            <ng-container *ngSwitchCase=\"'deposit'\">\n                {{ 'common.your' | translate }} <span class=\"text-info text-uppercase\">{{ transaction?.method }}</span>\n                {{ 'common.deposit' | translate | lowercase }} <span class=\"text-info\">{{ transaction?.id | truncate: false:7:'' }}</span>\n                {{ 'common.of' | translate }}\n                <span class=\"text-green\"\n                    >{{ transaction?.amount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</span\n                >\n                {{ 'common.has-been-completed' | translate }}\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'transfer'\">\n                {{ 'common.you-received' | translate }}\n                <span class=\"text-green\"\n                    >{{ transaction?.settledAmount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</span\n                >\n                {{ 'common.from' | translate | lowercase }}\n                <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: transaction?.baseWallet\"></ng-container> {{ 'common.using' | translate }}\n                <span class=\"text-info\">{{ transaction?.id | truncate: false:7:'' }}</span>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'withdrawal'\">\n                {{ 'common.your' | translate }} <span class=\"text-info text-uppercase\">{{ transaction?.method }}</span>\n                {{ 'common.withdrawal' | translate | lowercase }} <span class=\"text-info\">{{ transaction?.id | truncate: false:7:'' }}</span>\n                {{ 'common.of' | translate }}\n                <span class=\"text-green\"\n                    >{{ transaction?.amount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</span\n                >\n                {{ 'common.has-been-completed' | translate }}\n            </ng-container>\n        </ng-container>\n    </ng-container>\n\n    <!-- Conversions -->\n    <ng-container *ngSwitchCase=\"'conversion-offered'\">\n        {{ 'common.you-received-an-offer' | translate }}\n        <span class=\"text-danger\"\n            >{{ conversion?.baseTransaction?.amount | amount: conversion?.baseTransaction?.currency?.decimalPlaces }}\n            {{ conversion?.baseTransaction?.currency?.code }}</span\n        >\n        to\n        <span class=\"text-green\"\n            >{{ conversion?.counterTransaction?.amount | amount: conversion?.counterTransaction?.currency?.decimalPlaces }}\n            {{ conversion?.counterTransaction?.currency?.code }}\n        </span>\n        <ng-container *ngIf=\"conversion?.status === 'offered'\"\n            ><button\n                class=\"btn btn-success btn-sm e2e-accept-conversion-offer-btn\"\n                [routerLink]=\"['/services/conversions', conversion?.id]\"\n                [queryParams]=\"{ action: 'accept' }\"\n                (click)=\"$event.preventDefault(); $event.stopPropagation()\"\n            >\n                {{ 'common.accept' | translate }}\n            </button>\n            /\n            <button\n                class=\"btn btn-danger btn-sm e2e-reject-conversion-offer-btn\"\n                [routerLink]=\"['/services/conversions', conversion?.id]\"\n                [queryParams]=\"{ action: 'decline' }\"\n                (click)=\"$event.preventDefault(); $event.stopPropagation()\"\n            >\n                {{ 'common.decline' | translate }}\n            </button></ng-container\n        >\n        <span class=\"text-danger\" *ngIf=\"conversion && ['declined', 'cancelled'].includes(conversion.status)\"\n            >({{ (conversion?.status === 'declined' ? 'common.declined' : 'common.cancelled') | translate }})</span\n        >\n    </ng-container>\n\n    <!-- Invoice -->\n    <ng-container *ngSwitchCase=\"'invoice-received'\">\n        {{ 'common.you-receive-an-invoice' | translate }}: <span class=\"text-info\">{{ invoice?.subject }}</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'invoice-cancelled'\">\n        {{ 'common.invoice-cancelled' | translate }}: <span class=\"text-danger\">{{ invoice?.subject }}</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'invoice-settled'\">\n        {{ 'common.invoice-settled' | translate }}: <span class=\"text-success\">{{ invoice?.subject }}</span>\n    </ng-container>\n\n    <!-- File -->\n    <ng-container *ngSwitchCase=\"'poi-document-expiry'\">\n        <span class=\"text-warning\">{{ 'common.your-poi-expire' | translate }}</span>\n    </ng-container>\n\n    <!-- Contact -->\n    <ng-container *ngSwitchCase=\"'added-as-contact'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: contact?.baseUser }\"></ng-container>\n        {{ 'common.added-as-contact' | translate }}\n    </ng-container>\n\n    <!-- Card Order -->\n    <ng-container *ngSwitchCase=\"'card-order-approved'\">\n        {{ 'common.your-card-order' | translate }} <span class=\"text-info\">{{ cardOrder?.id | truncate: false:7:'' }}</span>\n        {{ 'common.has-been-approved' | translate }}\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'card-order-shipped'\">\n        {{ 'common.your-card-order' | translate }} <span class=\"text-info\">{{ cardOrder?.id | truncate: false:7:'' }}</span>\n        {{ 'common.has-been-shipped' | translate }}\n    </ng-container>\n</ng-container>\n\n<!-- Helper -->\n<ng-template let-user=\"user\" #userTemplate>\n    <copy-wrap [value]=\"user?.accountNumber\">\n        <span [ngbTooltip]=\"user?.accountNumber | accountNumber\">{{ user?.name }}</span>\n    </copy-wrap>\n</ng-template>\n<ng-template let-user=\"user\" #userOrAppTemplate>\n    <ng-container *ngIf=\"user; else app\">\n        <copy-wrap *ngIf=\"allowUserCopy\" [value]=\"user.accountNumber\">\n            <ng-container *ngTemplateOutlet=\"account\"></ng-container>\n        </copy-wrap>\n        <ng-container *ngIf=\"!allowUserCopy\">\n            <ng-container *ngTemplateOutlet=\"account\"></ng-container>\n        </ng-container>\n        <ng-template #account>\n            <span [ngbTooltip]=\"user?.accountNumber | accountNumber\">{{ user.name }}</span>\n        </ng-template>\n    </ng-container>\n    <ng-template #app>\n        {{ displayName }}\n    </ng-template>\n</ng-template>\n");

/***/ }),

/***/ "wEC/":
/*!*****************************************!*\
  !*** ./src/app/common/safe-url.pipe.ts ***!
  \*****************************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



let SafeUrlPipe = class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustUrl(value);
    }
};
SafeUrlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafeUrlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeUrl' })
], SafeUrlPipe);



/***/ }),

/***/ "welj":
/*!*************************************************************************!*\
  !*** ./src/app/common/card-fee-schedule/card-fee-schedule.component.ts ***!
  \*************************************************************************/
/*! exports provided: CardFeeScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFeeScheduleComponent", function() { return CardFeeScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_fee_schedule_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-fee-schedule.component.html */ "c5qG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/session.service */ "6g7h");









var NiumCardProgram;
(function (NiumCardProgram) {
    NiumCardProgram["AERAPASS_P1"] = "117cab0b-7992-4e4a-9581-1c241e77684d";
    NiumCardProgram["AERAPASS_P2"] = "4409785f-3df4-42af-bcf2-df1d23194872";
    NiumCardProgram["AERAPASS_P3"] = "5e4572d8-195c-4f3d-84da-6788c467543f";
    NiumCardProgram["AERAPASS_P4"] = "96e53529-3807-44f2-88cc-8514b8826819";
    NiumCardProgram["AERAPASS_P5"] = "172ba6d8-714b-45d2-9106-c2cc691af4d7";
    NiumCardProgram["QNET"] = "198b1bf4-5b99-45c1-b7ee-2785c2d05e92";
    NiumCardProgram["SGPMX_SILVER"] = "77b97782-788f-4102-b6bc-1607ce97b0c4";
    NiumCardProgram["SGPMX_GOLD"] = "2f45a69f-5adb-4cab-b4d6-5af9a3cf4c8b";
})(NiumCardProgram || (NiumCardProgram = {}));
let CardFeeScheduleComponent = class CardFeeScheduleComponent {
    constructor(http, session, translate) {
        this.http = http;
        this.session = session;
        this.translate = translate;
        this.cardFees = {
            topupFee: null,
            atmFee: null,
            atmDeclineFee: null,
            fx: null,
            declineTransaction: null,
            replacementFee: null,
            ecomFee: null,
            posFee: null,
            annualLoadingLimit: null,
            monthlySpendingLimit: null,
            dailyPosEcomLimit: null,
            dailyAtmLimit: null,
            unloadFundsFee: null,
        };
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(this.session.userStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(user => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([
            this.http.get(`/users/${user.id}/fee-schedule`, {
                params: {
                    currencyCode: 'USD',
                },
            }),
            this.http.get(`/users/${this.session.user.id}/card-program`),
        ])))
            .subscribe(([fees, userCardProgram]) => {
            const cardFee = fees.find(fee => fee.method === 'card') || null;
            const unloadFundsFee = fees.find(fee => fee.method === 'card' && fee.type === 'deposit') || null;
            if (!userCardProgram) {
                this.cardFees = this.getCardFeeSchedule(null, cardFee, unloadFundsFee);
            }
            else {
                this.cardFees = this.getCardFeeSchedule(userCardProgram, cardFee, unloadFundsFee);
            }
        }));
    }
    getCardFeeSchedule(cardProgram, topupFee, unloadFundsFee) {
        switch (cardProgram === null || cardProgram === void 0 ? void 0 : cardProgram.niumClientId) {
            case NiumCardProgram.AERAPASS_P1:
                return {
                    topupFee,
                    atmFee: '4',
                    atmDeclineFee: '0.5',
                    fx: '2.75',
                    declineTransaction: '0.25',
                    replacementFee: '10',
                    ecomFee: '0',
                    posFee: '0',
                    annualLoadingLimit: cardProgram.maxCardBalance || null,
                    monthlySpendingLimit: '750000',
                    dailyPosEcomLimit: '25000',
                    dailyAtmLimit: '1500',
                    unloadFundsFee,
                };
            case NiumCardProgram.AERAPASS_P2:
                return {
                    topupFee,
                    atmFee: '8',
                    atmDeclineFee: '0.5',
                    fx: '2.75',
                    declineTransaction: '0.25',
                    replacementFee: '10',
                    ecomFee: '0.05',
                    posFee: '0.05',
                    annualLoadingLimit: cardProgram.maxCardBalance || null,
                    monthlySpendingLimit: '750000',
                    dailyPosEcomLimit: '25000',
                    dailyAtmLimit: '1500',
                    unloadFundsFee,
                };
            case NiumCardProgram.AERAPASS_P3:
                return {
                    topupFee,
                    atmFee: '5',
                    atmDeclineFee: '0.5',
                    fx: '2.75',
                    declineTransaction: '0.25',
                    replacementFee: '5',
                    ecomFee: '0',
                    posFee: '0',
                    annualLoadingLimit: cardProgram.maxCardBalance || null,
                    monthlySpendingLimit: '750000',
                    dailyPosEcomLimit: '25000',
                    dailyAtmLimit: '1500',
                    unloadFundsFee,
                };
            case NiumCardProgram.AERAPASS_P4:
                return {
                    topupFee,
                    atmFee: '10',
                    atmDeclineFee: '1',
                    fx: '1.25',
                    declineTransaction: '10',
                    replacementFee: '10',
                    ecomFee: '0',
                    posFee: '0',
                    annualLoadingLimit: cardProgram.maxCardBalance || null,
                    monthlySpendingLimit: '750000',
                    dailyPosEcomLimit: '25000',
                    dailyAtmLimit: '1500',
                    unloadFundsFee,
                };
            case NiumCardProgram.AERAPASS_P5:
                return {
                    topupFee,
                    atmFee: '8',
                    atmDeclineFee: '0.5',
                    fx: '3.25',
                    declineTransaction: '0.25',
                    replacementFee: '10',
                    ecomFee: '0.25',
                    posFee: '0.25',
                    annualLoadingLimit: cardProgram.maxCardBalance || null,
                    monthlySpendingLimit: '750000',
                    dailyPosEcomLimit: '25000',
                    dailyAtmLimit: '1500',
                    unloadFundsFee,
                };
            case NiumCardProgram.QNET:
                return {
                    topupFee,
                    atmFee: '5',
                    atmDeclineFee: '0.5',
                    fx: '2.00',
                    declineTransaction: '0',
                    replacementFee: '10',
                    ecomFee: '0',
                    posFee: '0',
                    annualLoadingLimit: cardProgram.maxCardBalance || null,
                    monthlySpendingLimit: '750000',
                    dailyPosEcomLimit: '25000',
                    dailyAtmLimit: '1500',
                    unloadFundsFee,
                };
            case NiumCardProgram.SGPMX_GOLD:
                return {
                    topupFee,
                    atmFee: '5',
                    atmDeclineFee: '0.5',
                    fx: '2.95',
                    declineTransaction: '0.25',
                    replacementFee: '10',
                    ecomFee: '0',
                    posFee: '0',
                    annualLoadingLimit: cardProgram.maxCardBalance || null,
                    monthlySpendingLimit: '750000',
                    dailyPosEcomLimit: '25000',
                    dailyAtmLimit: '1500',
                    unloadFundsFee,
                };
            case NiumCardProgram.SGPMX_SILVER:
                return {
                    topupFee,
                    atmFee: '5',
                    atmDeclineFee: '0.5',
                    fx: '3.50',
                    declineTransaction: '0.25',
                    replacementFee: '10',
                    ecomFee: '0',
                    posFee: '0',
                    annualLoadingLimit: cardProgram.maxCardBalance || null,
                    monthlySpendingLimit: '750000',
                    dailyPosEcomLimit: '25000',
                    dailyAtmLimit: '1500',
                    unloadFundsFee,
                };
            default:
                return {
                    topupFee,
                    atmFee: null,
                    atmDeclineFee: null,
                    fx: null,
                    declineTransaction: null,
                    replacementFee: null,
                    ecomFee: null,
                    posFee: null,
                    annualLoadingLimit: null,
                    monthlySpendingLimit: null,
                    dailyPosEcomLimit: null,
                    dailyAtmLimit: null,
                    unloadFundsFee: null,
                };
        }
    }
    isZeroFee(fee) {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(fee).isZero();
    }
    determineFees(type) {
        let result = '';
        const fee = this.cardFees[type];
        if ((fee && fee.fixed && !this.isZeroFee(fee.fixed || '0')) ||
            (fee && fee.relative && !this.isZeroFee(fee.relative))) {
            if (fee.fixed && !this.isZeroFee(fee.fixed)) {
                result += new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(fee.fixed).toFixed(2) + ' USD';
            }
            if (fee.fixed && !this.isZeroFee(fee.fixed) && fee.relative && !this.isZeroFee(fee.relative)) {
                result += ' + ';
            }
            if (fee.relative && !this.isZeroFee(fee.relative)) {
                result += new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(fee.relative).times(100).toFixed(2) + '%';
            }
        }
        else {
            result = this.translate.instant('common.free').toUpperCase();
        }
        return result;
    }
};
CardFeeScheduleComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
CardFeeScheduleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'card-fee-schedule',
        template: _raw_loader_card_fee_schedule_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardFeeScheduleComponent);



/***/ }),

/***/ "wgWS":
/*!******************************************************!*\
  !*** ./src/app/store/currencies/currencies.store.ts ***!
  \******************************************************/
/*! exports provided: CurrenciesStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrenciesStore", function() { return CurrenciesStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");



let CurrenciesStore = class CurrenciesStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"] {
    constructor() {
        super();
    }
};
CurrenciesStore.ctorParameters = () => [];
CurrenciesStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'currencies', idKey: 'code' })
], CurrenciesStore);



/***/ }),

/***/ "x+Op":
/*!********************************************!*\
  !*** ./src/app/common/auth.interceptor.ts ***!
  \********************************************/
/*! exports provided: TokenRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenRequestInterceptor", function() { return TokenRequestInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_logout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/logout.service */ "2kWO");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/session.service */ "6g7h");







let TokenRequestInterceptor = class TokenRequestInterceptor {
    constructor(session, logout) {
        this.session = session;
        this.logout = logout;
        this.unauthorizedRoutes = ['/token'];
    }
    intercept(req, next) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            if (this.session.hasValidRefreshToken() && this.session.getExpiryTimeInSeconds() < 15) {
                return this.logout.logout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => rxjs__WEBPACK_IMPORTED_MODULE_3__["NEVER"]));
            }
            let headers = req.headers || new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            if (req.url !== '/token' && this.session.hasValidToken() && !headers.has('Authorization')) {
                headers = headers.set('Authorization', 'Bearer ' + this.session.token);
            }
            return next.handle(req.clone({ headers, url: '/.api' + req.url }));
        }));
    }
};
TokenRequestInterceptor.ctorParameters = () => [
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] },
    { type: _services_logout_service__WEBPACK_IMPORTED_MODULE_5__["LogoutService"] }
];
TokenRequestInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], TokenRequestInterceptor);



/***/ }),

/***/ "xX+i":
/*!*****************************************!*\
  !*** ./src/app/common/truncate.pipe.ts ***!
  \*****************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let TruncatePipe = class TruncatePipe {
    transform(value, wordwise = true, max = 100, tail = '...') {
        if (!value) {
            return '';
        }
        if (value.length <= max) {
            return value;
        }
        value = value.substr(0, max);
        if (wordwise) {
            const lastSpace = value.lastIndexOf(' ');
            if (lastSpace !== -1) {
                value = value.substr(0, lastSpace);
                if (value[value.length - 1] === ',') {
                    value = value.substr(0, value.length - 1);
                }
            }
        }
        return value + tail;
    }
};
TruncatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'truncate' })
], TruncatePipe);



/***/ }),

/***/ "xpOY":
/*!******************************************************************!*\
  !*** ./src/app/common/account-number/acount-number.component.ts ***!
  \******************************************************************/
/*! exports provided: AccountNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNumberComponent", function() { return AccountNumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_number_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account-number.component.html */ "K8WK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AccountNumberComponent = class AccountNumberComponent {
};
AccountNumberComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
AccountNumberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'account-number',
        template: _raw_loader_account_number_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AccountNumberComponent);



/***/ }),

/***/ "y1tC":
/*!***********************************************************************!*\
  !*** ./src/app/app/core/logout-timer/logout-timer-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: LogoutTimerModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutTimerModalComponent", function() { return LogoutTimerModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_logout_timer_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./logout-timer-modal.component.html */ "2ytL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/session.service */ "6g7h");
/* harmony import */ var src_app_common_services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/services/token.service */ "JdTs");
/* harmony import */ var _common_services_logout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/services/logout.service */ "2kWO");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/services/toastr.service */ "N/y2");









let LogoutTimerModalComponent = class LogoutTimerModalComponent {
    constructor(activeModal, logoutService, toastr, session, tokenService, translate) {
        this.activeModal = activeModal;
        this.logoutService = logoutService;
        this.toastr = toastr;
        this.session = session;
        this.tokenService = tokenService;
        this.translate = translate;
    }
    logout() {
        this.logoutService.logout().subscribe(() => {
            this.toastr.success(this.translate.instant('common.you-have-been-logged-out'));
        });
    }
    refresh() {
        this.tokenService.refresh().subscribe(() => {
            this.toastr.success(this.translate.instant('logout-timer.your-session-has-been-refreshed'));
        });
    }
};
LogoutTimerModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
    { type: _common_services_logout_service__WEBPACK_IMPORTED_MODULE_7__["LogoutService"] },
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
    { type: src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
    { type: src_app_common_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
LogoutTimerModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({ selector: 'logout-timer-modal', template: _raw_loader_logout_timer_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"] })
], LogoutTimerModalComponent);



/***/ }),

/***/ "y9bJ":
/*!*********************************************************!*\
  !*** ./src/app/common/copy-wrap/copy-wrap.component.ts ***!
  \*********************************************************/
/*! exports provided: CopyWrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyWrapComponent", function() { return CopyWrapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_copy_wrap_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./copy-wrap.component.html */ "G2bf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _copy_icon_copy_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../copy-icon/copy-icon.component */ "69Ec");




let CopyWrapComponent = class CopyWrapComponent extends _copy_icon_copy_icon_component__WEBPACK_IMPORTED_MODULE_3__["CopyIconComponent"] {
};
CopyWrapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'copy-wrap',
        template: _raw_loader_copy_wrap_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
    })
], CopyWrapComponent);



/***/ }),

/***/ "yK3n":
/*!*****************************************************!*\
  !*** ./src/app/common/models/core/contact.model.ts ***!
  \*****************************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "vk+e");

class Contact {
    constructor(data = {}) {
        Object.assign(this, data);
        if (data.baseUser) {
            this.baseUser = new _user_model__WEBPACK_IMPORTED_MODULE_0__["User"](data.baseUser);
        }
        if (data.counterUser) {
            this.counterUser = new _user_model__WEBPACK_IMPORTED_MODULE_0__["User"](data.counterUser);
        }
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");





function logSelfXssMessage() {
    /* eslint-disable no-console */
    console.log('%cStop!', 'color: red; font-size: x-large');
    console.log(`%cThis is a browser feature intended for developers only. If someone told you to copy-paste something here, it is a scam and will give them access to your account.`, 'font-size: large');
    console.log('%cAre you a developer seeking a job? Ask hire() for more information.', 'color: orange');
    /* eslint-enable no-console */
}
;
window.hire = () => {
    // eslint-disable-next-line no-console
    console.log('%cHey there! For job inquiries, contact us at jobs@aerapass.com', 'color:green');
};
bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a.config({ EXPONENTIAL_AT: [-6, 18] });
if (!window.DEBUG) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["enableAkitaProdMode"])();
    logSelfXssMessage();
}
const storage = Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["persistState"])();
const providers = [{ provide: 'persistStorage', useValue: storage }];
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers)
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    // eslint-disable-next-line no-console
    .catch(error => console.error(error));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map