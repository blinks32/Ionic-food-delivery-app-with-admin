import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { SettingsProvider } from '../../providers/settings/settings';
import { LanguageProvider } from '../../providers/language/language';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public lp: LanguageProvider, public settings: SettingsProvider, public navParams: NavParams, 
    private nativePageTransitions: NativePageTransitions) {
  }

  clickRegister() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
 
    this.nativePageTransitions.slide(options);
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  clickGoLogin(){
    this.navCtrl.setRoot('AuthPage')
  }

  goToLogin(){
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
 
    this.nativePageTransitions.slide(options);
    this.navCtrl.push('LoginPage');
  }

  goToSignup(): void {
    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
 
    this.nativePageTransitions.slide(options);
    this.navCtrl.push('SignupPage');
  }

  goToResetPassword(): void {
    this.navCtrl.push('ResetPasswordPage');
  }
}
