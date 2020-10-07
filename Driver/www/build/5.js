webpackJsonp([5],{

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingPageModule", function() { return WaitingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waiting__ = __webpack_require__(511);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WaitingPageModule = (function () {
    function WaitingPageModule() {
    }
    return WaitingPageModule;
}());
WaitingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__waiting__["a" /* WaitingPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__waiting__["a" /* WaitingPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__waiting__["a" /* WaitingPage */]
        ]
    })
], WaitingPageModule);

//# sourceMappingURL=waiting.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_language_language__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the WaitingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WaitingPage = (function () {
    function WaitingPage(navCtrl, platform, lp, settings, iab, navParams) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.lp = lp;
        this.settings = settings;
        this.iab = iab;
        this.navParams = navParams;
    }
    WaitingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WaitingPage');
    };
    WaitingPage.prototype.gotoSite2 = function () {
        var browser = this.iab.create(this.settings.appLink);
    };
    WaitingPage.prototype.close = function () {
        this.platform.exitApp();
    };
    return WaitingPage;
}());
WaitingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-waiting',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/waiting/waiting.html"*/'<ion-header no-border>\n  <ion-navbar color="nav-color">\n    <ion-title text-center>\n        {{lp.translate()[0].l3}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div [ngStyle]="{\'margin-top\': 30 + \'%\'}">\n  <h3 text-center>{{lp.translate()[0].l4}}</h3>\n  </div>\n\n  <button  class=\'button\' [ngStyle]="{\'margin-top\': 30 + \'%\'}" color="primary" ion-button block (click)="close()">\n      {{lp.translate()[0].i9}}\n</button>\n</ion-content>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/waiting/waiting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], WaitingPage);

//# sourceMappingURL=waiting.js.map

/***/ })

});
//# sourceMappingURL=5.js.map