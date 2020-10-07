webpackJsonp([2],{

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerPageModule", function() { return TrackerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tracker__ = __webpack_require__(494);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrackerPageModule = (function () {
    function TrackerPageModule() {
    }
    return TrackerPageModule;
}());
TrackerPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tracker__["a" /* TrackerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tracker__["a" /* TrackerPage */]),
        ],
    })
], TrackerPageModule);

//# sourceMappingURL=tracker.module.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_native_map_container_native_map_container__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_activity_activity__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_director_director__ = __webpack_require__(155);
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
 * Generated class for the TrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrackerPage = (function () {
    function TrackerPage(navCtrl, director, pop, cMap, ph, act, navParams) {
        this.navCtrl = navCtrl;
        this.director = director;
        this.pop = pop;
        this.cMap = cMap;
        this.ph = ph;
        this.act = act;
        this.navParams = navParams;
    }
    TrackerPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
        console.log('initiated');
        this.pop.presentLoader('Waiting For Order To be Assigned.....');
        var h = true;
        this.act.getActivityProfile(this.ph.id).on('value', function (snap) {
            console.log(snap.val());
            if (snap.val()) {
                if (snap.val().Driver_locationName) {
                    _this.GetRoute(snap.val().Client_Location, snap.val().Driver_locationName);
                }
                else {
                }
            }
            else {
                _this.navCtrl.popToRoot().then(function () {
                    _this.ph.getUserProfile().child('Basket').remove();
                    _this.ph.getUserProfile().child('Drink').remove();
                    _this.director.total = 0;
                    // this.pop.showPimp('Thank You For Choosing This App.')
                    if (_this.pop.dismissLoader != null)
                        _this.pop.hideLoader();
                });
            }
        });
        this.act.getActivityProfile(this.ph.id).child("Delivered").on('value', function (snap) {
            console.log(snap.val());
            if (snap.val())
                _this.act.getActivityProfile(_this.ph.id).remove().then(function () {
                    _this.navCtrl.popToRoot().then(function () {
                        _this.ph.getUserProfile().child('Basket').remove();
                        _this.ph.getUserProfile().child('Drink').remove();
                        _this.director.total = 0;
                        _this.pop.showPimp('Thank You For Choosing This App.');
                        if (_this.pop.dismissLoader != null)
                            _this.pop.hideLoader();
                    });
                });
        });
        this.act.getActivityProfile(this.ph.id).child("Driver_locationName").on('value', function (snap) {
            console.log(snap.val());
            if (snap.val() != null) {
                if (_this.pop.dismissLoader != null)
                    _this.pop.hideLoader();
            }
        });
    };
    TrackerPage.prototype.GetRoute = function (location, destination) {
        var _this = this;
        var source, destination;
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer({ 'draggable': true });
        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(document.getElementById('dvPanel'));
        //*********DIRECTIONS AND ROUTE**********************//
        source = location;
        destination = destination;
        var request = {
            origin: source,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
        //*********DISTANCE AND DURATION**********************//
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            origins: [source],
            destinations: [destination],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        }, function (response, status) {
            if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
                //var distance = response.rows[0].elements[0].distance.text;
                _this.duration = response.rows[0].elements[0].duration.text;
            }
            else {
                alert("Unable to find the distance via road.");
            }
        });
    };
    return TrackerPage;
}());
TrackerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tracker',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/tracker/tracker.html"*/'<!--\n  Generated template for the TrackerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="no-scroll">\n  \n  <!-- This is the cordova google map -->\n  <div id="map">\n\n  </div>\n</ion-content>\n\n<ion-footer no-border id=\'lower_items\'>\n  <ion-item color="secondary" id=\'rides\' >\n       Driver Arrives in\n      <ion-badge color=\'primary\' item-end>{{duration}}</ion-badge>\n    </ion-item>\n</ion-footer>  \n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/tracker/tracker.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_director_director__["a" /* DirectorProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_activity_activity__["a" /* ActivityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], TrackerPage);

//# sourceMappingURL=tracker.js.map

/***/ })

});
//# sourceMappingURL=2.js.map