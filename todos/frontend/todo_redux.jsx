import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { fetchTodos,
  receiveTodos,
  receiveTodo,
  removeTodo
} from './actions/todo_actions';
import Root from './components/root';
import { allTodos, allSteps, stepsByTodoId } from './reducers/selectors';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  ReactDOM.render(<Root store={ store }/>,content);
});

window.store = store;
window.fetchTodos = fetchTodos;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;
window.stepsByTodoId = stepsByTodoId;
window.allSteps = allSteps;
