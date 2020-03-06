const addTaskForm = document.querySelector('.add-task');
const addTaskFormInput = addTaskForm.querySelector('.add-task__input-field');
const listOfTask = document.querySelector('.todos');
const searchField = document.querySelector('.search__input');
const addTaskBtn = document.querySelector('.add-task__btn');

const rankOfPriorities = {
  1: 'todos__importance--low',
  2: 'todos__importance--middle',
  3: 'todos__importance--high',
}

generateTemplateToDo = (todo) => {
  const html = `
  <li class="todos__item">
    <p class="todos__text">${todo}</p>
    <span class="todos__importance ${selectImportanceOfTask()}"></span>
    <button class="todos__delete-btn" type="button"></button>
  </li>
  `;

  listOfTask.innerHTML += html;
}

// add task

addTaskForm.addEventListener('submit', e => {
  e.preventDefault();
  const task = addTaskFormInput.value.trim();
  if (task.length) {
    generateTemplateToDo(task);
    addTaskForm.reset();
  }
});

addTaskBtn.addEventListener('click', e => {
  e.preventDefault();
  const task = addTaskFormInput.value.trim();
  if (task.length) {
    generateTemplateToDo(task);
    addTaskForm.reset();
  }
});

// delete task

listOfTask.addEventListener('click', e => {
  if (e.target.classList.contains('todos__delete-btn')) {
    e.target.parentElement.remove();
  }
});

// serach particular task

filterTasks = (match) => {
  Array.from(listOfTask.children)
    .filter((task) => !task.textContent.includes(match))
    .forEach((task) => task.classList.add('hidden'));

  Array.from(listOfTask.children)
    .filter((task) => task.textContent.includes(match))
    .forEach((task) => task.classList.remove('hidden'));
}

searchField.addEventListener('keyup', () => {
  const match = searchField.value.trim();
  filterTasks(match);
});

// select importance of task

selectImportanceOfTask = () => {
  const priorityOfTask = document.querySelector('.add-task__priority');
  if (priorityOfTask.value === '1') {
    return rankOfPriorities[1];
  } else if (priorityOfTask.value === '2') {
    return rankOfPriorities[2];
  } else if (priorityOfTask.value === '3') {   
    return rankOfPriorities[3];
  }
}