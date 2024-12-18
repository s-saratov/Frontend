// console.log(1);
// setTimeout(() => {console.log(2)}, 2000); // 1000 ms === 1 s
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

const USER_AVATAR = document.querySelector("user-avatar");
const NAME = document.querySelector("user-name");
const USER_PHONE = document.querySelector("user-phone");
const USER_CITY = document.querySelector("user-city");
const GET_USER_BUTTON = document.querySelector(".get-user");
const RANDOM_USER_URL = "https://randomuser.me/api/";

const getUser = async () => {
    console.log("Button works");
    const response = await fetch(RANDOM_USER_URL);
    console.log(response);
    
    const result = response.json();
    console.log(result);

    if (response.ok) {
        // Тут прописываем логику, когда промис вернул нормальные (ожидаемые) данные с сервера,
        // т.е. promiseStatus === "fulfilled"
    } else {
        // Тут прописываем логику, когда промис вернул ошибку с сервера, т.е. promiseStatus === "rejected"
        alert("Ошибка");
    }
};

GET_USER_BUTTON.addEventListener("click", getUser);