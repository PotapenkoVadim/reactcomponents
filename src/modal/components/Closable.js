import React from 'react';

export const Closable = props => (
  <span onClick={ props.handler } className='closable'>&times;</span>
);