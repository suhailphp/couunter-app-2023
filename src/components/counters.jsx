import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  
  render() {
    const {onReset,counters,onDelete,onIncrement} = this.props
    return (
      <>
        <button onClick={onReset} className="btn btn-sm btn-primary m-2">Reset</button>
        {counters.map((counter) => {
          return (
            <Counter 
              key={counter.id} 
              counter={counter} 
              onDelete={onDelete} 
              onIncrement={onIncrement}
            />
          );
        })}
      </>
    );
  }
}
export default Counters;
