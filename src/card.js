const cardTodo = (todo) => {
  const cardContent = document.createElement('div');
  cardContent.classList.add('pt-9', 'todo-card', 'flex', 'flex-row');

  // const header = document.createElement('h2');
  // header.innerText = 'To-D0s';
  // header.classList.add('mx-auto', 'text-2xl');

  const displayDiv = document.createElement('div');
  displayDiv.classList.add('flex', 'flex-col', 'content-around', 'border', 'border-gray-600', 'w-48' );

  const titleT = document.createElement('h4');
  titleT.classList.add();
  if (todo != null) {
    titleT.innerText = `Title: ${todo.title}`;
  }

  const description = document.createElement('h4');
  description.classList.add();
  if (todo != null) {
    description.innerText = `Description: ${todo.description}`;
  }

  const dueDate = document.createElement('h4');
  dueDate.classList.add();
  if (todo != null) {
    dueDate.innerText = `Due date: ${todo.dueDate}`;
  }

  const priority = document.createElement('h4');
  priority.classList.add();
  if (todo != null) {
    priority.innerText = `Priority: ${todo.priority}`;
  }

  const check = document.createElement('label');
  check.innerText = ' Completed?: ';
  const checked = document.createElement('input');
  checked.setAttribute('type', 'checkbox');

  displayDiv.appendChild(titleT);
  displayDiv.appendChild(description);
  displayDiv.appendChild(priority);
  displayDiv.appendChild(dueDate);
  displayDiv.appendChild(check);

  // cardContent.appendChild(header);
  cardContent.appendChild(displayDiv);

  return cardContent;
}

export default cardTodo;