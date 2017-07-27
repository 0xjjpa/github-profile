import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Intro from './components/Intro';
import Profile from './components/Profile';
import registerServiceWorker from './registerServiceWorker';

import { LOAD_PROFILES } from './constants/actions';
import api from './services/api';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';

const store = createStore(
  () => {},
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
      <Profile />
    </div>
  </Provider>,
  document.getElementById('root')
);

store.dispatch({ type: LOAD_PROFILES });

registerServiceWorker();
