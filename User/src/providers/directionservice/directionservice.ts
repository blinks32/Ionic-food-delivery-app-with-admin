import { Injectable } from '@angular/core';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { EventProvider } from '../../providers/event/event';
import { GeocoderProvider } from '../../providers/geocoder/geocoder';
import { Platform, ModalController} from 'ionic-angular';
import { NativeMapContainerProvider } from '../../providers/native-map-container/native-map-container';
//import firebase from 'firebase/app';
import { LanguageProvider } from '../../providers/language/language';
declare var google;
/*
  Generated class for the DirectionserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DirectionserviceProvider {
  public price: any;
  public time: any;
  public canDismiss: boolean = false;
  public name: string;
  public id : any;
  public highPrice: any;
  public locationName: any;
  public hasGottenTripDist: boolean = false;
  public calculateBtn: boolean = false;
  public  pricePerKm : any;
  public  fare : any ;
  public time2: any;
  distance: any;
   public rate:any = 2;
    public extra:any = 50;
    public fix:any = 65;
    public above:any = 110;
    public next:any = 55;
    public min:any = 3;
    public cons:any = 4;
    public mainFare: any;
  appPrice: any;
  public canUpdateDestination: boolean = false;
  public isDriver: boolean = false;
  destinationName: any;
  public  service : any = new google.maps.DistanceMatrixService();
   public duration: any;
  constructor( private eProvider: EventProvider, public lp: LanguageProvider, public modalCtrl: ModalController, public platform: Platform, public cMap: NativeMapContainerProvider, public gCode: GeocoderProvider, public popOp: PopUpProvider) {
    console.log(this.fare)
  }

  calcRoute(stop, destinationName) {
   
      let start = new google.maps.LatLng(this.cMap.lat, this.cMap.lng)
       this.service.getDistanceMatrix(
         {
           origins: [start, this.gCode.locationName],
           destinations: [destinationName, stop],
           travelMode: 'DRIVING',
           unitSystem: google.maps.UnitSystem.METRIC,
           avoidHighways: false,
           avoidTolls: false,
         }, (response, status) => {
           this.callback(response, status)
         })
   
  }

  callback(response, status) {
    // See Parsing the Results for
    // the basics of a callback function.
    console.log(response, status);
    
  
   
    if (status === 'OK'){
      // loading.present();
    if (response.rows[0].elements[1].status == 'ZERO_RESULTS' || response.rows[0].elements[1].status == 'NOT_FOUND'){
      this.popOp.showPimp('No directions by Driving Found For That Route. Distance May be too far.')
      this.popOp.hideLoader();
      this.cMap.canShowchoiceTab = false;
     // this.cMap.norideavailable = true
    }else{
    
      let duration = Math.round(response.rows[0].elements[1].duration.value/60)
      let distance = Math.round(response.rows[0].elements[1].distance.value/1000)
      this.duration = response.rows[0].elements[1].duration.text
      this.price = (this.fare + distance + duration) * this.pricePerKm
      console.log('This is the duration' + duration)
      console.log('This is the distance' + distance)
    

      
     console.log(response.rows[0].elements[1].distance.value/1000, response.rows[0].elements[1].duration.value, response.rows[0].elements[1].duration.text)
    }
  
  }

  } 


  mcalcRoute(stop, destinationName) {
   
    let start = new google.maps.LatLng(this.cMap.lat, this.cMap.lng)
     this.service.getDistanceMatrix(
       {
         origins: [start, this.gCode.locationName],
         destinations: [destinationName, stop],
         travelMode: 'DRIVING',
         unitSystem: google.maps.UnitSystem.METRIC,
         avoidHighways: false,
         avoidTolls: false,
       }, (response, status) => {
         this.mcallback(response, status)
       })
 
}

mcallback(response, status) {
  // See Parsing the Results for
  // the basics of a callback function.
  console.log(response, status);
  

 
  if (status === 'OK'){
    // loading.present();
  
  
    let duration = Math.round(response.rows[0].elements[1].duration.value/60)
    this.distance = Math.round(response.rows[0].elements[1].distance.value/1000)
    this.duration = response.rows[0].elements[1].duration.text
    this.price = (this.fare + this.distance + duration) * this.pricePerKm
    console.log('This is the duration' + duration)
    console.log('This is the distance' + this.distance)
    

    
   console.log(response.rows[0].elements[1].distance.value/1000, response.rows[0].elements[1].duration.value, response.rows[0].elements[1].duration.text)
  
  
}

} 



}
