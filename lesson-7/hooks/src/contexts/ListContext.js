import React, { createContext, useState } from "react";

export const ListContext = createContext();

const ListContextProvider = (props) => {

  let [state, setState] = useState({
    items: ['item 1', 'item 2']
  });

  const addItem = (item) => {
    state.items.push(item);
    setState({ ...state });
  }

  return (
    <ListContext.Provider value={{ ...state, addItem: addItem }}>
      {props.children}
    </ListContext.Provider>
  )
};

export default ListContextProvider;
