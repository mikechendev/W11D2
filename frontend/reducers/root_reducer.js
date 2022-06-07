import { createStore, combineReducers } from 'redux';
import todosReducer from './todos_reducer';

const rootReducer = combineReducers({
  todosReducer: todosReducer,
});
