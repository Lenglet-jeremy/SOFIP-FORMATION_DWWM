let score1 = 0; // Score personnelle
let score2 = 0;
let score3 = 0;
let score4 = 0;
let totalScore = 0;
let maxScore = 0;
let minScore = 0;

do {
  score1 = Number(prompt("Veuillez entrer votre score"));
  score2 = Number(prompt("Veuillez entrer le score du 2e candidat"));
  score3 = Number(prompt("Veuillez entrer le score du 3e candidat"));
  score4 = Number(prompt("Veuillez entrer le score du 4e candidat"));
  totalScore = score1 + score2 + score3 + score4;
  if (totalScore !== 100) {
    alert("Le score doit être ègal  à 100");
    alert("Le total des score est de : " + totalScore);
  }
} while (totalScore !== 100);

maxScore = Math.max(score1, score2, score3, score4);
minScore = Math.min(score1, score2, score3, score4);

if (score1 > 50) {
  alert("Vous étes élu.");
} else if (score1 < 12.5 || score2 > 50 || score3 > 50 || score4 > 50) {
  alert("Vous étes éliminé");
} else if (score1 === maxScore) {
  alert("Vous êtes en ballotage favorable");
} else {
  alert("Vous étes en ballotage défavorable");
}
