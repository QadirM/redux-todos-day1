const todoApiUtil = () => (
  $.ajax({
    type: "GET",
    url: "api/todos"
  })
);

export default todoApiUtil;
