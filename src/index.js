import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const logger = store => next => action => {
  console.log('Count action!', action);
  next(action);
};
const middleware = composeWithDevTools(applyMiddleware(logger, thunk));

const initialState = {
  value: 0
};

function counter(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        value: state.value + 1
      };
    case 'DECREMENT':
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

const store = createStore(rootReducer, middleware);

store.subscribe(() => {
  console.log('State changed!', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
   <Counter />
  </Provider>,
  document.getElementById('root')
);
