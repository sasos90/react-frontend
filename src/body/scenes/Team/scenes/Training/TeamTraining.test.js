import React from 'react';
import ReactDOM from 'react-dom';
import TeamTraining from "./TeamTraining";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamTraining />, div);
});
