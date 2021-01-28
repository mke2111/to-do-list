import newTodo from './newTodo';

const heading = () => {
  const headDiv = document.createElement('div');
  headDiv.classList.add('text-center');

  const headContent = document.createElement('h2');
  headContent.classList.add('text-red-700', 'text-4xl');
  headContent.innerText = 'Your daily To-Do list';

  const btnDiv = document.createElement('div');
  btnDiv.classList.add('flex', 'flex-row', 'justify-around', 'mx-40', 'pt-6');

  const todoBtn = document.createElement('button');
  todoBtn.classList.add('bg-green-400', 'px-5', 'py-2', 'rounded-full');
  todoBtn.innerText = 'New To-Do';
  todoBtn.addEventListener('click', newTodo);

  const projectBtn = document.createElement('button');
  projectBtn.classList.add('bg-green-400', 'px-5', 'py-2', 'rounded-full');
  projectBtn.innerText = 'New Project';

  btnDiv.appendChild(todoBtn);
  btnDiv.appendChild(projectBtn);

  headDiv.appendChild(headContent);
  headDiv.appendChild(btnDiv);

  return headDiv;
}

export default heading;