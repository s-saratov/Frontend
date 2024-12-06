let result = 100 / 0;
console.log(result); // Infinity

// Оператор !! приводит переменную к типу boolean

let firstName = "John";
console.log(!!firstName); // true
let lastName = "";
console.log(!!lastName); // false

let userData = {
  fistName: "John",
  lastName: "Johnson",
};
console.log(!!userData); // true

let userData2 = undefined;
console.log(!!userData2); // false

if (!!userData === true) {
    // Отображаем пришедшие с БД пользователя данные (автар, имя, фамилия и т.д) на странице
  } else {
    // Показываеи пользователю ошибку
  }

console.log("11" - 22); // -11
console.log("22" === 22); // false
console.log(50 - undefined); // NaN
console.log(50 + undefined); // NaN
console.log("50" + undefined); // NaN
console.log(50 / undefined); // NaN
console.log(50 * undefined); // NaN

console.log("message" * 3); // NaN
console.log(50 - "message"); // NaN
console.log(0 / 0); // NaN
console.log(50 / null); // 0
console.log(50 - true); // 49

let someVariable;
console.log(someVariable);  // undefined