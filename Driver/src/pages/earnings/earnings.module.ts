import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EarningsPage } from './earnings';

@NgModule({
	declarations: [
		EarningsPage
	],
	imports: [
		IonicPageModule.forChild(EarningsPage),
	],
	entryComponents: [
		EarningsPage
	]
})
export class EarningsPageModule {}
