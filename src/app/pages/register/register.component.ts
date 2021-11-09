import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import * as Parse from "parse";
import * as parse from "../../../keys/parse";
import { Router } from '@angular/router';
import { getStoredUser, storeUser } from 'src/shared/userHelper';
import swal from "sweetalert2";

@Component({
	selector: "app-register",
	templateUrl: "register.component.html",
	styleUrls: [
		"../../app.component.scss"
	]
})
export class RegisterComponent implements OnInit {
	loading: boolean;
	username: string;
	userSignUp: FormGroup;
	userEmail: string;
	isAgent: string;
	userPointer: any;
	passwordConfirmed: boolean;
	signUpError: boolean;
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
		this.signUpError = false;
		this.username = getStoredUser().username;
		if (this.username) {
			this.router.navigate(['/products']);
		}
		this.userSignUp = this.formBuilder.group({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			passwordConfirm: ''
		});
	}

	async userSignup() {
		this.loading = true;
		this.isAgent = "YES";
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
		await user.signUp().then((user) => {
			this.userPointer = user;
			storeUser(user);
			if (this.isAgent === 'YES') {
				this.agentSignup();
			} else {
				this.presentSignUpSuccess();
			}
			return user;
		}).catch((error) => {
			this.errorMsg = error;
			this.signUpError = true;
			this.loading = false;
			return error;
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
			this.presentSignUpSuccess();
			return response;
		}).catch((error) => {
			this.errorMsg = error;
			this.signUpError = true;
			this.loading = false;
			return error;
		});
	}

	presentSignUpSuccess() {
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

	login() {
		this.router.navigate(['/login']);
	}
}
