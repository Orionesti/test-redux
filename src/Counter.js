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
    this.props.onIncrement();
  };

  decrement = () => {
    this.props.onDecrement();
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
    onIncrement: () => dispatch(doIncrement()),
    onDecrement: () => dispatch(doDecrement())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
