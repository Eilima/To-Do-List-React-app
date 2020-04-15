import React from "react";
import "./App.css";
import { FetchRandomUser } from "./FetchRandomUser";
// import { ImageSlider } from "./Components/ImageSlider";
// import { MyForm } from "./Components/MyForm";
// import { Form } from "./Components/Form";

class App extends React.Component {
  state = {
    visible: true,
  };
  handleClick = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    // const buttonText = this.state.visible ? "Hide" : "Show";
    return (
      <div>
        <header className="App-header">
          <FetchRandomUser />
          {/* <button onClick={this.handleClick}>{buttonText}</button>
          {this.state.visible ? <ImageSlider /> : null}
          <MyForm />
          <Form /> */}
        </header>
      </div>
    );
  }
}

export default App;
