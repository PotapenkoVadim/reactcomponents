import React from 'react';

export class Wrapper extends React.Component {
  constructor(props) {
    super (props);
    this.handlerClose = this.handlerClose.bind(this);
  }

  handlerClose(e) {
    if ([...e.target.classList].includes('wrapper-show'))
      this.props.handlerClose();
  }

  render() {
    return (
      <div onClick={ this.handlerClose } className={`wrapper ${this.props.modalShow && 'wrapper-show'}`}>
        { this.props.children }
      </div>
    );
  }
}