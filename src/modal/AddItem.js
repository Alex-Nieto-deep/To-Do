import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/AddItem.css'

function AddItem({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export default AddItem;