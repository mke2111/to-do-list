const newTodo = () => {
  const formDiv = document.createElement('div');
  formDiv.classList.add('w-3/6', 'mx-auto', 'pt-8', 'todo-form', 'hidden');

  const form = document.createElement('form');
  form.classList.add('border', 'border-gray-800', 'flex', 'flex-col');

  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.classList.add('border', 'border-gray-400', 'py-3', 'todo-title');
  title.setAttribute('placeholder', 'To-Do title');

  const description = document.createElement('input');
  description.setAttribute('type', 'text');
  description.classList.add('border', 'border-gray-400', 'py-3', 'todo-description');
  description.setAttribute('placeholder', 'To-Do description');

  const dueDAte = document.createElement('input');
  dueDAte.setAttribute('type', 'date');
  dueDAte.classList.add('border', 'border-gray-400', 'py-3', 'todo-date');
  dueDAte.setAttribute('placeholder', 'To-Do dueDAte');

  const priority = document.createElement('input');
  priority.setAttribute('type', 'text');
  priority.classList.add('border', 'border-gray-400', 'py-3', 'todo-priority');
  priority.setAttribute('placeholder', 'To-Do priority');

  const submit = document.createElement('button');
  submit.setAttribute('type', 'button');
  submit.textContent = 'Create To-Do';
  submit.classList.add('bg-blue-500', 'px-2', 'sub-todo');

  form.appendChild(title);
  form.appendChild(description);
  form.appendChild(dueDAte);
  form.appendChild(priority);
  form.appendChild(submit);

  formDiv.appendChild(form);

  return formDiv;
}

export default newTodo;