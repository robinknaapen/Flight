import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QRErrorPage } from '../errors/qr';
import { PoiPage } from '../poi/poi';

@Component({
	selector: 'qr-scan',
	templateUrl: 'qr.html',
	providers: [
		BarcodeScanner
	]
})
export class QRPage {
	constructor(public nav: NavController, private barcodeScanner: BarcodeScanner) {}

	scan(){
		this.barcodeScanner.scan().then((barcodeData) => {
			this.nav.setRoot(PoiPage, JSON.parse(barcodeData.text));
		}, (err) => {
			this.nav.setRoot(QRErrorPage);
		});
	}
}
