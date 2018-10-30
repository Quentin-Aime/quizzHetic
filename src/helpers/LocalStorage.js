class localStorage {
	saveItem (key, value) {
		localStorage.setItem(key, value);
	}
	getItem (key, value) {
		localStorage.getItem(key, value);
	}
}

export default localStorage;