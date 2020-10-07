import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { LanguageProvider } from '../../providers/language/language'
@Injectable()
export class SettingsProvider {
  public WebAdminProfile: any;
  public appName = 'Taxi Driver';
  public appCareer = 'http://commuter.com';
  public appFaq = 'http://commuter.com';
  public appLink = 'https://commuter.com';
  public appinsta = 'http://commuter.com';
  public appFB = 'http://commuter.com';
  public appTerms = 'http://commuter.com';
  public appCountryCode = 'BB';
  public appStripeKey = 'pk_test_0t85o0Llo0MbBfC9imSzznam';
  public appcurrency: any = '$';
  public appDashboard = 'https://ajetaxi.firebaseapp.com//'
  public companyPhone: any = '+23456735578587'; //08066469157
  public companyMail: any = 'ricomedia22@gmail.com';
  public current_ID: boolean = false;
  public mailGUrl: any =  "sandbox28ca01fb2b374bb1b8aceb9d0a86895a.mailgun.org";
  public mailGKey: any = window.btoa("api:key-60b9b5a8e7097e2fdcada552e4820db4");
  public id: any;
  public langauge = 'en';
  public refer: boolean = false;
  public wallet: boolean = false;
  public company: boolean = false;
  public pool: boolean = false;
  public schedule: boolean = false;
  public OnesignalAppID: any = 'f6345b2b-3777-4631-8415-a3a178826e8d';
  public CloudID: any = '1003487763108';
  public support_email: any = 'chndth@gmail.com'
  constructor(public lang: LanguageProvider) {

    this.WebAdminProfile = firebase.database().ref(`DashboardSettings`);

    this.getWebAdminProfile().on('value', sShot => {
       if (sShot.val().name)
       this.appName = sShot.val().name + ' Driver'
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
       if (sShot.val().countrycode)
       this.appCountryCode = sShot.val().countrycode
       if (sShot.val().currency)
       this.appcurrency = sShot.val().currency
       if (sShot.val().phone)
       this.companyPhone = sShot.val().phone
       if (sShot.val().langauge) {   
          console.log(this.langauge)
          this.lang.targetLanguageCode = sShot.val().langauge                                                                                       
          this.langauge = sShot.val().langauge  
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