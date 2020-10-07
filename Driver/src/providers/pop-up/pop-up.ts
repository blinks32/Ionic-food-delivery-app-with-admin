import { Injectable, ViewChild, Injector} from '@angular/core';
import { AlertController, ModalController, LoadingController, ToastController, Loading, NavController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { ProfileProvider } from '../../providers/profile/profile';
import { RatePage } from '../../pages/rate/rate';
import { Platform, Nav } from 'ionic-angular';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
import { LanguageProvider } from '../../providers/language/language';
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
  public toggleBtn: boolean = false;
  public onPointerHide: boolean = false;
  public calculateBtn: boolean = false;
  public price: number;
  public hasArrived: boolean = true;
  public allowed: boolean = true;
  public hasPicked: boolean = false;
  public hasPicked2: boolean = false;
  public UserId: any; 
  public loggedOff: boolean = true;
  public mapSection: boolean = false;
  public isNewJob: boolean = false;
  public loading: any;
  public dismissLoader: any;
  constructor(protected injector: Injector, public platform: Platform, public lp: LanguageProvider, private toastCtrl: ToastController, public locTracker: LocationTrackerProvider, public pro: ProfileProvider,  public alert: AlertController, public ev: EventProvider, public load: LoadingController) {
   
  }
   
  get navCtrl(): NavController {
    return this.injector.get(NavController);
  }

showAlertNormal(title, subtitle, network){
  let alert = this.alert.create({
    title: title,
    subTitle: subtitle,
    buttons: [ {
      text: this.lp.translate()[0].f6,
      role: 'cancel',
      handler: () => {
        if (network){
         
          }
      }
    },],
    enableBackdropDismiss: false 
  });
  alert.present();
}





AcceptJob(){
  this.mapSection = true;
  //this.cop.createUserInformation(this.ph.name, this.ph.picture, this.myMap.lat, this.myMap.lng, this.myMap.locationName, this.ph.plate, this.ph.seat, this.ph.carType, this.ph.rating );
}


showOfflineNormal(title, subtitle, network){
  let alert = this.alert.create({
    title: title,
    subTitle: subtitle,
    buttons: [ {
      text: this.lp.translate()[0].c6,
      role: 'cancel',
      handler: () => {
       
      }
      
    },
    {
      text: this.lp.translate()[0].c7,
      role: 'cancel',
      handler: () => {
     
      }}
  ],
    enableBackdropDismiss: false 
  });
  alert.present();
}

GoOffline(){
  this.ev.getCurrentDriver().remove().then(suc =>{
   this.presentToast(this.lp.translate()[0].f8)
    this.loggedOff = true;
    // clearTimeout(this.cMap.timeOut)
    // clearTimeout(this.cMap.watchId)
  })
}



GoOffline2(){
  this.ev.getCurrentDriver().remove().then(suc =>{
  
  })
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





alertMe(message){
  let alert = this.alert.create({
    title: message,
    buttons: [ {
      text: this.lp.translate()[0].c6,
      role: 'cancel',
      handler: () => {
        
      }
    },
   ],
    enableBackdropDismiss: true 
  });
  alert.present();
}




alertClosure(message){
  let alert = this.alert.create({
    title: message,
    buttons: [ {
      text: this.lp.translate()[0].i9,
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


presentLoader(message) {
  this.loading = this.load.create({
    content: message
  });

  this.loading.present();
}


showLoader(message) {
  this.dismissLoader = this.load.create({
    content: message
  });
  this.dismissLoader.present();
}

hideLoader(){
  this.dismissLoader.dismiss();
}



showPimp(title ){
  let alert = this.alert.create({
    title: title,
    buttons: [ {
      text: this.lp.translate()[0].c6,
      role: 'cancel',
      handler: () => {
      }
    },],
    enableBackdropDismiss: false 
  });
  alert.present();
}


presentRouteLoader(message) {
  let loading = this.load.create({
    content: message
  });

  loading.present();

  let myInterval = setInterval(() => {
  if (this.canDismiss){
    loading.dismiss();
    clearInterval(myInterval)
  }
    
  }, 1000);
}

  
}
