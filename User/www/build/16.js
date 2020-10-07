webpackJsonp([16],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketPageModule", function() { return BasketPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basket__ = __webpack_require__(478);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BasketPageModule = (function () {
    function BasketPageModule() {
    }
    return BasketPageModule;
}());
BasketPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__basket__["a" /* BasketPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__basket__["a" /* BasketPage */]),
        ],
    })
], BasketPageModule);

//# sourceMappingURL=basket.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_geocoder_geocoder__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_director_director__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_activity_activity__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_native_map_container_native_map_container__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_stripe_stripe__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_paystack_paystack__ = __webpack_require__(299);
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
 * Generated class for the BasketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BasketPage = (function () {
    function BasketPage(gCode, modalCtrl, settings, stripe, paystack, cMap, act, director, navCtrl, pop, ph, navParams) {
        this.gCode = gCode;
        this.modalCtrl = modalCtrl;
        this.settings = settings;
        this.stripe = stripe;
        this.paystack = paystack;
        this.cMap = cMap;
        this.act = act;
        this.director = director;
        this.navCtrl = navCtrl;
        this.pop = pop;
        this.ph = ph;
        this.navParams = navParams;
        this.details = "menus";
    }
    BasketPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ph.getUserProfile().child('Basket').on('value', function (userProfileSnapshot) {
            _this.items = [];
            userProfileSnapshot.forEach(function (snap) {
                snap.forEach(function (element) {
                    console.log(element.val());
                    _this.items.push({
                        key: element.key,
                        name: element.val().name,
                        quantity: element.val().quantity,
                        price: element.val().price,
                        drink: element.val().drink,
                        drinks: element.val().drinks,
                        restuarantKey: element.val().restuarantKey,
                    });
                    console.log(_this.items);
                    return false;
                });
                return false;
            });
        });
    };
    BasketPage.prototype.onClick = function (item) {
        console.log(item);
        this.ph.getUserProfile().child('Basket').child(item.key).remove().then(function () {
        });
    };
    BasketPage.prototype.Accept = function () {
        var _this = this;
        // this.navCtrl.push('BasketPage')
        var drinks = [];
        var foods = [];
        var quantity = [];
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var pay = '0';
        if (this.ph.card != null) {
            if (this.settings.isStripe) {
                this.stripe.ChargeCard(this.director.total, this.ph.id);
            }
            else {
                this.paystack.ChargeCard(this.ph.card, this.ph.month, this.ph.cvc, this.ph.year, this.director.total * 100, this.ph.email, this.ph.id);
            }
            this.act.getActivityProfile(this.ph.id).once('value', function (userProfileSnapshot) {
                if (userProfileSnapshot.val())
                    if (userProfileSnapshot.val().Client_hasPaid) {
                        _this.items.forEach(function (element) {
                            console.log(element.drinks);
                            if (element.drinks)
                                drinks.push(element.drinks);
                            foods.push(element.name);
                            console.log(element.restuarantKey);
                            console.log(element.price);
                            _this.ph.getResturantProfile().child(element.restuarantKey).child('Orders').on('value', function (snap) {
                                if (snap.val())
                                    pay = snap.val().Client_Total;
                            });
                            if (element.drinks) {
                                _this.ph.getResturantProfile().child(element.restuarantKey).child('Orders').push({
                                    Client_Name: _this.ph.name,
                                    Client_Location: _this.gCode.locationName,
                                    Client_location: [_this.cMap.lat, _this.cMap.lng],
                                    Client_Food: element.name,
                                    Client_Drinks: element.drinks,
                                    Client_DrinkPrice: element.drink,
                                    Client_paidCash: true,
                                    Client_Key: _this.ph.id,
                                    Client_Total: element.price + parseInt(pay)
                                }).then(function () {
                                });
                            }
                            else {
                                _this.ph.getResturantProfile().child(element.restuarantKey).child('Orders').push({
                                    Client_Name: _this.ph.name,
                                    Client_Location: _this.gCode.locationName,
                                    Client_Food: element.name,
                                    Client_location: [_this.cMap.lat, _this.cMap.lng],
                                    Client_Drinks: 'none',
                                    Client_paidCash: true,
                                    Client_Total: element.price + parseInt(pay),
                                    Client_Key: _this.ph.id
                                }).then(function () {
                                });
                            }
                            quantity.push(element.quantity);
                            _this.act.getActivityProfile(_this.ph.id).update({
                                Client_Name: _this.ph.name,
                                Client_Location: _this.gCode.locationName,
                                Client_Food: foods,
                                Client_location: [_this.cMap.lat, _this.cMap.lng],
                                Client_Drinks: drinks,
                                Client_FoodQuantity: quantity,
                                Client_Total: _this.director.total,
                                Client_Key: _this.ph.id,
                                Delivered: false
                            }).then(function () {
                            });
                        });
                    }
            });
            this.navCtrl.push('TrackerPage');
            console.log('trugfh');
            this.ph.getUserProfile().child('History').push({
                Name: this.ph.name,
                Location: this.gCode.locationName,
                Food: foods,
                Drinks: drinks,
                FoodQuantity: quantity,
                Total: this.director.total,
                Date: date
            });
        }
        else {
            console.log('using cash', this.ph.id);
            var modal = this.modalCtrl.create('PaymentPage');
            modal.onDidDismiss(function (data) {
                _this.items.forEach(function (element) {
                    console.log(element.name);
                    if (element.drinks) {
                        drinks.push(element.drinks);
                    }
                    else {
                    }
                    console.log(element.price);
                    console.log(element.restuarantKey);
                    _this.ph.getResturantProfile().child(element.restuarantKey).child('Orders').on('value', function (snap) {
                        if (snap.val())
                            pay = snap.val().Client_Total;
                    });
                    if (element.drinks) {
                        _this.ph.getResturantProfile().child(element.restuarantKey).child('Orders').push({
                            Client_Name: _this.ph.name,
                            Client_Location: _this.gCode.locationName,
                            Client_Food: element.name,
                            Client_location: [_this.cMap.lat, _this.cMap.lng],
                            Client_Drinks: element.drinks,
                            Client_DrinkPrice: element.drink,
                            Client_paidCash: true,
                            Client_Key: _this.ph.id,
                            Client_Total: element.price
                        }).then(function () {
                        });
                    }
                    else {
                        _this.ph.getResturantProfile().child(element.restuarantKey).child('Orders').push({
                            Client_Name: _this.ph.name,
                            Client_Location: _this.gCode.locationName,
                            Client_Food: element.name,
                            Client_location: [_this.cMap.lat, _this.cMap.lng],
                            Client_Drinks: 'none',
                            Client_paidCash: true,
                            Client_Key: _this.ph.id,
                            Client_Total: element.price
                        }).then(function () {
                        });
                    }
                    foods.push(element.name);
                    quantity.push(element.quantity);
                    console.log(foods, element.drinks);
                    _this.act.getActivityProfile(_this.ph.id).update({
                        Client_Name: _this.ph.name,
                        Client_Location: _this.gCode.locationName,
                        Client_Food: foods,
                        Client_Drinks: drinks,
                        Client_Key: _this.ph.id,
                        Client_Total: _this.director.total,
                        Client_FoodQuantity: quantity,
                        Client_paidCash: true,
                        Delivered: false
                    }).then(function () {
                    });
                });
                console.log('trugfh');
                _this.navCtrl.push('TrackerPage');
                _this.ph.getUserProfile().child('History').push({
                    Name: _this.ph.name,
                    Location: _this.gCode.locationName,
                    Food: foods,
                    Drinks: drinks,
                    FoodQuantity: quantity,
                    Total: _this.director.total,
                    Date: date
                });
            });
            modal.present();
        }
    };
    return BasketPage;
}());
BasketPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-basket',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/basket/basket.html"*/'<ion-header>\n\n    <ion-navbar color="secondary">\n      <ion-title>Basket</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content no-padding>\n\n      <div no-padding >\n            <ion-item no-lines>\n                <div>\n                    <span class="item-title bold" style="font-size: 1em"><ion-icon padding name=\'navigate\'></ion-icon><p>{{gCode.locationName}}</p></span><br>\n                  </div>\n                  <p text-center> >> Delivered Outside << </p>\n            </ion-item>\n      </div>\n\n      \n      <p style="text-align: center; background: grey; color: white">Your Orders</p>\n      \n          \n        <div >\n            <ion-list >\n           <ion-item  *ngFor="let item of items">\n           \n             <div>\n               <ion-grid>\n                 <ion-row>\n                   <ion-col  class=\'init\'>\n                      <span class="item-title bold" style="color: green"><strong>{{item.quantity}} X</strong></span>\n                   </ion-col>\n                   <ion-col>\n                      <span  class="item-title bold" ><h2>{{item.name}}</h2></span>\n                      <span *ngIf=\'item.drink\' class="item-title bold" >Drinks</span><br>\n                    </ion-col>\n                    <ion-col>\n                        <span class="item-title bold" >₦{{item.price}}</span><br>\n                        <span *ngIf=\'item.drink\' class="item-title bold" >₦{{item.drink}}</span><br>\n                    </ion-col>\n                    <!-- <ion-col  (click)="onClick(item)">\n                        <button padding ion-button color="danger" icon-only class="btn" >\n                            <ion-icon name=\'ios-close\'></ion-icon>\n                          </button>\n                    </ion-col> -->\n                 </ion-row>\n               </ion-grid>\n                \n              </div>\n             \n           </ion-item>\n            </ion-list>\n        </div>\n\n      \n        <p style="text-align: center; background: grey; color: white">Total</p>\n        \n        <p class="item-title bold" style="text-align: center; color: green" >Delivery Cost</p>\n        <p class="item-title bold" style="text-align: center;" >₦400</p>\n\n        <hr>\n\n                <h2 style="text-align: center; color: green"><strong>₦{{director.total}}</strong></h2>\n           \n       \n        \n   \n   \n  </ion-content>\n  \n  <ion-footer >\n      <button padding ion-button color="primary" block (click)="Accept()">\n      Place Order\n        </button>\n  </ion-footer>\n  \n  '/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/basket/basket.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_stripe_stripe__["a" /* StripeProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_paystack_paystack__["a" /* PaystackProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_activity_activity__["a" /* ActivityProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_director_director__["a" /* DirectorProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], BasketPage);

//# sourceMappingURL=basket.js.map

/***/ })

});
//# sourceMappingURL=16.js.map