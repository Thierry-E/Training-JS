// Exercice N°1 : faire une boucle dans ce tableau

var array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//Exercice N°2

const message = [
  "X",
  "X",
  "X",
  "X",
  "W",
  "X",
  "E",
  "X",
  "X",
  "X",
  "X",
  "X",
  "L",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "L",
  "X",
  "X",
  "X",
  "X",
  "X",
  "A",
  "X",
  "X",
  "X",
  " ",
  "X",
  "X",
  "X",
  "S",
  "X",
  "X",
  "X",
  "X",
  "D",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "P",
  "X",
  "X",
  "B",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "O",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "N",
  "X",
  "X",
  "X",
];

let decode = [];

for (let i = 0; i < message.length; i++) {
  if (message[i] !== "X")
    if (message[i] !== "A")
      if (message[i] !== "B")
        if (message[i] !== "Q")
          if (message[i] !== "P")
            if (message[i] !== "S") decode.push(message[i]);
}
console.log(decode);

//Exercice N°3
var eleves = ["Jean", "Marc", "Marie"];
let name = [];

for (let i = 0; i < eleves.length; i++) {
  name.push(eleves[i]);
}
console.log(name);

//Exercice N°4
constVideosGames = [
  ["LaraCroft", 2001],
  ["MarioKart", 1992],
  ["Zelda", "1986"],
];

let games = [];

for (let i = 0; i < constVideosGames.length; i++) {
  for (let j = 0; j < constVideosGames[i].length; j++) {
    // games.push(constVideosGames[j]);
    console.log(constVideosGames[i][j]);
  }
}
