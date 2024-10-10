import  { AiFillDelete } from 'react-icons/ai';
function TodoItem({ todoDate, todoName, onDeleteClick }) {

  const deleteTodo = () => {
    onDeleteClick(todoName, todoDate);

   
  }
  return (
    <div className="container ">
      <div className="row a-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger a-button"
          onClick={deleteTodo}
          >
           <AiFillDelete/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
