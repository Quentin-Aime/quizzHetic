import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ categoryName, question }) => (
	<section>
		<h1>Category : {categoryName}</h1>
        <h3>{question.question}</h3>
	</section>
);

Category.PropTypes = {
    categoryName: PropTypes.string.isRequired,
	question: PropTypes.object.isRequired,
}

export default Category;