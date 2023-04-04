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
  render() {
    return (
      <>
        {this.state.counters.map((counter) => {
          return (
            <Counter value={counter.value} key={counter.id}>
              <p>Countrer #{counter.id}</p>
            </Counter>
          );
        })}
      </>
    );
  }
}

export default Counters;
