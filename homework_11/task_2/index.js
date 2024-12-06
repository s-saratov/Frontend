/*
Задача 2

Создайте пустой массив shoppingList. Запросите у пользователя три товара
(три запроса, по одному на каждый товар) и добавьте их в конец массива.

Выведите итоговый список товаров.
*/

// Создаём пустой массив shoppingList
let shoppingList = [];

// Создаём и инициализируем переменные с товарами
shoppingList.push(String(prompt("Введите название первого товара", "Телевизор")));
shoppingList.push(String(prompt("Введите название второго товара", "Холодильник")));
shoppingList.push(String(prompt("Введите название третьего товара", "Утюг")));

// Для более красивого отображения формируем строку из элементов массива
let resultingString = "";
for (let i = 0; i < shoppingList.length; i++) {
  resultingString += shoppingList[i].toLowerCase();
  resultingString += (i != shoppingList.length - 1) ? ", " : ".";
}

// Выводим список товаров пользователю во всплывающем окне 
alert(`Вот Ваш список товаров: ${resultingString}`);