webpackJsonp([8],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePageModule", function() { return PhonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phone__ = __webpack_require__(487);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PhonePageModule = (function () {
    function PhonePageModule() {
    }
    return PhonePageModule;
}());
PhonePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__phone__["a" /* PhonePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__phone__["a" /* PhonePage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__phone__["a" /* PhonePage */]
        ]
    })
], PhonePageModule);

//# sourceMappingURL=phone.module.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_language_language__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PhonePage = (function () {
    // toppings: number = 994;
    function PhonePage(navCtrl, set, lp, platform, ph, pop, navParams, firebase) {
        this.navCtrl = navCtrl;
        this.set = set;
        this.lp = lp;
        this.platform = platform;
        this.ph = ph;
        this.pop = pop;
        this.navParams = navParams;
        this.firebase = firebase;
        this.userName = '';
        this.Debugging = false;
    }
    PhonePage.prototype.signIn = function (userName) {
        var _this = this;
        console.log(this.userName);
        //Step 2 - Pass the mobile number for verific
        if (this.userName != '') {
            this.pop.presentLoader('');
            // let number = this.phoneNumber;
            this.ph.updateName(this.userName).then(function () {
                _this.pop.hideLoader();
                _this.navCtrl.setRoot('TabsPage');
            });
        }
    };
    return PhonePage;
}());
PhonePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-phone',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/phone/phone.html"*/'\n<ion-content>\n \n    <ion-grid class="grid-center">\n            <ion-row>\n              <ion-col col-12 text-center>\n                <ion-list padding-left padding-right>\n                  <ion-item>\n                    <ion-label floating>Enter Your Full {{lp.translate()[0].name}}</ion-label>\n                    <ion-input class=\'input\' no-lines type="text"  [(ngModel)]="userName" ></ion-input>            \n                  </ion-item>\n                </ion-list>\n              </ion-col>\n              <ion-col col-12 text-center padding-left padding-right>\n                <button ion-button id=\'mybutton\' block (click)=\'signIn(userName)\' class="login" >{{lp.translate()[0].submit}}</button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/phone/phone.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__["a" /* Firebase */]])
], PhonePage);

//# sourceMappingURL=phone.js.map

/***/ })

});
//# sourceMappingURL=8.js.map