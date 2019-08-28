import React, { Component } from 'react';

class Todo extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        // Since we only be getting one element in at a time, return the element in-between
        // paragraph tags.
        return(
         <p>{this.props.task}</p>
        )
    }
}

export default Todo;