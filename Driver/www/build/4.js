webpackJsonp([4],{

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet__ = __webpack_require__(512);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WalletPageModule = (function () {
    function WalletPageModule() {
    }
    return WalletPageModule;
}());
WalletPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__wallet__["a" /* WalletPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wallet__["a" /* WalletPage */]),
        ],
    })
], WalletPageModule);

//# sourceMappingURL=wallet.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_paystack_paystack__ = __webpack_require__(301);
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
 * Generated class for the WalletPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WalletPage = (function () {
    function WalletPage(navCtrl, alertCtrl, payst, ph, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.payst = payst;
        this.ph = ph;
        this.navParams = navParams;
        this.ammount = 0;
    }
    WalletPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
            _this.ph.funds = userProfileSnapshot.val().funds;
        });
    };
    WalletPage.prototype.AddNow = function () {
        if (this.ph.card == null) {
            this.navCtrl.push('CardPage');
        }
        else {
            this.updateFunds();
        }
    };
    WalletPage.prototype.updateFunds = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Enter Ammount to Add To Your Funds',
            inputs: [
                {
                    value: 'Enter Here'
                },
            ],
            buttons: [
                {
                    text: 'cancel',
                },
                {
                    text: 'Accept',
                    handler: function (data) {
                        console.log(data);
                        _this.payst.ChargeCard(_this.ph.card, _this.ph.month, _this.ph.cvc, _this.ph.year, data * 100, _this.ph.email, '');
                    }
                }
            ]
        });
        alert.present();
    };
    return WalletPage;
}());
WalletPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-wallet',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/wallet/wallet.html"*/'<!--\n  Generated template for the WalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="nav-color">\n    <ion-title>Wallet</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-title *ngIf=\'ph.funds\' padding text-center>₦{{ph.funds}}</ion-title>\n  <ion-title *ngIf=\'!ph.funds\' padding text-center>₦ 0</ion-title>\n  <button padding color="primary" ion-button block (click)="AddNow()">\n    Add Funds\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/wallet/wallet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_paystack_paystack__["a" /* PaystackProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], WalletPage);

//# sourceMappingURL=wallet.js.map

/***/ })

});
//# sourceMappingURL=4.js.map