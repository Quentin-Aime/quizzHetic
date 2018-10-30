import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Category from './Category';

class CategoryContainer extends Component {
  componentDidMount() {
    api.getCategoryById(this.props.match.params.id); //fetch(`http://jservice.io/api/category?id=${this.props.match.params.id}`)
  }
  render() {
    console.log(this.props);
    return (
      <Category
        categoryName={this.props.match.params.id}
      />
    );
  }
}

{/*
class CategoryContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <Category
        categoryName={this.props.match.params.name}
      />
    );
  }
}
*/}

export default withRouter(CategoryContainer);

// this.props.match.params.name = peut etre obtenu via la console de chrome
// name = correspond au name de app.js
