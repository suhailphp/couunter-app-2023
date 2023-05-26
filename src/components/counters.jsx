import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  
  render() {
    const {onReset,counters,onDelete,onIncrement,onDecrement} = this.props
    return (
      <>
        <button onClick={onReset} className="btn btn-sm btn-info m-2">Reset</button>
        {counters.map((counter) => {
          return (
            <Counter 
              key={counter.id} 
              counter={counter} 
              onDelete={onDelete} 
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          );
        })}
      </>
    );
  }
}
export default Counters;
