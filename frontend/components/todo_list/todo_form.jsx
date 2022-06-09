import React, { Component } from 'react';
import uniqueId from '../../util/unique_id';

class TodoForm extends Component {
  state = {
    id: uniqueId(),
    title: '',
    body: '',
    done: false,
  };

  updateTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  updateBody = (e) => {
    this.setState({ body: e.target.value });
  };

  // updateDone = (e) => {
  //   this.setState({ done: e.target.value });
  // };

  handleClick = (e) => {
    e.preventDefault();
    // this.props.receiveTodos(this.state);
    this.props.receiveTodo(this.state);
    // this.props.removeTodo(this.state);
    this.setState({
      id: uniqueId(),
      title: '',
      body: '',
      done: false,
    });
  };

  render = () => {
    return (
      <form onSubmit={this.handleClick}>
        <h1>Add Todo</h1>
        <label>
          Title
          <input
            type="text"
            value={this.state.title}
            onChange={this.updateTitle}
          />
        </label>
        <label>
          Body
          <input
            type="text"
            value={this.state.body}
            onChange={this.updateBody}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  };
}

export default TodoForm;
