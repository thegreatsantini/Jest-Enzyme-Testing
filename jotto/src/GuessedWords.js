import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ( props ) => {
    return (
        <div data-test='component-guessed-words' >
          Heres the list of guessef words

        </ div>
    );
};

GuessedWords.propTypes = {
      guessedWord: PropTypes.arrayOf(
        PropTypes.shape({
          guessedWord: PropTypes.string.isRequired,
          letterMatchCount: PropTypes.number.isRequired
        })
      ).isRequired,
}

export default GuessedWords;
