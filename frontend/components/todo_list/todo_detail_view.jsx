import React from 'react';


class TodoDetailView extends React.Component{

  constructor({todo, removeTodo}){
    super();
    this.state = {todo: todo};
    this.removeTodo = removeTodo.bind(this);
  }

  render() {
    return (
      <div>
        <p>{this.state.todo.body}</p>
        <button onClick={() => this.removeTodo(this.state.todo)}>
          Delete Todo
        </button>
      </div>
    );
  }
}

export default TodoDetailView;
