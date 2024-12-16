// Получение массивов ключей и объектов

const color = {
    nameColor: 'white',
    code: "fff",
    pricInfo: {
        price: 10,
        sale: true,
    },
};

const colorKeyArray = Object.keys(color);
console.log(colorKeyArray);

const colorValuesArray = Object.values(color);
console.log(colorValuesArray);

// Деструктуризация (spread-оператор - ...)

// 1. Массивы

const fruits = ["apple", "grape", "cherry"];
const copyFruits = [...fruits];
console.log(fruits);
console.log(copyFruits);
copyFruits.push("banana");
console.log(fruits);
console.log(copyFruits);

const shopFruits = [...fruits, 'kiwi', 'lemon'];
console.log(shopFruits);

// Соединить массивы ShopFruits и copyFruits с помощью spread-оператор
const fruitsBigArray = [...shopFruits, ...copyFruits];
console.log(fruitsBigArray);

// 2. Объекты

const bookObj = {
    bookName: 'Great Gatsby',
    price: 20,
};

const newBooks = {...bookObj, author: "Fitzgerald"};
console.log(newBooks);

// Деструктурирующее присваивание

// 1. Массивы

const colorsAr = ['Red', 'Blue'];

// Базовый вариант:и  копирования значений из массива и сохранения в отдельные переменные
// let red = colorsAr[0];
// let blue = colorsAr[1];
// console.log(red, blue);

// Копирование значений из массива и сохранения в отдельные переменные с помощью деструктурирующего присваивания
let [red, blue] = colorsAr;
console.log(red);
console.log(blue);

// Объекты
const fruitObj = {
    fruitName: 'Kiwi',
    price: 2,
}

// Базовый вариант: копирования значений из объектов и сохранения в отельные переменные
// let fruitTitle = fruitObj.fruitName;
// let fruitPrice = fruitObj.price;
// console.log(fruitTitle);
// console.log(fruitPrice);

// Копирование значений из объекта и сохранения в отдельные переменные с помощью деструктурирующего присваивания
// В объектах название переменной, в которой будет сохраняться значение, должно быть таким же, как ключ у этого значения
  
let {fruitName, price} = fruitObj;
console.log(fruitName);
console.log(price);

// Есть возможность использовать псеводоним через двоеточие
// Если есть вероятность, что искомого свойства не будет, то можно задать значение по умолчанию через знак равенства

let {fruitName: fruitTitle, price: fruitPrice, shop = 'FruitShop'} = fruitObj;
console.log(fruitTitle);
console.log(fruitPrice);
console.log(shop);