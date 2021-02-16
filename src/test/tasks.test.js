describe('MODULE TASKS', () => {
  const tasks = [
    {
      id: 1,
      name: 'Name1',
      description: 'description',
      duedate: '25-02-2021',
      priority: 'HIGH',
      complete: false
    },
    {
      id: 2,
      name: 'Name2',
      description: 'description',
      duedate: '25-02-2021',
      priority: 'HIGH',
      complete: false
    },
  ];

  it('Get id from task object', () => {
    expect(tasks[0].id).toBe(1);
  });

  it('Get name from task object', () => {
    expect(tasks[0].name).toBe('Name1');
  });

  it('Get description from task object', () => {
    expect(tasks[0].description).toBe('description');
  });

  it('Get DueDate from task object', () => {
    expect(tasks[1].duedate).toBe('25-02-2021');
  });

  it('Get priority from task object', () => {
    expect(tasks[1].priority).toBe('HIGH');
  });

  it('Get complete from task object', () => {
    expect(tasks[1].complete).toBe(false);
  });
});
