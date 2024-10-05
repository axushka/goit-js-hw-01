// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень. 
// Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього е


// function getLastElementMeta(array) {
//     const lastElementIndex = array.length - 1;
//     const lastElemen = array[lastElementIndex];
    
//     return [lastElementIndex, lastElemen];
//   }
  
  
//   console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));  
//   console.log(getLastElementMeta(["apple", "peach", "pear"])); 
////////////////////////////////////////////////////////////////////////

// Функція getExtremeElements(array) приймає один параметр array - масив елементів 
// довільної довжини. Доповни код функції таким чином, щоб вона повертала масив
//  з двох елементів - першого і останнього елементів параметра array.


// function getExtremeElements(array) {
//   const lastElementIndex = array.length - 1;
//   const lastElemen = array[lastElementIndex];
//   const firstElement = array[0];
//   return [firstElement, lastElemen];
// }
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

//////////////////////////////////////////////////////////////////////////

// Функція getLength(array) очікує один параметр array - масив довільних значень. 
// Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників,
//  і повертала кількість символів в отриманому рядку.

// function getLength(array) {
//   const words = array.join("");
 
//   return words.length;
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));//повертає 22
// console.log(getLength(["top", "picks", "for", "you"]));// повертає 14

//////////////////////////////////////////////////////////////////////////////

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну
//  гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord).
//  Ця функція приймає першим параметром рядок, що складається зі слів, 
//  розділених лише пробілами (параметр message) та другим параметром - число,
//   що містить ціну гравірування за одне слово (параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.



// function calculateEngravingPrice(message, pricePerWord) {
//   const userMessage = message.split(" ");
// const lalala = userMessage.length;

//   const totalPrice = lalala * pricePerWord;
 
//   return totalPrice;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));//повертає 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); // повертає 160

////////////////////////////////////////////////////////////////////////////////////////

// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);

///////////////////////////////////////////////////////////////////////////////////////////

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);

////////////////////////////////////////////////////////////////////////////

// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук
//  значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value
//  включно, якщо такий елемент є в array


// function getSlice(array, value) {
//   const massegeValue =  array.indexOf(value);

//   const massegeNew = array.slice(0, massegeValue +1);
 

//   return massegeNew;
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); //повертає ["Mango", "Poly"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));// повертає []

///////////////////////////////////////////////////////////////////////////////////


// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив
//  усіх цілих чисел від значення min до max включно.

// function createArrayOfNumbers(min, max) {
//   const lalala = [];
//   let i;
// for(i = min; i <= max; i += 1) {
  
//    lalala.push(i);
  
 
// } return lalala;
// }
// console.log(createArrayOfNumbers(1, 3)); //[1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // повертає [14, 15, 16, 17]

//////////////////////////////////////////////////////////////////////////////

// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел.
//  Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) {
 
//   let totalSum = 0;
//   for(const item of order) {
//     totalSum += item;
    
//   } 
//   return totalSum;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));///138
// console.log(calculateTotalPrice([164, 48, 291]));///503

///////////////////////////////////////////////////////////

// Функція getEvenNumbers(start, end) має два параметри start та end, 
// які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх
//  парних чисел від start до end. Якщо жодного парного числа немає,
//   то масив має бути пустим. Парним вважається число,
//    яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// function getEvenNumbers(start, end) {
//     const lalala = [];
//     let i;
//     for(i = start; i <= end; i++) {
//       if(i % 2 === 0) {
//         lalala.push(i);
//       }   
//     }
//     return lalala;
//   }

//   console.log(getEvenNumbers(2, 5));  повертає [2, 4]
//   console.log(getEvenNumbers(3, 11)); [4, 6, 8, 10]
//   console.log(getEvenNumbers(6, 12)); [6, 8, 10, 12]
  
/////////////////////////////////////////////////////////////////////////

// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній 
// такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від
//  регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//     const userItem = item.toLowerCase();
//     if(storage.includes(userItem)) { return `${userItem} is available to order!`
//     } else {
//       return `Sorry! We are out of stock!`
//     }
      
//   }
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));  
// console.log((["apple", "plum", "pear"], "pLuM"));

/////////////////////////////////////////////////////

// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи.
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5,
//  оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2)
//  довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.


// function getCommonElements(array1, array2) {
//     const newElement = [];
//     let i;
//     for(i = 0; i <= array1.length; i++)
//    {
//       if(array2.includes(array1[i])) { 
//         newElement.push(array1[i]);
        
//       }
     
//     }  return newElement;
//   } 
//   console.log(getCommonElements([1, 2, 3], [2, 4]));  
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//////////////////////////////////////////////////////////////////////////

// function createReversedArray() {
//     const arg = Array.from(arguments);
//     return arg.toReversed();
//   }

//   console.log( createReversedArray(12, 85, 37, 4));
//   console.log(createReversedArray(164, 48, 291));

///////////////////////////////////////////////////////////////////////

// function calculateTax(amount, taxRate = 0.2) {
  
//     const sum = amount * taxRate;
//   return sum;
//   }
//   console.log(calculateTax(100, 0.1));
//   console.log(calculateTax(200, 0.1));
//   console.log(calculateTax(100, 0.2));
//   console.log(calculateTax(100));