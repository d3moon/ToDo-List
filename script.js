const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoButton = document.querySelector('#todo-button');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', addTodo);

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  const editButton = document.createElement('button');
  editButton.innerHTML = '<i class="fas fa-edit"></i>';
  editButton.classList.add('edit-btn');
  todoDiv.appendChild(editButton);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  trashButton.addEventListener('click', removeTodo);

  todoList.appendChild(todoDiv);

  todoInput.value = '';

  completedButton.addEventListener('click', completeTodo);
  editButton.addEventListener('click', editTodo);
  trashButton.addEventListener('click', removeTodo);
}

function completeTodo() {
  const todoItem = this.parentElement;
  todoItem.classList.toggle('completed');
}

function editTodo() {
  const todoItem = this.parentElement;
  const todoText = todoItem.querySelector('.todo-item').innerText;

  const editForm = document.createElement('form');
  const editInput = document.createElement('input');
  const saveButton = document.createElement('button');

  editInput.value = todoText;
  saveButton.innerText = 'Save';

  editForm.appendChild(editInput);
  editForm.appendChild(saveButton);

  todoItem.replaceChild(editForm, todoItem.querySelector('.todo-item'));

  saveButton.addEventListener('click', function (event) {
    event.preventDefault();

    const updatedTodo = editInput.value;
    const newTodo = document.createElement('li');
    newTodo.innerText = updatedTodo;

    todoItem.replaceChild(newTodo, editForm);
  });
}


function removeTodo() {
  const todoItem = this.parentElement;
  todoItem.classList.add('fall');
  todoItem.addEventListener('transitionend', function () {
    todoItem.remove();
  });
}