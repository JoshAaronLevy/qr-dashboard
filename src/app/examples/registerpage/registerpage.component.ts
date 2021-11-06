import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import * as Parse from "parse";
import * as parse from "../../../keys/parse";
import { Router } from '@angular/router';
import { getStoredUser, storeUser } from 'src/shared/userHelper';
import swal from "sweetalert2";

@Component({
	selector: "app-registerpage",
	templateUrl: "registerpage.component.html",
	styleUrls: [
		"../../app.component.scss"
	]
})
export class RegisterpageComponent implements OnInit {
	username: string;
	userSignUp: FormGroup;
	userEmail: string;
	isAgent: string;
	userPointer: any;
	passwordConfirmed: boolean;
	constructor(
		private formBuilder: FormBuilder,
		public router: Router
	) {
		Parse.initialize(parse.appId, parse.javascript);
		Parse.serverURL = parse.serverURL;
	}

	ngOnInit() {
		this.username = getStoredUser().username;
		if (this.username) {
			this.router.navigate(['/dashboard']);
		}
		this.userSignUp = this.formBuilder.group({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			passwordConfirm: ''
		});
	}

	userSignup() {
		const user = new Parse.User();
		const fullName = `${this.userSignUp.value.firstName} ${this.userSignUp.value.lastName}`;
		user.set('firstName', this.userSignUp.value.firstName);
		user.set('lastName', this.userSignUp.value.lastName);
		user.set('fullname', fullName);
		user.set('fullname_lower', fullName.toLowerCase());
		user.set('username', this.userSignUp.value.email);
		user.set('email', this.userSignUp.value.email);
		user.set('accountemail', this.userSignUp.value.email);
		user.set('emailCopy', this.userSignUp.value.email);
		user.set('password', this.userSignUp.value.password);
		user.set('isagentyn', this.isAgent);
		if (this.isAgent === 'YES') {
			user.set('agentID', this.userSignUp.value.email);
		}
		user.signUp().then((user) => {
			this.userPointer = user;
			storeUser(user);
			if (this.isAgent === 'YES') {
				this.agentSignup();
			} else {
				this.router.navigate(['/dashboard']);
			}
		}).catch((error) => {
			this.presentSignUpError(error);
		});
	}

	async agentSignup() {
		const Agent = Parse.Object.extend('Agents');
		const agent = new Agent();
		const fullName = `${this.userSignUp.value.firstName} ${this.userSignUp.value.lastName}`;
		agent.set('agentDisplayName', fullName);
		agent.set('agentEmail', this.userSignUp.value.email);
		agent.set('email', this.userSignUp.value.email);
		agent.set('agentID', this.userSignUp.value.email);
		agent.set('user', this.userPointer);
		agent.set('userPointer', this.userPointer);
		await agent.save().then((response) => {
			this.presentLoginSuccess();
			return response;
		}).catch((error) => {
			this.presentSignUpError(error);
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

	presentSignUpError(error) {
		swal.fire({
			title: "Sign Up Failed",
			buttonsStyling: false,
			customClass: {
				confirmButton: "btn btn-danger",
			},
			icon: "error",
			html: `<b>${error}</b>`
		});
	}

	login() {
		this.router.navigate(['/login']);
	}
}
