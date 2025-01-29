'use strict';
// Get references to necessary elements
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addButton = document.getElementById('add-task-btn');
// Function to create a new list item element
function createListItem(text) {
    const li = document.createElement('li');
    li.classList.add('todo-app__item');
    li.textContent = text;
    const span = document.createElement('span');
    span.innerHTML = "\xd7"; // Unicode cross symbol
    span.classList.add('todo-app__item-remove');
    li.appendChild(span);
    // Add event listeners
    span.addEventListener('click', ()=>{
        listContainer.removeChild(li);
        saveData();
    });
    li.addEventListener('click', ()=>{
        li.classList.toggle('todo-app__item--checked');
        saveData();
    });
    return li;
}
// Function to add a task to the list
function addTask() {
    const inputValue = inputBox.value.trim();
    if (inputValue === '') {
        alert('You have to write something!');
        return; // Exit the function early
    }
    const newListItem = createListItem(inputValue);
    listContainer.appendChild(newListItem);
    inputBox.value = ''; // Clear the input field
    saveData();
}
// Function to save the current list state to localStorage
function saveData() {
    try {
        localStorage.setItem('data', listContainer.innerHTML);
    } catch (error) {
        alert('Error saving to localStorage:', error);
    }
}
// Function to load saved data from localStorage
function loadData() {
    try {
        const savedData = localStorage.getItem('data');
        if (savedData) {
            listContainer.innerHTML = savedData;
            // Re-attach event listeners to loaded items
            const items = document.querySelectorAll('.todo-app__item');
            items.forEach((item)=>{
                const removeButton = item.querySelector('.todo-app__item-remove');
                removeButton.addEventListener('click', ()=>{
                    listContainer.removeChild(item);
                    saveData();
                });
                item.addEventListener('click', ()=>{
                    item.classList.toggle('todo-app__item--checked');
                    saveData();
                });
            });
        }
    } catch (error) {
        alert('Error loading from localStorage:', error);
    }
}
// Event listeners
addButton.addEventListener('click', addTask);
window.addEventListener('DOMContentLoaded', ()=>{
    loadData();
});

//# sourceMappingURL=index.f75de5e1.js.map
