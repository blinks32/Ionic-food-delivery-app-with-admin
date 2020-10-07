import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicPage } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';
import { LanguageProvider } from '../../providers/language/language';

@IonicPage()
/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  Lang: any;
  constructor(public iab: InAppBrowser, public lp: LanguageProvider, public settings: SettingsProvider, public navCtrl: NavController, public navParams: NavParams) {
  this.Lang  = this.lp.translate();
  
  }


  gotoSite(){
    //   const browser = this.iab.create(this.settings.appLink);
       this.iab.create(this.settings.appLink)
     }
   
     gotoSite2(){
        this.iab.create(this.settings.appCareer)
     }
   
     gotoSite3(){
      this.iab.create(this.settings.appFaq)
     }
   
     gotoSite4(){
      this.iab.create(this.settings.appTerms)
     }
    

  gotoSite9(){
    this.iab.create(this.settings.appFB)
  }

  gotoSite10(){
   this.iab.create(this.settings.appinsta)
  }

}
