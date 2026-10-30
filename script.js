const main = document.createElement('main');

const title = document.createElement('h1');
title.textContent = 'Мои задачи';

const form = document.createElement('form');

const taskInput = document.createElement('input');
taskInput.type = 'text';
taskInput.placeholder = 'Название задачи';
taskInput.required = true;

const dateInput = document.createElement('input');
dateInput.type = 'date';

const addButton = document.createElement('button');
addButton.type = 'submit';
addButton.textContent = 'Добавить задачу';

form.append(taskInput, dateInput, addButton);

main.append(title, form);
document.body.append(main);
