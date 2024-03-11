let score = prompt("Quel est ton score ?");

const election =
  score >= 50
    ? "Vous êtes élu"
    : score < 50 && score >= 30
    ? "Vous êtes en ballotage"
    : "Vous allez finir au goulag";

console.log(election);
