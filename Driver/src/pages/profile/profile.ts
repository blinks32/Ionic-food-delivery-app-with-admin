import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { AuthProvider } from '../../providers/auth/auth';
import { IonicPage } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { LanguageProvider } from '../../providers/language/language';
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public userProfile:any;
  public birthDate:string;
  public phoneNumber: any;
  public work: any;
  public home: any;
  public pic: any;
  public selectedItem;
  public carmodels: any;
  public captureDataUrl: any;
  constructor(public navCtrl: NavController, public lp: LanguageProvider, public ac:ActionSheetController, public pop: PopUpProvider, public camera: Camera, public alertCtrl: AlertController, 
    public ph: ProfileProvider, public authProvider: AuthProvider) {}

  ionViewDidEnter() {
    this.ph.getUserProfile().on('value', userProfileSnapshot => {
      this.ph.number = userProfileSnapshot.val().phoneNumber;
      this.ph.name = userProfileSnapshot.val().name;
      this.ph.accountNum = userProfileSnapshot.val().accountNumber;
      this.ph.bank = userProfileSnapshot.val().Bank;

    });
  }

  remove(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot('LoginPage');
    });
  }

  onSelectChange(selectedValue: any) {
    console.log('Selected', selectedValue);
    this.ph.UpdateCartype(selectedValue);
  }
  logOut(){
    const alert = this.alertCtrl.create({
      message: this.lp.translate()[0].c5,
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].c7,
          handler: data => {
           this.remove()
          }
        }
      ]
    });
    alert.present();
  }



  updateNumber(){
    const alert = this.alertCtrl.create({
      message: this.lp.translate()[0].h1,
      inputs: [
        {
         
          value: this.ph.number
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: data => {
            console.log(data)
            this.ph.UpdateNumber(data);
          }
        }
      ]
    });
    alert.present();
  }


  updateName(){
    const alert = this.alertCtrl.create({
      message: this.lp.translate()[0].h2,
      inputs: [
        {
         
          value: this.ph.name
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: data => {
            console.log(data)
            this.ph.UpdateName(data);
          }
        }
      ]
    });
    alert.present();
  }

   
  updateAccountNumber(){
    const alert = this.alertCtrl.create({
      message: this.lp.translate()[0].h10,
      inputs: [
        {
         
          value: this.ph.accountNum
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: data => {
            console.log(data)
            this.ph.UpdateAccountNumber(data);
          }
        }
      ]
    });
    alert.present();
  }

  updateBank(){
    const alert = this.alertCtrl.create({
      message: this.lp.translate()[0].i1,
      inputs: [
        {
         
          value: this.ph.bank
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: data => {
            console.log(data)
            this.ph.UpdateBank(data);
          }
        }
      ]
    });
    alert.present();
  }


  updateCarModel(){
    const alert = this.alertCtrl.create({
      message: this.lp.translate()[0].h6,
      inputs: [
        {
         
          value: this.ph.carType
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: data => {
            console.log(data)
            this.ph.UpdateCarModel(data);
          }
        }
      ]
    });
    alert.present();
  }


  updateCaryear(){
    const alert = this.alertCtrl.create({
      message: this.lp.translate()[0].h7,
      inputs: [
        {
         
          value: this.ph.caryear
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: data => {
            console.log(data)
            this.ph.UpdateCarYear(data);
          }
        }
      ]
    });
    alert.present();
  }

  

  updatePlate(){
    const alert = this.alertCtrl.create({
      message: this.lp.translate()[0].h8,
      inputs: [
        {
         
          value: this.ph.plate
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: data => {
            console.log(data)
            this.ph.UpdatePlate(data);
          }
        }
      ]
    });
    alert.present();
  }


  updateCity(){
    const alert = this.alertCtrl.create({
      message: this.lp.translate()[0].h4,
      inputs: [
        {
         
          value: this.ph.city
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: data => {
            console.log(data)
            this.ph.UpdateCity(data);
          }
        }
      ]
    });
    alert.present();
  }





  // updatePrice(){
  //   const alert = this.alertCtrl.create({
  //     message: "Your New Charging Price",
  //     inputs: [
  //       {
         
  //         value: this.ph.ridePrice
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: this.lp.translate()[0].i8,
  //       },
  //       {
  //         text: this.lp.translate()[0].i9,
  //         handler: data => {
  //           console.log(data)
  //           this.ph.UpdatePrice(data);
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }




  updateSeat(){
    const alert = this.alertCtrl.create({
      message: this.lp.translate()[0].h9,
      inputs: [
        {
         
          value: this.ph.seat
        },
      ],
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].i9,
          handler: data => {
            console.log(data)
            this.ph.UpdateCarSeats(data);
          }
        }
      ]
    });
    alert.present();
  }
  


choosePic() {
  let actionSheet = this.ac.create({
    title: this.lp.translate()[0].i10,
    buttons: [
      {
        text: this.lp.translate()[0].j1,
        icon: 'ios-camera',
        handler: () => {
          this.changePic()
        }
      },{
        text: this.lp.translate()[0].j2,
        icon: 'ios-folder',
        handler: () => {
         this.changePicFromFile()
        }
      },{
        text: this.lp.translate()[0].i8,
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




  changePic() {
    
     const cameraOptions: CameraOptions = {
       quality: 16,
       destinationType: this.camera.DestinationType.DATA_URL,
       encodingType: this.camera.EncodingType.JPEG,
       mediaType: this.camera.MediaType.PICTURE,
     };
 
     this.camera.getPicture(cameraOptions).then((imageData) => {
       this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
       
       this.processProfilePicture(this.captureDataUrl)
      
     })
 
   }
 
 
 
 
   changePicFromFile() {
 
     const cameraOptions: CameraOptions = {
       sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
       destinationType: this.camera.DestinationType.DATA_URL,
       quality: 16,
       encodingType: this.camera.EncodingType.PNG,
     };
    
     this.camera.getPicture(cameraOptions).then((imageData) => {
       this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
       
       this.processProfilePicture(this.captureDataUrl)
      
     })
   }
 
 
 
   processProfilePicture(captureData) {
     let storageRef = firebase.storage().ref();
     // Create a timestamp as filename
     const filename = Math.floor(Date.now() / 1000);
    
     // Create a reference to 'images/todays-date.jpg'
     const imageRef = storageRef.child(`driverPictures/${filename}.jpg`);
    
     imageRef.putString(captureData, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
       imageRef.getDownloadURL().then(url => {
         //console.log(url)
        this.ph.UpdatePPhotoInfo(url).then( success =>{
       //  console.log(url)
       this.pop.presentToast(this.lp.translate()[0].j3)
           //console.log("done")
           //this.profileUploaded = true
       
     }).catch( error =>{ alert(error)});
       }).catch( error =>{ alert(error)});
     }).catch( error =>{ alert(error)});
   }
 


}
