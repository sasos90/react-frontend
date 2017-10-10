import React from 'react';
import ReactDOM from 'react-dom';
import TeamTactics from "./TeamTactics";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamTactics />, div);
});
