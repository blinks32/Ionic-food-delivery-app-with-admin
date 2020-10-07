import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class ActivityProvider {
  public userProfile:firebase.database.Reference;
  public CustomerOwnPropertyRef: firebase.database.Reference;
  public currentDriverRef: firebase.database.Reference;
  public PoolRef: firebase.database.Reference;
  public connectedRef: firebase.database.Reference;
  public user: any;
  constructor() {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        console.log(user)
        this.user = user
        this.currentDriverRef = firebase.database().ref(`Drivers`);
        this.CustomerOwnPropertyRef = firebase.database().ref(`Customer`);
        this.PoolRef = firebase.database().ref(`Pools/${user.uid}`);
        //this.connectedRef = firebase.database().ref(".info/connected");
      }
    });
  }

 

  getCurrentDriver(id: any): firebase.database.Reference {
    return this.currentDriverRef.child(id);
  }

  getPoolActivityProfile(id: any): firebase.database.Reference {
    return this.CustomerOwnPropertyRef.child(`${id}/client`);
  }


  getActivityProfile(id: any): firebase.database.Reference {
    return this.CustomerOwnPropertyRef.child(`${id}/client`);
  }

  getActiveProfile(id: any): firebase.database.Reference {
    return firebase.database().ref(`Customer/${id}`);
  }

   
  getPoolProfile(): firebase.database.Reference {
    return this.PoolRef;
  }


  getConnectionState(): firebase.database.Reference {
    return this.connectedRef;
  }


  RequestPool(lat: number, lng: number, driverid: any): firebase.Promise<any> {
    return this.PoolRef.set({
      pool_details: [lat, lng, driverid]
    });
  }
  
}