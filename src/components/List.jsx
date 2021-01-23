import "./List.scss";
import React from "react";

class List extends React.Component {
  render() {
    console.log(this.props);
    const { todos, toggleTodo } = this.props;
    return (
      <div className="list">
        <ul>
          {todos.map(({ id, name, checked }) => {
            return (
              <li key={id}>
                <span className={checked && "done"}>
                  <input
                    type="checkbox"
                    id={"item" + id}
                    className="checkbox"
                    checked={checked}
                    onChange={() => toggleTodo(id)}
                  />
                  <label for={"item" + id}>{name}</label>
                </span>
                <button className="btn btn-delete">x</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
