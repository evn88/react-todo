import "./List.scss";
import React from "react";

class List extends React.Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="list">
        <ul>
          {todos.map(({ id, name }) => {
            return <li key={id}> {name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
