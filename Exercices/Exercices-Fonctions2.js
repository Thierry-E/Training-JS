let calcul = (a, b) => {
  return a - b;
};
console.log(calcul(10, 3));

let login = (name, password) => {
  if (name === "Bob" && password === "coucou") {
    return true;
  } else {
    return false;
  }
};

login("Bob", " coucou");

let username = prompt("Entrez votre nom");
let userpassword = prompt("Entrez votre mot de passe");

if (login(username, userpassword)) {
  console.log("Welcome");
} else {
  console.log("Wrong Password");
}
