import React, { Component } from "react";
import { todoService } from "../services/TodoService";
import DisplayTodo from "../components/todos/DisplayTodo";
import AddTodo from "../components/todos/AddTodo";

class ListOfTodos extends Component {
  state = {
    todos: [],
    editing: false,
    newTodo: { is_done: false, title: "", priority: 0 },
    editTodo: {}
  };

  componentWillMount() {
    todoService.get().then(response => {
      this.setState({
        todos: response.data
      });
    });
  }
  // Method for deleting todo
  handleDelete = id => {
    todoService.delete(id).then(() => {
      let todos = this.state.todos.filter(todo => {
        return todo.id !== id;
      });
      this.setState({
        todos: todos
      });
    });
  };

  // Method for switching to input field to edit todo
  handleEditTodo = id => {
    let editThisTodo = this.state.todos.filter(todo => todo.id === id);
    this.setState({
      editTodo: editThisTodo[0],
      editing: id
    });
  };
  // Handling input field in AddTodo component
  handleNewTodoChange = event => {
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        title: event.target.value
      }
    });
  };
  // Method for saving edited todos
  saveEdit = (id, newTodo) => {
    todoService.put(id, newTodo).then(response => {
      let todos = this.state.todos.map(todo => {
        if (todo.id === response.data.id) {
          return response.data;
        }
        return todo;
      });
      this.setState({
        todos: todos
      });
    });
  };
  // Method for saving new todo calling from  AddTodo component
  handleSubmittingNewTodo = event => {
    event.preventDefault();
    todoService.create(this.state.newTodo).then(response => {
      let todos = [...this.state.todos, response.data];
      this.setState({
        todos: todos,
        newTodo: { is_done: false, title: "", priority: 0 }
      });
    });
  };
  // Method for handling changes in input filed form DisplayTodo component
  handleEditChanges = event => {
    this.setState({
      editTodo: {
        ...this.state.editTodo,
        title: event.target.value
      }
    });
  };
  // Method from DisplayTodo component handling submit edited todo
  submitEditedTodo = (event, id) => {
    event.preventDefault();
    this.saveEdit(this.state.editing, this.state.editTodo);
    this.setState({
      editing: false,
      editTodo: {}
    });
  };
  // Method for handling priority in todo
  handleImportant = event => {
    let value = event.target.value;
    let id = parseInt(event.target.id);
    let editTodo = this.state.todos.filter(todo => {
      return todo.id === id;
    });
    editTodo[0].priority = value;
    this.saveEdit(id, editTodo[0]);
  };
  // Method for checking done todos
  checkboxTodoDone = id => {
    let editTodo = this.state.todos.filter(todo => {
      return todo.id === id;
    });
    editTodo[0].is_done = !editTodo[0].is_done;
    this.saveEdit(id, editTodo[0]);
  };
  render() {
    let todosTitle =
      this.state.todos.length !== 0 ? "List of todos" : "You don't have todos";
    let sortTodo = this.state.todos.sort((a, b) => {
      return b.priority - a.priority;
    });
    let todoList = sortTodo.map(todo => {
      return (
        <li className="list-group-item custom-li-tag" key={todo.id}>
          <DisplayTodo
            todo={todo}
            editTodo={this.state.editTodo}
            editing={this.state.editing}
            handleEditTodo={this.handleEditTodo}
            handleDelete={this.handleDelete}
            handleEditChanges={this.handleEditChanges}
            submitEditedTodo={this.submitEditedTodo}
            handleImportant={this.handleImportant}
            checkboxTodoDone={this.checkboxTodoDone}
          />
        </li>
      );
    });
    return (
      <div>
        <h1>This is Todo</h1>
        <h4>{todosTitle}</h4>
        <ul className="list-group">{todoList}</ul>
        <div>
          <AddTodo
            newTodo={this.state.newTodo}
            handleChange={this.handleNewTodoChange}
            handleSubmit={this.handleSubmittingNewTodo}
          />
        </div>
      </div>
    );
  }
}

export default ListOfTodos;
