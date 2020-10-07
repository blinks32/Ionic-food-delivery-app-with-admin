import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfileProvider } from '../../providers/profile/profile';

import * as firebase from 'firebase/app';
/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {

  constructor(public navCtrl: NavController, public ph: ProfileProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   
    
      const unsubcribe = firebase.auth().onAuthStateChanged((user) => {
          //alert()
        
          if (!user) {
            this.navCtrl.setRoot("RegisterPage");
           // this.statusBar.hide();
             this.ph.loadingState = true;
             console.log(this.ph.loadingState)
            unsubcribe();
          }else {
            unsubcribe()
            let phone;
            let picture;
            let licence_pic;
            let active_User;
            let license;
           
            
            this.ph.getUserProfile().on('value', userProfileSnapshot => {
  
            console.log(userProfileSnapshot.key)
            phone = userProfileSnapshot.val().phoneNumber;
            picture = userProfileSnapshot.val().picture;
            active_User = userProfileSnapshot.val().active_state;
            license = userProfileSnapshot.val().license;
            licence_pic = userProfileSnapshot.val().license_picture;
  
           
            this.ph.getUserProfile().off('value')
             if (phone){
              if (license){
               if (picture != null && licence_pic != null ){ 
                if (active_User) {
                  this.navCtrl.setRoot('HomePage');
                 // this.statusBar.show();
                }else{
                   this.navCtrl.setRoot('WaitingPage');
                   this.ph.loadingState = true;
                   console.log(this.ph.loadingState)
                }
  
              }else{
                this.navCtrl.setRoot('AddphotoinfoPage');
                console.log(this.ph.loadingState)
                 this.ph.loadingState = true;
              }
                
              }else{
              
                this.navCtrl.setRoot('MoreInfoPage');
                console.log(this.ph.loadingState)
                 this.ph.loadingState = true;
              }
           
            }else{
              this.navCtrl.setRoot('AccountKitPage');
               this.ph.loadingState = true;
               console.log(this.ph.loadingState)
            }
    
          })
        
        }
        });
  
      
  }

 

}
