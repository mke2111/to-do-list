const createTask = (name, description, duedate, priority) => ({
  id: Date.now().toString(),
  name,
  description,
  duedate,
  priority,
  complete: false,

});

export default createTask;