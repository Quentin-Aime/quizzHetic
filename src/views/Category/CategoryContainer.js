import React, { Component } from 'react';
import Category from './Category';
import { withRouter } from 'react-router-dom';

class CategoryContainer extends Component {
	componentDidMount() {
		
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