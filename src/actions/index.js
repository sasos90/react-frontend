import {LOGGED_IN, LOGGED_OUT} from "./types";

export const login = (credentials) => {
  console.log(`Login credentials: ${credentials.username}`);

  const email = 'test@email.com'; // Todo: Email is provided by API on successfull login.

  window.localStorage.setItem('user', JSON.stringify({
    username: credentials.username,
    email: email
  }));

  let user = {
    username: credentials.username,
    email: email
  };

  return setLoggedIn(user);
};

export const setLoggedIn = (user) => {
  return {
    type: LOGGED_IN,
    payload: {
      username: user.username,
      email: user.email
    }
  };
};

export const logout = () => {
  console.log(`Logout user`);

  window.localStorage.removeItem('user');
  return {
    type: LOGGED_OUT
  };
};
