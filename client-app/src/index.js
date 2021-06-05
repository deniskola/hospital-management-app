import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './Global.scss';
import {Provider} from 'react-redux';
import {store} from './Components/MainView/Dashboard/actions/store';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();


