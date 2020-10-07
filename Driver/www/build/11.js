webpackJsonp([11],{

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoPageModule", function() { return PromoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promo__ = __webpack_require__(503);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PromoPageModule = (function () {
    function PromoPageModule() {
    }
    return PromoPageModule;
}());
PromoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__promo__["a" /* PromoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__promo__["a" /* PromoPage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__promo__["a" /* PromoPage */]
        ]
    })
], PromoPageModule);

//# sourceMappingURL=promo.module.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pop_up_pop_up__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_event_event__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_language_language__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PromoPage = (function () {
    function PromoPage(ph, http, share, lp, pop, eProvider, platform, nav, navParams, loadingCtrl, alertCtrl, settings, formBuilder) {
        var _this = this;
        this.ph = ph;
        this.http = http;
        this.share = share;
        this.lp = lp;
        this.pop = pop;
        this.eProvider = eProvider;
        this.platform = platform;
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.randomCode = 'ftdyud';
        this.earnings = 0;
        this.message = null;
        this.file = null;
        this.link = null;
        this.subject = null;
        this.pop.showLoader('Getting referal Earnings');
        this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
            if (userProfileSnapshot.val() != null) {
                _this.earnings = userProfileSnapshot.val().refEarnings;
                _this.randomCode = userProfileSnapshot.val().id;
                console.log(_this.randomCode);
            }
            else {
                _this.earnings = 0;
            }
            _this.pop.hideLoader();
        });
        this.cardpaymentForm = formBuilder.group({
            card: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    PromoPage.prototype.ionViewDidEnter = function () {
        // this.pop.presentLoader('Retrieving...')
        this.message = 'Use ' + this.randomCode + ' as referal code to Register in Ajetaxi Driver ';
    };
    PromoPage.prototype.FaceShare = function () {
        this.share.share(this.message, this.subject, this.file, this.link).then(function () {
        }).catch(function () {
        });
    };
    PromoPage.prototype.Request = function () {
        this.send('A user wants to request: ' + this.ph.city, 'Trace the driver information to the admin', this.ph.email);
        this.pop.showPimp('You Have Made A Request And Your Payment Is Processing...');
    };
    PromoPage.prototype.send = function (subject, message, email) {
        var url = "https://api.mailgun.net/v3/" + this.settings.mailGUrl + "/messages";
        var body = {
            "from": email,
            "to": this.settings.companyMail,
            "subject": subject,
            "html": "<html><body>First Name: " + this.settings.appName + "<br>" + "Last Name: " + this.settings.appLink + "<br>" + "Email: " + email + "<br>" + "Subject: " + subject + "<br><br>" + "Message: " + message + "</body></html>"
        };
        var headers = {
            "Authorization": "Basic " + this.settings.mailGKey,
            "Content-Type": "application/x-www-form-urlencoded"
        };
        //this.pop.showLoader('')
        this.http.post(url, body, headers).then(function (data) {
            console.log("SUCCESS -> " + JSON.stringify(data));
        }).catch(function (error) {
            console.log(error);
        });
    };
    return PromoPage;
}());
PromoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])()
    /**
     * Generated class for the PromoPage page.
     *
     * See http://ionicframework.com/docs/components/#navigation for more info
     * on Ionic pages and navigation.
     */
    ,
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-promo',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/promo/promo.html"*/'<!--\n  Generated template for the PromoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="nav-color">\n    <ion-title>Your Referal Code</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="no-scroll" padding >\n  \n  <div text-center class="whiteFlap">\n     \n        <div class=\'bars\'>\n        \n        <button no-lines detail-none ion-item icon-start class="bars-price">\n            <ion-icon color=\'primary\' name="key"></ion-icon>\n            <div id="cash">{{randomCode}}</div>\n       </button> \n         </div>\n   \n        <p>Share app with others. using this referal code. To earn Cash.</p>\n        <!-- <ion-grid>\n          <ion-row>\n            <ion-col> -->\n                <button  icon-only [ngStyle]="{\'margin-top\': 20 + \'px\'}" color="primary" ion-button block (click)="FaceShare()">\n                    <ion-icon color=\'nav-color\' name="share"> Share </ion-icon>\n               </button>         \n            <!-- </ion-col>\n            <ion-col>\n                <button icon-only [ngStyle]="{\'margin-top\': 20 + \'px\'}" color="gery" ion-button block (click)="WhatsappShare()">\n                    <ion-icon color=\'nav-color\' name="logo-whatsapp"></ion-icon>\n               </button>         \n            </ion-col>\n            <ion-col>\n                <button icon-only [ngStyle]="{\'margin-top\': 20 + \'px\'}" color="newColor" ion-button block (click)="InstaShare()">\n                    <ion-icon color=\'nav-color\' name="logo-instagram"></ion-icon>\n               </button>         \n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n       \n    </div>\n\n    <ion-title padding text-center><strong>Referal Earnings</strong></ion-title>\n     <h1 text-center>{{settings.appcurrency}} {{earnings}} </h1>\n\n\n     <button icon-only color="gery" ion-button block (click)="Request()">\n        <ion-icon color=\'nav-color\' name="card">Request Payment</ion-icon>\n   </button>   \n     \n    \n</ion-content>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/promo/promo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_6__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__["a" /* SettingsProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], PromoPage);

//# sourceMappingURL=promo.js.map

/***/ })

});
//# sourceMappingURL=11.js.map