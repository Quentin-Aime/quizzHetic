import React, { Component } from 'react';
import Category from './Category';
import { withRouter } from 'react-router-dom';

class CategoryContainer extends Component {
	state = {
		questionNb: 20,
	}
	componentDidMount() {
		console.debug(this.props);
		fetch(`http://jservice.io/api/clues?category=${this.props.match.params.name}`).then(response => {
			console.debug(response);
			return response.json()
		}).then(questions => {
			console.debug(questions);
		});
	}
	render () {
		return (
			<Category
				categoryName={this.props.match.params.name}
			></Category>
		);
	}
}

export default withRouter(CategoryContainer);