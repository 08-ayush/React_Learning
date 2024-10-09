import React, { useState } from "react";

function AddTodo({ onNewItem }) {
  const [itemName, setItemName] = useState("");  // Initialize with empty string
  const [itemDueDate, setItemDueDate] = useState("");  // Initialize with empty string

  const handleNewNameChange = (event) => {
    const newName = event.target.value;
    setItemName(newName);
  };

  const handleNewDateChange = (event) => {
    const newDate = event.target.value;
    setItemDueDate(newDate);
  };

  const handleAddButtonClicked = () => {
    if (itemName && itemDueDate) {
      onNewItem(itemName, itemDueDate);
      setItemDueDate("");  // Clear the due date input
      setItemName("");  // Clear the name input
    } else {
      alert("Please fill in both the task and the due date.");
    }
  };

  return (
    <div className="container">
      <div className="row a-row">
        <div className="col-6">
          <input
            type="text"
            value={itemName}  // Bind the input value to itemName state
            placeholder="Enter Todo Here"
            onChange={handleNewNameChange}
          />
        </div>
        <div className="col-4">
          <input 
            type="date" 
            value={itemDueDate}  // Bind the input value to itemDueDate state
            onChange={handleNewDateChange} 
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success a-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
