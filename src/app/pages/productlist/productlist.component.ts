// tslint:disable: no-shadowed-variable
// tslint:disable: prefer-for-of
import { Component, OnInit } from "@angular/core";
import { getStoredUser } from 'src/shared/userHelper';
import * as Parse from "parse";
import * as parse from '../../../keys/parse';
import { Router } from '@angular/router';
import { parseResults } from '../../../shared/parseResults';
import swal from "sweetalert2";
import { Products } from "src/app/models/product.model";

@Component({
	selector: "app-products",
	templateUrl: "productlist.component.html",
	styleUrls: ["productlist.component.scss"]
})
export class ProductListComponent implements OnInit {
	username: any;
	products: Products[];
	productsFound: boolean;
	selectedProduct: any;
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
		await this.getProducts();
	}

	presentLoadingModal() {
		swal.fire({
			title: "Loading...",
			showConfirmButton: false,
			showCancelButton: false
		});
	}

	async getProducts() {
		const ProductInfo = Parse.Object.extend('ProductInfo');
		const query = new Parse.Query(ProductInfo);
		query.equalTo('ownerEmail', this.username);
		await query.find().then((results) => {
			console.log(results);
			results = parseResults(results);
			this.products = results;
			if (this.products.length > 0) {
				this.productsFound = true;
			} else {
				this.productsFound = false;
			}
			for (let i = 0; i < this.products.length; i++) {
				this.products[i].imageUrl = '';
				if (!this.products[i].productPhotoRef) {
					this.products[i].imageUrl = "../../../assets/img/image_placeholder.jpg";
				} else {
					this.products[i].imageUrl = `https://photos.homecards.com/rebeacons/Product-${this.products[i].productPhotoRef}-1001.jpg`;
				}
				if (this.products[i].productStatus === "A") {
					this.products[i].productStatus = "Active";
				} else {
					this.products[i].productStatus = "Inactive";
				}
			}
			setTimeout(() => {
				this.loading = false;
				swal.close();
			}, 500);
			return this.products;
		}, (error) => {
			console.error(error);
			setTimeout(() => {
				this.loading = false;
				swal.close();
			}, 500);
		});
	}

	viewProductDetails(product) {
		this.selectedProduct = product;
		localStorage.setItem('selectedProduct', JSON.stringify(this.selectedProduct));
		localStorage.setItem('selectedProductId', this.selectedProduct.id);
		this.router.navigate([`/products/${this.selectedProduct.id}`]);
	}

	routeToCreate() {
		this.selectedProduct = {
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
		localStorage.setItem('selectedProduct', JSON.stringify(this.selectedProduct));
		localStorage.setItem('selectedProductId', "0");
		this.router.navigate([`/products/create`]);
	}
}
