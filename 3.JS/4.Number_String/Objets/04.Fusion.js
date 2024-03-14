const car = {
  marque: "audi",
  couleur: "noire",
  annee: 2019,
};

const car2 = {
  automatique: false,
  prix: 25000,
  caractéristique: {
    puissance_reel: "250cv",
    puissance_fiscale: "8cv",
  },
  addPrice: function () {
    car.prix += 500;
  },
};

const newCar = { ...car, ...car2 };
console.log(newCar);
