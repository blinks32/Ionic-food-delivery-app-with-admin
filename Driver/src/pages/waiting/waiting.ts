import { Component } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SettingsProvider } from '../../providers/settings/settings';
import { LanguageProvider } from '../../providers/language/language';
/**
 * Generated class for the WaitingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-waiting',
  templateUrl: 'waiting.html',
})
export class WaitingPage {

  constructor(public navCtrl: NavController, public platform: Platform, public lp: LanguageProvider, public settings: SettingsProvider, public iab: InAppBrowser, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaitingPage');
  }

  gotoSite2(){
    const browser = this.iab.create(this.settings.appLink);
  }

  close(){
    this.platform.exitApp();
  }

}
