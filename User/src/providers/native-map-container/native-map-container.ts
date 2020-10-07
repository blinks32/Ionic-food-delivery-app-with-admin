import { Injectable, NgZone } from '@angular/core';
import {
GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsEvent, LatLng,
  //  CameraPosition,
  // MarkerOptions,
  // Marker,
  //  Geocoder,
  LatLngBounds
} from '@ionic-native/google-maps';
import { AlertController, Platform, ToastController } from 'ionic-angular';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { interval } from 'rxjs/observable/interval';
import { timer } from 'rxjs/observable/timer';
import { GeocoderProvider } from '../../providers/geocoder/geocoder';
import { ProfileProvider } from '../../providers/profile/profile';
import { SettingsProvider } from '../../providers/settings/settings';
declare var google: any;
declare var plugin: any;
/*
  Generated class for the NativeMapContainerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NativeMapContainerProvider {
  public onLocationbarHide: boolean = true;
  public onDestinatiobarHide: boolean = true;
  public lat: any;
  public lng: any;
  public startPos: any;
  public client: any;
  public driver: any;
  public CARS: any = [];
  public pause: boolean = true;
  public shove: boolean = true;
  public speed: number = 50; // km/h
  public marker: any;
  public canMess: boolean = true;
  public cars: any = [];
  public car_location: any = [];
  public car_notificationIds: Array<any>;
  public delay: number = 100;
  public hasRequested: boolean = false;
  public isCarAvailable: boolean = false;
  public uid: any
  public norideavailable: boolean = false;
  public canShowchoiceTab: boolean = false;
  public actual_Lat: any;
  public noGps: boolean = false;
  public actual_Lng: any;
  public isLocationChange: boolean = false;
  public onGpsEnabled: boolean = false;
  isNavigate: boolean =false;
  locations: any;
  location: any;
  public executiveStance: any = 'none';
  public tricycleStance: any = 'none';
  public standardStance: any = 'none';
  timer1: any;
  public closeDrivers: any = [];
  map: GoogleMap;
  public mapLoadComplete: boolean = false;
  public driverCarType: number = 0;
  choseCar: boolean = false;
  public toggleNav: boolean = true;
  public isClear :boolean = false;
  public onbar: boolean = false;
  public driver_Point: any;
  public classic: boolean = false;
  public smallcar: boolean = false;
  public pool: boolean = false;
  public onbar1: boolean = false;
  public onbar2: boolean = false;
  public onbar3: boolean = false;
  public canShow:  boolean = true;
  public toggleBtn: boolean = false;
  public onPointerHide: boolean = false;
  public userPos: any;
  public stopMovingUserDestination: boolean = false;
  public stopMovingUsertoDriver: boolean = false;
  public selected_destination_bar: boolean = false;
  mapElement: HTMLElement;
  public pan: number = 0;
  NotifyTimes: number = -1;
  canCheck: boolean = true;
  public isDriverAvailable: boolean = false;
  public detectCarChange: any;
  public detectUserChange: any;
  user_Point: any;
  public does: boolean = true;
  public carMarker: any = []
  public ClearDetection: boolean = false;
  public hasDone: boolean = false;
  public hasStart: boolean = false;
  public hasShown: boolean = true;
  public D_lat: any;
  public hasShow: boolean =  true;
  public car: any;
  public started: boolean = false;
  public showDone: boolean = false;
  public hasbooked: boolean = false;
  public driverPrice: any;
  public locationChange: boolean = true;
  public hasAdded: boolean = false;
  public hasCompleted: boolean = true;
  public isDestination: boolean = false;
  public CloseCars: any = [];
  public hidelocator: boolean = true;
  myTime: any;
  id: any;
  ready: boolean = false;
  public D_lng: any;
  constructor( private googleMaps: GoogleMaps, public toastCtrl: ToastController, public alert: AlertController,  public settings: SettingsProvider, public zone: NgZone, public myProf: ProfileProvider, public gcode: GeocoderProvider, public platform: Platform) {
    if (!this.platform.is('cordova')){
    this.lat = 5.4966964;
    this.lng = 7.5297323;
    }
  }

 ///Start the cordova map
  loadMap() {
    //console.log('map called')
    
    
    let lat;
    let lng;
    let zoom;
      lat = 5.4982219
      lng = 7.5019607
      zoom = 6
     
    
    
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: lat,
          lng: lng
        },
        zoom: zoom,
        tilt: 0
      }
    };

    if (!this.platform.is('cordova')){
      this.lat = 5.4966964;
      this.lng = 7.5297323;
      this.gcode.Reverse_Geocode(this.lat, this.lng)
      console.log('move ended 2')
    }



    if (this.platform.is('cordova')){
    this.map = this.googleMaps.create(document.getElementById("map"), mapOptions);
    }else{
      
    }
  //   if (!this.platform.is('browser')){
  //   plugin.google.maps.environment.setEnv({
  //     'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyC-bynE-7w6u9N7yC1Y1S-e1CXQvsiO2cA',
  //     'API_KEY_FOR_BROWSER_DEBUG': ''
  //   });
  // }
    // Wait the MAP_READY before using any methods.
    if (this.platform.is('cordova')){
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        //console.log('Map is ready!');
        this.hasStart = true;
        this.map.setTrafficEnabled(false)
        this.map.setIndoorEnabled(false)
        this.map.setClickable(false)
        this.map.setCompassEnabled(false)

        this.map.getMyLocation().then(location => {
          console.log(location.latLng);
           //alert(location.latLng.lat)
            this.location = location;
            this.lat = location.latLng.lat
           this.lng = location.latLng.lng
            this.gcode.Reverse_Geocode(location.latLng.lat, location.latLng.lng)
            this.userPos = new google.maps.LatLng(location.latLng.lat, location.latLng.lng)
         
        }).catch(er => {
         this.showError('No GPS signal. Enter address or enable location services.')
         
        }) 

      });
    }
  }


  //check if gps is available by trying to getlocation info which automatically handles everything
  checkGps(){
   let kush = setInterval(() => {
     // this.map = this.googleMaps.create(document.getElementById("op"), mapOptions);
      this.map.getMyLocation().then(location =>{
        //console.log('location now on')
        this.loadMap();
        clearInterval(kush)
      })
    }, 2000);
    
  }

  showError(title){
    let alert = this.alert.create({
      title: title,
      buttons: [ {
        text: 'Okay',
        role: 'cancel',
        handler: () => {
          this.checkGps();
        }
      },],
      enableBackdropDismiss: false 
    });
    alert.present();
  }



//Start the map touch detection
 PumpControls(){

 this.map.on(GoogleMapsEvent.CAMERA_MOVE_START).subscribe(start =>{
    this.hidelocator = false;
    this.pause = false;
 if (!this.hasRequested){
 // this.map.refreshLayout();
    // let centerBar = document.getElementById("onbar").style.display = 'none'

   // let location = document.getElementById("location").style.marginTop = '-140px'
    
    //this.onDestinatiobarHide = false

    clearTimeout(this.timer1);
    

   // let bottomBar1 = document.getElementById("bar2").style.display = 'none'

   }
   
       
  });

  this.map.on(GoogleMapsEvent.CAMERA_MOVE_END).subscribe(start =>{
    
    this.pause = true;
  //Check if the user has already booked a ride
   if (!this.hasRequested){
      
      if (this.canCheck && this.ready){
        this.canCheck = false
        //console.log('move ended')
        
      }
   //   this.checkForDriversAroundUser()
      
     

      
        if (!this.platform.is('cordova')){
          this.lat = 5.4334;
          this.lng = 7.4922;
          this.gcode.Reverse_Geocode(this.lat, this.lng)
          console.log('move ended 2')
        }else{
          if (this.isLocationChange){
        let center = this.map.getCameraPosition();
        this.lat = center.target.lat;
        this.lng = center.target.lng;
        this.gcode.Reverse_Geocode(this.lat, this.lng)
          }else{
            let center = this.map.getCameraPosition();
            let lat = center.target.lat;
        let lng = center.target.lng;
        this.gcode.Reverse_Geocode(lat, lng)
          }
  
        }

     

      }
    
     
  });

  }
  
  
}





