import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import _ from "loadsh";

class App extends Component {
  state = { name: "Max", age: 23 };

  switchNameHandler = _.debounce((event) => {
    console.log(event, event.target.value);
    this.setState({ name: event.target.value });
  }, 100);

  render() {
    const { age, ...noAge } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, I'm a React app</h1>
          <Person {...this.state} onChange={this.switchNameHandler} />
          <Person {...this.state} age="45" />
          <Person {...noAge}></Person>
        </header>
      </div>
    );
  }
}

export default App;
