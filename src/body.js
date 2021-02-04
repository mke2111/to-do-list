const body = () => {
  // Projects
  const bodyCont = document.createElement('div');
  bodyCont.classList.add('body-cont', 'flex');

  const projectCont = document.createElement('div');
  projectCont.classList.add('proj-cont');

  const projTitleCont = document.createElement('div');
  projTitleCont.classList.add('pro-title-cont');

  const projTitle = document.createElement('h2');
  projTitle.classList.add('pro-title');
  projTitle.innerHTML = 'MY PROJECT\'S LIST';

  const listCont = document.createElement('div');
  listCont.classList.add('list-cont');

  const unList = document.createElement('ul');
  unList.classList.add('all-projects');

  const formProj = document.createElement('form');
  formProj.setAttribute('action', '')
  formProj.classList.add('pro-form');

  const inputPro = document.createElement('input');
  inputPro.classList.add('pro-input');
  inputPro.setAttribute('type', 'text')
  inputPro.setAttribute('placeholder', 'Add a New Project');

  const btnAddPro = document.createElement('button');
  btnAddPro.setAttribute('type', 'button');
  btnAddPro.classList.add('pro-btn')
  btnAddPro.innerHTML = 'New Project';

  const btnDelPro = document.createElement('button');
  btnDelPro.setAttribute('type', 'button');
  btnDelPro.classList.add('btn-delet');
  btnDelPro.innerHTML = 'Delete project';

  //Tasks

  const tasksCont = document.createElement('div');
  tasksCont.classList.add('task-cont');

  // Tasks Title

  const taskTitleCont = document.createElement('div');
  taskTitleCont.classList.add('task-title-cont', 'flex');

  const taskTitle = document.createElement('h2');
  taskTitle.classList.add('task-title');
  taskTitle.innerHTML = 'My tasks';

  const tasksCount = document.createElement('p');
  tasksCount.classList.add('tasks-count');
  tasksCount.innerHTML = '1 task remaining';

  // Tasks Body

  const tasksBodyCont = document.createElement('div');
  tasksBodyCont.classList.add('tasks-body');

  //-----this gonna be replaced with template------

  const taskCont = document.createElement('div');
  taskCont.classList.add('task-conteiner', 'flex');

  const taskInput = document.createElement('input');
  taskInput.classList.add('input-check');
  taskInput.type = 'checkbox';

  const taskLabel = document.createElement('label');
  taskLabel.classList.add('task-label');

  const taskLabelSpan = document.createElement('span');
  taskLabelSpan.classList.add('custom-check');
  taskLabelSpan.innerHTML = 'Test task';

  //----------------------------------------------------

  // Task Form

  const taskFormCont = document.createElement('div');
  taskFormCont.classList.add('new-task-creator');

  const taskForm = document.createElement('form');
  taskForm.classList.add('task-form');

  const taskFormInput = document.createElement('input');
  taskFormInput.type = 'text';
  taskFormInput.classList.add('task-input');
  taskFormInput.placeholder = 'Add a New task';

  const taskFormBtn = document.createElement('button');
  taskFormBtn.type = 'button';
  taskFormBtn.innerHTML = 'Create';

  bodyCont.appendChild(projectCont);
  bodyCont.appendChild(tasksCont);

  projectCont.appendChild(projTitleCont);

  projTitleCont.appendChild(projTitle);
  projectCont.appendChild(listCont);
  listCont.appendChild(unList);
  listCont.appendChild(formProj);
  formProj.appendChild(inputPro);
  formProj.appendChild(btnAddPro);
  listCont.appendChild(btnDelPro);

  tasksCont.appendChild(taskTitleCont);
  tasksCont.appendChild(tasksBodyCont);

  taskTitleCont.appendChild(taskTitle);
  taskTitleCont.appendChild(tasksCount);

  tasksBodyCont.appendChild(taskCont);
  taskCont.appendChild(taskInput);
  taskCont.appendChild(taskLabel);
  taskLabel.appendChild(taskLabelSpan);

  tasksBodyCont.appendChild(taskFormCont);
  taskFormCont.appendChild(taskForm);
  taskForm.appendChild(taskFormInput);
  taskForm.appendChild(taskFormBtn);


  return bodyCont
}

export default body;