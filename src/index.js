import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from "./App";
import store from './app/store'
import {SocketContext, socket} from './app/socket/Socekt';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketContext.Provider value={socket}>
        <App />
      </SocketContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
