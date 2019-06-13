import React, { Component } from 'react';
import { connect } from 'react-redux';

function doIncrement() {
  return { type: 'INCREMENT'}
}

function doDecrement() {
  return { type: 'DECREMENT'}
}

class Counter extends Component {
  increment = () => {
    this.props.doIncrement();
  };

  decrement = () => {
    this.props.doDecrement();
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
          <span>{this.props.count}</span>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter.value
  }
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(doIncrement()),
    decrement: () => dispatch(doDecrement())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
