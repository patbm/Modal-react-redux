import React from 'react';

const Modal = (props) => (
    <div className='modal'>
      <div className='modal__content'>
        <div className='modal__content__header'>
          <h1>{props.title}</h1>
          <button className='btn' onClick={props.onClose}>
            Close
          </button>
        </div>
        <div className='modal__content__body'>
          {props.children}
        </div>
      </div>
    </div>  
  )

  export default Modal;