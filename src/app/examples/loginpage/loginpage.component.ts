import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import * as Parse from "parse";
import * as parse from "../../../keys/parse";
import { Router } from '@angular/router';
import { getStoredUser, storeUser } from '../../../shared/userHelper';
import swal from "sweetalert2";

@Component({
	selector: "app-login",
	templateUrl: "./loginpage.component.html",
	styleUrls: [
		"../../app.component.scss"
	]
})
export class LoginpageComponent implements OnInit {
	user: any;
	userLogin: FormGroup;
	userEmail: string;
	constructor(
		private formBuilder: FormBuilder,
		public router: Router
	) {
		Parse.initialize(parse.appId, parse.javascript);
		Parse.serverURL = parse.serverURL;
	}

	ngOnInit() {
		this.user = getStoredUser();
		if (this.user.sessionToken) {
			this.router.navigate(['/dashboard']);
		}
		this.userLogin = this.formBuilder.group({
			userName: '',
			password: '',
		});
	}

	async login() {
		const login = this.userLogin.value.userName;
		const password = this.userLogin.value.password;
		await Parse.User.logIn(login, password).then((user) => {
			storeUser(user);
			this.presentLoginSuccess();
		}).catch((error) => {
			this.presentLoginError(error);
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
			this.router.navigate(['/dashboard']);
		}, 1500);
	}

	presentLoginError(error) {
		swal.fire({
			title: "Login Failed",
			buttonsStyling: false,
			customClass: {
				confirmButton: "btn btn-danger",
			},
			icon: "error",
			html: `<b>${error}</b>`
		});
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
