import heading from './heading';
import newTodo from './newTodo';
import newPro from './newProject';
import card from './card';

let myProjects = [];

const content = document.querySelector('#content');
content.classList.add('bg-red-50', 'h-screen', 'pt-6');

content.appendChild(heading());
content.appendChild(newTodo());
content.appendChild(newPro());
content.appendChild(card());

const todoBtn = document.querySelector('.todo-btn');
const formCtn = document.querySelector('.todo-form');

const proBtn = document.querySelector('.pro-btn');
const formPro = document.querySelector('.pro-form');

proBtn.addEventListener('click', () => {
  if(formPro.classList.contains('hidden')){
    formPro.classList.remove('hidden');
    formPro.classList.add('block');
  } else if(formPro.classList.contains('block')){
    formPro.classList.remove('block');
    formPro.classList.add('hidden');
  }
});

class Project {
  constructor (title, Id) {
    this.title = title;
    this.Id = Id;
  }
}

const updateLocalStorage = () => {
  localStorage.setItem('myProjects', JSON.stringify(myProjects));
  const curentProId = Number(localStorage.getItem('lasProjectId')) + 1;
  localStorage.setItem('lasProjectId', curentProId);
};

const titlePro = document.querySelector('.pro-title');

const render = () => {
  myProjects = JSON.parse(localStorage.getItem('myProjects'));
  if (myProjects != null) {
    bookCard.innerHTML = '';
    myProjects.forEach(book => {
      // showBooks(book);
    });
  } else {
    myProjects = [];
  }
};

const addNewProject = () => {
  let curentProId = Number(localStorage.getItem('lasProjectId'));
  if (curentProId != null) {
    curentProId += 1;
  } else {
    localStorage.setItem('lasProjectId', 0);
    curentProId = 0;
  }
  const project = new Project(titlePro.value, curentProId);
  myProjects.push(project);
  updateLocalStorage();

  render();
}

const creaProBtn = document.querySelector('.sub-pro');

// creaProBtn.addEventListener('click', () => {

// });

todoBtn.addEventListener('click', () => {
  if(formCtn.classList.contains('hidden')){
    formCtn.classList.remove('hidden');
    formCtn.classList.add('block');
  } else if(formCtn.classList.contains('block')){
    formCtn.classList.remove('block');
    formCtn.classList.add('hidden');
  }
});
