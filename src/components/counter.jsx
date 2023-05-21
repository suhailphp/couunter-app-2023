import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <div>
        {this.props.children}
        <span style={{ fontSize: 20 }} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-sm btn-danger m-2">Delete</button>
      </div>
    );
  }


  getBadgeClass() {
    const { value } = this.props.counter;
    let className = "badge m-2 bg-";
    return value === 0 ? className + "warning" : className + "primary";
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
