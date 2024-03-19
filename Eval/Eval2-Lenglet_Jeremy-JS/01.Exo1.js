let motUtilisateur = "";
let tailleMotUtilisateur = 0;
let tabMotUtilisateur = [];

// Pour s'assurer que l'utilisateur entre une chaine de caractere
do {
  motUtilisateur = prompt("veuillez entrer un mot au format texte");
} while (
  Number(motUtilisateur) ||
  motUtilisateur === "" ||
  motUtilisateur === "0"
);

// Assignation de chaque lettres dans un tableau
tailleMotUtilisateur = motUtilisateur.length;
for (let i = 0; i < tailleMotUtilisateur; i++) {
  tabMotUtilisateur[i] = motUtilisateur[i];
}

// Presentation du résultat à l'utilisateur
alert(
  "Votre mot et composé de " +
    tailleMotUtilisateur +
    " lettres, et est composer des lettres suivantes : " +
    tabMotUtilisateur
);
