import React, { Component } from 'react';
import GameOver from './GameOver';
import { withRouter } from 'react-router-dom';

class GameOverContainer extends Component {
	componentDidMount() {
		
	}
	render () {
		return (
			<GameOver> LOSER </GameOver>
		);
	}
}

export default withRouter(GameOverContainer);