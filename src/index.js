import heading from './heading';

const content = document.querySelector('#content');
content.classList.add('bg-red-50', 'h-screen', 'pt-6');

content.appendChild(heading());

