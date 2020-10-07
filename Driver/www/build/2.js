webpackJsonp([2],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_password__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetPasswordPageModule = (function () {
    function ResetPasswordPageModule() {
    }
    return ResetPasswordPageModule;
}());
ResetPasswordPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */])],
    })
], ResetPasswordPageModule);

//# sourceMappingURL=reset-password.module.js.map

/***/ }),

/***/ 472:
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

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_language_language__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResetPasswordPage = (function () {
    function ResetPasswordPage(navCtrl, lp, authProvider, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.lp = lp;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.resetPasswordForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
        });
    }
    ResetPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.resetPasswordForm.valid) {
            console.log(this.resetPasswordForm.value);
        }
        else {
            this.authProvider.resetPassword(this.resetPasswordForm.value.email)
                .then(function (user) {
                var alert = _this.alertCtrl.create({
                    message: _this.lp.translate()[0].j10,
                    buttons: [
                        {
                            text: _this.lp.translate()[0].i9,
                            role: 'cancel',
                            handler: function () { _this.navCtrl.pop(); }
                        }
                    ]
                });
                alert.present();
            }, function (error) {
                var errorMessage = error.message;
                var errorAlert = _this.alertCtrl.create({
                    message: errorMessage,
                    buttons: [{ text: _this.lp.translate()[0].i9, role: 'cancel' }]
                });
                errorAlert.present();
            });
        }
    };
    ResetPasswordPage.prototype.goToLogin = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    return ResetPasswordPage;
}());
ResetPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reset-password',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/reset-password/reset-password.html"*/'\n\n\n<ion-content class="o-scroll" padding>\n  <!-- <div text-center>\n    <img src=\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMzJweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMzI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCAzMiIgd2lkdGg9IjIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJMYXllcl8xIi8+PGcgaWQ9Im1hcF94NUZfcGluX3g1Rl9zdHJva2UiPjxnPjxwYXRoIGQ9Ik05Ljk5Niw0YzEuNjA1LDAsMy4xMTMsMC42MjUsNC4yNDYsMS43NkMxNS4zNzUsNi44OTEsMTYsOC4zOTgsMTYsMTBzLTAuNjI1LDMuMTA5LTEuNzMsNC4yMTMgICAgYy0wLjE2OCwwLjE2Ni0yLjIzOCwyLjIyNS00LjI3Myw1LjQ0MWMtMi4wMi0zLjIxMS00LjA4Mi01LjI2Mi00LjIzOC01LjQxNEM0LjYyNSwxMy4xMDksNCwxMS42MDIsNCwxMHMwLjYyNS0zLjEwOSwxLjc1OC00LjI0MiAgICBTOC4zMTQsNCw5Ljk5Niw0IE05Ljk5NiwwQzcuNDQxLDAsNC44ODMsMC45NzcsMi45MywyLjkzYy0zLjkwNiwzLjkwNC0zLjkwNiwxMC4yMzYsMCwxNC4xNDFjMCwwLDcuMDY2LDYuOTMsNy4wNjYsMTQuOTMgICAgYzAtOCw3LjA3NC0xNC45Myw3LjA3NC0xNC45M2MzLjkwNi0zLjkwNCwzLjkwNi0xMC4yMzYsMC0xNC4xNDFDMTUuMTE3LDAuOTc3LDEyLjU1OSwwLDkuOTk2LDBMOS45OTYsMHoiIHN0eWxlPSJmaWxsOiM0RTRFNTA7Ii8+PHBhdGggZD0iTTEyLDEwYzAsMS4xMDUtMC44OTUsMi0yLjAwNCwyQzguODExLDEyLDgsMTEuMTA1LDgsMTBzMC44MTEtMiwxLjk5Ni0yQzExLjEwNSw4LDEyLDguODk1LDEyLDEweiIgc3R5bGU9ImZpbGw6IzRFNEU1MDsiLz48L2c+PC9nPjwvc3ZnPg==\'/>\n  </div> -->\n  <form [formGroup]="resetPasswordForm" (submit)="resetPassword()" novalidate>\n    <ion-header  no-border>\n      <ion-navbar color="nav-color">\n        <ion-title>{{lp.translate()[0].j9}}</ion-title>\n      </ion-navbar>\n    </ion-header>\n  \n      <ion-label color=\'primary\' stacked>{{lp.translate()[0].f10}}</ion-label>\n      <ion-input no-lines formControlName="email" type="email" placeholder="Your email address" \n        [class.invalid]="!resetPasswordForm.controls.email.valid && resetPasswordForm.controls.email.dirty">\n      </ion-input>\n  \n    <ion-item no-lines class="error-message" \n      *ngIf="!resetPasswordForm.controls.email.valid  && resetPasswordForm.controls.email.dirty">\n      <p>{{lp.translate()[0].h3}}</p>\n    </ion-item>\n\n    <button padding ion-button block type="submit" [disabled]="!resetPasswordForm.valid">\n        {{lp.translate()[0].j7}}\n    </button>\n\n  </form>\n\n  <button padding ion-button block (click)=\'goToLogin()\'>\n    Go Back\n</button>\n\n</ion-content>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/reset-password/reset-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ResetPasswordPage);

//# sourceMappingURL=reset-password.js.map

/***/ })

});
//# sourceMappingURL=2.js.map