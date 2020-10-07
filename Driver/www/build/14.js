webpackJsonp([14],{

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreInfoPageModule", function() { return MoreInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more_info__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoreInfoPageModule = (function () {
    function MoreInfoPageModule() {
    }
    return MoreInfoPageModule;
}());
MoreInfoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__more_info__["a" /* MoreInfoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__more_info__["a" /* MoreInfoPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__more_info__["a" /* MoreInfoPage */]
        ]
    })
], MoreInfoPageModule);

//# sourceMappingURL=more-info.module.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_language_language__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_event_event__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MoreInfoPage = (function () {
    function MoreInfoPage(plat, eventProvider, platform, navParams, lp, pop, navCtrl, menu, authProvider, loadingCtrl, ph, alertCtrl) {
        this.plat = plat;
        this.eventProvider = eventProvider;
        this.platform = platform;
        this.navParams = navParams;
        this.lp = lp;
        this.pop = pop;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.ph = ph;
        this.alertCtrl = alertCtrl;
        this.cartypes = '1';
        this.carChosen = false;
        this.cities = 'Abuja';
        this.license = '';
        this.model = '';
        this.plate = '';
        this.seat = 0;
        this.verificationId = '';
        this.phoneNumber = '';
        this.userName = '';
        this.countryCode = '';
        this.companies = 'NO INSPECTOR';
        this.inspectors = false;
        this.Debugging = false;
        this.toppings = 234;
        // this.phoneNumber = this.navParams.get('phone');
    }
    MoreInfoPage.prototype.ionViewDidLoad = function () {
    };
    MoreInfoPage.prototype.signIn = function (userName) {
        var _this = this;
        if (this.name != null && this.banks != null && this.cities && this.number != null
            && this.model && this.year && this.license && this.plate) {
            this.pop.showLoader('');
            this.ph.UpdateInfo(this.name, this.cities, this.license, this.model, this.year, this.plate, this.seat, this.number, this.banks, this.cartypes, this.companies).then(function (success) {
                _this.navCtrl.setRoot('AddphotoinfoPage');
                _this.pop.hideLoader();
                _this.ph.getCompanyProfile(_this.companies).update({
                    earnings: 0,
                }).then(function () {
                });
            });
        }
    };
    return MoreInfoPage;
}());
MoreInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])()
    /**
     * Generated class for the MoreInfoPage page.
     *
     * See http://ionicframework.com/docs/components/#navigation for more info
     * on Ionic pages and navigation.
     */
    ,
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-more-info',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/more-info/more-info.html"*/'<ion-header  no-border>\n  <ion-navbar color="primary">\n    <ion-title>Step 1</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center class=\'yes-scroll\'>\n    <div class=\'form\'>\n\n        <ion-label text-center>\n           <ion-title>Personal Information</ion-title>\n          </ion-label>\n\n          <ion-list padding-left padding-right>\n            <ion-item>\n      <ion-label class=\'stack\' padding color=\'primary\' floating>{{lp.translate()[0].h2}}</ion-label>\n      <ion-input class=\'input\' no-lines type="text" placeholder="eg John Snow" [(ngModel)]="name" ></ion-input>\n            </ion-item>\n            <ion-item>\n      <ion-label class=\'stack\' padding color=\'primary\' floating>{{lp.translate()[0].h10}}</ion-label>\n      <ion-input class=\'input\' no-lines type="text" placeholder="eg xxxxxxxxxx" [(ngModel)]="number" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\'stack\' padding color=\'primary\' floating>{{lp.translate()[0].i1}}</ion-label>\n      <ion-input class=\'input\' no-lines type="text" placeholder="eg Some Bank" [(ngModel)]="banks" ></ion-input>\n    </ion-item>\n     \n    <ion-label text-center>\n      <ion-title>Car Information</ion-title>\n        </ion-label>\n\n      <ion-item>\n      <ion-label class=\'stack\' padding color=\'primary\' floating>License</ion-label>\n      <ion-input class=\'input\' no-lines type="text" placeholder="" [(ngModel)]="license" ></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label class=\'stack\' padding color=\'primary\' floating>CarModel</ion-label>\n      <ion-input class=\'input\' no-lines type="text" placeholder="" [(ngModel)]="model" ></ion-input>\n      </ion-item>\n      <ion-item> \n      <ion-label class=\'stack\' padding color=\'primary\' floating>CarYear</ion-label>\n      <ion-input class=\'input\' no-lines type="text" placeholder="" [(ngModel)]="year" ></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label class=\'stack\' padding color=\'primary\' floating>CarPlate</ion-label>\n      <ion-input class=\'input\' no-lines type="text" placeholder="" [(ngModel)]="plate" ></ion-input>\n      </ion-item>\n     \n  <ion-item padding>\n    <ion-label class=\'stack\' padding  floating>Car Transmission</ion-label>\n    <ion-select [(ngModel)]="cartransmission" multiple="false">\n     <ion-option data-countryCode="1" value="1" selected>Automatic</ion-option>\n      <ion-option data-countryCode="2" value="2">Manual</ion-option>\n    </ion-select>\n  </ion-item>\n\n  </ion-list>\n\n\n\n   \n\n  <button padding ion-button  color="primary" id=\'mybutton\' block (click)=\'signIn(userName)\'>{{lp.translate()[0].b2}}</button>\n  \n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/more-info/more-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], MoreInfoPage);

//# sourceMappingURL=more-info.js.map

/***/ })

});
//# sourceMappingURL=14.js.map