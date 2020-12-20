import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = { name: "Max", age: 23 };

  switchNameHandler = () => {
    this.setState({ name: "Min" });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, I'm a React app</h1>
          <button onClick={this.switchNameHandler}>Click me</button>
          <Person {...this.state} />
          <Person name="Foo" age="45" />
          <Person name="Bar"></Person>
        </header>
      </div>
    );
  }
}

export default App;
