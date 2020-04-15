import React from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

export class Form extends React.Component {
  state = initialState;
  handleChange = (event) => {
    this.setState({
      [event.target.name]:
        [event.target.type] === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  isValid = () => {
    let nameError: "";
    let emailError: "";
    let passwordError: "";

    if (!this.state.password) {
      passwordError = "Must enter password";
    }
    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }
    if (!this.state.email.includes("@")) {
      emailError = "Invalid Email";
    }
    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      console.log(this.state);
      this.setState(initialState);
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
            />
          </div>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}{" "}
          </div>
          <div>
            <input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
            />
          </div>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}{" "}
          </div>
          <div>
            <input
              name="password"
              type="password"
              value={this.state.password}
              placeholder="Password"
            />
          </div>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}{" "}
          </div>
          <button type="submit" onSubmit={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
