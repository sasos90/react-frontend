import React from 'react';
import ReactDOM from 'react-dom';
import UserForum from "./UserForum";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserForum />, div);
});
