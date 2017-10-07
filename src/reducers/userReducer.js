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

export default userReducer;
