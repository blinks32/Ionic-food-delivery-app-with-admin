import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddphotoinfoPage } from './addphotoinfo';
@NgModule({
	declarations: [
		AddphotoinfoPage
	],
	imports: [
		IonicPageModule.forChild(AddphotoinfoPage)
	],
	entryComponents: [
		AddphotoinfoPage
	]
})
export class AddphotoinfoPageModule { }