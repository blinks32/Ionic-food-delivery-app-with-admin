import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupportPage } from './support';
@NgModule({
	declarations: [
		SupportPage
	],
	imports: [
		IonicPageModule.forChild(SupportPage)
	],
	entryComponents: [
		SupportPage
	]
})
export class SupportPageModule { }