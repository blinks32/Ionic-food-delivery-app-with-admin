webpackJsonp([18],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(476);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */]),
        ],
    })
], AuthPageModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__intro_intro__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
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
    function AuthPage(navCtrl, ph, navParams, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.ph = ph;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
    }
    AuthPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //console.log('This is not an active user')
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            // alert(user)
            //Check of this is a user
            if (!user) {
                // this.ph.loadingState = true;
                //if this is not a user then show entrance scene and hide status bar
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__intro_intro__["a" /* IntroPage */]);
                // this.statusBar.hide(); 
                console.log('This is not an active user');
                unsubscribe();
            }
            else {
                //if user has a phone number then
                _this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
                    // if (has){
                    // console.log('dfegyuirotpiruywuieoigreiouyiytwuiouytuiyiughuigfuigrigryu')
                    var userID = userProfileSnapshot.val().phoneNumber;
                    var username = userProfileSnapshot.val().name;
                    // console.log(this.referal);
                    if (userID == null) {
                        // this.ph.loadingState = true;
                        _this.navCtrl.setRoot('AccountkitPage');
                        //console.log(this.ph.loadingState)
                        _this.ph.kit = true;
                        _this.ph.getUserProfile().off('value');
                    }
                    else {
                        if (username == null) {
                            _this.navCtrl.setRoot('PhonePage');
                            _this.ph.getUserProfile().off('value');
                        }
                        else {
                            //this.ph.loadingState = true;
                            //console.log(this.ph.loadingState)
                            if (userProfileSnapshot.val().blocked == true) {
                                //  this.pop.alertClosure('You Have Been Suspended.');
                                // this.isBlocked = true
                            }
                            _this.ph.getUserProfile().off('value');
                            _this.navCtrl.setRoot('TabsPage');
                        }
                    }
                    //   }
                });
                //if user then show the status bar 
                // this.statusBar.show();
                //For Chrome Testing.....
                //Set Up Variables For admin configurations
                _this.ph.getWebAdminProfile().orderByValue().on('value', function (userProfileSnapshot) {
                    //this.settings.appcurrency = admin.Currency;
                });
            }
        });
    };
    AuthPage.prototype.clickRegister = function () {
        var options = {
            direction: 'up',
            duration: 600
        };
        this.nativePageTransitions.curl(options);
        this.navCtrl.push('RegisterPage');
    };
    AuthPage.prototype.clickForgotPassword = function () {
        this.navCtrl.push('ForgotPasswordPage');
    };
    AuthPage.prototype.clickLogin = function () {
        this.navCtrl.setRoot('TabsPage');
    };
    return AuthPage;
}());
AuthPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-auth',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/auth/auth.html"*/'<!--\n  Generated template for the AuthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n    <div>\n        <div class="spinners"></div>\n      </div>\n\n\n\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/auth/auth.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
], AuthPage);

//# sourceMappingURL=auth.js.map

/***/ })

});
//# sourceMappingURL=18.js.map