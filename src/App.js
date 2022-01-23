import Counter from './components/Counter';
import Search from './components/Search';
import List from './components/List';
import Item from './components/Item';
import CreateItemButton from './components/CreateItemButton';
const todos = [
  { text: 'Primera tarea', completed: false },
  { text: 'Primera segunda', completed: true },
  { text: 'Primera tercera', completed: false },
  { text: 'Primera cuarta', completed: false },

]

function App() {
  return (
    <>
      <Counter />
      <Search />
      <List>
        {todos.map(todo => (
          <Item key={todo.text} text={todo.text} completed={todo.completed} />
        ))
        }
      </List>
      <CreateItemButton />
    </>
  );
}

export default App;
