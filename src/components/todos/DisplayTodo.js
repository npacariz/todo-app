import React from "react";

const DisplayTodo = ({
  todo,
  editing,
  editTodo,
  handleEditTodo,
  handleDelete,
  handleEditChanges,
  submitEditedTodo,
  handleImportant,
  checkboxTodoDone
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
          <button className="badge badge-danger badge-pill">OK</button>
        </form>
      </div>
    ) : (
      <div>
        <input
          type="checkbox"
          defaultChecked={todo.is_done}
          onClick={() => {
            checkboxTodoDone(todo.id);
          }}
        />
        <span
          className={todo.is_done ? "styleForDoneTodo" : ""}
          onDoubleClick={() => {
            handleEditTodo(todo.id);
          }}
        >
          {todo.title}
        </span>

        <select onChange={handleImportant} id={todo.id} value={todo.priority}>
          <option>3</option>
          <option>2</option>
          <option>1</option>
          <option>0</option>
        </select>

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
