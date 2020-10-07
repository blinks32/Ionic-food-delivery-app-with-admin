webpackJsonp([4],{

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantDetailsPageModule", function() { return RestaurantDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restaurant_details__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RestaurantDetailsPageModule = (function () {
    function RestaurantDetailsPageModule() {
    }
    return RestaurantDetailsPageModule;
}());
RestaurantDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__restaurant_details__["a" /* RestaurantDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__restaurant_details__["a" /* RestaurantDetailsPage */]),
            __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
        ],
    })
], RestaurantDetailsPageModule);

//# sourceMappingURL=restaurant-details.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_director_director__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pop_up_pop_up__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_directionservice_directionservice__ = __webpack_require__(293);
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
 * Generated class for the RestaurantDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestaurantDetailsPage = (function () {
    function RestaurantDetailsPage(dServ, pop, ph, director, navCtrl, navParams) {
        this.dServ = dServ;
        this.pop = pop;
        this.ph = ph;
        this.director = director;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rate = 4;
        this.details = "menus";
        this.resImage = director.restuarant_Detail.image;
        this.location_Name = director.restuarant_Detail.pos;
        this.phone = director.restuarant_Detail.phone;
        console.log(director.restuarant_Detail.rate);
        console.log(director.restuarant_Detail);
        var lot = new google.maps.LatLng(director.restuarant_Detail.location[0], director.restuarant_Detail.location[1]);
        this.dServ.calcRoute(lot, director.restuarant_Detail.pos);
    }
    RestaurantDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.pop.SmartLoader('');
        this.ph.getResturantProfile().child(this.director.restuarant_Detail.key).child('category').on('value', function (userProfileSnapshot) {
            _this.items = [];
            console.log(userProfileSnapshot.val());
            //  this.pop.hideLoader()
            userProfileSnapshot.forEach(function (snap) {
                _this.items.push({
                    key: snap.key,
                    image: snap.val().pic,
                    name: snap.val().name,
                });
                console.log(_this.items);
                return false;
            });
        });
    };
    RestaurantDetailsPage.prototype.gotoFood = function (item) {
        this.navCtrl.push('FoodDetailsPage');
        console.log(item.key);
        this.director.food_Detail = item;
    };
    RestaurantDetailsPage.prototype.Accept = function () {
        this.navCtrl.push('BasketPage');
    };
    RestaurantDetailsPage.prototype.favorite = function () {
        var _this = this;
        this.pop.SmartLoader('');
        this.toggleMore = this.toggleMore ? false : true;
        if (this.toggleMore) {
            this.ph.getUserProfile().child('Favorite').child(this.director.restuarant_Detail.name).update({
                image: this.director.restuarant_Detail.image,
                pos: this.director.restuarant_Detail.pos,
                phone: this.director.restuarant_Detail.phone,
                location: this.director.restuarant_Detail.location,
                name: this.director.restuarant_Detail.name,
                openTime: this.director.restuarant_Detail.openTime,
                closeTime: this.director.restuarant_Detail.closeTime,
            }).then(function () {
                _this.ph.getResturantProfile().child(_this.director.restuarant_Detail.key).update({
                    fav: true
                });
                _this.pop.showToast('Added To Favorites');
            });
        }
        else {
            this.ph.getUserProfile().child('Favorite').child(this.director.restuarant_Detail.name).remove().then(function () {
                _this.ph.getResturantProfile().child(_this.director.restuarant_Detail.key).update({
                    fav: false
                });
                _this.pop.showToast('Removed From Favorites');
            });
        }
    };
    RestaurantDetailsPage.prototype.Rateme = function () {
        this.navCtrl.push('RatingsPage');
    };
    return RestaurantDetailsPage;
}());
RestaurantDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-restaurant-details',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/restaurant-details/restaurant-details.html"*/'<ion-header no-border>\n    <ion-navbar color="secondary">\n      <ion-title>\n        {{director.restuarant_Detail.name}}\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content fullscreen elestic-header>\n    <section class="housing-image"\n             [ngStyle]="{ \'background-image\': \'url(\' + resImage + \')\'}">\n      <section class="housing-banner" padding>\n        <span class="price">Open: {{director.restuarant_Detail.openTime}}am - {{director.restuarant_Detail.closeTime}}pm</span>\n      </section>\n    </section>\n  \n        <ion-card style="position: relative">\n            <ion-card-content>\n                <ion-card-title style="font-size: 15px">\n                    {{director.restuarant_Detail.name}}\n                    <span style="float: right; font-size: 20px" padding>\n                      <ion-icon [hidden]=\'!director.restuarant_Detail.fav\' name="heart" color="black" (click)=\'favorite()\'></ion-icon>\n                      <ion-icon  [hidden]=\'director.restuarant_Detail.fav\' name="heart-outline" color="black" (click)=\'favorite()\'></ion-icon></span>\n                  </ion-card-title>\n                  <p>{{location_Name}}</p>\n                  <p class="price-number"><ion-icon name="ios-timer"></ion-icon>  {{dServ.duration}}</p>\n                  <ion-row class="features-option">\n                      <ion-col col-12 >\n                          <span (click)=\'Rateme()\' padding>\n                              <button ion-button block *ngIf=\'director.restuarant_Detail.rate\' style="float: right; font-size: 20px;" >{{director.restuarant_Detail.rate}} <ion-icon name="star"></ion-icon></button>\n                              <button ion-button block *ngIf=\'!director.restuarant_Detail.rate\'  >Be the first to Write A review</button>\n                          </span>\n                      </ion-col>\n                    </ion-row>\n          \n            </ion-card-content>\n          </ion-card>\n\n          <ion-segment [(ngModel)]="details">\n              <h4 value="menus">\n                Recommended\n              </h4>\n            </ion-segment>\n\n            <div no-padding [ngSwitch]="details">\n                <ion-list *ngSwitchCase="\'menus\'">\n               <ion-item no-lines *ngFor="let item of items">\n                 <ion-thumbnail item-end (click)=\'gotoFood(item)\'>\n                   <img [src]="item.image"/>\n                 </ion-thumbnail>\n                \n                 <div (click)=\'gotoFood(item)\'>\n                    <span class="item-title bold" style="float: left">{{item.name}}</span><br>\n                  </div>\n              \n                </ion-item>\n                </ion-list>\n\n             </div>\n    \n  </ion-content>\n\n  <ion-footer  [hidden]=\'director.check < 0\'>\n    <button padding ion-button color="primary" block (click)="Accept()">\n      <ion-title>BASKET [{{director.check}}]</ion-title><ion-label></ion-label><h2 style="float:right !important">₦{{director.total}}</h2>\n      </button>\n  </ion-footer>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/restaurant-details/restaurant-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_directionservice_directionservice__["a" /* DirectionserviceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_director_director__["a" /* DirectorProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], RestaurantDetailsPage);

//# sourceMappingURL=restaurant-details.js.map

/***/ })

});
//# sourceMappingURL=4.js.map