// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam"
// };


//////////////////////////////////////////////////////////////////

// Перебери об'єкт apartment, використовуючи метод Object.keys() 
// і цикл for...of. Запиши у змінну keys масив ключів властивостей
//  об'єкта apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };
 
//  const keys = Object.keys(apartment);
//  const values = [];
//  for(const key of keys) {
//    values.push(apartment[key]);
   
//  }
//   console.log(keys);

/////////////////////////////////////////////////////////////////////////////

// Виконай рефакторинг функції countProps(object), замінивши перебір
//  ключів за допомогою циклу for…in на метод Object.keys()
//   для отримання масиву властивостей. Функція має повернути кількість властивостей в об'єкті object.

// function countProps(object) {
//    // let propCount = [];
// //  const keys = Object.keys(object);
// //    for (const key of keys) {
// //      if (object.hasOwnProperty(key)) {
// //        propCount += 1;
// //      }
// //    }
 
//    return Object.keys(object).length;
//  }
 
//  console.log(countProps({}));
//  console.log(countProps({ name: "Mango", age: 2 }));
//  console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

///////////////////////////////////////////////////////////

// const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };
 
//  const keys = Object.keys(apartment);
//  const values = Object.values(apartment);
 
////////////////////////////////////////////////////////

// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries)
//  в якості параметра. Кожна властивість об'єкта salaries — це ключ, що
//   містить ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала
//  загальну суму зарплат всіх співробітників.

// Поради:

// Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати
//  за загальну суму зарплат усіх співробітників
// Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
// Пройдись по отриманих значеннях за допомогою циклу та додай кожне
//  значення до змінної totalSalary.
// Поверни totalSalary як результат

// function countTotalSalary(salaries) {
//    let totalSalary = 0;
//    const salaryValues = Object.values(salaries);
//    for(const salary of salaryValues) {
      
//          totalSalary += salary;
      
      
// } 
// return totalSalary;
//    }
 
   

//  console.log(countTotalSalary({}));
//  console.log(({ mango: 100, poly: 150, alfred: 80 }));
//  console.log(({ kiwi: 200, poly: 50, ajax: 150 }));
 
///////////////////////////////////////////////////////

// Масив colors містить колекцію кольорів. Кожен колір представлений 
// об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями.

// Перебери масив об'єктів colors, використовуючи цикл for...of. 
// Додай у масив hexColors значення властивостей hex, 
// а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//    { hex: "#f44336", rgb: "244,67,54" },
//    { hex: "#2196f3", rgb: "33,150,243" },
//    { hex: "#4caf50", rgb: "76,175,80" },
//    { hex: "#ffeb3b", rgb: "255,235,59" },
//  ];
 
//  const hexColors = [];
//  const rgbColors = [];
// for(const color of colors) {
//    hexColors.push(color.hex)
//    rgbColors.push(color.rgb)

// }
// console.log(hexColors);
// console.log(rgbColors);

//////////////////////////////////////////////////////

// Функція getProductPrice(productName) приймає один параметр productName 
// - назва продукту. Функція містить масив об'єктів products з такими властивостями,
//  як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям
// (властивість name) в масиві products і повертала його ціну (властивість price).
//  Якщо продукт з такою назвою не знайдений, функція повинна повертати null.


// function getProductPrice(productName) {
//    const products = [
//      { name: "Radar", price: 1300, quantity: 4 },
//      { name: "Scanner", price: 2700, quantity: 3 },
//      { name: "Droid", price: 400, quantity: 7 },
//      { name: "Grip", price: 1200, quantity: 9 },
//    ];
//    for(const product of products) {
//     if(productName === product.name) {
//       return product.price}
    

//    }
//   }

//  console.log(getProductPrice("Radar"));
//  console.log(getProductPrice("Grip"));
//  console.log(getProductPrice("Engine"));

//////////////////////////////////////////////////////////

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const value = [];
  
//   for(const product of products) 
//     if (product.hasOwnProperty(propName)) {
//       value.push(product[propName]);
//    }
//    return value;
// }
   

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("category"));

/////////////////////////////////////////////////////////


// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for(const product of products) {
//     if(product.name === productName) { 
//       return product.price * product.quantity;
// } 
// return `Product ${productName} not found!`;
//   }

// }
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Blaster")); 

/////////////////////////////////////////////////////

// Оголоси об'єкт atTheOldToad з наступними властивостями:

// potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
// getPotions() — метод, який повертає рядок "List of all available potions"
// addPotion(potionName) — метод, який повертає рядок "Adding <potionName>",
//  де potionName — це значення параметра potionName

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return `List of all available potions`;
//   },
//   addPotion(potionName) {
//   return `Adding ${potionName}`
//   }
// }
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));
// console.log(atTheOldToad.getPotions());

////////////////////////////////////////////////////////////

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.getPotions());
///////////////////////////////////////////////////////////////////

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
   
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   }
// };
// console.log(atTheOldToad.getPotions() );
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));

/////////////////////////////////////////////////////////////////////////

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for(const potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.getTotalPrice());

///////////////////////////////////////////////////////////////////

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив об'єктів зілль
// getPotions() — метод, який повертає значення властивості potions
// updatePotionName() — метод, який приймає два параметра рядків oldName і newName
// Доповни метод updatePotionName(oldName, newName) таким чином, 
// щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for(const potion of this.potions) {
// if(potion.name === oldName) {
// potion.name = newName;

// }
//     }
//   }, 
// };
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

////////////////////////////////////////////////////////////////////////////

// Використовуючи синтаксис залишкових параметрів, доповни код функції add() так,
//  щоб вона приймала будь-яку кількість аргументів у параметр args і повертала їхню суму.

// function add(...args) {
//   let sum = 0;
//    for(const number of args) {
//      sum += number;
//    }
//    return sum;
//  }
//  console.log(add(15, 27));  42
//  console.log(add(12, 4, 11, 48));   75
//  console.log(add(32, 6, 13, 19, 8));  78

/////////////////////////////////////////////////////////////////////////////////



// Функція addOverNum() приймає довільну кількість аргументів чисел.

// Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, 
// які більші за задане число. Це число завжди буде передано першим аргументом.

// Для вирішення цього завдання тобі потрібно зробити наступне:

// Перший параметр value повинен представляти задане число, а решта аргументів повинні
//  бути зібрані за допомогою синтаксису (...args)
// Усередині функції ініціалізуй змінну для зберігання загальної суми
// Потім пройдись по кожному аргументу за допомогою циклу
// Перевір, чи кожен аргумент більший за вказане число, і якщо так, додай його до загальної суми
// На завершення поверни загальну суму

// function addOverNum(value, ...args) {
//   let totalSum = 0;
//   for(const number of args) {
//     if(number > value) {
//       totalSum += number;
//     }
//   }
//   return totalSum;
// }
// console.log(addOverNum(50, 15, 27));  0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));  51
// console.log(addOverNum(15, 32, 6, 13, 19, 8));  71

//////////////////////////////////////////////////////////////


// Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.

// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().


// function getExtremeScores(scores) {
//   return {
//      best: Math.max(...scores),
//      worst:Math.min(...scores)
//   }
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));  повертає об'єкт { best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));   повертає об'єкт { best: 81, worst: 4 }

////////////////////////////////////////////////////////////////////////////////////////////////

// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються 
// результати тестування окремих груп. Використовуючи розпилення, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи включно.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

//////////////////////////////////////////////////////////////////////////////////////////

// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням,
//  які зберігаються у змінній defaultSettings. Під час створення тесту, усі або частину
//   налаштувань можна перевизначити, користувацькі налаштування зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за 
// замовчуванням і поверх них застосувати перевизначені користувацькі налаштування.
//  Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = {
//   ...defaultSettings,
//   ...overrideSettings
// };


// console.log(finalSettings);
