import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { QRPage } from '../pages/qr/qr';

@Component({
	templateUrl: 'app.html',
	providers: []
})

export class Flight {
	rootPage:any = QRPage;

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
		platform.ready().then(() => {
			statusBar.styleDefault();
			splashScreen.hide();
		})
	}
};
