import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      filter: '',
      values: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  handleChange(value){
    this.setState({filter: value})
  }

  render() {
    // Filter the values in this, and see if they have the characters from the input.
    let newArr = this.state.values.filter((el, i) => {
      return el.includes(this.state.filter);
    })

    // Map the new array to display, with the needed H2 tags.
    let displayArr = newArr.map((el, index) => {
      return <h2 key={index}>{el}</h2>
    })

    return (

      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" /> 
        {/* On change of text box, update this.state.filter to user input and display filtered list*/}
          {displayArr}
          {console.log(displayArr)}
      </div>
    );
  }
}

export default App;
