import { useContext } from 'react';
import Counter from './components/Counter';
import Search from './components/Search';
import List from './components/List';
import Item from './components/Item';
import CreateItemButton from './components/CreateItemButton';
import { TodoContext } from './context';
import AddItem from './modal/AddItem';
import Form from './components/Form';

function App() {
  const { searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    addItem,
    setAddItem,
    editItem
  } = useContext(TodoContext);
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
      {(addItem || editItem) && (
        <AddItem>
          <Form />
        </AddItem>
      )}
      <CreateItemButton
        setAddItem={setAddItem}
        addItem={addItem}
      />
    </>
  );
}

export default App;
