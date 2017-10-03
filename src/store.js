import {applyMiddleware, combineReducers, createStore} from "redux";

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

const logger = (store) => (next) => (action) => {
  console.log('action fired!!!', action);
  next();
};
const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log('action fired!!!', action);
  }
};
const middleware = applyMiddleware(logger);

const store = createStore(reducers, {
  user: {
    username: 'someuser',
    email: 'somuser@email.com'
  },
  players: []
}, middleware);
store.subscribe(() => {
  console.log('Store changed', store.getState());
});

store.dispatch({type: 'CHANGE_USERNAME', payload: 'Saso'});
store.dispatch({type: 'CHANGE_EMAIL', payload: 'changed@email.com'});
store.dispatch({type: 'INC', payload: 5});
store.dispatch({type: 'DEC', payload: 3});
