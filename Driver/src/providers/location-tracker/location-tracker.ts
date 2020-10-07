import { Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform, AlertController } from 'ionic-angular';
import { GeocoderProvider } from '../../providers/geocoder/geocoder';
import { EventProvider } from '../../providers/event/event';
import { ProfileProvider } from '../../providers/profile/profile';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { OnesignalProvider } from '../../providers/onesignal/onesignal';
import { LanguageProvider } from '../../providers/language/language';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
//  CameraPosition,
 // MarkerOptions,
 // Marker,
//  Geocoder,
  LatLngBounds,
  LatLng
 } from '@ionic-native/google-maps';
declare var google: any;
declare var plugin: any;
/*
  Generated class for the LocationTrackerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LocationTrackerProvider {
  public onLocationbarHide: boolean = true;
  public onDestinatiobarHide: boolean = false;
  public lat: any = 0;
  public lng: any = 0;
  public poly: any;
  public tracking_timeout: any;
  public hasTransactionEnded: boolean = true;
  public tracking_timeout2: any;
  public hasTransactionEnded2: boolean = true;
  public startPos: any;
  public client: any;
  public driver: any;
  public speed: number = 50; // km/h
  public marker: any;
  public cars: any = [];
  public car_location: any = [];
  public car_notificationIds: any = [];
  public delay: number = 100;
  public hasRequested: boolean = false;
  public isCarAvailable: boolean = false;
  public uid: any
  public onGpsEnabled: boolean = false;
  isNavigate: boolean =false;
  locations: any;
  location: any;
  public ClearDetection: boolean = false;
  timer1: any;
  map1: GoogleMap;
  public onbar: boolean = false;
  public onbar1: boolean = false;
  public onbar2: boolean = false;
  public onbar3: boolean = false;
  public toggleBtn: boolean = false;
  public onPointerHide: boolean = false;
  mapElement: HTMLElement;
  mapLoadComplete: boolean = false;
  public pan: number = 0;
  public detectCarChange: any;
  public hasDone: boolean = false;
  public hasStart: boolean = false;
  public hasShown: boolean = false;
  public D_lat: any;
  public D_lng: any;
  public canTrack_: boolean = false;
  public canTrack_2: boolean = false;
  public isDestination: boolean = false;
  public userLat: any;
  public userLng:any;
  constructor( private googleMaps: GoogleMaps, public lp: LanguageProvider, public alert: AlertController, public oneS: OnesignalProvider, public ev: EventProvider, public zone: NgZone, public myProf: ProfileProvider, public gcode: GeocoderProvider, public platform: Platform) { }

  loadMap(){
    console.log('map called');
    let mapOptions: GoogleMapOptions = {
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
    this.map1.setCompassEnabled(false)
    this.map1.setTrafficEnabled(false)
    this.map1.setIndoorEnabled(false)
    this.map1.setClickable(false)

  
    // Wait the MAP_READY before using any methods.
    this.map1.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
         alert('called')
          
        this.map1.getMyLocation().then(location =>{
          this.lat = location.latLng.lat;
          this.lng = location.latLng.lng;
          this.AnimateToLoc(this.lat, this.lng)
          console.log('How Ploder Goder ....');
          alert('called again')
        }).catch((error)=>{
          alert(error)
           // this.loadMap();
        })
           
  })
     }


     ResetMe(){
      this.map1.clear();
      this.AnimateToLoc(this.lat, this.lng)
    }



refreshForChangesRemove(){
  
  this.map1.getMyLocation().then(location =>{
    this.AnimateToLoc(location.latLng.lat, location.latLng.lng)
   // alert('refreshed')
  })
}

    showError(title){
      let alert = this.alert.create({
        title: title,
        buttons: [ {
          text: 'Okay',
          role: 'cancel',
          handler: () => {
             this.refreshForChangesRemove();
          }
        },],
        enableBackdropDismiss: false 
      });
      alert.present();
    }
  
  
   ///Animate to user location 
   AnimateToLoc(lat, lng){
    
      console.log('ani to loc')
     this.map1.moveCamera({
      target:  {
        lat: lat,
        lng: lng
      },
      zoom: 15,
      tilt: 0,
      bearing: 0,
      
     }).then(suc =>{
      console.log('camera done');
        this.hasShown = true
         this.map1.setClickable(true);
        // let centerBar = document.getElementById("onbar")
        // centerBar.style.display = 'block'
      this.map1.addMarker({
        title: '',
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEcUlEQVRIS7WVfUxVZRzHf7/nuQx8QZJLEC81MXpZsjSuZOrEc869CDhoZTW16GXiRXvbrCxa/lFuQdqLmE5mMuacq1Z3gxISHPc8B1dopGEMxlTYNZp6s4WUFl2unOdp5+DFc4GL9EdnO9vdOc/9fH+/7+/lIPzPF96Ej7mS5OCIRQIxi3OeZJynAL8iIe0c4BBj7BQAiEiciAK5suy8JsR7lJBsrutXgJB2iug3QBwgRej6A4TSWQjQhkKUNWva0YlExgk4HI6o2bGxOwQhLwEAQyHeHxZCbWlpGbYCJEmyEUJyAaAMAZYj5zuHAV4fey5MwIDfEhf3Jdf1FcRmK1VV9bPJ0r8uiE6n8xkQYi8ANMTb7Ws8Ho8eCiZMwCVJu3Uh1tkIWdGsaa1Tqf/iwicfjNYDF6MCA3dyxCYuRJWmaa+NEzA854heQCxWVfXTqcCz1m5Wfk5fVT3zSt+lub7aVbZ/fl8pEGsAMUdV1W8NRigDlCSpjRJyVWXMNQVbwID3pRXV9KflzDF6aM7pgydmnDuanxj0fU0QicrY0lGBXElayAk5gULkezXtiPEiLy8veZjSWPXw4bNjszHh6UU1/ckj8NB9T8dHx5PPNeyghHi4EAs0TeswM3DK8lbO+SaBaDe6YNHDa5Mu3P1o7bXouBm3d9cVn6zb2xUSMeFzi2r6U8LhMX/7A2m+r7bcdb5+T2Bw8DJSWsEYKzcFFEWpF0LM1DRNdjxRGjeQuqTZN//ZbCOytDP13Um+hjU/evZ1Zj29Wem744YtocgNeEZXdWXXwbffMniSJB0jhPgZY4+ZApIk/WAjpHeY83W/ZK4+4svemGNNPaX3m+64/tObfkvM3hfyfBT+lz+Q0XkDbjqiKB4ASDHqECbgZeypee6KD3uyN7wcjI6PsorEn2/TL6csouYzPuJ7TAh+YCTy0DVOwClJhwQhsxhjknEo012+qydr/fND0xNtVhHr75ir/kBGR3Vl1xh4yCJK6UVVVR83M3Apyju6rr8SKrLxbF5J+Z6ehe7S4PRbx4mY8FMTwwsKCqKDQ0MDgPiuqqoVpoAsyw6CeFIArGSMNYZSvW99eVWvw+22isT8GRlu+u90PgJC1CEh93u93s7RQXMpynEOEGCMydZByyzZWnU2+wV3cFqCLeYPfyDjp+rKrv3hnlvsNwa2FRF1TdOWWScZcmV5OUdsAcTnVFU9YC3avRu27bqULpeknmn6eBI4uGS5VCB+IgCWMsaOhQmYtZCkSkHIRiJE/tj9vrRg9UOtjV98H2lHKYqiCF1vpJRWehl7c8Jtaux4SsjnAFCIQrzo1bT9U9hL6JJlt875bkJpbbzdXhxxXV9vMRsibieIr3IhvgOADxISEpo8Hk/QGr3ZLcFgga7rb1BCFiPA9tl2+xYrfJxFYcPidC4DIbYBwBKu64MCsYMScsE4o3OeSglZAADTjCAQsSzk+VgLb/bRN1p4PiIWAkAWAtxmAka+ze2IWG+0YqS6TJrBZH/6L+/+BedwGDdvfYzpAAAAAElFTkSuQmCC",
        position:  {
          lat: lat,
          lng: lng
        },
      })
      .then(marker => {
        this.mapLoadComplete = true
        this.marker = marker
        console.log('marker added')
        this.map1.addCircle({
          'center':  {
          lat: lat,
          lng: lng
        },
          'radius': 3000,
          'strokeColor' : '#A0BAE7',
          'strokeWidth': 2,
          'visible': true,
          'fillColor' : '#a6cfff2c'
      }).then(circle=>{
        setTimeout(()=>{
          circle.setRadius(0);
          // this.startChecking()
            }, 1500)
      });
     })
  
    })
  
  }

showAlertNormal(title, subtitle){
  let alert = this.alert.create({
    title: title,
    subTitle: subtitle,
    buttons: [ {
      text: this.lp.translate()[0].f6,
      role: 'cancel',
      handler: () => {
     
      }
    },],
    enableBackdropDismiss: false 
  });
  alert.present();
}

startTracking(){
  console.log('actually tracking')
 this.tracking_timeout = setTimeout(() => {
if (this.canTrack_) {
  let mapOptions: GoogleMapOptions = {
    camera: {
    }
  };
  
 // this.map1 = this.googleMaps.create(document.getElementById("op"), mapOptions);
  this.map1.getMyLocation().then(location =>{
    if (this.hasTransactionEnded){
    this.lat = location.latLng.lat;
    this.lng = location.latLng.lng;
   // alert('Tacking Driver.....................');
    this.oneS.UpdateCurrentLocation(location.latLng.lat, location.latLng.lng);
    this.startTracking();
// this.map1.getMyLocation().then(location =>{
  if (this.driver){
    let latLng = new LatLng(this.lat, this.lng)

    let user_latLng = new LatLng(this.userLat, this.userLng)
    this.driver.setPosition(latLng);
   // driver.setAnchor(0.5, 0.5);
    var heading = google.maps.geometry.spherical.computeHeading(latLng, this.driver.getPosition());
    this.driver.setRotation(heading);
 
   //  alert(this.lat)
     
     this.client.setPosition(user_latLng)
    // var mvcArray = this.poly.getPoints();
 
    // mvcArray.setAt(latLng, user_latLng);
    
 
     let arrayOfLatLng = [ new LatLng(this.lat, this.lng), new LatLng(this.userLat, this.userLng)];
     
         let bounds = new LatLngBounds(arrayOfLatLng);
     
         let center = bounds.getCenter();
     
         var mapElement = document.getElementById('map');
         var mapDimensions = { 
             height: mapElement.offsetHeight,
             width: mapElement.offsetWidth
         };
     
        
         var zoom = this.getBoundsZoomLevel( bounds, mapDimensions );

         //this.map1.setCameraTarget(new LatLng(this.lat, this.lng))
 
       this.map1.moveCamera({
               target: center,
               zoom: zoom,
             }).then(suc=>{
               
              this.isNavigate = true;
 
            
             })

            }
 
    }
  })
}
}, 2000);                                                                                                                                                 
}
  

 
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
setMarkers(passengerlocation)
{
//this.marker.clear()
  //driver marker
  console.log('marker set')
  if (this.platform.is('cordova')){
   
    this.map1.getMyLocation().then(location => {        

      let arrayOfLatLng = [ new LatLng(passengerlocation[0], passengerlocation[1]), new LatLng(this.lat, this.lng)];

     let bound = new LatLngBounds(arrayOfLatLng);


    //  polyline.setMap(map);

      let center = bound.getCenter();

  var mapElement = document.getElementById('map');
  var mapDimensions = { 
      height: mapElement.offsetHeight,
      width: mapElement.offsetWidth
  };

 
  var zoom = this.getBoundsZoomLevel( bound, mapDimensions );
    
  this.map1.moveCamera({
          target: center,
          zoom: zoom,
        }).then(suc=>{
          
         this.isNavigate = true;
       
        })

    
  this.driver = this.map1.addMarker({
    title: '',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKMSURBVFhH7ddNiE5RHMfxZyJvY+ElCyWlyWysNAt2lBopSkpSUsrClEiUKKXYoJnFkCiZmoUkskJ5L1Fq8ppCGgmFBVJe8jbz/d3u//a/x7mj7jNPV5lffeo5b8+cmXvOPWdqI/nfMg27MDspVZy9GMBTjFdFlZmHn9CEOlUxXJlc0lFoMprUorQuNAl/zSjswUfoCxvpHTajMPsQG9hIG/BHtOA+ITZA9GdfgbYC2kW+/xE8CerMNVxPP7/CaOQyF+Gg21jryhcQSzu+wvodQhOWujrzHGMwx9UtQS6r4Qd9hwYoPbD6g9ju7MZnWLtNxHIf1ianYbkL1R1OSi76Uj/oGCwT8RK+PaYXfiLKDvg+LzAOygGo7nFScjkOP2g+fG7At8d0IIzePWG/i9Cj3ZaWtR6bkeUMrPN7hL9h2cnorxrrG9ImyHIF1nBVFUHKTkZ5g1h/bzGy9MEaTqoiSD2TeYZYf28VsjyANWj3hKlnMo8Q6++tQZabsIazqghSz2S0g2L9veXIch7W8FAVQcpORhvBvxCLLESWE7AGbTWdrj5lJzMTYb/fuAO/TmchSzf8gPXwuQXfHrMRYVbC9/mFZVA0edXplpDLJvhBWnS6UigLYJemobxGK3z8USJ6hVi0a1V3OSm5aJ/7QbIVely2AHWqz4CPTvtLsDF+QlMQ3gS0NhUdCR+gOv2cXGLP9gt03Fs59hiUCbArgdiEulyd+QEt1nVpWY8tt14s9xAONnpMOnFPFfC7Ud6i6NFqAt/Sz+cQjQ61oS5Yw00XqxYUZjp2QhfrMvzj0udYH9E6mYqGZSz0wtRE+qETu7JsgSail5peB5VGV1ctzv1J6R9I5f/WjqTBqdUGAY1g4DFzQ5RkAAAAAElFTkSuQmCC',
    animation: 'DROP',
    position: {
      lat: location.latLng.lat,
      lng: location.latLng.lng
    }
  }).then(marker =>{
     this.driver = true
     this.driver = marker
  });

})

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
  let myIcon;

  if(!this.isDestination){
myIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE/0lEQVR4Xu2aZ+i3UxjHP4+9iYx4ISSREdlblJHx4OnJ5gXZJUKRUBQhygjJlpGV7K3M7C3Ze2Uke/bRuet0+41zj9+5X/zuU/83v/91zvle33Nd17mu69wzmPIxY8r1pyegt4ApZ6B3gSk3gD4I9i7Qu8CUM9ClC6wDbAMsDnwG3AW8m/s8uiBgSeBKYIeSsn8DlwJHAb/lIiI3AYsCTwGrjlDwHmBHQEImPnITcCFwWIJWhwCXJMg1FslJwILAN8B8CahfA9ZIkGsskpOAjYEnKiBeBPixgnwt0ZwEGPEfqIByaeCrCvK1RHMSsALwXiLK78P1+E+ifG2xnAQI8llg3QS0FwOHJsg1FslNwCbAo8BcI5AbKA2AXzTWLmGB3AQcCJwFLDYC2/uA1+D9Cfgbi+QiYE7gCmDfRMT6/nHA2YnytcVyEXA6cEINlLsBt9WYlzwlBwFG/7eD33uyKXsWcp8CKwK/J2tUUTAFTMUl/yd+CnAy8AdwE7B3woJXA/sFuV2B2xPm1BLJQYDJj0nQfcBzwIkJSPcEzgGWDXHg2IQ5tURyEPACsDZwEfBdBQIsmjYDromsoZaSoyblIOAlYC3AStAML9UCvAq3AK4D9mld87BgT8CkmI3W7S2gd4EpjwFegeb+7wCzKgTBzwEbqB+GKnIi3pojCMbAT6tAwA0T0bi06KQJmCdcZVsB64VeQFwJfgR8DawGzB9h8/TtHTwZukjmEhMZkyLAR4/Dgd0BW+HDxpHABUBxUwyT0w2uBWyUfNImE20TYOFyLrBzCaQKPA5sCKwU/W8YAY8AdpElMm6eWBRdBpwEfNsGEW0SYLZmL3+BAEzzvjwUQG+G3+4Ftk0gwFrAGGBnePtQQPmSZF/BYbfIourhpiS0RcDBwTwLcKa7VnR/lgBWJSCeruWcGlWTVpd7ATc3IaENAjTTZ4KpqqCgLHoGjSYEFOtpCdcH6/gV2AB4pS4JbRBwB7BTePQw2nsyw0YbBLi2VaJxQpfQDbbuggDL26WC8l53Xlv6fTG8843u8fDhc7uEGLAHcGNp7szS3F2AZYKMbTMfU22le60mjyYW8AGw/IidDF6eeDy8yuKO0LBbwBMtB7gzgOPHaGb7TVzJowkBVwE+X2mORn4jfWwBBsLnS0g2D6Y7R/h9EAFvhOKpHECPAA6I1vOJ3X09+eLJbX/gy2TtExuU49bzo4aDgJcBHz5+GjNBU7ZL7Gk5z4aH7TLnqoikjEt2tgQeDDHgzuCG43AO/H8TCygWXC5EYT91eRqYDXxcC03apDjf+Dmk10WekbZCJNUGAS6nG9wNLBSetH3QOH/EdVgZKLApYIe5iPh+RmN1qQXUHm0RIAD7fkbuVQKaX8Kjxi3AQ8APA1AeHfzYgGfhEw+xrR4+lzEzjD+YMND5mxbXaLRJgEDmBY4BbGPHVd9fwOvAi8BbocY3WN0aiiVTaE9SdzLjU/H1gSVK2vnBxHnAmQmxJomYtgkoNtUV9FX/NgKKqJ8EqiTkK5E5hleo6fUgS6qz7n9zJkVADMiujlHblHVNYOVw0nMPQG0WaS/A7tGrIcU245vYU3kOAgadjvsuHKpFewZ+OmeO7+lO/KuQcqCpbT4tTCwyw8eClbSwZLUlurKAAqW5uwmQ97jJUfbRNQHZFS5v2BPQ+RF0DKC3gI4PoPPtewvo/Ag6BtBbQMcH0Pn2/wLJ+fdBzNOruQAAAABJRU5ErkJggg=='
  }else{
myIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA9UlEQVR4Xu3ZQQrDMAwF0eb+h253bRKIMWQcKLyujaJ+rBmBt9f93/tUYrtf8rkKRbMCcAOOCRS36rEZKJo9j8BjzU9+aPgfBTCZ4uiYGxCEuLKEERiliwHB3cOAIMSVJTAAAwYJgGAwfCAYhLiyBAiCIAheJ8ACAX1YIAhxZQkWYAEWYIHLBGgwwK+nMU9jnsYOCRRcCSZzrkTRLAZgAAZgwD6BgitzBAtOFc2CIAiCIAiC4C6BAqwB3+dKFM2yAAuwAAuwAAv8EijMMuew4FTRLA3SIA3SIA3SIA1+EyjUGhh+rkTRrD3AHmAPsAfYA/51D/gA8LFAQcP3ZkMAAAAASUVORK5CYII='
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
  }).then(marker =>{
     this.client = true
     this.client = marker
  })

  
  
   

  }
 
  
 
}






getBoundsZoomLevel(bounds, mapDim) {
  
      var WORLD_DIM = { height: 256/1.7, width: 256/1.7 };
      var ZOOM_MAX = 14;

  
      var ne = bounds.northeast;
      var sw = bounds.southwest;
  
      var latFraction = (this.latRad(ne.lat) - this.latRad(sw.lat)) / Math.PI;
  
      var lngDiff = ne.lng - sw.lng;
      var lngFraction = ((lngDiff < 0) ? (lngDiff + 360*1.16) : lngDiff) / 360*1.16;
  
      var latZoom = this.zoom(mapDim.height, WORLD_DIM.height, latFraction);
      var lngZoom = this.zoom(mapDim.width, WORLD_DIM.width, lngFraction);
  
      return Math.min(latZoom, lngZoom, ZOOM_MAX);
  }
  
  
   latRad(lat) {
  
    var sin = Math.sin(lat * Math.PI / 180);
    var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
    return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
  }
  
   zoom(mapPx, worldPx, fraction) {
    return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
  }


  
}





