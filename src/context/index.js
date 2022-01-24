import { createContext, useState } from 'react';
// import useInitialValue from './useInitialValue'

const todosExample = [
  { text: 'Primera tarea', completed: false },
  { text: 'Primera segunda', completed: true },
  { text: 'Primera tercera', completed: false },
  { text: 'Primera cuarta', completed: false },
]


const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState(todosExample);
  const [searchValue, setSearchValue] = useState('');

  // state to add the modals
  const [addItem, setAddItem] = useState(false);
  const [editItem, setEditItem] = useState(false);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!(searchValue.length >= 1)) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText);
    })
  }

  const toggleCompleteTodo = (text) => {
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    // delete newTodos[index]
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, completed: false });
    setTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      toggleCompleteTodo,
      deleteTodo,
      addItem,
      setAddItem,
      editItem,
      setEditItem,
      addTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };