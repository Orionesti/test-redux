import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };

  render() {
    return (
      <div>
       <button onClick={this.increment}>{this.props.count}</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(Counter);
