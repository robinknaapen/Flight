import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Flight } from './app.component';
import { QRPage } from '../pages/qr/qr';
import { QRErrorPage } from '../pages/errors/qr';

import { PoiPage } from '../pages/poi/poi'
import { PoiInfoPage } from '../pages/poi-info/poi-info';


@NgModule({
	declarations: [
		Flight,
		QRPage,
		QRErrorPage,
		PoiPage,
		PoiInfoPage,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(Flight)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		Flight,
		QRPage,
		QRErrorPage,
		PoiPage,
		PoiInfoPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})

export class AppModule {}
