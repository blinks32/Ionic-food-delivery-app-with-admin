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
import * as firebase from 'firebase/app';
import { IonicPage } from 'ionic-angular';
import {Headers} from '@angular/http';
import {Http, Request, RequestMethod} from "@angular/http";
import { SettingsProvider } from '../../providers/settings/settings';
import { LanguageProvider } from '../../providers/language/language';

/**
 * Generated class for the Addphoto3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addphoto3',
  templateUrl: 'addphoto3.html',
})
export class Addphoto3Page {
  public completed: boolean = false;
  captureDataUrl: string;
  captureDataUrl2: string;
  captureDataUrl3: string;
  loading: Loading;
  profileUploaded: boolean = false;
  licenceUploaded: boolean = false;
  NidUploaded: boolean = false;
  http: Http;
  constructor(public navCtrl: NavController, http:Http, public lp: LanguageProvider, public settings: SettingsProvider, public actionSheetCtrl: ActionSheetController, public pop: PopUpProvider,  public ph: ProfileProvider, public camera: Camera, public loadingCtrl: LoadingController,) {
    this.http = http;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Addphoto3Page');
  }


  Next(){
    if (this.NidUploaded){
      this.navCtrl.setRoot('WaitingPage');
      //this.send(this.lp.translate()[0].b3, this.lp.translate()[0].b4 + this.settings.appDashboard, 'chndth@gmail.com')
    } 
   
  else{
    this.pop.showAlertNormal(this.lp.translate()[0].b5, "", false)
  }
     
  }




choosePic_1() {
  let actionSheet = this.actionSheetCtrl.create({
    title: this.lp.translate()[0].b6,
    buttons: [
      {
        text: this.lp.translate()[0].b7,
        icon: 'ios-camera',
        handler: () => {
          this.capture()
        }
      },{
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
    const cameraOptions: CameraOptions = {
      quality: 4,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
       this.processProfilePicture(this.captureDataUrl)
 
     
    }, (err) => {
      // Handle error
    });
  }

  captureFromFile() {
    
        const cameraOptions: CameraOptions = {
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
          destinationType: this.camera.DestinationType.DATA_URL,
          quality: 20,
          encodingType: this.camera.EncodingType.PNG,
        };
       
        this.camera.getPicture(cameraOptions).then((imageData) => {
          this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
          
          this.processProfilePicture(this.captureDataUrl)
         
        })
      }
















      choosePic_2() {
        let actionSheet = this.actionSheetCtrl.create({
          title: this.lp.translate()[0].b6,
          buttons: [
            {
              text: this.lp.translate()[0].b7,
              icon: 'ios-camera',
              handler: () => {
                this.capture2()
              }
            },{
              text: this.lp.translate()[0].b8,
              icon: 'ios-folder',
              handler: () => {
               this.capture2FromFile()
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
      


      choosePic_3() {
        let actionSheet = this.actionSheetCtrl.create({
          title: this.lp.translate()[0].b6,
          buttons: [
            {
              text: this.lp.translate()[0].b7,
              icon: 'ios-camera',
              handler: () => {
                this.capture3()
              }
            },{
              text: this.lp.translate()[0].b8,
              icon: 'ios-folder',
              handler: () => {
               this.capture3FromFile()
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
      





  capture2() {
    const cameraOptions: CameraOptions = {
      quality: 12,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      this.captureDataUrl2 = 'data:image/jpeg;base64,' + imageData;

    
       this.processLicensePicture(this.captureDataUrl2)
      
     
    }, (err) => {
      // Handle error
    });
  }


  capture2FromFile() {
    
        const cameraOptions: CameraOptions = {
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
          destinationType: this.camera.DestinationType.DATA_URL,
          quality: 20,
          encodingType: this.camera.EncodingType.PNG,
        };
       
        this.camera.getPicture(cameraOptions).then((imageData) => {
          this.captureDataUrl2 = 'data:image/jpeg;base64,' + imageData;
          
          this.processLicensePicture(this.captureDataUrl2)
         
        })
      }




      capture3() {
        const cameraOptions: CameraOptions = {
          quality: 20,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
        };
    
        this.camera.getPicture(cameraOptions).then((imageData) => {
          this.captureDataUrl3 = 'data:image/jpeg;base64,' + imageData;
    
        
           this.processNidPicture(this.captureDataUrl3)
          
         
        }, (err) => {
          // Handle error
        });
      }
    
    
      capture3FromFile() {
        
            const cameraOptions: CameraOptions = { 
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              quality: 20,
              encodingType: this.camera.EncodingType.PNG,
            };
           
            this.camera.getPicture(cameraOptions).then((imageData) => {
              this.captureDataUrl3 = 'data:image/jpeg;base64,' + imageData;
              
              this.processNidPicture(this.captureDataUrl3)
             
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
          this.profileUploaded = true
      
    }).catch( error =>{ alert('error couldnt do what you asked')});
      }).catch( error =>{ alert('error couldnt do what you asked')});
    }).catch( error =>{ alert('error couldnt do what you asked')});
  }


  processLicensePicture(captureData) {
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`driverPictures/${filename}.jpg`);
   
    imageRef.putString(captureData, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
      imageRef.getDownloadURL().then(url =>{
       this.ph.UpdateLPhotoInfo(url).then( success =>{
        this.loading.dismiss()
          this.licenceUploaded = true
        
    }).catch( error =>{ alert('error couldnt do what you asked')});
      }).catch( error =>{ alert('error couldnt do what you asked')});
    }).catch( error =>{ alert('error couldnt do what you asked')});
  }


  processNidPicture(captureData) {
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`driverPictures/${filename}.jpg`);
   
    imageRef.putString(captureData, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
      imageRef.getDownloadURL().then(url =>{
       this.ph.UpdateNPhotoInfo(url).then( success =>{
        this.loading.dismiss()
          this.NidUploaded = true
        
    }).catch( error =>{ alert('error couldnt do what you asked')});
      }).catch( error =>{ alert('error couldnt do what you asked')});
    }).catch( error =>{ alert('error couldnt do what you asked')});
  }


}
