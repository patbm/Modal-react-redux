import React, { Component } from 'react';
import Button from './components/button/button';
import Modal from './components/modal/modal';
import './App.css';
import {showModal, hideModal} from './index.js';
import {connect} from "react-redux";

class App extends Component {
  render () {
    const currentModal = this.props.modal;
    return (
      <div className="main">
        <Button text="Show my modal 1!" onClick={() => this.props.showModal('modal-prueba-1')}/>
        <Button text="Show my modal 2!" onClick={() => this.props.showModal('modal-prueba-2')}/>
        
        { currentModal === 'modal-prueba-1' &&
          <Modal
            title="Here is my modal window 1"
            onClose={() => this.props.hideModal()}>
            <p>Hello, you can put here whatever you want!</p>
          </Modal>
        }

        { currentModal === 'modal-prueba-2' &&
          <Modal
            title="Here is my modal window 2"
            onClose={() => this.props.hideModal()}>
            <p>Hello, you can put here whatever you want!</p>
          </Modal>
        }
      </div>
    );
  }
}

const mapStateToProp = state => ({modal: state.modal});
const mapDispatchToProp = dispatch =>({
  showModal: modal => dispatch(showModal(modal)),
  hideModal: () => dispatch(hideModal())
});

export default connect(mapStateToProp, mapDispatchToProp) (App);
