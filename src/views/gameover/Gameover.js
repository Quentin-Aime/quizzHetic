import React from 'react';
import PropTypes from 'prop-types';

const Gameover = ( { gameoverName } ) => (
  <section>
    <h1>Gameover</h1>
  </section>
);

Gameover.propTypes = {
  gameoverName: PropTypes.string.isRequired,
}

export default Gameover
