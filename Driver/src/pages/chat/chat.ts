import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, AlertController, NavParams, Platform } from 'ionic-angular';
import { LanguageProvider } from '../../providers/language/language';
import { EventProvider } from '../../providers/event/event';
import { ProfileProvider } from '../../providers/profile/profile';
/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  id: any;
  public eventList: Array<any>;
  constructor(public navCtrl: NavController, public plat: Platform, public viewCtrl: ViewController, public alert: AlertController, public eventProvider: EventProvider, public ph: ProfileProvider, public lp: LanguageProvider, public navParams: NavParams) {
     this.id = this.navParams.get('id')
  }

  ionViewDidEnter() {
    console.log('inregf')
    this.eventProvider.getChatList(this.id).on('value', snapshot => {
      this.eventList = [];
      console.log('sjiy')
      snapshot.forEach( snap => {
        this.eventList.push({
          id: snap.key,
          driver: snap.val().Driver_Message,
          user: snap.val().Client_Message,
        });
        console.log(this.eventList)
        return false
      });
    });
  }


  closeChat(){
    this.viewCtrl.dismiss();
  }

  

  Send() {
    let alert = this.alert.create({
      title: 'message',
      inputs: [
        {
          name: 'Message',
          placeholder: 'Reply'
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].b9,
          role: 'cancel',
          handler: data => {    
          }
        },
        {
          text: 'Send',
          handler: data => {
            if (!this.plat.is('cordova')){
            this.eventProvider.SendMessage(data.Message, this.id)
            }else{
              
            }
          }
        }
      ]
    });
    alert.present();
  }

}
