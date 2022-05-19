import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterList from './CounterList.js';


class App extends Component {

  constructor() {
    super();
    this.state = {
      counters: [
        {id: 'A', count: 0, color: 'tomato'},
        {id: 'B', count: 0, color: 'skyblue'},
        {id: 'C', count: 0, color: 'limegreen'},
        {id: 'D', count: 0, color: 'gray'},
        {id: 'E', count: 0, color: 'pink'}
      ],
      total: 0
    };
    this.countUp = this.countUp.bind(this);
    this.Reset = this.Reset.bind(this);
  }
  countUp(counter) {
    this.setState(prevState => {
      const counters = prevState.counters.map(counter => {
        return {id: counter.id, count: counter.count, color: counter.color};
      });
      const pos = counters.map(counter => {
        return counter.id;
      }).indexOf(counter.id);
      counters[pos].count++;
      return {
        counters: counters,
        total: prevState.total + 1
      };
    });
  }

  Reset() {
    this.setState(prevState => {
      const counters = prevState.counters.map(counter => {
        return {id: counter.id, count: 0, color: counter.color};
      });
      return {
        counters: counters,
        total: 0
      };
    });
  }

  render() {
    return (
      <div className="container">
        <CounterList
          counters={this.state.counters}
          countUp={this.countUp}
        />
        <button onClick={this.Reset}>リセット</button>
        <div>TOTAL INVENTORY: {this.state.total}</div>
      </div>
    );
  }
}

export default App;
