import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class ProfileProvider {
  public userProfile:firebase.database.Reference;
  public userOtherProfile: firebase.database.Reference;
  public customer:firebase.database.Reference;
  otherDatabseInfo:firebase.database.Reference;
  public currentUser:firebase.User;
  public user: any;
  public drivers: any;
  public photo: any;
  public CustomerOwnPropertyRef: firebase.database.Reference;
  public location;
  public plate;
  public carType;
  public name;
  public seat;
  public rating : any;
  public picture;
  public number;
  public earnings;
  public mainuser;
  public userEmail;
  public accountNum;
  public caryear;
  public city;
  public rateText: any;
  public bank;
  public lat;
  uidProfile: firebase.database.Reference;
  public lng;
  referal_earnings: any;
  public ridePrice;
  public cars: any;
  public Language;
  public help;
  public loadingState: boolean = false;
  card:any;
  email:any;
  public convrefEarning: any;
  year: any;
  companyProfile:any;
  companyNews: any;
  month: any;
  cvc:any;
  public compEarnings: any;
  id: any;
  companyName: any;
  funds: any;
  constructor() {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        this.user = user;
       // console.log(user.email)
     //  this.userEmail = user.email;
       this.id = this.user.uid;
        this.userProfile = firebase.database().ref(`driverProfile/${user.uid}`);
        this.userOtherProfile = firebase.database().ref(`userProfile/${user.uid}`);
        this.otherDatabseInfo = firebase.database().ref(`DashboardSettings`);
        this.drivers = firebase.database().ref(`Drivers/`);
        this.uidProfile = firebase.database().ref(`SharingID/`);
        this.companyProfile = firebase.database().ref(`Company`);
        this.companyNews = firebase.database().ref(`News/Driver`);
        this.CustomerOwnPropertyRef = firebase.database().ref(`Customer/${user.uid}/client`);
        this.customer = firebase.database().ref(`Customer`);
        this.getUserOtherProfile().on('value', userProfileSnapshot => {
         this.mainuser = userProfileSnapshot.val()
        })

        this.getUserOtherProfile().on('value', userProfileSnapshot => {
          this.mainuser = userProfileSnapshot.val()
         })

         this.getDatabaseProfile().on('value', userProfileSnapshot => {
           console.log(userProfileSnapshot.val())
           this.cars = userProfileSnapshot.val();
         })

        this.getUserProfile().on('value', userProfileSnapshot => {
          this.plate = userProfileSnapshot.val().plate;
          this.ridePrice =  userProfileSnapshot.val().price;
          this.carType = userProfileSnapshot.val().carmodel;
          this.caryear = userProfileSnapshot.val().caryear;
          this.seat = userProfileSnapshot.val().seats;
          this.rating = userProfileSnapshot.val().rating;
          this.rateText = userProfileSnapshot.val().review;
          this.picture = userProfileSnapshot.val().picture;
          this.name = userProfileSnapshot.val().name;
          this.earnings = userProfileSnapshot.val().earnings;
          this.referal_earnings = userProfileSnapshot.val().referal_earnings;
          this.number = userProfileSnapshot.val().phoneNumber;
          this.accountNum = userProfileSnapshot.val().accountNumber;
          this.bank = userProfileSnapshot.val().Bank;
          this.city = userProfileSnapshot.val().city;
          this.card = userProfileSnapshot.val().Card_Number;
          this.email = userProfileSnapshot.val().Card_email;
          this.funds = userProfileSnapshot.val().funds;
          this.cvc = userProfileSnapshot.val().Card_Cvc;
          this.year = userProfileSnapshot.val().Card_Year;
          this.month = userProfileSnapshot.val().Card_month;
          this.Language = userProfileSnapshot.val().Language;
          this.convrefEarning = userProfileSnapshot.val().refEarning
          this.companyName = userProfileSnapshot.val().companies;
           
          this.getCompanyProfile(this.companyName).on('value', userProfileSnapshot => {
            if (userProfileSnapshot.val())
            this.compEarnings = userProfileSnapshot.val().earnings;
         })
         
        console.log(this.userProfile)
      })

    }

  })
    
  }


  getCurrentDriver(id: any): firebase.database.Reference {
    return this.userOtherProfile;
  }

  RateUser(id: any, rScore: any, text: any, value: boolean): firebase.Promise<any> {
    return firebase.database().ref(`userProfile/${id}`).update({
      rating: value,
      ratingtext: text
    });
  }

  getSharingID(): firebase.database.Reference {
    return this.uidProfile;
  }
  getActivityProfile(id: any): firebase.database.Reference {
    return this.CustomerOwnPropertyRef.child(`${id}/client`);
  }

  getCompanyProfileEarnings(): firebase.database.Reference {
    return this.companyProfile.child(`${this.companyName}/`);
  }

  getCompanyProfile(id: any): firebase.database.Reference {
    return this.companyProfile.child(`${id}/`);
  }
  

  getNewsProfile(): firebase.database.Reference {
    return this.companyNews;
  }

  getActiveProfile(id: any): firebase.database.Reference {
    return this.CustomerOwnPropertyRef.child(id);
  }

  getDatabaseProfile(): firebase.database.Reference {
    return this.otherDatabseInfo;
  }

  updateID(username: string): firebase.Promise<void> {
    return this.userProfile.update({
      id: username,
    });
  }

  updateGUID(username: string): firebase.Promise<void> {
    return this.uidProfile.child(username).update({
      id: [this.user.uid],
    }).then(()=>{
      this.updateID(username);
    });
  }
  

  getUserProfile(): firebase.database.Reference {
    return this.userProfile;
  }

  UpdateEarnings(sum: any ): firebase.Promise<any> {
    return this.userProfile.update({
      earnings: this.earnings + sum,
    });
  } 

  UpdateRating(current: any, text: any ): firebase.Promise<any> {
    return this.userProfile.update({
      rating: current,
      review: text
    });
  } 

  UpdatePaymentType(
    number: number): firebase.Promise<any> {
    return this.userProfile.update({
      payWith: number,
    });
  }

  getUserOtherProfile(): firebase.database.Reference {
    return this.userOtherProfile;
  }

  getUserAsClientInfo(id: any): firebase.database.Reference {
    return firebase.database().ref(`Customer/${id}/`);
  }

  getUserAsClientInfoMessage(id: any): firebase.database.Reference {
    return firebase.database().ref(`Customer/${id}/`);
  }

  getUser2AsClientInfo(id: any): firebase.database.Reference {
    return firebase.database().ref(`Customer/${id}/`);
  }

  getAllDrivers(): firebase.database.Reference {
    return this.drivers;
  }


  Complain(
    value: any): firebase.Promise<any> {
    return  firebase.database().ref(`DashboardSettings/driver/complains`).push({
      complain: value,
      email: this.user.email 
    });
  }


  UpdateInfo(name: string, city: string, license: any, carmodel: any, caryear: number, plate: any, seats: number, accountNum: any, bank: any, cartype: any, insp: any): firebase.Promise<any> {
    return this.userProfile.update({
      name:name,
      city: city,
      license: license,
      carmodel: carmodel,
      caryear: caryear,
      plate: plate,
      seats: seats,
      rating: 0,
      earnings: 0,
      active_state: false,
      accountNumber: accountNum,
      Bank: bank,
      Cartype: cartype,
      price: 10,
      Language: 'en',
      inspector: insp
    });
  }


  UpdateNumber(number: number): firebase.Promise<any> {
    return this.userProfile.update({
      phoneNumber: number,
    });
  }

  UpdateAccountNumber(number: any): firebase.Promise<any> {
    return this.userProfile.update({
      accountNumber: number,
    });
  }

  UpdatePPhotoInfo(picture: any ): firebase.Promise<any> {
    return this.userProfile.update({
      picture: picture,
    });
  }

  UpdateLanguage(value: any ): firebase.Promise<any> {
    return this.userProfile.update({
      Language: value,
    });
  }


  UpdateNPhotoInfo(picture: any ): firebase.Promise<any> {
    return this.userProfile.update({
      NID: picture,
    });
  }

  UpdateBank(number: any): firebase.Promise<any> {
    return this.userProfile.update({
      Bank: number,
    });
  }

  UpdateCar(number: any): firebase.Promise<any> {
    return this.userProfile.update({
      Cartype: number,
    });
  }


  UpdateCarModel(number: any): firebase.Promise<any> {
    return this.userProfile.update({
      carmodel: number,
    });
  }

  UpdatePrice(number: any): firebase.Promise<any> {
    return this.userProfile.update({
      price: number,
    });
  }

 

  UpdateCarYear(number: any): firebase.Promise<any> {
    return this.userProfile.update({
      caryear: number,
    });
  }

  UpdateName(number: any): firebase.Promise<any> {
    return this.userProfile.update({
      name: number,
    });
  }

  UpdatePlate(number: any): firebase.Promise<any> {
    return this.userProfile.update({
      seats: number,
    });
  }

  UpdateCarSeats(number: any): firebase.Promise<any> {
    return this.userProfile.update({
      caryear: number,
    });
  }

  UpdateCity(number: any): firebase.Promise<any> {
    return this.userProfile.update({
      city: number,
    });
  }

  getAllSharingID(): firebase.database.Reference {
    return this.uidProfile;
  }

  UpdateCartype(number: any): firebase.Promise<any> {
    return this.userProfile.update({
      Cartype: number,
    });
  }

  UpdateLPhotoInfo(license_picture: any ): firebase.Promise<any> {
    return this.userProfile.update({
      license_picture: license_picture,
    });
  }


  
}