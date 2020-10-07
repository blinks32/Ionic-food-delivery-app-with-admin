import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { EventProvider } from '../../providers/event/event';

import { LanguageProvider } from '../../providers/language/language';
/*
  Generated class for the PaystackProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PaystackProvider {
  public isDone: boolean = false;
  public cardCharge: boolean = false;
  constructor(  public lp: LanguageProvider, public eProvider: EventProvider, public platform: Platform, public pop: PopUpProvider) {
    
  }

  UpdateCard(card: string, month: any, year: any, cvc: any, amount: any, email: any, driverPay: any){
    this.eProvider.UpdateCard(card, month, year, cvc, amount, email, driverPay).then(success => {
    
    }).catch(error =>{})
  }



  ChargeCard(card, month, cvc, year, amount, email, id){
   this.pop.presentLoader('processing...');
 
        this.platform.ready().then(() => {
          if (this.platform.is('cordova')) {
       
          (<any>window).window.PaystackPlugin.chargeCard(
            (resp) =>{
               this.eProvider.UpdateFund(amount).then( suc => {
                this.pop.hideLoader()
               });
            },
            (resp) =>{
              this.pop.hideLoader()
              this.pop.showAlertNormal('Error', resp, '')
            },
            {
              cardNumber: card, 
              expiryMonth: month, 
              expiryYear: year, 
              cvc: cvc,
              email: email,
              amountInKobo: amount,
          });
        }else{
         
        }
      })
  
  
  }



}
