import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController, Platform, ModalController, LoadingController, Loading, NavParams, Events } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
import { ProfileProvider } from '../../providers/profile/profile';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { DirectionserviceProvider } from '../../providers/directionservice/directionservice';
import { OnesignalProvider } from '../../providers/onesignal/onesignal';
import { GeocoderProvider } from '../../providers/geocoder/geocoder';
import { OneSignal} from '@ionic-native/onesignal';
import { CallNumber } from '@ionic-native/call-number';
import { Storage } from '@ionic/storage';
import { ProfilePage } from '../profile/profile';
import { HistoryPage } from '../history/history';
import firebase from 'firebase';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicPage } from 'ionic-angular';
import { RatePage } from '../../pages/rate/rate';
import { BackgroundMode } from '@ionic-native/background-mode';
import { SettingsProvider } from '../../providers/settings/settings';
import { Vibration } from '@ionic-native/vibration';
import {timer} from 'rxjs/observable/timer'
import {interval} from 'rxjs/observable/interval'
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
//  CameraPosition,
 // MarkerOptions,
 // Marker,
//  Geocoder,
  LatLngBounds,
  LatLng
 } from '@ionic-native/google-maps';
import { LanguageProvider } from '../../providers/language/language';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
declare var google;

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ LocationTrackerProvider, ProfileProvider, PopUpProvider, DirectionserviceProvider, OnesignalProvider, GeocoderProvider ],
  
})

export class HomePage {
 // @ViewChild('map') mapElement: ElementRef;
  map: any;
  address: any;
  userProfile: any;
  paymentType: any;
  notification_Id: any;
  public toggleMore: boolean = false;
  public geocoder: any = new google.maps.Geocoder;
  gpsIson: boolean = false;
  public hideMe: boolean = false;
  public marker: any;
  public name2;
  public picture2;
  public location2;
  public destination2;
  public rating2;
  public hasArrived: boolean = false;
  public ratingText2;
  public poolRequest: boolean = false;
  public message2: any;
  public urPos2: any;
  public driverLoc2: any;
  hasAdded_Destination2 : boolean =  false; 
  hasPooled: boolean = true;
  poolEnd: boolean = true
  name: any;
  watchId: any;
  hasDone: boolean = true;
  timeOut: any;
  lat: any;
  isBlocked: boolean = false;
  urPos: any;
  canLoad: boolean = true;
  lng: any;
  myAlert: any;
  timer: any;
  location: any;
  doneK : boolean = true
  picture: any;
  canDO: boolean = true;
  destination: any;
  returningUser: boolean = true;
  NotifyTimes: number = -1;
  timerBeforeNotify: number = 2000;
  timeTonotify: any;
  mapSection: boolean = false;
  toggleButtons: boolean = false;
  moreText: string = "Hide All" 
  moreIcon: any = "ios-arrow-up"
  canShowOther: boolean = false;
  public hasNotPicked: boolean = true;
  public hasNotPicked2: boolean = true;
  public customerPhone: any;
  public customerPhone2: any;
  public hasPooled2: boolean = true;
  hideNews: boolean = false;
  userLat: any;
  userLat2: any;
  notification: boolean = false;
  numSchedule: any;
  mapFalse: boolean = false;
  userLng: any;
  userLng2: any;
  driverLoc: any;
  connected: boolean = false;
  toggleStatus: boolean = false;
  notify_ID: any;
  userHasPhone: boolean = false;
  hasAdded_Destination: boolean = false;
  message: string;
  cartype: any = 'Delivery';
  earnings: any;
  canEnd2: boolean = true;
  public connect: boolean = false;
  canEnd : boolean = true;
  callback: any;
  public rating: any = 0;
  public ratingText: any = 'Cool';
  appReady: boolean = false;
  public hasSent: boolean = false;
  public canStopCheck: boolean = false;
  public canStop: boolean = false
  isNetwork: boolean = true;
  greut: boolean = true;
  public called = true;
  customerID: any;
  public showGps: boolean = false;
  public hasEnded : boolean = true;
  public called2 = true;
  public called_2 = true;
  public news: any;
  public itsOver: boolean = true;
  public called_22 = true;
  public ridePrice: any;
  public newsti: any;
  public tacktime = true;
  public dropped = true;
  public dropped2 = true;
  cliet: boolean = true;
  public clientClrCheck: boolean = false;
  public PoolClrCheck: boolean = false;
  public done = true;
  public hasNotFoundMap: boolean = true;
  showPassenger2: boolean = false;
  loading: Loading;
  public scheduleList: Array<any>;
  public eventList: Array<any>;
  constructor(private callNumber: CallNumber,  private vibration: Vibration, private googleMaps: GoogleMaps, public lp: LanguageProvider, public modalCtrl: ModalController, public storage: Storage, private events: Events, public settings: SettingsProvider,  public navParams: NavParams, private backgroundMode: BackgroundMode, public One: OneSignal, public statusBar: StatusBar, public loadingCtrl: LoadingController, public locationTracker: LocationTrackerProvider, public myGcode: GeocoderProvider, public dProvider: DirectionserviceProvider, public platform: Platform, public OneSignal: OnesignalProvider, public alert: AlertController, public pop: PopUpProvider, public ph: ProfileProvider, public navCtrl: NavController, public eventProvider: EventProvider) {
   

  }



 ionViewDidEnter(){
  this.platform.ready().then(() => {
    
    this.eventProvider.getCurrentDriver().on('value', s =>{
      if (s.val()){
        this.pop.loggedOff = false;
      if (s.val().deliveryID){
      console.log(s.val())
      this.notify_ID = s.val().deliveryID
      this.eventProvider.getCurrentDriver().remove().then(()=>{
         this.StartListeningForChanges(this.notify_ID);
       // this.pop.GoOffline();
        if (this.platform.is('android')) {
        //this.backgroundMode.disable();
        }
      
      })
      }else{
      
      }
    }else{
      this.pop.loggedOff = true;
    }
    })
  
   console.log('did enter');
   
   if (!this.platform.is('cordova')) {
    this.locationTracker.lat = 4.883364 
    this.locationTracker.lng = 7.025034
  }
  
   if (this.appReady && this.locationTracker.lat != 0){
    console.log(this.settings.current_ID)
    if (!this.platform.is('cordova')) {                                                                  
      if (this.hasEnded){
        console.log('Updating car on database.')
   //  this.OneSignal.UpdateInfo(this.locationTracker.lat, this.locationTracker.lng, this.cartype);
      }
    }
  if (this.platform.is('cordova')){
   
    if (this.hasEnded){
//  this.OneSignal.UpdateInfo(this.locationTracker.lat, this.locationTracker.lng, this.cartype);
  this.platform.registerBackButtonAction(()=>this.platform.pause)
  this.platform.registerBackButtonAction(()=>this.platform.exitApp())
    }
 
    if (this.settings.current_ID){
    this.showLoadRefresh()
    this.notify_ID = this.settings.id
    console.log('scheduling activated')
   
  }
 
  }else{
    if (this.settings.current_ID){
      this.showLoadRefresh();
      this.notify_ID = this.settings.id
      console.log('scheduling activated')
      this.StartListeningForChanges(this.notify_ID);
    }
    
  }
   }

  })
 }



  ionViewDidLoad(){

    
           this.ph.loadingState = true;
                  //console.log(this.ph.loadingState)
                 //  console.log(active_User)
                   var otherDatabseInfo = firebase.database().ref(`DashboardSettings`);
                   otherDatabseInfo.on('value', userProfileSnapshot => {
                   this.dProvider.fare = userProfileSnapshot.val().price;
                   this.dProvider.pricePerKm = userProfileSnapshot.val().perkm;
                   // this.pop.appName = userProfileSnapshot.val().AppName;
                //   this.settings.appcurrency = userProfileSnapshot.val().Currency;
                   })
  
                    
       
                   this.eventProvider.getScheduleList().on('value', snapshot => {
                      if (snapshot.val() != null)
                      this.numSchedule = 1
                    
                      console.log(this.numSchedule);
                    });
                  
                    this.ph.getUserProfile().on('value', userProfileSnapshot => {
                      this.earnings = userProfileSnapshot.val().earnings
                    })
  
  
                   
  
                   
             this.ph.getNewsProfile().on('value', userProfileSnapshot => {
               if (userProfileSnapshot.val()){
              this.news = userProfileSnapshot.val().News
              
                 
               }
             
          
             this.storage.get('News').then((sd)=>{
              console.log(sd, this.news)
              if (sd == this.news){
                this.hideNews = true
                console.log(sd)
              }else{
                this.hideNews = false;
                this.newsti = 'News Available'
              }
             })
          
            })
                   
              //       if (this.platform.is('cordova')) {
              //      this.backgroundMode.enable();
              //      this.backgroundMode.setDefaults({
              //       title: this.lp.translate()[0].e2,
              //       text: this.lp.translate()[0].e3,
              //       bigText: true,
              //       hidden: false,  
              //   })
              //     this.backgroundMode.overrideBackButton()
              // }
                  if (!this.platform.is('cordova')) {
                    this.locationTracker.lng = 7.025034
                    this.locationTracker.lat = 4.883364
                    this.locationTracker.hasShown = true
                 //   this.loadMap(this.locationTracker.lat, this.locationTracker.lng)
                  }
                  if (this.platform.is('cordova')) { 
                    if (this.hasDone){
                      this.NowWaitingForID();
                      this.hasDone = false
                      this.showLoadRefresh()
                      this.locationTracker.loadMap()
                        }
                   
  
                   }else{
                    if (this.hasDone){
                      this.NowWaitingForID();
                      this.hasDone = false
                      this.showLoadRefresh()
                        }
                     this.loadMapGoogle(this.locationTracker.lat, this.locationTracker.lng)
                   }
                 
  
  
                 let fTime = setTimeout(() => {
                  if (this.locationTracker.mapLoadComplete){
                    clearInterval(fTime);
                    this.showGps = false;
                  }else{
                    this.showGps = true;
                  }
               }, 4000);
  }


  checkConnection(){
    let done = true
    let dismissLoader = this.loadingCtrl.create({
      content: 'Network Lost, Please Check Your Connection. Retrying...'
    });
    let connectedRef = firebase.database().ref(".info/connected");
         connectedRef.on("value", (snap) => {
        
          if (snap.val() === true) {
            if (this.connect){
           
              dismissLoader.dismiss();
            this.connect = false;
          
            console.log('cancelled network error loader');
            //connectedRef.off("value");
            }
          } else {
            if (!this.connect){

             

            dismissLoader.present();
         
             this.connect = true;
            }
          }
       
        });
  }


  
toggleMapFalse(){
  this.mapFalse = this.mapFalse ? false : true
}

openNews(){
  let mod = this.modalCtrl.create('NewsPage')
  mod.present();
  mod.onDidDismiss(() => {
    this.hideNews = true;
    this.storage.set(`News`, this.news);
   })
}


togglePassengers(){
  this.showPassenger2 = this.showPassenger2 ? false : true;
  console.log('Now Toggling');
 // this.poolRequest = this.poolRequest ? false : true
}


gotoSupport(){
  this.navCtrl.push('SupportPage');
  this.platform.registerBackButtonAction(()=>this.navCtrl.popToRoot());
}


hoseMe(){
  this.hideMe = this.hideMe ? false : true
}

showMoreRating(){
  this.pop.showPimp(this.ratingText);
}

showMoreMessage(){
  this.pop.showPimp(this.message);
}


gotoScheduled(){
  this.platform.registerBackButtonAction(()=>this.navCtrl.popToRoot());
  this.navCtrl.push('SchedulePage', {lat:this.locationTracker.lat, lng:this.locationTracker.lng, notif: this.notify_ID}); // Push your "OtherPage"                                                                                                                                                                                                                                                                 
}









  loadMapGoogle(lat, lng){
   let latLng = new google.maps.LatLng(lat, lng);
   
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false
      }

    //  this.map.setLabel(null)
   
      //this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
   console.log('map called')

    }

  NowWaitingForID(){
    
    let location_locationTracker_loop = interval(1000).subscribe(() => {
     
    //  this.StartTracker(false);
      if (this.locationTracker.hasShown){
        location_locationTracker_loop.unsubscribe()
      if (this.doneK){
        this.doneK = false
        this.pop.presentToast('Now Online')
        console.log(this.locationTracker.lng);
        this.CheckForPreviousData();
        this.showGps = false;
        this.locationTracker.mapLoadComplete = true;
        this.toggleStatus = true;
        this.pop.loggedOff = false;
        this.hasNotFoundMap = false;
         this.StartTracker(true);
       // this.pop.onRequest = true;
       // alert('Weak As Fuck')
        
         // this.WaitForNotificationID();
          this.StartListeningForChanges(this.notify_ID);
       
          this.notification_Id = this.notify_ID
       
        this.appReady = true;
        console.log("connected")
        if (!this.isBlocked){
        this.OneSignal.UpdateInfo(this.locationTracker.lat, this.locationTracker.lng, this.cartype);
        this.myGcode.Reverse_Geocode(this.locationTracker.lat, this.locationTracker.lng, this.locationTracker.map1, false)
        }
      }
      }
      
      })
         

      
      
      
   }


StartTracker(state){
  let tracker = interval(2000).subscribe(() => {
    if (state == true){
  if (this.platform.is('cordova'))
  this.locationTracker.map1.getMyLocation().then(location =>{
    this.lat = location.latLng.lat;
    this.lng = location.latLng.lng;
    this.OneSignal.UpdateInfo(this.lat, this.lng, this.cartype);
    this.locationTracker.map1.animateCamera({
      target: location.latLng,
      zoom: 15,
      tilt: 0,
      bearing: 0,
      duration: 1000
     }).then(distanceApart => { 

     })
    this.locationTracker.marker.setPosition(new LatLng(this.lat, this.lng));
    console.log('Updating Your Location ....');
  }).catch((error)=>{
     console.log(error);
   
  })

  //alert('Weak As Fuck')

}else{
  tracker.unsubscribe();
  //state = false;
}
});
}

  //  WaitForNotificationID(){
  //   let notuif_loop = setTimeout(()=>{
  //     if (this.OneSignal.notif_id != null){
  //       clearTimeout(notuif_loop)

  //    this.notification_Id = this.OneSignal.notif_id
  //    this.StartListeningForChanges(this.notification_Id);
  //    }, 300)
  //  }

  gotoProfile(){
    this.navCtrl.push('ProfilePage')
    this.platform.registerBackButtonAction(()=>this.navCtrl.popToRoot());
  }

  gotoEarnings(){
    this.navCtrl.push('PaymentPage')
    this.platform.registerBackButtonAction(()=>this.navCtrl.popToRoot());
  }

  SendMessage(){
    let modal = this.modalCtrl.create('ChatPage', {id:this.notify_ID});
    modal.present();
 modal.onDidDismiss(() => {
   this.notification = false;
 })
  }



  CheckForPreviousData(){
    this.storage.get('currentUserId').then((value) => {
    if (value != null){
     this.notify_ID = value;
     this.StartListeningForChanges(this.notify_ID);
     this.settings.current_ID = true
     let num = Math.floor(Math.random() * Math.floor(10))
     console.log(num);
     this.hasAdded_Destination = true
    // this.eventProvider.confirmRentry(num, this.notify_ID)
    //console.log(this.locat.lat);
    this.locationTracker.hasTransactionEnded = true;
    this.locationTracker.canTrack_ = true;
    this.platform.ready().then(() =>{
     this.platform.registerBackButtonAction(()=>this.pop.presentToast(this.lp.translate()[0].e4));
   })
    console.log('Stopped Normal Movement Of Driver')
    this.OneSignal.isInDeepSh_t = true;

    }else{
     this.storage.remove(`currentUserId`);
    }

  }).catch(er=>{console.log(er)});
    
  }

  gotoHistory(){
  this.navCtrl.push('HistoryPage');
  this.platform.registerBackButtonAction(()=>this.navCtrl.popToRoot());
  }


  goOnline(){
if (this.locationTracker.lat != 0){
    this.pop.loggedOff = false;
    this.pop.presentToast(this.lp.translate()[0].e5);
    this.OneSignal.UpdateInfo(this.locationTracker.lat, this.locationTracker.lng, this.cartype);
    
//     if (this.platform.is('cordova')) {
//     this.backgroundMode.enable();
//     this.backgroundMode.setDefaults({
//      title: this.lp.translate()[0].e2,
//      text: this.lp.translate()[0].e3,
//      bigText: true,
//      hidden: false,
//  })

// }

}else{
  this.pop.alertMe('No latitude and Longitude On Your Device. Are You running on an emulator?')
}

  }



  goOffline(){
    this.pop.GoOffline();
    if (this.platform.is('android')) {
    //this.backgroundMode.disable();
    }
    this.pop.loggedOff = true;
  }
  

  call(){
  //  this.callNumber.callNumber(this.customerPhone, true)
  //  .then(() => console.log('Launched dialer!'))
  //  .catch(() => console.log('Error launching dialer'));
  //  alert('trying to call')
   window.open("tel:" + this.customerPhone);
  }


  clearConnection(){
      let customer = firebase.database().ref(`Customer/${this.notify_ID}`);
      customer.remove().then((success) => {
        this.pop.hasPicked = false;
        this.hasNotPicked = true;

        this.pop.hasPicked2 = false;
        this.hasNotPicked2 = true;

        

      })
  }

//  showHelp(){
//    this.pop.alertMe('PLEASE MAKE SURE YOU HAVE GOOGLE MAPS INSTALLED ON YOUR DEVICE. Click on start navigation, to drive to client. ')
//  }


 alertMe(){
  let alert = this.alert.create({
    title: 'Are Sure You Want Cancel This Job?',
    buttons: [ {
      text: "Yes",
      role: 'cancel',
      handler: () => {
        this.clearAllNow();
      }
    },
    {
      text: "No",
      role: 'cancel',
      handler: () => {
        
      }
    },
   ],
    enableBackdropDismiss: true 
  });
  alert.present();
}


Arrived(){
  if (this.platform.is('cordova'))
  this.sendPush(this.customerID)
  this.hasArrived = false;
  this.eventProvider.ApprovedArrival(true, this.notify_ID)
}

sendPush(id){
  // console.log('This is the push id', [id])
   let notificationObj:any = {
     include_player_ids: [id],
     contents: {en: 'Your Driver Has Arrived'},
     };
 
 this.One.postNotification(notificationObj).then( good => {
   console.log(good);
     //alert("Notification Post Success:\n" + id);
   }, error => {
     console.log(error);
     //this.pop.showPimp(error)
     // alert("Notification Post Failed:\n" + JSON.stringify(error));
    // alert("Notification Post Failed:\n" + id);
   });


}



 Pickup(){
  this.eventProvider.ApprovePickup(true, this.notify_ID)
  this.pop.hasPicked = true
  if (this.platform.is('cordova'))
  this.sendPush(this.customerID)
 // this.locationTracker.hasTransactionEnded = false
 // clearTimeout(this.locationTracker.tracking_timeout)
  this.locationTracker.ClearDetection = true;
  //clearInterval(this.locationTracker.detectCarChange)
  this.myGcode.Reverse_Geocode(this.locationTracker.lat, this.locationTracker.lng, this.locationTracker.map1, false)
  //this.locationTracker.ResetMe()
  this.pop.showLoader('')
  if (this.platform.is('cordova')){
  this.locationTracker.map1.clear().then(()=>{
      this.locationTracker.isDestination = true
    this.geocoder.geocode( { 'address': this.destination}, (results, status) => {
      if (status == 'OK') {
       var position = results[0].geometry.location
       let lat = position.lat();
       let lng = position.lng();
       let location = [
         lat,
         lng
       ]
       if (this.platform.is('cordova'))
       //this.locationTracker.map1.clear().then(()=>{
        this.locationTracker.setMarkers(location)
      // })

       let urPos = new google.maps.LatLng(lat, lng);
       let uLOC = new google.maps.LatLng(this.locationTracker.lat, this.locationTracker.lng);
        this.dProvider.calcDestRoute(this.name, uLOC, urPos, this.destination, this.notify_ID);
        this.pop.hideLoader()
      }
      })

  })
}else{
      let urPos = new google.maps.LatLng(4.883364, 7.025034);
       let uLOC = new google.maps.LatLng(this.locationTracker.lat, this.locationTracker.lng);
        this.dProvider.calcDestRoute(this.name, uLOC, urPos, this.destination, this.notify_ID);
        this.pop.hideLoader()
      }
  }
 
 Drop(){
  //  if (this.hasAdded_Destination){
    clearTimeout(this.locationTracker.tracking_timeout);
    this.locationTracker.canTrack_ = false;
    this.locationTracker.hasTransactionEnded = false;
    this.eventProvider.ApproveDrop(true, this.notify_ID)
    
   }


   ConfirmDrop(){
    const alert = this.alert.create({
      message: this.lp.translate()[0].c5,
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].c7,
          handler: data => {
           this.Drop()
          }
        }
      ]
    });
    alert.present();
  }


  ConfirmPickup(){
    const alert = this.alert.create({
      message: this.lp.translate()[0].c5,
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].c7,
          handler: data => {
           this.Pickup()
          }
        }
      ]
    });
    alert.present();
  }



 StartListeningForChanges(id){
   
    this.notify_ID = id
    console.log(this.notify_ID)

    if (this.settings.current_ID){
      this.storage.set(`currentUserId`, this.notify_ID).then(()=>{
        console.log('saved id')
      })
     
    }

    this.eventProvider.getChatList(this.notify_ID).orderByValue().on('child_added', snapshot => {
      if (snapshot.val().Client_Message){
        this.notification = true;
     this.pop.presentToast('New Message From Client')
     this.vibration.vibrate(1000);
      }
   })

   this.ph.getUserAsClientInfo(this.notify_ID).on('child_added', driverSnap => {
     this.UserAdded(driverSnap);
     console.log(driverSnap.val())
   });

   
   this.ph.getUserAsClientInfo(this.notify_ID).on('child_changed', driverSnap => {
     this.UserChanged(driverSnap);
     this.locationTracker.userLat = location[0];
     this.locationTracker.userLng = location[1];
   });

   this.ph.getUserAsClientInfo(this.notify_ID).on('child_removed', driverSnap => {
      this.UserRemoved(driverSnap);
   });

 }





 UserAdded(driverSnap){

  console.log("poured in details, alert called oo");
 // this.pop.presentToast('New Rider Detected')

 if (this.platform.is('cordova')) { 
 //this.locationTracker.map1.setClickable(false);
// this.map.
 }



  this.Client_Added(driverSnap, this.lp.translate()[0].e8)



this.StartTracker(false)

 }







Client_Added(driverSnap, f){
  console.log(driverSnap.val().Client_location, driverSnap.val().Client_ended)

  if (driverSnap.val().Client_location && driverSnap.val().Client_ended == false && this.hasPooled2){
    this.driverLoc = driverSnap.val().Client_location
    console.log('shit happens')
    this.hasPooled2 = false;
    this.mapSection = true;
    this.canDO = true;
    this.hideNews = true
    this.userHasPhone = true;
    let obj = {info:f}
   this.myAlert = this.modalCtrl.create('AcceptPage', obj);
   this.myAlert.onDidDismiss(data => {
     if (data == 1 && !this.hasEnded){
      this.ph.getUserAsClientInfo(this.notify_ID).on('value' , driverSnap => {
        if (driverSnap != null){
          this.AcceptJob()
        }else{
          this.pop.presentToast('You Lost the Job')
        }
        this.ph.getUserAsClientInfo(this.notify_ID).off('value')
      })
     }else{
     this.RejectJob()
     }
   })
   this.myAlert.present()
    // this.isNetwork = driverSnap.val().Network_state
    console.log("driver location not null");
    this.customerPhone = driverSnap.val().Client_phoneNumber
    this.destination = driverSnap.val().Client_destinationName
    this.customerID = driverSnap.val().Client_Notif
  
   this.NewClientFound(
   driverSnap.val().Client_locationName,
   driverSnap.val().Client_location,
   driverSnap.val().Client_username,
   driverSnap.val().Client_picture,
   driverSnap.val().Client_destinationName,
   driverSnap.val().Client_Rating,
   driverSnap.val().Client_RatingText,
   driverSnap.val().Client_price
  );
   }


  
}









 UserChanged(driverSnap){
   
     if (driverSnap.val().Client_hasPaid && this.dropped2){
      console.log('Passenger 1 has paid');
      this.pop.hideLoader();
      this.dropped2 = false;
    }

    if (driverSnap.val().Pool_ended){
      this.pop.presentToast('Passenger Has Cancelled Request')
    }


if (driverSnap.val().Client_ended && this.canEnd){
  // this.clearDuty();
  this.locationTracker.hasTransactionEnded = false
  this.OneSignal.isInDeepSh_t = false;
  // this.clientClrCheck = true;
   console.log('passenger 1 ended')
   //console.log('another driver added');
   
    this.clearAllNow()
    console.log('All has been cleared')
      // this.clearDuty();
      this.canEnd = false;
      // this.clientClrCheck = true;
       console.log('connection ended');
       //console.log('another driver added');
       this.HideFunc(true, true);
    
      this.HideFunc(false, true);
      this.canEnd = false;
   
  
 }


 
   
     if (driverSnap.val().Client_Dropped){
     
     
        if (this.called){
      this.hasCompletedRide(driverSnap);
     // this.pop.showLoader(this.lp.translate()[0].e9);
      console.log('passenger 1 has dropped');
      this.called = false;
        }
      
    }

  
     if (driverSnap.val().Client_PickedUp && this.hasNotPicked){
      this.hasNotPicked = false;
      this.pop.hasPicked = true;
      console.log('picked up passenger 1');
     }
  

    
  
   
 }


















 UserRemoved(driverSnap){
 
  this.showLoadRefresh();  
  this.clearAllNow();
  // this.pop.hideLoader()
  console.log('Stopped The movement of driver towards user');
 }








 showLoadRefresh() {
  let loading = this.loadingCtrl.create();
   loading.present();
   let myTimeout = setTimeout(() => {
     clearTimeout(myTimeout)
      loading.dismiss();
   }, 400);
 }





  NewClientFound(client_locationName, location, name, picture, destinationName, rate, ratingText, price){
   this.name = name;
   this.picture = picture;
   this.location = client_locationName;
   this.destination = destinationName;
   this.rating = rate;
   this.ratingText = ratingText
   this.ridePrice = price
   //this.locationTracker.setMarkers(location)
   this.hasEnded = false;
   this.pop.GoOffline2();
   //this.canShowOther = true;
   let urPos = new google.maps.LatLng(location[0], location[1]);
   let uLOC = new google.maps.LatLng(this.locationTracker.lat, this.locationTracker.lng);
  // console.log(price)
  if (this.platform.is('cordova'))
   this.locationTracker.map1.clear().then(()=>{
    this.locationTracker.setMarkers(location)
   })

   this.userLat = location[0]
   this.userLng = location[1]

   this.locationTracker.userLat = location[0]
   this.locationTracker.userLng = location[1]
   this.showLoadRefresh()
   this.dProvider.calcRoute(this.name, uLOC, urPos, this.location, false);
    
   this.myGcode.Reverse_Geocode(this.locationTracker.lat, this.locationTracker.lng, this.locationTracker.map1, false)
  
   
   console.log(location);
   console.log('Set Marker func called')
   //this.locationTracker.setMarkers(location);
   
 }






 hasCompletedRide(driverSnap){
  console.log('done user rated')
  this.showLoadRefresh()

// this.pop.loading.dismiss();
 var currentdate = new Date(); 
 var datetime =   currentdate.getDate() + "/"
                 + (currentdate.getMonth()+1)  + "/" 
                 + currentdate.getFullYear() + " @ "  
                 + currentdate.getHours() + ":"  
                 + currentdate.getMinutes() + ":" 
                 + currentdate.getSeconds();

// this.showLoadRefresh()

this.ph.UpdateEarnings(driverSnap.val().Client_price).then(()=>{
this.eventProvider.createHistory(driverSnap.val().Client_username, Math.floor(driverSnap.val().Client_price), datetime, driverSnap.val().Client_locationName, driverSnap.val().Client_destinationName).then(()=>{
  // this.navCtrl.push(RatePage , { 'eventId': driverSnap.val().Client_ID, 'lat': this.locationTracker.lat, 'lng': this.locationTracker.lng, 'cartype': this.cartype }).then(()=>{
    this.hasNotPicked = true
   
  // });
})
})
 }




 gotoMap(){
   if (this.platform.is('android'))
     window.open('geo://' + this.locationTracker.lat + ',' + this.locationTracker.lng + '?q=' + this.userLat + ',' + this.userLng + '(' + this.location + ')', '_system');
 
   if (this.platform.is('ios')) 
     window.open('maps://?q=' + this.location + '&saddr=' + this.locationTracker.lat + ',' + this.locationTracker.lng + '&daddr=' + this.userLat + ',' + this.userLng, '_system');
 }





 gotoDestination(){
 
    this.pop.showLoader(this.lp.translate()[0].e10)
    this.geocoder.geocode( { 'address': this.destination}, (results, status) => {
      if (status == 'OK') {
       var position = results[0].geometry.location
       let lat = position.lat();
       let lng = position.lng();
       this.pop.hideLoader()
       if (this.platform.is('android')) {
        window.open('geo://' + this.locationTracker.lat + ',' + this.locationTracker.lng + '?q=' + lat + ',' + lng + '(' + this.destination + ')', '_system');
      };
    
      if (this.platform.is('ios')) {
        window.open('maps://?q=' + this.destination + '&saddr=' + this.locationTracker.lat + ',' + this.locationTracker.lng + '&daddr=' + lat + ',' + lng, '_system');
      }

      } else {
       this.pop.showPimp(this.lp.translate()[0].f1)
      }
    });
 
 }





 HideFunc(pool, client){

    
        this.clearAllNow()
        console.log('clear everything')
      
   
 }

 

 clearAllNow(){
  this.hasArrived = true;
   //  console.log(this.name, this.name2, this.hasEnded)
   this.locationTracker.ClearDetection = true;
   this.pop.GoOffline2();
   this.locationTracker.isDestination = false;
   //this.pop.loggedOff = false;
   if (this.platform.is('cordova')){
   this.locationTracker.map1.clear()
   this.platform.registerBackButtonAction(()=>this.platform.pause)
   this.platform.registerBackButtonAction(()=>this.platform.exitApp())
  if (this.canDO){
   this.locationTracker.ResetMe()
   this.canDO = false;
  }
 }
   //clearInterval(this.locationTracker.detectCarChange)
   console.log(this.name)
   this.hasPooled2 = true;
   this.hasPooled = true;
   this.clientClrCheck = false;
   this.PoolClrCheck = false;
   this.canEnd = true;
   this.canEnd2 = true;
   this.hasDone = true
   this.hasEnded = true;
   this.canShowOther = false;
   this.itsOver = false;
   this.locationTracker.driver = false;
  this.OneSignal.isInDeepSh_t = false;
  this.StartTracker(true) 
 if (this.platform.is('cordova')) { 
  this.locationTracker.map1.setClickable(true);

 }
  this.hasNotPicked = true;

  clearTimeout(this.locationTracker.tracking_timeout)
  this.locationTracker.canTrack_ = false;
  this.locationTracker.hasTransactionEnded = false
  this.ph.getUserAsClientInfo(this.notify_ID).off('child_added')
  this.ph.getUserAsClientInfo(this.notify_ID).off('child_changed')
  this.ph.getUserAsClientInfo(this.notify_ID).off('child_removed')
  this.pop.hasPicked = false

  if (this.myAlert){
  this.myAlert.dismiss();
  this.myAlert = false;
  }
  
 console.log('database has been wiped')

 //this.OneSignal.UpdateInfo(this.locationTracker.lat, this.locationTracker.lng, this.cartype);

 this.ph.getUserProfile().on('value', userProfileSnapshot => {
   this.earnings = userProfileSnapshot.val().earnings
  })
  
  
  this.platform.ready().then(()=>{
    timer(2000).subscribe(()=>{
      this.StartListeningForChanges(this.notify_ID);
    })
   this.platform.registerBackButtonAction(()=>this.platform.exitApp());
   this.OneSignal.UpdateInfo(this.locationTracker.lat, this.locationTracker.lng, this.cartype);
  })

this.poolRequest = false;

  this.clearConnection()

   if (this.settings.current_ID){
     this.settings.current_ID = false
     if (!this.platform.is('cordova')){
       this.notify_ID = "3456787654567898765434567";
       this.StartListeningForChanges(this.notify_ID)
      }else{
       //  this.One.getIds().then( success => {
          this.notify_ID = this.OneSignal.notif_id
          this.StartListeningForChanges(this.notify_ID)
       //  })
      }



}
   
 }


 RejectJob(){
   this.HideFunc(true, true)
 }



 AcceptJob(){
   
  this.called = true;

  this.called_2 = true;
 
  this.dropped2 = true;
  this.done = true;
  this.connected = true;
  //console.log('couldnt pass through')

//console.log('came through')
    // this.ph.getUserAsClientInfo(this.notify_ID).off('child_added')
    console.log('driver loc is empty')
    
     if (this.driverLoc != null){
    //  console.log('passed through')
     console.log('driver loc is filled')

        this.locationTracker.hasTransactionEnded = true;
        this.locationTracker.canTrack_ = true;
      
  
   this.platform.ready().then(()=>{
    this.platform.registerBackButtonAction(()=>this.pop.presentToast(this.lp.translate()[0].e4));
  })
  // console.log('Stopped Normal Movement Of Driver')
   this.OneSignal.isInDeepSh_t = true;
   //this.eventProvider.getCurrentDriver().remove().then(suc =>{
  //   console.log('removed now');
     this.ph.rateText = '';
     this.ph.rating = 0;
    // console.log('Driver Location Name is :' + this.myGcode.locationName)
     if (!this.platform.is('cordova')) {
//console.log('removed now' + this.ph.name, this.ph.picture, this.notify_ID, 4.883364, 7.025034, this.myGcode.locationName, this.ph.plate, this.ph.seat, this.ph.carType, this.ph.rating, this.ph.number )
      this.createUserInformation(this.ph.name, this.ph.picture, this.notify_ID, 4.883364, 7.025034, this.myGcode.locationName, this.ph.plate, this.ph.seat, this.ph.carType, this.ph.rating, this.ph.rateText, this.ph.number );
     }else{
   this.createUserInformation(this.ph.name, this.ph.picture, this.notify_ID, this.locationTracker.lat, this.locationTracker.lng, this.myGcode.locationName, this.ph.plate, this.ph.seat, this.ph.carType, this.ph.rating, this.ph.rateText, this.ph.number );
     }
     console.log('shit done');
     
  
 // })
}else{
  this.name = null;
  this.pop.showPimp(this.lp.translate()[0].f3)
}
 }




 createUserInformation(name: string, picture: any, id: any,
   lat: number, lng: number, locationName: any, plate: any, seats: number, carType: any, rating: any, rateText: any, number: number) {
 //   console.log(this.notify_ID)
 if (!this.platform.is('cordova')){
 
  this.eventProvider.PushUserDetails(name, picture, id, lat, lng, locationName, plate, seats, carType, rating, rateText, number, this.notify_ID ).then(suc=>{
    // console.log('Now Moving the driver towards the user')
    if (this.platform.is('cordova'))
     this.locationTracker.startTracking();
    // if (this.poolRequest)
     //this.locationTracker.startTracking2();
  })
}else{
  this.eventProvider.PushUserDetails(name, picture, id, lat, lng, locationName, plate, seats, carType, rating, rateText, number, this.notify_ID ).then(suc=>{
    // console.log('Now Moving the driver towards the user')
    if (this.platform.is('cordova'))
     this.locationTracker.startTracking();
    // if (this.poolRequest)
     //this.locationTracker.startTracking2();
  })
}
    
}




  










}
