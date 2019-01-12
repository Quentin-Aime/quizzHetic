import React, { Component } from 'react';
import Category from './Category';
import { withRouter } from 'react-router-dom';
import Api from './../../helpers/Api';
import LocalStorage from './../../helpers/LocalStorage';

class CategoryContainer extends Component {
	state = {
		questionNb: 20,
		name: '',
		question: ''
	}
	componentDidMount() {
		Api.getCategoryName(this.props.match.params.name).then(resp => {
			this.setState({
				name: resp
			});
		})
		Api.getQuestionsByCategoryId(this.props.match.params.name).then(resp => {
			let questionsReceived = resp;
			let questionsDone = LocalStorage.getItem(this.props.match.params.name);
			if (questionsDone) {
				questionsReceived.filter(question => {
					return !questionsDone.includes(question.id)
				});
			}
			return questionsReceived;
		}).then(questions => {
			console.debug(questions);
			let questionNumber = Math.round(Math.random() * questions.length)
			this.setState({
				question: questions[questionNumber]
			});
		})
	}
	render () {
		return (
			<Category
				categoryName={this.state.name}
				question={this.state.question}
			></Category>
		);
	}
}

export default withRouter(CategoryContainer);