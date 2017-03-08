import React from 'react';
import {uniqueId} from '../../util/util';

// TODO: When marking a todo as 'DONE' it is duplicating that todo in
// the display and the database. Come back to this. Also, clicking
// delete on a todo item deletes the last todo item.

class TodoForm extends React.Component{
  constructor({createTodo}) {
    super();
    this.createTodo = createTodo.bind(this);
    this.state = {
      title: '',
      body: ''
    };
  }

  changeTitle(event) {
    event.preventDefault();
    this.setState({ title: event.target.value });
  }


  changeBody(event) {
    event.preventDefault();
    this.setState({ body: event.target.value });
  }

  makeTodo(event) {
    event.preventDefault();
    this.createTodo({
      title: this.state.title,
      body: this.state.body,
      done: false
    }).then( () => (
      this.setState({
        title: '',
        body: ''
      })
    ));
  }

  render() {
    return (
      <div>
        <label>
          Title:
          <input onChange={this.changeTitle.bind(this)}
                 value={this.state.title}/>
        </label>
        <br></br>
        <label>
          Body:
          <input onChange={this.changeBody.bind(this)}
                 value={this.state.body}/>
        </label>
        <br></br>
        <button onClick={this.makeTodo.bind(this)}>Add todo</button>
      </div>
    );
  }
}

export default TodoForm;
