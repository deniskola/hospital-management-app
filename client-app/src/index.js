import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Router } from 'react-router-dom';
import './Global.scss';
import {Provider} from 'react-redux';
import {store} from './Components/MainView/Dashboard/actions/store';
import * as serviceWorker from './serviceWorker';
import { stores, StoreContext } from './stores/store';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

ReactDOM.render(
  <StoreContext.Provider value={stores}>
  <Provider store={store}>
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
    </React.StrictMode>
    </Provider>
  </StoreContext.Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();


