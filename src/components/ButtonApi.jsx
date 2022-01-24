import React, { useState, useContext } from 'react';
import { TodoContext } from '../context'
import useTodoApi from '../utils/useTodoApi';

const ButtonApi = () => {
  const [limiteTodoApi, setlimiteTodoApi] = useState('');
  const { addTodo } = useContext(TodoContext);
  let newTodos = []
  const onChange = (event) => {
    setlimiteTodoApi(event.target.value);
  }

  const API = `https://catfact.ninja/facts?limit=${limiteTodoApi}`;

  const todos = useTodoApi(API, limiteTodoApi);

  const onClick = () => {
    todos.forEach(todo => addTodo(todo.fact.slice(0, 20)))
    setlimiteTodoApi('')

  }

  return (
    <>
      <button onClick={onClick}>Fetch</button>
      <input value={limiteTodoApi}
        onChange={onChange}
      />
    </>
  );
};

export default ButtonApi;
