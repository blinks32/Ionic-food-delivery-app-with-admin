import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { ProfileProvider } from '../../providers/profile/profile';
import { IonicPage } from 'ionic-angular';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { SettingsProvider } from '../../providers/settings/settings';
import { LanguageProvider } from '../../providers/language/language';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  public eventList: Array<any>;
  public earnings: any;
  constructor(public navCtrl: NavController, public lp: LanguageProvider, public settings: SettingsProvider, public pop: PopUpProvider, public load: LoadingController, public profile: ProfileProvider, public alert: AlertController, public eventProvider: EventProvider) {
  }

  ionViewDidEnter() {
    this.eventProvider.getEventList().on('value', snapshot => {
      this.eventList = [];
      snapshot.forEach( snap => {
        this.eventList.push({
          id: snap.key,
          name: snap.val().name,
          price: snap.val().price,
          paid: snap.val().paid,
          date: snap.val().date,
          location: snap.val().location,
          destination: snap.val().destination,
          hidden: snap.val().hidden
        });
        return false
      });
    });


    this.presentRouteLoader(this.lp.translate()[0].c4);

    this.profile.getUserProfile().on('value', userProfileSnapshot => {
      this.earnings = userProfileSnapshot.val().earnings
    })

   
  }

  


  presentRouteLoader(message) {
    let loading = this.load.create({
      content: message
    });
  
    loading.present();
  
    let myInterval = setInterval(() => {
    if (this.eventList != null){
      loading.dismiss();
      clearInterval(myInterval)
    }
      
    }, 1000);
  }

  goToEventDetail(eventId){
    this.navCtrl.push('HistorydetailPage', { 'eventId': eventId });
  }


 

  // Request(eventId){
  //   let alert = this.alert.create({
  //     title: this.lp.translate()[0].c5,
  //     buttons: [ {
  //       text: this.lp.translate()[0].c6,
  //       role: 'cancel',
  //       handler: () => {

  //       }
  //     },
  //     {
  //       text: this.lp.translate()[0].c7,
  //       handler: () => {
  //         this.eventProvider.getEventDetail(eventId).update({
  //           paid: 2,
  //         }).then((suc) =>{
  //           this.pop.alertMe('Your Request Has Been Recieved And Is Biegn Processed. This May Take Up To 30 minutes')
  //         });
          
  //     }
  //     },],
  //     enableBackdropDismiss: false 
  //   });
  //   alert.present();
  // }

  Delete(eventId){
    let alert = this.alert.create({
      title: this.lp.translate()[0].c5,
      buttons: [ {
        text: this.lp.translate()[0].c6,
        role: 'cancel',
        handler: () => {

        }
      },
      {
        text: this.lp.translate()[0].c7,
        handler: () => {
          this.eventProvider.getEventDetail(eventId).update({
            hidden: true
          }).then((success) =>{
          })
      }
      },],
      enableBackdropDismiss: false 
    });
    alert.present();
  }

  

}