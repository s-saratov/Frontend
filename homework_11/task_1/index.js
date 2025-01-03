/*
Задача 1

У вас есть массив чисел [2, 4, 6, 8, 10]. Напишите цикл, в котором каждый элемент массива будет
увеличиваться вдвое, результат каждой итерации выведите в консоль.
*/

// Создаём массив числел
let numbersArr = [2, 4, 6, 8, 10];

// Выводим в консоль содержимое массива, а также результат удвоения элементов
for (let i = 0; i < numbersArr.length; i++) {
  console.log(`Element # ${i}: ${numbersArr[i]}; ${numbersArr[i]} * 2 = ${numbersArr[i] * 2}`);
  numbersArr[i] = numbersArr[i] * 2;
}

// Альтернативный вариант - for of
// numberItem = numbersArr[i]
// for (let numberItem of numbersArr) {
//   numberItem *= 2;
//   console.log(numberItem);
// }