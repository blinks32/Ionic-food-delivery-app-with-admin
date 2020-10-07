webpackJsonp([12],{

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDetailsPageModule", function() { return FoodDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food_details__ = __webpack_require__(482);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FoodDetailsPageModule = (function () {
    function FoodDetailsPageModule() {
    }
    return FoodDetailsPageModule;
}());
FoodDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__food_details__["a" /* FoodDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__food_details__["a" /* FoodDetailsPage */]),
        ],
    })
], FoodDetailsPageModule);

//# sourceMappingURL=food-details.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_director_director__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_geocoder_geocoder__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(48);
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
var FoodDetailsPage = (function () {
    function FoodDetailsPage(gCode, ph, director, navCtrl, navParams) {
        this.gCode = gCode;
        this.ph = ph;
        this.director = director;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rate = 4;
        this.details = "menus";
        this.resImage = director.restuarant_Detail.image;
    }
    FoodDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ph.getResturantProfile().child(this.director.restuarant_Detail.key).child('category').child(this.director.food_Detail.key).child('foods').on('value', function (userProfileSnapshot) {
            _this.items = [];
            console.log(userProfileSnapshot.val());
            //  this.pop.hideLoader()
            userProfileSnapshot.forEach(function (snap) {
                _this.items.push({
                    key: snap.key,
                    image: snap.val().pic,
                    name: snap.val().name,
                    price: snap.val().price
                });
                console.log(_this.items);
                return false;
            });
        });
    };
    FoodDetailsPage.prototype.goDetails = function (item) {
        this.navCtrl.push('CurrentfoodDetailsPage');
        this.director.currentfood_Detail = item;
        console.log(item);
    };
    FoodDetailsPage.prototype.Accept = function () {
        this.navCtrl.push('BasketPage');
    };
    return FoodDetailsPage;
}());
FoodDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-food-details',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/food-details/food-details.html"*/'<ion-header no-border>\n  <ion-navbar color="secondary">\n    <ion-title>\n      {{director.food_Detail.name}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen elestic-header>\n  \n\n       \n\n          <div no-padding [ngSwitch]="details">\n              <ion-list *ngSwitchCase="\'menus\'">\n             <ion-item no-lines *ngFor="let item of items" (click)="goDetails(item)">\n               <ion-thumbnail item-end>\n                 <img [src]="item.image"/>\n               </ion-thumbnail>\n               <div>\n                  <span class="item-title bold" style="float: left">{{item.name}}</span><br>\n                  <span class="item-title bold" style="float: left">₦{{item.price}}</span><br>\n                </div>\n             </ion-item>\n              </ion-list>\n           </div>\n  \n</ion-content>\n\n<ion-footer  [hidden]=\'director.check < 0\'>\n  <button padding ion-button color="primary" block (click)="Accept()">\n    <ion-title>BASKET [{{director.check}}]</ion-title><ion-label></ion-label><h2 style="float:right !important">₦{{director.total}}</h2>\n    </button>\n</ion-footer>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/food-details/food-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_director_director__["a" /* DirectorProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], FoodDetailsPage);

//# sourceMappingURL=food-details.js.map

/***/ })

});
//# sourceMappingURL=12.js.map