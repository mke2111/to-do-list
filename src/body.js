const body = () => {
  // Project section
  const bodyCont = document.createElement('div');
  bodyCont.classList.add('body-cont', 'flex', 'w-3/6', 'mx-auto', 'pt-24');

  const projectCont = document.createElement('div');
  projectCont.classList.add('proj-cont');

  const projTitleCont = document.createElement('div');
  projTitleCont.classList.add('pro-title-cont');

  const projTitle = document.createElement('h2');
  projTitle.classList.add('pro-title');
  projTitle.innerHTML = 'MY PROJECTS';

  const listCont = document.createElement('div');
  listCont.classList.add('list-cont');

  const unList = document.createElement('ul');
  unList.classList.add('all-projects');

  const formProj = document.createElement('form');
  formProj.setAttribute('action', '')
  formProj.classList.add('pro-form', 'flex', 'flex-col');

  const inputPro = document.createElement('input');
  inputPro.classList.add('pro-input');
  inputPro.setAttribute('type', 'text')
  inputPro.setAttribute('placeholder', 'Add a New Project');

  const btnAddPro = document.createElement('button');
  btnAddPro.setAttribute('type', 'button');
  btnAddPro.classList.add('pro-btn')
  btnAddPro.innerHTML = 'New Project';

  const btnDelPro = document.createElement('button');
  btnDelPro.setAttribute('type', 'button');
  btnDelPro.classList.add('btn-delet');
  btnDelPro.innerHTML = 'Delete project';

  bodyCont.appendChild(projectCont);
  projectCont.appendChild(projTitleCont);
  projTitleCont.appendChild(projTitle);
  projectCont.appendChild(listCont);
  listCont.appendChild(unList);
  listCont.appendChild(formProj);
  formProj.appendChild(inputPro);
  formProj.appendChild(btnAddPro);
  listCont.appendChild(btnDelPro);

  // Todo List section

  const tasksCont = document.createElement('div');
  tasksCont.classList.add('task-cont');

  const listTitleCont = document.createElement('div');
  listTitleCont.classList.add('list-title-cont');

  const listTitle = document.createElement('h2');
  listTitle.classList.add('list-title');
  listTitle.innerHTML = 'MY LISTS';

  const listContainer = document.createElement('div');
  listContainer.classList.add('list-container');

  const ulList = document.createElement('ul');
  ulList.classList.add('all-lists');

  const formList = document.createElement('form');
  formList.setAttribute('action', '');
  formList.classList.add('list-form', 'flex', 'flex-col', 'border', 'border-gray-400', 'rounded-md', 'p-3' );

  const inputListTitle = document.createElement('input');
  inputListTitle.classList.add('list-title-input', 'border-b', 'border-gray-600', 'pt-2');
  inputListTitle.setAttribute('type', 'text');
  inputListTitle.setAttribute('placeholder', 'Add Title');

  const inputListDescription = document.createElement('input');
  inputListDescription.classList.add('list-description-input', 'border-b', 'border-gray-600', 'pt-2');
  inputListDescription.setAttribute('type', 'text');
  inputListDescription.setAttribute('placeholder', 'Add Description');

  const inputListDueDate = document.createElement('input');
  inputListDueDate.classList.add('list-due-date-input', 'border-b', 'border-gray-600', 'pt-2');
  inputListDueDate.setAttribute('type', 'text');
  inputListDueDate.setAttribute('placeholder', 'Set Due Date');

  const inputListPriority = document.createElement('input');
  inputListPriority.classList.add('list-priority-input', 'border-b', 'border-gray-600', 'pt-2');
  inputListPriority.setAttribute('type', 'text');
  inputListPriority.setAttribute('placeholder', 'Set Priority');

  const btnAddList = document.createElement('button');
  btnAddList.setAttribute('type', 'button');
  btnAddList.classList.add('list-add-btn', 'w-max', 'mx-auto', 'px-2', 'mt-2', 'bg-green-400', 'rounded-md');
  btnAddList.innerHTML = 'New List';

  const btnDelList = document.createElement('button');
  btnDelList.setAttribute('type', 'button');
  btnDelList.classList.add('list-delete-btn', 'bg-red-400', 'rounded-md');
  btnDelList.innerHTML = 'Delete List';

  listTitleCont.appendChild(listTitle);
  listContainer.appendChild(ulList);
  formList.appendChild(inputListTitle);
  formList.appendChild(inputListDescription);
  formList.appendChild(inputListDueDate);
  formList.appendChild(inputListPriority);
  formList.appendChild(btnAddList);
  tasksCont.appendChild(listTitleCont);
  tasksCont.appendChild(listContainer);
  listContainer.appendChild(formList);
  listContainer.appendChild(btnDelList);
  bodyCont.appendChild(tasksCont);

  // template
  const list = document.createElement('div');
  list.id = 'template';
  const input = document.createElement('input');
  input.type = 'checkbox';
  const label = document.createElement('label');

  list.appendChild(input);
  list.appendChild(label);



  return bodyCont
}

export default body;