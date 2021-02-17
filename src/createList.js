const createList = (nam) => ({
  id: Date.now().toString(),
  name: nam,
  tasks: [{
    id: Date.now().toString(),
    name: 'name',
    description: 'description',
    duedate: 'duedate',
    priority: 'priority',
    complete: false,
  }],
});

export default createList;