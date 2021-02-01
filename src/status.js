const cardProject = project => {
  const cardContent = document.createElement('div');
  cardContent.classList.add('w-2/6', 'pt-9', 'project-card', 'flex', 'flex-row');

  // const header = document.createElement('h2');
  // header.innerText = 'Projects';
  // header.classList.add('mx-auto', 'text-2xl');

  const displayDiv = document.createElement('div');
  displayDiv.classList.add('flex-col', 'content-around', 'border', 'border-gray-600', 'w-48');

  const titleP = document.createElement('h4');
  titleP.classList.add('title-p');
  // titleP.innerText = `Title: `;
  if (project != null) {
    titleP.textContent = `${project.title}`;
    // displayDiv.options.add(titleP, 0);
  }
  displayDiv.appendChild(titleP);
  // cardContent.appendChild(header);
  cardContent.appendChild(displayDiv);

  return cardContent;
}

export default cardProject;