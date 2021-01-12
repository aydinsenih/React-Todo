import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValues: "",
    };
  }

  handleChange = (evt) => {
    this.setState({
      inputValues: evt.target.value,
    });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.handleItemAdd(this.state.inputValues);
    this.setState({
      inputValues: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.inputValues}
          onChange={this.handleChange}
          type="text"
          name="todo"
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
