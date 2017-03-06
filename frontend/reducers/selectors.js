const allTodos = state => {
  let keys = Object.keys(state.todos);
  return keys.map( i => state.todos[i]);
};

export { allTodos };
