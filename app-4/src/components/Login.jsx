import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super()
    
        this.state = {
          user: "",
          password: ''
        }

        this.alertUser = this.alertUser.bind(this) // Since we move this to a seperate component, bind alertUser to this.
      }

      handleChange1(user){
        this.setState({user: user})
      }
    
      handleChange2(password){
        this.setState({password: password})
      }

      alertUser(){
        if (this.state.user && this.state.password){
          alert(`Username: ${this.state.user} Password: ${this.state.password}`);
        }
      }

      render() {
        return(
          // Only use () if you have a argument to passthrough using an arrow function
          <div>
        <input onChange={e => this.handleChange1(e.target.value)} type="text" />
        <input onChange={e => this.handleChange2(e.target.value)} type="text" />
        <button onClick={this.alertUser}> Login </button>
        </div>
        )
      }
}

export default Login;