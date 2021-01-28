const card = () => {
  const cardContent = document.createElement('div');
  cardContent.classList.add('', '');

  const displayDiv = document.createElement('div');
  displayDiv.classList.add('', '');

  const title = document.createElement('h4');
  title.classList.add('', '');
  title.innerText = `Title: ${this.title}`;

  const description = document.createElement('h4');
  description.classList.add('', 's');
  description.innerText = `Description: ${this.description}`;

  const priority = document.createElement('h4');
  priority.classList.add('', '');
  priority.innerText = `Priority: ${this.priority}`;


  const dueDate = document.createElement('h4');
  dueDate.classList.add('', '');
  dueDate.innerText = `Due date: ${this.dueDate}`;

  const check = document.createElement('label');
  check.innerText = ' Completed?: ';
  const checked = document.createElement('input');
  checked.setAttribute('type', 'checkbox');
}

export default card;