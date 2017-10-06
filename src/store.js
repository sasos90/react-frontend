import {applyMiddleware, combineReducers, createStore} from "redux";
// auto logger
import { createLogger } from 'redux-logger';
// just for using async dispatches
import thunk from 'redux-thunk';
// for normal dispatch with promise in payload for example
import promise from 'redux-promise-middleware';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_USERNAME': {
      state = {...state, name: action.payload};
      break;
    }
    case 'CHANGE_EMAIL': {
      state = {...state, email: action.payload};
      break;
    }
    default: {
      // no default case
    }
  }
  return state;
};

const playersReducer = (state = [], action) => {
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  players: playersReducer
});

/* Custom middlewares */
/*const logger = (store) => (next) => (action) => {
  console.log('action fired!!!', action);
  next();
};*/
/*const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log('action fired!!!', action);
  }
};*/
const middleware = applyMiddleware(promise(), thunk, createLogger());

const store = createStore(reducers, {
  user: {
    username: 'someuser',
    email: 'somuser@email.com'
  },
  players: []
}, middleware);

/* How to subscribe to store */
/*store.subscribe(() => {
  console.log('Store changed', store.getState());
});*/

/* Examples of dispatches */
// store.dispatch({type: 'CHANGE_USERNAME', payload: 'Saso'});
// store.dispatch({type: 'CHANGE_EMAIL', payload: 'changed@email.com'});
// store.dispatch({type: 'INC', payload: 5});
// store.dispatch({type: 'DEC', payload: 3});
// async
/*store.dispatch((dispatch) => {
  // do some async and dispatch
  dispatch({type: 'INC', payload: 2});
});*/
// async with promise middleware -> you have then PENDING, FULFILLED, REJECTED actions automatically. it's cleaner.
// so: INC_PENDING, INC_FULFILLED, INC_REJECTED
/*store.dispatch({
  type: 'INC',
  payload: ''//http.get(...)
});*/
export default store;
