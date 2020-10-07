import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryPage } from './history';
@NgModule({
	declarations: [
		HistoryPage
	],
	imports: [
		IonicPageModule.forChild(HistoryPage)
	],
	entryComponents: [
		HistoryPage
	]
})
export class HistoryPageModule { }