import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

const initialState = {
  value: 0
};


function counter(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT":
      return {
        value: state.value + 1
      };
    case "DECREMENT":
      return {
        value: state.value - 1
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
   <Counter />
  </Provider>,
  document.getElementById('root')
);
