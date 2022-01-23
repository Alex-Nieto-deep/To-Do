import React from 'react';
import '../styles/List.css'

const List = ({ children }) => {
  return (
    <section>
      <ul>
        {children}
      </ul>
    </section>
  );
};

export default List;
