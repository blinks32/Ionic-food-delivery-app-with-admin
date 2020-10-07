import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromoPage } from './promo';
@NgModule({
	declarations: [
		PromoPage
	],
	imports: [
		IonicPageModule.forChild(PromoPage),
	],
	entryComponents: [
		PromoPage
	]
})
export class PromoPageModule { }