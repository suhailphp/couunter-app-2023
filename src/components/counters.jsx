import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  
  render() {
    return (
      <>
        <button onClick={this.props.onReset} className="btn btn-sm btn-primary m-2">Reset</button>
        {this.props.counters.map((counter) => {
          return (
            <Counter 
              key={counter.id} 
              counter={counter} 
              onDelete={this.props.onDelete} 
              onIncrement={this.props.onIncrement}
            />
          );
        })}
      </>
    );
  }
}
export default Counters;
