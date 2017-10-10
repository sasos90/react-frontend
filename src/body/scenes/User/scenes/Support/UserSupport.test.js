import React from 'react';
import ReactDOM from 'react-dom';
import UserSupport from "./UserSupport";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserSupport />, div);
});
