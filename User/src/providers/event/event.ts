import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { ProfileProvider } from '../../providers/profile/profile';
import { LanguageProvider } from '../../providers/language/language';

@Injectable()
export class EventProvider {
  public userProfileRef:firebase.database.Reference;
  public scheduleRef:firebase.database.Reference;
  londonRef:firebase.database.Reference;
  public id: any;
  public customerId: any;
  public CustomerOwnPropertyRef: firebase.database.Reference;
  public selected_driver: any; 
  public appPrice: any;
  public fare: any;
  public pricePerKm: any;
  public ratingText : any;
  public ratingValue :any;
 user: any;
  constructor(public ph: ProfileProvider, public lp: LanguageProvider) {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        this.id = user.uid
        this.user = user
        this.userProfileRef = firebase.database().ref(`userProfile/${user.uid}`);
        this.scheduleRef = firebase.database().ref(`ScheduledRides`);
        this.londonRef = firebase.database().ref(`LondonRides`);
        this.CustomerOwnPropertyRef = firebase.database().ref(`Customer/${user.uid}/client`);

        this.ratingText = this.lp.translate()[0].notrate;
        this.ratingValue = 0;
       
      }
    });
  }

  getUserProfile(): firebase.database.Reference {
    return this.userProfileRef;
  }

  getEventList(): firebase.database.Reference {
    return this.userProfileRef.child('/eventList');
  }

  getScheduledList(): firebase.database.Reference {
    return this.userProfileRef.child('/scheduled');
  }

  getDetailOfInfo(): firebase.database.Reference {
    return this.appPrice;
  }

  getEventDetail(eventId:string): firebase.database.Reference {
    return this.userProfileRef.child('/eventList').child(eventId);
  }



  getChatList(id: any): firebase.database.Reference {
    return firebase.database().ref(`Customer/${id}/client/Chat`);
  }

  getSupportChatList(id: any): firebase.database.Reference {
    return firebase.database().ref(`DashboardSettings/user/complains/${id}`);
  }

  Complain(
    value: any, id:any): firebase.Promise<any> {
    return  firebase.database().ref(`DashboardSettings/user/complains/${id}`).push({
      Client_Message: value,
      email: this.user.email,
      chat_key: this.id
    });
  }


  
  PushUserDetails(name: string, picture: any, 
    lat: number, lng: number, locationName: any, payWith: any): firebase.Promise<any> {
    return this.scheduleRef.child("/client").update({
      Client_username: name,
      Client_location: [lat, lng],
      Client_locationName: locationName,
      Client_paymentForm: payWith,
      Client_picture: picture,
      Client_ID: this.id,
      Client_PickedUp: false,
      Client_Dropped: false,
      Client_HasRated: false,
    });
  }


  CreateSchedule(price: any, name: string, picture: any, 
    lat: number, lng: number, locationName: any, payWith: any, destination: any, phone: any, date: any, id: any, ratetext:any, ratevalue: any, time:any): firebase.Promise<any> {
    return this.scheduleRef.child(id).update({
      Client_username: name,
      Client_Deleted: false,
      Client_location: [lat, lng],
      Client_locationName: locationName,
      Client_paymentForm: payWith,
      Client_picture: picture,
      Client_phoneNumber: phone,
      Client_destinationName: destination,
      Client_CanChargeCard: false,
      Client_PickedUp: false,
      Client_Dropped: false,
      Client_HasRated: false,
      Client_ended: false,
      Client_price: price,
      Client_Date: date,
      Client_Time: time,
      Client_ID: id,
      Client_hasPaid: false,
      Client_paidCash: false,
      Client_Rating: ratevalue,
      Client_RatingText: ratetext
    });
  }



  CreateLondonBook(name: string, picture: any, 
    lat: number, lng: number, locationName: any, payWith: any, destination: any, phone: any, date: any, id: any, ratetext:any, ratevalue: any, time:any): firebase.Promise<any> {
    return this.londonRef.child(id).update({
      Client_username: name,
      Client_Deleted: false,
      Client_locationName: locationName,
      Client_paymentForm: payWith,
      Client_picture: picture,
      Client_phoneNumber: phone,
      Client_destinationName: destination,
      Client_ended: false,
      Client_Date: date,
      Client_Time: time,
      Client_ID: id,
      Client_hasPaid: false,
      Client_paidCash: false,
      Client_Rating: ratevalue,
      Client_RatingText: ratetext
    });
  }



  UpdateDestination(
    destinationName: any, price: any, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_destinationName: destinationName, 
      Client_price: price,
    });
  }

  UpdateNetworkSate(
    state: any, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Network_state: state, 
    });
  }


  CreateNewSchedule(
    date: any): firebase.Promise<any> {
    return this.userProfileRef.child('/scheduled').push({
      TimeandDate: date, 
    });
  }
  

  UpdateSate(
    state: any, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Left_and_Returned: state, 
    });
  }


  UpdateCard(card: string, month: any, year: any, cvc: any, amount: any, email: any, driverPay: any): firebase.Promise<any> {
    return this.userProfileRef.update({
      Card_Number: card, 
      Card_month: month,
      Card_Year: year,
      Card_Cvc: cvc,
      Card_Amount: amount,
      Card_email: email,
      Card_driverPay: driverPay
    });
  }


}
