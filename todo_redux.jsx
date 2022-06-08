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

document.addEventListener('DOMContentLoaded', function () {
  const store = configureStore;
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  window.receiveStep = receiveStep;
  window.receiveSteps = receiveSteps;
  window.removeStep = removeStep;
  ReactDOM.render(<Todos />, document.getElementById('root'));
});

const Root = () => {
  return (
    <div className="content-container">
      <h1>Todos App</h1>
    </div>
  );
};
