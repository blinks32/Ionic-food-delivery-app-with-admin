import { Component, Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProfileProvider } from '../../providers/profile/profile';
import { IonicPage } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
// import { Injectable } from '@angular/core';
import { ActivityProvider } from '../../providers/activity/activity';
import { SettingsProvider } from '../../providers/settings/settings';
import 'rxjs/add/operator/map';
import { LanguageProvider } from '../../providers/language/language';
import { Stripe } from '@ionic-native/stripe';
import { Http, Headers } from '@angular/http';
/*
  Generated class for the StripeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class StripeProvider {

  constructor(public prof: ProfileProvider, public pop: PopUpProvider, public act: ActivityProvider, public lp: LanguageProvider,  private stripe: Stripe, public settings: SettingsProvider, private http: Http, public eProvider: EventProvider) {
    console.log('Hello StripeProvider Provider');
  }


ChargeCard(amt, id) {
    var data = 'stripetoken=' + this.prof.card + '&amount=' + amt;
    var headers = new Headers();
    headers.append('Conent-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost:3333/processpay', data, { headers: headers }).subscribe((res) => {
      if (res.json().success)
      this.pop.hideLoader()
      this.act.getActivityProfile(id).update({
        Client_hasPaid: true,
      });
    })
}


}
