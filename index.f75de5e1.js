'use strict';
/* global localStorage */ // Получаем элементы из DOM
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addButton = document.getElementById('add-task-btn');
// Загружаем сохранённые данные при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    // Добавляем обработчик событий для кнопки "Добавить задачу"
    addButton.addEventListener('click', addTask);
});
// Функция для добавления задачи
function addTask() {
    if (inputBox.value === '') // Если поле ввода пустое, выводим сообщение
    window.alert('You have to write something!');
    else {
        const li = document.createElement('li');
        li.classList.add('todo-app__item');
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        const span = document.createElement('span');
        span.innerHTML = '\u00d7'; // Символ крестика
        span.classList.add('todo-app__item-remove');
        li.appendChild(span);
        // Очистка поля ввода после добавления
        inputBox.value = '';
        saveData();
        // Удаление задачи по клику на крестик
        span.onclick = function() {
            listContainer.removeChild(li);
            saveData();
        };
        // Отметка задачи как выполненной при клике
        li.onclick = function() {
            li.classList.toggle('todo-app__item--checked');
            saveData();
        };
    }
}
// Сохранение данных в localStorage
function saveData() {
    try {
        // Мы сохраняем только внутреннее содержимое списка
        localStorage.setItem('data', listContainer.innerHTML);
    } catch (e) {
        window.alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0432 localStorage:", e);
    }
}
// Загрузка данных из localStorage
function loadData() {
    try {
        const savedData = localStorage.getItem('data');
        if (savedData) {
            listContainer.innerHTML = savedData;
            // Восстанавливаем функциональность для каждой задачи
            const items = listContainer.getElementsByClassName('todo-app__item');
            for (const item of items){
                const span = item.querySelector('.todo-app__item-remove');
                span.onclick = function() {
                    listContainer.removeChild(item);
                    saveData();
                };
                item.onclick = function() {
                    item.classList.toggle('todo-app__item--checked');
                    saveData();
                };
            }
        }
    } catch (e) {
        window.alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438\u0437 localStorage:", e);
    }
}

//# sourceMappingURL=index.f75de5e1.js.map
