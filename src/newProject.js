const newPro = () => {
  const proCtn = document.createElement('div')
  proCtn.classList.add('w-3/6', 'mx-auto', 'pt-8', 'pro-form', 'hidden');

  const formPro = document.createElement('form');
  formPro.classList.add('border', 'ro', 'border-gray-800', 'flex', 'flex-col');

  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.classList.add('border', 'border-gray-400', 'py-3');
  title.setAttribute('placeholder', 'Project title');

  const submit = document.createElement('button');
  submit.textContent = 'Create Project';
  submit.classList.add('bg-blue-500', 'px-2', 'sub-pro');

  proCtn.appendChild(formPro);
  formPro.appendChild(title);
  formPro.appendChild(submit);

  return proCtn;
}

export default newPro;