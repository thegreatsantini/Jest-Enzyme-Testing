import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @function
 * @param { Object } props -react props
 * @returns { JSX.Element }  - Rendered Component or null if success is false
*/

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test='component-congrats' >
        <span data-test='congrats-message' >
          congratulations you guessed correctly!
          </span>
      </div>
    );
  } else {
    return (
      <div data-test='component-congrats' />
    );
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;