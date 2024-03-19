let phraseUtilisateur = "";
let taillePhraseUtilisateur = 0;
let tabPhraseUtilisateur = [];

// Pour s'assurer que l'utilisateur entre une chaine de caractere
do {
  phraseUtilisateur = prompt("veuillez entrer une phrase au format texte");
} while (
  Number(phraseUtilisateur) ||
  phraseUtilisateur === "" ||
  phraseUtilisateur === "0"
);

tabPhraseUtilisateur = phraseUtilisateur.split(/[' ]/);
// tabPhraseUtilisateur = phraseUtilisateur.split("'");

alert(
  "Votre phrase est composé de " +
    tabPhraseUtilisateur.length +
    " mots, et est composé comme tel : " +
    tabPhraseUtilisateur
);
