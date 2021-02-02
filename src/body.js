const body = () => {
  const bodyCont = document.createElement('div');
  bodyCont.classList.add('body-cont', 'flex');

  const projectCont = document.createElement('div');
  projectCont.classList.add('proj-cont');

  const tasksCont = document.createElement('div');
  tasksCont.classList.add('task-cont');

  const projTitleCont = document.createElement('div');
  projTitleCont.classList.add('pro-title-cont');

  const projTitle = document.createElement('h2');
  projTitle.classList.add('pro-title');
  projTitle.innerHTML = 'MY PROJECT\'S LIST';

  const listCont = document.createElement('div');
  listCont.classList.add('list-cont');

  const unList = document.createElement('ul');
  unList.classList.add('all-projects');

  const formProj = document.createElement('form');
  formProj.setAttribute('action', '')
  formProj.classList.add('pro-form');

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
  bodyCont.appendChild(tasksCont);
  projectCont.appendChild(projTitleCont);
  projTitleCont.appendChild(projTitle);
  projectCont.appendChild(listCont);
  listCont.appendChild(unList);
  listCont.appendChild(formProj);
  formProj.appendChild(inputPro);
  formProj.appendChild(btnAddPro);
  listCont.appendChild(btnDelPro);

  return bodyCont
}

export default body;