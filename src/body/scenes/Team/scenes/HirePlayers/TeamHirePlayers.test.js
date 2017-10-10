import React from 'react';
import ReactDOM from 'react-dom';
import TeamHirePlayers from "./TeamHirePlayers";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamHirePlayers />, div);
});
