import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Component/Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myURL={"https://i.kym-cdn.com/entries/icons/mobile/000/005/099/bird-business-cat.jpg"}/>
      </div>
    );
  }
}

export default App;
