webpackJsonp([13],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavoritesPageModule = (function () {
    function FavoritesPageModule() {
    }
    return FavoritesPageModule;
}());
FavoritesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__favorites__["a" /* FavoritesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorites__["a" /* FavoritesPage */]),
        ],
    })
], FavoritesPageModule);

//# sourceMappingURL=favorites.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_director_director__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_directionservice_directionservice__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__ = __webpack_require__(38);
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
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesPage = (function () {
    function FavoritesPage(dServ, pop, ph, director, navCtrl, navParams) {
        this.dServ = dServ;
        this.pop = pop;
        this.ph = ph;
        this.director = director;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.pop.presentLoader('');
        this.ph.getUserProfile().child('Favorite').on('value', function (userProfileSnapshot) {
            _this.items = [];
            _this.pop.hideLoader();
            userProfileSnapshot.forEach(function (snap) {
                _this.items.push({
                    key: snap.key,
                    image: snap.val().image,
                    name: snap.val().name,
                    pos: snap.val().pos,
                    location: snap.val().location,
                    phone: snap.val().phone,
                    openTime: snap.val().openTime,
                    closeTime: snap.val().closeTime,
                });
                console.log(_this.items);
                return false;
            });
        });
    };
    FavoritesPage.prototype.goDetails = function (item) {
        this.navCtrl.push('RestaurantDetailsPage');
        this.director.restuarant_Detail = item;
        console.log(item);
    };
    FavoritesPage.prototype.Accept = function () {
        this.navCtrl.push('BasketPage');
    };
    return FavoritesPage;
}());
FavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favorites',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/favorites/favorites.html"*/'<!--\n  Generated template for the FavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n    \n  </ion-header>\n\n\n\n    <ion-content no-padding>\n        <ion-item no-lines>\n            <h2 style="color: #000"><b>Favorites</b></h2>\n          </ion-item>\n    \n           <ion-item no-lines *ngFor="let item of items">\n            <ion-card  class=\'mCard\' (click)=\'goDetails(item)\'>\n              <div class="category">\n                <img src="{{item.image}}" >\n              </div>\n              \n                <h2 style="text-align: center">{{item.name}}</h2>\n                <h4 style="text-align: center">{{item.pos}}</h4>\n                <!-- <h3 style="text-align: center">{{item.distance}}</h3> -->\n                \n            </ion-card>\n          </ion-item>\n    \n    </ion-content>\n\n    <ion-footer  [hidden]=\'director.check < 0\'>\n      <button padding ion-button color="primary" block (click)="Accept()">\n        <ion-title>BASKET [{{director.check}}]</ion-title><ion-label></ion-label><h2 style="float:right !important">₦{{director.total}}</h2>\n        </button>\n  </ion-footer>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/favorites/favorites.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_directionservice_directionservice__["a" /* DirectionserviceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_director_director__["a" /* DirectorProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ })

});
//# sourceMappingURL=13.js.map