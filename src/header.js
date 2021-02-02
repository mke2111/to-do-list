const header = () => {
  const headerCont = document.createElement('div');
  headerCont.classList.add('header-cont');

  const title = document.createElement('h1');
  title.classList.add('header-title');
  title.innerHTML = 'To Do list Project';

  headerCont.appendChild(title);

  return headerCont;
}

export default header;