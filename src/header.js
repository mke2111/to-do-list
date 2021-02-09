const header = () => {
  const headerCont = document.createElement('div');
  headerCont.classList.add('header-cont', 'pt-5');

  const title = document.createElement('h1');
  title.classList.add('header-title', 'text-center', 'text-blue-700', 'text-4xl', 'font-bold');
  title.innerHTML = 'Your To-Do Lists';

  headerCont.appendChild(title);

  return headerCont;
};

export default header;