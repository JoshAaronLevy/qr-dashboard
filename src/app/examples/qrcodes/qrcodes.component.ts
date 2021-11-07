// tslint:disable: no-shadowed-variable
// tslint:disable: prefer-for-of
import { Component, OnInit } from "@angular/core";
import { getStoredUser } from 'src/shared/userHelper';
import * as Parse from "parse";
import * as parse from '../../../keys/parse';
import { QRCodes } from '../../models/qrcode.model';
import { Router } from '@angular/router';
import { parseResults } from '../../../shared/parseResults';

@Component({
	selector: "app-qrcodes",
	templateUrl: "qrcodes.component.html",
	styleUrls: ["qrcodes.component.scss"]
})
export class QRCodesComponent implements OnInit {
	username: any;
	qrcodes: QRCodes[];
	qrcodesFound: boolean;
	selectedQRCode: any;
	serverBaseUrl: string;
	loading: boolean;
	searchEnabled: boolean;
	uniqueId: any;

	constructor(
		public router: Router
	) {
		Parse.initialize(parse.appId, parse.javascript);
		Parse.serverURL = parse.serverURL;
	}

	ngOnInit() {
		this.username = getStoredUser().username;
		this.searchEnabled = false;
		this.loading = true;
		const Tags = Parse.Object.extend('Tags');
		const query = new Parse.Query(Tags);
		query.equalTo('userEmail', this.username);
		query.find().then((results) => {
			results = parseResults(results);
			this.qrcodes = results;
			if (this.qrcodes.length > 0) {
				this.qrcodesFound = true;
			} else {
				this.qrcodesFound = false;
			}
			for (let i = 0; i < this.qrcodes.length; i++) {
				this.qrcodes[i].imageUrl = '';
				if (this.qrcodes[i].tagPhotoRef === undefined) {
					this.qrcodes[i].imageUrl = `https://photos.homecards.com/rebeacons/Tag-12345-1.jpg`;
				} else {
					this.qrcodes[i].imageUrl = `https://photos.homecards.com/rebeacons/Tag-${this.qrcodes[i].tagPhotoRef}-1.jpg`;
				}
			}
			this.loading = false;
		});
	}

	viewQRCodeDetails(qrCode) {
		this.selectedQRCode = qrCode;
		localStorage.setItem('selectedQRCode', JSON.stringify(this.selectedQRCode));
		localStorage.setItem('selectedQRCodeId', this.selectedQRCode.id);
		this.router.navigate([`/qrcodes/${this.selectedQRCode.id}`]);
	}
}
