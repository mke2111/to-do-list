import heading from './heading';
import newTodo from './newTodo';

const content = document.querySelector('#content');
content.classList.add('bg-red-50', 'h-screen', 'pt-6');




content.appendChild(heading());
content.appendChild(newTodo());

