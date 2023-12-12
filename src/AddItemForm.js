import React, { useState } from 'react';

const AddItemForm = ({ onAdd }) => {
  const [itemName, setItemName] = useState('');

  const handleAddItem = () => {
    if (itemName.trim() !== '') {
      const newItem = { id: Date.now(), name: itemName };
      onAdd(newItem);
      setItemName('');
    }
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter item name"
        />
        <button type="button" onClick={handleAddItem}>
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
