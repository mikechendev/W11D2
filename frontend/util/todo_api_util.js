export const getTodos = () => {
  $.ajax({
    method: 'GET',
    url: './api/todos',
  });
};

export const postTodos = (todo) => {
  $.ajax({
    method: 'POST',
    url: './api/todos',
  });
};
