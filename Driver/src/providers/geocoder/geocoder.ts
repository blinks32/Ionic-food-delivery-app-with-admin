import { Injectable, Injector } from '@angular/core';
import { Platform } from 'ionic-angular';
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
  public geocoder: any = new google.maps.Geocoder; b
  
  constructor(protected injector: Injector, public platform: Platform){

  }


  Geocode(address) {
    
    this.geocoder.geocode( { 'address': address}, (results, status) => {
      if (status == 'OK') {
       var position = results[0].geometry.location
       this.lat = position.lat();
       this.lng = position.lng();
       //this.pop.locatePosition(this.lat, this.lng)
      } else { 
       // alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  } 
 

  Reverse_Geocode(lat, lng, map, driverMode){
    
    let latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};
    this.geocoder.geocode({'location': latlng}, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
         
          this.locationName = results[0].formatted_address;
          // this.cMap.locationName = this.locationName
        //  document.getElementById('locationButton').innerText = this.locationName
          console.log(this.locationName)
          }else{
        
          }
         // window.alert('No results found');
        
      } else {
       // window.alert('Geocoder failed due to: ' + status);
      }
    });

  }

}
