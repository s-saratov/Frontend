/*
Задание

Создайте простой таймер на веб-странице, который будет отсчитывать время назад от 60 секунд.
При достижении 0 секунд таймер должен остановиться.

Стилизуйте его.
*/

// Создаём глобальные переменные
let timerId; // идентификатор таймера
let remainingTime = 60.0; // оставшееся время

// Создаём переменные для привязки к необходимым объектам на странице
const currentTime = document.getElementById("remaining-time"); // параграф с оставшимся временем
const startButton = document.getElementById("start-button"); // кнопка START
const stopButton = document.getElementById("stop-button"); // кнопка STOP
const clearButton = document.getElementById("clear-button"); // кнопка Clear

// Функция для кнопки START
const startTimer = () => {
  stopButton.style.display = "flex";
  startButton.style.display = "none";

  timerId = setInterval(() => {
    if (remainingTime < 0) {
      remainingTime = 0;
      clearInterval(timerId);
      stopButton.style.display = "none";
      return;
    }

    if (remainingTime <= 10) {
      currentTime.style.color = "red";
    }

    updateTimer();
    remainingTime -= 0.01;
  }, 10);
};

// Функция обновления времени в соответсвующем параграфе страницы
let updateTimer = () => {
  currentTime.innerHTML = remainingTime.toFixed(2);
};

// Функция для кнопки STOP
const stopTimer = () => {
  startButton.style.display = "flex";
  stopButton.style.display = "none";
  clearInterval(timerId);
};

// Функция для кнопки Clear
const clearTimer = () => {
  clearInterval(timerId);
  remainingTime = 60.0;
  updateTimer();
  currentTime.style.color = "black";
  startButton.style.display = "flex";
  stopButton.style.display = "none";
};

// Подключаем к кнопкам прослушивание событий с привязкой к функциям
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
clearButton.addEventListener("click", clearTimer);