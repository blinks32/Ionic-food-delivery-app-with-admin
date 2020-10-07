webpackJsonp([19],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRestaurantsPageModule", function() { return AllRestaurantsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_restaurants__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AllRestaurantsPageModule = (function () {
    function AllRestaurantsPageModule() {
    }
    return AllRestaurantsPageModule;
}());
AllRestaurantsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__all_restaurants__["a" /* AllRestaurantsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__all_restaurants__["a" /* AllRestaurantsPage */]),
            __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
        ],
    })
], AllRestaurantsPageModule);

//# sourceMappingURL=all-restaurants.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllRestaurantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_native_map_container_native_map_container__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_activity_activity__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_directionservice_directionservice__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_geocoder_geocoder__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_director_director__ = __webpack_require__(155);
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
 * Generated class for the AllRestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllRestaurantsPage = (function () {
    function AllRestaurantsPage(director, act, navCtrl, dProvider, modalCtrl, myGcode, pop, ph, navParams, cMAP) {
        this.director = director;
        this.act = act;
        this.navCtrl = navCtrl;
        this.dProvider = dProvider;
        this.modalCtrl = modalCtrl;
        this.myGcode = myGcode;
        this.pop = pop;
        this.ph = ph;
        this.navParams = navParams;
        this.cMAP = cMAP;
    }
    AllRestaurantsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.act.getActivityProfile(this.ph.id).child('Client_Location').on('value', function (snap) {
            if (snap.val()) {
                _this.navCtrl.push('TrackerPage');
                console.log(snap.val());
                _this.act.getActivityProfile(_this.ph.id).child('Client_Location').off('value');
            }
            else {
                _this.act.getActivityProfile(_this.ph.id).child('Client_Location').off('value');
                _this.showModale();
                _this.cMAP.loadMap();
                _this.ph.getUserProfile().child('Basket').on('value', function (userProfileSnapshot) {
                    if (userProfileSnapshot.val() != null) {
                        _this.director.total = userProfileSnapshot.val().total;
                        _this.director.check = userProfileSnapshot.numChildren();
                        console.log(userProfileSnapshot.numChildren());
                        return false;
                    }
                });
            }
        });
    };
    AllRestaurantsPage.prototype.PickLocation = function () {
        this.showModale();
    };
    AllRestaurantsPage.prototype.showModale = function () {
        var _this = this;
        //console.log(this.myGcode.locationName)
        var modal = this.modalCtrl.create('AutocompletePage');
        modal.onDidDismiss(function (data) {
            //Open the address modal on location bar click to change location
            //console.log(data)
            //let myPos = new google.maps.LatLng(this.lat, this.lng)
            //Open the address modal on destination bar click to change destination
            if (data != null) {
                // document.getElementById("destination").innerText = data;
                // this.myGcode.destinationSetName = data
                // this.pop.presentLoader('');
                ///After data input, check to see if user selected to add a destination or to calculate distance.
                _this.myGcode.geocoder.geocode({ 'address': data }, function (results, status) {
                    if (status === 'OK') {
                        console.log(data);
                        _this.myGcode.locationName = data;
                        _this.myGcode.shortName = results[0].address_components[0].short_name;
                        var position = results[0].geometry.location;
                        var calPos = new google.maps.LatLng(position.lat(), position.lng());
                        _this.instansiate(position.lat(), position.lng());
                        _this.cMAP.lat = position.lat();
                        _this.cMAP.lng = position.lng();
                    }
                    else {
                    }
                });
            }
            else {
                _this.instansiate(_this.cMAP.lat, _this.cMAP.lng);
            }
        });
        modal.present();
    };
    AllRestaurantsPage.prototype.instansiate = function (lat, lng) {
        var _this = this;
        var done = true;
        this.pop.presentLoader('');
        this.ph.getResturantProfile().on('value', function (userProfileSnapshot) {
            _this.items = [];
            _this.locations = [];
            console.log(lat, lng, _this.myGcode.locationName);
            var begin = new google.maps.LatLng(lat, lng);
            userProfileSnapshot.forEach(function (snap) {
                // alert(lat)
                var end = new google.maps.LatLng(snap.val().location[0], snap.val().location[1]);
                var apart = google.maps.geometry.spherical.computeDistanceBetween(begin, end) * 3;
                if (apart / 1000 <= 1000) {
                    _this.locations.push(_this.dProvider.duration);
                    done = true;
                    if (_this.pop.dismissLoader != null)
                        _this.pop.hideLoader();
                    _this.items.push({
                        key: snap.key,
                        image: snap.val().pic,
                        name: snap.val().name,
                        price: snap.val().price,
                        address: _this.myGcode.place,
                        location: snap.val().location,
                        pos: snap.val().locationName,
                        openTime: snap.val().open,
                        closeTime: snap.val().closed,
                        phone: snap.val().phone,
                        _id: '1',
                        minprices: 15,
                        distance: _this.dProvider.duration,
                        open: true,
                        rate: snap.val().rate,
                        fav: snap.val().fav,
                        status: '20',
                    });
                    _this.hotels = _this.items;
                    console.log(_this.items);
                    // clearTimeout(rush);
                }
                console.log(_this.items);
                return false;
            });
        });
    };
    AllRestaurantsPage.prototype.goDetails = function (item) {
        this.navCtrl.push('RestaurantDetailsPage');
        this.director.restuarant_Detail = item;
        console.log(item);
    };
    AllRestaurantsPage.prototype.Accept = function () {
        this.navCtrl.push('BasketPage');
    };
    AllRestaurantsPage.prototype.presentFilter = function () {
        var modal = this.modalCtrl.create('FilterPage');
        modal.present();
    };
    return AllRestaurantsPage;
}());
AllRestaurantsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-all-restaurants',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/all-restaurants/all-restaurants.html"*/'<!--\n  Generated template for the AllRestaurantsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <p class=\'nip\' (click)=\'PickLocation()\'> ASAP <ion-icon name="arrow-round-forward"></ion-icon> {{myGcode.shortName}}  <ion-icon name="arrow-dropdown-circle"></ion-icon></p>\n  </ion-navbar>\n \n\n</ion-header>\n\n\n<ion-content no-padding>\n    <ion-item no-lines>\n        <p style="color: #000"><b>Popular near you</b></p>\n      </ion-item>\n\n       <ion-item no-lines *ngFor="let item of hotels">\n        <ion-card  class=\'mCard\' (click)="goDetails(item)">\n          <div *ngIf=\'item.image != null\' class="category">\n            <img src="{{item.image}}" >\n          </div>\n         \n        </ion-card>\n\n        <span>\n            <h2 style="text-align: center; color: #000"><strong>{{item.name}}</strong></h2>\n            <p style="text-align: center; color: rgb(92, 92, 92)">{{item.pos}}</p>\n            <!-- <h3 style="text-align: center">{{item.distance}}</h3> -->\n          </span>\n        \n      </ion-item>\n      \n    \n    </ion-content>\n    <ion-footer  [hidden]=\'director.check < 0\'>\n        <button padding ion-button color="primary" block (click)="Accept()">\n          <ion-title>BASKET [{{director.check}}]</ion-title><ion-label></ion-label><h2 style="float:right !important">₦{{director.total}}</h2>\n          </button>\n    </ion-footer>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/all-restaurants/all-restaurants.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_director_director__["a" /* DirectorProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_activity_activity__["a" /* ActivityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_directionservice_directionservice__["a" /* DirectionserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */]])
], AllRestaurantsPage);

//# sourceMappingURL=all-restaurants.js.map

/***/ })

});
//# sourceMappingURL=19.js.map