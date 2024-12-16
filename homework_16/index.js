/*
Задание

Вы получили массив с ценами на товар (создайте переменную, в которой будет храниться массив).
Значения массива [100, 400, 900, 300, 500].
Необходимо отобразить каждый из элементов массива на странице в отдельном блоке.
Стилизация на ваше усмотрение.

Дополнительная задача: Создайте кнопку "Filter", при нажатии на которую на странице будут отображаться
только блоки с ценами > 450.
*/

// Создаём массив цен
let prices = [100, 400, 900, 300, 500];

// Создаём переменные для привязки к необходимым объектам на странице

const pricesBlock = document.getElementById("prices-container");  // блок с ценами
const button = document.getElementById("filter-button");          // кнопка фильтрации

// Создаём функцию для добавления карточки с ценой в соответствующий контейнер
function createPriceCard(n) {
  pricesBlock.innerHTML += `<div class = "price-card">${n}</div>`;
}

// Запускаем функцию для первоначального отображения на странице всех цен из первоначального массива
prices.forEach((price) => {
  createPriceCard(price);
});


// Создаём функцию фильтрации цен для кнопки
function filterPrices(n) {
  pricesBlock.innerHTML = ""; // Очищаем блок с ценами
  const filteredPrices = prices.filter((price) => price > 450); // Создаём новый массив с отфильтрованными ценами
  filteredPrices.forEach((price) => {
    createPriceCard(price);
  });
}

// Подключаем к кнопке прослушивание событий с привязкой к функции
button.addEventListener("click", filterPrices);