import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import _ from "loadsh";

class App extends Component {
  state = { name: "Max", age: 23 };

  switchNameHandler = _.debounce((event) => {
    this.setState({ name: event.target.value });
  }, 300);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, I'm a React app</h1>
          <Person {...this.state} onChange={this.switchNameHandler} />
          <Person name="Foo" age="45" />
          <Person name="Bar"></Person>
        </header>
      </div>
    );
  }
}

export default App;
