import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';
import { LanguageProvider } from '../../providers/language/language';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  public resetPasswordForm: FormGroup;
  
  constructor(public navCtrl: NavController, public lp: LanguageProvider, public authProvider: AuthProvider, 
    public formBuilder: FormBuilder, public alertCtrl: AlertController) {
      
      this.resetPasswordForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      });
  }

  resetPassword(){
    if (!this.resetPasswordForm.valid){
      console.log(this.resetPasswordForm.value);
    } else {
      this.authProvider.resetPassword(this.resetPasswordForm.value.email)
      .then((user) => {
        let alert = this.alertCtrl.create({
          message: this.lp.translate()[0].j10,
          buttons: [
            {
              text: this.lp.translate()[0].i9,
              role: 'cancel',
              handler: () => { this.navCtrl.pop(); }
            }
          ]
        });
        alert.present();

      }, (error) => {
        var errorMessage: string = error.message;
        let errorAlert = this.alertCtrl.create({
          message: errorMessage,
          buttons: [{ text: this.lp.translate()[0].i9, role: 'cancel' }]
        });
        errorAlert.present();
      });
    }
  }


  goToLogin(){
    this.navCtrl.setRoot('LoginPage');
  }
}