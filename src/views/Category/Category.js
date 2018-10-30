import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ categoryName }) => (
	<section>
		<h1>Category : {categoryName}</h1>
	</section>
);

Category.PropTypes = {
	categoryName: PropTypes.string.isRequired,
}

export default Category;