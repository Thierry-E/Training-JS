//Programation Orienté Objet

//Excercice N°1 :

const createPerso = (name, level, emoji, attackName) => {
  const persos = {};
  persos.name = name;
  persos.level = level;
  persos.emoji = emoji;
  persos.attackName = attackName;
  return persos;
};

const listPersos = [createPerso("Spiderman", 10, "🕷️", "Spidernet")];
console.log(listPersos);
