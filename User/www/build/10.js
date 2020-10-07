webpackJsonp([10],{

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(484);
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
            __WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]),
        ],
    })
], HistoryPageModule);

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_geocoder_geocoder__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_director_director__ = __webpack_require__(155);
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
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = (function () {
    function HistoryPage(gCode, director, pop, modalCtrl, settings, navCtrl, ph, navParams) {
        this.gCode = gCode;
        this.director = director;
        this.pop = pop;
        this.modalCtrl = modalCtrl;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.ph = ph;
        this.navParams = navParams;
        this.details = "menus";
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ph.getUserProfile().child('History').on('value', function (userProfileSnapshot) {
            _this.items = [];
            var drinks = [];
            _this.pop.SmartLoader('');
            userProfileSnapshot.forEach(function (snap) {
                _this.items.push({
                    key: snap.key,
                    name: snap.val().Food,
                    price: snap.val().Total,
                    location: snap.val().Location,
                    quantity: snap.val().FoodQuantity,
                    drinks: snap.val().Drinks,
                    date: snap.val().Date
                });
                drinks.push({
                    drinks: snap.val().Drinks
                });
                drinks.forEach(function (element) {
                    console.log(element.drinks);
                });
                _this.carts = _this.items;
                console.log(_this.items, _this.drinks);
                return false;
            });
        });
    };
    HistoryPage.prototype.onClick = function (item) {
        console.log(item);
        this.ph.getUserProfile().child('History').child(item.key).remove().then(function () {
        });
    };
    HistoryPage.prototype.Accept = function () {
        this.navCtrl.push('BasketPage');
    };
    return HistoryPage;
}());
HistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-history',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/history/history.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>History</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n\n   \n\n\n        \n      <div >\n          <ion-list >\n         <ion-item  *ngFor="let item of items">\n         \n           <div>\n             <ion-grid>\n               <ion-row>\n                 <ion-col class=\'init\'>\n                    <span class="item-title bold" style="color: green"><strong>{{item.quantity}} X</strong></span>\n                 </ion-col>\n                 <ion-col>\n                    <span class="item-title bold" ><h2>{{item.name}}</h2></span>\n                    <span *ngIf=\'item.drinks\' class="item-title bold" >{{drinks}}</span><br>\n                  </ion-col>\n                  <ion-col>\n                      <span class="item-title bold" >₦{{item.price}}</span><br>\n                      <span class="item-title bold" >{{item.date}}</span><br>\n                  </ion-col>\n\n                  <ion-col  (click)="onClick(item)">\n                      <button padding ion-button color="danger" icon-only class="btn" >\n                          <ion-icon name=\'ios-close\'></ion-icon>\n                        </button>\n                  </ion-col>\n\n               </ion-row>\n             </ion-grid>\n              \n            </div>\n          \n         </ion-item>\n          </ion-list>\n      </div>\n\n      <div *ngIf=\'items == null\'>\n        <p text-center class="item-title bold" >You Have Not made Any Purchase Yet</p>\n      </div>\n \n \n</ion-content>\n\n<ion-footer  [hidden]=\'director.check < 0\'>\n  <button padding ion-button color="primary" block (click)="Accept()">\n    <ion-title>BASKET [{{director.check}}]</ion-title><ion-label></ion-label><h2 style="float:right !important">₦{{director.total}}</h2>\n    </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/history/history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_director_director__["a" /* DirectorProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], HistoryPage);

//# sourceMappingURL=history.js.map

/***/ })

});
//# sourceMappingURL=10.js.map