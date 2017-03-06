import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { allTodos } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  ReactDOM.render(<h1>Todos App</h1>,content);
});

window.store = configureStore();
