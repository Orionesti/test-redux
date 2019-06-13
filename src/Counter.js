import React, { Component } from 'react';
import { connect } from 'react-redux';

const increment = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: 'INCREMENT'})
  }, 1000)
}

const decrement = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: 'DECREMENT'})
  }, 1000)
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
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
