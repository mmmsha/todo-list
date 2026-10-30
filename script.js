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

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    if (taskDate !== '') {
        taskContent.textContent += ' — ' + taskDate;
    }

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            taskContent.style.textDecoration = 'line-through';
            taskContent.style.opacity = '0.5';
        } else {
            taskContent.style.textDecoration = 'none';
            taskContent.style.opacity = '1';
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.type = 'button';

    deleteButton.addEventListener('click', function() {
        taskItem.remove();
    });

    taskItem.append(checkbox, taskContent, deleteButton);
    taskList.append(taskItem);

    form.reset();
});
