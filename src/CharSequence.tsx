import { Component } from "react";

class CharSequence extends Component<{text: String, onClick: (arg0: any, arg1: number) => void}> {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          border: "1px solid black",
          display: "inline-block",
          padding: "10px",
          fontSize: "18px",
        }}
      >
        {this.props.text.split("").map((c, idx) => (
          <span key={idx} onClick={($event) => this.props.onClick($event, idx)}>
            {c}
          </span>
        ))}
      </div>
    );
  }
}

export default CharSequence;
