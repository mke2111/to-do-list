import createTask from '../createTask';

describe('Todo list', () => {
  let todoList;

  beforeEach(() => {
    todoList = createTask('taskName', 'taskDescription', '17/02/21', 'MEDIUM');
  });

  it('check list name', () => {
    expect(todoList.name).toBe('taskName');
  });

  it('check list description', () => {
    expect(todoList.description).toBe('taskDescription');
  });

  it('check list duedate', () => {
    expect(todoList.duedate).toBe('17/02/21');
  });

  it('check list priority', () => {
    expect(todoList.priority).toBe('MEDIUM');
  });

  it('check list priority not to be low', () => {
    expect(todoList.priority).not.toBe('LOW');
  });

  it('check list when not complete', () => {
    expect(todoList.complete).toBe(false);
  });

  it('check list when complete', () => {
    todoList.complete = true;
    expect(todoList.complete).toBe(true);
  });
});