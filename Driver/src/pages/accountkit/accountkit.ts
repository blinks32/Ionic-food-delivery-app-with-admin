import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { timer } from 'rxjs/observable/timer'
import { ProfileProvider } from '../../providers/profile/profile';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
/**
 * Generated class for the AccountkitPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accountkit',
  templateUrl: 'accountkit.html',
})
export class AccountkitPage {

  constructor(public navCtrl: NavController, public pop: PopUpProvider, public ph: ProfileProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    // call this function to initiate facebook account kit
    this.login();
  }

  login() {
    (<any>window).AccountKitPlugin.loginWithPhoneNumber({
      useAccessToken: true,
	    defaultCountryCode: "NG",
	    facebookNotificationsEnabled: true
    }, (successdata) => {
      (<any>window).AccountKitPlugin.getAccount((user) => {
      // push number to the database ones gotten
        this.pop.presentLoader('');
        this.ph.UpdateNumber(user.phoneNumber).then(()=>{
          this.navCtrl.setRoot('MoreInfoPage');
          this.pop.hideLoader();
        })
      })
      }, (err) => {
        this.login();
    })
  }


}
