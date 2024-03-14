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

// if(Car.marque)
//   if(Car.hasOwnProperty("marque"))

if (car.marque) {
  console.log("Cette clé existe");
} else {
  console.log("Cette clé n'existe pas");
}

//Supprimer des propriétés
delete Car.couleur;
console.log(Car);
