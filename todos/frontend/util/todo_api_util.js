export const fetchTodos = () => (
  $.ajax({
    type: "GET",
    url: "api/todos"
  })
);

export const addTodo = (todo) => (
  $.ajax({
    type: "POST",
    url: "api/todos",
    data: { todo }
  })
);
