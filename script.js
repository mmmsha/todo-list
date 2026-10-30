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

const sortButton = document.createElement('button');
sortButton.type = 'button';
sortButton.textContent = 'Сортировать по дате';

const taskList = document.createElement('ul');

main.append(title, form, sortButton, taskList);
document.body.append(main);

sortButton.addEventListener('click', function() {
    const tasks = Array.from(taskList.children);

    tasks.sort(function(a, b) {
        const dateA = a.dataset.date || '9999-12-31';
        const dateB = b.dataset.date || '9999-12-31';

        return dateA.localeCompare(dateB);
    });

    taskList.append(...tasks);
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let taskText = taskInput.value.trim();
    let taskDate = dateInput.value;

    if (taskText === '') {
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.dataset.date = taskDate;

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

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.hidden = true;

    const editDateInput = document.createElement('input');
    editDateInput.type = 'date';
    editDateInput.hidden = true;

    const editButton = document.createElement('button');
    editButton.textContent = 'Редактировать';
    editButton.type = 'button';

    editButton.addEventListener('click', function() {
        if (editInput.hidden) {
            editInput.value = taskText;
            editDateInput.value = taskDate;

            taskContent.hidden = true;
            editInput.hidden = false;
            editDateInput.hidden = false;

            editButton.textContent = 'Сохранить';
        } else {
            if (editInput.value.trim() === '') {
                return;
            }

            taskText = editInput.value.trim();
            taskDate = editDateInput.value;
            taskItem.dataset.date = taskDate;

            taskContent.textContent = taskText;

            if (taskDate !== '') {
                taskContent.textContent += ' — ' + taskDate;
            }

            taskContent.hidden = false;
            editInput.hidden = true;
            editDateInput.hidden = true;

            editButton.textContent = 'Редактировать';
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.type = 'button';

    deleteButton.addEventListener('click', function() {
        taskItem.remove();
    });

    taskItem.append(
        checkbox,
        taskContent,
        editInput,
        editDateInput,
        editButton,
        deleteButton
    );

    taskList.append(taskItem);

    form.reset();
});
