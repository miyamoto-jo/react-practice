import React from 'react';
import Counter from './Counter.js';

function CounterList(props) {
  const counters = props.counters.map(counter => {
    return (
      <Counter
        counter={counter}
        key={counter.id}
        countUp={props.countUp}
      />
    );
  });
  return (
    <ul>
      {counters}
    </ul>
  );
}

export default CounterList;
