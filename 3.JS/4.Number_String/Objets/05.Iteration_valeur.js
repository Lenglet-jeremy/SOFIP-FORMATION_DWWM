const chiffres = {
  a: "un",
  b: "deux",
  c: "trois",
};

for (ch in chiffres) {
  console.log(ch); //On récupére les clés
  console.log(chiffres[ch]); //On récupére les valeurs
}

const key = Object.keys(chiffres);
console.log(key);

const valeur = Object.values(chiffres);
console.log(valeur);

const all = Object.entries(chiffres);
console.log(all);
