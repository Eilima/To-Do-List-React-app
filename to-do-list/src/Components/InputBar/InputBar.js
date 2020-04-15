import React from "react";

export class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.setState = { text: "" };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {};
  render() {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name=""
            placeholder="Add to the list"
            value={this.state.text}
            onChange={this.handleChange}
            type="text"
          />
        </form>
        <button>Add</button>
      </div>
    );
  }
}
