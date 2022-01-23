import React from 'react';
import '../styles/Item.css'

const Item = (props) => {
  const onDelete = (todo) => {
    console.log(`tarea eliminada: ${todo}`);
  }

  const onComplete = (todo) => {
    console.log(`tarea completada: ${todo}`);
  }
  return (
    <li className="Item">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={() => onComplete(props.text)}
      >
        √
      </span>
      <p
        className={`Item-p ${props.completed && 'Item-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={() => onDelete(props.text)}
      >
        X
      </span>
    </li>
  );
};

export default Item;
