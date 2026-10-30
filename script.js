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

const taskList = document.createElement('ul');

main.append(title, form, taskList);
document.body.append(main);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    const taskDate = dateInput.value;

    if (taskText === '') {
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    if (taskDate !== '') {
        taskItem.textContent += ' — ' + taskDate;
    }

    taskList.append(taskItem);

    form.reset();
});
