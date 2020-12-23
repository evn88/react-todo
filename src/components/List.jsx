import "./List.scss";
import React from "react";

class List extends React.Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="list">
        <ul>
          {todos.map((item, index) => {
            return <li key={index}> {item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
