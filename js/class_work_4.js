// При натисканні на кнопку "SHOW ME", потрібно в консоль 
// вивести значення, яке будемо вводити в інпут.

// const input = document.querySelector(`#alertInput`);
// const button = document.querySelector(`#alertButton`);

// btn.addEventListener(`click`,hendlBtn);

// function hendlBtn(event) {
// console.log(input.value);

// }

// При натисканні на кнопку "Приховати" потрібно введені користувачем
// символи в інпут відображати у вигляді крапок замість звичайного
// тексту, а також змінити назву кнопки на "Показати", при повторному
// натисканні знову будемо відображати символи, а назва кнопки зміниться
// на "Приховати".

// const input = document.querySelector(`#passwordInput`);
// const btn = document.querySelector(`#passwordButton`);
// btn.addEventListener(`click`, hendlBtn);

// function hendlBtn(event) {
// if(input.type === "text") {
//   input.type = "password";

// btn.textContent = "Показати";
// } else {
//   input.type = "text";
//   btn.textContent = "Приховати";
//   console.dir(btn)
// }

// }


// Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів.
// Кнопка "Збільшити" повинна збільшувати квадрат на 10 пікселів.

// const box = document.querySelector(`#box`);
// const btnDecrease = document.querySelector(`#decrease`);
// const btnIncrease = document.querySelector(`#increase`);

// btnDecrease.addEventListener(`click`, onClickDecrease);
// btnIncrease.addEventListener(`click`, onClickIncrease);
// function onClickDecrease(event) {
//     box.style.width = `${box.offsetWidth - 10}px`;
//     box.style.height = `${box.offsetHeight - 10}px`;
//     console.dir(box)
    
// }
// function onClickIncrease(event) {
//     box.style.width = `${box.offsetWidth + 10}px`;
//     box.style.height = `${box.offsetHeight + 10}px`;
//     console.dir(box)
    
// }

// При кліку на кнопку "Подвоїти" збільшувати значення в кожному
// елементі списку в два рази.

// const list = document.querySelectorAll(`.listItem`);
// const btn = document.querySelector(`#double`);
// btn.addEventListener(`click`, createMarkup);
// function createMarkup(event) {
//     function createMarkup(event) {
//         list.forEach((item) => (item.textContent = item.textContent * 2));
//       }
// }


// При кліку на кнопку "Filter" потрібно видалити з списку позначені елементи.

// const form = document.querySelector(`.checkboxForm`);
// const checkbox = document.querySelectorAll(`.checkboxWrapper`);

// form.addEventListener(`submit`, onformSubmit);
// function onformSubmit(event) {
//     event.preventDefault();
//     const filterList = [...checkbox].filter(value => value.lastElementChild.checked)
// console.log(filterList);
// filterList.forEach((item) => item.remove())

// }


// Наведено список людей. Зроби можливість фільтрації (пошуку) за ім'ям або за прізвищем.
// const input = document.querySelector(`.contactsFilter`);
// const container = document.querySelector(`.contacts`);
// const list = [...container.children];

// input.addEventListener(`input`, onInput);
// function onInput(event) {
//     const valueInput = input.value;
//     console.log(valueInput);
//     const filterItems = list.filter((item) => item.textContent.toLocaleLowerCase().includes(valueInput));
//     container.innerHTML = "";
//     container.append(...filterItems);}


// 

// Є масив об'єктів з популярними фільмами і форма пошуку за назвою фільму.
// 1. Зроби так, щоб при першому завантаженні сторінки користувач
// бачив весь перелік фільмів (назву, рік виробництва, рейтинг і країну виробник).
// Для рендеру розмітки використовуємо шаблонні рядки та метод insertAdjacentHTML.
// 2. Реалізуй пошук потрібного фільму за назвою. При кліку на кнопку "Пошук" у
// списку залишаються тільки ті фільми, котрі мають повне або часткове співпадіння
// за назвою фільму.

// const popularMovies = [
//     {
//       title: "Avengers: Endgame",
//       year: 2019,
//       rating: 8.4,
//       country: "USA"
//     },
//     {
//       title: "Parasite",
//       year: 2019,
//       rating: 8.6,
//       country: "South Korea"
//     },
//     {
//       title: "Joker",
//       year: 2019,
//       rating: 8.5,
//       country: "USA"
//     },
//     {
//       title: "Spider-Man: Into the Spider-Verse",
//       year: 2018,
//       rating: 8.4,
//       country: "USA"
//     },
//     {
//       title: "The Irishman",
//       year: 2019,
//       rating: 7.9,
//       country: "USA"
//     },
//     {
//       title: "Knives Out",
//       year: 2019,
//       rating: 7.9,
//       country: "USA"
//     },
//     {
//       title: "Black Panther",
//       year: 2018,
//       rating: 7.3,
//       country: "USA"
//     },
//     {
//       title: "Mad Max: Fury Road",
//       year: 2015,
//       rating: 8.1,
//       country: "Australia"
//     }
//   ];
// const form = document.querySelector(`#searchForm`);
// const container = document.querySelector(`#movieList`);



// const createMarkup = popularMovies.map(movi => 
// `<li>
//     <p>Назва фільму ${movi.title} </p>
//     <p>Рік виробництва ${movi.year}</p>
//     <p>Рейтинг ${movi.rating} </p>
//     <p>Країна ${movi.country} </p>
// </li>`).join("");
// container.insertAdjacentHTML("beforeend", createMarkup);

// form.addEventListener(`submit`, onSubmit)  
// function onSubmit(event) {
//     event.preventDefault();
//     const value = event.currentTarget.searchInput.value.toLowerCase();
//     console.log(value);
//    const fulterMovis =  popularMovies.filter(movi => movi.title.toLocaleLowerCase()
//    .includes(value));
//    container.innerHTML = "";

//    const createMarkup = fulterMovis.map(movi => 
//     `<li>
//         <p>Назва фільму ${movi.title} </p>
//         <p>Рік виробництва ${movi.year}</p>
//         <p>Рейтинг ${movi.rating} </p>
//         <p>Країна ${movi.country} </p>
//     </li>`).join("");
//     container.insertAdjacentHTML("beforeend", createMarkup);


// }
