'use strict';

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

window.addTask = function() {
  const taskText = inputBox.value.trim();
  
  if (!taskText) {
    alert('You have to write something!');
    return;
  }

  const li = document.createElement('li');
  li.className = 'todo-app__item';
  li.innerHTML = `
    ${taskText}
    <span class="todo-app__item-remove">×</span>
  `;

  li.addEventListener('click', function(e) {
    if(e.target.classList.contains('todo-app__item-remove')) {
      this.remove();
    } else {
      this.classList.toggle('todo-app__item--checked');
    }
    saveData();
  });

  listContainer.appendChild(li);
  inputBox.value = '';
  saveData();
}

function saveData() {
  localStorage.setItem('todos', listContainer.innerHTML);
}

function loadData() {
  const savedData = localStorage.getItem('todos');
  if (savedData) listContainer.innerHTML = savedData;
}

document.addEventListener('DOMContentLoaded', () => {
  loadData();
  document.querySelector('.todo-app__button').addEventListener('click', addTask);
  inputBox.addEventListener('keypress', e => e.key === 'Enter' && addTask());
});