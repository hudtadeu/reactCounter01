import React, { Component, Fragment } from 'react';
import Counter from './components/Counter'


export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Counter />
        <Counter />
        <Counter />
      </Fragment>
    );
  }
}