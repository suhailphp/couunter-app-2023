import React, { Component } from "react";

class Counter extends Component {
  state = {
    tags: ["sdds", "dfsdff", "sdfds"],
  };
  render() {
    return <>{this.renderList()}</>;
  }

  renderList() {
    const { tags } = this.state;
    if (tags.length === 0) {
      return <h1>No tags</h1>;
    } else {
      return (
        <ul>
          {this.state.tags.map((tag) => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>
      );
    }
  }
}

export default Counter;
