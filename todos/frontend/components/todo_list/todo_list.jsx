import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchTodos();
  }

  render () {
    let listItems = this.props.todos.map( (todo, idx) => (
      <TodoListItem key={idx}
                    todo={ todo }
                    removeTodo={this.props.removeTodo}
                    receiveTodo={this.props.receiveTodo} />
      )
    );

    return(
      <div>
        <TodoForm receiveTodo={ this.props.receiveTodo }/>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default TodoList;
