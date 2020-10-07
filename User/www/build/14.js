webpackJsonp([14],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentfoodDetailsPageModule", function() { return CurrentfoodDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__currentfood_details__ = __webpack_require__(480);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CurrentfoodDetailsPageModule = (function () {
    function CurrentfoodDetailsPageModule() {
    }
    return CurrentfoodDetailsPageModule;
}());
CurrentfoodDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__currentfood_details__["a" /* CurrentfoodDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__currentfood_details__["a" /* CurrentfoodDetailsPage */]),
        ],
    })
], CurrentfoodDetailsPageModule);

//# sourceMappingURL=currentfood-details.module.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentfoodDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_director_director__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_geocoder_geocoder__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(48);
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
 * Generated class for the RestaurantDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CurrentfoodDetailsPage = (function () {
    function CurrentfoodDetailsPage(gCode, ph, pop, director, navCtrl, navParams) {
        this.gCode = gCode;
        this.ph = ph;
        this.pop = pop;
        this.director = director;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rate = 4;
        this.details = "menus";
        this.number = 0;
        this.drink = 'none';
        this.juice = false;
        this.cont = [];
        this.quantity = 0;
        this.resImage = director.currentfood_Detail.image;
    }
    CurrentfoodDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.ph.hasCalled) {
            this.increase();
            this.ph.hasCalled = false;
        }
        this.ph.getUserProfile().child('Basket').child(this.director.restuarant_Detail.key).child(this.director.currentfood_Detail.name).on('value', function (usereSnapshot) {
            if (usereSnapshot.val()) {
                _this.foodPrice = usereSnapshot.val().price;
            }
            else {
                _this.foodPrice = 0;
            }
        });
        //  this.pop.presentLoader('')
        this.ph.getUserProfile().child('Basket').child(this.director.restuarant_Detail.key).child(this.director.currentfood_Detail.name).on('value', function (ueSnapshot) {
            if (ueSnapshot.val()) {
                _this.quantity = ueSnapshot.val().quantity;
            }
            else {
                _this.quantity = 0;
            }
        });
        this.ph.getUserProfile().child('Drink').child(this.director.restuarant_Detail.key).child('drinks').on('value', function (ProfileSnapshot) {
            _this.items = [];
            if (ProfileSnapshot.val()) {
                //   this.pop.hideLoader()
                ProfileSnapshot.forEach(function (snap) {
                    _this.juice = true;
                    _this.items.push({
                        key: snap.key,
                        name: snap.val().name,
                        price: snap.val().price,
                        checked: snap.val().checked,
                    });
                    console.log(_this.items);
                    return false;
                });
            }
            else {
                _this.ph.getResturantProfile().child(_this.director.restuarant_Detail.key).child('category').child(_this.director.food_Detail.key).child('drinks').on('value', function (userProfileSnapshot) {
                    console.log(userProfileSnapshot.val(), _this.stush);
                    console.log(userProfileSnapshot.val());
                    userProfileSnapshot.forEach(function (snap) {
                        _this.ph.getUserProfile().child('Drink').child(_this.director.restuarant_Detail.key).child('drinks').child(snap.key).update({
                            name: snap.val().name,
                            price: snap.val().price,
                            checked: snap.val().checked,
                        });
                        return false;
                    });
                });
            }
        });
    };
    CurrentfoodDetailsPage.prototype.sizeCheck = function () {
        console.log(this.size);
    };
    CurrentfoodDetailsPage.prototype.increase = function () {
        var _this = this;
        console.log(this.quantity);
        this.hasFood = true;
        this.quantity = this.quantity + 1;
        var churn = this.director.currentfood_Detail.price * this.quantity;
        this.ph.getUserProfile().child('Basket').child(this.director.restuarant_Detail.key).child(this.director.currentfood_Detail.name).update({
            image: this.director.currentfood_Detail.image,
            price: parseInt(this.director.currentfood_Detail.price) * this.quantity,
            name: this.director.currentfood_Detail.name,
            quantity: this.quantity,
            restuarantKey: this.director.restuarant_Detail.key
        }).then(function (rop) {
            // console.log(rop)
            if (_this.director.total) {
                console.log(_this.director.total);
                _this.ph.getUserProfile().child('Basket').update({
                    total: parseInt(_this.director.total) + parseInt(_this.director.currentfood_Detail.price)
                });
            }
            else {
                _this.ph.getUserProfile().child('Basket').update({
                    total: parseInt(_this.director.currentfood_Detail.price)
                });
            }
        });
    };
    CurrentfoodDetailsPage.prototype.selectDrink = function (item) {
        var _this = this;
        if (this.quantity > 0) {
            console.log(item);
            var ref_1 = this.ph.getUserProfile().child('Drink').child(this.director.restuarant_Detail.key).child('drinks').child(item.key);
            var ref2_1 = this.ph.getUserProfile().child('Basket').child(this.director.restuarant_Detail.key).child(this.director.currentfood_Detail.name);
            var gh = item.key;
            var r = item.name;
            ref_1.once('value', function (userProfileSnapshot) {
                if (userProfileSnapshot.val().checked) {
                    ref_1.off('value');
                    ref_1.update({
                        checked: false
                    });
                    console.log('unchecked');
                    ref2_1.child('drink').once('value', function (userProfileSnapshot) {
                        console.log(userProfileSnapshot.val());
                        ref2_1.update({
                            drink: userProfileSnapshot.val() - item.price
                        }).then(function () {
                            ref2_1.child('drinks').child(item.name).remove();
                            _this.ph.getUserProfile().child('Basket').update({
                                total: _this.director.total - item.price
                            });
                        });
                    });
                }
                if (userProfileSnapshot.val().checked == false) {
                    ref_1.off('value');
                    ref_1.update({
                        checked: true
                    });
                    console.log('checked');
                    ref2_1.child('drink').once('value', function (userProfileSnapshot) {
                        console.log(parseInt(userProfileSnapshot.val()));
                        console.log(parseInt(item.price));
                        var ru = parseInt(userProfileSnapshot.val()) + parseInt(item.price);
                        if (userProfileSnapshot.val() != null) {
                            ref2_1.update({
                                drink: ru
                            }).then(function () {
                                ref2_1.child('drinks').push({
                                    name: item.name
                                });
                                if (_this.director.total) {
                                    _this.ph.getUserProfile().child('Basket').update({
                                        total: _this.director.total + parseInt(item.price)
                                    });
                                }
                                else {
                                    _this.ph.getUserProfile().child('Basket').update({
                                        total: parseInt(item.price)
                                    });
                                }
                            });
                        }
                        else {
                            ref2_1.update({
                                drink: parseInt(item.price)
                            }).then(function () {
                                ref2_1.child('drinks').push({
                                    name: item.name
                                });
                                if (_this.director.total) {
                                    _this.ph.getUserProfile().child('Basket').update({
                                        total: _this.director.total + parseInt(item.price)
                                    });
                                }
                                else {
                                    _this.ph.getUserProfile().child('Basket').update({
                                        total: parseInt(item.price)
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
        else {
            this.pop.showPimp('Choose Food First');
        }
    };
    CurrentfoodDetailsPage.prototype.decrease = function () {
        var _this = this;
        this.quantity = this.quantity - 1;
        if (this.quantity >= 1) {
            if (this.quantity != 0) {
                this.ph.getUserProfile().child('Basket').child(this.director.restuarant_Detail.key).child(this.director.currentfood_Detail.name).update({
                    image: this.director.currentfood_Detail.image,
                    price: parseInt(this.director.currentfood_Detail.price) - parseInt(this.director.currentfood_Detail.price),
                    name: this.director.currentfood_Detail.name,
                    quantity: this.quantity,
                    restuarantKey: this.director.restuarant_Detail.key
                }).then(function () {
                    if (_this.director.total) {
                        _this.ph.getUserProfile().child('Basket').update({
                            total: parseInt(_this.director.total) - parseInt(_this.director.currentfood_Detail.price)
                        });
                    }
                    else {
                        _this.ph.getUserProfile().child('Basket').update({
                            total: _this.director.currentfood_Detail.price * _this.quantity
                        });
                    }
                });
            }
            else {
                console.log('empty');
                // this.ph.getUserProfile().child('Basket').child(this.director.restuarant_Detail.key).child(this.director.currentfood_Detail.name).remove()
            }
        }
    };
    CurrentfoodDetailsPage.prototype.Accept = function () {
        this.navCtrl.push('BasketPage');
    };
    CurrentfoodDetailsPage.prototype.gotoCard = function () {
        console.log(this.go);
    };
    return CurrentfoodDetailsPage;
}());
CurrentfoodDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-currentfood-details',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/currentfood-details/currentfood-details.html"*/'<ion-header no-border>\n    <ion-navbar color="secondary"><ion-title>{{director.currentfood_Detail.name}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content fullscreen elestic-header>\n    \n            <div >\n\n              <p *ngIf=\'juice\' style="text-align: center; background-color: grey; color: white">\n                Quantity of items\n                </p>\n               \n                     <ion-grid >\n           <ion-row>\n             <ion-col>\n                <button style="float: left" ion-button icon-only icon-end (click)=\'increase()\'>\n                    <ion-icon name="add"></ion-icon>\n                  </button>\n             </ion-col>\n             <ion-col>\n                <h2 style="text-align: center">\n                   {{quantity}}\n                  </h2>\n             </ion-col>\n             <ion-col>\n                <button style="float: right" ion-button icon-only icon-end (click)=\'decrease()\'>\n                    <ion-icon name="remove"></ion-icon>\n                  </button>\n             </ion-col>\n           </ion-row>\n         </ion-grid> \n\n\n                    <ion-list padding >\n                        <ion-item no-lines >\n                          <ion-label style="float: left"><h2>{{director.currentfood_Detail.name}}</h2> <strong style="color: lightgreen">    ₦{{director.currentfood_Detail.price}}</strong></ion-label>\n                         \n                          \n                        </ion-item>\n                      </ion-list>\n  \n              \n\n                  <p *ngIf=\'juice\' style="text-align: center; background-color: grey; color: white">\n                      Include a Drink\n                      </p>\n\n                    <ion-list padding radio-group [(ngModel)]="drink">\n                        <ion-item no-lines *ngFor="let item of items" >\n                            <ion-label style="text-align: left">{{item.name}} <strong style="color: lightgreen">  ₦{{item.price}}</strong></ion-label>\n                            <ion-checkbox checked="{{item.checked}}" style="float: right" color="dark" (click)="selectDrink(item)"></ion-checkbox>\n                          </ion-item>\n                      </ion-list>\n\n\n             \n\n     \n  \n     \n\n             </div> \n      \n  </ion-content>\n\n  <ion-footer  [hidden]=\'director.check < 0\'>\n    <button padding ion-button color="primary" block (click)="Accept()">\n      <ion-title>BASKET [{{director.check}}]</ion-title><ion-label></ion-label><h2 style="float:right !important">₦{{director.total}}</h2>\n      </button>\n</ion-footer>\n  '/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/currentfood-details/currentfood-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_director_director__["a" /* DirectorProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], CurrentfoodDetailsPage);

//# sourceMappingURL=currentfood-details.js.map

/***/ })

});
//# sourceMappingURL=14.js.map