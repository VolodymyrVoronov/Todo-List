const addTaskForm = document.querySelector('.add-task');
const addTaskFormInput = addTaskForm.querySelector('.add-task__input-field');
const listOfTask = document.querySelector('.todos');
const taskToDo = document.querySelector('.todos__item');
const searchField = document.querySelector('.search__input');

generateTemplateToDo = (todo) => {
  const html = `
  <li class="todos__item">
    <p class="todos__text">${todo}</p>
    <button class="todo__delete-btn" type="button"></button>
  </li>
  `;
  listOfTask.innerHTML += html;
}

// add task

addTaskForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addTaskFormInput.value.trim();
  if (todo.length) {
    generateTemplateToDo(todo);
    addTaskForm.reset();
  }
});

// delete task

listOfTask.addEventListener('click', e => {
  if (e.target.classList.contains('todo__delete-btn')) {
    e.target.parentElement.remove();
  }
});

// serach particular task

filterTasks = (match) => {
  Array.from(listOfTask.children)
    .filter((todo) => !todo.textContent.includes(match))
    .forEach((todo) => todo.classList.add('hidden'));

  Array.from(listOfTask.children)
    .filter((todo) => todo.textContent.includes(match))
    .forEach((todo) => todo.classList.remove('hidden'));
};

searchField.addEventListener('keyup', () => {
  const match = searchField.value.trim();
  filterTasks(match);
});