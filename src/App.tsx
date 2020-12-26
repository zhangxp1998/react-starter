import { Component } from "react";
import "./App.css";
import ValidationField from "./Validation";
import CharSequence from "./CharSequence";

class App extends Component {
  state = {
    text: "",
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, I'm a React app</h1>
          <input
            type="text"
            onChange={(event) => this.setState({ text: event.target.value })}
            value={this.state.text}
          ></input>
          <ValidationField text={this.state.text} />
          <CharSequence
            text={this.state.text}
            onClick={(_, idx) =>
              this.setState({
                text:
                  this.state.text.substring(0, idx) +
                  this.state.text.substring(idx + 1),
              })
            }
          />
        </header>
      </div>
    );
  }
}

export default App;
