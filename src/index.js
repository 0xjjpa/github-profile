import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Intro from './components/Intro';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const store = createStore(
  () => {},
  {},
  window['__REDUX_DEVTOOLS_EXTENSION__'] &&
    window['__REDUX_DEVTOOLS_EXTENSION__']()
);

ReactDOM.render(
  <Provider store={store}>
    <Intro />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
