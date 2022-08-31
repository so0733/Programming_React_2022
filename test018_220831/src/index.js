import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer, { rootSaga } from './modules';
// import loggerMiddleware from './lib/loggerMiddleware';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';
import reportWebVitals from './reportWebVitals';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk, sagaMiddleware));
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware)));
sagaMiddleware.run(rootSaga);
// const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
