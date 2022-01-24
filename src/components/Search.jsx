import { useContext } from 'react';
import { TodoContext } from '../context';
import '../styles/Search.css'


const Search = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext)

  const onSearchChange = (event) => {
    const todo = event.target.value
    console.log(todo);
    setSearchValue(todo)
  }

  return (
    <input
      className="Search"
      placeholder="Buscar"
      value={searchValue}
      onChange={onSearchChange}
    />
  );
};

export default Search;
