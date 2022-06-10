import React from 'react';

const TodoListItem = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.removeTodo(props.todo);
  };

  const toggleDone = (e) => {
    e.preventDefault();
    props.todo.done = !props.todo.done;
    props.receiveTodo(props.todo);
  };

  const status = props.todo.done ? 'UNDO' : 'DONE';
  return (
    <li>
      {props.todo.title}
      <button onClick={handleClick}>delete</button>
      <button onClick={toggleDone}>{status}</button>
    </li>
  );
};

export default TodoListItem;
