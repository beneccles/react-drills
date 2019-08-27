import React, { Component } from "react";
import App from "../App";

class Image extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <img src={this.props.myURL} alt="Picture"></img>
        )
    }
}

export default Image;