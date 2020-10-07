webpackJsonp([5],{

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(490);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
        ],
    })
], RegisterPageModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_language_language__ = __webpack_require__(29);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, lp, settings, navParams, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.settings = settings;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
    }
    RegisterPage.prototype.clickRegister = function () {
        var options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            iosdelay: 50
        };
        this.nativePageTransitions.slide(options);
        this.navCtrl.setRoot('TabsPage');
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.clickGoLogin = function () {
        this.navCtrl.setRoot('AuthPage');
    };
    RegisterPage.prototype.goToLogin = function () {
        var options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            iosdelay: 50
        };
        this.nativePageTransitions.slide(options);
        this.navCtrl.push('LoginPage');
    };
    RegisterPage.prototype.goToSignup = function () {
        var options = {
            direction: 'right',
            duration: 400,
            slowdownfactor: -1,
            iosdelay: 50
        };
        this.nativePageTransitions.slide(options);
        this.navCtrl.push('SignupPage');
    };
    RegisterPage.prototype.goToResetPassword = function () {
        this.navCtrl.push('ResetPasswordPage');
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/register/register.html"*/'\n\n<ion-content style=\'background-image: url("./assets/bgauth2.png") !important;\' class="main">\n\n\n<div class=\'center_text\' text-center>\n    <h1 [hidden]=\'true\' class=\'logo-text1\'> <strong>{{settings.appName}}</strong></h1>\n    <p  [hidden]=\'true\' class=\'logo-text\'> <strong>{{lp.translate()[0].fastandconv}}</strong></p>\n   </div>\n\n\n\n        <!-- Login To App Section Can Be Found Below -->\n\n        <div class=\'o_section\'>\n\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                    <button *ngIf="!initState" color=\'primary\'ion-button block (click)="goToLogin()">\n                        {{lp.translate()[0].login}}\n                      </button>\n                </ion-col>\n                <ion-col>\n                    <button *ngIf="!initState" color=\'primary\'ion-button block (click)="goToSignup()">\n                        {{lp.translate()[0].signup}}\n                      </button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n        \n        \n            <!-- <button *ngIf="!initState" color=\'primary\' ion-button block  (click)="loginViaFacebook()">\n                {{lp.translate()[0].facebook}}\n            </button> -->\n        \n           </div>\n\n</ion-content>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=5.js.map