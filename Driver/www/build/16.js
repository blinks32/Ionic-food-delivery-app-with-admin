webpackJsonp([16],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorydetailPageModule", function() { return HistorydetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historydetail__ = __webpack_require__(487);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistorydetailPageModule = (function () {
    function HistorydetailPageModule() {
    }
    return HistorydetailPageModule;
}());
HistorydetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__historydetail__["a" /* HistorydetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__historydetail__["a" /* HistorydetailPage */]),
        ],
    })
], HistorydetailPageModule);

//# sourceMappingURL=historydetail.module.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorydetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(153);
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






/**
 * Generated class for the HistorydetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HistorydetailPage = (function () {
    function HistorydetailPage(navCtrl, alert, lp, navParams, settings, eventProvider) {
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.lp = lp;
        this.navParams = navParams;
        this.settings = settings;
        this.eventProvider = eventProvider;
        this.currentEvent = {};
    }
    HistorydetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.eventProvider.getEventDetail(this.navParams.get('eventId'))
            .on('value', function (eventSnapshot) {
            _this.currentEvent = eventSnapshot.val();
            _this.currentEvent.id = eventSnapshot.key;
            console.log(_this.currentEvent.location);
            // if (this.currentEvent.location && this.currentEvent.destination)
            // this.GetRoute(this.currentEvent.location, this.currentEvent.destination);
        });
    };
    HistorydetailPage.prototype.GetRoute = function (location, destination) {
        var source, destination;
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer({ 'draggable': true });
        var mumbai = new google.maps.LatLng(18.9750, 72.8258);
        var mapOptions = {
            zoom: 7,
            center: mumbai
        };
        var map = new google.maps.Map(document.getElementById('dvMap'), mapOptions);
        directionsDisplay.setMap(map);
        //directionsDisplay.setPanel(document.getElementById('dvPanel'));
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
                var distance = response.rows[0].elements[0].distance.text;
                var duration = response.rows[0].elements[0].duration.text;
                // var dvDistance = document.getElementById("dvDistance");
                //  dvDistance.innerHTML = "";
                // dvDistance.innerHTML += "Distance: " + distance + "<br />";
                // dvDistance.innerHTML += "Duration:" + duration;
            }
            else {
                alert("Unable to find the distance via road.");
            }
        });
    };
    HistorydetailPage.prototype.Delete = function (eventId) {
        var _this = this;
        var alert = this.alert.create({
            title: this.lp.translate()[0].c5,
            buttons: [{
                    text: this.lp.translate()[0].c6,
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: this.lp.translate()[0].c7,
                    handler: function () {
                        _this.eventProvider.getEventDetail(eventId).update({
                            hidden: true
                        }).then(function (success) {
                        });
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    return HistorydetailPage;
}());
HistorydetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-historydetail',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/historydetail/historydetail.html"*/'<!--\n  Generated template for the HistorydetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header  no-border>\n  <ion-navbar color="nav-color">\n    <ion-title>historydetail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding text-center class=\'yes-scroll\'>\n  <div class=\'followed-items\'>\n          <ion-list text-center>\n            <div text-center >\n              <ion-item *ngIf=\'currentEvent.name != null && currentEvent.hidden == false\'>\n                  <div *ngIf=\'currentEvent.name == null\'>\n                   \n                            <h2 class=\'date\'><strong><ion-icon name="trash"></ion-icon>{{lp.translate()[0].c2}}</strong></h2>\n                        \n                     \n                     \n                    </div>\n                  <div  > \n                      <ion-grid>\n                          <ion-row>\n                            <ion-col>\n                <h2 color="nav-color" class=\'drive\'><strong><ion-icon name="contact"></ion-icon>{{currentEvent?.name}}</strong></h2>\n              </ion-col>\n              <ion-col>\n                  <button detail-none color="danger" no-lines text-center icon-start ion-item (click)="Delete(currentEvent.id)" >\n                      <ion-icon color=\'nav-color\' name="close"></ion-icon>\n                     Request Payment\n                  </button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n                <h2 *ngIf=\'currentEvent.price != 0\' class=\'price\'><strong><ion-icon name="ios-cash"></ion-icon>{{settings.appcurrency}}{{currentEvent?.price}}</strong></h2>\n                <h2 class=\'date\'><strong><ion-icon name="calendar"></ion-icon>{{currentEvent?.date}}</strong></h2>\n                <h2 class=\'location\'><strong><ion-icon name="locate"></ion-icon>{{currentEvent?.location}}</strong></h2>\n                <h2 class=\'destination\'><strong><ion-icon name="flag"></ion-icon>{{currentEvent?.destination}}</strong></h2>\n             \n                <div id=\'dvMap\' style="width: auto; height: 150px">\n                </div>\n              \n                      </div>\n              </ion-item>\n            </div>\n            </ion-list>\n     \n  </div>\n</ion-content>'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/Driver/src/pages/historydetail/historydetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
], HistorydetailPage);

//# sourceMappingURL=historydetail.js.map

/***/ })

});
//# sourceMappingURL=16.js.map