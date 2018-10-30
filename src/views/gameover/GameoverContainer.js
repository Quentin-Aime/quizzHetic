import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Gameover from './Gameover';

class GameoverContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <Gameover
        gameoverName={this.props.match.params.name}
      />
    );
  }
}

export default withRouter(GameoverContainer);
