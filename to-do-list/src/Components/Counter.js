import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleClick}>Click me to increment</button>
          <button onClick={this.handleDecrement}>Click me to decrement</button>
        </div>
        <div align="center">{this.state.counter}</div>
      </div>
    );
  }
}
