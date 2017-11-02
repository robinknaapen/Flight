import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PoiInfoPage } from '../poi-info/poi-info';

/**
 * Generated class for the Poi page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-point-of-interest',
	templateUrl: 'poi.html',
})

export class PoiPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		console.log(navParams.get("destination"))
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Poi');
	}

	poiFinder(poi){
		this.navCtrl.push(PoiInfoPage, {firstPassed: poi});
	}
}
