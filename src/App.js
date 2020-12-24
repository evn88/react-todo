import "./App.scss";
import React from "react";
import List from "./components/List";
import InputForm from "./components/InputForm";
import Clock from "./components/Clock";

const appName = "Todo App";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  state = {
    todos: [
      { id: 1, status: true, name: "Сделать зарядку" },
      { id: 2, status: false, name: "Приготовить обед" },
      { id: 3, status: false, name: "Поработать" },
    ],
  };

  handleAddTodo(value) {
    let nextId = this.state.todos.length + 1;
    console.log(nextId);
    this.setState({
      todos: [{ id: nextId, name: value, status: false }, ...this.state.todos],
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>{appName}</h1>
          <InputForm todos={todos} onAddTodo={this.handleAddTodo} />
          <List todos={todos} />
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;
