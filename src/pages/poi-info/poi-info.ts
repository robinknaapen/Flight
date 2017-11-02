import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PoiInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-poi-info',
	templateUrl: 'poi-info.html',
})
export class PoiInfoPage {

	placeArray;
	title;
	textPlace;
	firstParam;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.firstParam = navParams.get("firstPassed");
		switch(this.firstParam){
			case 1:
				this.title = "Golden gate bridge";
				this.placeArray = "img/golden-gate-bridge.jpg";
				this.textPlace = `De Golden Gate Bridge is een hangbrug over de zeestraat Golden Gate, de opening van de Baai van San Francisco in de Stille Oceaan. De brug maakt deel uit van zowel U.S. Route 101 als de California State Route 1 en verbindt het Schiereiland van San Francisco met Marin County ten noorden van de metropool San Francisco. De Golden Gate Bridge is een van de meest herkenbare symbolen van San Francisco en de staat Californië. De American Society of Civil Engineers verklaarde de brug een van de zeven moderne wereldwonderen.
		De brug werd ontworpen door de Amerikaanse ingenieur Joseph B. Strauss. De bouw werd in ongeveer vier jaar voltooid en heeft zo'n 35 miljoen dollar gekost. De Golden Gate Bridge opende feestelijk op 27 mei 1937.`
				break;
			case 2:
				this.placeArray = "img/alcatrez1.jpg";
				this.textPlace =  `Alcatraz is een eiland in de Baai van San Francisco. Van 1934 tot 1963 was het in gebruik als zwaar beveiligde gevangenis.
			   1576 gevangenen hebben het eiland als standplaats gehad. De beroemdste gevangene was Alphonse "Al" Capone.
				Voordien was op het eiland een militair fort (1850-1907) en daarna (vanaf 1907-1933) was er een militaire gevangenis gevestigd.
				Tegenwoordig is het eiland een beschermd gebied en een National Historic Landmark, beheerd door de National Park Service.`
				break;
			case 3:
				this.placeArray = "img/att.jpg";
				this.textPlace =  `AT&T Park is het honkbalstadion van de San Francisco Giants. AT&T Park opende zijn deuren op 31 maart 2000 onder de naam Pacific Bell Park. In 2004 werd de naam van het stadium veranderd in SBC Park naar het telecommunicatiebedrijf SBC Communications. Nadat dit bedrijf een deel van het AT&T concern overnam, inclusief de naam, werd het stadion in 2006 omgedoopt tot AT&T Park. Het stadion staat in de stad San Francisco in de staat Californië. De jaarlijkse Major League Baseball All-Star Game werd in 2007 in het stadion gehouden. In 2013 werden de finalewedstrijden (halve- en finale) van de derde editie van de World Baseball Classic in het stadion gespeeld.`;
				break;
			case 4:
				this.placeArray = "img/cable-car-museum.jpg";
				this.textPlace =  `The Cable Car Museum was established in 1974. It is operated by the Friends of the Cable Car Museum as a nonprofit educational facility. Located in the historic Washington/Mason cable car barn and powerhouse, the museum deck overlooks the huge engines and winding wheels that pull the cables. Downstairs is a viewing area of the large sheaves and cable line entering the building through the channel under the street.`;
				break;
			case 5:
				this.placeArray = "img/presidio-of-sf.jpg";
				this.textPlace =  `Het Presidio was oorspronkelijk een Spaans fort uit 1776. Onder Nieuw-Spaanse heerschappij was het Presidio het hart van de kolonisatie van Noord-Californië. Daarna ging het fort naar Mexico, tot het in 1848 in Amerikaanse handen kwam. In 1989 besliste het Amerikaans Congres, met het oog op besparingen bij defensie, dat het de militaire activiteiten in het Presidio zou stopzetten. Op 1 oktober 1994, na 219 jaar legergebruik, werd het Presidio effectief overgedragen aan de National Park Service. Men koos ervoor om het nieuwe Presidio verschillende functies te geven. Om de bestaande gebouwen een nuttige functie te geven, werden diverse instituten aangetrokken om er zich te vestigen. Onder andere de Gordon Moore Foundation en het Internet Archive hebben zich in het Presidio gevestigd. In 1996 werd de Presidio Trust opgericht om het merendeel van het grondgebied van het Presidio te beheren, terwijl de National Park Service controle behield over zo'n 20% van het land langs de kust. Het doel om het Presidio financieel zelfvoorzienend te maken, werd al in 2005 bereikt, 8 jaar eerder dan voorzien. In het huidige park zijn er verschillende bosrijke gebieden, heuvels en toeristische uitkijkpunten over de Golden Gate Bridge, de Baai van San Francisco en de Stille Oceaan. Sinds 1962 is het park erkend als National Historic Landmark.Het Presidio was oorspronkelijk een Spaans fort uit 1776. Onder Nieuw-Spaanse heerschappij was het Presidio het hart van de kolonisatie van Noord-Californië.`;
				break;
			case 6:
				this.placeArray = "img/twinpeaks.jpg";
				this.textPlace =  `De Twin Peaks zijn twee heuvels met een hoogte van 281 m in het geografisch centrum van San Francisco in de Amerikaanse staat Californië. Ze zijn enkele meters minder hoog dan het hoogste punt van de stad, Mount Davidson. De twee heuvels, Eureka of North Peak en Noe of South Peak liggen zo'n 200 meter van elkaar. De naam wordt ook gebruikt voor het stadsdeel gelegen onmiddellijk rondom de twee heuvels.`;
				break;
			case 7:
				this.placeArray = "img/sutro-baths.jpg";
				this.textPlace =  `Toen het complex in 1896 openging, was het het grootste binnenzwembad ter wereld. De baden werden door Adolph Sutro gebouwd, een rijke ondernemer die eerder burgemeester van San Francisco was. De Sutro Baths lagen in een klein inhammetje van de Stille Oceaan, op het westelijke uiteinde van Lands End en Richmond District, en naast het restaurant Cliff House. Ze maakten deel uit van een grotere recreatiebestemming, met onder meer een amfitheater en een attractiepark (Playland) in de onmiddellijke omgeving. De onderhoudskosten van de zwembaden bleken echter te hoog en het complex werd nooit winstgevend. In 1937 verbouwde Sutro's kleinzoon een deel van de baden tot een schaatsbaan. In de vroege jaren 50 zette de nieuwe eigenaar, George Whitney (die ook Playland bezat), die transformatie voort. Uiteindelijk werd de site in 1964 opgekocht door ontwikkelaars. Zij wilden er appartementen bouwen. De afbraak werd 'voltooid' door een brand in 1966, maar van de bouwplannen kwam niets in huis. In 1973 werd de locatie opgenomen in de nieuwe Golden Gate National Recreation Area. De ruïnes zijn nu een kleine toeristische bestemming.`;
				break;
			case 8:
				this.placeArray = "img/sfopera.jpg";
				this.textPlace =  `Het eerste optreden dat georganiseerd werd in het San Francisco Opera was La Bohéme, in samenwerking met Giovanni Martinelli op 26 September 1923. De locatie van de opera bevind zich in het City’s Civic Auditorium, hier werd het eerste optreden uitgevoerd door Merola, die al sinds het eerste bezoek erg betrokken was bij de Opera.`;
				break;
			case 9:
				this.placeArray = "img/san-franscisco-ballet.jpg";
				this.textPlace =  `San Francisco Ballet is een Amerikaans balletgezelschap. Het werd in 1933 als het San Francisco Opera Ballet opgericht door de gebroeders Christensen, die de basis legden voor ballet in de Verenigde Staten, en was het eerste professionele balletgezelschap in de Verenigde Staten. Tegenwoordig is het gezelschap gevestigd in het War Memorial Opera House in San Francisco en staat het onder de leiding van Helgi Tomasson. Het is een toonaangevende compagnie die jaarlijks zo'n acht producties maakt en meer dan 100 opvoeringen verzorgt. Het repertoire omvat zowel klassiek als hedendaags ballet.`;
				break;
		}
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PoiInfoPage');

	}
	setInfo(){

	}

}
