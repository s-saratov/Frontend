// МАССИВЫ

let userNamesArr = ["Mike", "Tom", "Mary"];

// Длина массива
let userNamesLength = userNamesArr.length;
console.log(userNamesLength);

// Обращение к первому элементу массива
console.log(userNamesArr[0]);

// Изменение второго элемента массива
userNamesArr[1] = "Bob";
console.log(userNamesArr);

// Массивы с различными типами данных
let userData = ["Tom", 42, true, null];
console.log(userData);

userData[2] = 1;
console.log(userData);

userData[4] = [10, 20, 30];
console.log(userData);

// Необходимо вывести в консоль число 30
console.log(userData[4][2]);

// Методы массива
let colors = ["red", "blue"];

// Добавление элемента(ов) в конец массива - push
colors.push("pink");
console.log(colors);

colors.push("black", "green");
console.log(colors);

// Удаление элементов с конца массива - pop
colors.pop();
console.log(colors);

let lastColor = colors.pop();
console.log(lastColor);
console.log(colors);

// Добавление элемента(ов) в начало массива - unshift
colors.unshift("yellow");
console.log(colors);

colors.unshift("blue", "orange");
console.log(colors);

// Удаление элемента с начала массива - shift
colors.shift();
console.log(colors);

let firstColor = colors.shift();
console.log(firstColor);
console.log(colors);

// Добавление элемента с индексом в несколько раз большим, чем последний элемент
let numbersArr = [2, 45, 67];
numbersArr[10] = 90;

console.log(numbersArr);
console.log(numbersArr[9]);
console.log(numbersArr[3]);

// ЦИКЛЫ

// Цикл for

let fruits = ["apple", "cherry", "kiwi", "mango"];

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase());
}

console.log(fruits);

// Цикл while

let i = 0;
while(i < fruits.length) {
    console.log(`Элемент массива с индексом ${i} - ${fruits[i]}`);
    i++;
}

// Цикл do-while

let j = -2;
do {
    console.log(j + 2);
    j--;
} while (j > 0);