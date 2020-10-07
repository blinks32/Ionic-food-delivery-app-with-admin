import { Injectable} from '@angular/core';
import { AlertController, ModalController, LoadingController, Loading, NavController, Platform } from 'ionic-angular';
import { NativeMapContainerProvider } from '../../providers/native-map-container/native-map-container';
import { ProfileProvider } from '../../providers/profile/profile';
import { ActivityProvider } from '../../providers/activity/activity';
import firebase from 'firebase';
 

import { LanguageProvider } from '../../providers/language/language';


// import { RatePage } from '../../pages/rate/rate';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the PopUpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PopUpProvider {
  public onRequest: boolean = false;
  public mapComponent: any;
  public canDismiss: boolean = false;
  public calculateBtn: boolean = false;
  public price: number;
  public allowed: boolean = true;
  public uid: any;
  public hasCleared: boolean = false;
  public dismissLoader: any;
  public currency: any;
  toast: any;

  constructor( public act: ActivityProvider, public platform: Platform, public lp: LanguageProvider, private toastCtrl: ToastController, public cMap: NativeMapContainerProvider,  public alert: AlertController, public ph: ProfileProvider, public load: LoadingController) {
   
  }
   
  // get navCtrl(): NavController {
  //   return this.injector.get(NavController);
  // }

showAlertNormal(title, subtitle, network){
  let alert = this.alert.create({
    title: title,
    subTitle: subtitle,
    buttons: [ {
      text: this.lp.translate()[0].retrynew,
      role: 'cancel',
      handler: () => {
        if (network){
          this.clearAll(this.uid, true);
          }
      }
    },],
    enableBackdropDismiss: false 
  });
  alert.present();
}


showAlert(title, subtitle){
  let alert = this.alert.create({
    title: title,
    subTitle: subtitle,
    buttons: [ {
      text: this.lp.translate()[0].accept,
      role: 'cancel',
      handler: () => {
      this.cMap.map.setClickable(true)
      }
    },],
    enableBackdropDismiss: false 
  });
  alert.present();
}


presentSimpleLoader(message) {
  let loading = this.load.create({
    content: message
  });

  loading.present();
console.log('FDFFFDFDF')
  let myInterval = setTimeout(() => {
    loading.dismiss();
 
    clearTimeout(myInterval)
    
  }, 500);
}



SmartLoader(message) {
  let loading = this.load.create({
    content: message
  });

  loading.present();
 console.log('dfffdfddggd')
  let myInterval = setInterval(() => {
  
      loading.dismiss();
      clearInterval(myInterval)
    
  }, 500);
}


presentToast(message) {
  let toast = this.toastCtrl.create({
    message: message,
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}


showToast(message){
  this.toast = this.toastCtrl.create({
    message: message,
    position: 'bottom',
    duration: 2000
  });

  this.toast.present();
}

hideToast(){
this.toast.dismiss();
}



showPomp(title, message ){
  let alert = this.alert.create({
    title: title,
    subTitle: message,
    buttons: [ {
      text: this.lp.translate()[0].accept,
      role: 'cancel',
      handler: () => {
        this.clearAll(this.uid, true);
      }
    },],
    enableBackdropDismiss: false 
  });
  alert.present();
}


showPimp(title ){
  let alert = this.alert.create({
    title: title,
    buttons: [ {
      text: this.lp.translate()[0].accept,
      role: 'cancel',
      handler: () => {
      }
    },],
    enableBackdropDismiss: false 
  });
  alert.present();
}




refactor(){
  
        this.cMap.onDestinatiobarHide = false;
        this.calculateBtn = false;
        document.getElementById("destination").innerHTML = "Set Destination";
   
}



alertClosure(message){
  let alert = this.alert.create({
    title: message,
    buttons: [ {
      text: 'Exit',
      role: 'cancel',
      handler: () => {
        this.platform.exitApp()
      }
    },
   ],
    enableBackdropDismiss: true 
  });
  alert.present();
}



// GotoPage(){
//   this.navCtrl.push(RatePage);
// }

clearAll(uid, can){
  console.log(uid)
  let customer = firebase.database().ref(`Customer/${uid}`);
  customer.remove().then((success) =>{
  
  }).catch((error)=>{
   // this.showAlertNormal("Network Error", "please make sure you have a strong network and try Again", false)
  })
  
}


locatePosition(lat, lng){
 // this.cMap.map.setCenter(lat, lng);
}



presentRouteLoader(message) {
  let loading = this.load.create({
    content: message
  });

  loading.present();
  console.log('sdfggfsfsfsfs')
  let myInterval = setInterval(() => {
  if (this.canDismiss){
    loading.dismiss();
    clearInterval(myInterval)
  }
    
  }, 1000);
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


showAlertComplex(title, message, accept, reject, iscancel){
  let alert = this.alert.create({
    title: title,
    message: message,
    inputs: [
      {
        name: 'long',
        label: this.lp.translate()[0].longpick,
        type: "checkbox",
        value: "true",
        checked: false
      },
      {
        name: 'incorrect',
        label: this.lp.translate()[0].incorrect,
        type: "checkbox",
        value: "false",
        checked: false
      }
    ],
    buttons: [
      {
        text: this.lp.translate()[0].reject,
        role: 'cancel',
        handler: () => {
          
        }
      },
      {
        text: this.lp.translate()[0].accept,
        handler: () => {
          if (iscancel){
            this.clearAll(this.uid, true);
          }
        }
      }
    ],
    enableBackdropDismiss: false 
  });
  alert.present();
}
  
}
