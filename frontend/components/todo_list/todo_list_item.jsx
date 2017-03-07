import React from 'react';

class TodoListItem extends React.Component {

  constructor ({todo, removeTodo, receiveTodo}) {
    // console.log(receiveTodo);
    super();
    // this.todo = todo;
    this.state = {todo: todo};
    this.removeTodo = removeTodo.bind(this);
    this.receiveTodo = receiveTodo.bind(this);
  }

  flipStatus() {
    let newStatus = !this.state.todo.done;
    let newTodo = Object.assign({}, this.state.todo, {done: newStatus});
    console.log(newTodo);
    this.receiveTodo(newTodo);
    this.setState({todo: newTodo});
  }

  render() {
    let donenessLabel = this.state.todo.done ? 'Undo' : 'Done';
    return (
      <li>{ this.state.todo.title }
        <button onClick={() => this.removeTodo(this.state.todo)}>Remove</button>
        <button onClick={() => this.flipStatus()}>{donenessLabel}</button>
      </li>
    );
  }
}

export default TodoListItem;
