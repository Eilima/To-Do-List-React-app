import React from "react";

export class ImageSlider extends React.Component {
  state = {
    images: [
      "https://robohash.org/1",
      "https://robohash.org/2",
      "https://robohash.org/15",
      "https://robohash.org/13",
      "https://robohash.org/12",
    ],
    counter: 0,
  };
  handleClick = () => {
    if (this.state.counter === this.state.images.length - 1)
      this.setState({ counter: 0 });
    else this.setState({ counter: this.state.counter + 1 });
  };
  handlePrevious = () => {
    if (this.state.counter === 0)
      this.setState({ counter: this.state.images.length - 1 });
    else this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.handlePrevious}>
          Click me to view the previous image
        </button>
        <img
          sytle={{
            height: 200,
            width: 200,
          }}
          src={this.state.images[this.state.counter]}
        />
        <button onClick={this.handleClick}>
          Click me to view the next image
        </button>
      </div>
    );
  }
}
