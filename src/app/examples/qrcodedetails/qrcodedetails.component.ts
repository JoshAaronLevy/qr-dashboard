import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Parse from 'parse';
import * as parse from '../../../keys/parse';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { getStoredUser } from 'src/shared/userHelper';
import { storeQRCode } from 'src/shared/qrCodeHelper';
import swal from "sweetalert2";
import { CurrencyPipe } from '@angular/common';

@Component({
	selector: 'app-qrcodedetails',
	templateUrl: 'qrcodedetails.component.html',
	styleUrls: ['qrcodedetails.component.scss'],
	providers: [
		CurrencyPipe
	]
})
export class QRCodeDetailsComponent implements OnInit {
	qrCodeId: any;
	qrCode: any;
	images: any = [];
	previousRoute: string;
	loading: boolean;
	slideOpts = {
		spaceBetween: 10,
		slidesPerView: 'auto',
		centeredSlides: true,
		initialSlide: 0,
		speed: 500
	};
	qrCodeEdit: FormGroup = new FormGroup({
		tagTitle: new FormControl(''),
		tagSubTitle: new FormControl(''),
		tagCompany: new FormControl(''),
		tagPrice: new FormControl(''),
		tagUrl: new FormControl(''),
		tagAddress: new FormControl(''),
		tagAddress2: new FormControl(''),
		tagCity: new FormControl(''),
		tagState: new FormControl(''),
		tagZip: new FormControl(''),
		tagInfo: new FormControl('')
	});
	username: any;
	editEnabled: boolean;
	browser: any;
	saving: boolean;
	tagTitleInvalid: boolean;
	fieldValid: boolean;
	saveDisabled: boolean;
	errorMsg: string;
	tagPrice: any;
	regexPattern = "/^[a-zA-Z0-9\(\);:&\-' ]*[a-zA-Z0-9\(\);:&\-']*$/";

	constructor(
		private formBuilder: FormBuilder,
		public router: Router,
		private currencyPipe: CurrencyPipe
	) {
		Parse.initialize(parse.appId, parse.javascript);
		Parse.serverURL = parse.serverURL;
	}

	ngOnInit() {
		this.loading = true;
		this.username = getStoredUser().username;
		this.getQRCodeDetails();
	}

	getQRCodeDetails() {
		this.qrCode = JSON.parse(localStorage.getItem("selectedQRCode"));
		console.log("qrCode:", this.qrCode);
		this.qrCodeId = this.qrCode.id;
		this.buildEditForm();
	}

	buildEditForm() {
		this.qrCodeEdit = this.formBuilder.group({
			tagTitle: this.qrCode.tagTitle,
			tagSubTitle: this.qrCode.tagSubTitle,
			tagCompany: this.qrCode.tagCompany,
			tagPrice: this.qrCode.tagPrice,
			tagUrl: this.qrCode.tagUrl,
			tagAddress: this.qrCode.tagAddress,
			tagAddress2: this.qrCode.tagAddress2,
			tagCity: this.qrCode.tagCity,
			tagState: this.qrCode.tagState,
			tagZip: this.qrCode.tagZip,
			tagInfo: this.qrCode.tagInfo
		});
		this.qrCode.imageUrl = `https://photos.homecards.com/rebeacons/Tag-${this.qrCode.tagPhotoRef}-1.jpg`;
		this.loading = false;
	}

	validateField(fieldName, minChars) {
		const fieldId = document.getElementById(fieldName);
		let validApplied;
		let invalidApplied;
		if (fieldId.classList.contains("field-valid")) {
			validApplied = true;
		} else if (!fieldId.classList.contains("field-valid")) {
			validApplied = false;
		}
		if (fieldId.classList.contains("field-invalid")) {
			invalidApplied = true;
		} else if (!fieldId.classList.contains("field-invalid")) {
			invalidApplied = false;
		}
		const value = this.qrCodeEdit.value[fieldName];
		if (value.length < minChars) {
			this.fieldValid = false;
			this.saveDisabled = true;
			if (fieldName === "tagTitle") {
				this.tagTitleInvalid = true;
			}
			this.errorMsg = `${fieldName} must have at least ${minChars} character(s)`;
			if (validApplied) {
				fieldId.classList.remove("field-valid");
			}
			if (!invalidApplied) {
				fieldId.classList.add("field-invalid");
			}
		} else {
			this.fieldValid = true;
			this.saveDisabled = false;
			if (invalidApplied) {
				fieldId.classList.remove("field-invalid");
			}
			if (!validApplied) {
				fieldId.classList.add("field-valid");
			}
		}
	}

	evalPrice(element) {
		if (this.qrCodeEdit.value.tagPrice.length > 0) {
			const acceptedVals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "."];
			const priceVal = this.qrCodeEdit.value.tagPrice;
			const lastIndex = this.qrCodeEdit.value.tagPrice.length - 1;
			for (let i = 0; i < this.qrCodeEdit.value.tagPrice.length; i++) {
				if (i === lastIndex) {
					console.log(this.qrCodeEdit.value.tagPrice[i]);
					this.qrCodeEdit.value.tagPrice = this.qrCodeEdit.value.tagPrice.slice(0, lastIndex);
				}
			}
			// for (let i = 0; i < acceptedVals.length; i++) {
			// 	if (keyInput !== acceptedVals[i]) {
			// 		console.log("Invalid key entry");
			// 		this.qrCodeEdit.value.tagPrice = this.qrCodeEdit.value.tagPrice.slice(-1, 1);
			// 	} else {
			// 		console.log("Key entry valid");
			// 	}
			// }
			console.log(element);
			console.log(lastIndex);
			console.log(this.qrCodeEdit.value.tagPrice);
		}
	}

	transformAmount(element) {
		this.tagPrice = this.currencyPipe.transform(this.qrCodeEdit.value.tagPrice, '$');
		element.target.value = this.tagPrice;
	}

	editQRCode() {
		const QRCodes = Parse.Object.extend('Tags');
		const query = new Parse.Query(QRCodes);
		query.get(this.qrCodeId).then((qrCode) => {
			qrCode.set('tagTitle', this.qrCodeEdit.value.tagTitle);
			qrCode.set('tagSubTitle', this.qrCodeEdit.value.tagSubTitle);
			qrCode.set('tagCompany', this.qrCodeEdit.value.tagCompany);
			qrCode.set('tagPrice', this.qrCodeEdit.value.tagPrice);
			qrCode.set('tagUrl', this.qrCodeEdit.value.tagUrl);
			qrCode.set('tagAddress', this.qrCodeEdit.value.tagAddress);
			qrCode.set('tagAddress2', this.qrCodeEdit.value.tagAddress2);
			qrCode.set('tagCity', this.qrCodeEdit.value.tagCity);
			qrCode.set('tagState', this.qrCodeEdit.value.tagState);
			qrCode.set('tagZip', this.qrCodeEdit.value.tagZip);
			qrCode.set('tagInfo', this.qrCodeEdit.value.tagInfo);
			qrCode.save().then((response) => {
				this.presentQRCodeSuccess();
				return response;
			}).catch((error) => {
				this.presentQRCodeError(error);
			});
		});
	}

	presentQRCodeSuccess() {
		this.saving = false;
		swal.fire({
			title: "Success!",
			timer: 1500,
			showConfirmButton: false,
			icon: "success"
		});
	}

	presentQRCodeError(error) {
		swal.fire({
			title: "Save Failed",
			buttonsStyling: false,
			customClass: {
				confirmButton: "btn btn-danger",
			},
			icon: "error",
			html: `<b>${error}</b>`
		});
		this.loading = false;
	}

	routeToEditQRCode() {
		storeQRCode(this.qrCode);
		localStorage.setItem('tagId', this.qrCode.id);
		localStorage.setItem('method', 'edit');
		this.router.navigate(['/qrcodes/create']);
	}

	routeToQRCodes() {
		this.router.navigate(['/qrcodes']);
	}

	routeToAccount() {
		this.router.navigate(['/account']);
	}
}