import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams, Events } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { ProfileProvider } from '../../providers/profile/profile';
import { IonicPage, Platform } from 'ionic-angular';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { SettingsProvider } from '../../providers/settings/settings';
import { OnesignalProvider } from '../../providers/onesignal/onesignal';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
import { GeocoderProvider } from '../../providers/geocoder/geocoder';
import { LanguageProvider } from '../../providers/language/language';
import { OneSignal} from '@ionic-native/onesignal';
declare var google;
@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
  public scheduleList: Array<any>;
  currentYear: any;
  currentMonth: any;
  currentDay: any;
  userPos: any;
  lat: any;
  public bookable: boolean = false;
  lng: any;
  notif_id: any;
  locationName: any;
  public geocoder: any = new google.maps.Geocoder;
  constructor(public navCtrl: NavController, public One: OneSignal, public lp: LanguageProvider, public events: Events, public platform: Platform, public navParams: NavParams, public gCode: GeocoderProvider, public locat:LocationTrackerProvider, public settings: SettingsProvider, public oneSignal: OnesignalProvider, public pop: PopUpProvider, public load: LoadingController, public profile: ProfileProvider, public alert: AlertController, public eventProvider: EventProvider) {
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getUTCMonth() + 1;
    this.currentDay = new Date().getUTCDate();
    
    
   
  }


  ionViewDidLoad(){
    if (this.platform.is('cordova')){
    this.locat.map1.getMyLocation(
      {
        enableHighAccuracy: true, // use GPS as much as possible
      }
    ).then(location =>{
      this.lat = location.latLng.lat;
      this.lng = location.latLng.lng;
      this.userPos = new google.maps.LatLng(this.lat, this.lng)
     // this.pop.presentLoader('Getting location...')
      let latlng = {lat: parseFloat(this.lat), lng: parseFloat(this.lng)};
      this.geocoder.geocode({'location': latlng}, (results, status) => {
        if (status === 'OK') {
          this.CheckPossibles()
            //document.getElementById("position").innerText = results[0].formatted_address;
            this.locationName = results[0].formatted_address;
           //  this.pop.hideLoader()
          // this.location = this.locationName;
          } else {
           // this.pop.showPimp(results[0]);
          }
    
      
    })
      console.log('How Ploder Goder ....');
    })

  }else{
      this.lat = 4.883364;
      this.lng = 7.025034;
      this.userPos = new google.maps.LatLng(this.lat, this.lng)
     // this.pop.presentLoader('Getting location...')
      let latlng = {lat: parseFloat(this.lat), lng: parseFloat(this.lng)};
      this.geocoder.geocode({'location': latlng}, (results, status) => {
        if (status === 'OK') {
            //document.getElementById("position").innerText = results[0].formatted_address;
            this.locationName = results[0].formatted_address;
           //  this.pop.hideLoader()
           this.CheckPossibles()
          // this.location = this.locationName;
          } else {
           // this.pop.showPimp(results[0]);
          }
    
      
    })
      console.log('How Ploder Goder ....');
  }

    
  }

  CheckPossibles() {
    this.eventProvider.getScheduleList().on('value', snapshot => {
      this.scheduleList = [];
      snapshot.forEach( snap => {
       console.log( snap.val().Client_Date)
       let today = new Date()
       let future = new Date(snap.val().Client_Date)
      
       let a = this.calcDate(today,future)
       console.log(a[1], this.userPos)
       let begin = this.userPos
       let end = new google.maps.LatLng(snap.val().Client_location[0], snap.val().Client_location[1])
       let suc = google.maps.geometry.spherical.computeDistanceBetween(begin, end)
       
       console.log(suc)
       if (suc < 1000){
           this.bookable = true
           console.log('its close enough')
       }else{
         this.bookable = false
       }
        this.scheduleList.push({
          id: snap.key,
          name: snap.val().Client_username,
          price: snap.val().Client_price,
          date: a[0],
          duedate: a[1],
          canBook: true,
          time: snap.val().Client_Time,
          location: snap.val().Client_locationName,
          destination: snap.val().Client_destinationName,
          payWith: snap.val().Client_paymentForm,
          picture: snap.val().Client_picture,
          phone: snap.val().Client_phoneNumber,
          lat: snap.val().Client_location[0],
          lng: snap.val().Client_location[1],
          rating: snap.val().Client_Rating,
          ratingText: snap.val().Client_RatingText
        });
       
        return false
        
      });
      
    });
    
  

    this.presentRouteLoader('')
   
  }


  Warn(time){
    this.pop.showPimp(this.lp.translate()[0].k7)
  }



  calcDate(date1, date2) {

    var diff = Math.floor(date2.getTime() - date1.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);

    console.log(days)

    var message = [date2.toDateString(), days]
    // message += " was "
    // message += days + " days " 
    // message += months + " months "
    // message += years + " years ago \n"

    return message
    }




  presentRouteLoader(message) {
    let loading = this.load.create({
      content: message
    });
  
    loading.present();
  
    let myInterval = setInterval(() => {
    if (this.scheduleList != null){
      loading.dismiss();
      clearInterval(myInterval)
    }
      
    }, 1000);
  }

  

  Start(e){

    if (!this.platform.is('cordova')){
      this.notif_id = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
     }else{
       this.One.getIds().then( success => {
         this.notif_id = success.userId
       })
     }

     console.log(this.notif_id, e.id)

if (this.notif_id)

// if (this.notif_id != e.id) {
    if (!this.platform.is('cordova')){
      this.locat.lat = 4.883364;
      this.locat.lng = 7.025034;
      this.gCode.locationName = 'Abuja, Nigeria'
      this.locationName = 'Abuja, Nigeria'
      this.lat = 4.883364;
      this.lng = 7.025034;
    }

    this.settings.id = e.id
    console.log(this.settings.id)
    this.settings.current_ID = true
    console.log(e)
    console.log(this.locat.lat);
    this.locat.hasTransactionEnded = true;
    this.locat.canTrack_ = true;

    console.log('Stopped Normal Movement Of Driver')
    this.oneSignal.isInDeepSh_t = true;
    
    this.profile.getUserAsClientInfo(this.navParams.get('notif')).off('child_added')
    this.profile.getUserAsClientInfo(this.navParams.get('notif')).off('child_changed')
    this.profile.getUserAsClientInfo(this.navParams.get('notif')).off('child_removed')
     
    this.eventProvider.getCurrentDriver().remove().then((id) => {
      
     
        //Push the drivers information to the customer connection node in the database
      this.eventProvider.getActivityProfile(e.id).set({
        
        Client_username: e.name,
        Client_Deleted: false,
        Client_location: [e.lat,e.lng],
        Client_locationName: e.location,
        Client_paymentForm: e.payWith,
        Client_picture: e.picture,
        Client_phoneNumber: e.phone,
        Client_destinationName: e.destination,
        Client_CanChargeCard: false,
        Client_PickedUp: false,
        Client_Dropped: false,
        Client_HasRated: false,
        Client_ended: false,
        Client_price: e.price,
        Client_Rating: e.rating,
        Client_RatingText: e.ratingText,
        entered: 0,
        Driver_name: this.profile.name,
        Driver_location: [this.lat, this.lng],
        Driver_locationName: this.locationName,
        Driver_plate: this.profile.plate,
        Driver_picture: this.profile.picture,
        Driver_ID: '43566625',
        Driver_seats: this.profile.seat,
        Driver_carType: this.profile.carType,
        Driver_rating: this.profile.rating, 
        Driver_number: this.profile.number,
        Driver_HasRated: false
      }).then(suc=>{
          //After removing the driver from the driver node we can then create a push notification to this driver
          if (this.platform.is('cordova')){
          this.oneSignal.sendPush(e.id);
          }
           
          this.platform.ready().then(()=>{
            this.platform.registerBackButtonAction(()=>this.pop.presentToast(this.lp.translate()[0].k8));
          })

          this.navCtrl.pop().then(() => {
            /// Trigger custom event and pass data to be send back
           this.settings.id = e.id
           console.log(this.settings.id)
        });

        //  this.navCtrl.pop({verificationid: e.key});
      })
  
    })

  // }else{
  //   this.pop.showPimp('Run On different Devices to test Ride Scheduling')
  // }
  }


  

}