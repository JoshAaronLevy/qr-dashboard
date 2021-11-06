export function storeUser(user: any) {
	if (user.attributes) {
		user = { id: user.id, ...user.attributes };
	} else {
		user = { ...user };
	}
	localStorage.setItem('userId', user.id);
	localStorage.setItem('firstName', user.firstName);
	localStorage.setItem('lastName', user.lastName);
	localStorage.setItem('userId', user.id);
	localStorage.setItem('isAgent', user.isagentyn);
	localStorage.setItem('sessionToken', user.sessionToken);
	localStorage.setItem('username', user.accountemail);
}

export function getStoredUser() {
	return {
		userId: localStorage.getItem('userId'),
		firstName: localStorage.getItem('firstName'),
		lastName: localStorage.getItem('lastName'),
		isAgent: localStorage.getItem('isAgent'),
		sessionToken: localStorage.getItem('sessionToken'),
		username: localStorage.getItem('username')
	};
}

export function clearUser() {
	localStorage.clear();
}
