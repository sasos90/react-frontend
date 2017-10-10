import React from 'react';
import ReactDOM from 'react-dom';
import UserFindUser from "./UserFindUser";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserFindUser />, div);
});
