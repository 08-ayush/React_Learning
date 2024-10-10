import TodoItem from "./TodoItem";
const TodoItems = ({ TodoItems, onDeleteClick }) => {
  return (
    <div className="items-container">
      {TodoItems.map((items) => (
        <TodoItem
          key={items.name}
          todoDate={items.dueDate}
          todoName={items.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
