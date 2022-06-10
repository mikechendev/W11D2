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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state).then(() =>
      this.setState({
        title: '',
        body: '',
      })
    );
  };

  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
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
