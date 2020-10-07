import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LanguageProvider } from '../../providers/language/language';
import { ProfileProvider } from '../../providers/profile/profile';
/**
 * Generated class for the HelpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public ph: ProfileProvider, public lp: LanguageProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

}
