import React from 'react';
import '../styles/CreateItemButton.css';

function CreateItemButton({ setAddItem, addItem }) {

  return (
    <button
      className="CreateItemButton"
      onClick={() => setAddItem(!addItem)}
    >
      +
    </button>
  );
}

export default CreateItemButton;
