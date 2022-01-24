import { useContext } from 'react';
import { TodoContext } from '../context';
import '../styles/Search.css'
import ButtonApi from './ButtonApi';


const Search = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext)

  const onSearchChange = (event) => {
    const todo = event.target.value
    console.log(todo);
    setSearchValue(todo)
  }

  return (
    <div style={{ textAlign: 'center', }}>
      <input
        className="Search"
        placeholder="Buscar"
        value={searchValue}
        onChange={onSearchChange}
        style={{ marginBottom: 20 }}
      />
      <ButtonApi />
    </div>
  );
};

export default Search;
