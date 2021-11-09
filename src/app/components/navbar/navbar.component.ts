import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { getStoredUser } from "src/shared/userHelper";
import swal from "sweetalert2";

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
	user: any;
	displayName: string;
	isCollapsed = true;
	selectedProduct: any;

	constructor(private router: Router) {
		router.events.subscribe(val => {
			this.isCollapsed = true;
		});
	}

	mobileView() {
		if (window.innerWidth < 992) {
			return true;
		}
		return false;
	}

	ngOnInit() {
		this.user = getStoredUser();
		const sessionToken = localStorage.getItem("sessionToken");
		if (!sessionToken) {
			this.router.navigate(['/login']);
		}
		this.displayName = this.user.firstName;
	}

	signOut() {
		swal.fire({
			title: "Sign Out",
			text: "Are you sure you'd like to sign out?",
			showCancelButton: true,
			confirmButtonText: "Yes",
			customClass: {
				confirmButton: "btn btn-success",
				cancelButton: "btn btn-danger",
			},
			buttonsStyling: false
		}).then((result) => {
			if (result.isDismissed) {
				swal.close();
			} else {
				localStorage.clear();
				swal.close();
				this.router.navigate(['/login']);
			}
		}).catch(error => {
			console.error(error);
		});
	}

	routeToHome() {
		this.router.navigate(['/products']);
	}

	routeToProducts() {
		this.router.navigate(['/products']);
	}

	routeToProfile() {
		this.router.navigate(['/profile']);
	}

	routeToCreate() {
		this.selectedProduct = {
			id: "0",
			productTitle: "",
			productSubTitle: "",
			productCategory: "",
			productUrl: "",
			productPrice: "",
			productAddress: "",
			productDetails: "",
			productInfo: ""
		};
		localStorage.setItem('selectedProduct', JSON.stringify(this.selectedProduct));
		localStorage.setItem('selectedProductId', "0");
		this.router.navigate([`/products/create`]);
	}
}
