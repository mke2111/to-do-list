import header from './header';
import body from './body';

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';

let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedProId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

const bigCont = document.querySelector('#content');

bigCont.appendChild(header());
bigCont.appendChild(body());

// Project's variables

const listConte = document.querySelector('.all-projects');
const newProForm = document.querySelector('.pro-form');
const newProInput = document.querySelector('.pro-input');
const btnAddPro = document.querySelector('.pro-btn');
const deleteProBtn = document.querySelector('.btn-delet');

// Task's variables

const tasksCont = document.querySelector('.task-cont');
const taskTitle = document.querySelector('.task-title');
const tasksCount = document.querySelector('.tasks-count');
const tasksConte = document.querySelector('.task-conteiner');
const taskTemplate = document.getElementById('task-template');

const createList = (nam) => {
  return { 
    id: Date.now().toString(),
    name: nam,
    tasks: [{
      id: 'qweqwe',
      name: 'asdqwe',
      complete: false
    }]
  }
}

const clearElement = (elem)=> {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
}

const save = () => {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(projects));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedProId);
}

const renderTaskCount = (selectedPro) => {
  const incompleteTaskCount = selectedPro.tasks.filter(task => !task.complete).length;
  const taskString = incompleteTaskCount === 1 ? 'task' : 'tasks' ;
  tasksCount.innerHTML = `${incompleteTaskCount} ${taskString} remaining`;
}

const renderTasks = (selectedPro) => {
  selectedPro.tasks.forEach(task => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector('input');
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    const label = taskElement.querySelector('label');
    label.htmlFor = task.id;
    label.append(task.name);
    tasksConte.appendChild(taskElement);
  })
}

const render = ()=> {
  clearElement(listConte);
  renderProject();

  const selectedPro = projects.find(pro => pro.id === selectedProId);

  if(selectedProId == null) {
    tasksCont.style.display = 'none';
  } else {
    tasksCont.style.display = '';
    taskTitle.innerHTML = selectedPro.name;
    renderTaskCount(selectedPro);
    clearElement(tasksConte);
    renderTasks(selectedPro);
  }
}

const renderProject = ()=> {
  projects.forEach(project => {
    const projElement = document.createElement('li');
    projElement.dataset.projId = project.id
    projElement.classList.add('list-proj');
    projElement.innerText = project.name;
    if(project.id === selectedProId) {
      projElement.classList.add('active-pro')
    }
    listConte.appendChild(projElement);
  })
}

const saveAndRender = () => {
  save();
  render();
}

bigCont.addEventListener('click', e => {
  if(e.target.tagName.toLowerCase() === 'li') {
    selectedProId = e.target.dataset.projId;
    saveAndRender();
  }
})

newProForm.addEventListener('submit', e => {
  e.preventDefault();
  const proName = newProInput.value;
  if(proName == null || proName === '') return
  const listPro = createList(proName);
  newProInput.value = null;
  projects.push(listPro)
  saveAndRender()
});

btnAddPro.addEventListener('click', e => {
  e.preventDefault();
  const proName = newProInput.value;
  if(proName == null || proName === '') return
  const listPro = createList(proName);
  newProInput.value = null;
  projects.push(listPro)
  saveAndRender()
});


deleteProBtn.addEventListener('click', e => {
  projects = projects.filter(pro => pro.id !== selectedProId);
  selectedProId = null;
  saveAndRender();
})

render();