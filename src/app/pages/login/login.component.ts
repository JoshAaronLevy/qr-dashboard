import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import * as Parse from "parse";
import * as parse from "../../../keys/parse";
import { Router } from '@angular/router';
import { getStoredUser, storeUser } from '../../../shared/userHelper';
import swal from "sweetalert2";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["../../app.component.scss"]
})
export class LoginComponent implements OnInit {
	loading: boolean;
	user: any;
	userLogin: FormGroup;
	userEmail: string;
	loginError: boolean;
	errorMsg: string;
	constructor(
		private formBuilder: FormBuilder,
		public router: Router
	) {
		Parse.initialize(parse.appId, parse.javascript);
		Parse.serverURL = parse.serverURL;
	}

	ngOnInit() {
		this.loading = false;
		this.loginError = false;
		this.user = getStoredUser();
		if (this.user.sessionToken) {
			this.router.navigate(['/products']);
		}
		this.userLogin = this.formBuilder.group({
			userName: '',
			password: '',
		});
	}

	async login() {
		this.loginError = false;
		this.loading = true;
		const login = this.userLogin.value.userName;
		const password = this.userLogin.value.password;
		await Parse.User.logIn(login, password).then((user) => {
			storeUser(user);
			this.presentLoginSuccess();
			return user;
		}).catch((error) => {
			this.errorMsg = error;
			this.loginError = true;
			this.loading = false;
			return error;
		});
	}

	presentLoginSuccess() {
		swal.fire({
			title: "Success!",
			timer: 1500,
			showConfirmButton: false,
			icon: "success"
		});
		setTimeout(() => {
			this.loading = false;
			this.router.navigate(['/products']);
		}, 1500);
	}

	presentResetPasswordPrompt() {
		swal.fire({
			title: "Reset Password",
			text: "Enter the account email to receive a password reset link",
			html:
				'<div class="form-group">' +
				'<input id="input-field" type="text" class="form-control" placeholder="Account Email" />' +
				"</div>",
			showCancelButton: true,
			customClass: {
				confirmButton: "btn btn-success",
				cancelButton: "btn btn-danger",
			},
			buttonsStyling: false
		}).then((result) => {
			if (result.isDismissed) {
				swal.close();
			} else {
				swal.fire({
					icon: "success",
					html:
						"Password reset link sent to: <strong>" +
						(document.getElementById("input-field") as HTMLInputElement)
							.value +
						"</strong>",
					customClass: {
						confirmButton: "btn btn-success",
					},
					buttonsStyling: false
				});
			}
		});
	}

	signUp() {
		this.router.navigate(['/signup']);
	}
}
