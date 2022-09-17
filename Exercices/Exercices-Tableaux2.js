// Exercice 1
const fruits = ["Kiwi", "Apple", "Pineapple"];
console.log(fruits.includes("Kiwi"));
console.log(fruits.includes("Banana"));

console.log(fruits.indexOf("Apple"));

const fruitsStrings = fruits.join();
console.log(fruitsStrings);

const fruitsStrings2 = fruits.join("-");
console.log(fruitsStrings2);

const fruitsStrings3 = fruits.join("*");
console.log(fruitsStrings3);

const fruitsStrings4 = "Kiwi, Apple, Pineapple";
const fruitsSplit = fruitsStrings4.split(",");
console.log(fruitsSplit);

// Exercice 2

const myArray = ["hello", true, "world", 42];
console.log(myArray.slice());
console.log(myArray.slice(1));
console.log(myArray.slice(1, 3));
console.log(myArray.slice(-1));

// Exercice 3

const fruits1 = ["Apple", "Strawberry"];
const fruits2 = ["Banana", "Pineapple"];
const fruits3 = fruits1.concat(fruits2);

console.log(fruits3);

// Exercice 4

const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myArray2.reverse();
console.log(myArray2);

//Exercice 5

const fruits6 = ["Kiwi", "Apple", "Pineapple", "Kiwi"];

console.log(fruits6.sort());

//Exercice 6

const numbers = [1, 20, 45, 2, 3, 5, 8];

console.log(numbers.sort());
console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
);

console.log(
  numbers.sort(function (a, b) {
    return a + b;
  })
);

// Exercice N°7 : appliqué sur ce tableau
// includes, indexOf, join avec different arguments,
// split, un concat avec avec autre tableaux
// de votre choix, un reverse et pour finir un sort

const name = ["Arnaud", "max", "Mathis", "Raymond", "Jean"];

console.log(name.includes("max"));
console.log(name.indexOf("Raymond"));

const identity = name.join("|");
console.log(identity);

const identity2 = identity.split();
console.log(identity2);

const name2 = ["Camille", "lola", "Fanny", "Virginie", "Melanie"];

const name3 = name.concat(name2);
console.log(name3);

console.log(name3.reverse());

console.log(name2.sort());

// Exercice N°8 : Boucler dans le grand tableau et les petits tableaux.

const NameFruit = [
  ["Apple", "Mathis"],
  ["orange", "Paul"],
  ["Luc", "Peach"],
];

let NameFruits2 = [];

for (let i = 0; i < NameFruit.length; i++) {
  for (let j = 0; j < NameFruit[i].length; j++) {
    NameFruits2.push(NameFruit[i][j]);
  }
}
console.log(NameFruits2);

// Exercice N°8 : Faire une boucle dans un objet

const fruits18 = [
  { name: "apple", color: "green" },
  { name: "Pineapple", color: "yellow" },
  { name: "Orange", color: "orange" },
  { name: "Cherry", color: "red" },
];

for (let i = 0; i < fruits18.length; i++) {
  console.log(`${fruits18[i].name} - ${fruits18[i].color}`);
}

//Exercice N°9 :

const plants = [
  ["🌳", "🌴", "🌱"],
  ["🌿", "🍀"],
  ["🎍", "🎋", "🍃"],
  ["🍂", "🍁"],
];

for (let i = 0; i < plants.length; i++) {
  for (let j = 0; j < plants[i].length; j++) {
    console.log(plants[i][j]);
  }
}

//Exercice N°10:
const person = {
  firstName: "Bob",
  lastName: "Doe",
  city: "Berlin",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

//Exercice N°11 :
const apple = {
  name: "Apple",
  color: "Green",
  shape: "Round",
};
for (let key in apple) {
  console.log(`${key} : ${apple[key]}`);
}
