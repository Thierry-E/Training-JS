//Exercice N°1

const fruits = [
  { name: "apple", color: "red" },
  { name: "Pineapple", color: "yellow" },
  { name: "Orange", color: "orange" },
  { name: "Cherry", color: "red" },
];

//concatenation esscript6
for (let i = 0; i < fruits.length; i++) {
  console.log(`fruits${i}: ${fruits[i].name}-${fruits[i].color}`);
}
