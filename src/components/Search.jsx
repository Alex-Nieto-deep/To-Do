import { useState } from 'react';
import '../styles/Search.css'

const Search = ({ searchValue, setSearchValue }) => {

  const onSearchChange = (event) => {
    const todo = event.target.value
    console.log(todo);
    setSearchValue(todo)
  }

  return (
    <input
      className="Search"
      placeholder="Buscar"
      onChange={onSearchChange}
    />
  );
};

export default Search;
