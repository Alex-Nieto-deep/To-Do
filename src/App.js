import Counter from './components/Counter';
import Search from './components/Search';
import List from './components/List';
import Item from './components/Item';

const todos = [
  { text: 'Primera tarea', completed: false },
  { text: 'Primera segunda', completed: false },
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
          <Item id={todo.text}>{todo.text}</Item>
        ))
        }
      </List>
    </>
  );
}

export default App;
