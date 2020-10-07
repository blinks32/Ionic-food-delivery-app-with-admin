import { Injectable } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import { PopUpProvider } from '../pop-up/pop-up';
declare var google;
/*
  Generated class for the GeocoderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GeocoderProvider {
  public locationName: any;
  public lat: any;
  public lng: any;
  public place: any;
  shortName: any;
  public destinationSetName: any;
  public locationChange: boolean = true;
  public geocoder: any = new google.maps.Geocoder;
  dismissLoader: any;
  
  constructor(public platform: Platform, public load: LoadingController){
   
  }
  


  Geocode(address) {
    
    this.geocoder.geocode( { 'address': address}, (results, status) => {
      if (status == 'OK') {
       var position = results[0].geometry.location
       this.lat = position.lat();
       this.lng = position.lng();
       //this.pop.locatePosition(this.lat, this.lng)
       console.log(this.lat)
      } else {
       // alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }


  
 

  Reverse_Geocode(lat, lng){
     this.presentLoader('')
    let latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};
    this.geocoder.geocode({'location': latlng}, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
         
          if (this.dismissLoader)
           this.hideLoader()
           
           console.log(results[0].address_components[0].short_name)
          //document.getElementById("location").innerText = results[0].formatted_address;
          this.locationName = results[0].formatted_address;
          this.shortName = results[0].address_components[0].short_name
        }
      }

    });
  }


  
presentLoader(message) {
  this.dismissLoader = this.load.create({
    content: message
  });
  this.dismissLoader.present();
  console.log('sdffsfsfsfs')
}

hideLoader(){
  this.dismissLoader.dismiss();
  this.dismissLoader = null
  //this.presentLoader = false;
  console.log('sdffsfsfsfs')
}




  Simple_Geocode(lat, lng){
    
    let latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};
    let result;
    this.geocoder.geocode({'location': latlng}, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          
         result = results[0].formatted_address
          console.log(result)
          this.place = result
        }
      }
    });
   
    return result
  }

}
