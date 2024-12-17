// "https://catfact.ninja/fact"

const getCatFactsButton = document.getElementById("get-cats-fact");
const dataContainer = document.querySelector(".data-container");
const loading = document.getElementById("load-ind");

// Асинхронная функция, в которой будет прописана логика отправки запроса и обработки результата
const getCatFact = async () => {
    dataContainer.textContent = "";
    loading.removeAttribute("class");
    dataContainer.classList.remove('error');

  // Создаём блоки try-catch-finally для отправки запроса и обработки результата
  try {
    // Отправка запроса, ожидание завершения промиса, который возвращает fetch,
    // и сохранение результата в переменную response. Метод GET (по умолчианию)
    const response = await fetch("https://catfact.ninja/fact");
    console.log(response);
    // Используем метод JSON (асинхронный) объекта response для получения данных в необходимом формате
    const result = await response.json();
    console.log(result);
    // Если в свойстве ok значение true, тогда обрабатываем данные успешного результата
    // Если в свойстве ok значение false, тогда создаём исключения для перехода в блок catch
    if (response.ok) {
        dataContainer.textContent = `Fact: ${result.fact}`;
    } else {
        // В объекте result будут храниться характеристики ошибки в следующем виде:
        // {message: 'Not found', code: '404'}
        // Самостоятельно создаём исключение, т.к. Promise, который возвращает fetch,
        // не разрешается как rejected в случае ошибок 404 - 599
        throw new Error(result.message); 
    }
  } catch (error) {
    console.log(error);
    dataContainer.classList.add('error');
    // В свойстве message ошибки будут храниться сообщение, которое мы передавали в конструктор Error
    dataContainer.textContent = `Error: ${error.message}`;
  } finally {
    loading.setAttribute('class', "hidden");
  }
};

// setInterval(getCatFact, 10);

getCatFactsButton.addEventListener("click", getCatFact);