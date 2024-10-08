import "./Components/AppName";
import "./App.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./Components/TodoItems";
function App() {
  const todoItems = [
    { name: "Buy Milk", dueDate: "12/09/2024" },
    { name: "Got to college", dueDate: "13/09/2024" },
    { name: "Like this react", dueDate: "13/09/2024" },
  ];
  return (
    <center classNameName="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems TodoItems={todoItems} />
    </center>
  );
}

export default App;
