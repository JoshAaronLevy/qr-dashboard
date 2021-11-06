export function storeUser(user: any) {
	if (user.attributes) {
		user = { id: user.id, ...user.attributes };
	} else {
		user = { ...user };
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

export function getStoredUser() {
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

export function clearUser() {
	localStorage.clear();
}
