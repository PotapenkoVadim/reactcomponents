import React from 'react';

export const Button = props => (
  <button
    className={ `btn btn-${props.type || 'success' } text-white` }
    onClick={ props.handler }  
  >
    { props.buttonTitle || 'Button' }
  </button>
);