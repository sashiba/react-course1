import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return {
        todos: updatedTodos,
      };
    });

    console.log("Changed", id);
  }

  render() {
    const todosComponents = this.state.todos.map((item) => (
      <TodoItem key={item.id} todo={item} handleChange={this.handleChange} />
    ));
    return <div className="todo-list">{todosComponents}</div>;
  }
}

export default App;
