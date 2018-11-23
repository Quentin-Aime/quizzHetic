import React, { Component } from 'react';
import Home from './Home';
import Api from '../../helpers/Api';

class HomeContainer extends Component {
  state = {
    categories: [],
  }
  async componentDidMount() {
    const data = await Api.getCategories();
    this.setState({
      categories: data,
    });
  }
  render() {
    return (
      <Home categories={this.state.categories} />
    );
  }
}

export default HomeContainer;
