const panier = [
  { name: "Manettes", qte: 2, price: 50 },
  { name: "Switch", qte: 1, price: 299 },
  { name: "Mario Kart", qte: 2, price: 39 },
];

// Reduce sert à boucler sur un tableau, à récupérer des valeurs(nom, calcul),
// et à stocker notre choix dans une variable acc (accumulateur)
// que l'on définit avant la dernière parenthése fermante et qui peut être de tout type
const total = panier.reduce((acc, value) => {
  acc += value.price * value.qte;
  return acc;
}, 0);

console.log(total);

const nomArticles = panier.reduce((acc, value) => {
  acc.push(value.name);
  return acc;
}, []);

console.log(nomArticles);
