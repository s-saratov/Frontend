/*
Задача 1

Напишите функцию, которая принимает строку и число n в качестве параметров,
а затем возвращает первые n символов строки.

Для отображения результа работы функции вызовите её три раза с различными аргументами,
результат каждого вызова присвойте отдельной переменной и выведите переменные в консоль.
*/

// Создаём функцию getSymbols

function getSymbols(string, n) {
  // Преобразуем полученные параметры в необходимые типы данных
  string = String(string);
  n = Number(n);

  // Возвращаем подстроку
  return string.substring(0, n);
}

// Создаём строки для использования в методе
let string1 = "SATOR AREPO TENET OPERA ROTAS";
let string2 = "Able was I ere I saw Elba";
let string3 = "Never odd or even";

// Создаём и заполняем массив переменных, хранящих подстроки
let subdtrings = [];
subdtrings.push(getSymbols(string1, 5));
subdtrings.push(getSymbols(string2, 6));
subdtrings.push(getSymbols(string3, 7));

// Выводим подстроки в консоль
for (let substring of subdtrings) console.log(substring);

/*
Задача 2

У вас есть массив чисел [10, 15, 20, 25, 30]. Напишите функцию для вычисления среднего значения
элементов массива (массив нужно передать через параметр) и вывода результата в консоль.
Вызовите функцию для демонстрации результата
*/

// Создаём массив чисел
let numbersArray = [10, 15, 20, 25, 30];

// Создаём функцию, вычисляющую и выводящую в консоль среднее значение элементов массива
let getAverage = (array) => {
  let sum = 0;
  for (let item of array) sum += Number(item);
  console.log(sum / array.length);
};

// Вызываем функцию для демонстрации результата
getAverage(numbersArray);