import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 5 },
    ],
  };
  handleReset=()=>{
    const counters = this.state.counters.map(counter=>{
      counter.value=0
      return counter;
    })
    this.setState({counters})
  }
  handleDelete = (counterID)=>{
    const counters = this.state.counters.filter(cnt => cnt.id !== counterID)
    this.setState({counters})
  }
  handleIncrement = (counterID)=>{
    const {counters} = this.state
    const itemIndex = counters.findIndex(counter => counter.id === counterID);
    counters[itemIndex].value++
    this.setState(counters)
  }
  render() {
    return (
      <>
        <button onClick={this.handleReset} className="btn btn-sm btn-primary m-2">Reset</button>
        {this.state.counters.map((counter) => {
          return (
            <Counter 
              key={counter.id} 
              counter={counter} 
              onDelete={this.handleDelete} 
              onIncrement={this.handleIncrement}
            />
          );
        })}
      </>
    );
  }
}
export default Counters;
