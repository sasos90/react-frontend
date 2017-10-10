import React from 'react';
import ReactDOM from 'react-dom';
import TeamPlayers from "./TeamPlayers";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamPlayers />, div);
});
