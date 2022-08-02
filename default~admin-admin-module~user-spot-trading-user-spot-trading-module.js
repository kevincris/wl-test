(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~user-spot-trading-user-spot-trading-module"],{

/***/ "8ajw":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/spot-trading/spot-trading-form.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #spotTradeForm=\"ngForm\" (ngSubmit)=\"requestQuote()\" autocomplete=\"false\" novalidate>\n    <div *ngIf=\"isUserSelectAllowed\" class=\"form-group\">\n        <label class=\"font-md\">{{ 'common.user' | translate }}</label>\n        <ng-select\n            name=\"user\"\n            [placeholder]=\"'common.select-user' | translate\"\n            [(ngModel)]=\"user\"\n            bindValue=\"user\"\n            #userInput=\"ngModel\"\n            [items]=\"usersStream | async\"\n            [typeahead]=\"userAutocomplete\"\n            [clearable]=\"false\"\n            required\n        >\n            <ng-template ng-label-tmp let-item=\"item\">\n                <div class=\"d-flex align-items-center justify-content-center\">\n                    <user-display *ngIf=\"item\" [user]=\"item.user\"></user-display>\n                    <small *ngIf=\"item.user\" class=\"text-gray ml-1\">{{ item.user.email }}</small>\n                </div>\n            </ng-template>\n            <ng-template ng-option-tmp let-item=\"item\">\n                <div class=\"d-flex align-items-center justify-content-center\">\n                    <user-avatar *ngIf=\"item\" [user]=\"item.user\" size=\"sm\" elementClass=\"mr-2\"></user-avatar>\n                    <div class=\"w-100\">\n                        <ng-container *ngIf=\"item.user\">\n                            <div>{{ item.user.name }}</div>\n                            <small class=\"text-gray\">{{ item.user.email }}</small>\n                        </ng-container>\n                    </div>\n                </div>\n            </ng-template>\n        </ng-select>\n        <div *ngIf=\"userInput.invalid && (spotTradeForm.submitted || userInput.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"userInput?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"font-md\" for=\"instrument\">{{ 'common.instrument' | translate }}</label>\n        <ng-select\n            class=\"ng-select-lg\"\n            name=\"instrument\"\n            [placeholder]=\"'common.select-instrument' | translate\"\n            [items]=\"instruments\"\n            [searchable]=\"false\"\n            [clearable]=\"false\"\n            [(ngModel)]=\"copy.instrument\"\n            #instrument=\"ngModel\"\n            required\n        >\n            <ng-template ng-label-tmp let-item=\"item\">{{ buildCurrencyPair(item) }}</ng-template>\n            <ng-template ng-option-tmp let-item=\"item\">{{ buildCurrencyPair(item) }}</ng-template>\n        </ng-select>\n        <div *ngIf=\"instrument.invalid && (spotTradeForm.submitted || instrument.dirty)\" class=\"error-messages\">\n            <div class=\"form-control-feedback\" *ngIf=\"instrument?.errors?.required\">{{ 'common.this-is-required' | translate }}</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"font-md\">{{ 'common.side' | translate }}</label>\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"custom-control custom-radio btn btn-outline-danger btn-lg bg-transparent\" (click)=\"copy.side = 'sell'\">\n                    <input type=\"radio\" class=\"custom-control-input\" id=\"side-sell\" name=\"side\" value=\"sell\" [(ngModel)]=\"copy.side\" />\n                    <label class=\"custom-control-label text-danger font-weight-normal\" for=\"side-sell\">{{\n                        'common.sell' | translate | uppercase\n                    }}</label>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"custom-control custom-radio btn btn-outline-primary btn-lg bg-transparent\" (click)=\"copy.side = 'buy'\">\n                    <input type=\"radio\" class=\"custom-control-input\" id=\"side-buy\" name=\"side\" value=\"buy\" [(ngModel)]=\"copy.side\" />\n                    <label class=\"custom-control-label text-primary font-weight-normal\" for=\"side-buy\">{{\n                        'common.buy' | translate | uppercase\n                    }}</label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"font-md\" for=\"amount\">{{ 'common.amount' | translate }}</label>\n        <div class=\"input-group\">\n            <input\n                type=\"text\"\n                class=\"form-control form-control-lg\"\n                id=\"amount\"\n                name=\"amount\"\n                [(ngModel)]=\"copy.quantity\"\n                #amountInput=\"ngModel\"\n                emptyToNull\n                required\n            />\n            <div class=\"input-group-append\">\n                <span class=\"input-group-text font-lg\">{{ getBaseCurrency(copy.instrument) }}</span>\n            </div>\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" [ngClass]=\"{ loading: isLoading }\" [disabled]=\"isLoading\">\n        {{ 'common.request-quote' | translate }}\n    </button>\n</form>\n");

/***/ }),

/***/ "B25w":
/*!************************************************************!*\
  !*** ./src/app/common/spot-trading/spot-trading.module.ts ***!
  \************************************************************/
/*! exports provided: SpotTradingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotTradingModule", function() { return SpotTradingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-countdown */ "z+xu");
/* harmony import */ var ngx_trend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-trend */ "LNGT");
/* harmony import */ var _common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.module */ "a6Df");
/* harmony import */ var _spot_trading_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spot-trading-feed.component */ "uQ2D");
/* harmony import */ var _spot_trading_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spot-trading-form.component */ "JmQh");
/* harmony import */ var _spot_trading_quote_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spot-trading-quote-modal.component */ "pfSy");








let SpotTradingModule = class SpotTradingModule {
};
SpotTradingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_spot_trading_feed_component__WEBPACK_IMPORTED_MODULE_5__["SpotTradingFeedComponent"], _spot_trading_quote_modal_component__WEBPACK_IMPORTED_MODULE_7__["SpotTradingQuoteModalComponent"], _spot_trading_form_component__WEBPACK_IMPORTED_MODULE_6__["SpotTradingFormComponent"]],
        exports: [_spot_trading_feed_component__WEBPACK_IMPORTED_MODULE_5__["SpotTradingFeedComponent"], _spot_trading_quote_modal_component__WEBPACK_IMPORTED_MODULE_7__["SpotTradingQuoteModalComponent"], _spot_trading_form_component__WEBPACK_IMPORTED_MODULE_6__["SpotTradingFormComponent"]],
        imports: [_common_module__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ngx_trend__WEBPACK_IMPORTED_MODULE_3__["TrendModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_2__["CountdownModule"]],
    })
], SpotTradingModule);



/***/ }),

/***/ "JmQh":
/*!********************************************************************!*\
  !*** ./src/app/common/spot-trading/spot-trading-form.component.ts ***!
  \********************************************************************/
/*! exports provided: SpotTradingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotTradingFormComponent", function() { return SpotTradingFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_spot_trading_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./spot-trading-form.component.html */ "8ajw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/wallets/wallets.service */ "hOWo");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/session.service */ "6g7h");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/toastr.service */ "N/y2");
/* harmony import */ var _spot_trading_quote_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spot-trading-quote-modal.component */ "pfSy");










let SpotTradingFormComponent = class SpotTradingFormComponent {
    constructor(http, session, toastr, walletsService, ngbModal) {
        this.http = http;
        this.session = session;
        this.toastr = toastr;
        this.walletsService = walletsService;
        this.ngbModal = ngbModal;
        this.isUserSelectAllowed = false;
        this.onExecuteTrade = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.instruments = ['BTCUSD.SPOT', 'ETHUSD.SPOT', 'LTCUSD.SPOT', 'USTUSD.SPOT'];
        this.copy = {
            side: 'buy',
            instrument: this.instruments[0],
        };
        this.isLoading = false;
        this.userAutocomplete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.usersStream = this.userAutocomplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(search => this.http.get('/users', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('limit', '25').set('search', search),
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(results => results.map(user => ({ user }))));
    }
    requestQuote() {
        var _a, _b;
        this.isLoading = true;
        this.http
            .post('/spot-trades/request-for-quote', Object.assign(Object.assign({}, this.copy), { userId: (_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : this.session.user.id }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.isLoading = false;
        }))
            .subscribe(response => {
            this.openQuoteModal(response);
        });
    }
    executeTrade(trade) {
        var _a, _b;
        this.isLoading = true;
        this.http
            .post('/spot-trades', Object.assign(Object.assign({}, trade), { userId: (_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : this.session.user.id }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.isLoading = false;
        }))
            .subscribe(() => {
            this.toastr.success('Trade executed');
            if (this.spotTradeForm) {
                this.spotTradeForm.form.markAsUntouched();
            }
            this.copy = {
                side: trade.side,
                instrument: this.instruments[0],
            };
            this.walletsService.fetch();
            this.onExecuteTrade.next();
        });
    }
    openQuoteModal(trade) {
        const modal = this.ngbModal.open(_spot_trading_quote_modal_component__WEBPACK_IMPORTED_MODULE_9__["SpotTradingQuoteModalComponent"], {
            windowClass: trade.side === 'buy' ? 'modal-primary' : 'modal-danger',
            backdrop: 'static',
        });
        const component = modal.componentInstance;
        component.trade = trade;
        component.onExecute.subscribe(() => {
            modal.close();
            this.executeTrade(trade);
        });
    }
    getBaseCurrency(instrument) {
        if (!instrument) {
            return '';
        }
        const parts = instrument.split('.');
        return parts[0].slice(0, 3);
    }
    buildCurrencyPair(instrument) {
        if (!instrument) {
            return '';
        }
        const parts = instrument.split('.');
        return `${parts[0].slice(0, 3)} / ${parts[0].slice(3, 6)}`;
    }
};
SpotTradingFormComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: _services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
    { type: src_app_store_wallets_wallets_service__WEBPACK_IMPORTED_MODULE_6__["WalletsService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
SpotTradingFormComponent.propDecorators = {
    isUserSelectAllowed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onExecuteTrade: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    spotTradeForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['spotTradeForm',] }]
};
SpotTradingFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'spot-trading-form',
        template: _raw_loader_spot_trading_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], SpotTradingFormComponent);



/***/ }),

/***/ "LNGT":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-trend/__ivy_ngcc__/fesm2015/ngx-trend.js ***!
  \*******************************************************************/
/*! exports provided: TrendComponent, TrendModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendComponent", function() { return TrendComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendModule", function() { return TrendModule; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




/* eslint-disable no-restricted-properties */
/** normalize
 * This lets us translate a value from one scale to another.
 *
 * @param value - Our initial value to translate
 * @param min - the current minimum value possible
 * @param max - the current maximum value possible
 * @param scaleMin - the min value of the scale we're translating to
 * @param scaleMax - the max value of the scale we're translating to
 * @returns the value on its new scale
 */



const _c0 = ["pathEl"];
function TrendComponent__svg_svg_0__svg_defs_1__svg_stop_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "stop");
} if (rf & 2) {
    const g_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("key", g_r4.idx)("offset", g_r4.offset)("stop-color", g_r4.stopColor);
} }
function TrendComponent__svg_svg_0__svg_defs_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "linearGradient", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TrendComponent__svg_svg_0__svg_defs_1__svg_stop_2_Template, 1, 3, "stop", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx_r1.gradientId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.gradientTrimmed);
} }
const _c1 = function (a0, a1, a2) { return { autoDrawDuration: a0, autoDrawEasing: a1, lineLength: a2 }; };
const _c2 = function (a0, a1) { return { value: a0, params: a1 }; };
function TrendComponent__svg_svg_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TrendComponent__svg_svg_0__svg_defs_1_Template, 3, 2, "defs", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("width", ctx_r0.svgWidth)("height", ctx_r0.svgHeight)("stroke", ctx_r0.stroke)("stroke-width", ctx_r0.strokeWidth)("stroke-linecap", ctx_r0.strokeLinecap)("viewBox", ctx_r0.viewBox)("preserveAspectRatio", ctx_r0.preserveAspectRatio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.gradient && ctx_r0.gradient.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@pathAnimaiton", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](15, _c2, ctx_r0.animationState, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](11, _c1, ctx_r0.autoDrawDuration, ctx_r0.autoDrawEasing, ctx_r0.lineLength)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("stroke", ctx_r0.pathStroke)("d", ctx_r0.d);
} }
function normalize(value, min, max, scaleMin = 0, scaleMax = 1) {
    // If the `min` and `max` are the same value, it means our dataset is flat.
    // For now, let's assume that flat data should be aligned to the bottom.
    if (min === max) {
        return scaleMin;
    }
    return scaleMin + (value - min) * (scaleMax - scaleMin) / (max - min);
}
/** moveTo
 * the coordinate that lies at a midpoint between 2 lines, based on the radius
 *
 * @param to - Our initial point
 * @param to.x - The x value of our initial point
 * @param to.y - The y value of our initial point
 * @param from - Our final point
 * @param from.x - The x value of our final point
 * @param from.y - The y value of our final point
 * @param radius - The distance away from the final point
 * @returns an object holding the x/y coordinates of the midpoint.
 */
function moveTo(to, from, radius) {
    const length = Math.sqrt((to.x - from.x) * (to.x - from.x) + (to.y - from.y) * (to.y - from.y));
    const unitVector = { x: (to.x - from.x) / length, y: (to.y - from.y) / length };
    return {
        x: from.x + unitVector.x * radius,
        y: from.y + unitVector.y * radius,
    };
}
/** getDistanceBetween
 * Simple formula derived from pythagoras to calculate the distance between
 * 2 points on a plane.
 *
 * @param p1 - Our initial point
 * @param p1.x - The x value of our initial point
 * @param p1.y - The y value of our initial point
 * @param p2 - Our final point
 * @param p2.x - The x value of our final point
 * @param p2.y - The y value of our final point
 * @returns the distance between the points.
 */
const getDistanceBetween = (p1, p2) => Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
/** checkForCollinearPoints
 * Figure out if the midpoint fits perfectly on a line between the two others.
 *
 * @param p1 - Our initial point
 * @param p1.x - The x value of our initial point
 * @param p1.y - The y value of our initial point
 * @param p2 - Our mid-point
 * @param p2.x - The x value of our mid-point
 * @param p2.y - The y value of our mid-point
 * @param p3 - Our final point
 * @param p3.x - The x value of our final point
 * @param p3.y - The y value of our final point
 * @returns whether or not p2 sits on the line between p1 and p3.
 */
const checkForCollinearPoints = (p1, p2, p3) => (p1.y - p2.y) * (p1.x - p3.x) === (p1.y - p3.y) * (p1.x - p2.x);

const buildLinearPath = (data) => data.reduce((path, point, index) => {
    // The very first instruction needs to be a "move".
    // The rest will be a "line".
    const isFirstInstruction = index === 0;
    const instruction = isFirstInstruction ? 'M' : 'L';
    return `${path}${instruction} ${point.x},${point.y}\n`;
}, '');
function buildSmoothPath(data, radius) {
    const [firstPoint, ...otherPoints] = data;
    return otherPoints.reduce((path, point, index) => {
        const next = otherPoints[index + 1];
        const prev = otherPoints[index - 1] || firstPoint;
        const isCollinear = next && checkForCollinearPoints(prev, point, next);
        if (!next || isCollinear) {
            // The very last line in the sequence can just be a regular line.
            return `${path}\nL ${point.x},${point.y}`;
        }
        const distanceFromPrev = getDistanceBetween(prev, point);
        const distanceFromNext = getDistanceBetween(next, point);
        const threshold = Math.min(distanceFromPrev, distanceFromNext);
        const isTooCloseForRadius = threshold / 2 < radius;
        const radiusForPoint = isTooCloseForRadius ? threshold / 2 : radius;
        const before = moveTo(prev, point, radiusForPoint);
        const after = moveTo(next, point, radiusForPoint);
        return [
            path,
            `L ${before.x},${before.y}`,
            `S ${point.x},${point.y} ${after.x},${after.y}`,
        ].join('\n');
    }, `M ${firstPoint.x},${firstPoint.y}`);
}

const generateId = () => Math.round(Math.random() * Math.pow(10, 16));

function normalizeDataset(data, minX, maxX, minY, maxY) {
    // For the X axis, we want to normalize it based on its index in the array.
    // For the Y axis, we want to normalize it based on the element's value.
    //
    // X axis is easy: just evenly-space each item in the array.
    // For the Y axis, we first need to find the min and max of our array,
    // and then normalize those values between 0 and 1.
    const boundariesX = { min: 0, max: data.length - 1 };
    const boundariesY = { min: Math.min(...data), max: Math.max(...data) };
    const normalizedData = data.map((point, index) => ({
        x: normalize(index, boundariesX.min, boundariesX.max, minX, maxX),
        y: normalize(point, boundariesY.min, boundariesY.max, minY, maxY),
    }));
    // According to the SVG spec, paths with a height/width of `0` can't have
    // linear gradients applied. This means that our lines are invisible when
    // the dataset is flat (eg. [0, 0, 0, 0]).
    //
    // The hacky solution is to apply a very slight offset to the first point of
    // the dataset. As ugly as it is, it's the best solution we can find (there
    // are ways within the SVG spec of changing it, but not without causing
    // breaking changes).
    if (boundariesY.min === boundariesY.max) {
        normalizedData[0].y += 0.0001;
    }
    return normalizedData;
}

class TrendComponent {
    constructor() {
        this.autoDraw = false;
        this.autoDrawDuration = 2000;
        this.autoDrawEasing = 'ease';
        this.padding = 8;
        this.radius = 10;
        this.stroke = 'black';
        this.strokeLinecap = '';
        this.strokeWidth = 1;
        this.gradient = [];
        this.svgHeight = '25%';
        this.svgWidth = '100%';
        this.animationState = '';
        this.id = generateId();
        this.gradientId = `ngx-trend-vertical-gradient-${this.id}`;
    }
    ngOnChanges() {
        // We need at least 2 points to draw a graph.
        if (!this.data || this.data.length < 2) {
            return;
        }
        // `data` can either be an array of numbers:
        // [1, 2, 3]
        // or, an array of objects containing a value:
        // [{ value: 1 }, { value: 2 }, { value: 3 }]
        //
        // For now, we're just going to convert the second form to the first.
        // Later on, if/when we support tooltips, we may adjust.
        const plainValues = this.data.map(point => {
            if (typeof point === 'number') {
                return point;
            }
            return point.value;
        });
        // Our viewbox needs to be in absolute units, so we'll default to 300x75
        // Our SVG can be a %, though; this is what makes it scalable.
        // By defaulting to percentages, the SVG will grow to fill its parent
        // container, preserving a 1/4 aspect ratio.
        const viewBoxWidth = this.width || 300;
        const viewBoxHeight = this.height || 75;
        this.svgWidth = this.width || '100%';
        this.svgHeight = this.height || '25%';
        this.viewBox = `0 0 ${viewBoxWidth} ${viewBoxHeight}`;
        const root = location.href.split(location.hash || '#')[0];
        this.pathStroke =
            this.gradient && this.gradient.length ? `url('${root}#${this.gradientId}')` : undefined;
        this.gradientTrimmed = this.gradient
            .slice()
            .reverse()
            .map((val, idx) => {
            return {
                idx,
                stopColor: val,
                offset: normalize(idx, 0, this.gradient.length - 1 || 1),
            };
        });
        const normalizedValues = normalizeDataset(plainValues, this.padding, viewBoxWidth - this.padding, 
        // NOTE: Because SVGs are indexed from the top left, but most data is
        // indexed from the bottom left, we're inverting the Y min/max.
        viewBoxHeight - this.padding, this.padding);
        if (this.autoDraw && this.animationState !== 'active') {
            this.animationState = 'inactive';
            setTimeout(() => {
                this.lineLength = this.pathEl.nativeElement.getTotalLength();
                this.animationState = 'active';
            });
        }
        this.d = this.smooth
            ? buildSmoothPath(normalizedValues, this.radius)
            : buildLinearPath(normalizedValues);
    }
}
TrendComponent.ɵfac = function TrendComponent_Factory(t) { return new (t || TrendComponent)(); };
TrendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrendComponent, selectors: [["ngx-trend"]], viewQuery: function TrendComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.pathEl = _t.first);
    } }, inputs: { autoDraw: "autoDraw", autoDrawDuration: "autoDrawDuration", autoDrawEasing: "autoDrawEasing", padding: "padding", radius: "radius", stroke: "stroke", strokeLinecap: "strokeLinecap", strokeWidth: "strokeWidth", gradient: "gradient", svgHeight: "svgHeight", svgWidth: "svgWidth", data: "data", smooth: "smooth", width: "width", height: "height", preserveAspectRatio: "preserveAspectRatio" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["fill", "none"], ["pathEl", ""], ["x1", "0%", "y1", "0%", "x2", "0%", "y2", "100%"], [4, "ngFor", "ngForOf"]], template: function TrendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TrendComponent__svg_svg_0_Template, 4, 18, "svg", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.length >= 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('pathAnimaiton', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'none' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => active', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'initial' }),
                    // We do the animation using the dash array/offset trick
                    // https://css-tricks.com/svg-line-animation-works/
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ autoDrawDuration }}ms {{ autoDrawEasing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'stroke-dasharray': '{{ lineLength }}px',
                            'stroke-dashoffset': '{{ lineLength }}px'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'stroke-dasharray': '{{ lineLength }}px',
                            'stroke-dashoffset': 0
                        }),
                    ])),
                    // One unfortunate side-effect of the auto-draw is that the line is
                    // actually 1 big dash, the same length as the line itself. If the
                    // line length changes (eg. radius change, new data), that dash won't
                    // be the same length anymore. We can fix that by removing those
                    // properties once the auto-draw is completed.
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        'stroke-dashoffset': '',
                        'stroke-dasharray': ''
                    }),
                ]),
            ]),
        ] } });
TrendComponent.ctorParameters = () => [];
TrendComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    smooth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    autoDraw: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    autoDrawDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    autoDrawEasing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    stroke: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeLinecap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    gradient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    preserveAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    svgHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    svgWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pathEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['pathEl',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TrendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngx-trend',
                template: `
    <svg
      *ngIf="data && data.length >= 2"
      [attr.width]="svgWidth"
      [attr.height]="svgHeight"
      [attr.stroke]="stroke"
      [attr.stroke-width]="strokeWidth"
      [attr.stroke-linecap]="strokeLinecap"
      [attr.viewBox]="viewBox"
      [attr.preserveAspectRatio]="preserveAspectRatio"
    >
      <defs *ngIf="gradient && gradient.length">
        <linearGradient [attr.id]="gradientId" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            *ngFor="let g of gradientTrimmed"
            [attr.key]="g.idx"
            [attr.offset]="g.offset"
            [attr.stop-color]="g.stopColor"
          />
        </linearGradient>
      </defs>
      <path
        fill="none"
        #pathEl
        [attr.stroke]="pathStroke"
        [attr.d]="d"
        [@pathAnimaiton]="{
          value: animationState,
          params: {
            autoDrawDuration: autoDrawDuration,
            autoDrawEasing: autoDrawEasing,
            lineLength: lineLength
          }
        }"
      />
    </svg>
  `,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('pathAnimaiton', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'none' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => active', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'initial' }),
                            // We do the animation using the dash array/offset trick
                            // https://css-tricks.com/svg-line-animation-works/
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ autoDrawDuration }}ms {{ autoDrawEasing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    'stroke-dasharray': '{{ lineLength }}px',
                                    'stroke-dashoffset': '{{ lineLength }}px'
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    'stroke-dasharray': '{{ lineLength }}px',
                                    'stroke-dashoffset': 0
                                }),
                            ])),
                            // One unfortunate side-effect of the auto-draw is that the line is
                            // actually 1 big dash, the same length as the line itself. If the
                            // line length changes (eg. radius change, new data), that dash won't
                            // be the same length anymore. We can fix that by removing those
                            // properties once the auto-draw is completed.
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                'stroke-dashoffset': '',
                                'stroke-dasharray': ''
                            }),
                        ]),
                    ]),
                ]
            }]
    }], function () { return []; }, { autoDraw: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autoDrawDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autoDrawEasing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], stroke: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeLinecap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], gradient: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], svgHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], svgWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], smooth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], preserveAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pathEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['pathEl']
        }] }); })();

class TrendModule {
}
TrendModule.ɵfac = function TrendModule_Factory(t) { return new (t || TrendModule)(); };
TrendModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TrendModule });
TrendModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TrendModule, { declarations: function () { return [TrendComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [TrendComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TrendModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                exports: [TrendComponent],
                declarations: [TrendComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-trend.js.map

/***/ }),

/***/ "Z9rc":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/spot-trading/spot-trading-feed.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"crypto-prices\">\n    <div class=\"crypto-prices-item\" *ngFor=\"let stat of stats\">\n        <div class=\"crypto-prices-info\">\n            <div class=\"info-tag mb-1\">\n                <img src=\"/img/icons/btc.svg\" alt=\"Bitcoin\" *ngIf=\"stat.symbol === 'BTC'\" />\n                <img src=\"/img/icons/eth.svg\" alt=\"Ethereum\" *ngIf=\"stat.symbol === 'ETH'\" />\n                <img src=\"/img/icons/ltc.svg\" alt=\"Litecoin\" *ngIf=\"stat.symbol === 'LTC'\" />\n                <img src=\"/img/icons/usdt.svg\" alt=\"Tether\" *ngIf=\"stat.symbol === 'USDT'\" />\n                <div class=\"mt-1\">{{ stat.name }}</div>\n                <div>{{ stat.symbol }}</div>\n                <div class=\"d-flex justify-content-between text-gray\">\n                    <div>\n                        <span [ngClass]=\"getDailyChange(stat.symbol) < 0 ? 'text-danger' : 'text-green'\">\n                            {{ getDailyChange(stat.symbol) | number: '1.2-2' }}%\n                        </span>\n                        <small> (24h)</small>\n                    </div>\n                    <div>\n                        <small>(7d) </small>\n                        <span [ngClass]=\"getWeeklyChange(stat.symbol) < 0 ? 'text-danger' : 'text-green'\">\n                            {{ getWeeklyChange(stat.symbol) | number: '1.2-2' }}%\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"info-trend\">\n                <ngx-trend\n                    [data]=\"getTrend(stat.symbol)\"\n                    [stroke]=\"getWeeklyChange(stat.symbol) < 0 ? '#d94a3d' : '#50b652'\"\n                    strokeWidth=\"2\"\n                    [autoDraw]=\"true\"\n                    [autoDrawDuration]=\"1500\"\n                ></ngx-trend>\n            </div>\n        </div>\n        <div class=\"d-flex justify-content-between\">\n            <span class=\"crypto-prices-value\">\n                <span>{{ 'common.sell' | translate }}</span>\n                <span class=\"text-danger\">${{ getPriceSide(stat.symbol, 'sell') | amount: 2 }}</span>\n            </span>\n            <span class=\"crypto-prices-value\">\n                <span>{{ 'common.buy' | translate }}</span>\n                <span class=\"text-primary\">${{ getPriceSide(stat.symbol, 'buy') | amount: 2 }}</span>\n            </span>\n        </div>\n    </div>\n</div>\n<div class=\"small text-muted mb-1 mt-1 text-right pr-1\">{{ 'common.last-update' | translate }}: {{ rates?.timestamp | date: 'medium' }}</div>\n");

/***/ }),

/***/ "ajEU":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/spot-trading/spot-trading-quote-modal.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h5 class=\"modal-title\">Review and Execute</h5>\n    <button type=\"button\" class=\"btn btn-round close close-modal\" (click)=\"activeModal.dismiss()\">&times;</button>\n</div>\n<div class=\"modal-body\">\n    <table class=\"table table-striped table-borderless mb-0\">\n        <tbody>\n            <tr>\n                <th class=\"font-weight-bold\" scope=\"row\">Instrument</th>\n                <td>{{ trade.instrument }}</td>\n            </tr>\n            <tr>\n                <th class=\"font-weight-bold\" scope=\"row\">Direction</th>\n                <td class=\"text-uppercase\">{{ trade.side }}</td>\n            </tr>\n            <tr>\n                <th class=\"font-weight-bold\" scope=\"row\">Amount</th>\n                <td>{{ trade.quantity | amount: 8 }} {{ baseCurrency }}</td>\n            </tr>\n            <tr>\n                <th class=\"font-weight-bold\" scope=\"row\">Price</th>\n                <td>{{ trade.price | amount: 2 }} {{ counterCurrency }}</td>\n            </tr>\n            <tr>\n                <th class=\"font-weight-bold\" scope=\"row\">Total</th>\n                <td class=\"font-weight-bold\" [ngClass]=\"trade.side === 'buy' ? 'text-primary' : 'text-danger'\">\n                    {{ total | amount: 2 }} {{ counterCurrency }}\n                </td>\n            </tr>\n            <tr>\n                <th class=\"font-weight-bold\" scope=\"row\">Expiry</th>\n                <td><countdown #cd [config]=\"{ leftTime: expiry, format: 'ss' }\" (event)=\"onCountdownEvent($event)\"></countdown> seconds</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn\" [ngClass]=\"trade.side === 'buy' ? 'btn-primary' : 'btn-danger'\" (click)=\"onExecute.emit()\">\n        <span class=\"text-capitalize\">{{ trade.side }}</span> {{ trade.quantity | amount: 8 }} {{ baseCurrency }}\n    </button>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"activeModal.dismiss()\">Cancel</button>\n</div>\n");

/***/ }),

/***/ "iEmy":
/*!*****************************************************************!*\
  !*** ./src/app/common/spot-trading/spot-trading.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".crypto-prices {\n  background: #e3e8f0;\n  border-radius: 0.5rem;\n  display: flex;\n  justify-content: flex-start;\n  align-content: space-evenly;\n  align-items: center;\n}\n.crypto-prices-item {\n  min-width: 150px;\n  width: 50%;\n  padding: 0.6rem;\n  font-weight: 500;\n  border-radius: 0.25rem;\n  border: 1px solid transparent;\n}\n.crypto-prices-item:hover {\n  background: rgba(0, 0, 0, 0.025);\n}\n.crypto-prices-info {\n  position: relative;\n  height: 108px;\n}\n.crypto-prices-info .info-tag {\n  position: absolute;\n  width: 100%;\n}\n.crypto-prices-info .info-trend {\n  padding: 0.5rem;\n  padding-left: 4.5rem;\n}\n.crypto-prices-value {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-self: center;\n  padding: 0.5rem 0;\n  text-align: center;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.crypto-prices-value:first-child {\n  border-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Nwb3QtdHJhZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUNJO0VBQ0UsZ0NBQUE7QUFDTjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBREo7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUROO0FBSUk7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUFGTjtBQU1FO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQUpKO0FBTUk7RUFDRSxlQUFBO0FBSk4iLCJmaWxlIjoic3BvdC10cmFkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyeXB0by1wcmljZXMge1xuICBiYWNrZ3JvdW5kOiBkYXJrZW4oI2YwZjNmNywgNCUpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYtaXRlbSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMjUpO1xuICAgIH1cbiAgfVxuXG4gICYtaW5mbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTA4cHg7XG5cbiAgICAuaW5mby10YWcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmluZm8tdHJlbmQge1xuICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgcGFkZGluZy1sZWZ0OiA0LjVyZW07XG4gICAgfVxuICB9XG5cbiAgJi12YWx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "pfSy":
/*!***************************************************************************!*\
  !*** ./src/app/common/spot-trading/spot-trading-quote-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: SpotTradingQuoteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotTradingQuoteModalComponent", function() { return SpotTradingQuoteModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_spot_trading_quote_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./spot-trading-quote-modal.component.html */ "ajEU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/differenceInSeconds */ "qVkf");
/* harmony import */ var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/confirmation.service */ "fTmd");







let SpotTradingQuoteModalComponent = class SpotTradingQuoteModalComponent {
    constructor(activeModal, confirmation) {
        this.activeModal = activeModal;
        this.confirmation = confirmation;
        this.onExecute = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnInit() {
        this.expiry = Object(date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(this.trade.validUntil), new Date());
    }
    ngAfterViewInit() {
        this.countdown.begin();
    }
    get baseCurrency() {
        const parts = this.trade.instrument.split('.');
        return parts[0].slice(0, 3);
    }
    get counterCurrency() {
        const parts = this.trade.instrument.split('.');
        return parts[0].slice(3, 6);
    }
    get total() {
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(this.trade.price).times(this.trade.quantity).toFixed(2, 1);
    }
    onCountdownEvent(event) {
        if (event.action === 'done') {
            this.activeModal.dismiss();
            // TODO: Just renew quote instead of show expiry
            this.confirmation
                .show({
                type: 'info',
                title: 'Quote Expired',
                text: `Your quote expired. Please request a new quote.`,
                confirmClass: 'info',
                showCancel: false,
            })
                .subscribe(() => undefined);
        }
    }
};
SpotTradingQuoteModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
    { type: _services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"] }
];
SpotTradingQuoteModalComponent.propDecorators = {
    countdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['cd', { static: false },] }]
};
SpotTradingQuoteModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'spot-trading-quote-modal',
        template: _raw_loader_spot_trading_quote_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], SpotTradingQuoteModalComponent);



/***/ }),

/***/ "uQ2D":
/*!********************************************************************!*\
  !*** ./src/app/common/spot-trading/spot-trading-feed.component.ts ***!
  \********************************************************************/
/*! exports provided: SpotTradingFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotTradingFeedComponent", function() { return SpotTradingFeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_spot_trading_feed_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./spot-trading-feed.component.html */ "Z9rc");
/* harmony import */ var _spot_trading_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spot-trading.component.scss */ "iEmy");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "WE53");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);







let SpotTradingFeedComponent = class SpotTradingFeedComponent {
    constructor(http) {
        this.http = http;
        this.stats = [
            {
                name: 'Bitcoin',
                symbol: 'BTC',
            },
            {
                name: 'Ethereum',
                symbol: 'ETH',
            },
            {
                name: 'Litecoin',
                symbol: 'LTC',
            },
            {
                name: 'Tether',
                symbol: 'USDT',
            },
        ];
        this.faArrowAltToBottom = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowAltToBottom"];
        this.faArrowAltFromBottom = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowAltFromBottom"];
    }
    ngOnInit() {
        this.http.get('/spot-trades/rates').subscribe(rates => (this.rates = rates));
    }
    getDailyChange(ticker) {
        var _a;
        return this.rates && ((_a = this.rates.data[ticker]) === null || _a === void 0 ? void 0 : _a.percent_change_24h);
    }
    getWeeklyChange(ticker) {
        var _a;
        return this.rates && ((_a = this.rates.data[ticker]) === null || _a === void 0 ? void 0 : _a.percent_change_7d);
    }
    getTrend(ticker) {
        return this.rates && this.rates.data[ticker].trend_7d;
    }
    getPrice(ticker) {
        return ((this.rates && this.rates.data[ticker].current_price) || 1).toFixed(2);
    }
    getPriceSide(ticker, side) {
        const spread = side === 'buy' ? '1.04' : '0.96';
        return new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(this.getPrice(ticker)).times(spread).toFixed(2);
    }
};
SpotTradingFeedComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SpotTradingFeedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'spot-trading-feed',
        template: _raw_loader_spot_trading_feed_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_spot_trading_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SpotTradingFeedComponent);



/***/ })

}]);
//# sourceMappingURL=default~admin-admin-module~user-spot-trading-user-spot-trading-module.js.map