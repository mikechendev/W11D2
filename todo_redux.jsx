import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import {
  receiveTodo,
  receiveTodos,
  removeTodo,
} from './frontend/actions/todo_actions';
import {
  receiveStep,
  receiveSteps,
  removeStep,
} from './frontend/actions/step_actions';
import App from './frontend/components/app';
import Root from './frontend/components/root';
import { allTodos } from './frontend/reducers/selectors';
import { fetchTodos } from './frontend/util/todo_api_util';

document.addEventListener('DOMContentLoaded', function () {
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  window.receiveStep = receiveStep;
  window.receiveSteps = receiveSteps;
  window.removeStep = removeStep;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});

// const Root = () => {
//   return (
//     <div className="content-container">
//       <h1>Todos App</h1>
//     </div>
//   );
// };
