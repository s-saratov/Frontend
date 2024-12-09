// Методы строк

let stringExample = "PlEase select  age";

console.log(stringExample.length);              // 18
console.log(stringExample.toUpperCase());       // PLEASE SELECT  AGE
console.log(stringExample);                     // PlEase select  age
console.log(stringExample.toLowerCase());       // please select  age

// Первый параметр метода substring() - индекс первого символа подстроки (включительно),
// второй - индекс поселеднего символа подстроки (не включительно)
console.log(stringExample.substring(1));        // lEase select  age
console.log(stringExample.substring(1, 6));     // lEase
console.log(stringExample.substring(1, 26));    // lEase select  age
console.log(stringExample.length);              // 18

// Если искомой подстроки нет, возвращается -1
console.log(stringExample.indexOf("ape"));      // -1

// split() разделяет строку на массив по выбранному разделителю
let str = "Hello, JS";
let strArr = str.split(' ');
console.log(strArr);                            // [ 'Hello,', 'JS' ]

// Функции

// Function declaration
console.log(getSum(3, 5)); // 8

function getSum (x, y) {
    let result = x + y;
    return result;
}

let sum = getSum(3, 4);
console.log(sum) // 7

// Function Expression
// showMessage('Bob'); - ошибка (ReferenceError), т.к. функция вызвана до её объявления

let message = 'Hello';

let showMessage = function (name = 'user') {
    let message = `Hello, ${name}`;
    console.log(message);
};

showMessage('Tom');     // Hello, Tom
showMessage('Mary');    // Hello, Mary
showMessage();          // Hello, user
console.log(message);   // Hello

// Стрелочная функция - только для однострочных функций
// let getDivide = n => n / 2;
let getDivide = (n) => {
    return n / 2;
};

let resultDivide = getDivide(6);
console.log(resultDivide); // 3

// Передача функции в качестве аргумента для другой функции (callback function - функция обратного вызова)

let showOperationResult = (x, y, operationFunc) => {
    let result = operationFunc(x, y);
    console.log(`Результат вашей операции: ${result}`);
};

// let showOperationResult = (x, y, operationFunc) => console.log(`Результат вашей операции: ${operationFunc(x, y)}`);

let add = (a, b) => a + b;
let divide = (c, d) => c / d;

showOperationResult(4, 8, add);     // Результат вашей операции: 12
showOperationResult(6, 3, divide);  // Результат вашей операции: 2

// Hoisting (поднятие переменных), var - устаревший оператор для создания изменяемых переменных

// console.log(x);  // ReferenceError
// console.log(y);  // ReferenceError
console.log(z);     // undefined

let x = 2;
const y = 3;
var z = 4;

// Циклы с var
// У переменных, заданных с помощью var, глобальная область видимости (за исключением функций)

for (var i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i); // 0 1 2 3 - переменную i, заданную в цикле, видно и за его пределами