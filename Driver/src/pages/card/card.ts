import { Component } from '@angular/core';
import {  NavParams, LoadingController, Loading,
  AlertController, NavController, Platform  } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProfileProvider } from '../../providers/profile/profile';
import { IonicPage } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
// import { Injectable } from '@angular/core';
import { SettingsProvider } from '../../providers/settings/settings';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LanguageProvider } from '../../providers/language/language';
@IonicPage()
/**
 * Generated class for the CardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  public cardpaymentForm: FormGroup;
  loading: Loading;
  public data: any;
  info: any;
  constructor(public prof: ProfileProvider, public lp: LanguageProvider, public settings: SettingsProvider, private http: Http, public eProvider: EventProvider, public platform: Platform, public nav: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController, 
    public formBuilder: FormBuilder) {

      this.cardpaymentForm = formBuilder.group({
        card: ['', Validators.compose([Validators.maxLength(16), Validators.minLength(16), Validators.required])],
        cvc: ['', Validators.compose([Validators.maxLength(3), Validators.minLength(3), Validators.required])],
        mm: ['', Validators.compose([Validators.maxLength(2), Validators.minLength(2), Validators.required])],
        yy: ['', Validators.compose([Validators.maxLength(2), Validators.minLength(2), Validators.required])]
      });
  }


  AddCard(): void {
    this.RegisterCard(this.cardpaymentForm.value.card, this.cardpaymentForm.value.mm, 
      this.cardpaymentForm.value.yy, this.cardpaymentForm.value.cvc, 100, this.prof.user.email,
      2)
  }


  RegisterCard(card, month, year, cvc, amount, email, driverPay){
  
    
    
  this.platform.ready().then(() => {
    // Now safe to use device APIs
   (<any>window).window.PaystackPlugin.chargeCard(
      (resp) => {
       console.log(resp);
       console.log(JSON.stringify(resp));
      
        this.eProvider.UpdateCard(card, month, year, cvc, amount, email, driverPay).then(success => {
          this.prof.UpdatePaymentType(2).then(suc =>{
          this.showPayMentAlert('card added', "", true)
          this.nav.push('WalletPage');
          })
        }).catch(error =>{

          
        })
      //  });
      },
      (resp) =>{
        this.showPayMentAlert(JSON.stringify(resp), resp, false);
      },
      {
        cardNumber: card, 
        expiryMonth: month, 
        expiryYear: year, 
        cvc: cvc,
        email: email,
        amountInKobo: amount,
        transactionCharge : driverPay
    });

  })


}



getInfo(ref) {
  if (this.data) {
    return Promise.resolve(this.data);
  }

  return new Promise(resolve => {
    this.http.get('https://api.paystack.co/transaction/verify/' + ref )
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  });
}


  showPayMentAlert(title, subtitle, canLeave ){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: [ {
        text: 'Accept',
        role: 'cancel',
        handler: () => {
         if (canLeave){
          this.nav.popToRoot();
         }
        }
      },],
      enableBackdropDismiss: false 
    });
    alert.present();
  }


  
  // scanCard(){
  //   console.log('scan clicked')
  //   // alert('Coming Soon')
  //   this.cardIO.canScan()
  //   .then(
  //     (res: boolean) => {
  //       console.log(res)
  //       //alert(res);
  //       if(res){

  //         let options = {
  //           requireExpiry: true,
  //           requireCVV: true,
  //           useCardIOLogo: true,
  //           supressManual: false,
  //           requirePostalCode: false,
  //           keepApplicationTheme:true,
  //           suppressScan:true,
  //           guideColor: '#3f84fc'
  //         };

  //         this.cardIO.scan(options).then(suc=>{
  //           console.log(suc.cardNumber)
  //         //  alert(suc);
  //           this.eProvider.UpdateCard(suc.cardNumber, suc.expiryMonth, suc.expiryYear, suc.cvv, 100, this.prof.email, 20).then(success => {
  //             this.prof.UpdatePaymentType(2).then(suc=>{
  //             this.showPayMentAlert(this.lp.translate()[0].cardsuc, '', true)
  //             })
  //             }).catch(error =>{
  //             //  alert(error);
  //               this.showPayMentAlert(this.lp.translate()[0].cardunc, '', false)
  //             })
  //         });

  //       }
  //     }
  //   );
  //}



}
