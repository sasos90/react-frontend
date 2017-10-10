import React from 'react';
import ReactDOM from 'react-dom';
import TournamentOverview from "./TournamentOverview";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TournamentOverview />, div);
});
