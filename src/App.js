import React, { Component } from 'react';
import Counters from "./components/counters";
import NavBar from './components/navBar';

class App extends Component {
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
  handleDecrement = (counterID)=>{
    const {counters} = this.state
    const itemIndex = counters.findIndex(counter => counter.id === counterID);
    counters[itemIndex].value--
    this.setState(counters)
  }
  render() { 
    return (
      <>
      <NavBar totalCounters={this.state.counters.filter(counter=>counter.value > 0).length}></NavBar>
      <main className="container">
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        >
        </Counters>
      </main>
    </>
    );
  }
}
export default App;


