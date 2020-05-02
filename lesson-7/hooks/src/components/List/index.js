import React, { useContext } from 'react';
import { ListContext } from "../../contexts/ListContext";

const List = () => {
  const state = useContext(ListContext);
  const { items } = state;

  return (
    <div>
      <h1>List of Books</h1>
      <ul>
        {items && items.map((i, index) => <li key={index}>{i}</li>)}
      </ul>
    </div>
  );
};

export default List;
