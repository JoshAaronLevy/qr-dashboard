import { Component, OnInit, OnDestroy } from "@angular/core";
import * as Parse from 'parse';
import * as parse from "../../../keys/parse";
import { getStoredUser, storeUser } from "src/shared/userHelper";
import { parseResult, parseResults } from 'src/shared/parseResults';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import swal from "sweetalert2";

@Component({
	selector: "app-accountsettings",
	templateUrl: "accountsettings.component.html"
})
export class AccountsettingsComponent implements OnInit, OnDestroy {
	loading: boolean;
	user: any;
	originalUser: any;
	emailChanged: boolean;
	userId: string;
	isAgent: boolean;
	userEdit: FormGroup = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		email: new FormControl('')
	});
	agentEdit: FormGroup = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		mainPhone: new FormControl(''),
		mobilePhone: new FormControl(''),
		company: new FormControl(''),
		website: new FormControl(''),
		address1: new FormControl(''),
		address2: new FormControl(''),
		city: new FormControl(''),
		state: new FormControl(''),
		zip: new FormControl(''),
		facebook: new FormControl(''),
		linkedIn: new FormControl(''),
		aboutMe: new FormControl('')
	});
	previousRoute: string;
	username: string;
	agent: any;
	displayAgentForm: boolean;
	displayUserForm: boolean;
	firstName: any;
	lastName: any;
	email: any;

	constructor(
		private formBuilder: FormBuilder,
		public router: Router
	) {
		Parse.initialize(parse.appId, parse.javascript);
		Parse.serverURL = parse.serverURL;
	}

	ngOnInit() {
		this.loading = true;
		this.checkUser();
		this.user = getStoredUser();
		this.originalUser = { ...this.user };
		if (this.originalUser.isAgent === 'YES') {
			this.isAgent = true;
		} else {
			this.isAgent = false;
		}
		this.emailChanged = false;
		const body = document.getElementsByTagName("body")[0];
		body.classList.add("account-settings");
	}

	checkUser() {
		const User = new Parse.User();
		const query = new Parse.Query(User);
		this.userId = getStoredUser().userId;
		query.get(this.userId).then((user) => {
			this.user = parseResult(user);
			if (this.isAgent === true) {
				this.checkAgent();
			} else {
				this.userForm();
			}
		}, (error) => {
			this.presentUserError(error);
		});
	}

	checkAgent() {
		const Agents = Parse.Object.extend('Agents');
		const query = new Parse.Query(Agents);
		this.username = getStoredUser().username;
		query.equalTo('agentID', this.username);
		query.find().then((agent) => {
			if (agent.length > 0) {
				this.agent = parseResults(agent);
				this.agent = this.agent[0];
				localStorage.setItem('agentId', this.agent.id);
				this.agentForm();
			} else {
				this.isAgent = false;
			}
		}, (error) => {
			this.isAgent = false;
			return error;
			// this.presentUserError(error);
		});
	}

	userForm() {
		this.displayAgentForm = false;
		this.displayUserForm = true;
		this.userEdit = this.formBuilder.group({
			firstName: this.user.firstName,
			lastName: this.user.lastName,
			email: this.user.email
		});
	}

	agentForm() {
		this.displayAgentForm = true;
		this.displayUserForm = false;
		const splitName = this.agent.agentDisplayName.split(' ');
		const agentFirstName = splitName[0];
		const agentLastName = splitName[1];
		this.agentEdit = this.formBuilder.group({
			firstName: agentFirstName,
			lastName: agentLastName,
			mainPhone: this.agent.agentPhoneMain,
			mobilePhone: this.agent.agentPhoneMobile,
			company: this.agent.agentOfficeName,
			website: this.agent.website,
			address1: this.agent.agentAddress,
			address2: this.agent.agentAddress2,
			city: this.agent.agentCity,
			state: this.agent.agentState,
			zip: this.agent.agentZip,
			facebook: this.agent.facebook,
			linkedIn: this.agent.linkedIn,
			aboutMe: this.agent.agentAboutMe
		});
	}

	evaluateEmail() {
		if (this.userEdit.value.email !== this.originalUser.username) {
			this.emailChanged = true;
		} else {
			this.emailChanged = false;
		}
	}

	editProfile() {
		if (this.isAgent === false) {
			this.firstName = this.userEdit.value.firstName;
			this.lastName = this.userEdit.value.lastName;
			this.email = this.userEdit.value.email;
			this.editUser();
		} else {
			this.firstName = this.agentEdit.value.firstName;
			this.lastName = this.agentEdit.value.lastName;
			this.email = this.userEdit.value.email;
			this.editUser();
			this.editAgent();
		}
	}

	editUser() {
		const User = new Parse.User();
		const query = new Parse.Query(User);
		query.get(this.userId).then((user) => {
			const fullName = `${this.firstName} ${this.lastName}`;
			user.set('firstName', this.firstName);
			user.set('lastName', this.lastName);
			user.set('fullname', fullName);
			user.set('fullname_lower', fullName.toLowerCase());
			user.save().then((response) => {
				storeUser(response);
				this.user = parseResult(response);
			}).catch((error) => {
				this.presentUserError(error);
			});
		});
	}

	editAgent() {
		const Agents = Parse.Object.extend('Agents');
		const query = new Parse.Query(Agents);
		const agentId = localStorage.getItem('agentId');
		query.get(agentId).then((agent) => {
			const fullName = `${this.firstName} ${this.lastName}`;
			agent.set('firstName', this.firstName);
			agent.set('lastName', this.lastName);
			agent.set('agentDisplayName', fullName);
			agent.set('agentPhoneMain', this.agentEdit.value.mainPhone);
			agent.set('agentPhoneMobile', this.agentEdit.value.mobilePhone);
			agent.set('agentOfficeName', this.agentEdit.value.company);
			agent.set('website', this.agentEdit.value.website);
			agent.set('agentAddress', this.agentEdit.value.address1);
			agent.set('agentAddress2', this.agentEdit.value.address2);
			agent.set('agentCity', this.agentEdit.value.city);
			agent.set('agentState', this.agentEdit.value.state);
			agent.set('agentZip', this.agentEdit.value.zip);
			agent.set('faceBook', this.agentEdit.value.facebook);
			agent.set('linkedIn', this.agentEdit.value.linkedIn);
			agent.set('agentAboutMe', this.agentEdit.value.aboutMe);
			agent.save().then((response) => {
				this.presentUserSuccess();
				// this.router.navigate(['/settings']);
				return response;
			}).catch((error) => {
				this.presentUserError(error);
			});
		});
	}

	presentUserSuccess() {
		swal.fire({
			title: "Success!",
			timer: 1000,
			showConfirmButton: false,
			icon: "success"
		});
		setTimeout(() => {
			this.loading = false;
			this.router.navigate(['/dashboard']);
		}, 1000);
	}

	presentUserError(error) {
		swal.fire({
			title: "Login Failed",
			buttonsStyling: false,
			customClass: {
				confirmButton: "btn btn-danger",
			},
			icon: "error",
			html: `<b>${error}</b>`
		});
		this.loading = false;
	}

	ngOnDestroy() {
		const body = document.getElementsByTagName("body")[0];
		body.classList.remove("account-settings");
	}
}
