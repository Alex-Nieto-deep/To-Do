import React from 'react';
import '../styles/Item.css'

const Item = (props) => {
  const { toggleCompleteTodo, deleteTodo } = props;

  return (
    <li className="Item">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={toggleCompleteTodo}
      >
        √
      </span>
      <p
        className={`Item-p ${props.completed && 'Item-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={deleteTodo}
      >
        X
      </span>
    </li>
  );
};

export default Item;
