import "./App.scss";
import React from "react";
import List from "./components/List";
import InputForm from "./components/InputForm";
import Clock from "./components/Clock";

const appName = "Todo App";
class App extends React.Component {
  state = {
    todos: ["one", "two", "three"],
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>{appName}</h1>
          <InputForm todos={todos} />
          <List todos={todos} />
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;
