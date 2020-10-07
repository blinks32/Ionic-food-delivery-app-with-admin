import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
 news:any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public ph: ProfileProvider) {
  }

  ionViewDidLoad() {
    this.ph.getNewsProfile().on('value', userProfileSnapshot => {
      if (userProfileSnapshot.val()){
      this.news = userProfileSnapshot.val().News
      }else{
        this.news = 'Welcome to App. Make Sure You are online'
      }
    })
  }

  CloseNow(){
    this.viewCtrl.dismiss();
  }

}
