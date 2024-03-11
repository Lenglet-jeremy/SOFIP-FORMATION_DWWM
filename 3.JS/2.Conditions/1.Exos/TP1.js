// TP1
// let nombre = prompt("Saisissez un nombre");
// const resultat = nombre > 0 ? "Ton nombre est positif" :
//                  nombre < 0 ? "Ton nombre est négatif" :
//                  "Ton nombre est nul";

// console.log(resultat);
// /TP1

// TP2
// const jour = prompt("Saisissez un nombre de semaine");

// let resultat;

// switch (jour) {
//   case "1":
//   case "2":
//   case "3":
//   case "4":
//   case "5": {
//     resultat = "C'est un jour de semaine";
//     break;
//   }

//   case "6":
//   case "7": {
//     resultat = "C'est un jour de Week-end";
//     break;
//   }

//   default: {
//     resultat = "Ton jour n'existe pas";
//     break;
//   }
// }

// console.log(resultat);
// /TP2

// TP3
let montant = prompt("Quel est votre montant d'achat ?");

const remise =
  montant >= 500
    ? "Remise : 10% : " + montant * 0.9 + "€"
    : montant >= 100
    ? "Remise : 5% : " + montant * 0.95 + "€"
    : "Remise : 0% : " + montant + "€";
alert(remise);
// /TP3

// TP4

let age = prompt("Quel age avez-vous ?");
let deja_inscrit = prompt("Etes-vous déjà inscrit ? o/n");

const cotisations = "";

if (age >= "18" && age <= "65" && deja_inscrit === "o") {
  alert("Cotisation : 10 €");
} else if (age >= "18" && age <= "65" && deja_inscrit === "n") {
  alert("Cotisation : 15 €");
} else if (age < "18" && deja_inscrit === "o") {
  alert("Gratuit !!! ");
} else {
  alert("Cotisation : 8 €");
}
// /TP4
