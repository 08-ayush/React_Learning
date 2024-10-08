import TodoItem from "./TodoItem";
const TodoItems = ({ TodoItems }) => {
  return (
    <div classNameName="items-container">
      {TodoItems.map((items) => (
        <TodoItem todoDate={items.dueDate} todoName={items.name} />
      ))}
    </div>
  );
};

export default TodoItems;
