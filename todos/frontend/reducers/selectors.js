const allTodos = state => {
  let keys = Object.keys(state.todos);
  return keys.map( i => state.todos[i]);
};

const allSteps = state => {
  let keys = Object.keys(state.steps);
  return keys.map( i => state.steps[i]);
};

const stepsByTodoId = (state, todoId) => {
  return allSteps(state).filter(step => step.todo_id === todoId);
};

export { allTodos, allSteps, stepsByTodoId };
