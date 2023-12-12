import React, { useState } from 'react';
import AddItemForm from './AddItemForm';
import ItemList from './ItemList';
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
  
  const storedItems = JSON.parse(localStorage.getItem('items')) || [];
  const [items, setItems] = useState(storedItems);


  const addItem = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
   
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const editItem = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
   
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };


  const deleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
       localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  return (
    <div>
      <h1>CRUD Operations with Local Storage</h1>
      {/* Add Item Form */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddItemForm onAdd={addItem} />
              <Link to="/edit">Go to Item List</Link>
            </>
          }
        />
        <Route
          path="/edit"
          element={<ItemList items={items} onEdit={editItem} onDelete={deleteItem} />}
        />
      </Routes>
    </div>
  );
};

export default App;
