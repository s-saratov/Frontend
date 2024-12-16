// Map - выполняет функцию для каждого элемента массива (немутирующий метод)

const animals = ['cat', 'dog', 'horse'];

// Метод map принимает в качестве аргумента функцию callback
// Функция callback имеет три параметра:
// 1-й - элемент массива
// 2-й - индекс элемента
// 3-й - исходный массив

animals.map((item, index, array) => {
    console.log(
        `Элемент массива ${item} с индексом ${index} из массива ${array}`
    );
});

// Метод map возвращает новый массив, в соответствии с тем, что будет возвращено в функции callback

const animalsNameLength = animals.map((animal) => {
    return animal.length;
});

console.log(animalsNameLength);
console.log(animals);

// forEach - выполняет функции для каждого элемента массива (немутирующий метод), но, в отличие от map,
// вызов метода forEach ничего не возвращает

// Метод forEach принимает в качестве аргумента функцию callBack
// Функция callBack имеет три параметра:
// 1-й - элемент массива
// 2-й - индекс элемента
// 3-й - исходный массив

const list = document.querySelector("#list");
const addStyleButton = document.querySelector("button");

const cars = ['BMW', 'Tesla', 'Toyota', 'Aston Matin'];

cars.forEach((car)=>{
    const listItem = document.createElement('li');
    listItem.textContent = car;
    list.append(listItem);
});

// Добавление стилей для списка
const addStyles = () => {
    list.setAttribute('class', 'style-list');
}

addStyleButton.addEventListener('click', addStyles);

// filter - метод для фильтрации исходного массива (немутирующий метод)
// Этот метод возвращает новый массив, но только с элементами, которые прошли проверку (заданное условие вернуло true)
// Метод принимает функцию callback cо всеми тремя базовыми параметрами

const products = [
    {productName: "Milk", price: 7},
    {productName: "Bread", price: 5},
    {productName: "Eggs", price: 8},
    {productName: "Grape", price: 10},
]

// Задача: сформировать новый массив, в котором будут только те продукты, стоимость которых не превышает 8

// const filterProducts = products.filter((product) => {
//     return product.price <= 8;
// });

const filterProducts = products.filter((product) => product.price <= 8);
console.log(filterProducts);
console.log(products);

// reduce - возвращает определённое значение на основе заданного массива
const numbersArray = [10, 5, 9, 3];

const sum = numbersArray.reduce((accumulator, number) => {
    console.log(accumulator);
    console.log(number);
    
    return accumulator + number;
}, 0);

console.log(sum);