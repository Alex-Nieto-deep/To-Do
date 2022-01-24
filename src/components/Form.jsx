import { useState, useContext } from 'react';
import { TodoContext } from '../context';
import '../styles/Form.css'

const Form = () => {

  const [newTodoValue, setNewTodoValue] = useState('');
  // state for save the value edited
  const [saveEdited, setSaveEdited] = useState('');
  const { addTodo, setAddItem, setEditItem, editItem, modifyTodo, findIndexTodo } = useContext(TodoContext);

  const onCancel = () => {
    setAddItem(false);
    setEditItem(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.length <= 0) return;
    addTodo(newTodoValue);
    setNewTodoValue('')
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    setSaveEdited(event.target.value)
  }

  const onModify = (event) => {
    event.preventDefault();
    modifyTodo(findIndexTodo, saveEdited)
    setSaveEdited('');
    setEditItem(false)
  }

  return (
    <form onSubmit={!editItem ? onSubmit : onModify} >
      <label>{editItem ? 'Editar la tarea' : 'Nueva Tarea'}</label>
      {!editItem ? (
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Escribe una nueva tarea"
        />
      ) : <textarea
        value={saveEdited}
        onChange={onChange}
        placeholder="Modificar tarea"
      />}
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        {!editItem ? (<button
          className="TodoForm-button TodoForm-button-add"
          type="submit"
        >
          Añadir
        </button>) : (
          <button
            className="TodoForm-button TodoForm-button-add"
            type="submit"
          >
            Guardar
          </button>)
        }
      </div>
    </form>

  );
};

export default Form;
