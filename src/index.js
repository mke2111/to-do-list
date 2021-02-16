import header from './header';
import body from './body';

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
// const LOCAL_STORAGE_SELECTED_TASK_ID = 'task.selectedTaskId';

let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedProId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);
// let selectedTaskId = localStorage.getItem(LOCAL_STORAGE_SELECTED_TASK_ID);

const bigCont = document.querySelector('#content');
bigCont.classList.add('bg-gray-200', 'h-screen');

bigCont.appendChild(header());
bigCont.appendChild(body());

const modal = document.getElementById('myModal');

// Project's variables

const listConte = document.querySelector('.all-projects');
const newProInput = document.querySelector('.pro-input');
const btnAddPro = document.querySelector('.pro-btn');
const deleteProBtn = document.querySelector('.btn-delet');

// Task's variables

const tasksCont = document.querySelector('.task-cont');
const taskTitle = document.querySelector('.task-title');
const tasksCount = document.querySelector('.tasks-count');
const tasksConte = document.querySelector('.task-conteiner');
const taskTemplate = document.getElementById('task-template');

// Task's Form

const newTaskForm = document.querySelector('.task-form');
const newTaskInput = document.querySelector('.task-input');
const newTaskDescription = document.querySelector('.task-description');
const newTaskDuedate = document.querySelector('.task-duedate');
const newTaskPriority = document.querySelector('.task-priority');
const taskFormBtn = document.querySelector('.create-task-btn');
const addTask = document.querySelector('.add-form');
const error = document.querySelector('.error');

// Clear complete task button

const clearTaskBtn = document.querySelector('.clear-btn');

// Edit task form

const editTaskForm = document.querySelector('.task-form-edit');
const editTaskInput = document.querySelector('.task-input-edit');
const editTaskDescription = document.querySelector('.task-description-edit');
const editTaskDuedate = document.querySelector('.task-duedate-edit');
const editTaskPriority = document.querySelector('.task-priority-edit');
const taskFormEditBtn = document.querySelector('.edit-task-btn');

// Edit task button

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

// default project

const def = () => {
  const defaultProject = createList('Default');
  let count = false;

  projects.forEach(project => {
    if (project.name === 'Default') {
      count = true;
    }
  });

  if (count === false) {
    projects.push(defaultProject);
    count = true;
  }
};

const createTask = (name, description, duedate, priority) => ({
  id: Date.now().toString(),
  name,
  description,
  duedate,
  priority,
  complete: false,

});

const clearElement = (elem) => {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

const save = () => {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(projects));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedProId);
  // localStorage.setItem(LOCAL_STORAGE_SELECTED_TASK_ID, selectedTaskId);
};

const renderTaskCount = (selectedPro) => {
  const incompleteTaskCount = selectedPro.tasks.filter(task => !task.complete).length;
  const taskString = incompleteTaskCount === 1 ? 'task' : 'tasks';
  tasksCount.innerHTML = `${incompleteTaskCount} ${taskString} remaining`;
};

const renderTasks = (selectedPro) => {
  selectedPro.tasks.forEach(task => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector('input');
    checkbox.id = task.id;
    checkbox.checked = task.complete;

    const label = taskElement.querySelector('label');
    label.htmlFor = task.id;
    label.append(task.name);

    const description = taskElement.querySelector('.description');
    description.htmlFor = task.id;
    description.append(task.description);

    const duedate = taskElement.querySelector('.duedate');
    duedate.htmlFor = task.id;
    duedate.append(task.duedate);

    const priority = taskElement.querySelector('.priority');
    priority.htmlFor = task.id;
    priority.append(task.priority);

    const editTaskBtn = taskElement.querySelector('.edit');
    editTaskBtn.dataset.taskId = task.id;

    editTaskBtn.addEventListener('click', e => {
      if (task.complete) {
        editTaskInput.value = task.name;
        editTaskDescription.value = task.description;
        editTaskDuedate.value = task.duedate;
        editTaskPriority.value = task.priority;

        if (editTaskForm.classList.contains('hidden')) {
          editTaskForm.classList.remove('hidden');
          editTaskForm.classList.add('block');
        } else {
          editTaskForm.classList.remove('block');
          editTaskForm.classList.add('hidden');
        }

        const selectedPro = projects.find(pro => pro.id === selectedProId);
        selectedPro.tasks = selectedPro.tasks.filter(task => !task.complete);
      } else {
        modal.style.display = 'block';

        window.onclick = e => {
          if (e.target === modal) {
            modal.style.display = 'none';
          }
        };
      }
    });
    tasksConte.appendChild(taskElement);
  });
};

const renderProject = () => {
  projects.forEach(project => {
    const projElement = document.createElement('li');
    projElement.dataset.projId = project.id;
    projElement.classList.add('list-proj', 'cursor-pointer', 'pb-2', 'font-medium');
    projElement.innerText = project.name;
    if (project.id === selectedProId) {
      projElement.classList.add('active-pro', 'font-bold');
    }
    listConte.appendChild(projElement);
  });
};

const render = () => {
  clearElement(listConte);
  def();
  renderProject();

  const selectedPro = projects.find(pro => pro.id === selectedProId);

  if (selectedProId == null) {
    tasksCont.style.display = 'none';
  } else {
    tasksCont.style.display = '';
    taskTitle.innerHTML = selectedPro.name;
    renderTaskCount(selectedPro);
    clearElement(tasksConte);
    renderTasks(selectedPro);
  }
};

const saveAndRender = () => {
  save();
  render();
};

bigCont.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedProId = e.target.dataset.projId;
    saveAndRender();
  }
});

taskFormBtn.addEventListener('click', e => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  const taskDescription = newTaskDescription.value;
  const taskDuedate = newTaskDuedate.value;
  const taskPriority = newTaskPriority.value;
  if (taskName === '' || taskDescription === '' || taskDuedate === '' || taskPriority === '') {
    error.style.display = 'block';
    return;
  }
  error.style.display = 'none';

  const listTask = createTask(taskName, taskDescription, taskDuedate, taskPriority);

  const inputs = [newTaskInput, newTaskDescription, newTaskDuedate, newTaskPriority];
  inputs.forEach(input => {
    input.value = null;
  });

  const selectedPro = projects.find(pro => pro.id === selectedProId);
  selectedPro.tasks.push(listTask);
  newTaskForm.classList.remove('block');
  newTaskForm.classList.add('hidden');
  saveAndRender();
});

taskFormEditBtn.addEventListener('click', e => {
  e.preventDefault();
  const taskName = editTaskInput.value;
  const taskDescription = editTaskDescription.value;
  const taskDuedate = editTaskDuedate.value;
  const taskPriority = editTaskPriority.value;
  if (taskName === '' || taskDescription === '' || taskDuedate === '' || taskPriority === '') {
    error.style.display = 'block';
    return;
  }
  error.style.display = 'none';

  const listTask = createTask(taskName, taskDescription, taskDuedate, taskPriority);

  const inputs = [editTaskInput, editTaskDescription, editTaskDuedate, editTaskPriority];
  inputs.forEach(input => {
    input.value = null;
  });

  const selectedPro = projects.find(pro => pro.id === selectedProId);
  selectedPro.tasks.push(listTask);
  editTaskForm.classList.remove('block');
  editTaskForm.classList.add('hidden');
  saveAndRender();
});

tasksConte.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'input') {
    const selectedPro = projects.find(pro => pro.id === selectedProId);
    const selectedTask = selectedPro.tasks.find(task => task.id === e.target.id);
    selectedTask.complete = e.target.checked;
    save();
    renderTaskCount(selectedPro);
  }
});

btnAddPro.addEventListener('click', e => {
  e.preventDefault();
  const proName = newProInput.value;
  if (proName == null || proName === '') return;
  const listPro = createList(proName);
  newProInput.value = null;
  projects.push(listPro);
  saveAndRender();
});

deleteProBtn.addEventListener('click', e => {
  projects = projects.filter(pro => pro.id !== selectedProId);
  selectedProId = null;
  saveAndRender();
});

clearTaskBtn.addEventListener('click', e => {
  const selectedPro = projects.find(pro => pro.id === selectedProId);
  selectedPro.tasks = selectedPro.tasks.filter(task => !task.complete);
  saveAndRender();
});

addTask.addEventListener('click', () => {
  if (newTaskForm.classList.contains('hidden')) {
    newTaskForm.classList.remove('hidden');
    newTaskForm.classList.add('block');
  } else {
    newTaskForm.classList.remove('block');
    newTaskForm.classList.add('hidden');
  }
});

render();

export { createTask };