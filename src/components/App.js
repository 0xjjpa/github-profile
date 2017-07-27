import React from 'react';

import Intro from './Intro';
import Dashboard from '../containers/Dashboard';

const App = ({ match }) => {
  return (
    <div className="App">
      <Intro />
      <Dashboard id={match.params.id} />
    </div>
  );
};

export default App;
