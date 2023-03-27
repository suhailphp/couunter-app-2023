import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  render() {
    return (
      <>
        <span style={{ fontSize: 20 }} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>
      </>
    );
  }
  getBadgeClass() {
    const { count } = this.state;
    let className = "badge m-2 bg-";
    return count === 0 ? className + "warning" : className + "primary";
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
