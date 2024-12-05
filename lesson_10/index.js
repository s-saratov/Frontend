// ОПЕРАТОРЫ СРАВНЕНИЯ

// Значения приводятся к числам
console.log("12" < "13"); // true
console.log("Tom" <= "Bob"); // false
console.log(123 < "124"); // true
console.log(true > false); // true

// Строгое (===) и нестрогое (==) равенство

// Сначала происходит приведение типов, затем сравнение
console.log(12 == "12"); // true

// Приведение типов не происходит и если типы разные, сразу будет возвращено false
console.log(12 === "12"); // false

console.log(0 == false); // true

// C эим оператором (==) null не приводится к 0
console.log(0 == null); // false
console.log(0 == undefined); // false

// Нестрогое неравно (!=) и строгое неравно (!==)
console.log(0 != false); // false
console.log(0 !== false); // true

// УСЛОВНЫЕ ОПЕРАТОРЫ

let age = prompt("Сколько вам лет?");

if (age >= 18) {
  alert("Вход разрешён");
  console.log(typeof age);
} else if (age === null) {
  prompt("Вы отменили ввод, повторите ещё раз");
} else if (age < 18) {
  alert("Вход запрещён");
} else {
  alert("Некорректный ввод");
  prompt("Введите данные ещё раз");
}

// Тернарный оператор

let isAdmin = false;
let message = isAdmin ? "Привет, админ" : "Привет";
console.log(message);

let year = 2025;
let userMessage =
  year <= 2024
    ? "Вы ввели правильный год"
    : "Год, который Вы ввели, ещё не наступил";
console.log(userMessage);

// ЛОГИЧЕСКИЕ ПЕРЕМЕННЫЕ
age = 18;
let hasDrivingLicense = true;
let isSick = true;

// Оператор И (true - только если все условия истинны)
if (age >= 18 && hasDrivingLicense) {
  console.log("You can drive a car");
} else {
  console.log("You can't drive a car");
}

// Оператор И (true - только если все условия истинны), оператор НЕ (!)

if (age >= 18 && hasDrivingLicense && !isSick) {
  console.log("You can drive a car");
} else {
  console.log("You can't drive a car");
}

// Оператор ИЛИ (true - если хотя бы одно из условий истинно)
let userAge = 16;
let isAuth = false;

if (userAge >= 18 || isAuth) {
  console.log("Сайт разблокирован");
} else {
  console.log("Сайт заблокирован");
}

// КОНСТРУКЦИЯ SWITCH CASE
let randomNumber = prompt(
  "Введите число от 1 до 7, которое будет соответствовать дню недели"
);
let dayOfWeek;

switch (randomNumber) {
  case "1":
    dayOfWeek = "Monday";
    break;
  case "2":
    dayOfWeek = "Tuesday";
    break;
  case "3":
    dayOfWeek = "Wednesday";
    break;
  case "4":
    dayOfWeek = "Thursday";
    break;
  case "5":
    dayOfWeek = "Friday";
    break;
  case "6":
    dayOfWeek = "Saturday";
    break;
  case "7":
    dayOfWeek = "Sunday";
    break;
  default:
    dayOfWeek = "Invalid day";
    break;
}

alert(dayOfWeek);