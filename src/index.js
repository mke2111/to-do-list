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
const deleteProBtn = document.querySelector('.btn-delet');

const createList = (nam) => {
  return { 
    id: Date.now().toString(),
    name: nam,
    tasks: []
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
console.log(deleteProBtn)

deleteProBtn.addEventListener('click', e => {
  projects = projects.filter(pro => pro.id !== selectedProId);
  selectedProId = null;
  saveAndRender();
})

render();