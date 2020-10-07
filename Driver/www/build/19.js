webpackJsonp([19],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningsPageModule", function() { return EarningsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__earnings__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EarningsPageModule = (function () {
    function EarningsPageModule() {
    }
    return EarningsPageModule;
}());
EarningsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__earnings__["a" /* EarningsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__earnings__["a" /* EarningsPage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__earnings__["a" /* EarningsPage */]
        ]
    })
], EarningsPageModule);

//# sourceMappingURL=earnings.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EarningsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pop_up_pop_up__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_language_language__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(23);
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
 * Generated class for the FreeridePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EarningsPage = (function () {
    function EarningsPage(navCtrl, formBuilder, lp, share, ph, settings, pop, navParams) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.lp = lp;
        this.share = share;
        this.ph = ph;
        this.settings = settings;
        this.pop = pop;
        this.navParams = navParams;
        this.randomCode = 'ghjkf';
        this.earnings = 0;
        this.earnings = ph.earnings;
        this.cardpaymentForm = formBuilder.group({
            card: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].maxLength(4), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
        });
    }
    EarningsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FreeridePage');
        // this.randomCode = this.guidGenerator()
        console.log(this.randomCode);
    };
    EarningsPage.prototype.AddCard = function () {
        // if (this.ph.card != null){
        this.SearchForSharingIDs(this.cardpaymentForm.value.card);
        //   }else{
        //  this.pop.presentToast(this.lp.translate()[0].cardf)
        ///   }
    };
    EarningsPage.prototype.SearchForSharingIDs = function (promoID) {
        var _this = this;
        console.log('SharingID search called');
        this.pop.presentLoader('');
        this.ph.getAllSharingID().on('value', function (SharingIDShot) {
            var SharingID = SharingIDShot.val().UserID[1];
            _this.pop.hideLoader();
            // SharingID
            if (SharingID != null) {
                // this.ph.getAllSharingID().on('child_added', SharingIDShot => {
                // let SharingIDs = SharingIDShot.val().UserID
                console.log(SharingID, promoID);
                if (SharingID == promoID) {
                    console.log('SharingID found');
                    //this.ph.getAllSharingID().off('child_added')
                    // this.pop.presentToast(this.lp.translate()[0].shareid)
                }
                else {
                    // this.pop.presentToast(this.lp.translate()[0].shareid2)
                    console.log('rtyuiytrfghj');
                }
            }
            else {
                // this.pop.presentToast(this.lp.translate()[0].shareid3)
                _this.ph.getAllSharingID().off('value');
            }
        });
    };
    return EarningsPage;
}());
EarningsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-earnings',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/earnings/earnings.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  \n    <ion-navbar color="nav-color">\n      <ion-title>Earnings</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content class="no-scroll" padding >\n  \n      <ion-title padding text-center>Total Earnings: {{earnings}}</ion-title>\n       \n      <ion-label text-center>\n        Enter ID to recieve earnings\n     </ion-label>\n  \n  <form id=\'myFomr\' [formGroup]="cardpaymentForm" (submit)="AddCard()" novalidate>\n        \n      \n       \n            <ion-label color=\'primary\' stacked>{{lp.translate()[0].uid}}</ion-label>\n            <ion-input id=\'tezt\'  formControlName="card" placeholder="Enter Your Code" \n              [class.invalid]="!cardpaymentForm.controls.card.valid && cardpaymentForm.controls.card.dirty"></ion-input>\n  \n        \n          <button class=\'button\' ion-button block type="submit" [disabled]="!cardpaymentForm.valid">\n             Accept\n          </button>\n      \n        </form>\n      \n  </ion-content>\n  '/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/earnings/earnings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], EarningsPage);

//# sourceMappingURL=earnings.js.map

/***/ })

});
//# sourceMappingURL=19.js.map