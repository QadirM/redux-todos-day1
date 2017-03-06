import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { allTodos } from './reducers/selectors';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import Root from './components/root';

const store = configureStore();
document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  ReactDOM.render(<Root store={ store }/>,content);
});

window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
