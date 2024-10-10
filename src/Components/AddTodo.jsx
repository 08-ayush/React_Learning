import React, { useRef, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  // const [itemName, setItemName] = useState(""); // Initialize with empty string
  // const [itemDueDate, setItemDueDate] = useState(""); // Initialize with empty string
 const todoNameElement = useRef();
 const todoDateElement = useRef();

  // const handleNewNameChange = (event) => {
  //   const newName = event.target.value;
  //   setItemName(newName); 
  // };

  // const handleNewDateChange = (event) => {
  //   const newDate = event.target.value;
  //   setItemDueDate(newDate);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    // if (itemName && itemDueDate) {
    if(todoNameElement.current.value && todoDateElement.current.value){
      const itemName=todoNameElement.current.value;
      const itemDueDate=todoDateElement.current.value;
      console.log(`${itemDueDate} ${itemName}` );
      onNewItem(itemName, itemDueDate);
      todoDateElement.current.value="";
      todoNameElement.current.value="";
     
      // setItemDueDate(""); // Clear the due date input
      // setItemName(""); // Clear the name input
    } else {
      alert("Please fill in both the task and the due date.");
    }
  };

  return (
    <div className="container">
      <form className="row a-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            // value={itemName} // Bind the input value to itemName state
            placeholder="Enter Todo Here"
            // onChange={handleNewNameChange}
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            // value={itemDueDate} // Bind the input value to itemDueDate state
            // onChange={handleNewDateChange}
            ref={todoDateElement}
          />
        </div>
        <div className="col-2">
          <button
            // type="button"
            className="btn btn-success a-button"
            // onClick={handleAddButtonClicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
