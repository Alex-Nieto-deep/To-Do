import { useContext } from 'react';
import Counter from './components/Counter';
import Search from './components/Search';
import List from './components/List';
import Item from './components/Item';
import CreateItemButton from './components/CreateItemButton';
import { TodoContext } from './context';

function App() {
  const { searchedTodos, toggleCompleteTodo, deleteTodo } = useContext(TodoContext);
  console.log(searchedTodos);
  return (
    <>
      <Counter />
      <Search />
      <List>
        {searchedTodos.map(todo => (
          <Item
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            toggleCompleteTodo={() => toggleCompleteTodo(todo.text)}
            deleteTodo={() => deleteTodo((todo.text))}
          />
        ))}
      </List>
      <CreateItemButton />
    </>
  );
}

export default App;
