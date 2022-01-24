import { useState } from 'react';
import Counter from './components/Counter';
import Search from './components/Search';
import List from './components/List';
import Item from './components/Item';
import CreateItemButton from './components/CreateItemButton';

const todosExample = [
  { text: 'Primera tarea', completed: false },
  { text: 'Primera segunda', completed: true },
  { text: 'Primera tercera', completed: false },
  { text: 'Primera cuarta', completed: false },
]

function App() {
  const [todos, setTodos] = useState(todosExample);
  const [searchValue, setSearchValue] = useState('');

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

  return (
    <>
      <Counter
        total={totalTodos}
        completed={completedTodos}
      />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <List>
        {searchedTodos.map(todo => (
          <Item
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            toggleCompleteTodo={() => toggleCompleteTodo(todo.text)}
            deleteTodo={() => deleteTodo((todo.text))}
          />
        ))
        }
      </List>
      <CreateItemButton />
    </>
  );
}

export default App;
