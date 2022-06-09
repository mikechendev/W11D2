import { connect } from 'react-redux';
import TodoList from './todo_list';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
export default TodoListContainer;
