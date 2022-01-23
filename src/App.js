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
  return (
    <>
      <Counter
        total={totalTodos}
        completed={completedTodos}
      />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <List>
        {todos.map(todo => (
          <Item
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))
        }
      </List>
      <CreateItemButton />
    </>
  );
}

export default App;
