import header from './header';
import body from './body';

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';

let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedProId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

const bigCont = document.querySelector('#content');

bigCont.appendChild(header());
bigCont.appendChild(body());

const listConte = document.querySelector('.all-projects');
const newProForm = document.querySelector('.pro-form');
const newProInput = document.querySelector('.pro-input');
const addProBtn = document.querySelector('.pro-btn');
const deleteProBtn = document.querySelector('.btn-delet');

// todos
const todoContainer = document.querySelector('.task-cont');
const todoLists = document.querySelector('.all-lists');
const projectTitle = document.querySelector('.list-title');
const listForm = document.querySelector('.list-form');
const listTitle = document.querySelector('.list-title-input');
const listDescription = document.querySelector('.list-description-input');
const listDueDate = document.querySelector('.list-due-date-input');
const listPriority = document.querySelector('.list-priority-input');
const deleteListBtn = document.querySelector('.list-delete-btn');
const listTemp = document.querySelector('#list-template');
const newListInput = document.querySelector('.list-input');
const dispBtnTask = document.querySelector('.btn-new-task');
const listCount = document.querySelector('.list-count');

const createList = (nam) => {
  return { 
    id: Date.now().toString(),
    name: nam,
    lists: [{
      id: 1,
      title: 'sdqweq',
      description: 'aasdqwd',
      duedate: 'adqweqw',
      priority: 'asdqwe',
      complete: false
    }]
  }
}

const createTodo = (title, description, duedate, priority) => {
  return { 
    id: Date.now().toString(),
    title: title,
    description: description,
    duedate: duedate,
    priority: priority,
    complete: false
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

const render = ()=> {
  clearElement(listConte);
  renderProjects();

  const selectedProject = projects.find(project => project.id === selectedProId);
  if (selectedProId == null) {
    todoContainer.style.display = 'none';
  } else {
    todoContainer.style.display = '';
    projectTitle.innerText = selectedProject.name;
    renderCountTasks(selectedProject)
    clearElement(todoLists);
    renderLists(selectedProject); 
  }
}

const renderCountTasks = (selectedProject) => {
  const incomList = selectedProject.lists.filter(list => !list.complete).length;
  const listString = incomList === 1 ? 'task' : 'tasks';
  listCount.innerHTML = `${incomList} ${listString} remaining`;
}

const renderLists = (selectedProject) => {
  selectedProject.lists.forEach(list => {
    const listElement = document.importNode(listTemp.content, true);
    const checkbox = listElement.querySelector('.list-input');
    console.log(checkbox);
    checkbox.id = list.id;
    checkbox.checked = list.complete;

    const label = listElement.querySelector('label');
    label.htmlFor = list.id;
    label.append(list.name);

    todoLists.appendChild(listElement);
  })
}

const renderProjects = () => {
  projects.forEach(project => {
    const projElement = document.createElement('li');
    projElement.dataset.projId = project.id
    projElement.classList.add('list-proj');
    projElement.innerText = project.name;
    if(project.id === selectedProId) {
      projElement.classList.add('active-pro');
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

addProBtn.addEventListener('click', e => {
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

dispBtnTask.addEventListener('click', e => {
  e.preventDefault();
  if(listForm.classList.contains('hidden')){
    listForm.classList.remove('hidden');
    listForm.classList.add('flex');
  } else {
    listForm.classList.remove('flex');
    listForm.classList.add('hidden');
  }
})

listForm.addEventListener('click', e => {
  e.preventDefault();
  if(listTitle.value == null || listTitle.value === '' || listDescription.value == null || listDescription.value === '' || listDueDate.value == null || listDueDate.value === '' || listPriority.value == null || listPriority.value === '') return;

  const listTodo = createTodo(listTitle.value, listDescription.value, listDueDate.value, listPriority.value);
  listTitle.value = null;
  listDescription.value = null;
  listDueDate.value = null;
  listPriority.value = null;
  
  const selectedProject = projects.find(project => project.id === selectedProId);
  selectedProject.lists.push(listTodo);
  saveAndRender()
});

render();