// OBJECTS

// Объекты - это неупорядоченные коллекции данных, содержащие пары "ключ-значение" (разделение через :)

// Создание пустого объекта
let emptyUserData = {};
console.log(emptyUserData); // {}

// Cоздание объекта с данными (свойства)
let person = {
    userName: 'Bob',
    age: 23,
    isAdmin: false,
};
console.log(person); // { userName: 'Bob', age: 23, isAdmin: false }

// Добавление нового свойства
emptyUserData.name = 'Tom';
console.log(emptyUserData); // { name: 'Tom' }

// Изменение свойства объекта
person.isAdmin = true;
console.log(person); // { userName: 'Bob', age: 23, isAdmin: true }

// Получение значения свойства из объекта
console.log(person.userName); // Bob
let userName = person.userName;
console.log(userName);  // Bob
console.log(person);    // { userName: 'Bob', age: 23, isAdmin: true }
userName = 'Mary';
console.log(userName);  // Mary
console.log(person);    // { userName: 'Bob', age: 23, isAdmin: true }

// Удаление свойства из объекта
delete person.age;
console.log(person);    // { userName: 'Bob', isAdmin: true }

// Брекет-синтаксис (используется, если имя ключа является нестандартным, например, содержит пробел)
let user = {
    ['likes bird']: true,
};
console.log(user["likes bird"]); // true

// С помощью брекет-синтаксиса можно подставлять переменнные вместо ключей
let key = 'isAdmin';
console.log(person[key]); // true (значение по ключу 'isAdmin' в объекте person)

// Оператор in позволяет проверить, есть ли свойство в объекте
let animalData = {
    animalName: 'Monkey',
    age: 4,
    city: "Berlin",
}

// Возвращает undefined, если свойство отстутствует
// console.log(animalData.city);

let checkKey = 'city';
if (checkKey in animalData) {
    console.log(`Искомое значение свойства ${animalData[checkKey]}`) // Искомое значение свойства Berlin
} else console.log(`Свойство с ключом ${checkKey} не найдено`);

// Перебор ключей объекта с помощью оператора for in
for (let key in animalData) {
    console.log(typeof key); // string string string
    console.log(key); // animalName age city
    console.log(animalData[key]); // Monkey 4 Berlin
    
}

// Сложная структура объекта
let bookStore = {
    shopName: "Books",
    booksList: [
        {price: 20, bookName: "Book1"},
        {price: 22, bookName: "Book2"},
    ],
    showSlogan: () => {
        console.log("Book world");
    },
};
    
console.log(bookStore); // {shopName: 'Books', booksList: [{ price: 20, bookName: 'Book1' }, { price: 22, bookName: 'Book2' }], showSlogan: [Function: showSlogan]}
console.log(bookStore.booksList[1].bookName); // Book2
bookStore.showSlogan(); // Book world

// Reference type (ссылочный тип данных: объекты, массивы и функции)
let userAge = 40;
let age = userAge;
console.log(userAge);   // 40
console.log(age);       // 40
age = 41;
console.log(userAge);   // 40
console.log(age);       // 41

const customer = {
    customerName: "Nokia",
}
const seller = customer;
console.log(customer);  // { customerName: 'Nokia' }
console.log(seller);    // { customerName: 'Nokia' }

seller.customerName = "Tesla";
console.log(customer);  // { customerName: 'Tesla' }
console.log(seller);    // { customerName: 'Tesla' }

// Удаление объекта
// Все ссылки на удаляемый объект должны быть перезаписаны на null или undefined
// В таком случае при создании seller и customer, создаём их при помощи let,
// во всех остальных можно использовать const
// seller = null;
// customer = null;

