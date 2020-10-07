import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LanguageProvider } from '../../providers/language/language';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public storage: Storage, public lp: LanguageProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }



  onSelectChange(selectedValue: any) {
    console.log('Selected', selectedValue);

    this.storage.set(`Language`, selectedValue).then(() => {
      console.log('saved id')
      this.lp.targetLanguageCode = selectedValue
    })
  }
}
