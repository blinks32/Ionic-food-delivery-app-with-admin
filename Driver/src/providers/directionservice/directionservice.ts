import { Injectable } from '@angular/core';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { EventProvider } from '../../providers/event/event';
import { GeocoderProvider } from '../../providers/geocoder/geocoder';
import { Platform, LoadingController} from 'ionic-angular';
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
  public  pricePerKm : any = 55;
  public  fare : any =  200;
  destinationName: any;
  public time2: any;
  isDriver2: boolean;
  public hasGottenTripDistance: boolean = false;
  public  service : any = new google.maps.DistanceMatrixService();
  constructor(public eProvider: EventProvider, public gCode: GeocoderProvider,  public platform: Platform, public popOp: PopUpProvider) {
   
  }

  calcRoute(name, start, stop, destinationName, isDriver2) {
    this.isDriver2 = isDriver2
    if (!this.platform.is('cordova')){
      start = new google.maps.LatLng(5.488334, 7.5190356)
      this.gCode.locationName = 'Igieduma, Nigeria'
    }

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
     
        this.destinationName = destinationName
        this.name = name
       
        let time = new Date();
        
        var hh = time.getHours();
        var mm = time.getMinutes();
        var ss = time.getSeconds() ;

        
       }



       calcDestRoute(name, start, stop, destinationName,  id) {
       // this.isDriver2 = isDriver2
        if (!this.platform.is('cordova')){
          start = new google.maps.LatLng(5.488334, 7.5190356)
      this.gCode.locationName = 'Igieduma, Nigeria'
        }
    
          this.service.getDistanceMatrix(
            {
              origins: [start, this.gCode.locationName],
              destinations: [destinationName, stop],
              travelMode: 'DRIVING',
              unitSystem: google.maps.UnitSystem.METRIC,
              avoidHighways: false,
              avoidTolls: false,
            }, (response, status) => {
              this.callback2(response, status, id)
            })
         
            this.destinationName = destinationName
            this.name = name
           
            let time = new Date();
            
            var hh = time.getHours();
            var mm = time.getMinutes();
            var ss = time.getSeconds() ;
    
            
           }
    


      callback(response, status) {
        // See Parsing the Results for
        // the basics of a callback function.
        console.log(response, status);
       
    
        if (status == 'OK'){
        
        if (response.rows[0].elements[1].status == 'ZERO_RESULTS' || response.rows[0].elements[1].status == 'NOT_FOUND'){
      
          this.popOp.alertMe('Destination Not Yet Supported. Please Choose Another Destination')
      
        }else{
          let fareTime = Math.floor(response.rows[0].elements[1].duration.value/60) * 5.5
          this.price = Math.floor(response.rows[0].elements[1].distance.value/1000) * this.pricePerKm + this.fare + fareTime;
         
          //if (!this.isDriver2)
          this.time = response.rows[0].elements[1].duration.text;
         // else
        //  this.time2 = response.rows[0].elements[1].duration.text;
         //  document.getElementById("header").innerText = 'Get to Client in ' + this.time;
          
           this.popOp.canDismiss = true;
          // this.eProvider.createHistory(this.name, this.price, 'past', this.gCode.locationName, this.destinationName );
        
    
         console.log(response.rows[0].elements[1].distance.value/1000, response.rows[0].elements[1].duration.value, response.rows[0].elements[1].duration.text)
        }
        }else{
       
          this.popOp.alertMe('One or More Of The Adress Input Is Not On Google Maps. Please Change Location And Try Again.')
        }
      }










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
    
    
          callback2(response, status, id) {
            // See Parsing the Results for
            // the basics of a callback function.
            console.log(response, status);
           
        
            if (status == 'OK'){
            
            if (response.rows[0].elements[1].status == 'ZERO_RESULTS' || response.rows[0].elements[1].status == 'NOT_FOUND'){
          
              this.popOp.alertMe('Destination Not Yet Supported. Please Choose Another Destination')
          
            }else{
              let fareTime = Math.floor(response.rows[0].elements[1].duration.value/60) * 5.5
              this.price = Math.floor(response.rows[0].elements[1].distance.value/1000) * this.pricePerKm + this.fare + fareTime;
             
              //if (!this.isDriver2)
            //  this.time = response.rows[0].elements[1].duration.text;
             // else
              this.time2 = response.rows[0].elements[1].duration.text;
             //  document.getElementById("header").innerText = 'Get to Client in ' + this.time;
                
               this.popOp.canDismiss = true;
              this.eProvider.UpdateTime(this.time2, id);
            
        
             console.log(response.rows[0].elements[1].distance.value/1000, response.rows[0].elements[1].duration.value, response.rows[0].elements[1].duration.text)
            }
            }else{
           
              this.popOp.alertMe('One or More Of The Adress Input Is Not On Google Maps. Please Change Location And Try Again.')
            }
          }
        





    


}
