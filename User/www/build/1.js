webpackJsonp([1],{

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(485);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            "invalidEmail": true
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_native_map_container_native_map_container__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_language_language__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import { Diagnostic } from '@ionic-native/diagnostic';
var LoginPage = (function () {
    function LoginPage(navCtrl, lp, settings, ntP, platform, menu, loadingCtrl, alertCtrl, authProvider, ph, formBuilder) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.settings = settings;
        this.ntP = ntP;
        this.platform = platform;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.ph = ph;
        this.formBuilder = formBuilder;
        this.initState = false;
        menu.swipeEnable(false, 'menu1');
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.checkForGPS = function () {
        //this.ntP.checkGps();
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
                .then(function (authData) {
                _this.loading.dismiss().then(function () {
                    _this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
                        var phone = userProfileSnapshot.val().phoneNumber;
                        if (phone == null)
                            _this.navCtrl.setRoot('AccountkitPage');
                        else
                            _this.navCtrl.setRoot('HomePage');
                    });
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: _this.lp.translate()[0].accept,
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    // loginViaFacebook(){
    //   this.authProvider.signInWithFacebook()
    //   .then( authData => {
    //     console.log(authData);
    //     this.loading.dismiss().then( () => {
    //           this.navCtrl.setRoot('StartupPage');
    //     });
    //   }, error => {
    //     this.loading.dismiss().then( () => {
    //       let alert = this.alertCtrl.create({
    //         message: error.message,
    //         buttons: [
    //           {
    //             text: this.lp.translate()[0].accept,
    //             role: 'cancel'
    //           }
    //         ]
    //       });
    //       alert.present();
    //     });
    //   });
    //   this.loading = this.loadingCtrl.create(
    //     {content: ''}
    //   );
    //   this.loading.present();
    // }
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push('ResetPasswordPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/login/login.html"*/'<ion-header no-border>\n        <ion-navbar transparent>\n          <ion-title>\n            Login\n          </ion-title>\n        </ion-navbar>\n      </ion-header>\n\n\n<ion-content style=\'background-image:  linear-gradient(rgba(2, 122, 56, 0.67), rgb(21, 43, 29)), url("./assets/bgauth2.png") !important;\'>\n \n    <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n    <ion-grid class="grid-center">\n            <ion-row>\n              <ion-col col-12 text-center>\n                <ion-list padding-left padding-right>\n                  <ion-item>\n                    <ion-label floating>{{lp.translate()[0].email}}</ion-label>\n                    <ion-input  formControlName="email" type="email" \n                    [class.invalid]="!loginForm.controls.email.valid && loginForm.controls.email.dirty"></ion-input>            \n                  </ion-item>\n                  <ion-item>\n                    <ion-label floating>{{lp.translate()[0].password}}</ion-label>\n                    <ion-input  formControlName="password" type="password" \n                    [class.invalid]="!loginForm.controls.password.valid && loginForm.controls.password.dirty"></ion-input>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n              <ion-col col-12 text-center padding-left padding-right>\n                <button ion-button block type="submit" [disabled]="!loginForm.valid" class="login" >{{lp.translate()[0].login}}</button>\n              </ion-col>\n          \n            </ion-row>\n          </ion-grid>\n  </form>\n   \n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=1.js.map