import { Component } from "react";
import React from "react";

class Person extends Component {
  render() {
    return (
      <div className="Person">
        <h3>{this.props.name}</h3>
        <p>Your name: {this.props.age || Math.ceil(Math.random() * 100)}</p>
      </div>
    );
  }
}

export default Person;
