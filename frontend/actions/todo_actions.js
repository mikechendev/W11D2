import * as APIUtil from '../util/todo_api_util';
import { RECEIVE_ERRORS } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos,
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo,
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo,
});

export const receiveErrors = (todo) => ({
  type: RECEIVE_ERRORS,
  todo,
});

export const fetchTodos = () => async (dispatch) => {
  const response = await APIUtil.getTodos();
  return dispatch(receiveTodos(response));
};

export const createTodo = (todo) => async (dispatch) => {
  const response = await APIUtil.postTodo(todo);
  return dispatch(receiveTodo(response));
};
