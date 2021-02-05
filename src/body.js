const body = () => {
  // Projects
  const bodyCont = document.createElement('div');
  bodyCont.classList.add('body-cont', 'flex', 'w-4/6', 'mx-auto', 'pt-19', 'mt-12', 'shadow-2xl', 'bg-blue-200', 'rounded-lg', 'justify-around', 'border-r-2', 'border-blue-900');

  const projectCont = document.createElement('div');
  projectCont.classList.add('proj-cont', 'border-r-2', 'border-blue-300', 'pr-5', 'w-1/4', 'p-5');

  const projTitleCont = document.createElement('div');
  projTitleCont.classList.add('pro-title-cont');

  const projTitle = document.createElement('h2');
  projTitle.classList.add('pro-title', 'border-b-2', 'w-max', 'border-gray-500');
  projTitle.innerHTML = 'MY PROJECTS';

  const listCont = document.createElement('div');
  listCont.classList.add('list-cont');

  const unList = document.createElement('ul');
  unList.classList.add('all-projects', 'text-red-600');

  const formProj = document.createElement('form');
  formProj.setAttribute('action', '');
  formProj.classList.add('pro-form', 'flex', 'flex-col');

  const inputPro = document.createElement('input');
  inputPro.classList.add('pro-input');
  inputPro.setAttribute('type', 'text');
  inputPro.setAttribute('placeholder', 'Add a New Project');

  const btnAddPro = document.createElement('button');
  btnAddPro.setAttribute('type', 'button');
  btnAddPro.classList.add('pro-btn', 'bg-green-500', 'hover:bg-green-700', 'px-2', 'py-1', 'rounded-md', 'text-white');
  btnAddPro.innerHTML = 'New Project';

  const btnDelPro = document.createElement('button');
  btnDelPro.setAttribute('type', 'button');
  btnDelPro.classList.add('btn-delet', 'bg-red-500', 'hover:bg-red-700', 'px-2', 'py-1', 'rounded-md', 'text-white', 'mt-3');
  btnDelPro.innerHTML = 'Delete project';

  // Tasks

  const tasksCont = document.createElement('div');
  tasksCont.classList.add('task-cont', 'w-3/4', 'p-5');

  // Tasks Title

  const taskTitleCont = document.createElement('div');
  taskTitleCont.classList.add('task-title-cont', 'flex', 'justify-around', 'mb-3', 'border-b-2', 'border-gray-500');

  const taskTitle = document.createElement('h2');
  taskTitle.classList.add('task-title', 'text-red-600');
  taskTitle.innerHTML = 'My tasks';

  const tasksCount = document.createElement('p');
  tasksCount.classList.add('tasks-count');
  tasksCount.innerHTML = '1 task remaining';

  // Tasks Body

  const tasksBodyCont = document.createElement('div');
  tasksBodyCont.classList.add('tasks-body');

  const taskCont = document.createElement('div');
  taskCont.classList.add('task-conteiner', 'text-blue-800');

  // Task Form

  const taskFormCont = document.createElement('div');
  taskFormCont.classList.add('new-task-creator');

  const taskForm = document.createElement('form');
  taskForm.classList.add('task-form', 'hidden', 'w-min');

  const taskFormInput = document.createElement('input');
  taskFormInput.type = 'text';
  taskFormInput.classList.add('task-input', 'border', 'border-gray-300', 'rounded-md', 'my-1');
  taskFormInput.placeholder = 'Add title';

  const taskDescription = document.createElement('input');
  taskDescription.type = 'text';
  taskDescription.classList.add('task-description', 'border', 'border-gray-300', 'rounded-md', 'my-1');
  taskDescription.placeholder = 'Add description';

  const taskDueDate = document.createElement('input');
  taskDueDate.type = 'date';
  taskDueDate.classList.add('task-duedate', 'border', 'border-gray-300', 'rounded-md', 'my-1');
  taskDueDate.placeholder = 'Add duedate';

  const taskPriority = document.createElement('input');
  taskPriority.type = 'text';
  taskPriority.classList.add('task-priority', 'border', 'border-gray-300', 'rounded-md', 'my-1');
  taskPriority.placeholder = 'Add priority';

  const taskFormBtn = document.createElement('button');
  taskFormBtn.classList.add('create-task-btn', 'bg-green-500', 'hover:bg-green-700', 'px-2', 'py-1', 'rounded-md', 'text-white');
  taskFormBtn.type = 'button';
  taskFormBtn.innerHTML = 'Create';

  const error = document.createElement('h6');
  error.innerText = 'Enter all form fields';
  error.style.display = 'none';
  error.classList.add('text-red-700', 'text-xs', 'error');

  // Task delete button

  const deleteCont = document.createElement('div');
  deleteCont.classList.add('delete-cont', 'flex', 'justify-between', 'w-3/6', 'pt-5');

  const clearTaskBtn = document.createElement('button');
  clearTaskBtn.classList.add('clear-btn', 'bg-red-500', 'hover:bg-red-700', 'px-2', 'py-1', 'rounded-md', 'text-white');
  clearTaskBtn.type = 'button';
  clearTaskBtn.innerHTML = 'Clear Completed';

  const addTask = document.createElement('button');
  addTask.classList.add('add-form', 'bg-blue-500', 'hover:bg-blue-700', 'px-2', 'py-1', 'rounded-md', 'text-white');
  addTask.type = 'button';
  addTask.innerHTML = 'Add Task';

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
  tasksCont.appendChild(deleteCont);

  taskTitleCont.appendChild(taskTitle);
  taskTitleCont.appendChild(tasksCount);

  tasksBodyCont.appendChild(taskCont);

  tasksBodyCont.appendChild(taskFormCont);
  taskFormCont.appendChild(taskForm);
  taskForm.appendChild(taskFormInput);
  taskForm.appendChild(taskDescription);
  taskForm.appendChild(taskDueDate);
  taskForm.appendChild(taskPriority);
  taskForm.appendChild(error);
  taskForm.appendChild(taskFormBtn);

  deleteCont.appendChild(clearTaskBtn);
  deleteCont.appendChild(addTask);

  return bodyCont;
};

export default body;