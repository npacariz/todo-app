import React from "react";
import ReactDOM from "react-dom";
import Todos from "./containers/Todos.js";

it("renders without crashing", () => {
  const div = document.createElement("li");
  ReactDOM.render(<Todos />, div);
});
