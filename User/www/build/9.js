webpackJsonp([9],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPageModule = (function () {
    function PaymentPageModule() {
    }
    return PaymentPageModule;
}());
PaymentPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */]
        ]
    })
], PaymentPageModule);

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_language_language__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaymentPage = (function () {
    function PaymentPage(ph, viewCtrl, set, lp, navCtrl, navParams) {
        this.ph = ph;
        this.viewCtrl = viewCtrl;
        this.set = set;
        this.lp = lp;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentPage.prototype.ionViewDidEnter = function () {
        var mainStr = this.ph.card || '2345678765445678', vis = mainStr.slice(-4), countNum = '';
        for (var i = (mainStr.length) - 4; i > 0; i--) {
            countNum += '*';
        }
        this.cardnumber = countNum + vis;
        if (this.ph.paymentType != 1) {
            this.paymentType = 'card';
        }
        else {
            this.paymentType = 'cash';
        }
    };
    PaymentPage.prototype.updatePayment = function (value) {
        this.ph.UpdatePaymentType(value);
        this.navCtrl.pop();
    };
    PaymentPage.prototype.gotoCard = function () {
        var _this = this;
        if (this.ph.card != null) {
            this.ph.UpdatePaymentType(2).then(function (suc) {
                _this.navCtrl.pop();
            });
        }
        else {
            console.log('should open');
            this.navCtrl.push('CardPage');
        }
    };
    PaymentPage.prototype.Promo = function () {
        this.viewCtrl.dismiss();
    };
    return PaymentPage;
}());
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])()
    /**
     * Generated class for the PaymentPage page.
     *
     * See http://ionicframework.com/docs/components/#navigation for more info
     * on Ionic pages and navigation.
     */
    ,
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/payment/payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="nav-color">\n    <ion-title>{{lp.translate()[0].payment2}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="no-scroll" padding>\n    <ion-list padding radio-group [(ngModel)]="paymentType">\n       \n        <button detail-none no-lines ion-item block id=\'iten\' color="primary">\n          <ion-label [hidden]="ph.card != null"> <ion-icon  color=\'nav-color\' padding name="ios-card">\n          </ion-icon> {{lp.translate()[0].addcard}} </ion-label>\n          <ion-label [hidden]="ph.card == null" > <ion-icon  color=\'nav-color\' padding name="ios-card">\n          </ion-icon > {{cardnumber}} </ion-label>\n          <ion-radio color="nav-color" value="card" (click)="gotoCard()" ></ion-radio>\n        </button>\n    \n        <ion-label text-center>\n            \n              </ion-label>\n      <button detail-none no-lines ion-item block id=\'iten\' color="newColor" (click)="Promo()">\n          <ion-label >\n              <ion-icon color=\'nav-color\' padding name="ios-cash">\n              </ion-icon>\n              Pay Cash\n            </ion-label>\n        </button>\n\n      </ion-list>\n      \n</ion-content>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/payment/payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ })

});
//# sourceMappingURL=9.js.map