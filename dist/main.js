(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joshlevy/Desktop/qr-dashboard/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "9uEI":
/*!***********************************************************************!*\
  !*** ./src/app/components/picture-upload/picture-upload.component.ts ***!
  \***********************************************************************/
/*! exports provided: PictureUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureUploadComponent", function() { return PictureUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



var _c0 = ["fileInput"];
function PictureUploadComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PictureUploadComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.handleClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PictureUploadComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PictureUploadComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.handleClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PictureUploadComponent_span_8_br_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
function PictureUploadComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PictureUploadComponent_span_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.handleClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Change ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PictureUploadComponent_span_8_br_3_Template, 1, 0, "br", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PictureUploadComponent_span_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.handleRemove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.avatar);
} }
var _c1 = function (a0) { return { "img-circle": a0 }; };
var PictureUploadComponent = /** @class */ (function () {
    function PictureUploadComponent() {
        this.avatar = false;
        this.file = {};
        this.imagePreviewUrl = {};
        this.handleImageChange = this.handleImageChange.bind(this);
    }
    PictureUploadComponent.prototype.ngOnInit = function () {
        this.file = null;
        this.imagePreviewUrl =
            this.image !== undefined
                ? this.image
                : this.avatar
                    ? "assets/img/placeholder.jpg"
                    : "assets/img/image_placeholder.jpg";
    };
    PictureUploadComponent.prototype.handleImageChange = function ($event) {
        var _this = this;
        $event.preventDefault();
        var reader = new FileReader();
        var file = $event.target.files[0];
        reader.onloadend = function () {
            _this.file = file;
            _this.imagePreviewUrl = reader.result;
            // this.state.imagePreviewUrl1 = reader.result;
        };
        reader.readAsDataURL(file);
    };
    PictureUploadComponent.prototype.handleClick = function () {
        console.log(this.fileInput.nativeElement);
        this.fileInput.nativeElement.click();
    };
    PictureUploadComponent.prototype.handleRemove = function () {
        this.file = null;
        this.imagePreviewUrl =
            this.image !== undefined
                ? this.image
                : this.avatar
                    ? "assets/img/placeholder.jpg"
                    : "assets/img/image_placeholder.jpg";
        this.fileInput.nativeElement.value = null;
    };
    PictureUploadComponent.prototype.handleSubmit = function ($event) {
        $event.preventDefault();
        // this.state.file is the file/image uploaded
        // in this function you can save the image (this.state.file) on form submit
        // you have to call it yourself
    };
    PictureUploadComponent.ɵfac = function PictureUploadComponent_Factory(t) { return new (t || PictureUploadComponent)(); };
    PictureUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PictureUploadComponent, selectors: [["app-picture-upload"]], viewQuery: function PictureUploadComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        } }, inputs: { avatar: "avatar", image: "image" }, decls: 9, vars: 7, consts: [[1, "fileinput", "text-center"], ["type", "file", 3, "change"], ["fileInput", ""], [1, "thumbnail", 3, "ngClass"], ["alt", "...", 3, "src"], ["class", "btn btn-round btn-file mt-2", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "btn", "btn-round", "btn-file", "mt-2", 3, "click"], [1, "btn", "btn-round", "btn-danger", "mt-2", 3, "click"], [1, "fa", "fa-times"]], template: function PictureUploadComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PictureUploadComponent_Template_input_change_1_listener($event) { return ctx.handleImageChange($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PictureUploadComponent_button_6_Template, 2, 0, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PictureUploadComponent_button_7_Template, 2, 0, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PictureUploadComponent_span_8_Template, 7, 1, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.avatar));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imagePreviewUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.file === null && ctx.avatar);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.file === null && !ctx.avatar);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.file !== null);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".fileinput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY3R1cmUtdXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoicGljdHVyZS11cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlaW5wdXQgaW5wdXR7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */"] });
    return PictureUploadComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictureUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-picture-upload",
                templateUrl: "./picture-upload.component.html",
                styleUrls: ["./picture-upload.component.css"]
            }]
    }], function () { return []; }, { avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["fileInput"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DuhC":
/*!***************************!*\
  !*** ./src/keys/parse.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "appId": "w17nTT0TMtIjiH1qzS4r6zAGig6EOAHNpncny7VF",
  "javascript": "kBlbaoq8fd2KblWBNEApECYIEPiCF8CqZyWvXYK2",
  "serverURL": "https://parseapi.back4app.com/"
};

/***/ }),

/***/ "Fv2P":
/*!********************************************************************!*\
  !*** ./src/app/pages/accountsettings/accountsettings.component.ts ***!
  \********************************************************************/
/*! exports provided: AccountsettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsettingsComponent", function() { return AccountsettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse */ "v0iw");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _keys_parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../keys/parse */ "DuhC");
/* harmony import */ var _keys_parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_keys_parse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_shared_userHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/userHelper */ "O1WI");
/* harmony import */ var src_shared_parseResults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/parseResults */ "dkLf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);












var AccountsettingsComponent = /** @class */ (function () {
    function AccountsettingsComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userEdit = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
        this.agentEdit = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            agentEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            confirmEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            agentPhoneMain: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            agentPhoneMobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            agentOfficeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            agentAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            agentAddress2: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            agentCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
            ]),
            agentState: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            agentZip: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            faceBook: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            linkedIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            aboutMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
        parse__WEBPACK_IMPORTED_MODULE_2__["initialize"](_keys_parse__WEBPACK_IMPORTED_MODULE_3__["appId"], _keys_parse__WEBPACK_IMPORTED_MODULE_3__["javascript"]);
        parse__WEBPACK_IMPORTED_MODULE_2__["serverURL"] = _keys_parse__WEBPACK_IMPORTED_MODULE_3__["serverURL"];
    }
    AccountsettingsComponent.prototype.ngOnInit = function () {
        this.saveDisabled = false;
        this.loading = true;
        this.checkUser();
        this.user = Object(src_shared_userHelper__WEBPACK_IMPORTED_MODULE_4__["getStoredUser"])();
        this.originalUser = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.user);
        if (this.originalUser.isAgent === 'YES' || this.originalUser.isagentyn === 'YES') {
            this.isAgent = true;
        }
        else {
            this.isAgent = false;
        }
        this.emailChanged = false;
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("account-settings");
        this.agentCity = document.getElementById("agentCity");
    };
    AccountsettingsComponent.prototype.checkUser = function () {
        var _this = this;
        var User = new parse__WEBPACK_IMPORTED_MODULE_2__["User"]();
        var query = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](User);
        this.userId = Object(src_shared_userHelper__WEBPACK_IMPORTED_MODULE_4__["getStoredUser"])().userId;
        query.get(this.userId).then(function (user) {
            _this.user = Object(src_shared_parseResults__WEBPACK_IMPORTED_MODULE_5__["parseResult"])(user);
            if (_this.isAgent === true) {
                _this.checkAgent();
            }
            else {
                _this.userForm();
            }
        }, function (error) {
            _this.presentUserError(error);
        });
    };
    AccountsettingsComponent.prototype.checkAgent = function () {
        var _this = this;
        var Agents = parse__WEBPACK_IMPORTED_MODULE_2__["Object"].extend('Agents');
        var query = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](Agents);
        this.username = Object(src_shared_userHelper__WEBPACK_IMPORTED_MODULE_4__["getStoredUser"])().username;
        query.equalTo('agentID', this.username);
        query.find().then(function (agent) {
            if (agent.length > 0) {
                _this.agent = Object(src_shared_parseResults__WEBPACK_IMPORTED_MODULE_5__["parseResults"])(agent);
                _this.agent = _this.agent[0];
                _this.originalAgent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.agent);
                localStorage.setItem('agentId', _this.agent.id);
                _this.agentForm();
            }
            else {
                _this.isAgent = false;
            }
        }, function (error) {
            _this.isAgent = false;
            return error;
            // this.presentUserError(error);
        });
    };
    AccountsettingsComponent.prototype.userForm = function () {
        this.displayAgentForm = false;
        this.displayUserForm = true;
        this.userEdit = this.formBuilder.group({
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            email: this.user.email
        });
    };
    AccountsettingsComponent.prototype.agentForm = function () {
        this.displayAgentForm = true;
        this.displayUserForm = false;
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
    };
    AccountsettingsComponent.prototype.validateField = function (fieldName, minChars) {
        var fieldId = document.getElementById(fieldName);
        var validApplied;
        var invalidApplied;
        if (fieldId.classList.contains("field-valid")) {
            validApplied = true;
        }
        else if (!fieldId.classList.contains("field-valid")) {
            validApplied = false;
        }
        if (fieldId.classList.contains("field-invalid")) {
            invalidApplied = true;
        }
        else if (!fieldId.classList.contains("field-invalid")) {
            invalidApplied = false;
        }
        var value = this.agentEdit.value[fieldName];
        if (value.length < minChars) {
            this.fieldValid = false;
            this.saveDisabled = true;
            if (fieldName === "firstName") {
                this.firstNameInvalid = true;
            }
            this.errorMsg = fieldName + " must have at least " + minChars + " character(s)";
            if (validApplied) {
                fieldId.classList.remove("field-valid");
            }
            if (!invalidApplied) {
                fieldId.classList.add("field-invalid");
            }
        }
        else {
            this.fieldValid = true;
            this.saveDisabled = false;
            if (invalidApplied) {
                fieldId.classList.remove("field-invalid");
            }
            if (!validApplied) {
                fieldId.classList.add("field-valid");
            }
        }
    };
    AccountsettingsComponent.prototype.evaluateEmail = function () {
        if (this.agentEdit.value.agentEmail !== this.originalAgent.agentEmail) {
            this.emailChanged = true;
            if (this.agentEdit.value.agentEmail !== this.agentEdit.value.confirmEmail) {
                this.emailsMatch = false;
                this.saveDisabled = true;
                document.getElementById("confirmEmail").classList.add("field-invalid");
                document.getElementById("confirmEmail").classList.remove("field-valid");
            }
            else {
                this.emailsMatch = true;
                this.saveDisabled = false;
                document.getElementById("confirmEmail").classList.add("field-valid");
                document.getElementById("confirmEmail").classList.remove("field-invalid");
            }
        }
        else {
            this.emailChanged = false;
        }
    };
    AccountsettingsComponent.prototype.editProfile = function () {
        this.saving = true;
        if (this.isAgent === false) {
            this.firstName = this.userEdit.value.firstName;
            this.lastName = this.userEdit.value.lastName;
            this.email = this.userEdit.value.email;
            this.editUser();
        }
        else {
            this.firstName = this.agentEdit.value.firstName;
            this.lastName = this.agentEdit.value.lastName;
            this.email = this.userEdit.value.email;
            this.editUser();
            this.editAgent();
        }
    };
    AccountsettingsComponent.prototype.editUser = function () {
        var _this = this;
        var User = new parse__WEBPACK_IMPORTED_MODULE_2__["User"]();
        var query = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](User);
        query.get(this.userId).then(function (user) {
            var fullName = _this.firstName + " " + _this.lastName;
            user.set('firstName', _this.firstName);
            user.set('lastName', _this.lastName);
            user.set('fullname', fullName);
            user.set('fullname_lower', fullName.toLowerCase());
            user.save().then(function (response) {
                Object(src_shared_userHelper__WEBPACK_IMPORTED_MODULE_4__["storeUser"])(response);
                _this.user = Object(src_shared_parseResults__WEBPACK_IMPORTED_MODULE_5__["parseResult"])(response);
                if (_this.isAgent === false) {
                    _this.saving = false;
                }
            }).catch(function (error) {
                _this.saving = false;
                _this.presentUserError(error);
            });
        });
    };
    AccountsettingsComponent.prototype.editAgent = function () {
        var _this = this;
        var Agents = parse__WEBPACK_IMPORTED_MODULE_2__["Object"].extend('Agents');
        var query = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](Agents);
        var agentId = localStorage.getItem('agentId');
        query.get(agentId).then(function (agent) {
            var fullName = _this.firstName + " " + _this.lastName;
            agent.set('firstName', _this.firstName);
            agent.set('lastName', _this.lastName);
            agent.set('agentDisplayName', fullName);
            agent.set('agentEmail', _this.agentEdit.value.agentEmail);
            agent.set('agentPhoneMain', _this.agentEdit.value.agentPhoneMain);
            agent.set('agentPhoneMobile', _this.agentEdit.value.agentPhoneMobile);
            agent.set('agentOfficeName', _this.agentEdit.value.agentOfficeName);
            agent.set('website', _this.agentEdit.value.website);
            agent.set('agentAddress', _this.agentEdit.value.agentAddress);
            agent.set('agentAddress2', _this.agentEdit.value.agentAddress2);
            agent.set('agentCity', _this.agentEdit.value.agentCity);
            agent.set('agentState', _this.agentEdit.value.agentState);
            agent.set('agentZip', _this.agentEdit.value.agentZip);
            agent.set('faceBook', _this.agentEdit.value.faceBook);
            agent.set('linkedIn', _this.agentEdit.value.linkedIn);
            agent.set('agentAboutMe', _this.agentEdit.value.agentAboutMe);
            agent.save().then(function (response) {
                _this.presentUserSuccess();
                return response;
            }).catch(function (error) {
                _this.saving = false;
                _this.presentUserError(error);
            });
        });
    };
    AccountsettingsComponent.prototype.cancelChanges = function () {
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: "Form Changes Cleared",
            timer: 1500,
            showConfirmButton: false,
            icon: "success"
        });
    };
    AccountsettingsComponent.prototype.presentUserSuccess = function () {
        this.saving = false;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: "Success!",
            timer: 1500,
            showConfirmButton: false,
            icon: "success"
        });
    };
    AccountsettingsComponent.prototype.presentUserError = function (error) {
        this.saving = false;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: "Save Failed",
            buttonsStyling: false,
            customClass: {
                confirmButton: "btn btn-danger",
            },
            icon: "error",
            html: "<b>" + error + "</b>"
        });
        this.loading = false;
    };
    AccountsettingsComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("account-settings");
    };
    AccountsettingsComponent.ɵfac = function AccountsettingsComponent_Factory(t) { return new (t || AccountsettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
    AccountsettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccountsettingsComponent, selectors: [["app-accountsettings"]], decls: 21, vars: 0, consts: [[1, "wrapper"], [1, "section-shaped", "my-0", "skew-separator", "skew-mini"], [1, "page-header", "page-header-small", "header-filter"], [1, "page-header-image", 2, "background-image", "url('assets/img/pages/georgie.jpg')"], [1, "container"], [1, "header-body", "text-center", "mb-7"], [1, "row", "justify-content-center"], [1, "col-xl-5", "col-lg-6", "col-md-8", "px-5"], [1, "text-white"], [1, "bg-secondary"], [1, "container", "qrcode-card", "bg-white", "card"], [1, "row"], [1, "col-md-12", "qrcode-container"], [1, "section", "qrcode-section"], [1, "text-center", "qr-button"], ["type", "button", 1, "btn", "btn-primary"], [1, "text-center"]], template: function AccountsettingsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Account Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "section", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Create QR Code ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "No QR Codes Found");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, styles: [".qrcode-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.qrcode-card[_ngcontent-%COMP%] {\n  margin-top: 120px !important;\n  z-index: 999 !important;\n}\n\n.qrcode-section[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 0rem !important;\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\n.btn-danger[_ngcontent-%COMP%]:hover {\n  cursor: pointer !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #000 !important;\n  font-weight: 500 !important;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border: 2px solid #5e72e4 !important;\n}\n\n.field-valid[_ngcontent-%COMP%] {\n  border: 1px solid #2dce89 !important;\n}\n\n.field-invalid[_ngcontent-%COMP%] {\n  border: 2px solid #f5365c !important;\n}\n\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.saving-button[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n\n.saving-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 7px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FjY291bnRzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHNCQUFBO0FBQ0Q7O0FBRUE7RUFDQyw0QkFBQTtFQUNBLHVCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxhQUFBO0VBQ0EsNEJBQUE7QUFDRDs7QUFFQTtFQUNDLHNCQUFBO0FBQ0Q7O0FBRUE7RUFDQywwQkFBQTtBQUNEOztBQUVBO0VBQ0Msc0JBQUE7RUFDQSwyQkFBQTtBQUNEOztBQUVBO0VBQ0Msb0NBQUE7QUFDRDs7QUFFQTtFQUNDLG9DQUFBO0FBQ0Q7O0FBRUE7RUFDQyxvQ0FBQTtBQUNEOztBQUVBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRDs7QUFFQTtFQUNDLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtBQUNEOztBQUVBO0VBQ0MsNEJBQUE7QUFDRCIsImZpbGUiOiJhY2NvdW50c2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXJjb2RlLWNvbnRhaW5lciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5xcmNvZGUtY2FyZCB7XG5cdG1hcmdpbi10b3A6IDEyMHB4ICFpbXBvcnRhbnQ7XG5cdHotaW5kZXg6IDk5OSAhaW1wb3J0YW50O1xufVxuXG4ucXJjb2RlLXNlY3Rpb24ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRwYWRkaW5nLXRvcDogMHJlbSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWRhbmdlciB7XG5cdGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZGFuZ2VyOmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuXHRjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuXHRib3JkZXI6IDJweCBzb2xpZCAjNWU3MmU0ICFpbXBvcnRhbnQ7XG59XG5cbi5maWVsZC12YWxpZCB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMyZGNlODkgIWltcG9ydGFudDtcbn1cblxuLmZpZWxkLWludmFsaWQge1xuXHRib3JkZXI6IDJweCBzb2xpZCAjZjUzNjVjICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tZ3JvdXAge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zYXZpbmctYnV0dG9uIHtcblx0ZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuXHRhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5zYXZpbmctYnV0dG9uIHNwYW4ge1xuXHRtYXJnaW4tcmlnaHQ6IDdweCAhaW1wb3J0YW50O1xufVxuIl19 */"] });
    return AccountsettingsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountsettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-accountsettings",
                templateUrl: "accountsettings.component.html",
                styleUrls: ["accountsettings.component.scss"]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.date = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 44, vars: 4, consts: [[1, "footer"], [1, "container"], [1, "row", "row-grid", "align-items-center", "mb-5"], [1, "col-lg-6"], [1, "text-primary", "font-weight-light", "mb-2"], [1, "mb-0", "font-weight-light"], [1, "col-lg-6", "text-lg-center", "btn-wrapper"], ["href", "https://twitter.com/qrdashboard", "target", "_blank", 1, "btn", "btn-icon-only", "btn-twitter", "rounded-circle", "mr-3"], [1, "btn-inner--icon"], [1, "fa", "fa-twitter"], ["href", "https://www.facebook.com/QRDashboard/", "target", "_blank", 1, "btn-icon-only", "rounded-circle", "btn", "btn-facebook", "mr-3"], [1, "fab", "fa-facebook"], ["href", "https://dribbble.com/qrdashboard", "target", "_blank", 1, "btn", "btn-icon-only", "btn-dribbble", "rounded-circle", "mr-3"], [1, "fa", "fa-dribbble"], ["href", "https://github.com/qrdashboardofficial", "target", "_blank", 1, "btn", "btn-icon-only", "btn-github", "rounded-circle"], [1, "fa", "fa-github"], [1, "row", "align-items-center", "justify-content-md-between"], [1, "col-md-6"], [1, "copyright"], ["href", "", "target", "_blank"], [1, "nav", "nav-footer", "justify-content-end"], [1, "nav-item"], ["href", "", "target", "_blank", 1, "nav-link"], ["href", "https://blog.qrdashboard.com/", "target", "_blank", 1, "nav-link"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Thank you for supporting us! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Let's get in touch on any of these platforms. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " QR Dashboard ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " . ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " QR Dashboard ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " About Us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Blog ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " License ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 1, ctx.date, "yyyy"), " ");
        } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-footer",
                templateUrl: "./footer.component.html",
                styleUrls: ["./footer.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LxSD":
/*!****************************************************!*\
  !*** ./src/app/pages/qrcodes/qrcodes.component.ts ***!
  \****************************************************/
/*! exports provided: QRCodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCodesComponent", function() { return QRCodesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_shared_userHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/userHelper */ "O1WI");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse */ "v0iw");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _keys_parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../keys/parse */ "DuhC");
/* harmony import */ var _keys_parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_keys_parse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_parseResults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/parseResults */ "dkLf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
// tslint:disable: no-shadowed-variable
// tslint:disable: prefer-for-of










function QRCodesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No QR Codes Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QRCodesComponent_div_19_tbody_13_tr_1_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var qrcode_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltip", qrcode_r4.tagInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("adaptivePosition", false)("delay", 500);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 4, qrcode_r4.tagInfo, 0, 30), "... ");
} }
function QRCodesComponent_div_19_tbody_13_tr_1_small_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var qrcode_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](qrcode_r4.tagInfo);
} }
function QRCodesComponent_div_19_tbody_13_tr_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QRCodesComponent_div_19_tbody_13_tr_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var qrcode_r4 = ctx.$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.viewQRCodeDetails(qrcode_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QRCodesComponent_div_19_tbody_13_tr_1_small_8_Template, 3, 8, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QRCodesComponent_div_19_tbody_13_tr_1_small_9_Template, 2, 1, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QRCodesComponent_div_19_tbody_13_tr_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var qrcode_r4 = ctx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.viewQRCodeDetails(qrcode_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var qrcode_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", qrcode_r4.tagTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", qrcode_r4.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](qrcode_r4.tagTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", qrcode_r4.tagInfo && qrcode_r4.tagInfo.length > 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", qrcode_r4.tagInfo && qrcode_r4.tagInfo.length < 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", qrcode_r4.tagAddress, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 7, qrcode_r4.createdAt, "shortDate"), " ");
} }
function QRCodesComponent_div_19_tbody_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QRCodesComponent_div_19_tbody_13_tr_1_Template, 18, 10, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.qrcodes);
} }
function QRCodesComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "QR Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QRCodesComponent_div_19_tbody_13_Template, 2, 1, "tbody", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
} }
var QRCodesComponent = /** @class */ (function () {
    function QRCodesComponent(router) {
        this.router = router;
        parse__WEBPACK_IMPORTED_MODULE_2__["initialize"](_keys_parse__WEBPACK_IMPORTED_MODULE_3__["appId"], _keys_parse__WEBPACK_IMPORTED_MODULE_3__["javascript"]);
        parse__WEBPACK_IMPORTED_MODULE_2__["serverURL"] = _keys_parse__WEBPACK_IMPORTED_MODULE_3__["serverURL"];
    }
    QRCodesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = Object(src_shared_userHelper__WEBPACK_IMPORTED_MODULE_1__["getStoredUser"])().username;
        this.searchEnabled = false;
        this.loading = true;
        var Tags = parse__WEBPACK_IMPORTED_MODULE_2__["Object"].extend('Tags');
        var query = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](Tags);
        query.equalTo('userEmail', this.username);
        query.find().then(function (results) {
            results = Object(_shared_parseResults__WEBPACK_IMPORTED_MODULE_5__["parseResults"])(results);
            _this.qrcodes = results;
            if (_this.qrcodes.length > 0) {
                _this.qrcodesFound = true;
            }
            else {
                _this.qrcodesFound = false;
            }
            for (var i = 0; i < _this.qrcodes.length; i++) {
                _this.qrcodes[i].imageUrl = '';
                if (_this.qrcodes[i].tagPhotoRef === undefined) {
                    _this.qrcodes[i].imageUrl = "https://photos.homecards.com/rebeacons/Tag-12345-1.jpg";
                }
                else {
                    _this.qrcodes[i].imageUrl = "https://photos.homecards.com/rebeacons/Tag-" + _this.qrcodes[i].tagPhotoRef + "-1.jpg";
                }
            }
            _this.loading = false;
        });
    };
    QRCodesComponent.prototype.viewQRCodeDetails = function (qrCode) {
        this.selectedQRCode = qrCode;
        localStorage.setItem('selectedQRCode', JSON.stringify(this.selectedQRCode));
        localStorage.setItem('selectedQRCodeId', this.selectedQRCode.id);
        this.router.navigate(["/qrcodes/" + this.selectedQRCode.id]);
    };
    QRCodesComponent.ɵfac = function QRCodesComponent_Factory(t) { return new (t || QRCodesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    QRCodesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QRCodesComponent, selectors: [["app-qrcodes"]], decls: 20, vars: 2, consts: [[1, "wrapper"], [1, "section-shaped", "my-0", "skew-separator", "skew-mini"], [1, "page-header", "page-header-small", "header-filter"], [1, "page-header-image", 2, "background-image", "url('assets/img/pages/georgie.jpg')"], [1, "container"], [1, "header-body", "text-center", "mb-7"], [1, "row", "justify-content-center"], [1, "col-xl-5", "col-lg-6", "col-md-8", "px-5"], [1, "text-white"], [1, "bg-secondary"], [1, "container", "qrcode-card", "bg-white", "card"], [1, "row"], [1, "col-md-12", "qrcode-container"], [1, "section", "qrcode-section"], [1, "text-center", "qr-button"], ["type", "button", 1, "btn", "btn-primary"], ["class", "text-center", 4, "ngIf"], ["class", "table", 4, "ngIf"], [1, "text-center"], [1, "table"], [1, "table", "table-shopping"], [1, ""], ["class", "qr-code-table", 4, "ngIf"], [1, "qr-code-table"], [4, "ngFor", "ngForOf"], [1, "img-container"], [3, "src", "alt"], [1, "td-name"], [3, "click"], ["placement", "bottom", "containerClass", "code-info-tooltip", 3, "tooltip", "adaptivePosition", "delay", 4, "ngIf"], [4, "ngIf"], [1, "btn", "btn-icon", "btn-primary", 3, "click"], [1, "fa-solid", "fa-eye"], ["placement", "bottom", "containerClass", "code-info-tooltip", 3, "tooltip", "adaptivePosition", "delay"]], template: function QRCodesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "My QR Codes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Create QR Code ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, QRCodesComponent_div_18_Template, 3, 0, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, QRCodesComponent_div_19_Template, 14, 1, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.qrcodesFound);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.qrcodesFound);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]], styles: [".qrcode-container[_ngcontent-%COMP%] {\n  margin-top: -120px !important;\n  background-color: #fff;\n}\n\n.qrcode-card[_ngcontent-%COMP%] {\n  z-index: 999 !important;\n}\n\n.qrcode-section[_ngcontent-%COMP%] {\n  padding-top: 2rem !important;\n}\n\n.qr-button[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.panel-header-min[_ngcontent-%COMP%] {\n  height: 0px !important;\n}\n\n.qr-code-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #5e72e4 !important;\n}\n\n.qr-code-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #333333 !important;\n  cursor: pointer !important;\n}\n\n.table-shopping[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.table-shopping[_ngcontent-%COMP%]   .td-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #444 !important;\n  font-weight: 500 !important;\n  font-size: 14px !important;\n}\n\n.td-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #444 !important;\n  text-decoration: none;\n}\n\n.btn-icon[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.825rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3FyY29kZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyw2QkFBQTtFQUNBLHNCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx1QkFBQTtBQUNEOztBQUVBO0VBQ0MsNEJBQUE7QUFDRDs7QUFFQTtFQUNDLG1CQUFBO0FBQ0Q7O0FBRUE7RUFDQyxzQkFBQTtBQUNEOztBQUVBO0VBQ0MseUJBQUE7QUFDRDs7QUFFQTtFQUNDLHlCQUFBO0VBQ0EsMEJBQUE7QUFDRDs7QUFFQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQUNEOztBQUVBO0VBQ0Msc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxzQkFBQTtFQUNBLHFCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxxQ0FBQTtBQUNEIiwiZmlsZSI6InFyY29kZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXJjb2RlLWNvbnRhaW5lciB7XG5cdG1hcmdpbi10b3A6IC0xMjBweCAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ucXJjb2RlLWNhcmQge1xuXHR6LWluZGV4OiA5OTkgIWltcG9ydGFudDtcbn1cblxuLnFyY29kZS1zZWN0aW9uIHtcblx0cGFkZGluZy10b3A6IDJyZW0gIWltcG9ydGFudDtcbn1cblxuLnFyLWJ1dHRvbiB7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wYW5lbC1oZWFkZXItbWluIHtcblx0aGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLnFyLWNvZGUtdGFibGUgdHIgdGQgYSB7XG5cdGNvbG9yOiAjNWU3MmU0ICFpbXBvcnRhbnQ7XG59XG5cbi5xci1jb2RlLXRhYmxlIHRyIHRkIGE6aG92ZXIge1xuXHRjb2xvcjogIzMzMzMzMyAhaW1wb3J0YW50O1xuXHRjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnRhYmxlLXNob3BwaW5nIHRoIHtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRmb250LXdlaWdodDogNzAwO1xufVxuXG4udGFibGUtc2hvcHBpbmcgLnRkLW5hbWUgc21hbGwge1xuXHRjb2xvcjogIzQ0NCAhaW1wb3J0YW50O1xuXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG5cdGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4udGQtbmFtZSBhOmhvdmVyIHtcblx0Y29sb3I6ICM0NDQgIWltcG9ydGFudDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLWljb24ge1xuXHRwYWRkaW5nOiAwLjYyNXJlbSAwLjgyNXJlbSAhaW1wb3J0YW50O1xufSJdfQ== */"] });
    return QRCodesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QRCodesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-qrcodes",
                templateUrl: "qrcodes.component.html",
                styleUrls: ["qrcodes.component.scss"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "O1WI":
/*!**********************************!*\
  !*** ./src/shared/userHelper.ts ***!
  \**********************************/
/*! exports provided: storeUser, getStoredUser, clearUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeUser", function() { return storeUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoredUser", function() { return getStoredUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearUser", function() { return clearUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

function storeUser(user) {
    if (user.attributes) {
        user = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: user.id }, user.attributes);
    }
    else {
        user = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, user);
    }
    localStorage.setItem('userId', user.id);
    localStorage.setItem('firstName', user.firstName || "");
    localStorage.setItem('lastName', user.lastName || "");
    localStorage.setItem('userId', user.id || "");
    localStorage.setItem('isAgent', user.isagentyn || "");
    localStorage.setItem('sessionToken', user.sessionToken || "");
    localStorage.setItem('username', user.accountemail || "");
    localStorage.setItem('mainPhone', user.mainPhone || "");
    localStorage.setItem('mobilePhone', user.mobilePhone || "");
    localStorage.setItem('company', user.company || "");
    localStorage.setItem('website', user.website || "");
    localStorage.setItem('address1', user.address1 || "");
    localStorage.setItem('address2', user.address2 || "");
    localStorage.setItem('city', user.city || "");
    localStorage.setItem('state', user.state || "");
    localStorage.setItem('zip', user.zip || "");
    localStorage.setItem('facebook', user.facebook || "");
    localStorage.setItem('linkedIn', user.linkedIn || "");
    localStorage.setItem('aboutMe', user.aboutMe || "");
}
function getStoredUser() {
    return {
        userId: localStorage.getItem('userId'),
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName'),
        isAgent: localStorage.getItem('isAgent'),
        sessionToken: localStorage.getItem('sessionToken'),
        username: localStorage.getItem('username'),
        mainPhone: localStorage.getItem('mainPhone'),
        mobilePhone: localStorage.getItem('mobilePhone'),
        company: localStorage.getItem('company'),
        website: localStorage.getItem('website'),
        address1: localStorage.getItem('address1'),
        address2: localStorage.getItem('address2'),
        city: localStorage.getItem('city'),
        state: localStorage.getItem('state'),
        zip: localStorage.getItem('zip'),
        facebook: localStorage.getItem('facebook'),
        linkedIn: localStorage.getItem('linkedIn'),
        aboutMe: localStorage.getItem('aboutMe')
    };
}
function clearUser() {
    localStorage.clear();
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! headroom.js */ "e0Yc");
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");







function AppComponent_app_navbar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var headroom = new headroom_js__WEBPACK_IMPORTED_MODULE_1___default.a(document.querySelector("#navbar-main"), {
            offset: 300,
            tolerance: {
                up: 30,
                down: 30
            },
        });
        headroom.init();
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_navbar_0_Template, 1, 0, "app-navbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url != "/signup" && ctx.router.url != "/login");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]], styles: [".auth-container[_ngcontent-%COMP%] {\n  padding-top: 5vh !important;\n}\n\n.overlap-card[_ngcontent-%COMP%] {\n  margin-top: -120px !important;\n  z-index: 99 !important;\n}\n\n.header-4[_ngcontent-%COMP%]   .video-text[_ngcontent-%COMP%] {\n  font-size: 4em !important;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  margin-top: 50px !important;\n}\n\n.header-4[_ngcontent-%COMP%]   .header-video[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  opacity: 0.8 !important;\n}\n\na.auth-form-link[_ngcontent-%COMP%] {\n  color: #5e72e4 !important;\n}\n\na.auth-form-link[_ngcontent-%COMP%]:hover {\n  color: #444 !important;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem !important;\n  background-color: #f5365c !important;\n  border-color: #f5365c !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDJCQUFBO0FBQ0Q7O0FBRUE7RUFDQyw2QkFBQTtFQUNBLHNCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx5QkFBQTtBQUNEOztBQUVBO0VBQ0MsMkJBQUE7QUFDRDs7QUFFQTtFQUNDLHVCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx5QkFBQTtBQUNEOztBQUVBO0VBQ0Msc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFDRDs7QUFFQTtFQUNDLGdDQUFBO0VBQ0Esb0NBQUE7RUFDRyxnQ0FBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtY29udGFpbmVyIHtcblx0cGFkZGluZy10b3A6IDV2aCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxhcC1jYXJkIHtcblx0bWFyZ2luLXRvcDogLTEyMHB4ICFpbXBvcnRhbnQ7XG5cdHotaW5kZXg6IDk5ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItNCAudmlkZW8tdGV4dCB7XG5cdGZvbnQtc2l6ZTogNGVtICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLWNhcmQge1xuXHRtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItNCAuaGVhZGVyLXZpZGVvIC5vdmVybGF5IHtcblx0b3BhY2l0eTogMC44ICFpbXBvcnRhbnQ7XG59XG5cbmEuYXV0aC1mb3JtLWxpbmsge1xuXHRjb2xvcjogIzVlNzJlNCAhaW1wb3J0YW50O1xufVxuXG5hLmF1dGgtZm9ybS1saW5rOmhvdmVyIHtcblx0Y29sb3I6ICM0NDQgIWltcG9ydGFudDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuXHRwYWRkaW5nOiAuNzVyZW0gMXJlbSAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjUzNjVjICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjUzNjVjICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Uosm":
/*!********************************************************!*\
  !*** ./src/app/pages/loginpage/loginpage.component.ts ***!
  \********************************************************/
/*! exports provided: LoginpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginpageComponent", function() { return LoginpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse */ "v0iw");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _keys_parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../keys/parse */ "DuhC");
/* harmony import */ var _keys_parse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_keys_parse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_userHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/userHelper */ "O1WI");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");












function LoginpageComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login Failed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMsg, " ");
} }
function LoginpageComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginpageComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Signing In... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var LoginpageComponent = /** @class */ (function () {
    function LoginpageComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        parse__WEBPACK_IMPORTED_MODULE_3__["initialize"](_keys_parse__WEBPACK_IMPORTED_MODULE_4__["appId"], _keys_parse__WEBPACK_IMPORTED_MODULE_4__["javascript"]);
        parse__WEBPACK_IMPORTED_MODULE_3__["serverURL"] = _keys_parse__WEBPACK_IMPORTED_MODULE_4__["serverURL"];
    }
    LoginpageComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.loginError = false;
        this.user = Object(_shared_userHelper__WEBPACK_IMPORTED_MODULE_6__["getStoredUser"])();
        if (this.user.sessionToken) {
            this.router.navigate(['/qrcodes']);
        }
        this.userLogin = this.formBuilder.group({
            userName: '',
            password: '',
        });
    };
    LoginpageComponent.prototype.login = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var login, password;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loginError = false;
                        this.loading = true;
                        login = this.userLogin.value.userName;
                        password = this.userLogin.value.password;
                        return [4 /*yield*/, parse__WEBPACK_IMPORTED_MODULE_3__["User"].logIn(login, password).then(function (user) {
                                Object(_shared_userHelper__WEBPACK_IMPORTED_MODULE_6__["storeUser"])(user);
                                _this.presentLoginSuccess();
                                return user;
                            }).catch(function (error) {
                                _this.errorMsg = error;
                                _this.loginError = true;
                                _this.loading = false;
                                return error;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginpageComponent.prototype.presentLoginSuccess = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: "Success!",
            timer: 1500,
            showConfirmButton: false,
            icon: "success"
        });
        setTimeout(function () {
            _this.loading = false;
            _this.router.navigate(['/qrcodes']);
        }, 1500);
    };
    LoginpageComponent.prototype.presentResetPasswordPrompt = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: "Reset Password",
            text: "Enter the account email to receive a password reset link",
            html: '<div class="form-group">' +
                '<input id="input-field" type="text" class="form-control" placeholder="Account Email" />' +
                "</div>",
            showCancelButton: true,
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger",
            },
            buttonsStyling: false
        }).then(function (result) {
            if (result.isDismissed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.close();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    icon: "success",
                    html: "Password reset link sent to: <strong>" +
                        document.getElementById("input-field")
                            .value +
                        "</strong>",
                    customClass: {
                        confirmButton: "btn btn-success",
                    },
                    buttonsStyling: false
                });
            }
        });
    };
    LoginpageComponent.prototype.signUp = function () {
        this.router.navigate(['/signup']);
    };
    LoginpageComponent.ɵfac = function LoginpageComponent_Factory(t) { return new (t || LoginpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
    LoginpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginpageComponent, selectors: [["app-login"]], decls: 40, vars: 4, consts: [[1, "header-4", "skew-separator"], [1, "header-wrapper"], [1, "page-header", "header-video"], [1, "overlay"], [1, "auth-container", "container", "text-center"], [1, "row"], [1, "col-lg-10", "mx-auto"], [1, "video-text"], [1, "auth-card", "col-lg-8", "col-md-8", "mx-auto"], [1, "card", "bg-secondary", "shadow", "border-0"], [1, "card-body", "px-lg-5", "py-lg-5"], [1, "text-center", "text-muted", "mb-4"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["role", "form", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], [1, "input-group", "input-group-alternative"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa-solid", "fa-user"], ["formControlName", "userName", "placeholder", "Email", "type", "email", 1, "form-control"], [1, "form-group"], [1, "fa-solid", "fa-lock"], ["formControlName", "password", "placeholder", "Password", "type", "password", 1, "form-control"], [1, "custom-control", "custom-control-alternative", "custom-checkbox"], ["id", " customCheckLogin2", "type", "checkbox", 1, "custom-control-input"], ["for", " customCheckLogin2", 1, "custom-control-label"], [1, "text-default", "opacity-5"], [1, "text-center"], ["class", "btn btn-primary my-4", "type", "submit", 4, "ngIf"], ["class", "btn btn-primary my-4", "type", "submit", "disabled", "loading", 4, "ngIf"], [1, "text-center", "text-muted", "mb-2"], [1, "auth-form-link", 3, "click"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "submit", 1, "btn", "btn-primary", "my-4"], ["type", "submit", "disabled", "loading", 1, "btn", "btn-primary", "my-4"]], template: function LoginpageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "QR Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LoginpageComponent_div_15_Template, 4, 1, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginpageComponent_Template_form_ngSubmit_16_listener() { return ctx.login(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Remember me ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, LoginpageComponent_button_35_Template, 2, 0, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, LoginpageComponent_button_36_Template, 2, 0, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginpageComponent_Template_a_click_38_listener() { return ctx.signUp(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Sign Up");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginError);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userLogin);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".auth-container[_ngcontent-%COMP%] {\n  padding-top: 5vh !important;\n}\n\n.overlap-card[_ngcontent-%COMP%] {\n  margin-top: -120px !important;\n  z-index: 99 !important;\n}\n\n.header-4[_ngcontent-%COMP%]   .video-text[_ngcontent-%COMP%] {\n  font-size: 4em !important;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  margin-top: 50px !important;\n}\n\n.header-4[_ngcontent-%COMP%]   .header-video[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  opacity: 0.8 !important;\n}\n\na.auth-form-link[_ngcontent-%COMP%] {\n  color: #5e72e4 !important;\n}\n\na.auth-form-link[_ngcontent-%COMP%]:hover {\n  color: #444 !important;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem !important;\n  background-color: #f5365c !important;\n  border-color: #f5365c !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDJCQUFBO0FBQ0Q7O0FBRUE7RUFDQyw2QkFBQTtFQUNBLHNCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx5QkFBQTtBQUNEOztBQUVBO0VBQ0MsMkJBQUE7QUFDRDs7QUFFQTtFQUNDLHVCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx5QkFBQTtBQUNEOztBQUVBO0VBQ0Msc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFDRDs7QUFFQTtFQUNDLGdDQUFBO0VBQ0Esb0NBQUE7RUFDRyxnQ0FBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtY29udGFpbmVyIHtcblx0cGFkZGluZy10b3A6IDV2aCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxhcC1jYXJkIHtcblx0bWFyZ2luLXRvcDogLTEyMHB4ICFpbXBvcnRhbnQ7XG5cdHotaW5kZXg6IDk5ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItNCAudmlkZW8tdGV4dCB7XG5cdGZvbnQtc2l6ZTogNGVtICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLWNhcmQge1xuXHRtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItNCAuaGVhZGVyLXZpZGVvIC5vdmVybGF5IHtcblx0b3BhY2l0eTogMC44ICFpbXBvcnRhbnQ7XG59XG5cbmEuYXV0aC1mb3JtLWxpbmsge1xuXHRjb2xvcjogIzVlNzJlNCAhaW1wb3J0YW50O1xufVxuXG5hLmF1dGgtZm9ybS1saW5rOmhvdmVyIHtcblx0Y29sb3I6ICM0NDQgIWltcG9ydGFudDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuXHRwYWRkaW5nOiAuNzVyZW0gMXJlbSAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjUzNjVjICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjUzNjVjICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
    return LoginpageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-login",
                templateUrl: "./loginpage.component.html",
                styleUrls: [
                    "../../app.component.scss"
                ]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "W+bR":
/*!****************************************************************!*\
  !*** ./src/app/pages/qrcodedetails/qrcodedetails.component.ts ***!
  \****************************************************************/
/*! exports provided: QRCodeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCodeDetailsComponent", function() { return QRCodeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse */ "v0iw");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _keys_parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../keys/parse */ "DuhC");
/* harmony import */ var _keys_parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_keys_parse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_shared_userHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/userHelper */ "O1WI");
/* harmony import */ var src_shared_qrCodeHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/qrCodeHelper */ "ZV+A");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");













function QRCodeDetailsComponent_div_22_button_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save Changes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.saveDisabled);
} }
function QRCodeDetailsComponent_div_22_button_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Saving... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QRCodeDetailsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function QRCodeDetailsComponent_div_22_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.editQRCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function QRCodeDetailsComponent_div_22_Template_input_keyup_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.validateField("tagTitle", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Subtitle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function QRCodeDetailsComponent_div_22_Template_input_keyup_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.validateField("tagSubTitle", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Company ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function QRCodeDetailsComponent_div_22_Template_input_keyup_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.evaluateEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " URL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Address Line 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Address Line 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " City ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function QRCodeDetailsComponent_div_22_Template_input_keyup_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.validateField("tagCity", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " State ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function QRCodeDetailsComponent_div_22_Template_input_keyup_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.validateField("tagState", 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Zip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "textarea", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, QRCodeDetailsComponent_div_22_button_87_Template, 2, 1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, QRCodeDetailsComponent_div_22_button_88_Template, 3, 0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QRCodeDetailsComponent_div_22_Template_a_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.cancelChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.qrCode.tagTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.qrCodeEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.saving);
} }
var QRCodeDetailsComponent = /** @class */ (function () {
    function QRCodeDetailsComponent(formBuilder, router, currencyPipe) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.currencyPipe = currencyPipe;
        this.images = [];
        this.slideOpts = {
            spaceBetween: 10,
            slidesPerView: 'auto',
            centeredSlides: true,
            initialSlide: 0,
            speed: 500
        };
        this.qrCodeEdit = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tagTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            tagSubTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            tagCompany: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            tagPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            tagUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            tagAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            tagAddress2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            tagCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            tagState: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            tagZip: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            tagInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.regexPattern = "/^[a-zA-Z0-9\(\);:&\-' ]*[a-zA-Z0-9\(\);:&\-']*$/";
        parse__WEBPACK_IMPORTED_MODULE_2__["initialize"](_keys_parse__WEBPACK_IMPORTED_MODULE_3__["appId"], _keys_parse__WEBPACK_IMPORTED_MODULE_3__["javascript"]);
        parse__WEBPACK_IMPORTED_MODULE_2__["serverURL"] = _keys_parse__WEBPACK_IMPORTED_MODULE_3__["serverURL"];
    }
    QRCodeDetailsComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.username = Object(src_shared_userHelper__WEBPACK_IMPORTED_MODULE_5__["getStoredUser"])().username;
        this.getQRCodeDetails();
    };
    QRCodeDetailsComponent.prototype.getQRCodeDetails = function () {
        this.qrCode = JSON.parse(localStorage.getItem("selectedQRCode"));
        console.log("qrCode:", this.qrCode);
        this.qrCodeId = this.qrCode.id;
        this.buildEditForm();
    };
    QRCodeDetailsComponent.prototype.buildEditForm = function () {
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
        this.qrCode.imageUrl = "https://photos.homecards.com/rebeacons/Tag-" + this.qrCode.tagPhotoRef + "-1.jpg";
        this.loading = false;
    };
    QRCodeDetailsComponent.prototype.validateField = function (fieldName, minChars) {
        var fieldId = document.getElementById(fieldName);
        var validApplied;
        var invalidApplied;
        if (fieldId.classList.contains("field-valid")) {
            validApplied = true;
        }
        else if (!fieldId.classList.contains("field-valid")) {
            validApplied = false;
        }
        if (fieldId.classList.contains("field-invalid")) {
            invalidApplied = true;
        }
        else if (!fieldId.classList.contains("field-invalid")) {
            invalidApplied = false;
        }
        var value = this.qrCodeEdit.value[fieldName];
        if (value.length < minChars) {
            this.fieldValid = false;
            this.saveDisabled = true;
            if (fieldName === "tagTitle") {
                this.tagTitleInvalid = true;
            }
            this.errorMsg = fieldName + " must have at least " + minChars + " character(s)";
            if (validApplied) {
                fieldId.classList.remove("field-valid");
            }
            if (!invalidApplied) {
                fieldId.classList.add("field-invalid");
            }
        }
        else {
            this.fieldValid = true;
            this.saveDisabled = false;
            if (invalidApplied) {
                fieldId.classList.remove("field-invalid");
            }
            if (!validApplied) {
                fieldId.classList.add("field-valid");
            }
        }
    };
    QRCodeDetailsComponent.prototype.editQRCode = function () {
        var _this = this;
        var QRCodes = parse__WEBPACK_IMPORTED_MODULE_2__["Object"].extend('Tags');
        var query = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](QRCodes);
        query.get(this.qrCodeId).then(function (qrCode) {
            qrCode.set('tagTitle', _this.qrCodeEdit.value.tagTitle);
            qrCode.set('tagSubTitle', _this.qrCodeEdit.value.tagSubTitle);
            qrCode.set('tagCompany', _this.qrCodeEdit.value.tagCompany);
            qrCode.set('tagPrice', _this.qrCodeEdit.value.tagPrice);
            qrCode.set('tagUrl', _this.qrCodeEdit.value.tagUrl);
            qrCode.set('tagAddress', _this.qrCodeEdit.value.tagAddress);
            qrCode.set('tagAddress2', _this.qrCodeEdit.value.tagAddress2);
            qrCode.set('tagCity', _this.qrCodeEdit.value.tagCity);
            qrCode.set('tagState', _this.qrCodeEdit.value.tagState);
            qrCode.set('tagZip', _this.qrCodeEdit.value.tagZip);
            qrCode.set('tagInfo', _this.qrCodeEdit.value.tagInfo);
            qrCode.save().then(function (response) {
                _this.presentQRCodeSuccess();
                return response;
            }).catch(function (error) {
                _this.presentQRCodeError(error);
            });
        });
    };
    QRCodeDetailsComponent.prototype.presentQRCodeSuccess = function () {
        this.saving = false;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: "Success!",
            timer: 1500,
            showConfirmButton: false,
            icon: "success"
        });
    };
    QRCodeDetailsComponent.prototype.presentQRCodeError = function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: "Save Failed",
            buttonsStyling: false,
            customClass: {
                confirmButton: "btn btn-danger",
            },
            icon: "error",
            html: "<b>" + error + "</b>"
        });
        this.loading = false;
    };
    QRCodeDetailsComponent.prototype.routeToEditQRCode = function () {
        Object(src_shared_qrCodeHelper__WEBPACK_IMPORTED_MODULE_6__["storeQRCode"])(this.qrCode);
        localStorage.setItem('tagId', this.qrCode.id);
        localStorage.setItem('method', 'edit');
        this.router.navigate(['/qrcodes/create']);
    };
    QRCodeDetailsComponent.prototype.routeToQRCodes = function () {
        this.router.navigate(['/qrcodes']);
    };
    QRCodeDetailsComponent.prototype.routeToAccount = function () {
        this.router.navigate(['/account']);
    };
    QRCodeDetailsComponent.ɵfac = function QRCodeDetailsComponent_Factory(t) { return new (t || QRCodeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"])); };
    QRCodeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QRCodeDetailsComponent, selectors: [["app-qrcodedetails"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]
            ])], decls: 23, vars: 2, consts: [[1, "wrapper"], [1, "section-shaped", "my-0", "skew-separator", "skew-mini"], [1, "page-header", "page-header-small", "header-filter"], [1, "page-header-image", 2, "background-image", "url('../../../assets/img/pages/photo-15.jpg')"], [1, "container"], [1, "header-body", "text-center", "mb-7"], [1, "row", "justify-content-center"], [1, "col-xl-5", "col-lg-6", "col-md-8", "px-5"], [1, "text-white"], [1, "bg-secondary"], [1, "container", "qrcode-card", "bg-white", "card"], [1, "row"], [1, "col-md-12", "qrcode-container"], [1, "section", "qrcode-section"], [1, "col-md-4"], [1, "section"], [1, "text-center", "qr-code-image"], [3, "src"], [1, "col-md-8", "ml-auto"], [1, "tab-content"], [4, "ngIf"], [1, "line-primary"], ["role", "form", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "col-md-3", "align-self-center"], ["for", "#tagTitle", 1, "labels"], [1, "col-md-9", "align-self-center"], [1, "form-group"], ["id", "tagTitle", "type", "text", "required", "", "formControlName", "tagTitle", 1, "form-control", 3, "keyup"], ["for", "#tagSubTitle", 1, "labels"], ["id", "tagSubTitle", "name", "tagSubTitle", "required", "", "type", "text", "formControlName", "tagSubTitle", 1, "form-control", 3, "keyup"], ["for", "#tagCompany", 1, "labels"], ["id", "tagCompany", "name", "tagCompany", "required", "", "type", "tagCompany", "formControlName", "tagCompany", 1, "form-control", 3, "keyup"], ["for", "#tagPrice", 1, "labels"], ["id", "tagPrice", "name", "tagPrice", "required", "", "pattern", "^[0-9_]*$", "formControlName", "tagPrice", 1, "form-control"], ["for", "#tagUrl", 1, "labels"], ["id", "tagUrl", "name", "tagUrl", "required", "", "type", "url", "formControlName", "tagUrl", 1, "form-control"], ["for", "#tagAddress", 1, "labels"], ["id", "tagAddress", "name", "tagAddress", "required", "", "type", "text", "formControlName", "tagAddress", 1, "form-control"], ["for", "#tagAddress2", 1, "labels"], ["id", "tagAddress2", "name", "tagAddress2", "required", "", "type", "text", "formControlName", "tagAddress2", 1, "form-control"], ["for", "#tagCity", 1, "labels"], ["id", "tagCity", "name", "tagCity", "required", "", "type", "text", "formControlName", "tagCity", 1, "form-control", 3, "keyup"], ["for", "#tagState", 1, "labels"], ["id", "tagState", "name", "tagState", "required", "", "type", "text", "formControlName", "tagState", "minlength", "2", "maxlength", "2", "placeholder", "CA", 1, "form-control", 3, "keyup"], ["for", "#tagZip", 1, "labels"], ["id", "tagZip", "name", "tagZip", "required", "", "type", "text", "formControlName", "tagZip", 1, "form-control"], ["for", "#tagInfo", 1, "labels"], ["id", "tagInfo", "rows", "8", "name", "tagInfo", "required", "", "formControlName", "tagInfo", 1, "form-control"], [1, "row", "mt-5"], [1, "button-group", "col-md-12"], ["class", "btn btn-success", "type", "submit", 3, "disabled", 4, "ngIf"], ["class", "btn btn-success saving-button", "type", "button", "disabled", "", 4, "ngIf"], [1, "btn", "btn-danger", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", "disabled", "", 1, "btn", "btn-success", "saving-button"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function QRCodeDetailsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "QR Code Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, QRCodeDetailsComponent_div_22_Template, 91, 4, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.qrCode.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.qrCodeId);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"]], styles: [".qrcode-container[_ngcontent-%COMP%] {\n  margin-top: -120px !important;\n  background-color: #fff;\n}\n\n.qrcode-card[_ngcontent-%COMP%] {\n  z-index: 999 !important;\n}\n\n.qrcode-section[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 0rem !important;\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\n.btn-danger[_ngcontent-%COMP%]:hover {\n  cursor: pointer !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #000 !important;\n  font-weight: 500 !important;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border: 2px solid #5e72e4 !important;\n}\n\n.field-valid[_ngcontent-%COMP%] {\n  border: 1px solid #2dce89 !important;\n}\n\n.field-invalid[_ngcontent-%COMP%] {\n  border: 2px solid #f5365c !important;\n}\n\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.saving-button[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n\n.saving-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 7px !important;\n}\n\n.qr-code-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3FyY29kZWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyw2QkFBQTtFQUNBLHNCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx1QkFBQTtBQUNEOztBQUVBO0VBQ0MsYUFBQTtFQUNBLDRCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxzQkFBQTtBQUNEOztBQUVBO0VBQ0MsMEJBQUE7QUFDRDs7QUFFQTtFQUNDLHNCQUFBO0VBQ0EsMkJBQUE7QUFDRDs7QUFFQTtFQUNDLG9DQUFBO0FBQ0Q7O0FBRUE7RUFDQyxvQ0FBQTtBQUNEOztBQUVBO0VBQ0Msb0NBQUE7QUFDRDs7QUFFQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx3QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7QUFDRDs7QUFFQTtFQUNDLDRCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxzQkFBQTtBQUNEIiwiZmlsZSI6InFyY29kZWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXJjb2RlLWNvbnRhaW5lciB7XG5cdG1hcmdpbi10b3A6IC0xMjBweCAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ucXJjb2RlLWNhcmQge1xuXHR6LWluZGV4OiA5OTkgIWltcG9ydGFudDtcbn1cblxuLnFyY29kZS1zZWN0aW9uIHtcblx0ZGlzcGxheTogZmxleDtcblx0cGFkZGluZy10b3A6IDByZW0gIWltcG9ydGFudDtcbn1cblxuLmJ0bi1kYW5nZXIge1xuXHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWRhbmdlcjpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1jb250cm9sIHtcblx0Y29sb3I6ICMwMDAgIWltcG9ydGFudDtcblx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcblx0Ym9yZGVyOiAycHggc29saWQgIzVlNzJlNCAhaW1wb3J0YW50O1xufVxuXG4uZmllbGQtdmFsaWQge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMmRjZTg5ICFpbXBvcnRhbnQ7XG59XG5cbi5maWVsZC1pbnZhbGlkIHtcblx0Ym9yZGVyOiAycHggc29saWQgI2Y1MzY1YyAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWdyb3VwIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2F2aW5nLWJ1dHRvbiB7XG5cdGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcblx0YWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uc2F2aW5nLWJ1dHRvbiBzcGFuIHtcblx0bWFyZ2luLXJpZ2h0OiA3cHggIWltcG9ydGFudDtcbn1cblxuLnFyLWNvZGUtaW1hZ2UgaW1nIHtcblx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
    return QRCodeDetailsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QRCodeDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-qrcodedetails',
                templateUrl: 'qrcodedetails.component.html',
                styleUrls: ['qrcodedetails.component.scss'],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]
                ]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/alert */ "psEu");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/registerpage/registerpage.component */ "vqka");
/* harmony import */ var _pages_accountsettings_accountsettings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/accountsettings/accountsettings.component */ "Fv2P");
/* harmony import */ var _pages_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/loginpage/loginpage.component */ "Uosm");
/* harmony import */ var _pages_productpage_productpage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/productpage/productpage.component */ "niaQ");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_picture_upload_picture_upload_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/picture-upload/picture-upload.component */ "9uEI");
/* harmony import */ var _pages_qrcodes_qrcodes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/qrcodes/qrcodes.component */ "LxSD");
/* harmony import */ var _pages_qrcodedetails_qrcodedetails_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/qrcodedetails/qrcodedetails.component */ "W+bR");
 // this is needed!


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], useValue: '/' }], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_13__["PopoverModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_9__["AlertModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(),
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
        _pages_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_16__["RegisterpageComponent"],
        _pages_accountsettings_accountsettings_component__WEBPACK_IMPORTED_MODULE_17__["AccountsettingsComponent"],
        _pages_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_18__["LoginpageComponent"],
        _pages_qrcodes_qrcodes_component__WEBPACK_IMPORTED_MODULE_23__["QRCodesComponent"],
        _pages_qrcodedetails_qrcodedetails_component__WEBPACK_IMPORTED_MODULE_24__["QRCodeDetailsComponent"],
        _pages_productpage_productpage_component__WEBPACK_IMPORTED_MODULE_19__["ProductpageComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
        _components_picture_upload_picture_upload_component__WEBPACK_IMPORTED_MODULE_22__["PictureUploadComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_13__["PopoverModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_9__["AlertModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                    _pages_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_16__["RegisterpageComponent"],
                    _pages_accountsettings_accountsettings_component__WEBPACK_IMPORTED_MODULE_17__["AccountsettingsComponent"],
                    _pages_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_18__["LoginpageComponent"],
                    _pages_qrcodes_qrcodes_component__WEBPACK_IMPORTED_MODULE_23__["QRCodesComponent"],
                    _pages_qrcodedetails_qrcodedetails_component__WEBPACK_IMPORTED_MODULE_24__["QRCodeDetailsComponent"],
                    _pages_productpage_productpage_component__WEBPACK_IMPORTED_MODULE_19__["ProductpageComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                    _components_picture_upload_picture_upload_component__WEBPACK_IMPORTED_MODULE_22__["PictureUploadComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                    ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_13__["PopoverModule"].forRoot(),
                    ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(),
                    ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_9__["AlertModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(),
                ],
                providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], useValue: '/' }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZV+A":
/*!************************************!*\
  !*** ./src/shared/qrCodeHelper.ts ***!
  \************************************/
/*! exports provided: storeQRCode, getStoredQRCode, clearQRCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeQRCode", function() { return storeQRCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoredQRCode", function() { return getStoredQRCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearQRCode", function() { return clearQRCode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

function storeQRCode(qrCode) {
    if (qrCode.attributes) {
        qrCode = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: qrCode.id }, qrCode.attributes);
    }
    else {
        qrCode = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, qrCode);
    }
    localStorage.setItem('id', qrCode.id);
}
function getStoredQRCode() {
    return {
        id: localStorage.getItem('id')
    };
}
function clearQRCode() {
    localStorage.clear();
}


/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "dkLf":
/*!************************************!*\
  !*** ./src/shared/parseResults.ts ***!
  \************************************/
/*! exports provided: parseResults, parseResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseResults", function() { return parseResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseResult", function() { return parseResult; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

function parseResults(results) {
    return results.map(function (result) { return parseResult(result); });
}
function parseResult(result) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: result.id }, result.attributes);
}


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_shared_userHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/userHelper */ "O1WI");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);






var _c0 = function () { return ["/index"]; };
var _c1 = function () { return ["/qrcodes"]; };
var _c2 = function () { return ["/qrcodes/create"]; };
var _c3 = function () { return ["/account"]; };
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        var _this = this;
        this.router = router;
        this.isCollapsed = true;
        router.events.subscribe(function (val) {
            _this.isCollapsed = true;
        });
    }
    NavbarComponent.prototype.mobileView = function () {
        if (window.innerWidth < 992) {
            return true;
        }
        return false;
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = Object(src_shared_userHelper__WEBPACK_IMPORTED_MODULE_2__["getStoredUser"])();
        var sessionToken = localStorage.getItem("sessionToken");
        if (!sessionToken) {
            this.router.navigate(['/login']);
        }
        this.displayName = this.user.firstName;
    };
    NavbarComponent.prototype.signOut = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Sign Out",
            text: "Are you sure you'd like to sign out?",
            showCancelButton: true,
            confirmButtonText: "Yes",
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger",
            },
            buttonsStyling: false
        }).then(function (result) {
            if (result.isDismissed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.close();
            }
            else {
                localStorage.clear();
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.close();
                _this.router.navigate(['/login']);
            }
        }).catch(function (error) {
            console.error(error);
        });
    };
    NavbarComponent.prototype.goHome = function () {
        this.router.navigate(['/qrcodes']);
    };
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 41, vars: 13, consts: [["id", "navbar-main", 1, "navbar", "navbar-main", "navbar-expand-lg", "navbar-dark", "headroom"], [1, "container"], [1, "navbar-brand", "icon-logo", "mr-lg-5", 3, "routerLink"], [1, "fa-solid", "fa-qrcode"], ["aria-controls", "navbar_global", "aria-label", "Toggle navigation", "id", "navbar_global", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbar_global", 1, "navbar-collapse"], [1, "navbar-collapse-header"], [1, "row"], [1, "col-6", "collapse-brand"], [3, "routerLink"], ["src", "assets/img/brand/blue.png"], [1, "col-6", "collapse-close"], [1, "navbar-nav", "navbar-nav-hover", "align-items-lg-center", "ml-lg-auto"], [1, "nav-item", "dropdown"], ["data-toggle", "dropdown", "href", "#", "role", "button", 1, "nav-link"], [1, "fa-solid", "fa-user", "d-lg-none"], [1, "nav-link-inner--text"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], [1, "fa-solid", "fa-id-card"], [1, "fa-solid", "fa-arrow-right-from-bracket"], [1, "dropdown-item", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_13_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "QR Codes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "My QR Codes ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Create QR Code ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Account ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_38_listener() { return ctx.signOut(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Sign Out ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi, ", ctx.displayName, "!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return NavbarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-navbar",
                templateUrl: "./navbar.component.html",
                styleUrls: ["./navbar.component.scss"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "niaQ":
/*!************************************************************!*\
  !*** ./src/app/pages/productpage/productpage.component.ts ***!
  \************************************************************/
/*! exports provided: ProductpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductpageComponent", function() { return ProductpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @glidejs/glide */ "A0bn");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! choices.js */ "Btj/");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






var ProductpageComponent = /** @class */ (function () {
    function ProductpageComponent() {
    }
    ProductpageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("product-page");
        new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__["default"]('.testimonial-glide', {
            type: 'carousel',
            startAt: 0,
            focusAt: 2,
            perTouch: 1,
            perView: 4,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }).mount();
        new choices_js__WEBPACK_IMPORTED_MODULE_2___default.a('#choices-single-default', {
            searchEnabled: false,
        });
    };
    ProductpageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("product-page");
    };
    ProductpageComponent.ɵfac = function ProductpageComponent_Factory(t) { return new (t || ProductpageComponent)(); };
    ProductpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductpageComponent, selectors: [["app-productpage"]], decls: 236, vars: 1, consts: [[1, "wrapper"], [1, "page-header", "header-filter", "page-header-small", "skew-separator", "skew-mini"], [1, "page-header-image", 2, "background-image", "url('assets/img/pages/boxed-water.jpg')"], [1, "container"], [1, "row"], [1, "col-lg-7", "col-md-7", "mr-auto", "text-left"], [1, "title", "text-white"], [1, "category", "text-white", "opacity-8"], [1, "separator", "separator-bottom", "separator-skew"], ["xmlns", "http://www.w3.org/2000/svg", "preserveaspectratio", "none", "version", "1.1", "viewbox", "0 0 2560 100", "x", "0", "y", "0"], ["points", "2560 0 2560 100 0 100"], [1, "section", "section-item"], [1, "col-lg-6", "col-md-12"], [3, "showIndicators"], ["alt", "First slide", "src", "assets/img/pages/shirt.png", 1, "d-block"], ["alt", "Second slide", "src", "assets/img/pages/shorts.png", 1, "d-block"], ["alt", "Third slide", "src", "assets/img/pages/tshirt.png", 1, "d-block"], [1, "col-lg-6", "col-md-12", "mx-auto"], [1, "title"], [1, "stats"], [1, "stars", "text-warning"], [1, "fas", "fa-star"], [1, "far", "fa-star"], [1, "d-inline"], [1, "main-price"], [1, "category"], [1, "description"], [1, "row", "pick-size"], [1, "col-lg-4", "col-md-4"], [1, "input-group"], [1, "input-group-btn"], ["id", "down", 1, "btn", "btn-outline-warning", "btn-round"], [1, "ni", "ni-fat-delete"], ["id", "myNumber", "type", "text", "value", "1", 1, "form-control", "input-number"], ["id", "up", 1, "btn", "btn-outline-warning", "btn-round"], [1, "ni", "ni-fat-add"], [1, "col-lg-4", "col-md-4", "col-sm-6"], ["data-trigger", "", "id", "choices-single-default", "name", "choices-single-default", 1, "form-control"], ["disabled", "disabled", "selected", "selected", "value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["data-trigger", "", "id", "choices-single-default", "name", "choices-single-default", 1, "form-control", "form-control-sm"], ["disabled", "disabled", "selected", "selected"], ["value", "0"], ["value", "1"], [1, "row", "justify-content-start"], [1, "btn", "btn-warning", "ml-3"], [1, "ni", "ni-cart"], [1, "section"], [1, "testimonials-3"], [1, "container-fluid"], [1, "col-md-6", "mx-auto", "text-center"], [1, "display-3"], [1, "col-lg-3", "col-md-8", "col-10", "positioned"], [1, "lead"], ["href", "javascript:;", 1, "btn", "btn-primary", "mt-5"], [1, "col-md-12", "col-md-6"], [1, "testimonial-glide"], ["data-glide-el", "track", 1, "glide__track"], [1, "glide__slides"], [1, "glide__slide"], [1, "info", "text-left"], [1, "author"], ["alt", "...", "src", "assets/img/faces/team-1.jpg", 1, "avatar", "img-raised"], ["alt", "...", "src", "assets/img/faces/team-2.jpg", 1, "avatar", "img-raised"], ["alt", "...", "src", "assets/img/faces/team-3.jpg", 1, "avatar", "img-raised"], ["alt", "...", "src", "assets/img/faces/team-4.jpg", 1, "avatar", "img-raised"], ["alt", "...", "src", "assets/img/faces/team-5.jpg", 1, "avatar", "img-raised"], ["data-glide-el", "controls", 1, "glide__arrows"], ["aria-label", "Previous", "data-glide-dir", "<", 1, "glide__arrow", "glide__arrow--left", "text-default"], [1, "ni", "ni-bold-left"], ["data-glide-dir", ">", "aria-label", "Next", 1, "glide__arrow", "glide__arrow--right", "text-default"], [1, "ni", "ni-bold-right"], [1, "section", "related-products", "bg-secondary", "skew-separator", "skew-top"], [1, "col-md-8"], [1, "col-lg-3", "col-md-6"], [1, "card", "card-product"], [1, "card-image"], ["href", "#"], ["src", "assets/img/pages/tshirt.png", 1, "img", "rounded"], [1, "card-body"], [1, "category", "text-warning"], [1, "card-title"], ["href", "javascript:;", 1, "card-link"], [1, "card-description", "opacity-8", "mt-2"], [1, "card-footer"], [1, "price-container"], [1, "price"], ["placement", "left", 1, "btn", "btn-simple", "btn-warning", "btn-icon-only", "btn-sm", "btn-round", "pull-right"], [1, "ni", "ni-favourite-28"], ["src", "assets/img/pages/shorts.png", 1, "img", "rounded"], ["src", "assets/img/pages/shirt.png", 1, "img", "rounded"], ["src", "assets/img/pages/jeans.png", 1, "img", "rounded"]], template: function ProductpageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Our products");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " This is the best way to find your favorite stuff ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "polygon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "carousel", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "slide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "slide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "slide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Givenchy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(76 customer reviews)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "$3,390");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h6", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Description");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Eres' daring 'Grigri Fortune' swimsuit has the fit and coverage of a bikini in a one-piece silhouette. This fuchsia style is crafted from the label's sculpting peau douce fabric and has flattering cutouts through the torso and back. Wear yours with mirrored sunglasses on vacation. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Quantity ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Select color ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "select", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Choose Color ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Black ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Gray ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " White ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Select size ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "select", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Choose size ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " XS ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " S ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " M ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " L ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " XL ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Add to Cart ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Join our world");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "See our customers opinion");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Meet Wingman, a robust suite of styled pages and components, powered by Bootstrap 4. The ideal starting point for product landing pages, stylish web-apps and complete company websites. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Contact us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "ul", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " \"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. A single rose can be my garden... a single friend, my world.\" ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Andrew Lino ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Artist is a term applied to a person who engages in an activity deemed to be an art. An artist also may be defined unofficially as \"a person who expresses him- or herself through a medium\". He is a descriptive term applied to a person who engages in an activity deemed to be an art.\" ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Michael Jenos ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " \"The simplest visual description uses ordinary words to convey what the writer sees. First he or she must look at the subject \u00E2\u0080\u0093 slowly, carefully, and repeatedly, if possible \u00E2\u0080\u0093 to identify the parts that make the whole\" ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Rose Arthur ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " \"Finding temporary housing for your dog should be as easy as renting an Airbnb. That's the idea behind Rover, which raised $65 million to expand its pet sitting and dog-walking businesses..Finding temporary housing for your dog should be as easy as renting an Airbnb.\" ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Lora Jimi ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " \"Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, late-stage financings and a few outsized early-stage rounds in tech and healthcare..enture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large.\" ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Mike Ranson ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "button", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "button", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "i", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h2", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "You may also like");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h6", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Trending");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h4", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Gucci ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Dolce & Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red textured-leather. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " \u20AC1,459 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "img", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h6", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Popular");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h4", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Balmain ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " Balmain's mid-rise skinny jeans are cut with stretch to ensure they retain their second-skin fit but move comfortably. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " \u20AC459 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "button", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "i", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "a", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "img", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h6", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Popular");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h4", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " Balenciaga ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Balenciaga's black textured-leather wallet is finished with the label's iconic 'Giant' studs. This is where you can... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " \u20AC559 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "button", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "i", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "a", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "img", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "h6", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Trending");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "h4", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "a", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " D & G ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " Dolce & Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red textured-leather. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " \u20AC 1,359 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "button", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "i", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showIndicators", true);
        } }, directives: [ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["SlideComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], encapsulation: 2 });
    return ProductpageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-productpage",
                templateUrl: "productpage.component.html"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _pages_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/registerpage/registerpage.component */ "vqka");
/* harmony import */ var _pages_accountsettings_accountsettings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/accountsettings/accountsettings.component */ "Fv2P");
/* harmony import */ var _pages_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/loginpage/loginpage.component */ "Uosm");
/* harmony import */ var _pages_productpage_productpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/productpage/productpage.component */ "niaQ");
/* harmony import */ var _pages_qrcodes_qrcodes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/qrcodes/qrcodes.component */ "LxSD");
/* harmony import */ var _pages_qrcodedetails_qrcodedetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/qrcodedetails/qrcodedetails.component */ "W+bR");










var routes = [
    { path: "", redirectTo: "qrcodes", pathMatch: "full" },
    { path: "login", component: _pages_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_4__["LoginpageComponent"] },
    { path: "signup", component: _pages_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_2__["RegisterpageComponent"] },
    { path: "qrcodes", component: _pages_qrcodes_qrcodes_component__WEBPACK_IMPORTED_MODULE_6__["QRCodesComponent"] },
    { path: "qrcodes/:id", component: _pages_qrcodedetails_qrcodedetails_component__WEBPACK_IMPORTED_MODULE_7__["QRCodeDetailsComponent"] },
    { path: "qrcodes/create", component: _pages_productpage_productpage_component__WEBPACK_IMPORTED_MODULE_5__["ProductpageComponent"] },
    { path: "account", component: _pages_accountsettings_accountsettings_component__WEBPACK_IMPORTED_MODULE_3__["AccountsettingsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    useHash: false,
                    scrollPositionRestoration: "enabled",
                    anchorScrolling: "enabled",
                    scrollOffset: [0, 64]
                })
            ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        useHash: false,
                        scrollPositionRestoration: "enabled",
                        anchorScrolling: "enabled",
                        scrollOffset: [0, 64]
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vqka":
/*!**************************************************************!*\
  !*** ./src/app/pages/registerpage/registerpage.component.ts ***!
  \**************************************************************/
/*! exports provided: RegisterpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterpageComponent", function() { return RegisterpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse */ "v0iw");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _keys_parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../keys/parse */ "DuhC");
/* harmony import */ var _keys_parse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_keys_parse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_shared_userHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/userHelper */ "O1WI");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");












function RegisterpageComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Account Sign Up Failed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMsg, " ");
} }
var RegisterpageComponent = /** @class */ (function () {
    function RegisterpageComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        parse__WEBPACK_IMPORTED_MODULE_3__["initialize"](_keys_parse__WEBPACK_IMPORTED_MODULE_4__["appId"], _keys_parse__WEBPACK_IMPORTED_MODULE_4__["javascript"]);
        parse__WEBPACK_IMPORTED_MODULE_3__["serverURL"] = _keys_parse__WEBPACK_IMPORTED_MODULE_4__["serverURL"];
    }
    RegisterpageComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.signUpError = false;
        this.username = Object(src_shared_userHelper__WEBPACK_IMPORTED_MODULE_6__["getStoredUser"])().username;
        if (this.username) {
            this.router.navigate(['/qrcodes']);
        }
        this.userSignUp = this.formBuilder.group({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: ''
        });
    };
    RegisterpageComponent.prototype.userSignup = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var user, fullName;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        this.isAgent = "YES";
                        user = new parse__WEBPACK_IMPORTED_MODULE_3__["User"]();
                        fullName = this.userSignUp.value.firstName + " " + this.userSignUp.value.lastName;
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
                        return [4 /*yield*/, user.signUp().then(function (user) {
                                _this.userPointer = user;
                                Object(src_shared_userHelper__WEBPACK_IMPORTED_MODULE_6__["storeUser"])(user);
                                if (_this.isAgent === 'YES') {
                                    _this.agentSignup();
                                }
                                else {
                                    _this.presentSignUpSuccess();
                                }
                                return user;
                            }).catch(function (error) {
                                _this.errorMsg = error;
                                _this.signUpError = true;
                                _this.loading = false;
                                return error;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterpageComponent.prototype.agentSignup = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var Agent, agent, fullName;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Agent = parse__WEBPACK_IMPORTED_MODULE_3__["Object"].extend('Agents');
                        agent = new Agent();
                        fullName = this.userSignUp.value.firstName + " " + this.userSignUp.value.lastName;
                        agent.set('agentDisplayName', fullName);
                        agent.set('agentEmail', this.userSignUp.value.email);
                        agent.set('email', this.userSignUp.value.email);
                        agent.set('agentID', this.userSignUp.value.email);
                        agent.set('user', this.userPointer);
                        agent.set('userPointer', this.userPointer);
                        return [4 /*yield*/, agent.save().then(function (response) {
                                _this.presentSignUpSuccess();
                                return response;
                            }).catch(function (error) {
                                _this.errorMsg = error;
                                _this.signUpError = true;
                                _this.loading = false;
                                return error;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterpageComponent.prototype.presentSignUpSuccess = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: "Success!",
            timer: 1500,
            showConfirmButton: false,
            icon: "success"
        });
        setTimeout(function () {
            _this.loading = false;
            _this.router.navigate(['/qrcodes']);
        }, 1500);
    };
    RegisterpageComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    RegisterpageComponent.ɵfac = function RegisterpageComponent_Factory(t) { return new (t || RegisterpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
    RegisterpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterpageComponent, selectors: [["app-registerpage"]], decls: 53, vars: 2, consts: [[1, "header-4", "skew-separator"], [1, "header-wrapper"], [1, "page-header", "header-video"], [1, "overlay"], [1, "auth-container", "container", "text-center"], [1, "row"], [1, "col-lg-10", "mx-auto"], [1, "video-text"], [1, "auth-card", "col-lg-8", "col-md-8", "mx-auto"], [1, "card", "bg-secondary", "shadow", "border-0"], [1, "card-body", "px-lg-5", "py-lg-5"], [1, "text-center", "text-muted", "mb-4"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["role", "form", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-3"], [1, "input-group", "input-group-alternative"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa-solid", "fa-user"], ["formControlName", "firstName", "placeholder", "First Name", "type", "text", 1, "form-control"], ["formControlName", "lastName", "placeholder", "Last Name", "type", "text", 1, "form-control"], [1, "fa-solid", "fa-envelope"], ["formControlName", "email", "placeholder", "Email", "type", "email", 1, "form-control"], [1, "form-group"], [1, "fa-solid", "fa-lock"], ["formControlName", "password", "placeholder", "Password", "type", "password", 1, "form-control"], ["formControlName", "passwordConfirm", "placeholder", "Confirm Password", "type", "password", 1, "form-control"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-primary", "my-4"], [1, "text-center", "text-muted", "mb-2"], [1, "auth-form-link", 3, "click"], ["role", "alert", 1, "alert", "alert-danger"]], template: function RegisterpageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "QR Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Sign Up");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, RegisterpageComponent_div_15_Template, 4, 1, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterpageComponent_Template_form_ngSubmit_16_listener() { return ctx.userSignup(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Sign Up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterpageComponent_Template_a_click_51_listener() { return ctx.login(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpError);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userSignUp);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".auth-container[_ngcontent-%COMP%] {\n  padding-top: 5vh !important;\n}\n\n.overlap-card[_ngcontent-%COMP%] {\n  margin-top: -120px !important;\n  z-index: 99 !important;\n}\n\n.header-4[_ngcontent-%COMP%]   .video-text[_ngcontent-%COMP%] {\n  font-size: 4em !important;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  margin-top: 50px !important;\n}\n\n.header-4[_ngcontent-%COMP%]   .header-video[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  opacity: 0.8 !important;\n}\n\na.auth-form-link[_ngcontent-%COMP%] {\n  color: #5e72e4 !important;\n}\n\na.auth-form-link[_ngcontent-%COMP%]:hover {\n  color: #444 !important;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem !important;\n  background-color: #f5365c !important;\n  border-color: #f5365c !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDJCQUFBO0FBQ0Q7O0FBRUE7RUFDQyw2QkFBQTtFQUNBLHNCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx5QkFBQTtBQUNEOztBQUVBO0VBQ0MsMkJBQUE7QUFDRDs7QUFFQTtFQUNDLHVCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx5QkFBQTtBQUNEOztBQUVBO0VBQ0Msc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFDRDs7QUFFQTtFQUNDLGdDQUFBO0VBQ0Esb0NBQUE7RUFDRyxnQ0FBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtY29udGFpbmVyIHtcblx0cGFkZGluZy10b3A6IDV2aCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxhcC1jYXJkIHtcblx0bWFyZ2luLXRvcDogLTEyMHB4ICFpbXBvcnRhbnQ7XG5cdHotaW5kZXg6IDk5ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItNCAudmlkZW8tdGV4dCB7XG5cdGZvbnQtc2l6ZTogNGVtICFpbXBvcnRhbnQ7XG59XG5cbi5hdXRoLWNhcmQge1xuXHRtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItNCAuaGVhZGVyLXZpZGVvIC5vdmVybGF5IHtcblx0b3BhY2l0eTogMC44ICFpbXBvcnRhbnQ7XG59XG5cbmEuYXV0aC1mb3JtLWxpbmsge1xuXHRjb2xvcjogIzVlNzJlNCAhaW1wb3J0YW50O1xufVxuXG5hLmF1dGgtZm9ybS1saW5rOmhvdmVyIHtcblx0Y29sb3I6ICM0NDQgIWltcG9ydGFudDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuXHRwYWRkaW5nOiAuNzVyZW0gMXJlbSAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjUzNjVjICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjUzNjVjICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
    return RegisterpageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-registerpage",
                templateUrl: "registerpage.component.html",
                styleUrls: [
                    "../../app.component.scss"
                ]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/*!

 =========================================================
 * Argon Desing System PRO Angular - v1.2.0
 =========================================================

 * Product Page: https://www.qrdashboard.com/product/qr-dashboard
 * Copyright 2021 QR Dashboard (http://www.qrdashboard.com)

Coded by www.qrdashboard.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map