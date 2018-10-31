class api {
	async getCategoryById(id) {
		const category = await fetch(`'http://jservice.io/api/category?id=$'{id}`);
		const json = await category.json();
		return json;
	}
}

export default new api();
