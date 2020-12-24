import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import _ from "loadsh";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 23 },
      { name: "Min", age: 32 },
      { name: "Medium" },
    ],
  };

  switchNameHandler = _.debounce((event) => {
    console.log(event, event.target.value);
    this.setState({ name: event.target.value });
  }, 100);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, I'm a React app</h1>
          {this.state.persons.map((person) => (
            <Person {...person} />
          ))}
        </header>
      </div>
    );
  }
}

export default App;
