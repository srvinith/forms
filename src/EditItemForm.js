import React, { useState, useEffect } from 'react';

const EditItemForm = ({ item, onEdit, onCancel }) => {
  const [itemName, setItemName] = useState('');

  useEffect(() => {
    if (item) {
      setItemName(item.name);
    }
  }, [item]);

  const handleUpdateItem = () => {
    if (itemName.trim() !== '') {
      const updatedItem = { ...item, name: itemName };
      onEdit(updatedItem);
      onCancel(); // Cancel the edit mode after updating
    }
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter updated item name"
      />
      <button onClick={handleUpdateItem}>Update Item</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditItemForm;
