import heading from './heading';
import newTodo from './newTodo';
import newPro from './newProject';
import { cardTodo, cardProject, card} from './card';

// class Project {
//   constructor (title) {
//     this.title = title;
//     // this.Id = Id;
//   }
// }

function Project(title = 'default') {
  this.title = title;
}

let myProjects = [];

const content = document.querySelector('#content');
content.classList.add('bg-purple-300', 'h-screen', 'p-6');



content.appendChild(heading());
content.appendChild(newTodo());
content.appendChild(newPro());
content.appendChild(card());

const title = document.querySelector('.pro-title');
const projectCard = document.querySelector('.project-card');
const submitProject = document.querySelector('.sub-project');

const todoBtn = document.querySelector('.todo-btn');
const formCtn = document.querySelector('.todo-form');

const proBtn = document.querySelector('.pro-btn');
const formPro = document.querySelector('.pro-form');




// const updateLocalStorage = () => {
//   localStorage.setItem('myProjects', JSON.stringify(myProjects));
//   const curentProId = Number(localStorage.getItem('lasProjectId')) + 1;
//   localStorage.setItem('lasProjectId', curentProId);
// };


// save project to localstorage
const saveToLocalStorage = () => {
  localStorage.setItem('myProjects', JSON.stringify(myProjects));
}

// save project
const saveProject = () => {
  // console.log('six');

  if (title.value === '') {
    alert('Add a project name');
  } else {
    const project = new Project(title.value);
    myProjects.push(project);
    saveToLocalStorage();

    render();
  }
}


// const titlePro = document.querySelector('.pro-title');

const render = () => {
  myProjects = JSON.parse(localStorage.getItem('myProjects'));
  if (myProjects != null) {
    projectCard.innerHTML = '';
    myProjects.forEach(project => {
      cardProject(project);
    });
  } else {
    myProjects = [];
  }
};

// const addNewProject = () => {
//   let curentProId = Number(localStorage.getItem('lasProjectId'));
//   if (curentProId != null) {
//     curentProId += 1;
//   } else {
//     localStorage.setItem('lasProjectId', 0);
//     curentProId = 0;
//   }
//   const project = new Project(titlePro.value, curentProId);
//   myProjects.push(project);
//   updateLocalStorage();

//   render();
// }

// const creaProBtn = document.querySelector('.sub-pro');

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

// if (submitProject) {
  submitProject.addEventListener('click', () => {
    saveProject();
  });
// }

proBtn.addEventListener('click', () => {
  if(formPro.classList.contains('hidden')){
    formPro.classList.remove('hidden');
    formPro.classList.add('block');
  } else if(formPro.classList.contains('block')){
    formPro.classList.remove('block');
    formPro.classList.add('hidden');
  }
});


