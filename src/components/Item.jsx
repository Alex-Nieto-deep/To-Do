import { useContext } from 'react';
import { TodoContext } from '../context';
import '../styles/Item.css'


const Item = (props) => {
  const { toggleCompleteTodo, deleteTodo, } = props;
  const { setEditItem, findIndex } = useContext(TodoContext)
  const onClickValue = (text) => {
    setEditItem(true);
    findIndex(text)
  }
  return (
    <li className="Item">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={toggleCompleteTodo}
      >
        √
      </span>
      <p
        className={`Item-p ${props.completed && 'Item-p--complete'}`} onClick={() => onClickValue(props.text)}>{props.text}
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
