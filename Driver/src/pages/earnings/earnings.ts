import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { SettingsProvider } from '../../providers/settings/settings';
import { ProfileProvider } from '../../providers/profile/profile';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LanguageProvider } from '../../providers/language/language';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
/**
 * Generated class for the FreeridePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-earnings',
  templateUrl: 'earnings.html',
})
export class EarningsPage {
  public randomCode: any = 'ghjkf'
  earnings: any = 0;
  public cardpaymentForm: FormGroup;
  constructor(public navCtrl: NavController,  public formBuilder: FormBuilder, public lp: LanguageProvider, public share: SocialSharing, public ph: ProfileProvider, public settings: SettingsProvider, public pop:PopUpProvider, public navParams: NavParams) {
    this.earnings = ph.earnings
    this.cardpaymentForm = formBuilder.group({
      card: ['', Validators.compose([Validators.maxLength(4), Validators.required])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FreeridePage');
   // this.randomCode = this.guidGenerator()
    console.log(this.randomCode)
  }






  AddCard(): void{
   // if (this.ph.card != null){
   this.SearchForSharingIDs(this.cardpaymentForm.value.card)
 //   }else{
    //  this.pop.presentToast(this.lp.translate()[0].cardf)
 ///   }
  }




  SearchForSharingIDs(promoID){
   
    console.log('SharingID search called')
    this.pop.presentLoader('');
    this.ph.getAllSharingID().on('value', SharingIDShot => {
       let SharingID = SharingIDShot.val().UserID[1]
       this.pop.hideLoader();
      // SharingID
       if (SharingID != null){
       // this.ph.getAllSharingID().on('child_added', SharingIDShot => {
       // let SharingIDs = SharingIDShot.val().UserID
        console.log(SharingID, promoID);
       if (SharingID == promoID){
        console.log('SharingID found');
        //this.ph.getAllSharingID().off('child_added')
       // this.pop.presentToast(this.lp.translate()[0].shareid)
       }else{
        // this.pop.presentToast(this.lp.translate()[0].shareid2)
        console.log('rtyuiytrfghj');
       }
        
       }else{
       
        // this.pop.presentToast(this.lp.translate()[0].shareid3)
        this.ph.getAllSharingID().off('value')
  
       }
      })

  }



 
}
