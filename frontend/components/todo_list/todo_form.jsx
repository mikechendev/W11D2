import React, { Component } from 'react';
import uniqueId from '../../util/unique_id';

class TodoForm extends Component {
  state = {
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

  handleClick = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state);
    this.setState({
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
