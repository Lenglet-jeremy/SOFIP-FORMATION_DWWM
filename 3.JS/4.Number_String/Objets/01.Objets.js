//Déclaration d'Objet
const Objet = {};
//Exemple
const Car = {
  marque: "audi",
  couleur: "noire",
  annee: 2019,
  automatique: false,
  caracteristique: {
    puissance_reel: "250cv",
    puissance_fiscale: "8cv",
  },
  addPrice: function () {
    Car.prix += 500;
  },
};

console.log(Car);
console.log(Car.annee);
console.log(Car["automatique"]);
console.log(Car.caracteristique.puissance_reel);
//En modifiant l'objet copié, on modifie aussi l'original
const Car2 = Car;
console.log(Car2);
console.log(Car);
Car.addPrice();
console.log(Car);
Car.automatique = true;
