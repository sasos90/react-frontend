import React from 'react';
import ReactDOM from 'react-dom';
import TournamentDetail from "./TournamentDetail";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TournamentDetail />, div);
});
