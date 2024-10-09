import TodoItem from "./TodoItem";
const TodoItems = ({ TodoItems,onDeleteClick }) => {
  return (
    <div classNameName="items-container">
      {TodoItems.map((items) => (
        <TodoItem todoDate={items.dueDate} todoName={items.name} onDeleteClick={onDeleteClick}/>
      ))}
    </div>
  );
};

export default TodoItems;
