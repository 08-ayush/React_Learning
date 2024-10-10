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
   // const newItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    // setTodoItems(newItems);
    //!ye hm jb use krege jb purane items ko bhi rakhna ho ar uske base pr new upadte krna ho to
    //!kyoki currvalue m hamesha up to date value hi milege it is called functional updates 
    setTodoItems((currvalue)=>{
      return [...currvalue,{name:itemName,dueDate:itemDueDate}]
    })
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
