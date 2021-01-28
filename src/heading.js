const heading = () => {
  const headDiv = document.createElement('div');
  headDiv.classList.add('text-center', 'text-4xl');

  const headContent = document.createElement('h2');
  headContent.classList.add('text-red-700');
  headContent.innerText = 'Your daily To-Do list';

  headDiv.appendChild(headContent);

  return headDiv;
}

export default heading;