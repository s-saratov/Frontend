// alert
alert("Вы успешно вошли");

// prompt
let age = prompt("Введите свой возраст", 21);
console.log(age);

// confirm
let isAdmin = confirm("Вы администратор или нет?");
console.log(isAdmin);

// ШАБЛОННЫЕ СТРОКИ
age = 23;
let message = `Ваш возраст: ${age}`
console.log(message);

// Математические операторы
let x = 13;
let y = 2;

// Сложение
let result = x + y;
console.log(result);

// Вычитание
console.log(x - y);

// Умножение
console.log(`Результат умножения: ${x * y}`);

// Деление
console.log(x / y);

// Остаток от деления
console.log(x % y);

// Проверка чётности числа
console.log(x % 2);
console.log(300 % 2);

// Возведение в степень
console.log(x ** y);

// ПРЕОБРАЗОВАНИЕ ТИПОВ
let userName = 'Bob';
console.log(userName + 3); // приводится к строке ("Bob3")
console.log(userName + 2 + 3); // приводится к строке ("Bob23")
console.log(userName + true); // приводится к строке ("Bobtrue")
console.log(userName + " " + null);  // приводится к строке ("Bob null")

// Работа с остальными операторами
console.log("12" - 3); // приводится к числу (9)
console.log(3 - 'Tom'); // NaN
// true = 1, false = 0
console.log(true - 2); // приводится к числу (-1)
console.log(false - 2); // приводится к числу (-2)
console.log(true - false); // приводится к числу (1)
// операции с undefined приводят к NaN
console.log(undefined - 3); // NaN
// null преобразуется в 0
console.log(3 - null); // приводится к числу (0)

// Преобразование типов с помощью встроенных методов
let newString = String(-23); // '-23' (строка)
newString = String(true); // 'string' (строка)
newString = String(undefined); // 'undefined' (строка)

console.log(newString);
console.log(typeof newString);

let newNumber = Number('Mary'); // NaN
newNumber = Number(undefined); // NaN
newNumber = Number(null); // 0 (число)
newNumber = Number(true); // 1 (число)

console.log(newNumber);
console.log(typeof newNumber);

let newBoolean = Boolean('Hi'); // true
newBoolean = Boolean(''); // false
newBoolean = Boolean(' '); // true
newBoolean = Boolean(-123); // true
newBoolean = Boolean(0); // false
newBoolean = Boolean(NaN); // false
newBoolean = Boolean(null); // false
newBoolean = Boolean(undefined); // false

console.log(newBoolean);
console.log(typeof newBoolean);