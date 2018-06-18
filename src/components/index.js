import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

require('./styles/home.scss')
require('./styles/header.scss')
require('./styles/footer.scss')
require('./styles/resume.scss')
require('./styles/projects.scss')
require('./styles/projMenu.scss')
require('./styles/mkc.scss')
ReactDOM.render(
  <HashRouter>
  	<App />
  </HashRouter>,
   document.getElementById('root'));
registerServiceWorker();
