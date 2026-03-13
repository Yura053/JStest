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

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {
  ...defaultSettings,
  ...overrideSettings,
};
console.log(finalSettings);
