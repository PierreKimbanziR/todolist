import React, { Component } from "react";
import "./App.css";
import TodoList from "./ToDolist";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
