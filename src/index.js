import heading from './heading';
import Todo from './todo';
import newTodo from './newTodo';
import newPro from './newProject';
import cardProject from './status';
import cardTodo from './card';
// import card from './allDisplays';


const content = document.querySelector('#content');
content.classList.add('bg-purple-300', 'h-screen', 'p-6');

class Project {
  constructor(name) {
    this.name = name;
    // this.Id = Id;
  }
}

const display = document.createElement('div');
display.classList.add('flex', 'flex-row', 'pt-9', 'justify-around');

display.appendChild(cardProject());
display.appendChild(cardTodo());

content.appendChild(heading());
content.appendChild(newTodo());
content.appendChild(newPro());
content.appendChild(display);
// content.appendChild(cardProject());
// content.appendChild(cardTodo());

let myProjects = [];
let myTodos = [];

const todoTitle = document.querySelector('.todo-title');
const todoDescription = document.querySelector('.todo-description');
const todoDate = document.querySelector('.todo-date');
const todoPriority = document.querySelector('.todo-priority');
const submitTodo = document.querySelector('.sub-todo');
const todoCard = document.querySelector('.todo-card');

const projectTitle = document.querySelector('.pro-title');
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
};

// save todo to localstorage
const saveTodoToLocalStorage = () => {
  localStorage.setItem('myTodos', JSON.stringify(myTodos));
};

const render = () => {
  myProjects = JSON.parse(localStorage.getItem('myProjects'));
  myTodos = JSON.parse(localStorage.getItem('myTodos'));
  if (myProjects != null && myTodos != null) {
    projectCard.innerHTML = '';
    todoCard.innerHTML = '';
    myProjects.forEach(project => {
      content.appendChild(cardProject(project));
    });

    myTodos.forEach(todo => {
      content.appendChild(cardTodo(todo));
    });
  } else {
    myProjects = [];
    myTodos = [];
  }
};

const clearInput = () => {
  projectTitle.value = '';
  todoTitle.value = '';
  todoDescription.value = '';
  todoPriority.value = '';
  todoDate.value = '';
};

// save project
const saveProject = () => {
  // console.log('six');

  if (projectTitle.value === '') {
    alert('Add a project name');
  } else {
    const project = new Project(projectTitle.value);
    myProjects.push(project);
    console.log(myProjects);

    saveToLocalStorage();
    clearInput();
    formPro.classList.remove('block');
    formPro.classList.add('hidden');

    render();
  }
}

// save todo
const saveTodo = () => {
  // console.log('six');

  if (todoTitle.value === '' || todoDescription.value === '' || todoPriority.value === '' || todoDate.value === '') {
    alert('Add all todo fields');
  } else {
    const todo = new Todo(todoTitle.value, todoDescription.value, todoDate.value, todoPriority.value);
    myTodos.push(todo);
    console.log(myTodos);

    saveTodoToLocalStorage();
    clearInput();
    formCtn.classList.remove('block');
    formCtn.classList.add('hidden');

    render();
  }
}



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

proBtn.addEventListener('click', () => {
  if(formPro.classList.contains('hidden')){
    formPro.classList.remove('hidden');
    formPro.classList.add('block');
  } else if(formPro.classList.contains('block')){
    formPro.classList.remove('block');
    formPro.classList.add('hidden');
  }
});

submitProject.addEventListener('click', () => {
  saveProject();
});

if (submitTodo) {
  submitTodo.addEventListener('click', () => {
    saveTodo();
  });
}


