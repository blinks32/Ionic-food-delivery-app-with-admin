import { Injectable } from '@angular/core';
import  firebase from 'firebase';
import { Platform } from 'ionic-angular';


@Injectable()
export class AuthProvider {
  public fireAuth:firebase.auth.Auth;
  public userProfileRef:firebase.database.Reference;
  private currentUser: firebase.User;
  //public provider = new firebase.auth.FacebookAuthProvider();
  
  constructor(public platform: Platform) {
     this.fireAuth =  firebase.auth()
     this.userProfileRef = firebase.database().ref('/driverProfile');
     this.fireAuth.onAuthStateChanged((user: firebase.User) => this.currentUser = user);
  }

  loginUser(email: string, password: string): firebase.Promise<any> {
    return  this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  signupUserWithPhone(verification: any, code: any, phone: any): firebase.Promise<any> {
    let signInCredential = firebase.auth.PhoneAuthProvider.credential(verification, code);
    var prevUser = this.currentUser;
    
    return this.fireAuth.signInWithCredential(signInCredential).then( newUser => {
        var currentUser = newUser;
        // Merge prevUser and currentUser data stored in Firebase.
        // Note: How you handle this is specific to your application
       
        // After data is migrated delete the duplicate user
        return newUser.delete().then(() => {
          // Link the OAuth Credential to original account
          return prevUser.linkWithCredential(signInCredential);
        }).then(() => {
          // Sign in with the newly linked credential
          return this.fireAuth.signInWithCredential(signInCredential).then(()=>{
            this.userProfileRef.child(newUser.uid).set({
              phoneNumber: phone
            });
          });
        });
      }).catch((error) => { 
        console.log("Sign In Error", error);
      });
  }

  signupUser(email: string, password: string): firebase.Promise<any> {
    return  this.fireAuth.createUserWithEmailAndPassword(email, password).then( newUser => {
      this.userProfileRef.child(newUser.uid).set({
        email: email
      });
    });
  }

  resetPassword(email: string): firebase.Promise<void> {
    return  this.fireAuth.sendPasswordResetEmail(email);
  }

  logoutUser(): firebase.Promise<void> {
    this.userProfileRef.child( this.fireAuth.currentUser.uid).off();
    return  this.fireAuth.signOut();
  }

  signOut(): void {
    this.fireAuth.signOut();
  }

  displayName(): string {
    if (this.currentUser !== null) {
      return this.currentUser.displayName;
    } else {
      return '';
    }
  }

  }

  