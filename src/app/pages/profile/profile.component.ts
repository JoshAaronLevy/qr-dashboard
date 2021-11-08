import { Component, OnInit, OnDestroy } from "@angular/core";
import * as Parse from 'parse';
import * as parse from "../../../keys/parse";
import { getStoredUser, storeUser } from "src/shared/userHelper";
import { parseResult, parseResults } from 'src/shared/parseResults';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import swal from "sweetalert2";

@Component({
	selector: "app-profile",
	templateUrl: "profile.component.html",
	styleUrls: ["profile.component.scss"]
})
export class ProfileComponent implements OnInit, OnDestroy {
	loading: boolean;
	saving: boolean;
	user: any;
	originalUser: any;
	originalAgent: any;
	emailChanged: boolean;
	emailsMatch: boolean;
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
		agentEmail: new FormControl(''),
		confirmEmail: new FormControl(''),
		agentPhoneMain: new FormControl(''),
		agentPhoneMobile: new FormControl(''),
		agentOfficeName: new FormControl(''),
		website: new FormControl(''),
		agentAddress: new FormControl(''),
		agentAddress2: new FormControl(''),
		agentCity: new FormControl('', [
			Validators.required
		]),
		agentState: new FormControl(''),
		agentZip: new FormControl(''),
		faceBook: new FormControl(''),
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
	fieldValid: boolean;
	agentCity: any;
	errorMsg: string;
	firstNameInvalid: boolean;
	saveDisabled: boolean;

	constructor(
		private formBuilder: FormBuilder,
		public router: Router
	) {
		Parse.initialize(parse.appId, parse.javascript);
		Parse.serverURL = parse.serverURL;
	}

	ngOnInit() {
		this.saveDisabled = false;
		this.loading = true;
		const body = document.getElementsByTagName("body")[0];
		body.classList.add("account-settings");
		this.agentCity = document.getElementById("agentCity");
		this.initializeData();
	}

	async initializeData() {
		await this.presentLoadingModal();
		await this.checkUser();
	}

	presentLoadingModal() {
		swal.fire({
			title: "Loading...",
			showConfirmButton: false,
			showCancelButton: false
		});
	}

	async checkUser() {
		this.user = getStoredUser();
		this.originalUser = { ...this.user };
		if (this.originalUser.isAgent === 'YES' || this.originalUser.isagentyn === 'YES') {
			this.isAgent = true;
		} else {
			this.isAgent = false;
		}
		this.emailChanged = false;
		const User = new Parse.User();
		const query = new Parse.Query(User);
		this.userId = getStoredUser().userId;
		await query.get(this.userId).then((user) => {
			this.user = parseResult(user);
			if (this.isAgent === true) {
				this.checkAgent();
			} else {
				this.userForm();
			}
			return this.user;
		}, (error) => {
			swal.close();
			this.presentUserError(error);
			return error;
		});
	}

	async checkAgent() {
		const Agents = Parse.Object.extend('Agents');
		const query = new Parse.Query(Agents);
		this.username = getStoredUser().username;
		query.equalTo('agentID', this.username);
		await query.find().then((agent) => {
			if (agent.length > 0) {
				this.agent = parseResults(agent);
				this.agent = this.agent[0];
				this.originalAgent = { ...this.agent };
				localStorage.setItem('agentId', this.agent.id);
				this.agentForm();
			} else {
				this.isAgent = false;
			}
			return this.agent;
		}, (error) => {
			this.isAgent = false;
			swal.close();
			this.presentUserError(error);
			return error;
		});
	}

	userForm() {
		this.userEdit = this.formBuilder.group({
			firstName: this.user.firstName,
			lastName: this.user.lastName,
			email: this.user.email
		});
		this.displayAgentForm = false;
		this.displayUserForm = true;
		setTimeout(() => {
			this.loading = false;
			swal.close();
		}, 500);
	}

	agentForm() {
		this.agentEdit = this.formBuilder.group({
			firstName: this.agent.firstName,
			lastName: this.agent.lastName,
			agentEmail: this.agent.agentEmail,
			confirmEmail: "",
			agentPhoneMain: this.agent.agentPhoneMain,
			agentPhoneMobile: this.agent.agentPhoneMobile,
			agentOfficeName: this.agent.agentOfficeName,
			website: this.agent.website,
			agentAddress: this.agent.agentAddress,
			agentAddress2: this.agent.agentAddress2,
			agentCity: this.agent.agentCity,
			agentState: this.agent.agentState,
			agentZip: this.agent.agentZip,
			faceBook: this.agent.faceBook,
			linkedIn: this.agent.linkedIn,
			agentAboutMe: this.agent.agentAboutMe
		});
		this.displayAgentForm = true;
		this.displayUserForm = false;
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
		const value = this.agentEdit.value[fieldName];
		if (value.length < minChars) {
			this.fieldValid = false;
			this.saveDisabled = true;
			if (fieldName === "firstName") {
				this.firstNameInvalid = true;
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

	evaluateEmail() {
		if (this.agentEdit.value.agentEmail !== this.originalAgent.agentEmail) {
			this.emailChanged = true;
			if (this.agentEdit.value.agentEmail !== this.agentEdit.value.confirmEmail) {
				this.emailsMatch = false;
				this.saveDisabled = true;
				document.getElementById("confirmEmail").classList.add("field-invalid");
				document.getElementById("confirmEmail").classList.remove("field-valid");
			} else {
				this.emailsMatch = true;
				this.saveDisabled = false;
				document.getElementById("confirmEmail").classList.add("field-valid");
				document.getElementById("confirmEmail").classList.remove("field-invalid");
			}
		} else {
			this.emailChanged = false;
		}
	}

	editProfile() {
		this.saving = true;
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
				if (this.isAgent === false) {
					this.saving = false;
				}
			}).catch((error) => {
				this.saving = false;
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
			agent.set('agentEmail', this.agentEdit.value.agentEmail);
			agent.set('agentPhoneMain', this.agentEdit.value.agentPhoneMain);
			agent.set('agentPhoneMobile', this.agentEdit.value.agentPhoneMobile);
			agent.set('agentOfficeName', this.agentEdit.value.agentOfficeName);
			agent.set('website', this.agentEdit.value.website);
			agent.set('agentAddress', this.agentEdit.value.agentAddress);
			agent.set('agentAddress2', this.agentEdit.value.agentAddress2);
			agent.set('agentCity', this.agentEdit.value.agentCity);
			agent.set('agentState', this.agentEdit.value.agentState);
			agent.set('agentZip', this.agentEdit.value.agentZip);
			agent.set('faceBook', this.agentEdit.value.faceBook);
			agent.set('linkedIn', this.agentEdit.value.linkedIn);
			agent.set('agentAboutMe', this.agentEdit.value.agentAboutMe);
			agent.save().then((response) => {
				this.presentUserSuccess();
				return response;
			}).catch((error) => {
				this.saving = false;
				this.presentUserError(error);
			});
		});
	}

	cancelChanges() {
		this.agentEdit = this.formBuilder.group({
			firstName: this.agent.firstName,
			lastName: this.agent.lastName,
			agentEmail: this.agent.agentEmail,
			agentPhoneMain: this.agent.agentPhoneMain,
			agentPhoneMobile: this.agent.agentPhoneMobile,
			agentOfficeName: this.agent.agentOfficeName,
			website: this.agent.website,
			agentAddress: this.agent.agentAddress,
			agentAddress2: this.agent.agentAddress2,
			agentCity: this.agent.agentCity,
			agentState: this.agent.agentState,
			agentZip: this.agent.agentZip,
			faceBook: this.agent.faceBook,
			linkedIn: this.agent.linkedIn,
			agentAboutMe: this.agent.agentAboutMe
		});
		swal.fire({
			title: "Form Changes Cleared",
			timer: 1500,
			showConfirmButton: false,
			icon: "success"
		});
	}

	presentLoadingError(error) {
		swal.fire({
			title: "Error",
			buttonsStyling: false,
			customClass: {
				confirmButton: "btn btn-danger",
			},
			icon: "error",
			html: `<b>${error}</b>`
		});
		this.loading = false;
	}

	presentUserSuccess() {
		this.saving = false;
		swal.fire({
			title: "Success!",
			timer: 1500,
			showConfirmButton: false,
			icon: "success"
		});
	}

	presentUserError(error) {
		this.saving = false;
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

	ngOnDestroy() {
		const body = document.getElementsByTagName("body")[0];
		body.classList.remove("account-settings");
	}
}
