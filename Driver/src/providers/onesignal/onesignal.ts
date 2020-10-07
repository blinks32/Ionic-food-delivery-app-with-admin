import { Injectable } from '@angular/core';
import { OneSignal} from '@ionic-native/onesignal';
import { EventProvider } from '../../providers/event/event';
import { Platform } from 'ionic-angular';
import { LanguageProvider } from '../../providers/language/language';
import { ProfileProvider } from '../../providers/profile/profile';
/*
  Generated class for the OnesignalProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OnesignalProvider {
 public notif_id: any;
 public isInDeepSh_t: boolean = true;
 public isInDeepSh_t2: boolean = true;
 public ID: any;
 phone: any;
 picture: any;
 rating: any;
  constructor(public One: OneSignal, public ph: ProfileProvider, public lp: LanguageProvider, public eprov: EventProvider, public platform: Platform) {
    if (!this.platform.is('cordova')){
     this.notif_id = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
    }else{
      this.One.getIds().then( success => {
        this.notif_id = success.userId
      })
    }

    console.log('checked onesignal')

   
  }

  ionViewLoaded(){
   
  }

  
 sendPush(id){
  this.One.getIds().then( success => {
   console.log(success.userId);

    let notificationObj:any = {
      include_player_ids: [id],
      contents: {en: this.lp.translate()[0].f6},
      };
  
  this.One.postNotification(notificationObj).then( success => {
      console.log("Notification Post Success:", success);
    }, error => {
      console.log(error);
      alert("Notification Post Failed:\n" + JSON.stringify(error));
    });

  })
}


sendMessage(id, message){
  this.One.getIds().then( success => {
   console.log(success.userId);

    let notificationObj:any = {
      include_player_ids: [id],
      contents: {en: message},
      };
  
  this.One.postNotification(notificationObj).then( success => {
      console.log("Notification Post Success:", success);
    }, error => {
      console.log(error);
      alert("Notification Post Failed:\n" + JSON.stringify(error));
    });

  })
}




UpdateInfo(lat, lng, car){
  this.ph.getUserProfile().on('value', userProfileSnapshot => {
    this.phone = userProfileSnapshot.val().phoneNumber;
    this.picture = userProfileSnapshot.val().picture;
    this.rating = userProfileSnapshot.val().rating;
  
  if (this.platform.is('cordova')){
    if (this.platform.is('browser')){
      if (lat != 0)
      this.eprov.PushCurrentLocation(lat, lng, '45363754646874277492442', car , this.phone, this.picture, this.rating)
    }else{
  this.One.getIds().then( success => {
  this.notif_id = success.userId
  if (lat != 0)
  this.eprov.PushCurrentLocation(lat, lng, success.userId, car , this.phone, this.picture, this.rating)
 
  })
}
  }else{
    console.log()
    console.log('updated', lat, lng, this.notif_id, car , this.phone, this.picture, this.rating)
    if (lat != 0)
    this.eprov.PushCurrentLocation(lat, lng, this.notif_id, car , this.phone, this.picture, this.rating)
  }

})
}

UpdateCurrentLocation(lat, lng){
  if (this.isInDeepSh_t)
  this.One.getIds().then( success => {
  this.notif_id = success.userId
  if (lat != 0)
  this.eprov.UpdateLocation(lat, lng, success.userId)
  })
}

  
}
