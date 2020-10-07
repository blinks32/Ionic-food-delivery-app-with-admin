import { Component} from '@angular/core';
import { NavController, AlertController, Platform, ModalController, LoadingController, Loading, NavParams, Events } from 'ionic-angular';


import firebase from 'firebase/app';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the SplashPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor( public loadingCtrl: LoadingController, public platform: Platform, public alert: AlertController, public navCtrl: NavController) {
  }

  ionViewDidLoad() {
   this.presentRouteLoader('')
  }



presentRouteLoader(message) {
  let loading = this.loadingCtrl.create({
    content: message
  });

  loading.present();

  let myTimeout = setTimeout(() => {
    loading.dismiss();
   this.navCtrl.setRoot('SignupPage')
    clearTimeout(myTimeout)
    
  }, 1000);
}

}
