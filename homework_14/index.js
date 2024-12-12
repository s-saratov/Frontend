/*
Задание

Создать приложение "Calculate ideal weight", которое должно расчитывать идеальный вес
в зависимости от пола и роста.

Приложение включает в себя форму со следующими элементами:
    1. Поле "Height, cm":
        - label - Height, cm*;
        - placeholder - Enter your height;
        - тип поля - number;
        - обязательное поле;
    2. Поле "Select Gender":
        - label - Select Gender*;
        - опции - Male, Female;
        - тип поля - select;
        - обязательное поле
    3. Кнопка "Calculate":
        - текст кнопки - Calculate.

Общие требования:
    - Все лейблы находятся над полями;
    - В соответствии с требованиями к полям, укажите валидацию с помощью атрибутов
    - Стилизуйте на своё усмотрения;
    - формула расчета женского веса: height - 100 - (height - 150) / 2;
    - формула расчета мужского веса: height - 100 - (height - 150) / 4;
    - При клике на кнопку "Calculate", под кнопкой показывается сообщение "Your ideal weight is <результат>".
*/

// Создаём переменные - ссылки на элементы страницы
const calculatorForm = document.getElementById("calculator-form");
const idealWeightContainer = document.getElementById("ideal-weight");

// Создаём функцию для расчёта идеального веса
const getIdealWeight = (event) => {
  event.preventDefault();

  // Создаём переменые для роста и идеального веса
  const height = Number(calculatorForm.height.value);
  let idealWeight;

  // В зависимости от выбранного пола применяем необходимую расчётную формулу
  switch (calculatorForm.gender.value) {
    case "male":
      idealWeight = height - 100 - (height - 150) / 4;
      break;
    case "female":
      idealWeight = height - 100 - (height - 150) / 2;;
      break;
    default:
      break;
  }

  // Изменяем текст параграфа с результатом вычислений и делаем его видимым
  idealWeightContainer.innerHTML = `<p>Your ideal weight is ${idealWeight.toFixed(2)} kg</p>`;
  idealWeightContainer.style.display = 'flex';
};

// Запускам ожидание события нажатия на кнопку
calculatorForm.addEventListener("submit", getIdealWeight);