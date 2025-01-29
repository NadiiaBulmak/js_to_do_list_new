'use strict';
console.log('Script loaded!'); // Должно появиться в консоли
// Получаем элементы из DOM
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addButton = document.getElementById('add-task-btn');
// Делегирование событий для всего контейнера
listContainer.addEventListener('click', function(e) {
    const target = e.target;
    // Обработка клика по задаче
    if (target.tagName === 'LI') {
        target.classList.toggle('todo-app__item--checked');
        saveData();
    }
    // Обработка клика по крестику
    if (target.classList.contains('todo-app__item-remove')) {
        target.parentElement.remove();
        saveData();
    }
});
// Загрузка данных при инициализации
document.addEventListener('DOMContentLoaded', ()=>{
    loadData();
    // Обработчики событий
    addButton.addEventListener('click', addTask);
    inputBox.addEventListener('keypress', (e)=>{
        if (e.key === 'Enter') addTask();
    });
});
function addTask() {
    const taskText = inputBox.value.trim();
    if (!taskText) {
        alert('You have to write something!');
        return;
    }
    // Создание элементов
    const li = document.createElement('li');
    li.className = 'todo-app__item';
    li.textContent = taskText;
    const span = document.createElement('span');
    span.className = 'todo-app__item-remove';
    span.innerHTML = '&times;';
    li.appendChild(span);
    listContainer.appendChild(li);
    inputBox.value = '';
    saveData();
}
function saveData() {
    try {
        localStorage.setItem('todos', listContainer.innerHTML);
    } catch (e) {
        console.error('Save error:', e);
    }
}
function loadData() {
    try {
        const savedData = localStorage.getItem('todos');
        if (savedData) listContainer.innerHTML = savedData;
    } catch (e) {
        console.error('Load error:', e);
    }
}

//# sourceMappingURL=index.de158e3a.js.map
