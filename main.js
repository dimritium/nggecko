(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\r\n    display: flex;\r\n}\r\n\r\napp-coins {\r\n    margin: 70px 10px;\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"main-content\">\n    <app-header></app-header>  \n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'stockify';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _coins_coins_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coins/coins.component */ "./src/app/coins/coins.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _common_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/components/header/header.component */ "./src/common/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coin_detail_coin_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./coin-detail/coin-detail.component */ "./src/app/coin-detail/coin-detail.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'coins/:id', component: _coin_detail_coin_detail_component__WEBPACK_IMPORTED_MODULE_10__["CoinDetailComponent"] },
    { path: 'coins', component: _coins_coins_component__WEBPACK_IMPORTED_MODULE_4__["CoinsComponent"], data: { title: 'Coins' } },
    { path: '', redirectTo: '/coins', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _coins_coins_component__WEBPACK_IMPORTED_MODULE_4__["CoinsComponent"],
                _common_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _coin_detail_coin_detail_component__WEBPACK_IMPORTED_MODULE_10__["CoinDetailComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // only for debugging purpose
                ),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/coin-detail/coin-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/coin-detail/coin-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/coin-detail/coin-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/coin-detail/coin-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"margin-top:50%\">\n  In coin details\n</p>\n"

/***/ }),

/***/ "./src/app/coin-detail/coin-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/coin-detail/coin-detail.component.ts ***!
  \******************************************************/
/*! exports provided: CoinDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinDetailComponent", function() { return CoinDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stocks.service */ "./src/app/stocks.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoinDetailComponent = /** @class */ (function () {
    function CoinDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.coins$ = {};
        this.coins$.service = service;
        this.coins$.router = router;
        this.coins$.service = service;
    }
    CoinDetailComponent.prototype.ngOnInit = function () {
        console.log(Object.keys(this.coins$.router));
        console.log(this.coins$.router['navigationId']);
    };
    CoinDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coin-detail',
            template: __webpack_require__(/*! ./coin-detail.component.html */ "./src/app/coin-detail/coin-detail.component.html"),
            styles: [__webpack_require__(/*! ./coin-detail.component.css */ "./src/app/coin-detail/coin-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _stocks_service__WEBPACK_IMPORTED_MODULE_2__["StocksService"]])
    ], CoinDetailComponent);
    return CoinDetailComponent;
}());



/***/ }),

/***/ "./src/app/coins/coins.component.css":
/*!*******************************************!*\
  !*** ./src/app/coins/coins.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.coins-table {\r\n    padding: 0 15px 0 0px;\r\n}\r\n\r\n.price {\r\n    color: #ffdc73;\r\n    font-weight: 500;\r\n}\r\n\r\n.thumbnail {\r\n    height: 20px;\r\n    widows: 20px;\r\n    margin-right: 5px;\r\n    vertical-align: bottom;\r\n}\r\n\r\n.coin-id {\r\n    font-size: smaller;\r\n    margin-left: 8px;\r\n}\r\n\r\n.redtext {\r\n    color: red;\r\n    font-weight: 500;\r\n}\r\n\r\n.greentext {\r\n    color: green;\r\n    font-weight: 500;\r\n}\r\n\r\n.cdk-column-curr_price,\r\n.cdk-column-per_chn_1h,\r\n.cdk-column-per_chn_24h,\r\n.cdk-column-per_chn_7d,\r\n.cdk-column-mrk_cap {\r\n    text-align: right;\r\n    padding: 10px;\r\n}\r\n\r\ntd.mat-cell {\r\n    padding: 0 5px;\r\n}\r\n\r\n.d-flex {\r\n    display: flex;\r\n}\r\n\r\n.coins-id {\r\n    text-decoration: none;\r\n    color: rgba(0, 0, 0, 0.644);\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n}\r\n\r\ntable.mat-elevation-z8.mat-table {\r\n    margin-top: 77px;\r\n    margin: 77px 10px 10px 8px;\r\n}"

/***/ }),

/***/ "./src/app/coins/coins.component.html":
/*!********************************************!*\
  !*** ./src/app/coins/coins.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"coins-table\" *ngIf=\"coins !== undefined\">\n  <table mat-table [dataSource]=\"coins\" class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"sno\">\n      <th mat-header-cell *matHeaderCellDef> # </th>\n      <td mat-cell *matCellDef=\"let coin; let i = index;\" width=\"3%\"> {{i+1}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let coin\" width=\"\">\n        <div class=\"d-flex\">\n          <img src={{coin.image.thumb}} class=\"thumbnail\"/><a class=\"coins-id\" [routerLink]=\"['/coins', coin.id]\"\n          routerLinkActive=\"router-link-active\"> <span *ngIf=\"screen_width > 700\"> {{coin.name}} </span> <span class=\"coin-id\" > {{coin.symbol}} </span> </a>\n        </div>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"curr_price\">\n      <th mat-header-cell *matHeaderCellDef> Price </th>\n      <td mat-cell *matCellDef=\"let coin\" [ngClass]=\"'price'\"> {{ coin.market_data.current_price.usd | currency }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"per_chn_1h\">\n      <th mat-header-cell *matHeaderCellDef> 1h </th>\n      <td mat-cell *matCellDef=\"let coin\" [ngClass]=\"{'redtext': coin.market_data.price_change_percentage_1h_in_currency.usd < 0, 'greentext': coin.market_data.price_change_percentage_1h_in_currency.usd > 0}\"> \n        {{ coin.market_data.price_change_percentage_1h_in_currency.usd | number:'1.2-2' }} \n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"per_chn_24h\">\n      <th mat-header-cell *matHeaderCellDef> 24h </th>\n      <td mat-cell *matCellDef=\"let coin\" [ngClass]=\"{'redtext': coin.market_data.price_change_percentage_24h_in_currency.usd < 0, 'greentext': coin.market_data.price_change_percentage_24h_in_currency.usd > 0}\"> {{ coin.market_data.price_change_percentage_24h_in_currency.usd | number:'1.2-2' }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"per_chn_7d\">\n      <th mat-header-cell *matHeaderCellDef> 7d </th>\n      <td mat-cell *matCellDef=\"let coin\"  [ngClass]=\"{'redtext': coin.market_data.price_change_percentage_7d_in_currency.usd < 0, 'greentext': coin.market_data.price_change_percentage_7d_in_currency.usd > 0}\"> {{ coin.market_data.price_change_percentage_7d_in_currency.usd | number:'1.2-2' }} </td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"mrk_cap\">\n      <th mat-header-cell *matHeaderCellDef> Market Capital </th>\n      <td mat-cell *matCellDef=\"let coin\"> {{ coin.market_data.market_cap.usd | currency }} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/coins/coins.component.ts":
/*!******************************************!*\
  !*** ./src/app/coins/coins.component.ts ***!
  \******************************************/
/*! exports provided: CoinsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinsComponent", function() { return CoinsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stocks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stocks.service */ "./src/app/stocks.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoinsComponent = /** @class */ (function () {
    function CoinsComponent(stocksService) {
        this.stocksService = stocksService;
        // storing coins
        this.coins = {};
        // Getting screen width
        this.screen_width = screen.width;
        // Columns to display
        this.displayedColumns = ['sno', 'name', 'curr_price', 'per_chn_1h', 'per_chn_24h', 'per_chn_7d', 'mrk_cap'];
    }
    CoinsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coins = (this.stocksService.getCoins().subscribe(function (data) { _this.coins = data; })[0]);
    };
    CoinsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coins',
            template: __webpack_require__(/*! ./coins.component.html */ "./src/app/coins/coins.component.html"),
            styles: [__webpack_require__(/*! ./coins.component.css */ "./src/app/coins/coins.component.css")]
        }),
        __metadata("design:paramtypes", [_stocks_service__WEBPACK_IMPORTED_MODULE_1__["StocksService"]])
    ], CoinsComponent);
    return CoinsComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    vertical-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 40%; \r\n    font-family: cursive;\r\n}"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"error\">\n  404 Error! Unknown territory...\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/stocks.service.ts":
/*!***********************************!*\
  !*** ./src/app/stocks.service.ts ***!
  \***********************************/
/*! exports provided: StocksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksService", function() { return StocksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StocksService = /** @class */ (function () {
    function StocksService(http) {
        this.http = http;
        this.api_url = 'https://api.coingecko.com/api/v3';
    }
    StocksService.prototype.getCoins = function () {
        return (this.http.get(this.api_url.concat('/coins')));
    };
    StocksService.prototype.getCoinById = function (id) {
        console.log('hooola');
        return (this.http.get(this.api_url.concat('/coins/' + id)));
    };
    StocksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StocksService);
    return StocksService;
}());



/***/ }),

/***/ "./src/common/components/header/header.component.css":
/*!***********************************************************!*\
  !*** ./src/common/components/header/header.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-toolbar {\r\n    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, .2);\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.pbcg {\r\n    text-decoration: none;\r\n    float: right;\r\n    font-size: 10px;\r\n    margin: 10px 0 0 2px;\r\n    color: #fff;\r\n}\r\n\r\nmat-toolbar.header-toolbar {\r\n    position: fixed;\r\n}"

/***/ }),

/***/ "./src/common/components/header/header.component.html":
/*!************************************************************!*\
  !*** ./src/common/components/header/header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"header-toolbar\">\n    <mat-toolbar-row>\n      <span>Coinify</span>\n      <a href=\"www.coingecko.com\" class=\"pbcg\">Powered by coingecko</a>\n    </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/common/components/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/common/components/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/common/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/common/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Shubhankar\projects\stockify\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map