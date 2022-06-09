import React, { Component } from 'react';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = props.todo;
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  };

  toggleDone = (e) => {
    e.preventDefault();
    if (this.state.done) {
      this.setState({ done: false }, () => {
        this.props.receiveTodo(this.state);
      });
    } else {
      this.setState({ done: true }, () => {
        this.props.receiveTodo(this.state);
      });
    }
  };

  render = () => {
    const { todo, removeTodo, receiveTodo } = this.props;
    const status = todo.done ? 'DONE' : 'UNDO';
    return (
      <li>
        {todo.title}
        <button onClick={this.handleClick}>delete</button>
        <button onClick={this.toggleDone}>{status}</button>
      </li>
    );
  };
}

export default TodoListItem;
