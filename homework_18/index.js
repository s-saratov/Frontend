/*
Задание

Требования:
  - Нужно создать кнопку "Get Joke", при клике на которую, будет выполняться GET запрос(используйте fetch). В ответе на запрос будет приходить случайная шутка
  - url: https://official-joke-api.appspot.com/random_joke
  - После того как вы получите успешный ответ, разместите шутку на странице
  - Если запрос завершиться ошибкой, её нужно разместить на странице и выделить красным цветом
  - Каждый раз, когда происходит клик на кнопку, должен выполняться новый запрос и приходить новая шутка
  - Во время запроса кнопка должна быть заблокирована
  - Стилизуйте на ваше усмотрение
*/

const JOKE_URL = "https://official-joke-api.appspot.com/random_joke"; // глобальная переменная, содержащая ссылку на сервер шуток

// Создаём переменные для привязки к необходимым объектам на странице
const JOKE_TEXT = document.getElementById("joke-text");
const LOAD_IND = document.getElementById("load-ind");
const ERROR = document.getElementById("error");
const BUTTON = document.getElementById("download-button");

// Функция для получения шуток
const getJoke = async () => {
  LOAD_IND.style.display = "flex";
  JOKE_TEXT.style.display = "none";
  ERROR.style.display = "none";
  BUTTON.disabled = true;

  try {
    const response = await fetch(JOKE_URL);
    console.log(response);
    const result = await response.json();
    console.log(result);

    if (response.ok) {
      JOKE_TEXT.innerHTML = `<p id="joke-text">${result.setup}<br><b>${result.punchline}</b></p>`;
      LOAD_IND.style.display = "none";
      ERROR.style.display = "none";
      JOKE_TEXT.style.display = "flex";
      BUTTON.disabled = false;
    } else {
      throw new Error(result.message);
    }

  } catch (error) {
    console.log(error);
    JOKE_TEXT.style.display = "none";
    LOAD_IND.style.display = "none";
    ERROR.style.display = "flex";
    ERROR.textContent = `Error: ${error.message}`;

  } finally {
    BUTTON.disabled = false;
  }
};

// Возможность запуска функции с интервалом в 10 мс для проверки отработки ошибок
// setInterval(getJoke, 10);

// Подключаем к кнопке прослушивание событий с привязкой к функции
BUTTON.addEventListener("click", getJoke);