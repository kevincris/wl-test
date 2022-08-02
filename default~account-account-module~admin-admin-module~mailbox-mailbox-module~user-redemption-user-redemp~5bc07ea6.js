(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~account-account-module~admin-admin-module~mailbox-mailbox-module~user-redemption-user-redemp~5bc07ea6"],{

/***/ "qhtW":
/*!*********************************************!*\
  !*** ./src/app/common/list-v2.component.ts ***!
  \*********************************************/
/*! exports provided: Scope, ListV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListV2Component", function() { return ListV2Component; });
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
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/session.service */ "6g7h");












var Scope;
(function (Scope) {
    Scope["DEFAULT"] = "default";
})(Scope || (Scope = {}));
/**
 * Base class for list controllers.
 */
let ListV2Component = class ListV2Component {
    constructor(http, ngbModal, changeDetector, route, router, session) {
        this.http = http;
        this.ngbModal = ngbModal;
        this.changeDetector = changeDetector;
        this.route = route;
        this.router = router;
        this.session = session;
        this.scope = Scope.DEFAULT;
        this.search = '';
        this.limitOpts = [5, 8, 10, 12, 15, 20, 50];
        this.offset = 0;
        this.count = 0;
        this.queryParams = {};
        this.searchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.paginationEvent = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.isFetching = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](false);
        this.isFilterOptionsCollapsed = true;
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
        this.updateEvent = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
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
            this.count = response.body.meta.count;
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
            this.fill = new Array(this.limit - response.body.data.length);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(response => response.body.data.map(item => this.mapItem(item))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(() => {
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
                    this.isFilterOptionsCollapsed = false;
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
    requestExport() {
        this.subscriptions.add(this.http
            .get(this.apiUrl, {
            params: this.generateListParams({ limit: 1000 }).delete('offset'),
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
ListV2Component.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"] }
];
ListV2Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'undef-list-v2',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        template: '',
    })
], ListV2Component);



/***/ })

}]);
//# sourceMappingURL=default~account-account-module~admin-admin-module~mailbox-mailbox-module~user-redemption-user-redemp~5bc07ea6.js.map