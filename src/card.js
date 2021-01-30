const cardTodo = (todo) => {
  const cardContent = document.createElement('div');
  cardContent.classList.add('w-4/6', 'pt-9');

  const header = document.createElement('h2');
  header.innerText = 'To-D0s';
  header.classList.add('mx-auto', 'text-2xl');

  const displayDiv = document.createElement('div');
  displayDiv.classList.add('flex', 'flex-col', 'content-around', 'border', 'border-gray-600', 'w-48');

  const title = document.createElement('h4');
  title.classList.add();
  title.innerText = `Title: title`;

  const description = document.createElement('h4');
  description.classList.add();
  description.innerText = `Description: description`;

  const priority = document.createElement('h4');
  priority.classList.add();
  priority.innerText = `Priority: priority`;

  const dueDate = document.createElement('h4');
  dueDate.classList.add();
  dueDate.innerText = `Due date: dueDate`;

  const check = document.createElement('label');
  check.innerText = ' Completed?: ';
  const checked = document.createElement('input');
  checked.setAttribute('type', 'checkbox');

  displayDiv.appendChild(title);
  displayDiv.appendChild(description);
  displayDiv.appendChild(priority);
  displayDiv.appendChild(dueDate);
  displayDiv.appendChild(check);

  cardContent.appendChild(header);
  cardContent.appendChild(displayDiv);

  return cardContent;
}

const cardProject = (project) => {
  const cardContent = document.createElement('div');
  cardContent.classList.add('w-2/6', 'pt-9', 'project-card');

  const header = document.createElement('h2');
  header.innerText = 'Projects';
  header.classList.add('mx-auto', 'text-2xl');

  const displayDiv = document.createElement('div');
  displayDiv.classList.add('flex', 'flex-col', 'content-around', 'border', 'border-gray-600', 'w-48');

  const title = document.createElement('h4');
  title.classList.add();
  // title.innerText = `Title: `;
  title.innerText = `Title: ${title}`;

  displayDiv.appendChild(title);
  cardContent.appendChild(header);
  cardContent.appendChild(displayDiv);

  return cardContent;
}

const card = () => {
  const display = document.createElement('div');
  display.classList.add('flex', 'flex-row', 'pt-9', 'justify-around');

  display.appendChild(cardProject());
  display.appendChild(cardTodo());

  return display;
}

export { cardTodo, cardProject, card };