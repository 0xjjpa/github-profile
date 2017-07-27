import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

import { LOAD_PROFILES } from './constants/actions';

import api from './services/api';
import githubDashboard from './reducers/index';

import { createStore, compose, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
    <BrowserRouter>
      <Switch>
        <Route path="/profile/:id" component={App} />
        <Route component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

store.dispatch({ type: LOAD_PROFILES });

registerServiceWorker();
