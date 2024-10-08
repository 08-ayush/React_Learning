function AddTodo() {
  return (
    <div className="container ">
      <div className="row a-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here"></input>
        </div>
        <div className="col-4">
          <input type="date"></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success a-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
