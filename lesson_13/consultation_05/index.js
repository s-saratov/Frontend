// Задача № 1

let correctPassword = "12345";
let userInput;

// alert, prompt, confirm - are not JS!

do {
  // Выполняем действия, если условие в while у нас выдаёт true, если false, то цикл прерывается,
  // но даже если условие false, то do выполнится хотя бы один раз
  userInput = prompt("Please enter your password:");
  if (correctPassword !== userInput) {
    console.log("Incorrect password! Try again!");
  }
} while (correctPassword !== userInput);

console.log("Password is correct!");

// Задача № 2

let i = 0;
console.log(i++);   // 0
console.log(i);     // 1
console.log(++i);   // 2

// Задача № 3

let index = 2;
console.log(index++);           // 2
console.log(++index);           // 4
let index2 = index++;           // index2 === 4, index2 === 4, но в следующей строчке кода будет уже 5
console.log(index2 + ++index);  // 4 + (5+1) = 10