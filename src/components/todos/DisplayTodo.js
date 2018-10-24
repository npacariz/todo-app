import React from "react";

const DisplayTodo = ({
  todo,
  editing,
  editTodo,
  handleEditTodo,
  handleDelete,
  handleEditChanges,
  submitEditedTodo
}) => {
  let showTodo =
    editing === todo.id ? (
      <div>
        <form onSubmit={submitEditedTodo}>
          <input
            type="text"
            value={editTodo.title}
            onChange={handleEditChanges}
          />
          <button>OK</button>
        </form>
      </div>
    ) : (
      <div>
        <span
          onDoubleClick={() => {
            handleEditTodo(todo.id);
          }}
        >
          {todo.title}
        </span>

        <button
          className="badge badge-danger badge-pill"
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          X
        </button>
      </div>
    );

  return <div>{showTodo}</div>;
};

export default DisplayTodo;
