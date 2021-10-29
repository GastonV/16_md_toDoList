/* eslint-disable camelcase */
const btn__add: HTMLButtonElement = document.querySelector('.btn_add');
const readTask: HTMLInputElement = document.querySelector('.js__input');

const deleteTask = document.querySelector('.js__delete');
// eslint-disable-next-line no-unused-vars
const svgPath = './assets/images/garbage.svg';
const savedTasks: string[] = [];

btn__add.addEventListener('click', () => {
  const tag = document.createElement('p');
  const svg = document.createElement('img');
  const listStack = document.querySelector('.js__taskList');
  const taskText = document.createTextNode(readTask.value);

  svg.classList.add('js__delete');
  svg.setAttribute('src', svgPath);
  tag.appendChild(svg);
  tag.setAttribute('width', '100');
  tag.appendChild(taskText);

  savedTasks.unshift(readTask.value);
  listStack.insertBefore(tag, listStack.firstElementChild);
  tag.addEventListener('click', () => {
    tag.remove();
  });

  // readTask.value = "";
});


console.log(savedTasks);
