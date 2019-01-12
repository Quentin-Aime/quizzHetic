import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ categoryName, question, answer, submitCallback, changeAnswerValue }) => (
	<section>
		<h1>{categoryName}</h1>
        <h3>{question.question}</h3>
        <hr></hr>
        <form onSubmit={submitCallback}>
            <input placeholder="answer" name="answer" value={answer} onChange={changeAnswerValue}></input>
            <button>Submit</button>
        </form>
	</section>
);

Category.propTypes = {
    categoryName: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
	answer: PropTypes.string.isRequired,
    submitCallback: PropTypes.func.isRequired,
    changeAnswerValue: PropTypes.func.isRequired
}

export default Category;