import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoiInfoPage } from './poi-info';

@NgModule({
	declarations: [
		PoiInfoPage,
	],
	imports: [
		IonicPageModule.forChild(PoiInfoPage),
	],
})
export class PoiInfoPageModule {}
