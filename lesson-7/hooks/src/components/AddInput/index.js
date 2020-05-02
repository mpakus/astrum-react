import React, { useContext, useState } from 'react';
import { ListContext } from "../../contexts/ListContext";

const AddInput = () => {
  let [item, setItem] = useState('');

  const state = useContext(ListContext);

  return (
    <div>
      <input value={item} onChange={e => setItem(e.target.value)}/>
      <button onClick={e => { state.addItem(item); setItem('') }}>+ Add</button>
    </div>
  );
};

export default AddInput;
