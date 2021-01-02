import React from 'react';

export const Trigger = props => (
  <button className='btn btn-primary' onClick={ props.handler }>
    { props.title }
  </button>
);