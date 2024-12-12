// ИЗМЕНЕНИЕ СОДЕРЖИМОГО ЭЛЕМЕНТОВ

// С помощью свойства textContent
const mainTitle = document.getElementById('main-title');
console.log(mainTitle.textContent);
mainTitle.textContent = "Main Title";

// С помощью свойства innerHTML
const cardTitle = document.getElementById('card-title');

let avararImg = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';

cardTitle.innerHTML = `
<a href='' target='_blank'>Profile link</a>
<img src=${avararImg}>
`;

// Изменение стилей
const root = document.getElementById('root');
root.style.background = 'bisque';

// Удаление элементов
const lastElement = document.getElementById('last-element');
lastElement.remove();

// ОБРАБОТКА СОБЫТИЙ

// Обработка события нажатия на кнопку

const addButton = document.querySelector('.add-button');
const hideButton = document.querySelector('.hide-button');
const card = document.getElementById('card-container');

// Функции обработки событий

const hideCard = () => {
    card.style.opacity = '0';
    // card.style.display = 'none';
};

const addCard = () => {
    card.style.opacity = '1';
    // card.style.display = 'flex';
};

// Привязка функций к обработчикам событий
hideButton.addEventListener('click', hideCard);
addButton.addEventListener('click', addCard);

// Обработка события изменения значения в поле
const searchField = document.getElementById('input-search');

// Функция обработки событий
const changeSearch = (event) => {
    console.log(event.target.value);
    console.log(event.type);
};

// Привязка функции к обработчику событий
searchField.addEventListener('change', changeSearch)