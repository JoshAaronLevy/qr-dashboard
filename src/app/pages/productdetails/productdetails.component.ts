import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Parse from 'parse';
import * as parse from '../../../keys/parse';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { getStoredUser } from 'src/shared/userHelper';
import swal from "sweetalert2";
import { CurrencyPipe } from '@angular/common';
import { storeProduct } from 'src/shared/productHelper';

@Component({
	selector: 'app-productdetails',
	templateUrl: 'productdetails.component.html',
	styleUrls: ['productdetails.component.scss'],
	providers: [
		CurrencyPipe
	]
})
export class ProductDetailsComponent implements OnInit {
	productId: any;
	product: any;
	images: any = [];
	previousRoute: string;
	loading: boolean;
	loadError: boolean;
	slideOpts = {
		spaceBetween: 10,
		slidesPerView: 'auto',
		centeredSlides: true,
		initialSlide: 0,
		speed: 500
	};
	productEdit: FormGroup = new FormGroup({
		productTitle: new FormControl(''),
		productSubTitle: new FormControl(''),
		productCategory: new FormControl(''),
		productUrl: new FormControl(''),
		productPrice: new FormControl(''),
		productAddress: new FormControl(''),
		productDetails: new FormControl(''),
		productInfo: new FormControl('')
	});
	username: any;
	editEnabled: boolean;
	browser: any;
	saving: boolean;
	productTitleInvalid: boolean;
	fieldValid: boolean;
	saveDisabled: boolean;
	errorMsg: string;
	productPrice: any;
	regexPattern = "/^[a-zA-Z0-9\(\);:&\-' ]*[a-zA-Z0-9\(\);:&\-']*$/";
	productImage: any;

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
		this.loadError = false;
		this.username = getStoredUser().username;
		this.initializeData();
	}

	async initializeData() {
		await this.presentLoadingModal();
		await this.getProductDetails();
	}

	presentLoadingModal() {
		swal.fire({
			title: "Loading...",
			showConfirmButton: false,
			showCancelButton: false
		});
	}

	getProductDetails() {
		this.product = JSON.parse(localStorage.getItem("selectedProduct"));
		console.log("product:", this.product);
		if (this.product.id) {
			this.productId = this.product.id;
			if (this.productId !== "0") {
				this.buildEditForm();
			} else {
				this.buildCreateForm();
			}
		} else {
			setTimeout(() => {
				swal.close();
				this.presentLoadError();
			}, 500);
		}
	}

	buildEditForm() {
		this.productEdit = this.formBuilder.group({
			productTitle: this.product.productTitle,
			productSubTitle: this.product.productSubTitle,
			productCategory: this.product.productCategory,
			productUrl: this.product.productUrl,
			productPrice: this.product.productPrice,
			productAddress: this.product.productAddress,
			productDetails: this.product.productDetails,
			productInfo: this.product.productInfo
		});
		this.productImage = `https://photos.homecards.com/rebeacons/Product-${this.product.productPhotoRef}-1.jpg`;
		if (!this.productImage) {
			this.productImage = "../../../assets/img/image_placeholder.jpg";
		}
		setTimeout(() => {
			this.loading = false;
			swal.close();
		}, 500);
	}

	buildCreateForm() {
		this.productEdit = this.formBuilder.group({
			productTitle: "",
			productSubTitle: "",
			productCategory: "",
			productUrl: "",
			productPrice: "",
			productAddress: "",
			productDetails: "",
			productInfo: ""
		});
		this.productImage = "../../../assets/img/image_placeholder.jpg";
		setTimeout(() => {
			this.loading = false;
			swal.close();
		}, 500);
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
		const value = this.productEdit.value[fieldName];
		if (value.length < minChars) {
			this.fieldValid = false;
			this.saveDisabled = true;
			if (fieldName === "productTitle") {
				this.productTitleInvalid = true;
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

	editProduct() {
		const Products = Parse.Object.extend('ProductInfo');
		const query = new Parse.Query(Products);
		query.get(this.productId).then((product) => {
			product.set('productTitle', this.productEdit.value.productTitle);
			product.set('productSubTitle', this.productEdit.value.productSubTitle);
			product.set('productCategory', this.productEdit.value.productCategory);
			product.set('productUrl', this.productEdit.value.productUrl);
			product.set('productPrice', this.productEdit.value.productPrice);
			product.set('productAddress', this.productEdit.value.productAddress);
			product.set('productDetails', this.productEdit.value.productDetails);
			product.set('productInfo', this.productEdit.value.productInfo);
			product.save().then((response) => {
				this.presentProductSuccess();
				return response;
			}).catch((error) => {
				this.presentProductError(error);
			});
		});
	}

	presentProductSuccess() {
		this.saving = false;
		swal.fire({
			title: "Success!",
			timer: 1500,
			showConfirmButton: false,
			icon: "success"
		});
	}

	presentLoadError() {
		swal.fire({
			title: "Error",
			buttonsStyling: false,
			customClass: {
				confirmButton: "btn btn-danger",
			},
			icon: "error",
			html: `<b>Unable to retrieve specified data</b>`
		});
		this.loading = false;
		this.loadError = true;
	}

	presentProductError(error) {
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

	routeToEditProduct() {
		storeProduct(this.product);
		localStorage.setItem('productId', this.product.id);
		localStorage.setItem('method', 'edit');
		this.router.navigate(['/products/create']);
	}

	routeToProducts() {
		this.router.navigate(['/products']);
	}

	routeToAccount() {
		this.router.navigate(['/account']);
	}
}