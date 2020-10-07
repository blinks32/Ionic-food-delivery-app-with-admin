webpackJsonp([26],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountkitPageModule", function() { return AccountkitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accountkit__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountkitPageModule = (function () {
    function AccountkitPageModule() {
    }
    return AccountkitPageModule;
}());
AccountkitPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__accountkit__["a" /* AccountkitPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__accountkit__["a" /* AccountkitPage */]),
        ],
    })
], AccountkitPageModule);

//# sourceMappingURL=accountkit.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountkitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__ = __webpack_require__(66);
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
 * Generated class for the AccountkitPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountkitPage = (function () {
    function AccountkitPage(navCtrl, pop, ph, navParams) {
        this.navCtrl = navCtrl;
        this.pop = pop;
        this.ph = ph;
        this.navParams = navParams;
    }
    AccountkitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        // call this function to initiate facebook account kit
        this.login();
    };
    AccountkitPage.prototype.login = function () {
        var _this = this;
        window.AccountKitPlugin.loginWithPhoneNumber({
            useAccessToken: true,
            defaultCountryCode: "NG",
            facebookNotificationsEnabled: true
        }, function (successdata) {
            window.AccountKitPlugin.getAccount(function (user) {
                // push number to the database ones gotten
                _this.pop.presentLoader('');
                _this.ph.UpdateNumber(user.phoneNumber).then(function () {
                    _this.navCtrl.setRoot('MoreInfoPage');
                    _this.pop.hideLoader();
                });
            });
        }, function (err) {
            _this.login();
        });
    };
    return AccountkitPage;
}());
AccountkitPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-accountkit',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/accountkit/accountkit.html"*/'<!--\n  Generated template for the AccountkitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<div>\n  <div class="spinners"></div>\n</div>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/accountkit/accountkit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], AccountkitPage);

//# sourceMappingURL=accountkit.js.map

/***/ })

});
//# sourceMappingURL=26.js.map