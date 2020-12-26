import { Component } from "react";

class ValidationField extends Component<{text: String}> {
  render() {
    if (this.props.text.length < 10)
      return <p style={{ color: "red" }}>Text too short</p>;
    else if (this.props.text.length > 20)
      return <p style={{ color: "red" }}>Text too long</p>;
    else return <p style={{ color: "green" }}>Just right!</p>;
  }
}

export default ValidationField;
