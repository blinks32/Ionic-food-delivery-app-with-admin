import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { PaystackProvider } from '../../providers/paystack/paystack';
/**
 * Generated class for the WalletPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {
  ammount: any = 0;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public payst: PaystackProvider, public ph: ProfileProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.ph.getUserProfile().on('value', userProfileSnapshot => {
      this.ph.funds = userProfileSnapshot.val().funds;
    });
  }

  AddNow(){
    if (this.ph.card == null){
    this.navCtrl.push('CardPage');
    }else{
      this.updateFunds();
    }
  }




  updateFunds(){
    const alert = this.alertCtrl.create({
      message: 'Enter Ammount to Add To Your Funds',
      inputs: [
        {
         
          value: 'Enter Here'
        },
      ],
      buttons: [
        {
          text: 'cancel',
        },
        {
          text: 'Accept',
          handler: data => {
            console.log(data)
            this.payst.ChargeCard(this.ph.card, this.ph.month, this.ph.cvc, this.ph.year, data*100, this.ph.email, '')
          }
        }
      ]
    });
    alert.present();
  }


}
