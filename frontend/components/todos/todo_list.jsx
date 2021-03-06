// export default () => <h3>Todo List goes here!</h3>;
import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            removeTodo={props.removeTodo}
            receiveTodo={props.receiveTodo}
          />
        ))}
      </ul>
      <TodoForm receiveTodo={props.receiveTodo} createTodo={props.createTodo} />
    </div>
  );
};

export default TodoList;
