webpackJsonp([29],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_language_language__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsProvider = (function () {
    function SettingsProvider(lang) {
        var _this = this;
        this.lang = lang;
        this.appName = 'Taxi Driver';
        this.appCareer = 'http://commuter.com';
        this.appFaq = 'http://commuter.com';
        this.appLink = 'https://commuter.com';
        this.appinsta = 'http://commuter.com';
        this.appFB = 'http://commuter.com';
        this.appTerms = 'http://commuter.com';
        this.appCountryCode = 'BB';
        this.appStripeKey = 'pk_test_0t85o0Llo0MbBfC9imSzznam';
        this.appcurrency = '$';
        this.appDashboard = 'https://ajetaxi.firebaseapp.com//';
        this.companyPhone = '+23456735578587'; //08066469157
        this.companyMail = 'ricomedia22@gmail.com';
        this.current_ID = false;
        this.mailGUrl = "sandbox28ca01fb2b374bb1b8aceb9d0a86895a.mailgun.org";
        this.mailGKey = window.btoa("api:key-60b9b5a8e7097e2fdcada552e4820db4");
        this.langauge = 'en';
        this.refer = false;
        this.wallet = false;
        this.company = false;
        this.pool = false;
        this.schedule = false;
        this.OnesignalAppID = 'f6345b2b-3777-4631-8415-a3a178826e8d';
        this.CloudID = '1003487763108';
        this.support_email = 'chndth@gmail.com';
        this.WebAdminProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("DashboardSettings");
        this.getWebAdminProfile().on('value', function (sShot) {
            if (sShot.val().name)
                _this.appName = sShot.val().name + ' Driver';
            if (sShot.val().website)
                _this.appLink = sShot.val().website;
            if (sShot.val().faq)
                _this.appFaq = sShot.val().faq;
            if (sShot.val().instagram)
                _this.appinsta = sShot.val().instagram;
            if (sShot.val().careers)
                _this.appCareer = sShot.val().careers;
            if (sShot.val().facebook)
                _this.appFB = sShot.val().facebook;
            if (sShot.val().countrycode)
                _this.appCountryCode = sShot.val().countrycode;
            if (sShot.val().currency)
                _this.appcurrency = sShot.val().currency;
            if (sShot.val().phone)
                _this.companyPhone = sShot.val().phone;
            if (sShot.val().langauge) {
                console.log(_this.langauge);
                _this.lang.targetLanguageCode = sShot.val().langauge;
                _this.langauge = sShot.val().langauge;
            }
            if (sShot.val().company)
                _this.company = sShot.val().company;
            if (sShot.val().refer)
                _this.refer = sShot.val().refer;
            if (sShot.val().wallet)
                _this.wallet = sShot.val().wallet;
            if (sShot.val().pool)
                _this.pool = sShot.val().pool;
            if (sShot.val().schedule)
                _this.schedule = sShot.val().schedule;
            if (sShot.val().appID)
                _this.OnesignalAppID = sShot.val().appID;
            if (sShot.val().CloudID)
                _this.CloudID = sShot.val().CloudID;
            if (sShot.val().email)
                _this.companyMail = sShot.val().email;
            if (sShot.val().mailgunUrl)
                _this.mailGUrl = sShot.val().mailgunUrl;
            if (sShot.val().mailgunKey)
                _this.mailGKey = sShot.val().mailgunKey;
            if (sShot.val().support_email)
                _this.support_email = sShot.val().support_email;
        });
    }
    SettingsProvider.prototype.getWebAdminProfile = function () {
        return this.WebAdminProfile;
    };
    return SettingsProvider;
}());
SettingsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_language_language__["a" /* LanguageProvider */]])
], SettingsProvider);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = (function () {
    //public provider = new firebase.auth.FacebookAuthProvider();
    function AuthProvider(platform) {
        var _this = this;
        this.platform = platform;
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth();
        this.userProfileRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/driverProfile');
        this.fireAuth.onAuthStateChanged(function (user) { return _this.currentUser = user; });
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signupUserWithPhone = function (verification, code, phone) {
        var _this = this;
        var signInCredential = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth.PhoneAuthProvider.credential(verification, code);
        var prevUser = this.currentUser;
        return this.fireAuth.signInWithCredential(signInCredential).then(function (newUser) {
            var currentUser = newUser;
            // Merge prevUser and currentUser data stored in Firebase.
            // Note: How you handle this is specific to your application
            // After data is migrated delete the duplicate user
            return newUser.delete().then(function () {
                // Link the OAuth Credential to original account
                return prevUser.linkWithCredential(signInCredential);
            }).then(function () {
                // Sign in with the newly linked credential
                return _this.fireAuth.signInWithCredential(signInCredential).then(function () {
                    _this.userProfileRef.child(newUser.uid).set({
                        phoneNumber: phone
                    });
                });
            });
        }).catch(function (error) {
            console.log("Sign In Error", error);
        });
    };
    AuthProvider.prototype.signupUser = function (email, password) {
        var _this = this;
        return this.fireAuth.createUserWithEmailAndPassword(email, password).then(function (newUser) {
            _this.userProfileRef.child(newUser.uid).set({
                email: email
            });
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return this.fireAuth.sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        this.userProfileRef.child(this.fireAuth.currentUser.uid).off();
        return this.fireAuth.signOut();
    };
    AuthProvider.prototype.signOut = function () {
        this.fireAuth.signOut();
    };
    AuthProvider.prototype.displayName = function () {
        if (this.currentUser !== null) {
            return this.currentUser.displayName;
        }
        else {
            return '';
        }
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTrackerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_geocoder_geocoder__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_event_event__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_onesignal_onesignal__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_language_language__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the LocationTrackerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LocationTrackerProvider = (function () {
    function LocationTrackerProvider(googleMaps, lp, alert, oneS, ev, zone, myProf, gcode, platform) {
        this.googleMaps = googleMaps;
        this.lp = lp;
        this.alert = alert;
        this.oneS = oneS;
        this.ev = ev;
        this.zone = zone;
        this.myProf = myProf;
        this.gcode = gcode;
        this.platform = platform;
        this.onLocationbarHide = true;
        this.onDestinatiobarHide = false;
        this.lat = 0;
        this.lng = 0;
        this.hasTransactionEnded = true;
        this.hasTransactionEnded2 = true;
        this.speed = 50; // km/h
        this.cars = [];
        this.car_location = [];
        this.car_notificationIds = [];
        this.delay = 100;
        this.hasRequested = false;
        this.isCarAvailable = false;
        this.onGpsEnabled = false;
        this.isNavigate = false;
        this.ClearDetection = false;
        this.onbar = false;
        this.onbar1 = false;
        this.onbar2 = false;
        this.onbar3 = false;
        this.toggleBtn = false;
        this.onPointerHide = false;
        this.mapLoadComplete = false;
        this.pan = 0;
        this.hasDone = false;
        this.hasStart = false;
        this.hasShown = false;
        this.canTrack_ = false;
        this.canTrack_2 = false;
        this.isDestination = false;
    }
    LocationTrackerProvider.prototype.loadMap = function () {
        var _this = this;
        console.log('map called');
        var mapOptions = {
            camera: {
                target: {
                    lat: 5.4966964,
                    lng: 7.5297323
                },
                zoom: 5,
                tilt: 0
            }
        };
        this.map1 = this.googleMaps.create(document.getElementById("map"), mapOptions);
        this.map1.setCompassEnabled(false);
        this.map1.setTrafficEnabled(false);
        this.map1.setIndoorEnabled(false);
        this.map1.setClickable(false);
        // Wait the MAP_READY before using any methods.
        this.map1.one(__WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            console.log('Map is ready!');
            alert('called');
            _this.map1.getMyLocation().then(function (location) {
                _this.lat = location.latLng.lat;
                _this.lng = location.latLng.lng;
                _this.AnimateToLoc(_this.lat, _this.lng);
                console.log('How Ploder Goder ....');
                alert('called again');
            }).catch(function (error) {
                alert(error);
                // this.loadMap();
            });
        });
    };
    LocationTrackerProvider.prototype.ResetMe = function () {
        this.map1.clear();
        this.AnimateToLoc(this.lat, this.lng);
    };
    LocationTrackerProvider.prototype.refreshForChangesRemove = function () {
        var _this = this;
        this.map1.getMyLocation().then(function (location) {
            _this.AnimateToLoc(location.latLng.lat, location.latLng.lng);
            // alert('refreshed')
        });
    };
    LocationTrackerProvider.prototype.showError = function (title) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            buttons: [{
                    text: 'Okay',
                    role: 'cancel',
                    handler: function () {
                        _this.refreshForChangesRemove();
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    ///Animate to user location 
    LocationTrackerProvider.prototype.AnimateToLoc = function (lat, lng) {
        var _this = this;
        console.log('ani to loc');
        this.map1.moveCamera({
            target: {
                lat: lat,
                lng: lng
            },
            zoom: 15,
            tilt: 0,
            bearing: 0,
        }).then(function (suc) {
            console.log('camera done');
            _this.hasShown = true;
            _this.map1.setClickable(true);
            // let centerBar = document.getElementById("onbar")
            // centerBar.style.display = 'block'
            _this.map1.addMarker({
                title: '',
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEcUlEQVRIS7WVfUxVZRzHf7/nuQx8QZJLEC81MXpZsjSuZOrEc869CDhoZTW16GXiRXvbrCxa/lFuQdqLmE5mMuacq1Z3gxISHPc8B1dopGEMxlTYNZp6s4WUFl2unOdp5+DFc4GL9EdnO9vdOc/9fH+/7+/lIPzPF96Ej7mS5OCIRQIxi3OeZJynAL8iIe0c4BBj7BQAiEiciAK5suy8JsR7lJBsrutXgJB2iug3QBwgRej6A4TSWQjQhkKUNWva0YlExgk4HI6o2bGxOwQhLwEAQyHeHxZCbWlpGbYCJEmyEUJyAaAMAZYj5zuHAV4fey5MwIDfEhf3Jdf1FcRmK1VV9bPJ0r8uiE6n8xkQYi8ANMTb7Ws8Ho8eCiZMwCVJu3Uh1tkIWdGsaa1Tqf/iwicfjNYDF6MCA3dyxCYuRJWmaa+NEzA854heQCxWVfXTqcCz1m5Wfk5fVT3zSt+lub7aVbZ/fl8pEGsAMUdV1W8NRigDlCSpjRJyVWXMNQVbwID3pRXV9KflzDF6aM7pgydmnDuanxj0fU0QicrY0lGBXElayAk5gULkezXtiPEiLy8veZjSWPXw4bNjszHh6UU1/ckj8NB9T8dHx5PPNeyghHi4EAs0TeswM3DK8lbO+SaBaDe6YNHDa5Mu3P1o7bXouBm3d9cVn6zb2xUSMeFzi2r6U8LhMX/7A2m+r7bcdb5+T2Bw8DJSWsEYKzcFFEWpF0LM1DRNdjxRGjeQuqTZN//ZbCOytDP13Um+hjU/evZ1Zj29Wem744YtocgNeEZXdWXXwbffMniSJB0jhPgZY4+ZApIk/WAjpHeY83W/ZK4+4svemGNNPaX3m+64/tObfkvM3hfyfBT+lz+Q0XkDbjqiKB4ASDHqECbgZeypee6KD3uyN7wcjI6PsorEn2/TL6csouYzPuJ7TAh+YCTy0DVOwClJhwQhsxhjknEo012+qydr/fND0xNtVhHr75ir/kBGR3Vl1xh4yCJK6UVVVR83M3Apyju6rr8SKrLxbF5J+Z6ehe7S4PRbx4mY8FMTwwsKCqKDQ0MDgPiuqqoVpoAsyw6CeFIArGSMNYZSvW99eVWvw+22isT8GRlu+u90PgJC1CEh93u93s7RQXMpynEOEGCMydZByyzZWnU2+wV3cFqCLeYPfyDjp+rKrv3hnlvsNwa2FRF1TdOWWScZcmV5OUdsAcTnVFU9YC3avRu27bqULpeknmn6eBI4uGS5VCB+IgCWMsaOhQmYtZCkSkHIRiJE/tj9vrRg9UOtjV98H2lHKYqiCF1vpJRWehl7c8Jtaux4SsjnAFCIQrzo1bT9U9hL6JJlt875bkJpbbzdXhxxXV9vMRsibieIr3IhvgOADxISEpo8Hk/QGr3ZLcFgga7rb1BCFiPA9tl2+xYrfJxFYcPidC4DIbYBwBKu64MCsYMScsE4o3OeSglZAADTjCAQsSzk+VgLb/bRN1p4PiIWAkAWAtxmAka+ze2IWG+0YqS6TJrBZH/6L+/+BedwGDdvfYzpAAAAAElFTkSuQmCC",
                position: {
                    lat: lat,
                    lng: lng
                },
            })
                .then(function (marker) {
                _this.mapLoadComplete = true;
                _this.marker = marker;
                console.log('marker added');
                _this.map1.addCircle({
                    'center': {
                        lat: lat,
                        lng: lng
                    },
                    'radius': 3000,
                    'strokeColor': '#A0BAE7',
                    'strokeWidth': 2,
                    'visible': true,
                    'fillColor': '#a6cfff2c'
                }).then(function (circle) {
                    setTimeout(function () {
                        circle.setRadius(0);
                        // this.startChecking()
                    }, 1500);
                });
            });
        });
    };
    LocationTrackerProvider.prototype.showAlertNormal = function (title, subtitle) {
        var alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: [{
                    text: this.lp.translate()[0].f6,
                    role: 'cancel',
                    handler: function () {
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    LocationTrackerProvider.prototype.startTracking = function () {
        var _this = this;
        console.log('actually tracking');
        this.tracking_timeout = setTimeout(function () {
            if (_this.canTrack_) {
                var mapOptions = {
                    camera: {}
                };
                // this.map1 = this.googleMaps.create(document.getElementById("op"), mapOptions);
                _this.map1.getMyLocation().then(function (location) {
                    if (_this.hasTransactionEnded) {
                        _this.lat = location.latLng.lat;
                        _this.lng = location.latLng.lng;
                        // alert('Tacking Driver.....................');
                        _this.oneS.UpdateCurrentLocation(location.latLng.lat, location.latLng.lng);
                        _this.startTracking();
                        // this.map1.getMyLocation().then(location =>{
                        if (_this.driver) {
                            var latLng = new __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* LatLng */](_this.lat, _this.lng);
                            var user_latLng = new __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* LatLng */](_this.userLat, _this.userLng);
                            _this.driver.setPosition(latLng);
                            // driver.setAnchor(0.5, 0.5);
                            var heading = google.maps.geometry.spherical.computeHeading(latLng, _this.driver.getPosition());
                            _this.driver.setRotation(heading);
                            //  alert(this.lat)
                            _this.client.setPosition(user_latLng);
                            // var mvcArray = this.poly.getPoints();
                            // mvcArray.setAt(latLng, user_latLng);
                            var arrayOfLatLng = [new __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* LatLng */](_this.lat, _this.lng), new __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* LatLng */](_this.userLat, _this.userLng)];
                            var bounds = new __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["d" /* LatLngBounds */](arrayOfLatLng);
                            var center = bounds.getCenter();
                            var mapElement = document.getElementById('map');
                            var mapDimensions = {
                                height: mapElement.offsetHeight,
                                width: mapElement.offsetWidth
                            };
                            var zoom = _this.getBoundsZoomLevel(bounds, mapDimensions);
                            //this.map1.setCameraTarget(new LatLng(this.lat, this.lng))
                            _this.map1.moveCamera({
                                target: center,
                                zoom: zoom,
                            }).then(function (suc) {
                                _this.isNavigate = true;
                            });
                        }
                    }
                });
            }
        }, 2000);
    };
    // startTracking2(){
    //   console.log('actually tracking')
    //  this.tracking_timeout2 = setTimeout(() => {
    // if (this.canTrack_2) {
    //   let mapOptions: GoogleMapOptions = {
    //     camera: {
    //     }
    //   };
    //   this.map1 = this.googleMaps.create(document.getElementById("op"), mapOptions);
    //   this.map1.getMyLocation().then(location =>{
    //     if (this.hasTransactionEnded2){
    //     this.lat = location.latLng.lat;
    //     this.lng = location.latLng.lng;
    //     console.log('Tacking Driver.....................');
    //     this.oneS.UpdateCurrentLocation(location.latLng.lat, location.latLng.lng, );
    //     this.startTracking2();
    //     }
    //   })
    // }
    // }, 6000);
    //}
    //Show distance between driver and User in the map
    LocationTrackerProvider.prototype.setMarkers = function (passengerlocation) {
        var _this = this;
        //this.marker.clear()
        //driver marker
        console.log('marker set');
        if (this.platform.is('cordova')) {
            this.map1.getMyLocation().then(function (location) {
                var arrayOfLatLng = [new __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* LatLng */](passengerlocation[0], passengerlocation[1]), new __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["c" /* LatLng */](_this.lat, _this.lng)];
                var bound = new __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["d" /* LatLngBounds */](arrayOfLatLng);
                //  polyline.setMap(map);
                var center = bound.getCenter();
                var mapElement = document.getElementById('map');
                var mapDimensions = {
                    height: mapElement.offsetHeight,
                    width: mapElement.offsetWidth
                };
                var zoom = _this.getBoundsZoomLevel(bound, mapDimensions);
                _this.map1.moveCamera({
                    target: center,
                    zoom: zoom,
                }).then(function (suc) {
                    _this.isNavigate = true;
                });
                _this.driver = _this.map1.addMarker({
                    title: '',
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKMSURBVFhH7ddNiE5RHMfxZyJvY+ElCyWlyWysNAt2lBopSkpSUsrClEiUKKXYoJnFkCiZmoUkskJ5L1Fq8ppCGgmFBVJe8jbz/d3u//a/x7mj7jNPV5lffeo5b8+cmXvOPWdqI/nfMg27MDspVZy9GMBTjFdFlZmHn9CEOlUxXJlc0lFoMprUorQuNAl/zSjswUfoCxvpHTajMPsQG9hIG/BHtOA+ITZA9GdfgbYC2kW+/xE8CerMNVxPP7/CaOQyF+Gg21jryhcQSzu+wvodQhOWujrzHGMwx9UtQS6r4Qd9hwYoPbD6g9ju7MZnWLtNxHIf1ianYbkL1R1OSi76Uj/oGCwT8RK+PaYXfiLKDvg+LzAOygGo7nFScjkOP2g+fG7At8d0IIzePWG/i9Cj3ZaWtR6bkeUMrPN7hL9h2cnorxrrG9ImyHIF1nBVFUHKTkZ5g1h/bzGy9MEaTqoiSD2TeYZYf28VsjyANWj3hKlnMo8Q6++tQZabsIazqghSz2S0g2L9veXIch7W8FAVQcpORhvBvxCLLESWE7AGbTWdrj5lJzMTYb/fuAO/TmchSzf8gPXwuQXfHrMRYVbC9/mFZVA0edXplpDLJvhBWnS6UigLYJemobxGK3z8USJ6hVi0a1V3OSm5aJ/7QbIVely2AHWqz4CPTvtLsDF+QlMQ3gS0NhUdCR+gOv2cXGLP9gt03Fs59hiUCbArgdiEulyd+QEt1nVpWY8tt14s9xAONnpMOnFPFfC7Ud6i6NFqAt/Sz+cQjQ61oS5Yw00XqxYUZjp2QhfrMvzj0udYH9E6mYqGZSz0wtRE+qETu7JsgSail5peB5VGV1ctzv1J6R9I5f/WjqTBqdUGAY1g4DFzQ5RkAAAAAElFTkSuQmCC',
                    animation: 'DROP',
                    position: {
                        lat: location.latLng.lat,
                        lng: location.latLng.lng
                    }
                }).then(function (marker) {
                    _this.driver = true;
                    _this.driver = marker;
                });
            });
            // var pos1= {lat: this.lat, lng: this.lng};
            // var pos2 = {lat: passengerlocation[0], lng: passengerlocation[1]};
            // let positions = [
            //   pos1,
            //   pos2
            // ]
            // // Add a polyline
            // this.poly = this.map1.addPolyline({
            //   'points': positions,
            //   'color' : '#AA00FF',
            //   'width': 5,
            //   'geodesic': true
            // });
            var myIcon = void 0;
            if (!this.isDestination) {
                myIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE/0lEQVR4Xu2aZ+i3UxjHP4+9iYx4ISSREdlblJHx4OnJ5gXZJUKRUBQhygjJlpGV7K3M7C3Ze2Uke/bRuet0+41zj9+5X/zuU/83v/91zvle33Nd17mu69wzmPIxY8r1pyegt4ApZ6B3gSk3gD4I9i7Qu8CUM9ClC6wDbAMsDnwG3AW8m/s8uiBgSeBKYIeSsn8DlwJHAb/lIiI3AYsCTwGrjlDwHmBHQEImPnITcCFwWIJWhwCXJMg1FslJwILAN8B8CahfA9ZIkGsskpOAjYEnKiBeBPixgnwt0ZwEGPEfqIByaeCrCvK1RHMSsALwXiLK78P1+E+ifG2xnAQI8llg3QS0FwOHJsg1FslNwCbAo8BcI5AbKA2AXzTWLmGB3AQcCJwFLDYC2/uA1+D9Cfgbi+QiYE7gCmDfRMT6/nHA2YnytcVyEXA6cEINlLsBt9WYlzwlBwFG/7eD33uyKXsWcp8CKwK/J2tUUTAFTMUl/yd+CnAy8AdwE7B3woJXA/sFuV2B2xPm1BLJQYDJj0nQfcBzwIkJSPcEzgGWDXHg2IQ5tURyEPACsDZwEfBdBQIsmjYDromsoZaSoyblIOAlYC3AStAML9UCvAq3AK4D9mld87BgT8CkmI3W7S2gd4EpjwFegeb+7wCzKgTBzwEbqB+GKnIi3pojCMbAT6tAwA0T0bi06KQJmCdcZVsB64VeQFwJfgR8DawGzB9h8/TtHTwZukjmEhMZkyLAR4/Dgd0BW+HDxpHABUBxUwyT0w2uBWyUfNImE20TYOFyLrBzCaQKPA5sCKwU/W8YAY8AdpElMm6eWBRdBpwEfNsGEW0SYLZmL3+BAEzzvjwUQG+G3+4Ftk0gwFrAGGBnePtQQPmSZF/BYbfIourhpiS0RcDBwTwLcKa7VnR/lgBWJSCeruWcGlWTVpd7ATc3IaENAjTTZ4KpqqCgLHoGjSYEFOtpCdcH6/gV2AB4pS4JbRBwB7BTePQw2nsyw0YbBLi2VaJxQpfQDbbuggDL26WC8l53Xlv6fTG8843u8fDhc7uEGLAHcGNp7szS3F2AZYKMbTMfU22le60mjyYW8AGw/IidDF6eeDy8yuKO0LBbwBMtB7gzgOPHaGb7TVzJowkBVwE+X2mORn4jfWwBBsLnS0g2D6Y7R/h9EAFvhOKpHECPAA6I1vOJ3X09+eLJbX/gy2TtExuU49bzo4aDgJcBHz5+GjNBU7ZL7Gk5z4aH7TLnqoikjEt2tgQeDDHgzuCG43AO/H8TCygWXC5EYT91eRqYDXxcC03apDjf+Dmk10WekbZCJNUGAS6nG9wNLBSetH3QOH/EdVgZKLApYIe5iPh+RmN1qQXUHm0RIAD7fkbuVQKaX8Kjxi3AQ8APA1AeHfzYgGfhEw+xrR4+lzEzjD+YMND5mxbXaLRJgEDmBY4BbGPHVd9fwOvAi8BbocY3WN0aiiVTaE9SdzLjU/H1gSVK2vnBxHnAmQmxJomYtgkoNtUV9FX/NgKKqJ8EqiTkK5E5hleo6fUgS6qz7n9zJkVADMiujlHblHVNYOVw0nMPQG0WaS/A7tGrIcU245vYU3kOAgadjvsuHKpFewZ+OmeO7+lO/KuQcqCpbT4tTCwyw8eClbSwZLUlurKAAqW5uwmQ97jJUfbRNQHZFS5v2BPQ+RF0DKC3gI4PoPPtewvo/Ag6BtBbQMcH0Pn2/wLJ+fdBzNOruQAAAABJRU5ErkJggg==';
            }
            else {
                myIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA9UlEQVR4Xu3ZQQrDMAwF0eb+h253bRKIMWQcKLyujaJ+rBmBt9f93/tUYrtf8rkKRbMCcAOOCRS36rEZKJo9j8BjzU9+aPgfBTCZ4uiYGxCEuLKEERiliwHB3cOAIMSVJTAAAwYJgGAwfCAYhLiyBAiCIAheJ8ACAX1YIAhxZQkWYAEWYIHLBGgwwK+nMU9jnsYOCRRcCSZzrkTRLAZgAAZgwD6BgitzBAtOFc2CIAiCIAiC4C6BAqwB3+dKFM2yAAuwAAuwAAv8EijMMuew4FTRLA3SIA3SIA3SIA1+EyjUGhh+rkTRrD3AHmAPsAfYA/51D/gA8LFAQcP3ZkMAAAAASUVORK5CYII=';
            }
            //user marker
            this.client = this.map1.addMarker({
                title: '',
                icon: myIcon,
                animation: 'DROP',
                position: {
                    lat: passengerlocation[0],
                    lng: passengerlocation[1]
                }
            }).then(function (marker) {
                _this.client = true;
                _this.client = marker;
            });
        }
    };
    LocationTrackerProvider.prototype.getBoundsZoomLevel = function (bounds, mapDim) {
        var WORLD_DIM = { height: 256 / 1.7, width: 256 / 1.7 };
        var ZOOM_MAX = 14;
        var ne = bounds.northeast;
        var sw = bounds.southwest;
        var latFraction = (this.latRad(ne.lat) - this.latRad(sw.lat)) / Math.PI;
        var lngDiff = ne.lng - sw.lng;
        var lngFraction = ((lngDiff < 0) ? (lngDiff + 360 * 1.16) : lngDiff) / 360 * 1.16;
        var latZoom = this.zoom(mapDim.height, WORLD_DIM.height, latFraction);
        var lngZoom = this.zoom(mapDim.width, WORLD_DIM.width, lngFraction);
        return Math.min(latZoom, lngZoom, ZOOM_MAX);
    };
    LocationTrackerProvider.prototype.latRad = function (lat) {
        var sin = Math.sin(lat * Math.PI / 180);
        var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
        return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
    };
    LocationTrackerProvider.prototype.zoom = function (mapPx, worldPx, fraction) {
        return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
    };
    return LocationTrackerProvider;
}());
LocationTrackerProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_7__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_onesignal_onesignal__["a" /* OnesignalProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */]])
], LocationTrackerProvider);

//# sourceMappingURL=location-tracker.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		443,
		28
	],
	"../pages/accept/accept.module": [
		444,
		27
	],
	"../pages/accountkit/accountkit.module": [
		445,
		26
	],
	"../pages/addphoto2/addphoto2.module": [
		446,
		25
	],
	"../pages/addphoto3/addphoto3.module": [
		447,
		24
	],
	"../pages/addphotoinfo/addphotoinfo.module": [
		448,
		23
	],
	"../pages/auth/auth.module": [
		449,
		22
	],
	"../pages/card/card.module": [
		450,
		21
	],
	"../pages/chat/chat.module": [
		451,
		20
	],
	"../pages/earnings/earnings.module": [
		452,
		19
	],
	"../pages/help/help.module": [
		453,
		18
	],
	"../pages/history/history.module": [
		454,
		17
	],
	"../pages/historydetail/historydetail.module": [
		455,
		16
	],
	"../pages/home/home.module": [
		457,
		0
	],
	"../pages/login-entrance/login-entrance.module": [
		459,
		15
	],
	"../pages/login/login.module": [
		458,
		3
	],
	"../pages/more-info/more-info.module": [
		460,
		14
	],
	"../pages/news/news.module": [
		461,
		13
	],
	"../pages/profile/profile.module": [
		456,
		12
	],
	"../pages/promo/promo.module": [
		462,
		11
	],
	"../pages/register/register.module": [
		463,
		10
	],
	"../pages/reset-password/reset-password.module": [
		464,
		2
	],
	"../pages/schedule/schedule.module": [
		465,
		9
	],
	"../pages/settings/settings.module": [
		466,
		8
	],
	"../pages/signup/signup.module": [
		467,
		1
	],
	"../pages/splash/splash.module": [
		468,
		7
	],
	"../pages/support/support.module": [
		469,
		6
	],
	"../pages/waiting/waiting.module": [
		470,
		5
	],
	"../pages/wallet/wallet.module": [
		471,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_pop_up_pop_up__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_geocoder_geocoder__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the DirectionserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DirectionserviceProvider = (function () {
    function DirectionserviceProvider(eProvider, gCode, platform, popOp) {
        this.eProvider = eProvider;
        this.gCode = gCode;
        this.platform = platform;
        this.popOp = popOp;
        this.canDismiss = false;
        this.pricePerKm = 55;
        this.fare = 200;
        this.hasGottenTripDistance = false;
        this.service = new google.maps.DistanceMatrixService();
    }
    DirectionserviceProvider.prototype.calcRoute = function (name, start, stop, destinationName, isDriver2) {
        var _this = this;
        this.isDriver2 = isDriver2;
        if (!this.platform.is('cordova')) {
            start = new google.maps.LatLng(5.488334, 7.5190356);
            this.gCode.locationName = 'Igieduma, Nigeria';
        }
        this.service.getDistanceMatrix({
            origins: [start, this.gCode.locationName],
            destinations: [destinationName, stop],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
        }, function (response, status) {
            _this.callback(response, status);
        });
        this.destinationName = destinationName;
        this.name = name;
        var time = new Date();
        var hh = time.getHours();
        var mm = time.getMinutes();
        var ss = time.getSeconds();
    };
    DirectionserviceProvider.prototype.calcDestRoute = function (name, start, stop, destinationName, id) {
        var _this = this;
        // this.isDriver2 = isDriver2
        if (!this.platform.is('cordova')) {
            start = new google.maps.LatLng(5.488334, 7.5190356);
            this.gCode.locationName = 'Igieduma, Nigeria';
        }
        this.service.getDistanceMatrix({
            origins: [start, this.gCode.locationName],
            destinations: [destinationName, stop],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
        }, function (response, status) {
            _this.callback2(response, status, id);
        });
        this.destinationName = destinationName;
        this.name = name;
        var time = new Date();
        var hh = time.getHours();
        var mm = time.getMinutes();
        var ss = time.getSeconds();
    };
    DirectionserviceProvider.prototype.callback = function (response, status) {
        // See Parsing the Results for
        // the basics of a callback function.
        console.log(response, status);
        if (status == 'OK') {
            if (response.rows[0].elements[1].status == 'ZERO_RESULTS' || response.rows[0].elements[1].status == 'NOT_FOUND') {
                this.popOp.alertMe('Destination Not Yet Supported. Please Choose Another Destination');
            }
            else {
                var fareTime = Math.floor(response.rows[0].elements[1].duration.value / 60) * 5.5;
                this.price = Math.floor(response.rows[0].elements[1].distance.value / 1000) * this.pricePerKm + this.fare + fareTime;
                //if (!this.isDriver2)
                this.time = response.rows[0].elements[1].duration.text;
                // else
                //  this.time2 = response.rows[0].elements[1].duration.text;
                //  document.getElementById("header").innerText = 'Get to Client in ' + this.time;
                this.popOp.canDismiss = true;
                // this.eProvider.createHistory(this.name, this.price, 'past', this.gCode.locationName, this.destinationName );
                console.log(response.rows[0].elements[1].distance.value / 1000, response.rows[0].elements[1].duration.value, response.rows[0].elements[1].duration.text);
            }
        }
        else {
            this.popOp.alertMe('One or More Of The Adress Input Is Not On Google Maps. Please Change Location And Try Again.');
        }
    };
    // calcRoute2(name, start, stop, destinationName) {
    //   if (!this.platform.is('cordova')){
    //     start = new google.maps.LatLng(5.4966964, 7.5297323)
    //     this.gCode.locationName = 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria'
    //   }
    //     this.service.getDistanceMatrix(
    //       {
    //         origins: [start, this.gCode.locationName],
    //         destinations: [destinationName, stop],
    //         travelMode: 'DRIVING',
    //         unitSystem: google.maps.UnitSystem.METRIC,
    //         avoidHighways: false,
    //         avoidTolls: false,
    //       }, (response, status) => {
    //         this.callback2(response, status)
    //       })
    //       this.destinationName = destinationName
    //       this.name = name
    //       let time = new Date();
    //       var hh = time.getHours();
    //       var mm = time.getMinutes();
    //       var ss = time.getSeconds() ;
    //      }
    DirectionserviceProvider.prototype.callback2 = function (response, status, id) {
        // See Parsing the Results for
        // the basics of a callback function.
        console.log(response, status);
        if (status == 'OK') {
            if (response.rows[0].elements[1].status == 'ZERO_RESULTS' || response.rows[0].elements[1].status == 'NOT_FOUND') {
                this.popOp.alertMe('Destination Not Yet Supported. Please Choose Another Destination');
            }
            else {
                var fareTime = Math.floor(response.rows[0].elements[1].duration.value / 60) * 5.5;
                this.price = Math.floor(response.rows[0].elements[1].distance.value / 1000) * this.pricePerKm + this.fare + fareTime;
                //if (!this.isDriver2)
                //  this.time = response.rows[0].elements[1].duration.text;
                // else
                this.time2 = response.rows[0].elements[1].duration.text;
                //  document.getElementById("header").innerText = 'Get to Client in ' + this.time;
                this.popOp.canDismiss = true;
                this.eProvider.UpdateTime(this.time2, id);
                console.log(response.rows[0].elements[1].distance.value / 1000, response.rows[0].elements[1].duration.value, response.rows[0].elements[1].duration.text);
            }
        }
        else {
            this.popOp.alertMe('One or More Of The Adress Input Is Not On Google Maps. Please Change Location And Try Again.');
        }
    };
    return DirectionserviceProvider;
}());
DirectionserviceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__providers_pop_up_pop_up__["a" /* PopUpProvider */]])
], DirectionserviceProvider);

//# sourceMappingURL=directionservice.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaystackProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pop_up_pop_up__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_event__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_language_language__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the PaystackProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var PaystackProvider = (function () {
    function PaystackProvider(lp, eProvider, platform, pop) {
        this.lp = lp;
        this.eProvider = eProvider;
        this.platform = platform;
        this.pop = pop;
        this.isDone = false;
        this.cardCharge = false;
    }
    PaystackProvider.prototype.UpdateCard = function (card, month, year, cvc, amount, email, driverPay) {
        this.eProvider.UpdateCard(card, month, year, cvc, amount, email, driverPay).then(function (success) {
        }).catch(function (error) { });
    };
    PaystackProvider.prototype.ChargeCard = function (card, month, cvc, year, amount, email, id) {
        var _this = this;
        this.pop.presentLoader('processing...');
        this.platform.ready().then(function () {
            if (_this.platform.is('cordova')) {
                window.window.PaystackPlugin.chargeCard(function (resp) {
                    _this.eProvider.UpdateFund(amount).then(function (suc) {
                        _this.pop.hideLoader();
                    });
                }, function (resp) {
                    _this.pop.hideLoader();
                    _this.pop.showAlertNormal('Error', resp, '');
                }, {
                    cardNumber: card,
                    expiryMonth: month,
                    expiryYear: year,
                    cvc: cvc,
                    email: email,
                    amountInKobo: amount,
                });
            }
            else {
            }
        });
    };
    return PaystackProvider;
}());
PaystackProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_pop_up_pop_up__["a" /* PopUpProvider */]])
], PaystackProvider);

//# sourceMappingURL=paystack.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(321);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_background_mode__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic2_rating__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_rate_rate__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_event_event__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_location_tracker_location_tracker__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_maps__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_geocoder_geocoder__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_directionservice_directionservice__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_pop_up_pop_up__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_settings_settings__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_onesignal_onesignal__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_social_sharing__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_vibration__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_language_language__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_paystack_paystack__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_native_page_transitions__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//native modules











// import {Http, Request, RequestMethod} from "@angular/http";


//other


//providers

















var firebaseConfig = {
    apiKey: "AIzaSyBR_wZIv_5O0D6cAAJYJurq9_l4JSHVQHQ",
    authDomain: "restuarant-d952c.firebaseapp.com",
    databaseURL: "https://restuarant-d952c.firebaseio.com",
    projectId: "restuarant-d952c",
    storageBucket: "restuarant-d952c.appspot.com",
    messagingSenderId: "62509962767"
};
__WEBPACK_IMPORTED_MODULE_6_firebase_app__["initializeApp"](firebaseConfig);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_14__pages_rate_rate__["a" /* RatePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/accept/accept.module#AcceptPageModule', name: 'AcceptPage', segment: 'accept', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/accountkit/accountkit.module#AccountkitPageModule', name: 'AccountkitPage', segment: 'accountkit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addphoto2/addphoto2.module#Addphoto2PageModule', name: 'Addphoto2Page', segment: 'addphoto2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addphoto3/addphoto3.module#Addphoto3PageModule', name: 'Addphoto3Page', segment: 'addphoto3', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addphotoinfo/addphotoinfo.module#AddphotoinfoPageModule', name: 'AddphotoinfoPage', segment: 'addphotoinfo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'AuthPage', segment: 'auth', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/card/card.module#CardPageModule', name: 'CardPage', segment: 'card', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/earnings/earnings.module#EarningsPageModule', name: 'EarningsPage', segment: 'earnings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/historydetail/historydetail.module#HistorydetailPageModule', name: 'HistorydetailPage', segment: 'historydetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login-entrance/login-entrance.module#LoginEntrancePageModule', name: 'LoginEntrancePage', segment: 'login-entrance', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/more-info/more-info.module#MoreInfoPageModule', name: 'MoreInfoPage', segment: 'more-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/promo/promo.module#PromoPageModule', name: 'PromoPage', segment: 'promo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/schedule/schedule.module#SchedulePageModule', name: 'SchedulePage', segment: 'schedule', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/waiting/waiting.module#WaitingPageModule', name: 'WaitingPage', segment: 'waiting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_10_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_14__pages_rate_rate__["a" /* RatePage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_16__providers_event_event__["a" /* EventProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_18__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_geocoder_geocoder__["a" /* GeocoderProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_directionservice_directionservice__["a" /* DirectionserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_22__providers_pop_up_pop_up__["a" /* PopUpProvider */],
            __WEBPACK_IMPORTED_MODULE_24__providers_onesignal_onesignal__["a" /* OnesignalProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_23__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_14__pages_rate_rate__["a" /* RatePage */],
            __WEBPACK_IMPORTED_MODULE_29__providers_language_language__["a" /* LanguageProvider */],
            __WEBPACK_IMPORTED_MODULE_30__providers_paystack_paystack__["a" /* PaystackProvider */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_social_sharing__["a" /* SocialSharing */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LanguageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LanguageProvider = (function () {
    function LanguageProvider(http, storage, Alert) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.Alert = Alert;
        this.targetLanguageCode = 'en';
        this.show = false;
        console.log('Hello LanguageProvider Provider');
        this.http = http;
        this.storage.get("Language").then(function (value) {
            if (value != null) {
                _this.targetLanguageCode = value;
                // this.storage.remove(`Language`);
                _this.show = true;
            }
            console.log(value);
        });
    }
    LanguageProvider.prototype.translate = function () {
        if (this.targetLanguageCode == 'en') {
            return [
                {
                    a1: 'Website',
                    a2: 'Careers',
                    a3: 'FAQ',
                    a4: 'New Package Request',
                    a5: 'Tap Anywhere To Start Trip',
                    a6: 'Less Than 60 seconds',
                    a7: 'Before Cancel',
                    a8: 'Swipe To Reject Request',
                    a9: 'Add A Profile Picture',
                    a10: 'Licence Picture',
                    b1: 'NID Picture',
                    b2: 'Next',
                    b3: 'New Driver',
                    b4: 'Hi, congrats a new driver just joined the team, check them out => ',
                    b5: 'Make Sure All Images have been added',
                    b6: 'Choose From',
                    b7: 'Camera',
                    b8: 'File',
                    b9: 'Cancel',
                    b10: 'Earnings',
                    c1: 'All Earnings: ',
                    c2: 'No earnings data',
                    c3: 'Clear Now',
                    c4: 'Getting Data...',
                    c5: 'Are You Sure?',
                    c6: 'No',
                    c7: 'Yes',
                    c8: 'Welcome, ',
                    c9: 'Currently Available',
                    c10: 'Getting Location...',
                    d1: 'Support',
                    d2: 'Documents',
                    d3: 'Scheduled Pickups',
                    d4: 'Client 1',
                    d5: 'Tap to Switch Clients',
                    d6: 'Start',
                    d7: 'Delivered',
                    d8: 'Call',
                    d9: 'Navigate',
                    d10: 'Navigate',
                    e1: 'Time To Location',
                    e2: 'Driver Active',
                    e3: 'Work Ongoing',
                    e4: 'Can`t Exit At This Time',
                    e5: 'Now Online',
                    e6: 'ONLINE',
                    e7: 'OFFLINE',
                    e8: 'New Package To Deliver ',
                    e9: 'Client Checking Out..',
                    e10: 'Please Wait..',
                    f1: 'Could Not Process The Destination. Use External Map.',
                    f2: 'A Client Got Disconnected',
                    f3: 'Job Lost',
                    f4: 'GPS unavailable',
                    f5: 'Check Sim Card and internet availability',
                    f6: 'Try again',
                    f7: 'You Scheduled A ride. Your driver is here to pick you up.',
                    f8: 'You Will No Longer Recieve Notification Of A New Job',
                    f9: 'Make Money While Driving.',
                    f10: 'Email',
                    g1: 'Password',
                    g2: 'Login',
                    g3: 'Create A New Account',
                    g4: 'I Forgot My Password',
                    g5: 'Signup',
                    g6: 'Terms and Services',
                    g7: 'Choose A Car',
                    g8: 'TAXI',
                    g9: 'EXECUTIVE SUV',
                    g10: '',
                    h1: 'Phone',
                    h2: 'Full Name',
                    h3: 'Error',
                    h4: 'City',
                    h5: 'Licence',
                    h6: 'Car Model',
                    h7: 'Car Year',
                    h8: 'Plate Number',
                    h9: 'Number of Seats',
                    h10: 'Account Number',
                    i1: 'Bank',
                    i2: 'Choose A Car First',
                    i3: 'User Information',
                    i4: 'Bank Information',
                    i5: 'Change',
                    i6: 'Car Information',
                    i7: 'Location Information',
                    i8: 'Cancel',
                    i9: 'Accept',
                    i10: 'Choose From',
                    j1: 'Camera',
                    j2: 'File',
                    j3: 'Picture Changed Successfully',
                    j4: 'Rate This Client',
                    j5: 'Client Has Been Charged',
                    j6: 'Write A Review',
                    j7: 'Submit',
                    j8: 'Choose At Least One Star',
                    j9: 'Reset',
                    j10: 'We Just Sent A Reset Link To Your Email',
                    k1: 'Scheduled Rides',
                    k2: 'Today',
                    k3: 'Visible in ',
                    k4: ' Day(s)',
                    k5: 'Tommorow',
                    k6: 'Start Ride',
                    k7: 'Ride is not Yet Available',
                    k8: 'Sorry Can`t Exit At This Time',
                    k9: 'Write A Complaint',
                    k10: 'Customer Care',
                    l1: 'FAQ',
                    l2: 'Your complain has been submitted, we will get back to you. In a few minutes.',
                    l3: 'Under Review',
                    l4: 'Thank You For Signing Up As A Partner. We will Review Your Credentials And Notify You On Approval.',
                    l5: 'Watch Some Videos On How To Use This App.',
                    l6: 'Settings',
                    l7: 'Change Language',
                    l8: 'Your Rating ',
                    l9: 'Out of',
                    l10: 'Help',
                    m1: 'Client 2'
                },
            ];
        }
        if (this.targetLanguageCode == 'ar') {
            return [
                {
                    a1: 'الموقع',
                    a2: "وظائف",
                    a3: 'أسئلة وأجوبة',
                    a4: 'طلب جديد',
                    a5: 'الحنفية في أي مكان لبدء الرحلة',
                    a6: 'أقل من 60 ثانية',
                    a7: 'قبل إلغاء',
                    a8: 'انتقاد لرفض طلب',
                    a9: 'إضافة صورة الملف الشخصي',
                    a10: 'صورة الترخيص',
                    b1: 'صورة نيد',
                    b2: 'التالي',
                    b3: 'سائق جديد',
                    b4: "مرحبا, تهانينا سائق جديد انضم للتو للفريق, والتحقق منها => ",
                    b5: "تأكد تم إضافة جميع الصور",
                    b6: 'اختر من',
                    b7: 'كاميرا',
                    b8: 'ملف',
                    b9: 'إلغاء',
                    b10: "الأرباح",
                    c1: 'الأرباح:',
                    c2: "لا توجد بيانات الأرباح",
                    c3: 'مسح الآن',
                    c4: 'جيتينغ داتا ...',
                    c5: "هل أنت متأكد؟",
                    c6: 'لا',
                    c7: 'نعم',
                    c8: 'مرحبا,',
                    c9: "متوفر حاليا",
                    c10: 'جيتينغ لوكاتيون ...',
                    d1: "الدعم",
                    d2: 'الوثائق',
                    d3: "بيك آب المقرر",
                    d4: 'باسنغر 1',
                    d5: 'الحنفية للتبديل الركاب',
                    d6: 'انتقاد لتأكيد بيك اب',
                    d7: 'انتقاد لتأكيد قطرة قبالة',
                    d8: 'دعوة الركاب',
                    d9: "انتقل إلى موقع الركاب",
                    d10: "انتقل إلى وجهة الركاب",
                    e1: "الوقت للوصول",
                    e2: 'سائق نشط',
                    e3: "العمل جار",
                    e4: 'كانت إكسيت أت ذيس تايم',
                    e5: "الآن أون لاين",
                    e6: 'أونلين',
                    e7: 'غو أونلين',
                    e8: "جديد الركاب",
                    e9: 'فحص الركاب ..',
                    e10: 'بليس ويت ..',
                    f1: "لا يمكن معالجة الوجهة. استخدام الخريطة الخارجية. ",
                    f2: 'قطع الركاب غير متصل',
                    f3: "فقدت الوظيفة",
                    f4: 'غس غير متوفر',
                    f5: "التحقق من بطاقة سيم وتوافر الإنترنت",
                    f6: "حاول مرة أخرى",
                    f7: "أنت مجدولة ركوب. السائق الخاص بك هنا ليقلك. ",
                    f8: "لن تتلقى إخطارا بمهمة جديدة",
                    f9: "كسب المال أثناء القيادة.",
                    f10: "البريد الإلكتروني",
                    g1: 'كلمة السر',
                    g2: 'لوجين',
                    g3: "إنشاء حساب جديد",
                    g4: 'لقد نسيت كلمة المرور',
                    g5: 'الاشتراك',
                    g6: "البنود والخدمات",
                    g7: 'اختيار سيارة',
                    g8: "الاقتصاد",
                    g9: 'بول (اثنان من الركاب)',
                    g10: '',
                    h1: 'الهاتف',
                    h2: 'الاسم الكامل',
                    h3: 'خطأ',
                    h4: 'سيتي',
                    h5: 'الترخيص',
                    h6: 'نموذج السيارة',
                    h7: 'سنة السيارات',
                    h8: "رقم اللوحة",
                    h9: "عدد المقاعد",
                    h10: "رقم الحساب",
                    i1: "بنك",
                    i2: 'اختر سيارة أولا',
                    i3: "معلومات المستخدم",
                    i4: "معلومات البنك",
                    i5: 'التغيير',
                    i6: "معلومات السيارة",
                    i7: "معلومات الموقع",
                    i8: 'إلغاء',
                    i9: 'قبول',
                    i10: 'اختر من',
                    j1: 'كاميرا',
                    j2: 'فيل',
                    j3: 'تم تغيير الصورة بنجاح',
                    j4: 'ريت ذيس باسنغر',
                    j5: "تم شحن الركاب",
                    j6: 'كتابة مراجعة',
                    j7: 'سوبميت',
                    j8: 'اختر على الأقل نجمة واحدة',
                    j9: 'ريسيت',
                    j10: "لقد أرسلنا للتو رابط إعادة تعيين إلى البريد الإلكتروني الخاص بك",
                    k1: "ركوب الخيل المجدولة",
                    k2: 'اليوم',
                    k3: 'مرئية في',
                    k4: 'يوم (أيام)',
                    k5: "تومورو",
                    k6: 'ابدأ ركوب',
                    k7: "ركوب ليست متاحة بعد",
                    k8: 'عذرا لا يمكن الخروج في هذا الوقت',
                    k9: "كتابة شكوى",
                    k10: "خدمة العملاء",
                    l1: 'أسئلة وأجوبة',
                    l2: 'تم تقديم شكواك, وسوف نعود اليكم. في بضع دقائق.',
                    l3: 'تحت ريويو',
                    l4: 'شكرا للاشتراك كشريك تاكسيهوب. سنقوم بمراجعة أوراق الاعتماد الخاصة بك ونخطرك بالموافقة. ',
                    l5: "مشاهدة بعض أشرطة الفيديو على كيفية استخدام هذا التطبيق.",
                    l6: 'إعدادات',
                    l7: 'تغيير اللغة',
                    l8: 'تقييمك ',
                    l9: 'من',
                    l10: 'مساعدة',
                    m1: 'باسنغر 2'
                }
            ];
        }
        if (this.targetLanguageCode == 'fr') {
            return [
                {
                    a1: "Site Web",
                    a2: '«Carrières»',
                    a3: 'FAQ',
                    a4: 'Nouvelle demande',
                    a5: "Appuyez n'importe où pour démarrer le voyage",
                    a6: '«Moins de 60 secondes»',
                    a7: 'Avant Annuler',
                    a8: 'Balayer pour rejeter la demande',
                    a9: "Ajouter une image de profil",
                    a10: 'Image de licence',
                    b1: 'Image NID',
                    b2: 'Suivant',
                    b3: 'Nouveau pilote',
                    b4: 'Salut, félicitations un nouveau pilote vient de rejoindre l`équipe, vérifiez-les =>',
                    b5: 'Assurez-vous que toutes les images ont été ajoutées',
                    b6: 'Choisir De',
                    b7: "Caméra",
                    b8: 'Fichier',
                    b9: 'Annuler',
                    b10: '«Gains»',
                    c1: '«Gains:»',
                    c2: "Pas de données sur les gains",
                    c3: 'Effacer maintenant',
                    c4: 'Obtenir des données ...',
                    c5: 'Êtes-vous sûr?',
                    c6: 'Non',
                    c7: 'Oui',
                    c8: '«Bienvenue»',
                    c9: 'Actuellement disponible',
                    c10: 'Obtenir un emplacement ...',
                    d1: 'Support',
                    d2: 'Documents',
                    d3: "Ramassages programmés",
                    d4: 'PASSAGER 1',
                    d5: '«Appuyez pour changer de passager»',
                    d6: 'Glisser pour confirmer le prélèvement',
                    d7: 'Glisser pour confirmer la chute',
                    d8: 'Appeler le passager',
                    d9: 'Naviguer vers l`emplacement des passagers',
                    d10: 'Naviguer vers la destination des passagers',
                    e1: 'Time To Reach',
                    e2: "Pilote actif",
                    e3: '«Travail en cours»',
                    e4: 'Ne peut pas sortir à ce moment',
                    e5: "Maintenant en ligne",
                    e6: 'EN LIGNE',
                    e7: 'GO ONLINE',
                    e8: "Nouveau passager",
                    e9: '«Passage à la caisse»',
                    e10: 'Veuillez patienter ..',
                    f1: 'Impossible de traiter la destination. Utiliser une carte externe. ',
                    f2: "Un passager s'est déconnecté",
                    f3: "Emploi perdu",
                    f4: 'GPS indisponible',
                    f5: 'Vérifier la carte SIM et la disponibilité d`Internet',
                    f6: 'Réessayez',
                    f7: 'Vous avez programmé un tour. Votre chauffeur est là pour venir vous chercher',
                    f8: '«Vous ne recevrez plus de notification d`un nouvel emploi»',
                    f9: 'Gagnez de l`argent en conduisant.',
                    f10: 'Email',
                    g1: 'Mot de passe',
                    g2: 'Connexion',
                    g3: 'Créer un nouveau compte',
                    g4: 'J`ai oublié mon mot de passe',
                    g5: 'Inscription',
                    g6: '«Termes et services»',
                    g7: '«Choisir une voiture»',
                    g8: '«ÉCONOMIE»',
                    g9: '«POOL (DEUX PASSAGERS)»',
                    g10: '',
                    h1: 'Téléphone',
                    h2: "Nom complet",
                    h3: 'Erreur',
                    h4: 'Ville',
                    h5: '«Licence»',
                    h6: 'Modèle de voiture',
                    h7: 'Année de la voiture',
                    h8: "Numéro de plaque",
                    h9: '«Nombre de sièges»',
                    h10: "Numéro de compte",
                    i1: '«Banque»',
                    i2: '«Choisissez une voiture d`abord»',
                    i3: 'Informations sur l`utilisateur',
                    i4: '«Informations bancaires»',
                    i5: 'Changer',
                    i6: "Informations sur la voiture",
                    i7: "Informations de localisation",
                    i8: 'Annuler',
                    i9: "Accepter",
                    i10: 'Choisissez De',
                    j1: "Caméra",
                    j2: 'Fichier',
                    j3: "Image modifiée avec succès",
                    j4: "Noter ce passager",
                    j5: '«Le passager a été accusé»',
                    j6: "Ecrire un commentaire",
                    j7: 'Soumettre',
                    j8: '«Choisissez au moins une étoile»',
                    j9: 'Réinitialiser',
                    j10: 'Nous venons d`envoyer un lien de réinitialisation à votre adresse e-mail',
                    k1: 'Rides programmées',
                    k2: 'Aujourd`hui',
                    k3: 'Visible dans',
                    k4: 'Jour (s)',
                    k5: 'Tommorow',
                    k6: 'Démarrer le tour',
                    k7: '«Le tour n`est pas encore disponible»',
                    k8: 'Désolé, je ne peux pas sortir en ce moment',
                    k9: "Écrivez une plainte",
                    k10: "Service clientèle",
                    l1: 'FAQ',
                    l2: '«Votre plainte a été soumise, nous vous répondrons. Dans quelques minutes.',
                    l3: 'Under Rewiew',
                    l4: 'Merci de votre inscription en tant que partenaire. Nous passerons en revue vos informations d`identification et vous informerons sur l`approbation',
                    l5: "Regardez quelques vidéos sur comment utiliser cette application.",
                    l6: 'Paramètres',
                    l7: 'Changer la langue',
                    l8: 'Votre note',
                    l9: 'Hors de',
                    l10: 'Aide',
                    m1: 'PASSAGER 2'
                }
            ];
        }
        if (this.targetLanguageCode == 'ig') {
            return [
                {
                    a1: 'Weebụ',
                    a2: 'Ọrụ',
                    a3: 'FAQ',
                    a4: 'Arịrịọ Ọhụrụ',
                    a5: 'Pịa ebe ọ bụla ịmalite njem',
                    a6: 'Karịrị 60 sekọnd',
                    a7: 'Tupu kpochaa',
                    a8: 'Swipe Iji jụ arịrịọ',
                    a9: 'Tinye foto profaịlụ',
                    a10: 'License Picture',
                    b1: 'NID Foto',
                    b2: 'na-esote',
                    b3: 'New Driver',
                    b4: 'Hi, kelee onye ọkwọ ụgbọala ọhụrụ ka sonyeere otu, chọpụta ha =>',
                    b5: 'Chọpụta niile foto a gbakwunyere',
                    b6: 'Họrọ Site',
                    b7: 'Igwefoto',
                    b8: 'faịlụ',
                    b9: 'Kpochapụ',
                    b10: 'Nrite',
                    c1: 'Nrite:',
                    c2: 'Ọ dịghị ego nrite',
                    c3: 'Kọwaa ugbu a',
                    c4: 'Inweta Data ...',
                    c5: 'Ndi I Ji Obi?',
                    c6: 'Mba',
                    c7: 'Ee',
                    c8: 'I biala,',
                    c9: 'Ugbu A Na-enweta',
                    c10: 'Inweta Ebe ...',
                    d1: 'Nkwado',
                    d2: 'Documents',
                    d3: 'Echetara Pickups',
                    d4: 'Client 1',
                    d5: 'Kpatụ ka ịgbanwee ndị njem',
                    d6: 'Swipe Iji Kwenye Mbido',
                    d7: 'Swipe Iji Kwenye Nkwusi',
                    d8: 'Onye na-akpọ oku',
                    d9: 'Na-agagharị na njem ebe',
                    d10: 'Na-agagharị na njem na-aga',
                    e1: 'Oge iji rute',
                    e2: 'Ọkwọ ụgbọala na-arụ ọrụ',
                    e3: 'Ọrụ Na-aga n`ihu',
                    e4: 'Pụghị ịpụ na oge a',
                    e5: 'Ugbu a n`Intanet',
                    e6: 'ONLINE',
                    e7: 'BỤ ONLINE',
                    e8: 'Onye njem ọhụrụ',
                    e9: 'njem na-achọpụta ..',
                    e10: 'Biko Chere ..',
                    f1: 'Enweghị ike ịmepụta ebe a. Jiri Map Ochie. ',
                    f2: 'Onye njem amapụla',
                    f3: 'Job efu',
                    f4: 'GPS enweghị ihe ọ bụla',
                    f5: 'Lelee SIM Kaadị na ịntanetị',
                    f6: 'Gbalịa ọzọ',
                    f7: 'I zubere njem. Onye na-akwọ gị nọ ebe a iji bulie gị. ',
                    f8: 'I gaghi enwe nkwuputa ugha nke Job ohuru',
                    f9: 'Mee Ego Mgbe Ị Na-adọkpụ.',
                    f10: 'Email',
                    g1: 'Paswọdu',
                    g2: 'Nbanye',
                    g3: 'Mepụta Akaụntụ Ọhụrụ',
                    g4: 'Echefuru m paswọọdụ m',
                    g5: 'Nbanye',
                    g6: 'Usoro na Ọrụ',
                    g7: 'Họrọ ụgbọala',
                    g8: 'Ụba',
                    g9: 'PO (Abụọ ClientS)',
                    g10: '',
                    h1: 'ekwentị',
                    h2: 'Aha zuru oke',
                    h3: 'Njehie',
                    h4: 'City',
                    h5: 'Ikikere',
                    h6: 'Model Model',
                    h7: 'Car Year',
                    h8: 'Plate Number',
                    h9: 'ọnụ ọgụgụ nke oche',
                    h10: 'Nọmba Akaụntụ',
                    i1: 'Bank',
                    i2: 'Họrọ ụgbọ mbụ',
                    i3: 'Ozi Onye Ozi',
                    i4: 'Ozi Bank',
                    i5: 'gbanwee',
                    i6: 'Ozi ụgbọ ala',
                    i7: 'Ozi ebe',
                    i8: 'Kagbuo',
                    i9: 'Nabata',
                    i10: 'Họrọ Site',
                    j1: 'Igwefoto',
                    j2: 'Njikwa',
                    j3: 'Foto gbanwere nke ọma',
                    j4: 'Ọnụ njem a',
                    J5: 'Ejirila onye njem',
                    j6: 'Dee edemede',
                    j7: 'Nyefee',
                    j8: 'Họrọ Atọrọ Otu Star',
                    j9: 'Tọgharia',
                    j10: 'Anyị Na-ezite Ntọala Tọgharia Gị Email',
                    k1: 'Ebubere na-agba ọsọ',
                    k2: 'Taa',
                    k3: 'Visible in',
                    k4: 'Ụbọchị (s)',
                    k5: 'Echi',
                    k6: 'Malite Ride',
                    k7: 'Erubeghi Ka E Nwere',
                    k8: 'Nwee ike` ọpụpụ na oge a ',
                    k9: 'Dee mkpesa',
                    k10: 'Ahịa Care',
                    l1: 'FAQ',
                    l2: 'E debere mkpesa gị, anyị ga-alaghachikwute gị. Na nkeji ole na ole. ',
                    l3: 'N`okpuru Rewiew',
                    l4: 'I meela maka ịbanye dị ka Onye Mmekọ Ahịa. Anyị ga-enyocha nzere gị ma gwa gị nkwenye. ',
                    l5: 'Lelee ụfọdụ vidiyo na otu esi eji ngwa a.',
                    l6: 'Ntọala',
                    l7: 'gbanwee asụsụ',
                    l8: 'Ụta gị',
                    l9: 'si na',
                    l10: 'Enyemaka',
                    m1: 'Client nke Abuo'
                }
            ];
        }
        if (this.targetLanguageCode == 'kd') {
            return [{
                    a1: ' ماڵپه‌ڕ',
                    a2: 'پیشه‌',
                    a3: 'ڕێنمایی',
                    a4: 'داواكارییه‌كی تازه‌',
                    a5: 'له‌ هه‌ر شوێنێك تاپ بكه‌ بۆ ده‌ستپێكردنی گه‌شت',
                    a6: 'كه‌متر له‌ 60 چركه‌',
                    a7: 'پێش هه‌ڵوه‌شاندنه‌وه‌',
                    a8: 'بۆ هه‌ڵوه‌شاندنه‌وه‌ی داواكارییه‌كه‌ په‌نجه‌ی پێدا بنێ',
                    a9: ' وێنه‌یه‌كی پڕۆفایل زیاد بكه‌',
                    a10: 'وێنه‌ی مۆڵه‌ت پێدراو',
                    b1: 'وێنه‌ی ناسنامه‌ی كه‌سیی',
                    b2: 'دواتر',
                    b3: 'شۆفێرێكی تازه‌',
                    b4: ' سڵاو، پیرۆزه‌ هه‌ر ئێستا شۆفێرێكی تازه‌ هاته‌ ناو تیمه‌كه‌، سه‌یریان بكه‌ => ',
                    b5: 'دڵنیا به‌ كه‌ هه‌موو وێنه‌كان زیادكراون',
                    b6: 'له‌، هه‌ڵبژێره‌',
                    b7: 'كامێرا',
                    b8: 'فایل',
                    b9: 'هه‌ڵوه‌شاندنه‌وه‌',
                    b10: 'قازانج',
                    c1: 'قازانج ',
                    c2: 'هیچ داتایه‌كی قازانج نییه',
                    c3: 'هه‌ر ئێستا هه‌مووی ڕه‌ش بكه‌ره‌وه‌',
                    c4: 'به‌ده‌ستهێنانی داتای......',
                    c5: 'ئایا دڵنیایت؟',
                    c6: 'نه‌خێر',
                    c7: 'به‌ڵێ',
                    c8: 'به‌خێر بێن ',
                    c9: 'له‌ ئێستادا به‌رده‌سته‌',
                    c10: 'به‌ده‌ستهێنانی شوێن',
                    d1: 'پاڵپشتیكردن',
                    d2: 'به‌ڵگه‌نامه‌كان',
                    d3: 'خشته‌ی دیاریكراوی گه‌یاندن',
                    d4: 'سه‌رنشینی 1',
                    d5: 'تاپ بكه‌ بۆ گۆڕینی سه‌رنشین',
                    d6: 'بۆ دووپاتكردنه‌وه‌ی گه‌یاندن په‌نجه‌ی پێدا بنێ',
                    d7: 'بۆ دووپاتكردنه‌وه‌ی دابه‌زین په‌نجه‌ی پێدا بنێ',
                    d8: 'پێوه‌ندی به‌ سه‌رنشین بكه‌',
                    d9: 'گواستنه‌وه‌ بۆ شوێنی سه‌رنشینه‌كان',
                    d10: 'گواستنه‌وه‌ بۆ شوێنی مه‌به‌ستی سه‌رنشینه‌كان',
                    e1: 'كاتی گه‌یشتن ',
                    e2: 'شۆفێری چاڵاك',
                    e3: 'كاری ئێستا ڕۆیشتوو',
                    e4: 'ناتوانی له‌م كاته‌دا بچیته‌ ده‌ره‌وه‌',
                    e5: 'ئێستا ئۆنڵاینه',
                    e6: 'ئۆنڵاین',
                    e7: 'چوونه‌ ئۆنڵاین',
                    e8: 'سه‌رنشینێكی تازه‌ ',
                    e9: 'سه‌ رنشین كرێی گواستنه‌وه‌ ده‌دات',
                    e10: 'تكایه‌ چاوه‌ڕێ بكه‌',
                    f1: 'نه‌توانرا شوێنی مه‌به‌ست دیاری بكرێت. نه‌خشه‌ی ده‌ره‌كی به‌كاربهێنه‌',
                    f2: 'سه‌رنشینێك له‌سه‌ر هێل نه‌ما',
                    f3: 'كاری له‌ده‌ستدراو',
                    f4: 'به‌رده‌ست نییه‌ GPS',
                    f5: ' سیم و كارت و هێلی ئینته‌رنێت بپشكنه‌',
                    f6: 'دووباره‌ هه‌وڵبده‌',
                    f7: ' گواستنه‌وه‌یه‌كت ڕێك خست. شۆفێره‌كه‌ت لێره‌یه‌ بۆ ئه‌وه‌ی هه‌ڵت بگرێت',
                    f8: ' چیتر ئاگاداركردنه‌وه‌ی كارێكی تازه‌ت بۆ نایه‌ت.',
                    f9: 'پاره‌ قازانج بكه‌ كاتێك له‌ لێخوڕین دایت',
                    f10: ' ئیمه‌یل',
                    g1: 'وشه‌ی تێپه‌ڕ',
                    g2: ' چوونه‌ ژووره‌وه‌',
                    g3: ' ئه‌ژمارێك دروست بكه‌',
                    g4: 'وشه‌ی تێپه‌ڕه‌كه‌م له‌یاد چوو',
                    g5: ' خۆتۆماركردن',
                    g6: ' مه‌رج و خزمه‌تگوزارییه‌كان',
                    g7: 'ئۆتۆمۆبێلێك هه‌ڵبژێره‌',
                    g8: 'ئابووریانه‌',
                    g9: 'دوو سه‌رنشین',
                    g10: '',
                    h1: 'ته‌له‌فۆن',
                    h2: ' ناوی ته‌واو',
                    h3: ' هه‌ڵه‌',
                    h4: ' شار',
                    h5: 'مۆڵه‌ت',
                    h6: 'جۆری ئۆتۆمبێل',
                    h7: 'ساڵی ئۆتۆمبێل',
                    h8: ' ژماره‌ی تابلۆی ئۆتۆمۆبێل',
                    h9: ' ژماره‌ی شوێنه‌كانی دانیشتن',
                    h10: 'ژماره‌ی حیساب/ئه‌ژمار',
                    i1: ' بانك',
                    i2: 'سه‌ره‌تا ئۆتۆمۆبێلێك هه‌ڵبژێره‌',
                    i3: ' زانیاری به‌كاربه‌ر',
                    i4: ' زانیاری بانك',
                    i5: 'گۆڕین',
                    i6: ' زانیاری ئۆتۆمۆبێل',
                    i7: ' زانیاری شوێن',
                    i8: ' هه‌ڵوه‌شاندنه‌وه‌',
                    i9: 'قبووڵكردن',
                    i10: 'هه‌ڵبژێره‌ له‌ ',
                    j1: 'كامێرا',
                    j2: 'فایل',
                    j3: 'وێنه‌كه‌ به‌سه‌ركه‌وتوویی گۆڕا',
                    j4: 'ئه‌م سه‌رنشینه‌ هه‌ڵسه‌نگێنه‌',
                    j5: 'سه‌رنشینه‌كه‌ پاره‌ی دا',
                    j6: 'پێشبینی بنووسه‌',
                    j7: 'بنێره‌/به‌رزی بكه‌',
                    j8: 'به‌لایه‌نی كه‌م ئه‌ستێره‌یه‌ك هه‌ڵبژێره‌',
                    j9: 'دووباره‌ دایبنێیه‌وه‌',
                    j10: 'هه‌ر ئێستا لینكێكی دووباره‌كردنه‌وه‌مان بۆ ئیمه‌یله‌كه‌ت نارد',
                    k1: 'دیاریكردنی خشته‌ی گواستنه‌وه‌كان',
                    k2: 'ئه‌مڕۆ',
                    k3: 'به‌رده‌سته‌ له‌ ',
                    k4: ' ڕۆژه‌كان',
                    k5: 'سبه‌ی',
                    k6: 'ده‌ست به‌ ده‌رچوونه‌كه‌ت بكه‌',
                    k7: 'هێشتا گه‌یاندن به‌رده‌ست نییه‌',
                    k8: 'ببوره‌، ناتوانی له‌م كاته‌دا لێره‌ ده‌ربچیت',
                    k9: 'سكاڵایه‌ك بنووسه‌',
                    k10: 'ڕاژه‌ی به‌شداربوان',
                    l1: 'ڕێنمایی',
                    l2: 'سكاڵایه‌كه‌ت نێردرا، له‌ ماوه‌ی چه‌ند خوله‌كێكدا ئێمه‌ پێوه‌ندیت پێوه‌ ده‌كه‌ینه‌وه‌.',
                    l3: 'له‌ژێر پێداچوونه‌وه‌ دایه‌',
                    l4: 'سوپاس بۆ خۆتۆماركردنت وه‌كو هاوبه‌شێكی WiTaxi. پێداچوونه‌وه‌ بۆ به‌ڵگه‌نامه‌ و بڕوانامه‌كانت ده‌كه‌ین و له‌ ڕه‌زامه‌ندیمان ده‌كه‌ینه‌وه‌.',
                    l5: 'سه‌یری چه‌ند ڤیدیۆیه‌ك بكه‌ له‌باره‌ی چۆنییه‌تی به‌كارهێنانی ئه‌م ئه‌پلیكه‌یشنه‌',
                    l6: 'ڕێكخستنه‌كان',
                    l7: 'گۆڕینی زمان',
                    l8: 'هه‌ڵسه‌نگاندنی تۆ ',
                    l9: 'له‌',
                    l10: 'یارمه‌تی',
                    m1: 'سه‌رنشینی 2',
                }];
        }
        if (this.targetLanguageCode == 'pr') {
            return [{
                    a1: 'Website',
                    a2: 'Carreiras',
                    a3: 'FAQ',
                    a4: 'Nova Solicitação',
                    a5: 'Toque em qualquer lugar para iniciar a viagem',
                    a6: "Menos de 60 segundos",
                    a7: 'Antes de Cancelar',
                    a8: 'Deslize para Rejeitar Solicitação',
                    a9: 'Adicionar uma imagem de perfil',
                    a10: 'Imagem de licença',
                    b1: 'NID Picture',
                    b2: 'Próximo',
                    b3: 'New Driver',
                    b4: 'Oi, congratula-se com um novo driver que acabou de se juntar à equipe, confira-os =>',
                    b5: 'Certifique-se de que todas as imagens foram adicionadas',
                    b6: 'Escolha de',
                    b7: 'Camera',
                    b8: 'Arquivo',
                    b9: 'Cancelar',
                    b10: 'ganhos',
                    c1: 'Earnings:',
                    c2: 'Sem dados de ganhos',
                    c3: 'Limpar agora',
                    c4: 'Obtendo dados ...',
                    c5: 'Você está certo?',
                    c6: 'Não',
                    c7: 'sim',
                    c8: 'Bem-vindo',
                    c9: 'Atualmente disponível',
                    c10: 'Getting Location ...',
                    d1: 'Suporte',
                    d2: 'Documentos',
                    d3: 'Pickups agendados',
                    d4: 'PASSAGEIRO 1',
                    d5: 'Tap to Switch Clients',
                    d6: 'Deslize para confirmar a retirada',
                    d7: 'Deslize para confirmar a saída',
                    d8: 'Call Client',
                    d9: 'Navegue para a localização dos passageiros',
                    d10: 'Navegar para Destino de passageiros',
                    e1: 'Time To Reach',
                    e2: 'Driver Active',
                    e3: 'Trabalho em andamento',
                    e4: 'Não posso sair por enquanto',
                    e5: 'Now Online',
                    e6: 'ONLINE',
                    e7: 'GO ONLINE',
                    e8: 'New Client',
                    e9: 'Client Checking Out',
                    e10: 'Please Wait ...',
                    f1: 'Não foi possível processar o destino. Use o Mapa Externo. ',
                    f2: 'Um passageiro ficou desconectado',
                    f3: 'Job Lost',
                    f4: 'GPS não disponível',
                    f5: 'Check Sim Card e disponibilidade de internet',
                    f6: 'Tente novamente',
                    f7: 'Você agendou um passeio. Seu motorista está aqui para buscá-lo. ',
                    f8: 'Você não receberá mais uma notificação de um novo emprego',
                    f9: 'Ganhar dinheiro enquanto estiver dirigindo',
                    f10: 'E-mail',
                    g1: 'Senha',
                    g2: 'Login',
                    g3: 'Criar uma nova conta',
                    g4: 'Esqueci minha senha',
                    g5: 'Inscrição',
                    g6: 'Termos e Serviços',
                    g7: 'Escolha um carro',
                    g8: 'ECONOMIA',
                    g9: 'PISCINA (DOIS PASSAGEIROS)',
                    g10: '',
                    h1: 'Telefone',
                    h2: 'Nome completo',
                    h3: 'Erro',
                    h4: 'Cidade',
                    h5: 'Licença',
                    h6: 'modelo de carro',
                    h7: 'Car Year',
                    h8: 'Número da placa',
                    h9: 'Número de assentos',
                    h10: 'Número da conta',
                    i1: 'Bank',
                    i2: 'Escolha um carro primeiro',
                    i3: 'Informação do usuário',
                    i4: 'Informação bancária',
                    i5: 'Mudança',
                    i6: 'Car Information',
                    i7: 'Informação de Localização',
                    i8: 'Cancelar',
                    i9: 'Aceitar',
                    i10: 'Escolha de',
                    j1: 'Camera',
                    j2: 'Arquivo',
                    j3: 'Imagem alterada com sucesso',
                    j4: 'Rate This Client',
                    j5: "Passageiro foi cobrado",
                    j6: 'Write A Review',
                    j7: 'Enviar',
                    j8: 'Escolha pelo menos uma estrela',
                    j9: 'Reset',
                    j10: "Nós acabamos de enviar um link de redefinição para o seu e-mail",
                    k1: 'Passeios Programados',
                    k2: 'Hoje',
                    k3: 'Visible in',
                    k4: 'Dia (s)',
                    k5: 'Tommorow',
                    k6: 'Start Ride',
                    k7: 'Ride ainda não está disponível',
                    k8: 'Desculpe, não posso sair por enquanto',
                    k9: 'Write A Complaint',
                    k10: "atendimento ao cliente",
                    l1: 'FAQ',
                    l2: "Sua queixa foi enviada, nós retornaremos para você. Em alguns minutos",
                    l3: 'Under Rewiew',
                    l4: 'Obrigado por se inscrever como um parceiro do. Vamos rever as suas credenciais e notificá-lo na aprovação. ',
                    l5: 'Assista alguns vídeos sobre como usar este aplicativo.',
                    l6: 'Configurações',
                    l7: 'Change Language',
                    l8: 'Your Rating',
                    l9: 'Out of',
                    l10: 'Ajuda',
                    m1: 'Client 2'
                }];
        }
        if (this.targetLanguageCode == 'rs') {
            return [{
                    a1: 'Веб-сайт',
                    a2: 'Карьера',
                    a3: 'FAQ',
                    a4: 'Новый запрос',
                    a5: 'Нажмите Anywhere To Start Trip ',
                    a6: 'Менее 60 секунд',
                    a7: 'Перед отменой',
                    a8: 'Проведите, чтобы отклонить запрос',
                    a9: 'Добавить изображение профиля',
                    a10: 'Лицензионное изображение',
                    b1: 'Изображение NID',
                    b2: 'Далее',
                    b3: 'Новый драйвер',
                    b4: 'Привет, поздравляю нового водителя, только что присоединившегося к команде, проверьте их => ',
                    b5: 'Убедитесь, что все изображения добавлены',
                    b6: 'Выбрать из',
                    b7: 'Камера',
                    b8: 'Файл',
                    b9: 'Отмена',
                    b10: 'Заработок',
                    c1: 'Заработок:',
                    c2: 'Нет данных о доходах',
                    c3: 'Очистить сейчас',
                    c4: 'Получение данных ...',
                    c5: 'Вы уверены?',
                    c6: 'Нет',
                    c7: 'Да',
                    c8: 'Добро пожаловать',
                    c9: 'Доступно в настоящее время',
                    c10: 'Получение местоположения ...',
                    d1: 'Поддержка',
                    d2: 'Документы',
                    d3: 'Запланированные пикапы',
                    d4: 'ПАССАЖИР 1',
                    d5: 'Нажмите, чтобы переключить пассажиров',
                    d6: 'Проведите по проверке пикапа',
                    d7: 'Проведите, чтобы подтвердить выпадение',
                    d8: 'Позвонить пассажиру',
                    d9: 'Переход к местоположению пассажиров',
                    d10: 'Переход в пункт назначения пассажиров',
                    e1: 'Время добираться',
                    e2: 'Драйвер Active',
                    e3: 'Работа продолжается',
                    e4: 'Can`t Exit At This Time',
                    e5: 'Сейчас в сети',
                    e6: 'ONLINE',
                    e7: 'GO ONLINE',
                    e8: 'Новый пассажир',
                    e9: 'Проверка пассажиров',
                    e10: 'Подождите ...',
                    f1: 'Не удалось обработать цель. Использовать внешнюю карту. ',
                    f2: 'Пассажир отключен',
                    f3: 'Потеря работы',
                    f4: 'GPS недоступен',
                    f5: 'Проверить наличие карты Sim и доступ в Интернет',
                    f6: 'Повторите попытку',
                    f7: 'Вы забронировали поездку. Ваш водитель здесь, чтобы забрать вас. ',
                    f8: 'Вы больше не будете получать уведомление о новом задании',
                    f9: 'Зарабатывайте деньги во время вождения',
                    f10: 'Электронная почта',
                    g1: 'Пароль',
                    g2: 'Войти',
                    g3: 'Создать новую учетную запись',
                    g4: 'Я забыл свой пароль',
                    g5: 'Регистрация',
                    g6: 'Условия и услуги',
                    g7: 'Выберите автомобиль',
                    g8: 'ЭКОНОМИКА',
                    g9: 'БАССЕЙН (ДВЕ ПАССАЖИРОВ)',
                    g10: '',
                    h1: 'Телефон',
                    h2: 'Полное имя',
                    h3: 'Ошибка',
                    h4: 'Город',
                    h5: 'Лицензия',
                    h6: 'Модель автомобиля',
                    h7: 'Автомобильный год',
                    h8: 'Номер пластины',
                    h9: 'Количество мест',
                    h10: 'Номер счета',
                    i1: 'Банк',
                    i2: 'Сначала выберите автомобиль',
                    i3: 'Информация о пользователе',
                    i4: 'Информация о банке',
                    i5: 'Изменить',
                    i6: 'Информация о машине',
                    i7: 'Информация о местоположении',
                    i8: 'Отмена',
                    i9: 'Принять',
                    i10: 'Выбрать из',
                    j1: 'Камера',
                    j2: 'Файл',
                    j3: 'Изображение изменено успешно',
                    j4: 'Оцените этого пассажира',
                    j5: 'Пассажир был обвинен',
                    j6: 'Написать обзор',
                    j7: 'Отправить',
                    j8: 'Выберите по крайней мере одну звезду',
                    j9: 'Сброс',
                    j10: 'Мы только что отправили ссылкуСбросить ссылку на вашу электронную почту ',
                    k1: 'Запланированные поездки',
                    k2: 'Сегодня',
                    k3: 'Видимый в',
                    k4: 'День',
                    k5: 'Tommorow',
                    k6: 'Начать езду',
                    k7: 'Поезд еще не доступен',
                    k8: 'Извините Can`t Exit At This Time',
                    k9: 'Напишите жалобу',
                    k10: 'Обслуживание клиентов',
                    l1: 'FAQ',
                    l2: 'Ваша жалоба была отправлена, мы вернемся к вам. За несколько минут.',
                    l3: 'Под Rewiew',
                    l4: 'Спасибо, что подписаны как партнер Taxihub. Мы рассмотрим ваши полномочия и уведомим вас об одобрении. ',
                    l5: 'Посмотрите некоторые видео о том, как использовать это приложение',
                    l6: 'Настройки',
                    l7: 'Изменить язык'
                }];
        }
        if (this.targetLanguageCode == 'az') {
            return [{
                    a1: 'Veb sayt',
                    a2: 'Careers',
                    a3: 'FAQ',
                    a4: 'Yeni sorğu',
                    a5: 'Səyahətə başlamaq üçün istənilən nöqtəyə toxunun',
                    a6: '60 saniyədən az',
                    a7: 'İmtinadan əvvəl',
                    a8: 'Sorğudan imtina üçün düyməni sürüşdürün',
                    a9: 'Profil şəkli əlavə et',
                    a10: 'Sürücülük vəsiqəsinin şəkli',
                    b1: 'NID Picture',
                    b2: 'Növbəti',
                    b3: 'Yeni sürücü',
                    b4: 'Sistemə yeni sürücü əlavə olunmuşdur. Baxmaq => ',
                    b5: 'Bütün şəkillərin əlavə olunduğuna əmin olun',
                    b6: 'Başlanğıcı seçin',
                    b7: 'Kamera',
                    b8: 'Fayl',
                    b9: 'İmtina',
                    b10: 'Gəlirlər',
                    c1: 'Gəlirlər: ',
                    c2: 'Gəlirlər haqqında məlumat yoxdur',
                    c3: 'Təmizlə',
                    c4: 'İnformasiya yüklənir...',
                    c5: 'Əminsiniz?',
                    c6: 'Xeyr',
                    c7: 'Bəli',
                    c8: 'Xoş gəlmişsiniz, ',
                    c9: 'Hazırda aktivdir',
                    c10: 'Yerləşmə yerinin təyini...',
                    d1: 'Dəstək',
                    d2: 'Sənədlər',
                    d3: 'Planlanan səyahətlər',
                    d4: 'Sərnişin 1',
                    d5: "Sərnişini dəyişmək üçün toxunun",
                    d6: 'Qəbul etməyinizi təsdiqləyin',
                    d7: 'Səyahəti bitirmək üçün basın',
                    d8: 'Sərnişinə zəng',
                    d9: 'Sərnişinlərin təyinatına gedin',
                    d10: 'Sərnişinlərin təyinatına gedin',
                    e1: 'Ulaşmaq vaxtı',
                    e2: 'Sürücü Aktiv',
                    e3: 'Çalışma davam edir',
                    e4: 'Bu Zamandan Çıxıra Giremez',
                    e5: 'İndi Online',
                    e6: 'ONLINE',
                    e7: 'GO ONLINE',
                    e8: "Yeni Sərnişin",
                    e9: "sərnişin yoxlanılır ..",
                    e10: "Xahiş edirik gözləyin!",
                    f1: 'Hedefi işləməyəcək. Xarici xəritəsi istifadə edin. ',
                    f2: 'Sərnişin kəsildi',
                    f3: 'İş Lost',
                    f4: 'GPS əlçatmazdır',
                    f5: 'Sim kartı və İnternet mövcudluğunu yoxlayın',
                    f6: 'Yenidən cəhd edin',
                    f7: 'Siz gəzinti planlaşdırdınız. Sürücünüz burada sizi ala bilər. ',
                    f8: 'Yeni bir işin xəbərdarlığını daha çox alacaqsınız',
                    f9: 'Sürərkən pul qazan',
                    f10: 'E-poçt',
                    g1: 'Şifrə',
                    g2: 'Giriş',
                    g3: 'Yeni hesab yarat',
                    g4: 'Şifrəmi unutdum',
                    g5: 'Qeydiyyat',
                    g6: 'Şərtlər və Xidmətlər',
                    g7: 'Avtomobili seçin',
                    g8: 'EKONOM',
                    g9: 'Bir neçə sərnişinlər',
                    g10: '',
                    h1: 'Telefon',
                    h2: 'Tam adı',
                    h3: 'Səhv',
                    h4: 'Şəhər',
                    h5: 'Lisenziya',
                    h6: 'Avtomobil modeli',
                    h7: 'Avtomobil ili',
                    h8: 'Plitə nömrəsi',
                    h9: 'Oturacaqların sayı',
                    h10: 'Hesab nömrəsi',
                    i1: 'Bank',
                    i2: 'Bir Avtomobilin İlk Seçimi',
                    i3: 'İstifadəçi Məlumatı',
                    i4: 'Bank məlumatı',
                    i5: 'Change',
                    i6: 'Avtomobil Məlumatı',
                    i7: 'Yer məlumatı',
                    i8: 'İptal et',
                    i9: 'Qəbul et',
                    i10: 'From seçin',
                    j1: 'Kamera',
                    j2: 'Fayl',
                    j3: 'Şəkil müvəffəqiyyətlə dəyişdirildi',
                    j4: 'Bu Sərnişin Qiymətləndirilməsi',
                    j5: 'Sərnişinlər yükləndi',
                    j6: 'Bir Yazı Yaz',
                    j7: 'Göndər',
                    j8: 'Ən az bir Star seçin',
                    j9: 'Reset',
                    j10: 'Biz yalnız e-poçtunuza yenidən bir link tikdilər',
                    k1: 'Planlanan Rides',
                    k2: 'Bu gün',
                    k3: 'Görünən',
                    k4: 'Gün (lər)',
                    k5: 'Tommorow',
                    k6: 'Ride Start',
                    k7: "Ride hələ mövcud deyil",
                    k8: 'Bu Zaman Çıxıma Çıxaramam',
                    k9: 'Şikayət yazma',
                    k10: 'Müştəri Xidmətləri',
                    l1: "FAQ",
                    l2: "Sizin şikayətiniz təqdim olundu, biz sizə geri dönəcəyik. Bir neçə dəqiqəyə.",
                    l3: 'Rewiew altında',
                    l4: 'Alkober ortağı kimi imzalanmaq üçün təşəkkür edirik. Sizin təsdiq sənədlərinizi nəzərdən keçirəcəyik və Onayla təsdiq olunacaq. ',
                    l5: 'Bu App istifadə etmək üçün bəzi videoları izləyin.',
                    l6: 'Ayarlar',
                    l7: 'Dili dəyişdirin'
                }];
        }
    };
    return LanguageProvider;
}());
LanguageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
], LanguageProvider);

//# sourceMappingURL=language.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_language_language__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(zone, set, lp, modalCtrl, loadingCtrl, One, ph, auth, platform, statusBar, splashScreen) {
        this.zone = zone;
        this.set = set;
        this.lp = lp;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.One = One;
        this.ph = ph;
        this.auth = auth;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // public fireAuth:firebase.auth.Auth;
        //for the purpose of effective lazy loading of pages make your rootPage directed at homepage.
        this.rootPage = 'AuthPage';
        this.showSplash = true;
        //Initialize
        this.initializeApp();
        this.pages = [
            //Add pages for sidemenu
            { component: 'HistoryPage', icon: "ios-card" },
            { component: 'ProfilePage', icon: "ios-clock" },
            { component: 'SupportPage', icon: "ios-chatbubbles" },
            { component: 'SettingsPage', icon: "ios-settings" },
            { component: 'PromoPage', icon: "ios-cash" },
            { component: 'WalletPage', icon: "ios-briefcase" },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        ///initialize onesignal notification here
        this.platform.ready().then(function () {
            //this.One.setLogLevel({logLevel: 4, visualLevel: 4})
            //Replace with your app id and google cloud messaging id from https://onesignal.com 
            _this.One.startInit(_this.set.OnesignalAppID, _this.set.CloudID);
            _this.One.inFocusDisplaying(_this.One.OSInFocusDisplayOption.Notification);
            _this.One.setSubscription(true);
            _this.One.endInit();
            // console.log(this.ph.user.photoURL)
            // #AARRGGBB where AA is an alpha value
            if (_this.platform.is('android')) {
                _this.statusBar.backgroundColorByHexString("#33000000");
            }
            else {
                _this.statusBar.styleDefault();
                //statusBar.backgroundColorByHexString('#000000');
            }
            _this.splashScreen.hide();
            // }
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        //open side menu pages on click
        this.platform.registerBackButtonAction(function () { return _this.nav.popToRoot(); });
        this.nav.push(page);
    };
    // GotoSChedule(page){
    //   if (this.cMap.lat != null)
    //   this.nav.push(page, {lat:this.cMap.lat, lng:this.cMap.lng});
    // }
    MyApp.prototype.OnPromo = function () {
        var modal = this.modalCtrl.create('PromoPage');
        modal.onDidDismiss(function (data) {
        });
    };
    MyApp.prototype.gotoProfile = function () {
        var _this = this;
        //open top menu from side bar menu
        this.nav.push('ProfilePage');
        this.platform.registerBackButtonAction(function () { return _this.nav.popToRoot(); });
    };
    MyApp.prototype.gotoAbout = function () {
        var _this = this;
        //open top menu from side bar menu
        this.nav.push('AboutPage');
        this.platform.registerBackButtonAction(function () { return _this.nav.popToRoot(); });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/app/app.html"*/'\n\n<ion-menu [content]="content" type="overlay" id="menu1">\n    \n    \n      <ion-content class="main">\n        \n    \n              \n  <!-- side menu top bar containing user profile -->\n       <ion-item class=\'top_bar\' color="nav-color" *ngIf="ph.user" menuClose tappable> \n       <ion-grid>\n       <ion-row>\n        <ion-col padding [ngStyle]="{\'margin-left\':5 + \'px\',\'font-size\': 0.9 + \'em\', \'padding-right\': 0 + \'px\' }" *ngIf="ph.user.photoURL">\n            <img class="profile-pic" [src]="ph.user.photoURL"/>\n        </ion-col>\n        <ion-col padding [ngStyle]="{\'margin\': \'auto\', \'font-size\': 0.9 + \'em\', \'padding-right\': 0 + \'px\' }" *ngIf="!ph.user.photoURL">\n              <img *ngIf="!ph.picture" class="profile-pic" src="data:image/png;base64,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"/>\n              <img *ngIf="ph.picture" class="profile-pic" [src]="ph.picture"/>\n          </ion-col>\n       \n       </ion-row>\n       </ion-grid>\n       </ion-item>\n        <ion-list id=\'sidebarList\' no-lines>\n          <!-- side menu body containing route navigations list to various functions. -->\n          <button  color="secondary" [ngStyle]="{\'height\': 60 + \'px\', \'margin-top\': 0 + \'px\', \'margin-bottom\': 0 + \'px\'}" menuClose icon-start ion-item (click)="openPage(pages[0].component)">\n            <ion-icon  name="{{pages[0].icon}}" [ngStyle]="{\'margin\': 10 + \'px\'}"></ion-icon>\n            {{lp.translate()[0].b10}}\n          </button>\n\n          <button  color="secondary" [ngStyle]="{\'height\': 60 + \'px\', \'margin-top\': 0 + \'px\', \'margin-bottom\': 0 + \'px\'}" menuClose icon-start ion-item (click)="openPage(pages[1].component)">\n              <ion-icon  name="{{pages[1].icon}}" [ngStyle]="{\'margin\': 10 + \'px\'}"></ion-icon>\n              {{lp.translate()[0].d2}}\n            </button>\n\n            <button  color="secondary" [ngStyle]="{\'height\': 60 + \'px\', \'margin-top\': 0 + \'px\', \'margin-bottom\': 0 + \'px\'}" menuClose icon-start ion-item (click)="openPage(pages[2].component)">\n                <ion-icon  name="{{pages[2].icon}}" [ngStyle]="{\'margin\': 10 + \'px\'}"></ion-icon>\n                {{lp.translate()[0].d1}}\n              </button>\n\n              <button  color="secondary" [ngStyle]="{\'height\': 60 + \'px\', \'margin-top\': 0 + \'px\', \'margin-bottom\': 0 + \'px\'}" menuClose icon-start ion-item (click)="openPage(pages[3].component)">\n                  <ion-icon  name="{{pages[3].icon}}" [ngStyle]="{\'margin\': 10 + \'px\'}"></ion-icon>\n                  {{lp.translate()[0].l6}}\n                </button>\n\n               \n\n                  <button  [hidden]=\'!set.refer\' color="secondary" [ngStyle]="{\'height\': 60 + \'px\', \'margin-top\': 0 + \'px\', \'margin-bottom\': 0 + \'px\'}" menuClose icon-start ion-item (click)="openPage(pages[4].component)">\n                    <ion-icon  name="{{pages[4].icon}}" [ngStyle]="{\'margin\': 10 + \'px\'}"></ion-icon>\n                    Refer For Cash\n                  </button>\n\n\n                <button  [hidden]=\'!set.wallet\' color="secondary" [ngStyle]="{\'height\': 60 + \'px\', \'margin-top\': 0 + \'px\', \'margin-bottom\': 0 + \'px\'}" menuClose icon-start ion-item (click)="openPage(pages[5].component)">\n                    <ion-icon  name="{{pages[5].icon}}" [ngStyle]="{\'margin\': 10 + \'px\'}"></ion-icon>\n                    Wallet\n                  </button>\n\n                 \n        </ion-list>\n  \n        \n      </ion-content>\n      <ion-footer>\n              <button  no-lines color="nav-color" [ngStyle]="{\'height\': 60 + \'px\', \'margin-top\': 0 + \'px\', \'margin-bottom\': 0 + \'px\'}" menuClose icon-start ion-item (click)="gotoAbout()">\n                      Legal    <p color="deep" >v1.0</p>\n                    </button>   \n      </ion-footer>\n    </ion-menu>\n  \n    <!-- avoid swipe to reveal the side menu becuase of inteference with google maps. -->\n  <ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n  '/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_language_language__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_onesignal_onesignal__ = __webpack_require__(89);
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
 * Generated class for the RatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RatePage = (function () {
    function RatePage(navCtrl, Onesignal, lp, viewCtrl, storage, pop, navParams, prof) {
        this.navCtrl = navCtrl;
        this.Onesignal = Onesignal;
        this.lp = lp;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.pop = pop;
        this.navParams = navParams;
        this.prof = prof;
        this.todo = {
            description: ''
        };
        this.lat = this.navParams.get('lat');
        this.lng = this.navParams.get('lng');
        this.cartype = this.navParams.get('cartype');
    }
    RatePage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    RatePage.prototype.onModelChange = function ($event) {
        var _this = this;
        this.rateNumber = $event;
        this.pop.showLoader('');
        setTimeout(function () {
            _this.pop.hideLoader();
        }, 1000);
    };
    RatePage.prototype.logForm = function () {
        var _this = this;
        console.log(this.todo);
        if (this.rateNumber != null) {
            var value = this.navParams.get('eventId');
            console.log(this.rateNumber);
            // this.todo.description = 'No description'
            this.prof.RateUser(value, this.rateNumber, this.todo.description, true).then(function (suc) {
                _this.Onesignal.UpdateInfo(_this.lat, _this.lng, _this.cartype);
                _this.navCtrl.pop();
            });
        }
        else {
            this.pop.showPimp(this.lp.translate()[0].j8);
        }
    };
    return RatePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], RatePage.prototype, "myInput", void 0);
RatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rate',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/rate/rate.html"*/'<!--\n  Generated template for the RatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n    \n      <ion-navbar color="nav-color">\n        <ion-title>{{lp.translate()[0].j4}}</ion-title>\n      </ion-navbar>\n    </ion-header>\n    \n    \n    <ion-content class=\'no-scroll\' text-center padding>\n        <ion-title>{{lp.translate()[0].j5}}</ion-title>\n        <ion-item-divider></ion-item-divider>\n      <rating [(ngModel)]="rate" \n      readOnly="false"\n      max="5" \n      emptyStarIconName="star-outline" \n      halfStarIconName="star-half" \n      starIconName="star" \n      nullable="false" \n      (ngModelChange)="onModelChange($event)"></rating>\n    \n    <div class=\'reviewspace\'>\n      <ion-title>{{lp.translate()[0].j6}}</ion-title>\n      <form (ngSubmit)="logForm()">\n            <ion-textarea  #myInput id="myInput" rows="1" maxLength="500"  [(ngModel)]="todo.description" name="description"></ion-textarea>\n    \n          <button padding ion-button type="submit" block>{{lp.translate()[0].j7}}</button>\n        </form>\n    </div>\n    </ion-content>\n    '/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/rate/rate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_onesignal_onesignal__["a" /* OnesignalProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]])
], RatePage);

//# sourceMappingURL=rate.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileProvider = (function () {
    function ProfileProvider() {
        var _this = this;
        this.loadingState = false;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.user = user;
                // console.log(user.email)
                //  this.userEmail = user.email;
                _this.id = _this.user.uid;
                _this.userProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("driverProfile/" + user.uid);
                _this.userOtherProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("userProfile/" + user.uid);
                _this.otherDatabseInfo = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("DashboardSettings");
                _this.drivers = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Drivers/");
                _this.uidProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("SharingID/");
                _this.companyProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Company");
                _this.companyNews = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("News/Driver");
                _this.CustomerOwnPropertyRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + user.uid + "/client");
                _this.customer = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer");
                _this.getUserOtherProfile().on('value', function (userProfileSnapshot) {
                    _this.mainuser = userProfileSnapshot.val();
                });
                _this.getUserOtherProfile().on('value', function (userProfileSnapshot) {
                    _this.mainuser = userProfileSnapshot.val();
                });
                _this.getDatabaseProfile().on('value', function (userProfileSnapshot) {
                    console.log(userProfileSnapshot.val());
                    _this.cars = userProfileSnapshot.val();
                });
                _this.getUserProfile().on('value', function (userProfileSnapshot) {
                    _this.plate = userProfileSnapshot.val().plate;
                    _this.ridePrice = userProfileSnapshot.val().price;
                    _this.carType = userProfileSnapshot.val().carmodel;
                    _this.caryear = userProfileSnapshot.val().caryear;
                    _this.seat = userProfileSnapshot.val().seats;
                    _this.rating = userProfileSnapshot.val().rating;
                    _this.rateText = userProfileSnapshot.val().review;
                    _this.picture = userProfileSnapshot.val().picture;
                    _this.name = userProfileSnapshot.val().name;
                    _this.earnings = userProfileSnapshot.val().earnings;
                    _this.referal_earnings = userProfileSnapshot.val().referal_earnings;
                    _this.number = userProfileSnapshot.val().phoneNumber;
                    _this.accountNum = userProfileSnapshot.val().accountNumber;
                    _this.bank = userProfileSnapshot.val().Bank;
                    _this.city = userProfileSnapshot.val().city;
                    _this.card = userProfileSnapshot.val().Card_Number;
                    _this.email = userProfileSnapshot.val().Card_email;
                    _this.funds = userProfileSnapshot.val().funds;
                    _this.cvc = userProfileSnapshot.val().Card_Cvc;
                    _this.year = userProfileSnapshot.val().Card_Year;
                    _this.month = userProfileSnapshot.val().Card_month;
                    _this.Language = userProfileSnapshot.val().Language;
                    _this.convrefEarning = userProfileSnapshot.val().refEarning;
                    _this.companyName = userProfileSnapshot.val().companies;
                    _this.getCompanyProfile(_this.companyName).on('value', function (userProfileSnapshot) {
                        if (userProfileSnapshot.val())
                            _this.compEarnings = userProfileSnapshot.val().earnings;
                    });
                    console.log(_this.userProfile);
                });
            }
        });
    }
    ProfileProvider.prototype.getCurrentDriver = function (id) {
        return this.userOtherProfile;
    };
    ProfileProvider.prototype.RateUser = function (id, rScore, text, value) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("userProfile/" + id).update({
            rating: value,
            ratingtext: text
        });
    };
    ProfileProvider.prototype.getSharingID = function () {
        return this.uidProfile;
    };
    ProfileProvider.prototype.getActivityProfile = function (id) {
        return this.CustomerOwnPropertyRef.child(id + "/client");
    };
    ProfileProvider.prototype.getCompanyProfileEarnings = function () {
        return this.companyProfile.child(this.companyName + "/");
    };
    ProfileProvider.prototype.getCompanyProfile = function (id) {
        return this.companyProfile.child(id + "/");
    };
    ProfileProvider.prototype.getNewsProfile = function () {
        return this.companyNews;
    };
    ProfileProvider.prototype.getActiveProfile = function (id) {
        return this.CustomerOwnPropertyRef.child(id);
    };
    ProfileProvider.prototype.getDatabaseProfile = function () {
        return this.otherDatabseInfo;
    };
    ProfileProvider.prototype.updateID = function (username) {
        return this.userProfile.update({
            id: username,
        });
    };
    ProfileProvider.prototype.updateGUID = function (username) {
        var _this = this;
        return this.uidProfile.child(username).update({
            id: [this.user.uid],
        }).then(function () {
            _this.updateID(username);
        });
    };
    ProfileProvider.prototype.getUserProfile = function () {
        return this.userProfile;
    };
    ProfileProvider.prototype.UpdateEarnings = function (sum) {
        return this.userProfile.update({
            earnings: this.earnings + sum,
        });
    };
    ProfileProvider.prototype.UpdateRating = function (current, text) {
        return this.userProfile.update({
            rating: current,
            review: text
        });
    };
    ProfileProvider.prototype.UpdatePaymentType = function (number) {
        return this.userProfile.update({
            payWith: number,
        });
    };
    ProfileProvider.prototype.getUserOtherProfile = function () {
        return this.userOtherProfile;
    };
    ProfileProvider.prototype.getUserAsClientInfo = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/");
    };
    ProfileProvider.prototype.getUserAsClientInfoMessage = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/");
    };
    ProfileProvider.prototype.getUser2AsClientInfo = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/");
    };
    ProfileProvider.prototype.getAllDrivers = function () {
        return this.drivers;
    };
    ProfileProvider.prototype.Complain = function (value) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("DashboardSettings/driver/complains").push({
            complain: value,
            email: this.user.email
        });
    };
    ProfileProvider.prototype.UpdateInfo = function (name, city, license, carmodel, caryear, plate, seats, accountNum, bank, cartype, insp) {
        return this.userProfile.update({
            name: name,
            city: city,
            license: license,
            carmodel: carmodel,
            caryear: caryear,
            plate: plate,
            seats: seats,
            rating: 0,
            earnings: 0,
            active_state: false,
            accountNumber: accountNum,
            Bank: bank,
            Cartype: cartype,
            price: 10,
            Language: 'en',
            inspector: insp
        });
    };
    ProfileProvider.prototype.UpdateNumber = function (number) {
        return this.userProfile.update({
            phoneNumber: number,
        });
    };
    ProfileProvider.prototype.UpdateAccountNumber = function (number) {
        return this.userProfile.update({
            accountNumber: number,
        });
    };
    ProfileProvider.prototype.UpdatePPhotoInfo = function (picture) {
        return this.userProfile.update({
            picture: picture,
        });
    };
    ProfileProvider.prototype.UpdateLanguage = function (value) {
        return this.userProfile.update({
            Language: value,
        });
    };
    ProfileProvider.prototype.UpdateNPhotoInfo = function (picture) {
        return this.userProfile.update({
            NID: picture,
        });
    };
    ProfileProvider.prototype.UpdateBank = function (number) {
        return this.userProfile.update({
            Bank: number,
        });
    };
    ProfileProvider.prototype.UpdateCar = function (number) {
        return this.userProfile.update({
            Cartype: number,
        });
    };
    ProfileProvider.prototype.UpdateCarModel = function (number) {
        return this.userProfile.update({
            carmodel: number,
        });
    };
    ProfileProvider.prototype.UpdatePrice = function (number) {
        return this.userProfile.update({
            price: number,
        });
    };
    ProfileProvider.prototype.UpdateCarYear = function (number) {
        return this.userProfile.update({
            caryear: number,
        });
    };
    ProfileProvider.prototype.UpdateName = function (number) {
        return this.userProfile.update({
            name: number,
        });
    };
    ProfileProvider.prototype.UpdatePlate = function (number) {
        return this.userProfile.update({
            seats: number,
        });
    };
    ProfileProvider.prototype.UpdateCarSeats = function (number) {
        return this.userProfile.update({
            caryear: number,
        });
    };
    ProfileProvider.prototype.UpdateCity = function (number) {
        return this.userProfile.update({
            city: number,
        });
    };
    ProfileProvider.prototype.getAllSharingID = function () {
        return this.uidProfile;
    };
    ProfileProvider.prototype.UpdateCartype = function (number) {
        return this.userProfile.update({
            Cartype: number,
        });
    };
    ProfileProvider.prototype.UpdateLPhotoInfo = function (license_picture) {
        return this.userProfile.update({
            license_picture: license_picture,
        });
    };
    return ProfileProvider;
}());
ProfileProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ProfileProvider);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventProvider = (function () {
    function EventProvider() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.id = user.uid;
                _this.user = user;
                _this.userProfileRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("driverProfile/" + user.uid);
                _this.CustomerRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + _this.selectedUser);
                _this.CustomerOwnPropertyRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + user.uid + "/client");
                _this.CustomerOwnRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer");
                _this.DriverRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Drivers/" + user.uid);
                _this.scheduledProfileRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("ScheduledRides");
                _this.companyList = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Company");
                _this.getUserProfile().on('value', function (userProfileSnapshot) {
                    _this.rating = userProfileSnapshot.val().rating;
                    _this.rateText = userProfileSnapshot.val().review;
                });
            }
        });
    }
    EventProvider.prototype.getEventList = function () {
        return this.userProfileRef.child('/eventList');
    };
    EventProvider.prototype.getSupportChatList = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("DashboardSettings/user/complains/" + id);
    };
    EventProvider.prototype.Complain = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("DashboardSettings/user/complains/" + id).push({
            Client_Message: value,
            email: this.user.email,
            chat_key: id
        });
    };
    EventProvider.prototype.getChatList = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client/Chat");
    };
    EventProvider.prototype.getUserProfile = function () {
        return this.userProfileRef;
    };
    EventProvider.prototype.getScheduleList = function () {
        return this.scheduledProfileRef;
    };
    EventProvider.prototype.getCompanyList = function () {
        return this.companyList;
    };
    EventProvider.prototype.getCurrentDriver = function () {
        return this.DriverRef;
    };
    EventProvider.prototype.getActivityProfile = function (id) {
        return this.CustomerOwnRef.child(id + "/client");
    };
    EventProvider.prototype.getActiveProfile = function (id) {
        return this.CustomerOwnPropertyRef.child(id);
    };
    EventProvider.prototype.getEventDetail = function (eventId) {
        return this.userProfileRef.child('/eventList').child(eventId);
    };
    EventProvider.prototype.UpdateCash = function (cash, eventId) {
        return this.userProfileRef.child('/eventList').update({
            price: cash,
        });
    };
    EventProvider.prototype.createHistory = function (name, price, date, location, destination) {
        return this.userProfileRef.child('/eventList').push({
            name: name,
            price: price,
            date: date,
            location: location,
            paid: 1,
            destination: destination,
            hidden: false
        });
    };
    EventProvider.prototype.PushUserDetails = function (name, picture, id, lat, lng, locationName, plate, seats, carType, rating, rateText, number, regnum) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Driver_name: name,
            Driver_location: [lat, lng],
            Driver_locationName: locationName,
            Driver_plate: plate,
            Driver_picture: picture,
            Driver_ID: this.id,
            Driver_RegNum: regnum,
            Driver_seats: seats,
            Driver_carType: carType,
            Driver_rating: rating,
            Driver_rateText: rateText,
            Driver_number: number,
            Driver_HasRated: false
        });
    };
    EventProvider.prototype.UpdateCard = function (card, month, year, cvc, amount, email, driverPay) {
        return this.userProfileRef.update({
            Card_Number: card,
            Card_month: month,
            Card_Year: year,
            Card_Cvc: cvc,
            Card_Amount: amount,
            Card_email: email,
            Card_driverPay: driverPay
        });
    };
    EventProvider.prototype.UpdateFund = function (card) {
        return this.userProfileRef.update({
            funds: card,
        });
    };
    EventProvider.prototype.PushCurrentLocation = function (lat, lng, id, car, phone, pic, rating) {
        return this.DriverRef.set({
            driver_details: [lat, lng, id, car, phone, pic, rating]
        });
    };
    EventProvider.prototype.confirmRentry = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            entered: value,
        });
    };
    EventProvider.prototype.RateDriver = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_HasRated: value
        });
    };
    EventProvider.prototype.ApprovePickup = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_PickedUp: value,
        });
    };
    EventProvider.prototype.SendMessage = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client/Chat").push({
            Driver_Message: value,
        });
    };
    EventProvider.prototype.UpdateTime = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_Time_Destination: value,
        });
    };
    EventProvider.prototype.ApprovePickup2 = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Pool_PickedUp: value,
        });
    };
    EventProvider.prototype.ApproveDrop = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_Dropped: value,
            Delivered: true
        });
    };
    EventProvider.prototype.ApproveDrop2 = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Pool_Dropped: value,
        });
    };
    EventProvider.prototype.ApprovedArrival = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_Arrived: value,
        });
    };
    EventProvider.prototype.ApproveDelete = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_Deleted: true,
        });
    };
    EventProvider.prototype.UpdateLocation = function (lat, lng, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Driver_location: [lat, lng],
        });
    };
    return EventProvider;
}());
EventProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], EventProvider);

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_location_tracker_location_tracker__ = __webpack_require__(156);
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







/*
  Generated class for the PopUpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var PopUpProvider = (function () {
    function PopUpProvider(injector, platform, lp, toastCtrl, locTracker, pro, alert, ev, load) {
        this.injector = injector;
        this.platform = platform;
        this.lp = lp;
        this.toastCtrl = toastCtrl;
        this.locTracker = locTracker;
        this.pro = pro;
        this.alert = alert;
        this.ev = ev;
        this.load = load;
        this.onRequest = false;
        this.canDismiss = false;
        this.toggleBtn = false;
        this.onPointerHide = false;
        this.calculateBtn = false;
        this.hasArrived = true;
        this.allowed = true;
        this.hasPicked = false;
        this.hasPicked2 = false;
        this.loggedOff = true;
        this.mapSection = false;
        this.isNewJob = false;
    }
    Object.defineProperty(PopUpProvider.prototype, "navCtrl", {
        get: function () {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]);
        },
        enumerable: true,
        configurable: true
    });
    PopUpProvider.prototype.showAlertNormal = function (title, subtitle, network) {
        var alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: [{
                    text: this.lp.translate()[0].f6,
                    role: 'cancel',
                    handler: function () {
                        if (network) {
                        }
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    PopUpProvider.prototype.AcceptJob = function () {
        this.mapSection = true;
        //this.cop.createUserInformation(this.ph.name, this.ph.picture, this.myMap.lat, this.myMap.lng, this.myMap.locationName, this.ph.plate, this.ph.seat, this.ph.carType, this.ph.rating );
    };
    PopUpProvider.prototype.showOfflineNormal = function (title, subtitle, network) {
        var alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: [{
                    text: this.lp.translate()[0].c6,
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: this.lp.translate()[0].c7,
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    PopUpProvider.prototype.GoOffline = function () {
        var _this = this;
        this.ev.getCurrentDriver().remove().then(function (suc) {
            _this.presentToast(_this.lp.translate()[0].f8);
            _this.loggedOff = true;
            // clearTimeout(this.cMap.timeOut)
            // clearTimeout(this.cMap.watchId)
        });
    };
    PopUpProvider.prototype.GoOffline2 = function () {
        this.ev.getCurrentDriver().remove().then(function (suc) {
        });
    };
    PopUpProvider.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PopUpProvider.prototype.alertMe = function (message) {
        var alert = this.alert.create({
            title: message,
            buttons: [{
                    text: this.lp.translate()[0].c6,
                    role: 'cancel',
                    handler: function () {
                    }
                },
            ],
            enableBackdropDismiss: true
        });
        alert.present();
    };
    PopUpProvider.prototype.alertClosure = function (message) {
        var _this = this;
        var alert = this.alert.create({
            title: message,
            buttons: [{
                    text: this.lp.translate()[0].i9,
                    role: 'cancel',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                },
            ],
            enableBackdropDismiss: true
        });
        alert.present();
    };
    PopUpProvider.prototype.presentLoader = function (message) {
        this.loading = this.load.create({
            content: message
        });
        this.loading.present();
    };
    PopUpProvider.prototype.showLoader = function (message) {
        this.dismissLoader = this.load.create({
            content: message
        });
        this.dismissLoader.present();
    };
    PopUpProvider.prototype.hideLoader = function () {
        this.dismissLoader.dismiss();
    };
    PopUpProvider.prototype.showPimp = function (title) {
        var alert = this.alert.create({
            title: title,
            buttons: [{
                    text: this.lp.translate()[0].c6,
                    role: 'cancel',
                    handler: function () {
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    PopUpProvider.prototype.presentRouteLoader = function (message) {
        var _this = this;
        var loading = this.load.create({
            content: message
        });
        loading.present();
        var myInterval = setInterval(function () {
            if (_this.canDismiss) {
                loading.dismiss();
                clearInterval(myInterval);
            }
        }, 1000);
    };
    return PopUpProvider;
}());
PopUpProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], PopUpProvider);

//# sourceMappingURL=pop-up.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocoderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GeocoderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var GeocoderProvider = (function () {
    function GeocoderProvider(injector, platform) {
        this.injector = injector;
        this.platform = platform;
        this.geocoder = new google.maps.Geocoder;
    }
    GeocoderProvider.prototype.Geocode = function (address) {
        var _this = this;
        this.geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == 'OK') {
                var position = results[0].geometry.location;
                _this.lat = position.lat();
                _this.lng = position.lng();
                //this.pop.locatePosition(this.lat, this.lng)
            }
            else {
                // alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    GeocoderProvider.prototype.Reverse_Geocode = function (lat, lng, map, driverMode) {
        var _this = this;
        var latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
        this.geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.locationName = results[0].formatted_address;
                    // this.cMap.locationName = this.locationName
                    //  document.getElementById('locationButton').innerText = this.locationName
                    console.log(_this.locationName);
                }
                else {
                }
                // window.alert('No results found');
            }
            else {
                // window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    return GeocoderProvider;
}());
GeocoderProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
], GeocoderProvider);

//# sourceMappingURL=geocoder.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnesignalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_language_language__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the OnesignalProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var OnesignalProvider = (function () {
    function OnesignalProvider(One, ph, lp, eprov, platform) {
        var _this = this;
        this.One = One;
        this.ph = ph;
        this.lp = lp;
        this.eprov = eprov;
        this.platform = platform;
        this.isInDeepSh_t = true;
        this.isInDeepSh_t2 = true;
        if (!this.platform.is('cordova')) {
            this.notif_id = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
        }
        else {
            this.One.getIds().then(function (success) {
                _this.notif_id = success.userId;
            });
        }
        console.log('checked onesignal');
    }
    OnesignalProvider.prototype.ionViewLoaded = function () {
    };
    OnesignalProvider.prototype.sendPush = function (id) {
        var _this = this;
        this.One.getIds().then(function (success) {
            console.log(success.userId);
            var notificationObj = {
                include_player_ids: [id],
                contents: { en: _this.lp.translate()[0].f6 },
            };
            _this.One.postNotification(notificationObj).then(function (success) {
                console.log("Notification Post Success:", success);
            }, function (error) {
                console.log(error);
                alert("Notification Post Failed:\n" + JSON.stringify(error));
            });
        });
    };
    OnesignalProvider.prototype.sendMessage = function (id, message) {
        var _this = this;
        this.One.getIds().then(function (success) {
            console.log(success.userId);
            var notificationObj = {
                include_player_ids: [id],
                contents: { en: message },
            };
            _this.One.postNotification(notificationObj).then(function (success) {
                console.log("Notification Post Success:", success);
            }, function (error) {
                console.log(error);
                alert("Notification Post Failed:\n" + JSON.stringify(error));
            });
        });
    };
    OnesignalProvider.prototype.UpdateInfo = function (lat, lng, car) {
        var _this = this;
        this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
            _this.phone = userProfileSnapshot.val().phoneNumber;
            _this.picture = userProfileSnapshot.val().picture;
            _this.rating = userProfileSnapshot.val().rating;
            if (_this.platform.is('cordova')) {
                if (_this.platform.is('browser')) {
                    if (lat != 0)
                        _this.eprov.PushCurrentLocation(lat, lng, '45363754646874277492442', car, _this.phone, _this.picture, _this.rating);
                }
                else {
                    _this.One.getIds().then(function (success) {
                        _this.notif_id = success.userId;
                        if (lat != 0)
                            _this.eprov.PushCurrentLocation(lat, lng, success.userId, car, _this.phone, _this.picture, _this.rating);
                    });
                }
            }
            else {
                console.log();
                console.log('updated', lat, lng, _this.notif_id, car, _this.phone, _this.picture, _this.rating);
                if (lat != 0)
                    _this.eprov.PushCurrentLocation(lat, lng, _this.notif_id, car, _this.phone, _this.picture, _this.rating);
            }
        });
    };
    OnesignalProvider.prototype.UpdateCurrentLocation = function (lat, lng) {
        var _this = this;
        if (this.isInDeepSh_t)
            this.One.getIds().then(function (success) {
                _this.notif_id = success.userId;
                if (lat != 0)
                    _this.eprov.UpdateLocation(lat, lng, success.userId);
            });
    };
    return OnesignalProvider;
}());
OnesignalProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* Platform */]])
], OnesignalProvider);

//# sourceMappingURL=onesignal.js.map

/***/ })

},[302]);
//# sourceMappingURL=main.js.map