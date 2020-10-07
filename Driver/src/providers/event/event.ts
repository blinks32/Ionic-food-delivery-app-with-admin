import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class EventProvider {
  public userProfileRef:firebase.database.Reference;
  public CustomerRef:firebase.database.Reference;
  CustomerOwnRef:firebase.database.Reference;
  scheduledProfileRef:firebase.database.Reference;
  public id: any;
  public customerId: any;
  public rating: any;
  public rateText: any;
  public CustomerOwnPropertyRef: firebase.database.Reference;
  public DriverRef: firebase.database.Reference;
  public selectedUser: any;
  public companyList: any;
  user: any;
  constructor() {
    
    firebase.auth().onAuthStateChanged( user => {
    if (user){
        this.id = user.uid
        this.user = user
        this.userProfileRef = firebase.database().ref(`driverProfile/${user.uid}`);
        this.CustomerRef = firebase.database().ref(`Customer/${this.selectedUser}`);
        this.CustomerOwnPropertyRef = firebase.database().ref(`Customer/${user.uid}/client`);
        this.CustomerOwnRef = firebase.database().ref(`Customer`);
        this.DriverRef = firebase.database().ref(`Drivers/${user.uid}`);
        this.scheduledProfileRef = firebase.database().ref(`ScheduledRides`);
        this.companyList = firebase.database().ref(`Company`);
        this.getUserProfile().on('value', userProfileSnapshot => {
       
          this.rating = userProfileSnapshot.val().rating;
          this.rateText = userProfileSnapshot.val().review;
         
         })
      }
    });
    
  }

  
  getEventList(): firebase.database.Reference {
    return this.userProfileRef.child('/eventList');
  }


  getSupportChatList(id: any): firebase.database.Reference {
    return firebase.database().ref(`DashboardSettings/user/complains/${id}`);
  }

  Complain(
    value: any, id:any): firebase.Promise<any> {
    return  firebase.database().ref(`DashboardSettings/user/complains/${id}`).push({
      Client_Message: value,
      email: this.user.email,
      chat_key: id 
    });
  }

  getChatList(id: any): firebase.database.Reference {
    return firebase.database().ref(`Customer/${id}/client/Chat`);
  }

  getUserProfile(): firebase.database.Reference {
    return this.userProfileRef;
  }


  getScheduleList(): firebase.database.Reference {
    return this.scheduledProfileRef;
  }

  getCompanyList(): firebase.database.Reference {
    return this.companyList;
  }


  getCurrentDriver(): firebase.database.Reference {
    return this.DriverRef;
  }

  getActivityProfile(id: any): firebase.database.Reference {
    return this.CustomerOwnRef.child(`${id}/client`);
  }

  getActiveProfile(id: any): firebase.database.Reference {
    return this.CustomerOwnPropertyRef.child(id);
  }

  getEventDetail(eventId:string): firebase.database.Reference {
    return this.userProfileRef.child('/eventList').child(eventId);
  }


  UpdateCash(cash: number, eventId: string): firebase.Promise<any> {
    return this.userProfileRef.child('/eventList').update({
      price: cash,
    });
  }



  createHistory(name: any, price: number, date: any, 
      location: any, destination: any): firebase.Promise<any> {
      return this.userProfileRef.child('/eventList').push({
        name: name, 
        price: price,
        date: date,
        location: location,
        paid: 1,
        destination: destination,
        hidden: false
    });

    }


  PushUserDetails(name: string, picture: any, id: any,
    lat: number, lng: number, locationName: any, plate: any, seats: number, carType: any, rating: any, rateText: any, number: number, regnum: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Driver_name: name,
      Driver_location: [lat, lng],
      Driver_locationName: locationName,
      Driver_plate: plate,
      Driver_picture: picture,
      Driver_ID: this.id,
      Driver_RegNum: regnum,
      Driver_seats: seats,
      Driver_carType: carType,
      Driver_rating: rating, 
      Driver_rateText: rateText,
      Driver_number: number,
      Driver_HasRated: false
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

  UpdateFund(card: any,): firebase.Promise<any> {
    return this.userProfileRef.update({
      funds: card, 
    });
  }


  PushCurrentLocation(lat: number, lng: number, id: any, car: any, phone:any, pic:any, rating:any): firebase.Promise<any> {
    return this.DriverRef.set({
      driver_details: [lat, lng, id, car, phone, pic, rating]
    });
  }

  
  confirmRentry(value: any, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      entered: value,
    });
  }

  RateDriver(value: boolean, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_HasRated: value
    });
  }

  ApprovePickup(value: boolean, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_PickedUp: value,
    });
  }

  SendMessage(value: string, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client/Chat`).push({
      Driver_Message: value,
    });
  }
  
  UpdateTime(value: boolean, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_Time_Destination: value,
    });
  }

  ApprovePickup2(value: boolean, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Pool_PickedUp: value,
    });
  }

  ApproveDrop(value: boolean, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_Dropped: value,
      Delivered: true
    });
  }

  ApproveDrop2(value: boolean, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Pool_Dropped: value,
    });
  }

  ApprovedArrival(value: boolean, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_Arrived: value,
    });
  }

  ApproveDelete(id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_Deleted: true,
    });
  }
 

  UpdateLocation(lat: number, lng: number, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Driver_location: [lat, lng],
    });
  }


}
