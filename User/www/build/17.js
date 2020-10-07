webpackJsonp([17],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompletePageModule", function() { return AutocompletePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autocomplete__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AutocompletePageModule = (function () {
    function AutocompletePageModule() {
    }
    return AutocompletePageModule;
}());
AutocompletePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__autocomplete__["a" /* AutocompletePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__autocomplete__["a" /* AutocompletePage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__autocomplete__["a" /* AutocompletePage */]
        ]
    })
], AutocompletePageModule);

//# sourceMappingURL=autocomplete.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_language_language__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_geocoder_geocoder__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AutocompletePage = (function () {
    function AutocompletePage(viewCtrl, myGcode, pop, lp, settings, navCtrl, ph, zone) {
        this.viewCtrl = viewCtrl;
        this.myGcode = myGcode;
        this.pop = pop;
        this.lp = lp;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.ph = ph;
        this.zone = zone;
        this.service = new google.maps.places.AutocompleteService();
        this.Lang = this.lp.translate();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    AutocompletePage.prototype.Accept = function () {
        this.dismiss();
    };
    AutocompletePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AutocompletePage.prototype.chooseItem = function (item) {
        this.viewCtrl.dismiss(item);
        this.ph.isHome = true;
    };
    AutocompletePage.prototype.updateSearch = function () {
        this.ph.isHome = false;
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: { country: [this.settings.appCountryCode] } }, function (predictions, status) {
            me.autocompleteItems = [];
            me.zone.run(function () {
                predictions.forEach(function (prediction) {
                    if (prediction != null)
                        me.autocompleteItems.push(prediction.description);
                });
            });
        });
    };
    return AutocompletePage;
}());
AutocompletePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/autocomplete/autocomplete.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Delivery Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n  <ion-content>\n      <ion-toolbar>\n        \n          <ion-searchbar [(ngModel)]="autocomplete.query" [showCancelButton]="true" (ionInput)="updateSearch()" placeholder=\'Enter a new Address\' (ionCancel)="dismiss()"></ion-searchbar>\n        </ion-toolbar>\n      <ion-list>\n          <ion-item *ngFor="let item of autocompleteItems" tappable (click)="chooseItem(item)">\n            {{ item }}\n          </ion-item>\n        </ion-list>\n\n      <button icon-start ion-item color="nav-color" >\n         \n          <span><p>Current Location: </p></span>\n          <hr>\n          <ion-icon color=\'primary\' name="ios-flag"></ion-icon>\n          <span *ngIf=\'myGcode.locationName == null\'>Getting Current Location.....</span>\n          <span *ngIf=\'myGcode.locationName\'>{{myGcode.locationName}}</span>\n          <span><p> - pick up outside</p></span>\n        </button>\n\n  \n  \n  </ion-content>\n\n  <ion-footer >\n       <button padding ion-button color="primary" block class="btn-view-detail"  (click)="Accept()">\n        Use Your Location\n         </button>\n  </ion-footer>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/autocomplete/autocomplete.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], AutocompletePage);

//# sourceMappingURL=autocomplete.js.map

/***/ })

});
//# sourceMappingURL=17.js.map