import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor(){
    super(); // invokes the constructor of the component we are extending from, allowing us to use their properties.

    this.state = {
      newVal: '',
      values: []
    }

    this.arrayAdd = this.arrayAdd.bind(this);
  }

  handleChange(value){
    this.setState({newVal: value})
  }

  // Add the new item to the array in state, and reset the basic value 
  arrayAdd(){
    let newArr = this.state.values;

      newArr.push(this.state.newVal);
      this.setState({values: newArr});
      this.setState({newVal: ''});
  }

  render() {
    // Using .map, pass each element in the array through to the component Todo, and push
    // the returned result into the displayArr array.
    let displayArr = this.state.values.map((element, index) => {
      return <Todo key={index} task={element} />; //This is where we call ToDo!
    })
    return (
      <div className="App">
      <div>
        {/* Update on Change in Input Box */}
      <input value={this.state.newVal} onChange={e => this.handleChange(e.target.value)} type="text" />
      {/* On submit, add to array, so that we don't half-words by accident */}
      <button onClick={this.arrayAdd}>Submit</button>
      </div>
      <br />
      {/* Display the Result */}
      {displayArr}
      </div>
    );
  }
}

export default App;
