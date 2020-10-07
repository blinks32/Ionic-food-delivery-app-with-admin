import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { LanguageProvider } from '../../providers/language/language';
import { Storage } from '@ionic/storage';
import { OnesignalProvider } from '../../providers/onesignal/onesignal';
/**
 * Generated class for the RatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html',
})
export class RatePage {
  @ViewChild('myInput') myInput: ElementRef;
  public rateNumber: any;
  todo = {
    description: ''
  }
  lat: any;
  lng: any;
  cartype: any;
  constructor(public navCtrl: NavController, public Onesignal: OnesignalProvider,  public lp: LanguageProvider,  public viewCtrl: ViewController, public storage: Storage, public pop: PopUpProvider, public navParams: NavParams, public prof: ProfileProvider) {
    this.lat = this.navParams.get('lat');
    this.lng = this.navParams.get('lng');
    this.cartype = this.navParams.get('cartype');
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
   }

  onModelChange($event){
   this.rateNumber = $event
   this.pop.showLoader('')

   setTimeout(() => {
     this.pop.hideLoader()
   }, 1000);
  }


logForm() {
  console.log(this.todo)
  if (this.rateNumber != null) {
    var value = this.navParams.get('eventId')
    console.log(this.rateNumber)
    // this.todo.description = 'No description'
    this.prof.RateUser(value, this.rateNumber, this.todo.description, true).then(suc =>{
      this.Onesignal.UpdateInfo(this.lat, this.lng, this.cartype);
      this.navCtrl.pop();
      });
 
  }else{
    this.pop.showPimp(this.lp.translate()[0].j8)}
}

}
