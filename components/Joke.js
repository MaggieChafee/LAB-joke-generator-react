import React from 'react';
import PropTypes from 'prop-types';

export default function Joker({ joke, btnText }) {
  return (
    <>
      <h3>{joke.setup}</h3>
      <p>{btnText !== 'Get Punchline' ? joke.punchline : ''}</p>
    </>
  );
}

Joker.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
