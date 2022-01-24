import { useState, useContext } from 'react';
import { TodoContext } from '../context';
import '../styles/Form.css'

const Form = () => {

  const [newTodoValue, setNewTodoValue] = useState('');
  const { addTodo, setAddItem, addItem } = useContext(TodoContext);

  const onCancel = () => {

  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(newTodoValue);
    addTodo(newTodoValue);
    setAddItem(!addItem)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }


  return (
    <form onSubmit={onSubmit} >
      <label>Nueva tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>

  );
};

export default Form;
