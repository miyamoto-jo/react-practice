import React from 'react';

function Counter(props) {
  return (
    <li style={{backgroundColor:props.counter.color}} onClick={() => props.countUp(props.counter)}>
      {props.counter.id}-({props.counter.count})
    </li>
  );
}

export default Counter;
