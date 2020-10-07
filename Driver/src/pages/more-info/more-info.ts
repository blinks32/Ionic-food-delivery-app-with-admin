import { Component } from '@angular/core';
import { Platform, NavParams } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import * as firebase from 'firebase'
import { 
  NavController, 
  Loading,
  LoadingController,
  AlertController, MenuController  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { IonicPage } from 'ionic-angular';
import { LanguageProvider } from '../../providers/language/language';
import { EventProvider } from '../../providers/event/event';

@IonicPage()
/**
 * Generated class for the MoreInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-more-info',
  templateUrl: 'more-info.html',
})
export class MoreInfoPage { 
  loading: Loading;
  state: any;
  card: any;
  cartypes :any = '1';
  carChosen: boolean = false;
  cars: any;
  cities: any = 'Abuja';
  number: any;
  name: any;
  email: any;
  license: any = '';
  model: any = '';
  plate: any = '';
  year: any;
  seat: any = 0;
  banks: any;
  insp: any;
  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  verificationId: any = '';
  phoneNumber: any = '';
  userName: any = '';
  countryCode: any = '';
  result: any;
  companies: any = 'NO INSPECTOR';
  inspectors: boolean = false;
  items: Array<any>;
  public Debugging: boolean = false;
  toppings: number = 234;
  constructor(public plat: Platform , public eventProvider: EventProvider, public platform: Platform, public navParams: NavParams, public lp: LanguageProvider, public pop: PopUpProvider, public navCtrl: NavController, public menu: MenuController, public authProvider: AuthProvider, 
    public loadingCtrl: LoadingController, public ph: ProfileProvider,
    public alertCtrl: AlertController) {
   // this.phoneNumber = this.navParams.get('phone');
    }

  ionViewDidLoad() {
    
    

    
  }




signIn(userName: string) { //Step 2 - Pass the mobile number for verific
  if (this.name != null && this.banks != null && this.cities && this.number != null
  && this.model && this.year && this.license && this.plate
  ){
    this.pop.showLoader('')
    this.ph.UpdateInfo(
      this.name,
      this.cities,
      this.license,
      this.model,
      this.year,
      this.plate,
      this.seat,
      this.number,
      this.banks,
      this.cartypes,
      this.companies
    ).then(success => {
     this.navCtrl.setRoot('AddphotoinfoPage');
     this.pop.hideLoader();
     this.ph.getCompanyProfile(this.companies).update({
      earnings: 0,
     }
     ).then(()=>{
        
     })
 })

 

}

     
}
}
