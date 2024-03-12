let NumberToFind = Math.round(Math.random() * 99) + 1;
let NbEssai = 0;
let NumberTried = 0;

do {
  NumberTried = prompt(`Essayez de trouver un le nombre entre 1 et 100`);
  NumberTried = Number(NumberTried);
  NbEssai++;

  if (NumberTried > NumberToFind) {
    alert("Plus bas !");
  } else if (NumberTried < NumberToFind) {
    alert("Plus haut ! ");
  } else {
    alert(
      "Félicitation ! Vous avez trouve le bon nombre ! En " +
        NbEssai +
        " essaie(s) !"
    );
    break;
  }
} while (NumberTried !== NumberToFind);
