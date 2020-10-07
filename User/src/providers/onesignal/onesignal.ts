import { Injectable } from '@angular/core';
import { OneSignal} from '@ionic-native/onesignal';
import { LanguageProvider } from '../../providers/language/language';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
/*
  Generated class for the OnesignalProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OnesignalProvider {

  constructor(public One: OneSignal, public pop: PopUpProvider, public lp: LanguageProvider) {
  
  }


  

  
 sendPush(id){
   // console.log('This is the push id', [id])
    let notificationObj:any = {
      include_player_ids: [id],
      contents: {en: this.lp.translate()[0].picknote},
      };
  
  this.One.postNotification(notificationObj).then( good => {
    console.log(good);
      //alert("Notification Post Success:\n" + id);
    }, error => {
      console.log(error);
      //this.pop.showPimp(error)
      // alert("Notification Post Failed:\n" + JSON.stringify(error));
     // alert("Notification Post Failed:\n" + id);
    });


}
  
}
