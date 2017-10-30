export default (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_USERNAME': {
      state = {...state, name: action.payload};
      break;
    }
    case 'CHANGE_EMAIL': {
      state = {...state, email: action.payload};
      break;
    }
    case 'LOGGED_IN': {
      state = {...state,
        loggedIn: true,
        username: action.payload.username,
        email: action.payload.email
      };
      break;
    }
    case 'LOGGED_OUT': {
      state = {...state,
        loggedIn: false,
        username: null,
        email: null
      };
      break;
    }
    default: {
      // no default case
    }
  }
  return state;
};
