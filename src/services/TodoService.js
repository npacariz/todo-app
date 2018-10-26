import axios from "axios";

export default class TodoService {
  constructor() {
    axios.defaults.baseURL = "http://laravelapp.loc/api/";
    this.setAxiosDefaultAuthorizationHeader();
  }

  setAxiosDefaultAuthorizationHeader() {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  get() {
    return axios.get("todos");
  }

  create(newTodo) {
    return axios.post("todos", newTodo);
  }

  delete(id) {
    return axios.delete(`/todos/${id}`);
  }
  put(id, newTodo) {
    return axios.put(`/todos/${id}`, newTodo);
  }
}

export const todoService = new TodoService();
