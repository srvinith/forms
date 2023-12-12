import React, { useState } from 'react';
import EditItemForm from './EditItemForm';

const ItemList = ({ items, onEdit, onDelete }) => {
  const [editingItemId, setEditingItemId] = useState(null);

  const handleEditClick = (itemId) => {
    setEditingItemId(itemId);
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editingItemId === item.id ? (
              <EditItemForm item={item} onEdit={onEdit} onCancel={handleCancelEdit} />
            ) : (
              <>
                {item.name}
                <button onClick={() => handleEditClick(item.id)}>Edit</button>
                <button onClick={() => onDelete(item.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
