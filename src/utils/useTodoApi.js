import { useState, useEffect } from 'react';

const useTodoApi = (API, limite) => {
  const [newTodos, setNewTodos] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(todos => setNewTodos(todos.data))
  }, [limite]);
  return newTodos;
};

export default useTodoApi;
