webpackJsonp([22],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthPageModule = (function () {
    function AuthPageModule() {
    }
    return AuthPageModule;
}());
AuthPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */]),
        ],
    })
], AuthPageModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
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
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AuthPage = (function () {
    function AuthPage(navCtrl, ph, navParams) {
        this.navCtrl = navCtrl;
        this.ph = ph;
        this.navParams = navParams;
    }
    AuthPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var unsubcribe = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            //alert()
            if (!user) {
                _this.navCtrl.setRoot("RegisterPage");
                // this.statusBar.hide();
                _this.ph.loadingState = true;
                console.log(_this.ph.loadingState);
                unsubcribe();
            }
            else {
                unsubcribe();
                var phone_1;
                var picture_1;
                var licence_pic_1;
                var active_User_1;
                var license_1;
                _this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
                    console.log(userProfileSnapshot.key);
                    phone_1 = userProfileSnapshot.val().phoneNumber;
                    picture_1 = userProfileSnapshot.val().picture;
                    active_User_1 = userProfileSnapshot.val().active_state;
                    license_1 = userProfileSnapshot.val().license;
                    licence_pic_1 = userProfileSnapshot.val().license_picture;
                    _this.ph.getUserProfile().off('value');
                    if (phone_1) {
                        if (license_1) {
                            if (picture_1 != null && licence_pic_1 != null) {
                                if (active_User_1) {
                                    _this.navCtrl.setRoot('HomePage');
                                    // this.statusBar.show();
                                }
                                else {
                                    _this.navCtrl.setRoot('WaitingPage');
                                    _this.ph.loadingState = true;
                                    console.log(_this.ph.loadingState);
                                }
                            }
                            else {
                                _this.navCtrl.setRoot('AddphotoinfoPage');
                                console.log(_this.ph.loadingState);
                                _this.ph.loadingState = true;
                            }
                        }
                        else {
                            _this.navCtrl.setRoot('MoreInfoPage');
                            console.log(_this.ph.loadingState);
                            _this.ph.loadingState = true;
                        }
                    }
                    else {
                        _this.navCtrl.setRoot('AccountKitPage');
                        _this.ph.loadingState = true;
                        console.log(_this.ph.loadingState);
                    }
                });
            }
        });
    };
    return AuthPage;
}());
AuthPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-auth',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/auth/auth.html"*/'<!--\n  Generated template for the AuthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n    <div>\n        <div class="spinners"></div>\n      </div>\n\n\n\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/auth/auth.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], AuthPage);

//# sourceMappingURL=auth.js.map

/***/ })

});
//# sourceMappingURL=22.js.map