import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reviewsReducer from './reducers/reviewsReducer';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

// Root reducer
const rootReducer = combineReducers({
  reviews: reviewsReducer,
});

// Create Redux store
const store = createStore(rootReducer);

// Create React root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render application
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
