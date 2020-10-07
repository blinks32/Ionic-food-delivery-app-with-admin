import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, AlertController, NavParams } from 'ionic-angular';
import { LanguageProvider } from '../../providers/language/language';
import { EventProvider } from '../../providers/event/event';
import { ProfileProvider } from '../../providers/profile/profile';
import { CallNumber } from '@ionic-native/call-number';
import { SettingsProvider } from '../../providers/settings/settings';
import { HTTP } from '@ionic-native/http';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import {Headers} from '@angular/http';
/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {
  id: any;
  cartransmission: any = 'car is beign hijacked.';
  public eventList: Array<any>;
  constructor(public navCtrl: NavController, public pop: PopUpProvider, public http:HTTP, public call: CallNumber, public settings: SettingsProvider, public viewCtrl: ViewController, public alert: AlertController, public eventProvider: EventProvider, public ph: ProfileProvider, public lp: LanguageProvider, public navParams: NavParams) {
     this.id = this.navParams.get('id')
  }

  ionViewDidEnter() {
    console.log('inregf')
    this.eventProvider.getSupportChatList(this.eventProvider.id).on('value', snapshot => {
      this.eventList = [];
      console.log('sjiy')
      snapshot.forEach( snap => {
        this.eventList.push({
          id: snap.key,
          admin: snap.val().Admin_Message,
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

  callNow(){
    window.open("tel:" + this.settings.companyPhone);
    //  this.call.callNumber(this.settings.companyPhone, true)
     this.send('Driver Needs Support SOS code: ' + this.cartransmission, 'Trace the driver information to the admin', this.ph.user.email)
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
          text: 'Cancel',
          role: 'cancel',
          handler: data => {    
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log(this.ph.user.email)
            this.send('Support Message from Driver with ID ' + this.ph.user.uid, data.Message, this.ph.user.email)
            this.eventProvider.Complain(data.Message, this.eventProvider.id)
          }
        }
      ]
    });
    alert.present();
  }



  send(subject: string, message: string, email: string) {
    
    var url = "https://api.mailgun.net/v3/" + this.settings.mailGUrl + "/messages";
    let body = {
      "from": email,
      "to": this.settings.companyMail,
      "subject": subject,
      "html": "<html><body>First Name: " + this.settings.appName + "<br>" + "Last Name: " + this.settings.appLink + "<br>" + "Email: " + email + "<br>" + "Subject: " + subject + "<br><br>" + "Message: " + message + "</body></html>"
    }
    let headers = {
      "Authorization": "Basic " + this.settings.mailGKey,
      "Content-Type": "application/x-www-form-urlencoded"
    };

    //this.pop.showLoader('')
   
    this.http.post(url, body, headers).then(data => {
     
      console.log("SUCCESS -> " + JSON.stringify(data));
      
    }).catch(error=> {
      this.pop.showPimp(JSON.stringify(error))
    })
}

}
