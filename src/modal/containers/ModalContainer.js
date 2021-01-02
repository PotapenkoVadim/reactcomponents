import React from 'react';

export class ModalContainer extends React.Component {
  render() {
    return (
      <div className='modal-container'>
        { this.props.children }
      </div>
    );
  }
}