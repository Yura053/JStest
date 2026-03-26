// const username = "Poly";
// const message = "Welcome " + username + "!";
// console.log(message);

// const guestName = "Mango";
// const roomNumber = 207;
// const greeting =
//   "Welcome " + guestName + ", your room number is " + roomNumber + "!";
// console.log(greeting);

// const questName = "Mango";
// const roomNumber = 207;
// const greeting =
//   "Welcome " + questName + ", your room number is " + roomNumber + "!";

// console.log(greeting);

// const guestName = "Mango";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting);

// const guestName = "Mango";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting);

// const productName = "Droid";
//  const pricePerItem = 3500;

// const message =
//   "You picked " +
//   productName +
//   " price per item is " +
//   pricePerItem +
//   " credits ";

// console.log(message);
// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits`;
// console.log(message);

// const username = "Poly";
// const message = `Username ${username} is ${username.length} characters long`;

// const username = "poly";
// const message = `Username ${username} is ${username.length} characters long`;
// console.log(message);

// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength - 1];
// console.log(courseTopic);

// const age = 16;
// const isAdult = age >= 18;

// const correctPassword = "jqueryismyjam";
// const userPassword = "mangodab3st";
// const isValid = correctPassword === userPassword;
// console.log(isValid);

// const correctPassword = "jqueryismyjam";
// const userPassword = "mangodab3st";
// const isValid = correctPassword === userPassword;
// console.log(isValid);

// const value = "24.5px";
// const numerical = parseFloat(value);
// console.log(numerical);

// const value = "24.5px";
// const numerical = parseFloat(value);
// console.log(numerical);

// function sayHi(sayHi) {
//   console.log("Hello, this is my first function!")
// }

// function add(a, b, c) {
//   const result = a + b + c;
//   console.log(`Addition result equals ${result}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {
//   return a + b + c;
// }

// function makeMessage(name, price) {
//   return `You picked ${name}, price per item is ${price} credits`;
// }

// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }
// }
// console.log(checkAge(20)); // "You are an adult"
// console.log(checkAge(17)); // undefined
// console.log(checkAge(10)); // undefined
// console.log(checkAge(30)); // "You are an adult"

// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }
// }
// console.log(checkAge(20));
// console.log(checkAge(17));
// console.log(checkAge(10));
// console.log(checkAge(30));

// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return "Not enough goods in stock!";
//   } else {
//     return "Order is processed, our manager will contact you";
//   }
// }
// // console.log(checkStorage);
// console.log(available);
// console.log(ordered);

// if (ordered === 0) {
//   return "There are no products in the order!";
// } else if (ordered > available) {
//   return "Your order is too large, there are not enough items in stock!";
// } else {
//   return "The order is accepted, our manager will contact you";
// }

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   return password === correctPassword
//     ? "Access granted"
//     : "Access denied, wrong password!";
// }

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       return 0;
//     case "professional":
//       return 20;
//     case "organization":
//       return 50;
//     default:
//       return "Invalid subscription type!";
//   }
// }
// console.log(getSubscriptionPrice);

// function getSubscriptionPrice(type) {
//     switch (type) {
//         case "starter":
//             return 0;
//         case "professional":
//             return 20;
//         case "organization":
//             return 50;
//         default:
//             return "Invalod subscription type!";
//     }
// }

// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end;
// }
// console.log(isNumberInRange);

// function isNumberInRange(start, end, number) {
//     return number >= start && number <= end;
// }

// function checkAccess(subType) {
//   return subType === "pro" || subType === "vip";
// }

// function checkAccess(subType) {
//     return subType === "pro" || subType === "vip";
// }

// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }

// function normalizeInput(input, to) {
//   if (to === "upper") {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }

//   function checkForName(fullName, firstName) {
//     const normalizedFullName = fullName.toLowerCase();
//     const normalizedFirstName = firstName.toLowerCase();

//     return normalizedFullName.includes(normalizedFirstName);
//   }
// function checkForName(fullName, firstName) {
//   const normalizedFullName = fullName.toLowerCase();
//   const normalizedFirstName = firstName.toLowerCasw();

//   return nirmalizedFullNmae.includes(normalizedFirstNam);
// }

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return "File extension matches";
//   } else {
//     return "File extension does not match";
//   }
// }

// function checkFileExtension(fileName, ext) {
//     if (fwleName.endsWidth(ext)) {
//         return "File extension matches";
//     } else {
//         return "File extension does not match"

//     }
// }

// function getFileName(file) {
//   const dotIndex = file.indexOf(".");

//   if (dotIndex === -1) {
//     return file;
//   }

//   return file.slice(0, dotIndex);
// }

// function createFileName(name, ext) {
//   const trimmedName = name.trim();
//   return `${trimmedName}.${ext}`;
// }

// function calculateTotal(number) {
//   let total = 0;
//   let i = 1;
//   while (i <= number) {
//     total += i;
//     i++;
//   }
//   return total;
// }

// function calculateTotal(number) {
//     let total = 0;
//     let i = 0;
//     while (i <= number) {
//         total += i;
//         i++;
//     }
//     return total;
// }
//

// function calculateTotal(number) {
//   let sum = 0;

//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }

//   return sum;
// }

// function calculateEvenTotal(number) {
//   let total = 0;

//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//       total += i;
//     }
//   }
//   return total;
// }

// const start = 6;
// const end = 17;
// let number;
// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// const start = 6;
// const end = 17;
// let number;
// for (let i = start; i <= end; i++) {
//     if (i % 5 === 0) {
//         number = i;
//         break;
//     }
// }

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) number = i;
//     break;
//   }
// }
// console.log(findNumber(2, 6, 5));

// function getLastElementMeta(array) {
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];
//   return [lastElementIndex, lastElement];
// }
// console.log(getLastElementMeta);

// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   return [firstElement, lastElemen];
// }
// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   return [firstElement, lastElement];
// }

// function getLength(array) {
//   const words = array.join("");
//   return words.length;
// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
// // 22

// console.log(getLength(["M", "a", "n", "g", "o"]));
// 5

// function calculateEngavingPrice(message, pricePerWord) {
//   const words = message.split(" ");
//   const totalPrice = words.length * pricePerWord;
//   return totalPrice;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// // 50

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2, 5);
// console.log(fruits);

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);
// console.log(oldClients);
// console.log(allClients);

// function getSlice(array, value) {
//   const index = array.indexOf(value);
//   if (index === -1) {
//     return [];
//   }
//   //   return array.slice(0, index + 1);
// }
// console.log(getSlice(array, value));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   return numbers;
//   console.log(createArrayOfNumbers(1, 3));
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(29, 34));

// function calculateTotalprice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
// }

// // 138

// function getEvenNumbers(start, end) {
//   const numbers = [];

//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }

//   return numbers;
// }
// console.log(getEvenNumbers(2, 5));
// // [2, 4]

// console.log(getEvenNumbers(7, 7));
// // []

// function checkStorage(storage, item) {
//   const normalizedItem = item.toLowerCase();
//   for (const product of storage) {
//     if (product.toLowerCase() === normalizedItem) {
//       return `${product} is available to order!`;
//     }
//   }
//   return "Sorry! We are out of stock!";
// }
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
// console.log(checkStorage(["apple", "plum", "pear"], "orange"));

// function getCommonElements(array1, array2) {
//   const numbers = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       numbers.push(array1[i]);
//     }
//   }
//   return numbers;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const number of order) {
//     total += number;
//   }
//   return total;
// }

// function createReversedArray() {
//   const args = Array.from(arguments);
//   args.reverse();
//   return args;
// }
// console.log(createReversedArray(1, 2, 3));

// function calculateTax(amount, taxRate = 0.2) {
//   const calculate = amount * taxRate;
//   return calculate;
// }
// console.log(calculateTax(100, 0.1)); // очікуємо 10
// console.log(calculateTax(200));

// Task 4
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// console.log(apartment);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";

// // apartment.tags.push =("trusted");

// apartment.tags = ["premium", "promoted", "top", "trusted"];

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
//   location: {},
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = [];

// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   const keys = Object.keys(countProps);

//   return propCount;
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
// console.log(countTotalSalary({})); // 0

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const prod of products) {
//     if (prod.name === productName) {
//       return prod.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice("Radar")); // 1300
// console.log(getProductPrice("Grip")); // 1200
// console.log(getProductPrice("Scanner")); // 2700
// console.log(getProductPrice("Droid")); // 400
// console.log(getProductPrice("Engine")); // null

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const values = [];
//   for (const product of products) {
//     if (propName in product) {
//       values.push(product[propName]);
//     }
//   }
//   return values;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("category"));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return `Product ${productName} not found!`;
// }
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
// console.log(calculateTotalPrice("Blaster"));

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };
// atTheOldToad.getPotions();
// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };
// console.log(atTheOldToad.getPotions());

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
//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };
// console.log(atTheOldToad.getTotalPrice());

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.potions);

// atTheOldToad.updatePotionName("Speed potion", "Polymorth");
// console.log(atTheOldToad.potions);

// function addOverNum(value, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (arg > value) {
//       total += arg;
//     }
//   }
//   return total;
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// function getExtremeScores(scores) {
//   const best = Math.max(...scores);
//   const worst = Math.min(...scores);

//   return {
//     best: best,
//     worst: worst,
//   };
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

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
//   ...overrideSettings,
// };
// console.log(finalSettings);

///////////////////////////// TASK 5
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza();

// const pointer = makePizza;

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {});

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });

//   return totalPrice;
// }
// function filterArray(numbers, value) {
//   const total = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       total.push(number);
//     }
//   });
//   return total;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// console.log(calculateTotalPrice);

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

/////////////////////////////////////////////////////////
// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }

// // з верху початкове з низу змінив

// function changeEven(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }
//////////////////////////////////////////////////

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map((planet) => planet.length);
// console.log();

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
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map((book) => book.title);

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

// const genres = books.flatMap((book) => book.genres);

// const getUserEmails = (users) => {
//   return users.map((user) => user.email);
// };
// console.log(getUserEmails);

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((numb) => numb % 2 !== 0);

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
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter((ratin) => ratin.rating >= MIN_RATING);
// const booksByAuthor = books.filter((aut) => aut.author === AUTHOR);

// const getUsersWithEyeColor = (users, color) => {
//   const colorelov = users.filter((user) => user.eyeColor === color.);
//   return colorelov;
// };

// const getUsersWithAge = (users, minAge, maxAge) => {
//   const userAge = users.filter(
//     (user) => user.age >= minAge && user.age <= maxAge,
//   );
//   return userAge;
// };
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
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Tell-Tale Heart";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((bybook) => bybook.author === AUTHOR);

// const getUserWithEmail = (users, email) => {
//   const getUser = users.find((idEmail) => idEmail.email === email);
//   return getUser;
// };

// const isEveryUserActive = (users) => {
//   const everyUsers = users.every((user) => user.isActive === true);
//   return everyUsers;
// };

// const isAnyUserActive = (users) => {
//   const anyUser = users.some( user => user.isActive );
//   return anyUser;
// };

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc, item) => acc + item);

// const averagePlayTime = totalPlayTime / playtimes.length;

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);

// const calculateTotalBalance = (users) => {
//   return users.reduce((acc, user) => {
//     return acc + user.balance;
//   }, 0);
// };

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Edgar Allan Poe",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// /////сортию з малого до більшого
// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);
// //// сортирує з великого до меншого
// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Edgar Allan Poe",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

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
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];
// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.

// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

// const sortedByAuthorName = books.toSorted((a, b) =>
//   a.author.localeCompare(b.author),
// );

// const sortedByReversedAuthorName = books.toSorted((a, b) =>
//   b.author.localeCompare(a.author),
// );

// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);

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
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
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

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((a, b) => a.localeCompare(b));

////////// TAAASSKK 6 /////////////////

// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// Метод checkPizza об'єкта pizzaPalace використовує this
// Метод order об'єкта pizzaPalace використовує this
// Виклик pizzaPalace.order("Smoked") повертає рядок "Order accepted, preparing «Smoked» pizza"
// Виклик pizzaPalace.order("Four meats") повертає рядок "Order accepted, preparing «Four meats» pizza"
// Виклик pizzaPalace.order("Big Mike") повертає рядок "Sorry, there is no pizza named «Big Mike»"
// Виклик pizzaPalace.order("Viennese") повертає рядок "Sorry, there is no pizza named «Viennese»"
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// class Car {}

// new Car()

// Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля
// model - модель автомобіля
// price - ціна автомобіля
// Клас Car повинен створювати об'єкт з одноіменними властивостями brand, model і price, які отримують свої значення з аргументів, переданих при створенні нового екземпляра за допомогою оператора new.

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car("Audi", "Q3", 36000) утвориться об'єкт {brand: "Audi", model: "Q3", price: 36000}
// В результаті виклику new Car("BMW", "X5", 58900) утвориться об'єкт {brand: "BMW", model: "X5", price: 58900}
// В результаті виклику new Car("Nissan","Murano", 31700) утвориться об'єкт {brand: "Nissan", model: "Murano", price: 31700}
// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price.

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 }) утвориться об'єкт {brand: "Audi", model: "Q3", price: 36000}
// В результаті виклику new Car({ brand: "BMW", model: "X5", price: 58900 }) утвориться об'єкт {brand: "BMW", model: "X5", price: 58900}
// В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 }) утвориться об'єкт {brand: "Nissan", model: "Murano", price: 31700}

// class Car {
//   constructor({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// const mango = new Car ({

// })

// Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на значення параметра newPrice.
// В класі Car оголошений метод getPrice
// Метод getPrice повертає значення властивості price екземпляра класу, який його викликає
// В класі Car оголошений метод changePrice
// Метод changePrice змінює значення властивості price екземпляра класу, який його викликає

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
//   getPrice(){
//     return this.price;
//   }
//   changePrice(newPrice){
//     return this.price = newPrice;
//   }
// }

// Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.
// Оголошений клас Car
// Властивість brand в класі Car оголошена приватною
// Конструктор класу приймає об'єкт з властивостями brand, model і price
// В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 }) утвориться об'єкт { model: "Q3", price: 36000 }
// В результаті виклику new Car({ brand: "bmw", model: "X5", price: 58900 }) утвориться об'єкт { model: "X5", price: 58900 }
// В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 }) утвориться об'єкт { model: "Murano", price: 31700 }
// В екземпляра відсутня публічна властивість brand
// Метод getBrand() повертає значення приватної властивості brand
// Метод changeBrand("Honda") змінює значення приватної властивості brand на "Honda"
// class Car {

//   #brand;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// Виконано
// Завдання 1/1
// Виконай рефакторинг класу Car. Додатково до приватної властивості #brand зроби приватними властивості model і price. Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на геттери та сеттери brand, model і price, для взаємодії з приватними властивостями.

// Оголошений клас Car
// В класі Car оголошена приватна властивість brand
// В класі Car оголошена приватна властивість model
// В класі Car оголошена приватна властивість price
// Конструктор класу приймає параметр params, який є об'єктом з властивостями brand, model і price
// В класі Car оголошений геттер brand
// В класі Car оголошений сеттер brand
// В класі Car оголошений геттер model
// В класі Car оголошений сеттер model
// В класі Car оголошений геттер price
// В класі Car оголошений сеттер price
// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }

//   getbrand() {
//     return this.#brand;
//   }

//   setbrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   getmodel() {
//     return this.#model;
//   }

//   setmodel(newModel) {
//     this.#model = newModel;
//   }

//   getprice() {
//     return this.#price;
//   }

//   setprice(newPrice) {
//     this.#price = newPrice;
//   }
// }

// Виконай рефакторинг класу Car. Додай публічну статичну властивість maxPrice зі значенням число 50000 - максимально допустима ціна автомобіля.

// Додай сеттеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за maxPrice, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// Під оголошенням класу ми додали ініціалізації екземплярів і виклики методів, щоб показати, як будуть використовуватися геттери і сеттери price.

// Оголошений клас Car
// Клас Car містить статичну властивість maxPrice
// Значення статичної властивості maxPrice - це число 50000
// Екземпляр не містить властивості maxPrice
// В класі Car оголошений геттер price
// В класі Car оголошений сеттер price
// Виклик сеттера price в екземпляра класу, зі значенням аргументу меншим за значення maxPrice, змінює властивість #price
// Виклик сеттера price в екземпляра класу, зі значенням аргументу більшим за значення maxPrice, не змінює властивість #price

// class Car {
//   #price;
//  static maxPrice = 50000;
//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//      if (newPrice > Car.maxPrice){
//        return
//      } else{
//        this.#price = newPrice
//      }
//     this.#price = newPrice;
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).

// Оголошений клас Car
// Клас Car містить статичний метод checkPrice(price)
// Виклик Car.checkPrice(36000) повертає рядок "Success! Price is within acceptable limits"
// Виклик Car.checkPrice(18000) повертає рядок "Success! Price is within acceptable limits"
// Виклик Car.checkPrice(64000) повертає рядок "Error! Price exceeds the maximum"
// Виклик Car.checkPrice(57000) повертає рядок "Error! Price exceeds the maximum"

// class Car {
//   static #maxPrice = 50000;
//     static checkPrice(price) {
//     if (price > Car.#maxPrice) {
//       return "Error! Price exceeds the maximum";
//     }else{
//        return "Success! Price is within acceptable limits";
//     }

//   }
//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість role (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}
// Оголошений клас Admin
// Клас Admin наслідується від класу User
// Клас Admin містить публічну статичну властивість role
// Звернення до Admin.role.BASIC повертає рядок "basic"
// Звернення до Admin.role.SUPERUSER повертає рядок "superuser"

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
//  class Admin extends User {
//   static role = {BASIC: "basic", SUPERUSER: "superuser"}
// };

// Додай класу Admin метод constructor, який приймає один параметр params- об'єкт налаштувань з двома властивостями email і access. Додай класу Admin публічну властивість access, значення якої буде передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.

// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну статичну властивість role
// Клас Admin містить метод constructor з параметром params
// В класі Admin в конструкторі для властивості email використовується звернення до конструктора батьківського класу
// Звернення до Admin.role.BASIC повертає рядок "basic"
// Звернення до Admin.role.SUPERUSER повертає рядок "superuser"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor(params){
//     super(params.email);
//     this.email;
//     this.access;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну властивість blacklistedEmails
// Клас Admin містить публічний метод blacklist
// Клас Admin містить публічний метод isBlacklisted
// Після виклику mango.blacklist("poly@mail.com") значення властивості blacklistedEmails - це масив ["poly@mail.com"]
// Виклик mango.isBlacklisted("mango@mail.com") повертає false
// Виклик mango.isBlacklisted("poly@mail.com") повертає true

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor(params) {
    super(params.email);
    this.access = params.access;
    this.blacklistedEmails = [];
  }
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
