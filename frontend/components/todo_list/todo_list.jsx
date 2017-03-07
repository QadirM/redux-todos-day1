import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';


const TodoList = ({todos, receiveTodo, removeTodo}) => {
  let listItems = todos.map( (todo, idx) => (
    <TodoListItem key={idx} todo={ todo } removeTodo={removeTodo} receiveTodo={receiveTodo} />
    )
  );
  return(
    <div>
      <TodoForm receiveTodo={ receiveTodo }/>
      <ul>
        {listItems}
      </ul>
    </div>
  );
};

export default TodoList;
