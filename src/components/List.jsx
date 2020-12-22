import "./List.scss";
import React from "react";

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <ul>
          <li>первая запись</li>
          <li>первая запись</li>
          <li>
            Если в вашем определении содержатся повторяющиеся части, то можно
            использовать нотацию repeat()
          </li>
          <li>первая запись</li>
          <li>первая запись</li>
          <li>первая запись</li>
        </ul>
      </div>
    );
  }
}

export default List;
