import createList from '../createList';

describe('Todo list', () => {
  let newProject;

  beforeEach(() => {
    newProject = createList('Project Name');
  });

  it('check project name', () => {
    expect(newProject.name).toBe('Project Name');
  });
});