import { Component } from "react";
import React from "react";
import "./Person.css";

class Person extends Component {
  state = { show: true };
  render() {
    return (
      <div className="Person">
        <div style={{ display: this.state.show ? "" : "none" }}>
          <h3>{this.props.name}</h3>
          <p>Your name: {this.props.age || Math.ceil(Math.random() * 100)}</p>
          {this.props.children}
          <input
            type="text"
            onChange={this.props.onChange}
            placeholder={this.props.name}
          />
        </div>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle
        </button>
      </div>
    );
  }
}

export default Person;
