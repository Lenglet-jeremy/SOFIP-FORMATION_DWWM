let entree_utilisateur = 0;

let total = 0;
let nb_article = 0;
let continu = false;

do {
  entree_utilisateur = prompt(
    `Donne moi le prix de tes articles et j'en ferais la somme ! \n 
    Une fois fini tape : FIN`
  );
  if (entree_utilisateur !== "FIN") {
    continu = true;
    total += Number(entree_utilisateur);
    nb_article++;
  } else {
    continu = false;
  }
} while (continu);

alert(
  // "Votre montant s'élève à : " + total + "€ pour " + nb_article + " article(s)"
  `Votre montant s'élève à : " + ${total} + "€ pour " + ${nb_article} + " article(s)`
);
