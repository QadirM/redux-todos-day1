import React from 'react';
import {uniqueId} from '../../util/util';

class TodoForm extends React.Component{
  constructor({receiveTodo}) {
    super();
    this.receiveTodo = receiveTodo.bind(this);
    this.state = {title: ''};
  }

  changeTitle(event) {
    this.setState({ title: event.target.value });
  }

  makeTodo() {
    this.receiveTodo({title: this.state.title, id: uniqueId()});
    this.setState({ title: '' });
  }

  render() {
    return (
      <div>
        <input onChange={this.changeTitle.bind(this)} value={this.state.title}/>
        <button onClick={this.makeTodo.bind(this)}>Add todo</button>
      </div>
    );
  }
}

export default TodoForm;
