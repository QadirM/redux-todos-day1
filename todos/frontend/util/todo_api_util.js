const fetchTodos = () => (
  $.ajax({
    type: "GET",
    url: "api/todos"
  })
);

export { fetchTodos };
