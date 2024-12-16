// TIMERS

// setTimeout

const showMessage = () => {
    console.log('Функция выполнилась через 3 секунды');
};

setTimeout(showMessage, 3000); // 1000 ms = 1 second

// Передача в setTimeout функции с аргументами

const greet = (name, age, isAdmin) => {
    console.log(`Hello, ${name} - ${age} - Admin ${isAdmin}`);
};

setTimeout(greet, 2000, 'Tom', 35, "yes");

// Пример создания счётчика до 10 с использованием setInterval, setTimeout и ClearInterval

const simpleCounter = () => {

    // Создаём переменную, которая будет хранить значение счётчика
    let count = 1;

    // Создаём функцию, которая будет выводить в консоль значение счётчика и изменять его на 1
    const countFunc = () => {
        console.log(count);
        count++;
    };

    // Запускаем выполнение функции countFunc с интервалом в 1 секунду
    const intervalID = setInterval(countFunc, 1000);

    // Делаем очистстку интервала через 11 секунд
    setTimeout(() => clearInterval(intervalID), 11000);
};

simpleCounter();