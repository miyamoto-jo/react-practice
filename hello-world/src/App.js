import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types';

const Hello = (props) => {
  return <div>こんにちは、{props.name}</div>
};

Hello.PropTypes = {
  name: PropTypes.string
};

class App extends Component {
  render() {
    return <Hello name={"jo miyamoto"} />
  }
}

export default App;
