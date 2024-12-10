// Выбор элементов

// По ID

let cardContainer = document.getElementById('card-container');
console.log(cardContainer); // (вывод в консоли браузера)

// Селектор querySelector
let listElement = document.querySelector('#last-element');
console.log(listElement);

let listEl = document.querySelector("li");
console.log(listEl);

// Селектор querySelectorAll
let listItems = document.querySelectorAll('li');
console.log(listItems);

// Добавление элементов на страницу

// Шаг № 1 - создание элемента (метод createElement())
let newListItem = document.createElement('li');

// Шаг № 2 - заполнение контентом
newListItem.textContent = 'Surname: Smith';

// Шаг № 3 - выбираем элемент на странице, к которому привязываемся для расположения нового элемета
let list = document.querySelector('ul');

// Шаг № 4 - добавляем элемент на страницу с помощью различных методов
// list.before(newListItem);    // добавляет элемент ДО блока
// list.after(newListItem);     // добавляет элемент ПОСЛЕ блока
list.prepend(newListItem);      // добавляет элемент В НАЧАЛО блока
// list.append(newListItem);    // добавляет элемент В КОНЕЦ блока
