/*
Задание

Создайте HTML-документ с нумерованным списком ol, содержащим первоначально 5 элементов li.

Необходимо: Добавить два новых элемента li. Один - в начало списка, второй - в конец списка.
Новые элементы должны быть дочерними элементами списка ol

Примечание: содержание элементов списка и стилизация на ваше усмотрение.
*/

// Создаём переменные - ссылки на объекты страницы
const inputField = document.getElementById("pl-name");
const toTopButton = document.getElementById("to-top");
const toEndButton = document.getElementById("to-end");
const list = document.getElementById("list");

// Функция кнопки добавления в начало списка
toTopButton.addEventListener('click', () => {
    const inputValue = inputField.value.trim();     // создаём переменную, в которой храним значение из поля ввода
    if (inputValue) {
        let newItem = document.createElement('li'); // шаг № 1 - создание элемента
        newItem.textContent = inputValue;           // шаг № 2 - заполнение контентом из поля ввода
        list.prepend(newItem);                      // шаг № 4 - добавляем элемент на страницу (в начало списка)
        inputField.value = '';
    } else {
        alert('Введите название языка программирования!');
    }
});

// Функция кнопки добавления в конец списка
toEndButton.addEventListener('click', () => {
    const inputValue = inputField.value.trim();
    if (inputValue) {
        let newItem = document.createElement('li');
        newItem.textContent = inputValue;
        list.append(newItem);                      // добавляем элемент на страницу (в конце списка)
        inputField.value = '';
    } else {
        alert('Введите название языка программирования!');
    }
});