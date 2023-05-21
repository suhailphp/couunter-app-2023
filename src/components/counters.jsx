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
  handleDelete = (counterID)=>{
    const counters = this.state.counters.filter(cnt => cnt.id !== counterID)
    this.setState({counters})
  }
  render() {
    return (
      <>
        {this.state.counters.map((counter) => {
          return (
            <Counter value={counter.value} id={counter.id} key={counter.id} onDelete={this.handleDelete} />
          );
        })}
      </>
    );
  }
}
export default Counters;
