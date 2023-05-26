import React, { Component } from "react";

class Counter extends Component {
  render() {
    const {counter,onIncrement,onDelete,onDecrement,children} = this.props
    return (
      <div className="row">
        <div className="col-1">
          {children}
            <span style={{ fontSize: 20 }} className={this.getBadgeClass()}>
              {this.formatCount()}
            </span>
        </div>
        <div className="col-2">
          <button
            onClick={() => onIncrement(counter.id)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => onDecrement(counter.id)}
            className="btn btn-secondary btn-sm m-2" disabled={(counter.value < 1 ?'disabled':'')}
          >
            -
          </button>
          <button onClick={()=>onDelete(counter.id)} className="btn btn-sm btn-danger m-2">X</button>
        </div>
        
        
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
