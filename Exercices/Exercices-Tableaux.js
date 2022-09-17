let fruits = ["apple", "kiwi", "banana"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.table(fruits);

let names = ["Arnaud", "Georges", "Coucou", "Jean", "Lola"];
console.table(names);

names.push("Bye");
console.table(names);

names.unshift("Nathalie");
console.table(names);

console.log(names.length);

names.pop();
console.table(names);

names.shift();

let animals = ["Dog", "Cat", "Mouse"];
console.table(animals);
console.log(animals.length);
animals.push("Elephant");
animals.unshift("Lion");
console.table(animals);
animals.shift();
animals.pop();
console.table(animals);

// var semaine = [ 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim' ];
// 1. Retirer le dernière valeur du tableau
// 2. Afficher les valeurs du tableau
// 3. Ajouter la valeur ‘dim2’ à la fin du tableau
// 4. Afficher la longueur du tableau

var semaine = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];

semaine.pop();
console.table(semaine);
semaine.push("dim2");
console.log(semaine);
semaine.length;
