/Créer une fonction Hello qui retourne un console.log(coucou)/;

// function accueil() {
//   return "coucou";
// }

// console.log(accueil());

let accueil = () => {
  console.log("coucou");
};
accueil();

/Créer une fonction HelloWorld avec un paramètre name et qui retourne un console.log( hello + paramètre) et on réutilise cette fonction avec son argument/;

// function HelloWorld(name) {
//   return "hello" + name;
// }

// console.log(HelloWorld(" Thierry"));

let HelloWord = (name) => {
  // console.log("hello" + name);
  console.log(`hello ${name}`);
};
HelloWord(" Thierry"),
  /Créer une fonction sum avec en paramètre a et b. Cette fonction retourne l'addition des 2 paramètre. Puis faire un console.log de cette fonction en mettant a argument des chiffres./;

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(4, 2));

let sum = (a, b) => a + b;
console.log(sum(4, 2));

/ Faire une fonction au choix qui a 2 à 3 paramétres. Mettre un console.log en concentenant les différent paramètre. Utiliser cette fonction en mettant lui mettant des arguments/;

// function exercice(accueil, genre, name, firstname) {
//   return accueil + genre + name + firstname;
// }

// console.log(exercice("Bonjour, ", "Mr ", "Dupond ", "Georges"));

let exercice = (nom, prenom, age) => {
  console.log(`je M'appelle ${nom} ${prenom} et j'ai ${age} ans.`);
};
exercice("Dupond", " Georges", "50");

//créer une fonction ou on demande a l'utilisateur 2 nombre distints et il faut la fonction retourne en console.log une multiplication des 2 nombres

let nb1 = prompt("Veuillez saisir un nombre.");
let nb2 = prompt("Veuillez saisir un second nombre.");
// function calcul(nb1, nb2) {
//   return nb1 * nb2;
// }
// console.log(calcul(nb1, nb2));

let calcul = (n1, n2) => n1 * n2;
console.log(calcul(nb1, nb2));
