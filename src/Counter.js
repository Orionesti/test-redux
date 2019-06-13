import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
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

export default connect(mapStateToProps)(Counter);
