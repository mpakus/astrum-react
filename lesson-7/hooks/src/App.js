import React from 'react';

import List from "./components/List";
import AddInput from "./components/AddInput";
import ListContextProvider from "./contexts/ListContext";

function App() {
  return (
    <div className="App">
      <ListContextProvider>
        <List/>
        <AddInput/>
      </ListContextProvider>
    </div>
  );
}

export default App;
