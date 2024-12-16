// PROMISES

const myPromise = new Promise((resolve, reject) => {
  
  // Пример ожидаемых данных
  // const result = {
  //     status: '200',
  //     data: {
  //         name: 'Bob',
  //         age: 43,
  //     },
  // };

  // Пример ошибки
  const result = {
    status: "500",
    message: "Server error",
  };

  setTimeout(() => {
    if (result.status === "200") {
      resolve(result.data);
    } else {
      reject(result.message);
    }
  }, 3000);
});

// console.log(myPromise);

// Обработка результата Promise с помощью встроенных обработчиков then, catch, finally:
//  - then выполняет callback-функцию при успешном завершении Promise
//  - catch выполняет callback-функцию при неуспешном завершении Promise
//  - finally выполнится в любом случае после завершения Promise
//    (подходит, например, для удаления спиннера со страницы)

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("end");
  });

// Симуляция отправки запроса на сервер и обработки результата

const dataContainer = document.querySelector(".data-container");
const loading = document.querySelector("#load-ind");
const getDataButton = document.querySelector("#request-button");

// Создаём функцию, которая симулирует отправку запроса на сервер и возвращает Promise TODO: ДОПИСАТЬ!!!
const customFetch = () => {
  const promise = new Promise((resolve, reject) => {
    // Пример ожидаемых данных
    const result = {
        status: '200',
        data: {
            firstName: "John",
            lastName: "Johnson",
            age: 34,
        },
    };

    // Пример ошибки
    // const result = {
    //   status: "500",
    //   message: "Server error",
    // };

    setTimeout(() => {
      if (result.status === "200") {
        resolve(result.data);
      } else {
        reject(result.message);
      }
    }, 3000);
  });

  return promise;
};

// Функция для отправки запроса и обработки результата
const getData = () => {
    dataContainer.innerHTML = '';
    dataContainer.computedStyleMap.color = "black";
    loading.removeAttribute("class");

    customFetch()
    .then((data) => {
        dataContainer.innerHTML = `
        <h2>User data</h2>
        <div>Name: ${data.firstName}</div>
        <div>Surname: ${data.lastName}</div>
        <div>Age: ${data.age}</div>
        `;
    })
    .catch((error) => {
        dataContainer.computedStyleMap.color = 'red';
        dataContainer.textContent = error;
    })
    .finally(() => {
        loading.setAttribute("class", "hidden");
    });
};

getDataButton.addEventListener('click', getData);