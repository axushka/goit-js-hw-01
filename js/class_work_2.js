// Напишіть функцію, яка створює масив з вказаною довжиною і заповнює його вказанним значення.
// Наприклад функція fillArray(3, 'a') повертає масив ['a', 'a', 'a'].
// function fillArray(number, item) {
// const arr = [];
// for(let i = 0; i < number; i++) {
// arr.push(item);
// }
// return arr;
// }
// console.log(fillArray(5, "c"));


///////////////////////////////////////////////////////////

// Написати функцію clearArray(array), котра створить новий масив  
// в якому не буде значень, які приводяться до false



// const array = [
//     1,
//     0,
//     54,
//     "doc",
//     null,
//     "jpg",
//     undefined,
//     "",
//     "png",
//     "exe",
//     false,
//     "mp4",
//     NaN,
//     "hbs",
//   ];

//   function clearArray(array) {
//     const newArray = [];
//     for(const item of array) {
//         if(item) { newArray.push(item)
//         }
//     }
//     return newArray;
//   }
//   console.log(clearArray(array));

/////////////////////////////////////////////////////////////

// Напиши скрипт, який порівняє два масива і виведе у консоль результат:
// true - якщо всі елементи однакові і false - в іншому випадку 


// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];
// function newArray(arr1, arr2) {

//     if(arr1.length !== arr2.length) { 
//        return false
// } 
// for(const item of arr1) {
//     if(!arr2.includes(item)) { 
//         return false;
//     }
// }
// return true;
// }
// console.log( newArray(arr1, arr2));
// console.log( newArray(arr3, arr4));
// console.log( newArray(arr5, arr6));
// console.log( newArray(arr7, arr8));
//////////////////////////////////////////////////

// Напишіть функцію calculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

// function calculateAverage(...arg) {
// let total = 0;
// let count = 0;
// for(const item of arg) {
//     if(typeof item === "number") {
//         total += item;
//         count += 1;
//     }
// }
// return total / count;
// }
// console.log(calculateAverage(1, 13, "num", "lalala", 5));

////////////////////////////////////////////////////////

// Для об'єкту book, послідовно виконай наступні дії:
// 1. Додай поле rating зі значенням 4.8.
// 2. Заміни значення поля genre на "Classic Fiction".
// 3. Заміни значення поля isBestseller на false.
// 4. Виведи за допомогою console.log вміст об'єкта book 
//    у форматі ключ:значення, 
//    використовуючи Object.keys() і for...of.

// Очікуваний результат
// title: To Kill a Mockingbird
// author: Harper Lee
// genre: Classic Fiction
// yearPublished: 1960
// isBestseller: false
// rating:
// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     genre: "Southern Gothic",
//     yearPublished: 1960,
//     isBestseller: true
// };
// book.rating = 4.8;
// book.genre = "Classic Fiction";
// book.isBestseller = false;
// const newBook = Object.keys(book);
// for (const key of newBook) {
//     console.log(`${key} : ${book[key]}`);

// }
// console.log(newBook);
////////////////////////////////

// Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key. 
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.

// const user = {
//     name: 'Igor',
//     car:  'Mercedes',
//     carColor: 'black'
// }

// function checkKeyInObject(obj, key) {
//     return Object.keys(obj).includes(key);

// }
// console.log(checkKeyInObject(user, "car"));

// 2 варіант вирішення


// const user = {
//     name: 'Igor',
//     car:  'Mercedes',
//     carColor: 'black'
// }

// function checkKeyInObject(obj, key) {
//     for(const lalala in obj) {
//         if(lalala === key) {
// return true
//         } 
//     }

// return false;
// }
// console.log(checkKeyInObject(user, "car"));
// console.log(checkKeyInObject(user, "bhh"));


/////////////////////////////////////////////////////////////////

// Додати метод getinfo в об'єкт user, який повертатиме інформацію 
// про користувача у форматі:
// `Name: Peter. Surname: Parker. Age: 22. Position: spider-man.`

// const user = {
//     name: 'Peter',
//     surname: 'Parker',
//     age: 22,
//     position: 'spider-man'
// }
// user.getinfo = function() {
//     return `name: ${this.name},
//     surname: ${this.surname},
//     age: ${this.age},
//     position: ${this.position}`
// }
// console.log(user.getinfo());

////////////////////////////////////////////////////

// Створіть об'єкт calculator із трьома методами:
//read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
//sum() - повертає суму збережених значень
//mult() - перемножує збережені значення та повертає результат

// const calculator = {
//     read(a, b) {
//       this.vada = a;
//       this.prop = b;
//     },
//     sum() {
//       return this.vada + this.prop;
//     },
//     mult() {
//       return this.vada * this.prop;
//     },
//   };
  
//   calculator.read(4, 10);
//   calculator.sum();
//   console.log(calculator);
//   console.log(calculator.sum());
//   console.log(calculator.mult());

//////////////////////////////////////////////////////////////

// Є об'єкт, у якому зберігаються обрані товари у кошику.
// Напишіть код для визначення загальної суму замовлення 
// і збережіть його результат у змінній totalCost.
// Якщо об'єкт cart порожній, то результат має бути 0.

// const cart = {
//     apple: 50,
//     banana: 30,
//     orange: 40,
//   };
//  const totalCost = Object.values(cart);
//  let cost= 0;
//   for(const item of totalCost) {
//     cost += item;

//   }
//   console.log(cost);

// console.log(totalCost);
//  2 варіант вирішення 
// let cost = 0;
// for(const key in cart) {
// cost += cart[key];
// }
// console.log(cost);
/////////////////////////////////////////////////////////////

// Розрахувати загальну суму всіх замовлень та вивести інформацію у форматі:
// `Загальна сума всіх замовлень: totalAmount`


// const orders = [
//     { id: 1, product: 'Футболка', quantity: 2, price: 15 },
//     { id: 2, product: 'Шорти', quantity: 3, price: 20 },
//     { id: 3, product: 'Кросівки', quantity: 1, price: 50 }
//   ];
//   let totalCost = 0;
// for(const items of orders) {
// totalCost += items.quantity * items.price;

// }
// console.log(totalCost);

////////////////////////////////////////////////////////////////////////////



//Домашнє завдання


// // Напишіть функцію getPropertyValues(), яка приймає масив об'єктів 
// // та ключ, і повертає масив значень цього ключа у кожному об'єкті

// const myArr = [
//     {name: "John", age: 30},
//     {name: "Jane", age: 25},
//     {name: "Bob", age: 40},
//   ];
//   // Знайти студента з найменшим віком та вивести інформацію про нього у форматі:
//   // `Студент з найменшим віком: name, Вік: age, Спеціальність: major`
  
  
//   const students = [
//     { name: 'Олександр', age: 20, major: 'Інформатика' },
//     { name: 'Марія', age: 21, major: 'Психологія' },
//     { name: 'Іван', age: 19, major: 'Економіка' }
//   ];
  