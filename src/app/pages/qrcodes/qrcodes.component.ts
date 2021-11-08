// tslint:disable: no-shadowed-variable
// tslint:disable: prefer-for-of
import { Component, OnInit } from "@angular/core";
import { getStoredUser } from 'src/shared/userHelper';
import * as Parse from "parse";
import * as parse from '../../../keys/parse';
import { QRCodes } from '../../models/qrcode.model';
import { Router } from '@angular/router';
import { parseResults } from '../../../shared/parseResults';
import swal from "sweetalert2";

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
		this.initializeData();
	}

	async initializeData() {
		await this.presentLoadingModal();
		await this.getQRCodes();
	}

	presentLoadingModal() {
		swal.fire({
			title: "Loading...",
			showConfirmButton: false,
			showCancelButton: false
		});
	}

	async getQRCodes() {
		const Tags = Parse.Object.extend('Tags');
		const query = new Parse.Query(Tags);
		query.equalTo('userEmail', this.username);
		await query.find().then((results) => {
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
			setTimeout(() => {
				this.loading = false;
				swal.close();
			}, 500);
			return this.qrcodes;
		}, (error) => {
			console.error(error);
			setTimeout(() => {
				this.loading = false;
				swal.close();
			}, 500);
		});
	}

	viewQRCodeDetails(qrCode) {
		this.selectedQRCode = qrCode;
		localStorage.setItem('selectedQRCode', JSON.stringify(this.selectedQRCode));
		localStorage.setItem('selectedQRCodeId', this.selectedQRCode.id);
		this.router.navigate([`/qrcodes/${this.selectedQRCode.id}`]);
	}

	routeToCreate() {
		this.selectedQRCode = {
			id: "0",
			tagTitle: "",
			tagSubTitle: "",
			tagCompany: "",
			tagPrice: "",
			tagUrl: "",
			tagAddress: "",
			tagAddress2: "",
			tagCity: "",
			tagState: "",
			tagZip: "",
			tagInfo: ""
		};
		localStorage.setItem('selectedQRCode', JSON.stringify(this.selectedQRCode));
		localStorage.setItem('selectedQRCodeId', "0");
		this.router.navigate([`/qrcodes/create`]);
	}
}
