import React from "react";

const AddTodo = ({ handleSubmit, handleChange, newTodo }) => {
  return (
    <div>
      <h5>Add new Todo</h5>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={newTodo.title} required />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
