import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaitingPage } from './waiting';

@NgModule({
	declarations: [
		WaitingPage
	],
	imports: [
		IonicPageModule.forChild(WaitingPage)
	],
	entryComponents: [
		WaitingPage
	]
})
export class WaitingPageModule {}
