import React from "react";

export class MyForm extends React.Component {
  state = {
    name: "",
    textarea: "",
    checkbox: true,
    select: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]:
        [event.target.type] === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <textarea
            name="textarea"
            value={this.state.textarea}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            name="checkbox"
            checked={this.state.checkbox}
            type="checkbox"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <select
            name="select"
            value={this.state.select}
            onChange={this.handleChange}
          >
            <option>Miss</option>
            <option>Mrs.</option>
            <option>Mr.</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
