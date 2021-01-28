const heading = () => {
  const headDiv = document.createElement('div');
  headDiv.classList.add('text-center');

  const headContent = document.createElement('h2');
  headContent.classList.add('text-red-700', 'text-4xl');
  headContent.innerText = 'Your daily To-Do list';

  const btnDiv = document.createElement('div');
  btnDiv.classList.add('flex', 'flex-row', 'justify-around', 'mx-40', 'pt-6');

  const todoBtn = document.createElement('button');
  todoBtn.setAttribute('type', 'button');
  todoBtn.classList.add('bg-green-400', 'px-5', 'py-2', 'rounded-full', 'hidden', 'todo-btn');
  todoBtn.innerText = 'New To-Do';

  const projectBtn = document.createElement('button');
  projectBtn.setAttribute('type','button');
  projectBtn.classList.add('bg-green-400', 'px-5', 'py-2', 'rounded-full', 'pro-btn');
  projectBtn.innerText = 'New Project';

  btnDiv.appendChild(todoBtn);
  btnDiv.appendChild(projectBtn);

  headDiv.appendChild(headContent);
  headDiv.appendChild(btnDiv);

  return headDiv;
}

export default heading;