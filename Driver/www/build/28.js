webpackJsonp([28],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    return AboutPageModule;
}());
AboutPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]
        ]
    })
], AboutPageModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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






var AboutPage = (function () {
    function AboutPage(iab, lp, settings, navCtrl, navParams) {
        this.iab = iab;
        this.lp = lp;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Lang = this.lp.translate();
    }
    AboutPage.prototype.gotoSite = function () {
        //   const browser = this.iab.create(this.settings.appLink);
        this.iab.create(this.settings.appLink);
    };
    AboutPage.prototype.gotoSite2 = function () {
        this.iab.create(this.settings.appCareer);
    };
    AboutPage.prototype.gotoSite3 = function () {
        this.iab.create(this.settings.appFaq);
    };
    AboutPage.prototype.gotoSite4 = function () {
        this.iab.create(this.settings.appTerms);
    };
    AboutPage.prototype.gotoSite9 = function () {
        this.iab.create(this.settings.appFB);
    };
    AboutPage.prototype.gotoSite10 = function () {
        this.iab.create(this.settings.appinsta);
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])()
    /**
     * Generated class for the AboutPage page.
     *
     * See http://ionicframework.com/docs/components/#navigation for more info
     * on Ionic pages and navigation.
     */
    ,
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="nav-color">\n    <ion-title>About</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<!-- -->\n\n<ion-content class="no-scroll" padding>\n   \n  <button padding color="primary" ion-button block (click)="gotoSite()">\n      {{settings.appName}} {{Lang[0].website}}\n    </button>\n    <button padding color="primary" ion-button block (click)="gotoSite2()">\n        {{settings.appName}} {{Lang[0].a1}}\n      </button>\n      <button padding  color="primary" ion-button block (click)="gotoSite3()">\n         FAQ\n    </button>\n\n    <ion-label></ion-label>\n      <button padding  color="newColor" ion-button block (click)="gotoSite9()">\n        Facebook\n  </button>\n\n  <button padding  color="danger" ion-button block (click)="gotoSite10()" >\n    Instagram <strong>@{{settings.appName}}</strong>\n</button>\n<ion-label></ion-label>\n<ion-label></ion-label>\n      <button padding text-center color="primary" ion-button clear block (click)="gotoSite4()">\n        Terms and Conditions\n  </button>\n    \n    <ion-label padding text-center>\n    \n      <!-- Made with &hearts; by PlayStudio. -->\n  </ion-label>\n</ion-content>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_4__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=28.js.map