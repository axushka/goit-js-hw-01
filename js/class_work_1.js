// Напишіть функцію, яка приймає аргумент і визначає його тип даних.
// Якщо тип - строка, функція повертає "string", якщо число - "number",
// в іншому випадку - "unknown".

// function foo(arg) {

//     if(typeof arg === "string") { 
//         return "string";
//         } else if(typeof arg === "number") {
//             return "number";
//         } else { 
//             return "unknown"}
// }
// console.log(foo("lalala"));
// console.log(foo(6));
// console.log(foo(true));

/////////////////////////////////////////////////////////////////////////////

// Оголоси функцію canRegisterOnSite(age, hasAcceptedTerms),
// яка перевіряє, чи може користувач зареєструватись на сайті.
// І повертає true - якщо може зареєструватись і false, якщо - ні.
// Користувач може зареєструватись, якщо йому виповнилося 13 років
// і він прийняв умови використання.
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік користувача;
// hasAcceptedTerms - буль (вказує чи прийняв користувач умови використання);

// function canRegisterOnSite(age, hasAcceptedTerms) {
//    return age >= 13 && hasAcceptedTerms
// }
// console.log(canRegisterOnSite(10, true));
// console.log(canRegisterOnSite(13, false));
// console.log(canRegisterOnSite(17, true));

///////////////////////////////////////////////////////////////////////////

// Оголоси функцію hasDiscount(age, isStudent, isPensioner),
// яка перевіряє, чи покупець має право на знижку.
// І повертає true - якщо має право на знижку і false, якщо - ні.
// Покупець має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками(включно).
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік покупця;
// isStudent - буль (вказує чи є покупець студентом);
// isPensioner - буль  (вказує чи є покупець пенсіонером);


// function hasDiscount(age, isStudent, isPensioner) {
//     return (age >=12 && age <= 18) || isStudent || isPensioner;
// }

// console.log(hasDiscount(14, true, false));
// console.log(hasDiscount(10, false, false));
// console.log(hasDiscount(60, false, true));

////////////////////////////////////////////////////////////////////

// Оголоси функцію calculateSquare(value).
// Функція має перевіряти чи є отримане значення - число
// або за можливості перетворити рядок на число
// Якщо це число функція возводить число у квадрат і виводить рядок
// `The square of ${numberValue} is ${squaredNumber}`
// numberValue - отримане число або перетворене з рядка число.
// squaredNumber - numberValue у квадраті.
// Якщо значення не є числом, функція повертає рядок 'Invalid input!'.


// function calculateSquare(value) {
//     const numberValue = Number.parseFloat(value)
//     console.log(numberValue);
//     if(isNaN(numberValue)) { 
//         return 'Invalid input!';
//         } else { const squaredNumber = Math.pow(numberValue, 2);
//              return `The square of ${numberValue} is ${squaredNumber}`

//         }
// }

// console.log(calculateSquare(10));
// console.log( calculateSquare("8.5ab"));
// console.log( calculateSquare("dfg"));

////////////////////////////////////////////////////////////////////


// Оголоси функцію checkString(value), яка перевіряє
// чи отримане значення є рядком і не містить символ $.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.

// function checkString(value) {
//     if(typeof value === "string" && !value.includes("$")) {
//         console.log("Довжина рядка ${value.lenght} символів");   
//     } else {
//         console.log("Некоректний ввід");
//     }
    
// }
// checkString ()

//////////////////////////////////////////////////////////////////

// Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевір, що другим символом цього рядка є літера 'b'.
// Якщо так - виведи 'Так' у консоль, в противному випадку виведи 'Ні'.

// const string = "abcde";

// if(string[1] === "b") {
//     console.log("Так"); 
// } else {
//     console.log("Ні"); 
// }

////////////////////////////////////////////////////////////////////


//Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню
// const max = 50;
// const min = 23;

// for(let i = max; i >= min; i--) {
//     if(i % 2 ===0) {
//         console.log(i);
//     }
// }

/////////////////////////////////////////////////////////////////

// За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
// const max = 50;
// const min = 0;
// let sum = 0;
// for(let i = min; i <= max; i++) { 
//     if(i % 2 === 0) {
//         sum += i;
        
//     }
// }
// console.log(sum);

/////////////////////////////////////////////////////////////////////////////////////////////

// Напишіть програму, яка обчислить суму всіх чисел (за допомогою циклу for)
// від 1 до 100, які діляться на 3 або на 5. І виведи в консоль рядок :
// `Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`

// let totalSum = 0;
// for(let i = 1; i <= 100; i++) {
//     if(i % 3 === 0 || i % 5 === 0) {
//         totalSum += i;
//     }
// }
// console.log(totalSum);

/////////////////////////////////////////////////////////////////////////////////////////////

// Написати функцію getCountryInfo(country), котра буде
// отримувати назву країни і виводити інформацію про неї
// China => "Китай - найбільша країна за населенням у світі."
// Australia => "Австралія - найбільший острів та країна в Океанії."
// France => "Франція відома своєю гастрономією та мистецтвом."
// Germany => "Німеччина - найбільша економіка в Європі."
// Canada => "Канада - друга за площею країна у світі, відома своєю природою."
// Якщо країни немає, вивести повідомлення "Інформація про цю країну відсутня."


// let info;
// function getCountryInfo(country) {
//     switch(country) {
//         case "China": 
//         info = "Китай - найбільша країна за населенням у світі.";
//         break;
//         case "Australia":
//             info = "Австралія - найбільший острів та країна в Океанії.";
//             break;
//     case "France":
//         info = "Франція відома своєю гастрономією та мистецтвом.";
//         break;
//         case "Germany":
//             info = "Німеччина - найбільша економіка в Європі.";
//             break;
//         case "Canada":
//          info = "Канада - друга за площею країна у світі, відома своєю природою.";
//                 break;
//          default: 
//                 info = "Інформація про цю країну відсутня.";

//     }
//     return info;
// }
// console.log(getCountryInfo("Australia"));
// console.log(getCountryInfo("Germany"));
// console.log(getCountryInfo("Canada"));
// console.log(getCountryInfo("Ukrain"));


/////////////////////////////////////////////////////////////////////


// Напишіть функцію formatMinutesToTime(minutes), котра
// отримає від користувача число(кількість хвилин) і виведе
// в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
// вказав число 70, в консолі отримаємо "01:10"

// function formatMinutesToTime(minutes) {
//     const houers = Math.floor(minutes / 60);
//                                            //кіл-ть символів, чим заповнити недост.символи..  
//     const modHouers = String(houers).padStart(2, "0");  //привели до рядка  String(houers).// 
// //  console.log(modHouers);
// const modMinut = String(minutes % 60).padStart(2, "0")
// return `${modHouers} : ${modMinut}`; 

// }

// console.log(formatMinutesToTime(70));