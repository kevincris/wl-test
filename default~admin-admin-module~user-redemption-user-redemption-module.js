(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~user-redemption-user-redemption-module"],{

/***/ "6Vu2":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/redemption/redemption-form.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form-validation\" #redemptionForm=\"ngForm\" [ngClass]=\"{ 'ng-submitted': redemptionForm.submitted }\" autocomplete=\"false\" novalidate>\n    <div *ngIf=\"isUserSelectAllowed\" class=\"form-group\">\n        <div class=\"form-group\">\n            <label for=\"user\">{{ 'common.user' | translate }}</label>\n            <ng-select\n                class=\"ng-select-lg\"\n                id=\"user\"\n                name=\"user\"\n                [placeholder]=\"'common.enter-user' | translate\"\n                [(ngModel)]=\"user\"\n                #userInput=\"ngModel\"\n                [items]=\"legalEntitiesSteam | async\"\n                [typeahead]=\"userAutocomplete\"\n                [disabled]=\"isEditing\"\n            >\n                <ng-template ng-label-tmp let-item=\"item\">\n                    <div class=\"d-flex align-items-center justify-content-center\">\n                        <user-display *ngIf=\"item\" [user]=\"item\"></user-display>\n                        <small *ngIf=\"item\" class=\"text-gray ml-1\">{{ item.email }}</small>\n                    </div>\n                </ng-template>\n                <ng-template ng-option-tmp let-item=\"item\">\n                    <div class=\"d-flex align-items-center justify-content-center\">\n                        <user-avatar *ngIf=\"item\" [user]=\"item\" size=\"sm\" elementClass=\"mr-2\"></user-avatar>\n                        <div class=\"w-100\">\n                            <ng-container *ngIf=\"item; else platform\">\n                                <div>{{ item.name }}</div>\n                                <small class=\"text-gray\">{{ item.email }}</small>\n                            </ng-container>\n                        </div>\n                    </div>\n                </ng-template>\n                <ng-template #platform>\n                    <div>{{ displayName }}</div>\n                    <small class=\"text-gray\">{{ 'common.platform' | translate }}</small>\n                </ng-template>\n            </ng-select>\n            <div *ngIf=\"userInput.invalid && (redemptionForm.submitted || userInput.dirty)\" class=\"error-messages\">\n                <div class=\"form-control-feedback\" *ngIf=\"userInput?.errors?.validateObject\">Please choose an existing user.</div>\n            </div>\n        </div>\n        <div *ngIf=\"userInput.invalid && (redemptionForm.submitted || userInput.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"userInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"font-md\" for=\"type\">Precious Metal Type</label>\n        <ng-select\n            class=\"ng-select-lg\"\n            name=\"type\"\n            [placeholder]=\"'common.select-precious-metal-type' | translate\"\n            [items]=\"types\"\n            [searchable]=\"false\"\n            [clearable]=\"false\"\n            (change)=\"resetDenomination()\"\n            [(ngModel)]=\"redemption.type\"\n            #type=\"ngModel\"\n            required\n        >\n            <ng-template ng-label-tmp let-item=\"item\">{{ item === 'gold' ? 'Gold Troy Ounce' : 'Silver Troy Ounce' }}</ng-template>\n            <ng-template ng-option-tmp let-item=\"item\">{{ item === 'gold' ? 'Gold Troy Ounce' : 'Silver Troy Ounce' }}</ng-template>\n        </ng-select>\n        <div *ngIf=\"type.invalid && (redemptionForm.submitted || type.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"type?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n        </div>\n    </div>\n    <div class=\"table-responsive mt-3\">\n        <table class=\"table table-bordered\">\n            <thead class=\"thead-light\">\n                <tr>\n                    <th scope=\"col\">Denomination <span class=\"d-none d-md-inline\">To Redeem</span></th>\n                    <th scope=\"col\" width=\"40%\" [style.minWidth]=\"'150px'\">{{ 'common.quantity' | translate }}</th>\n                </tr>\n            </thead>\n            <tbody *ngIf=\"redemption.type === 'gold'\">\n                <tr>\n                    <th scope=\"row\"><span>1 gram</span><br /><span>0.0321507 AU</span></th>\n                    <td>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <button class=\"btn btn-danger-air\" type=\"button\" (click)=\"subtractQuantity('oneGram')\">\n                                    <fa-icon [icon]=\"faMinus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                            <input\n                                type=\"number\"\n                                class=\"form-control text-center bg-white\"\n                                min=\"0\"\n                                [(ngModel)]=\"redemption.oneGram\"\n                                name=\"oneGram\"\n                                disabled\n                            />\n                            <div class=\"input-group-append\">\n                                <button\n                                    class=\"btn btn-primary-air\"\n                                    type=\"button\"\n                                    (click)=\"addQuantity('oneGram')\"\n                                    [disabled]=\"willExceedBalance('oneGram')\"\n                                >\n                                    <fa-icon [icon]=\"faPlus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <th scope=\"row\"><span>5 gram</span><br /><span>0.1607537 AU</span></th>\n                    <td>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <button class=\"btn btn-danger-air\" type=\"button\" (click)=\"subtractQuantity('fiveGram')\">\n                                    <fa-icon [icon]=\"faMinus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                            <input\n                                type=\"number\"\n                                class=\"form-control text-center bg-white\"\n                                min=\"0\"\n                                [(ngModel)]=\"redemption.fiveGram\"\n                                name=\"fiveGram\"\n                                disabled\n                            />\n                            <div class=\"input-group-append\">\n                                <button\n                                    class=\"btn btn-primary-air\"\n                                    type=\"button\"\n                                    (click)=\"addQuantity('fiveGram')\"\n                                    [disabled]=\"willExceedBalance('fiveGram')\"\n                                >\n                                    <fa-icon [icon]=\"faPlus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <th scope=\"row\"><span>50 gram</span><br /><span>1.6075373 AU</span></th>\n                    <td>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <button class=\"btn btn-danger-air\" type=\"button\" (click)=\"subtractQuantity('fiftyGram')\">\n                                    <fa-icon [icon]=\"faMinus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                            <input\n                                type=\"number\"\n                                class=\"form-control text-center bg-white\"\n                                min=\"0\"\n                                [(ngModel)]=\"redemption.fiftyGram\"\n                                name=\"fiftyGram\"\n                                disabled\n                            />\n                            <div class=\"input-group-append\">\n                                <button\n                                    class=\"btn btn-primary-air\"\n                                    type=\"button\"\n                                    (click)=\"addQuantity('fiftyGram')\"\n                                    [disabled]=\"willExceedBalance('fiftyGram')\"\n                                >\n                                    <fa-icon [icon]=\"faPlus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <th scope=\"row\"><span>100 gram</span><br /><span>3.2150747 AU</span></th>\n                    <td>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <button class=\"btn btn-danger-air\" type=\"button\" (click)=\"subtractQuantity('hundredGram')\">\n                                    <fa-icon [icon]=\"faMinus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                            <input\n                                type=\"number\"\n                                class=\"form-control text-center bg-white\"\n                                min=\"0\"\n                                [(ngModel)]=\"redemption.hundredGram\"\n                                name=\"hundredGram\"\n                                disabled\n                            />\n                            <div class=\"input-group-append\">\n                                <button\n                                    class=\"btn btn-primary-air\"\n                                    type=\"button\"\n                                    (click)=\"addQuantity('hundredGram')\"\n                                    [disabled]=\"willExceedBalance('hundredGram')\"\n                                >\n                                    <fa-icon [icon]=\"faPlus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <th scope=\"row\"><span>1000 gram</span><br /><span>32.1507466 AU</span></th>\n                    <td>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <button class=\"btn btn-danger-air\" type=\"button\" (click)=\"subtractQuantity('thousandGram')\">\n                                    <fa-icon [icon]=\"faMinus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                            <input\n                                type=\"number\"\n                                class=\"form-control text-center bg-white\"\n                                min=\"0\"\n                                [(ngModel)]=\"redemption.thousandGram\"\n                                name=\"thousandGram\"\n                                disabled\n                            />\n                            <div class=\"input-group-append\">\n                                <button\n                                    class=\"btn btn-primary-air\"\n                                    type=\"button\"\n                                    (click)=\"addQuantity('thousandGram')\"\n                                    [disabled]=\"willExceedBalance('thousandGram')\"\n                                >\n                                    <fa-icon [icon]=\"faPlus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n            <tbody *ngIf=\"redemption.type === 'silver'\">\n                <tr>\n                    <th scope=\"row\"><span>2 ounce</span></th>\n                    <td>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <button class=\"btn btn-danger-air\" type=\"button\" (click)=\"subtractQuantity('twoOunce')\">\n                                    <fa-icon [icon]=\"faMinus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                            <input\n                                type=\"number\"\n                                class=\"form-control text-center bg-white\"\n                                min=\"0\"\n                                [(ngModel)]=\"redemption.twoOunce\"\n                                name=\"twoOunce\"\n                                disabled\n                            />\n                            <div class=\"input-group-append\">\n                                <button\n                                    class=\"btn btn-primary-air\"\n                                    type=\"button\"\n                                    (click)=\"addQuantity('twoOunce')\"\n                                    [disabled]=\"willExceedBalance('twoOunce')\"\n                                >\n                                    <fa-icon [icon]=\"faPlus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <th scope=\"row\"><span>5 ounce</span></th>\n                    <td>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <button class=\"btn btn-danger-air\" type=\"button\" (click)=\"subtractQuantity('fiveOunce')\">\n                                    <fa-icon [icon]=\"faMinus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                            <input\n                                type=\"number\"\n                                class=\"form-control text-center bg-white\"\n                                min=\"0\"\n                                [(ngModel)]=\"redemption.fiveOunce\"\n                                name=\"fiveOunce\"\n                                disabled\n                            />\n                            <div class=\"input-group-append\">\n                                <button\n                                    class=\"btn btn-primary-air\"\n                                    type=\"button\"\n                                    (click)=\"addQuantity('fiveOunce')\"\n                                    [disabled]=\"willExceedBalance('fiveOunce')\"\n                                >\n                                    <fa-icon [icon]=\"faPlus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <th scope=\"row\"><span>10 ounce</span></th>\n                    <td>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <button class=\"btn btn-danger-air\" type=\"button\" (click)=\"subtractQuantity('tenOunce')\">\n                                    <fa-icon [icon]=\"faMinus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                            <input\n                                type=\"number\"\n                                class=\"form-control text-center bg-white\"\n                                min=\"0\"\n                                [(ngModel)]=\"redemption.tenOunce\"\n                                name=\"tenOunce\"\n                                disabled\n                            />\n                            <div class=\"input-group-append\">\n                                <button\n                                    class=\"btn btn-primary-air\"\n                                    type=\"button\"\n                                    (click)=\"addQuantity('tenOunce')\"\n                                    [disabled]=\"willExceedBalance('tenOunce')\"\n                                >\n                                    <fa-icon [icon]=\"faPlus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <th scope=\"row\"><span>100 ounce</span></th>\n                    <td>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <button class=\"btn btn-danger-air\" type=\"button\" (click)=\"subtractQuantity('hundredOunce')\">\n                                    <fa-icon [icon]=\"faMinus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                            <input\n                                type=\"number\"\n                                class=\"form-control text-center bg-white\"\n                                min=\"0\"\n                                [(ngModel)]=\"redemption.hundredOunce\"\n                                name=\"hundredOunce\"\n                                disabled\n                            />\n                            <div class=\"input-group-append\">\n                                <button\n                                    class=\"btn btn-primary-air\"\n                                    type=\"button\"\n                                    (click)=\"addQuantity('hundredOunce')\"\n                                    [disabled]=\"willExceedBalance('hundredOunce')\"\n                                >\n                                    <fa-icon [icon]=\"faPlus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <th scope=\"row\"><span>100 gram (3.2150747 ozt)</span></th>\n                    <td>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <button class=\"btn btn-danger-air\" type=\"button\" (click)=\"subtractQuantity('hundredGram')\">\n                                    <fa-icon [icon]=\"faMinus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                            <input\n                                type=\"number\"\n                                class=\"form-control text-center bg-white\"\n                                min=\"0\"\n                                [(ngModel)]=\"redemption.hundredGram\"\n                                name=\"hundredGram\"\n                                disabled\n                            />\n                            <div class=\"input-group-append\">\n                                <button\n                                    class=\"btn btn-primary-air\"\n                                    type=\"button\"\n                                    (click)=\"addQuantity('hundredGram')\"\n                                    [disabled]=\"willExceedBalance('hundredGram')\"\n                                >\n                                    <fa-icon [icon]=\"faPlus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <th scope=\"row\"><span>1 kg (32.1507466 ozt)</span></th>\n                    <td>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <button class=\"btn btn-danger-air\" type=\"button\" (click)=\"subtractQuantity('oneKilogram')\">\n                                    <fa-icon [icon]=\"faMinus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                            <input\n                                type=\"number\"\n                                class=\"form-control text-center bg-white\"\n                                min=\"0\"\n                                [(ngModel)]=\"redemption.oneKilogram\"\n                                name=\"oneKilogram\"\n                                disabled\n                            />\n                            <div class=\"input-group-append\">\n                                <button\n                                    class=\"btn btn-primary-air\"\n                                    type=\"button\"\n                                    (click)=\"addQuantity('oneKilogram')\"\n                                    [disabled]=\"willExceedBalance('oneKilogram')\"\n                                >\n                                    <fa-icon [icon]=\"faPlus\" [fixedWidth]=\"true\"></fa-icon>\n                                </button>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"font-md\">Redemption Method</label>\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"custom-control custom-radio btn border\" (click)=\"redemption.method = 'self-collect'\">\n                    <input\n                        type=\"radio\"\n                        class=\"custom-control-input\"\n                        id=\"self-collect\"\n                        name=\"self-collect\"\n                        value=\"self-collect\"\n                        [(ngModel)]=\"redemption.method\"\n                    />\n                    <label class=\"custom-control-label font-weight-normal\" for=\"self-collect\">Self Collect</label>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"custom-control custom-radio btn border\" (click)=\"redemption.method = 'delivery'\">\n                    <input type=\"radio\" class=\"custom-control-input\" id=\"delivery\" name=\"delivery\" value=\"delivery\" [(ngModel)]=\"redemption.method\" />\n                    <label class=\"custom-control-label font-weight-normal\" for=\"delivery\">Delivery</label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <ng-container *ngIf=\"redemption.method === 'self-collect'; else addressTemplate\">\n        <div>\n            <small> Self-Collection Address </small><br />\n            <small>\n                <b>\n                    Singapore Precious Metals Exchange Pte Ltd <br />\n                    Le Freeport, 32 Changi North Crescent, Singapore, 499643\n                </b>\n            </small>\n        </div>\n    </ng-container>\n    <ng-template #addressTemplate>\n        <div>\n            <address-form [(address)]=\"address\" #redemptionAddressForm></address-form>\n        </div>\n    </ng-template>\n    <button\n        type=\"submit\"\n        class=\"btn btn-primary btn-lg btn-block mt-3\"\n        [ngClass]=\"{ loading: isLoading }\"\n        [disabled]=\"isLoading\"\n        (click)=\"openRedeemModal()\"\n    >\n        Proceed\n    </button>\n</form>\n");

/***/ }),

/***/ "G1PJ":
/*!*******************************************************!*\
  !*** ./src/app/common/services/redemption.service.ts ***!
  \*******************************************************/
/*! exports provided: RedemptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedemptionService", function() { return RedemptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);




let RedemptionService = class RedemptionService {
    constructor(http) {
        this.http = http;
    }
    getOunces(redemption, unit) {
        if (redemption.type === 'gold') {
            switch (unit) {
                case 'oneGram':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.oneGram).times(0.0321507).toFixed(7, 1);
                case 'fiveGram':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.fiveGram).times(0.1607537).toFixed(7, 1);
                case 'fiftyGram':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.fiftyGram).times(1.6075373).toFixed(7, 1);
                case 'hundredGram':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.hundredGram).times(3.2150747).toFixed(7, 1);
                case 'thousandGram':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.thousandGram).times(32.1507466).toFixed(7, 1);
                default:
                    return '0.00';
            }
        }
        else {
            switch (unit) {
                case 'twoOunce':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.twoOunce).times(2).toFixed(7, 1);
                case 'fiveOunce':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.fiveOunce).times(5).toFixed(7, 1);
                case 'tenOunce':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.tenOunce).times(10).toFixed(7, 1);
                case 'hundredOunce':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.hundredOunce).times(100).toFixed(7, 1);
                case 'hundredGram':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.hundredGram).times(3.2150747).toFixed(7, 1);
                case 'oneKilogram':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.oneKilogram).times(32.1507466).toFixed(7, 1);
                default:
                    return '0.00';
            }
        }
    }
    totalOunces(redemption) {
        if (redemption.type === 'gold') {
            return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0)
                .plus(this.getOunces(redemption, 'oneGram'))
                .plus(this.getOunces(redemption, 'fiveGram'))
                .plus(this.getOunces(redemption, 'fiftyGram'))
                .plus(this.getOunces(redemption, 'hundredGram'))
                .plus(this.getOunces(redemption, 'thousandGram'))
                .toFixed(7, 1);
        }
        else {
            return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0)
                .plus(this.getOunces(redemption, 'twoOunce'))
                .plus(this.getOunces(redemption, 'fiveOunce'))
                .plus(this.getOunces(redemption, 'tenOunce'))
                .plus(this.getOunces(redemption, 'hundredOunce'))
                .plus(this.getOunces(redemption, 'hundredGram'))
                .plus(this.getOunces(redemption, 'oneKilogram'))
                .toFixed(7, 1);
        }
    }
    getGrams(redemption, unit) {
        if (redemption.type === 'gold') {
            switch (unit) {
                case 'oneGram':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.oneGram).times(1).toFixed(7, 1);
                case 'fiveGram':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.fiveGram).times(5).toFixed(7, 1);
                case 'fiftyGram':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.fiftyGram).times(50).toFixed(7, 1);
                case 'hundredGram':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.hundredGram).times(100).toFixed(7, 1);
                case 'thousandGram':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.thousandGram).times(1000).toFixed(7, 1);
                default:
                    return '0.00';
            }
        }
        else {
            switch (unit) {
                case 'twoOunce':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.twoOunce).times(62.2070437).toFixed(7, 1);
                case 'fiveOunce':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.fiveOunce).times(155.5176093).toFixed(7, 1);
                case 'tenOunce':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.tenOunce).times(311.0352185).toFixed(7, 1);
                case 'hundredOunce':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.hundredOunce).times(3110.3521852).toFixed(7, 1);
                case 'hundredGram':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.hundredGram).times(100).toFixed(7, 1);
                case 'oneKilogram':
                    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(redemption.oneKilogram).times(1000).toFixed(7, 1);
                default:
                    return '0.00';
            }
        }
    }
    totalGrams(redemption) {
        if (redemption.type === 'gold') {
            return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0)
                .plus(this.getGrams(redemption, 'oneGram'))
                .plus(this.getGrams(redemption, 'fiveGram'))
                .plus(this.getGrams(redemption, 'fiftyGram'))
                .plus(this.getGrams(redemption, 'hundredGram'))
                .plus(this.getGrams(redemption, 'thousandGram'))
                .toFixed(7, 1);
        }
        else {
            return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0)
                .plus(this.getGrams(redemption, 'twoOunce'))
                .plus(this.getGrams(redemption, 'fiveOunce'))
                .plus(this.getGrams(redemption, 'tenOunce'))
                .plus(this.getGrams(redemption, 'hundredOunce'))
                .plus(this.getGrams(redemption, 'hundredGram'))
                .plus(this.getGrams(redemption, 'oneKilogram'))
                .toFixed(7, 1);
        }
    }
    updateRedemption(redemption, status) {
        return this.http.put(`/admin/redemptions/${redemption.id}`, {
            status,
            type: redemption.type,
            method: redemption.method,
            transaction: redemption.transaction,
            shippingAddress: redemption.shippingAddress,
            denomination: {
                oneGram: redemption.oneGram,
                fiveGram: redemption.fiveGram,
                fiftyGram: redemption.fiftyGram,
                hundredGram: redemption.hundredGram,
                thousandGram: redemption.thousandGram,
                twoOunce: redemption.twoOunce,
                fiveOunce: redemption.fiveOunce,
                tenOunce: redemption.tenOunce,
                hundredOunce: redemption.hundredOunce,
                oneKilogram: redemption.oneKilogram,
            },
        });
    }
};
RedemptionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
RedemptionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], RedemptionService);



/***/ }),

/***/ "IP59":
/*!****************************************************************!*\
  !*** ./src/app/common/redemption/redemption-form.component.ts ***!
  \****************************************************************/
/*! exports provided: RedemptionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedemptionFormComponent", function() { return RedemptionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_redemption_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./redemption-form.component.html */ "6Vu2");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "WE53");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/store/wallets/wallets.query */ "O9sj");
/* harmony import */ var src_app_store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/store/wallets/wallets.service */ "hOWo");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/services/session.service */ "6g7h");
/* harmony import */ var _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/services/toastr.service */ "N/y2");
/* harmony import */ var _security_check_security_check_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../security-check/security-check.service */ "i32w");
/* harmony import */ var _services_redemption_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/redemption.service */ "G1PJ");
/* harmony import */ var _redemption_confirm_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./redemption-confirm-modal.component */ "WbrA");


















let RedemptionFormComponent = class RedemptionFormComponent {
    constructor(toastr, ngbModal, http, walletsService, session, securityCheckService, redemptionsService, walletsQuery, translate) {
        this.toastr = toastr;
        this.ngbModal = ngbModal;
        this.http = http;
        this.walletsService = walletsService;
        this.session = session;
        this.securityCheckService = securityCheckService;
        this.redemptionsService = redemptionsService;
        this.walletsQuery = walletsQuery;
        this.translate = translate;
        this.faPlus = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.faMinus = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMinus"];
        this.isLoading = false;
        this.types = ['gold', 'silver'];
        this.methods = ['self-collect', 'delivery'];
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].displayName;
        this.redemption = {
            method: this.methods[0],
            type: this.types[0],
            // Gold
            oneGram: 0,
            fiveGram: 0,
            fiftyGram: 0,
            hundredGram: 0,
            thousandGram: 0,
            // Silver
            twoOunce: 0,
            fiveOunce: 0,
            tenOunce: 0,
            hundredOunce: 0,
            oneKilogram: 0,
        };
        this.isUserSelectAllowed = false;
        this.isEditing = false;
        this.onRedemptionSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.userAutocomplete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.legalEntitiesSteam = this.userAutocomplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(search => this.http.get('/users', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('limit', '25').set('search', search),
        })));
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
    }
    ngOnInit() {
        this.subscriptions.add(this.walletsQuery
            .selectAll({ filterBy: wallet => ['AU', 'AG'].includes(wallet.currency.code) })
            .subscribe(wallets => {
            this.auWallet = wallets.find(wallet => wallet.currency.code === 'AU');
            this.agWallet = wallets.find(wallet => wallet.currency.code === 'AG');
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    addQuantity(type) {
        if (this.willExceedBalance(type)) {
            return;
        }
        ;
        this.redemption[type] += 1;
    }
    subtractQuantity(type) {
        if (this.redemption[type] === 0) {
            return;
        }
        ;
        this.redemption[type] -= 1;
    }
    openRedeemModal() {
        if (this.addressForm) {
            this.addressForm.submit();
        }
        if (this.redemption.method === 'delivery' && !this.addressForm.isValid()) {
            return;
        }
        const modal = this.ngbModal.open(_redemption_confirm_modal_component__WEBPACK_IMPORTED_MODULE_17__["RedemptionConfirmModalComponent"], {
            windowClass: 'modal-primary',
            backdrop: 'static',
        });
        const component = modal.componentInstance;
        component.redemption = this.redemption;
        component.address = this.address;
        component.onExecute.subscribe(() => {
            this.securityCheckService.getScopePermission('banking').subscribe(() => {
                this.submitRedemption();
                modal.close();
            });
        });
    }
    resetDenomination() {
        this.redemption.oneGram = 0;
        this.redemption.fiveGram = 0;
        this.redemption.fiftyGram = 0;
        this.redemption.hundredGram = 0;
        this.redemption.thousandGram = 0;
        this.redemption.twoOunce = 0;
        this.redemption.fiveOunce = 0;
        this.redemption.tenOunce = 0;
        this.redemption.hundredOunce = 0;
        this.redemption.oneKilogram = 0;
    }
    submitRedemption() {
        var _a, _b;
        this.isLoading = true;
        const body = {
            type: this.redemption.type,
            method: this.redemption.method,
            denomination: {
                oneGram: this.redemption.oneGram,
                fiveGram: this.redemption.fiveGram,
                fiftyGram: this.redemption.fiftyGram,
                hundredGram: this.redemption.hundredGram,
                thousandGram: this.redemption.thousandGram,
                twoOunce: this.redemption.twoOunce,
                fiveOunce: this.redemption.fiveOunce,
                tenOunce: this.redemption.tenOunce,
                hundredOunce: this.redemption.hundredOunce,
                oneKilogram: this.redemption.oneKilogram,
            },
            userId: (_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : this.session.user.id,
            transaction: {
                currency: {
                    code: this.redemption.type === 'gold' ? 'AU' : 'AG',
                },
                amount: this.redemptionsService.totalOunces(this.redemption),
            },
            shippingAddress: this.redemption.method === 'self-collect' ? null : this.address,
        };
        this.subscriptions.add(this.securityCheckService
            .getScopePermission('banking')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(() => this.isEditing
            ? this.http.put(`/admin/redemptions/${this.redemption.id}`, body)
            : this.http.post('/redemption', body)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.isLoading = false;
            this.resetDenomination();
            this.address = {};
            this.redemption.method = 'self-collect';
        }))
            .subscribe(() => {
            this.toastr.success(this.isEditing
                ? 'Redemption updated'
                : `${this.translate.instant('redemption-form.redemption-submitted')}`);
            this.onRedemptionSubmitted.emit();
            this.walletsService.fetch();
        }));
    }
    willExceedBalance(unit) {
        var _a, _b;
        const total = this.redemptionsService.totalOunces(this.redemption);
        const value = this.redemptionsService.getOunces({ type: this.redemption.type, [unit]: 1 }, unit);
        const balance = this.redemption.type === 'gold' ? (_a = this.auWallet) === null || _a === void 0 ? void 0 : _a.availableBalance : (_b = this.agWallet) === null || _b === void 0 ? void 0 : _b.availableBalance;
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_7___default.a(total).plus(value).isGreaterThan(balance || 0);
    }
};
RedemptionFormComponent.ctorParameters = () => [
    { type: _common_services_toastr_service__WEBPACK_IMPORTED_MODULE_14__["ToastrService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_11__["WalletsService"] },
    { type: _common_services_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"] },
    { type: _security_check_security_check_service__WEBPACK_IMPORTED_MODULE_15__["SecurityCheckService"] },
    { type: _services_redemption_service__WEBPACK_IMPORTED_MODULE_16__["RedemptionService"] },
    { type: src_app_store_wallets_wallets_query__WEBPACK_IMPORTED_MODULE_10__["WalletsQuery"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
RedemptionFormComponent.propDecorators = {
    redemption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    address: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isUserSelectAllowed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isEditing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onRedemptionSubmitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    addressForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['redemptionAddressForm',] }]
};
RedemptionFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'redemption-form',
        template: _raw_loader_redemption_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], RedemptionFormComponent);



/***/ }),

/***/ "KY6G":
/*!********************************************************!*\
  !*** ./src/app/common/redemption/redemption.module.ts ***!
  \********************************************************/
/*! exports provided: RedemptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedemptionModule", function() { return RedemptionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.module */ "a6Df");
/* harmony import */ var _redemption_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redemption-confirm-modal.component */ "WbrA");
/* harmony import */ var _redemption_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redemption-form.component */ "IP59");





let RedemptionModule = class RedemptionModule {
};
RedemptionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_redemption_form_component__WEBPACK_IMPORTED_MODULE_4__["RedemptionFormComponent"], _redemption_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["RedemptionConfirmModalComponent"]],
        exports: [_redemption_form_component__WEBPACK_IMPORTED_MODULE_4__["RedemptionFormComponent"]],
        imports: [_common_module__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
    })
], RedemptionModule);



/***/ }),

/***/ "WbrA":
/*!*************************************************************************!*\
  !*** ./src/app/common/redemption/redemption-confirm-modal.component.ts ***!
  \*************************************************************************/
/*! exports provided: RedemptionConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedemptionConfirmModalComponent", function() { return RedemptionConfirmModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_redemption_confirm_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./redemption-confirm-modal.component.html */ "clv9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_redemption_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/redemption.service */ "G1PJ");





let RedemptionConfirmModalComponent = class RedemptionConfirmModalComponent {
    constructor(activeModal, redemptionsService) {
        this.activeModal = activeModal;
        this.redemptionsService = redemptionsService;
        this.onExecute = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.confirmButtonText = 'Confirm & Email Collection Details';
        this.cancelButtonText = 'Cancel';
        this.denominations = [
            'oneGram',
            'fiveGram',
            'fiftyGram',
            'hundredGram',
            'thousandGram',
            'twoOunce',
            'fiveOunce',
            'tenOunce',
            'hundredOunce',
            'oneKilogram',
        ];
        this.isPreview = false;
    }
    buildDenomination(unit) {
        if (!this.redemption[unit]) {
            return '';
        }
        return `${this.redemption[unit]} x ${this.convertQuantityKey(unit)} (${this.redemptionsService.getOunces(this.redemption, unit)} ${this.redemption.type === 'gold' ? 'AU' : 'AG'})`;
    }
    convertQuantityKey(key) {
        switch (key) {
            case 'oneGram':
                return '1 Gram';
            case 'fiveGram':
                return '5 Gram';
            case 'fiftyGram':
                return '50 Gram';
            case 'hundredGram':
                return '100 Gram';
            case 'thousandGram':
                return '1000 Gram';
            case 'twoOunce':
                return '2 Ounce';
            case 'fiveOunce':
                return '5 Ounce';
            case 'tenOunce':
                return '10 Ounce';
            case 'hundredOunce':
                return '100 Ounce';
            case 'oneKilogram':
                return '1 Kilogram';
            default:
                return '';
        }
    }
    hasValue(unit) {
        return !!this.redemption[unit];
    }
};
RedemptionConfirmModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
    { type: _services_redemption_service__WEBPACK_IMPORTED_MODULE_4__["RedemptionService"] }
];
RedemptionConfirmModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'redemption-confirm-modal',
        template: _raw_loader_redemption_confirm_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], RedemptionConfirmModalComponent);



/***/ }),

/***/ "clv9":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/redemption/redemption-confirm-modal.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">Review and Execute</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"table-responsive\">\n        <table class=\"table table-striped table-borderless mb-0\">\n            <tbody>\n                <tr>\n                    <th class=\"font-weight-bold\" scope=\"row\">Precious Metal Type</th>\n                    <td>{{ redemption.type === 'gold' ? 'Gold Troy Ounce' : 'Silver Troy Ounce' }}</td>\n                </tr>\n                <tr>\n                    <th class=\"font-weight-bold\" scope=\"row\">Transaction Type</th>\n                    <td>{{ 'common.redeem' | translate }}</td>\n                </tr>\n                <tr>\n                    <th class=\"font-weight-bold align-top\" scope=\"row\">Redeem Denomination</th>\n                    <td class=\"align-top\">\n                        <ng-container *ngFor=\"let unit of denominations\">\n                            <div *ngIf=\"hasValue(unit)\">{{ buildDenomination(unit) }}</div>\n                        </ng-container>\n                    </td>\n                </tr>\n                <tr>\n                    <th class=\"font-weight-bold\" scope=\"row\">Redemption Method</th>\n                    <td>{{ redemption.method === 'self-collect' ? 'Self Collect' : 'Delivery' }}</td>\n                </tr>\n                <tr>\n                    <th class=\"font-weight-bold align-top\" scope=\"row\">\n                        {{ redemption.method === 'self-collect' ? 'Self Collection Details' : 'Delivery Address' }}\n                    </th>\n                    <td>\n                        <ng-container *ngIf=\"redemption.method === 'self-collect'; else deliveryTemplate\">\n                            <p class=\"mb-0\">{{ 'common.address' | translate }}:</p>\n                            <p>\n                                Singapore Precious Metals Exchange Pte Ltd <br />\n                                Le Freeport, 32 Changi North Crescent,<br />Singapore, 499643\n                            </p>\n                            <p class=\"mb-0\">Phone:</p>\n                            <p>+65 8877 8686</p>\n                            <p class=\"mb-0\">{{ 'common.email' | translate }}:</p>\n                            <p>customerservice@sgpmx.com</p>\n                        </ng-container>\n                        <ng-template #deliveryTemplate>\n                            <postal-address [address]=\"address\"></postal-address>\n                        </ng-template>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onExecute.emit()\" *ngIf=\"!isPreview\">{{ confirmButtonText }}</button>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"activeModal.dismiss()\">{{ cancelButtonText }}</button>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=default~admin-admin-module~user-redemption-user-redemption-module.js.map