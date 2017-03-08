import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import {
  fetchTodos, createTodo, receiveTodo, removeTodo
} from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  createTodo: todo => dispatch(createTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  fetchTodos: todos => dispatch(fetchTodos(todos))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
