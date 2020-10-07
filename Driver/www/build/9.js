webpackJsonp([9],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function() { return SchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SchedulePageModule = (function () {
    function SchedulePageModule() {
    }
    return SchedulePageModule;
}());
SchedulePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__schedule__["a" /* SchedulePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__schedule__["a" /* SchedulePage */]),
        ],
    })
], SchedulePageModule);

//# sourceMappingURL=schedule.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pop_up_pop_up__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_onesignal_onesignal__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_location_tracker_location_tracker__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_geocoder_geocoder__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_language_language__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_onesignal__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SchedulePage = (function () {
    function SchedulePage(navCtrl, One, lp, events, platform, navParams, gCode, locat, settings, oneSignal, pop, load, profile, alert, eventProvider) {
        this.navCtrl = navCtrl;
        this.One = One;
        this.lp = lp;
        this.events = events;
        this.platform = platform;
        this.navParams = navParams;
        this.gCode = gCode;
        this.locat = locat;
        this.settings = settings;
        this.oneSignal = oneSignal;
        this.pop = pop;
        this.load = load;
        this.profile = profile;
        this.alert = alert;
        this.eventProvider = eventProvider;
        this.bookable = false;
        this.geocoder = new google.maps.Geocoder;
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getUTCMonth() + 1;
        this.currentDay = new Date().getUTCDate();
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.locat.map1.getMyLocation({
                enableHighAccuracy: true,
            }).then(function (location) {
                _this.lat = location.latLng.lat;
                _this.lng = location.latLng.lng;
                _this.userPos = new google.maps.LatLng(_this.lat, _this.lng);
                // this.pop.presentLoader('Getting location...')
                var latlng = { lat: parseFloat(_this.lat), lng: parseFloat(_this.lng) };
                _this.geocoder.geocode({ 'location': latlng }, function (results, status) {
                    if (status === 'OK') {
                        _this.CheckPossibles();
                        //document.getElementById("position").innerText = results[0].formatted_address;
                        _this.locationName = results[0].formatted_address;
                        //  this.pop.hideLoader()
                        // this.location = this.locationName;
                    }
                    else {
                        // this.pop.showPimp(results[0]);
                    }
                });
                console.log('How Ploder Goder ....');
            });
        }
        else {
            this.lat = 4.883364;
            this.lng = 7.025034;
            this.userPos = new google.maps.LatLng(this.lat, this.lng);
            // this.pop.presentLoader('Getting location...')
            var latlng = { lat: parseFloat(this.lat), lng: parseFloat(this.lng) };
            this.geocoder.geocode({ 'location': latlng }, function (results, status) {
                if (status === 'OK') {
                    //document.getElementById("position").innerText = results[0].formatted_address;
                    _this.locationName = results[0].formatted_address;
                    //  this.pop.hideLoader()
                    _this.CheckPossibles();
                    // this.location = this.locationName;
                }
                else {
                    // this.pop.showPimp(results[0]);
                }
            });
            console.log('How Ploder Goder ....');
        }
    };
    SchedulePage.prototype.CheckPossibles = function () {
        var _this = this;
        this.eventProvider.getScheduleList().on('value', function (snapshot) {
            _this.scheduleList = [];
            snapshot.forEach(function (snap) {
                console.log(snap.val().Client_Date);
                var today = new Date();
                var future = new Date(snap.val().Client_Date);
                var a = _this.calcDate(today, future);
                console.log(a[1], _this.userPos);
                var begin = _this.userPos;
                var end = new google.maps.LatLng(snap.val().Client_location[0], snap.val().Client_location[1]);
                var suc = google.maps.geometry.spherical.computeDistanceBetween(begin, end);
                console.log(suc);
                if (suc < 1000) {
                    _this.bookable = true;
                    console.log('its close enough');
                }
                else {
                    _this.bookable = false;
                }
                _this.scheduleList.push({
                    id: snap.key,
                    name: snap.val().Client_username,
                    price: snap.val().Client_price,
                    date: a[0],
                    duedate: a[1],
                    canBook: true,
                    time: snap.val().Client_Time,
                    location: snap.val().Client_locationName,
                    destination: snap.val().Client_destinationName,
                    payWith: snap.val().Client_paymentForm,
                    picture: snap.val().Client_picture,
                    phone: snap.val().Client_phoneNumber,
                    lat: snap.val().Client_location[0],
                    lng: snap.val().Client_location[1],
                    rating: snap.val().Client_Rating,
                    ratingText: snap.val().Client_RatingText
                });
                return false;
            });
        });
        this.presentRouteLoader('');
    };
    SchedulePage.prototype.Warn = function (time) {
        this.pop.showPimp(this.lp.translate()[0].k7);
    };
    SchedulePage.prototype.calcDate = function (date1, date2) {
        var diff = Math.floor(date2.getTime() - date1.getTime());
        var day = 1000 * 60 * 60 * 24;
        var days = Math.floor(diff / day);
        var months = Math.floor(days / 31);
        var years = Math.floor(months / 12);
        console.log(days);
        var message = [date2.toDateString(), days];
        // message += " was "
        // message += days + " days " 
        // message += months + " months "
        // message += years + " years ago \n"
        return message;
    };
    SchedulePage.prototype.presentRouteLoader = function (message) {
        var _this = this;
        var loading = this.load.create({
            content: message
        });
        loading.present();
        var myInterval = setInterval(function () {
            if (_this.scheduleList != null) {
                loading.dismiss();
                clearInterval(myInterval);
            }
        }, 1000);
    };
    SchedulePage.prototype.Start = function (e) {
        var _this = this;
        if (!this.platform.is('cordova')) {
            this.notif_id = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
        }
        else {
            this.One.getIds().then(function (success) {
                _this.notif_id = success.userId;
            });
        }
        console.log(this.notif_id, e.id);
        if (this.notif_id)
            // if (this.notif_id != e.id) {
            if (!this.platform.is('cordova')) {
                this.locat.lat = 4.883364;
                this.locat.lng = 7.025034;
                this.gCode.locationName = 'Abuja, Nigeria';
                this.locationName = 'Abuja, Nigeria';
                this.lat = 4.883364;
                this.lng = 7.025034;
            }
        this.settings.id = e.id;
        console.log(this.settings.id);
        this.settings.current_ID = true;
        console.log(e);
        console.log(this.locat.lat);
        this.locat.hasTransactionEnded = true;
        this.locat.canTrack_ = true;
        console.log('Stopped Normal Movement Of Driver');
        this.oneSignal.isInDeepSh_t = true;
        this.profile.getUserAsClientInfo(this.navParams.get('notif')).off('child_added');
        this.profile.getUserAsClientInfo(this.navParams.get('notif')).off('child_changed');
        this.profile.getUserAsClientInfo(this.navParams.get('notif')).off('child_removed');
        this.eventProvider.getCurrentDriver().remove().then(function (id) {
            //Push the drivers information to the customer connection node in the database
            _this.eventProvider.getActivityProfile(e.id).set({
                Client_username: e.name,
                Client_Deleted: false,
                Client_location: [e.lat, e.lng],
                Client_locationName: e.location,
                Client_paymentForm: e.payWith,
                Client_picture: e.picture,
                Client_phoneNumber: e.phone,
                Client_destinationName: e.destination,
                Client_CanChargeCard: false,
                Client_PickedUp: false,
                Client_Dropped: false,
                Client_HasRated: false,
                Client_ended: false,
                Client_price: e.price,
                Client_Rating: e.rating,
                Client_RatingText: e.ratingText,
                entered: 0,
                Driver_name: _this.profile.name,
                Driver_location: [_this.lat, _this.lng],
                Driver_locationName: _this.locationName,
                Driver_plate: _this.profile.plate,
                Driver_picture: _this.profile.picture,
                Driver_ID: '43566625',
                Driver_seats: _this.profile.seat,
                Driver_carType: _this.profile.carType,
                Driver_rating: _this.profile.rating,
                Driver_number: _this.profile.number,
                Driver_HasRated: false
            }).then(function (suc) {
                //After removing the driver from the driver node we can then create a push notification to this driver
                if (_this.platform.is('cordova')) {
                    _this.oneSignal.sendPush(e.id);
                }
                _this.platform.ready().then(function () {
                    _this.platform.registerBackButtonAction(function () { return _this.pop.presentToast(_this.lp.translate()[0].k8); });
                });
                _this.navCtrl.pop().then(function () {
                    /// Trigger custom event and pass data to be send back
                    _this.settings.id = e.id;
                    console.log(_this.settings.id);
                });
                //  this.navCtrl.pop({verificationid: e.key});
            });
        });
        // }else{
        //   this.pop.showPimp('Run On different Devices to test Ride Scheduling')
        // }
    };
    return SchedulePage;
}());
SchedulePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-schedule',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/schedule/schedule.html"*/'<ion-header  no-border>\n  <ion-navbar color="nav-color">\n    <ion-title>{{lp.translate()[0].k1}}</ion-title>\n  </ion-navbar>\n   \n  <!-- <div text-center id=\'topcontent\' detail-none color="light" no-lines text-center icon-start>\n<h1>{{settings.appcurrency}} {{profile.earnings}} outstanding</h1>\n\n  </div> -->\n</ion-header>\n\n\n<ion-content padding text-center class=\'yes-scroll\'>\n    <div class=\'followed-items\'>\n          <ion-list *ngFor="let event of scheduleList" text-center>\n              <h2 text-center *ngIf=\'!event.duedate >= -1 && !bookable\'>\n                No Rides Around You Or Are Due For Starting.\n              </h2>\n              <ion-item *ngIf=\'event.duedate >= -1 && bookable\'>\n                  <!-- <div *ngIf=\'event.duedate < -1 || event.canBook == false\' >\n                      <h2 class=\'date\'><strong><ion-icon name="trash"></ion-icon>No Scheduled Rides</strong></h2>\n                  </div>\n                  <div > -->\n                     \n                <h2 *ngIf=\'event.duedate == -1\' class=\'date\'><strong><ion-icon name="calendar"></ion-icon>{{lp.translate()[0].k2}}</strong></h2>\n                <h2 *ngIf=\'event.duedate >= 0\' class=\'date\'><strong><ion-icon name="calendar"></ion-icon>{{event?.date}}</strong></h2>\n                <h2 *ngIf=\'event.duedate >= 0 && event.time != null\' class=\'time\'><strong><ion-icon name="clock"></ion-icon>{{event?.time}}</strong></h2>\n                <h2 class=\'drive\'><strong><ion-icon name="contact"></ion-icon>{{event?.name}}</strong></h2>\n                <!-- <h2 class=\'drive\'><strong><ion-icon name="contact"></ion-icon>{{event?.canBook}}</strong></h2> -->\n                <h2 *ngIf=\'event.price != 0\' class=\'price\'><strong><ion-icon name="ios-cash"></ion-icon>{{settings.appcurrency}}{{event?.price}}</strong></h2>\n                <p class=\'\'><ion-icon name="locate"></ion-icon>{{event?.location}}</p>\n                <p class=\'destination\'><ion-icon name="flag"></ion-icon>{{event?.destination}}</p>\n                <!-- <h2 *ngIf=\'event.duedate >= 0\' class=\'duedate\' ><strong>visible in {{event?.duedate}} day(s)</strong></h2>\n                <h2 *ngIf=\'event.duedate <= 0\' class=\'onduedate\'><strong>Ride Has Expired</strong></h2>\n             -->\n             \n                        <button *ngIf=\'event.duedate > 0\' detail-none color="gery" no-lines text-center icon-start ion-item (click)="Warn(event.duedate)" >\n                          <ion-icon name="ios-car"></ion-icon>\n                          {{lp.translate()[0].k3}} {{event?.duedate}} {{lp.translate()[0].k4}}\n                        </button>\n\n                        <button *ngIf=\'event.duedate == 0\' detail-none color="gery" no-lines text-center icon-start ion-item (click)="Warn(event.duedate)" >\n                          <ion-icon name="ios-car"></ion-icon>\n                          {{lp.translate()[0].k5}}\n                        </button>\n\n                        <button *ngIf=\'event.duedate == -1\' detail-none color="gery" no-lines text-center icon-start ion-item (click)="Start(event)" >\n                          <ion-icon name="ios-car"></ion-icon>\n                          {{lp.translate()[0].k6}}\n                        </button>\n            \n                  <!-- </div> -->\n              </ion-item>\n            </ion-list>\n\n          \n            \n    </div>\n \n</ion-content>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/schedule/schedule.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_9__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_onesignal_onesignal__["a" /* OnesignalProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
], SchedulePage);

//# sourceMappingURL=schedule.js.map

/***/ })

});
//# sourceMappingURL=9.js.map