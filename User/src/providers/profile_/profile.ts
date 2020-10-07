import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class ProfileProvider {
  
  public userProfile:any;
  public customer:any;
  public currentUser:firebase.User;
  public user: any;
  public phone: number;
  public WebAdminProfile: any;
  public ScheduledProfile: any;
  public promoProfile: any;
  public referalProfile: any;
  public referalProfile2: any;
  public drivers: any;
  public pools: any;
  public name: any;
  public CustomerOwnPropertyRef: any;
  public driver: any;
  public DriverProfile: any;
  public paymentType: any;
  public card: any;
  public email: any;
  public cvc: any;
  public uidProfile: firebase.database.Reference;
  public home: any;
  public work: any;
  public verificationID: any;
  public year: any;
  public month: any;
  public Restaurants: any;
  public isHome: boolean = true;
  public pic: any;
  public id: any;
  public uid: any;
  public fare: any;
  public pricePerKm: any;
  public admin:any
  public userID: any
  public users: any;
  public login: boolean = false;
  public kit: boolean = false;
  public ratingText: any = '';
  public ratingValue: any = 0;
  public loadingState: boolean = false;
  public earnings: any;
  Foods: any;
  Category: any;
  Cart: any;
  public IDProfile: any;
  public hasLoaded: boolean = false;
  public referal: any ='rty';
  refEarning: any = 0;
  companyNews: any;
  public convrefEarning: any;
  Ratings: firebase.database.Reference;
  hasCalled: any = true;
  constructor() {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
       // console.log(user)
        this.user = user;
        //console.log(this.user)
        this.id = this.user.uid;
        
        this.userProfile = firebase.database().ref(`userProfile/${user.uid}`);
        this.IDProfile = firebase.database().ref(`userProfile/`);
        this.WebAdminProfile = firebase.database().ref(`DashboardSettings`);
        this.Restaurants = firebase.database().ref(`Resturants`);
        this.Ratings = firebase.database().ref(`Ratings`);
        this.DriverProfile = firebase.database().ref(`driverProfile/${user.uid}`);
        this.ScheduledProfile = firebase.database().ref(`ScheduledRides`);
        this.uidProfile = firebase.database().ref(`SharingID/`);
        this.Foods = firebase.database().ref(`Foods`);
        this.Category = firebase.database().ref(`Category`);
        this.Cart = firebase.database().ref(`userProfile/${user.uid}/Cart`);
        this.promoProfile = firebase.database().ref(`SharingIDPromo/`);
        this.referalProfile = firebase.database().ref(`userProfile/`);
        this.referalProfile2 = firebase.database().ref(`driverProfile/`);
        this.companyNews = firebase.database().ref(`News/User`);
        this.getDriverProfile().on('value', userProfileSnapshot => {
          this.driver = userProfileSnapshot.val();
         })
         
         this.users = firebase.database().ref(`userProfile`);
        this.drivers = firebase.database().ref(`Drivers`);
        this.pools = firebase.database().ref(`PoolRides`);
        this.CustomerOwnPropertyRef = firebase.database().ref(`Customer/${user.uid}/client`);


        this.getUserProfile().on('value', userProfileSnapshot => {
         this.userID = userProfileSnapshot.val();
        
         this.phone = userProfileSnapshot.val().phoneNumber;
         this.pic = userProfileSnapshot.val().picture;
         this.verificationID = userProfileSnapshot.val().random;
         this.name = userProfileSnapshot.val().name;
         this.paymentType = userProfileSnapshot.val().payWith;
         this.card = userProfileSnapshot.val().Card_Number;
         this.email = userProfileSnapshot.val().Card_email;
         this.cvc = userProfileSnapshot.val().Card_Cvc;
         this.year = userProfileSnapshot.val().Card_Year;
         this.month = userProfileSnapshot.val().Card_month;
         this.ratingText = userProfileSnapshot.val().ratingtext;
         this.ratingValue = userProfileSnapshot.val().rating;
         this.earnings = userProfileSnapshot.val().earnings;
         
         if (userProfileSnapshot.val().referal){
         this.referal = userProfileSnapshot.val().referal;
          let ref;
         if (userProfileSnapshot.val().referalID){
         ref = userProfileSnapshot.val().referalID;
         }else{
           ref = 'etter'
         }

          console.log(ref)
         this.convrefEarning = userProfileSnapshot.val().refEarning
         if (ref.replace(/[^A-Z,0-9]/gi, "").length == 4){
         this.getReferalProfile().on('value', userProfileSnapshot => {
          if (userProfileSnapshot.val().refEarning)
          this.refEarning = userProfileSnapshot.val().refEarning
         })
        }else{
          this.getReferalProfile2().on('value', userProfileSnapshot => {
            if (userProfileSnapshot.val().refEarning)
            this.refEarning = userProfileSnapshot.val().refEarning
           })
        }
      }
        console.log(this.referal)
        })
      }
    });
  }

  getRatingProfile(): firebase.database.Reference {
    return this.Ratings;
  }

  getUserProfile(): firebase.database.Reference {
    return this.userProfile;
  }

  getResturantProfile(): firebase.database.Reference {
    return this.Restaurants;
  }

  getCartProfile(): firebase.database.Reference {
    return this.Cart;
  }


  getResturantFoodProfile(): firebase.database.Reference {
    return this.Foods;
  }

  getResturantCategoryProfile(): firebase.database.Reference {
    return this.Category;
  }


  getyProfile(): firebase.database.Reference {
    return this.IDProfile;
  }

  getUserIDProfile(r): firebase.database.Reference {
    return this.IDProfile.child(r);
  }

  getReferalProfile(): firebase.database.Reference {
    
    return this.referalProfile.child(this.referal);
  }

  getReferalProfile2(): firebase.database.Reference {
    
    return this.referalProfile2.child(this.referal);
  }

  getDriverProfile(): firebase.database.Reference {
    return this.DriverProfile;
  }

  getNewsProfile(): firebase.database.Reference {
    return this.companyNews;
  }

  getWebAdminProfile(): firebase.database.Reference {
    return this.WebAdminProfile;
  }

  getScheduledProfile(id: any): firebase.database.Reference {
    return this.ScheduledProfile.child(id);
  }

  getUserAsClientInfo(): firebase.database.Reference {
    return this.customer;
  }

  getAllDrivers(): firebase.database.Reference {
    return this.drivers;
  }

  getAllUser(): firebase.database.Reference {
    return this.users;
  }


  getAllPool(): firebase.database.Reference {
    return this.pools;
  }

  getAllSharingID(code): firebase.database.Reference {
    return this.uidProfile.child(code);
  }

  getAllSharingPromoID(code): firebase.database.Reference {
    return this.promoProfile.child(code);
  }

  getSharingID(): firebase.database.Reference {
    return this.uidProfile;
  }

  

  updateName(username: string): firebase.Promise<void> {
    return this.userProfile.update({
      name: username,
    });
  }

  

///Forr Refer for ride
  updatePromoID(id: string): firebase.Promise<void> {
    return this.promoProfile.child(id).update({
      id: [this.id],
    });
  }

  updateRideID(id: string): firebase.Promise<void> {
    return this.userProfile.update({
      idForRide: id,
    }).then(()=>{
      this.updatePromoID(id)
    });
  }


  ///Forr Refer for cash
  updateID(username: string): firebase.Promise<void> {
    return this.userProfile.update({
      id: username,
    });
  }

  updateGUID(username: string): firebase.Promise<void> {
    return this.uidProfile.child(username).update({
      id: [this.id],
    }).then(()=>{
      this.updateID(username)
    });
  }


  updateEmail(username: string): firebase.Promise<void> {
    return this.userProfile.update({
      email: username,
    });
  }

  UpdateNumber(
    number: number, username: any): firebase.Promise<any> {
    return this.userProfile.update({
      phoneNumber: number,
      name: username,
      rating: 0,
      ratingtext: 'Not Yet Rated'
    });
  }

  UpdateNumbers(
    number: number): firebase.Promise<any> {
    return this.userProfile.update({
      phoneNumber: number,
      earnings: 0
    });
  }


  UpdateUserLocation(lat: any, lng: any, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_location: [lat, lng],
    });
}


UpdateEarnings(sum: any ): firebase.Promise<any> {
  return this.userProfile.update({
    earnings: this.earnings + sum,
  });
} 


UpdateRefEarnings(sum: any ): firebase.Promise<any> {
  console.log(this.refEarning)
  return this.referalProfile.child(this.referal).update({
    refEarning: this.refEarning + sum,
  });
} 

UpdateRefEarnings2(sum: any ): firebase.Promise<any> {
  return this.referalProfile2.child(this.referal[0]).update({
    refEarning: this.refEarning + sum,
  });
} 



  UpdateHome(
    number: number): firebase.Promise<any> {
    return this.userProfile.update({
      Home: number,
    });
  }

  UpdateBank(
    bank: any, account: any): firebase.Promise<any> {
    return this.userProfile.update({
      bank: bank,
      accountNumber: account
    });
  }


  UpdateWork(
    number: number): firebase.Promise<any> {
    return this.userProfile.update({
      Work: number,
    });
  }

  UpdateReferal(
    number: number, id): firebase.Promise<any> {
    return this.userProfile.set({
      referal: number,
      referalID: id
    });
  }


  updateDestination(
    number: number): firebase.Promise<any> {
    return this.userProfile.update({
      Work: number,
    });
  }


  createHistory(name: string, price: number, date: any, 
    location: number, destination: number): firebase.Promise<any> {
    return this.userProfile.child('/eventList').push({
      name: name, 
      price: price,
      date: date,
      location: location,
      destination: destination
    });

  }

  UpdatePhoto(
    pic: any): firebase.Promise<any> {
    return this.userProfile.update({
      picture: pic,
    });
  }

  UpdateGuid(
    pic: any): firebase.Promise<any> {
    return this.userProfile.update({
      GUID: [pic, this.id],
    });
  }

  UpdateEarning(
    price: any): firebase.Promise<any> {
    return this.userProfile.update({
      earnings: price,
    });
  }

  
  

  UpdateUserRating(
    rate: any, text: any): firebase.Promise<any> {
    return this.userProfile.update({
      rating: rate,
      ratingtext: text
    });
  }

  PushRandomNumber(
    number: number): firebase.Promise<any> {
    return this.userProfile.update({
      random: number,
    });
  }

  Complain(
    value: any): firebase.Promise<any> {
    return  firebase.database().ref(`DashboardSettings/user/complains`).push({
      complain: value,
      email: this.user.email 
    });
  }


  RateDriver(id: any, rScore: any, text: any, value: boolean): firebase.Promise<any> {
    return firebase.database().ref(`driverProfile/${id}`).update({
      rating: rScore,
      review: text
    });
  }

  ApprovePickup(value: boolean, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_PickedUp: value,
    });
  }

  ApproveDrop(value: boolean, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_Dropped: value,
    });
  }

  SendMessage(value: any, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client/Chat`).push({
      Client_Message: value,
    });
  }

  CanCharge(value: boolean, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_CanChargeCard: value,
    });
  }


  UpdatePaymentType(
    number: number): firebase.Promise<any> {
    return this.userProfile.update({
      payWith: number,
    });
  }

  
}