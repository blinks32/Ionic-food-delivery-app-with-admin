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
@IonicPage()
/**
 * Generated class for the AddphotoinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-addphotoinfo',
  templateUrl: 'addphotoinfo.html',
})
export class AddphotoinfoPage {
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
    console.log('ionViewDidLoad AddphotoinfoPage');
   // this.pop.hideLoader()
  }


  Next(){
    if (this.licenceUploaded){
     
      //this.send(this.lp.translate()[0].b3, this.lp.translate()[0].b4 + this.settings.appDashboard, 'chndth@gmail.com')
    } 
   
  else{
    this.pop.showAlertNormal(this.lp.translate()[0].b5, "", false)
  }
     
  }









      choosePic_2() {
        let actionSheet = this.actionSheetCtrl.create({
          title: this.lp.translate()[0].b6,
          buttons: [
           {
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
      







  capture2() {
    
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
      this.captureDataUrl2 = 'data:image/jpeg;base64,' + imageData;

    
       this.processLicensePicture(this.captureDataUrl2)
      
     
    }, (err) => {
      // Handle error
    });
  }


  capture2FromFile() {

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
          this.captureDataUrl2 = 'data:image/jpeg;base64,' + imageData;
          
          this.processLicensePicture(this.captureDataUrl2)
         
        })
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
        this.navCtrl.setRoot('Addphoto2Page');
        
        }).catch( error =>{ this.pop.alertMe('Check Your Internet Connection and try again')});
      }).catch( error =>{ this.pop.alertMe('Check Your Internet Connection and try again')});
    }).catch( error =>{ this.pop.alertMe('Check Your Internet Connection and try again')});
  }


}
