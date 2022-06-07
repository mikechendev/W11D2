import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import {
  receiveTodo,
  receiveTodos,
  removeTodo,
} from './frontend/actions/todo_actions';

document.addEventListener('DOMContentLoaded', function () {
  const store = configureStore;
  window.store = store;
  ReactDOM.render(<Root />, document.getElementById('root'));
});

const Root = () => {
  return (
    <div className="content-container">
      <h1>Todos App</h1>
    </div>
  );
};
