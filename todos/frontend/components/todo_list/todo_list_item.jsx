import React from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {

  constructor ({todo, removeTodo, receiveTodo}) {
    super();
    this.state = {todo: todo, expanded: false };
    this.removeTodo = removeTodo.bind(this);
    this.receiveTodo = receiveTodo.bind(this);
  }

  flipStatus() {
    let newStatus = !this.state.todo.done;
    let newTodo = Object.assign({}, this.state.todo, {done: newStatus});
    this.receiveTodo(newTodo);
    this.setState({todo: newTodo});
  }

  toggleDetail(){
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    let donenessLabel = this.state.todo.done ? 'Undo' : 'Done';
    let detailView = <TodoDetailView todo={ this.state.todo }
      removeTodo={ this.removeTodo }/>;
    return (
      <li>
        <h2 onClick={this.toggleDetail.bind(this)}>{ this.state.todo.title }</h2>
        <button onClick={this.flipStatus.bind(this)}>{donenessLabel}</button>
        { this.state.expanded ? detailView : null}
      </li>
    );
  }
}

export default TodoListItem;
