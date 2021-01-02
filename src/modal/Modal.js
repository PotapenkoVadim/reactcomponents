import React from 'react';
import './modal.styles.less';

import { Wrapper } from './containers/Wrapper';
import { ModalContainer } from './containers/ModalContainer';

import { Closable } from './components/Closable';
import { Button } from './components/Button';
import { Content } from './components/Content';
import { Trigger } from './components/Trigger';

export class Modal extends React.Component {
  constructor(props) {
    super (props);
    this.state = { modalShow: false };

    this.handlerTrigger = this.handlerTrigger.bind(this);
    this.handlerClose = this.handlerClose.bind(this);
    this.successHandler = this.successHandler.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
  }

  handlerTrigger() {
    if (this.props.children)
      this.setState({ modalShow: true });
  }

  handlerClose(e) {
    if (this.props.children)
      this.setState({ modalShow: false });
  }

  successHandler() {
    this.props.successHandler();
    this.handlerClose();
  }

  cancelHandler() {
    this.props.cancelHanlder();
    this.handlerClose();
  }

  render() {
    return (
      <>
        <Wrapper modalShow={ this.state.modalShow } handlerClose={ this.handlerClose }>
          <ModalContainer>
            {
              this.props.closable && <Closable handler={ this.handlerClose } />
            }
            
            <Content>
              { this.props.children }
            </Content>

            {
              this.props.buttonBlock &&
              <div className='btn-block'>
                <Button
                  type={ this.props.successType || 'success' }
                  buttonTitle={ this.props.successButtonTitle || 'Success button' }
                  handler={ this.successHandler || null }
                />
                <Button
                  type={ this.props.cancelType || 'warning' }
                  buttonTitle={ this.props.cancelButtonTitle || 'Warning button' }
                  handler={ this.cancelHandler || null }
                />
              </div>
            }
          </ModalContainer>
        </Wrapper>

        <Trigger handler={ this.handlerTrigger } title={ this.props.triggerTitle || 'Modal trigger title'} />
      </>
    );
  }
}