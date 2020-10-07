import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';
import { LanguageProvider } from '../../providers/language/language';
/**
 * Generated class for the LoginEntrancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-entrance',
  templateUrl: 'login-entrance.html',
})
export class LoginEntrancePage {

 
  constructor(public navCtrl: NavController, public lp: LanguageProvider, public settings: SettingsProvider, public load: LoadingController,  public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartupPage');
    this.presentRouteLoader()
  }


presentRouteLoader() {
  
  let myTimeout = setTimeout(() => {
  
   this.navCtrl.setRoot('LoginPage')
    clearTimeout(myTimeout)
    
  }, 3500);
}

}
