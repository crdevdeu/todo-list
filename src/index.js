import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { App } from './../src/modules/App';
import reducers from './redux/reducers';

import './styles.css';

const store = createStore(reducers);

const rootDiv = document.createElement('div');
rootDiv.id = 'root';

document.body.appendChild(rootDiv);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
