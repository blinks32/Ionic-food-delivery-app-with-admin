webpackJsonp([6],{

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SupportPageModule = (function () {
    function SupportPageModule() {
    }
    return SupportPageModule;
}());
SupportPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__support__["a" /* SupportPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__support__["a" /* SupportPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__support__["a" /* SupportPage */]
        ]
    })
], SupportPageModule);

//# sourceMappingURL=support.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_language_language__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_event__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_pop_up_pop_up__ = __webpack_require__(66);
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
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SupportPage = (function () {
    function SupportPage(navCtrl, pop, http, call, settings, viewCtrl, alert, eventProvider, ph, lp, navParams) {
        this.navCtrl = navCtrl;
        this.pop = pop;
        this.http = http;
        this.call = call;
        this.settings = settings;
        this.viewCtrl = viewCtrl;
        this.alert = alert;
        this.eventProvider = eventProvider;
        this.ph = ph;
        this.lp = lp;
        this.navParams = navParams;
        this.cartransmission = 'car is beign hijacked.';
        this.id = this.navParams.get('id');
    }
    SupportPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('inregf');
        this.eventProvider.getSupportChatList(this.eventProvider.id).on('value', function (snapshot) {
            _this.eventList = [];
            console.log('sjiy');
            snapshot.forEach(function (snap) {
                _this.eventList.push({
                    id: snap.key,
                    admin: snap.val().Admin_Message,
                    user: snap.val().Client_Message,
                });
                console.log(_this.eventList);
                return false;
            });
        });
    };
    SupportPage.prototype.closeChat = function () {
        this.viewCtrl.dismiss();
    };
    SupportPage.prototype.callNow = function () {
        window.open("tel:" + this.settings.companyPhone);
        //  this.call.callNumber(this.settings.companyPhone, true)
        this.send('Driver Needs Support SOS code: ' + this.cartransmission, 'Trace the driver information to the admin', this.ph.user.email);
    };
    SupportPage.prototype.Send = function () {
        var _this = this;
        var alert = this.alert.create({
            title: 'message',
            inputs: [
                {
                    name: 'Message',
                    placeholder: 'Reply'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log(_this.ph.user.email);
                        _this.send('Support Message from Driver with ID ' + _this.ph.user.uid, data.Message, _this.ph.user.email);
                        _this.eventProvider.Complain(data.Message, _this.eventProvider.id);
                    }
                }
            ]
        });
        alert.present();
    };
    SupportPage.prototype.send = function (subject, message, email) {
        var _this = this;
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
            _this.pop.showPimp(JSON.stringify(error));
        });
    };
    return SupportPage;
}());
SupportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-support',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/support/support.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar>\n      <ion-title>Start A Conversation</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  \n  \n  <ion-content padding text-center class=\'yes-scroll\'>\n      <div class=\'followed-items\'>\n              <ion-list text-center>\n                <div text-center *ngFor="let event of eventList">\n                  <ion-item text-wrap detail-none no-lines class=\'driver\' *ngIf=\'!event.user\'>\n                     <p>{{event.admin}}</p>\n                  </ion-item>\n                  <ion-item text-wrap detail-none no-lines class=\'user\' *ngIf=\'!event.admin\'>\n                    <p>{{event.user}}</p>\n                   </ion-item>\n                </div>\n                </ion-list>\n         \n      </div>\n    </ion-content>\n    \n  \n  <ion-footer padding >\n      <ion-item padding>\n          <ion-label class=\'stack\' padding  stacked>Emergency SOS</ion-label>\n          <ion-select [(ngModel)]="cartransmission" multiple="false">\n           <ion-option data-countryCode="1" value="8500" selected>car has been hijacked</ion-option>\n            <ion-option data-countryCode="2" value="9000">car has broken down</ion-option>\n            <ion-option data-countryCode="1" value="7000">involved in a car accident</ion-option>\n            <ion-option data-countryCode="2" value="1000">police/sars/road safety/law enforcement harassment</ion-option>\n          </ion-select>\n        </ion-item>\n    <p text-center>Available 24/7</p>\n    <ion-grid>\n      <ion-row>\n             <ion-col>\n              <button id="container_1"  text-center detail-none class="button" icon-start color="primary" (click)="callNow()">\n                    Call\n                    </button>\n           </ion-col>\n             <ion-col>\n                <button id="container_1"  class="button" detail-none text-center icon-start color="green" (click)="Send()">\n                 \n                    New Message\n                    </button>\n             </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-footer>\n  '/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/support/support.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], SupportPage);

//# sourceMappingURL=support.js.map

/***/ })

});
//# sourceMappingURL=6.js.map