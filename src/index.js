import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { HashRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers';


import registerServiceWorker from './registerServiceWorker';
import './styles/globals.scss';
import './styles/menu.scss';
import './styles/main.scss';
import './styles/login.scss';
import './styles/title.scss';
import './styles/welcome.scss';
import './styles/vaidation.scss';
import './styles/plant.scss';
import './styles/mygarden.scss';
import './styles/crops.scss';
const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
		<HashRouter>
      <App/>
  	</HashRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
