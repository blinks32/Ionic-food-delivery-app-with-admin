import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SettingsProvider {
  public WebAdminProfile: any;
  public appName = 'TaxiApp';
  public car1 = 'Standard';
  public car2 = 'Taxi';
  public car3 = 'Executive';
  public language = 'en';
  public appLink = 'http://commuter.com';
  public appCareer = 'http://commuter.com';
  public appFaq = 'http://commuter.com';
  public appinsta = 'http://commuter.com';
  public appFB = 'http://commuter.com';
  public appTerms = 'http://commuter.com';
  public apart = 1000; //500 metres apart from driver
  public appCountryCode = 'NG';
  public appStripeKey = 'sk_live_Emol5oC7Z42JqsYTzC05y85e';
  public isStripe: boolean = false;
  public appcurrency: any = '$';
  public appDashboard = 'https://ajetaxi.firebaseapp.com//';
  public appPhone: any = '+2340300303233';
  public companyMail: any = 'ricomedia22@gmail.com';
  public current_ID: boolean = false;
  public mailGUrl: any =  "sandbox28ca01fb2b374bb1b8aceb9d0a86895a.mailgun.org";
  public mailGKey: any = window.btoa("api:key-60b9b5a8e7097e2fdcada552e4820db4");
  public id: any;
  public refer: boolean = false;
  public wallet: boolean = false;
  public company: boolean = false;
  public pool: boolean = false;
  public schedule: boolean = false;
  public OnesignalAppID: any = 'f6345b2b-3777-4631-8415-a3a178826e8d';
  public CloudID: any = '1003487763108';
  public support_email: any = 'chndth@gmail.com'

  constructor() {
   
    this.WebAdminProfile = firebase.database().ref(`DashboardSettings`);

    this.getWebAdminProfile().on('value', sShot => {
       if (sShot.val().name)
       this.appName = sShot.val().name
       if (sShot.val().website)
       this.appLink = sShot.val().website
       if (sShot.val().faq)
       this.appFaq = sShot.val().faq
       if (sShot.val().instagram)
       this.appinsta = sShot.val().instagram
       if (sShot.val().careers)
       this.appCareer = sShot.val().careers
       if (sShot.val().facebook)
       this.appFB = sShot.val().facebook
       if (sShot.val().apart)
       this.apart = sShot.val().apart
       if (sShot.val().countrycode)
       this.appCountryCode = sShot.val().countrycode
       if (sShot.val().currency)
       this.appcurrency = sShot.val().currency
       if (sShot.val().phone)
       this.appPhone = sShot.val().phone
       if (sShot.val().car_0)
       this.car1 = sShot.val().car_0
       if (sShot.val().car_1)
       this.car2 = sShot.val().car_1
       if (sShot.val().car_2)
       this.car3 = sShot.val().car_2
       if (sShot.val().stripe)
       this.isStripe = true
       if (sShot.val().apart)
       this.apart = sShot.val().apart
       if (sShot.val().langauge) {   
        // this.lang.targetLanguageCode = sShot.val().langauge                                                                                                          
       this.language = sShot.val().langauge
       }
       if (sShot.val().company)
       this.company = sShot.val().company
       if (sShot.val().refer)
       this.refer = sShot.val().refer
       if (sShot.val().wallet)
       this.wallet = sShot.val().wallet
       if (sShot.val().pool)
       this.pool = sShot.val().pool
       if (sShot.val().schedule)
       this.schedule = sShot.val().schedule
       if (sShot.val().appID)
       this.OnesignalAppID = sShot.val().appID
       if (sShot.val().CloudID)
       this.CloudID = sShot.val().CloudID
       if (sShot.val().email)
       this.companyMail = sShot.val().email
       if (sShot.val().mailgunUrl)
       this.mailGUrl = sShot.val().mailgunUrl
       if (sShot.val().mailgunKey)
       this.mailGKey = sShot.val().mailgunKey
       if (sShot.val().support_email)
       this.support_email = sShot.val().support_email
    })

  }

   
  getWebAdminProfile(): firebase.database.Reference {
    return this.WebAdminProfile;
  }

}
