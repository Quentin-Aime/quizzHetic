class api {
	async getCategories() {
	const response = await fetch('http://jservice.io/api/categories?count=100');
	const json = await response.json();
	return json;
}
	async getCategoryById(id) {
		const category = await fetch(`http://jservice.io/api/category?id=${id}`);
		console.log(category);
		const json = await category.json();
		return json;
	}
}

export default new api();
