webpackJsonp([12],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(488);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */])],
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__ = __webpack_require__(66);
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








var ProfilePage = (function () {
    function ProfilePage(navCtrl, lp, ac, pop, camera, alertCtrl, ph, authProvider) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.ac = ac;
        this.pop = pop;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.ph = ph;
        this.authProvider = authProvider;
    }
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
            _this.ph.number = userProfileSnapshot.val().phoneNumber;
            _this.ph.name = userProfileSnapshot.val().name;
            _this.ph.accountNum = userProfileSnapshot.val().accountNumber;
            _this.ph.bank = userProfileSnapshot.val().Bank;
        });
    };
    ProfilePage.prototype.remove = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    ProfilePage.prototype.onSelectChange = function (selectedValue) {
        console.log('Selected', selectedValue);
        this.ph.UpdateCartype(selectedValue);
    };
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: this.lp.translate()[0].c5,
            buttons: [
                {
                    text: this.lp.translate()[0].i8,
                },
                {
                    text: this.lp.translate()[0].c7,
                    handler: function (data) {
                        _this.remove();
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateNumber = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: this.lp.translate()[0].h1,
            inputs: [
                {
                    value: this.ph.number
                },
            ],
            buttons: [
                {
                    text: this.lp.translate()[0].i8,
                },
                {
                    text: this.lp.translate()[0].i9,
                    handler: function (data) {
                        console.log(data);
                        _this.ph.UpdateNumber(data);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateName = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: this.lp.translate()[0].h2,
            inputs: [
                {
                    value: this.ph.name
                },
            ],
            buttons: [
                {
                    text: this.lp.translate()[0].i8,
                },
                {
                    text: this.lp.translate()[0].i9,
                    handler: function (data) {
                        console.log(data);
                        _this.ph.UpdateName(data);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateAccountNumber = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: this.lp.translate()[0].h10,
            inputs: [
                {
                    value: this.ph.accountNum
                },
            ],
            buttons: [
                {
                    text: this.lp.translate()[0].i8,
                },
                {
                    text: this.lp.translate()[0].i9,
                    handler: function (data) {
                        console.log(data);
                        _this.ph.UpdateAccountNumber(data);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateBank = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: this.lp.translate()[0].i1,
            inputs: [
                {
                    value: this.ph.bank
                },
            ],
            buttons: [
                {
                    text: this.lp.translate()[0].i8,
                },
                {
                    text: this.lp.translate()[0].i9,
                    handler: function (data) {
                        console.log(data);
                        _this.ph.UpdateBank(data);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateCarModel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: this.lp.translate()[0].h6,
            inputs: [
                {
                    value: this.ph.carType
                },
            ],
            buttons: [
                {
                    text: this.lp.translate()[0].i8,
                },
                {
                    text: this.lp.translate()[0].i9,
                    handler: function (data) {
                        console.log(data);
                        _this.ph.UpdateCarModel(data);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateCaryear = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: this.lp.translate()[0].h7,
            inputs: [
                {
                    value: this.ph.caryear
                },
            ],
            buttons: [
                {
                    text: this.lp.translate()[0].i8,
                },
                {
                    text: this.lp.translate()[0].i9,
                    handler: function (data) {
                        console.log(data);
                        _this.ph.UpdateCarYear(data);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updatePlate = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: this.lp.translate()[0].h8,
            inputs: [
                {
                    value: this.ph.plate
                },
            ],
            buttons: [
                {
                    text: this.lp.translate()[0].i8,
                },
                {
                    text: this.lp.translate()[0].i9,
                    handler: function (data) {
                        console.log(data);
                        _this.ph.UpdatePlate(data);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateCity = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: this.lp.translate()[0].h4,
            inputs: [
                {
                    value: this.ph.city
                },
            ],
            buttons: [
                {
                    text: this.lp.translate()[0].i8,
                },
                {
                    text: this.lp.translate()[0].i9,
                    handler: function (data) {
                        console.log(data);
                        _this.ph.UpdateCity(data);
                    }
                }
            ]
        });
        alert.present();
    };
    // updatePrice(){
    //   const alert = this.alertCtrl.create({
    //     message: "Your New Charging Price",
    //     inputs: [
    //       {
    //         value: this.ph.ridePrice
    //       },
    //     ],
    //     buttons: [
    //       {
    //         text: this.lp.translate()[0].i8,
    //       },
    //       {
    //         text: this.lp.translate()[0].i9,
    //         handler: data => {
    //           console.log(data)
    //           this.ph.UpdatePrice(data);
    //         }
    //       }
    //     ]
    //   });
    //   alert.present();
    // }
    ProfilePage.prototype.updateSeat = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: this.lp.translate()[0].h9,
            inputs: [
                {
                    value: this.ph.seat
                },
            ],
            buttons: [
                {
                    text: this.lp.translate()[0].i8,
                },
                {
                    text: this.lp.translate()[0].i9,
                    handler: function (data) {
                        console.log(data);
                        _this.ph.UpdateCarSeats(data);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.choosePic = function () {
        var _this = this;
        var actionSheet = this.ac.create({
            title: this.lp.translate()[0].i10,
            buttons: [
                {
                    text: this.lp.translate()[0].j1,
                    icon: 'ios-camera',
                    handler: function () {
                        _this.changePic();
                    }
                }, {
                    text: this.lp.translate()[0].j2,
                    icon: 'ios-folder',
                    handler: function () {
                        _this.changePicFromFile();
                    }
                }, {
                    text: this.lp.translate()[0].i8,
                    icon: 'close',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ProfilePage.prototype.changePic = function () {
        var _this = this;
        var cameraOptions = {
            quality: 16,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
            _this.processProfilePicture(_this.captureDataUrl);
        });
    };
    ProfilePage.prototype.changePicFromFile = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 16,
            encodingType: this.camera.EncodingType.PNG,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
            _this.processProfilePicture(_this.captureDataUrl);
        });
    };
    ProfilePage.prototype.processProfilePicture = function (captureData) {
        var _this = this;
        var storageRef = firebase.storage().ref();
        // Create a timestamp as filename
        var filename = Math.floor(Date.now() / 1000);
        // Create a reference to 'images/todays-date.jpg'
        var imageRef = storageRef.child("driverPictures/" + filename + ".jpg");
        imageRef.putString(captureData, firebase.storage.StringFormat.DATA_URL).then(function (snapshot) {
            imageRef.getDownloadURL().then(function (url) {
                //console.log(url)
                _this.ph.UpdatePPhotoInfo(url).then(function (success) {
                    //  console.log(url)
                    _this.pop.presentToast(_this.lp.translate()[0].j3);
                    //console.log("done")
                    //this.profileUploaded = true
                }).catch(function (error) { alert(error); });
            }).catch(function (error) { alert(error); });
        }).catch(function (error) { alert(error); });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/profile/profile.html"*/'<ion-header no-border>\n  <ion-navbar color="nav-color">\n    <ion-title>{{lp.translate()[0].d2}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon  name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="o-scroll" padding>\n  \n    <ion-list no-lines >\n      <ion-item text-center *ngIf="ph.picture" (click)="choosePic()">\n        <img class="profile-pic" [src]="ph.picture"/>\n        <ion-icon  name="ios-create"></ion-icon>\n      </ion-item>\n    </ion-list>\n    <ion-item-divider>{{lp.translate()[0].i3}}</ion-item-divider>\n    <ion-list  no-lines>\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col padding col-6>\n              <ion-icon   name="ios-mail"></ion-icon>\n              {{lp.translate()[0].f10}}\n          </ion-col>\n          <ion-col padding col-6 *ngIf="ph.user.email">\n              <ion-icon  ></ion-icon>\n            {{ph.user?.email}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    \n    <ion-item (click)="updateName()">\n      <ion-grid>\n        <ion-row>\n          <ion-col padding col-6>\n              <ion-icon   name="ios-contact"></ion-icon>\n              {{lp.translate()[0].h2}}\n          </ion-col>\n          <ion-col padding col-6 *ngIf="ph.name">\n              <ion-icon  name="ios-create"></ion-icon>\n            {{ph.name}}\n          </ion-col>\n          <ion-col padding col-6 *ngIf="!ph.name && name">\n            <span>\n              <ion-icon  name="ios-create"></ion-icon>\n              {{ph.name}}\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item (click)="updateNumber()">\n      <ion-grid>\n        <ion-row>\n          <ion-col padding col-6>\n              <ion-icon   name="ios-call"></ion-icon>\n              {{lp.translate()[0].h1}}\n          </ion-col>\n          <ion-col padding col-6 *ngIf="ph.number">\n            <ion-icon   name="ios-create"></ion-icon>\n            {{ph.number}}\n          </ion-col>\n          <ion-col padding col-6 class="placeholder-profile" *ngIf="!ph.number">\n            <span>\n            <ion-icon   name="ios-create"></ion-icon>\n            {{ph.number}}\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-item-divider>{{lp.translate()[0].i4}}</ion-item-divider>\n\n  <ion-list no-lines >\n      <ion-item (click)="updateAccountNumber()">\n          <ion-grid>\n            <ion-row>\n              <ion-col padding col-6>\n                  <ion-icon   name="ios-paper-outline"></ion-icon>\n                  {{lp.translate()[0].h10}}\n              </ion-col>\n              <ion-col padding col-6 *ngIf="ph.accountNum">\n                <ion-icon   name="ios-create"></ion-icon>\n                {{ph.accountNum}}\n              </ion-col>\n              <ion-col padding col-6 class="placeholder-profile" *ngIf="!ph.accountNum">\n                <span>\n                <ion-icon   name="ios-create"></ion-icon>\n              {{lp.translate()[0].i5}} {{lp.translate()[0].h10}}\n                </span>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        \n        <ion-item (click)="updateBank()">\n            <ion-grid>\n              <ion-row>\n                <ion-col padding col-6>\n                    <ion-icon   name="ios-podium"></ion-icon>\n                    {{lp.translate()[0].i1}}\n                </ion-col>\n                <ion-col padding col-6 *ngIf="ph.bank">\n                  <ion-icon   name="ios-create"></ion-icon>\n                  {{ph.bank}}\n                </ion-col>\n                <ion-col padding col-6 class="placeholder-profile" *ngIf="!ph.bank">\n                  <span>\n                  <ion-icon  name="ios-create"></ion-icon>\n                {{lp.translate()[0].i5}} {{lp.translate()[0].i1}}\n                  </span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n  </ion-list>\n  <ion-item-divider>{{lp.translate()[0].i6}}</ion-item-divider>\n  <ion-list>\n    <!-- <ion-item (click)="updateCarModel()">\n      <ion-grid>\n        <ion-row>\n          <ion-col padding col-6>\n              <ion-icon   name="ios-car-outline"></ion-icon>\n              {{lp.translate()[0].h6}}\n          </ion-col>\n          <ion-col padding col-6 *ngIf="ph.carType">\n            <ion-icon   name="ios-create"></ion-icon>\n            {{ph.carType}}\n          </ion-col>\n          <ion-col padding col-6 class="placeholder-profile" *ngIf="!ph.carType">\n            <span>\n            <ion-icon  name="ios-create"></ion-icon>\n          {{lp.translate()[0].i5}} {{lp.translate()[0].h6}}\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item> -->\n\n    <ion-item (click)="updateCaryear()">\n      <ion-grid>\n        <ion-row>\n          <ion-col padding col-6>\n              <ion-icon name="ios-calendar"></ion-icon>\n              {{lp.translate()[0].h7}}\n          </ion-col>\n          <ion-col padding col-6 *ngIf="ph.caryear">\n            <ion-icon   name="ios-create"></ion-icon>\n            {{ph.caryear}}\n          </ion-col>\n          <ion-col padding col-6 class="placeholder-profile" *ngIf="!ph.caryear">\n            <span>\n            <ion-icon  name="ios-create"></ion-icon>\n          {{lp.translate()[0].i5}} {{lp.translate()[0].h7}}\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item (click)="updatePlate()">\n      <ion-grid>\n        <ion-row>\n          <ion-col padding col-6>\n              <ion-icon   name="ios-closed-captioning-outline"></ion-icon>\n              {{lp.translate()[0].h8}}\n          </ion-col>\n          <ion-col padding col-6 *ngIf="ph.plate">\n            <ion-icon   name="ios-create"></ion-icon>\n            {{ph.plate}}\n          </ion-col>\n          <ion-col padding col-6 class="placeholder-profile" *ngIf="!ph.plate">\n            <span>\n            <ion-icon  name="ios-create"></ion-icon>\n          {{lp.translate()[0].i5}} {{lp.translate()[0].h8}}\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item (click)="updateSeat()">\n      <ion-grid>\n        <ion-row>\n          <ion-col padding col-6>\n              <ion-icon   name="ios-woman-outline"></ion-icon>\n              {{lp.translate()[0].h9}}\n          </ion-col>\n          <ion-col padding col-6 *ngIf="ph.seat">\n            <ion-icon   name="ios-create"></ion-icon>\n            {{ph.seat}}\n          </ion-col>\n          <ion-col padding col-6 class="placeholder-profile" *ngIf="!ph.seat">\n            <span>\n            <ion-icon  name="ios-create"></ion-icon>\n          {{lp.translate()[0].i5}} {{lp.translate()[0].h9}}\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <!-- <ion-item (click)="updatePrice()">\n        <ion-grid>\n          <ion-row>\n            <ion-col padding col-6>\n                <ion-icon   name="ios-cash-outline"></ion-icon>\n              Ride Price\n            </ion-col>\n            <ion-col padding col-6 *ngIf="ph.ridePrice">\n              <ion-icon   name="ios-create"></ion-icon>\n              {{ph.ridePrice}}\n            </ion-col>\n            <ion-col padding col-6 class="placeholder-profile" *ngIf="!ph.ridePrice">\n              <span>\n              <ion-icon  name="ios-create"></ion-icon>\n            {{lp.translate()[0].i5}} ridePrice\n              </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item> -->\n<!-- \n    <ion-item>\n        <ion-label padding color=\'deep\'>\n            <ion-icon name="ios-car-outline"></ion-icon>\n            {{lp.translate()[0].g7}}\n        </ion-label>\n        <ion-select [(ngModel)]="gender" (ionChange)="onSelectChange($event)">\n            <ion-option  value="1" selected>{{lp.translate()[0].g8}}</ion-option> -->\n            <!-- <ion-option  value="2">Bus Car</ion-option> -->\n            <!-- <ion-option  value="2">{{lp.translate()[0].g9}}</ion-option>\n        </ion-select>\n      </ion-item> -->\n\n  </ion-list>\n\n  \n\n  <ion-item-divider>{{lp.translate()[0].i7}}</ion-item-divider>\n  <ion-list>\n    <ion-item (click)="updateCity()">\n      <ion-grid>\n        <ion-row>\n          <ion-col padding col-6>\n              <ion-icon   name="ios-analytics-outline"></ion-icon>\n              {{lp.translate()[0].h4}}\n          </ion-col>\n          <ion-col padding col-6 *ngIf="ph.city">\n            <ion-icon   name="ios-create"></ion-icon>\n            {{ph.city}}\n          </ion-col>\n          <ion-col padding col-6 class="placeholder-profile" *ngIf="!ph.city">\n            <span>\n            <ion-icon  name="ios-create"></ion-icon>\n          {{lp.translate()[0].i5}} {{lp.translate()[0].h4}}\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n  <!-- <button ion-button block (click)="logOut()">\n    Sign Out\n  </button> -->\n\n</ion-content>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=12.js.map