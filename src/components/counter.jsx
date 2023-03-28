import React, { Component } from "react";

class Counter extends Component {
  state = {
    tags: ["tag1", "tag2", "tag2"],
  };
  render() {
    return (
      <>
        {this.state.tags.length === 0 && <p>There are no tags</p>}
        <ul>
          {this.state.tags.map((tag) => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default Counter;
