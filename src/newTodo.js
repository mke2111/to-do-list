const newTodo = () => {
  const formDiv = document.createElement('div');
  formDiv.classList.add('w-3/6', 'mx-auto');

  const form = document.createElement('form');
  form.classList.add('border', 'rounded-lg', 'border-gray-200');

  const title = document.createElement('input');
  title. setAttribute('type', 'text');
  title. setAttribute('placeholder', 'To-Do title');

  const description = document.createElement('input');
  description. setAttribute('type', 'text');
  description. setAttribute('placeholder', 'To-Do description');

  const dueDAte = document.createElement('input');
  dueDAte. setAttribute('type', 'date');
  dueDAte. setAttribute('placeholder', 'To-Do dueDAte');

  const priority = document.createElement('input');
  priority. setAttribute('type', 'text');
  priority. setAttribute('placeholder', 'To-Do priority');

  const submit = document.createElement('button');
  submit.textContent = 'Create To-Do';
  submit.classList.add('bg-blue-500', 'px-2');

  form.appendChild(title);
  form.appendChild(description);
  form.appendChild(dueDAte);
  form.appendChild(priority);
  form.appendChild(submit);

  formDiv.appendChild(form);

  return formDiv;
}

export default newTodo;