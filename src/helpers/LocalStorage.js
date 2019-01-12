class myStorage {
	saveItem (key, value) {
        if (!localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify([]));
        }
        let tmpArray = localStorage.getItem(key);
        console.debug(tmpArray);
        tmpArray.push(value);
		localStorage.setItem(key, tmpArray);
	}
	getItem (key) {
		return JSON.parse(localStorage.getItem(key));
	}
    incrementScore() {
        localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 1);
    }
    resetScore() {
        localStorage.setItem('score', 0);
    }
    decrementLife() {
        localStorage.setItem('life', parseInt(localStorage.getItem('life')) - 1);
    }
    resetLife() {
        console.debug('wtf');
        localStorage.setItem('life', 3);
    }

    // faudra reset les questions deja faite au reset  ------- TODO
}

export default new myStorage();