import heading from './heading';
import newTodo from './newTodo';
import newPro from './newProject';
import card from './card';

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
