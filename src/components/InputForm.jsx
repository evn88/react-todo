import "./InputForm.scss";
import React from "react";

class InputForm extends React.Component {
  render() {
    return (
      <form className="inputForm">
        <input type="text" value="test" />
        <button type="submit">⏎</button>
      </form>
    );
  }
}

export default InputForm;
