// Метод console.log() выводит сообщение (или переданные данные) в консоль
// console.log('JS works');

// console.log('JS works 2');

// ТИПЫ ПЕРЕМЕННЫХ

// Изменяемые переменные (let)

// Объявление переменной
let userName;

// Присвоение значения
userName = "Tom";
// console.log(userName);

// Изменение значения переменной
userName = "Bob";
// console.log(userName);

// Копирование значения переменной
let customerName = userName;
// console.log(customerName);
// console.log(userName);

// Неизменяемые переменые (const)
const message = "Hello";
// console.log(message);

// Переопределение значения константы (ошибка)
// message = "Hello, Tom";
// console.log(message);

const newName = customerName;
// console.log(newName);
// newName = "Mary"

// Имена для переменных
let test = 'test';
// let test; // нельзя создавать переменные с тем же именем
// let 1test; // имя переменной не может начинаться с числа
let a_1;

// ТИПЫ ДАННЫХ

// 1. String
let name = 'John';

// 2. Number
let year = 1998;
let price = 34.5;
let inf = Infinity;
let exampleEr = NaN;

// 3. BigInt
let big = 900719925474099111n;

// 4. Boolean
let isAdmin = true;

// 5. Null
let emptyValue = null;

// 6. Undefined
let data = undefined;

// 7. Symbol
let sym = Symbol();
// console.log(sym);

// 8. Object
let userData = {
    userName: 'Nick',
};

let testType = typeof year;
console.log(testType);

testType = typeof price;
console.log(testType);

testType = typeof inf;
console.log(testType);

testType = typeof exampleEr;
console.log(testType);

testType = typeof name;
console.log(testType);

testType = typeof big;
console.log(testType);

testType = typeof isAdmin;
console.log(testType);

testType = typeof emptyValue;
console.log(testType);

testType = typeof data;
console.log(testType);

testType = typeof sym;
console.log(testType);

testType = typeof userData;
console.log(testType);