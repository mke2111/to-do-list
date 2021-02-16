describe('MODULE TASKS', () => {
  const lists = [
    {
      id: 1,
      name: 'Project 1',
      tasks: [{
        id: 1,
        name: 'Name1',
        description: 'description',
        duedate: '25-02-2021',
        priority: 'HIGH',
        complete: false
      }]
    }
  ];

  it('Get id from list object', () => {
    expect(lists[0].id).toBe(1);
  });

  it('Get name from list object', () => {
    expect(lists[0].name).toBe('Project 1');
  });

  it('Get id of project from list object', () => {
    expect(lists[0].tasks[0].id).toBe(1);
  });

  it('Get description of project from list object', () => {
    expect(lists[0].tasks[0].description).toBe('description');
  });

  it('Get duedate of project from list object', () => {
    expect(lists[0].tasks[0].duedate).toBe('25-02-2021');
  });

  it('Get priority of project from list object', () => {
    expect(lists[0].tasks[0].priority).toBe('HIGH');
  });

  it('Get complete of project from list object', () => {
    expect(lists[0].tasks[0].complete).toBe(false);
  });
});
