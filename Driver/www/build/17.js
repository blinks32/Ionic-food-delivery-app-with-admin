webpackJsonp([17],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoryPageModule = (function () {
    function HistoryPageModule() {
    }
    return HistoryPageModule;
}());
HistoryPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]
        ]
    })
], HistoryPageModule);

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pop_up_pop_up__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_language_language__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HistoryPage = (function () {
    function HistoryPage(navCtrl, lp, settings, pop, load, profile, alert, eventProvider) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.settings = settings;
        this.pop = pop;
        this.load = load;
        this.profile = profile;
        this.alert = alert;
        this.eventProvider = eventProvider;
    }
    HistoryPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.eventProvider.getEventList().on('value', function (snapshot) {
            _this.eventList = [];
            snapshot.forEach(function (snap) {
                _this.eventList.push({
                    id: snap.key,
                    name: snap.val().name,
                    price: snap.val().price,
                    paid: snap.val().paid,
                    date: snap.val().date,
                    location: snap.val().location,
                    destination: snap.val().destination,
                    hidden: snap.val().hidden
                });
                return false;
            });
        });
        this.presentRouteLoader(this.lp.translate()[0].c4);
        this.profile.getUserProfile().on('value', function (userProfileSnapshot) {
            _this.earnings = userProfileSnapshot.val().earnings;
        });
    };
    HistoryPage.prototype.presentRouteLoader = function (message) {
        var _this = this;
        var loading = this.load.create({
            content: message
        });
        loading.present();
        var myInterval = setInterval(function () {
            if (_this.eventList != null) {
                loading.dismiss();
                clearInterval(myInterval);
            }
        }, 1000);
    };
    HistoryPage.prototype.goToEventDetail = function (eventId) {
        this.navCtrl.push('HistorydetailPage', { 'eventId': eventId });
    };
    // Request(eventId){
    //   let alert = this.alert.create({
    //     title: this.lp.translate()[0].c5,
    //     buttons: [ {
    //       text: this.lp.translate()[0].c6,
    //       role: 'cancel',
    //       handler: () => {
    //       }
    //     },
    //     {
    //       text: this.lp.translate()[0].c7,
    //       handler: () => {
    //         this.eventProvider.getEventDetail(eventId).update({
    //           paid: 2,
    //         }).then((suc) =>{
    //           this.pop.alertMe('Your Request Has Been Recieved And Is Biegn Processed. This May Take Up To 30 minutes')
    //         });
    //     }
    //     },],
    //     enableBackdropDismiss: false 
    //   });
    //   alert.present();
    // }
    HistoryPage.prototype.Delete = function (eventId) {
        var _this = this;
        var alert = this.alert.create({
            title: this.lp.translate()[0].c5,
            buttons: [{
                    text: this.lp.translate()[0].c6,
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: this.lp.translate()[0].c7,
                    handler: function () {
                        _this.eventProvider.getEventDetail(eventId).update({
                            hidden: true
                        }).then(function (success) {
                        });
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    return HistoryPage;
}());
HistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-history',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/history/history.html"*/'<ion-header  no-border>\n  <ion-navbar color="nav-color">\n    <ion-title>{{lp.translate()[0].b10}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding text-center class=\'yes-scroll\'>\n  <div class=\'followed-items\'>\n          <ion-list text-center>\n            <div text-center *ngFor="let event of eventList">\n              <ion-item *ngIf=\'event.name != null && event.hidden == false\' (click)="goToEventDetail(event.id)">\n                  <div *ngIf=\'event.name == null\'>\n                   \n                            <h2 class=\'date\'><strong><ion-icon name="trash"></ion-icon>{{lp.translate()[0].c2}}</strong></h2>\n                        \n                     \n                     \n                    </div>\n                  <div  > \n                     \n\n               \n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <h2 *ngIf=\'event.price != 0\' class=\'price\'><strong><ion-icon name="ios-cash"></ion-icon>{{settings.appcurrency}}{{event?.price}}</strong></h2>\n      </ion-col>\n      <ion-col>\n          <button detail-none color="danger" no-lines text-center icon-start ion-item (click)="Delete(currentEvent.id)" >\n              <ion-icon color=\'nav-color\' name="close"></ion-icon>\n              {{lp.translate()[0].c3}}\n          </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n              \n                      </div>\n              </ion-item>\n            </div>\n            </ion-list>\n     \n  </div>\n</ion-content>\n\n   \n<ion-footer >\n    \n    <div class=\'topped-items\'>\n        <ion-item color=\'secondary\' no-lines text-center>\n      <ion-label class=\'date\'><h2><strong>{{lp.translate()[0].c1}} {{settings.appcurrency}}{{earnings}}</strong></h2></ion-label>\n        </ion-item>\n    </div>\n  \n</ion-footer>\n\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/history/history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
], HistoryPage);

//# sourceMappingURL=history.js.map

/***/ })

});
//# sourceMappingURL=17.js.map