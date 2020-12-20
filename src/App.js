import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, I'm a React app</h1>
          <h3>Another header: )</h3>
          <Person name="Bla" age="123" />
          <Person name="Foo" age="45" />
          <Person name="Bar">Test ?</Person>
        </header>
      </div>
    );
  }
}

export default App;
