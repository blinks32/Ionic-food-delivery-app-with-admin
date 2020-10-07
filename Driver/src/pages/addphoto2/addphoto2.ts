import { Component } from '@angular/core';
import { 
  NavController, 
  Loading,
  LoadingController,
  ActionSheetController
  } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { HTTP } from '@ionic-native/http';
import * as firebase from 'firebase/app';
import { IonicPage } from 'ionic-angular';
import {Headers} from '@angular/http';
import { SettingsProvider } from '../../providers/settings/settings';
import { LanguageProvider } from '../../providers/language/language';

/**
 * Generated class for the Addphoto2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addphoto2',
  templateUrl: 'addphoto2.html',
})
export class Addphoto2Page {
  public completed: boolean = false;
  captureDataUrl: string;
  captureDataUrl2: string;
  captureDataUrl3: string;
  loading: Loading;
  profileUploaded: boolean = false;
  licenceUploaded: boolean = false;
  NidUploaded: boolean = false;

  constructor(public navCtrl: NavController, public http:HTTP, public lp: LanguageProvider, public settings: SettingsProvider, public actionSheetCtrl: ActionSheetController, public pop: PopUpProvider,  public ph: ProfileProvider, public camera: Camera, public loadingCtrl: LoadingController,) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Addphoto2Page');
  }


  Next(){
    if (this.profileUploaded){
    
    } 
   
  else{
    this.pop.showAlertNormal(this.lp.translate()[0].b5, "", false)
  }
     
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

    this.pop.showLoader('')
   
    this.http.post(url, body, headers).then(data => {
      this.pop.hideLoader();
      console.log("SUCCESS -> " + JSON.stringify(data));
      this.navCtrl.setRoot('WaitingPage');
    }).catch(error=>{
      alert(error)
    })
}

 


choosePic_1() {
  let actionSheet = this.actionSheetCtrl.create({
    title: this.lp.translate()[0].b6,
    buttons: [
      {
        text: this.lp.translate()[0].b8,
        icon: 'ios-folder',
        handler: () => {
         this.captureFromFile()
        }
      },{
        text: this.lp.translate()[0].b9,
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}



  capture() {
    const options: CameraOptions = {
      quality: 40,
      targetWidth: 300,
      targetHeight: 200,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
       this.processProfilePicture(this.captureDataUrl)
 
     
    }, (err) => {
      // Handle error
    });
  }

  captureFromFile() {
    
    const options: CameraOptions = {
      quality: 40,
      targetWidth: 300,
      targetHeight: 200,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,

    }
       
        this.camera.getPicture(options).then((imageData) => {
          this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
          
          this.processProfilePicture(this.captureDataUrl)
         
        })
      }



processProfilePicture(captureData) {
let storageRef = firebase.storage().ref();
// Create a timestamp as filename
const filename = Math.floor(Date.now() / 1000);
this.loading = this.loadingCtrl.create();
this.loading.present();
// Create a reference to 'images/todays-date.jpg'
const imageRef = storageRef.child(`driverPictures/${filename}.jpg`);

imageRef.putString(captureData, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
  imageRef.getDownloadURL().then(url => {
    console.log(url)
   this.ph.UpdatePPhotoInfo(url).then( success =>{
    console.log(url)
    this.loading.dismiss()
      console.log("done")
      this.navCtrl.setRoot('WaitingPage');
    // this.send(this.lp.translate()[0].b3, this.lp.translate()[0].b4 + this.settings.appDashboard, 'support@roadracers.ng')

}).catch( error =>{ this.pop.alertMe('Check Your Internet Connection and try again')});
  }).catch( error =>{ this.pop.alertMe('Check Your Internet Connection and try again')});
}).catch( error =>{ this.pop.alertMe('Check Your Internet Connection and try again')});
}



}
