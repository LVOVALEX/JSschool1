//       1

//function makePizza() {
//  return "Your pizza is being prepared, please wait.";
//}
// Change code below this line

//const result = makePizza();
//const pointer = makePizza;

//console.log(result);
//console.log(pointer);

//      2                                             ЗАПИТАТИ

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// makeMessage("Uncle", makePizza);
// console.log("Uncle", makePizza); //                   не виводить в косоль

//      3

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

//      4

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

//   5

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach((element) => (totalPrice += element));

//   //   for (let i = 0; i < orderedItems.length; i += 1) {
//   //     totalPrice += orderedItems[i];
//   //   }

//   // Change code above this line
//   return totalPrice;
// }
// console.log(totalPrice);

//     6

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach((number) => {
//     //filteredNumbers += number)

//     // for (let i = 0; i < numbers.length; i += 1) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

//     7

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach((element) => {
//     //  for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

//     8

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// };
// console.log(calculateTotalPrice(5, 100));

//   9

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// console.log(calculateTotalPrice(8, 60));

// // Change code above this line

//          10

// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// // Change code above this line
// console.log(calculateTotalPrice([12, 85, 37, 4]));

//      11

// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));

//    12

// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// };
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

//    13

// function changeEven(numbers, value) {
//   // Change code below this line

//   const newArray = [];

//   numbers.forEach((element) => {
//     //    for (let i = 0; i < numbers.length; i += 1) {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     } else {
//       newArray.push(element);
//     }
//   });
//   return newArray;
//   // Change code above this line
// }
// console.log(changeEven([17, 24, 68, 31, 42], 100));

//    14

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);

//    15

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map((book) => book.title);

// console.log(titles);

//    16

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap((book) => book.genres);

// console.log(genres);

//      19

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

//    20

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);

//    21

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books;
// const booksByAuthor = books;

/**
// *? Поверніть об'єкт, в якому вказано кількість тегів.
// *? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

//  */
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const allTags = tweets.flatMap((tweet) => tweet.tags);
// const itLanguage = allTags.reduce(
//   (acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }),
//   {}
// );
// console.log(itLanguage);

// /**
//  *?     При помощи цикла for сложите все четные числа от  min до max
//  */

// const max = 50;
// const min = 0;
// let sum = 0;

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 === 0) sum += i;
//   console.log(i);
// }
// console.log(sum);

// const arr = [];

// if (arr.length === 0) {
//   console.log("Порожній масив");
// }

// const obj = {};

// if (Object.keys(obj).length === 0) {
//   console.log("Free");
// }

//     ОБОВЯЗКОВО ЗРОБИТИ

// function accum(s) {}
// accum("Swfsw");
// accum("ers");

// S-Ww-Fff-Ssss-Wwwww
// E-Rr-Sss

//    21

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// console.log(booksByAuthor);

// 28

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// console.log(bookWithTitle);

//    30

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((arr) => arr % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((arr) => arr % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((arr) => arr % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((arr) => arr % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((arr) => arr % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((arr) => arr % 2 !== 0);

// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

// 31

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((arr) => arr % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((arr) => arr % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((arr) => arr % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((arr) => arr % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((arr) => arr % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((arr) => arr % 2 !== 0);

// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);

//   35

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const playTime = players.map((play) => play.playtime / play.gamesPlayed);
// const totalAveragePlaytimePerGame = playTime.reduce((acc, player) => {
//   return acc + player;
// }, 0);

//     38

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = releaseDates;

// const alphabeticalAuthors = authors;

//  41

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstName, secondName) =>
//   firstName.author.localeCompare(secondName.author)
// );

// const sortedByReversedAuthorName = [...books].sort((firstName, secondName) =>
//   secondName.author.localeCompare(firstName.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (doun, top) => doun.rating - top.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (doun, top) => top.rating - doun.rating
// );

// console.log(sortedByDescentingRating);

//  45

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter((rating, index, array) => rating.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a, b) => a.localeCompare(b));

// console.log(names);

//    5

//  1

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};
