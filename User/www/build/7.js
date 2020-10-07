webpackJsonp([7],{

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]
        ]
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_language_language__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
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
    function ProfilePage(navCtrl, lp, actionSheetCtrl, modalCtrl, pop, camera, alertCtrl, ph, authProvider) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.pop = pop;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.ph = ph;
        this.authProvider = authProvider;
        ph.isHome = false;
    }
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // this.pop.presentLoader('')
        this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
            _this.userProfile = userProfileSnapshot.val();
            _this.phoneNumber = userProfileSnapshot.val().phoneNumber;
            _this.pic = userProfileSnapshot.val().picture;
            _this.home = userProfileSnapshot.val().Home;
            _this.name = userProfileSnapshot.val().name;
            _this.work = userProfileSnapshot.val().Work;
            _this.email = userProfileSnapshot.val().email;
            // this.pop.hideLoader()
        });
    };
    ProfilePage.prototype.remove = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    ProfilePage.prototype.choosePic = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: this.lp.translate()[0].choosefrom,
            buttons: [
                {
                    text: this.lp.translate()[0].camera,
                    icon: 'ios-camera',
                    handler: function () {
                        _this.changePic();
                    }
                }, {
                    text: this.lp.translate()[0].file,
                    icon: 'ios-folder',
                    handler: function () {
                        _this.changePicFromFile();
                    }
                }, {
                    text: this.lp.translate()[0].cancel,
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
            quality: 10,
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
            quality: 10,
            encodingType: this.camera.EncodingType.PNG,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
            _this.processProfilePicture(_this.captureDataUrl);
        });
    };
    ProfilePage.prototype.processProfilePicture = function (captureData) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a.storage().ref();
        // Create a timestamp as filename
        var filename = Math.floor(Date.now() / 1000);
        this.pop.presentLoader('Processing image..');
        // Create a reference to 'images/todays-date.jpg'
        var imageRef = storageRef.child("userPictures/" + filename + ".jpg");
        imageRef.putString(captureData, __WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a.storage.StringFormat.DATA_URL).then(function (snapshot) {
            imageRef.getDownloadURL().then(function (url) {
                //console.log(url)
                _this.ph.UpdatePhoto(url).then(function (success) {
                    //  console.log(url)
                    _this.pop.hideLoader();
                    //console.log("done")
                    //this.profileUploaded = true
                    _this.pop.presentToast(_this.lp.translate()[0].pictureset);
                }).catch(function (error) { alert(error); });
            }).catch(function (error) { alert(error); });
        }).catch(function (error) { alert(error); });
    };
    ProfilePage.prototype.updateNumber = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: this.lp.translate()[0].phone,
            inputs: [
                {
                    value: this.userProfile.phoneNumber
                },
            ],
            buttons: [
                {
                    text: this.lp.translate()[0].cancel,
                },
                {
                    text: this.lp.translate()[0].accept,
                    handler: function (data) {
                        console.log(data);
                        _this.ph.UpdateNumbers(data);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateName = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: this.lp.translate()[0].name,
            inputs: [
                {
                    value: this.userProfile.name
                },
            ],
            buttons: [
                {
                    text: this.lp.translate()[0].cancel,
                },
                {
                    text: this.lp.translate()[0].accept,
                    handler: function (data) {
                        console.log(data);
                        _this.ph.updateName(data);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateEmail = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: this.lp.translate()[0].email,
            inputs: [
                {
                    value: this.lp.translate()[0].email
                },
            ],
            buttons: [
                {
                    text: this.lp.translate()[0].cancel,
                },
                {
                    text: this.lp.translate()[0].accept,
                    handler: function (data) {
                        console.log(data);
                        _this.ph.updateEmail(data);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateHome = function () {
        var _this = this;
        var modal = this.modalCtrl.create('AutocompletePage');
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.ph.UpdateHome(data);
                _this.ph.home = true;
            }
        });
        modal.present();
    };
    ProfilePage.prototype.updateWork = function () {
        var _this = this;
        var modal = this.modalCtrl.create('AutocompletePage');
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.ph.UpdateWork(data);
                _this.ph.work = true;
            }
        });
        modal.present();
    };
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: this.lp.translate()[0].error,
            buttons: [
                {
                    text: this.lp.translate()[0].cancel,
                },
                {
                    text: this.lp.translate()[0].accept,
                    handler: function (data) {
                        _this.remove();
                    }
                }
            ]
        });
        alert.present();
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/profile/profile.html"*/'<ion-header no-border>\n  <ion-navbar color="nav-color">\n    <ion-title>{{lp.translate()[0].profile}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon  name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid no-padding class="profile-grid">\n        <ion-row no-padding>\n          <ion-col col-12 no-padding text-center>\n            <img *ngIf="ph.image" [src]=\'ph.image\' class="profile-image" alt="profile-image">\n            <img *ngIf="!ph.image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAVr0lEQVR4Xu2de1zO9/vHP51LBx10RilUQ06VckiEFbJDRowYy75bzCEbvzWHYYzNHLLZ5jBJRhtCIyoRkhwiSQcdlqRSWd0pqe5+j3Z4PL7btO/9qfv+HO7r5e/3+3Nd1/N17flodH9uFQZ/QAAEyBJQITs5BgcBEGAgACwBCBAmAAEQDh+jgwAEgB0AAcIEIADC4WN0EIAAsAMgQJgABEA4fIwOAhAAdgAECBOAAAiHj9FBAALADoAAYQIQAOHwMToIQADYARAgTAACIBw+RgcBCAA7AAKECUAAhMPH6CAAAWAHQIAwAQiAcPgYHQQgAOwACBAmAAEQDh+jgwAEgB0AAcIEIADC4WN0EIAAsAMgQJgABEA4fIwOAhAAdgAECBOAAAiHj9FBAALADoAAYQIQAOHwMToIQADYARAgTAACIBw+RgcBCAA7AAKECUAAhMPH6CAAAWAHQIAwAQiAcPgYHQQgAOwACBAmAAEQDh+jgwAEgB0AAcIEIADC4WN0EIAAsAMgQJgABEA4fIwOAhAAdgAECBOAAAiHj9FBAALADoAAYQIQAOHwMToIQADYARAgTAACIBw+RgcBCAA7AAKECUAAhMPH6CAAAWAHQIAwAQiAcPgYHQQgAOwACBAmAAEQDh+jgwAEgB0AAcIEIADC4WN0EIAAsAMgQJgABEA4fIwOAhAAdgAECBOAAAiHj9FBAALADoAAYQIQAOHwMToIQADYARAgTAACIBw+RgcBCIDGDqga61hZm2iZ9OjcycxKT8PARFtNW19DVV1TqqLSIm1uel7fXF/7tPFJRXV9VUnFs+KCqvqqEoZhpDTw0J0SAlDC7PUZfRMni0Gj7Y36DLPr7DTEWs+2n7a6ji6bUeub6iQPavLv5NdkXc2vuns5tzz9XDVT/YTNM3BW+AQgAOFnJFOHJjom1q5mXlPdzEdMtjN0dFdlVOWabYu0RZpbk5l8rfTCTzcqLkVV1FU8kqkxHBI0AbkuiaAnVc7mVJyNXV8e290veICx63gVVRVVLsZslkqbb1deORlbHLMjszLtHMMwLVzURQ35E4AA5M+Uiyequpt6Tn7NftqK7p1s+nJRsK0av9Tm3TpaeHBNavmVaIiAzyTaVxsCaB833m71NezrNavnO1ts9XsM4K2JFxTOleReD8/evShbcveykPpCL/9OAAIQyYboMXqmc1+at9XTdNR0Ibec+CghPDxnT4iEkVQKuU/09jsBCEAEm+Bm4vHqgl7Bu/U19E1E0C7za8OTsm25O95Ke3L9tBj6pdwjBCDs9DXfsZv35URL32Bht/ni7qJLTn65p2DvMoZhmsTYP4WeIQCBptz6I/8nzsuOOem9NEygLcrUVvqTu+fX3/vCv4apqZLpAg5xSgAC4BS3bMXMtMzsNzqtPGOlbW4v2w1hnyquL8kOzd7gU/qstFDYndLrDgIQWOa2mlaOG19acc5E09hSYK11qJ3yxsoHH2au9y5uKM7t0INwWa4EIAC54uzYw7pqmfba5rgmyVjD0KJjTxLm7YqGyofzc9eOKHtWViDMDul1BQEIJPMuTBfLHc6hV6w0zGwE0pJC2ihuKM+bl7HCo5apfayQAngoKwIQACtcCjvcaW/vNUkOuj0GK6yCgB6cUZd35Z3s1aMZhnkmoLZItgIB8B+7yuqu88J9TIbP5L8V7jo4Vnl+18bivfO4q4hKLyIAAfC8F5OMh89ZYf32Hp7b4KX8yuJvZpx+khLJS3EU/Y0ABMDjInTXNrc7aLsqvZOaNqvP6vPYslxL10rrawIKP+5XUv+kSK4PxsNkJgAByIxK7gdVdtmExLnpOnnL/ckiemBS7Z1TC4q2TcQnCfkJDQLghzsz3sBt+mfd5uLHX4ZhlhR/Mzm+Ou0IT1GQLgsB8BN/pwTH9TlmGobW/JQXVtWShqrCl3M+dsK/CnCfCwTAPXNmjtmYD5ZYvbqJh9KCLbnh4Y/vRz6+ECbYBpW0MQiA+2B1k/p9+ouxup4oPtrLFZ6KxppSr4wVPfBTAFfEf68DAXDLmwkwHR68orv/Do7LiqLcql8OB/1UkbJbFM0qSZMQALdBqpx0XnbPXtvUgduy4qiWU1ea8WrGF874FwHu8oIAuGPNuOrZjgzv++55DkuKrlRA5k6P9JrCFNE1LtKGIQAOg1tn57/b38JlLoclRVfqh9IrX63JPzFfdI2LtGEIgLvgNK4NCS3T19Ax4q6k+CpVPJeUDU/d2PrPo83i6158HUMAHGXmatjDM8J59gWOyom6zJRbu9zTa4qvinoIkTQPAXAU1OIeoz79j43nRxyVE3WZ7YXnV31VeGGNqIcQSfMQAEdBHRw4K8nFqNsIjsqJukxyRUH87PTIsaIeQiTNQwDcBKV+Z/RSibaqhjY35cRd5Wnz89oBiZs74+vJFZ8jBKB4xkwvPROnU0PnZnJQSmlKjL7wbc8HDdV5SjOQQAeBADgIxtfCYXLYwIk/clBKaUoE3Tz+SmLZ/RNKM5BAB4EAOAhmnr3Lh8scR2zkoJTSlFh7N3HRvsJb25RmIIEOAgFwEMyqPp5hgXYD8MstLFjvyru5+bPMS0tZXMHRdhCAANoBje2VbYPG/eDXrVcA23uUzx8pygz/IC1xNmUGXMwOAXBAea/HxFOjLLr5clBKaUrElRYcn3cl9lWlGUigg0AAHAQTOWJC/DAza9Lv/mOLOam0KDbwciykyRYcy/MQAEtg7Tl+yMs30d3Uyqs9d6neufioJG7mpdPjqM7P1dwQAAekI0aOO+NpYY1lZsE6oeRBzJyL8X4sruBoOwhAAO2AxvbKdyNGH/Pp2hX/P8sC3MmiwsPBl5PwF6csmLXnKATQHmos72x0d989vac93gPAgtv+3JyvQ69eC2ZxBUfbQQACaAc0tlc+HOC8boFzn1C29yif/+J2xqptt+/gE4EKXgIIQMGAWx8/rXfPtz8f5rKLg1JKU+L9i1cDj94viFCagQQ6CATAQTBDLU09f5w4Bi8DYcHa78QZj5tlVXg3IAtm7TkKAbSHGss7nRnG6N6706tYXiN9vP/Og/qPGaaWNAQOhocAOIDcWiJ55qS8Hp317TgqJ+oy95/UZI2IPNn6VWH4o2ACEICCAf/5+O0+Q/dPcbKbyVE5UZeJzMjZHRKXGiTqIUTSPATAUVBT+tjP2u47dB9H5URd5t2fL047dq/wkKiHEEnzEABHQZnq6lpkLPB/xFE50ZZplkqljt8cMK2pYfB3JhykCAFwAPnPEjGBPpfcupkP47Ck6EpdKihNeP3gmTGia1ykDUMAHAb3totT8IYJQ/DFoP/CfHFMctCBGzn4glCO9hIC4Ah0a5nOnRmjzPdnlmhpqOPtwC/g/vR509PB6yIsKxhGwmEspEtBABzHv8N/2PcBgx3wppsXcN+fkvXdkhPJ73AcCelyEADH8TuaG/W7vOT1dI7LCr6cVMq0DN8c5ZRdIckWfLNK1CAEwEOYB98ae9ynr80kHkoLtmT07fyoOfvPTRVsg0raGATAQ7B9rM36J4W8kqaqyoB/69cAt0ilHpui++Y+qrzHQxykS2IBeYp/x7SRe2YMc5jDU3lBld2dlPH10qhkfPafh1QgAB6gt5Y009U1v7ZmSlbnTpqGPLUgiLKVkmcVA9YedZRIJJWCaIhYExAAj4EHDneYExbotYfHFngvHbQnYWbU1fsHeG+EaAMQAL/Bq0Qt9D3h099mIr9t8FP9+LX8IzN3nn2DYZgWfjpAVQiA5x0w19Mzu7ju9TRLI10rnlvhtPyDCknRkNXHB+FHf06x/6MYBMAv/9+qu/U08zi98vULmmqqGgJoR+EtNDQ2NYxdc3R4Wn7FdYUXQ4F/JQABCGRB3vR0nPXte94kPi4cuDUu4GhKzmGBoCfdBgQgoPg/9HcJXRXgvk5ALcm9lf8LvxiyPeb2l3J/MB7YLgIQQLuwKeySyurpQ9d9MHnwRwqrwOODPz10dfX6qNRPeGwBpf9GAAIQ3kqoLA9w/XjlNA+leif+ivDkZZuPXt8kPNy0O4IABJr/nJf7BG0L9t6prqqiJtAWZWrreZO08b2wuKDIhKxwmS7gEKcEIABOcbMrNmpgd+/9y30PdTHQ6cLupjBOl1fVlU3fePKNy+mPLgqjI3TxdwIQgMB3wsrKqHtEyJgDw/pZjxB4q39pL/HmLwnzvjgT+KCirkRMfVPrFQIQR+JqIVNcQlbM9vhER0vYbxOqa2iqW7n7cmjY0ZvbGYaRigMv3S4hABFlb9/VoOfm4FFbfd3tJwix7eiL948t+zppSWHpr4VC7A89/ZMABCDCrfB26T527bzhn7o4WboKof3kjJLk1d9eDD1/q/i8EPpBD7ITgABkZyW0kyq+7jY+S2a4fTByoM0oPpqLSy08u+Vg6ufx14oS8IEePhLoeE0IoOMMeX9CLxsTp6BJ/eZOedlxmnUXfYV+qOhBWc2DqDNZP+w7fndP1sOKHN6HRwMdIgABdAif4C6rug+w8hjvYT9+nEePcQMczAd29PcIGpubm9Luld84c7XwbGxy/qmr6Q9T8Zd7gsu93Q1BAO1GJ4qLusMGdRvU386kn6NtFycbq8621uZ61saGOiZ6Opr6OppqWlKmpeVZU3ODRNIgqappqCwplzwsKKkpzC6svHcrtyw95VZJGsMwdaKYFk2yJgABsEaGCyCgPAQgAOXJEpOAAGsCEABrZLgAAspDAAJQniwxCQiwJgABsEaGCyCgPAQgAOXJEpOAAGsCEABrZLgAAspDAAJQniwxCQiwJgABsEaGCyCgPAQgAOXJEpOAAGsCEABrZLgAAspDAAJQniwxCQiwJgABsEaGCyCgPAQgAGFl2foKcGXPpPWbgJuFhZ1uN8q+bEJKVtWpk9UAB11rZzstM0dbbXOHrhpGdgYaOoa6alr6ndQ09dRV1El8OWhTS1NjbfNzSX1zQ21NY/2vD5qq8grrH2fn1Zdn3a8vTs+sK7mNdw5ws7oQgAI5W+kYdxtl4PjqEMPe3m76tiMN1HUMFVhOaR5d3fi06rok/0JKTV5CbHVOdGV95UOlGU5gg0AA8g9E9zXTwZMnmfUPdO1s76XGqKjKvwSdJzYzLdLUmrxzx8rT9p8sTzuCl5PIN3sIQE48DRgD41m2gxcGWrgv0NfQMZLTY/GY/yJQ3VRfFfHwyvaIorTt1Uz1E8DpOAEIoIMMuzCM/my7MaHTrVyCddW19Dr4OFyXgUDr3x8cKE4J21KQuIFhmFoZruBIGwQggA6sxgRzp4DlvcZuNtdS7Jt4O9CiUl991FD9cEP2ucWxjzN/VOpBFTgcBNAOuCY6OtabHf2+H9bFbmw7ruOKnAkkVebHLs/++a3HT5+WyvnRSv84CIBlxF6mtj6b+k2IMNYU5zf2shxXNMcrGurKlqbHzLhUWRQvmqYF0CgEIHsIKoschq4N7un2kary/7KO7FQEdLJZKpV+nZe6dmtOymoBtSXoViAA2eLR2DJozPevdHV6U7bjOMUngajizH3LbyYEMQzTxGcfYqgNAfzvlHT3efj9NNK8m8//PooTQiFwrrQwZm7KqSkMw9QLpSch9gEB/HsqWgeH+50eam7Jy5dvCnFhxNTTpfLi+BkXT7V+lfpzMfXNZa8QQNu0Vb91947y6W7jz2UgqCVfAieK8g8tSDk/Hd9e/GKuEEAb+/api/vOmb0c/iPfdcTT+CCwNytr++q0qwv5qC30mhDACxIK6Nlz7qYhQ3YLPTz0JzuBxcnJM48UFByQ/QaNkxDA33J2MjLqe3y8d6qOmroOjRWgMWVdY+NTv5izLjkSSRaNiWWbEgL4KyedRP8JN3obGjjJhg+nxEQg69cnd7yPxLoyDNMgpr4V2SsE8F90l7n2X7twcJ+PFQkcz+aXwKZrd1ZuvXFnLb9dCKc6BPBHFnb6+r3PB/rd0VBV1RROPOhE3gQampueeUae7lNUXZ0v72eL8XkQwB+pHZ489uxIGwt8uEeMW8yy5/j7JT/POJ4wkeU1pTwOATAMM9zWwuvI1HGJSpkwhnohAb8DsUNTH5ZfoY4HAmAYJurNcXFePSzHUF8GSvPH5z48Nf1wfOtvCZL+Q14Ag7uaD4l9e3wK6S0gOvyY72IG3S55nEZ0/N/GJi+AnVNHRr7hbN/6q6L4Q4zAoZvZ++YfufwWsbH/Mi5pAbS+z+/2utll2ppq+KUfgv8V1D57LrFZGWFB+U3DpAXw5hCHOWFTR+whuPsY+Q8C8w6cn/HTzfuRVIGQFkD0ggnxI3tbeVMNH3MzTFxm0ekpO8+Mp8qCsgB0ysKCftVSxy/+UF3+1rnrGxrrLBftbf0eB5LvDCArAG+n7mOPhow/S3n5MfvvBHw3Hh+ZnPsoiSIPsgJY7e+xYYnfgOUUQ8fMfyXwWfSNT9ZHp5J8kShZAfwc+so5z5es8aov2ICJTy8689rGGJLvfCQrgPs7Z5dYGOtaYv9BoPBxTWHf+RE9KJIgKQBjhjF4cGRBNcXAMfM/CTS3SKUGk79q/V5Hcm8QJimAgXZdXC5vmX4N/zGAwJ8E3BYd6p9RUJ5OjQhJAbzsZjchepVfDLWwMW/bBCaGHhuXcKsojhojkgKY6tU7IHz5+B+ohY152yYwbe3P/scu5x6lxoikAOb49gv6OmTMd9TCxrxtE5i76ezsyLN3w6kxIimAhVNcFm96z/NLamFj3rYJLNyasOCb6Ns7qDEiKYAlAa5LP5vv+Tm1sDFv2wRCwhIXhx2+uZUaI5ICGOJs7T56sA3eAERt2/9l3rir+WevZ5amUkNCUgDUQsa8INAWAQgAuwEChAlAAITDx+ggAAFgB0CAMAEIgHD4GB0EIADsAAgQJgABEA4fo4MABIAdAAHCBCAAwuFjdBCAALADIECYAARAOHyMDgIQAHYABAgTgAAIh4/RQQACwA6AAGECEADh8DE6CEAA2AEQIEwAAiAcPkYHAQgAOwAChAlAAITDx+ggAAFgB0CAMAEIgHD4GB0EIADsAAgQJgABEA4fo4MABIAdAAHCBCAAwuFjdBCAALADIECYAARAOHyMDgIQAHYABAgTgAAIh4/RQQACwA6AAGECEADh8DE6CEAA2AEQIEwAAiAcPkYHAQgAOwAChAlAAITDx+ggAAFgB0CAMAEIgHD4GB0EIADsAAgQJgABEA4fo4MABIAdAAHCBCAAwuFjdBCAALADIECYAARAOHyMDgIQAHYABAgTgAAIh4/RQQACwA6AAGECEADh8DE6CEAA2AEQIEwAAiAcPkYHAQgAOwAChAlAAITDx+ggAAFgB0CAMAEIgHD4GB0EIADsAAgQJgABEA4fo4MABIAdAAHCBCAAwuFjdBCAALADIECYAARAOHyMDgIQAHYABAgTgAAIh4/RQQACwA6AAGEC/w/4XNs9CFu40AAAAABJRU5ErkJggg==" class="profile-image" alt="profile-image">\n            <button *ngIf="isEdit" ion-button icon-only round class="btn-upload" (click)="choosePic()" color="light">\n              <ion-icon name="camera"></ion-icon>\n            </button>\n            <h3 (click)="updateName()" *ngIf="ph.name" class="profile-title">{{ph.user?.displayName}}</h3>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n      <ion-list>\n          <ion-item (click)="updateName()">\n              <ion-icon name="contact" item-start></ion-icon>\n              Name\n              <ion-icon name="ios-create" item-end><p>{{ph.name}}</p></ion-icon>\n            </ion-item>\n        <ion-item (click)="updateNumber()">\n          <ion-icon name="call" item-start></ion-icon>\n          Phone\n          <ion-icon name="ios-create" item-end><p>{{phoneNumber}}</p></ion-icon>\n        </ion-item>\n        <ion-item (click)="updateEmail()">\n          <ion-icon name="mail" item-start></ion-icon>\n          Email\n          <ion-icon name="ios-create" item-end><p>{{email}}</p></ion-icon>\n        </ion-item>\n      </ion-list>\n      <!-- <ion-label>Others</ion-label> -->\n      <!-- <ion-list>\n        <ion-item>\n          <ion-icon name="custom-settings" item-start></ion-icon>\n          Settings -->\n          <!-- <ion-icon name="ios-add" item-end></ion-icon> -->\n        <!-- </ion-item>\n        <ion-item>\n          <ion-icon name="custom-policy" item-start></ion-icon>\n          Privacy Policy -->\n          <!-- <ion-icon name="ios-add" item-end></ion-icon> -->\n        <!-- </ion-item>\n        <ion-item>\n          <ion-icon name="custom-terms" item-start></ion-icon>\n          Term and Services -->\n          <!-- <ion-icon name="ios-add" item-end></ion-icon> -->\n        <!-- </ion-item>\n      </ion-list> -->\n\n</ion-content>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=7.js.map