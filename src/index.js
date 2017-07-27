import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Intro from './components/Intro';
import Dashboard from './containers/Dashboard';

import { LOAD_PROFILES } from './constants/actions';

import api from './services/api';
import githubDashboard from './reducers/index';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';

const store = createStore(
  githubDashboard,
  {},
  compose(
    applyMiddleware(api),
    window['__REDUX_DEVTOOLS_EXTENSION__'] &&
      window['__REDUX_DEVTOOLS_EXTENSION__']()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <div className="App">
      <Intro />
      <Dashboard />
    </div>
  </Provider>,
  document.getElementById('root')
);

store.dispatch({ type: LOAD_PROFILES });

registerServiceWorker();
