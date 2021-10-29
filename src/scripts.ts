/* eslint-disable camelcase */
const btn__add: HTMLButtonElement = document.querySelector('.js-btn_add');
const readTask: HTMLInputElement = document.querySelector('.js__input');
// eslint-disable-next-line no-unused-vars
const svgPath = './assets/images/garbage.svg';
const svgItem = '<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" /></svg>';
const savedTasks: string[] = [];

const listContainsTask = (taskName: string): boolean => savedTasks.includes(taskName);

btn__add.addEventListener('click', (e) => {
  e.preventDefault();
  const inputText = readTask.value;
  if (!inputText) {
    return;
  }
  if (listContainsTask(inputText)) {
    return;
  }

  const listStack = document.querySelector('.js__taskList');
  const taskText = document.createTextNode(inputText);
  const svg = document.createElement('p');
  const tag = document.createElement('div');

  svg.classList.add('js__delete');
  svg.innerHTML = svgItem;
  tag.classList.add('js__delete', 'margin--bottom--7');
  svg.setAttribute('src', svgPath);
  tag.classList.add('listItem');
  tag.appendChild(taskText);
  tag.appendChild(svg);

  savedTasks.unshift(inputText);
  listStack.insertBefore(tag, listStack.firstElementChild);
  readTask.value = '';
  svg.addEventListener('click', () => {
    savedTasks.splice(savedTasks.indexOf(tag.textContent), 1);
    tag.remove();
  });
});

const themeSwitcherButton = document.querySelector('.js-theme-switcher');

themeSwitcherButton.addEventListener('click', (e) => {
  e.preventDefault();
  const themeChange = document.querySelector('.theme');
  themeChange.classList.toggle('dark__theme');
});
