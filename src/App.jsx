import "./Components/AppName";
import "./App.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";

function App() {
  const initailTodoItems = [
    { name: "Buy Milk", dueDate: "12/09/2024" },
    { name: "Got to college", dueDate: "13/09/2024" },
    { name: "Like this react", dueDate: "13/09/2024" },
  ];

  const [todoItems, setTodoItems] = useState(initailTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item Added: ${itemName} ${itemDueDate}`);
    const newItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newItems);
  };

  const handleDeleteItem = (itemName, itemDueDate) => {
    console.log(`Deleted item: ${itemName} ${itemDueDate}`);

    const newItems = todoItems.filter((items) => items.name !== itemName);


    setTodoItems(newItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <TodoItems TodoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
